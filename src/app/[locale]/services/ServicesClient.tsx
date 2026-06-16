"use client";

import { motion } from "framer-motion";
import { treatments } from "@/lib/data/treatments";
import { StackedCards } from "@/components/ui/StackedCards";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { ServicesCtaSection } from "@/components/sections/ServicesCtaSection";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ServicesClient() {
  const { t } = useLanguage();

  // Localize the treatments array
  const localizedTreatments = treatments.map((tr) => ({
    ...tr,
    title: t.treatments.items[tr.id as keyof typeof t.treatments.items]?.title || tr.title,
    description: t.treatments.items[tr.id as keyof typeof t.treatments.items]?.description || tr.description,
    duration: t.treatments.items[tr.id as keyof typeof t.treatments.items]?.duration || tr.duration,
    recoveryTime: t.treatments.items[tr.id as keyof typeof t.treatments.items]?.recoveryTime || tr.recoveryTime,
    benefits: t.treatments.items[tr.id as keyof typeof t.treatments.items]?.benefits || tr.benefits,
  }));

  const wordVars = {
    hidden: { y: "100%", opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <main className="bg-[var(--color-cream)] relative">
      {/* Services Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] w-full overflow-hidden flex flex-col items-center justify-center pt-32 pb-16 px-6">
        <div className="absolute inset-0 z-0">
          <AuroraBackground />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)] z-10 pointer-events-none" />
        </div>
        
        <div className="relative z-20 text-center max-w-4xl mx-auto flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-6"
          >
            {t.treatments.tagline}
          </motion.p>
          
          <motion.div
            variants={containerVars}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[var(--color-primary-dark)] leading-tight flex flex-wrap justify-center gap-x-4 gap-y-2 mix-blend-multiply">
              {t.treatments.title.split(" ").map((word, i) => (
                <span key={i} className="overflow-hidden inline-block pb-2">
                  <motion.span variants={wordVars} className="inline-block">
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 3D Stacking Gallery */}
      <section className="relative z-20 pb-32">
        <StackedCards cards={localizedTreatments} />
      </section>

      {/* Out-of-Deck Exit CTA */}
      <ServicesCtaSection />
    </main>
  );
}
