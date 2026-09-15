import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of the ZSpace website.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" accent="blue" />
      <Container className="max-w-[720px] py-16 sm:py-20">
        <div className="flex flex-col gap-8 text-[1rem] leading-relaxed text-ink-soft">
          <p>Last updated: January 2026</p>

          <section>
            <h2 className="mb-2 font-display text-[1.2rem] font-medium text-ink">Use of this site</h2>
            <p>
              This website is provided by ZSpace to share information about
              our services and to allow prospective clients to get in touch.
              Content on this site should not be treated as a binding offer
              or contractual commitment.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-[1.2rem] font-medium text-ink">Project engagements</h2>
            <p>
              Any actual services provided by ZSpace are governed by a
              separate written agreement or statement of work signed by both
              parties, not by the contents of this website.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-[1.2rem] font-medium text-ink">Intellectual property</h2>
            <p>
              The design, branding and written content of this site are the
              property of ZSpace and may not be reproduced without
              permission.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-[1.2rem] font-medium text-ink">Contact</h2>
            <p>
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${site.email}`} className="font-medium text-blue underline">
                {site.email}
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
