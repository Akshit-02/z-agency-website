import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch three, part six: growth economics and
 * merchandising — customer lifetime value, ecommerce merchandising (the
 * on-site "digital shelf"), product merchandising strategy (the planning
 * process) and product bundles. Merged into `posts` in blog-data.ts.
 */

export const commercePosts15: BlogPost[] = [
  // --------------------------------------------- 133 · CUSTOMER LIFETIME VALUE
  {
    slug: "ecommerce-customer-lifetime-value",
    title: "Ecommerce Customer Lifetime Value: How to Calculate and Improve CLV",
    seoTitle: "Ecommerce Customer Lifetime Value: Calculate and Improve CLV",
    excerpt:
      "How to calculate ecommerce customer lifetime value with simple, cohort and predictive methods, use margin not revenue, compare with CAC and improve CLV.",
    category: "CRO",
    banner: "clvformula",
    bannerAlt:
      "Customer lifetime value formula: average order value times orders per year times years as a customer, calculated on gross margin rather than revenue, with three methods compared: cohort-based, historical average and predictive models.",
    date: "2026-09-29",
    updated: "2026-09-29",
    readingTime: "15 min read",
    relatedServiceSlugs: ["cro-audit", "ai-automation"],
    relatedIndustrySlugs: ["d2c-consumer", "ecommerce"],
    faqs: [
      { q: "What is customer lifetime value in ecommerce?", a: "The total value a customer brings over their relationship with the store, usually expressed as revenue or, more usefully, gross margin, over a defined period." },
      { q: "How do you calculate ecommerce CLV?", a: "A simple version is average order value × orders per year × expected years as a customer, ideally using gross margin. More reliable versions use cohort data (cumulative margin per customer by months since first order) or predictive models." },
      { q: "Should CLV use revenue or margin?", a: "Margin, when comparing with acquisition cost. Revenue-based CLV overstates what you can afford to spend acquiring customers." },
      { q: "What is a good CLV to CAC ratio?", a: "It depends on margins, cash flow and payback period. Many businesses look for CLV comfortably above CAC with a payback period they can finance, but set your own threshold from your economics." },
      { q: "What time period should CLV cover?", a: "A defined window such as 12, 24 or 36 months is more useful than an open-ended lifetime, especially for young businesses without long history." },
      { q: "How does cohort analysis help with CLV?", a: "It shows actual cumulative revenue or margin per customer for each acquisition cohort over time, so CLV is based on observed behavior rather than averages." },
      { q: "What is predictive CLV?", a: "Models that estimate future value for customers based on their behavior so far. Useful for large customer bases, but they need enough data and should be checked against actual outcomes." },
      { q: "How do I increase CLV?", a: "Improve retention and repeat purchase, raise average order value sensibly, protect margin by reducing discount dependency and returns, and acquire customers who fit your products." },
      { q: "Does Shopify show customer lifetime value?", a: "Shopify's customer reports include cohort analysis and predicted spend tiers, and customer records show total spent. For margin-based CLV you typically combine order and cost data." },
      { q: "Why do CLV numbers differ between tools?", a: "Different definitions: revenue vs margin, period, whether refunds and discounts are included, and how customers are identified across guest orders." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Ecommerce customer lifetime value (CLV) is the value a customer generates over a defined period. The quick formula is average order value × orders per year × years as a customer; for decisions, calculate it on gross margin and from cohort data showing actual cumulative margin per customer by months since their first order. Compare CLV with customer acquisition cost and payback period, not revenue alone. Improve it by retaining customers longer, encouraging well-timed repeat purchases, raising order value without heavy discounting, reducing returns and acquiring customers who fit your products.",
        ],
      },
      {
        heading: "Why CLV Matters",
        body: [
          "CLV tells you how much you can afford to spend acquiring a customer and which customers, channels and products create lasting value. Without it, businesses judge marketing on first-order revenue and underinvest in retention or overinvest in channels whose customers never return. It connects [[/blogs/ecommerce-customer-retention|retention]], [[/blogs/ecommerce-repeat-purchases|repeat purchases]] and [[/blogs/ecommerce-average-order-value|average order value]] into one number.",
        ],
      },
      {
        heading: "Three Ways to Calculate CLV",
        body: [],
        table: {
          headers: ["Method", "How", "Strengths", "Weaknesses"],
          rows: [
            ["Simple formula", "AOV × purchase frequency × lifespan (× margin %)", "Quick intuition", "Averages hide variation; lifespan is a guess"],
            ["Cohort-based (observed)", "Cumulative margin per customer by months since first order", "Based on real behavior; comparable across cohorts", "Needs history; young cohorts incomplete"],
            ["Predictive model", "Statistical or ML models projecting future purchases", "Individual-level estimates", "Needs data volume; must be validated"],
          ],
        },
      },
      {
        heading: "A Worked Example",
        body: [
          "Illustrative numbers only. A store's customers spend 60 per order on average, place 2.5 orders per year, and typically buy for 2 years. Revenue CLV is 60 × 2.5 × 2 = 300. With a 50% gross margin after product costs, shipping and payment fees, margin CLV is 150. If acquiring a customer costs 90, the business recovers acquisition cost once a customer has generated 90 of margin, which on these averages takes about seven to eight months. Cohort data would show whether real customers actually follow that path.",
        ],
        callout: {
          type: "note",
          text: "The simple formula assumes every customer behaves like the average. In reality a minority of customers often account for much of the value, which is why cohort and segment views matter.",
        },
      },
      {
        heading: "Use Margin, Not Revenue",
        body: [
          "Revenue-based CLV looks larger and flatters acquisition spending. For decisions, subtract product cost, shipping, payment fees, discounts and returns. Two channels with identical revenue CLV can have very different margin CLV if one attracts heavy discount users or high returners.",
        ],
      },
      {
        heading: "Build CLV From Cohorts",
        body: [
          "The most reliable approach is to group customers by first-order month and plot cumulative margin per customer over months. You can read CLV at 6, 12 or 24 months, compare cohorts, and see payback periods directly. Cut cohorts by acquisition channel, first product and discount use to see where value comes from. See [[/blogs/ecommerce-cohort-analysis|ecommerce cohort analysis]].",
        ],
        cta: {
          title: "Not sure what a customer is really worth to you?",
          description: "ZSpace builds margin-based CLV from your order data and shows which channels and products create lasting value.",
        },
      },
      {
        heading: "CLV and Acquisition Cost",
        body: [
          "Compare CLV with customer acquisition cost (CAC) and payback period. A high CLV that takes three years to realize may be unaffordable for a business with limited cash. Look at CLV at a fixed horizon, such as 12 months, alongside CAC by channel, and set targets that match your cash position.",
        ],
      },
      {
        heading: "What Drives CLV",
        body: [],
        table: {
          headers: ["Driver", "Levers"],
          rows: [
            ["Retention", "First-order experience, service, lifecycle messaging"],
            ["Frequency", "Replenishment reminders, subscriptions, range breadth"],
            ["Order value", "Bundles, cross-sells, thresholds, upgrades"],
            ["Margin", "Less blanket discounting, lower returns, efficient fulfilment"],
            ["Customer fit", "Acquisition channels and offers that attract the right customers"],
          ],
        },
      },
      {
        heading: "Improving CLV Without Eroding It",
        body: [
          "Tactics that raise one driver can hurt another. Deep discounts may lift frequency but cut margin; aggressive upsells may raise order value but increase returns. Test changes against cohort margin over several months, not immediate revenue.",
        ],
      },
      {
        heading: "CLV by Segment and Channel",
        body: [
          "A single store-wide CLV figure hides the decisions that matter. Break CLV down by acquisition channel, first product, first-order discount, market and segment. The spread is usually large: some channels bring customers worth several times others, and some entry products lead to much higher repeat value. Use these breakdowns to set channel-specific acquisition targets rather than one blended CAC limit.",
        ],
        table: {
          headers: ["Breakdown", "Decision it supports"],
          rows: [
            ["By acquisition channel", "Channel budgets and CAC targets"],
            ["By first product", "Which products to feature in acquisition"],
            ["By first-order discount", "Whether to use deep first-order offers"],
            ["By segment", "Loyalty and service investment"],
            ["By market", "International expansion priorities"],
          ],
        },
      },
      {
        heading: "Predictive CLV Models",
        body: [
          "Predictive CLV estimates what a customer will be worth in future, usually from purchase frequency, recency and value. Well-known statistical approaches model the number of future purchases and average order value separately; machine learning models can add more signals. Predictions are useful for ranking customers and for early reads on new cohorts, but they need enough history, validation against what actually happened, and regular refreshing. Present them with uncertainty, and keep historical CLV as the reference for financial decisions. See [[/blogs/ecommerce-data-warehouse|ecommerce data warehouse]].",
        ],
      },
      {
        heading: "Using CLV Responsibly",
        body: [
          "CLV helps allocate effort, but it can also lead to treating lower-value customers badly. Use it to invest more in customers and channels that create value, not to degrade service for others. Be transparent about loyalty benefits, and check that value-based targeting respects consent and privacy rules. See [[/blogs/ecommerce-customer-analytics|ecommerce customer analytics]].",
        ],
      },
      {
        heading: "Data Pitfalls",
        body: [],
        checklist: [
          "Guest checkouts splitting one customer into several records",
          "Refunds and returns excluded",
          "Mixing revenue and margin definitions",
          "Treating young cohorts as complete",
          "Ignoring seasonality in cohort comparisons",
          "Predictive CLV used without checking against actual outcomes",
        ],
      },
      {
        heading: "CLV in Shopify and Other Platforms",
        body: [
          "Shopify's customer reports include cohort analysis, predicted spend tiers and RFM analysis, and each customer record shows total spent. For margin-based CLV, combine order exports with product cost, shipping and fee data in a spreadsheet or BI tool. See [[/blogs/shopify-analytics-guide|Shopify analytics]].",
        ],
        cta: {
          title: "Want CLV to guide your marketing budget?",
          description: "Talk to ZSpace about [[/services/cro-audit|retention and CLV analysis]] and [[/services/ai-automation|predictive models and automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "CLV is only useful when it's defined on margin, measured from real cohorts and compared with acquisition cost and payback. Use the simple formula for intuition and cohorts for decisions, then improve retention, frequency, order value and margin together.",
          "For related guides, see [[/blogs/ecommerce-customer-segmentation|customer segmentation]] and [[/blogs/ecommerce-loyalty-vs-personalization|loyalty vs personalization]].",
        ],
      },
    ],
  },

  // ---------------------------------------------------- 134 · MERCHANDISING
  {
    slug: "ecommerce-merchandising",
    title: "Ecommerce Merchandising: How to Organize Products for Better Shopping Experiences",
    seoTitle: "Ecommerce Merchandising: Organize Products for Better Shopping",
    excerpt: "How ecommerce merchandising works: collections, category structure, product ordering, featured products, inventory-aware rules, search, recommendations and seasons.",
    category: "CRO",
    banner: "merchlevers",
    bannerAlt:
      "Ecommerce merchandising levers on the digital shelf: structure (categories, collections, navigation labels, cross-links), order (default sort, sparing pins, stock-aware ranking, diverse first row), presentation (cards, truthful badges, imagery, price display) and promotion (homepage modules, campaign pages, seasonal collections, bundles).",
    date: "2026-09-29",
    updated: "2026-09-29",
    readingTime: "16 min read",
    relatedServiceSlugs: ["cro-audit", "ui-ux-design", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "fashion-apparel", "d2c-consumer"],
    faqs: [
      { q: "What is ecommerce merchandising?", a: "Deciding which products shoppers see, where and in what order online: category structure, collections, sorting, product presentation, badges, homepage and campaign placements, and bundles and offers." },
      { q: "How is online merchandising different from in-store?", a: "Online, shoppers see a small window at a time, so order and ranking matter more; search, filters and personalization change what each shopper sees; and everything can be measured and tested." },
      { q: "Who owns ecommerce merchandising?", a: "Usually an ecommerce or merchandising team, working with buying, marketing and UX. Clear ownership matters because many teams want homepage and category space." },
      { q: "Should I manually pin products in categories?", a: "Sparingly, for launches or strategic items, with end dates. Heavy pinning goes stale and hides products shoppers want." },
      { q: "What makes a good default sort for merchandising?", a: "A relevance order that shows the breadth of the category, pushes unavailable items down and reflects performance, with room for a few deliberate placements." },
      { q: "How do badges fit into merchandising?", a: "Badges like New, Bestseller or Low stock guide attention when they're accurate and rare. Overused badges become noise." },
      { q: "What metrics measure merchandising?", a: "List click-through, product views, add-to-cart rate from lists, revenue per category session, sell-through, and stock-outs among featured products." },
      { q: "How does merchandising relate to personalization?", a: "Merchandising sets what's on the shelf and the rules; personalization orders it per shopper within those rules. See the merchandising vs personalization guide." },
      { q: "How is this different from product merchandising strategy?", a: "This guide covers the on-site levers. The product merchandising strategy guide covers planning: assortment roles, calendars and how decisions are made." },
      { q: "Can Shopify support merchandising?", a: "Yes: collections with manual or automated sorting, Search & Discovery boosts and filters, theme sections for featured products, and apps for more advanced rules." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Ecommerce merchandising is deciding which products shoppers see, where and in what order. It works through four levers: structure (categories, collections and navigation), order (default sorting, a few deliberate pins, stock-aware ranking), presentation (product cards, imagery, truthful badges, price display) and promotion (homepage modules, campaign pages, seasonal collections, bundles). Good merchandising shows the breadth of the range early, keeps unavailable products out of prime positions, supports launches and margin without burying what shoppers want, and is measured by list click-through, add-to-cart and revenue per category session.",
        ],
      },
      {
        heading: "The Digital Shelf",
        body: [
          "In a physical store, merchandisers decide what goes at eye level. Online, the equivalent is the first rows of a category, the first results for a search, the homepage and the modules on product pages. Shoppers see only a small window at a time, so these decisions shape sales more directly online. The diagram above groups the levers. For planning which products to push and when, see [[/blogs/ecommerce-product-merchandising|product merchandising strategy]].",
        ],
      },
      {
        heading: "Lever 1: Structure",
        body: [
          "Category structure decides where shoppers look. Use categories shoppers recognise, curated collections for edits and occasions, and cross-links between related categories. Put products in every category where shoppers would expect them, while keeping one canonical product URL. See [[/blogs/ecommerce-navigation-design|ecommerce navigation]] and [[/blogs/ecommerce-website-architecture|ecommerce website architecture]].",
        ],
      },
      {
        heading: "Lever 2: Order",
        body: [
          "The default sort is the most powerful merchandising decision online. A diverse relevance order shows the range; performance signals such as conversion and sell-through help strong products rise; stock awareness pushes unavailable items down. Manual pins handle launches and strategic items, but should be few and time-limited. See [[/blogs/ecommerce-product-sorting|ecommerce product sorting]].",
        ],
        table: {
          headers: ["Tool", "Use for", "Risk"],
          rows: [
            ["Default relevance sort", "Most categories", "Poor data produces poor order"],
            ["Performance ranking", "Letting winners rise", "Popular items crowd out new ones"],
            ["Manual pins", "Launches, campaigns", "Stale pins hide better products"],
            ["Boosts and buries", "Nudging within rules", "Hidden complexity"],
            ["Stock rules", "Keeping unavailable items low", "Size-level stock ignored"],
          ],
        },
      },
      {
        heading: "Lever 3: Presentation",
        body: [
          "How products look in lists changes which get clicked: consistent imagery, descriptive names, clear prices, visible variants, the deciding attribute and truthful badges. See [[/blogs/ecommerce-product-cards|ecommerce product cards]].",
        ],
        cta: {
          title: "Is your category order working for you or against you?",
          description: "ZSpace reviews sorting, pinning and presentation on your key categories and tunes them against real data.",
        },
      },
      {
        heading: "Lever 4: Promotion",
        body: [
          "Homepage modules, campaign landing pages, seasonal collections, bundles and offers direct attention to strategic products. Give each placement a purpose and an owner, rotate content on a schedule, and retire campaigns cleanly so shoppers don't land on stale edits.",
        ],
      },
      {
        heading: "Merchandising Search Results",
        body: [
          "Search results need merchandising too: relevance first, with boosts for strategic products on specific queries, and buries for items that shouldn't lead. Keep rules few and reviewed. See [[/blogs/ecommerce-site-search|ecommerce site search]].",
        ],
      },
      {
        heading: "Category Structure as Merchandising",
        body: [
          "Merchandising starts with how the catalog is organized: which categories and collections exist, how products are assigned, and how deep the hierarchy goes. A clear structure lets merchandisers promote ranges without rebuilding navigation. Keep categories stable for navigation and SEO, and use collections for seasonal, thematic and promotional groupings. See [[/blogs/ecommerce-category-page-optimization|category page optimization]].",
        ],
      },
      {
        heading: "Availability and Inventory-Aware Merchandising",
        body: [
          "Merchandising must respect stock. Promoting a product that's sold out in most sizes frustrates shoppers and wastes premium placements. Build rules that demote low-availability products in default sorts, swap featured products when stock falls, and highlight items with healthy stock or overstock that needs to move. Connect merchandising tools to inventory data so rules update automatically. See [[/blogs/ecommerce-inventory-management-integration|inventory integration]].",
        ],
        table: {
          headers: ["Stock situation", "Merchandising response"],
          rows: [
            ["Low stock in key sizes", "Demote in default sort; keep findable"],
            ["Sold out", "Remove from featured slots; offer back-in-stock alerts"],
            ["Overstock", "Feature in relevant collections, bundles or promotions"],
            ["New arrival with depth", "Feature on homepage and category tops"],
          ],
        },
      },
      {
        heading: "Seasonal Merchandising",
        body: [
          "Seasons, holidays and events change what shoppers want. Plan a merchandising calendar with collections, homepage modules, category sort rules and search boosts for each period, prepared ahead and switched on schedule. Remember hemispheres and markets differ. See [[/blogs/ecommerce-product-merchandising|merchandising strategy]].",
        ],
      },
      {
        heading: "Recommendations and Merchandising",
        body: [
          "Recommendation engines and merchandising work best together: merchandisers set rules, exclusions and priorities (new ranges, margin, availability), and algorithms personalize within them. Without guardrails, recommendations can over-promote a narrow set of bestsellers. See [[/blogs/ecommerce-product-recommendations|product recommendations]] and [[/blogs/ecommerce-merchandising-vs-personalization|merchandising vs personalization]].",
        ],
      },
      {
        heading: "Merchandising vs Product Discovery",
        body: [
          "Product discovery is the shopper's experience of finding products through navigation, search, filters and recommendations. Merchandising is the retailer's decisions about which products appear where, in what order and with what emphasis. They overlap on the same pages, but merchandising is about commercial choices and discovery is about findability. See [[/blogs/ecommerce-product-discovery|ecommerce product discovery]].",
        ],
      },
      {
        heading: "Governance",
        body: [],
        checklist: [
          "One owner for each category and homepage slot",
          "Rules and pins documented with start and end dates",
          "A weekly review of top categories and search results",
          "Stock and margin data visible to merchandisers",
          "Requests from marketing and buying prioritized, not all accepted",
        ],
      },
      {
        heading: "Measuring Merchandising",
        body: [],
        table: {
          headers: ["Metric", "Tells you"],
          rows: [
            ["List click-through (first rows)", "Whether what's shown attracts clicks"],
            ["Add-to-cart rate from lists", "Whether clicks turn into intent"],
            ["Revenue per category session", "Commercial performance of the category"],
            ["Sell-through", "Whether featured stock moves"],
            ["Featured items out of stock", "Wasted prime space"],
          ],
        },
      },
      {
        heading: "Merchandising on Shopify",
        body: [
          "Shopify collections can be sorted manually or automatically, the Search & Discovery app adds product boosts and filters for search, and theme sections feature products on the homepage and elsewhere. Apps add rule-based ranking for larger catalogs. See [[/blogs/shopify-collection-page-seo|Shopify collections]].",
        ],
        cta: {
          title: "Want merchandising that sells without guesswork?",
          description: "Talk to ZSpace about [[/services/cro-audit|merchandising and CRO]], [[/services/ui-ux-design|listing design]] and [[/services/shopify-development|Shopify implementation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Ecommerce merchandising is the online shelf: structure, order, presentation and promotion. Show the range, keep prime space for available and strategic products, keep pins few and fresh, and measure. For personalization's role alongside it, see [[/blogs/ecommerce-merchandising-vs-personalization|merchandising vs personalization]].",
          "For related guides, see [[/blogs/ecommerce-merchandising-automation|merchandising automation]] and [[/blogs/ai-ecommerce-merchandising|AI merchandising]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 135 · MERCHANDISING STRATEGY
  {
    slug: "ecommerce-product-merchandising",
    title: "Ecommerce Merchandising Strategy: How to Structure Product Collections",
    seoTitle: "Ecommerce Merchandising Strategy: Structuring Collections",
    excerpt: "How to plan an ecommerce merchandising strategy: assortment roles, collections, category strategy, product hierarchy, commercial priorities and personalization.",
    category: "CRO",
    banner: "merchplanning",
    bannerAlt:
      "Merchandising planning cycle: assortment roles, calendar, placement, pricing and promotions, measure and adjust, reviewed weekly and replanned each season.",
    date: "2026-09-29",
    updated: "2026-09-29",
    readingTime: "16 min read",
    relatedServiceSlugs: ["cro-audit", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "fashion-apparel", "d2c-consumer"],
    faqs: [
      { q: "What is a product merchandising strategy?", a: "A plan for which products to feature, where, when and with what pricing or promotion, based on each product's role in the range, stock, margin and the trading calendar." },
      { q: "What are assortment roles?", a: "Labels describing what each product does for the business, such as hero (drives traffic and sales), core (steady sellers), traffic builder (entry products), margin builder, seasonal and clearance." },
      { q: "What is a merchandising calendar?", a: "A schedule of launches, seasons, campaigns, promotions and clearance, used to plan placements and stock ahead of time." },
      { q: "How often should merchandising be reviewed?", a: "Weekly for performance and stock, monthly for placements and promotions, and each season for the overall plan." },
      { q: "How do I choose hero products?", a: "Look for products with strong demand, good reviews, healthy margin and reliable stock that represent the brand well." },
      { q: "Should merchandising decisions use margin?", a: "Yes. Featuring low-margin products heavily can grow revenue while shrinking profit. Balance margin with demand and brand goals." },
      { q: "How do promotions fit the strategy?", a: "Plan them in the calendar with clear goals (launch, clearance, acquisition), avoid constant discounting and measure margin impact." },
      { q: "What KPIs measure merchandising strategy?", a: "Sell-through, revenue and margin by category, conversion from featured placements, stock-outs on featured items and clearance performance." },
      { q: "How is this different from ecommerce merchandising?", a: "The ecommerce merchandising guide covers on-site levers. This guide covers planning: which products get those levers, and when." },
      { q: "Do small stores need a merchandising strategy?", a: "A simple one: know your hero products, plan a basic calendar and review what's featured regularly. It doesn't need to be elaborate." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A product merchandising strategy decides which products get attention, when and how. Assign each product a role (hero, core, traffic builder, margin builder, seasonal or clearance), build a merchandising calendar of launches, seasons and promotions, and plan placements for each period across homepage, categories, search and email. Align pricing and promotions with margin goals, check stock can support what's featured, then measure sell-through, conversion from placements and margin weekly, and adjust. Replan each season.",
        ],
      },
      {
        heading: "Strategy vs Execution",
        body: [
          "[[/blogs/ecommerce-merchandising|Ecommerce merchandising]] covers the on-site levers: structure, sorting, presentation and promotion. This guide covers the planning behind them: deciding which products deserve those levers and when. Without a plan, prime space goes to whoever asks loudest.",
        ],
      },
      {
        heading: "Step 1: Assign Assortment Roles",
        body: [],
        table: {
          headers: ["Role", "Purpose", "Merchandising treatment"],
          rows: [
            ["Hero", "Represents the brand, drives traffic and sales", "Prime placements, ads, content"],
            ["Core", "Steady sellers customers come back for", "Easy to find; reorder prompts"],
            ["Traffic builder", "Entry point for new customers", "Featured to new visitors"],
            ["Margin builder", "Healthy margin, often complements", "Cross-sells and bundles"],
            ["Seasonal", "Time-bound demand", "Calendar-driven features"],
            ["Clearance", "Stock to move", "Outlet areas, targeted offers"],
          ],
        },
      },
      {
        heading: "Step 2: Build a Merchandising Calendar",
        body: [
          "Map the year: product launches, seasons, gifting periods, promotions and clearance windows. Add lead times for stock, content and creative. The calendar lets teams prepare placements, imagery and copy ahead, and prevents clashing promotions.",
        ],
      },
      {
        heading: "Step 3: Plan Placements",
        body: [
          "For each period, decide what appears on the homepage, which products lead key categories, which search terms get boosts, and what email features. The diagram above shows how placement sits between the calendar and pricing in the cycle.",
        ],
        cta: {
          title: "Want a merchandising plan your team can run?",
          description: "ZSpace helps brands set assortment roles, calendars and placement plans grounded in sales and stock data.",
        },
      },
      {
        heading: "Step 4: Align Pricing and Promotions",
        body: [
          "Decide which products are promoted, how, and why: launch pricing, bundles, multi-buy, clearance or free delivery thresholds. Protect hero and core products from constant discounting, and measure margin impact, not just sales volume. See [[/blogs/ecommerce-product-bundles|product bundles]].",
        ],
      },
      {
        heading: "Step 5: Check Stock",
        body: [
          "Featuring products you can't supply wastes prime space and frustrates shoppers. Check stock depth, especially across sizes and variants, before featuring, and set rules that swap out featured items when they sell through.",
        ],
      },
      {
        heading: "Step 6: Measure and Adjust",
        body: [],
        table: {
          headers: ["KPI", "Review"],
          rows: [
            ["Sell-through by role and category", "Weekly"],
            ["Conversion from featured placements", "Weekly"],
            ["Revenue and margin by category", "Weekly / monthly"],
            ["Featured items out of stock", "Daily or weekly"],
            ["Clearance progress", "Weekly during clearance"],
            ["Promotion margin impact", "After each promotion"],
          ],
        },
      },
      {
        heading: "Structuring Product Collections",
        body: [
          "Collections are the building blocks of merchandising strategy. Distinguish stable collections (categories that support navigation and SEO) from curated collections (themes, edits, occasions) and campaign collections (sales, launches). Define rules for membership (automatic by attribute or manual curation), naming conventions and when collections are retired.",
        ],
        table: {
          headers: ["Collection type", "Purpose", "Lifespan", "Membership"],
          rows: [
            ["Category", "Navigation, SEO", "Long-term", "Rules by product type and attributes"],
            ["Curated edit", "Inspiration, themes", "Weeks to months", "Manual or rules"],
            ["Campaign", "Promotions, launches", "Days to weeks", "Manual, scheduled"],
            ["Personalized", "Relevance per shopper", "Dynamic", "Algorithm within rules"],
          ],
        },
      },
      {
        heading: "Product Hierarchy",
        body: [
          "A clear product hierarchy (department, category, subcategory, product type) supports navigation, filters, analytics and feeds. Keep it shallow enough to navigate, consistent in naming and aligned with how shoppers think. Use attributes rather than extra levels for distinctions such as colour or material. See [[/blogs/information-architecture|information architecture]].",
        ],
      },
      {
        heading: "Commercial Priorities Framework",
        body: [
          "Merchandising strategy balances what shoppers want with what the business needs. Make priorities explicit so placement decisions are consistent: relevance to the shopper first, then availability, margin, strategic ranges (new launches, own brands) and inventory that needs to move. Review priorities each season and record them so teams apply them the same way.",
        ],
        checklist: [
          "Relevance to shopper intent",
          "Availability across sizes and variants",
          "Margin after expected returns",
          "Strategic ranges and launches",
          "Inventory that needs to move",
        ],
      },
      {
        heading: "Personalization Within the Strategy",
        body: [
          "Personalization can adapt collections and sort orders to individual shoppers, but it should operate within merchandising rules: exclusions, availability thresholds and priorities. Measure personalized merchandising against a holdout. See [[/blogs/ecommerce-personalization|ecommerce personalization]] and [[/blogs/ecommerce-product-analytics|product analytics]].",
        ],
      },
      {
        heading: "Using Data Without Losing Judgement",
        body: [
          "Performance data shows what's selling; it doesn't know about launches, brand positioning or supply. Combine sales, conversion, margin and stock data with merchandising judgement, and document why placement decisions were made so they can be reviewed.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Featuring by internal request rather than plan",
          "Hero products always on discount",
          "Placements not updated when stock runs out",
          "No calendar, so promotions clash",
          "Judging success on revenue without margin",
          "Never retiring old campaigns and pins",
        ],
        cta: {
          title: "Want your best products to get the attention they deserve?",
          description: "Talk to ZSpace about [[/services/cro-audit|merchandising strategy and CRO]] and [[/services/ui-ux-design|placement design]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A merchandising strategy turns the digital shelf into a plan: roles for products, a calendar, placements, pricing and promotions aligned with margin, stock checks and weekly measurement. It keeps prime space working for the business. For order value tactics that follow from it, see [[/blogs/ecommerce-average-order-value|average order value]].",
          "Related: [[/blogs/ecommerce-merchandising|ecommerce merchandising]], [[/blogs/ecommerce-product-sorting|product sorting]] and [[/blogs/ecommerce-category-page-design|product listing page UX]].",
          "For related guides, see [[/blogs/ecommerce-merchandising-automation|merchandising automation]].",
        ],
      },
    ],
  },

  // ---------------------------------------------------- 136 · BUNDLES
  {
    slug: "ecommerce-product-bundles",
    title: "Ecommerce Bundles: How Product Bundling Can Improve Shopping Experience",
    seoTitle: "Ecommerce Bundles: How Product Bundling Improves Shopping",
    excerpt:
      "How to design ecommerce product bundles that help shoppers: bundle types, pricing, presentation, inventory, returns, measurement and when bundles get in the way.",
    category: "CRO",
    banner: "bundletypes",
    bannerAlt:
      "Types of product bundles compared: fixed bundles, mix-and-match, multipacks, add-on bundles and build-a-set, with an example, what each is good for and what to watch out for.",
    date: "2026-09-29",
    readingTime: "13 min read",
    relatedServiceSlugs: ["cro-audit", "ui-ux-design", "shopify-development"],
    relatedIndustrySlugs: ["d2c-consumer", "beauty-personal-care", "food-beverage"],
    faqs: [
      { q: "What is product bundling in ecommerce?", a: "Selling several products together as one purchase, often at a combined price, such as a starter kit, a multipack or a set of complementary items." },
      { q: "Do bundles improve the shopping experience?", a: "They can, when they solve a real problem: helping new customers choose, completing a set, or saving money on items bought together. Bundles that feel forced add confusion." },
      { q: "What types of bundles are there?", a: "Fixed bundles (a set chosen by the store), mix-and-match (choose any items from a group), multipacks, add-on bundles of complementary items, and build-a-set experiences." },
      { q: "How should bundles be priced?", a: "Show the bundle price, the individual total and the saving clearly. Make sure the bundle still meets your margin goals after any discount." },
      { q: "How do bundles affect inventory?", a: "Bundles draw on component stock. Your system should reduce component inventory and show the bundle as unavailable when a component runs out." },
      { q: "How do returns work for bundles?", a: "Decide and state whether bundles can be partially returned and how refunds are calculated. Unclear rules create disputes." },
      { q: "Can bundles hurt conversion?", a: "Yes, if they complicate the product page, hide single-item options or push shoppers into decisions they weren't ready for. Test them." },
      { q: "How do I measure bundle success?", a: "Bundle attach and take rates, average order value, margin per order, conversion and returns, compared with a control." },
      { q: "How do bundles work on Shopify?", a: "Through Shopify's bundles app for fixed bundles or third-party apps for mix-and-match and volume offers. See the Shopify bundles guide." },
      { q: "Are bundles good for D2C brands?", a: "Often, especially starter kits and routines that help new customers try a range. They're less useful when products aren't used together." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Product bundles improve the shopping experience when they solve a real problem: helping new customers choose (starter kits), completing a set (routines, outfits, kits), or saving money on things bought together (multipacks). Choose the bundle type that fits the need, show what's inside, the bundle price, the individual total and the saving, keep single items easy to buy, and make sure inventory, fulfilment and returns rules handle components correctly. Measure take rate, order value, margin and returns against a control, and remove bundles that complicate choice without helping shoppers.",
        ],
      },
      {
        heading: "When Bundles Help",
        body: [
          "Bundles are a merchandising tool with a customer-experience test: does the bundle make choosing or buying easier? A skincare starter kit helps a new customer try a routine; a camera with the right memory card saves a compatibility question; a three-pack of socks saves money. A bundle of unrelated products to clear stock doesn't help anyone. For Shopify-specific implementation, see [[/blogs/shopify-bundles-volume-discounts|Shopify bundles and volume discounts]].",
        ],
      },
      {
        heading: "Bundle Types",
        body: [
          "The diagram above compares five types. Choose by the shopper problem you're solving, not by which app is easiest to install.",
        ],
      },
      {
        heading: "Designing the Bundle Page",
        body: [],
        checklist: [
          "Show every item in the bundle with images and quantities",
          "Bundle price, individual total and saving stated plainly",
          "Explain who the bundle is for and why the items go together",
          "Variant selection for each component where needed (size, shade)",
          "Links to the individual products",
          "Clear delivery and returns information for bundles",
        ],
        cta: {
          title: "Want bundles that customers actually choose?",
          description: "ZSpace designs and tests bundle offers and pages around how your customers use your products.",
        },
      },
      {
        heading: "Pricing Bundles",
        body: [
          "Shoppers expect a bundle to be cheaper than buying items separately, or to add something they couldn't otherwise get. Calculate margin after the bundle discount and any extra packing cost, and avoid discounting hero products so deeply that the bundle trains customers never to pay full price. Genuine savings only; inflated “individual” prices damage trust.",
        ],
      },
      {
        heading: "Presenting Bundles Across the Store",
        body: [
          "For small D2C ranges, bundles often work best alongside sibling comparison; see [[/blogs/d2c-product-discovery|D2C product discovery]].",
        ],
        table: {
          headers: ["Placement", "Use"],
          rows: [
            ["Product page", "Offer the bundle as an option, not a replacement for the single item"],
            ["Collections", "A “kits and sets” collection for shoppers who want them"],
            ["Cart", "Suggest completing a set when relevant items are in the cart"],
            ["Homepage and landing pages", "Starter kits for new visitors"],
            ["Email", "Refill bundles for returning customers"],
          ],
        },
      },
      {
        heading: "Inventory, Fulfilment and Returns",
        body: [
          "Bundles need operational rules: component inventory must decrease when a bundle sells, and the bundle must show as unavailable if any component runs out. Pick-and-pack instructions must be clear. Decide whether bundles can be partially returned and how refunds are split, and state it on the page.",
        ],
      },
      {
        heading: "Measuring Bundles",
        body: [],
        checklist: [
          "Take rate: share of relevant orders including the bundle",
          "Average order value and items per order",
          "Margin per order, not just revenue",
          "Conversion on pages offering bundles vs control",
          "Returns and partial returns",
          "Repeat purchase by customers whose first order was a bundle",
        ],
      },
      {
        heading: "When Bundles Get in the Way",
        body: [],
        checklist: [
          "Too many bundle options on one product page",
          "Single items hard to find or buy",
          "Bundles of products nobody buys together",
          "Unclear savings or inflated reference prices",
          "Component variants that can't be chosen",
        ],
        cta: {
          title: "Want to raise order value without adding friction?",
          description: "Talk to ZSpace about [[/services/cro-audit|offer testing]], [[/services/ui-ux-design|bundle UX]] and [[/services/shopify-development|Shopify bundle setup]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Good bundles make shopping easier and raise order value at the same time. Start from the customer problem, present bundles honestly, keep single items available, get operations right and measure margin. For related tactics, see [[/blogs/ecommerce-cross-selling|cross-selling]] and [[/blogs/ecommerce-average-order-value|average order value]].",
          "Related: [[/blogs/shopify-bundles-volume-discounts|Shopify bundles]], [[/blogs/ecommerce-average-order-value|average order value]], [[/blogs/ecommerce-upselling|upselling]] and [[/blogs/ecommerce-inventory-management-integration|inventory integration]].",
        ],
      },
    ],
  },
];
