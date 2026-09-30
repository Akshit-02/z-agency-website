import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch three, part ten: B2B ecommerce — the
 * development hub, B2B UX (buying workflows), B2B vs B2C, and wholesale
 * websites. The existing `b2b-website-development` post is about lead-
 * generation sites and is linked, not duplicated. Merged into `posts` in
 * blog-data.ts.
 */

export const commercePosts19: BlogPost[] = [
  // ------------------------------------------ 147 · B2B ECOMMERCE DEVELOPMENT
  {
    slug: "b2b-ecommerce-website-development",
    title: "B2B Ecommerce Website Development: A Complete Guide",
    excerpt:
      "How to build a B2B ecommerce website: company accounts, customer pricing, catalogs, quick order, quotes, approvals, payment terms, ERP integration and platforms.",
    category: "Web Development",
    banner: "b2bflow",
    bannerAlt:
      "B2B ordering workflow: company account, catalog and pricing, quick order, approval, purchase order and payment terms, ERP sync, with reorders, invoices and statements available in the account.",
    date: "2026-09-29",
    readingTime: "18 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "ui-ux-design"],
    relatedIndustrySlugs: ["b2b-enterprise", "manufacturing"],
    faqs: [
      { q: "What is B2B ecommerce website development?", a: "Building an online ordering platform for business customers, with company accounts, customer-specific catalogs and pricing, bulk and repeat ordering, quotes, approvals, payment terms and integration with ERP, CRM and inventory systems." },
      { q: "How is B2B ecommerce different from B2C?", a: "Buyers are companies with several users and roles, prices are negotiated per account, orders are larger and repeat, payment is often on terms with purchase orders, and the store must integrate tightly with ERP and sales processes." },
      { q: "What features does a B2B ecommerce site need?", a: "Company accounts with users and permissions, customer-specific catalogs and pricing, quantity rules and price breaks, quick order and CSV upload, reorders, quote requests, approval workflows, purchase orders and net terms, invoices, and ERP integration." },
      { q: "Can Shopify handle B2B?", a: "Yes. Shopify's B2B features include companies and locations, catalogs, quantity rules and price breaks, net payment terms, vaulted cards, draft orders with PO numbers, quick order lists and reorders on all plans; Plus adds unlimited catalogs, deposits and more customization." },
      { q: "Should B2B and B2C share one store?", a: "It can work when the catalog overlaps and B2B customers are few. Separate storefronts suit different catalogs, branding or heavy B2B customization." },
      { q: "Why is ERP integration so important in B2B?", a: "Prices, customer accounts, credit limits, stock and invoices usually live in the ERP. Without integration, staff re-key orders and customers see wrong prices or stock." },
      { q: "Do B2B buyers still want to talk to sales?", a: "Many do for negotiations and complex purchases, while preferring self-service for routine reorders. Good B2B ecommerce supports both, with sales able to see and assist online accounts." },
      { q: "What is an RFQ workflow?", a: "A request-for-quote process where buyers submit what they need, sales prepares a quote, and the accepted quote becomes an order. See the B2B RFQ guide." },
      { q: "How long does a B2B ecommerce build take?", a: "It depends mostly on integrations, pricing complexity, catalog size and approval workflows rather than page design. ERP integration often sets the timeline." },
      { q: "Is this the same as a B2B website?", a: "No. A B2B website often generates leads for sales. B2B ecommerce lets business customers order online. See the B2B website development guide for lead-generation sites." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "B2B ecommerce website development means building online ordering for business customers, not a consumer store with bigger quantities. The essentials are company accounts with multiple users, roles and locations; customer-specific catalogs and pricing; quantity rules and price breaks; fast ordering through quick order, CSV upload and reorders; quote requests; approval workflows; purchase orders and payment terms; invoices and statements; and reliable integration with the ERP that holds prices, credit and stock. Choose the platform by how well it handles your pricing, catalog and integration needs, and design self-service for routine orders while keeping sales in the loop.",
        ],
      },
      {
        heading: "B2B Ecommerce Is a Different Problem",
        body: [
          "A consumer store serves individuals buying on impulse or after research, paying by card. A B2B store serves companies: a buyer orders, a manager approves, finance pays on terms against an invoice, and the price was negotiated months ago by a sales rep. The diagram above shows a typical ordering workflow. For a structured comparison, see [[/blogs/b2b-vs-b2c-ecommerce|B2B vs B2C ecommerce]]. If you're building a lead-generation site rather than online ordering, see [[/blogs/b2b-website-development|B2B website development]].",
        ],
      },
      {
        heading: "Accounts, Users and Permissions",
        body: [
          "B2B customers are organizations. Model companies, their locations (ship-to and bill-to), and the people who buy for them. Different users need different rights: some can browse, some can order up to a limit, some approve, some see invoices only. Get this model right early; it affects catalogs, pricing, approvals and reporting.",
        ],
        table: {
          headers: ["Entity", "Holds"],
          rows: [
            ["Company", "Terms, credit, price lists, account manager"],
            ["Location", "Ship-to and bill-to addresses, tax status, catalogs"],
            ["User", "Role, permissions, spending limits"],
            ["Role", "What a user can do: browse, order, approve, pay"],
          ],
        },
      },
      {
        heading: "Catalogs and Pricing",
        body: [
          "B2B pricing is personal. Customers see prices from their price list or contract, with volume breaks and promotions on top. Some customers only see certain products. Decide where pricing lives, usually the ERP, and how it reaches the store. See [[/blogs/b2b-ecommerce-pricing|B2B ecommerce pricing]] and [[/blogs/b2b-ecommerce-product-catalog|B2B product catalogs]].",
        ],
      },
      {
        heading: "Ordering Built for Business Buyers",
        body: [
          "Business buyers often know exactly what they need. Give them fast ways to order: quick order by SKU and quantity, CSV upload, reorder from history, saved lists per location, and search that finds part numbers. Show pack sizes, minimum order quantities and stock by location clearly. See [[/blogs/b2b-ecommerce-reordering|B2B reordering]].",
        ],
        cta: {
          title: "Planning B2B ecommerce?",
          description: "ZSpace designs B2B ordering around your pricing, approvals and ERP, not a consumer template.",
        },
      },
      {
        heading: "Quotes and Approvals",
        body: [
          "Not every purchase fits a price list. Quote requests let buyers ask for pricing on large or custom orders; sales responds with a quote that converts to an order when accepted. Approval workflows let companies control spend: orders above a limit, or from certain users, wait for a manager. See [[/blogs/b2b-ecommerce-rfq|B2B RFQ]].",
        ],
      },
      {
        heading: "Payments, Terms and Invoicing",
        body: [
          "Most established B2B customers pay on terms (for example net 30) against invoices, with purchase order numbers captured at checkout. Others pay by card or bank transfer, sometimes with deposits for large orders. Support the methods your customers use, show credit limits and balances, and make invoices and statements available in the account.",
        ],
      },
      {
        heading: "ERP, CRM and Inventory Integration",
        body: [
          "B2B ecommerce lives or dies by integration. Prices, customer accounts, credit limits, stock and invoices usually belong to the ERP; account ownership and opportunities to the CRM. Decide the source of truth for each data type and design reliable synchronization with error handling. See [[/blogs/b2b-ecommerce-erp-integration|B2B ERP integration]] and [[/blogs/ecommerce-erp-integration|ecommerce ERP integration]].",
        ],
      },
      {
        heading: "Platform Options",
        body: [
          "Shopify's B2B features cover companies and locations, catalogs, quantity rules and price breaks, net terms, vaulted cards, draft orders with PO numbers, quick order lists and reorders on all plans, with unlimited catalogs, deposits and contextual customization on Plus ([[https://help.shopify.com/en/manual/b2b/getting-started/plan-features|Shopify Help Center]]). B2B-focused platforms and custom builds suit very large catalogs, complex pricing or unusual workflows.",
        ],
        table: {
          headers: ["Option", "Fits when"],
          rows: [
            ["Shopify B2B", "Brands and distributors with standard B2B needs, often alongside D2C"],
            ["B2B-focused commerce platforms", "Complex pricing, large catalogs, deep ERP ties"],
            ["Headless or custom", "Unusual workflows, portals or integrations"],
          ],
        },
      },
      {
        heading: "Rollout",
        body: [
          "Launch with a group of friendly customers, migrate the most common order types first, and keep sales involved: reps can place orders on behalf of customers, invite buyers and see online activity. Measure adoption by the share of orders placed online and the reduction in manual order entry.",
        ],
      },
      {
        heading: "B2B Build Checklist",
        body: [],
        checklist: [
          "Company, location, user and role model",
          "Customer-specific catalogs and pricing from the source of truth",
          "Quantity rules, pack sizes and price breaks",
          "Quick order, CSV upload, reorder and lists",
          "Quote requests and approvals",
          "PO numbers, terms, invoices and statements",
          "ERP, CRM and inventory integration with monitoring",
          "Sales tools: order on behalf, account visibility",
          "Pilot with real customers before wider rollout",
        ],
        cta: {
          title: "Ready to move B2B ordering online?",
          description: "Talk to ZSpace about [[/services/website-development|B2B ecommerce development]], [[/services/shopify-development|Shopify B2B]] and [[/services/ui-ux-design|B2B UX]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "B2B ecommerce succeeds when it mirrors how business customers actually buy: accounts and roles, personal prices, fast repeat ordering, quotes, approvals and terms, all connected to the ERP. Build those foundations first, then refine the experience. For the design side, see [[/blogs/b2b-ecommerce-ux|B2B ecommerce UX]].",
        ],
      },
    ],
  },

  // ---------------------------------------------------- 148 · B2B UX
  {
    slug: "b2b-ecommerce-ux",
    title: "B2B Ecommerce UX: How to Design Better Business Buying Experiences",
    seoTitle: "B2B Ecommerce UX: Designing Better Business Buying",
    excerpt:
      "B2B ecommerce UX built around real buying tasks: roles, quick ordering, account pricing, quotes, approvals, reorders, documents and research with buyers.",
    category: "UI/UX",
    banner: "b2border",
    bannerAlt:
      "B2B ordering screen wireframe: company, location and terms bar, buyer role needing approval above a limit, quick order table by SKU with pack sizes and price tiers, CSV upload, reorder last order, request a quote, PO number and delivery date, and submit for approval.",
    date: "2026-09-29",
    readingTime: "14 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development"],
    relatedIndustrySlugs: ["b2b-enterprise", "manufacturing"],
    faqs: [
      { q: "What is B2B ecommerce UX?", a: "The design of online buying experiences for business customers, built around their tasks: finding exact products, ordering in bulk, reordering, requesting quotes, getting approvals and managing invoices." },
      { q: "How does B2B UX differ from B2C UX?", a: "B2B buyers are often repeat, task-focused users who value speed and accuracy over inspiration. They work within company rules, roles and budgets, and need documents, terms and account information." },
      { q: "What's the most important B2B UX feature?", a: "Fast, accurate reordering and quick ordering by SKU. Many B2B orders are repeats of previous ones." },
      { q: "How should prices be shown in B2B?", a: "Show the logged-in customer's price, volume breaks and any contract terms clearly. For visitors not logged in, decide whether to show list prices, hide prices or invite them to apply." },
      { q: "How should approvals appear?", a: "Tell buyers before they submit whether an order needs approval, who approves, and track status. Give approvers a simple queue with order details and one-click decisions." },
      { q: "How do I research B2B users?", a: "Interview and observe buyers, approvers, finance and sales reps; analyse order history and support requests; test prototypes with real customers on their real tasks." },
      { q: "Should B2B sites be designed for mobile?", a: "Yes, for some roles, such as site managers reordering on the move, but desktop remains common for large orders and procurement. Research your users." },
      { q: "How should product pages differ in B2B?", a: "Emphasize specifications, part numbers, pack sizes, minimum quantities, stock by location, account price and downloadable documents." },
      { q: "What about accessibility in B2B?", a: "B2B platforms are work tools used all day, often by many staff. Accessible, keyboard-friendly design matters as much as in B2C." },
      { q: "How is this different from B2B website design?", a: "This guide covers buying workflows and task UX. The B2B website design guide covers page-level design and the features each page should include." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Good B2B ecommerce UX is built around the tasks business buyers repeat: finding exact products, ordering in bulk, reordering, requesting quotes, getting approval and handling invoices. Show each customer their own prices and terms, make quick order and reorder the fastest paths, support roles and approvals without surprises, put specifications and documents where buyers need them, and design account areas for orders, quotes, invoices and users. Research with real buyers, approvers, finance staff and sales reps, and measure task speed and accuracy rather than inspiration metrics.",
        ],
      },
      {
        heading: "Design for Tasks, Not Browsing",
        body: [
          "A consumer shopper browses; a business buyer completes a task, often the same one every week. The screen above shows an ordering view designed for that: account context at the top, quick order by SKU, reorder and upload options, quote requests, PO number and approval status. For the wider build, see [[/blogs/b2b-ecommerce-website-development|B2B ecommerce website development]].",
        ],
        table: {
          headers: ["Task", "Design priority"],
          rows: [
            ["Reorder regular items", "One-click reorder, saved lists"],
            ["Order known SKUs", "Quick order table, CSV upload, part-number search"],
            ["Find a new product", "Spec filters, category structure, documents"],
            ["Get a price for a large order", "Quote request from cart or product"],
            ["Get approval", "Clear rules, status, approver queue"],
            ["Pay and reconcile", "Invoices, statements, PO references"],
          ],
        },
      },
      {
        heading: "Roles Shape the Interface",
        body: [
          "Different users see different things: a buyer sees products, prices and their orders; an approver sees orders waiting for them; finance sees invoices and statements; an admin manages users. Tell users up front what they can do and what needs approval, so they don't discover limits at checkout.",
        ],
      },
      {
        heading: "Account Pricing and Terms",
        body: [
          "Show the logged-in customer's price, their volume breaks and whether a price comes from a contract or promotion. Keep list price visible only if it helps. For visitors, decide deliberately: show list prices, show “sign in for your price”, or hide prices and explain how to apply. See [[/blogs/b2b-ecommerce-pricing|B2B pricing]].",
        ],
        cta: {
          title: "B2B customers still ordering by email?",
          description: "ZSpace researches your buyers' real tasks and designs ordering flows they'll prefer to email.",
        },
      },
      {
        heading: "Product Pages for Business Buyers",
        body: [],
        checklist: [
          "Part number, manufacturer number and customer's own SKU where available",
          "Specifications with units, and downloadable datasheets",
          "Pack size, case quantity and minimum order quantity",
          "Account price, price breaks and stock by location",
          "Quantity entry that respects increments",
          "Compatible parts, accessories and replacements",
        ],
      },
      {
        heading: "Approvals Without Friction",
        body: [
          "Show before submission whether an order needs approval and who will approve it. After submission, show status and notify both sides. Give approvers a clear queue with order details, budget context and approve or reject with comments. Allow edits and resubmission.",
        ],
      },
      {
        heading: "Account Areas",
        body: [
          "The account is where B2B buyers spend much of their time: orders and tracking, quotes, invoices and statements, reorder lists, users and roles, addresses and documents. See [[/blogs/b2b-ecommerce-customer-portal|B2B customer portal]].",
        ],
      },
      {
        heading: "Researching B2B Users",
        body: [
          "Interview and observe buyers placing real orders, approvers reviewing them, finance reconciling invoices and sales reps helping customers. Analyse order history for the most common order shapes and support tickets for friction. Test prototypes with customers on their actual tasks. See [[/blogs/user-research-methods|user research methods]].",
        ],
      },
      {
        heading: "Measuring B2B UX",
        body: [],
        checklist: [
          "Share of orders placed online vs by email or phone",
          "Time to place a typical reorder",
          "Order errors and corrections",
          "Quote turnaround and conversion",
          "Approval cycle time",
          "Support contacts per order",
        ],
        cta: {
          title: "Want B2B ordering your customers prefer?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|B2B UX]] and [[/services/website-development|B2B ecommerce development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "B2B UX rewards speed, accuracy and clarity: personal prices, fast ordering and reordering, predictable approvals, and accounts that make business admin easy. Design for the tasks your customers repeat, test with them, and measure how much ordering moves online. For page-level features, see [[/blogs/b2b-ecommerce-website-design|B2B ecommerce website design]].",
        ],
      },
    ],
  },

  // ------------------------------------------------ 149 · B2B VS B2C
  {
    slug: "b2b-vs-b2c-ecommerce",
    title: "B2B Ecommerce vs B2C Ecommerce: What's the Difference?",
    seoTitle: "B2B vs B2C Ecommerce: What's the Difference?",
    excerpt:
      "The practical differences between B2B and B2C ecommerce: buyers, pricing, orders, payments, buying process, UX, integrations and platforms, and how to run both.",
    category: "Web Development",
    banner: "b2bvsb2c",
    bannerAlt:
      "B2C compared with B2B ecommerce: buyer, price, order, payment, process and systems, with B2B involving company buyers with several roles, negotiated prices, bulk repeat orders, terms and invoices, approvals and deep ERP integration.",
    date: "2026-09-29",
    readingTime: "11 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "ui-ux-design"],
    relatedIndustrySlugs: ["b2b-enterprise", "d2c-consumer"],
    faqs: [
      { q: "What's the main difference between B2B and B2C ecommerce?", a: "B2C sells to individual consumers at public prices, usually paid by card. B2B sells to companies with multiple users, negotiated prices, bulk and repeat orders, approvals and payment on terms." },
      { q: "Is B2B ecommerce harder than B2C?", a: "It's more complex in pricing, accounts, approvals and integration. B2C is harder in marketing, differentiation and conversion of new visitors." },
      { q: "Can one platform handle both?", a: "Many can. Shopify, for example, supports B2B features alongside a D2C store. Complex B2B needs may justify a separate platform or storefront." },
      { q: "How do B2B and B2C UX differ?", a: "B2C UX emphasizes inspiration, persuasion and first-time conversion. B2B UX emphasizes speed, accuracy, repeat ordering, account information and approvals." },
      { q: "How do payments differ?", a: "B2C is mostly card and wallets at checkout. B2B often uses purchase orders, net terms, invoices, bank transfers and credit limits." },
      { q: "Is marketing different?", a: "Yes. B2C relies on broad acquisition and brand. B2B relies more on sales relationships, account growth and retention." },
      { q: "What about SEO?", a: "Both benefit. B2B SEO often targets specific product and part searches and technical content; B2C targets broader commercial searches." },
      { q: "What's B2B2C?", a: "A model where a business sells through other businesses to consumers, or serves both, such as a brand selling wholesale to retailers and direct to consumers." },
      { q: "Should a D2C brand add B2B wholesale?", a: "If retailers want your products, a wholesale channel can grow revenue. Plan pricing, minimums, terms and how it affects your D2C pricing." },
      { q: "Which is more profitable?", a: "It depends on margins, order sizes and costs to serve. B2B orders are larger and repeat but margins are often thinner; B2C margins can be higher with higher acquisition costs." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "B2C ecommerce sells to individual consumers: public prices, card payments, mostly one-off orders and a journey designed to persuade new visitors. B2B ecommerce sells to companies: multiple users and roles per account, negotiated or customer-specific prices, bulk and repeat orders, quotes, approvals, purchase orders and payment on terms, with deep ERP integration. That changes UX, pricing, payments, integrations and platform requirements. Many brands run both, often on one platform with separate experiences.",
        ],
      },
      {
        heading: "Side by Side",
        body: ["The diagram above compares the six biggest differences. In more detail:"],
        table: {
          headers: ["Area", "B2C", "B2B"],
          rows: [
            ["Customer", "Individual", "Company with buyers, approvers, finance"],
            ["Pricing", "Public, promotions", "Price lists, contracts, volume tiers, quotes"],
            ["Catalog", "Same for everyone", "Can differ per account"],
            ["Orders", "Small, occasional", "Large, frequent, scheduled"],
            ["Payment", "Cards, wallets", "Terms, POs, invoices, credit limits"],
            ["Process", "Individual decision", "Approvals, procurement rules"],
            ["Service", "Self-service, support", "Account managers plus self-service"],
            ["Systems", "Platform-centred", "ERP, CRM, PIM integrated"],
          ],
        },
      },
      {
        heading: "UX: Persuasion vs Productivity",
        body: [
          "B2C design persuades: imagery, storytelling, social proof and a frictionless first purchase. B2B design makes routine work fast: quick order, reorder, account prices and documents. Both need clarity and trust, but the emphasis differs. See [[/blogs/b2b-ecommerce-ux|B2B ecommerce UX]] and [[/blogs/ecommerce-website-design|ecommerce website design]].",
        ],
      },
      {
        heading: "Pricing and Payments",
        body: [
          "B2C prices are the same for everyone at a given time. B2B prices depend on who's buying, how much and under what contract, and payment usually happens later against an invoice. These requirements drive most of the technical difference between B2B and B2C platforms. See [[/blogs/b2b-ecommerce-pricing|B2B ecommerce pricing]].",
        ],
        cta: {
          title: "Adding B2B to a consumer brand?",
          description: "ZSpace helps brands run D2C and wholesale side by side without the two getting in each other's way.",
        },
      },
      {
        heading: "Integrations",
        body: [
          "A B2C store can start with a platform and a few apps. B2B depends on the ERP for prices, credit, stock and invoices, and often on the CRM for account ownership. Integration planning comes first in B2B projects. See [[/blogs/ecommerce-erp-integration|ecommerce ERP integration]].",
        ],
      },
      {
        heading: "Running Both",
        body: [
          "Many brands sell direct to consumers and wholesale to retailers. Options include one store with B2B features for logged-in companies, or separate storefronts sharing product data. Shopify supports B2B on the same store, with expansion stores available on Plus for a separate wholesale store. Keep pricing consistent between channels so wholesale doesn't undercut D2C unintentionally. See [[/blogs/wholesale-ecommerce-website|wholesale ecommerce]].",
        ],
      },
      {
        heading: "Choosing Platforms",
        body: [],
        checklist: [
          "How complex is customer-specific pricing?",
          "How large is the catalog and how many catalogs per account?",
          "What approvals and roles do customers need?",
          "Which payment methods and terms must be supported?",
          "How deep must ERP integration go?",
          "Will B2C and B2B share a storefront?",
        ],
        cta: {
          title: "Choosing a platform for B2B, B2C or both?",
          description: "Talk to ZSpace about [[/services/website-development|B2B and B2C commerce]] and [[/services/shopify-development|Shopify B2B]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "B2B and B2C ecommerce share technology but not requirements. B2B adds accounts, personal prices, repeat ordering, approvals, terms and integration; B2C adds persuasion and acquisition. Know which you're building, or plan deliberately for both. For the B2B build, see [[/blogs/b2b-ecommerce-website-development|B2B ecommerce website development]].",
        ],
      },
    ],
  },

  // ---------------------------------------------------- 150 · WHOLESALE
  {
    slug: "wholesale-ecommerce-website",
    title: "Wholesale Ecommerce Website: How to Build a Better B2B Ordering Experience",
    seoTitle: "Wholesale Ecommerce Website: Build Better B2B Ordering",
    excerpt:
      "How to build a wholesale ecommerce website for retailers and trade buyers: applications, wholesale pricing, case packs, minimums, pre-orders, terms and reorders.",
    category: "Shopify & Ecommerce",
    banner: "wholesaleflow",
    bannerAlt:
      "Wholesale ordering flow: apply, account approval, wholesale catalog, bulk order, terms and invoice, and reorder.",
    date: "2026-09-29",
    readingTime: "13 min read",
    relatedServiceSlugs: ["shopify-development", "website-development", "ui-ux-design"],
    relatedIndustrySlugs: ["b2b-enterprise", "d2c-consumer", "fashion-apparel"],
    faqs: [
      { q: "What is a wholesale ecommerce website?", a: "An online ordering site where approved business buyers, usually retailers or trade customers, buy products in bulk at wholesale prices with terms suited to resale." },
      { q: "How is wholesale different from general B2B ecommerce?", a: "Wholesale is a form of B2B focused on selling products for resale, often by a brand to retailers, with case packs, minimum orders, seasonal pre-orders and line sheets. B2B also covers supplies, parts and services bought for business use." },
      { q: "What features does a wholesale site need?", a: "Account applications and approval, wholesale price lists or tiers, case packs and minimum order quantities or values, grid ordering by size and colour, pre-orders by season, net terms, reorders, and marketing assets for retailers." },
      { q: "Should wholesale be on the same store as D2C?", a: "It can be, with wholesale features for approved accounts. A separate wholesale storefront suits different catalogs, branding or when you want complete separation." },
      { q: "How do I stop the public seeing wholesale prices?", a: "Show wholesale prices only to logged-in, approved accounts, and hide or restrict wholesale catalogs from the public storefront." },
      { q: "What are minimum order requirements?", a: "Rules such as a minimum order value, minimum quantity per product or case-pack increments. State them clearly and validate them in the cart." },
      { q: "Can Shopify run a wholesale store?", a: "Yes. Shopify's B2B features support companies, catalogs, quantity rules, price breaks, net terms and quick order lists; Plus adds unlimited catalogs, deposits and a separate expansion store if needed." },
      { q: "How do seasonal pre-orders work?", a: "Retailers order upcoming collections in advance, often with deposits and delivery windows. Support pre-order dates, partial shipments and clear communication." },
      { q: "What do retailers want from a wholesale portal?", a: "Fast ordering, clear pricing and availability, easy reorders, order status, invoices, and assets such as product images and descriptions." },
      { q: "How do I launch wholesale online?", a: "Move existing accounts first, invite them with a clear guide, keep reps involved, and track the share of orders placed online." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A wholesale ecommerce website lets approved retailers and trade buyers order in bulk online. It needs an application and approval process, wholesale prices shown only to approved accounts, case packs and minimum order rules enforced in the cart, fast ordering such as grid entry by size and colour, quick order and reorder, seasonal pre-orders where relevant, net terms and invoices, and assets retailers need to sell your products. Run it on the same platform as your D2C store or separately, but keep pricing and product data consistent, and keep sales reps involved.",
        ],
      },
      {
        heading: "Wholesale Within B2B",
        body: [
          "Wholesale is B2B selling for resale: a brand or distributor selling to retailers. It shares B2B foundations, including accounts, pricing and terms, with its own patterns: case packs, line sheets, seasonal ordering and retailer marketing support. For B2B in general, see [[/blogs/b2b-ecommerce-website-development|B2B ecommerce website development]].",
        ],
      },
      {
        heading: "Applications and Approval",
        body: [
          "Most wholesale programs vet buyers. Offer an application form asking for business details, tax or resale information required in your markets, and expected volumes. Review and approve accounts, assign price tiers and terms, and welcome new accounts with a clear guide to ordering. The diagram above shows the flow from application to reorder.",
        ],
      },
      {
        heading: "Wholesale Pricing and Tiers",
        body: [
          "Show wholesale prices only to approved, logged-in accounts. Many brands use tiers by volume or retailer type, plus price breaks by quantity. Keep suggested retail prices visible so retailers understand margins, and make sure wholesale pricing doesn't undermine your own D2C pricing. See [[/blogs/b2b-ecommerce-pricing|B2B ecommerce pricing]].",
        ],
        cta: {
          title: "Taking wholesale orders by email and spreadsheet?",
          description: "ZSpace builds wholesale ordering that retailers find faster than your order form.",
        },
      },
      {
        heading: "Case Packs, Minimums and Grid Ordering",
        body: [
          "Retailers order in volume across sizes and colours. A grid showing sizes across and colours down, with quantity inputs, is far faster than adding each variant separately. Enforce case-pack increments and minimums in the cart with clear messages, not at the last step.",
        ],
        checklist: [
          "Grid ordering by size and colour",
          "Case-pack increments shown and enforced",
          "Minimum order value or quantity visible throughout",
          "Stock and next availability dates",
          "Line sheet download for offline review",
        ],
      },
      {
        heading: "Seasonal Pre-Orders",
        body: [
          "Fashion, home and gift brands often sell upcoming collections months ahead. Support pre-order windows, delivery dates, deposits where needed and partial shipments, and communicate changes early.",
        ],
      },
      {
        heading: "Terms, Invoices and Reorders",
        body: [
          "Established retailers expect net terms, invoices and statements. Newer accounts may pay by card or with deposits. Make reordering fast from order history and lists, since much wholesale volume is replenishment. See [[/blogs/b2b-ecommerce-reordering|B2B reordering]].",
        ],
      },
      {
        heading: "Supporting Retailers",
        body: [
          "Retailers sell your products, so help them: product images, descriptions, specifications, point-of-sale materials and product data feeds. A resources area in the account saves reps time.",
        ],
      },
      {
        heading: "Platform Choices",
        body: [
          "Shopify's B2B features support companies, catalogs, quantity rules, price breaks, net terms and quick order lists on all plans, with unlimited catalogs, deposits and more customization on Plus ([[https://help.shopify.com/en/manual/b2b/getting-started/plan-features|Shopify Help Center]]). Some brands run wholesale on the same store; others use a separate storefront. Apps add features such as grid ordering and line sheets.",
        ],
      },
      {
        heading: "Wholesale Launch Checklist",
        body: [],
        checklist: [
          "Application and approval process",
          "Wholesale catalogs and price tiers",
          "Case packs, minimums and grid ordering",
          "Pre-orders if seasonal",
          "Terms, invoices and reorders",
          "Retailer resources",
          "Existing accounts migrated and invited",
          "Reps trained to support online ordering",
        ],
        cta: {
          title: "Want a wholesale channel that runs itself?",
          description: "Talk to ZSpace about [[/services/shopify-development|Shopify B2B and wholesale]] and [[/services/ui-ux-design|wholesale ordering UX]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A good wholesale site makes ordering in volume easy for retailers and saves your team from manual order entry: vetted accounts, clear wholesale pricing, grids and case packs, pre-orders, terms and fast reorders. For workflow design, see [[/blogs/wholesale-ecommerce-ux|wholesale ecommerce UX]].",
          "Related: [[/blogs/b2b-ecommerce-customer-portal|B2B customer portal]] and [[/blogs/b2b-ecommerce-website-design|B2B website design]].",
        ],
      },
    ],
  },
];
