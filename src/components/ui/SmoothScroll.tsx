"use client";

import React, { useRef, useState, useCallback, useLayoutEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  // We use standard scrolling natively, no crazy framer-motion wrappers because they break layout in Next.js App router (like fixed headers and z-indexes).
  // Instead, we just let native scroll happen but use Framer Motion for scroll-linked animations. 
  // Lenis would be the only correct way to do this without breaking native accessibility, but without npm access, native smooth scrolling is safer.
  
  return <>{children}</>;
}
