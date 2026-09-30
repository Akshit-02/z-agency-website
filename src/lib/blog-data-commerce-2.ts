import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, part two: ecommerce and Shopify SEO — the
 * platform-independent pillar, product pages, category pages and Shopify
 * collections. The Shopify SEO pillar itself is the expanded
 * `shopify-seo-guide` in blog-data-commerce-rewrites.ts. Merged into
 * `posts` in blog-data.ts.
 */

export const commercePosts2: BlogPost[] = [
  // ------------------------------------------------------ 71 · ECOMMERCE SEO
  {
    slug: "ecommerce-seo",
    title: "Ecommerce SEO: A Complete Guide for Online Stores",
    excerpt:
      "A platform-independent guide to ecommerce SEO: keyword mapping by page type, architecture, technical SEO, categories, products, structured data and AI search.",
    category: "Shopify & Ecommerce",
    banner: "ecomseomap",
    bannerAlt:
      "Ecommerce SEO framework with six pillars: technical, architecture, categories, products, content and authority, each with its main tasks.",
    date: "2026-09-29",
    readingTime: "16 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "fashion-apparel"],
    faqs: [
      { q: "What is ecommerce SEO?", a: "Improving an online store's visibility in organic search so the right category, product and content pages rank for the searches shoppers make. It combines technical SEO, site architecture, category and product optimization, content and authority building." },
      { q: "How is ecommerce SEO different from regular SEO?", a: "Stores have thousands of similar, template-generated pages, faceted navigation that can create near-infinite URLs, products that go in and out of stock, and variants. Managing crawling, duplication and page-type intent matters more than on a typical content site." },
      { q: "Which pages matter most for ecommerce SEO?", a: "Category pages usually target the highest-volume commercial searches, such as “women's rain jackets”. Product pages target specific product and model searches. Guides target research-stage questions and link shoppers into categories." },
      { q: "Should out-of-stock product pages be removed?", a: "Not if the product is coming back. Google recommends keeping temporarily unavailable pages live and marking them out of stock. For permanently discontinued products, redirect to a close replacement if one exists; otherwise return 404 or 410." },
      { q: "Do filter pages need to be indexed?", a: "Only filter combinations that match real search demand and have enough products deserve indexing. Most filter URLs should be kept out of crawling to avoid wasting crawl resources on duplicate listings." },
      { q: "Is structured data required for ecommerce SEO?", a: "It isn't a ranking requirement, but Product structured data helps Google understand price, availability and reviews and makes pages eligible for richer results and merchant listing experiences." },
      { q: "How do I optimize a store for AI Overviews and AI search?", a: "Google says there are no additional requirements or special markup for AI Overviews or AI Mode beyond SEO fundamentals. Crawlable pages, clear and accurate product information, and genuinely helpful content are what matter." },
      { q: "Should I write product descriptions myself or use the manufacturer's?", a: "Write your own for important products. Manufacturer copy appears on every retailer's site, so it gives search engines no reason to prefer your page." },
      { q: "How long does ecommerce SEO take to show results?", a: "Technical fixes can show effects once pages are recrawled; category and content improvements usually take longer. It depends on competition, site authority and how much changes." },
      { q: "Which platform is best for ecommerce SEO?", a: "Most modern platforms, including Shopify, can rank well. What matters is control over titles, URLs, canonicals, redirects, crawling of filters and content. See the Shopify SEO guide for platform specifics." },
      { q: "How should I measure ecommerce SEO?", a: "Track organic clicks, impressions and revenue by page type (category, product, content) in Search Console and analytics, plus indexing coverage and Core Web Vitals." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Ecommerce SEO is the work of getting an online store's category, product and content pages to rank for the searches shoppers make. Map keywords to page types by intent: broad commercial searches to categories, specific product searches to product pages, and research questions to guides. Keep crawling focused by controlling faceted and sorted URLs, give each page one canonical URL, write unique category and product copy, add accurate Product structured data, and link the site as a clear hierarchy. Measure by page type in Search Console, and treat speed, mobile usability and accurate product data as ranking and conversion work at once.",
        ],
      },
      {
        heading: "What Makes Ecommerce SEO Different",
        body: [
          "A content site publishes pages one at a time. A store generates them: every product, category, filter combination, sort order and variant can produce a URL. That creates four problems most sites don't have: {{b:crawl efficiency}}, because search engines can waste time on near-duplicate listings; {{b:duplication}}, from variants, parameters and products in several categories; {{b:inventory change}}, as products sell out or are discontinued; and {{b:thin content}}, when templates carry little unique text.",
          "This guide covers the platform-independent system. For Shopify specifics, see [[/blogs/shopify-seo-guide|Shopify SEO]]; for building SEO into a new site, see [[/blogs/seo-friendly-website-development|SEO-friendly website development]].",
        ],
      },
      {
        heading: "Keyword Research by Page Type",
        body: [
          "Ecommerce keyword research is mostly about deciding which page should own which search. Group queries by intent, then assign each group to one page type. Autocomplete, Search Console queries, site search terms and competitors' category names are useful sources.",
        ],
        table: {
          headers: ["Page type", "Search intent", "Example queries"],
          rows: [
            ["Category", "Browse and compare a type of product", "“women's rain jackets”, “oak dining tables”"],
            ["Subcategory or indexed facet", "A narrower type with real demand", "“packable rain jacket”, “extendable oak dining table”"],
            ["Product", "A specific product, model or variant", "“[brand] [model] review”, “[model] 256gb”"],
            ["Buying guide", "Research before choosing", "“how to choose a rain jacket”"],
            ["Comparison", "Choosing between options", "“[model A] vs [model B]”"],
            ["Brand page", "Products from one brand", "“[brand] jackets”"],
          ],
        },
        callout: {
          type: "tip",
          text: "One search intent, one page. When two pages target the same query, they compete with each other. Merge them, or change one page's focus.",
        },
      },
      {
        heading: "Site Architecture",
        body: [
          "A good store structure is a shallow hierarchy: homepage to categories, categories to subcategories, subcategories to products, with breadcrumbs linking back up. Important pages should be reachable in a few clicks through normal links, not only through search or filters. Category names should use the words shoppers search with. See [[/blogs/ecommerce-website-architecture|ecommerce website architecture]] and [[/blogs/ecommerce-internal-linking|ecommerce internal linking]].",
        ],
      },
      {
        heading: "Technical Foundations",
        body: [
          "Technical SEO for stores is mainly about making sure the right pages are crawled and indexed, and the wrong ones aren't.",
        ],
        table: {
          headers: ["Area", "What good looks like"],
          rows: [
            ["Crawlability", "Categories, products and pagination reachable through standard <a href> links"],
            ["Canonicals", "One canonical URL per product and category; parameter and tracking variants point to it"],
            ["Faceted navigation", "Only valuable facets crawlable; the rest blocked or kept out of links"],
            ["Pagination", "Each page linked in sequence, each with its own canonical URL"],
            ["Sitemaps", "Only canonical, indexable URLs, kept up to date"],
            ["Rendering", "Product content, prices and links present in the server-rendered HTML"],
            ["Speed", "Good Core Web Vitals on category and product templates"],
            ["Status codes", "Correct 301, 404 and 410 responses for moved and removed products"],
          ],
        },
      },
      {
        heading: "Pagination",
        body: [
          "Google's guidance for paginated categories is to link each page to the next with normal links, give each page its own URL (such as ?page=2) and its own canonical, and not canonicalize every page to page one. Google no longer uses rel=next and rel=prev, and it doesn't follow URL fragments or “load more” buttons that only work with JavaScript, so infinite scroll needs crawlable page links behind it ([[https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading|Google Search Central]]).",
        ],
      },
      {
        heading: "Faceted Navigation",
        body: [
          "Filters are essential for shoppers and a common SEO problem, because each combination can create a URL. Google's guidance is to prevent crawling of facet URLs you don't need in search, with robots.txt being the most effective long-term method, and, for facets you do want indexed, to keep parameter order consistent and return a 404 for combinations with no results. See [[/blogs/ecommerce-faceted-navigation-seo|ecommerce faceted navigation SEO]] for the full decision framework.",
        ],
      },
      {
        heading: "Category Pages",
        body: [
          "Category pages usually carry a store's most valuable commercial keywords. They need a clear H1 and title that match the search, a short introduction that helps shoppers choose, links to subcategories, a crawlable product grid, and supporting content such as buying advice below the products. See [[/blogs/ecommerce-category-page-seo|ecommerce category page SEO]].",
        ],
      },
      {
        heading: "Product Pages",
        body: [
          "Product pages win specific searches: model names, product types with attributes and branded queries. Write unique descriptions for important products, include the attributes people search for (size, material, compatibility), show genuine reviews, use descriptive image file names and alt text, and handle variants on one URL unless a variant has its own distinct demand. For Shopify, see [[/blogs/shopify-product-seo|Shopify product SEO]].",
        ],
      },
      {
        heading: "Out-of-Stock and Discontinued Products",
        body: [
          "Inventory changes are where stores lose rankings unnecessarily. Google recommends keeping temporarily unavailable products live, clearly marked as out of stock, with structured data updated to match, rather than returning an error or adding noindex ([[https://developers.google.com/search/docs/crawling-indexing/pause-online-business|Google Search Central]]).",
        ],
        table: {
          headers: ["Situation", "Recommended handling"],
          rows: [
            ["Temporarily out of stock", "Keep the page live, show availability and restock options, update availability in structured data"],
            ["Discontinued, close replacement exists", "301 redirect to the replacement or the closest product"],
            ["Discontinued, no replacement", "Return 404 or 410; keep useful pages with links to alternatives if they still earn traffic"],
            ["Seasonal product", "Keep the URL and reuse it each season"],
          ],
        },
      },
      {
        heading: "Structured Data and Merchant Listings",
        body: [
          "Product structured data tells Google a page's product name, images, price, currency, availability, reviews, shipping and returns. Merchant listing experiences are only for pages where shoppers can buy the product. Google notes that providing both structured data and a Merchant Center feed maximizes eligibility ([[https://developers.google.com/search/docs/appearance/structured-data/product|Google Search Central]]). Mark up only what the page visibly shows. See [[/blogs/product-structured-data-ecommerce|product structured data]].",
        ],
        cta: {
          title: "Is your store's structure holding back its rankings?",
          description: "ZSpace audits ecommerce architecture, indexing and templates, and fixes them in the build rather than with workarounds.",
        },
      },
      {
        heading: "Images",
        body: [
          "Product images appear in image search and shopping results. Use descriptive file names, alt text that describes the product and variant, high-resolution images Google can crawl, and modern formats with sizes set so pages don't shift as they load. See [[/blogs/ecommerce-product-image-design|product image design]].",
        ],
      },
      {
        heading: "Content That Supports Commerce",
        body: [
          "Buying guides, comparisons and how-to content capture research-stage searches and move readers into categories. Write them to answer a real question completely, link to the relevant categories and products, and keep them updated when the range changes. Avoid publishing thin articles that only exist to hold keywords.",
        ],
      },
      {
        heading: "International Stores",
        body: [
          "Stores selling in several countries or languages need a URL structure per market (subfolders, subdomains or domains), hreflang annotations connecting equivalent pages, translated content rather than machine-translated product data left unchecked, and no automatic redirects that stop search engines seeing each version.",
        ],
      },
      {
        heading: "Authority and Links",
        body: [
          "Links from relevant sites still help pages rank. For stores, the durable sources are genuine press coverage, useful guides others cite, partnerships, supplier and brand pages, and reviews. Buying links risks penalties and rarely builds lasting value.",
        ],
      },
      {
        heading: "AI Search and Answer Engines",
        body: [
          "Google states there are no additional requirements, special optimizations, AI text files or special schema needed to appear in AI Overviews or AI Mode; standard SEO fundamentals apply ([[https://developers.google.com/search/docs/appearance/ai-features|Google Search Central]]). For stores, that means crawlable pages, accurate and specific product information, clear answers to shopping questions, and consistent data across the site and product feeds. Other AI assistants also rely on content they can crawl and understand.",
        ],
      },
      {
        heading: "Measuring Ecommerce SEO",
        body: [
          "Report by page type, not only site-wide. In Search Console, group URLs into categories, products and content to see which types gain clicks and impressions. In analytics, attribute organic revenue to landing page types. Watch indexing reports for spikes in crawled but not indexed URLs, which often signal a faceted navigation leak.",
        ],
      },
      {
        heading: "Ecommerce SEO Checklist",
        body: [],
        checklist: [
          "Keywords mapped to one page each, by intent",
          "Shallow category hierarchy with breadcrumbs",
          "One canonical URL per product and category",
          "Facet and sort URLs controlled; valuable facets deliberately indexed",
          "Pagination linked with crawlable links and self-canonicals",
          "Unique titles, H1s and copy on important categories and products",
          "Accurate Product structured data matching visible content",
          "Out-of-stock and discontinued products handled correctly",
          "Sitemaps contain only canonical, indexable URLs",
          "Good Core Web Vitals on category and product templates",
          "Guides link into categories and products",
          "Search Console reporting by page type",
        ],
        cta: {
          title: "Want ecommerce SEO built into your store?",
          description: "Talk to ZSpace about [[/services/website-development|ecommerce development]], [[/services/shopify-development|Shopify builds]] and [[/services/cro-audit|conversion audits]] that treat search and UX together.",
        },
      },
      {
        heading: "Common Ecommerce SEO Mistakes",
        body: [],
        checklist: [
          "Letting every filter combination be crawled",
          "Canonicalizing paginated pages to page one",
          "Deleting out-of-stock products that will return",
          "Manufacturer descriptions on every product",
          "Two categories targeting the same search",
          "Product links only reachable through JavaScript",
          "Marking up reviews or prices the page doesn't show",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Ecommerce SEO works when the store's structure matches how people search: categories for broad commercial searches, products for specific ones and guides for research. Control what gets crawled, keep one canonical URL per page, write content that helps shoppers decide, keep product data accurate, and measure by page type.",
          "For related guides, see [[/blogs/international-ecommerce-seo|international ecommerce SEO]].",
        ],
      },
    ],
  },

  // ------------------------------------------------- 73 · SHOPIFY PRODUCT SEO
  {
    slug: "shopify-product-seo",
    title: "Shopify Product SEO: How to Optimize Product Pages for Search",
    excerpt:
      "How to optimize Shopify product pages for search: titles, handles, descriptions, variants, images, structured data, reviews, stock changes and linking.",
    category: "Shopify & Ecommerce",
    banner: "pdpseo",
    bannerAlt:
      "A Shopify product page annotated for SEO: URL handle, H1 and title tag, image alt text, one canonical URL for variants, unique description, reviews, breadcrumb links and JSON-LD structured data.",
    date: "2026-09-29",
    readingTime: "12 min read",
    relatedServiceSlugs: ["shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer"],
    faqs: [
      { q: "How do I edit a product's SEO title and meta description in Shopify?", a: "In the product's admin page, edit the search engine listing section. You can set the page title, meta description and URL handle. If left empty, Shopify uses the product title and description." },
      { q: "Should each Shopify variant have its own URL?", a: "Usually not. Variants share the product URL, with the selected variant in a parameter, and the canonical points to the main product URL. Give a variant its own product only when it has distinct search demand and genuinely different content." },
      { q: "Do Shopify product tags help SEO?", a: "Tags don't affect how a product page ranks. They're useful for organizing products and building automated collections, which do matter for SEO." },
      { q: "Does Shopify add product structured data automatically?", a: "Shopify says its themes include product schema markup. Check your theme's output with Google's Rich Results Test, and watch for apps that add a second, conflicting Product block." },
      { q: "What should I do when a product sells out?", a: "Keep the page live if it's coming back, show availability and a back-in-stock option, and make sure structured data shows it as out of stock." },
      { q: "What should I do when I discontinue a product?", a: "Redirect its URL to the closest replacement or relevant collection using Shopify's URL redirects. If there's no relevant alternative, let it return a 404." },
      { q: "Why do my product URLs include /collections/?", a: "Many themes link to products within the collection path. Those URLs canonicalize to the /products/ URL, but linking directly to /products/ URLs keeps internal links consistent." },
      { q: "How long should a Shopify product description be?", a: "Long enough to answer what buyers need: what it is, who it's for, key attributes, sizing or compatibility, materials and care. Quality and specificity matter more than word count." },
      { q: "Should I change product handles for SEO?", a: "Only when the current handle is misleading. When you change a handle, Shopify offers to create a redirect from the old URL; keep that option selected." },
      { q: "How is this different from Shopify SEO in general?", a: "Shopify SEO covers the whole store: architecture, collections, technical settings and content. This guide focuses only on product pages." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "To optimize a Shopify product page for search, give it a descriptive title and handle that use the words shoppers search, write a unique description with the attributes people look for, set the search engine listing title and meta description, add descriptive alt text to images, keep variants on one canonical URL unless a variant has its own demand, make sure the theme outputs accurate Product structured data with no duplicates, show genuine reviews, and handle stock changes without deleting pages. Then link to the product from relevant collections and content.",
        ],
      },
      {
        heading: "Where Product SEO Fits",
        body: [
          "Product pages rank for specific searches: model names, product types with attributes (“linen shirt white”), and brand plus product queries. Broad searches such as “linen shirts” are usually won by collection pages. This article covers product pages only; for the whole store, see [[/blogs/shopify-seo-guide|Shopify SEO]], and for collections, [[/blogs/shopify-collection-page-seo|Shopify collection page SEO]]. For conversion work on the same page, see [[/blogs/shopify-product-page-optimization|Shopify product page optimization]].",
        ],
      },
      {
        heading: "Product Titles",
        body: [
          "The product title becomes the page's H1 and, unless overridden, its title tag. Write it for shoppers: product type plus the distinguishing attribute or model, in the words people use. “Relaxed Linen Shirt – White” tells both shoppers and search engines more than a collection name like “The Riviera”. Keep internal codes out of titles.",
        ],
      },
      {
        heading: "Search Engine Listing: Title Tag, Meta Description and Handle",
        body: [
          "Each product has a search engine listing section in the admin where you can set the page title, meta description and URL handle. Shopify's field accepts titles up to 70 characters and recommends about 160 characters for descriptions ([[https://help.shopify.com/en/manual/promoting-marketing/seo/adding-keywords|Shopify Help Center]]).",
        ],
        checklist: [
          "Title tag: product type, key attribute, brand; unique per product",
          "Meta description: what it is, who it's for, a key benefit or proof",
          "Handle: short, lowercase, hyphenated, descriptive",
          "No year or promotion in the handle, since handles should last",
        ],
      },
      {
        heading: "Descriptions That Rank and Sell",
        body: [
          "Manufacturer descriptions appear on every retailer's site, so they give search engines no reason to choose yours. Write unique copy for products that matter. Lead with what the product is and who it's for, then cover the attributes people search and compare: materials, dimensions, fit, compatibility, ingredients, care. Use headings or tabs so it's scannable, and keep the important text in the HTML rather than in images.",
          "Structured attributes belong in metafields, so they can be displayed consistently, used in filters and reused in structured data.",
        ],
      },
      {
        heading: "Variants and URLs",
        body: [
          "Shopify variants share the product URL; selecting one usually adds a ?variant= parameter, and the canonical points to the main product URL. That's the right default: one strong page instead of many weak ones.",
          "Split variants into separate products only when a variant has its own search demand and meaningfully different content, such as a colour people search by name. On Shopify Plus, the Combined Listings app can present separate products as one listing, with each child keeping its own title, description, URL and images ([[https://help.shopify.com/en/manual/products/combined-listings-app|Shopify Help Center]]). Without it, separate products need clear cross-links so shoppers can move between colours.",
        ],
        table: {
          headers: ["Approach", "Use when", "SEO effect"],
          rows: [
            ["Variants on one product", "Options differ in size, capacity or minor attributes", "One canonical page collects all signals"],
            ["Separate products per colour or style", "Each has distinct demand, imagery and copy", "Each can rank; needs unique content and cross-links"],
            ["Combined listings (Plus)", "You want separate pages presented as one listing", "Separate URLs with shared shopping experience"],
          ],
        },
      },
      {
        heading: "Images and Alt Text",
        body: [
          "Upload images with descriptive file names (linen-shirt-white-front.jpg), and add alt text in the product media editor describing the product and view. Alt text is for people using screen readers first, so describe what's in the image rather than stuffing keywords. Shopify serves responsive images through its CDN; keep original uploads high quality and let the theme handle sizes. See [[/blogs/ecommerce-product-image-design|product image design]].",
        ],
      },
      {
        heading: "Structured Data",
        body: [
          "Shopify states that its themes automatically include schema markup for products ([[https://help.shopify.com/en/manual/promoting-marketing/seo/seo-overview|Shopify Help Center]]). What's output varies by theme, so check a product page with Google's Rich Results Test. Common issues are missing brand, GTIN or shipping and return details, and duplicate Product blocks when a reviews or SEO app adds its own. Keep one complete block that matches what the page shows. See [[/blogs/product-structured-data-ecommerce|product structured data for ecommerce]].",
        ],
        cta: {
          title: "Product pages not showing up for the searches they should?",
          description: "ZSpace reviews Shopify product templates, data and structured data, and fixes what's holding pages back.",
        },
      },
      {
        heading: "Reviews",
        body: [
          "Genuine reviews add fresh, specific text that often includes the words shoppers use, and they're a requirement for star ratings in results. Make sure review content is rendered in the page HTML, not only loaded in a widget later, and never mark up ratings that aren't visible on the page. See [[/blogs/shopify-social-proof|Shopify social proof]].",
        ],
      },
      {
        heading: "Stock Changes and Discontinued Products",
        body: [],
        table: {
          headers: ["Situation", "On Shopify"],
          rows: [
            ["Sold out, coming back", "Keep published; show sold-out state and back-in-stock signup; availability updates in structured data"],
            ["Discontinued with a replacement", "Create a URL redirect from the old product to the replacement"],
            ["Discontinued, no replacement", "Redirect to the most relevant collection if it truly helps shoppers; otherwise let it 404"],
            ["Seasonal", "Keep the same product and handle each season"],
          ],
        },
      },
      {
        heading: "Internal Links to Products",
        body: [
          "Products gain visibility from links: collection grids, related products, bundles, buying guides and blog posts. Link to the /products/ URL where you can, use descriptive anchor text in content, and make sure important products appear in at least one collection that's linked from navigation. See [[/blogs/ecommerce-internal-linking|ecommerce internal linking]].",
        ],
      },
      {
        heading: "Speed on the Product Template",
        body: [
          "Product pages often carry the heaviest apps: reviews, recommendations, upsells, subscriptions. Measure the template's Core Web Vitals, load non-essential widgets after the main content, and remove apps that don't earn their weight. See [[/blogs/shopify-speed-cro|Shopify speed optimization]].",
        ],
      },
      {
        heading: "Shopify Product SEO Checklist",
        body: [],
        checklist: [
          "Descriptive product title in shoppers' words",
          "Unique title tag and meta description",
          "Short, descriptive handle; redirect created if changed",
          "Unique description covering searched attributes",
          "Attributes stored in metafields",
          "Variants on one URL unless a variant has its own demand",
          "Descriptive file names and alt text",
          "One complete, accurate Product structured data block",
          "Genuine reviews rendered in HTML",
          "Sold-out and discontinued products handled correctly",
          "Linked from collections and relevant content",
        ],
        cta: {
          title: "Want product pages that rank and convert?",
          description: "Talk to ZSpace about [[/services/shopify-development|Shopify development]] and a [[/services/cro-audit|product page audit]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Shopify product SEO comes down to clear titles and handles, unique descriptions built on structured attributes, sensible variant URLs, accurate structured data, genuine reviews and careful handling of stock changes, supported by internal links from collections and content.",
        ],
      },
    ],
  },

  // -------------------------------------------- 74 · CATEGORY PAGE SEO
  {
    slug: "ecommerce-category-page-seo",
    title: "Ecommerce Category Page SEO: How to Optimize Collection Pages",
    excerpt:
      "How to optimize ecommerce category pages for search: intent, titles, intro copy, product grids, subcategory links, pagination, filters and thin categories.",
    category: "Shopify & Ecommerce",
    banner: "categoryseo",
    bannerAlt:
      "An ecommerce category page annotated for SEO: breadcrumb, H1, short intro, subcategory links, filters, crawlable product links, paginated page links and buying guide content below the grid.",
    date: "2026-09-29",
    readingTime: "12 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "fashion-apparel"],
    faqs: [
      { q: "Why are category pages important for ecommerce SEO?", a: "They match broad commercial searches such as “men's running shoes”, which usually have more demand than individual product names, and they link to many products." },
      { q: "How much text should a category page have?", a: "Enough to help shoppers choose: a short intro above the products and more detailed guidance below if it's genuinely useful. Long blocks of keyword-heavy text don't help rankings or shoppers." },
      { q: "Should category copy go above or below the products?", a: "Keep a short intro above the grid so products stay visible, and put longer buying advice or FAQs below. Both are crawlable." },
      { q: "Should paginated category pages be canonicalized to page one?", a: "No. Google recommends giving each paginated page its own canonical URL and linking pages in sequence." },
      { q: "Should filtered category pages be indexed?", a: "Only filters that match real search demand and have enough products. Most filter combinations should be kept out of crawling." },
      { q: "What should I do with categories that have very few products?", a: "Merge them into a parent, expand the range, or keep them for navigation but out of search if they add nothing distinct. Thin categories dilute a store's quality." },
      { q: "Can a product be in several categories?", a: "Yes. Make sure the product has one canonical URL, so appearing in several categories doesn't create duplicate product pages." },
      { q: "Do category pages need structured data?", a: "BreadcrumbList helps show the page's place in the hierarchy. Product rich results are intended for pages about a single product, so don't mark up a category as one product." },
      { q: "How is category SEO different from category page design?", a: "Design focuses on helping shoppers browse and filter. SEO focuses on intent, crawlability, content and indexing. The best category pages do both, which is why this guide links to the UX guide." },
      { q: "How do I choose category names?", a: "Use the terms shoppers search and understand, checked against autocomplete, Search Console and site search, rather than internal or brand language." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "To optimize an ecommerce category page, give it one clear search intent and a name shoppers use, reflected in the H1, title tag and URL. Add a short, useful introduction above the products and deeper buying advice below. Make product and subcategory links crawlable, link paginated pages in sequence with their own canonicals, keep most filter and sort URLs out of crawling while indexing only facets with real demand, merge or improve thin categories, and link to the category from navigation, breadcrumbs and relevant content.",
        ],
      },
      {
        heading: "What Category Pages Do in Search",
        body: [
          "Category pages, called collection pages on Shopify, are usually a store's best chance to rank for broad commercial searches. Someone searching “oak dining tables” wants to compare options, so a category page with a range of tables satisfies the intent better than a single product page.",
          "This guide is platform-independent. For Shopify implementation, see [[/blogs/shopify-collection-page-seo|Shopify collection page SEO]]. For the browsing experience, see [[/blogs/ecommerce-category-page-design|product listing page design]].",
        ],
      },
      {
        heading: "Match Each Category to One Intent",
        body: [
          "Start by mapping searches to categories. Each category should own a group of closely related queries, and no two categories should target the same one. If “rain jackets” and “waterproof jackets” describe the same products, one category should target both; if shoppers mean different things, two categories may be justified.",
        ],
        checklist: [
          "List the searches for the product type from autocomplete, Search Console and site search",
          "Group queries that expect the same products",
          "Assign each group to one category or indexed facet",
          "Rename categories that use internal jargon",
          "Merge categories that compete for the same searches",
        ],
      },
      {
        heading: "Titles, H1s and URLs",
        body: [
          "The H1 should name the category in the shopper's terms. The title tag can add a qualifier or the brand name. Keep the URL short and descriptive, and avoid changing it once it ranks; if it must change, redirect the old URL.",
        ],
        table: {
          headers: ["Element", "Good", "Weak"],
          rows: [
            ["H1", "Women's Rain Jackets", "Outerwear Collection 04"],
            ["Title tag", "Women's Rain Jackets | Brand", "Shop | Brand"],
            ["URL", "/women/rain-jackets", "/c/1043?id=77"],
          ],
        },
      },
      {
        heading: "Category Copy That Helps",
        body: [
          "The best category copy helps shoppers choose. A short introduction above the grid can explain the range and the main types. Below the grid, a buying guide, sizing advice or FAQ answers the questions people ask before choosing. Write it for the category, not as generic text repeated across pages, and don't push products below the fold with long introductions.",
        ],
      },
      {
        heading: "Crawlable Product Grids",
        body: [
          "Search engines find products through the links on category pages. Make sure product links are standard links in the HTML, product names are text rather than images, and the grid isn't loaded only after a user action. Show a sensible number of products per page and a count so shoppers know the range size.",
        ],
      },
      {
        heading: "Subcategory Links",
        body: [
          "Link from each category to its subcategories near the top of the page. This helps shoppers narrow down and passes internal links to the next level of the hierarchy. Add breadcrumbs so each subcategory links back up. See [[/blogs/ecommerce-internal-linking|ecommerce internal linking]].",
        ],
      },
      {
        heading: "Pagination",
        body: [
          "Large categories need pagination, “load more” or infinite scroll for shoppers. For search engines, Google recommends linking each page to the next with <a href> links, giving each page a unique URL such as ?page=2 and its own canonical, and not canonicalizing all pages to the first. Infinite scroll and “load more” need crawlable paginated URLs behind them ([[https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading|Google Search Central]]).",
        ],
      },
      {
        heading: "Filters and Sorting",
        body: [
          "Filters create many near-duplicate listing URLs. Keep sort orders and most filter combinations out of crawling. Consider indexing a filtered view only when it matches real search demand, has enough products, and gets its own title, H1 and copy. At that point it often works better as a proper subcategory. See [[/blogs/ecommerce-faceted-navigation-seo|faceted navigation SEO]].",
        ],
        cta: {
          title: "Category pages not ranking for your main searches?",
          description: "ZSpace reviews category structure, content and indexing, and aligns them with how shoppers search.",
        },
      },
      {
        heading: "Thin and Overlapping Categories",
        body: [
          "Categories with very few products, or several categories showing mostly the same items, weaken a store. Decide for each one.",
        ],
        table: {
          headers: ["Situation", "Action"],
          rows: [
            ["Two categories target the same search", "Merge and redirect the weaker one"],
            ["Category with few products and no demand", "Merge into the parent, or keep for navigation and exclude from search"],
            ["Category with demand but few products", "Expand the range or improve content before promoting it"],
            ["Seasonal category", "Keep the URL and reuse it each season"],
            ["Empty category", "Don't leave it indexable; redirect or return 404 if permanent"],
          ],
        },
      },
      {
        heading: "Structured Data",
        body: [
          "Use BreadcrumbList to show the category's place in the hierarchy. Product rich results are designed for pages about a single product, so avoid marking a category page up as one product or copying product ratings onto it. See [[/blogs/product-structured-data-ecommerce|product structured data]].",
        ],
      },
      {
        heading: "Speed and Mobile",
        body: [
          "Category pages load many images. Use responsive images, lazy-load images below the first row, reserve space to avoid layout shifts, and keep filter scripts lightweight. Check the template's Core Web Vitals on mobile.",
        ],
      },
      {
        heading: "Measuring Category SEO",
        body: [
          "Group category URLs in Search Console to track clicks, impressions and average position for the queries you mapped. In analytics, measure category landing pages by product views and revenue per session, so SEO changes are judged on business results as well as traffic.",
        ],
      },
      {
        heading: "Category Page SEO Checklist",
        body: [],
        checklist: [
          "One search intent per category, no overlaps",
          "H1, title and URL in shoppers' terms",
          "Short intro above products; useful guidance below",
          "Product and subcategory links crawlable",
          "Breadcrumbs with BreadcrumbList markup",
          "Paginated pages linked, each self-canonical",
          "Sort and most filter URLs kept out of crawling",
          "Thin and overlapping categories merged or improved",
          "Images optimized; Core Web Vitals checked on mobile",
        ],
        cta: {
          title: "Want category pages that rank and help shoppers choose?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|ecommerce UX]], [[/services/website-development|development]] and [[/services/shopify-development|Shopify collections]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Category page SEO depends on intent, structure and restraint: one category per search intent, names shoppers use, helpful copy, crawlable links, sensible pagination and controlled filters. Get those right and category pages become the store's strongest organic entry points.",
          "For related guides, see [[/blogs/ecommerce-category-page-optimization|category page optimization]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 75 · SHOPIFY COLLECTION SEO
  {
    slug: "shopify-collection-page-seo",
    title: "Shopify Collection Page SEO: How to Optimize Collections",
    excerpt:
      "How to optimize Shopify collections for search: structure, handles, SEO fields, descriptions, tag and filter URLs, pagination, sorting and linking.",
    category: "Shopify & Ecommerce",
    banner: "collectionseo",
    bannerAlt:
      "Shopify collection SEO: admin fields for title, description, search engine listing, collection type and template, beside URL patterns and how Shopify's default robots.txt treats them.",
    date: "2026-09-29",
    readingTime: "11 min read",
    relatedServiceSlugs: ["shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "fashion-apparel"],
    faqs: [
      { q: "How do I add SEO titles and descriptions to Shopify collections?", a: "Open the collection in the admin and edit the search engine listing section to set the page title, meta description and URL handle." },
      { q: "Where does the collection description appear?", a: "It depends on the theme; many show it above the product grid. For longer content below the grid, add a collection metafield and a theme section that displays it." },
      { q: "Should I use smart or manual collections for SEO?", a: "Either can rank. Smart collections use rules on product data and stay up to date automatically; manual collections suit curated edits. Choose by how you merchandise, and keep data consistent so rules work." },
      { q: "Are Shopify tag pages bad for SEO?", a: "Single-tag URLs like /collections/shirts/linen can be crawled and often duplicate the parent collection. Shopify's default robots.txt blocks combined tag URLs containing a plus sign. If a tag view has real demand, a dedicated collection is usually better." },
      { q: "Does Shopify block sorted collection URLs?", a: "Yes. Shopify's default robots.txt disallows collection URLs containing sort_by." },
      { q: "How are filter URLs handled?", a: "Storefront filters add parameters such as filter.v.option.color. Check your store's robots.txt and theme to see how they're treated, and create dedicated collections for filter views worth ranking." },
      { q: "Should I edit robots.txt.liquid?", a: "Only with SEO expertise. Shopify allows it but calls it an unsupported customization and warns that incorrect use can cause loss of all traffic." },
      { q: "What is /collections/all?", a: "A default collection containing every product. It's rarely a good search landing page; make sure your navigation and internal links point to meaningful collections instead." },
      { q: "How many products should a collection have?", a: "Enough to offer a real choice for the search it targets. Very small collections are thin; very large ones may need subcollections." },
      { q: "How is this different from category page SEO?", a: "Category page SEO is the platform-independent strategy. This guide applies it to Shopify's collections, admin fields, URL patterns and defaults." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "To optimize Shopify collections, build them around how shoppers search, give each a clear title that becomes the H1, set the search engine listing title, meta description and handle, and write a short description above the grid with deeper content below through a metafield-driven section. Keep collections distinct so they don't compete. Understand Shopify's URL patterns: sort and combined tag URLs are blocked by the default robots.txt, filter parameters need checking, and pagination should stay crawlable. Link important collections from the main menu, other collections and content.",
        ],
      },
      {
        heading: "How This Fits the Cluster",
        body: [
          "The strategy behind category pages, including intent mapping, copy, pagination and thin categories, is covered in [[/blogs/ecommerce-category-page-seo|ecommerce category page SEO]]. This guide covers how to implement it in Shopify. For conversion work on the same pages, see [[/blogs/shopify-collection-page-audit|the Shopify collection page audit]].",
        ],
      },
      {
        heading: "Plan Collections as a Structure",
        body: [
          "Collections are Shopify's categories. Plan them as a hierarchy that reflects how customers shop: broad collections (Shirts), narrower ones (Linen Shirts), and a few curated edits (Summer Edit). Shopify collections don't nest by URL, so the hierarchy comes from navigation menus, breadcrumbs in the theme and links between collections.",
        ],
        table: {
          headers: ["Collection type", "Good for", "Watch out for"],
          rows: [
            ["Smart (automated)", "Categories defined by product type, tag, vendor or metafield", "Rules only work with consistent product data"],
            ["Manual", "Curated edits, campaigns, gifting", "Must be maintained as products change"],
          ],
        },
      },
      {
        heading: "Titles, Handles and Search Engine Listings",
        body: [
          "The collection title becomes the page's H1 in most themes. Name it in shoppers' terms. In the search engine listing section, set a title tag (the field allows up to 70 characters), a meta description, and a short handle. Changing the handle later creates a new URL; Shopify offers to create a redirect from the old one, which you should keep.",
        ],
      },
      {
        heading: "Collection Descriptions and Content Below the Grid",
        body: [
          "Most themes show the collection description above the products. Keep it short so products stay visible. For buying advice, sizing help or FAQs, add a collection metafield (for example, a rich text field) and a theme section that renders it below the grid. This keeps the page useful without pushing products down.",
        ],
        checklist: [
          "Intro: what's in the collection and the main types, in two or three sentences",
          "Below the grid: how to choose, key differences, care or sizing advice",
          "Links to related collections and guides in the copy",
          "Unique text per collection, not a repeated template paragraph",
        ],
      },
      {
        heading: "Shopify URL Patterns and What Gets Crawled",
        body: [
          "Collections produce several URL patterns. Shopify's default robots.txt handles some of them ([[https://help.shopify.com/en/manual/promoting-marketing/seo/editing-robots-txt|Shopify Help Center]]). The diagram above summarizes them.",
        ],
        table: {
          headers: ["URL", "Default treatment", "What to do"],
          rows: [
            ["/collections/linen-shirts", "Indexable, in the sitemap", "Optimize as the main landing page"],
            ["/collections/linen-shirts?page=2", "Crawlable pagination", "Keep paginated links crawlable"],
            ["/collections/shirts/linen (single tag)", "Crawlable", "Avoid linking; create a real collection if it has demand"],
            ["/collections/shirts/linen+white", "Disallowed: /collections/*+*", "Leave blocked"],
            ["/collections/shirts?sort_by=price-ascending", "Disallowed: *sort_by*", "Leave blocked"],
            ["/collections/shirts?filter.v.option.color=white", "Check your robots.txt and theme", "Keep out of search unless deliberately targeted"],
          ],
        },
        callout: {
          type: "note",
          text: "Shopify lets you edit robots.txt.liquid but calls it an unsupported customization and warns that incorrect use can result in loss of all traffic. Test every rule before publishing.",
        },
      },
      {
        heading: "Tags vs Filters vs Collections",
        body: [
          "Older themes used product tags to filter collections, producing tag URLs. Current themes use storefront filters, configured in the Shopify Search & Discovery app, which filter by availability, price, product type, vendor, variant options and metafields. For SEO, the rule is simple: when a filtered view deserves to rank, make it a collection with its own title, description and handle, and link to it. Leave everything else as a filter.",
        ],
        cta: {
          title: "Collections competing with each other in search?",
          description: "ZSpace restructures Shopify collections, content and filters so each one targets a clear search and shoppers find products faster.",
        },
      },
      {
        heading: "Product Links From Collections",
        body: [
          "Many themes link products through the collection path, such as /collections/shirts/products/linen-shirt. Those URLs point their canonical to /products/linen-shirt, so they don't create duplicate products in the index, but linking to the /products/ URL directly keeps internal links consistent and avoids spreading signals across URLs. Ask your developer how the theme builds product links.",
        ],
      },
      {
        heading: "Pagination and Products per Page",
        body: [
          "Keep paginated collection pages linked with normal links and self-canonical. If the theme uses infinite scroll or “load more”, make sure paginated URLs still exist behind it. Choose a products-per-page number that balances speed with showing a meaningful range.",
        ],
      },
      {
        heading: "Internal Links to Collections",
        body: [
          "Link important collections from the main menu, the homepage, related collections, product pages (through breadcrumbs or “more in this collection”) and blog posts. Use descriptive anchor text. A collection that's only reachable through search or filters is hard for both shoppers and search engines to find. See [[/blogs/ecommerce-internal-linking|ecommerce internal linking]].",
        ],
      },
      {
        heading: "Measuring Collection Performance",
        body: [
          "In Search Console, filter pages containing /collections/ to see clicks and queries by collection. In Shopify Analytics or GA4, compare collection landing pages by product views, add-to-cart rate and revenue per session. A collection that ranks but doesn't lead to product views needs better merchandising, not more SEO.",
        ],
      },
      {
        heading: "Shopify Collection SEO Checklist",
        body: [],
        checklist: [
          "Collections mapped to distinct search intents",
          "Titles in shoppers' terms; unique title tags and descriptions",
          "Short, stable handles with redirects when changed",
          "Short intro above the grid; deeper content below via metafield",
          "Tag and filter views that deserve ranking turned into collections",
          "Sort and combined tag URLs left blocked",
          "Filter parameter handling checked in robots.txt and theme",
          "Product links point to /products/ URLs",
          "Pagination crawlable and self-canonical",
          "Important collections linked from navigation and content",
        ],
        cta: {
          title: "Want your collections working harder?",
          description: "Talk to ZSpace about [[/services/shopify-development|Shopify development]] and a [[/services/cro-audit|collection page review]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Shopify handles the technical basics of collections, including canonicals, the sitemap and default robots rules. Rankings depend on what you control: a clear collection structure, names and content that match searches, careful handling of tags and filters, and strong internal links. For the rest of the store, see [[/blogs/shopify-seo-guide|Shopify SEO]] and [[/blogs/shopify-product-seo|Shopify product SEO]].",
        ],
      },
    ],
  },
];
