import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { TrustStats } from "@/components/sections/trust-stats";
import { ServicesShowcase } from "@/components/sections/services-showcase";
import { WhyZspace } from "@/components/sections/why-zspace";
import { FeaturedCaseStudies } from "@/components/sections/featured-case-studies";
import { ProcessSection } from "@/components/sections/process-section";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { TechEcosystem } from "@/components/sections/tech-ecosystem";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { InsightsPreview } from "@/components/sections/insights-preview";
import { SpaceStartsHere } from "@/components/sections/space-starts-here";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Digital Product & Technology Agency`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <TrustStats />

      {/* What are you building? — services reframed as a question, the room
          itself changing color as you move through it. Deliberately full-bleed. */}
      <section className="pt-24 sm:pt-32">
        <Container className="pb-14">
          <SectionHeading
            eyebrow="What are you building?"
            dotColor="coral"
            title="Say it the way you'd actually say it — we'll tell you what it's called"
            description="No service names to decode. Pick the sentence closest to what's actually on your mind."
          />
        </Container>
        <ServicesShowcase />
      </section>

      <section className="bg-lavender py-24 sm:py-32">
        <Container>
          <SectionHeading dotColor="purple" eyebrow="How we actually work" title="Principles, not a poster on the wall" />
          <div className="mt-14">
            <WhyZspace />
          </div>
        </Container>
      </section>

      {/* Inside the work — three case studies, three different rooms. Full-bleed. */}
      <section className="py-24 sm:py-32">
        <Container className="pb-14">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              dotColor="blue"
              eyebrow="Inside the work"
              title="Three projects, three different rooms"
              description="Each one got the layout its work actually called for, not a template."
            />
            <ButtonLink href="/case-studies" variant="secondary" className="hidden sm:inline-flex">
              Explore All Work
            </ButtonLink>
          </div>
        </Container>
        <FeaturedCaseStudies />
        <Container className="pt-8 sm:hidden">
          <ButtonLink href="/case-studies" variant="secondary" className="w-full justify-center">
            Explore All Work
          </ButtonLink>
        </Container>
      </section>

      {/* How ideas become real — scroll-driven transformation, not tabs. */}
      <section className="bg-mist">
        <Container className="pt-24 sm:pt-32">
          <SectionHeading
            dotColor="coral"
            eyebrow="How ideas become real"
            title="A point becomes a product. Here's the shape it takes on the way."
          />
        </Container>
        <ProcessSection />
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading dotColor="mint" eyebrow="The building blocks" title="What we actually build with" />
          <div className="mt-14">
            <TechEcosystem />
          </div>
        </Container>
      </section>

      <section className="bg-sky py-24 sm:py-32">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading dotColor="blue" eyebrow="Built for your industry" title="Different rooms, the same rigor" />
            <ButtonLink href="/industries" variant="secondary" className="hidden sm:inline-flex">
              View All Industries
            </ButtonLink>
          </div>
          <div className="mt-14">
            <IndustriesGrid limit={6} />
          </div>
        </Container>
      </section>

      <section className="bg-peach py-24 sm:py-32">
        <Container>
          <SectionHeading dotColor="coral" eyebrow="The human part" title="What it's like on the other side of the project" />
          <div className="mt-14">
            <TestimonialsSection />
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading dotColor="yellow" eyebrow="Insights" title="Notes on technology, product, and growth" />
            <ButtonLink href="/blog" variant="secondary" className="hidden sm:inline-flex">
              Read All Insights
            </ButtonLink>
          </div>
          <div className="mt-14">
            <InsightsPreview />
          </div>
        </Container>
      </section>

      <SpaceStartsHere />
    </>
  );
}
