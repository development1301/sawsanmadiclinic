import Image from "next/image";
import { StarRating } from "./StarRating";
import { type Testimonial } from "@/lib/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white/50 backdrop-blur-sm md:backdrop-blur-md rounded-[var(--radius-card)] p-5 shadow-[var(--shadow-card)] border border-white flex flex-col gap-3 transition-transform duration-300 hover:scale-[1.02]">
      <StarRating rating={testimonial.rating} />
      <p className="text-[var(--color-body)] text-sm leading-relaxed">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/60">
        <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-[var(--color-tan)] shrink-0">
          <Image
            src={testimonial.avatarUrl}
            alt={testimonial.name}
            width={36}
            height={36}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="text-[var(--color-dark)] font-semibold text-sm leading-tight">
            {testimonial.name}
          </p>
          <p className="text-[var(--color-muted)] text-xs">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
