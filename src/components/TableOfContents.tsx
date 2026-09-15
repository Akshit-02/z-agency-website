"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export type TocItem = { id: string; label: string };

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const headingEls = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (headingEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    headingEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <>
      <nav className="hidden lg:block" aria-label="Table of contents">
        <div className="sticky top-32">
          <p className="text-[0.8rem] font-medium uppercase tracking-[0.08em] text-ink-soft">
            On this page
          </p>
          <ul className="mt-4 flex flex-col gap-2.5 border-l border-line">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={activeId === item.id ? "location" : undefined}
                  className={`-ml-px block border-l-2 py-0.5 pl-4 text-[0.92rem] transition-colors duration-200 ${
                    activeId === item.id
                      ? "border-blue font-medium text-ink"
                      : "border-transparent text-ink-soft hover:text-ink"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          className="flex w-full items-center justify-between rounded-xl border border-line-strong px-4 py-3.5 text-[0.92rem] font-medium text-ink"
        >
          On this page
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${mobileOpen ? "rotate-180" : ""}`}
          />
        </button>
        <AnimatePresence initial={false}>
          {mobileOpen && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
              className="overflow-hidden"
            >
              {items.map((item) => (
                <li key={item.id} className="border-b border-line first:border-t">
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-[0.95rem] text-ink-soft"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
