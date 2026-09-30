import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, part three: store architecture for search —
 * internal linking, faceted navigation, site search and product structured
 * data. Shopify search is the expanded `shopify-search-optimization` post.
 * Merged into `posts` in blog-data.ts.
 */

const PRODUCT_JSON_LD = `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Example Linen Shirt – White",
  "image": ["https://example.com/images/linen-shirt-white.jpg"],
  "description": "Relaxed-fit shirt in washed linen.",
  "sku": "LS-WHT-M",
  "gtin13": "0000000000000",
  "brand": { "@type": "Brand", "name": "Example Brand" },
  "offers": {
    "@type": "Offer",
    "url": "https://example.com/products/linen-shirt",
    "price": "49.00",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition"
  }
}
</script>`;

export const commercePosts3: BlogPost[] = [
  // ------------------------------------------------ 76 · INTERNAL LINKING
  {
    slug: "ecommerce-internal-linking",
    title: "Ecommerce Internal Linking: How to Build a Better Store Architecture",
    seoTitle: "Ecommerce Internal Linking: Build a Better Store Architecture",
    excerpt:
      "How to plan internal links across an online store: hierarchy, navigation, breadcrumbs, product modules, content links, anchor text, facets and audits.",
    category: "Shopify & Ecommerce",
    banner: "linkgraph",
    bannerAlt:
      "Ecommerce link architecture: home links to categories, categories to subcategories, subcategories to products, with dashed contextual links from a buying guide and related-product links between products.",
    date: "2026-09-29",
    readingTime: "12 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce"],
    faqs: [
      { q: "What is ecommerce internal linking?", a: "The system of links between pages on a store: menus, breadcrumbs, category grids, related products and links in content. It determines how shoppers and search engines discover products and which pages are treated as important." },
      { q: "Why does internal linking matter for SEO?", a: "Search engines discover pages by following links and use internal links as signals of importance and context. Pages with few or no internal links are found less often and tend to rank less well." },
      { q: "What is an orphan page?", a: "A page no other page links to. It may be in the sitemap but isn't reachable through normal navigation. Products removed from all collections often become orphans." },
      { q: "How many links should a mega menu have?", a: "As many as help shoppers choose, organized clearly. Very large menus dilute focus and overwhelm people. Link the categories people use most and let category pages link deeper." },
      { q: "Should I nofollow links to filter pages?", a: "Google says nofollow only helps when every link to a URL has it, and blocking crawling in robots.txt is more effective. Better still, don't create crawlable links to filter URLs you don't want indexed." },
      { q: "What anchor text should I use?", a: "Descriptive text that tells people what they'll find, using the product or category name. Vary it naturally in content; avoid generic “click here” and avoid forcing the same exact-match phrase everywhere." },
      { q: "Do related-product modules help SEO?", a: "Yes, when they're rendered as crawlable links and relevant. They spread links laterally between products and help shoppers find alternatives." },
      { q: "Should blog posts link to products?", a: "Yes, where the link genuinely helps the reader. Guides that link to the categories and products they discuss move readers toward buying and pass context to those pages." },
      { q: "How do I audit internal links?", a: "Crawl the site with an SEO crawler, compare discovered URLs with the sitemap and analytics, find orphans and pages many clicks deep, check links to redirects and 404s, and review which pages get the most internal links." },
      { q: "Does the footer count?", a: "Footer links are crawled, but they appear on every page and carry little context. Use the footer for help and policy pages and a few key categories, not a long keyword list." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Ecommerce internal linking means designing the links between a store's pages so shoppers and search engines can reach every important page and understand how they relate. Build a clear hierarchy (home, categories, subcategories, products) linked through navigation and breadcrumbs, add lateral links between related products and categories, and link from buying guides and blog posts to the categories and products they discuss. Use descriptive anchor text, keep links crawlable, avoid creating links to filter URLs you don't want indexed, and audit regularly for orphan pages, redirects and broken links.",
        ],
      },
      {
        heading: "Why Internal Links Matter More for Stores",
        body: [
          "Stores have thousands of pages that change constantly. Products are added, sell out and are discontinued; collections are created for campaigns and forgotten. Internal links decide which of these pages search engines find, how often they're revisited and how important they appear. They also decide how quickly shoppers reach a product.",
          "This guide covers the link system. For the overall structure, see [[/blogs/ecommerce-website-architecture|ecommerce website architecture]]; for menus specifically, see [[/blogs/ecommerce-navigation-design|ecommerce navigation]].",
        ],
      },
      {
        heading: "Five Types of Internal Links",
        body: [],
        table: {
          headers: ["Type", "Where", "Job"],
          rows: [
            ["Navigational", "Header menu, mega menu, footer", "Reach main categories from anywhere"],
            ["Hierarchical", "Category grids, subcategory links, breadcrumbs", "Move down and back up the tree"],
            ["Lateral", "Related products, “shop similar”, sibling categories", "Connect alternatives and complements"],
            ["Contextual", "Buying guides, blog posts, product copy", "Link from research to the right products"],
            ["Utility", "Help, policies, account", "Support, rarely an SEO priority"],
          ],
        },
      },
      {
        heading: "Build the Hierarchy First",
        body: [
          "The diagram above shows the backbone: home links to main categories, categories to subcategories and subcategories to products, with breadcrumbs linking back up. Keep important pages within a few clicks of the homepage through normal links. Every product should belong to at least one category that's linked from navigation.",
        ],
      },
      {
        heading: "What Each Template Should Link To",
        body: [
          "Internal linking on a store is mostly template design. Decide once what each template links to, and every page of that type follows.",
        ],
        table: {
          headers: ["Template", "Should link to"],
          rows: [
            ["Homepage", "Main categories, key subcategories, bestsellers, seasonal collections"],
            ["Category", "Subcategories, products (crawlable grid), paginated pages, related categories, relevant guide"],
            ["Product", "Breadcrumb categories, similar products, complementary products, brand page, sizing or care guide"],
            ["Buying guide", "Categories and specific products discussed, related guides"],
            ["Blog post", "Relevant categories and products, the guide it belongs to"],
            ["Brand page", "Brand's categories and top products"],
          ],
        },
      },
      {
        heading: "Breadcrumbs",
        body: [
          "Breadcrumbs show where a page sits and link back to each level. On product pages, use one consistent primary path even when the product appears in several categories. Mark them up with BreadcrumbList structured data so search engines understand the hierarchy.",
        ],
      },
      {
        heading: "Product-to-Product Links",
        body: [
          "Related-product modules create lateral links that help both shoppers and crawlers. Make sure they're rendered as standard links, not only built by JavaScript after interaction, and that they're relevant: similar alternatives for comparison, complementary items for completing a purchase. Link between colour or style siblings when they're separate products. See [[/blogs/ecommerce-product-recommendations|ecommerce product recommendations]].",
        ],
      },
      {
        heading: "Content Links",
        body: [
          "Guides and blog posts can send context and shoppers to commercial pages. Link where it genuinely helps: a guide to choosing a rain jacket should link to the rain jacket category and to the specific jackets it compares. Link from older content with steady traffic to newer pages that need visibility.",
        ],
        cta: {
          title: "Products buried too deep to be found?",
          description: "ZSpace maps your store's link structure and redesigns templates so important pages are reachable and connected.",
        },
      },
      {
        heading: "Anchor Text",
        body: [
          "Use descriptive anchors that say what the destination is: the category or product name, or a natural phrase that includes it. Vary phrasing in content, as people naturally do. Avoid generic anchors such as “click here”, and avoid repeating an identical exact-match phrase on every page, which reads unnaturally.",
        ],
      },
      {
        heading: "Links to Filters, Sorts and Parameters",
        body: [
          "Every link to a filtered or sorted URL invites crawlers to request it. Google notes that rel=nofollow only works if every link to a URL carries it, and that robots.txt is more effective for keeping faceted URLs out of crawling ([[https://developers.google.com/search/docs/crawling-indexing/crawling-managing-faceted-navigation|Google Search Central]]). The cleanest approach is to link to category and subcategory URLs, and to generate filter states without crawlable links where possible. See [[/blogs/ecommerce-faceted-navigation-seo|faceted navigation SEO]].",
        ],
      },
      {
        heading: "Stock Changes and Redirects",
        body: [
          "When products are discontinued and redirected, internal links often keep pointing at the old URLs. Update them to the final destination so shoppers and crawlers don't pass through redirects, and remove links to pages that now return 404. Include this in the process for retiring products.",
        ],
      },
      {
        heading: "JavaScript and Crawlable Links",
        body: [
          "Search engines follow links in <a href> elements. Menus, product grids and recommendation modules that only create links after scripts run, or use click handlers instead of links, may not be followed reliably. Check the rendered HTML of key templates.",
        ],
      },
      {
        heading: "How to Audit Internal Links",
        body: [],
        checklist: [
          "Crawl the site and compare discovered URLs with the sitemap",
          "Find orphan pages: in the sitemap or analytics but not linked",
          "Check click depth for important categories and products",
          "List internal links pointing to redirects or 404s and update them",
          "Review which pages receive the most internal links; are they the most important?",
          "Check that product grids and recommendations render crawlable links",
          "Look for links to filter and sort URLs that shouldn't be crawled",
          "Confirm every product sits in at least one navigable category",
        ],
      },
      {
        heading: "Platform Notes",
        body: [
          "On Shopify, product links from collection pages may use the collection path; they canonicalize to the /products/ URL, but linking to /products/ directly keeps signals consistent. Menus are managed in Navigation, breadcrumbs are theme code, and related products come from the theme or the Search & Discovery app. See [[/blogs/shopify-collection-page-seo|Shopify collection page SEO]].",
        ],
        cta: {
          title: "Want a store architecture that search engines and shoppers can follow?",
          description: "Talk to ZSpace about [[/services/website-development|ecommerce development]], [[/services/shopify-development|Shopify]] and [[/services/ui-ux-design|information architecture]].",
        },
      },
      {
        heading: "Common Internal Linking Mistakes",
        body: [],
        checklist: [
          "Products reachable only through search or filters",
          "Mega menus linking to every filter combination",
          "Recommendation modules invisible to crawlers",
          "Internal links pointing to redirected URLs",
          "Guides with no links to the products they discuss",
          "Footer stuffed with keyword links",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Internal linking is store architecture made visible. Build the hierarchy, decide what each template links to, connect related products and content, keep links crawlable and current, and audit regularly. For the broader SEO system, see [[/blogs/ecommerce-seo|ecommerce SEO]].",
        ],
      },
    ],
  },

  // --------------------------------------- 77 · FACETED NAVIGATION SEO
  {
    slug: "ecommerce-faceted-navigation-seo",
    title: "Ecommerce Faceted Navigation SEO: How to Handle Filters Without Creating SEO Problems",
    seoTitle: "Faceted Navigation SEO: Handle Filters Without SEO Problems",
    excerpt:
      "How to manage ecommerce filters for SEO: crawl and duplicate problems, which facets to index, robots.txt, canonicals, noindex, fragments and Shopify notes.",
    category: "Shopify & Ecommerce",
    banner: "facetmatrix",
    bannerAlt:
      "Decision matrix for faceted navigation URLs: facets with demand and pagination are indexed and linked; tracking parameters are canonicalized; sort orders and multi-select combinations are blocked in robots.txt; empty combinations return 404.",
    date: "2026-09-29",
    readingTime: "13 min read",
    relatedServiceSlugs: ["website-development", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "fashion-apparel"],
    faqs: [
      { q: "What is faceted navigation?", a: "Filters that let shoppers narrow a product list by attributes such as size, colour, price, brand or material. Each selection usually changes the URL, which is where SEO problems start." },
      { q: "Why is faceted navigation an SEO problem?", a: "Combinations of filters can create a huge number of URLs with near-duplicate product lists. Crawlers can spend their time on those instead of important pages, and duplicate or thin pages can end up indexed." },
      { q: "Should I block filter URLs in robots.txt?", a: "For filter URLs you don't need in search, Google describes robots.txt as the most effective long-term method. Remember that blocked URLs can't be crawled, so search engines won't see a noindex or canonical on them." },
      { q: "Is noindex or canonical better for filters?", a: "Both require the page to be crawled, so they don't save crawl resources. Canonicals are hints that may reduce crawling of duplicates over time. Use them for parameters that should consolidate, and robots.txt for large sets you don't want crawled." },
      { q: "Should any filter pages be indexed?", a: "Yes, when a filter matches real search demand, has enough products and can carry its own title, H1 and copy. These often work best as static subcategory URLs." },
      { q: "What should happen when a filter combination has no products?", a: "Google recommends returning a 404 rather than redirecting or showing an empty page." },
      { q: "Can I use URL fragments for filters?", a: "Yes. Google generally doesn't crawl or index URL fragments, so fragment-based filter states don't create crawlable URLs. The trade-off is that those states can't rank or be shared as distinct pages." },
      { q: "Does nofollow on filter links work?", a: "Only if every link to that URL is nofollowed, according to Google. It's less reliable than robots.txt or not linking to those URLs at all." },
      { q: "How does Shopify handle filters?", a: "Shopify's default robots.txt blocks sorted URLs and combined tag URLs. Storefront filter parameters should be checked in your store's robots.txt and theme. Create dedicated collections for filter views that deserve to rank." },
      { q: "How do I know if faceted navigation is causing problems?", a: "Look in Search Console's page indexing and crawl stats reports for large numbers of parameterized URLs crawled or indexed, and in server logs for crawler activity on filter URLs." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Faceted navigation creates a URL for many filter combinations, which can flood search engines with near-duplicate listings. Decide per facet type: index only facets with real search demand, enough products and their own content, ideally as clean subcategory URLs; keep sort orders, multi-select combinations and low-value filters out of crawling, with robots.txt being Google's most effective long-term method; canonicalize tracking parameters; return 404 for empty combinations; and avoid creating crawlable links to URLs you don't want crawled. Then make links, canonicals, sitemaps and robots.txt agree.",
        ],
      },
      {
        heading: "Why Filters Create SEO Problems",
        body: [
          "Ten colours, eight sizes, six brands and five price bands can combine into thousands of URLs for a single category, before sort orders and pagination multiply them further. Most of those pages list almost the same products. Search engines may spend crawl resources on them, index some as low-value duplicates and be slower to find new products.",
          "Filters are essential for shoppers, so the answer isn't removing them. It's controlling which filter states become crawlable, indexable URLs. For the shopper-facing design of filters, see [[/blogs/ecommerce-filters|ecommerce filters UX]].",
        ],
      },
      {
        heading: "Google's Guidance in Brief",
        body: [
          "Google's documentation on faceted navigation ([[https://developers.google.com/search/docs/crawling-indexing/crawling-managing-faceted-navigation|Google Search Central]]) makes several practical points:",
        ],
        checklist: [
          "If you don't need faceted URLs in search, prevent crawling; robots.txt is the most effective long-term method",
          "URL fragments are generally not crawled or indexed, so they avoid the problem",
          "rel=nofollow only works if every link to the URL has it",
          "rel=canonical may reduce crawling of non-canonical versions over time",
          "If you want facets indexed: use standard & separators, keep filter order consistent, and return 404 for combinations with no results",
        ],
      },
      {
        heading: "Methods Compared",
        body: [
          "Each method affects crawling and indexing differently. Combining them without understanding the interaction is a common mistake.",
        ],
        table: {
          headers: ["Method", "Stops crawling?", "Stops indexing?", "Notes"],
          rows: [
            ["robots.txt disallow", "Yes", "Usually; a blocked URL can still be indexed without content if linked", "Search engines can't see noindex or canonical on blocked URLs"],
            ["noindex", "No", "Yes", "Page must be crawlable for noindex to be seen"],
            ["rel=canonical", "Partly, over time", "Consolidates to the canonical if accepted", "A hint, not a directive"],
            ["rel=nofollow on links", "Only if every link has it", "No", "Weak on its own"],
            ["URL fragments (#)", "Yes", "Yes", "Filter states can't rank or be shared as pages"],
            ["No links to the URL", "Largely", "Largely", "Cleanest when filter states are generated without crawlable links"],
          ],
        },
        callout: {
          type: "note",
          text: "Don't block a URL in robots.txt and expect its noindex tag to work. If crawlers can't fetch the page, they can't read the tag.",
        },
      },
      {
        heading: "Decide Per Facet Type",
        body: [
          "The diagram above summarizes a practical default. Adjust it to your catalog and search demand.",
        ],
        table: {
          headers: ["Facet or URL type", "Default treatment"],
          rows: [
            ["Single facet with real demand (e.g. waterproof jackets)", "Indexable static URL with own title, H1 and copy; linked; in sitemap"],
            ["Brand within a category", "Index if demand and range justify it"],
            ["Size, price range, availability", "Keep out of crawling"],
            ["Multi-select combinations", "Block crawling"],
            ["Sort orders", "Block crawling"],
            ["Pagination", "Crawlable, self-canonical"],
            ["Tracking and session parameters", "Canonical to the clean URL; strip from internal links"],
            ["Combinations with no results", "Return 404"],
          ],
        },
      },
      {
        heading: "Indexing Facets on Purpose",
        body: [
          "When a filtered view deserves to rank, treat it as a real landing page rather than a side effect of the filter UI. Give it a clean, stable URL, a descriptive H1 and title, a short introduction, a place in navigation or category links, and inclusion in the sitemap. Keep the facet order consistent if it's encoded in the path, so one combination never appears under two URLs.",
          "Good candidates have search demand you can verify in autocomplete, Search Console or keyword tools, enough products to give a real choice, and a distinct intent from the parent category. See [[/blogs/ecommerce-category-page-seo|category page SEO]].",
        ],
        cta: {
          title: "Thousands of filter URLs in your index?",
          description: "ZSpace audits faceted navigation, indexing and crawl data and implements a consistent rule set in your platform.",
        },
      },
      {
        heading: "Implementation Patterns",
        body: [],
        checklist: [
          "Render filter controls as form inputs or buttons rather than crawlable links for low-value facets",
          "Keep valuable facets as normal links to their static URLs",
          "Use one parameter order and separator everywhere",
          "Strip tracking parameters from internal links",
          "Exclude parameterized URLs from XML sitemaps",
          "Add robots.txt rules for sort and multi-select parameters, and test them before release",
          "Return 404 for filter combinations with no products",
          "Keep canonical tags pointing to clean URLs",
        ],
      },
      {
        heading: "Shopify Notes",
        body: [
          "Shopify's default robots.txt disallows sorted collection URLs (*sort_by*) and combined tag URLs (/collections/*+*) ([[https://help.shopify.com/en/manual/promoting-marketing/seo/editing-robots-txt|Shopify Help Center]]). Storefront filters use parameters such as filter.v.option.color; check how your store's robots.txt and theme treat them. For filter views worth ranking, create a dedicated collection. Editing robots.txt.liquid is possible but Shopify calls it an unsupported customization that can cause loss of all traffic if done wrong. See [[/blogs/shopify-collection-page-seo|Shopify collection page SEO]].",
        ],
      },
      {
        heading: "Diagnosing Faceted Navigation Problems",
        body: [],
        checklist: [
          "Search Console page indexing: many “crawled, currently not indexed” or duplicate parameter URLs",
          "Crawl stats: a large share of requests going to parameterized URLs",
          "Server logs: crawler activity concentrated on filter and sort URLs",
          "Site crawl: filter links multiplying the number of discoverable URLs",
          "Indexed filter pages outranking the main category for its own keyword",
        ],
      },
      {
        heading: "Changing Rules Safely",
        body: [
          "Tightening faceted navigation rules on an established store changes what's crawled and indexed. Record which filter URLs currently get organic traffic before changing anything, turn the valuable ones into static landing pages first, then apply blocking rules, and monitor Search Console for several weeks.",
        ],
        cta: {
          title: "Want filters that help shoppers without hurting SEO?",
          description: "Talk to ZSpace about [[/services/website-development|ecommerce development]] and [[/services/shopify-development|Shopify development]].",
        },
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Blocking in robots.txt and relying on noindex on the same URLs",
          "Canonicalizing every filtered page to the category while linking to all of them",
          "Letting sort orders be crawled",
          "Indexing filter pages with no unique title or content",
          "Blocking a filtered URL that already earns organic traffic without a replacement",
          "Parameter order varying, so one combination has several URLs",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Faceted navigation needs a deliberate rule set: index a small number of valuable facets as real landing pages, keep the rest out of crawling, canonicalize parameters, return 404 for empty results and make every signal agree. For the wider system, see [[/blogs/ecommerce-seo|ecommerce SEO]] and [[/blogs/ecommerce-internal-linking|ecommerce internal linking]].",
        ],
      },
    ],
  },

  // -------------------------------------------------- 78 · SITE SEARCH
  {
    slug: "ecommerce-site-search",
    title: "Ecommerce Site Search Optimization: How to Improve Product Discovery",
    seoTitle: "Ecommerce Site Search Optimization: Improve Product Discovery",
    excerpt: "How to optimize ecommerce site search: product data, query handling, relevance, merchandising, analytics, a checklist, priorities and choosing a search engine.",
    category: "CRO",
    banner: "sitesearchloop",
    bannerAlt:
      "Ecommerce site search pipeline: query, normalization and synonyms, retrieval, ranking and merchandising, results, and click or purchase, with a loop from search analytics back into tuning, catalog and content fixes.",
    date: "2026-09-29",
    updated: "2026-09-29",
    readingTime: "18 min read",
    relatedServiceSlugs: ["cro-audit", "website-development", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "fashion-apparel"],
    faqs: [
      { q: "What is ecommerce site search?", a: "The search function inside an online store that lets shoppers find products by typing what they want. It includes the search interface, the engine that matches and ranks products, and the data and rules behind it." },
      { q: "How is this different from search UX?", a: "Search UX covers the interface: the search field, autocomplete, results page and no-results design. This guide covers what happens behind the box: data, relevance, merchandising, analytics and tooling." },
      { q: "Why do shoppers get irrelevant results?", a: "Usually because product data is incomplete, the engine doesn't understand synonyms, spelling or units, attributes aren't searchable, or ranking rules favor the wrong signals." },
      { q: "What is a zero-result search rate?", a: "The share of searches that return no products. Reviewing the actual zero-result queries is more useful than the rate, because it shows missing synonyms, missing products and data gaps." },
      { q: "What search metrics should I track?", a: "Search usage, zero-result rate and queries, search exit rate, refinement rate, click-through from results, and conversion and revenue per session for searchers versus non-searchers." },
      { q: "What is search merchandising?", a: "Rules that adjust results for commercial reasons, such as boosting a product for a query, pinning results, or demoting out-of-stock items. Use it sparingly so relevance stays first." },
      { q: "Should I use AI or semantic search?", a: "Semantic or vector search can handle natural-language and descriptive queries better than keyword matching. Many teams use hybrid approaches. Evaluate it on your own query set rather than on demos." },
      { q: "How do I test search relevance?", a: "Build a list of real, representative queries with the products that should appear, and check results against it whenever you change data, synonyms or rules." },
      { q: "When should I replace my store's native search?", a: "When the catalog is large or attribute-rich, queries are complex, native tools can't handle synonyms, typos or merchandising well enough, or you need better analytics. Check native capabilities first." },
      { q: "Who should own site search?", a: "Someone in ecommerce or merchandising, with support from whoever manages product data and development. Search needs regular tuning, not a one-off setup." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Improving ecommerce site search starts behind the search box. Make product data complete and searchable, including attributes, synonyms and units; handle misspellings, plurals and natural-language phrasing; rank by relevance first, with merchandising rules used sparingly; and review search analytics every week, especially zero-result and high-exit queries, turning them into synonym, data and content fixes. Test changes against a list of real queries with known correct results. Replace native search only when your catalog and queries outgrow it.",
        ],
      },
      {
        heading: "Why Search Deserves Its Own Program",
        body: [
          "Shoppers who search tell you exactly what they want, in their own words. When search fails, they often leave rather than browse. Unlike navigation, which you design once, search quality depends on thousands of queries, many of which you've never seen, and on product data that changes every day.",
          "For designing the search interface, see [[/blogs/ecommerce-search-ux|ecommerce search UX]]. For Shopify's native tools, see [[/blogs/shopify-search-optimization|Shopify search optimization]]. Search is one route in wider [[/blogs/ecommerce-product-discovery|product discovery]].",
        ],
      },
      {
        heading: "How Site Search Works",
        body: [
          "The diagram above shows the pipeline. A query is normalized (spelling, plurals, synonyms), the engine retrieves candidate products from its index, ranks them using relevance signals and business rules, and returns results. Analytics on what shoppers searched and did next feed back into tuning.",
        ],
        table: {
          headers: ["Stage", "What can go wrong"],
          rows: [
            ["Index", "Attributes, variant options or metafields not included"],
            ["Normalization", "Misspellings, plurals, units and abbreviations not recognized"],
            ["Synonyms", "Shoppers' words don't match catalog words"],
            ["Retrieval", "Matching only on titles; descriptive queries miss"],
            ["Ranking", "Out-of-stock or accessories ranked above main products"],
            ["Results", "No filters, poor sorting, no help when results are empty"],
          ],
        },
      },
      {
        heading: "Product Data Comes First",
        body: [
          "Search can only find what the data describes. Complete, consistent product titles, types, attributes and tags do more for search quality than any tuning.",
        ],
        checklist: [
          "Product titles include the product type, not only a collection name",
          "Attributes such as colour, material, size and compatibility are structured and searchable",
          "Consistent units and naming (cm vs centimetre, 13-inch vs 13\")",
          "Model numbers and SKUs searchable",
          "Common alternative names captured as synonyms or tags",
          "Out-of-stock status available to the ranking logic",
        ],
      },
      {
        heading: "Query Handling",
        body: [
          "Shoppers search with product types, attributes, problems, brand names, model numbers and full sentences. The engine should cope with spelling mistakes, singular and plural forms, units with and without spaces, and abbreviations. Synonyms bridge the gap between shoppers' words and the catalog's: sofa and couch, trainers and sneakers, hoodie and sweatshirt. Build synonym lists from real queries, not guesses, and watch for synonyms that broaden results too much.",
        ],
      },
      {
        heading: "Relevance and Ranking",
        body: [
          "Relevance should decide most rankings: exact product-type matches above partial matches, main products above accessories for generic queries, in-stock items above unavailable ones. Popularity and conversion signals can help order relevant results, but shouldn't push irrelevant products up. Filters on the results page then let shoppers narrow further; see [[/blogs/ecommerce-filters|ecommerce filters]].",
        ],
      },
      {
        heading: "Merchandising Rules",
        body: [
          "Merchandising lets you adjust results for business reasons: boosting a product for a query, pinning a result, promoting a new range or burying items with high return rates. Keep rules few, documented and dated, and review them regularly, because stale rules quietly degrade results.",
        ],
        cta: {
          title: "Shoppers searching and not finding?",
          description: "ZSpace reviews your search queries, data and relevance, and prioritizes the fixes that recover the most lost sessions.",
        },
      },
      {
        heading: "Search Analytics",
        body: [
          "Track searches as events with the query text. GA4 can report site search terms when configured, and many search tools provide their own analytics. The most useful reviews are qualitative: read the queries. For the wider measurement plan, see [[/blogs/ecommerce-analytics|ecommerce analytics]].",
        ],
        table: {
          headers: ["Metric", "What it tells you"],
          rows: [
            ["Search usage rate", "How much shoppers rely on search"],
            ["Zero-result queries", "Missing synonyms, products or data"],
            ["Search exit rate", "Queries that return results people don't want"],
            ["Refinement rate", "Shoppers retyping because results were poor"],
            ["Result click-through", "Whether top results look relevant"],
            ["Conversion and revenue per search session", "Commercial value of search, compared with non-search sessions"],
          ],
        },
      },
      {
        heading: "A Weekly Search Review",
        body: [],
        checklist: [
          "Read the top zero-result queries and fix each: synonym, data, content or a genuine gap in the range",
          "Read high-volume queries with high exit rates and check the results yourself",
          "Check new product ranges are findable by the words shoppers use",
          "Review merchandising rules for expiry",
          "Log changes so you can connect them to metric shifts",
        ],
      },
      {
        heading: "Testing Relevance",
        body: [
          "Build a test set of real queries covering product types, attributes, brands, misspellings and natural-language searches, each with the products that should appear near the top. Run it after every data or configuration change. It catches regressions that dashboards miss. For larger changes, A/B test search configurations on revenue per search session. See [[/blogs/ecommerce-ab-testing|ecommerce A/B testing]].",
        ],
      },
      {
        heading: "Semantic and AI Search",
        body: [
          "Keyword matching struggles with descriptive queries such as “warm jacket for hiking in rain”. Semantic or vector search matches meaning rather than exact words, and hybrid engines combine both. They can improve recall for natural-language queries but still depend on good product data and need evaluation on your own query set. Be cautious with generated answers inside search results: they must be accurate about price, stock and specifications.",
        ],
      },
      {
        heading: "Choosing a Search Engine",
        body: [],
        table: {
          headers: ["Option", "Fits when", "Consider"],
          rows: [
            ["Platform native search", "Small to mid catalogs with simple queries", "Configure synonyms, filters and data before replacing"],
            ["Third-party search service", "Large or attribute-rich catalogs, merchandising needs", "Cost, integration with themes or front end, data sync"],
            ["Custom build", "Unusual catalogs or strict requirements", "Engineering and ongoing relevance ownership"],
          ],
        },
      },
      {
        heading: "A Site Search Optimization Checklist",
        body: [],
        checklist: [
          "Results count and clicks tracked for every search",
          "Weekly review of top, zero-result and high-exit queries",
          "Synonyms maintained with owners and reasons",
          "Typo tolerance on for brands and product names",
          "Key attributes indexed and filterable",
          "Exact SKU and model matches rank first",
          "Out-of-stock handling agreed",
          "Autocomplete suggests queries that return results",
          "Search results offer the same filters as category pages",
          "Empty state offers alternatives",
          "Search accessible by keyboard and screen reader",
          "Changes logged and evaluated",
        ],
      },
      {
        heading: "The Search Guides",
        body: [
          "This article is the hub for site search optimization. Go deeper with [[/blogs/ecommerce-search-analytics|search analytics]], [[/blogs/ecommerce-zero-result-searches|zero-result searches]], [[/blogs/ecommerce-search-autocomplete|autocomplete]], [[/blogs/ecommerce-search-ranking|search ranking]], [[/blogs/ecommerce-semantic-search|semantic search]], [[/blogs/ecommerce-natural-language-search|natural language search]], [[/blogs/ecommerce-search-personalization|search personalization]], [[/blogs/ecommerce-merchandising-automation|merchandising automation]] and [[/blogs/ecommerce-search-vs-navigation|search vs navigation]]. For the interface, see [[/blogs/ecommerce-search-ux|search UX]].",
        ],
      },
      {
        heading: "Prioritizing Search Work",
        body: [
          "Most stores get the most from fixing data and measurement before buying new technology. A sensible order is: track results counts and clicks, clear the top zero-result queries, fix product attributes and indexing, tune ranking for head queries, improve autocomplete, then consider semantic and natural language search where query analysis shows descriptive queries failing.",
        ],
        table: {
          headers: ["Order", "Work", "Why first"],
          rows: [
            ["1", "Measurement", "Can't improve what isn't tracked"],
            ["2", "Zero-result fixes", "Explicit, cheap, immediate"],
            ["3", "Product data and indexing", "Fixes classes of queries"],
            ["4", "Ranking", "Head queries drive most revenue"],
            ["5", "Autocomplete", "Prevents failures upstream"],
            ["6", "Semantic and NL search", "When descriptive queries fail"],
          ],
        },
      },
      {
        heading: "Ownership",
        body: [
          "Search improves when someone owns it. Give an ecommerce or merchandising owner a weekly review slot, access to analytics and synonym tools, and a route to request data fixes from whoever manages the catalog.",
        ],
        cta: {
          title: "Want site search that finds what shoppers mean?",
          description: "Talk to ZSpace about a [[/services/cro-audit|search and discovery audit]], [[/services/website-development|search implementation]] and [[/services/shopify-development|Shopify search setup]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Site search improves through data quality, sensible query handling, relevance-first ranking with restrained merchandising, and a weekly habit of reading real queries. Test changes against known queries and choose tools by what your catalog needs. The interface matters too; pair this with [[/blogs/ecommerce-search-ux|search UX]] design.",
          "For related guides, see [[/blogs/fashion-ecommerce-search|fashion search]], [[/blogs/grocery-ecommerce-search|grocery search]], [[/blogs/b2b-ecommerce-search|B2B search]], [[/blogs/consumer-electronics-ecommerce-search|electronics search]] and [[/blogs/furniture-ecommerce-search|furniture search]] and [[/blogs/sports-ecommerce-search|sports search]].",
        ],
      },
    ],
  },

  // ----------------------------------------- 80 · PRODUCT STRUCTURED DATA
  {
    slug: "product-structured-data-ecommerce",
    title: "Product Structured Data for Ecommerce: Complete Guide",
    excerpt:
      "How to implement Product structured data: merchant listings vs product snippets, required properties, offers, shipping, returns, reviews, variants and testing.",
    category: "Shopify & Ecommerce",
    banner: "productschema",
    bannerAlt:
      "Product structured data model: a ProductGroup with variants, a Product with name, image, SKU, GTIN and brand, an Offer with price, currency, availability, shipping and returns, plus ratings, reviews and a matching Merchant Center feed.",
    date: "2026-09-29",
    readingTime: "13 min read",
    relatedServiceSlugs: ["website-development", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce"],
    faqs: [
      { q: "What is product structured data?", a: "Machine-readable information, usually JSON-LD using schema.org vocabulary, that describes a product on a page: its name, images, brand, identifiers, price, availability, shipping, returns and reviews." },
      { q: "What's the difference between product snippets and merchant listings?", a: "Google describes product snippets as suited to editorial and review pages, and merchant listing experiences as for pages where shoppers can buy the product, with more detail such as shipping and returns." },
      { q: "What properties are required for merchant listings?", a: "Google's merchant listing documentation requires name, image and offers, with price and priceCurrency in the offer. Availability, GTIN, brand, shipping details, return policy, ratings and reviews are recommended." },
      { q: "Can I mark up my own product reviews?", a: "Product reviews collected on your store can be marked up if they're genuine and visible on the page. Google's guidelines prohibit fake or undisclosed incentivized reviews, and self-serving review markup on Organization or LocalBusiness pages isn't eligible for review stars." },
      { q: "How should variants be marked up?", a: "Google supports ProductGroup with hasVariant, variesBy and productGroupID. Each variant needs a unique identifier and should be selectable with a distinct URL." },
      { q: "Is JSON-LD better than microdata?", a: "Google supports several formats and generally recommends JSON-LD because it's easier to maintain separately from the visible HTML." },
      { q: "Does structured data improve rankings?", a: "It isn't a ranking guarantee. It helps Google understand the page and makes it eligible for richer results and shopping experiences." },
      { q: "Do I need Merchant Center as well?", a: "Not for structured data to work, but Google says providing both structured data and a Merchant Center feed maximizes eligibility and helps it verify your data." },
      { q: "Should category pages have Product markup?", a: "Product rich results are for pages about a specific product. Don't mark up a category page as a single product. Use BreadcrumbList for hierarchy; see the category page SEO guide." },
      { q: "How do I test structured data?", a: "Use Google's Rich Results Test on individual pages and Search Console's merchant listing and product snippet reports to find errors across the site." },
      { q: "Do I need special schema for AI Overviews?", a: "No. Google states there's no special schema.org structured data needed to appear in AI Overviews or AI Mode." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Product structured data is JSON-LD that describes a product page to search engines. For pages where shoppers can buy, Google's merchant listing experiences require the product's name, image and an offer with price and currency, and recommend availability, brand, GTIN, shipping details, return policy, ratings and reviews. Use ProductGroup for variants, mark up only what the page visibly shows, keep data in sync with the page and your Merchant Center feed, never mark up fake reviews, and validate with the Rich Results Test and Search Console reports.",
        ],
      },
      {
        heading: "What Product Structured Data Does",
        body: [
          "Structured data doesn't change what shoppers see on your page. It gives search engines precise facts about the product in a standard vocabulary, so they don't have to infer price or stock from the layout. That makes pages eligible for richer results such as price, availability, ratings, shipping and returns information, and for shopping experiences in Google Search.",
          "This guide focuses on Google's documentation, the most detailed public reference. Other search engines and AI systems also read schema.org markup. It's one part of [[/blogs/ecommerce-seo|ecommerce SEO]]; category pages are covered in [[/blogs/ecommerce-category-page-seo|category page SEO]].",
        ],
      },
      {
        heading: "Product Snippets vs Merchant Listings",
        body: [
          "Google describes two kinds of product results ([[https://developers.google.com/search/docs/appearance/structured-data/product|Google Search Central]]).",
        ],
        table: {
          headers: ["Type", "For", "Emphasis"],
          rows: [
            ["Product snippets", "Editorial and review pages where you can't buy directly", "Review information, pros and cons"],
            ["Merchant listing experiences", "Pages where shoppers can buy the product", "Price, availability, shipping, returns, sizing"],
          ],
        },
        callout: {
          type: "note",
          text: "Google states that only pages where a shopper can purchase are eligible for merchant listing experiences, not pages linking to other sellers.",
        },
      },
      {
        heading: "Required and Recommended Properties",
        body: [
          "From Google's merchant listing documentation ([[https://developers.google.com/search/docs/appearance/structured-data/merchant-listing|Google Search Central]]):",
        ],
        table: {
          headers: ["Property", "Status", "Notes"],
          rows: [
            ["name", "Required", "The product's name"],
            ["image", "Required", "Crawlable product images"],
            ["offers", "Required", "A nested Offer"],
            ["offers.price", "Required", "Greater than zero for merchant listings"],
            ["offers.priceCurrency", "Required", "ISO 4217 code, e.g. USD, EUR, INR"],
            ["offers.availability", "Recommended", "InStock, OutOfStock, PreOrder, etc."],
            ["brand", "Recommended", "The brand name"],
            ["gtin / sku", "Recommended", "Global identifiers help matching"],
            ["itemCondition", "Recommended", "New, refurbished, used"],
            ["shippingDetails", "Recommended", "Rates and delivery times"],
            ["hasMerchantReturnPolicy", "Recommended", "Return window and method"],
            ["aggregateRating, review", "Recommended", "Only if genuine and visible"],
          ],
        },
      },
      {
        heading: "A Minimal Example",
        body: [
          "Here is a simplified Product with an Offer. Values are placeholders; your markup should come from real product data and match what the page shows.",
        ],
        code: { label: "JSON-LD: Product with Offer (placeholder values)", text: PRODUCT_JSON_LD },
      },
      {
        heading: "Variants and ProductGroup",
        body: [
          "For products sold in several sizes, colours or materials, Google supports ProductGroup with productGroupID (the parent SKU), variesBy (the dimensions that differ) and hasVariant (the individual Product variants) ([[https://developers.google.com/search/docs/appearance/structured-data/product-variants|Google Search Central]]). Two patterns exist:",
        ],
        table: {
          headers: ["Pattern", "Requirements"],
          rows: [
            ["Single-page variants", "One canonical URL for the ProductGroup; variants selected by parameters such as ?color=green"],
            ["Multi-page variants", "Each variant page repeats the ProductGroup definition with full markup"],
          ],
        },
        checklist: [
          "Each variant has a unique SKU or GTIN",
          "Each variant can be preselected with a distinct URL",
          "Variant names are more specific than the group name",
        ],
      },
      {
        heading: "Shipping and Returns",
        body: [
          "Shipping details and return policies help shoppers compare offers. You can include them in Offer markup, and Google also lets merchants configure them in Merchant Center. Keep whichever source you use accurate for each market; a mismatch between markup, page and feed undermines trust in your data.",
        ],
      },
      {
        heading: "Reviews and Ratings",
        body: [
          "Google's review snippet guidelines require that marked-up reviews be readily available to users on the page and prohibit fake or undisclosed incentivized reviews ([[https://developers.google.com/search/docs/appearance/structured-data/review-snippet|Google Search Central]]). Pages using Organization or LocalBusiness markup for reviews the business controls about itself aren't eligible for star review features. For product pages, mark up only genuine reviews shown on that page, and never invent ratings. See [[/blogs/ecommerce-product-reviews-ux|product reviews UX]] for how to display them.",
        ],
        cta: {
          title: "Structured data errors in Search Console?",
          description: "ZSpace fixes product markup at the template level so it stays accurate as prices, stock and reviews change.",
        },
      },
      {
        heading: "Keep Markup, Page and Feed in Sync",
        body: [
          "The most common problems aren't syntax errors. They're mismatches: markup showing a price the page no longer shows, stock marked available when the page says sold out, or a sale price in the feed but not on the page. Generate markup from the same data the page uses, update it whenever prices or availability change, and keep your Merchant Center feed on the same source. Google notes that providing both structured data and a feed helps it verify your data.",
        ],
      },
      {
        heading: "Platform Notes",
        body: [
          "Shopify says its themes include product schema automatically, but coverage varies by theme; check for missing brand, identifiers, shipping and returns, and for duplicate Product blocks added by reviews or SEO apps. On headless and custom builds, you own the markup entirely. See [[/blogs/shopify-product-seo|Shopify product SEO]] and [[/blogs/shopify-hydrogen|Shopify Hydrogen]].",
        ],
      },
      {
        heading: "Other Useful Schema for Stores",
        body: [],
        table: {
          headers: ["Type", "Use"],
          rows: [
            ["BreadcrumbList", "Category and product hierarchy; see [[/blogs/ecommerce-internal-linking|internal linking]]"],
            ["Organization", "Your business identity, logo and contact details on the homepage or about page"],
            ["WebSite", "Site name"],
            ["Article", "Guides and blog posts"],
            ["FAQPage", "Visible FAQs; Google currently shows FAQ rich results only for well-known government and health sites"],
          ],
        },
      },
      {
        heading: "Testing and Monitoring",
        body: [],
        checklist: [
          "Rich Results Test on a sample of product templates and variants",
          "Search Console merchant listing and product snippet reports for site-wide errors",
          "Check that markup changes with price, sale and stock changes",
          "Confirm only one Product block per page",
          "Re-test after theme or app updates",
        ],
        cta: {
          title: "Want product data that search engines can trust?",
          description: "Talk to ZSpace about [[/services/website-development|ecommerce development]] and [[/services/shopify-development|Shopify theme fixes]] for structured data.",
        },
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Marking up reviews or ratings that aren't visible",
          "Price or availability in markup out of sync with the page",
          "Duplicate Product blocks from theme and apps",
          "Product markup on category pages",
          "Missing identifiers on products that have them",
          "Hard-coded markup that doesn't change with the variant selected",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Product structured data works when it's complete, accurate and generated from the same data as the page and feed. Cover the required properties, add the recommended ones you can support, handle variants with ProductGroup, mark up only genuine visible reviews, and monitor it. For the broader picture, see [[/blogs/ecommerce-seo|ecommerce SEO]].",
        ],
      },
    ],
  },
];
