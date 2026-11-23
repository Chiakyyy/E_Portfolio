// This component renders the reddish-pink studio hero section with typography overlay.
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

  // Studio hero background gradient radiating reddish-pink from the center.
  return (
    <section
      id="home"
      className="relative w-full min-h-screen h-[100vh] overflow-hidden flex flex-col justify-between"
      style={{
        background:
          "linear-gradient(135deg, #9E1132 0%, #FA2A55 50%, #6E0921 100%)",
      }}
    >
      {/* Studio hero background gradient radiating reddish-pink from the center. */}
      {/* This subtle radial vignette enhances depth behind the portrait. */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none opacity-40 mix-blend-multiply" />

      {/* Centered portrait container anchored higher in the frame above display typography. */}
      <div className="absolute left-1/2 -translate-x-1/2 top-14 sm:top-16 md:-top-20 flex items-start justify-center pointer-events-none z-10">
        {/* Responsive portrait motion wrapper with top alignment and constrained height. */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[320px] sm:w-[420px] md:w-[500px] lg:w-[580px] h-[68vh] sm:h-[74vh] md:h-[80vh] max-h-[820px] flex items-start justify-center"
        >
          {!imgError ? (
            <div className="relative w-full h-full">
              {/* Studio portrait image with smooth alpha gradient mask dissolving lower edges. */}
              <Image
                src="/images/hero-portrait.png"
                alt="Amr Agouriane portrait"
                fill
                priority
                sizes="(max-width: 768px) 360px, 580px"
                className="object-contain object-top drop-shadow-[0_20px_50px_rgba(0,0,0,0.65)] [mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)]"
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

      {/* Hero text container displayed on desktop and hidden on mobile screens. */}
      <div className="relative z-20 hidden md:flex flex-col justify-center w-full pl-4 sm:pl-6 lg:pl-8 pr-6 pt-32 md:pt-40 flex-1">
        {/* Constrained column wrapper maintaining clean separation from the centered portrait. */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative z-30 max-w-sm lg:max-w-[430px]"
        >
          {/* This small pill badge signifies availability and focus. */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-white text-xs font-medium mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {/* Sparkle icon tinted with soft reddish-pink color. */}
            <Sparkles className="w-3.5 h-3.5 text-rose-200" />
            <span>Mobile Architect • Flutter / React Native / .NET MAUI</span>
          </div>

          <p className="text-white text-lg sm:text-xl md:text-2xl font-medium leading-relaxed tracking-tight drop-shadow-md">
            Cross-Platform Mobile Developer Specializing In Building High-Performance, Offline-First Apps That Scale Across Android &amp; iOS.
          </p>

          <div className="mt-8">
            {/* White pill contact button with reddish-pink hover accent and soft glow. */}
            <a
              href="#contact"
              onClick={scrollToContact}
              className="group inline-flex items-center gap-4 bg-white text-[#0A0A0C] font-semibold text-sm md:text-base rounded-full pl-6 pr-2 py-2 shadow-2xl hover:shadow-[0_0_24px_rgba(250,42,85,0.35)] hover:bg-neutral-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <span>Contact Me</span>
              {/* Arrow container that changes to vibrant reddish-pink on hover. */}
              <span className="w-9 h-9 rounded-full bg-[#0A0A0C] flex items-center justify-center group-hover:bg-[#FA2A55] transition-colors duration-300">
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Smooth gradient transition blending into the dark space starfield section. */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-[#050507]/40 to-[#050507] pointer-events-none z-10" />

      {/* Giant typography overlay pinned to the bottom for balanced mobile and desktop framing. */}
      <div className="relative z-20 w-full flex justify-center pointer-events-none select-none pb-0 overflow-hidden mt-auto">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 0.95, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-[26vw] sm:text-[23vw] md:text-[17rem] lg:text-[21rem] font-black leading-[0.78] tracking-tighter text-white text-center translate-y-[8%] drop-shadow-[0_15px_30px_rgba(0,0,0,0.35)]"
        >
          amr
        </motion.h1>
      </div>
    </section>
  );
}
