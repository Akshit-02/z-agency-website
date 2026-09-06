import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { CaseStudiesFilterGrid } from "@/components/case-studies/case-studies-filter-grid";
import { ContextualCta } from "@/components/ui/contextual-cta";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "A look at how Zspace approaches real engagements across fintech, healthcare, logistics, e-commerce, travel, and education.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Representative engagements across industries"
        description="These case studies illustrate our typical scope, process, and outcomes. Client names are placeholders pending case studies from live engagements."
      />
      <section className="pb-24 pt-14">
        <Container>
          <CaseStudiesFilterGrid />
        </Container>
      </section>
      <ContextualCta
        eyebrow="See how we can build yours"
        title="Every one of these started as a rough version of what you're picturing right now."
        ctaLabel="Start a Project"
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}
