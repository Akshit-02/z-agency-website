import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch seven, part seven: Shopify Plus and
 * Hydrogen, and accessibility. Shopify Plus development, a three-way
 * comparison of Liquid themes, Hydrogen and other headless stacks,
 * ecommerce accessibility and the ecommerce accessibility checklist.
 * The plan comparison is `shopify-plus-vs-shopify`; Hydrogen itself is
 * `shopify-hydrogen`; headless concepts are `headless-shopify-explained`;
 * general web accessibility is `website-accessibility-guide`. Merged into
 * `posts` in blog-data.ts.
 */

export const commercePosts60: BlogPost[] = [
  // ---------------------------------------- 351 · SHOPIFY PLUS DEVELOPMENT
  {
    slug: "shopify-plus-development",
    title: "Shopify Plus Development: What Changes When You Build on Plus",
    seoTitle: "Shopify Plus Development: What Changes When You Build on Plus",
    excerpt: "What Shopify Plus development involves: checkout extensibility, Shopify Functions, B2B, expansion stores, automation, integrations, headless options and governance.",
    category: "Shopify & Ecommerce",
    banner: "plusdev",
    bannerAlt:
      "Shopify Plus development in four columns: checkout (checkout extensibility, Branding API, UI extensions, pixels), Functions (discounts, delivery options, payment options, validation, highlighted), B2B (company accounts, catalogs, payment terms, deposits) and scale (expansion stores, Launchpad, Hydrogen, integrations).",
    date: "2026-09-29",
    readingTime: "18 min read",
    relatedServiceSlugs: ["shopify-development", "website-development", "ai-automation"],
    relatedIndustrySlugs: ["ecommerce", "retail", "d2c-consumer"],
    faqs: [
      { q: "What is Shopify Plus development?", a: "Building and extending stores on Shopify's enterprise plan, using capabilities such as checkout UI extensions on all checkout steps, Shopify Functions in custom apps, B2B features, expansion stores, Launchpad and automation, alongside standard theme and app development." },
      { q: "What can developers do on Plus that they can't on other plans?", a: "According to Shopify's plan documentation, Plus includes checkout UI extensions on the information, shipping and payment steps, the Checkout Branding API, Shopify Functions in custom apps, advanced B2B features and expansion stores, among others. Check the current plan page, as features change." },
      { q: "Is checkout.liquid still used?", a: "No. Shopify has moved checkout customization to checkout extensibility (UI extensions, branding, Functions and pixels) and deprecated checkout.liquid." },
      { q: "What are Shopify Functions?", a: "Custom backend logic that runs on Shopify's infrastructure to customize discounts, delivery options, payment options, cart and checkout validation and more. Public apps with Functions are available on all plans; custom apps using Functions require Plus." },
      { q: "What B2B features does Plus include?", a: "Most B2B features are no longer Plus-only. Since April 2026, companies and locations, payment terms, volume pricing, vaulted cards and up to three B2B catalogs are on Basic, Grow and Advanced, and market-tailored B2B storefront and checkout are on Advanced and Plus. Plus adds unlimited catalogs, direct catalog assignment to companies and locations, deposits and partial payments, plus expansion stores for a dedicated B2B store, per Shopify's documentation." },
      { q: "What are expansion stores?", a: "Additional stores included with Plus, used for international markets, separate brands or B2B wholesale. Shopify's documentation lists up to nine expansion stores." },
      { q: "Does Plus require headless?", a: "No. Most Plus stores use Liquid themes. Hydrogen and other headless approaches are options where they're justified. Oxygen hosting is available on all paid plans; Plus gets 25 public Oxygen environments, against 1 on other paid plans." },
      { q: "What is Launchpad?", a: "A Plus tool for scheduling and automating events such as sales and product launches, including theme changes, discounts and product visibility." },
      { q: "How is development governed on Plus?", a: "With staff permissions, development and staging stores, version control for themes and apps, code review, and change processes for checkout and Functions, which affect every order." },
      { q: "When is Plus worth it?", a: "When your business needs Plus-only capabilities (checkout customization, custom Functions, advanced B2B, expansion stores, higher limits) and the value outweighs the cost. See our Plus vs Shopify comparison." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Shopify Plus development adds enterprise capabilities to normal theme and app work: checkout customization through checkout extensibility (including UI extensions on the information, shipping and payment steps), Shopify Functions in custom apps for discounts, delivery, payment and validation logic, advanced B2B (unlimited catalogs, direct catalog assignment, deposits and partial payments, on top of the B2B features every plan now has), expansion stores, Launchpad and automation. Headless with Hydrogen is optional. Because checkout and Functions affect every order, Plus projects need stronger governance: staging stores, version control, code review and careful release management.",
        ],
      },
      {
        heading: "What Plus Changes for Development",
        body: [
          "Most Shopify development looks the same on any plan: themes, sections, metafields, apps and integrations. Plus adds extension points and scale features that change what's possible, especially in checkout and business logic. It also raises the stakes: Plus stores are usually larger, with more integrations, markets and teams.",
          "This article focuses on the development work. For whether you need Plus at all, see [[/blogs/shopify-plus-vs-shopify|Shopify Plus vs Shopify]]. For headless options, see [[/blogs/shopify-hydrogen|Shopify Hydrogen development]] and [[/blogs/shopify-hydrogen-vs-traditional-shopify|Hydrogen vs traditional Shopify]].",
        ],
        table: {
          headers: ["Area", "Plus capability (per Shopify's plan documentation)", "Development work"],
          rows: [
            ["Checkout", "Checkout UI extensions on all steps, Checkout Branding API", "Extensions, branding, pixels"],
            ["Business logic", "Shopify Functions in custom apps", "Discount, delivery, payment, validation Functions"],
            ["B2B", "Unlimited and directly assigned catalogs, deposits, partial payments (core B2B is on all plans)", "B2B storefront, ERP integration"],
            ["Stores", "Expansion stores (up to nine)", "Multi-store architecture, shared code"],
            ["Automation", "Launchpad, Shopify Flow", "Campaign scheduling, workflows"],
            ["Headless", "25 public Oxygen environments (1 on other paid plans)", "Optional custom storefronts"],
            ["Operations", "Unlimited staff, more locations", "Permissions, governance"],
          ],
        },
      },
      {
        heading: "Checkout Extensibility",
        body: [
          "Checkout is customized through checkout extensibility rather than editing checkout code. The pieces are branding (colours, fonts, layout options via the checkout editor and the Checkout Branding API), checkout UI extensions (app-based components rendered at defined points in checkout), Shopify Functions (backend logic) and web pixels for tracking. Checkout UI extensions on the information, shipping and payment steps require Plus; extensions on the thank-you and order status pages are available more widely.",
          "Extensions run in a sandbox with a defined set of components, which keeps checkout secure and upgrade-safe but limits arbitrary changes. Design within those components. Typical extensions include delivery instructions, gift messages, loyalty point displays, trust or returns messaging and B2B purchase order fields. See [[/blogs/shopify-checkout-optimization|Shopify checkout optimization]].",
        ],
        checklist: [
          "Checkout branding configured in the editor or via the Branding API",
          "UI extensions built as app extensions, versioned and reviewed",
          "Functions tested with realistic carts and edge cases",
          "Pixels configured for analytics with consent respected",
          "Accessibility of extension content checked",
          "Performance and error monitoring for extensions",
        ],
      },
      {
        heading: "Shopify Functions",
        body: [
          "Functions let developers customize backend logic that runs on Shopify's infrastructure: discount logic, delivery option customization (renaming, hiding, reordering), payment method customization, cart and checkout validation, and more. They're written in languages that compile to WebAssembly, run within strict performance limits and are deployed through apps. On Plus, merchants can use Functions in custom apps built just for their store; public apps with Functions are available on all plans.",
          "Because Functions affect pricing, delivery and payment for every checkout, treat them as critical code: write tests for edge cases (mixed carts, B2B customers, markets, zero-value items), roll out carefully and monitor errors.",
        ],
        table: {
          headers: ["Function type", "Example use"],
          rows: [
            ["Discounts", "Tiered discounts, bundle pricing, B2B-specific offers"],
            ["Delivery customization", "Hide express shipping for oversized items"],
            ["Payment customization", "Hide cash on delivery above a threshold"],
            ["Cart and checkout validation", "Enforce minimum order quantities for B2B"],
            ["Cart transform", "Bundles shown as components"],
          ],
        },
        cta: {
          title: "Planning Plus-specific development?",
          description: "ZSpace Labs builds checkout extensions, Shopify Functions and B2B setups for Shopify Plus stores.",
        },
      },
      {
        heading: "B2B: What Plus Adds",
        body: [
          "Since April 2026, Shopify's core B2B features are on every plan, not only Plus: company accounts with locations, volume pricing and quantity rules, payment terms, vaulted cards and up to three B2B catalogs on Basic, Grow and Advanced. Market-tailored B2B storefront and checkout need Advanced or Plus. What Plus adds is unlimited catalogs, direct catalog assignment to companies and locations, deposits and partial payments (Shopify changelog, 2 April 2026, and Shopify Help Center). On Plus, B2B can run in the same store as direct-to-consumer (blended) or in a dedicated expansion store. Development work typically includes the B2B buyer experience in the theme, quick order and reorder tools, and ERP integration for accounts, pricing and orders. See [[/blogs/b2b-ecommerce-website-development|B2B ecommerce development]], and for which plan a wholesale model actually needs, [[/blogs/shopify-for-b2b-ecommerce|Shopify for B2B ecommerce]].",
        ],
      },
      {
        heading: "Expansion Stores and Multi-Store Architecture",
        body: [
          "Plus includes expansion stores that can serve different markets, brands or B2B. Shopify Markets can handle many international needs in a single store, so choose multiple stores only where there's a reason: different catalogs, operations, legal entities or brand experiences. When running several stores, share theme code through version control, keep apps and settings consistent where possible, and plan how product and inventory data are synchronized. See [[/blogs/shopify-markets|Shopify Markets]].",
        ],
        table: {
          headers: ["Situation", "Single store with Markets", "Expansion stores"],
          rows: [
            ["Same catalog, different currencies and languages", "Usually suitable", "Rarely needed"],
            ["Different catalogs or pricing strategy per region", "Possible with catalogs", "Often simpler"],
            ["Separate legal entities or operations", "Complex", "Common choice"],
            ["Separate brand", "Not suitable", "Suitable"],
            ["Dedicated B2B experience", "Blended B2B possible", "Dedicated B2B store"],
          ],
        },
      },
      {
        heading: "Automation: Launchpad and Flow",
        body: [
          "Launchpad schedules events such as sales and launches: switching themes, publishing products, applying discounts and reverting afterwards. Shopify Flow automates workflows triggered by events (orders, inventory changes, customer tags). Together they reduce manual work around campaigns and operations. Document automations and assign owners, since invisible automations cause confusing behaviour later. See [[/blogs/ecommerce-merchandising-automation|merchandising automation]].",
        ],
      },
      {
        heading: "Integrations at Plus Scale",
        body: [
          "Plus stores often connect to ERP, warehouse management, PIM, CRM, marketing, tax and fraud systems. Design integrations for volume and reliability: use webhooks and bulk operations appropriately, respect API rate limits, handle retries and idempotency, and monitor failures. Decide which system owns each piece of data (products, inventory, prices, customers, orders) to avoid conflicting updates. See [[/blogs/ecommerce-erp-integration|ecommerce ERP integration]].",
        ],
      },
      {
        heading: "Headless and Hydrogen on Plus",
        body: [
          "Oxygen, Shopify's hosting for Hydrogen, is available on every paid plan, and Plus gets 25 public Oxygen environments against 1 on other paid plans (Shopify's Oxygen environments documentation). But headless is a choice, not a requirement. Most Plus stores are well served by Liquid themes, which keep theme apps, the theme editor and lower maintenance. Consider Hydrogen or another headless stack when there are clear needs such as highly custom experiences, complex content integration or multiple frontends, and the team to maintain them. See [[/blogs/shopify-hydrogen-vs-traditional-shopify|Hydrogen vs traditional Shopify]].",
        ],
      },
      {
        heading: "Governance and Release Management",
        body: [
          "Plus stores have many staff, apps and integrations, and changes to checkout or Functions affect every order. Set up governance: staff permissions by role, development and staging stores, themes and apps in version control with code review, a release process with testing for checkout and Functions, and monitoring after releases. Keep a record of installed apps, their permissions and owners.",
        ],
        checklist: [
          "Staff permissions reviewed by role",
          "Development and staging stores for testing",
          "Theme and app code in version control with review",
          "Checkout and Functions changes tested end to end",
          "Release notes and rollback plan",
          "App inventory with owners and access scopes",
          "Monitoring for errors, performance and conversion after releases",
        ],
      },
      {
        heading: "Performance and Accessibility",
        body: [
          "Plus doesn't make a slow theme fast. Theme performance still depends on code, images, apps and scripts. Audit apps that inject scripts, optimize images and fonts, and monitor Core Web Vitals. Checkout extensions and theme changes must also meet accessibility expectations; see [[/blogs/ecommerce-accessibility|ecommerce accessibility]].",
        ],
      },
      {
        heading: "Migrating Legacy Checkout Customizations",
        body: [
          "Stores that customized checkout before checkout extensibility often carry scripts and edits that no longer fit. Rather than recreating each one, list what each customization was for, check whether a native setting, app, UI extension or Function now covers it, and drop what's no longer needed. Tracking scripts move to web pixels; field additions move to UI extensions; discount and shipping logic moves to Functions. Test the new checkout end to end before switching and compare completion rates after.",
        ],
        table: {
          headers: ["Old customization", "Checkout extensibility approach"],
          rows: [
            ["Custom tracking scripts", "Web pixels (app or custom) with consent"],
            ["Extra fields and messages", "Checkout UI extensions"],
            ["Custom discount logic", "Discount Functions"],
            ["Hiding or renaming shipping methods", "Delivery customization Functions"],
            ["Hiding payment methods", "Payment customization Functions"],
            ["Styling", "Checkout editor and Branding API"],
          ],
        },
      },
      {
        heading: "Plus Project Phases",
        body: [
          "Plus projects benefit from phasing, since checkout, B2B and integrations each carry risk. A typical sequence is discovery and architecture (which Plus features, which stores, which integrations), foundation (theme, data, integrations), checkout and Functions, B2B if relevant, automation, then optimization. Each phase ends with testing and a release, rather than a single large launch.",
        ],
        checklist: [
          "Discovery: requirements, Plus features to use, store architecture",
          "Foundation: theme, product data, core integrations",
          "Checkout: branding, extensions, Functions, pixels",
          "B2B: companies, catalogs, terms, ERP sync",
          "Automation: Flow, Launchpad",
          "Optimization: measurement, testing, performance",
        ],
      },
      {
        heading: "Choosing a Plus Development Partner",
        body: [
          "Look for experience with checkout extensibility and Functions (not only themes), integration work at your scale, a release and testing process, and willingness to recommend native features or existing apps before custom builds. Ask how they handle version control, staging, monitoring and handover documentation, and who will maintain custom apps after launch.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Moving to Plus without a plan to use Plus capabilities",
          "Rebuilding old checkout.liquid customizations instead of redesigning within extensibility",
          "Untested Functions affecting pricing or delivery",
          "Multiple stores where Markets would do",
          "Going headless without a maintenance plan",
          "No governance for staff, apps and releases",
        ],
        cta: {
          title: "Ready to build on Shopify Plus?",
          description: "Talk to ZSpace Labs about [[/services/shopify-development|Shopify Plus development]], [[/services/website-development|integrations and headless builds]] and [[/services/ai-automation|workflow automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Shopify Plus development is mostly about checkout extensibility, Functions, B2B, multi-store architecture, automation and governance. Use Plus capabilities deliberately, test anything that touches checkout, and choose headless only when justified. Related: [[/blogs/shopify-plus-vs-shopify|Shopify Plus vs Shopify]] and [[/blogs/headless-shopify-explained|headless Shopify explained]]. If you are still choosing between Plus and a bespoke platform, see [[/blogs/shopify-plus-vs-custom-ecommerce|Shopify Plus vs custom ecommerce]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 354 · HYDROGEN VS TRADITIONAL SHOPIFY
  {
    slug: "shopify-hydrogen-vs-traditional-shopify",
    title: "Shopify Hydrogen vs Traditional Shopify: Is Headless Worth It?",
    seoTitle: "Hydrogen vs Traditional Shopify: Is Headless Worth It?",
    excerpt: "Liquid theme, Hydrogen or your own Storefront API build? What Hydrogen 2026-10 changed, Oxygen limits, apps, Markets and a cost worksheet to fill in.",
    category: "Shopify & Ecommerce",
    banner: "headlessshopify",
    sceneKind: "compare",
    bannerAlt:
      "A Liquid theme compared with a headless Shopify storefront. On the theme side, Shopify renders every page and the theme editor handles content. On the headless side, your own front end (Hydrogen or Next.js), a CMS, search and hosting sit on the Storefront API. Checkout and Shopify core stay on Shopify in both: one system to run versus more freedom and more to own.",
    date: "2026-09-29",
    updated: "2026-10-15",
    readingTime: "12 min read",
    relatedServiceSlugs: ["shopify-development", "website-development", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "retail", "fashion-apparel"],
    relatedSlugs: ["headless-shopify-explained", "shopify-hydrogen", "headless-ecommerce-architecture"],
    faqs: [
      { q: "What is traditional Shopify?", a: "A store using an Online Store theme built with Liquid. Shopify hosts and renders it, your team edits it in the theme editor, and apps add features through theme app extensions." },
      { q: "What is Shopify Hydrogen now?", a: "Since Hydrogen 2026-10, released on 14 October 2026, Shopify describes it as a framework-agnostic JavaScript library for adding Shopify commerce to an existing stack, with starters for React Router and Next.js. Earlier versions were React Router apps. Shopify says existing Hydrogen storefronts keep working as they do now." },
      { q: "Is Hydrogen still tied to React Router?", a: "Not any more. React Router is one of two starters; Next.js is the other. If your storefront was built on an earlier version, it keeps working, but Shopify recommends migrating older storefronts, so plan for that in your roadmap." },
      { q: "Is Oxygen hosting free?", a: "Shopify's documentation says Oxygen is available at no extra charge on paid plans, including Starter, and on development stores, Plus Partner Sandbox stores and trial plans. It isn't available on Agentic plans. Plus gets 25 public environments; other paid plans get 1." },
      { q: "Does checkout change with headless?", a: "No. Shopify's Help Center says customers on a custom storefront check out using the Shopify Checkout. You still customise it through checkout extensibility, with the same plan limits as a theme store." },
      { q: "Do Shopify apps work on a headless storefront?", a: "Back-office apps usually do. Apps that add storefront features through theme app extensions don't, because Shopify documents those extensions as integrating with Online Store 2.0 themes. You need the app's API or SDK, or a rebuild of the feature." },
      { q: "Is headless faster than a Liquid theme?", a: "Not automatically. Headless gives you more control over rendering, caching and scripts, and more ways to get them wrong. Compare measured performance of a prototype against your current theme rather than relying on the label." },
      { q: "Can I use Shopify Markets with a headless storefront?", a: "Yes. The Storefront API returns local prices and filters products by country when you pass a country context, and the cart takes a buyer country. You have to build the routing, such as country subfolders or domains, in your own front end." },
      { q: "Can I run more than one headless storefront?", a: "Yes. Shopify's Headless channel allows up to 100 active storefronts and access tokens per shop, and each storefront is treated as its own channel for product publishing and order attribution. Public Oxygen environments are a separate limit set by your plan." },
      { q: "Can I switch back to a theme later?", a: "Yes. Products, customers, orders and checkout stay in Shopify, so only the front end changes. Plan URLs and redirects, tracking, content migration and app replacements as you would for any migration." },
    ],
    content: [
      {
        heading: "Should You Go Headless on Shopify?",
        body: [
          "For most stores, no. A Liquid theme is hosted by Shopify, edited by merchandisers in the theme editor, extended by theme apps and maintained with the least engineering. Headless earns its cost when the storefront itself must do something a theme can't do well, such as a complex configurator, content-led commerce from a separate CMS or several front ends sharing one catalogue, and when you can fund a web team to run it for years.",
          "The choice also changed on 14 October 2026. Hydrogen 2026-10 turned Hydrogen from a React Router framework into a library you can add to React Router or Next.js. So the realistic options are now a Liquid theme, the Hydrogen library on your chosen framework (hosted on Oxygen or elsewhere), or your own build on the Storefront API without Hydrogen. In every case, checkout, orders and products stay on Shopify.",
        ],
      },
      {
        heading: "Key Takeaways",
        body: [],
        checklist: [
          "Hydrogen 2026-10 is a framework-agnostic library with React Router and Next.js starters; existing Hydrogen storefronts keep working.",
          "Oxygen is included on every paid plan from Starter upward, but not on Agentic plans. Plus gets 25 public environments; other paid plans get 1.",
          "Theme app extensions work with Online Store 2.0 themes, so storefront apps need an API, SDK or rebuild when you go headless.",
          "The Storefront API has no fixed request limit for real buyer traffic, but it throttles checkout creation, and server-side calls should pass the buyer's IP.",
          "The main cost of headless is the team that keeps it running, not the hosting. Use the worksheet below with your own quotes.",
        ],
      },
      {
        heading: "What Changed With Hydrogen 2026-10",
        body: [
          "Shopify's changelog for 14 October 2026 describes the new Hydrogen as \"a framework-agnostic JavaScript library to add Shopify commerce to your existing stack\". React Router and Next.js have starters ready to deploy, and you \"can host it anywhere, including Oxygen, which is still free\". Existing Hydrogen storefronts \"keep working as they do now\".",
          "Two practical consequences follow. First, the old question \"Hydrogen or Next.js?\" mostly disappears: a Next.js team can now use Hydrogen. The real question is whether you use Shopify's library at all or write your own Storefront API layer. Second, much of Shopify's existing Hydrogen documentation, including the Oxygen and analytics pages cited here, is now labelled as covering \"Hydrogen versions 2026-04 and earlier\". Treat the limits below as the current documented position and check the latest docs before you sign a build contract. If an agency proposal still describes Hydrogen as \"React Router only\", ask how it accounts for the new version.",
        ],
        callout: {
          type: "note",
          text: "Hydrogen 2026-10 was released one day before this update. Expect the documentation, starters and agency advice to keep changing for a while. Ask any partner which Hydrogen version and API version they will build on.",
        },
      },
      {
        heading: "The Three Options in 2026",
        body: [
          "The table compares the three routes. \"Rebuild\" means your team writes the feature; \"integrate\" means connecting a third-party service or an app's API.",
        ],
        table: {
          headers: ["", "Liquid theme", "Hydrogen library (React Router or Next.js)", "Storefront API without Hydrogen"],
          rows: [
            ["What you build", "Theme sections and blocks in Liquid, CSS and JavaScript", "A web app on your framework, using Shopify's library for commerce", "A web app plus your own Shopify data layer"],
            ["Hosting", "Shopify", "Oxygen (included on paid plans) or your own host", "Your own host"],
            ["Content editing", "Theme editor", "A CMS or custom tooling", "A CMS or custom tooling"],
            ["Storefront apps", "Theme app extensions work", "API or SDK integration, or rebuild", "API or SDK integration, or rebuild"],
            ["Checkout", "Shopify Checkout", "Shopify Checkout", "Shopify Checkout"],
            ["Team", "Theme developer, merchandisers", "Web developers on your framework, plus someone to run deployments", "As Hydrogen, with more Shopify-specific code to own"],
            ["Ongoing upkeep", "Lowest", "Higher", "Highest"],
          ],
        },
      },
      {
        heading: "What Changes When You Go Headless",
        body: [
          "This is the matrix to take into a scoping call. For each row, ask the agency or your team which of native, rebuild or integrate applies, and who maintains it afterwards.",
        ],
        table: {
          headers: ["Feature", "Liquid theme", "Hydrogen library", "Own Storefront API stack"],
          rows: [
            ["Checkout", "Native (Shopify Checkout)", "Native (Shopify Checkout)", "Native (Shopify Checkout)"],
            ["Storefront apps (reviews, bundles, back-in-stock)", "Native via theme app extensions", "Integrate via app API or SDK, or rebuild", "Integrate via app API or SDK, or rebuild"],
            ["Content and layout editing", "Native (theme editor)", "Integrate a CMS", "Integrate a CMS"],
            ["Markets (prices, currencies, availability)", "Native", "Rebuild routing; prices via API context", "Rebuild routing; prices via API context"],
            ["Customer accounts", "Native", "Rebuild with the Customer Account API", "Rebuild with the Customer Account API"],
            ["Analytics and consent", "Native via theme and pixels", "Rebuild using Shopify's patterns and the Customer Privacy API", "Rebuild"],
            ["Search and filters", "Native (theme plus Search & Discovery)", "Rebuild via API or integrate a search service", "Rebuild via API or integrate a search service"],
            ["SEO basics (rendering, metadata, sitemaps, structured data, redirects)", "Mostly native", "Rebuild", "Rebuild"],
          ],
        },
      },
      {
        heading: "Oxygen: Which Plans Get It and How Many Environments",
        body: [
          "Oxygen is Shopify's hosting for Hydrogen storefronts. It is available at no extra charge on Starter, Basic, Grow, Advanced, Plus and Pause and build, and on development stores, Plus Partner Sandbox stores and trial plans. Shopify states that \"Oxygen isn't available on Agentic plans\".",
          "The plan decides how many public environments you get. Environments are private by default, so only people logged in to your store can see them; a public environment is one shoppers can reach.",
        ],
        table: {
          headers: ["Plan", "Oxygen available", "Public environments"],
          rows: [
            ["Starter, Basic, Grow, Advanced", "Yes", "1"],
            ["Shopify Plus", "Yes", "25"],
            ["Pause and build", "Yes", "1"],
            ["Plus Partner Sandbox stores", "Yes", "1"],
            ["Development stores and trial plans", "Yes", "0 (private only)"],
            ["Retail, nonprofit and custom plans", "Check with Shopify", "1"],
            ["Agentic plans", "No", "Not applicable"],
          ],
        },
      },
      {
        heading: "Oxygen Runtime Limits",
        body: [
          "Shopify documents these limits for Oxygen workers and deployments. Oxygen also runs your storefront as a Web Worker, not a Node server, so Node APIs aren't available. That matters if your build relies on Node-only libraries, or if a Next.js team assumes a Node environment.",
          "One public environment on most plans also means one live storefront on Oxygen. If you want a second public site, such as a separate brand or a campaign microsite, compare Plus with hosting the second site elsewhere.",
        ],
        checklist: [
          "Worker size: 10 MB or less",
          "Startup time: 400 milliseconds or less",
          "CPU time: 30 seconds per request",
          "Memory: 128 MB maximum",
          "Custom environment variables: 110",
          "Outbound API requests: must complete within 2 minutes",
          "Runtime logs: kept for up to one month, so connect a log drain for longer retention",
          "Deployments: accessible for at least six months, and the 10 most recent per environment are always kept",
        ],
      },
      {
        heading: "Storefront API Limits That Affect Your Build",
        body: [
          "Shopify says that \"requests from real buyers aren't subject to a fixed request-per-minute limit\", but it \"limits the amount of checkouts that can be created on the Storefront API per minute\". Over that limit, you get a throttled response, and Shopify suggests queuing with exponential backoff. Tokenless access has a query complexity limit of 1,000.",
          "When your server calls the API on behalf of a shopper, it should send the shopper's IP in the Shopify-Storefront-Buyer-IP header. Without it, Shopify says it \"can't differentiate requests from different buyers\", which can lead to throttling and weaker bot protection. Use a private token on the server and a public token only in the browser or app. Shopify releases a new API version every quarter and supports each stable version for at least 12 months, so a headless build needs a regular upgrade slot.",
        ],
      },
      {
        heading: "Apps, Markets and the Headless Channel",
        body: [
          "**Apps.** Shopify documents that theme app extensions \"can integrate with Online Store 2.0 themes\". Headless storefronts aren't mentioned, so any app that adds its feature only through a theme block won't appear on a headless site. Before committing, list every app that touches the storefront and ask each vendor whether it offers an API or headless SDK.",
          "**Markets.** With the @inContext(country:) directive, the Storefront API returns prices in that country's currency and filters out products not published there. Passing a country in the cart's buyerIdentity sets the cart's estimated cost. Each country's currency must be enabled in payment settings, or prices fall back to the store currency. The guide doesn't cover domains or subfolders, so expect to build country routing, language switching and hreflang yourself. See [[/blogs/shopify-markets|Shopify Markets]] for how a theme store handles this.",
          "**Headless channel.** A shop can have up to 100 active storefronts and access tokens, and Storefront and Admin API permissions are shared across them. Since January 2025, each Headless storefront is a separate channel for product publishing and order attribution, so publish products to every storefront that should sell them.",
          "**Analytics and consent.** Shopify's Hydrogen analytics guide offers patterns for sending storefront metrics to Shopify analytics, and says you must handle consent before tracking, recommending the Customer Privacy API and Shopify's cookie banner. On a theme, much of this is wired in. Headless, you test it. The [[/blogs/shopify-analytics-tracking-audit|Shopify tracking audit]] has a test procedure you can reuse after launch.",
        ],
      },
      {
        heading: "Total Cost of Ownership Worksheet",
        body: [
          "Headless moves money from licences and apps to engineering. This worksheet has no prices on purpose: fill it in with your own quotes and salaries for each option, over three years, and compare totals. A blank in the \"Owner\" column is a risk in itself.",
        ],
        table: {
          headers: ["Cost line", "One-off", "Monthly or yearly", "Owner", "What to ask"],
          rows: [
            ["Front-end build", "", "", "", "Which Hydrogen and API version? What is out of scope?"],
            ["CMS licence and set-up", "", "", "", "Per-seat or usage pricing? Who models the content?"],
            ["Hosting", "", "", "", "Oxygen (included on paid plans) or another host? How many public environments?"],
            ["Monitoring and logging", "", "", "", "Where do logs go after Oxygen's one-month retention?"],
            ["App replacements", "", "", "", "Which storefront apps need an API, SDK or rebuild?"],
            ["Search, reviews and other services", "", "", "", "Do any charge by traffic or catalogue size?"],
            ["Markets and localisation", "", "", "", "Who builds country routing, languages and hreflang?"],
            ["Analytics and consent rebuild", "", "", "", "Who tests events and consent after each release?"],
            ["Quarterly API and framework upgrades", "", "", "", "Is there a standing upgrade slot every quarter?"],
            ["Feature work and fixes", "", "", "", "In-house hours or retainer? What happens if the lead developer leaves?"],
          ],
        },
        cta: {
          title: "Weighing an agency's headless quote?",
          description: "ZSpace Labs can run a headless readiness review against your apps, markets and team, and tell you plainly if a theme would do the job.",
        },
      },
      {
        heading: "Decision Guide",
        body: [],
        table: {
          headers: ["If you...", "Consider"],
          rows: [
            ["Have a small team and your needs fit themes and apps", "Liquid theme"],
            ["Rely on several storefront apps without headless SDKs", "Liquid theme, or budget for replacements"],
            ["Want merchandisers to change layouts without developers", "Liquid theme, or headless with a strong CMS"],
            ["Already run React Router or Next.js across your sites and need custom commerce experiences", "Hydrogen library on that framework"],
            ["Need several front ends (web, app, in-store screens) from one catalogue", "Hydrogen library or your own Storefront API layer"],
            ["Have strict requirements Hydrogen doesn't fit, and a team to own the data layer", "Storefront API without Hydrogen"],
          ],
        },
      },
      {
        heading: "When Headless Is the Wrong Choice",
        body: [
          "Headless is a poor fit when the main motivation is speed alone, when the team is one or two developers or an agency on an ad hoc basis, when daily merchandising depends on the theme editor, or when the store relies on storefront apps with no API. It is also risky during a busy trading period, because you are replacing every customer-facing page at once. A well-built theme with a few custom sections, a configurator embedded in a section, or metaobject-driven content pages often gets most of the benefit at a fraction of the upkeep. See [[/blogs/shopify-theme-development|Shopify theme development]] for that route.",
          "Hypothetical example: a fashion brand on Advanced uses a reviews app, a back-in-stock app and a size-guide app, all through theme blocks, and two merchandisers update the homepage weekly. An agency proposes Hydrogen on Next.js for speed. Running the matrix shows three app rebuilds, a CMS for the merchandisers and Markets routing for two countries, with no in-house developer to own upgrades. Unless the brand also has a feature a theme can't deliver, a theme performance project is the more proportionate first step.",
        ],
      },
      {
        heading: "Performance and SEO: You Own Both",
        body: [
          "Headless can be faster, because you control rendering, caching and scripts. It can also be slower, with heavy client-side JavaScript or poor caching. Prototype a product page and compare measured results with your current theme. On SEO, a theme gives you server-rendered pages, canonical tags and sitemaps by default; a headless storefront must implement rendering, metadata, canonical and hreflang tags, sitemaps, structured data, redirects and filtered URL handling deliberately. See [[/blogs/why-page-speed-still-decides-conversion|page speed and conversion]] and [[/blogs/ecommerce-faceted-navigation-seo|faceted navigation SEO]].",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Choosing headless for page speed alone",
          "Signing a quote that still describes Hydrogen as React Router only, without asking about 2026-10",
          "Discovering after launch that storefront apps relied on theme app extensions",
          "No owner for Oxygen logs, monitoring and quarterly API upgrades",
          "Forgetting to publish products to each Headless storefront channel",
          "Assuming Markets routing, hreflang and consent come for free",
        ],
      },
      {
        heading: "Conclusion and Next Steps",
        body: [
          "Stay on a Liquid theme unless you can name a storefront requirement a theme can't meet and a team to maintain the alternative. If you do go headless, Hydrogen 2026-10 makes the Shopify library usable on React Router or Next.js, Oxygen hosting is included on paid plans, and checkout stays on Shopify. Next steps: fill in the feature matrix and the cost worksheet with your own quotes, list every storefront app and its headless support, and check the latest Hydrogen docs for any limit you depend on. For background, read [[/blogs/headless-shopify-explained|headless Shopify explained]], [[/blogs/shopify-hydrogen|Shopify Hydrogen development]] and [[/blogs/headless-ecommerce-architecture|headless ecommerce architecture]].",
        ],
        cta: {
          title: "Want a second opinion before you commit?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/shopify-development|Shopify development]], including themes and headless builds. If useful, we can talk through a headless readiness review of your apps, markets and team.",
        },
      },
      {
        heading: "Sources",
        body: [
          "Hydrogen and Oxygen: Shopify changelog: Hydrogen 2026-10 is now available (14 October 2026); Shopify: Hydrogen fundamentals and Oxygen plans and limits; Shopify: Oxygen environments; Shopify: Oxygen deployments; Shopify: Oxygen runtime; Shopify: Hydrogen analytics.",
          "APIs, apps and channels: Shopify: Storefront API; Shopify: API versioning; Shopify: theme app extensions; Shopify: international pricing with the Storefront API; Shopify: manage Headless channels; Shopify changelog: unique publishing and order attribution per Headless storefront; Shopify Help Center: headless commerce.",
          "Accessed 15 October 2026. Several Hydrogen and Oxygen pages are labelled for Hydrogen 2026-04 and earlier; plans, limits and documentation change, so check the current pages before relying on them.",
        ],
      },
    ],
  },

  // ---------------------------------------- 355 · ECOMMERCE ACCESSIBILITY
  {
    slug: "ecommerce-accessibility",
    title: "Ecommerce Accessibility: How to Make an Online Store Usable for Everyone",
    seoTitle: "Ecommerce Accessibility: Make Your Store Usable for Everyone",
    excerpt: "Ecommerce accessibility across the shopping journey: WCAG 2.2, navigation, search, filters, product pages, cart, checkout, testing, and how legal duties vary.",
    category: "UI/UX",
    banner: "a11yjourney",
    bannerAlt:
      "Accessible store journey in a browser frame: skip link, visible focus and landmarks; labelled search; filters usable by keyboard and announced; images with alt text; variant buttons with names; add to cart with the status announced (highlighted); checkout with labels, errors in text and no time traps (highlighted); contrast and zoom to 200%; target size and no drag-only controls; and a note to test with keyboard and a screen reader on real journeys.",
    date: "2026-09-29",
    updated: "2026-10-10",
    readingTime: "19 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "retail", "fashion-apparel"],
    faqs: [
      { q: "What is ecommerce accessibility?", a: "Designing and building online stores so people with disabilities, including those using screen readers, keyboards, magnification, voice control or other assistive technologies, can browse, choose and buy products independently." },
      { q: "Which standard should ecommerce sites follow?", a: "WCAG (Web Content Accessibility Guidelines) is the widely used reference. WCAG 2.2 is the current W3C Recommendation, and Level AA is the common target." },
      { q: "Is accessibility a legal requirement for online stores?", a: "In many places, but requirements depend on jurisdiction, business size and sector. For example, the European Accessibility Act applies to many ecommerce services in the EU from 28 June 2025. Get legal advice for the markets you sell into." },
      { q: "What are the most common ecommerce accessibility problems?", a: "Missing alt text, poor contrast, keyboard traps in menus and modals, unlabelled form fields, inaccessible filters, variant selectors without names, add-to-cart feedback not announced, and checkout errors shown only by colour." },
      { q: "Can an accessibility overlay make my store compliant?", a: "Overlays don't fix underlying code problems and can interfere with assistive technologies. Fixing the site itself is the reliable approach." },
      { q: "How do I test ecommerce accessibility?", a: "Combine automated scans (which catch some issues), manual keyboard testing, screen reader testing on key journeys, zoom and contrast checks, and ideally testing with disabled users." },
      { q: "Are Shopify themes accessible?", a: "Shopify requires themes in its Theme Store to meet accessibility requirements, but customizations and apps can introduce problems. Test your actual store." },
      { q: "Does accessibility help conversion?", a: "Accessible patterns (clear labels, readable text, good error messages, keyboard support) usually help all shoppers. Measure the effect rather than assuming a specific uplift." },
      { q: "What's new in WCAG 2.2?", a: "Criteria including focus not obscured, dragging movements, minimum target size, consistent help, redundant entry and accessible authentication, several relevant to ecommerce checkout and accounts." },
      { q: "Who is responsible for accessibility?", a: "Everyone involved: designers, developers, content editors, merchandisers adding images and product copy, and whoever chooses apps and third-party tools." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An accessible online store lets people with disabilities complete the whole journey: find products, understand them, choose variants, add to cart and check out, using keyboards, screen readers, magnification or voice control. Use WCAG 2.2 Level AA as the reference, fix issues in the site's code and content rather than relying on overlays, and test real journeys with keyboard and screen readers as well as automated tools. Legal duties vary by jurisdiction; this guide covers good practice, not legal advice.",
        ],
      },
      {
        heading: "Why Accessibility Matters in Ecommerce",
        body: [
          "A store that can't be used with a keyboard or screen reader turns customers away at the point of purchase. Accessibility barriers are often concentrated in the most interactive parts of ecommerce: mega menus, filters, variant selectors, carousels, modals, carts and checkout forms. These are exactly where purchases are won or lost.",
          "Accessibility also overlaps with good UX. Clear labels, readable text, visible focus, helpful errors and predictable navigation help everyone, including people on phones in bright sunlight, older shoppers and people with temporary injuries. For general web accessibility, see [[/blogs/website-accessibility-guide|website accessibility guide]] and [[/blogs/accessible-ui-ux-design|accessible UI/UX design]].",
        ],
      },
      {
        heading: "Standards and Legal Context",
        body: [
          "WCAG, published by the W3C, is the most widely used technical reference. WCAG 2.2 is the current Recommendation and adds criteria for focus visibility, target size, dragging, consistent help, redundant entry and accessible authentication. Level AA is the common target in policies and regulations.",
          "Legal obligations depend on where you operate and sell. In the EU, the European Accessibility Act covers ecommerce services and has applied since 28 June 2025, with national laws implementing it and some exemptions, such as for microenterprises providing services. Other countries have their own laws, and case law varies. Treat WCAG as a technical guide and get legal advice on your specific obligations. See [[/blogs/ecommerce-compliance|ecommerce compliance]].",
        ],
      },
      {
        heading: "UK Retailers: Equality Act, EAA and Public Sector Rules",
        body: [
          "In England, Scotland and Wales, the Equality Act 2010 requires service providers, including online shops, to make reasonable adjustments so disabled people are not put at a substantial disadvantage. It sets no technical standard, and the duty is anticipatory and ongoing; WCAG 2.2 AA is the usual benchmark for showing what you have done. Northern Ireland has equivalent duties under the Disability Discrimination Act 1995.",
          "UK retailers that sell to consumers in the EU are within the European Accessibility Act for those services, even though it is not UK law. Separate regulations apply to public sector websites and apps, not to private retailers. In practice, audit the full journey (search, product pages, basket, checkout, account and returns), fix barriers in checkout first because they stop purchases, and keep a record of audits and fixes. Take legal advice on your specific obligations.",
        ],
      },
      {
        heading: "Accessibility Across the Journey",
        body: [],
        table: {
          headers: ["Stage", "Key requirements", "Common failures"],
          rows: [
            ["Navigation", "Skip link, landmarks, keyboard menus, visible focus", "Hover-only mega menus, focus lost"],
            ["Search", "Labelled input, accessible autocomplete", "Unlabelled icon, suggestions not announced"],
            ["Filters and sorting", "Keyboard operable, state announced, results count", "Custom checkboxes without roles"],
            ["Product listing", "Meaningful links, alt text, price read correctly", "Duplicate \"quick view\" links"],
            ["Product page", "Gallery controls, alt text, variant names, stock status", "Colour swatches without text names"],
            ["Add to cart", "Status announced, focus handled", "Silent mini cart, focus trapped"],
            ["Cart", "Quantity controls labelled, updates announced", "Icon-only buttons"],
            ["Checkout", "Labels, error text, no time traps, accessible payment", "Placeholder-only labels, colour-only errors"],
            ["Account and login", "Accessible authentication, password managers", "Puzzle CAPTCHAs, blocked paste"],
          ],
        },
      },
      {
        heading: "Navigation and Search",
        body: [
          "Menus must work with a keyboard: open with Enter or Space, move with Tab or arrow keys, close with Escape, and never trap focus. Provide a skip link to the main content and use landmark regions so screen reader users can jump between areas. Search inputs need an accessible name, and autocomplete should follow the combobox pattern so suggestions are announced and selectable by keyboard. See [[/blogs/ecommerce-search-autocomplete|search autocomplete]].",
        ],
      },
      {
        heading: "Filters and Listings",
        body: [
          "Filters are a frequent failure point. Use native checkboxes, radios and buttons where possible, or give custom controls the right roles and states. When a filter changes results, announce the new results count, and don't move focus unexpectedly. On mobile, filter drawers must be reachable, labelled and closable by keyboard and screen readers. Product cards should have one clear link, alt text for images and prices that screen readers read correctly (including sale and original prices). See [[/blogs/ecommerce-filters|ecommerce filters]].",
        ],
      },
      {
        heading: "Product Pages",
        body: [
          "Product images need alt text that describes what matters for the choice. Gallery controls must be keyboard operable and labelled. Variant selectors (colour swatches, size buttons) need text names and selected states, not only colour. Out-of-stock variants should be announced as unavailable. Stock, delivery and price changes after selecting a variant should be announced. Size guides and modals must trap focus while open and return it when closed. See [[/blogs/ecommerce-product-page-design|product page design]].",
        ],
        cta: {
          title: "Not sure how accessible your store is?",
          description: "ZSpace Labs audits ecommerce journeys with keyboard and screen reader testing and fixes issues in your theme or code.",
        },
      },
      {
        heading: "Cart and Checkout",
        body: [
          "After adding to cart, confirm it in a way screen readers announce. Mini carts and drawers need proper focus management. In the cart, quantity controls and remove buttons need accessible names. In checkout, every field needs a visible label, errors must be described in text and linked to fields, required fields should be clear before submission, and time limits should be avoidable or extendable. WCAG 2.2's redundant entry criterion means not making people re-enter information they've already given in the same process, such as billing addresses when the same as shipping.",
          "On hosted checkouts, much of this is handled by the platform, but customizations and extensions must meet the same standard. See [[/blogs/ecommerce-checkout-ux|checkout UX]].",
        ],
      },
      {
        heading: "Visual Design",
        body: [
          "Text needs sufficient contrast against its background (WCAG AA sets 4.5:1 for normal text). Information shouldn't rely on colour alone, such as red error borders or colour-only swatches. Layouts should reflow at 400% zoom without horizontal scrolling and text should resize to 200%. Focus indicators must be visible and not hidden by sticky headers or chat widgets. Touch targets should meet WCAG 2.2's minimum size criterion.",
        ],
      },
      {
        heading: "Content and Media",
        body: [
          "Accessibility isn't only code. Merchandisers adding product images need to write alt text; video needs captions; size charts need to be real tables, not images; product descriptions should use headings and lists. Build these into content workflows and templates so they happen by default.",
        ],
      },
      {
        heading: "Apps, Widgets and Overlays",
        body: [
          "Third-party apps and widgets (reviews, chat, popups, recommendation carousels, cookie banners) often introduce barriers. Test them before installing, ask vendors about accessibility, and remove those that can't be fixed. Accessibility overlays that promise automatic compliance don't repair underlying code and can conflict with assistive technologies; fix the site itself.",
        ],
      },
      {
        heading: "Testing",
        body: [
          "Automated tools catch a portion of issues, such as missing alt attributes and contrast failures, but not whether a journey is usable. Combine them with manual keyboard testing, screen reader testing on real journeys (find a product, choose a variant, add to cart, check out), zoom and reflow checks, and testing with disabled users where possible. Test on mobile with screen readers too. See [[/blogs/ecommerce-accessibility-checklist|ecommerce accessibility checklist]].",
        ],
        table: {
          headers: ["Method", "Catches", "Misses"],
          rows: [
            ["Automated scan", "Missing alt, contrast, some ARIA errors", "Usability, focus order, announcements"],
            ["Keyboard testing", "Traps, focus visibility, operability", "Screen reader output"],
            ["Screen reader testing", "Names, roles, announcements", "Visual issues"],
            ["Zoom and reflow", "Layout breakage", "Non-visual issues"],
            ["Testing with disabled users", "Real barriers and workarounds", "Needs planning and budget"],
          ],
        },
      },
      {
        heading: "Making It Stick",
        body: [
          "Accessibility degrades without process. Add it to design reviews, component libraries, definition of done, QA checklists and content workflows. Test new apps before installing. Publish an accessibility statement with a contact route and respond to reports. Re-audit key journeys after redesigns and major releases.",
        ],
      },
      {
        heading: "Accessibility on Shopify",
        body: [
          "Shopify requires themes listed in its Theme Store to meet accessibility requirements, which gives a reasonable starting point, but customizations, third-party apps and content often introduce barriers. Test your actual store, including app blocks, popups, review widgets and chat. Checkout is hosted by Shopify, but checkout UI extensions and branding choices (such as colour contrast) are your responsibility. See [[/blogs/shopify-plus-development|Shopify Plus development]] for checkout extensibility.",
        ],
      },
      {
        heading: "Accessibility and Mobile",
        body: [
          "Many shoppers with disabilities use phones with built-in screen readers, magnification or switch control. Mobile-specific barriers include tiny touch targets, gestures without alternatives (swipe-only galleries, drag-only sliders), content hidden behind hover equivalents, fixed elements covering focused content, and zoom disabled in the viewport. WCAG 2.2's dragging movements and target size criteria address some of these. Test with VoiceOver on iOS and TalkBack on Android.",
        ],
        checklist: [
          "Pinch zoom not disabled",
          "Swipe galleries have button alternatives",
          "Sliders (e.g. price range) have non-drag alternatives",
          "Sticky bars don't cover focused fields",
          "Touch targets meet minimum size",
        ],
      },
      {
        heading: "Planning an Accessibility Programme",
        body: [
          "For an existing store, start with an audit of key journeys, fix blockers on the purchase path, then work through high-impact issues by template. Build accessibility into the design system so new components start accessible, train content editors on alt text and structure, and add checks to QA and app procurement. Set a target standard, track open issues and re-audit periodically.",
        ],
        table: {
          headers: ["Phase", "Focus"],
          rows: [
            ["1. Audit", "Key journeys, WCAG 2.2 AA, assistive technology testing"],
            ["2. Blockers", "Purchase path issues fixed first"],
            ["3. Templates", "High-traffic templates and components"],
            ["4. Process", "Design system, QA, content workflows, app review"],
            ["5. Maintain", "Statement, feedback route, periodic re-audits"],
          ],
        },
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Relying on automated scores alone",
          "Installing an overlay instead of fixing code",
          "Colour-only variant swatches and errors",
          "Hover-only menus and filters",
          "Unannounced add-to-cart and cart updates",
          "Untested third-party apps",
        ],
        cta: {
          title: "Ready to make your store accessible?",
          description: "Talk to ZSpace Labs about [[/services/ui-ux-design|accessible ecommerce design]], [[/services/website-development|accessibility fixes in code]] and [[/services/shopify-development|Shopify theme accessibility]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Ecommerce accessibility means every shopper can complete the journey. Use WCAG 2.2 AA as a guide, fix code and content, test real journeys with assistive technology, build accessibility into your process and get legal advice on obligations in your markets. Related: [[/blogs/ecommerce-conversion-research|conversion research]] and [[/blogs/usability-testing|usability testing]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 356 · ACCESSIBILITY CHECKLIST
  {
    slug: "ecommerce-accessibility-checklist",
    title: "Ecommerce Accessibility Checklist: Page-by-Page Checks for Online Stores",
    seoTitle: "Ecommerce Accessibility Checklist: Page-by-Page Checks",
    excerpt: "A page-by-page ecommerce accessibility checklist based on WCAG 2.2: global elements, navigation, search, listings, product pages, cart, checkout and accounts.",
    category: "UI/UX",
    banner: "a11ychecklist",
    bannerAlt:
      "Ecommerce accessibility checklist organized by WCAG 2.2 principles: perceivable (alt text, contrast, captions, zoom and reflow), operable (keyboard, focus visible, target size, no time traps, highlighted), understandable (labels, clear errors, consistent navigation, plain language) and robust (semantic HTML, names and roles, status messages, tested with assistive technology).",
    date: "2026-09-29",
    readingTime: "16 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "retail", "beauty-personal-care"],
    faqs: [
      { q: "What should an ecommerce accessibility checklist cover?", a: "Global elements, navigation, search, product listings and filters, product pages, cart, checkout, account and login, and content such as images, video and size charts, checked against WCAG criteria." },
      { q: "Is passing this checklist the same as legal compliance?", a: "No. A checklist is a practical aid. Legal obligations vary by jurisdiction and may require specific standards, statements or processes. Get legal advice." },
      { q: "Which WCAG level should I target?", a: "Level AA is the common target for commercial sites and is referenced in many policies and regulations." },
      { q: "How often should I run the checklist?", a: "On key journeys at least quarterly, after major releases or redesigns, and before installing new apps that affect the storefront." },
      { q: "Can automated tools run this checklist?", a: "Only partly. Automated tools catch some items; keyboard, screen reader and zoom checks need people." },
      { q: "Which screen readers should I test with?", a: "Commonly used combinations include NVDA or JAWS with a Windows browser, VoiceOver with Safari on macOS and iOS, and TalkBack with Chrome on Android. Test at least one desktop and one mobile combination." },
      { q: "What is a keyboard trap?", a: "A component that keyboard focus can enter but not leave, such as a modal that doesn't close with Escape or a widget that captures Tab. It's a serious barrier." },
      { q: "How do I check contrast?", a: "Use a contrast checker on text, icons and focus indicators against their backgrounds. WCAG AA requires at least 4.5:1 for normal text and 3:1 for large text and many interface components." },
      { q: "What should an accessibility statement include?", a: "The standard you aim for, known limitations, how to report problems or request alternatives, and when the statement was reviewed. Some laws specify required content." },
      { q: "Who should own the checklist?", a: "A named person in design or engineering, with checks built into design reviews, development QA and content workflows." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Use this checklist page by page on your key journeys. Check global elements (skip link, landmarks, focus, contrast, zoom), navigation and search, listings and filters, product pages (images, galleries, variants, stock), cart and mini cart, checkout (labels, errors, time limits, authentication) and content (alt text, captions, real tables). Combine automated scans with keyboard, screen reader and zoom testing. The checklist follows WCAG 2.2 Level AA as a technical reference; it isn't a statement of legal compliance.",
        ],
      },
      {
        heading: "How to Use This Checklist",
        body: [
          "Run it on real journeys rather than isolated pages: find a product through navigation, find one through search, filter a category, choose a variant, add to cart, update the cart, check out as a guest, sign in and view an order. Record issues with the page, steps to reproduce, the WCAG criterion affected and severity. For background, see [[/blogs/ecommerce-accessibility|ecommerce accessibility]] and [[/blogs/website-accessibility-guide|website accessibility guide]].",
        ],
        table: {
          headers: ["Tool", "Use for"],
          rows: [
            ["Automated checker (browser extension or CI)", "First pass on each template"],
            ["Keyboard only", "Operability, focus order, traps"],
            ["Screen reader (desktop and mobile)", "Names, roles, states, announcements"],
            ["Browser zoom to 200% and 400%", "Resize and reflow"],
            ["Contrast checker", "Text, icons, focus indicators"],
          ],
        },
      },
      {
        heading: "Global Elements",
        body: [],
        checklist: [
          "Skip link to main content appears on focus and works",
          "Page has a unique, descriptive title",
          "Landmarks: header, nav, main, footer",
          "Headings form a logical outline (one H1 per page)",
          "Visible focus indicator on every interactive element",
          "Focus not hidden by sticky headers, cookie banners or chat widgets",
          "Text contrast at least 4.5:1 (3:1 for large text)",
          "Content reflows at 400% zoom without horizontal scrolling",
          "Language of the page set correctly",
          "No content that flashes more than three times per second",
        ],
      },
      {
        heading: "Navigation and Header",
        body: [],
        checklist: [
          "Menus open and close by keyboard (Enter, Space, Escape)",
          "Submenus not dependent on hover alone",
          "Current page or section indicated",
          "Mobile menu button has an accessible name and expanded state",
          "Cart icon link includes item count in its accessible name",
          "Account and search icons have accessible names",
          "Help or contact link appears in a consistent place (WCAG 2.2 consistent help)",
        ],
      },
      {
        heading: "Search",
        body: [],
        checklist: [
          "Search input has a label or accessible name",
          "Autocomplete follows the combobox pattern",
          "Suggestions navigable with arrow keys; Escape closes",
          "Number of suggestions or results announced",
          "Results page heading includes the query",
          "Zero-results state is announced and offers alternatives",
        ],
      },
      {
        heading: "Category Pages and Filters",
        body: [],
        checklist: [
          "Filters use native controls or correct roles and states",
          "Applying a filter announces the updated results count",
          "Focus stays predictable after filtering",
          "Filter drawer on mobile is labelled, focus-trapped while open, closable",
          "Sort control labelled",
          "Product cards have one clear link with the product name",
          "Sale and original prices read clearly to screen readers",
          "Pagination or load more is keyboard operable and announced",
        ],
        cta: {
          title: "Want a professional accessibility audit?",
          description: "ZSpace Labs tests ecommerce journeys against WCAG 2.2 AA and prioritizes fixes by impact on shoppers.",
        },
      },
      {
        heading: "Product Pages",
        body: [],
        checklist: [
          "Product images have meaningful alt text; decorative images are hidden",
          "Gallery and zoom controls keyboard operable and labelled",
          "Carousels can be paused and don't auto-advance unexpectedly",
          "Variant options have text names (not colour only) and selected state",
          "Unavailable variants announced as unavailable",
          "Price, stock and delivery changes announced after variant selection",
          "Quantity input labelled",
          "Add to cart confirms success in an announced message",
          "Size guide and other modals trap focus and return it on close",
          "Reviews and ratings readable (rating given as text, not only stars)",
          "Tabs and accordions operable by keyboard with correct states",
        ],
      },
      {
        heading: "Cart and Mini Cart",
        body: [],
        checklist: [
          "Mini cart or drawer receives focus when opened and can be closed",
          "Quantity controls and remove buttons have accessible names including the product",
          "Updates to totals announced",
          "Discount code field labelled; errors described in text",
          "Checkout button clearly labelled",
        ],
      },
      {
        heading: "Checkout",
        body: [],
        checklist: [
          "Every field has a visible label (not placeholder only)",
          "Required fields indicated before submission",
          "Errors described in text, linked to fields, announced",
          "Autocomplete attributes on name, address, email and phone fields",
          "No need to re-enter information already provided (WCAG 2.2 redundant entry)",
          "Time limits can be extended or avoided",
          "Payment fields and wallets operable by keyboard and screen reader",
          "Order summary accessible, including discounts and totals",
          "Confirmation page announces success and order number",
          "Custom checkout extensions tested to the same standard",
        ],
      },
      {
        heading: "Accounts and Login",
        body: [],
        checklist: [
          "Login does not require a cognitive test such as a puzzle (WCAG 2.2 accessible authentication)",
          "Password managers and paste allowed",
          "CAPTCHA alternatives available where CAPTCHA is used",
          "One-time codes can be pasted",
          "Order history tables have headers",
          "Session timeout warnings allow extension",
        ],
      },
      {
        heading: "Content and Media",
        body: [],
        checklist: [
          "Alt text written for product and content images",
          "Videos have captions; audio has transcripts",
          "Size charts are real tables with headers, not images",
          "Links describe their destination (no bare \"click here\")",
          "Product descriptions use headings and lists",
          "PDF guides have accessible alternatives",
        ],
      },
      {
        heading: "Third-Party Apps and Widgets",
        body: [
          "Test every app that renders in the storefront: reviews, chat, popups, recommendation carousels, loyalty widgets, cookie banners. Check keyboard access, focus handling, names and that they don't obscure focused content. Ask vendors for accessibility information and prefer those that can show testing results. See [[/blogs/shopify-popups-cro|popups and CRO]].",
        ],
      },
      {
        heading: "Prioritizing Fixes",
        body: [
          "Rank issues by how much they block tasks. A keyboard trap in checkout or an unlabelled payment field blocks purchases and is critical. Missing alt text on a key product image is high. Minor heading order issues are lower. Fix blockers on the purchase journey first, then high-impact issues on high-traffic templates, then the rest.",
        ],
        table: {
          headers: ["Severity", "Example", "Timeline"],
          rows: [
            ["Critical (blocks task)", "Keyboard trap in checkout, unlabelled payment fields", "Immediately"],
            ["High", "Colour-only variant swatches, silent add to cart", "Next release"],
            ["Medium", "Low contrast on secondary text, unclear link text", "Planned"],
            ["Low", "Minor heading order issues", "Backlog"],
          ],
        },
      },
      {
        heading: "Documentation and Statement",
        body: [
          "Keep audit results, fixes and dates. Publish an accessibility statement describing your target standard, known limitations, how to report problems and when it was reviewed; some laws specify required content, so check the rules for your markets. See [[/blogs/ecommerce-compliance|ecommerce compliance]].",
        ],
      },
      {
        heading: "WCAG 2.2 Additions Relevant to Ecommerce",
        body: [
          "WCAG 2.2 added several success criteria that matter in stores. Check these specifically, since older audits won't have covered them.",
        ],
        table: {
          headers: ["Criterion (level)", "Ecommerce example"],
          rows: [
            ["Focus Not Obscured (Minimum) (AA)", "Sticky headers, cookie banners or chat widgets must not fully hide focused elements"],
            ["Dragging Movements (AA)", "Price range sliders need a non-drag alternative"],
            ["Target Size (Minimum) (AA)", "Swatches, quantity buttons and close icons large or spaced enough"],
            ["Consistent Help (A)", "Contact or help link in the same place across pages"],
            ["Redundant Entry (A)", "Billing address can reuse shipping address"],
            ["Accessible Authentication (Minimum) (AA)", "No puzzle-only login; allow password managers and paste"],
          ],
        },
      },
      {
        heading: "Screen Reader Test Script",
        body: [
          "A short, repeatable script makes screen reader testing consistent across releases. Run it on desktop and mobile.",
        ],
        checklist: [
          "Open the homepage; navigate by headings and landmarks",
          "Open the main menu and reach a category",
          "Apply two filters and hear the results count update",
          "Open a product; hear name, price and stock",
          "Select a size and colour; hear the selection and any stock change",
          "Add to cart; hear confirmation",
          "Open the cart; change quantity; hear the new total",
          "Check out as guest; trigger an error; hear it described",
          "Complete a test order; hear the confirmation",
        ],
      },
      {
        heading: "Recording and Tracking Issues",
        body: [
          "Record each issue with the page, steps to reproduce, assistive technology used, WCAG criterion, severity, screenshot or recording and suggested fix. Track them in the same system as other bugs so they're prioritized alongside other work, and link fixes to re-tests. See [[/blogs/ecommerce-cro-audit|ecommerce CRO audit]] for combining accessibility with broader audits.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Checking pages in isolation rather than journeys",
          "Stopping at automated scores",
          "Testing only desktop",
          "Ignoring third-party widgets",
          "Treating a checklist pass as legal compliance",
          "No re-testing after releases",
        ],
        cta: {
          title: "Ready to work through your store?",
          description: "Talk to ZSpace Labs about [[/services/ui-ux-design|accessibility audits and design]], [[/services/website-development|accessible front-end fixes]] and [[/services/shopify-development|Shopify theme remediation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Run this checklist on real journeys, combine automated and manual testing, fix blockers on the purchase path first, and keep checking after every release. Related: [[/blogs/accessible-ui-ux-design|accessible UI/UX design]] and [[/blogs/ecommerce-checkout-ux|checkout UX]].",
        ],
      },
    ],
  },
];
