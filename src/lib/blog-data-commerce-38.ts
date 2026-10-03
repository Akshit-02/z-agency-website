import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch five, part six: multi-currency ecommerce,
 * multi-language stores and international ecommerce SEO. Merged into
 * `posts` in blog-data.ts.
 */

export const commercePosts38: BlogPost[] = [
  // ------------------------------------------- 234 · MULTI-CURRENCY
  {
    slug: "multi-currency-ecommerce",
    title: "Multi-Currency Ecommerce: How to Support Multiple Currencies",
    seoTitle: "Multi-Currency Ecommerce: How to Support Multiple Currencies",
    excerpt:
      "How multi-currency ecommerce works: currency detection and selectors, converted vs fixed local prices, rounding, checkout and payment currency, refunds and SEO.",
    category: "Shopify & Ecommerce",
    banner: "multicurrencyflow",
    bannerAlt: "Multi-currency flow: visitor market, currency shown, fixed or converted price (highlighted), rounding, checkout in that currency, refund in the same currency.",
    date: "2026-09-29",
    updated: "2026-09-30",
    readingTime: "14 min read",
    relatedServiceSlugs: ["shopify-development", "website-development", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "retail"],
    faqs: [
      { q: "What is multi-currency ecommerce?", a: "Showing prices and taking payment in customers' local currencies, rather than only in the store's base currency, with consistent prices from product page through checkout, emails and refunds." },
      { q: "Should prices be converted automatically or set manually?", a: "Automatic conversion is simple and covers many markets; fixed local prices give control and cleaner price points for important markets. Many stores set fixed prices for key markets and convert the rest." },
      { q: "How should currency be detected?", a: "Suggest a currency based on the visitor's market (for example from location), let them change it easily, remember the choice, and don't force-redirect visitors or search engines." },
      { q: "What is price rounding in multi-currency stores?", a: "Adjusting converted prices to natural price points (for example .00 or .95 endings) so they look intentional in each currency. Platforms such as Shopify offer rounding rules per currency." },
      { q: "Should customers pay in their own currency?", a: "Ideally yes. Showing a local price but charging in another currency causes confusion and card fees for customers. Check that your payment provider supports presentment and settlement in the currencies you show." },
      { q: "What happens to refunds in a different currency?", a: "Refunds should be issued in the currency the customer paid. Exchange rate movements between payment and refund may affect what you receive or pay in your base currency." },
      { q: "Does Shopify support multi-currency?", a: "Yes. Selling in multiple currencies on Shopify requires Shopify Payments; prices can be converted automatically or with manual rates, with rounding, and set as fixed prices per market through catalogs." },
      { q: "Are there fees for multi-currency selling?", a: "Often. Payment providers may charge conversion fees when customers pay in a currency different from your payout currency. Shopify, for example, documents a currency conversion fee that varies by store location." },
      { q: "How does multi-currency affect SEO?", a: "Search engines should see consistent prices per URL. If currency changes on the same URL based on location, structured data and merchant listings can conflict; market-specific URLs with fixed currencies are easier to keep consistent." },
      { q: "How do I handle taxes with multiple currencies?", a: "Tax rules depend on markets, not currencies. Show prices following each market's conventions (tax-inclusive or exclusive) and confirm obligations with advisers." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Multi-currency ecommerce shows and charges prices in the customer's currency consistently from product page to refund. Suggest a currency from the visitor's market and let them switch; decide per market between converted prices (with rounding) and fixed local prices; charge in the displayed currency where your provider supports it; keep cart, checkout, emails, invoices and refunds in the same currency; record rates and rounding on each order; and keep prices consistent per URL for search engines. Budget for conversion fees and exchange movements, and follow each market's tax display conventions.",
        ],
      },
      {
        heading: "Why Currency Matters",
        body: [
          "A price in a foreign currency forces customers to convert in their head, raises doubts about fees and makes the store feel foreign. Showing local currency is one of the most basic localization steps, but doing it badly (prices that change at checkout, odd price endings, refunds in a different currency) damages trust more than not doing it at all. The flow above shows the path a price takes from market detection to refund. For the wider picture, see [[/blogs/international-ecommerce-website-development|international ecommerce website development]].",
        ],
      },
      {
        heading: "Detecting and Choosing Currency",
        body: [
          "Most stores suggest a market (and so a currency) based on location, then let the visitor change it through a clearly visible selector, usually in the header and footer. Remember the choice. Avoid forcing redirects based on location: Google advises against automatically redirecting users between versions, and forced redirects frustrate travellers and people buying for others (Google Search Central).",
        ],
        table: {
          headers: ["Pattern", "Good practice"],
          rows: [
            ["Selector location", "Header and footer, labelled with country and currency"],
            ["Default", "Suggested from market signal, easily changed"],
            ["Persistence", "Remember choice across visits"],
            ["Crawlers", "Can access every market version without redirects"],
            ["Mismatch", "Explain if checkout currency differs, before checkout"],
          ],
        },
      },
      {
        heading: "Converted vs Fixed Local Prices",
        body: [
          "Converted prices are calculated from your base price using exchange rates, often with a buffer and rounding. They cover many markets cheaply but move with exchange rates. Fixed local prices are set per market and stay stable, allow market-specific pricing strategy and produce clean price points, but need maintenance. Many brands fix prices for their most important markets and convert elsewhere.",
        ],
        table: {
          headers: ["Approach", "Strengths", "Trade-offs"],
          rows: [
            ["Automatic conversion", "Low effort, many markets", "Prices move with rates; margins vary"],
            ["Manual exchange rate", "Stable conversion you control", "Needs review when rates move"],
            ["Fixed local prices", "Clean price points, market strategy", "Maintenance per market and product"],
            ["Hybrid", "Control where it matters", "Two processes to manage"],
          ],
        },
      },
      {
        heading: "Rounding and Price Endings",
        body: [
          "Converted prices produce awkward numbers. Rounding rules adjust them to natural endings per currency (for example whole numbers in some currencies, .95 or .99 in others). Apply rounding consistently to products and, where appropriate, shipping rates. Shopify, for example, lets merchants turn on rounding per currency when selling in markets (Shopify Help Center).",
        ],
      },
      {
        heading: "Checkout and Payment Currency",
        body: [
          "The currency shown in the cart should be the currency charged. Check that your payment provider supports charging (presentment) in each currency you display and settling to your payout currency, and whether conversion fees apply. On Shopify, selling in multiple currencies requires Shopify Payments, and a currency conversion fee applies when customers pay in a currency different from your payout currency; Shopify describes converted prices as the product price times the conversion rate, adjusted for the conversion fee and then rounded (Shopify Help Center).",
        ],
        cta: {
          title: "Prices changing between product page and checkout?",
          description: "ZSpace Labs sets up multi-currency pricing, rounding and checkout so international customers see one consistent price.",
        },
      },
      {
        heading: "Refunds, Exchange Rates and Accounting",
        body: [
          "Refund in the currency the customer paid. Because exchange rates move, the cost of a refund in your base currency may differ from the original sale; decide how your finance process handles this. Record on every order the presentment currency, the settlement currency, the rate used and any rounding, so reconciliation and reporting are accurate. See [[/blogs/ecommerce-payment-gateway-integration|payment gateway integration]].",
        ],
      },
      {
        heading: "Discounts, Thresholds and Promotions",
        body: [
          "Fixed-amount discounts, free shipping thresholds and gift cards all need currency-aware rules. A “£10 off” code shouldn't become a random amount in another currency; define per-currency values or use percentages. Free shipping thresholds should be set per market to sensible local amounts.",
        ],
        checklist: [
          "Fixed discounts defined per currency or as percentages",
          "Free shipping thresholds per market",
          "Gift card currency rules",
          "Promotional banners showing local amounts",
        ],
      },
      {
        heading: "Tax Display by Market",
        body: [
          "Currency and tax are separate concerns. Markets differ in whether consumer prices include tax: many VAT and GST markets show tax-inclusive prices, while US prices usually exclude sales tax. Configure display per market, and remember that changing tax inclusion changes the displayed number. Some markets also have rules about how price reductions are advertised; Shopify's documentation, for example, notes the EU requirement to show the lowest price in the previous 30 days when advertising reductions to customers in the EEA (Shopify Help Center).",
        ],
      },
      {
        heading: "SEO Implications",
        body: [
          "Search engines and shopping surfaces need consistent prices per URL. If the same URL shows different currencies depending on location, structured data, merchant listings and search results can conflict. Market-specific URLs (for example subdirectories per market) with a fixed currency per URL are easier to keep consistent, and hreflang connects them. See [[/blogs/international-ecommerce-seo|international ecommerce SEO]] and [[/blogs/product-structured-data-ecommerce|product structured data]].",
        ],
      },
      {
        heading: "Worked Example: Pricing for Four Markets",
        body: [
          "An illustrative scenario: a brand based in Australia sells to Australia, New Zealand, the UK and the US. It sets fixed prices for bestsellers in each market to maintain clean price points and margin targets, converts the rest with rounding to whole numbers or .95 endings depending on currency, sets free shipping thresholds per market, defines discount codes as percentages, and gives each market its own subdirectory with prices fixed per URL. Orders record presentment and settlement currencies and rates, and refunds go back in the original currency.",
        ],
      },
      {
        heading: "Payment Provider Support",
        body: [
          "Multi-currency depends on your payment provider: which currencies can be presented and charged, which settlement currencies are available, and what conversion fees apply. On Shopify, selling in multiple currencies with Markets uses Shopify Payments, with conversion fees depending on the store's location. Confirm current terms with your provider. See [[/blogs/international-ecommerce-payments|international payments]].",
        ],
      },
      {
        heading: "Accounting and Reporting",
        body: [
          "Record each order's presentment currency, amounts, the exchange rate used and settlement amounts. Report revenue both in original currencies and in a reporting currency with consistent rate rules, so finance and marketing see the same numbers. Reconcile payouts per currency. See [[/blogs/ecommerce-erp-integration|ERP integration]].",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Showing local currency but charging in another",
          "Forced redirects based on location",
          "No rounding, producing odd price endings",
          "Fixed-amount discounts that convert unpredictably",
          "Different currencies on the same URL without market URLs",
          "Refunds in a different currency from payment",
          "Ignoring conversion fees in margin calculations",
        ],
        cta: {
          title: "Ready to set up global pricing?",
          description: "Talk to ZSpace Labs about [[/services/shopify-development|Shopify Markets and multi-currency]], [[/services/website-development|multi-currency storefronts]] and [[/services/ui-ux-design|pricing UX]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Multi-currency done well is invisible: customers see a sensible local price, pay that price and get refunds in the same currency. Choose converted or fixed pricing per market, round consistently, keep one currency per URL and record everything for finance. For checkout specifics, see [[/blogs/global-ecommerce-checkout|global ecommerce checkout]].",
        ],
      },
    ],
  },

  // -------------------------------------------- 235 · MULTI-LANGUAGE
  {
    slug: "multi-language-ecommerce-website",
    title: "Multi-Language Ecommerce Website: Architecture and SEO Considerations",
    seoTitle: "Multi-Language Ecommerce Website: Architecture and SEO",
    excerpt: "How to build a multi-language store: localized URLs, hreflang, translated metadata and product data, workflows, navigation, search, structured data and QA.",
    category: "Web Development",
    banner: "multilangmap",
    bannerAlt: "Multi-language store in four columns: URLs (one URL per language, hreflang pairs, translated slugs, self-referencing canonicals, highlighted), content (product data, metadata, navigation and UI, legal and policy pages), discovery (search per language, synonyms per language, translated filters, structured data) and QA (native review, layout expansion, fallback gaps, crawl per language).",
    date: "2026-09-29",
    readingTime: "19 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "retail"],
    faqs: [
      { q: "How should a multi-language store structure its URLs?", a: "Give each language version its own URL, for example with a language subdirectory (/fr/), a subdomain or a country domain. Google recommends separate URLs for each language version rather than switching language with cookies on one URL." },
      { q: "Do I need hreflang on a multi-language store?", a: "Hreflang helps search engines show the right language or regional version. Each version should reference itself and all alternates, with return links, and an x-default for a fallback page where appropriate." },
      { q: "Should URLs (slugs) be translated?", a: "Translated slugs can help users understand URLs in their language; untranslated slugs are simpler to maintain. Either can work if each version has a unique URL and hreflang connects them." },
      { q: "Should canonical tags point to the main language version?", a: "No. Each language version should normally have a self-referencing canonical; pointing translations to another language tells search engines they're duplicates." },
      { q: "What needs translating besides product descriptions?", a: "Navigation, UI labels, checkout, emails, metadata (titles and descriptions), image alt text, filters and attribute values, structured data text, legal pages, search synonyms and error messages." },
      { q: "How does search work in a multi-language store?", a: "Each language needs its own index or analyzer so stemming, synonyms and spelling tolerance work, plus synonyms and zero-result monitoring per language." },
      { q: "What happens when a translation is missing?", a: "Define fallbacks: show the default language for missing fields, flag gaps for translators, and avoid publishing pages that are mostly untranslated under a translated URL." },
      { q: "Should visitors be redirected to their language automatically?", a: "Google advises against automatically redirecting users between language versions. Suggest the likely language and let visitors choose, remembering their choice." },
      { q: "Does Shopify support multiple languages?", a: "Yes. Shopify stores can publish multiple languages, assign them to markets with subfolders, subdomains or domains, translate content with apps such as Translate & Adapt, and add hreflang tags automatically for configured versions." },
      { q: "How do I QA a multi-language store?", a: "Review translations with native speakers, check layouts with longer text, crawl each language version for hreflang, canonicals and untranslated content, and test checkout and emails in each language." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A multi-language ecommerce website needs one URL per language version, hreflang connecting the versions, self-referencing canonicals, and fully translated content including metadata, navigation, filters, product data, structured data text, checkout and emails. Manage translations with structured fields, glossaries and a review workflow; give each language its own search configuration; suggest a language without forcing redirects; and QA with native speakers and crawls of each version. Platforms such as Shopify handle much of the URL and hreflang work once languages are assigned to markets.",
        ],
      },
      {
        heading: "Languages vs Markets",
        body: [
          "A language version is not the same as a market. A market sets currency, prices and delivery; a language sets text. Some markets need several languages (Canada, Switzerland, Belgium); some languages serve several markets (English, Spanish). Decide both dimensions before designing URLs. For the full international architecture, see [[/blogs/ecommerce-internationalization|ecommerce internationalization]].",
          "This guide covers the four areas to get right: URLs, content, discovery and QA.",
        ],
      },
      {
        heading: "URL Structure for Languages",
        body: [
          "Google recommends using different URLs for each language version rather than cookies or browser settings, and compares country domains, subdomains and subdirectories as options; it doesn't recommend URL parameters (Google Search Central). For most stores, language subdirectories are the simplest to run. Keep the structure consistent so every page has an equivalent in each language.",
        ],
        table: {
          headers: ["Structure", "Example", "Notes"],
          rows: [
            ["Subdirectory", "example.com/fr/", "Simple, shares domain authority"],
            ["Subdomain", "fr.example.com", "Separate hosting possible"],
            ["Country domain", "example.fr", "Strong country signal; country-specific, not language-specific"],
            ["Parameter", "example.com?lang=fr", "Not recommended by Google"],
          ],
        },
      },
      {
        heading: "Hreflang and Canonicals",
        body: [
          "Hreflang annotations tell search engines which URLs are language or regional alternates of each other. Each version lists itself and all alternates, the annotations must be reciprocal, language codes follow ISO 639-1 with optional ISO 3166-1 region codes (for example fr, fr-CA), and x-default can point to a language selector or default version. Annotations can be placed in HTML head, HTTP headers or sitemaps (Google Search Central). Each version should normally have a self-referencing canonical.",
        ],
        code: {
          label: "Hreflang in the HTML head of the English product page",
          text: "<link rel=\"canonical\" href=\"https://example.com/products/linen-shirt\" />\n<link rel=\"alternate\" hreflang=\"en\" href=\"https://example.com/products/linen-shirt\" />\n<link rel=\"alternate\" hreflang=\"fr\" href=\"https://example.com/fr/products/chemise-en-lin\" />\n<link rel=\"alternate\" hreflang=\"de\" href=\"https://example.com/de/products/leinenhemd\" />\n<link rel=\"alternate\" hreflang=\"x-default\" href=\"https://example.com/products/linen-shirt\" />",
        },
      },
      {
        heading: "What to Translate",
        body: [],
        table: {
          headers: ["Content", "Why it matters"],
          rows: [
            ["Product titles, descriptions, attributes", "Understanding and search"],
            ["Collections, navigation, filters and values", "Browsing in the shopper's language"],
            ["Meta titles and descriptions", "Search result appearance"],
            ["Image alt text", "Accessibility and image search"],
            ["Structured data text fields", "Consistent with visible content"],
            ["Checkout, account, emails and notifications", "Trust at the moment of purchase"],
            ["Legal and policy pages", "Rights and obligations, reviewed per market"],
            ["Error and empty-state messages", "Recovery when things go wrong"],
          ],
        },
      },
      {
        heading: "Content Management and Workflow",
        body: [
          "Store translatable content in structured fields with per-language values, not duplicated pages. Use a translation management workflow: extract new or changed strings, translate (machine translation plus human review for important content, professional translation for checkout and legal), review in context, publish, and track status. Maintain glossaries for product terms and brand vocabulary. Decide fallbacks for missing translations and avoid publishing mostly untranslated pages under a translated URL, which gives users a poor experience and can confuse search engines about the page's language.",
        ],
        cta: {
          title: "Launching your store in more languages?",
          description: "ZSpace Labs builds multi-language storefronts with clean URL structures, hreflang and translation workflows that scale.",
        },
      },
      {
        heading: "Navigation and Language Switching",
        body: [
          "Provide a language selector that shows language names in their own language (Deutsch, Français), links to the equivalent page rather than the home page, and remembers the choice. Don't use flags for languages; flags represent countries. Suggest a language based on browser settings, but don't force redirects: Google advises against automatically redirecting users between language versions.",
        ],
      },
      {
        heading: "Search and Filters per Language",
        body: [
          "Site search must work in each language: language-specific analyzers for stemming and tokenization, synonyms per language, spelling tolerance and zero-result monitoring. Filters and attribute values should be translated from structured data, not free text, so filter logic stays consistent across languages. See [[/blogs/ecommerce-site-search|ecommerce site search]].",
        ],
      },
      {
        heading: "Structured Data in Each Language",
        body: [
          "Product and article structured data should match the visible content of each language version: translated names and descriptions, the correct URL for that version, and prices in the currency shown on that URL. Validate a sample of pages in each language. See [[/blogs/product-structured-data-ecommerce|product structured data]].",
        ],
      },
      {
        heading: "Platform Notes: Shopify",
        body: [
          "Shopify stores can publish additional languages, assign domains and languages to markets using subfolders, subdomains or top-level domains, and translate content with the Translate & Adapt app (machine and manual translation, CSV import). Shopify's documentation states that hreflang tags are created automatically for configured international domains and subfolders, with self-referencing canonical URLs and sitemaps that include market URLs (Shopify Help Center). See [[/blogs/shopify-markets|Shopify Markets]].",
        ],
      },
      {
        heading: "QA Checklist",
        body: [],
        checklist: [
          "Native-speaker review of key templates, checkout and emails",
          "Layouts tested with longer translated strings",
          "Crawl of each language: hreflang reciprocity, canonicals, status codes",
          "No mixed-language pages from fallback gaps",
          "Language selector links to equivalent pages",
          "Search tested with common queries in each language",
          "Structured data matches visible language and currency",
          "Sitemaps include every language version",
        ],
      },
      {
        heading: "Worked Example: Adding French and German",
        body: [
          "An illustrative scenario: a UK homeware store adds French and German. It uses /fr/ and /de/ subdirectories, translates product titles and descriptions with machine translation plus review for the top 300 products and professional translation for checkout, emails and legal pages, translates filter values from structured attributes, adds per-language search synonyms, and uses automatic hreflang from its platform. A crawl before launch finds pages with untranslated descriptions under /de/; these are held back until translated. After launch, the team monitors indexing and search queries per language.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "One URL switching language by cookie",
          "Canonicals pointing translations to the default language",
          "Hreflang without return links",
          "Untranslated metadata, filters or checkout",
          "Flags used as language selectors",
          "Forced language redirects",
          "One search configuration for all languages",
        ],
        cta: {
          title: "Ready to build a multi-language store?",
          description: "Talk to ZSpace Labs about [[/services/website-development|multi-language development]], [[/services/shopify-development|Shopify languages and markets]] and [[/services/ui-ux-design|localized UX]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A multi-language store needs clean URLs per language, correct hreflang and canonicals, complete translations across every surface, language-aware search and a disciplined workflow. Get those right and each language version can perform on its own. For the SEO strategy across countries, see [[/blogs/international-ecommerce-seo|international ecommerce SEO]].",
        ],
      },
    ],
  },

  // -------------------------------------- 236 · INTERNATIONAL SEO
  {
    slug: "international-ecommerce-seo",
    title: "International Ecommerce SEO: How to Structure Global Stores",
    seoTitle: "International Ecommerce SEO: Structuring Global Stores",
    excerpt: "International ecommerce SEO: URL structures, hreflang, localized content, canonicals, regional duplicates, sitemaps, structured data and internal links.",
    category: "Shopify & Ecommerce",
    banner: "intlurls",
    bannerAlt:
      "International URL structures compared by signal, effort and fit: ccTLD (clear country signal, high effort, separate country operations), subdomain (moderate signal, medium effort, separate hosting needs), subdirectory (shares domain, low effort, most stores) and URL parameters (weak, low effort, not recommended), with the note to use one URL per version, hreflang and no forced redirects.",
    date: "2026-09-29",
    readingTime: "20 min read",
    relatedServiceSlugs: ["website-development", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "retail"],
    faqs: [
      { q: "What is international ecommerce SEO?", a: "Structuring and optimizing a store so search engines show the right country or language version to searchers in each market: URL structure, hreflang, localized content and metadata, canonicals, sitemaps, structured data and internal links." },
      { q: "Which URL structure is best for international SEO?", a: "There's no single best. Google's documentation compares country domains (clear targeting, more cost), subdomains and subdirectories (easy to set up and maintain) and doesn't recommend URL parameters. Subdirectories suit most stores." },
      { q: "Is duplicate content a problem across English-speaking markets?", a: "Similar content for different regions isn't a penalty issue, but search engines may treat near-identical pages as duplicates and choose one. Hreflang and genuine localization (currency, delivery, terminology) help the right version appear." },
      { q: "How should canonical tags work on international stores?", a: "Each regional or language version should usually have a self-referencing canonical, with hreflang pointing to alternates. Canonicalizing all versions to one tells search engines only that one should be indexed." },
      { q: "What is x-default?", a: "An hreflang value for the page to show when no other version matches the user's language or region, often a global version or a country and language selector." },
      { q: "Should I block crawlers from other markets' versions?", a: "No. Crawlers must be able to reach every version without being redirected by location, or those versions may not be indexed." },
      { q: "Do I need separate sitemaps per market?", a: "Not necessarily, but sitemaps should include every market and language URL. Hreflang can also be declared in sitemaps instead of HTML." },
      { q: "How important is localized content for SEO?", a: "Important. Translated or regionalized pages with local terminology, currency, delivery information and metadata match local searches better than duplicated pages with only the currency changed." },
      { q: "Does Google use IP address or lang attributes to determine language?", a: "Google says it uses visible content to determine a page's language, not code-level language attributes or the URL, and recommends separate URLs rather than serving different content on one URL by location." },
      { q: "How do I measure international SEO?", a: "Monitor indexing, impressions, clicks and positions per market and language version in Search Console, check which version appears in each country, and track organic revenue by market." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "International ecommerce SEO makes sure searchers in each market find the right version of your store. Give every market or language version its own URL (subdirectories suit most stores), connect versions with reciprocal hreflang including x-default, use self-referencing canonicals, localize content and metadata beyond currency, let crawlers reach every version without geo-redirects, include all versions in sitemaps, keep structured data consistent with each page, and link versions internally through a market selector. Measure indexing and performance per market.",
        ],
      },
      {
        heading: "What Search Engines Need",
        body: [
          "Search engines need to crawl every version, understand which language and region each serves, see that versions are alternates rather than accidental duplicates, and choose the best one for each searcher. Google's guidance on multi-regional and multilingual sites sets out the building blocks: separate URLs per language or region, hreflang or equivalent annotations, and avoiding automatic redirects that stop users and crawlers seeing other versions (Google Search Central).",
          "The comparison above summarizes URL structure options. For implementation of languages specifically, see [[/blogs/multi-language-ecommerce-website|multi-language ecommerce website]].",
        ],
      },
      {
        heading: "Choosing a URL Structure",
        body: [
          "Country domains (example.de) send the clearest country signal but cost more to run and build authority separately. Subdomains (de.example.com) are easy to set up and can be hosted separately. Subdirectories (example.com/de/) are easy to set up and maintain on one domain. Google doesn't recommend URL parameters for this purpose. For most stores, subdirectories per market or language balance effort and results; country domains suit businesses with genuinely separate country operations.",
        ],
      },
      {
        heading: "Hreflang Implementation",
        body: [
          "Hreflang tells search engines which URLs are alternates for different languages or regions. Rules to follow: each page lists itself and all alternates; annotations are reciprocal; language codes use ISO 639-1 with optional ISO 3166-1 alpha-2 region codes (en-GB, en-US); x-default marks the fallback; and annotations can go in HTML, HTTP headers or XML sitemaps (Google Search Central). Errors such as missing return links or wrong codes are common, so validate with crawls.",
        ],
        table: {
          headers: ["Scenario", "Hreflang values"],
          rows: [
            ["English for UK and US, different prices", "en-GB, en-US"],
            ["French for France and Canada", "fr-FR, fr-CA"],
            ["German for all German speakers", "de"],
            ["Global fallback or selector page", "x-default"],
          ],
        },
      },
      {
        heading: "Canonicals and Duplicate Content",
        body: [
          "Regional versions in the same language (UK, US, Australia) are often near-duplicates. That isn't a penalty problem, but search engines may cluster them and pick one to show. Use self-referencing canonicals on each version and hreflang to connect them, and genuinely localize: currency, delivery and returns information, terminology and spelling, local reviews and market-specific content. Don't canonicalize all regions to one version unless you want only that version indexed.",
        ],
        callout: {
          type: "tip",
          text: "The more a regional page differs in useful ways (price, delivery, terminology, local proof), the easier it is for search engines and shoppers to see why it exists.",
        },
      },
      {
        heading: "Localized Content and Metadata",
        body: [
          "Translate and localize titles, meta descriptions, headings, product and category copy, image alt text and structured data text. Research keywords per market rather than translating home-market keywords directly: people search with different terms, units and spellings. Category names should reflect local vocabulary. See [[/blogs/ecommerce-localization|ecommerce localization]].",
        ],
        cta: {
          title: "International versions not ranking where they should?",
          description: "ZSpace Labs audits international store structures, hreflang and localization for search visibility in each market.",
        },
      },
      {
        heading: "Redirects and Crawler Access",
        body: [
          "Geo-redirects can hide versions from search engines, which often crawl from a limited set of locations, and they frustrate users who want another version. Suggest a version with a banner or selector instead, remember choices, and make sure crawlers can access every URL directly. Google also notes it uses visible content, not code-level language attributes, to determine a page's language.",
        ],
      },
      {
        heading: "Sitemaps",
        body: [
          "Include every market and language URL in XML sitemaps. Large stores often split sitemaps by market or content type. Hreflang can be declared in sitemaps, which is easier to manage than HTML tags for large catalogs. Keep sitemaps in sync with what's actually published in each market, excluding products not available there.",
        ],
      },
      {
        heading: "Structured Data per Market",
        body: [
          "Product structured data should match the version it appears on: price and currency for that market, availability in that market, language of names and descriptions and the correct URL. Merchant listings and shopping surfaces rely on this consistency. See [[/blogs/product-structured-data-ecommerce|product structured data]] and [[/blogs/ecommerce-product-feeds|product feeds]].",
        ],
      },
      {
        heading: "Internal Linking Between Versions",
        body: [
          "Link each page to its equivalents through the market and language selector, not only to the home page of each version. Within each version, internal links should stay inside that market or language. Mixed internal linking (a French page linking to English product pages) confuses users and weakens each version's structure. See [[/blogs/ecommerce-internal-linking|ecommerce internal linking]].",
        ],
      },
      {
        heading: "Platform Notes",
        body: [
          "On Shopify, assigning subfolders, subdomains or domains to markets generates hreflang tags, self-referencing canonicals and sitemaps with market URLs automatically, and crawlers bypass the customer redirection Shopify applies (Shopify Help Center). Headless and custom builds need to implement these explicitly. Either way, verify the output with a crawler. See [[/blogs/shopify-markets|Shopify Markets]].",
        ],
      },
      {
        heading: "Measuring International SEO",
        body: [],
        table: {
          headers: ["What to check", "Where"],
          rows: [
            ["Indexing per version", "Search Console, filtered by URL prefix or property"],
            ["Which version ranks in each country", "Search Console country filter, manual checks"],
            ["Hreflang errors", "Crawler reports"],
            ["Impressions, clicks by market", "Search Console by country"],
            ["Organic revenue by market", "Analytics segmented by market"],
          ],
        },
      },
      {
        heading: "Worked Example: UK, US and Australian English Versions",
        body: [
          "An illustrative scenario: a store serves English-speaking customers in three markets from one domain. Search results in Australia show the UK version with prices in pounds. The team adds /en-au/ and /en-us/ subdirectories with local currencies, delivery and returns information and local spelling, implements reciprocal hreflang (en-GB, en-US, en-AU, x-default) with self-referencing canonicals, replaces a forced geo-redirect with a suggestion banner and adds all versions to sitemaps. They monitor which version appears in each country over the following weeks.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Automatic geo-redirects blocking crawlers and users",
          "Hreflang without return links or with wrong codes",
          "Canonicals pointing every region to one version",
          "Translated pages with untranslated metadata",
          "Same URL showing different currencies by location",
          "Markets missing from sitemaps",
          "Home-market keywords translated literally",
        ],
        cta: {
          title: "Ready to structure your store for global search?",
          description: "Talk to ZSpace Labs about [[/services/website-development|international SEO architecture]] and [[/services/shopify-development|Shopify Markets SEO]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "International ecommerce SEO is structure plus localization: separate URLs, reciprocal hreflang, self-canonicals, crawlable versions, complete sitemaps and content that genuinely serves each market. For whether to run one store or several, see [[/blogs/country-specific-ecommerce-stores|country-specific ecommerce stores]].",
          "For related guides, see [[/blogs/multi-region-ecommerce|multi-region ecommerce]].",
        ],
      },
    ],
  },
];
