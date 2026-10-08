import type { BlogPost } from "./blog-data";

/**
 * Agentic commerce infrastructure cluster, part one (published 2026-10-08):
 * ACP vs UCP vs MCP, AI product feeds and agentic checkout. Specifications
 * checked 2026-10-08 (these change quickly; dates are stated in the copy):
 * - ACP repository (OpenAI and Stripe), latest stable 2026-04-17; checkout
 *   OpenAPI (endpoints, headers, statuses); OpenAI commerce key concepts,
 *   Delegated Payment Spec and product feed spec.
 * - UCP (ucp.dev), version 2026-08-25: overview, shopping/checkout; Google
 *   Merchant Center UCP guides.
 * - MCP Apps announcement (2026-01-26); CNBC, 2026-03-24, on ChatGPT shopping.
 */

export const agenticCommercePosts1: BlogPost[] = [
  // ---------------------------------------- ACP VS UCP VS MCP
  {
    slug: "acp-vs-ucp-vs-mcp",
    title: "Agentic Commerce Protocols Explained: ACP vs UCP vs MCP",
    seoTitle: "ACP vs UCP vs MCP: Agentic Commerce Protocols Explained",
    excerpt:
      "What the Agentic Commerce Protocol, Universal Commerce Protocol and Model Context Protocol each do, how they differ by layer and how they work together.",
    category: "AI & Automation",
    banner: "integrationcompare",
    sceneKind: "checkout",
    date: "2026-10-08",
    readingTime: "8 min read",
    relatedServiceSlugs: ["shopify-development", "website-development", "ai-automation"],
    relatedIndustrySlugs: ["ecommerce", "retail", "d2c-consumer"],
    relatedSlugs: ["agentic-commerce-stack", "agentic-checkout", "model-context-protocol"],
    faqs: [
      { q: "What is ACP?", a: "The Agentic Commerce Protocol is an open specification, maintained by OpenAI and Stripe, for how an AI agent and a merchant complete a purchase: checkout sessions the agent creates and updates on the merchant's systems, delegated payment credentials, and related product feed, cart and order definitions." },
      { q: "What is UCP?", a: "The Universal Commerce Protocol is an open specification co-developed by Google, Shopify and other commerce companies. Businesses publish a profile at /.well-known/ucp declaring capabilities such as checkout, cart, order and identity linking, and platforms negotiate which to use over REST, MCP, A2A or embedded transports." },
      { q: "What is MCP in commerce?", a: "The Model Context Protocol is a general protocol for connecting AI applications to tools and data. It is not commerce-specific. In commerce it is a transport and tool layer: a store can expose catalog search or checkout as MCP tools, and UCP defines an MCP binding." },
      { q: "Are ACP, UCP and MCP competitors?", a: "ACP and UCP overlap: both define how agents and merchants handle checkout and orders, backed by different ecosystems. MCP sits at a different layer and is used by both. A merchant may support more than one, often through its commerce platform." },
      { q: "Does a merchant need to implement these protocols directly?", a: "Usually not. Most merchants reach AI channels through their commerce platform, feeds and payment provider. Direct implementation matters for large retailers, platforms and teams building their own agents or checkout integrations." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**ACP** (Agentic Commerce Protocol) and **UCP** (Universal Commerce Protocol) are commerce protocols: they define how an AI agent and a merchant build a checkout, exchange buyer and fulfillment details, pass payment credentials and track orders. ACP is maintained by OpenAI and Stripe; UCP is co-developed by Google, Shopify and other commerce companies. **MCP** (Model Context Protocol) is not a commerce protocol. It is a general way for AI applications to call tools and read data, and commerce protocols can run over it.",
          "They are not interchangeable. ACP and UCP overlap in purpose and come from different ecosystems; MCP is a lower layer both can use. Merchants mostly meet them through their commerce platform rather than by implementing them by hand. For the business context, see [[/blogs/agentic-commerce|agentic commerce]].",
        ],
        callout: {
          type: "note",
          text: "These specifications change quickly. Details below were checked against the official repositories and documentation on 8 October 2026: ACP's latest stable version was dated 2026-04-17 and UCP's current version 2026-08-25.",
        },
      },
      {
        heading: "ACP: the Agentic Commerce Protocol",
        body: [
          "ACP is an Apache 2.0 open specification maintained by OpenAI and Stripe ([[https://github.com/agentic-commerce-protocol/agentic-commerce-protocol|ACP repository]]). Its core is a **checkout API** the merchant implements and the agent calls: create a checkout session, update it (items, address, fulfillment option), retrieve it, complete it with a payment credential and cancel it. Every POST must carry an Idempotency-Key; requests also carry an API-Version and authorization, with optional request signatures. The merchant stays the system of record and the merchant of record: OpenAI states it is not the merchant of record in ACP.",
          "ACP's **Delegated Payment Spec** lets the agent platform obtain a one-time payment token, limited by a maximum amount and an expiry, from the merchant's payment provider; Stripe's Shared Payment Token was the first compatible implementation. Later releases added capability negotiation, extensions, discounts and payment handlers, and the 2026-04-17 release added cart, feed, orders, authentication and MCP. In ChatGPT itself, OpenAI scaled back native Instant Checkout in March 2026 and shifted shopping towards discovery, with purchases completed in merchant apps or on merchant sites ([[https://www.cnbc.com/2026/03/24/openai-revamps-shopping-experience-in-chatgpt-after-instant-checkout.html|CNBC]]); ACP development continues.",
        ],
      },
      {
        heading: "UCP: the Universal Commerce Protocol",
        body: [
          "UCP is an Apache 2.0 open specification published at [[https://ucp.dev/|ucp.dev]]. A business publishes a **profile** at /.well-known/ucp listing its supported version, services, **capabilities** and **payment handlers**. Capabilities use reverse-domain names: dev.ucp.shopping.checkout, dev.ucp.shopping.cart, dev.ucp.shopping.order and dev.ucp.common.identity_linking, with extensions such as fulfillment and discounts. The platform (the agent side) sends its own profile, both sides negotiate the capabilities and version they share, and the conversation runs over one of several transports: REST, MCP, A2A or an embedded binding.",
          "UCP checkout has explicit states (incomplete, requires_escalation, ready_for_complete, complete_in_progress, completed, canceled), and when a checkout needs something the agent cannot supply, the business returns a continue_url so the buyer finishes on the merchant's site. Webhooks from business to platform must be signed with HTTP Message Signatures. Payment handlers are modular, including wallets and an AP2 mandates extension for autonomous agents. Google uses UCP for checkout on eligible listings in AI Mode in Search and the Gemini app for selected merchants, and Shopify's agent tooling supports it.",
        ],
      },
      {
        heading: "MCP: the Model Context Protocol",
        body: [
          "MCP is a general protocol that lets AI applications discover and call tools, read resources and receive prompts from servers. It knows nothing about carts or payments. In commerce it plays two roles: a **tool layer**, where a store or platform exposes product search, availability, cart or order status as MCP tools, and a **transport**, as in UCP's MCP binding. MCP Apps, its official UI extension, also lets a store show interactive product or checkout views inside assistants that support it. See the [[/blogs/model-context-protocol|Model Context Protocol guide]] and [[/blogs/ai-assistant-app-ux|AI assistant app UX]].",
        ],
      },
      {
        heading: "Side-by-side comparison",
        body: [],
        table: {
          headers: ["", "ACP", "UCP", "MCP"],
          rows: [
            ["Purpose", "Agent-to-merchant checkout and payment", "Agent-to-business commerce: catalog, cart, checkout, orders, identity", "Connect AI applications to tools and data"],
            ["Layer", "Commerce protocol", "Commerce protocol", "Integration / transport layer"],
            ["Maintained by", "OpenAI and Stripe", "Co-developed by Google, Shopify and others", "Open project under the Agentic AI Foundation (Linux Foundation)"],
            ["Primary use", "Checkout sessions and delegated payment from an agent platform", "Capability-negotiated commerce across many agents and businesses", "Any tool use, including commerce tools"],
            ["Merchant involvement", "Implements checkout endpoints and PSP integration (or via platform)", "Publishes profile; implements capabilities (or via platform)", "Optional: exposes tools via an MCP server"],
            ["Agent interaction", "REST calls to merchant checkout API", "Negotiated over REST, MCP, A2A or embedded", "Tool calls and resources"],
            ["Checkout", "Yes: create, update, retrieve, complete, cancel", "Yes, with escalation via continue_url", "No (unless a server defines checkout tools)"],
            ["Payments", "Delegated Payment Spec; payment handlers", "Payment handlers; AP2 mandates extension", "Not defined"],
            ["Tools / data", "Product feed spec; orders", "Catalog search and lookup; orders via webhooks", "Generic tools and resources"],
            ["Current ecosystem (Oct 2026)", "ChatGPT commerce partners, Stripe", "Google AI Mode and Gemini (select merchants), Shopify", "Broad: assistants, IDEs, platforms"],
          ],
        },
        code: {
          label: "Where each protocol sits (diagram)",
          text: `  AI agent / assistant (ChatGPT, Gemini, custom agent)
            │
   ┌────────┴──────────────────────────────┐
   │ COMMERCE PROTOCOL                     │
   │   ACP  ── checkout sessions,          │
   │           delegated payment           │
   │   UCP  ── profile, capabilities:      │
   │           catalog, cart, checkout,    │
   │           order, identity linking     │
   └────────┬──────────────────────────────┘
            │ carried over
   ┌────────┴──────────────────────────────┐
   │ TRANSPORT / TOOL LAYER                │
   │   REST · MCP · A2A                    │
   └────────┬──────────────────────────────┘
            ▼
  Merchant systems: catalog · pricing · tax · inventory
  · payments (PSP) · orders · fulfillment (authoritative)`,
        },
      },
      {
        heading: "How they work together",
        body: [
          "A realistic setup combines them. A merchant's product data reaches agents through feeds and catalogs ([[/blogs/ai-product-feeds|AI product feeds]]). An agent platform that speaks ACP calls the merchant's ACP checkout endpoints; one that speaks UCP reads the merchant's /.well-known/ucp profile and uses the negotiated capabilities, possibly over MCP. Payment credentials arrive through the protocol's payment mechanism and are processed by the merchant's payment provider (see [[/blogs/ai-agent-commerce-payments|AI commerce payments]]). Order updates flow back by webhook. The merchant's own systems remain the source of truth for price, tax, inventory and order state throughout. For the full flow, see [[/blogs/agentic-checkout|agentic checkout]].",
        ],
      },
      {
        heading: "What this means for merchants",
        body: [],
        table: {
          headers: ["You are...", "What to do"],
          rows: [
            ["A Shopify or major-platform merchant", "Use the platform's agentic channels; focus on product data, policies and order operations. See [[/blogs/shopify-agentic-commerce|Shopify agentic commerce]]."],
            ["A large retailer with custom commerce", "Evaluate ACP and UCP against the channels you want; build checkout capabilities once behind an internal commerce API and map them to each protocol."],
            ["A platform or marketplace", "Implement protocols centrally so all sellers benefit; publish profiles and handle identity and payments at platform level."],
            ["Building your own shopping agent", "Consume UCP or ACP endpoints and MCP tools; never bypass merchant checkout state."],
          ],
        },
        callout: {
          type: "tip",
          text: "Design your internal commerce API around capabilities (catalog, cart, checkout, order) rather than around one protocol. Protocols then become thin adapters. See agent-ready ecommerce API.",
        },
      },
      {
        heading: "Common misconceptions",
        body: [
          "**'MCP is a commerce protocol.'** It is a general tool protocol that commerce protocols can use. **'ACP and UCP are the same thing.'** They overlap but differ in structure, governance and ecosystem. **'The AI company becomes the seller.'** In both ACP and UCP the merchant remains the merchant of record. **'One protocol will win soon.'** Possibly, but planning for one winner is risky; abstract your checkout logic instead. **'Implementing a protocol guarantees visibility.'** Eligibility, product data quality and the agent platform's own ranking still decide what shoppers see.",
        ],
        cta: {
          title: "Preparing your commerce stack for AI agents?",
          description: "ZSpace Labs builds commerce APIs, feeds and integrations on Shopify and custom platforms. See [[/services/shopify-development|Shopify development]] and [[/services/website-development|full-stack development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "ACP and UCP are the two main open commerce protocols for agent-to-merchant checkout and orders, from different ecosystems; MCP is the general tool and transport layer underneath many AI integrations, including commerce. Understand each at its own layer, keep your merchant systems authoritative, build capabilities behind your own API and let your platform carry most of the protocol work. The full architecture is in [[/blogs/agentic-commerce-stack|the agentic commerce stack]].",
        ],
      },
    ],
  },

  // ---------------------------------------- AI PRODUCT FEEDS
  {
    slug: "ai-product-feeds",
    title: "AI Product Feeds: What Ecommerce Brands Need to Give Shopping Agents",
    seoTitle: "AI Product Feeds: What to Give AI Shopping Agents",
    excerpt:
      "What AI shopping agents need in a product feed: IDs, variants, price, availability, shipping, policies and checkout eligibility, plus validation and freshness.",
    category: "Shopify & Ecommerce",
    banner: "aicommerceflow",
    sceneKind: "pdp",
    date: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["shopify-development", "website-development"],
    relatedIndustrySlugs: ["ecommerce", "retail", "fashion-apparel"],
    relatedSlugs: ["ecommerce-product-feeds", "ecommerce-product-data-ai-search", "agentic-checkout"],
    faqs: [
      { q: "What is an AI product feed?", a: "A structured file or API that sends a merchant's products to AI shopping platforms, including identifiers, descriptions, variants, prices, availability, media, shipping, return policy and seller details, so agents can recommend products accurately and, where enabled, start a checkout." },
      { q: "How is it different from a Google Shopping feed?", a: "The core attributes overlap and some AI platforms accept Google-compatible feeds. AI feeds add fields agents rely on to act, such as checkout eligibility, seller policies and return terms, and the product IDs must match the merchant's checkout API." },
      { q: "How often should an AI product feed update?", a: "Price and availability must be current whenever they change; daily full snapshots plus updates on price, sale and stock changes are a common baseline. Agents that act on stale availability create failed checkouts and cancellations." },
      { q: "What fields does the ChatGPT product feed require?", a: "OpenAI's product feed specification lists item_id, title, description, url, brand, seller_name, image_url, availability and price as required in its own format, with optional fields for variants, identifiers, shipping, returns, reviews and checkout eligibility." },
      { q: "Do Shopify stores need to build feeds for AI agents?", a: "Usually not by hand. Shopify supplies product data to AI channels through Shopify Catalog. The merchant's job is to make the underlying product data, variants, metafields and policies complete and accurate." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI shopping agents recommend and buy products based on structured data, not on how a product page looks. An **AI product feed** gives them that data: stable **product IDs**, **SKUs** and **variants**, factual **titles** and **descriptions**, **price**, **availability**, **media**, **shipping** and **fulfillment** options, **return and seller policies** and, where supported, **checkout eligibility**.",
          "Two things matter more than in a classic shopping feed. **IDs must match your checkout API**, because an agent that selects a product must be able to buy that exact item. And **freshness** is critical, because an agent that acts on stale price or stock produces failed checkouts, not just a bad ad click.",
        ],
      },
      {
        heading: "Why agents need structured product information",
        body: [
          "A shopper scanning a product page can infer that 'ships in 2–3 days' applies to their country or that the blue option is the one in the photo. An agent cannot safely infer either. It compares products across merchants on explicit attributes, checks constraints the user gave it (size, budget, delivery date), and may create a checkout session for a specific variant. Every gap becomes a wrong recommendation or a failed purchase. Our guide to [[/blogs/ecommerce-product-data-ai-search|product data for AI search]] covers content quality; this article covers the feed agents act on.",
        ],
      },
      {
        heading: "The fields that matter",
        body: [],
        table: {
          headers: ["Field group", "What to send", "Why agents need it"],
          rows: [
            ["Product ID", "Stable ID that matches your checkout and order systems", "The selected item must be purchasable exactly"],
            ["SKU and identifiers", "SKU, GTIN, MPN, brand", "Matching across merchants; avoiding wrong-item purchases"],
            ["Title and description", "Product type, key attributes, what is included; factual", "Matching user intent; comparisons"],
            ["Variants", "Group ID plus per-variant ID, options (size, colour), price and availability", "Choosing the right variant, not the parent"],
            ["Price", "Current price, sale price and sale window, currency", "Budget constraints; checkout totals must match"],
            ["Inventory and availability", "in_stock / out_of_stock / pre_order / backorder, per variant", "Avoiding orders that cannot be fulfilled"],
            ["Media", "Accurate images per variant", "User review before purchase"],
            ["Shipping and fulfillment", "Regions, costs, speeds, pickup options", "Delivery-date constraints; total cost"],
            ["Policies", "Return window and conditions, seller terms and privacy policy", "Agents and users weigh risk; some platforms require them for checkout"],
            ["Eligibility flags", "Whether the item may appear in search and in agentic checkout", "Controls where it can be bought"],
            ["Freshness metadata", "Last-updated timestamps", "Agents and platforms judge reliability"],
          ],
        },
      },
      {
        heading: "What current platform specifications ask for",
        body: [
          "Specifications differ by platform and change often, so treat these as examples checked in October 2026, not a permanent list. OpenAI's product feed specification requires item_id, title, description, url, brand, seller_name, image_url, availability and price in its own format, and also accepts a Google-compatible format. Optional fields cover variants (group_id), identifiers (gtin, mpn), shipping, returns (return_deadline_in_days, return_policy), reviews, and eligibility flags for search and checkout; checkout eligibility requires search eligibility, a separately enabled checkout integration and seller terms and privacy policy links ([[https://developers.openai.com/commerce/specs/feed|OpenAI product feed spec]]).",
          "For UCP-powered checkout on Google, eligibility is set per product with a checkout-eligibility attribute in Merchant Center, and Google's documentation notes that the product ID in the feed must match the product ID your checkout API expects ([[https://developers.google.com/merchant/ucp/guides/overview/merchant-center|Google UCP Merchant Center guide]]). Shopify merchants supply AI channels through Shopify Catalog rather than separate feeds; see [[/blogs/shopify-agentic-commerce|Shopify agentic commerce]].",
        ],
      },
      {
        heading: "AI product feed architecture",
        body: [],
        code: {
          label: "AI product feed (diagram)",
          text: `PIM / commerce platform (master product data)
   │ products · variants · media · attributes
   ├───────────── inventory system (stock per location)
   ├───────────── pricing engine (price, sales, currency)
   ├───────────── shipping rules · return policy · seller terms
   ▼
Feed builder ── map fields per channel · validate · version
   │
   ├─▶ OpenAI feed (full snapshot + updates)
   ├─▶ Google Merchant Center (incl. checkout eligibility)
   ├─▶ Shopify Catalog (via platform)
   └─▶ other agents / marketplaces
          │
          ▼  agent selects variant ID
Checkout API ── same IDs · re-checks price and stock live`,
        },
      },
      {
        heading: "Validation before you publish",
        body: [],
        checklist: [
          "Every item has a stable ID that resolves in your checkout API",
          "Variants carry their own ID, options, price, availability and image",
          "Prices in the feed equal prices at checkout, including currency and tax treatment",
          "Availability values are from the allowed list and reflect sellable stock",
          "Shipping and return data are present for every country you sell to",
          "Required policy links resolve and are current",
          "Titles and descriptions are factual; no promotional claims the page does not support",
          "No duplicates or orphaned variants; group IDs are consistent",
          "Platform diagnostics show no errors; warnings are triaged",
        ],
      },
      {
        heading: "Update frequency and freshness",
        body: [
          "Separate slow-changing content (titles, descriptions, media) from fast-changing commercial data (price, sale windows, availability). Send full snapshots on a regular schedule, commonly daily, and push updates whenever price, sale status or stock changes. OpenAI's specification notes that date fields such as sale windows and expiration do not by themselves change price or stock, so current values must be sent. Most importantly, your checkout API must re-check price and stock at checkout time: the feed is for discovery, the checkout session is authoritative. For setting freshness requirements per field, see [[/blogs/data-freshness-for-ai|data freshness for AI]].",
        ],
        callout: {
          type: "takeaway",
          text: "The feed gets you selected; the checkout session decides whether the order succeeds. Keep them on the same IDs and the same prices, and treat mismatches as incidents.",
        },
      },
      {
        heading: "How this differs from feed SEO",
        body: [
          "Classic feed optimization focuses on titles, categories and attributes that win clicks in shopping ads and listings. That still matters; see [[/blogs/ecommerce-product-feeds|ecommerce product feeds]]. AI feeds add operational correctness: purchasable IDs, per-variant availability, shipping and return facts, seller policies and eligibility for checkout. An optimized title cannot rescue an item whose variant ID fails at checkout.",
        ],
      },
      {
        heading: "Monitoring",
        body: [
          "Track feed errors and warnings per platform, price and availability mismatches between feed and checkout, checkout failures by reason (out of stock, price changed, item not found), and the age of the last successful update. Review AI-channel orders for wrong-variant purchases and returns caused by inaccurate data. See [[/blogs/ai-commerce-analytics|tracking AI-referred ecommerce sales]].",
        ],
        cta: {
          title: "Getting product data ready for AI shopping?",
          description: "ZSpace Labs builds product data pipelines, feeds and checkout integrations for Shopify and custom commerce. See [[/services/shopify-development|Shopify development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "AI product feeds are operational data, not just marketing data. Send complete, factual, per-variant information with IDs that match checkout, keep price and availability fresh, include shipping, returns and seller policies, validate before publishing and re-check everything at checkout. For how feeds fit the rest of the system, see [[/blogs/agentic-commerce-stack|the agentic commerce stack]].",
        ],
      },
    ],
  },

  // ---------------------------------------- AGENTIC CHECKOUT
  {
    slug: "agentic-checkout",
    title: "Agentic Checkout: How AI Agents Complete Ecommerce Purchases",
    seoTitle: "Agentic Checkout: How AI Agents Complete Purchases",
    excerpt:
      "How agentic checkout works step by step, from cart and checkout session to payment, order and webhooks, with idempotency, signatures and error handling.",
    category: "Shopify & Ecommerce",
    banner: "agentorderflow",
    sceneKind: "checkout",
    date: "2026-10-08",
    readingTime: "7 min read",
    relatedServiceSlugs: ["shopify-development", "website-development"],
    relatedIndustrySlugs: ["ecommerce", "retail", "d2c-consumer"],
    relatedSlugs: ["acp-vs-ucp-vs-mcp", "agent-ready-ecommerce-api", "ai-agent-commerce-payments"],
    faqs: [
      { q: "What is agentic checkout?", a: "Agentic checkout is a purchase completed by an AI agent on a shopper's behalf through the merchant's checkout system: the agent creates a checkout session, supplies buyer and fulfillment details, receives authoritative totals from the merchant, passes a payment credential and receives the order." },
      { q: "How does agentic checkout work?", a: "The agent creates a checkout session with selected items; the merchant returns prices, tax and fulfillment options; the agent updates the session with the buyer's address and choices; the shopper confirms; the agent completes the session with a payment credential; the merchant charges, creates the order and sends updates by webhook." },
      { q: "Who is the merchant of record in agentic checkout?", a: "The merchant. Both the Agentic Commerce Protocol and the Universal Commerce Protocol keep the merchant as merchant of record, responsible for pricing, tax, payment processing, fulfillment, refunds and customer obligations." },
      { q: "Why is idempotency important in agentic checkout?", a: "Agents and networks retry. Without idempotency keys a retried complete request could charge twice or create duplicate orders. ACP requires an Idempotency-Key on every POST, and UCP defines how retries of the complete operation must reuse the same key." },
      { q: "What happens when the agent cannot finish the checkout?", a: "The merchant signals that buyer input is needed. In UCP the checkout enters requires_escalation and returns a continue_url so the buyer can finish on the merchant's site; ACP has comparable statuses such as requires_escalation and authentication_required." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**Agentic checkout** is a purchase an AI agent completes for a shopper through the merchant's own checkout system. The agent creates a **checkout session** with the selected items, the merchant returns **authoritative** prices, tax and fulfillment options, the agent adds buyer and delivery details, the shopper confirms, the agent completes the session with a **payment credential**, and the merchant charges, creates the **order** and sends updates by **webhook**.",
          "The merchant is in charge throughout: it calculates totals, decides whether to accept the order, processes payment and remains merchant of record. The engineering challenges are the classic ones made sharper by automation: idempotency, authentication, signatures, retries, clear errors and order consistency.",
        ],
      },
      {
        heading: "The complete flow",
        body: [
          "The sequence below follows the two main open specifications, the Agentic Commerce Protocol (ACP, checkout API in the 2026-04-17 release) and the Universal Commerce Protocol (UCP, checkout capability in the 2026-08-25 release). Names differ slightly; the shape is the same.",
        ],
        code: {
          label: "Agentic checkout flow (diagram)",
          text: `Agent                               Merchant (authoritative)
  │ 1 Product: agent picks variant ID from feed/catalog
  │ 2 Cart: items + quantities
  │ 3 POST create checkout session ─────▶ validate items, stock
  │ ◀──────────── session: line items, prices, status=incomplete
  │ 4 Buyer info (email, phone) ────────▶
  │ 5 Fulfillment address ──────────────▶ shipping options
  │ ◀──────────── fulfillment options + costs
  │   choose option ────────────────────▶
  │ 6 Pricing  ◀──── totals: items, discounts, shipping
  │ 7 Tax      ◀──── tax calculated by merchant
  │ ◀──────────── status=ready_for_payment / ready_for_complete
  │ ✓ shopper reviews totals and confirms (in the agent UI)
  │ 8 Payment: complete session + delegated / tokenized
  │   credential, Idempotency-Key ─────▶ risk checks, charge via PSP
  │ 9 Order  ◀──── status=completed + order id + link
  │ 10 Webhook ◀── order.created / shipped / delivered (signed)
  │ 11 Confirmation shown to shopper; receipt by email from merchant`,
        },
      },
      {
        heading: "Step by step",
        body: [],
        table: {
          headers: ["Step", "What happens", "Authority"],
          rows: [
            ["Product", "Agent selects a specific variant ID from feed or catalog data", "Merchant catalog"],
            ["Cart", "Items and quantities assembled; some protocols have a separate cart object", "Agent proposes; merchant validates"],
            ["Checkout session", "Created on the merchant; returns line items, availability and status", "Merchant"],
            ["Buyer information", "Contact details added; identity linking may connect an existing account", "Shopper consents via agent"],
            ["Fulfillment", "Address supplied; merchant returns shipping or pickup options and costs", "Merchant"],
            ["Pricing", "Discounts and totals calculated", "Merchant"],
            ["Tax", "Calculated for the destination", "Merchant"],
            ["Payment", "Agent completes the session with a scoped credential", "Shopper authorizes; PSP and merchant process"],
            ["Order", "Merchant accepts or declines; returns order ID", "Merchant"],
            ["Webhook", "Order and fulfillment updates sent to the agent platform", "Merchant (signed)"],
            ["Confirmation", "Agent shows confirmation; merchant sends its usual receipt", "Both"],
          ],
        },
      },
      {
        heading: "Authoritative merchant state",
        body: [
          "The single most important rule: the merchant's checkout session is the source of truth. The agent may have seen a price in a feed an hour ago; the session's totals are what the shopper pays. UCP states that the checkout state reported by the business is authoritative, and ACP describes the merchant validating orders, calculating tax and fulfillment, assessing risk, charging payment and accepting or declining orders. Agents must display the merchant's totals for confirmation and never compute their own.",
        ],
      },
      {
        heading: "Session statuses",
        body: [
          "Both specifications use explicit statuses so the agent knows what to do next. ACP's checkout session statuses include incomplete, not_ready_for_payment, requires_escalation, authentication_required, ready_for_payment, pending_approval, complete_in_progress, completed, canceled, in_progress and expired ([[https://github.com/agentic-commerce-protocol/agentic-commerce-protocol|ACP specification]]). UCP uses incomplete, requires_escalation, ready_for_complete, complete_in_progress, completed and canceled ([[https://ucp.dev/specification/shopping/checkout/|UCP checkout]]). Map your internal checkout states to these precisely; ambiguous states are where duplicate charges and stuck orders come from.",
        ],
      },
      {
        heading: "Idempotency and retries",
        body: [
          "Agents, networks and platforms retry. ACP requires an Idempotency-Key header on every POST. UCP is precise about the complete operation: the platform must not start a new complete while the status is complete_in_progress; if a response is lost, it should poll the session with bounded backoff; only if the outcome is still unknown may it resend the identical request with the same key; and reusing a key with a different payload returns a 409 conflict. Implement idempotency at the payment and order-creation layers too, not only at the HTTP edge.",
        ],
        callout: {
          type: "takeaway",
          text: "A lost response to 'complete' is the most dangerous moment in agentic checkout. Poll for state before retrying, and retry only with the same idempotency key.",
        },
      },
      {
        heading: "Authentication and signatures",
        body: [
          "The merchant must know which agent platform is calling and that requests were not altered. ACP requests carry authorization and an API version, with optional request signature and timestamp headers. UCP uses HTTP Message Signatures (RFC 9421) with published keys, and requires webhooks from business to platform to be signed. Verify signatures and timestamps, reject replays, rotate keys, and scope each platform's credentials to the capabilities it needs. Agent identity is separate from shopper authorization and from payment authorization; see [[/blogs/ai-agent-commerce-payments|AI commerce payments]] and [[/blogs/ai-agent-traffic-verification|verifying AI agent traffic]].",
        ],
      },
      {
        heading: "Error handling",
        body: [
          "Return errors an agent can act on: a type, a machine-readable code, a human-readable message and the field concerned. Distinguish recoverable problems the agent can fix (invalid address, variant out of stock, price changed: show new totals) from those that need the buyer (authentication required, policy acceptance, age verification), which should escalate with a continue URL rather than fail silently. Never let an agent complete a session whose totals changed since the shopper confirmed; return to confirmation.",
        ],
      },
      {
        heading: "Order consistency",
        body: [
          "After completion, the agent platform, the shopper and your systems must agree on the order. Create the order atomically with the payment outcome, return the order ID in the completion response, send signed webhooks for every state change, make webhook handling idempotent on the receiving side, and provide an order lookup so either side can reconcile. Mark agent orders with their channel for operations and analytics; see [[/blogs/agent-placed-orders|orders placed by AI agents]].",
        ],
      },
      {
        heading: "Implementation checklist",
        body: [],
        checklist: [
          "Checkout session endpoints backed by your real pricing, tax, inventory and fulfillment logic",
          "Feed and checkout share product and variant IDs",
          "Explicit status mapping, documented and tested",
          "Idempotency keys enforced on all writes, including payment and order creation",
          "Request authentication, signature verification and replay protection",
          "Typed errors; escalation with a continue URL for buyer-only steps",
          "Re-confirmation when totals change",
          "Atomic order creation with payment; signed, idempotent webhooks",
          "Channel tagging and reconciliation reports",
          "Sandbox tests for retries, timeouts, price changes and stock-outs",
        ],
        cta: {
          title: "Implementing checkout for AI agents?",
          description: "ZSpace Labs builds checkout APIs, payment integrations and order webhooks for Shopify and custom commerce platforms. See [[/services/shopify-development|Shopify development]] and [[/services/website-development|full-stack development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Agentic checkout moves the checkout form from your website into an agent's conversation, but not the responsibility. Keep the merchant's session authoritative, map statuses precisely, enforce idempotency and signatures, return actionable errors, escalate to the shopper when needed and keep orders consistent with signed webhooks. For the API around it, see [[/blogs/agent-ready-ecommerce-api|agent-ready ecommerce API]], and for protocol differences, [[/blogs/acp-vs-ucp-vs-mcp|ACP vs UCP vs MCP]].",
        ],
      },
    ],
  },
];
