import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, part nine: Shopify triage, product discovery,
 * store architecture and replatforming. Merged into `posts` in
 * blog-data.ts.
 */

export const commercePosts9: BlogPost[] = [
  // ---------------------------------- 106 · SHOPIFY STORE NOT CONVERTING
  {
    slug: "shopify-store-not-converting",
    title: "Shopify Store Not Converting: What Should You Check First?",
    excerpt:
      "The first checks for a Shopify store that isn't converting, in order: tracking, store settings, traffic, speed and errors, product pages, then cart and checkout.",
    category: "Shopify & Ecommerce",
    banner: "shopifytriage",
    bannerAlt:
      "Ordered triage for a Shopify store that isn't converting: tracking, store settings, traffic mix, speed and errors, product pages, then cart and checkout, starting with the cheapest checks.",
    date: "2026-09-29",
    readingTime: "11 min read",
    relatedServiceSlugs: ["shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer"],
    faqs: [
      { q: "Why is my Shopify store not converting?", a: "Common reasons are traffic that doesn't match your products, settings that block or discourage checkout (shipping zones, payment methods, markets), slow pages or app conflicts, product pages that don't answer questions, and costs revealed late. Check them in order, cheapest first." },
      { q: "How does Shopify calculate conversion rate?", a: "Shopify Analytics defines each funnel step's conversion rate as sessions reaching that step divided by total sessions, with sessions based on continued activity." },
      { q: "Why do I get visits but no sales on Shopify?", a: "Check tracking and bot traffic first, then whether visitors can actually buy: shipping rates for their country, payment methods, currency, and stock. Then look at traffic sources and product pages." },
      { q: "Can shipping settings stop Shopify orders?", a: "Yes. If a customer's address isn't covered by a shipping zone with a rate, they can't complete checkout. Check that shipping zones cover every country your traffic comes from." },
      { q: "Can a Shopify app hurt conversion?", a: "Yes. Apps can slow pages, conflict with the theme or break the cart. After installing or updating apps, test key paths, and use app embed toggles in the theme editor to isolate problems." },
      { q: "How do I place a test order on Shopify?", a: "Follow Shopify's test order guidance, using Shopify Payments test mode or a test gateway, and test each payment and shipping path on mobile and desktop." },
      { q: "Where do I see abandoned checkouts in Shopify?", a: "In the Orders section under abandoned checkouts. Reviewing them shows which products and steps are involved and whether recovery emails are working." },
      { q: "Is my Shopify theme the problem?", a: "Sometimes. Slow, heavily customized or outdated themes can hurt conversion, but check settings, traffic and product pages first. A theme change is expensive and rarely the first fix." },
      { q: "How is this different from finding Shopify conversion problems?", a: "This is a short triage of what to check first. The guide to finding conversion problems is the full investigation method, and the Shopify CRO audit is the complete checklist." },
      { q: "When should I get a CRO audit?", a: "When the quick checks don't explain the problem, or when conversion is persistently low across segments and stages." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Check a non-converting Shopify store in this order, because the cheapest checks catch the most embarrassing problems. First, confirm tracking and look for bot or spam traffic. Second, check store settings that block purchases: password protection, shipping zones and rates, payment methods, markets and stock. Third, check whether traffic sources changed. Fourth, check speed and errors, including recent theme or app changes. Then review product pages for price, delivery and trust information, and test cart and checkout with real test orders on mobile.",
        ],
      },
      {
        heading: "Use This as Triage",
        body: [
          "This article is the quick first pass. If the checks here don't explain the problem, move to the full method in [[/blogs/find-shopify-conversion-problems|how to find conversion problems on your Shopify store]], the symptom guide [[/blogs/shopify-conversion-killers|Shopify conversion killers]] or the complete [[/blogs/shopify-cro-audit|Shopify CRO audit]]. For platform-independent diagnosis, see [[/blogs/ecommerce-website-not-converting|ecommerce website not converting]].",
        ],
      },
      {
        heading: "Check 1: Tracking and Traffic Quality",
        body: [
          "Shopify Analytics defines each step's conversion rate as sessions reaching that step divided by total sessions ([[https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports|Shopify Help Center]]). Before trusting a low number, check it.",
        ],
        checklist: [
          "Do orders in Shopify match what your other tools report?",
          "Did sessions spike from a single source, country or referrer (often bots or spam)?",
          "Did anything change in how GA4 or pixels are installed?",
          "Are you comparing like-for-like periods, allowing for seasonality?",
        ],
      },
      {
        heading: "Check 2: Settings That Block Purchases",
        body: [
          "These take minutes to check and can stop orders completely for some shoppers.",
        ],
        table: {
          headers: ["Setting", "What to check"],
          rows: [
            ["Password protection", "The online store isn't still password protected"],
            ["Shipping zones and rates", "Every country your traffic comes from has a rate; rates aren't unexpectedly high"],
            ["Payment methods", "Expected methods are active for each market; wallets appear on mobile"],
            ["Markets and currency", "Prices, currencies and languages correct per market"],
            ["Inventory", "Bestsellers and common sizes aren't sold out or set to not sell"],
            ["Checkout settings", "Accounts aren't forced unless intended; required fields are sensible"],
            ["Discounts", "Advertised codes work; automatic discounts apply as expected"],
          ],
        },
        callout: {
          type: "tip",
          text: "If an address isn't covered by any shipping zone with a rate, the customer can't complete checkout. International traffic without matching shipping zones is a common silent leak.",
        },
      },
      {
        heading: "Check 3: Traffic Mix",
        body: [
          "A new campaign, creator partnership or channel can bring visitors who were never likely to buy, lowering the overall rate without anything on the store changing. Compare conversion by channel, campaign and landing page this period against the last. If one source explains the drop, the fix is in targeting or landing pages. See [[/blogs/ecommerce-traffic-but-no-sales|ecommerce traffic but no sales]].",
        ],
      },
      {
        heading: "Check 4: Speed, Errors and Recent Changes",
        body: [
          "Look at what changed around the time conversion fell: theme publishes, code edits, app installs and updates, new scripts or pixels. Check Shopify's web performance reports for Core Web Vitals trends, and the browser console on key templates for JavaScript errors. To isolate an app problem, preview the theme with app embeds switched off in the theme editor, and test the cart with and without the suspect app. See [[/blogs/shopify-speed-cro|Shopify speed optimization]].",
        ],
        cta: {
          title: "Shopify conversion dropped and you can't see why?",
          description: "ZSpace Labs checks tracking, settings, apps and funnel data to find what changed, then fixes it.",
        },
      },
      {
        heading: "Check 5: Product Pages",
        body: [],
        checklist: [
          "Price, variants and stock are clear; sold-out sizes aren't hidden confusingly",
          "Delivery cost or free-delivery threshold and delivery time are visible",
          "Returns policy is easy to find",
          "Images show the product clearly on mobile",
          "Reviews or other proof appear near the price",
          "The add-to-cart button works for every variant",
          "Product information answers common support questions",
        ],
      },
      {
        heading: "Check 6: Cart and Checkout",
        body: [
          "Place test orders on a phone and a desktop, following Shopify's test order guidance, with each payment method and a few shipping destinations. Watch for unexpected costs, errors and slow steps. Review abandoned checkouts in the Orders section to see where and on which products shoppers stop, and confirm abandoned checkout emails are sending. Baymard's research lists extra costs as the most common reason for abandoning checkout, cited by 40% of US shoppers who abandoned ([[https://baymard.com/lists/cart-abandonment-rate|Baymard Institute]], updated September 2025). See [[/blogs/shopify-cart-optimization|Shopify cart optimization]] and [[/blogs/shopify-checkout-optimization|Shopify checkout optimization]].",
        ],
      },
      {
        heading: "Check 7: Mobile",
        body: [
          "Most Shopify traffic is typically mobile. Repeat the product, cart and checkout checks on a mid-range phone over mobile data, including in the in-app browsers of the social platforms that send you traffic. See [[/blogs/shopify-mobile-cro|Shopify mobile optimization]].",
        ],
      },
      {
        heading: "What the Checks Usually Reveal",
        body: [],
        table: {
          headers: ["Finding", "Next step"],
          rows: [
            ["Tracking gap", "Fix tracking before any other change"],
            ["Settings block some shoppers", "Fix settings; watch the affected segment recover"],
            ["One channel converts poorly", "Adjust targeting and landing pages"],
            ["Drop after a release or app", "Roll back or fix; add release QA"],
            ["Weak add-to-cart rate", "Product page research and fixes"],
            ["Cart or checkout exits", "Cost transparency, wallets, forms, payment methods"],
            ["Nothing obvious", "Run the full CRO audit"],
          ],
        },
      },
      {
        heading: "Prevent the Next Drop",
        body: [],
        checklist: [
          "Keep a change log of theme, app, pricing and settings changes",
          "Test orders after every release and app change",
          "Weekly review of conversion by device and channel",
          "Alerts for sudden drops in orders or add-to-cart",
          "Quarterly app audit",
        ],
        cta: {
          title: "Want a Shopify store that converts consistently?",
          description: "Talk to ZSpace Labs about a [[/services/cro-audit|Shopify CRO audit]] and [[/services/shopify-development|Shopify development]] fixes.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "When a Shopify store isn't converting, check the cheap things first: tracking, settings, traffic mix, recent changes and speed. Then test product pages, cart and checkout as a shopper would. Most problems show up in these checks; the rest need a structured audit.",
        ],
      },
    ],
  },

  // ------------------------------------------- 107 · PRODUCT DISCOVERY
  {
    slug: "ecommerce-product-discovery",
    title: "Ecommerce Product Discovery Problems: Why Customers Can't Find What They Want",
    seoTitle: "Ecommerce Product Discovery: Why Customers Can't Find Products",
    excerpt:
      "Why shoppers can't find products and how to fix it: the routes to discovery, symptoms in your data, root causes from taxonomy to data quality, and what to fix first.",
    category: "UI/UX",
    banner: "discoverymodes",
    bannerAlt:
      "Routes to the right product: navigation and menus, search and autocomplete, filters and sort, quizzes and guided finders, recommendations, merchandising, and content and buying guides, all depending on product data and attributes.",
    date: "2026-09-29",
    readingTime: "13 min read",
    relatedServiceSlugs: ["ui-ux-design", "cro-audit", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "fashion-apparel"],
    faqs: [
      { q: "What is product discovery in ecommerce?", a: "How shoppers find products they want to buy, whether they know exactly what they want or are browsing. It includes navigation, search, filters, sorting, recommendations, merchandising, guided selling and content." },
      { q: "How do I know if my store has a discovery problem?", a: "Signs include a low share of sessions viewing any product, high exit rates from search and category pages, many zero-result searches, shoppers looping between category and product pages, and survey or support comments like “couldn't find”." },
      { q: "What causes product discovery problems?", a: "Taxonomy that doesn't match how shoppers think, unclear labels, incomplete product data, weak search relevance, missing or unhelpful filters, poor default sorting, and merchandising that hides relevant products." },
      { q: "Is product discovery the same as navigation?", a: "No. Navigation is one route. Discovery covers every route, including search, filters, recommendations, quizzes and content, and the product data they all depend on." },
      { q: "How do I measure product discovery?", a: "Track the share of sessions that view a product, steps or time to first product view, search success and exit rates, filter usage, list click-through, and add-to-cart rate from listing and search sessions." },
      { q: "Which should I fix first: search or navigation?", a: "Whichever your data shows is failing more shoppers. Search usually matters more in large catalogs; navigation and category structure in browse-led categories like fashion and home." },
      { q: "Do small catalogs have discovery problems?", a: "Yes, but different ones: shoppers may not understand the differences between products or which suits them. Clear naming, comparison and guided selling help." },
      { q: "Can AI fix product discovery?", a: "AI-powered search and recommendations can help, but they depend on good product data and still need measurement. They don't fix a confusing taxonomy." },
      { q: "How does product data affect discovery?", a: "Every route relies on it. Filters need structured attributes, search needs complete titles and attributes, and recommendations need categories and relationships." },
      { q: "How do I research discovery problems?", a: "Analyse search logs and paths, run tree tests on navigation, watch recordings of browsing sessions, and run task-based usability tests like “find a waterproof jacket under a set price”." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Customers can't find what they want when the routes to products (navigation, search, filters, sorting, recommendations, merchandising, guided selling and content) don't match how they think, or when the product data behind those routes is incomplete. Diagnose it from your data: the share of sessions that view a product, search exits and zero-result queries, filter use, list click-through and category–product loops. Then fix root causes in order of impact: taxonomy and labels, product data, search relevance, filters and sorting, and finally recommendations and merchandising.",
        ],
      },
      {
        heading: "Discovery Is More Than Navigation",
        body: [
          "The diagram above shows the routes shoppers use to reach the right product. Menus are one; search, filters, recommendations, merchandising, quizzes and content are others. All of them depend on the same thing: product data. This guide looks at discovery as a system. For menus specifically, see [[/blogs/ecommerce-navigation-design|ecommerce navigation]]; for the search engine behind the box, see [[/blogs/ecommerce-site-search|ecommerce site search]].",
        ],
      },
      {
        heading: "Two Kinds of Shopper",
        body: [
          "Some shoppers know what they want: a specific product, brand or model. They need search that works and clear product names. Others are exploring: they know the type of thing they want, or only the occasion or problem. They need navigation, filters, curated collections, guided selling and recommendations. Most stores serve both, and discovery problems often come from designing for only one.",
        ],
      },
      {
        heading: "Symptoms in Your Data",
        body: [],
        table: {
          headers: ["Symptom", "What it suggests"],
          rows: [
            ["Low share of sessions viewing any product", "Landing pages and navigation don't lead into the range"],
            ["High exit rate from search results", "Results don't match what shoppers typed"],
            ["Many zero-result searches", "Missing synonyms, data gaps or genuine range gaps"],
            ["Repeated back-and-forth between category and product pages", "Listing cards don't show deciding information"],
            ["Low filter use with high list exits", "Filters are hidden, irrelevant or broken"],
            ["Low click-through from the first rows of lists", "Default sorting shows the wrong products first"],
            ["“Couldn't find” in surveys or support", "Direct evidence; read the specifics"],
          ],
        },
      },
      {
        heading: "Root Cause 1: Taxonomy and Labels",
        body: [
          "If categories reflect how the business is organized rather than how shoppers think, people look in the wrong place. Test the category structure with card sorting and tree testing, use the words shoppers search with, and allow products to appear in more than one logical place. See [[/blogs/information-architecture|information architecture]].",
        ],
      },
      {
        heading: "Root Cause 2: Product Data",
        body: [
          "Incomplete or inconsistent attributes break discovery silently: a jacket missing its “waterproof” attribute never appears in the waterproof filter, and a product titled with a collection name doesn't match searches for its type. Audit completeness of the attributes that power filters and search, standardize values, and make data quality part of the product listing process.",
        ],
        cta: {
          title: "Shoppers leaving without finding products?",
          description: "ZSpace Labs diagnoses product discovery across navigation, search, filters and data, and fixes the causes in the right order.",
        },
      },
      {
        heading: "Root Cause 3: Search Relevance",
        body: [
          "Search failures come from missing synonyms, poor handling of typos and plurals, unsearchable attributes and ranking that favors the wrong products. Read zero-result and high-exit queries weekly and fix each at its source. See [[/blogs/ecommerce-search-ux|ecommerce search UX]] and [[/blogs/shopify-search-optimization|Shopify search optimization]].",
        ],
      },
      {
        heading: "Root Cause 4: Filters and Sorting",
        body: [
          "Filters must match the decisions shoppers make in each category, reflect stock, and be easy to use on mobile. Default sorting decides what most shoppers see; bestselling or relevance usually serves better than newest or manual order for broad categories. See [[/blogs/ecommerce-filters|ecommerce filters]] and [[/blogs/ecommerce-category-page-design|product listing page design]].",
        ],
      },
      {
        heading: "Root Cause 5: Listing Cards",
        body: [
          "Shoppers decide whether to click from the product card. Show the information that decides the choice: price, key attribute (size availability, capacity, dimensions), rating, colour options and a clear image. Missing information causes the category–product loop.",
        ],
      },
      {
        heading: "Root Cause 6: Merchandising and Recommendations",
        body: [
          "Merchandising rules and recommendation modules can help or hide. Stale pinned products, promotions that bury relevant results, and irrelevant recommendations all reduce discovery. Review rules regularly and measure recommendation modules against a holdout. See [[/blogs/ecommerce-product-recommendations|ecommerce product recommendations]].",
        ],
      },
      {
        heading: "Root Cause 7: Guided Selling Gaps",
        body: [
          "When products are hard to tell apart or choosing requires expertise, shoppers need help: comparison tables, quizzes, buying guides and “which one is right for me” content. These convert exploring shoppers who would otherwise leave. See [[/blogs/ecommerce-personalization|ecommerce personalization]] for guided experiences based on stated preferences.",
        ],
      },
      {
        heading: "How to Research Discovery",
        body: [],
        checklist: [
          "Export search terms: top queries, zero-result queries, high-exit queries",
          "Path analysis from landing pages to first product view",
          "Tree test the navigation with target shoppers",
          "Task-based usability tests: “find a product that…”",
          "Recordings of browsing sessions that ended without a product view",
          "Attribute completeness audit for top categories",
        ],
      },
      {
        heading: "What to Fix First",
        body: [],
        table: {
          headers: ["Priority", "Fix", "Why first"],
          rows: [
            ["1", "Broken search results, filters or zero-result pages", "Direct, measurable losses"],
            ["2", "Product data gaps in top categories", "Every route depends on data"],
            ["3", "Labels and taxonomy that confuse shoppers", "Affects every browsing session"],
            ["4", "Listing cards and default sort", "High reach, modest effort"],
            ["5", "Guided selling and recommendations", "Adds value once basics work"],
          ],
        },
      },
      {
        heading: "Measuring Discovery",
        body: [],
        checklist: [
          "Share of sessions with a product view",
          "Steps or time to first product view",
          "Search exit and zero-result rates",
          "Filter usage and list click-through",
          "Add-to-cart rate from search and listing sessions",
        ],
        cta: {
          title: "Want shoppers to find products faster?",
          description: "Talk to ZSpace Labs about [[/services/ui-ux-design|discovery UX]], [[/services/cro-audit|search and navigation audits]] and [[/services/shopify-development|Shopify implementation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Product discovery fails when routes don't match shoppers' thinking or when the data behind them is weak. Measure the symptoms, trace them to root causes, fix data and structure first, then refine search, filters, cards and guidance. The payoff reaches every shopper who didn't arrive on the right product page.",
          "For related guides, see [[/blogs/marketplace-product-discovery|marketplace product discovery]].",
        ],
      },
    ],
  },

  // ------------------------------------ 109 · WEBSITE ARCHITECTURE
  {
    slug: "ecommerce-website-architecture",
    title: "Ecommerce Website Architecture: How to Structure a Scalable Online Store",
    seoTitle: "Ecommerce Website Architecture: Structure a Scalable Store",
    excerpt:
      "How to structure an online store that scales: catalog model, taxonomy, URLs, templates, navigation, platform choice, integrations, data ownership and performance.",
    category: "Web Development",
    banner: "ecomarch",
    bannerAlt:
      "Ecommerce architecture layers: channels, storefront and information architecture, commerce platform, APIs and events, and data, connected to PIM, ERP, OMS or 3PL, CRM and email, search and recommendations, and analytics.",
    date: "2026-09-29",
    readingTime: "15 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer"],
    faqs: [
      { q: "What is ecommerce website architecture?", a: "The structure of an online store at two levels: information architecture (catalog, categories, URLs, templates and navigation) and technical architecture (platform, front end, integrations and data flows)." },
      { q: "What makes an ecommerce architecture scalable?", a: "A catalog model that handles new products and attributes, a taxonomy that can grow without restructuring, stable URLs, reusable templates, clear data ownership between systems, and infrastructure that handles traffic peaks." },
      { q: "What's a good URL structure for an online store?", a: "Short, readable, stable URLs for categories and products, with one canonical URL per page. Avoid encoding things that change, such as prices, dates or promotions, in URLs." },
      { q: "Should product URLs include the category?", a: "It isn't necessary, and it can cause duplicate URLs when products sit in several categories. Many platforms use a product-only path with breadcrumbs showing the hierarchy." },
      { q: "How deep should a category hierarchy be?", a: "As shallow as the catalog allows while keeping categories meaningful. Important products should be reachable in a few clicks." },
      { q: "What is a PIM and do I need one?", a: "A product information management system centralizes product data for several channels. Stores with large catalogs, many channels or complex attributes benefit; smaller stores can manage data in the platform." },
      { q: "Monolithic, headless or composable?", a: "Monolithic platforms such as Shopify with a theme are simplest to run. Headless separates the front end. Composable assembles best-of-breed services. Choose by requirements and your team's capacity to operate the result." },
      { q: "Which system should be the source of truth?", a: "Decide per data type: often the ERP for stock and cost, a PIM or the platform for product content, the platform for orders, and the CRM for customer engagement. Document it." },
      { q: "How does architecture affect SEO?", a: "It decides crawlability, duplication and internal linking: category structure, URL patterns, faceted navigation, pagination and templates all come from architecture decisions." },
      { q: "How is this different from general scalable website architecture?", a: "General architecture focuses on hosting, rendering and application structure. Ecommerce architecture adds catalog modeling, taxonomy, commerce integrations and inventory and order flows." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A scalable ecommerce architecture has two halves. The information architecture defines how the catalog is modeled (products, variants, attributes), how it's organized (a shallow, shopper-centred taxonomy), how pages are addressed (short, stable, canonical URLs) and which templates render them. The technical architecture defines the platform and front end, the systems around it (PIM, ERP, OMS, CRM, search, analytics), which system owns each type of data, and how they exchange it through APIs and events. Design both so the store can add products, categories, markets and channels without restructuring.",
          "Product data flows across this stack are detailed in [[/blogs/ecommerce-product-data-architecture|product data architecture]].",
        ],
      },
      {
        heading: "Two Meanings of Architecture",
        body: [
          "The diagram above stacks the layers. Shoppers meet the storefront and its information architecture; behind it sit the commerce platform, the integration layer and the data. Around them sit the business systems. Problems in either half surface as the same symptoms: slow change, inconsistent data, poor discovery and SEO issues. For general web application architecture, see [[/blogs/scalable-website-architecture|scalable website architecture]].",
        ],
      },
      {
        heading: "The Catalog Model",
        body: [
          "Everything starts with how products are modeled: what's a product and what's a variant, which attributes exist per category, which are structured values (for filtering and comparison) and which are content. Decide this per category before building, because templates, filters, search, structured data and integrations all depend on it.",
        ],
        table: {
          headers: ["Decision", "Consider"],
          rows: [
            ["Product vs variant", "Do options share content and URL, or need their own?"],
            ["Attributes per category", "Which decide purchases and must be filterable?"],
            ["Value formats", "Units, allowed values, naming conventions"],
            ["Relationships", "Accessories, compatibility, bundles, alternatives"],
            ["Content", "Descriptions, guides, media per product or shared"],
          ],
        },
      },
      {
        heading: "Taxonomy and Categories",
        body: [
          "Build a shallow hierarchy that reflects how shoppers think, validated with card sorting and tree testing. Allow products to belong to several categories while keeping one canonical product URL. Use curated collections for campaigns and edits on top of the core taxonomy, not in place of it. Govern it: decide who can add categories and how retired ones are redirected. See [[/blogs/information-architecture|information architecture]].",
        ],
      },
      {
        heading: "URL Structure",
        body: [],
        table: {
          headers: ["Page type", "Good pattern", "Avoid"],
          rows: [
            ["Category", "/women/jackets", "IDs, session parameters, dates"],
            ["Subcategory", "/women/jackets/rain", "Very deep nesting"],
            ["Product", "/products/linen-shirt", "Category-dependent product paths that duplicate"],
            ["Filtered view worth ranking", "/women/jackets/waterproof (static)", "Random parameter orders"],
            ["Content", "/guides/how-to-choose-a-rain-jacket", "Blog paths that change with redesigns"],
          ],
        },
        callout: {
          type: "tip",
          text: "Stable URLs are an architectural asset. Every URL change needs a redirect and costs some momentum, so choose patterns that won't need changing when the design does.",
        },
      },
      {
        heading: "Templates",
        body: [
          "Most stores need a small number of templates rendering thousands of pages: home, category, product (sometimes per category family), search, cart, content and landing pages. Design templates to be driven by data, so adding a category or attribute doesn't need new code, and component-based, so changes apply consistently.",
        ],
      },
      {
        heading: "Navigation, Search and Internal Links",
        body: [
          "Navigation, breadcrumbs, filters, search and related-product modules turn the taxonomy into routes. Design them together: the same labels in menus and filters, crawlable links for the hierarchy, and no crawlable links to filter combinations you don't want indexed. See [[/blogs/ecommerce-internal-linking|ecommerce internal linking]] and [[/blogs/ecommerce-faceted-navigation-seo|faceted navigation SEO]].",
        ],
        cta: {
          title: "Outgrowing your store's structure?",
          description: "ZSpace Labs designs catalog models, taxonomies and technical architecture for stores that need to scale.",
        },
      },
      {
        heading: "Platform and Front-End Options",
        body: [],
        table: {
          headers: ["Approach", "What it means", "Fits when"],
          rows: [
            ["SaaS platform with theme", "e.g. Shopify with a Liquid theme", "Most stores; fastest to run"],
            ["SaaS platform, headless", "Platform APIs with a custom front end", "Front-end needs beyond themes"],
            ["Composable", "Separate services for commerce, content, search and more", "Large teams with complex needs"],
            ["Custom platform", "Built in-house", "Rarely justified for retail"],
          ],
        },
      },
      {
        heading: "Integrations and Data Ownership",
        body: [
          "As stores grow, data spreads across systems. Decide which system is the source of truth for each type of data, how changes flow, and what happens when a sync fails.",
        ],
        table: {
          headers: ["Data", "Common owner"],
          rows: [
            ["Product content and attributes", "PIM or commerce platform"],
            ["Stock levels", "ERP or inventory system"],
            ["Prices", "ERP or platform, depending on pricing complexity"],
            ["Orders", "Commerce platform, sent to ERP / OMS"],
            ["Fulfilment status", "OMS or 3PL, sent back to the platform"],
            ["Customer engagement", "CRM and email platform"],
          ],
        },
      },
      {
        heading: "Events, APIs and Reliability",
        body: [
          "Integrations should use webhooks or events for changes and APIs for queries, with retries, idempotency, logging and alerts. Batch syncs are simpler but create windows where data is stale, such as stock that has already sold. Document every integration and its failure behavior. See [[/blogs/shopify-business-systems-integration-guide|connecting Shopify to business systems]] and [[/blogs/api-first-website-development|API-first development]].",
          "Deep dives: [[/blogs/ecommerce-event-driven-architecture|event-driven architecture]], [[/blogs/ecommerce-webhooks|webhooks]] and [[/blogs/ecommerce-microservices-architecture|microservices architecture]].",
        ],
      },
      {
        heading: "Performance and Traffic Peaks",
        body: [
          "Architecture decides how a store behaves under sale traffic: caching of category and product pages, image delivery through a CDN, how much work happens per request, and third-party scripts. Load-test before peak events, and keep performance budgets on templates. See [[/blogs/website-performance-optimization|website performance optimization]].",
        ],
      },
      {
        heading: "International and Multi-Channel",
        body: [
          "Plan for markets and channels early: URL structure per market (subfolders, subdomains or domains), translated content and localized pricing, and product data that can feed marketplaces and social channels as well as the store.",
        ],
      },
      {
        heading: "Governance and Documentation",
        body: [],
        checklist: [
          "A catalog data dictionary: attributes, formats, owners",
          "Rules for creating and retiring categories, with redirects",
          "An architecture diagram of systems and data flows",
          "Integration runbooks: what fails, how it's detected and fixed",
          "Template and component documentation",
          "Performance and accessibility standards",
        ],
        cta: {
          title: "Planning a store that needs to scale?",
          description: "Talk to ZSpace Labs about [[/services/website-development|ecommerce architecture and development]], [[/services/shopify-development|Shopify]] and [[/services/ui-ux-design|information architecture]].",
        },
      },
      {
        heading: "Common Architecture Mistakes",
        body: [],
        checklist: [
          "Modeling attributes as free text or tags",
          "Category trees mirroring internal departments",
          "URLs that change with every redesign",
          "Several systems claiming to own stock or prices",
          "Integrations without failure handling",
          "Choosing headless or composable for prestige rather than need",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A scalable online store is designed at two levels: a catalog, taxonomy, URL and template structure shoppers and search engines can follow, and a platform and integration structure with clear data ownership. Get both right and growth means adding products, categories and markets, not restructuring. For SEO implications, see [[/blogs/ecommerce-seo|ecommerce SEO]].",
          "For related guides, see [[/blogs/ecommerce-technology-stack|ecommerce technology stack]], [[/blogs/headless-ecommerce-architecture|headless ecommerce architecture]], [[/blogs/ecommerce-architecture-audit|ecommerce architecture audit]] and [[/blogs/ecommerce-scalability|ecommerce scalability]] and [[/blogs/ecommerce-microservices-vs-monolith|microservices vs monolith]].",
        ],
      },
    ],
  },

  // -------------------------------------------- 110 · REPLATFORMING
  {
    slug: "ecommerce-replatforming",
    title: "Ecommerce Replatforming: How to Choose Your Next Commerce Platform",
    seoTitle: "Ecommerce Replatforming: Choosing Your Next Commerce Platform",
    excerpt: "When to replatform and how to choose your next commerce platform: requirements, evaluation framework, total cost, integrations, SEO and migration risk.",
    category: "Web Development",
    banner: "replatformflow",
    bannerAlt:
      "Ecommerce replatforming process: audit, requirements, platform choice, data and systems planning, build, migration with redirects, and cutover and stabilization.",
    date: "2026-09-29",
    updated: "2026-09-30",
    readingTime: "18 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer"],
    faqs: [
      { q: "What is ecommerce replatforming?", a: "Moving an online store from one commerce platform to another, including its catalog, customers, orders, content, integrations, URLs and operations." },
      { q: "When should a store replatform?", a: "When the current platform can't support the business: high maintenance or licensing costs, missing capabilities, performance or security problems, integration limits, or a team that can't change the store fast enough. Rule out fixing the current platform first." },
      { q: "How do I choose a new ecommerce platform?", a: "Against written requirements: catalog and pricing needs, markets, B2B, checkout and payments, integrations, content, performance, total cost of ownership and the skills available to run it." },
      { q: "What data can be migrated?", a: "Usually products, customers, historical orders, content, redirects and often reviews and gift card balances. Customer passwords typically can't be migrated because they're encrypted; customers set new ones." },
      { q: "How do I avoid losing SEO when replatforming?", a: "Inventory every URL with traffic or links, keep URLs where the new platform allows, redirect every changed URL, carry over content and metadata, and monitor Search Console closely after launch." },
      { q: "Should we redesign at the same time?", a: "Only when necessary. A like-for-like migration first, followed by redesign, isolates risk. When both must happen, plan more testing and a longer stabilization period." },
      { q: "What is a cutover plan?", a: "The step-by-step plan for switching live traffic to the new platform: content freezes, final data syncs, DNS changes, checks, rollback criteria and who does what." },
      { q: "What about subscriptions and saved payment methods?", a: "They're among the hardest parts. Migrating subscription contracts and payment tokens depends on your payment providers and apps; plan it early with them." },
      { q: "How long does replatforming take?", a: "It depends on catalog size, integrations, data quality, customization and whether design changes too. Integrations and data migration usually drive the timeline." },
      { q: "How is this different from migrating to Shopify?", a: "This guide covers the replatforming decision and program for any platform. The Shopify migration guide covers the specific steps and tools for moving to Shopify." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Replatform when the current platform genuinely limits the business, and only after ruling out fixing it. Audit what you have, write requirements, choose a platform on requirements and total cost of ownership, and plan data and integration migration early, since they drive risk and timeline. Protect SEO with a full URL inventory and redirects, keep design changes small or phased, test with real data and orders, cut over with a rehearsed plan and rollback criteria, and stabilize for several weeks with daily monitoring before starting optimization.",
        ],
      },
      {
        heading: "Replatforming, Migration and Redesign",
        body: [
          "Replatforming changes the commerce platform. Migration is the data and URL move that replatforming requires. Redesign changes the experience and may or may not accompany it. This guide covers the program. For the specific steps of moving to Shopify, see [[/blogs/migrating-to-shopify-guide|Shopify store migration]]; for non-commerce websites, see [[/blogs/website-replatforming|website replatforming]].",
        ],
      },
      {
        heading: "Signs You Need to Replatform",
        body: [],
        checklist: [
          "Maintenance, hosting or licensing costs rising faster than the business",
          "Security updates or version upgrades that are risky or unsupported",
          "Missing capabilities: markets, B2B, subscriptions, modern checkout",
          "Integrations that are fragile or impossible",
          "Performance that can't be fixed within the platform",
          "Simple changes requiring developers and long release cycles",
          "Difficulty hiring people who know the platform",
        ],
      },
      {
        heading: "How to Tell If the Platform Is the Constraint",
        body: [
          "Many problems blamed on the platform are really theme, app, integration or data problems that can be fixed in place. Before deciding to replatform, test each complaint: can the requirement be met natively, with an app, with custom development or with a cleaner integration on the current platform? Replatforming is justified when essential requirements can't be met at acceptable cost or risk. An [[/blogs/ecommerce-architecture-audit|ecommerce architecture audit]] is the best way to find out.",
        ],
        table: {
          headers: ["Limitation", "Platform problem?", "Check first"],
          rows: [
            ["Slow pages", "Sometimes", "Theme code, apps, scripts, images"],
            ["Can't sell in new markets", "Often", "Multi-market features, plans, apps"],
            ["B2B pricing and accounts", "Often", "Native B2B features, extensions"],
            ["Integrations fail", "Rarely", "Integration design, monitoring"],
            ["Unsupported, can't upgrade", "Yes", "Extent of customization"],
            ["High maintenance cost", "Sometimes", "Custom code, hosting, security patching"],
          ],
        },
      },
      {
        heading: "Performance, Scalability and Maintenance",
        body: [
          "Compare platforms on the operational factors that decide long-term cost: who maintains infrastructure and security, how upgrades happen, how the platform handles peak traffic, API limits for integrations, and how much custom code your requirements would need. A SaaS platform shifts infrastructure work to the vendor but constrains customization; self-hosted and custom platforms offer control at the cost of maintenance. See [[/blogs/ecommerce-scalability|ecommerce scalability]] and [[/blogs/ecommerce-technical-debt|ecommerce technical debt]].",
        ],
      },
      {
        heading: "Build the Business Case",
        body: [
          "Compare total cost of ownership over several years, not just licence fees: hosting, development, maintenance, apps and extensions, payment fees, internal time and the cost of limitations. Include one-off migration costs and the risk of a temporary dip in sales or search traffic. A strong case names the specific capabilities the new platform unlocks. If Shopify is on the shortlist, see [[/blogs/shopify-plus-vs-shopify|Shopify Plus vs Shopify]] for how plans differ.",
        ],
      },
      {
        heading: "Requirements and Platform Selection",
        body: [],
        table: {
          headers: ["Area", "Questions"],
          rows: [
            ["Catalog", "Variants, attributes, bundles, catalog size"],
            ["Pricing", "Price lists, B2B pricing, promotions, markets"],
            ["Checkout and payments", "Methods per market, customization limits"],
            ["Integrations", "ERP, OMS, PIM, CRM, marketplaces"],
            ["Content", "Editing needs, CMS, landing pages"],
            ["International", "Currencies, languages, domains, taxes"],
            ["Operations", "Fulfilment, returns, customer service tools"],
            ["Team", "Skills to run and extend the platform"],
            ["Cost", "Total cost of ownership over several years"],
          ],
        },
        callout: {
          type: "tip",
          text: "Ask vendors and partners to demonstrate your hardest requirements, not their standard demo. See [[/blogs/how-to-choose-ecommerce-development-company|how to choose an ecommerce development company]].",
        },
      },
      {
        heading: "Data Migration",
        body: [],
        table: {
          headers: ["Data", "Notes"],
          rows: [
            ["Products and variants", "Map the old model to the new one; clean data before import"],
            ["Customers", "Passwords generally can't move; plan account activation invites"],
            ["Historical orders", "Needed for service and reporting; check import options"],
            ["Content", "Pages, blogs, images, metadata"],
            ["Reviews", "Export and import with dates and verified status where supported"],
            ["Gift cards and store credit", "Balances must be preserved"],
            ["Subscriptions", "Contracts and payment tokens depend on providers; plan early"],
            ["URL redirects", "Existing redirects plus new ones for changed URLs"],
          ],
        },
      },
      {
        heading: "Integrations",
        body: [
          "Integrations usually decide the timeline. List every system connected to the store, what data flows each way and how often, and whether a connector exists for the new platform or custom work is needed. Test each integration with production-like volumes, including failure and retry behavior. See [[/blogs/ecommerce-website-architecture|ecommerce website architecture]].",
        ],
        cta: {
          title: "Considering a replatform?",
          description: "ZSpace Labs helps you decide whether to replatform, choose the platform on requirements and plan a migration that protects sales and search traffic.",
        },
      },
      {
        heading: "SEO Migration",
        body: [],
        checklist: [
          "Crawl the current site and export every URL with traffic, links or revenue",
          "Keep URLs where the new platform allows",
          "Build a redirect map from every old URL to the closest new URL",
          "Carry over titles, meta descriptions, headings, copy, alt text and structured data",
          "Check canonical tags, robots rules and sitemaps on staging",
          "Test redirects in bulk before launch; see the [[/blogs/website-migration-guide|website migration guide]] for the full checklist",
          "Monitor Search Console, rankings and organic revenue daily after launch",
        ],
      },
      {
        heading: "Design: Lift and Shift or Redesign?",
        body: [
          "Recreating the current experience on the new platform isolates the platform change and makes problems easier to diagnose. Redesigning at the same time can make sense when the old design can't be rebuilt cheaply, but it doubles the variables. If you combine them, invest more in testing and plan a longer stabilization. See [[/blogs/ecommerce-website-redesign|ecommerce website redesign]].",
        ],
      },
      {
        heading: "Testing",
        body: [],
        checklist: [
          "Full catalog loaded into staging, not a sample",
          "Test orders for every payment method, market and shipping method",
          "Taxes, discounts, gift cards and subscriptions",
          "Integrations with production-like volumes and failure cases",
          "Customer account activation and order history",
          "Analytics and marketing tags",
          "Redirects, canonicals and sitemaps",
          "Performance and accessibility on key templates",
        ],
      },
      {
        heading: "Cutover",
        body: [
          "Rehearse the cutover. Agree a content and catalog freeze, final data sync of orders and customers, DNS and domain changes, payment and checkout checks, redirect activation and go/no-go criteria. Name who does each step, define rollback criteria, and launch at a quiet time with the team available.",
        ],
      },
      {
        heading: "Stabilization",
        body: [
          "For the first weeks, monitor daily: orders and conversion by device and channel, payment failures, integration errors, customer service contacts, 404s and Search Console coverage. Fix issues quickly and hold non-essential changes until the store is stable. Then compare against the pre-migration baseline and move into optimization.",
        ],
      },
      {
        heading: "A Platform Evaluation Framework",
        body: [
          "There's no universally best commerce platform; there's the best fit for your requirements, team and budget. Score candidates against weighted criteria drawn from your requirements, validate the top candidates with demos built on your scenarios and reference conversations, and include total cost over several years.",
        ],
        table: {
          headers: ["Criterion", "Questions"],
          rows: [
            ["Functional fit", "Catalog model, pricing, B2B, subscriptions, markets"],
            ["Checkout and payments", "Customization limits, methods, markets"],
            ["Integrations", "ERP, OMS, PIM, marketing; APIs and rate limits"],
            ["Scalability", "Order peaks, catalog size, number of stores"],
            ["Content and UX flexibility", "Themes, headless options, editing"],
            ["SEO", "URL control, metadata, performance"],
            ["Operations", "Staff tools, permissions, workflows"],
            ["Total cost", "Licences, fees, apps, hosting, development, maintenance"],
            ["Migration complexity", "Data model gaps, redirects, re-training"],
          ],
        },
      },
      {
        heading: "Total Cost of Ownership",
        body: [
          "Compare costs over three to five years: platform licence and transaction fees, payment fees, apps and extensions, hosting, development for build and ongoing changes, maintenance, and internal time. Include migration cost and the cost of risk (temporary drops in conversion or traffic). Cheaper licences sometimes mean higher development and maintenance costs, and the reverse. See [[/blogs/ecommerce-platform-migration|migration strategy]] and [[/blogs/migrating-to-shopify-guide|Shopify migration]].",
        ],
      },
      {
        heading: "Migration Risks and Mitigations",
        body: [],
        table: {
          headers: ["Risk", "Mitigation"],
          rows: [
            ["Search traffic loss", "Complete URL map, 301s, metadata and structured data carried over, monitoring"],
            ["Data loss or corruption", "Data mapping, rehearsals, validation reports"],
            ["Customers can't sign in", "Password reset communication, passwordless options"],
            ["Subscriptions stop billing", "Payment token migration planned and tested"],
            ["Integrations fail at launch", "Integration tests, parallel running, monitoring"],
            ["Operational disruption", "Staff training, low-traffic cutover, rollback plan"],
            ["Scope and timeline overrun", "Phased approach, clear requirements, change control"],
          ],
        },
      },
      {
        heading: "Worked Example: Deciding Whether to Replatform",
        body: [
          "An illustrative scenario: a retailer on a self-hosted platform struggles with security patching, slow upgrades and a growing list of custom modules, and wants to expand to two new markets. An audit finds the customizations make version upgrades impractical and multi-market support would require significant custom work. The business case compares staying (continued maintenance and custom multi-market build) with moving to a SaaS platform with native markets. The retailer replatforms, migrating in one cutover after two rehearsals, and follows a [[/blogs/ecommerce-platform-migration|platform migration plan]] focused on URLs, customer data and subscriptions. For Shopify specifically, see [[/blogs/migrating-to-shopify-guide|Shopify migration]], and for a phased plan, [[/blogs/ecommerce-technology-modernization-roadmap|modernization roadmap]].",
        ],
      },
      {
        heading: "Common Replatforming Mistakes",
        body: [],
        checklist: [
          "Choosing a platform before writing requirements",
          "Underestimating integrations and data cleanup",
          "Forgetting subscriptions, gift cards or reviews",
          "Incomplete redirect maps",
          "Redesigning everything at the same time without extra testing",
          "No rehearsed cutover or rollback plan",
          "Launching before peak season",
        ],
        cta: {
          title: "Want a replatform without the usual losses?",
          description: "Talk to ZSpace Labs about [[/services/website-development|replatforming and migration]], [[/services/shopify-development|moving to Shopify]] and a [[/services/cro-audit|post-launch conversion review]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Replatforming is a business program, not just a technical move. Justify it with requirements and total cost of ownership, plan data and integrations first, protect search traffic, limit simultaneous changes, test with real data, rehearse the cutover and stabilize before optimizing.",
        ],
      },
    ],
  },
];
