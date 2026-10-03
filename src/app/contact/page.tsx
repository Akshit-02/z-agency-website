import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactSections";
import { ProcessPanel } from "@/components/detail/DetailKit";
import { ContactForm } from "@/components/ContactForm";
import { StructuredData } from "@/components/StructuredData";
import { site } from "@/lib/site";
import { ORG_ID, WEBSITE_ID } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact — Start a Project",
  description:
    "Tell ZSpace Labs about your website, app, AI automation or Shopify project. We respond with honest scoping, usually within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact ZSpace Labs",
          url: `${site.url}/contact`,
          isPartOf: { "@id": WEBSITE_ID },
          about: { "@id": ORG_ID },
        }}
      />
      <ContactHero form={<ContactForm />} />
      <ProcessPanel
        eyebrow="What happens next"
        title={[<>No sales sequence.</>, <span key="j" className="italic text-orange-bright">Just a straight answer.</span>]}
        steps={[
          { title: "You share the details", body: "A few lines on what you're building, fixing or exploring. Rough ideas are fine." },
          { title: "We read it properly", body: "Someone who builds this kind of thing reads your note and thinks about what it actually needs." },
          { title: "You get a clear read", body: "We reply with an honest view on scope and sensible next steps, usually within one business day." },
        ]}
      />
    </>
  );
}
