import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, part one: building on Shopify — store
 * development, theme development, Hydrogen, redesign vs rebuild and cost.
 * Sits alongside the older Shopify posts in blog-data.ts (custom
 * development, theme customization, headless, migration, Plus), which were
 * expanded in place rather than duplicated. Merged into `posts` in
 * blog-data.ts.
 */

export const commercePosts: BlogPost[] = [
  // ------------------------------------------------ 61 · STORE DEVELOPMENT
  {
    slug: "shopify-store-development",
    title: "Shopify Store Development: A Complete Guide for Businesses",
    excerpt:
      "What Shopify store development involves, the five ways to build a store, and how to plan catalog, theme, apps, checkout, SEO, QA and launch.",
    category: "Shopify & Ecommerce",
    banner: "storebuildflow",
    bannerAlt:
      "Shopify store development process: discovery, catalog and data, theme approach, design, build and apps, QA and launch, then a loop back to measurement and improvement.",
    date: "2026-09-29",
    readingTime: "14 min read",
    relatedServiceSlugs: ["shopify-development", "ui-ux-design", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "fashion-apparel"],
    faqs: [
      { q: "What is Shopify store development?", a: "Planning, designing, building and launching an online store on Shopify: structuring the catalog, choosing or building a theme, configuring payments, shipping and taxes, adding apps and integrations, and testing everything before launch. It ranges from configuring an existing theme to fully custom or headless builds." },
      { q: "Is a Shopify development store the same thing?", a: "No. A development store is a free sandbox that Shopify Partners create to build and test themes and apps. It can't take real payments. Store development is the whole project of building a live store, which may start in a development store and be transferred to the client." },
      { q: "Do I need a developer to build a Shopify store?", a: "Not always. A small catalog on a well-chosen theme can be set up without code. You need development help when the design, catalog, integrations, migration or performance needs go beyond what theme settings and apps can deliver." },
      { q: "How long does Shopify store development take?", a: "It depends on catalog size, how much is custom, how many integrations are involved and whether data is migrated. A theme-based store with a clean catalog is much faster than a custom theme with ERP integration and migration. Get a scoped plan rather than a generic estimate." },
      { q: "Which Shopify plan should I build on?", a: "Choose the plan that covers your current operational needs, such as staff accounts, locations, reporting and checkout requirements. Most stores don't need Shopify Plus at launch; upgrade when a specific Plus capability or volume justifies it." },
      { q: "Should I use a free or paid theme?", a: "Choose the theme whose structure fits your catalog and templates, not the one with the nicest demo. Free Shopify themes are well built and fast. Paid themes add sections and features. Either can be customized." },
      { q: "When is a custom Shopify theme worth it?", a: "When your brand, content model or shopping experience can't be delivered by customizing an existing theme without fighting it, and you have the budget to maintain custom code. See the theme development guide for the trade-offs." },
      { q: "What should be tested before a Shopify store launches?", a: "Every template on real phones and desktops, test orders through checkout, discounts, shipping and tax rules, emails, apps and integrations, analytics events, redirects if migrating, speed and accessibility." },
      { q: "How much does Shopify store development cost?", a: "Cost is driven by scope: design depth, custom features, catalog and migration work, integrations, markets and QA. The plan fee is usually a small part. See the Shopify development cost guide for how pricing is built." },
      { q: "What happens after the store launches?", a: "Monitoring, fixes, app and theme updates, and ongoing optimization based on analytics. Launch gives you a baseline; conversion work starts once real shoppers use the store." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Shopify store development is the process of turning business requirements into a working Shopify store. It covers catalog and product data, the theme approach (configure, customize, build custom or go headless), design of key templates, apps and integrations, payments, shipping and taxes, SEO and analytics setup, testing and launch. Most businesses get the best result by starting with requirements rather than a theme, keeping custom code for what apps and theme settings can't do, and treating launch as the baseline for ongoing improvement.",
        ],
      },
      {
        heading: "What Shopify Store Development Includes",
        body: [
          "A Shopify store is more than a theme. The storefront customers see sits on a catalog, a set of business rules (prices, discounts, shipping, taxes, markets), a checkout Shopify hosts, apps that add features, and integrations with the systems that run the business. Store development means designing and connecting all of these so the store works for shoppers and for the team running it.",
          "One point of confusion: search results for this topic are full of guides to creating a {{b:Shopify development store}}. That's a free sandbox Shopify Partners use to build and test themes and apps before a store goes live; it can't process real payments. It's a tool used during a build, not the build itself.",
          "This guide is the overview for ZSpace's Shopify development cluster. Each section links to a deeper guide where one exists. If you're setting up a small store yourself, [[/blogs/how-to-set-up-a-shopify-store|how to set up a Shopify store]] is the better starting point.",
        ],
      },
      {
        heading: "Five Ways to Build a Shopify Store",
        body: [
          "The biggest decision is how much of the store is standard and how much is custom. More custom work buys flexibility and costs more to build and maintain.",
        ],
        table: {
          headers: ["Approach", "What it means", "Fits when", "Trade-off"],
          rows: [
            ["Configure a theme", "Theme settings, content and apps only", "Small catalog, standard journey, tight timeline", "Looks and behaves like other stores on the theme"],
            ["Customize a theme", "Code changes to an existing theme", "Most growing brands", "Customizations must be carried through theme updates"],
            ["Custom theme", "A theme built for your brand and catalog", "Distinct brand, unusual content model", "Higher build cost; you own the code"],
            ["Custom apps + integrations", "Private apps, Functions, system connections", "Business logic or systems apps don't cover", "Ongoing maintenance and API version upgrades"],
            ["Headless", "Your own front end on Shopify's APIs", "Multiple front ends, complex content, large teams", "Most flexible, most to build and run"],
          ],
        },
        callout: {
          type: "tip",
          text: "Walk every requirement down this ladder and stop at the first layer that meets it. See [[/blogs/when-do-you-need-custom-shopify-development|Shopify custom development]] for the full decision framework.",
        },
      },
      {
        heading: "Start With Requirements, Not a Theme",
        body: [
          "Many stores are built backwards: a theme is chosen from its demo, then the catalog and business rules are forced into it. Start by writing down how you sell, then choose the approach. A short [[/blogs/website-requirements-document|requirements document]] prevents most rework.",
        ],
        checklist: [
          "Business model: D2C, B2B, wholesale, subscriptions, pre-orders, made-to-order",
          "Catalog: number of products, variants, options and product attributes",
          "Markets: countries, currencies, languages, duties and tax handling",
          "Fulfilment: warehouses, 3PLs, local delivery, pickup, freight",
          "Systems: ERP, inventory, CRM, email, reviews, loyalty, accounting",
          "Content: editorial pages, guides, lookbooks, who edits them and how often",
          "Existing store: data, URLs and search traffic that must be migrated",
          "Team: who runs the store day to day and what they need to change without a developer",
        ],
      },
      {
        heading: "Catalog and Product Data",
        body: [
          "The catalog shapes everything downstream: navigation, filters, product pages, search and SEO. Decide early how products, variants and attributes are modeled.",
          "Shopify products can have up to three options (for example size, colour and material) and, since Shopify raised the limit, up to 2,048 variants per product ([[https://shopify.dev/changelog/the-product-variant-limit-is-now-2048-for-all-merchants|Shopify developer changelog]]). Attributes that aren't options, such as fabric, dimensions, ingredients or compatibility, belong in {{b:metafields}}; reusable structured content, such as size charts or designer profiles, fits {{b:metaobjects}}. Clean, structured attributes are what make filters, comparisons and structured data possible later.",
          "Plan collections as the store's category structure, not as a pile of tags. Automated collections built on rules reduce manual work but depend on consistent data. See [[/blogs/ecommerce-website-architecture|ecommerce website architecture]] for how catalog, URLs and navigation fit together.",
        ],
      },
      {
        heading: "Choosing a Shopify Plan",
        body: [
          "Choose the plan for today's operational needs, not a future you haven't reached. Plans differ in staff accounts, inventory locations, B2B catalogs, expansion stores and checkout customization. Most stores launch on a standard plan and move to Plus when a specific capability, such as checkout customization on the information, shipping and payment steps or multiple expansion stores, becomes necessary. See [[/blogs/shopify-plus-vs-shopify|Shopify Plus vs Shopify]].",
        ],
      },
      {
        heading: "Choosing the Theme Approach",
        body: [
          "Online Store 2.0 themes are built from JSON templates, sections and blocks, which lets merchants rearrange pages in the theme editor. Whichever theme you start from, check that it supports the templates your catalog needs, performs well on mobile and doesn't need heavy code changes for your core journey.",
          "If you're deciding between adapting an existing theme and building one, see [[/blogs/shopify-theme-development|Shopify theme development]]. For what you can change without a rebuild, see [[/blogs/shopify-theme-vs-custom-development|Shopify theme customization]].",
        ],
      },
      {
        heading: "Design and UX",
        body: [
          "Design the templates that carry revenue first: product page, collection page, cart, homepage and search results, in that order for most stores, and mobile first because that's where most shopping sessions happen. Design every state, including sold-out variants, empty search results, long product names and missing images.",
          "For design detail, see [[/blogs/shopify-store-design|Shopify store design]], [[/blogs/ecommerce-product-page-design|ecommerce product page design]] and [[/blogs/ecommerce-category-page-design|product listing page design]].",
        ],
      },
      {
        heading: "Apps and Integrations",
        body: [
          "Apps add features quickly but each one adds scripts, settings and a dependency. For every app, write down the requirement it meets, where it appears and what happens if you remove it. Prefer apps that use theme app blocks and embeds, so they can be placed in the theme editor and removed cleanly.",
          "Integrations with ERP, inventory, 3PL and accounting systems need clear ownership of data: which system is the source of truth for stock, prices and orders, and what happens when a sync fails. See [[/blogs/shopify-app-integration-guide|how Shopify app and API integrations work]] and [[/blogs/shopify-business-systems-integration-guide|connecting Shopify to your business systems]].",
        ],
        cta: {
          title: "Planning a Shopify build?",
          description: "ZSpace scopes Shopify stores from requirements first, so theme, apps and custom work are chosen for your catalog and operations.",
        },
      },
      {
        heading: "Checkout, Payments, Shipping and Taxes",
        body: [
          "Shopify hosts checkout, which means security and core checkout behavior are handled for you. On all plans you configure payment methods, accelerated checkouts, shipping profiles and rates, taxes, and checkout branding; thank-you and order status pages can be extended with apps. Customizing the information, shipping and payment steps with checkout UI extensions requires Shopify Plus. See [[/blogs/shopify-checkout-optimization|Shopify checkout optimization]].",
          "Shipping rules deserve real testing. Unexpected extra costs are the most common reason shoppers give for abandoning checkout in Baymard's research, cited by 40% of US adults who abandoned an order ([[https://baymard.com/lists/cart-abandonment-rate|Baymard Institute]], updated September 2025). Show delivery costs early and make sure the rates you configure match what the product page promises.",
        ],
      },
      {
        heading: "Performance and Accessibility",
        body: [
          "Speed and accessibility are easier to build in than to retrofit. Shopify requires themes in its Theme Store to reach a minimum average Lighthouse performance score of 60 across home, product and collection pages on desktop and mobile ([[https://shopify.dev/docs/storefronts/themes/store/requirements|Shopify theme store requirements]]). Treat that as a floor. Agree a performance budget for images, fonts and app scripts before design starts, and check it during the build.",
          "Build to WCAG: keyboard access, visible focus, sufficient contrast, labelled form fields and meaningful alt text. See [[/blogs/shopify-core-web-vitals-performance-guide|Shopify performance and Core Web Vitals]] and [[/blogs/website-accessibility-guide|website accessibility]].",
        ],
      },
      {
        heading: "SEO Foundations",
        body: [
          "Shopify generates canonical tags, a sitemap and a default robots.txt automatically. What it can't decide for you is your collection structure, page titles, product copy, internal links and redirects. Set these up during the build, not after launch. See [[/blogs/shopify-seo-guide|Shopify SEO]] for the full system and [[/blogs/migrating-to-shopify-guide|Shopify store migration]] if you're moving from another platform.",
        ],
      },
      {
        heading: "Analytics and Tracking",
        body: [
          "Shopify Analytics covers sales, orders, sessions and the conversion funnel on every plan. GA4 is connected through the Google & YouTube sales channel, and additional pixels are managed in Customer events. Decide which events and reports you need before launch, test them with real test orders, and document the setup. See [[/blogs/shopify-analytics-guide|Shopify analytics]].",
        ],
      },
      {
        heading: "QA and Launch",
        body: ["Build on an unpublished theme or a development store, test thoroughly, then launch at a quiet time rather than before a sale."],
        checklist: [
          "Every template on real iOS and Android phones and on desktop browsers",
          "Test orders through checkout with each payment method, discount and shipping rule",
          "Taxes, duties and currencies for each market",
          "Order, shipping and account emails",
          "Apps and integrations: stock sync, order export, reviews, subscriptions",
          "Analytics events and marketing pixels firing once, with correct values",
          "Redirects for every changed URL if migrating",
          "Speed on key templates and accessibility checks",
          "Policies, contact details and legal pages published",
        ],
      },
      {
        heading: "After Launch",
        body: [
          "The first weeks show how real shoppers use the store. Watch the funnel by device and traffic source, fix errors quickly and start a backlog of improvements. Keep apps and theme customizations documented, and schedule maintenance. See [[/blogs/shopify-store-maintenance-checklist|the Shopify maintenance checklist]] and [[/blogs/shopify-cro-guide|Shopify conversion rate optimization]].",
        ],
      },
      {
        heading: "Who Should Build Your Store",
        body: [
          "A founder can set up a simple store. A freelancer suits a defined, contained scope. An agency suits builds that need design, development, QA and project management together, and an in-house team suits continuous development once the store is established. See [[/blogs/shopify-developer-vs-agency-which-to-hire|Shopify agency vs freelancer]], [[/blogs/shopify-agency-vs-in-house|Shopify agency vs in-house]] and [[/blogs/how-to-choose-a-shopify-development-agency|how to choose a Shopify agency]]. For budgeting, see [[/blogs/shopify-development-cost|Shopify development cost]].",
        ],
        cta: {
          title: "Want a Shopify store built around how you sell?",
          description: "Talk to ZSpace about [[/services/shopify-development|Shopify development]], [[/services/ui-ux-design|ecommerce UX design]] and a [[/services/cro-audit|conversion review]] once you're live.",
        },
      },
      {
        heading: "Common Shopify Development Mistakes",
        body: [],
        checklist: [
          "Choosing a theme from its demo before modeling the catalog",
          "Using tags as a substitute for structured product data",
          "Installing apps for features the theme or Shopify already provides",
          "Custom code for requirements an app or setting could meet",
          "Designing desktop first",
          "No redirects or baseline when migrating",
          "Launching without test orders on every payment and shipping path",
          "No documentation, so nobody knows what the customizations do",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Good Shopify store development starts with how the business sells, models the catalog carefully, chooses the least custom approach that meets the requirements, and tests every path to an order. From there the store becomes a base for measured improvement rather than a finished project.",
        ],
      },
    ],
  },

  // ----------------------------------------------- 64 · THEME DEVELOPMENT
  {
    slug: "shopify-theme-development",
    title: "Shopify Theme Development: Custom Theme vs Existing Theme",
    excerpt:
      "Should you build a custom Shopify theme or adapt an existing one? How themes work, what a custom build involves, costs of ownership and how to decide.",
    category: "Shopify & Ecommerce",
    banner: "themearch",
    bannerAlt:
      "Shopify theme architecture: theme folders (layout, templates, sections, blocks, snippets, assets, config, locales) and a product template composed of section groups, sections, blocks and an app block.",
    date: "2026-09-29",
    readingTime: "13 min read",
    relatedServiceSlugs: ["shopify-development", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer"],
    faqs: [
      { q: "What is Shopify theme development?", a: "Building or substantially modifying the code that renders a Shopify online store: Liquid templates, JSON templates, sections, blocks, snippets, CSS and JavaScript. It ranges from building a theme from scratch to extending an existing one." },
      { q: "Is a custom Shopify theme better than a premium theme?", a: "Not automatically. A custom theme fits your brand and catalog exactly but costs more to build and you own every bug and update. A good existing theme, customized carefully, is the better choice for most stores." },
      { q: "Should a custom theme start from scratch or from Dawn?", a: "Many teams start from Shopify's reference theme or a lean base theme so they inherit accessible, performant patterns and Online Store 2.0 structure. Starting from nothing is rarely necessary." },
      { q: "What must a custom theme support?", a: "JSON templates, sections and blocks editable in the theme editor, app blocks and embeds, metafield-driven content, localization, accessibility, performance targets, and every page type your catalog needs." },
      { q: "Who maintains a custom theme?", a: "You do, through your developer or agency. Shopify doesn't update custom themes. Budget for fixes, new features and compatibility with platform changes." },
      { q: "Can I update a purchased theme after customizing it?", a: "Yes, but code customizations don't carry over automatically. Keeping changes in separate sections and snippets, documented and under version control, makes updates manageable." },
      { q: "What tools do Shopify theme developers use?", a: "Shopify CLI for local development and previews, Theme Check for linting, GitHub integration for version control, and Lighthouse for performance testing." },
      { q: "How do I know my theme is fast enough?", a: "Measure real-user Core Web Vitals in Shopify's web performance reports and test key templates in Lighthouse. Shopify's Theme Store requires an average Lighthouse performance score of at least 60 across home, product and collection pages; aim higher." },
      { q: "Can merchants still edit a custom theme without code?", a: "They should. A well-built custom theme exposes sections, blocks and settings so the team can change content and layouts in the theme editor." },
      { q: "When is theme development not enough?", a: "When the requirement is business logic, checkout behavior or data rather than presentation. Those need apps, Shopify Functions, checkout extensions or a headless front end." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Shopify theme development means building or substantially extending the code that renders your storefront. Choose an existing theme, customized, when its structure fits your catalog and your brand can be expressed through its sections and styles; this is faster, cheaper and easier to keep updated. Choose a custom theme when your content model, brand or shopping experience would mean fighting an existing theme's structure, and you're prepared to own the code long term. Either way, the theme should use Online Store 2.0 sections and blocks so your team can edit it without a developer.",
        ],
      },
      {
        heading: "How This Guide Differs From Theme Customization",
        body: [
          "This article is about the build decision: adapt an existing theme or develop a new one. If you already have a theme and want to know what can be changed, see [[/blogs/shopify-theme-vs-custom-development|Shopify theme customization]]. If your requirement involves business logic rather than presentation, see [[/blogs/when-do-you-need-custom-shopify-development|Shopify custom development]].",
        ],
      },
      {
        heading: "How Shopify Themes Are Built",
        body: [
          "A theme is a set of files in fixed folders. The diagram above shows them alongside how a product page is composed ([[https://shopify.dev/docs/storefronts/themes/architecture|Shopify theme architecture]]).",
        ],
        table: {
          headers: ["Part", "What it does"],
          rows: [
            ["Layout (theme.liquid)", "The shell around every page: head, header and footer groups"],
            ["JSON templates", "Define which sections appear on a page type and in what order; editable in the theme editor"],
            ["Sections", "Reusable modules such as a hero, product information or featured collection"],
            ["Blocks and theme blocks", "Smaller units inside sections that merchants can add, remove and reorder"],
            ["Section groups", "Editable areas such as the header and footer"],
            ["Snippets", "Reusable pieces of Liquid rendered from other files"],
            ["Assets", "CSS, JavaScript, fonts and images"],
            ["Config and locales", "Theme settings and translations"],
          ],
        },
        callout: {
          type: "note",
          text: "App blocks and app embeds let apps add features to sections without editing theme code, which is why a theme's support for them matters when you rely on apps.",
        },
      },
      {
        heading: "The Options, Side by Side",
        body: [],
        table: {
          headers: ["Option", "Best for", "Watch out for"],
          rows: [
            ["Free Shopify theme", "New stores, standard catalogs, speed", "Limited sections; widely used look"],
            ["Paid Theme Store theme", "More sections and features without code", "Extra features add weight if unused"],
            ["Existing theme, customized", "Most growing brands", "Customizations must survive theme updates"],
            ["Custom theme from a base", "Distinct brand or content model", "Build cost and long-term ownership"],
            ["Headless front end", "Needs a theme can't meet", "A different project; see Hydrogen"],
          ],
        },
      },
      {
        heading: "When an Existing Theme Is the Right Choice",
        body: [
          "Existing themes are tested across many stores, maintained by their developers and designed to be edited in the theme editor. For most catalogs, a well-chosen theme covers the product page, collection page, cart and search patterns you need, and your brand shows through typography, colour, photography and copy.",
        ],
        checklist: [
          "The theme's templates match your catalog: variants, collections, content pages",
          "Its product page handles your options well, such as swatches or many sizes",
          "It performs well on mobile with your real images and apps",
          "It supports app blocks for the apps you rely on",
          "Its developer updates it regularly",
          "Your brand can be expressed through its settings and a few custom sections",
        ],
      },
      {
        heading: "When a Custom Theme Is Worth It",
        body: [
          "A custom theme is worth the investment when the store's value depends on an experience an existing theme can't deliver without extensive rewriting. Typical signals: a content model built on metaobjects such as collections of looks, recipes or designers; product pages that need unusual configuration or comparison; a brand system that existing section styles can't express; or performance goals that require removing features the theme ships with.",
          "It's not worth it just to look different. Customizing an existing theme and investing in photography and copy often achieves more for less.",
        ],
      },
      {
        heading: "What a Custom Theme Build Involves",
        body: [
          "A custom theme is a software project. It needs discovery, design, development, QA and documentation, and it continues after launch.",
        ],
        table: {
          headers: ["Stage", "Output"],
          rows: [
            ["Discovery", "Page types, content model, metafields and metaobjects, app list"],
            ["Design system", "Tokens, typography, components and states"],
            ["Template design", "Mobile-first designs for every template and state"],
            ["Section architecture", "Which sections and blocks exist, their settings and limits"],
            ["Development", "Liquid, CSS and JS built on a base theme, under version control"],
            ["QA", "Devices, accessibility, performance, theme editor behavior, apps"],
            ["Handover", "Documentation for editors and developers"],
          ],
        },
      },
      {
        heading: "Editor Experience Matters as Much as the Storefront",
        body: [
          "A custom theme that needs a developer for every content change becomes a bottleneck. Design the theme editor experience deliberately: clear section names, sensible defaults, settings limited to what the team should change, and guardrails that keep layouts on-brand. Test it with the people who will use it.",
        ],
        cta: {
          title: "Deciding between a theme and a custom build?",
          description: "ZSpace reviews your catalog, brand and team workflow and recommends the least custom approach that fits.",
        },
      },
      {
        heading: "Performance and Accessibility Standards",
        body: [
          "Set measurable targets. Shopify's Theme Store requires a minimum average Lighthouse performance score of 60 across home, product and collection pages on desktop and mobile ([[https://shopify.dev/docs/storefronts/themes/store/requirements|theme store requirements]]); custom themes should aim well above that and be checked against real-user Core Web Vitals after launch. Build to WCAG from the start: semantic HTML, keyboard support for menus, drawers and variant pickers, visible focus and sufficient contrast. See [[/blogs/shopify-core-web-vitals-performance-guide|Shopify Core Web Vitals]] and [[/blogs/accessible-ui-ux-design|accessible UI/UX design]].",
        ],
      },
      {
        heading: "Development Workflow",
        body: [
          "Use Shopify CLI to develop locally against a development store, keep the theme in Git with Shopify's GitHub integration, run Theme Check in review, and preview changes on an unpublished theme before publishing. Keep theme settings and editor-managed JSON files in mind when merging, because merchants change them in the admin.",
        ],
      },
      {
        heading: "Cost of Ownership",
        body: [
          "The build is only the first cost. A custom theme needs bug fixes, new sections as the business changes, updates when Shopify introduces new theme features, and regression testing when apps change. A purchased theme spreads that maintenance across its developer's customers, but your customizations still need care. Compare the full lifecycle, not the launch invoice. See [[/blogs/shopify-development-cost|Shopify development cost]].",
        ],
      },
      {
        heading: "Worked Examples",
        body: [
          "These are illustrative scenarios, not client case studies, showing how the same decision plays out differently.",
          "**A skincare brand with 40 products.** Its needs are a strong product page with ingredients, routines and reviews, a quiz and subscription options. A well-chosen existing theme handles the catalog; custom sections for ingredients and routines, metafields for skin type and concern, and app blocks for reviews and subscriptions cover the rest. Verdict: customize an existing theme.",
          "**A furniture retailer with configurable products.** Sofas come in several sizes, dozens of fabrics and multiple leg finishes, with dimension diagrams, sample ordering and delivery-service options. The product page would be rewritten in any existing theme, and the collection pages need room-based browsing with dimension filters. Verdict: a custom theme built from a lean base, with metaobjects for fabrics and a custom configurator section.",
          "**A fashion label with editorial campaigns.** It publishes lookbooks linking many products, needs fast collection pages with size-in-stock filters and wants a distinctive brand. Most templates fit an existing theme; lookbooks can be built as metaobject-driven sections. Verdict: customize, unless the brand system can't be expressed without rewriting core layouts.",
        ],
      },
      {
        heading: "How to Decide",
        body: [],
        checklist: [
          "List the templates and content types your store needs",
          "Shortlist two or three themes that fit that list",
          "Prototype the hardest template, usually the product page, in the best candidate",
          "Count how much would need rewriting rather than adding",
          "If most changes are additions, customize the theme",
          "If the core templates would be rewritten, plan a custom theme",
          "If the requirement is logic or data, not presentation, look beyond the theme",
        ],
        cta: {
          title: "Need a Shopify theme your team can actually run?",
          description: "Talk to ZSpace about [[/services/shopify-development|Shopify theme development]] and [[/services/ui-ux-design|store design]].",
        },
      },
      {
        heading: "Common Theme Development Mistakes",
        body: [],
        checklist: [
          "Building custom when an existing theme would have fitted",
          "Hard-coding content that should be sections, blocks or metafields",
          "No version control, so changes in the admin and in code collide",
          "Shipping every feature to every page, hurting speed",
          "Ignoring app block support",
          "No documentation for editors or future developers",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Most stores should start from an existing theme and customize it with discipline. Build a custom theme when the store's experience genuinely depends on it, set clear performance, accessibility and editor-experience standards, and plan for owning the code. For the full build picture, see [[/blogs/shopify-store-development|Shopify store development]].",
        ],
      },
    ],
  },

  // --------------------------------------------------------- 67 · HYDROGEN
  {
    slug: "shopify-hydrogen",
    title: "Shopify Hydrogen Development: When Should You Use Hydrogen?",
    seoTitle: "Shopify Hydrogen Development: When Should You Use Hydrogen?",
    excerpt: "What Shopify Hydrogen and Oxygen are, how Hydrogen development works, what it costs to own, decision signals and when to choose it over a Liquid theme.",
    category: "Shopify & Ecommerce",
    banner: "hydrogenstack",
    bannerAlt:
      "Hydrogen architecture: a Hydrogen storefront built as a React Router app and hosted on Oxygen, calling the Storefront API and Customer Account API, with checkout and core commerce run by Shopify.",
    date: "2026-09-29",
    updated: "2026-09-29",
    readingTime: "18 min read",
    relatedServiceSlugs: ["shopify-development", "website-development"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer"],
    faqs: [
      { q: "What is Shopify Hydrogen?", a: "Hydrogen is Shopify's framework for building headless storefronts. Shopify describes Hydrogen projects as React Router apps preconfigured with Shopify-specific components, utilities and patterns for working with Shopify's APIs." },
      { q: "What is Oxygen?", a: "Oxygen is Shopify's global hosting platform for Hydrogen storefronts, running at the edge with separate deployment environments so changes can be previewed before production." },
      { q: "Does Oxygen cost extra?", a: "Shopify's documentation says Oxygen is available at no extra charge on paid Shopify plans. Development, maintenance and any third-party services are still your costs." },
      { q: "Is Hydrogen built on Remix?", a: "Hydrogen was originally built on Remix. Current documentation describes Hydrogen projects as React Router apps, following Remix's merge into React Router. Older articles may still refer to Remix." },
      { q: "Do I need Shopify Plus to use Hydrogen?", a: "No. Oxygen is available on paid plans. Shopify's Plus plan page lists up to 25 Hydrogen storefronts for Plus; check current limits for your plan." },
      { q: "Is Hydrogen faster than a Liquid theme?", a: "It can be, because you control rendering, caching and what JavaScript ships. But a well-optimized Liquid theme is fast too, and a poorly built Hydrogen site can be slow. Speed comes from the implementation, not the framework alone." },
      { q: "Do Shopify apps work with Hydrogen?", a: "Apps that manage data in the admin generally still work. Apps that inject storefront features through theme app blocks don't appear automatically; you integrate them through their APIs or SDKs, if they offer them." },
      { q: "Can my marketing team edit a Hydrogen store?", a: "Not through the theme editor. Teams usually edit content in a headless CMS or in Shopify metaobjects, with components built to render it. Plan this before building." },
      { q: "Does checkout change with Hydrogen?", a: "Checkout remains Shopify's hosted checkout. Your storefront creates the cart through the Storefront API and sends shoppers to checkout." },
      { q: "Should I use Hydrogen or Next.js for headless Shopify?", a: "Hydrogen gives Shopify-specific tools and Oxygen hosting. A general framework such as Next.js suits teams already invested in it or with content needs beyond commerce. Both use the same Shopify APIs." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Shopify Hydrogen is Shopify's framework for building a custom, headless storefront: a React Router application, preconfigured with Shopify components and utilities, that reads products and carts from the Storefront API and sends shoppers to Shopify's hosted checkout. It's usually deployed on Oxygen, Shopify's edge hosting, which is included on paid plans. Hydrogen suits brands whose storefront needs go beyond what a Liquid theme can deliver and who have development capacity to build and maintain a web application. For most stores, a well-built theme remains simpler and cheaper.",
        ],
      },
      {
        heading: "Hydrogen, Oxygen and Headless Shopify",
        body: [
          "{{b:Headless commerce}} means separating the storefront from the commerce back end. Shopify still manages products, inventory, pricing, orders, payments and checkout; your own front end handles the pages shoppers see. Hydrogen is one way to build that front end. For the broader decision, see [[/blogs/headless-shopify-explained|Shopify headless commerce]].",
          "According to Shopify's documentation, Hydrogen projects are React Router apps preconfigured with Shopify-specific features, and Oxygen is Shopify's global deployment platform for hosting Hydrogen storefronts at the edge, with multiple environments for previewing changes ([[https://shopify.dev/docs/storefronts/headless/hydrogen/fundamentals|Hydrogen fundamentals]]).",
        ],
        callout: {
          type: "note",
          text: "Many articles still describe Hydrogen as built on Remix. That was true of earlier versions; current documentation describes it as built on React Router. Check the date of anything you read.",
        },
      },
      {
        heading: "How a Hydrogen Storefront Works",
        body: ["The diagram above shows the layers. In practice:"],
        checklist: [
          "Routes and components are your code, in React",
          "Product, collection, search and cart data come from the Storefront API",
          "Customer accounts use the Customer Account API",
          "Content can come from Shopify metaobjects or a headless CMS",
          "The cart is created through the API and hands off to Shopify checkout",
          "Pages render on the server and are cached at the edge on Oxygen",
        ],
      },
      {
        heading: "What Hydrogen Gives You",
        body: [
          "Control over the front end is the main benefit: page structure, routing, rendering and caching strategy, how much JavaScript ships, and how content from several sources combines on one page. That makes it possible to build experiences a theme can't, such as complex product configurators, content-heavy editorial commerce, or one front end serving several stores or markets with shared components.",
          "Hydrogen also saves work compared with a general framework: Shopify-specific components for things like images, prices and cart, analytics helpers, and deployment to Oxygen without separate hosting.",
        ],
      },
      {
        heading: "What You Take On",
        body: [
          "Moving off a theme removes things you currently get for free.",
        ],
        table: {
          headers: ["With a Liquid theme", "With Hydrogen"],
          rows: [
            ["Theme editor for layout and content", "A CMS or metaobjects plus custom components"],
            ["App blocks add storefront features", "Apps integrated through their APIs, if available"],
            ["Theme developer or Shopify maintains core templates", "Your team maintains the whole application"],
            ["SEO basics output by the theme", "Metadata, sitemaps, redirects and structured data implemented by you"],
            ["Any Shopify developer can work on it", "Needs React and web application skills"],
          ],
        },
        callout: {
          type: "note",
          text: "Budget for ongoing development, not only the build. A Hydrogen storefront is a web application that needs dependency updates, API version upgrades, monitoring and new features.",
        },
      },
      {
        heading: "SEO With Hydrogen",
        body: [
          "Hydrogen renders on the server, so pages are crawlable, but the SEO defaults a theme provides become your responsibility: title and meta tags, canonical URLs, sitemaps, robots rules, redirects and product structured data. Shopify documents SEO patterns for Hydrogen ([[https://shopify.dev/docs/storefronts/headless/hydrogen/seo|SEO for Hydrogen]]). If you're moving from a theme, treat it as a migration with URL mapping and redirects. See [[/blogs/product-structured-data-ecommerce|product structured data]].",
        ],
      },
      {
        heading: "Performance",
        body: [
          "Server rendering, edge caching and control over client-side JavaScript give Hydrogen a strong performance ceiling. They don't guarantee it. Heavy client components, uncached API calls and third-party scripts slow any site. Compare against a well-optimized theme using real-user Core Web Vitals, not a demo. See [[/blogs/website-performance-optimization|website performance optimization]].",
        ],
        cta: {
          title: "Wondering whether Hydrogen fits your store?",
          description: "ZSpace assesses whether a theme, a customized theme or a headless build meets your requirements, before you commit to one.",
        },
      },
      {
        heading: "Hydrogen vs a Liquid Theme",
        body: [],
        table: {
          headers: ["Factor", "Liquid theme", "Hydrogen"],
          rows: [
            ["Time to launch", "Faster", "Slower"],
            ["Front-end flexibility", "Within theme architecture", "Full control"],
            ["Content editing", "Theme editor", "CMS or metaobjects"],
            ["App compatibility", "Broad, via app blocks", "Case by case"],
            ["Team skills", "Liquid, CSS, JS", "React, web app engineering"],
            ["Ongoing ownership", "Lighter", "Heavier"],
          ],
        },
      },
      {
        heading: "Hydrogen vs Other Headless Frameworks",
        body: [
          "Shopify's APIs work with any front end. Next.js and other frameworks are sensible choices when your team already uses them, when the site includes a large non-commerce content or application layer, or when you want hosting outside Shopify. Hydrogen is the more direct path when the storefront is primarily commerce and you want Shopify's tooling and Oxygen. See [[/blogs/nextjs-website-development|Next.js website development]] and [[/blogs/headless-website-development|headless website development]].",
        ],
      },
      {
        heading: "When Hydrogen Makes Sense",
        body: [],
        checklist: [
          "Storefront requirements a theme can't meet without being rebuilt",
          "Content-rich experiences combining a CMS and commerce",
          "Several storefronts or brands sharing components",
          "An in-house or long-term development team with React experience",
          "Budget for ongoing ownership, not just the build",
        ],
      },
      {
        heading: "When It Doesn't",
        body: [],
        checklist: [
          "The goal is only a faster store; optimize the theme first",
          "The team relies on the theme editor and app blocks",
          "No sustained development budget after launch",
          "Requirements are business logic, which apps or Functions can handle",
          "A new store still finding product–market fit",
        ],
      },
      {
        heading: "Moving From a Theme to Hydrogen",
        body: [
          "Most Hydrogen projects replace an existing theme rather than start from nothing. Treat the move as a migration of the front end, not a redesign bolted onto a new stack.",
        ],
        checklist: [
          "Inventory every template, section and app feature the current theme provides",
          "Decide where each piece of editable content will live: metaobjects, a CMS or code",
          "List apps with storefront features and confirm how each integrates without app blocks",
          "Map every URL and plan redirects where paths change",
          "Recreate analytics events and consent handling, then verify them",
          "Rebuild structured data, sitemaps and metadata, and compare with the old theme's output",
          "Run the new storefront against a baseline for speed and conversion before full cutover",
        ],
      },
      {
        heading: "Cost Drivers for a Hydrogen Build",
        body: [
          "A Hydrogen storefront's cost is driven by the number of distinct page types, how content is managed, how many apps need custom integration, the complexity of product configuration and search, internationalization, and the level of monitoring and testing required. Ongoing cost is driven by how often the business wants new features and how much of the storefront the internal team can maintain. See [[/blogs/shopify-development-cost|Shopify development cost]].",
        ],
      },
      {
        heading: "Hydrogen Development Workflow",
        body: [
          "Hydrogen projects follow a modern web development workflow. Developers scaffold a project with Shopify's CLI, build routes and components on React Router with the Storefront API, connect a CMS or Shopify metaobjects for content, and deploy to Oxygen through a GitHub integration that creates preview deployments for branches, or to another host if self-hosting ([[https://shopify.dev/docs/storefronts/headless/hydrogen/fundamentals|Shopify developer docs]]). Customer accounts use the Customer Account API. Analytics, consent and SEO need explicit implementation.",
        ],
        checklist: [
          "Project scaffolded with Shopify CLI",
          "Routes, data loading and caching strategy defined",
          "Content source chosen (CMS or metaobjects)",
          "Customer Account API integrated",
          "Analytics and consent implemented",
          "SEO: metadata, sitemaps, structured data, redirects",
          "Preview deployments and CI checks",
          "Monitoring and error tracking",
        ],
      },
      {
        heading: "Decision Signals",
        body: [
          "Signals that Hydrogen development is worth considering: product experiences a theme struggles with (complex configurators, app-like browsing), content-rich storefronts with a separate CMS, several frontends sharing one backend, and a React team able to maintain it for years. Signals to stay with a theme: reliance on theme apps, merchandisers who need the theme editor, no in-house or retained developers, and requirements a theme already meets. For a full comparison including other headless frameworks, see [[/blogs/shopify-hydrogen-vs-traditional-shopify|Hydrogen vs traditional Shopify]].",
        ],
      },
      {
        heading: "Hydrogen and Shopify Plans",
        body: [
          "Hydrogen and Oxygen are available beyond Plus, and Shopify's Plus plan page lists up to 25 Hydrogen storefronts on Plus. Plan choice affects checkout customization, B2B features and other capabilities more than Hydrogen itself. Decide on Hydrogen and on Plus separately. See [[/blogs/shopify-plus-development|Shopify Plus development]] and [[/blogs/shopify-plus-vs-shopify|Shopify Plus vs Shopify]].",
        ],
      },
      {
        heading: "Planning a Hydrogen Project",
        body: [
          "Start with requirements and a proof of concept for the hardest part, often product configuration or content composition. Decide the content source, list every app and how it will integrate, map URLs and SEO requirements, define performance budgets, and set up environments and monitoring. Build the product, collection, cart and search journeys first.",
        ],
        cta: {
          title: "Planning a headless Shopify build?",
          description: "Talk to ZSpace about [[/services/shopify-development|Shopify development]] and [[/services/website-development|web application development]] for Hydrogen and headless storefronts.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Hydrogen is a capable way to build a custom Shopify storefront, with Oxygen hosting included on paid plans. The trade-off is ownership: you become responsible for everything a theme and the theme editor used to handle. Choose it when requirements demand it and you can sustain it. Otherwise, a well-built theme is the stronger business decision. For the full range of build options, see [[/blogs/shopify-store-development|Shopify store development]].",
        ],
      },
    ],
  },

  // ---------------------------------------------- 69 · REDESIGN VS REBUILD
  {
    slug: "shopify-redesign-vs-rebuild",
    title: "Shopify Website Redesign vs Rebuild: Which Do You Need?",
    excerpt:
      "How to decide between redesigning your Shopify store and rebuilding it: the signals, what each changes, risks, and a decision framework.",
    category: "Shopify & Ecommerce",
    banner: "redesignrebuild",
    bannerAlt:
      "Comparison of a Shopify redesign and a rebuild across theme, templates, catalog and data, apps, URLs and custom code.",
    date: "2026-09-29",
    readingTime: "11 min read",
    relatedServiceSlugs: ["shopify-development", "ui-ux-design", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer"],
    faqs: [
      { q: "What's the difference between a Shopify redesign and a rebuild?", a: "A redesign changes what shoppers see and how pages are organized while keeping most of the underlying theme, data and apps. A rebuild replaces the theme architecture, custom code, data structure or integrations because the foundation is the problem." },
      { q: "Is a new theme a redesign or a rebuild?", a: "It depends on what else changes. Moving to a new theme with the same catalog, URLs and apps is a redesign. Moving to a new theme while restructuring products, collections, metafields and integrations is closer to a rebuild." },
      { q: "When is a rebuild necessary?", a: "When years of customizations, app residue and workarounds make changes slow and risky, when the catalog model no longer fits the business, or when the theme can't support required features without being rewritten." },
      { q: "Is replatforming a rebuild?", a: "Moving to Shopify from another platform is a migration or replatforming project, which usually includes a rebuild. See the Shopify store migration guide." },
      { q: "Which is riskier for SEO?", a: "A rebuild, because URLs, templates and content structure change more. A redesign that keeps handles and content has lower risk, but still needs checks." },
      { q: "Can we fix problems without either?", a: "Often. If the issues are specific, such as a weak product page or slow apps, targeted optimization is cheaper and faster than a redesign." },
      { q: "How do I know if my Shopify theme is the problem?", a: "Signs include simple changes taking developer days, theme updates being impossible because of customizations, leftover code from removed apps, poor performance you can't fix without removing core features, and templates that can't show your products properly." },
      { q: "How long does each take?", a: "A redesign is usually faster because catalog, URLs and integrations stay. A rebuild adds data restructuring, integration work and more testing. Scope decides the timeline." },
      { q: "Should we redesign before a big sale?", a: "No. Launch at a quieter time with a baseline, so problems can be fixed and results measured before peak traffic." },
      { q: "How do we measure success?", a: "Record a baseline of funnel rates by device, revenue per session, speed and organic traffic before the project and compare after launch." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Redesign your Shopify store when the foundation is healthy but the experience is dated, confusing or not converting: you keep the catalog, URLs, most apps and possibly the theme, and change design, layout and content. Rebuild when the foundation is the problem: heavy customizations make every change slow and risky, the catalog model no longer fits, or the theme can't support what you need without being rewritten. Decide by diagnosing why the store underperforms, not by how old it looks, and check whether targeted fixes would solve it first.",
        ],
      },
      {
        heading: "Three Options, Not Two",
        body: [
          "Before choosing between redesign and rebuild, rule out the cheaper option: {{b:optimization}}. Many stores that feel like they need a redesign actually have a few specific problems, such as a weak product page, slow apps or confusing shipping costs, that can be fixed in place.",
        ],
        table: {
          headers: ["Option", "What changes", "Choose it when"],
          rows: [
            ["Optimize", "Specific pages, elements or settings", "Problems are identifiable and limited"],
            ["Redesign", "Design, layout, navigation, content; theme may change", "Experience is the problem, foundation is sound"],
            ["Rebuild", "Theme architecture, custom code, data model, integrations", "The foundation blocks progress"],
          ],
        },
      },
      {
        heading: "What Changes in Each",
        body: [
          "The diagram above compares a redesign and a rebuild across six parts of the store. The more rows that move into the right-hand column, the more the project is a rebuild, whatever it's called.",
        ],
      },
      {
        heading: "Signs a Redesign Is Enough",
        body: [],
        checklist: [
          "The brand has moved on and the store no longer reflects it",
          "Research shows usability problems in navigation, product pages or mobile",
          "The theme is maintainable and can be updated",
          "The catalog structure and collections still fit how customers shop",
          "Apps are mostly the right ones",
          "Speed problems come from content and apps, not the theme's core",
        ],
      },
      {
        heading: "Signs You Need a Rebuild",
        body: [],
        checklist: [
          "Simple changes take developers days because of tangled custom code",
          "The theme can't be updated without losing customizations",
          "Code from uninstalled apps is still in the theme",
          "The theme predates Online Store 2.0 and doesn't support sections everywhere",
          "Products are modeled with tags and duplicated products instead of variants and metafields",
          "Integrations are brittle or undocumented",
          "Required features would mean rewriting core templates",
        ],
      },
      {
        heading: "A Decision Framework",
        body: [
          "Work through these questions in order. The first “no” usually tells you the scope.",
        ],
        table: {
          headers: ["Question", "If yes", "If no"],
          rows: [
            ["Do we know why the store underperforms?", "Continue", "Audit first"],
            ["Can targeted fixes solve it?", "Optimize", "Continue"],
            ["Is the theme maintainable and updatable?", "Continue", "Rebuild the theme"],
            ["Does the catalog model fit how we sell?", "Continue", "Restructure data (rebuild)"],
            ["Are integrations reliable and documented?", "Redesign", "Rebuild integrations"],
          ],
        },
        callout: {
          type: "tip",
          text: "Start with evidence. An [[/blogs/ecommerce-cro-audit|ecommerce CRO audit]] or a [[/blogs/ux-audit|UX audit]] tells you whether the problem is the experience, the foundation or neither.",
        },
      },
      {
        heading: "Theme Health Check",
        body: [
          "Before deciding, have a developer review the current theme: its version and whether it's supported, how many files have been modified, leftover app code, JavaScript and CSS weight, template coverage for Online Store 2.0, and whether the theme editor still works for the team. The answers usually settle the question.",
        ],
        cta: {
          title: "Not sure whether to redesign or rebuild?",
          description: "ZSpace reviews your theme, catalog and funnel data and tells you which scope the evidence supports, including when neither is needed.",
        },
      },
      {
        heading: "Risks and How to Manage Them",
        body: [
          "Both projects can lose sales if launched carelessly. Rebuilds carry more risk because more changes at once.",
        ],
        table: {
          headers: ["Risk", "Redesign", "Rebuild", "How to manage it"],
          rows: [
            ["SEO loss", "Low if handles kept", "Higher", "URL inventory, redirects, content preserved"],
            ["Conversion drop", "Medium", "Medium to high", "Baseline, testing, staged rollout"],
            ["Broken integrations", "Low", "Higher", "Integration test plan"],
            ["Scope creep", "Medium", "High", "Fixed requirements, phased releases"],
          ],
        },
      },
      {
        heading: "Protecting SEO",
        body: [
          "Shopify's fixed URL patterns for products and collections lower the risk of a theme change, but handles, collections and content often change in a rebuild. Keep handles where possible, create redirects for every changed URL, carry over collection and product copy, and monitor Search Console after launch. See [[/blogs/shopify-store-redesign-guide|how to redesign a Shopify store]] for the full process and [[/blogs/shopify-seo-guide|Shopify SEO]].",
        ],
      },
      {
        heading: "Cost and Timeline Drivers",
        body: [
          "A redesign's scope is mainly design and front-end work. A rebuild adds data restructuring, custom functionality, integration work and more QA. The number of templates, catalog complexity, apps to replace and whether content is rewritten are the biggest variables. See [[/blogs/shopify-development-cost|Shopify development cost]].",
        ],
      },
      {
        heading: "Worked Examples",
        body: [
          "Illustrative scenarios, not client case studies:",
          "**Dated look, healthy theme.** A home-goods store's brand was refreshed, but the store still uses an older version of a maintained theme with light customization. Products use variants and metafields sensibly, and apps are few. Analytics show mobile product pages underperform. Verdict: redesign, likely on the updated theme, focusing on mobile product pages, navigation and brand.",
          "**Years of patches.** An apparel store has had several agencies. The theme is heavily modified and can't be updated, leftover scripts from removed apps still load, and colours are separate products linked by tags, so filters don't work properly. Verdict: rebuild, including a catalog restructure into proper variants or combined listings, with careful redirects.",
          "**One weak step.** A supplements brand wants a redesign because sales are flat, but the funnel shows a sharp drop between cart and checkout on mobile after a shipping change. Verdict: neither. Fix shipping-cost communication and the cart, then reassess.",
        ],
      },
      {
        heading: "Launching Either Safely",
        body: [],
        checklist: [
          "Baseline funnel, speed and organic traffic recorded",
          "Built on an unpublished theme and tested on real devices",
          "Test orders through every payment and shipping path",
          "Redirects for every changed URL",
          "Analytics verified before and after publish",
          "Launched outside peak season, with a rollback plan",
          "Daily monitoring for the first weeks",
        ],
        cta: {
          title: "Want the right scope, done safely?",
          description: "Talk to ZSpace about a [[/services/shopify-development|Shopify redesign or rebuild]], [[/services/ui-ux-design|UX design]] and a [[/services/cro-audit|pre-project audit]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Redesign when the experience is the problem and the foundation is sound. Rebuild when the foundation stops you improving the experience. Optimize when the problems are specific. Whatever you choose, start from evidence and measure against a baseline. For platform-independent guidance, see [[/blogs/ecommerce-website-redesign|ecommerce website redesign]] and [[/blogs/website-redesign-vs-rebuild|website redesign vs rebuild]].",
        ],
      },
    ],
  },

  // ------------------------------------------------ 70 · DEVELOPMENT COST
  {
    slug: "shopify-development-cost",
    title: "Shopify Development Cost: What Determines the Price of a Custom Store?",
    seoTitle: "Shopify Development Cost: What Determines the Price?",
    excerpt:
      "What drives the cost of building a Shopify store: scope, theme approach, design, catalog and migration, apps, integrations, markets, QA and ongoing work.",
    category: "Shopify & Ecommerce",
    banner: "costdrivers",
    bannerAlt:
      "Staircase showing Shopify build scope rising from theme setup to customized theme, custom theme, custom apps and integrations, and headless or multi-store, with cost multipliers listed.",
    date: "2026-09-29",
    readingTime: "11 min read",
    relatedServiceSlugs: ["shopify-development", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer"],
    faqs: [
      { q: "How much does Shopify development cost?", a: "It depends on scope. A store built on a configured theme costs far less than a custom theme with integrations, migration and multiple markets. Published price ranges vary widely because projects vary widely; a scoped estimate based on your requirements is the only reliable figure." },
      { q: "Why do Shopify development quotes differ so much?", a: "Quotes often assume different scopes: how many templates are designed, whether content and migration are included, how integrations are handled, how much QA is done and whether post-launch support is included. Compare scope before price." },
      { q: "Is the Shopify plan the biggest cost?", a: "Usually not for a custom build. The plan fee is a recurring operating cost; development, design, apps and ongoing maintenance are typically larger. See the Shopify store cost guide for running costs." },
      { q: "Does a custom theme cost more than customizing an existing theme?", a: "Yes, because every template, component and state is designed and built, then maintained by you. Customizing a well-chosen theme is usually the lower-cost route for comparable results." },
      { q: "How much do integrations add?", a: "It depends on the system, whether a reliable app connector exists and how complex the data rules are. A standard connector is far cheaper than custom middleware with error handling and monitoring." },
      { q: "Does migration add cost?", a: "Yes. Data extraction, cleanup, import, URL mapping, redirects and testing all take time, and effort grows with catalog size and data quality." },
      { q: "What ongoing costs should I budget for?", a: "Plan fee, app subscriptions, transaction and payment fees, theme and app maintenance, hosting for headless front ends if outside Oxygen, and ongoing design, development and optimization." },
      { q: "How can I reduce Shopify development cost?", a: "Clarify requirements early, use native features and proven apps before custom code, customize an existing theme where it fits, clean product data before migration, and phase features after launch." },
      { q: "Is a fixed price or time-and-materials better?", a: "Fixed price suits well-defined scope. Time and materials suits evolving scope or ongoing work. Either way, insist on a clear scope and change process." },
      { q: "What should a Shopify development quote include?", a: "Discovery, design scope by template, development, content entry, migration, integrations, QA, launch support, documentation, training and a warranty period, plus what's excluded." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Shopify development cost is determined by scope, not by Shopify's plan fee. The main drivers are the build approach (configured theme, customized theme, custom theme, custom apps or headless), the number of templates designed, catalog size and migration, integrations with systems such as ERP or 3PL, markets and languages, custom functionality, and the depth of QA and post-launch support. Two quotes for “a Shopify store” can describe very different projects, so compare scope line by line. Reduce cost by using native features and proven apps before custom code and by phasing work after launch.",
        ],
      },
      {
        heading: "Development Cost vs Running Cost",
        body: [
          "This guide covers what it costs to build or significantly change a store. The ongoing cost of running one, including plan fees, apps and transaction fees, is covered in [[/blogs/how-much-does-a-shopify-store-cost|how much a Shopify store costs]]. Both matter, and custom work increases the second as well as the first.",
        ],
        callout: {
          type: "note",
          text: "Many articles on this topic lead with price ranges. We don't, because ranges without scope can't be compared and a range is only as reliable as the assumptions behind it. The drivers below are what an honest estimate is built from.",
        },
      },
      {
        heading: "Driver 1: Build Approach",
        body: [
          "The biggest single factor. The diagram above shows the staircase: each step adds design and engineering, and usually adds ongoing maintenance.",
        ],
        table: {
          headers: ["Approach", "What you're paying for", "Ongoing cost"],
          rows: [
            ["Configured theme", "Setup, content, settings, apps", "Low"],
            ["Customized theme", "Plus custom sections and template changes", "Low to medium"],
            ["Custom theme", "Design system, every template, full front-end build", "Medium"],
            ["Custom apps + integrations", "Back-end logic, APIs, error handling", "Medium to high"],
            ["Headless / multi-store", "A web application plus content and hosting setup", "High"],
          ],
        },
      },
      {
        heading: "Driver 2: Design Scope",
        body: [
          "Design effort depends on how many templates are designed, whether a design system is created, how many states are covered, and whether mobile and desktop are designed separately. A project that designs the product page, collection page, cart, homepage and search in detail costs more than one that styles a theme's defaults, and usually converts better. See [[/blogs/shopify-store-design|Shopify store design]].",
        ],
      },
      {
        heading: "Driver 3: Catalog and Data",
        body: [
          "A small, clean catalog is quick to set up. Large catalogs, complex variants, product attributes that need metafields, bundles, and collections built on rules all add work. Poor source data adds more, because it has to be cleaned before it can be imported. Product copy and photography are separate costs that are often forgotten.",
        ],
      },
      {
        heading: "Driver 4: Migration",
        body: [
          "Moving from another platform adds data export and import, customer and order history decisions, URL mapping, redirects and SEO checks. Effort scales with catalog size, content volume and data quality. See [[/blogs/migrating-to-shopify-guide|Shopify store migration]].",
        ],
      },
      {
        heading: "Driver 5: Apps, Integrations and Custom Functionality",
        body: [
          "Apps cost less to implement than custom code but carry subscriptions. Integrations with ERP, inventory, 3PL, CRM or accounting vary: a reliable connector app is a configuration job; custom middleware with retries, logging and monitoring is an engineering project. Custom functionality such as configurators, special pricing or checkout logic may need custom apps, Shopify Functions or checkout extensions, some of which require Shopify Plus. See [[/blogs/shopify-custom-app-development-guide|Shopify custom app development]].",
        ],
        cta: {
          title: "Want an estimate you can compare?",
          description: "ZSpace turns your requirements into a scoped Shopify plan with clear inclusions, so you know what you're paying for.",
        },
      },
      {
        heading: "Driver 6: Markets, Languages and B2B",
        body: [
          "Selling in several countries adds currencies, translations, market-specific content, tax and duty settings, and more QA. B2B adds company accounts, catalogs, price lists and payment terms. Each needs design, configuration and testing.",
        ],
      },
      {
        heading: "Driver 7: QA, Launch and Support",
        body: [
          "Testing across devices, payment methods, shipping rules, markets and integrations takes real time, and cutting it is a false saving. Launch support, documentation, team training and a warranty period should be in the quote, not assumed.",
        ],
      },
      {
        heading: "Who Does the Work",
        body: [
          "Rates and overheads differ between freelancers, agencies and in-house teams, and so does what's included: an agency quote usually covers design, development, QA and project management; a freelancer quote may cover one discipline. Compare like with like. See [[/blogs/shopify-developer-vs-agency-which-to-hire|Shopify agency vs freelancer]].",
        ],
      },
      {
        heading: "Three Example Scopes",
        body: [
          "These illustrative profiles show how scope, not the platform, moves cost. No prices are attached because rates vary by market and team; use them to check that quotes you receive describe the same kind of project.",
        ],
        table: {
          headers: ["Profile", "Typical scope", "Main cost drivers"],
          rows: [
            ["New D2C brand, small catalog", "Customized existing theme, product page and homepage designed, core apps, analytics, QA", "Design depth, content and photography"],
            ["Established retailer moving to Shopify", "Customized or custom theme, catalog restructure, migration, redirects, ERP connector", "Data cleanup, migration, integration testing"],
            ["Multi-market brand on Plus", "Custom theme or headless, several markets and languages, checkout extensions, B2B", "Custom functionality, localization, QA across markets"],
          ],
        },
      },
      {
        heading: "Hidden Costs to Plan For",
        body: [],
        checklist: [
          "Product photography and copywriting",
          "App subscriptions that scale with orders or revenue",
          "Content entry for large catalogs",
          "Translations and market-specific content",
          "Redirect mapping and post-launch SEO monitoring",
          "Training the team to run the store",
          "Maintenance and API version upgrades for custom apps",
        ],
      },
      {
        heading: "How to Compare Quotes",
        body: ["Put quotes side by side against the same list."],
        checklist: [
          "Discovery and requirements included?",
          "Which templates are designed, and for mobile and desktop?",
          "Theme approach and who maintains custom code",
          "Content entry, product data and migration: included or excluded?",
          "Integrations: connector app or custom build, and error handling",
          "QA scope: devices, payments, markets, accessibility, performance",
          "Launch support, documentation, training and warranty",
          "Change request process and rates",
          "Ongoing costs: apps, maintenance, retainers",
        ],
      },
      {
        heading: "Ways to Control Cost",
        body: [],
        checklist: [
          "Write requirements before asking for quotes",
          "Use native Shopify features and proven apps before custom code",
          "Customize a well-fitting theme instead of building one when possible",
          "Clean product data before migration",
          "Design the revenue templates in depth; keep secondary pages simple",
          "Phase non-essential features after launch",
          "Budget for maintenance so technical debt doesn't accumulate",
        ],
        cta: {
          title: "Planning your Shopify budget?",
          description: "Talk to ZSpace about [[/services/shopify-development|Shopify development]] scoped to your catalog, systems and markets.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "The price of a custom Shopify store follows its scope: build approach, design depth, catalog and migration, integrations, markets and QA. Define requirements, compare quotes on the same scope, choose the least custom approach that works, and budget for what happens after launch. For the full build process, see [[/blogs/shopify-store-development|Shopify store development]].",
        ],
      },
    ],
  },
];
