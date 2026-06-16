"use client";

import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";
import { type Testimonial } from "@/lib/data/testimonials";

interface ReviewsColumnProps {
  testimonials: Testimonial[];
  direction?: "up" | "down";
  speed?: number; // px per second
}

export function ReviewsColumn({
  testimonials,
  direction = "up",
  speed = 35,
}: ReviewsColumnProps) {
  // Duplicate list so the marquee loops seamlessly
  const doubled = [...testimonials, ...testimonials];
  const containerRef = useRef<HTMLDivElement>(null);
  const yRef = useRef(0);

  useAnimationFrame((_, delta) => {
    if (!containerRef.current) return;
    const step = (speed * delta) / 1000;
    const sign = direction === "up" ? -1 : 1;
    yRef.current += sign * step;

    const el = containerRef.current;
    const halfH = el.scrollHeight / 2;

    // Reset when scrolled past half (seamless loop)
    if (direction === "up" && yRef.current < -halfH) yRef.current = 0;
    if (direction === "down" && yRef.current > 0) yRef.current = -halfH;

    el.style.transform = `translateY(${yRef.current}px)`;
  });

  return (
    <div className="overflow-hidden h-full relative">
      {/* Fade gradients top & bottom */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[var(--color-cream)] to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--color-cream)] to-transparent z-10" />

      <div ref={containerRef} className="flex flex-col gap-4 will-change-transform">
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  );
}
