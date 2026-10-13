import type { BlogPost } from "./blog-data";

/**
 * Australian quality: digital accessibility testing. Scoped to the testing
 * method (test plans, automated and manual checks, assistive technology
 * matrix, reporting and conformance claims) and Australian procurement
 * context (AS EN 301 549). The broader guidance page,
 * website-accessibility-australia, keeps the legal background and design
 * guidance and is cross-linked; the two are monitored for cannibalisation.
 * Distinguishes WCAG (a W3C standard), the Disability Discrimination Act
 * (law), AHRC guidelines (non-binding), government standards (Digital
 * Service Standard for Commonwealth services) and contractual requirements.
 * Sources checked 2026-10-09: W3C WCAG 2.2 and WCAG-EM; Australian Human
 * Rights Commission guidelines on equal access to digital goods and services
 * (via batch 101–120 research); Standards Australia AS EN 301 549 (via
 * search summaries and Queensland and NSW procurement guidance); DTA Digital
 * Service Standard. No figure here is ZSpace client data.
 */
export const auQualityPosts: BlogPost[] = [
  {
    slug: "accessibility-testing-australia",
    title: "Digital Accessibility Testing in Australia: Methods, Tools and Reporting",
    seoTitle: "Digital Accessibility Testing in Australia: A Method",
    excerpt:
      "How to test websites and apps for accessibility in Australia: WCAG 2.2 scope, automated and manual checks, screen readers, reporting and procurement.",
    category: "UI/UX",
    banner: "a11ychecklist",
    sceneKind: "a11y",
    bannerAlt: "An accessibility test plan covering automated scans, keyboard and focus checks, screen reader testing on several platforms, contrast and forms, ending in a prioritised report",
    date: "2026-10-09",
    readingTime: "8 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["nonprofits-civic", "education-edtech", "healthcare-healthtech", "fintech", "retail"],
    relatedSlugs: ["website-accessibility-australia", "accessible-ui-ux-design", "ecommerce-accessibility-checklist"],
    faqs: [
      {
        q: "Can an automated tool tell us if our site is accessible?",
        a: "No. Automated tools reliably find some issues, such as missing labels, low contrast and invalid markup, but cannot judge many others, such as whether alternative text is meaningful, focus order makes sense, or a screen reader user can complete a task. A credible accessibility test combines automated scanning with manual keyboard, visual and assistive technology testing, ideally including people with disability.",
      },
      {
        q: "Which standard should we test against?",
        a: "Most organisations test against WCAG 2.2 Level AA, the current W3C recommendation. Check your context: Australian Government services follow the Digital Service Standard, some procurement uses AS EN 301 549, and contracts may specify a version. WCAG is a technical standard; the Disability Discrimination Act is the law, and meeting WCAG is strong evidence of good practice rather than a legal safe harbour.",
      },
      {
        q: "Which screen readers should we test with?",
        a: "Test with the combinations your users are likely to use: commonly NVDA or JAWS with a Windows browser, VoiceOver on macOS and iOS, and TalkBack on Android. You do not need every combination for every page, but test key journeys on at least one desktop and one mobile screen reader, and include mobile if many users are on phones.",
      },
      {
        q: "What is AS EN 301 549?",
        a: "AS EN 301 549 is the Australian adoption of a European standard for accessibility requirements for ICT products and services, used in public sector procurement. Standards Australia adopted it in 2016, and the 2020 edition references WCAG 2.1. State procurement guidance in Queensland and New South Wales refers to it. If you sell to government, check which edition and requirements apply to your tender.",
      },
      {
        q: "How often should we test accessibility?",
        a: "Continuously in small ways and periodically in depth. Add automated checks and component tests to your development pipeline, include accessibility in design and code review, test key journeys manually before major releases, and run a fuller audit periodically or after significant redesigns. Content changes, such as new PDFs or videos, need checks too.",
      },
      {
        q: "What should an accessibility test report include?",
        a: "The scope (pages, journeys, platforms), the standard and level tested, the methods and tools, each issue with location, WCAG success criterion, impact on users, severity, steps to reproduce and a recommended fix, plus a summary of overall status. Avoid declaring full conformance unless the whole scope genuinely meets every criterion.",
      },
    ],
    content: [
      {
        heading: "How should you test digital accessibility?",
        body: [
          "**Define the scope and standard (usually WCAG 2.2 Level AA), run automated scans to catch common issues, then test manually: keyboard access, focus, structure, contrast, forms and errors, and key journeys with screen readers on desktop and mobile. Ideally include people with disability. Report each issue with its impact and fix, remediate by priority, and retest.** No single automated test proves a site or app is accessible.",
          "This guide is for product owners, designers, developers and testers in Australia planning or commissioning accessibility testing. It focuses on method: scoping, the testing mix, assistive technology, reporting, remediation and procurement requirements. For legal background and design guidance, see our broader guide to [[/blogs/website-accessibility-australia|website accessibility in Australia]].",
          "Nothing here is legal advice. WCAG is a technical standard; obligations come from the Disability Discrimination Act, government policies and your contracts.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Separate the standard (WCAG), the law (DDA), guidance (AHRC), government standards and contractual requirements.",
          "Scope by user journeys and templates, not by page count alone.",
          "Automated tools find some issues; manual and assistive technology testing find the rest.",
          "Test with keyboard only, screen readers on desktop and mobile, zoom and reflow.",
          "Include people with disability where you can.",
          "Report with severity, impact and fixes; avoid unsupported conformance claims.",
          "Build accessibility checks into design, development and release, not just audits.",
        ],
      },
      {
        heading: "Standards, law and requirements: keep them separate",
        body: [],
        table: {
          headers: ["Source", "What it is", "What it means for testing"],
          rows: [
            ["**WCAG 2.2**", "W3C technical standard with A, AA and AAA success criteria", "The usual test basis, normally Level AA ([[https://www.w3.org/TR/WCAG22/|W3C]])"],
            ["**Disability Discrimination Act 1992**", "Australian law prohibiting disability discrimination", "The legal context; WCAG conformance is evidence of good practice, not a guarantee"],
            ["**AHRC guidelines**", "Commission guidelines on equal access to digital goods and services (2025), not legally binding", "Point organisations to WCAG; useful for policy"],
            ["**Digital Service Standard**", "Policy for Australian Government digital services", "Applies to Commonwealth agencies' services"],
            ["**AS EN 301 549**", "Australian adoption of the European ICT accessibility standard", "Used in public sector procurement; check the edition required"],
            ["**Contracts**", "Your client's or customer's requirements", "May specify a WCAG version, level or reporting format"],
          ],
        },
      },
      {
        heading: "Step 1: Scope the test",
        body: [
          "Accessibility testing scales with scope, so define it deliberately. W3C's Website Accessibility Conformance Evaluation Methodology (WCAG-EM) describes defining scope, exploring the site, selecting a representative sample and auditing it ([[https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/|W3C WCAG-EM]]).",
        ],
        checklist: [
          "Key user journeys: sign-up, sign-in, search, checkout, booking, forms, account management.",
          "Each page template and major component: navigation, menus, dialogs, carousels, tables.",
          "Platforms: desktop and mobile browsers, native apps if any.",
          "Content types: PDFs, videos, images, charts.",
          "Third-party components: chat widgets, payment fields, embedded maps (you are still responsible for the experience).",
          "Standard and level: usually WCAG 2.2 AA, or what your contract requires.",
        ],
      },
      {
        heading: "Step 2: Automated testing",
        body: [
          "Automated tools scan pages and components for rule violations: missing form labels, low colour contrast, missing alternative text attributes, invalid ARIA, duplicate IDs and empty links. Run them in development (linters and component tests), in CI, and across the live site.",
          "Treat results as a starting point. Automated tools cannot tell whether alternative text describes the image, whether focus order is logical, whether error messages are understandable, or whether a custom component works with a screen reader. Never present an automated score as proof of accessibility.",
        ],
      },
      {
        heading: "Step 3: Manual testing",
        body: [],
        table: {
          headers: ["Area", "What to check"],
          rows: [
            ["**Keyboard access**", "Every interactive element reachable and usable with Tab, Shift+Tab, Enter, Space and arrow keys; no keyboard traps"],
            ["**Focus**", "Visible focus indicator; logical order; focus moves into and out of dialogs correctly; not hidden behind sticky headers (WCAG 2.2)"],
            ["**Semantic structure**", "One H1, logical headings, landmarks, lists and tables marked up properly; correct page titles and language"],
            ["**Colour and contrast**", "Text and interface contrast; information not conveyed by colour alone"],
            ["**Forms and errors**", "Labels, instructions, error identification and suggestions; no redundant entry; accessible authentication (WCAG 2.2)"],
            ["**Zoom and reflow**", "Usable at 200% zoom and at narrow widths without horizontal scrolling"],
            ["**Target size**", "Touch targets meet the WCAG 2.2 minimum or have enough spacing"],
            ["**Media**", "Captions, transcripts and audio description where needed; no autoplay without controls"],
            ["**Motion and timing**", "No unexpected time limits; motion can be paused or reduced"],
          ],
        },
      },
      {
        heading: "Step 4: Screen reader and assistive technology testing",
        body: [
          "Test key journeys with screen readers, listening for whether each element announces its name, role and state, whether headings and landmarks allow navigation, and whether dynamic changes (errors, loading, notifications) are announced.",
        ],
        table: {
          headers: ["Platform", "Common screen reader and browser"],
          rows: [
            ["Windows", "NVDA with Firefox or Chrome; JAWS with Chrome or Edge"],
            ["macOS", "VoiceOver with Safari"],
            ["iOS", "VoiceOver with Safari or the native app"],
            ["Android", "TalkBack with Chrome or the native app"],
          ],
        },
        callout: {
          type: "tip",
          text: "Our recommendation: choose a small matrix that reflects your users, for example NVDA with Chrome, VoiceOver on iOS and TalkBack on Android, and test every key journey on each. Also try voice control and screen magnification on the most important journeys.",
        },
      },
      {
        heading: "Step 5: Testing with people with disability",
        body: [
          "Expert testing finds conformance issues; people with disability find whether the product actually works for them. Include participants who use different assistive technologies and approaches in usability testing of key journeys, pay them fairly, and give them time to use their own setups. See [[/blogs/usability-testing|usability testing]] for running sessions.",
        ],
      },
      {
        heading: "Step 6: Reporting and conformance claims",
        body: [],
        checklist: [
          "Scope, standard, level, dates, tools and assistive technologies used.",
          "Each issue: location, WCAG success criterion, who is affected and how, severity, steps to reproduce, recommended fix.",
          "Group issues by component or template, so one fix resolves many instances.",
          "A summary of status by journey, not just a list.",
          "Claims that match evidence: partial conformance is a legitimate, honest outcome.",
          "For procurement, an accessibility conformance report in the format the buyer requests.",
        ],
      },
      {
        heading: "Step 7: Remediation and retesting",
        body: [
          "Prioritise issues that block tasks for some users on key journeys, then high-impact issues in shared components (fixing a component fixes every page that uses it), then the rest. Fix in design system components and templates where possible. Retest each fix with the method that found it, including the screen reader. Track progress by journey. See [[/blogs/accessible-ui-ux-design|accessible UI/UX design]] and [[/blogs/design-systems-for-teams-that-move-fast|design systems]] for preventing regressions.",
        ],
      },
      {
        heading: "Building accessibility into delivery",
        body: [],
        checklist: [
          "Accessibility acceptance criteria in user stories.",
          "Design reviews checking contrast, focus, target size and content structure.",
          "Linting and automated tests in CI on components and pages.",
          "Keyboard and screen reader checks in code review for interactive components.",
          "Content guidance for authors: headings, link text, alt text, accessible documents, captions.",
          "Periodic manual audits of key journeys and after major redesigns.",
        ],
      },
      {
        heading: "Australian procurement and government work",
        body: [
          "If you sell digital products or services to government, accessibility requirements are often written into procurement. Standards Australia adopted AS EN 301 549 in 2016, and the 2020 edition references WCAG 2.1; Queensland and New South Wales procurement guidance refers to it ([[https://www.forgov.qld.gov.au/service-design-and-delivery/design-public-services/digital-accessibility/buy-accessible-ict-products-and-services|Queensland Government]]; [[https://www.info.buy.nsw.gov.au/resources/government-accessibility-standards-for-ict|buy.nsw]]). Australian Government agencies' services follow the Digital Service Standard. Read each tender for the exact standard, edition, level and reporting format required.",
        ],
      },
      {
        heading: "Hypothetical example: a member portal before launch",
        body: [
          "**This example is hypothetical.** A professional association is launching a member portal with sign-in, renewals, event booking and CPD records. The test scope covers those four journeys on desktop and mobile, plus the shared components. Automated scans run in CI. Manual testing finds a custom date picker that traps keyboard focus, error messages not announced to screen readers and certificates issued as untagged PDFs. Three members who use screen readers or magnification test renewals and booking. Fixes go into the shared components, PDFs are replaced with accessible HTML certificates, and the report describes partial conformance with a dated remediation plan rather than claiming full conformance.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Relying on an automated score.",
          "Testing pages but not journeys.",
          "Ignoring mobile and native apps.",
          "Overlay widgets presented as a fix for underlying code issues.",
          "Claiming full conformance without evidence.",
          "Auditing once and never again.",
        ],
      },
      {
        heading: "Related guides",
        body: [
          "For the legal and design context, see [[/blogs/website-accessibility-australia|website accessibility in Australia]] and [[/blogs/website-accessibility-guide|website accessibility guide]]. For stores, see [[/blogs/ecommerce-accessibility-checklist|ecommerce accessibility checklist]]. For AI-assisted checks, see [[/blogs/ai-software-testing|AI software testing]], which explains why they triage rather than certify.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**Standards:** [[https://www.w3.org/TR/WCAG22/|W3C, WCAG 2.2]]; [[https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/|W3C, what's new in WCAG 2.2]]; [[https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/|W3C, WCAG-EM]].",
          "**Australia:** [[https://humanrights.gov.au/our-work/disability-rights/publications/guidelines-equal-access-digital-goods-and-services|Australian Human Rights Commission, guidelines on equal access to digital goods and services]]; [[https://www.forgov.qld.gov.au/service-design-and-delivery/design-public-services/digital-accessibility/buy-accessible-ict-products-and-services|Queensland Government, buy accessible ICT]]; [[https://www.info.buy.nsw.gov.au/resources/government-accessibility-standards-for-ict|buy.nsw, government accessibility standards for ICT]].",
          "AS EN 301 549 and AHRC points are summarised from official guidance and procurement guidance. Tables, checklists and example are ours. Nothing here is legal advice or ZSpace client data.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Accessibility testing is credible when it combines automated scans, manual checks and assistive technology testing on real journeys, reports honestly and leads to fixes in shared components. Keep WCAG, the law, guidance and contract requirements distinct, test regularly as part of delivery, and never let one automated score stand in for evidence.",
        ],
        cta: {
          title: "Need an accessibility test plan?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/ui-ux-design|accessible design]], [[/services/website-development|accessible web development]] and [[/services/mobile-app-development|accessible apps]]. If it would help to scope testing or remediation, we are happy to talk it through.",
        },
      },
    ],
  },
];
