import type { BlogPost } from "./blog-data";

/**
 * Arabic SEO and bilingual (Arabic/English, RTL) website development for UAE
 * businesses. Sources checked 2026-10-08: Google Search Central (multi-regional
 * sites, hreflang, URL structure, canonicalisation, spam policies, structured
 * data, AI features); Google blogs (AI Overviews in Arabic, 20 May 2025; AI Mode
 * in Arabic, 8 Oct 2025); Gulf News (AI Mode MENA); StatCounter (UAE search
 * share, Sept 2026); W3Techs (content languages); W3C Internationalization
 * (dir, lang, bidi, alreq); MDN (logical properties, :dir(), Intl); Lucene
 * ArabicNormalizer; Elasticsearch arabic analyzer; Material Design and Mozilla
 * RTL guidance; Dubai Design System; Shopify, Sanity, Strapi, Contentful,
 * WPML and Next.js documentation; Constitute Project (UAE Constitution Art. 7);
 * u.ae consumer protection; Khaleej Times (2011 population; draft Arabic
 * Language Law, 30 Apr 2026). Intl output tested in Node 22.20 (ICU 77.1,
 * CLDR 47). No figure here is ZSpace client data; all examples are hypothetical.
 */
export const uaeArabicPosts: BlogPost[] = [
  {
    slug: "arabic-seo-uae",
    title: "Arabic SEO for UAE Businesses: How to Build Content That Works in Arabic and English",
    seoTitle: "Arabic SEO for UAE Businesses: Arabic and English",
    excerpt:
      "Arabic SEO for UAE businesses: when Arabic pages pay off, Arabic keyword research, hreflang, URLs, metadata, schema and a bilingual content framework.",
    category: "Web Development",
    banner: "multilangmap",
    sceneKind: "serp",
    bannerAlt: "A bilingual site map with Arabic and English page versions linked by hreflang and feeding separate search results",
    date: "2026-10-08",
    readingTime: "19 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "ui-ux-design"],
    relatedIndustrySlugs: ["real-estate", "ecommerce", "travel-hospitality", "professional-services", "saas-technology"],
    relatedSlugs: ["multilingual-website-development-uae", "international-ecommerce-seo", "geo-uae"],
    faqs: [
      { q: "What is Arabic SEO?", a: "Arabic SEO is the work of making Arabic-language pages discoverable and useful for people who search in Arabic. It covers keyword research done in Arabic, spelling and dialect variants, right-to-left page quality, Arabic metadata and structured data, hreflang between Arabic and English versions, and measurement per language. Translating English pages and adding Arabic keywords is not Arabic SEO; it usually produces pages that read poorly and match the wrong queries." },
      { q: "Does every UAE business need an Arabic website?", a: "No. English is the working language for many UAE residents and many B2B buyers, and we found no general legal requirement for a business website to be in Arabic. Arabic content is usually justified when you sell to government or semi-government buyers, Emirati consumers, Arabic-speaking residents or Saudi and wider GCC markets. Ecommerce businesses registered in the UAE also have Arabic product information obligations under consumer protection rules, so check those with an adviser." },
      { q: "Should I use ar or ar-AE in hreflang?", a: "Use ar-AE if the Arabic pages are specific to the UAE, for example with AED prices, UAE delivery or UAE legal terms. Use plain ar if the same Arabic page serves Arabic speakers in every country. Google supports ISO 639-1 language codes with an optional ISO 3166-1 region, so ar-AE and en-AE are valid, while AE on its own is not. Add x-default for users whose language matches no version." },
      { q: "Should Arabic URLs use Arabic script or transliterated slugs?", a: "Both can work. Arabic-script slugs read naturally to Arabic users in the address bar, and Google's URL guidance includes an Arabic example and recommends percent-encoding non-ASCII characters in links. The trade-off is that copied Arabic URLs often appear as long percent-encoded strings in emails, analytics and some tools. Transliterated or English slugs are shorter and easier to manage. Choose one convention per site and keep it stable." },
      { q: "Can I use machine translation for Arabic SEO pages?", a: "Machine translation can be a first draft, but publish only after a fluent Arabic reviewer has corrected terminology, tone and meaning. Google's spam policies list automated translation used to generate many pages that provide little value to users as an example of scaled content abuse. Beyond policy risk, unreviewed Arabic often uses terms customers do not search for, which defeats the purpose of having Arabic pages." },
      { q: "Should the Arabic page canonicalise to the English page?", a: "No. Each language version should carry a self-referencing canonical and list the other versions through hreflang. Canonicalising Arabic pages to English tells Google the Arabic URL is a duplicate, so it may never be shown to Arabic searchers. Google's canonicalisation guidance says that when you use hreflang you should specify a canonical page in the same language, or the best substitute language if none exists." },
      { q: "Do AI Overviews appear in Arabic?", a: "Yes. Google announced Arabic support for AI Overviews on 20 May 2025, and its MENA blog announced AI Mode in Arabic on 8 October 2025, rolling out gradually. Google says there are no special requirements for these features beyond being indexed and eligible for a snippet. Useful, well-structured Arabic content that answers real questions is therefore the main lever, not special markup or AI text files." },
      { q: "How do I measure Arabic SEO separately from English?", a: "Use a consistent language folder such as /ar/ and /en/, then filter Search Console's Performance report by page path for each language and compare queries, impressions and clicks. In analytics, record the page language as its own dimension or content group, because browser language is not the same thing. Track enquiries and sales by page language so you can judge whether Arabic pages earn their maintenance cost." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**Arabic SEO for UAE businesses** means publishing Arabic pages that Arabic-speaking searchers can find and trust, alongside English pages, with keyword research done in Arabic, correct hreflang and canonicals, Arabic metadata and schema, right-to-left layouts and separate measurement. It is a content and technical discipline in its own right, not English pages with Arabic keywords added.",
          "Not every UAE search needs an Arabic page. English is the everyday business language for a large share of residents, so the right question is which audiences, pages and queries justify Arabic. This guide sets out how to decide, how to research Arabic queries properly, how to structure a bilingual site for search, and how to measure each language on its own terms.",
          "Figures in this guide are sourced and dated. Everything else is our recommendation and is labelled as such. Industry examples are hypothetical. For the development and right-to-left build work behind a bilingual site, see our companion guide to [[/blogs/multilingual-website-development-uae|multilingual website development in the UAE]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Arabic pages pay off for specific audiences: government and semi-government buyers, Emirati consumers, Arabic-speaking residents and Saudi or wider GCC expansion.",
          "Arabic is the UAE's official language (Constitution, Article 7), and UAE-registered ecommerce businesses must provide product information and consumer invoices in Arabic. We found no general legal requirement for business websites to be in Arabic.",
          "Seed keyword research in Arabic, then check spelling variants (alef, taa marbuta, yaa), diacritics, Gulf versus Modern Standard Arabic terms and, occasionally, Arabizi.",
          "Give each language its own URL, a self-referencing canonical and reciprocal hreflang (ar-AE, en-AE and x-default). Never canonicalise Arabic to English.",
          "Write Arabic titles, descriptions and structured data from the Arabic page. Schema must match the visible Arabic text.",
          "Bulk machine-translated pages with little value fall under Google's scaled content abuse policy. Use fluent human review.",
          "AI Overviews have supported Arabic since 20 May 2025 and AI Mode since 8 October 2025, so useful Arabic content now feeds AI answers too.",
          "Measure Arabic and English separately in Search Console and analytics, by page language.",
        ],
      },
      {
        heading: "Does every UAE business need Arabic SEO?",
        body: [
          "**The answer first:** no. Arabic SEO is commercially justified when Arabic-speaking buyers are a meaningful part of your market, when the buying process is conducted in Arabic, or when regulation requires Arabic content. Many UAE businesses can rank and sell well in English and add Arabic selectively.",
          "**UAE facts.** The UAE population is overwhelmingly expatriate: the latest official breakdown we could verify, from 2011, counted about 88.5% expatriates and 11.5% UAE nationals (National Bureau of Statistics, reported by [[https://www.khaleejtimes.com/article/expats-form-88-of-population|Khaleej Times]]). More recent estimates of about 89% circulate only on secondary sites, so treat the exact share as dated. We found no source that measures the split between English and Arabic search queries in the UAE.",
          "Two cautions follow. First, 'expatriate' does not mean 'English speaker': many residents come from other Arab countries and may search in Arabic. Second, a small share of the population can still be a large share of a market. Emirati households, government entities and semi-government companies often carry high purchasing power and contract value.",
          "**Search supply also matters.** W3Techs estimates that Arabic is the content language of 0.6% of websites whose language it can identify, against 49.5% for English ([[https://w3techs.com/technologies/overview/content_language|W3Techs, 8 October 2026]]). That measures websites, not demand, but it suggests that a well-made Arabic page often competes in a thinner field than its English equivalent. Our recommendation is to test this in your own niche rather than assume it.",
        ],
        table: {
          headers: ["Audience", "Why Arabic matters", "Typical Arabic scope"],
          rows: [
            ["Government and semi-government buyers", "Arabic is the official language of federal authorities; tenders and decision-makers often work in Arabic", "Service pages, capability statements, case studies, contact and procurement pages"],
            ["Emirati consumers", "Language preference, trust and cultural fit, especially in premium and family purchases", "Product or service pages, FAQs, checkout and support content"],
            ["Arabic-speaking residents", "Many search in Arabic for everyday services, health, education and property", "High-intent pages and local landing pages"],
            ["Saudi and GCC expansion", "Larger Arabic-first markets; see our [[/blogs/uae-to-saudi-ecommerce-expansion|UAE to Saudi expansion guide]]", "Full parity, often with market-specific pages"],
            ["UAE-registered ecommerce", "Arabic product information and invoices are legal requirements", "Product information, invoices and the purchase path at minimum"],
            ["Expatriate-focused B2B services", "Buyers usually search and buy in English", "English first; Arabic summaries for key pages may be enough"],
          ],
        },
      },
      {
        heading: "The Arabic language context in UAE law",
        body: [
          "**UAE facts.** Article 7 of the UAE Constitution states that 'the official language of the UAE is Arabic' ([[https://www.constituteproject.org/constitution/United_Arab_Emirates_2009|Constitute Project]]). Under Federal Law No. 15 of 2020 on consumer protection, as amended by Decree-Law No. 5 of 2023, consumer invoices must be in Arabic (other languages are optional), and ecommerce businesses registered in the UAE must provide information about their products and services in Arabic ([[https://u.ae/en/information-and-services/justice-safety-and-the-law/consumer-protection|u.ae consumer protection]]).",
          "**A draft federal Arabic Language Law is in progress.** Khaleej Times reported on 30 April 2026 that the Ministry of Culture had received approval to draft the law, that the Federal National Council had discussed it, and that it would require Arabic in public-facing advertising and promotional campaigns, with penalties and incentives. Officials also spoke about integrating Arabic into AI systems and digital platforms. The report did not describe specific obligations for business websites ([[https://www.khaleejtimes.com/uae/uae-draft-arabic-language-law-explained|Khaleej Times]]). As far as we could verify, it remained a draft in October 2026.",
          "What this means in practice: if you run a UAE-registered online store, Arabic product information is not optional, whatever your SEO plan says. If your website promotes products or services to the UAE public, watch how the final law defines advertising. Neither point is legal advice; confirm your obligations with the relevant authority or a UAE-qualified adviser.",
        ],
        callout: {
          type: "note",
          text: "We found no general legal requirement that a UAE business website must be published in Arabic. The firm obligations we could verify are Arabic consumer invoices and Arabic product information for UAE-registered ecommerce businesses.",
        },
      },
      {
        heading: "A bilingual content strategy framework: three tiers",
        body: [
          "**The answer first:** decide Arabic coverage page by page, not site by site. Most UAE businesses fit one of three tiers, and many mix them: full parity for the pages that sell, key pages in Arabic for the pages that build trust, and English-only pages with an Arabic summary for long-tail content.",
          "**Tier 1, full parity.** Every customer-facing page exists in both languages with equivalent depth. This suits Arabic-first audiences, government-facing businesses, UAE-registered ecommerce and GCC expansion. It costs the most to maintain, because every update must ship in both languages.",
          "**Tier 2, key pages.** Home, core service or category pages, top products, about, contact, pricing guidance and the main FAQs exist in Arabic. Blog and resource content stays in English. This suits most UAE SMEs that sell to a mixed audience.",
          "**Tier 3, English with Arabic summaries.** English pages carry the depth, and a short, fully Arabic page per service or topic answers the main questions and routes to Arabic-speaking staff. Keep each page in one language: Google advises against side-by-side translations on the same page. This suits expatriate-focused B2B businesses that still want to be found by Arabic searchers.",
        ],
        table: {
          headers: ["Decision question", "If yes", "If no"],
          rows: [
            ["Are you a UAE-registered ecommerce business?", "Arabic product information is required; plan Tier 1 for the product and purchase path", "Continue"],
            ["Do government or semi-government buyers make up a meaningful share of revenue?", "Tier 1 for services and capability pages", "Continue"],
            ["Do Arabic queries appear in Search Console, ads data or enquiries already?", "Tier 2 at least, starting with the pages those queries reach", "Test with Tier 3 summaries"],
            ["Are you expanding to Saudi Arabia or the wider GCC?", "Tier 1, possibly with market-specific Arabic pages", "Continue"],
            ["Can you staff Arabic replies to enquiries?", "Publish Arabic contact paths prominently", "Do not promise Arabic support you cannot deliver"],
            ["Can you fund fluent Arabic review for every update?", "Choose the tier you can maintain", "Reduce scope; a stale Arabic page is worse than none"],
          ],
        },
        callout: {
          type: "tip",
          text: "Pick the tier you can keep current. An Arabic page with last year's prices, an expired offer or a broken form damages trust more than a clear English page with an Arabic contact option.",
        },
      },
      {
        heading: "How to do Arabic keyword research",
        body: [
          "**The answer first:** start from Arabic, not from translated English keywords. Ask Arabic-speaking customers and staff how they describe your service, collect the Arabic terms used by competitors and marketplaces, then expand and validate those seeds in keyword tools, Search Console and Google Trends set to Arabic.",
          "**Step 1: seed in Arabic.** Translation produces the term a dictionary prefers, not the one a buyer types. Collect seeds from sales calls, WhatsApp enquiries, Arabic reviews, competitors' Arabic pages, Arabic marketplace listings and the Arabic autocomplete suggestions Google shows.",
          "**Step 2: expand per language.** In Google Keyword Planner, set the language to Arabic and the location to the UAE (and separately to Saudi Arabia if relevant). Repeat in English. Do not compare Arabic and English volumes as if they measure the same thing, and treat low-volume Arabic terms with care: keyword tools often round or group small numbers. We do not quote volumes here because they change and depend on the tool.",
          "**Step 3: validate with your own data.** Search Console shows the Arabic queries that already trigger impressions, even on English pages. Google Trends lets you compare the relative interest of two Arabic phrasings in the UAE. Paid search query reports, if you run Arabic ads, are the most reliable evidence of what converts.",
          "**Step 4: map one primary intent to one page per language.** Group variants that share intent onto one Arabic page, just as you would in English. Avoid separate pages for each spelling variant.",
          "**Step 5: check the results page.** Search each primary Arabic query yourself. Note whether Google returns Arabic pages, English pages, marketplaces, government portals, maps or an AI Overview. That tells you what kind of page can compete.",
        ],
        checklist: [
          "Seeds collected from customers, staff and Arabic competitors, not from a translation tool",
          "Keyword Planner run separately for Arabic and English, UAE location",
          "Search Console filtered for Arabic-script queries",
          "Spelling variants and dialect terms checked (see next section)",
          "Each Arabic keyword group mapped to one Arabic URL",
          "SERP checked by an Arabic speaker for each priority query",
        ],
      },
      {
        heading: "Arabic spelling, normalisation and dialect: what to check",
        body: [
          "Arabic has several common spelling variations that a search engine may or may not treat as equivalent. Apache Lucene's ArabicNormalizer, which Elasticsearch and OpenSearch use for Arabic search, folds hamza forms of alef to bare alef, taa marbuta to haa, alef maksura to yaa, and removes diacritics and tatweel ([[https://lucene.apache.org/core/9_0_0/analysis/common/org/apache/lucene/analysis/ar/ArabicNormalizer.html|Apache Lucene]]). Those are exactly the variants to check in keyword research, because users type them inconsistently.",
          "Diacritics (harakat) are usually omitted in everyday Arabic writing; an academic survey of Arabic diacritisation describes Modern Standard Arabic as typically written without them. Write headings and metadata without diacritics unless the text genuinely needs them, such as Quranic quotations or names that would otherwise be ambiguous.",
          "Dialect matters too. Gulf Arabic speakers may search with colloquial words where formal pages use Modern Standard Arabic (MSA). Older academic studies found that a query written in MSA may not retrieve documents written in colloquial Arabic. Those studies are dated and not UAE-specific, so treat dialect as something to test, not as a rule.",
          "**Arabizi**, Arabic written in Latin letters with digits for some sounds (for example 3 for ع and 7 for ح), appears in informal chat. Research on Saudi users found it to be mainly a youth and peer register rather than a formal one, and we found no UAE-specific study. Check it once in keyword research, but do not build pages around it.",
        ],
        table: {
          headers: ["Variant type", "Illustrative example", "What to do"],
          rows: [
            ["Hamza on alef", "للإيجار and للايجار ('for rent')", "Write correctly on the page; check both forms in Search Console and Trends"],
            ["Taa marbuta vs haa", "شقة and شقه ('apartment')", "Use the correct form; expect users to type both"],
            ["Alef maksura vs yaa", "مستشفى and مستشفي ('hospital')", "Use the correct form; do not create pages per variant"],
            ["Diacritics", "إِيجار versus إيجار", "Omit in headings and titles unless needed for meaning"],
            ["Singular vs plural", "شقة and شقق ('apartment' and 'apartments')", "Check which form the results page favours; category pages often suit plurals"],
            ["MSA vs everyday terms", "جهاز تكييف and مكيف ('air conditioner')", "Test both; use the term customers use, with the formal one in body text where natural"],
            ["Arabizi", "Latin-script Arabic with digits", "A niche check only"],
          ],
        },
        callout: {
          type: "note",
          text: "These examples illustrate the kinds of variation to check. They are not keyword recommendations, and we make no claim about their search volumes. Validate every term with an Arabic-speaking reviewer and your own data.",
        },
      },
      {
        heading: "How English and Arabic search intent can differ",
        body: [
          "**The answer first:** the same topic can carry different intent in each language, so do not assume an Arabic page should mirror its English twin. We found no published UAE study comparing Arabic and English search intent, so the points below are hypotheses to test, not findings.",
          "**Hypothesis 1: Arabic queries may skew towards trust and process.** Arabic-speaking buyers of high-value services may search for licensing, approvals, family suitability or the steps involved, where English queries focus on price and comparison. Test by reviewing Arabic Search Console queries and enquiry transcripts.",
          "**Hypothesis 2: Arabic results pages may show more government and marketplace results.** For regulated topics such as visas, licences and health, Arabic results often include official portals. If so, your Arabic page should explain and link to the official process rather than compete with it.",
          "**Hypothesis 3: brand queries may switch language.** Many users type a brand in Latin script and the rest of the query in Arabic, or the reverse. Check mixed-script queries in Search Console before deciding how to write brand names in Arabic titles.",
          "**Our recommendation:** write an Arabic brief for each Arabic page, based on Arabic queries and the Arabic results page, then let the Arabic writer decide the structure. Translation of the English page should be one input, not the template.",
        ],
      },
      {
        heading: "URL strategy for Arabic and English",
        body: [
          "**The answer first:** give each language its own URL. For most UAE businesses, language subdirectories on one domain (example.ae/ar/ and example.ae/en/) are the simplest to run. Use subdomains or ccTLDs only when there is a clear organisational or market reason.",
          "Google 'recommends using different URLs for each language version of a page' rather than switching language with cookies or browser settings, and advises against automatically redirecting users between language versions ([[https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites|Google Search Central]]). Google also says it determines a page's language from its visible content, not from the lang attribute or the URL, so the URL pattern is for users and site management rather than a language signal.",
        ],
        table: {
          headers: ["Option", "Example", "Google's listed pros", "Google's listed cons", "Our view for UAE sites"],
          rows: [
            ["Subdirectory", "example.ae/ar/", "Easy to set up; low maintenance (same host)", "Single server location; separation of sites harder", "Default choice for most bilingual UAE sites"],
            ["Subdomain", "ar.example.com", "Easy to set up; allows different server locations", "Users might not recognise geotargeting from the URL alone", "Useful when a separate team or platform runs the Arabic site"],
            ["ccTLD", "example.sa", "Clear geotargeting; server location irrelevant", "Expensive, limited availability; targets a single country", "For separate country sites, such as a Saudi store"],
            ["URL parameter", "example.com?lang=ar", "None listed", "Not recommended; segmentation difficult", "Avoid"],
          ],
        },
        callout: {
          type: "tip",
          text: "Arabic-script or transliterated slugs? Arabic slugs read naturally to Arabic users, and Google's URL structure documentation includes an Arabic example and recommends percent-encoding non-ASCII characters in links. The cost is that copied Arabic URLs appear as long percent-encoded strings in emails, spreadsheets and analytics. Short English or transliterated slugs are easier to manage. Either works; pick one convention and do not change it after launch.",
        },
      },
      {
        heading: "hreflang for Arabic and English (ar-AE, en-AE and x-default)",
        body: [
          "**The answer first:** every Arabic page should point to its English equivalent and itself, every English page should do the same, and both should name an x-default. Google ignores hreflang annotations that are not reciprocal.",
          "**Google's rules.** You can declare hreflang with HTML link tags, HTTP headers or an XML sitemap; one method is enough. 'Each language version must list itself as well as all other language versions.' URLs must be fully qualified. Only ISO 639-1 language codes with optional ISO 3166-1 Alpha-2 regions are supported, so ar-AE and en-AE are valid, and AE alone is not. x-default covers users whose language matches no version ([[https://developers.google.com/search/docs/specialty/international/localized-versions|Google hreflang documentation]]).",
          "**ar or ar-AE?** Use ar-AE when the Arabic content is specific to the UAE: AED prices, UAE delivery, UAE legal pages or emirate-specific services. Use plain ar if the same Arabic page is meant for Arabic speakers everywhere. If you later launch a Saudi version with SAR prices, that becomes ar-SA, and the UAE page stays ar-AE.",
          "**Which page is x-default?** Usually the English version, or a language-selection page if you have one. Do not point x-default at a page that redirects based on browser language.",
          "The full mechanics of hreflang across many markets are covered in our [[/blogs/international-ecommerce-seo|international ecommerce SEO guide]]; for a two-language UAE site, the pattern below is enough.",
        ],
        code: {
          label: "hreflang tags in the head of both the Arabic and English page",
          text: "<link rel=\"alternate\" hreflang=\"ar-AE\"\n  href=\"https://example.ae/ar/villas/\" />\n<link rel=\"alternate\" hreflang=\"en-AE\"\n  href=\"https://example.ae/en/villas/\" />\n<link rel=\"alternate\" hreflang=\"x-default\"\n  href=\"https://example.ae/en/villas/\" />",
        },
      },
      {
        heading: "Canonicals and duplicate translations",
        body: [
          "**The answer first:** each language version gets a self-referencing canonical. Never canonicalise the Arabic page to the English page; that tells Google the Arabic URL is a duplicate and can keep it out of Arabic results.",
          "Google treats redirects and rel=canonical as strong signals and sitemap inclusion as a weak one, and it chooses canonicals itself. When you use hreflang, Google asks you to specify a canonical in the same language, or the best substitute language if a same-language page does not exist ([[https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls|Google canonicalisation guidance]]).",
          "**Duplicate translations happen in less obvious ways.** Common examples are an Arabic URL that falls back to English text because nothing was translated; two Arabic URLs for the same page (for example with and without a trailing slash, or with Arabic and transliterated slugs both live); and Arabic pages whose body is translated but whose navigation, filters and product data are still in English. Google's multilingual guidance notes that translating only boilerplate while keeping the main content in one language can create a poor experience when the same content appears several times in results.",
          "**Our recommendation:** do not publish an Arabic URL until its main content is in Arabic. If a platform falls back to the default language for untranslated content, as Shopify does, check that untranslated pages are not linked or listed in the Arabic sitemap.",
        ],
      },
      {
        heading: "Arabic metadata: titles and descriptions",
        body: [
          "**The answer first:** write Arabic title tags and meta descriptions from the Arabic page and its target queries. Do not translate the English metadata, and never leave English metadata on an Arabic page.",
          "**Titles.** Lead with the primary Arabic term as users write it, followed by the brand. Decide how to write the brand: Latin script, Arabic script, or both. Apply that decision consistently, because inconsistent brand spellings make it harder for search engines and AI systems to connect your pages.",
          "**Descriptions.** Write a natural Arabic sentence that answers the query and states a concrete next step, such as viewing prices, booking a viewing or speaking to an Arabic-speaking adviser. Keep numbers, prices and phone numbers in the format your Arabic page uses.",
          "**Other metadata.** Set Open Graph titles, descriptions and og:locale per language so links shared on WhatsApp and social platforms preview in the right language. Use Arabic alt text on Arabic pages and Arabic image file names only if your slug convention already uses Arabic script.",
          "Google's generative AI guidance says reviewing AI-generated content 'also applies to metadata' ([[https://developers.google.com/search/docs/fundamentals/using-gen-ai-content|Google Search Central]]). If you draft Arabic metadata with AI, a fluent reviewer should check every line.",
        ],
        checklist: [
          "Arabic title and description on every Arabic URL, written from Arabic queries",
          "No English title or description left on any Arabic page",
          "Brand spelling convention agreed and applied",
          "og:locale and Open Graph text set per language",
          "Alt text written in the page language",
        ],
      },
      {
        heading: "Structured data in Arabic",
        body: [
          "**The answer first:** structured data on an Arabic page should describe the Arabic page, in Arabic. Translate the visible content first, then generate the schema from it, and set inLanguage where the type supports it.",
          "Google's structured data guidelines say 'Don't mark up content that is not visible to readers of the page' and that structured data 'must be a true representation of the page content' ([[https://developers.google.com/search/docs/appearance/structured-data/sd-policies|Google structured data guidelines]]). English schema on an Arabic page fails that test, because the marked-up text is not what readers see.",
          "**Practical rules.** Product names, descriptions, FAQ answers, service names and breadcrumbs in the schema should match the Arabic text on the page. URLs in schema should point to Arabic URLs. Organization markup belongs on one page that describes the organisation; keep the name and logo consistent across languages, and use sameAs links to the same official profiles. Prices stay numeric, with priceCurrency set to AED.",
          "Remember that FAQ rich results have been limited to well-known government and health websites since August 2023, so FAQ markup is not a route to extra space in results for most businesses. It can still describe content accurately. For product schema depth, see [[/blogs/product-structured-data-ecommerce|product structured data for ecommerce]].",
        ],
      },
      {
        heading: "Internal linking within each language",
        body: [
          "**The answer first:** Arabic pages should link mainly to Arabic pages, and English pages to English pages. Cross-language links belong in the language switcher, not scattered through body text.",
          "A common failure is an Arabic page whose navigation, breadcrumbs, related products and footer all link to English URLs because those components were never localised. Search engines then see a thin Arabic island, and users are thrown back into English after one click.",
          "**Our recommendation:** localise navigation, breadcrumbs, related-content modules and footers as components, so every link they output follows the current language. Make the language switcher point to the equivalent page, not the home page. Build Arabic hub pages that link to Arabic service, category or product pages, mirroring the structure you would build in English. Our [[/blogs/ecommerce-internal-linking|ecommerce internal linking guide]] covers the patterns in more depth.",
        ],
      },
      {
        heading: "Right-to-left basics that affect SEO and user experience",
        body: [
          "Arabic pages must render right to left. The W3C advises adding dir=\"rtl\" to the html element 'any time the overall document direction is right-to-left' and never using CSS to set the base direction ([[https://www.w3.org/International/questions/qa-html-dir|W3C]]). It also advises always declaring the page language with a lang attribute on the html element.",
          "Google does not use the lang attribute to detect language, but browsers, screen readers, translation tools and font selection do. A page with lang=\"en\" and Arabic content is mispronounced by screen readers and may get the wrong fonts. Broken RTL layouts, mirrored logos, scrambled phone numbers and English error messages hurt engagement and trust, which is ultimately what search performance depends on.",
          "This guide does not repeat the build details. Our companion article on [[/blogs/multilingual-website-development-uae|multilingual website development in the UAE]] covers RTL CSS, typography, forms, numbers and a QA checklist, and our [[/blogs/website-accessibility-guide|website accessibility guide]] covers the accessibility side.",
        ],
      },
      {
        heading: "Machine translation: where the real risk is",
        body: [
          "**The answer first:** machine translation is a drafting tool, not a publishing process. Use it to speed up a fluent translator, not to replace one.",
          "Google's spam policies list, under scaled content abuse, 'Scraping feeds, search results, or other content to generate many pages (including through automated transformations like synonymizing, translating, or other obfuscation techniques), where little value is provided to users' ([[https://developers.google.com/search/docs/essentials/spam-policies|Google spam policies]]). Search Engine Journal has reported Google staff saying that machine translation reviewed by a human is acceptable, and that review by a native speaker is advisable. The policy text itself focuses on value to users rather than on the method.",
          "The commercial risk is often larger than the policy risk. Unreviewed Arabic can choose formal terms customers never search for, mistranslate product attributes, or produce text that reads as foreign. Missing diacritics make Arabic more ambiguous for machines, so automated output needs a human check for meaning, not only grammar.",
          "**Our recommendation:** keep a glossary of approved Arabic terms for your products and services, have a fluent reviewer sign off every page and every metadata field, and record who approved what. Translate fewer pages well rather than every page poorly.",
        ],
      },
      {
        heading: "Arabic in AI Overviews, AI Mode and AI assistants",
        body: [
          "**UAE and Arabic facts.** Google added Arabic to AI Overviews on 20 May 2025, as part of an expansion to more than 40 languages ([[https://blog.google/products/search/ai-overview-expansion-may-2025-update/|Google]]). AI Mode began rolling out in English across MENA, including the UAE, in August 2025 ([[https://gulfnews.com/business/markets/googles-ai-mode-launched-in-uae-mena-region-1.500244128|Gulf News]]), and Google's MENA blog announced AI Mode in Arabic on 8 October 2025, rolling out gradually ([[https://blog.google/intl/ar-mena/products/explore-get-answers/introducing-ai-mode-in-arabic/|Google MENA]]). StatCounter puts Google's share of UAE search referrals at 93.47% in September 2026 ([[https://gs.statcounter.com/search-engine-market-share/all/united-arab-emirates|StatCounter]]).",
          "Google says there are 'no additional requirements to appear in AI Overviews or AI Mode' and that you do not need special machine-readable files or markup; a page needs to be indexed and eligible to show with a snippet ([[https://developers.google.com/search/docs/appearance/ai-features|Google AI features documentation]]). For Arabic content, that means the same fundamentals: indexable Arabic pages, clear headings, direct answers in Arabic, accurate schema that matches the visible text, and facts stated plainly.",
          "**Our recommendation:** write Arabic pages that answer the questions Arabic speakers actually ask, in the first paragraph under each heading. Keep important facts such as prices, service areas, licensing and hours in Arabic text, not only in images or PDFs. AI search treats your Arabic and English pages as separate sources, so the Arabic page needs to stand on its own. For the wider picture, see [[/blogs/geo-uae|generative engine optimisation for UAE businesses]] and [[/blogs/ai-search-ready-website-uae|how to make a UAE website AI-search ready]].",
        ],
      },
      {
        heading: "Measuring Arabic and English separately",
        body: [
          "**The answer first:** report each language as its own channel. Aggregated numbers hide whether Arabic pages are earning their cost.",
          "**Search Console.** With language subdirectories, filter the Performance report by page path containing /ar/ and compare queries, impressions, clicks and positions with /en/. Filter queries by Arabic script to see Arabic searches landing on English pages, which signals a missing Arabic page. Google includes AI Overviews and AI Mode traffic in the overall Performance report under the Web search type; there is no separate AI report.",
          "**Analytics.** Record page language as a custom dimension or content group from the html lang attribute or URL path. The browser-language setting is a different thing: many Arabic speakers use English-language devices. Then report enquiries, WhatsApp clicks, bookings and sales by page language.",
          "**Business outcomes.** Tag CRM leads with the language of the page or form they came from, and the language they asked to be served in. That is the evidence you need to move a section from Tier 3 to Tier 2, or the reverse.",
        ],
        table: {
          headers: ["Metric", "Where", "What it tells you"],
          rows: [
            ["Impressions and clicks for /ar/ pages", "Search Console, page filter", "Whether Arabic pages are visible and chosen"],
            ["Arabic-script queries landing on English pages", "Search Console, query filter", "Gaps where an Arabic page is missing"],
            ["Engagement and conversions by page language", "Analytics custom dimension or content group", "Whether Arabic visitors complete actions"],
            ["Leads by language", "CRM field", "Commercial value of Arabic content"],
            ["Indexing status of Arabic URLs", "Search Console page indexing report", "Canonical or hreflang problems"],
          ],
        },
      },
      {
        heading: "Sector examples (hypothetical)",
        body: [
          "The examples below are hypothetical and illustrate how the three tiers apply. They are not client work and contain no performance data.",
        ],
        table: {
          headers: ["Sector", "Hypothetical business", "Suggested tier", "Arabic SEO focus"],
          rows: [
            ["Ecommerce", "A UAE-registered home appliances store", "Tier 1 for products and checkout", "Arabic product names and attributes customers search for; Arabic invoices and product information as required; Arabic site search. See [[/blogs/uae-ecommerce-checkout-optimization|UAE checkout optimisation]]"],
            ["Real estate", "A Dubai brokerage listing rentals and off-plan units", "Tier 1 for listings and area guides", "Rent and sale terms with spelling variants; community names in Arabic and Latin script; Arabic area guides. See [[/blogs/real-estate-website-development|real estate website development]]"],
            ["Hospitality", "An Abu Dhabi hotel with GCC family guests", "Tier 2", "Arabic room, family, dining and booking pages; Arabic answers to policy questions"],
            ["Professional services", "A Dubai accounting firm serving SMEs", "Tier 2 or 3", "Arabic pages for core services and regulatory topics, linking to official sources; Arabic-speaking contact path"],
            ["Technology", "A Dubai SaaS company selling to semi-government entities", "Tier 1 for product and capability pages; Tier 3 for documentation", "Arabic product pages, procurement and security information; consistent product naming in both scripts"],
          ],
        },
      },
      {
        heading: "Common Arabic SEO mistakes",
        body: [
          "**Translating English keywords.** The dictionary term is often not the search term.",
          "**Canonicalising Arabic pages to English.** This removes the Arabic pages from contention.",
          "**One-way hreflang.** If the English page does not point back, Google ignores the annotation.",
          "**Switching language with cookies on one URL.** Google recommends separate URLs per language.",
          "**Auto-redirecting by browser language.** Users and crawlers may never reach the other version.",
          "**English metadata or schema on Arabic pages.** Titles, descriptions and structured data must match the Arabic page.",
          "**Bulk machine translation without review.** It risks the scaled content abuse policy and loses customers anyway.",
          "**Arabic pages with English navigation and links.** Users and crawlers are pulled back into English.",
          "**Arabic in images only.** Text inside banners is invisible to search and hard to update.",
          "**No Arabic-speaking follow-up.** Ranking for Arabic queries and replying in English wastes the click.",
        ],
      },
      {
        heading: "Arabic SEO checklist for UAE websites",
        body: [
          "Use this checklist before launching or auditing Arabic pages. It covers the SEO layer; the build-level QA checklist is in our [[/blogs/multilingual-website-development-uae|multilingual development guide]]. If you are choosing a partner for the work, our guides to [[/blogs/web-development-company-dubai|choosing a web development company in Dubai]] and [[/blogs/web-development-abu-dhabi|web development in Abu Dhabi]] may help.",
        ],
        checklist: [
          "Tier decided per page section (full parity, key pages or Arabic summaries)",
          "Arabic keyword research seeded in Arabic and validated with Search Console and Trends",
          "Spelling variants, diacritics and dialect terms checked by an Arabic speaker",
          "One URL per language, using subdirectories unless there is a reason not to",
          "Slug convention chosen (Arabic script or transliterated) and documented",
          "Reciprocal hreflang with ar-AE (or ar), en-AE (or en) and x-default",
          "Self-referencing canonical on every language version",
          "No automatic redirects between language versions",
          "html lang=\"ar\" and dir=\"rtl\" on Arabic pages",
          "Arabic titles, descriptions, Open Graph text and alt text",
          "Structured data in Arabic, matching visible content, with Arabic URLs",
          "Navigation, breadcrumbs and related links stay in the current language",
          "Language switcher goes to the equivalent page",
          "Every Arabic page reviewed by a fluent reviewer, with sign-off recorded",
          "Arabic product information and invoices in place if you are a UAE-registered ecommerce business",
          "Arabic and English reported separately in Search Console, analytics and CRM",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Google: [[https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites|Managing multi-regional and multilingual sites]]; [[https://developers.google.com/search/docs/specialty/international/localized-versions|Tell Google about localized versions of your page]]; [[https://developers.google.com/search/docs/crawling-indexing/url-structure|URL structure best practices]]; [[https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls|Consolidate duplicate URLs]]; [[https://developers.google.com/search/docs/essentials/spam-policies|Spam policies]]; [[https://developers.google.com/search/docs/fundamentals/using-gen-ai-content|Using generative AI content]]; [[https://developers.google.com/search/docs/appearance/structured-data/sd-policies|Structured data guidelines]]; [[https://developers.google.com/search/blog/2023/08/howto-faq-changes|FAQ and HowTo changes]]; [[https://developers.google.com/search/docs/appearance/ai-features|AI features and your website]]; [[https://blog.google/products/search/ai-overview-expansion-may-2025-update/|AI Overviews expansion, May 2025]]; [[https://blog.google/intl/ar-mena/products/explore-get-answers/introducing-ai-mode-in-arabic/|AI Mode in Arabic, October 2025]].",
          "UAE: [[https://www.constituteproject.org/constitution/United_Arab_Emirates_2009|UAE Constitution, Constitute Project]]; [[https://u.ae/en/information-and-services/justice-safety-and-the-law/consumer-protection|u.ae consumer protection]]; [[https://www.khaleejtimes.com/uae/uae-draft-arabic-language-law-explained|Khaleej Times, draft Arabic Language Law]]; [[https://www.khaleejtimes.com/article/expats-form-88-of-population|Khaleej Times, 2011 population data]]; [[https://gulfnews.com/business/markets/googles-ai-mode-launched-in-uae-mena-region-1.500244128|Gulf News, AI Mode in MENA]].",
          "Data and standards: [[https://gs.statcounter.com/search-engine-market-share/all/united-arab-emirates|StatCounter UAE search engine share]]; [[https://w3techs.com/technologies/overview/content_language|W3Techs content languages]]; [[https://www.w3.org/International/questions/qa-html-dir|W3C, structural markup and right-to-left text]]; [[https://www.w3.org/International/questions/qa-html-language-declarations|W3C, language declarations]]; [[https://lucene.apache.org/core/9_0_0/analysis/common/org/apache/lucene/analysis/ar/ArabicNormalizer.html|Apache Lucene ArabicNormalizer]]; [[https://www.searchenginejournal.com/is-google-okay-with-minor-tweaks-to-machine-translations/468763/|Search Engine Journal on machine translation review]]; [[https://doi.org/10.3390/socsci7090155|Alghamdi and Petraki (2018) on Arabizi]].",
          "This guide is not legal advice. Confirm Arabic-language obligations with the relevant authority or a UAE-qualified adviser.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Arabic SEO in the UAE is a business decision before it is a technical one. Decide which audiences need Arabic and at what depth, research Arabic queries in Arabic, give each language its own canonical URL with reciprocal hreflang, write metadata and schema from the Arabic page, and measure Arabic on its own. A smaller set of well-researched, fluently reviewed Arabic pages will usually outperform a full machine-translated copy of the English site, in search, in AI answers and with customers.",
        ],
        cta: {
          title: "Planning Arabic pages for a UAE website?",
          description: "ZSpace Labs is an India-based, remote-first technology studio that works with UAE and global businesses on [[/services/website-development|bilingual websites]], [[/services/shopify-development|Shopify stores]] and [[/services/ui-ux-design|right-to-left UX]]. If you are deciding how much of your site to publish in Arabic, we are happy to look at your structure and data and suggest a practical scope.",
        },
      },
    ],
  },
  {
    slug: "multilingual-website-development-uae",
    title: "Multilingual Website Development in the UAE: Arabic, English, RTL and UX Best Practices",
    seoTitle: "Multilingual Website Development in the UAE",
    excerpt:
      "How to build Arabic and English websites in the UAE: architecture, CMS set-up, RTL CSS, typography, forms, numbers, a QA checklist and common mistakes.",
    category: "Web Development",
    banner: "i18nlayers",
    sceneKind: "code",
    bannerAlt: "Layered diagram of a bilingual website: content model, locale routing, right-to-left styles and per-language QA",
    date: "2026-10-08",
    readingTime: "20 min read",
    relatedServiceSlugs: ["website-development", "ui-ux-design", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "real-estate", "travel-hospitality", "saas-technology", "professional-services"],
    relatedSlugs: ["arabic-seo-uae", "multi-language-ecommerce-website", "website-accessibility-guide"],
    faqs: [
      { q: "What is the best architecture for a bilingual Arabic and English website?", a: "For most UAE businesses, one domain with language subdirectories, such as /ar/ and /en/, is the simplest to build and run. Each page has a stable URL per language, hreflang is straightforward, and one codebase and CMS serve both. Subdomains or separate country domains make sense when a different team, platform or market runs the other site. Avoid switching language on the same URL with cookies, which Google does not recommend." },
      { q: "Should I set right-to-left direction in CSS or HTML?", a: "In HTML. The W3C advises putting dir=\"rtl\" on the html element whenever the document's overall direction is right to left, and never using CSS to apply the base direction, because markup keeps working when styles fail to load. Use CSS logical properties such as margin-inline-start so the same stylesheet works in both directions, and use dir=\"auto\" or the bdi element for user-generated text of unknown direction." },
      { q: "Do Arabic websites in the UAE use Arabic-Indic or Western digits?", a: "Both are seen, so make it a design decision. In our tests with Node.js 22 (ICU 77.1, CLDR 47), the ar-AE locale formats numbers with Latin digits by default, while ar-SA and ar-EG use Arabic-Indic digits. Defaults can differ between browsers and runtime versions, so set the numbering system explicitly in your formatting code, for example with the -u-nu-latn or -u-nu-arab locale extension." },
      { q: "Which icons should be mirrored in a right-to-left layout?", a: "Mirror icons that show direction or sequence: back and forward arrows, chevrons in navigation, progress indicators and sliders. Do not mirror icons without a direction, such as a camera, or icons tied to real-world objects and conventions: media playback controls, clocks, checkmarks, logos and icons containing text or numbers. Material Design and Mozilla's RTL guidelines both document these rules." },
      { q: "Can I use automatic language detection to redirect visitors?", a: "Avoid automatic redirects between language versions. Google advises against them because they can stop users and search engines from reaching every version. A better pattern is to serve the URL requested and, if the browser language suggests the other version, show a dismissible banner offering it. Remember the user's choice, and always provide a visible language switcher that leads to the equivalent page." },
      { q: "How should Arabic site search work?", a: "Arabic site search should normalise common spelling variants so users find results however they type. Apache Lucene's ArabicNormalizer, used by Elasticsearch and OpenSearch, folds hamza forms of alef to bare alef, taa marbuta to haa and alef maksura to yaa, and removes diacritics and tatweel. Index Arabic content with an Arabic analyser, test with real customer queries, and add synonyms for product terms with several common names." },
      { q: "Which CMS is best for a multilingual UAE website?", a: "It depends on the content model rather than the brand. Shopify suits ecommerce, with Translate & Adapt and Markets handling languages and URLs. WordPress works with multilingual plugins such as WPML. Headless CMSs such as Sanity, Strapi and Contentful support field-level or document-level localisation. Check right-to-left support in the admin, fallback behaviour for untranslated content, translation workflow and how URLs are generated per language." },
      { q: "How do I test an Arabic website before launch?", a: "Test with fluent Arabic reviewers and real Arabic content, not placeholder text. Check direction and mirroring on every template, mixed Arabic and English strings, phone numbers and prices inside Arabic sentences, form validation messages, checkout, site search, emails and PDFs, metadata, hreflang and structured data. Test on real mobile devices and with a screen reader set to Arabic. Treat Arabic as a first-class release target with its own QA sign-off." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**Multilingual website development in the UAE** usually means building one site that works equally well in Arabic and English: separate URLs per language, a content model that stores both, right-to-left layouts built with HTML direction and CSS logical properties, Arabic typography, forms, numbers and search that behave correctly, and QA run in each language. Arabic should be designed in from the start, not added as a translated copy.",
          "Most of the effort is in internationalisation: making the codebase, CMS and components language-aware so that adding Arabic does not mean rebuilding templates. Translation is then a content workflow rather than an engineering project.",
          "This guide covers architecture, CMS structure, translation workflow, RTL CSS, typography, forms, checkout, numbers and dates, site search, icons and imagery, and a detailed QA checklist. It deliberately keeps search optimisation brief; for keyword research, hreflang strategy and Arabic content planning, see our [[/blogs/arabic-seo-uae|Arabic SEO guide for UAE businesses]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Give each language its own URL; language subdirectories on one domain suit most UAE sites.",
          "Do not auto-redirect between languages; offer a suggestion banner and a switcher that goes to the equivalent page.",
          "Set lang and dir on the html element; never set the base direction in CSS.",
          "Use CSS logical properties (inline-start, inline-end) so one stylesheet serves both directions.",
          "Isolate user-generated and mixed-direction text with dir=\"auto\" or the bdi element.",
          "Set the numbering system explicitly: ar-AE defaults to Latin digits in current ICU, but defaults vary.",
          "Mirror directional icons only; never mirror logos, media controls, clocks or checkmarks.",
          "Normalise Arabic in site search, and QA every template with fluent Arabic reviewers and real content.",
        ],
      },
      {
        heading: "What a bilingual build actually requires",
        body: [
          "**Definitions.** The W3C describes internationalisation as the design and development of a product or content 'that enables easy localization for target audiences that vary in culture, region, or language', and localisation as adapting it to the language, cultural and other requirements of a specific market ([[https://www.w3.org/International/questions/qa-i18n|W3C]]). For a UAE website, internationalisation is the engineering; localisation into Arabic is the content and design work that follows.",
          "**What changes between English and Arabic** is more than text: reading direction, layout order, fonts and line spacing, number and date formats, how mixed-direction strings display, which icons point which way, how search matches words, and how forms validate input. Every one of these touches templates, components and content, which is why retrofitting Arabic onto an English-only build is usually slower and more expensive than planning it from the start.",
          "**UAE context.** Arabic is the official language of the UAE (Constitution, Article 7), and UAE-registered ecommerce businesses must provide product information and consumer invoices in Arabic ([[https://u.ae/en/information-and-services/justice-safety-and-the-law/consumer-protection|u.ae]]). We found no general legal requirement for business websites to be in Arabic, so how much Arabic to publish is a commercial decision; our [[/blogs/arabic-seo-uae|Arabic SEO guide]] sets out a tiered framework for it. The technical point is that even a partial Arabic site needs full right-to-left support in every template it uses.",
          "For the difference between translating and localising, see [[/blogs/ecommerce-localization-vs-translation|ecommerce translation vs localisation]]. For multi-market stores in general, see [[/blogs/multi-language-ecommerce-website|multi-language ecommerce website architecture]].",
        ],
      },
      {
        heading: "Architecture options for Arabic and English",
        body: [
          "**The answer first:** use separate URLs for each language. On one domain with language subdirectories, a single codebase and CMS can serve both languages, and every page has a clear Arabic and English address.",
          "Google 'recommends using different URLs for each language version of a page' rather than using cookies or browser settings to change the content language on one URL ([[https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites|Google Search Central]]). Cookie-based switching also breaks sharing: an Arabic speaker who sends a link on WhatsApp may send their contact the English page.",
        ],
        table: {
          headers: ["Architecture", "Example", "Strengths", "Weaknesses", "Best for"],
          rows: [
            ["Language subdirectories", "example.ae/ar/, example.ae/en/", "One codebase, CMS, hosting and analytics property; easy hreflang", "Both languages share one deployment and release cycle", "Most bilingual UAE sites"],
            ["Subdomains", "ar.example.com", "Can run on a different platform or team", "More infrastructure, analytics and certificate set-up", "Arabic site run by a separate team or vendor"],
            ["Country domains (ccTLDs)", "example.ae, example.sa", "Clear market targeting; per-market pricing and legal content", "Separate domain authority and operations per country", "UAE and Saudi as distinct markets"],
            ["Same URL, language by cookie or browser setting", "example.com (switches language)", "Simple to bolt on", "Not recommended by Google; one URL cannot be indexed in both languages; links share the wrong language", "Avoid"],
            ["Separate sites", "Two unrelated codebases", "Full independence", "Double maintenance; content drifts; hard to keep parity", "Rarely justified"],
          ],
        },
        callout: {
          type: "tip",
          text: "Decide the URL pattern and slug convention before content entry starts. Changing from /ar/ subdirectories to a subdomain after launch means redirects, new hreflang and a period of search instability.",
        },
      },
      {
        heading: "Language detection, redirects and the language switcher",
        body: [
          "**The answer first:** never force visitors from one language to the other. Serve the URL requested, suggest the other language when the browser language indicates it, and let users switch to the equivalent page with one click.",
          "Google advises: 'Avoid automatically redirecting users from one language version of a site to a different language version of a site', because such redirects 'could prevent users (and search engines) from viewing all the versions of your site.' Many people in the UAE use English-language phones but prefer Arabic content, or the reverse, so browser language is a weak signal anyway.",
          "**A note on Next.js.** The Next.js App Router internationalisation guide shows sub-path routing with all routes nested under app/[lang], dictionaries loaded on the server, and locale detection from the Accept-Language header in Proxy (the file formerly called middleware). Its example redirects requests without a locale to a detected locale ([[https://nextjs.org/docs/app/guides/internationalization|Next.js documentation]]). Our recommendation: if you use that pattern, limit it to the bare root URL at most, never redirect between /ar/ and /en/ pages, and prefer a suggestion banner. See [[/blogs/nextjs-website-development|Next.js website development]] for the wider stack.",
          "**The switcher.** Label each option in its own language (العربية and English), not with flags, which represent countries rather than languages. Link to the equivalent page in the other language, not to the home page. If an equivalent does not exist, say so and link to the nearest relevant page. Remember the user's explicit choice in a cookie or local storage, but use it only for suggestions, not for silent redirects.",
        ],
      },
      {
        heading: "hreflang and search essentials (brief)",
        body: [
          "Search is covered in depth in our [[/blogs/arabic-seo-uae|Arabic SEO guide]]. From a development point of view, the build must support the following, generated from the content model rather than typed by hand.",
          "Google's hreflang rules require each language version to list itself and all others, with fully qualified URLs, using ISO 639-1 language codes and optional ISO 3166-1 regions such as ar-AE and en-AE, plus x-default ([[https://developers.google.com/search/docs/specialty/international/localized-versions|Google]]). Annotations that are not reciprocal are ignored, which is why they should come from the same data that powers the language switcher.",
        ],
        checklist: [
          "hreflang generated from the translation link between documents, not hard-coded",
          "Self-referencing canonical per language; Arabic never canonicalised to English",
          "Per-language XML sitemaps, or one sitemap with alternates",
          "Untranslated pages excluded from the Arabic sitemap and navigation",
          "Title, description, Open Graph and structured data fields stored per language",
          "Server-rendered HTML for content pages, so crawlers and AI systems see the text",
        ],
      },
      {
        heading: "CMS structure: field-level vs document-level localisation",
        body: [
          "**The answer first:** choose field-level localisation when Arabic and English pages share the same structure, and document-level localisation when the Arabic version needs its own structure, sections or publication timing. Many sites use both: field-level for products and settings, document-level for marketing pages and articles.",
          "Sanity's documentation describes the two approaches as 'a single document with content in many languages' (field-level) and 'a unique document version for every language' (document-level) ([[https://www.sanity.io/docs/localization|Sanity]]). Contentful uses field-level locales with fallback chains, and an explicitly empty value blocks fallback ([[https://www.contentful.com/developers/docs/concepts/locales|Contentful]]). In Strapi, 'Internationalization can be configured for each content type and/or field' ([[https://docs.strapi.io/cms/features/internationalization|Strapi]]).",
        ],
        table: {
          headers: ["Platform", "How languages work", "Watch for"],
          rows: [
            ["Shopify", "Each published language gets its own URLs; translate manually or with Shopify's AI translations in Translate & Adapt, which has supported Arabic auto-translation since March 2024; Markets assigns subfolders, subdomains or domains per market and, according to Shopify's help centre, adds hreflang automatically", "Untranslated content falls back to the default language; check the theme's RTL support in practice. See [[/blogs/shopify-store-development|Shopify store development]] and [[/blogs/shopify-markets|Shopify Markets]]"],
            ["WordPress", "Multilingual plugins such as WPML offer a language parameter, directories or separate domains; themes load RTL stylesheets for RTL languages", "Plugin and theme compatibility; avoid the URL-parameter option"],
            ["Sanity", "Field-level or document-level, chosen per content type", "Decide the model before content entry; build references between translations"],
            ["Strapi", "Per content type and per field; disabled by default", "Enable it before creating content; plan locale-aware slugs"],
            ["Contentful", "Field-level locales with fallback chains", "Fallbacks can publish English text on Arabic pages unless blocked"],
          ],
        },
        body2: undefined,
      } as never,
      {
        heading: "Choosing between CMS approaches",
        body: [
          "Whichever platform you choose, check that the admin interface handles Arabic input properly, with right-to-left fields and previews; that editors can see which fields are untranslated; that slugs can be set per language; and that publishing one language does not silently publish the other with fallback text.",
          "For platform selection more broadly, see [[/blogs/how-to-choose-a-cms|how to choose a CMS]] and [[/blogs/headless-cms-vs-traditional-cms|headless vs traditional CMS]].",
        ],
      },
      {
        heading: "Translation workflow and release process",
        body: [
          "**The answer first:** pick one source of truth, translate through a repeatable workflow with a glossary and translation memory, have fluent reviewers approve every change, and release both languages together.",
          "**Source of truth.** Usually English is authored first and Arabic follows, but for Arabic-first audiences the reverse can be better. Whichever it is, record the source version each translation was based on, so editors can see when the Arabic is out of date.",
          "**Glossary and translation memory.** A glossary fixes approved Arabic terms for products, services, legal phrases and the brand name. Translation memory reuses approved sentences across pages and keeps terminology consistent. Both matter more in Arabic than in many languages because several valid terms often exist for the same thing.",
          "**Fluent review.** Machine translation can draft; a fluent Arabic reviewer approves. Google's spam policies list automated translation used to produce many pages 'where little value is provided to users' as an example of scaled content abuse ([[https://developers.google.com/search/docs/essentials/spam-policies|Google]]). Review should cover meaning, tone, terminology, layout in context and metadata.",
          "**UI strings.** Keep interface text (buttons, labels, errors, emails, notifications) in resource files or a translation system, never in components. Use message formats that handle plurals properly: Arabic has more plural categories than English, which simple 'one or many' logic gets wrong.",
          "**Release.** Treat Arabic as a release target, with its own QA sign-off. A change to an English page that has an Arabic twin should not ship until the Arabic is updated, or the change is explicitly marked as English-only.",
        ],
        code: {
          label: "A simple translation workflow",
          text: "Author source (EN or AR)\n  -> machine or human draft\n  -> glossary + translation memory check\n  -> fluent reviewer edits in context (preview)\n  -> QA: layout, links, metadata, schema\n  -> publish both languages together\n  -> log source version for each translation",
        },
      },
      {
        heading: "RTL foundations: dir, lang and CSS logical properties",
        body: [
          "**The answer first:** set lang and dir on the html element, write layout CSS with logical properties, and use the :dir() selector only for the few exceptions.",
          "The W3C advises adding dir=\"rtl\" to the html element 'any time the overall document direction is right-to-left' and says 'Never use CSS to apply the base direction', because markup keeps working when CSS does not load ([[https://www.w3.org/International/questions/qa-html-dir|W3C]]). It also says to always declare the language on the html element, and not to use a meta element with http-equiv set to Content-Language. Language and direction are separate attributes: do not infer one from the other in code.",
          "**Logical properties** describe layout by flow rather than physical side. MDN describes the module as controlling layout 'through logical rather than physical direction and dimension mappings' ([[https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values|MDN]]). margin-inline-start is the left margin in English and the right margin in Arabic, so one stylesheet works for both. Flexbox and grid already follow the writing direction.",
          "**The :dir() pseudo-class** matches the direction the browser computes, including inherited and dir=\"auto\" values, unlike an attribute selector such as [dir=rtl]. MDN lists it as baseline widely available since December 2023 ([[https://developer.mozilla.org/en-US/docs/Web/CSS/:dir|MDN]]). Use it for genuine exceptions, such as flipping a directional icon.",
        ],
        code: {
          label: "Arabic page root and direction-neutral CSS",
          text: "<html lang=\"ar\" dir=\"rtl\">\n\n.card {\n  margin-inline-start: 1rem;  /* not margin-left */\n  padding-inline: 1.5rem;\n  border-inline-start: 4px solid;\n  text-align: start;          /* not left */\n}\n.icon-next:dir(rtl) {\n  transform: scaleX(-1);      /* mirror arrow only */\n}",
        },
      },
      {
        heading: "Bidirectional text: names, numbers and user content",
        body: [
          "**The answer first:** whenever text of unknown or opposite direction is inserted into a sentence, isolate it. Use dir=\"auto\" on inputs and blocks of user content, and the bdi element for inline inserted values such as names, product names and order references.",
          "The Unicode bidirectional algorithm treats Arabic letters as strongly right to left, spaces and punctuation as neutral, and digits as weakly directional; the order of runs depends on the base direction ([[https://www.w3.org/International/articles/inline-bidi-markup/uba-basics|W3C]]). That is why '+971' in an Arabic sentence can appear as '971+', and why an English product name followed by a number can display in a confusing order.",
          "The W3C recommends dir=\"auto\" for user input and inserted text whose direction is unknown, and the bdi element to isolate inline text. Mark English phrases inside Arabic text with lang=\"en\" so screen readers and fonts handle them correctly.",
        ],
        checklist: [
          "Phone numbers, emails and URLs wrapped with dir=\"ltr\" inside Arabic text",
          "User names, reviews and chat messages use dir=\"auto\"",
          "Inserted product names and references wrapped in bdi",
          "Mixed-language sentences reviewed visually, not only in the CMS",
          "Inline English marked with lang=\"en\"",
        ],
      },
      {
        heading: "Layout, responsiveness and text length",
        body: [
          "**The answer first:** design every component for content that is longer or shorter than the English, and test the Arabic version at every breakpoint.",
          "Arabic text can run longer or shorter than English, depending on the content and the translator, and Arabic fonts often need more vertical space. Components that fit English exactly (navigation bars, buttons, tabs, cards with fixed heights, table headers) are where Arabic layouts break first.",
          "**Our recommendations.** Avoid fixed widths and heights on text containers. Let buttons grow and wrap. Check the mobile navigation in Arabic, since long labels often force a different menu pattern. Mirror the overall layout (logo, navigation and sidebars move to the right), but do not mirror content that has its own direction, such as charts with time axes, maps and video. Test on real devices; our [[/blogs/how-to-make-a-website-mobile-friendly|mobile-friendly website guide]] covers the general approach.",
        ],
      },
      {
        heading: "Arabic typography and font performance",
        body: [
          "**The answer first:** choose an Arabic typeface designed for screens that pairs with your Latin face, load only the subsets and weights you use, and give Arabic text enough line height for its ascenders, descenders and any diacritics.",
          "Many Google Fonts families offer an Arabic subset; in our check of the Google Fonts API in October 2026, Noto Naskh Arabic, Noto Kufi Arabic, Noto Sans Arabic, IBM Plex Sans Arabic, Cairo, Tajawal, Almarai, Readex Pro, Amiri and Changa all returned an Arabic subset. Some families cover both Arabic and Latin, which helps mixed-language text look consistent.",
          "**Performance.** Self-host or preload the Arabic font only on Arabic pages, limit weights to those you use, and use font-display settings that avoid invisible text. A heavy Arabic font that blocks rendering hurts Largest Contentful Paint for exactly the visitors you built the Arabic pages for. Google's 'good' thresholds are LCP within 2.5 seconds, INP within 200 milliseconds and CLS of 0.1 or less; see [[/blogs/website-performance-optimization|website performance optimisation]].",
          "**Line height and alignment.** We found no official numeric standard for Arabic line height, so test with real content rather than copying a Latin value. The Dubai Design System, a government design system, recommends one typeface for Arabic and English, cites WCAG 1.4.12 text spacing (line height at least 1.5 times the font size) and reserves right alignment for Arabic text ([[https://designsystem.dubai.ae/foundations/typography.md|Dubai Design System]]). Avoid letter-spacing on Arabic, which breaks the joined script, and avoid all-caps styles that have no Arabic equivalent.",
        ],
      },
      {
        heading: "Icons and imagery: what to mirror and what not to",
        body: [
          "**The answer first:** mirror icons that express direction or progress; leave everything else alone.",
          "Material Design's bidirectionality guidance says the most important icons to mirror are back and forward buttons, that progress fills right to left in RTL, and that time is shown right to left in RTL layouts; it says not to mirror icons without direction, clocks, media playback controls or numbers ([[https://m1.material.io/usability/bidirectionality.html|Material Design]]). Mozilla's RTL guidelines add checkmarks, product logos, icons containing text or numbers and the order of size dimensions to the do-not-mirror list ([[https://firefox-source-docs.mozilla.org/code-quality/coding-style/rtl_guidelines.html|Mozilla]]).",
          "**Images.** Do not put text inside images; it cannot be translated, searched or read by screen readers. Where an image implies direction (a person looking towards the content, a before-and-after sequence), consider a mirrored or alternative image for Arabic pages, but never mirror photos containing text, logos or recognisable places.",
        ],
        table: {
          headers: ["Element", "Mirror in RTL?", "Why"],
          rows: [
            ["Back and forward arrows, chevrons", "Yes", "They point along the reading direction"],
            ["Progress bars, steppers, sliders", "Yes", "Progress follows reading direction"],
            ["Carousels and pagination", "Yes", "'Next' moves in the reading direction"],
            ["Media play, pause, fast-forward", "No", "Playback controls are always LTR"],
            ["Clocks, refresh and circular arrows tied to clockwise motion", "No", "Clocks still turn clockwise"],
            ["Checkmarks", "No", "Not directional"],
            ["Logos and brand marks", "No", "Brand assets are fixed"],
            ["Icons containing text or numbers", "No", "Mirroring makes them unreadable"],
            ["Camera, search magnifier and other non-directional icons", "No", "No direction to express"],
          ],
        },
      },
      {
        heading: "Forms: labels, validation, phone numbers and Emirates ID",
        body: [
          "**The answer first:** every part of a form, including placeholders, help text, validation messages and confirmation emails, must exist in Arabic, and inputs for numbers, emails and IDs must behave predictably in a right-to-left page.",
          "**Labels and messages.** Translate labels, help text and every validation message; untranslated errors are one of the most common Arabic bugs because they live in code rather than the CMS. Keep labels visible rather than relying on placeholders, which our [[/blogs/website-accessibility-guide|accessibility guide]] explains in more depth.",
          "**Phone numbers.** Default the country code to +971 for UAE audiences, accept spaces and leading zeros, store numbers in a normalised international format, and render them with dir=\"ltr\" so they are not reordered. Accept both Western and Arabic-Indic digits on input and normalise them before validation.",
          "**Emirates ID and other identifiers.** Ask for Emirates ID only when you genuinely need it, and treat it as personal data under the PDPL. Accept it with or without separators, validate against the format your verification provider documents, and render it left to right. Where identity verification is required, UAE PASS offers authentication to private organisations with a valid UAE trade licence ([[https://docs.uaepass.ae/|UAE PASS documentation]]).",
          "**Mixed input.** Use dir=\"auto\" on free-text fields so that English typed into an Arabic form displays correctly, and set inputmode and autocomplete attributes so mobile keyboards show the right layout.",
        ],
      },
      {
        heading: "Navigation, checkout and currency",
        body: [
          "**Navigation.** Mirror the order of navigation items and breadcrumbs. Keep the language switcher in the same place in both languages so users can find their way back. Localise mega-menus, search suggestions and footers as components, so their links stay in the current language.",
          "**Checkout.** UAE addresses rarely fit Western templates; many customers describe location by area, building, landmark or map pin rather than postcode. Offer an emirate selector, area and building fields, and an optional map pin, all labelled in Arabic on Arabic pages. Payment method names and logos stay as their brands show them. Order confirmation, invoice and delivery messages must follow the order language; for UAE-registered ecommerce, consumer invoices must be in Arabic (other languages optional). See [[/blogs/uae-ecommerce-checkout-optimization|UAE ecommerce checkout optimisation]].",
          "**Currency.** Format AED prices with a locale-aware formatter rather than string concatenation. In our Node.js tests, Intl.NumberFormat with ar-AE and currency AED placed the Arabic currency abbreviation after the number with Latin digits; with en-AE it produces the English 'AED' form. Choose one presentation per language and apply it everywhere, including emails and receipts.",
        ],
      },
      {
        heading: "Numbers and dates: set them explicitly",
        body: [
          "**The answer first:** do not rely on locale defaults for digits, calendars or separators. Decide the presentation for each language and encode it in your formatting functions.",
          "**Digits.** The W3C's Arabic layout requirements note that European digits are used in western Arabic-speaking countries such as Algeria and Morocco, and Arabic-Indic digits in eastern ones such as Egypt, Saudi Arabia and Iraq; the UAE is not named ([[https://www.w3.org/TR/alreq/|W3C alreq]]). In our tests with Node.js 22.20 (ICU 77.1, CLDR 47), ar-AE formatted 1234567.89 as 1,234,567.89 with Latin digits by default, while ar-SA and ar-EG used Arabic-Indic digits. Defaults depend on the CLDR data shipped in each browser and runtime, so set the numbering system with the -u-nu-latn or -u-nu-arab extension if your design depends on it.",
          "**Dates.** Gregorian dates are the norm for most commercial content. Show Hijri dates where the context calls for them, for example around religious occasions, and only after confirming the expected calendar variant with the client. The JavaScript Intl API accepts a calendar through the locale's -u-ca- extension. In the same tests, ar-AE formatted 8 October 2026 with the Arabic month name and Latin digits.",
          "**Consistency.** Use the same formatting functions on the server and the client, so server-rendered and hydrated pages do not show different digits.",
        ],
        code: {
          label: "Explicit numbering system (tested in Node 22, ICU 77)",
          text: "new Intl.NumberFormat(\"ar-AE-u-nu-latn\")\n  .format(1234567.89)   // 1,234,567.89\n\nnew Intl.NumberFormat(\"ar-AE-u-nu-arab\")\n  .format(1234567.89)   // Arabic-Indic digits",
        },
      },
      {
        heading: "Site search in Arabic",
        body: [
          "**The answer first:** Arabic site search needs an Arabic analyser with normalisation, or customers who type a common variant will see no results.",
          "Apache Lucene's ArabicNormalizer, which Elasticsearch and OpenSearch use, folds hamza forms of alef to bare alef, taa marbuta to haa and alef maksura to yaa, and removes diacritics and tatweel ([[https://lucene.apache.org/core/9_0_0/analysis/common/org/apache/lucene/analysis/ar/ArabicNormalizer.html|Apache Lucene]]). Elasticsearch's built-in Arabic analyser chains lowercase, decimal digit, Arabic stop-word, Arabic normalisation and Arabic stemming filters ([[https://www.elastic.co/docs/reference/text-analysis/analysis-lang-analyzer|Elastic]]).",
          "**Our recommendations.** Index Arabic and English fields with their own analysers. Add synonyms for product terms that have several common Arabic names. Accept Arabic-Indic digits in queries. Return results from both languages' product data where a user searches in Latin script on an Arabic page, for example a brand name. Review zero-result Arabic queries monthly; see [[/blogs/ecommerce-site-search|ecommerce site search]] for the wider practice.",
        ],
      },
      {
        heading: "Metadata, structured data and analytics per language",
        body: [
          "**Metadata.** Store titles, descriptions, Open Graph text and og:locale as localised fields, and fail the build or flag in the CMS when an Arabic page has English metadata. Strategy for what to write in them lives in our [[/blogs/arabic-seo-uae|Arabic SEO guide]].",
          "**Structured data.** Generate JSON-LD from the localised content, so Arabic pages carry Arabic names, descriptions and URLs, and set inLanguage where the type supports it. Google's guidelines require structured data to be a true representation of the visible page content ([[https://developers.google.com/search/docs/appearance/structured-data/sd-policies|Google]]). Untranslated schema on an Arabic page is a common silent bug, because nobody sees it.",
          "**Analytics.** Send page language as its own dimension or content group, separate from browser language. Name events in one language (usually English) for consistent reporting, but record the page language as a parameter. Tag CRM leads with the form language. Our guide to [[/blogs/ai-search-ready-website-uae|AI-search-ready UAE websites]] covers the server-rendering and content structure that help both search engines and AI systems read each language version.",
        ],
      },
      {
        heading: "Hypothetical UAE examples",
        body: [
          "These scenarios are hypothetical and show how the choices combine. They are not client projects.",
        ],
        table: {
          headers: ["Scenario", "Architecture and CMS", "Key RTL and UX decisions"],
          rows: [
            ["A UAE-registered fashion store on Shopify", "Subfolders via Markets; Translate & Adapt with fluent review", "RTL theme tested on every template; Arabic product information; AED formatting; Arabic size guides and returns; Arabic search synonyms"],
            ["A Dubai property portal on Next.js", "app/[lang] routes; document-level localisation for area guides, field-level for listings", "Mixed-script community names isolated with bdi; Latin digits set explicitly; map and gallery not mirrored; suggestion banner instead of redirects"],
            ["An Abu Dhabi clinic group on WordPress", "WPML directories; RTL stylesheet", "Arabic appointment forms with +971 default; Arabic validation messages; Hijri dates only where needed; accessibility checked with Arabic screen readers"],
            ["A B2B software company selling to semi-government buyers", "Headless CMS with field-level localisation for product pages", "Arabic product and security pages; English documentation with Arabic summaries; consistent product naming in both scripts"],
          ],
        },
      },
      {
        heading: "Common technical mistakes",
        body: [
          "**Translated text breaking layouts.** Fixed-width buttons, tabs and cards overflow or truncate in Arabic.",
          "**Base direction set in CSS.** The page reverts to left to right when styles fail, and direction-aware components misbehave.",
          "**Physical CSS properties.** margin-left and left-aligned text create dozens of RTL overrides that drift out of sync.",
          "**Mixed-language metadata.** Arabic body with English title, description or Open Graph text.",
          "**Incorrect hreflang.** Missing return links, invalid codes such as AE alone, or hreflang pointing to redirected URLs.",
          "**Duplicate pages.** Arabic URLs that fall back to English content, or two live slugs for one page.",
          "**RTL bugs.** Mirrored logos and play buttons, unmirrored arrows, scrambled phone numbers and prices.",
          "**Untranslated structured data.** English JSON-LD on Arabic pages.",
          "**Hard-coded English UI strings.** Error messages, empty states, emails and PDFs left in English.",
          "**Poor Arabic search.** No normalisation, so common spelling variants return nothing.",
          "**Auto-redirects by browser language.** Users and crawlers cannot reach the version they want.",
          "**Placeholder Arabic in QA.** Lorem-ipsum-style or machine text hides real length and bidi problems.",
        ],
      },
      {
        heading: "QA checklist for Arabic websites",
        body: [
          "Run this checklist on every template, in both languages, on desktop and real mobile devices. It complements the SEO checklist in our [[/blogs/arabic-seo-uae|Arabic SEO guide]] and the accessibility checks in [[/blogs/accessible-ui-ux-design|accessible UI/UX design]].",
        ],
        table: {
          headers: ["Check", "How to test", "Pass criteria"],
          rows: [
            ["Document language and direction", "View source on Arabic pages", "html has lang=\"ar\" (or ar-AE) and dir=\"rtl\"; English pages lang=\"en\" and dir=\"ltr\""],
            ["Layout mirroring", "Compare each template side by side in both languages", "Navigation, sidebars and alignment mirror; charts, maps and media do not"],
            ["Icons", "Review every icon against the mirroring table", "Directional icons mirrored; logos, play buttons, clocks and checkmarks unchanged"],
            ["Text overflow", "Load real Arabic content at every breakpoint", "No truncation, overlap or clipped diacritics"],
            ["Bidi strings", "Insert phone numbers, prices, emails and English names into Arabic sentences", "All display in the correct order and remain readable"],
            ["Typography", "Inspect fonts and line spacing on mobile", "Arabic font loads, no fallback flashes, comfortable line height"],
            ["Forms", "Submit invalid and valid data in Arabic", "All labels, help text and errors in Arabic; +971 default; Arabic-Indic digits accepted"],
            ["Numbers and dates", "Check prices, dates and counts on key pages", "Digits and calendar match the agreed presentation everywhere"],
            ["Checkout and emails", "Place a test order in Arabic", "Arabic address fields, AED formatting, Arabic confirmation, invoice and delivery messages"],
            ["Site search", "Search with spelling variants and with and without diacritics", "Equivalent results; zero-result rate acceptable"],
            ["Language switcher", "Switch on deep pages", "Lands on the equivalent page; no forced redirects"],
            ["Metadata", "Inspect head on Arabic pages", "Arabic title, description, Open Graph and og:locale"],
            ["hreflang and canonical", "Inspect head or sitemap; validate return links", "Reciprocal ar-AE, en-AE, x-default; self-referencing canonicals"],
            ["Structured data", "Rich Results Test or schema validator on Arabic URLs", "Arabic values matching visible text; Arabic URLs"],
            ["Accessibility", "Screen reader set to Arabic; keyboard navigation", "Correct pronunciation, logical focus order in RTL"],
            ["Performance", "Lab and field tests on Arabic pages", "Core Web Vitals within Google's 'good' thresholds"],
            ["Analytics", "Real-time view while browsing Arabic pages", "Page language recorded; conversions attributed per language"],
            ["Content review", "Fluent reviewer reads each page in context", "Sign-off recorded; no machine-translation errors"],
          ],
        },
      },
      {
        heading: "Choosing who builds it",
        body: [
          "Bilingual builds go wrong when Arabic is treated as a late translation task. When comparing partners, ask to see right-to-left work in production, how they structure content for two languages, who reviews Arabic copy, and how they test bidirectional text. Our guides to [[/blogs/web-development-company-dubai|choosing a web development company in Dubai]] and [[/blogs/web-development-abu-dhabi|web development in Abu Dhabi]] include scorecards you can use, and [[/blogs/geo-uae|GEO for UAE businesses]] covers how AI search reads each language version.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Google: [[https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites|Managing multi-regional and multilingual sites]]; [[https://developers.google.com/search/docs/specialty/international/localized-versions|hreflang documentation]]; [[https://developers.google.com/search/docs/essentials/spam-policies|Spam policies]]; [[https://developers.google.com/search/docs/appearance/structured-data/sd-policies|Structured data guidelines]]; [[https://developers.google.com/search/docs/appearance/core-web-vitals|Core Web Vitals]].",
          "Standards and references: [[https://www.w3.org/International/questions/qa-html-dir|W3C, structural markup and right-to-left text]]; [[https://www.w3.org/International/questions/qa-html-language-declarations|W3C, language declarations]]; [[https://www.w3.org/International/articles/inline-bidi-markup/uba-basics|W3C, Unicode bidi basics]]; [[https://www.w3.org/International/questions/qa-i18n|W3C, localisation vs internationalisation]]; [[https://www.w3.org/TR/alreq/|W3C Arabic and Persian layout requirements]]; [[https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values|MDN, CSS logical properties]]; [[https://developer.mozilla.org/en-US/docs/Web/CSS/:dir|MDN, :dir()]]; [[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat|MDN, Intl.NumberFormat]]; [[https://m1.material.io/usability/bidirectionality.html|Material Design bidirectionality]]; [[https://firefox-source-docs.mozilla.org/code-quality/coding-style/rtl_guidelines.html|Mozilla RTL guidelines]]; [[https://designsystem.dubai.ae/foundations/typography.md|Dubai Design System typography]]; [[https://lucene.apache.org/core/9_0_0/analysis/common/org/apache/lucene/analysis/ar/ArabicNormalizer.html|Apache Lucene ArabicNormalizer]]; [[https://www.elastic.co/docs/reference/text-analysis/analysis-lang-analyzer|Elasticsearch language analysers]].",
          "Platforms: [[https://help.shopify.com/en/manual/international/languages|Shopify languages]]; [[https://help.shopify.com/en/manual/markets/seo|Shopify Markets SEO]]; [[https://changelog.shopify.com/posts/support-for-auto-translating-arabic-and-hebrew-in-translate-adapt|Shopify Arabic auto-translation]]; [[https://wpml.org/documentation/getting-started-guide/language-setup/language-url-options/|WPML URL options]]; [[https://www.sanity.io/docs/localization|Sanity localisation]]; [[https://docs.strapi.io/cms/features/internationalization|Strapi internationalisation]]; [[https://www.contentful.com/developers/docs/concepts/locales|Contentful locales]]; [[https://nextjs.org/docs/app/guides/internationalization|Next.js internationalisation]].",
          "UAE: [[https://www.constituteproject.org/constitution/United_Arab_Emirates_2009|UAE Constitution, Constitute Project]]; [[https://u.ae/en/information-and-services/justice-safety-and-the-law/consumer-protection|u.ae consumer protection]]; [[https://docs.uaepass.ae/|UAE PASS documentation]]. Number and date outputs were tested in Node.js 22.20 (ICU 77.1, CLDR 47) and may differ in other runtimes. This guide is not legal advice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A good bilingual website in the UAE is built bilingual: separate URLs per language, a content model that holds both, direction set in HTML and layout written in logical CSS, Arabic typography, forms, numbers and search that work as Arabic speakers expect, and QA that treats Arabic as a first-class release. Get those foundations right and adding or updating Arabic content becomes routine editorial work rather than a rebuild.",
        ],
        cta: {
          title: "Building or fixing an Arabic and English website?",
          description: "ZSpace Labs is an India-based, remote-first technology studio that works with UAE and global businesses on [[/services/website-development|website development]], [[/services/ui-ux-design|right-to-left UI/UX design]] and [[/services/shopify-development|Shopify stores]]. If your Arabic version needs a review or a rebuild, we can audit it against the checklist above and suggest a practical plan.",
        },
      },
    ],
  },
];
