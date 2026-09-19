"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { primaryNav } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const ear = "pointer-events-none absolute top-0 h-6 w-6 md:block";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-6 md:px-0">
      <div className="pointer-events-auto relative w-full max-w-[1000px] md:w-auto">
        {/* concave "ears" that blend the bar into the top edge */}
        <span
          aria-hidden
          className={`${ear} -left-6`}
          style={{
            background:
              "radial-gradient(circle at 0 100%, transparent 23.5px, #0b0c0e 24px)",
          }}
        />
        <span
          aria-hidden
          className={`${ear} -right-6`}
          style={{
            background:
              "radial-gradient(circle at 100% 100%, transparent 23.5px, #0b0c0e 24px)",
          }}
        />

        <div className="relative flex h-[60px] items-center justify-between gap-2 rounded-b-[28px] bg-ink px-3.5 md:justify-start md:gap-10">
          <Logo theme="light" className="[&_span]:!text-white" />

          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label="Primary"
          >
            {primaryNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[0.95rem] font-medium transition-colors hover:text-white ${
                    active ? "text-white" : "text-white/60"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  {active && (
                    <span
                      aria-hidden
                      className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-orange-600"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="hidden rounded-xl bg-white px-5 py-2 text-[0.9rem] font-semibold text-ink transition-colors hover:bg-white/90 md:inline-block"
          >
            Start a Project
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-x-0 top-full mt-2 overflow-hidden rounded-3xl bg-ink md:hidden"
            >
              <div className="flex flex-col gap-1 p-5">
                {primaryNav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 * i,
                      duration: 0.3,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      className="block py-2.5 font-display text-2xl font-medium tracking-tight text-white"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  href="/contact"
                  className="mt-4 rounded-xl bg-white px-5 py-3 text-center font-semibold text-ink"
                >
                  Start a Project
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
