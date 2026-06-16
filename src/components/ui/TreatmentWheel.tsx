"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { type WheelItem } from "@/lib/data/stats";

interface TreatmentWheelProps {
  items: WheelItem[];
  radius?: number; // px
}

export function TreatmentWheel({ items, radius = 140 }: TreatmentWheelProps) {
  return (
    <div
      className="relative mx-auto"
      style={{ width: radius * 2 + 80, height: radius * 2 + 80 }}
    >
      {/* Center hub */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <div className="w-16 h-16 rounded-full bg-[var(--color-cream)] border border-[var(--color-tan)] flex flex-col items-center justify-center gap-0.5 shadow-sm">
          <svg width="20" height="20" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z"
              fill="var(--color-primary)"
            />
          </svg>
          <span className="text-[9px] font-semibold text-[var(--color-primary)] text-center leading-tight">
            Explore our treatments
          </span>
        </div>
      </motion.div>

      {/* Rotating Spokes Container */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item, i) => {
          const angleRad = (item.angle * Math.PI) / 180;
          const cx = radius + 40;
          const cy = radius + 40;
          const x = cx + Math.cos(angleRad - Math.PI / 2) * radius;
          const y = cy + Math.sin(angleRad - Math.PI / 2) * radius;
          
          const leftStr = `${Math.round(x - 24)}px`;
          const topStr = `${Math.round(y - 24)}px`;

          return (
            <motion.div
              key={item.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.4, type: "spring" }}
              className="absolute"
              style={{
                left: leftStr,
                top: topStr,
              }}
            >
              {/* Counter-rotation to keep images upright */}
              <motion.div
                className="flex flex-col items-center gap-1"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white shadow-md shrink-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.label}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span
                  className="text-[9px] font-semibold text-white/90 text-center leading-tight max-w-[60px] drop-shadow"
                  style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}
                >
                  {item.label}
                </span>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
