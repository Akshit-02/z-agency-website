import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ZSpace Labs collects, uses and protects information submitted through this website.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" accent="blue" />
      <Container className="max-w-[720px] py-16 sm:py-20">
        <div className="flex max-w-[760px] flex-col gap-10 text-[1rem] leading-relaxed text-ink/65 [counter-reset:legal] [&>section]:border-t [&>section]:border-ink/10 [&>section]:pt-8 [&>section>h2]:before:mr-3 [&>section>h2]:before:align-middle [&>section>h2]:before:font-mono [&>section>h2]:before:text-[0.75rem] [&>section>h2]:before:text-orange [&>section>h2]:before:content-[counter(legal,decimal-leading-zero)] [&>section]:[counter-increment:legal]">
          <p className="w-fit rounded-full border border-ink/10 px-4 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink/50">Last updated: January 2026</p>

          <section>
            <h2 className="mb-3 font-serif-display text-[1.7rem] leading-tight text-ink">Information we collect</h2>
            <p>
              When you submit our contact form, we collect the information you
              provide directly — such as your name, email address, company and
              project details — solely to respond to your inquiry.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif-display text-[1.7rem] leading-tight text-ink">How we use it</h2>
            <p>
              Information submitted through this site is used only to evaluate
              and respond to project inquiries. We do not sell or share your
              information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif-display text-[1.7rem] leading-tight text-ink">Cookies and analytics</h2>
            <p>
              This site may use privacy-respecting analytics to understand
              aggregate traffic patterns and improve the site. No personally
              identifying advertising cookies are used.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-serif-display text-[1.7rem] leading-tight text-ink">Contact</h2>
            <p>
              Questions about this policy can be sent to{" "}
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
