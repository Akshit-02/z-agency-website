import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch five, part seven: country-specific stores,
 * localization vs translation, global checkout and Shopify Markets. Merged
 * into `posts` in blog-data.ts.
 */

export const commercePosts39: BlogPost[] = [
  // ------------------------------------ 237 · COUNTRY-SPECIFIC STORES
  {
    slug: "country-specific-ecommerce-stores",
    title: "Country-Specific Ecommerce Stores: One Store or Multiple Stores?",
    seoTitle: "Country-Specific Ecommerce Stores: One Store or Several?",
    excerpt: "One store or several? Compare single stores, multi-market setups and separate storefronts on catalog, pricing, SEO, inventory, payments and operations.",
    category: "Shopify & Ecommerce",
    banner: "countrystores",
    bannerAlt:
      "Single store, multi-market store (highlighted) and separate stores compared on setup (simplest, moderate, most work), catalog (one; one varied by market; separate), pricing (one currency; per market; fully separate), SEO (one site; hreflang across markets; hreflang across sites), operations (one team; shared plus local rules; local teams) and fit (early exports; most growing brands; very different markets).",
    date: "2026-09-29",
    readingTime: "17 min read",
    relatedServiceSlugs: ["shopify-development", "website-development"],
    relatedIndustrySlugs: ["ecommerce", "retail", "d2c-consumer"],
    faqs: [
      { q: "Should I have one ecommerce store or one per country?", a: "It depends on how different your markets are. One store with multi-market settings suits most brands; separate stores suit markets with very different catalogs, pricing strategies, legal entities, teams or platforms." },
      { q: "What is a multi-market store?", a: "A single store that varies currency, pricing, language, domain, product availability, duties and taxes by market, from one catalog and admin. Shopify Markets is one example." },
      { q: "When do separate country stores make sense?", a: "When markets need substantially different catalogs, content, promotions, fulfilment, legal entities or integrations, or when separate teams run each market." },
      { q: "Do separate stores hurt SEO?", a: "Not inherently, but they split authority across sites and require hreflang across domains and more content work. A single domain with market subdirectories is usually simpler to manage." },
      { q: "How is inventory handled across country stores?", a: "Either shared stock from central locations mapped to markets, or separate stock per region. Separate stores need inventory integration so stock stays accurate across them." },
      { q: "Can separate stores share a checkout and payments?", a: "Usually each store has its own checkout and payment configuration. That allows local payment methods and entities but adds setup and reconciliation work." },
      { q: "Should I use country domains, subdomains or subdirectories?", a: "Google's documentation compares them: country domains give a clear country signal but cost more; subdomains and subdirectories are easy to set up; subdirectories are low maintenance. Many brands use subdirectories on one domain." },
      { q: "What about Shopify expansion stores?", a: "Shopify Plus includes additional expansion stores for separate storefronts where one store with Markets isn't enough, such as different catalogs or operations. Check current plan details." },
      { q: "How do I migrate from one store to several (or the reverse)?", a: "Plan it like a migration: map URLs, redirects, hreflang, customer accounts and integrations, and test thoroughly. Moving between models is costly, so choose carefully." },
      { q: "What's the best choice for a brand just starting to export?", a: "Often a single store with a few markets configured for currency, shipping and duties, then more localization as demand grows." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Most brands selling internationally do best with one store configured for multiple markets: one catalog and admin, with currency, pricing, language, URLs, availability, duties and taxes varying by market. Separate country stores make sense when markets need very different catalogs, pricing strategies, content, legal entities, fulfilment or teams, at the cost of more setup, SEO and operational work. Choose based on how different your markets really are, and use market subdirectories on one domain unless you have a clear reason for country domains.",
        ],
      },
      {
        heading: "Three Models",
        body: [
          "A single store sells to international customers from one configuration, perhaps with only shipping changes. A multi-market store keeps one catalog and admin but varies settings by market. Separate stores run independent storefronts per country or region, sometimes on the same platform. The comparison above summarizes the trade-offs. For the wider build, see [[/blogs/international-ecommerce-website-development|international ecommerce website development]].",
        ],
      },
      {
        heading: "Detailed Comparison",
        body: [],
        table: {
          headers: ["Factor", "Single store", "Multi-market store", "Separate stores"],
          rows: [
            ["Setup effort", "Lowest", "Moderate", "Highest"],
            ["Catalog", "Same everywhere", "Shared, availability varies", "Independent"],
            ["Pricing", "One currency or basic conversion", "Per market, fixed or converted", "Fully independent"],
            ["Content", "One language", "Translations per market", "Fully local"],
            ["SEO", "One version", "Market URLs with hreflang", "Separate sites with hreflang"],
            ["Inventory", "One pool", "Shared or mapped locations", "Separate or synced"],
            ["Payments", "One configuration", "Local methods per market (platform-dependent)", "Per store, per entity"],
            ["Operations", "One team", "Central with local rules", "Local teams"],
            ["Reporting", "Simple", "By market in one admin", "Consolidation needed"],
          ],
        },
      },
      {
        heading: "When One Multi-Market Store Fits",
        body: [],
        checklist: [
          "The catalog is largely the same across markets",
          "Differences are currency, pricing, language, shipping and duties",
          "One team manages merchandising and content",
          "You want one admin, one set of integrations and simpler reporting",
          "SEO benefits from one domain",
        ],
      },
      {
        heading: "When Separate Stores Fit",
        body: [],
        checklist: [
          "Catalogs, assortments or product compliance differ substantially",
          "Different legal entities, tax setups or payment accounts per region",
          "Local teams run merchandising, promotions and content independently",
          "Different fulfilment networks or integrations per region",
          "Brand positioning differs by market",
        ],
        cta: {
          title: "Deciding between one store and several?",
          description: "ZSpace helps brands map their markets and choose a store model they can actually operate.",
        },
      },
      {
        heading: "Domains, Subdomains and Subdirectories",
        body: [
          "The URL choice is related but separate. Google's documentation describes country domains as giving clear geotargeting but being expensive and limited to one country, subdomains as easy to set up, subdirectories as easy to set up and low maintenance, and URL parameters as not recommended ([[https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites|Google Search Central]]). Multi-market stores often use subdirectories; separate stores often use country domains. Whatever you choose, connect versions with hreflang. See [[/blogs/international-ecommerce-seo|international ecommerce SEO]].",
        ],
      },
      {
        heading: "Inventory and Fulfilment",
        body: [
          "A multi-market store maps markets to fulfilment locations and shows availability per market. Separate stores need inventory integration so shared stock isn't oversold and regional stock is accurate. Returns flows differ too: local returns addresses or partners per region make international returns manageable. See [[/blogs/ecommerce-inventory-management-integration|inventory integration]].",
        ],
      },
      {
        heading: "Payments and Entities",
        body: [
          "Businesses with legal entities in several regions may need separate payment accounts, tax registrations and invoicing per entity, which pushes toward separate stores or advanced platform features. Single-entity brands can often sell to many markets from one store, subject to tax and duty obligations in each. Take tax and legal advice early.",
        ],
      },
      {
        heading: "Shopify Options",
        body: [
          "On Shopify, Markets lets one store vary currency, pricing, catalogs, domains, languages and duties by market ([[https://help.shopify.com/en/manual/markets/getting-started/overview|Shopify Help Center]]). Shopify Plus adds expansion stores for cases where separate storefronts are needed, for example very different catalogs or operations. Many brands start with Markets and add expansion stores only when a market's differences outgrow configuration. See [[/blogs/shopify-markets|Shopify Markets]] and [[/blogs/shopify-plus-vs-shopify|Shopify Plus vs Shopify]].",
        ],
      },
      {
        heading: "Operational Cost Over Time",
        body: [
          "Separate stores multiply work: every theme change, app, integration, product launch and promotion may need repeating per store, and reporting must be consolidated. Multi-market stores concentrate work but need clear rules for market-specific overrides. Estimate the ongoing effort, not just launch effort, before choosing.",
        ],
      },
      {
        heading: "Worked Example: A Brand Outgrowing One Configuration",
        body: [
          "An illustrative scenario: a beauty brand runs one Shopify store with markets for the UK, EU and US. Over time, the US range diverges because of different product regulations and a US-only product line, and a US team wants its own promotions and content calendar. The brand keeps UK and EU as markets in one store and moves the US to a separate expansion store, with hreflang across domains, shared product information synced from a PIM, and consolidated reporting. The decision is driven by catalog and team differences, not by SEO.",
        ],
      },
      {
        heading: "Decision Framework",
        body: [],
        table: {
          headers: ["Question", "If yes"],
          rows: [
            ["Is the catalog mostly the same everywhere?", "Multi-market store"],
            ["Do markets need different legal entities or payment accounts?", "Consider separate stores"],
            ["Do local teams need full independence?", "Consider separate stores"],
            ["Is the main difference currency, language and shipping?", "Multi-market store"],
            ["Are you just starting to export?", "Single or multi-market store"],
          ],
        },
      },
      {
        heading: "Hybrid Setups",
        body: [
          "Many businesses end up with a hybrid: one multi-market store for most countries and a separate store for one or two markets that differ substantially (a different catalog because of regulations, a separate legal entity, or a marketplace-heavy region). Hybrids work when the reasons are clear and shared foundations (product information, design system, integrations) are reused. They fail when every exception becomes a new store. See [[/blogs/ecommerce-technology-stack|ecommerce technology stack]].",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Launching separate stores for markets that only differ in currency",
          "Separate stores without inventory integration",
          "No hreflang across country sites",
          "Underestimating ongoing maintenance of multiple stores",
          "Choosing country domains without the resources to build each one",
        ],
        cta: {
          title: "Ready to structure your international stores?",
          description: "Talk to ZSpace about [[/services/shopify-development|Shopify Markets and expansion stores]] and [[/services/website-development|multi-store architecture]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "One multi-market store is the right answer for most brands; separate stores are for genuinely different markets. Decide from catalog, entity, team and operational differences, and plan URLs and SEO accordingly. For the localization work inside each market, see [[/blogs/ecommerce-localization|ecommerce localization]].",
        ],
      },
    ],
  },

  // --------------------------------- 238 · LOCALIZATION VS TRANSLATION
  {
    slug: "ecommerce-localization-vs-translation",
    title: "Ecommerce Translation vs Localization: What's the Difference?",
    seoTitle: "Ecommerce Translation vs Localization: What's the Difference?",
    excerpt:
      "Ecommerce localization vs translation explained: translation, localization and transcreation, plus currency, payments, shipping, sizes and market-specific UX.",
    category: "UI/UX",
    banner: "locvstrans",
    bannerAlt:
      "Translation, localization (highlighted) and transcreation compared: what changes (words; words and experience; message), scope (text; currency, units and payments; campaigns and taglines), who does it (translator; local market team; copywriter) and what it's used for (specs and policies; the store experience; brand and ads).",
    date: "2026-09-29",
    updated: "2026-09-30",
    readingTime: "12 min read",
    relatedServiceSlugs: ["ui-ux-design", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "retail"],
    faqs: [
      { q: "What is the difference between localization and translation?", a: "Translation converts text from one language to another. Localization adapts the whole shopping experience for a market, including translation plus currency, payment methods, delivery and duties, sizes and units, imagery, legal content and support." },
      { q: "What is transcreation?", a: "Recreating marketing messages for another market so they have the intended effect, rather than translating them literally. It's used for taglines, campaigns and brand copy." },
      { q: "Can a store be localized without translation?", a: "Yes. A US store localizing for the UK or Australia shares a language but still needs local currency, spelling and terminology, sizes, delivery information and legal content." },
      { q: "Is machine translation enough for ecommerce?", a: "It can help with large catalogs, but checkout, legal pages, key product pages and marketing need review by fluent speakers with market knowledge." },
      { q: "Which is more important for conversion?", a: "Both matter, but customers often hesitate more over unfamiliar currency, payment methods and uncertain delivery costs than over imperfect wording." },
      { q: "Does localization affect SEO?", a: "Yes. Localized content, metadata and terminology match how people search in each market, and localized versions with their own URLs and hreflang can rank in local results." },
      { q: "Who should do localization?", a: "A combination: translators for text, local market experts for terminology and expectations, legal advisers for policies, and product and engineering teams for currency, payments and formats." },
      { q: "What does localization cost compared with translation?", a: "More, because it touches pricing, payments, logistics, legal and content. Prioritize the elements that most affect purchase decisions in each market." },
      { q: "How do I check localization quality?", a: "Usability testing with local customers, native-speaker review, and comparing conversion, bounce and support contacts by market." },
      { q: "What comes first: internationalization or localization?", a: "Internationalization, the technical groundwork, should come first so localization for each market is configuration and content work rather than rebuilding." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Translation changes words. Localization changes the experience: currency and price conventions, payment methods, delivery and duties, sizes and units, formats, imagery, legal content and support, with translation as one part. Transcreation rewrites marketing messages so they work in another culture. Ecommerce stores need all three in different places: translation for specifications and policies, localization for the store and checkout, transcreation for campaigns and brand copy. Customers often hesitate more over unfamiliar money and delivery than over imperfect wording.",
        ],
      },
      {
        heading: "Three Terms, Three Jobs",
        body: [
          "The comparison above shows how the three differ in what changes, scope, who does the work and what it's used for. Treating them as one leads to stores that read fluently but still feel foreign, or campaigns that translate correctly but fall flat.",
        ],
      },
      {
        heading: "Translation",
        body: [
          "Translation converts text accurately into another language. In ecommerce it covers product specifications, descriptions, UI text, policies and emails. Quality depends on glossaries (consistent product terms), context (translators seeing where text appears) and review. Machine translation can accelerate large catalogs; human review is essential for checkout, legal text and high-traffic pages.",
        ],
      },
      {
        heading: "Localization",
        body: [
          "Localization adapts the store so it feels made for the market. It includes translation but also everything that affects whether customers trust and complete a purchase.",
        ],
        table: {
          headers: ["Element", "Translation only", "Localized"],
          rows: [
            ["Price", "Home currency", "Local currency, local price endings, tax display"],
            ["Payment", "Home-market methods", "Methods customers use locally"],
            ["Delivery", "Generic international shipping", "Local estimates, costs, duties at checkout"],
            ["Sizes and units", "Home system", "Local system or conversions"],
            ["Formats", "Home formats", "Local dates, numbers, addresses, phone numbers"],
            ["Terminology", "Literal", "Local vocabulary and spelling"],
            ["Legal pages", "Translated home policies", "Market-specific terms and rights"],
            ["Support", "Home language and hours", "Local language and hours"],
          ],
        },
      },
      {
        heading: "Transcreation",
        body: [
          "Taglines, campaign headlines, humour and emotional appeals rarely survive literal translation. Transcreation starts from the intent of the message and writes something that has the same effect for the new audience, sometimes with different imagery. Use it for brand and campaign content, not for product specifications or legal text, where accuracy matters more than voice.",
        ],
        cta: {
          title: "Store translated but not converting abroad?",
          description: "ZSpace identifies the localization gaps that matter in each market and fixes them in the storefront and checkout.",
        },
      },
      {
        heading: "Localization Without a Language Change",
        body: [
          "Markets that share a language still need localization. A US store serving the UK needs pounds, VAT-inclusive prices, UK spelling and terminology (trousers, postcode), UK sizes, local delivery estimates and UK consumer rights information. The same applies between Spain and Mexico, France and Canada, or Germany and Switzerland. See [[/blogs/ecommerce-localization|ecommerce localization]].",
        ],
      },
      {
        heading: "Where Each Applies in a Store",
        body: [],
        table: {
          headers: ["Store area", "Approach"],
          rows: [
            ["Product specifications", "Translation with glossary"],
            ["Product descriptions", "Translation, localized for key products"],
            ["Navigation, filters, checkout", "Localization"],
            ["Prices, payments, delivery", "Localization"],
            ["Legal and policy pages", "Localization with legal review"],
            ["Homepage hero, campaigns, ads", "Transcreation"],
            ["Email marketing", "Transcreation for campaigns, translation for transactional"],
          ],
        },
      },
      {
        heading: "Technical Foundations",
        body: [
          "Localization at scale depends on internationalized systems: translatable fields, per-market pricing, locale-aware formatting, market-specific content overrides and URLs per language or market. Without those, every localization change becomes an engineering task. See [[/blogs/ecommerce-internationalization|ecommerce internationalization]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario: a German outdoor brand translates its store into English for the UK and sees poor conversion. Research finds prices in euros, only German payment methods, sizes in EU only, delivery costs revealed at checkout and a translated German returns policy that doesn't reflect UK rights. The team localizes: pounds with VAT-inclusive prices, UK-familiar payment methods, UK sizes alongside EU, delivery and duties shown on product pages, a UK returns address and legally reviewed UK policies. The homepage campaign is transcreated rather than translated. They compare conversion and support contacts before and after.",
        ],
      },
      {
        heading: "A Practical Prioritization",
        body: [
          "Budgets are finite, so decide where each approach is worth its cost. For a new market, localize the elements that most affect purchase decisions first (currency, payment methods, delivery costs and duties, returns information, checkout text), translate high-traffic product and category pages with review, and transcreate only the campaigns you actually run in that market. Expand coverage as the market proves itself. See [[/blogs/international-ecommerce-seo|international ecommerce SEO]] for how localized content affects search.",
        ],
        table: {
          headers: ["Priority", "Approach", "Content"],
          rows: [
            ["1", "Localization", "Currency, payments, delivery, duties, returns, checkout"],
            ["2", "Translation with review", "Top products, categories, navigation, emails"],
            ["3", "Localization with legal review", "Terms, privacy, returns rights"],
            ["4", "Transcreation", "Market campaigns, homepage hero"],
            ["5", "Machine translation plus spot checks", "Long-tail catalog"],
          ],
        },
      },
      {
        heading: "Workflow and Quality",
        body: [
          "Keep a glossary and style guide per language, give translators context (screenshots or in-context editing), review with native speakers who know the market, and track translation status per page. Measure quality through local usability testing, conversion and support contacts by market, and search terms customers use. See [[/blogs/multi-language-ecommerce-website|multi-language ecommerce website]] and [[/blogs/shopify-markets|Shopify Markets]].",
        ],
      },
      {
        heading: "Practical Examples",
        body: [],
        table: {
          headers: ["Element", "Translation", "Localization", "Transcreation"],
          rows: [
            ["Product title", "Words converted", "Local product term, sizes, units", "Rarely needed"],
            ["Campaign headline", "Literal meaning", "Adjusted references", "Rewritten for local impact"],
            ["Size guide", "Labels translated", "Local size systems and conversions", "-"],
            ["Checkout", "Field labels translated", "Address formats, payment methods", "-"],
            ["Imagery", "-", "Seasons, settings, models reviewed", "New creative"],
            ["SEO metadata", "Translated", "Local keyword research", "-"],
          ],
        },
      },
      {
        heading: "UX, SEO and Product Content Localization",
        body: [
          "UX localization adapts flows and conventions (address forms, date pickers, payment steps). SEO localization researches how people search in each market and localizes metadata and URLs with hreflang. Product content localization adapts specifications, sizes, units, compliance information and care instructions. Each needs different skills and review. See [[/blogs/global-ecommerce-ux|global ecommerce UX]] and [[/blogs/international-ecommerce-seo|international SEO]].",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Assuming translated means ready for the market",
          "Literal translation of taglines and campaigns",
          "Unreviewed machine translation in checkout",
          "Ignoring same-language markets",
          "Translated legal pages without local review",
        ],
        cta: {
          title: "Ready to localize, not just translate?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|localized UX]] and [[/services/shopify-development|Shopify localization and Markets]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Translation is necessary; localization is what makes a store work in a new market; transcreation makes your brand's voice travel. Apply each where it fits and build the technical foundation first. For the full international build, see [[/blogs/international-ecommerce-website-development|international ecommerce website development]].",
        ],
      },
    ],
  },

  // ----------------------------------------- 239 · GLOBAL CHECKOUT
  {
    slug: "global-ecommerce-checkout",
    title: "Global Ecommerce Checkout: How to Design Checkout for International Customers",
    seoTitle: "Global Ecommerce Checkout for International Customers",
    excerpt: "Checkout for international customers: local payment methods, currency, shipping, duties and taxes, address and phone formats, language and confirmation.",
    category: "UI/UX",
    banner: "intlcheckoutflow",
    bannerAlt:
      "International checkout flow: market detected, local currency, address format, shipping and duties (highlighted), local payment, confirmation in the customer's language; customers can change country and language at any point.",
    date: "2026-09-29",
    readingTime: "18 min read",
    relatedServiceSlugs: ["ui-ux-design", "cro-audit", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "retail"],
    faqs: [
      { q: "What makes checkout different for international customers?", a: "They need prices and payment in their currency, payment methods they trust, address and phone formats that match their country, clear delivery times and costs including duties and taxes, and text in their language." },
      { q: "Should duties be collected at checkout?", a: "Collecting duties and import taxes at checkout (delivered duty paid) avoids surprise charges on delivery, which often lead to refused parcels. Whether and how you can do this depends on your platform, carriers and markets." },
      { q: "Which payment methods should an international checkout offer?", a: "Cards plus the wallets, bank transfer methods and buy-now-pay-later options commonly used in each market. Preferences vary widely between countries." },
      { q: "How should address forms work internationally?", a: "Adapt fields and labels to the country: postcode or ZIP formats, states, provinces or none, field order and optional lines. Avoid US-centric validation that rejects valid foreign addresses." },
      { q: "How should phone numbers be handled?", a: "With a country code selector and flexible validation, and only if you genuinely need the number (for example for delivery)." },
      { q: "Should checkout be translated?", a: "Yes, completely: labels, errors, legal text and emails, in the language the customer shopped in." },
      { q: "What about taxes in international checkout?", a: "Follow each market's conventions (tax-inclusive or exclusive), calculate correctly for the destination and show the breakdown. Obligations vary by country and thresholds; take advice." },
      { q: "How should delivery options be shown?", a: "With carrier or service names customers recognize, delivery date estimates rather than just transit days, costs and whether duties are included." },
      { q: "What should the confirmation include for international orders?", a: "Order summary in the customer's currency and language, duties and taxes paid, delivery estimate, tracking information and how returns work from their country." },
      { q: "How do I test an international checkout?", a: "Place real or test orders from each market with local addresses, payment methods and currencies, check emails and refunds, and run usability tests with customers in key markets." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A global checkout should feel domestic in every market. Keep the currency from the storefront through payment and confirmation; offer local payment methods; adapt address, postcode and phone fields to the country; show delivery dates, shipping costs and duties and taxes before payment, collecting duties at checkout where possible; translate everything including errors and legal text; validate inputs without rejecting valid foreign formats; and send confirmations in the customer's language and currency with returns information for their country. Test with real orders in each market.",
        ],
      },
      {
        heading: "Where International Checkouts Fail",
        body: [
          "Domestic checkout problems (unexpected costs, forced accounts, long forms) are amplified internationally, and new ones appear: a currency switch at the last step, a missing local payment method, an address form that rejects a valid postcode, delivery estimates in transit days that don't account for customs, and duties charged by the carrier on delivery. The flow above shows the international-specific steps. For checkout fundamentals, see [[/blogs/ecommerce-checkout-ux|ecommerce checkout UX]].",
        ],
        table: {
          headers: ["Problem", "Effect"],
          rows: [
            ["Currency changes at payment", "Distrust, abandonment"],
            ["No familiar payment method", "Abandonment in markets where cards are less used"],
            ["Address validation rejects valid formats", "Customers unable to complete"],
            ["Duties charged on delivery", "Refused parcels, complaints"],
            ["Untranslated errors", "Customers stuck without understanding why"],
          ],
        },
      },
      {
        heading: "Currency and Totals",
        body: [
          "The currency shown on product pages should be the currency in the cart, at payment and in the confirmation. Show a clear breakdown: items, shipping, duties and import taxes, other taxes and the total. If for any reason the charge currency differs from the display currency, say so before payment, not after. See [[/blogs/multi-currency-ecommerce|multi-currency ecommerce]].",
        ],
      },
      {
        heading: "Local Payment Methods",
        body: [
          "Payment preferences vary widely by country: cards dominate in some, while wallets, bank transfer schemes, cash-based methods or buy-now-pay-later are preferred in others. Offer the methods your target markets use, show them by market (not a wall of every logo everywhere), and check your provider's support, fees and refund behaviour for each. Show accepted methods before checkout so customers know they can pay.",
        ],
      },
      {
        heading: "Address, Name and Phone Fields",
        body: [
          "Address formats differ in field order, postcode formats, whether regions or states are required and how buildings and apartments are written. Adapt the form to the selected country, use address autocomplete services that support international addresses, and relax validation that assumes one country's formats. Some cultures place family names first; consider a single full-name field or neutral labels. Collect phone numbers only when needed, with a country code selector.",
        ],
        table: {
          headers: ["Field", "International consideration"],
          rows: [
            ["Postcode", "Formats vary; some countries have none"],
            ["Region", "State, province, prefecture, or not used"],
            ["Address lines", "Order and required parts vary"],
            ["Name", "Order of given and family names varies"],
            ["Phone", "Country code, length varies"],
          ],
        },
      },
      {
        heading: "Shipping, Duties and Taxes",
        body: [
          "Show delivery options with recognizable carrier or service names, delivery date estimates that include customs time where relevant, and costs. Decide whether you collect duties and import taxes at checkout; collecting them upfront (often described as delivered duty paid) removes surprise charges at delivery, though obligations and practicalities depend on your platform, carriers and each destination's rules. Explain what's included in plain language. See [[/blogs/ecommerce-shipping-integration|shipping integration]] and [[/blogs/ecommerce-tax-integration|tax integration]].",
        ],
        cta: {
          title: "International customers abandoning at checkout?",
          description: "ZSpace audits global checkouts for the payment, address and duty issues that stop international orders.",
        },
      },
      {
        heading: "Language and Legal Text",
        body: [
          "Translate the entire checkout: labels, help text, error messages, terms, consent text and emails. Show legal information that applies to the customer's market, such as withdrawal and returns rights where they differ. Have checkout translations reviewed by fluent speakers; errors here directly block purchases.",
        ],
      },
      {
        heading: "Validation and Errors",
        body: [
          "Validate inline and explain problems specifically, in the customer's language. Don't clear fields on errors. Log validation failures by country: a spike in postcode errors for one country usually means your rules are wrong, not the customers. See [[/blogs/ux-writing|UX writing]] for error message guidance.",
        ],
      },
      {
        heading: "Confirmation and After",
        body: [],
        checklist: [
          "Confirmation page and email in the customer's language",
          "Totals in the currency paid, with duties and taxes shown",
          "Delivery estimate and tracking link",
          "Returns instructions for their country",
          "Support contact in their language and hours",
          "Invoices meeting local requirements where needed",
        ],
      },
      {
        heading: "Platform Notes",
        body: [
          "Hosted checkouts on major platforms handle much of this when markets are configured: currency, translated checkout text, country-specific address forms and, on some platforms and plans, duties and import taxes. Shopify Markets, for example, supports market-specific currency, languages and duty collection settings ([[https://help.shopify.com/en/manual/markets/getting-started/overview|Shopify Help Center]]). Custom checkouts need to implement each element and test it per country. See [[/blogs/shopify-markets|Shopify Markets]].",
        ],
      },
      {
        heading: "Worked Example: Opening Checkout to the EU",
        body: [
          "An illustrative scenario: a US brand opens sales to EU countries. Its checkout shows US dollars, requires a state, validates ZIP codes and only accepts cards. The team configures euro pricing, adapts address forms per country, adds popular European payment methods, collects VAT and duties at checkout where supported, translates checkout and emails for its first two EU languages and adds an EU returns option. Validation errors and abandonment are tracked by country after launch.",
        ],
      },
      {
        heading: "Measuring International Checkout",
        body: [],
        table: {
          headers: ["Metric", "Segment by", "What it reveals"],
          rows: [
            ["Checkout completion", "Country, device, payment method", "Market-specific friction"],
            ["Validation errors", "Field and country", "Wrong address or phone rules"],
            ["Payment declines", "Method and country", "Method or provider issues"],
            ["Refused deliveries", "Country", "Unexpected duties or delivery problems"],
            ["Support contacts", "Country and topic", "Confusion about costs or delivery"],
          ],
        },
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Home-country address validation for every country",
          "Currency switching at the payment step",
          "Duties left to be collected on delivery without warning",
          "Payment methods not matched to markets",
          "Untranslated error messages and emails",
          "No returns information for international customers",
        ],
        cta: {
          title: "Ready to make checkout work globally?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|international checkout UX]], [[/services/cro-audit|checkout audits]] and [[/services/shopify-development|Shopify Markets checkout setup]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A global checkout succeeds when nothing about it feels foreign: local currency, payment methods, address formats, clear delivery and duties, and complete translation. Test in every market you sell to. For the overall build, see [[/blogs/international-ecommerce-website-development|international ecommerce website development]].",
          "For related guides, see [[/blogs/ecommerce-compliance|ecommerce compliance]], [[/blogs/international-ecommerce-payments|international payments]] and [[/blogs/global-ecommerce-ux|global ecommerce UX]].",
        ],
      },
    ],
  },

  // ------------------------------------------ 240 · SHOPIFY MARKETS
  {
    slug: "shopify-markets",
    title: "Shopify Markets: How to Build a Multi-Market Ecommerce Store",
    seoTitle: "Shopify Markets: Build a Multi-Market Ecommerce Store",
    excerpt: "How to use Shopify Markets: market types, customizations, currencies and rounding, catalogs and pricing, domains and languages, SEO, duties and Hydrogen.",
    category: "Shopify & Ecommerce",
    banner: "shopifymarkets",
    bannerAlt: "Shopify Markets in four columns: conditions (countries and regions, B2B company locations, retail POS locations, sales channels), customizations (currency, catalogs and pricing, product availability, tax and duties, highlighted), storefront (subfolder or domain, languages, theme per market, automatic hreflang) and operations (Shopify Payments, rounding rules, shipping per market, Managed Markets), noting that submarkets inherit parent settings unless overridden.",
    date: "2026-09-29",
    readingTime: "20 min read",
    relatedServiceSlugs: ["shopify-development", "website-development", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "retail"],
    faqs: [
      { q: "What is Shopify Markets?", a: "Shopify's set of international and multi-market selling tools. Markets combine conditions (who a market applies to, such as countries and regions) with customizations (currency, catalogs and pricing, product availability, domains, languages, themes and tax and duty settings)." },
      { q: "What types of markets does Shopify support?", a: "Shopify documents four market types: country and region markets, B2B company location markets, retail (POS) location markets and sales channel markets." },
      { q: "How many markets can I create?", a: "According to Shopify, country and region markets are available on all plans with no limit on how many you create. Other market types and catalog features have plan-specific limits." },
      { q: "Do I need Shopify Payments to sell in multiple currencies?", a: "Yes. Shopify's documentation states that selling in multiple currencies requires Shopify Payments, and currency conversion fees apply when customers pay in a currency different from your payout currency." },
      { q: "Can I set fixed prices per country?", a: "Yes, through catalogs and price settings per market, rather than relying only on automatic conversion. You can also use rounding rules for converted prices." },
      { q: "Which URL structures does Shopify Markets support?", a: "Subfolders (yourstore.com/fr/), subdomains (fr.yourstore.com) and top-level domains (yourstore.fr), assigned per market with languages." },
      { q: "Does Shopify add hreflang tags automatically?", a: "Shopify's documentation says hreflang tags, self-referencing canonical URLs and sitemaps with market URLs are generated automatically for configured domains and subfolders, and automatic hreflang can be turned off if you manage tags yourself." },
      { q: "How are languages translated?", a: "With Shopify's Translate & Adapt app (automatic and manual translation, CSV import) or third-party translation apps, publishing languages and assigning them to markets." },
      { q: "Does Shopify redirect customers to their market?", a: "Shopify's documentation describes redirecting customers to the matching domain and language based on IP address and browser language, with store selectors to override and crawlers bypassing the redirection. Google recommends avoiding forced redirects, so test the behaviour and keep selectors prominent." },
      { q: "Does Shopify Markets work with Hydrogen?", a: "Yes. Headless storefronts use the Storefront API with country and language context to get localized prices and content, and implement locale routing in the storefront." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Shopify Markets lets one Shopify store sell to many markets. Each market has conditions (countries and regions, B2B company locations, retail locations or sales channels) and customizations: currency, catalogs and pricing, product availability, domains or subfolders, languages, theme settings and tax and duty collection. Submarkets inherit settings unless overridden. Selling in multiple currencies requires Shopify Payments; rounding and fixed prices keep price points clean. Shopify generates hreflang, canonicals and sitemaps for configured market URLs. Headless builds pass country and language context to the Storefront API.",
        ],
      },
      {
        heading: "How Markets Work",
        body: [
          "Shopify describes markets as two components: conditions that define who the market applies to, and customizations that shape their experience ([[https://help.shopify.com/en/manual/markets/getting-started/overview|Shopify Help Center]]). When a visitor arrives, Shopify determines which market they belong to; visitors who match no active market fall back to a backup region, set by default to the store's home country. Submarkets inherit their parent market's customizations by default, so you can adjust a subset of countries without rebuilding everything.",
          "The diagram above groups the pieces into conditions, customizations, storefront and operations. For the platform-agnostic view, see [[/blogs/international-ecommerce-website-development|international ecommerce website development]].",
        ],
      },
      {
        heading: "Market Types",
        body: [
          "Shopify's documentation describes four market types ([[https://help.shopify.com/en/manual/markets/getting-started/market-types|Shopify Help Center]]):",
        ],
        table: {
          headers: ["Market type", "Condition", "Typical use"],
          rows: [
            ["Country and region", "Countries or regions", "Cross-border consumer selling; available on all plans with no limit on number"],
            ["B2B company location", "Company locations", "Wholesale buyers grouped by region or account"],
            ["Retail location", "POS locations", "In-person selling with market-specific catalogs (catalog customization needs POS Pro or Plus)"],
            ["Sales channel", "Specific sales channels", "Channel-specific experiences"],
          ],
        },
      },
      {
        heading: "Currencies, Pricing and Rounding",
        body: [
          "To sell in multiple currencies, Shopify requires Shopify Payments. Converted prices are calculated from your base price using the exchange rate (automatic or manual) and a currency conversion fee, then rounded if rounding is enabled; the conversion fee applies when customers pay in a currency different from your payout currency and varies by store location ([[https://help.shopify.com/en/manual/payments/shopify-payments/multi-currency/conversions|Shopify Help Center]]). For important markets, set fixed prices through catalogs or price lists rather than relying on conversion. See [[/blogs/multi-currency-ecommerce|multi-currency ecommerce]].",
        ],
        table: {
          headers: ["Setting", "Purpose"],
          rows: [
            ["Market currency", "Currency customers see and pay in"],
            ["Exchange rate: automatic or manual", "How converted prices are calculated"],
            ["Rounding", "Clean price endings after conversion"],
            ["Catalogs and fixed prices", "Market-specific pricing and availability"],
            ["Tax-inclusive pricing", "Match market display conventions"],
          ],
        },
      },
      {
        heading: "Catalogs and Product Availability",
        body: [
          "Catalogs let you control which products are available in a market and at what prices. Use them for products that can't be sold in some countries (regulatory or licensing reasons), market-specific ranges and fixed local pricing. For B2B markets, Shopify limits the number of active B2B market catalogs on non-Plus plans, while Plus allows unlimited B2B market catalogs; check current plan details.",
        ],
      },
      {
        heading: "Domains and Languages",
        body: [
          "Each market can use a subfolder (yourstore.com/fr/), subdomain (fr.yourstore.com) or top-level domain (yourstore.fr), with one or more languages. Shopify describes subfolders as suitable for most stores, being simple to set up with no extra domain costs ([[https://help.shopify.com/en/manual/markets/customizations/domains-and-languages|Shopify Help Center]]). Translate content with the Translate & Adapt app (automatic or manual translation and CSV import) or other translation apps, and adapt market-specific content where needed. See [[/blogs/multi-language-ecommerce-website|multi-language ecommerce website]].",
        ],
        cta: {
          title: "Setting up Shopify Markets for new countries?",
          description: "ZSpace configures Markets, pricing, languages and duties so each market feels local without separate stores.",
        },
      },
      {
        heading: "International SEO on Shopify",
        body: [
          "Shopify's documentation states that for configured market domains and subfolders it automatically generates hreflang tags (including x-default), self-referencing canonical URLs and sitemaps that include market URLs, and that crawlers bypass the automatic redirection applied to customers ([[https://help.shopify.com/en/manual/markets/seo|Shopify Help Center]]). Automatic hreflang can be turned off if a theme or app manages it, to avoid duplicates. Still verify the output with a crawler, localize metadata and content, and check that each market's pages are indexed. See [[/blogs/international-ecommerce-seo|international ecommerce SEO]].",
        ],
      },
      {
        heading: "Redirection and Selectors",
        body: [
          "Shopify documents redirecting customers to the domain and language that match their location, based on IP address and browser language, with store selectors letting them override and their choice saved ([[https://help.shopify.com/en/manual/markets/customizations/domains-and-languages|Shopify Help Center]]). Google's general guidance is to avoid automatically redirecting users between language versions. Keep country and language selectors prominent in the header and footer, test the redirection behaviour for your markets, and make sure travellers and people shopping for others can reach the version they want.",
        ],
      },
      {
        heading: "Duties, Taxes and Compliance",
        body: [
          "Markets can be configured for tax-inclusive pricing and duty collection for international orders. Shopify's documentation also notes market-specific compliance features, such as showing the lowest price in the previous 30 days when advertising reductions to customers in the EEA ([[https://help.shopify.com/en/manual/international/markets|Shopify Help Center]]). Shopify also offers Managed Markets for eligible stores, which takes on more of the cross-border work; check current eligibility, coverage and terms. Tax obligations remain country-specific; take advice.",
        ],
      },
      {
        heading: "Headless and Hydrogen",
        body: [
          "Headless storefronts built with Hydrogen or other frameworks use the Storefront API with country and language context so product prices, availability and translated content are returned for the right market. The storefront implements locale routing (for example /fr-ca/ paths or domains), a market selector and hreflang, and hands off to Shopify checkout with the correct market. Plan how market configuration in the admin maps to routes in the storefront. See [[/blogs/shopify-hydrogen|Shopify Hydrogen]] and [[/blogs/headless-ecommerce-architecture|headless ecommerce architecture]].",
        ],
      },
      {
        heading: "Markets vs Expansion Stores",
        body: [
          "Markets handle most multi-country needs from one store. Shopify Plus includes expansion stores for cases where a separate storefront is justified, for example very different catalogs, brands, teams or operations. Start with Markets and move a market to an expansion store only when configuration can't cover the differences. See [[/blogs/country-specific-ecommerce-stores|country-specific ecommerce stores]].",
        ],
      },
      {
        heading: "Setup Sequence",
        body: [],
        checklist: [
          "Define markets and submarkets from demand and operations",
          "Activate Shopify Payments and choose currencies",
          "Set exchange rate approach, rounding and fixed prices where needed",
          "Configure catalogs and product availability per market",
          "Assign domains or subfolders and languages; translate content",
          "Configure tax display and duty collection",
          "Set shipping zones, rates and delivery estimates per market",
          "Test selectors, redirection, hreflang, checkout and emails per market",
          "Monitor indexing, conversion and margin by market",
        ],
      },
      {
        heading: "Worked Example: Adding Canada and the EU",
        body: [
          "An illustrative scenario: a US Shopify store adds a Canada market (Canadian dollars, English and French, /en-ca/ and /fr-ca/ subfolders) and an EU market (euros, English and German, with a Germany submarket inheriting EU settings). Bestsellers have fixed prices per market; other products convert with rounding. Two products unavailable in the EU are excluded through the EU catalog. Duties are collected at checkout where configured. After launch the team crawls the site to confirm hreflang and canonicals, checks indexing per subfolder and compares conversion by market.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Relying only on converted prices for key markets",
          "Turning on markets without translations or localized content",
          "Duplicate hreflang from both Shopify and an app",
          "Hiding the country selector",
          "Not testing duties, emails and refunds per market",
          "Using expansion stores when Markets would do",
        ],
        cta: {
          title: "Ready to take your Shopify store international?",
          description: "Talk to ZSpace about [[/services/shopify-development|Shopify Markets setup]], [[/services/website-development|Hydrogen and headless localization]] and [[/services/ui-ux-design|localized storefront UX]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Shopify Markets gives one store the tools to sell across countries: market conditions, currency and pricing controls, catalogs, domains, languages, SEO output and duty settings. Configure them deliberately, localize beyond translation and verify every market end to end. For checkout specifics, see [[/blogs/global-ecommerce-checkout|global ecommerce checkout]].",
          "For related guides, see [[/blogs/multi-region-ecommerce|multi-region ecommerce]] and [[/blogs/international-ecommerce-shipping|international shipping]].",
        ],
      },
    ],
  },
];
