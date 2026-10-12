import type { BlogPost } from "./blog-data";

/**
 * Batch 381–430 fintech and security set: payment reconciliation automation,
 * Consumer Data Right (open banking) integration in Australia, enterprise
 * SSO implementation, passkeys, web application threat modelling and
 * software supply chain security. Only the CDR page carries an Australian
 * slug because the regime is Australia-specific. Educational: ZSpace Labs is
 * not an accredited CDR recipient, security assessor or auditor, and the
 * pages say so where relevant. No benchmarks or savings figures are quoted.
 * Sources checked 2026-10-10: Stripe payout reconciliation; Xero bank
 * reconciliation; ACCC CDR page and law-firm summaries (non-bank lending
 * product data 13 July 2026, consumer data from 9 November 2026, staged);
 * Consumer Data Standards; OASIS SAML 2.0 core; RFC 7644 (SCIM); W3C
 * WebAuthn Level 3 Recommendation (25 Aug 2026); passkeys.dev; OWASP threat
 * modelling; Threat Modeling Manifesto; SLSA v1.2; CycloneDX; SPDX; joint
 * SBOM minimum elements (2026, co-authored by ASD's ACSC; NZ NCSC page).
 */
export const auFintechSecurityPosts: BlogPost[] = [
  {
    slug: "payment-reconciliation-automation",
    title: "Payment Reconciliation Automation: Matching Orders, Payouts, Bank Deposits and the Ledger",
    seoTitle: "Payment Reconciliation Automation: A Practical Guide",
    excerpt:
      "How to automate payment reconciliation: matching orders to provider transactions, payouts, bank deposits and the ledger, with fees, refunds and GST.",
    category: "Web Development",
    banner: "invoicematch",
    sceneKind: "orders",
    bannerAlt: "Orders and invoices matched to payment provider transactions, grouped into payouts, matched to bank deposits and posted to the accounting ledger, with an exceptions queue",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["ecommerce", "saas-technology", "retail", "professional-services", "fintech"],
    relatedSlugs: ["accounting-software-integration-australia", "payment-gateway-integration-australia", "api-integration-reliability"],
    faqs: [
      {
        q: "What is payment reconciliation?",
        a: "Confirming that every payment you expected was received, every amount deposited in the bank is explained, and the accounting ledger matches both. For online businesses it usually means matching orders or invoices to payment provider transactions, transactions to payouts, payouts to bank deposits, and everything to the ledger.",
      },
      {
        q: "Why don't payouts match order totals?",
        a: "Payment providers usually deposit net amounts in batches: many transactions minus fees, refunds, chargebacks and adjustments, settled days later. Reconciliation has to break each payout back into its components.",
      },
      {
        q: "How should fees and GST be handled?",
        a: "Record provider fees as expenses with the correct GST treatment, rather than netting them off sales, so revenue and GST on sales are reported correctly. Check the GST treatment of each provider's fees with your accountant.",
      },
      {
        q: "Can accounting software do this already?",
        a: "Partly. Xero, MYOB and others reconcile bank feeds against ledger entries and some payment providers offer integrations. Custom automation helps when you have several providers or channels, high volumes, marketplace splits or complex refunds that the standard integrations do not explain.",
      },
      {
        q: "What should happen to unmatched items?",
        a: "They go to an exceptions queue with the evidence attached and a reason code, for a person to resolve. Track how many exceptions arise and why, and fix the causes, such as missing references or timing rules.",
      },
    ],
    content: [
      {
        heading: "How do you automate payment reconciliation?",
        body: [
          "**Pull data from every source (orders or invoices, payment provider transactions and payouts, bank feeds and the ledger), match each layer with clear rules (exact references first, then amounts and dates within tolerances, including many-to-one matches), record fees, refunds, chargebacks and GST explicitly, post summarised entries to the accounting system, and route anything unmatched to an exceptions queue with evidence.** Good reconciliation explains every dollar between the sale and the bank.",
          "This guide is for finance, operations and engineering teams in ecommerce, SaaS and service businesses. For connecting accounting systems, see [[/blogs/accounting-software-integration-australia|accounting software integration]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Reconcile in layers: order, transaction, payout, bank, ledger.",
          "Use provider references and payout reports, not just amounts.",
          "Record fees gross; do not net them off revenue.",
          "Handle refunds, chargebacks and timing explicitly.",
          "Send exceptions to people with evidence attached.",
          "Keep an audit trail of every match and adjustment.",
        ],
      },
      {
        heading: "The reconciliation chain",
        body: [],
        table: {
          headers: ["Layer", "Matched to", "Typical keys"],
          rows: [
            ["**Order or invoice**", "Provider transaction", "Order ID or invoice number in payment metadata"],
            ["**Provider transaction**", "Payout", "Payout ID and balance transaction reports"],
            ["**Payout**", "Bank deposit", "Payout amount, date, statement reference"],
            ["**All of the above**", "Ledger", "Sales, fees, refunds, chargebacks, clearing accounts"],
          ],
        },
      },
      {
        heading: "Matching rules",
        body: [],
        checklist: [
          "**Exact:** shared reference such as order ID or payout ID.",
          "**Tolerance:** amount and date within agreed limits when references are missing.",
          "**Many-to-one:** one payout covering many transactions; one bank deposit covering several payouts.",
          "**Partial:** part payments and split tenders.",
          "**Timing:** settlement lags, weekends and public holidays.",
          "Use provider payout reconciliation reports where available; for example Stripe documents how to reconcile payouts to transactions ([[https://docs.stripe.com/payouts/reconciliation|Stripe]]).",
        ],
      },
      {
        heading: "Fees, refunds, chargebacks and GST",
        body: [
          "Record sales gross and provider fees as expenses, using a clearing account for money held by the provider. Refunds reverse sales and may arrive in different payouts from the original sale. Chargebacks need their own status and evidence workflow. Apply the correct GST treatment to sales, refunds and fees, and confirm it with your accountant. In accounting software, bank reconciliation then matches the payout deposit against the clearing account ([[https://central.xero.com/s/article/Reconcile-your-bank-account|Xero]]).",
        ],
      },
      {
        heading: "Build, buy or combine",
        body: [],
        table: {
          headers: ["Option", "Fits when"],
          rows: [
            ["**Provider-to-accounting app**", "One provider, simple sales, moderate volume"],
            ["**Reconciliation software**", "Several providers and banks, standard patterns"],
            ["**Custom automation**", "Marketplace splits, many channels, complex refunds, high volume, or unusual ledgers"],
          ],
        },
      },
      {
        heading: "Hypothetical example: an online retailer with three payment methods",
        body: [
          "**This example is hypothetical.** A retailer took cards through one provider, a wallet through another and buy now pay later through a third. Month-end took days. It built a job that pulled orders, provider transactions and payout reports daily, matched them by order ID and payout ID, posted summary journals with sales, fees and refunds to Xero through a clearing account per provider, and left only bank deposits for Xero's reconciliation screen. Unmatched items went to a queue with reason codes, reviewed daily.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Netting fees off revenue.",
          "Matching on amount alone.",
          "Ignoring refunds that settle in later payouts.",
          "No clearing accounts for money held by providers.",
          "Exceptions handled in spreadsheets without an audit trail.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/payment-gateway-integration-australia|Payment gateway integration in Australia]] for provider choice and surcharge rules.",
          "[[/blogs/ecommerce-payment-failure-handling|Payment failure handling]] for failed and disputed payments.",
          "[[/blogs/marketplace-payment-architecture|Marketplace payment architecture]] for split payouts.",
          "[[/blogs/api-integration-reliability|API integration reliability]] for idempotent data pulls.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Payment reconciliation automation works when it follows the money through every layer, uses references rather than guesswork, treats fees, refunds and GST explicitly, and gives people a clear exceptions queue. Start with your highest-volume provider and expand. For UK pay-by-bank payments and their status handling, see [[/blogs/open-banking-integration-uk|open banking integration in the UK]].",
        ],
        cta: {
          title: "Month-end taking too long?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|payment and accounting integrations]] and [[/services/ai-automation|finance workflow automation]]. We are not accountants, but if it would help to map your reconciliation, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "consumer-data-right-integration-australia",
    title: "Consumer Data Right (Open Banking) Integration in Australia: A Technical Guide for Product Teams",
    seoTitle: "CDR and Open Banking Integration in Australia",
    excerpt:
      "How product teams can use Australia's Consumer Data Right: sectors and status, accreditation and representative options, consent flows and data handling.",
    category: "Web Development",
    banner: "compliancemap",
    sceneKind: "security",
    bannerAlt: "A consumer consenting in an app to share bank data through the Consumer Data Right, with an accredited recipient retrieving data from a data holder and a consent dashboard",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["fintech", "energy-cleantech", "insurtech", "saas-technology"],
    relatedSlugs: ["fintech-website-development", "privacy-by-design-software-australia", "oauth-vs-openid-connect"],
    faqs: [
      {
        q: "What is the Consumer Data Right?",
        a: "An Australian regime that lets consumers direct data holders, such as banks and energy retailers, to share data about them securely with accredited recipients. It is often called open banking in the banking sector. It also requires data holders to publish product reference data.",
      },
      {
        q: "Which sectors are live?",
        a: "Banking (since 2020) and energy (since November 2022). For non-bank lenders, product data sharing began in July 2026 and consumer data sharing is being phased in from November 2026, according to the ACCC and legal commentary. Check the official CDR sites for the current position.",
      },
      {
        q: "Do we need to be accredited to use CDR data?",
        a: "To receive CDR data directly you generally need accreditation. Alternatives include operating as a CDR representative of an accredited principal, or using an accredited intermediary's services. Each has different obligations; get legal advice on which fits.",
      },
      {
        q: "Can CDR initiate payments?",
        a: "Legislation for action initiation was passed, but specific actions must be declared and rules made before they apply. At the time of writing we have not confirmed any action type in operation, so treat CDR as data sharing for now and check the official sources.",
      },
      {
        q: "How is CDR different from screen scraping?",
        a: "CDR uses standardised APIs, explicit consent, accreditation and specific privacy safeguards. Screen scraping uses customers' login credentials to collect data from websites, which raises security and liability concerns. Many products are moving to CDR where it covers the data they need.",
      },
    ],
    content: [
      {
        heading: "How can product teams use the Consumer Data Right?",
        body: [
          "**The Consumer Data Right (CDR) lets Australian consumers direct banks, energy retailers and, progressively, non-bank lenders to share their data with accredited recipients through standardised APIs. Product teams can access it by becoming accredited, by operating as a CDR representative of an accredited principal, or by using an accredited intermediary; then they must build compliant consent flows, consumer dashboards, data handling and deletion, and meet the privacy safeguards.** Choose the access model with legal advice before designing the product.",
          "This guide is for fintech, proptech, accounting and energy product teams. It is general information, not legal advice. ZSpace Labs is not an accredited data recipient.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Banking and energy are live; non-bank lending is phasing in.",
          "Decide the access model first: accreditation, representative or intermediary.",
          "Consent flows follow the Consumer Data Standards.",
          "Consumers need a dashboard to see and withdraw consents.",
          "Delete or de-identify data when consent ends, as the rules require.",
          "Check current status on official sources; it changes.",
        ],
      },
      {
        heading: "Sectors and status",
        body: [],
        table: {
          headers: ["Sector", "Status (as reported, October 2026)"],
          rows: [
            ["**Banking**", "Live since 1 July 2020; all banks participate"],
            ["**Energy**", "Consumer data sharing since 15 November 2022 for covered retailers"],
            ["**Non-bank lending**", "Product data from 13 July 2026; consumer data phased in from 9 November 2026 by provider size"],
            ["**Action initiation**", "Framework legislated; specific actions require declarations and rules"],
          ],
        },
      },
      {
        heading: "Access models",
        body: [],
        table: {
          headers: ["Model", "What it involves", "Fits when"],
          rows: [
            ["**Accreditation**", "Apply to the ACCC; meet information security, insurance and governance requirements", "CDR data is core to your business at scale"],
            ["**Sponsored accreditation**", "Accredited with an accredited sponsor collecting data for you", "You want accreditation with less infrastructure"],
            ["**CDR representative**", "An accredited principal collects data on your behalf under a contract with required terms", "Faster start; principal carries much of the compliance"],
            ["**Intermediary services**", "Accredited providers offer APIs and consent flows", "Building directly would duplicate commodity work"],
          ],
        },
      },
      {
        heading: "Building the experience",
        body: [],
        checklist: [
          "Consent flows that follow the Consumer Data Standards and their consumer experience guidelines ([[https://consumerdatastandardsaustralia.github.io/standards/|Consumer Data Standards]]).",
          "Ask only for data you need, for a stated purpose and duration.",
          "Authentication with the data holder through the standard redirect flow; never collect bank passwords.",
          "A consumer dashboard to view and withdraw consents.",
          "Data handling: storage, access controls, logging, retention, deletion or de-identification when consent ends.",
          "Use product reference data (published by data holders) for comparison features without consumer consent.",
          "See [[/blogs/privacy-by-design-software-australia|privacy by design]] and [[/blogs/oauth-vs-openid-connect|OAuth and OpenID Connect]] for the underlying patterns.",
        ],
      },
      {
        heading: "Use cases",
        body: [
          "Common uses include income and expense verification for lending, budgeting and financial management apps, accounting feeds, energy plan comparison using actual usage, and switching services. Check that the data you need is in scope for the sector and that the use fits your access model.",
        ],
      },
      {
        heading: "Hypothetical example: a lending application flow",
        body: [
          "**This example is hypothetical.** A small lender wanted to replace bank statement uploads. Legal advice led it to start as a CDR representative of an accredited intermediary. Applicants chose their bank, were redirected to authenticate with it, consented to share 90 days of transactions for assessing the application, and could see and withdraw the consent in a dashboard. Data was deleted when the consent expired or the application closed, and screen scraping was removed.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Designing the product before choosing the access model.",
          "Asking for more data or a longer duration than needed.",
          "No consent dashboard or withdrawal path.",
          "Keeping data after consent ends.",
          "Assuming action initiation is available.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/fintech-website-development|Fintech website development]] for the surrounding product.",
          "[[/blogs/first-party-data-strategy-australia|First-party data strategy]] for Privacy Act basics.",
          "[[/blogs/payment-reconciliation-automation|Payment reconciliation automation]] for finance workflows.",
          "[[/blogs/ai-agents-in-banking-and-financial-services|AI agents in banking]] for adjacent automation.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "CDR offers a consented, standardised alternative to statement uploads and screen scraping. Choose an access model with legal advice, follow the standards for consent and authentication, give consumers control through dashboards, and delete data when consent ends. Check official sources for the latest sector status. For the UK's payments-led regime, see [[/blogs/open-banking-integration-uk|open banking integration in the UK]].",
        ],
        cta: {
          title: "Building a product on CDR data?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|fintech web applications and integrations]] and [[/services/mobile-app-development|mobile apps]]. We are not an accredited data recipient or legal adviser, but we can build the product around your chosen access model.",
        },
      },
    ],
  },
  {
    slug: "enterprise-sso-implementation",
    title: "Enterprise Single Sign-On Implementation: SAML, OIDC, Provisioning and Common Mistakes",
    seoTitle: "Enterprise SSO Implementation: SAML, OIDC and SCIM",
    excerpt:
      "How to add enterprise SSO to a SaaS product: SAML vs OIDC, per-tenant identity providers, SCIM and just-in-time provisioning, role mapping and testing.",
    category: "Web Development",
    banner: "accountmap",
    sceneKind: "security",
    bannerAlt: "Several customer identity providers connected to a multi-tenant SaaS product through SAML and OIDC, with SCIM provisioning, group-to-role mapping and an admin break-glass account",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise", "fintech", "healthcare-healthtech"],
    relatedSlugs: ["oauth-vs-openid-connect", "saas-roles-and-permissions", "multi-tenant-saas-architecture"],
    faqs: [
      {
        q: "Should we support SAML or OIDC for enterprise SSO?",
        a: "Ideally both. Many enterprises still use SAML 2.0 for workforce single sign-on, while OIDC is common for newer integrations. Most identity platforms and authentication providers support both, so offering both removes a sales blocker.",
      },
      {
        q: "What is SCIM and do we need it?",
        a: "SCIM is a standard API for provisioning and deprovisioning users and groups from the customer's identity provider. It ensures leavers lose access promptly and groups map to roles. Larger customers often require it alongside SSO.",
      },
      {
        q: "What is just-in-time provisioning?",
        a: "Creating a user account automatically the first time someone signs in through SSO, using attributes from the identity provider. It is simpler than SCIM but does not remove users who leave, so pair it with SCIM or regular reviews.",
      },
      {
        q: "How do we know which identity provider to send a user to?",
        a: "Common approaches are home realm discovery by email domain (after verifying the customer owns it), a tenant-specific sign-in URL, or asking for the organisation name. Never trust an unverified domain claim.",
      },
      {
        q: "Should we build SSO ourselves?",
        a: "Usually not from scratch. Authentication providers and well-maintained libraries handle SAML and OIDC protocol details, certificate rotation and many edge cases. Your work is tenant configuration, role mapping, admin experience and testing.",
      },
    ],
    content: [
      {
        heading: "How do you implement enterprise SSO in a SaaS product?",
        body: [
          "**Support both SAML 2.0 and OpenID Connect through a proven authentication provider or library; let each tenant configure its own identity provider; route users to the right provider by verified domain or tenant URL; provision users with SCIM (or just-in-time with reviews); map identity provider groups to your roles; keep a break-glass administrator; and test against the identity providers your customers use.** SSO is a sales requirement for many enterprise buyers and a security control for them.",
          "This guide is for SaaS product and engineering teams. For the protocols, see [[/blogs/oauth-vs-openid-connect|OAuth 2.0 vs OpenID Connect]]; for permissions, [[/blogs/saas-roles-and-permissions|SaaS roles and permissions]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Offer SAML and OIDC; use a proven provider or library.",
          "One identity provider configuration per tenant (sometimes several).",
          "Verify domains before using them for routing.",
          "SCIM for joiners, movers and leavers.",
          "Map groups to roles; keep least privilege.",
          "Test with real identity providers before customers do.",
        ],
      },
      {
        heading: "Architecture",
        body: [],
        table: {
          headers: ["Component", "What it does"],
          rows: [
            ["**Tenant SSO configuration**", "IdP metadata, certificates, protocol, attribute mapping, enforcement settings"],
            ["**Discovery**", "Route users to their IdP by verified domain or tenant URL"],
            ["**Protocol handling**", "SAML assertions or OIDC tokens validated by a proven library"],
            ["**Provisioning**", "SCIM endpoints ([[https://www.rfc-editor.org/rfc/rfc7644|RFC 7644]]) or just-in-time creation"],
            ["**Role mapping**", "IdP groups or claims mapped to product roles"],
            ["**Sessions**", "Session lifetime, re-authentication for sensitive actions, logout"],
            ["**Admin tools**", "Self-service setup, test connection, audit logs, break-glass account"],
          ],
        },
      },
      {
        heading: "Validation and security",
        body: [],
        checklist: [
          "Validate SAML signatures, audience, recipient, timestamps and replay ([[https://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf|SAML 2.0 Core]]).",
          "Validate OIDC ID tokens: signature, issuer, audience, expiry and nonce.",
          "Match users on a stable identifier from the IdP, not just email.",
          "Do not let a tenant claim a domain without proving ownership.",
          "Support certificate rotation without downtime.",
          "Log sign-ins, failures and configuration changes.",
        ],
      },
      {
        heading: "Admin experience",
        body: [
          "Customer administrators should be able to set up SSO themselves with clear instructions for common identity providers, test the connection before enforcing it, choose whether SSO is optional or required, map groups to roles, and see recent sign-in activity. Keep at least one break-glass account with strong MFA so customers are not locked out if their identity provider fails.",
        ],
      },
      {
        heading: "Hypothetical example: a B2B analytics SaaS",
        body: [
          "**This example is hypothetical.** An analytics SaaS lost deals because it lacked SSO. It added SAML and OIDC through an authentication provider, built a tenant settings page with metadata upload, a test button and group-to-role mapping, verified email domains through DNS records, and added SCIM so customers' leavers were deactivated automatically. It tested with the identity providers its prospects used before announcing the feature.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Matching accounts on unverified email addresses.",
          "Accepting unsigned or poorly validated assertions.",
          "Just-in-time provisioning with no deprovisioning.",
          "Enforcing SSO with no break-glass access.",
          "Only testing with one identity provider.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/multi-tenant-saas-architecture|Multi-tenant SaaS architecture]] for tenant configuration.",
          "[[/blogs/passkeys-implementation|Passkeys]] for phishing-resistant sign-in for non-SSO users.",
          "[[/blogs/secrets-management|Secrets management]] for certificates and client secrets.",
          "[[/blogs/api-security-best-practices|API security best practices]] for token handling.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Enterprise SSO is a combination of standard protocols and careful product work: per-tenant configuration, verified routing, provisioning, role mapping, admin tools and testing. Use proven libraries for the protocols and invest in the experience around them. For automating access when people join, move and leave, see [[/blogs/joiner-mover-leaver-automation|joiner-mover-leaver automation]].",
        ],
        cta: {
          title: "Adding SSO to win enterprise customers?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|secure SaaS applications, authentication and integrations]]. If it would help to plan SSO and provisioning, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "passkeys-implementation",
    title: "Adding Passkeys to a Web or Mobile App: UX, Recovery and Security Trade-Offs",
    seoTitle: "Adding Passkeys to a Web or Mobile App",
    excerpt:
      "How to add passkeys to a web or mobile app: how they work, synced vs device-bound, sign-up and sign-in UX, account recovery, server implementation and rollout.",
    category: "Web Development",
    banner: "agentauthflow",
    sceneKind: "security",
    bannerAlt: "A user signing in with a passkey using a fingerprint or face unlock on phone and laptop, with public-key credentials stored by the service and a recovery path",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["fintech", "ecommerce", "saas-technology", "healthcare-healthtech"],
    relatedSlugs: ["mobile-app-authentication", "oauth-vs-openid-connect", "mobile-app-security"],
    faqs: [
      {
        q: "What is a passkey?",
        a: "A passkey is a sign-in credential based on public-key cryptography (the FIDO and WebAuthn standards). The private key stays on the user's device or in their platform's password manager and is unlocked with a fingerprint, face or device PIN; the service stores only the public key. Because the credential is bound to the website or app, passkeys resist phishing.",
      },
      {
        q: "What is the difference between synced and device-bound passkeys?",
        a: "Synced passkeys are backed up and shared across a user's devices by their platform account, such as Apple, Google or a password manager, which makes recovery easier. Device-bound passkeys stay on one device or security key, which some high-assurance environments prefer.",
      },
      {
        q: "Should passkeys replace passwords immediately?",
        a: "Usually not. Most services add passkeys as an option, encourage users to create one after signing in, and keep other methods during transition. Over time, some remove passwords for users who have passkeys.",
      },
      {
        q: "How should account recovery work?",
        a: "Recovery is often the weakest point. Encourage users to have more than one passkey or synced passkeys, offer secure fallback methods appropriate to the risk, and add verification and notification for recovery actions. Do not let recovery undo the phishing resistance you gained.",
      },
      {
        q: "Is the WebAuthn standard stable?",
        a: "Yes. Web Authentication Level 3 became a W3C Recommendation in August 2026, and browser and platform support for passkeys is broad. Check specific features, such as autofill sign-in, on the devices your users have.",
      },
    ],
    content: [
      {
        heading: "How do you add passkeys to an app?",
        body: [
          "**Add passkeys as a sign-in option using a maintained WebAuthn library on the server and the platform credential APIs in your apps; prompt users to create a passkey after they sign in, support autofill sign-in, let users manage several passkeys, design account recovery carefully, keep existing methods during transition, and measure adoption and sign-in success.** Passkeys reduce phishing and password reuse, but recovery and support need as much design as sign-in.",
          "This guide is for product managers, designers and engineers. The standard is [[https://www.w3.org/TR/webauthn-3/|Web Authentication Level 3]], now a W3C Recommendation; [[https://passkeys.dev/|passkeys.dev]] collects implementation guidance.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Passkeys are phishing-resistant public-key credentials.",
          "Use maintained libraries; do not implement the cryptography yourself.",
          "Offer creation after sign-in; support autofill sign-in.",
          "Allow several passkeys per account and easy management.",
          "Recovery design determines real security.",
          "Measure adoption, success rates and support contacts.",
        ],
      },
      {
        heading: "How passkeys work",
        body: [],
        table: {
          headers: ["Step", "What happens"],
          rows: [
            ["**Registration**", "The device creates a key pair for your site or app; the public key and a credential ID are sent to your server"],
            ["**Sign-in**", "Your server sends a challenge; the device signs it with the private key after the user unlocks it"],
            ["**Verification**", "Your server checks the signature with the stored public key"],
            ["**Binding**", "Credentials only work for your domain or associated app, which blocks phishing sites"],
          ],
        },
      },
      {
        heading: "UX patterns",
        body: [],
        checklist: [
          "Prompt to create a passkey after a successful sign-in or at sign-up, explaining the benefit simply.",
          "Support autofill (conditional) sign-in so passkeys appear in the username field.",
          "Show passkeys in account settings with names and last-used dates; allow removal.",
          "Keep wording consistent: 'passkey', not technical terms.",
          "Offer fallback sign-in methods during the transition.",
        ],
      },
      {
        heading: "Mobile and web implementation",
        body: [
          "On the web, use the WebAuthn browser API through a well-maintained library on both client and server. On iOS and Android, use the platform credential APIs and associate your app with your domain so the same passkeys work in the app and on the website. Store public keys, credential IDs, sign counters where relevant and metadata; never store anything that lets you sign on the user's behalf. See [[/blogs/mobile-app-authentication|mobile app authentication]].",
        ],
      },
      {
        heading: "Recovery and risk",
        body: [
          "Decide recovery by risk. Consumer apps often rely on synced passkeys plus verified email or phone recovery with extra checks and notifications. Financial or high-risk services may require identity verification before recovery. Whatever you choose, attackers will target recovery, so rate-limit it, notify users and review it in your [[/blogs/web-application-threat-modeling|threat model]].",
        ],
      },
      {
        heading: "Hypothetical example: a subscription app",
        body: [
          "**This example is hypothetical.** A subscription app with frequent password reset requests added passkeys. After sign-in, users were offered a passkey; returning users saw passkeys in autofill. The account page listed passkeys by device. Recovery used email with a delay and notification for accounts with no passkey on a second device. The team tracked passkey adoption, sign-in success rates and password reset tickets each month.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Removing passwords before most users have passkeys.",
          "Weak recovery that bypasses the passkey.",
          "Only one passkey allowed per account.",
          "App and website not associated, so passkeys do not work across them.",
          "Confusing technical wording in prompts.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/enterprise-sso-implementation|Enterprise SSO implementation]] for workforce sign-in.",
          "[[/blogs/mobile-app-security|Mobile app security]] for device-side protections.",
          "[[/blogs/oauth-vs-openid-connect|OAuth vs OpenID Connect]] for tokens after sign-in.",
          "[[/blogs/website-security-australia|Website security in Australia]] for broader practice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Passkeys offer phishing-resistant, easier sign-in. Implement them with maintained libraries, introduce them gradually, support several passkeys and autofill, design recovery with the same care as sign-in, and measure the results. For recovery across all sign-in methods, see [[/blogs/secure-account-recovery|secure account recovery]].",
        ],
        cta: {
          title: "Adding passkeys to your product?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|web applications]] and [[/services/mobile-app-development|mobile apps]], including authentication. If it would help to plan a passkey rollout, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "web-application-threat-modeling",
    title: "Threat Modelling for Web Applications: How Product Teams Find Risks Before Release",
    seoTitle: "Threat Modelling for Web Applications: A Guide",
    excerpt:
      "How product teams threat model web applications: the four key questions, data flow diagrams, STRIDE, prioritising risks and turning findings into work.",
    category: "Web Development",
    banner: "threatflow",
    sceneKind: "security",
    bannerAlt: "A product team drawing a data flow diagram of a web application, marking trust boundaries and listing threats by STRIDE category, then adding mitigations to the backlog",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["saas-technology", "fintech", "healthcare-healthtech", "ecommerce"],
    relatedSlugs: ["ai-application-threat-modeling", "secure-web-application-development-australia", "api-security-best-practices"],
    faqs: [
      {
        q: "What is threat modelling?",
        a: "A structured way to think about what could go wrong with a system from a security and privacy perspective, before or while building it, and to decide what to do about it. The Threat Modeling Manifesto frames it as four questions: what are we working on, what can go wrong, what are we going to do about it, and did we do a good job?",
      },
      {
        q: "What is STRIDE?",
        a: "A mnemonic for categories of threats: spoofing, tampering, repudiation, information disclosure, denial of service and elevation of privilege. It helps teams think systematically about each part of a data flow diagram.",
      },
      {
        q: "When should we threat model?",
        a: "During design of new systems and significant features, when adding integrations or handling new sensitive data, and before major releases. Revisit the model when the architecture changes.",
      },
      {
        q: "Do we need security specialists?",
        a: "Product teams can run useful threat modelling themselves with a simple method and practice. Security specialists add depth for high-risk systems. Threat modelling complements, but does not replace, testing and independent assessments.",
      },
      {
        q: "What should the output be?",
        a: "A diagram, a list of threats with ratings, chosen mitigations as backlog items with owners, accepted risks with reasons, and notes on what to test. Keep it with the system documentation and update it.",
      },
    ],
    content: [
      {
        heading: "How do product teams threat model a web application?",
        body: [
          "**Draw a data flow diagram of the feature or system with its trust boundaries, walk through each element asking what could go wrong (STRIDE is a useful checklist), rate the threats by likelihood and impact, choose mitigations and add them to the backlog with owners, record accepted risks, and check later that the mitigations work.** A one-to-two-hour workshop at design time catches problems that are expensive to fix after release.",
          "This guide is for product managers, designers and engineers. It is educational; ZSpace Labs does not provide security assessments. For AI-specific threats, see [[/blogs/ai-application-threat-modeling|AI application threat modelling]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Answer the four questions: what, what can go wrong, what will we do, did it work.",
          "Diagram data flows and trust boundaries.",
          "Use STRIDE to prompt threats per element.",
          "Turn mitigations into backlog items with owners.",
          "Repeat for significant changes.",
        ],
      },
      {
        heading: "The four questions",
        body: [
          "The [[https://www.threatmodelingmanifesto.org/|Threat Modeling Manifesto]] organises the work around four questions: what are we working on, what can go wrong, what are we going to do about it, and did we do a good job? OWASP's [[https://owasp.org/www-community/Threat_Modeling|threat modelling guidance]] describes methods and tools. Keep the method simple enough that teams use it routinely.",
        ],
      },
      {
        heading: "STRIDE applied to web apps",
        body: [],
        table: {
          headers: ["Threat", "Web example", "Typical mitigation"],
          rows: [
            ["**Spoofing**", "Stolen session or weak sign-in", "MFA, passkeys, secure session handling"],
            ["**Tampering**", "Changing prices or IDs in requests", "Server-side validation and authorisation"],
            ["**Repudiation**", "User denies an action", "Audit logs with integrity"],
            ["**Information disclosure**", "Another tenant's data in a response", "Object-level authorisation, tenant isolation"],
            ["**Denial of service**", "Expensive endpoints abused", "Rate limits, quotas, caching"],
            ["**Elevation of privilege**", "User reaches admin functions", "Central authorisation, least privilege"],
          ],
        },
      },
      {
        heading: "Running a workshop",
        body: [],
        checklist: [
          "Invite product, design, engineering and someone who knows operations.",
          "Scope one feature or flow, not the whole system.",
          "Draw the diagram together: users, components, data stores, external services, trust boundaries.",
          "Walk each flow crossing a boundary and list threats.",
          "Rate quickly (high, medium, low) and agree mitigations.",
          "Record decisions and accepted risks; create backlog items.",
        ],
      },
      {
        heading: "From findings to verification",
        body: [
          "Mitigations should become stories with acceptance criteria and tests, such as automated checks that users cannot access other tenants' records. Review the model when architecture changes, after incidents and before independent testing, so testers can focus on the riskiest areas. See [[/blogs/secure-web-application-development-australia|secure web application development]] and [[/blogs/web-application-penetration-testing-australia|penetration testing]].",
        ],
      },
      {
        heading: "Hypothetical example: a document sharing feature",
        body: [
          "**This example is hypothetical.** A SaaS team planning external document sharing ran a 90-minute session. The diagram showed links crossing from the public internet into the document store. STRIDE prompted threats including guessable links, links that never expire, and missing logs of who viewed what. The team chose unguessable tokens with expiry, optional passwords, access logging and per-tenant controls to disable external sharing, and added tests for each.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Treating threat modelling as a one-off document.",
          "Modelling the whole system at once and never finishing.",
          "No owners for mitigations.",
          "Only engineers in the room.",
          "Assuming it replaces testing.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/api-security-best-practices|API security best practices]] for common API threats.",
          "[[/blogs/multi-tenant-saas-architecture|Multi-tenant SaaS architecture]] for isolation.",
          "[[/blogs/software-supply-chain-security|Software supply chain security]] for build threats.",
          "[[/blogs/privacy-by-design-software-australia|Privacy by design]] for privacy threats.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Threat modelling helps teams find security and privacy risks while they are cheap to fix. Keep it simple, do it routinely for significant changes, turn findings into tested work, and use independent testing to check the results. Upload features deserve their own controls; see [[/blogs/secure-file-uploads|secure file uploads]].",
        ],
        cta: {
          title: "Designing a feature with sensitive data?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|secure web applications]]. We do not provide security assessments, but we build threat modelling into how we design and develop software.",
        },
      },
    ],
  },
  {
    slug: "software-supply-chain-security",
    title: "Software Supply Chain Security: SBOMs, Dependency Risk and Build Provenance",
    seoTitle: "Software Supply Chain Security: SBOMs and Provenance",
    excerpt:
      "Securing your software supply chain: dependency risks, lockfiles and review, SBOMs (CycloneDX, SPDX), signed builds, SLSA provenance and CI hardening.",
    category: "Web Development",
    banner: "supplychainflow",
    sceneKind: "security",
    bannerAlt: "Open-source dependencies, build systems and CI pipelines secured with lockfiles, dependency review, SBOMs, signed artefacts and provenance before deployment",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["saas-technology", "fintech", "healthcare-healthtech", "b2b-enterprise"],
    relatedSlugs: ["open-source-software-audit", "secrets-management", "ai-supply-chain-security"],
    faqs: [
      {
        q: "What is software supply chain security?",
        a: "Protecting everything that goes into building and delivering your software: third-party dependencies, build tools, CI/CD pipelines, artefact registries and deployment processes. Attacks can come through a compromised package, a malicious maintainer, a leaked CI secret or a tampered build.",
      },
      {
        q: "What is an SBOM?",
        a: "A software bill of materials: a machine-readable list of the components in a piece of software and their relationships, usually in CycloneDX or SPDX format. It helps you find affected software quickly when a vulnerability is announced and answer customer questions.",
      },
      {
        q: "What is SLSA?",
        a: "Supply-chain Levels for Software Artifacts, a framework of incrementally stronger requirements for build integrity and provenance. Provenance records how, where and from what source an artefact was built, so consumers can verify it. The current specification is version 1.2.",
      },
      {
        q: "Is there Australian guidance?",
        a: "ASD's Australian Cyber Security Centre has co-authored international guidance on SBOMs with partner agencies, including a 2026 update to minimum elements for an SBOM. Customers and government buyers increasingly ask suppliers about SBOMs and secure development practices.",
      },
      {
        q: "What should we do first?",
        a: "Use lockfiles and pinned versions, turn on dependency vulnerability alerts and secret scanning, review new dependencies, restrict CI permissions and secrets, and generate SBOMs in your build. Then add artefact signing and provenance.",
      },
    ],
    content: [
      {
        heading: "How do you secure your software supply chain?",
        body: [
          "**Control what comes in (lockfiles, pinned versions, review of new dependencies, vulnerability and malicious-package alerts), protect how software is built (least-privilege CI, short-lived credentials, isolated and reproducible builds), record what you shipped (SBOMs in CycloneDX or SPDX), prove where it came from (signed artefacts and provenance following SLSA), and have a plan for responding when a dependency is compromised.** Start with the basics and add provenance as you mature.",
          "This guide is for engineering leads and developers. It is educational. For a point-in-time review of licences and vulnerabilities, see [[/blogs/open-source-software-audit|open-source software audit]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Pin and lock dependencies; review new ones.",
          "Alert on vulnerable and malicious packages.",
          "Harden CI: least privilege, short-lived credentials, protected branches.",
          "Generate SBOMs on every build.",
          "Sign artefacts and produce provenance.",
          "Practise responding to a compromised dependency.",
        ],
      },
      {
        heading: "Attack paths",
        body: [],
        table: {
          headers: ["Path", "Example", "Control"],
          rows: [
            ["**Dependencies**", "Malicious package or typo-squatted name", "Review, allowlists, lockfiles, malicious-package alerts"],
            ["**Maintainer compromise**", "Legitimate package publishes a bad version", "Pinning, delayed upgrades, monitoring advisories"],
            ["**CI/CD**", "Leaked token used to push or deploy", "Least privilege, OIDC credentials, secret scanning"],
            ["**Build tampering**", "Modified build output", "Isolated builds, signing, provenance"],
            ["**Registries and images**", "Unverified base images", "Trusted sources, scanning, signature verification"],
          ],
        },
      },
      {
        heading: "SBOMs",
        body: [
          "Generate an SBOM automatically during each build in a standard format such as [[https://cyclonedx.org/|CycloneDX]] or [[https://spdx.dev/|SPDX]], store it with the release, and use it to answer 'are we affected?' when vulnerabilities are announced. ASD's ACSC co-authored international guidance on SBOMs, updated with 2026 minimum elements ([[https://www.ncsc.govt.nz/protect-your-organisation/2026-minimum-elements-for-a-software-bill-of-materials-sbom-published/|joint guidance via NZ NCSC]]).",
        ],
      },
      {
        heading: "Provenance and signing",
        body: [
          "Provenance describes how an artefact was built: source commit, build platform, inputs and steps. [[https://slsa.dev/spec/|SLSA]] (version 1.2) defines levels of build integrity, from documented provenance to hardened build platforms. Sign release artefacts and container images, publish provenance, and verify signatures before deployment. Pair this with [[/blogs/secrets-management|secrets management]] for CI credentials.",
        ],
      },
      {
        heading: "Responding to a compromised dependency",
        body: [],
        checklist: [
          "Use SBOMs to find affected applications and versions.",
          "Pin to a known-good version or remove the package.",
          "Rotate any secrets the build or runtime could have exposed.",
          "Check logs for suspicious behaviour.",
          "Rebuild from clean sources and redeploy.",
          "Follow your incident response plan; see [[/blogs/cyber-incident-response-plan-australia|cyber incident response plans]].",
        ],
      },
      {
        heading: "Hypothetical example: a SaaS responding to a package advisory",
        body: [
          "**This example is hypothetical.** A SaaS team learned that a popular logging package had a malicious release. Because every build stored an SBOM, it found within minutes that two services used the package but at an earlier pinned version, while one internal tool had pulled the bad version through a loose version range. It removed the version, rotated the tool's credentials, rebuilt it, and tightened version ranges and new-dependency review across repositories.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Loose version ranges in production builds.",
          "CI tokens with broad, long-lived permissions.",
          "SBOMs generated once for a customer and never again.",
          "No verification of signatures before deployment.",
          "Treating supply chain security as only a licence check.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/ai-supply-chain-security|AI supply chain security]] for models and datasets.",
          "[[/blogs/infrastructure-as-code|Infrastructure as code]] for reviewed infrastructure changes.",
          "[[/blogs/devops-for-growing-businesses|DevOps for growing businesses]] for CI/CD foundations.",
          "[[/blogs/web-application-threat-modeling|Threat modelling]] for build threats.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Software supply chain security combines careful dependency management, hardened builds, SBOMs and provenance. Start with lockfiles, alerts and CI least privilege, generate SBOMs on every build, then add signing and provenance.",
        ],
        cta: {
          title: "Customers asking about SBOMs?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|secure software delivery]]. We do not provide security certification, but we build these practices into the software and pipelines we deliver.",
        },
      },
    ],
  },
];
