import type { Metadata } from "next";
import { LegalLayout } from "@/components/ui/legal-layout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects information.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      effectiveDate="September 6, 2026"
      sections={[
        {
          id: "overview",
          heading: "Overview",
          body: (
            <p>
              This policy explains what information {siteConfig.legalName} (&ldquo;Zspace,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us&rdquo;) collects when you use this website, why we collect
              it, and the choices you have. It applies to zspace.agency and any subdomains.
            </p>
          ),
        },
        {
          id: "information-we-collect",
          heading: "Information we collect",
          body: (
            <>
              <p>We collect information in three ways:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>Information you provide directly</strong> — your name, email, company,
                  and project details when you submit a contact form, request a consultation, or
                  subscribe to our newsletter.
                </li>
                <li>
                  <strong>Information collected automatically</strong> — IP address, browser type,
                  device information, and pages visited, gathered through standard web analytics.
                </li>
                <li>
                  <strong>Cookies and similar technologies</strong> — used to remember preferences
                  and understand aggregate site usage. See the Cookies section below.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "how-we-use-information",
          heading: "How we use information",
          body: (
            <ul className="list-disc space-y-2 pl-5">
              <li>To respond to inquiries and schedule consultations</li>
              <li>To send project-related communication if we begin working together</li>
              <li>To send newsletter content, only if you&rsquo;ve opted in</li>
              <li>To understand how visitors use our site so we can improve it</li>
              <li>To meet legal and accounting obligations</li>
            </ul>
          ),
        },
        {
          id: "cookies",
          heading: "Cookies",
          body: (
            <p>
              We use a limited set of cookies for essential site functionality and aggregate
              analytics. You can disable non-essential cookies through your browser settings;
              doing so won&rsquo;t affect your ability to browse the site, though some features
              like form persistence may not work as expected.
            </p>
          ),
        },
        {
          id: "third-parties",
          heading: "Third-party services",
          body: (
            <p>
              We use a small number of third-party services to operate this site and our
              business — for example, hosting, analytics, email delivery, and scheduling tools.
              These providers only receive the information necessary to perform their function
              and are contractually restricted from using it for other purposes.
            </p>
          ),
        },
        {
          id: "data-retention",
          heading: "Data retention",
          body: (
            <p>
              We retain contact and project information for as long as necessary to respond to
              your inquiry, deliver services, and meet legal obligations. You can request
              deletion of your information at any time using the contact details below.
            </p>
          ),
        },
        {
          id: "your-rights",
          heading: "Your rights",
          body: (
            <p>
              Depending on your location, you may have the right to access, correct, export, or
              delete the personal information we hold about you, and to opt out of marketing
              communications at any time. To exercise any of these rights, email us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-2">
                {siteConfig.email}
              </a>
              .
            </p>
          ),
        },
        {
          id: "childrens-privacy",
          heading: "Children's privacy",
          body: (
            <p>
              This site is not directed at children under 16, and we do not knowingly collect
              information from them.
            </p>
          ),
        },
        {
          id: "changes",
          heading: "Changes to this policy",
          body: (
            <p>
              We may update this policy from time to time. Material changes will be reflected by
              updating the effective date at the top of this page.
            </p>
          ),
        },
        {
          id: "contact",
          heading: "Contact",
          body: (
            <p>
              Questions about this policy can be sent to{" "}
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
