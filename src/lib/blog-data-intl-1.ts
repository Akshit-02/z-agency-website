import type { BlogPost } from "./blog-data";

/**
 * International SEO expansion, topics 321–340, first implementation pass
 * (2026-11-10). Research and decisions: international-seo-expansion-321-340/.
 * Three CREATE topics: SaaS product development for the US market (321, with
 * 324 held for owner-approved USD pricing), Shopify development for UK
 * businesses (325) and building an ecommerce site for US customers (323).
 *
 * Positioning rule: ZSpace Labs is an India-based, remote-first studio. The
 * owner-confirmed client markets (site.ts, 17 October 2026) are India, UAE,
 * UK, Australia and Singapore; US articles therefore make no claim of US
 * clients, offices or local presence. No external links in article bodies
 * (owner rule). No prices are quoted without a source. Not legal or tax
 * advice; readers are pointed to professional advisers.
 *
 * Sources checked 2026-11-10:
 * US
 * - White House, EO 14324 (30 July 2025): duty-free de minimis treatment
 *   suspended for all countries from 29 August 2025; CBP (24 June 2026):
 *   suspension continued indefinitely.
 * - South Dakota v. Wayfair (21 June 2018): economic nexus for remote sellers;
 *   New York Bulletin ST-128 (remote-access software can be taxable).
 * - California Privacy Protection Agency FAQ: CCPA as amended by the CPRA;
 *   thresholds incl. annual revenue above USD 26.625 million. IAPP state
 *   privacy legislation tracker: 19 states with comprehensive laws (July 2025).
 * - AICPA: SOC 2 is an examination (attestation) of a service organisation's
 *   controls. "Commonly requested by US B2B buyers" is market practice.
 * - ada.gov web guidance (Title III applies to businesses' web content; no
 *   technical standard rule for businesses); Title II web rule (WCAG 2.1 AA)
 *   applies to state and local governments, deadlines moved to 26 April 2027
 *   and 26 April 2028 by a 20 April 2026 interim rule.
 * - Shopify Payments supported countries: available in the US, UK, Canada and
 *   Singapore, not India.
 * - RBI Payment Aggregator–Cross Border framework (31 October 2023, now in
 *   the 2025 Directions): export payments up to ₹25 lakh per transaction.
 * - CBIC Circular 17/2026-Customs: per-consignment value cap for courier
 *   exports removed from 1 April 2026 (medium-high confidence; advise readers
 *   to confirm with their customs broker).
 * UK
 * - gov.uk: VAT standard rate 20%; registration threshold £90,000 (from
 *   1 April 2024); goods up to £135 imported into Great Britain: the seller
 *   (or online marketplace) accounts for VAT at the point of sale; Making Tax
 *   Digital for VAT applies to all VAT-registered businesses.
 * - legislation.gov.uk SI 2026/82: Data (Use and Access) Act 2025 s.112
 *   (storage and access exceptions incl. statistical purposes) in force from
 *   5 February 2026. The ICO became the Information Commission on
 *   30 September 2026 (SI 2026/1015; legal press).
 * - Directive (EU) 2019/882 (European Accessibility Act): e-commerce services
 *   from 28 June 2025; micro-enterprises providing services exempt.
 * - Shopify Help Center: Shopify does not remit or file taxes for merchants;
 *   UK Basic Tax availability changed for stores set up after 13 May 2026.
 * - EU IOSS for consignments up to €150 (medium confidence; EU pages could
 *   not be fetched directly on the check date).
 */
export const intlPosts1: BlogPost[] = [
  // ------------------------------------------------- SHOPIFY DEVELOPMENT UK
  {
    slug: "shopify-development-uk",
    title: "Shopify Development for UK Businesses: Payments, Shipping, VAT and Store Integrations",
    seoTitle: "Shopify Development UK: Payments, VAT, Shipping and Integrations",
    excerpt:
      "Shopify development for UK businesses: VAT and the £135 rule, payments, UK and EU shipping, cookie consent after the 2025 Act and accounting integrations.",
    category: "Shopify & Ecommerce",
    banner: "shopifyflow",
    sceneKind: "shopify",
    bannerAlt:
      "A UK Shopify store set-up in stages: VAT and tax settings, payments, UK and EU shipping, consent and accessibility, and integrations with accounting, inventory and marketing tools",
    date: "2026-11-10",
    readingTime: "14 min read",
    relatedServiceSlugs: ["shopify-development", "ui-ux-design", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "retail", "d2c-consumer"],
    relatedSlugs: ["shopify-store-development", "custom-software-development-uk", "shopify-markets"],
    faqs: [
      {
        q: "Do I need to charge VAT on my UK Shopify store?",
        a: "You must register for VAT once your taxable turnover goes over £90,000, and you can register voluntarily below that. Once registered, you charge VAT at the right rate (20% standard) and file through Making Tax Digital-compatible software. Shopify can calculate tax on orders, but it does not file or pay VAT for you. Confirm your position with an accountant.",
      },
      {
        q: "What is the £135 VAT rule?",
        a: "For goods worth up to £135 sent into Great Britain from outside the UK, the seller must charge and account for VAT at the point of sale, rather than it being collected at import. If the sale goes through an online marketplace, the marketplace is liable instead. It matters for overseas brands selling into the UK and for UK businesses shipping stock from abroad direct to customers.",
      },
      {
        q: "Is Shopify Payments available in the UK?",
        a: "Yes. Shopify Payments is available to UK-based stores and supports cards and wallets such as Apple Pay and Google Pay, with other methods depending on settings. Stores can also add alternative providers and buy-now-pay-later options through apps or payment integrations.",
      },
      {
        q: "Do UK stores still need a cookie banner?",
        a: "Usually yes, but the rules changed in 2026. The Data (Use and Access) Act 2025 added consent exceptions, including for some analytics used to improve a service, which came into force on 5 February 2026, provided users get clear information and a simple way to object. Advertising and most third-party marketing tags still need consent. Check the Information Commission's guidance for your setup.",
      },
      {
        q: "Can an agency outside the UK build a UK Shopify store?",
        a: "Yes, and many do. What matters is that the team understands UK tax settings, payments, shipping and consent rules, and that working hours overlap enough for reviews and launch. ZSpace Labs works remotely from India, which is 4.5 hours ahead of the UK in summer and 5.5 hours in winter.",
      },
    ],
    content: [
      {
        heading: "What a UK Shopify build needs to get right",
        body: [
          "**A Shopify store for UK customers needs the usual things (a fast theme, clear product pages, a smooth checkout) plus a set of UK-specific decisions: VAT registration and tax settings, how you handle the £135 import rule if stock ships from abroad, payment methods UK shoppers expect, shipping within the UK and to the EU after Brexit, cookie consent under the Data (Use and Access) Act 2025, accessibility, and integrations with accounting software that supports Making Tax Digital.** Getting these right at the start avoids the most common rebuilds and accounting clean-ups.",
          "This guide is for UK founders, ecommerce managers and brands entering the UK. For the general build process, see [[/blogs/shopify-store-development|Shopify store development]]; this article focuses on what changes in the UK.",
        ],
      },
      {
        heading: "VAT, tax settings and Making Tax Digital",
        body: [
          "VAT registration becomes compulsory once taxable turnover goes over £90,000 (the threshold since 1 April 2024); many businesses register earlier for credibility or to reclaim VAT on costs. Most goods carry the 20% standard rate, with reduced or zero rates for some categories such as children's clothing and many foods, so product tax settings need checking product by product.",
          "Shopify can calculate tax on orders, but it does not remit or file VAT for you, and its UK tax options changed for stores set up after 13 May 2026, so check the current settings in your admin. All VAT-registered businesses must keep digital records and file through Making Tax Digital-compatible software, which in practice means connecting Shopify to Xero, QuickBooks, Sage or similar so that orders, refunds, fees and payouts reconcile without spreadsheets.",
        ],
        callout: {
          type: "note",
          text: "Tax treatment depends on your products, where stock is held and where customers are. Use this as a checklist for your accountant, not as tax advice.",
        },
      },
      {
        heading: "The £135 rule for stock shipped from abroad",
        body: [
          "If goods worth up to £135 are sent into Great Britain from outside the UK direct to a customer, the seller must charge and account for UK VAT at the point of sale, rather than VAT being collected at the border. If the sale goes through an online marketplace, the marketplace becomes liable. This affects overseas brands selling to UK customers and UK brands that dropship or ship from a warehouse abroad.",
          "In practice that means registering for UK VAT even if you are not established in the UK, showing VAT-inclusive prices, and setting up tax collection in Shopify for those orders. Higher-value consignments follow the normal import rules, with VAT and any duty collected at import. Northern Ireland has its own arrangements for goods moving with the EU and needs separate advice.",
        ],
      },
      {
        heading: "Payments UK shoppers expect",
        body: [
          "Shopify Payments is available to UK-based stores and covers cards plus Apple Pay and Google Pay, which carry a large share of mobile checkouts. Shop Pay adds a faster checkout for returning Shopify shoppers. Many UK fashion, beauty and homeware brands also offer a buy-now-pay-later option through apps or payment partners; check each provider's fees and the effect on average order value before adding several.",
          "Keep the checkout simple: show the main methods, avoid stacking promotional banners from every payment app, and test on the phones your customers actually use.",
        ],
      },
      {
        heading: "Shipping within the UK and to the EU",
        body: [
          "Domestic shipping usually runs through Royal Mail, Evri, DPD or similar carriers, either directly or through a shipping platform that prints labels, compares rates and sends tracking. Customers expect a clear delivery promise, a named carrier and a tracking link, and next-day options matter more in the UK than in many markets.",
          "Since Brexit, sales to EU customers are exports. For consignments up to €150, the EU's Import One-Stop Shop (IOSS) lets you charge EU VAT at checkout so customers are not surprised by charges on delivery; non-EU businesses generally need an intermediary to use it. Above that value, or without IOSS, VAT and duty are collected at import. Decide early whether you will ship to the EU at all, and if so whether prices include duties and taxes. Shopify Markets covers currencies, languages and duty settings; see [[/blogs/shopify-markets|Shopify Markets]].",
        ],
      },
      {
        heading: "Cookies, consent and the 2025 Act",
        body: [
          "UK cookie rules sit in PECR alongside UK GDPR, and the Data (Use and Access) Act 2025 changed them. Since 5 February 2026, some storage and access no longer needs prior consent, including for statistical purposes such as some analytics used to improve your own site, provided you give clear information and a simple way to object. Advertising, retargeting and most third-party marketing pixels still need consent.",
          "On Shopify, configure the cookie banner and the Customer Privacy API so that tags respect the visitor's choice, and check each app's tags rather than assuming the banner controls them. The regulator became the Information Commission on 30 September 2026; its guidance is the place to confirm what your analytics setup can rely on.",
        ],
      },
      {
        heading: "Accessibility for UK and EU customers",
        body: [
          "The Equality Act 2010 expects service providers, including online shops, to make reasonable adjustments for disabled customers, and WCAG 2.2 AA is the practical benchmark most UK teams build to. If you sell into the EU, the European Accessibility Act has applied to e-commerce services since 28 June 2025, with an exemption for micro-enterprises; UK businesses serving EU consumers should check whether it applies to them. See [[/blogs/ecommerce-accessibility|ecommerce accessibility]] for the build checklist.",
        ],
        cta: {
          title: "Planning a Shopify build or rebuild for the UK?",
          description: "ZSpace Labs builds [[/services/shopify-development|Shopify stores]] for UK and international businesses, with tax settings, payments, consent and accounting integrations set up from the start.",
        },
      },
      {
        heading: "Integrations most UK stores need",
        body: [],
        table: {
          headers: ["Area", "Typical tools", "What to check"],
          rows: [
            ["**Accounting**", "Xero, QuickBooks, Sage", "Making Tax Digital compatibility; how orders, refunds, fees and payouts are summarised"],
            ["**Shipping**", "Royal Mail, Evri, DPD, shipping platforms", "Label printing, tracking emails, returns labels, EU customs data"],
            ["**Inventory and ERP**", "Inventory apps or ERPs for larger catalogues", "Stock sync across warehouses, marketplaces and wholesale; see [[/blogs/ecommerce-erp-integration|ERP integration]]"],
            ["**Marketing**", "Email and SMS platforms, reviews", "Consent status passed through; UK GDPR-compliant data handling"],
            ["**Marketplaces**", "Amazon UK, eBay, Etsy", "One source of product data and stock; marketplace VAT rules"],
          ],
        },
      },
      {
        heading: "Working with a remote Shopify team",
        body: [
          "Many UK brands work with Shopify teams outside the UK. The questions that matter are practical: whether working hours overlap for reviews and launch day, how the project is scoped and changed, who owns the theme code and accounts, and what support looks like after launch. ZSpace Labs is an India-based, remote-first studio; India is 4.5 hours ahead of the UK during British Summer Time and 5.5 hours in winter, which leaves a shared working morning for calls and reviews. For how UK businesses compare and contract development partners more generally, see [[/blogs/custom-software-development-uk|custom software development in the UK]].",
        ],
      },
      {
        heading: "UK Shopify launch checklist",
        body: [],
        checklist: [
          "VAT registration decided; product tax rates set; accountant has reviewed settings",
          "Accounting app connected and a test month reconciled",
          "£135 rule handled if any stock ships from outside the UK",
          "Payment methods tested on mobile, including Apple Pay and Google Pay",
          "UK delivery options, cut-off times and tracking emails tested",
          "EU shipping decision made: no EU shipping, duties at delivery, or IOSS at checkout",
          "Cookie banner and Customer Privacy API configured; marketing tags blocked until consent",
          "Accessibility checked against WCAG 2.2 AA on key templates",
          "Returns policy and consumer rights information easy to find",
        ],
      },
      {
        heading: "Next steps",
        body: [
          "List your VAT position, where stock ships from, which markets you sell to and the tools you already use. Those four answers shape most of a UK Shopify build. If you sell in several countries, the [[/blogs/shopify-markets|Shopify Markets guide]] covers currencies, languages and domains.",
        ],
        cta: {
          title: "Want a second opinion on your UK store setup?",
          description: "Tell ZSpace Labs about your products, markets and tools, and we will suggest how to set up tax, payments, shipping and integrations on Shopify. [[/contact|Get in touch]].",
        },
      },
    ],
  },

  // ---------------------------------------------------- SAAS FOR THE US MARKET
  {
    slug: "saas-product-development-usa",
    title: "How to Build a SaaS Product for the US Market: Architecture, Features and Development Considerations",
    seoTitle: "SaaS Product Development for the US Market: What to Build",
    excerpt:
      "What a SaaS product needs to sell to US businesses: architecture, SSO and audit logs, SOC 2 expectations, state privacy laws, sales tax and accessibility.",
    category: "Web Development",
    banner: "saasshell",
    sceneKind: "code",
    bannerAlt:
      "A SaaS product for US customers in layers: core multi-tenant application, enterprise features such as SSO, roles and audit logs, compliance expectations such as SOC 2 and state privacy laws, and billing with sales tax",
    date: "2026-11-10",
    readingTime: "15 min read",
    relatedServiceSlugs: ["website-development", "ui-ux-design", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "startups"],
    relatedSlugs: ["multi-tenant-saas-architecture", "saas-mvp-feature-prioritisation", "enterprise-sso-implementation"],
    faqs: [
      {
        q: "Do I need SOC 2 before selling SaaS to US companies?",
        a: "Not legally, but many US business buyers ask for a SOC 2 report or a completed security questionnaire before signing, especially mid-market and enterprise customers. SOC 2 is an attestation by an independent CPA firm on your controls. Many early-stage companies start with a security page, a questionnaire response pack and SOC 2 readiness work, then complete a Type I or Type II report when larger deals require it.",
      },
      {
        q: "Do US privacy laws apply to my SaaS product?",
        a: "Possibly. There is no single federal privacy law; instead roughly 20 states have comprehensive privacy laws, such as California's CCPA as amended by the CPRA, each with its own thresholds. As a B2B SaaS provider you often act as a service provider or processor for your customers, which brings contractual obligations. Get legal advice once you know where your customers and their users are.",
      },
      {
        q: "Do I have to charge sales tax on SaaS in the US?",
        a: "It depends on the state. Since South Dakota v. Wayfair in 2018, states can require remote sellers to collect sales tax once they pass economic thresholds, and states differ on whether SaaS is taxable at all. Use a tax engine or billing platform that tracks nexus and taxability, and take advice from a US tax professional.",
      },
      {
        q: "Can an India-based team build a SaaS product for the US market?",
        a: "Yes. What matters is product and engineering quality, security practices, and a working rhythm that fits US time zones. India is 9.5 to 10.5 hours ahead of US Eastern time and 12.5 to 13.5 hours ahead of Pacific time, so teams usually plan a short daily overlap and asynchronous updates.",
      },
    ],
    content: [
      {
        heading: "What changes when you build SaaS for US customers",
        body: [
          "**Building SaaS for the US market is mostly about the same product fundamentals as anywhere else: a focused first version, a multi-tenant architecture that can scale, and fast iteration. What changes is what US buyers expect before they sign: single sign-on, roles and audit logs for business customers, a credible security story that often leads to SOC 2, a privacy approach that works across a patchwork of state laws, billing that handles sales tax, and an accessible interface.** Building these in early is far cheaper than retrofitting them when a large deal depends on them.",
          "This guide is for founders and product leaders planning a SaaS product aimed at US businesses, including teams outside the US. For what goes into the first version, see [[/blogs/saas-mvp-feature-prioritisation|SaaS MVP feature prioritisation]].",
        ],
      },
      {
        heading: "Architecture that fits US B2B buyers",
        body: [
          "Most B2B SaaS products are multi-tenant: one application serving many customer organisations, with strict separation of each customer's data. Decide early how tenants are isolated (shared database with tenant keys, schema per tenant or database per tenant), because it affects security reviews, performance and how you answer questions such as \"can our data be deleted on request?\". See [[/blogs/multi-tenant-saas-architecture|multi-tenant SaaS architecture]].",
          "Host in US regions of your cloud provider if your customers are mainly in the US; it reduces latency and is a common questionnaire item. Keep infrastructure as code, separate production from staging, and log access to customer data from day one.",
        ],
      },
      {
        heading: "Features US business customers ask for",
        body: [],
        table: {
          headers: ["Feature", "Why US buyers ask", "When to build it"],
          rows: [
            ["**SSO (SAML or OIDC)**", "IT teams want central control of access", "Before your first mid-market deal; see [[/blogs/enterprise-sso-implementation|SSO implementation]]"],
            ["**Roles and permissions**", "Separation of duties inside customer teams", "In the first version, kept simple; see [[/blogs/saas-roles-and-permissions|roles and permissions]]"],
            ["**Audit logs**", "Evidence for security and compliance reviews", "Early, because history cannot be backfilled; see [[/blogs/saas-audit-logging|audit logging]]"],
            ["**User provisioning (SCIM)**", "Automatic onboarding and offboarding", "When customers have many users"],
            ["**Data export and deletion**", "Contract terms and privacy obligations", "Before larger contracts"],
            ["**Invoicing and purchase orders**", "Many businesses pay by invoice, not card", "When annual contracts start"],
          ],
        },
      },
      {
        heading: "Security reviews and SOC 2",
        body: [
          "US business customers commonly send a security questionnaire before buying, and larger ones often ask for a SOC 2 report. SOC 2 is an attestation, an examination by an independent CPA firm of the controls a service organisation has in place, against criteria covering security and optionally availability, confidentiality, processing integrity and privacy. A Type I report covers design at a point in time; a Type II report covers how controls operated over a period.",
          "For a new product, the practical path is to build the controls SOC 2 expects into how you work (access reviews, change management, logging, vendor management, incident response), publish a clear security page and prepare a questionnaire response pack, then start a SOC 2 examination when deals require it. Engineering choices made early, such as least-privilege access and audit logs, make that examination much easier.",
        ],
        cta: {
          title: "Planning a SaaS product for US customers?",
          description: "ZSpace Labs designs and builds SaaS products with the architecture, security controls and enterprise features US buyers ask about. Explore our [[/services/website-development|web application development]] and [[/services/ui-ux-design|product design]] services.",
        },
      },
      {
        heading: "Privacy across US states",
        body: [
          "The US has no single federal privacy law for most businesses. Instead, a growing number of states (roughly 20 had comprehensive laws by mid-2025) set their own rules. California's CCPA, as amended by the CPRA, is the most developed; it applies to businesses above thresholds such as annual revenue over USD 26.625 million or handling the personal information of 100,000 or more California residents or households.",
          "As a B2B SaaS provider you will often be a service provider or processor for your customers, which means data processing terms, limits on how you use customer data, and help with their rights requests. Build data export, deletion and access logging into the product, and keep a list of sub-processors you can share. Sector rules such as HIPAA for health data add more requirements; take legal advice before entering regulated sectors.",
        ],
      },
      {
        heading: "Billing and sales tax",
        body: [
          "Most US SaaS products bill through a platform such as Stripe, with cards for self-serve plans and invoices for larger contracts. Sales tax is the part founders underestimate. Since the Supreme Court's 2018 decision in South Dakota v. Wayfair, states can require remote sellers to collect sales tax once they pass economic thresholds, and states differ on whether SaaS is taxable: New York, for example, treats remote access to software as potentially taxable. Use a billing or tax engine that tracks where you have nexus and how each state treats your product, and take advice from a US tax professional.",
        ],
      },
      {
        heading: "Accessibility",
        body: [
          "The Department of Justice's guidance says the ADA applies to the goods and services businesses offer on the web, but there is no ADA technical standard for private businesses; WCAG 2.1 or 2.2 AA is the benchmark teams use in practice. If you sell to state or local government, the DOJ's Title II rule requires WCAG 2.1 AA, with compliance dates moved to April 2027 for larger entities and April 2028 for smaller ones. Accessible products also win more procurement reviews, so design for keyboard use, screen readers and contrast from the start.",
        ],
      },
      {
        heading: "Building with a team outside the US",
        body: [
          "Plenty of US SaaS products are built with teams in other countries. The arrangements that make it work are a clear product owner on the customer side, a written scope and change process, a short daily overlap and asynchronous updates, shared access to the backlog and staging environment, and code and infrastructure owned by the customer from day one.",
          "ZSpace Labs is an India-based, remote-first studio working with international clients. India is 9.5 to 10.5 hours ahead of US Eastern time and 12.5 to 13.5 hours ahead of Pacific time depending on daylight saving, so teams usually plan a morning overlap for the US East Coast and rely more on asynchronous work for the West Coast.",
        ],
      },
      {
        heading: "A practical build sequence",
        body: [],
        checklist: [
          "Validate the problem with US target customers before building; record the buying process, not just the pain.",
          "Define a narrow first version and the enterprise features you will add, and when.",
          "Choose tenancy, hosting region and authentication approach up front.",
          "Build roles, audit logs and data export into the first version.",
          "Set up billing with tax handling before taking payments.",
          "Prepare a security page and questionnaire pack; plan SOC 2 readiness.",
          "Design for accessibility on every new screen, not after launch.",
          "Instrument product analytics to see activation and retention, not just sign-ups.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Treating enterprise features as \"later\" until a deal stalls on SSO or audit logs.",
          "Assuming one privacy policy covers every state and sector.",
          "Ignoring sales tax until a state sends a notice.",
          "Mixing customer data across tenants in reports, exports or AI features.",
          "Building for a global audience with no clear first market.",
        ],
      },
      {
        heading: "Next steps",
        body: [
          "Write down your target customer, the first deal size you are aiming for and the security and compliance questions those buyers ask. That list decides which enterprise features belong in the first version. For marketing the product, see [[/blogs/saas-website-development|SaaS website development]]; for a comparable market guide, [[/blogs/saas-development-australia|SaaS product development in Australia]].",
        ],
        cta: {
          title: "Want to scope a SaaS product for the US market?",
          description: "Share your product idea, target customers and timeline. ZSpace Labs will help you shape the first version and the architecture behind it. [[/contact|Start a conversation]].",
        },
      },
    ],
  },

  // ------------------------------------- ECOMMERCE FOR US CUSTOMERS (FROM INDIA)
  {
    slug: "ecommerce-website-for-us-customers",
    title: "How to Build an Ecommerce Website for US Customers: Payments, Shipping, Tax and UX",
    seoTitle: "Ecommerce Website for US Customers: Payments, Shipping, Tax",
    excerpt:
      "How to sell online to US customers, especially from India: duties after de minimis, landed-cost checkout, payments, sales tax, shipping and US shopper UX.",
    category: "Shopify & Ecommerce",
    banner: "intlshipflow",
    sceneKind: "checkout",
    bannerAlt:
      "Selling to US customers from abroad: USD pricing and US-style product pages, landed-cost checkout with duties shown up front, cross-border payment collection, international shipping and customs clearance, and US delivery and returns",
    date: "2026-11-10",
    readingTime: "15 min read",
    relatedServiceSlugs: ["shopify-development", "website-development", "cro-audit"],
    relatedIndustrySlugs: ["d2c-consumer", "ecommerce", "fashion-apparel"],
    relatedSlugs: ["international-ecommerce-website-development", "international-ecommerce-shipping", "ecommerce-duties-import-taxes"],
    faqs: [
      {
        q: "Is the US $800 de minimis exemption still available?",
        a: "No. Duty-free de minimis treatment was suspended for imports from all countries from 29 August 2025, and in June 2026 US Customs and Border Protection said the suspension continues indefinitely. Low-value parcels from India and elsewhere can now attract duties and need proper customs data. Check the current CBP position before setting prices.",
      },
      {
        q: "Should I show duties at checkout for US customers?",
        a: "Usually yes. Charging duties and taxes at checkout (delivered duty paid) avoids customers being asked to pay on delivery, which leads to refused parcels and returns. It needs accurate product classification and a shipping or customs partner that can collect and remit them.",
      },
      {
        q: "Can an India-based Shopify store charge US customers in dollars?",
        a: "Shopify Payments, which handles Shopify's native multi-currency checkout, is not available to stores based in India. Indian brands usually take international payments through cross-border payment aggregators or gateways regulated under RBI's PA-CB framework, which caps export transactions at ₹25 lakh each, or set up a US entity and a US-based store. Each option has tax and accounting consequences, so take advice.",
      },
      {
        q: "Do I have to collect US sales tax as a foreign seller?",
        a: "It can apply. States can require remote sellers to collect sales tax once they pass economic thresholds, and marketplaces often collect it on sellers' behalf. If you sell direct to US consumers in volume, get advice from a US tax professional on where you have obligations.",
      },
    ],
    content: [
      {
        heading: "What it takes to sell online to US customers",
        body: [
          "**To sell to US customers online, your site needs US-friendly product pages and pricing, a checkout that shows the full landed cost, payment methods US shoppers use, shipping that clears customs reliably, and clear returns. For brands shipping from outside the US, and especially from India, the biggest change is duties: the US suspended duty-free de minimis treatment for all countries from 29 August 2025, so even small parcels now need customs data and may attract duty.** Brands that build landed-cost pricing and customs data into the store keep converting; those that leave duties to the doorstep see refusals and returns.",
          "This guide is written for D2C brands, particularly Indian brands, that want to sell direct to US customers. For the general international build, see [[/blogs/international-ecommerce-website-development|international ecommerce website development]].",
        ],
      },
      {
        heading: "Duties after the end of de minimis",
        body: [
          "Until August 2025, most parcels worth under $800 entered the US without duty. That exemption has been suspended for all countries, and in June 2026 CBP said the suspension continues indefinitely. Every shipment now needs accurate product descriptions, classification and declared values, and duties may be due depending on the product and its origin.",
          "For a D2C site this changes three things. Prices need to account for duties, either built in or calculated at checkout. Shipping partners need complete customs data from each order, which means HS codes, country of origin and materials stored as product data rather than typed in at the warehouse. And customer communication needs to explain whether duties are included, so nobody is asked to pay on delivery.",
        ],
        callout: {
          type: "note",
          text: "US trade rules have changed several times since 2025. Confirm the current position for your products with a customs broker or your shipping partner before you set prices.",
        },
      },
      {
        heading: "Checkout: show the landed cost",
        body: [
          "There are two common models. Delivered duty paid (DDP) means the customer pays duties and taxes at checkout and the shipper or a customs partner settles them; delivered duty unpaid (DDU or DAP) leaves the customer to pay on arrival. For D2C, DDP is usually the better experience: no surprise charges, fewer refused parcels and clearer returns.",
          "DDP needs a duty calculation at checkout (from your shipping partner, a landed-cost provider or a platform feature) and correct product classification. Test it with real products and addresses, and show the breakdown clearly in the cart and order confirmation.",
        ],
      },
      {
        heading: "Payments and currency",
        body: [
          "US shoppers expect prices in dollars and the usual card and wallet options, with PayPal and buy-now-pay-later common in some categories. How you deliver that depends on where your business is based. Shopify Payments, which powers Shopify's native local-currency checkout, is not available to India-based stores, so Indian brands usually either use a cross-border payment aggregator or gateway (regulated in India under RBI's PA-CB framework, with a ceiling of ₹25 lakh per export transaction) or set up a US entity with a US-based store.",
          "Both routes work; they differ in fees, payout times, refunds, accounting and tax. Decide before you build, because the choice affects checkout, currency display and reporting. Our [[/blogs/international-ecommerce-payments|international ecommerce payments]] guide covers the options in more detail.",
        ],
      },
      {
        heading: "US sales tax",
        body: [
          "There is no national sales tax in the US; states and localities set their own. Since South Dakota v. Wayfair (2018), states can require remote sellers, including overseas sellers, to collect sales tax once they exceed economic thresholds, while marketplaces generally collect on their sellers' behalf. A small cross-border store may fall below every threshold; a successful one may not. Track sales by state from the start and take advice from a US tax professional as volume grows.",
        ],
      },
      {
        heading: "Shipping from India to the US",
        body: [
          "Most Indian D2C brands start with cross-border courier services, directly or through a shipping aggregator, and move to bulk shipments into a US warehouse or third-party logistics provider once volume justifies it. Shipping in bulk to a US warehouse changes the customs picture (one formal import instead of many parcels) and allows faster delivery and easier returns.",
          "On the Indian side, exports are typically made under a Letter of Undertaking (LUT) without paying IGST, and CBIC removed the per-consignment value cap on courier exports from 1 April 2026; confirm current rules with your customs broker. On the US side, store HS codes, materials and country of origin as product fields so every label and customs declaration is generated from the same data. See [[/blogs/international-ecommerce-shipping|international ecommerce shipping]].",
        ],
        table: {
          headers: ["Model", "Suits", "Trade-offs"],
          rows: [
            ["**Cross-border parcels from India**", "Testing demand, lower volumes", "Longer delivery; duties per parcel; returns are costly"],
            ["**Bulk to a US 3PL or warehouse**", "Proven demand, repeat purchase", "Stock and storage costs; faster delivery; domestic returns"],
            ["**Marketplaces (Amazon US, Etsy)**", "Reach without building traffic", "Fees, less control of brand and customer data"],
          ],
        },
        cta: {
          title: "Taking your D2C brand to US customers?",
          description: "ZSpace Labs helps brands set up stores, checkout and product data for cross-border selling, including landed-cost checkout and shipping integrations. See our [[/services/shopify-development|Shopify development]] service.",
        },
      },
      {
        heading: "UX details that matter to US shoppers",
        body: [],
        checklist: [
          "Prices in USD, with duties either included or shown before payment.",
          "US sizing and measurements (inches, pounds, US sizes) alongside your own.",
          "Address forms with state and ZIP code, and phone numbers in US format.",
          "A clear delivery estimate in business days, and a named carrier with tracking.",
          "A returns policy that says who pays and where items go back to.",
          "Reviews and photos that make sense to US buyers; avoid India-only references on US pages.",
          "Accessible pages: US businesses face ADA claims over inaccessible websites, and WCAG 2.1 or 2.2 AA is the usual benchmark; see [[/blogs/ecommerce-accessibility|ecommerce accessibility]].",
        ],
      },
      {
        heading: "One site or a separate US store?",
        body: [
          "If US sales are a test, a market on your existing store (with USD display, US shipping rates and landed-cost checkout where your setup supports it) is enough. A separate US store, often run by a US entity, makes sense once US becomes a major market: it allows local payments, US pricing and promotions, a US warehouse and cleaner accounting. The [[/blogs/shopify-markets|Shopify Markets guide]] explains what a single store can handle and where India-based stores hit limits.",
        ],
      },
      {
        heading: "Hypothetical example: an Indian skincare brand testing the US",
        body: [
          "**This example is hypothetical.** An Indian skincare brand adds a US market to its store. It stores HS codes and ingredients as product data, uses a cross-border shipping partner that calculates duties at checkout so customers pay a single price, and takes payment through a cross-border gateway in USD. After six months of steady orders, it ships stock in bulk to a US third-party warehouse, cutting delivery times and making returns domestic, and starts tracking sales by state for sales tax.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Pricing as if de minimis still applied.",
          "Leaving duties to be collected on delivery.",
          "Typing customs data by hand at the warehouse instead of storing it on products.",
          "Choosing a payment route without considering refunds, payouts and tax.",
          "Copying Indian product pages unchanged for US shoppers.",
        ],
      },
      {
        heading: "Getting started",
        body: [
          "Start with three decisions: how you will collect payment, whether duties are paid at checkout, and whether you ship parcels from home or stock a US warehouse. Then build the store and product data around them. For other markets, see [[/blogs/global-ecommerce-checkout|global ecommerce checkout]].",
        ],
        cta: {
          title: "Planning to sell to the US?",
          description: "Tell ZSpace Labs about your products, volumes and current setup, and we will help you plan the store, checkout and integrations for US customers. [[/contact|Talk to us]].",
        },
      },
    ],
  },
];
