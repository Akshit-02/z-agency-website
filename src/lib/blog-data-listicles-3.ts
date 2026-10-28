import type { BlogPost } from "./blog-data";

/**
 * Listicle batch 2 (2026-10-28): five topics out of 20 candidates (21–40) that
 * had no existing article with the same primary intent. The other fifteen were
 * covered by existing articles (security checklist, push notifications,
 * offline-first, subscriptions, filters, returns, forms, handoff, document
 * processing, lead qualification, guardrails, pricing pages, trust signals,
 * mobile testing) or folded into an update (website-migration-guide).
 * No external links (owner rule); sources named in plain text.
 * Sources checked 2026-10-28:
 * - Microsoft Azure Architecture Center, architecture styles (N-tier,
 *   Web-Queue-Worker, microservices, event-driven, big data, big compute) and
 *   their trade-offs. Martin Fowler, MonolithFirst (2015) and StranglerFig.
 * - axe-core README: MPL-2.0; WCAG 2.0/2.1/2.2 A, AA, AAA rules; "zero false
 *   positives" aim. Its "57% of issues" figure is a vendor claim and not used.
 * - Accessibility Insights for Web (Microsoft): FastPass (automated checks plus
 *   tab stops) and Assessment against WCAG 2.1 AA, Chrome and Edge.
 * - Pa11y: free, open-source CLI, Pa11y CI and Dashboard.
 * - W3C: WCAG 2.2 became a Recommendation on 5 October 2023.
 * - Carbon Design System, empty states pattern (no data, user action, error
 *   management; positive titles; action options). NN/g, Kate Kaplan, Designing
 *   Empty States in Complex Applications: 3 Guidelines (2021).
 * - Lewis et al., Retrieval-Augmented Generation for Knowledge-Intensive NLP
 *   Tasks (NeurIPS 2020). OWASP Top 10 for LLM Applications 2025 (LLM08 Vector
 *   and Embedding Weaknesses).
 * - Stripe webhooks docs: Stripe-Signature HMAC-SHA256, raw body, quick 2xx,
 *   retries up to three days in live mode, no ordering guarantee, duplicates by
 *   event ID, 5-minute default timestamp tolerance. Shopify webhooks docs:
 *   X-Shopify-Hmac-Sha256, X-Shopify-Webhook-Id for duplicates, no ordering
 *   guarantee within a topic, delivery not guaranteed so reconcile. GitHub: no
 *   automatic redelivery of failed deliveries. Razorpay: X-Razorpay-Signature
 *   HMAC-SHA256 on the raw body; x-razorpay-event-id for duplicates; may arrive
 *   out of order.
 */
export const listiclePosts3: BlogPost[] = [
  // ------------------------------------------ WEB APP ARCHITECTURE PATTERNS
  {
    slug: "web-application-architecture-patterns",
    title: "10 Web Application Architecture Patterns and When to Use Them",
    seoTitle: "10 Web Application Architecture Patterns and When to Use Them",
    excerpt:
      "Monolith, modular monolith, microservices, serverless, event-driven, web-queue-worker, BFF, static-first and more: when each pattern fits and what it costs.",
    category: "Web Development",
    banner: "archstack",
    sceneKind: "code",
    bannerAlt: "Ten web application architecture patterns arranged from a single deployable monolith to distributed microservices and event-driven systems",
    date: "2026-10-28",
    readingTime: "11 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise", "startups"],
    relatedSlugs: ["modular-monolith-vs-microservices", "integration-architecture-patterns", "scalable-website-architecture"],
    faqs: [
      {
        q: "What is the best architecture for a web application?",
        a: "There is no single best one. For most new business applications, a well-structured monolith or modular monolith with a background job queue is the simplest thing that works. Other patterns earn their place when a specific problem, such as independent team releases, spiky workloads or real-time event processing, justifies their extra cost.",
      },
      {
        q: "Should a startup use microservices?",
        a: "Rarely at the start. Microservices add network calls, distributed data and deployment overhead that a small team pays for every day. Martin Fowler's \"monolith first\" advice is to start with a monolith and split it once you understand where the real boundaries are.",
      },
      {
        q: "Can you combine architecture patterns?",
        a: "Yes, and most real systems do. A typical business application might be a modular monolith with a queue and workers, a static marketing site in front, and events published to other systems.",
      },
    ],
    content: [
      {
        heading: "Which architecture pattern should a web application use?",
        body: [
          "**Start with the simplest pattern that handles your known requirements: usually a monolith or modular monolith, with a queue and background workers for slow jobs. Move to serverless functions for spiky or occasional workloads, to event-driven designs when several systems must react to the same business events, and to microservices only when separate teams need to release independently and you can afford the operational overhead.** Patterns can be combined, and the right answer changes as the product and team grow.",
          "This guide is for founders, product owners and technical leads making or reviewing architecture decisions. Microsoft's Azure Architecture Center makes the useful point that every style places constraints on a design and has trade-offs, and that the choice should follow from the problem and its priorities, such as time to market or budget. We have tried to show those trade-offs rather than rank the patterns. For the frontend layer, see [[/blogs/frontend-frameworks-for-web-applications|frontend frameworks for web applications]].",
        ],
      },
      {
        heading: "1. Monolith",
        body: [
          "One codebase and one deployable application containing the user interface, business logic and data access, usually with one database. It is the default for good reasons: one thing to build, test, deploy and monitor, and transactions that just work.",
          "**Use it when:** you are building a first version, the team is small, or the domain is not yet well understood. **Limits:** without discipline it becomes tangled, and every change redeploys everything. Scaling is all or nothing, although that rarely matters as early as people fear.",
        ],
      },
      {
        heading: "2. Modular monolith",
        body: [
          "Still one deployable application, but divided internally into modules with clear boundaries, such as billing, catalogue and accounts, which talk to each other through defined interfaces and own their own data.",
          "**Use it when:** the application is growing and you want the structure that makes a later split possible without paying for distribution now. **Limits:** boundaries need enforcing, through code review or tooling, or they erode. See [[/blogs/modular-monolith-vs-microservices|modular monolith vs microservices]].",
        ],
      },
      {
        heading: "3. N-tier (layered)",
        body: [
          "The application is split into layers, typically presentation, business logic and data, each calling only the layer below, and often deployed on separate servers. It is the traditional enterprise structure.",
          "**Use it when:** you are modernising or moving an existing layered application, or working in an environment built around it. **Limits:** Microsoft notes that horizontal layering can make changes ripple across several layers, which slows frequent updates.",
        ],
      },
      {
        heading: "4. Web-queue-worker",
        body: [
          "A web front end handles requests and puts slow or heavy work, such as generating reports, sending emails, resizing images or calling slow APIs, onto a message queue. Separate worker processes take jobs from the queue. Microsoft's guide describes it as ideal for relatively simple domains with some resource-intensive processing.",
          "**Use it when:** users should not wait for slow tasks, or you need retries for work that can fail. Most monoliths benefit from adding this early. **Limits:** you need to handle failed jobs, duplicates and monitoring of the queue. See [[/blogs/ecommerce-queue-architecture|queue architecture for reliable processing]].",
        ],
      },
      {
        heading: "5. Microservices",
        body: [
          "The application is split into small services, each owning one business capability and its own data, deployed and scaled independently and talking over APIs or messages. Microsoft notes the benefit, team autonomy and faster releases in complex domains, and the cost: service discovery, data consistency and distributed operations, which need mature development and DevOps practice.",
          "**Use it when:** several teams need to release independently, parts of the system have very different scaling or reliability needs, and you have the platform skills to run it. **Limits:** harder debugging, network latency between services and no simple cross-service transactions. Many teams adopt it too early.",
        ],
      },
      {
        heading: "6. Serverless functions",
        body: [
          "Code runs as functions triggered by HTTP requests, schedules or events, on a platform that provisions and scales the servers for you and usually bills per execution.",
          "**Use it when:** workloads are spiky or occasional, such as webhooks, scheduled jobs, file processing or a low-traffic API, and you want minimal operations. **Limits:** cold starts, execution time limits, harder local testing and costs that can exceed a server at steady high volume. See [[/blogs/kubernetes-vs-serverless-vs-virtual-machines|Kubernetes vs serverless vs virtual machines]].",
        ],
      },
      {
        heading: "7. Event-driven architecture",
        body: [
          "Components publish events (\"order placed\", \"invoice paid\") to a broker, and any number of consumers react independently. Producers do not need to know who is listening. Microsoft lists its strengths as scalability and fault isolation, and its challenges as guaranteed delivery, ordering and eventual consistency.",
          "**Use it when:** several systems must react to the same business events, such as fulfilment, analytics and email after an order, or you are integrating many systems without point-to-point tangles. **Limits:** it is harder to see the whole flow, and consumers must cope with duplicates and out-of-order events. See [[/blogs/ecommerce-event-driven-architecture|event-driven architecture]] and [[/blogs/integration-architecture-patterns|integration architecture patterns]].",
        ],
      },
      {
        heading: "8. Backend for frontend (BFF)",
        body: [
          "A thin server layer built for one client, such as the web app or the mobile app, which gathers data from backend services and shapes it for that client's screens.",
          "**Use it when:** web and mobile apps need different data shapes, or a frontend would otherwise make many calls to several services. **Limits:** another layer to maintain, and logic can be duplicated between BFFs if business rules leak into them.",
        ],
      },
      {
        heading: "9. Static-first (Jamstack-style) with APIs",
        body: [
          "Pages are pre-built as static files at build time and served from a CDN, with dynamic features handled by APIs and serverless functions. Modern frameworks blend this with server rendering per page.",
          "**Use it when:** most content changes infrequently, such as marketing sites, documentation and blogs, and you want fast pages and simple hosting. **Limits:** frequently changing or personalised pages need server rendering or client-side data. See [[/blogs/static-site-generation-vs-server-side-rendering|static generation vs server rendering]].",
        ],
      },
      {
        heading: "10. Strangler fig (for replacing legacy systems)",
        body: [
          "Rather than rewriting a legacy application in one go, you route traffic for one feature at a time to new code while the old system handles the rest, until the old system can be retired. Martin Fowler named it after the strangler fig, which grows around a host tree.",
          "**Use it when:** replacing a business-critical system that cannot be frozen for a big-bang rewrite. **Limits:** running two systems in parallel costs more for a while, and data must stay in sync between them. See [[/blogs/legacy-ecommerce-migration|legacy migration]].",
        ],
        cta: {
          title: "Reviewing an architecture decision?",
          description: "ZSpace Labs designs and builds web applications in Next.js, React and TypeScript, and can review whether your planned architecture fits your team and product. See our [[/services/website-development|web application development service]].",
        },
      },
      {
        heading: "Comparison table",
        body: [],
        table: {
          headers: ["Pattern", "Best fit", "Main benefit", "Main cost"],
          rows: [
            ["Monolith", "First versions, small teams", "Simplicity", "Can tangle as it grows"],
            ["Modular monolith", "Growing products", "Structure without distribution", "Boundaries need enforcing"],
            ["N-tier", "Existing layered apps", "Familiar separation of concerns", "Changes ripple across layers"],
            ["Web-queue-worker", "Apps with slow or heavy tasks", "Responsive UI, retries", "Queue operations"],
            ["Microservices", "Several teams, complex domain", "Independent releases and scaling", "Distributed complexity"],
            ["Serverless functions", "Spiky or occasional workloads", "No servers to manage", "Cold starts, limits, cost at scale"],
            ["Event-driven", "Many systems reacting to events", "Loose coupling", "Ordering, duplicates, visibility"],
            ["Backend for frontend", "Separate web and mobile clients", "Client-shaped APIs", "Extra layer"],
            ["Static-first with APIs", "Content-heavy sites", "Speed, simple hosting", "Dynamic pages need more work"],
            ["Strangler fig", "Replacing legacy systems", "Low-risk, gradual migration", "Two systems for a while"],
          ],
        },
      },
      {
        heading: "How to choose",
        body: [],
        checklist: [
          "Write down the two or three qualities that matter most (time to market, cost, reliability, scale) before discussing patterns.",
          "Count the teams. One team rarely needs independently deployable services.",
          "Find the slow or failure-prone work and put it behind a queue, whatever else you choose.",
          "List the systems that must react to your business events; several suggests events, one or two suggests direct calls.",
          "Check your operations capacity: who will run the monitoring, deployments and incident response the pattern needs?",
          "Revisit the decision as the product grows; an architecture review every year or two is cheaper than a forced rewrite. See [[/blogs/software-architecture-review|software architecture reviews]].",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Most business web applications are best served by a modular monolith with a queue and workers, a static-first public site, and events where other systems need to react. Microservices, serverless and BFFs solve real problems, but each adds cost that should be justified by a specific need. If you are deciding what to build in the first place, start with [[/blogs/types-of-web-applications|the types of web application businesses build]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Microsoft Azure Architecture Center, architecture styles (N-tier, Web-Queue-Worker, microservices, event-driven), updated September 2025. Martin Fowler, MonolithFirst (2015) and StranglerFigApplication. Accessed 28 October 2026.",
        ],
      },
    ],
  },

  // ----------------------------------------- ACCESSIBILITY TESTING TOOLS
  {
    slug: "accessibility-testing-tools",
    title: "12 Website Accessibility Testing Tools for Developers and Designers",
    seoTitle: "12 Accessibility Testing Tools for Developers and Designers",
    excerpt:
      "Scanners, browser extensions, CI tools, contrast checkers and screen readers for accessibility testing: what each catches and what still needs a person.",
    category: "UI/UX",
    banner: "a11ycheck",
    sceneKind: "a11y",
    bannerAlt: "Accessibility testing tools grouped into automated scanners, guided checks, contrast tools, screen readers and mobile tools",
    date: "2026-10-28",
    readingTime: "10 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development"],
    relatedIndustrySlugs: ["education-edtech", "healthcare-healthtech", "b2b-enterprise"],
    relatedSlugs: ["website-accessibility-guide", "accessibility-testing-australia", "accessible-ui-ux-design"],
    faqs: [
      {
        q: "Can automated tools check WCAG compliance?",
        a: "Only partly. Automated tools reliably find issues such as missing alternative text, missing form labels and low contrast, but many WCAG criteria need human judgement, for example whether alt text is meaningful or whether focus order makes sense. A clean automated report does not mean a site is accessible.",
      },
      {
        q: "Which screen reader should I test with?",
        a: "At least one on desktop and one on mobile. Common combinations are NVDA with Firefox or Chrome on Windows, VoiceOver with Safari on macOS and iOS, and TalkBack with Chrome on Android. Testing with a single screen reader misses problems that only appear in others.",
      },
      {
        q: "Are free accessibility tools good enough?",
        a: "For most teams, yes, as a starting point. Many of the tools here are free or open source. Paid tools add features such as monitoring across many pages, reporting and guided manual testing, which matter more for large sites and formal audits.",
      },
    ],
    content: [
      {
        heading: "Which tools should you use to test accessibility?",
        body: [
          "**Use an automated scanner during development (axe DevTools, WAVE or Lighthouse), a guided checker for structured reviews (Accessibility Insights for Web), automated checks in your CI pipeline (axe-core with your test framework, or Pa11y CI), a contrast checker for design (Colour Contrast Analyser), and real screen readers (NVDA, VoiceOver, TalkBack) plus platform tools for mobile apps.** Then test manually with a keyboard and, where you can, with disabled users. Tools find a subset of issues; they cannot certify a site as accessible.",
          "This list is for developers and designers building testing into their normal work. The usual target is WCAG 2.2 level AA; WCAG 2.2 became a W3C Recommendation in October 2023. Tool facts were checked on the tools' own pages on 28 October 2026. For the overall method (scoping, manual testing and reporting), see our [[/blogs/website-accessibility-guide|website accessibility guide]] and the [[/blogs/accessibility-testing-australia|accessibility testing process guide]].",
        ],
      },
      {
        heading: "Automated scanners in the browser",
        body: [
          "**1. axe DevTools (browser extension) and axe-core.** Deque's axe-core is an open-source rules engine (Mozilla Public License 2.0) with rules for WCAG 2.0, 2.1 and 2.2 at levels A, AA and AAA, plus best practices. Its stated aim is no false positives, so it reports issues it is confident about rather than everything that might be wrong. The free axe DevTools extension runs it in the browser's developer tools; paid versions add guided tests. **Good for:** developers checking a page while building it.",
          "**2. WAVE.** WebAIM's evaluation tool shows icons directly on the page where errors, alerts and structural elements are, which makes it easy to see where a problem is. Available as browser extensions and an online checker. **Good for:** designers and content editors who want to see issues in context.",
          "**3. Lighthouse.** Built into Chrome's developer tools, Lighthouse includes an accessibility audit that runs a subset of axe-core rules and gives a score. **Good for:** a quick check alongside performance. **Watch for:** a score of 100 only means the automated checks passed; it says nothing about the many criteria that need manual testing.",
        ],
      },
      {
        heading: "Guided and structured testing",
        body: [
          "**4. Accessibility Insights for Web.** Microsoft's free browser extension for Chrome and Edge. FastPass combines automated checks with a guided tab-stop test of keyboard navigation; Assessment walks you through a fuller review against WCAG 2.1 AA, with automated checks and assisted manual tests. **Good for:** teams that want a repeatable manual process without an expensive tool.",
          "**5. ARC Toolkit.** A free Chrome extension from TPGi that lists issues and lets you inspect headings, landmarks, links, form labels and ARIA. **Good for:** developers debugging structure and ARIA in detail.",
        ],
      },
      {
        heading: "Testing in code and CI",
        body: [
          "**6. axe-core in your test framework.** axe-core has integrations for end-to-end and unit testing tools, such as the official package for Playwright, so automated accessibility checks run with your other tests. **Good for:** catching regressions before they reach production. Add checks for key pages and components, not just the home page.",
          "**7. Pa11y and Pa11y CI.** Free, open-source command-line tools. Pa11y tests a page; Pa11y CI runs through a list of URLs, which suits build pipelines; Pa11y Dashboard tracks results over time for non-developers. **Good for:** teams that want simple, scriptable checks across many pages. See [[/blogs/automated-regression-testing|automated regression testing]].",
        ],
      },
      {
        heading: "Design and contrast",
        body: [
          "**8. Colour Contrast Analyser.** A free desktop app from TPGi with an eyedropper to check contrast between any two colours on screen against WCAG thresholds, including in images, design files and prototypes. **Good for:** designers checking colours before handoff. Many design tools also have contrast plugins.",
        ],
      },
      {
        heading: "Screen readers",
        body: [
          "**9. NVDA (Windows).** A free, open-source screen reader widely used by blind people. Pair it with Firefox or Chrome.",
          "**10. VoiceOver (macOS and iOS).** Built into Apple devices. Test websites with Safari, and test iPhone apps on a real device.",
          "**11. TalkBack (Android).** Google's screen reader for Android. Test with Chrome and in your Android app.",
          "Learning the basic commands takes an afternoon. Listen for whether headings, buttons, form fields, errors and dynamic updates are announced clearly and in a sensible order. JAWS, a commercial Windows screen reader, is also widely used, especially in workplaces, so include it for business applications if you can.",
        ],
      },
      {
        heading: "Mobile app tools",
        body: [
          "**12. Platform inspectors.** Xcode's Accessibility Inspector on iOS and Google's Accessibility Scanner app on Android check labels, touch target sizes and contrast in native apps. Use them alongside VoiceOver and TalkBack, and test with large text and display zoom switched on. See [[/blogs/mobile-app-testing|mobile app testing]].",
        ],
      },
      {
        heading: "Comparison table",
        body: [],
        table: {
          headers: ["Tool", "Type", "Cost", "Best for"],
          rows: [
            ["axe DevTools / axe-core", "Automated scanner and rules engine", "Free extension and open-source engine; paid tiers", "Developers while building"],
            ["WAVE", "Visual scanner", "Free extension; paid API", "Seeing issues on the page"],
            ["Lighthouse", "Automated audit", "Free, in Chrome", "Quick checks with performance"],
            ["Accessibility Insights for Web", "Guided automated and manual checks", "Free", "Repeatable structured reviews"],
            ["ARC Toolkit", "Inspection extension", "Free", "Debugging ARIA and structure"],
            ["axe-core in tests", "CI automation", "Open source", "Preventing regressions"],
            ["Pa11y / Pa11y CI", "CLI and CI automation", "Open source", "Scripted checks across many URLs"],
            ["Colour Contrast Analyser", "Contrast checker", "Free", "Designers and design QA"],
            ["NVDA", "Screen reader (Windows)", "Free, open source", "Real assistive technology testing"],
            ["VoiceOver", "Screen reader (Apple)", "Built in", "Safari and iOS testing"],
            ["TalkBack", "Screen reader (Android)", "Built in", "Android testing"],
            ["Xcode Accessibility Inspector / Accessibility Scanner", "Mobile app checks", "Free", "Native app labels, targets, contrast"],
          ],
        },
      },
      {
        heading: "What tools cannot tell you",
        body: [
          "Automated checks cannot judge whether alternative text describes an image usefully, whether link text makes sense out of context, whether the focus order is logical, whether error messages help people fix the problem, or whether a custom component works with a screen reader in practice. Those need manual testing with a keyboard and assistive technology, and ideally with disabled users. Treat tool output as a starting point.",
        ],
        checklist: [
          "Run an automated scanner on each page template, not just the home page.",
          "Tab through every page: can you reach and use everything, and can you always see where focus is?",
          "Test key journeys with at least one desktop and one mobile screen reader.",
          "Zoom to 200% and 400% and check that content reflows without horizontal scrolling.",
          "Check colour contrast in the design files before development.",
          "Add automated checks to CI so fixed issues stay fixed.",
        ],
        callout: {
          type: "note",
          text: "Do not describe a site as \"WCAG compliant\" on the strength of automated tools alone. Conformance claims need a full manual review against every applicable criterion.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A practical toolkit is small: one browser scanner, a guided checker, automated checks in CI, a contrast tool and real screen readers. Most of it is free. What matters more is using it routinely, on every template and journey, and backing it with manual testing. For designing accessibly from the start, see [[/blogs/accessible-ui-ux-design|accessible UI/UX design]].",
        ],
        cta: {
          title: "Need an accessibility review before launch?",
          description: "ZSpace Labs designs and builds websites and apps with accessibility testing built into delivery. See our [[/services/ui-ux-design|UI/UX design service]].",
        },
      },
      {
        heading: "Sources",
        body: [
          "W3C, WCAG 2.2 (Recommendation, 5 October 2023). Deque, axe-core repository. WebAIM, WAVE. Chrome for Developers, Lighthouse accessibility audits. Microsoft, Accessibility Insights for Web documentation. Pa11y project site. TPGi, Colour Contrast Analyser and ARC Toolkit. NV Access, NVDA. Apple and Google accessibility documentation. Accessed 28 October 2026.",
        ],
      },
    ],
  },

  // ------------------------------------------------- SAAS EMPTY STATES
  {
    slug: "saas-empty-state-design",
    title: "15 Empty State Patterns for Better SaaS User Experiences",
    seoTitle: "15 SaaS Empty State Patterns, With Examples",
    excerpt:
      "Fifteen empty state patterns for SaaS products, from first use and no results to no access and errors, with what each should say and the action to offer.",
    category: "UI/UX",
    banner: "emptystates",
    sceneKind: "design",
    bannerAlt: "SaaS screens with empty states for first use, no results, cleared items, missing permissions and errors, each with a message and a next action",
    date: "2026-10-28",
    readingTime: "9 min read",
    relatedServiceSlugs: ["ui-ux-design"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise"],
    relatedSlugs: ["saas-product-design", "saas-onboarding-optimization", "ux-writing"],
    faqs: [
      {
        q: "What is an empty state in UX?",
        a: "Any screen or area that has no content to show, whether because the user has not added anything yet, a search or filter found nothing, they cleared everything, they lack access, or something went wrong. Each of these needs a different message and action.",
      },
      {
        q: "Should an empty state include an illustration?",
        a: "It can, if it helps people recognise the situation and does not push the message and action out of view. On dense screens and small panels, a short message and a clear action are usually enough.",
      },
      {
        q: "Are empty states part of onboarding?",
        a: "First-use empty states often do the onboarding work, by explaining what will appear and offering the first action in context. That is usually more effective than a separate tour.",
      },
    ],
    content: [
      {
        heading: "What should a SaaS empty state do?",
        body: [
          "**A good empty state tells people why the area is empty, what would normally appear there and what they can do next, with a direct action to do it.** Empty states fall into three broad groups: no data yet (first use), empty because of something the user did (no results, cleared, completed) and empty because of a problem (no access, errors, missing setup). Each group needs different wording and actions.",
          "This list is for product designers, product managers and founders working on B2B and SaaS products, where empty screens are common: new accounts, new workspaces, filtered tables and permission-restricted areas. The grouping follows IBM's Carbon Design System, and the core guidance follows NN/g's Kate Kaplan: show system status, provide learning cues, and give direct paths to key tasks. The examples are illustrative, not taken from specific products. For ecommerce, see [[/blogs/ecommerce-empty-states|ecommerce empty states]].",
        ],
      },
      {
        heading: "First use: nothing here yet",
        body: [
          "**1. First-use with a primary action.** A new projects screen says what projects are for and offers \"Create your first project\". Carbon recommends a positive title, such as \"Start by adding data assets\", rather than \"You don't have any data assets\".",
          "**2. Starter content or templates.** Offer a template or sample to start from: \"Start from a template\" next to \"Start blank\". Templates show what good looks like and shorten time to value. Label sample data clearly so it is never mistaken for real data.",
          "**3. Import instead of create.** Many users already have data elsewhere. \"Import contacts from CSV\" or \"Connect your calendar\" can be the main action when re-typing would be the alternative.",
          "**4. Inline documentation.** A short explanation of what the feature does, a link to help, or a short video, in place. NN/g calls this a learning cue, and it works better than a tour users must remember later.",
          "**5. Dependent setup.** When a screen depends on a step elsewhere, such as \"Reports appear once you connect a data source\", say so and link straight to that step rather than showing an empty chart.",
          "**6. Team-dependent empty state.** For collaborative features, the useful action may be inviting colleagues: \"Invite your team to start assigning tasks.\"",
        ],
      },
      {
        heading: "Empty because of something the user did",
        body: [
          "**7. No search results.** Repeat the query, suggest checking spelling or broader terms, and offer a way forward, such as clearing filters, searching everywhere or creating the item they looked for.",
          "**8. Filters match nothing.** Show which filters are applied and offer to remove the most restrictive one or clear them all. Never just say \"No data\".",
          "**9. Cleared or completed.** An empty inbox or task list after the user finished their work is good news. Confirm it (\"All caught up\") and, if useful, point to what is next.",
          "**10. Archived or deleted content.** When users empty a list by archiving or deleting, show where the items went and how to restore them.",
          "**11. Date range with no activity.** Analytics and reporting screens should say \"No activity between 1 and 7 March\" and offer a wider range, rather than displaying an empty chart that looks broken.",
        ],
      },
      {
        heading: "Empty because of a problem",
        body: [
          "**12. No permission.** Explain that the content exists but the user cannot see it, who can grant access, and offer \"Request access\". Take care not to reveal sensitive details, such as titles of restricted records.",
          "**13. Plan or feature limit.** If a feature is not in the user's plan, say what it does and how to get it without a hard sell, and make it clear the user has not lost data.",
          "**14. Loading failed.** Distinguish \"nothing here\" from \"we could not load this\". NN/g's first guideline is to communicate system status: an empty area during or after a failed load confuses users. Offer \"Try again\" and say whether their data is safe.",
          "**15. Offline or sync pending.** In apps that sync, say that content will appear once the connection returns, and show anything stored locally.",
        ],
        cta: {
          title: "Designing a SaaS product's first-use experience?",
          description: "ZSpace Labs designs SaaS interfaces, including empty, loading and error states, as part of [[/services/ui-ux-design|UI/UX design]] projects.",
        },
      },
      {
        heading: "Pattern table",
        body: [],
        table: {
          headers: ["Pattern", "Group", "Message should say", "Main action"],
          rows: [
            ["First use", "No data", "What will appear here", "Create the first item"],
            ["Starter content", "No data", "Start from an example", "Use a template"],
            ["Import", "No data", "Bring existing data in", "Import or connect"],
            ["Inline documentation", "No data", "What the feature does", "Learn more, then create"],
            ["Dependent setup", "No data", "What must happen first", "Go to the setup step"],
            ["Team-dependent", "No data", "Who needs to join", "Invite teammates"],
            ["No search results", "User action", "What was searched", "Broaden, clear or create"],
            ["Filters match nothing", "User action", "Which filters apply", "Remove a filter"],
            ["Cleared or completed", "User action", "Work is done", "Optional next step"],
            ["Archived or deleted", "User action", "Where items went", "Restore"],
            ["Empty date range", "User action", "No activity in this period", "Change the range"],
            ["No permission", "Problem", "Content is restricted", "Request access"],
            ["Plan limit", "Problem", "Feature not in this plan", "See plans"],
            ["Loading failed", "Problem", "Could not load; data is safe", "Try again"],
            ["Offline or sync pending", "Problem", "Will appear when back online", "Retry or wait"],
          ],
        },
      },
      {
        heading: "Writing and design checklist",
        body: [],
        checklist: [
          "Design empty states for every list, table, dashboard and search before development, not after.",
          "Lead with a short, positive title; explain in one or two sentences.",
          "Offer one primary action and at most one secondary link.",
          "Make loading, empty and error look different so users can tell them apart.",
          "Keep illustrations small enough that the message and action stay visible on small screens.",
          "Make empty states accessible: real text, not text inside images, and actions reachable by keyboard.",
          "Track how often users click the empty state's action; it is a useful onboarding signal.",
        ],
        callout: {
          type: "tip",
          text: "First-use empty states are often the most effective onboarding you can build. See [[/blogs/saas-onboarding-optimization|SaaS onboarding optimisation]] for defining activation and measuring the first session.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Empty states are moments when users are most likely to be confused, and also most open to guidance. Identify which of the three groups each one falls into, say why the area is empty, and give a direct action. For the words themselves, see [[/blogs/ux-writing|UX writing and microcopy]]; for the wider product, [[/blogs/saas-product-design|product design for SaaS]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "IBM Carbon Design System, empty states pattern. Nielsen Norman Group, Kate Kaplan, Designing Empty States in Complex Applications: 3 Guidelines (2021). Accessed 28 October 2026.",
        ],
      },
    ],
  },

  // ---------------------------------------------------- RAG USE CASES
  {
    slug: "rag-use-cases",
    title: "10 Retrieval-Augmented Generation (RAG) Use Cases for Business Applications",
    seoTitle: "10 RAG Use Cases for Business Applications",
    excerpt:
      "Ten business uses of retrieval-augmented generation, from support answers to contract search, with the data, permissions and evaluation each one needs.",
    category: "AI & Automation",
    banner: "ragpipeline",
    sceneKind: "rag",
    bannerAlt: "Ten RAG use cases, each connecting a business data source to an AI assistant that answers with citations",
    date: "2026-10-28",
    readingTime: "10 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["professional-services", "saas-technology", "b2b-enterprise"],
    relatedSlugs: ["retrieval-augmented-generation", "enterprise-rag-architecture", "rag-vs-fine-tuning"],
    faqs: [
      {
        q: "What is RAG used for?",
        a: "Answering questions or drafting text from your own content, such as help articles, policies, contracts, product data or past tickets, rather than from the model's general training. The system retrieves relevant passages and the model writes an answer based on them, ideally with citations.",
      },
      {
        q: "Does RAG stop AI from making things up?",
        a: "It reduces the risk but does not remove it. The model can still misread or over-generalise from the retrieved text, or answer when retrieval found nothing relevant. Citations, refusal when evidence is missing, and regular evaluation are needed.",
      },
      {
        q: "When is RAG not the right approach?",
        a: "When the answer needs exact numbers from a database (query the database instead), when the source content is poor or out of date, or when the task is about style or format rather than knowledge, where examples or fine-tuning may suit better.",
      },
    ],
    content: [
      {
        heading: "Where does RAG work well in a business?",
        body: [
          "**RAG works best where people repeatedly look things up in a large body of text that changes over time and must answer accurately: customer support, internal policies, sales and security questionnaires, product and technical documentation, contracts, research, onboarding, regulated procedures, field service manuals and ecommerce product questions.** It is weaker where answers need live database figures, where the source content is poor, or where a wrong answer would be costly and hard to spot.",
          "Retrieval-augmented generation was described by Lewis and colleagues in 2020 as combining a language model with retrieval from an external knowledge source. In business use, that source is your own content. This list helps you choose a first use case; for how a RAG system is built, see our [[/blogs/retrieval-augmented-generation|complete RAG guide]]. Each item covers the data it needs, who may see what, and how to tell whether it works, because those decide success more than the model does.",
        ],
      },
      {
        heading: "Customer-facing use cases",
        body: [
          "**1. Support answers from help content.** A support assistant answers product and policy questions from your help centre, with links to the source article, and hands over to a person when unsure. **Data:** help articles, policies, approved macros. **Permissions:** public content only, unless the user is signed in. **Measure:** answer accuracy on a test set of real questions, handover rate and resolution without reopening.",
          "**2. Ecommerce product questions.** Shoppers ask about compatibility, sizing, ingredients or care, and the assistant answers from product data and manuals. **Data:** structured product attributes plus descriptions and manuals. **Watch for:** stock and prices must come from live systems, not from indexed text that may be stale. See [[/blogs/ai-customer-support-ecommerce|AI customer support for ecommerce]].",
        ],
      },
      {
        heading: "Internal knowledge use cases",
        body: [
          "**3. HR and policy questions.** Staff ask about leave, expenses or benefits and get answers citing the current policy. **Permissions:** some policies differ by country, grade or entity, so filter by the user's attributes. **Watch for:** retired policies left in the index.",
          "**4. IT and engineering runbooks.** Engineers ask how to handle an alert or deploy a service and get steps from runbooks, past incident reports and architecture notes. **Data quality matters most here:** out-of-date runbooks produce confident wrong answers.",
          "**5. Onboarding new staff.** A new starter asks questions about tools, processes and terminology and gets answers from onboarding material and wikis. See [[/blogs/ai-knowledge-base|AI knowledge bases]].",
        ],
      },
      {
        heading: "Sales and commercial use cases",
        body: [
          "**6. Security questionnaires and RFPs.** The system drafts answers to customer security and procurement questions from previously approved answers, policies and certifications. **Keep a human for:** reviewing every answer before it goes to a customer, since commitments made here become contractual.",
          "**7. Sales enablement.** Salespeople ask about product capabilities, pricing rules or competitor positioning and get answers from approved material. **Permissions:** keep draft or confidential material out of the index.",
        ],
      },
      {
        heading: "Legal, compliance and specialist use cases",
        body: [
          "**8. Contract and clause search.** Lawyers and commercial teams find how particular terms were handled across past contracts, with citations to the exact clause. **Keep a human for:** all interpretation and advice. **Permissions:** strict, often by matter or client.",
          "**9. Regulated procedures and standards.** Staff in quality, safety or compliance roles ask what a procedure or standard requires and see the relevant sections quoted. **Watch for:** answers must cite the version in force; version control of the source documents is essential.",
          "**10. Field service and technical manuals.** Technicians ask about a fault on a specific model and get steps from manuals and service bulletins, on a phone or tablet. **Data:** manuals are often PDFs with tables and diagrams, which need careful parsing. See [[/blogs/rag-chunking-strategies|RAG chunking strategies]].",
        ],
        cta: {
          title: "Choosing a first RAG use case?",
          description: "ZSpace Labs builds AI assistants over company knowledge with permission-aware retrieval, citations and evaluation. See our [[/services/ai-automation|AI automation service]].",
        },
      },
      {
        heading: "Use case comparison",
        body: [],
        table: {
          headers: ["Use case", "Main data", "Permission model", "Risk if wrong"],
          rows: [
            ["Support answers", "Help centre, policies", "Public or per customer", "Medium"],
            ["Product questions", "Product data, manuals", "Public", "Medium"],
            ["HR and policy", "Policies, handbooks", "By country, role or entity", "Medium"],
            ["IT runbooks", "Runbooks, incidents", "Engineering staff", "Medium to high"],
            ["Staff onboarding", "Wikis, guides", "All staff", "Low"],
            ["Security questionnaires", "Approved answers, policies", "Sales and security", "High (contractual)"],
            ["Sales enablement", "Approved sales material", "Sales team", "Medium"],
            ["Contract search", "Contracts", "By matter or client", "High"],
            ["Regulated procedures", "Procedures, standards", "By role", "High"],
            ["Field service", "Manuals, bulletins", "Technicians", "Medium to high"],
          ],
        },
      },
      {
        heading: "What every use case needs",
        body: [],
        checklist: [
          "**Clean, current sources:** remove duplicates and retired documents before indexing; RAG repeats what the content says.",
          "**Permission-aware retrieval:** filter results by what the user is allowed to see before the model sees them. OWASP's 2025 Top 10 for LLM applications lists vector and embedding weaknesses, including access-control gaps, as a distinct risk.",
          "**Citations:** every answer links to its source passage so people can check it.",
          "**Refusal when evidence is missing:** \"I could not find this in our policies\" is better than a guess. See [[/blogs/reduce-ai-agent-hallucinations|reducing hallucinations]].",
          "**An evaluation set:** 50 to 200 real questions with agreed answers, rerun after every change. See [[/blogs/llm-evaluation-pipeline|LLM evaluation pipelines]].",
          "**Privacy review:** know what personal data is in the sources and where prompts and documents are processed. See [[/blogs/ai-data-privacy|AI data privacy]].",
        ],
      },
      {
        heading: "How to pick your first use case",
        body: [
          "Choose one where questions are frequent, the source content is already in decent shape, users can check answers easily, and a wrong answer is inconvenient rather than harmful. Internal support for a well-documented product, or HR policy questions, often fit. Leave contract and regulated-procedure assistants until you have evaluation and permissions working well on a lower-risk case. If the task is about format or tone rather than knowledge, compare approaches in [[/blogs/rag-vs-fine-tuning|RAG vs fine-tuning]].",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "RAG is most useful where people search large, changing bodies of text for answers they must get right. The use cases differ less in technology than in data quality, permissions and the cost of a wrong answer, so start where those are manageable, measure with real questions, and expand from there. For the architecture behind larger deployments, see [[/blogs/enterprise-rag-architecture|enterprise RAG architecture]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Lewis et al., Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (NeurIPS 2020). OWASP, Top 10 for LLM Applications 2025 (LLM08: Vector and Embedding Weaknesses). Accessed 28 October 2026.",
        ],
      },
    ],
  },

  // ------------------------------------------------- WEBHOOK USE CASES
  {
    slug: "webhook-use-cases",
    title: "12 Practical Webhook Use Cases for Connecting Business Applications",
    seoTitle: "12 Practical Webhook Use Cases for Business Applications",
    excerpt:
      "Twelve event-driven workflows built on webhooks, from payment confirmations to signed contracts, and how to verify, deduplicate and reconcile them.",
    category: "Web Development",
    banner: "webhookflow",
    sceneKind: "workflow",
    bannerAlt: "Business applications sending webhook events, such as payment succeeded and contract signed, to an endpoint that verifies, queues and processes them",
    date: "2026-10-28",
    readingTime: "11 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce", "professional-services"],
    relatedSlugs: ["ecommerce-webhooks", "integration-architecture-patterns", "website-api-integration"],
    faqs: [
      {
        q: "What is a webhook?",
        a: "An HTTP request that one application sends to a URL you provide when something happens, such as a payment succeeding. Instead of your system repeatedly asking \"has anything changed?\", the other system tells you when it does.",
      },
      {
        q: "What is the difference between a webhook and an API?",
        a: "With an API call, your system asks another system for data or asks it to do something. With a webhook, the other system calls you when an event happens. Most integrations use both: the webhook says what happened, and an API call fetches the full, current details.",
      },
      {
        q: "Are webhooks reliable?",
        a: "Not on their own. Providers retry failed deliveries for different lengths of time, some not at all, and events can arrive twice or out of order. Reliable integrations verify signatures, deduplicate, process asynchronously and run a periodic reconciliation to catch anything missed.",
      },
    ],
    content: [
      {
        heading: "What are webhooks used for?",
        body: [
          "**Webhooks let one application notify another the moment something happens, so the next step starts without anyone checking or re-typing. Common uses are confirming payments, syncing orders, filing signed contracts, routing form submissions, updating CRMs from bookings, alerting teams, triggering builds and keeping subscriptions in step with billing.** To be dependable they need signature verification, fast acknowledgement, queued processing, deduplication and a reconciliation job.",
          "This guide is for business owners, operations leads and developers connecting systems. It is not a list of integrations to buy (for that, see [[/blogs/website-api-integrations-list|common website integrations]]); it is about event-driven workflows and how to make them reliable. Provider behaviour was checked in Stripe, Shopify, Razorpay and GitHub documentation on 28 October 2026. For the ecommerce-specific technical detail, see [[/blogs/ecommerce-webhooks|ecommerce webhooks]].",
        ],
      },
      {
        heading: "How a webhook workflow works",
        body: [
          "You register an HTTPS URL with the sending service and choose which events you want. When an event happens, the service sends a POST request with a JSON payload and a signature header. Your endpoint verifies the signature, records the event, returns a 2xx response quickly and processes the work in the background. Stripe's documentation is explicit that you should return a successful status before complex logic that might time out, and recommends handling events through an asynchronous queue.",
        ],
      },
      {
        heading: "Payments and billing",
        body: [
          "**1. Confirm payment before fulfilling.** Do not rely on the customer's browser returning to a success page; it may close. Use the payment provider's success event (for example Stripe's payment_intent.succeeded or a Razorpay payment event) to mark the order paid and start fulfilment.",
          "**2. Handle failed and disputed payments.** Events for failed renewals, refunds and disputes can pause access, notify the customer, open a task for finance or attach evidence. These often arrive days after the original payment.",
          "**3. Keep subscription access in step with billing.** Renewal, cancellation and plan-change events update what the customer can use in your app, so access never depends on someone remembering to change it. See [[/blogs/payment-gateway-integration|payment gateway integration]].",
        ],
      },
      {
        heading: "Sales and customer data",
        body: [
          "**4. Website form to CRM.** A form or form-builder webhook creates or updates the lead in the CRM, assigns an owner and starts follow-up, with the source page attached. See [[/blogs/crm-website-integration|CRM website integration]].",
          "**5. Booking to CRM and calendar.** When a meeting is booked, rescheduled or cancelled, the scheduling tool's webhook updates the CRM record and notifies the account owner.",
          "**6. Signed contract to the next step.** When an e-signature platform reports a document as completed, the deal is marked won, the signed copy is filed and onboarding or invoicing begins.",
        ],
      },
      {
        heading: "Commerce and operations",
        body: [
          "**7. Store orders to fulfilment and accounting.** Shopify and other platforms send order and fulfilment events that can create shipments with a 3PL, update the ERP or post sales to accounting. Shopify notes that it does not guarantee ordering within a topic and that delivery is not always guaranteed, so it recommends reconciliation jobs.",
          "**8. Inventory and catalogue sync.** Product and inventory update events keep marketplaces, search indexes and product feeds aligned with the source system.",
          "**9. Shipping and delivery updates.** Carrier tracking webhooks update the order status and trigger customer notifications, rather than polling every carrier on a schedule.",
        ],
      },
      {
        heading: "Internal tools and engineering",
        body: [
          "**10. Alerts into team chat.** Events such as a large order, a failed payment, an urgent support ticket or a failed integration post a message to the right Slack or Teams channel. Alert only on things someone must act on.",
          "**11. Code and deployment events.** GitHub and similar platforms send events for pushes, pull requests and releases that can trigger builds, previews and deployment notifications. GitHub's documentation notes that it does not automatically redeliver failed deliveries, so failures need monitoring or scripted redelivery.",
          "**12. Triggering AI and automation workflows.** A new support ticket, email or uploaded document can trigger an automation that classifies it, extracts data or drafts a reply, with approval before anything is sent. See [[/blogs/ai-automation-integration-options|APIs, webhooks, MCP or RPA]].",
        ],
        cta: {
          title: "Connecting systems that keep falling out of sync?",
          description: "ZSpace Labs builds integrations with signature verification, queues, retries, monitoring and reconciliation. See our [[/services/website-development|web application development]] and [[/services/ai-automation|workflow automation]] services.",
        },
      },
      {
        heading: "Use case table",
        body: [],
        table: {
          headers: ["Use case", "Typical event", "Action", "Must not happen"],
          rows: [
            ["Confirm payment", "Payment succeeded", "Mark paid, start fulfilment", "Fulfilling twice"],
            ["Failed or disputed payment", "Payment failed, dispute opened", "Pause access, notify, open task", "Missed dispute deadline"],
            ["Subscription access", "Renewed, cancelled, changed", "Update entitlements", "Access out of step with billing"],
            ["Form to CRM", "Form submitted", "Create lead, assign, follow up", "Duplicate leads"],
            ["Booking to CRM", "Booked, rescheduled, cancelled", "Update record, notify owner", "Stale meeting times"],
            ["Signed contract", "Envelope completed", "Mark won, file, start onboarding", "Lost signed copy"],
            ["Orders to fulfilment", "Order created or paid", "Create shipment, post to ERP", "Missed or duplicate shipments"],
            ["Inventory sync", "Inventory updated", "Update channels and feeds", "Overselling"],
            ["Delivery updates", "Tracking status changed", "Update order, notify customer", "Wrong status shown"],
            ["Team alerts", "Threshold or failure event", "Post to channel", "Alert fatigue"],
            ["Code and deploy", "Push, PR, release", "Build, preview, notify", "Unverified triggers"],
            ["AI workflows", "Ticket, email or file created", "Classify, extract, draft", "Unreviewed outbound actions"],
          ],
        },
      },
      {
        heading: "Making webhook workflows reliable",
        body: [
          "These practices come from the providers' own documentation and apply to every use case above.",
        ],
        checklist: [
          "**Verify the signature on the raw body.** Stripe signs with HMAC-SHA256 in the Stripe-Signature header; Shopify sends X-Shopify-Hmac-Sha256; Razorpay sends X-Razorpay-Signature. Both Stripe and Razorpay warn that parsing or changing the body before verification breaks it.",
          "**Reject stale events.** Stripe includes a timestamp in the signature, and its libraries default to a five-minute tolerance to limit replay attacks.",
          "**Acknowledge fast, process later.** Return 2xx after verifying and storing the event; do the work from a queue.",
          "**Deduplicate.** Providers can send the same event more than once. Record event IDs (Stripe's event ID, Shopify's X-Shopify-Webhook-Id, Razorpay's x-razorpay-event-id) and skip ones already processed.",
          "**Do not assume order.** Stripe, Shopify and Razorpay all say events can arrive out of order. Fetch the current state through the API, or compare timestamps, before acting.",
          "**Know each provider's retry policy.** Stripe retries for up to three days in live mode; GitHub does not retry automatically. Design for the weakest provider you depend on.",
          "**Reconcile on a schedule.** Run a periodic job that compares recent records through the API to catch missed events.",
          "**Monitor and alert.** Track failed verifications, processing errors and queue age, and alert a person when they rise.",
          "**Protect secrets.** Store signing secrets securely and rotate them; Stripe lets an old and new secret overlap for up to 24 hours.",
        ],
        callout: {
          type: "note",
          text: "Standard Webhooks is an open-source set of guidelines and libraries for sending webhooks consistently. If you are building a product that sends webhooks to others, it is worth reading before you design your own format.",
        },
      },
      {
        heading: "When not to use a webhook",
        body: [
          "Use a scheduled API sync instead when the source system does not offer webhooks for the events you need, when you need a complete daily snapshot rather than individual changes, or when event volume is so high that batch processing is simpler. Many reliable integrations use both: webhooks for speed and a scheduled sync as a safety net. For the wider choice between APIs, events and queues, see [[/blogs/integration-architecture-patterns|integration architecture patterns]].",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Webhooks are the simplest way to make one system react to another the moment something happens, from confirming payments to filing contracts. The workflows are easy to sketch and easy to get subtly wrong, so verify signatures, acknowledge quickly, process from a queue, deduplicate, ignore ordering assumptions and reconcile. For securing the APIs on both sides, see [[/blogs/api-security-best-practices|API security best practices]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Stripe documentation, receive Stripe events in your webhook endpoint (signatures, retries, ordering, duplicates). Shopify developer documentation, webhooks (HMAC header, webhook ID, ordering, reconciliation). Razorpay documentation, validate and test webhooks. GitHub Docs, handling failed webhook deliveries. Standard Webhooks project site. Accessed 28 October 2026.",
        ],
      },
    ],
  },
];
