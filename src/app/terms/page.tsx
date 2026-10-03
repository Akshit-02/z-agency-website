import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of the ZSpace Labs website.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" accent="blue" />
      <Container className="max-w-[720px] py-16 sm:py-20">
        <div className="flex max-w-[760px] flex-col gap-10 text-[1rem] leading-relaxed text-ink/65 [counter-reset:legal] [&>section]:border-t [&>section]:border-ink/10 [&>section]:pt-8 [&>section>h2]:before:mr-3 [&>section>h2]:before:align-middle [&>section>h2]:before:font-mono [&>section>h2]:before:text-[0.75rem] [&>section>h2]:before:text-orange [&>section>h2]:before:content-[counter(legal,decimal-leading-zero)] [&>section]:[counter-increment:legal]">
          <p className="w-fit rounded-full border border-ink/10 px-4 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink/50">Last updated: January 2026</p>

          <section>
            <h2 className="mb-3 font-serif-display text-[1.7rem] leading-tight text-ink">Use of this site</h2>
            <p>
              This website is provided by ZSpace Labs to share information about
              our services and to allow prospective clients to get in touch.
              Content on this site should not be treated as a binding offer
              or contractual commitment.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif-display text-[1.7rem] leading-tight text-ink">Project engagements</h2>
            <p>
              Any actual services provided by ZSpace Labs are governed by a
              separate written agreement or statement of work signed by both
              parties, not by the contents of this website.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif-display text-[1.7rem] leading-tight text-ink">Intellectual property</h2>
            <p>
              The design, branding and written content of this site are the
              property of ZSpace Labs and may not be reproduced without
              permission.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif-display text-[1.7rem] leading-tight text-ink">Contact</h2>
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
