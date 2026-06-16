"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { BookButton } from "@/components/ui/BookButton";
import { useLanguage } from "@/components/providers/LanguageProvider";

const maskReveal = {
  hidden: { clipPath: "inset(0 100% 0 0)", scale: 1.05 },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function DoctorSection() {
  const { t } = useLanguage();

  const features = [
    t.doctor.cred1,
    t.doctor.cred2,
    t.doctor.cred3,
  ];

  return (
    <section className="relative py-16 md:py-24 lg:py-28 px-4 md:px-6 overflow-hidden bg-[var(--color-cream)]">
      {/* Decorative Aura */}
      <motion.div 
        className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[var(--color-primary-10)] mix-blend-multiply blur-[100px] opacity-50 z-0"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-white/40 backdrop-blur-3xl rounded-[32px] overflow-hidden shadow-[var(--shadow-card)] border border-white/60">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Doctor photo card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
              variants={maskReveal}
              className="relative min-h-[480px] md:min-h-[560px] will-change-transform"
            >
              <Image
                src="https://framerusercontent.com/images/ipAbYHifCDoQsFyitpmqxk7yTIQ.jpg?width=600&height=799"
                alt={t.doctor.name}
                fill
                className="object-cover object-top"
                sizes="(max-width:768px) 100vw, 50vw"
              />
              {/* Name overlay */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[var(--color-primary-dark)]/80 to-transparent"
              >
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-white font-semibold text-lg leading-tight">
                      {t.doctor.name}
                    </p>
                    <p className="text-white/70 text-sm mt-0.5">
                      {t.doctor.role}
                    </p>
                  </div>
                  <svg width="24" height="24" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z"
                      fill="var(--color-primary)"
                    />
                  </svg>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-80px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
              }}
              className="flex flex-col justify-center p-8 md:p-12 gap-6"
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring" } } }}>
                <SectionBadge label={t.doctor.tagline} />
              </motion.div>

              <motion.h2 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring" } } }}
                className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-[var(--color-primary-dark)]"
              >
                {t.doctor.title}
              </motion.h2>

              <motion.p 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring" } } }}
                className="text-[var(--color-body)] text-base leading-relaxed"
              >
                {t.doctor.description1}
              </motion.p>
              
              <motion.p 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring" } } }}
                className="text-[var(--color-body)] text-base leading-relaxed"
              >
                {t.doctor.description2}
              </motion.p>

              {/* Feature list */}
              <ul className="flex flex-col gap-4">
                {features.map((f, i) => (
                  <motion.li 
                    key={i}
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { type: "spring", delay: 0.5 + (i * 0.1) } } }}
                    whileHover={{ x: 5, color: "var(--color-primary)" }}
                    className="flex items-start gap-3 cursor-default transition-colors duration-200"
                  >
                    <span className="w-6 h-6 rounded-full bg-[var(--color-primary-10)] flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 6L5 9L10 3"
                          stroke="var(--color-primary)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[var(--color-body)] text-sm leading-relaxed">
                      {f}
                    </span>
                  </motion.li>
                ))}
              </ul>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
