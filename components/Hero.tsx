// This client component renders the warm amber studio hero section with typography overlay.
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Sparkles } from "lucide-react";

// This component presents the main hero banner with studio lighting and call to action.
export default function Hero() {
  const [imgError, setImgError] = useState(false);

  // This handler scrolls smoothly down to the contact form section.
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen h-[100vh] overflow-hidden flex flex-col justify-between"
      style={{
        background:
          "radial-gradient(circle at 50% 40%, rgba(224, 122, 22, 0.4) 0%, rgba(184, 80, 8, 0.8) 55%, #7a2f02 100%), linear-gradient(135deg, #B85008 0%, #DF7814 50%, #9E4105 100%)",
      }}
    >
      {/* This subtle radial vignette enhances depth behind the portrait. */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none opacity-40 mix-blend-multiply" />

      {/* This container aligns the studio portrait centrally with bottom grounding. */}
      <div className="absolute inset-x-0 bottom-0 top-12 flex items-end justify-center pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[320px] sm:w-[420px] md:w-[500px] lg:w-[580px] h-[72vh] md:h-[84vh] max-h-[820px] flex items-end justify-center"
        >
          {!imgError ? (
            <div className="relative w-full h-full">
              <Image
                src="/images/hero-portrait.png"
                alt="Amr Agouriane portrait"
                fill
                priority
                sizes="(max-width: 768px) 360px, 580px"
                className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.65)]"
                onError={() => setImgError(true)}
              />
            </div>
          ) : (
            // This fallback card provides a stylized developer silhouette when the portrait image is missing.
            <div className="w-full h-[85%] rounded-t-3xl bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm border-t border-white/20 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-28 h-28 rounded-full bg-white/10 border border-white/25 flex items-center justify-center mb-4 shadow-xl">
                <Smartphone className="w-12 h-12 text-white" />
              </div>
              <p className="text-white font-semibold text-lg">Amr Agouriane</p>
              <p className="text-white/80 text-sm mt-1">Cross-Platform Mobile Engineer</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* This left aligned copy container highlights the engineering specialization. */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 pt-32 md:pt-40 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-md lg:max-w-xl"
        >
          {/* This small pill badge signifies availability and focus. */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-white text-xs font-medium mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            <span>Mobile Architect • Flutter / React Native / .NET MAUI</span>
          </div>

          <p className="text-white text-lg sm:text-xl md:text-2xl font-medium leading-relaxed tracking-tight drop-shadow-md">
            Cross-Platform Mobile Developer Specializing In Building High-Performance, Offline-First Apps That Scale Across Android &amp; iOS.
          </p>

          <div className="mt-8">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="group inline-flex items-center gap-4 bg-white text-[#0A0A0C] font-semibold text-sm md:text-base rounded-full pl-6 pr-2 py-2 shadow-2xl hover:bg-neutral-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <span>Contact Me</span>
              <span className="w-9 h-9 rounded-full bg-[#0A0A0C] flex items-center justify-center group-hover:bg-[#F97316] transition-colors duration-300">
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* This bottom typography overlay renders the giant display name across the canvas. */}
      <div className="relative z-10 w-full flex justify-center pointer-events-none select-none pb-0 overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 0.95, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-[26vw] sm:text-[23vw] md:text-[17rem] lg:text-[21rem] font-black leading-[0.78] tracking-tighter text-white uppercase text-center translate-y-[8%] drop-shadow-[0_15px_30px_rgba(0,0,0,0.35)]"
        >
          amr
        </motion.h1>
      </div>
    </section>
  );
}
