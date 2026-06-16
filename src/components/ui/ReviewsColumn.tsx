"use client";

import { TestimonialCard } from "./TestimonialCard";
import { type Testimonial } from "@/lib/data/testimonials";

interface ReviewsColumnProps {
  testimonials: Testimonial[];
  direction?: "up" | "down";
  speed?: number; // duration in seconds (larger = slower)
}

export function ReviewsColumn({
  testimonials,
  direction = "up",
  speed = 35,
}: ReviewsColumnProps) {
  // Duplicate list so the marquee loops seamlessly
  const doubled = [...testimonials, ...testimonials];

  return (
    <div className="overflow-hidden h-full relative">
      {/* Fade gradients top & bottom */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[var(--color-cream)] to-transparent z-10" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--color-cream)] to-transparent z-10" />

      {/* The scrolling container */}
      <div 
        className={`flex flex-col gap-4 will-change-transform ${direction === 'up' ? 'animate-marquee-up' : 'animate-marquee-down'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  );
}
