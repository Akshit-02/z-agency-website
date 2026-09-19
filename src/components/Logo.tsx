import Link from "next/link";
import clsx from "clsx";

type LogoProps = {
  variant?: "full" | "mark";
  theme?: "dark" | "light";
  className?: string;
  href?: string | null;
};

const MARK_PATH =
  "M20,0 L74,0 L100,26 L100,80 Q100,100 80,100 L20,100 Q0,100 0,80 L0,20 Q0,0 20,0 Z " +
  "M24,24 L76,24 L76,34 L24,34 Z " +
  "M70,34 L73.75,38.69 L39.61,66 L30,66 L26.25,61.31 L60.39,34 Z " +
  "M24,66 L76,66 L76,76 L24,76 Z";

export function LogoMark({
  theme = "dark",
  className,
}: {
  theme?: "dark" | "light";
  className?: string;
}) {
  const fill = theme === "dark" ? "#0b0c0e" : "#faf9f6";

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="ZSpace"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" fill={fill} d={MARK_PATH} />
    </svg>
  );
}

export function Logo({
  variant = "full",
  theme = "dark",
  className,
  href = "/",
}: LogoProps) {
  const content = (
    <span className={clsx("inline-flex items-end gap-1.5 group", className)}>
      <LogoMark
        theme={theme}
        className="h-8 w-8 shrink-0 transition-transform duration-300 ease-out group-hover:-rotate-6"
      />
      {variant === "full" && (
        <span
          className={clsx(
            "font-display text-[1.15rem] font-medium tracking-tight",
            theme === "dark" ? "text-ink" : "text-paper",
          )}
        >
          Space
        </span>
      )}
    </span>
  );

  if (href === null) return content;

  return (
    <Link href={href} aria-label="ZSpace home" className="outline-none">
      {content}
    </Link>
  );
}
