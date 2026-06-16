"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from "framer-motion";
import { BookButton } from "@/components/ui/BookButton";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface CardData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
  duration?: string;
  recoveryTime?: string;
  benefits?: string[];
}

interface StackedCardsProps {
  cards: CardData[];
}

export function StackedCards({ cards }: StackedCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: `${cards.length * 100}vh` }}>
      {cards.map((card, index) => {
        const targetScale = 1 - (cards.length - index) * 0.05;
        return (
          <Card
            key={card.id}
            i={index}
            {...card}
            progress={scrollYProgress}
            range={[index * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}

interface CardProps extends CardData {
  i: number;
  progress: any;
  range: number[];
  targetScale: number;
}

function Card({ id, i, title, description, imageUrl, icon, progress, range, targetScale, duration, recoveryTime, benefits }: CardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax for the image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  
  // Scale down the whole card as it goes to the back
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Fade out ONLY the content so it doesn't overlap text through the glassmorphism!
  const contentOpacity = useTransform(progress, range, [1, 0]);

  // Glare Physics Engine
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const { locale } = useLanguage();
  const durationLabel = locale === 'ar' ? 'المدة' : 'Duration';
  const recoveryLabel = locale === 'ar' ? 'فترة النقاهة' : 'Recovery';
  const benefitsLabel = locale === 'ar' ? 'الفوائد الرئيسية' : 'Key Benefits';

  // Standard treatment card layout
  return (
    <div id={id} ref={containerRef} className="h-screen flex items-start justify-center sticky top-0 pt-[10vh]">
      <motion.div
        onMouseMove={handleMouseMove}
        style={{
          scale,
          transformOrigin: "top center",
          top: `${i * 30}px`,
        }}
        className="group relative flex flex-col md:flex-row w-[90vw] max-w-5xl h-[85vh] md:h-[650px] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white/40 backdrop-blur-3xl transform-gpu border border-white/40"
      >
        {/* Dynamic Light Glare */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[32px] opacity-0 transition duration-500 group-hover:opacity-100 z-50"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                800px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 255, 255, 0.4),
                transparent 80%
              )
            `,
          }}
        />

        {/* Content Side - Fades out safely */}
        <motion.div 
          style={{ opacity: contentOpacity }}
          className="flex-1 flex flex-col justify-center p-8 md:p-12 z-10 bg-gradient-to-r from-white/90 to-transparent pointer-events-auto overflow-y-auto"
        >
          <span className="text-4xl mb-4">{icon}</span>
          <h2 className="text-3xl md:text-5xl font-serif text-[var(--color-primary-dark)] mb-4">
            {title}
          </h2>
          <p className="text-[var(--color-body)] text-lg leading-relaxed mb-8 max-w-md">
            {description}
          </p>

          {/* Expanded Information: At a Glance */}
          {(duration || recoveryTime || benefits) && (
            <div className="flex flex-col gap-6 mb-8 max-w-md">
              <div className="flex gap-4 flex-wrap">
                {duration && (
                  <div className="flex flex-col gap-1 px-4 py-2 bg-white/50 backdrop-blur-md rounded-2xl border border-[var(--color-tan)] shadow-sm">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-primary)]">{durationLabel}</span>
                    <span className="text-sm font-medium text-[var(--color-primary-dark)]">{duration}</span>
                  </div>
                )}
                {recoveryTime && (
                  <div className="flex flex-col gap-1 px-4 py-2 bg-white/50 backdrop-blur-md rounded-2xl border border-[var(--color-tan)] shadow-sm">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-primary)]">{recoveryLabel}</span>
                    <span className="text-sm font-medium text-[var(--color-primary-dark)]">{recoveryTime}</span>
                  </div>
                )}
              </div>
              
              {benefits && benefits.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-widest font-bold text-[var(--color-primary)] mb-1">{benefitsLabel}</span>
                  <ul className="space-y-2">
                    {benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[var(--color-primary-dark)]">
                        <svg className="w-4 h-4 mt-0.5 text-[var(--color-amber)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div>
            <BookButton label="Book Consultation" />
          </div>
        </motion.div>

        {/* Image Side - Fades out safely */}
        <motion.div 
          style={{ opacity: contentOpacity }}
          className="relative h-1/3 md:h-full md:w-1/2 overflow-hidden rounded-b-[32px] md:rounded-r-[32px] md:rounded-bl-none pointer-events-auto shrink-0"
        >
          <motion.div style={{ scale: imageScale }} className="w-full h-full relative origin-center">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
            />
            {/* Soft gradient to blend the image into the content on desktop */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden md:block w-32" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
