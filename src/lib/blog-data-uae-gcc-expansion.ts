import type { BlogPost } from "./blog-data";

/**
 * UAE-to-Saudi ecommerce expansion strategy and Saudi website localisation.
 * Sources checked 2026-10-08. Official: SAMA (e-payments 2024 and 2025;
 * Tamara and Tabby BNPL licences); ZATCA (Fatoora roll-out phases); UAE FTA
 * (VAT); u.ae (UAE consumer protection); Google Search Central (multi-regional
 * sites, hreflang, spam policies, AI features); W3C (RTL, alreq); Microsoft
 * Source (Azure Saudi region); AWS regions page; Apple Pay availability.
 * Industry: DataReportal Digital 2026 (Saudi Arabia, UAE); Deloitte Digital
 * Consumer Trends (KSA 2026; UAE and KSA 2025); Checkout.com (BNPL 2025; MENA
 * digital commerce 2025 via Consultancy-ME); EZDubai and Euromonitor; Google
 * blog (AI Overviews and AI Mode in Arabic). Secondary summaries (marked as
 * reported in text): Saudi E-Commerce Law, Law of Commercial Data, PDPL,
 * National Address carrier rule, MoC ecommerce registrations, discount
 * licences, weekend, national days. Locale formatting tested in Node 22.20 /
 * ICU 77.1 / CLDR 47. No figure here is ZSpace client data.
 */

export const uaeGccExpansionPosts: BlogPost[] = [
  // ---------------------------------------- UAE TO SAUDI ECOMMERCE EXPANSION
  // Strategic pillar for UAE merchants entering Saudi Arabia. Differentiated
  // from the generic owner international-ecommerce-website-development by a
  // UAE vs KSA comparison, Saudi-specific facts and a phased framework. The
  // website-level detail lives in saudi-website-localization.
  {
    slug: "uae-to-saudi-ecommerce-expansion",
    title: "How to Build a UAE-to-Saudi Ecommerce Expansion Strategy",
    seoTitle: "UAE-to-Saudi Ecommerce Expansion Strategy",
    excerpt:
      "Plan a UAE-to-Saudi ecommerce expansion: verified market facts, a UAE vs KSA comparison, a five-phase framework, URL choices and the mistakes to avoid.",
    category: "Shopify & Ecommerce",
    banner: "roadmap",
    sceneKind: "roadmap",
    bannerAlt: "A five-phase roadmap from market research through localisation, technology and launch to optimisation, linking a UAE store to a Saudi store",
    date: "2026-10-08",
    readingTime: "19 min read",
    relatedServiceSlugs: ["shopify-development", "website-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "retail", "d2c-consumer", "fashion-apparel", "beauty-personal-care"],
    relatedSlugs: ["saudi-website-localization", "international-ecommerce-website-development", "shopify-markets"],
    faqs: [
      { q: "Is Saudi Arabia a good next market for a UAE ecommerce brand?", a: "Often, but decide from evidence. Saudi Arabia has a population of about 34.7 million and 99% internet penetration (DataReportal 2026), and SAMA reports that electronic payments reached 85% of retail payments in 2025. Before committing, check whether Saudi customers already find you, whether your products, margins and delivery model work in the Kingdom, and whether you can support customers in Arabic." },
      { q: "Can I sell to Saudi customers from my UAE store?", a: "Technically yes, but a UAE store that ships to Saudi Arabia is not a Saudi experience. Saudi shoppers expect prices in riyals, Saudi payment methods such as mada, Saudi delivery promises and Arabic content. Summaries of the Saudi E-Commerce Law also indicate it can apply to foreign sellers offering goods to customers in the Kingdom, so confirm your obligations with the Ministry of Commerce or a Saudi adviser." },
      { q: "Should I use a .sa domain or a subfolder for Saudi Arabia?", a: "Most UAE brands start with subfolders on their existing domain, such as /sa-ar/ and /sa-en/. Google lists subdirectories as easy to set up and low maintenance, while a ccTLD gives clear geotargeting but is more expensive and can only target one country. Choose a .sa domain when you run a genuinely separate Saudi business with its own team, catalogue and marketing." },
      { q: "Which payment methods should a Saudi store offer?", a: "Plan for mada, the domestic debit network operated by Saudi Payments, alongside Visa and Mastercard, Apple Pay and a BNPL option. Tamara and Tabby both hold SAMA licences for buy-now-pay-later. Checkout.com found 42% of Saudi online shoppers used BNPL in the previous 12 months. Treat cash on delivery as a category-by-category decision, since COD use has fallen sharply since 2020." },
      { q: "What is the Saudi National Address and why does it matter for ecommerce?", a: "The National Address is the Saudi addressing system run by Saudi Post (SPL), including an eight-character short address. According to press reports from December 2025, the Transport General Authority required parcel carriers not to accept shipments without a National Address from 1 January 2026. Saudi checkouts therefore need a field for it. Confirm the current rule with your carriers." },
      { q: "Do I need a separate Shopify store for Saudi Arabia?", a: "Not usually at the start. Shopify Markets lets one store serve several countries with separate currencies, languages, domains or subfolders, and it adds hreflang automatically for assigned subfolders. A separate store makes sense when the Saudi business needs its own legal entity, payment setup, catalogue, pricing logic, apps or team, or when operations diverge enough that sharing one admin causes errors." },
      { q: "How long does a UAE-to-Saudi expansion take?", a: "There is no reliable benchmark, because scope varies widely. Plan it in phases: research, localisation, technology, launch and optimisation, each with exit criteria. A brand that already has clean product data, an Arabic-capable platform and a logistics partner covering the Kingdom moves faster than one that must build all three. Do not set a launch date before Phase 1 is complete." },
      { q: "Do I need to register a company in Saudi Arabia to sell there?", a: "That is a legal and tax question we cannot answer for you. Requirements depend on how you sell, where stock is held, who the merchant of record is and your VAT position with ZATCA. Speak to the Ministry of Commerce, ZATCA and a Saudi-qualified legal and tax adviser before launch, and design your store so entity details, tax numbers and invoices can change by market." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**A UAE-to-Saudi ecommerce expansion strategy** is a phased plan for selling to customers in Saudi Arabia from an established UAE business. It covers demand research, Saudi Arabic content, riyal pricing, Saudi payment methods such as mada, National Address delivery, compliance checks and a site structure that keeps UAE and Saudi experiences separate but manageable.",
          "The most common mistake is treating Saudi Arabia as a larger version of the UAE. The two markets share a language family, a GCC calendar and many of the same marketplaces, but they differ in currency, VAT, payment rails, addressing, weekend days, national occasions, customer mix and rules. A good strategy decides early what stays shared (brand, platform, catalogue structure, most operations) and what must be local.",
          "This guide covers strategy: market facts, a UAE vs Saudi comparison, a five-phase framework, URL and store structure, and risks. For page-level changes, such as Arabic terminology, digits, forms and hreflang, read the companion guide on [[/blogs/saudi-website-localization|Saudi website localisation]]. Facts are attributed to their sources. Everything else is our recommendation.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Saudi Arabia has about 34.7 million people and 99% internet penetration (DataReportal, Digital 2026), roughly three times the UAE's population of 11.4 million.",
          "Electronic payments reached 85% of Saudi retail payments in 2025, up from 79% in 2024 (SAMA).",
          "There is no reliable official Saudi ecommerce market-size figure. Estimates conflict widely, so plan from your own demand data, not headline numbers.",
          "Saudi checkouts need mada, Apple Pay and usually BNPL. Tamara and Tabby both hold SAMA BNPL licences.",
          "Press reports say carriers have been required not to accept parcels without a National Address since 1 January 2026, so add a National Address field.",
          "Most UAE brands should start with country subfolders (for example /sa-ar/ and /ae-en/) on one domain, then move to a separate store or .sa domain only when operations diverge.",
          "Run the expansion in five phases, research, localisation, technology, launch and optimisation, with exit criteria for each.",
        ],
      },
      {
        heading: "What the Saudi market data actually says",
        body: [
          "**Saudi facts.** DataReportal's Digital 2026 report puts Saudi Arabia's population at 34.7 million, with 34.4 million internet users (99.0%), 38.6 million social media user identities and 48.7 million cellular connections ([[https://datareportal.com/reports/digital-2026-saudi-arabia|DataReportal]]). It also reports a median mobile download speed of 194.49 Mbps at the end of 2025, citing Ookla.",
          "**Payments are now mostly electronic.** The Saudi Central Bank (SAMA) reports that electronic payments made up 85% of total retail payments in 2025, up from 79% in 2024, with 14.6 billion electronic transactions ([[https://sama.gov.sa/en-US/MediaCenter/News/Pages/news-1139.aspx|SAMA]]). In 2024 the figure was 79%, up from 70% in 2023 ([[https://sama.gov.sa/en-US/MediaCenter/News/Pages/news-1083.aspx|SAMA]]). SAMA attributes growth to mada point-of-sale and ecommerce volumes.",
          "**Online shopping has become routine.** In Checkout.com's State of Digital Commerce in MENA 2025 research, as reported by Consultancy-ME, daily online shopping rose from 6% to 24% of Saudi consumers between 2020 and 2025 (UAE: 5% to 21%). Cash-on-delivery use fell 64% in Saudi Arabia and 53% in the UAE over the same period ([[https://www.checkout.com/guides-and-reports/digital-commerce-mena-2025|Checkout.com]]). In a separate 2025 Checkout.com release, 42% of Saudi online shoppers had used BNPL in the past 12 months, against 39% in the UAE.",
          "**AI use is mainstream.** Deloitte's Digital Consumer Trends 2026 for the Kingdom, based on 1,000 consumers aged 18 to 50, found that 66% of Saudi consumers actively use AI tools, up from 49%. 45% use AI for work. The top uses were searching for information (51%), generating ideas (44%) and translation (42%) ([[https://www.deloitte.com/middle-east/en/about/press-room/ai-becomes-default-for-saudi-consumers-as-deloittes-2026-digital-consumer-trends-report-reveals-decisive-shift-in-how-the-kingdom-lives.html|Deloitte]]). This affects how Saudi shoppers research products before they reach your site.",
          "**Ecommerce businesses are growing in number.** Ministry of Commerce quarterly bulletins, as reported by Okaz and Sharikat Mubasher, put ecommerce commercial registrations at 43,854 at the end of Q4 2025, up 9% year on year. We could not fetch the bulletin itself, so treat this as reported data.",
          "**For comparison, the UAE.** UAE ecommerce reached AED 42.2 billion in 2025, about 15.7% of retail sales, according to EZDubai and Euromonitor International ([[https://www.gulftoday.ae/business/2026/09/28/uae-e-commerce-market-size-reaches-dhs422-billion-in-2025|Gulf Today]]).",
        ],
        callout: {
          type: "note",
          text: "We deliberately do not quote a Saudi ecommerce market size. Published figures range from official projections with unknown methods to consultancy estimates that disagree by a wide margin. Base your business case on your own search demand, traffic from Saudi Arabia, marketplace sales and unit economics.",
        },
      },
      {
        heading: "UAE vs Saudi Arabia: what changes for an ecommerce business",
        body: [
          "The table separates context (sourced where a figure appears) from our recommendation. Where a cell says 'no reliable data', we found no credible source and you should test rather than assume.",
        ],
        table: {
          headers: ["Area", "UAE", "Saudi Arabia", "Our recommendation"],
          rows: [
            ["Customer behaviour", "Daily online shopping 21% in 2025, up from 5% in 2020 (Checkout.com via Consultancy-ME)", "Daily online shopping 24%, up from 6% (same source)", "Research Saudi demand separately; do not assume UAE bestsellers transfer"],
            ["Customer mix and Arabic", "Roughly 88–89% expatriates (latest official breakdown, 2011); English carries much of the market", "Saudis about 55.6% of the population in GASTAT's 2024 estimate, as reported by Argaam", "Arabic-first for Saudi Arabia; English as a secondary version"],
            ["Localisation", "Gulf Arabic and English content, AED", "Saudi Arabic terminology, SAR, Saudi occasions", "Native Saudi review of all customer-facing copy"],
            ["SEO", "Google dominant (StatCounter: 93.47% in Sept 2026)", "Separate Arabic keyword research needed", "Country-language URLs with hreflang ar-SA and ar-AE"],
            ["Payments", "Cards, Apple Pay, BNPL (39% used it, Checkout.com); cash still about 23% of transactions (Visa)", "85% of retail payments electronic in 2025 (SAMA); mada; BNPL 42%", "mada, cards, Apple Pay and BNPL at launch; SADAD where it fits"],
            ["Cash on delivery", "COD use down 53% since 2020 (Checkout.com)", "COD use down 64% since 2020 (same source); no reliable current share", "Offer by category and margin; measure failed deliveries"],
            ["Shipping", "Emirate-level addresses and landmarks common", "National Address reportedly required by carriers since 1 Jan 2026", "Add a National Address field; pick a carrier with Kingdom-wide coverage"],
            ["Returns", "Set by your policy within UAE consumer protection law", "Summaries of the E-Commerce Law describe a 7-day withdrawal right for unused goods, with exclusions", "Confirm with MoC; publish a Saudi-specific returns page"],
            ["Customer support", "85% want WhatsApp for support (Zbooni/YouGov, 2024)", "No comparable Saudi survey found", "Arabic-speaking support covering the Saudi working week"],
            ["WhatsApp", "Expected channel for questions and order updates", "No reliable data; test", "One WhatsApp Business Platform number per market, logged in the CRM"],
            ["Social commerce", "73% of UAE and KSA consumers bought via social media in the past year (Deloitte 2025, combined sample)", "No KSA-only split published", "Plan Saudi social content and creators separately"],
            ["Marketplaces", "noon, Amazon.ae", "noon, Amazon.sa; local platforms Salla and Zid power many Saudi stores", "Use marketplaces to test demand; own store for margin and data"],
            ["Mobile UX", "202% mobile connections per population (DataReportal)", "140% cellular connections; median mobile download 194.49 Mbps", "Design and test mobile-first in Arabic"],
            ["Seasonality", "Ramadan and Eid; UAE national occasions", "Ramadan and Eid; National Day 23 Sept; Founding Day 22 Feb", "Separate campaign calendar per country"],
            ["White Friday", "Retailer-branded November event", "Same; no official MoC season found", "Treat as a retail convention, not an official sale period"],
            ["Content and rules", "UAE-registered ecommerce must give product information in Arabic (u.ae)", "Law of Commercial Data: commercial data at least in Arabic (per Saudipedia summary)", "Arabic product data for both; confirm scope with advisers"],
            ["Currency and VAT", "AED; VAT 5% (FTA)", "SAR; standard VAT 15% per ZATCA guidance", "Show SAR prices with VAT; never convert at checkout only"],
            ["E-invoicing", "B2B and B2G e-invoicing from 2027 (FTA)", "ZATCA Fatoora: Phase 1 from 4 Dec 2021, Phase 2 in waves from 1 Jan 2023", "Check your ZATCA wave and invoicing setup with a tax adviser"],
            ["Analytics", "AED revenue, UAE campaigns", "SAR revenue, Saudi campaigns", "Segment by country and language; report in both currencies"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Most of the differences are operational, not visual. Payments, delivery addressing, VAT and invoicing, returns rules, support hours and the campaign calendar change more than the design does.",
        },
      },
      {
        heading: "Payments: what a Saudi checkout needs",
        body: [
          "**Saudi facts.** mada is the domestic debit network, and SADAD is the national bill presentment and payment system. Both are run by Saudi Payments, a wholly owned SAMA subsidiary, according to Saudipedia and SAMA. SAMA licensed Tamara Finance for consumer finance and BNPL on 3 March 2025 ([[https://sama.gov.sa/en-US/MediaCenter/News/pages/news-1079.aspx|SAMA]]) and Tabby Finance for BNPL on 11 October 2025 ([[https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-1116.aspx|SAMA]]). SAMA advises the public to deal only with entities on its licensed list. Apple lists both Saudi Arabia and the UAE as Apple Pay markets ([[https://support.apple.com/en-us/102775|Apple]]). We found no official figure for Apple Pay's share in Saudi Arabia.",
          "**Our recommendation.** Treat mada support as a launch requirement, not an add-on. Confirm with your payment provider that mada cards are processed as mada (not only as co-badged international cards), that Apple Pay works with mada, and that settlement in SAR is available. Add one BNPL provider whose basket limits suit your average order value. Use SADAD only where it fits the purchase type, such as high-value or invoiced orders.",
          "**Cash on delivery** is falling but has not disappeared. Checkout.com reports a 64% decline in COD use in Saudi Arabia since 2020, but there is no reliable current share. Decide by category, basket value and margin, and track failed-delivery cost per order. Some brands keep COD for first orders and nudge repeat customers to pay online.",
          "For the generic mechanics of acquiring, settlement and multi-market payment setup, see [[/blogs/international-ecommerce-payments|international ecommerce payments]]. For UAE-specific checkout patterns that carry over, see [[/blogs/uae-ecommerce-checkout-optimization|UAE ecommerce checkout optimisation]] and [[/blogs/global-ecommerce-checkout|global checkout design]].",
        ],
        checklist: [
          "mada processed as mada, with SAR settlement",
          "Apple Pay tested with mada and international cards",
          "One BNPL provider on SAMA's licensed list",
          "COD rules defined by category, value and region",
          "Payment logos and terms in Arabic on the Saudi checkout",
          "Refund flows tested for every method",
        ],
      },
      {
        heading: "Delivery, the National Address and returns",
        body: [
          "**Saudi facts (reported).** According to December 2025 coverage in Okaz and Arabian Business, the Transport General Authority required parcel carriers not to accept shipments without a National Address from 1 January 2026. The National Address is issued through Saudi Post (SPL) and includes an eight-character short address of four letters and four digits. Customers can find theirs through the National Address platform or government apps such as Absher. Confirm the current requirement with your carriers.",
          "**Returns and delays (reported).** Law-firm and government summaries of the Saudi E-Commerce Law and Ministry of Commerce guidance describe a 7-day return or withdrawal right for unused products, with exclusions such as custom-made items and downloaded software. They also describe a consumer right to cancel and get a full refund when delivery is delayed by more than 15 days. Sources differ on when the 7-day period starts. Confirm the details with the Ministry of Commerce or a Saudi adviser before you write your returns policy.",
          "**Our recommendation.** Choose a logistics partner that covers the cities where your demand is, not only Riyadh and Jeddah, and ask how it handles National Address validation, COD remittance and returns. Decide whether to ship cross-border from the UAE or hold stock in the Kingdom, and model customs, duties and delivery times for both. Show realistic delivery dates by city on the product page. Generic guidance on carriers, landed cost and cross-border returns is in [[/blogs/international-ecommerce-shipping|international ecommerce shipping]] and [[/blogs/ecommerce-returns-management|returns management]].",
        ],
      },
      {
        heading: "Seasonality and the Saudi trading calendar",
        body: [
          "**Saudi facts (reported).** Saudi National Day falls on 23 September and Founding Day on 22 February. Founding Day was created by royal order in 2022. The Ministry of Commerce licenses discount seasons: press coverage reports that it issued 4,218 discount licences for the 2025 National Day and set the 2025 Ramadan and Eid sales season at 9 February to 3 April. Shoppers can check discount licences through sales.mc.gov.sa, according to the same reports. Confirm licensing rules with the Ministry of Commerce before you run discounts.",
          "**Ramadan and Eid.** The Umm al-Qura calendar projects 1 Ramadan 1448 for about 8 February 2027, with Eid al-Fitr around 9 March 2027. These are projections; official dates depend on moon sighting.",
          "**White Friday** is a commonly used retail term for November promotions in the region. We found no official Ministry of Commerce season under that name and no reliable data on its size, so treat it as a retail convention.",
          "**Weekends differ.** Saudi Arabia's official weekend for government and financial institutions has been Friday and Saturday since 2013, while the UAE federal government moved to Saturday and Sunday in 2022 (both as reported in the press). The two markets therefore share only Saturday as a common non-working day. Plan support rotas, ad schedules and launch days for both calendars.",
        ],
        table: {
          headers: ["Moment", "Date", "Status", "Planning note"],
          rows: [
            ["Founding Day", "22 February", "Official occasion (reported)", "Heritage-led creative; check discount licensing"],
            ["Ramadan 1448", "About 8 Feb 2027 (projected)", "Depends on moon sighting", "Plan evening traffic peaks and delivery cut-offs"],
            ["Eid al-Fitr", "About 9 Mar 2027 (projected)", "Depends on moon sighting", "Gifting, delivery promises, support cover"],
            ["Saudi National Day", "23 September", "Official occasion", "MoC discount licences reported for this season"],
            ["White Friday", "November", "Retail convention, not official", "Test, do not assume volume"],
          ],
        },
      },
      {
        heading: "Compliance questions to settle before launch",
        body: [
          "This section lists questions, not legal advice. The official Ministry of Commerce texts could not be fetched during our research, so the points below come from law-firm and government summaries. Confirm each with the Ministry of Commerce, ZATCA, SDAIA or a Saudi-qualified adviser.",
          "**E-Commerce Law disclosures.** According to Al Tamimi's summary, an online store must show the provider's name, address and contact details, plus its commercial registration and tax registration numbers where applicable, and give a pre-contract statement of terms and total price. Summaries also say the law can apply to foreign sellers offering goods to customers in the Kingdom.",
          "**Arabic commercial data.** Saudipedia's summary of the Law of Commercial Data says commercial data, including product details, invoices and advertising, must appear at least in Arabic. That makes an Arabic-first storefront both a conversion and a compliance consideration.",
          "**VAT and e-invoicing.** ZATCA guidance sets the standard VAT rate at 15%. ZATCA's Fatoora e-invoicing has two phases: Phase 1 (generation) was enforceable from 4 December 2021, and Phase 2 (integration) has rolled out in waves from 1 January 2023, with each group notified at least six months ahead ([[https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx|ZATCA]]). Whether and how this applies to you depends on your registration, which only a tax adviser can confirm.",
          "**Personal data.** The Saudi Personal Data Protection Law, overseen by SDAIA, came into force on 14 September 2023 with a one-year grace period, and summaries describe it as covering processing of data about people in the Kingdom by entities outside it. Cross-border transfer rules apply. The [[/blogs/saudi-website-localization|Saudi localisation guide]] covers consent and marketing in more detail.",
        ],
        checklist: [
          "Who is the merchant of record for Saudi orders?",
          "Which entity details, registration and tax numbers appear on the Saudi store?",
          "Do invoices meet ZATCA requirements for your registration?",
          "Are product data, invoices and ads available in Arabic?",
          "Does the returns policy match Saudi rules as your adviser reads them?",
          "Are discount campaigns licensed where required?",
          "Where is customer data stored, and on what transfer basis?",
        ],
      },
      {
        heading: "A five-phase expansion framework",
        body: [
          "This is our recommended framework. Each phase ends with exit criteria, so the decision to spend on the next phase is based on evidence. Phases can overlap slightly, but do not launch before Phase 3's exit criteria are met.",
        ],
        table: {
          headers: ["Phase", "Goals", "Key activities", "Outputs", "Exit criteria"],
          rows: [
            ["1. Research", "Prove Saudi demand and viable unit economics", "Saudi keyword and marketplace research; existing Saudi traffic and orders; competitor review; logistics and payment quotes; adviser consultation", "Market brief, product shortlist, landed-cost model, compliance question list", "Positive contribution margin per order on realistic assumptions; adviser view on entity and tax"],
            ["2. Localisation", "Make the offer Saudi, not only Arabic", "Saudi Arabic glossary; native review; SAR pricing; Saudi returns, delivery and legal pages; imagery and occasions", "Approved glossary, localised catalogue and policies, Saudi content plan", "Native Saudi reviewer sign-off on all customer-facing templates"],
            ["3. Technology", "Build a Saudi experience that is maintainable", "URL structure; Shopify Markets or separate store; mada, Apple Pay, BNPL; National Address field; hreflang; analytics by market", "Working Saudi storefront on staging, payment and carrier integrations", "End-to-end test orders paid, delivered, returned and refunded in SAR"],
            ["4. Launch", "Go live with controlled risk", "Soft launch to a limited audience; Arabic support rota; marketplace or social launch; monitoring", "Live store, support playbook, launch dashboard", "Payment success, delivery and complaint rates stable for several weeks"],
            ["5. Optimisation", "Grow profitable Saudi revenue", "Checkout and PDP testing; SEO content; COD rules; local creators; repeat-purchase flows", "Test log, quarterly market review", "Ongoing; review every quarter whether to deepen (local stock, entity, team)"],
          ],
        },
        callout: {
          type: "tip",
          text: "Write the Phase 1 exit criteria before you start research. If you define 'enough demand' after seeing the data, almost any result will look like a reason to proceed.",
        },
      },
      {
        heading: "Phase by phase: what good looks like",
        body: [
          "**Phase 1, research.** Start with what you already have: sessions and orders from Saudi Arabia in your analytics, Saudi customers who order to UAE addresses or forwarders, and marketplace sales. Then do Saudi Arabic keyword research separately from UAE research, because terminology and demand differ. Get quotes from at least two carriers and payment providers, and book a consultation with a Saudi adviser on entity, VAT and E-Commerce Law questions. Build a landed-cost model per product including delivery, payment fees, returns and COD failure.",
          "**Phase 2, localisation.** Localisation is wider than translation: it covers language, money, delivery, legal pages, imagery and occasions. Build a Saudi glossary and have native Saudi reviewers approve templates, navigation, product data and policies. The page-level detail is in [[/blogs/saudi-website-localization|Saudi website localisation]]; the generic framework is in [[/blogs/ecommerce-localization|ecommerce localisation]].",
          "**Phase 3, technology.** Choose the URL and store structure (below), connect Saudi payment methods, add the National Address field, set hreflang, and configure analytics so Saudi data is never mixed with UAE data. Plan right-to-left layout properly rather than mirroring a finished English design; see [[/blogs/multilingual-website-development-uae|multilingual website development in the UAE]].",
          "**Phase 4, launch.** A soft launch to existing Saudi customers, a newsletter segment or one marketplace limits risk. Staff Arabic support for the Saudi working week. If you plan to automate support, read [[/blogs/ai-customer-support-uae|AI customer support for UAE businesses]] first: the same rule applies in Saudi Arabia, automate triage and answers to routine questions, keep humans for complaints.",
          "**Phase 5, optimisation.** Test checkout, product pages and delivery messaging in Arabic. Build Saudi content for search and AI answers, and review every quarter whether to deepen investment, for example with in-Kingdom stock or a Saudi team. Generic depth: [[/blogs/international-ecommerce-seo|international ecommerce SEO]] and [[/blogs/geo-uae|generative engine optimisation for UAE businesses]].",
        ],
      },
      {
        heading: "Which structure: one regional site, country experiences or separate domains?",
        body: [
          "**Google's position.** Google recommends different URLs for each language version rather than switching language with cookies or browser settings, and advises against automatically redirecting users between language versions ([[https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites|Google Search Central]]). It lists the pros and cons of each URL structure, quoted in the table below.",
          "**The four realistic options for a UAE brand.** A **single regional site** has one Arabic and one English version for the whole GCC, with no country targeting. **Country experiences in subfolders** use paths such as /ae-en/, /ae-ar/, /sa-ar/ and /sa-en/ on one domain. **Subdomains** use sa.example.com. **Separate domains** use a .sa ccTLD for Saudi Arabia. Check the .sa registry's eligibility rules before choosing a ccTLD.",
        ],
        table: {
          headers: ["Option", "Google's listed pros", "Google's listed cons", "Use when"],
          rows: [
            ["Single regional site (/ar/, /en/)", "Simple; one set of pages", "Cannot show SAR and AED prices, payment methods or policies cleanly per country", "You sell few products, prices are quoted, or Saudi demand is still unproven"],
            ["Subdirectories (/sa-ar/, /ae-en/)", "'Easy to set up'; 'Low maintenance (same host)'", "'Single server location'; 'Separation of sites harder'", "Default choice for most UAE brands entering Saudi Arabia"],
            ["Subdomains (sa.example.com)", "'Easy to set up'; 'Allows different server locations'", "'Users might not recognize geotargeting from the URL alone'", "The Saudi site runs on different infrastructure or a different platform"],
            ["ccTLD (example.sa)", "'Clear geotargeting'; 'Server location irrelevant'", "'Expensive (can have limited availability)'; 'Can only target a single country'", "A distinct Saudi business with its own team, catalogue and brand investment"],
            ["URL parameters (?loc=sa)", "None listed", "'Not recommended'", "Avoid"],
          ],
        },
        code: {
          label: "Decision tree: structure for a Saudi launch",
          text: "Is Saudi demand proven (Phase 1 passed)?\n  no  -> test via marketplace or social; keep one site\n  yes -> Do prices, payments or policies differ by country?\n           no  -> single regional site (/ar/, /en/)\n           yes -> Separate entity, team or platform in KSA?\n                    no  -> subfolders (/sa-ar/, /ae-en/)\n                    yes -> separate store; .sa if brand\n                           investment justifies it",
        },
      },
      {
        heading: "Shopify Markets vs a separate Shopify store",
        body: [
          "**Shopify facts.** Shopify Markets lets one store serve several markets through subfolders, subdomains or country domains. According to Shopify's help centre, once a subfolder is assigned to a market with a language, hreflang tags are added automatically and x-default is supported. Shopify's Translate & Adapt app added auto-translation for Arabic in March 2024 ([[https://changelog.shopify.com/posts/support-for-auto-translating-arabic-and-hebrew-in-translate-adapt|Shopify changelog]]). Machine translation should be reviewed by a native Saudi speaker before publishing.",
          "**Our recommendation.** Start with Shopify Markets when the Saudi experience differs mainly in currency, language, price lists, payment methods and some catalogue availability. Move to a separate store, often managed in Shopify Plus as an expansion store, when the Saudi business needs its own legal entity and payment setup, its own apps, very different catalogues, or a separate team. Confirm which payment providers and mada options are available for your Saudi setup before you commit to either. More detail: [[/blogs/shopify-markets|Shopify Markets]], [[/blogs/multi-currency-ecommerce|multi-currency ecommerce]] and [[/blogs/shopify-store-development|Shopify store development]].",
        ],
        table: {
          headers: ["Factor", "Shopify Markets (one store)", "Separate Saudi store"],
          rows: [
            ["Setup effort", "Lower", "Higher"],
            ["Catalogue and stock", "Shared, with market availability rules", "Fully independent"],
            ["Payments and entity", "Depends on what one store can support", "Own provider setup per entity"],
            ["Apps and themes", "Shared", "Can differ"],
            ["Content operations", "One admin, per-market translations", "Two admins, risk of drift"],
            ["Best for", "Most first launches", "Mature or structurally different Saudi operations"],
          ],
        },
      },
      {
        heading: "Marketplaces, social commerce and local platforms",
        body: [
          "**Marketplaces.** noon and Amazon both operate in Saudi Arabia (Amazon as amazon.sa) as well as the UAE. For a UAE brand they are a low-cost way to test which products sell in the Kingdom before building a full Saudi storefront. Their trade-off is margin and customer data.",
          "**Social commerce.** Deloitte's 2025 Digital Consumer Trends, covering 2,000 consumers across the UAE and Saudi Arabia, found that 73% had bought through social media in the past year ([[https://www.deloitte.com/middle-east/en/about/press-room/deloitte-digital-consumer-trends-2025-report-reveals-ai-adoption-surge-social-commerce-boom-and-changing-digital-behaviors-in-the-uaeand-ksa|Deloitte]]). There is no Saudi-only split. Saudi social content, creators and customer service in comments and messages usually need their own plan; see [[/blogs/social-commerce-development|social commerce development]].",
          "**Local platforms.** Salla and Zid are Saudi commerce platforms used by many Saudi merchants. They are worth knowing about as competitors' infrastructure and for understanding local checkout conventions. Most UAE brands with an existing Shopify or custom store will extend that platform rather than switch.",
        ],
      },
      {
        heading: "Expansion readiness scorecard",
        body: [
          "Score each area from 0 (not started) to 2 (ready). We suggest not launching with a total below 14 out of 20, or with any zero in payments, delivery or compliance. The scorecard is our framework, not an industry standard.",
        ],
        table: {
          headers: ["Area", "0", "1", "2"],
          rows: [
            ["Demand evidence", "None", "Search or marketplace signals", "Saudi orders or tested campaigns"],
            ["Unit economics", "Unknown", "Estimated", "Modelled with real quotes"],
            ["Arabic content", "None", "Machine or UAE-reviewed", "Saudi-reviewed glossary and templates"],
            ["Pricing", "Converted AED", "SAR list prices", "SAR prices with VAT, rounding and promotions"],
            ["Payments", "Cards only", "Cards and Apple Pay", "mada, Apple Pay, BNPL tested"],
            ["Delivery", "Ad hoc", "Carrier chosen", "National Address, city delivery dates, returns tested"],
            ["Compliance", "Not reviewed", "Questions listed", "Adviser review completed"],
            ["Support", "English only", "Arabic, UAE hours", "Arabic, Saudi working week, logged channels"],
            ["Analytics", "Mixed data", "Country filter", "Country and language segments, SAR reporting"],
            ["Ownership", "Nobody", "Shared", "Named Saudi market owner"],
          ],
        },
      },
      {
        heading: "Risks and common mistakes",
        body: [
          "**Treating Saudi Arabia as 'the UAE, but bigger'.** Different currency, VAT, payment rails, addressing, weekend days and occasions. The design may carry over; the operations rarely do.",
          "**Copying UAE Arabic.** Gulf Arabic written for a UAE audience may not read naturally to Saudi customers. Use Saudi reviewers for anything customer-facing.",
          "**Machine-translated catalogues at scale.** Google lists automated translation that adds little value among examples of scaled content abuse ([[https://developers.google.com/search/docs/essentials/spam-policies|Google]]). Review translations before publishing.",
          "**Launching without mada.** A store that only accepts international cards forces many Saudi shoppers into a workaround or away.",
          "**Ignoring the National Address.** Missing address data causes failed or delayed deliveries.",
          "**Auto-redirecting by IP.** Google advises against automatic redirects between language versions. Show a country and language selector instead.",
          "**Mixing UAE and Saudi data.** Blended conversion rates hide problems in the newer market. Segment from day one; see [[/blogs/ecommerce-analytics|ecommerce analytics]].",
          "**Assuming the legal position.** Entity, VAT, invoicing, returns and data rules all need a Saudi adviser's view, not a blog's.",
          "**No owner.** Expansions stall when the Saudi store is everyone's side project. Name one owner with authority over pricing, content and operations.",
        ],
      },
      {
        heading: "Where this fits in a wider GCC plan",
        body: [
          "Saudi Arabia is usually the first GCC expansion for UAE brands because of its size, but the same framework applies to Qatar, Kuwait, Bahrain and Oman with different facts. Our [[/blogs/gcc-digital-transformation|GCC digital transformation guide]] covers the regional picture, and [[/blogs/digital-transformation-uae-smes|digital transformation for UAE SMEs]] covers the systems a business should have in order before expanding: CRM, connected order flows and reporting. The generic international guide is [[/blogs/international-ecommerce-website-development|international ecommerce website development]]; this article adds the UAE-to-Saudi specifics.",
          "For Arabic search specifically, including Saudi keyword research and hreflang between ar-AE and ar-SA, read [[/blogs/arabic-seo-uae|Arabic SEO for UAE businesses]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Official: [[https://sama.gov.sa/en-US/MediaCenter/News/Pages/news-1139.aspx|SAMA, e-payments 2025]]; [[https://sama.gov.sa/en-US/MediaCenter/News/Pages/news-1083.aspx|SAMA, e-payments 2024]]; [[https://sama.gov.sa/en-US/MediaCenter/News/pages/news-1079.aspx|SAMA, Tamara licence]]; [[https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-1116.aspx|SAMA, Tabby licence]]; [[https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx|ZATCA, e-invoicing roll-out phases]]; [[https://tax.gov.ae/en/taxes/vat.aspx|UAE FTA, VAT]]; [[https://u.ae/en/information-and-services/justice-safety-and-the-law/consumer-protection|u.ae, consumer protection]]; [[https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites|Google, multi-regional and multilingual sites]]; [[https://developers.google.com/search/docs/essentials/spam-policies|Google, spam policies]]; [[https://support.apple.com/en-us/102775|Apple Pay countries and regions]]; [[https://changelog.shopify.com/posts/support-for-auto-translating-arabic-and-hebrew-in-translate-adapt|Shopify changelog, Arabic auto-translation]].",
          "Industry and research: [[https://datareportal.com/reports/digital-2026-saudi-arabia|DataReportal, Digital 2026: Saudi Arabia]]; [[https://datareportal.com/reports/digital-2026-united-arab-emirates|DataReportal, Digital 2026: UAE]]; [[https://www.deloitte.com/middle-east/en/about/press-room/ai-becomes-default-for-saudi-consumers-as-deloittes-2026-digital-consumer-trends-report-reveals-decisive-shift-in-how-the-kingdom-lives.html|Deloitte, Digital Consumer Trends KSA 2026]]; [[https://www.deloitte.com/middle-east/en/about/press-room/deloitte-digital-consumer-trends-2025-report-reveals-ai-adoption-surge-social-commerce-boom-and-changing-digital-behaviors-in-the-uaeand-ksa|Deloitte, Digital Consumer Trends 2025]]; [[https://www.checkout.com/guides-and-reports/digital-commerce-mena-2025|Checkout.com, Digital Commerce in MENA 2025]]; [[https://www.checkout.com/newsroom/checkout-com-and-tabby-partner-to-expand-bnpl-solutions-for-retailers-in-the-uae-and-saudi-arabia|Checkout.com, BNPL data]]; [[https://www.gulftoday.ae/business/2026/09/28/uae-e-commerce-market-size-reaches-dhs422-billion-in-2025|EZDubai and Euromonitor via Gulf Today]]; [[https://gs.statcounter.com/search-engine-market-share/all/united-arab-emirates|StatCounter, UAE search engine share]].",
          "Reported from secondary sources (confirm before relying on them): Ministry of Commerce ecommerce registrations (Okaz, Sharikat Mubasher); Saudi E-Commerce Law and Law of Commercial Data summaries (Al Tamimi, Saudipedia); National Address carrier rule (Okaz, Arabian Business); discount licences and sales seasons (MoC news via press); weekend and national days (press and law-firm alerts); GASTAT 2024 population estimate (Argaam). This article is not legal or tax advice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A UAE-to-Saudi expansion works when it is treated as a new market with shared foundations, not as a translation project. Prove demand first, localise the offer for Saudi customers, build mada, National Address and SAR pricing into the platform, launch with limited risk and keep UAE and Saudi data separate. Settle legal, VAT and invoicing questions with Saudi advisers early, because they shape the store's structure. Then let each phase's results decide how far to go.",
        ],
        cta: {
          title: "Planning a Saudi storefront alongside your UAE store?",
          description: "ZSpace Labs is an India-based, remote-first technology studio that works with UAE and global businesses on [[/services/shopify-development|Shopify development]] and [[/services/website-development|website development]], including bilingual Arabic and English storefronts, market structures and payment and delivery integrations.",
        },
      },
    ],
  },

  // ---------------------------------------- SAUDI WEBSITE LOCALIZATION
  // Page and product-level localisation for UAE businesses adding Saudi
  // Arabia. Differentiated from ecommerce-localization (generic) and
  // ecommerce-localization-vs-translation by Saudi-specific facts, a
  // UAE-vs-KSA shared/localise split and tested locale behaviour. Strategy
  // lives in uae-to-saudi-ecommerce-expansion.
  {
    slug: "saudi-website-localization",
    title: "Saudi Arabia Website Localization: What UAE Businesses Need to Change Before Expanding",
    seoTitle: "Saudi Website Localization for UAE Businesses",
    excerpt:
      "What a UAE website must change for Saudi Arabia: Saudi Arabic, SAR and digits, hreflang, mada, National Address forms, PDPL consent and a checklist.",
    category: "Web Development",
    banner: "compare3",
    sceneKind: "landing",
    bannerAlt: "A UAE website and a Saudi website side by side, with shared components in the middle and localised language, currency, payments and forms on each side",
    date: "2026-10-08",
    readingTime: "18 min read",
    relatedServiceSlugs: ["website-development", "ui-ux-design", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "retail", "professional-services", "d2c-consumer"],
    relatedSlugs: ["uae-to-saudi-ecommerce-expansion", "ecommerce-localization-vs-translation", "multi-language-ecommerce-website"],
    faqs: [
      { q: "Can I reuse my UAE Arabic website for Saudi Arabia?", a: "You can reuse the structure, design system and much of the content model, but not the copy as is. Saudi customers notice terminology, currency, payment and delivery details written for the UAE. Have native Saudi reviewers check every customer-facing template, change AED to SAR, add Saudi payment methods and the National Address field, and publish it on separate Saudi URLs with hreflang." },
      { q: "Should a Saudi website use Arabic-Indic or Western digits?", a: "Decide deliberately and test with Saudi users. W3C's Arabic layout requirements list Saudi Arabia among countries that use Arabic-Indic digits, and in our tests the ar-SA locale in Node's ICU data formatted numbers with Arabic-Indic digits by default while ar-AE used Western digits. Many Saudi sites use Western digits for prices and phone numbers. Whatever you choose, set the numbering system explicitly in code." },
      { q: "What hreflang codes should a UAE and Saudi site use?", a: "Use language-region pairs such as ar-SA and en-SA for Saudi pages, ar-AE and en-AE for UAE pages, and x-default for a fallback such as a country selector. Google supports ISO 639-1 language codes with optional ISO 3166-1 region codes, but not a country code on its own. Each page must list itself and all alternates, and the tags must be reciprocal." },
      { q: "Do I need a National Address field on a Saudi checkout?", a: "In practice, yes. According to December 2025 press reports, the Transport General Authority required parcel carriers not to accept shipments without a National Address from 1 January 2026. Add a field for the eight-character short address and make it easy to find, with a short explanation. Confirm current requirements with your carriers." },
      { q: "Does Saudi Arabia's PDPL apply to a UAE company's website?", a: "It may. Summaries of the Saudi Personal Data Protection Law, overseen by SDAIA, describe it as covering the processing of personal data of individuals in the Kingdom by entities outside it, with rules on consent, marketing and cross-border transfers. Whether and how it applies to your business is a legal question, so ask a Saudi-qualified adviser and design consent and data flows per market." },
      { q: "Is machine translation good enough for a Saudi website?", a: "Not on its own. Google lists automated translation that provides little value to users among examples of scaled content abuse, and Arabic machine translation struggles with missing diacritics, terminology and tone. Machine translation can draft content, but a native Saudi reviewer should edit and approve it, guided by a market glossary." },
      { q: "Do AI Overviews and AI Mode work in Arabic?", a: "Yes. Google added Arabic to AI Overviews in May 2025 and launched AI Mode in Arabic in October 2025, rolling out gradually. Google says there are no special requirements beyond being indexed and eligible for a snippet, so clear Arabic content on crawlable pages, accurate structured data and consistent business information are what matter." },
      { q: "What can stay shared between UAE and Saudi websites?", a: "Usually the platform, design system, components, product data structure, brand guidelines, media library, most technical SEO setup and back-office integrations. What changes is language and terminology, currency and VAT display, payment methods, address forms, legal and returns pages, delivery promises, support hours, campaigns and local landing pages." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**Saudi website localisation** means adapting a website for customers in Saudi Arabia: Saudi-reviewed Arabic, riyal prices with VAT, deliberate digit and date formats, mada and other Saudi payment methods, National Address and +966 phone fields, Saudi legal and returns pages, Arabic support on the Saudi working week, and separate Saudi URLs with hreflang.",
          "For a UAE business, the good news is that much of the hard work is done. A site that already supports Arabic and right-to-left layout has the right foundations. The risk is the opposite: assuming that UAE Arabic, AED prices and UAE checkout fields will do. They will not.",
          "This guide covers what to change on the website and product experience. For market strategy, phasing and store structure, read [[/blogs/uae-to-saudi-ecommerce-expansion|how to build a UAE-to-Saudi ecommerce expansion strategy]]. Facts are attributed to their sources; recommendations are ours.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Saudi Arabia has 34.4 million internet users (99%) and 38.6 million social media identities (DataReportal, Digital 2026).",
          "66% of Saudi consumers actively use AI tools and 42% use them for translation (Deloitte, Digital Consumer Trends KSA 2026).",
          "UAE Arabic is not automatically Saudi Arabic: use a Saudi glossary and native Saudi reviewers.",
          "In ICU tests, ar-SA formats numbers with Arabic-Indic digits by default and ar-AE with Western digits. Set the numbering system explicitly.",
          "Use ar-SA and en-SA hreflang for Saudi pages, ar-AE and en-AE for UAE pages, and an x-default fallback.",
          "Checkout needs mada, SAR, a +966 phone format and a National Address field.",
          "Treat Saudi PDPL consent and marketing rules as a design input; confirm specifics with a Saudi adviser.",
        ],
      },
      {
        heading: "Who you are localising for: Saudi digital consumers in 2026",
        body: [
          "**Saudi facts.** DataReportal's Digital 2026 report counts 34.4 million internet users (99.0% of a 34.7 million population), 38.6 million social media user identities and 48.7 million cellular connections ([[https://datareportal.com/reports/digital-2026-saudi-arabia|DataReportal]]). Deloitte's Digital Consumer Trends 2026 for the Kingdom, from a nationally representative sample of 1,000 consumers aged 18 to 50, found that 66% actively use AI tools (up from 49%) and 45% use AI for work. Searching for information (51%), generating ideas (44%) and translation (42%) were the top uses ([[https://www.deloitte.com/middle-east/en/about/press-room/ai-becomes-default-for-saudi-consumers-as-deloittes-2026-digital-consumer-trends-report-reveals-decisive-shift-in-how-the-kingdom-lives.html|Deloitte]]).",
          "**UAE and Saudi combined.** Deloitte's 2025 edition, covering 2,000 consumers across both countries, found that 96% use a smartphone daily and 73% bought through social media in the past year. There is no Saudi-only split.",
          "**What that means for the website.** Saudi visitors arrive on mobile, often from social media or AI-assisted research, and frequently in Arabic. Many will compare your Saudi page with Saudi competitors who already show riyal prices, mada and local delivery dates. A UAE page with a translated header is easy to spot.",
        ],
      },
      {
        heading: "Arabic for Saudi users: terminology, tone and review",
        body: [
          "**The answer first:** write Saudi pages in clear Modern Standard Arabic for product, legal and checkout content, adjust terminology and tone for Saudi readers, and reserve dialect for social and campaign copy where a Saudi copywriter controls it.",
          "Arabic across the Gulf shares a written standard, but vocabulary, everyday product terms, address conventions and tone vary. A UAE Arabic reviewer may approve copy that reads slightly foreign to a Saudi customer. The fix is process: a market glossary per country, and a native Saudi reviewer who approves templates, navigation, product data, policies and campaigns.",
          "The table shows the kinds of terms to check. The examples are illustrative, not an authoritative list; validate each with native Saudi reviewers and your own search data.",
        ],
        table: {
          headers: ["Area", "UAE version", "What to check for Saudi Arabia"],
          rows: [
            ["Currency", "درهم / د.إ (AED)", "ريال / ر.س (SAR) everywhere, including emails, PDFs and structured data"],
            ["Address terms", "Emirate, area, landmark", "City, district, National Address (العنوان الوطني) and short address"],
            ["Tax wording", "VAT at the UAE rate", "VAT wording and rate as confirmed by your Saudi tax adviser"],
            ["Product vocabulary", "Terms your UAE customers search", "Saudi search terms from keyword research; reviewer approval"],
            ["Occasions", "UAE campaigns and national occasions", "Founding Day, Saudi National Day, Saudi Ramadan and Eid messaging"],
            ["Tone", "Often bilingual, English-led", "Arabic-led; formality agreed in a Saudi tone-of-voice note"],
            ["Dialect in ads", "Emirati or pan-Gulf phrasing", "Saudi phrasing written by Saudi copywriters, not adapted from UAE copy"],
          ],
        },
        callout: {
          type: "tip",
          text: "Give reviewers context, not spreadsheets. Reviewing strings out of context misses truncated buttons, wrong gender agreement and mixed-direction text. Review on staging pages on a phone.",
        },
      },
      {
        heading: "Right-to-left layout and UX",
        body: [
          "**Standards.** W3C advises adding dir=\"rtl\" to the html element whenever the overall document direction is right to left, and never using CSS alone to set base direction ([[https://www.w3.org/International/questions/qa-html-dir|W3C]]). Use dir=\"auto\" for user input and isolate inserted text such as product names or usernames. CSS logical properties (margin-inline-start rather than margin-left) let one stylesheet serve both directions.",
          "**What to mirror.** Material Design's bidirectionality guidance says back and forward icons should mirror, and progress bars fill right to left. Clocks, media playback controls, phone numbers and most icons without direction do not mirror. Mozilla's RTL guidelines add checkmarks, product logos and icons containing text or numbers to the do-not-mirror list.",
          "**If your UAE site already supports Arabic,** the Saudi work is mostly content and configuration, not layout. Still test every Saudi-specific component: the National Address field, mada logos, SAR price blocks, BNPL widgets and delivery-date messages often arrive from third-party scripts that ignore direction. For the full bilingual build approach, see [[/blogs/multilingual-website-development-uae|multilingual website development in the UAE]]; for accessible forms and focus order in both directions, see the [[/blogs/website-accessibility-guide|website accessibility guide]]; for generic cross-market UX, [[/blogs/global-ecommerce-ux|global ecommerce UX]].",
        ],
      },
      {
        heading: "Numbers, dates and currency: set them explicitly",
        body: [
          "**Standards.** W3C's Arabic and Persian Layout Requirements list Arabic-Indic digits (٠–٩) as used in 'Eastern Arabic-speaking countries; e.g. Egypt, Saudi Arabia, Iraq' and European digits in western Arabic-speaking countries ([[https://www.w3.org/TR/alreq/|W3C alreq]]). The UAE is not named.",
          "**Tested.** We ran Intl.NumberFormat and Intl.DateTimeFormat in Node 22.20 (ICU 77.1, CLDR 47) on 8 October 2026. The results below are what that runtime produced; older browsers and runtimes ship different CLDR data and may differ.",
          "**Our recommendation.** Do not rely on locale defaults. Decide, with Saudi user testing, which digits to use for prices, phone numbers, order numbers and dates, then force them in code with the Unicode extension (for example ar-SA-u-nu-latn or ar-SA-u-nu-arab). Keep phone numbers, order IDs and codes in Western digits so customers can copy them into other apps. If you show Hijri dates, set the calendar explicitly too, and show the Gregorian date alongside for delivery promises.",
        ],
        table: {
          headers: ["Locale tag", "1234567.89 as SAR", "8 Oct 2026 (long date)", "Default digits"],
          rows: [
            ["ar-SA", "١٬٢٣٤٬٥٦٧٫٨٩ ر.س.", "٨ أكتوبر ٢٠٢٦", "Arabic-Indic (arab)"],
            ["ar-SA-u-nu-latn", "1,234,567.89 ر.س.", "8 أكتوبر 2026", "Western (latn), forced"],
            ["ar-AE", "1,234,567.89 ر.س.", "8 أكتوبر 2026", "Western (latn)"],
            ["en-SA", "SAR 1,234,567.89", "October 8, 2026", "Western (latn)"],
          ],
        },
        callout: {
          type: "note",
          text: "A site built for the UAE with the ar-AE locale will silently switch to Arabic-Indic digits if a developer later changes the Saudi version to ar-SA. Lock the numbering system in your formatting utilities so prices do not change appearance between markets by accident.",
        },
      },
      {
        heading: "Payments and checkout",
        body: [
          "**Saudi facts.** SAMA reports that electronic payments were 85% of retail payments in 2025 ([[https://sama.gov.sa/en-US/MediaCenter/News/Pages/news-1139.aspx|SAMA]]). mada, the domestic debit network, and SADAD, the national bill payment system, are run by Saudi Payments, a SAMA subsidiary (per Saudipedia and SAMA). Tamara and Tabby hold SAMA BNPL licences, granted in March and October 2025. Apple lists Saudi Arabia as an Apple Pay market. Checkout.com found that 42% of Saudi online shoppers had used BNPL in the past 12 months.",
          "**Website changes.** Show mada, Apple Pay and your BNPL option on product pages and in the cart, not only at the final step, with Arabic labels. Show prices in SAR including VAT, with VAT stated as your adviser confirms. Make BNPL instalment messages show SAR amounts that match the final total. Keep COD rules visible where they apply. For checkout patterns carried over from the UAE, see [[/blogs/uae-ecommerce-checkout-optimization|UAE ecommerce checkout optimisation]].",
        ],
      },
      {
        heading: "Forms: National Address, phone numbers and IDs",
        body: [
          "**Saudi facts (reported).** According to December 2025 press reports (Okaz, Arabian Business), the Transport General Authority required carriers not to accept parcels without a National Address from 1 January 2026. The short address has eight characters, four letters and four digits, and customers can look it up through the National Address platform, SPL or apps such as Absher. Confirm the current requirement with your carriers.",
          "**Our recommendation.** Ask for the short address as its own field, with a one-line Arabic explanation and a link telling customers where to find it. Validate format, not existence, unless your carrier offers a validation API. Default the phone field to +966, accept local formats with a leading zero, and store numbers in E.164. Do not ask for a National ID or Iqama number unless a specific service or legal requirement needs it, and if you do, explain why and protect it as sensitive data.",
        ],
        table: {
          headers: ["Field", "UAE form", "Saudi form"],
          rows: [
            ["Country code", "+971 default", "+966 default; store in E.164"],
            ["Region", "Emirate", "City and district"],
            ["Address", "Area, building, landmark", "National Address short address plus street and building details"],
            ["Postcode", "Usually not used", "Collect where the National Address or carrier needs it"],
            ["IDs", "Avoid unless needed", "Avoid unless needed; explain purpose if requested"],
            ["Direction", "dir=\"auto\" on free-text fields", "Same; Western digits in phone and short-address fields"],
          ],
        },
      },
      {
        heading: "Customer support, WhatsApp and the Saudi working week",
        body: [
          "**Facts.** In the UAE, 85% of residents in a 2024 Zbooni/YouGov survey wanted businesses to offer WhatsApp for support. We found no comparable Saudi survey, so test channel demand rather than assume it. Saudi Arabia's official weekend for government and financial institutions has been Friday and Saturday since 2013, while UAE federal government moved to Saturday and Sunday in 2022 (both as reported in the press); private-sector hours vary.",
          "**Our recommendation.** Publish Saudi support hours in Arabic and Saudi time, staffed with Arabic speakers who know Saudi delivery and returns rules. Use a separate WhatsApp Business Platform number or routing rule for Saudi customers, so conversations reach the right team and are logged. If you add AI to support, keep humans on complaints and give the assistant Saudi-specific policies; see [[/blogs/ai-customer-support-uae|AI customer support for UAE businesses]].",
        ],
      },
      {
        heading: "Mobile, social and local search intent",
        body: [
          "**Mobile first.** DataReportal reports 48.7 million cellular connections in Saudi Arabia (140% of the population) and a median mobile download speed of 194.49 Mbps at the end of 2025. Fast networks do not excuse heavy pages: test Arabic pages on mid-range phones, check that web fonts with Arabic subsets load quickly, and keep the cart and checkout usable with one thumb.",
          "**Social traffic.** With 38.6 million social media identities and 73% of UAE and KSA consumers buying via social media (Deloitte 2025, combined), many Saudi sessions start on a social profile. Landing pages linked from Saudi social campaigns should be Saudi pages in SAR, not the UAE homepage.",
          "**Local intent.** Saudi searches often include a city or delivery qualifier. Build Saudi landing pages around real delivery coverage and offers, not city-name pages with swapped text. If you have physical presence in the Kingdom, keep Google Business Profile details accurate; if you do not, do not imply it.",
        ],
      },
      {
        heading: "SEO for Saudi Arabia: keywords, URLs and hreflang",
        body: [
          "**Do Saudi keyword research separately.** UAE Arabic keyword lists miss Saudi vocabulary and volumes. Research in Arabic and English for Saudi Arabia, include spelling variants (hamza forms, taa marbuta and alef maqsura), and map terms to Saudi pages. Our [[/blogs/arabic-seo-uae|Arabic SEO guide for UAE businesses]] covers Arabic keyword research and normalisation.",
          "**Google facts.** Google supports hreflang through HTML link tags, HTTP headers or sitemaps. 'Each language version must list itself as well as all other language versions', the tags must be reciprocal, URLs must be fully qualified, and only ISO 639-1 language codes with optional ISO 3166-1 region codes are supported, so a country code on its own is invalid. The x-default value covers users whose language and region match no version ([[https://developers.google.com/search/docs/specialty/international/localized-versions|Google]]). Google also advises against automatic redirects between language versions.",
          "**Our recommendation.** Use country-language subfolders, such as /sa-ar/, /sa-en/, /ae-ar/ and /ae-en/, set a self-referencing canonical in the same language on each, and point x-default to a country and language selector or your main English page. Localise titles, meta descriptions, structured data and image alt text, not only body copy. Generic depth: [[/blogs/international-ecommerce-seo|international ecommerce SEO]] and [[/blogs/multi-language-ecommerce-website|multi-language ecommerce websites]].",
        ],
        code: {
          label: "hreflang set for one product page (every version lists all)",
          text: "<link rel=\"alternate\" hreflang=\"ar-SA\"\n  href=\"https://example.com/sa-ar/p/oud-50ml\" />\n<link rel=\"alternate\" hreflang=\"en-SA\"\n  href=\"https://example.com/sa-en/p/oud-50ml\" />\n<link rel=\"alternate\" hreflang=\"ar-AE\"\n  href=\"https://example.com/ae-ar/p/oud-50ml\" />\n<link rel=\"alternate\" hreflang=\"en-AE\"\n  href=\"https://example.com/ae-en/p/oud-50ml\" />\n<link rel=\"alternate\" hreflang=\"x-default\"\n  href=\"https://example.com/choose-country\" />",
        },
      },
      {
        heading: "AI search in Arabic",
        body: [
          "**Facts.** Google added Arabic to AI Overviews in May 2025 ([[https://blog.google/products/search/ai-overview-expansion-may-2025-update/|Google]]) and launched AI Mode in Arabic on 8 October 2025, rolling out gradually ([[https://blog.google/intl/ar-mena/products/explore-get-answers/introducing-ai-mode-in-arabic/|Google MENA]]). Google states that there are 'no additional requirements to appear in AI Overviews or AI Mode' beyond being indexed and eligible for a snippet, and no special AI text files are needed ([[https://developers.google.com/search/docs/appearance/ai-features|Google]]). Deloitte found that 51% of Saudi AI users use AI to search for information.",
          "**Our recommendation.** Make Saudi pages easy to quote: put direct answers about delivery, payment, returns and product details in Arabic text near the top, keep structured data consistent with visible content, and keep prices and policies consistent across your site, marketplaces and social profiles. More in [[/blogs/geo-uae|GEO for UAE businesses]] and [[/blogs/ai-search-ready-website-uae|building an AI-search-ready website]].",
        ],
      },
      {
        heading: "Analytics and regional landing pages",
        body: [
          "**Analytics.** Segment every report by country and by language from day one: a Saudi visitor on the English Saudi page behaves differently from one on the Arabic page. Report revenue in SAR for the Saudi market as well as in your reporting currency. Track payment method share, BNPL usage, COD failure and National Address errors as Saudi-specific metrics.",
          "**Regional landing pages.** Build Saudi landing pages for campaigns, occasions (Founding Day, National Day, Ramadan) and categories with distinct Saudi demand. Each should have Saudi prices, delivery promises and offers. Avoid near-duplicate city pages that differ only by name; they help neither users nor search.",
        ],
      },
      {
        heading: "What can stay shared, and what must be localised",
        body: [
          "The aim is one system with market-specific layers, not two websites drifting apart. The split below is our recommendation for most UAE businesses adding Saudi Arabia.",
        ],
        table: {
          headers: ["Layer", "Share across UAE and Saudi", "Localise for Saudi Arabia"],
          rows: [
            ["Platform and code", "CMS or commerce platform, components, design system", "Market configuration, feature flags"],
            ["Brand", "Logo, visual identity, photography style", "Campaign imagery, occasions, models and settings where relevant"],
            ["Language", "Arabic RTL foundations, fonts", "Saudi glossary, copy, tone, reviewer sign-off"],
            ["Product data", "Data structure, SKUs, specifications, media", "Titles, descriptions, availability, Saudi search terms"],
            ["Pricing", "Pricing logic, rounding rules", "SAR prices, VAT display, promotions"],
            ["Payments", "Payment provider integration pattern", "mada, BNPL provider, COD rules"],
            ["Checkout", "Flow and validation framework", "+966, National Address, city list"],
            ["Policies", "Structure of policy pages", "Saudi returns, delivery, privacy and legal content"],
            ["SEO", "Technical setup, templates, sitemaps", "Keywords, metadata, hreflang values, landing pages"],
            ["Support", "Helpdesk and CRM", "Hours, Arabic staff, WhatsApp routing"],
          ],
        },
      },
      {
        heading: "UAE → Saudi website localisation checklist",
        body: [
          "Use this as the acceptance checklist for the Saudi version. 'Must localise' items block launch; 'should localise' items belong in the first months; 'can remain shared' items need checking, not rebuilding.",
        ],
        table: {
          headers: ["Must localise", "Should localise", "Can remain shared"],
          rows: [
            ["Saudi-reviewed Arabic for navigation, product pages, cart and checkout", "Saudi tone-of-voice note and campaign copy", "Design system and RTL components"],
            ["SAR prices including VAT", "Saudi-specific promotions and bundles", "Pricing and rounding logic"],
            ["mada, Apple Pay and chosen BNPL", "SADAD for suitable orders", "Payment integration architecture"],
            ["National Address and +966 phone fields", "City-level delivery estimates", "Form validation framework"],
            ["Saudi returns, delivery, privacy and legal pages (adviser-checked)", "Saudi FAQ and help content", "Policy page templates"],
            ["Separate Saudi URLs with reciprocal hreflang", "Saudi landing pages for occasions and categories", "Technical SEO setup and sitemaps"],
            ["Explicit numbering system and date formats", "Hijri dates where useful, shown with Gregorian", "Formatting utilities"],
            ["Analytics segmented by country and language", "Saudi-specific dashboards", "Analytics platform and tagging plan"],
            ["Marketing consent per Saudi rules (adviser-checked)", "Saudi email and WhatsApp templates", "CRM and consent storage"],
            ["Arabic support hours for the Saudi week", "Saudi WhatsApp routing", "Helpdesk tooling"],
          ],
        },
      },
      {
        heading: "Technical implementation",
        body: [
          "**URLs and routing.** Give each country-language pair its own URL. Redirect only the bare root, if at all, and show a visible selector so users and crawlers can reach every version, in line with Google's advice against automatic redirects. In Next.js, locale routing typically uses a dynamic segment such as app/[lang]; in Shopify, assign subfolders to markets.",
          "**CMS: locales and fallback rules.** Model Saudi Arabia as a market and Arabic as a language, not as one 'Saudi locale' that mixes both. Headless CMSs such as Contentful support fallback chains, for example ar-SA falling back to ar-AE, and Sanity supports field-level or document-level localisation. Use fallback only for neutral content such as specifications. Never fall back for prices, legal text, delivery promises or payment copy: those fields should fail visibly if empty.",
          "**Content models.** Add market-specific fields rather than duplicating whole entries: price and currency, availability, delivery message, legal references, payment badges and campaign blocks. Keep shared fields (SKU, media, specifications) in one place. Generic depth: [[/blogs/ecommerce-internationalization|ecommerce internationalisation]] and [[/blogs/headless-cms-vs-traditional-cms|headless vs traditional CMS]].",
          "**Translation workflow.** Keep one glossary per market (UAE Arabic, Saudi Arabic) with approved terms, banned terms and notes. Machine translation can draft; native Saudi reviewers edit and approve in context, on staging, on a phone. Google lists automated translation that adds little value among examples of scaled content abuse, so do not bulk-publish unreviewed Arabic. Track which strings changed since the last review. More on the difference in [[/blogs/ecommerce-localization-vs-translation|localisation vs translation]] and on writing UI copy in [[/blogs/ux-writing|UX writing]].",
        ],
        code: {
          label: "Content model: shared vs market fields",
          text: "Product (shared)\n  sku, media, specs, brand\n  +-- Language: ar, en (titles, descriptions)\n  +-- Market: AE\n  |     currency AED, price, delivery_msg, legal_ref\n  +-- Market: SA\n        currency SAR, price, delivery_msg, legal_ref,\n        payment_badges [mada, applepay, bnpl]\nFallback: specs only. Price/legal/delivery: none.",
        },
      },
      {
        heading: "Data protection: Saudi PDPL and marketing consent",
        body: [
          "This is not legal advice; the points below come from secondary summaries of SDAIA's guidance and law-firm commentary. Confirm them with a Saudi-qualified adviser.",
          "**Reported position.** The Saudi Personal Data Protection Law, overseen by SDAIA, came into force on 14 September 2023 with a one-year grace period to 14 September 2024. Summaries describe it as applying to processing of personal data of individuals in the Kingdom by entities outside it. Transfers outside the Kingdom are governed by a separate regulation, with safeguards such as SDAIA's standard contractual clauses.",
          "**Marketing.** According to summaries by Herbert Smith Freehills and Al Tamimi, personal data may be used for direct marketing with the person's prior consent, and an easy opt-out must be provided. Separate CST anti-spam rules, as summarised by vendors and law firms, require prior consent and a free, easy unsubscribe for promotional messages.",
          "**Our recommendation.** Build consent per market and per channel (email, SMS, WhatsApp) with unticked boxes, record when and how consent was given, make opt-out one step, and keep marketing and transactional messages separate. Map where Saudi customer data is stored and which processors receive it. Microsoft has said its Saudi Arabia East Azure region will run customer workloads from Q4 2026, and AWS has announced plans for a Saudi region; in-Kingdom hosting is typically driven by data classification and sector rather than a blanket rule, so check with your adviser. See [[/blogs/ecommerce-privacy-customer-data|ecommerce privacy and customer data]].",
        ],
      },
      {
        heading: "Common mistakes",
        body: [
          "**Publishing UAE Arabic as Saudi Arabic.** It reads as foreign at best. Use a Saudi glossary and Saudi reviewers.",
          "**Converting AED prices at checkout.** Saudi customers expect SAR prices from the first page they see, including VAT.",
          "**Letting digits change by accident.** Switching from ar-AE to ar-SA changes default digits in ICU. Set the numbering system explicitly.",
          "**One hreflang code for the whole Gulf.** ar alone cannot distinguish UAE from Saudi pages; use ar-AE and ar-SA.",
          "**Missing the National Address.** Failed deliveries cost more than an extra form field.",
          "**Copying UAE legal pages.** Returns, disclosures and privacy content need Saudi review.",
          "**Fallbacks on prices and policies.** A Saudi page showing AED or UAE returns terms is worse than an empty field that blocks publishing.",
          "**Mirroring everything.** Logos, media controls, phone numbers and checkmarks should not flip.",
          "**Pre-ticked consent and blended lists.** Keep marketing consent per market and channel.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Official and standards: [[https://developers.google.com/search/docs/specialty/international/localized-versions|Google, localized versions and hreflang]]; [[https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites|Google, multi-regional and multilingual sites]]; [[https://developers.google.com/search/docs/essentials/spam-policies|Google, spam policies]]; [[https://developers.google.com/search/docs/appearance/ai-features|Google, AI features and your website]]; [[https://blog.google/products/search/ai-overview-expansion-may-2025-update/|Google, AI Overviews expansion (May 2025)]]; [[https://blog.google/intl/ar-mena/products/explore-get-answers/introducing-ai-mode-in-arabic/|Google MENA, AI Mode in Arabic]]; [[https://www.w3.org/International/questions/qa-html-dir|W3C, structural markup and RTL]]; [[https://www.w3.org/TR/alreq/|W3C, Arabic and Persian Layout Requirements]]; [[https://m1.material.io/usability/bidirectionality.html|Material Design, bidirectionality]]; [[https://firefox-source-docs.mozilla.org/code-quality/coding-style/rtl_guidelines.html|Mozilla RTL guidelines]]; [[https://sama.gov.sa/en-US/MediaCenter/News/Pages/news-1139.aspx|SAMA, e-payments 2025]]; [[https://sama.gov.sa/en-US/MediaCenter/News/pages/news-1079.aspx|SAMA, Tamara licence]]; [[https://www.sama.gov.sa/en-US/MediaCenter/News/Pages/news-1116.aspx|SAMA, Tabby licence]]; [[https://support.apple.com/en-us/102775|Apple Pay countries and regions]]; [[https://sdaia.gov.sa/Documents/StandardContractualClausesForPersonalDataTransferEN.pdf|SDAIA, standard contractual clauses]]; [[https://news.microsoft.com/source/emea/2026/02/microsoft-confirms-saudi-arabia-datacenter-region-available-for-customers-to-run-cloud-workloads-from-q4-2026/|Microsoft, Saudi Arabia datacenter region]]; [[https://www.contentful.com/developers/docs/concepts/locales|Contentful, locales]]; [[https://www.sanity.io/docs/localization|Sanity, localization]].",
          "Industry and research: [[https://datareportal.com/reports/digital-2026-saudi-arabia|DataReportal, Digital 2026: Saudi Arabia]]; [[https://www.deloitte.com/middle-east/en/about/press-room/ai-becomes-default-for-saudi-consumers-as-deloittes-2026-digital-consumer-trends-report-reveals-decisive-shift-in-how-the-kingdom-lives.html|Deloitte, Digital Consumer Trends KSA 2026]]; [[https://www.deloitte.com/middle-east/en/about/press-room/deloitte-digital-consumer-trends-2025-report-reveals-ai-adoption-surge-social-commerce-boom-and-changing-digital-behaviors-in-the-uaeand-ksa|Deloitte, Digital Consumer Trends 2025]]; [[https://www.checkout.com/newsroom/checkout-com-and-tabby-partner-to-expand-bnpl-solutions-for-retailers-in-the-uae-and-saudi-arabia|Checkout.com, BNPL data]]; [[https://communicateonline.me/news/85-percent-of-uae-residents-want-businesses-to-use-whatsapp/|Zbooni/YouGov WhatsApp survey]].",
          "Reported from secondary sources (confirm before relying on them): National Address carrier rule (Okaz, Arabian Business); Saudi PDPL dates, scope and marketing rules (SDAIA guide summaries, Herbert Smith Freehills, Al Tamimi); CST anti-spam rules (vendor and law-firm summaries); weekend days (press and law-firm alerts); Saudi Payments, mada and SADAD (Saudipedia). Locale formatting results were tested by us in Node 22.20 with ICU 77.1 and CLDR 47 on 8 October 2026. This article is not legal advice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Localising a UAE website for Saudi Arabia is mostly about the details Saudi customers notice first: Saudi Arabic, riyal prices, digits that stay consistent, mada at checkout, a National Address field, Saudi policies and support on the Saudi working week. Keep the platform, design system and data structure shared, localise the layers that face the customer, and lock formatting, fallbacks and hreflang down in code so the two markets cannot leak into each other. Start with the 'must localise' column, have Saudi reviewers approve it on real devices, and settle data protection questions with a Saudi adviser before collecting marketing consent.",
        ],
        cta: {
          title: "Adding a Saudi version to your UAE website?",
          description: "ZSpace Labs is an India-based, remote-first technology studio that works with UAE and global businesses on bilingual [[/services/website-development|website development]] and [[/services/ui-ux-design|UI/UX design]], including RTL design systems, market-aware content models and localisation workflows.",
        },
      },
    ],
  },
];
