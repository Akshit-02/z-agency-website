import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch ten, part seven: B2B sales rep portals,
 * punchout catalogs (cXML and SAP OCI, checked against cxml.org and SAP
 * OCI documentation) and B2B commerce platform architecture. Merged into
 * `posts` in blog-data.ts.
 */

export const commercePosts80: BlogPost[] = [
  // ---------------------------------------- 498 · SALES REP PORTAL
  {
    slug: "b2b-sales-rep-portal",
    title: "B2B Sales Rep Portal: How to Equip Sales Teams to Order for Customers",
    seoTitle: "B2B Sales Rep Portal: Accounts, Quotes, Orders and CRM",
    excerpt:
      "What a B2B sales rep portal needs: account access, customer pricing, ordering on behalf, quotes, inventory, history, CRM integration, limits and audit.",
    category: "Web Development",
    banner: "salesrepportal",
    bannerAlt:
      "B2B sales rep portal in four columns: accounts (my customers, account health, contacts, terms), catalog (customer prices, stock, specs, alternatives), orders (order for, quotes, approvals, history, highlighted) and CRM (activities, opportunities, sync, notes), noting that reps act on behalf of customers and every action is logged.",
    date: "2026-10-01",
    readingTime: "12 min read",
    relatedServiceSlugs: ["website-development", "ai-automation", "ui-ux-design"],
    relatedIndustrySlugs: ["b2b-enterprise", "manufacturing", "ecommerce"],
    faqs: [
      { q: "What is a B2B sales rep portal?", a: "A tool for a supplier's sales representatives to manage their customer accounts online: viewing account details, browsing catalogs at customer prices, creating orders and quotes on customers' behalf, checking stock and seeing history." },
      { q: "Why do sales reps need a portal if customers can order online?", a: "Many B2B customers still order through reps, especially for complex or negotiated orders. A portal lets reps use the same catalog, pricing and order flow as customers, instead of separate spreadsheets and emails." },
      { q: "What is ordering on behalf of a customer?", a: "A rep selects a customer account and builds an order using that customer's catalog, prices, terms and addresses, which is then submitted, sent for the customer's approval or saved as a quote." },
      { q: "How should quotes work?", a: "Reps create quotes with customer prices and, within their authority, discounts, send them to the customer, track status and convert accepted quotes into orders. See RFQ workflows for request-led quoting." },
      { q: "How does the portal integrate with CRM?", a: "It reads account and contact data from the CRM and writes back activities, quotes and orders, so the CRM shows the full relationship. Opportunities may link to quotes." },
      { q: "Can reps see inventory?", a: "Yes, with availability by warehouse and lead times, so they can make realistic promises to customers." },
      { q: "What permissions do reps need?", a: "Access only to their assigned accounts, limits on discounts and price overrides, and the ability to submit orders or send them for customer approval depending on policy." },
      { q: "How do we prevent reps and customers working against each other?", a: "Use one cart and order system, show customers orders their rep placed, and credit reps for online orders from their accounts so incentives align." },
      { q: "Do reps need mobile access?", a: "Field reps often do. A responsive or app-based portal with offline catalog browsing helps when visiting customers." },
      { q: "What should be audited?", a: "Orders and quotes created on behalf of customers, price overrides and discounts, and changes to account data, with the rep's identity recorded." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A B2B sales rep portal lets sales representatives work inside the same commerce system as customers. Reps select an assigned account and see its catalog, prices, terms, addresses, stock and history; build orders or quotes on the customer's behalf within discount limits; send them for customer approval or submit them; and see everything synced with the CRM. Restrict access to assigned accounts, log every action as 'placed by rep for customer', and align incentives so online and rep-assisted orders both count.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "The customer-facing portal is covered in [[/blogs/b2b-ecommerce-customer-portal|B2B customer portal]], quoting in [[/blogs/b2b-ecommerce-rfq|B2B RFQ workflows]] and CRM in [[/blogs/b2b-ecommerce-crm-integration|B2B CRM integration]]. Accounts and approvals are covered in [[/blogs/b2b-ecommerce-account-management|account management]] and [[/blogs/b2b-approval-workflows|approval workflows]].",
        ],
      },
      {
        heading: "Core Capabilities",
        body: [],
        table: {
          headers: ["Capability", "What reps can do"],
          rows: [
            ["Account list", "See assigned customers with recent activity and open items"],
            ["Act as account", "Switch into a customer context with its catalog, prices and terms"],
            ["Catalog and pricing", "Browse at customer prices; check alternatives and specs"],
            ["Inventory", "See stock by warehouse and lead times"],
            ["Orders", "Create, submit or send for customer approval"],
            ["Quotes", "Create, send, track and convert to orders"],
            ["History", "View orders, invoices, returns and quotes"],
            ["CRM", "See contacts and activities; log notes"],
          ],
        },
      },
      {
        heading: "Ordering on Behalf",
        body: [
          "When a rep acts for a customer, every price, catalog restriction, address and payment term should be the customer's. Record the order as placed by the rep for the customer, show it in the customer's portal and notify the customer. Depending on policy, orders can be submitted directly or sent to the customer to confirm or approve.",
        ],
      },
      {
        heading: "Quotes",
        body: [
          "Quotes let reps propose orders with negotiated terms. Use the customer's prices as the base, apply discounts within the rep's authority (escalating above it), set expiry dates, send quotes with a link the customer can accept online, and convert accepted quotes to orders with prices locked. See [[/blogs/b2b-ecommerce-rfq|RFQ workflows]].",
        ],
        cta: {
          title: "Are your reps still quoting from spreadsheets?",
          description: "ZSpace can build rep tools on top of your B2B store, using the same catalogs, prices and orders, connected to your CRM.",
        },
      },
      {
        heading: "Customer History and Insight",
        body: [
          "Reps need context before calls and visits: recent orders, frequently bought items, lapsed products, open quotes, overdue invoices and support issues. Present it on the account page rather than requiring reports.",
        ],
      },
      {
        heading: "CRM Integration",
        body: [
          "The CRM usually owns accounts, contacts, opportunities and activities; the commerce system owns catalogs, prices, carts, quotes and orders. Sync both ways: account data into the portal, and quotes, orders and activities back to the CRM. Link quotes to opportunities where the sales process uses them. See [[/blogs/b2b-ecommerce-crm-integration|B2B CRM integration]] and [[/blogs/ecommerce-crm-integration|CRM integration]].",
        ],
      },
      {
        heading: "Permissions and Controls",
        body: [],
        checklist: [
          "Access limited to assigned accounts, with manager overrides",
          "Discount and price override limits by role",
          "Approval for discounts above authority",
          "Clear indication when acting as a customer",
          "Audit log of actions taken on behalf of customers",
        ],
      },
      {
        heading: "Mobile and Field Use",
        body: [
          "Field reps work in customer sites, warehouses and vehicles. Make the portal responsive or provide an app, with fast customer lookup, catalog browsing that tolerates poor connectivity and quick order capture.",
        ],
      },
      {
        heading: "Aligning Incentives",
        body: [
          "If reps are paid only for orders they place, they may discourage customers from ordering online. Credit reps for all orders from their accounts, regardless of channel, so the portal and the online store work together.",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a food service distributor's reps take orders by phone and re-key them, and prices sometimes differ from what customers see online. The team gives reps a portal that switches into each customer's account with the same catalog, prices and order flow, records orders as placed by the rep, and logs activities to the CRM. Customers can see rep-placed orders in their own portal.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Separate pricing tools for reps",
          "Orders placed by reps invisible to customers",
          "No discount limits",
          "CRM and commerce data out of sync",
          "Incentives that compete with online ordering",
          "No audit of actions on behalf of customers",
        ],
        cta: {
          title: "Ready to connect your sales team to your B2B store?",
          description: "Talk to ZSpace about [[/services/website-development|sales rep portal development]], [[/services/ai-automation|CRM and quote automation]] and [[/services/ui-ux-design|B2B tool design]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Sales rep portals work when reps use the same catalog, prices and orders as customers, act within clear limits, stay in sync with the CRM and are rewarded for every order their accounts place. Related: [[/blogs/b2b-commerce-platform-architecture|B2B platform architecture]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 499 · PUNCHOUT CATALOGS
  {
    slug: "b2b-punchout-catalogs",
    title: "B2B Punchout Catalogs: How Punchout Works With Procurement Systems",
    seoTitle: "B2B Punchout Catalogs: cXML, OCI and Integration Architecture",
    excerpt:
      "How B2B punchout catalogs work: procurement systems, cXML and OCI, authentication, the shopping session, cart transfer, purchase orders and integration architecture.",
    category: "Web Development",
    banner: "punchoutflow",
    bannerAlt:
      "Punchout flow: buyer in procurement system, setup request, supplier site session (highlighted), build cart, cart returned and purchase order via order request, noting that the purchase order, not the punchout cart, creates the sales order.",
    date: "2026-10-01",
    readingTime: "15 min read",
    relatedServiceSlugs: ["website-development", "ai-automation", "shopify-development"],
    relatedIndustrySlugs: ["b2b-enterprise", "manufacturing", "professional-services"],
    faqs: [
      { q: "What is a punchout catalog?", a: "A way for a buyer working inside their organization's procurement system to open a supplier's online store, shop with their negotiated catalog and prices, and send the cart back into the procurement system for approval and purchase order creation." },
      { q: "Which procurement systems use punchout?", a: "Many eProcurement and ERP purchasing systems support punchout, including platforms such as SAP Ariba, Coupa and SAP's procurement products. Each buyer's setup and requirements vary." },
      { q: "What standards are used for punchout?", a: "The main ones are cXML (commerce XML), used by many procurement platforms, and SAP's Open Catalog Interface (OCI). Some systems also use custom or vendor-specific variations." },
      { q: "How does a cXML punchout session work?", a: "The procurement system sends a PunchOutSetupRequest with credentials and a return URL; the supplier responds with a start URL; the buyer shops; the supplier posts a PunchOutOrderMessage with the cart back to the browser form post URL; later, an approved order arrives as an OrderRequest." },
      { q: "How does OCI punchout work?", a: "The procurement system opens the supplier site with parameters including a HOOK_URL. When the buyer finishes, the supplier posts the cart line items to the HOOK_URL as form fields. OCI covers the catalog and cart roundtrip; orders are sent separately." },
      { q: "Does the punchout cart create an order?", a: "No. The cart goes back to the procurement system for approval. The supplier receives a purchase order later (for example as a cXML OrderRequest, EDI or email) and creates the sales order from that." },
      { q: "How is the buyer authenticated?", a: "Through shared credentials in the setup request (such as identity and shared secret in cXML) or parameters agreed for OCI, mapped to a customer account on the supplier side, often without a separate login." },
      { q: "What product data must the cart include?", a: "Supplier part number, description, quantity, unit of measure, unit price, currency and classification codes such as UNSPSC where the buyer requires them, plus any agreed custom fields." },
      { q: "What are common punchout problems?", a: "Unit of measure mismatches, missing classification codes, price differences between cart and PO, session timeouts, browser issues with form posts, and orders that do not match the original cart." },
      { q: "How long does punchout integration take?", a: "It depends on the platform, each buyer's procurement setup and testing. Each new buyer typically needs configuration and testing even after the first integration is built." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Punchout lets a buyer inside a procurement system shop on a supplier's site and return the cart to procurement for approval. With cXML, the procurement system sends a PunchOutSetupRequest; the supplier returns a start URL; the buyer shops with their account's catalog and prices; the supplier posts a PunchOutOrderMessage back to the return URL; and the approved order later arrives as an OrderRequest. SAP OCI follows a similar roundtrip using a HOOK_URL. The purchase order, not the returned cart, creates the sales order.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Punchout is one channel in a B2B platform; see [[/blogs/b2b-commerce-platform-architecture|B2B platform architecture]]. Catalog entitlements are covered in [[/blogs/b2b-customer-specific-catalogs|customer-specific catalogs]] and general integration patterns in [[/blogs/ecommerce-api-integration|API integration]] and [[/blogs/b2b-ecommerce-erp-integration|B2B ERP integration]].",
        ],
      },
      {
        heading: "Why Buyers Use Punchout",
        body: [
          "Large organizations control purchasing through procurement systems: approved suppliers, budgets, approvals, purchase orders and invoice matching. Punchout gives their buyers the supplier's live catalog, search and configuration while keeping purchasing inside those controls. For suppliers, it is often a requirement to sell to such customers.",
        ],
      },
      {
        heading: "cXML Punchout Flow",
        body: [],
        table: {
          headers: ["Step", "Document or action", "Notes"],
          rows: [
            ["1. Setup", "PunchOutSetupRequest from procurement", "Credentials, buyer identity, BrowserFormPost URL, optional user details"],
            ["2. Response", "PunchOutSetupResponse with StartPage URL", "Supplier authenticates and creates a session"],
            ["3. Shop", "Buyer browses supplier site", "Customer catalog, prices and rules apply"],
            ["4. Return cart", "PunchOutOrderMessage posted to BrowserFormPost URL", "Sent as a hidden form field via the buyer's browser"],
            ["5. Approve", "Inside procurement system", "Budgets, approvals, PO creation"],
            ["6. Order", "OrderRequest to supplier", "Creates the sales order; supplier acknowledges"],
          ],
        },
        callout: {
          type: "note",
          text: "Field names and versions follow the cXML specification published at cxml.org; each procurement platform also documents its own requirements. Test against each buyer's configuration.",
        },
      },
      {
        heading: "SAP OCI Roundtrip",
        body: [
          "With SAP's Open Catalog Interface, the procurement system opens the supplier catalog URL with parameters including a HOOK_URL (the return address) and agreed login parameters. When the buyer transfers the cart, the supplier's site posts line item fields (such as description, quantity, unit, price, currency and supplier part number) to the HOOK_URL. OCI covers the catalog and cart roundtrip only; the purchase order is transmitted separately.",
        ],
      },
      {
        heading: "Authentication and Session",
        body: [
          "The setup request carries credentials (in cXML, identities and a shared secret) that the supplier validates and maps to a customer account and, where provided, a user. The buyer usually does not log in separately. Sessions should apply the account's catalog, prices and rules, restrict actions that do not belong in punchout (such as direct checkout or account changes), and handle timeouts gracefully.",
        ],
        cta: {
          title: "A key customer asking for punchout?",
          description: "ZSpace can build cXML or OCI punchout on your B2B platform, map it to customer catalogs and prices and support testing with each buyer.",
        },
      },
      {
        heading: "The Shopping Experience",
        body: [],
        checklist: [
          "Customer-specific catalog and prices from the start",
          "Search, filters and configuration as on the normal site",
          "Cart shows 'Return to procurement' instead of checkout",
          "Clear indication of the session and buyer organization",
          "Support for edit and inspect operations where the buyer's system uses them",
        ],
      },
      {
        heading: "Cart Transfer Data",
        body: [],
        table: {
          headers: ["Field", "Why it matters"],
          rows: [
            ["Supplier part number", "Identifies the item on the PO"],
            ["Description", "Shown to approvers"],
            ["Quantity and unit of measure", "Must match buyer's units (UOM mapping)"],
            ["Unit price and currency", "Becomes the PO price"],
            ["Classification (e.g. UNSPSC)", "Required by many buyers for spend analysis"],
            ["Lead time or delivery date", "Optional, for planning"],
            ["Custom fields", "Agreed per buyer"],
          ],
        },
      },
      {
        heading: "Order Processing",
        body: [
          "The approved purchase order arrives as a cXML OrderRequest, EDI message or another agreed format. Validate it against the original cart and current prices, create the sales order in the commerce platform or ERP, send an acknowledgement and handle mismatches (price changes, quantity changes) according to agreed rules. Later documents such as ship notices and invoices may also be exchanged electronically.",
        ],
      },
      {
        heading: "Integration Architecture",
        body: [
          "A punchout layer sits between procurement systems and the commerce platform: an endpoint for setup requests, credential and account mapping, session creation in the storefront, cart serialization to cXML or OCI fields, and an order intake endpoint that turns OrderRequests into sales orders. Some suppliers build it themselves; others use specialist punchout connectors. Log every message for troubleshooting.",
        ],
      },
      {
        heading: "Testing and Onboarding",
        body: [],
        checklist: [
          "Test each buyer's configuration end to end",
          "Validate UOM, classification and custom field mapping",
          "Test edit and inspect sessions where used",
          "Compare PO prices with cart prices",
          "Agree support contacts and escalation",
          "Document each buyer's setup",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a laboratory supplier wins a contract that requires cXML punchout. The first integration works, but the buyer rejects carts because units of measure and UNSPSC codes are missing. The team adds UOM mapping and classification codes to product data, tests the full cycle including OrderRequest intake with the buyer's procurement team, and documents the configuration so the next customer can be onboarded faster.",
        ],
      },
      {
        heading: "Implementation Steps",
        body: [],
        checklist: [
          "Confirm the buyer's protocol (cXML or OCI) and requirements",
          "Map credentials to customer accounts and catalogs",
          "Build setup, session and cart return",
          "Add UOM, classification and custom fields",
          "Build order intake and acknowledgement",
          "Test end to end with the buyer and document",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Creating orders from the punchout cart instead of the PO",
          "Missing UOM or classification mappings",
          "Showing list prices instead of contract prices",
          "Allowing normal checkout during a punchout session",
          "No message logging",
          "Assuming every buyer's cXML setup is identical",
        ],
        cta: {
          title: "Ready to support procurement-led customers?",
          description: "Talk to ZSpace about [[/services/website-development|punchout and B2B integration]], [[/services/ai-automation|order intake automation]] and [[/services/shopify-development|B2B commerce builds]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Punchout connects a supplier's catalog to buyers' procurement controls: authenticate the session, apply the customer's catalog, return a well-formed cart and create orders from the purchase order. Related: [[/blogs/b2b-commerce-platform-architecture|B2B platform architecture]] and [[/blogs/ecommerce-api-integration|API integration]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 500 · B2B PLATFORM ARCHITECTURE
  {
    slug: "b2b-commerce-platform-architecture",
    title: "B2B Commerce Platform Architecture: How the Pieces Fit Together",
    seoTitle: "B2B Commerce Platform Architecture: Systems, APIs and Identity",
    excerpt:
      "How to architect a B2B commerce platform: storefront, accounts, catalogs, pricing, quotes, approvals, ERP, CRM, OMS, payments, search, APIs, identity and channels.",
    category: "Web Development",
    banner: "b2bplatformarch",
    bannerAlt:
      "B2B commerce platform architecture in four columns: experience (buyer storefront, rep portal, punchout, APIs and EDI), commerce services (accounts, catalogs and pricing, quotes and approvals, orders, highlighted), systems (ERP, CRM, OMS or WMS, payments and credit) and platform (identity and SSO, search, events, monitoring), noting that entitlements are resolved in one place.",
    date: "2026-10-01",
    readingTime: "15 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "ai-automation"],
    relatedIndustrySlugs: ["b2b-enterprise", "manufacturing", "logistics-supply-chain"],
    faqs: [
      { q: "What is B2B commerce platform architecture?", a: "The design of the systems and integrations behind B2B online selling: buyer-facing channels, commerce services for accounts, catalogs, pricing, quotes, approvals and orders, back-office systems such as ERP and CRM, and shared services such as identity, search and events." },
      { q: "Is there one best B2B platform?", a: "No. The right choice depends on catalog complexity, pricing rules, ERP, channels (storefront, reps, punchout, EDI), order volume, team skills and budget. Many architectures combine a commerce platform with custom services." },
      { q: "What makes B2B architecture different from B2C?", a: "Account hierarchies, customer-specific catalogs and prices, quotes and approvals, payment terms and credit, multiple ordering channels and deep ERP dependence." },
      { q: "Where should pricing logic live?", a: "In one place that every channel uses: the commerce platform's B2B pricing, a pricing service or the ERP, depending on complexity and performance needs. Avoid separate pricing in each channel." },
      { q: "How should the ERP integrate?", a: "The ERP usually owns customers' commercial terms, item master, inventory, orders after submission and invoices. Integrate by events and APIs, with clear ownership and reconciliation." },
      { q: "What channels does a B2B platform serve?", a: "Typically a buyer storefront and portal, a sales rep portal, punchout for procurement customers, EDI or APIs for large accounts, and sometimes marketplaces." },
      { q: "How does identity work in B2B?", a: "Users belong to customer organizations with roles. Large customers may use SSO from their identity provider. Supplier staff and reps need separate roles and audited access to customer accounts." },
      { q: "Should B2B commerce be headless?", a: "Headless helps when several channels (portal, rep tools, apps, punchout) need the same commerce services, or when the frontend needs unusual workflows. It adds engineering responsibility." },
      { q: "What about search in B2B?", a: "Search must respect customer entitlements, handle part numbers and technical attributes, and show customer prices, which affects how indexes are built." },
      { q: "How do we plan a B2B platform project?", a: "Map customers' buying workflows and channels, define systems of record, choose platform and services, phase delivery by channel and customer group, and test with real accounts." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A B2B commerce platform combines buyer-facing channels (storefront and portal, rep portal, punchout, APIs and EDI) with commerce services for accounts, catalogs, pricing, quotes, approvals and orders, back-office systems (ERP, CRM, OMS or WMS, payments and credit) and shared services (identity, search, events, monitoring). Resolve entitlements (who can see and buy what, at which price) in one place, give each data type one owner, connect systems by APIs and events, and choose platform and custom components by fit rather than defaulting to one vendor.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "The B2B build guide is [[/blogs/b2b-ecommerce-website-development|B2B ecommerce development]]. Deep dives: [[/blogs/b2b-ecommerce-account-management|accounts]], [[/blogs/b2b-customer-specific-catalogs|customer catalogs]], [[/blogs/b2b-approval-workflows|approvals]], [[/blogs/b2b-sales-rep-portal|rep portals]] and [[/blogs/b2b-punchout-catalogs|punchout]]. Integration guides include [[/blogs/b2b-ecommerce-erp-integration|ERP]], [[/blogs/b2b-ecommerce-crm-integration|CRM]] and [[/blogs/ecommerce-api-integration|APIs]].",
        ],
      },
      {
        heading: "The Architecture at a Glance",
        body: [],
        diagram: {
          variant: "b2bplatformarch",
          alt: "B2B platform architecture diagram in four columns: experience channels, commerce services, back-office systems and platform services.",
          caption: "Every channel uses the same commerce services, so a buyer sees the same catalog, price and approval rules whether ordering online, through a rep or via punchout.",
        },
      },
      {
        heading: "Channels",
        body: [],
        table: {
          headers: ["Channel", "Users", "Key requirements"],
          rows: [
            ["Buyer storefront and portal", "Customer buyers, approvers, finance", "Entitlements, quick order, approvals, invoices"],
            ["Sales rep portal", "Supplier reps", "Act on behalf, quotes, CRM context"],
            ["Punchout", "Procurement-system buyers", "cXML or OCI, cart return, PO intake"],
            ["EDI and APIs", "Large customers' systems", "Orders, acknowledgements, ship notices, invoices"],
            ["Customer service tools", "Supplier staff", "Order lookup, changes, returns"],
          ],
        },
      },
      {
        heading: "Commerce Services",
        body: [
          "These services hold B2B logic: accounts and roles, catalogs and entitlements, pricing (contract, tiered, volume), quotes, approvals, carts and orders. They may come from the commerce platform's B2B features, custom services, or both. The essential rule is that every channel calls the same services.",
        ],
      },
      {
        heading: "Back-Office Systems",
        body: [],
        table: {
          headers: ["System", "Typical ownership"],
          rows: [
            ["ERP", "Item master, customer terms and credit, inventory, orders after submission, invoices"],
            ["CRM", "Accounts and contacts, opportunities, activities"],
            ["OMS / WMS", "Fulfilment, shipments, returns"],
            ["PIM", "Product content and technical attributes"],
            ["Payments and credit", "Card payments, invoices, credit checks"],
          ],
        },
      },
      {
        heading: "Identity",
        body: [
          "B2B identity has three groups: customer users (within organizations, with roles), supplier staff (service, reps, admins) and system clients (punchout, EDI, APIs). Support SSO for large customers, strong authentication for administrators, audited access for staff acting on customer accounts and scoped credentials for integrations.",
        ],
        cta: {
          title: "Planning or replacing a B2B commerce platform?",
          description: "ZSpace can map your channels, systems of record and B2B rules and recommend an architecture, without a default platform answer.",
        },
      },
      {
        heading: "Search",
        body: [
          "B2B search must handle part numbers, cross-references and technical attributes, and must respect entitlements and show customer prices. Either index per catalog or filter by entitlement at query time, and fetch customer prices at render. See [[/blogs/b2b-ecommerce-search|B2B search]].",
        ],
      },
      {
        heading: "APIs and Events",
        body: [
          "Expose commerce services through APIs for channels and customer integrations, and publish events (order submitted, quote accepted, invoice issued) for back-office systems. Use queues for reliability, version APIs used by customers and partners, and monitor every integration. See [[/blogs/ecommerce-event-driven-architecture|event-driven architecture]] and [[/blogs/ecommerce-microservices-architecture|microservices architecture]].",
        ],
      },
      {
        heading: "Platform Options",
        body: [],
        table: {
          headers: ["Approach", "Suits", "Trade-offs"],
          rows: [
            ["SaaS commerce platform with B2B features", "Standard B2B needs, smaller teams", "Fast; limits on complex pricing or workflows"],
            ["B2B-focused commerce suite", "Complex catalogs, pricing and channels", "Licence and implementation cost"],
            ["Headless platform plus custom services", "Unique workflows, many channels", "Engineering and operating responsibility"],
            ["ERP-native web store", "ERP-centric businesses with simple needs", "Limited buyer experience"],
          ],
        },
      },
      {
        heading: "Phasing",
        body: [],
        table: {
          headers: ["Phase", "Focus"],
          rows: [
            ["1", "Accounts, catalogs, pricing and storefront for a pilot customer group"],
            ["2", "Quick order, reordering, approvals and invoices"],
            ["3", "Rep portal and CRM integration"],
            ["4", "Punchout and EDI for procurement-led customers"],
            ["5", "Optimization, analytics and further channels"],
          ],
        },
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a manufacturer runs a B2B storefront, a separate quoting tool for reps and EDI for large customers, each with its own price calculations. Customers receive different prices depending on how they order. The team centralizes pricing and entitlements in one service that all three channels call, keeps the ERP as owner of contract terms, and publishes order events to the ERP and CRM. Price discrepancies between channels disappear.",
        ],
      },
      {
        heading: "Decision Framework",
        body: [],
        checklist: [
          "How complex are pricing and entitlements?",
          "Which channels must be supported in the next two years?",
          "What does the ERP own, and how good are its APIs?",
          "What engineering capacity exists to run custom services?",
          "Which platform B2B features fit without customization?",
          "What is the cost of getting pricing wrong?",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Separate pricing logic per channel",
          "Choosing a platform before mapping customer workflows",
          "ERP ownership unclear",
          "Search that ignores entitlements",
          "Unversioned APIs used by customers",
          "Launching every channel at once",
        ],
        cta: {
          title: "Ready to architect your B2B platform?",
          description: "Talk to ZSpace about [[/services/website-development|B2B platform engineering]], [[/services/shopify-development|Shopify B2B]] and [[/services/ai-automation|ERP and workflow automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "B2B platform architecture works when every channel shares the same commerce services and entitlements, systems of record are clear, integrations are event-driven and monitored, and delivery is phased. Related: [[/blogs/ecommerce-event-driven-architecture|event-driven architecture]], [[/blogs/ecommerce-microservices-architecture|microservices architecture]] and [[/blogs/b2b-punchout-catalogs|punchout]].",
        ],
      },
    ],
  },
];
