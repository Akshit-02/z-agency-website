import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch eight, part six: migration. Platform
 * migration checklist, data migration, SEO migration and URL migration
 * (redirect implementation depth). The strategy hub is
 * `ecommerce-platform-migration`; platform choice is
 * `ecommerce-replatforming`; Shopify moves are `migrating-to-shopify-guide`;
 * general website moves are `website-migration-guide`. Merged into `posts`
 * in blog-data.ts.
 */

export const commercePosts67: BlogPost[] = [
  // ---------------------------------------- 402 · MIGRATION CHECKLIST
  {
    slug: "ecommerce-platform-migration-checklist",
    title: "Ecommerce Platform Migration Checklist: What Should You Prepare?",
    seoTitle: "Ecommerce Platform Migration Checklist: What to Prepare",
    excerpt: "A practical ecommerce migration checklist: discovery, content, products, customers, orders, URLs and redirects, integrations, analytics, SEO, QA and launch.",
    category: "Web Development",
    banner: "migchecklist",
    bannerAlt:
      "Ecommerce migration checklist in four columns: discover (goals and scope, integrations, baselines, owners), data (products, customers, orders, content, highlighted), site (URLs and redirects, metadata, analytics, QA) and launch (freeze, cutover, monitoring, support).",
    date: "2026-09-30",
    readingTime: "16 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "retail", "d2c-consumer"],
    faqs: [
      { q: "What should an ecommerce migration checklist include?", a: "Discovery and goals, baselines, data (products, customers, orders, content), URLs and redirects, SEO metadata, integrations, analytics and tracking, design and UX, testing, launch preparation, cutover and post-launch monitoring." },
      { q: "When should migration planning start?", a: "Well before the target date. Discovery, data mapping and redirect planning take time, and rehearsing data migration more than once reduces launch risk." },
      { q: "What baselines should be captured before migrating?", a: "Organic traffic and rankings for key pages, conversion rates, average order value, page speed, top landing pages, crawl data and analytics event volumes, so post-launch changes can be judged." },
      { q: "Which data is hardest to migrate?", a: "Often customer accounts (passwords usually can't be moved), order history with statuses and refunds, product variants and options, and content with embedded links." },
      { q: "Do all URLs need redirects?", a: "Every URL that has traffic, links or search visibility and changes should redirect to the most relevant new URL. Map at least all indexed product, category, content and landing pages." },
      { q: "Should we redesign during migration?", a: "It's common, but changing platform, design and structure at once makes problems harder to diagnose. Consider limiting scope or phasing changes." },
      { q: "What's a content freeze?", a: "A period before launch when changes to products, content or settings on the old platform stop or are tracked, so the final data migration captures everything." },
      { q: "Who should own the checklist?", a: "A migration lead with named owners for each area: data, SEO, integrations, analytics, design, QA, operations and customer service." },
      { q: "What should happen after launch?", a: "Monitoring of orders, errors, 404s, redirects, indexing, rankings, analytics and customer contacts, with a team ready to fix issues quickly." },
      { q: "Is a checklist enough?", a: "It prevents omissions but doesn't replace a plan with owners, dates and rehearsals. Use it alongside a migration strategy and launch plan." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Before an ecommerce platform migration, prepare in six areas: discovery (goals, scope, owners, baselines), data (products, variants, customers, orders, content, media), URLs (inventory, mapping, redirects), integrations and tracking (ERP, shipping, payments, analytics, pixels), quality (functional, SEO, performance, accessibility and mobile testing) and launch (freeze, final migration, cutover, monitoring, support readiness). Assign an owner to every item, rehearse data migration, and capture baselines so you can judge results after launch.",
        ],
      },
      {
        heading: "How to Use This Checklist",
        body: [
          "Treat this as a working document: copy it, assign owners and dates, and mark items done only when verified. It complements a migration strategy ([[/blogs/ecommerce-platform-migration|ecommerce migration strategy]]) and a launch plan ([[/blogs/ecommerce-migration-launch-plan|migration launch plan]]). For moves to Shopify specifically, see [[/blogs/migrating-to-shopify-guide|Shopify migration]].",
        ],
      },
      {
        heading: "1. Discovery and Planning",
        body: [],
        checklist: [
          "Migration goals written (why migrate, what must improve)",
          "Scope agreed: platform only, or redesign and restructuring too",
          "Owners named for data, SEO, integrations, analytics, design, QA, operations, support",
          "Timeline with rehearsal dates and launch window away from peak trading",
          "Inventory of apps, plugins, custom features and integrations",
          "Decision for each feature: rebuild, replace with app, drop",
          "Risks and rollback approach documented",
        ],
      },
      {
        heading: "2. Baselines",
        body: [],
        checklist: [
          "Organic traffic by landing page (last 12 months where available)",
          "Rankings and search queries for key pages from Search Console",
          "Conversion rate, AOV and revenue by device and channel",
          "Top landing pages and internal link structure (crawl)",
          "Page speed and Core Web Vitals for key templates",
          "Analytics event volumes and purchase reconciliation",
          "Customer service contact volumes by reason",
        ],
      },
      {
        heading: "3. Product Data",
        body: [],
        checklist: [
          "Products, variants and options mapped to new structure",
          "Variant limits of the new platform checked",
          "Attributes and custom fields mapped (e.g. to metafields)",
          "Categories and collections mapped",
          "Images and media migrated with alt text",
          "Prices, compare-at prices and tax settings",
          "Inventory by location",
          "SEO fields: titles, descriptions, handles",
        ],
      },
      {
        heading: "4. Customers and Orders",
        body: [
          "Customer and order data raise privacy and technical questions: passwords usually can't be migrated because they're stored as one-way hashes, so plan account activation or passwordless sign-in; historical orders need statuses, refunds and taxes preserved for service and reporting. See [[/blogs/ecommerce-data-migration|ecommerce data migration]].",
        ],
        checklist: [
          "Customer records with addresses, consent and tags",
          "Marketing consent status preserved",
          "Account activation plan (invites or passwordless login)",
          "Order history with lines, statuses, refunds, taxes",
          "Gift cards, store credit and loyalty balances",
          "Subscriptions and saved payment methods (provider migration plan)",
          "Reviews and ratings",
        ],
        cta: {
          title: "Planning a platform migration?",
          description: "ZSpace Labs runs ecommerce migrations with data rehearsals, redirect mapping and launch plans that protect revenue and search visibility.",
        },
      },
      {
        heading: "5. Content",
        body: [],
        checklist: [
          "Pages, policies, blog posts and landing pages",
          "Internal links in content updated to new URLs",
          "Navigation menus and footer",
          "Forms and their destinations",
          "Legal pages and cookie consent configuration",
        ],
      },
      {
        heading: "6. URLs and Redirects",
        body: [
          "Redirects protect search visibility and customer links. Build a complete inventory of old URLs, map each to the most relevant new URL, and implement permanent redirects. See [[/blogs/ecommerce-url-migration|ecommerce URL migration]] and [[/blogs/ecommerce-seo-migration|ecommerce SEO migration]].",
        ],
        checklist: [
          "URL inventory from crawl, sitemap, analytics, Search Console and backlinks",
          "One-to-one mapping for products, categories, content and landing pages",
          "Discontinued products mapped to relevant alternatives or categories",
          "Redirects implemented as permanent (301 or 308)",
          "No redirect chains or loops",
          "Redirects tested before launch",
        ],
      },
      {
        heading: "7. SEO Elements",
        body: [],
        checklist: [
          "Titles, meta descriptions and headings carried over",
          "Canonical tags correct on new templates",
          "Structured data for products, breadcrumbs and organization",
          "XML sitemaps generated for new URLs",
          "Robots rules checked (no staging blocks left)",
          "Hreflang for international stores",
          "Pagination and faceted navigation handling",
        ],
      },
      {
        heading: "8. Integrations",
        body: [],
        checklist: [
          "ERP, OMS, WMS or 3PL connections",
          "Payment providers and methods",
          "Shipping carriers and rates",
          "Tax calculation",
          "Email, SMS, CRM and loyalty",
          "Reviews, search and personalization tools",
          "Marketplace and feed connections",
        ],
      },
      {
        heading: "9. Analytics and Tracking",
        body: [],
        checklist: [
          "Analytics installed with the same event names and definitions",
          "Purchase tracking reconciled with platform orders",
          "Ad platform pixels and conversion events",
          "Consent handling for tags",
          "Search Console verified for the new setup",
          "Annotations marking the launch date",
        ],
      },
      {
        heading: "10. Quality Assurance",
        body: [
          "Test every revenue path and integration before launch. See [[/blogs/ecommerce-migration-testing|migration testing]] for a full test plan.",
        ],
        checklist: [
          "Checkout with every payment method, shipping option and market",
          "Discounts, gift cards and taxes",
          "Customer accounts and order history",
          "Integrations end to end",
          "Redirects and metadata",
          "Performance, accessibility and mobile",
        ],
      },
      {
        heading: "11. Launch and Aftercare",
        body: [],
        checklist: [
          "Content and order freeze window agreed",
          "Final data migration and delta sync",
          "DNS and domain changes scheduled",
          "Smoke tests and go/no-go decision",
          "Rollback plan ready",
          "Customer service briefed with FAQs",
          "Post-launch monitoring for orders, errors, 404s, indexing and analytics",
        ],
      },
      {
        heading: "Timing the Migration",
        body: [
          "Work backwards from a launch window away from peak trading. Allow time for discovery, build, at least two data migration rehearsals, test cycles with fixes, and a stabilization period after launch before the next busy season. Compressing testing is the most common way migrations go wrong.",
        ],
        table: {
          headers: ["Phase", "Share of timeline (indicative)"],
          rows: [
            ["Discovery and planning", "Early, before build"],
            ["Build and configuration", "Largest share"],
            ["Data rehearsals and testing", "Substantial; don't compress"],
            ["Launch", "Short, planned window"],
            ["Stabilization", "Several weeks before peak"],
          ],
        },
      },
      {
        heading: "Owners and Sign-Off",
        body: [
          "Each checklist area needs an owner who signs off when items are verified, not just done. Hold a go-live readiness review where owners confirm their areas against agreed criteria. See [[/blogs/ecommerce-migration-launch-plan|launch plan]].",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "No baselines, so problems can't be measured",
          "Redirect mapping left to the last week",
          "Customer account activation forgotten",
          "Analytics definitions changing with the platform",
          "Launching during peak trading",
          "No owner for post-launch monitoring",
        ],
        cta: {
          title: "Want a second pair of eyes on your migration plan?",
          description: "Talk to ZSpace Labs about [[/services/website-development|migration planning]], [[/services/shopify-development|Shopify migrations]] and [[/services/cro-audit|post-launch conversion checks]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A migration checklist prevents omissions across discovery, baselines, data, content, URLs, SEO, integrations, analytics, QA and launch. Give each item an owner, rehearse the data, and keep monitoring after go-live. Related: [[/blogs/ecommerce-replatforming|choosing your next platform]] and [[/blogs/ecommerce-parallel-run|parallel runs]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 405 · DATA MIGRATION
  {
    slug: "ecommerce-data-migration",
    title: "Ecommerce Data Migration: How to Move Products, Customers and Orders",
    seoTitle: "Ecommerce Data Migration: Moving Products, Customers, Orders",
    excerpt: "How to migrate ecommerce data: products, variants, categories, media, customers and orders, mapping, transformation, validation, rehearsals and rollback.",
    category: "Web Development",
    banner: "datamigflow",
    bannerAlt:
      "Data migration flow: extract, map fields, transform and clean, load to staging, validate counts (highlighted), and delta and cutover, noting to rehearse the full run more than once.",
    date: "2026-09-30",
    readingTime: "17 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "ai-automation"],
    relatedIndustrySlugs: ["ecommerce", "retail", "b2b-enterprise"],
    faqs: [
      { q: "What data is usually migrated in an ecommerce migration?", a: "Products, variants and options, categories or collections, images and media, prices, inventory, customers and addresses, order history, gift cards and store credit, reviews, content pages and blog posts, and sometimes subscriptions and loyalty balances." },
      { q: "In what order should data be migrated?", a: "Typically products first, then customers, then orders, since orders reference both. Shopify's migration guidance, for example, recommends importing products, then customers, then historical orders." },
      { q: "Can customer passwords be migrated?", a: "Usually not, because they're stored as one-way hashes that the new platform can't use. Plan account activation emails or passwordless sign-in instead." },
      { q: "Do historical orders need to be migrated?", a: "Often, for customer service, returns, reorders and reporting. Some businesses migrate a limited history and archive the rest in a data warehouse." },
      { q: "What is data mapping?", a: "A document that defines where each field in the old system goes in the new one, and any transformation needed, such as combining fields or converting formats." },
      { q: "How do you validate migrated data?", a: "Compare record counts, totals and samples between old and new systems, check relationships (orders to customers and products), and test key journeys with migrated data." },
      { q: "What is a delta migration?", a: "Migrating only records created or changed since the last full migration, used close to launch to capture recent orders, customers and product changes." },
      { q: "How should duplicates be handled?", a: "Define matching rules (for example normalized email for customers, SKU for products), merge or flag duplicates before loading, and document decisions." },
      { q: "What about subscriptions and saved cards?", a: "Payment tokens usually can't be exported directly; migrations of stored payment methods are typically handled between payment providers under their processes. Plan early." },
      { q: "How do we roll back a data migration?", a: "Keep the old system intact and able to resume, load into staging first, and have a documented point up to which rollback is possible." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Ecommerce data migration moves products, customers, orders and content to a new platform without losing meaning or relationships. Extract data from the old system, map every field to the new model, transform and clean it (formats, duplicates, invalid values), load into a staging store, and validate with counts, totals, samples and journey tests. Migrate products, then customers, then orders. Rehearse the full run more than once, run a delta migration close to launch, and keep the old system ready for rollback.",
        ],
      },
      {
        heading: "Why Data Migration Deserves Its Own Plan",
        body: [
          "Data problems are among the most common causes of migration trouble: missing variants, broken images, customers who can't sign in, orders that don't show in accounts, duplicated customers, wrong prices. Most are preventable with mapping, validation and rehearsal. This article covers the data side. For the overall plan, see [[/blogs/ecommerce-platform-migration|ecommerce migration strategy]] and [[/blogs/ecommerce-platform-migration-checklist|migration checklist]].",
        ],
      },
      {
        heading: "What to Migrate",
        body: [],
        table: {
          headers: ["Data", "Notes", "Common issues"],
          rows: [
            ["Products and variants", "Options, SKUs, barcodes, weights", "Variant limits, option naming"],
            ["Attributes / custom fields", "Specs, materials, sizing", "Mapping to new structures"],
            ["Categories / collections", "Hierarchy and rules", "Different category models"],
            ["Media", "Images, video, alt text", "Broken links, missing alt text"],
            ["Prices and inventory", "By currency, market and location", "Rounding, stock drift"],
            ["Customers", "Contacts, addresses, consent, tags", "Duplicates, consent loss, passwords"],
            ["Orders", "Lines, statuses, taxes, refunds", "Status mapping, totals"],
            ["Gift cards, credit, loyalty", "Balances", "Security, liabilities"],
            ["Content", "Pages, posts, policies", "Embedded links and images"],
            ["Reviews", "Ratings, text, dates", "Product matching"],
          ],
        },
      },
      {
        heading: "Step 1: Extract",
        body: [
          "Export complete data from the old system through APIs, database exports or export tools. Include IDs and relationships (which customer placed which order, which variant belongs to which product). Keep the raw exports unchanged for reference and repeat runs. Check that exports include everything: some export tools omit custom fields, metafields or inactive products.",
        ],
      },
      {
        heading: "Step 2: Map",
        body: [
          "Write a field mapping document: every source field, its destination, transformation rules and default values. Resolve model differences: a platform with unlimited variants moving to one with limits, custom attributes moving to metafields, category trees moving to collections. Decide what won't be migrated and why.",
        ],
        table: {
          headers: ["Source field", "Destination", "Transformation"],
          rows: [
            ["product.name", "product.title", "Trim, fix encoding"],
            ["product.url_key", "product.handle", "Normalize; record for redirects"],
            ["attribute.material", "metafield custom.material", "Map values to controlled list"],
            ["customer.email", "customer.email", "Lowercase, deduplicate"],
            ["customer.newsletter", "email marketing consent", "Preserve status and date"],
            ["order.status", "order financial and fulfilment status", "Map status table"],
          ],
        },
        cta: {
          title: "Worried about losing data in a migration?",
          description: "ZSpace Labs maps, transforms and validates ecommerce data with repeatable migration scripts and rehearsals.",
        },
      },
      {
        heading: "Step 3: Transform and Clean",
        body: [
          "Migration is a chance to fix data, but keep changes controlled. Normalize formats (phone numbers, country codes, dates), deduplicate customers and products with documented matching rules, fix encoding problems, fill required fields, and flag invalid records for review rather than silently dropping them. Use scripts rather than manual edits so runs are repeatable.",
        ],
        checklist: [
          "Encoding and special characters fixed",
          "Country, currency and date formats normalized",
          "Duplicate customers matched and merged by rule",
          "Required fields filled or records flagged",
          "Controlled values for attributes",
          "Transformation scripts version-controlled",
        ],
      },
      {
        heading: "Step 4: Load in the Right Order",
        body: [
          "Load into a staging or development store first. Order matters because records reference each other: products first, then customers, then orders. Shopify's migration guidance, for example, recommends importing products, then customers, then historical orders (Shopify Help Center). Record old-to-new ID mappings as you load; you'll need them for orders, redirects and integrations.",
        ],
      },
      {
        heading: "Step 5: Validate",
        body: [
          "Validation proves the migration worked. Compare counts by type, sums (order totals, inventory), and random and edge-case samples between old and new systems. Check relationships: orders attached to the right customers, variants to the right products. Then test journeys with migrated data: sign in as a migrated customer, view order history, reorder, buy a migrated product.",
        ],
        table: {
          headers: ["Check", "Example"],
          rows: [
            ["Counts", "Products, variants, customers, orders match (minus documented exclusions)"],
            ["Totals", "Sum of order totals and refunds match"],
            ["Samples", "20 random records per type compared field by field"],
            ["Edge cases", "Products with most variants, customers with most orders"],
            ["Relationships", "Order to customer, line to variant"],
            ["Journeys", "Migrated customer can sign in and see orders"],
          ],
        },
      },
      {
        heading: "Customer Accounts and Passwords",
        body: [
          "Customer passwords are normally stored as one-way hashes that can't be converted for another platform, so customers can't sign in with old passwords after migration. Plan how they'll regain access: account activation emails, a password reset prompt at first sign-in, or passwordless sign-in where the platform supports it. Preserve marketing consent status and dates exactly. Customer data is personal data, so handle exports securely and delete temporary copies afterwards. See [[/blogs/ecommerce-privacy-customer-data|ecommerce privacy]].",
        ],
      },
      {
        heading: "Orders, Subscriptions and Payments",
        body: [
          "Historical orders support service, returns and reorders; migrate enough history to cover return windows and customer expectations, and archive older data in a warehouse if needed. Saved cards and subscription payment methods can't usually be exported as data; they're moved between payment providers under the providers' processes, which take time. Start that conversation early. See [[/blogs/subscription-ecommerce-website|subscription ecommerce]].",
        ],
      },
      {
        heading: "Rehearsals and Delta Migration",
        body: [
          "Run the full migration into staging at least twice before launch, timing each run and fixing issues between them. Close to launch, take a final full migration, then a delta migration of records created or changed since, during a short freeze. Timing rehearsals tell you how long the launch window needs to be. See [[/blogs/ecommerce-migration-launch-plan|migration launch plan]].",
        ],
      },
      {
        heading: "Rollback",
        body: [
          "Keep the old platform intact and able to take orders until the new one is confirmed. Define the point after which rolling back becomes harder (for example after new orders are taken on the new platform) and how orders taken in the new system would be moved back if needed. See [[/blogs/ecommerce-parallel-run|parallel runs]].",
        ],
      },
      {
        heading: "Tools for Data Migration",
        body: [
          "Options range from platform import tools and CSV files to migration apps, integration platforms and custom scripts using APIs. Shopify's guidance lists manual entry, CSV imports, migration apps, Shopify Partners and custom API work as approaches. Choose by data volume, complexity (variants, metafields, order history) and how many rehearsals you need; repeatable scripts or tools beat manual imports for anything beyond small catalogs.",
        ],
        table: {
          headers: ["Tool", "Suits", "Limits"],
          rows: [
            ["CSV import/export", "Products, simple data", "Relationships, orders, custom fields"],
            ["Migration apps", "Common platform-to-platform moves", "Coverage of custom data"],
            ["Custom API scripts", "Complex data, rehearsals", "Development effort"],
            ["Integration platforms", "Ongoing sync during transition", "Cost, setup"],
          ],
        },
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a store migrating 8,000 products finds that its export tool omits custom attributes and inactive variants. The team switches to API-based extraction, maps attributes to metafields, writes transformation scripts, loads into a development store twice with validation reports, then runs a final full load and a delta for the last day's orders during a short freeze.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Exports missing custom fields or inactive products",
          "Manual edits that can't be repeated",
          "Loading orders before customers and products",
          "No ID mapping kept for redirects and integrations",
          "Marketing consent lost in transfer",
          "Only one migration run before launch",
        ],
        cta: {
          title: "Ready to plan your data migration?",
          description: "Talk to ZSpace Labs about [[/services/website-development|data migration and integrations]], [[/services/shopify-development|Shopify imports]] and [[/services/ai-automation|data validation automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Data migration succeeds through mapping, repeatable transformation, ordered loading, thorough validation, rehearsals and a delta run at launch, with the old system kept ready for rollback. Related: [[/blogs/ecommerce-migration-testing|migration testing]] and [[/blogs/legacy-ecommerce-migration|legacy ecommerce migration]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 406 · SEO MIGRATION
  {
    slug: "ecommerce-seo-migration",
    title: "Ecommerce SEO Migration: How to Protect Organic Traffic During Replatforming",
    seoTitle: "Ecommerce SEO Migration: Protect Organic Traffic",
    excerpt: "How to protect ecommerce SEO during a migration: baselines, URL mapping, redirects, metadata, canonicals, structured data, sitemaps, robots, crawling and monitoring.",
    category: "Web Development",
    banner: "seomigflow",
    bannerAlt:
      "SEO migration flow: crawl and baseline, map URLs (highlighted), redirects and metadata, staging crawl, launch and monitor indexing, noting to keep redirects for at least a year and watch Search Console.",
    date: "2026-09-30",
    readingTime: "18 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "retail", "fashion-apparel"],
    faqs: [
      { q: "Will a platform migration hurt SEO?", a: "It can if URLs, content, internal links or technical signals change without care. Google notes that temporary ranking fluctuations are normal while it recrawls and reindexes after a move with URL changes." },
      { q: "What redirects should be used?", a: "Permanent server-side redirects such as 301 or 308, from each old URL to the most relevant new URL. Google recommends permanent redirects where possible." },
      { q: "How long should redirects stay in place?", a: "Google's guidance is to keep redirects for as long as possible, generally at least one year. Many stores keep them indefinitely." },
      { q: "Should discontinued products redirect to the homepage?", a: "No. Redirect them to a close alternative or the relevant category. Mass redirects to the homepage are treated like soft 404s and help neither users nor search." },
      { q: "Do I need the Change of Address tool?", a: "Only if the domain or subdomain changes. It's not needed when the domain stays the same and only URL paths change." },
      { q: "What should be checked on staging?", a: "Crawl the staging site (with access controlled) to check titles, canonicals, structured data, internal links, status codes and that redirects resolve correctly." },
      { q: "How long does recovery take?", a: "It varies. Google says medium-sized sites can take a few weeks or more for most pages to move in its index, and larger sites longer." },
      { q: "What about faceted navigation?", a: "Decide which filtered URLs should be indexable and keep the rules consistent with the old site where they worked. Uncontrolled facet URLs can create crawl waste." },
      { q: "Should we change content during migration?", a: "Changing templates, content and URLs at once makes it hard to tell what caused changes in traffic. Keep important content and metadata stable where possible." },
      { q: "What should be monitored after launch?", a: "Search Console indexing and crawl errors, 404s, redirect hits, organic traffic and rankings by page type, and sitemaps processing, compared with baselines." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Protect ecommerce SEO during a migration by crawling and baselining the old site, mapping every valuable URL to its closest new equivalent, implementing permanent (301 or 308) redirects without chains, carrying over titles, descriptions, headings, content, canonicals and structured data, keeping internal links pointing at final URLs, generating new sitemaps and checking robots rules. Crawl staging before launch, then monitor Search Console, 404s and organic traffic by page type. Google advises keeping redirects for at least a year and expecting some temporary fluctuation.",
        ],
      },
      {
        heading: "Why Ecommerce Migrations Are SEO-Sensitive",
        body: [
          "Ecommerce sites have many URLs that earn search traffic: categories, products, variants, filtered pages, guides. A platform change often changes URL patterns (for example, Shopify uses fixed prefixes such as /products/ and /collections/), templates, internal linking and structured data all at once. Each change is manageable; together they create risk if not planned.",
          "This article covers the SEO workstream. For redirect implementation in depth, see [[/blogs/ecommerce-url-migration|ecommerce URL migration]]. For general website moves, see [[/blogs/website-migration-guide|website migration guide]].",
        ],
      },
      {
        heading: "Before: Crawl and Baseline",
        body: [
          "Crawl the current site to capture every URL, status code, title, meta description, canonical, heading, structured data and internal link. Export organic landing pages and queries from Search Console and analytics, and note top pages by traffic and revenue. Record backlinks to important URLs. These baselines let you check the new site against the old and measure changes after launch.",
        ],
        checklist: [
          "Full crawl of the old site",
          "Search Console performance by page (queries, clicks)",
          "Analytics organic landing pages with revenue",
          "Pages with external backlinks",
          "Indexed page count by type",
          "Current robots rules and sitemaps",
        ],
      },
      {
        heading: "URL Mapping and Redirects",
        body: [
          "Map old URLs to new ones one to one where possible: each product to its new product URL, each category to its new collection, each content page to its new page. For discontinued products, redirect to the closest alternative or category; don't send everything to the homepage. Google recommends permanent server-side redirects such as 301 and 308, avoiding redirect chains, and keeping redirects for as long as possible, generally at least one year (Google Search Central).",
        ],
      },
      {
        heading: "Metadata and Content",
        body: [
          "Carry over titles, meta descriptions, H1s and body content for pages that perform well. New templates sometimes change heading structure, drop content blocks or truncate descriptions; compare templates with the old ones. If you're improving content, do it deliberately on pages where it's justified rather than as a side effect of the migration.",
        ],
        cta: {
          title: "Worried about organic traffic during a replatform?",
          description: "ZSpace Labs plans and executes ecommerce SEO migrations with URL mapping, staging crawls and post-launch monitoring.",
        },
      },
      {
        heading: "Canonicals, Variants and Facets",
        body: [
          "Check how the new platform handles canonicals for products reachable through several paths (for example products within collection URLs), variant URLs, pagination and filtered pages. Canonicals should point to the preferred URL for each product and category. Decide which facet combinations should be indexable and keep consistent rules. See [[/blogs/ecommerce-faceted-navigation-seo|faceted navigation SEO]] and [[/blogs/ecommerce-category-page-seo|category page SEO]].",
        ],
        table: {
          headers: ["Element", "What to check"],
          rows: [
            ["Product canonicals", "Point to the main product URL"],
            ["Variant URLs", "Handled consistently (parameter or separate URL)"],
            ["Collection paths to products", "Canonical to main product URL"],
            ["Pagination", "Crawlable, self-referencing canonicals"],
            ["Filtered pages", "Indexing rules deliberate and consistent"],
            ["International versions", "Hreflang and canonical alignment"],
          ],
        },
      },
      {
        heading: "Structured Data",
        body: [
          "Product, breadcrumb and organization structured data help search engines understand pages and can support rich results. Check that the new templates output valid structured data with accurate price, availability and review data where genuine. Test with Google's Rich Results Test. See [[/blogs/product-structured-data-ecommerce|product structured data]].",
        ],
      },
      {
        heading: "Internal Links",
        body: [
          "Update internal links in navigation, content, product descriptions and footers to point directly at new URLs rather than relying on redirects. Redirects protect external links; internal links should be clean. Crawl the staging site to find links that still point to old URLs.",
        ],
      },
      {
        heading: "Sitemaps and Robots",
        body: [
          "Generate XML sitemaps for the new URLs and submit them in Search Console. Check robots rules: staging sites often block crawlers, and those blocks sometimes reach production. Make sure CSS, JavaScript and images needed for rendering aren't blocked.",
        ],
        checklist: [
          "New sitemaps generated and submitted",
          "Old sitemaps removed after the move",
          "No staging noindex or robots block in production",
          "Rendering resources crawlable",
          "Search Console property verified",
        ],
      },
      {
        heading: "Staging Crawl",
        body: [
          "Before launch, crawl the staging site (with access controlled, and without letting it be indexed) and compare with the old crawl: missing pages, changed titles, missing canonicals, broken internal links, missing structured data. Test a sample of redirects in a pre-launch environment or immediately at launch. See [[/blogs/ecommerce-migration-testing|migration testing]].",
        ],
      },
      {
        heading: "Launch and Monitoring",
        body: [
          "After launch, test redirects for the top URLs immediately, then monitor daily for the first weeks: Search Console crawl errors, page indexing, sitemaps and performance; server logs or analytics for 404s and redirect hits; organic traffic by page type against baselines. Google notes that ranking fluctuations are expected while it recrawls, and that medium-sized sites can take a few weeks or more to settle. Fix 404s and wrong redirects quickly. Use Search Console's Change of Address tool only if the domain changes.",
        ],
        table: {
          headers: ["When", "Check"],
          rows: [
            ["Launch day", "Top 100 URLs redirect correctly; robots and sitemaps right"],
            ["First week", "404s, crawl errors, indexing, organic traffic by type"],
            ["First month", "Rankings for key queries, indexed pages, structured data"],
            ["Ongoing", "Redirects kept for at least a year; new 404s fixed"],
          ],
        },
      },
      {
        heading: "Migrating to Shopify",
        body: [
          "Shopify's URL structure uses fixed prefixes such as /products/, /collections/, /pages/ and /blogs/, so most migrations to Shopify change URLs and need redirects, which can be added in the admin or imported in bulk. Plan how collection-based product paths and canonicals behave. See [[/blogs/migrating-to-shopify-guide|Shopify migration]] and [[/blogs/shopify-seo-guide|Shopify SEO]].",
        ],
      },
      {
        heading: "What to Report After Launch",
        body: [
          "Report SEO recovery by page type rather than site-wide, so problems are visible: categories, products, content and landing pages. Compare with baselines using the same periods and adjust for seasonality.",
        ],
        table: {
          headers: ["Report", "Purpose"],
          rows: [
            ["Organic clicks by page type vs baseline", "Where traffic changed"],
            ["Indexed pages by type", "Indexing progress"],
            ["404s and redirect hits", "Mapping gaps"],
            ["Top queries and positions", "Visibility for key terms"],
            ["Organic revenue by page type", "Business impact"],
          ],
        },
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a store moves platforms and sees category traffic fall while product traffic holds. Investigation shows new category templates dropped the introductory copy and changed H1s, and filtered URLs that used to rank now canonicalize to the base category. The team restores content and headings and adds indexable pages for the key filter combinations, then tracks recovery by page type.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "No crawl or baseline before launch",
          "Discontinued products redirected to the homepage",
          "Redirect chains from earlier migrations left in place",
          "Staging robots blocks reaching production",
          "Template changes silently dropping content",
          "Removing redirects after a few months",
        ],
        cta: {
          title: "Ready to protect your organic traffic?",
          description: "Talk to ZSpace Labs about [[/services/website-development|SEO-safe migrations]], [[/services/shopify-development|Shopify migrations]] and [[/services/cro-audit|post-launch audits]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "SEO-safe migrations rest on a full crawl and baseline, careful URL mapping with permanent redirects, preserved content and metadata, correct canonicals and structured data, clean internal links, new sitemaps and weeks of monitoring. Related: [[/blogs/ecommerce-seo|ecommerce SEO]] and [[/blogs/ecommerce-migration-launch-plan|migration launch plan]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 407 · URL MIGRATION
  {
    slug: "ecommerce-url-migration",
    title: "Ecommerce URL Migration: How to Preserve Search Visibility",
    seoTitle: "Ecommerce URL Migration: How to Preserve Search Visibility",
    excerpt: "How to migrate ecommerce URLs: URL inventory, old-to-new mapping, 301 redirects, chains and loops, canonicals, internal links, sitemaps and 404 monitoring.",
    category: "Web Development",
    banner: "urlmapflow",
    bannerAlt:
      "URL migration flow: old URL inventory, match new URL (highlighted), 301 rule, test for no chains, update links and watch 404s.",
    date: "2026-09-30",
    readingTime: "16 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "retail", "consumer-electronics"],
    faqs: [
      { q: "What is a URL migration?", a: "Changing the addresses of pages, for example when moving platforms, restructuring categories or changing domains, while redirecting old URLs so users and search engines reach the right new pages." },
      { q: "Where do I find all the old URLs?", a: "Combine a site crawl, XML sitemaps, analytics landing pages, Search Console pages, server logs, backlink data and the old platform's export. No single source is complete." },
      { q: "301 or 302?", a: "Use permanent redirects (301 or 308) for permanent moves. Temporary redirects (302, 307) signal that the old URL will come back." },
      { q: "What is a redirect chain?", a: "When an old URL redirects to another URL that redirects again. Chains slow users and crawlers; update rules so every old URL redirects directly to its final destination." },
      { q: "Should I use pattern-based redirects?", a: "Pattern rules (regular expressions or wildcard rules) are useful for predictable URL changes, but test them carefully, since a wrong pattern can redirect thousands of URLs incorrectly." },
      { q: "What about URLs with query parameters?", a: "Decide how tracking parameters, filters and variant parameters should be handled. Many platforms ignore parameters when matching redirects; check behaviour on your platform." },
      { q: "How should I handle discontinued products?", a: "Redirect to the closest replacement or relevant category. If there's truly no relevant page, returning 404 or 410 is better than redirecting to the homepage." },
      { q: "Do internal links still matter if redirects exist?", a: "Yes. Update internal links to point directly at new URLs to avoid unnecessary redirects and to send clear signals." },
      { q: "How long should old redirects be kept?", a: "Google advises keeping redirects for as long as possible, generally at least one year. Many stores keep them permanently." },
      { q: "How do I monitor a URL migration?", a: "Check 404 logs, redirect hit reports, Search Console crawl and indexing reports, and organic traffic for mapped pages after launch." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "To preserve visibility when ecommerce URLs change, build a complete inventory of old URLs from crawls, sitemaps, analytics, Search Console, logs and backlinks; map each to the most relevant new URL; implement permanent (301 or 308) redirects that go directly to the final destination with no chains or loops; update internal links, canonicals and sitemaps to the new URLs; test before and at launch; and monitor 404s and redirect hits afterwards. Redirect discontinued items to close alternatives, not the homepage.",
        ],
      },
      {
        heading: "URL Migration Within the SEO Migration",
        body: [
          "URL migration is the most mechanical and most error-prone part of an SEO migration. Thousands of rules, each small, add up to large effects on traffic if wrong. This article goes deep on URL inventory, mapping and redirect implementation. For the broader SEO workstream, see [[/blogs/ecommerce-seo-migration|ecommerce SEO migration]].",
        ],
      },
      {
        heading: "Step 1: Build the URL Inventory",
        body: [
          "No single source lists every valuable URL. A crawl finds linked pages; sitemaps list what the old platform exposed; analytics and Search Console show pages that received visits and impressions; server logs show what bots and users actually requested; backlink tools show externally linked URLs; the platform export lists products and categories, including some that aren't linked. Combine them and deduplicate.",
        ],
        table: {
          headers: ["Source", "Finds"],
          rows: [
            ["Site crawl", "Linked pages, status codes, canonicals"],
            ["XML sitemaps", "Pages the platform exposed"],
            ["Analytics landing pages", "Pages with visits"],
            ["Search Console", "Pages with impressions and clicks"],
            ["Server logs", "Requested URLs, including old ones"],
            ["Backlink data", "Externally linked URLs"],
            ["Platform export", "All products and categories, incl. unlinked"],
          ],
        },
      },
      {
        heading: "Step 2: Map Old to New",
        body: [
          "Map each old URL to its closest new equivalent. Use IDs and SKUs from the data migration to match products automatically, then review categories and content manually. Prioritize by value: pages with traffic, revenue or backlinks need careful matches. Keep the mapping in a spreadsheet or database that becomes the redirect source.",
        ],
        table: {
          headers: ["Old URL type", "Map to"],
          rows: [
            ["Product", "Same product's new URL"],
            ["Product variant URL", "Product URL (with variant if supported)"],
            ["Category", "Equivalent collection or category"],
            ["Filtered category", "Filtered equivalent if indexable, else category"],
            ["Discontinued product", "Replacement or category"],
            ["Content page", "Equivalent page or post"],
            ["Search result pages", "Usually not redirected individually"],
          ],
        },
        cta: {
          title: "Thousands of URLs to redirect?",
          description: "ZSpace Labs builds URL inventories, automated mappings and tested redirect rules for ecommerce migrations.",
        },
      },
      {
        heading: "Step 3: Implement Redirects",
        body: [
          "Use permanent redirects (301 or 308) for URLs that have moved for good. Implement them at the server, CDN or platform level, not with client-side scripts. Where URL changes follow patterns (for example /product/sku-123 to /products/sku-123), pattern rules reduce the number of rules, but explicit rules are safer for high-value URLs. Check platform limits on the number of redirects and on pattern support.",
        ],
        code: {
          label: "Redirect map (CSV example)",
          text: "old_path,new_path,type\n/product/blue-linen-shirt,/products/linen-shirt-blue,301\n/category/mens/shirts,/collections/mens-shirts,301\n/product/discontinued-sneaker,/collections/sneakers,301\n/about-us.html,/pages/about,301",
        },
      },
      {
        heading: "Step 4: Remove Chains and Loops",
        body: [
          "Stores that have migrated before often have old redirects. When new redirects are added on top, chains appear: A redirects to B, which now redirects to C. Flatten them so every old URL redirects directly to its final destination. Test for loops (A to B to A). Google recommends avoiding chains; they slow users and waste crawling (Google Search Central).",
        ],
        checklist: [
          "Import historical redirects into the mapping",
          "Resolve every source to its final destination",
          "Detect loops before launch",
          "Ensure destinations return 200, not another redirect",
          "Re-run the check after any bulk change",
        ],
      },
      {
        heading: "Step 5: Parameters, Case and Trailing Slashes",
        body: [
          "Small URL variations cause missed redirects: uppercase letters, trailing slashes, index.html suffixes, tracking parameters. Decide how each should be handled and test representative cases. Check how your platform matches redirects when query parameters are present.",
        ],
      },
      {
        heading: "Step 6: Canonicals, Internal Links and Sitemaps",
        body: [
          "New pages should have self-referencing canonicals on their final URLs. Update internal links (navigation, content, product descriptions) to point directly at new URLs. Sitemaps should list only final, indexable URLs, never redirected ones. See [[/blogs/ecommerce-seo-migration|SEO migration]] for the wider checks.",
        ],
      },
      {
        heading: "Step 7: Test",
        body: [
          "Test the redirect map automatically: request each old URL and check that it returns a single permanent redirect to the expected destination, which returns 200. Test before launch where the platform allows (for example on a staging domain) and again immediately after launch for the full list, starting with the highest-value URLs. See [[/blogs/ecommerce-migration-testing|migration testing]].",
        ],
        code: {
          label: "Redirect test (sketch)",
          text: "for old, expected in redirect_map:\n    r = http_get(base + old, follow_redirects=False)\n    assert r.status in (301, 308), old\n    assert r.location == base + expected, (old, r.location)\n    final = http_get(r.location, follow_redirects=False)\n    assert final.status == 200, (expected, final.status)",
        },
      },
      {
        heading: "Step 8: Monitor",
        body: [
          "After launch, monitor 404s (from server logs, analytics or platform reports) and add redirects for valuable URLs you missed. Watch Search Console crawl and indexing reports and organic traffic for mapped pages. Keep redirects for as long as possible; Google suggests at least a year, and permanent retention is common for ecommerce URLs with backlinks.",
        ],
      },
      {
        heading: "URL Migration to Shopify",
        body: [
          "Shopify uses fixed URL prefixes (/products/, /collections/, /pages/, /blogs/) and supports URL redirects created in the admin or imported in bulk by CSV. Plan for these structures early, since they determine most mappings. See [[/blogs/migrating-to-shopify-guide|Shopify migration]].",
        ],
      },
      {
        heading: "Managing Large Redirect Maps",
        body: [
          "Stores with tens of thousands of URLs need structure: generate mappings automatically from ID matches, review only exceptions and high-value URLs manually, store the map in version control, and run the test suite on every change. Keep a record of why unusual mappings were chosen so later teams don't undo them.",
        ],
        checklist: [
          "Automatic matching by ID or SKU",
          "Manual review for top URLs and exceptions",
          "Redirect map in version control",
          "Automated tests on each change",
          "Notes on unusual decisions",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: during a replatform, a store's redirect import sends all old category URLs through a legacy rule to an intermediate path, then to the new collection, creating two-hop chains for thousands of URLs. A pre-launch test run flags the chains; the team flattens the map so each old URL points straight to its final collection and re-runs the tests.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Inventory from one source only",
          "Bulk redirects to the homepage",
          "Chains from previous migrations",
          "Untested pattern rules",
          "Internal links left pointing at old URLs",
          "Redirects removed too soon",
        ],
        cta: {
          title: "Ready to migrate URLs without losing visibility?",
          description: "Talk to ZSpace Labs about [[/services/website-development|redirect mapping and implementation]], [[/services/shopify-development|Shopify URL migrations]] and [[/services/cro-audit|post-launch monitoring]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "URL migration protects visibility through a complete inventory, careful mapping, direct permanent redirects, clean internal links and sitemaps, automated testing and ongoing 404 monitoring. Related: [[/blogs/ecommerce-platform-migration-checklist|migration checklist]] and [[/blogs/ecommerce-migration-launch-plan|launch plan]].",
        ],
      },
    ],
  },
];
