"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { BookButton } from "@/components/ui/BookButton";
import { TiltCard } from "@/components/ui/TiltCard";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ResultsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 lg:py-28 px-4 md:px-6 bg-transparent relative">
      <div className="max-w-6xl mx-auto perspective-1000 relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, rotateX: 20, y: 30 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          className="text-center text-4xl md:text-5xl font-serif text-[var(--color-primary-dark)] mb-12 transform-gpu"
        >
          {t.results.title}
        </motion.h2>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Before/After slider */}
          <TiltCard intensity={5} className="md:row-span-2">
            <motion.div
              initial={{ opacity: 0, rotateX: -10, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="rounded-[var(--radius-card)] overflow-hidden h-72 md:h-full transform-gpu"
            >
              <BeforeAfterSlider
                beforeUrl="https://framerusercontent.com/images/KLz3YY5GDbbEwOvVSAqGFLXE0eI.jpg?width=900&height=1200"
                afterUrl="https://framerusercontent.com/images/mtj5hoiyHHRIFp2NkDEtYGmM.jpg?width=900&height=1200"
                caption={t.results.beforeAfterCaption}
                subcaption={`🗓 ${t.results.beforeAfterSubcaption}`}
              />
            </motion.div>
          </TiltCard>

          {/* Seamless client experience */}
          <TiltCard intensity={10}>
            <motion.div
              initial={{ opacity: 0, rotateX: -10, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 }}
              className="bg-white/40 backdrop-blur-sm md:backdrop-blur-xl rounded-[var(--radius-card)] overflow-hidden border border-white/60 shadow-[var(--shadow-card)] relative min-h-[160px] h-full cursor-default transform-gpu group"
            >
              <Image
                src="https://framerusercontent.com/images/x5bU5fSGGaNxXqI2iAQqSZi8nA4.jpg?width=810&height=649"
                alt="Seamless client experience"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/60 to-transparent flex items-end p-5 pointer-events-none">
                <p className="text-white font-semibold text-lg leading-tight relative z-20">
                  {t.results.seamless}
                </p>
              </div>
            </motion.div>
          </TiltCard>

          {/* Stats card */}
          <TiltCard intensity={10}>
            <motion.div
              initial={{ opacity: 0, rotateX: -10, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.15, type: "spring", stiffness: 100 }}
              className="bg-white/40 backdrop-blur-sm md:backdrop-blur-xl rounded-[var(--radius-card)] border border-white/60 shadow-[var(--shadow-card)] p-6 flex flex-col gap-3 h-full cursor-default transform-gpu"
            >
              <p className="text-4xl md:text-5xl font-bold text-[var(--color-dark)] flex items-baseline">
                <AnimatedNumber value={10} />+
              </p>
              <p className="text-[var(--color-body)] text-sm">
                {t.results.years}
              </p>
              <div className="flex gap-2 flex-wrap mt-auto">
                {[t.results.stat1, t.results.stat2].map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/50 backdrop-blur-md text-[var(--color-primary-dark)] text-xs font-semibold px-3 py-1 rounded-full border border-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-[var(--color-muted)] text-4xl font-bold opacity-20 mt-2 leading-none flex items-baseline">
                {t.results.since}
              </p>
            </motion.div>
          </TiltCard>

          {/* Tailored vision card */}
          <TiltCard intensity={10}>
            <motion.div
              initial={{ opacity: 0, rotateX: -10, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              className="bg-white/40 backdrop-blur-sm md:backdrop-blur-xl rounded-[var(--radius-card)] border border-white/60 shadow-[var(--shadow-card)] p-6 flex flex-col gap-3 h-full cursor-default transform-gpu"
            >
              <div className="flex -space-x-2">
                {[
                  "https://framerusercontent.com/images/BpGNqeqsBfGoXmblZ5zbtLzBM.jpg?width=100&height=100",
                  "https://framerusercontent.com/images/fRkN7RTfKeL08Kpz6CrDLlrDc.jpg?width=100&height=100",
                  "https://framerusercontent.com/images/GXrVkAKOuyZ6jsH2mk3ALm0ncw.jpg?width=100&height=100",
                ].map((url, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/80"
                  >
                    <Image src={url} alt="" width={40} height={40} className="object-cover" />
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-serif text-[var(--color-primary-dark)]">
                {t.results.tailored}
              </h3>
              <p className="text-[var(--color-body)] text-sm leading-relaxed">
                {t.results.tailoredDesc}
              </p>
            </motion.div>
          </TiltCard>

          {/* Satisfaction */}
          <TiltCard intensity={10}>
            <motion.div
              initial={{ opacity: 0, rotateX: -10, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.25, type: "spring", stiffness: 100 }}
              className="bg-white/40 backdrop-blur-sm md:backdrop-blur-xl rounded-[var(--radius-card)] border border-white/60 shadow-[var(--shadow-card)] p-6 flex flex-col gap-2 h-full cursor-default transform-gpu"
            >
              <div className="flex gap-0.5 text-[var(--color-amber)]">★★★★★</div>
              <p className="text-5xl font-bold text-[var(--color-dark)] flex items-baseline">
                <AnimatedNumber value={99} />%
              </p>
              <p className="text-[var(--color-body)] text-sm">
                {t.results.satisfaction}
              </p>
            </motion.div>
          </TiltCard>

          {/* Free skin analysis CTA */}
          <TiltCard intensity={10}>
            <motion.div
              initial={{ opacity: 0, rotateX: -10, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
              className="bg-[var(--color-primary-dark)] rounded-[var(--radius-card)] p-6 flex flex-col items-center justify-center gap-4 text-center h-full transform-gpu"
            >
              <span className="bg-white/10 text-white/80 text-xs font-semibold px-3 py-1 rounded-full tracking-wider uppercase backdrop-blur-sm border border-white/20">
                {t.results.free}
              </span>
              <h3 className="text-2xl font-serif text-white">{t.results.freeTitle}</h3>
              <p className="text-white/60 text-sm">
                {t.results.freeDesc}
              </p>
              <BookButton
                label={t.results.freeBtn}
                variant="light"
                size="sm"
                className="mt-2"
              />
            </motion.div>
          </TiltCard>

          {/* Treatment photo */}
          <TiltCard intensity={5}>
            <motion.div
              initial={{ opacity: 0, rotateX: -10, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.35, type: "spring", stiffness: 100 }}
              className="rounded-[var(--radius-card)] overflow-hidden relative min-h-[200px] h-full group transform-gpu"
            >
              <Image
                src="https://framerusercontent.com/images/7wxUbyXdrvKzr2E5Hjt9SxhRN8.jpg?width=810&height=250"
                alt="Treatment session"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="33vw"
              />
            </motion.div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
