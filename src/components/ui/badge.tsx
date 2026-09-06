import { cn } from "@/lib/utils";

export type AccentColor = "blue" | "purple" | "coral" | "yellow" | "mint" | "ink";

const dotClasses: Record<AccentColor, string> = {
  blue: "bg-blue",
  purple: "bg-purple",
  coral: "bg-coral",
  yellow: "bg-yellow",
  mint: "bg-mint-line",
  ink: "bg-ink",
};

export function Eyebrow({
  children,
  className,
  dotColor = "blue",
  index,
  inverted = false,
}: {
  children: React.ReactNode;
  className?: string;
  dotColor?: AccentColor;
  index?: string;
  inverted?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono-label text-[0.72rem] uppercase tracking-[0.18em]",
        inverted ? "text-white/55" : "text-ink-soft",
        className,
      )}
    >
      <span className={cn("size-[5px]", dotClasses[dotColor])} />
      {index && <span className={inverted ? "text-white/35" : "text-ink-faint"}>{index} /</span>}
      {children}
    </span>
  );
}

export function Tag({
  children,
  className,
  active = false,
}: {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[3px] border px-2.5 py-1 font-mono-label text-[0.7rem] tracking-wide",
        active ? "border-ink bg-ink text-white" : "border-line-strong text-ink-soft",
        className,
      )}
    >
      {children}
    </span>
  );
}
