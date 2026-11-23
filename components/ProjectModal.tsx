// This client component provides a detailed interactive live preview modal for selected projects.
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldCheck, Camera, Sparkles, Check, RefreshCw, Cpu, Activity, ShoppingBag, FileText } from "lucide-react";
// Hook to access translated modal content.
import { useLanguage } from "@/context/LanguageContext";

// This interface defines the data contract for project previews.
export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  type: "insurance" | "ai" | "ordering" | "apm";
  stats: { label: string; value: string }[];
}

// This component handles the full screen modal presentation and simulated interactive controls.
export default function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectItem | null;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"demo" | "architecture" | "metrics">("demo");
  const [claimDamageZone, setClaimDamageZone] = useState<string>("Front Bumper");
  const [leafHealth, setLeafHealth] = useState<"scanning" | "detected">("detected");
  const [cartCount, setCartCount] = useState<number>(2);
  const [serverStatus, setServerStatus] = useState<"optimal" | "recalibrating">("optimal");
  // Translation dictionary from active language context.
  const { t } = useLanguage();

  if (!project) return null;

  // Active project details matching selected language.
  const itemData = t.projects.items[project.id as keyof typeof t.projects.items];
  const projectTitle = itemData?.title || project.title;
  const projectSubtitle = itemData?.subtitle || project.subtitle;
  const projectDescription = itemData?.description || project.description;
  const projectStats = itemData?.stats || project.stats;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md">
        {/* Backdrop dismiss click area */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Modal content dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#16181D] border border-white/15 rounded-3xl p-6 md:p-8 shadow-2xl text-white z-10 no-scrollbar"
        >
          {/* Header row with title and close button */}
          <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10D9C4]/10 text-[#10D9C4] text-xs font-semibold uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-[#10D9C4] animate-pulse" />
                <span>{t.projects.interactivePreview}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                {projectTitle}
              </h3>
              <p className="text-white/60 text-sm mt-1">{projectSubtitle}</p>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal dialog"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive tabs navigation */}
          <div className="flex gap-2 my-6">
            <button
              onClick={() => setActiveTab("demo")}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                activeTab === "demo"
                  ? "bg-white text-black"
                  : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {t.projects.tabSandbox}
            </button>
            <button
              onClick={() => setActiveTab("architecture")}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                activeTab === "architecture"
                  ? "bg-white text-black"
                  : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {t.projects.tabSpecs}
            </button>
          </div>

          {/* Tab contents */}
          {activeTab === "demo" ? (
            <div className="bg-[#0E1013] border border-white/10 rounded-2xl p-4 md:p-6">
              {project.type === "insurance" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs text-white/60 uppercase tracking-wider">Automotive Accident Report #GC-9042</span>
                    <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-mono">SQLite Synced</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#181A20] p-4 rounded-xl border border-white/5">
                      <p className="text-xs text-white/50 mb-3 font-medium">Select Damaged Area (SkiaSharp Canvas Simulation):</p>
                      <div className="grid grid-cols-2 gap-2">
                        {["Front Bumper", "Driver Door", "Rear Windshield", "Headlight Left"].map((zone) => (
                          <button
                            key={zone}
                            onClick={() => setClaimDamageZone(zone)}
                            className={`p-2.5 rounded-lg text-xs font-semibold text-left transition-all ${
                              claimDamageZone === zone
                                ? "bg-[#10D9C4] text-black shadow-md font-bold"
                                : "bg-white/5 text-white/80 hover:bg-white/10"
                            }`}
                          >
                            {zone}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="bg-[#181A20] p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                      <div>
                        <p className="text-xs text-white/50 mb-1">Claim Status Preview</p>
                        <p className="text-sm font-bold text-white">Target Zone: {claimDamageZone}</p>
                        <p className="text-xs text-white/60 mt-2">
                          High resolution photo metadata embedded with gps coordinates, timestamp, and local sqlite storage cache.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                        <span className="text-xs text-emerald-400 flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> Hardware Camera Ready
                        </span>
                        <span className="text-xs text-white/40">Policy #MA-8491</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {project.type === "ai" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs text-white/60 uppercase tracking-wider">TFLite Mobile Vision Inference Engine</span>
                    <span className="text-xs bg-cyan-500/20 text-[#10D9C4] px-2 py-0.5 rounded-full font-mono">14ms Latency</span>
                  </div>
                  <div className="relative aspect-video rounded-xl bg-gradient-to-br from-emerald-950/40 to-black border border-white/10 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                    <div className="absolute inset-8 border border-dashed border-[#10D9C4]/40 rounded-xl flex items-center justify-center pointer-events-none">
                      <div className="w-full h-0.5 bg-[#10D9C4]/70 animate-pulse" />
                    </div>
                    <Sparkles className="w-10 h-10 text-[#10D9C4] mb-3 z-10" />
                    <p className="text-white font-bold text-base z-10">
                      {leafHealth === "detected" ? "Tomato Early Blight Detected (Confidence: 98.6%)" : "Scanning Crop Foliage..."}
                    </p>
                    <p className="text-white/60 text-xs mt-1 z-10">
                      Zero cloud connection required. Model executing locally via tflite quantized weights.
                    </p>
                    <div className="mt-4 z-10 flex gap-2">
                      <button
                        onClick={() => {
                          setLeafHealth("scanning");
                          setTimeout(() => setLeafHealth("detected"), 600);
                        }}
                        className="px-4 py-1.5 rounded-full bg-[#10D9C4] text-black font-semibold text-xs flex items-center gap-1.5 shadow-lg hover:scale-105 transition-all"
                      >
                        <RefreshCw className="w-3.5 h-3.5" /> Re-Scan Sample
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {project.type === "ordering" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs text-white/60 uppercase tracking-wider">Multi-Tenant Syndic &amp; Restaurant Suite</span>
                    <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-mono">Realtime Cart</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#181A20] p-4 rounded-xl border border-white/5 space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span>Gourmet Mediterranean Bowl</span>
                        <span className="font-semibold text-white">$14.50</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Property Syndic Monthly Fee</span>
                        <span className="font-semibold text-white">$45.00</span>
                      </div>
                      <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                        <span className="text-xs text-white/60">Cart Quantity:</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setCartCount(Math.max(1, cartCount - 1))}
                            className="w-7 h-7 rounded bg-white/10 flex items-center justify-center font-bold text-white hover:bg-white/20"
                          >
                            -
                          </button>
                          <span className="font-bold text-sm w-4 text-center">{cartCount}</span>
                          <button
                            onClick={() => setCartCount(cartCount + 1)}
                            className="w-7 h-7 rounded bg-white/10 flex items-center justify-center font-bold text-white hover:bg-white/20"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#181A20] p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                      <div>
                        <span className="text-xs text-white/50 block">Calculated Total</span>
                        <span className="text-2xl font-bold text-white">${(59.5 * cartCount).toFixed(2)}</span>
                        <span className="text-xs text-emerald-400 block mt-1">Direct PDF receipt compiler ready</span>
                      </div>
                      <button
                        onClick={() => alert("Invoice PDF generated and cached to device memory.")}
                        className="mt-4 w-full py-2 rounded-xl bg-white text-black font-semibold text-xs flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors"
                      >
                        <FileText className="w-4 h-4" /> Download Compiled Invoice
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {project.type === "apm" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs text-white/60 uppercase tracking-wider">APM Telemetry Node Monitor</span>
                    <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-mono">99.98% Healthy</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-[#181A20] p-3 rounded-xl border border-white/5">
                      <span className="text-xs text-white/50 block">Postgres TPS</span>
                      <span className="text-lg font-bold text-white font-mono">1,482</span>
                    </div>
                    <div className="bg-[#181A20] p-3 rounded-xl border border-white/5">
                      <span className="text-xs text-white/50 block">P99 Latency</span>
                      <span className="text-lg font-bold text-[#10D9C4] font-mono">4.2ms</span>
                    </div>
                    <div className="bg-[#181A20] p-3 rounded-xl border border-white/5">
                      <span className="text-xs text-white/50 block">Zabbix Alerts</span>
                      <span className="text-lg font-bold text-emerald-400 font-mono">0</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-[#0E1013] border border-white/10 rounded-2xl p-6 space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">
                {t.projects.keyHighlights}
              </h4>
              <p className="text-sm text-white/80 leading-relaxed">
                {projectDescription}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
                {projectStats.map((stat) => (
                  <div key={stat.label} className="bg-[#181A20] p-3 rounded-xl border border-white/5">
                    <span className="text-[11px] text-white/50 block">{stat.label}</span>
                    <span className="text-sm font-bold text-white mt-0.5 block">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech tags and footer actions */}
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#1F2229] border border-white/10 text-white/80 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors"
            >
              {t.projects.closePreview}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
