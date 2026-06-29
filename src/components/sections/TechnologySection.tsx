"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function TechnologySection() {
  const { t, locale } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: locale === "ar" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase self-start border border-[var(--color-primary-50)] text-[var(--color-primary-dark)] bg-white shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-amber)] inline-block shadow-[0_0_8px_var(--color-primary)]" />
              {t.technology.tagline}
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-[var(--color-primary-dark)] leading-tight">
              {t.technology.title}
            </h2>
            <p className="text-[var(--color-body)] text-lg leading-relaxed">
              {t.technology.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
              {/* Fallback color while image loads or if it's missing */}
              <div className="absolute inset-0 bg-gray-100" />
              <Image
                src="/images/affiliation_certificate.png"
                alt="Certificate of Affiliation"
                fill
                className="object-cover relative z-10"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[var(--color-primary-50)] to-transparent rounded-full blur-2xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
