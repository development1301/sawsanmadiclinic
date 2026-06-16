"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface BeforeAfterSliderProps {
  beforeUrl: string;
  afterUrl: string;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
  subcaption?: string;
}

export function BeforeAfterSlider({
  beforeUrl,
  afterUrl,
  beforeLabel = "Before",
  afterLabel = "After",
  caption = "Real results, real patients",
  subcaption = "12 Weeks · Acne treatment",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // 0–1 representing left → right position
  const position = useMotionValue(0.5);

  // Derived: left % for handle and clip
  const leftPercent = useTransform(position, (v) => `${v * 100}%`);
  const clipRight   = useTransform(position, (v) => `inset(0 ${(1 - v) * 100}% 0 0)`);

  function handlePointerMove(e: React.PointerEvent) {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const raw = (e.clientX - rect.left) / rect.width;
    position.set(Math.max(0.03, Math.min(0.97, raw)));
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full rounded-[var(--radius-card)] overflow-hidden select-none cursor-col-resize"
      onPointerDown={(e) => { setIsDragging(true); e.currentTarget.setPointerCapture(e.pointerId); }}
      onPointerUp={() => setIsDragging(false)}
      onPointerMove={handlePointerMove}
    >
      {/* BEFORE (full behind) */}
      <div className="absolute inset-0">
        <Image
          src={beforeUrl}
          alt="Before treatment"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        <span className="absolute top-3 left-3 text-xs font-semibold bg-white/80 text-[var(--color-dark)] px-3 py-1 rounded-full z-10">
          {beforeLabel}
        </span>
      </div>

      {/* AFTER (clip-path reveal) */}
      <motion.div className="absolute inset-0" style={{ clipPath: clipRight }}>
        <Image
          src={afterUrl}
          alt="After treatment"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <span className="absolute top-3 right-3 text-xs font-semibold bg-white/80 text-[var(--color-dark)] px-3 py-1 rounded-full z-10">
          {afterLabel}
        </span>
      </motion.div>

      {/* Drag handle */}
      <motion.div
        className="absolute top-0 bottom-0 w-px bg-white/70 z-20 flex items-center justify-center pointer-events-none"
        style={{ left: leftPercent }}
      >
        <div className="w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center gap-0.5">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 8H2M2 8L4 6M2 8L4 10" stroke="#6B4226" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 8H14M14 8L12 6M14 8L12 10" stroke="#6B4226" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </motion.div>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none">
        <p className="text-white font-semibold text-sm leading-tight">{caption}</p>
        <p className="text-white/70 text-xs mt-1">{subcaption}</p>
      </div>
    </div>
  );
}
