import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  label: string;
  className?: string;
}

export function SectionBadge({ label, className }: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase",
        "border border-[var(--color-primary-10)] text-[var(--color-primary)]",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] inline-block" />
      {label}
    </div>
  );
}
