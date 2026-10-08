import type { BlogPost } from "./blog-data";

/**
 * AI-ready business batch (October 2026), part four: AI commerce. Candidates
 * "AI agents change ecommerce funnels" and "product pages when agents are the
 * buyer" were merged; "AI shopping traffic vs organic" and "track AI-referred
 * customers and sales" were merged and positioned on ecommerce revenue (the
 * site-wide setup lives in ai-search-traffic-tracking). "AI-ready product
 * data architecture" became an update to ecommerce-product-data-architecture.
 * Sources checked 2026-10-07: Adobe Analytics via Digital Commerce 360
 * (19 Aug 2026), Shopify Q3 2025 earnings via TechCrunch, GA4 traffic-source
 * documentation. Merged into `posts` in blog-data.ts.
 */

export const aiBusinessPosts4: BlogPost[] = [
  // ---------------------------------------- AI AGENTS AND THE ECOMMERCE FUNNEL
  {
    slug: "ai-agents-ecommerce-funnel",
    title: "How AI Agents Change the Ecommerce Funnel (and What It Means for Product Pages)",
    seoTitle: "How AI Agents Change the Ecommerce Funnel and Product Pages",
    excerpt:
      "How AI assistants compress discovery and comparison, why product pages now serve shoppers and agents, and what to change in data, pages and CRO.",
    category: "CRO",
    banner: "aicommerceflow",
    sceneKind: "funnel",
    bannerAlt:
      "AI-assisted shopping journey: AI query, Product discovery, Comparison, Recommendation (highlighted), Checkout, Attribution.",
    date: "2026-10-07",
    updated: "2026-10-08",
    readingTime: "7 min read",
    relatedServiceSlugs: ["shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "fashion-apparel"],
    relatedSlugs: ["ai-commerce-analytics", "agentic-commerce", "ecommerce-product-data-ai-search"],
    faqs: [
      { q: "How do AI agents change the ecommerce funnel?", a: "Assistants take over much of discovery and comparison: shoppers describe a need, the assistant shortlists products from feeds and pages, and visitors arrive later in the decision, often on a product page, sometimes with checkout happening inside the assistant. The top of the funnel shrinks on your site; product data and the final decision stages matter more." },
      { q: "Does AI traffic convert better?", a: "Adobe Analytics reported in August 2026 that AI-referred visits to US retail sites converted 60 percent better than non-AI traffic and generated 53 percent more revenue per visit. Your own results will differ by category and channel, so measure them." },
      { q: "What do product pages need for AI agents?", a: "The same facts a careful shopper needs, in text and structured data: specifications, dimensions, compatibility, materials, variants, price, availability, delivery, returns and genuine reviews. Pages also need to be crawlable and operable by browser agents." },
      { q: "Will agents replace my website?", a: "No. Agents depend on your feeds, pages and checkout, and most purchases still complete with the merchant. What changes is who arrives and when: more visitors who have already compared options, and some orders placed through assistants." },
      { q: "What should CRO teams test now?", a: "Landing experiences for visitors arriving from AI assistants on product pages, the clarity of decisive facts above the fold, delivery and returns visibility, and checkout reliability. Segment results by AI referral source." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI assistants are compressing the top of the ecommerce funnel. Shoppers describe what they need, the assistant searches feeds and pages, compares options and recommends a shortlist, and visitors arrive later in the decision, often directly on a product page, sometimes after checking out inside the assistant. That shifts where conversion is won: in product data completeness (to be shortlisted at all), in product pages that answer the decisive questions instantly (for people and agents), and in a checkout that works for both. Measure AI-referred visitors separately, because they behave differently.",
        ],
      },
      {
        heading: "The funnel, before and after",
        body: [],
        table: {
          headers: ["Stage", "Traditional journey", "AI-assisted journey", "What wins now"],
          rows: [
            ["Discovery", "Search results, ads, social, category pages", "Shopper describes a need to an assistant", "Complete, accurate product data in feeds and pages"],
            ["Comparison", "Multiple tabs, filters, reviews", "Assistant compares and explains trade-offs", "Clear, specific attributes and honest differences"],
            ["Shortlist", "Saved items, revisits", "Assistant recommends 2–5 products", "Price, availability, delivery and reviews that hold up"],
            ["Product page", "First serious look", "Verification before buying", "Decisive facts above the fold; no surprises"],
            ["Checkout", "On your site", "On your site or inside the assistant", "Reliable checkout; agent-friendly flows; feeds that match"],
            ["Post-purchase", "Your channels", "Your channels; assistant may handle questions", "Clear policies and order data"],
          ],
        },
      },
      {
        heading: "What the data shows so far",
        body: [
          "AI-referred shopping is growing from a small base and behaves differently from other traffic. Adobe Analytics, analysing more than a trillion visits to US retail sites, reported in August 2026 that AI-referral traffic in July was up 62 percent year on year, that those visits converted 60 percent better than non-AI traffic and generated 53 percent more revenue per visit, and that it was the eleventh consecutive month AI traffic had out-converted other traffic. A year earlier, AI traffic converted worse. Shopify said in November 2025 that traffic from AI tools to its stores was up seven times since January that year, and orders attributed to AI-powered search were up eleven times.",
          "The pattern makes sense: by the time an assistant sends someone to your product page, much of the comparison has already happened. The visitor is closer to a decision, and the page's job changes from persuasion to confirmation.",
        ],
        callout: {
          type: "note",
          text: "Aggregate figures describe large US retailers. Your mix of categories, price points and assistants will differ; use them as direction, and measure your own (see [[/blogs/ai-commerce-analytics|how to track AI-referred ecommerce sales]]).",
        },
      },
      {
        heading: "Product pages now serve two audiences",
        body: [
          "Product pages increasingly need to serve humans who browse and agents that interpret product information. They want the same things in different forms: a person scans images, price and key benefits; an agent reads text, structured data and specifications to check constraints (\"fits a 60 cm alcove\", \"vegan\", \"compatible with iPhone 17\"). A page that hides dimensions in an image, puts compatibility in a PDF, or reveals delivery cost only at checkout fails both.",
        ],
        table: {
          headers: ["Element", "For shoppers", "For agents"],
          rows: [
            ["Specifications", "Scannable list near the top", "Text and structured attributes, consistent units"],
            ["Variants", "Clear selector, availability per variant", "Separate, correctly grouped variant data"],
            ["Price and offers", "Visible, honest totals", "Matching feed, structured data and page"],
            ["Delivery and returns", "Shown before checkout", "Stated in text and policy pages"],
            ["Compatibility and fit", "Guides and tools", "Explicit statements an agent can match"],
            ["Reviews", "Genuine, filterable", "Available as text, not only in widgets"],
            ["Interface", "Fast, clear, accessible", "Semantic buttons and labelled options for browser agents"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "If a fact is not in your product data or page text, an assistant cannot use it to recommend you. Product data completeness is becoming a conversion lever, not just a catalogue chore.",
        },
      },
      {
        heading: "What changes for CRO",
        body: [
          "Conversion work shifts weight from the top of the funnel to the bottom and to the data layer.",
        ],
        checklist: [
          "**Segment AI-referred visitors** in analytics and tests; they arrive later in the decision",
          "**Optimize the product page as a landing page**: answer the decisive question without scrolling",
          "**Remove late surprises**: delivery cost, stock, fees and return terms visible early",
          "**Audit feed-page consistency**: mismatched price or availability loses both the agent and the shopper",
          "**Test checkout for reliability** across payment methods; agent-assisted orders fail on fragile steps",
          "**Treat attribute completeness as a metric** tracked per category",
        ],
        cta: {
          title: "Want your store ready for AI-assisted shoppers?",
          description: "ZSpace Labs improves product data, product pages and checkout for both shoppers and AI agents, on Shopify and custom stores. See [[/services/shopify-development|Shopify development]] and our [[/services/cro-audit|CRO audit]].",
        },
      },
      {
        heading: "When the purchase happens inside the assistant",
        body: [
          "Some surfaces now let shoppers buy without visiting your site: Shopify's Agentic Storefronts connect merchants to ChatGPT, Copilot, Google AI Mode and Gemini, and protocols such as UCP and ACP let assistants build carts and hand off or complete checkout with the merchant as seller. In those orders your product page may never be seen; your feed, policies and post-purchase experience carry the whole relationship. See [[/blogs/agentic-commerce|agentic commerce]] and [[/blogs/shopify-agentic-commerce|Shopify agentic commerce]].",
        ],
      },
      {
        heading: "What not to do",
        body: [],
        checklist: [
          "Rewrite every product description in a special \"AI style\"; write precise, factual copy for people",
          "Block AI crawlers or agents by default; you remove yourself from the shortlist (see [[/blogs/ai-crawlers-robots-txt|AI crawlers and robots.txt]])",
          "Judge AI channels on session volume alone; compare revenue and conversion",
          "Assume one assistant's behaviour applies to all",
        ],
      },
      {
        heading: "Architectural implications for ecommerce businesses",
        body: [
          "The traditional path (search, product page, cart, checkout) runs entirely through your website. The agentic path (intent, discovery, comparison, product data, selection, cart, checkout, fulfillment, support) runs partly through someone else's interface and reaches your systems through data and APIs. That shifts investment from page templates towards the systems behind them.",
          "The layer-by-layer architecture is in [[/blogs/agentic-commerce-stack|the agentic commerce stack]]; the protocols in [[/blogs/acp-vs-ucp-vs-mcp|ACP vs UCP vs MCP]]; product data requirements in [[/blogs/ai-product-feeds|AI product feeds]]; and the checkout flow in [[/blogs/agentic-checkout|agentic checkout]].",
        ],
        table: {
          headers: [
            "Stage",
            "Traditional",
            "Agentic",
            "What to build",
          ],
          rows: [
            [
              "Intent and discovery",
              "Search engine, ads, your site search",
              "Assistant interprets intent; searches catalogs and feeds",
              "Complete, factual product data and feeds",
            ],
            [
              "Comparison",
              "Shopper opens tabs",
              "Agent compares attributes across merchants",
              "Structured attributes, policies, shipping facts",
            ],
            [
              "Selection",
              "Product page",
              "Agent picks a variant ID",
              "Stable IDs shared by feed and checkout",
            ],
            [
              "Cart and checkout",
              "Your checkout pages",
              "Checkout session via protocol or handoff to your site",
              "Checkout API with authoritative totals; idempotency",
            ],
            [
              "Payment",
              "Your payment page",
              "Scoped credential from the agent platform",
              "PSP support for delegated or tokenized credentials",
            ],
            [
              "Fulfillment and support",
              "Emails and account pages",
              "Agent may also track, cancel, return",
              "Order APIs, signed webhooks, returns API",
            ],
          ],
        },
      },
      {
        heading: "Conclusion",
        body: [
          "AI assistants are taking over discovery and comparison, and the visitors they send are closer to buying. Win the shortlist with complete, consistent product data; win the visit with product pages that confirm the decision quickly for people and agents; and keep checkout reliable wherever it happens. For the data work, see [[/blogs/ecommerce-product-data-ai-search|how to optimize product data for AI search]].",
        ],
      },
    ],
  },

  // ---------------------------------------- AI COMMERCE ANALYTICS
  {
    slug: "ai-commerce-analytics",
    title: "How to Track AI-Referred Ecommerce Sales: Traffic, Orders and Agent-Placed Purchases",
    seoTitle: "How to Track AI-Referred Ecommerce Sales and Compare to Organic",
    excerpt:
      "How to measure ecommerce sales from ChatGPT, Gemini and AI Overviews: GA4 channels, platform AI orders, surveys and comparisons with organic.",
    category: "Shopify & Ecommerce",
    banner: "aicommercemetrics",
    sceneKind: "analytics",
    bannerAlt:
      "Four AI commerce data sources combined into one revenue, conversion and cohort report: AI referrals (GA4 AI Assistant channel, utm chatgpt.com), Google AI (Search Console, Organic Search), Agent orders (highlighted: platform channel, order source) and Survey (post-purchase influence).",
    date: "2026-10-07",
    updated: "2026-10-08",
    readingTime: "9 min read",
    relatedServiceSlugs: ["cro-audit", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer"],
    relatedSlugs: ["ai-search-traffic-tracking", "ai-agents-ecommerce-funnel", "ecommerce-attribution"],
    faqs: [
      { q: "How do I see sales from ChatGPT in Google Analytics?", a: "GA4's default channel group includes an AI Assistant channel for visits from sources such as ChatGPT, Gemini, Copilot and others, and ChatGPT tags links with utm_source=chatgpt.com. Purchases in those sessions appear as AI Assistant revenue. Orders completed inside an assistant may not create a website session at all." },
      { q: "Are Google AI Overviews counted as AI traffic in GA4?", a: "No. Google's documentation says the AI Assistant channel excludes AI Overviews and AI Mode; those visits are part of Organic Search." },
      { q: "How do I track orders placed inside AI assistants?", a: "Use your commerce platform's order source or sales channel data. Shopify, for example, shows orders from its agentic channels with channel or referrer attribution in the admin. Combine that with website analytics for a full view." },
      { q: "Is AI shopping traffic better than organic?", a: "In aggregate data from Adobe Analytics for large US retailers, AI-referred visits converted better and produced more revenue per visit than non-AI traffic through mid-2026. Volumes are still much smaller than organic search. Compare conversion, revenue per visit and repeat rates on your own store." },
      { q: "What should I report each month?", a: "AI Assistant sessions, conversion rate and revenue; orders from AI sales channels in your platform; AI share of total revenue; top landing products; repeat purchase rate of AI-acquired customers; and post-purchase survey mentions of AI tools." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI-driven ecommerce sales arrive through three routes, and each needs a different measurement. **AI-referred visits** (a shopper clicks from ChatGPT, Gemini, Copilot or Perplexity) appear in GA4's AI Assistant channel with their revenue. **AI search on Google** (AI Overviews and AI Mode) is counted inside Organic Search, with impressions in Search Console's generative AI report. **Orders placed inside assistants** may never touch your website, so they come from your commerce platform's sales channel or order source data. Combine all three with a post-purchase survey, then compare conversion, revenue per visit, average order value and repeat rate against organic search rather than session counts.",
        ],
      },
      {
        heading: "Three routes, three data sources",
        body: [],
        table: {
          headers: ["Route", "Example", "Where to measure", "Blind spot"],
          rows: [
            ["AI-referred visit", "Shopper clicks a product link in ChatGPT", "GA4 AI Assistant channel; utm_source=chatgpt.com", "App visits without referrer land in Direct"],
            ["Google AI features", "Click from an AI Overview or AI Mode", "Search Console generative AI report (impressions); GA4 Organic Search", "No clean split of AI Overview clicks in GA4"],
            ["In-assistant order", "Checkout completed in an assistant via the platform's agentic channel", "Commerce platform orders by sales channel or source", "No website session; no on-site behaviour"],
            ["Influenced but unattributed", "Shopper researched in an assistant, later typed your URL", "Post-purchase survey", "Self-reported; sample only"],
          ],
        },
      },
      {
        heading: "Set up website measurement",
        body: [
          "GA4's default channel group has included an **AI Assistant** channel since May 2026, covering referrals from sources such as ChatGPT, Gemini, DeepSeek, Copilot and Grok; Google states it excludes AI Overviews and AI Mode, which remain in Organic Search. Ecommerce purchase events in those sessions attribute revenue to the channel automatically. Check that your purchase event fires reliably, including on accelerated checkouts, and that channel rules from older custom setups do not override the default. The general setup, including Search Console and server logs, is in our guide to [[/blogs/ai-search-traffic-tracking|measuring AI search traffic]].",
        ],
        checklist: [
          "Confirm the AI Assistant row appears in Traffic acquisition with purchases and revenue",
          "Add session source to split ChatGPT, Gemini, Copilot and Perplexity",
          "Build an exploration of AI Assistant sessions by landing page and product",
          "Compare with Organic Search on conversion rate, revenue per session and average order value",
          "Annotate dates of feed, product data and channel changes",
        ],
      },
      {
        heading: "Track orders placed through assistants",
        body: [
          "When assistants complete or hand off checkout through commerce platforms, the order is created in your store without a normal website session. Your platform's order data is the source of truth. Shopify's Help Center says orders from AI channels in its Agentic Storefronts appear in the admin with channel or referrer attribution, and it provides sales, orders, sessions and conversion reports for those channels. Note that for ChatGPT, Shopify describes customers completing purchase on your own online store checkout inside ChatGPT's in-app browser, so those orders also leave a web session. On other platforms, check how protocol-based orders (UCP, ACP) are labelled, and ask your platform or payment provider how they appear in exports.",
          "Join platform order data with web analytics in a simple monthly report so leadership sees one number for AI-driven revenue, with the routes broken out underneath.",
        ],
        callout: {
          type: "tip",
          text: "Add an order tag or note attribute for agent-placed orders if your platform does not label them, so customer service and returns teams can recognize them too.",
        },
      },
      {
        heading: "What to compare with organic traffic",
        body: [
          "AI channels are still smaller than organic search for most stores, so judge them on quality and trend, not volume.",
        ],
        table: {
          headers: ["Metric", "Why it matters"],
          rows: [
            ["Conversion rate", "AI visitors often arrive later in the decision"],
            ["Revenue per session", "Combines conversion and order value"],
            ["Average order value", "Assistants may favour certain price points or bundles"],
            ["Landing page mix", "Shows which products assistants recommend"],
            ["Return rate", "Tests whether recommendations matched needs"],
            ["Repeat purchase rate (cohort)", "Whether AI-acquired customers stay"],
            ["Share of total revenue", "The channel's real weight, month by month"],
          ],
        },
      },
      {
        heading: "Benchmarks: useful direction, not targets",
        body: [
          "Published aggregates suggest AI-referred shoppers are valuable. Adobe Analytics reported in August 2026 that AI-referral visits to US retail sites converted 60 percent better than non-AI traffic and generated 53 percent more revenue per visit, with time on site up and bounce rates down. These are averages across large retailers; do not set targets from them. Measure your own baseline for three months, then track change.",
        ],
        cta: {
          title: "Want AI channels in your ecommerce reporting?",
          description: "ZSpace Labs sets up GA4, platform order attribution and combined AI revenue reports for Shopify and custom stores. See our [[/services/cro-audit|CRO and analytics audit]].",
        },
      },
      {
        heading: "Fill the gaps with a post-purchase survey",
        body: [
          "Many AI-influenced purchases leave no trail: the shopper researched in an assistant on their phone, then typed your URL on a laptop. A one-question post-purchase survey (\"How did you first hear about us?\" with AI assistants as an option, or a follow-up asking which tool) captures part of that influence. Treat the results as directional and track the trend.",
        ],
      },
      {
        heading: "Turning the data into decisions",
        body: [],
        checklist: [
          "**Products with AI landings but low conversion:** check page facts, stock and delivery visibility",
          "**High AI impressions in Search Console, few clicks:** give visitors a reason to click (tools, detail, offers)",
          "**Strong in-assistant orders, weak site visits:** invest in feed quality and post-purchase experience",
          "**High return rate on AI-acquired orders:** improve sizing, compatibility and specification data",
          "**Rising AI share:** prioritize product data completeness in the categories assistants recommend",
        ],
      },
      {
        heading: "Direct AI Traffic vs AI-Assisted Journeys",
        body: [
          "Keep two ideas separate in reporting. **Direct AI traffic** is measurable: sessions with an AI referrer or tag, orders attributed to an AI sales channel. **AI-assisted journeys** are broader and mostly invisible: a shopper researches in an assistant, later searches your brand or types your URL, and converts as direct or branded organic traffic. Analytics will undercount the second, and no tool currently measures it precisely.",
          "Report the first as fact and estimate the second with triangulation: post-purchase surveys, trends in branded search and direct traffic after AI visibility improves, and product-level patterns (products assistants recommend often tend to show rising direct sales). Present AI-assisted influence as a range with its method stated, never as a precise attributed number. For what happens to those orders operationally, see [[/blogs/agent-placed-orders|orders placed by AI agents]].",
        ],
        table: {
          headers: ["", "Direct AI traffic", "AI-assisted journeys"],
          rows: [
            ["Definition", "Visit or order with an AI referrer, tag or channel", "AI influenced the decision; visit arrives via another channel"],
            ["Measured by", "GA4 AI Assistant channel, utm tags, platform order channel", "Surveys, branded and direct trends, product patterns"],
            ["Confidence", "High", "Directional only"],
            ["How to report", "Exact numbers", "Ranges with method stated"],
          ],
        },
      },
      {
        heading: "Attribution When an Agent Is in the Journey",
        body: [
          "Attribution gets harder as the agent's role grows. When a user clicks an ad, standard click attribution works. When an AI recommends a product and the user clicks through, you see a referral (if the platform passes one). When an AI agent completes the purchase inside the assistant, the user may never visit your site; the order arrives through a platform channel with its own source. Treat the **agent touchpoint** as its own dimension rather than forcing it into first-touch or last-touch models.",
          "A practical reporting framework records, per order: the **order-level channel** (web, app, marketplace, AI platform), the **agent platform** if any, whether checkout happened **in the agent or on your site**, any **referral** or UTM data, **affiliate** or partner involvement, and **survey-reported** influence. First-touch and last-touch views remain useful for web journeys; for agent-completed orders, order-level attribution from the platform channel is the reliable record. For the infrastructure behind these orders, see [[/blogs/agentic-commerce-stack|the agentic commerce stack]] and [[/blogs/agentic-checkout|agentic checkout]].",
        ],
        table: {
          headers: [
            "Journey",
            "What you can observe",
            "Attribution approach",
          ],
          rows: [
            [
              "User clicks an ad",
              "Click ID, session, conversion",
              "Standard click attribution",
            ],
            [
              "AI recommends; user visits your site",
              "Referrer or UTM from the assistant, if passed",
              "AI referral channel; first/last touch where data exists",
            ],
            [
              "AI recommends; user buys later via search",
              "Often nothing direct",
              "Post-purchase survey; brand search trends",
            ],
            [
              "Agent completes purchase in the assistant",
              "Order with platform channel; no site visit",
              "Order-level attribution by agent platform",
            ],
            [
              "Agent buys via an affiliate or partner link",
              "Affiliate ID on order",
              "Affiliate attribution plus agent dimension",
            ],
          ],
        },
      },
      {
        heading: "Conclusion",
        body: [
          "AI-driven ecommerce revenue comes through referred visits, Google's AI features and orders placed inside assistants, and no single tool sees all three. Use GA4's AI Assistant channel for visits, Search Console for Google's AI features, platform sales channel data for agent-placed orders and a survey for influence, then compare quality metrics with organic search. For what to change once you can see the data, read [[/blogs/ai-agents-ecommerce-funnel|how AI agents change the ecommerce funnel]] and [[/blogs/ecommerce-attribution|ecommerce attribution]].",
        ],
      },
    ],
  },
];
