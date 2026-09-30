import type { BlogPost } from "./blog-data";

/**
 * Older Shopify posts expanded in place for the ecommerce knowledge hub.
 * Slugs and publish dates are unchanged so existing links and rankings are
 * kept; `updated` records the revision. These replace the originals that
 * used to live in blog-data.ts. Merged into `posts` in blog-data.ts.
 */

export const commerceRewrites: BlogPost[] = [
  // ------------------------------------------------ 62 · PLUS VS SHOPIFY
  {
    slug: "shopify-plus-vs-shopify",
    title: "Shopify Plus vs Shopify: Which Platform Should Your Business Choose?",
    seoTitle: "Shopify Plus vs Shopify: Which Should Your Business Choose?",
    excerpt:
      "How Shopify Plus differs from Basic, Grow and Advanced: checkout, B2B, expansion stores, staff, locations, Hydrogen, APIs, and the signals that justify upgrading.",
    category: "Shopify & Ecommerce",
    banner: "plusvsplans",
    bannerAlt:
      "Comparison of Shopify's Basic, Grow and Advanced plans with Shopify Plus: checkout customization, B2B catalogs, expansion stores, staff accounts, inventory locations and Hydrogen storefronts.",
    date: "2026-04-06",
    updated: "2026-09-29",
    readingTime: "16 min read",
    relatedServiceSlugs: ["shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["fashion-apparel", "ecommerce", "d2c-consumer"],
    faqs: [
      { q: "What is the difference between Shopify and Shopify Plus?", a: "Shopify Plus is Shopify's highest plan. It adds full checkout customization, unlimited B2B catalogs, up to nine expansion stores, unlimited staff accounts, up to 200 inventory locations, Plus-only APIs and apps, and more headroom for large operations. Core commerce features are shared across plans." },
      { q: "How much does Shopify Plus cost?", a: "Shopify lists Plus with a starting monthly price that varies by region and contract. Check Shopify's pricing page or speak to Shopify for current terms rather than relying on figures quoted in articles." },
      { q: "Do I need Shopify Plus for B2B?", a: "Not necessarily. Shopify's pricing page lists B2B with up to three catalogs on Basic, Grow and Advanced. Plus removes the catalog limit and adds more B2B flexibility." },
      { q: "Can I customize checkout without Plus?", a: "Partly. All plans can configure checkout settings, branding and payment options, and thank-you and order status pages can be extended with apps. Customizing the information, shipping and payment steps with checkout UI extensions requires Plus." },
      { q: "What are expansion stores?", a: "Additional stores under the same Plus organization, used for regions, brands or wholesale. Shopify's Plus plan supports up to nine." },
      { q: "Does Shopify Plus make my store faster?", a: "Not by itself. Storefront speed depends mainly on the theme, apps and media. Plus helps with scale and flexibility, not front-end performance." },
      { q: "Can I use Hydrogen without Plus?", a: "Yes. Shopify's documentation says Oxygen hosting is available on paid plans. Shopify's Plus page lists up to 25 Hydrogen storefronts for Plus." },
      { q: "Is Shopify Functions Plus-only?", a: "Public apps built with Functions work on all plans. Custom apps that use Functions are limited to Plus." },
      { q: "When should I upgrade to Shopify Plus?", a: "When you can name a specific Plus capability you need now, such as checkout step customization, more B2B catalogs, expansion stores or combined listings, and the benefit outweighs the cost." },
      { q: "Is it hard to move from Shopify to Plus?", a: "No. It's a plan upgrade on the same platform, not a migration. The work is in using the new capabilities, such as building checkout extensions or setting up expansion stores." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Choose standard Shopify (Basic, Grow or Advanced) unless you need a specific capability only Plus provides. According to Shopify's pricing and Plus plan pages, Plus adds full checkout customization including the information, shipping and payment steps, unlimited B2B catalogs instead of three, up to nine expansion stores, unlimited staff accounts, up to 200 inventory locations, Plus-only APIs and apps such as combined listings, and up to 25 Hydrogen storefronts. Upgrade when one of those solves a current problem worth the higher fee, not because the business has simply grown.",
        ],
      },
      {
        heading: "“Shopify for Big Companies” Is the Wrong Model",
        body: [
          "Plus is often described as Shopify's enterprise tier, which makes it sound like a general upgrade for bigger businesses. In practice it unlocks a specific set of capabilities. Many large, fast-growing stores run perfectly well on Advanced; some smaller businesses need Plus for checkout or B2B reasons. Evaluate it against capabilities, not company size.",
          "Upgrading is a plan change on the same platform, not a migration. Your products, orders, theme and apps stay in place.",
        ],
      },
      {
        heading: "What Differs, Plan by Plan",
        body: [
          "The table below reflects Shopify's pricing and Plus plan pages as checked in September 2026 ([[https://www.shopify.com/pricing|Shopify pricing]], [[https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan|Shopify Plus plan]]). Plan details change, so confirm current terms before deciding.",
        ],
        table: {
          headers: ["Capability", "Basic · Grow · Advanced", "Shopify Plus"],
          rows: [
            ["Checkout customization", "Limited: settings, branding, apps on thank-you and order status pages", "Fully customizable, including information, shipping and payment steps"],
            ["B2B catalogs", "Up to 3", "Unlimited"],
            ["Expansion stores", "Not available", "Up to 9"],
            ["Staff accounts", "None on Basic, 5 on Grow, 15 on Advanced", "Unlimited"],
            ["Inventory locations", "Up to 10", "Up to 200"],
            ["Themes in the admin", "Standard limit", "Up to 100"],
            ["Staging stores", "Not listed on standard plans", "Unlimited"],
            ["Hydrogen storefronts", "Oxygen available on paid plans", "Up to 25 listed on the Plus page"],
            ["Custom apps using Functions", "Not available", "Available"],
            ["Plus-only APIs and apps", "Not available", "e.g. Multipass, gift card APIs, combined listings"],
          ],
        },
      },
      {
        heading: "Checkout: The Most Common Reason to Upgrade",
        body: [
          "Checkout is hosted by Shopify on every plan. On standard plans you can configure payment methods, accelerated checkouts, fields, branding and policies, and extend the thank-you and order status pages with apps. On Plus, checkout UI extensions can add content and fields to the information, shipping and payment steps, and custom apps can use Shopify Functions to change logic such as discounts, delivery options and payment methods for your store alone.",
          "If you need custom fields at checkout, delivery-date pickers inside checkout, B2B-specific checkout content, or store-specific discount logic, that's usually a Plus requirement. See [[/blogs/shopify-checkout-optimization|Shopify checkout optimization]].",
        ],
      },
      {
        heading: "B2B and Wholesale",
        body: [
          "B2B features such as company accounts and catalogs are available below Plus, with up to three catalogs according to Shopify's pricing page. Plus removes that limit and supports assigning catalogs directly to company locations. If you sell wholesale to many customer groups with different price lists, the catalog limit is often the deciding factor.",
        ],
      },
      {
        heading: "Multiple Stores and International Selling",
        body: [
          "Shopify Markets lets a single store sell in many countries with local currencies, languages and domains, on all plans. Plus adds up to nine expansion stores for cases where one store isn't enough: separate brands, a dedicated wholesale store, or regions that need different catalogs, apps or operations.",
        ],
        cta: {
          title: "Not sure if you've outgrown standard Shopify?",
          description: "ZSpace reviews your requirements against what Plus actually unlocks and tells you whether the upgrade is justified yet.",
        },
      },
      {
        heading: "Development and Headless",
        body: [
          "Plus includes Plus-only API resources and unlimited staging stores, which help larger development teams test safely. For headless builds, Oxygen hosting for Hydrogen is available on paid plans, and Shopify's Plus page lists up to 25 Hydrogen storefronts on Plus. Headless is a separate decision from Plus; see [[/blogs/headless-shopify-explained|Shopify headless commerce]] and [[/blogs/shopify-hydrogen|Shopify Hydrogen]].",
        ],
      },
      {
        heading: "Combined Listings for Large Catalogs",
        body: [
          "The Combined Listings app, available on Plus and enterprise plans, presents separate products as one listing with a shared option, where each child product keeps its own title, description, URL and images. It's useful for fashion and home brands that want each colour or material to have its own page. See [[/blogs/shopify-product-seo|Shopify product SEO]].",
        ],
      },
      {
        heading: "When Standard Shopify Is Enough",
        body: [],
        checklist: [
          "Checkout settings, branding and post-purchase apps cover your needs",
          "Three or fewer B2B catalogs",
          "One store with Markets for international selling",
          "Staff and location needs within your plan's limits",
          "No need for custom apps that use Functions",
          "Public apps meet your discount and delivery logic needs",
        ],
      },
      {
        heading: "When Plus Is Worth Considering",
        body: [],
        checklist: [
          "Checkout needs custom fields, content or logic in the main steps",
          "More than three B2B catalogs, or catalogs per company location",
          "Several stores for brands, regions or wholesale",
          "Large teams needing unlimited staff accounts",
          "More than ten inventory locations",
          "Store-specific Functions logic via custom apps",
          "Separate child product pages presented as one listing",
        ],
        callout: {
          type: "tip",
          text: "Write down the Plus-only capability you need now and the problem it solves. If you can't name one, you probably don't need Plus yet.",
        },
      },
      {
        heading: "How to Evaluate the Upgrade",
        body: [
          "List current requirements, mark which ones need Plus, estimate the business value of meeting them (revenue, time saved, risk reduced), and compare with the plan cost difference plus the development needed to use the new capabilities. Checkout extensions and expansion stores still need building and maintaining.",
        ],
      },
      {
        heading: "Beyond Checkout: Other Plus Capabilities",
        body: [
          "Checkout drives many upgrades, but Shopify's Plus plan page lists other capabilities worth weighing: Launchpad for scheduling sales and launches, advanced B2B options such as direct catalog assignment, deposits, partial payments and payment requests per fulfilment, 24/7 priority support, Shopify Functions in custom apps, and expansion stores including B2B wholesale stores ([[https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/plans-features/shopify-plus-plan|Shopify Plus plan]]). Plan details change, so confirm current terms. For the development side, see [[/blogs/shopify-plus-development|Shopify Plus development]].",
        ],
      },
      {
        heading: "Cost Framework for the Decision",
        body: [
          "Compare total cost, not just the plan fee. On the Plus side, include the plan fee, any variable fees under your agreement, development for checkout extensions and Functions, and additional stores' apps and operations. On the standard side, include apps and workarounds for missing capabilities, manual work (such as running wholesale outside Shopify), and revenue lost to checkout limitations if you can estimate it credibly. If the Plus-only capabilities don't address a current problem, the upgrade is premature.",
        ],
        table: {
          headers: ["Cost or benefit", "Standard plan", "Plus"],
          rows: [
            ["Plan fees", "Lower", "Higher; confirm current terms"],
            ["Checkout customization", "Limited; workarounds", "Extensions and Functions (development cost)"],
            ["B2B", "Limited catalogs", "Unlimited catalogs, more options"],
            ["Multiple stores", "Separate plans", "Expansion stores included"],
            ["Staff and locations", "Plan limits", "Unlimited staff, up to 200 locations"],
            ["Manual work and apps", "Often higher", "Often lower"],
          ],
        },
      },
      {
        heading: "Upgrade Readiness Checklist",
        body: [],
        checklist: [
          "A specific Plus-only capability solves a current problem",
          "Development capacity for checkout extensions and Functions",
          "Plan for staff permissions and governance",
          "B2B requirements documented if relevant",
          "Store architecture decided (one store with Markets vs expansion stores)",
          "Total cost compared over several years",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Upgrading for status rather than a specific capability",
          "Expecting Plus to make the storefront faster",
          "Assuming B2B requires Plus",
          "Upgrading without budgeting for the development to use Plus features",
          "Relying on outdated plan comparisons",
        ],
        cta: {
          title: "Planning a move to Plus, or wondering if you need to?",
          description: "Talk to ZSpace about [[/services/shopify-development|Shopify and Shopify Plus development]], checkout extensions and [[/services/cro-audit|checkout optimization]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Shopify Plus is a set of specific capabilities: checkout customization, B2B scale, expansion stores, larger teams and locations, and Plus-only APIs and apps. Standard plans cover most stores well. Upgrade when a named Plus capability solves a current, valuable problem. For the wider build picture, see [[/blogs/shopify-store-development|Shopify store development]].",
          "For related guides, see [[/blogs/shopify-markets|Shopify Markets]].",
        ],
      },
    ],
  },

  // -------------------------------------------- 63 · CUSTOM DEVELOPMENT
  {
    slug: "when-do-you-need-custom-shopify-development",
    title: "Shopify Custom Development: When Do You Need a Custom Shopify Store?",
    seoTitle: "Shopify Custom Development: When Do You Need It?",
    excerpt:
      "When a Shopify store needs custom development: a layer-by-layer framework from native features and apps to custom sections, Functions, custom apps and headless.",
    category: "Shopify & Ecommerce",
    banner: "customlayers",
    bannerAlt:
      "Shopify decision ladder: native feature, Shopify app, theme code, custom app or Function, then headless, stopping at the first layer that meets the requirement.",
    date: "2026-04-03",
    updated: "2026-09-29",
    readingTime: "13 min read",
    relatedServiceSlugs: ["shopify-development", "ai-automation"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer"],
    faqs: [
      { q: "What is Shopify custom development?", a: "Building functionality specific to your store beyond configuring Shopify and installing apps: custom theme sections and templates, custom apps, Shopify Functions, checkout UI extensions, API integrations or a headless front end." },
      { q: "How do I know if I need custom Shopify development?", a: "Check your requirement against each layer in order: native feature, existing app, theme customization. Custom development is justified when those genuinely can't meet the requirement without workarounds." },
      { q: "Is custom development the same as theme customization?", a: "No. Theme customization changes presentation within a theme. Custom development builds new functionality, such as custom apps, Functions, extensions or integrations. See the theme customization guide for what themes can change." },
      { q: "What is a Shopify Function?", a: "Server-side code that customizes parts of Shopify's backend logic, such as discounts, delivery options, payment methods, cart and checkout validation. Public apps using Functions work on all plans; custom apps using Functions require Plus." },
      { q: "What are checkout UI extensions?", a: "Components that add content or fields to checkout. Extensions on the information, shipping and payment steps require Plus; thank-you and order status page extensions are available on other plans." },
      { q: "When do I need a custom app?", a: "When you need to connect Shopify to internal systems, automate a workflow no app covers, or add admin functionality specific to your business." },
      { q: "Does custom development cost more to maintain?", a: "Usually. Custom code needs updating as Shopify's APIs and platform change, and someone has to own bugs and improvements." },
      { q: "Can I start standard and add custom work later?", a: "Yes, and it's usually the lower-risk path. Launch with native features, apps and theme customization, then add custom development when a specific requirement is proven." },
      { q: "Is headless the ultimate form of custom development?", a: "It's the most extensive. It replaces the theme with your own front end. It suits specific needs and teams able to maintain a web application." },
      { q: "What's the most common mistake?", a: "Building custom code for something a setting, app or theme change could do, adding cost and maintenance for no gain." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "You need custom Shopify development when a real requirement can't be met by a native Shopify feature, a maintained app or theme customization without workarounds. Check each layer in order and stop at the first that works. Custom sections and templates handle presentation; Shopify Functions handle backend logic such as discounts and delivery options; checkout UI extensions add checkout content (the main steps need Plus); custom apps connect systems and automate workflows; and headless replaces the front end entirely. Each step adds capability and long-term maintenance.",
        ],
      },
      {
        heading: "Start With the Requirement",
        body: [
          "“Do we need custom development?” skips cheaper questions. Write the requirement in one sentence, including who needs it and why, then check it against each layer of what Shopify already offers. A vague requirement makes every layer look necessary; a specific one usually resolves in one or two steps.",
        ],
      },
      {
        heading: "The Decision Ladder",
        body: [
          "The diagram above shows the layers. Most requirements resolve well before the end.",
        ],
        table: {
          headers: ["Layer", "What it covers", "Example"],
          rows: [
            ["Native feature", "Admin settings, Markets, B2B, discounts, shipping", "Automatic discount for a collection"],
            ["Shopify app", "Maintained apps from the App Store", "Reviews, subscriptions, loyalty"],
            ["Theme code", "Custom sections, blocks, templates, metafield displays", "Size chart section from a metaobject"],
            ["Checkout UI extension", "Content and fields in checkout", "Delivery instructions field (Plus for main steps)"],
            ["Shopify Function", "Backend logic for discounts, delivery, payments, validation", "Hide a payment method for certain carts"],
            ["Custom app", "Admin tools, integrations, automation", "Sync orders to an in-house ERP"],
            ["Headless", "A custom front end on Shopify's APIs", "Content-heavy storefront across several brands"],
          ],
        },
      },
      {
        heading: "Walking the Ladder: Examples",
        body: [
          "**Tiered pricing by customer group.** Shopify's B2B features cover company-level catalogs and quantity rules, which resolves many requests with no development. If pricing depends on something more specific, such as a loyalty tier, a discount Function in a public app or a custom app may be the right level.",
          "**Showing fabric details on product pages.** Metafields plus a custom theme block. No app or custom app needed.",
          "**Blocking certain products from shipping to some regions.** Shipping profiles may handle it natively; if not, a delivery customization Function can.",
          "**Sending orders to a legacy warehouse system.** Check for a connector app first; if none exists, a custom app with webhooks, retries and monitoring.",
        ],
      },
      {
        heading: "Shopify Functions and Plan Limits",
        body: [
          "Functions let developers customize backend logic without rebuilding checkout: discount types, delivery and payment method customization, cart and checkout validation and more. Public apps that use Functions work on all plans; custom apps built for a single store that use Functions require Shopify Plus. See [[/blogs/shopify-plus-vs-shopify|Shopify Plus vs Shopify]].",
        ],
      },
      {
        heading: "Checkout Extensions",
        body: [
          "Shopify's checkout is hosted and can't be rewritten, but it can be extended. Checkout UI extensions on the information, shipping and payment steps require Plus; thank-you and order status page extensions are available on other plans. Design extensions to add clarity, not clutter. See [[/blogs/shopify-checkout-optimization|Shopify checkout optimization]].",
        ],
      },
      {
        heading: "Custom Apps and Integrations",
        body: [
          "Custom apps suit integrations with internal systems, admin tools for your team, and automation. Build them with clear data ownership, webhooks for changes, retries and logging, and plan for Shopify's regular API version updates. See [[/blogs/shopify-custom-app-development-guide|Shopify custom app development]] and [[/blogs/shopify-business-systems-integration-guide|connecting Shopify to business systems]].",
        ],
        cta: {
          title: "Have a requirement an app or theme can't handle?",
          description: "ZSpace walks your requirement down the ladder with you and builds only the custom layer it genuinely needs.",
        },
      },
      {
        heading: "When the Answer Is Headless",
        body: [
          "Headless is justified when the front end itself must go beyond what themes can deliver: content-heavy experiences, several storefronts sharing components, or complex interactive products, with a team to maintain it. See [[/blogs/headless-shopify-explained|Shopify headless commerce]] and [[/blogs/shopify-hydrogen|Shopify Hydrogen]].",
        ],
      },
      {
        heading: "The Real Cost of Custom Work",
        body: [
          "Every layer past theme customization shifts responsibility to you or your partner: bug fixes, API version upgrades, compatibility with new Shopify features, security and documentation. That's not a reason to avoid custom work when it's justified, but it belongs in the decision alongside the build cost. See [[/blogs/shopify-development-cost|Shopify development cost]].",
        ],
      },
      {
        heading: "Custom Development Checklist",
        body: [],
        checklist: [
          "Requirement written in one sentence with the business reason",
          "Native features checked, including recent Shopify releases",
          "Maintained apps evaluated for fit, performance and cost",
          "Theme customization considered",
          "Plan requirements checked (Plus for some extensions and custom Functions)",
          "Owner, documentation and maintenance plan agreed",
          "Performance and accessibility impact assessed",
        ],
        cta: {
          title: "Planning custom Shopify work?",
          description: "Talk to ZSpace about [[/services/shopify-development|custom Shopify development]], integrations and [[/services/ai-automation|workflow automation]].",
        },
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Custom code for something a setting or app already does",
          "Stacking several apps to avoid a small custom build",
          "Building custom checkout features without checking plan requirements",
          "Integrations without failure handling",
          "No documentation, so nobody can maintain it later",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Custom Shopify development is the right answer for requirements that native features, apps and theme customization can't meet. Walk the ladder, choose the lightest layer that works, check plan limits, and budget for ownership. For the full build process, see [[/blogs/shopify-store-development|Shopify store development]]; for presentation-only changes, see [[/blogs/shopify-theme-vs-custom-development|Shopify theme customization]].",
        ],
      },
    ],
  },

  // ------------------------------------------ 65 · THEME CUSTOMIZATION
  {
    slug: "shopify-theme-vs-custom-development",
    title: "Shopify Theme Customization: What Can You Actually Change?",
    excerpt:
      "What you can change in a Shopify theme without code, what needs theme code, and what sits outside the theme entirely, plus how to customize without losing updates.",
    category: "Shopify & Ecommerce",
    banner: "themeeditable",
    bannerAlt:
      "Three columns of Shopify customization: theme editor changes without code, theme code changes in Liquid, CSS and JavaScript, and things outside the theme such as checkout steps, business logic, admin data and headless front ends.",
    date: "2026-03-04",
    updated: "2026-09-29",
    readingTime: "12 min read",
    relatedServiceSlugs: ["shopify-development", "ui-ux-design"],
    relatedIndustrySlugs: ["fashion-apparel", "beauty-personal-care"],
    faqs: [
      { q: "What can I change in a Shopify theme without code?", a: "In the theme editor you can add, remove and reorder sections and blocks, change colours, fonts and spacing through theme settings, edit content and images, create alternate templates for specific products or pages, and add app blocks and embeds." },
      { q: "What needs theme code?", a: "New sections and blocks, layout changes the theme doesn't offer, displaying metafields in custom ways, custom interactions, performance fixes and deeper design changes. These use Liquid, CSS and JavaScript." },
      { q: "What can't a theme change?", a: "Checkout's main steps (customizable with extensions on Plus), backend logic such as discount rules (Functions), admin and data structures, and integrations. A headless front end replaces the theme entirely." },
      { q: "Will customizing my theme stop me updating it?", a: "Editor changes carry over more easily than code edits. Code changes must be reapplied or merged when you update. Keeping custom code in separate sections and snippets, documented and under version control, makes updates manageable." },
      { q: "Can I customize a theme per product?", a: "Yes. Create alternate templates, such as a template for bundles or for a product family, and assign them to products. Metafields can also change what each product shows within one template." },
      { q: "Is it safe to edit theme code on the live theme?", a: "No. Duplicate the theme, edit the copy, preview and test, then publish. Better still, use Shopify CLI and version control." },
      { q: "When should I choose a custom theme instead?", a: "When the core templates would need rewriting rather than adding to. See the Shopify theme development guide." },
      { q: "What is an app block?", a: "A block provided by an app that you can add to supported sections in the theme editor, without editing theme code. App embeds add site-wide features such as chat widgets." },
      { q: "Can I customize checkout from the theme?", a: "No. Checkout branding is set in checkout settings, and deeper changes use checkout extensions, with the main steps requiring Plus." },
      { q: "How do I keep a customized theme fast?", a: "Limit sections and apps per page, optimize images, avoid heavy scripts, and check Core Web Vitals after each change." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A Shopify theme can be customized at two levels. In the theme editor, without code, you can rearrange sections and blocks, change colours, fonts and spacing, edit content, create alternate templates and add app blocks. With theme code (Liquid, CSS and JavaScript), you can add new sections and blocks, change layouts, display metafields, add interactions and improve performance. Some things sit outside the theme: checkout's main steps (extensions on Plus), backend logic (apps and Functions), admin data and integrations. Customize in a copy, keep code changes isolated and documented, and you can still update the theme.",
        ],
      },
      {
        heading: "How Customization Fits the Cluster",
        body: [
          "This guide covers what you can change in an existing theme. If you're deciding whether to build a new theme, see [[/blogs/shopify-theme-development|Shopify theme development]]; if the requirement is functionality rather than presentation, see [[/blogs/when-do-you-need-custom-shopify-development|Shopify custom development]].",
        ],
      },
      {
        heading: "Level 1: The Theme Editor",
        body: [
          "Online Store 2.0 themes use JSON templates made of sections and blocks, which is what makes so much editable without code ([[https://shopify.dev/docs/storefronts/themes/architecture|Shopify theme architecture]]).",
        ],
        table: {
          headers: ["You can", "Notes"],
          rows: [
            ["Add, remove and reorder sections and blocks", "Within what the theme's sections offer"],
            ["Change colours, typography, spacing", "Through theme settings; limited to the options provided"],
            ["Edit text, images and video", "Including header and footer section groups"],
            ["Create alternate templates", "Assign to specific products, collections or pages"],
            ["Connect dynamic sources", "Show metafield values in supported settings"],
            ["Add app blocks and app embeds", "Where the theme and app support them"],
          ],
        },
      },
      {
        heading: "Level 2: Theme Code",
        body: [
          "When the editor's options run out, theme code extends the theme.",
        ],
        table: {
          headers: ["Change", "Typical approach"],
          rows: [
            ["A new content module", "New section or theme block with its own settings"],
            ["Product details from metafields", "Custom block rendering metafields or metaobjects"],
            ["Layout the theme doesn't offer", "Edited section or template, or a new one"],
            ["Brand styling beyond settings", "Custom CSS within the theme's structure"],
            ["Interactions", "JavaScript components, loaded efficiently"],
            ["Performance improvements", "Removing unused code, optimizing images and scripts"],
          ],
        },
        callout: {
          type: "tip",
          text: "Add rather than edit. New sections and snippets are easier to carry through theme updates than changes scattered through the theme's own files.",
        },
      },
      {
        heading: "Level 3: Outside the Theme",
        body: [
          "Some requirements can't be met in a theme at all.",
        ],
        table: {
          headers: ["Requirement", "Where it's handled"],
          rows: [
            ["Checkout branding", "Checkout settings"],
            ["Content or fields in checkout steps", "Checkout UI extensions (main steps require Plus)"],
            ["Discount, delivery or payment logic", "Apps and Shopify Functions"],
            ["New admin data", "Metafield and metaobject definitions"],
            ["Connections to other systems", "Apps and custom apps"],
            ["A different front end", "Headless, e.g. Hydrogen"],
          ],
        },
      },
      {
        heading: "Customizing Without Losing Updates",
        body: [
          "Theme developers release updates with fixes and new features. Editor changes generally carry over; code changes don't automatically. Keep custom code in clearly named sections and snippets, record every change, use version control, and when updating, install the new version as an unpublished theme, reapply customizations, test and publish.",
        ],
        cta: {
          title: "Want your theme to do more without losing updates?",
          description: "ZSpace customizes Shopify themes with isolated, documented code your team can maintain.",
        },
      },
      {
        heading: "A Safe Workflow",
        body: [],
        checklist: [
          "Duplicate the live theme before editing",
          "Use Shopify CLI and GitHub for code changes",
          "Preview on real devices before publishing",
          "Test key paths: product, cart, search, checkout start",
          "Check Core Web Vitals after changes",
          "Document what was changed and why",
        ],
      },
      {
        heading: "Common Customization Requests",
        body: [],
        table: {
          headers: ["Request", "Level"],
          rows: [
            ["Reorder homepage sections", "Editor"],
            ["Different layout for bundle products", "Editor (alternate template), maybe code"],
            ["Size chart on product pages", "Code (metaobject + block)"],
            ["Colour swatches on collection pages", "Theme setting or code"],
            ["Delivery estimate near add-to-cart", "App block or code"],
            ["Custom field in checkout shipping step", "Checkout extension (Plus)"],
            ["Tiered discount logic", "App or Function"],
          ],
        },
      },
      {
        heading: "Before You Customize",
        body: [],
        checklist: [
          "Check whether a theme setting, alternate template or app block already does it",
          "Check whether the theme's newer version adds the feature",
          "Write down the change and why it's needed",
          "Decide whether the change belongs in a new section or snippet",
          "Estimate the effect on page weight",
          "Plan how the change will be carried through future theme updates",
        ],
      },
      {
        heading: "Performance and Accessibility",
        body: [
          "Customizations often slow themes down: extra sections, large images, app scripts on every page. Keep an eye on Core Web Vitals and test keyboard access and contrast after changes. See [[/blogs/shopify-core-web-vitals-performance-guide|Shopify performance]] and [[/blogs/shopify-store-design|Shopify store design]].",
        ],
      },
      {
        heading: "When Customization Stops Being Enough",
        body: [
          "If most requests involve rewriting core templates rather than adding to them, or customizations have made the theme hard to update, it may be time for a custom theme or rebuild. See [[/blogs/shopify-redesign-vs-rebuild|Shopify redesign vs rebuild]].",
        ],
        cta: {
          title: "Not sure which level your change needs?",
          description: "Talk to ZSpace about [[/services/shopify-development|Shopify theme customization]] and [[/services/ui-ux-design|store design]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Most brand and UX changes fit inside a theme: through the editor first, then isolated code. Checkout steps, business logic, data and integrations live outside it. Customize carefully, document everything and you keep both flexibility and updates. For the apps around your theme, see [[/blogs/best-shopify-apps-for-new-stores|the Shopify apps worth installing]].",
        ],
      },
    ],
  },

  // ---------------------------------------------- 66 · HEADLESS COMMERCE
  {
    slug: "headless-shopify-explained",
    title: "Shopify Headless Commerce: When Should You Go Headless?",
    excerpt:
      "What headless Shopify is, how it compares with a theme, the real costs of owning it, when it's worth it, and how to choose between Hydrogen and other frameworks.",
    category: "Shopify & Ecommerce",
    banner: "headlessshopify",
    bannerAlt:
      "Theme-based Shopify compared with headless Shopify: on the left Shopify renders the theme above checkout and core; on the right a custom front end with CMS, search and hosting uses the Storefront API above the same checkout and core.",
    date: "2026-04-07",
    updated: "2026-09-29",
    readingTime: "13 min read",
    relatedServiceSlugs: ["shopify-development", "website-development"],
    relatedIndustrySlugs: ["fashion-apparel", "ecommerce"],
    faqs: [
      { q: "What is Shopify headless commerce?", a: "Using Shopify as the commerce back end (products, inventory, cart, checkout, orders) while a separate, custom front end renders the storefront and talks to Shopify through its APIs." },
      { q: "When should you go headless on Shopify?", a: "When front-end requirements go beyond what themes can deliver, such as content-heavy experiences, several storefronts sharing components, or complex product interactions, and you have the team and budget to maintain a web application." },
      { q: "What is Shopify Hydrogen?", a: "Shopify's framework for headless storefronts, built as React Router apps with Shopify-specific components, usually hosted on Oxygen. See the Shopify Hydrogen guide." },
      { q: "Is headless Shopify faster?", a: "It can be, with careful engineering. A well-optimized theme is also fast, and a poorly built headless site can be slow." },
      { q: "Does checkout change in headless?", a: "No. Shopify's hosted checkout is still used; your front end builds the cart through the Storefront API and hands off to checkout." },
      { q: "Do apps work with headless Shopify?", a: "Back-office apps generally do. Apps that add storefront features through theme app blocks need integration through their APIs, if available." },
      { q: "How do marketers edit content without a theme editor?", a: "Through a headless CMS or Shopify metaobjects, with components built to render them. This needs planning before build." },
      { q: "Is headless SEO harder?", a: "It's more work, not inherently worse. You implement metadata, sitemaps, canonicals, redirects and structured data yourself, and must render content on the server." },
      { q: "Do I need Shopify Plus for headless?", a: "No. The Storefront API and Oxygen are available on paid plans; Plus adds more Hydrogen storefronts and other capabilities." },
      { q: "Who should not go headless?", a: "Stores whose needs a theme meets, teams without ongoing front-end development capacity, and businesses hoping headless alone will fix conversion." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Go headless on Shopify when your storefront needs something a theme can't deliver without being rebuilt, and you can sustain a web application team. Typical reasons are content-rich commerce combining a CMS with products, several storefronts or brands sharing a component system, or complex interactive products. Shopify still runs products, inventory, pricing, checkout and orders; your front end, built with Hydrogen or another framework, renders the pages. You lose the theme editor and plug-and-play app blocks, and you take on SEO, performance and maintenance.",
        ],
      },
      {
        heading: "What Headless Separates",
        body: [
          "A theme-based store bundles the storefront and the commerce back end: Shopify renders the theme. The diagram above shows the headless alternative: a custom front end calls the Storefront API, content may come from a CMS, and checkout and core commerce stay with Shopify. For the platform-independent concept, see [[/blogs/headless-website-development|headless website development]].",
        ],
      },
      {
        heading: "Theme vs Headless",
        body: [],
        table: {
          headers: ["Factor", "Theme-based Shopify", "Headless Shopify"],
          rows: [
            ["Front-end flexibility", "Within theme architecture", "Full control"],
            ["Content editing", "Theme editor", "CMS or metaobjects plus components"],
            ["Apps", "App blocks and embeds", "API integrations, case by case"],
            ["SEO basics", "Output by theme and platform", "Implemented by you"],
            ["Hosting", "Shopify", "Oxygen or your own hosting"],
            ["Team", "Shopify theme developers", "Web application engineers"],
            ["Time to launch", "Faster", "Slower"],
            ["Ongoing cost", "Lower", "Higher"],
          ],
        },
      },
      {
        heading: "Good Reasons to Go Headless",
        body: [],
        checklist: [
          "Editorial or content-led commerce that needs a real CMS",
          "Several storefronts, brands or markets sharing one component system",
          "Complex configurators or interactive product experiences",
          "Integration of commerce into a wider web application",
          "Performance goals a theme can't meet after optimization",
          "A long-term engineering team to own it",
        ],
      },
      {
        heading: "Weak Reasons",
        body: [],
        checklist: [
          "“It's more modern”",
          "Hoping it will fix conversion on its own",
          "Speed, when the theme hasn't been optimized yet",
          "No budget for development after launch",
          "Needs a theme and a few custom sections could meet",
        ],
        callout: {
          type: "takeaway",
          text: "Headless should solve a specific, current requirement. If a theme can meet it, the theme is usually the better business decision.",
        },
      },
      {
        heading: "Hydrogen or Another Framework?",
        body: [
          "Hydrogen is Shopify's framework: React Router apps with Shopify-specific components, hosted on Oxygen, which Shopify documents as available on paid plans. It's the most direct route for commerce-first storefronts. General frameworks such as Next.js suit teams already using them or sites with large non-commerce sections. Both use the same Shopify APIs. See [[/blogs/shopify-hydrogen|Shopify Hydrogen]] and [[/blogs/nextjs-website-development|Next.js development]].",
        ],
        cta: {
          title: "Considering headless for your Shopify store?",
          description: "ZSpace assesses whether your requirements need headless, or whether a well-built theme gets you there for less.",
        },
      },
      {
        heading: "What You Own After Launch",
        body: [
          "Every storefront change becomes front-end development: new landing page layouts, merchandising modules, tracking changes. You also own dependency and API version updates, monitoring, uptime, SEO output and accessibility. Budget for an ongoing engineering relationship, not only the launch.",
        ],
      },
      {
        heading: "SEO and Analytics in Headless",
        body: [
          "Render content on the server, output titles, descriptions and canonicals, generate sitemaps, manage redirects, and implement product structured data. Rebuild analytics events and consent handling. Treat a move from a theme as a migration with URL mapping. See [[/blogs/product-structured-data-ecommerce|product structured data]] and [[/blogs/ecommerce-analytics|ecommerce analytics]].",
        ],
      },
      {
        heading: "A Middle Path",
        body: [
          "Many needs that prompt headless discussions can be met inside a theme: metaobjects for structured content, custom sections for rich layouts, and apps for search and recommendations. Some brands run a theme for the store and a separate headless site for editorial content. Explore these before committing. See [[/blogs/shopify-theme-vs-custom-development|Shopify theme customization]].",
        ],
      },
      {
        heading: "Content Management Options",
        body: [
          "The theme editor is the biggest thing a headless store gives up, so decide early how the team will edit content.",
        ],
        table: {
          headers: ["Option", "Fits when", "Watch out for"],
          rows: [
            ["Shopify metaobjects", "Structured content tied to products and collections", "Limited page-building flexibility"],
            ["Headless CMS", "Editorial content, landing pages, several sites", "Another system to license, model and maintain"],
            ["Code-managed content", "Rarely changing pages", "Every edit needs a developer"],
          ],
        },
      },
      {
        heading: "Total Cost of Ownership",
        body: [
          "Compare headless with a theme over several years, not only the build.",
        ],
        table: {
          headers: ["Cost area", "Theme-based", "Headless"],
          rows: [
            ["Initial build", "Theme customization or custom theme", "Web application, content model, integrations"],
            ["Hosting", "Included in Shopify", "Oxygen on paid plans, or your own hosting"],
            ["Content changes", "Mostly theme editor", "CMS plus development for new layouts"],
            ["App integrations", "App blocks", "API work per app"],
            ["Maintenance", "Theme and app updates", "Dependencies, API versions, monitoring"],
            ["Team", "Shopify developers", "Front-end engineers with commerce experience"],
          ],
        },
      },
      {
        heading: "Common Headless Mistakes",
        body: [],
        checklist: [
          "Going headless to fix speed without optimizing the theme first",
          "No content model, so marketers depend on developers for every change",
          "Forgetting SEO basics the theme used to provide",
          "Assuming every app will work without integration",
          "Budgeting for launch but not for ongoing engineering",
        ],
      },
      {
        heading: "Planning a Headless Build",
        body: [],
        checklist: [
          "Written requirements a theme can't meet",
          "Proof of concept for the hardest experience",
          "Content model and CMS choice",
          "App-by-app integration plan",
          "URL map, redirects and SEO requirements",
          "Performance budgets and monitoring",
          "Team and budget for ongoing ownership",
        ],
        cta: {
          title: "Ready to scope a headless storefront?",
          description: "Talk to ZSpace about [[/services/shopify-development|headless Shopify]] and [[/services/website-development|web application development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Headless Shopify gives full front-end control while Shopify runs commerce and checkout. It pays off for specific, demanding requirements with a team to sustain it; otherwise a theme is simpler, cheaper and just as capable of converting well. For all build options, see [[/blogs/shopify-store-development|Shopify store development]].",
          "For related guides, see [[/blogs/headless-ecommerce-architecture|headless ecommerce architecture]], [[/blogs/shopify-hydrogen-vs-traditional-shopify|Hydrogen vs traditional Shopify]] and [[/blogs/shopify-plus-development|Shopify Plus development]].",
        ],
      },
    ],
  },

  // ---------------------------------------------- 68 · STORE MIGRATION
  {
    slug: "migrating-to-shopify-guide",
    title: "Shopify Migration: How to Move an Ecommerce Store to Shopify",
    seoTitle: "Shopify Migration: How to Move an Ecommerce Store to Shopify",
    excerpt: "How to migrate a store to Shopify: products, customers, orders, URLs and redirects, metadata, apps, integrations, analytics, QA and launch without losing SEO.",
    category: "Shopify & Ecommerce",
    banner: "shopifymigrationflow",
    bannerAlt:
      "Shopify migration process: inventory and baseline, map URLs and data, import and clean, build and redirects, test orders, launch and monitor, comparing search traffic and sales against the baseline.",
    date: "2026-03-10",
    updated: "2026-09-30",
    readingTime: "17 min read",
    relatedServiceSlugs: ["shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "fashion-apparel"],
    faqs: [
      { q: "How do I migrate my store to Shopify?", a: "Inventory your data and URLs, record a baseline, import products, customers and orders with Shopify's migration app, CSV files or APIs, map every old URL to its Shopify equivalent and create redirects, rebuild the storefront, test orders and SEO output, then launch and monitor." },
      { q: "Will I lose SEO when moving to Shopify?", a: "Not if redirects, content and metadata are handled carefully. Rankings are at risk when URLs change without redirects or when content and titles are lost." },
      { q: "Can customer passwords be migrated to Shopify?", a: "No. Shopify explains that passwords are encrypted by the previous platform and can't be imported. Import customers, then invite them to activate their accounts." },
      { q: "Can I import historical orders?", a: "Yes, using migration apps or Shopify's APIs. Decide how much history you need for customer service and reporting." },
      { q: "How do I create redirects in Shopify?", a: "In the admin, create URL redirects individually or import them in bulk from a CSV file." },
      { q: "Why do URLs change when moving to Shopify?", a: "Shopify uses fixed URL patterns such as /products/, /collections/, /pages/ and /blogs/. Old URLs that don't match need 301 redirects." },
      { q: "How long does a Shopify migration take?", a: "It depends on catalog size, data quality, integrations, content and whether you redesign at the same time. Data and integrations usually drive the timeline." },
      { q: "Should I redesign while migrating?", a: "Keep design changes limited if you can. Changing platform and design together makes problems harder to diagnose." },
      { q: "What about subscriptions and gift cards?", a: "Plan them early. Gift card balances and subscription contracts need specific tools and, for subscriptions, cooperation from payment providers." },
      { q: "What should I monitor after launch?", a: "Search Console coverage and 404s, organic traffic and rankings, conversion by device, payment errors and customer service contacts, daily for the first weeks." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "To move to Shopify without losing SEO, inventory every URL and record a baseline, then import data with Shopify's Store Migration app, CSV files or APIs. Shopify can't import customer passwords, so plan account invitations. Map every old URL to its Shopify equivalent and create 301 redirects, individually or by CSV import. Carry over titles, meta descriptions, content, alt text and structured data, test orders and redirects on the new store, launch at a quiet time, and monitor Search Console and sales daily against the baseline.",
        ],
      },
      {
        heading: "Migration, Replatforming and Redesign",
        body: [
          "This guide covers the practical steps of moving to Shopify. The broader decision of whether and how to change platform is in [[/blogs/ecommerce-replatforming|ecommerce replatforming]]; for non-commerce sites, see the [[/blogs/website-migration-guide|website migration guide]].",
        ],
      },
      {
        heading: "Is Shopify the Right Destination?",
        body: [
          "Not every migration should move to Shopify. It suits businesses that value a hosted platform, a large app ecosystem, fast operations and Shopify's checkout, with requirements that fit its data model. Businesses with highly custom checkout logic beyond checkout extensibility, very complex B2B requirements or unusual catalog structures should evaluate alternatives. Compare requirements against platforms before committing. See [[/blogs/ecommerce-replatforming|choosing your next platform]].",
        ],
      },
      {
        heading: "Step 1: Inventory and Baseline",
        body: [],
        checklist: [
          "Crawl the current site and export every URL",
          "Pull URLs with organic traffic, backlinks or revenue from analytics and Search Console",
          "Export existing redirects",
          "List products, variants, customers, orders, content, reviews, gift cards and subscriptions",
          "List integrations and apps to replace",
          "Record a baseline: organic traffic, rankings for key terms, conversion by device, revenue",
        ],
      },
      {
        heading: "Step 2: Map Data to Shopify's Model",
        body: [
          "Shopify's catalog model may differ from your current platform. Decide how products and variants map (up to three options and 2,048 variants per product), which attributes become metafields, how categories become collections, and how content maps to pages and blogs. Clean data before import rather than after.",
        ],
      },
      {
        heading: "Clean Data Before You Import",
        body: [
          "Migration is the cheapest moment to fix data problems, because everything is being touched anyway.",
        ],
        checklist: [
          "Remove discontinued products you won't redirect or sell again",
          "Merge duplicate products that should be variants",
          "Standardize attribute names and values for metafields",
          "Fix missing images, alt text and product types",
          "Deduplicate customer records and check marketing consent fields",
          "Decide how much order history to import",
        ],
      },
      {
        heading: "Step 3: Import",
        body: [
          "Shopify documents several ways to bring data across ([[https://help.shopify.com/en/manual/migrating-to-shopify|Shopify Help Center]]).",
        ],
        table: {
          headers: ["Data", "Methods"],
          rows: [
            ["Products", "Store Migration app, product CSV, migration apps"],
            ["Customers", "Customer CSV, migration apps, API"],
            ["Historical orders", "Migration apps, Order and Transaction APIs"],
            ["Pages, blogs, gift cards", "Migration apps, APIs, manual"],
            ["Redirects", "Admin, or CSV import"],
          ],
        },
        callout: {
          type: "note",
          text: "Customer passwords can't be imported, because the previous platform encrypted them. Shopify's guidance is to invite imported customers to create new passwords; bulk invitations need a third-party app.",
        },
      },
      {
        heading: "Import Order and Tools",
        body: [
          "Shopify's migration guidance is to import products first, then customers, then historical orders, so orders can link to the products and customers they belong to ([[https://help.shopify.com/en/manual/migrating-to-shopify|Shopify Help Center]]). Shopify's first-party Store Migration app can import data from some platforms, such as products from WooCommerce and products and customers from Wix or Square, but Shopify describes it as early access and only available for certain stores; historical orders typically need third-party migration apps or the APIs. Large or complex catalogs often use CSV-based bulk tools or custom scripts against the Admin API.",
        ],
        table: {
          headers: ["Order", "Data", "Why this order"],
          rows: [
            ["1", "Products, variants, metafields, images", "Orders and collections reference products"],
            ["2", "Collections and navigation", "Group imported products"],
            ["3", "Customers with consent status", "Orders reference customers"],
            ["4", "Historical orders", "Linked to products and customers"],
            ["5", "Content: pages, blogs, redirects", "Can follow once URLs are known"],
            ["6", "Gift cards, loyalty, subscriptions", "Need balances and tokens verified"],
          ],
        },
      },
      {
        heading: "Step 4: URL Mapping and Redirects",
        body: [
          "Shopify's URL patterns are fixed: products under /products/, collections under /collections/, pages under /pages/, blog posts under /blogs/. Map every old URL with traffic, links or revenue to its closest Shopify equivalent and create 301 redirects. Redirect removed items to the closest relevant product or collection, not all to the homepage.",
        ],
        table: {
          headers: ["Old URL", "Shopify URL"],
          rows: [
            ["/product/linen-shirt", "/products/linen-shirt"],
            ["/category/shirts", "/collections/shirts"],
            ["/about-us", "/pages/about-us"],
            ["/blog/how-to-wash-linen", "/blogs/journal/how-to-wash-linen"],
          ],
        },
      },
      {
        heading: "Step 5: Preserve On-Page SEO",
        body: [],
        checklist: [
          "Titles and meta descriptions carried over for important pages",
          "Product and collection copy preserved",
          "Image alt text preserved",
          "Heading structure kept on key templates",
          "Structured data output checked on the new theme",
          "Internal links updated to new URLs",
          "No leftover staging noindex or password protection at launch",
        ],
        cta: {
          title: "Moving to Shopify and worried about rankings?",
          description: "ZSpace handles Shopify migrations end to end, from URL mapping and data import to post-launch monitoring.",
        },
      },
      {
        heading: "Step 6: Rebuild the Storefront and Integrations",
        body: [
          "Choose the theme approach, rebuild templates, and replace old plugins with apps or custom work. Rebuild integrations with ERP, inventory and fulfilment, and test them with real volumes. See [[/blogs/shopify-store-development|Shopify store development]].",
        ],
      },
      {
        heading: "Apps and Integrations Mapping",
        body: [
          "List every plugin, extension and integration on the old platform and decide what replaces it on Shopify: a native feature, a Shopify app, custom app or integration, or nothing. Migrations are a good moment to remove tools nobody uses. Pay particular attention to integrations with ERP, inventory, shipping and subscriptions, which must work from day one. See [[/blogs/shopify-app-integration-guide|Shopify app integrations]] and [[/blogs/ecommerce-erp-integration|ecommerce ERP integration]].",
        ],
        table: {
          headers: ["Old platform feature", "Shopify replacement options"],
          rows: [
            ["Product reviews plugin", "Reviews app with import"],
            ["Custom fields", "Metafields and metaobjects"],
            ["Subscription extension", "Shopify Subscriptions or subscription app, with token migration"],
            ["Multi-currency plugin", "Shopify Markets"],
            ["ERP connector", "Connector app or custom integration"],
            ["Custom checkout code", "Checkout extensibility options, depending on plan"],
          ],
        },
      },
      {
        heading: "Analytics and Tracking",
        body: [
          "Recreate tracking before launch: analytics tags, conversion events, marketing pixels and consent handling, using Shopify's customer events and apps where appropriate. Keep event definitions the same as before so comparisons with the baseline are meaningful, annotate the launch date and test purchases end to end. See [[/blogs/shopify-analytics-guide|Shopify analytics]].",
        ],
      },
      {
        heading: "Step 7: Test",
        body: [],
        checklist: [
          "Test orders with each payment method, market and shipping method",
          "Discounts, gift cards and subscriptions",
          "Customer account activation flow",
          "Bulk redirect check against the full URL list",
          "Canonicals, sitemap and robots output",
          "Analytics and marketing pixels",
          "Speed and accessibility on key templates",
        ],
      },
      {
        heading: "Shopify-Specific Constraints to Plan For",
        body: [
          "A few Shopify characteristics shape most migrations. URLs use fixed prefixes such as /products/ and /collections/, so most old URLs need redirects. Products support up to three options and, per Shopify's documentation, up to 2,048 variants each; catalogs with more complex variation need restructuring or metafields. Customer passwords can't be migrated, so plan account activation or rely on Shopify's customer accounts sign-in. Checkout customization follows checkout extensibility, with some capabilities limited to Plus. Import products, then customers, then historical orders.",
        ],
        table: {
          headers: ["Area", "Plan for"],
          rows: [
            ["URLs", "Redirect map to /products/, /collections/, /pages/, /blogs/"],
            ["Variants", "Up to 3 options per product; restructure if needed"],
            ["Custom data", "Metafields and metaobjects"],
            ["Customers", "Account activation or new customer accounts"],
            ["Checkout", "Checkout extensibility; Plus for info/shipping/payment extensions"],
            ["Payments", "Shopify Payments availability or third-party gateways"],
            ["Apps", "Replacement for each old plugin or custom feature"],
          ],
        },
      },
      {
        heading: "Step 8: Launch",
        body: [
          "Freeze catalog changes on the old site, run a final sync of orders and customers, point the domain to Shopify, confirm redirects are live, submit the sitemap in Search Console, and place live test orders. Launch at a quiet time with the team available.",
        ],
      },
      {
        heading: "Step 9: Monitor and Stabilize",
        body: [
          "Check Search Console for 404s and coverage changes, organic traffic and rankings, conversion by device, payment errors and support contacts daily for the first weeks. Fix redirect gaps immediately. Compare with the baseline before starting optimization; then continue with [[/blogs/shopify-seo-guide|Shopify SEO]] and the [[/blogs/shopify-store-maintenance-checklist|maintenance checklist]].",
        ],
      },
      {
        heading: "The First 30 Days After Launch",
        body: [],
        table: {
          headers: ["When", "Check"],
          rows: [
            ["Day 1", "Live test orders, redirects on top URLs, analytics firing, sitemap submitted"],
            ["Week 1", "Daily 404 and coverage checks, payment errors, support contacts, conversion by device"],
            ["Weeks 2–4", "Organic traffic and rankings vs baseline, fix redirect gaps, restore any lost content"],
            ["Day 30", "Full comparison with baseline; start the optimization backlog"],
          ],
        },
      },
      {
        heading: "Worked Example: WooCommerce to Shopify",
        body: [
          "An illustrative scenario, not a client case: a store on WooCommerce with 1,500 products, 25,000 customers and a blog moves to Shopify. The team crawls 3,800 URLs, maps product, category, page and blog URLs to Shopify's fixed paths, imports products with custom fields mapped to metafields, then customers with marketing consent, then two years of orders through a migration app. Reviews are imported through the new reviews app. Redirects are uploaded by CSV, metadata is carried over, and customers receive an email inviting them to set a password. After launch the team monitors crawl errors and organic traffic by page type against the baseline. For the platform-agnostic view, see [[/blogs/ecommerce-platform-migration|ecommerce platform migration]].",
        ],
      },
      {
        heading: "Common Migration Mistakes",
        body: [],
        checklist: [
          "Incomplete redirect maps",
          "Redirecting everything to the homepage",
          "Losing titles, descriptions and alt text",
          "Forgetting customer account invitations",
          "Leaving gift cards or subscriptions until the end",
          "Redesigning everything at the same time",
          "Launching before peak season",
        ],
        cta: {
          title: "Want a Shopify migration that keeps what you've earned?",
          description: "Talk to ZSpace about [[/services/shopify-development|Shopify migration]] and a [[/services/cro-audit|post-launch conversion review]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A Shopify migration succeeds or fails on preparation: a complete inventory, clean data, a full redirect map, preserved content and metadata, thorough testing and close monitoring. The data transfer itself is the well-solved part; the details around it protect your rankings and sales.",
        ],
      },
    ],
  },

  // -------------------------------------------------- 72 · SHOPIFY SEO
  {
    slug: "shopify-seo-guide",
    title: "Shopify SEO: A Complete Guide to Ranking Your Store",
    excerpt:
      "How SEO works on Shopify: what the platform handles, what you control, collections, products, filters, structured data, speed, Markets, content and migration.",
    category: "Shopify & Ecommerce",
    banner: "shopifyseomap",
    bannerAlt:
      "Shopify SEO responsibilities: Shopify handles canonical tags, the automatic sitemap, default robots.txt rules, hreflang for Markets, product schema in themes and SSL; you handle titles and handles, collection and product content, internal links, redirects, filter and variant URLs, apps, speed and schema gaps.",
    date: "2026-03-09",
    updated: "2026-09-29",
    readingTime: "16 min read",
    relatedServiceSlugs: ["shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["fashion-apparel", "d2c-consumer", "ecommerce"],
    faqs: [
      { q: "Is Shopify good for SEO?", a: "Yes. Shopify handles canonical tags, sitemaps, default robots rules, SSL and hreflang for Markets automatically, and gives you control over titles, descriptions, handles, content and redirects. Rankings depend on how well you use that control." },
      { q: "What does Shopify do for SEO automatically?", a: "It generates canonical tags, a sitemap.xml updated as you add content, a default robots.txt, SSL, hreflang tags for Markets, and themes include product schema markup." },
      { q: "What do I have to do myself?", a: "Plan collections, write titles, descriptions and content, manage handles and redirects, control filter and tag URLs, link important pages, keep the site fast, check structured data and create helpful content." },
      { q: "Do I need an SEO app?", a: "Not for the basics. Apps help with bulk editing, structured data gaps or image optimization on large catalogs. Check they don't duplicate your theme's structured data." },
      { q: "Can I edit robots.txt on Shopify?", a: "Yes, through robots.txt.liquid. Shopify calls it an unsupported customization and warns that incorrect use can cause loss of all traffic." },
      { q: "Why are there /collections/.../products/... URLs?", a: "Some themes link to products within collections. Those URLs canonicalize to /products/, but linking directly to /products/ URLs is cleaner." },
      { q: "How does Shopify handle international SEO?", a: "Shopify Markets supports domains, subdomains or subfolders per market, generates hreflang tags automatically and includes market URLs in the sitemap." },
      { q: "What's the difference between Shopify SEO and ecommerce SEO?", a: "Ecommerce SEO is the platform-independent strategy. Shopify SEO applies it to Shopify's URL structure, defaults, admin fields, themes and apps." },
      { q: "Does changing a product handle hurt SEO?", a: "It creates a new URL. Shopify offers to create a redirect from the old one; keep that selected." },
      { q: "How do I check Shopify SEO issues?", a: "Use Search Console for indexing, performance and rich result reports, crawl the store with an SEO crawler, and test product pages with the Rich Results Test." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Shopify SEO means using what Shopify controls well and doing the rest deliberately. Shopify automatically handles canonical tags, the sitemap, default robots.txt rules, SSL, hreflang for Markets and basic product schema in themes. You handle the parts that decide rankings: a collection structure mapped to search intent, unique titles, descriptions and content for collections and products, clean handles and redirects, control of tag, filter and variant URLs, internal links, speed, complete structured data, and helpful content that links into the catalog.",
        ],
      },
      {
        heading: "How This Guide Fits",
        body: [
          "This is the Shopify SEO hub. Platform-independent strategy is in [[/blogs/ecommerce-seo|ecommerce SEO]]. Deep dives cover [[/blogs/shopify-product-seo|product pages]], [[/blogs/shopify-collection-page-seo|collections]], [[/blogs/ecommerce-faceted-navigation-seo|filters]], [[/blogs/product-structured-data-ecommerce|structured data]] and [[/blogs/ecommerce-internal-linking|internal linking]].",
        ],
      },
      {
        heading: "What Shopify Handles",
        body: [
          "According to Shopify's SEO documentation, canonical tags are added automatically, sitemap.xml and robots.txt are generated automatically, themes generate title tags and include product schema markup, and SSL is on by default ([[https://help.shopify.com/en/manual/promoting-marketing/seo/seo-overview|Shopify Help Center]]). The sitemap covers products, primary product images, pages, collections and blog posts, and updates when you add content.",
        ],
        table: {
          headers: ["Default robots.txt rule", "Purpose"],
          rows: [
            ["Disallow: /admin, /cart, /checkout, /account, /orders", "Private or customer-specific pages"],
            ["Disallow: /collections/*+*", "Combined tag URLs that duplicate collections"],
            ["Disallow: /collections/*sort_by*", "Sorted duplicates of collections"],
          ],
        },
      },
      {
        heading: "What You Control",
        body: [
          "The diagram above splits the work. The right-hand column is where rankings are won: structure, content, links, URLs and speed.",
        ],
      },
      {
        heading: "Collection Structure",
        body: [
          "Collections usually target a store's most valuable commercial searches. Map searches to collections by intent, build automated collections from consistent product data, give each a unique title, description and handle, and link important collections from the main menu. See [[/blogs/shopify-collection-page-seo|Shopify collection page SEO]].",
        ],
      },
      {
        heading: "Product Pages",
        body: [
          "Write descriptive titles, unique descriptions covering searched attributes, and alt text; set search engine listing titles and descriptions; keep variants on one URL unless a variant has its own demand; and handle sold-out and discontinued products without deleting pages that will return. See [[/blogs/shopify-product-seo|Shopify product SEO]].",
        ],
      },
      {
        heading: "Tags, Filters and Variant URLs",
        body: [
          "Shopify creates several URL types that can duplicate content: single tag pages under collections, filter parameters, sort parameters and ?variant= URLs. The defaults block combined tags and sort orders. Avoid linking to tag pages, check how your theme outputs filter URLs, and create dedicated collections for filtered views worth ranking. Edit robots.txt.liquid only with expertise; Shopify warns incorrect use can lose all traffic ([[https://help.shopify.com/en/manual/promoting-marketing/seo/editing-robots-txt|Shopify Help Center]]).",
        ],
      },
      {
        heading: "Structured Data",
        body: [
          "Themes include product schema, but coverage varies. Test product templates with the Rich Results Test and look for missing brand, identifiers, shipping and return details, and duplicate Product blocks added by apps. Keep one complete block that matches the visible page. See [[/blogs/product-structured-data-ecommerce|product structured data]].",
        ],
        cta: {
          title: "Want to know what's holding your Shopify SEO back?",
          description: "ZSpace audits collection structure, templates, URLs and structured data, and fixes them in the theme.",
        },
      },
      {
        heading: "Speed and Core Web Vitals",
        body: [
          "Shopify's web performance reports show Core Web Vitals from real visitors. Apps, large images and heavy themes are the usual causes of slow pages. Good performance helps search and, more directly, conversion. See [[/blogs/shopify-core-web-vitals-performance-guide|Shopify Core Web Vitals]].",
        ],
      },
      {
        heading: "International SEO With Markets",
        body: [
          "Shopify Markets supports subfolders, subdomains or domains per market, generates hreflang tags automatically, includes market URLs in the sitemap, and excludes search engine crawlers from automatic redirection so every version can be indexed ([[https://help.shopify.com/en/manual/markets/seo|Shopify Help Center]]). Translate content properly and localize titles and descriptions.",
        ],
      },
      {
        heading: "Content and Internal Links",
        body: [
          "Shopify's blog can host buying guides and how-to content that captures research searches. Link each article to the collections and products it discusses, and link important collections from navigation, breadcrumbs and related collections. See [[/blogs/ecommerce-internal-linking|ecommerce internal linking]].",
        ],
      },
      {
        heading: "Handles, Redirects and Migrations",
        body: [
          "When you change a handle, Shopify offers to create a redirect; keep it. When removing products or collections, redirect to the closest relevant page. When migrating to Shopify, map every old URL. See [[/blogs/migrating-to-shopify-guide|Shopify store migration]].",
        ],
      },
      {
        heading: "Apps and SEO",
        body: [
          "Apps can help with bulk metadata, image compression and structured data, but they can also add scripts, duplicate schema and create extra URLs. Audit apps regularly and remove leftovers from uninstalled apps.",
        ],
      },
      {
        heading: "AI Search",
        body: [
          "Google says there are no additional requirements or special markup to appear in AI Overviews or AI Mode ([[https://developers.google.com/search/docs/appearance/ai-features|Google Search Central]]). For Shopify stores, the same fundamentals apply: crawlable pages, accurate product data and helpful content.",
        ],
      },
      {
        heading: "Common Shopify SEO Issues and Fixes",
        body: [],
        table: {
          headers: ["Issue", "Cause", "Fix"],
          rows: [
            ["Duplicate collection-scoped product URLs linked internally", "Theme links products through /collections/…/products/…", "Link to /products/ URLs in grids and menus"],
            ["Thin tag pages indexed", "Links to /collections/x/tag pages", "Stop linking; build real collections for tags with demand"],
            ["Duplicate Product structured data", "Theme plus a reviews or SEO app both output it", "Keep one complete block; disable the other"],
            ["Default titles like “Products – Store”", "Search engine listing fields left empty", "Write unique titles for collections and key products"],
            ["404s after catalog clean-up", "Products deleted without redirects", "Redirect to replacement or collection; keep sold-out products that return"],
            ["Slow collection pages", "Too many apps and large images", "Audit apps, lazy-load below the first row, compress media"],
            ["Wrong market indexed", "Markets misconfigured or content not translated", "Check Markets domains or subfolders and hreflang output"],
          ],
        },
      },
      {
        heading: "A Quarterly Shopify SEO Review",
        body: [],
        checklist: [
          "Search Console: indexing report, crawl stats, rich result and merchant listing reports",
          "Crawl the store: broken links, redirect chains, duplicate titles, orphan products",
          "Top collections: rankings, content freshness, internal links",
          "New products: titles, descriptions, alt text, collection membership",
          "Apps: remove unused ones and their leftover code",
          "Core Web Vitals on product and collection templates",
          "Blog: update top guides and their product links",
        ],
      },
      {
        heading: "Shopify SEO Checklist",
        body: [],
        checklist: [
          "Collections mapped to search intent, linked from navigation",
          "Unique titles and meta descriptions on collections and key products",
          "Unique product descriptions and alt text",
          "Handles stable; redirects for every change",
          "Tag, filter and sort URLs controlled",
          "One complete Product structured data block per product",
          "Core Web Vitals checked on product and collection templates",
          "Markets configured with translated content",
          "Guides linking into collections and products",
          "Search Console monitored for indexing and rich results",
        ],
        cta: {
          title: "Ready to improve your Shopify rankings?",
          description: "Talk to ZSpace about [[/services/shopify-development|Shopify SEO implementation]] and [[/services/cro-audit|conversion work]] on the traffic you win.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Shopify gives stores a solid technical floor. Rankings come from what you build on it: collection structure, content, links, clean URLs, fast templates and accurate structured data. Work through the checklist, then use the deep dives for each area.",
        ],
      },
    ],
  },

  // --------------------------------------------- 83 · SHOPIFY ANALYTICS
  {
    slug: "shopify-analytics-guide",
    title: "Shopify Analytics: What Metrics Should Store Owners Track?",
    excerpt:
      "Which metrics Shopify store owners should track, where to find them in Shopify Analytics, how it relates to GA4 and Search Console, and how to keep data trustworthy.",
    category: "Shopify & Ecommerce",
    banner: "shopifyanalyticsmap",
    bannerAlt:
      "What each tool is best for: Shopify Analytics for sales, orders, sessions, funnel, products, cohorts and marketing reports; GA4 for events, journeys, landing pages, site search and explorations; Search Console for queries, indexing, Core Web Vitals, rich results and links.",
    date: "2026-04-09",
    updated: "2026-09-29",
    readingTime: "13 min read",
    relatedServiceSlugs: ["cro-audit", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer"],
    faqs: [
      { q: "What metrics should Shopify store owners track?", a: "Net sales, orders and average order value; sessions and conversion rate by channel and device; the funnel from sessions to add-to-cart, reached checkout and completed checkout; returning customer rate and cohort retention; top products and inventory; and returns." },
      { q: "Is Shopify Analytics available on all plans?", a: "Shopify says the main analytics features are available on every plan. Staff need analytics permissions to view reports." },
      { q: "How does Shopify calculate conversion rate?", a: "Each funnel step's rate is sessions reaching that step divided by total sessions. Sessions are based on continued activity rather than ending at midnight UTC." },
      { q: "Should I use GA4 as well?", a: "For most growing stores, yes. Shopify is the source of truth for orders and revenue; GA4 adds journeys, events, landing page and campaign analysis. Connect it through the Google & YouTube sales channel." },
      { q: "Why don't Shopify and GA4 numbers match?", a: "They define sessions differently, GA4 can miss visitors who decline consent or block scripts, and attribution models differ. Use Shopify for sales and GA4 for behavior." },
      { q: "Does Shopify have cohort analysis?", a: "Yes. The customer cohort analysis report groups customers by first order date and can show customers, retention rate, gross sales, net sales or average order value." },
      { q: "What is RFM analysis in Shopify?", a: "Shopify's RFM customer analysis report groups customers using recency, frequency and monetary value, which helps target retention and win-back efforts." },
      { q: "What does Live View show?", a: "Online store activity in real time, useful during launches and sales." },
      { q: "Which metrics matter most for CRO?", a: "Stage-to-stage funnel rates by device and channel, revenue per session and average order value. See the Shopify CRO metrics guide." },
      { q: "How do I keep Shopify data trustworthy?", a: "Exclude test orders, keep a change log, check pixels and GA4 after theme or app changes, and compare GA4 revenue with Shopify weekly." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Shopify store owners should track a short list: net sales, orders and average order value; sessions and conversion rate by channel and device; the funnel from sessions to added-to-cart, reached checkout and completed checkout; returning customer rate and cohort retention; top products, inventory and returns. Use Shopify Analytics as the source of truth for orders and revenue, GA4 for journeys and campaigns, and Search Console for organic search. Keep the setup clean, compare periods properly, and review weekly with a few metrics tied to decisions.",
        ],
      },
      {
        heading: "Start With Decisions",
        body: [
          "A dashboard of forty metrics gets checked less and acted on less than one with a handful tied to decisions. Decide what you're trying to improve this quarter, then track the metrics that tell you whether it's working. For the platform-independent measurement plan, see [[/blogs/ecommerce-analytics|ecommerce analytics]].",
        ],
      },
      {
        heading: "What Shopify Analytics Includes",
        body: [
          "Shopify says its main analytics features are available on every plan: a customizable Analytics overview of metric cards, a reports library, and Live View for real-time activity ([[https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports|Shopify Help Center]]).",
        ],
        table: {
          headers: ["Report area", "Use it for"],
          rows: [
            ["Sales", "Net sales, orders, AOV, discounts, returns"],
            ["Behavior", "Sessions, conversion funnel, landing pages, devices"],
            ["Customers", "New vs returning, cohorts, RFM, locations"],
            ["Products and inventory", "Top sellers, sell-through, stock"],
            ["Marketing", "Sessions and sales by channel and campaign"],
            ["Live View", "Real-time activity during launches"],
          ],
        },
      },
      {
        heading: "The Metrics Worth Tracking",
        body: [],
        table: {
          headers: ["Area", "Metrics", "Question answered"],
          rows: [
            ["Revenue", "Net sales, orders, AOV", "Are we growing, and how much is each order worth?"],
            ["Traffic", "Sessions by channel and device", "Where do visitors come from?"],
            ["Conversion", "Added to cart, reached checkout, completed checkout rates", "Where do shoppers drop off?"],
            ["Customers", "Returning customer rate, cohort retention", "Do customers come back?"],
            ["Products", "Top products, sell-through, returns", "What sells and what disappoints?"],
            ["Marketing", "Sales and sessions by campaign", "Which spend works?"],
          ],
        },
      },
      {
        heading: "Understanding Shopify's Conversion Rate",
        body: [
          "Shopify defines each funnel step's conversion rate as sessions reaching that step divided by total sessions, with sessions based on continued activity ([[https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports|Shopify Help Center]]). Compare rates by device and channel rather than relying on the store-wide number. See [[/blogs/ecommerce-conversion-rate|ecommerce conversion rate]].",
        ],
      },
      {
        heading: "Customer Reports: Cohorts and RFM",
        body: [
          "The customer cohort analysis report groups customers by first order date and can show customers, retention rate, gross sales, net sales or AOV. RFM reports group customers by recency, frequency and monetary value ([[https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/customers-reports|Shopify Help Center]]). Use them to see whether newer customers return as often as older ones and which groups to target. See [[/blogs/ecommerce-cohort-analysis|ecommerce cohort analysis]].",
        ],
        cta: {
          title: "Not sure which Shopify numbers to trust?",
          description: "ZSpace sets up a lean, validated analytics view tied to the decisions you actually make.",
        },
      },
      {
        heading: "Shopify Analytics, GA4 and Search Console",
        body: [
          "The diagram above shows what each tool is best at. Shopify is built on your order data, so sales and customer numbers are accurate by definition. GA4, connected through the Google & YouTube sales channel, adds event-based journeys, landing page and campaign detail, site search terms and explorations. Search Console shows organic queries, indexing, Core Web Vitals and rich result status.",
        ],
      },
      {
        heading: "Pixels and Customer Events",
        body: [
          "Marketing and analytics pixels are managed in Shopify's Customer events settings. After theme changes, app installs or checkout changes, place a test order and confirm events fire once with correct values. Duplicate purchase events are a common cause of inflated conversion in ad platforms.",
        ],
      },
      {
        heading: "Attribution Has Limits",
        body: [
          "Cross-device journeys, consent choices and ad blockers mean no tool attributes every sale exactly, and ad platforms each claim credit their own way. Use attribution directionally, check platform claims against total sales, and use holdout tests for major budget decisions.",
        ],
      },
      {
        heading: "Setting Up Tracking Properly",
        body: [],
        checklist: [
          "Install the Google & YouTube sales channel to connect GA4",
          "Manage additional pixels in Customer events, not in theme code",
          "Place a test order and confirm purchase events fire once with correct value and currency",
          "Exclude staff and test orders from reporting",
          "Tag campaigns consistently with UTM parameters",
          "Connect Search Console and submit the sitemap",
          "Record a baseline and keep a change log",
        ],
      },
      {
        heading: "Metrics by Stage of the Business",
        body: [],
        table: {
          headers: ["Stage", "Focus metrics"],
          rows: [
            ["Launching", "Sessions by channel, conversion rate, AOV, top products"],
            ["Growing", "Funnel by device, CAC, new vs returning revenue, landing page conversion"],
            ["Scaling", "Cohort retention, margin, returns, market-level performance"],
          ],
        },
      },
      {
        heading: "A Weekly Review",
        body: [],
        checklist: [
          "Net sales and orders vs last week and last year",
          "Conversion funnel by device",
          "Sessions and sales by channel",
          "Top products and stock-outs",
          "Returning customer share",
          "Anything unusual in Live View or data health",
          "Changes made this week (theme, apps, prices, campaigns)",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Tracking everything, acting on nothing",
          "Comparing Shopify and GA4 numbers as if they should match",
          "Ignoring device and channel segments",
          "Including test orders in reports",
          "No change log",
          "Summing ad platform conversions",
        ],
        cta: {
          title: "Want analytics that drive decisions?",
          description: "Talk to ZSpace about [[/services/cro-audit|analytics and CRO audits]] and [[/services/shopify-development|Shopify tracking setup]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Track a few metrics tied to decisions, use Shopify for sales and customers, GA4 for behavior and Search Console for search, and keep the data clean. For the metrics behind conversion work, see [[/blogs/shopify-conversion-rate-optimization-metrics|Shopify CRO metrics]]; for building a leadership view, see [[/blogs/ecommerce-kpi-dashboard|ecommerce KPI dashboard]].",
          "For related guides, see [[/blogs/ecommerce-event-tracking|ecommerce event tracking]].",
        ],
      },
    ],
  },

  // ------------------------------------------ 103 · AGENCY VS FREELANCER
  {
    slug: "shopify-developer-vs-agency-which-to-hire",
    title: "Shopify Development Agency vs Freelancer: Which Should You Hire?",
    seoTitle: "Shopify Agency vs Freelancer: Which Should You Hire?",
    excerpt:
      "When to hire a Shopify freelancer and when an agency fits better: scope, skills, speed, cost, risk, continuity, how to evaluate each and how to combine them.",
    category: "Shopify & Ecommerce",
    banner: "freelanceragency",
    bannerAlt:
      "Comparison of a Shopify freelancer and an agency across team, best-fit work, start and cost, coverage, risk and continuity.",
    date: "2026-04-02",
    updated: "2026-09-29",
    readingTime: "11 min read",
    relatedServiceSlugs: ["shopify-development"],
    relatedIndustrySlugs: ["d2c-consumer", "fashion-apparel"],
    faqs: [
      { q: "Should I hire a Shopify freelancer or an agency?", a: "Hire a freelancer for a defined, contained task in one discipline. Hire an agency when the project needs design, development, QA and project management together, several integrations, or ongoing support." },
      { q: "Is a freelancer cheaper than an agency?", a: "Usually for a single task. For projects needing several disciplines, the comparison changes, because you may need several freelancers plus your own time coordinating them." },
      { q: "Can one freelancer build an entire Shopify store?", a: "For a straightforward store on a customized theme, often yes. Larger projects with design, integrations and QA usually exceed one person's capacity." },
      { q: "What's the main risk with a freelancer?", a: "Continuity. If they become unavailable, knowledge of your store may leave with them unless it's documented and accounts are in your name." },
      { q: "What's the main risk with an agency?", a: "Process overhead and cost, and sometimes junior staff doing the work. Check who will actually work on your project." },
      { q: "How do I evaluate a Shopify freelancer?", a: "Review similar past work, ask how they'd approach your task, check code quality if possible, confirm availability and communication, and speak to references." },
      { q: "How do I evaluate a Shopify agency?", a: "Look at process, discovery, QA, documentation, support and results on similar projects, and speak to references. See the agency selection guide." },
      { q: "Can I use both?", a: "Yes. Many brands use an agency for builds and larger projects and a freelancer for small, ongoing changes, with shared documentation." },
      { q: "What about hiring in-house?", a: "When there's enough continuous work, an in-house developer gives speed and continuity. See the agency vs in-house guide." },
      { q: "What should any contract include?", a: "Scope, deliverables, timeline, payment terms, code and IP ownership, accounts in your name, documentation, warranty and how changes are handled." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Hire a Shopify freelancer for a defined, contained task in one discipline, such as a theme change, a bug fix or an app configuration, when you can manage the work yourself. Hire an agency when the project needs several disciplines at once (strategy, UX, design, development, QA, project management), involves integrations or migration, or needs dependable support after launch. Choose on scope and risk rather than price alone, and in either case keep code, accounts and documentation in your name.",
        ],
      },
      {
        heading: "Scope Decides, Not Size",
        body: [
          "The question isn't how big your business is but how many kinds of work your project needs at once, and whether it needs to continue after launch. A single task rarely needs an agency. A build with design, development, integrations, testing and optimization usually does.",
        ],
      },
      {
        heading: "Side by Side",
        body: [
          "The diagram above summarizes the comparison. In more detail:",
        ],
        table: {
          headers: ["Factor", "Freelancer", "Agency"],
          rows: [
            ["Disciplines", "Usually one", "Strategy, UX, design, dev, QA, PM"],
            ["Best for", "Defined tasks", "Builds, redesigns, migrations, programs"],
            ["Start", "Often fast", "Discovery first"],
            ["Rate", "Lower", "Higher, covering more"],
            ["Project management", "You", "Included"],
            ["QA", "Self-checked", "Dedicated process"],
            ["Capacity", "One person's time", "Scales with the project"],
            ["Continuity", "Depends on one person", "Team and documentation"],
          ],
        },
      },
      {
        heading: "When a Freelancer Makes Sense",
        body: [],
        checklist: [
          "A specific theme change, section or bug fix; see [[/blogs/shopify-theme-vs-custom-development|what theme customization covers]]",
          "Configuring an app or small integration",
          "Speed improvements on a known issue; see [[/blogs/shopify-speed-cro|Shopify speed optimization]]",
          "Ongoing small changes on a well-documented store",
          "You or your team can manage scope and QA",
        ],
      },
      {
        heading: "When an Agency Is the Better Fit",
        body: [],
        checklist: [
          "A new build, redesign or rebuild",
          "Migration to Shopify",
          "Design and development needed together",
          "Several integrations or custom apps",
          "A conversion program with research and testing",
          "Support and maintenance you can rely on",
        ],
        cta: {
          title: "Not sure which kind of partner your project needs?",
          description: "Tell ZSpace your scope and timeline and we'll give you a straight recommendation, even if it's something smaller than us.",
        },
      },
      {
        heading: "Hidden Costs on Both Sides",
        body: [
          "With freelancers, the hidden cost is coordination: your time managing scope, combining several specialists and testing their work. With agencies, it's overhead: discovery, project management and process, which are valuable on complex projects and wasteful on tiny ones. See [[/blogs/shopify-development-cost|Shopify development cost]].",
        ],
      },
      {
        heading: "How to Evaluate Each",
        body: [],
        table: {
          headers: ["Check", "Freelancer", "Agency"],
          rows: [
            ["Relevant work", "Similar tasks on Shopify", "Similar projects end to end"],
            ["Approach", "How they'd do your task", "Discovery, process, QA"],
            ["Who does the work", "Them", "Named team members"],
            ["Availability", "Current commitments", "Capacity and timeline"],
            ["Documentation", "What they leave behind", "Standard deliverables"],
            ["References", "Past clients", "Past clients"],
          ],
        },
      },
      {
        heading: "Questions to Ask Before Hiring",
        body: [],
        checklist: [
          "Who exactly will work on the project, and what have they built on Shopify?",
          "How will you approach our task, and what alternatives did you consider?",
          "How do you test changes before they go live?",
          "What documentation will we receive?",
          "What happens if you're unavailable during or after the project?",
          "How are changes to scope priced and approved?",
          "What support is included after launch?",
        ],
      },
      {
        heading: "Red Flags",
        body: [],
        checklist: [
          "Asking for your admin password instead of collaborator access",
          "Editing the live theme without a copy or version control",
          "Quoting before understanding the requirement",
          "Promising specific sales or conversion results",
          "No references or comparable work",
          "Recommending custom code for everything",
        ],
      },
      {
        heading: "Protect Yourself Either Way",
        body: [],
        checklist: [
          "Store, domain and app accounts in your company's name",
          "Collaborator or staff access rather than shared passwords",
          "Code in version control you can access",
          "Documentation of customizations and integrations",
          "Clear scope, payment milestones and change process",
          "A warranty period for defects",
        ],
      },
      {
        heading: "Combining Both",
        body: [
          "Many brands use an agency for builds and larger initiatives and a freelancer or small in-house team for day-to-day changes. Make it work with shared documentation, one code repository and clear ownership of releases. See [[/blogs/shopify-agency-vs-in-house|Shopify agency vs in-house]].",
        ],
        cta: {
          title: "Looking for a Shopify partner?",
          description: "Talk to ZSpace about [[/services/shopify-development|Shopify development]], from contained tasks to full builds.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Match the partner to the scope: freelancers for contained, single-discipline work you can manage; agencies for multi-disciplinary projects and dependable support. Evaluate process as well as portfolios, and protect ownership in either case. For choosing an agency, see [[/blogs/how-to-choose-a-shopify-development-agency|how to choose a Shopify agency]]; for the broader ecommerce view, see [[/blogs/how-to-choose-ecommerce-development-company|how to choose an ecommerce development company]].",
        ],
      },
    ],
  },
];
