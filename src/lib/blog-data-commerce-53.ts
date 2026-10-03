import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch six, part nine: ecommerce analytics
 * architecture, event tracking, product analytics, category page
 * optimization and dashboard design. The analytics hub is
 * `ecommerce-analytics`; funnel analytics is `ecommerce-conversion-funnel`;
 * KPI selection is `ecommerce-kpi-dashboard`. Merged into `posts` in
 * blog-data.ts.
 */

export const commercePosts53: BlogPost[] = [
  // ---------------------------------------- 302 · ANALYTICS ARCHITECTURE
  {
    slug: "ecommerce-analytics-architecture",
    title: "Ecommerce Analytics Architecture: How to Build a Reliable Data System",
    seoTitle: "Ecommerce Analytics Architecture: Build a Reliable Data System",
    excerpt: "How to design ecommerce analytics architecture: storefront and server events, revenue source of truth, tools, warehouses, CRM data, dashboards and governance.",
    category: "Web Development",
    banner: "analyticsarch",
    bannerAlt:
      "Ecommerce analytics architecture in four columns: collect (storefront events, server events, platform orders, consent state), store and model (analytics tool, warehouse, order and refund data, customer and CRM data), analyse (dashboards, funnels and cohorts, product and merchandising reports, experiments) and govern (tracking plan, definitions, access control, data quality checks, highlighted), noting that the order system is the source of truth for revenue.",
    date: "2026-09-29",
    readingTime: "20 min read",
    relatedServiceSlugs: ["website-development", "cro-audit", "ai-automation"],
    relatedIndustrySlugs: ["ecommerce", "retail"],
    faqs: [
      { q: "What is ecommerce analytics architecture?", a: "The design of how an online store collects, stores, models and uses data: storefront and server events, platform orders, analytics tools, a warehouse where needed, CRM and marketing data, pipelines, dashboards and the governance that keeps definitions and quality consistent." },
      { q: "What is the source of truth for revenue?", a: "Usually the ecommerce platform or order management system, which records orders, refunds, taxes and discounts. Analytics tools estimate behaviour and attribution but can miss orders due to consent choices, blockers or tracking errors." },
      { q: "Do all stores need a data warehouse?", a: "No. Smaller stores often manage with platform analytics and one analytics tool. A warehouse becomes useful when combining several sources (orders, marketing, CRM, support), analysing history in depth or building custom models." },
      { q: "What is the difference between client-side and server-side tracking?", a: "Client-side tracking sends events from the browser; server-side tracking sends events from your servers or via a server container. Server-side can improve reliability and control but still has to respect consent." },
      { q: "What is a tracking plan?", a: "A document listing every event, when it fires, its parameters and definitions, owners and destinations. It keeps implementation consistent and makes analytics trustworthy." },
      { q: "How should consent affect analytics architecture?", a: "Events and identifiers should be collected and used according to users' consent choices and applicable privacy law, which varies by jurisdiction. Architecture should carry consent state with the data." },
      { q: "Which analytics tools should an ecommerce store use?", a: "There's no universal stack. Many stores combine platform reports, a web analytics tool, a product analytics or experimentation tool and, as they grow, a warehouse and BI tool. Choose based on questions, skills and budget." },
      { q: "How do I keep analytics data reliable?", a: "With a tracking plan, validation before release, automated checks comparing analytics purchases with platform orders, clear metric definitions and ownership." },
      { q: "How does CRM data fit in?", a: "CRM and email data add customer and lifecycle context. Joining them with order data (with consistent identifiers) supports cohort, retention and segmentation analysis." },
      { q: "Can AI help with ecommerce analytics?", a: "AI tools can help explore data, detect anomalies and summarize reports, but they depend on the same clean data and definitions and should be checked against source figures." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A reliable ecommerce analytics architecture collects behavioural events from the storefront (and server where useful), treats the ecommerce platform or order system as the source of truth for revenue, sends data to an analytics tool and, when needed, a warehouse where orders, refunds, marketing and CRM data are joined, models metrics with shared definitions, serves dashboards and analyses, and is governed by a tracking plan, consent handling, access control and automated quality checks. Choose tools from your questions and team, not from a universal stack.",
        ],
      },
      {
        heading: "Why Architecture Matters",
        body: [
          "Most analytics problems in ecommerce aren't about missing dashboards; they're about untrusted numbers. Revenue in the analytics tool doesn't match the platform, events fire twice, definitions differ between teams, and nobody knows which report is right. Architecture fixes this by deciding where each kind of data comes from, where it's combined and who owns definitions. The diagram above shows the four layers. For the broader analytics practice, see [[/blogs/ecommerce-analytics|ecommerce analytics]].",
        ],
      },
      {
        heading: "Layer 1: Collection",
        body: [
          "Collection covers behavioural events from the storefront (views, searches, filters, add to cart, checkout steps), server-side events (orders, refunds, subscription renewals) and platform data exports. Each has strengths: browser events capture behaviour; server events and platform exports capture transactions reliably.",
        ],
        table: {
          headers: ["Source", "Strength", "Limitation"],
          rows: [
            ["Browser (client-side) events", "Rich behaviour, UX interactions", "Affected by consent, blockers, errors"],
            ["Server-side events", "Reliability, control over data sent", "Needs engineering; still subject to consent"],
            ["Platform orders and refunds", "Source of truth for revenue", "Limited behavioural context"],
            ["Marketing platforms", "Spend, campaigns", "Own attribution models"],
            ["CRM and email", "Customer and lifecycle data", "Identity matching needed"],
            ["Support and reviews", "Qualitative signals", "Unstructured"],
          ],
        },
      },
      {
        heading: "Platform Events as a Foundation",
        body: [
          "Many platforms expose standard storefront events. Shopify's customer events, for example, include page_viewed, collection_viewed, product_viewed, search_submitted, product_added_to_cart, cart_viewed, checkout_started, payment_info_submitted and checkout_completed, which pixels and apps can subscribe to (Shopify developer docs). Google Analytics 4 defines recommended ecommerce events such as view_item, add_to_cart, begin_checkout, purchase and refund (Google Analytics documentation). Map platform events to your tracking plan rather than inventing names. See [[/blogs/ecommerce-event-tracking|ecommerce event tracking]].",
        ],
      },
      {
        heading: "Layer 2: Storage and Modelling",
        body: [
          "Small stores can rely on platform reports plus one analytics tool. As questions grow (cohorts across channels, margin after returns, marketing efficiency, customer lifetime value), a warehouse becomes valuable: raw data lands from each source, then models create clean tables for orders, customers, products and sessions with shared definitions. Keep raw data unchanged and build transformations in version-controlled code.",
        ],
        table: {
          headers: ["Stage", "Typical setup"],
          rows: [
            ["Early", "Platform analytics + web analytics tool"],
            ["Growing", "Add product analytics or experimentation, scheduled exports"],
            ["Scaling", "Warehouse with pipelines from platform, analytics, ads, CRM"],
            ["Advanced", "Modelled metrics layer, BI, forecasting, ML where justified"],
          ],
        },
        cta: {
          title: "Analytics numbers that nobody trusts?",
          description: "ZSpace Labs designs ecommerce analytics architectures with clear sources of truth, tracking plans and quality checks.",
        },
      },
      {
        heading: "Identity and Joining Data",
        body: [
          "Joining behaviour, orders and CRM data requires consistent identifiers: order IDs, customer IDs, hashed emails where consent allows, and campaign parameters. Decide how guests and logged-in customers are linked and document it. Poor identity handling causes duplicate customers and wrong retention figures. See [[/blogs/ecommerce-crm-integration|ecommerce CRM integration]].",
        ],
      },
      {
        heading: "Layer 3: Analysis and Dashboards",
        body: [
          "Dashboards should serve questions and audiences: leadership needs a few headline metrics against targets, merchandisers need product and category performance, CRO teams need funnels and experiments. Build from the modelled layer, not directly from raw events. See [[/blogs/ecommerce-dashboard-design|ecommerce dashboard design]] and [[/blogs/ecommerce-kpi-dashboard|KPI dashboard]].",
        ],
      },
      {
        heading: "Layer 4: Governance",
        body: [],
        checklist: [
          "Tracking plan with events, parameters, owners and destinations",
          "Metric definitions (revenue, conversion, AOV, margin) agreed and documented",
          "Consent state carried with events and respected downstream",
          "Access control for personal data",
          "Automated checks: analytics purchases vs platform orders, event volumes, schema changes",
          "Change process for tracking updates with testing",
        ],
      },
      {
        heading: "Quality Checks That Catch Problems Early",
        body: [
          "Compare daily purchase counts and revenue between analytics and the platform, alert on sudden changes in event volumes, validate parameters (currency, item IDs) and test tracking in staging before releases. Expect differences caused by consent and blockers; investigate changes in the gap rather than chasing perfect matches.",
        ],
        code: {
          label: "Daily reconciliation check (pseudocode)",
          text: "platform = orders(date = yesterday, status != test).count, .sum(revenue_net)\nanalytics = events(name = \"purchase\", date = yesterday).count, .sum(value)\ngap = 1 - analytics.count / platform.count\nif gap > usual_gap + tolerance:\n    alert(\"Purchase tracking gap widened\", gap)",
        },
      },
      {
        heading: "Privacy and Consent",
        body: [
          "Analytics architecture must respect privacy law and consent choices, which vary by jurisdiction. Collect only what you need, carry consent state with data, minimize personal data in analytics tools, set retention periods and document processing. Server-side collection doesn't remove consent obligations. See [[/blogs/mobile-app-data-privacy|data privacy]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a growing store sees revenue differ between its analytics tool and platform, and marketing, merchandising and finance each report different conversion rates. The team writes a tracking plan mapped to platform events, adds server-side purchase and refund events, builds a small warehouse with orders, refunds, ad spend and CRM data, defines metrics in one modelling layer, rebuilds dashboards from it and adds a daily reconciliation check. Reports now start from shared definitions.",
        ],
      },
      {
        heading: "Choosing Tools Without Lock-In",
        body: [
          "Tool choices change as stores grow. Reduce lock-in by keeping a tracking plan that's tool-neutral, sending events through a layer you control (a tag manager or event pipeline), storing raw order and event data you own, and defining metrics in your modelling layer rather than only inside a vendor's interface. Then switching analytics or BI tools is a migration, not a restart. See [[/blogs/ecommerce-technology-stack|ecommerce technology stack]].",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Treating analytics revenue as the source of truth",
          "No tracking plan",
          "Building a warehouse before questions are clear",
          "Dashboards built on raw events with different definitions",
          "Ignoring consent state downstream",
          "No automated quality checks",
        ],
        cta: {
          title: "Ready to build analytics you can rely on?",
          description: "Talk to ZSpace Labs about [[/services/website-development|analytics architecture and implementation]], [[/services/cro-audit|analytics audits]] and [[/services/ai-automation|reporting automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Reliable ecommerce analytics comes from clear sources of truth, a tracking plan, shared definitions, consent-aware collection and constant quality checks, with tools chosen for your stage. For the events themselves, see [[/blogs/ecommerce-event-tracking|ecommerce event tracking]].",
          "For related guides, see [[/blogs/ecommerce-data-warehouse|data warehouse]] and [[/blogs/ecommerce-attribution-models|attribution models]].",
        ],
      },
    ],
  },

  // -------------------------------------------- 303 · EVENT TRACKING
  {
    slug: "ecommerce-event-tracking",
    title: "Ecommerce Event Tracking: What Should You Measure?",
    seoTitle: "Ecommerce Event Tracking: What Should You Measure?",
    excerpt: "Which ecommerce events to track: product lists and views, search, filters, cart, checkout, purchase, refunds, wishlists, accounts and subscriptions.",
    category: "CRO",
    banner: "eventmap",
    bannerAlt:
      "Ecommerce event map using GA4-style names where they exist, in four columns: discovery (view_item_list, select_item, search, view_promotion), product (view_item, add_to_wishlist, variant selected, size guide opened), cart and checkout (add_to_cart, view_cart, begin_checkout, add_payment_info, highlighted) and after purchase (purchase, refund, subscription events, account events).",
    date: "2026-09-29",
    readingTime: "19 min read",
    relatedServiceSlugs: ["cro-audit", "website-development", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "retail"],
    faqs: [
      { q: "What is ecommerce event tracking?", a: "Recording specific shopper actions (viewing products, searching, filtering, adding to cart, checking out, purchasing, refunding) as structured events with parameters, so you can analyse behaviour, funnels, products and experiments." },
      { q: "Which ecommerce events are essential?", a: "Product list views and selections, product views, search, add to cart, remove from cart, cart views, checkout start and key checkout steps, purchase and refund. Many stores add filters, wishlists, account and subscription events." },
      { q: "What are GA4's recommended ecommerce events?", a: "Google's documentation lists view_item_list, select_item, view_item, add_to_cart, add_to_wishlist, view_cart, remove_from_cart, begin_checkout, add_shipping_info, add_payment_info, purchase, refund, view_promotion and select_promotion." },
      { q: "Do I need Google Analytics to track ecommerce events?", a: "No. The concepts apply to any analytics tool. Using a widely recognized naming scheme, such as GA4's recommended events, makes data easier to understand and move between tools." },
      { q: "What parameters should ecommerce events include?", a: "Typically currency, value, item IDs, names, brands, categories, variants, prices, quantities, list names and positions, and transaction IDs for purchases and refunds." },
      { q: "Should I track filter and sort usage?", a: "Yes, as custom events if your platform doesn't provide them. They show which attributes shoppers use and where discovery fails." },
      { q: "How do I avoid duplicate purchase events?", a: "Fire purchase events once per transaction ID, deduplicate on the transaction ID and prefer server-side or platform-confirmed purchase events where possible." },
      { q: "Should refunds be tracked?", a: "Yes. Refund events with transaction and item details let you analyse net revenue and product returns." },
      { q: "How does consent affect event tracking?", a: "Events must be collected and used according to users' consent choices and privacy law, which vary by jurisdiction. Plan for gaps where users decline." },
      { q: "How do I test event tracking?", a: "Use debugging tools in your analytics platform, test each event in staging with real flows, check parameters and compare purchases with platform orders." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Track the shopper actions that answer your business questions, with consistent names and parameters. Core ecommerce events cover product lists and selections, product views, search, add and remove from cart, cart views, checkout start and key steps, purchase and refund; add filters and sorting, variant and size guide interactions, wishlists, account events and subscription events where relevant. Use a widely recognized naming scheme such as GA4's recommended events, include currency, value and item details, deduplicate purchases by transaction ID, respect consent and test before release.",
        ],
      },
      {
        heading: "Concepts Before Tools",
        body: [
          "Event tracking is a concept, not a product. Whatever tool you use, each event is a named action with parameters: what happened, to which items, at what value, in which context. The event map above groups events by journey stage, using GA4-style names where Google defines them and descriptive custom names elsewhere. Start with questions (where do shoppers drop off, which products are viewed but not bought) and track what answers them. See [[/blogs/ecommerce-analytics|ecommerce analytics]] and [[/blogs/ecommerce-analytics-architecture|analytics architecture]].",
        ],
      },
      {
        heading: "Core Ecommerce Events",
        body: [
          "Google Analytics 4 documents a set of recommended ecommerce events that many teams use as a naming standard even outside GA4 (Google Analytics documentation):",
        ],
        table: {
          headers: ["Event", "When it fires", "Answers"],
          rows: [
            ["view_item_list", "A product list is shown (category, search, recommendations)", "Which lists shoppers see"],
            ["select_item", "A product is clicked from a list", "List effectiveness, positions"],
            ["view_item", "Product page viewed", "Product interest"],
            ["add_to_wishlist", "Product saved", "Future intent"],
            ["add_to_cart / remove_from_cart", "Cart changes", "Product and cart behaviour"],
            ["view_cart", "Cart viewed", "Cart engagement"],
            ["begin_checkout", "Checkout started", "Checkout entry"],
            ["add_shipping_info / add_payment_info", "Checkout steps completed", "Checkout drop-off"],
            ["purchase", "Order completed", "Revenue, conversion"],
            ["refund", "Refund issued", "Net revenue, returns"],
            ["view_promotion / select_promotion", "Promotions shown and clicked", "Merchandising performance"],
          ],
        },
      },
      {
        heading: "Parameters That Make Events Useful",
        body: [
          "Events without parameters can't answer product or merchandising questions. Include currency and value, and an items array with item ID, name, brand, category levels, variant, price, quantity and, for lists, list name and position. Purchases and refunds need a transaction ID. GA4's documentation, for example, supports up to 200 items per event and category levels item_category to item_category5.",
        ],
        code: {
          label: "Example add_to_cart payload (GA4-style)",
          text: "{\n  \"event\": \"add_to_cart\",\n  \"currency\": \"GBP\",\n  \"value\": 89.00,\n  \"items\": [{\n    \"item_id\": \"SKU-12345\",\n    \"item_name\": \"Trail Running Shoe\",\n    \"item_brand\": \"Brand\",\n    \"item_category\": \"Footwear\",\n    \"item_category2\": \"Running\",\n    \"item_variant\": \"UK 9 / Blue\",\n    \"item_list_name\": \"Search results\",\n    \"index\": 3,\n    \"price\": 89.00,\n    \"quantity\": 1\n  }]\n}",
        },
      },
      {
        heading: "Discovery Events Worth Adding",
        body: [
          "Standard events miss important discovery behaviour. Add custom events for search (with the query and result count), zero results, filter applied and removed (with attribute and value), sort changed and comparison added. These show how shoppers narrow the catalog and where discovery fails. GA4 also defines a search event with a search_term parameter. See [[/blogs/ecommerce-site-search|site search]] and [[/blogs/ecommerce-filters|filters]].",
        ],
        table: {
          headers: ["Custom event", "Key parameters"],
          rows: [
            ["search", "search_term, results_count"],
            ["filter_applied", "attribute, value, list_name"],
            ["sort_changed", "sort_option, list_name"],
            ["compare_added", "item_id, comparison_size"],
            ["size_guide_opened", "item_id, category"],
          ],
        },
      },
      {
        heading: "Account, Wishlist and Subscription Events",
        body: [
          "Retention analysis needs events beyond the first purchase: sign_up and login (GA4 recommended events), wishlist additions, subscription created, skipped, paused, cancelled and renewed, and reorder actions. For subscriptions, server-side events from the subscription system are more reliable than browser events. See [[/blogs/subscription-ecommerce-retention|subscription retention]].",
        ],
        cta: {
          title: "Not sure your tracking tells you anything useful?",
          description: "ZSpace Labs writes ecommerce tracking plans, implements events and validates them against your order data.",
        },
      },
      {
        heading: "Platform Implementations",
        body: [
          "Platforms provide event foundations. Shopify's customer events include page_viewed, product_viewed, collection_viewed, search_submitted, product_added_to_cart, product_removed_from_cart, cart_viewed, checkout_started, checkout_contact_info_submitted, checkout_address_info_submitted, checkout_shipping_info_submitted, payment_info_submitted and checkout_completed, available to apps and custom pixels (Shopify developer docs). Map these to your analytics tool's names in your tracking plan and add custom events for discovery behaviour. See [[/blogs/shopify-analytics-guide|Shopify analytics]].",
        ],
      },
      {
        heading: "The Tracking Plan",
        body: [],
        checklist: [
          "Event name and trigger condition",
          "Parameters, types and example values",
          "Where it's implemented (theme, app, server)",
          "Destinations (analytics, ads, warehouse)",
          "Consent category",
          "Owner and last verified date",
        ],
      },
      {
        heading: "Data Quality",
        body: [
          "Deduplicate purchases by transaction ID, prefer platform-confirmed or server-side purchase and refund events, validate parameters (currency codes, item IDs matching your catalog), and compare daily purchases with platform orders. Consent choices and blockers mean analytics won't match orders exactly; monitor the gap for sudden changes. See [[/blogs/ecommerce-analytics-architecture|analytics architecture]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario: a store tracks only page views and purchases and can't tell why category pages underperform. The team writes a tracking plan with list, item, cart and checkout events, custom search, filter and sort events with parameters, and refund events from the server. After release and validation, it finds that one category's filters are rarely used and that a checkout step has a disproportionate drop-off. See [[/blogs/ecommerce-conversion-funnel|funnel analytics]].",
        ],
      },
      {
        heading: "Event Naming Conventions",
        body: [
          "Pick one convention and stick to it: lowercase with underscores (add_to_cart), verb-object order, consistent parameter names and units. Prefer recognized names (such as GA4's recommended events) where they exist, and document custom events in the tracking plan. Renaming events later breaks historical comparisons, so decide early.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Tracking without questions",
          "Events without item parameters",
          "Duplicate purchase events",
          "No refund events",
          "Inconsistent names across platforms",
          "No testing before releases",
        ],
        cta: {
          title: "Ready to fix your ecommerce tracking?",
          description: "Talk to ZSpace Labs about [[/services/cro-audit|analytics and tracking audits]], [[/services/website-development|event implementation]] and [[/services/ui-ux-design|UX measurement]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Good event tracking captures the actions that answer your questions, with consistent names, useful parameters and verified quality. Start with core ecommerce events, add discovery and retention events and keep a living tracking plan. For turning events into product insight, see [[/blogs/ecommerce-product-analytics|ecommerce product analytics]].",
        ],
      },
    ],
  },

  // -------------------------------------------- 305 · PRODUCT ANALYTICS
  {
    slug: "ecommerce-product-analytics",
    title: "Ecommerce Product Analytics: How to Understand Product Performance",
    seoTitle: "Ecommerce Product Analytics: Understand Product Performance",
    excerpt: "How to analyse product performance: list views, product views, add-to-cart and purchase rates, revenue, returns, margin, categories and diagnosis.",
    category: "CRO",
    banner: "productanalyticsflow",
    bannerAlt:
      "Product performance path: list views, product views, add to cart (highlighted), purchase, kept (not returned), margin, with the note to judge products by the whole path, not one number.",
    date: "2026-09-29",
    readingTime: "18 min read",
    relatedServiceSlugs: ["cro-audit", "ui-ux-design", "website-development"],
    relatedIndustrySlugs: ["ecommerce", "retail"],
    faqs: [
      { q: "What is ecommerce product analytics?", a: "Analysing how individual products and categories perform through the shopping journey: how often they're seen in lists, clicked, viewed, added to cart, purchased, returned and how much margin they contribute." },
      { q: "Which product metrics matter most?", a: "List views and click-through, product views, add-to-cart rate, purchase rate, revenue, units, return rate and margin, analysed together rather than in isolation." },
      { q: "What does a low add-to-cart rate mean?", a: "Shoppers view the product but don't add it. Possible causes include price, missing information, poor imagery, size or variant availability, or mismatched traffic. Investigate before changing anything." },
      { q: "What does high add-to-cart but low purchase mean?", a: "Shoppers add the product but don't buy. Possible causes include delivery costs or times, stock issues at checkout, or the product being used as a comparison placeholder." },
      { q: "Why include returns in product analytics?", a: "A product with high sales and high returns may be less valuable than it looks, and returns reasons often reveal product page or sizing problems." },
      { q: "Are there benchmark add-to-cart rates?", a: "Rates vary widely by category, price, traffic source and store. Compare products with their own history and with similar products in your store rather than generic benchmarks." },
      { q: "How should category performance be analysed?", a: "By list views, click-through to products, conversion, revenue, returns and margin per category, and by how shoppers use filters and sorting within it." },
      { q: "What data is needed for product analytics?", a: "Item-level events (list views, selections, product views, add to cart, purchases, refunds) with consistent item IDs, plus order, return and cost data from your platform or ERP." },
      { q: "How often should product performance be reviewed?", a: "Weekly for key products and categories, with deeper monthly or seasonal reviews for assortment decisions." },
      { q: "How is this different from ecommerce analytics in general?", a: "General ecommerce analytics covers the whole store. Product analytics focuses on individual products and categories and the decisions merchandisers and product teams make about them." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Product analytics follows each product through the journey: how often it's shown in lists and clicked, viewed, added to cart, purchased, kept rather than returned, and how much margin it earns. Look at the whole path, because each drop points to different causes (visibility, appeal, information, checkout, expectations). Segment by traffic source, device and list, compare products with their own history and similar products rather than generic benchmarks, include returns and margin, and turn findings into merchandising, content and product page actions.",
        ],
      },
      {
        heading: "The Product Performance Path",
        body: [
          "The flow above shows the stages a product passes through. A product can fail at any of them: rarely shown, often shown but rarely clicked, viewed but rarely added, added but rarely bought, bought but often returned, or sold at thin margin. Each failure has different causes and fixes. For the events that feed this analysis, see [[/blogs/ecommerce-event-tracking|ecommerce event tracking]].",
        ],
        table: {
          headers: ["Stage metric", "Calculation", "Low value suggests"],
          rows: [
            ["List exposure", "Times shown in lists", "Visibility: sorting, merchandising, search"],
            ["List click-through", "Selections / list views", "Card appeal: image, price, badges"],
            ["Add-to-cart rate", "Adds / product views", "PDP information, price, variants, trust"],
            ["Cart-to-purchase", "Purchases / adds", "Delivery, stock, checkout issues"],
            ["Return rate", "Returned units / sold units", "Expectation gaps: size, colour, quality"],
            ["Margin", "Revenue − costs, returns, discounts", "Pricing, promotions, cost"],
          ],
        },
      },
      {
        heading: "Diagnosing Product Problems",
        body: [
          "Numbers point to where; evidence explains why. Combine metrics with product page reviews, session recordings, return reasons, reviews and search terms before changing anything. A low add-to-cart rate on a bestseller's new colour may mean poor imagery; on a new product it may mean mismatched traffic from a campaign.",
        ],
        table: {
          headers: ["Pattern", "Possible causes", "Evidence to check"],
          rows: [
            ["High views, low adds", "Price, information gaps, sizes out of stock", "Size availability, PDP recordings, reviews"],
            ["High adds, low purchases", "Delivery cost/time, comparison shopping", "Checkout drop-off by product, delivery settings"],
            ["High sales, high returns", "Fit, colour, quality expectations", "Return reasons, reviews"],
            ["Low exposure, high conversion", "Under-merchandised product", "List positions, search ranking"],
            ["High exposure, low click-through", "Weak card, wrong placement", "Card design, position, relevance"],
          ],
        },
      },
      {
        heading: "Segment Before Concluding",
        body: [
          "Product performance differs by traffic source (paid social vs returning email), device, market and list (search results vs category vs recommendations). A product may convert well from search and poorly from social ads. Segment by these dimensions before deciding a product is weak. See [[/blogs/ecommerce-customer-segmentation|customer segmentation]].",
        ],
        cta: {
          title: "Not sure which products are really performing?",
          description: "ZSpace Labs builds product analytics that combine behaviour, returns and margin into decisions merchandisers can act on.",
        },
      },
      {
        heading: "Category Performance",
        body: [
          "Categories are where most product discovery happens. Analyse entries, click-through to products, filter and sort usage, conversion, revenue, returns and margin per category, and how well default sorting surfaces sellers. Categories with many entries but low click-through often have card, sorting or relevance issues. See [[/blogs/ecommerce-category-page-optimization|category page optimization]].",
        ],
      },
      {
        heading: "Returns and Margin",
        body: [
          "Gross revenue flatters products that are frequently returned or heavily discounted. Include refunds (from refund events or order data), return reasons and product costs from your platform or ERP to see net revenue and margin by product. This often changes which products deserve promotion. See [[/blogs/ecommerce-analytics-architecture|analytics architecture]].",
        ],
      },
      {
        heading: "Avoid Generic Benchmarks",
        body: [
          "Add-to-cart and conversion rates vary widely by category, price point, traffic mix and store. Published averages rarely apply to your situation. Compare each product with its own history (before and after changes) and with similar products in your catalog. Use minimum traffic thresholds before drawing conclusions from small numbers.",
        ],
      },
      {
        heading: "Turning Analysis Into Action",
        body: [],
        table: {
          headers: ["Finding", "Action owner", "Example action"],
          rows: [
            ["Under-exposed strong converter", "Merchandising", "Raise in default sort, feature in collections"],
            ["Weak card click-through", "Design / content", "Test imagery, price display, badges"],
            ["Low add-to-cart", "Product page / content", "Add sizing, specs, reviews, delivery info"],
            ["High returns", "Product / content", "Fix size guidance, imagery, descriptions"],
            ["Low margin", "Commercial", "Review pricing, promotions, costs"],
          ],
        },
      },
      {
        heading: "Reporting Rhythm",
        body: [
          "Review top products and categories weekly (changes in exposure, conversion, stock), run deeper monthly reviews that include returns and margin, and seasonal assortment reviews. Present products in tables with the full path rather than single metrics, and flag significant changes. See [[/blogs/ecommerce-dashboard-design|ecommerce dashboard design]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario: a homeware store's top-selling cushion also has the highest return rate, while a similar cushion with fewer sales has low returns and higher margin but appears on page three of its category. Return reasons for the first mention colour differences. The team improves colour accuracy and descriptions for the first cushion and moves the second higher in default sort and collections. It tracks exposure, conversion, returns and margin for both over the following month.",
        ],
      },
      {
        heading: "A Product Performance Table",
        body: [
          "A useful weekly product report shows the whole path in one table: list views, click-through, product views, add-to-cart rate, purchases, revenue, return rate and margin, with change versus the previous period and flags for significant movement. Sort by revenue or by opportunity (high views, low conversion). See [[/blogs/ecommerce-dashboard-design|dashboard design]] and [[/blogs/ecommerce-merchandising|merchandising]].",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Judging products on revenue alone",
          "Ignoring list exposure and position",
          "Comparing against generic benchmarks",
          "Drawing conclusions from tiny samples",
          "Leaving returns and margin out",
          "Not segmenting by traffic source",
        ],
        cta: {
          title: "Ready to understand product performance properly?",
          description: "Talk to ZSpace Labs about [[/services/cro-audit|product and merchandising analytics]], [[/services/ui-ux-design|product page improvements]] and [[/services/website-development|analytics implementation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Product analytics is about the whole path: exposure, clicks, adds, purchases, returns and margin, segmented and compared sensibly, then turned into actions. For how products are organized, see [[/blogs/ecommerce-merchandising|ecommerce merchandising]].",
          "For related guides, see [[/blogs/ecommerce-returns-management|returns management]].",
        ],
      },
    ],
  },

  // --------------------------------------- 307 · CATEGORY PAGE OPTIMIZATION
  {
    slug: "ecommerce-category-page-optimization",
    title: "Ecommerce Category Page Optimization: How to Improve Product Discovery",
    seoTitle: "Ecommerce Category Page Optimization: Improve Discovery",
    excerpt: "A category page optimization process: measure each category, diagnose naming, hierarchy, cards, filters, sorting, loading, SEO and mobile, then test.",
    category: "CRO",
    banner: "plpopt",
    bannerAlt:
      "Category page optimization areas in four columns: structure (category names, hierarchy depth, subcategory links, intro copy), grid (card information, default sort, pinning and merchandising, out-of-stock handling, highlighted), controls (filters, sorting, load more or pagination, mobile filter panel) and visibility (crawlable URLs, titles and headings, facet indexing rules, page speed), noting to measure each category by entries, filter use, product clicks and exits.",
    date: "2026-09-29",
    readingTime: "18 min read",
    relatedServiceSlugs: ["cro-audit", "ui-ux-design", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "retail"],
    faqs: [
      { q: "What is category page optimization?", a: "A process for improving how category (collection or product listing) pages help shoppers find and choose products: measuring each category, diagnosing problems in naming, structure, cards, filters, sorting, loading, merchandising, SEO and mobile, and testing fixes." },
      { q: "How is optimization different from PLP design?", a: "Design defines the patterns and components of listing pages. Optimization is the ongoing, measured process of improving specific categories using data and testing." },
      { q: "Which metrics show category page performance?", a: "Entries, product click-through, filter and sort usage, zero-result filter combinations, scroll or load-more depth, exits, add-to-cart from the category and revenue per category visit." },
      { q: "Why do category names matter?", a: "Shoppers and search engines use them to decide whether a category contains what they want. Internal or vague names reduce clicks and discovery." },
      { q: "How should default sort be optimized?", a: "Default sort should balance relevance, popularity, availability and merchandising priorities, and be monitored for how quickly shoppers find products they click." },
      { q: "Should categories use pagination or infinite scroll?", a: "It depends on the category and audience. Many ecommerce stores use “load more” as a balance; whichever you choose, keep products crawlable and let shoppers return to their position." },
      { q: "How do category pages affect SEO?", a: "They often target important search queries. Crawlable product links, clear titles and headings, helpful copy and controlled facet indexing matter." },
      { q: "How often should categories be reviewed?", a: "Top categories weekly or monthly, and all categories when ranges change or seasons shift." },
      { q: "What about out-of-stock products?", a: "Demote or hide them in default sorts depending on your policy, show availability clearly, and avoid showing grids full of unavailable products." },
      { q: "How do I prioritize category improvements?", a: "By traffic, revenue potential, severity of problems found and effort, focusing on template-level fixes that improve many categories at once." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Category page optimization is a repeatable process: measure each category (entries, product click-through, filter and sort use, exits, revenue per visit), diagnose problems across structure (names, hierarchy, subcategory links), the grid (card information, default sort, merchandising, out-of-stock handling), controls (filters, sorting, loading) and visibility (crawlable URLs, titles, facet indexing, speed), then prioritize by traffic and impact, fix template-level issues first and test changes. It builds on good listing page design but focuses on measured improvement of specific categories.",
        ],
      },
      {
        heading: "Optimization vs Design",
        body: [
          "Product listing page design defines the components and patterns (cards, filters, sorting, layouts). Optimization is what happens after: measuring how each category performs, finding what holds it back and improving it. For the design system, see [[/blogs/ecommerce-category-page-design|product listing page design]]; for SEO specifics, see [[/blogs/ecommerce-category-page-seo|category page SEO]]. The diagram above groups the optimization areas.",
        ],
      },
      {
        heading: "Step 1: Measure Each Category",
        body: [],
        table: {
          headers: ["Metric", "What it tells you"],
          rows: [
            ["Entries and entry sources", "Importance and intent (search, navigation, ads)"],
            ["Product click-through", "Whether the grid shows relevant, appealing products"],
            ["Filter and sort usage", "Whether shoppers need to narrow down, and how"],
            ["Zero-result filter combinations", "Data or option problems"],
            ["Load-more or scroll depth", "Whether good products are too far down"],
            ["Exits", "Where categories lose shoppers"],
            ["Revenue per category visit", "Overall contribution"],
          ],
        },
      },
      {
        heading: "Step 2: Diagnose Structure",
        body: [
          "Check category names (clear, shopper language, consistent), hierarchy depth (not burying popular items), subcategory links at the top of broad categories and helpful introductory copy that doesn't push products below the fold. Overlapping or thin categories confuse shoppers and search engines. See [[/blogs/information-architecture|information architecture]].",
        ],
      },
      {
        heading: "Step 3: Diagnose the Grid",
        body: [
          "Look at what shoppers see first. Is default sort surfacing relevant, available, popular products? Do cards show the information needed to choose (price, variants, ratings, key attributes)? Are out-of-stock products cluttering the first rows? Are merchandising pins helping or hiding better products? See [[/blogs/ecommerce-product-cards|product cards]] and [[/blogs/ecommerce-product-sorting|product sorting]].",
        ],
        cta: {
          title: "Category pages getting traffic but few product clicks?",
          description: "ZSpace Labs audits categories with analytics and research, then fixes structure, sorting, cards and filters.",
        },
      },
      {
        heading: "Step 4: Diagnose Controls",
        body: [
          "Check whether the right filters exist for each category, whether they're built on complete data, whether sorting options match needs and whether loading (pagination, load more, infinite scroll) lets shoppers browse deep and return to their position. On mobile, check the filter panel and quick filters. See [[/blogs/ecommerce-filters|filters]].",
        ],
      },
      {
        heading: "Step 5: Diagnose Visibility",
        body: [
          "Ensure category pages are crawlable with product links in HTML, have clear titles and headings matching search intent, control which filter combinations are indexed and load quickly on mobile. See [[/blogs/ecommerce-category-page-seo|category page SEO]] and [[/blogs/ecommerce-faceted-navigation-seo|faceted navigation SEO]].",
        ],
      },
      {
        heading: "Step 6: Prioritize and Test",
        body: [
          "Rank findings by traffic, revenue potential, severity and effort. Template-level fixes (card information, filter panel, default sort logic) improve every category at once and usually come first. Test changes where traffic allows, and compare category metrics before and after where it doesn't. See [[/blogs/ecommerce-ab-testing|A/B testing]].",
        ],
        table: {
          headers: ["Fix type", "Scope", "Example"],
          rows: [
            ["Template", "All categories", "Add key attribute to cards"],
            ["Data", "Categories using an attribute", "Complete size data for filters"],
            ["Category-specific", "One category", "New subcategory links, pinning"],
            ["Merchandising", "Selected categories", "Seasonal default sort rules"],
          ],
        },
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario: a store's largest category gets strong traffic but low product click-through. Analysis shows default sort by newest pushes low-stock items to the top, cards lack prices for variant ranges and filters are rarely used on mobile because they open in a slow modal. Fixes: default sort by a blend of relevance, popularity and availability, price ranges on cards, and quick filter chips on mobile. Click-through and revenue per visit are compared before and after.",
        ],
      },
      {
        heading: "Category Audit Checklist",
        body: [],
        checklist: [
          "Name and hierarchy match shopper language",
          "Subcategory links visible for broad categories",
          "Default sort surfaces relevant, available products",
          "Cards show price, variants, ratings and key attributes",
          "Filters fit the category and use complete data",
          "Sorting options match needs",
          "Loading preserves position and keeps products crawlable",
          "Mobile filters and quick chips work well",
          "Titles, headings and copy match search intent",
          "Page speed within budget",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Optimizing categories without measuring them",
          "Default sorts nobody reviews",
          "Grids led by out-of-stock products",
          "Copy blocks pushing products below the fold",
          "Filters built on incomplete data",
          "Indexing every filter combination",
        ],
        cta: {
          title: "Ready to optimize your category pages?",
          description: "Talk to ZSpace Labs about [[/services/cro-audit|category page audits]], [[/services/ui-ux-design|listing page UX]] and [[/services/shopify-development|Shopify collection pages]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Category page optimization is a loop: measure, diagnose structure, grid, controls and visibility, prioritize template fixes and test. For merchandising strategy that feeds category decisions, see [[/blogs/ecommerce-product-merchandising|ecommerce merchandising strategy]].",
        ],
      },
    ],
  },

  // -------------------------------------------- 310 · DASHBOARD DESIGN
  {
    slug: "ecommerce-dashboard-design",
    title: "Ecommerce Dashboard Design: What Should Ecommerce Teams Measure?",
    seoTitle: "Ecommerce Dashboard Design: What Should Teams Measure?",
    excerpt:
      "How to design ecommerce dashboards: information architecture, hierarchy, audiences, drill-downs, comparisons, chart choice, alerts, accessibility and governance.",
    category: "UI/UX",
    banner: "dashboardia",
    bannerAlt:
      "Ecommerce dashboard mock-up: a question header asking how the store is performing this week versus last; headline tiles for revenue (highlighted), orders, conversion and average order value versus target; a trend chart with annotations; an alerts and anomalies panel; breakdowns by channel, device and top products; and a drill-down row to funnel, product, customer and operations views.",
    date: "2026-09-29",
    readingTime: "18 min read",
    relatedServiceSlugs: ["ui-ux-design", "cro-audit", "ai-automation"],
    relatedIndustrySlugs: ["ecommerce", "retail"],
    faqs: [
      { q: "What makes a good ecommerce dashboard?", a: "It answers specific questions for a specific audience, leads with a few headline metrics against targets or comparisons, explains changes through drivers and breakdowns, offers drill-downs for detail and uses clear, accessible visuals with agreed definitions." },
      { q: "How is dashboard design different from choosing KPIs?", a: "KPI selection decides what to measure. Dashboard design decides how information is organized, prioritized and presented so people understand it and act." },
      { q: "What should be at the top of an ecommerce dashboard?", a: "The question the dashboard answers and a small set of headline metrics (often revenue, orders, conversion rate and average order value) with comparisons to a target or previous period." },
      { q: "How many metrics should a dashboard show?", a: "As few as needed to answer its question. Leadership dashboards might show four to eight headline metrics; operational dashboards show more detail but still grouped by question." },
      { q: "Should different teams have different dashboards?", a: "Yes. Leadership, merchandising, marketing, CRO and operations ask different questions and need different levels of detail, built on shared definitions." },
      { q: "Which charts work best for ecommerce dashboards?", a: "Line charts for trends, bar charts for comparisons across categories or channels, tables for detailed product lists and simple number tiles for headline metrics. Avoid decorative charts that are hard to read." },
      { q: "How should comparisons be shown?", a: "Against targets, the previous period and the same period last year where seasonality matters, with clear labels and consistent time windows." },
      { q: "Should dashboards include alerts?", a: "Alerts for significant changes and data quality issues help teams focus. Keep them few and meaningful to avoid alert fatigue." },
      { q: "How do I make dashboards accessible?", a: "Use sufficient contrast, don't rely on colour alone to show good or bad, label axes and values, provide tables or text alternatives and support keyboard navigation in interactive tools." },
      { q: "Can AI help with dashboards?", a: "AI can summarize changes, flag anomalies and answer questions about data, but summaries must be checked against the underlying numbers and definitions." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Good ecommerce dashboard design starts with a question and an audience, not a list of KPIs. Put the question at the top, show a few headline metrics against targets and prior periods, explain movement with drivers (traffic, conversion, order value) and breakdowns (channel, device, category, product), provide drill-downs to funnel, product, customer and operations views, annotate events, surface alerts sparingly, use simple accessible charts and build everything on agreed definitions. Design separate dashboards for leadership, merchandising, marketing, CRO and operations.",
        ],
      },
      {
        heading: "Why Dashboards Fail",
        body: [
          "Most ecommerce dashboards fail through clutter, not missing data: dozens of equally sized tiles, no comparisons, unclear definitions and no path from “revenue is down” to “why”. People stop opening them. Dashboard design is information architecture: deciding what matters most for whom, in what order and at what level of detail. For choosing the metrics themselves, see [[/blogs/ecommerce-kpi-dashboard|ecommerce KPI dashboard]].",
        ],
      },
      {
        heading: "Start With Questions and Audiences",
        body: [],
        table: {
          headers: ["Audience", "Core question", "Typical content"],
          rows: [
            ["Leadership", "Are we on track?", "Revenue, orders, conversion, AOV, margin vs target"],
            ["Merchandising", "Which products and categories need attention?", "Product and category performance, stock, returns"],
            ["Marketing", "Which channels and campaigns work?", "Traffic, conversion and revenue by channel, spend efficiency"],
            ["CRO / UX", "Where do shoppers struggle?", "Funnel steps, device, search, filters, experiments"],
            ["Operations", "Are we fulfilling well?", "Orders to ship, delivery times, returns, stock issues"],
            ["Customer / CRM", "Are customers coming back?", "Repeat rate, cohorts, subscriptions, churn"],
          ],
        },
      },
      {
        heading: "Information Hierarchy",
        body: [
          "Structure each dashboard in three levels. Headline: the few numbers that answer the question, with comparisons. Drivers: the components that explain headline movement (for revenue, that's sessions × conversion × average order value, or new vs returning customers). Diagnostics: breakdowns and lists that point to specific causes (channel, device, category, product, market). The mock-up above follows this structure, ending with drill-downs into detailed views.",
        ],
        code: {
          label: "Revenue explained through drivers (outline)",
          text: "Revenue = Sessions × Conversion rate × Average order value\n\nRevenue down 8% vs last week\n  Sessions      +2%   (paid social up, organic flat)\n  Conversion    −9%   (mobile −15%, desktop −1%)\n  AOV           −1%\n→ drill into mobile funnel: checkout payment step −20% after release on Tuesday",
        },
      },
      {
        heading: "Comparisons and Context",
        body: [
          "A number without context can't be interpreted. Show each headline metric against a target and a comparison period (previous period, and same period last year where seasonality matters), label time windows clearly and keep them consistent across tiles. Annotate events that explain changes: campaigns, releases, outages, stock issues, pricing changes. See [[/blogs/ecommerce-analytics|ecommerce analytics]].",
        ],
        cta: {
          title: "Dashboards nobody opens?",
          description: "ZSpace Labs designs ecommerce dashboards around the questions each team asks, with clear hierarchy and drill-downs.",
        },
      },
      {
        heading: "Choosing Visualizations",
        body: [],
        table: {
          headers: ["Need", "Visual", "Avoid"],
          rows: [
            ["Headline value and change", "Number tile with delta and sparkline", "Gauges and dials"],
            ["Trend over time", "Line chart with annotations", "3D charts"],
            ["Compare categories or channels", "Sorted bar chart", "Pie charts with many slices"],
            ["Product performance detail", "Sortable table with the full path", "Dozens of small charts"],
            ["Funnel", "Step bars with rates", "Decorative funnel shapes without numbers"],
          ],
        },
      },
      {
        heading: "Drill-Downs and Navigation",
        body: [
          "Every headline should lead somewhere: revenue to channel and category views, conversion to the funnel by device, product performance to product detail. Keep filters (date range, market, device, channel) consistent across views, and preserve them when drilling down. See [[/blogs/ecommerce-conversion-funnel|funnel analytics]] and [[/blogs/ecommerce-product-analytics|product analytics]].",
        ],
      },
      {
        heading: "Alerts and Data Health",
        body: [
          "Alerts draw attention to what changed significantly: conversion drops on a device, a product selling out, tracking gaps. Keep them few, explain the threshold and link to the relevant view. Show data freshness and known tracking issues on the dashboard so people don't act on broken data. See [[/blogs/ecommerce-analytics-architecture|analytics architecture]].",
        ],
      },
      {
        heading: "Accessibility and Readability",
        body: [],
        checklist: [
          "Sufficient contrast for text and chart elements",
          "Good and bad not shown by red and green alone; add arrows or labels",
          "Direct labels on charts where possible",
          "Tables or text summaries alongside charts",
          "Consistent number formats, currencies and units",
          "Keyboard-accessible filters in interactive tools",
        ],
      },
      {
        heading: "Governance",
        body: [
          "Dashboards are only trusted when definitions are shared. Link each metric to its definition, record owners, review dashboards regularly and retire unused ones. Building dashboards from a modelled data layer rather than raw events keeps numbers consistent across teams.",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario: an ecommerce team's main dashboard has 40 tiles, no targets and conflicting conversion figures. The redesign creates a leadership dashboard (revenue, orders, conversion, AOV and margin vs target and last year, with driver breakdown and annotations), a merchandising dashboard (category and product tables with the full path and returns) and a CRO dashboard (funnel by device, search and filter metrics, experiments), all from shared definitions with drill-downs. Usage of each dashboard is tracked.",
        ],
      },
      {
        heading: "A Dashboard Design Process",
        body: [],
        table: {
          headers: ["Step", "Output"],
          rows: [
            ["1. Interview users", "Questions, decisions and frequency"],
            ["2. Define metrics", "Definitions linked to the data model"],
            ["3. Sketch hierarchy", "Headline, drivers, diagnostics, drill-downs"],
            ["4. Prototype", "Low-fidelity layout tested with users"],
            ["5. Build on modelled data", "Consistent numbers"],
            ["6. Review usage", "Retire or improve unused views"],
          ],
        },
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Listing every available metric",
          "No targets or comparisons",
          "Charts chosen for decoration",
          "Different definitions in different dashboards",
          "No drill-down from headline to cause",
          "Colour-only status indicators",
        ],
        cta: {
          title: "Ready to design dashboards your team uses?",
          description: "Talk to ZSpace Labs about [[/services/ui-ux-design|dashboard UX and information architecture]], [[/services/cro-audit|analytics audits]] and [[/services/ai-automation|automated reporting]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Ecommerce dashboard design is information architecture for decisions: questions and audiences first, then headline, drivers and diagnostics, comparisons, drill-downs, accessible visuals and shared definitions. For the metrics themselves, see [[/blogs/ecommerce-kpi-dashboard|ecommerce KPI dashboard]].",
        ],
      },
    ],
  },
];
