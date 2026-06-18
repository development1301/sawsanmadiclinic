"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { BookButton } from "@/components/ui/BookButton";
import { useRef } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function CtaSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section className="py-16 md:py-24 lg:py-28 px-4 md:px-6 bg-transparent relative">
      <div className="max-w-5xl mx-auto perspective-1000 relative z-10">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          initial={{ rotateX: 10, opacity: 0, y: 50 }}
          whileInView={{ rotateX: 0, opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, type: "spring", stiffness: 80, damping: 20 }}
          className="relative rounded-[32px] overflow-hidden min-h-[400px] flex items-center group transform-gpu shadow-2xl shadow-[var(--color-primary-10)]"
          style={{ backgroundColor: "rgb(15,23,42)" }}
        >
          <motion.div
            className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: useMotionTemplate`radial-gradient(circle 400px at ${springX}px ${springY}px, rgba(212,175,55,0.15), transparent 80%)`,
            }}
          />

          <div className="absolute inset-0 z-0">

            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.6) 100%)",
              }}
            />
          </div>

          <div className="relative z-10 p-10 md:p-16 flex flex-col gap-6 max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase self-start border border-white/10 text-white/70 backdrop-blur-md bg-white/5 shadow-inner">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-amber)] inline-block shadow-[0_0_8px_var(--color-primary)]" />
              {t.cta.tagline}
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              {t.cta.title}
            </h2>
            <p className="text-white/70 text-base leading-relaxed">
              {t.cta.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <BookButton
                label={t.cta.button}
                variant="primary"
                size="lg"
              />
            </div>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block z-0">
            <Image
              src="/images/hero-plump-lips.png"
              alt="Beautiful voluminous lips"
              fill
              className="object-cover object-top opacity-50 mix-blend-luminosity"
              sizes="50vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, rgba(15,23,42,0.9) 0%, transparent 100%)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
