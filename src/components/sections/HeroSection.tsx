"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BookButton } from "@/components/ui/BookButton";
import { treatments } from "@/lib/data/treatments";

import { useLanguage } from "@/components/providers/LanguageProvider";
import Link from "next/link";

const DEFAULT_HERO_IMAGE = "https://framerusercontent.com/images/nzLcI2gIko5jP7H7JHhs97DQ0.jpg?width=1820&height=960";

export function HeroSection() {
  const { t, locale } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  // Cinematic masked scroll reveal (Apple-style)
  const wordVars = {
    hidden: { y: "100%", opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
    >
      {/* Cinematic Background Layer */}
      <motion.div className="absolute inset-0 z-0 bg-[var(--color-cream)]" style={{ y }}>
        
        {/* Default Hero Image */}
        <Image
          src={DEFAULT_HERO_IMAGE}
          alt="Sawsan Madi Clinic hero"
          fill
          priority
          className="object-cover object-top opacity-80"
          sizes="100vw"
        />

        {/* Treatment Specific Images (Preloaded for seamless crossfade) */}
        {treatments.map((tr, i) => (
          <Image
            key={tr.id}
            src={tr.imageUrl}
            alt={tr.title}
            fill
            className={`object-cover object-center transition-opacity duration-700 ease-in-out ${
              activeIndex === i ? "opacity-80" : "opacity-0"
            }`}
            sizes="100vw"
          />
        ))}

        {/* Left-to-right white frost overlay so text remains readable */}
        <div
          className="absolute inset-0 backdrop-blur-[2px]"
          style={{
            background: "linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.1) 100%)",
          }}
        />
      </motion.div>

      {/* Bottom fade into page background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center pt-32 pb-16 px-6">
        {/* Cinematic Heading Reveal */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="text-center max-w-4xl mx-auto mb-6 flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[var(--color-primary-dark)] leading-tight flex flex-wrap justify-center gap-x-3 gap-y-1">
            {t.hero.tagline.split(" ").map((word, i) => (
              <span key={i} className="overflow-hidden inline-block pb-2">
                <motion.span variants={wordVars} className="inline-block">
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="text-[var(--color-body)] text-base md:text-lg text-center max-w-lg leading-relaxed mb-10"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        >
          <BookButton label={t.nav.book} size="lg" />
        </motion.div>

        {/* Unique Interactive Treatment Menu instead of wheel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="mt-20 w-full max-w-5xl mx-auto"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] text-center mb-6">
            Explore our specialities
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {treatments.map((tr, i) => (
              <Link
                href={`/${locale}/services#${tr.id}`}
                key={tr.id}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`relative px-5 py-3 rounded-full cursor-pointer transition-all duration-500 overflow-hidden backdrop-blur-md border ${
                  activeIndex === i 
                    ? "bg-white/70 border-[var(--color-primary)] shadow-[0_4px_20px_rgba(212,175,55,0.3)] scale-105" 
                    : "bg-white/30 border-white/40 hover:bg-white/50 text-[var(--color-body)] scale-100"
                }`}
              >
                {activeIndex === i && (
                  <motion.div 
                    layoutId="activeTreatmentPill"
                    className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-10)] to-transparent pointer-events-none"
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  />
                )}
                <span className={`relative z-10 text-sm md:text-base font-medium transition-colors duration-300 ${
                  activeIndex === i ? "text-[var(--color-primary-dark)]" : ""
                }`}>
                  {tr.icon} {t.treatments.items[tr.id as keyof typeof t.treatments.items].title}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
