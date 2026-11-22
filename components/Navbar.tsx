// This client component renders the floating glass pill navigation capsule.
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// This array defines the navigation items with section ids and label titles.
const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// This component manages the active section highlighting and smooth scrolling.
export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);

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

  // This check prevents hydration mismatch during server side rendering.
  if (!mounted) {
    return (
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav className="pointer-events-auto rounded-full backdrop-blur-md bg-black/35 border border-white/15 px-8 py-3 shadow-2xl">
          <ul className="flex items-center gap-6 md:gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <span className="text-sm font-medium text-white/70">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <nav className="pointer-events-auto rounded-full backdrop-blur-md bg-black/35 border border-white/15 px-6 md:px-8 py-2.5 md:py-3 shadow-2xl transition-all duration-300">
        <ul className="flex items-center gap-5 md:gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative text-xs md:text-sm font-medium tracking-wide transition-colors duration-200 py-1 px-1.5 ${
                    isActive ? "text-[#F97316] font-semibold" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F97316] rounded-full shadow-[0_0_8px_#F97316]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
}
