import Link from "next/link";
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
];

const more = [
  { label: "Contact", href: "/contact" },
  // { label: "Privacy policy", href: "/privacy" },
  // { label: "Terms of service", href: "/terms" },
];

const headingClass = "mb-5 text-[0.95rem] font-medium text-white/40";
const linkClass =
  "text-[0.92rem] text-white transition-colors duration-300 hover:text-orange-600";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      {/* notch cut into the top edge, mirroring the navbar shape */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 z-10 h-9 w-[calc(100%-2.5rem)] max-w-[1240px] -translate-x-1/2 rounded-b-3xl bg-paper sm:w-[calc(100%-4rem)]"
      >
        <span
          className="absolute -left-3 top-0 h-3 w-[13px]"
          style={{
            background:
              "radial-gradient(circle at 0 100%, #0b0c0e 11.5px, #faf9f6 12px)",
          }}
        />
        <span
          className="absolute -right-3 top-0 h-3 w-[13px]"
          style={{
            background:
              "radial-gradient(circle at 100% 100%, #0b0c0e 11.5px, #faf9f6 12px)",
          }}
        />
      </div>

      <Container className="relative z-10 pb-10 pt-24 sm:pt-28">
        <div className="grid gap-12 lg:grid-cols-[1.7fr_1fr_1fr_1.2fr]">
          <div className="max-w-md">
            <Logo theme="light" className="[&_span]:!text-white" />
            <p className="mt-8 font-display text-3xl font-medium leading-[1.05] tracking-tight">
              Build once.
              <br />
              <span className="text-white/60">Scale anywhere.</span>
            </p>
            <p className="mt-6 text-pretty text-[0.9rem] leading-relaxed text-white/50">
              {site.tagline}
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-block rounded-xl bg-white px-5 py-2.5 text-[0.85rem] font-semibold text-ink transition-colors hover:bg-white/90"
            >
              Start a Project
            </Link>
            {/* <p className="mt-10 text-[0.8rem] text-white/40">
              &copy; {new Date().getFullYear()} {site.domain} - All rights
              reserved
            </p> */}
          </div>

          <div>
            <p className={headingClass}>Menu</p>
            <ul className="flex flex-col gap-3.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={headingClass}>Services</p>
            <ul className="flex flex-col gap-3.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className={linkClass}
                  >
                    {service.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={headingClass}>More</p>
            <ul className="flex flex-col gap-3.5">
              {more.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.email}`} className={linkClass}>
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <p
        aria-hidden
        className="pointer-events-none relative z-0 mt-6 select-none whitespace-nowrap text-center font-display text-[26vw] font-bold leading-[0.8] tracking-tighter text-white/[0.06] sm:text-[20vw] lg:text-[17rem]"
      >
        ZSpace
      </p>
    </footer>
  );
}
