import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/ScrollReveal";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { services, type ServiceAccent } from "@/lib/services-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — Web, Mobile, AI Automation, Design, Shopify & CRO",
  description:
    "ZSpace offers full-stack website development, mobile app development, AI automation, UI/UX design, Shopify development and CRO audits for growing businesses.",
  alternates: { canonical: "/services" },
};

const accentText: Record<ServiceAccent, string> = {
  blue: "text-blue",
  orange: "text-orange",
};

const accentHover: Record<ServiceAccent, string> = {
  blue: "group-hover:border-blue group-hover:bg-blue",
  orange: "group-hover:border-orange group-hover:bg-orange",
};

export default function ServicesPage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
          ],
        }}
      />
      <PageHero
        eyebrow="Services"
        title={
          <>
            Six ways we help businesses build better{" "}
            <span className="text-blue">digital products</span>.
          </>
        }
        description="Each service can stand alone or work together as one engagement. Every project starts with the same question: what does this business actually need to move forward?"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <ul className="flex flex-col">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={0.04 * i}>
                <li className="group border-t border-line last:border-b">
                  <Link
                    href={`/services/${service.slug}`}
                    className="grid gap-4 py-9 transition-colors sm:grid-cols-[80px_1.3fr_1.4fr_auto] sm:items-center sm:gap-8"
                  >
                    <span className={`font-display text-sm ${accentText[service.accent]}`}>
                      {service.index}
                    </span>
                    <h2 className="font-display text-[1.5rem] font-medium tracking-tight sm:text-[1.7rem]">
                      {service.name}
                    </h2>
                    <p className="max-w-[46ch] text-pretty text-[0.98rem] leading-relaxed text-ink-soft">
                      {service.summary}
                    </p>
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink transition-all duration-300 group-hover:text-white ${accentHover[service.accent]}`}
                    >
                      <ArrowUpRight className="h-4.5 w-4.5" />
                    </span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <CTASection
        title={
          <>
            Not sure which service fits? Let&apos;s{" "}
            <span className="text-blue-bright">talk it through</span>.
          </>
        }
        description="Most projects touch more than one of these. Tell us what you're building and we'll help you figure out the right scope."
      />
    </>
  );
}
