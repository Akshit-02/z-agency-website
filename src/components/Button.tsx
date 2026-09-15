import Link from "next/link";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  showArrow?: boolean;
};

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full text-[0.95rem] font-medium tracking-tight px-6 py-3.5 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-4 whitespace-nowrap";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-orange text-white hover:bg-orange-deep",
  secondary: "bg-transparent text-ink border border-line-strong hover:border-ink",
  ghost: "bg-transparent text-ink hover:bg-black/[0.04]",
};

function Arrow({ show }: { show?: boolean }) {
  if (!show) return null;
  return (
    <ArrowUpRight
      className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
      aria-hidden="true"
    />
  );
}

export function Button({
  children,
  variant = "primary",
  className,
  showArrow = true,
  href,
  ...rest
}: CommonProps & { href: string } & Omit<React.ComponentPropsWithoutRef<typeof Link>, "href" | "className">) {
  return (
    <Link href={href} className={clsx(base, variants[variant], className)} {...rest}>
      {children}
      <Arrow show={showArrow} />
    </Link>
  );
}

export function ButtonAction({
  children,
  variant = "primary",
  className,
  showArrow = true,
  ...rest
}: CommonProps & Omit<React.ComponentPropsWithoutRef<"button">, "className">) {
  return (
    <button className={clsx(base, variants[variant], className)} {...rest}>
      {children}
      <Arrow show={showArrow} />
    </button>
  );
}
