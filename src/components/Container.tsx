import clsx from "clsx";
import type { ElementType, ReactNode } from "react";

export function Container({
  children,
  className,
  as: Component = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return (
    <Component className={clsx("mx-auto w-full max-w-[1240px] px-5 sm:px-8", className)}>
      {children}
    </Component>
  );
}
