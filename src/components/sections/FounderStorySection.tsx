"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TiltCard } from "@/components/ui/TiltCard";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function FounderStorySection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative py-20 md:py-32 px-4 md:px-6 bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-primary-10)] rounded-full blur-3xl mix-blend-multiply opacity-50 pointer-events-none" />
          
          <TiltCard intensity={15}>
            <div className="relative w-full aspect-[3/4] rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-card)] border border-white/60 bg-white/40 backdrop-blur-sm md:backdrop-blur-xl">
              <Image
                src="https://framerusercontent.com/images/otmCRs360ZaE1bs3A5FLXBcM76o.png"
                alt="Founder in the clinic"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </TiltCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-xl"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-primary-dark)] mb-8 leading-tight">
            {t.founderStory.title}
          </h2>
          
          <div className="space-y-6 text-[var(--color-body)] leading-relaxed">
            <p>{t.founderStory.p1}</p>
            <p>{t.founderStory.p2}</p>
            <p>{t.founderStory.p3}</p>
            <p className="font-medium text-[var(--color-dark)]">
              {t.founderStory.p4}
            </p>
          </div>
          
          <div className="mt-12 opacity-80">
            <svg width="180" height="60" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 65C15 65 25 25 45 15C65 5 70 35 60 55C50 75 25 65 35 45C45 25 75 20 85 40C95 60 75 75 90 60C105 45 115 25 130 35C145 45 125 75 145 60C165 45 180 30 190 20" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
