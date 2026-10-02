import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch three, part two: wayfinding and recovery —
 * breadcrumbs, empty states and 404 pages. Merged into `posts` in
 * blog-data.ts.
 */

export const commercePosts11: BlogPost[] = [
  // ---------------------------------------------------- 118 · BREADCRUMBS
  {
    slug: "ecommerce-breadcrumbs",
    title: "Ecommerce Breadcrumbs: How They Improve Navigation and SEO",
    excerpt:
      "How to design ecommerce breadcrumbs: hierarchy vs attribute vs history trails, products in several categories, mobile, structured data and common mistakes.",
    category: "UI/UX",
    banner: "breadcrumbtypes",
    bannerAlt:
      "Three types of ecommerce breadcrumbs: hierarchy trails such as Home, Men, Jackets; attribute trails reflecting applied filters; and history links back to results that keep filters and scroll position.",
    date: "2026-09-29",
    readingTime: "10 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce"],
    faqs: [
      { q: "What are ecommerce breadcrumbs?", a: "A trail of links, usually near the top of category and product pages, showing where the page sits in the store's hierarchy, such as Home › Men › Jackets, so shoppers can move up to broader categories." },
      { q: "Do breadcrumbs help SEO?", a: "They add internal links up the hierarchy and, with BreadcrumbList structured data, help search engines understand where a page sits. Google may show breadcrumb-style paths in results." },
      { q: "Which breadcrumb type is best for stores?", a: "Hierarchy-based breadcrumbs are the best default. Attribute-based trails and “back to results” links can complement them but shouldn't replace them." },
      { q: "What if a product is in several categories?", a: "Show one consistent primary path, usually the most specific or most important category, and mark up the same path in structured data." },
      { q: "Should the current page be a link?", a: "No. NN/g's guidance is that every item except the current page should be a link; the current page can be shown as plain text." },
      { q: "Should breadcrumbs start with Home?", a: "Yes, typically. NN/g recommends starting the trail with Home." },
      { q: "How should breadcrumbs work on mobile?", a: "Keep them short: show the immediate parent as a back-style link, or let the full trail scroll horizontally. Don't let them take up the first screen." },
      { q: "Is a “Back to results” link a breadcrumb?", a: "It's a history-based link. It's useful because it can restore filters and scroll position, but it complements the hierarchy trail rather than replacing it." },
      { q: "What structured data should breadcrumbs use?", a: "BreadcrumbList, with each item's name and URL matching the visible trail." },
      { q: "Do Shopify themes include breadcrumbs?", a: "Some do and some don't. Where they're missing, they can be added in theme code with BreadcrumbList markup." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Ecommerce breadcrumbs show where a category or product sits in the store and let shoppers step up to broader pages. Use a hierarchy trail as the default (Home › Men › Jackets), make every item except the current page a link, choose one consistent primary path for products that belong to several categories, keep the trail compact on mobile, and mark it up with BreadcrumbList structured data that matches what's visible. Add a “Back to results” link where shoppers arrive from filtered lists or search, because it can restore their filters.",
        ],
      },
      {
        heading: "Why Breadcrumbs Matter in Stores",
        body: [
          "Shoppers often land deep in a store, on a product page from search or an ad. Breadcrumbs answer “where am I?” and offer a route to similar products one level up. NN/g describes breadcrumbs as an important wayfinding aid that shows the current page and its ancestors, typically back to the homepage ([[https://www.nngroup.com/articles/breadcrumbs/|NN/g]]). They're part of [[/blogs/ecommerce-navigation-design|ecommerce navigation]] and the store's [[/blogs/ecommerce-internal-linking|internal linking]].",
        ],
      },
      {
        heading: "Three Types of Breadcrumb",
        body: ["The diagram above compares them."],
        table: {
          headers: ["Type", "Shows", "Use"],
          rows: [
            ["Hierarchy", "The page's place in the category tree", "Default for category and product pages"],
            ["Attribute", "Filters applied (e.g. Jackets › Waterproof)", "Large catalogs; keep separate from hierarchy"],
            ["History", "Where the shopper came from", "“Back to results” restoring filters and scroll"],
          ],
        },
      },
      {
        heading: "Design Guidelines",
        body: [],
        checklist: [
          "Start with Home",
          "Every item except the current page is a link",
          "Use category names shoppers recognise",
          "A clear separator, such as ›, between items",
          "Place near the top, above the page title",
          "Smaller and quieter than the main navigation",
          "Don't repeat the full trail in multiple places",
        ],
      },
      {
        heading: "Products in Several Categories",
        body: [
          "A jacket might sit in Men › Jackets and in Sale and in Winter Edit. Show one primary path, usually the most specific product-type category, so the trail is stable and matches the canonical product URL. Campaign collections make poor breadcrumb parents because they come and go. If shoppers arrived from a filtered list or edit, offer a separate “Back to results” link.",
        ],
      },
      {
        heading: "Mobile Breadcrumbs",
        body: [
          "Full trails can wrap onto several lines on small screens and push content down. Options: show only the immediate parent as a back link (‹ Jackets), truncate the middle, or let the trail scroll horizontally on one line. Keep touch targets large enough to tap. See [[/blogs/mobile-ecommerce-ux|mobile ecommerce UX]].",
        ],
        cta: {
          title: "Shoppers landing deep and leaving?",
          description: "ZSpace Labs reviews navigation, breadcrumbs and internal links so every landing page leads somewhere useful.",
        },
      },
      {
        heading: "Structured Data",
        body: [
          "Mark breadcrumbs up with BreadcrumbList, listing each item's name and URL in order, matching the visible trail. Keep it consistent with the product's canonical URL and primary category. Validate with Google's Rich Results Test. See [[/blogs/product-structured-data-ecommerce|product structured data]].",
        ],
      },
      {
        heading: "Accessibility",
        body: [
          "Wrap the trail in a nav element with an accessible label such as “Breadcrumb”, use an ordered list, mark the current page with aria-current=\"page\", and hide decorative separators from screen readers.",
        ],
      },
      {
        heading: "Platform Notes",
        body: [
          "Shopify themes vary: some include breadcrumbs, some don't, and collection-based product URLs complicate which parent to show. A theme snippet that uses a product's primary collection, stored in a metafield, gives a consistent trail. On custom builds, generate breadcrumbs and BreadcrumbList from the same category data. See [[/blogs/shopify-collection-page-seo|Shopify collection SEO]].",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Breadcrumbs that show the session path instead of the hierarchy",
          "Different trails for the same product on different visits",
          "Campaign collections as parents",
          "The current page as a link",
          "Structured data that doesn't match the visible trail",
          "Trails that wrap into several lines on mobile",
        ],
        cta: {
          title: "Want navigation that works from any landing page?",
          description: "Talk to ZSpace Labs about [[/services/ui-ux-design|navigation UX]] and [[/services/website-development|structured data implementation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Breadcrumbs are small but useful: they orient shoppers who land deep, connect products to categories and describe the hierarchy to search engines. Use hierarchy trails, one primary path per product, compact mobile patterns and matching structured data. For the menus above them, see [[/blogs/ecommerce-mega-menu-design|mega menu design]].",
        ],
      },
    ],
  },

  // ---------------------------------------------------- 119 · EMPTY STATES
  {
    slug: "ecommerce-empty-states",
    title: "Ecommerce Empty States: How to Design Better No-Result Experiences",
    seoTitle: "Ecommerce Empty States: Design Better No-Result Experiences",
    excerpt:
      "How to design ecommerce empty states: no search results, filters that match nothing, empty carts, wishlists and order histories, and how to prevent them.",
    category: "UI/UX",
    banner: "emptystates",
    bannerAlt:
      "Four ecommerce empty states and what each should offer: no search results, filters that match nothing, an empty cart, and empty wishlists or order histories, each explaining what happened and offering a next step.",
    date: "2026-09-29",
    readingTime: "10 min read",
    relatedServiceSlugs: ["ui-ux-design", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce"],
    faqs: [
      { q: "What is an empty state in ecommerce?", a: "Any screen that has nothing to show: a search with no results, filters that exclude every product, an empty cart, wishlist or order history, or a sold-out collection." },
      { q: "What should a no-results page show?", a: "The query repeated, spelling suggestions or corrections, related or popular categories, relevant products, a way to change the search and a contact option." },
      { q: "How do I prevent filters from returning nothing?", a: "Show result counts on filter options, disable or hide options that would return zero, and offer an easy way to undo the last filter." },
      { q: "What should an empty cart page include?", a: "A clear statement that the cart is empty, recently viewed items, a route back to shopping, and sign-in if the shopper may have saved items on another device." },
      { q: "Are empty states a conversion issue?", a: "Yes. Shoppers who hit a dead end often leave. Every empty state should offer a useful next step." },
      { q: "How do I find empty states on my store?", a: "Review zero-result search queries, filter combinations with no products, and recordings of sessions that exit on empty pages." },
      { q: "Should empty states be indexed by search engines?", a: "No. Empty search results and filter pages with no products shouldn't be indexable; Google recommends returning a 404 for filter combinations with no results." },
      { q: "What tone should empty states use?", a: "Plain and helpful: say what happened, why if you know, and what to do next. Avoid jokes that don't help." },
      { q: "What about sold-out products and collections?", a: "Say they're sold out, offer back-in-stock alerts, and show alternatives rather than an empty grid." },
      { q: "How is this different from 404 pages?", a: "Empty states are valid pages with no content to show. 404 pages are for URLs that don't exist. Both need recovery routes." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Good ecommerce empty states turn a dead end into a next step. For no search results, repeat the query, suggest corrections and show related categories and products. For filters that match nothing, name the filters, offer to undo the last one and prevent the situation with result counts. For an empty cart, show recently viewed items and a route back to shopping. For empty wishlists and order histories, explain the feature and offer one clear action. Each should say what happened, why if known, and what to do next.",
        ],
      },
      {
        heading: "Why Empty States Deserve Design",
        body: [
          "Empty states appear at moments of friction: a search that failed, filters that went too far, a cart that's been emptied. Designers often leave them as a line of text, and shoppers leave. Designed well, they recover sessions and teach shoppers how the store works. This belongs to the listing-page cluster led by [[/blogs/ecommerce-category-page-design|product listing page UX]].",
        ],
      },
      {
        heading: "No Search Results",
        body: [],
        checklist: [
          "Repeat the query so shoppers can spot typos",
          "Suggest spelling corrections or search for the corrected term automatically, and say so",
          "Show related categories and popular or relevant products",
          "Offer the search field again, pre-filled",
          "Give a contact or chat option for specific requests",
          "Log the query so the team can fix synonyms or data",
        ],
        callout: {
          type: "tip",
          text: "Zero-result queries are a free list of fixes. Review them weekly; see [[/blogs/ecommerce-site-search|ecommerce site search]].",
        },
      },
      {
        heading: "Filters That Match Nothing",
        body: [
          "The best fix is prevention: show counts next to filter options and disable or hide options that would return zero products. When a combination still returns nothing, name the applied filters, offer to remove the last one or each individually, and show near matches. See [[/blogs/ecommerce-filters|ecommerce product filters]].",
        ],
      },
      {
        heading: "Empty Cart",
        body: [
          "An empty cart is often reached by removing items or on a new device. Say it's empty, show recently viewed products, link to key categories, and prompt sign-in if saved carts might exist. Don't hide the navigation. See [[/blogs/ecommerce-cart-ux|ecommerce cart UX]].",
        ],
        cta: {
          title: "How many sessions end on a dead end?",
          description: "ZSpace Labs audits search, filters and empty states and designs recovery routes that keep shoppers moving.",
        },
      },
      {
        heading: "Empty Wishlists, Orders and Accounts",
        body: [
          "For first-time use, explain what the feature does and how to use it (“Tap ♡ on any product to save it here”) and offer one relevant action. For empty order histories, link to shopping and help. These are also good moments to explain account benefits honestly.",
        ],
      },
      {
        heading: "Sold-Out Products and Collections",
        body: [
          "A collection where everything is sold out looks like an error. Say that items are sold out, offer back-in-stock alerts, show alternatives, and hide the collection from navigation if it will stay empty. Keep sold-out product pages live if the product will return.",
        ],
      },
      {
        heading: "Writing for Empty States",
        body: [
          "Use the same structure every time: what happened, why if you know, what to do next. Keep it short and specific. See [[/blogs/ux-writing|UX writing]] for microcopy principles.",
        ],
        table: {
          headers: ["Weak", "Better"],
          rows: [
            ["No results.", "No results for “rain jaket”. Did you mean “rain jacket”?"],
            ["Oops! Nothing here.", "No jackets match Size XS + Waterproof. Remove “Waterproof”?"],
            ["Your cart is empty.", "Your cart is empty. Items you viewed recently are below."],
          ],
        },
      },
      {
        heading: "SEO and Technical Notes",
        body: [
          "Empty search result pages and filter combinations with no products shouldn't be indexable. Google's faceted navigation guidance is to return a 404 for filter combinations with no results ([[https://developers.google.com/search/docs/crawling-indexing/crawling-managing-faceted-navigation|Google Search Central]]). Make sure empty states announce themselves to screen readers when results update dynamically.",
        ],
      },
      {
        heading: "Empty State Checklist",
        body: [],
        checklist: [
          "Every empty state says what happened and offers a next step",
          "No-results pages suggest corrections and alternatives",
          "Filters show counts and prevent zero results",
          "Empty cart shows recently viewed items",
          "Sold-out collections offer alerts and alternatives",
          "Zero-result queries logged and reviewed",
          "Dynamic updates announced to assistive technology",
        ],
        cta: {
          title: "Want fewer dead ends in your store?",
          description: "Talk to ZSpace Labs about [[/services/ui-ux-design|ecommerce UX]] and a [[/services/cro-audit|search and discovery audit]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Empty states are where shoppers decide whether to keep going. Prevent them where you can, explain them clearly when they happen, and always offer a useful next step. For URLs that don't exist at all, see [[/blogs/ecommerce-404-page|ecommerce 404 pages]].",
          "For related guides, see [[/blogs/ecommerce-zero-result-searches|diagnosing zero-result searches]].",
        ],
      },
    ],
  },

  // ---------------------------------------------------- 120 · 404 PAGE
  {
    slug: "ecommerce-404-page",
    title: "Ecommerce 404 Pages: How to Turn Broken Paths Into Better Shopping Experiences",
    seoTitle: "Ecommerce 404 Pages: Turn Broken Paths Into Shopping",
    excerpt:
      "How to design and manage ecommerce 404 pages: correct status codes, recovery content, search, redirects for discontinued products, monitoring and soft 404s.",
    category: "UI/UX",
    banner: "page404",
    bannerAlt:
      "Ecommerce 404 page wireframe: normal header and navigation, a plain message, a prominent search field, category links, bestsellers and contact links, with a note that the HTTP status must stay 404.",
    date: "2026-09-29",
    readingTime: "10 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce"],
    faqs: [
      { q: "What should an ecommerce 404 page include?", a: "A plain explanation, the normal header and navigation, a prominent search field, links to main categories, popular products and a contact option." },
      { q: "Should a 404 page return a 404 status code?", a: "Yes. A page that says “not found” but returns 200 is a soft 404, which search engines treat as an error and which can waste crawl resources." },
      { q: "Should I redirect all 404s to the homepage?", a: "No. Redirect a URL only when there's a genuinely relevant replacement. Redirecting everything to the homepage confuses shoppers, and Google may treat such redirects as soft 404s." },
      { q: "What should happen to discontinued product pages?", a: "Redirect to a close replacement or relevant category if one exists. Otherwise let the page return 404 or 410. Keep temporarily out-of-stock products live." },
      { q: "How do I find 404 errors on my store?", a: "Check Search Console's page indexing report, crawl the site for broken internal links, and track 404 page views in analytics with the requested URL and referrer." },
      { q: "Do 404 errors hurt SEO?", a: "404s for pages that genuinely don't exist are normal. Problems arise when important pages 404 by mistake, when internal links point to 404s, or when valuable URLs lose their redirects." },
      { q: "Can a 404 page have personality?", a: "Yes, if it stays helpful. A brief, on-brand line is fine; the recovery routes matter more." },
      { q: "How do I customize the 404 page on Shopify?", a: "Edit the 404 template in your theme, and manage redirects in Shopify's URL redirects settings." },
      { q: "What's a soft 404?", a: "A page that tells users something isn't found or is empty but returns a success status, or a redirect to an irrelevant page. Search Console reports these." },
      { q: "Should 404 pages be tracked in analytics?", a: "Yes. Record the requested URL and referrer so you can fix broken links and add redirects where they're justified." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An ecommerce 404 page should return a real 404 status and help shoppers keep shopping: keep the normal header and navigation, explain plainly that the page wasn't found, put a search field front and centre, and offer main categories, popular products and a contact option. Behind the page, prevent 404s: redirect discontinued products and changed URLs to genuinely relevant replacements, fix internal links that point to missing pages, avoid redirecting everything to the homepage, and monitor 404s in Search Console and analytics.",
        ],
      },
      {
        heading: "How Stores End Up With 404s",
        body: [
          "Stores create 404s constantly: discontinued products, renamed handles, retired campaign collections, migrations, typos in marketing links and old links from other sites. A few are inevitable; many are preventable with a product retirement process and redirects. For the SEO side of inventory changes, see [[/blogs/ecommerce-seo|ecommerce SEO]].",
        ],
      },
      {
        heading: "Designing the 404 Page",
        body: ["The diagram above shows the essentials."],
        checklist: [
          "The site's normal header, navigation and footer",
          "A short, plain message: the page wasn't found or has moved",
          "A prominent search field",
          "Links to main categories and new arrivals",
          "Popular or bestselling products",
          "Contact or help links",
          "Optional: a report-a-broken-link option",
        ],
      },
      {
        heading: "Status Codes Matter",
        body: [
          "The page must return an HTTP 404 (or 410 for deliberately removed content). A “not found” page that returns 200 is a soft 404: search engines may index it as thin content and keep recrawling it. Google's documentation explains how status codes affect crawling and how Search Console reports soft 404s ([[https://developers.google.com/search/docs/advanced/crawling/soft-404-errors|Google Search Central]]).",
        ],
      },
      {
        heading: "When to Redirect and When to 404",
        body: [],
        table: {
          headers: ["Situation", "Handling"],
          rows: [
            ["Product temporarily out of stock", "Keep the page live; show availability and alerts"],
            ["Product discontinued, close replacement", "301 to the replacement"],
            ["Product discontinued, relevant category exists", "301 to the category if it genuinely helps"],
            ["No relevant replacement", "404 or 410"],
            ["URL changed (handle, migration)", "301 to the new URL"],
            ["Mistyped URL", "404 with good recovery"],
          ],
        },
        callout: {
          type: "note",
          text: "Redirecting every missing URL to the homepage is a common shortcut. It confuses shoppers and can be treated as a soft 404.",
        },
      },
      {
        heading: "A Product Retirement Process",
        body: [
          "Most 404s on established stores come from products being removed without a plan. Decide, for each discontinued product, whether it has a replacement or relevant category, create the redirect before unpublishing, update internal links and feeds, and keep a record. See [[/blogs/shopify-product-seo|Shopify product SEO]] for platform specifics.",
        ],
        cta: {
          title: "Losing traffic to broken paths?",
          description: "ZSpace Labs finds the 404s and redirect gaps that matter and sets up a process so they don't come back.",
        },
      },
      {
        heading: "Monitoring 404s",
        body: [],
        checklist: [
          "Search Console page indexing report: not found and soft 404",
          "Site crawls for internal links pointing to 404s",
          "Analytics events on the 404 template with requested URL and referrer",
          "Marketing link checks before campaigns go live",
          "Redirect audits after migrations and redesigns",
        ],
      },
      {
        heading: "Platform Notes",
        body: [
          "On Shopify, the 404 page is a theme template that can be customized, and redirects are managed in the admin's URL redirects, individually or by CSV import; Shopify offers to create a redirect when you change a handle. On custom builds, make sure the framework returns a true 404 status for missing routes. See [[/blogs/migrating-to-shopify-guide|Shopify store migration]].",
        ],
      },
      {
        heading: "Accessibility and Performance",
        body: [
          "The 404 page should load fast and work with keyboards and screen readers like any other page: a clear heading, focusable search, meaningful link text. Avoid heavy animations that delay recovery.",
        ],
        cta: {
          title: "Want every broken path to lead back to shopping?",
          description: "Talk to ZSpace Labs about [[/services/ui-ux-design|recovery UX]], [[/services/website-development|technical SEO fixes]] and [[/services/shopify-development|Shopify redirects]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A good 404 page recovers shoppers; a good redirect process prevents most 404s in the first place. Return real 404s, offer search and useful routes, redirect only to relevant replacements, and monitor. For valid pages with nothing to show, see [[/blogs/ecommerce-empty-states|ecommerce empty states]].",
          "Related: [[/blogs/ecommerce-empty-states|ecommerce empty states]] and [[/blogs/ecommerce-site-search|site search]].",
        ],
      },
    ],
  },
];
