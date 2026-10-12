import type { BlogPost } from "./blog-data";

/**
 * Australian website quality and trust pair: the website side of local SEO
 * for service businesses, and a build-time security checklist for
 * customer-facing web applications. Local SEO had no existing page; the
 * article states that website development supports local SEO but does not
 * replace a full local SEO strategy, and warns against doorway pages and
 * mass-produced city pages. The security article is distinct from
 * website-security-australia (operating a small-business website, mapped to
 * the Essential Eight) and secure-business-website-development (generic):
 * it covers threat modelling, OWASP Top 10:2025 and ASVS 5.0,
 * authorisation, secrets, data minimisation, logging and release practices
 * for applications that handle customer accounts and data.
 * Sources checked 2026-10-09: Google Business Profile guidelines; Google
 * Search spam policies (doorway abuse, scaled content abuse); Google
 * LocalBusiness structured data (updated 2026-09-08); ACCC online reviews;
 * StatCounter Australia (Sept 2026); OWASP Top 10:2025 (top10.owasp.org);
 * OWASP ASVS 5.0 (via secondary summaries); ASD Secure by Design (via
 * secondary summaries); OAIC (APP 11, NDB 2025); Home Affairs ransomware
 * reporting factsheet; RFC 9700. ZSpace Labs has no Australian office and
 * no SEO service page; no figure here is ZSpace client data.
 */
export const auVisibilityPosts: BlogPost[] = [
  {
    slug: "local-seo-australia",
    title: "Local SEO for Australian Service Businesses: Website Improvements That Support Visibility",
    seoTitle: "Local SEO for Australian Service Businesses: The Website",
    excerpt:
      "The website side of local SEO for Australian service businesses: service and location pages, accurate details, Google Business Profile, reviews and measurement.",
    category: "Web Development",
    banner: "serp",
    sceneKind: "serp",
    bannerAlt: "A local search result with a map pack and business profile, linked to a service business website with clear service pages, location information and calls to action",
    date: "2026-10-09",
    readingTime: "10 min read",
    relatedServiceSlugs: ["website-development", "cro-audit", "ui-ux-design"],
    relatedIndustrySlugs: ["professional-services", "construction-infrastructure", "healthcare-healthtech", "real-estate", "automotive-mobility"],
    relatedSlugs: ["seo-friendly-website-development", "website-performance-optimization", "website-development-cost-australia"],
    faqs: [
      {
        q: "What is local SEO?",
        a: "Local SEO is the work of helping a business appear when people search for services near them, in Google's map results, business profiles and ordinary search results. It combines an accurate Google Business Profile, a website that clearly explains your services and the areas you serve, consistent business details across the web, genuine reviews, and signals that show you are a real, relevant business in that place.",
      },
      {
        q: "Does a new website improve local SEO?",
        a: "It can support it, but it is not the whole job. A website with clear service pages, accurate contact details, useful information about the areas you serve, fast mobile pages and good structured data helps search engines and customers. Local visibility also depends on your Google Business Profile, reviews, relevance, distance from the searcher and prominence, which a website alone does not control.",
      },
      {
        q: "Should we create a page for every suburb we service?",
        a: "Not as near-identical copies. Google's spam policies describe doorway abuse, including pages targeted at specific regions or cities that funnel users to one page. Create location pages only where you have something genuinely specific to say, such as a branch, local team, projects, conditions or service details. Otherwise, one clear service-area page usually serves customers better.",
      },
      {
        q: "Can a home-based or mobile business have a Google Business Profile?",
        a: "Yes, if it serves customers in person. Google's guidelines allow service-area businesses that travel to customers, and say they should hide their address if customers do not visit it. A virtual office or mailbox address is not eligible unless it is staffed during business hours. Use your real business name, without added keywords or locations.",
      },
      {
        q: "Can we ask customers for reviews?",
        a: "Yes, you can ask genuine customers to review you, ideally all of them rather than only happy ones. Do not write fake reviews, pay for positive reviews without disclosure, or remove or edit negative reviews selectively. The ACCC has said businesses can mislead consumers through how they manage reviews, and Google's own policies prohibit fake engagement.",
      },
      {
        q: "Does LocalBusiness structured data help local rankings?",
        a: "LocalBusiness structured data helps Google understand details such as your business name, address, hours and contact information, which can support how your business is shown. Google does not describe it as a ranking boost, and it must match the visible page and your real details. It is one useful technical step, not a substitute for a Business Profile or relevant content.",
      },
      {
        q: "How long does local SEO take to work?",
        a: "There is no reliable timeframe. Fixing inaccurate business details or a broken website can have an effect relatively quickly, while building relevance, reviews and prominence takes months and depends on competition in your area. Measure impressions, calls, direction requests and enquiries over time, and be wary of anyone who promises a ranking or a timeframe.",
      },
    ],
    content: [
      {
        heading: "How does a website support local SEO?",
        body: [
          "**A website supports local SEO by making it easy for customers and search engines to understand what you do, where you do it, and how to contact you: clear service pages, accurate business details that match your Google Business Profile, genuinely useful location information, honest reviews, structured data, fast mobile pages and obvious calls to action.** It is one part of local SEO. Your Business Profile, reviews, relevance and distance from the searcher also matter.",
          "This guide is for Australian service businesses such as trades, clinics, professional firms, home services and local retailers that want more enquiries from local search. If you are choosing who builds the site, see [[/blogs/web-development-company-australia|choosing a web development company in Australia]]. It focuses on what a website can do: architecture, business details, the link to Google Business Profile, location content, reviews, structured data, mobile usability, calls to action and measurement.",
          "**Scope note:** ZSpace Labs builds and improves websites; we do not offer a full local SEO service such as citation building or ongoing profile management. We also have no Australian office. For the technical SEO foundations, see [[/blogs/seo-friendly-website-development|building an SEO-friendly website]]. We do not promise rankings, and neither should anyone else.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Google usually decides local results on relevance, distance and prominence. Your website mainly helps relevance and, indirectly, prominence.",
          "Give each core service its own useful page. Do not mass-produce suburb pages.",
          "Make name, address (where shown), phone and hours identical on your site and Business Profile.",
          "Service-area businesses should hide their address in Google Business Profile if customers do not visit it.",
          "Ask all genuine customers for reviews; never fake, buy or selectively remove them.",
          "Add LocalBusiness structured data that matches the page. It aids understanding; it is not a ranking guarantee.",
          "Measure calls, forms, direction requests and enquiries, not just rankings.",
        ],
      },
      {
        heading: "How local search works, in brief",
        body: [
          "Google says local results are based mainly on **relevance** (how well a listing matches the search), **distance** (how far the result is from the searcher or the location in the query) and **prominence** (how well known the business is, including signals such as reviews and links) ([[https://support.google.com/business/answer/7091|Google Business Profile Help]]). You cannot change the searcher's location. You can make your business clearly relevant and build genuine prominence over time.",
          "Google dominates search in Australia, with about 88% share across platforms in September 2026, and Bing about 9% ([[https://gs.statcounter.com/search-engine-market-share/all/australia|StatCounter]]). That is why most local SEO advice centres on Google, though accurate details on Bing Places and Apple Business Connect also help.",
        ],
      },
      {
        heading: "Service and location page architecture",
        body: [
          "Most service businesses need a simple, clear structure: a page for each core service, a page explaining the areas you serve, and, only where justified, pages for real locations such as branches.",
        ],
        table: {
          headers: ["Page type", "Create when", "What makes it useful"],
          rows: [
            ["**Service page**", "For each service customers search for separately", "What is included, who it suits, process, pricing approach, FAQs, examples, a clear call to action"],
            ["**Service-area page**", "You travel to customers across a region", "Suburbs or regions covered, response times, any limits, how to book"],
            ["**Location (branch) page**", "You have a staffed office, clinic or showroom customers visit", "Address, hours, parking and access, local team, photos, directions"],
            ["**Local project or case page**", "You have real, permitted examples of local work", "What was done, constraints, photos, outcomes you can verify"],
          ],
        },
        callout: {
          type: "note",
          text: "Google's spam policies describe doorway abuse, including \"having multiple domain names or pages targeted at specific regions or cities that funnel users to one page\", and scaled content abuse, where many pages are generated mainly to manipulate rankings ([[https://developers.google.com/search/docs/essentials/spam-policies|Google Search Central]]). Fifty suburb pages that differ only by the suburb name are a risk, not a strategy.",
        },
      },
      {
        heading: "Accurate business details everywhere",
        body: [
          "Customers and search engines both need to trust your basic details, and the same rule applies if you also run a [[/blogs/customer-portal-development-australia|customer portal]] or app. Put your business name, phone number, service areas, hours and, if customers visit, your address in the footer or contact page, as text rather than an image. Use the same details in your Google Business Profile, directories and social profiles.",
          "Display your ABN where it helps customers verify you, and make licence numbers visible where your trade requires a licence. Keep holiday hours up to date. Inconsistent details, such as an old phone number on a directory, send customers to the wrong place and weaken trust.",
        ],
      },
      {
        heading: "Google Business Profile: what the guidelines require",
        body: [
          "Google Business Profile is managed separately from your website, but they should support each other. Key points from Google's guidelines ([[https://support.google.com/business/answer/3038177|Google]]):",
        ],
        checklist: [
          "A business is eligible if it has a location customers can visit, or travels to customers where they are.",
          "Service-area businesses should have one profile for the central office with a designated service area, and hide the address if customers are not served there.",
          "A rented mailbox or virtual office is not eligible unless it is staffed during business hours.",
          "The business name should reflect the real-world name, without added taglines, keywords or locations.",
          "There should be only one profile per business location.",
          "Link the profile to the most relevant page on your site, such as the branch or service-area page.",
        ],
      },
      {
        heading: "Useful local content, not keyword swaps",
        body: [
          "Local intent is about the customer's situation, and the [[/blogs/ux-audit|UX audit]] techniques for understanding user tasks apply directly here. Content that helps people in your area choose and use your service is both more useful and more defensible than pages that repeat a suburb name.",
        ],
        checklist: [
          "Explain service areas honestly, including where you do not go or charge extra for travel.",
          "Cover local conditions where they change the work, such as coastal corrosion, bushfire-prone building considerations or heritage overlays, citing the relevant authority.",
          "Show real local projects, with the customer's permission and without inventing outcomes.",
          "Answer the questions your team hears on the phone, in your own words.",
          "Show realistic response times and availability by area.",
          "Introduce the real people customers will deal with.",
        ],
      },
      {
        heading: "Reviews and truthful reputation management",
        body: [
          "Reviews influence both customers and local prominence, and they are regulated. The ACCC's guidance says businesses should be transparent about commercial relationships, should not post or publish misleading reviews, and that removing or editing negative reviews can be as misleading as fake ones ([[https://www.accc.gov.au/business/advertising-and-promotions/online-product-and-service-reviews|ACCC]]). False or misleading testimonials are prohibited under the Australian Consumer Law, and Google's policies prohibit fake engagement.",
        ],
        checklist: [
          "Ask every genuine customer for a review, at a consistent point such as job completion.",
          "Make it easy with a direct link, but do not offer rewards for positive reviews.",
          "Respond to reviews, especially negative ones, calmly and without disclosing personal information.",
          "Never write reviews for your own business or a competitor's, or pay for undisclosed reviews.",
          "If you show reviews on your site, show a fair selection and say where they come from.",
        ],
      },
      {
        heading: "Local structured data where eligible",
        body: [
          "LocalBusiness structured data tells Google your business name, address, phone, hours and other details. Google lists name and address as required properties, and its guidelines warn that violations can lead to a manual action ([[https://developers.google.com/search/docs/appearance/structured-data/local-business|Google Search Central]]). Mark up only what is visible on the page and true. Service-area businesses that do not serve customers at an address should think carefully before publishing one.",
          "Do not add review or rating markup for your own business that you collect yourself; Google restricts self-serving review snippets. Structured data supports understanding; it does not guarantee rich results or rankings. Our [[/blogs/seo-friendly-website-development|SEO-friendly website guide]] covers how structured data fits with the rest of technical SEO.",
        ],
      },
      {
        heading: "Mobile usability and calls to action",
        body: [
          "Local searches often happen on phones, sometimes urgently. Make the next step obvious on every page:",
        ],
        checklist: [
          "A tap-to-call phone number and a short enquiry form near the top on mobile.",
          "Clear opening hours, including after-hours or emergency options if you offer them.",
          "Booking online where it suits the service. See [[/blogs/booking-system-development-australia|online booking systems]].",
          "Fast pages: measure real-user Core Web Vitals. See [[/blogs/website-performance-optimization|website performance optimisation]].",
          "Accessible forms and contrast. See [[/blogs/website-accessibility-australia|website accessibility in Australia]].",
          "Trust signals near the call to action: licence numbers, insurance, guarantees you actually offer, real reviews.",
        ],
      },
      {
        heading: "Measurement",
        body: [
          "Rankings vary by searcher location, so a single rank check is misleading. Measure outcomes, and connect them to your CRM as described in [[/blogs/crm-website-integration|integrating a CRM with your website]]:",
        ],
        table: {
          headers: ["Source", "What to watch"],
          rows: [
            ["**Google Search Console**", "Impressions, clicks and click-through rate for service and location queries; indexing of key pages"],
            ["**Google Business Profile performance**", "Searches, views, calls, website clicks and direction requests"],
            ["**Website analytics**", "Enquiries and calls by landing page and channel"],
            ["**Call tracking or CRM**", "Which enquiries become jobs, by service and area"],
          ],
        },
        callout: {
          type: "tip",
          text: "Our recommendation: tag every enquiry with its service and suburb in your CRM. After a few months you will know which services and areas local search actually brings, which is more useful than any ranking report.",
        },
      },
      {
        heading: "Hypothetical example: a plumbing business",
        body: [
          "**This example is hypothetical.** A Newcastle plumbing business has one generic 'services' page, 40 suburb pages copied from a template, and a Business Profile showing an old phone number. Enquiries come mostly from referrals.",
          "The website is restructured (following the redirect practices in the [[/blogs/website-migration-guide|website migration guide]]) with separate pages for blocked drains, hot water, gas fitting and emergency plumbing, each with what is included, pricing approach, licence details and FAQs. The suburb pages are consolidated into one service-area page listing the areas covered and response times, with redirects from the old pages. Business details are corrected everywhere, the Business Profile name is changed back to the real business name, and the team asks every customer for a review at invoice. LocalBusiness markup matches the contact page. The business measures calls and enquiries by service; no ranking outcome is promised or claimed.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Mass-produced suburb pages that differ only in the place name.",
          "Keyword-stuffed business names on Google Business Profile.",
          "Using a virtual office address to appear in a suburb you do not operate from.",
          "Buying reviews or filtering out negative ones.",
          "Contact details that differ between the website and the Business Profile.",
          "Phone numbers as images, or hidden in a slow-loading widget.",
          "Judging success by one person's rank check rather than enquiries.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**Google:** [[https://support.google.com/business/answer/3038177|Google Business Profile guidelines]]; [[https://support.google.com/business/answer/7091|Google, how to improve your local ranking]]; [[https://developers.google.com/search/docs/essentials/spam-policies|Google Search spam policies]]; [[https://developers.google.com/search/docs/appearance/structured-data/local-business|Google, LocalBusiness structured data]].",
          "**Reviews and market:** [[https://www.accc.gov.au/business/advertising-and-promotions/online-product-and-service-reviews|ACCC, online product and service reviews]]; [[https://gs.statcounter.com/search-engine-market-share/all/australia|StatCounter, search engine market share Australia]].",
          "The page types, checklists and example are ours. ACCC points were confirmed via search summaries because accc.gov.au blocked our fetcher. Nothing here is legal advice or ZSpace client data.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Your website cannot move your business closer to the searcher, but it can make you clearly relevant and trustworthy: one useful page per service, honest service-area and location information, details that match your Business Profile, genuine reviews, accurate structured data and a fast, obvious way to call or book. Combine that with a well-managed Business Profile and patience, and measure enquiries rather than rankings. If enquiries arrive but do not convert, [[/blogs/website-gets-traffic-but-no-leads|why a website gets traffic but no leads]] and [[/blogs/website-lead-generation|website lead generation]] cover the next step; for budgeting a rebuild, see [[/blogs/website-development-cost-australia|website development cost in Australia]]. If AI search matters to you as well, [[/blogs/ai-search-visibility|AI search visibility]] covers what is different and what is not.",
        ],
        cta: {
          title: "Want a website that turns local searches into enquiries?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|website development]] and [[/services/cro-audit|conversion audits]]. We focus on the website side of local visibility and can work alongside your local SEO specialist.",
        },
      },
    ],
  },
  {
    slug: "secure-web-application-development-australia",
    title: "How to Build a Secure Customer-Facing Web Application: A Checklist for Australian Businesses",
    seoTitle: "Secure Web Application Development: Australian Checklist",
    excerpt:
      "A build-time security checklist for Australian customer-facing web apps: threat modelling, access control, OWASP Top 10:2025, secrets, logging and releases.",
    category: "Web Development",
    banner: "securityarch",
    sceneKind: "security",
    bannerAlt: "A customer-facing web application with security controls at each layer: sign-in, authorisation checks, input validation, secrets storage, encryption, logging and monitoring",
    date: "2026-10-09",
    readingTime: "11 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["fintech", "healthcare-healthtech", "insurtech", "saas-technology", "professional-services"],
    relatedSlugs: ["website-security-australia", "secure-business-website-development", "customer-portal-development-australia"],
    faqs: [
      {
        q: "How is this different from a website security checklist?",
        a: "A website security checklist focuses on operating a site safely: updates, hosting, backups, accounts and monitoring. Building a secure web application adds design and development decisions for software that holds customer accounts and data: threat modelling, authorisation logic, input handling, secrets, dependency management and release practices. Most businesses with a customer portal or app need both.",
      },
      {
        q: "What is the most common web application security weakness?",
        a: "Broken access control is ranked first in the OWASP Top 10:2025. It covers cases where users can view or change data or functions they should not, for example by changing an ID in a URL to see another customer's record. Preventing it requires authorisation checks on the server for every request and object, with tests that try to access other users' data.",
      },
      {
        q: "What is OWASP ASVS and do we need it?",
        a: "The OWASP Application Security Verification Standard is a detailed list of security requirements for web applications, organised into three levels of increasing assurance. Version 5.0 was released in 2025. You do not need formal certification, but ASVS is a useful way to agree with your developers which requirements apply, and to test against them.",
      },
      {
        q: "Is the Essential Eight enough for a web application?",
        a: "No. The Essential Eight is ASD's baseline of mitigation strategies for an organisation's systems, such as patching, MFA, restricting admin privileges and backups. It is valuable for the environment around your application, but it does not tell you how to design authorisation, validate input or manage secrets inside the application. Use it alongside application security standards such as OWASP.",
      },
      {
        q: "Do we need a penetration test before launch?",
        a: "For an application that handles customer accounts, payments or sensitive data, an independent test before launch and after major changes is good practice. It complements, rather than replaces, secure design, code review and automated testing during development. Agree the scope in writing, test in a realistic environment and fix and retest high-risk findings before going live.",
      },
      {
        q: "What must we do if customer data is breached?",
        a: "If your business is covered by the Privacy Act, the Notifiable Data Breaches scheme requires you to assess a suspected eligible data breach and, if it is likely to result in serious harm, notify the OAIC and affected individuals. Have an incident response plan, logs that show what happened, and contacts for legal and technical help ready before launch. This is general information, not legal advice.",
      },
      {
        q: "Can any web application be completely secure?",
        a: "No. Security reduces the likelihood and impact of incidents; it cannot remove all risk. New vulnerabilities are found in software and dependencies every day, and people make mistakes. That is why a secure application combines prevention with detection, response and recovery, and why security is maintained continuously after launch rather than signed off once.",
      },
    ],
    content: [
      {
        heading: "What does it take to build a secure customer-facing web application?",
        body: [
          "**A secure customer-facing web application is designed with its threats in mind, enforces authentication and authorisation on every request, treats all input as untrusted, keeps secrets and dependencies under control, collects and keeps only the data it needs, logs what matters, and ships through a tested release process, then stays maintained.** In Australia, it should also support your privacy obligations and data breach response. No application is completely secure; the aim is to reduce risk and recover well.",
          "This checklist is for business owners and product managers commissioning a [[/blogs/custom-software-development-australia|custom application]], customer portal, booking system, marketplace, SaaS product or any web app that holds customer accounts and data, and for the developers who build them. It complements [[/blogs/website-security-australia|website security for Australian small businesses]], which covers operating a site and mapping controls to the Essential Eight.",
          "**This article is not a security certification or a substitute for a professional security assessment.** It is a practical baseline to discuss with your developers and testers.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Threat model before you build: what you protect, from whom, and how it could fail.",
          "Broken access control tops the OWASP Top 10:2025. Check authorisation on the server for every request and every object.",
          "Use proven identity services and MFA; protect account recovery as strongly as sign-in.",
          "Validate input and encode output; use parameterised queries and framework protections.",
          "Keep secrets out of code, and manage dependencies as a supply chain.",
          "Collect less data, encrypt it in transit and at rest, and delete it when no longer needed.",
          "Log security events, monitor them and rehearse incident response, including NDB assessment.",
          "Agree security requirements with your developers, for example using OWASP ASVS levels.",
        ],
      },
      {
        heading: "Start with a threat model",
        body: [
          "A threat model is a structured conversation about what could go wrong. It does not need special tools. For each feature, ask four questions: what are we building, what can go wrong, what will we do about it, and did we do a good job?",
        ],
        checklist: [
          "**Assets:** customer accounts, personal and payment data, documents, admin functions, API keys.",
          "**Actors:** customers, staff, administrators, partners, automated bots, attackers.",
          "**Entry points:** sign-in, sign-up, password reset, forms, file uploads, APIs, webhooks, admin panel.",
          "**Trust boundaries:** browser to server, server to database, your system to third parties.",
          "**Abuse cases:** account takeover, viewing another customer's data, payment fraud, scraping, denial of service.",
          "**Controls and owners:** how each risk is reduced, and who is responsible.",
        ],
        callout: {
          type: "tip",
          text: "Our recommendation: write abuse cases next to user stories. 'As a customer I can view my invoices' sits beside 'As an attacker I change the invoice ID to view someone else's'. Each abuse case becomes a test.",
        },
      },
      {
        heading: "The risks to design against: OWASP Top 10:2025",
        body: [
          "The OWASP Top 10 is a widely used awareness list of the most critical web application security risks. The 2025 edition ([[https://top10.owasp.org/2025/0x00_2025-Introduction|OWASP]]) lists:",
        ],
        table: {
          headers: ["#", "Risk", "What it means in practice"],
          rows: [
            ["A01", "Broken Access Control", "Users reach data or functions they should not"],
            ["A02", "Security Misconfiguration", "Unsafe defaults, open storage, verbose errors, unneeded features"],
            ["A03", "Software Supply Chain Failures", "Compromised or vulnerable dependencies, build tools or distribution"],
            ["A04", "Cryptographic Failures", "Weak or missing encryption of sensitive data"],
            ["A05", "Injection", "Untrusted input interpreted as code or queries"],
            ["A06", "Insecure Design", "Missing controls that should have been designed in"],
            ["A07", "Authentication Failures", "Weak sign-in, session or recovery handling"],
            ["A08", "Software or Data Integrity Failures", "Unverified updates, data or serialised objects"],
            ["A09", "Security Logging & Alerting Failures", "Attacks go unnoticed or cannot be investigated"],
            ["A10", "Mishandling of Exceptional Conditions", "Errors and edge cases that fail unsafely"],
          ],
        },
      },
      {
        heading: "Authentication: who is this?",
        body: [],
        checklist: [
          "Use a proven identity provider or framework rather than writing your own password handling.",
          "Offer multi-factor authentication, and require it for staff and administrators. Support passkeys where your platform allows.",
          "Store passwords only as salted hashes with a modern algorithm, if you store them at all.",
          "Rate-limit and monitor sign-in, sign-up and recovery to slow credential stuffing.",
          "Make account recovery as strong as sign-in; recovery is a common takeover route.",
          "Use secure, HTTP-only cookies with appropriate SameSite settings, and expire sessions sensibly.",
          "Notify users of new devices and changes to email, password or payment details.",
          "Follow current OAuth guidance when integrating sign-in or APIs, such as the OAuth 2.0 security best current practice ([[https://www.rfc-editor.org/rfc/rfc9700|RFC 9700]]).",
          "Keep sign-in accessible: WCAG 2.2's accessible authentication criterion discourages relying on memory or transcription tests without alternatives. See [[/blogs/website-accessibility-australia|website accessibility in Australia]].",
        ],
      },
      {
        heading: "Authorisation: what are they allowed to do?",
        body: [
          "Most serious application breaches are authorisation failures, not clever hacks. Every request that reads or changes data must check, on the server, that this user may do this action on this specific object.",
        ],
        checklist: [
          "Deny by default; grant the minimum permissions for each role.",
          "Check ownership of every object, not just whether the user is signed in.",
          "Do not rely on hidden fields, client-side checks or unguessable IDs for security.",
          "Model organisations and roles explicitly for business customers.",
          "Protect admin functions with separate roles, MFA and, where possible, network restrictions.",
          "Write automated tests that attempt to access other users' records and admin functions.",
        ],
      },
      {
        heading: "Input validation and common vulnerabilities",
        body: [],
        checklist: [
          "Treat all input as untrusted: forms, URLs, headers, files, webhooks and API responses.",
          "Validate on the server against expected types, lengths and formats.",
          "Use parameterised queries or an ORM to prevent injection.",
          "Encode output for its context and use your framework's templating protections against cross-site scripting.",
          "Set a Content Security Policy and other security headers.",
          "Handle file uploads safely: check type and size, store outside the web root, scan where appropriate and serve through authorised links.",
          "Protect state-changing requests against cross-site request forgery.",
          "Restrict server-side requests to approved destinations.",
          "Return generic error messages to users and log the details privately.",
        ],
      },
      {
        heading: "Dependencies and secrets",
        body: [
          "**Supply chain.** Modern applications are mostly third-party code. Software Supply Chain Failures is now third in the OWASP Top 10. Keep an inventory of dependencies, pin versions, use lockfiles, scan for known vulnerabilities in the build pipeline, remove unused packages and update on a schedule. Protect the build pipeline and repository with MFA and least privilege. Our guide to [[/blogs/ai-generated-code-security|AI-generated code security]] covers extra checks when coding assistants add dependencies.",
          "**Secrets.** Never put API keys, database passwords or tokens in source code or client-side bundles. The same applies to keys for integrations such as accounting or CRM APIs; see [[/blogs/api-integration-australia|API integration for Australian businesses]]. Use a secrets manager or your platform's encrypted environment variables, give each secret the minimum permissions, rotate them, and scan repositories for leaked secrets.",
        ],
      },
      {
        heading: "Encryption and data minimisation",
        body: [
          "The safest data is data you never collected. For each field, ask whether the application needs it, for how long, and who should see it.",
        ],
        checklist: [
          "Collect only what each feature needs; avoid copying sensitive data into logs, analytics or support tools.",
          "Use HTTPS everywhere, with HSTS.",
          "Encrypt data at rest, and manage keys separately from data.",
          "Use your payment provider's hosted fields so card data never reaches your servers.",
          "Set retention periods and delete or de-identify data when they expire.",
          "Know where data, backups and logs are hosted and who can access them, including overseas support (see [[/blogs/cloud-migration-australia|cloud migration for Australian businesses]] on regions and APP 8). If you are covered by the Privacy Act, APP 8 and APP 11 apply ([[https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-11-app-11-security-of-personal-information|OAIC]]).",
        ],
      },
      {
        heading: "Logging, monitoring and incident response",
        body: [
          "You cannot respond to what you cannot see. Log security-relevant events (sign-ins, failures, permission changes, admin actions, data exports) without logging passwords, tokens or unnecessary personal data. Send logs somewhere attackers cannot easily alter, set alerts for suspicious patterns and review them.",
          "Write an incident response plan before launch (the [[/blogs/website-security-australia|website security checklist]] includes an incident sequence): who decides, how to contain, how to preserve evidence and how to communicate. If your business is covered by the Privacy Act, the Notifiable Data Breaches scheme requires assessing suspected eligible breaches and notifying the OAIC and affected individuals where serious harm is likely; the OAIC received 1,205 notifications in 2025 ([[https://www.oaic.gov.au/news/media-centre/data-breach-notifications-increase-to-all-time-high-in-2025,-new-ndb-stats-show|OAIC]]). Businesses with annual turnover over A$3 million must also report ransomware or cyber extortion payments to ASD within 72 hours ([[https://www.homeaffairs.gov.au/cyber-security-subsite/files/factsheet-ransomware-payment-reporting.pdf|Home Affairs]]).",
        ],
      },
      {
        heading: "Testing and release practices",
        body: [],
        table: {
          headers: ["Practice", "When", "What it catches"],
          rows: [
            ["**Security requirements (for example ASVS level)**", "Before build", "Gaps in what was agreed"],
            ["**Code review with a security checklist**", "Every change", "Authorisation and validation mistakes"],
            ["**Automated tests for abuse cases**", "Every build", "Regressions in access control"],
            ["**Dependency and secret scanning**", "Every build", "Known vulnerable packages; leaked keys"],
            ["**Static and dynamic analysis**", "Regularly", "Common vulnerability patterns"],
            ["**Independent penetration test**", "Before launch and after major changes", "Issues the team missed"],
            ["**Staged releases with rollback**", "Every release", "Limits the impact of mistakes"],
          ],
        },
      },
      {
        heading: "Agree a security standard with your developers",
        body: [
          "The OWASP Application Security Verification Standard (ASVS) turns these practices into testable requirements. Version 5.0 was released in 2025 and keeps three levels of increasing assurance ([[https://owasp.org/www-project-application-security-verification-standard/|OWASP ASVS]]). Many business applications aim for level 2, with level 3 for the highest-risk systems, though the right level depends on your data and threats. Agreeing a level in the contract gives both sides a shared, checkable definition of 'secure enough'.",
          "ASD's Secure by Design guidance encourages technology manufacturers to build security in from the start and to make secure behaviour the default ([[https://www.cyber.gov.au/business-government/secure-design/secure-by-design|ASD]]). The Essential Eight remains a sound baseline for the systems around your application ([[https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/essential-eight|ASD]]).",
        ],
      },
      {
        heading: "Ongoing maintenance",
        body: [],
        checklist: [
          "Patch dependencies, frameworks and runtimes on a schedule, and urgently for critical vulnerabilities. If the application already runs on unsupported components, see [[/blogs/legacy-software-modernization-australia|legacy software modernisation]].",
          "Review user and admin access quarterly.",
          "Re-run threat modelling for significant new features.",
          "Rotate secrets and review third-party integrations.",
          "Test backups by restoring them.",
          "Re-test after major changes, and at least annually for high-risk applications.",
        ],
      },
      {
        heading: "Hypothetical example: a patient portal",
        body: [
          "**This example is hypothetical.** An allied health group commissions a portal where patients see appointments, invoices and exercise plans. As a health service provider, it is covered by the Privacy Act.",
          "The threat model identifies account takeover and access to other patients' records as the top risks. The team uses a managed identity service with MFA and strong recovery, enforces record-level authorisation with automated tests that try to read other patients' data, keeps clinical notes out of notifications and logs, hosts in an Australian region with documented support access, and agrees ASVS level 2 as the requirement. An independent test is scheduled before launch, and the incident plan includes NDB assessment steps.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Checking that a user is signed in, but not that they own the record.",
          "Building custom authentication instead of using proven services.",
          "API keys in front-end code or public repositories.",
          "Logging tokens, passwords or full personal records.",
          "Treating a pre-launch penetration test as the whole security programme.",
          "No incident plan until something goes wrong.",
        ],
      },
      {
        heading: "Related guides",
        body: [
          "For specific application types, see [[/blogs/customer-portal-development-australia|customer portals]], [[/blogs/booking-system-development-australia|booking systems]] and [[/blogs/marketplace-development-australia|marketplaces]]. For mobile, see [[/blogs/mobile-app-security|mobile app security]]. For generic depth, see [[/blogs/secure-business-website-development|building a secure business website]] and [[/blogs/ecommerce-payment-security|payment security]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**Application security:** [[https://top10.owasp.org/2025/0x00_2025-Introduction|OWASP Top 10:2025]]; [[https://owasp.org/www-project-application-security-verification-standard/|OWASP ASVS]]; [[https://www.rfc-editor.org/rfc/rfc9700|RFC 9700, OAuth 2.0 security best current practice]]; [[https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/|W3C, what's new in WCAG 2.2]].",
          "**Australian guidance and obligations:** [[https://www.cyber.gov.au/business-government/secure-design/secure-by-design|ASD, Secure by Design]]; [[https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/essential-eight|ASD, Essential Eight]]; [[https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-11-app-11-security-of-personal-information|OAIC, APP 11]]; [[https://www.oaic.gov.au/news/media-centre/data-breach-notifications-increase-to-all-time-high-in-2025,-new-ndb-stats-show|OAIC, NDB statistics 2025]]; [[https://www.homeaffairs.gov.au/cyber-security-subsite/files/factsheet-ransomware-payment-reporting.pdf|Home Affairs, ransomware payment reporting factsheet]].",
          "ASVS 5.0 and ASD Secure by Design details were confirmed via secondary summaries. The checklists and example are ours. This is not a security certification, a substitute for a professional assessment, or legal advice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Building a secure customer-facing web application is a set of habits, not a feature: threat model, enforce authorisation everywhere, use proven identity, handle input safely, manage dependencies and secrets, minimise data, log and monitor, test before every release and keep maintaining. Agree a standard such as an ASVS level with your developers, and plan for incidents before launch. For testing and incident readiness after launch, see [[/blogs/web-application-penetration-testing-australia|web application penetration testing]] and [[/blogs/cyber-incident-response-plan-australia|cyber incident response planning]]; for APIs specifically, [[/blogs/api-security-best-practices|API security best practices]].",
        ],
        cta: {
          title: "Building an app that holds customer data?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|secure web applications]] and [[/services/mobile-app-development|mobile apps]]. If it would help to review your security requirements before build, we are happy to talk it through.",
        },
      },
    ],
  },
];
