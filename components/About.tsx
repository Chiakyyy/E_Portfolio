// This client component renders the about me section with animated counters and bio.
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { User, MapPin, Download, Award, Briefcase, CheckCircle2 } from "lucide-react";

// This interface defines properties for counting up statistics.
interface StatProps {
  value: number;
  suffix?: string;
  label: string;
}

// This helper component handles smooth numeric count-up animation when scrolled into view.
function StatCounter({ value, suffix = "", label }: StatProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  // This effect increments the display counter towards target value over one second.
  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200;
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="bg-[#181A20] border border-white/10 rounded-xl p-5 text-center flex flex-col justify-center items-center shadow-lg transition-transform duration-300 hover:border-white/20 hover:-translate-y-1"
    >
      <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
        {count}
        {suffix}
      </span>
      <span className="text-white/60 text-xs md:text-sm uppercase tracking-wider font-medium mt-1">
        {label}
      </span>
    </div>
  );
}

// This component presents the biographical summary, location info, and credentials.
export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="relative z-10 py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* This header block displays the centered section title and white accent line. */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold tracking-wider text-white uppercase"
          >
            ABOUT ME
          </motion.h2>
          <div className="w-14 h-1 bg-white mx-auto mt-3 rounded-full" />
        </div>

        {/* This two column grid presents the grayscale portrait alongside professional info. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* This left column hosts the monochrome studio portrait card. */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden bg-[#16181D] border border-white/10 shadow-2xl p-2 group">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#111317]">
                {!imgError ? (
                  <Image
                    src="/images/about-portrait.png"
                    alt="Amr Agouriane monochrome portrait"
                    fill
                    sizes="(max-width: 768px) 340px, 380px"
                    className="object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  // This fallback container provides a clean monochrome graphic if the image is unavailable.
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#1C1E24] to-[#0E1013] p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                      <User className="w-10 h-10 text-white/70" />
                    </div>
                    <span className="text-white font-bold text-lg">Amr Agouriane</span>
                    <span className="text-white/50 text-xs mt-1">Mobile Systems Architect</span>
                  </div>
                )}
                {/* Subtle vignette frame overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* This right column contains the descriptive bio, metadata, stats, and resume button. */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
              Cross-Platform Mobile Developer
            </h3>

            <p className="text-white/80 text-base md:text-lg leading-relaxed font-normal mb-8">
              I build modern, responsive, and high-performance mobile applications using Flutter, React Native, and .NET MAUI. I focus on offline-first reliability, native hardware integration, and clean UI architectures.
            </p>

            {/* This metadata row displays key personal details with white icons. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pb-8 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#181A20] border border-white/10 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs text-white/50 block font-medium">Name</span>
                  <span className="text-sm font-semibold text-white">Amr Agouriane</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#181A20] border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs text-white/50 block font-medium">Location</span>
                  <span className="text-sm font-semibold text-white">Morocco</span>
                </div>
              </div>
            </div>

            {/* This grid presents the three count-up metric cards. */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
              <StatCounter value={10} suffix="+" label="projects" />
              <StatCounter value={3} suffix="+" label="internships" />
              <StatCounter value={99} suffix="%" label="Client Satisfaction" />
            </div>

            {/* This download link lets recruiters fetch the verified curriculum vitae document. */}
            <div>
              <a
                href="/Amr_Agouriane_CV.pdf"
                download="Amr_Agouriane_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#0A0A0C] font-semibold text-sm rounded-full px-7 py-3 shadow-xl hover:bg-neutral-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <Download className="w-4 h-4 text-[#0A0A0C]" />
                <span className="capitalize">download resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
