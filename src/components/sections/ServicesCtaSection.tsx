"use client";

import { motion } from "framer-motion";
import { BookButton } from "@/components/ui/BookButton";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ServicesCtaSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center py-32 px-6">
      {/* Liquid Aurora Background */}
      <div className="absolute inset-0 z-0">
        <AuroraBackground />
        {/* Subtle radial vignette to focus the center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)] z-10 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <span className="text-4xl md:text-5xl mb-6">✨</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[var(--color-primary-dark)] leading-tight mb-8 mix-blend-multiply">
            Ready for your <br className="hidden md:block" />
            <span className="italic opacity-80">transformation?</span>
          </h2>
          <p className="text-[var(--color-body)] text-xl md:text-2xl leading-relaxed max-w-2xl mb-12">
            {t.cta.description}
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <BookButton label={t.cta.button} size="lg" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
