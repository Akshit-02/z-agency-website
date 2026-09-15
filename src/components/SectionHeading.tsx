import clsx from "clsx";
import type { ReactNode } from "react";
import { Reveal } from "./ScrollReveal";

export function Eyebrow({
  children,
  className,
  accent = "blue",
}: {
  children: ReactNode;
  className?: string;
  accent?: "blue" | "orange";
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 text-[0.8rem] font-medium uppercase tracking-[0.14em] text-ink-soft",
        className
      )}
    >
      <span
        className={clsx(
          "h-1.5 w-1.5 rounded-full",
          accent === "orange" ? "bg-orange" : "bg-blue"
        )}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={clsx(
            "text-balance font-display text-[2rem] font-medium leading-[1.1] tracking-tight sm:text-[2.6rem]",
            titleClassName
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={clsx(
              "max-w-[52ch] text-pretty text-[1.05rem] leading-relaxed text-ink-soft",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
