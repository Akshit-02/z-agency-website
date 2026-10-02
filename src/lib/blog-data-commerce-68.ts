import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch eight, part seven: migration testing,
 * parallel runs and the migration launch plan. Merged into `posts` in
 * blog-data.ts.
 */

export const commercePosts68: BlogPost[] = [
  // ---------------------------------------- 408 · MIGRATION TESTING
  {
    slug: "ecommerce-migration-testing",
    title: "Ecommerce Migration Testing: What Should You Test Before Launch?",
    seoTitle: "Ecommerce Migration Testing: What to Test Before Launch",
    excerpt: "What to test before an ecommerce migration launch: checkout, payments, shipping, tax, accounts, data, integrations, redirects, SEO, analytics and performance.",
    category: "Web Development",
    banner: "migtestmatrix",
    bannerAlt:
      "Migration test matrix in four columns: commerce (checkout and payment, shipping and tax, discounts, accounts, highlighted), data (product counts, customer counts, order history, integrations), discovery (redirects, metadata, sitemaps, analytics) and quality (performance, accessibility, mobile, security), noting to test the flows that make money first.",
    date: "2026-09-30",
    readingTime: "17 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "retail", "d2c-consumer"],
    faqs: [
      { q: "What should be tested before an ecommerce migration launch?", a: "Checkout and payments, shipping and tax, discounts and gift cards, customer accounts, product and order data, integrations, redirects and SEO elements, analytics and tracking, performance, accessibility, mobile and security basics." },
      { q: "What should be tested first?", a: "The flows that make money and the integrations that fulfil orders: checkout with every payment method, shipping and tax calculation, and order flow to fulfilment and finance." },
      { q: "Should test orders use real payments?", a: "Use test modes in staging. Before launch, place a small number of real orders with real payment methods and refund them, to confirm live configuration." },
      { q: "How do I test migrated data?", a: "Compare counts and totals with the old system, check samples and edge cases field by field, and test journeys such as a migrated customer viewing order history." },
      { q: "How should redirects be tested?", a: "Automatically: request every old URL and check it returns one permanent redirect to the expected destination, which returns 200." },
      { q: "Who should do user acceptance testing?", a: "People who use the store daily: merchandisers, customer service, operations and finance, following scripted scenarios for their work." },
      { q: "How long should testing take?", a: "Enough to run all test cycles, fix issues and retest. Plan several cycles, including at least two full data migration rehearsals." },
      { q: "Should performance be tested?", a: "Yes. Check page speed on key templates on mobile and, for high-traffic stores, load test checkout and key journeys." },
      { q: "What about accessibility?", a: "Test key journeys with keyboard and screen reader and run automated checks on templates, since new themes and apps can introduce barriers." },
      { q: "Do we need a security review?", a: "At minimum check access, apps, scripts and settings. Custom code and integrations may warrant professional security testing before launch." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Before launching a migrated store, test the flows that make money first: checkout with every payment method, market and shipping option, taxes, discounts and gift cards, then order flow into fulfilment, ERP and customer notifications. Validate migrated data with counts, totals and samples, test customer accounts, check every redirect automatically, verify SEO elements and analytics, and test performance, accessibility and mobile. Run several test cycles with the people who use the store daily, and fix and retest before go-live.",
        ],
      },
      {
        heading: "Why Migration Testing Is Different",
        body: [
          "A new store isn't only new code; it's new data, new integrations, new URLs and new configuration, all switched on at once. Problems often appear at the boundaries: a tax setting that works for one market but not another, an integration that handles standard orders but not partial refunds, redirects that miss uppercase URLs. Testing must cover these edges.",
          "This article is the test plan. For the checklist of preparation tasks, see [[/blogs/ecommerce-platform-migration-checklist|migration checklist]]; for launch day, see [[/blogs/ecommerce-migration-launch-plan|launch plan]].",
        ],
      },
      {
        heading: "Test Priorities",
        body: [],
        table: {
          headers: ["Priority", "Area", "Why"],
          rows: [
            ["1", "Checkout, payments, shipping, tax", "Revenue and legal correctness"],
            ["1", "Order flow to fulfilment and finance", "Orders must ship and reconcile"],
            ["2", "Customer accounts and data", "Customer access and service"],
            ["2", "Redirects and SEO", "Traffic protection"],
            ["2", "Analytics and tracking", "Measuring the launch"],
            ["3", "Performance, accessibility, mobile", "Experience quality"],
            ["3", "Content and merchandising", "Presentation"],
          ],
        },
      },
      {
        heading: "Checkout and Payments",
        body: [],
        checklist: [
          "Every payment method, including wallets and instalments",
          "Every market and currency",
          "3-D Secure and authentication challenges",
          "Declined payments and error messages",
          "Guest and signed-in checkout",
          "Discount codes, automatic discounts and gift cards",
          "Taxes and duties correct by market",
          "Order confirmation page and email",
          "Small live orders placed and refunded before launch",
        ],
      },
      {
        heading: "Shipping, Fulfilment and Operations",
        body: [],
        checklist: [
          "Shipping rates and options by zone",
          "Pickup and local delivery",
          "Orders reaching the warehouse or 3PL correctly",
          "Split shipments and partial fulfilment",
          "Tracking numbers returning to orders and customers",
          "Cancellations, refunds, returns and exchanges",
          "Inventory updates in both directions",
        ],
      },
      {
        heading: "Data Validation",
        body: [
          "Compare record counts and totals between the old and new systems, check random samples and edge cases (products with many variants, customers with many orders), and test relationships. See [[/blogs/ecommerce-data-migration|ecommerce data migration]].",
        ],
        table: {
          headers: ["Data", "Test"],
          rows: [
            ["Products and variants", "Counts, prices, options, images, SEO fields"],
            ["Collections", "Membership and ordering"],
            ["Customers", "Counts, addresses, consent, tags"],
            ["Orders", "Counts, totals, statuses, refunds"],
            ["Gift cards and credit", "Balances"],
            ["Content", "Pages present, links working"],
          ],
        },
        cta: {
          title: "Need an independent test plan before go-live?",
          description: "ZSpace Labs plans and runs migration testing across checkout, data, integrations, SEO and performance.",
        },
      },
      {
        heading: "Customer Accounts",
        body: [
          "Test as migrated customers: activating accounts or signing in (passwords usually don't migrate), viewing order history, reordering, managing addresses, subscriptions and loyalty balances. Check activation emails render correctly and links work.",
        ],
      },
      {
        heading: "Integrations",
        body: [
          "Run end-to-end scenarios through every integration: ERP, OMS, WMS or 3PL, payments, tax, email and SMS, CRM, reviews, search, loyalty and marketplaces. Include failure scenarios: what happens when an integration is down, and whether messages are retried without duplicates. See [[/blogs/ecommerce-order-management-integration|OMS integration]].",
        ],
      },
      {
        heading: "Redirects and SEO",
        body: [
          "Test the full redirect map automatically, then spot-check high-value URLs by hand. Crawl the new site to compare titles, meta descriptions, canonicals, headings, structured data and internal links with the old crawl. Check robots rules and sitemaps. See [[/blogs/ecommerce-url-migration|URL migration]] and [[/blogs/ecommerce-seo-migration|SEO migration]].",
        ],
        checklist: [
          "Every old URL returns one permanent redirect to the right destination",
          "Destinations return 200",
          "Titles, descriptions, headings match or improve",
          "Canonicals and structured data valid",
          "No noindex or robots blocks left from staging",
          "Sitemaps list only final URLs",
        ],
      },
      {
        heading: "Analytics and Tracking",
        body: [
          "Check that analytics records page views and ecommerce events with the same names and parameters as before, that purchases match platform orders, that ad pixels fire with consent respected, and that consent banners work in each market. Changes to tracking during migration make performance comparisons unreliable. See [[/blogs/ecommerce-event-tracking|event tracking]].",
        ],
      },
      {
        heading: "Performance, Accessibility and Mobile",
        body: [
          "Measure page speed for key templates on mobile and compare with baselines. For high-traffic stores, load test checkout and search. Test key journeys with keyboard and a screen reader, and run automated accessibility checks on templates. Check layouts on common phones and tablets. See [[/blogs/ecommerce-accessibility-checklist|accessibility checklist]].",
        ],
      },
      {
        heading: "Security Basics",
        body: [
          "Before launch, review staff and app access, remove test accounts and staging credentials, check scripts on checkout-adjacent pages, confirm HTTPS on all domains and review integration credentials. Custom code and headless builds may warrant professional security testing. See [[/blogs/ecommerce-security-audit|security audit]].",
        ],
      },
      {
        heading: "User Acceptance Testing",
        body: [
          "The people who run the store should test their own work: merchandisers updating products and collections, customer service finding orders and issuing refunds, operations processing fulfilment, finance checking reports. Give them scripted scenarios and a way to log issues with severity.",
        ],
      },
      {
        heading: "Managing Issues",
        body: [
          "Log every issue with steps to reproduce, severity and owner. Agree go-live criteria in advance: no open critical issues in checkout, payments, order flow or redirects; known minor issues documented with fixes scheduled. Retest fixes before closing them.",
        ],
        table: {
          headers: ["Severity", "Example", "Launch rule"],
          rows: [
            ["Critical", "Payment method failing, orders not reaching warehouse", "Must fix"],
            ["High", "Tax wrong in one market, many redirects wrong", "Must fix or scope out market"],
            ["Medium", "Account page layout issue", "Fix soon after launch"],
            ["Low", "Cosmetic issues", "Backlog"],
          ],
        },
      },
      {
        heading: "A Test Cycle Plan",
        body: [],
        table: {
          headers: ["Cycle", "Focus", "Data"],
          rows: [
            ["1", "Functional and integration testing", "First data rehearsal"],
            ["2", "Fixes retested, UAT with store teams", "Second rehearsal"],
            ["3", "Full regression, redirects, performance", "Production-like data"],
            ["Launch", "Smoke tests, live payments", "Final migration"],
          ],
        },
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: during testing, standard orders flow correctly to the ERP, but partial refunds create mismatched totals because tax is recalculated differently. Because the test plan included partial refunds and ERP reconciliation, the issue is fixed before launch instead of appearing in the first month's accounts.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Testing only the happy path",
          "No live payment test before launch",
          "Integrations tested with standard orders only",
          "Redirects spot-checked instead of fully tested",
          "Analytics changes not compared with the old setup",
          "No agreed go-live criteria",
        ],
        cta: {
          title: "Ready to test your migration properly?",
          description: "Talk to ZSpace Labs about [[/services/website-development|migration QA]], [[/services/shopify-development|Shopify launch testing]] and [[/services/cro-audit|conversion checks after launch]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Migration testing protects revenue by prioritizing checkout and order flow, validating data and accounts, testing integrations with edge cases, checking every redirect and SEO element, and confirming analytics, performance and accessibility, with agreed go-live criteria. Related: [[/blogs/ecommerce-parallel-run|parallel runs]] and [[/blogs/ecommerce-platform-migration|migration strategy]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 409 · PARALLEL RUN
  {
    slug: "ecommerce-parallel-run",
    title: "Ecommerce Parallel Run: Should Old and New Stores Run Together?",
    seoTitle: "Ecommerce Parallel Run: Should Old and New Stores Overlap?",
    excerpt: "What an ecommerce parallel run is, when it's worth it, how to synchronize data, orders and inventory, the operational cost, risks and cutover strategies.",
    category: "Web Development",
    banner: "parallelrunflow",
    bannerAlt:
      "Parallel run flow: old store live, new store in shadow, sync data, compare outputs (highlighted), shift traffic and retire old, noting to run in parallel only as long as comparison adds confidence.",
    date: "2026-09-30",
    readingTime: "15 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "ai-automation"],
    relatedIndustrySlugs: ["ecommerce", "retail", "b2b-enterprise"],
    faqs: [
      { q: "What is a parallel run in ecommerce?", a: "Running the old and new platforms at the same time for a period, either with the new one processing in the background for comparison or with some traffic or customers using it, before fully switching over." },
      { q: "Is a parallel run always necessary?", a: "No. Many migrations launch with a single cutover after thorough testing. Parallel runs suit complex, high-risk migrations, especially with custom pricing, B2B logic or critical integrations." },
      { q: "What types of parallel run exist?", a: "Shadow runs (new system processes copies of real data for comparison without affecting customers), phased traffic (a share of customers or a market uses the new store), and segment-based runs (specific customer groups or channels move first)." },
      { q: "What's the hardest part of a parallel run?", a: "Keeping inventory, orders, customers and prices synchronized between two systems without double-selling or conflicting updates." },
      { q: "How is inventory handled during a parallel run?", a: "One system must remain the source of truth for available stock, with the other reading from it or receiving allocated stock. Two independent inventories cause overselling." },
      { q: "How long should a parallel run last?", a: "As short as possible while giving enough confidence, often days to a few weeks. Longer runs increase cost and synchronization risk." },
      { q: "What about SEO during a phased run?", a: "Serving two versions of the same URLs to search engines causes confusion. Phased runs by market or domain are easier to manage for SEO than random traffic splits on the same URLs." },
      { q: "How is success judged?", a: "By comparing outputs: prices, taxes, totals, order data, integration messages and conversion, and by the absence of critical issues before widening traffic." },
      { q: "What is cutover?", a: "The point when the new platform becomes the only live system and the old one stops taking orders." },
      { q: "What are the alternatives to a parallel run?", a: "Thorough testing with full data rehearsals and a single cutover with a rollback plan, or phased migration by market, brand or channel." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A parallel run keeps the old and new stores running together for a period so the new one can be checked against real conditions before full cutover. It suits complex, high-risk migrations with custom pricing, B2B logic or critical integrations, not every store. Choose a form (shadow processing, a phased market or segment, or limited traffic), keep one source of truth for inventory and orders, compare outputs systematically, keep the period short and plan the final cutover and rollback in advance.",
        ],
      },
      {
        heading: "What a Parallel Run Is For",
        body: [
          "Testing in staging catches most problems, but real customers, real orders and real integrations behave in ways test scripts don't anticipate. A parallel run exposes the new platform to real conditions while the old one continues to carry the business. It trades operational complexity for confidence.",
          "It isn't universally needed. Many migrations launch safely with a single cutover after thorough testing and data rehearsals. See [[/blogs/ecommerce-migration-testing|migration testing]] and [[/blogs/ecommerce-migration-launch-plan|launch plan]].",
        ],
      },
      {
        heading: "Types of Parallel Run",
        body: [],
        table: {
          headers: ["Type", "How it works", "Suits", "Complexity"],
          rows: [
            ["Shadow run", "New system processes copies of real orders or pricing requests; customers unaffected", "Pricing, tax, integration logic", "Medium"],
            ["Phased by market or brand", "One market or brand moves first", "Multi-market or multi-brand businesses", "Medium"],
            ["Phased by segment or channel", "E.g. B2B customers or one channel first", "B2B, omnichannel", "Medium to high"],
            ["Traffic split", "Share of visitors on the new store", "Rarely; SEO and sync issues", "High"],
          ],
        },
      },
      {
        heading: "When a Parallel Run Makes Sense",
        body: [],
        checklist: [
          "Complex pricing, B2B contracts or custom calculations",
          "Critical integrations with ERP or fulfilment that are hard to test fully",
          "Very high order volumes where a failed launch is costly",
          "Multiple markets or brands that can move separately",
          "Legacy systems whose behaviour isn't fully documented",
          "Regulatory or contractual requirements for verification",
        ],
      },
      {
        heading: "When It Doesn't",
        body: [
          "For stores with standard catalogs, standard checkout and platform-native integrations, the cost of synchronizing two systems often outweighs the benefit. Thorough testing, data rehearsals and a well-prepared single cutover with rollback are usually enough.",
        ],
      },
      {
        heading: "Synchronizing Data",
        body: [
          "The hardest part of running two stores is keeping them consistent. Decide which system is the source of truth for each data type during the run: products and prices, inventory, customers, orders. Sync one way where possible. Two-way sync of the same data between two live systems is where conflicts and errors multiply.",
        ],
        table: {
          headers: ["Data", "Typical approach during a run"],
          rows: [
            ["Products and prices", "Maintained in one system (or PIM/ERP), synced to both"],
            ["Inventory", "One source of truth; both stores read or receive allocations"],
            ["Customers", "Synced to the new store; accounts activated as they move"],
            ["Orders", "Each order lives where it was placed; all flow to one OMS/ERP"],
            ["Content", "Frozen or edited in both with a clear process"],
          ],
        },
        cta: {
          title: "Weighing a parallel run against a single cutover?",
          description: "ZSpace Labs helps teams choose the safest launch approach and builds the synchronization it needs.",
        },
      },
      {
        heading: "Orders and Inventory",
        body: [
          "Overselling is the biggest operational risk. With two storefronts selling the same stock, availability must come from one place: an ERP, OMS or the old platform, with the new store reading it in near real time, or a fixed allocation of stock to the new store for a phased market. All orders should reach the same fulfilment and finance flow so operations see one queue. See [[/blogs/ecommerce-inventory-management-integration|inventory integration]] and [[/blogs/ecommerce-order-management-system|order management]].",
        ],
      },
      {
        heading: "Comparing Outputs",
        body: [
          "A parallel run is only useful if outputs are compared systematically. For shadow runs, compare prices, discounts, taxes and totals for the same carts, and the messages sent to integrations. For phased runs, compare conversion, errors, support contacts and order accuracy between old and new. Agree thresholds for moving forward.",
        ],
        checklist: [
          "Price, discount and tax outputs match for sampled carts",
          "Integration messages match expected formats",
          "Order accuracy in fulfilment and finance",
          "Error rates and support contacts",
          "Conversion and performance by segment",
        ],
      },
      {
        heading: "SEO Considerations",
        body: [
          "Search engines should see one version of each URL. Phased runs by market or domain are easier to manage (each market's URLs move once, with redirects). Random traffic splits on the same URLs can confuse crawlers and should use careful handling, similar to A/B testing guidance. See [[/blogs/ecommerce-seo-migration|SEO migration]].",
        ],
      },
      {
        heading: "Operational Cost",
        body: [
          "Running two platforms means two sets of licences, two admin interfaces for staff, duplicated merchandising or content work, synchronization monitoring and more complex support (\"which system is this order in?\"). Keep the run short, freeze non-essential changes, and train staff on where to find things.",
        ],
      },
      {
        heading: "Cutover and Rollback",
        body: [
          "Plan the final cutover before starting: criteria to proceed, steps to move remaining traffic and data, DNS and redirect changes, and when the old system stops taking orders. Keep a rollback path until the new platform is confirmed, including how orders placed on the new platform would be handled if you had to go back. See [[/blogs/ecommerce-migration-launch-plan|launch plan]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a B2B distributor moving to a new platform has thousands of customer-specific price lists. For two weeks, the new platform calculates prices for a sample of real carts in shadow mode while customers keep using the old store. Differences are logged and traced to a rounding rule and missing contract data. After fixes and a clean comparison, the distributor moves customers over by region.",
        ],
      },
      {
        heading: "Parallel Run Checklist",
        body: [],
        checklist: [
          "Type of run chosen and justified",
          "System of record per data type",
          "One inventory source",
          "Comparison method and thresholds",
          "End date and cutover criteria",
          "Rollback path",
          "Staff guidance on which system to use",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Running in parallel without comparing outputs",
          "Two independent inventories",
          "Two-way sync of the same data",
          "Random traffic splits on the same URLs",
          "No end date or cutover criteria",
          "Staff unsure which system to use",
        ],
        cta: {
          title: "Ready to plan a lower-risk launch?",
          description: "Talk to ZSpace Labs about [[/services/website-development|migration and cutover planning]], [[/services/ai-automation|synchronization and monitoring]] and [[/services/shopify-development|Shopify launches]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A parallel run can reduce risk for complex migrations, but only with one source of truth for inventory and orders, systematic comparison, a short timeframe and a planned cutover. For simpler stores, thorough testing and a single cutover are usually better. Related: [[/blogs/legacy-ecommerce-migration|legacy migration]] and [[/blogs/ecommerce-data-migration|data migration]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 410 · MIGRATION LAUNCH PLAN
  {
    slug: "ecommerce-migration-launch-plan",
    title: "Ecommerce Migration Launch Plan: How to Go Live With Less Risk",
    seoTitle: "Ecommerce Migration Launch Plan: Go Live With Less Risk",
    excerpt: "An ecommerce migration launch plan: timing, freeze, final data migration, DNS, redirects, smoke tests, go/no-go, rollback, monitoring and support readiness.",
    category: "Web Development",
    banner: "launchplanflow",
    bannerAlt:
      "Launch plan flow: freeze, final migration, DNS and redirects, smoke tests, go / no-go (highlighted) and monitor, with a branch noting that a failure triggers the documented rollback.",
    date: "2026-09-30",
    readingTime: "16 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "retail", "d2c-consumer"],
    faqs: [
      { q: "What is an ecommerce migration launch plan?", a: "A timed, step-by-step plan for going live on a new platform: preparation, freeze, final data migration, DNS and redirects, smoke tests, go/no-go decision, rollback criteria and post-launch monitoring, with owners for each step." },
      { q: "When should an ecommerce migration launch?", a: "During a low-traffic period away from peak trading and major campaigns, with the full team available for several days afterwards." },
      { q: "What is a freeze period?", a: "A window before launch when changes to products, content and settings stop (or are logged for replay), so the final migration captures a stable state." },
      { q: "How long does DNS take to switch?", a: "Changes can take time to propagate depending on TTL settings. Lowering TTL values in advance helps changes take effect faster." },
      { q: "What are smoke tests?", a: "A short set of critical checks right after launch: homepage, search, product pages, cart, checkout with real payment, order reaching fulfilment, key redirects and analytics." },
      { q: "What is a go/no-go decision?", a: "A planned checkpoint where named people decide, based on agreed criteria, whether to proceed with the launch or roll back." },
      { q: "What should a rollback plan include?", a: "The trigger criteria, who decides, the steps to point traffic back to the old platform, how orders taken on the new platform are handled and how customers are informed." },
      { q: "What should be monitored after launch?", a: "Orders and revenue, checkout errors, payment failures, integration queues, 404s and redirects, site speed, Search Console indexing and customer contacts." },
      { q: "How long is the post-launch period?", a: "Intensive monitoring for the first days, close attention for several weeks, and SEO monitoring for months as search engines process the change." },
      { q: "How should customer service prepare?", a: "With FAQs on account activation, order history, new features and known issues, and escalation routes to the launch team." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A launch plan turns a migration into a rehearsed sequence with owners and times. Launch during a quiet period, lower DNS TTLs in advance, freeze changes, run the final data migration and delta, switch DNS and activate redirects, then run smoke tests including a real order. Make a go/no-go decision against agreed criteria, with a documented rollback ready. After launch, monitor orders, errors, integrations, 404s, performance and Search Console closely, and brief customer service before customers notice changes.",
        ],
      },
      {
        heading: "Why a Launch Plan Matters",
        body: [
          "Most launch problems aren't new; they're known risks that nobody owned at the critical moment. A launch plan assigns owners, sequences steps, sets decision points and makes rollback a prepared option rather than a panic. It should be rehearsed with the team before launch day. For preparation and testing, see [[/blogs/ecommerce-platform-migration-checklist|migration checklist]] and [[/blogs/ecommerce-migration-testing|migration testing]].",
        ],
      },
      {
        heading: "Choosing the Launch Window",
        body: [
          "Launch when traffic is low and the team is available: avoid peak seasons, major campaigns, product drops and holidays. Many teams avoid Fridays so the full team is available on following days. Allow enough time in the window for the final migration, which rehearsals will have timed.",
        ],
      },
      {
        heading: "Timeline",
        body: [],
        table: {
          headers: ["When", "Activities", "Owner"],
          rows: [
            ["Weeks before", "Final test cycles, rehearsed migration, go-live criteria agreed", "Migration lead"],
            ["Days before", "Lower DNS TTL, brief support, confirm on-call rota", "Tech lead, support lead"],
            ["Freeze start", "Stop product/content changes (or log for replay)", "Merchandising"],
            ["Final migration", "Full data migration, then delta of recent changes", "Data lead"],
            ["Switch", "DNS change, redirects active, old store closed to orders", "Tech lead"],
            ["Smoke tests", "Critical journey checks, live order", "QA lead"],
            ["Go / no-go", "Decision against criteria", "Named decision makers"],
            ["After", "Monitoring, fixes, SEO checks, reporting", "Whole team"],
          ],
        },
      },
      {
        heading: "Freeze and Final Migration",
        body: [
          "The freeze keeps data stable for the final migration. Stop product, price and content changes on the old platform, or log them for replay on the new one. Run the final full migration if needed, then a delta migration for orders, customers and changes since the last run. Validate counts and totals before switching. See [[/blogs/ecommerce-data-migration|data migration]].",
        ],
      },
      {
        heading: "DNS, Domains and Redirects",
        body: [
          "Lower DNS TTL values well before launch so the switch takes effect quickly. At switch time, point the domain to the new platform, confirm SSL certificates, and activate redirects. Test the highest-value redirects immediately, then the full map. If the domain changes, follow Google's site move guidance, including Search Console's Change of Address tool. See [[/blogs/ecommerce-url-migration|URL migration]].",
        ],
        checklist: [
          "DNS TTL lowered in advance",
          "DNS records and SSL confirmed",
          "Redirects active and top URLs tested",
          "Old store closed to new orders (or redirected)",
          "Email sending domains and records verified",
        ],
        cta: {
          title: "Planning a go-live and want fewer surprises?",
          description: "ZSpace Labs writes and runs ecommerce launch plans with rehearsals, go/no-go criteria and rollback.",
        },
      },
      {
        heading: "Smoke Tests",
        body: [
          "Immediately after switching, run a short scripted set of critical checks: homepage, navigation, search, product pages, cart, checkout with a real payment (refunded afterwards), confirmation email, order reaching fulfilment and ERP, customer sign-in or activation, key redirects, analytics purchase event and consent banner. Record results in a shared channel.",
        ],
        checklist: [
          "Homepage, navigation and search",
          "Product and collection pages",
          "Cart and checkout with a real payment",
          "Confirmation email and order in admin",
          "Order reaching warehouse / 3PL and ERP",
          "Customer sign-in or activation",
          "Top redirects and robots.txt",
          "Analytics purchase event and consent",
        ],
      },
      {
        heading: "Go / No-Go and Rollback",
        body: [
          "Define criteria before launch day: for example, checkout working for all payment methods, orders flowing to fulfilment, no critical errors, redirects working. Named people decide at a set time. If criteria aren't met and can't be fixed quickly, roll back: point DNS back, reopen the old store, and handle any orders taken on the new platform. Rollback becomes harder after many orders are placed on the new platform, so decide early.",
        ],
        table: {
          headers: ["Criterion", "Go if"],
          rows: [
            ["Checkout", "All payment methods complete orders"],
            ["Order flow", "Orders reach fulfilment and finance"],
            ["Errors", "No critical errors in checkout or integrations"],
            ["Redirects", "Top URLs redirect correctly"],
            ["Data", "Counts and totals validated"],
          ],
        },
      },
      {
        heading: "Post-Launch Monitoring",
        body: [
          "Watch the business, the technology and search. In the first hours and days, monitor orders and revenue against expectations, checkout and payment errors, integration queues, site speed and customer contacts. Over the following weeks, track 404s and redirect hits, Search Console indexing and crawl errors, organic traffic by page type and conversion by device against baselines. Google notes that some ranking fluctuation is normal after a move. See [[/blogs/ecommerce-seo-migration|SEO migration]].",
        ],
        table: {
          headers: ["Period", "Focus"],
          rows: [
            ["First hours", "Orders, payments, errors, integrations"],
            ["First days", "Conversion, speed, 404s, support contacts"],
            ["First weeks", "Indexing, organic traffic, redirect gaps"],
            ["First months", "SEO recovery, conversion trends, cleanup"],
          ],
        },
      },
      {
        heading: "Customer Service Readiness",
        body: [
          "Customers notice migrations: new sign-in steps, a different account area, changed order history. Brief customer service with FAQs, known issues and workarounds, and a fast escalation route to the launch team. Consider a banner or email explaining changes such as account activation.",
        ],
      },
      {
        heading: "Communication",
        body: [
          "Use one channel for the launch team, with timed updates, decisions and issues. Tell the wider business what's happening and when. After launch, share a summary of issues, fixes and metrics compared with baselines.",
        ],
      },
      {
        heading: "After Stabilization",
        body: [
          "Once the store is stable, decommission the old platform carefully: export remaining data and archives, cancel integrations, keep redirects in place (Google recommends at least a year), and retire access. Review the migration to record lessons for the next one.",
        ],
      },
      {
        heading: "Launch Roles",
        body: [],
        table: {
          headers: ["Role", "Responsibility"],
          rows: [
            ["Launch lead", "Runs the plan, keeps time, calls decisions"],
            ["Technical lead", "DNS, redirects, platform configuration"],
            ["Data lead", "Final migration and validation"],
            ["QA lead", "Smoke tests and issue triage"],
            ["Operations lead", "Fulfilment and inventory checks"],
            ["Customer service lead", "Support readiness and feedback"],
            ["Decision makers", "Go/no-go and rollback"],
          ],
        },
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a store plans a Tuesday night launch after two rehearsals. DNS TTL is lowered the week before; the freeze starts at 6 pm; the final migration and delta finish on schedule; smoke tests pass except one payment method, which is fixed within the agreed window before the go decision. Monitoring continues for two weeks, with daily 404 reviews and a redirect added for a set of old campaign URLs.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Launching during peak trading or before a weekend",
          "DNS TTL not lowered in advance",
          "No live payment test",
          "Rollback criteria undefined",
          "Customer service not briefed",
          "Monitoring stopped after launch day",
        ],
        cta: {
          title: "Ready to plan your launch?",
          description: "Talk to ZSpace Labs about [[/services/website-development|migration launches]], [[/services/shopify-development|Shopify go-lives]] and [[/services/cro-audit|post-launch performance reviews]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A migration launch goes well when it's rehearsed: quiet timing, freeze, final migration and delta, DNS and redirects, smoke tests, a go/no-go decision with rollback ready, and weeks of monitoring with support prepared. Related: [[/blogs/ecommerce-parallel-run|parallel runs]] and [[/blogs/ecommerce-platform-migration|migration strategy]].",
          "For recovery planning beyond launch, see [[/blogs/ecommerce-disaster-recovery|ecommerce disaster recovery]].",
        ],
      },
    ],
  },
];
