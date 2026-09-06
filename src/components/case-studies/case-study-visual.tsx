import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/types";

export type Accent = CaseStudy["heroAccent"];

export const accentHex: Record<Accent, string> = {
  ink: "#111827",
  blue: "#2563EB",
  purple: "#7C3AED",
  coral: "#FF6B5E",
  yellow: "#F4B740",
  mint: "#0F9D6C",
};

const softBg: Record<Accent, string> = {
  ink: "bg-mist",
  blue: "bg-sky",
  purple: "bg-lavender",
  coral: "bg-peach",
  yellow: "bg-peach",
  mint: "bg-mint",
};

/** Hex equivalents of the soft room tints — for animating background-color with Framer Motion, which can't tween a Tailwind class swap. */
export const softHex: Record<Accent, string> = {
  ink: "#F5F6F8",
  blue: "#E8F4FF",
  purple: "#F3EFFF",
  coral: "#FFF0E8",
  yellow: "#FFF0E8",
  mint: "#E6F7F1",
};

/**
 * Abstract editorial composition standing in for a real project screenshot —
 * a geometric "signature" per accent rather than a fake browser-chrome
 * mockup. Swap for real photography/screenshots once engagements ship.
 */
export function CaseStudyVisual({
  accent,
  initial = "Z",
  className,
}: {
  accent: Accent;
  initial?: string;
  className?: string;
}) {
  const color = accentHex[accent];

  return (
    <div className={cn("relative overflow-hidden", softBg[accent], className)}>
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(17,24,39,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,24,39,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <span
        className="absolute -bottom-[0.18em] -left-3 select-none font-display text-[9rem] font-medium leading-none text-transparent sm:text-[12rem]"
        style={{ WebkitTextStroke: `1.5px ${color}22` }}
        aria-hidden
      >
        {initial}
      </span>

      {accent === "ink" && (
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden>
          <line x1="0" y1="100%" x2="100%" y2="0" stroke={color} strokeWidth="1.5" opacity="0.5" />
          <line x1="0" y1="70%" x2="70%" y2="0" stroke={color} strokeWidth="1" opacity="0.3" />
          <rect x="58%" y="18%" width="26%" height="26%" fill="none" stroke={color} strokeWidth="1.5" />
        </svg>
      )}
      {accent === "blue" && (
        <svg className="absolute inset-0 h-full w-full" aria-hidden>
          <rect x="20%" y="20%" width="45%" height="45%" fill="none" stroke={color} strokeWidth="1.5" opacity="0.7" />
          <rect x="32%" y="32%" width="45%" height="45%" fill="none" stroke={color} strokeWidth="1.5" opacity="0.45" />
          <rect x="44%" y="44%" width="45%" height="45%" fill="none" stroke={color} strokeWidth="1.5" opacity="0.25" />
        </svg>
      )}
      {accent === "coral" && (
        <svg className="absolute inset-0 h-full w-full" aria-hidden>
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={i}
              x1="85%"
              y1="15%"
              x2={`${15 + i * 14}%`}
              y2="90%"
              stroke={color}
              strokeWidth="1"
              opacity={0.15 + i * 0.06}
            />
          ))}
        </svg>
      )}
      {accent === "yellow" && (
        <svg className="absolute inset-0 h-full w-full" aria-hidden>
          {Array.from({ length: 4 }).map((_, row) =>
            Array.from({ length: 4 }).map((_, col) => (
              <rect
                key={`${row}-${col}`}
                x={`${18 + col * 16}%`}
                y={`${18 + row * 16}%`}
                width="9%"
                height="9%"
                fill={color}
                opacity={0.12 + ((row + col) % 4) * 0.09}
              />
            )),
          )}
        </svg>
      )}
      {accent === "mint" && (
        <svg className="absolute inset-0 h-full w-full" aria-hidden>
          <path d="M15 80 Q40 20 65 55 T90 25" fill="none" stroke={color} strokeWidth="1.5" opacity="0.6" />
          {[
            [15, 80],
            [65, 55],
            [90, 25],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={`${cx}%`} cy={`${cy}%`} r="4" fill={color} />
          ))}
        </svg>
      )}
      {accent === "purple" && (
        <svg className="absolute inset-0 h-full w-full" aria-hidden>
          <circle cx="65%" cy="35%" r="60" fill="none" stroke={color} strokeWidth="1.5" opacity="0.55" />
          <circle cx="78%" cy="55%" r="34" fill={color} opacity="0.18" />
          <circle cx="55%" cy="60%" r="14" fill={color} opacity="0.4" />
        </svg>
      )}

      <span className="absolute right-4 top-4 size-2.5" style={{ backgroundColor: color }} aria-hidden />
    </div>
  );
}
