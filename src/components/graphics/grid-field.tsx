import { cn } from "@/lib/utils";

/** The recurring blueprint motif: a faint coordinate grid standing in for structure and dimension. */
export function GridField({
  className,
  fade = true,
  variant = "light",
}: {
  className?: string;
  fade?: boolean;
  variant?: "light" | "ink";
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0",
        variant === "ink" ? "grid-field-ink" : "grid-field",
        fade && "[mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]",
        className,
      )}
    />
  );
}

/** Viewfinder-style corner marks with a coordinate readout — a small, precise detail. */
export function CoordinateFrame({
  label,
  className,
  inverted = false,
}: {
  label?: string;
  className?: string;
  inverted?: boolean;
}) {
  const corner = cn("absolute size-3.5", inverted ? "border-white/25" : "border-ink/25");
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-4 sm:inset-6", className)}>
      <span className={cn(corner, "left-0 top-0 border-l-2 border-t-2")} />
      <span className={cn(corner, "right-0 top-0 border-r-2 border-t-2")} />
      <span className={cn(corner, "bottom-0 left-0 border-b-2 border-l-2")} />
      <span className={cn(corner, "bottom-0 right-0 border-b-2 border-r-2")} />
      {label && (
        <span
          className={cn(
            "absolute left-4 top-3 font-mono-label text-[0.65rem] tracking-wider",
            inverted ? "text-white/40" : "text-ink-faint",
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}
