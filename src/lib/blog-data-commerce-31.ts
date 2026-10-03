import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch four, part ten: ecommerce integrations —
 * ERP, CRM, inventory, payment gateways and shipping. B2B-specific ERP and
 * CRM guides live in blog-data-commerce-30.ts. Merged into `posts` in
 * blog-data.ts.
 */

export const commercePosts31: BlogPost[] = [
  // ------------------------------------------------------ 201 · ERP INTEGRATION
  {
    slug: "ecommerce-erp-integration",
    title: "Ecommerce ERP Integration: How to Connect Your Store With Your ERP",
    seoTitle: "Ecommerce ERP Integration: Connect Your Store and ERP",
    excerpt:
      "How ecommerce ERP integration works: which data flows where, field ownership, sync patterns, middleware, webhooks, error handling, reconciliation and testing.",
    category: "Web Development",
    banner: "erpsync",
    bannerAlt:
      "Ecommerce and ERP sync: the ecommerce platform sends orders and customers through an integration layer (connector or middleware) to the ERP, and the ERP returns stock levels, prices and products; the integration layer handles retries, logging, alerts and reconciliation, with one source of truth decided per data type.",
    date: "2026-09-29",
    readingTime: "18 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "ai-automation"],
    relatedIndustrySlugs: ["ecommerce", "manufacturing", "retail"],
    faqs: [
      { q: "What is ecommerce ERP integration?", a: "Connecting an online store with an enterprise resource planning system so products, prices, inventory, orders, customers, fulfilment and financial data flow between them automatically instead of being re-keyed." },
      { q: "Why integrate ecommerce with an ERP?", a: "To avoid manual order entry, overselling and pricing errors, to speed up fulfilment and invoicing, and to give finance and operations accurate data." },
      { q: "What data is typically synced?", a: "Products and SKUs, prices, inventory, customers, orders, payments, refunds, fulfilment status, tracking and invoices." },
      { q: "Which system should own each piece of data?", a: "Usually the ERP owns SKUs, costs, stock and finance; the store owns web orders, online customer accounts and merchandising. Define ownership per field and sync in one direction per field." },
      { q: "Should ERP integration be real time?", a: "Not everything needs to be. Orders and stock often need near real time; catalogs and prices can often sync on a schedule. Choose timing per data type." },
      { q: "What is middleware in ERP integration?", a: "Software between the store and the ERP (an integration platform or custom service) that maps data formats, queues and retries messages, logs transactions and alerts on errors." },
      { q: "How are webhook failures handled?", a: "Verify, deduplicate and process webhooks asynchronously, retry failures and run periodic reconciliation jobs, because webhook delivery isn't guaranteed and events can arrive out of order." },
      { q: "Does Shopify have ERP connectors?", a: "Many ERPs have Shopify connectors or apps, and integration platforms offer prebuilt flows. Complex requirements often need custom integration via Shopify's APIs and webhooks." },
      { q: "What are common ERP integration mistakes?", a: "Unclear data ownership, poor master data, no error alerts, ignoring API rate limits, no reconciliation and testing only happy paths." },
      { q: "How long does an ERP integration take?", a: "It depends on the ERP, the data quality and the scope. Simple connector setups can be quick; custom multi-system integrations take much longer and need thorough testing." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Ecommerce ERP integration connects the store and the ERP so products, prices and stock flow to the store, and orders, customers and payments flow to the ERP, with fulfilment status, tracking and invoices returning. Define which system owns each field, choose timing per data type (events for orders and stock, schedules for catalogs and prices), use middleware for mapping, queues, retries and logging, treat webhooks as unreliable and reconcile regularly, respect API limits and test failure scenarios, not just the happy path.",
        ],
      },
      {
        heading: "What an ERP Does for Ecommerce",
        body: [
          "The ERP is usually the operational and financial system of record: items, costs, stock across locations, purchasing, orders from all channels, invoicing and accounting. The store is where customers browse and buy. Without integration, staff re-key orders, stock drifts out of sync and finance reconciles by hand. In short, think of the data flows and the integration layer between the systems. For B2B-specific data such as contract pricing and credit, see [[/blogs/b2b-ecommerce-erp-integration|B2B ERP integration]].",
        ],
      },
      {
        heading: "Data Flows",
        body: [],
        table: {
          headers: ["Data", "Direction", "Typical timing"],
          rows: [
            ["Products and SKUs", "ERP / PIM → store", "Scheduled, on change"],
            ["Prices", "ERP → store", "Scheduled"],
            ["Inventory", "ERP / WMS → store", "Frequent or event-driven"],
            ["Orders", "Store → ERP", "Near real time"],
            ["Customers", "Store → ERP", "With orders"],
            ["Payments and refunds", "Store → ERP", "With orders / on event"],
            ["Fulfilment and tracking", "ERP / WMS → store", "On event"],
            ["Invoices", "ERP → customer / store", "On event or scheduled"],
          ],
        },
      },
      {
        heading: "Field Ownership",
        body: [
          "Most integration problems come from two systems editing the same field. Write down, for every field, which system owns it and which direction it syncs. Product titles might be owned by the store (for merchandising) while SKUs, costs and stock are owned by the ERP. Once agreed, prevent edits in the non-owning system where possible.",
        ],
        callout: {
          type: "tip",
          text: "A one-page field ownership matrix (field, owner, direction, timing, transformation) prevents more integration bugs than any amount of code review.",
        },
      },
      {
        heading: "Integration Patterns",
        body: [],
        table: {
          headers: ["Pattern", "How it works", "Good for"],
          rows: [
            ["Native connector / app", "Prebuilt integration between platform and ERP", "Standard needs, faster setup"],
            ["Integration platform (iPaaS)", "Configurable flows, mapping, monitoring", "Several systems, moderate customization"],
            ["Custom middleware", "Your own service with queues and logic", "Complex rules, high volume"],
            ["File-based (CSV/SFTP)", "Scheduled file exchange", "Legacy ERPs without APIs"],
          ],
        },
      },
      {
        heading: "Events, Webhooks and Reliability",
        body: [
          "Platforms notify integrations of changes through webhooks. Treat them as signals, not guarantees. Shopify's documentation, for example, recommends verifying webhook HMAC signatures, using the webhook ID header to detect duplicates, not relying on delivery order (using timestamps or the resource's updated time instead) and running reconciliation jobs because delivery isn't guaranteed (Shopify developer docs). Respond quickly and process asynchronously through a queue.",
        ],
        code: {
          label: "Webhook handling pattern (pseudocode)",
          text: "on webhook(request):\n  verify signature(request.rawBody, header) or reject\n  if seen(request.webhookId): return 200\n  enqueue(topic, payload, triggeredAt)\n  return 200\n\nworker:\n  event = dequeue()\n  if event.updatedAt <= lastProcessed(event.resourceId): skip\n  map and send to ERP with retries\n  on permanent failure: dead-letter + alert\n\nnightly:\n  reconcile orders and stock between store and ERP",
        },
        cta: {
          title: "Planning an ERP integration?",
          description: "ZSpace Labs designs ecommerce ERP integrations with clear ownership, reliable sync and monitoring.",
        },
      },
      {
        heading: "API Limits and Bulk Operations",
        body: [
          "Both the platform and the ERP limit how fast you can call their APIs. Shopify's GraphQL Admin API uses cost-based rate limits that vary by plan, and the REST Admin API uses a leaky-bucket model (Shopify developer docs). Use bulk operations for large catalog updates, batch writes, back off on throttling and spread scheduled jobs.",
        ],
      },
      {
        heading: "Orders Into the ERP",
        body: [
          "Map orders carefully: customer, addresses, lines, SKUs, taxes, discounts, shipping, payment method, gateway references and channel. Decide how edits, cancellations, partial refunds and exchanges flow. Use idempotency (for example, the store order ID as an external reference) so retries never create duplicate ERP orders.",
        ],
      },
      {
        heading: "Mapping an Order: Field-Level Detail",
        body: [
          "Order mapping is where most ERP projects spend their time. Platforms and ERPs model orders differently: discounts may be order-level in one and line-level in the other, taxes may be per line or per jurisdiction, and shipping may be a line item or a header field. Decide each mapping explicitly and test it with real orders.",
        ],
        table: {
          headers: ["Store field", "ERP field", "Watch for"],
          rows: [
            ["Order ID", "External reference", "Use for idempotency"],
            ["Customer / email", "Customer account or cash-sale customer", "Guest orders, duplicates"],
            ["Line SKU and quantity", "Item and quantity", "Bundles exploding into components"],
            ["Line discounts / order discounts", "Line price or discount lines", "Allocation of order-level discounts"],
            ["Tax lines", "Tax codes and amounts", "Rounding differences"],
            ["Shipping", "Freight line or header charge", "Tax on shipping"],
            ["Payment gateway and reference", "Payment method, receipt", "Partial captures and refunds"],
          ],
        },
      },
      {
        heading: "Worked Example: A Retailer Connecting Shopify to Its ERP",
        body: [
          "An illustrative scenario, not a client case: a homeware retailer sells on Shopify and in five stores, with an ERP managing stock and finance. The integration runs through middleware. Products and stock flow from the ERP: product changes hourly, stock on every movement via change events plus a full sync each night. Orders flow to the ERP within a minute of payment via order webhooks, queued and processed asynchronously with the Shopify order ID as the external reference. Fulfilments and tracking flow back from the ERP. Refunds created in Shopify post credit notes to the ERP.",
          "A nightly job compares order counts and totals between Shopify and the ERP for the previous day and reports differences. Failures alert the ecommerce operations lead, who owns a runbook for common errors (unknown SKU, closed accounting period, tax mismatch).",
        ],
      },
      {
        heading: "Common ERP Integration Mistakes",
        body: [],
        checklist: [
          "No written field ownership, so both systems edit the same data",
          "Processing webhooks synchronously and timing out",
          "Retries that create duplicate ERP orders",
          "Relying on webhook order instead of timestamps",
          "Ignoring rate limits during bulk updates",
          "Discovering sync failures from customer complaints",
        ],
      },
      {
        heading: "Monitoring and Reconciliation",
        body: [],
        checklist: [
          "Log every message with status and payload reference",
          "Alert on failures and growing queues with a named owner",
          "Dead-letter queue for messages that repeatedly fail",
          "Daily reconciliation of order counts and totals",
          "Periodic stock reconciliation",
          "Dashboard of sync lag per data type",
        ],
      },
      {
        heading: "Testing",
        body: [],
        checklist: [
          "Orders with discounts, multiple taxes and shipping methods",
          "Partial refunds, cancellations and exchanges",
          "Duplicate and out-of-order webhook delivery",
          "ERP downtime and recovery",
          "API throttling under bulk updates",
          "Reconciliation catching deliberately dropped events",
        ],
        cta: {
          title: "Ready to connect your store and ERP?",
          description: "Talk to ZSpace Labs about [[/services/website-development|ERP integration]], [[/services/shopify-development|Shopify integrations]] and [[/services/ai-automation|operations automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "ERP integration succeeds on discipline: clear ownership, the right timing per data type, reliable event handling, idempotent writes, monitoring and reconciliation. For how ERP fits among other integrations, see [[/blogs/ecommerce-api-integration|ecommerce API integration]] and [[/blogs/shopify-business-systems-integration-guide|Shopify business systems integration]].",
          "Related: [[/blogs/ecommerce-inventory-management-integration|inventory integration]], [[/blogs/ecommerce-payment-gateway-integration|payment integration]] and [[/blogs/ecommerce-tax-integration|tax integration]].",
          "For related guides, see [[/blogs/ecommerce-order-management-integration|order management integration]].",
        ],
      },
    ],
  },

  // ------------------------------------------------------ 202 · CRM INTEGRATION
  {
    slug: "ecommerce-crm-integration",
    title: "Ecommerce CRM Integration: How to Connect Customer Data and Sales",
    seoTitle: "Ecommerce CRM Integration: Connect Customer Data and Sales",
    excerpt:
      "How to integrate ecommerce with a CRM: customer identity, orders and events, consent, segmentation, lifecycle messaging, support context and data quality.",
    category: "Web Development",
    banner: "crmsync",
    bannerAlt:
      "Ecommerce CRM integration in three columns: store to CRM (new customers, orders and value, consented browsing events, quotes and carts, consent status), CRM to store (account owner, segments, B2B company data, price groups, notes for service) and shared rules (matching key such as email or ID, consent respected, field ownership, error queue, audit trail).",
    date: "2026-09-29",
    readingTime: "16 min read",
    relatedServiceSlugs: ["website-development", "ai-automation", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "retail"],
    faqs: [
      { q: "What is ecommerce CRM integration?", a: "Connecting the online store with a customer relationship management system so customer profiles, orders, events and consent flow into the CRM for segmentation, marketing, sales and support." },
      { q: "Which CRM data matters for ecommerce?", a: "Customer identity and contact details, consent, order history and value, products bought, key events (signup, cart, purchase, return) and support interactions." },
      { q: "How is this different from website CRM integration for leads?", a: "Lead-focused integrations capture form submissions for sales follow-up. Ecommerce CRM integration centres on customers and orders: purchase history, lifecycle and retention." },
      { q: "How should customer identity be matched?", a: "Use stable identifiers (platform customer ID, email) and clear rules for merging guest checkouts and accounts, to avoid duplicate profiles." },
      { q: "How does consent affect CRM integration?", a: "Marketing consent must be captured and synced accurately so customers only receive messages they agreed to. Consent rules vary by market and channel." },
      { q: "Which events should be sent to the CRM?", a: "Events that drive useful actions: account created, product viewed where consent allows, cart abandoned, order placed, fulfilled, returned and subscription changes." },
      { q: "Should order line items be synced?", a: "Usually yes, at least products and categories, so segments and recommendations can use purchase history." },
      { q: "How does CRM integration help support?", a: "Agents see order history and status alongside the conversation, so they resolve issues without asking customers for details." },
      { q: "Do I need a CDP instead?", a: "A customer data platform unifies data from many sources. Smaller stores often start with the platform and an ecommerce-focused CRM or email tool; larger ones add a CDP when data sources multiply." },
      { q: "What are common CRM integration problems?", a: "Duplicate profiles, consent not synced, too many low-value events, missing refunds and returns, and no owner for data quality." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Ecommerce CRM integration sends customers, orders and meaningful events from the store to the CRM with accurate consent, so you can build segments, trigger lifecycle messages and give support agents context. Match identity carefully across guests and accounts, sync orders with line items, refunds and returns, send only events that drive actions, keep consent in sync both ways, and assign an owner for data quality. For B2B account management, use the B2B-specific approach.",
        ],
      },
      {
        heading: "What CRM Integration Is For",
        body: [
          "For ecommerce, a CRM (or an ecommerce-focused marketing platform) turns purchase data into relationships: welcome and post-purchase messages, replenishment reminders, win-back campaigns, VIP recognition and informed support. In short, think of what flows from store to CRM, what flows back and the rules both sides share. For lead-capture integrations on non-commerce websites, see [[/blogs/crm-website-integration|CRM website integration]]; for B2B sales teams, see [[/blogs/b2b-ecommerce-crm-integration|B2B CRM integration]].",
        ],
      },
      {
        heading: "Data to Sync",
        body: [],
        table: {
          headers: ["Data", "Use in CRM"],
          rows: [
            ["Customer profile and addresses", "Identity, personalization, region"],
            ["Consent by channel", "Who can be contacted how"],
            ["Orders with line items", "Segments, recommendations, value"],
            ["Refunds and returns", "Accurate value, service follow-up"],
            ["Subscriptions", "Lifecycle and churn prevention"],
            ["Key events", "Triggers (cart, browse where permitted, fulfilment)"],
            ["Support interactions", "Context for marketing and service"],
          ],
        },
      },
      {
        heading: "Identity and Duplicates",
        body: [
          "Customers check out as guests, create accounts later, use different emails and buy across channels. Decide matching rules (customer ID first, then email), how guest orders attach to later accounts and how merges are handled. Duplicates break segments and personalization.",
        ],
      },
      {
        heading: "Consent",
        body: [
          "Capture consent at signup and checkout with clear wording, sync it to the CRM immediately and sync unsubscribes back. Consent requirements vary by market and channel (email, SMS), so take advice for each market and record when and how consent was given. See [[/blogs/mobile-app-data-privacy|data privacy]].",
        ],
        cta: {
          title: "Customer data scattered across store and CRM?",
          description: "ZSpace Labs integrates stores and CRMs so customer data is accurate, consented and useful.",
        },
      },
      {
        heading: "Events That Drive Action",
        body: [
          "Send events that trigger messages or decisions: account created, cart abandoned, order placed, shipped, delivered, returned, subscription paused. Avoid streaming every page view unless you use it and have consent. Use webhooks from the platform and process them reliably with deduplication and retries. See [[/blogs/ecommerce-api-integration|ecommerce API integration]].",
        ],
      },
      {
        heading: "Using the Data",
        body: [],
        table: {
          headers: ["Use", "Example"],
          rows: [
            ["Lifecycle messaging", "Welcome, post-purchase care, replenishment"],
            ["Segmentation", "First-time vs repeat, category buyers, lapsed"],
            ["Support context", "Order history beside the ticket"],
            ["Retention analysis", "Cohorts and repeat rates"],
          ],
        },
      },
      {
        heading: "Architecture: How Data Reaches the CRM",
        body: [
          "Most ecommerce CRM integrations combine a native connector for standard data (customers, orders, products) with event tracking for behavioral signals and custom work for anything unusual. Native connectors between major platforms and ecommerce-focused marketing tools handle identity, orders and catalog sync well. Custom flows are needed for returns data from a separate returns platform, subscription events from a subscription app or offline sales from POS or ERP.",
        ],
        table: {
          headers: ["Data source", "Typical path"],
          rows: [
            ["Store customers and orders", "Native connector"],
            ["On-site events", "Tracking script with consent"],
            ["Returns platform", "Webhooks or API via middleware"],
            ["Subscriptions app", "App integration or webhooks"],
            ["POS and offline orders", "ERP or POS integration"],
            ["Support desk", "Helpdesk connector"],
          ],
        },
      },
      {
        heading: "Worked Example: Post-Purchase Flows",
        body: [
          "An illustrative scenario: a D2C brand sends order, fulfilment and return events to its CRM. A post-purchase flow sends care instructions after delivery, asks for a review two weeks later and, for consumables, sends a replenishment reminder timed from typical usage. Customers who returned their order skip the review request and receive a helpful follow-up instead. Consent and suppression lists sync both ways, so an unsubscribe in any channel stops marketing messages. See [[/blogs/ecommerce-repeat-purchases|repeat purchases]].",
        ],
      },
      {
        heading: "Common CRM Integration Mistakes",
        body: [],
        checklist: [
          "Refunds not reducing customer value",
          "Guest orders creating duplicate profiles",
          "Consent captured in the store but not synced",
          "Streaming every event without using it",
          "Support desk without order context",
          "No owner for CRM data quality",
        ],
      },
      {
        heading: "Data Quality",
        body: [],
        checklist: [
          "Matching rules documented and tested",
          "Refunds and cancellations reflected in customer value",
          "Consent synced both ways within minutes",
          "Event volume reviewed against actual use",
          "Owner assigned for CRM data quality",
          "Regular duplicate checks",
        ],
        cta: {
          title: "Ready to connect your store and CRM?",
          description: "Talk to ZSpace Labs about [[/services/website-development|CRM integration]], [[/services/ai-automation|lifecycle automation]] and [[/services/shopify-development|Shopify integrations]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A good ecommerce CRM integration gives you one consented view of each customer and the events to act on it. Match identity carefully, sync what you use and keep consent accurate. For retention strategy, see [[/blogs/ecommerce-customer-retention|customer retention]].",
        ],
      },
    ],
  },

  // ------------------------------------------------ 203 · INVENTORY INTEGRATION
  {
    slug: "ecommerce-inventory-management-integration",
    title: "Ecommerce Inventory Management Integration: How to Keep Stock in Sync",
    seoTitle: "Ecommerce Inventory Integration: Keep Stock in Sync",
    excerpt:
      "How to integrate ecommerce inventory: source of truth, locations, available vs on hand, reservations, multichannel sync, buffers, bundles and reconciliation.",
    category: "Web Development",
    banner: "inventorysync",
    bannerAlt:
      "Inventory integration hub: sources (ERP, WMS, 3PL, stores and POS, drop-ship suppliers) feed a central inventory source of truth that calculates available to sell, which publishes to channels (online store, marketplaces, social, AI channels, B2B portal); available equals on hand minus reserved minus safety stock.",
    date: "2026-09-29",
    readingTime: "16 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "ai-automation"],
    relatedIndustrySlugs: ["ecommerce", "retail", "logistics-supply-chain"],
    faqs: [
      { q: "What is ecommerce inventory management integration?", a: "Connecting the store with the systems that know actual stock (ERP, inventory management system, warehouse or 3PL, POS) so available quantities online are accurate across locations and channels." },
      { q: "What causes overselling?", a: "Delayed stock updates, multiple channels selling the same stock, orders not reserving stock quickly, and mismatches between systems." },
      { q: "What's the difference between on hand and available stock?", a: "On hand is physically present. Available is what can be sold: on hand minus stock committed to orders, reserved or held back." },
      { q: "Which system should be the source of truth for inventory?", a: "Usually the ERP, inventory management system or WMS that records receipts, picks and adjustments. The store and other channels receive available quantities from it." },
      { q: "How often should inventory sync?", a: "As often as your sales velocity requires. Fast-moving or limited stock needs event-driven or very frequent updates; slow-moving stock can sync less often." },
      { q: "What is a safety buffer?", a: "A quantity held back from online availability to absorb sync delays and inaccuracies, reducing oversells at the cost of some sellable stock." },
      { q: "How are bundles handled in inventory?", a: "A bundle's availability depends on its components. Calculate it from component stock and decrement components when a bundle sells." },
      { q: "How do multiple locations work?", a: "Track stock by location and decide which locations fulfil online orders, for which regions, and whether stores can ship or offer pickup." },
      { q: "How do marketplaces affect inventory sync?", a: "Each channel draws from shared stock, so all channels need timely updates, and you may allocate or buffer stock per channel." },
      { q: "How do I detect inventory sync problems?", a: "Reconcile quantities between systems regularly, track oversells and cancellations, and alert on sync lag or failures." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Inventory integration keeps every sales channel showing stock you can actually ship. Choose a source of truth (ERP, IMS or WMS), track stock by location, publish available rather than on-hand quantities, commit stock as soon as orders are placed, sync by events for fast movers, use safety buffers where delays are unavoidable, calculate bundle availability from components, allocate across channels deliberately and reconcile regularly. Measure oversells, cancellations for stock reasons and sync lag.",
        ],
      },
      {
        heading: "Why Inventory Sync Goes Wrong",
        body: [
          "Stock changes in many places: warehouse receipts, picks, returns, store sales, marketplace orders, damage write-offs. If channels learn about changes late, they sell stock that no longer exists or hide stock that does. In short, think of sources feeding a single inventory source of truth that calculates available to sell for every channel.",
        ],
      },
      {
        heading: "Inventory States",
        body: [],
        table: {
          headers: ["State", "Meaning", "Shown online?"],
          rows: [
            ["On hand", "Physically in location", "No, not directly"],
            ["Committed", "Allocated to unfulfilled orders", "Subtracted"],
            ["Reserved / held", "Held for B2B, damage, QA", "Subtracted"],
            ["Available", "Sellable now", "Yes"],
            ["Incoming", "On purchase orders", "For pre-order or back-in-stock dates"],
          ],
        },
      },
      {
        heading: "Source of Truth and Locations",
        body: [
          "Pick one system that records physical movements as the source of truth and publish available quantities from it. Track by location, and define which locations fulfil online orders for which regions, whether stores fulfil online orders and how pickup works. See [[/blogs/ecommerce-erp-integration|ecommerce ERP integration]].",
          "For stores and customer-facing availability, see [[/blogs/retail-inventory-visibility|retail inventory visibility]].",
        ],
      },
      {
        heading: "Timing and Events",
        body: [
          "Use event-driven updates (stock changes pushed as they happen) for fast-moving and limited items, with scheduled full syncs as a safety net. In the other direction, orders must commit stock immediately in the store and reach the source of truth quickly so other channels see the reduction.",
        ],
        cta: {
          title: "Overselling or hiding stock you actually have?",
          description: "ZSpace Labs builds inventory integrations that keep every channel showing sellable stock.",
        },
      },
      {
        heading: "Multichannel Allocation",
        body: [
          "When the same stock sells on your store, marketplaces, POS and B2B, decide whether channels share a pool or receive allocations. Shared pools maximize availability but need fast sync; allocations reduce oversells but can strand stock. Buffers per channel are a common compromise. See [[/blogs/ecommerce-marketplace-vs-online-store|marketplace vs online store]].",
        ],
      },
      {
        heading: "Bundles, Kits and Variants",
        body: [
          "A bundle is available only if all components are. Calculate availability from components, decrement components on sale and make sure component stock sold separately updates bundle availability. See [[/blogs/ecommerce-product-bundles|product bundles]].",
        ],
      },
      {
        heading: "Back-in-Stock and Pre-Order",
        body: [
          "Incoming stock from purchase orders can power back-in-stock dates and pre-orders. Only promise dates you can meet and update customers when they change.",
          "Payment timing, caps, mixed carts and allocation are covered in [[/blogs/ecommerce-preorders-backorders|pre-orders and backorders]].",
        ],
      },
      {
        heading: "Calculating Available to Sell",
        body: [
          "Available to sell is a calculation, not a number copied from one place. A typical formula is on hand, minus committed to unfulfilled orders, minus reserved or held stock, minus a safety buffer, optionally plus incoming stock for items allowed on pre-order. Calculate it in the source of truth and publish the result to channels, or calculate it in an inventory service that all channels query.",
        ],
        code: {
          label: "Available-to-sell calculation (pseudocode)",
          text: "available(sku, location) =\n    onHand(sku, location)\n  - committed(sku, location)      // unfulfilled orders\n  - reserved(sku, location)       // B2B holds, QA, damage\n  - buffer(sku, channel)          // absorbs sync delay\n  + (preorderAllowed(sku) ? incoming(sku, location) : 0)\n\npublish max(available, 0) to each channel",
        },
      },
      {
        heading: "Worked Example: Drops and High-Velocity Stock",
        body: [
          "An illustrative scenario: a brand releases a limited product with 500 units across online and two marketplaces. Instead of sharing the pool and relying on sync speed, it allocates 400 units to its own store and 50 to each marketplace, with stock updates pushed on every sale. Once the store allocation sells out, remaining marketplace stock can be pulled back. After the drop, stock-related cancellations and oversells are reviewed to tune allocations for the next release.",
        ],
      },
      {
        heading: "Common Inventory Integration Mistakes",
        body: [],
        checklist: [
          "Publishing on-hand instead of available stock",
          "Scheduled syncs only, with long gaps during peak",
          "Bundles with manually set stock",
          "Returns restocked before inspection",
          "No per-channel buffers for fast movers",
          "No reconciliation, so errors accumulate",
        ],
      },
      {
        heading: "Monitoring",
        body: [],
        checklist: [
          "Oversell count and stock-related cancellations",
          "Sync lag per channel",
          "Daily reconciliation of available quantities",
          "Alerts on failed updates",
          "Buffer effectiveness review",
          "Returns restocking accuracy",
        ],
        cta: {
          title: "Ready to fix inventory sync?",
          description: "Talk to ZSpace Labs about [[/services/website-development|inventory integration]], [[/services/shopify-development|Shopify multi-location setups]] and [[/services/ai-automation|stock automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Accurate inventory online depends on one source of truth, fast events, available (not on-hand) quantities, deliberate allocation and constant reconciliation. For the wider integration picture, see [[/blogs/ecommerce-api-integration|ecommerce API integration]].",
          "Related: [[/blogs/ecommerce-shipping-integration|shipping integration]] and [[/blogs/b2b-ecommerce-erp-integration|B2B ERP integration]].",
          "For related guides, see [[/blogs/ecommerce-order-management-system|order management systems]] and [[/blogs/ecommerce-fulfillment-technology|fulfilment technology]].",
        ],
      },
    ],
  },

  // ------------------------------------------------- 204 · PAYMENT GATEWAY
  {
    slug: "ecommerce-payment-gateway-integration",
    title: "Ecommerce Payment Gateway Integration: A Practical Guide",
    excerpt:
      "How to integrate payment gateways into an ecommerce store: choosing providers, local methods, authorization and capture, webhooks, refunds, fraud and reconciliation.",
    category: "Web Development",
    banner: "paymentgatewayflow",
    bannerAlt:
      "Payment flow: checkout, tokenize, authorize, capture, webhook (highlighted), reconcile, with declined payments branching to retry, 3-D Secure or another method.",
    date: "2026-09-29",
    readingTime: "17 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "retail", "fintech"],
    faqs: [
      { q: "What is ecommerce payment gateway integration?", a: "Connecting a store's checkout with payment providers so customers can pay using cards, wallets and local methods, and so the store receives payment status, refunds and payouts reliably." },
      { q: "How do I choose a payment gateway for ecommerce?", a: "Consider supported markets and methods, platform compatibility, fees, payout timing, fraud tools, subscription support, dispute handling and reporting." },
      { q: "What's the difference between authorization and capture?", a: "Authorization checks and holds funds; capture takes them. Stores that ship later, or charge variable amounts, may authorize at checkout and capture on fulfilment, within the provider's time limits." },
      { q: "Why do payment webhooks matter?", a: "Many payment outcomes happen asynchronously (bank redirects, delayed methods, disputes). Webhooks tell the store about them. Handle them with signature verification, deduplication and idempotent processing." },
      { q: "Which payment methods should I offer?", a: "Those your customers use: cards, major wallets and local methods for each market. Check checkout data and market norms." },
      { q: "How should refunds work?", a: "From the order system through the gateway, with partial refunds for returns, and accurate sync back to the ERP and CRM." },
      { q: "Do I need PCI compliance?", a: "Every business accepting cards has obligations. Using hosted checkouts or provider-hosted fields keeps card data off your servers and greatly reduces scope. Confirm requirements with your provider." },
      { q: "How is Shopify different?", a: "Shopify checkout supports Shopify Payments and third-party providers; custom card handling isn't built into the store. Most integration work on Shopify is choosing providers and connecting payout and order data to finance." },
      { q: "How do I reduce payment failures?", a: "Offer relevant methods, support authentication flows smoothly, show clear decline messages, and monitor failure rates by method, issuer and market." },
      { q: "How is this different from the general payment gateway integration guide?", a: "The general guide covers payment flows for any website. This guide covers ecommerce-specific concerns: order lifecycle, capture on fulfilment, refunds, multi-market methods and reconciliation." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Ecommerce payment gateway integration connects checkout, orders and finance. Choose providers by market coverage, methods, platform fit, fees and tooling; offer the cards, wallets and local methods your customers use; decide between immediate capture and authorize-then-capture on fulfilment; process webhooks with signature verification, deduplication and idempotency; run refunds from the order system; use provider fraud tools; keep card data off your servers with hosted checkout or fields; and reconcile payouts, fees and refunds with orders in your ERP.",
        ],
      },
      {
        heading: "Payments in the Order Lifecycle",
        body: [
          "In ecommerce, a payment isn't a single event. It's authorized at checkout, captured at checkout or fulfilment, partially refunded on returns, sometimes disputed and eventually paid out in a batch with fees deducted. The flow above traces that lifecycle. For the general mechanics of payment flows on any website, see [[/blogs/payment-gateway-integration|payment gateway integration]].",
        ],
      },
      {
        heading: "Choosing Providers",
        body: [
          "When one provider is not enough, see [[/blogs/ecommerce-payment-orchestration|payment orchestration]] and [[/blogs/ecommerce-payment-routing|payment routing]].",
        ],
        table: {
          headers: ["Criterion", "Questions"],
          rows: [
            ["Markets and currencies", "Can you accept and settle in each market?"],
            ["Methods", "Cards, wallets, bank transfers, buy now pay later, local methods?"],
            ["Platform fit", "Native integration with your platform and checkout?"],
            ["Fees and payouts", "Transaction fees, FX, payout timing?"],
            ["Risk tools", "Fraud screening, 3-D Secure, dispute management?"],
            ["Subscriptions", "Stored credentials, retries, network updates?"],
            ["Reporting", "Payout and fee data for reconciliation?"],
          ],
        },
      },
      {
        heading: "Authorization and Capture",
        body: [
          "Immediate capture is simple and suits most digital and in-stock orders. Authorize-then-capture suits made-to-order goods, variable weights (such as groceries) and pre-orders. Authorizations expire after provider-defined periods, so plan capture timing and re-authorization. Split shipments may need multiple captures where supported.",
        ],
      },
      {
        heading: "Webhooks and Asynchronous Outcomes",
        body: [
          "Redirect-based and delayed payment methods, disputes and refunds are reported asynchronously. Stripe's documentation, for example, notes that webhook events can be retried for up to three days in live mode, may arrive out of order and may be duplicated, so handlers should verify signatures against the raw request body, deduplicate by event ID, return a 2xx quickly and process asynchronously (Stripe docs). Other providers have similar guidance.",
        ],
        code: {
          label: "Idempotent payment event handling (pseudocode)",
          text: "on payment webhook(request):\n  event = verifySignature(request.rawBody, request.signatureHeader)\n  if processed(event.id): return 200\n  enqueue(event)\n  return 200\n\nworker:\n  order = findOrderByPaymentRef(event.paymentId)\n  apply transition (authorized → captured → refunded / disputed)\n  ignore transitions that move backwards\n  markProcessed(event.id)",
        },
        cta: {
          title: "Payments not matching orders?",
          description: "ZSpace Labs integrates payment providers with ecommerce orders and finance so every payment reconciles.",
        },
      },
      {
        heading: "Payment Methods by Market",
        body: [
          "Customers expect familiar methods. Offer the major wallets for express checkout and local methods where they're common. Show methods early (on product and cart pages) where it helps confidence. Test each method end to end, including refunds. See [[/blogs/ecommerce-checkout-ux|checkout UX]].",
        ],
      },
      {
        heading: "Refunds and Disputes",
        body: [
          "Refunds should start from the order or returns system, not directly in the gateway dashboard, so order, inventory and finance stay consistent. Disputes need evidence (order details, tracking, communications) gathered quickly. Sync refunds and dispute outcomes to the ERP and CRM.",
          "Automated refund workflows are covered in [[/blogs/ecommerce-refund-automation|refund automation]] and dispute handling in [[/blogs/ecommerce-chargeback-management|chargeback management]].",
        ],
      },
      {
        heading: "Security and Card Data",
        body: [
          "Use hosted checkouts, hosted payment fields or platform-native checkout so card data never touches your servers. This reduces PCI scope significantly. Protect API keys, restrict dashboard access and never log payment details. See [[/blogs/website-security-checklist|website security checklist]].",
        ],
      },
      {
        heading: "Reconciliation",
        body: [],
        checklist: [
          "Match payouts to orders, refunds and fees",
          "Record FX and fees in accounting",
          "Track disputes and chargebacks",
          "Reconcile daily, with alerts for mismatches",
          "Keep gateway references on ERP orders",
        ],
      },
      {
        heading: "Worked Example: Authorize at Checkout, Capture on Shipment",
        body: [
          "An illustrative scenario: a furniture retailer sells made-to-order items that ship in several weeks. Cards are authorized at checkout, but authorizations expire long before shipment, so the retailer takes a deposit at checkout and charges the balance before dispatch using a stored payment method with the customer's consent. Where items ship separately, each shipment triggers a capture or charge for its value. Every payment event updates the order in the store and ERP, and refunds for cancelled items reverse the right charge.",
        ],
      },
      {
        heading: "Payment Data in the Order and Finance Flow",
        body: [],
        table: {
          headers: ["Event", "Store", "ERP / accounting"],
          rows: [
            ["Authorization", "Order marked authorized", "No revenue yet"],
            ["Capture", "Order marked paid", "Receipt recorded"],
            ["Refund", "Refund recorded on order", "Credit note / refund"],
            ["Dispute", "Order flagged", "Provision or chargeback"],
            ["Payout", "—", "Bank deposit matched to payments and fees"],
          ],
        },
      },
      {
        heading: "Common Payment Integration Mistakes",
        body: [],
        checklist: [
          "Trusting the browser redirect instead of the webhook",
          "Processing the same event twice",
          "Refunds issued in the gateway dashboard only",
          "Letting authorizations expire before capture",
          "No reconciliation of payouts to orders",
          "Card data passing through your servers unnecessarily",
        ],
      },
      {
        heading: "Shopify Considerations",
        body: [
          "Shopify's checkout supports Shopify Payments and third-party payment providers, with wallets and local methods depending on region. Card handling is managed by the platform, so integration work focuses on provider selection, payment method configuration by market and connecting payout, fee and refund data to finance systems. See [[/blogs/shopify-checkout-optimization|Shopify checkout optimization]].",
        ],
      },
      {
        heading: "Testing",
        body: [],
        checklist: [
          "Successful, declined and authentication-required payments",
          "Delayed and redirect-based methods",
          "Partial and full refunds",
          "Duplicate and out-of-order webhooks",
          "Authorization expiry and re-authorization",
          "Payout reconciliation with test data",
        ],
        cta: {
          title: "Ready to integrate payments properly?",
          description: "Talk to ZSpace Labs about [[/services/website-development|payment integration]], [[/services/shopify-development|Shopify payments setup]] and [[/services/cro-audit|checkout conversion]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Payment integration in ecommerce is about the whole lifecycle: authorization, capture, refunds, disputes and payouts, reliably reflected in orders and finance. Choose providers for your markets, handle events robustly and reconcile every day. For the checkout experience, see [[/blogs/why-customers-abandon-checkout|why customers abandon checkout]].",
          "For related guides, see [[/blogs/marketplace-payment-architecture|marketplace payment architecture]] and [[/blogs/international-ecommerce-payments|international payments]].",
        ],
      },
    ],
  },

  // ------------------------------------------------- 205 · SHIPPING INTEGRATION
  {
    slug: "ecommerce-shipping-integration",
    title: "Ecommerce Shipping Integration: How to Connect Carriers and Fulfilment",
    seoTitle: "Ecommerce Shipping Integration: Carriers and Fulfilment",
    excerpt:
      "How to integrate shipping into ecommerce: rates at checkout, delivery promises, labels, 3PL and warehouse handoff, tracking, international documents and returns.",
    category: "Web Development",
    banner: "shippingintflow",
    bannerAlt:
      "Shipping integration flow: order, rates at checkout, label and pick, carrier, tracking events (highlighted), and delivered or exception.",
    date: "2026-09-29",
    readingTime: "16 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "ai-automation"],
    relatedIndustrySlugs: ["ecommerce", "logistics-supply-chain", "retail"],
    faqs: [
      { q: "What is ecommerce shipping integration?", a: "Connecting the store with carriers, shipping software, warehouses or 3PLs so rates, delivery promises, labels, tracking and returns work automatically." },
      { q: "How are shipping rates calculated at checkout?", a: "By flat or tiered rules, or live carrier rates based on weight, dimensions, destination and service. Many stores combine rules with thresholds such as free shipping over a set order value." },
      { q: "What are delivery promises?", a: "Estimated delivery dates shown before purchase, calculated from stock location, cut-off times, handling time and carrier transit times." },
      { q: "Do I need shipping software?", a: "For more than a small volume, usually yes. Shipping software or multi-carrier platforms handle rates, labels, documents and tracking across carriers." },
      { q: "How does a 3PL integrate with ecommerce?", a: "Orders are sent to the 3PL's system, which picks, packs and ships, then returns fulfilment status, tracking and inventory updates to the store." },
      { q: "What do international shipments need?", a: "Customs data (HS codes, country of origin, item values), commercial invoices where required, and decisions about who pays duties and taxes." },
      { q: "How should tracking be shared with customers?", a: "Through shipping notifications with tracking links, an order status page and proactive messages about delays." },
      { q: "How should returns be integrated?", a: "With a returns portal that creates return authorizations, labels and instructions, and syncs received items back to inventory and refunds." },
      { q: "How do I handle split shipments?", a: "Fulfil orders from multiple locations or at different times with separate tracking, and communicate clearly which items are in which parcel." },
      { q: "What are common shipping integration issues?", a: "Missing weights and dimensions, inaccurate delivery promises, tracking not synced, customs data missing and returns not linked to refunds and inventory." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Shipping integration connects checkout, fulfilment and carriers. Show accurate rates and delivery promises at checkout from weights, dimensions, locations, cut-offs and transit times; route orders to the right warehouse, store or 3PL; generate labels and customs documents automatically; sync fulfilment and tracking back to the store and customer; handle split shipments clearly; and connect returns to labels, inventory and refunds. Keep product shipping data complete and monitor delivery performance against promises.",
        ],
      },
      {
        heading: "The Shipping Chain",
        body: [
          "The flow above follows an order from rates at checkout through labels, carrier handoff and tracking events to delivery or exception; returns are covered below. Each step depends on data from the previous one: rates need weights and dimensions, labels need addresses and services, tracking needs carrier events. Missing data anywhere breaks the chain.",
        ],
      },
      {
        heading: "Rates at Checkout",
        body: [],
        table: {
          headers: ["Approach", "Pros", "Cons"],
          rows: [
            ["Flat or tiered rules", "Simple, predictable", "May over- or under-charge"],
            ["Free over threshold", "Encourages order value", "Margin impact"],
            ["Live carrier rates", "Accurate", "Needs accurate dimensions, can confuse"],
            ["Hybrid", "Balance", "More configuration"],
          ],
        },
      },
      {
        heading: "Delivery Promises",
        body: [
          "Customers care about when, not just how much. Calculate estimated delivery dates from stock location, order cut-off, handling time and carrier transit, show them on product pages, cart and checkout, and keep them honest. Missing promises damages trust more than slightly slower but reliable ones.",
        ],
      },
      {
        heading: "Fulfilment Handoff",
        body: [
          "Route orders to the right location: own warehouse, store, 3PL or dropship supplier. Send orders to the WMS or 3PL via API or connector, and receive fulfilment status, tracking and inventory updates back. Handle partial fulfilment and cancellations reliably. See [[/blogs/ecommerce-inventory-management-integration|inventory integration]].",
        ],
        cta: {
          title: "Shipping data breaking between checkout and carrier?",
          description: "ZSpace Labs integrates stores with carriers, shipping software and 3PLs for reliable fulfilment.",
        },
      },
      {
        heading: "Labels and Documents",
        body: [
          "Shipping software or carrier APIs create labels from order data, choose services by rules (speed, cost, destination) and generate customs documents for international shipments. Store HS codes, country of origin and customs descriptions on products so documents are complete.",
        ],
      },
      {
        heading: "Tracking and Communication",
        body: [
          "Sync tracking numbers and carrier events to the store, send shipping and delivery notifications, provide an order status page and message customers proactively about delays. Many support contacts are “where is my order” questions that tracking integration prevents.",
        ],
      },
      {
        heading: "International Shipping",
        body: [
          "Decide whether customers pay duties and taxes at checkout or on delivery; collecting at checkout avoids surprise charges. Check restricted items per destination and carrier. See [[/blogs/ecommerce-tax-integration|ecommerce tax integration]].",
        ],
      },
      {
        heading: "Returns",
        body: [
          "A returns portal lets customers request returns, receive labels and instructions and track progress. Integrate it with inventory (restock or quarantine), refunds (through the payment gateway) and analytics (return reasons). See [[/blogs/ecommerce-payment-gateway-integration|payment gateway integration]].",
        ],
      },
      {
        heading: "Calculating Delivery Promises",
        body: [
          "A delivery promise combines several inputs. Calculate it from the fulfilling location's stock, the order cut-off for that location, handling time, the carrier service's transit time to the destination and non-working days. Show a date range if transit varies, and recalculate when the shopper changes address or shipping method.",
        ],
        code: {
          label: "Delivery estimate (pseudocode)",
          text: "location  = chooseFulfilmentLocation(cart, address)\nship_date = now < cutoff(location) ? today : nextWorkingDay()\nship_date = addWorkingDays(ship_date, handlingDays(location, cart))\narrival   = addCarrierDays(ship_date, transit(service, location, address))\nshow range(arrival.earliest, arrival.latest)",
        },
      },
      {
        heading: "Worked Example: Multi-Warehouse Routing",
        body: [
          "An illustrative scenario: a retailer ships from two warehouses and a 3PL. Orders route to the location that can ship the whole order fastest to the destination; if no single location can, the order splits, and customers see which items arrive when. Labels are generated through shipping software with rules for service selection by weight and destination. Tracking events sync to the store and trigger notifications. Returns go back to the nearest warehouse with inspection before restocking. See [[/blogs/ecommerce-website-architecture|ecommerce website architecture]].",
        ],
      },
      {
        heading: "Common Shipping Integration Mistakes",
        body: [],
        checklist: [
          "Missing product weights and dimensions",
          "Delivery promises that ignore cut-offs and holidays",
          "Tracking only emailed, not shown in the account",
          "Customs data missing for international orders",
          "Returns not linked to refunds and inventory",
          "Split shipments without clear communication",
        ],
      },
      {
        heading: "Shipping Data Checklist",
        body: [],
        checklist: [
          "Weights and dimensions on every product",
          "HS codes and country of origin for international",
          "Handling times and cut-offs per location",
          "Carrier services and rules defined",
          "Tracking webhooks or polling configured",
          "Return reasons captured consistently",
        ],
        cta: {
          title: "Ready to streamline shipping and fulfilment?",
          description: "Talk to ZSpace Labs about [[/services/website-development|shipping and 3PL integration]], [[/services/shopify-development|Shopify shipping setup]] and [[/services/ai-automation|fulfilment automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Shipping integration is data flowing reliably from product to checkout to carrier to customer and back through returns. Keep product data complete, promises honest and tracking visible. For the full integration map, see [[/blogs/ecommerce-api-integration|ecommerce API integration]].",
          "For related guides, see [[/blogs/ecommerce-shipping-ux|shipping UX]], [[/blogs/ecommerce-delivery-tracking|delivery tracking]] and [[/blogs/international-ecommerce-shipping|international shipping]].",
        ],
      },
    ],
  },
];
