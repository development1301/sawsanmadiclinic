"use client";

import React, { createContext, useContext } from "react";
import en from "@/dictionaries/en.json";
import ar from "@/dictionaries/ar.json";

type Locale = "en" | "ar";
type Dictionary = typeof en;

interface LanguageContextType {
  locale: Locale;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  const t = locale === "ar" ? ar : en;

  return (
    <LanguageContext.Provider value={{ locale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
