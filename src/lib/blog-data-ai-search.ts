import type { BlogPost } from "./blog-data";

/**
 * AI search cluster (October 2026 batch). Until this batch the site covered
 * AI search only for ecommerce product data (ecommerce-product-data-ai-search);
 * these five articles cover general websites: visibility, GEO vs SEO, AI
 * crawlers, llms.txt and measurement. Facts were checked against Google
 * Search Central (AI optimization guide, updated 2026-07-10), OpenAI and
 * Anthropic crawler documentation and the GA4 help center on 2026-10-07.
 * Sources are cited by name in plain text (site-wide no-outbound-links rule).
 * Merged into `posts` in blog-data.ts.
 */

export const aiSearchPosts: BlogPost[] = [
  // ---------------------------------------- AI SEARCH VISIBILITY (hub)
  {
    slug: "ai-search-visibility",
    title: "How to Make Your Website Discoverable in ChatGPT, Gemini and AI Search",
    seoTitle: "How to Get Your Website Found in ChatGPT, Gemini and AI Search",
    excerpt:
      "What decides whether ChatGPT, Gemini and Google's AI Overviews find and cite your website, what platforms document, and a 30-day plan to fix the basics.",
    category: "Web Development",
    banner: "aivisibilityflow",
    bannerAlt:
      "How a website reaches AI search answers: Your pages, Crawl access, Index (highlighted), Retrieval, AI answer, Citation + click.",
    date: "2026-10-07",
    readingTime: "10 min read",
    relatedServiceSlugs: ["website-development", "cro-audit"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce", "b2b-enterprise"],
    relatedSlugs: ["geo-vs-seo", "ai-crawlers-robots-txt", "ai-search-traffic-tracking"],
    faqs: [
      { q: "How do I get my website to show up in ChatGPT answers?", a: "ChatGPT search finds pages through OpenAI's OAI-SearchBot and third-party search indexes, so make sure OAI-SearchBot is not blocked in robots.txt, that your important pages are crawlable without JavaScript tricks or logins, and that they answer the questions your customers ask better than other pages do. There is no submission form or paid route into organic ChatGPT answers." },
      { q: "Do I need special markup or files to appear in Google's AI Overviews?", a: "No. Google's documentation says there are no additional requirements, special files or special schema needed to appear in AI Overviews or AI Mode. A page must be indexed and eligible to show with a snippet, and normal SEO practices apply." },
      { q: "Does blocking GPTBot remove my site from ChatGPT search?", a: "No. GPTBot is OpenAI's training crawler. ChatGPT search uses OAI-SearchBot, which has its own robots.txt setting. You can block GPTBot to opt out of training and still allow OAI-SearchBot so you can be cited in ChatGPT search." },
      { q: "How long does it take to appear in AI search answers?", a: "It depends on crawling and indexing like any search channel. OpenAI says robots.txt changes for OAI-SearchBot take about 24 hours to be reflected; Google indexing can take days to weeks. Being eligible is quick; being chosen as a source depends on how useful and trusted the page is for the question." },
      { q: "Can an agency guarantee my business will be recommended by ChatGPT or Gemini?", a: "No. None of the platforms offer a guaranteed organic placement, and Google states that no third-party tool has access to its internal ranking or AI systems. Treat guarantees as a warning sign." },
      { q: "Is AI search visibility only about Google?", a: "No. Google's AI features rely on Google's index; ChatGPT, Claude, Perplexity and Microsoft Copilot use their own crawlers and, in some cases, other search indexes such as Bing. Allowing the right crawlers and being well represented on the open web matters for all of them." },
      { q: "Does my site need to be rebuilt for AI search?", a: "Usually not. Most problems are fixable: blocked crawlers, content rendered only in the browser, thin service pages, missing facts such as prices or locations, and inconsistent company information. A rebuild only makes sense when the platform itself prevents those fixes." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI search tools can only cite pages they can reach, read and trust. To be discoverable in ChatGPT, Gemini, Google's AI Overviews and AI Mode, Claude, Perplexity and Copilot: allow their search crawlers (OAI-SearchBot, Googlebot, Claude-SearchBot, Bingbot and others) in robots.txt, make sure key content is in the HTML and indexed, publish pages that answer real customer questions with specific facts nobody else has, keep your company details consistent across the web, and measure AI referrals separately. Google states plainly that there are no special files, schema or tricks for its AI features; the work is mostly good SEO done properly.",
        ],
      },
      {
        heading: "How AI search actually finds and cites websites",
        body: [
          "Most AI search experiences work the same way underneath. When someone asks a question, the system runs one or more web searches against an index, retrieves a handful of pages, reads the relevant passages and writes an answer that links to some of those pages. Google calls the multiple-search step **query fan-out**: AI Mode and AI Overviews may issue several related searches across subtopics to find supporting pages (Google Search Central, AI features documentation).",
          "That has a practical consequence. Your page has to clear three gates before it can be cited: it must be **reachable** (not blocked to the relevant crawler), **indexed** (in the search index the AI tool uses) and **selected** (judged the most useful source for that specific sub-question). The first two are technical and fully in your control. The third is a quality judgement made by each platform.",
        ],
        table: {
          headers: ["AI search surface", "Where it gets web pages", "What you control"],
          rows: [
            ["Google AI Overviews and AI Mode", "Google's search index (Googlebot)", "Indexing, snippet eligibility, content quality; Merchant Center and Business Profile for products and local"],
            ["Gemini app", "Google Search grounding", "Same as Google Search"],
            ["ChatGPT search", "OAI-SearchBot and partner search providers", "Allow OAI-SearchBot; crawlable, indexable pages"],
            ["Claude", "Claude-SearchBot index and Claude-User fetches", "Allow Claude-SearchBot and Claude-User"],
            ["Microsoft Copilot", "Bing index", "Bing Webmaster Tools, Bingbot access, IndexNow"],
            ["Perplexity", "PerplexityBot index and user-triggered fetches", "Allow PerplexityBot"],
          ],
        },
        callout: {
          type: "note",
          text: "Crawler names and behaviours change. The table reflects each vendor's documentation as of October 2026: Google Search Central, OpenAI's crawler overview, Anthropic's support article on its crawlers, Microsoft Bing Webmaster guidance and Perplexity's crawler page.",
        },
      },
      {
        heading: "What the platforms say (and what they don't)",
        body: [
          "Google published *Optimizing your website for generative AI features on Google Search* in May 2026 and updated it in July. It is the clearest official statement available, and it is blunt: SEO best practices remain relevant because AI features are built on Google's core ranking and quality systems. The guide says you do not need to break content into tiny chunks, rewrite it in a special style for AI, add special schema, or create llms.txt files (which Google Search ignores), and that chasing inauthentic mentions across the web is not as helpful as it may seem.",
          "What it does recommend is unglamorous: be indexed and eligible for snippets, write unique, non-commodity content for people, follow JavaScript SEO practices if your site relies on frameworks, use good images and video, and keep Merchant Center feeds and Google Business Profile accurate if you sell products or serve a location.",
          "OpenAI's publisher guidance is similar in spirit: any public website can appear in ChatGPT search, and to be cited you should not block OAI-SearchBot. Anthropic documents separate bots for training (ClaudeBot), search indexing (Claude-SearchBot) and user-requested fetches (Claude-User). None of the platforms publish a ranking formula for citations, and none sell organic placement.",
        ],
        callout: {
          type: "takeaway",
          text: "If an article or vendor promises a secret format that \"AI prefers\", check it against Google's own guide. Most of the tactics it calls myths are still being sold.",
        },
      },
      {
        heading: "Step 1: Make sure AI search crawlers can reach you",
        body: [
          "Start with access, because it is the most common silent failure. Many sites copied a robots.txt snippet in 2023 that blocks every AI-related bot, or sit behind a firewall rule or bot-protection product that challenges anything that is not a known browser. Either can remove you from AI search without any visible error.",
          "Separate **training** bots from **search** bots. You can decline training (GPTBot, ClaudeBot, Google-Extended) and still allow the bots that power search answers (OAI-SearchBot, Claude-SearchBot, Googlebot, Bingbot, PerplexityBot). Our [[/blogs/ai-crawlers-robots-txt|guide to AI crawlers and robots.txt]] lists each bot, what it does and copy-ready rules.",
        ],
        checklist: [
          "Read your live robots.txt and look for blanket `Disallow: /` rules under AI user agents",
          "Check your CDN or firewall bot settings for rules that block or challenge AI crawlers",
          "Confirm OAI-SearchBot, Claude-SearchBot, Bingbot and PerplexityBot appear in server logs fetching real pages",
          "Make sure important pages are not behind logins, cookie walls or interstitials",
        ],
      },
      {
        heading: "Step 2: Put the content in the HTML and get it indexed",
        body: [
          "Many AI crawlers do not execute JavaScript the way a browser does. If your pricing table, product specifications or FAQs are injected by client-side scripts after load, some crawlers will see an empty shell. Server-render or statically generate content that matters, keep one canonical URL per page, and submit an XML sitemap to Google Search Console and Bing Webmaster Tools. Bing matters more than its search share suggests because Copilot and other assistants rely on its index.",
          "Check indexing directly rather than assuming it. Search Console's page indexing report and Bing's URL inspection tell you which pages are excluded and why. Pages that are not indexed cannot appear in Google's AI features at all, because Google's guide requires a page to be indexed and eligible for a snippet. If you use `nosnippet` or very short `max-snippet` values, you also limit what Google's AI features can show.",
          "For framework sites, our [[/blogs/seo-friendly-website-development|SEO-friendly website development guide]] covers rendering choices, and [[/blogs/nextjs-website-development|Next.js website development]] explains why server rendering suits search.",
        ],
      },
      {
        heading: "Step 3: Publish answers worth citing",
        body: [
          "Once a page is reachable and indexed, selection comes down to usefulness. AI answers are assembled from passages that directly support a claim, so pages that contain specific, checkable information get used; pages that restate what every competitor says do not. Google's guide calls this non-commodity content: a unique point of view, first-hand experience or information that is not available elsewhere.",
          "For a business website, the most citable material is usually what only you know: what your service includes and excludes, how pricing works, real process steps and timelines, the constraints you design around, comparisons you can make honestly, and answers to the objections your sales team hears every week. Generic introductions to your industry are the least citable thing on most sites.",
        ],
        table: {
          headers: ["Page type", "What makes it citable", "Common weakness"],
          rows: [
            ["Service page", "Scope, deliverables, process, who it is for and not for, starting prices or pricing model", "Marketing adjectives with no facts"],
            ["Product page", "Specifications, compatibility, dimensions, materials, availability, returns", "Manufacturer copy duplicated across many sites"],
            ["Comparison or decision guide", "Clear criteria, trade-offs, when each option fits", "Thinly disguised sales page"],
            ["FAQ", "Direct answers to real customer questions", "Questions nobody asks, answered vaguely"],
            ["About and contact", "Who you are, where you operate, how to reach you", "Inconsistent with other profiles"],
          ],
        },
        callout: {
          type: "tip",
          text: "Write the direct answer in the first two sentences under each heading, then give the detail. It helps readers skim, and it helps any system looking for a passage that answers the question.",
        },
      },
      {
        heading: "Step 4: Make your business easy to identify and verify",
        body: [
          "AI systems describe businesses by combining what your site says with what other sources say about you. When those disagree (an old name on a directory, a different service list on a profile, a wrong address), answers become vague or wrong. Keep one consistent description of what you do, who you serve and where you operate, and use it on your site, Google Business Profile, LinkedIn, marketplaces and directories you control.",
          "On the site, add Organization structured data with your name, logo, contact details and links to verified profiles, and keep it consistent with the visible page. Structured data is not required for Google's AI features, but it removes ambiguity about who you are for every system that reads it. Product businesses should keep Merchant Center feeds complete; our guide to [[/blogs/ecommerce-product-data-ai-search|product data for AI search]] covers that side in depth.",
          "Third-party coverage helps when it is earned: reviews on platforms customers use, mentions in industry publications, partner pages and community answers written by real people. Manufactured mentions are a poor investment, and Google's guide specifically warns against them.",
        ],
        cta: {
          title: "Not sure whether AI search can read your site?",
          description: "ZSpace Labs reviews crawl access, rendering, indexing and content gaps, then fixes them in your existing stack. See our [[/services/website-development|website development services]].",
        },
      },
      {
        heading: "Step 5: Measure AI visibility separately",
        body: [
          "AI search is now measurable enough to manage. Google Search Console added Generative AI performance reports in June 2026, showing impressions for your pages in AI Overviews and AI Mode. GA4 added an AI Assistant default channel in May 2026 for visits from ChatGPT, Gemini, Copilot and similar assistants, while traffic from AI Overviews and AI Mode stays in Organic Search. ChatGPT also appends `utm_source=chatgpt.com` to links it shows.",
          "Track AI referrals and conversions by landing page, and run a monthly manual check of the questions that matter most to you in each assistant, recording the date and answer. The full setup is in our guide to [[/blogs/ai-search-traffic-tracking|measuring AI search traffic]].",
        ],
      },
      {
        heading: "What not to spend money on",
        body: [
          "Several tactics are widely sold and poorly supported by evidence. Avoid budgeting for them until a platform documents that they matter.",
        ],
        checklist: [
          "**Mass-produced \"AI-optimized\" articles.** Commodity content is exactly what AI answers replace",
          "**Rewriting everything into Q&A fragments.** Google says chunking is not required; write for readers",
          "**llms.txt as a ranking tactic.** Google Search ignores it; it is useful mainly for developer documentation (see our [[/blogs/llms-txt|llms.txt guide]])",
          "**Buying mentions or placing promotional comments.** Low value and a reputational risk",
          "**Guaranteed AI rankings.** No vendor has access to the platforms' ranking systems",
        ],
      },
      {
        heading: "A 30-day plan for a typical business website",
        body: [
          "For most service, SaaS and ecommerce sites, this sequence fixes the basics within a month without a rebuild.",
        ],
        checklist: [
          "**Week 1:** audit robots.txt, firewall bot rules, rendering and indexing; fix any blocked search crawlers",
          "**Week 1:** set up Search Console, Bing Webmaster Tools and the GA4 AI Assistant channel; record a baseline",
          "**Week 2:** list the 20 questions customers ask before buying; map each to an existing page or a gap",
          "**Week 3:** rewrite the top service or product pages with specific facts, direct answers and visible FAQs",
          "**Week 3:** align company details and descriptions across your site and profiles; add Organization schema",
          "**Week 4:** publish one genuinely original resource (data, a decision guide, a detailed process) and review results",
        ],
      },
      {
        heading: "Limitations to keep in mind",
        body: [
          "AI answers vary by user, location, wording and time, so a single screenshot proves little. Many AI answers satisfy the question without a click, which means impressions and brand mentions may rise faster than traffic. And every platform is still changing its products quickly. Build on the things that hold across all of them (accessible content, accurate facts, a consistent identity, useful pages) and treat platform-specific features as additions.",
          "For the strategic comparison with traditional SEO, read [[/blogs/geo-vs-seo|GEO vs SEO]]. If AI agents (not just AI search) are starting to visit your site to complete tasks, read [[/blogs/how-ai-agents-use-websites|how AI agents use websites]].",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Being discoverable in AI search is less about new tricks than about removing the reasons a system would skip your site: blocked crawlers, unreadable pages, generic content and conflicting facts. Fix access and indexing first, publish answers only you can give, keep your identity consistent and measure the channel on its own. That work also improves traditional search, which is where AI search gets most of its sources anyway.",
          "For where this is heading as agents start acting on websites as well as reading them, see [[/blogs/will-ai-agents-replace-websites|why the website interface layer is expanding]].",
        ],
        cta: {
          title: "Want your website ready for AI search?",
          description: "Talk to ZSpace Labs about an AI-search readiness review and the technical and content fixes that follow. [[/contact|Start a conversation]].",
        },
      },
    ],
  },

  // ---------------------------------------- GEO VS SEO
  {
    slug: "geo-vs-seo",
    title: "GEO vs SEO: What Actually Changes for AI Search (and What Doesn't)",
    seoTitle: "GEO vs SEO: What Changes for AI Search and What Stays the Same",
    excerpt:
      "GEO vs SEO compared: where generative engine optimization is the same work as SEO, what genuinely differs, what Google says, and where to spend first.",
    category: "Web Development",
    banner: "geovsseo",
    bannerAlt:
      "SEO vs GEO compared (SEO and GEO, with GEO highlighted) by goal, unit, result, measurement and foundation.",
    date: "2026-10-07",
    readingTime: "7 min read",
    relatedServiceSlugs: ["website-development", "cro-audit"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce", "professional-services"],
    relatedSlugs: ["ai-search-visibility", "ai-search-traffic-tracking", "llms-txt"],
    faqs: [
      { q: "What is GEO?", a: "Generative engine optimization (GEO) is the practice of improving how often and how accurately AI search systems such as ChatGPT, Gemini, Perplexity and Google's AI Overviews use and cite your content in generated answers. The term comes from a 2023 research paper by Aggarwal and colleagues, later published at KDD 2024." },
      { q: "Is GEO different from SEO?", a: "Mostly not in the work itself. AI search systems retrieve pages from search indexes, so crawlability, indexing, relevance and content quality drive both. The differences are in the result (a citation inside an answer instead of a ranked link), the measurement and the greater weight on specific, citable facts and consistent information about your business." },
      { q: "What does Google say about GEO and AEO?", a: "Google's guide to its generative AI features says optimizing for them is still SEO, that there are no special requirements, files or schema, and that unique, people-first content matters most." },
      { q: "Is AEO the same as GEO?", a: "They overlap. Answer engine optimization (AEO) usually refers to structuring content so search features and assistants can extract direct answers, such as featured snippets and voice answers. GEO focuses on generative AI answers. In practice the same content practices serve both." },
      { q: "Should I hire a separate GEO agency?", a: "Only if your current SEO work ignores technical access, content quality and measurement of AI channels. A good SEO or web team should already cover those. Be cautious with anyone selling guaranteed AI rankings or AI-only content formats." },
      { q: "Will AI search replace SEO traffic?", a: "AI features change how people click, and some queries now end without a visit. But AI systems still depend on web pages as sources, and Google reports AI feature traffic within normal Search Console data. Plan for fewer but often better-informed visits on some queries rather than the end of search traffic." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "GEO (generative engine optimization) aims to get your content used and cited inside AI-generated answers; SEO aims to rank pages in search results. Because AI search tools retrieve their sources from search indexes, roughly 80 to 90 percent of the work is identical: crawlable, indexed, fast pages with genuinely useful content. What changes is the outcome you measure (citations and mentions, not just positions), the extra weight on specific facts and a consistent business identity, and the need to allow several AI crawlers. Google's own position is that optimizing for its AI features is still SEO.",
        ],
      },
      {
        heading: "Where the term GEO comes from",
        body: [
          "The term was introduced in a 2023 paper, *GEO: Generative Engine Optimization* by Pranjal Aggarwal and colleagues (published at KDD 2024). The researchers tested how changes to page content affected visibility in generative answers and found that adding citations, quotations from relevant sources and statistics improved visibility in their benchmark, while keyword stuffing did not.",
          "That finding is useful but narrower than it is often presented. It was measured on a research benchmark, with specific engines at a specific time. Its practical lesson matches what Google now says: pages that contain specific, verifiable information get used; padded pages do not. It does not establish a separate discipline with its own ranking factors.",
        ],
      },
      {
        heading: "GEO vs SEO side by side",
        body: [],
        table: {
          headers: ["Dimension", "SEO", "GEO"],
          rows: [
            ["Goal", "Rank a page for a query", "Be used and cited in a generated answer"],
            ["Unit of competition", "Whole page vs other pages", "Passages and facts vs other sources"],
            ["What the user sees", "A list of links", "An answer with a few source links, sometimes none clicked"],
            ["Main crawlers", "Googlebot, Bingbot", "Googlebot and Bingbot plus OAI-SearchBot, Claude-SearchBot, PerplexityBot and others"],
            ["Measurement", "Rankings, clicks, CTR (Search Console)", "AI impressions (Search Console AI reports), AI Assistant referrals (GA4), citation spot checks"],
            ["Off-site signals", "Links", "Consistent mentions and descriptions of the business across trusted sources"],
            ["Foundation", "Crawlability, indexing, relevance, quality", "The same"],
          ],
        },
      },
      {
        heading: "What stays exactly the same",
        body: [
          "Every AI search system needs to find your page before it can use it. Google's AI Overviews and AI Mode use Google's index; Copilot leans on Bing; ChatGPT and Claude run their own search crawlers alongside partner indexes. So the fundamentals carry straight over: allow crawlers, render content in HTML, keep URLs canonical, submit sitemaps, fix broken internal links, keep pages fast and write for people first.",
          "Google's May 2026 guide is explicit that its AI features run on its core ranking and quality systems and that SEO best practices remain relevant. It also lists several popular GEO tactics as unnecessary: llms.txt files (ignored by Google Search), chunking content into small pieces, writing in a special AI style and adding special schema markup.",
        ],
        callout: {
          type: "takeaway",
          text: "If your SEO is weak, you do not have a GEO problem yet. Fix crawling, indexing and content quality first; everything else builds on them.",
        },
      },
      {
        heading: "What genuinely changes",
        body: [
          "There are real differences, and they deserve budget once the basics are sound.",
          "**Query fan-out rewards depth across subtopics.** AI Mode and AI Overviews can issue several related searches behind one question. A page that covers the decision thoroughly (options, costs, trade-offs, edge cases) has more chances to be retrieved for one of those sub-searches than a page optimized for a single phrase.",
          "**Specific facts beat general claims.** A generated answer needs passages that support specific statements. Prices or pricing models, specifications, timelines, eligibility rules, process steps and honest comparisons are the material that gets cited.",
          "**Your business identity has to be consistent.** When an assistant describes your company, it reconciles your site with directories, profiles, reviews and articles. Inconsistent names, service lists or locations produce vague or wrong descriptions.",
          "**More crawlers matter.** Traditional SEO could focus on Googlebot and Bingbot. AI search adds OpenAI, Anthropic, Perplexity and others, each with separate training and search bots. See the [[/blogs/ai-crawlers-robots-txt|AI crawlers and robots.txt guide]].",
          "**Measurement shifts from clicks to presence.** A citation can inform a buyer without a click. You need AI impression data, AI referral data and periodic answer checks, not just rankings.",
        ],
      },
      {
        heading: "Is traffic from AI search worth the effort?",
        body: [
          "For most businesses AI assistants still send far fewer visits than traditional search, but the share is growing and the visits tend to arrive later in the decision. Google reported in 2026 that AI Overviews reach billions of users each month, and AI Mode use has grown quickly. That reach shows up mostly as impressions and brand familiarity, with clicks concentrated on queries where people need details, comparisons or to take an action.",
          "The right response is not to chase AI traffic for its own sake but to make sure that when an AI answer covers your category, it describes you accurately and links to the page that helps the buyer decide.",
        ],
      },
      {
        heading: "How to decide where to spend",
        body: [
          "Use your current state to pick the next step rather than buying a new service line.",
        ],
        table: {
          headers: ["Your situation", "Spend on first", "Why"],
          rows: [
            ["Pages not indexed or slow, JavaScript-rendered content", "Technical SEO and rendering fixes", "Nothing else matters until pages can be crawled and indexed"],
            ["Indexed but generic content", "Rewriting key pages with specific facts and original insight", "Commodity pages are the first to be replaced by AI answers"],
            ["Strong content, unclear identity", "Consistent company information, Organization schema, profiles", "Assistants reconcile multiple sources when describing you"],
            ["Good SEO, no AI data", "Measurement: Search Console AI reports, GA4 AI Assistant channel", "You cannot manage what you do not see"],
            ["Product catalogue", "Merchant Center feeds and product data quality", "Shopping answers draw heavily on structured product data"],
          ],
        },
        cta: {
          title: "Want an honest view of where your site stands?",
          description: "ZSpace Labs audits technical access, content and measurement for both traditional and AI search, then implements the fixes. Explore our [[/services/website-development|website development services]].",
        },
      },
      {
        heading: "Red flags when buying GEO services",
        body: [],
        checklist: [
          "Guaranteed placement in ChatGPT, Gemini or AI Overviews",
          "Claims of special access to how AI systems choose sources (Google says no third-party tool has access to its ranking or AI systems)",
          "Bulk AI-written articles as the main deliverable",
          "llms.txt, special schema or \"AI-format\" rewrites sold as the core fix",
          "Reports built only on screenshots of individual answers, without trend data",
          "Statistics about zero-click searches or traffic loss with no named source",
        ],
      },
      {
        heading: "A combined SEO and GEO checklist",
        body: [
          "Treat these as one programme. Each item helps both channels.",
        ],
        checklist: [
          "Search and AI crawlers allowed; training crawlers decided separately",
          "Key content server-rendered, indexed and eligible for snippets",
          "Service, product and comparison pages contain specific, verifiable facts",
          "Direct answers near the top of each section, details below",
          "Consistent business description on the site and on profiles you control",
          "Organization and product structured data that matches visible content",
          "AI impressions, AI referrals and conversions tracked monthly",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "GEO is best understood as SEO for a new kind of result page. The foundations are shared, Google says so directly, and most of the value comes from doing them properly. The genuine differences (subtopic depth, citable facts, consistent identity, more crawlers and new measurement) are worth adding once the basics are in place. For the practical steps, start with [[/blogs/ai-search-visibility|how to make your website discoverable in AI search]].",
        ],
      },
    ],
  },

  // ---------------------------------------- AI CRAWLERS AND ROBOTS.TXT
  {
    slug: "ai-crawlers-robots-txt",
    title: "AI Crawlers and robots.txt: Which AI Bots to Allow, Block or Limit",
    seoTitle: "AI Crawlers and robots.txt: GPTBot, OAI-SearchBot, ClaudeBot and More",
    excerpt:
      "What GPTBot, OAI-SearchBot, ClaudeBot, Google-Extended and other AI bots do, what blocking each changes, and robots.txt rules by business type.",
    category: "Web Development",
    banner: "aicrawlers",
    bannerAlt:
      "AI crawlers grouped by purpose: Training (GPTBot, ClaudeBot, Google-Extended, CCBot), Search (highlighted: OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot) and User-triggered (ChatGPT-User, Claude-User, Perplexity-User).",
    date: "2026-10-07",
    readingTime: "7 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["media-entertainment", "saas-technology", "ecommerce"],
    relatedSlugs: ["ai-search-visibility", "llms-txt", "ai-agent-traffic-verification"],
    faqs: [
      { q: "What is the difference between GPTBot and OAI-SearchBot?", a: "GPTBot collects content that may be used to train OpenAI's models. OAI-SearchBot indexes pages so they can appear in ChatGPT search answers. They are controlled separately in robots.txt, so you can block one and allow the other." },
      { q: "Does blocking Google-Extended remove my site from AI Overviews?", a: "No. Google states that Google-Extended does not affect inclusion in Google Search and is not a ranking signal. AI Overviews and AI Mode are part of Search and use Googlebot. To limit what Search shows, use snippet controls such as nosnippet or max-snippet." },
      { q: "Do AI crawlers respect robots.txt?", a: "The major vendors (OpenAI, Anthropic, Google, Perplexity, Common Crawl) document that their automated crawlers follow robots.txt. User-triggered fetchers such as ChatGPT-User may not, because a person asked for the page. robots.txt is voluntary, so enforcement against non-compliant bots requires firewall or bot-management rules." },
      { q: "Should a business website block AI crawlers?", a: "Most service, SaaS and ecommerce businesses benefit from allowing search and user-triggered AI bots, because being cited helps customers find them. Blocking training bots is a separate choice based on how you feel about your content training models. Publishers with paid content have stronger reasons to restrict." },
      { q: "How quickly do robots.txt changes take effect?", a: "It varies by crawler. OpenAI says changes for OAI-SearchBot take about 24 hours to be reflected in search. Google generally caches robots.txt for up to 24 hours. Blocking a training crawler does not remove content already collected." },
      { q: "Can AI crawlers overload my server?", a: "Aggressive crawling does happen, particularly on large or dynamic sites. Use caching, rate limiting at the CDN, and disallow expensive URL patterns such as internal search, cart and filter combinations rather than blocking useful bots entirely." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI companies run three kinds of bots: **training crawlers** (GPTBot, ClaudeBot, Google-Extended, CCBot) that collect content for model training, **search crawlers** (OAI-SearchBot, Claude-SearchBot, PerplexityBot, plus Googlebot and Bingbot) that index pages so AI answers can cite them, and **user-triggered fetchers** (ChatGPT-User, Claude-User, Perplexity-User) that load a page because someone asked. Most businesses should allow search and user-triggered bots, decide about training bots on principle, and limit expensive URLs rather than blocking everything. Blocking a training bot does not remove you from AI search.",
        ],
      },
      {
        heading: "The AI bots that matter in 2026",
        body: [
          "The table summarizes each vendor's documentation as of October 2026 (OpenAI's crawler overview, Anthropic's support article on its crawlers, Google's list of common crawlers, Perplexity's crawler page and Common Crawl's FAQ). User agent names occasionally change, so check the vendor page before relying on an old list.",
        ],
        table: {
          headers: ["User agent", "Operator", "Purpose", "If you block it"],
          rows: [
            ["GPTBot", "OpenAI", "Training data for OpenAI models", "Signals your content should not be used for training; no effect on ChatGPT search"],
            ["OAI-SearchBot", "OpenAI", "Index for ChatGPT search", "Your pages are not shown in ChatGPT search answers (may still appear as navigational links)"],
            ["ChatGPT-User", "OpenAI", "Fetches a page when a user's request needs it", "User actions may still fetch pages; OpenAI notes robots.txt may not apply"],
            ["ClaudeBot", "Anthropic", "Training data for Claude models", "Future content excluded from training"],
            ["Claude-SearchBot", "Anthropic", "Index to improve Claude's search results", "May reduce visibility in Claude's search answers"],
            ["Claude-User", "Anthropic", "Fetches pages for user questions", "Claude cannot retrieve your pages when users ask"],
            ["Google-Extended", "Google", "Control token for Gemini model training and grounding", "No effect on Google Search, AI Overviews or AI Mode (per Google)"],
            ["Googlebot", "Google", "Google Search, including AI Overviews and AI Mode", "Removes you from Google Search entirely"],
            ["Bingbot", "Microsoft", "Bing index, used by Copilot", "Removes you from Bing and weakens Copilot visibility"],
            ["PerplexityBot", "Perplexity", "Index for Perplexity answers", "Not surfaced in Perplexity search results"],
            ["CCBot", "Common Crawl", "Open web archive widely used to train models", "Excluded from future Common Crawl snapshots"],
          ],
        },
      },
      {
        heading: "Training, search and user-triggered bots are separate decisions",
        body: [
          "The most common mistake is treating \"AI bots\" as one thing. Many sites added a block for GPTBot in 2023 and assumed it would stop ChatGPT from using their content in answers. It never did that: ChatGPT search uses OAI-SearchBot, and user-requested fetches use ChatGPT-User. The opposite mistake is equally common: blocking every AI-related user agent and unknowingly disappearing from AI search.",
          "Think about each category on its own terms:",
        ],
        checklist: [
          "**Training bots:** a policy choice about whether your content may train models. It has no documented effect on being cited in AI search. Blocking applies only to future crawling",
          "**Search bots:** a visibility choice. Blocking them means AI answers cannot cite or link to you",
          "**User-triggered fetchers:** behave like a person's browser acting on request. Blocking them breaks assistants that a customer is actively using to look at your site",
        ],
        callout: {
          type: "note",
          text: "Google-Extended is a robots.txt product token, not a separate crawler. Google crawls with Googlebot and uses the token to decide whether content can be used for Gemini model training and grounding. Google says it does not affect Search inclusion or ranking.",
        },
      },
      {
        heading: "What should your business allow?",
        body: [
          "There is no universal answer, but the trade-offs are predictable by business model.",
        ],
        table: {
          headers: ["Business type", "Training bots", "Search bots", "User-triggered", "Reasoning"],
          rows: [
            ["Service business or agency", "Your choice; many allow", "Allow", "Allow", "Being cited in answers brings qualified enquiries"],
            ["SaaS", "Your choice; docs often allowed", "Allow", "Allow", "Buyers and developers research through assistants"],
            ["Ecommerce", "Your choice", "Allow; limit cart, search, filter URLs", "Allow", "Product discovery increasingly starts in AI assistants"],
            ["Publisher with ads", "Often block", "Usually allow", "Allow", "Visibility drives traffic; training use is the contested part"],
            ["Paywalled or licensed content", "Block", "Consider partial access", "Case by case", "Content is the product; licensing deals may apply"],
            ["Internal tools or staging sites", "Block", "Block", "Block", "Nothing public to gain; also protect with authentication"],
          ],
        },
      },
      {
        heading: "robots.txt examples",
        body: [
          "robots.txt rules are grouped by user agent. A crawler follows the most specific group that matches its name, so a named group overrides the wildcard. These examples follow the Robots Exclusion Protocol (RFC 9309); test them in Search Console's robots.txt report before deploying.",
        ],
        code: {
          label: "Allow AI search, opt out of AI training, protect expensive URLs",
          text: `# Training crawlers: opt out
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: CCBot
User-agent: Google-Extended
Disallow: /

# Search and user-triggered AI bots: allow, minus costly paths
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
Disallow: /cart
Disallow: /checkout
Disallow: /account
Disallow: /search

# Everyone else, including Googlebot and Bingbot
User-agent: *
Disallow: /cart
Disallow: /checkout
Disallow: /account
Disallow: /search

Sitemap: https://www.example.com/sitemap.xml`,
        },
        callout: {
          type: "tip",
          text: "Because a named group replaces the wildcard group for that bot, repeat important disallow rules (cart, checkout, account, internal search) in every group. Leaving them out of a named group allows that bot into those paths.",
        },
      },
      {
        heading: "When robots.txt is not enough",
        body: [
          "robots.txt is a public request, not a lock. Reputable crawlers follow it; scrapers that ignore it will not be stopped by it, and some disguise themselves with browser user agents. For enforcement you need controls at the CDN or firewall: verify claimed crawlers by IP range or reverse DNS (OpenAI, Google and others publish their ranges), rate-limit aggressive clients and challenge unverified automation on sensitive paths.",
          "Be careful with blanket bot blocking. Bot-protection products that challenge every non-browser client can block search crawlers and legitimate AI agents shopping on a customer's behalf. Newer approaches let agents prove who they are with cryptographic signatures; our guide to [[/blogs/ai-agent-traffic-verification|verifying AI agent traffic]] explains how that works.",
        ],
      },
      {
        heading: "Controlling what appears, not just who crawls",
        body: [
          "Sometimes the question is not whether a bot can visit but what may be shown. For Google, the existing snippet controls apply to AI features too: `nosnippet`, `data-nosnippet` on specific elements, `max-snippet` and `noindex`. They limit what Search, including AI Overviews and AI Mode, can display from your pages. Use them precisely; a site-wide `nosnippet` also removes ordinary search snippets and makes you ineligible for AI features.",
        ],
      },
      {
        heading: "How to audit your current setup",
        body: [],
        checklist: [
          "Fetch your live robots.txt and list every AI-related user agent and rule",
          "Check that rules match your intent for each category (training, search, user-triggered)",
          "Review CDN and firewall bot settings for blanket AI blocking or challenges",
          "Search server logs for each user agent to see what is actually crawling and how often",
          "Verify high-volume bots against published IP ranges before trusting the user agent",
          "Disallow expensive dynamic URLs (internal search, filters, cart) instead of whole bots",
          "Re-check quarterly; vendors add and rename bots",
        ],
        cta: {
          title: "Need a crawler policy that matches your business?",
          description: "ZSpace Labs reviews robots.txt, CDN bot rules and server logs and sets up crawler access that protects your infrastructure without hiding you from AI search. See [[/services/website-development|website development services]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Treat AI crawlers as three groups with three decisions. Allow the search and user-triggered bots that let customers find you through AI assistants, make an explicit choice about training bots, and protect your infrastructure with targeted disallow rules and rate limits instead of blanket blocks. Then confirm the result in your logs. For the wider picture, see [[/blogs/ai-search-visibility|how to make your website discoverable in AI search]].",
        ],
      },
    ],
  },

  // ---------------------------------------- AI SEARCH TRAFFIC TRACKING
  {
    slug: "ai-search-traffic-tracking",
    title: "How to Measure AI Search Traffic: GA4, Search Console and ChatGPT Referrals",
    seoTitle: "How to Track AI Search Traffic in GA4 and Search Console",
    excerpt:
      "How to measure traffic and visibility from ChatGPT, Gemini, Copilot and Google's AI Overviews using GA4, Search Console, UTM tags and server logs.",
    category: "CRO",
    sceneKind: "analytics",
    banner: "aitrafficflow",
    bannerAlt:
      "Measuring AI search: AI answer, Impressions (Search Console), Referral visit, GA4 channel (highlighted), Conversion, Monthly review.",
    date: "2026-10-07",
    readingTime: "7 min read",
    relatedServiceSlugs: ["cro-audit", "website-development"],
    relatedIndustrySlugs: ["ecommerce", "saas-technology"],
    relatedSlugs: ["ai-search-visibility", "geo-vs-seo", "ecommerce-attribution"],
    faqs: [
      { q: "Can I see ChatGPT traffic in Google Analytics?", a: "Yes. GA4's default channel group now includes an AI Assistant channel for visits from sources such as ChatGPT, Gemini, DeepSeek, Copilot and Grok. ChatGPT also adds utm_source=chatgpt.com to links in its answers, which helps attribution." },
      { q: "Does GA4's AI Assistant channel include Google AI Overviews?", a: "No. Google's documentation says the AI Assistant channel excludes AI Overviews and AI Mode. Clicks from those features are part of Organic Search." },
      { q: "How do I see AI Overviews performance in Search Console?", a: "Search Console added Search Generative AI performance reports in June 2026. They show impressions for your pages in generative AI features such as AI Overviews and AI Mode, with breakdowns by page, country, device and date. Rollout began with a subset of sites and expanded through mid-2026." },
      { q: "Why does some AI traffic show up as Direct?", a: "Some assistants and apps do not pass a referrer, especially mobile apps and desktop apps. Those visits can land in Direct or Unassigned. UTM parameters, landing-page patterns and server logs help estimate the gap." },
      { q: "Can any tool tell me exactly how often ChatGPT mentions my brand?", a: "Not exactly. AI answers vary by user, wording and time, and the platforms do not publish mention data. Third-party monitoring tools sample prompts and can show trends, but treat their numbers as estimates." },
      { q: "What should I report to management?", a: "AI impressions from Search Console, AI Assistant sessions and conversions from GA4, the top landing pages for each, and a short log of manual answer checks for your most important questions, all as monthly trends." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Measure AI search with four sources. **Search Console's generative AI reports** show impressions in Google's AI Overviews and AI Mode. **GA4's AI Assistant channel** groups visits from ChatGPT, Gemini, Copilot, DeepSeek, Grok and similar assistants (Google's AI features stay in Organic Search). **UTM and referrer data**, including the `utm_source=chatgpt.com` tag ChatGPT adds to links, fills gaps. **Server logs and monthly answer checks** show crawler activity and how assistants describe you. Report them together as monthly trends by landing page and conversion, not as one vanity number.",
        ],
      },
      {
        heading: "What each tool can and cannot see",
        body: [],
        table: {
          headers: ["Source", "Shows", "Does not show"],
          rows: [
            ["Search Console: generative AI reports", "Impressions of your pages in AI Overviews and AI Mode by page, country, device and date", "Other assistants; the answer text; brand mentions without a link"],
            ["Search Console: Performance (Web)", "Clicks and impressions for all Google Search, including AI features", "A clean split of clicks by AI feature"],
            ["GA4: AI Assistant channel", "Sessions and conversions referred by ChatGPT, Gemini, Copilot, DeepSeek, Grok and similar", "Google AI Overviews and AI Mode (counted as Organic Search); visits with no referrer"],
            ["UTM parameters", "ChatGPT links tagged utm_source=chatgpt.com; links you control in AI apps or feeds", "Untagged links from other assistants"],
            ["Bing Webmaster Tools", "Bing and Copilot search performance", "Non-Microsoft assistants"],
            ["Server or CDN logs", "Which AI crawlers and fetchers request which pages", "Whether a page was cited"],
            ["Manual or tool-based answer checks", "How assistants describe you for chosen questions", "Representative coverage; results vary by user and time"],
          ],
        },
      },
      {
        heading: "Set up GA4 for AI traffic",
        body: [
          "Since May 2026, GA4's default channel group includes an **AI Assistant** channel. Google defines it as the channel through which users arrive from sources such as ChatGPT, Gemini, DeepSeek, Copilot or Grok; sessions match when the medium is `ai-assistant` or the referrer is on Google's list of AI assistant sources. It explicitly excludes Google's AI Overviews and AI Mode, which remain in Organic Search. No configuration is needed for the default group.",
          "If you built a custom channel group with regex rules before this change, check the order of rules. GA4 evaluates channels top to bottom; a custom AI rule placed below Referral never matches. Many teams can now retire their custom rule and use the default channel, keeping a custom group only if they need finer splits (for example ChatGPT separately from Perplexity).",
        ],
        checklist: [
          "Open Reports › Acquisition › Traffic acquisition and confirm the AI Assistant row appears",
          "Add session source as a secondary dimension to split assistants",
          "Mark key events (lead form, purchase, demo request) so the channel shows conversions",
          "Create an exploration of AI Assistant sessions by landing page",
          "Annotate the date your AI-related content changes went live",
        ],
      },
      {
        heading: "Use Search Console's generative AI reports",
        body: [
          "Google introduced Search Generative AI performance reports in Search Console on 3 June 2026, first for a subset of properties and then more widely. They give a dedicated view of impressions for your URLs in generative AI features on Search (AI Overviews and AI Mode) and in Discover, broken down by page, country, device and date.",
          "Use them to answer two questions: which pages Google's AI features draw on, and whether that is growing. Compare the AI impression trend with the page's overall Search performance. A page with rising AI impressions and falling clicks may be answering the question well enough inside the result; improve the reasons to click (tools, detail, pricing, next steps) rather than hiding the content.",
        ],
        callout: {
          type: "note",
          text: "Google's guide states that no third-party tool has access to its internal ranking or AI systems. Search Console is the only first-party source for Google AI feature visibility.",
        },
      },
      {
        heading: "Tag, log and fill the gaps",
        body: [
          "ChatGPT automatically adds `utm_source=chatgpt.com` to links in search answers, according to OpenAI's publisher FAQ, so those visits are identifiable even when the referrer is missing. Other assistants vary: some pass a referrer from the web version but not from mobile or desktop apps, which pushes visits into Direct. Look for unusual Direct sessions landing deep in the site (on a comparison guide or a specific product) as a signal of untagged assistant traffic.",
          "Where you control the link (product feeds submitted to AI shopping channels, links in your own AI app or MCP server), add consistent UTM parameters. Do not add UTMs to internal links on your own site; that overwrites the original source.",
          "Server or CDN logs complete the picture by showing which AI crawlers visit and what they request. A sudden drop in OAI-SearchBot or Claude-SearchBot requests usually means a robots.txt or firewall change, not a ranking change. See [[/blogs/ai-crawlers-robots-txt|AI crawlers and robots.txt]] for what each bot does.",
        ],
      },
      {
        heading: "Track how assistants describe you",
        body: [
          "Traffic numbers miss answers that mention you without a click. Keep a short list of 10 to 30 questions that matter commercially (\"best [service] for [industry]\", \"[your brand] vs [competitor]\", \"how much does [service] cost\") and check them monthly in ChatGPT, Gemini, Copilot, Perplexity and Google AI Mode. Record the date, whether you are mentioned, whether you are linked, and whether the description is accurate.",
          "Monitoring tools can automate this at scale. They sample prompts and are useful for trends, but answers vary by user, location and wording, so treat their share-of-voice figures as estimates, not measurements.",
        ],
      },
      {
        heading: "A monthly AI search report",
        body: [
          "Keep it short and comparable month to month.",
        ],
        table: {
          headers: ["Metric", "Source", "Why it matters"],
          rows: [
            ["AI feature impressions (Google)", "Search Console generative AI report", "Visibility trend in Google's AI answers"],
            ["Top pages by AI impressions", "Search Console", "Which content Google's AI draws on"],
            ["AI Assistant sessions and conversions", "GA4", "Whether assistant visits create business value"],
            ["Top AI landing pages", "GA4 exploration", "Where to improve next steps and conversion"],
            ["AI crawler activity", "Server or CDN logs", "Early warning for access problems"],
            ["Answer check results", "Manual log or monitoring tool", "Accuracy of how you are described"],
          ],
        },
        cta: {
          title: "Want AI channels in your reporting?",
          description: "ZSpace Labs sets up GA4, Search Console and log reporting for AI search and connects it to conversion analysis. See our [[/services/cro-audit|CRO and analytics audit]].",
        },
      },
      {
        heading: "Interpreting the numbers",
        body: [
          "AI assistant traffic is still small for most sites compared with organic search, but it often converts differently because visitors arrive after an assistant has narrowed their options. Compare conversion rate and lead quality by channel rather than session counts. Watch for these patterns:",
        ],
        checklist: [
          "**AI impressions up, clicks flat:** the answer satisfies the question; give people a reason to visit (tools, pricing, detail)",
          "**Assistant visits land on old pages:** update or redirect them; assistants may cite outdated URLs",
          "**Inaccurate descriptions in answer checks:** fix inconsistent facts on your site and profiles",
          "**Crawler requests drop suddenly:** check robots.txt, CDN bot settings and server errors",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "AI search is measurable enough to manage, as long as you combine sources. Use Search Console for Google's AI features, GA4's AI Assistant channel for other assistants, UTMs and logs to fill gaps, and regular answer checks for accuracy. Report trends by page and conversion. For the work that moves these numbers, see [[/blogs/ai-search-visibility|how to make your website discoverable in AI search]], and for wider measurement design, our guide to [[/blogs/ecommerce-attribution|ecommerce attribution]].",
        ],
      },
    ],
  },

  // ---------------------------------------- LLMS.TXT
  {
    slug: "llms-txt",
    title: "llms.txt: What It Does, What It Doesn't, and Whether Your Site Needs One",
    seoTitle: "llms.txt Explained: Does Your Website Need One?",
    excerpt:
      "What llms.txt is, what Google says about it, where it is genuinely used (developer docs and coding agents) and how to decide if your site needs one.",
    category: "Web Development",
    sceneKind: "code",
    banner: "llmstxtcompare",
    bannerAlt:
      "llms.txt compared with robots.txt and sitemap.xml (llms.txt highlighted) by purpose, audience, format, used by and effect on Google.",
    date: "2026-10-07",
    readingTime: "5 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["saas-technology"],
    relatedSlugs: ["ai-search-visibility", "ai-crawlers-robots-txt", "model-context-protocol"],
    faqs: [
      { q: "What is llms.txt?", a: "A proposed convention, published by Jeremy Howard in September 2024, for a Markdown file at /llms.txt that gives language models a short summary of a site and a curated list of links to the most useful pages, ideally with clean Markdown versions." },
      { q: "Does Google use llms.txt?", a: "No. Google's guide to its generative AI features says Google Search ignores llms.txt files, and that creating one neither helps nor harms visibility in Search." },
      { q: "Does llms.txt help me appear in ChatGPT?", a: "There is no documentation from OpenAI saying ChatGPT search uses llms.txt for ranking or citation. ChatGPT search relies on OAI-SearchBot crawling your pages. Make sure that bot is allowed instead." },
      { q: "Who actually uses llms.txt?", a: "Mostly developer tools. Coding agents and documentation assistants can read a project's llms.txt to find the right documentation pages quickly, and many documentation platforms publish one automatically." },
      { q: "Is llms.txt the same as robots.txt?", a: "No. robots.txt tells crawlers which URLs they may request. llms.txt is a reading guide with no access-control meaning; it neither allows nor blocks anything." },
      { q: "Can llms.txt hurt my site?", a: "Not in Google Search, according to Google. The main risks are maintenance (an outdated file points tools at old pages) and publishing information you did not intend to make easy to extract." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "llms.txt is a proposed Markdown file at the root of a site that summarizes it and lists its most useful pages for language models. It is not a standard, it controls no access, and Google states that Google Search ignores it. Its real use today is in developer documentation, where coding agents and documentation tools read it to find the right pages. Add one if you publish technical docs or an API; for a typical business or ecommerce site it is optional and should never replace crawlable pages, good content and correct robots.txt rules.",
        ],
      },
      {
        heading: "What the proposal specifies",
        body: [
          "Jeremy Howard of Answer.AI proposed llms.txt in September 2024, at llmstxt.org. The idea: websites are built for people and browsers, with navigation, scripts and layout that waste a model's limited context. A small Markdown file at `/llms.txt` can point a model straight to the content that matters.",
          "The proposal describes a simple structure: an H1 with the site or project name, a short blockquote summary, optional notes, then sections of Markdown links with one-line descriptions. A section titled \"Optional\" marks links that can be skipped when context is short. It also suggests offering Markdown versions of pages (for example `page.html.md`) and a fuller `llms-full.txt` with content inlined.",
        ],
        code: {
          label: "A minimal llms.txt",
          text: `# Example Analytics

> Example Analytics is a privacy-focused web analytics product with a JavaScript tracker, a REST API and a self-hosted option.

## Docs
- [Quickstart](https://example.com/docs/quickstart.md): install the tracker and see your first report
- [REST API reference](https://example.com/docs/api.md): authentication, endpoints, rate limits
- [Self-hosting](https://example.com/docs/self-hosting.md): requirements and upgrade process

## Optional
- [Changelog](https://example.com/changelog.md)`,
        },
      },
      {
        heading: "What Google and other platforms say",
        body: [
          "Google is the only major search platform to address llms.txt directly. Its guide to optimizing for generative AI features (May 2026, updated July 2026) says Google Search ignores llms.txt files, that you do not need special machine-readable files to appear in Search or its AI features, and that creating one will neither harm nor help your visibility. Google's earlier AI features documentation makes the same point about AI text files in general.",
          "OpenAI and Anthropic document their crawlers and robots.txt controls but do not say their search products use llms.txt as a ranking or citation signal. Independent log studies published in 2026 found that most llms.txt files on the web receive few or no requests from AI crawlers. The honest summary: there is no evidence that llms.txt improves AI search visibility.",
        ],
        callout: {
          type: "takeaway",
          text: "If someone sells llms.txt as an AI search ranking tactic, ask for the platform documentation that supports it. As of October 2026, none of the major platforms provide it.",
        },
      },
      {
        heading: "Where llms.txt is genuinely useful",
        body: [
          "The file earns its place where a model is actively looking for documentation on someone's behalf. Coding agents and IDE assistants often need to read a library's or API's documentation in the middle of a task, and a curated index with Markdown versions saves them from scraping navigation-heavy HTML. Many documentation platforms now generate llms.txt automatically, and developer-focused companies publish one for their docs. Anthropic's Claude Code documentation, for example, links to its own llms.txt index from every page.",
          "It is also a convenient way to give your own AI tools (an internal assistant, a support bot, an [[/blogs/model-context-protocol|MCP server]] that exposes your docs) a single, maintained entry point.",
        ],
        table: {
          headers: ["Site type", "Recommendation"],
          rows: [
            ["API or developer documentation", "Yes: llms.txt plus Markdown versions of key pages"],
            ["SaaS with substantial help docs", "Useful for help-center content; keep it generated from the docs source"],
            ["Business or service website", "Optional; low effort, low expected impact"],
            ["Ecommerce store", "Low priority; focus on product feeds, structured data and crawlable product pages"],
            ["News or publisher site", "Low priority; crawler policy matters more"],
          ],
        },
      },
      {
        heading: "llms.txt vs robots.txt vs sitemap.xml",
        body: [
          "The three files are often confused. Only robots.txt has an access meaning, and only robots.txt and sitemaps are used by search engines.",
        ],
        table: {
          headers: ["File", "Purpose", "Used by", "Standard?"],
          rows: [
            ["robots.txt", "Tell crawlers which paths they may request", "Search engines and AI crawlers", "Yes (RFC 9309)"],
            ["sitemap.xml", "List URLs for discovery and recrawling", "Search engines", "Yes (sitemaps.org protocol)"],
            ["llms.txt", "Curated reading guide for language models", "Some developer tools and AI assistants", "No, a community proposal"],
          ],
        },
      },
      {
        heading: "If you add one, do it properly",
        body: [],
        checklist: [
          "Generate it from your content source (docs repo or CMS) so it never goes stale",
          "Link to canonical, publicly accessible URLs only",
          "Provide clean Markdown versions for the pages you list",
          "Keep descriptions factual: what each page answers",
          "List only content you are happy for anyone to extract",
          "Keep robots.txt, sitemaps and on-page content as the primary signals",
        ],
        cta: {
          title: "Publishing developer documentation?",
          description: "ZSpace Labs builds documentation sites and developer portals that work for people, search engines and coding agents, including generated llms.txt and Markdown endpoints. See [[/services/website-development|website development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "llms.txt is a reasonable idea with a narrow, real use: helping AI tools navigate documentation. It is not a search ranking factor, Google ignores it, and it does not control access. Add it where tools will read it, generate it automatically, and spend your AI search effort on the things platforms document, starting with [[/blogs/ai-crawlers-robots-txt|crawler access]] and [[/blogs/ai-search-visibility|content worth citing]].",
        ],
      },
    ],
  },
];
