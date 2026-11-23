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

  // Effect to load stored language preference from browser local storage on mount.
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(storageKey) as Language | null;
      if (savedLang === "en" || savedLang === "fr" || savedLang === "ar") {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang;
        document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
      }
    } catch {
      // Local storage access error handled gracefully.
    }
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
