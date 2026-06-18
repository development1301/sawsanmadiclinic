"use client";

import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/TiltCard";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function MissionAndCredentials() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-4xl font-serif text-[var(--color-primary-dark)] mb-16"
        >
          {t.mission.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <TiltCard intensity={10} className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, rotateX: -10, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, type: "spring" }}
              className="bg-white/40 backdrop-blur-sm md:backdrop-blur-xl rounded-[var(--radius-card)] border border-white/60 shadow-[var(--shadow-card)] p-8 h-full flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary-10)] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 15l-2 5l9-5l-9-5l2 5z" />
                    <circle cx="12" cy="10" r="7" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-[var(--color-primary-dark)]">{t.mission.boardTitle}</h3>
              </div>
              <p className="text-[var(--color-body)] leading-relaxed">
                {t.mission.boardDesc}
              </p>
            </motion.div>
          </TiltCard>

          <TiltCard intensity={10}>
            <motion.div
              initial={{ opacity: 0, rotateX: -10, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
              className="bg-white/40 backdrop-blur-sm md:backdrop-blur-xl rounded-[var(--radius-card)] border border-white/60 shadow-[var(--shadow-card)] p-8 flex flex-col justify-center items-center text-center h-full"
            >
              <p className="text-6xl font-bold text-[var(--color-dark)] flex items-baseline">
                <AnimatedNumber value={15} />+
              </p>
              <p className="text-[var(--color-body)] mt-2 font-medium">{t.mission.expTitle}</p>
              <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-primary)] to-transparent rounded-full mt-6 opacity-50" />
            </motion.div>
          </TiltCard>

          <TiltCard intensity={5} className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, rotateX: -10, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.15, type: "spring" }}
              className="bg-white/40 backdrop-blur-sm md:backdrop-blur-xl rounded-[var(--radius-card)] border border-white/60 shadow-[var(--shadow-card)] p-8 flex flex-col md:flex-row items-center gap-8"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-serif text-[var(--color-primary-dark)] mb-4">{t.mission.provenExpTitle}</h3>
                <p className="text-[var(--color-body)] leading-relaxed text-lg">
                  {t.mission.provenExpDesc}
                </p>
              </div>
              <div className="flex-1 w-full flex justify-center md:justify-end">
                <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-4 border-white/80">
                  <img src="/images/dr_sawsan_certificate.png" alt="Board Certificate" className="w-full h-auto object-cover" />
                </div>
              </div>
            </motion.div>
          </TiltCard>

          <TiltCard intensity={10} className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, rotateX: -10, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="bg-[var(--color-primary-dark)] rounded-[var(--radius-card)] p-12 relative overflow-hidden"
            >
              <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[150%] bg-gradient-to-b from-[var(--color-primary-50)] to-transparent rounded-full blur-3xl mix-blend-screen opacity-20 pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--color-primary)" className="opacity-30 mb-6">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
                <h3 className="text-2xl md:text-3xl font-serif text-white leading-relaxed mb-4">
                  {t.mission.quote}
                </h3>
                <p className="text-[var(--color-primary)] font-medium tracking-wide uppercase text-sm">
                  {t.mission.quoteAuthor}
                </p>
              </div>
            </motion.div>
          </TiltCard>

        </div>
      </div>
    </section>
  );
}
