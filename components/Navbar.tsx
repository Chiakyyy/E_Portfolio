// This client component renders the floating glass pill navigation capsule.
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// Hook to access active language state and translation dictionary.
import { useLanguage } from "@/context/LanguageContext";

// This component manages the active section highlighting and smooth scrolling.
export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  // Active language state and dictionary from context.
  const { language, setLanguage, t } = useLanguage();

  // Dynamic navigation items mapped from active translations.
  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ];

  // This effect observes viewport scroll position to determine which section is active.
  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      const sections = navItems.map((item) => document.getElementById(item.id));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // This function scrolls smoothly to the clicked section target.
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  // Hydration fallback rendered before client mount.
  if (!mounted) {
    return (
      <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center pointer-events-none px-3 sm:px-4">
        <nav className="pointer-events-auto rounded-full backdrop-blur-md bg-black/35 border border-white/15 px-3.5 py-2 sm:px-7 sm:py-3 shadow-2xl flex items-center justify-between sm:justify-center gap-2 sm:gap-6 max-w-[calc(100vw-1.5rem)] w-fit mx-auto">
          <ul className="flex items-center gap-2 sm:gap-6 md:gap-8 shrink-0">
            {navItems.map((item) => (
              <li key={item.id}>
                <span className="text-xs sm:text-sm font-medium text-white/70 whitespace-nowrap py-1 px-1 sm:px-1.5">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
          {/* Static vertical divider separating navigation links from language toggle. */}
          <div className="h-3.5 w-px bg-white/15 shrink-0" aria-hidden="true" />
          {/* Static language switcher rendered during server side generation. */}
          <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
            <span className="px-1.5 py-0.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wider bg-[#FA2A55] text-white">
              EN
            </span>
            <span className="px-1.5 py-0.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wider text-white/60">
              FR
            </span>
            <span className="px-1.5 py-0.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wider text-white/60">
              AR
            </span>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center pointer-events-none px-3 sm:px-4"
    >
      {/* Responsive floating pill navigation container with safe viewport constraints. */}
      <nav className="pointer-events-auto rounded-full backdrop-blur-md bg-black/35 border border-white/15 px-3.5 py-2 sm:px-7 sm:py-3 shadow-2xl hover:border-[#FA2A55]/30 hover:shadow-[0_0_24px_rgba(250,42,85,0.35)] transition-all duration-300 flex items-center justify-between sm:justify-center gap-2 sm:gap-6 max-w-[calc(100vw-1.5rem)] w-fit mx-auto">
        <ul className="flex items-center gap-2 sm:gap-6 md:gap-8 shrink-0">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="relative">
                {/* Navigation link with active state highlighted in reddish-pink. */}
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative text-xs sm:text-sm font-medium tracking-wide transition-colors duration-200 py-1 px-1 sm:px-1.5 whitespace-nowrap block ${
                    isActive ? "text-[#FA2A55] font-semibold" : "text-white/80 hover:text-[#FA2A55]"
                  }`}
                >
                  {item.label}
                  {/* Active indicator line with a reddish-pink glow shadow. */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FA2A55] rounded-full shadow-[0_0_8px_#FA2A55]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Subtle vertical divider separating navigation links from language toggle. */}
        <div className="h-3.5 w-px bg-white/15 shrink-0" aria-hidden="true" />

        {/* Compact language switch toggle buttons with active state glow. */}
        <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
          <button
            type="button"
            onClick={() => setLanguage("en")}
            aria-label="Switch to english"
            className={`px-1.5 py-0.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wider transition-all duration-200 ${
              language === "en"
                ? "bg-[#FA2A55] text-white shadow-[0_0_10px_rgba(250,42,85,0.5)] scale-105"
                : "text-white/60 hover:text-white"
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLanguage("fr")}
            aria-label="Switch to french"
            className={`px-1.5 py-0.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wider transition-all duration-200 ${
              language === "fr"
                ? "bg-[#FA2A55] text-white shadow-[0_0_10px_rgba(250,42,85,0.5)] scale-105"
                : "text-white/60 hover:text-white"
            }`}
          >
            FR
          </button>
          <button
            type="button"
            onClick={() => setLanguage("ar")}
            aria-label="Switch to arabic"
            className={`px-1.5 py-0.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wider transition-all duration-200 ${
              language === "ar"
                ? "bg-[#FA2A55] text-white shadow-[0_0_10px_rgba(250,42,85,0.5)] scale-105"
                : "text-white/60 hover:text-white"
            }`}
          >
            AR
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
