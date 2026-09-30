import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch eight, part one: marketplace seller
 * onboarding, marketplace scalability, replenishment and loyalty
 * programmes. The marketplace hub is `marketplace-website-development`;
 * loyalty UX is `ecommerce-loyalty-program-ux`; reorder UX is
 * `ecommerce-reorder-experience`. Merged into `posts` in blog-data.ts.
 */

export const commercePosts62: BlogPost[] = [
  // ---------------------------------------- 365 · SELLER ONBOARDING
  {
    slug: "ecommerce-marketplace-seller-onboarding",
    title: "Ecommerce Marketplace Seller Onboarding: How to Design the Experience",
    seoTitle: "Marketplace Seller Onboarding: How to Design the Experience",
    excerpt: "How to design marketplace seller onboarding: registration, verification, payout setup, first listings, progressive onboarding, education and activation metrics.",
    category: "UI/UX",
    banner: "selleronboardflow",
    bannerAlt:
      "Seller onboarding flow: apply, verify business, payout setup (highlighted), first listing, review and approve, first sale, noting to ask for what each step needs, when it needs it.",
    date: "2026-09-30",
    readingTime: "16 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development", "ai-automation"],
    relatedIndustrySlugs: ["ecommerce", "retail"],
    faqs: [
      { q: "What is marketplace seller onboarding?", a: "The process that takes a seller from first interest to their first sale: registration, business and identity verification, payout setup, agreeing to terms, creating listings, approval and learning how to operate on the marketplace." },
      { q: "What information should a marketplace collect from sellers?", a: "Typically business details, contact information, identity and business verification data required by the payment provider and applicable law, payout account details, tax information where required, and operational details such as shipping and returns settings." },
      { q: "What is KYC for marketplace sellers?", a: "Know Your Customer checks verify the identity of sellers and business owners before they can receive payouts. Requirements depend on the payment provider, the countries involved and applicable regulations; many marketplaces rely on their payment provider's hosted onboarding for this." },
      { q: "What is progressive onboarding?", a: "Collecting information in stages, asking only for what's needed to reach the next milestone. A seller might explore the dashboard and draft listings before completing payout verification, which is required before going live or receiving funds." },
      { q: "How long should seller onboarding take?", a: "As short as your verification and quality requirements allow. Measure time from signup to first live listing and to first sale, and remove steps that don't protect buyers, sellers or the marketplace." },
      { q: "Should every seller be manually approved?", a: "Not necessarily. Many marketplaces automate approval for low-risk categories and review manually for regulated or high-risk categories, new sellers with unusual patterns, or when verification fails." },
      { q: "How do you help sellers create good listings?", a: "Provide category templates with required attributes, examples, image guidelines, validation that explains errors, bulk import for larger catalogs and a preview of how the listing will look to buyers." },
      { q: "What are common reasons sellers abandon onboarding?", a: "Unclear requirements, long forms, verification failures without explanation, unexpected fees, difficult listing tools and no help when stuck." },
      { q: "Which metrics measure onboarding?", a: "Signup-to-verified rate, time to first live listing, time to first sale, drop-off by step, verification failure reasons, support contacts per onboarding and early seller retention." },
      { q: "Can onboarding be automated with AI?", a: "Some steps can be assisted: extracting data from documents, suggesting categories and attributes for listings, answering seller questions. Verification decisions and policy exceptions should follow provider rules and human review where required." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Good seller onboarding gets legitimate sellers to their first live listing and first sale quickly while meeting verification and quality requirements. Collect information progressively: a short registration, business verification and payout setup through your payment provider, clear terms and fees, guided listing creation with templates and validation, then approval rules based on risk. Show a checklist of remaining steps, explain every failure, offer help where sellers get stuck, and measure drop-off by step and time to first sale.",
        ],
      },
      {
        heading: "Why Onboarding Shapes the Marketplace",
        body: [
          "A marketplace's catalog is only as good as the sellers who get through onboarding. If the process is slow or confusing, good sellers give up and supply stays thin. If it's too loose, poor sellers get in and buyers lose trust. Onboarding is where the marketplace balances growth against quality.",
          "Onboarding also sets expectations. Sellers learn the fees, the rules, what buyers expect and how the dashboard works. A seller who understands these on day one creates fewer support tickets and disputes later. For the wider marketplace build, see [[/blogs/marketplace-website-development|ecommerce marketplace development]] and [[/blogs/multi-vendor-ecommerce-marketplace|multi-vendor ecommerce]].",
        ],
      },
      {
        heading: "The Onboarding Stages",
        body: [],
        table: {
          headers: ["Stage", "Seller goal", "Marketplace goal", "Typical requirements"],
          rows: [
            ["Registration", "Get started quickly", "Capture intent and contact", "Email, business name, category, country"],
            ["Verification", "Get approved", "Know who is selling", "Business and identity data via payment provider"],
            ["Payout setup", "Get paid", "Enable compliant payouts", "Bank account, tax details where required"],
            ["Terms and fees", "Understand costs", "Agreement to rules", "Seller agreement, fee schedule, policies"],
            ["Store setup", "Look professional", "Consistent buyer experience", "Profile, shipping, returns, handling times"],
            ["First listings", "Start selling", "Quality catalog", "Attributes, images, pricing, stock"],
            ["Approval", "Go live", "Protect buyers", "Automatic or manual review by risk"],
            ["First sale", "Earn", "Activated seller", "Fulfilment and tracking"],
          ],
        },
      },
      {
        heading: "Registration: Keep It Short",
        body: [
          "The first form should ask only for what's needed to create an account and route the seller: email, business name, country, main category and perhaps expected catalog size. Everything else can come later. Let sellers save progress and return, and send a link back to where they stopped.",
          "Use the registration to set expectations: show the steps ahead, roughly how long each takes, and what documents they'll need. Sellers who know they'll need business registration details and a bank account can prepare them rather than abandoning halfway.",
        ],
      },
      {
        heading: "Verification and KYC",
        body: [
          "Before sellers receive money, marketplaces usually need to verify who they are. Requirements come from payment providers, card networks and law, and vary by country and business type. Many marketplaces use their payment provider's hosted or embedded onboarding, which collects and verifies the required information and keeps the requirements current. Stripe Connect, for example, offers hosted and embedded onboarding for connected accounts ([[https://docs.stripe.com/connect/onboarding|Stripe documentation]]).",
          "Design around verification rather than hiding it. Explain why information is needed, show which items are pending, and when verification fails, say what's wrong and how to fix it. Verification should not be treated as legal advice to sellers; point them to the provider's guidance and your support team.",
        ],
        checklist: [
          "Explain why each piece of information is required",
          "Use the payment provider's onboarding where possible",
          "Show verification status and pending items clearly",
          "Explain failures with specific next steps",
          "Notify sellers when new information is requested",
          "Keep sensitive documents out of your own systems unless necessary",
        ],
      },
      {
        heading: "Payout Setup",
        body: [
          "Payout setup is where sellers see how and when they'll be paid. Show the payout schedule, any holding period for new sellers, currencies supported, and how fees are deducted. Surprises here cause distrust. See [[/blogs/marketplace-payment-architecture|marketplace payments]] and [[/blogs/marketplace-commission-system|marketplace commission models]].",
        ],
      },
      {
        heading: "Progressive Onboarding",
        body: [
          "Progressive onboarding lets sellers do useful work before every requirement is complete. A seller might set up their profile and draft listings while verification is pending, with listings going live once verification and approval finish. This keeps momentum and shows sellers the value of the marketplace early.",
          "Decide which milestones unlock which actions. A common pattern: account creation unlocks the dashboard and drafts; verification unlocks going live; payout setup unlocks receiving funds; a good track record unlocks faster payouts or higher limits.",
        ],
        table: {
          headers: ["Milestone", "Unlocks"],
          rows: [
            ["Account created", "Dashboard, profile, draft listings, help centre"],
            ["Business verified", "Listings can go live (after approval)"],
            ["Payout account verified", "Receiving payouts"],
            ["First orders fulfilled on time", "Standard payout schedule, more categories"],
            ["Strong performance history", "Higher limits, promotional programmes"],
          ],
        },
        cta: {
          title: "Sellers dropping out before they list?",
          description: "ZSpace designs marketplace onboarding flows and seller dashboards that get good sellers live faster.",
        },
      },
      {
        heading: "First Listings",
        body: [
          "Listing creation is where many new sellers get stuck. Provide category templates with required and recommended attributes, examples of good listings, image requirements with previews, and validation that explains what's wrong in plain language. For sellers with larger catalogs, offer spreadsheet or feed imports with a validation report, and integrations with common inventory systems.",
          "Show a buyer-facing preview so sellers see how their listing will appear. Normalized attributes matter for search and filters across sellers; see [[/blogs/marketplace-search-and-filters|marketplace search]].",
        ],
      },
      {
        heading: "Approval Rules by Risk",
        body: [
          "Manual review of every seller doesn't scale and slows good sellers. Risk-based approval applies automatic approval where risk is low and manual review where it matters: regulated categories, high-value goods, unusual patterns or failed checks. Make review queues visible to operators with the information they need, and tell sellers how long review usually takes.",
        ],
      },
      {
        heading: "Seller Education",
        body: [
          "Sellers need to learn the marketplace's rules and tools: listing standards, handling times, shipping and returns expectations, messaging rules, performance metrics and how disputes work. Short, task-based guides inside the dashboard work better than long manuals. Link each onboarding step to the relevant guide, and highlight the metrics that affect a seller's standing. See [[/blogs/marketplace-seller-dashboard|marketplace seller dashboard]].",
        ],
      },
      {
        heading: "The Onboarding Checklist UI",
        body: [
          "A visible checklist in the dashboard keeps sellers oriented: completed steps, the next step, pending verification items and estimated time. Each item links straight to where the task is done. Once onboarding is complete, the checklist gives way to the normal dashboard with tasks such as orders to ship.",
        ],
        checklist: [
          "Create your store profile",
          "Verify your business",
          "Add payout details",
          "Set shipping and returns",
          "Create your first listing",
          "Review fees and seller policies",
          "Go live",
        ],
      },
      {
        heading: "Measuring Onboarding",
        body: [],
        table: {
          headers: ["Metric", "What it shows"],
          rows: [
            ["Drop-off by step", "Where sellers give up"],
            ["Time to first live listing", "Setup friction"],
            ["Time to first sale", "Whether sellers find buyers"],
            ["Verification failure reasons", "Unclear requirements or data problems"],
            ["Support contacts per onboarding", "Confusing steps"],
            ["Seller activity after 30 and 90 days", "Onboarding quality, not only speed"],
          ],
        },
      },
      {
        heading: "Where Automation and AI Help",
        body: [
          "Automation can pre-fill forms from business registries where permitted, suggest categories and attributes from product titles and images, flag incomplete listings and answer common seller questions. AI assistance is useful for drafting listing content from supplier data, with sellers reviewing it. Verification decisions follow the payment provider's processes and applicable rules. See [[/blogs/ai-agents-for-ecommerce|AI agents for ecommerce]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a crafts marketplace sees many sellers register but few go live. Step analysis shows most drop at a long form combining business details, tax information and listing rules. The team splits onboarding into milestones, moves verification to the payment provider's embedded flow, lets sellers draft listings while verification is pending, and adds a listing template with examples. They then track time to first live listing and 90-day seller activity.",
        ],
      },
      {
        heading: "Onboarding Different Seller Types",
        body: [
          "Sellers differ. A hobbyist with ten items needs a guided, form-based setup; a brand with thousands of SKUs needs feeds, APIs and an account manager; a regulated seller needs extra documentation. Offer paths by seller type, chosen at registration, so each sees relevant steps.",
        ],
        table: {
          headers: ["Seller type", "Onboarding focus"],
          rows: [
            ["Individual or small business", "Guided forms, templates, help content"],
            ["Established brand", "Bulk import, integrations, catalog matching"],
            ["Enterprise seller", "API access, dedicated support, contract terms"],
            ["Regulated category seller", "Extra documents, manual review"],
          ],
        },
      },
      {
        heading: "Activation After Go-Live",
        body: [
          "Onboarding doesn't end when listings go live. New sellers need their first sale to stay engaged. Help them with launch guidance (pricing, images, shipping promises), highlight new sellers fairly in discovery where appropriate, and check in if nothing sells in the first weeks. Track 30- and 90-day seller activity to judge onboarding quality, not just completion.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "One long form asking for everything up front",
          "Verification failures without explanation",
          "Fees revealed late",
          "Listing tools without templates or validation",
          "Manual review for every seller regardless of risk",
          "Measuring signups instead of first sales",
        ],
        cta: {
          title: "Planning seller onboarding for a new marketplace?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|marketplace UX]], [[/services/website-development|marketplace development]] and [[/services/ai-automation|onboarding automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Seller onboarding balances speed with trust. Collect information progressively, use your payment provider's verification, make fees and rules clear, guide first listings, approve by risk and measure time to first sale. Related: [[/blogs/multi-vendor-ecommerce-ux|marketplace UX]] and [[/blogs/marketplace-order-management|marketplace order management]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 369 · MARKETPLACE SCALABILITY
  {
    slug: "ecommerce-marketplace-scalability",
    title: "Ecommerce Marketplace Scalability: How to Build for Thousands of Sellers",
    seoTitle: "Marketplace Scalability: How to Build for Thousands of Sellers",
    excerpt: "How to scale a marketplace: catalog and search growth, multi-tenant data, queues and async processing, seller isolation, APIs, observability and load planning.",
    category: "Web Development",
    banner: "mkscalearch",
    bannerAlt:
      "Marketplace scalability in four columns: catalog (listings per seller, normalized attributes, search index, bulk import), data (tenant keys, read replicas, partitioning, caching), processing (queues, async jobs, webhooks, rate limits per seller, highlighted) and operations (observability, seller isolation, load tests, runbooks), noting that one seller's bulk upload must not slow every buyer.",
    date: "2026-09-30",
    readingTime: "17 min read",
    relatedServiceSlugs: ["website-development", "ai-automation", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "retail", "saas-technology"],
    faqs: [
      { q: "What makes marketplace scalability different from store scalability?", a: "Marketplaces grow along more dimensions: many sellers adding and updating listings, bulk imports, per-seller orders and payouts, seller-facing APIs and dashboards, plus buyer traffic. Load from sellers can affect buyers if the architecture doesn't separate them." },
      { q: "What is seller isolation?", a: "Designing the system so one seller's activity, such as a large import or API burst, can't degrade the experience for other sellers or buyers. Techniques include per-seller rate limits, separate queues and resource quotas." },
      { q: "Should a marketplace use microservices?", a: "Not by default. Many marketplaces start as a well-structured monolith and extract services where scaling or team boundaries require it, such as search, payments or notifications." },
      { q: "How should search scale on a marketplace?", a: "Use a dedicated search engine fed by asynchronous indexing, normalize seller data before indexing, and plan for index updates from bulk imports without blocking buyer queries." },
      { q: "Why are queues important?", a: "Queues let the system accept work (imports, notifications, payouts, webhooks) quickly and process it at a controlled rate, smoothing spikes and allowing retries when downstream systems fail." },
      { q: "What is multi-tenancy in a marketplace?", a: "Storing many sellers' data in a shared system while keeping it separated by seller identifiers, access controls and, where needed, separate partitions." },
      { q: "How do I plan for traffic peaks?", a: "Load test key journeys, cache catalog pages at the edge, protect checkout and inventory reservation, scale stateless services horizontally, and have runbooks for degradation." },
      { q: "What should be monitored?", a: "Buyer journey health (search, product pages, checkout), seller tools (imports, order updates), queue depth, error rates, latency by endpoint, payment and payout jobs, and third-party dependencies." },
      { q: "Can a marketplace scale on a SaaS platform?", a: "Some marketplace platforms and plugins scale well for their intended use. Limits often appear in custom commission logic, seller tooling, APIs and catalog size. Evaluate against your expected seller and listing counts." },
      { q: "When should we invest in scalability?", a: "Before known growth events and when metrics show strain, not years in advance. Design so parts can scale later without rewrites, and avoid premature complexity." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "To build a marketplace for thousands of sellers, separate seller workloads from buyer workloads. Normalize and index the catalog asynchronously, run imports, notifications, webhooks and payouts through queues, apply per-seller rate limits and quotas, and design data with clear seller ownership for access control and partitioning. Cache buyer-facing pages, protect checkout and inventory reservation, monitor queues and key journeys, and load test before growth events. Start with a well-structured system and extract services only where scale demands it.",
        ],
      },
      {
        heading: "The Dimensions of Marketplace Scale",
        body: [
          "A single-brand store scales mainly with buyer traffic and catalog size. A marketplace adds sellers as a second population, each with their own listings, orders, payouts, integrations and dashboards. Sellers generate heavy, bursty workloads: a bulk upload of 50,000 listings, an inventory sync every few minutes, a price update across a catalog. Without separation, those workloads compete with buyers for the same resources.",
          "For general store scalability, see [[/blogs/ecommerce-scalability|ecommerce scalability]]. This article covers what marketplaces add. For the marketplace build overall, see [[/blogs/marketplace-website-development|ecommerce marketplace development]].",
        ],
        table: {
          headers: ["Dimension", "Grows with", "Pressure point"],
          rows: [
            ["Buyer traffic", "Marketing, seasonality", "Search, product pages, checkout"],
            ["Catalog size", "Sellers × listings", "Indexing, storage, attribute normalization"],
            ["Seller activity", "Seller count, integrations", "Imports, API calls, dashboard queries"],
            ["Orders", "Sales volume", "Split orders, notifications, inventory"],
            ["Money movement", "Orders, sellers", "Payout jobs, reconciliation, ledgers"],
            ["Operations", "All of the above", "Support tools, moderation, reporting"],
          ],
        },
      },
      {
        heading: "Catalog and Listing Scale",
        body: [
          "Marketplace catalogs grow faster than store catalogs because every seller adds listings, often with duplicates of the same product. Normalizing attributes and matching listings to shared product records keeps the catalog manageable and improves search. Store listings with a clear owner (the seller), versioned changes and moderation status.",
          "Bulk import is a core scaling feature. Accept files or feeds, validate asynchronously, and return a report of errors rather than blocking the seller's session. Process large imports in chunks through queues so they don't slow everything else.",
        ],
      },
      {
        heading: "Search Architecture",
        body: [
          "Buyer search should run on a dedicated search engine fed by an indexing pipeline, not directly on the transactional database. Listing changes go into a queue; the indexer updates the search index at a controlled rate. During large imports, prioritize updates that affect availability and price. Keep search relevance and offer grouping in the index design. See [[/blogs/marketplace-search-and-filters|marketplace search]] and [[/blogs/ecommerce-search-ranking|search ranking]].",
        ],
      },
      {
        heading: "Data Architecture and Multi-Tenancy",
        body: [
          "Most marketplaces store all sellers' data in shared databases, separated by seller identifiers. Every query that serves a seller must be scoped to that seller, enforced in the data access layer rather than left to individual endpoints, since a missed filter can expose another seller's data. As volume grows, read replicas handle reporting and dashboard queries, and partitioning by seller or time keeps large tables manageable.",
        ],
        checklist: [
          "Seller ID on every seller-owned record",
          "Access scoping enforced centrally",
          "Reporting on replicas or a warehouse, not the primary database",
          "Partitioning plan for orders, events and ledgers",
          "Archiving policy for old listings and events",
          "Tests that attempt cross-seller access",
        ],
      },
      {
        heading: "Queues and Asynchronous Processing",
        body: [
          "Much marketplace work doesn't need to happen while someone waits: imports, image processing, search indexing, notifications, webhooks to seller systems, payout calculation and report generation. Put these on queues. The web request records the intent and returns; workers process jobs at a controlled rate, retry failures and alert when queues back up.",
          "Design jobs to be idempotent (safe to run twice), since retries happen. Use separate queues for different workloads so a flood of image jobs doesn't delay payment webhooks.",
        ],
        table: {
          headers: ["Workload", "Queue priority", "Notes"],
          rows: [
            ["Payment and order webhooks", "Highest", "Idempotent; alert on backlog"],
            ["Inventory updates", "High", "Affects what buyers can buy"],
            ["Buyer notifications", "High", "Time-sensitive"],
            ["Search indexing", "Medium", "Prioritize price and availability"],
            ["Bulk imports", "Low to medium", "Chunked; per-seller fairness"],
            ["Reports and exports", "Low", "Off-peak where possible"],
          ],
        },
        cta: {
          title: "Marketplace slowing down as sellers grow?",
          description: "ZSpace designs marketplace architectures with queues, isolation and search pipelines built for growth.",
        },
      },
      {
        heading: "Seller Isolation and Fairness",
        body: [
          "Seller isolation prevents one seller from degrading the platform for everyone else. Apply per-seller rate limits on APIs, quotas on imports and exports, fair scheduling in queues (so one seller's 100,000-row upload doesn't block a small seller's 20-row update), and timeouts on expensive dashboard queries. Communicate limits in documentation so sellers can build integrations that respect them.",
        ],
      },
      {
        heading: "APIs for Sellers",
        body: [
          "Larger sellers integrate through APIs or feeds rather than dashboards. Design seller APIs with authentication per seller, clear rate limits, pagination, bulk endpoints for listings and inventory, webhooks for order events, and versioning so changes don't break integrations. Idempotency keys on write operations prevent duplicates when sellers retry. See [[/blogs/ecommerce-api-integration|ecommerce API integration]].",
        ],
      },
      {
        heading: "Buyer-Side Performance",
        body: [
          "Buyer pages should be fast regardless of seller activity. Cache category and product pages at the edge with short lifetimes or event-based invalidation, render availability and price from fast stores, and protect checkout and inventory reservation from contention. Split orders across sellers should be created reliably, with sub-orders processed asynchronously after payment. See [[/blogs/marketplace-order-management|marketplace order management]].",
        ],
      },
      {
        heading: "Money Movement at Scale",
        body: [
          "Payout calculation, commission ledgers and reconciliation grow with orders and sellers. Keep an append-only ledger, run payout batches through queues with checkpoints, and reconcile against payment provider reports automatically. Separate payout processing from buyer-facing systems. See [[/blogs/marketplace-payment-architecture|marketplace payments]].",
        ],
      },
      {
        heading: "Observability",
        body: [],
        table: {
          headers: ["Signal", "Why it matters"],
          rows: [
            ["Search, product page and checkout latency and errors", "Buyer experience"],
            ["Queue depth and age per queue", "Early warning of backlogs"],
            ["Import success rate and duration", "Seller experience"],
            ["API errors and rate-limit hits per seller", "Integration problems"],
            ["Payout job status and reconciliation gaps", "Financial correctness"],
            ["Third-party dependency health", "Payments, shipping, search providers"],
          ],
        },
      },
      {
        heading: "Monolith, Modules or Services",
        body: [
          "Many successful marketplaces start as a modular monolith: one deployable application with clear internal boundaries (catalog, orders, payments, sellers). It's simpler to build and operate. Extract services where there's a clear reason: search usually runs separately from day one, and payments, notifications or media processing may follow when load or team structure demands. Premature microservices add operational cost without solving the real bottlenecks. See [[/blogs/ecommerce-microservices-vs-monolith|microservices vs monolith]].",
        ],
      },
      {
        heading: "Planning for Growth",
        body: [
          "Estimate growth in sellers, listings, orders and traffic for the next year, identify which components will hit limits first, and load test those paths. Before known events (a major seller joining, a promotion), rehearse with realistic data volumes. Write runbooks for degrading gracefully: pausing non-essential jobs, slowing imports, serving cached pages.",
        ],
      },
      {
        heading: "Scaling Operations, Not Only Systems",
        body: [
          "Marketplace scale also strains people: seller support, listing moderation, dispute resolution and payout queries grow with sellers. Automate routine moderation with rules and review queues, give sellers self-service answers in the dashboard, and build operator tools that handle bulk actions. Without this, headcount grows faster than the marketplace.",
        ],
        checklist: [
          "Automated listing checks with review queues",
          "Self-service help inside the seller dashboard",
          "Bulk operator actions with audit logs",
          "Dispute workflows with deadlines",
          "Seller health scoring to focus attention",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a home goods marketplace sees buyer pages slow down every morning when large sellers upload inventory files. The team moves imports to a dedicated low-priority queue with per-seller fair scheduling, indexes price and stock changes first, caches category pages at the edge and adds queue-depth alerts. Buyer page performance stops depending on seller activity, and sellers get import reports by email.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Seller imports running in the same process as buyer requests",
          "Search queries against the transactional database",
          "No per-seller rate limits",
          "One queue for every kind of job",
          "Seller data scoping left to individual endpoints",
          "Microservices before clear boundaries exist",
        ],
        cta: {
          title: "Ready to plan for your next thousand sellers?",
          description: "Talk to ZSpace about [[/services/website-development|marketplace architecture]], [[/services/ai-automation|operations automation]] and [[/services/shopify-development|commerce platform integration]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Marketplaces scale by separating seller workloads from buyer journeys: asynchronous indexing and imports, prioritized queues, seller isolation, scoped data, cached buyer pages and strong observability. Build modularly and extract services when real limits appear. Related: [[/blogs/ecommerce-marketplace-vs-online-store|marketplace vs traditional ecommerce]] and [[/blogs/scalable-website-architecture|scalable website architecture]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 376 · REPLENISHMENT
  {
    slug: "ecommerce-replenishment",
    title: "Ecommerce Replenishment: How to Build Automatic Repeat Purchases",
    seoTitle: "Ecommerce Replenishment: Building Automatic Repeat Purchases",
    excerpt: "How to build ecommerce replenishment: estimating usage, reminders, subscriptions, one-click reorders, predictive timing, customer control and inventory planning.",
    category: "Shopify & Ecommerce",
    banner: "replenishflow",
    bannerAlt:
      "Replenishment flow: first order, estimate usage (highlighted), remind or ship, customer adjusts, reorder and learn timing, noting that the customer stays in control of timing and quantity.",
    date: "2026-09-30",
    readingTime: "16 min read",
    relatedServiceSlugs: ["shopify-development", "ai-automation", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "beauty-personal-care", "food-beverage"],
    faqs: [
      { q: "What is ecommerce replenishment?", a: "Helping customers reorder consumable products before they run out, through reminders, easy reorders, subscriptions or automatic shipments timed to how quickly they use the product." },
      { q: "Which products suit replenishment?", a: "Consumables with predictable use: skincare, supplements, pet food, coffee, cleaning supplies, filters, contact lenses and office or B2B supplies." },
      { q: "How do you estimate when a customer will run out?", a: "Start from product size and typical usage (for example a 30-day supply), then refine with the customer's own reorder history and any quantity or usage information they provide." },
      { q: "What's the difference between replenishment reminders and subscriptions?", a: "Reminders prompt the customer to reorder; the customer decides each time. Subscriptions ship automatically on a schedule until changed. Many stores offer both." },
      { q: "What is predictive replenishment?", a: "Using purchase history and models to estimate each customer's next need and time reminders or suggested orders accordingly. It works best with enough repeat data and still needs customer control." },
      { q: "How do I avoid annoying customers with reminders?", a: "Base timing on actual usage, let customers set or snooze reminders, stop reminding after they reorder elsewhere or say they don't need it, and respect marketing permissions." },
      { q: "Does replenishment require an account?", a: "Not always. Email reminders with a reorder link can work for guests, but accounts make order history, one-click reorders and subscription management much easier." },
      { q: "How does replenishment affect inventory?", a: "Predictable repeat demand improves forecasting. Subscription and reminder schedules can be aggregated into expected demand for purchasing and stock allocation." },
      { q: "How do I measure replenishment?", a: "Reorder rate within the expected window, time between orders, reminder conversion against a holdout, subscription adoption and churn, and customers who lapse." },
      { q: "Can Shopify support replenishment?", a: "Shopify supports subscriptions through selling plans and subscription apps, and reorders through order history and apps. Reminder timing usually comes from email or retention tools." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Ecommerce replenishment helps customers restock consumables before they run out. Estimate usage from product size and each customer's reorder history, then offer the right mechanism: a timely reminder with a one-click reorder link, a subscription with flexible frequency, or both. Keep customers in control with easy skip, snooze, change and cancel options. Use replenishment schedules to improve inventory forecasts, and measure reorder rates within the expected window against a holdout, not just reminder clicks.",
        ],
      },
      {
        heading: "Why Replenishment Deserves Its Own System",
        body: [
          "For consumable products, the second order is predictable in a way it rarely is elsewhere: a 60-day supply of vitamins will run out in about 60 days. If the store isn't there at that moment, the customer may reorder from a competitor, a marketplace or a local shop. Replenishment is about being there at the right time, in the right way, without pestering.",
          "This article covers the mechanics and systems. For repeat purchase strategy broadly, see [[/blogs/ecommerce-repeat-purchases|repeat purchase optimization]]; for the reorder interface, see [[/blogs/ecommerce-reorder-experience|reorder experience]]; for subscriptions, see [[/blogs/subscription-ecommerce-website|subscription ecommerce development]].",
        ],
      },
      {
        heading: "Mechanisms Compared",
        body: [],
        table: {
          headers: ["Mechanism", "How it works", "Best for", "Watch out for"],
          rows: [
            ["Reminder + reorder link", "Message near expected run-out with cart link", "Customers who want control", "Timing accuracy, message fatigue"],
            ["One-click reorder", "Buy again from account or email", "Returning customers", "Price and availability changes"],
            ["Subscription", "Automatic shipments on a schedule", "Stable, predictable use", "Oversupply, churn if inflexible"],
            ["Auto-replenish on usage signal", "Connected device or usage data triggers order", "Specific products with data", "Consent, accuracy, trust"],
            ["B2B scheduled orders", "Recurring purchase orders or saved lists", "Business supplies", "Approvals and budgets"],
          ],
        },
      },
      {
        heading: "Estimating Usage",
        body: [
          "Start with a product-level estimate: pack size divided by typical daily use gives days of supply. Store this as product data (for example a metafield for days of supply per variant). Then refine per customer: after two or three orders, the customer's own median gap is usually a better guide than the product default. Let customers adjust the estimate directly (\"remind me every 45 days\").",
          "Quantity matters. A customer who ordered two units has twice the supply. Households differ. Use the customer's actual gaps where available and ask when the default is likely wrong.",
        ],
        code: {
          label: "Next reminder date (sketch)",
          text: "days_supply = variant.days_of_supply * quantity_ordered\nif customer.orders_of(product) >= 3:\n    days_supply = median(customer.gaps(product))\nif customer.preferred_interval(product):\n    days_supply = customer.preferred_interval(product)\nremind_on = last_order_date + days_supply - lead_time_days   # allow for delivery time",
        },
      },
      {
        heading: "Reminders That Help",
        body: [
          "A good replenishment reminder arrives shortly before the customer runs out, allowing for delivery time. It shows the product they bought, current price and availability, and a link that puts it straight into the cart or a prefilled checkout. It offers alternatives (a larger size, a subscription with savings) without pressure, and lets the customer snooze or stop reminders.",
          "Respect permissions. Replenishment reminders are often marketing messages under email and SMS rules, so they need the right consent. Stop reminding when the customer reorders, subscribes, or tells you they no longer use the product.",
        ],
        checklist: [
          "Timed from usage estimate minus delivery lead time",
          "Product image, size, current price and stock",
          "One-click reorder link to cart or checkout",
          "Snooze, change interval and stop options",
          "Suppressed after a reorder or subscription",
          "Sent only with appropriate consent",
        ],
      },
      {
        heading: "Subscriptions as Replenishment",
        body: [
          "Subscriptions remove the need to remember, which suits customers with stable use. They work when customers can control them: change frequency, skip, pause, swap products and cancel easily. Inflexible subscriptions cause oversupply, which leads to cancellations. Suggest frequency based on the product's days of supply and let customers change it. See [[/blogs/subscription-management-portal|subscription management]] and [[/blogs/subscription-ecommerce-retention|subscription retention]].",
        ],
        cta: {
          title: "Customers not coming back when they run out?",
          description: "ZSpace builds replenishment reminders, reorder flows and subscription options timed to real usage.",
        },
      },
      {
        heading: "Predictive Replenishment",
        body: [
          "With enough history, models can estimate each customer's next purchase date across products, combining gaps, quantities, seasonality and product relationships. Predictions can time reminders more accurately and suggest bundled reorders (\"you're likely to need filters and descaler soon\"). They still need customer control and a baseline to compare against: rules based on days of supply and personal gaps are often surprisingly good. Test predictive timing against rules with a holdout. See [[/blogs/ai-ecommerce|AI in ecommerce]].",
        ],
      },
      {
        heading: "Customer Control and Trust",
        body: [
          "Replenishment feels helpful when customers are in control and intrusive when they aren't. Make intervals visible and editable, allow skipping and snoozing, confirm before any automatic charge where required, and make stopping easy. Subscription and automatic renewal rules apply in many jurisdictions; see [[/blogs/ecommerce-compliance|ecommerce compliance]].",
        ],
      },
      {
        heading: "Inventory and Operations",
        body: [
          "Replenishment creates forecastable demand. Aggregate subscription schedules and expected reorders by product and week to inform purchasing and stock allocation. Protect stock for subscribers during shortages, and communicate proactively when a product will be unavailable, offering alternatives before the shipment date. See [[/blogs/ecommerce-inventory-management-integration|inventory integration]].",
        ],
      },
      {
        heading: "Replenishment for B2B",
        body: [
          "Business buyers replenish supplies on schedules, often with approvals and budgets. Saved lists, scheduled orders, reorder from history and quick order by SKU matter more than marketing reminders. See [[/blogs/b2b-ecommerce-reordering|B2B reordering]].",
        ],
      },
      {
        heading: "Implementation on Shopify",
        body: [
          "On Shopify, subscriptions are implemented with selling plans through subscription apps; days of supply can be stored as product or variant metafields; reorder links can prefill carts using cart permalinks; and reminder timing typically runs in an email or retention platform using order data. Customer accounts show order history for buy-again flows. See [[/blogs/shopify-subscription-store|Shopify subscription store]].",
        ],
      },
      {
        heading: "Measuring Replenishment",
        body: [],
        table: {
          headers: ["Metric", "What it shows"],
          rows: [
            ["Reorder within expected window", "Whether timing and prompts work"],
            ["Median days between orders vs supply", "Accuracy of estimates"],
            ["Reminder conversion vs holdout", "Incremental effect of reminders"],
            ["Subscription adoption and churn", "Fit of automatic shipments"],
            ["Snooze and stop rates", "Timing or relevance problems"],
            ["Stockouts for replenishment products", "Operational reliability"],
          ],
        },
      },
      {
        heading: "Designing the Reorder Moment",
        body: [
          "When the reminder lands, the path to reordering should take seconds: tap the link, see the cart with the same product and quantity, confirm delivery and pay with saved details. Show current price and any change since last time. Offer the option to add related consumables and to switch to a subscription, but keep the primary action a simple reorder. See [[/blogs/ecommerce-reorder-experience|reorder experience]].",
        ],
        checklist: [
          "Link opens a prefilled cart or checkout",
          "Same variant and quantity as last order, editable",
          "Price changes shown",
          "Saved address and payment where the customer is signed in",
          "Subscription option offered, not forced",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a pet food store sends every customer a reminder 30 days after purchase, regardless of bag size. Reminder conversion is low and unsubscribes are high. The team stores days of supply per variant, adjusts for quantity, switches to each customer's own gap after three orders, and adds a snooze option. They compare reorder rates within the expected window against a 10% holdout.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Same reminder timing for every customer and pack size",
          "Reminders that ignore delivery time",
          "Links that land on a product page instead of a ready cart",
          "Rigid subscriptions that oversupply",
          "Reminders continuing after the customer reordered",
          "Crediting reminders with all reorders without a holdout",
        ],
        cta: {
          title: "Ready to time reorders to real usage?",
          description: "Talk to ZSpace about [[/services/shopify-development|Shopify subscriptions and reorders]], [[/services/ai-automation|replenishment automation]] and [[/services/cro-audit|retention measurement]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Replenishment works when timing reflects real usage and customers stay in control. Estimate supply, refine per customer, remind with ready-to-buy links, offer flexible subscriptions, feed schedules into inventory planning and measure against holdouts. Related: [[/blogs/ecommerce-customer-retention|customer retention]] and [[/blogs/ecommerce-retention-analytics|retention analytics]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 377 · LOYALTY PROGRAMS
  {
    slug: "ecommerce-loyalty-programs",
    title: "Ecommerce Loyalty Programs: How to Increase Repeat Purchases",
    seoTitle: "Ecommerce Loyalty Programs: How to Increase Repeat Purchases",
    excerpt: "How to design an ecommerce loyalty programme: goals, points, tiers, rewards, referrals, member pricing, architecture, costs, segmentation and honest measurement.",
    category: "Shopify & Ecommerce",
    banner: "loyaltyarch",
    bannerAlt:
      "Loyalty programme architecture in four columns: earn (purchases, referrals, reviews, profile actions), balance (points ledger, tiers, expiry rules, customer view, highlighted), redeem (discounts, free products, member prices, experiences) and measure (repeat rate, holdouts, cost of rewards, margin).",
    date: "2026-09-30",
    readingTime: "17 min read",
    relatedServiceSlugs: ["shopify-development", "cro-audit", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "beauty-personal-care", "fashion-apparel"],
    faqs: [
      { q: "What is an ecommerce loyalty programme?", a: "A structured way to reward customers for purchases and other actions, such as points, tiers, member prices or perks, designed to encourage repeat purchases and deepen the relationship." },
      { q: "Do loyalty programmes increase sales?", a: "They can, but results vary widely. Many programmes mostly reward customers who would have bought anyway. Measure with a holdout or careful comparison and include the cost of rewards." },
      { q: "Points or tiers: which is better?", a: "Points reward each purchase and are easy to understand; tiers reward cumulative value with status and benefits. Many programmes combine them. The right choice depends on purchase frequency, margins and what customers value." },
      { q: "What rewards work best?", a: "Rewards customers actually want and can reach: discounts, free products, free shipping, early access, member pricing or experiences. Rewards that take too long to earn feel worthless." },
      { q: "How much should a loyalty programme cost?", a: "Model the cost of rewards as a share of revenue at expected redemption rates, plus software and operations. Compare it with the incremental margin you expect from changed behaviour." },
      { q: "Should points expire?", a: "Expiry limits liability and encourages engagement, but aggressive expiry frustrates customers. Clear rules, reminders before expiry and reasonable periods are common. Some jurisdictions regulate expiry and terms." },
      { q: "How does loyalty connect to ecommerce systems?", a: "Through the platform (customer accounts, checkout discounts), the loyalty engine (ledger, rules), email and CRM (messages, segments), POS for omnichannel and analytics for measurement." },
      { q: "What is member pricing?", a: "Lower prices available only to signed-in members. It can encourage sign-ups but must be shown clearly and honestly, and comply with pricing rules in your markets." },
      { q: "How do referrals fit into loyalty?", a: "Referral programmes reward customers for bringing new customers. They're often part of a loyalty programme, with fraud controls to prevent self-referrals." },
      { q: "Is a loyalty programme right for every store?", a: "No. Low-frequency, high-consideration purchases may benefit more from service and post-purchase experience than points. Loyalty works best where repeat purchases are natural." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An effective ecommerce loyalty programme starts from a clear goal, such as more second orders, higher frequency or more referrals, and rewards the behaviours that serve it. Choose a structure (points, tiers, member pricing, paid membership or a mix) that fits purchase frequency and margins, make rewards reachable and visible, integrate the programme with accounts, checkout, email and POS, model reward costs, and measure incremental impact against a holdout rather than counting all members' purchases as programme results.",
        ],
      },
      {
        heading: "Start With the Behaviour You Want",
        body: [
          "Loyalty programmes fail when they're launched because competitors have one. Decide what you want to change. More customers placing a second order? Higher frequency among regular buyers? More reviews or referrals? Higher average order value? Each goal suggests a different design. A programme that rewards every purchase equally may do little for second orders, while a first-reorder bonus may do a lot.",
          "This article covers programme strategy and architecture. For the customer-facing design, see [[/blogs/ecommerce-loyalty-program-ux|ecommerce rewards UX]]. For how loyalty compares with personalization, see [[/blogs/ecommerce-loyalty-vs-personalization|loyalty vs personalization]].",
        ],
        table: {
          headers: ["Goal", "Programme lever"],
          rows: [
            ["More second orders", "Welcome reward redeemable on next order"],
            ["Higher frequency", "Points per order, time-limited bonuses"],
            ["Higher customer value", "Tiers based on annual spend"],
            ["More referrals", "Two-sided referral rewards"],
            ["More reviews and content", "Points for reviews (disclosed, not conditional on sentiment)"],
            ["Account sign-ups", "Member pricing or member-only benefits"],
          ],
        },
      },
      {
        heading: "Programme Structures",
        body: [],
        table: {
          headers: ["Structure", "How it works", "Suits", "Risks"],
          rows: [
            ["Points", "Earn per purchase and action, redeem for rewards", "Frequent purchases", "Slow earning feels pointless"],
            ["Tiers", "Status levels unlock benefits", "Wide spend range", "Complexity, few reach top tiers"],
            ["Member pricing", "Lower prices for signed-in members", "Driving accounts", "Price perception, pricing rules"],
            ["Paid membership", "Fee for ongoing benefits", "Strong recurring value", "Must deliver clear value"],
            ["Cashback / store credit", "Percentage back as credit", "Simple value", "Margin cost"],
            ["Hybrid", "Points plus tiers or perks", "Mature programmes", "Harder to explain"],
          ],
        },
      },
      {
        heading: "Designing Earning Rules",
        body: [
          "Earning rules should be simple enough to explain in one sentence (\"earn 1 point per unit of currency spent\") and generous enough that a typical customer reaches a first reward within a few orders. Add bonus earning for behaviours linked to your goal: a second order within a period, referrals, reviews, completing a profile. Decide how discounts, returns and taxes affect points (points on net spend after returns is common).",
        ],
      },
      {
        heading: "Designing Rewards",
        body: [
          "Rewards must be wanted and reachable. Discounts are easy to understand; free products can cost less at cost price and introduce customers to new items; free shipping removes a common objection; early access and exclusive products add status without direct discounting. Test the perceived value of rewards with customers, and check that the first reward isn't so far away that most members never reach it.",
        ],
      },
      {
        heading: "Economics: Model the Cost",
        body: [
          "Loyalty costs money: rewards redeemed, software, operations and customer service. Model the reward cost as a share of revenue at realistic redemption rates, and outstanding points as a liability. Compare with the incremental margin you expect from changed behaviour, not with total member revenue. Programmes that mainly discount customers who would have bought anyway can reduce margin.",
        ],
        code: {
          label: "Reward cost model (illustrative)",
          text: "points_per_currency = 1\nreward_value_per_100_points = 5          # 5 currency units\nreward_rate = 5 / 100 = 5% of eligible spend\nexpected_redemption = 0.6                # assumption to test\neffective_cost = reward_rate * expected_redemption = 3% of eligible spend\nbreak_even: incremental margin from changed behaviour >= 3% of member spend + software + ops",
        },
        cta: {
          title: "Unsure whether a loyalty programme would pay off?",
          description: "ZSpace models loyalty economics and designs programmes around the repeat behaviour your store needs.",
        },
      },
      {
        heading: "Architecture and Integrations",
        body: [
          "A loyalty programme touches many systems. The loyalty engine keeps a points ledger (every earn, redeem, expiry and adjustment as a record), evaluates rules and exposes balances. The ecommerce platform shows balances in accounts and applies rewards at checkout, often as discounts. Email and CRM send balance updates and reminders. POS integration lets customers earn and redeem in stores. Analytics joins loyalty data with orders for measurement.",
          "Use webhooks or events for order creation, fulfilment and refunds so points are awarded and reversed correctly. Keep one source of truth for balances. See [[/blogs/ecommerce-crm-integration|CRM integration]].",
        ],
        table: {
          headers: ["System", "Loyalty role"],
          rows: [
            ["Loyalty engine", "Rules, ledger, balances, tiers"],
            ["Ecommerce platform", "Account display, checkout redemption, order events"],
            ["Email / SMS / CRM", "Balance updates, reminders, segments"],
            ["POS", "In-store earn and redeem"],
            ["Customer service tools", "Balance lookups, adjustments with audit"],
            ["Analytics / warehouse", "Measurement and cost reporting"],
          ],
        },
      },
      {
        heading: "Segmentation and Personalization",
        body: [
          "Not every member needs the same treatment. Segment members by lifecycle and value: new members need a quick first reward; regular customers may respond to tier progress; lapsed members may need a reminder of their balance. Personalize communications and bonuses within fair, transparent rules. See [[/blogs/ecommerce-customer-segmentation|customer segmentation]].",
        ],
      },
      {
        heading: "Referrals",
        body: [
          "Referral programmes reward customers for introducing new customers, typically with a reward for both sides. Protect against abuse: self-referrals, fake accounts and coupon sharing sites. Reward on the referred customer's first qualifying order, not on sign-up. Measure referred customers' retention, not only the number of referrals.",
        ],
      },
      {
        heading: "Terms, Fairness and Compliance",
        body: [
          "Publish clear terms: how points are earned, their value, expiry rules, what happens on returns and how the programme can change. Remind customers before points expire. Treat points for reviews carefully: incentivized reviews must be disclosed and not conditional on positive sentiment in many jurisdictions. Some jurisdictions regulate expiry, member pricing and data use. See [[/blogs/ecommerce-compliance|ecommerce compliance]].",
        ],
      },
      {
        heading: "Measuring Loyalty Honestly",
        body: [
          "Members almost always buy more than non-members, because engaged customers join. That comparison says little about the programme's effect. Better approaches include a randomized holdout (some eligible customers aren't invited or don't receive a benefit), comparing cohorts before and after launch, and tracking behaviour changes among members after joining against a matched group. Include reward costs in the result. See [[/blogs/ecommerce-retention-analytics|retention analytics]].",
        ],
        table: {
          headers: ["Metric", "Why"],
          rows: [
            ["Incremental repeat rate vs holdout", "Programme effect"],
            ["Time to second order for new members", "Early loyalty"],
            ["Reward cost as share of member revenue", "Economics"],
            ["Redemption rate and outstanding liability", "Engagement and finance"],
            ["Referral-acquired customer retention", "Referral quality"],
            ["Margin per member vs holdout", "Net impact"],
          ],
        },
      },
      {
        heading: "Launching a Programme",
        body: [
          "Launch with a simple version: one earning rule, a few rewards, clear terms and visibility in account, cart and checkout. Invite existing customers with a starting balance or welcome reward if economics allow. Set up measurement from day one, including a holdout if possible. Add tiers, bonuses and experiences after the basics prove themselves.",
        ],
        checklist: [
          "Goal and target behaviour defined",
          "Earning and reward rules modelled for cost",
          "Terms written and reviewed",
          "Integrations: platform, email, POS, support",
          "Balance visible in account, cart and checkout",
          "Holdout or comparison plan ready",
        ],
      },
      {
        heading: "Omnichannel Loyalty",
        body: [
          "Customers who shop online and in stores expect one programme. Identify members at the point of sale (phone, email, app code), award and redeem points in both channels in real time, and show one balance everywhere. Omnichannel loyalty also improves data: store purchases linked to customer profiles make retention analysis more complete. See [[/blogs/ecommerce-customer-analytics|customer analytics]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a beauty brand's points programme has many members but little change in repeat rate. Analysis shows the first reward requires spend equivalent to several orders, so most members never reach it. The team adds a small reward redeemable on the second order, shows the balance in the cart and post-purchase emails, and holds out 10% of new members. They track time to second order and reward cost.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Launching without a behavioural goal",
          "First reward too far away to matter",
          "Rewarding customers who would buy anyway at high cost",
          "Points not reversed on returns",
          "Balances hidden from checkout",
          "Crediting the programme with all member revenue",
        ],
        cta: {
          title: "Ready to design a loyalty programme that earns its keep?",
          description: "Talk to ZSpace about [[/services/shopify-development|loyalty integrations]], [[/services/ui-ux-design|rewards UX]] and [[/services/cro-audit|retention measurement]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Loyalty programmes work when they target a specific behaviour, offer reachable rewards, integrate across channels, stay within a modelled budget and are measured against a holdout. Related: [[/blogs/ecommerce-customer-retention|customer retention]] and [[/blogs/ecommerce-repeat-purchases|repeat purchases]].",
        ],
      },
    ],
  },
];
