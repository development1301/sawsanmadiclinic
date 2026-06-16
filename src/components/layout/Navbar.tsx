"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { BookButton } from "@/components/ui/BookButton";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/LanguageProvider";

const navLinks = [
  { href: "/",         key: "home"     },
  { href: "/about",    key: "about"    },
  { href: "/services", key: "services" },
  { href: "/contact",  key: "contact"  },
];

export function Navbar() {
  const { locale, t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-[var(--color-tan)] shadow-sm py-3" : "py-5"
      )}
      style={
        scrolled
          ? { backgroundColor: "rgba(255,255,255,0.7)", backdropFilter: "blur(16px)" }
          : {}
      }
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left Nav */}
        <nav className="hidden md:flex items-center gap-8 w-1/3">
          {navLinks.slice(0, 2).map((l) => (
            <Link
              key={l.href}
              href={`/${locale}${l.href === "/" ? "" : l.href}`}
              className="relative text-sm font-medium text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] transition-colors group py-1"
            >
              {t.nav[l.key as keyof typeof t.nav]}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--color-primary)] transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Center Logo */}
        <div className="flex justify-start md:justify-center w-auto md:w-1/3 flex-none relative z-50">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
                <Image 
                  src="/logo.jpg" 
                  alt="Logo" 
                  fill 
                  className="object-contain drop-shadow-sm"
                  priority
                  unoptimized={true}
                />
              </div>
              <span className="font-serif text-xl md:text-2xl text-[var(--color-primary-dark)] tracking-tight whitespace-nowrap">
                Sawsan Madi Clinic
              </span>
            </motion.div>
          </Link>
        </div>

        {/* Right Nav + CTA + Language Toggle */}
        <div className="hidden md:flex items-center justify-end gap-6 w-1/3">
          {navLinks.slice(2).map((l) => (
            <Link
              key={l.href}
              href={`/${locale}${l.href === "/" ? "" : l.href}`}
              className="relative text-sm font-medium text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] transition-colors group py-1"
            >
              {t.nav[l.key as keyof typeof t.nav]}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--color-primary)] transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
          
          {/* Language Toggle Wrapper with Pointer */}
          <div className="relative flex items-center justify-center">
            <Link
              href={pathname.replace(`/${locale}`, locale === "en" ? "/ar" : "/en")}
              className="group flex items-center gap-1.5 text-xs font-semibold tracking-wider px-3 py-1.5 rounded-full border border-[var(--color-primary-50)] text-[var(--color-primary-dark)] hover:bg-[var(--color-primary-10)] transition-colors"
              title={locale === "en" ? "Switch to Arabic" : "Switch to English"}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>{locale === "en" ? "العربية" : "EN"}</span>
            </Link>

            {/* The Floating Pointer for Patients */}
            <motion.div 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute -bottom-14 right-1/2 translate-x-1/2 flex flex-col items-center pointer-events-none"
            >
              <motion.svg 
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className="drop-shadow-sm mb-0.5"
              >
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </motion.svg>
              <span className="text-[9px] whitespace-nowrap uppercase tracking-widest font-bold text-white bg-[var(--color-primary)] px-2.5 py-1 rounded-full shadow-lg">
                {locale === "en" ? "View in Arabic" : "التبديل للإنجليزية"}
              </span>
            </motion.div>
          </div>

          <BookButton label={t.nav.book} variant="light" size="sm" />
        </div>

        {/* Mobile hamburger */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2 ml-auto z-[100] relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.span 
            animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }} 
            className="w-5 h-0.5 bg-[var(--color-primary-dark)] block rounded origin-center" 
          />
          <motion.span 
            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }} 
            className="w-5 h-0.5 bg-[var(--color-primary-dark)] block rounded" 
          />
          <motion.span 
            animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }} 
            className="w-5 h-0.5 bg-[var(--color-primary-dark)] block rounded origin-center" 
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-[var(--color-tan)] shadow-lg md:hidden overflow-hidden z-[90]"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={`/${locale}${l.href === "/" ? "" : l.href}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {t.nav[l.key as keyof typeof t.nav]}
                </Link>
              ))}
              <div className="w-full h-[1px] bg-[var(--color-tan)] my-2" />
              <div className="flex flex-col gap-4">
                <Link
                  href={pathname.replace(`/${locale}`, locale === "en" ? "/ar" : "/en")}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex justify-center items-center gap-2 text-sm font-semibold border border-[var(--color-primary-50)] px-4 py-3 rounded-full text-[var(--color-primary-dark)] hover:bg-[var(--color-primary-10)]"
                >
                  <span>{locale === "en" ? "Switch to العربية" : "Switch to English"}</span>
                </Link>
                <div onClick={() => setIsMobileMenuOpen(false)} className="w-full flex justify-center">
                  <BookButton label={t.nav.book} size="lg" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
