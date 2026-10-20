import type { BlogPost } from "./blog-data";

/**
 * Product Design and UI/UX cluster (part two): information architecture,
 * wireframing vs prototyping, responsive UI, accessible design, UX audits,
 * usability testing and design handoff. Same additive module pattern,
 * merged into `posts` in blog-data.ts.
 */

export const designPosts2: BlogPost[] = [
  // ------------------------------------------------ INFORMATION ARCHITECTURE
  {
    slug: "information-architecture",
    title: "Information Architecture: How to Structure a Website or Digital Product",
    seoTitle: "Information Architecture: Structure a Site or Product",
    excerpt:
      "How to restructure a complex website or product: content audit, card sorting, tree testing, sitemap, URLs and breadcrumbs, with a re-org worksheet.",
    category: "UI/UX",
    banner: "iaflow",
    sceneKind: "design",
    bannerAlt: "Information architecture flow from content to categories, navigation, search and user journeys, with categories highlighted",
    date: "2026-09-25",
    updated: "2026-10-15",
    readingTime: "11 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development"],
    relatedIndustrySlugs: ["ecommerce", "saas-technology", "education-edtech"],
    relatedSlugs: ["website-navigation-and-ux", "information-architecture-vs-user-flow", "ux-metrics-beyond-conversion-rate"],
    faqs: [
      {
        q: "What is information architecture?",
        a: "The practice of organising, structuring and labelling content and features so users can find what they need and understand where they are.",
      },
      {
        q: "What's the difference between information architecture and navigation?",
        a: "Information architecture is the underlying structure and labelling. Navigation is the interface, such as menus, links, search and breadcrumbs, that exposes that structure to users.",
      },
      {
        q: "What is card sorting?",
        a: "A research method where participants group content items into categories. Open card sorts let them name categories; closed card sorts use predefined ones; hybrid sorts mix the two.",
      },
      {
        q: "What is tree testing?",
        a: "A method where participants try to find items in a text-only version of a proposed structure, showing whether labels and groupings work without visual design influencing results.",
      },
      {
        q: "What is a sitemap in UX?",
        a: "A diagram of a product's pages or screens and how they're organised hierarchically. It's a key information architecture deliverable, and it is different from the XML sitemap file submitted to search engines.",
      },
      {
        q: "What is a taxonomy?",
        a: "A controlled system for classifying content, such as product categories and attributes in ecommerce, that supports navigation, filtering and search.",
      },
      {
        q: "How do you know if information architecture is failing?",
        a: "Signals include users searching for things that should be easy to browse, high exit rates from navigation pages, support questions about where to find things, and failed tree tests.",
      },
      {
        q: "Does information architecture affect SEO?",
        a: "It can, mainly through internal linking. Google says it generally doesn't look at the structure of URLs to work out the structure of a site; it analyses how pages link to each other. Clear hierarchy, crawlable links and descriptive labels help both users and search engines. Readable URLs are still good practice, but a folder path alone does not tell Google how your site is organised.",
      },
      {
        q: "How many people do I need for a card sort?",
        a: "Nielsen Norman Group recommends at least 15 participants for a qualitative card sort and at least 30 to 50 for quantitative results you want to generalise.",
      },
      {
        q: "Should we change URLs when we restructure the site?",
        a: "Only when there is a clear reason. Every changed URL needs a permanent redirect from the old address, and the new structure should still be expressed through internal links and breadcrumbs, which is what search engines and users actually follow.",
      },
    ],
    content: [
      {
        heading: "How do you structure a website or digital product?",
        body: [
          "Information architecture (IA) is how a website's or product's content and features are organised, labelled and connected so people can find things and understand where they are. To structure a complex site, you audit what exists, learn how users group it (card sorting), design a hierarchy and labels, test that hierarchy without visual design (tree testing), then document it as a sitemap with a URL, breadcrumb and redirect plan. Menus and page layouts come after that, not before.",
          "This applies whether you run a marketing site that has grown to hundreds of pages, an ecommerce catalogue, a content library or a SaaS product with dozens of settings screens.",
        ],
        callout: {
          type: "takeaway",
          text: "Key takeaways: audit before you sort; let users' groupings shape the structure; test labels in a tree test before anyone designs a menu; Google reads your structure from links, not URL folders; and a re-org is not finished until the redirect map is done.",
        },
      },
      {
        heading: "IA and Navigation Are Different Things",
        body: [
          "Nielsen Norman Group describes IA as \"the information backbone of the site\" and navigation as the \"elements in the UI that allow users to reach specific information\". A menu redesign won't fix a confusing structure underneath. The [[/blogs/website-navigation-and-ux|website navigation and UX guide]] covers menus, breadcrumb design and mobile navigation; this guide covers the structure they depend on.",
        ],
        visual: {
          variant: "grid",
          accent: "orange",
          caption:
            "Content, categories, navigation, search and user journeys: IA connects them into one coherent structure.",
        },
        table: {
          headers: ["Component", "What it defines", "Example"],
          rows: [
            ["Organisation systems", "How content is grouped", "By topic, task, audience or product type"],
            ["Labelling systems", "What things are called", '"Plans" vs "Pricing", "Help" vs "Support"'],
            ["Navigation systems", "How users move through content", "Global menu, local navigation, breadcrumbs"],
            ["Search systems", "How users find by query", "Site search, filters, suggestions"],
            ["Taxonomies and metadata", "How content is classified", "Product categories, attributes, tags"],
          ],
        },
      },
      {
        heading: "The IA Re-org Worksheet",
        body: [
          "Use this as the plan for a restructure. Each phase has a method, a concrete output, and a decision it settles. If you skip a phase, the decision it settles gets made in a meeting instead, usually by whoever has the most senior job title.",
        ],
        table: {
          headers: ["Phase", "Method", "Output", "Decision it settles"],
          rows: [
            ["1. Inventory and audit", "Crawl plus spreadsheet review", "Content audit sheet: URL, owner, traffic, keep / merge / cut", "What is actually in scope"],
            ["2. Discover groupings", "Open card sort", "Candidate groups and users' own labels", "Which top-level categories make sense to users"],
            ["3. Validate labels", "Closed card sort or tree test", "Success and directness by task", "Whether people can find key items in the proposed structure"],
            ["4. Document the hierarchy", "Sitemap", "Page hierarchy with templates and owners", "What lives where, and how deep it goes"],
            ["5. Plan URLs and breadcrumbs", "URL pattern and breadcrumb rules", "URL list and breadcrumb trail per template", "Which URLs change and how location is shown"],
            ["6. Map redirects", "Old-to-new mapping", "Redirect map, one row per changed URL", "That no existing link or bookmark breaks"],
          ],
        },
      },
      {
        heading: "Step 1: Inventory and Audit the Content",
        body: [
          "An inventory answers \"what is there?\"; an audit answers \"is it any good, and should it stay?\". For an existing site, crawl it to get every indexable URL, then add columns for page type, owner, last updated, traffic over a sensible period (say 12 months, from your analytics) and whether internal links point to it.",
          "Then make a call on each row. A common working method is to flag content as redundant, outdated or trivial (often shortened to ROT) and assign an action: keep, merge into another page, rewrite, or remove with a redirect. For a product, the equivalent is a feature and screen inventory with usage data. For a new site, derive the inventory from user tasks and business requirements instead.",
          "Do not skip this step. Sorting 400 cards when 150 of them should be cut produces a structure designed around content nobody needs.",
        ],
      },
      {
        heading: "Step 2: Learn How Users Group Content",
        body: [
          "Structure should reflect users' mental models, not your org chart. Card sorting is a discovery method used to generate ideas for an IA. Nielsen Norman Group describes three types:",
        ],
        table: {
          headers: ["Type", "How it works", "Use it when"],
          rows: [
            ["Open", "Users create their own groups with no predefined categories, and name them", "You are building or rethinking the top level and want users' language"],
            ["Closed", "Users sort cards into categories you provide", "You have a proposed set of categories and want to see if items fit"],
            ["Hybrid", "Some predefined categories, plus freedom to create new ones", "Rarely. NN/g generally recommends against it, because predefined groups steer users; it may suit a team confident about one or two categories but unsure of the rest"],
          ],
        },
        checklist: [
          "Sample size (NN/g): at least 15 participants for a qualitative sort, at least 30 to 50 for quantitative results you want to generalise",
          "Use 30 to 60 representative cards, not the whole site; pick items from across the audit",
          "Write card labels in plain language so the card's own wording doesn't give away the answer",
          "Recruit people who match your real audience, not colleagues",
          "Look for agreement patterns and the labels users invent, not a single \"correct\" answer",
        ],
      },
      {
        heading: "Step 3: Define Categories and Labels",
        body: [
          "Group content into categories that are distinct from each other, and name them in users' language. Avoid internal jargon and clever labels that hide meaning. Where items could belong in several places, choose one primary location and use cross-links from the others.",
          "Balance breadth and depth. Too many top-level items overwhelm; too many levels bury content. Check that the most common tasks need the fewest clicks.",
        ],
      },
      {
        heading: "Step 4: Validate With Tree Testing",
        body: [
          "A tree test evaluates a hierarchical category structure. Participants see a text-only version of the menu and are asked to find specific items (\"Where would you go to change your billing address?\"). Because there is no visual design, the results show whether the structure and labels work on their own.",
          "Nielsen Norman Group's tree testing guide describes the main measures. A qualitative tree test needs only a few participants; a quantitative one needs a larger sample. NN/g's guide does not give a fixed number, so size the study to the decision you need to make.",
        ],
        table: {
          headers: ["Metric", "What it tells you", "What to do if it is weak"],
          rows: [
            ["Success rate", "Share of participants who found the correct location for a task", "Rename or move the item; check whether two categories overlap"],
            ["Directness", "Whether people went straight there or tried other branches first; a proxy for confidence", "Find the wrong branch most people tried; that is the label competing with yours"],
            ["Time", "How long it took to choose", "Long times with high success suggest labels people can decode, but only slowly"],
            ["First click and paths", "Which top-level category people chose first", "A wrong first click usually means the top level needs rework"],
          ],
        },
        callout: {
          type: "tip",
          text: "Test the existing tree and the proposed tree with the same tasks. The comparison is more persuasive in a stakeholder meeting than either result on its own. For how these measures sit alongside task success and satisfaction scores, see [[/blogs/ux-metrics-beyond-conversion-rate|UX metrics beyond conversion rate]].",
        },
      },
      {
        heading: "Navigation Models, Briefly",
        body: [
          "Once the tree passes testing, choose how the interface exposes it. Most sites combine several of these.",
        ],
        table: {
          headers: ["Model", "Fits", "Watch out for"],
          rows: [
            ["Global menu with local navigation", "Most marketing and content sites", "Local menus that differ from section to section"],
            ["Mega menu", "Large sites with many second-level pages", "NN/g advises a hover delay of about 0.5 seconds, no complex widgets inside, and each option shown once"],
            ["Hub pages", "Services, guides or product families where an overview page links to each child page", "Hubs that are just link lists with no help choosing"],
            ["Faceted navigation", "Ecommerce and large catalogues filtered by attributes", "Crawlable filter combinations multiplying URLs"],
            ["Tab bar or sidebar", "Mobile apps and SaaS products", "Too many top-level destinations"],
          ],
        },
        checklist: [
          "Mega menu guidance: NN/g on mega menus",
          "Ecommerce specifics: [[/blogs/ecommerce-navigation-design|ecommerce navigation design]] and [[/blogs/ecommerce-faceted-navigation-seo|faceted navigation and SEO]]",
          "Menu, search and mobile navigation UX: [[/blogs/website-navigation-and-ux|the navigation guide]]",
        ],
      },
      {
        heading: "Step 5: The Sitemap Deliverable",
        body: [
          "A UX sitemap documents the hierarchy everyone has agreed. Keep it practical: each node should show the page name, its template (for example service page, article, category), its owner, and whether it is new, kept, merged or removed. Pair it with user flows for the main tasks; [[/blogs/information-architecture-vs-user-flow|information architecture vs user flow]] explains how the two fit together, and [[/blogs/user-flow-design|user flow design]] covers mapping flows.",
          "Hypothetical example: a services business with a sprawling site might settle on the structure below. It is illustrative, not a template to copy.",
        ],
        code: {
          label: "Illustrative sitemap (hypothetical services business)",
          text: `Home
├── Services                      [hub]
│   ├── Bookkeeping               [service]
│   ├── Payroll                   [service]
│   └── Tax returns               [service]
├── Who we help                   [hub]
│   ├── Sole traders              [audience]
│   └── Small companies           [audience]
├── Pricing                       [page]
├── Guides                        [article index]
│   └── (articles, tagged by service)
├── About                         [page]
└── Contact                       [page]`,
        },
      },
      {
        heading: "Step 6: URLs, Breadcrumbs and Redirects",
        body: [
          "Google says it \"generally doesn't look at the structure of URLs to work out the structure of a site\"; it analyses the relationship between pages \"based on their linkages\", and recommends ordinary <a href> links rather than JavaScript events on other elements. So the structure you designed has to show up in menus, hub pages and cross-links. A tidy folder path is not enough on its own.",
          "URLs still matter for people. Google's URL structure guidance recommends readable words rather than long ID numbers, hyphens rather than underscores, words in your audience's language, and trimming parameters that don't change the content. It also notes URLs are case sensitive. A practical rule: make URLs short and readable, and don't change existing ones just to mirror a new menu.",
          "Breadcrumbs show where a page sits. Google describes a breadcrumb trail as indicating \"the page's position in the site hierarchy\" and uses breadcrumb markup to categorise information in results. Its documentation lists the feature as available on desktop, and since 23 January 2025 Google no longer shows breadcrumbs in the visible URL on mobile results, only the domain. Breadcrumbs on the page still help users on every device, so keep them for anything more than two levels deep.",
          "Finally, every URL that changes needs a permanent redirect from the old address to its closest new equivalent, listed in a redirect map before launch. The [[/blogs/ecommerce-url-migration|URL migration guide]] covers mapping and testing redirects, and [[/blogs/seo-friendly-website-development|SEO-friendly website development]] covers the build side.",
        ],
      },
      {
        heading: "Search as Part of IA",
        body: [
          "Search complements browsing, especially for large catalogues or content libraries, but it should not compensate for a structure people cannot browse. Taxonomies and metadata power filters and relevant results. Your site search logs are also research: frequent queries for things that are already in the menu point to labels people don't recognise. See [[/blogs/mobile-app-search|in-app search]] and [[/blogs/ecommerce-category-page-design|ecommerce category page design]] for applied examples.",
        ],
      },
      {
        heading: "IA for Different Products",
        body: [],
        table: {
          headers: ["Product", "IA priority"],
          rows: [
            ["Marketing website", "Clear service and audience paths, hub pages, short routes to contact or demo"],
            ["Large content or corporate site", "Content audit, ownership per section, governance so the menu stops growing"],
            ["Ecommerce store", "Category taxonomy, product attributes for filters, search"],
            ["SaaS product", "Task-based navigation, settings organisation, permissions"],
            ["Mobile app", "Few top-level destinations, shallow hierarchy"],
            ["Content library", "Topics, tags, search and related content"],
          ],
        },
      },
      {
        heading: "Common IA Mistakes",
        body: [],
        checklist: [
          "Mirroring the company's internal structure or departments",
          "Card sorting the whole site before cutting redundant and outdated content",
          "Vague or clever labels users don't recognise",
          "Overlapping categories where items could live anywhere",
          "Very deep hierarchies that bury common content",
          "Designing menus before testing the structure",
          "Changing every URL to match the new menu, then forgetting redirects",
          "Relying on search to compensate for poor structure",
        ],
      },
      {
        heading: "Risks and Limits",
        body: [
          "A full re-org is not always the right answer. If analytics and support questions show problems in one section, fix that section and tree-test it rather than restructuring everything. Small sites with a dozen pages rarely need formal card sorting; a quick review of labels against user tasks may be enough. And research only helps if participants resemble your real audience: a card sort with colleagues mainly tells you how your colleagues think.",
          "Structural change also carries search risk. Moving or merging many pages at once can temporarily disrupt how pages are found, which is why the redirect map and internal linking plan belong inside the IA work, not after it.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Good information architecture is invisible: users find what they need and know where they are. Audit content first, learn users' mental models with card sorting, label in their language, validate with tree testing, then document the sitemap, URL and breadcrumb rules and redirect map before visual design. It is the foundation of the [[/blogs/ux-design-process|UX design process]].",
          "Next steps: copy the worksheet above into a spreadsheet, run the inventory, and agree which sections are in scope before recruiting for a card sort.",
        ],
        cta: {
          title: "Planning a redesign? Map the structure first.",
          description:
            "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/ui-ux-design|UX and information architecture]] and [[/services/website-development|website development]]. If useful, we can talk through how to audit, test and restructure your site before design starts.",
        },
      },
      {
        heading: "Sources",
        body: [
          "Research methods: NN/g: The Difference Between Information Architecture and Navigation (Cardello, 2014); NN/g: Card Sorting (Tankala and Sherwin, 2024); NN/g: Card Sorting vs Tree Testing (Tankala, 2024); NN/g: Tree Testing (Laubheimer, 2023, reviewed 2026); NN/g: Mega Menus Work Well (Nielsen and Li, 2017).",
          "Search: Google Search Central: help Google understand your site structure; Google Search Central: URL structure best practices; Google Search Central: breadcrumb structured data; Google Search Central blog: simplifying the visible URL on mobile (23 January 2025).",
          "Accessed 15 October 2026. Search engine behaviour changes; check Google's current documentation.",
        ],
      },
    ],
  },

  // -------------------------------------------- WIREFRAMING VS PROTOTYPING
  {
    slug: "wireframing-vs-prototyping",
    title: "Wireframing vs Prototyping: What's the Difference?",
    excerpt:
      "How wireframes, mockups and prototypes differ in purpose, fidelity, effort and use, and when each is the right tool in the design process.",
    category: "UI/UX",
    banner: "homepageanatomy",
    date: "2026-09-25",
    readingTime: "10 min read",
    relatedServiceSlugs: ["ui-ux-design"],
    relatedIndustrySlugs: ["saas-technology", "startups", "ecommerce"],
    faqs: [
      {
        q: "What is a wireframe?",
        a: "A simplified layout of a screen showing structure, content placement and hierarchy without visual styling, used to agree on what goes where.",
      },
      {
        q: "What is a prototype?",
        a: "An interactive simulation of a product that lets people click or tap through flows, used to test how the experience works before building it.",
      },
      {
        q: "What is a mockup?",
        a: "A static, visually detailed representation of a screen showing final colors, typography and imagery, but without interaction.",
      },
      {
        q: "Which comes first, wireframe or prototype?",
        a: "Usually wireframes first to settle structure, then prototypes to test flows. Low-fidelity prototypes can also be built directly from wireframes.",
      },
      {
        q: "What is the difference between low- and high-fidelity?",
        a: "Low fidelity is rough and quick, focusing on structure and flow. High fidelity looks and behaves close to the final product, useful for detailed interaction and stakeholder sign-off.",
      },
      {
        q: "Do I need both wireframes and prototypes?",
        a: "For most projects, yes. Wireframes are the fastest way to explore layout; prototypes are the fastest way to test whether a flow works.",
      },
      {
        q: "Can a prototype be tested with users?",
        a: "Yes, that's their main purpose. Usability testing with prototypes finds problems before development.",
      },
      {
        q: "What tools are used?",
        a: "Design tools such as Figma support wireframes, mockups and interactive prototypes. Paper sketches are still useful for the earliest ideas.",
      },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          'A wireframe is a simplified, static layout that shows structure, content placement and hierarchy without visual styling. A prototype is an interactive simulation that lets people click or tap through a flow so it can be tested before it\'s built. Wireframes answer "what goes where?"; prototypes answer "does this flow work?". Most projects use both: wireframes to explore and agree on structure quickly, then prototypes, low- or high-fidelity, to test key flows with users.',
        ],
      },
      {
        heading: "Wireframes, Mockups and Prototypes",
        body: [],
        table: {
          headers: ["", "Wireframe", "Mockup", "Prototype"],
          rows: [
            [
              "Purpose",
              "Structure and hierarchy",
              "Visual design",
              "Interaction and flow",
            ],
            ["Fidelity", "Low to medium", "High", "Low to high"],
            ["Interactive", "No", "No", "Yes"],
            ["Effort", "Low", "Medium", "Low to high"],
            [
              "Best for",
              "Exploring layouts, agreeing content",
              "Visual direction, brand sign-off",
              "Usability testing, developer understanding",
            ],
            [
              "Feedback focus",
              "What goes where",
              "How it looks",
              "How it works",
            ],
          ],
        },
        // visual: { variant: "grid", accent: "blue", caption: "Wireframes settle structure, mockups settle visuals, prototypes test behavior." },
      },
      {
        heading: "What Wireframes Are For",
        body: [
          "Wireframes keep attention on content and structure. Because they're quick, teams can explore several layouts and discuss priorities without debating colors. They're the natural output of [[/blogs/information-architecture|information architecture]] work and early UX design.",
        ],
      },
      {
        heading: "What Prototypes Are For",
        body: [
          "Prototypes make flows testable. A clickable prototype of a checkout or onboarding flow lets users attempt real tasks, revealing confusion before any code exists. They also help developers and stakeholders understand interactions that static screens can't show. See [[/blogs/usability-testing|usability testing]]. To plan and run the test itself, see [[/blogs/test-website-prototype-before-development|how to test a website prototype before development]].",
        ],
      },
      {
        heading: "Choosing Fidelity",
        body: [
          "Match fidelity to the question. Testing whether users understand a flow? Low-fidelity is enough and invites honest feedback. Testing detailed interactions, animations or visual clarity? Use high fidelity. Early, rough work is cheaper to throw away, which is the point.",
          "For the broader question of how much design work a product needs before development starts, see [[/blogs/how-much-ux-design-before-development|how much UX design to do before development]].",
        ],
        cta: {
          title: "Want to test a flow before you build it?",
          description:
            "ZSpace Labs builds prototypes of your key journeys and tests them with real users before development starts.",
        },
      },
      {
        heading: "Where They Fit in the Process",
        body: [
          "A typical sequence runs: sketches, then low-fidelity wireframes, then a low-fidelity prototype tested with users, then high-fidelity design and prototype, then development. See the [[/blogs/ux-design-process|UX design process]] for the full workflow.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Starting in high fidelity, so feedback focuses on visuals",
          "Wireframes with placeholder text that hides real content problems",
          "Prototyping every screen instead of the riskiest flows",
          "Treating a prototype as production-ready specification",
          "Never testing prototypes with real users",
        ],
        cta: {
          title: "Need wireframes and prototypes for your product?",
          description:
            "Talk to ZSpace Labs about [[/services/ui-ux-design|UI/UX design]] from first sketches to tested prototypes.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Wireframes are for deciding structure; prototypes are for testing behavior. Use wireframes early and quickly, prototype the flows that carry the most risk, and raise fidelity only when the question requires it. For the bigger picture, see the [[/blogs/product-design-process|product design process]].",
        ],
      },
    ],
  },

  // ------------------------------------------------------------ RESPONSIVE UI
  {
    slug: "responsive-ui-design",
    title: "Responsive Website Design: How to Plan for Mobile, Tablet and Desktop",
    seoTitle: "How to Plan Responsive Design for Mobile, Tablet, Desktop",
    excerpt:
      "How to plan responsive design: content priority per breakpoint, breakpoints from content and analytics, component specs, WCAG reflow and a device test matrix.",
    category: "UI/UX",
    banner: "mobileframe",
    sceneKind: "mobile",
    bannerAlt:
      "One page layout shown at phone, tablet and desktop widths, with content blocks reordering and the navigation collapsing as the width narrows",
    date: "2026-09-25",
    updated: "2026-10-15",
    readingTime: "11 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development"],
    relatedIndustrySlugs: ["ecommerce", "saas-technology", "d2c-consumer"],
    relatedSlugs: [
      "how-to-make-a-website-mobile-friendly",
      "design-handoff",
      "accessible-ui-ux-design",
    ],
    faqs: [
      {
        q: "What is responsive UI design?",
        a: "Designing interfaces that adapt their layout, content and components to different screen sizes and input methods, rather than creating separate fixed designs for each device.",
      },
      {
        q: "What is mobile-first design?",
        a: "Designing the smallest screen first, then enhancing for larger screens. It forces prioritisation of the most important content and actions.",
      },
      {
        q: "What breakpoints should I design for?",
        a: "Choose breakpoints where your content needs to change layout, not around specific devices. Start narrow, widen until the layout breaks, and add a breakpoint there. Then check your own analytics to make sure the widths most of your visitors use sit comfortably inside a layout rather than right on the edge of one.",
      },
      {
        q: "What is the difference between responsive and adaptive design?",
        a: "Responsive layouts flow continuously with the screen size. Adaptive designs switch between a few fixed layouts. Most modern sites are responsive, sometimes with adaptive elements.",
      },
      {
        q: "How should tables work on mobile?",
        a: "Consider horizontal scrolling within a container, stacking rows into cards, or showing fewer columns by default. Never let a table break the page width. WCAG's reflow criterion allows two-dimensional scrolling only for content that genuinely needs a two-dimensional layout, such as a data table.",
      },
      {
        q: "How big should touch targets be?",
        a: "WCAG 2.2 success criterion 2.5.8 (level AA) sets a minimum of 24 by 24 CSS pixels for pointer targets, with exceptions such as enough spacing around smaller targets and links inside sentences. That is a minimum. Apple's and Google's platform guidelines recommend larger targets for apps, so check their current guidance if you are designing for iOS or Android.",
      },
      {
        q: "Does responsive design affect SEO?",
        a: "Google uses the mobile version of a site's content, crawled with a smartphone agent, for indexing and ranking, and recommends responsive design as the easiest pattern to maintain. The practical rule is to keep the same content on mobile as on desktop; tabs and accordions are acceptable.",
      },
      {
        q: "How is this different from making a website mobile-friendly?",
        a: "This guide covers planning and design decisions: content priority, breakpoints, component behaviour and the test plan. The mobile-friendly website guide is a practical checklist for implementing and fixing a mobile-friendly site.",
      },
      {
        q: "How many breakpoints does a website need?",
        a: "As many as the content needs, which for many marketing sites is two or three major layout changes plus some minor adjustments to type and spacing. Components that appear in several column widths may be better handled with container queries than with more page-level breakpoints.",
      },
      {
        q: "Should we use container queries or media queries?",
        a: "Both. Media queries suit page-level layout. Container queries let a component respond to the width of the space it sits in, which is useful for cards and widgets reused in sidebars, grids and full-width sections. MDN lists container queries as Baseline widely available, though some newer parts of the feature vary in support.",
      },
    ],
    content: [
      {
        heading: "How do you plan responsive design?",
        body: [
          "**Plan responsive design in four steps: rank the content on each template and decide what happens to each block at narrow, medium and wide widths; choose breakpoints where your content breaks, checked against your own analytics rather than a list of devices; write a behaviour spec for each component; and agree a device test matrix before the build. Design at a small phone width first, make sure everything still works at 320 CSS pixels, and keep the same content on every screen size.**",
          "This guide is for founders, marketers and product owners commissioning a website or app, and for designers writing the responsive part of a brief. It covers the planning and design decisions. For fixing an existing site, see [[/blogs/how-to-make-a-website-mobile-friendly|how to make a website mobile-friendly]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Decide content priority per template before drawing layouts.",
          "Set breakpoints from the content, then sanity-check them against your own analytics.",
          "Do not hide content on mobile; reorder or collapse it instead.",
          "Write a behaviour spec for every component, not just three artboards.",
          "Treat WCAG reflow at 320 CSS pixels and 24 by 24 pixel targets as floors.",
          "Agree the device test matrix before the build, not after launch.",
        ],
      },
      {
        heading: "Start Mobile-First",
        body: [
          "Designing the smallest screen first forces the key question: what matters most? Once the essential content and actions work on a phone, larger screens can add space, secondary content and richer layouts. Starting from desktop tends to produce cramped, compromised mobile layouts.",
          "There is also a search reason. Google says it \"uses the mobile version of a site's content, crawled with the smartphone agent, for indexing and ranking\", asks that the mobile site contain the same content as the desktop site, and recommends responsive design as the easiest pattern to implement and maintain.",
        ],
        visual: {
          variant: "phone",
          accent: "orange",
          caption:
            "Mobile-first design decides what matters most, then larger screens add room and detail.",
        },
      },
      {
        heading: "Planning kit 1: content priority per breakpoint",
        body: [
          "For each template (home, service, product, article, checkout), list the content blocks and rank them by what the visitor needs first. Then decide, for each width band, whether each block is shown as is, collapsed (accordion or tabs), moved (lower down or into a menu or sheet) or deferred (loaded on demand). The rule is that nothing is removed on small screens. web.dev's guidance is direct: \"Don't hide content just because you can't fit it on the screen.\"",
        ],
        table: {
          headers: ["Block (example: service page)", "Rank", "Narrow (phone)", "Medium (tablet)", "Wide (desktop)"],
          rows: [
            ["Headline and primary action", "1", "Show, first screen", "Show", "Show"],
            ["Short proof (ratings, logos)", "2", "Show, compact", "Show", "Show beside headline"],
            ["Service details", "3", "Collapse into sections", "Show", "Show"],
            ["Process steps", "4", "Show as a vertical list", "Two columns", "Horizontal row"],
            ["FAQs", "5", "Collapse", "Collapse", "Collapse"],
            ["Secondary navigation", "6", "Move into menu", "Move into menu", "Show"],
          ],
        },
      },
      {
        heading: "Planning kit 2: choosing breakpoints",
        body: [
          "Most breakpoint lists online are sets of device widths. Google's own guidance on web.dev says the opposite: \"Don't define breakpoints based on device classes, or any product, brand name, or operating system.\" Devices change every year; your content does not. Use this method instead.",
        ],
        checklist: [
          "Design the narrow layout first at a common small phone width, such as 360 CSS pixels, and check it still works at 320.",
          "Widen the canvas until the layout breaks (lines too long, cards too narrow, navigation crowded) and add a major breakpoint there. Repeat.",
          "Add minor breakpoints only for type, spacing and margins, not for whole new layouts.",
          "Set a maximum content width so lines stay readable on large screens.",
          "Pull the screen sizes from your own analytics for the last 90 days. List the widths that cover most sessions and check that each sits comfortably inside a layout band rather than just either side of a breakpoint.",
          "For components that appear in several column widths (cards, product tiles, pricing boxes), use container queries rather than more page breakpoints.",
        ],
        callout: {
          type: "note",
          text: "Device mix genuinely differs by market. StatCounter's platform share for September 2026 shows mobile at 77.3% of page views in India, 60.04% in the UAE, 53.56% in the UK and 48.57% in Australia, with tablets highest in the UK at 4.66%. These figures are page views on sites that use StatCounter, not users or sales, and they move month to month. Use them as context and plan from your own analytics.",
        },
      },
      {
        heading: "Container queries and media queries",
        body: [
          "Media queries respond to the viewport, so they suit page-level layout: when the sidebar appears, when the grid goes from two columns to three. Container queries respond to the size of the element a component sits in, so the same product card can stack in a narrow sidebar and sit side by side in a wide section without separate variants. MDN lists the @container rule as Baseline widely available, \"available across browsers since February 2023\", with a note that some parts of the feature have varying support.",
          "For planning, this changes the spec. Instead of describing a card \"on tablet\", describe it by the width of its container, which is how the developer will build it.",
        ],
      },
      {
        heading: "Planning kit 3: component behaviour spec",
        body: [
          "Write one of these for each component that changes across widths. It is the written version of what designers often leave in three artboards, and it is what developers need at [[/blogs/design-handoff|design handoff]]. The example shows a product card.",
        ],
        table: {
          headers: ["Field", "What to specify", "Example: product card"],
          rows: [
            ["Container widths", "The widths of space it appears in", "Grid cell 160 to 320px; sidebar 240px"],
            ["Layout per band", "How the parts arrange at each container width", "Under 240px: image above text; 240px and over: image left"],
            ["Truncation", "What shortens and how", "Title two lines then ellipsis; full title on product page"],
            ["Moves or collapses", "What goes into a menu, sheet or accordion", "Quick-add opens a bottom sheet on narrow widths"],
            ["Touch target", "Minimum size and spacing", "Add button at least 24 by 24 CSS px, with spacing"],
            ["Hover fallback", "What replaces hover on touch", "Second image on hover; no reliance on hover for price or actions"],
            ["Reflow at 320", "Behaviour at the WCAG floor", "Single column, no horizontal scroll"],
            ["Text scaling", "Behaviour with larger system text", "Card grows in height; text does not clip"],
          ],
        },
      },
      {
        heading: "Responsive Components",
        body: ["Common patterns to start from:"],
        table: {
          headers: ["Component", "Narrow screens", "Wide screens"],
          rows: [
            [
              "Navigation",
              "Menu button or bottom bar, few top items",
              "Full horizontal navigation",
            ],
            [
              "Product or card grid",
              "One or two columns",
              "Three or more columns",
            ],
            [
              "Tables",
              "Scroll within container or stacked cards",
              "Full table",
            ],
            [
              "Sidebars and filters",
              "Collapsible panel or sheet",
              "Persistent sidebar",
            ],
            [
              "Forms",
              "Single column, full-width inputs",
              "Grouped fields where logical",
            ],
            ["Media", "Cropped or reordered for focus", "Wider compositions"],
          ],
        },
      },
      {
        heading: "Typography and Spacing",
        body: [
          "Scale headings down on small screens while keeping body text comfortably readable. Spacing should also scale: generous whitespace on desktop may need tightening on mobile, but not to the point of crowding. Define these as tokens in your [[/blogs/design-systems-for-teams-that-move-fast|design system]] so the rules hold as the site grows.",
        ],
      },
      {
        heading: "The accessibility floors: reflow and target size",
        body: [
          "Two WCAG 2.2 level AA criteria set hard minimums for responsive work. Success criterion 1.4.10 Reflow reads: \"Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for: Vertical scrolling content at a width equivalent to 320 CSS pixels; Horizontal scrolling content at a height equivalent to 256 CSS pixels. Except for parts of the content which require two-dimensional layout for usage or meaning.\" W3C notes that 320 CSS pixels is equivalent to a 1280 pixel wide viewport at 400% zoom, which is also how to test it.",
          "Success criterion 2.5.8 Target Size (Minimum) reads: \"The size of the target for pointer inputs is at least 24 by 24 CSS pixels, except when\" one of five exceptions applies: spacing (smaller targets with enough space around them), an equivalent control elsewhere on the page, inline targets in a sentence, targets sized by the browser, or where a particular presentation is essential. Platform guidelines for apps recommend larger targets than this minimum, so treat 24 pixels as a floor, not a goal. On touch screens, also make sure nothing essential depends on hover. More in [[/blogs/accessible-ui-ux-design|accessibility in UI/UX design]].",
        ],
      },
      {
        heading: "Planning kit 4: device test matrix",
        body: [
          "Agree this before the build so testing is budgeted and nobody argues about it at launch. The widths are examples of common sizes, not targets; replace them with the widths from your own analytics. StatCounter's mobile resolution data for India in September 2026, for instance, put 360×800 at 15.28% of mobile page views with a long, fragmented tail behind it, which is why ranges matter more than devices.",
        ],
        table: {
          headers: ["Test condition", "Why", "Where to test"],
          rows: [
            ["320 CSS px wide, or 1280px at 400% zoom", "WCAG reflow floor", "Desktop browser zoom and DevTools"],
            ["360 to 393 px phone widths", "The most common phone widths in StatCounter's India data", "Real mid-range Android in Chrome; Samsung Internet if your analytics show it"],
            ["A current iPhone at its native width", "iOS Safari handles viewport height, zoom and fixed elements differently", "Real iPhone in Safari"],
            ["Tablet portrait and landscape (around 768 and 1024 px)", "The in-between layouts where bugs hide", "Real tablet or emulator; add an iPad if your audience uses them"],
            ["1280, 1440 and 1920 px", "Line length, maximum widths, empty space", "Desktop Chrome, Safari, Edge and Firefox"],
            ["200% text size", "Large system text clips labels and buttons", "Phone and desktop settings"],
            ["Landscape phone", "Short heights break sticky headers and modals", "Real phone"],
            ["Slow connection", "Images and layout shift on mobile networks", "Browser network throttling"],
          ],
        },
        callout: {
          type: "tip",
          text: "Regional note: where your audience is mostly on Android phones, as StatCounter's data suggests for India, include at least one low-to-mid range Android device in real-device testing. Where tablets carry a noticeable share, as in the UK data, give iPad portrait and landscape their own row.",
        },
      },
      {
        heading: "Hypothetical example: planning a services site",
        body: [
          "Hypothetical example: a professional services firm is commissioning a new site. Its designer has produced a desktop design and a single mobile version. Before quotes go out, the firm adds the planning kit to the brief. The content priority table shows the service details were going to be cut on mobile, so they become collapsible sections instead. The analytics export shows a large share of visits at 390 to 430 pixels, and the designer's tablet breakpoint sat at 420, so a common phone width would have flipped between two layouts; the breakpoint moves to where the layout actually needs it. Three components get behaviour specs, and the test matrix becomes part of acceptance. Developers can now quote against the same written expectations.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Copying a breakpoint list from a framework or blog without checking the content",
          "Hiding content on mobile to make the layout fit",
          "Designing three artboards and leaving the widths between them to developers",
          "Testing only by resizing a desktop browser",
          "Treating the 24 pixel target minimum as the target",
          "Leaving tables, long words and embedded media to overflow",
          "Ignoring landscape phones and large system text",
        ],
      },
      {
        heading: "When this approach is not the right fit",
        body: [
          "A single responsive design is the right default for most websites, but not for everything. Complex data tools used mostly at a desk, such as admin dashboards, may justify designing the wide layout first and offering a simpler mobile view of the key tasks. Native apps follow platform conventions rather than web breakpoints. And for a small brochure site on a well-built theme, the full kit is more than you need: the content priority table and the test matrix still pay off, but the theme's breakpoints are usually fine.",
          "If your site is already live and failing on phones, start with [[/blogs/how-to-make-a-website-mobile-friendly|our mobile-friendly checklist]] instead; this planning kit is for new builds and redesigns. Our [[/services/website-development|website development service]] page explains how we approach responsive builds.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "web.dev: Responsive web design basics (last updated 12 February 2019; long-standing guidance); Google Search Central: mobile-first indexing best practices (last updated 10 December 2025); MDN: @container; W3C: Understanding SC 1.4.10 Reflow; W3C: Understanding SC 2.5.8 Target Size (Minimum).",
          "Market data: StatCounter: desktop vs mobile vs tablet market share (India, United Arab Emirates, United Kingdom and Australia pages, September 2026) and StatCounter: mobile screen resolution stats, India (September 2026). Third-party page-view data; it changes monthly.",
          "Accessed 15 October 2026.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Responsive design goes well when it is planned in writing: content priority per template, breakpoints set by the content and checked against your analytics, a behaviour spec for each component, and a test matrix everyone has agreed. Hold to the accessibility floors, keep content the same across screen sizes, and test on real phones. A good next step is to fill in the content priority table for your most important template before any layouts are drawn.",
        ],
        cta: {
          title: "Planning a new site or redesign?",
          description:
            "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/website-development|website development]] and [[/services/ui-ux-design|UI/UX design]]. If useful, we can help you write the responsive spec: content priority, breakpoints from your analytics and a device test plan.",
        },
      },
    ],
  },

  // ------------------------------------------------------ ACCESSIBLE DESIGN
  {
    slug: "accessible-ui-ux-design",
    title: "Accessibility in UI/UX Design: A Practical Guide to WCAG",
    excerpt:
      "The accessibility decisions designers own: contrast, typography, focus states, touch targets, color use, forms, motion and annotations for developers, grounded in WCAG 2.2.",
    category: "UI/UX",
    banner: "a11ycheck",
    date: "2026-09-25",
    readingTime: "13 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development"],
    relatedIndustrySlugs: [
      "healthcare-healthtech",
      "education-edtech",
      "fintech",
    ],
    faqs: [
      {
        q: "What is accessible design?",
        a: "Designing products that people with a wide range of abilities, including visual, motor, auditory and cognitive differences, can perceive, understand and use.",
      },
      {
        q: "What is WCAG?",
        a: "The Web Content Accessibility Guidelines published by the W3C. WCAG 2.2 is the current version, organized around being perceivable, operable, understandable and robust, with conformance levels A, AA and AAA.",
      },
      {
        q: "What contrast ratio does WCAG require?",
        a: "At level AA, 4.5:1 for normal text, 3:1 for large text, and 3:1 for user interface components and meaningful graphics.",
      },
      {
        q: "What is the WCAG 2.2 target size requirement?",
        a: "Success criterion 2.5.8 (level AA) requires pointer targets of at least 24 by 24 CSS pixels, with exceptions such as sufficient spacing, inline links and equivalent controls.",
      },
      {
        q: "Is accessibility a design or development responsibility?",
        a: "Both. Designers own decisions such as contrast, focus visibility, target size, reading order and error messaging; developers implement semantics and behavior. Many issues start in design.",
      },
      {
        q: "Does accessible design look worse?",
        a: "No. Clear contrast, readable type and obvious controls improve usability for everyone. Accessibility constrains some choices but rarely limits good visual design.",
      },
      {
        q: "How do designers annotate accessibility for developers?",
        a: "By specifying heading levels, reading and focus order, labels for icons and inputs, alternative text, error messages and states directly in design files.",
      },
      {
        q: "Is accessibility legally required?",
        a: "In many jurisdictions and sectors it is, but requirements vary. Confirm your obligations with qualified legal advice; this guide covers design practice.",
      },
      {
        q: "How is this different from the website accessibility guide?",
        a: "That guide covers implementation: semantic HTML, keyboard support and screen readers. This one covers the design decisions that come before code.",
      },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Accessible UI/UX design means making design decisions that let people of all abilities perceive and use a product. Designers own many of them: meeting WCAG contrast ratios (4.5:1 for normal text, 3:1 for large text and UI components at level AA), visible focus states, adequately sized touch targets, never using color alone to convey meaning, readable typography that scales, clear form labels and errors, restrained motion, and annotated reading order, labels and alt text for developers. Building these in from the start is far cheaper than fixing them later.",
        ],
      },
      {
        heading: "Design's Role in Accessibility",
        body: [
          "Developers implement accessibility, but many barriers are designed in: low-contrast text, invisible focus, tiny tap targets, color-only status indicators, placeholder-only labels. This guide covers the design decisions; the [[/blogs/website-accessibility-guide|website accessibility guide]] covers implementation such as semantic HTML, keyboard support and screen readers.",
        ],
        visual: {
          variant: "grid",
          accent: "blue",
          caption:
            "Contrast, keyboard focus, structure and motion: design decisions that determine accessibility before any code is written.",
        },
      },
      {
        heading: "WCAG in Brief",
        body: [
          "The W3C's WCAG 2.2 organizes requirements under four principles: perceivable, operable, understandable and robust. Level AA is the common target for business products. The design-relevant criteria are summarized below.",
        ],
        table: {
          headers: ["Design area", "WCAG guidance (level AA unless noted)"],
          rows: [
            ["Text contrast", "4.5:1 for normal text; 3:1 for large text"],
            [
              "UI and graphics contrast",
              "3:1 for component boundaries, states and meaningful graphics (1.4.11)",
            ],
            [
              "Use of color",
              "Color isn't the only way information is conveyed (1.4.1, level A)",
            ],
            [
              "Text resize and reflow",
              "Content works when text is enlarged and at narrow widths",
            ],
            [
              "Focus visible",
              "Keyboard focus is visible, and not entirely hidden by sticky elements (2.4.11)",
            ],
            [
              "Target size",
              "At least 24 by 24 CSS pixels, with exceptions (2.5.8)",
            ],
            [
              "Labels and instructions",
              "Inputs have visible labels or instructions",
            ],
            [
              "Error identification",
              "Errors are identified and described in text",
            ],
          ],
        },
      },
      {
        heading: "Color and Contrast",
        body: [
          "Check text and interface contrast as you pick the palette, not after. Pay special attention to placeholder text, disabled-looking elements that are actually active, text over images, and thin fonts. Non-text contrast applies to input borders, icons and focus indicators too. Pair color with text or icons for errors, statuses and charts.",
        ],
      },
      {
        heading: "Typography and Readability",
        body: [
          "Use readable sizes, adequate line height and line length, and clear heading hierarchy. Designs should survive users enlarging text: plan how layouts reflow rather than truncating or overlapping. Avoid long passages in all caps or light weights.",
        ],
      },
      {
        heading: "Focus States and Keyboard Use",
        body: [
          "Design a clear, consistent focus indicator for every interactive element, with enough contrast against its surroundings. Make sure sticky headers, cookie banners and chat widgets don't cover focused elements, which WCAG 2.2 addresses explicitly. Define a logical focus order in your annotations.",
        ],
        cta: {
          title: "Want your designs reviewed for accessibility?",
          description:
            "ZSpace Labs reviews interfaces against WCAG and designs accessible components that meet the standard from the start.",
        },
      },
      {
        heading: "Touch Targets and Interaction",
        body: [
          "Meet WCAG 2.2's 24 by 24 CSS pixel minimum and aim higher on mobile, where Apple and Google recommend around 44 points and 48 dp. Provide alternatives to complex gestures such as dragging or multi-finger swipes, and avoid time limits users can't extend.",
        ],
      },
      {
        heading: "Forms and Errors",
        body: [
          "Use visible labels, not placeholder-only fields. Group related inputs, mark required fields clearly, and write error messages that say what's wrong and how to fix it, placed next to the field. Don't clear the form after an error.",
        ],
      },
      {
        heading: "Motion and Media",
        body: [
          "Keep animation purposeful, avoid flashing content, and design reduced-motion alternatives that respect users' operating system settings. Plan captions for video and transcripts for audio, and ensure media controls are accessible.",
        ],
      },
      {
        heading: "Annotating for Developers",
        body: [],
        checklist: [
          "Heading levels for each screen",
          "Reading order and focus order",
          "Accessible names for icon-only buttons",
          "Alternative text for meaningful images; decorative images marked",
          "Form labels, hints and error messages",
          "States: focus, error, disabled, selected, expanded",
          "Landmarks such as header, navigation, main and footer",
        ],
      },
      {
        heading: "Accessibility in the Design System",
        body: [
          "Bake accessibility into tokens and components: accessible color pairs, focus styles, minimum target sizes and error patterns. Then every screen built from the system inherits it. See [[/blogs/design-systems-for-teams-that-move-fast|design systems]].",
        ],
      },
      {
        heading: "Best Practice vs Legal Requirements",
        body: [
          "This guide describes design best practice aligned with WCAG. Legal requirements differ by jurisdiction and sector, so confirm your obligations with qualified legal advice.",
        ],
        cta: {
          title: "Building an accessible product from scratch?",
          description:
            "Talk to ZSpace Labs about [[/services/ui-ux-design|UI/UX design]] with accessibility built into every component.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Many accessibility barriers are design decisions: contrast, focus, target size, color use, labels and motion. Design them in, annotate them for developers, and encode them in your design system. Then test with assistive technology and real users, as part of [[/blogs/usability-testing|usability testing]].",
          "For related guides, see [[/blogs/ecommerce-accessibility-checklist|ecommerce accessibility checklist]].",
        ],
      },
    ],
  },

  // --------------------------------------------------------------- UX AUDIT
  {
    slug: "ux-audit",
    title: "UX Audit: What It Is, What It Includes and How It Works",
    excerpt:
      "What a UX audit covers: heuristic review, analytics, user testing and accessibility checks, how it differs from a redesign, and how to prioritize fixes.",
    category: "UI/UX",
    banner: "uxauditflow",
    date: "2026-09-25",
    updated: "2026-10-09",
    readingTime: "15 min read",
    relatedServiceSlugs: ["ui-ux-design", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "saas-technology", "d2c-consumer"],
    faqs: [
      {
        q: "What is a UX audit?",
        a: "A structured evaluation of a website or product's user experience that identifies usability problems and opportunities, using heuristic review, analytics, user testing and accessibility checks, and ends with prioritized recommendations.",
      },
      {
        q: "What does a UX audit include?",
        a: "Typically goal and context review, heuristic evaluation, analytics and funnel analysis, user testing or session analysis, accessibility and performance checks, and a prioritized findings report.",
      },
      {
        q: "How long does a UX audit take?",
        a: "It depends on the product's size and whether new user testing is included. A focused audit of key flows is faster than a full product audit.",
      },
      {
        q: "What is a heuristic evaluation?",
        a: "An expert review of an interface against established usability principles, commonly Nielsen's 10 usability heuristics.",
      },
      {
        q: "What is the difference between a UX audit and a CRO audit?",
        a: "A UX audit evaluates usability and experience across the product. A CRO audit focuses on conversion funnels and testing opportunities. They overlap and often run together on commercial sites.",
      },
      {
        q: "When should a business do a UX audit?",
        a: "Before a redesign, when conversion or engagement drops, when support tickets rise, after major feature growth, or when entering a new market.",
      },
      {
        q: "What does a UX audit deliver?",
        a: "A report of issues with evidence and severity, prioritized recommendations, and often annotated screenshots or quick wins that can be implemented immediately.",
      },
      {
        q: "Can I do a UX audit myself?",
        a: "You can run a useful self-audit with a checklist and your analytics, but an external review brings fresh eyes and experience of common patterns.",
      },
      {
        q: "How are UX audit findings prioritized?",
        a: "By severity, the number of users affected, business impact and effort to fix.",
      },
      {
        q: "Is a UX audit the same as a redesign?",
        a: "No. A UX audit diagnoses problems and recommends fixes; a redesign rebuilds the experience. Many audits conclude that targeted changes to key flows, content and components will solve most problems without a redesign. When an audit does recommend a redesign, its findings become the brief, so the new design fixes known issues rather than introducing new ones.",
      },
      {
        q: "What should an Australian business add to a UX audit?",
        a: "Check accessibility against WCAG 2.2, which the Australian Human Rights Commission's guidelines on digital access point to, and review patterns that could raise consumer law issues, such as how prices, fees and subscriptions are presented. New rules on drip pricing and subscription cancellation are reported to commence on 1 July 2027.",
      },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A UX audit is a structured evaluation of a product's user experience that finds usability problems and ranks what to fix. It combines expert heuristic review, analytics and funnel data, observation of real users (through testing or session recordings), and accessibility and performance checks. The output is a prioritized list of findings with evidence and recommendations, so a team can fix the issues that matter most first instead of redesigning everything.",
        ],
      },
      {
        heading: "When a UX Audit Makes Sense",
        body: [
          "Before a redesign (to know what's actually broken), when conversion or engagement drops, when support tickets about \"how do I\" increase, after years of features added without a system, or before scaling traffic. An audit often shows that targeted fixes are enough and a full [[/blogs/website-redesign-vs-rebuild|redesign or rebuild]] isn't needed.",
        ],
      },
      {
        heading: "The Audit Process",
        body: [
          "A thorough audit moves through discovery, heuristic review, analytics, user testing, prioritization and recommendations. For a detailed walkthrough of each step, see [[/blogs/how-to-conduct-a-ux-audit|how to conduct a UX audit]].",
        ],
        visual: {
          variant: "rows",
          accent: "orange",
          caption:
            "Discover, heuristic review, analytics, user testing, prioritize, recommend.",
        },
        table: {
          headers: ["Step", "What happens", "Evidence produced"],
          rows: [
            [
              "Discover",
              "Goals, audiences, key tasks and metrics agreed",
              "Scope and success criteria",
            ],
            [
              "Heuristic review",
              "Expert evaluation against usability principles",
              "Issues with severity ratings",
            ],
            [
              "Analytics",
              "Funnels, drop-offs, search, device splits",
              "Where problems occur",
            ],
            [
              "User testing",
              "Real users attempt key tasks, or session review",
              "Why problems occur",
            ],
            [
              "Accessibility and performance",
              "WCAG checks, Core Web Vitals",
              "Barriers and slow pages",
            ],
            [
              "Prioritize and recommend",
              "Rank by severity, reach, impact, effort",
              "Action plan",
            ],
          ],
        },
      },
      {
        heading: "Heuristic Evaluation",
        body: [
          "Evaluators review key flows against Nielsen's 10 usability heuristics: status visibility, match with real-world language, user control, consistency, error prevention, recognition over recall, flexibility, minimalist design, error recovery and help. Each issue gets a severity rating. Heuristic review is fast but relies on expertise, so it's strongest combined with data. See [[/blogs/ux-heuristic-evaluation|UX heuristic evaluation]] for the full method.",
        ],
      },
      {
        heading: "Analytics and Behavioral Data",
        body: [
          "Funnels show where users drop off, search logs show what they can't find, device splits reveal mobile-specific issues, and heatmaps or recordings show behavior on key pages. Data tells you where to look; it rarely explains why. See the [[/blogs/shopify-heatmap-analysis|heatmap analysis guide]] for using behavioral tools carefully.",
        ],
      },
      {
        heading: "User Testing",
        body: [
          "Watching real users attempt key tasks explains the problems the data reveals. Even a handful of sessions typically surfaces the most serious issues. See [[/blogs/usability-testing|usability testing]].",
        ],
        cta: {
          title: "Want an independent UX audit of your product or site?",
          description:
            "ZSpace Labs combines heuristic review, analytics and user testing, and delivers findings prioritized by impact and effort.",
        },
      },
      {
        heading: "Website UX Audit Checklist",
        body: [
          "A practical checklist for reviewing a website or product. Use it to structure a self-audit or brief an external one.",
        ],
        checklist: [
          "Value proposition clear within the first screen",
          "Navigation labels in users' language; key pages reachable in few steps",
          "Search returns relevant results; no dead-end zero-result pages",
          "Clear primary action on each key page",
          "Forms ask only for what's needed, with visible labels and helpful errors",
          "Empty, loading, error and success states designed",
          "Consistent components, terminology and behavior",
          "Mobile layout usable one-handed with adequate touch targets",
          "Text and UI contrast meet WCAG AA; focus is visible",
          "Pages load quickly and don't shift while loading",
          "Trust signals, policies and contact information easy to find",
          "Analytics track the key tasks, not just page views",
        ],
      },
      {
        heading: "Accessibility and Performance Checks",
        body: [
          "Include a WCAG-based review, covered in [[/blogs/accessible-ui-ux-design|accessibility in UI/UX design]], and Core Web Vitals, covered in [[/blogs/website-performance-optimization|website performance optimization]]. Slow or inaccessible pages are UX problems even when the design looks fine.",
          "Check the WCAG 2.2 criteria that most often affect key journeys: target size for buttons and links, focus that is not hidden behind sticky headers, accessible authentication on sign-in, and not asking users to re-enter information they have already provided. Pair automated checks with manual keyboard and screen reader testing on the main tasks.",
        ],
      },
      {
        heading: "Prioritizing Findings",
        body: [],
        table: {
          headers: ["Factor", "Question"],
          rows: [
            ["Severity", "Does it block the task, slow it, or just irritate?"],
            ["Reach", "How many users or sessions encounter it?"],
            [
              "Business impact",
              "Does it affect conversion, retention or support cost?",
            ],
            ["Effort", "How hard is it to fix?"],
            ["Confidence", "How strong is the evidence?"],
          ],
        },
      },
      {
        heading: "From Findings to an Implementation Plan",
        body: [
          "An audit only creates value when fixes ship. Turn the prioritized findings into a plan the team can act on:",
        ],
        checklist: [
          "Group findings by journey and component, so one change fixes several issues.",
          "Separate quick fixes (copy, labels, error messages, small layout changes) from design work and from engineering work.",
          "Write each recommendation as a testable change with an owner and a success measure.",
          "Decide which changes to A/B test and which to ship directly, based on risk and traffic.",
          "Schedule a re-test of the key tasks after fixes ship.",
        ],
      },
      {
        heading: "UX Audit vs Full Redesign",
        body: [
          "A UX audit is a diagnosis; a redesign is a treatment, and often not the right one. Redesigns are expensive, reset learned behavior, and can introduce new problems while fixing old ones. An audit tells you whether the problems are concentrated in a few flows and components, which targeted fixes can solve, or spread through the structure, navigation and design system, which may justify a redesign.",
        ],
        table: {
          headers: ["", "UX audit", "Full redesign"],
          rows: [
            ["Purpose", "Find and rank problems", "Rebuild the experience"],
            ["Output", "Evidence-based findings and recommendations", "New designs, often new build"],
            ["Typical scope", "Key journeys and components", "Whole site or product"],
            ["Risk", "Low; changes can be incremental", "Higher; many changes at once"],
            ["When it fits", "Most situations, and before any redesign", "Structural problems, rebrand, platform change"],
          ],
        },
      },
      {
        heading: "Auditing for Australian Users",
        body: [
          "The audit method is the same everywhere, but a few local checks are worth adding for sites serving Australian customers.",
        ],
        checklist: [
          "**Accessibility:** the Australian Human Rights Commission's guidelines on equal access to digital goods and services, issued under the Disability Discrimination Act, point organisations to WCAG. See [[/blogs/website-accessibility-australia|website accessibility in Australia]].",
          "**Pricing and fees:** check that prices, delivery costs and fees are clear early. Card surcharges on eftpos, Visa and Mastercard were removed from 1 October 2026 under the Reserve Bank's decision, and a drip pricing provision is reported to commence on 1 July 2027.",
          "**Subscriptions:** check that cancellation is easy to find and complete online; the same reforms reportedly require online cancellation for online sign-ups. See [[/blogs/subscription-ecommerce-australia|subscription ecommerce in Australia]].",
          "**Reviews and trust signals:** reviews shown on the site should be genuine and fairly selected, in line with ACCC guidance on online reviews.",
          "**Local details:** delivery estimates for regional areas, time zones in booking flows, and Australian address and phone formats in forms.",
        ],
        callout: {
          type: "note",
          text: "Consumer law points here are general information, not legal advice. For checkout-specific checks, see [[/blogs/ecommerce-conversion-optimization-australia|ecommerce conversion optimisation in Australia]].",
        },
      },
      {
        heading: "UX Audit vs CRO Audit",
        body: [
          "A UX audit evaluates usability across the product. A CRO audit focuses on conversion funnels and test opportunities. On commercial sites they overlap and work best together; see ZSpace Labs' [[/blogs/shopify-cro-audit|CRO audit framework]] for the conversion-focused version.",
        ],
      },
      {
        heading: "Common Audit Mistakes",
        body: [],
        checklist: [
          "Opinion-only reviews with no data or user evidence",
          "Long, unprioritized lists of issues",
          "Auditing everything instead of key tasks",
          "Ignoring mobile, accessibility or performance",
          "No follow-up to measure whether fixes worked",
        ],
        cta: {
          title: "Ready to find out what's holding your product back?",
          description:
            "Talk to ZSpace Labs about a [[/services/ui-ux-design|UX audit]] paired with [[/services/cro-audit|conversion analysis]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A good UX audit combines expert review, data and real user evidence, and turns them into a short list of prioritized fixes. It's often the most cost-effective first step before any redesign. For the step-by-step method, see [[/blogs/how-to-conduct-a-ux-audit|how to conduct a UX audit]] and [[/blogs/ux-heuristic-evaluation|heuristic evaluation]]; for the wider discipline, see the [[/blogs/ui-ux-design-guide|UI/UX design guide]].",
        ],
      },
    ],
  },

  // -------------------------------------------------------- USABILITY TESTING
  {
    slug: "usability-testing",
    title: "Usability Testing: How to Test a Website or Digital Product",
    excerpt:
      "How to plan, script, run and analyse usability tests, and how to benchmark your current site before a redesign so the re-test is a fair comparison.",
    category: "UI/UX",
    banner: "usabilityflow",
    date: "2026-09-25",
    updated: "2026-10-14",
    readingTime: "14 min read",
    relatedServiceSlugs: ["ui-ux-design", "cro-audit"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce", "fintech"],
    faqs: [
      {
        q: "What is usability testing?",
        a: "Observing representative users as they attempt realistic tasks with a website, app or prototype, to find where the design causes confusion, errors or delay.",
      },
      {
        q: "How many users do I need for a usability test?",
        a: "For qualitative testing, Nielsen Norman Group recommends around five users per round for a given user group, and running several small rounds rather than one large one. For quantitative benchmarks, NN/g suggests around 20 users or more.",
      },
      {
        q: "What's the difference between moderated and unmoderated testing?",
        a: "In moderated tests a facilitator guides the session live and can ask follow-up questions. Unmoderated tests are completed by participants alone, usually through a testing platform, and are faster to scale.",
      },
      {
        q: "Is remote usability testing as good as in-person testing?",
        a: "For most websites and apps, remote testing works well and lets you reach participants in their own environment. In-person testing is better for physical products, specialist equipment, complex setups or when you need to see body language and device handling closely.",
      },
      {
        q: "Can you test a prototype?",
        a: "Yes. Testing prototypes before development is one of the most valuable uses of usability testing.",
      },
      {
        q: "What is the think-aloud method?",
        a: "Asking participants to say what they're thinking as they work through tasks, which reveals their expectations and confusion.",
      },
      {
        q: "What should a usability test task look like?",
        a: 'A realistic scenario with a goal, such as "Find a waterproof jacket in your size under a set budget and add it to your cart", without telling users where to click.',
      },
      {
        q: "What metrics come from usability testing?",
        a: "Task success, time on task, errors, and post-task and post-test ratings such as the Single Ease Question and System Usability Scale, alongside qualitative observations. With small samples, focus on the observations.",
      },
      {
        q: "What is a usability test script?",
        a: "A written guide for the session: introduction and consent, warm-up questions, task scenarios in order, follow-up questions and a wrap-up, so every participant gets the same experience.",
      },
      {
        q: "How is usability testing different from A/B testing?",
        a: "Usability testing explains why users struggle with small samples. A/B testing measures which version performs better with large samples, but not why.",
      },
      {
        q: "Is usability testing the same as user research?",
        a: "It's one user research method, focused on evaluating a design rather than discovering needs.",
      },
      {
        q: "Should we usability test before a redesign?",
        a: "Yes, if the redesign is a real investment. Testing the current site first shows what is broken and what already works, so the new design keeps the good parts. If you also want to show the new version is better, record a baseline with fixed tasks now, because you cannot measure the old site once it has been replaced.",
      },
      {
        q: "How soon after launching a redesign should we re-test?",
        a: "Not on launch day. Regular users often dislike change at first, which depresses early scores. Nielsen Norman Group suggests waiting about 2 to 3 weeks for products used daily and 4 to 5 weeks for products used once or twice a week. New-visitor websites can be re-tested sooner, with participants who have not seen either version.",
      },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Usability testing means watching representative users try to complete realistic tasks with your website, app or prototype, to find where the design confuses or slows them. Decide what you need to learn and how you'll test, recruit participants who match your users, and write and pilot a script with scenario-based tasks. Run sessions while participants think aloud, capture observations and a few simple metrics, and analyze issues by severity and frequency. Report the findings, fix them and test again. Small, frequent rounds of about five users per user group, as Nielsen Norman Group recommends, find most problems efficiently.",
          "Before a redesign, test the current site first. A small qualitative round shows what to fix and what to keep. If you need to prove the new version is better, record a baseline now with a frozen set of tasks, at least 20 participants and 2 to 4 metrics, then repeat exactly the same test after launch. The section on testing before a redesign, after Step 7, gives a test plan, a script and a freeze sheet.",
        ],
      },
      {
        heading: "What Usability Testing Is and Why It Matters",
        body: [
          "Usability testing evaluates a design by observing people use it. It doesn't ask whether people like a design; it shows whether they can use it to do what they came to do. Teams know their product too well to see it the way new users do, and watching a few people struggle with a flow is often more persuasive than any debate.",
          "It works at every stage: on sketches and [[/blogs/wireframing-vs-prototyping|prototypes]] before development, on live products before a redesign, and as part of a [[/blogs/how-to-conduct-a-ux-audit|UX audit]]. The earlier you test, the cheaper the problems are to fix.",
        ],
      },
      {
        heading: "Step 1: Plan the Study",
        body: [
          "Write down what you need to learn, which flows to test (such as signup, checkout or search) and which decisions the results will inform. Define the participant profile, the devices, the method and the success criteria for each task. A one-page test plan keeps the team aligned and stops the study growing into everything at once.",
        ],
      },
      {
        heading: "Moderated vs Unmoderated",
        body: [],
        table: {
          headers: ["", "Moderated", "Unmoderated"],
          rows: [
            ["Facilitator", "Present live", "None; tasks completed alone"],
            [
              "Depth",
              "Can probe and follow up",
              "Limited to what participants say",
            ],
            [
              "Speed and scale",
              "Slower, fewer sessions",
              "Faster, easier to scale",
            ],
            [
              "Best for",
              "Complex flows, early prototypes",
              "Specific tasks, quick checks",
            ],
          ],
        },
      },
      {
        heading: "Remote vs In-Person",
        body: [],
        table: {
          headers: ["", "Remote", "In-person"],
          rows: [
            [
              "Environment",
              "Participant's own device and setting",
              "Lab, office or on location",
            ],
            ["Reach", "Participants anywhere", "Limited to one location"],
            [
              "Observation",
              "Screen, voice and often face",
              "Full view of device handling and body language",
            ],
            [
              "Best for",
              "Websites and apps, distributed users",
              "Physical or specialist products, complex setups",
            ],
          ],
        },
      },
      {
        heading: "Step 2: Recruit Participants",
        body: [
          "Recruit people who match your real users' behaviours and context, not just demographics: people who have bought this kind of product online, or who do this kind of work. Use a short screener questionnaire, and recruit from your customer list, a recruiting panel or a testing platform. Nielsen Norman Group's guidance is that about five participants per round, per distinct user group, reveals most usability problems, and that several small rounds beat one large one. Avoid testing with colleagues, and offer fair incentives.",
        ],
      },
      {
        heading: "Step 3: Write Tasks and the Test Script",
        body: [
          "Write realistic scenarios with a goal, not instructions. “You need a gift for a friend under a set budget; find something suitable and add it to your cart” works; “Click the Gifts menu” doesn't. Avoid words that appear in the interface, which turn tasks into word-matching exercises.",
          "Put the tasks into a script so every session is consistent:",
        ],
        checklist: [
          "Welcome, purpose and consent to record",
          "Reassurance: “We're testing the design, not you”",
          "Warm-up questions about the participant's context",
          "Task scenarios in a natural order, each with a clear end point",
          "A post-task question, such as how easy the task was",
          "Follow-up questions and a wrap-up",
        ],
      },
      {
        heading: "Pilot the Test",
        body: [
          "Run one pilot session with a colleague or friendly participant before the real ones. Pilots catch confusing task wording, broken prototype links, tasks that take far longer than planned and recording problems, and they cost far less than a wasted session.",
        ],
        cta: {
          title: "Want your key flows tested with real users?",
          description:
            "ZSpace Labs plans, runs and analyzes usability tests, and turns findings into concrete design changes.",
        },
      },
      {
        heading: "Step 4: Run Sessions and Observe",
        body: [
          "Ask participants to think aloud. Stay neutral, resist helping, and answer questions with questions (“What would you expect to happen?”). Let them struggle long enough to understand the problem, then move on. Record sessions with consent, and invite teammates to observe live; watching together builds shared understanding faster than any report.",
          "Observers should note what participants do, not what they would have done: where they hesitate, what they misread, what they try first, errors and recoveries, and direct quotes.",
        ],
      },
      {
        heading: "Qualitative Findings",
        body: [
          "Most of the value of small-sample testing is qualitative: the reasons behind behaviour. Capture each observation with the task, the participant, what happened and, where possible, why. Look for patterns across participants rather than acting on one person's opinion, and note what works well too, so it isn't lost in the redesign.",
        ],
      },
      {
        heading: "Common Usability Metrics",
        body: [
          "Simple measures help compare tasks and track change over time. For choosing which experience metrics to track over time, see [[/blogs/ux-metrics-beyond-conversion-rate|UX metrics that matter beyond conversion rate]].",
        ],
        table: {
          headers: ["Metric", "What it measures"],
          rows: [
            [
              "Task success",
              "Whether participants completed the task, fully, partly or not at all",
            ],
            ["Time on task", "How long successful attempts took"],
            ["Errors", "Wrong paths, mistakes and recoveries"],
            [
              "Single Ease Question (SEQ)",
              "Perceived difficulty of each task, asked after the task",
            ],
            [
              "System Usability Scale (SUS)",
              "Overall perceived usability, a 10-item questionnaire after the test",
            ],
          ],
        },
      },
      {
        heading: "Quantitative Measurements and Sample Size",
        body: [
          "Numbers from five participants are not statistics. Report them as observations (“3 of 5 participants didn't find the delivery options”) rather than percentages, and don't use them to claim one design is better than another. When you need reliable benchmarks, Nielsen Norman Group recommends at least 20 users for quantitative usability studies, and more if you need tighter confidence intervals. NN/g's article on measuring perceived usability explains when to use SEQ and SUS.",
        ],
      },
      {
        heading: "Step 5: Analyze the Results",
        body: [
          "Soon after the sessions, list every issue with where it happened, how many participants hit it and its severity: blocking, slowing or minor. Cluster related observations, separate symptoms from causes and rate each issue on a shared scale, such as the 0 to 4 severity scale. Then prioritize by severity, frequency and the importance of the task.",
        ],
      },
      {
        heading: "Step 6: Report and Share",
        body: [
          "Keep reports short and decision-focused: the goals, who took part, the top findings with evidence and severity, short video clips of key moments, what worked well and recommended changes. A 20-minute readout with clips often gets more action than a long document. Keep the full issue list in the team's backlog, not only in a slide deck.",
        ],
      },
      {
        heading: "Step 7: Iterate and Retest",
        body: [
          "Fix the most important problems, update the design and test again, ideally with new participants on the same tasks. Iteration is where testing pays off: each round confirms fixes and uncovers the next layer of problems. Build small, regular rounds into the [[/blogs/ux-design-process|UX design process]] rather than one big study. A before-and-after comparison of a whole redesign is different: it needs the stricter protocol in the next section.",
        ],
      },
      {
        heading: "Usability Testing Before a Redesign",
        body: [
          "A redesign is usually a large spend, and it is often decided on opinion: the site looks dated, a competitor has relaunched, or a new stakeholder dislikes the navigation. Testing the current site first turns that opinion into evidence. Hoa Loranger at Nielsen Norman Group puts it plainly: “Your old site is the best prototype of your new site”. It already has real content, real flows and real users, so watching people use it shows what the redesign must fix and, just as importantly, what it must not break.",
          "Before you test, decide which of three questions you are answering. They need different methods and different sample sizes, and mixing them is the most common reason pre-redesign research produces numbers nobody trusts.",
        ],
        table: {
          headers: ["", "Learn", "Compare", "Prove"],
          rows: [
            ["Question it answers", "What is broken on the current site, and why?", "How do we perform against one or two competitors on the same tasks?", "Is the new design measurably better than the old one?"],
            ["Decision it supports", "What the redesign brief must fix and keep", "Where to match, differ or ignore the competition", "Whether the redesign worked, and whether to keep iterating"],
            ["Method", "Qualitative, moderated, think-aloud", "Qualitative, same tasks on your site and 1 to 2 competitor sites, order rotated", "Quantitative benchmark, often unmoderated, repeated after launch"],
            ["Participants", "About 5 per distinct user group", "Small qualitative samples, as in Learn; at most 3 sites per participant", "At least 20 per round, the same profile both times"],
            ["Main outputs", "Issues by severity, quotes, what works well", "Patterns across sites, ideas worth borrowing", "2 to 4 metrics, such as task success, time on task, SEQ and SUS"],
            ["Effort", "Lowest: days, not weeks", "Low to moderate: NN/g notes a study can often run in about two days", "Highest: two full rounds, separated by weeks"],
            ["Skip it when", "You already have recent findings for the same flows", "Competitors serve a different audience or task", "Traffic or budget cannot support 20+ participants twice; rely on Learn instead"],
          ],
        },
        callout: {
          type: "note",
          text: "Five-user rounds find problems; they cannot prove a redesign is better. If someone needs a before-and-after number, plan the Prove column from the start. You cannot benchmark the old site once it has been replaced. For how much research to do before any build starts, see [[/blogs/how-much-ux-design-before-development|how much UX design to do before development]].",
        },
      },
      {
        heading: "A Pre-Redesign Test Script",
        body: [
          "This script works for Learn and Prove rounds. The key rule is that every task must make sense, word for word, on both the old site and the new one, so write tasks around user goals rather than current page names or menu labels.",
        ],
        checklist: [
          "**Introduction and consent (2 minutes):** purpose, recording consent, “we're testing the site, not you”, and that there are no wrong answers.",
          "**Context questions (3 minutes):** how they normally do this task, what they use today, how often they visit the site.",
          "**4 to 6 top tasks:** chosen from the tasks that matter most to users and the business, such as finding a service, comparing options, getting a quote or completing a purchase. Give each task a written success criterion before the first session.",
          "**After each task:** the Single Ease Question (“Overall, how difficult or easy was this task?” on a 1 to 7 scale), then one open question: “What, if anything, got in your way?”",
          "**The keep question:** “If this site changed tomorrow, what would you miss?” This protects the parts of the current design that already work.",
          "**Competitor tasks (Compare rounds only):** the same tasks on one or two competitor sites, with the order of sites rotated between participants.",
          "**System Usability Scale (Prove rounds only):** the 10-item questionnaire at the end, unchanged in wording.",
          "**Wrap-up:** anything they expected to find but didn't, then thanks and the incentive.",
        ],
      },
      {
        heading: "The Freeze Sheet: Keeping the Re-Test Fair",
        body: [
          "A before-and-after comparison only means something if the only thing that changed is the design. Nielsen Norman Group's benchmarking process (Alita Kendrick, 2020) is to choose what to measure, decide how, collect a baseline, redesign, then collect again under the same methodology before interpreting the results. A freeze sheet is a one-page record of that methodology, filled in at the baseline and copied unchanged for the re-test.",
        ],
        table: {
          headers: ["Item to freeze", "What to record at the baseline"],
          rows: [
            ["Task wording", "The exact text of each task, including any scenario details such as budget or location"],
            ["Success criteria", "What counts as success, partial success and failure for each task, written before testing"],
            ["Metrics", "The 2 to 4 metrics you will compare, and how each is calculated (for example, time on task for successful attempts only)"],
            ["Questionnaires", "SEQ and SUS wording and scale, unchanged"],
            ["Participants", "Screener criteria, user groups, number per group, and that re-test participants have not seen either version in a test"],
            ["Devices and setting", "Device types, browsers, screen sizes, remote or in person, moderated or unmoderated"],
            ["Tool and setup", "Testing platform, starting URL or start screen, account state (logged in or out), test data"],
            ["Task order", "Fixed or rotated, and how"],
            ["Timing", "Baseline date, launch date and planned re-test date"],
          ],
        },
        callout: {
          type: "tip",
          text: "If something has to change between rounds, such as a task that no longer exists in the new design, record it on the freeze sheet and exclude that task from the comparison rather than quietly rewording it.",
        },
      },
      {
        heading: "When to Re-Test and How to Read the Result",
        body: [
          "Do not re-test on launch day. Kendrick notes that users often dislike change at first, so early scores from returning users can understate a good redesign. Her guidance is about 2 to 3 weeks after launch for products people use daily, and 4 to 5 weeks for products used once or twice a week. For a marketing website mostly used by first-time visitors, recruit participants who have not used either version and the wait matters less.",
          "Keep the comparison to the 2 to 4 metrics you chose, and report them with confidence intervals rather than single numbers. For SUS, MeasuringU's Jeff Sauro reports an average score of 68 across around 500 studies, so a score above 68 is above average. That gives a rough reference point, but the comparison that matters is your old site against your new one under the same conditions. If the intervals overlap heavily, the honest conclusion is that the test did not show a difference, not that the redesign failed.",
          "Usability metrics show whether people can complete tasks more easily. They do not show whether the redesign paid for itself. Enquiries, sales and retention are affected by traffic, season and pricing as well as design, so treat business metrics as a separate analysis.",
          "**Hypothetical example:** a training provider plans a new website. A five-person Learn round shows that people cannot find course dates and that the existing course comparison table is well liked. The redesign brief keeps the table and fixes the dates. The team also runs a 24-person unmoderated baseline on four frozen tasks with SEQ and SUS, then repeats it five weeks after launch with new participants. No results are implied here; the example shows the sequence.",
          "This level of rigour is not always worth it. For a small site rebuilt mainly for technical reasons, a Learn round and a launch-day check of key tasks is usually enough. Whether to redesign, rebuild or improve in stages is a separate decision, covered in [[/blogs/website-redesign-vs-rebuild|website redesign vs rebuild]].",
        ],
      },
      {
        heading: "Testing on Mobile",
        body: [
          "Test mobile experiences on phones, not desktop emulators. For remote tests, use tools that record the phone screen; in person, use a device camera or screen mirroring. Include tasks that involve typing, forms and switching apps, where mobile problems concentrate. See [[/blogs/mobile-app-testing|mobile app testing]] and [[/blogs/mobile-ecommerce-ux|mobile ecommerce UX]].",
        ],
      },
      {
        heading: "Usability Testing vs A/B Testing",
        body: [
          "Usability tests explain why users struggle, using small samples. A/B tests measure which version performs better at scale, but not why. They complement each other: test to find and fix problems, then A/B test to measure impact where traffic allows. See [[/blogs/shopify-ab-testing|A/B testing]].",
        ],
      },
      {
        heading: "Usability Testing vs Heuristic Evaluation",
        body: [
          "A [[/blogs/ux-heuristic-evaluation|heuristic evaluation]] uses experts to predict problems quickly against usability principles. Usability testing confirms which problems real users actually hit. Running a heuristic review first clears obvious issues so test sessions uncover deeper ones.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Leading tasks that tell users where to click",
          "Recruiting people who don't match your users",
          "Skipping the pilot session",
          "Helping participants when they struggle",
          "Testing only at the end, when changes are expensive",
          "Treating one participant's opinion as a finding",
          "Reporting percentages from five participants",
          "Reports that sit unread instead of changing the design",
        ],
        cta: {
          title: "Want usability testing built into your process?",
          description:
            "Talk to ZSpace Labs about [[/services/ui-ux-design|UI/UX design]] with regular testing, not one-off studies.",
        },
      },
      {
        heading: "Sources",
        body: [
          "Alita Kendrick, Nielsen Norman Group: 7 Steps to Benchmark Your Product's UX (13 September 2020).",
          "Hoa Loranger, Nielsen Norman Group: competitive usability testing before a redesign (7 December 2014).",
          "Jakob Nielsen, Nielsen Norman Group: Why You Only Need to Test with 5 Users.",
          "Jakob Nielsen, Nielsen Norman Group: How Many Test Users in a Usability Study? (3 June 2012).",
          "Jeff Sauro, MeasuringU: Measuring Usability with the System Usability Scale (SUS) (3 February 2011).",
          "Accessed 14 October 2026.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Usability testing is the fastest way to see a design through users' eyes. Plan clearly, recruit the right people, write realistic tasks, pilot your script, observe without helping, analyse by severity and fix what you find, then test again. It's one of the core methods in [[/blogs/user-research-methods|user research]].",
          "If a redesign is coming, the next step is small: pick your top four to six tasks, write them so they will still make sense on the new design, and run a Learn round on the current site. Decide at the same time whether you will need a Prove benchmark, because the baseline has to be collected before anything changes.",
        ],
      },
    ],
  },

  // ---------------------------------------------------------- DESIGN HANDOFF
  {
    slug: "design-handoff",
    title: "Design Handoff: What a Designer Should Deliver Before Developers Start Building",
    seoTitle: "Design Handoff: What Designers Should Deliver to Developers",
    excerpt:
      "What a UI/UX designer should deliver before development, by project type: a deliverables matrix, a handoff sign-off gate, Figma Dev Mode facts and design QA.",
    category: "UI/UX",
    banner: "handoffflow",
    sceneKind: "design",
    bannerAlt:
      "A design handoff flow: approved design files, a deliverables check by project type, a developer walkthrough and a sign-off gate before the build starts, with design QA running during development",
    date: "2026-09-25",
    updated: "2026-10-15",
    readingTime: "14 min read",
    relatedServiceSlugs: [
      "ui-ux-design",
      "website-development",
      "mobile-app-development",
    ],
    relatedIndustrySlugs: ["saas-technology", "fintech", "ecommerce"],
    relatedSlugs: [
      "how-much-ux-design-before-development",
      "design-systems-for-teams-that-move-fast",
      "responsive-ui-design",
    ],
    faqs: [
      {
        q: "What is design handoff?",
        a: "The process of transferring design decisions to developers so they can build the product as intended, including specifications, assets, component details, states and behaviour. It works best as ongoing collaboration rather than a single transfer.",
      },
      {
        q: "What should a design handoff include?",
        a: "Final screens with all states, responsive behaviour, component specifications, design tokens, typography and spacing, interaction and animation notes, accessibility annotations, assets, real content examples and edge cases. What else is required depends on the project: a marketing site needs a CMS content model, a Shopify store needs a map of theme sections and blocks, and a mobile app needs platform conventions and OS-level states.",
      },
      {
        q: "What are design tokens?",
        a: "Named values for design decisions such as colours, typography, spacing and radii, shared between design and code so both use the same source of truth.",
      },
      {
        q: "What is design QA?",
        a: "Reviewing the implemented product against the design before release, checking layout, states, behaviour and accessibility, and logging differences to fix.",
      },
      {
        q: "How do you hand off Figma designs to developers?",
        a: "Separate final designs from explorations, mark frames ready for development, build with components and variables that map to code, annotate behaviour, and walk developers through the flows. Figma's Dev Mode supports inspection, annotations and change comparison. At the time of writing, Figma lists it on the Professional, Education, Organization, Government and Enterprise plans, for people with a Full or Dev seat.",
      },
      {
        q: "Should designers and developers work together earlier?",
        a: "Yes. Involving developers during exploration catches feasibility issues early and makes handoff a continuation rather than a surprise.",
      },
      {
        q: "Why do built products look different from designs?",
        a: "Common causes are missing states, undefined responsive behaviour, one-off styles outside the design system, unclear specs, late design changes and no design review during development.",
      },
      {
        q: "How should design changes be handled after handoff?",
        a: "Version approved designs, communicate changes explicitly with what changed and why, update the related tickets, and avoid silently editing frames developers are already building from.",
      },
      {
        q: "What questions do developers usually ask at handoff?",
        a: "What happens on error, with long or missing content, on slow networks, between breakpoints, for users without permission, and which existing components to reuse.",
      },
      {
        q: "What tools help with handoff?",
        a: "Design tools with inspect or developer modes, shared component libraries, token pipelines, component workshops such as Storybook and issue trackers. The practices matter more than the specific tools.",
      },
      {
        q: "Is a definition of ready part of Scrum?",
        a: "No. The Scrum Guide does not define one. It says only that items which can be done within one sprint are deemed ready for selection in Sprint Planning. A definition of ready is a convention many teams adopt, so agree your own version rather than treating it as a fixed standard.",
      },
      {
        q: "What should I own when the design work is finished?",
        a: "The editable source files (not just exports or a view link), the component library and any token files, the prototype, and licences for the fonts, icons and stock imagery used. Confirm in the contract that these transfer to you, and that files sit in a workspace your business controls.",
      },
    ],
    content: [
      {
        heading: "What should a designer deliver before development starts?",
        body: [
          "**Before developers start, a designer should deliver approved screens for every template with all their states, responsive rules, components and tokens that map to code, interaction and accessibility notes, real content, exported assets and agreed design QA criteria. What else is needed depends on the project: a CMS content model for a marketing site, a sections and blocks map for a Shopify store, flows and permissions for a SaaS app, and platform conventions for a mobile app.** The matrix below sets this out by project type.",
          "Two checks sit before the build. The first is whether the design is ready to build at all: are the core flows decided, tested and specified? That is covered by the [[/blogs/how-much-ux-design-before-development|ready-to-build checklist in our guide to design depth]], and this page does not repeat it. The second, covered here, is whether the handoff itself is complete: files marked, walkthrough held, questions owned and acceptance criteria agreed.",
          "This guide is for founders and product owners paying for design, often with a separate designer and development team, and for designers and developers who want a shared standard.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Deliverables differ by project type; use the matrix to check what your project needs.",
          "Every screen needs its states, not just the happy path.",
          "Responsive behaviour must be written down, not left to three artboards.",
          "Run the ready-to-build checklist first, then the handoff sign-off gate.",
          "Make sure you own the editable files, libraries and licences at the end.",
          "Handoff is a phase: design QA continues until release.",
        ],
      },
      {
        heading: "Deliverables by project type",
        body: [
          "This matrix is our working framework, not an industry standard. Read down the column for your project. \"Required\" means developers will guess without it; \"Recommended\" means it saves real time or rework; \"Optional\" means useful only in some cases.",
        ],
        table: {
          headers: ["Deliverable", "Marketing website", "Shopify store", "SaaS web app", "Mobile app"],
          rows: [
            ["Sitemap or navigation map", "Required", "Required (menus and collection structure)", "Recommended (app navigation)", "Recommended (tab and stack structure)"],
            ["User flows, including error and alternative paths", "Recommended (enquiry or booking)", "Required (product to cart to checkout, account)", "Required", "Required"],
            ["High-fidelity screens for every template", "Required", "Required (home, collection, product, cart, content pages)", "Required", "Required"],
            ["States matrix", "Recommended (forms, navigation, search)", "Required (variants, sold out, empty cart, errors)", "Required (empty, loading, error, permissions)", "Required, plus permission prompts, offline and push"],
            ["Responsive or platform specification", "Required", "Required, mobile first", "Required", "Required (iOS and Android conventions, text scaling)"],
            ["Component library and tokens", "Recommended", "Recommended (mapped to theme sections and blocks)", "Required", "Required"],
            ["Clickable prototype", "Optional", "Optional", "Recommended for core flows", "Recommended for core flows"],
            ["Copy deck and real content", "Required", "Required (real product data, long titles, many variants)", "Recommended", "Recommended"],
            ["Content model", "Required (content types and which fields editors can change)", "Required (sections, blocks and any metafields)", "Optional", "Optional (if content comes from a CMS)"],
            ["Accessibility annotations", "Required", "Required", "Required", "Required"],
            ["Analytics event list", "Recommended", "Recommended (ecommerce events)", "Required", "Required"],
            ["Asset pack with licences", "Required", "Required", "Required", "Required (app icons and store assets)"],
            ["Design QA acceptance criteria", "Required", "Required", "Required", "Required"],
          ],
        },
      },
      {
        heading: "Reading the matrix for your project",
        body: [
          "**Marketing websites** fail most often on the content model. If the design does not say which parts editors can change, how long a heading can be, and what happens when an image is missing, the CMS gets built around the launch content and breaks the first time someone edits it.",
          "**Shopify stores** need the design expressed in Shopify's terms. Map each design block to a theme section or block so merchants can rearrange pages later, and show where product data such as size guides or specifications comes from, whether product fields or metafields. Design product pages with real catalogue data: the longest title, the product with the most variants, and the sold-out state.",
          "**SaaS web apps** live or die on states and permissions. A dashboard designed only with healthy sample data says nothing about the first-run empty state, a failed import or a user without admin rights.",
          "**Mobile apps** need platform decisions written down: where iOS and Android differ, what happens when a permission is refused, offline behaviour, and how layouts cope with larger system text. See the [[/blogs/mobile-app-development-process|mobile app development process]] for where design fits in the build.",
        ],
      },
      {
        heading: "What Design Handoff Means",
        body: [
          "Handoff is the point where design intent becomes implementation work. In practice it's a phase, not a moment: developers should see designs while they're forming, handoff packages the approved decisions, and design review continues until release. When it works, the shipped product matches what was designed and tested. When it doesn't, developers fill gaps with guesses and the product drifts.",
          "Most handoff problems are missing information or late changes, not bad development. Designs often show the ideal state at one screen size, and developers then have to decide what happens with long names, errors, slow networks, empty lists or tablets. Each guess drifts from the intent.",
        ],
      },
      {
        heading: "Handoff Preparation",
        body: ["Before a handoff meeting, get the file ready."],
        checklist: [
          "Final designs separated from explorations and old versions",
          "Frames named after screens and states, in flow order",
          "Designs marked ready for development only when approved",
          "User flows linked, including alternative and error paths",
          "Components used consistently, with no detached one-offs",
          "Real content and edge cases in place of placeholder text",
          "Open questions listed rather than hidden",
          "Links to related tickets, research and prototypes",
        ],
      },
      {
        heading: "Components and Tokens",
        body: [
          "When design components correspond to coded components, developers assemble screens from existing parts instead of reinterpreting pixels. Use the same names and properties in design and code where possible, and call out anything new: a new component, a new variant or a change to an existing one. New components need a full spec of their own, not just an appearance in one screen. See [[/blogs/design-systems-for-teams-that-move-fast|how a design system keeps a fast-moving team consistent]].",
          "Tokens turn design decisions into shared named values: colours, type sizes, spacing, radii, shadows and motion durations. When designs use tokens, developers read “space-4” or “text-muted” rather than measuring pixels and guessing which colour a hex value was meant to be. In Figma, variables are commonly used to implement tokens, including modes for themes such as light and dark. If you export tokens to code, the Design Tokens Community Group published the first stable version of its format (2025.10) in October 2025; it is a W3C Community Group specification, not a formal W3C standard.",
        ],
      },
      {
        heading: "Typography and Spacing",
        body: [
          "Specify type as named styles (font, size, weight, line height, letter spacing) rather than per-screen values, and define how headings and body text scale across breakpoints. Build spacing from a consistent scale and use auto layout so padding and gaps are explicit. Inconsistent one-off values are a common source of “it looks slightly off” feedback that's hard to fix later.",
        ],
      },
      {
        heading: "Responsive Behaviour",
        body: [
          "Three artboards don't describe what happens in between. Specify how layouts reflow: which columns stack, what stays fixed and what stretches, how images crop, what hides or moves into menus, maximum content widths and how tables adapt. Designing with constraints and auto layout makes much of this visible in the file, but the written rules matter. Use the component behaviour spec template in our [[/blogs/responsive-ui-design|guide to planning responsive design]] so each component's behaviour at each width is recorded in one place.",
        ],
      },
      {
        heading: "States",
        body: [
          "Every component and screen has more states than the happy path. A simple matrix per component makes gaps obvious.",
        ],
        table: {
          headers: ["State", "Examples to design"],
          rows: [
            [
              "Interactive",
              "Default, hover, focus, pressed, disabled, selected",
            ],
            ["Data", "Empty, loading, partial, full, overflowing"],
            ["Outcome", "Success, warning, error, offline"],
            [
              "Content",
              "Long text, missing image, zero, very large numbers, other languages",
            ],
            ["Permission", "View-only, no access, upgrade required"],
          ],
        },
      },
      {
        heading: "Assets and Ownership",
        body: [
          "Export icons as SVG where possible, images at the sizes and formats needed (or provide source files for a build pipeline), and illustrations with clear naming. Mark which assets are final, and keep icons in the design system rather than scattered across files.",
          "Check ownership at the same time. You should hold the editable source files in a workspace your business controls, the component library, and licences for every font, icon set and stock image used. A view-only link or a folder of PNGs is not a handoff you can build on later.",
        ],
      },
      {
        heading: "Interaction Specifications",
        body: [
          "Annotate what can't be seen in a static frame: what triggers each interaction, validation rules and when they run, transitions with timing and easing, what happens on slow responses, truncation rules, keyboard behaviour and focus order, analytics events and the reduced-motion alternative. A short prototype shows the feel; written notes remove ambiguity. See [[/blogs/microinteractions-ui-design|microinteractions]].",
        ],
      },
      {
        heading: "Accessibility Annotations",
        body: [
          "Annotate heading levels, landmarks, focus order, accessible names for icon buttons, alt text, error messaging and live announcements. These are design decisions, and leaving them to developers means they're often missed. See [[/blogs/accessible-ui-ux-design|accessibility in UI/UX design]] for what to annotate.",
          "GitHub reports, from its own internal accessibility audit data, that \"nearly half of accessibility audit issues (48%) could have been prevented if design intent had been better documented\". That is one company's data, not an industry figure, but it matches the logic: an unannotated design leaves accessibility to chance. GitHub has also published its annotation stamps as a free, open-source Figma library.",
        ],
      },
      {
        heading: "Figma Dev Mode: what developers need",
        body: [
          "In Figma, keep a dedicated ready-for-dev page or use the ready-for-dev status on frames. Dev Mode lets developers inspect layout, spacing, styles and variables, read annotations and measurements, download assets and compare a frame with earlier versions. Keep annotations next to the relevant component rather than in a separate document that goes out of date. See [[/blogs/figma-product-design|Figma for product design]].",
        ],
        table: {
          headers: ["Feature", "Plans listed by Figma at the time of writing"],
          rows: [
            ["Dev Mode", "Professional, Education, Organization, Government and Enterprise; needs a Full or Dev seat"],
            ["Ready for dev status", "Every plan that includes Dev Mode"],
            ["Completed status", "Organization and Enterprise only"],
            ["Code Connect (shows your design system's real code snippets)", "Professional, Organization and Enterprise"],
          ],
        },
        callout: {
          type: "note",
          text: "Figma's Dev Mode guide carries no date and Figma changes plans and seat types often. Check the current page before budgeting for developer seats.",
        },
      },
      {
        heading: "The Handoff Walkthrough",
        body: [
          "Walk developers through the flows before they start: the user goal, the happy path, the branches, the new components and the open questions. Record the session. Developers will spot missing states and technical constraints far faster in conversation than by reading a file alone. Answer these questions before they're asked.",
        ],
        checklist: [
          "What happens when this request fails or is slow?",
          "What if the text is twice as long, or empty?",
          "What does this look like between the designed breakpoints?",
          "What does a user without permission see?",
          "Which existing component should this use?",
          "Is this interaction essential, or can it be simplified?",
          "What's the keyboard and screen reader behaviour?",
          "Where do these numbers and data come from?",
        ],
      },
      {
        heading: "The handoff sign-off gate",
        body: [
          "Use this gate after the design has passed the [[/blogs/how-much-ux-design-before-development|ready-to-build checklist]]. That checklist asks whether the design is decided; this gate asks whether the handover is complete. The designer, the lead developer and the product owner each confirm every line. Any \"no\" either gets fixed or is written down as an accepted risk with an owner.",
        ],
        checklist: [
          "Ready-to-build checklist passed for the scope of the first sprint or release",
          "Final frames separated from work in progress and marked ready for development",
          "Every deliverable marked Required for this project type in the matrix is present",
          "Walkthrough held with the developers who will build it, recorded, and questions logged",
          "Every open question has an owner and a date, and none blocks the first sprint",
          "New components and variants listed, each with its own specification",
          "Design QA acceptance criteria agreed: devices to review on, what counts as a defect, severity levels",
          "Change process agreed for approved designs after handoff",
          "Editable source files, libraries and licences held in a workspace the business controls",
        ],
        callout: {
          type: "note",
          text: "Teams often call a gate like this a \"definition of ready\". The Scrum Guide does not define one; it says only that items which can be done within one sprint are \"deemed ready for selection in a Sprint Planning event\". Treat any definition of ready as a team agreement and keep it short.",
        },
      },
      {
        heading: "Hypothetical example: a Shopify redesign with a separate designer and developer",
        body: [
          "Hypothetical example: a founder hires a freelance designer for a Shopify store redesign and a separate agency to build it. The Figma file looks finished. Run against the Shopify column of the matrix, it fails on three lines: product pages are designed only with a short title and two variants, there is no sold-out or empty-cart state, and nothing maps the page designs to theme sections, so the agency cannot tell what merchants should be able to rearrange.",
          "The gate also fails on ownership: the file sits in the designer's personal workspace. None of this is unusual or anyone's fault, but each gap would have become a developer's guess or a change request. Fixing them before the build starts is a short, contained piece of design work; fixing them during the build means rework and a debate about scope.",
        ],
      },
      {
        heading: "Design QA and Implementation Review",
        body: [
          "Review builds on real devices against the approved designs: layout, spacing, typography, states, responsive behaviour, interactions and accessibility. Log differences as issues with screenshots, the expected result and a severity, so developers can tell a broken flow from a two-pixel offset. Small, frequent reviews during development work better than one large review before release.",
          "Beyond visual QA, check that the build behaves as designed: validation, error handling, loading, permissions and analytics events. Test with real data and slow networks. Where the build and design legitimately diverge because of a technical constraint, update the design so the file reflects what shipped.",
        ],
      },
      {
        heading: "Versioning and Change Control",
        body: [
          "Designs change after handoff; the problem is silent change. Name versions at milestones, keep approved designs separate from work in progress, and when something changes, communicate what changed, why and which tickets it affects. Figma's version history and change comparison help, and branching (on Figma's Organization and Enterprise plans) lets designers work on changes without editing the approved file.",
        ],
      },
      {
        heading: "Common Handoff Problems",
        body: [],
        table: {
          headers: ["Problem", "Fix"],
          rows: [
            [
              "Only the happy path designed",
              "State matrix per component and screen",
            ],
            [
              "No responsive specification",
              "Auto layout, constraints and written reflow rules",
            ],
            ["One-off styles", "Tokens and design system components only"],
            [
              "No content model for the CMS or theme",
              "Content types, editable fields and limits defined before build",
            ],
            [
              "Specs in documents that go stale",
              "Annotations beside components in the design file",
            ],
            [
              "Late, silent design changes",
              "Versioning and explicit change notes",
            ],
            [
              "No designer involvement during build",
              "Scheduled design QA and a shared channel",
            ],
            [
              "Files owned by the designer, not the business",
              "Transfer of source files and licences written into the contract",
            ],
          ],
        },
      },
      {
        heading: "When this level of handoff is more than you need",
        body: [
          "The full matrix suits projects where design and development are done by different people or companies, or where a fixed quote depends on the design. It is more than you need when one person designs and builds a small site, or when a product team works in short cycles with designers and developers side by side; there, run the gate per feature rather than once for the whole project, and keep it to the few lines that matter.",
          "The matrix also has limits. It cannot make an untested design right, and it does not replace developers' own estimates. If the core flows are still undecided, go back to [[/blogs/how-much-ux-design-before-development|how much design you need before development]] first. If your design delivery is part of a wider engagement, our [[/services/ui-ux-design|UI/UX design service]] page explains how we approach it.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Figma Help Center: Guide to Dev Mode (vendor documentation; undated); GitHub blog: GitHub's open-source Annotation Toolkit (18 November 2025) (vendor data); The 2020 Scrum Guide; W3C Design Tokens Community Group: specification reaches first stable version (28 October 2025).",
          "Accessed 15 October 2026. Figma's plans, seats and features change; check the current pages before relying on them.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A complete handoff is specific to the project: find your column in the matrix, make sure every Required item exists, and run the sign-off gate once the design has passed the ready-to-build checklist. Then keep design involved through the build with small, frequent design QA and explicit change control. Your next step is practical: open the file, walk the matrix column for your project type, and list what is missing before anyone writes code.",
        ],
        cta: {
          title: "Want a second opinion on a design file before the build?",
          description:
            "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/ui-ux-design|UI/UX design]] and [[/services/website-development|website development]]. If useful, we can review your design file against the matrix and sign-off gate and tell you what is missing before your developers start.",
        },
      },
    ],
  },
];
