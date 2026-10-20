import type { BlogPost } from "./blog-data";

/**
 * Founder batch 2, Shopify and ecommerce: WooCommerce to Shopify migration
 * checklist (topic 29) and Shopify for B2B ecommerce (topic 31).
 * Sources checked 2026-10-14 on help.shopify.com, changelog.shopify.com and
 * apps.shopify.com: variant and option limits (2,048 variants, 3 options;
 * changelog 15 Oct 2025); Shopify's WooCommerce migration guide (Store
 * Migration app: products, early access) vs the App Store listing (products
 * and customers); legacy customer accounts deprecated 26 Feb 2026; URL
 * redirect limits; B2B plan matrix (changelog 2 Apr 2026 and Help Center plan
 * features); B2B considerations (500 line items, incompatible features).
 * No prices are quoted. No figure here is ZSpace client data.
 */
export const founderCommercePosts2: BlogPost[] = [
  {
    slug: "woocommerce-to-shopify-migration-checklist",
    title: "How to Migrate from WooCommerce to Shopify Without Losing Important Store Data",
    seoTitle: "WooCommerce to Shopify Migration Checklist",
    excerpt:
      "A WooCommerce to Shopify migration checklist: data mapping for products, customers, orders and reviews, plugin replacements, redirects and a cutover plan.",
    category: "Shopify & Ecommerce",
    banner: "migrate",
    sceneKind: "shopify",
    bannerAlt:
      "WooCommerce store data moving to Shopify in stages: products and variations, customers, orders, reviews and content, then URL redirects and launch checks",
    date: "2026-10-14",
    readingTime: "12 min read",
    relatedServiceSlugs: ["shopify-development", "website-development"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "fashion-apparel"],
    relatedSlugs: ["migrating-to-shopify-guide", "ecommerce-data-migration", "ecommerce-platform-migration-checklist"],
    faqs: [
      {
        q: "Can I move reviews from WooCommerce to Shopify?",
        a: "Not with Shopify's own tools. Shopify's WooCommerce guide says you can't export or migrate reviews from WooCommerce to Shopify, and points to review apps such as Judge.me, Loox and Yotpo for importing them. Check that the app you choose keeps the review date, rating, author and product link, and that it can display reviews in your theme.",
      },
      {
        q: "Will my WooCommerce customers need new passwords on Shopify?",
        a: "Passwords cannot be migrated. On Shopify's current customer accounts, which replaced legacy accounts for new stores from 26 February 2026, customers sign in with their email address and a one-time code, so there is no password to reset. Shopify says customers with a profile in your admin can sign in with that email. Test this with a few imported customers on a development store before launch, and tell customers what to expect.",
      },
      {
        q: "What happens to WooCommerce products with more than three attributes?",
        a: "Shopify allows up to three options per product, and its WooCommerce guide says products with more than three options won't have their options imported. Decide before import which attributes become options and which become metafields or separate products.",
      },
      {
        q: "Can I import my WooCommerce order history?",
        a: "Not through Shopify's built-in importer. Shopify names LitExtension, Matrixify and Ablestar as apps that can bring historical orders across. Import products and customers first, and turn off staff new-order notifications before importing orders, or each imported order triggers an email.",
      },
      {
        q: "Do I keep my URLs when moving from WooCommerce to Shopify?",
        a: "Usually not. Shopify uses fixed paths such as /products/ and /collections/, so WooCommerce URLs like /product/name/ need 301 redirects. Build the redirect map before launch and import it by CSV.",
      },
      {
        q: "Should I redesign the store at the same time as migrating?",
        a: "Keep the redesign small if you can. Changing platform, URLs and design together makes it harder to tell what caused any drop in traffic or conversion after launch.",
      },
    ],
    content: [
      {
        heading: "Can you move from WooCommerce to Shopify without losing data?",
        body: [
          "**Yes, but not with a single button. Products and customers move with Shopify's tools or a CSV, while order history, reviews, subscriptions and redirects each need their own plan.** The data most at risk is the data nobody listed: product attributes beyond Shopify's three options, reviews, active subscriptions, and the URLs that earn search traffic. Map every type of data to its Shopify home before you import anything, replace plugins deliberately, and treat redirects and the cutover as a project of their own.",
          "This checklist is for WooCommerce store owners who have already chosen Shopify. For the general process from any platform, see the [[/blogs/migrating-to-shopify-guide|step-by-step Shopify migration guide]]. If you have not yet decided on a platform, start with the [[/blogs/ecommerce-platform-migration-checklist|platform migration checklist]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Shopify allows up to 2,048 variants and three options per product. Some themes and apps still stop at 100 variants.",
          "WooCommerce products with more than three attributes lose their options on import unless you restructure them.",
          "Historical orders and reviews need third-party apps. Shopify's own tools do not move them.",
          "Customers can't bring passwords. Current Shopify customer accounts use an email code instead, so test sign-in on a development store.",
          "Every /product/ and /product-category/ URL with traffic or links needs a 301 redirect.",
          "Replace each plugin with a native feature first, then an app, then custom work.",
        ],
      },
      {
        heading: "What Shopify's migration tools actually cover",
        body: [
          "Shopify's own documentation and its App Store listing describe the first-party Store Migration app differently. The Shopify Help Center guide to migrating from WooCommerce says the app imports products from a WooCommerce product CSV, is in early access, and is only available for certain stores on desktop. The Store Migration app listing says it moves product and customer data from WooCommerce and other platforms. Plan as if only products are covered, and treat anything more as a bonus you confirm on your own store.",
          "Shopify's guide exports products with WooCommerce's built-in CSV export, and customers and orders with a WooCommerce export plugin. The customer CSV needs editing to match Shopify's format. For history, reviews and larger catalogs, most stores use a third-party migration app or a bulk CSV tool, and very large or unusual catalogs may need a script against Shopify's Admin API. This is the part of a [[/services/shopify-development|Shopify migration project]] where most of the planning time goes.",
        ],
        callout: {
          type: "note",
          text: "Shopify's migration guidance is to import products first, then customers, then historical orders. Staff who receive new-order notifications get an email for every imported order unless you turn those notifications off first.",
        },
      },
      {
        heading: "WooCommerce to Shopify data mapping",
        body: [
          "Use this table as the migration inventory. Add a column for your record counts and an owner for each row, and do not start importing until every row has a decision.",
        ],
        table: {
          headers: ["WooCommerce data", "Shopify destination", "How it usually moves", "Watch for"],
          rows: [
            ["Simple products", "Products", "Store Migration app, product CSV or migration app", "Descriptions with shortcodes or page-builder markup that won't render"],
            ["Variable products and variations", "Options and variants (up to 3 options, 2,048 variants)", "Product CSV or migration app", "More than 3 attributes: options are not imported. Themes and apps that still stop at 100 variants"],
            ["Global and custom attributes not used for variations", "Metafields, or product tags for filtering", "Migration app or CSV with metafield columns", "Decide which ones filters and the theme actually need"],
            ["Product categories and tags", "Collections (manual or automated by tag or type)", "Rebuild, or import with a migration app", "Nested categories become separate collections plus navigation menus"],
            ["Product images and alt text", "Product media", "CSV image URLs or migration app", "Alt text dropped; very large originals"],
            ["Customers and addresses", "Customers", "Customer CSV (edited) or migration app", "Passwords can't move. Marketing consent must be carried over accurately"],
            ["Orders and order history", "Orders (imported as historical)", "Migration app, such as those Shopify names", "Turn off new-order notifications; decide how many years you need"],
            ["Product reviews", "Reviews app", "Review app import", "Shopify says WooCommerce reviews can't be exported or migrated with its tools"],
            ["WooCommerce Subscriptions", "A subscription app", "App-specific import of contracts", "Whether saved payment details can transfer depends on your payment provider and app"],
            ["Coupons", "Discounts", "Recreate, or a migration app if it supports them", "Usage counts and per-customer limits"],
            ["Blog posts and pages", "Blog articles and pages", "Migration app or manual", "Embedded media, internal links and author data"],
            ["Gift cards and store credit", "Gift cards, store credit", "App or manual, with balances reconciled", "Balances on the day of cutover"],
            ["URLs", "Fixed Shopify paths (/products/, /collections/, /pages/, /blogs/)", "URL redirect CSV import", "Every URL with traffic, links or revenue needs a 301"],
          ],
        },
      },
      {
        heading: "Variations: the 3-option and 100-variant traps",
        body: [
          "Shopify raised its limit from 100 to 2,048 variants per product in October 2025, and Shopify's variants documentation keeps the limit of three options per product. The same page warns that some third-party themes, theme app extensions, public apps and sales channels might not support more than 100 variants. So a product that imports cleanly can still break a product page, a feed or a reviews widget.",
          "Before import, list every variable product with more than three attributes or more than 100 variations. For each one, choose to drop an attribute that does not change stock or price, move it to a metafield or line-item property, or split the product. Then check your theme, feeds and key apps against the largest products you have.",
        ],
      },
      {
        heading: "Customer accounts after the February 2026 change",
        body: [
          "Older migration advice says to import customers and email them an invitation to set a new password. That advice describes Shopify's legacy customer accounts. On 26 February 2026 Shopify deprecated legacy customer accounts, which are no longer available to new stores. With the current customer accounts, customers enter their email address and receive a one-time code, and Shopify says a password isn't required. Customers who already have a profile in your admin can sign in with the email on that profile.",
          "In practice, imported customers should be able to sign in with their email and see their imported history, without a reset campaign. Do not rely on that until you have tested it: import a handful of real customer records into a development store, sign in as them, and check that addresses and any imported orders appear. Then write a short notice for the launch email and the account page explaining the new sign-in.",
        ],
      },
      {
        heading: "Plugin to Shopify app checklist",
        body: [
          "WooCommerce stores usually run on plugins. List every active plugin, what it does for the business, and whether anyone still uses it. Then choose a replacement in this order: a native Shopify feature, an app, custom work, or nothing at all.",
        ],
        table: {
          headers: ["WooCommerce plugin type", "Check native Shopify first", "If native is not enough"],
          rows: [
            ["SEO plugin (titles, meta, sitemaps)", "Built-in title and meta fields, automatic sitemap, URL redirects", "An SEO app for bulk edits or structured data"],
            ["Product reviews", "None for imported reviews", "A review app with import, such as one Shopify names"],
            ["WooCommerce Subscriptions", "Shopify's Subscriptions app", "A third-party subscription app with contract import"],
            ["Product add-ons and custom fields", "Metafields, metaobjects and theme blocks", "A product options app"],
            ["Multi-currency switcher", "Shopify Markets (local-currency checkout needs Shopify Payments or Adyen)", "Display-only converter apps where checkout currency can't change"],
            ["Wholesale or B2B pricing", "Native B2B features on every plan, with limits", "A wholesale app, or a separate store"],
            ["Shipping rates and labels", "Shopify shipping settings and carrier rates", "A shipping or label app"],
            ["Forms and quote requests", "The theme's built-in contact form", "A form or quote app"],
            ["Bookings, wishlists, loyalty", "Usually none", "A specialist app"],
            ["ERP, inventory or accounting connector", "Check the connector's Shopify version", "A connector app or custom integration"],
          ],
        },
        callout: {
          type: "tip",
          text: "Migration is a good moment to drop plugins nobody uses. Each app you add has a monthly cost, a script on the storefront and a support relationship, so only replace what earns its place.",
        },
      },
      {
        heading: "SEO and redirect plan",
        body: [
          "WooCommerce and Shopify use different URL structures, so most product and category URLs will change. Shopify recommends setting up redirects before you transfer the domain. Shopify can redirect only from URLs that are broken on the new store, URLs with query strings might not redirect as expected, and standard plans allow up to 100,000 redirects (20,000,000 on Plus), per the URL redirect documentation. Use Shopify's sample redirect CSV as the template, so the column names match.",
        ],
        table: {
          headers: ["Typical WooCommerce URL", "Shopify URL", "Note"],
          rows: [
            ["/product/linen-shirt/", "/products/linen-shirt", "Keep the same handle where you can"],
            ["/product-category/shirts/", "/collections/shirts", "Nested categories map to the closest collection"],
            ["/product-tag/summer/", "The closest collection", "Only redirect tags with traffic or links"],
            ["/about-us/", "/pages/about-us", "All static pages sit under /pages/"],
            ["/how-to-wash-linen/ (blog post)", "/blogs/news/how-to-wash-linen", "Use your blog's handle if it isn't news"],
            ["/my-account/", "/account", "Point to the account entry page"],
            ["Discontinued product", "Closest product or collection", "Not the homepage"],
          ],
        },
        checklist: [
          "Crawl the WooCommerce site and export every URL, including images if they get image-search traffic.",
          "Add Search Console and analytics data so you know which URLs earn traffic, links or revenue.",
          "Carry over titles, meta descriptions, product copy and alt text for important pages.",
          "Build the redirect CSV, import it before the domain moves, and spot-check it on the Shopify preview.",
          "Update internal links in content and menus to the new URLs rather than relying on redirects.",
          "Record a baseline of organic traffic, top landing pages and conversion by device before launch.",
        ],
      },
      {
        heading: "Cutover runbook",
        body: [
          "The cutover is the window when orders could land on the wrong system. Plan it as a sequence with named owners. The timing below assumes a store of moderate size with a delta sync of new orders and customers; adjust it to your volumes.",
        ],
        table: {
          headers: ["When", "Step", "Owner"],
          rows: [
            ["Two to three weeks before", "Full trial import into Shopify; check record counts against WooCommerce; fix mapping errors", "Migration lead"],
            ["One to two weeks before", "Test orders with each payment method, shipping zone, discount and gift card; test customer sign-in", "Store manager"],
            ["One week before", "Freeze catalog changes and plugin updates on WooCommerce; final redirect map signed off", "Owner and SEO lead"],
            ["Cutover day, start", "Put WooCommerce checkout on hold or maintenance; export new orders and customers since the trial import", "Migration lead"],
            ["Cutover day, middle", "Delta import; reconcile gift card and store credit balances; import redirects", "Migration lead"],
            ["Cutover day, end", "Point the domain to Shopify; remove the storefront password; place a live order and refund it", "Developer"],
            ["After launch", "Keep WooCommerce and its database read-only for reference until history and accounts are verified", "Owner"],
          ],
        },
      },
      {
        heading: "Post-launch checks",
        body: [],
        checklist: [
          "Live test orders through each payment method and shipping method, then refund them.",
          "Order, shipping and account emails send correctly and reach customers.",
          "Top 100 old URLs return a single 301 to the right page, with no chains.",
          "Search Console shows the new sitemap processed; 404s are checked daily for the first weeks and redirect gaps fixed.",
          "Analytics and ad pixels record purchases once, with the right value and currency.",
          "Imported customers can sign in with an email code and see their history.",
          "Reviews display on the right products, and feeds and marketplaces sync.",
          "Organic traffic, conversion by device and support contacts compared with the baseline weekly.",
        ],
      },
      {
        heading: "Hypothetical example: a homeware store with 900 products",
        body: [
          "**This example is hypothetical.** A homeware brand on WooCommerce has 900 products, some rugs with four attributes (size, colour, material and pile), a reviews plugin, a subscription plugin for refills and a blog that drives a share of organic traffic. Its mapping table shows the rugs would lose an option, so pile becomes a metafield shown on the product page. Reviews are imported through a review app, and refill subscriptions move to a subscription app after the payment provider confirms how saved cards can be transferred. The team builds a redirect file covering product, category, tag and blog URLs, runs a trial import two weeks before launch, and tests customer sign-in on a development store. On cutover day it imports only the orders and customers created since the trial, imports redirects, and moves the domain.",
        ],
      },
      {
        heading: "When to delay the move, or not make it",
        body: [
          "Shopify suits most product catalogs, but the migration is harder than it looks when the store depends on things Shopify handles differently. Pause and scope carefully if your products need more than three options that each change price or stock, if your checkout relies on custom WooCommerce code that you can't recreate with Shopify's checkout extensibility, if subscriptions make up much of revenue and your payment provider can't move saved payment details, or if a peak trading period is weeks away. If you sell to trade buyers, check [[/blogs/shopify-for-b2b-ecommerce|Shopify's B2B plan limits]] before committing. In those cases, a later launch date, a phased move or a different platform can be the better call.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Trusting a one-click import without checking record counts and a sample of products by hand.",
          "Discovering the three-option limit after import.",
          "Assuming reviews and order history come across with the products.",
          "Sending password reset emails that do not match how the new store signs customers in.",
          "Redirecting every old URL to the homepage.",
          "Leaving imports running with staff new-order notifications switched on.",
          "Replacing every plugin with an app without asking if the feature is still needed.",
          "Launching just before a sale or peak season.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Shopify Help Center: Migrating from WooCommerce; Importing WooCommerce data; Adding variants; Customer accounts; URL redirects.",
          "Shopify changelog: Product variant limit increased to 2,048 (15 October 2025); Legacy customer accounts are now deprecated (26 February 2026).",
          "Shopify App Store: Store Migration (vendor listing).",
          "Accessed 14 October 2026. Shopify's tools, limits and account features change; check the current documentation before you migrate.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A WooCommerce to Shopify migration keeps its data when every type of data has a decision before import: what moves, how, and what changes shape on the way. Start with the mapping table, fix products that exceed three options, line up apps for reviews, history and subscriptions, test customer sign-in, and build the redirect map before the domain moves. For the data-cleaning side in more depth, see [[/blogs/ecommerce-data-migration|ecommerce data migration]].",
          "Next steps: fill in the mapping table with your record counts, list your plugins against the checklist, and run a trial import into a development store.",
        ],
        cta: {
          title: "Want a second pair of eyes on your migration plan?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/shopify-development|Shopify builds and migrations]] and [[/services/website-development|content and integration work]]. If useful, we can review your data mapping, plugin list and redirect plan before you import.",
        },
      },
    ],
  },
  {
    slug: "shopify-for-b2b-ecommerce",
    title: "Is Shopify Right for B2B Ecommerce? What Wholesale Businesses Should Evaluate",
    seoTitle: "Is Shopify Right for B2B Ecommerce? What to Evaluate",
    excerpt:
      "Shopify B2B now runs on every plan, with limits. What each plan includes, what B2B doesn't support, store setup options and when another platform fits.",
    category: "Shopify & Ecommerce",
    banner: "decisiontree",
    sceneKind: "orders",
    bannerAlt:
      "Decision path for B2B on Shopify: native B2B on one store, a separate wholesale store, a wholesale app, or a B2B platform or custom build, chosen by catalog, pricing, ordering and ERP needs",
    date: "2026-10-14",
    readingTime: "10 min read",
    relatedServiceSlugs: ["shopify-development", "website-development"],
    relatedIndustrySlugs: ["b2b-enterprise", "manufacturing", "retail", "d2c-consumer"],
    relatedSlugs: ["wholesale-ecommerce-website", "b2b-ecommerce-website-development", "shopify-plus-vs-shopify"],
    faqs: [
      {
        q: "Do I need Shopify Plus for B2B?",
        a: "Not for the core features. Since 2 April 2026, Basic, Grow and Advanced include company profiles, payment terms, volume pricing, vaulted credit cards and up to three active B2B catalogs. You need Plus for unlimited catalogs, assigning catalogs directly to companies and locations, deposits and partial payments.",
      },
      {
        q: "How many price lists can I have on a non-Plus plan?",
        a: "Basic, Grow and Advanced allow three active B2B catalogs, assigned through Shopify Markets, and the store must use the new Shopify Markets. If you need a different price list per customer or more than three pricing groups, that points to Plus, an app or another approach.",
      },
      {
        q: "Can trade customers apply for a wholesale account on Shopify?",
        a: "Shopify's B2B features include a company account request form that customers can submit on your online store. You then review the request and set up the company. Check whether its fields and review process fit your credit checks before relying on it.",
      },
      {
        q: "Can B2B buyers pay with Shop Pay or Apple Pay?",
        a: "Shopify lists accelerated checkouts, including Shop Pay, Apple Pay, Google Pay and Amazon Pay, as not compatible with B2B, and Shop Pay, Shop Cash and Shop Pay Installments as incompatible B2B payment methods. B2B buyers typically pay by card, payment terms, bank transfer or another manual method.",
      },
      {
        q: "What is the largest order a B2B buyer can place?",
        a: "Shopify orders and draft orders have a maximum of 500 line items. A buyer ordering more than 500 different products or variants in one order needs to split it.",
      },
      {
        q: "Should wholesale run on the same Shopify store as retail?",
        a: "It depends on stock and access. A blended store shares inventory and apps and can't be gated to trade buyers only. A dedicated store keeps inventory separate and can be gated, but apps and integrations must be set up and paid for again. Shopify notes the choice is not easy to change later.",
      },
    ],
    content: [
      {
        heading: "Is Shopify a good fit for B2B?",
        body: [
          "**Shopify is a good fit for many wholesale and trade businesses that sell from a defined catalog, at a few price levels, on standard payment terms, and especially for brands that also sell direct to consumers. Since April 2026 the core B2B features are on every plan, not only Plus. It is a weaker fit when each customer needs its own price list without Plus, when orders run past 500 lines, or when buyers expect quotes, procurement approvals, punchout or EDI built in.**",
          "This guide is for founders and operations leads at distributors, manufacturers and brands with a trade channel. It covers what each Shopify plan includes for B2B, what it doesn't support, how to set up the store, and when another route is better, whether you configure it yourself or bring in [[/services/shopify-development|Shopify development help]]. For designing the trade ordering experience itself, see [[/blogs/wholesale-ecommerce-website|building a wholesale ordering site]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Companies, payment terms, volume pricing, vaulted cards and up to three B2B catalogs are on Basic, Grow and Advanced.",
          "Market-tailored B2B storefront and checkout need Advanced or Plus.",
          "Plus adds unlimited catalogs, direct catalog assignment, deposits and partial payments.",
          "B2B doesn't support Shop Pay and other express wallets, subscriptions, local delivery or orders over 500 line items.",
          "Choosing a blended or dedicated store is hard to reverse, so decide early.",
          "ERP integration usually decides the effort more than the storefront.",
        ],
      },
      {
        heading: "What each Shopify plan includes for B2B",
        body: [
          "Shopify moved its main B2B features to non-Plus plans on 2 April 2026. The table summarises the B2B plan features in the Shopify Help Center.",
        ],
        table: {
          headers: ["Plan", "B2B capability"],
          rows: [
            ["Basic, Grow, Advanced", "Companies and locations, payment terms, volume pricing (quantity rules and price breaks), vaulted cards, up to 3 active B2B catalogs"],
            ["Advanced and Plus", "Market-tailored (contextual) B2B storefront and checkout, through Shopify Markets"],
            ["Plus only", "Unlimited catalogs, direct catalog assignment to companies and locations, deposits and partial payments"],
          ],
        },
        checklist: [
          "**On every plan, also:** location-level permissions (location admin or ordering only), payment reminders, draft order to invoice, checkout to draft, easy reorders, PO numbers, sales staff permissions, the Trade theme with a quick order list, and Shopify Flow with B2B objects.",
          "**Payment terms offered:** Net 7, 15, 30, 45, 60 or 90 days, or due on fulfilment.",
          "**Catalog rule on non-Plus plans:** B2B catalogs require the new Shopify Markets, and they are assigned through markets rather than directly to a company.",
          "**ACH payments** are US only.",
        ],
        callout: {
          type: "note",
          text: "The three-catalog limit is the line most wholesale businesses hit first. Three catalogs cover tiers such as trade, distributor and key account. They do not cover a negotiated price list for every customer, which is what direct catalog assignment on Plus is for.",
        },
      },
      {
        heading: "What B2B on Shopify does not support",
        body: [
          "Shopify's B2B considerations page lists features that don't work with B2B. Check this list against how your trade buyers actually order before you commit.",
        ],
        checklist: [
          "Accelerated checkouts: Shop Pay, Apple Pay, Google Pay and Amazon Pay.",
          "Shop Pay, Shop Cash and Shop Pay Installments as B2B payment methods.",
          "Subscriptions, so repeat B2B supply can't run on subscription contracts.",
          "Local delivery, pickup points and tipping.",
          "Legacy customer accounts and checkout.liquid customisations.",
          "Some third-party apps; confirm each one with its developer.",
          "More than 500 line items in an order or draft order.",
          "Gift cards at B2B checkout are off by default and need Plus.",
        ],
      },
      {
        heading: "One store, separate store, app or another platform?",
        body: [
          "There are four realistic routes. The first two use Shopify's native B2B features. The store type guidance is clear on the trade-off: a blended store shares inventory and apps but can't be gated to trade buyers only, while a dedicated store keeps inventory separate and can be gated, but needs apps and integrations set up and paid for again. Shopify also says the choice is not easy to change later.",
        ],
        table: {
          headers: ["Route", "Fits when", "Watch for"],
          rows: [
            ["**Native B2B on one store (blended)**", "Same products for retail and trade; trade buyers log in to see their prices; a few price tiers", "Shared inventory, so you can't hold stock back for trade; the store can't be trade-only; payment methods differ by buyer type"],
            ["**Separate wholesale store**", "Trade-only access, separate stock, different catalog or team; Plus includes expansion stores", "Apps, integrations and setup duplicated; product data must stay in sync between stores"],
            ["**Wholesale app on a retail store**", "Needs the native features don't cover, such as specific pricing rules or order forms, and you accept an app dependency", "App cost and lock-in; how it handles checkout, taxes and your ERP; overlap with native B2B"],
            ["**B2B platform or custom build**", "Customer-specific pricing from the ERP in real time, quotes and approvals as core workflow, punchout or EDI, very large orders", "Longer build, higher running effort, and you own more of the security and hosting"],
          ],
        },
      },
      {
        heading: "B2B fit worksheet",
        body: [
          "Answer each question for your business. If most answers fall in the middle column, Shopify's native B2B is likely enough. Answers in the right-hand column are not automatic blockers, but each one needs a named solution (Plus, an app, an integration or another platform) before you commit.",
        ],
        table: {
          headers: ["Question", "Fits native Shopify B2B", "Needs a closer look"],
          rows: [
            ["How many distinct price lists?", "Three or fewer tiers", "A price list per customer, or many tiers (Plus, or pricing from the ERP)"],
            ["How do buyers pay?", "Card, payment terms, bank transfer", "Deposits or partial payments (Plus); express wallets"],
            ["How large are orders?", "Under 500 lines", "Regularly over 500 lines"],
            ["How do buyers order?", "Browse, quick order list, reorder", "Formal quotes, multi-step buyer approvals, punchout or EDI"],
            ["Who can see what?", "Trade prices hidden until login", "Whole store must be trade-only (dedicated store)"],
            ["Is stock shared with retail?", "Yes, one pool", "Stock must be reserved for trade"],
            ["Where are prices and credit managed?", "In Shopify, or synced daily", "Live from the ERP at checkout"],
            ["Do buyers subscribe to repeat supply?", "No", "Yes (B2B doesn't support subscriptions)"],
            ["Do storefront or checkout need to differ by market?", "No", "Yes (Advanced or Plus)"],
          ],
        },
      },
      {
        heading: "When Shopify is not the right choice",
        body: [
          "Shopify works best when the business adapts to its model. It is usually the wrong foundation when the B2B process is the product: when sales depend on negotiated quotes, buyer-side approval chains or procurement-system ordering. Shopify's plan matrix lists two location permissions (location admin and ordering only) and a checkout-to-draft option for merchant review, which is not the same as a buyer's manager signing off spend. See [[/blogs/b2b-approval-workflows|how B2B approval workflows work]] if this matters to you.",
        ],
        checklist: [
          "Buyers need punchout from their procurement system or EDI order exchange as a contract requirement.",
          "Every order starts as a request for quote that sales negotiates.",
          "Orders regularly exceed 500 line items.",
          "Prices, availability and credit must be calculated live by the ERP for each buyer.",
          "Hundreds of customer-specific price lists, and Plus isn't an option.",
          "Trade buyers expect subscriptions or express wallets at checkout.",
          "Complex configure-to-order products with rules that go well beyond three options.",
        ],
      },
      {
        heading: "Connecting Shopify B2B to your ERP",
        body: [
          "For most wholesale businesses, the ERP holds customers, prices, credit, stock and invoices, and Shopify takes the orders. Agree the system of record for each data type before choosing how to connect them. For the wider design questions, see [[/blogs/ecommerce-erp-integration|ecommerce ERP integration]].",
        ],
        table: {
          headers: ["Pattern", "Fits when", "Trade-offs"],
          rows: [
            ["Connector app for your ERP", "A maintained connector exists for your ERP and handles B2B companies, catalogs and terms", "Fastest; limited to what the connector maps; check B2B support specifically"],
            ["Integration platform (iPaaS) or middleware", "Several systems to connect, or mapping rules the connector can't express", "Flexible and monitored; extra subscription and someone to maintain flows"],
            ["Custom app on Shopify's APIs", "Unusual pricing, credit or fulfilment logic, or no suitable connector", "Most control; you own the code, monitoring and upgrades"],
          ],
        },
        checklist: [
          "**ERP owns:** customer accounts and credit limits, price lists, stock, invoices and payment status.",
          "**Shopify owns:** the buyer's online session, cart, checkout and order capture.",
          "**Decide:** which system creates the company record, how often prices and stock sync, and what happens when a sync fails mid-order.",
          "**Test:** a new company, a price change, an order on terms, a partial shipment and a credit hold, end to end.",
        ],
      },
      {
        heading: "Regional note: India-based stores",
        body: [
          "Shopify Payments is not available in India. Shopify documents vaulted cards under its Shopify Payments section of the B2B payment methods page, so an India-based store should confirm with its payment provider which B2B payment features, such as saved cards for later charges, actually work. Payment terms settled by bank transfer are a common alternative; confirm the exact setup on a development store. ACH is US only. Shopify Payments is available in the UAE, UK, Australia and Singapore, so these limits differ there.",
        ],
      },
      {
        heading: "Hypothetical example: a coffee roaster with cafe customers",
        body: [
          "**This example is hypothetical.** A coffee roaster sells beans to consumers and to 60 cafes. Cafes buy at three price levels, pay on Net 30, and reorder weekly from a short list. Retail and trade share the same roasted stock. The worksheet points to native B2B on the existing store: three catalogs cover the tiers, payment terms and quick reorder are on its current plan, and a blended store suits shared stock. Two cafe groups ask for monthly subscriptions, which B2B doesn't support, so those cafes reorder from their order history each month instead. Its accounting system receives orders and invoices through a connector, and the roaster revisits Plus only if it starts negotiating individual price lists.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Assuming B2B needs Plus, or assuming every B2B feature is on every plan.",
          "Designing ten price tiers before checking the three-catalog limit.",
          "Choosing a blended store, then discovering trade stock must be reserved.",
          "Installing a wholesale app on top of native B2B without checking which one controls pricing.",
          "Leaving ERP integration until after the storefront is built.",
          "Not testing the B2B checkout with each payment method buyers actually use.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Shopify changelog: Key B2B features now available on non-Plus plans (2 April 2026).",
          "Shopify Help Center: B2B plan features; B2B features; B2B considerations; Choosing a store type; B2B payment methods; Shopify Payments supported countries.",
          "Accessed 14 October 2026. Shopify changes plan features often; check the current plan features page before deciding.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Shopify is now a realistic B2B platform on any plan for businesses with a few price tiers, standard terms and ordering patterns that fit its checkout. Start with the plan table and the worksheet, decide blended or dedicated before you build, and plan the ERP connection early. If your answers point to customer-specific pricing at scale, deposits or partial payments, compare plans in [[/blogs/shopify-plus-vs-shopify|Shopify Plus vs Shopify]]. If they point to quotes, approvals, punchout or very large orders, read the [[/blogs/b2b-ecommerce-website-development|B2B ecommerce development guide]] and compare B2B platforms and custom builds.",
          "Next steps: fill in the worksheet with your sales and operations leads, list the payment methods trade buyers use, and confirm your ERP connector supports Shopify's B2B objects.",
        ],
        cta: {
          title: "Not sure which route fits your trade channel?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/shopify-development|Shopify B2B and wholesale builds]] and [[/services/website-development|ERP and custom integrations]]. If useful, we can talk through your pricing, ordering and ERP needs against Shopify's current plan limits.",
        },
      },
    ],
  },
];
