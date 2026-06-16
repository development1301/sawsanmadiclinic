"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Buttery smooth spring physics for the cursor
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device has touch screen. If so, disable custom cursor.
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // Center the 32px cursor
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // If we hover over an image or video, make the cursor large
      if (target.tagName.toLowerCase() === "img" || target.tagName.toLowerCase() === "video" || target.closest(".cursor-expand")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }

      // If we hover over a button or link
      if (target.tagName.toLowerCase() === "a" || target.tagName.toLowerCase() === "button" || target.closest("button") || target.closest("a")) {
        setIsHoveringLink(true);
      } else {
        setIsHoveringLink(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  // Determine styles based on state
  const scale = isClicking ? 0.8 : isHovering ? 2.5 : isHoveringLink ? 0 : 1;
  const opacity = isHoveringLink ? 0 : 1;

  return (
    <>
      {/* Outer elegant ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[var(--color-primary)] pointer-events-none z-[100] mix-blend-difference hidden md:flex items-center justify-center backdrop-blur-sm"
        style={{
          x: smoothX,
          y: smoothY,
          scale,
          opacity,
        }}
      >
        {isHovering && (
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[6px] font-semibold text-[var(--color-primary)] tracking-widest uppercase absolute"
          >
            View
          </motion.span>
        )}
      </motion.div>

      {/* Tiny inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] pointer-events-none z-[100] mix-blend-difference hidden md:block"
        style={{
          x: useSpring(useMotionValue(cursorX.get() + 12), { damping: 20, stiffness: 500, mass: 0.1 }),
          y: useSpring(useMotionValue(cursorY.get() + 12), { damping: 20, stiffness: 500, mass: 0.1 }),
          opacity: isHovering || isHoveringLink ? 0 : 1,
        }}
      />
    </>
  );
}
