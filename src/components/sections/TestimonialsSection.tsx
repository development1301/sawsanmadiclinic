"use client";

import { motion } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ReviewsColumn } from "@/components/ui/ReviewsColumn";
import { testimonials } from "@/lib/data/testimonials";
import { useLanguage } from "@/components/providers/LanguageProvider";

// Split into two columns
const col1 = testimonials.slice(0, Math.ceil(testimonials.length / 2));
const col2 = testimonials.slice(Math.ceil(testimonials.length / 2));

export function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 lg:py-28 px-4 md:px-6 bg-[var(--color-cream)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center gap-4"
        >
          <SectionBadge label={t.testimonials.tagline} />
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-primary-dark)]">
            {t.testimonials.title}
          </h2>
        </motion.div>

        {/* Two-column marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[400px] md:h-[560px] overflow-hidden"
        >
          <div className="md:hidden">
            <ReviewsColumn testimonials={testimonials} direction="up" speed={32} />
          </div>
          <div className="hidden md:block">
            <ReviewsColumn testimonials={col1} direction="up" speed={32} />
          </div>
          <div className="hidden md:block">
            <ReviewsColumn testimonials={col2} direction="down" speed={28} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
