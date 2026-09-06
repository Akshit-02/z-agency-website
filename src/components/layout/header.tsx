"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { ButtonLink } from "@/components/ui/button";
import { CoordinateFrame } from "@/components/graphics/grid-field";
import { accentHex, type Accent } from "@/components/case-studies/case-study-visual";
import { primaryNav, servicesNav } from "@/data/nav";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const navAccents: Accent[] = ["blue", "purple", "coral", "mint", "yellow", "coral"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
  });

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white transition-shadow duration-300",
        scrolled ? "border-b border-line" : "border-b border-transparent",
      )}
    >
      <div className="container-page flex items-center justify-between py-5">
        <Link href="/" className="relative z-10" aria-label="Zspace home">
          <Logo />
        </Link>

        <nav className="hidden items-center lg:flex" onMouseLeave={() => setHovered(null)}>
          {primaryNav.map((link, i) =>
            link.label === "Services" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => {
                  setServicesOpen(true);
                  setHovered(link.href);
                }}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  className="relative block px-4 py-2 text-sm font-medium text-ink"
                >
                  {link.label}
                  {hovered === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-4 -bottom-0.5 h-[1.5px]"
                      style={{ backgroundColor: accentHex[navAccents[i]] }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </Link>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute left-1/2 top-full w-[480px] -translate-x-1/2 pt-4"
                    >
                      <div className="border border-line bg-white shadow-[0_20px_50px_-20px_rgba(17,24,39,0.18)]">
                        {servicesNav.map((service, j) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="group flex items-center justify-between gap-4 border-b border-line-soft px-5 py-3.5 last:border-b-0 hover:bg-mist"
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className="size-2 shrink-0"
                                style={{ backgroundColor: accentHex[services[j].color] }}
                              />
                              <div>
                                <p className="text-sm font-medium text-ink">{service.label}</p>
                                <p className="mt-0.5 text-xs leading-snug text-ink-faint">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHovered(link.href)}
                className="relative block px-4 py-2 text-sm font-medium text-ink"
              >
                {link.label}
                {hovered === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-4 -bottom-0.5 h-[1.5px]"
                    style={{ backgroundColor: accentHex[navAccents[i]] }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" size="sm">
            Start a Project
          </ButtonLink>
        </div>

        <button
          type="button"
          className="relative z-10 flex size-10 items-center justify-center lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[76px] bottom-0 z-40 overflow-hidden bg-ink text-white lg:hidden"
          >
            <div className="grid-field-ink pointer-events-none absolute inset-0" />
            <CoordinateFrame label="ZS / MENU" inverted />
            <div className="container-page relative flex h-full flex-col justify-between py-10">
              <nav className="flex flex-col">
                {primaryNav.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.35 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-baseline gap-4 border-b border-white/10 py-4"
                    >
                      <span
                        className="font-mono-label text-xs transition-colors"
                        style={{ color: accentHex[navAccents[i]] }}
                      >
                        0{i + 1}
                      </span>
                      <span className="font-display text-3xl font-medium text-white">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <ButtonLink href="/contact" variant="light" size="lg" className="w-full justify-center">
                Start a Project
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
