import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch nine, part five: product data. Product
 * information management (the hub), PIM vs CMS (with the ecommerce
 * platform and DAM) and ecommerce product data architecture. Feed and AI
 * search optimization live in `ecommerce-product-feeds` and
 * `ecommerce-product-data-ai-search`; B2B catalog structure in
 * `b2b-ecommerce-product-catalog`. Merged into `posts` in blog-data.ts.
 */

export const commercePosts73: BlogPost[] = [
  // ---------------------------------------- 458 · PRODUCT INFORMATION MANAGEMENT
  {
    slug: "ecommerce-product-information-management",
    title: "Ecommerce Product Information Management (PIM): A Practical Guide",
    seoTitle: "Ecommerce PIM: How Product Information Management Works",
    excerpt:
      "What ecommerce PIM is: product data models, attributes, variants, localization, enrichment, approval workflows, channels, integrations and governance.",
    category: "Shopify & Ecommerce",
    banner: "pimworkflow",
    bannerAlt:
      "PIM workflow: sources and import, model and classify, enrich and translate, validate and approve (highlighted), syndicate to channels and monitor quality, with a loop noting that completeness rules gate what reaches each channel.",
    date: "2026-10-01",
    readingTime: "16 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "ai-automation"],
    relatedIndustrySlugs: ["ecommerce", "retail", "b2b-enterprise"],
    faqs: [
      { q: "What is a PIM in ecommerce?", a: "A product information management system is the central place where a business collects, structures, enriches, approves and distributes product information (attributes, descriptions, variants, translations, relationships and asset links) to its ecommerce store and other channels." },
      { q: "What is the difference between a PIM and an ecommerce platform?", a: "The ecommerce platform sells: it handles the storefront, cart, checkout, orders, prices and inventory. The PIM manages product content and attributes before they reach the platform and other channels. Many smaller stores manage product data directly in the platform." },
      { q: "When does a store need a PIM?", a: "Typically when it has large or complex catalogs, many suppliers, several sales channels or markets, multiple languages, several teams editing product data, or when product data quality is limiting filters, search and feeds." },
      { q: "Does a PIM store prices and inventory?", a: "Usually not as the source of truth. Prices and stock normally come from the ERP, pricing engine or commerce platform, because they change often and are tied to transactions. Some PIMs hold list prices for reference." },
      { q: "What is product data enrichment?", a: "Adding and improving information beyond the basic supplier record: complete attributes, descriptions, translations, images and videos, relationships, SEO fields and channel-specific copy." },
      { q: "Do PIMs handle images?", a: "Most PIMs can link or store images, and many include basic asset handling. Businesses with large media libraries, rights management or many renditions often use a separate DAM connected to the PIM." },
      { q: "Can Shopify work with a PIM?", a: "Yes. PIMs typically sync products, variants, metafields, metaobjects, translations and media references to Shopify through its Admin API, either with prebuilt connectors or custom integrations." },
      { q: "What are workflows and approvals in a PIM?", a: "Configured steps that a product moves through before publication, such as import, enrichment by copywriters, technical checks, translation and approval, with completeness rules that must pass before data is sent to a channel." },
      { q: "How long does a PIM implementation take?", a: "It depends mostly on data modelling, data cleanup and integrations rather than the software itself. Simple implementations take weeks; complex catalogs with many channels and languages take months." },
      { q: "What is the most common reason PIM projects disappoint?", a: "Treating it as a software installation instead of a data and process change. Without an agreed data model, ownership and governance, a PIM becomes another place for inconsistent data." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Product information management (PIM) is the practice and software for keeping product data accurate and consistent across every channel. A PIM imports data from suppliers and internal systems, organizes it into a data model (families, attributes, variants, categories, relationships), lets teams enrich and translate it through workflows with approvals, checks completeness per channel and syndicates the result to the ecommerce platform, marketplaces, feeds and print. It usually does not own prices, stock or orders. Stores need one when catalog size, channels, languages or team count outgrow platform-based editing.",
        ],
      },
      {
        heading: "What This Guide Covers",
        body: [
          "This is the hub for product data on ZSpace. The comparison with other systems is in [[/blogs/pim-vs-cms|PIM vs CMS]], and how product data flows through the whole stack is in [[/blogs/ecommerce-product-data-architecture|ecommerce product data architecture]]. Related deep dives: [[/blogs/ecommerce-product-feeds|product feeds]], [[/blogs/ecommerce-product-data-ai-search|product data for AI search]] and [[/blogs/b2b-ecommerce-product-catalog|B2B product catalogs]].",
        ],
      },
      {
        heading: "What Counts as Product Information",
        body: [],
        table: {
          headers: ["Type", "Examples", "Usually owned by"],
          rows: [
            ["Identity", "SKU, GTIN or barcode, manufacturer part number, brand", "PIM (with ERP for SKU creation)"],
            ["Descriptive", "Titles, descriptions, bullet points, SEO fields", "PIM"],
            ["Technical attributes", "Dimensions, materials, specifications, compatibility", "PIM"],
            ["Variants and options", "Size, colour, capacity, with variant-level attributes", "PIM (with platform for sellable variants)"],
            ["Classification", "Categories, product families, industry classifications", "PIM"],
            ["Relationships", "Accessories, spare parts, sets, replacements", "PIM"],
            ["Assets", "Images, videos, manuals, certificates", "DAM or PIM, linked"],
            ["Commercial", "Price, cost, stock, availability", "ERP or commerce platform"],
            ["Localized content", "Translations, market-specific copy and units", "PIM"],
          ],
        },
      },
      {
        heading: "Why Product Data Becomes a Problem",
        body: [
          "Product data problems grow quietly. Supplier spreadsheets arrive in different formats. Attributes get added as free text. Translations lag behind. A marketplace feed needs fields the store never captured. Several teams edit products in different tools. The symptoms appear elsewhere: filters that do not work, comparison tables with gaps, search that misses obvious queries, rejected feed items, returns caused by wrong specifications and slow product launches.",
        ],
      },
      {
        heading: "The Product Data Model",
        body: [
          "A PIM is only as good as its data model. The model defines product families (groups of products sharing attributes), the attributes each family requires, attribute types and allowed values, how variants are structured and which attributes belong at each level, category trees for each channel and relationship types.",
        ],
        checklist: [
          "Families per product type with required and optional attributes",
          "Typed attributes: number with unit, enumerated list, boolean, text, date",
          "Canonical units and allowed value lists",
          "Variant axes and variant-level versus product-level attributes",
          "Master category tree plus channel-specific mappings",
          "Relationship types (accessory, replacement, set, similar)",
        ],
      },
      {
        heading: "Attributes",
        body: [
          "Attributes are the core of PIM work. Good attributes are typed, consistently named, defined once and reused across families where they mean the same thing. 'Colour' for marketing (Midnight Blue) and 'colour family' for filtering (Blue) are often two attributes, because they serve different purposes. Localizable attributes (descriptions, names) differ from non-localizable ones (weight), and some attributes vary by channel.",
        ],
      },
      {
        heading: "Variants",
        body: [
          "Variants are where PIMs and platforms most often disagree. Define variant axes (size, colour, capacity) and which attributes change per variant (images, dimensions, GTIN). Map them to each platform's limits: Shopify, for example, now supports up to 2,048 variants per product, while marketplaces and feeds have their own variant rules. Some products are better modelled as separate products linked as a group, such as different models in a range.",
        ],
      },
      {
        heading: "Localization",
        body: [
          "For multi-market stores, the PIM manages translations, market-specific copy, units of measure and regulatory information per locale. Plan which attributes are localizable, how translation workflows run (human, machine with review, or vendor), how to handle products not sold in some markets and how locales map to storefronts. See [[/blogs/multi-language-ecommerce-website|multi-language ecommerce]] and [[/blogs/ecommerce-localization|ecommerce localization]].",
        ],
      },
      {
        heading: "Enrichment",
        body: [
          "Enrichment turns a supplier record into sellable content: complete attributes, clear titles and descriptions, images and video, relationships, SEO fields and channel-specific copy. AI tools can help draft descriptions, extract attributes from supplier documents and suggest categorization, but outputs need review, especially for technical, safety or regulated information. See [[/blogs/ecommerce-product-data-ai-search|product data for AI search]].",
        ],
        cta: {
          title: "Is product data slowing down your store?",
          description: "ZSpace can audit your catalog, design a data model and tell you honestly whether you need a PIM or better structure in your current platform.",
        },
      },
      {
        heading: "Workflows and Approvals",
        body: [
          "Workflows define how a product moves from import to publication.",
        ],
        table: {
          headers: ["Step", "Owner", "Check"],
          rows: [
            ["Import", "Product data team", "Required identifiers present; mapping succeeded"],
            ["Classification", "Category manager", "Family and categories assigned"],
            ["Technical enrichment", "Product specialists", "Required attributes complete and valid"],
            ["Copy and media", "Content and creative teams", "Titles, descriptions, images linked"],
            ["Translation", "Localization team or vendor", "Localized fields complete"],
            ["Approval", "Category owner", "Completeness per channel passes"],
            ["Syndication", "System", "Delivered without errors"],
          ],
        },
      },
      {
        heading: "Channels and Syndication",
        body: [
          "A PIM distributes product data to channels, each with its own requirements: the ecommerce platform, marketplaces, Google Merchant Center and other shopping feeds, retail partners, apps, print catalogs and in-store systems. Completeness rules per channel ensure only ready products are published. Channel mapping transforms attributes and categories into each channel's format. See [[/blogs/ecommerce-product-feeds|product feeds]].",
        ],
      },
      {
        heading: "Ecommerce Integrations",
        body: [],
        table: {
          headers: ["System", "Integration"],
          rows: [
            ["Ecommerce platform", "Push products, variants, attributes (for example as Shopify metafields and metaobjects), translations, media links"],
            ["ERP", "Receive SKUs, base data and sometimes cost; ERP owns price and stock"],
            ["DAM", "Link approved assets and renditions"],
            ["Suppliers", "Import feeds, portals or standards such as GS1 GDSN"],
            ["Search and recommendations", "Structured attributes for indexing and similarity"],
            ["Marketplaces and feeds", "Channel-mapped exports"],
          ],
        },
      },
      {
        heading: "Governance",
        body: [
          "Governance is what keeps a PIM useful after launch.",
        ],
        checklist: [
          "Named owner for the data model and each family",
          "Rules for adding attributes and values",
          "Completeness and quality targets per channel",
          "Regular quality reports and fix queues",
          "Change process for supplier mapping",
          "Clear system of record for every data type",
        ],
      },
      {
        heading: "Do You Need a PIM?",
        body: [],
        table: {
          headers: ["Signal", "Platform editing is usually enough", "A PIM is worth evaluating"],
          rows: [
            ["Catalog", "Hundreds of simple products", "Thousands of products or complex attributes"],
            ["Suppliers", "Few, consistent", "Many, inconsistent formats"],
            ["Channels", "One store", "Store plus marketplaces, retailers, print"],
            ["Languages", "One or two", "Several"],
            ["Teams", "One small team", "Several teams editing data"],
            ["Data problems", "Occasional", "Limiting filters, search, feeds and launches"],
          ],
        },
      },
      {
        heading: "Implementation Approach",
        body: [
          "Start with the data model and cleanup, not software features. Audit current data, define families and attributes for priority categories, clean and map data, configure workflows, build integrations, migrate in waves by category and measure quality before and after. Choose software after the requirements are clear; PIM platforms such as Akeneo, Salsify, Pimcore and others differ in data modelling, workflow, syndication and pricing.",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a home goods retailer sells on its own store and two marketplaces in three languages. Product data lives in spreadsheets, the platform and a translation agency's files. The team defines families and attributes for its top categories, sets up a PIM with completeness rules per channel, connects it to the store and marketplaces, and moves translation into PIM workflows. New products now reach all channels together instead of the store first and marketplaces weeks later.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Buying software before defining the data model",
          "Migrating messy data without cleanup",
          "Putting prices and stock in the PIM as the source of truth",
          "No owner for attributes",
          "Free-text attributes that cannot drive filters",
          "Underestimating integration work",
        ],
        cta: {
          title: "Ready to get your product data under control?",
          description: "Talk to ZSpace about [[/services/website-development|PIM integration and data architecture]], [[/services/shopify-development|Shopify catalog setup]] and [[/services/ai-automation|AI-assisted enrichment]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A PIM centralizes product information so every channel gets consistent, complete data. Its value comes from the data model, workflows and governance more than the software. Related: [[/blogs/pim-vs-cms|PIM vs CMS]], [[/blogs/ecommerce-product-data-architecture|product data architecture]] and [[/blogs/electronics-product-specifications|electronics product specifications]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 459 · PIM VS CMS
  {
    slug: "pim-vs-cms",
    title: "PIM vs CMS: What's the Difference for Ecommerce?",
    seoTitle: "PIM vs CMS vs DAM vs Ecommerce Platform: What Each Does",
    excerpt:
      "PIM vs CMS for ecommerce, alongside the ecommerce platform and DAM: what each system owns, who uses it, how they integrate and when you need each.",
    category: "Shopify & Ecommerce",
    banner: "pimcmsdam",
    bannerAlt:
      "Comparison of PIM (highlighted), CMS, ecommerce platform and DAM by what each owns, its core job, its users, its strength and what it is not for, noting that each system owns different data and integration decides the result.",
    date: "2026-10-01",
    readingTime: "12 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "retail", "b2b-enterprise"],
    faqs: [
      { q: "What is the difference between a PIM and a CMS?", a: "A PIM manages structured product information (attributes, variants, translations, relationships) for many channels. A CMS manages content and pages (articles, landing pages, editorial layouts) for publishing, mainly on websites and apps." },
      { q: "Can a CMS replace a PIM?", a: "For small, simple catalogs, product data can live in the ecommerce platform with editorial content in a CMS. A CMS is not designed for attribute governance, variant structures, supplier imports or multi-channel syndication at scale." },
      { q: "Can a PIM replace a CMS?", a: "No. PIMs are not built for page layouts, editorial content, campaigns or landing pages. Some PIMs can hold marketing copy for products, but not site content." },
      { q: "Where does the ecommerce platform fit?", a: "The platform sells: storefront, cart, checkout, orders, customers, prices, promotions and inventory. It receives product data from a PIM or manages it directly, and may display content from a CMS." },
      { q: "What is a DAM?", a: "A digital asset management system stores and manages media files (images, videos, documents) with metadata, versions, renditions and usage rights. PIMs and CMSs reference assets from the DAM." },
      { q: "Do small stores need all four systems?", a: "No. Many stores use only the ecommerce platform, which includes basic product, content and media management. Additional systems make sense when scale, channels, teams or content needs outgrow it." },
      { q: "Is a headless CMS a PIM?", a: "No, though headless CMSs can store structured content. They lack PIM features such as product families, completeness per channel, supplier imports and channel syndication." },
      { q: "Which system should own product descriptions?", a: "Usually the PIM, so they are consistent across channels. The CMS can add editorial content around products, such as buying guides and campaign pages." },
      { q: "How do PIM, CMS and platform integrate?", a: "Commonly the PIM pushes product data to the platform; the CMS references products by ID or handle and pulls live data from the platform; both reference assets from the DAM." },
      { q: "What is the first system to add beyond the platform?", a: "It depends on the bottleneck. If product data quality and channels are the problem, a PIM. If content and landing pages are the problem, a CMS. If media volume and rights are the problem, a DAM." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A PIM manages what a product is: structured attributes, variants, translations and relationships, distributed to many channels. A CMS manages how content is presented: pages, articles, campaigns and layouts. The ecommerce platform sells: storefront, cart, checkout, orders, prices and stock. A DAM stores and governs media files. They are not competitors; each owns different data. Small stores often need only the platform. Add a PIM when product data and channels outgrow it, a CMS when content needs do, and a DAM when media volume and rights do.",
        ],
      },
      {
        heading: "Why the Question Comes Up",
        body: [
          "As stores grow, teams hit limits: product data scattered across spreadsheets, marketing waiting on developers for landing pages, images duplicated in several tools. Vendors in each category describe overlapping features, which makes it hard to see which system solves which problem. This article separates them by what they own. For PIM in depth, see [[/blogs/ecommerce-product-information-management|product information management]]; for CMS choices, see [[/blogs/how-to-choose-a-cms|how to choose a CMS]] and [[/blogs/headless-cms-vs-traditional-cms|headless vs traditional CMS]].",
        ],
      },
      {
        heading: "The Four Systems Compared",
        body: [],
        table: {
          headers: ["Aspect", "PIM", "CMS", "Ecommerce platform", "DAM"],
          rows: [
            ["Owns", "Product information", "Pages and editorial content", "Commerce transactions and offers", "Media files"],
            ["Core job", "Model, enrich, translate, syndicate product data", "Create, lay out and publish content", "Sell: catalog display, cart, checkout, orders", "Store, organize, version, distribute assets"],
            ["Typical users", "Product data, category and localization teams", "Marketing and content teams", "Ecommerce and operations teams", "Creative and brand teams"],
            ["Strengths", "Attributes, variants, completeness, channels", "Editorial flexibility, layouts, previews", "Prices, promotions, inventory, payments", "Metadata, renditions, rights"],
            ["Not designed for", "Landing pages and campaigns", "Attribute governance and syndication", "Deep enrichment workflows", "Product attributes"],
            ["Outputs to", "Platform, marketplaces, feeds, print", "Website and apps", "Customers and back-office systems", "PIM, CMS, platform, agencies"],
          ],
        },
        diagram: {
          variant: "pimcmsdam",
          alt: "Comparison grid of PIM, CMS, ecommerce platform and DAM across what they own, core job, users, strengths and limits.",
          caption: "Each system owns a different kind of data. Problems start when two systems both try to own the same data.",
        },
      },
      {
        heading: "What a PIM Does Well",
        body: [
          "A PIM is built for structured product data at scale: product families with required attributes, typed values and allowed lists, variants, translations, relationships, supplier imports, enrichment workflows, completeness rules per channel and syndication to many destinations. It is the right place for the single source of truth about what each product is.",
        ],
      },
      {
        heading: "What a CMS Does Well",
        body: [
          "A CMS is built for content: articles and guides, landing pages, campaign pages, home page modules, editorial layouts and content scheduling, with previews and publishing workflows. Headless CMSs deliver structured content through APIs to websites and apps. A CMS is the right place for content around products, such as buying guides, lookbooks and brand stories. See [[/blogs/what-is-a-headless-cms|what is a headless CMS]].",
        ],
      },
      {
        heading: "What the Ecommerce Platform Does Well",
        body: [
          "The platform runs commerce: product display and sellable variants, prices and price lists, promotions, inventory by location, cart, checkout, payments, orders, customers and taxes. Platforms such as Shopify include product editing, basic content pages and media, which is enough for many stores. Its product data capabilities, such as metafields and metaobjects on Shopify, can go a long way before a PIM is needed.",
        ],
        cta: {
          title: "Not sure which system your team actually needs?",
          description: "ZSpace can map where your product data and content live today and recommend the smallest stack that solves the real bottleneck.",
        },
      },
      {
        heading: "What a DAM Does Well",
        body: [
          "A DAM manages media at scale: storage, metadata, search, versions, approvals, renditions for different channels and usage rights such as licence expiry and permitted regions. PIMs and CMSs reference DAM assets rather than storing copies, so an updated image appears everywhere. See [[/blogs/ecommerce-product-image-design|product image design]] for how product imagery is used on the storefront.",
        ],
      },
      {
        heading: "Where They Overlap",
        body: [],
        table: {
          headers: ["Overlap", "Usually resolved by"],
          rows: [
            ["Product descriptions in PIM and CMS", "PIM owns them; CMS adds editorial content around products"],
            ["Product data edited in the platform and the PIM", "PIM owns enrichment; platform is read-only for those fields"],
            ["Images in PIM, CMS, platform and DAM", "DAM owns originals; others reference"],
            ["Category pages in CMS and platform", "Platform owns product lists; CMS owns editorial content blocks"],
            ["Prices in PIM and platform", "Platform or ERP owns them"],
          ],
        },
      },
      {
        heading: "How They Integrate",
        body: [
          "A common pattern: the PIM pushes product data to the platform; the platform exposes products, prices and stock through its APIs; the CMS references products by ID or handle and the storefront pulls live product data from the platform at render time; the DAM supplies assets to all three. Integration rules matter more than the tools: which system owns each field, and which systems may only read it. See [[/blogs/ecommerce-product-data-architecture|product data architecture]].",
        ],
      },
      {
        heading: "When Each System Is Appropriate",
        body: [],
        table: {
          headers: ["Situation", "Likely stack"],
          rows: [
            ["Small catalog, one store, small team", "Ecommerce platform only"],
            ["Content-led brand with simple catalog", "Platform plus CMS"],
            ["Large or technical catalog, several channels", "Platform plus PIM"],
            ["Large media library, many campaigns and regions", "Add a DAM"],
            ["Enterprise, many markets, channels and teams", "Platform, PIM, CMS and DAM with clear ownership"],
          ],
        },
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a beauty brand's marketing team wants to publish routine guides and campaign pages without developer help, while the product team struggles to keep ingredient lists consistent across the store and two retailers. The first problem points to a CMS, the second to a PIM. The brand adds a headless CMS first because content is its immediate bottleneck, structures ingredients as platform metafields for now, and plans a PIM when it adds more retail partners.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Using a CMS as a product database",
          "Expecting a PIM to build landing pages",
          "Two systems both editing the same fields",
          "Copying images into every system instead of referencing them",
          "Adding systems before identifying the bottleneck",
          "No integration ownership after launch",
        ],
        cta: {
          title: "Ready to design a cleaner commerce stack?",
          description: "Talk to ZSpace about [[/services/website-development|PIM, CMS and platform integration]], [[/services/shopify-development|Shopify data setup]] and [[/services/ui-ux-design|content experience design]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "PIM, CMS, ecommerce platform and DAM each own different data: product information, content, commerce and media. None is better in general; the right stack depends on your bottleneck. Define ownership per field and integrate deliberately. Related: [[/blogs/ecommerce-product-information-management|PIM guide]] and [[/blogs/ecommerce-product-data-architecture|product data architecture]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 460 · PRODUCT DATA ARCHITECTURE
  {
    slug: "ecommerce-product-data-architecture",
    title: "Ecommerce Product Data Architecture: How to Model and Move Product Data",
    seoTitle: "Ecommerce Product Data Architecture: Models, Systems and APIs",
    excerpt:
      "How to design product data architecture: products, SKUs, variants, attributes, relationships, pricing, inventory, localization, channels and APIs.",
    category: "Web Development",
    banner: "productdataarch",
    bannerAlt:
      "Ecommerce product data architecture diagram: supplier feeds, DAM, copy and enrichment flow into a highlighted PIM holding products, variants, attributes and locales; an ERP supplies cost, price and stock to the commerce platform holding offers, price lists, inventory and orders; the PIM feeds the platform, and both feed the storefront, search index, recommendations, feeds and marketplaces, and analytics events, which flow back to recommendations.",
    date: "2026-10-01",
    readingTime: "17 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "ai-automation"],
    relatedIndustrySlugs: ["ecommerce", "retail", "b2b-enterprise"],
    faqs: [
      { q: "What is ecommerce product data architecture?", a: "The design of how product data is modelled, where each part lives, which system owns it, and how it moves between systems such as the PIM, ERP, ecommerce platform, search, recommendations and channels." },
      { q: "What is the difference between a product, a variant and a SKU?", a: "A product is the sellable item as customers think of it (a T-shirt style). Variants are its purchasable options (size and colour combinations). A SKU is the internal identifier for a specific stockable item, usually one per variant." },
      { q: "Should attributes be stored at product or variant level?", a: "At the level where they vary. Shared attributes (brand, material) belong to the product; attributes that change per option (size, colour, capacity, GTIN, weight) belong to the variant." },
      { q: "Where should prices live?", a: "In the system that calculates and governs them: often the ERP or a pricing engine, synced to the ecommerce platform, which applies promotions and market price lists at checkout. Not in the PIM as the source of truth." },
      { q: "How should inventory be modelled?", a: "By SKU and location, with available-to-sell calculated from on-hand stock, reservations and incoming stock. The OMS, ERP or platform owns it, depending on the stack." },
      { q: "How do categories differ from attributes?", a: "Categories organize products for navigation and merchandising, and may differ by channel. Attributes describe products and drive filters and comparison. Avoid encoding attributes as categories or tags." },
      { q: "How should localization be handled?", a: "Separate localizable fields (names, descriptions) from non-localizable ones (weight), store units canonically and convert for display, and model market availability and market-specific content explicitly." },
      { q: "How does product data reach search and recommendations?", a: "Usually through indexing pipelines or events: when products change, updated records are sent to the search index and recommendation system, with live price and stock checked at request time." },
      { q: "Should we use events or scheduled syncs?", a: "Both have a place. Events or webhooks suit frequent changes such as stock and price; scheduled syncs suit bulk enrichment updates. Always reconcile periodically to catch missed messages." },
      { q: "What is the most important principle?", a: "One owner for every field. Most product data problems come from two systems editing the same data or no system clearly owning it." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Ecommerce product data architecture defines how products are modelled and how their data moves. Model products, variants and SKUs explicitly, with typed attributes at the level where they vary, separate categories from attributes, and store relationships as data. Give every field one owner: product information in the PIM (or platform), prices and stock in the ERP, OMS or platform, media in the DAM. Move data with events for fast-changing fields and scheduled syncs for bulk updates, feed search and recommendations from the same records, and check live price and stock at request time.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "This article connects the product data topics on ZSpace. Product information management is covered in [[/blogs/ecommerce-product-information-management|the PIM guide]], system boundaries in [[/blogs/pim-vs-cms|PIM vs CMS]] and the wider commerce stack in [[/blogs/ecommerce-website-architecture|ecommerce website architecture]] and [[/blogs/headless-ecommerce-architecture|headless ecommerce architecture]].",
        ],
      },
      {
        heading: "Why Architecture Matters for Product Data",
        body: [
          "Product data feeds almost everything customers see: listings, filters, product pages, search results, recommendations, comparison, structured data, shopping feeds, marketplaces and apps. When the architecture is unclear, each of those surfaces gets its data differently and inconsistencies appear: a filter value that does not match the product page, a feed price that differs from the store, a recommendation for a discontinued product.",
        ],
      },
      {
        heading: "The Architecture at a Glance",
        body: [
          "A typical mid-size architecture has sources (suppliers, DAM, content teams, ERP), a product information layer (PIM or the platform's catalog), a commerce layer (platform with offers, price lists, inventory and orders) and consumers (storefront, search, recommendations, feeds, analytics).",
        ],
        diagram: {
          variant: "productdataarch",
          alt: "Architecture diagram: sources flow into a PIM and an ERP; the PIM feeds the commerce platform; both feed the storefront, search, recommendations, feeds and analytics.",
          caption: "Smaller stores may collapse the PIM into the platform's own catalog; the ownership rules stay the same.",
        },
      },
      {
        heading: "Core Product Entities",
        body: [],
        table: {
          headers: ["Entity", "What it represents", "Key fields"],
          rows: [
            ["Product (or product group)", "The item as customers think of it", "ID, title, brand, family, description, shared attributes"],
            ["Variant", "A purchasable option of the product", "Option values, variant attributes, images, GTIN"],
            ["SKU", "A stockable unit", "SKU code, dimensions, weight, fulfilment data"],
            ["Category", "A navigation or merchandising group", "Hierarchy, channel, sort rules"],
            ["Attribute definition", "A describable property", "Code, type, unit, allowed values, localizable"],
            ["Relationship", "A link between products", "Type (accessory, replacement, set), source, target"],
            ["Asset", "Image, video or document", "DAM ID, type, variant link, alt text, rights"],
            ["Offer", "Price and availability in a market or channel", "Price list, currency, availability, start and end dates"],
          ],
        },
      },
      {
        heading: "SKUs and Variants",
        body: [
          "Define variant axes per family (size, colour, capacity) and which attributes change per variant. Usually one variant maps to one SKU, but bundles, kits and made-to-order products may break that rule; model them explicitly. Keep identifiers stable: changing SKU codes or product IDs breaks integrations, analytics and history. Check platform limits; Shopify now allows up to 2,048 variants per product, and other platforms and channels have their own constraints.",
        ],
      },
      {
        heading: "Attributes",
        body: [
          "Attributes should be typed (number with unit, enumerated list, boolean, text, date), defined once and reused where they mean the same thing, and marked as localizable or not. Separate display values from filter values where needed (a marketing colour name and a colour family). Store canonical units and convert for display. See [[/blogs/electronics-product-specifications|electronics product specifications]] for a detailed example.",
        ],
      },
      {
        heading: "Categories and Classification",
        body: [
          "Maintain a master taxonomy for internal classification, then map it to channel-specific trees: the store's navigation, marketplace categories and Google's product taxonomy for feeds. Do not use categories or tags to encode attributes such as colour or size; that makes filters and comparison unreliable. See [[/blogs/ecommerce-navigation-design|navigation design]] and [[/blogs/b2b-ecommerce-product-catalog|B2B catalogs]].",
        ],
      },
      {
        heading: "Relationships",
        body: [
          "Relationships power accessories, compatibility, cross-sells, replacements and sets. Store them as typed links between products, owned by the PIM or catalog, rather than as text in descriptions. Recommendation engines can then combine explicit relationships with learned ones. See [[/blogs/ecommerce-recommendation-engine|recommendation engines]].",
        ],
        cta: {
          title: "Is your product data architecture holding you back?",
          description: "ZSpace can map your current data flows, define ownership per field and design the target architecture for your catalog and channels.",
        },
      },
      {
        heading: "Pricing",
        body: [
          "Prices change often, vary by market, customer group and channel, and are tied to transactions and accounting. Keep them in the system that governs them (ERP, pricing engine or the platform's price lists) and sync them to the platform. Promotions and discounts are usually calculated by the platform at cart and checkout. Feeds and search indexes need current prices, so update them by event and check prices again at request time where accuracy matters.",
        ],
      },
      {
        heading: "Inventory",
        body: [
          "Model inventory by SKU and location, and calculate available-to-sell from on-hand stock, reservations, safety stock and incoming purchase orders. The OMS, ERP or platform owns it. Push changes by event because stock changes quickly, and treat cached stock values as hints that must be confirmed before purchase. See [[/blogs/ecommerce-inventory-management-integration|inventory integration]] and [[/blogs/ecommerce-order-management-system|order management]].",
        ],
      },
      {
        heading: "Localization",
        body: [],
        checklist: [
          "Localizable attributes identified (names, descriptions, marketing copy)",
          "Non-localizable attributes stored once (weight, dimensions in canonical units)",
          "Unit conversion at display, by market",
          "Market availability modelled explicitly",
          "Market-specific regulatory and labelling fields",
          "Translation status tracked per locale",
        ],
      },
      {
        heading: "Channels",
        body: [
          "Each channel (store, app, marketplaces, shopping feeds, retail partners) needs its own mapping: category trees, required attributes, title formats and image rules. Define completeness rules per channel so products are only published when ready, and keep channel transformations in one place rather than spreading them across tools. See [[/blogs/ecommerce-product-feeds|product feeds]].",
        ],
      },
      {
        heading: "PIM and Ecommerce Platform Boundaries",
        body: [
          "When a PIM exists, it owns product information; the platform receives it and owns commerce data. Make PIM-managed fields read-only in the platform, or changes made there will be overwritten or, worse, diverge. On Shopify, PIM data commonly maps to products, variants, metafields and metaobjects, with translations through Shopify's translation APIs.",
        ],
      },
      {
        heading: "Search Indexing",
        body: [
          "Search indexes need product records with structured attributes for filters and facets, text fields for matching, synonyms, and ranking signals such as popularity and availability. Update the index when products change (events or frequent incremental syncs), and fetch live price and stock at query time or update them very frequently. Product data quality is the main limit on search quality. See [[/blogs/consumer-electronics-ecommerce-search|electronics search]], [[/blogs/furniture-ecommerce-search|furniture search]] and [[/blogs/jewelry-ecommerce-search|jewelry search]].",
        ],
      },
      {
        heading: "Recommendations",
        body: [
          "Recommendation systems use the same product records for content similarity, relationships for complementary items and behavioural events for collaborative signals. Share product IDs across the catalog, events and the recommendation system, and filter by live availability when serving. See [[/blogs/fitness-ecommerce-product-discovery|fitness product discovery]] for how attributes and recommendations combine in guided shopping.",
        ],
      },
      {
        heading: "APIs and Data Movement",
        body: [],
        table: {
          headers: ["Data", "Change frequency", "Typical movement"],
          rows: [
            ["Enriched product information", "Daily or less", "Scheduled or on-approval sync from PIM"],
            ["Prices", "Frequent", "Events or webhooks from ERP or pricing engine"],
            ["Stock", "Very frequent", "Events; live checks at purchase"],
            ["Media", "Occasional", "References to DAM URLs or renditions"],
            ["Search index updates", "On change", "Events or incremental indexing jobs"],
            ["Behavioural events", "Continuous", "Event pipeline to analytics and recommendations"],
          ],
        },
        checklist: [
          "Stable IDs shared across systems",
          "Idempotent updates so retries do not create duplicates",
          "Periodic reconciliation to catch missed events",
          "Monitoring for failed syncs and stale records",
          "Versioned APIs for apps and partners",
        ],
      },
      {
        heading: "Ownership Matrix",
        body: [],
        table: {
          headers: ["Field group", "Owner", "Read by"],
          rows: [
            ["Identifiers", "ERP or PIM", "All"],
            ["Descriptive content and attributes", "PIM", "Platform, search, recommendations, feeds"],
            ["Media", "DAM", "PIM, CMS, platform"],
            ["Prices and price lists", "ERP or pricing engine", "Platform, feeds"],
            ["Inventory", "OMS, ERP or platform", "Platform, search, feeds"],
            ["Promotions", "Platform", "Storefront, checkout"],
            ["Editorial content", "CMS", "Storefront"],
          ],
        },
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a retailer's Google feed shows prices that differ from the store for hours after changes, because the feed is generated nightly from the PIM, which holds an old copy of prices. The team removes prices from the PIM, sends price changes from the ERP to the platform by event, and generates the feed from the platform with frequent updates. The PIM keeps ownership of attributes and descriptions only.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Two systems editing the same fields",
          "Prices and stock copied into systems that cannot keep them current",
          "Attributes encoded as tags or categories",
          "Unstable product and SKU identifiers",
          "No reconciliation for event-driven syncs",
          "Search and recommendations built on different product records",
        ],
        cta: {
          title: "Ready to design product data that scales?",
          description: "Talk to ZSpace about [[/services/website-development|ecommerce data architecture and integrations]], [[/services/shopify-development|Shopify catalog and metafield design]] and [[/services/ai-automation|search and recommendation data pipelines]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Good product data architecture models products, variants, attributes and relationships clearly, gives every field one owner, moves fast-changing data by event, and feeds search, recommendations and channels from the same records. Related: [[/blogs/ecommerce-product-information-management|PIM guide]], [[/blogs/pim-vs-cms|PIM vs CMS]] and [[/blogs/ecommerce-api-integration|ecommerce API integration]].",
        ],
      },
    ],
  },
];
