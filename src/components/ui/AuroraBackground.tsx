"use client";

import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1] bg-[#fafafc]">
      {/* 
        We use multiple oversized blur divs with distinct luxury colors.
        They animate in a slow, elegant floating pattern. 
      */}
      <motion.div
        animate={{
          x: [0, 50, 0, -50, 0],
          y: [0, 30, -20, 10, 0],
          scale: [1, 1.1, 0.9, 1.05, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[rgba(212,175,55,0.08)] mix-blend-multiply blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 50, -30, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[rgba(243,229,171,0.15)] mix-blend-multiply blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] rounded-full bg-[rgba(255,255,255,0.5)] mix-blend-overlay blur-[100px]"
      />
    </div>
  );
}
