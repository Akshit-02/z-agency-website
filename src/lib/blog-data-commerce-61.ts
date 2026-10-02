import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch seven, part eight: trust and quality.
 * Ecommerce security, the ecommerce security audit (preparation for,
 * not a substitute for, professional testing), privacy and customer
 * data, and ecommerce compliance (an orientation, not legal advice).
 * General website security is `website-security-checklist` and
 * `secure-business-website-development`. Merged into `posts` in
 * blog-data.ts.
 */

export const commercePosts61: BlogPost[] = [
  // ---------------------------------------- 357 · ECOMMERCE SECURITY
  {
    slug: "ecommerce-security",
    title: "Ecommerce Security: How to Protect Your Store, Customers and Payments",
    seoTitle: "Ecommerce Security: Protect Your Store, Customers, Payments",
    excerpt: "Ecommerce security in layers: staff accounts, customer accounts, payments and scripts, platform and apps, data protection, monitoring, incident response and testing.",
    category: "Web Development",
    banner: "securityarch",
    bannerAlt:
      "Ecommerce security layers in four columns: accounts (MFA for staff, least privilege, bot protection, session security), payments (hosted checkout, no card storage, script control, fraud tools, highlighted), platform (patches and updates, app review, secrets management, security headers) and operations (backups, monitoring, incident plan, specialist testing).",
    date: "2026-09-29",
    readingTime: "18 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "ai-automation"],
    relatedIndustrySlugs: ["ecommerce", "retail", "d2c-consumer"],
    faqs: [
      { q: "What are the main security risks for online stores?", a: "Compromised staff accounts, account takeover of customer accounts, malicious or vulnerable third-party scripts and apps (including payment page skimming), misconfiguration, unpatched software, exposed secrets, fraud and bots, and data leaks." },
      { q: "Does a hosted platform make my store secure?", a: "It handles much of the infrastructure and, for hosted checkouts, payment page security. You remain responsible for staff accounts, apps and their permissions, theme code, integrations, custom data flows and your own processes." },
      { q: "What is PCI DSS?", a: "The Payment Card Industry Data Security Standard, a set of security requirements for organizations that handle card data. The current version is 4.0.1. Your obligations depend on how you accept payments; hosted payment pages reduce but don't remove them." },
      { q: "What is e-skimming?", a: "Malicious code injected into a website to capture payment or personal data as shoppers type it. Controlling and monitoring scripts on payment pages is the main defence." },
      { q: "How important is multi-factor authentication?", a: "Very. MFA on staff, platform, hosting, domain, email and code repository accounts is one of the most effective controls against account compromise." },
      { q: "How do I secure Shopify apps?", a: "Install only apps you need from trusted developers, review the access scopes they request, remove unused apps, and review staff and collaborator access regularly." },
      { q: "Should I store customer card details?", a: "Generally avoid it. Use your payment provider's tokenization and vaulting so card data doesn't touch your systems." },
      { q: "What should an incident response plan include?", a: "Who to contact, how to contain and investigate, how to preserve evidence, how to notify affected parties and regulators where required, and how to recover and learn. Legal notification duties vary by jurisdiction." },
      { q: "Do I need penetration testing?", a: "For custom code, integrations and larger stores, professional security testing is strongly advisable. This guide isn't a substitute for a professional assessment." },
      { q: "How do bots affect ecommerce security?", a: "Bots are used for credential stuffing, card testing, scraping, inventory hoarding and fake account creation. Bot protection, rate limiting and fraud tools help." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Secure an online store in layers. Protect accounts with multi-factor authentication and least-privilege access for staff, and bot and takeover protection for customers. Keep card data off your systems with hosted checkout or tokenization, and control scripts on payment pages. Maintain the platform: patch, review apps and their permissions, manage secrets and set security headers. Back up, monitor, prepare an incident response plan and get professional security testing for custom code. This article is general guidance, not a security assessment.",
        ],
      },
      {
        heading: "The Ecommerce Threat Picture",
        body: [
          "Online stores hold what attackers want: payment flows, customer personal data, accounts with stored value (loyalty points, gift cards) and inventory that can be resold. Common incidents include compromised staff or admin accounts, customer account takeover through reused passwords, malicious scripts injected into checkout or product pages, vulnerable or over-permissioned apps and plugins, misconfigured storage exposing data, and fraud such as card testing.",
          "This article explains defensive controls at a strategic level. It doesn't describe attack techniques, and it isn't a substitute for professional testing. For general website security, see [[/blogs/website-security-checklist|website security checklist]] and [[/blogs/secure-business-website-development|secure website development]].",
        ],
        table: {
          headers: ["Risk", "Typical impact", "Primary defences"],
          rows: [
            ["Staff account compromise", "Full store control, data access", "MFA, least privilege, access reviews"],
            ["Customer account takeover", "Fraud, loyalty theft, data exposure", "Bot protection, rate limits, MFA options, breach detection"],
            ["Malicious scripts on payment pages", "Card and personal data theft", "Hosted payment pages, script inventory, integrity monitoring"],
            ["Vulnerable or excessive apps and plugins", "Data access, site compromise", "App review, minimal scopes, updates"],
            ["Misconfiguration", "Data exposure", "Secure defaults, configuration reviews"],
            ["Card testing and payment fraud", "Chargebacks, fees", "Fraud tools, velocity limits, bot protection"],
          ],
        },
      },
      {
        heading: "Layer 1: Staff and Admin Accounts",
        body: [
          "Most store compromises start with an account. Enforce multi-factor authentication for every staff account on the ecommerce platform and on connected systems: email, domain registrar, DNS, hosting, code repositories, payment provider and analytics. Give each person their own account with only the permissions they need, remove access promptly when people leave or agencies finish work, and review access regularly. Broken access control has ranked first in the OWASP Top 10 web application risks ([[https://owasp.org/Top10/|OWASP Top 10]]), and many real incidents come from over-privileged or forgotten accounts.",
        ],
        checklist: [
          "MFA on platform, email, domain, DNS, hosting, repositories, payments",
          "Individual accounts, no shared logins",
          "Role-based permissions; admin rights limited",
          "Collaborator and agency access time-limited and reviewed",
          "Quarterly access review with owners",
          "Offboarding checklist that removes all access",
        ],
      },
      {
        heading: "Layer 2: Customer Accounts",
        body: [
          "Customer accounts are targeted with credentials leaked from other sites. Defences include bot protection and rate limiting on login and account creation, detection of unusual login patterns, optional or risk-based MFA or passwordless login, notification of account changes (email, address, password) and protection of stored value such as loyalty points and gift card balances. Balance security with accessibility: avoid puzzle CAPTCHAs that block disabled users, and allow password managers. See [[/blogs/ecommerce-accessibility|ecommerce accessibility]].",
        ],
      },
      {
        heading: "Layer 3: Payments and Scripts",
        body: [
          "The safest approach is to keep card data off your systems entirely: use a hosted checkout or payment fields provided by your payment provider, and tokenization for stored payment methods. This reduces your PCI DSS scope but doesn't remove responsibility. PCI DSS v4.0.1 is the current version, and requirements that became mandatory on 31 March 2025 include managing scripts on payment pages and detecting unauthorized changes. The PCI Security Standards Council has clarified how these apply to merchants using embedded payment pages under SAQ A ([[https://blog.pcisecuritystandards.org/faq-clarifies-new-saq-a-eligibility-criteria-for-e-commerce-merchants|PCI Security Standards Council]]). Confirm your obligations with your payment provider or a qualified assessor.",
          "Beyond compliance, control scripts across the store: keep an inventory of third-party scripts, remove unused ones, load them only where needed, use a content security policy where practical, and monitor for unexpected changes.",
          "PCI scope, payment page script controls, keys and webhooks are covered in [[/blogs/ecommerce-payment-security|ecommerce payment security]].",
        ],
        cta: {
          title: "Unsure how exposed your store is?",
          description: "ZSpace Labs reviews ecommerce setups, apps, scripts and integrations and helps prepare for professional security testing.",
        },
      },
      {
        heading: "Layer 4: Platform, Apps and Code",
        body: [
          "On hosted platforms, focus on what you control: apps, themes, integrations and settings. Install only necessary apps from reputable developers, review the data access they request, and remove unused ones. On self-hosted or custom platforms, patch the platform, plugins and dependencies promptly, run dependency scanning, and follow secure development practices. Keep secrets (API keys, tokens) out of code and front-end bundles, store them in a secrets manager or environment configuration, rotate them, and give each integration its own limited credentials.",
        ],
        table: {
          headers: ["Area", "Hosted platform (e.g. Shopify)", "Self-hosted / custom"],
          rows: [
            ["Infrastructure and patching", "Platform", "You"],
            ["Checkout security", "Platform (hosted checkout)", "You or payment provider"],
            ["Apps and plugins", "You choose and review", "You choose, patch and review"],
            ["Theme / frontend code", "You", "You"],
            ["Integrations and APIs", "You", "You"],
            ["Staff access", "You", "You"],
          ],
        },
      },
      {
        heading: "Layer 5: Data Protection",
        body: [
          "Collect only the customer data you need, restrict access to it, encrypt it in transit (HTTPS everywhere) and at rest where you control storage, and set retention periods. Be careful with exports: order and customer exports in spreadsheets, shared drives or email are a common source of leaks. Security and privacy overlap here. See [[/blogs/ecommerce-privacy-customer-data|ecommerce privacy and customer data]].",
        ],
      },
      {
        heading: "Layer 6: Fraud and Bots",
        body: [
          "Fraud tools provided by payment providers and platforms score orders for risk. Configure them, review flagged orders and use velocity limits to reduce card testing. Bot management helps with credential stuffing, scraping, inventory hoarding during launches and fake account creation. Monitor chargeback rates, which card networks and payment providers track.",
          "Signals, risk scoring and manual review are covered in [[/blogs/ecommerce-fraud-detection|ecommerce fraud detection]].",
        ],
      },
      {
        heading: "Layer 7: Monitoring, Backups and Incident Response",
        body: [
          "Monitor for signs of trouble: unexpected admin logins, new apps or staff accounts, changes to themes or scripts, spikes in failed logins or declined payments, and unusual data exports. Keep backups of data and code you control and test restoring them. Write an incident response plan covering roles, contacts (platform support, payment provider, legal advisers), containment, evidence preservation, notification (duties vary by jurisdiction) and recovery. Practise it.",
        ],
        checklist: [
          "Alerts for new admins, apps and theme changes",
          "Login and payment anomaly monitoring",
          "Tested backups for data and code you control",
          "Incident response plan with named roles and contacts",
          "Legal advice identified for breach notification",
          "Post-incident review process",
        ],
      },
      {
        heading: "Security for AI Features",
        body: [
          "AI assistants, agents and integrations add new risks: prompt injection, over-permissioned tools, leakage of customer data to model providers and actions taken on manipulated inputs. Apply the same principles: least privilege, validation, logging, human approval for high-impact actions and data minimization. See [[/blogs/ai-agents-for-ecommerce|AI agents for ecommerce]].",
        ],
      },
      {
        heading: "Professional Testing",
        body: [
          "Guidance and checklists help you get basics right; they don't find everything. Custom code, headless storefronts, integrations and larger stores warrant professional security testing by qualified specialists, with appropriate authorization and scope. Use an internal review to prepare for that testing and to fix obvious gaps first. See [[/blogs/ecommerce-security-audit|ecommerce security audit]].",
        ],
      },
      {
        heading: "Security for Headless and Custom Builds",
        body: [
          "Headless storefronts and custom integrations move more responsibility to your team. API tokens must be scoped correctly (public storefront tokens vs private server tokens), secrets must stay server-side, server routes need input validation and rate limiting, and hosting needs secure configuration. Dependencies must be kept up to date. These builds warrant professional security testing before launch and after major changes. See [[/blogs/shopify-hydrogen-vs-traditional-shopify|Hydrogen vs traditional Shopify]].",
        ],
        checklist: [
          "Public and private API tokens used in the right places",
          "No secrets in client bundles or public repositories",
          "Input validation and rate limiting on server routes",
          "Dependency updates and scanning",
          "Secure hosting configuration and headers",
          "Professional testing before launch",
        ],
      },
      {
        heading: "Security Responsibilities Across Teams",
        body: [
          "Security fails when everyone assumes someone else owns it. Assign clear responsibilities: platform and access to an operations or ecommerce lead, code and integrations to engineering, scripts and tags to marketing with engineering review, vendor review to whoever approves apps, and incident response to a named lead with backup. Review responsibilities when teams or agencies change.",
        ],
        table: {
          headers: ["Area", "Typical owner"],
          rows: [
            ["Staff accounts and permissions", "Ecommerce or operations lead"],
            ["Apps and vendors", "Ecommerce lead with engineering review"],
            ["Theme and custom code", "Engineering or agency"],
            ["Tags and scripts", "Marketing with engineering approval"],
            ["Payments and fraud", "Finance or operations"],
            ["Incident response", "Named lead and deputy"],
          ],
        },
      },
      {
        heading: "Training Staff",
        body: [
          "Many compromises start with phishing or social engineering aimed at staff: fake platform notices, requests to add a collaborator, changes to payout details. Train staff to verify unusual requests through a separate channel, report suspicious messages, and never share MFA codes. Keep training short and repeated, and include agencies and contractors with admin access.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "No MFA on email, domain or payment accounts",
          "Shared admin logins",
          "Old agency and app access never removed",
          "Unreviewed third-party scripts on checkout-adjacent pages",
          "Secrets in front-end code or repositories",
          "Customer exports left in shared folders",
          "Assuming the platform handles everything",
        ],
        cta: {
          title: "Ready to strengthen your store's security?",
          description: "Talk to ZSpace Labs about [[/services/website-development|secure ecommerce development]], [[/services/shopify-development|Shopify app and access reviews]] and [[/services/ai-automation|security monitoring automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Ecommerce security is layered: protect accounts, keep card data off your systems and control scripts, maintain apps and code, minimize data, fight fraud and bots, monitor and prepare for incidents, and use professional testing for what checklists can't cover. Related: [[/blogs/ecommerce-compliance|ecommerce compliance]] and [[/blogs/mobile-app-security|mobile app security]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 358 · SECURITY AUDIT
  {
    slug: "ecommerce-security-audit",
    title: "Ecommerce Security Audit: How to Review Your Store Before Professional Testing",
    seoTitle: "Ecommerce Security Audit: Review Your Store Before Testing",
    excerpt: "How to run an internal ecommerce security review: scope, inventory, access, apps, scripts, payments, data, monitoring, prioritized findings and specialist testing.",
    category: "Web Development",
    banner: "secauditflow",
    bannerAlt:
      "Security audit flow: scope, inventory, review controls (highlighted), prioritize findings, fix and specialist testing, noting that an internal review prepares for professional testing and does not replace it.",
    date: "2026-09-29",
    readingTime: "17 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "retail", "d2c-consumer"],
    faqs: [
      { q: "What is an ecommerce security audit?", a: "A structured review of a store's security controls: accounts and access, apps and integrations, scripts, payments, data handling, configuration, monitoring and incident readiness. This article covers an internal review, not a professional assessment." },
      { q: "Is an internal review the same as a penetration test?", a: "No. An internal review checks that controls exist and are configured sensibly. A penetration test, carried out by qualified specialists with authorization, actively looks for exploitable weaknesses." },
      { q: "How often should a store review its security?", a: "At least annually and after major changes such as a replatform, new integrations, a headless build or a change of agency, with lighter quarterly access reviews." },
      { q: "What should be in scope?", a: "The storefront, admin and staff accounts, apps and plugins, custom code, integrations and APIs, payment flows, domains and DNS, email, hosting and any systems holding customer data." },
      { q: "Who should do the review?", a: "Someone who understands the store's setup, ideally with security knowledge, supported by the platform owner and developers. Larger stores often engage external specialists." },
      { q: "What is an asset inventory?", a: "A list of everything that makes up the store: domains, platforms, apps, scripts, integrations, accounts, data stores and third parties. You can't secure what you don't know exists." },
      { q: "How do I prioritize findings?", a: "By likelihood and impact: issues that could lead to account takeover, payment data exposure or large data leaks come first, followed by those affecting many customers or critical operations." },
      { q: "Does PCI DSS require specific testing?", a: "Requirements depend on how you process payments and your validation type. Confirm with your payment provider or a qualified security assessor." },
      { q: "Should I test my live store myself with security tools?", a: "Don't run intrusive testing against live systems or third-party platforms without authorization and expertise. Platform terms may prohibit it, and it can cause outages. Use professionals with a defined scope." },
      { q: "What should the audit deliver?", a: "An inventory, a list of findings with severity and owners, a remediation plan with dates, and a scope for professional testing." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An internal ecommerce security review checks that the basics are in place before professional testing. Define scope, build an inventory of domains, platforms, apps, scripts, integrations, accounts and data stores, then review controls: MFA and access, app permissions, scripts on payment-adjacent pages, payment setup, secrets, data handling, configuration, monitoring and incident readiness. Prioritize findings by likelihood and impact, fix them with owners and dates, and commission qualified specialists for testing. An internal review doesn't replace professional assessment.",
        ],
      },
      {
        heading: "What This Review Is and Isn't",
        body: [
          "This is a defensive review of your own store's controls, carried out by your team or partners. It checks configuration, access and processes. It doesn't involve attacking systems, and it doesn't prove the store is secure. Professional penetration testing and security assessments, carried out by qualified specialists with authorization, go further and should follow, especially for custom code, headless storefronts and integrations.",
          "Doing the internal review first is still valuable: it fixes obvious gaps cheaply, gives testers an accurate inventory and scope, and makes their time count. For the underlying controls, see [[/blogs/ecommerce-security|ecommerce security]].",
        ],
      },
      {
        heading: "Step 1: Define Scope",
        body: [
          "List what's included: storefronts (theme or headless), admin, checkout configuration, apps and plugins, custom apps and code, integrations (ERP, CRM, marketing, fulfilment), domains and DNS, email, hosting, payment providers, analytics and marketing tags, and systems that hold customer data (warehouse, support desk, email platform). Note what's managed by third parties and what you control.",
        ],
      },
      {
        heading: "Step 2: Build the Inventory",
        body: [],
        table: {
          headers: ["Inventory item", "Record"],
          rows: [
            ["Domains and DNS", "Registrar, DNS provider, account owners, MFA status"],
            ["Platforms and hosting", "Platform, plan, hosting for headless or custom parts"],
            ["Staff and collaborator accounts", "Who, role, last login, MFA"],
            ["Apps and plugins", "Name, developer, access scopes, owner, still used?"],
            ["Scripts and tags", "Where loaded, purpose, owner, loaded on checkout-adjacent pages?"],
            ["Integrations and API credentials", "System, credential type, scopes, rotation date"],
            ["Data stores", "What customer data, where, who has access, retention"],
            ["Third parties", "Payment, fraud, support, email, analytics providers"],
          ],
        },
      },
      {
        heading: "Step 3: Review Access",
        body: [
          "Access is where many incidents start. For every system in scope, confirm MFA is enforced, each person has their own account, permissions match roles, former staff and agencies are removed, and API credentials are scoped and owned. Pay special attention to email and domain accounts: control of them often means control of everything else through password resets.",
        ],
        checklist: [
          "MFA enforced on all admin, email, domain, DNS, hosting, repository and payment accounts",
          "No shared accounts",
          "Admin rights limited to those who need them",
          "Leavers and past agencies removed",
          "API credentials scoped, owned and rotated",
          "Recovery methods for key accounts current and secure",
        ],
      },
      {
        heading: "Step 4: Review Apps, Scripts and Code",
        body: [
          "For each app or plugin, confirm it's still needed, comes from a reputable developer, requests only necessary access and is up to date. Remove unused ones. For scripts and tags, confirm each has an owner and purpose, is loaded only where needed, and is reviewed before being added to payment-adjacent pages. For custom code, check dependency updates, secrets management, code review practices and whether security testing has been done.",
        ],
        cta: {
          title: "Need help preparing for a security assessment?",
          description: "ZSpace Labs helps ecommerce teams inventory systems, fix access and app issues and scope professional testing.",
        },
      },
      {
        heading: "Step 5: Review Payments",
        body: [
          "Confirm how card data flows: hosted checkout, embedded payment fields or direct handling. Check which PCI DSS validation applies with your payment provider, and whether you meet current requirements, including script management on payment pages where relevant ([[https://www.pcisecuritystandards.org/|PCI Security Standards Council]]). Review fraud tool settings, chargeback rates and who can issue refunds or change payout details.",
        ],
      },
      {
        heading: "Step 6: Review Data Handling",
        body: [
          "Map where customer data goes: platform, email and CRM tools, support desk, warehouse, spreadsheets, agencies. Check access, retention, encryption and deletion processes. Look for exports stored in shared drives or email. This overlaps with privacy work; see [[/blogs/ecommerce-privacy-customer-data|ecommerce privacy and customer data]].",
        ],
      },
      {
        heading: "Step 7: Review Configuration, Monitoring and Readiness",
        body: [
          "Check HTTPS everywhere, security headers where you control them, secure configuration of storage and hosting, and email authentication (SPF, DKIM, DMARC) to reduce spoofing of your domain. Confirm alerts exist for admin changes, new apps, theme or script changes and unusual activity. Check backups and restores. Review the incident response plan and whether it's been practised.",
        ],
        table: {
          headers: ["Area", "Question"],
          rows: [
            ["Transport", "Is HTTPS enforced on every domain and subdomain?"],
            ["Email", "Are SPF, DKIM and DMARC configured?"],
            ["Headers", "Are security headers set where you control them?"],
            ["Storage", "Are buckets, databases and exports private?"],
            ["Monitoring", "Would you notice a new admin or app today?"],
            ["Backups", "When was a restore last tested?"],
            ["Incidents", "Is there a plan, and who knows it?"],
          ],
        },
      },
      {
        heading: "Step 8: Prioritize Findings",
        body: [
          "Rate each finding by likelihood and impact, assign an owner and a date. Findings that could lead to takeover of admin, email or domain accounts, exposure of payment or large volumes of customer data, or unauthorized scripts on payment-adjacent pages are critical.",
        ],
        table: {
          headers: ["Severity", "Examples", "Target"],
          rows: [
            ["Critical", "No MFA on admin or email; unknown scripts near checkout; exposed data export", "Immediate"],
            ["High", "Over-permissioned apps; former agency access; unrotated keys", "Within days"],
            ["Medium", "Missing monitoring; no tested backups", "Within weeks"],
            ["Low", "Documentation gaps", "Planned"],
          ],
        },
      },
      {
        heading: "Step 9: Professional Testing",
        body: [
          "After fixing critical and high findings, commission professional testing where warranted: penetration testing of custom code, headless storefronts, APIs and integrations; reviews of cloud configuration; and assessments required by your payment or compliance obligations. Provide testers with your inventory and scope, confirm authorization (including from platform providers where their terms require it) and plan remediation time. Don't run intrusive tests against live systems or third-party platforms yourself.",
        ],
      },
      {
        heading: "Making Reviews Routine",
        body: [
          "Security reviews work best as routine: quarterly access and app reviews, an annual full review, and targeted reviews after major changes (replatforming, headless builds, new integrations, agency changes). Keep the inventory current and track findings to closure. See [[/blogs/ecommerce-replatforming|ecommerce replatforming]].",
        ],
      },
      {
        heading: "Review Checklist Summary",
        body: [],
        checklist: [
          "Scope written and agreed",
          "Inventory of domains, platforms, accounts, apps, scripts, integrations, data stores",
          "MFA and access reviewed on every system",
          "Apps reviewed for need, developer and scopes",
          "Scripts on payment-adjacent pages inventoried and approved",
          "Payment flow and PCI validation confirmed with provider",
          "Secrets located, scoped and rotated",
          "Customer data locations and exports reviewed",
          "Email authentication, HTTPS and headers checked",
          "Monitoring, backups and incident plan checked",
          "Findings prioritized with owners and dates",
          "Professional testing scoped",
        ],
      },
      {
        heading: "Working With Security Specialists",
        body: [
          "When engaging testers, agree scope, methods, timing and rules of engagement in writing, confirm authorization for every system tested (including checking platform provider terms), and provide a test environment where possible. Ask for a report with findings, severity, evidence and remediation guidance, and plan a re-test after fixes. Treat findings as confidential and share them only with those who need them.",
        ],
        table: {
          headers: ["Agree", "Details"],
          rows: [
            ["Scope", "Systems, URLs, APIs, apps in and out of scope"],
            ["Authorization", "Written approval; platform terms checked"],
            ["Timing", "Windows that avoid peak trading"],
            ["Environment", "Staging where possible"],
            ["Reporting", "Severity, evidence, remediation, re-test"],
          ],
        },
      },
      {
        heading: "After the Review",
        body: [
          "Track findings to closure, re-check critical fixes, update the inventory and document decisions where risks are accepted, with a reason and an owner. Share a short summary with leadership so security investment decisions are informed. See [[/blogs/ecommerce-privacy-customer-data|ecommerce privacy and customer data]] for the data side.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Treating an internal checklist as proof of security",
          "No inventory of apps, scripts and integrations",
          "Ignoring email and domain accounts",
          "Running intrusive tools against live or third-party systems without authorization",
          "Findings without owners or dates",
          "No re-review after major changes",
        ],
        cta: {
          title: "Ready to review your store's security?",
          description: "Talk to ZSpace Labs about [[/services/website-development|security-focused development reviews]], [[/services/shopify-development|Shopify access and app reviews]] and [[/services/cro-audit|platform audits]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "An internal security review inventories the store, checks access, apps, scripts, payments, data, configuration and readiness, prioritizes fixes and prepares for professional testing, which it doesn't replace. Related: [[/blogs/website-security-checklist|website security checklist]] and [[/blogs/ecommerce-compliance|ecommerce compliance]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 359 · PRIVACY AND CUSTOMER DATA
  {
    slug: "ecommerce-privacy-customer-data",
    title: "Ecommerce Privacy: How to Handle Customer Data Responsibly",
    seoTitle: "Ecommerce Privacy: Handling Customer Data Responsibly",
    excerpt: "How online stores handle customer data responsibly: data mapping, purposes, consent and cookies, notices, rights requests, vendors, retention, security and AI.",
    category: "Web Development",
    banner: "privacyflow",
    bannerAlt:
      "Customer data lifecycle flow: collect, purpose and consent (highlighted), store, use, share, and retain or delete, noting to map every data flow before deciding what the law requires of it.",
    date: "2026-09-29",
    readingTime: "18 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "retail", "d2c-consumer"],
    faqs: [
      { q: "What customer data do online stores typically hold?", a: "Names, emails, phone numbers, addresses, order history, payment tokens (not card numbers when using a payment provider), account data, browsing and marketing data, support conversations and sometimes sizes or preferences." },
      { q: "Which privacy laws apply to my store?", a: "It depends on where you're established, where your customers are and what you do with data. Examples include the EU GDPR, the UK GDPR, California's CCPA as amended by the CPRA, other US state laws and national laws elsewhere. Get legal advice for your situation." },
      { q: "Do I need consent for cookies?", a: "In some jurisdictions, such as the EU and UK, consent is generally required for non-essential cookies and similar tracking. Elsewhere, rules differ. Configure your consent tool to match the rules for your markets." },
      { q: "What is data mapping?", a: "Documenting what personal data you collect, why, where it's stored, who can access it, which vendors receive it and how long it's kept. It's the foundation for privacy notices, rights requests and security." },
      { q: "What rights do customers have over their data?", a: "Depending on the law, rights can include access, correction, deletion, portability, objecting to or opting out of certain processing, such as sale, sharing or targeted advertising, and withdrawing consent." },
      { q: "How does Shopify help with privacy?", a: "Shopify provides tools such as a customer privacy settings area, a consent banner option, the Customer Privacy API for apps and themes, and processes for handling data requests. You still need to configure them for your markets and handle data in other tools." },
      { q: "Is server-side tracking a way around consent?", a: "No. Moving tracking to the server changes where data is sent, not whether you're allowed to collect and use it." },
      { q: "How long should I keep customer data?", a: "Only as long as needed for the purposes you've stated and any legal requirements, such as tax records. Set retention periods per data type and delete or anonymize afterwards." },
      { q: "What about AI tools and customer data?", a: "Sending customer data to AI services is processing like any other. Check the provider's terms, minimize data, update notices and assess risks, especially for profiling or automated decisions." },
      { q: "Is this article legal advice?", a: "No. It's a practical orientation. Privacy law varies by jurisdiction and changes; consult qualified counsel." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Handle customer data responsibly by first mapping it: what you collect, why, where it goes, who sees it and how long you keep it. Collect only what you need for clear purposes, get consent where the law requires it (commonly for non-essential cookies and some marketing), explain processing in a clear privacy notice, honour customer rights requests across every tool, vet vendors, set retention periods and secure the data. Obligations vary by jurisdiction and change over time, so take legal advice; this article is orientation, not legal advice.",
        ],
      },
      {
        heading: "Why Privacy Is an Ecommerce Design Problem",
        body: [
          "Customer data runs through every part of a store: accounts, checkout, email marketing, analytics, advertising pixels, reviews, support, loyalty, fulfilment and increasingly AI tools. Each adds a data flow and often a vendor. Privacy problems usually come from flows nobody documented, not from the platform itself.",
          "Handled well, privacy builds trust and keeps data useful. Clear consent choices, honest notices and prompt responses to requests are part of the customer experience. For the security side, see [[/blogs/ecommerce-security|ecommerce security]]; for mobile apps, see [[/blogs/mobile-app-data-privacy|mobile app data privacy]].",
        ],
      },
      {
        heading: "Step 1: Map Your Data",
        body: [
          "Start with a data map. For each category of personal data, record the source, purpose, legal basis or justification where the law requires one, systems where it's stored, vendors it's shared with, access and retention period.",
        ],
        table: {
          headers: ["Data", "Purpose", "Where it goes", "Retention (example to decide)"],
          rows: [
            ["Name, email, address", "Fulfil orders, service", "Platform, fulfilment, support desk", "Per tax and service needs"],
            ["Order history", "Service, analytics", "Platform, warehouse, CRM", "Defined period"],
            ["Marketing email and SMS consent", "Marketing", "Email/SMS platform", "Until withdrawn, plus records"],
            ["Browsing and ad data", "Analytics, advertising", "Analytics and ad platforms", "Tool settings"],
            ["Support conversations", "Service", "Help desk, AI tools", "Defined period"],
            ["Sizes, preferences", "Personalization", "Platform, personalization tools", "While account active"],
          ],
        },
      },
      {
        heading: "Step 2: Purpose and Minimization",
        body: [
          "Collect data for specific purposes and no more than needed. Checkout needs an address; it doesn't need a date of birth unless you sell age-restricted goods. Personalization may need sizes; it doesn't need inferred sensitive characteristics. Minimization reduces risk, simplifies compliance and makes breaches less damaging. Review forms, apps and pixels for data they collect that you don't use.",
        ],
      },
      {
        heading: "Step 3: Consent and Cookies",
        body: [
          "Several laws regulate cookies and similar tracking, and some require consent for non-essential uses such as analytics and advertising. In the EU and UK, for example, consent is generally required before setting non-essential cookies. In some US states, laws give consumers rights to opt out of the sale or sharing of personal data and of targeted advertising, and some require honouring browser opt-out signals. Configure your consent tool to your markets, block tags until consent where required, record consent, and make it as easy to withdraw as to give.",
          "On Shopify, the Customer Privacy API lets themes and apps read a visitor's consent choices, and Shopify offers cookie banner and privacy settings ([[https://shopify.dev/docs/api/customer-privacy|Shopify developer docs]]). Advertising platforms have their own consent mechanisms, such as Google's consent mode. Server-side tracking doesn't remove consent obligations.",
        ],
        checklist: [
          "Consent banner configured per market",
          "Non-essential tags blocked until consent where required",
          "Consent state passed to analytics and ad tools",
          "Opt-out signals honoured where required",
          "Consent records kept",
          "Withdrawal as easy as giving consent",
        ],
        cta: {
          title: "Not sure where your customer data goes?",
          description: "ZSpace Labs maps ecommerce data flows, configures consent across tools and cleans up tracking you don't need.",
        },
      },
      {
        heading: "Step 4: Notices",
        body: [
          "Your privacy notice should explain, in plain language, what data you collect, why, who you share it with, how long you keep it, what rights customers have and how to exercise them. It must match reality: if you add an AI chat tool or a new ad pixel, update the notice. Some laws require specific content. Link to it from checkout, account creation and forms.",
        ],
      },
      {
        heading: "Step 5: Customer Rights Requests",
        body: [
          "Depending on the law, customers may request access to, correction of, deletion of or a copy of their data, or opt out of certain processing. Handle requests through a documented process: verify identity, find the data in every system on your data map (platform, email, support, warehouse, apps), respond within the legal deadline, and keep records. Deletion must reach third-party tools too, subject to data you're legally required to keep, such as tax records.",
        ],
        table: {
          headers: ["Request", "Where to act"],
          rows: [
            ["Access", "Platform, email, support, warehouse, apps"],
            ["Deletion", "Same, plus backups per policy; retain what law requires"],
            ["Correction", "Source systems; sync downstream"],
            ["Opt-out of marketing or targeted ads", "Email/SMS tools, ad audiences, consent state"],
            ["Portability", "Export in a usable format"],
          ],
        },
      },
      {
        heading: "Step 6: Vendors and Transfers",
        body: [
          "Every app and tool that receives customer data is a vendor relationship. Check what data it receives, its security practices, where it processes data, and that appropriate contracts (such as data processing agreements) are in place. International data transfers may need additional safeguards under some laws. Remove apps you don't use; they often keep data access.",
        ],
      },
      {
        heading: "Step 7: Retention and Deletion",
        body: [
          "Set retention periods per data type based on purpose and legal requirements, and implement them: automatic deletion or anonymization where tools support it, scheduled clean-ups where they don't. Old exports, abandoned tools and inactive accounts are common places where data outlives its purpose.",
        ],
      },
      {
        heading: "Security of Personal Data",
        body: [
          "Privacy laws typically require appropriate security for personal data. Apply least-privilege access, MFA, encryption where you control storage, secure exports, vendor review and incident response, including breach notification processes where laws require them. See [[/blogs/ecommerce-security-audit|ecommerce security audit]].",
        ],
      },
      {
        heading: "Analytics, Personalization and AI",
        body: [
          "Analytics, personalization and AI features are where privacy questions multiply. Use aggregated or pseudonymized data where possible, respect consent in every tool, avoid sensitive inferences, be transparent about personalization, and check AI providers' data terms before sending customer data. Some laws regulate profiling and automated decisions with significant effects; assess before building. See [[/blogs/ecommerce-customer-analytics|customer analytics]] and [[/blogs/ai-customer-support-ecommerce|AI customer support]].",
        ],
      },
      {
        heading: "Privacy in Checkout and Forms",
        body: [
          "Checkout and signup forms are where most customer data is collected, so they're where privacy design matters most. Separate marketing consent from purchase (not pre-ticked where consent is required), explain why optional fields are requested, avoid collecting data you don't use, and link to the privacy notice. Offer guest checkout and create accounts after purchase with clear choice. See [[/blogs/ecommerce-checkout-ux|checkout UX]].",
        ],
        checklist: [
          "Marketing consent separate and not pre-ticked where consent is required",
          "Optional fields marked and justified",
          "No unused fields",
          "Privacy notice linked at collection points",
          "Guest checkout available",
        ],
      },
      {
        heading: "Privacy for Marketing Data",
        body: [
          "Email, SMS and advertising audiences use customer data in ways many laws specifically regulate. Keep consent records for email and SMS, honour unsubscribes quickly across tools, check rules for uploading customer lists to ad platforms and for retargeting in each market, and make sure opt-outs from targeted advertising propagate. Build suppression lists that sync between tools.",
        ],
      },
      {
        heading: "Privacy Governance",
        body: [
          "Assign someone to own privacy: maintain the data map, review new tools and features, handle requests and track legal changes with advisers. Add a privacy check to the process for adding apps, pixels, AI tools and new data fields, and review the data map at least annually. Some laws require formal roles or assessments for certain processing; take advice.",
        ],
        table: {
          headers: ["Trigger", "Privacy check"],
          rows: [
            ["New app or pixel", "Data received, vendor terms, consent handling, notice update"],
            ["New market", "Local privacy and cookie rules"],
            ["New AI feature", "Data sent, provider terms, profiling risks"],
            ["New data field", "Purpose, necessity, retention"],
            ["Annual review", "Data map, notice, retention, vendors"],
          ],
        },
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "No data map, so rights requests miss systems",
          "Tags firing before consent where it's required",
          "Privacy notice out of date with actual tools",
          "Apps with data access never reviewed or removed",
          "No retention periods",
          "Treating server-side tracking as consent-free",
          "Sending customer data to AI tools without checking terms",
        ],
        cta: {
          title: "Ready to get customer data under control?",
          description: "Talk to ZSpace Labs about [[/services/website-development|privacy-aware tracking and data flows]], [[/services/shopify-development|Shopify consent configuration]] and [[/services/cro-audit|analytics audits]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Responsible data handling starts with a data map, then minimization, consent where required, accurate notices, rights handled across all tools, vendor review, retention and security. Take legal advice for your jurisdictions. Related: [[/blogs/ecommerce-compliance|ecommerce compliance]] and [[/blogs/ecommerce-data-warehouse|ecommerce data warehouse]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 360 · COMPLIANCE
  {
    slug: "ecommerce-compliance",
    title: "Ecommerce Compliance: The Areas Online Stores Need to Get Right",
    seoTitle: "Ecommerce Compliance: Areas Online Stores Must Get Right",
    excerpt: "An orientation to ecommerce compliance areas: consumer protection, pricing, subscriptions, reviews, privacy, accessibility, payments, product safety and tax.",
    category: "Shopify & Ecommerce",
    banner: "compliancemap",
    bannerAlt:
      "Ecommerce compliance areas in four columns: consumer (pricing and terms, returns and refunds, subscriptions, reviews), privacy (notices, consent, rights requests, data transfers, highlighted), accessibility (WCAG as reference, EAA in the EU, local laws, statements) and payments (PCI DSS, strong authentication in the EU, fraud, chargebacks), noting that obligations vary by jurisdiction and should be confirmed with qualified counsel.",
    date: "2026-09-29",
    readingTime: "18 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "retail", "d2c-consumer"],
    faqs: [
      { q: "What does ecommerce compliance cover?", a: "Laws and standards that apply to selling online, commonly including consumer protection (pricing, terms, cancellation and returns), subscriptions, reviews and advertising, privacy and data protection, accessibility, payments, product safety and labelling, and tax." },
      { q: "Is this article legal advice?", a: "No. It's an orientation to common areas. Requirements vary by jurisdiction, business type and product, and change over time. Consult qualified counsel." },
      { q: "Do I have to follow the laws of the countries I sell into?", a: "Often, yes, particularly consumer protection and privacy laws that protect customers where they live. How far this applies depends on the law and how you target those markets." },
      { q: "What is the EU right of withdrawal?", a: "Under EU consumer law, consumers generally have 14 days to withdraw from most distance contracts without giving a reason, with exceptions. Stores must inform consumers about this right." },
      { q: "Are there rules on showing discounts?", a: "In the EU, announcements of price reductions generally must show the prior price, defined as the lowest price in the previous 30 days, with some national variations. Other jurisdictions have their own rules on reference pricing." },
      { q: "What rules apply to subscriptions?", a: "Many jurisdictions regulate how recurring charges are disclosed, consented to and cancelled. In the US, the FTC's click-to-cancel rule was vacated by a federal court, but ROSCA and state automatic renewal laws still apply." },
      { q: "Are fake reviews illegal?", a: "In many jurisdictions. The US FTC has a rule prohibiting fake reviews and certain review practices, and EU and UK consumer law also address fake or misleading reviews." },
      { q: "Is accessibility a legal requirement?", a: "In many places. The European Accessibility Act applies to many ecommerce services in the EU. Other countries have their own laws. Get advice on what applies to you." },
      { q: "What payment rules apply?", a: "Card acceptance involves PCI DSS obligations, and in the EEA and UK, strong customer authentication rules generally apply to many online card payments. Your payment provider handles much of this, but not all." },
      { q: "How do I keep track of compliance?", a: "Maintain a register of obligations by market with owners, review it periodically and when entering new markets or launching new features, and take legal advice on changes." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Ecommerce compliance spans several areas: consumer protection (clear pricing, terms, cancellation and returns), subscriptions and automatic renewals, reviews and advertising, privacy and data protection, accessibility, payments (PCI DSS and, in some regions, strong customer authentication), product safety and labelling, and tax. Which rules apply depends on where you operate, where customers live and what you sell. Keep a register of obligations by market, assign owners, build compliance into design and development, and take qualified legal advice. This is orientation, not legal advice.",
        ],
      },
      {
        heading: "Why Compliance Is Part of the Build",
        body: [
          "Many compliance obligations show up in the storefront itself: how prices and discounts are displayed, what checkout says about terms and delivery, how subscriptions are sold and cancelled, whether reviews are genuine, whether the site is accessible, and how consent is collected. Getting them right is design and development work, not only legal review.",
          "This article gives a map of the common areas with examples. It doesn't state what applies to your store. Laws vary by jurisdiction and change; confirm with qualified counsel.",
        ],
      },
      {
        heading: "Consumer Protection: Pricing and Information",
        body: [
          "Consumer laws generally require clear, accurate information before purchase: total price including taxes and unavoidable fees, delivery costs, main product characteristics, seller identity and contact details, and terms. Misleading practices, such as hidden fees, fake urgency or false scarcity, are prohibited in many jurisdictions. In the EU, announcements of price reductions generally must show the prior price, defined as the lowest price applied in the previous 30 days, with some national variations.",
          "Design implications include showing full costs early, avoiding countdown timers and stock messages that aren't true, and keeping discount reference prices accurate. See [[/blogs/ecommerce-merchandising-automation|merchandising automation]] for truthful badges.",
        ],
      },
      {
        heading: "Cancellations, Returns and Refunds",
        body: [
          "Many jurisdictions give consumers rights to cancel distance purchases. Under EU consumer law, consumers generally have 14 days to withdraw from most distance contracts, with exceptions, and must be informed of the right. Other countries have different rules, and statutory rights for faulty goods usually exist alongside any returns policy you offer. Make policies clear, consistent across product pages, checkout, emails and help content, and aligned with the law in each market.",
        ],
      },
      {
        heading: "Subscriptions and Automatic Renewals",
        body: [
          "Subscriptions attract specific rules on disclosure, consent and cancellation. In the US, the FTC's \"click-to-cancel\" amendments to the Negative Option Rule were vacated by the Eighth Circuit, but the Restore Online Shoppers' Confidence Act (ROSCA) continues to apply, as do state automatic renewal laws, and the FTC has restarted rulemaking. Other jurisdictions have their own requirements. Practical design: clear recurring terms before purchase, express consent, confirmation, reminders where required, and cancellation that's as easy as sign-up. See [[/blogs/ecommerce-subscription-ux|subscription UX]].",
        ],
        cta: {
          title: "Want compliance built into your storefront?",
          description: "ZSpace Labs builds checkout, subscription, consent and accessibility features designed with your legal advisers' requirements.",
        },
      },
      {
        heading: "Reviews, Endorsements and Advertising",
        body: [
          "Reviews and endorsements are regulated in many places. The US FTC has a final rule banning fake reviews and testimonials and certain review practices, such as buying positive reviews or suppressing negative ones ([[https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials|FTC]]). EU and UK consumer law also address fake or misleading reviews and require information about how reviews are verified in some cases. Disclose incentivized reviews and material connections with influencers, and don't filter out negative reviews.",
        ],
      },
      {
        heading: "Privacy and Data Protection",
        body: [
          "Privacy laws govern how you collect, use, share and keep personal data, and how you use cookies and similar tracking. Examples include the EU GDPR and ePrivacy rules, the UK GDPR, the California Consumer Privacy Act as amended, other US state privacy laws and national laws elsewhere. Common requirements include notices, a lawful basis or opt-out rights, consent for certain tracking, customer rights, vendor contracts, security and breach notification. See [[/blogs/ecommerce-privacy-customer-data|ecommerce privacy and customer data]].",
        ],
      },
      {
        heading: "Accessibility",
        body: [
          "Accessibility laws increasingly cover online stores. The European Accessibility Act applies to many ecommerce services in the EU from 28 June 2025, implemented through national laws, with exemptions such as for microenterprises providing services. Other countries have disability discrimination or accessibility laws that may apply. WCAG 2.2 Level AA is the common technical reference. Publish an accessibility statement where required and fix barriers in code. See [[/blogs/ecommerce-accessibility|ecommerce accessibility]] and [[/blogs/ecommerce-accessibility-checklist|accessibility checklist]].",
        ],
      },
      {
        heading: "Payments",
        body: [
          "Accepting cards brings PCI DSS obligations, which depend on how you process payments; hosted checkouts and payment provider fields reduce your scope. In the EEA and UK, strong customer authentication rules generally apply to many online card payments, usually handled through 3-D Secure by your payment provider. Buy now, pay later and instalment products can carry consumer credit rules in some markets. See [[/blogs/ecommerce-security|ecommerce security]].",
        ],
      },
      {
        heading: "Product Safety, Labelling and Restricted Goods",
        body: [
          "Product rules depend on category and market: safety requirements, labelling, ingredient and allergen information for food and cosmetics, age restrictions, and restrictions on shipping certain goods. In the EU, the General Product Safety Regulation sets requirements for products sold online, including information that must be shown in listings. Categories such as supplements, cosmetics, children's products and electrical goods often have specific rules. Build required information into product templates and data models.",
        ],
      },
      {
        heading: "Tax and Invoicing",
        body: [
          "Sales tax, VAT and customs duties apply differently by market and threshold. Many jurisdictions require displaying tax-inclusive prices to consumers, collecting tax on cross-border sales above thresholds and issuing compliant invoices. Platforms and tax services help calculate and collect, but registration and filing remain your responsibility. See [[/blogs/international-ecommerce-website-development|international ecommerce development]].",
        ],
      },
      {
        heading: "Building a Compliance Register",
        body: [
          "Keep a register of obligations by market and area, with the source, owner, how it's implemented in the store and when it was last reviewed. Update it when entering a new market, launching subscriptions or new product categories, adding tracking or AI features, or when laws change. Share it with design and development so requirements become part of specifications.",
        ],
        table: {
          headers: ["Area", "Market", "Obligation (as advised)", "Implementation", "Owner", "Reviewed"],
          rows: [
            ["Pricing", "EU", "Prior price on reductions", "Price history in PDP template", "Ecommerce lead", "Date"],
            ["Subscriptions", "US (state)", "Renewal disclosures, easy cancel", "Checkout copy, account cancel flow", "Product", "Date"],
            ["Privacy", "EU/UK", "Consent before non-essential cookies", "Consent tool config", "Data lead", "Date"],
            ["Accessibility", "EU", "EAA requirements", "WCAG 2.2 AA fixes, statement", "Design lead", "Date"],
          ],
        },
      },
      {
        heading: "Compliance When Entering New Markets",
        body: [
          "Expanding internationally multiplies obligations. Before launching in a new market, review consumer rules (pricing display, withdrawal rights, language requirements), privacy and cookie rules, accessibility laws, payment rules, product and labelling requirements, and tax registration thresholds. Localize policies and checkout information, not just currency and language. See [[/blogs/global-ecommerce-checkout|global checkout]] and [[/blogs/shopify-markets|Shopify Markets]].",
        ],
        checklist: [
          "Consumer information and withdrawal rights for the market",
          "Price display (tax-inclusive where required)",
          "Privacy and cookie consent configuration",
          "Accessibility obligations",
          "Product labelling and restricted goods",
          "Tax and duties registration and display",
          "Policies translated and localized",
        ],
      },
      {
        heading: "Compliance and Growth Tactics",
        body: [
          "Some conversion tactics sit close to compliance lines: countdown timers, low-stock messages, reference prices, pre-selected add-ons, subscription defaults, review incentives and popups collecting consent. Before using them, check they're truthful and lawful in each market. Honest versions usually work: real deadlines, real stock levels, accurate reference prices, clear opt-ins. See [[/blogs/ecommerce-experimentation-mistakes|experimentation mistakes]] for testing responsibly.",
        ],
        table: {
          headers: ["Tactic", "Compliance question"],
          rows: [
            ["Countdown timer", "Is the deadline real?"],
            ["Low-stock badge", "Is it based on actual inventory?"],
            ["Was/now pricing", "Is the reference price genuine under local rules?"],
            ["Pre-selected add-ons", "Is opt-in required?"],
            ["Subscription default", "Are terms clear and consent express?"],
            ["Review requests with incentives", "Are incentives disclosed and unconditional on sentiment?"],
          ],
        },
      },
      {
        heading: "Working With Legal Advisers",
        body: [
          "Use advisers efficiently: give them your compliance register, screenshots of key flows (pricing, checkout, subscriptions, consent) and a list of markets. Ask for requirements you can turn into specifications, and schedule reviews before launching new markets, subscription products or data-heavy features. Keep their advice with the register so implementation can be traced to it.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Assuming home-country rules cover every market",
          "Fake urgency, scarcity or reference prices",
          "Subscriptions that are hard to cancel",
          "Filtering negative reviews",
          "Policies that differ between product page, checkout and help centre",
          "Treating general guides as legal advice",
        ],
        cta: {
          title: "Ready to align your store with its obligations?",
          description: "Talk to ZSpace Labs about [[/services/website-development|compliant checkout and consent builds]], [[/services/shopify-development|Shopify configuration]] and [[/services/ui-ux-design|accessible, honest UX]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Ecommerce compliance touches pricing, cancellations, subscriptions, reviews, privacy, accessibility, payments, product rules and tax. Map obligations by market, build them into the storefront and take qualified legal advice. Related: [[/blogs/ecommerce-security-audit|security audit]] and [[/blogs/ecommerce-ab-testing-checkout|checkout testing]].",
        ],
      },
    ],
  },
];
