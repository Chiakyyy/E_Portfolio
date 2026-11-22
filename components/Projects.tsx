// This client component creates the scroll driven stacked showcase deck of featured projects.
"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Shield, Camera, Leaf, Activity, Utensils, CheckCircle, Database, ChevronRight, Smartphone, Sparkles, Layers } from "lucide-react";
import ProjectModal, { ProjectItem } from "./ProjectModal";

// This array defines the showcase project entries with detailed specifications.
const projectsList: ProjectItem[] = [
  {
    id: "gconstat",
    title: "GConstat & My_Expert",
    subtitle: "Automotive Insurance Claim Assessment & SkiaSharp Diagramming Suite",
    description:
      "Enterprise mobile platform built for loss adjusters and policyholders. Features hardware camera integration, offline-first SQLite synchronization, and interactive vehicle damage blueprint sketching with SkiaSharp.",
    tags: [".NET MAUI", "SkiaSharp", "SQLite", "Firebase"],
    type: "insurance",
    stats: [
      { label: "Sync Engine", value: "Offline-First" },
      { label: "Rendering", value: "SkiaSharp 2D" },
      { label: "Storage", value: "SQLite Encrypted" },
    ],
  },
  {
    id: "deepleaf",
    title: "DeepLeaf AI & Native SDKs",
    subtitle: "Edge Machine Learning Crop Diagnostics & Cross-Platform Bridge SDK",
    description:
      "Dual Flutter and React Native diagnostic application powered by quantized TensorFlow Lite models running directly on device chips for instant offline plant disease classification with sub-20ms latency.",
    tags: ["Flutter", "React Native", "TFLite", "SQLite"],
    type: "ai",
    stats: [
      { label: "Inference", value: "14ms On-Device" },
      { label: "Model Size", value: "4.8 MB Quantized" },
      { label: "Accuracy", value: "98.4% F1-Score" },
    ],
  },
  {
    id: "syndicflow",
    title: "SyndicFlow & AllRestau",
    subtitle: "Multi-Flavor Mobile Ordering, Property Management & Receipt Engine",
    description:
      "High volume property syndicate dues collection and restaurant POS ordering application. Employs clean MVVM architectures, real-time Firebase listeners, and on-device PDF generation.",
    tags: [".NET MAUI", "C#", "Firebase", "REST API"],
    type: "ordering",
    stats: [
      { label: "Architecture", value: "Clean MVVM" },
      { label: "Document Engine", value: "SkiaSharp PDF" },
      { label: "Latency", value: "Sub-Second" },
    ],
  },
  {
    id: "telemetry",
    title: "Enterprise APM Telemetry",
    subtitle: "Mission-Critical Cluster Health Monitoring & Distributed Metrics Console",
    description:
      "Real-time observability client for infrastructure engineers and DevOps teams. Integrates Dynatrace telemetry and Zabbix agents with Spring Boot and PostgreSQL backend streams.",
    tags: ["Dynatrace", "Zabbix", "Spring Boot", "PostgreSQL"],
    type: "apm",
    stats: [
      { label: "Uptime", value: "99.98% Monitored" },
      { label: "Data Pipeline", value: "Kafka & WebSocket" },
      { label: "Cluster Nodes", value: "24 Nodes Live" },
    ],
  },
];

// This subcomponent renders an individual stacked card with scroll-linked scaling and live frame.
function ProjectCard({
  project,
  index,
  total,
  onOpenPreview,
}: {
  project: ProjectItem;
  index: number;
  total: number;
  onOpenPreview: (project: ProjectItem) => void;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  // Calculate subtle scaling and translation for the stacked deck effect
  const scale = useTransform(scrollYProgress, [0, 1], [0.93 + index * 0.015, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.5, 0.9, 1]);

  return (
    <div
      ref={cardRef}
      className="sticky top-28 md:top-32 mb-12 last:mb-0"
      style={{ zIndex: index + 10 }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="max-w-4xl mx-auto bg-[#16181D] border border-white/10 rounded-2xl p-4 md:p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-colors duration-300 hover:border-white/20"
      >
        {/* Interactive preview window inside the card */}
        <div className="relative w-full h-[320px] sm:h-[380px] md:h-[440px] rounded-xl overflow-hidden bg-[#0A0C0F] border border-white/10 flex flex-col justify-between group">
          {/* Top simulated device status bar */}
          <div className="h-9 px-4 bg-[#111318] border-b border-white/10 flex items-center justify-between z-20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] font-mono text-white/50 ml-2 hidden sm:inline">
                {project.id}.app • mobile-preview
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] font-mono text-white/60">
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Engine
              </span>
              <span>60 FPS</span>
            </div>
          </div>

          {/* This block renders the scrollable mobile application preview container. */}
          <div className="relative flex-1 overflow-y-auto p-4 sm:p-6 no-scrollbar z-10">
            {project.type === "insurance" && (
              <div className="space-y-4 max-w-lg mx-auto">
                <div className="bg-[#181A20] border border-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-white/80">Vehicle Damage Blueprint</span>
                    <span className="text-[10px] bg-white/10 text-white/70 px-2 py-0.5 rounded">SkiaSharp Vector</span>
                  </div>
                  <div className="h-28 rounded-lg bg-[#0E1013] border border-white/5 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-around opacity-30">
                      <div className="w-16 h-20 border border-white/40 rounded-t-2xl" />
                      <div className="w-20 h-24 border border-white/40 rounded-xl" />
                      <div className="w-16 h-20 border border-white/40 rounded-b-2xl" />
                    </div>
                    <div className="z-10 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-full">
                      <Shield className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-bold text-emerald-300">Front Bumper Impact Logged</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#181A20] p-3 rounded-xl border border-white/5 flex items-center gap-3">
                    <Camera className="w-5 h-5 text-[#10D9C4]" />
                    <div>
                      <span className="text-[10px] text-white/50 block">4 Evidence Photos</span>
                      <span className="text-xs font-semibold text-white">Geotagged &amp; Signed</span>
                    </div>
                  </div>
                  <div className="bg-[#181A20] p-3 rounded-xl border border-white/5 flex items-center gap-3">
                    <Database className="w-5 h-5 text-amber-400" />
                    <div>
                      <span className="text-[10px] text-white/50 block">SQLite Database</span>
                      <span className="text-xs font-semibold text-white">Pending Cloud Sync</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {project.type === "ai" && (
              <div className="space-y-4 max-w-lg mx-auto">
                <div className="relative h-44 rounded-xl bg-gradient-to-b from-[#131E17] to-[#0A0D0B] border border-emerald-500/20 p-4 flex flex-col justify-between overflow-hidden">
                  <div className="flex justify-between items-center z-10">
                    <span className="text-xs font-mono text-emerald-400">TFLite Vision V2.4</span>
                    <span className="text-xs font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">98.4% Confidence</span>
                  </div>
                  <div className="self-center z-10 flex flex-col items-center">
                    <Leaf className="w-10 h-10 text-emerald-400 mb-2" />
                    <span className="text-sm font-bold text-white">Early Blight (Alternaria solani)</span>
                    <span className="text-xs text-white/60">Offline analysis executed in 14ms</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden z-10">
                    <div className="h-full bg-emerald-400 rounded-full w-[98%]" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="text-xs bg-[#181A20] border border-white/10 px-3 py-1.5 rounded-lg text-white/70 flex-1 text-center font-mono">
                    Quantized INT8
                  </span>
                  <span className="text-xs bg-[#181A20] border border-white/10 px-3 py-1.5 rounded-lg text-white/70 flex-1 text-center font-mono">
                    Zero Network Calls
                  </span>
                </div>
              </div>
            )}

            {project.type === "ordering" && (
              <div className="space-y-4 max-w-lg mx-auto">
                <div className="bg-[#181A20] border border-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-semibold text-white">Syndic Residence Oasis &amp; Cafe</span>
                    <span className="text-xs text-amber-400 font-bold">$59.50</span>
                  </div>
                  <div className="py-3 space-y-2 text-xs">
                    <div className="flex justify-between text-white/80">
                      <span>Monthly Syndicate Maintenance</span>
                      <span className="font-semibold text-white">$45.00</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Express Meal Voucher #204</span>
                      <span className="font-semibold text-white">$14.50</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-white/5 flex justify-between items-center">
                    <span className="text-[11px] text-emerald-400">PDF Invoice #INV-8891 Ready</span>
                    <span className="text-[10px] text-white/50">Clean MVVM Architecture</span>
                  </div>
                </div>
              </div>
            )}

            {project.type === "apm" && (
              <div className="space-y-4 max-w-lg mx-auto">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#181A20] border border-white/10 rounded-xl p-3">
                    <span className="text-[10px] text-white/50 uppercase font-mono block">PostgreSQL TPS</span>
                    <span className="text-xl font-bold font-mono text-white mt-1 block">1,482</span>
                    <span className="text-[10px] text-emerald-400 mt-1 block">Optimal load</span>
                  </div>
                  <div className="bg-[#181A20] border border-white/10 rounded-xl p-3">
                    <span className="text-[10px] text-white/50 uppercase font-mono block">Node P99 Latency</span>
                    <span className="text-xl font-bold font-mono text-[#10D9C4] mt-1 block">4.2ms</span>
                    <span className="text-[10px] text-[#10D9C4] mt-1 block">Sub-10ms target</span>
                  </div>
                </div>
                <div className="bg-[#181A20] border border-white/10 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-medium text-white">Dynatrace Agent v8.1 Active</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">99.98% Uptime</span>
                </div>
              </div>
            )}
          </div>

          {/* Centered glowing cyan-mint live preview pill button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] opacity-90 group-hover:opacity-100 transition-opacity z-20 pointer-events-auto">
            <button
              onClick={() => onOpenPreview(project)}
              className="px-6 py-3 rounded-full bg-[#10D9C4] text-[#050507] font-bold text-xs md:text-sm tracking-wide shadow-[0_0_25px_rgba(16,217,196,0.65)] hover:shadow-[0_0_35px_rgba(16,217,196,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              <Eye className="w-4 h-4 text-[#050507]" />
              <span>Live Preview</span>
            </button>
          </div>
        </div>

        {/* Card footer with bold title on left and tech tags on right */}
        <div className="mt-4 pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-white/60 text-xs mt-0.5 hidden sm:block">
              {project.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full bg-[#1E2025] border border-white/10 text-white/80 text-[11px] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// This component handles the complete projects showcase with stacked card animations.
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative z-10 py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Centered header with white accent underline */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold tracking-wider text-white uppercase"
          >
            PROJECTS
          </motion.h2>
          <div className="w-14 h-1 bg-white mx-auto mt-3 rounded-full" />
        </div>

        {/* Stacked showcase deck list */}
        <div className="relative">
          {projectsList.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              total={projectsList.length}
              onOpenPreview={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Interactive modal for live simulated preview */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
