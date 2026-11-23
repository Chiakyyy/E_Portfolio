// This client component renders the draggable skills carousel with synchronized track progress.
"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TechIcon } from "./TechIcons";
// Hook to access active language translations.
import { useLanguage } from "@/context/LanguageContext";

// This interface defines skill data items including proficiency percentage.
interface SkillItem {
  name: string;
  percentage: number;
}

// This list enumerates the core technical competencies and proficiencies.
const skillsData: SkillItem[] = [
  { name: "Flutter", percentage: 95 },
  { name: "React Native", percentage: 92 },
  { name: ".NET MAUI", percentage: 95 },
  { name: "Dart", percentage: 95 },
  { name: "TypeScript", percentage: 90 },
  { name: "C#", percentage: 92 },
  { name: "Firebase", percentage: 90 },
  { name: "SQLite", percentage: 95 },
  { name: "PostgreSQL", percentage: 88 },
  { name: "Kotlin", percentage: 85 },
  { name: "Git", percentage: 92 },
  { name: "Docker", percentage: 85 },
];

// This component provides the interactive draggable carousel and synchronized track thumb.
export default function Skills() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  // Translation dictionary from active language context.
  const { t } = useLanguage();

  // This function updates the normalized scroll progress ratio between zero and one.
  const handleScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(0);
    } else {
      setScrollProgress(Math.min(1, Math.max(0, el.scrollLeft / maxScroll)));
    }
  }, []);

  // This effect attaches scroll listeners to the carousel container.
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // This handler starts mouse drag interactions for smooth desktop panning.
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeftState(el.scrollLeft);
  };

  // This handler stops mouse drag panning when mouse leaves or releases.
  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // This handler pans the carousel based on mouse movement during active drag.
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const el = scrollContainerRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    el.scrollLeft = scrollLeftState - walk;
  };

  // This function scrolls the carousel horizontally by a relative delta step.
  const scrollByDelta = (delta: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  // This handler allows clicking directly on the progress track to scrub position.
  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    const el = scrollContainerRef.current;
    if (!track || !el) return;
    const rect = track.getBoundingClientRect();
    const clickRatio = (e.clientX - rect.left) / rect.width;
    const maxScroll = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: clickRatio * maxScroll, behavior: "smooth" });
  };

  return (
    <section id="skills" className="relative z-10 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* This header block displays the section title, white underline, and subtitle. */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold tracking-wider text-white uppercase"
          >
            {t.skills.sectionTitle}
          </motion.h2>
          <div className="w-14 h-1 bg-white mx-auto mt-3 rounded-full" />
          <p className="text-white/70 text-sm md:text-base mt-4 font-medium">
            {t.skills.subtitle}
          </p>
        </div>

        {/* This wrapper holds navigation controls and the horizontal card reel. */}
        <div dir="ltr" className="relative">
          {/* Subtle side fade overlays to blend edges into the pitch background */}
          <div className="absolute left-0 top-0 bottom-6 w-10 bg-gradient-to-r from-[#050507] to-transparent z-10 pointer-events-none hidden md:block" />
          <div className="absolute right-0 top-0 bottom-6 w-10 bg-gradient-to-l from-[#050507] to-transparent z-10 pointer-events-none hidden md:block" />

          {/* This scrollable and draggable container houses all uniform skill cards. */}
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseUpOrLeave}
            onMouseUp={handleMouseUpOrLeave}
            onMouseMove={handleMouseMove}
            className={`flex items-stretch gap-4 md:gap-5 overflow-x-auto no-scrollbar pb-6 pt-2 select-none cursor-grab active:cursor-grabbing px-2`}
            style={{ scrollSnapType: isDragging ? "none" : "x mandatory" }}
          >
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-[#16181D] border border-white/10 hover:border-white/25 rounded-2xl p-6 min-w-[170px] md:min-w-[190px] flex-shrink-0 flex flex-col items-center justify-between shadow-xl transition-all duration-300 hover:-translate-y-1.5 group"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Brand svg icon container */}
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TechIcon name={skill.name} className="w-8 h-8 object-contain" />
                </div>

                {/* Skill title label */}
                <span className="text-white font-semibold text-sm md:text-base mb-6 text-center">
                  {skill.name}
                </span>

                {/* Progress bar and numeric percentage indicator */}
                <div className="w-full">
                  <div className="flex justify-between items-center text-xs font-semibold mb-2">
                    <span className="text-white/50 text-[10px] uppercase tracking-wider">Proficiency</span>
                    <span className="text-white">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-white rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* This track and thumb section synchronizes smoothly with carousel scrolling. */}
          <div className="mt-8 max-w-md mx-auto px-4 flex items-center gap-4">
            <button
              onClick={() => scrollByDelta(-350)}
              aria-label="Scroll skills left"
              className="w-8 h-8 rounded-full bg-[#16181D] border border-white/15 text-white flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* This clickable track shows the moving thumb indicator. */}
            <div
              ref={trackRef}
              onClick={handleTrackClick}
              className="relative flex-1 h-1.5 bg-white/15 rounded-full overflow-hidden cursor-pointer"
            >
              <div
                className="absolute top-0 bottom-0 bg-white rounded-full transition-all duration-150 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                style={{
                  width: "28%",
                  left: `${scrollProgress * 72}%`,
                }}
              />
            </div>

            <button
              onClick={() => scrollByDelta(350)}
              aria-label="Scroll skills right"
              className="w-8 h-8 rounded-full bg-[#16181D] border border-white/15 text-white flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
