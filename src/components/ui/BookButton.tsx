"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface BookButtonProps {
  label?: string;
  href?: string;
  className?: string;
  variant?: "primary" | "light";
  size?: "sm" | "md" | "lg";
  onClick?: (e: React.MouseEvent) => void;
}

export function BookButton({
  label,
  href,
  className,
  variant = "primary",
  size = "md",
  onClick,
}: BookButtonProps) {
  const { locale, t } = useLanguage();
  
  const finalLabel = label || t.nav.book;
  const finalHref = href || undefined;

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
      return;
    }
    if (!href) {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent("open-contact"));
    }
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-colors duration-300 cursor-pointer select-none overflow-hidden group whitespace-nowrap";

  const variants = {
    primary:
      "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-amber)] text-white animate-gold-glow border border-white/20",
    light:
      "bg-white/70 backdrop-blur-md text-[var(--color-primary-dark)] border border-white hover:bg-white shadow-sm animate-gold-glow",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <motion.a
      href={finalHref}
      onClick={handleClick}
      className={cn(base, variants[variant], sizes[size], className)}
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      initial="initial"
    >
      {/* Light sweep effect */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
        variants={{
          initial: { x: "-150%" },
          hover: {
            x: "150%",
            transition: { duration: 0.6, ease: "easeInOut" },
          },
        }}
      />

      {/* Content wrapper */}
      <span className="relative z-10 flex items-center gap-2">
        {/* Sparkle icon */}
        <motion.svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="opacity-80"
          variants={{
            initial: { rotate: 0 },
            hover: { rotate: 180, transition: { duration: 0.5, type: "spring", stiffness: 200 } },
          }}
        >
          <path
            d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z"
            fill="currentColor"
          />
        </motion.svg>
        {finalLabel}
      </span>
    </motion.a>
  );
}
