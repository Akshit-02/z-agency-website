import type { BlogPost } from "./blog-data";

/**
 * UAE AI search cluster: GEO pillar (geo-uae, which also absorbs the planned
 * "AI search optimization for UAE businesses" brief) and the implementation
 * guide ai-search-ready-website-uae. Differentiated from the generic owners
 * (ai-search-visibility, geo-vs-seo, ai-crawlers-robots-txt, llms-txt,
 * ai-search-traffic-tracking, ecommerce-product-data-ai-search,
 * seo-friendly-website-development) by UAE specifics: Arabic and English
 * versions, local entity naming (trade licence, free zone and mainland
 * names), Dubai and Abu Dhabi relevance, regional vocabulary, a 15-area
 * framework and a 75-point readiness score.
 * Sources checked 2026-10-08: Google Search Central (AI features page,
 * May 2025 AI search post, helpful content, generative AI content, spam
 * policies incl. doorway abuse, structured data policies, FAQ/HowTo changes
 * Aug 2023, Organization markup, JavaScript SEO, canonicalisation, sitemaps
 * lastmod, hreflang, common crawlers incl. Google-Extended); OpenAI crawler
 * docs; Perplexity crawler docs; Microsoft Advertising blog (Oct 2025);
 * Gemini API grounding docs; IndexNow; llmstxt.org; GEO paper
 * (arXiv:2311.09735); Pew Research Center (Jul 2025); Google blog (AI
 * Overviews Arabic, May 2025; AI Mode Arabic, Oct 2025); Gulf News (AI Mode
 * UAE, Aug 2025); StatCounter (Sept 2026); Microsoft AI Economy Institute;
 * DataReportal; u.ae consumer protection.
 * No figure here is ZSpace client data. Examples are labelled hypothetical.
 */

export const uaeSearchPosts: BlogPost[] = [
  // ---------------------------------------- GEO UAE (pillar)
  {
    slug: "geo-uae",
    title: "GEO for UAE Businesses: A Practical Guide to Generative Engine Optimization",
    seoTitle: "GEO for UAE Businesses: AI Search Optimisation Guide",
    excerpt:
      "GEO for UAE businesses: how ChatGPT, Gemini and Google AI choose sources, a 15-area framework, a 75-point readiness score and a 90-day plan.",
    category: "Web Development",
    banner: "aidiscovery",
    sceneKind: "serp",
    bannerAlt: "How a UAE business website moves from crawlable pages to indexed content, retrieval and citation in AI search answers",
    date: "2026-10-08",
    readingTime: "21 min read",
    relatedServiceSlugs: ["website-development", "cro-audit", "ui-ux-design"],
    relatedIndustrySlugs: ["real-estate", "healthcare-healthtech", "ecommerce", "logistics-supply-chain"],
    relatedSlugs: ["ai-search-ready-website-uae", "geo-vs-seo", "ai-search-visibility"],
    faqs: [
      { q: "What is GEO (generative engine optimization)?", a: "Generative engine optimization (GEO) is the practice of making your content easy for AI search systems such as Google AI Overviews, AI Mode, ChatGPT search, Gemini, Microsoft Copilot and Perplexity to find, understand, trust and cite in the answers they generate. It is not a separate algorithm. It builds on crawlable, indexable, useful pages and adds attention to clear entities, evidence and answer-ready structure." },
      { q: "How do I optimize my website for AI search in the UAE?", a: "Start with the basics: make sure search crawlers can reach your pages, that key content is in the HTML and indexed, and that each important page answers a real customer question with specific facts. Then keep your business name, licence details, locations and services consistent in English and Arabic across your site, Google Business Profile and directories, and measure AI referrals separately." },
      { q: "Is GEO different from SEO?", a: "Mostly no. Google says there are no additional requirements or special optimisations for its AI features beyond being indexed and eligible to show with a snippet. GEO shifts emphasis rather than replacing SEO: towards being quoted inside an answer, clear entity information, original evidence and passages that make sense on their own. A site with weak SEO foundations will rarely do well in AI search." },
      { q: "Can anyone guarantee my business will appear in ChatGPT or Google AI Overviews?", a: "No. None of the platforms sell or guarantee organic citations, and their answers vary by question wording, user, location and time. Google states that it does not guarantee structured data will show in results, and Bing's rewritten guidelines reportedly say GEO does not guarantee outcomes. Treat any guarantee of AI rankings or citations as a warning sign." },
      { q: "Does an llms.txt file help with AI search visibility?", a: "Not for Google. Google's AI features documentation says you do not need new machine-readable files, AI text files or markup to appear in AI Overviews or AI Mode, and Google's John Mueller has compared llms.txt to the keywords meta tag. The file is a community proposal from September 2024. It is cheap to publish but should not be treated as a ranking or citation lever." },
      { q: "Do I need an Arabic website for AI search in the UAE?", a: "It depends on your customers. Google added Arabic to AI Overviews in May 2025 and launched AI Mode in Arabic in October 2025, so Arabic queries can now produce AI answers. If your buyers search in Arabic, a properly written Arabic version with consistent business names and hreflang gives AI systems an Arabic source to cite. Machine-translated pages without review add risk rather than visibility." },
      { q: "How long does GEO take to show results?", a: "Technical fixes such as unblocking a crawler can take effect quickly; OpenAI says robots.txt changes for OAI-SearchBot take about 24 hours. Content, entity and authority work usually takes months, because pages must be recrawled and other sites must reference you. Plan in 30, 60 and 90-day phases and measure referrals, citations and enquiries rather than single screenshots." },
      { q: "How do I measure whether AI search is sending traffic?", a: "Use Google Search Console, where AI Overviews and AI Mode traffic is included in the Web search type, plus Bing Webmaster Tools and your analytics referral data for sources such as chatgpt.com, perplexity.ai and copilot.microsoft.com. Add a monthly manual check of your priority questions in each assistant, recording the date, wording and answer. Track enquiries by landing page." },
    ],
    content: [
      {
        heading: "Quick answer: how do I optimize my website for AI search?",
        body: [
          "**To optimize a website for AI search, make sure AI and search crawlers can reach your pages, keep key content in indexable HTML, answer real customer questions with specific, sourced facts, describe your business consistently everywhere it appears, and measure AI referrals separately.** For UAE businesses, add consistent English and Arabic entity names, licence details and locations.",
          "**Definition:** generative engine optimization (GEO) is the practice of making a website's content easy for AI search systems, such as Google AI Overviews and AI Mode, ChatGPT search, Gemini, Microsoft Copilot and Perplexity, to retrieve, understand, trust and cite when they generate an answer. The term comes from a 2023 research paper by Aggarwal and colleagues at Princeton, Georgia Tech, the Allen Institute for AI and IIT Delhi.",
          "GEO is not a separate algorithm and not a replacement for SEO. Google says there are no additional requirements to appear in its AI features beyond being indexed and eligible for a snippet. This guide is the pillar of our UAE AI search series. It explains how each platform finds sources, sets out a 15-area framework with a 75-point readiness score, and covers what is specific to Dubai, Abu Dhabi and the wider GCC. For the step-by-step technical build, read [[/blogs/ai-search-ready-website-uae|how to make a UAE business website ready for AI search]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "GEO overlaps heavily with SEO: Google says AI Overviews and AI Mode need no special files, markup or optimisation beyond being indexed and snippet-eligible.",
          "Each platform finds sources differently: ChatGPT search uses OAI-SearchBot (not GPTBot), Perplexity uses PerplexityBot, and Gemini and Google AI features draw on Google Search.",
          "Google dominates UAE search with 93.47% of search engine referrals in September 2026 (StatCounter), so Google indexability comes first.",
          "Arabic AI answers are live: AI Overviews added Arabic in May 2025 and AI Mode launched in Arabic in October 2025.",
          "UAE entity clarity matters: brand name, trade licence name, free zone or mainland entity, Arabic name and Google Business Profile should agree.",
          "Original, first-party evidence is the most citable content most businesses have, and the hardest for competitors to copy.",
          "No one can guarantee AI citations. Ignore llms.txt as a ranking lever, FAQ rich results for most sites and keyword stuffing.",
        ],
      },
      {
        heading: "SEO vs AEO vs GEO vs AI search optimization: what is the difference?",
        body: [
          "The four terms describe overlapping goals with different end points. **SEO** (search engine optimisation) aims for a ranked link in search results. **AEO** (answer engine optimisation) aims for a direct answer, such as a featured snippet or a voice assistant reply. **GEO** aims for inclusion and citation inside a generated answer. **AI search optimization** is the umbrella term buyers often use for the same work across all AI assistants.",
        ],
        table: {
          headers: ["Discipline", "What it targets", "Main signals", "Output", "How it is measured"],
          rows: [
            ["Traditional SEO", "Ranked positions in search results", "Crawlability, relevance, links, page experience, helpful content", "A blue link and snippet", "Rankings, impressions, clicks, conversions"],
            ["AEO", "Direct answers: featured snippets, voice and 'People also ask'", "Clear question headings, concise answers, structure", "A quoted answer, often with one source", "Snippet ownership, answer impressions"],
            ["GEO", "Inclusion and citation in AI-generated answers", "Indexability, entity clarity, evidence, quotable passages, external corroboration", "A synthesised answer with linked sources", "Citations, mentions, AI referrals, enquiries"],
            ["AI search optimization", "Visibility across all AI assistants and AI search features", "All of the above, plus per-platform crawler access", "Answers in Google AI, ChatGPT, Gemini, Copilot, Perplexity", "Combined referral, citation and brand-mention tracking"],
          ],
        },
        callout: {
          type: "note",
          text: "These are labels for emphasis, not separate systems. Google's AI features run on its core search index and quality systems, and Bing's rewritten webmaster guidelines (as reported by Search Engine Journal in February 2026) treat GEO as part of the same guidance. For the full strategic comparison, read [[/blogs/geo-vs-seo|GEO vs SEO]].",
        },
      },
      {
        heading: "Why the differences still matter",
        body: [
          "**Answer first:** the work is mostly shared, but the unit of success changes from a page ranking to a passage being used. That changes how you write and what you publish.",
          "In classic search a user scans ten results and picks one. In an AI answer, the system reads several pages, extracts passages that support specific claims and links to some of them. Google calls the retrieval step **query fan-out**: AI Overviews and AI Mode may issue 'multiple related searches across subtopics and data sources' to build one answer (Google Search Central). A page can therefore be cited for a sub-question it answers well even if it does not rank first for the main query.",
          "Three practical shifts follow. First, each section should make sense on its own, because a passage may be quoted without the rest of the page. Second, specific facts with dates and sources are easier to use than general claims. Third, who you are must be unambiguous, because the system is choosing between entities as well as pages. Our generic guide to [[/blogs/ai-search-visibility|AI search visibility]] explains the three gates (reachable, indexed, selected) in more depth.",
        ],
      },
      {
        heading: "How AI search systems retrieve and cite web information",
        body: [
          "**Answer first:** every major AI search product retrieves web pages through a crawler and an index, then selects passages to support the answer. What differs is which crawler and which index, and that decides what you must allow and where you must be indexed.",
          "**Google AI Overviews and AI Mode.** Google's documentation says a page must be 'indexed and eligible to be shown in Google Search with a snippet' to appear as a supporting link, that 'there are no additional requirements', and that 'you don't need to create new machine readable files, AI text files, or markup'. The usual preview controls (nosnippet, data-nosnippet, max-snippet and noindex) apply to AI features too. AI Overviews added Arabic support in May 2025 (Google blog). AI Mode rolled out in English across MENA, including the UAE, in August 2025 (Gulf News), and launched in Arabic on 8 October 2025 (Google MENA blog).",
          "**ChatGPT search.** OpenAI documents three separate agents. **OAI-SearchBot** is 'used to surface websites in search results in ChatGPT's search features'. **GPTBot** is the training crawler: disallowing it means content 'should not be used in training generative AI foundation models', and it does not control search inclusion. **ChatGPT-User** fetches pages for user-initiated actions, and 'robots.txt rules may not apply'. OpenAI's launch post says ChatGPT search uses third-party search providers as well as partner content. OpenAI does not name a provider in that post, so we do not.",
          "**Gemini.** Google documents that grounding with Google Search 'connects the Gemini model to real-time web content and works with all available languages'. The model decides whether to search, runs one or more queries and returns answers with citations (Gemini API documentation). The safe conclusion: Gemini models can ground answers in Google Search results, so Google indexability matters here too.",
          "**Microsoft Copilot and Bing.** Microsoft's Bing team advises that 'AI assistants don't read a page top to bottom like a person would', that headings act as 'chapter titles that define clear content slices', and that you should 'make answers snippable'. It warns that AI systems may not render hidden content and that information locked in PDFs or images is harder to use (Microsoft Advertising blog, October 2025). Bing Webmaster Tools and IndexNow are the levers here.",
          "**Perplexity.** **PerplexityBot** is 'designed to surface and link websites in search results on Perplexity' and is not used to train foundation models. **Perplexity-User** handles user-requested fetches and 'generally ignores robots.txt rules' (Perplexity documentation).",
        ],
        table: {
          headers: ["Platform", "Where sources come from", "What you control"],
          rows: [
            ["Google AI Overviews and AI Mode", "Google's search index (Googlebot)", "Indexing, snippet eligibility, content quality, Business Profile, Merchant Center"],
            ["Gemini", "Grounding with Google Search", "Same as Google Search"],
            ["ChatGPT search", "OAI-SearchBot plus third-party search providers", "Allow OAI-SearchBot; GPTBot is a separate training decision"],
            ["Microsoft Copilot", "Bing's crawl and index", "Bingbot access, Bing Webmaster Tools, IndexNow"],
            ["Perplexity", "PerplexityBot index and user-triggered fetches", "Allow PerplexityBot"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "**UAE fact.** StatCounter's September 2026 data for the UAE (all platforms) gives Google 93.47% of search engine referrals, Bing 3.96%, Yandex 1.8% and Yahoo! 0.37%. StatCounter measures referrals from classic search engines and does not include ChatGPT or Perplexity, but the message is clear: for UAE businesses, Google indexability is the foundation of AI visibility. Crawler-by-crawler rules are in our [[/blogs/ai-crawlers-robots-txt|AI crawlers and robots.txt guide]].",
        },
      },
      {
        heading: "Why AI search matters for UAE businesses now",
        body: [
          "**UAE facts.** UAE residents are among the heaviest users of generative AI in the world. Microsoft's AI Economy Institute estimates that 70.1% of the UAE's working-age population used a generative AI product in Q1 2026, the highest share globally, against a global figure of 17.8% ([[https://blogs.microsoft.com/on-the-issues/2026/05/07/the-state-of-global-ai-diffusion-in-2026/|Microsoft]]). DataReportal puts internet penetration at 99% ([[https://datareportal.com/reports/digital-2026-united-arab-emirates|Digital 2026: UAE]]). A Deloitte survey of 2,000 consumers in the UAE and Saudi Arabia found 58% had used generative AI (reported by Consultancy-me).",
          "Those figures describe usage, not purchase behaviour. Nobody has published reliable UAE data on how many buying decisions now start in an AI assistant, so we do not quote one. What we can say is that when a resident asks Google or ChatGPT 'which clinics in Abu Dhabi offer physiotherapy on weekends' or 'how does freehold ownership work in Dubai', an AI answer increasingly appears before any website, in English or Arabic.",
          "**Our recommendation.** Treat AI search as part of search, not a separate channel with a separate budget. The businesses that benefit are those whose pages already contain the clearest, most specific answers for their market, in the languages their customers use.",
        ],
      },
      {
        heading: "The ZSpace 15-area GEO framework",
        body: [
          "**Answer first:** AI visibility depends on fifteen areas that a business can influence, from basic crawl access to measurement. None of them is a trick. Together they decide whether your pages are eligible, understood, trusted and chosen.",
          "We grouped the areas into four stages. The first three areas decide whether you can be found at all. Areas 4 to 7 decide whether you are understood and worth quoting. Areas 8 to 11 decide how clearly your content and reputation can be read by machines and corroborated by others. Areas 12 to 15 keep it current, accountable and measurable. The framework is our own synthesis of platform documentation; it is not a published standard.",
        ],
        table: {
          headers: ["#", "Area", "What it means", "What a business can influence"],
          rows: [
            ["1", "Crawlability", "Search and AI crawlers can reach your pages", "robots.txt, firewall and CDN bot rules, server errors"],
            ["2", "Indexability", "Pages are in the index and snippet-eligible", "noindex, canonicals, rendering, duplicate pages, sitemaps"],
            ["3", "Search intent", "Pages match the questions buyers actually ask", "Page purpose, question research, answer-first sections"],
            ["4", "Entity clarity", "Systems know exactly who you are", "Names, licence details, Organization data, consistent profiles"],
            ["5", "Topical authority", "You cover your subject in depth", "Content architecture, hubs and supporting pages"],
            ["6", "Original information", "You publish what others do not", "Process detail, comparisons, data, expert views"],
            ["7", "First-party evidence", "Claims are backed by your own proof", "Project records, photos, specifications, dated examples"],
            ["8", "Structured data", "Machine-readable facts match the page", "Organization, LocalBusiness, Article, Product, BreadcrumbList"],
            ["9", "Internal linking", "Related pages connect logically", "Hub-and-spoke links, descriptive anchors, breadcrumbs"],
            ["10", "External authority", "Credible sites reference you", "Earned coverage, associations, partners, citations of your data"],
            ["11", "Brand mentions", "People discuss you consistently", "Reviews, community answers, directory and marketplace profiles"],
            ["12", "Content freshness", "Facts are current and dated", "Review cycles, visible dates, accurate sitemap lastmod"],
            ["13", "Author and reviewer signals", "Readers can see who wrote and checked it", "Bylines, bios, reviewer credits for specialist content"],
            ["14", "Multimedia", "Images and video carry real information", "Original photos, alt text, captions, video with transcripts"],
            ["15", "Measurement", "You can see what AI search sends you", "Search Console, Bing Webmaster Tools, analytics, manual checks"],
          ],
        },
      },
      {
        heading: "Areas 1 to 3: crawlability, indexability and search intent",
        body: [
          "**1. Crawlability.** If a crawler cannot fetch a page, nothing else matters. The commonest silent failure on UAE sites we review is not robots.txt but bot protection: a CDN or firewall rule that challenges anything that is not a browser. Check that Googlebot, Bingbot, OAI-SearchBot and PerplexityBot receive 200 responses for real pages. Decide training crawlers (GPTBot, Google-Extended) separately; blocking GPTBot does not remove you from ChatGPT search. Our [[/blogs/ai-crawlers-robots-txt|AI crawler guide]] has copy-ready rules.",
          "**2. Indexability.** Google's AI features only use pages that are indexed and snippet-eligible. Check Search Console's page indexing report and Bing's URL inspection. Typical causes of exclusion: a leftover noindex from staging, canonicals pointing to the wrong language version, content that only appears after JavaScript runs, and near-duplicate pages. Google renders JavaScript but says server-side or pre-rendering 'is still a great idea' because not every bot runs it.",
          "**3. Search intent.** AI answers are built around questions. List the 20 to 40 questions buyers ask before they contact you, in English and Arabic, from sales calls, WhatsApp chats and site search. Map each to one page that answers it in the first two sentences of a section. Pages built around keywords ('best fit-out company Dubai') rather than questions ('how long does an office fit-out take in Dubai') tend to contain nothing worth quoting.",
        ],
        checklist: [
          "Search crawlers return 200, not 403 or a challenge page",
          "Important pages indexed in Google and Bing",
          "Content visible in the raw HTML, not only after scripts run",
          "Each priority question mapped to one page and one answer-first section",
        ],
      },
      {
        heading: "Areas 4 to 7: entity clarity, topical authority, original information and evidence",
        body: [
          "**4. Entity clarity.** An entity is a uniquely identifiable thing: your company, a person, a place, a product. AI systems choose between entities as well as pages, and they combine what your site says with what other sources say. When those disagree, answers become vague or wrong. Use one canonical brand name and one description of what you do, who you serve and where. Publish your legal name and licence details on the site. Spell names, places and products the same way every time; Bing's rewritten guidelines reportedly ask for consistent entity names. In Organization markup, Google says sameAs links to 'a page on another website with additional information about your organization' help disambiguation.",
          "**5. Topical authority.** Systems prefer sources that cover a subject in depth rather than a single page among unrelated topics. That is a content architecture question: a hub page per service or topic, supporting pages that answer specific questions, and links between them. A Dubai interior company with one generic 'Services' page and fifty unrelated blog posts has less topical depth than one with a fit-out hub, pages for approvals, timelines and materials, and project write-ups linked from each.",
          "**6. Original information.** Google's May 2025 guidance asks for 'unique, non-commodity content'. The GEO paper found that adding quotations, statistics and source citations raised visibility in its simulated engine. The practical version: publish what only you know. That includes what a service includes and excludes, how pricing works, real timelines, trade-offs between options, and the questions your team answers every week. Cite reputable sources for anything you did not produce, and link them. Source quality matters: an official authority page is a stronger citation than a blog that repeats it.",
          "**7. First-party evidence.** Evidence is proof you hold: dated project records, original photos, specifications, process documents, anonymised data you are allowed to share, and named team members with real roles. It turns a claim ('fast turnaround') into something citable ('we published the typical stages and lead times for each project type'). Never invent figures to fill a gap; an AI answer that repeats a made-up statistic can damage trust when someone checks it.",
        ],
        callout: {
          type: "tip",
          text: "A quick entity test: search your brand name in Google, ChatGPT and Perplexity, in English and Arabic. If any of them describes the wrong services, an old address or confuses you with a similarly named company, fix entity clarity before writing new content.",
        },
      },
      {
        heading: "Areas 8 to 11: structured data, internal linking, external authority and brand mentions",
        body: [
          "**8. Structured data.** Schema markup labels facts for machines: Organization, LocalBusiness, Article, Product, BreadcrumbList. Microsoft says schema 'can label your content as a product, review, FAQ, or event'. Google is clear on the limits: 'Don't mark up content that is not visible to readers of the page', structured data 'must be a true representation of the page content', and Google 'does not guarantee' it will show. Markup is not required for Google's AI features, but it removes ambiguity. Product businesses should also read [[/blogs/ecommerce-product-data-ai-search|product data for AI search]].",
          "**9. Internal linking.** Internal links tell systems which pages are central and how topics relate. Link supporting articles up to the service hub with descriptive anchors, link the hub down to each supporting page, and add breadcrumbs. Avoid orphan pages: a page with no internal links pointing to it is easy for crawlers to miss and hard to interpret.",
          "**10. External authority.** Credible references from other sites still matter: trade associations, chambers of commerce, industry publications, partner pages and journalists citing your data. Pew Research Center found that .gov sites made up 6% of AI-summary sources against 2% of standard results in its US sample, which suggests authoritative sources are favoured. Earn references with useful material; do not buy them.",
          "**11. Brand mentions.** AI systems also learn about you from unlinked mentions: reviews, community answers, directory and marketplace listings, and social profiles. Pew found Wikipedia, YouTube and Reddit were the most cited sources in Google AI summaries (15% of sources combined) in its US data. You cannot control those platforms, but you can keep your own profiles complete and consistent, respond to reviews and answer questions where your customers actually ask them. Manufactured mentions are a poor investment.",
        ],
      },
      {
        heading: "Areas 12 to 15: freshness, authors, multimedia and measurement",
        body: [
          "**12. Content freshness.** Show a published date and a 'last reviewed' date on pages with time-sensitive facts, and change them only when the content changes. Google uses sitemap lastmod values only if they are 'consistently and verifiably accurate' (Google Search Central, sitemaps documentation). Prices, regulations and procedures in the UAE change often; set a review cycle for pages that mention them.",
          "**13. Author and reviewer signals.** Google's helpful content guidance asks who created the content, how and why, and says that of the E-E-A-T aspects 'trust is most important'. Add bylines with short bios and real roles. For specialist content in health, finance, property law or engineering, show who reviewed it and their qualification, and link to the regulator for anything that is advice.",
          "**14. Multimedia.** Google's May 2025 guidance recommends high-quality images and video to support multimodal search. Use original photos of real projects, products and premises rather than stock images, write alt text that describes what the image shows, and add transcripts or summaries to video. Do not put key information only in images or PDFs; Microsoft warns that image-only and PDF-only content is harder for AI systems to use.",
          "**15. Measurement.** Google includes AI Overviews and AI Mode traffic in the Web search type of Search Console's Performance report; there is no separate AI report there. Add Bing Webmaster Tools, track referrals from assistants such as chatgpt.com and perplexity.ai in analytics, and run a monthly manual check of priority questions in each assistant. Our guide to [[/blogs/ai-search-traffic-tracking|measuring AI search traffic]] covers the setup.",
        ],
      },
      {
        heading: "GEO Readiness Checklist for UAE Businesses",
        body: [
          "**Answer first:** score each of the 15 areas from 0 to 5 using the descriptors below, add the scores for a total out of 75, and fix the lowest-scoring areas in framework order. Areas 1 and 2 cap everything else: a score of 0 there means AI search cannot use your site at all.",
          "Use 1, 2 and 4 for states between the descriptors. Score honestly from evidence (Search Console, server logs, live searches), not from what the agency or team believes is in place.",
        ],
        table: {
          headers: ["Area", "0: missing", "3: partial", "5: strong"],
          rows: [
            ["1. Crawlability", "Search or AI search crawlers blocked or challenged", "Allowed in robots.txt; firewall rules unchecked", "Logs confirm Googlebot, Bingbot, OAI-SearchBot, PerplexityBot fetch key pages"],
            ["2. Indexability", "Key pages not indexed or set to noindex", "Most pages indexed; canonicals or language versions inconsistent", "All priority pages indexed in Google and Bing; HTML contains full content"],
            ["3. Search intent", "Pages built around keywords, not questions", "Main questions answered somewhere, buried in long copy", "Every priority question in English and Arabic has an answer-first section"],
            ["4. Entity clarity", "Name, address or services differ across site and profiles", "Consistent on site; directories and profiles out of date", "Brand, legal name, licence, Arabic name, locations and services agree everywhere"],
            ["5. Topical authority", "Single generic services page", "Service pages exist but no supporting content", "Hub per service with linked supporting pages and projects"],
            ["6. Original information", "Copy restates what competitors say", "Some process or pricing detail", "Scope, pricing logic, timelines, trade-offs and expert views published"],
            ["7. First-party evidence", "No proof beyond claims", "Some projects or testimonials, undated", "Dated projects, original photos, specifications, named team"],
            ["8. Structured data", "None, or markup that contradicts the page", "Organization only", "Organization, LocalBusiness, Article, Product, BreadcrumbList matching visible content"],
            ["9. Internal linking", "Orphan pages; generic 'read more' anchors", "Navigation links only", "Hub-and-spoke links with descriptive anchors and breadcrumbs"],
            ["10. External authority", "No credible references", "Some directory listings", "Earned references from associations, media or partners"],
            ["11. Brand mentions", "Profiles missing or contradictory", "Main profiles exist; reviews unanswered", "Complete profiles, reviews answered, consistent descriptions"],
            ["12. Content freshness", "No dates; outdated facts", "Dates shown but no review cycle", "Visible review dates, scheduled reviews, accurate lastmod"],
            ["13. Author and reviewer signals", "Anonymous content", "Company byline only", "Named authors with bios; specialist reviewers where relevant"],
            ["14. Multimedia", "Stock images; key facts in images or PDFs", "Some original images, weak alt text", "Original images and video with alt text, captions and transcripts"],
            ["15. Measurement", "No Search Console or Bing Webmaster Tools", "Search Console only", "Search Console, Bing, AI referrals in analytics, monthly answer log"],
          ],
        },
      },
      {
        heading: "How to interpret your GEO readiness score",
        body: [
          "The bands below are our working guide for prioritising effort. They are not a benchmark and do not predict citations; they tell you where the next unit of effort is likely to matter most.",
        ],
        table: {
          headers: ["Total (out of 75)", "Readiness", "What to do next"],
          rows: [
            ["0–25", "Not ready", "Fix areas 1, 2 and 4 first. Content work will not pay off until pages are reachable, indexed and clearly attributed."],
            ["26–45", "Foundations partly in place", "Rewrite priority pages answer-first, add first-party evidence, align entity details in English and Arabic."],
            ["46–60", "Competitive", "Build topical hubs, earn external references, add author and reviewer signals, measure monthly."],
            ["61–75", "Strong", "Maintain: review dates, publish original material regularly, monitor answers and fix errors in third-party profiles."],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Any score of 0 or 1 in areas 1, 2 or 4 overrides the total. A site scoring 55 with a blocked crawler is, in practice, not ready.",
        },
      },
      {
        heading: "UAE-specific considerations for GEO",
        body: [
          "**Arabic and English versions.** With AI Overviews in Arabic since May 2025 and AI Mode in Arabic since October 2025, Arabic queries can produce AI answers with cited sources. If your buyers search in Arabic, an Arabic page gives the system something to cite; an English-only site cannot be the source of an Arabic answer unless the system translates. Each language version needs its own canonical, reciprocal hreflang links (ar-AE, en-AE and x-default) and properly written copy. Google's spam policies list scaled content produced through 'automated transformations like synonymizing, translating' without added value, so bulk machine-translated Arabic pages are a risk. See [[/blogs/arabic-seo-uae|Arabic SEO in the UAE]] and [[/blogs/multilingual-website-development-uae|multilingual website development]] for the details.",
          "**Dubai and Abu Dhabi relevance.** Location matters to many queries, and the two emirates differ in regulators, procedures and vocabulary. Create location pages only where your offer genuinely differs by emirate: different teams, approvals, delivery times or service areas. Swapping the city name on otherwise identical pages is doorway abuse under Google's spam policies, which list 'pages targeted at specific regions or cities that funnel users to one page'.",
          "**Local entities and names.** Many UAE businesses operate under several names: a brand, a trade licence name, sometimes a free zone entity (for example an FZ-LLC or FZE) and a separate mainland LLC, plus an Arabic name. AI systems can treat these as different entities. Publish the relationship clearly on the About and Contact pages, use the legal name and brand name consistently in Organization markup (name, legalName and alternateName), and make your Google Business Profile match the signage and website. Google says local results are 'mainly based on' relevance, distance and prominence, and its May 2025 AI search post advises keeping Business Profile details up to date.",
          "**Regional terminology as entity vocabulary.** UAE buyers use local terms that national or global content rarely explains: 'freehold' (ownership in designated areas), 'Ejari' (Dubai's tenancy contract registration), 'DEWA' (Dubai Electricity and Water Authority), 'Emirates ID' (the national identity card), and emirate-specific equivalents such as Abu Dhabi's Tawtheeq tenancy registration. When these terms are relevant to your service, use them precisely, define them once on the page, and link to the issuing authority. That makes your page a clear match for the local question and a better source than a generic article.",
          "**GCC context.** Many UAE businesses also serve Saudi Arabia and the wider GCC. Keep one entity description across markets, separate country pages only where offer, pricing, regulation or language genuinely differ, and use region codes in hreflang (for example ar-SA) only for real regional versions. See [[/blogs/saudi-website-localization|Saudi website localisation]] and [[/blogs/gcc-digital-transformation|GCC digital transformation]].",
        ],
      },
      {
        heading: "Hypothetical UAE examples: what GEO looks like in practice",
        body: [
          "The four examples below are **hypothetical**. They show how the framework applies to common UAE business types; they are not ZSpace clients and contain no performance figures.",
          "**A Dubai property brokerage (hypothetical).** Its listing pages copy portal descriptions, so they add nothing an AI system cannot find elsewhere. Better: area guides written by named agents who work those communities, answering buyer questions (what freehold means for that area, the steps of a purchase, what Ejari registration involves for landlords) and linking to the Dubai Land Department for official fees rather than restating figures that change. Entity work: the brokerage's RERA-registered trade name, brand name and agent names match across the site, portal profiles and Google Business Profile.",
          "**An Abu Dhabi clinic (hypothetical, no medical advice).** Its service pages list treatments with no information about who provides them. Better: a page per service describing what the appointment involves, who it is for, preparation, opening hours and booking, with named clinicians, their roles and licensing shown, and a clinician credited as reviewer. Medical content should be reviewed by licensed professionals and avoid outcome promises. Arabic and English pages use the same clinic name as the Department of Health licence and the Business Profile.",
          "**A UAE ecommerce brand (hypothetical).** Products sell on its own store and on marketplaces with inconsistent titles and specifications. Better: one product data source feeding the site, Merchant Center and marketplaces; complete attributes (size, material, compatibility, warranty, delivery areas by emirate); Product markup that matches the visible page; and Arabic product information, which UAE consumer protection rules require UAE-registered ecommerce businesses to provide ([[https://u.ae/en/information-and-services/justice-safety-and-the-law/consumer-protection|u.ae]]).",
          "**A B2B logistics firm (hypothetical).** It operates a free zone entity and a mainland entity with different names, and its site has one 'Services' page. Better: an About page explaining both entities; capability pages for customs clearance, warehousing and GCC road freight, each with scope, documents required, typical process stages and coverage tables; named operations leads; and case write-ups with dates. Lead capture follows the patterns in [[/blogs/b2b-lead-generation-website-uae|B2B lead generation websites for UAE companies]].",
        ],
      },
      {
        heading: "What GEO cannot guarantee",
        body: [
          "**Answer first:** GEO cannot guarantee citations, rankings, mentions or traffic in any AI search product. It improves eligibility and the odds of being chosen. Answers vary by wording, user, location and time, and every platform changes its systems without notice.",
          "**The research is promising but limited.** The original GEO paper (Aggarwal et al., KDD 2024) reported that GEO methods 'can boost visibility by up to 40%' in generative engine responses. Read the caveats: the tests used a research benchmark and a simulated engine built on gpt-3.5-turbo and the top five Google results; effects 'vary across domains'; adding citations raised visibility for lower-ranked sources but cut it by 30.3% for top-ranked ones; and the study measured share of the generated answer, not traffic or sales. It predates AI Mode and current ChatGPT search.",
          "**Fewer clicks is a real possibility.** Pew Research Center analysed browsing data from 900 US adults in March 2025. Users clicked a traditional search result on 8% of visits where an AI summary appeared, against 15% where none appeared, and clicked a link inside the summary on just 1% of visits. That is US data only; no comparable UAE study has been published. Google says clicks from AI Overviews tend to be 'higher quality', so measure enquiries and sales, not only visits.",
        ],
        table: {
          headers: ["Myth", "What the evidence says"],
          rows: [
            ["llms.txt improves AI rankings", "Google says no AI text files are needed for its AI features. John Mueller said none of the AI services had said they use llms.txt and compared it to the keywords meta tag. See our [[/blogs/llms-txt|llms.txt guide]]."],
            ["FAQ schema earns rich results", "Since August 2023 Google shows FAQ rich results only for well-known, authoritative government and health websites. FAQ content can still help readers and parsing."],
            ["You need special 'AI files' or markup", "Google: 'You don't need to create new machine readable files, AI text files, or markup.'"],
            ["Repeating keywords helps AI pick you", "In the GEO paper keyword stuffing scored below the baseline. Bing's rewritten guidelines reportedly add a section on keyword stuffing and artificially engineered language."],
            ["Mass AI-written pages scale visibility", "Google's spam policies list generating many pages with AI 'without adding value for users' as scaled content abuse."],
            ["An agency can guarantee ChatGPT recommendations", "No platform sells or guarantees organic citations."],
          ],
        },
      },
      {
        heading: "Common GEO mistakes UAE businesses make",
        body: [
          "**Blocking the wrong crawler.** Blocking all 'AI bots' removes you from ChatGPT search and Perplexity, while blocking only GPTBot does not stop ChatGPT search. Decide training and search access separately.",
          "**Three names, one business.** Brand, trade licence and free zone names used interchangeably, with a different Arabic name on Google Business Profile, confuse every system that tries to describe you.",
          "**City-swap location pages.** Fifteen 'Fit-Out in [Emirate]' pages with identical copy add risk, not reach.",
          "**Machine-translated Arabic.** Unreviewed translation reads badly to Arabic speakers and can fall under Google's scaled content policy.",
          "**Facts in images and PDFs.** Price lists, brochures and certificates as image or PDF only are harder for AI systems to use.",
          "**Buying GEO tools before fixing basics.** Monitoring dashboards cannot help a site that is not indexed.",
          "**Undated, unsourced claims.** 'Leading', 'trusted' and 'number one' give an AI system nothing to quote.",
        ],
      },
      {
        heading: "A 30/60/90-day GEO implementation roadmap",
        body: [
          "This is our recommended sequence for a typical UAE service or ecommerce business with an existing website. Each phase ends with a measurement so the next phase is based on evidence.",
        ],
        table: {
          headers: ["Phase", "Focus", "Deliverables", "Measure"],
          rows: [
            ["Days 1–30: foundations", "Areas 1, 2, 4, 15", "Crawler and firewall audit; indexing fixes; Search Console and Bing Webmaster Tools; entity sheet (brand, legal, licence, Arabic name, locations); Business Profile aligned; GEO readiness score baseline", "Pages indexed; crawler 200s; baseline AI referrals; manual answer log for 20 questions"],
            ["Days 31–60: content that answers", "Areas 3, 6, 7, 8, 13", "Question map in English and Arabic; top 5 to 10 service or product pages rewritten answer-first with evidence; Organization, LocalBusiness, Article and BreadcrumbList markup; author and reviewer bios", "Impressions and clicks on rewritten pages; enquiries by landing page"],
            ["Days 61–90: authority and depth", "Areas 5, 9, 10, 11, 12, 14", "One topical hub with supporting pages; internal linking pass; original photos and video; review cycle; profile clean-up; one original resource worth citing", "Citations in manual checks; referrals from assistants; second readiness score"],
          ],
        },
        checklist: [
          "Name one owner for the programme and one reviewer for Arabic content",
          "Keep an entity sheet as the single source of truth for names and details",
          "Record answers in each assistant with the date and exact wording",
          "Rescore the 15 areas at day 90 and set the next quarter's priorities",
        ],
      },
      {
        heading: "Where to go next in this series",
        body: [
          "This pillar sets the strategy. The supporting guides cover implementation:",
          "**Technical build:** [[/blogs/ai-search-ready-website-uae|making a UAE business website ready for AI search]], with a prioritised audit checklist. **Languages:** [[/blogs/arabic-seo-uae|Arabic SEO for UAE businesses]] and [[/blogs/multilingual-website-development-uae|multilingual website development in the UAE]]. **Conversion:** [[/blogs/landing-page-design-uae|landing page design for UAE businesses]] and [[/blogs/b2b-lead-generation-website-uae|B2B lead generation websites]], so the visits AI search does send turn into enquiries. **Choosing help:** [[/blogs/web-development-company-dubai|how to choose a web development company in Dubai]].",
          "**Generic depth:** for platform-neutral guidance that applies outside the UAE, read [[/blogs/ai-search-visibility|AI search visibility]], [[/blogs/geo-vs-seo|GEO vs SEO]], [[/blogs/ai-crawlers-robots-txt|AI crawlers and robots.txt]], [[/blogs/llms-txt|llms.txt]], [[/blogs/ai-search-traffic-tracking|AI search traffic tracking]] and [[/blogs/ecommerce-product-data-ai-search|product data for AI search]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Google: [[https://developers.google.com/search/docs/appearance/ai-features|AI features and your website]]; [[https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search|Top ways to ensure your content performs well in Google's AI experiences (May 2025)]]; [[https://developers.google.com/search/docs/fundamentals/creating-helpful-content|Creating helpful, reliable, people-first content]]; [[https://developers.google.com/search/docs/fundamentals/using-gen-ai-content|Using generative AI content]]; [[https://developers.google.com/search/docs/essentials/spam-policies|Spam policies]]; [[https://developers.google.com/search/docs/appearance/structured-data/sd-policies|Structured data general guidelines]]; [[https://developers.google.com/search/blog/2023/08/howto-faq-changes|FAQ and HowTo changes (Aug 2023)]]; [[https://developers.google.com/search/docs/appearance/structured-data/organization|Organization markup]]; [[https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics|JavaScript SEO basics]]; [[https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap|Build a sitemap]]; [[https://support.google.com/business/answer/7091|Google Business Profile local ranking]]; [[https://ai.google.dev/gemini-api/docs/google-search|Gemini grounding with Google Search]]; [[https://blog.google/products/search/ai-overview-expansion-may-2025-update/|AI Overviews expansion incl. Arabic (May 2025)]]; [[https://blog.google/intl/ar-mena/products/explore-get-answers/introducing-ai-mode-in-arabic/|AI Mode in Arabic (Oct 2025)]].",
          "Other platforms: [[https://developers.openai.com/api/docs/bots|OpenAI crawlers]]; [[https://docs.perplexity.ai/guides/bots|Perplexity crawlers]]; [[https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers|Microsoft: optimizing content for AI search answers (Oct 2025)]]; [[https://www.indexnow.org/documentation|IndexNow documentation]]; [[https://llmstxt.org/|llms.txt proposal]]; [[https://www.searchenginejournal.com/google-says-llms-txt-comparable-to-keywords-meta-tag/544804/|Search Engine Journal on John Mueller and llms.txt]].",
          "Research and data: [[https://arxiv.org/abs/2311.09735|Aggarwal et al., GEO: Generative Engine Optimization (KDD 2024)]]; [[https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/|Pew Research Center, July 2025]]; [[https://gs.statcounter.com/search-engine-market-share/all/united-arab-emirates|StatCounter UAE search engine share]]; [[https://gulfnews.com/business/markets/googles-ai-mode-launched-in-uae-mena-region-1.500244128|Gulf News on AI Mode in the UAE]]; [[https://blogs.microsoft.com/on-the-issues/2026/05/07/the-state-of-global-ai-diffusion-in-2026/|Microsoft AI Economy Institute]]; [[https://datareportal.com/reports/digital-2026-united-arab-emirates|DataReportal Digital 2026: UAE]]; [[https://www.consultancy-me.com/news/11592/deloitte-consumers-in-uae-and-ksa-driving-surge-in-ai-adoption-and-social-commerce|Deloitte via Consultancy-me]]; [[https://u.ae/en/information-and-services/justice-safety-and-the-law/consumer-protection|u.ae consumer protection]].",
          "Platform documentation changes frequently; quotes reflect pages checked on 8 October 2026. Bing guideline details are as reported by Search Engine Journal. No figure here is ZSpace client data.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "GEO for a UAE business is mostly disciplined SEO with three extra emphases: answers that stand on their own, evidence only you can provide, and an identity that is unmistakable in English and Arabic. Fix crawl access and indexing first, align your names and licence details everywhere, rewrite priority pages to answer real questions, and measure what AI search actually sends you. Score yourself on the 15 areas now and again in 90 days; the gaps will tell you where to spend next.",
        ],
        cta: {
          title: "Want a second view on your AI search readiness?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with UAE and global businesses. We can review crawl access, indexing, entity details and page structure, then implement fixes through our [[/services/website-development|website development]], [[/services/ui-ux-design|UI/UX design]] and [[/services/cro-audit|CRO audit]] services.",
        },
      },
    ],
  },

  // ---------------------------------------- AI SEARCH READY WEBSITE UAE
  {
    slug: "ai-search-ready-website-uae",
    title: "How to Make a UAE Business Website Ready for AI Search",
    seoTitle: "AI Search Ready Website Checklist for UAE Businesses",
    excerpt:
      "A practical AI search website checklist for UAE businesses: crawlers, rendering, schema, hreflang, page structure and a prioritised audit table.",
    category: "Web Development",
    banner: "auditsteps",
    sceneKind: "serp",
    bannerAlt: "A step-by-step audit of a UAE business website covering crawl access, rendering, indexing, structure, schema and localisation",
    date: "2026-10-08",
    readingTime: "19 min read",
    relatedServiceSlugs: ["website-development", "ui-ux-design", "cro-audit"],
    relatedIndustrySlugs: ["professional-services", "real-estate", "ecommerce", "b2b-enterprise"],
    relatedSlugs: ["geo-uae", "ai-crawlers-robots-txt", "seo-friendly-website-development"],
    faqs: [
      { q: "What makes a website ready for AI search?", a: "A website is ready for AI search when search and AI crawlers can fetch its pages, the important content is in server-rendered HTML and indexed, each page answers specific questions near the top of each section, structured data matches what visitors see, and business details are consistent across the site and external profiles. Google says no special AI files or markup are needed for its AI features." },
      { q: "Which AI crawlers should a UAE business allow in robots.txt?", a: "For visibility, allow the search crawlers: Googlebot, Bingbot, OAI-SearchBot for ChatGPT search and PerplexityBot. Training crawlers such as GPTBot and Google-Extended are a separate business decision; blocking GPTBot does not remove you from ChatGPT search. Also check firewall and CDN bot settings, which often block crawlers even when robots.txt allows them." },
      { q: "Does JavaScript stop AI search from reading my website?", a: "It can. Google renders JavaScript, but its documentation says server-side or pre-rendering is still a great idea because some bots cannot run it. If prices, service details or FAQs only appear after scripts run, some crawlers may see an empty page. Check the raw HTML of your key pages and server-render the content that matters." },
      { q: "Should I add FAQ schema for AI search?", a: "Add visible FAQ content where it genuinely helps readers. Since August 2023, Google shows FAQ rich results only for well-known, authoritative government and health websites, so most businesses will not get the rich result. FAQPage markup may still help machines parse questions, and Microsoft mentions FAQ schema, but it must match visible content and is not a ranking shortcut." },
      { q: "Do I need separate pages for Dubai and Abu Dhabi?", a: "Only if your offer genuinely differs, for example different teams, approvals, delivery times or service areas. Google's spam policies treat pages targeted at specific regions or cities that funnel users to one page as doorway abuse. One strong service page that lists the emirates you serve is better than several near-identical city pages." },
      { q: "How should I set up hreflang for an Arabic and English UAE website?", a: "Give each language version its own URL, such as /en/ and /ar/, and add hreflang annotations on every version that list itself and all alternates: en-AE, ar-AE and an x-default fallback. Google ignores the tags if pages do not link back to each other. Each version should have a self-referencing canonical in the same language." },
      { q: "Does nosnippet affect AI Overviews?", a: "Yes. Google lists nosnippet, data-nosnippet, max-snippet and noindex as the controls for how content appears in its AI features. A page with nosnippet cannot be used as a snippet, and text inside data-nosnippet elements is excluded. Use these deliberately, for example on legal disclaimers, not across whole templates by accident." },
      { q: "How long does it take to make a website ready for AI search?", a: "Most technical fixes (crawler access, indexing, rendering, canonicals, schema and hreflang) can be made in a few weeks on an existing site without a rebuild. Rewriting priority service pages and adding evidence takes longer. Recrawling and reindexing then take days to weeks, depending on the platform and how often your site is crawled." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**To make a UAE business website ready for AI search, let search and AI search crawlers fetch it, serve key content as server-rendered HTML, keep priority pages indexed and snippet-eligible, structure each page around direct answers, add structured data that matches visible content, and publish consistent business details in English and Arabic.** No special AI files are required.",
          "This is the implementation guide in our UAE AI search series. For the strategy, the 15-area framework and the 75-point readiness score, start with the pillar: [[/blogs/geo-uae|GEO for UAE businesses]]. Here we cover what to check and fix on the website itself, in priority order, with examples of good and bad page structure and a full audit table.",
          "Google's documentation is the anchor for most of this. It says a page must be 'indexed and eligible to be shown in Google Search with a snippet' to appear in AI Overviews or AI Mode, and that 'there are no additional requirements'. With Google at 93.47% of UAE search engine referrals in September 2026 (StatCounter), getting the Google basics right covers most of the ground, and the same work serves ChatGPT, Copilot and Perplexity.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Allow Googlebot, Bingbot, OAI-SearchBot and PerplexityBot, and check your firewall and CDN do not block them.",
          "Serve important content in the initial HTML; do not rely on client-side JavaScript for prices, services or FAQs.",
          "Keep one canonical URL per page and language, accurate sitemap lastmod dates and no stray noindex or nosnippet.",
          "Write answer-first sections under question-style headings, with tables, definitions and cited sources.",
          "Use Organization, LocalBusiness, BreadcrumbList, Article and Product markup only where it matches visible content.",
          "Publish trade name, legal name, licence number, address, phone and areas served on the site.",
          "Use en-AE, ar-AE and x-default hreflang with reciprocal links; never city-swap location pages.",
        ],
      },
      {
        heading: "What 'AI search ready' means in practice",
        body: [
          "**Answer first:** an AI search ready website passes three gates for every priority page: it is **reachable** by the crawlers that feed AI answers, **readable** as indexed HTML with clear structure, and **selectable** because it answers a specific question with facts other pages lack.",
          "The first two gates are technical and fully in your control, which is why this guide focuses on them. The third depends on content and reputation, covered in the [[/blogs/geo-uae|GEO pillar]] and in our generic guide to [[/blogs/ai-search-visibility|AI search visibility]]. Many UAE sites fail the first gate without knowing it: a bot-protection setting, a JavaScript-only page builder or a staging noindex that survived launch.",
          "**Definition:** in this guide, an AI search crawler is any automated agent that fetches pages to build or refresh an index used in AI-generated answers, such as Googlebot for Google's AI features, OAI-SearchBot for ChatGPT search, Bingbot for Copilot and PerplexityBot for Perplexity.",
        ],
      },
      {
        heading: "Crawlability and robots.txt: which AI crawlers control what",
        body: [
          "**Answer first:** allow the crawlers that power search and answers, decide training crawlers as a separate policy, and confirm in server logs that the allowed crawlers actually receive your pages.",
          "Each vendor separates crawlers by purpose. Blocking a training crawler does not remove you from that vendor's search, and user-triggered fetchers may ignore robots.txt entirely because a person asked for the page. The table reflects each vendor's documentation as of October 2026.",
        ],
        table: {
          headers: ["Crawler", "Operator", "What it controls", "Typical choice"],
          rows: [
            ["Googlebot", "Google", "Google Search, including AI Overviews and AI Mode", "Allow"],
            ["Google-Extended", "Google", "Use of crawled content for training Gemini models and for grounding in Gemini Apps; Google says it does not affect inclusion or ranking in Google Search", "Business decision"],
            ["Bingbot", "Microsoft", "Bing index used by Bing and Copilot", "Allow"],
            ["OAI-SearchBot", "OpenAI", "Surfacing websites in ChatGPT search results", "Allow"],
            ["GPTBot", "OpenAI", "Training of OpenAI foundation models; not search inclusion", "Business decision"],
            ["ChatGPT-User", "OpenAI", "User-initiated fetches in ChatGPT; robots.txt may not apply", "Cannot be relied on to obey robots.txt"],
            ["PerplexityBot", "Perplexity", "Surfacing and linking sites in Perplexity results; not training", "Allow"],
            ["Perplexity-User", "Perplexity", "User-requested fetches; generally ignores robots.txt", "Cannot be relied on to obey robots.txt"],
          ],
        },
        code: {
          label: "Example robots.txt: search allowed, training opted out",
          text: "# Everyone, including Googlebot, Bingbot,\n# OAI-SearchBot and PerplexityBot, uses this group\nUser-agent: *\nDisallow: /cart\nDisallow: /account\nDisallow: /search\n\n# Training opt-out (a business decision)\nUser-agent: GPTBot\nUser-agent: Google-Extended\nDisallow: /\n\nSitemap: https://www.example.ae/sitemap.xml",
        },
        checklist: [
          "Fetch your live /robots.txt and look for blanket Disallow rules under AI user agents",
          "Check CDN, WAF and bot-protection rules; a challenge page blocks crawlers as effectively as robots.txt",
          "Confirm in server logs that Googlebot, Bingbot, OAI-SearchBot and PerplexityBot fetch real pages with 200 responses",
          "Keep important pages outside logins, cookie walls and interstitials",
          "Remember that a named group overrides the wildcard group for that crawler, so repeat any shared Disallow rules in it",
        ],
        callout: {
          type: "note",
          text: "OpenAI says robots.txt changes for its search crawler take about 24 hours to apply. For the full list of AI bots, including Anthropic's, and more robots.txt patterns, see our [[/blogs/ai-crawlers-robots-txt|AI crawlers and robots.txt guide]].",
        },
      },
      {
        heading: "HTML, JavaScript rendering and server-rendered content",
        body: [
          "**Answer first:** the content you want cited should be present in the HTML the server sends, not assembled later by JavaScript in the browser.",
          "Google crawls, renders and indexes in three phases, and rendering happens in a queue where pages 'may stay on this queue for a few seconds, but it can take longer'. Google's own JavaScript SEO page says 'server-side or pre-rendering is still a great idea' because some bots cannot run JavaScript. It does not list which AI crawlers render; the safe assumption is that some do not.",
          "**How to check:** view the page source (not the inspector) or fetch the URL with a command-line tool, and search for a sentence from your main content, your prices and your FAQ answers. If they are missing, a crawler that does not run JavaScript sees an empty template. Common culprits on UAE sites are page builders that load content through scripts, tabs and accordions populated on click, chat widgets that hold the only contact details, and single-page apps without server rendering.",
          "**Fix:** use server-side rendering or static generation for marketing and content pages (frameworks such as Next.js do this by default), keep accordions and tabs in the HTML even when visually collapsed, and avoid hiding key content: Microsoft notes that 'AI systems may not render hidden content'. Our [[/blogs/seo-friendly-website-development|SEO-friendly website development guide]] covers rendering choices in more depth.",
        ],
      },
      {
        heading: "Indexability: noindex, canonicals, sitemaps and snippet controls",
        body: [
          "**Answer first:** every priority page should be indexed, canonical to itself in its own language, listed in an accurate XML sitemap and free of snippet restrictions you did not intend.",
          "**noindex.** A noindex page cannot appear in Google's AI features. Search templates, staging leftovers and plugin settings are the usual sources. Check Search Console's page indexing report and Bing Webmaster Tools.",
          "**nosnippet, data-nosnippet and max-snippet.** Google lists these as the controls for how content appears in its AI features. nosnippet stops a page being used as a snippet; text wrapped in an element with the data-nosnippet attribute is excluded; very short max-snippet values limit what can be quoted. Use them deliberately, for example around legal disclaimers, not across a whole template.",
          "**Canonical URLs.** Google treats redirects and rel=canonical as 'a strong signal' and sitemap inclusion as 'a weak signal', and chooses the canonical itself. For Arabic and English pairs, each version should declare a canonical in its own language; pointing the Arabic page's canonical to the English page tells Google the Arabic version is a duplicate.",
          "**XML sitemap and lastmod.** Google ignores priority and changefreq. It uses lastmod only if it is 'consistently and verifiably' accurate, and it 'should reflect the date and time of the last significant update to the page'. A CMS that stamps every URL with today's date on every build teaches Google to ignore the field. Submit sitemaps to Google Search Console and Bing Webmaster Tools.",
          "**IndexNow.** IndexNow lets you notify participating engines when URLs are 'added, updated, or deleted', and shares submissions with other participating engines. A 200 response 'only indicates that the search engine has received your URL', not that it will be indexed. It is useful for Bing and Copilot freshness.",
        ],
      },
      {
        heading: "Headings, content structure, definitions, tables and citations",
        body: [
          "**Answer first:** structure each page so that any section can be lifted out and still make sense: a descriptive heading, a direct answer in the first one or two sentences, then detail, evidence and a source.",
          "**Headings.** One H1 that states the page's subject. H2s that describe the content beneath them, often as the question a buyer asks. Microsoft calls headings 'chapter titles that define clear content slices'. Avoid headings such as 'Why choose us?' that describe nothing.",
          "**Answer-first paragraphs.** Put the direct answer first, then the qualifications. Microsoft's advice is to 'make answers snippable'. Keep paragraphs short; long walls of text are on Microsoft's list of things to avoid.",
          "**Definitions.** Define your key terms in one sentence the first time they appear, especially local terms such as Ejari, freehold or free zone entity types. A precise definition is one of the easiest passages for an AI answer to use.",
          "**Tables.** Put comparisons, specifications, scope (included and not included), timelines and coverage in HTML tables, not images. Tables make relationships explicit for readers and parsers.",
          "**Citations.** When you state a fact you did not produce, name the source and link to it, ideally the authority itself (a ministry, regulator or standard). The GEO research paper found that citing sources and adding statistics improved visibility in its simulated engine, with caveats discussed in the [[/blogs/geo-uae|pillar]].",
        ],
      },
      {
        heading: "Good vs bad page structure: a service page example",
        body: [
          "The outlines below show the same hypothetical Dubai office fit-out service page built two ways. The first is common; the second gives AI systems and buyers something to use.",
        ],
        code: {
          label: "Bad: keyword-led, unstructured, facts hidden",
          text: "H1  Best Fit-Out Company Dubai | Fit-Out Dubai\nH2  Welcome to Our Company\n    'Leading, trusted, number-one fit-out experts'\nH2  Why Choose Us?\n    (adjectives, no facts)\nH2  Our Services\n    (12 services, one line each, no links)\nH2  Fit-Out Dubai Abu Dhabi Sharjah Ajman\n    (city names repeated for keywords)\n--  Prices in a PDF brochure\n--  Process shown as an image\n--  FAQs loaded by JavaScript on click\n--  No company legal name or licence number",
        },
      },
      {
        heading: "What a well-structured service page looks like",
        body: [
          "The improved version keeps the same service but makes every section answer something specific. Each block can be quoted on its own, and the business behind it is identifiable.",
        ],
        code: {
          label: "Good: answer-first, evidenced, identifiable",
          text: "H1  Office Fit-Out in Dubai\nP   Answer first: what the service is, who it\n    suits, emirates served, how pricing works\nH2  What an office fit-out includes\n    table: included / not included\nH2  How the process works\n    numbered stages, who approves what\nH2  Which approvals a Dubai fit-out needs\n    plain summary, link to the authority\nH2  What drives the cost\n    table of cost factors, no invented prices\nH2  Recent projects\n    dated write-ups, original photos, alt text\nH2  Who leads the work\n    named people, roles, short bios\nH2  Frequently asked questions\n    visible HTML, matches any FAQ markup\nFooter: trade name, legal name, licence no.,\n        address, phone, WhatsApp, hours",
        },
        callout: {
          type: "tip",
          text: "Read each H2 section aloud on its own. If it only makes sense after reading the section above, rewrite its first sentence so it states the subject and the answer.",
        },
      },
      {
        heading: "Schema: which structured data to add, and the rules",
        body: [
          "**Answer first:** add a small set of structured data types that describe your business and pages accurately. Never mark up content visitors cannot see, and do not expect markup alone to earn citations.",
          "Google's rules are explicit: 'Don't mark up content that is not visible to readers of the page', structured data 'must be a true representation of the page content', and Google 'does not guarantee' it will appear in results. Its AI features documentation adds that your structured data should match the visible text. Markup is optional for AI features; its value is removing ambiguity.",
        ],
        table: {
          headers: ["Type", "Where", "Key properties for a UAE business", "Notes"],
          rows: [
            ["Organization", "Home page or About page", "name, legalName, alternateName (Arabic name), url, logo, address, contactPoint, sameAs", "Google says it helps 'disambiguate your organization'; logo at least 112x112px"],
            ["LocalBusiness (or a subtype)", "Location or contact pages for premises customers visit", "name, address, geo, telephone, openingHoursSpecification, areaServed", "Only where there is a real location; must match Google Business Profile"],
            ["BreadcrumbList", "All pages below the home page", "Ordered path matching visible breadcrumbs", "Reinforces site structure"],
            ["Article", "Blog posts and guides", "headline, author (Person), datePublished, dateModified, image", "dateModified should reflect real changes"],
            ["Product", "Product pages", "name, image, description, sku or gtin, brand, offers (price, priceCurrency AED, availability)", "See [[/blogs/product-structured-data-ecommerce|product structured data]]"],
            ["FAQPage", "Pages with visible FAQs", "Question and acceptedAnswer matching on-page text", "FAQ rich results limited to authoritative government and health sites since Aug 2023"],
          ],
        },
      },
      {
        heading: "Entity, author and business information",
        body: [
          "**Answer first:** publish the facts that identify your business and the people behind your content in plain text on the site, and keep them identical everywhere else they appear.",
          "**Business information.** On the About and Contact pages and in the footer, show: trade name (as used on signage and marketing), legal name as on the trade licence, licence number and issuing authority (for example the Department of Economy and Tourism in Dubai or a free zone authority), registered address, phone, WhatsApp number, opening hours and the emirates or areas you serve. If you have a free zone and a mainland entity, explain which does what. Google Business Profile service-area businesses can list up to 20 service areas; keep those consistent with your site.",
          "**Entity information.** Use one canonical company description of one or two sentences and reuse it on LinkedIn, Google Business Profile, directories and marketplaces. In Organization markup, list those profiles in sameAs. Give your Arabic name in alternateName and on the Arabic site, spelled the same way everywhere.",
          "**Author information.** Put a byline on articles with a link to a short bio page: name, role, relevant experience and, for specialist topics, the reviewer and their qualification. Google's helpful content guidance asks 'who' created content and says trust is the most important aspect of E-E-A-T.",
        ],
        checklist: [
          "Trade name, legal name and licence number visible on the site",
          "Address, phone, WhatsApp and hours identical to Google Business Profile",
          "Areas served listed by emirate",
          "One company description reused across profiles",
          "Arabic name spelled consistently on site, profiles and markup",
          "Author bios with roles; reviewers named for specialist content",
        ],
      },
      {
        heading: "Service pages, FAQ content and supporting articles",
        body: [
          "**Service pages** carry the commercial answers: scope, process, pricing logic, timelines, who it is for and not for, evidence and contact. One page per distinct service, not one page listing twelve.",
          "**FAQ content** should answer real questions from sales calls, WhatsApp chats and site search, in plain HTML, on the page the question relates to. Write each answer so it stands alone. Avoid a single site-wide FAQ page with fifty unrelated questions.",
          "**Supporting articles** answer the research questions buyers ask before they are ready to enquire, and link back to the service page with descriptive anchors. Write one article per question cluster, not several overlapping posts that compete with each other.",
          "Conversion still happens on your pages, so make the next step obvious. See [[/blogs/landing-page-design-uae|landing page design for UAE businesses]] and [[/blogs/b2b-lead-generation-website-uae|B2B lead generation websites]].",
        ],
      },
      {
        heading: "How service, location and blog pages should work together",
        body: [
          "**Answer first:** organise content as hubs and spokes. Each service has a hub page. Location pages exist only where the service genuinely differs by emirate. Articles answer specific questions and link back to the hub, and project pages provide evidence to all of them.",
          "**Warning on location pages.** Google's spam policies define doorway abuse as pages 'created to rank for specific, similar search queries' and list 'multiple domain names or pages targeted at specific regions or cities that funnel users to one page'. A Dubai page and an Abu Dhabi page that differ only in the city name are exactly that. Create a location page only with content that is genuinely local: the team that serves that emirate, the approvals or regulators that apply there, delivery or response times, local projects and the address customers visit.",
        ],
        code: {
          label: "Hub-and-spoke content architecture",
          text: "              [Service hub]\n          /services/office-fit-out\n           /        |         \\\n          v         v          v\n  [Dubai page] [Abu Dhabi]  [Articles]\n  real local   real local   answer one\n  differences  differences  question each\n          \\         |          /\n           v        v         v\n         [Project write-ups: evidence]\n\nLinks: hub <-> each spoke, articles -> hub,\nprojects -> hub and relevant location page",
        },
      },
      {
        heading: "Images, multimedia, page speed and mobile UX",
        body: [
          "**Images and alt text.** Use original photos of your premises, team, projects and products. Write alt text that describes what the image shows ('Reception area after fit-out, Business Bay office, 2026'), not a keyword list. Never put prices, specifications or certificates only in an image. Google's May 2025 AI search guidance recommends high-quality images and video for multimodal search.",
          "**Page speed.** Google's Core Web Vitals thresholds for a 'good' experience are Largest Contentful Paint within 2.5 seconds, Interaction to Next Paint within 200 milliseconds and Cumulative Layout Shift of 0.1 or less; INP replaced FID in March 2024. Google lists page experience among its AI features best practices. Our [[/blogs/website-performance-optimization|website performance optimisation guide]] covers the fixes.",
          "**Mobile UX.** DataReportal counts 23.0 million mobile connections in the UAE, 202% of the population. Check that tables scroll rather than break, that tap targets are large enough, that the WhatsApp and call buttons work and that pop-ups do not cover the content on small screens.",
          "**Accessibility.** Accessible markup (real headings, labelled forms, alt text, sufficient contrast) is also machine-readable markup. u.ae meets WCAG 2.1 and 2.2 AA as a minimum; we found no statutory WCAG mandate for private UAE websites, but it is good practice. See our [[/blogs/website-accessibility-guide|website accessibility guide]].",
        ],
      },
      {
        heading: "UAE localisation: Arabic and English URLs, hreflang and RTL",
        body: [
          "**Answer first:** give each language its own URL, link the versions with reciprocal hreflang annotations, write the Arabic properly, and build the right-to-left layout as a first-class version rather than a mirrored afterthought.",
          "**URLs.** Use language folders on one domain, such as /en/ and /ar/, unless you have a reason for separate domains. Keep slugs readable; Arabic-script slugs work but are long when percent-encoded in links and logs, so many sites use transliterated or English slugs under /ar/. Choose one approach and keep it.",
          "**hreflang.** Google requires that 'each language version must list itself as well as all other language versions', and 'if two pages don't both point to each other, the tags will be ignored'. Use ISO 639-1 language codes with an optional region (ar-AE, en-AE) and add x-default for users who match neither. A country code on its own is invalid.",
          "**RTL basics.** Set dir='rtl' and lang='ar' on the Arabic document, use CSS logical properties so layouts flip correctly, check icons and arrows that imply direction, and test forms, phone numbers and mixed Arabic-English text. Depth is in [[/blogs/multilingual-website-development-uae|multilingual website development in the UAE]] and [[/blogs/arabic-seo-uae|Arabic SEO for UAE businesses]].",
          "**Regional terminology.** Use the terms UAE customers actually search: emirate names, community names, and service vocabulary such as Ejari, DEWA, Emirates ID or trade licence where relevant, in both languages. UAE consumer protection rules require UAE-registered ecommerce businesses to provide product or service information in Arabic, so ecommerce sites should plan Arabic product content regardless of search.",
        ],
        code: {
          label: "hreflang on both /en/ and /ar/ versions",
          text: "<link rel='alternate' hreflang='en-AE'\n  href='https://www.example.ae/en/office-fit-out/'>\n<link rel='alternate' hreflang='ar-AE'\n  href='https://www.example.ae/ar/office-fit-out/'>\n<link rel='alternate' hreflang='x-default'\n  href='https://www.example.ae/en/office-fit-out/'>\n\n<!-- each version: canonical to itself -->\n<link rel='canonical'\n  href='https://www.example.ae/ar/office-fit-out/'>",
        },
      },
      {
        heading: "AI Search Website Audit Checklist",
        body: [
          "**Answer first:** work through this table from Critical down. Critical items stop AI search using your site at all; High items decide whether pages are understood; Medium and Low items improve quality and maintenance. Priorities are our recommendation.",
        ],
        table: {
          headers: ["Item", "Priority", "How to check", "Fix"],
          rows: [
            ["Search crawlers allowed in robots.txt", "Critical", "Read /robots.txt; Search Console robots.txt report", "Remove Disallow rules for Googlebot, Bingbot, OAI-SearchBot, PerplexityBot"],
            ["Firewall and CDN not blocking crawlers", "Critical", "Server or CDN logs for crawler user agents and status codes", "Allowlist verified search crawlers; disable challenges for them"],
            ["Priority pages indexed", "Critical", "Search Console page indexing; Bing URL inspection", "Remove noindex, fix errors, add internal links"],
            ["Content in initial HTML", "Critical", "View source; search for key sentences and prices", "Server-side render or statically generate"],
            ["No unintended nosnippet or data-nosnippet", "Critical", "Search templates and HTML for robots meta and data-nosnippet", "Limit to content that genuinely needs it"],
            ["Correct canonicals per language", "High", "Inspect canonical tags on /en/ and /ar/ pages", "Self-referencing canonical in each language"],
            ["Reciprocal hreflang with x-default", "High", "Check tags on every version; validate return links", "Add en-AE, ar-AE and x-default on all versions"],
            ["Business details visible and consistent", "High", "Compare site, Google Business Profile and directories", "Publish trade name, legal name, licence, address, phone, areas served"],
            ["Answer-first service pages", "High", "Read the first two sentences under each H2", "Rewrite to state the answer, then detail"],
            ["Organization and LocalBusiness markup", "High", "Rich Results Test; Schema Markup Validator", "Add markup matching visible details; sameAs to profiles"],
            ["Location pages genuinely local", "High", "Compare Dubai and Abu Dhabi pages side by side", "Merge city-swap pages or add real local content"],
            ["Key facts not in images or PDFs", "High", "List prices, specs and certificates and where they live", "Move into HTML text and tables"],
            ["XML sitemap with accurate lastmod", "Medium", "Open sitemap; compare lastmod with real edit dates", "Generate lastmod from content changes only"],
            ["BreadcrumbList, Article, Product markup", "Medium", "Validator; compare with visible content", "Add types where they match the page"],
            ["Internal links between hubs and spokes", "Medium", "Crawl the site; find orphan pages", "Link articles to hubs with descriptive anchors"],
            ["Author bios and reviewer credits", "Medium", "Check articles for bylines and bio pages", "Add bylines, bios and reviewer names"],
            ["Core Web Vitals in the good range", "Medium", "Search Console Core Web Vitals; PageSpeed Insights", "Fix LCP images, heavy scripts, layout shifts"],
            ["Mobile layout of tables and CTAs", "Medium", "Test on real phones, Arabic and English", "Responsive tables, visible WhatsApp and call buttons"],
            ["Images have descriptive alt text", "Low", "Crawl for missing or keyword-stuffed alt", "Describe what each image shows"],
            ["Bing Webmaster Tools and IndexNow", "Low", "Check verification and submissions", "Verify site; enable IndexNow in CMS or CDN"],
            ["llms.txt", "Low", "Check whether one exists", "Optional; not needed for Google AI features"],
            ["AI referral tracking", "Low", "Analytics referrals from chatgpt.com, perplexity.ai, copilot", "Create a channel group and monthly report"],
          ],
        },
      },
      {
        heading: "Common mistakes on UAE business websites",
        body: [
          "**Blocking every 'AI bot' with a copied snippet.** It removes you from ChatGPT search and Perplexity while doing nothing about user-triggered fetchers.",
          "**Bot protection set to maximum.** Firewall challenges block crawlers silently; robots.txt looks fine but nothing gets fetched.",
          "**Arabic canonical pointing to English.** This tells Google the Arabic page is a duplicate, so it may never be indexed.",
          "**A JavaScript page builder for everything.** Prices and FAQs that load on click may be invisible to some crawlers.",
          "**FAQ markup with no visible FAQs.** It breaks Google's structured data rules and earns nothing.",
          "**City-swap pages for each emirate.** Doorway risk, and nothing new to cite.",
          "**Licence and legal name missing.** Buyers and AI systems cannot confirm who they are dealing with.",
          "**Every sitemap lastmod set to today.** Google learns to ignore your lastmod values.",
        ],
      },
      {
        heading: "A four-week implementation order",
        body: [
          "For an existing site, this order fixes the most important problems first without a rebuild. It is our recommendation; adjust it to what your audit finds.",
        ],
        checklist: [
          "**Week 1:** robots.txt, firewall and CDN rules, indexing report, rendering check of the top 20 pages; set up Search Console and Bing Webmaster Tools",
          "**Week 2:** canonicals, hreflang, sitemap lastmod, noindex and nosnippet clean-up; business details on site and Google Business Profile aligned",
          "**Week 3:** rewrite the top five service pages answer-first with tables and evidence; add Organization, LocalBusiness and BreadcrumbList markup",
          "**Week 4:** fix location pages, internal links, alt text and Core Web Vitals issues; set up AI referral tracking and a monthly answer log",
        ],
        callout: {
          type: "takeaway",
          text: "After four weeks, score the site on the 15-area framework in the [[/blogs/geo-uae|GEO pillar]] and plan content and authority work from the lowest scores. For tracking setup, see [[/blogs/ai-search-traffic-tracking|measuring AI search traffic]]; for an optional llms.txt, see our [[/blogs/llms-txt|llms.txt guide]].",
        },
      },
      {
        heading: "Sources",
        body: [
          "Google Search Central: [[https://developers.google.com/search/docs/appearance/ai-features|AI features and your website]]; [[https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search|Succeeding in AI search (May 2025)]]; [[https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics|JavaScript SEO basics]]; [[https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls|Consolidate duplicate URLs]]; [[https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap|Build a sitemap]]; [[https://developers.google.com/search/docs/specialty/international/localized-versions|Localized versions (hreflang)]]; [[https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers|Google common crawlers (Google-Extended)]]; [[https://developers.google.com/search/docs/essentials/spam-policies|Spam policies]]; [[https://developers.google.com/search/docs/appearance/structured-data/sd-policies|Structured data general guidelines]]; [[https://developers.google.com/search/docs/appearance/structured-data/organization|Organization markup]]; [[https://developers.google.com/search/blog/2023/08/howto-faq-changes|FAQ and HowTo changes (Aug 2023)]]; [[https://developers.google.com/search/docs/fundamentals/creating-helpful-content|Helpful content]]; [[https://web.dev/articles/vitals|web.dev Core Web Vitals]].",
          "Other platforms and data: [[https://developers.openai.com/api/docs/bots|OpenAI crawlers]]; [[https://docs.perplexity.ai/guides/bots|Perplexity crawlers]]; [[https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers|Microsoft: optimizing content for AI search answers]]; [[https://www.indexnow.org/documentation|IndexNow]]; [[https://gs.statcounter.com/search-engine-market-share/all/united-arab-emirates|StatCounter UAE search engine share]]; [[https://datareportal.com/reports/digital-2026-united-arab-emirates|DataReportal Digital 2026: UAE]]; [[https://u.ae/en/Footer/Accessibility|u.ae accessibility]]; [[https://u.ae/en/information-and-services/justice-safety-and-the-law/consumer-protection|u.ae consumer protection]].",
          "Documentation quotes reflect pages checked on 8 October 2026; platforms change crawler names and behaviour, so recheck before making policy decisions. The page examples are hypothetical.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Making a UAE business website ready for AI search is mostly careful technical work: let the right crawlers in, serve content as HTML, keep pages indexed with correct canonicals and hreflang, structure each section to answer a question, mark up only what is visible and publish your business details plainly in English and Arabic. None of it requires a special AI file, and all of it also helps traditional search. Run the audit table, fix the Critical rows first, then use the GEO framework to plan the content and authority work that follows.",
        ],
        cta: {
          title: "Need help working through the audit?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with UAE and global businesses. We fix rendering, indexing, structured data and Arabic and English page structure on existing sites through our [[/services/website-development|website development]] and [[/services/ui-ux-design|UI/UX design]] services, and review conversion paths in a [[/services/cro-audit|CRO audit]].",
        },
      },
    ],
  },
];
