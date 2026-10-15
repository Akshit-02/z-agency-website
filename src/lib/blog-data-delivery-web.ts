import type { BlogPost } from "./blog-data";

/**
 * UK batch 581–630, generic delivery and web set: multi-brand website
 * architecture (605), user acceptance testing with acceptance criteria (612,
 * merging 611) and secure file uploads (616). Generic slugs in British
 * English; no jurisdiction-specific claims beyond Google's international
 * site guidance. Sources checked 2026-10-10: Google Search Central
 * (localised versions, multi-regional sites); OWASP File Upload Cheat Sheet;
 * AWS S3 presigned URL uploads.
 */
export const deliveryWebPosts: BlogPost[] = [
  {
    slug: "multi-brand-website-architecture",
    title: "Multi-Brand Website Architecture: Running Several Brands and Markets Without Duplicating Everything",
    seoTitle: "Multi-Brand Website Architecture: A Practical Guide",
    excerpt:
      "How to run several brands and countries on shared foundations: architecture options, design tokens, a shared CMS, domains and hreflang, and governance.",
    category: "Web Development",
    banner: "d2cbrandsystem",
    sceneKind: "design",
    bannerAlt: "Several brand websites for the UK and other markets built from one component library with brand themes, one content platform with brand and locale spaces, and shared hosting, analytics and consent",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development", "ui-ux-design"],
    relatedIndustrySlugs: ["d2c-consumer", "retail", "b2b-enterprise", "travel-hospitality"],
    relatedSlugs: ["design-systems-for-teams-that-move-fast", "how-to-choose-a-cms", "international-ecommerce-seo"],
    faqs: [
      {
        q: "Should each brand have its own website codebase?",
        a: "Usually not. A shared codebase or component library with brand themes cuts duplicated work, while separate content, domains and analytics properties keep brands distinct. Separate codebases make sense when brands need very different functionality or are run by independent teams.",
      },
      {
        q: "How do design tokens help with multiple brands?",
        a: "Design tokens store colours, typography, spacing and other design decisions as named values. Components use the tokens, and each brand supplies its own values, so one component library can render several brands.",
      },
      {
        q: "Should UK and international sites use separate domains or subfolders?",
        a: "Each option can work. Country-code domains give clear geographic signals but need separate authority; subfolders on one domain are simpler to run. Whatever you choose, use hreflang correctly between equivalent pages and avoid automatic redirects that stop users and crawlers reaching other versions.",
      },
      {
        q: "Can one CMS serve several brands?",
        a: "Yes. Most headless and enterprise CMS products support multiple sites, spaces or locales, with roles per brand and shared content where useful. Check editorial permissions, workflows and pricing per site.",
      },
      {
        q: "What usually goes wrong?",
        a: "Forking code per brand until shared fixes become impossible, inconsistent analytics and consent, duplicate content across markets without hreflang, and no owner for shared components.",
      },
    ],
    content: [
      {
        heading: "How should a business run several brands without duplicating everything?",
        body: [
          "**Share the foundations and separate the identity: one component library themed per brand through design tokens, one content platform with brand and locale spaces, shared hosting, deployment, consent and analytics patterns, and separate domains, content and measurement per brand. For countries, choose a URL structure (country domains or subfolders), link equivalent pages with hreflang, and localise currency, legal pages and content rather than copying.** Separate codebases are justified only when brands need genuinely different products or teams.",
          "This guide is for marketing, digital and engineering leads at groups running several brands or markets.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Theme shared components per brand; do not fork code.",
          "Use one CMS with spaces, roles and workflows per brand.",
          "Pick a market URL structure and apply hreflang consistently.",
          "Standardise consent, analytics and performance budgets.",
          "Give shared components an owner and a release process.",
        ],
      },
      {
        heading: "Architecture options",
        body: [],
        table: {
          headers: ["Option", "Fits when", "Trade-offs"],
          rows: [
            ["**Separate sites per brand**", "Brands are unrelated or independently run", "Duplicated effort; inconsistent quality and security"],
            ["**Multi-site CMS platform**", "Similar sites, editorial teams per brand", "Platform constraints; licence costs per site"],
            ["**Shared component library and themes (monorepo)**", "Similar functionality, distinct identities", "Needs design system discipline and ownership"],
            ["**Headless CMS plus shared front end**", "Several brands and markets, custom experiences", "More engineering; strong flexibility"],
          ],
        },
      },
      {
        heading: "Design system and theming",
        body: [
          "Build components once and theme them with design tokens: colour, typography, spacing, radius and imagery rules per brand. Allow brand-specific components only where needed, keep them in the same library, and test every component against every theme, including contrast for accessibility. See [[/blogs/design-systems-for-teams-that-move-fast|design systems for teams that move fast]].",
        ],
      },
      {
        heading: "Content platform",
        body: [
          "Use spaces or sites per brand with roles so editors only see their brand, share content types and genuinely shared content (such as corporate policies), and set publishing workflows per brand and market. See [[/blogs/how-to-choose-a-cms|how to choose a CMS]].",
        ],
      },
      {
        heading: "Domains, markets and hreflang",
        body: [
          "For the UK and other markets, choose between country-code domains, subdomains or subfolders, following Google's guidance on [[https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites|multi-regional sites]]. Link equivalent pages with [[https://developers.google.com/search/docs/specialty/international/localized-versions|hreflang]], including a self-reference and return links, and keep canonical tags pointing to the page itself rather than another market. Localise prices, currency, delivery, legal pages and spelling (British English for the UK). See [[/blogs/international-ecommerce-seo|international ecommerce SEO]].",
        ],
      },
      {
        heading: "Shared services and governance",
        body: [],
        checklist: [
          "One consent management approach and analytics schema across brands, separate properties per brand.",
          "Shared performance budgets and accessibility checks in CI.",
          "Central security headers, dependency updates and monitoring.",
          "A design system owner, contribution process and versioned releases.",
          "Brand guidelines mapped to tokens, not reinvented per site.",
        ],
      },
      {
        heading: "Hypothetical example: a homeware group",
        body: [
          "**This example is hypothetical.** A UK homeware group with three brands ran three separate WordPress sites with different plugins and uneven performance. It moved to one headless CMS with a space per brand, one Next.js front end with a token-themed component library, and UK and Irish subfolders with hreflang. Shared components fixed accessibility issues once for all brands.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Forking code per brand.",
          "Copying UK content to other markets without localisation or hreflang.",
          "Different consent and analytics setups per brand.",
          "No owner for shared components.",
          "Testing components only in one brand theme.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "[[https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites|Google Search Central: managing multi-regional and multilingual sites]]; [[https://developers.google.com/search/docs/specialty/international/localized-versions|Google Search Central: localised versions (hreflang)]].",
          "Accessed 10 October 2026.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Multi-brand architecture works when foundations are shared and identities are configured: themed components, a multi-space CMS, consistent consent and analytics, and correct market URLs with hreflang. Govern shared parts deliberately so brands benefit from each improvement.",
        ],
        cta: {
          title: "Running several brands on separate, drifting sites?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/website-development|website platforms]] and [[/services/ui-ux-design|design systems]]. If it would help to plan a shared architecture, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "user-acceptance-testing-business-software",
    title: "User Acceptance Testing for Business Software: Acceptance Criteria and a Practical Sign-Off Framework",
    seoTitle: "User Acceptance Testing: Acceptance Criteria and Sign-Off",
    excerpt:
      "How to write acceptance criteria that prevent scope disputes and run user acceptance testing: entry and exit criteria, defect severity and sign-off.",
    category: "Web Development",
    banner: "testlayers",
    sceneKind: "workflow",
    bannerAlt: "Requirements written as acceptance criteria, turned into UAT scenarios run by business users in a staging environment, defects triaged by severity, and a release signed off against exit criteria",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["b2b-enterprise", "professional-services", "saas-technology"],
    relatedSlugs: ["automated-regression-testing", "product-requirements-document", "custom-software-development-uk"],
    faqs: [
      {
        q: "What is user acceptance testing?",
        a: "Testing by the business users or client, in a realistic environment, to confirm the software supports their work and meets the agreed acceptance criteria before it goes live. It complements developer and QA testing rather than replacing it.",
      },
      {
        q: "What makes good acceptance criteria?",
        a: "Criteria that are specific, testable and agreed before development: the starting situation, the action and the expected result, including rules and edge cases. The Given/When/Then format is a common way to write them.",
      },
      {
        q: "How do acceptance criteria reduce scope disputes?",
        a: "They turn vague expectations into testable statements both sides agree before work starts. If something was not in the criteria, it is visibly a change request rather than a defect.",
      },
      {
        q: "Who should do UAT?",
        a: "People who will use the system or own the process, with time set aside. A product owner coordinates; the supplier's team supports with environments, data and quick fixes.",
      },
      {
        q: "When is UAT finished?",
        a: "When the exit criteria are met: planned scenarios run, no open critical or high defects (or agreed workarounds), and a named person signs off.",
      },
    ],
    content: [
      {
        heading: "How should businesses run acceptance testing?",
        body: [
          "**Write acceptance criteria for each requirement before development, in testable form; turn them into UAT scenarios that real users run in a staging environment with realistic data; triage defects by severity and separate them from change requests; and sign off against agreed exit criteria. Tie acceptance to the contract so payment milestones and warranty periods follow clear evidence.**",
          "This guide is for product owners and operations leads accepting software from internal teams or suppliers.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Agree acceptance criteria before work starts.",
          "Test with real users, realistic data and real workflows.",
          "Define entry and exit criteria for UAT.",
          "Classify defects by severity; log changes separately.",
          "Record sign-off with scope, date and named approver.",
        ],
      },
      {
        heading: "Writing acceptance criteria",
        body: [
          "Good criteria describe behaviour, not implementation, and cover rules and exceptions.",
        ],
        code: {
          label: "Example criteria (Given/When/Then)",
          text: `Requirement: Trade customers can reorder from past orders

Given a signed-in trade customer with at least one past order
When they choose "Reorder" on an order
Then the basket contains the same products and quantities
And products no longer sold are listed as unavailable, not added
And current contract prices apply, not the original prices`,
        },
        checklist: [
          "One behaviour per criterion; avoid vague words like fast or user-friendly without a measure.",
          "Include permissions, validation and error cases.",
          "Include non-functional criteria where they matter (performance, accessibility).",
          "Review criteria with the people who will test.",
        ],
      },
      {
        heading: "Planning UAT",
        body: [],
        table: {
          headers: ["Element", "What to define"],
          rows: [
            ["**Scope**", "Features and workflows in this release; what is out"],
            ["**Entry criteria**", "QA complete, environment stable, test data ready, known issues listed"],
            ["**Scenarios**", "End-to-end business tasks built from the acceptance criteria"],
            ["**Testers and time**", "Named users with time blocked in calendars"],
            ["**Environment and data**", "Production-like staging, anonymised or synthetic data"],
            ["**Exit criteria**", "Scenarios passed; no open critical or high defects; workarounds agreed"],
            ["**Sign-off**", "Who approves, in what form, and what it triggers"],
          ],
        },
      },
      {
        heading: "Defects versus change requests",
        body: [],
        table: {
          headers: ["Severity", "Meaning", "Release impact"],
          rows: [
            ["**Critical**", "Blocks a core task or risks data loss or security", "Must fix before go-live"],
            ["**High**", "Major function wrong, no reasonable workaround", "Fix before go-live or agree a dated workaround"],
            ["**Medium**", "Function wrong with a workaround", "Can go live with a fix plan"],
            ["**Low**", "Cosmetic or minor", "Backlog"],
            ["**Change request**", "Works as agreed, but the business wants something different", "Estimate and prioritise separately"],
          ],
        },
      },
      {
        heading: "Linking acceptance to the contract",
        body: [
          "Contracts should define acceptance criteria per release, a testing window, how defects are classified, and what sign-off triggers (payment, warranty start, go-live). Deemed acceptance after a period without feedback protects suppliers; clear exit criteria protect buyers. See [[/blogs/custom-software-development-uk|custom software development in the UK]] for other contract points.",
        ],
      },
      {
        heading: "Hypothetical example: a wholesaler's trade portal",
        body: [
          "**This example is hypothetical.** A wholesaler accepting a new trade portal wrote acceptance criteria with its sales and customer service teams during discovery. UAT ran for two weeks with six internal users and three friendly customers on staging with anonymised data. Of 41 issues logged, 9 were reclassified as change requests. Sign-off recorded two medium defects with fix dates, and go-live triggered the warranty period.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Writing criteria after development.",
          "UAT by the development team instead of users.",
          "Unrealistic or empty test data.",
          "Treating every request as a defect.",
          "Sign-off by email with no record of scope.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Acceptance criteria and a disciplined UAT turn go-live decisions into evidence rather than opinion, and keep scope discussions fair. Agree criteria early, test with real users, separate defects from changes and record sign-off. For automated checks between releases, see [[/blogs/automated-regression-testing|automated regression testing]]. For handling genuine changes once the build is under way, see [[/blogs/scope-creep-software-projects|how to control scope creep during delivery]].",
        ],
        cta: {
          title: "Preparing to accept a new system?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/website-development|business applications]] and [[/services/mobile-app-development|mobile apps]], with acceptance criteria agreed up front. If it would help to plan acceptance for your project, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "secure-file-uploads",
    title: "Secure File Uploads in Business Applications: Validation, Storage and Access Controls",
    seoTitle: "Secure File Uploads: Validation, Storage and Access",
    excerpt:
      "How to secure file uploads in business applications: allowlists, content checks, malware scanning, private storage, presigned URLs, safe serving, retention.",
    category: "Web Development",
    banner: "sectestflow",
    sceneKind: "security",
    bannerAlt: "A user uploads a file directly to private object storage with a short-lived presigned URL, the file is validated and scanned in quarantine, then served only to authorised users from a separate domain",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise", "healthcare-healthtech", "fintech"],
    relatedSlugs: ["api-security-best-practices", "web-application-threat-modeling", "saas-audit-logging"],
    faqs: [
      {
        q: "What are the main risks of file uploads?",
        a: "Malicious files executed on the server or in users' browsers, malware passed to other users, oversized files or archive bombs exhausting resources, files overwriting others, and users accessing files they should not see.",
      },
      {
        q: "Is checking the file extension enough?",
        a: "No. Use an allowlist of extensions and also check the file's actual content type (its signature), size and structure. Extensions and Content-Type headers are easy to fake.",
      },
      {
        q: "Where should uploaded files be stored?",
        a: "Outside the web root, usually in private object storage, under generated names, with access only through your application's authorisation checks or short-lived signed URLs.",
      },
      {
        q: "Should we scan uploads for malware?",
        a: "Yes, where files are shared with other users or staff. Hold files in quarantine until scanning and validation complete.",
      },
      {
        q: "How should files be served back?",
        a: "With authorisation checks, from a separate domain where possible, with Content-Disposition attachment for downloads, correct content types, and nosniff headers to stop browsers executing content.",
      },
    ],
    content: [
      {
        heading: "How do you secure file uploads?",
        body: [
          "**Allow only the file types you need, validate size, extension and actual content, rename files, store them privately outside the web root (usually object storage), upload directly with short-lived presigned URLs, quarantine and scan before use, re-encode images where practical, and serve files only after authorisation from a separate domain with safe headers. Apply retention and deletion rules, because uploads often contain personal data.** The [[https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html|OWASP File Upload Cheat Sheet]] is the standard reference.",
          "This guide is for engineering teams building portals, onboarding, claims, HR and document features.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Allowlist types; verify content, not just extensions.",
          "Store privately with generated names.",
          "Quarantine and scan before files are used.",
          "Authorise every download.",
          "Serve with safe headers, ideally from a separate domain.",
          "Set retention and deletion.",
        ],
      },
      {
        heading: "Threats and controls",
        body: [],
        table: {
          headers: ["Threat", "Control"],
          rows: [
            ["**Executable or script upload**", "Extension allowlist, content signature checks, never store in an executable path"],
            ["**Stored XSS via HTML or SVG**", "Block or sanitise SVG and HTML; serve as attachment from a separate domain with nosniff"],
            ["**Malware shared with others**", "Quarantine and scan before release"],
            ["**Denial of service**", "Size limits, archive bomb checks, rate limits"],
            ["**Path traversal and overwrites**", "Generated file names and keys; ignore user-supplied paths"],
            ["**Unauthorised access**", "Private storage, per-object authorisation, short-lived signed URLs"],
            ["**Metadata leaks**", "Strip EXIF and document metadata where appropriate"],
          ],
        },
      },
      {
        heading: "Recommended upload flow",
        body: [],
        checklist: [
          "Client requests an upload; the server checks permissions and issues a short-lived [[https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html|presigned URL]] for a quarantine location with size and type constraints.",
          "Client uploads directly to storage.",
          "A storage event triggers validation (type, size, structure) and malware scanning.",
          "Clean files move to the permanent private location; failures are deleted and the user told.",
          "The application records metadata: owner, record, type, size, checksum, scan result.",
          "Downloads go through an authorisation check, then a short-lived signed URL or proxied stream.",
        ],
      },
      {
        heading: "Hypothetical example: an insurance claims portal",
        body: [
          "**This example is hypothetical.** A claims portal let customers upload photos and PDFs to a public folder with original file names. The team moved uploads to private storage via presigned URLs, added type allowlists and content checks, scanned files in quarantine, stripped image metadata, and served files to handlers only through authorised, expiring links from a separate domain. Retention rules now delete files when claims close plus the agreed period.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Trusting the extension or Content-Type header.",
          "Public buckets or predictable URLs.",
          "Serving user files from the main application domain inline.",
          "No size limits or scanning.",
          "Keeping uploads forever.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "[[https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html|OWASP File Upload Cheat Sheet]]; [[https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html|AWS S3: uploading objects with presigned URLs]].",
          "Accessed 10 October 2026.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Secure uploads come from layers: allowlists and content checks, private storage and presigned uploads, quarantine and scanning, authorised and safely served downloads, and retention. See [[/blogs/api-security-best-practices|API security best practices]] and [[/blogs/web-application-threat-modeling|threat modelling for web applications]].",
        ],
        cta: {
          title: "Adding document or photo uploads to your application?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/website-development|secure web applications]]. If it would help to review your upload design, we are happy to talk it through.",
        },
      },
    ],
  },
];
