"use client";

import { motion } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { TreatmentAccordion } from "@/components/ui/TreatmentAccordion";
import { treatments } from "@/lib/data/treatments";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function TreatmentsSection() {
  const { t } = useLanguage();

  const localizedTreatments = treatments.map(tr => ({
    ...tr,
    title: t.treatments.items[tr.id as keyof typeof t.treatments.items].title,
    description: t.treatments.items[tr.id as keyof typeof t.treatments.items].description,
    duration: t.treatments.items[tr.id as keyof typeof t.treatments.items]?.duration || tr.duration,
    recoveryTime: t.treatments.items[tr.id as keyof typeof t.treatments.items]?.recoveryTime || tr.recoveryTime,
    benefits: t.treatments.items[tr.id as keyof typeof t.treatments.items]?.benefits || tr.benefits,
  }));

  return (
    <section
      id="services"
      className="py-28 px-6 bg-[var(--color-cream-light)]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center gap-4"
        >
          <SectionBadge label={t.treatments.tagline} />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--color-primary-dark)]">
            {t.treatments.title}
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-white rounded-[var(--radius-card)] p-4 md:p-8 shadow-[var(--shadow-card)] border border-[var(--color-tan)]"
        >
          <TreatmentAccordion treatments={localizedTreatments} />
        </motion.div>
      </div>
    </section>
  );
}
