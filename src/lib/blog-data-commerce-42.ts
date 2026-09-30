import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch five, part ten: ecommerce platform
 * migration (SEO and customer data), website modernization and legacy
 * migration. The replatforming hub is `ecommerce-replatforming`. Merged
 * into `posts` in blog-data.ts.
 */

export const commercePosts42: BlogPost[] = [
  // -------------------------------------- 253 · PLATFORM MIGRATION
  {
    slug: "ecommerce-platform-migration",
    title: "Ecommerce Migration Strategy: How to Plan a Store Migration",
    seoTitle: "Ecommerce Migration Strategy: How to Plan a Platform Migration",
    excerpt: "How to plan an ecommerce platform migration: goals and scope, data, URLs and SEO, customer data, analytics, rehearsals, cutover, rollback and workstreams.",
    category: "Web Development",
    banner: "platformmigrationflow",
    bannerAlt: "Platform migration flow: inventory and baseline, map data and URLs, rehearse migration (highlighted), freeze and cutover, redirects and QA, monitor with rollback ready.",
    date: "2026-09-29",
    updated: "2026-09-30",
    readingTime: "17 min read",
    relatedServiceSlugs: ["website-development", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "retail"],
    faqs: [
      { q: "What is an ecommerce platform migration?", a: "Moving a store's data, URLs, content, integrations and customers from one ecommerce platform to another. It's the execution phase of a replatforming decision." },
      { q: "How do I protect SEO during a platform migration?", a: "Inventory every indexable URL, map each to its new equivalent, implement one-to-one 301 redirects, carry over titles, descriptions, headings, content, canonicals and structured data, keep internal links pointing at final URLs, submit new sitemaps and monitor crawl errors and rankings after launch." },
      { q: "Should all old URLs redirect to the homepage?", a: "No. Redirect each old URL to its closest equivalent. Mass redirects to the homepage are treated like missing pages by search engines and frustrate users." },
      { q: "What customer data needs migrating?", a: "Customer records, addresses, consent and marketing preferences, order history if needed for service and reorders, loyalty balances, subscriptions and saved payment method references where the payment provider supports migration." },
      { q: "Can customer passwords be migrated?", a: "Often not. Passwords are stored as hashes that many platforms can't import; Shopify, for example, can't import customer passwords, so customers must set new ones or use passwordless sign-in. Plan communication accordingly." },
      { q: "How are saved payment methods migrated?", a: "Through the payment providers, not by exporting card data. Some providers support token migration between accounts; this needs planning and security review. Subscriptions depend on it." },
      { q: "What is a migration rehearsal?", a: "A full trial migration into a staging environment with production-like data, used to test scripts, timings, data quality and the site before the real cutover." },
      { q: "Do I need a rollback plan?", a: "Yes. Define what would trigger a rollback, how DNS and redirects would be reversed and how orders taken during the window would be reconciled." },
      { q: "How long does traffic take to recover after migration?", a: "It varies. Well-executed migrations can see limited disruption; poorly redirected ones can lose visibility for a long time. Monitor closely and fix issues quickly rather than assuming a fixed recovery period." },
      { q: "What analytics should be preserved?", a: "Tracking of key events, conversion definitions, UTM and attribution handling, and a baseline of traffic, rankings and revenue by page type for comparison after launch." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A safe ecommerce platform migration protects two things: search visibility and customer data. Build a full inventory and baseline; map every data type and every indexable URL to the new platform; rehearse the migration on staging with production-like data; implement one-to-one 301 redirects and carry over metadata, content, canonicals and structured data; migrate customers, consents, order history, subscriptions and payment tokens through proper channels; freeze changes, cut over, test and monitor closely with a defined rollback plan. Most migration damage comes from unmapped URLs and incomplete data, not from the platform itself.",
        ],
      },
      {
        heading: "Where Migrations Go Wrong",
        body: [
          "Platform migrations fail in predictable ways: product and category URLs change without redirects, titles and descriptions are lost, internal links point to redirected URLs, structured data disappears, analytics tracking breaks, customers can't sign in, subscriptions stop billing and order history vanishes. None of these are platform problems; they're planning problems. The flow above shows a sequence that avoids them. For deciding whether to replatform at all, see [[/blogs/ecommerce-replatforming|ecommerce replatforming]].",
        ],
      },
      {
        heading: "Phase 1: Inventory and Baseline",
        body: [
          "Before touching the new platform, record what exists and how it performs. Crawl the current site for every URL and its status, title, description, canonical and structured data; export analytics and search performance by page; list every data type and integration; and record current conversion, revenue and organic traffic by page type. This baseline is how you'll know whether the migration worked.",
        ],
        checklist: [
          "Full crawl of indexable URLs with metadata",
          "Search Console performance by page",
          "Analytics traffic, conversion and revenue by page type",
          "Backlink targets (pages other sites link to)",
          "Data types, volumes and quality issues",
          "Integrations and scheduled jobs",
        ],
      },
      {
        heading: "Phase 2: Map Data",
        body: [
          "Every platform models data differently. Map each source entity and field to the target: products, variants and options; collections and categories; customers and addresses; orders; reviews; content pages and blog posts; redirects; gift cards; loyalty balances; subscriptions. Decide what's migrated, transformed, archived or left behind, and clean data before import rather than after.",
        ],
        table: {
          headers: ["Data", "Typical approach", "Watch out for"],
          rows: [
            ["Products and variants", "Import with IDs mapped", "Option limits, variant structure differences"],
            ["Categories and collections", "Recreate with URL mapping", "Rule-based vs manual membership"],
            ["Customers", "Import with consent status", "Passwords usually can't migrate"],
            ["Orders", "Import historical orders or archive", "Needed for service, reorders, analytics"],
            ["Reviews", "Import via review platform", "Keep product associations"],
            ["Subscriptions", "Migrate contracts and payment tokens", "Billing continuity"],
            ["Gift cards and loyalty", "Migrate balances", "Liability and customer trust"],
          ],
        },
      },
      {
        heading: "Phase 2: Map URLs",
        body: [
          "Create a URL map from every old indexable URL to its new equivalent: products to products, categories to categories, content to content. Where a page has no equivalent, redirect to the closest relevant page, not the homepage. Keep URLs unchanged where the new platform allows; every change is a risk. Watch for platform-imposed URL patterns (for example fixed prefixes for products and collections) that force changes.",
        ],
        table: {
          headers: ["Old URL", "New URL", "Type"],
          rows: [
            ["/shop/linen-shirt-blue", "/products/linen-shirt?variant=blue", "301, product"],
            ["/category/mens-shirts", "/collections/mens-shirts", "301, category"],
            ["/blog/how-to-care-for-linen", "/blogs/journal/how-to-care-for-linen", "301, content"],
            ["/discontinued-product", "/collections/mens-shirts", "301, closest relevant"],
          ],
        },
      },
      {
        heading: "Preserve On-Page SEO Signals",
        body: [
          "Carry over titles, meta descriptions, headings, body content, image alt text, canonical tags and structured data for every mapped page. Check that the new templates don't introduce duplicate content (for example products reachable through several collection paths without canonicals), that faceted navigation is controlled and that internal links point directly at final URLs rather than through redirects. See [[/blogs/product-structured-data-ecommerce|product structured data]] and [[/blogs/ecommerce-faceted-navigation-seo|faceted navigation SEO]].",
        ],
        cta: {
          title: "Planning a platform migration?",
          description: "ZSpace plans and runs ecommerce migrations with URL mapping, data validation and post-launch monitoring built in.",
        },
      },
      {
        heading: "Customer Data",
        body: [
          "Customer data carries legal and trust obligations. Migrate customer records with consent and marketing preferences intact, addresses, and order history where it's needed for service and reorders. Passwords are usually stored as hashes the new platform can't use: Shopify, for example, doesn't import customer passwords, so customers need to set new passwords or use passwordless sign-in. Plan clear communication. Never export raw card data; payment tokens can only move between payment providers through their supported processes. Review data protection requirements for the transfer.",
        ],
      },
      {
        heading: "Subscriptions and Payment Tokens",
        body: [
          "Subscriptions are the highest-risk data in many migrations, because billing must continue without customers re-entering details. That depends on migrating stored payment method tokens between providers or accounts, which providers handle through specific processes with security requirements. Plan it early, test renewals on migrated contracts before cutover, and communicate with subscribers. See [[/blogs/subscription-ecommerce-website|subscription ecommerce website development]].",
        ],
      },
      {
        heading: "Analytics and Tracking",
        body: [
          "Recreate the measurement plan on the new platform: page views, product views, add to cart, checkout steps, purchases with the same definitions, consent handling and campaign attribution. Test events before launch and annotate the launch date in analytics. Keep the old tracking data accessible for comparison. See [[/blogs/ecommerce-analytics|ecommerce analytics]].",
        ],
      },
      {
        heading: "Phase 3: Rehearse",
        body: [
          "Run at least one full rehearsal: migrate production-like data to staging with the actual scripts, time each step, validate counts and samples, test the storefront, checkout, emails and integrations, and crawl the staging site for redirects, metadata and broken links. Rehearsals reveal slow imports, data mapping errors and missing redirects when they're still cheap to fix.",
        ],
      },
      {
        heading: "Phase 4: Freeze and Cut Over",
        body: [
          "Agree a change freeze on the old platform (no new products or content) before cutover, or a process for capturing late changes. During cutover: final delta migration of orders and customers, redirects activated, DNS switched, integrations pointed at the new platform, and test orders placed. Choose a low-traffic window and have the team available.",
        ],
      },
      {
        heading: "Phase 5: QA and Monitoring",
        body: [],
        checklist: [
          "Crawl the live site: redirects, status codes, canonicals, metadata",
          "Test old URLs from the map and top backlinks",
          "Submit new sitemaps; watch crawl errors in Search Console",
          "Compare organic traffic and rankings by page type with baseline",
          "Check conversion, checkout errors and payment success",
          "Verify customer sign-in, order history and subscriptions",
          "Reconcile orders between platform, ERP and payment provider",
        ],
      },
      {
        heading: "Rollback Planning",
        body: [
          "Decide in advance what would trigger a rollback (for example checkout failures or severe data problems), how DNS and redirects would be reversed, how orders placed on the new platform would be reconciled, and who decides. Most migrations never roll back, but having the plan makes the cutover calmer and faster when problems appear.",
        ],
      },
      {
        heading: "Worked Example: Migrating a Mid-Size Store",
        body: [
          "An illustrative scenario, not a client case: a store with 4,000 products, 60,000 customers and subscriptions moves platforms. The team crawls 9,000 indexable URLs, maps each to a new URL (keeping product slugs where possible), migrates products, customers with consent status, three years of orders and subscription contracts, and works with the payment providers to migrate stored payment tokens. Two rehearsals find variant-structure issues and 300 unmapped blog URLs. At cutover, redirects go live with DNS, customers receive an email explaining password reset, and the team monitors crawl errors, conversion and subscription renewals daily for the first weeks.",
        ],
      },
      {
        heading: "Migration Goals and Scope",
        body: [
          "Start by writing down why you're migrating and what must improve: lower maintenance, better performance, new capabilities, lower cost, integration needs. Goals decide scope: a like-for-like platform move, a redesign at the same time, or restructuring the catalog and URLs. Each additional change adds risk and makes results harder to interpret, so add scope deliberately. For choosing the destination, see [[/blogs/ecommerce-replatforming|ecommerce replatforming]].",
        ],
        table: {
          headers: ["Scope", "Risk", "When it makes sense"],
          rows: [
            ["Platform only (like for like)", "Lowest", "Platform is the constraint; design works"],
            ["Platform + design refresh", "Medium", "Design also limits conversion"],
            ["Platform + restructure catalog and URLs", "Highest", "Structure is fundamentally wrong"],
          ],
        },
      },
      {
        heading: "The Migration Workstreams",
        body: [
          "A migration runs several workstreams in parallel, each with its own guide: [[/blogs/ecommerce-platform-migration-checklist|migration checklist]], [[/blogs/ecommerce-data-migration|data migration]], [[/blogs/ecommerce-seo-migration|SEO migration]], [[/blogs/ecommerce-url-migration|URL migration]], [[/blogs/ecommerce-migration-testing|migration testing]], [[/blogs/ecommerce-parallel-run|parallel runs]] and the [[/blogs/ecommerce-migration-launch-plan|launch plan]]. For moves to Shopify, see [[/blogs/migrating-to-shopify-guide|Shopify migration]].",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "No baseline to compare against",
          "Redirecting everything to the homepage",
          "Losing metadata and structured data",
          "Internal links pointing through redirect chains",
          "Assuming passwords and payment tokens will migrate",
          "No rehearsal",
          "Launching at peak trading",
          "Stopping monitoring after launch day",
        ],
        cta: {
          title: "Ready to migrate without losing search visibility or customers?",
          description: "Talk to ZSpace about [[/services/website-development|ecommerce migrations]] and [[/services/shopify-development|migrating to Shopify]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Platform migrations succeed on preparation: a baseline, complete data and URL maps, rehearsals, careful handling of customer data and payment tokens, and disciplined monitoring after launch. For the Shopify-specific process, see [[/blogs/migrating-to-shopify-guide|Shopify migration]], and for general website migrations, [[/blogs/website-migration-guide|website migration guide]].",
        ],
      },
    ],
  },

  // -------------------------------------------- 254 · MODERNIZATION
  {
    slug: "ecommerce-website-modernization",
    title: "Ecommerce Website Modernization: How to Upgrade an Outdated Store",
    seoTitle: "Ecommerce Website Modernization: Upgrade an Outdated Store",
    excerpt: "How to modernize an outdated store: UX, frontend, backend, integrations, performance, accessibility, SEO and technical debt, without a big-bang rebuild.",
    category: "Web Development",
    banner: "modernizationmap",
    bannerAlt:
      "Modernization areas in four columns: UX (journeys, accessibility, mobile, design system), frontend (rendering, performance, component library, analytics and consent), backend (platform version, APIs, data model, integrations, highlighted) and operations (CI/CD, monitoring, security patches, manual process removal), noting to modernize where constraints are, not everywhere at once.",
    date: "2026-09-29",
    readingTime: "19 min read",
    relatedServiceSlugs: ["website-development", "ui-ux-design", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "retail"],
    faqs: [
      { q: "What is ecommerce website modernization?", a: "Upgrading an existing store's experience and technology (UX, frontend, backend, integrations, performance, accessibility, security and operations) to remove constraints, usually incrementally rather than rebuilding everything at once." },
      { q: "How is modernization different from a redesign?", a: "A redesign mainly changes how the store looks and flows. Modernization can include design but also addresses the technology underneath: platform versions, code, integrations, performance, accessibility and operations." },
      { q: "How is modernization different from replatforming?", a: "Replatforming moves to a different platform. Modernization can happen on the current platform, or include replatforming as one step when the platform itself is the constraint." },
      { q: "What are signs a store needs modernizing?", a: "Slow pages, poor mobile experience, accessibility issues, fragile integrations, manual workarounds, unsupported platform or theme versions, security patches that are hard to apply, and changes that take much longer than they should." },
      { q: "Should modernization be done all at once?", a: "Usually not. Incremental modernization, prioritized by business impact and risk, delivers value sooner and reduces the risk of a long, disruptive rebuild." },
      { q: "How do I prioritize modernization work?", a: "By impact on customers and revenue, risk (security, stability), effort and dependencies. Start with constraints that block other improvements." },
      { q: "Does modernization affect SEO?", a: "It can improve performance and structure, but URL changes, template changes and rendering changes can also harm SEO if not managed. Treat any URL change like a migration." },
      { q: "How does accessibility fit in?", a: "Modernization is a good time to address accessibility against WCAG, both for users and to reduce legal risk in markets where accessibility requirements apply." },
      { q: "What about performance?", a: "Measure Core Web Vitals with real-user data, then address the largest causes: heavy scripts and apps, unoptimized images, slow server responses and render-blocking resources." },
      { q: "How long does modernization take?", a: "It's often an ongoing programme rather than a single project, with a first phase of a few months addressing the biggest constraints." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Modernizing an outdated ecommerce store means removing the constraints that slow customers and your team, usually in phases rather than one rebuild. Audit UX, frontend, backend, integrations, performance, accessibility, security and operations; prioritize by customer impact, risk and dependencies; fix blocking constraints first (unsupported versions, fragile integrations, slow templates); modernize the frontend and UX with a component system and accessibility built in; clean up data and integrations; automate deployments and monitoring; and protect SEO whenever templates or URLs change. Replatform only when the platform itself is the constraint.",
        ],
      },
      {
        heading: "What “Outdated” Actually Means",
        body: [
          "A store can look fine and still be outdated underneath, or look dated while running on a perfectly capable platform. Separate the symptoms: customer-facing problems (slow, awkward on mobile, inaccessible, hard to search), team-facing problems (changes take weeks, deployments are risky, manual workarounds everywhere) and risk problems (unsupported versions, unpatched dependencies, fragile integrations). The diagram above maps modernization across UX, frontend, backend and operations. For deciding between redesign and rebuild, see [[/blogs/website-redesign-vs-rebuild|redesign vs rebuild]].",
        ],
      },
      {
        heading: "Modernization, Redesign and Replatforming",
        body: [],
        table: {
          headers: ["Approach", "Changes", "When"],
          rows: [
            ["Redesign", "Visual design, layouts, journeys", "The platform and code are healthy; experience is dated"],
            ["Modernization", "UX plus frontend, backend, integrations, operations", "Constraints across experience and technology"],
            ["Replatforming", "Platform itself", "The platform can't meet requirements"],
          ],
        },
      },
      {
        heading: "Step 1: Audit",
        body: [
          "Audit each layer against current needs: UX and conversion (analytics, usability testing), frontend (performance, rendering, code quality), backend and platform (versions, customizations, data model), integrations (reliability, manual steps), accessibility (WCAG conformance), security and operations (deployment, monitoring). Record constraints with evidence. See [[/blogs/ecommerce-architecture-audit|ecommerce architecture audit]] for a structured framework.",
        ],
      },
      {
        heading: "Step 2: Prioritize",
        body: [
          "Rank constraints by customer and revenue impact, risk, effort and dependencies. Constraints that block other work (an unsupported theme that prevents new features, an integration that breaks with every change) often come first even if they aren't visible to customers.",
        ],
        table: {
          headers: ["Constraint", "Impact", "Risk", "Priority"],
          rows: [
            ["Unsupported theme or platform version", "Blocks features", "Security", "High"],
            ["Slow product and category templates", "Conversion, SEO", "Low", "High"],
            ["Manual order export to ERP", "Staff time, errors", "Medium", "Medium"],
            ["Inaccessible checkout components", "Customers excluded", "Legal", "High"],
            ["Inconsistent product data", "Search, filters", "Low", "Medium"],
          ],
        },
      },
      {
        heading: "Step 3: UX Modernization",
        body: [
          "Modernize journeys that matter most: mobile product pages, navigation and search, cart and checkout, accounts. Base changes on research and analytics, not trends. Introduce a design system (tokens and components) so new UI stays consistent and faster to build. See [[/blogs/ecommerce-website-redesign|ecommerce website redesign]] and [[/blogs/design-systems-for-teams-that-move-fast|design systems]].",
        ],
        cta: {
          title: "Store feeling outdated, but a full rebuild feels risky?",
          description: "ZSpace audits ecommerce stacks and plans phased modernization that delivers improvements without a big-bang rebuild.",
        },
      },
      {
        heading: "Step 4: Frontend and Performance",
        body: [
          "Measure real-user Core Web Vitals and address the biggest causes: excess third-party scripts and apps, unoptimized images and fonts, render-blocking resources, heavy client-side rendering and slow server responses. Consider the rendering approach (server rendering, static generation with revalidation, or theme optimization) that fits your platform. Performance improvements help both conversion and search. See [[/blogs/website-performance-optimization|website performance optimization]] and [[/blogs/shopify-core-web-vitals-performance-guide|Core Web Vitals]].",
        ],
      },
      {
        heading: "Step 5: Backend, Data and Integrations",
        body: [
          "Upgrade platform versions, remove unused customizations, clean the product data model and replace fragile point-to-point integrations with reliable patterns (webhooks, queues, retries, monitoring). Remove manual processes such as spreadsheet imports and order re-keying. See [[/blogs/ecommerce-api-integration|ecommerce API integration]] and [[/blogs/ecommerce-technical-debt|ecommerce technical debt]].",
        ],
      },
      {
        heading: "Step 6: Accessibility",
        body: [
          "Use modernization to meet WCAG success criteria: keyboard access, focus states, colour contrast, form labels and errors, accessible names for icon buttons, and screen-reader-friendly carousels, filters and checkout. Accessibility requirements apply to ecommerce in several markets, and fixing them during modernization is cheaper than retrofitting later. See [[/blogs/website-accessibility-guide|website accessibility]].",
        ],
      },
      {
        heading: "Step 7: Operations",
        body: [],
        checklist: [
          "Version control and automated deployments",
          "Staging environment with realistic data",
          "Automated tests for checkout and critical flows",
          "Error and performance monitoring with alerts",
          "Regular dependency and security updates",
          "Documented integrations with owners",
        ],
      },
      {
        heading: "Protecting SEO During Modernization",
        body: [
          "Template, rendering and URL changes can affect search visibility. Keep URLs stable where possible and treat any change as a migration with redirects; make sure content, metadata and structured data render server-side or are otherwise accessible to crawlers; and compare organic performance by page type after each release. See [[/blogs/ecommerce-platform-migration|ecommerce platform migration]].",
        ],
      },
      {
        heading: "When Modernization Becomes Replatforming",
        body: [
          "If the audit shows that the platform itself blocks essential requirements (market expansion, B2B, performance at scale, integrations) or that customization has made upgrades impossible, replatforming may be the modernization step that unlocks everything else. See [[/blogs/ecommerce-replatforming|ecommerce replatforming]] and [[/blogs/legacy-ecommerce-migration|legacy ecommerce migration]].",
        ],
      },
      {
        heading: "Worked Example: A Phased Modernization",
        body: [
          "An illustrative scenario, not a client case: a retailer's store runs an old, heavily customized theme with twenty apps, slow product pages and manual order exports. Phase one replaces the theme with a maintained one built on a component system, removes unused apps and fixes accessibility in checkout-adjacent pages. Phase two replaces manual exports with an ERP integration using webhooks and a queue. Phase three rebuilds search and filters on cleaned product data. Each phase has baseline metrics (Core Web Vitals, conversion, staff time on manual tasks) and ships independently.",
        ],
      },
      {
        heading: "Measuring Modernization",
        body: [
          "Each phase should have metrics tied to the constraint it removes: Core Web Vitals and conversion for frontend work, release frequency and lead time for platform and code work, incident counts for integration work, hours of manual effort for automation, and accessibility issue counts for accessibility work. Compare against the baseline recorded during the audit, and report results to stakeholders to keep support for later phases. See [[/blogs/ecommerce-analytics|ecommerce analytics]].",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Treating modernization as a visual redesign only",
          "Big-bang rebuilds with no interim value",
          "Replatforming when the platform wasn't the constraint",
          "Ignoring accessibility until after launch",
          "Changing URLs without redirects",
          "No baseline metrics",
        ],
        cta: {
          title: "Ready to plan your store's modernization?",
          description: "Talk to ZSpace about [[/services/website-development|ecommerce modernization]], [[/services/ui-ux-design|UX modernization]] and [[/services/cro-audit|conversion audits]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Modernization is about removing constraints in the right order: audit, prioritize, fix what blocks everything else, then improve UX, frontend, data and operations in phases, protecting SEO throughout. For a roadmap format, see [[/blogs/ecommerce-technology-modernization-roadmap|ecommerce technology modernization roadmap]].",
        ],
      },
    ],
  },

  // --------------------------------------- 255 · LEGACY MIGRATION
  {
    slug: "legacy-ecommerce-migration",
    title: "Legacy Ecommerce Migration: How to Replace an Outdated Technology Stack",
    seoTitle: "Legacy Ecommerce Migration: Replace an Outdated Tech Stack",
    excerpt: "How to replace a legacy ecommerce stack: discovery, data, integrations and APIs, incremental migration patterns, testing, parallel running and rollout.",
    category: "Web Development",
    banner: "stranglerflow",
    bannerAlt: "Incremental legacy migration: legacy system, routing layer (highlighted), new service per domain, shift traffic, retire the legacy part, moving one capability at a time and keeping both running until verified.",
    date: "2026-09-29",
    readingTime: "20 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["ecommerce", "retail", "manufacturing"],
    faqs: [
      { q: "What is a legacy ecommerce migration?", a: "Replacing an outdated ecommerce stack (often a heavily customized or unsupported platform, custom code and point-to-point integrations) with modern platforms and services, while keeping the business running." },
      { q: "Should legacy migrations be big-bang or incremental?", a: "It depends on the system and risk tolerance. Incremental approaches move capabilities one at a time behind a routing layer, reducing risk; big-bang cutovers can suit smaller, simpler systems when a clean switch is feasible." },
      { q: "What is the strangler fig pattern?", a: "An incremental migration pattern where a routing layer sends some requests to new components while the rest still go to the legacy system, gradually replacing it until the legacy system can be retired." },
      { q: "What should be migrated first?", a: "Often a capability with clear boundaries and high value or high pain, such as the storefront frontend, search or content, rather than the most entangled core (orders, payments) first." },
      { q: "How do you keep data consistent during incremental migration?", a: "Define which system owns each data type at each stage, synchronize through events or scheduled syncs, and reconcile regularly. Avoid two systems writing the same data." },
      { q: "How are legacy integrations handled?", a: "Inventory them, document what each does, and replace them with reliable integrations through APIs, events or middleware, often in parallel with the old ones until verified." },
      { q: "What is parallel running?", a: "Running the old and new systems side by side for a period and comparing outputs (for example order totals or tax calculations) before relying on the new one." },
      { q: "How do I test a legacy migration?", a: "With automated tests for critical flows, data validation and reconciliation reports, performance tests, rehearsed cutovers and user acceptance testing by the teams who use the system daily." },
      { q: "What are the biggest risks?", a: "Undocumented behaviour in the legacy system, data quality problems, integrations nobody knew about, underestimated timelines, and business disruption during cutover." },
      { q: "How long does a legacy migration take?", a: "It depends on scope. Incremental migrations often run as programmes over many months, delivering value in stages." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Legacy ecommerce migration replaces an outdated stack while the business keeps trading. Start with discovery: document what the legacy system does (including undocumented behaviour), its data and every integration. Decide the target architecture. Prefer incremental migration for complex systems: put a routing layer in front, move one capability at a time (often storefront, content or search first), define data ownership at each stage, sync and reconcile, run old and new in parallel where outputs must match, and retire legacy components once verified. Test critical flows automatically and rehearse cutovers.",
        ],
      },
      {
        heading: "What Makes a Stack “Legacy”",
        body: [
          "Legacy doesn't just mean old. A system becomes legacy when it's hard to change safely: unsupported platform versions, heavy customization that blocks upgrades, knowledge held by a few people, missing tests, brittle integrations and data models that no longer fit the business. The risk isn't only technical; it's that the business can't respond to new requirements. For earlier-stage improvements, see [[/blogs/ecommerce-website-modernization|ecommerce website modernization]].",
        ],
      },
      {
        heading: "Discovery: Know What You're Replacing",
        body: [
          "Legacy systems often do more than anyone remembers: tax rules embedded in code, special pricing for certain customers, nightly jobs that fix data, emails triggered by obscure conditions. Discovery should document functions, data, integrations, scheduled jobs and business rules, using code review, logs, database analysis and interviews with the teams who use the system.",
        ],
        checklist: [
          "Functional inventory: what the system does, by capability",
          "Business rules embedded in code or configuration",
          "Data model, volumes and quality issues",
          "Integrations: inbound, outbound, file-based, scheduled",
          "Scheduled jobs and scripts",
          "Users, roles and admin workflows",
          "Performance and peak load characteristics",
        ],
      },
      {
        heading: "Choosing a Migration Strategy",
        body: [],
        table: {
          headers: ["Strategy", "How it works", "Suits", "Risk"],
          rows: [
            ["Big-bang cutover", "Migrate everything, switch in one event", "Smaller, simpler systems", "Concentrated at cutover"],
            ["Incremental (strangler)", "Route capabilities to new components over time", "Complex, business-critical systems", "Spread out; needs sync"],
            ["Phased by market or brand", "Move one storefront or region at a time", "Multi-store businesses", "Duplicated operations for a while"],
            ["Rebuild alongside", "New system built in parallel, then switched", "When incremental routing is impractical", "Long period without value"],
          ],
        },
      },
      {
        heading: "The Strangler Pattern for Ecommerce",
        body: [
          "The strangler pattern puts a routing layer (reverse proxy, CDN rules or API gateway) in front of the legacy system. Requests for migrated capabilities go to new components; everything else still goes to the legacy system. Over time, more routes move until the legacy system handles nothing and can be retired. The flow above shows the cycle for each capability.",
          "In ecommerce, typical sequences move content and the storefront first (for example a new frontend using platform APIs), then search, then catalog and pricing, and finally orders, payments and customer accounts, which are the most entangled. Each step has its own data ownership rules and verification.",
        ],
        code: {
          label: "Routing layer rules during migration (outline)",
          text: "/blog/*, /guides/*        -> new CMS + frontend\n/search*                  -> new search service\n/products/*, /collections/* -> new frontend (catalog via legacy API until migrated)\n/cart, /checkout/*        -> legacy (migrated last)\n/account/*                -> legacy\ndefault                   -> legacy",
        },
      },
      {
        heading: "Data Ownership During Migration",
        body: [
          "The most dangerous state in an incremental migration is two systems writing the same data. For each data type and stage, define which system owns it (writes) and which read copies. Synchronize through events or scheduled syncs, and reconcile regularly. Change ownership deliberately, with a cutover for that data type. See [[/blogs/ecommerce-erp-integration|ecommerce ERP integration]] for field-ownership practice.",
        ],
        table: {
          headers: ["Stage", "Catalog owner", "Orders owner", "Customers owner"],
          rows: [
            ["1: New frontend", "Legacy", "Legacy", "Legacy"],
            ["2: New catalog/PIM", "New", "Legacy", "Legacy"],
            ["3: New commerce platform", "New", "New", "New (migrated)"],
            ["4: Legacy retired", "New", "New", "New"],
          ],
        },
        cta: {
          title: "Stuck on a legacy commerce stack?",
          description: "ZSpace plans incremental migrations that move capabilities safely while the business keeps trading.",
        },
      },
      {
        heading: "Integrations and APIs",
        body: [
          "Legacy stacks often rely on file transfers, direct database access and point-to-point scripts. Replace them with documented APIs, webhooks and middleware with retries and monitoring. During migration, integrations may need to talk to both systems; an integration layer that abstracts the source makes switching easier. Inventory integrations nobody owns; they're a common source of surprises. See [[/blogs/ecommerce-api-integration|ecommerce API integration]].",
        ],
      },
      {
        heading: "Testing and Parallel Running",
        body: [
          "Build automated tests for critical flows (search, add to cart, checkout, payments, order export) before migrating them, so you can verify behaviour on both systems. For calculations that must match (tax, pricing, promotions, shipping), run old and new in parallel on the same inputs and compare outputs. Rehearse each cutover with production-like data and have teams who use the system daily do acceptance testing.",
        ],
        checklist: [
          "Automated tests for critical user flows",
          "Parallel runs for pricing, promotions, tax and shipping",
          "Data reconciliation reports",
          "Performance tests at expected peak",
          "Rehearsed cutovers with timings",
          "Rollback plan for each step",
        ],
      },
      {
        heading: "SEO and Customer Continuity",
        body: [
          "Every step that changes URLs, templates or rendering needs SEO handling: redirects, metadata, structured data and monitoring. Customer-facing changes (sign-in, account data, subscriptions) need communication. See [[/blogs/ecommerce-platform-migration|ecommerce platform migration]] for the detailed checklist.",
        ],
      },
      {
        heading: "Rollout and Retirement",
        body: [
          "Move traffic gradually where possible (a percentage of users, one market, one category), watch metrics and errors, then complete the switch. Once a capability is fully migrated and verified, retire the legacy component: remove routes, stop syncs, archive data according to retention rules and decommission infrastructure. Unretired legacy components keep costing money and risk.",
        ],
      },
      {
        heading: "Worked Example: Retiring a Custom Platform",
        body: [
          "An illustrative scenario, not a client case: a retailer runs a custom-built commerce platform that only two developers understand. Discovery documents pricing rules, promotions and twelve integrations. The migration puts a CDN-based routing layer in front, launches a new frontend and CMS for content pages first, then moves catalog data into a PIM feeding both systems, then migrates to a commerce platform market by market, with parallel runs comparing order totals and tax. Legacy components are retired after each market is stable. Each stage ships value (faster pages, easier content editing) rather than waiting for the end.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Skipping discovery of undocumented behaviour",
          "Migrating the most entangled capability first",
          "Two systems writing the same data",
          "No automated tests before migration",
          "Forgetting file-based and scheduled integrations",
          "Never retiring legacy components",
        ],
        cta: {
          title: "Ready to plan a legacy migration?",
          description: "Talk to ZSpace about [[/services/website-development|legacy commerce migration]] and [[/services/ai-automation|integration and process automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Legacy migrations succeed when they're treated as a sequence of safe, verifiable steps: understand the old system, route capabilities one by one, control data ownership, test and run in parallel where it matters, and retire what you've replaced. For the target architecture, see [[/blogs/ecommerce-microservices-vs-monolith|microservices vs monolith]] and [[/blogs/headless-ecommerce-architecture|headless ecommerce architecture]].",
          "For related guides, see [[/blogs/ecommerce-parallel-run|parallel runs]] and [[/blogs/ecommerce-data-migration|data migration]].",
        ],
      },
    ],
  },
];
