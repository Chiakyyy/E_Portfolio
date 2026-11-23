// This context module manages the current language state and translation dictionary.
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, TranslationDictionary, translations } from "@/lib/translations";

// Type definition for the language context value.
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
}

// React context instance initialized with undefined fallback.
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Storage key used to persist selected language across sessions.
const storageKey = "portfolio_lang";

// Provider component that manages language selection and document lang attribute.
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Active language state defaulting to english.
  const [language, setLanguageState] = useState<Language>("en");

  // Effect to determine active language from saved preference or browser settings on mount.
  useEffect(() => {
    let targetLang: Language = "en";

    try {
      const savedLang = localStorage.getItem(storageKey) as Language | null;
      if (savedLang === "en" || savedLang === "fr" || savedLang === "ar") {
        targetLang = savedLang;
      } else if (typeof navigator !== "undefined") {
        const browserLang = (navigator.language || navigator.languages?.[0] || "").toLowerCase();
        if (browserLang.startsWith("fr")) {
          targetLang = "fr";
        } else if (browserLang.startsWith("ar")) {
          targetLang = "ar";
        }
      }
    } catch {
      // Local storage or navigator access error handled gracefully.
    }

    setLanguageState(targetLang);
    document.documentElement.lang = targetLang;
    document.documentElement.dir = targetLang === "ar" ? "rtl" : "ltr";
  }, []);

  // Function to switch active language and update local storage and document direction.
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(storageKey, lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    } catch {
      // Local storage write error handled gracefully.
    }
  };

  // Active translation dictionary matching selected language.
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook providing convenient access to language context.
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a language provider");
  }
  return context;
}
