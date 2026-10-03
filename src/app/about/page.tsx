import type { Metadata } from "next";
import {
  AboutHero,
  Beliefs,
  Capabilities,
  FeelsObvious,
  HowWeThink,
  IdeaToReal,
} from "@/components/about/AboutSections";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { site } from "@/lib/site";
import { ORG_ID, WEBSITE_ID } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "About ZSpace Labs — A Technology and Digital Product Studio" },
  description:
    "ZSpace Labs is a technology and digital product studio bringing strategy, design and engineering together. How we think, work and partner with clients.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About ZSpace Labs",
          url: `${site.url}/about`,
          description: site.intro,
          isPartOf: { "@id": WEBSITE_ID },
          mainEntity: { "@id": ORG_ID },
        }}
      />
      <AboutHero />
      <IdeaToReal />
      <HowWeThink />
      <Beliefs />
      <Capabilities />
      <FeelsObvious />
      <CTASection
        title={
          <>
            Let&apos;s build something{" "}
            <span className="text-orange-bright">worth talking about</span>.
          </>
        }
        description="We work with founders, marketing teams and product teams anywhere in the world. The easiest next step is a conversation about what you're trying to build."
        primaryLabel="Talk to ZSpace Labs"
      />
    </>
  );
}
