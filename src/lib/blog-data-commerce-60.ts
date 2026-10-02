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
      { q: "What B2B features does Plus include?", a: "Company accounts with locations, catalogs with specific pricing, payment terms, deposits and partial payments, and B2B on the same store or in a dedicated expansion store, per Shopify's documentation." },
      { q: "What are expansion stores?", a: "Additional stores included with Plus, used for international markets, separate brands or B2B wholesale. Shopify's documentation lists up to nine expansion stores." },
      { q: "Does Plus require headless?", a: "No. Most Plus stores use Liquid themes. Hydrogen and other headless approaches are options where they're justified; Plus includes more Hydrogen storefronts than other plans." },
      { q: "What is Launchpad?", a: "A Plus tool for scheduling and automating events such as sales and product launches, including theme changes, discounts and product visibility." },
      { q: "How is development governed on Plus?", a: "With staff permissions, development and staging stores, version control for themes and apps, code review, and change processes for checkout and Functions, which affect every order." },
      { q: "When is Plus worth it?", a: "When your business needs Plus-only capabilities (checkout customization, custom Functions, advanced B2B, expansion stores, higher limits) and the value outweighs the cost. See our Plus vs Shopify comparison." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Shopify Plus development adds enterprise capabilities to normal theme and app work: checkout customization through checkout extensibility (including UI extensions on the information, shipping and payment steps), Shopify Functions in custom apps for discounts, delivery, payment and validation logic, B2B with company accounts, catalogs and payment terms, expansion stores, Launchpad and automation. Headless with Hydrogen is optional. Because checkout and Functions affect every order, Plus projects need stronger governance: staging stores, version control, code review and careful release management.",
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
            ["B2B", "Company accounts, catalogs, payment terms, deposits", "B2B storefront, ERP integration"],
            ["Stores", "Expansion stores (up to nine)", "Multi-store architecture, shared code"],
            ["Automation", "Launchpad, Shopify Flow", "Campaign scheduling, workflows"],
            ["Headless", "More Hydrogen storefronts", "Optional custom storefronts"],
            ["Operations", "Unlimited staff, more locations", "Permissions, governance"],
          ],
        },
      },
      {
        heading: "Checkout Extensibility",
        body: [
          "Checkout is customized through checkout extensibility rather than editing checkout code. The pieces are branding (colours, fonts, layout options via the checkout editor and the Checkout Branding API), checkout UI extensions (app-based components rendered at defined points in checkout), Shopify Functions (backend logic) and web pixels for tracking. Checkout UI extensions on the information, shipping and payment steps require Plus; extensions on the thank-you and order status pages are available more widely ([[https://shopify.dev/docs/api/checkout-ui-extensions|Shopify developer docs]]).",
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
          "Functions let developers customize backend logic that runs on Shopify's infrastructure: discount logic, delivery option customization (renaming, hiding, reordering), payment method customization, cart and checkout validation, and more. They're written in languages that compile to WebAssembly, run within strict performance limits and are deployed through apps. On Plus, merchants can use Functions in custom apps built just for their store; public apps with Functions are available on all plans ([[https://shopify.dev/docs/apps/build/functions|Shopify developer docs]]).",
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
        heading: "B2B on Plus",
        body: [
          "Plus includes B2B features for selling to businesses from Shopify: company accounts with multiple locations and buyers, catalogs with specific products and prices, volume pricing and quantity rules, payment terms, deposits and partial payments, and vaulted payment methods. B2B can run in the same store as direct-to-consumer (blended) or in a dedicated expansion store. Development work typically includes the B2B buyer experience in the theme, quick order and reorder tools, and ERP integration for accounts, pricing and orders. See [[/blogs/b2b-ecommerce-website-development|B2B ecommerce development]].",
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
          "Plus includes more Hydrogen storefronts than other plans (Shopify's plan documentation lists up to 25), but headless is a choice, not a requirement. Most Plus stores are well served by Liquid themes, which keep theme apps, the theme editor and lower maintenance. Consider Hydrogen or another headless stack when there are clear needs such as highly custom experiences, complex content integration or multiple frontends, and the team to maintain them. See [[/blogs/shopify-hydrogen-vs-traditional-shopify|Hydrogen vs traditional Shopify]].",
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
          "Shopify Plus development is mostly about checkout extensibility, Functions, B2B, multi-store architecture, automation and governance. Use Plus capabilities deliberately, test anything that touches checkout, and choose headless only when justified. Related: [[/blogs/shopify-plus-vs-shopify|Shopify Plus vs Shopify]] and [[/blogs/headless-shopify-explained|headless Shopify explained]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 354 · HYDROGEN VS TRADITIONAL SHOPIFY
  {
    slug: "shopify-hydrogen-vs-traditional-shopify",
    title: "Shopify Hydrogen vs Traditional Shopify: Liquid, Hydrogen or Other Headless?",
    seoTitle: "Shopify Hydrogen vs Traditional Shopify: Which to Choose?",
    excerpt: "Liquid themes, Hydrogen and other headless stacks compared: frontend, hosting, apps, editing, performance, cost, team needs and how to decide for your store.",
    category: "Shopify & Ecommerce",
    banner: "hydrogencompare",
    bannerAlt:
      "Comparison of Liquid themes (highlighted), Hydrogen and other headless stacks: frontend is theme and Liquid vs React Router vs any framework; hosting is Shopify vs Oxygen or self-hosted vs your choice; apps are theme apps vs API-based vs API-based; control is within theme limits vs full frontend vs full frontend; upkeep is lowest vs engineering team vs engineering team, noting that checkout stays on Shopify in every option.",
    date: "2026-09-29",
    readingTime: "17 min read",
    relatedServiceSlugs: ["shopify-development", "website-development", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "retail", "fashion-apparel"],
    faqs: [
      { q: "What is traditional Shopify?", a: "A Shopify store using an Online Store theme built with Liquid, hosted and rendered by Shopify, edited in the theme editor and extended with theme app extensions." },
      { q: "What is Shopify Hydrogen?", a: "Shopify's framework for building custom headless storefronts. It's built on React Router, uses the Storefront API and Customer Account API, and can be deployed to Oxygen (Shopify's hosting) or self-hosted." },
      { q: "What does 'other headless' mean?", a: "Building a storefront with another framework (such as Next.js or Nuxt) against the Storefront API, often through Shopify's Headless channel, and hosting it yourself or on a platform of your choice." },
      { q: "Does checkout change with headless?", a: "No. In all three options, checkout runs on Shopify's checkout, customized through checkout extensibility." },
      { q: "Do Shopify apps work with Hydrogen?", a: "Theme apps that rely on the Online Store theme don't work directly. Apps that offer APIs or headless SDKs can be integrated, usually with development work." },
      { q: "Is Hydrogen faster than a Liquid theme?", a: "Not automatically. Both can be fast or slow depending on implementation. Headless gives more control over performance but also more ways to get it wrong." },
      { q: "Is headless more expensive?", a: "Usually, over the life of the store: it needs developers to build and maintain the frontend, hosting and integrations, while themes rely more on Shopify and the app ecosystem." },
      { q: "When should I choose Hydrogen over other headless frameworks?", a: "When you want a Shopify-optimized stack with built-in Shopify components, Oxygen deployment and order attribution through the Hydrogen channel, and your team is comfortable with React." },
      { q: "When should I stay on a Liquid theme?", a: "When your needs fit within themes and apps, your team is small or non-technical, and you value the theme editor and lower maintenance. That covers most stores." },
      { q: "Can I switch later?", a: "Yes. Products, customers and orders stay in Shopify, so the frontend can change. Plan URLs, redirects, tracking and content migration carefully." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Most stores should stay on a Liquid theme: Shopify hosts it, the theme editor lets teams make changes, theme apps work, and maintenance is lowest. Hydrogen suits stores that need a highly custom frontend and have a React team, and want a Shopify-optimized framework with Oxygen hosting. Other headless frameworks suit teams with an existing stack or content needs that justify full control. In all three, checkout stays on Shopify. Decide from requirements, team capacity and total cost, not from performance claims alone.",
        ],
      },
      {
        heading: "Three Options, Not Two",
        body: [
          "\"Hydrogen vs traditional Shopify\" is often framed as a two-way choice, but there are three realistic options. A Liquid theme on Shopify's Online Store. A Hydrogen storefront, Shopify's own headless framework. And headless with another framework, such as Next.js, against Shopify's Storefront API. Shopify's documentation describes these build options, including Hydrogen, Hydrogen React with other React frameworks, and the Headless channel for any stack ([[https://shopify.dev/docs/storefronts/headless/getting-started/build-options|Shopify developer docs]]).",
          "This article compares all three. For headless concepts, see [[/blogs/headless-shopify-explained|headless Shopify explained]]; for Hydrogen in depth, see [[/blogs/shopify-hydrogen|Shopify Hydrogen development]].",
        ],
      },
      {
        heading: "Side-by-Side Comparison",
        body: [],
        table: {
          headers: ["", "Liquid theme", "Hydrogen", "Other headless"],
          rows: [
            ["Frontend technology", "Liquid templates, sections, JS", "React Router-based framework", "Framework of your choice"],
            ["Hosting", "Shopify", "Oxygen or self-hosted", "Your hosting provider"],
            ["Data access", "Liquid objects, Ajax APIs", "Storefront API, Customer Account API", "Storefront API, Customer Account API"],
            ["Editing", "Theme editor", "Custom or CMS-based", "Custom or CMS-based"],
            ["Apps", "Theme app extensions work", "API-based integration", "API-based integration"],
            ["Checkout", "Shopify checkout", "Shopify checkout", "Shopify checkout"],
            ["Team needed", "Theme developers, merchandisers", "React developers", "Framework developers"],
            ["Maintenance", "Lowest", "Higher", "Higher"],
            ["Control", "Within theme architecture", "Full frontend", "Full frontend"],
          ],
        },
      },
      {
        heading: "Liquid Themes: The Default for Good Reasons",
        body: [
          "Online Store themes are rendered by Shopify, built from Liquid templates and JSON-based sections, and edited visually in the theme editor. Merchants can rearrange sections, add app blocks and change content without developers. Themes benefit from Shopify's hosting and CDN, and theme app extensions let apps add features without code edits.",
          "Themes have limits: rendering is server-side through Liquid, some complex interactions require substantial JavaScript, and very custom experiences can strain the theme model. But for most stores, a well-built theme meets needs with the lowest total cost. See [[/blogs/shopify-theme-development|Shopify theme development]].",
        ],
      },
      {
        heading: "Hydrogen: Shopify's Headless Framework",
        body: [
          "Hydrogen is built on React Router and provides Shopify-specific components, utilities and caching strategies for building storefronts on the Storefront API. It supports the Customer Account API for accounts, deploys to Oxygen with CI/CD from GitHub, and can be self-hosted ([[https://shopify.dev/docs/storefronts/headless/hydrogen/fundamentals|Shopify developer docs]]). Shopify notes that the Hydrogen channel provides order attribution so headless sales appear in the admin.",
          "Hydrogen fits when you need custom experiences a theme can't deliver well (complex configurators, app-like interactions, deeply integrated content), you have React developers, and you want to stay close to Shopify's recommended stack.",
        ],
        cta: {
          title: "Unsure whether headless is worth it?",
          description: "ZSpace Labs assesses your requirements, team and costs to recommend a theme, Hydrogen or another headless stack.",
        },
      },
      {
        heading: "Other Headless Frameworks",
        body: [
          "Teams sometimes choose another framework because they already use it across other sites, need a CMS-first architecture, or want features of a specific framework or host. Shopify's Headless channel provides storefront access tokens and features such as product publishing and sales attribution by channel. You take on more integration work: Shopify-specific components, caching, analytics and customer accounts must be implemented with your chosen tools. See [[/blogs/headless-ecommerce-architecture|headless ecommerce architecture]].",
        ],
      },
      {
        heading: "What Stays the Same",
        body: [
          "Whichever frontend you choose, Shopify remains the commerce backend: products, inventory, pricing, customers, orders, discounts, Markets and checkout. Checkout runs on Shopify and is customized through checkout extensibility. Admin workflows, fulfilment and most back-office apps are unaffected. This is why switching frontends later is feasible: the data doesn't move.",
        ],
      },
      {
        heading: "What Changes With Headless",
        body: [],
        table: {
          headers: ["Area", "Impact of going headless"],
          rows: [
            ["Theme apps", "Won't render; need API-based alternatives or custom work"],
            ["Content editing", "Needs a CMS or custom editing; theme editor not available"],
            ["Analytics", "Tracking must be implemented in your frontend"],
            ["SEO", "You own rendering, metadata, sitemaps, structured data"],
            ["Performance", "You control it, and are responsible for it"],
            ["Hosting and deployment", "Oxygen or your own; CI/CD and monitoring needed"],
            ["Maintenance", "Framework upgrades, dependencies, security"],
          ],
        },
      },
      {
        heading: "Performance: Control, Not Guarantee",
        body: [
          "Headless is often promoted as faster. It can be: you control rendering, caching and scripts. But a headless storefront with heavy client-side JavaScript, poor caching or many third-party scripts can be slower than a lean theme. Conversely, a well-optimized theme can perform very well. Compare real performance data for your requirements rather than relying on the architecture label. See [[/blogs/why-page-speed-still-decides-conversion|page speed and conversion]].",
        ],
      },
      {
        heading: "Total Cost of Ownership",
        body: [
          "Headless moves cost from licences and apps to engineering. Budget for initial build, CMS, hosting (Oxygen or other), integrations that replace theme apps, monitoring, and ongoing development for upgrades and features. Themes cost less to maintain but may need custom development or apps for advanced features. Compare over several years, including the team you'll need to keep.",
        ],
      },
      {
        heading: "Decision Guide",
        body: [],
        table: {
          headers: ["If you...", "Consider"],
          rows: [
            ["Have a small team and needs fit themes and apps", "Liquid theme"],
            ["Need custom experiences and have React developers", "Hydrogen"],
            ["Already run a framework and CMS across sites", "Other headless"],
            ["Need multiple frontends (web, apps, kiosks) from one backend", "Hydrogen or other headless"],
            ["Rely heavily on theme apps", "Liquid theme, or plan replacements"],
            ["Want merchandisers to edit layouts without developers", "Liquid theme, or headless with a strong CMS"],
          ],
        },
      },
      {
        heading: "Migrating Between Options",
        body: [
          "Moving from a theme to headless, or back, is a frontend migration. Plan URL structures and redirects, rebuild analytics and pixels, replace theme apps, migrate content to a CMS if needed, test SEO rendering and structured data, and run a phased or parallel launch where possible. Measure conversion, speed and SEO before and after. See [[/blogs/ecommerce-replatforming|ecommerce replatforming]].",
        ],
      },
      {
        heading: "A Middle Path: Theme Plus Custom Components",
        body: [
          "The choice isn't always all or nothing. Many stores keep a Liquid theme and add custom components where needed: a product configurator built as a JavaScript app within a theme section, a headless content area for editorial pages, or a separate microsite for a campaign. This keeps the theme editor and apps for most of the store while allowing custom experiences where they matter. Consider it before committing to a full headless rebuild.",
        ],
        table: {
          headers: ["Need", "Theme-based option", "Headless option"],
          rows: [
            ["Complex product configurator", "Custom app embedded in a section", "Native component in Hydrogen"],
            ["Rich editorial content", "Metaobjects, sections, blog", "CMS-driven pages"],
            ["App-like browsing", "Enhanced JavaScript in theme", "Full client-side experience"],
            ["Multiple frontends", "Limited", "Shared API layer"],
          ],
        },
      },
      {
        heading: "Team and Skills",
        body: [
          "The decision is as much about people as technology. Liquid themes need theme developers and let merchandisers change layouts in the editor. Hydrogen needs React developers comfortable with React Router, server rendering and caching, plus someone to manage deployments and monitoring. Other headless frameworks need the same, with more integration work. If your team can't maintain a headless frontend for years, the theme is usually the better choice even if headless looks attractive.",
        ],
        checklist: [
          "Who will build new features after launch?",
          "Who will upgrade dependencies and frameworks?",
          "Who edits content and layouts day to day?",
          "Who monitors performance and errors?",
          "What happens if the lead developer leaves?",
        ],
      },
      {
        heading: "SEO Considerations",
        body: [
          "Themes handle much of technical SEO by default: server-rendered pages, canonical tags, sitemaps and structured data from the theme. Headless storefronts must implement all of this: server-side rendering, metadata, canonical and hreflang tags, sitemaps, structured data, redirects and handling of filtered URLs. Hydrogen provides utilities for some of this, but it still needs deliberate implementation and testing. See [[/blogs/ecommerce-faceted-navigation-seo|faceted navigation SEO]].",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Choosing headless for speed alone",
          "Underestimating the loss of theme apps and the theme editor",
          "No CMS plan for content editing",
          "No budget for ongoing frontend maintenance",
          "Treating Hydrogen and other headless as identical",
          "Forgetting that checkout stays on Shopify",
        ],
        cta: {
          title: "Ready to choose your Shopify frontend?",
          description: "Talk to ZSpace Labs about [[/services/shopify-development|Shopify themes and Hydrogen]], [[/services/website-development|headless builds]] and [[/services/ui-ux-design|storefront design]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Liquid themes suit most stores; Hydrogen suits custom experiences with a React team; other headless frameworks suit teams with existing stacks. Checkout stays on Shopify in every case. Choose from requirements, team and total cost. Related: [[/blogs/shopify-plus-development|Shopify Plus development]] and [[/blogs/monolithic-vs-headless-architecture|monolithic vs headless]].",
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
    readingTime: "18 min read",
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
          "WCAG, published by the W3C, is the most widely used technical reference. WCAG 2.2 is the current Recommendation and adds criteria for focus visibility, target size, dragging, consistent help, redundant entry and accessible authentication ([[https://www.w3.org/TR/WCAG22/|W3C WCAG 2.2]]). Level AA is the common target in policies and regulations.",
          "Legal obligations depend on where you operate and sell. In the EU, the European Accessibility Act covers ecommerce services and has applied since 28 June 2025, with national laws implementing it and some exemptions, such as for microenterprises providing services ([[https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/union-equality-strategy-rights-persons-disabilities-2021-2030/european-accessibility-act_en|European Commission]]). Other countries have their own laws, and case law varies. Treat WCAG as a technical guide and get legal advice on your specific obligations. See [[/blogs/ecommerce-compliance|ecommerce compliance]].",
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
