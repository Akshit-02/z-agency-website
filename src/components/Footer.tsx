import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { site } from "@/lib/site";
import { services } from "@/lib/services-data";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-col justify-between gap-8 border-b border-line pb-14 sm:flex-row sm:items-end">
          <div className="max-w-md">
            <Logo />
            <p className="mt-5 text-pretty text-[1.05rem] leading-relaxed text-ink-soft">
              {site.tagline}
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 font-display text-2xl font-medium tracking-tight sm:text-3xl"
          >
            Let&apos;s talk
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-orange">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-10 py-14 sm:grid-cols-4">
          <div>
            <p className="mb-4 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-ink-soft">
              Navigate
            </p>
            <ul className="flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[0.95rem] text-ink transition-colors duration-300 hover:text-blue">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-ink-soft">
              Services
            </p>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[0.95rem] text-ink transition-colors duration-300 hover:text-blue"
                  >
                    {service.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-ink-soft">
              Contact
            </p>
            <ul className="flex flex-col gap-3 text-[0.95rem]">
              <li>
                <a href={`mailto:${site.email}`} className="text-ink transition-colors duration-300 hover:text-blue">
                  {site.email}
                </a>
              </li>
              <li className="text-ink-soft">Remote-first, working globally</li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-ink-soft">
              Legal
            </p>
            <ul className="flex flex-col gap-3">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[0.95rem] text-ink transition-colors duration-300 hover:text-blue">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-4 pt-6 text-[0.85rem] text-ink-soft sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} ZSpace. All rights reserved.</p>
          <p>Designed &amp; built by the ZSpace team.</p>
        </div>
      </Container>
    </footer>
  );
}
