import { cn } from "@/lib/utils";
import { Eyebrow, type AccentColor } from "./badge";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  dotColor,
  index,
  inverted = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  dotColor?: AccentColor;
  index?: string;
  inverted?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow dotColor={dotColor} index={index} inverted={inverted} className="mb-5">
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "font-display text-3xl font-medium leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-[2.85rem]",
            inverted ? "text-white" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-4 text-base leading-relaxed text-pretty sm:text-lg",
              inverted ? "text-white/65" : "text-ink-soft",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
