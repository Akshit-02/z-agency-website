"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function TableOfContents({ headings }: { headings: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const elements = headings
      .map((_, i) => document.getElementById(`section-${i}`))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = elements.indexOf(entry.target as HTMLElement);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  return (
    <nav aria-label="Table of contents" className="sticky top-28 hidden lg:block">
      <p className="font-mono-label text-xs uppercase tracking-wide text-ink-faint">
        On this page
      </p>
      <ul className="mt-4 space-y-1 border-l border-line">
        {headings.map((heading, i) => (
          <li key={heading}>
            <a
              href={`#section-${i}`}
              className={cn(
                "-ml-px block border-l pl-4 py-1.5 text-sm leading-snug transition-colors",
                activeIndex === i
                  ? "border-coral font-medium text-ink"
                  : "border-transparent text-ink-faint hover:text-ink-soft",
              )}
            >
              {heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
