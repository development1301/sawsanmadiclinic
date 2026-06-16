export interface Treatment {
  id: string;
  icon: string; // emoji fallback icon
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  recoveryTime: string;
  benefits: string[];
}

export const treatments: Treatment[] = [
  {
    id: "acne",
    icon: "☀️",
    title: "Acne & skin health",
    description:
      "Personalized dermatology care for acne, pigmentation, and long-term skin maintenance.",
    imageUrl: "/images/treatments/acne.png",
    duration: "45-60 Mins",
    recoveryTime: "Immediate",
    benefits: ["Clears Breakouts", "Reduces Scarring", "Balances Oil Production"]
  },
  {
    id: "botox",
    icon: "💉",
    title: "Botox & fillers",
    description:
      "Subtle enhancements that refresh your features without changing who you are.",
    imageUrl: "/images/treatments/botox.png",
    duration: "15-30 Mins",
    recoveryTime: "No Downtime",
    benefits: ["Smooths Fine Lines", "Restores Volume", "Natural-Looking Results"]
  },
  {
    id: "laser",
    icon: "⚡",
    title: "Laser treatments",
    description:
      "Advanced laser solutions for hair removal, pigmentation, texture, and scars — clinical laser solutions.",
    imageUrl: "/images/treatments/laser.png",
    duration: "30-60 Mins",
    recoveryTime: "1-3 Days",
    benefits: ["Permanent Hair Reduction", "Improves Skin Texture", "Fades Pigmentation"]
  },
  {
    id: "antiaging",
    icon: "🌿",
    title: "Anti-aging solutions",
    description:
      "Target lines, volume loss, dullness, and tired skin with safe, proven treatments.",
    imageUrl: "/images/treatments/antiaging.png",
    duration: "45-90 Mins",
    recoveryTime: "Varies",
    benefits: ["Stimulates Collagen", "Tightens Sagging Skin", "Restores Youthful Glow"]
  },
  {
    id: "prp",
    icon: "🩸",
    title: "PRP therapy",
    description:
      "Platelet-rich plasma treatments to stimulate collagen production and accelerate healing.",
    imageUrl: "/images/treatments/prp.png",
    duration: "60 Mins",
    recoveryTime: "1-2 Days",
    benefits: ["Uses Natural Growth Factors", "Hair Restoration", "Improves Skin Elasticity"]
  },
];
