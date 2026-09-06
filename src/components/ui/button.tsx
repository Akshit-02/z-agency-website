import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "ghost" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  showArrow?: boolean;
};

const sizes: Record<NonNullable<ButtonBaseProps["size"]>, string> = {
  sm: "text-sm px-4 py-2.5 gap-1.5",
  md: "text-sm px-5 py-3 gap-2",
  lg: "text-[0.95rem] px-6 py-3.5 gap-2.5",
};

const base =
  "group relative inline-flex items-center justify-center overflow-hidden rounded-[4px] font-medium tracking-tight transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-blue whitespace-nowrap";

function Sweep({ variant }: { variant: NonNullable<ButtonBaseProps["variant"]> }) {
  const sweepColor = {
    primary: "bg-blue",
    secondary: "bg-ink",
    ghost: "bg-ink",
    light: "bg-mist",
  }[variant];

  return (
    <span
      aria-hidden
      className={cn(
        "absolute inset-0 origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-x-100",
        sweepColor,
      )}
    />
  );
}

const textColor: Record<NonNullable<ButtonBaseProps["variant"]>, string> = {
  primary: "text-white",
  secondary: "text-ink group-hover:text-white",
  ghost: "text-ink group-hover:text-white",
  light: "text-ink",
};

const border: Record<NonNullable<ButtonBaseProps["variant"]>, string> = {
  primary: "bg-ink",
  secondary: "border border-line-strong bg-transparent",
  ghost: "bg-transparent",
  light: "bg-white",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  showArrow = true,
  ...rest
}: ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, border[variant], sizes[size], className)} {...rest}>
      <Sweep variant={variant} />
      <span className={cn("relative z-10 inline-flex items-center gap-2", textColor[variant])}>
        {children}
        {showArrow && (
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  showArrow = true,
  target,
}: ButtonBaseProps & { href: string; target?: string }) {
  return (
    <Link
      href={href}
      target={target}
      className={cn(base, border[variant], sizes[size], className)}
    >
      <Sweep variant={variant} />
      <span className={cn("relative z-10 inline-flex items-center gap-2", textColor[variant])}>
        {children}
        {showArrow && (
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
    </Link>
  );
}
