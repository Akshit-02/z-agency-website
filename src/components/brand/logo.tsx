import { cn } from "@/lib/utils";

/**
 * The Zspace mark: a monoline "Z" — grounded, structural — with a single
 * plotted coordinate marker at its terminal. The brand's shorthand for the
 * idea the whole system runs on: a fixed structure with one clear point
 * marking where you're headed. No trail, no decoration — one mark, one point.
 */
export function LogoMark({
  className,
  withTrail = true,
}: {
  className?: string;
  withTrail?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={cn("shrink-0 text-ink", className)}
      role="img"
      aria-label="Zspace"
    >
      <path
        d="M11 13H37L11 35H37"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      {withTrail && (
        <g className="text-coral">
          <path d="M39 6.5V18.5M33 12.5H45" stroke="currentColor" strokeWidth="1.4" opacity="0.55" />
          <rect x="36" y="9.5" width="6" height="6" fill="currentColor" />
        </g>
      )}
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  wordmarkClassName,
}: {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={cn("h-7 w-7", markClassName)} />
      <span
        className={cn(
          "font-display text-[1.3rem] leading-none tracking-tight text-ink",
          wordmarkClassName,
        )}
      >
        <span className="font-semibold">Z</span>
        <span className="font-medium text-ink-soft">space</span>
      </span>
    </span>
  );
}
