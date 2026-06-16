"use client";

import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function TiltCard({ children, className, intensity = 10 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // 0.5 is center
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth out the raw mouse values
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  // Map 0-1 values to degrees
  const rotateX = useTransform(mouseYSpring, [0, 1], [intensity, -intensity]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-intensity, intensity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  // Glare physics
  const glareX = useTransform(mouseXSpring, [0, 1], ["-100%", "100%"]);
  const glareY = useTransform(mouseYSpring, [0, 1], ["-100%", "100%"]);
  const glareOpacity = useTransform(mouseXSpring, [0, 0.5, 1], [0.1, 0.3, 0.1]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={`group relative overflow-hidden ${className || ""}`}
    >
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="w-full h-full relative z-10">
        {children}
      </div>
      
      {/* Glare Light Effect */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none rounded-[inherit]"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)",
          x: glareX,
          y: glareY,
          opacity: glareOpacity,
          mixBlendMode: "overlay"
        }}
      />
    </motion.div>
  );
}
