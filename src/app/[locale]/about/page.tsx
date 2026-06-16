import type { Metadata } from "next";
import { FounderHeroSection } from "@/components/sections/FounderHeroSection";
import { FounderStorySection } from "@/components/sections/FounderStorySection";
import { MissionAndCredentials } from "@/components/sections/MissionAndCredentials";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "About the Founder | Sawsan Madi Clinic",
  description: "Meet Dr. Sarah Jenkins, the board-certified dermatologist and visionary behind Sawsan Madi Clinic. Discover her personal journey, philosophy, and mission for radiant skin.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <FounderHeroSection />
      <FounderStorySection />
      <MissionAndCredentials />
      <CtaSection />
    </div>
  );
}
