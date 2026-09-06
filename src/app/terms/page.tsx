import type { Metadata } from "next";
import { LegalLayout } from "@/components/ui/legal-layout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms that govern use of the ${siteConfig.name} website and engagement of our services.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      effectiveDate="September 6, 2026"
      sections={[
        {
          id: "acceptance",
          heading: "Acceptance of terms",
          body: (
            <p>
              By accessing this website or engaging {siteConfig.legalName} for services, you agree
              to these terms. If you don&rsquo;t agree with them, please don&rsquo;t use the site or
              engage our services.
            </p>
          ),
        },
        {
          id: "services",
          heading: "Description of services",
          body: (
            <p>
              Zspace provides website development, mobile app development, Shopify development, AI
              solutions, automation, and UI/UX design services. The specific scope, timeline, and
              cost of any engagement are defined in a separate written proposal or statement of
              work agreed to by both parties — these general terms don&rsquo;t replace that
              agreement, they sit alongside it.
            </p>
          ),
        },
        {
          id: "client-responsibilities",
          heading: "Client responsibilities",
          body: (
            <p>
              Clients are responsible for providing timely feedback, necessary access and
              credentials, and content required to complete a project. Delays in providing these
              may affect project timelines.
            </p>
          ),
        },
        {
          id: "intellectual-property",
          heading: "Intellectual property",
          body: (
            <p>
              Unless otherwise agreed in a project&rsquo;s statement of work, ownership of final
              deliverables transfers to the client upon full payment. Zspace retains the right to
              reuse general methodologies, non-confidential know-how, and to reference completed
              work in our own portfolio unless the client requests otherwise in writing.
            </p>
          ),
        },
        {
          id: "payment",
          heading: "Payment terms",
          body: (
            <p>
              Payment schedules are defined per project in the applicable proposal or statement of
              work. Unless otherwise agreed, invoices are due within 15 days of issue. Late
              payment may result in a pause of ongoing work until the account is current.
            </p>
          ),
        },
        {
          id: "confidentiality",
          heading: "Confidentiality",
          body: (
            <p>
              Both parties agree to keep confidential any non-public business, technical, or
              financial information shared during the course of an engagement, and to use it
              solely for the purposes of that engagement.
            </p>
          ),
        },
        {
          id: "liability",
          heading: "Limitation of liability",
          body: (
            <p>
              To the extent permitted by law, Zspace&rsquo;s total liability for any claim
              relating to our services is limited to the amount paid by the client for the
              services giving rise to the claim. We are not liable for indirect, incidental, or
              consequential damages.
            </p>
          ),
        },
        {
          id: "termination",
          heading: "Termination",
          body: (
            <p>
              Either party may terminate an active engagement as outlined in the relevant
              statement of work, typically with written notice. The client remains responsible
              for payment of work completed up to the termination date.
            </p>
          ),
        },
        {
          id: "governing-law",
          heading: "Governing law",
          body: (
            <p>
              These terms are governed by the laws of the jurisdiction in which{" "}
              {siteConfig.legalName} is registered, without regard to conflict-of-law principles.
            </p>
          ),
        },
        {
          id: "changes",
          heading: "Changes to these terms",
          body: (
            <p>
              We may update these terms periodically. Continued use of the site after changes are
              posted constitutes acceptance of the revised terms.
            </p>
          ),
        },
        {
          id: "contact",
          heading: "Contact",
          body: (
            <p>
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-2">
                {siteConfig.email}
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
