import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";

export default function HomePage() {
  const marqueeItems = [
    "FDA Approved",
    "Board Certified",
    "State-of-the-Art Technology",
    "Award-Winning Care",
    "Natural Results",
    "Holistic Approach"
  ];

  return (
    <>
      <HeroSection />
      
      {/* Luxury Ribbon */}
      <div className="bg-[var(--color-primary)] text-white py-2 border-y border-[var(--color-primary-dark)]">
        <InfiniteMarquee speed={30}>
          {marqueeItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-12">
              <span className="text-sm uppercase tracking-widest font-semibold">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
          ))}
        </InfiniteMarquee>
      </div>

      <AboutSection />
      <ResultsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
