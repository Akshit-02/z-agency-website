import type { BlogPost } from "./blog-data";

/**
 * Ecommerce and D2C design cluster: the ecommerce website design pillar,
 * product page design, category page design, Shopify store design and
 * D2C repeat-purchase UX. Same additive module pattern, merged into
 * `posts` in blog-data.ts.
 */

export const designPosts3: BlogPost[] = [
  // --------------------------------------------------- ECOMMERCE DESIGN PILLAR
  {
    slug: "ecommerce-website-design",
    title: "Ecommerce Website Design: A Complete Guide",
    excerpt:
      "How to design an online store that's easy to shop: homepage, navigation, category pages, search and filters, product pages, cart, checkout, mobile and trust.",
    category: "UI/UX",
    banner: "ecomflow",
    date: "2026-09-25",
    readingTime: "16 min read",
    relatedServiceSlugs: ["ui-ux-design", "shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "fashion-apparel"],
    faqs: [
      { q: "What makes a good ecommerce website design?", a: "Clear navigation and search, product listings that are easy to filter, product pages that answer buyers' questions, a transparent cart, a short checkout, strong mobile usability, fast pages and visible trust signals." },
      { q: "What is ecommerce UX?", a: "The experience of shopping on a site or app: how easily people find products, evaluate them, decide and complete a purchase, and how confident they feel doing it." },
      { q: "Which pages matter most in an ecommerce site?", a: "Category or product listing pages, product pages, cart and checkout carry most of the shopping journey. The homepage and search guide people into them." },
      { q: "How important is mobile in ecommerce design?", a: "Very. A large share of ecommerce traffic is mobile for most stores, so layouts, filters, product media and checkout must be designed for small screens, not adapted from desktop afterward." },
      { q: "Where does Baymard research fit in?", a: "Baymard Institute publishes large-scale ecommerce usability research and guidelines covering product lists, search, product pages, cart and checkout. It's one of the most useful references for ecommerce UX decisions." },
      { q: "Should I use a theme or custom design?", a: "Themes are fast and cost-effective for many stores. Custom design makes sense when brand, catalog complexity or unique features need more than a theme supports. See Shopify theme vs custom development." },
      { q: "How is ecommerce design different from CRO?", a: "Design shapes the shopping experience; CRO measures and tests it to improve conversion. They work best together, but good design comes first." },
      { q: "How is ecommerce design different for D2C brands?", a: "D2C brands usually have smaller catalogs and rely more on brand storytelling, product education and repeat purchases, so product pages and post-purchase experience carry more weight." },
      { q: "How long does an ecommerce redesign take?", a: "It depends on catalog size, integrations, custom features and content. Research and planning upfront usually shorten the overall project." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Good ecommerce website design makes it easy to find, evaluate and buy products with confidence. That means navigation and search organized around how shoppers think, category pages with useful filters and sorting, product pages that answer real buying questions with strong media, clear pricing and visible trust signals, a transparent cart and a short checkout, all designed for mobile first and loading fast. Each page type has its own job; design them as one connected journey rather than isolated templates.",
        ],
      },
      {
        heading: "The Shopping Journey",
        body: [
          "Most purchases follow a path: land on the homepage or a category, browse or search, filter, open products, compare, add to cart and check out. Every step can lose shoppers. This guide covers each page type and links to deeper guides; for the business and platform side, see [[/blogs/d2c-website-development|D2C website development]] and [[/services/shopify-development|Shopify development]].",
        ],
        visual: { variant: "rows", accent: "orange", caption: "Homepage, category, search and filter, product, cart, checkout: one connected journey." },
      },
      {
        heading: "Research to Lean On",
        body: [
          "Baymard Institute's [[https://baymard.com/research|ecommerce UX research]] documents large-scale usability testing of product lists, search, product pages, cart and checkout, and is a valuable reference alongside your own analytics and testing. Recommendations in this guide are general; validate them against your customers.",
        ],
      },
      {
        heading: "Homepage",
        body: [
          "The homepage should communicate what the store sells and why to choose it, and send shoppers into relevant categories quickly: clear value proposition, main category entry points, current highlights and a visible search. Avoid auto-rotating carousels carrying essential messages. See [[/blogs/ecommerce-homepage-ux|ecommerce homepage UX]] for the full design approach and [[/blogs/shopify-homepage-cro|homepage CRO]] for conversion-focused detail.",
        ],
      },
      {
        heading: "Navigation and Taxonomy",
        body: [
          "Build categories around how shoppers look for products, by type, use or audience, not internal inventory codes. Keep labels plain, show top categories clearly, and let products appear in several logical categories where shoppers expect them. See [[/blogs/ecommerce-navigation-design|ecommerce navigation design]] and [[/blogs/information-architecture|information architecture]].",
        ],
      },
      {
        heading: "Category and Product Listing Pages",
        body: [
          "Listing pages help shoppers narrow a range to a shortlist. They need relevant filters for the category, sensible sorting, informative product cards and an efficient way to load more products. The [[/blogs/ecommerce-category-page-design|product listing page guide]] covers this in depth, and [[/blogs/ecommerce-filters|ecommerce filters]] goes deeper on filtering.",
        ],
      },
      {
        heading: "Search",
        body: [
          "Many shoppers search first. Search should handle typos, synonyms and product attributes, suggest as users type, and never dead-end with an empty page. See [[/blogs/ecommerce-search-ux|ecommerce search UX]], and [[/blogs/shopify-search-optimization|search optimization]] for Shopify specifics.",
        ],
      },
      {
        heading: "Product Pages",
        body: [
          "The product page is where decisions happen: media that shows the product clearly, a concise value proposition, price, variants, delivery and returns information, reviews and detailed specifications. See [[/blogs/ecommerce-product-page-design|ecommerce product page design]].",
        ],
        cta: {
          title: "Designing or redesigning an online store?",
          description: "ZSpace Labs designs ecommerce experiences around how your customers shop, from navigation to checkout, and builds them on Shopify or custom stacks.",
        },
      },
      {
        heading: "Cart and Checkout",
        body: [
          "The cart should confirm what's being bought, show total cost including shipping early, and make editing easy. Checkout should be as short as possible, offer guest checkout, familiar payment options and clear error handling. See [[/blogs/ecommerce-cart-ux|cart UX]] and [[/blogs/ecommerce-checkout-ux|checkout UX]] for design, and [[/blogs/shopify-cart-optimization|cart optimization]] and [[/blogs/shopify-checkout-optimization|checkout optimization]] for Shopify.",
        ],
      },
      {
        heading: "Mobile Ecommerce",
        body: [
          "Design for thumbs and small screens: filters in an easy-to-use panel, swipeable product media with zoom, sticky add-to-cart where helpful, large touch targets and wallet payments. See [[/blogs/mobile-ecommerce-ux|mobile ecommerce UX]], [[/blogs/responsive-ui-design|responsive UI design]] and [[/blogs/shopify-mobile-cro|mobile CRO]].",
        ],
      },
      {
        heading: "Trust and Clarity",
        body: [
          "Shoppers need to trust an unfamiliar store: clear shipping and returns policies, contact information, secure payment, genuine reviews and transparent pricing. See [[/blogs/website-trust-and-credibility|website trust and credibility]].",
        ],
      },
      {
        heading: "Personalization and Product Discovery",
        body: [
          "Recently viewed items, relevant recommendations and \"complete the look\" suggestions help shoppers discover more, as long as they're relevant and don't distract from the main task. See [[/blogs/shopify-product-recommendations|product recommendations]].",
        ],
      },
      {
        heading: "Performance and Accessibility",
        body: [
          "Large images, heavy scripts and apps slow stores down; speed is part of the design. Accessible design, with contrast, labels, focus and keyboard support, widens the audience and reduces friction for everyone. See [[/blogs/website-performance-optimization|performance]] and [[/blogs/accessible-ui-ux-design|accessible design]].",
        ],
      },
      {
        heading: "Page-by-Page Summary",
        body: [],
        table: {
          headers: ["Page", "Primary job", "Most common design gaps"],
          rows: [
            ["Homepage", "Orient and route shoppers", "Vague value proposition, carousel-dependent messaging"],
            ["Category", "Narrow choices to a shortlist", "Weak filters, uninformative product cards"],
            ["Search", "Find specific products fast", "No typo tolerance, empty results pages"],
            ["Product", "Answer questions and build confidence", "Poor images, hidden shipping/returns, thin detail"],
            ["Cart", "Confirm and reassure", "Late cost surprises, hard to edit"],
            ["Checkout", "Complete purchase with minimum effort", "Forced accounts, long forms, unclear errors"],
          ],
        },
      },
      {
        heading: "Design, Then Measure",
        body: [
          "Design decisions should be checked against real behavior. Usability testing finds problems before launch; analytics and experiments measure impact after. See [[/blogs/ux-audit|UX audit]] and ZSpace Labs' [[/services/cro-audit|CRO]] service for the measurement side.",
        ],
        cta: {
          title: "Want your store's shopping experience reviewed?",
          description: "Talk to ZSpace Labs about ecommerce [[/services/ui-ux-design|UI/UX design]], [[/services/shopify-development|Shopify builds]] and [[/services/cro-audit|conversion work]].",
        },
      },
      {
        "heading": "Ecommerce Design by Product Category",
        "body": [
          "Store design varies with what you sell. These guides cover category-specific layouts, product pages and trust signals:"
        ],
        "checklist": [
          "[[/blogs/fashion-ecommerce-website-design|Fashion Ecommerce Website Design]]",
          "[[/blogs/beauty-ecommerce-website-design|Beauty Ecommerce Website Design]]",
          "[[/blogs/jewelry-ecommerce-website-design|Jewelry Ecommerce Website Design]]",
          "[[/blogs/electronics-ecommerce-website-design|Electronics Ecommerce Website Design]]",
          "[[/blogs/furniture-ecommerce-website-design|Furniture Ecommerce Website Design]]",
          "[[/blogs/food-ecommerce-website-design|Food Ecommerce Website Design]]",
          "[[/blogs/sports-ecommerce-website-design|Sports Ecommerce Website Design]]",
          "[[/blogs/pet-ecommerce-website-design|Pet Ecommerce Website Design]]",
          "[[/blogs/baby-products-ecommerce-website-design|Baby Products Ecommerce Website Design]]",
          "[[/blogs/home-decor-ecommerce-website-design|Home Decor Ecommerce Website Design]]",
          "[[/blogs/automotive-ecommerce-website-design|Automotive Ecommerce Website Design]]",
          "[[/blogs/health-wellness-ecommerce-website-design|Health & Wellness Ecommerce Website Design]]",
          "[[/blogs/luxury-ecommerce-website-design|Luxury Ecommerce UX]]",
          "[[/blogs/skincare-ecommerce-website-design|Skincare Ecommerce Website Design]]",
          "[[/blogs/b2b-ecommerce-website-design|B2B Ecommerce Website Design]]"
        ]
      },
      {
        heading: "Conclusion",
        body: [
          "Ecommerce design is about removing effort and doubt at every step of the shopping journey. Structure the catalog around shoppers, make listings easy to narrow, answer questions on product pages, keep cart and checkout transparent and short, and design for mobile and speed from the start. For category-specific guidance, see our guides to [[/blogs/fashion-ecommerce-website-design|fashion]], [[/blogs/beauty-ecommerce-website-design|beauty]], [[/blogs/jewelry-ecommerce-website-design|jewelry]], [[/blogs/electronics-ecommerce-website-design|electronics]] and [[/blogs/furniture-ecommerce-website-design|furniture]] ecommerce design.",
        ],
      },
    ],
  },

  // --------------------------------------------------- PRODUCT PAGE DESIGN
  {
    slug: "ecommerce-product-page-design",
    title: "Ecommerce Product Page Design: Complete UX Guide",
    excerpt:
      "How to design product pages that answer buying questions: media, value proposition, price, variants, delivery and returns, reviews, details and the purchase area, including D2C considerations.",
    category: "UI/UX",
    banner: "pdpflow",
    date: "2026-09-25",
    readingTime: "15 min read",
    relatedServiceSlugs: ["ui-ux-design", "shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "beauty-personal-care"],
    faqs: [
      { q: "What should an ecommerce product page include?", a: "Clear product media, a descriptive name and short value proposition, price, variant selection, add-to-cart, delivery and returns information, reviews, detailed specifications, and relevant cross-sells." },
      { q: "How many product images should a product page have?", a: "Enough to answer visual questions: multiple angles, close-ups of materials or details, the product in use or on a person, and something that shows scale. Quality and coverage matter more than a fixed number." },
      { q: "Where should the add-to-cart button go?", a: "Near the price and variant selection, visible without scrolling on desktop, and easy to reach on mobile, sometimes as a sticky bar once the user scrolls." },
      { q: "Should shipping and returns information be on the product page?", a: "Yes. Delivery cost, timing and return terms are key buying questions; hiding them until checkout causes hesitation and abandonment." },
      { q: "How should variants like size and color be designed?", a: "Show available options clearly, as swatches for color and buttons for sizes, indicate unavailable combinations, update images and price when options change, and link to a size guide where relevant." },
      { q: "How important are reviews on product pages?", a: "Very. Genuine reviews help shoppers judge quality and fit. Show the average rating near the top and let shoppers filter and read detailed reviews." },
      { q: "How is a D2C product page different?", a: "D2C brands often sell fewer products with more explanation needed, so pages carry more product education, brand story, ingredients or materials, and subscription or bundle options." },
      { q: "How long should product descriptions be?", a: "As long as needed to answer real questions, structured so it can be scanned: key benefits first, then specifications, care and details." },
      { q: "How is this different from product page optimization?", a: "This guide covers the design and structure of product pages. The Shopify product page optimization and audit guides focus on conversion testing and auditing live Shopify pages." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A well-designed product page answers every question a shopper has before buying, in the order they have it. Lead with strong media and a clear name and value proposition, show price and variants with an obvious add-to-cart, surface delivery, returns and trust information near the buy button, then support the decision with reviews, detailed specifications and relevant related products. On mobile, keep media swipeable and the purchase action easy to reach. For D2C brands, product education and brand story carry extra weight.",
        ],
      },
      {
        heading: "The Product Page's Job",
        body: [
          "The product page replaces the in-store experience: seeing, touching, asking questions and checking reviews. Every unanswered question becomes a reason to leave or return a product later. This guide covers page structure and design; for conversion testing on live Shopify stores, see [[/blogs/shopify-product-page-optimization|product page optimization]] and the [[/blogs/shopify-product-page-audit|product page audit]].",
        ],
        visual: { variant: "rows", accent: "blue", caption: "Media, value proposition, price, variants, trust, details, purchase: the anatomy of a product page." },
      },
      {
        heading: "Product Page Anatomy",
        body: [],
        table: {
          headers: ["Element", "Shopper question it answers", "Design notes"],
          rows: [
            ["Media", "What exactly is it?", "Multiple angles, detail, in use, scale, zoom, video where useful"],
            ["Name and value proposition", "Is this what I'm looking for?", "Plain name, one or two key benefits"],
            ["Price", "What will it cost?", "Clear, with discounts and units explained"],
            ["Variants", "Is it available in what I need?", "Swatches, sizes, availability, size guide"],
            ["Purchase area", "How do I buy it?", "Prominent add-to-cart, quantity, wallet options"],
            ["Delivery and returns", "When will it arrive, and can I return it?", "Cost, timing, return terms near the buy button"],
            ["Reviews", "Is it good?", "Rating summary high up, filterable detailed reviews"],
            ["Details and specifications", "Will it work for me?", "Scannable sections, materials, dimensions, care"],
            ["Related products", "What else might I need?", "Relevant accessories or alternatives, not distractions"],
          ],
        },
      },
      {
        heading: "Media",
        body: [
          "Images do most of the explaining. Show the product from multiple angles, close-ups of materials and details, the product in context or on a person, and something that conveys scale. Support zoom on desktop and pinch or swipe on mobile. Baymard's [[https://baymard.com/research/product-page|product page research]] covers imagery and other product page elements in depth, and ZSpace Labs' [[/blogs/ecommerce-product-image-design|product image design guide]] covers galleries in detail.",
        ],
      },
      {
        heading: "Name, Value Proposition and Price",
        body: [
          "Use a descriptive product name, then one or two lines explaining the key benefit. Show price clearly, including unit pricing where relevant and honest presentation of any discounts. Surprise costs later destroy trust built here.",
        ],
      },
      {
        heading: "Variants",
        body: [
          "Use visual swatches for colors and clear buttons for sizes. Indicate unavailable combinations before selection, update images and price when options change, and link to a size or fit guide next to the selector. Make it obvious when a required option hasn't been chosen.",
        ],
        cta: {
          title: "Redesigning your product pages?",
          description: "ZSpace Labs designs product pages around real buying questions, from media and variants to delivery and reviews.",
        },
      },
      {
        heading: "The Purchase Area",
        body: [
          "The add-to-cart button should be the most prominent action, near price and variants. On mobile, a sticky add-to-cart bar can help on long pages. Offer express wallets where appropriate, and give clear feedback when an item is added.",
        ],
      },
      {
        heading: "Delivery, Returns and Trust",
        body: [
          "Put delivery cost and timing, return terms and key trust signals near the purchase area, not only in the footer or checkout. These are buying questions, not legal fine print. See [[/blogs/website-trust-and-credibility|trust and credibility]].",
        ],
      },
      {
        heading: "Reviews",
        body: [
          "Show the average rating and count near the top, linked to full reviews. Let shoppers sort and filter reviews and see photos where available. Genuine reviews, including critical ones, are more credible than a wall of five stars. See [[/blogs/ecommerce-product-reviews-ux|product reviews UX]] and [[/blogs/shopify-social-proof|social proof]].",
        ],
      },
      {
        heading: "Details and Specifications",
        body: [
          "Structure long information into scannable sections or tabs: benefits, specifications, materials or ingredients, dimensions, care, FAQs. Avoid hiding essential information in collapsed sections that shoppers may never open; keep the most decisive details visible.",
        ],
      },
      {
        heading: "Designing Product Pages for D2C Brands",
        body: [
          "D2C brands usually sell a focused range to customers who need more convincing, so product pages carry more education: what the product does, how to use it, ingredients or materials, and why it's different. Bundles, subscriptions and variant packs also need clear presentation. Keep brand storytelling supportive of the purchase, not a barrier to it. See [[/blogs/d2c-website-development|D2C website development]] and [[/blogs/shopify-bundles-volume-discounts|bundles]].",
        ],
      },
      {
        heading: "Mobile Product Pages",
        body: [],
        checklist: [
          "Swipeable media with visible position indicators and pinch zoom",
          "Price, variants and add-to-cart reachable without long scrolling",
          "Size guide opens without losing selections",
          "Delivery and returns summary visible near the buy button",
          "Collapsible details that don't hide decisive information",
          "Fast image loading on mobile connections",
        ],
      },
      {
        heading: "Common Product Page Mistakes",
        body: [],
        checklist: [
          "Too few images, or images that don't show scale or detail",
          "Shipping costs and returns hidden until checkout",
          "Unavailable variants only revealed after selection",
          "Reviews buried at the bottom",
          "Dense, unstructured descriptions",
          "Cross-sells that compete with the main purchase",
        ],
        cta: {
          title: "Want your product pages reviewed?",
          description: "Talk to ZSpace Labs about [[/services/ui-ux-design|product page design]], [[/services/shopify-development|Shopify implementation]] and [[/services/cro-audit|conversion testing]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A product page succeeds when shoppers stop having questions. Show the product clearly, make price and variants unambiguous, surface delivery, returns and reviews near the buy button, and structure the detail. For the rest of the journey, see the [[/blogs/ecommerce-website-design|ecommerce website design guide]]. For D2C-specific merchandising, see [[/blogs/d2c-product-page-optimization|D2C product page optimization]]. For search visibility of the same page, see [[/blogs/shopify-product-seo|Shopify product SEO]] and [[/blogs/product-structured-data-ecommerce|product structured data]].",
          "For related guides, see [[/blogs/subscription-product-page-design|subscription product page design]].",
        ],
      },
    ],
  },

  // -------------------------------------------------- CATEGORY PAGE DESIGN
  {
    slug: "ecommerce-category-page-design",
    title: "Ecommerce Product Listing Page Design: UX Best Practices",
    seoTitle: "Ecommerce Product Listing Page Design: UX Best Practices",
    excerpt: "Product listing page design: anatomy, grid vs list, product cards, images, prices, badges, variants, ratings, sorting, filters, loading and responsive layouts.",
    category: "UI/UX",
    banner: "plpanatomy",
    bannerAlt:
      "Product listing page wireframe: breadcrumb, category title and item count, filter panel, applied filters, sort control, a grid of product cards with image, name, price, rating and swatches, and a load more button.",
    date: "2026-09-25",
    updated: "2026-09-29",
    readingTime: "16 min read",
    relatedServiceSlugs: ["ui-ux-design", "shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "fashion-apparel", "d2c-consumer"],
    faqs: [
      { q: "What is a product listing page?", a: "A page showing a set of products, usually a category, collection or search results, where shoppers browse, filter and sort to find items to view in detail. It's often shortened to PLP." },
      { q: "What is the difference between a PLP and a PDP?", a: "A product listing page (PLP) shows many products so shoppers can compare and narrow down. A product detail page (PDP) shows one product in depth so shoppers can decide and buy." },
      { q: "Should a listing page use a grid or a list view?", a: "Grids suit visual products where the image drives the choice. List views suit products compared on specifications. Some stores offer both, defaulting to the one that fits the category." },
      { q: "What should a product card show?", a: "A clear image, product name, price, and a few key differentiators such as available colours, rating and review count, availability or a defining specification, without overcrowding." },
      { q: "Is pagination, infinite scroll or load more best?", a: "Baymard Institute's testing has found a \"Load more\" button, combined with lazy loading, generally performs best: pagination feels slow, and infinite scroll can overwhelm shoppers and hide the footer." },
      { q: "How many products should a listing page load?", a: "Baymard recommends loading around 50 to 100 products by default on desktop for spec-driven products, 100 to 150 for visually driven products, and 15 to 30 on mobile, then offering “Load more”." },
      { q: "What sorting options should be offered?", a: "Relevance or featured, price low to high and high to low, newest, and rating are common. Default to the order most useful for the category." },
      { q: "Should out-of-stock products appear on listing pages?", a: "It depends on whether they'll return. Clearly label them and consider moving them lower or offering an in-stock filter, so shoppers don't open products they can't buy." },
      { q: "How should listing pages work on mobile?", a: "Use one or two columns depending on how visual the products are, sticky filter and sort controls, a full-screen filter panel, a smaller initial batch with “Load more”, and keep the shopper's position when they return from a product." },
      { q: "What happens when filters return no results?", a: "Show which filters caused it and offer to remove them, suggest related categories, and avoid dead-end pages." },
      { q: "How is this different from the Shopify collection page audit?", a: "That guide is a checklist for auditing Shopify collection pages. This one covers the design principles behind listing pages on any platform." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A good product listing page helps shoppers narrow a range to a shortlist quickly. Give it a clear title, relevant filters with a visible applied-filter summary, and sensible sorting. Use consistent product cards showing image, name, price, rating, available variants and availability. Choose grid or list layout to suit the products, load more with a “Load more” button rather than heavy pagination, and show loading states that don't shift the layout. Design a mobile layout with sticky filter and sort controls, keep the shopper's place when they return from a product, and never dead-end on empty results.",
        ],
      },
      {
        heading: "What Is a Product Listing Page?",
        body: [
          "This is the hub for listing-page UX. Deep dives cover [[/blogs/ecommerce-product-cards|product cards]], [[/blogs/ecommerce-product-sorting|sorting]], [[/blogs/ecommerce-filters|filters]], [[/blogs/ecommerce-product-comparison|comparison]], [[/blogs/ecommerce-quick-view|quick view]] and [[/blogs/ecommerce-empty-states|empty states]]. Baymard Institute's benchmark found that 58% of desktop and 78% of mobile ecommerce sites had “poor” to “mediocre” product list UX ([[https://baymard.com/blog/current-state-product-list-and-filtering|Baymard Institute]]).",
          "A product listing page (PLP) shows a set of products: a category, a collection, a brand, a sale or search results. Shoppers usually arrive with partial intent. They know the type of product, not the exact one, so the page's job is to help them compare, narrow and choose which products to open.",
          "That makes it different from the [[/blogs/ecommerce-product-page-design|product detail page]], which helps shoppers decide on one item. Baymard Institute's [[https://baymard.com/blog/product-listing-page-plp-ux|product listing research]] is a valuable reference; for auditing a live Shopify store, see the [[/blogs/shopify-collection-page-audit|Shopify collection page audit]].",
        ],
      },
      {
        heading: "Anatomy of a Listing Page",
        body: ["The diagram at the top of this article shows the main parts. Each has a distinct job."],
        table: {
          headers: ["Element", "Job"],
          rows: [
            ["Breadcrumb", "Show where the category sits and offer a route to broader categories"],
            ["Title and item count", "Confirm what's shown and how much there is"],
            ["Short introduction (optional)", "Help with unfamiliar categories; keep it brief so products stay near the top"],
            ["Filters", "Narrow the set by attributes that matter in this category"],
            ["Applied filters", "Show what's active and allow quick removal"],
            ["Sort control", "Reorder the set by relevance, price, newest or rating"],
            ["Product grid or list", "Let shoppers compare products at a glance"],
            ["Load more", "Reveal more products without losing position"],
          ],
        },
      },
      {
        heading: "Grid vs List View",
        body: [],
        table: {
          headers: ["", "Grid", "List"],
          rows: [
            ["Best for", "Visual products: fashion, homeware, beauty", "Spec-driven products: electronics, parts, B2B"],
            ["Emphasis", "Images", "Details and specifications"],
            ["Density", "More products per screen", "More information per product"],
            ["Watch out for", "Too little information to compare", "Weak imagery and slow scanning"],
          ],
        },
      },
      {
        heading: "Product Cards",
        body: [
          "Cards should let shoppers compare without opening every product, and they must be consistent so the eye can scan the grid. A typical card includes:",
        ],
        checklist: [
          "A clear primary image, consistent in background, crop and aspect ratio",
          "Product name, in full or truncated with care",
          "Price, including sale and variant pricing where relevant",
          "Rating and review count, where reviews exist",
          "Available colours or variants",
          "Availability or delivery information when it affects the choice",
          "One or two key attributes for spec-driven categories",
        ],
      },
      {
        heading: "Product Information on Cards",
        body: [
          "Show the information shoppers use to choose between items in that category, and no more. For clothing, colour options and price may be enough; for laptops, screen size, processor and storage matter. Baymard's research notes that shoppers expect to be able to filter by the information shown on cards, so align card attributes with available filters.",
          "Avoid badges on every product. When everything is “bestseller” or “new”, nothing is.",
        ],
      },
      {
        heading: "Images on Cards",
        body: [
          "Primary images should identify the product at small sizes. An alternate image on hover (desktop) or a swipe gesture (mobile) can show another angle, but it shouldn't be the only way to see important information. When a shopper clicks a colour swatch on a card, update the card image to that colour. See [[/blogs/ecommerce-product-image-design|ecommerce product image design]].",
        ],
      },
      {
        heading: "Pricing",
        body: [
          "Show prices clearly and consistently. For sale items, show the current price prominently with the original price clearly marked. For products whose price varies by option, show a range or “From” price. Where regulations require unit pricing, such as price per kilo or litre, include it on the card.",
        ],
      },
      {
        heading: "Ratings",
        body: [
          "Show the star rating with the number of reviews, so a single five-star review isn't mistaken for a strong signal. Hide ratings on products without reviews rather than showing empty stars. See [[/blogs/ecommerce-product-reviews-ux|ecommerce product reviews UX]].",
        ],
      },
      {
        heading: "Variants and Swatches",
        body: [
          "Show available colours as small swatches, with a “+3” indicator when there are more than fit. Swatches should be large enough to tap on mobile and should update the card image. If a product comes in many sizes, it's usually better to support size filtering than to list sizes on the card.",
        ],
      },
      {
        heading: "Availability",
        body: [
          "Label out-of-stock and low-stock items on the card. Decide deliberately whether unavailable products appear at all: products that will return can stay, clearly labelled and lower in the list; discontinued ones should go. An in-stock filter and delivery-date filters help shoppers with deadlines.",
        ],
      },
      {
        heading: "Sorting",
        body: [
          "Offer common sort options (relevance or featured, price both directions, newest, rating) and choose a default that suits the category. Make the current sort visible, keep it when filters change and when shoppers return from a product. Sort by rating should account for the number of reviews, or a product with one review can outrank one with hundreds.",
        ],
        cta: {
          title: "Are shoppers struggling to find products on your store?",
          description: "ZSpace Labs designs category pages, filters and taxonomies around how your customers actually shop.",
        },
      },
      {
        heading: "Filtering",
        body: [
          "Filters are the main tool for narrowing. Choose filter types per category, show counts, allow combining filters, show applied filters prominently with one-tap removal, and order filter groups by importance. Filtering deserves its own guide: see [[/blogs/ecommerce-filters|ecommerce filters and faceted navigation]] for filter types, logic, applied filters, mobile panels and persistence.",
        ],
      },
      {
        heading: "Pagination, Load More and Infinite Scroll",
        body: [
          "Baymard's [[https://baymard.com/blog/external-load-more-vs-pagination-vs-infinite-scrolling|testing of loading methods]] found “Load more” generally performed best: users perceived pagination as slow and were discouraged by many page links, while endless scrolling could overwhelm them and made the footer hard to reach. Baymard also recommends [[https://baymard.com/blog/number-of-items-loaded-by-default|loading larger batches by default]]: around 50 to 100 products on desktop for spec-driven products, 100 to 150 for visually driven ones and 15 to 30 on mobile, combined with lazy loading so performance doesn't suffer.",
        ],
        table: {
          headers: ["Method", "Strengths", "Weaknesses"],
          rows: [
            ["Pagination", "Clear position, easy to return", "Feels slow; small tap targets on mobile"],
            ["Infinite scroll", "Effortless browsing", "Can overwhelm; footer hard to reach; position lost"],
            ["Load more button", "User control with continuous browsing", "Needs sensible batch sizes and lazy loading"],
          ],
        },
      },
      {
        heading: "Loading States and Performance",
        body: [
          "When filters or sorting change, show a loading state on the product area rather than blanking the page, and keep filter controls usable. Reserve space for card images so the grid doesn't jump as they load, load the first rows immediately and lazy-load the rest. Store filters, sort and loaded batches in the URL so the back button returns shoppers to exactly where they were. See [[/blogs/website-performance-optimization|website performance optimization]].",
        ],
      },
      {
        heading: "Mobile Listing Layouts",
        body: [
          "On mobile, choose one column for products that need details on the card and two columns for visual products. Put Filter and Sort controls in a sticky bar at the top of the list, open filters in a full-screen panel with a result count on the apply button, and show applied filters as removable chips. Keep card text readable and tap targets generous. See [[/blogs/mobile-ecommerce-ux|mobile ecommerce UX]].",
        ],
      },
      {
        heading: "Product Comparison",
        body: [
          "For spec-driven categories such as electronics or appliances, let shoppers select products to compare side by side, with differences highlighted. Keep comparison optional and lightweight: a checkbox on the card and a persistent compare tray. For visual categories, a good grid and clear cards usually make formal comparison unnecessary.",
        ],
      },
      {
        heading: "Category Structure and Navigation",
        body: [
          "Listing pages depend on a sound taxonomy: categories and attributes that match shoppers' language and product data clean enough to filter. For broad departments, an intermediary page that helps shoppers choose a subcategory can come before the product list. See [[/blogs/ecommerce-navigation-design|ecommerce navigation design]] and [[/blogs/information-architecture|information architecture]].",
        ],
      },
      {
        heading: "Empty and No-Result States",
        body: [
          "When filters leave no products, say which filters caused it and offer to remove them, suggest related categories and keep the shopper moving. The same applies to search results pages; see [[/blogs/ecommerce-search-ux|ecommerce search UX]].",
        ],
      },
      {
        heading: "Accessible Listing Pages",
        body: [
          "Mark up products as a list, give each card one clear link with the product name as its accessible name, and expose price, rating and availability as text. Announce updated result counts when filters change, and keep keyboard focus in a sensible place after loading more products rather than jumping to the top.",
        ],
      },
      {
        heading: "Building a Listing Page Component System",
        body: [
          "Listing pages are built from a small set of components that repeat across every category: product cards, badges, swatches, price displays, rating summaries, filter panels, applied-filter chips, sort controls and loading patterns. Define them in a design system with states (loading, sold out, sale, new, selected) and responsive behaviour, so every category stays consistent and improvements roll out everywhere. See [[/blogs/design-systems-for-teams-that-move-fast|design systems]] and [[/blogs/ecommerce-product-cards|product cards]].",
        ],
        table: {
          headers: ["Component", "States to design"],
          rows: [
            ["Product card", "Default, hover/focus, sold out, on sale, new, loading"],
            ["Badge", "Sale, new, low stock, sustainable (substantiated), exclusive"],
            ["Swatch", "Default, selected, unavailable"],
            ["Price", "Single, range, sale with original, member price"],
            ["Filter panel", "Collapsed, expanded, applied, zero results"],
            ["Load more / pagination", "Idle, loading, end of results"],
          ],
        },
      },
      {
        heading: "Design vs Optimization",
        body: [
          "This guide covers the design and UX system for listing pages. For the measured, ongoing process of improving specific categories (diagnosing structure, sorting, filters and SEO with data and tests), see [[/blogs/ecommerce-category-page-optimization|category page optimization]].",
        ],
      },
      {
        heading: "Listing Page Checklist",
        body: [],
        checklist: [
          "Clear title, item count and breadcrumb",
          "Grid or list layout chosen for the category",
          "Consistent cards: image, name, price, rating, variants, availability",
          "Filters match how shoppers choose; applied filters visible and removable",
          "Sensible default sort that persists",
          "Load more with lazy loading and sensible batch sizes",
          "Loading states without layout shift; position kept on return",
          "Mobile layout with sticky filter and sort",
          "Helpful no-results state",
          "Accessible cards and announced result updates",
        ],
        cta: {
          title: "Want your product listings reviewed?",
          description: "Talk to ZSpace Labs about [[/services/ui-ux-design|ecommerce UX]], [[/services/shopify-development|Shopify implementation]] and [[/services/cro-audit|testing]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Product listing pages succeed when shoppers can narrow quickly and confidently: a clear page structure, informative and consistent cards, relevant filters, useful sorting, efficient loading and a mobile layout built for thumbs. Pair them with strong [[/blogs/ecommerce-product-page-design|product pages]] to complete the path to purchase. For the search side of the same pages, see [[/blogs/ecommerce-category-page-seo|ecommerce category page SEO]].",
        ],
      },
    ],
  },

  // ------------------------------------------------------- SHOPIFY STORE DESIGN
  {
    slug: "shopify-store-design",
    title: "Shopify Store Design: A Practical Guide to Themes, Templates and UX",
    excerpt:
      "How to design a Shopify store: choosing a theme, working with Online Store 2.0 templates, sections and blocks, designing key templates, and knowing when custom design is needed.",
    category: "Shopify & Ecommerce",
    banner: "shopifyflow",
    date: "2026-09-25",
    readingTime: "13 min read",
    relatedServiceSlugs: ["shopify-development", "ui-ux-design", "cro-audit"],
    relatedIndustrySlugs: ["d2c-consumer", "fashion-apparel", "beauty-personal-care"],
    faqs: [
      { q: "How do I design a Shopify store?", a: "Define your brand and shopping journey first, choose a theme whose structure fits your catalog, customize templates with sections and blocks, design key pages (home, collection, product, cart), then test on mobile and measure." },
      { q: "What is Online Store 2.0?", a: "Shopify's theme architecture using JSON templates, where merchants can add, remove and reorder sections on most pages in the theme editor, and apps can add content through app blocks." },
      { q: "What are sections and blocks in Shopify?", a: "Sections are reusable modules of a page, such as a hero or product grid. Blocks are smaller configurable elements inside sections, such as a heading, image or button." },
      { q: "Should I use a free or paid Shopify theme?", a: "Either can work. Choose based on how well the theme's structure, features and performance fit your catalog and brand, not price alone." },
      { q: "When does a Shopify store need custom design?", a: "When the brand, catalog complexity or required features go beyond what a theme supports cleanly, or when heavy theme modifications become hard to maintain." },
      { q: "Do apps affect Shopify store design?", a: "Yes. Apps add interface elements and often scripts that can slow pages and clutter layouts. Prefer app blocks that fit the theme, and audit apps regularly." },
      { q: "How do I keep a Shopify store fast?", a: "Optimize images, limit apps and custom scripts, use the theme's built-in features where possible, and monitor Core Web Vitals." },
      { q: "Can I redesign a Shopify store without rebuilding it?", a: "Often yes. Many redesigns change templates, sections and styling within the existing theme. See the Shopify store redesign guide for when a bigger change is needed." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Designing a Shopify store starts with the brand and shopping journey, not the theme gallery. Choose a theme whose structure fits your catalog, then shape each template, including home, collection, product, cart and content pages, using Online Store 2.0 sections and blocks. Keep the design system consistent, prefer app blocks that fit the theme, protect page speed, and design mobile first. Go custom when your brand, catalog or features outgrow what theme customization can support cleanly.",
        ],
      },
      {
        heading: "How Shopify Themes Are Structured",
        body: [
          "Shopify's [[https://shopify.dev/docs/storefronts/themes/architecture|theme architecture]] is built around templates, sections and blocks. With Online Store 2.0, [[https://shopify.dev/docs/storefronts/themes/architecture/templates/json-templates|JSON templates]] define which sections appear on a page, and merchants can add, remove and reorder sections in the theme editor. Blocks are configurable elements within sections, and app blocks let apps add content without editing theme code.",
        ],
        visual: { variant: "rows", accent: "orange", caption: "Theme, JSON templates, sections, blocks and app blocks combine into the storefront." },
      },
      {
        heading: "Start With the Shopping Journey",
        body: [
          "Before choosing a theme, map how your customers shop: do they browse broad categories, search for specific items, or buy a few hero products repeatedly? That decides what matters on each template. The [[/blogs/ecommerce-website-design|ecommerce website design guide]] covers the full journey.",
        ],
      },
      {
        heading: "Choosing a Theme",
        body: [],
        checklist: [
          "Structure fits your catalog size and navigation depth",
          "Product page supports your media, variants and content needs",
          "Collection pages support the filters you need",
          "Performance is good on mobile with realistic content",
          "Sections and blocks cover the layouts you'll need",
          "Accessibility basics are sound: contrast, focus, labels",
          "Theme is actively maintained",
        ],
      },
      {
        heading: "Designing Key Templates",
        body: [],
        table: {
          headers: ["Template", "Design focus", "Deeper guide"],
          rows: [
            ["Home", "Brand, value proposition, category entry points", "[[/blogs/shopify-homepage-cro|Homepage CRO]]"],
            ["Collection", "Filters, sorting, product cards", "[[/blogs/ecommerce-category-page-design|Category page design]]"],
            ["Product", "Media, variants, delivery, reviews", "[[/blogs/ecommerce-product-page-design|Product page design]]"],
            ["Cart", "Cost clarity, editing, reassurance", "[[/blogs/shopify-cart-optimization|Cart optimization]]"],
            ["Content pages", "Brand story, guides, policies", "[[/blogs/website-trust-and-credibility|Trust and credibility]]"],
          ],
        },
      },
      {
        heading: "Brand and Design System",
        body: [
          "Define typography, color, spacing, buttons and image style once in theme settings and apply them consistently. A lightweight [[/blogs/design-systems-for-teams-that-move-fast|design system]] keeps new sections and campaigns on-brand as the store grows.",
        ],
        cta: {
          title: "Designing or redesigning a Shopify store?",
          description: "ZSpace Labs designs Shopify stores around your customers' shopping journey and builds them with maintainable themes and sections.",
        },
      },
      {
        heading: "Apps and Performance",
        body: [
          "Apps add reviews, subscriptions, bundles and more, but each adds interface and often scripts. Prefer app blocks that sit within the theme's layout, remove apps you no longer use, and check performance after every addition. See [[/blogs/shopify-speed-checklist-before-you-add-another-app|the app checklist]] and [[/blogs/shopify-core-web-vitals-performance-guide|Shopify performance]].",
        ],
      },
      {
        heading: "Mobile-First Shopify Design",
        body: [
          "Design templates at mobile width first: navigation, filters, product media and add-to-cart must work with a thumb. Preview every section on a real phone in the theme editor before publishing. See [[/blogs/shopify-mobile-cro|Shopify mobile CRO]].",
        ],
      },
      {
        heading: "Theme Customization vs Custom Design",
        body: [
          "Theme customization is right for most stores. Custom design and development become worthwhile when the brand needs a distinctive experience, the catalog needs unusual navigation or configuration, or customizations are piling up and becoming fragile. See [[/blogs/shopify-theme-vs-custom-development|Shopify theme vs custom development]] and [[/blogs/shopify-store-redesign-guide|when to redesign a Shopify store]].",
        ],
      },
      {
        heading: "Common Shopify Design Mistakes",
        body: [],
        checklist: [
          "Choosing a theme for its demo imagery rather than its structure",
          "Too many sections on the homepage",
          "Inconsistent styles from ad-hoc section settings",
          "App widgets stacked on product pages",
          "Designing on desktop and checking mobile last",
          "Heavy custom code that breaks on theme updates",
        ],
        cta: {
          title: "Want an expert review of your Shopify store design?",
          description: "Talk to ZSpace Labs about [[/services/shopify-development|Shopify development]] and [[/services/ui-ux-design|ecommerce UX]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Good Shopify store design combines a clear shopping journey, a theme whose structure fits, consistent styling, disciplined use of apps and mobile-first templates. Customize within the theme where you can, and go custom when the business genuinely needs it. For the full build, see [[/blogs/shopify-store-development|Shopify store development]] and [[/blogs/shopify-theme-development|Shopify theme development]].",
        ],
      },
    ],
  },

  // --------------------------------------------------- D2C REPEAT PURCHASE UX
  {
    slug: "d2c-repeat-purchase-ux",
    title: "D2C Repeat Purchase UX: Designing Accounts, Reorders and Subscriptions",
    excerpt:
      "How D2C brands can design the experience after the first order: accounts, order tracking, quick reorders, subscriptions, replenishment reminders and loyalty.",
    category: "UI/UX",
    banner: "d2cflow",
    date: "2026-09-25",
    readingTime: "12 min read",
    relatedServiceSlugs: ["ui-ux-design", "shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["d2c-consumer", "beauty-personal-care", "food-beverage"],
    faqs: [
      { q: "Why does repeat purchase UX matter for D2C brands?", a: "Many D2C businesses rely on customers buying more than once, especially for consumables. The experience after the first order strongly influences whether they come back." },
      { q: "Should customers have to create an account to buy?", a: "Generally no for the first purchase; guest checkout reduces friction. Offer an easy account creation after purchase, when the benefits are clear." },
      { q: "What is a quick reorder feature?", a: "A way for customers to repeat a previous order, or add past products to the cart, in one or two steps from their account, order emails or a reminder." },
      { q: "How should subscriptions be designed?", a: "Make frequency, price, savings and cancellation terms clear before signup, and let customers skip, pause, change frequency, swap products or cancel easily in their account." },
      { q: "Should cancelling a subscription be easy?", a: "Yes. Clear, easy cancellation builds trust, and some jurisdictions have specific rules on subscription cancellation. Confirm requirements that apply to you." },
      { q: "What are replenishment reminders?", a: "Messages timed to when a customer is likely to run out of a consumable product, with a direct link to reorder." },
      { q: "How does post-purchase experience affect repeat purchases?", a: "Clear order confirmation, proactive shipping updates, easy returns and helpful usage guidance all build confidence to buy again." },
      { q: "What metrics show repeat purchase performance?", a: "Repeat purchase rate, time between orders, subscription retention and churn, and customer lifetime value, analyzed by cohort." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Repeat purchase UX is how a D2C store designs the experience after the first order so customers come back. Keep the first purchase easy with guest checkout, then offer a simple account afterward. Provide clear order tracking and returns, make reordering one or two steps from the account and emails, design subscriptions with transparent terms and easy skip, pause and cancel controls, time replenishment reminders to real usage, and measure repeat rate and retention by cohort.",
        ],
      },
      {
        heading: "Why the Second Order Is a Design Problem",
        body: [
          "Most store design focuses on the first purchase. For D2C brands selling consumables, subscriptions or ranges customers grow into, the second and third orders often matter as much. Friction after purchase, such as hard-to-find order status, awkward reordering or subscriptions that feel like traps, quietly reduces lifetime value. For the broader D2C picture, see [[/blogs/d2c-website-development|D2C website development]].",
        ],
        visual: { variant: "rows", accent: "blue", caption: "Brand, discovery, product, cart, checkout and retention, looping back into repeat purchases." },
      },
      {
        heading: "Accounts Without Forcing Them",
        body: [
          "Forced account creation before a first purchase adds friction. Offer guest checkout, then invite customers to create an account after purchase, prefilled with their order details, and explain the benefits: order tracking, faster reordering and subscription management.",
        ],
      },
      {
        heading: "Post-Purchase Experience",
        body: [
          "Confirmation, shipping updates, delivery and first use shape whether customers trust the brand enough to reorder. Send clear confirmations and proactive delivery updates, make returns simple, and share genuinely useful usage guidance, not just promotions.",
        ],
      },
      {
        heading: "Quick Reorder",
        body: [
          "Let customers repeat an order or add past products to their cart in one or two steps, from the account page, order emails and reminders. Show previously bought variants, like size, shade or flavor, so they don't have to remember.",
        ],
        cta: {
          title: "Designing the experience after the first order?",
          description: "ZSpace Labs designs accounts, reorder flows and subscription management for D2C brands on Shopify and custom stacks.",
        },
      },
      {
        heading: "Subscriptions",
        body: [],
        table: {
          headers: ["Moment", "Design it to show or allow"],
          rows: [
            ["Before signup", "Frequency, price, savings, what's included, cancellation terms"],
            ["Checkout", "Clear summary of the recurring charge and next date"],
            ["Account", "Next delivery, skip, pause, change frequency, swap product, update payment"],
            ["Before each charge", "Reminder with a chance to adjust"],
            ["Cancellation", "Straightforward path, optional pause alternative, confirmation"],
          ],
        },
      },
      {
        heading: "Designing Fair Cancellation",
        body: [
          "Hard-to-cancel subscriptions damage trust and reviews, and some jurisdictions regulate subscription cancellation. Offer pause or frequency changes as options, but keep cancellation clear and simple. Confirm requirements for your markets with qualified advisers.",
        ],
      },
      {
        heading: "Replenishment Reminders",
        body: [
          "For consumables, time reminders to when customers are likely to run out, based on product size and their past interval, and link straight to a prefilled cart. Let customers adjust or turn reminders off.",
        ],
      },
      {
        heading: "Loyalty and Personalization",
        body: [
          "Recognize returning customers: show recently bought products, relevant recommendations and any loyalty benefits in the account and on the storefront. Keep it useful rather than noisy. See [[/blogs/shopify-personalization|personalization]].",
        ],
      },
      {
        heading: "Measuring Repeat Purchase",
        body: [
          "Track repeat purchase rate, time between orders, subscription retention and churn reasons, and lifetime value, by acquisition cohort. Compare against your own history rather than generic benchmarks. See [[/blogs/mobile-app-analytics|analytics]] for cohort thinking, which applies equally to web stores.",
        ],
      },
      {
        heading: "Repeat Purchase Checklist",
        body: [],
        checklist: [
          "Guest checkout with account invitation after purchase",
          "Clear confirmation and proactive shipping updates",
          "Simple returns process",
          "One- or two-step reorder from account and emails",
          "Transparent subscription terms before signup",
          "Skip, pause, change and cancel easily from the account",
          "Replenishment reminders customers can control",
          "Repeat rate and retention tracked by cohort",
        ],
        cta: {
          title: "Want to improve repeat purchases on your store?",
          description: "Talk to ZSpace Labs about [[/services/ui-ux-design|D2C UX design]], [[/services/shopify-development|Shopify builds]] and [[/services/cro-audit|conversion work]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "For D2C brands, the experience after checkout is part of the product. Make the first order easy, keep customers informed, make reordering effortless and subscriptions fair and flexible, and measure what brings people back. For the first-purchase journey, see [[/blogs/ecommerce-product-page-design|product page design]] and the [[/blogs/ecommerce-website-design|ecommerce website design guide]].",
          "For related guides, see [[/blogs/ecommerce-reorder-experience|ecommerce reorder experience]], [[/blogs/ecommerce-customer-account-ux|customer account UX]], [[/blogs/subscription-management-portal|subscription management portal]], [[/blogs/ecommerce-post-purchase-experience|post-purchase experience]] and [[/blogs/ecommerce-replenishment|replenishment]].",
        ],
      },
    ],
  },
];
