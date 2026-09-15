import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/SectionHeading";
import { services } from "@/lib/services-data";
import { homepageIndustries } from "@/lib/industries-data";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist or has moved.",
  robots: { index: false, follow: true },
};

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="pb-24 pt-[150px] sm:pt-[170px]">
      <Container className="max-w-[720px]">
        <Eyebrow accent="orange">404</Eyebrow>
        <h1 className="mt-4 text-balance font-display text-[2.2rem] font-medium leading-[1.15] tracking-tight sm:text-[2.8rem]">
          This page took a wrong turn.
        </h1>
        <p className="mt-5 max-w-[54ch] text-pretty text-[1.05rem] leading-relaxed text-ink-soft">
          The page you&apos;re looking for doesn&apos;t exist, or it&apos;s moved. Here&apos;s where you probably meant to go.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-line-strong px-4 py-2 text-[0.9rem] font-medium text-ink transition-colors hover:border-blue hover:text-blue"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          <div>
            <p className="text-[0.8rem] font-medium uppercase tracking-[0.08em] text-ink-soft">
              Popular services
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {services.slice(0, 4).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group inline-flex items-center gap-2 text-[0.98rem] font-medium text-blue transition-colors hover:text-blue-deep"
                  >
                    {service.name}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[0.8rem] font-medium uppercase tracking-[0.08em] text-ink-soft">
              Industries we work with
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {homepageIndustries.slice(0, 4).map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="group inline-flex items-center gap-2 text-[0.98rem] font-medium text-blue transition-colors hover:text-blue-deep"
                  >
                    {industry.name}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
