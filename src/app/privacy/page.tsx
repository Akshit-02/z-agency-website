import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ZSpace collects, uses and protects information submitted through this website.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" accent="blue" />
      <Container className="max-w-[720px] py-16 sm:py-20">
        <div className="flex flex-col gap-8 text-[1rem] leading-relaxed text-ink-soft">
          <p>Last updated: January 2026</p>

          <section>
            <h2 className="mb-2 font-display text-[1.2rem] font-medium text-ink">Information we collect</h2>
            <p>
              When you submit our contact form, we collect the information you
              provide directly — such as your name, email address, company and
              project details — solely to respond to your inquiry.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-[1.2rem] font-medium text-ink">How we use it</h2>
            <p>
              Information submitted through this site is used only to evaluate
              and respond to project inquiries. We do not sell or share your
              information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-[1.2rem] font-medium text-ink">Cookies and analytics</h2>
            <p>
              This site may use privacy-respecting analytics to understand
              aggregate traffic patterns and improve the site. No personally
              identifying advertising cookies are used.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-display text-[1.2rem] font-medium text-ink">Contact</h2>
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
