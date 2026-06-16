"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function FounderHeroSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 md:py-24 px-4 md:px-6">
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div 
          className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-[var(--color-primary-10)] mix-blend-multiply blur-3xl opacity-70"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[var(--color-amber)] mix-blend-multiply blur-3xl opacity-20"
          animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 border border-[var(--color-primary-50)] text-[var(--color-primary-dark)] bg-white/50 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-amber)] shadow-[0_0_8px_var(--color-primary)]" />
            {t.founderHero.tagline}
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[var(--color-primary-dark)] leading-tight mb-6">
            {t.founderHero.title}
          </h1>
          
          <p className="text-lg text-[var(--color-body)] leading-relaxed mb-8">
            {t.founderHero.description}
          </p>
          <p className="font-serif text-xl italic text-[var(--color-dark)]">{t.founderHero.signature}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ y }}
          className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)] border border-white/60 bg-white/40 backdrop-blur-sm md:backdrop-blur-xl group cursor-pointer"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <Image
            src="https://framerusercontent.com/images/kC11B0r2X7NfG2jB8nZlq2h2W4.jpg"
            alt="Welcome Video"
            fill
            className={`object-cover transition-transform duration-700 group-hover:scale-105 ${isPlaying ? "opacity-0" : "opacity-100"}`}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          
          {isPlaying && (
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <span className="text-white/50 text-sm">{t.founderHero.video}</span>
            </div>
          )}

          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-500 group-hover:bg-black/20">
              <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/40">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-2 text-white drop-shadow-md">
                  <path d="M5 3L19 12L5 21V3Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
