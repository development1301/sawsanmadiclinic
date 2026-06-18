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
    duration: "15-60 Mins",
    recoveryTime: "Immediate",
    benefits: ["Clears Breakouts", "Reduces Scarring", "Balances Oil Production", "Skin Tags Removal", "Pore Shrinking", "Skin Brightening"]
  },
  {
    id: "botox",
    icon: "💉",
    title: "Botox & fillers",
    description:
      "Subtle enhancements that refresh your features without changing who you are. Stop age counter and stay young. Draw your lips the way you like.",
    imageUrl: "/images/treatments/lips-filler.png",
    duration: "15-30 Mins",
    recoveryTime: "No Downtime",
    benefits: ["Stop Age Marks", "Smooths Fine Lines and Wrinkles", "Restores Volume and Get Your Amazing Lips Back", "Natural-Looking Results"]
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
  {
    id: "hair_growth",
    icon: "🌱",
    title: "Hair growth treatments",
    description:
      "Advanced solutions to stimulate hair follicles, reduce thinning, and promote healthy, fuller hair growth.",
    imageUrl: "/images/treatments/hair-growth.png",
    duration: "30-60 Mins",
    recoveryTime: "No Downtime",
    benefits: ["Stimulates Hair Follicles", "Reduces Hair Thinning", "Promotes Healthy Growth"]
  },
  {
    id: "body_sculpting",
    icon: "⏳",
    title: "Body sculpting treatments",
    description:
      "Non-invasive body contouring solutions to target stubborn fat, tone muscles, and refine your silhouette.",
    imageUrl: "/images/treatments/body-sculpting.png",
    duration: "45-90 Mins",
    recoveryTime: "Minimal",
    benefits: ["Targets Stubborn Fat", "Tones Muscles", "Non-Invasive Contouring"]
  },
  {
    id: "stem_cell",
    icon: "🧬",
    title: "Stem cell & PDRN treatments",
    description:
      "Cutting-edge regenerative therapies using PDRN and stem cells to rejuvenate skin at a cellular level.",
    imageUrl: "/images/treatments/stem-cell.png",
    duration: "60 Mins",
    recoveryTime: "1-3 Days",
    benefits: ["Cellular Rejuvenation", "Improves Skin Elasticity", "Accelerates Healing"]
  },
  {
    id: "salmon",
    icon: "💧",
    title: "Salmon DNA (Rejuran) treatments",
    description:
      "Deeply hydrating and repairing skin boosters derived from Salmon DNA to restore skin barrier and youthful elasticity.",
    imageUrl: "/images/treatments/salmon-treatment.png",
    duration: "45 Mins",
    recoveryTime: "1-2 Days",
    benefits: ["Repairs Skin Barrier", "Intense Hydration", "Improves Elasticity"]
  }
];
