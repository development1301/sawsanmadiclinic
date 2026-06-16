"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { StarRating } from "@/components/ui/StarRating";
import { useLanguage } from "@/components/providers/LanguageProvider";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, delay: i * 0.12 },
  }),
};

const maskReveal = {
  hidden: { clipPath: "inset(100% 0 0 0)", scale: 1.1 },
  visible: (i: number) => ({
    clipPath: "inset(0% 0 0 0)",
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      delay: i * 0.2,
    },
  }),
};

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 lg:py-28 px-4 md:px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left image */}
        <motion.div className="lg:col-span-3 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            custom={0}
            variants={maskReveal}
            className="rounded-[var(--radius-card)] overflow-hidden aspect-[3/4] relative will-change-transform"
          >
            <Image
              src="https://framerusercontent.com/images/GxQO8asItSl76Fw0bPEJgPjibvI.jpg?width=810&height=849"
              alt="Sawsan Madi Clinic treatment room"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 25vw"
            />
          </motion.div>
        </motion.div>

        {/* Center copy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px" }}
          custom={1}
          variants={fadeUp}
          className="lg:col-span-6 text-center flex flex-col items-center gap-6"
        >
          <SectionBadge label={t.about.tagline} />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-[var(--color-primary-dark)]">
            {t.about.title}
          </h2>
          
          <p className="text-[var(--color-body)] text-lg leading-relaxed px-4">
            {t.about.description}
          </p>

          <ul className="flex flex-col gap-2 text-sm text-[var(--color-body)] font-medium text-left mt-2 w-full max-w-sm">
             <li className="flex items-center gap-2">✓ {t.about.bullet1}</li>
             <li className="flex items-center gap-2">✓ {t.about.bullet2}</li>
             <li className="flex items-center gap-2">✓ {t.about.bullet3}</li>
          </ul>

        </motion.div>

        {/* Right image */}
        <motion.div className="lg:col-span-3 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            custom={1}
            variants={maskReveal}
            className="rounded-[var(--radius-card)] overflow-hidden aspect-[3/4] relative will-change-transform"
          >
            <Image
              src="https://framerusercontent.com/images/vZWId5rca0iP0PQazENoHugDL5c.jpg?width=810&height=932"
              alt="Sawsan Madi Clinic laser treatment"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 25vw"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Second row — smaller images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {[
          "https://framerusercontent.com/images/fRkN7RTfKeL08Kpz6CrDLlrDc.jpg?width=100&height=100",
          "https://framerusercontent.com/images/GXrVkAKOuyZ6jsH2mk3ALm0ncw.jpg?width=100&height=100",
          "https://framerusercontent.com/images/hpCeYxp9YhmeNk4SNFOzNVe8M.jpg?width=100&height=100",
          "https://framerusercontent.com/images/jSFZ7ROTAOOS0hkJqlUtWsKmKe8.jpg?width=100&height=100",
        ].map((url, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-60px" }}
            custom={i * 0.2 + 2}
            variants={fadeUp}
            whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
            className="relative rounded-[var(--radius-lg)] overflow-hidden aspect-square transition-transform duration-300 shadow-sm"
          >
            <Image src={url} alt="" fill className="object-cover" sizes="25vw" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
