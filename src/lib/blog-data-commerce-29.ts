import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch four, part eight: B2B search, pricing,
 * RFQ and customer portals. Merged into `posts` in blog-data.ts.
 */

export const commercePosts29: BlogPost[] = [
  // ------------------------------------------------------- 193 · B2B SEARCH
  {
    slug: "b2b-ecommerce-search",
    title: "B2B Ecommerce Search: How to Help Buyers Find Products Faster",
    excerpt:
      "How to design B2B ecommerce search: part numbers and cross-references, technical attributes, account-aware results, availability, quick add and query analytics.",
    category: "UI/UX",
    banner: "b2bsearch",
    bannerAlt:
      "B2B search in three columns: query types (part numbers, customer's own SKUs, specs such as an M8 40 mm bolt, brand and model, category names), matching (exact SKU first, cross-references, units and formats, synonyms and trade terms, only the entitled catalog) and results (account prices, stock by location, quantity added inline, spec filters, alternatives), because B2B buyers often know exactly what they want.",
    date: "2026-09-29",
    readingTime: "16 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development", "cro-audit"],
    relatedIndustrySlugs: ["manufacturing", "ecommerce"],
    faqs: [
      { q: "How is B2B ecommerce search different from B2C?", a: "B2B buyers often search by exact identifiers such as part numbers, or by technical specifications, and expect account-specific results, prices and availability. Precision matters more than inspiration." },
      { q: "Should B2B search support part numbers?", a: "Yes. Support your SKUs, manufacturer part numbers, customer part numbers and, where appropriate, competitor cross-references, including partial and formatted variations." },
      { q: "How should B2B search handle part number formatting?", a: "Normalize separators and spaces (for example treating “AB-1234”, “AB 1234” and “AB1234” as the same), handle leading zeros and support partial matches." },
      { q: "What are customer part numbers?", a: "Identifiers a customer uses internally for your products. Storing them against the account lets buyers search with their own codes." },
      { q: "How should search handle technical specifications?", a: "Recognize attributes and units in queries (for example “M8 x 40 stainless”), map them to structured attributes and offer spec filters on results." },
      { q: "Should B2B search results show prices?", a: "For logged-in buyers, show their account price and availability in results so they can compare and add without opening each product." },
      { q: "How should search handle restricted products?", a: "Show only products in the buyer's catalog, or clearly mark products they can't buy with a way to request access or a quote." },
      { q: "What should happen when a part number isn't found?", a: "Offer close matches, cross-references and replacements for discontinued parts, and a way to request help or a quote, and log the query." },
      { q: "What metrics matter for B2B search?", a: "Search usage, exact-identifier match rate, zero results, add-to-cart from search, refinements and exits, by account segment." },
      { q: "How is this different from B2B catalog structure?", a: "The catalog guide covers structuring the data. This guide covers how buyers search it." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "B2B ecommerce search must handle exact identifiers and technical specifications with account awareness. Support SKUs, manufacturer part numbers, customer part numbers and cross-references with normalized formatting and partial matches; recognize attributes and units in queries and offer spec filters; show only the buyer's catalog with their price and availability; put quantity inputs and add-to-list actions in results; handle discontinued parts with replacements; and review zero-result and identifier queries every week.",
        ],
      },
      {
        heading: "How B2B Buyers Search",
        body: [
          "Many B2B searches are precise: a part number copied from an invoice, a manufacturer code from a drawing or a specification typed from memory. Others are exploratory, from specifiers looking for a product that meets requirements. Search has to serve both. For catalog structure, see [[/blogs/b2b-ecommerce-product-catalog|B2B product catalog]].",
        ],
        table: {
          headers: ["Query type", "Example", "Search needs"],
          rows: [
            ["Own SKU", "AB-10432", "Exact match, formatting tolerance"],
            ["Manufacturer part number", "a supplier's code", "Stored MPNs, cross-references"],
            ["Customer part number", "buyer's internal code", "Account-level mapping"],
            ["Specification", "M8 x 40 A2 hex bolt", "Attribute and unit parsing"],
            ["Generic", "nitrile gloves", "Category intent, filters"],
            ["Discontinued", "an old code", "Replacement mapping"],
          ],
        },
      },
      {
        heading: "Identifiers and Normalization",
        body: [
          "Index every identifier a buyer might use. Normalize formatting so dashes, spaces, dots and letter case don't matter, handle leading zeros, and support prefix and partial matching for long codes. When a query exactly matches an identifier, take the buyer straight to the product or show it first.",
        ],
        callout: {
          type: "tip",
          text: "Pull the last year of order lines and invoices and test whether every SKU and customer part number on them returns the right product as the first result. It's a fast, objective search audit.",
        },
      },
      {
        heading: "Specifications and Jargon",
        body: [
          "Technical queries combine product type, dimensions, materials and standards. Map them to structured attributes, handle units and equivalents (mm/inch, metric/imperial sizes), and maintain synonyms for industry jargon and abbreviations. Then let buyers refine with spec filters. This depends on consistent attribute data.",
        ],
      },
      {
        heading: "Account-Aware Results",
        body: [
          "Results should reflect the buyer's account: only products in their catalog (or clear marking of restricted ones), their contract price, stock by relevant warehouse and lead times. Boost products the buyer has ordered before. See [[/blogs/b2b-ecommerce-pricing|B2B pricing]].",
        ],
        cta: {
          title: "Buyers calling sales because search can't find parts?",
          description: "ZSpace audits B2B search against real order data and fixes identifiers, specs and relevance.",
        },
      },
      {
        heading: "Results Designed for Action",
        body: [
          "B2B buyers often want to add directly from results. Use list or table layouts showing identifier, key specs, pack size, price, availability and a quantity input with add button. Offer add to list, request quote and compare. Enforce quantity rules in the input with clear messages.",
        ],
        table: {
          headers: ["Column", "Purpose"],
          rows: [
            ["Image and name", "Recognition"],
            ["SKU / MPN", "Confirmation of exact item"],
            ["Key specs", "Differentiation"],
            ["Pack size and MOQ", "Correct quantity"],
            ["Account price", "Cost"],
            ["Availability and lead time", "Delivery planning"],
            ["Quantity and add", "Action"],
          ],
        },
      },
      {
        heading: "Zero Results and Discontinued Parts",
        body: [
          "When an identifier isn't found, check replacements and cross-references, suggest close matches and offer to request help or a quote. Log every zero-result identifier query for review; they often reveal missing mappings. See [[/blogs/ecommerce-empty-states|ecommerce empty states]].",
        ],
      },
      {
        heading: "Search Technology",
        body: [
          "Platform search may be enough for small catalogs with simple identifiers. Large technical catalogs usually need a dedicated search engine or service that supports custom tokenization for part numbers, attribute-aware ranking, account-level filtering and synonyms. AI-assisted search can help interpret natural-language spec queries but must still return exact identifier matches reliably. See [[/blogs/ai-ecommerce-search|AI ecommerce search]] and [[/blogs/ecommerce-site-search|site search]].",
        ],
      },
      {
        heading: "Implementation Notes for Part Number Search",
        body: [
          "Part numbers break standard text search. Tokenizers split “AB-1234-X” into pieces, stemming mangles codes and fuzzy matching can return a similar but wrong part, which is worse than no result. Index identifiers in dedicated fields with their own normalization (remove separators and spaces, uppercase, keep leading zeros as a variant), give exact identifier matches the highest priority and disable fuzzy matching for identifier fields while keeping it for descriptive text.",
        ],
        table: {
          headers: ["Field", "Normalization", "Matching"],
          rows: [
            ["SKU", "Strip separators, uppercase", "Exact and prefix"],
            ["Manufacturer part number", "Strip separators, uppercase", "Exact and prefix"],
            ["Customer part number", "Per account", "Exact, account-scoped"],
            ["Cross-references", "Mapped to your SKU", "Exact"],
            ["Name and description", "Standard text analysis", "Fuzzy allowed"],
          ],
        },
        callout: {
          type: "note",
          text: "A near-miss on a part number is dangerous: the buyer may order the wrong item. Prefer an exact match or an honest “not found” with help over a fuzzy guess.",
        },
      },
      {
        heading: "Common B2B Search Mistakes",
        body: [],
        checklist: [
          "Fuzzy matching on part numbers",
          "Customer part numbers not indexed",
          "Showing products outside the buyer's catalog",
          "Grid layouts without specs or quantity inputs",
          "No replacement mapping for discontinued parts",
          "Search analytics not segmented by account type",
        ],
      },
      {
        heading: "Measuring B2B Search",
        body: [],
        checklist: [
          "Exact identifier queries resolved first",
          "Zero-result rate and top zero-result identifiers",
          "Add-to-cart from search",
          "Refinement and filter usage",
          "Search exits and contact-sales after search",
          "Performance by account segment",
        ],
        cta: {
          title: "Ready to improve B2B search?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|B2B search UX]], [[/services/website-development|search implementation]] and [[/services/cro-audit|search audits]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "B2B search earns trust by finding the exact part every time and showing buyers their price and availability. Index identifiers, parse specs, respect account catalogs and design results for action. For the overall site design, see [[/blogs/b2b-ecommerce-website-design|B2B ecommerce website design]].",
        ],
      },
    ],
  },

  // ------------------------------------------------------ 194 · B2B PRICING
  {
    slug: "b2b-ecommerce-pricing",
    title: "B2B Ecommerce Pricing: How to Display Complex Pricing Online",
    excerpt:
      "How to handle B2B ecommerce pricing online: price lists, contract prices, volume breaks, quantity rules, quotes, currencies and tax, and ERP as the source of truth.",
    category: "Shopify & Ecommerce",
    banner: "b2bpricing",
    bannerAlt:
      "B2B pricing models compared by how each works and what to watch: list price (one price for all; rarely enough in B2B), price lists or catalogs (per company or segment; maintenance), volume tiers (breaks by quantity; clear display), contract pricing (negotiated per account; ERP sync), promotions (time-bound; stacking rules) and quotes (one-off; expiry and approval), with one source of truth for price, usually the ERP.",
    date: "2026-09-29",
    readingTime: "16 min read",
    relatedServiceSlugs: ["shopify-development", "website-development", "ui-ux-design"],
    relatedIndustrySlugs: ["manufacturing", "ecommerce"],
    faqs: [
      { q: "What makes B2B ecommerce pricing complex?", a: "Prices can vary by customer, contract, price list, volume, pack size, currency and channel, and may change with promotions or negotiations. The online store must show each buyer the price they'll actually be invoiced." },
      { q: "Where should B2B prices come from?", a: "Usually the ERP or pricing system that invoices customers. The ecommerce platform should receive or calculate prices from the same rules so web and invoice match." },
      { q: "Should B2B prices be shown to guests?", a: "Show list prices if they're meaningful to prospects, or explain how to get pricing. Show account-specific prices after login." },
      { q: "How should volume pricing be displayed?", a: "As a clear table of quantity breaks with the buyer's current tier highlighted and the next tier shown, on product pages and in the cart." },
      { q: "What are quantity rules?", a: "Minimum order quantities, maximums and order increments. Enforce them in quantity inputs with clear messages, not only at checkout." },
      { q: "Should B2B prices include tax?", a: "B2B prices are commonly shown excluding tax, with tax calculated at checkout. Follow local rules and make it clear which is shown." },
      { q: "How do real-time price lookups work?", a: "The storefront requests the price from the ERP or pricing service at display or cart time. It guarantees accuracy but adds latency and dependency, so cache carefully and plan for downtime." },
      { q: "Can Shopify handle B2B pricing?", a: "Shopify B2B supports catalogs with fixed prices or percentage adjustments, volume pricing and quantity rules assigned to company locations. Complex ERP-driven pricing may need integration or custom apps." },
      { q: "When should buyers request a quote instead?", a: "For large volumes, custom configurations, projects or prices outside standard rules. Offer quote requests from product pages and the cart." },
      { q: "How do I prevent web and invoice price mismatches?", a: "Use a single source of truth, sync or look up prices reliably, test with real accounts and monitor discrepancies between order and invoice amounts." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "B2B ecommerce pricing must show every buyer the price they'll be invoiced. Keep the ERP or pricing system as the source of truth and sync or look up prices from it; display account prices after login and list prices or clear guidance for guests; show volume breaks with the current and next tier; enforce minimums and increments in quantity inputs; state whether prices exclude tax; support currencies by market; and route exceptions to quotes and approvals. Test with real accounts and monitor web-to-invoice discrepancies.",
        ],
      },
      {
        heading: "Why B2B Pricing Is Different",
        body: [
          "In B2C, most shoppers see the same price. In B2B, two buyers looking at the same product can see different prices because of contracts, price lists, volume, pack size and currency. A price mismatch between website and invoice erodes trust and creates disputes. The diagram above compares the common pricing models, how each works and what to watch out for.",
        ],
      },
      {
        heading: "Common Price Structures",
        body: [],
        table: {
          headers: ["Structure", "Example", "Online implication"],
          rows: [
            ["List price", "Published catalog price", "Guest display, baseline"],
            ["Price list / tier", "Trade, distributor, key account", "Assign lists to accounts"],
            ["Contract price", "Negotiated per customer and SKU", "Customer-specific price records"],
            ["Volume breaks", "10+, 50+, 100+", "Break table, tier messaging"],
            ["Pack pricing", "Per box vs per unit", "Clear unit and pack prices"],
            ["Promotions", "Time-limited discounts", "Rules with start and end"],
          ],
        },
      },
      {
        heading: "Source of Truth",
        body: [
          "Most B2B businesses invoice from an ERP, so the ERP (or a dedicated pricing engine) should own price logic. Options: sync price lists and contract prices to the platform on a schedule; look prices up in real time; or a hybrid that syncs standard prices and looks up complex ones. Each has trade-offs in accuracy, speed and resilience. See [[/blogs/b2b-ecommerce-erp-integration|B2B ERP integration]].",
        ],
        table: {
          headers: ["Approach", "Strength", "Risk"],
          rows: [
            ["Scheduled sync", "Fast pages, resilient", "Prices stale between syncs"],
            ["Real-time lookup", "Always current", "Latency, ERP dependency"],
            ["Hybrid", "Balance", "More integration work"],
          ],
        },
      },
      {
        heading: "Displaying Prices",
        body: [
          "After login, show the buyer's price clearly and, where relevant, their saving against list. Show pack and unit price together when products are sold in packs. Show volume breaks as a small table with the current tier highlighted and a note about the next one. For guests, show list prices or explain how to get trade pricing. See [[/blogs/b2b-ecommerce-website-design|B2B website design]].",
        ],
        cta: {
          title: "Web prices not matching invoices?",
          description: "ZSpace connects B2B stores to ERP pricing so every buyer sees the price they'll be invoiced.",
        },
      },
      {
        heading: "Quantity Rules",
        body: [
          "Minimum order quantities and increments are part of pricing. Enforce them in the quantity input (stepping in increments, blocking values below the minimum) with clear messages explaining why. Shopify B2B supports quantity rules and volume pricing within catalogs ([[https://help.shopify.com/en/manual/b2b|Shopify Help Center]]).",
        ],
      },
      {
        heading: "Currency and Tax",
        body: [
          "B2B buyers in different markets may be invoiced in different currencies from separate price lists rather than converted prices. Tax is often shown exclusive and calculated at checkout, with exemptions or reverse-charge rules for eligible businesses. Make clear what's included. See [[/blogs/ecommerce-tax-integration|ecommerce tax integration]].",
        ],
      },
      {
        heading: "Exceptions: Quotes and Approvals",
        body: [
          "Not every price fits a rule. Offer quote requests for large volumes, projects and custom items, and let sales reps adjust prices within limits. Where buyers have spending limits, route orders above thresholds for approval. See [[/blogs/b2b-ecommerce-rfq|B2B RFQ]].",
        ],
      },
      {
        heading: "Worked Example: Contract Pricing With Breaks",
        body: [
          "An illustrative scenario: a distributor sells gloves by the box of 100. List price applies to guests. Trade accounts get a price list 15% below list. One key account has a contract price on its top 30 SKUs. Volume breaks apply at 10 and 50 boxes. The rule order is agreed with finance: contract price if one exists, otherwise the account's price list, then volume breaks applied to that base, never below a floor price. The store displays the resulting price and the break table for the buyer's account, and the same logic calculates the ERP invoice.",
        ],
      },
      {
        heading: "Common B2B Pricing Mistakes",
        body: [],
        checklist: [
          "Pricing logic duplicated differently in store and ERP",
          "Volume breaks shown but not applied in the cart",
          "Per-unit and per-pack prices confused",
          "Guests seeing no price and no explanation",
          "Price changes synced without notice to buyers",
          "No monitoring of web vs invoice differences",
        ],
      },
      {
        heading: "Testing Pricing",
        body: [],
        checklist: [
          "Test real accounts from each price list and contract type",
          "Check volume breaks at boundaries",
          "Check pack vs unit calculations",
          "Compare web order totals with ERP invoices",
          "Test currency and tax display by market",
          "Test behavior if the pricing source is unavailable",
        ],
        cta: {
          title: "Ready to get B2B pricing right online?",
          description: "Talk to ZSpace about [[/services/shopify-development|Shopify B2B pricing]], [[/services/website-development|ERP pricing integration]] and [[/services/ui-ux-design|pricing UX]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "B2B pricing online is a data and trust problem: one source of truth, clear display for each buyer, enforced quantity rules and a path for exceptions. For how pricing fits the wider B2B build, see [[/blogs/b2b-ecommerce-website-development|B2B ecommerce website development]].",
        ],
      },
    ],
  },

  // --------------------------------------------------------- 195 · B2B RFQ
  {
    slug: "b2b-ecommerce-rfq",
    title: "B2B Ecommerce RFQ: How to Design Request-for-Quote Workflows",
    seoTitle: "B2B Ecommerce RFQ: Design Request-for-Quote Workflows",
    excerpt:
      "How to design B2B request-for-quote workflows: when to quote, capturing requirements, sales review, quote documents, negotiation, expiry and conversion to orders.",
    category: "UI/UX",
    banner: "rfqflow",
    bannerAlt:
      "RFQ workflow: build request, submit RFQ, sales review, quote issued (highlighted), negotiate, accept and convert to order, with quote history and expiry kept in the buyer's account.",
    date: "2026-09-29",
    readingTime: "15 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development", "shopify-development"],
    relatedIndustrySlugs: ["manufacturing", "ecommerce"],
    faqs: [
      { q: "What is an RFQ in B2B ecommerce?", a: "A request for quote: a buyer asks for pricing on specific products, quantities or configurations, and the seller responds with a quote that can be accepted and converted to an order." },
      { q: "When should a B2B store offer RFQ?", a: "For large volumes, custom or configured products, project pricing, products without published prices, and buyers who need formal quotes for procurement." },
      { q: "What should an RFQ form capture?", a: "Products and quantities, required delivery date and location, specifications or attachments, the buyer's company and contact, and any notes or target price." },
      { q: "Can buyers request quotes from the cart?", a: "Yes. Converting a cart to a quote request is one of the most useful patterns, because buyers can use normal browsing and add-to-cart before asking for pricing." },
      { q: "How should quotes be sent?", a: "As a document and an online record the buyer can view, download, accept, request changes to or decline, with validity dates and terms." },
      { q: "How do quotes convert to orders?", a: "Accepting a quote should create an order or a checkout with quoted prices locked, respecting payment terms and approvals." },
      { q: "Should quotes expire?", a: "Usually yes, because prices, stock and costs change. Show the expiry date and allow buyers to request a renewal." },
      { q: "How does RFQ integrate with CRM and ERP?", a: "Quotes are often created in the CRM or ERP. Sync requests into the sales system, and sync quote status and prices back to the store." },
      { q: "Does Shopify support quotes?", a: "Shopify B2B supports draft orders that staff can prepare for customers, and apps add quote request workflows. Complex quoting may need custom development or CPQ integration." },
      { q: "How do I measure RFQ performance?", a: "Quote requests, time to quote, quote-to-order conversion, revision rate, value of quoted vs ordered and reasons for lost quotes." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A good B2B request-for-quote workflow lets buyers request pricing easily, gives sales what they need to respond quickly and turns accepted quotes into orders without re-keying. Offer RFQ where standard pricing doesn't fit, allow quote requests from product pages and the cart, capture quantities, dates, locations and specs, route requests to the right sales rep, send quotes as trackable online records with expiry dates, support revisions and convert acceptance into an order with locked prices. Measure time to quote and quote-to-order conversion.",
        ],
      },
      {
        heading: "When Quotes Make Sense",
        body: [],
        table: {
          headers: ["Situation", "Why quote"],
          rows: [
            ["Large volumes", "Pricing beyond standard breaks"],
            ["Custom or configured products", "Price depends on specs"],
            ["Projects", "Many items, staged delivery"],
            ["No published price", "Price depends on customer or market"],
            ["Procurement requirement", "Buyer needs a formal quote document"],
          ],
        },
      },
      {
        heading: "The RFQ Workflow",
        body: [
          "The flow above shows the full path: build request, submit, sales review, quote issued, negotiate, accept and convert to order, with quote history and expiry kept in the buyer's account. Each step should have a clear state visible to both buyer and seller, so no quote is lost in an inbox.",
        ],
        table: {
          headers: ["State", "Buyer sees", "Seller action"],
          rows: [
            ["Draft", "Editable request", "None"],
            ["Submitted", "Awaiting quote, expected response time", "Assign and review"],
            ["Quoted", "Quote with prices, terms and expiry", "Follow up"],
            ["Revision requested", "Comments and changes", "Revise and resend"],
            ["Accepted", "Order created", "Fulfil"],
            ["Expired / declined", "Option to request again", "Record reason"],
          ],
        },
      },
      {
        heading: "Capturing the Request",
        body: [
          "Let buyers request quotes from product pages (for a single item) and from the cart (for many items). Capture quantities, required delivery date and location, specifications or drawings as attachments, target price if they have one and notes. Pre-fill company and contact from the account. Keep the form short for simple requests.",
        ],
        cta: {
          title: "Quote requests getting lost in email?",
          description: "ZSpace designs and builds RFQ workflows that connect buyers, sales teams and your order systems.",
        },
      },
      {
        heading: "Sales Review and Response",
        body: [
          "Route requests to the right rep or team by account, region or product. Give reps the buyer's history, account pricing and stock. Set a target response time and show buyers an expected time. Many businesses create quotes in the CRM or ERP; sync requests there and sync the quote back. See [[/blogs/b2b-ecommerce-crm-integration|B2B CRM integration]].",
        ],
      },
      {
        heading: "The Quote Itself",
        body: [],
        checklist: [
          "Line items with quantities, prices and totals",
          "Delivery dates or lead times",
          "Payment terms and tax treatment",
          "Validity or expiry date",
          "Reference number for procurement",
          "Accept, request changes and decline actions",
          "Downloadable document for approval processes",
        ],
      },
      {
        heading: "Negotiation and Revisions",
        body: [
          "Buyers often need changes: quantities, delivery dates, alternative products. Allow comments and revision requests on the online quote, keep version history and show what changed between versions.",
        ],
      },
      {
        heading: "Converting Quotes to Orders",
        body: [
          "Acceptance should create an order or a checkout with prices locked, respecting approval rules and payment terms. If the buyer's organization requires internal approval, route it before conversion. Avoid making buyers rebuild the cart. On Shopify, draft orders are one way to prepare a quoted order for a B2B customer ([[https://help.shopify.com/en/manual/b2b|Shopify Help Center]]).",
        ],
      },
      {
        heading: "Worked Example: Cart-to-Quote",
        body: [
          "An illustrative scenario: a buyer planning a fit-out adds 60 lines to the cart, then chooses “Request a quote”. The request captures the delivery site, a required date and a note about phased delivery. It creates an opportunity in the CRM for the account manager, who prices it using contract terms and a project discount, and sends the quote back to the portal with a 30-day validity. The buyer's colleague asks to swap two items; the rep revises and resends. The approver accepts, and the quote converts into an order with locked prices and the agreed delivery schedule. See [[/blogs/b2b-ecommerce-crm-integration|B2B CRM integration]] and [[/blogs/b2b-ecommerce-customer-portal|B2B customer portal]].",
        ],
      },
      {
        heading: "Common RFQ Mistakes",
        body: [],
        checklist: [
          "Quote requests arriving as unstructured emails",
          "No expected response time shown to buyers",
          "Quotes that must be re-keyed as orders",
          "No version history for revisions",
          "Quotes without expiry dates",
          "Offering RFQ where a published price would do",
        ],
      },
      {
        heading: "RFQ and Configured Products",
        body: [
          "For configurable products (dimensions, finishes, options), combine a configurator with RFQ: the configurator captures a valid specification and the quote prices it. Where rules are well defined, configure-price-quote tools can generate prices automatically. See [[/blogs/b2b-ecommerce-website-design|B2B ecommerce website design]] and [[/blogs/b2b-ecommerce-product-catalog|B2B product catalog]].",
        ],
      },
      {
        heading: "Measuring RFQ",
        body: [],
        table: {
          headers: ["Metric", "Why"],
          rows: [
            ["Time to quote", "Speed often decides the deal"],
            ["Quote-to-order rate", "Commercial effectiveness"],
            ["Revision count", "Clarity of requests and quotes"],
            ["Lost reasons", "Price, lead time, product fit"],
            ["Share of revenue via quotes", "Where self-serve pricing could grow"],
          ],
        },
        cta: {
          title: "Ready to build a quoting workflow buyers use?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|RFQ UX]], [[/services/website-development|quote and CRM integration]] and [[/services/shopify-development|Shopify B2B quoting]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "RFQ is where online and sales-led buying meet. Make requesting easy, responding fast and converting seamless, with clear states and systems integration. For pricing that avoids unnecessary quotes, see [[/blogs/b2b-ecommerce-pricing|B2B ecommerce pricing]].",
        ],
      },
    ],
  },

  // -------------------------------------------------- 196 · B2B CUSTOMER PORTAL
  {
    slug: "b2b-ecommerce-customer-portal",
    title: "B2B Ecommerce Customer Portal: Features and UX Best Practices",
    seoTitle: "B2B Customer Portal: Features and UX Best Practices",
    excerpt:
      "How to design a B2B customer portal: orders and tracking, invoices and payments, users and roles, locations, quotes, approvals, lists, documents and support.",
    category: "UI/UX",
    banner: "b2bportal",
    bannerAlt:
      "B2B customer portal mock-up: a sidebar with dashboard, orders, quotes, invoices, reorder lists, users and roles, addresses and documents; a company header with credit limit and balance; tiles for open orders, orders awaiting approval, quotes expiring and invoices due; recent orders with track, reorder and invoice download; quick order by SKU, request a quote, and account manager support.",
    date: "2026-09-29",
    readingTime: "15 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development", "shopify-development"],
    relatedIndustrySlugs: ["manufacturing", "ecommerce"],
    faqs: [
      { q: "What is a B2B customer portal?", a: "The logged-in area of a B2B store or a separate portal where business customers manage orders, invoices, payments, users, locations, quotes, lists and documents." },
      { q: "What features should a B2B portal have?", a: "Order history and tracking, reorder, returns, invoices and statements, payment on terms, users and roles, locations and addresses, approvals, quotes, saved lists, documents and support requests." },
      { q: "Why do B2B customers need a portal?", a: "Self-service reduces calls and emails to sales and finance, gives customers 24/7 access to information and speeds up ordering and payment." },
      { q: "Where does portal data come from?", a: "Often the ERP (invoices, statements, credit, order status) and the ecommerce platform (web orders, lists, users), sometimes CRM for quotes and cases." },
      { q: "How should users and roles work?", a: "Company admins invite users, assign roles (buyer, approver, finance, admin) and restrict them to locations or spending limits." },
      { q: "Should offline orders appear in the portal?", a: "Yes, ideally. Customers want one history regardless of channel, so sync orders placed by phone, email or EDI from the ERP." },
      { q: "How should invoices be presented?", a: "As a searchable list with status (open, overdue, paid), due dates, downloadable PDFs and the ability to pay online where supported." },
      { q: "Does Shopify have a B2B customer portal?", a: "Shopify B2B customer accounts let buyers view orders, manage locations and addresses and pay invoices on terms, with roles and permissions. ERP-held data such as statements may require integration." },
      { q: "What makes a B2B portal easy to use?", a: "A dashboard showing what needs attention (open orders, overdue invoices, pending approvals), searchable tables, filters, exports and consistent navigation." },
      { q: "How do I measure portal success?", a: "Share of orders placed online, portal logins, self-service invoice payments and downloads, and reduction in routine support contacts." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A B2B customer portal gives business customers self-service over their relationship with you. Include orders with tracking, reorder and returns; invoices, statements and payment on terms; users, roles, locations and approval rules; and quotes, saved lists, documents and support requests. Pull data from the ERP and platform so customers see one history across channels, design a dashboard that shows what needs attention, use searchable tables with exports, and measure adoption through online order share and reduced routine contacts.",
        ],
      },
      {
        heading: "Why the Portal Matters",
        body: [
          "For many B2B customers, the portal is the product experience: they use it to reorder, check deliveries, download invoices and manage colleagues. Every task they can complete themselves is a call or email your team doesn't handle. The mock-up above shows a typical portal: navigation for orders, quotes, invoices, lists, users, addresses and documents, and a dashboard of what needs attention. For the wider site design, see [[/blogs/b2b-ecommerce-website-design|B2B ecommerce website design]].",
        ],
      },
      {
        heading: "Feature Map",
        body: [],
        table: {
          headers: ["Area", "Features", "Typical data source"],
          rows: [
            ["Orders", "History, status, tracking, returns, reorder", "Platform + ERP"],
            ["Finance", "Invoices, statements, payments, credit limit", "ERP"],
            ["Account", "Users, roles, locations, addresses, approvals", "Platform"],
            ["Quotes", "Requests, quotes, acceptance", "Platform or CRM"],
            ["Lists", "Saved lists, favourites", "Platform"],
            ["Documents", "Certificates, datasheets, contracts", "PIM, DMS or ERP"],
            ["Support", "Cases, messages", "Helpdesk or CRM"],
          ],
        },
      },
      {
        heading: "The Dashboard",
        body: [
          "Start the portal with what needs attention: orders in transit, deliveries expected, overdue invoices, orders awaiting approval, quotes awaiting response. Provide quick actions such as reorder, quick order and pay invoice. Avoid dashboards filled with vanity charts.",
        ],
      },
      {
        heading: "Orders Across Channels",
        body: [
          "Customers don't distinguish between web, phone, email or EDI orders. Show all of them in one history by syncing from the ERP, with status, tracking, delivery documents and reorder. Let customers search by PO number, date, product and location. See [[/blogs/b2b-ecommerce-reordering|B2B reordering]].",
        ],
        cta: {
          title: "Customers still calling for invoices and order status?",
          description: "ZSpace designs and builds B2B portals that connect your ERP, platform and support tools.",
        },
      },
      {
        heading: "Finance: Invoices, Statements and Payments",
        body: [
          "Finance users want open and overdue invoices, statements, credit limits and a way to pay. Present invoices as a filterable table with status and due dates, downloadable PDFs and online payment where you support it. Shopify B2B, for example, supports payment terms and lets buyers pay orders on terms ([[https://help.shopify.com/en/manual/b2b|Shopify Help Center]]); statements and credit data usually come from the ERP.",
        ],
      },
      {
        heading: "Users, Roles and Locations",
        body: [
          "Let company admins manage users and assign roles and locations. Common roles: buyer (orders), approver (approves over limits), finance (invoices and payments), admin (users and settings). Restrict buyers to locations and spending limits where needed. See [[/blogs/b2b-ecommerce-ux|B2B ecommerce UX]].",
          "See [[/blogs/b2b-ecommerce-account-management|B2B account management]] for the underlying model.",
        ],
        table: {
          headers: ["Role", "Permissions"],
          rows: [
            ["Buyer", "Browse, order, view own orders"],
            ["Approver", "Approve or reject orders, view team orders"],
            ["Finance", "View and pay invoices, statements"],
            ["Admin", "Manage users, locations, settings"],
          ],
        },
      },
      {
        heading: "Quotes, Lists and Documents",
        body: [
          "Quotes need a list with status and expiry, and actions to accept or request changes. Saved lists speed up recurring orders. Documents such as certificates of conformity or safety data sheets should be searchable by product and order. See [[/blogs/b2b-ecommerce-rfq|B2B RFQ]].",
        ],
      },
      {
        heading: "Portal Design Principles",
        body: [],
        checklist: [
          "Searchable, filterable tables with exports",
          "Consistent navigation across portal sections",
          "Status labels that match your internal language",
          "Mobile-friendly for checking status on site or on the road",
          "Accessible tables and forms",
          "Clear data freshness where data syncs periodically",
        ],
      },
      {
        heading: "Worked Example: Rolling Out a Portal",
        body: [
          "An illustrative scenario: a manufacturer's customers call or email for invoice copies, order status and certificates. Phase one launches a portal with order history (including offline orders from the ERP), tracking and invoice downloads. Phase two adds user management and reorder. Phase three adds quotes and document search. Account managers invite key accounts and walk them through the first login. The team tracks portal logins, invoice downloads and the fall in routine contacts to customer service.",
        ],
      },
      {
        heading: "Common Portal Mistakes",
        body: [],
        checklist: [
          "Only web orders shown in history",
          "Invoice data out of date with no freshness indicator",
          "Single login shared across a company",
          "Tables without search, filters or exports",
          "No mobile support for checking status",
          "Launching without onboarding customers",
        ],
      },
      {
        heading: "Measuring Portal Success",
        body: [],
        table: {
          headers: ["Metric", "What it shows"],
          rows: [
            ["Online share of orders", "Adoption for ordering"],
            ["Active users per customer", "Depth of adoption"],
            ["Invoice downloads and online payments", "Finance self-service"],
            ["Routine support contacts", "Reduction in manual work"],
            ["Time to reorder", "Efficiency"],
          ],
        },
        cta: {
          title: "Ready to build a B2B portal customers rely on?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|portal UX]], [[/services/website-development|portal and ERP integration]] and [[/services/shopify-development|Shopify B2B accounts]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A B2B portal pays back through self-service: one order history across channels, finance data customers can act on, account control and fast reordering. Build it on reliable integrations and design it around tasks. For integration details, see [[/blogs/b2b-ecommerce-erp-integration|B2B ERP integration]].",
          "For related guides, see [[/blogs/ecommerce-customer-account-ux|consumer customer account UX]].",
        ],
      },
    ],
  },
];
