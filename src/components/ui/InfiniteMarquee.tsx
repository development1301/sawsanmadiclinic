"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function InfiniteMarquee({ children, speed = 40 }: { children: ReactNode; speed?: number }) {
  return (
    <div className="flex w-full overflow-hidden flex-nowrap py-4 mask-edges">
      {/* 
        We use two identical motion.divs side by side to create the seamless loop.
        They both translate from 0 to -100%.
      */}
      <motion.div
        className="flex whitespace-nowrap gap-12 px-6 shrink-0 items-center"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
      >
        {children}
      </motion.div>
      <motion.div
        className="flex whitespace-nowrap gap-12 px-6 shrink-0 items-center"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
      >
        {children}
      </motion.div>
    </div>
  );
}
