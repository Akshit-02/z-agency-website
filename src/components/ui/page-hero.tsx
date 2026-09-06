import { Eyebrow, type AccentColor } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";
import { GridField } from "@/components/graphics/grid-field";
import { cn } from "@/lib/utils";

export type RoomMood = "white" | "ink" | "lavender" | "sky" | "peach" | "mint";

const moodBg: Record<RoomMood, string> = {
  white: "bg-white",
  ink: "bg-ink",
  lavender: "bg-lavender",
  sky: "bg-sky",
  peach: "bg-peach",
  mint: "bg-mint",
};

const moodDefaultDot: Record<RoomMood, AccentColor> = {
  white: "blue",
  ink: "coral",
  lavender: "purple",
  sky: "blue",
  peach: "coral",
  mint: "mint",
};

export function PageHero({
  eyebrow,
  title,
  description,
  dotColor,
  mood = "white",
  className,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  dotColor?: AccentColor;
  mood?: RoomMood;
  className?: string;
  children?: React.ReactNode;
}) {
  const inverted = mood === "ink";

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-line pb-16 pt-16 sm:pb-20 sm:pt-20",
        moodBg[mood],
        inverted && "text-white",
        className,
      )}
    >
      <GridField variant={inverted ? "ink" : "light"} />
      <Container className="relative">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow dotColor={dotColor ?? moodDefaultDot[mood]} inverted={inverted}>
              {eyebrow}
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1
              className={cn(
                "mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl",
                inverted ? "text-white" : "text-ink",
              )}
            >
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.12}>
              <p
                className={cn(
                  "mt-5 max-w-xl text-base leading-relaxed text-pretty sm:text-lg",
                  inverted ? "text-white/65" : "text-ink-soft",
                )}
              >
                {description}
              </p>
            </Reveal>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
}
