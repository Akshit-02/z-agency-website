import type { BlogPost } from "./blog-data";

/**
 * Agentic commerce infrastructure cluster, part two (published 2026-10-08):
 * agent-ready ecommerce API, AI commerce payments and the agentic commerce
 * stack hub. Specifications checked 2026-10-08: ACP checkout OpenAPI
 * (2026-04-17) and OpenAI Delegated Payment Spec; UCP overview and
 * checkout (2026-08-25); AP2 (ap2-protocol.org: checkout and payment
 * mandates, standardization moving to FIDO Alliance working groups);
 * Mastercard Agent Pay and Visa Trusted Agent Protocol announcements;
 * IETF RFC 9421 (HTTP Message Signatures).
 */

export const agenticCommercePosts2: BlogPost[] = [
  // ---------------------------------------- AGENT-READY ECOMMERCE API
  {
    slug: "agent-ready-ecommerce-api",
    title: "How to Build an Agent-Ready Ecommerce API",
    seoTitle: "How to Build an Agent-Ready Ecommerce API",
    excerpt:
      "How to design ecommerce APIs AI agents can use safely: products, inventory, pricing, cart, checkout, orders and returns, with schemas, auth and idempotency.",
    category: "Shopify & Ecommerce",
    banner: "toolselectflow",
    sceneKind: "code",
    date: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["website-development", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "retail", "b2b-enterprise"],
    relatedSlugs: ["apis-for-ai-agents", "agentic-checkout", "ecommerce-api-integration"],
    faqs: [
      { q: "What is an agent-ready ecommerce API?", a: "An ecommerce API designed so AI agents, as well as apps, can discover products, check stock and price, build carts, complete checkout and manage orders, cancellations and returns, with clear schemas, delegated authorization, idempotent writes, machine-readable states and signed webhooks." },
      { q: "Which endpoints does an agent-ready ecommerce API need?", a: "Products and variants, inventory and availability, pricing and quotes, cart, checkout sessions, orders, fulfillment and tracking, cancellation and returns, plus webhooks for state changes. Each should be narrow and task-shaped." },
      { q: "How is it different from a normal ecommerce API?", a: "It assumes callers that act for shoppers, retry often, read descriptions literally and must not double-buy. That means stricter idempotency, explicit status enums, actionable errors, delegated permissions per shopper, rate limits per agent and stable identifiers across feed, cart and order." },
      { q: "Should we build MCP tools or a REST API?", a: "Build the capabilities once behind a well-designed internal API, then expose them through REST, an MCP server and commerce protocol adapters such as ACP or UCP as channels require. The business rules should live in one place." },
      { q: "How should agents authenticate?", a: "Identify the agent platform with signed requests or client credentials, and act for a shopper only with a delegated, scoped token obtained through OAuth-style identity linking. Never accept shared passwords or unscoped API keys for shopper actions." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An **agent-ready ecommerce API** exposes the commerce capabilities an AI agent needs (products, inventory, pricing, cart, checkout, orders, fulfillment, cancellation and returns) in a form agents can use without guessing: **typed schemas**, **explicit status enums**, **actionable errors**, **delegated authorization** per shopper, **idempotent writes**, **rate limits** per agent, **cursor pagination** and **signed webhooks**.",
          "Build the capabilities once behind your own API and keep your business rules there. Then expose them to agents through REST, an MCP server and commerce protocol adapters (ACP, UCP) as the channels you sell through require.",
        ],
      },
      {
        heading: "Why a generic API is not enough",
        body: [
          "Most ecommerce APIs were built for your own storefront and apps, which know your quirks. Agents do not. They read field names and descriptions literally, retry on timeouts, call from many platforms at once and act on behalf of shoppers who are not looking at your site. A missing idempotency key becomes a double order; a vague status becomes a wrong promise to a customer. The general case is covered in [[/blogs/apis-for-ai-agents|APIs for AI agents]]; this article is the ecommerce-specific design.",
        ],
      },
      {
        heading: "Example architecture",
        body: [],
        code: {
          label: "Agent-ready ecommerce API (diagram)",
          text: `      Agent platforms / assistants / your own agent
           │ ACP          │ UCP           │ MCP tools
   ┌───────┴──────┬───────┴───────┬───────┴───────┐
   │ ACP adapter  │ UCP adapter   │ MCP server    │  thin channel
   └───────┬──────┴───────┬───────┴───────┬───────┘  adapters
           ▼              ▼               ▼
   ┌───────────────────────────────────────────────┐
   │ AGENT GATEWAY: auth · signatures · rate limits │
   │ idempotency store · audit · channel tagging    │
   └───────────────────────┬───────────────────────┘
                           ▼
   ┌───────────────────────────────────────────────┐
   │ COMMERCE API (single source of business rules) │
   │ products · inventory · pricing · cart ·        │
   │ checkout · orders · fulfillment · returns      │
   └───────┬──────────┬──────────┬─────────┬───────┘
           ▼          ▼          ▼         ▼
         PIM       OMS/WMS     PSP     tax / shipping
   webhooks ◀── order + fulfillment events (signed) ──▶ agents`,
        },
      },
      {
        heading: "Endpoints",
        body: [],
        table: {
          headers: ["Resource", "Example operations", "Agent-specific notes"],
          rows: [
            ["Products", "search, get product, get variants", "Return per-variant IDs, options, media, policies; filters as typed params"],
            ["Inventory", "get availability by variant and location", "Status enum plus quantity bands if exact counts are sensitive; as-of time"],
            ["Pricing", "quote(items, destination, discounts)", "Totals from the same engine as checkout; currency and tax treatment explicit"],
            ["Cart", "create, add, update, remove", "Validate on every change; return warnings (low stock, price change)"],
            ["Checkout", "create session, update, get, complete, cancel", "Authoritative totals; statuses; escalation URL; idempotency"],
            ["Orders", "get order, list for shopper", "Status enum; line-level states; links for the shopper"],
            ["Fulfillment", "get shipments, tracking events", "Carrier, tracking number, event timeline"],
            ["Cancellation", "check cancellable, cancel order or line", "Return what can still be cancelled and the refund amount before acting"],
            ["Returns", "check eligibility, create return, get return status", "Policy evaluated server-side; label and instructions in response"],
          ],
        },
      },
      {
        heading: "Schemas and machine-readable states",
        body: [
          "Use explicit types, enums and units everywhere: amounts in minor units with currency codes, timestamps in ISO 8601 with time zones, statuses from closed lists. Describe every field in plain language in your OpenAPI or tool schema, because agents read descriptions. Keep IDs stable across feed, cart, checkout and order, so an item an agent found can be bought and then tracked. Return state with every write so the agent never has to guess what happened.",
        ],
        code: {
          label: "Order state in a response (illustrative)",
          text: `{
  "order_id": "ord_55120",
  "status": "partially_shipped",
  "currency": "EUR",
  "total_minor": 42000,
  "lines": [
    { "line_id": "l1", "variant_id": "v_sofa_grey_3s",
      "status": "shipped", "cancellable": false,
      "returnable_until": "2026-11-02T23:59:59Z" },
    { "line_id": "l2", "variant_id": "v_cushion_set",
      "status": "processing", "cancellable": true }
  ],
  "shipments": [{ "carrier": "DHL", "tracking": "JD0142…",
                  "status": "in_transit" }],
  "updated_at": "2026-10-08T09:12:00Z"
}`,
        },
      },
      {
        heading: "Authentication and authorization",
        body: [
          "Separate three identities. The **agent platform** proves who it is with client credentials or signed requests (HTTP Message Signatures, RFC 9421, are used by UCP). The **shopper** delegates specific permissions to that platform through OAuth-style identity linking, so the agent can see this shopper's orders and nothing else. **Payment authorization** is separate again and handled through payment credentials, not API scopes. Scope tokens narrowly (read orders, create checkout, create return), make them revocable, and log every call with platform, shopper and scope. See [[/blogs/ai-agent-authentication|AI agent identity and authentication]] and [[/blogs/ai-agent-commerce-payments|AI commerce payments]].",
        ],
      },
      {
        heading: "Idempotency, rate limits and pagination",
        body: [
          "**Idempotency:** require an idempotency key on every write (cart changes, checkout completion, cancellation, return creation), store the result per key, and return the original result on replay; reject the same key with a different payload. **Rate limits:** apply per agent platform and per shopper, return 429 with Retry-After, and publish limits so platforms can plan. **Pagination:** use cursor-based pagination with stable ordering for search and order lists; offset pagination produces duplicates and gaps when data changes between pages.",
        ],
      },
      {
        heading: "Errors agents can recover from",
        body: [
          "Return a stable error type and code, a human-readable message, the field at fault, whether retrying can help and suggested alternatives: another variant in stock, the new price, the nearest available delivery date. Distinguish errors the agent can fix itself from those requiring the shopper (verification, policy acceptance) and return a URL where the shopper can complete them. See [[/blogs/agent-ux-design|agent UX]] for the general pattern.",
        ],
      },
      {
        heading: "Webhooks",
        body: [
          "Agents should not poll your order system. Emit signed webhooks for order created, payment captured, shipped, delivered, cancelled, return created, refund issued. Include event IDs and timestamps so receivers can deduplicate and order events, retry with backoff, and provide a way to fetch current state for reconciliation. Our guide to [[/blogs/ecommerce-webhooks|ecommerce webhooks]] covers delivery guarantees.",
        ],
      },
      {
        heading: "MCP tools on top",
        body: [
          "For assistants that use MCP, wrap the same API in a small set of task-shaped tools (search_products, check_availability, create_checkout, get_order_status, start_return) with descriptions written for models. Do not expose raw CRUD over every table. Keep consequential tools (complete checkout, cancel, return) behind shopper confirmation in the client and authorization on your server. See [[/blogs/ai-agent-tool-design|AI agent tool design]].",
        ],
      },
      {
        heading: "Checklist",
        body: [],
        checklist: [
          "Capabilities defined once in a commerce API; protocols and MCP as thin adapters",
          "Stable IDs shared by feed, cart, checkout and order",
          "Typed schemas with descriptions, enums, units and examples",
          "Platform authentication, shopper delegation and payment authorization kept separate",
          "Idempotency on every write; conflict on key reuse with different payloads",
          "Per-platform and per-shopper rate limits with Retry-After",
          "Cursor pagination with stable ordering",
          "Typed, recoverable errors with escalation URLs for shopper-only steps",
          "Signed, deduplicable webhooks plus state lookup for reconciliation",
          "Agent traffic tagged by channel in logs, orders and analytics",
        ],
        cta: {
          title: "Building commerce APIs for AI agents?",
          description: "ZSpace Labs designs and builds headless commerce APIs, MCP servers and checkout integrations. See [[/services/website-development|full-stack development]] and [[/services/shopify-development|Shopify development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "An agent-ready ecommerce API is a well-designed commerce API with stricter guarantees: explicit states, actionable errors, separated identities, idempotent writes, fair limits and reliable webhooks. Keep the rules in one place and adapt it to each protocol and assistant. For the checkout flow in detail, see [[/blogs/agentic-checkout|agentic checkout]]; for the full picture, [[/blogs/agentic-commerce-stack|the agentic commerce stack]].",
        ],
      },
    ],
  },

  // ---------------------------------------- AI COMMERCE PAYMENTS
  {
    slug: "ai-agent-commerce-payments",
    title: "AI Commerce Payments: How to Secure Purchases Made by AI Agents",
    seoTitle: "AI Agent Payments: How to Secure Purchases Made by Agents",
    excerpt:
      "How AI agent purchases are paid and secured: delegated credentials, mandates, limits, fraud and disputes, and why agent and payment authorization differ.",
    category: "Shopify & Ecommerce",
    banner: "agentidflow",
    sceneKind: "security",
    date: "2026-10-08",
    readingTime: "7 min read",
    relatedServiceSlugs: ["shopify-development", "website-development"],
    relatedIndustrySlugs: ["ecommerce", "fintech", "retail"],
    relatedSlugs: ["agentic-checkout", "ecommerce-payment-security", "agent-placed-orders"],
    faqs: [
      { q: "How do AI agents pay for purchases?", a: "Usually with a scoped payment credential rather than raw card details: a delegated or shared payment token limited by amount, merchant, checkout and expiry, a network agentic token, or a wallet credential. The merchant's payment provider processes it like any other payment." },
      { q: "What is a delegated payment?", a: "A payment where the shopper authorizes an agent platform to pass a limited credential to the merchant for a specific purchase. OpenAI's Delegated Payment Spec, for example, creates a one-time token restricted by a maximum amount and an expiry." },
      { q: "What are payment mandates?", a: "Signed records of what a user authorized. In AP2, a checkout mandate captures authorization for a specific checkout (or, in open form, constraints for autonomous purchases) and a payment mandate captures authorization for the payment, giving merchants and payment networks verifiable evidence of consent." },
      { q: "What is the difference between agent authorization and payment authorization?", a: "Agent authorization decides what an agent may do on a user's behalf, such as create a checkout or view orders. Payment authorization decides whether a specific amount may be charged to a specific instrument. An agent allowed to shop is not automatically allowed to spend without limits." },
      { q: "Who handles refunds and disputes for agent purchases?", a: "The merchant and its payment provider, as for any other order. The merchant remains merchant of record, so refunds, chargebacks and evidence follow normal processes, with the agent channel and authorization records added as context." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "When an AI agent buys something, three separate questions must each have a clear answer. **Is this agent allowed to act for this person?** (agent authorization). **Did the person approve this purchase, or the rules it falls under?** (purchase consent). **May this amount be charged to this payment instrument?** (payment authorization). Mixing them up is the main source of risk.",
          "Current approaches use **scoped credentials** instead of raw card numbers: delegated or shared payment tokens limited by amount, merchant and expiry, network-issued agentic tokens, wallet credentials and signed **mandates** that record what the user authorized. The merchant remains merchant of record and handles **fraud screening**, **refunds** and **disputes** through its payment provider. No single payment protocol is universal yet, so build for more than one.",
        ],
      },
      {
        heading: "Agent authorization vs payment authorization",
        body: [],
        table: {
          headers: ["", "Agent authorization", "Payment authorization"],
          rows: [
            ["Question", "What may this agent do for this user?", "May this amount be charged to this instrument?"],
            ["Granted by", "User, via account linking or platform consent", "User approval, mandate or rules, plus issuer decision"],
            ["Mechanism", "OAuth-style scopes, identity linking", "Payment tokens, mandates, card authentication, issuer authorization"],
            ["Checked by", "Merchant API and agent platform", "Payment provider, network and issuer"],
            ["Example", "Agent may create checkouts and view orders", "Charge up to EUR 150 to this card for this checkout, today"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "An agent that is allowed to shop is not automatically allowed to spend. Keep spending limits in the payment credential or mandate, not only in the agent's instructions.",
        },
      },
      {
        heading: "How agent payments work today",
        body: [
          "**Delegated payment tokens.** In the Agentic Commerce Protocol, the agent platform asks the merchant's payment provider for a one-time token restricted by a maximum amount and expiry, then passes it to the merchant to complete checkout. OpenAI's Delegated Payment Spec describes this, and Stripe's Shared Payment Token was the first compatible implementation ([[https://developers.openai.com/commerce/specs/payment|OpenAI Delegated Payment Spec]]).",
          "**Payment handlers.** UCP lets a business declare payment handlers in its profile (for example a wallet or a processor tokenizer) and lets the platform choose one, so different credential types can be supported without changing checkout logic. **Mandates.** AP2 (Agent Payments Protocol), published by Google with standardization continuing in FIDO Alliance working groups, uses signed verifiable digital credentials: a checkout mandate and a payment mandate, each with an open form (constraints for autonomous execution) and a closed form (authorization for a specific checkout or amount) ([[https://ap2-protocol.org/|AP2]]). UCP includes an AP2 mandates extension. **Network agentic tokens.** Card networks have introduced agent-specific programs, such as Mastercard Agent Pay's agentic tokens and Visa's Trusted Agent Protocol for identifying agents to merchants. Check each provider's current documentation; these programs are evolving.",
        ],
        code: {
          label: "Agent payment flow (diagram)",
          text: `Shopper ──consent / limits──▶ Agent platform
                                   │ (agent authorization: scopes)
                                   ▼
               request scoped credential
     (delegated token · wallet · agentic token · mandate)
                                   │ max amount · merchant ·
                                   │ checkout · expiry
                                   ▼
Merchant checkout ◀── complete(session, credential, idem-key)
   │ verify platform signature · totals ≤ limit
   │ fraud screening (agent channel signals)
   ▼
Payment provider ──▶ network ──▶ issuer (payment authorization,
   │                                       SCA if required)
   ▼
Order created · receipt · refunds/disputes via merchant + PSP`,
        },
      },
      {
        heading: "Transaction limits",
        body: [
          "Limits belong in several layers: the credential itself (maximum amount, single use, expiry, merchant and checkout binding), the agent platform's policy (per-transaction and per-period caps set by the user), and the merchant's risk rules (order value thresholds that trigger review). Mandate-based approaches let a user pre-authorize constrained autonomous purchases ('reorder printer paper under EUR 40 monthly'), but the constraints must be explicit and verifiable, not inferred from conversation.",
        ],
      },
      {
        heading: "Authentication",
        body: [
          "Strong customer authentication rules still apply where they apply. Agent flows have to support step-up authentication: when the issuer or regulation requires it, the checkout returns an authentication-required state and the shopper completes the challenge, in the agent interface or on the merchant's site. ACP includes an authentication_required checkout status; UCP describes tokenization with a challenge as one payment-handler scenario. Design for the challenge path, not just the frictionless one.",
        ],
      },
      {
        heading: "Fraud controls and merchant verification",
        body: [
          "Agent purchases change fraud signals: device and behavioural data from the shopper's browser are missing, and orders arrive from a small number of platforms. Do not block the channel; adjust the model. Verify the agent platform (signed requests, published keys, network agent identification), bind credentials to the checkout, check that delivery details match the account where identity is linked, and route unusual orders to review. Verification runs both ways: agent platforms and networks also verify that merchants are legitimate before passing credentials. See [[/blogs/agent-placed-orders|orders placed by AI agents]] and [[/blogs/ecommerce-fraud-detection|ecommerce fraud detection]].",
        ],
      },
      {
        heading: "Refunds and disputes",
        body: [
          "The merchant remains merchant of record, so refunds go back through the original payment provider and instrument, and disputes follow card network rules. What changes is evidence. Keep the checkout session, the totals the shopper confirmed, the agent platform identity, the credential's constraints and any mandate with the order. That record helps distinguish 'I did not authorize this' from 'the agent bought the wrong item', which are different problems with different remedies. Our guide to [[/blogs/ecommerce-chargeback-management|chargeback management]] covers the dispute process.",
        ],
      },
      {
        heading: "Do not bet on one protocol",
        body: [
          "Delegated tokens, payment handlers, mandates and network tokens solve overlapping problems and come from different ecosystems. Which ones you need depends on the agent channels you sell through and your payment provider. Abstract payment completion behind your checkout API, rely on your PSP for credential handling and PCI scope, and add protocols as channels demand them. The baseline controls in [[/blogs/ecommerce-payment-security|ecommerce payment security]] still apply.",
        ],
      },
      {
        heading: "Checklist",
        body: [],
        checklist: [
          "Separate agent scopes, purchase consent and payment authorization in design and logs",
          "Accept only scoped credentials (amount, merchant, checkout, expiry); never raw card data from agents",
          "Verify platform identity and request signatures",
          "Re-check totals against the credential limit before charging",
          "Support step-up authentication paths",
          "Tune fraud rules for agent channels; review rather than block",
          "Store checkout, confirmation, credential constraints and mandates with each order",
          "Handle refunds and disputes through normal PSP processes with agent evidence",
        ],
        cta: {
          title: "Adding agent payments to your checkout?",
          description: "ZSpace Labs integrates payment providers, tokenized payments and checkout APIs for Shopify and custom stores. See [[/services/shopify-development|Shopify development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Securing agent purchases is mostly about keeping three authorizations distinct and enforced: what the agent may do, what the shopper approved and what the payment system allows. Use scoped credentials and verifiable records, keep the merchant's checkout and payment provider in control, adapt fraud controls and preserve evidence for refunds and disputes. For the checkout mechanics, see [[/blogs/agentic-checkout|agentic checkout]].",
        ],
      },
    ],
  },

  // ---------------------------------------- AGENTIC COMMERCE STACK (HUB)
  {
    slug: "agentic-commerce-stack",
    title: "The Agentic Commerce Stack: Product Data, Discovery, Checkout, Payments and Fulfillment",
    seoTitle: "The Agentic Commerce Stack: From Product Data to Fulfillment",
    excerpt:
      "The layers of agentic commerce, from shopping agent and discovery to product data, APIs, checkout, payments, orders and post-purchase, mapped to protocols.",
    category: "AI & Automation",
    banner: "aicommerceflow",
    sceneKind: "checkout",
    date: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["shopify-development", "website-development", "ai-automation"],
    relatedIndustrySlugs: ["ecommerce", "retail", "d2c-consumer"],
    relatedSlugs: ["agentic-commerce", "acp-vs-ucp-vs-mcp", "agentic-checkout"],
    faqs: [
      { q: "What is the agentic commerce stack?", a: "The set of layers that let an AI agent shop on a person's behalf: the shopping agent, discovery, product data, the commerce API, cart, checkout, payments, order management, fulfillment and post-purchase service, with protocols such as UCP, ACP, MCP and AP2 connecting them." },
      { q: "Which layer should merchants focus on first?", a: "Product data and policies, because they decide whether an agent can find, understand and correctly buy a product. Then order operations, because agent orders must be fulfilled, tracked and supported like any other order." },
      { q: "Where do ACP, UCP, MCP and AP2 fit?", a: "UCP and ACP cover the commerce layers between agent and merchant (catalog, cart, checkout, orders). MCP is a tool and transport layer used across them. AP2 and network token programs cover payment authorization." },
      { q: "Who owns each layer?", a: "Agent platforms own the shopping agent and its interface. Merchants own product data, pricing, checkout state, orders and fulfillment, and remain merchant of record. Payment providers and networks own credential handling and authorization." },
      { q: "Is agentic commerce replacing ecommerce websites?", a: "No evidence suggests that. It adds a channel. Many purchases that start in AI assistants still finish on merchant sites, and websites remain the source of product information, trust and service." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "The **agentic commerce stack** is the set of layers that let an AI agent shop for a person: the **shopping agent**, **discovery**, **product data**, the **commerce API**, **cart**, **checkout**, **payments**, **order**, **fulfillment** and **post-purchase** service. Protocols connect the agent side to the merchant side: **UCP** and **ACP** for commerce capabilities such as cart, checkout and orders, **MCP** as a tool and transport layer, and **AP2** and network token programs for payment authorization.",
          "Ownership is clear. Agent platforms own the agent and its interface. The merchant owns product data, prices, checkout state, orders and fulfillment, and stays merchant of record. Payment providers and networks own credentials and authorization.",
        ],
      },
      {
        heading: "The stack at a glance",
        body: [],
        code: {
          label: "Agentic commerce stack (diagram)",
          text: `  AI SHOPPING AGENT        assistant UI · intent · user rules
          │
  DISCOVERY                 search over catalogs and feeds
          │                 (Merchant Center, Shopify Catalog,
          │                  ChatGPT feeds, UCP catalog)
  PRODUCT DATA              IDs · variants · price · stock ·
          │                 shipping · policies
  COMMERCE API              REST · MCP tools · UCP / ACP adapters
          │
  CART                      UCP cart · ACP cart (2026-04-17)
          │
  CHECKOUT                  ACP checkout sessions · UCP checkout
          │                 (merchant state is authoritative)
  PAYMENTS                  delegated tokens · payment handlers ·
          │                 AP2 mandates · network agentic tokens
  ORDER                     order creation · signed webhooks
          │
  FULFILLMENT               OMS · WMS · carriers · tracking
          │
  POST-PURCHASE             status · cancel · return · refund ·
                            support (UCP order, ACP order events)`,
        },
      },
      {
        heading: "Layer 1: the AI shopping agent",
        body: [
          "The agent interprets the shopper's intent, applies their constraints (budget, size, delivery date, preferred brands), compares options and presents choices and confirmations. It belongs to the agent platform (an assistant such as ChatGPT or Gemini, a retailer's own agent or a third-party app). Merchants do not control it, but they influence it through data quality, policies and how easily their checkout can be completed. How this changes the classic funnel is covered in [[/blogs/ai-agents-ecommerce-funnel|how AI agents change the ecommerce funnel]], and the business overview in [[/blogs/agentic-commerce|agentic commerce]] and [[/blogs/ai-shopping-agents|AI shopping agents]].",
        ],
      },
      {
        heading: "Layer 2: discovery",
        body: [
          "Agents discover products through catalogs and feeds the platforms index (Google Merchant Center, Shopify Catalog, OpenAI's product feeds), through UCP catalog search on merchants that support it, and through web search and page reading. Visibility depends on eligibility, data quality and the platform's own ranking. Content and search visibility for AI answers are covered in [[/blogs/ai-search-visibility|making your site discoverable in AI search]].",
        ],
      },
      {
        heading: "Layer 3: product data",
        body: [
          "Agents act on structured data: stable IDs that match checkout, per-variant options, price, availability, shipping, return and seller policies. This is the layer merchants control most directly and the one that most often decides success. See [[/blogs/ai-product-feeds|AI product feeds]], [[/blogs/ecommerce-product-data-ai-search|product data for AI search]] and, for Shopify stores, [[/blogs/shopify-agentic-commerce|Shopify agentic commerce]].",
        ],
      },
      {
        heading: "Layer 4: the commerce API",
        body: [
          "Behind every agent channel sits the merchant's commerce logic: catalog, inventory, pricing, tax, cart, checkout, orders and returns. Build it once with agent-grade guarantees (typed schemas, idempotency, delegated authorization, signed webhooks) and expose it through protocol adapters and MCP tools. See [[/blogs/agent-ready-ecommerce-api|agent-ready ecommerce API]].",
        ],
      },
      {
        heading: "Layers 5 and 6: cart and checkout",
        body: [
          "Carts collect items; checkout sessions turn them into an order with authoritative totals, tax, fulfillment options and status. ACP and UCP both define checkout operations (create, update, retrieve, complete, cancel) with explicit statuses, escalation when the shopper must act and strict idempotency on completion. See [[/blogs/agentic-checkout|agentic checkout]] and [[/blogs/acp-vs-ucp-vs-mcp|ACP vs UCP vs MCP]].",
        ],
      },
      {
        heading: "Layer 7: payments",
        body: [
          "Payment authorization stays with payment providers, networks and issuers. Agent channels use scoped credentials (delegated or shared payment tokens, wallet credentials, network agentic tokens) and, increasingly, signed mandates that record what the user authorized. Keep agent authorization, purchase consent and payment authorization separate. See [[/blogs/ai-agent-commerce-payments|AI commerce payments]].",
        ],
      },
      {
        heading: "Layers 8 and 9: order and fulfillment",
        body: [
          "Agent orders enter the same order management and fulfillment systems as any other order, tagged by channel. Signed webhooks keep the agent platform informed of creation, shipping and delivery; UCP defines an order capability with webhook-based updates, and ACP defines order and fulfillment event structures. Operations, fraud signals and confirmation accuracy for these orders are covered in [[/blogs/agent-placed-orders|orders placed by AI agents]], and order flow design in [[/blogs/ecommerce-order-management-system|ecommerce order management]].",
        ],
      },
      {
        heading: "Layer 10: post-purchase",
        body: [
          "After purchase, the shopper may ask the same agent where the order is, to cancel a line or to start a return. That requires order lookup, cancellation and return capabilities with the shopper's delegated authorization, and clear handoff to human support when needed. See [[/blogs/agent-placed-orders|orders placed by AI agents]] and [[/blogs/ecommerce-post-purchase-experience|the ecommerce post-purchase experience]].",
        ],
      },
      {
        heading: "Protocols and APIs mapped to layers",
        body: [],
        table: {
          headers: ["Layer", "Relevant protocols and interfaces", "Owner"],
          rows: [
            ["Shopping agent", "Assistant UI; MCP Apps for in-chat UI", "Agent platform"],
            ["Discovery", "Merchant Center, Shopify Catalog, OpenAI feeds, UCP catalog", "Platforms index; merchant supplies"],
            ["Product data", "Feed specs; structured data on pages", "Merchant"],
            ["Commerce API", "REST, MCP tools, UCP/ACP adapters", "Merchant or commerce platform"],
            ["Cart", "UCP cart capability; ACP cart (2026-04-17)", "Merchant"],
            ["Checkout", "ACP checkout API; UCP checkout capability", "Merchant (authoritative)"],
            ["Payments", "ACP delegated payment; UCP payment handlers; AP2 mandates; network tokens", "PSP, networks, issuers"],
            ["Order", "UCP order capability; ACP order events; webhooks", "Merchant"],
            ["Fulfillment", "OMS, WMS, carrier APIs", "Merchant and logistics partners"],
            ["Post-purchase", "Order lookup, cancellation, returns APIs; support handoff", "Merchant"],
          ],
        },
        callout: {
          type: "note",
          text: "Protocol versions referenced here were checked on 8 October 2026 (ACP 2026-04-17, UCP 2026-08-25). Expect changes; build to capabilities and keep protocol adapters thin.",
        },
      },
      {
        heading: "Measuring agentic commerce",
        body: [
          "Measurement spans layers: AI referral traffic to your site, orders placed inside assistants, assisted journeys that end on your site, and post-purchase outcomes such as returns and support contacts by channel. See [[/blogs/ai-commerce-analytics|tracking AI-referred ecommerce sales]] for a reporting framework.",
        ],
      },
      {
        heading: "Where to start",
        body: [],
        checklist: [
          "Fix product data: IDs, variants, prices, availability, shipping, policies",
          "Turn on the agent channels your commerce platform supports, deliberately",
          "Make order operations ready: channel tagging, fraud tuning, confirmation accuracy",
          "Build or upgrade your commerce API with agent-grade guarantees",
          "Add protocol adapters (ACP, UCP) and MCP tools where channels justify them",
          "Support scoped payment credentials through your PSP",
          "Measure by channel, including returns and support",
        ],
        cta: {
          title: "Planning your store's agentic commerce roadmap?",
          description: "ZSpace Labs works on product data, commerce APIs, checkout integrations and order operations for Shopify and custom stores. See [[/services/shopify-development|Shopify development]] and [[/services/cro-audit|CRO]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Agentic commerce is not one technology but a stack. Agent platforms own the conversation; merchants own data, checkout, orders and fulfillment; payment systems own authorization; and protocols connect them. Strengthen the layers you control, starting with product data and order operations, build commerce capabilities once behind your own API and adopt protocols as your channels require.",
        ],
      },
    ],
  },
];
