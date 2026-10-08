import type { BlogPost } from "./blog-data";

/**
 * Agent-ready web and agent security (October 2026 batch). Candidate topics
 * "How AI agents actually use websites" and "The new website in the age of
 * AI agents" were merged into one article; "AI agent security: control
 * access" was replaced by the OWASP agentic guide because ai-agent-access-
 * control, ai-agent-guardrails and ai-tool-security already target it; "build
 * an agent that takes actions" was narrowed to tool design because
 * ai-agent-development owns the build intent. Facts checked 2026-10-07
 * against web.dev, Chrome for Developers (WebMCP origin trial), IETF
 * webbotauth, OpenAI help center, Visa and OWASP. Merged into `posts`.
 */

export const agentWebPosts: BlogPost[] = [
  // ---------------------------------------- HOW AI AGENTS USE WEBSITES
  {
    slug: "how-ai-agents-use-websites",
    title: "How AI Agents Actually Use Websites (and How to Make Yours Agent-Ready)",
    seoTitle: "How AI Agents Use Websites and How to Make Yours Agent-Ready",
    excerpt:
      "How browser agents read and operate websites, where they fail, what WebMCP changes, and a practical checklist to make your site agent-ready.",
    category: "Web Development",
    banner: "agentwebflow",
    bannerAlt:
      "How an AI agent completes a task on a website: User goal, Agent plans, Reads page (highlighted; via screenshot, HTML and accessibility tree), Acts, Confirms with user, Task done.",
    date: "2026-10-07",
    updated: "2026-10-08",
    readingTime: "8 min read",
    relatedServiceSlugs: ["website-development", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "travel-hospitality", "saas-technology"],
    relatedSlugs: ["ai-agent-traffic-verification", "ai-search-visibility", "agentic-commerce"],
    faqs: [
      { q: "What is a browser agent?", a: "An AI system that operates a web browser on a person's behalf: it reads pages, clicks, types and submits forms to complete a goal such as booking, buying or filling an application. Examples include ChatGPT agent, Gemini's agentic browsing in Chrome and agentic modes in AI browsers." },
      { q: "How do AI agents see a website?", a: "Through some combination of screenshots analysed by a vision model, the page's HTML (DOM) and the browser's accessibility tree, which lists interactive elements with their roles, names and states. Google's web.dev guidance describes these three views." },
      { q: "What makes a website agent-friendly?", a: "Mostly the same things that make it accessible: semantic HTML buttons and links, labelled form fields, stable layouts, no invisible overlays, clear error messages, predictable URLs and visible prices and policies. Optionally, structured tools through WebMCP or an API for key tasks." },
      { q: "What is WebMCP?", a: "A proposed web standard that lets a web page register named, typed tools (for example search products or book a table) that an AI agent in the browser can call directly instead of clicking through the interface. Chrome runs it as an origin trial from Chrome 149 through 156." },
      { q: "Should I block AI agents from my website?", a: "Blocking all automation can turn away customers who use agents to shop or book. A better approach is to allow verified agents, protect sensitive actions with confirmation and authentication, and rate-limit abuse. See our guide to verifying AI agent traffic." },
      { q: "Do agents replace my website?", a: "No. Agents still rely on your site, feeds and APIs as the source of truth and the place where transactions complete. What changes is that some visits are made by software acting for a person, so the site has to work for both." },
      { q: "Is agent-readiness the same as AI search optimization?", a: "No. AI search is about being found and cited in answers. Agent-readiness is about software being able to complete tasks on your site once it gets there. The two connect, because an agent often starts from a search result." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI agents use websites by reading a machine view of the page (a screenshot, the HTML or the browser's accessibility tree), deciding what to do next and then clicking, typing and submitting like a person would. They fail on the same things that trip up screen readers: unlabelled buttons built from `div`s, forms without labels, layouts that shift, invisible overlays and flows that hide prices or rules until late. To make a site agent-ready, fix semantic HTML and accessibility first, make key facts and policies visible, keep sensitive actions behind explicit confirmation, and consider exposing structured tools (WebMCP, an API or commerce protocols) for your most important tasks.",
        ],
      },
      {
        heading: "Agents are a new kind of visitor",
        body: [
          "For two decades websites have had two audiences: people and search crawlers. A third has arrived. Browser agents (ChatGPT agent, Gemini's agentic browsing in Chrome, agent modes in AI browsers, and custom agents built on computer-use models) visit sites to finish a task: compare three insurance quotes, book a table, reorder office supplies, fill in a supplier form.",
          "Google's web.dev team put it directly in its April 2026 guide *Build agent-friendly websites*: websites have a new type of visitor, and interfaces built around complex hover states, shifting layouts and fluid motion can be functionally broken for agents. Google's guide to generative AI features in Search makes the same point from the search side, noting that browser agents may access websites to complete tasks such as reservations.",
        ],
      },
      {
        heading: "How an agent reads your page",
        body: [
          "The web.dev guide describes three views agents use, often in combination:",
        ],
        table: {
          headers: ["View", "What the agent gets", "Where it breaks"],
          rows: [
            ["Screenshots", "An image analysed by a vision model to find buttons, fields and text", "Low contrast, tiny targets, overlays covering elements, content that moves between screenshots"],
            ["HTML (DOM)", "Structure, nesting, attributes and text", "Click handlers on generic divs, meaning hidden in CSS, huge DOMs full of tracking markup"],
            ["Accessibility tree", "A browser-built list of interactive elements with role, name and state", "Missing labels, wrong roles, custom widgets without ARIA, disabled states not exposed"],
          ],
        },
      },
      {
        heading: "Why the accessibility tree matters most",
        body: [
          "The accessibility tree is the closest thing a browser has to a map of what can be done on a page. It strips away visual noise and lists each control with its role (button, link, textbox, checkbox), its accessible name (\"Add to cart\", \"Email address\") and its state (checked, expanded, disabled). An agent that can read that map does not have to guess what a styled box does.",
          "That is why so much agent-readiness advice overlaps with accessibility work. A site that already meets WCAG basics for screen-reader users is most of the way to being usable by agents. Our [[/blogs/website-accessibility-guide|website accessibility guide]] and [[/blogs/accessible-ui-ux-design|accessible UI design guide]] cover the details.",
        ],
        callout: {
          type: "takeaway",
          text: "Agent-readiness is mostly accessibility with a new business case. If a screen-reader user can complete the task, an agent usually can too.",
        },
      },
      {
        heading: "Where agents fail on real websites",
        body: [
          "The same problems appear again and again when agents try to complete tasks on business sites:",
          "Businesses also use the same screen-reading technology to automate their own systems that lack APIs; see [[/blogs/computer-use-agents|computer-use agents for business]].",
        ],
        checklist: [
          "**Fake buttons:** clickable `div`s and `span`s with no role or keyboard support",
          "**Unlabelled inputs:** placeholders instead of `<label>` elements, so fields have no accessible name",
          "**Ghost overlays:** transparent layers, cookie banners or chat widgets covering controls",
          "**Layout shift:** elements moving after the agent has decided where to click",
          "**Hover-only menus:** options that appear only on mouse hover",
          "**Hidden facts:** delivery cost, fees, availability or eligibility revealed only at the last step",
          "**Unclear errors:** a red border with no text explaining what went wrong",
          "**Aggressive bot challenges:** CAPTCHAs or blocks on every automated client, including legitimate agents",
          "**Multi-step state in the client only:** flows that break if a page reloads or opens in a new tab",
        ],
      },
      {
        heading: "The agent-readiness checklist",
        body: [
          "Most of these fixes are small, improve the experience for people too, and can be shipped incrementally. Google's web.dev guidance includes several of them: semantic elements, labels linked to inputs, stable layouts, no ghost elements, `cursor: pointer` on clickable items and interactive targets large enough to detect.",
        ],
        table: {
          headers: ["Area", "Do this", "Why agents care"],
          rows: [
            ["Controls", "Use `<button>` and `<a href>`; add role and tabindex to any custom control", "Recognized as actionable in the DOM and accessibility tree"],
            ["Forms", "Link every `<label>` to its input; use correct input types and autocomplete attributes", "Agents know what to type where"],
            ["Layout", "Reserve space for images and banners; avoid content jumping after load", "Screenshot-based agents click where elements were"],
            ["Overlays", "Make banners and widgets dismissible and never cover primary actions", "Covered elements may be ignored"],
            ["Facts", "Show price, fees, stock, delivery, returns and eligibility early and in text", "Agents compare options and must report accurate totals"],
            ["URLs", "Stable, shareable URLs for products, searches and filtered views", "Agents can return to and cite a state"],
            ["Errors", "Specific, text-based error messages next to the field", "Agents can correct and retry"],
            ["Confirmation", "Clear review step before payment, booking or data submission", "Lets the agent pause for the user's approval"],
          ],
        },
        cta: {
          title: "Want to know where agents get stuck on your site?",
          description: "ZSpace Labs runs agent and accessibility walkthroughs of key journeys (search, quote, booking, checkout) and fixes what blocks them. See our [[/services/website-development|website development]] and [[/services/ui-ux-design|UI/UX design]] services.",
        },
      },
      {
        heading: "From clicking to calling: WebMCP and structured tools",
        body: [
          "Clicking through an interface is a fallback. It is slow, it breaks when the design changes, and it makes agents guess. The direction of travel is to let sites declare the actions they support so agents can call them directly.",
          "**WebMCP** is a proposed web standard for exactly that. A page registers tools (a name, a description, an input schema and a function) through a browser API, and an agent in the browser calls them instead of operating the UI. Chrome shipped a developer trial in May 2026 and runs a public origin trial from Chrome 149 through Chrome 156; Chrome's documentation suggests uses such as filling complex structured forms correctly. The API surface is still changing (Chromium moved the entry point from `navigator.modelContext` to `document.modelContext`), so treat it as an experiment rather than a requirement. web.dev's guide notes that sensitive actions should still require user confirmation.",
          "Outside the browser, the same idea already works through APIs and protocols: the [[/blogs/model-context-protocol|Model Context Protocol]] for connecting AI applications to your services, and commerce protocols such as UCP and ACP for product discovery and checkout, covered in our [[/blogs/agentic-commerce|agentic commerce guide]].",
          "Whether your business should offer such an interface, and what to expose first, is covered in [[/blogs/apis-for-ai-agents|should your business build APIs for AI agents]].",
          "The broader discipline of designing actions, states and errors for agents across websites, APIs and MCP is covered in [[/blogs/agent-ux-design|agent UX]].",
        ],
        table: {
          headers: ["Approach", "Best for", "Maturity (Oct 2026)"],
          rows: [
            ["Accessible, semantic UI", "Every site; agents that browse", "Established; do this first"],
            ["Public API or MCP server", "SaaS and services with programmatic tasks", "Established and growing"],
            ["Commerce protocols (UCP, ACP) and feeds", "Product discovery and checkout in AI assistants", "Live on some surfaces, early access on others"],
            ["WebMCP tools in the page", "Complex in-browser tasks: forms, configurators, bookings", "Origin trial in Chrome; experimental"],
          ],
        },
      },
      {
        heading: "Keep people in control of consequential actions",
        body: [
          "An agent acting for a customer is still acting for a customer. Payment, account changes, bookings with cancellation fees and anything involving personal data should have a clear review step that an agent can surface to its user before proceeding. Current agents generally pause for confirmation before purchases and other sensitive steps; your interface should make that pause natural, with an unambiguous summary of what will happen.",
          "On your side, treat agent traffic like any other client: authenticate accounts properly, rate-limit, and decide which agents you trust. Signed agent requests now make that possible without blocking everyone; see [[/blogs/ai-agent-traffic-verification|how to verify AI agent traffic]].",
        ],
      },
      {
        heading: "What the website of the next few years needs to be",
        body: [
          "Put together, the shift is less dramatic than headlines suggest but real. A website now has to be three things at once: a persuasive experience for people, a crawlable source of facts for search and AI answers, and an operable interface for software acting on someone's behalf. The businesses that adapt early will not be the ones with the most novel AI features; they will be the ones whose facts are clear, whose flows are accessible and whose key tasks can be completed by whatever the customer uses to reach them.",
        ],
        table: {
          headers: ["Audience", "Needs", "Where to read more"],
          rows: [
            ["People", "Clear value, trust, fast pages, easy decisions", "[[/blogs/why-page-speed-still-decides-conversion|Page speed and conversion]]"],
            ["Search and AI answers", "Crawlable pages with specific, consistent facts", "[[/blogs/ai-search-visibility|AI search visibility]]"],
            ["Agents", "Accessible controls, visible facts, confirmations, optional tools", "This article"],
          ],
        },
      },
      {
        heading: "How to start",
        body: [],
        checklist: [
          "**Pick three journeys** that matter most (for example enquiry form, product search to cart, booking)",
          "**Run them with an agent** and with a screen reader; note every place either gets stuck",
          "**Fix semantics and labels** on those journeys first; they are usually quick changes",
          "**Surface facts early:** prices, fees, availability, policies",
          "**Add a clear review step** before any payment or submission",
          "**Review bot protection** so verified agents are not blocked by default",
          "**Evaluate structured access** (API, MCP, commerce protocols, WebMCP trial) for your highest-value task",
        ],
      },
      {
        heading: "AI search discoverability vs agent interaction",
        body: [
          "Being visible to an AI answer engine and being usable by an autonomous agent are different problems. Discoverability is about reading: crawler access, indexable pages and specific facts worth citing (see [[/blogs/ai-search-visibility|AI search visibility]]). Interaction is about doing: semantic controls, stable flows, visible prices and policies, authentication, confirmations and, increasingly, action interfaces such as APIs or WebMCP tools. A site can be cited constantly in AI answers and still be impossible for an agent to book or buy on, and the reverse.",
        ],
        table: {
          headers: ["", "AI search discoverability", "Agent interaction"],
          rows: [
            ["Goal", "Be found and cited", "Let software complete tasks"],
            ["Depends on", "Crawling, indexing, content quality, consistent facts", "Semantic HTML, accessibility, stable flows, APIs, auth"],
            ["Key data", "Text, structured data, feeds", "Prices, availability, policies, form fields, action endpoints"],
            ["Measured by", "AI impressions and referrals", "Agent task completion, agent-placed orders"],
          ],
        },
      },
      {
        heading: "Conclusion",
        body: [
          "AI agents read websites through screenshots, HTML and the accessibility tree, and they struggle wherever the page is ambiguous. The fix is mostly good engineering you should be doing anyway: semantic, accessible, stable interfaces with honest information up front and clear confirmation steps. Structured tools such as WebMCP are worth watching and piloting, but the accessible interface is the part every agent can use today.",
          "For the strategic picture of how websites now serve people, search engines, AI systems and agents at once, read [[/blogs/will-ai-agents-replace-websites|will AI agents replace websites?]].",
        ],
        cta: {
          title: "Planning a site that works for people, search and agents?",
          description: "Talk to ZSpace Labs about building or upgrading your website with accessible, agent-ready journeys. [[/contact|Discuss your project]].",
        },
      },
    ],
  },

  // ---------------------------------------- AI AGENT TRAFFIC VERIFICATION
  {
    slug: "ai-agent-traffic-verification",
    title: "Good Bots, Bad Bots and AI Agents: How to Verify Agent Traffic Without Blocking Customers",
    seoTitle: "How to Verify AI Agent Traffic Without Blocking Customers",
    excerpt:
      "How signed agent requests, Web Bot Auth and Visa's Trusted Agent Protocol let you allow trusted AI shopping agents and still stop malicious bots.",
    category: "Shopify & Ecommerce",
    banner: "agentverifyflow",
    bannerAlt:
      "Verifying an AI agent request: Request, Read signature headers, Fetch key directory, Verify signature (highlighted), Apply policy, Allow or limit; unsigned requests branch to rate-limiting or a challenge.",
    date: "2026-10-07",
    readingTime: "7 min read",
    relatedServiceSlugs: ["shopify-development", "website-development"],
    relatedIndustrySlugs: ["ecommerce", "travel-hospitality", "fintech"],
    relatedSlugs: ["how-ai-agents-use-websites", "ai-crawlers-robots-txt", "agentic-commerce"],
    faqs: [
      { q: "How can I tell a real AI agent from a bad bot?", a: "User agent strings are easy to fake. Reputable agent operators increasingly sign their requests with HTTP Message Signatures (RFC 9421) and publish their public keys, so your server or CDN can verify cryptographically which operator sent a request. Combine that with behaviour-based bot detection for everything unsigned." },
      { q: "What is Web Bot Auth?", a: "A set of specifications being standardized in the IETF's Web Bot Auth (webbotauth) working group for cryptographically authenticating automated clients such as crawlers and AI agents, and for conveying information about their operators. It builds on HTTP Message Signatures." },
      { q: "Does ChatGPT agent identify itself?", a: "Yes. OpenAI says ChatGPT agent signs every outbound HTTP request using HTTP Message Signatures, with a Signature-Agent header of \"https://chatgpt.com\" and a public key directory you can verify against." },
      { q: "What is Visa's Trusted Agent Protocol?", a: "An open framework Visa announced in October 2025, developed with Cloudflare, that lets approved AI agents send signed information to merchants so they can distinguish legitimate agents acting for consumers from malicious bots. It builds on HTTP Message Signatures and aligns with Web Bot Auth." },
      { q: "Should I just block all AI agents to be safe?", a: "That trades one risk for another. As more shoppers use assistants to find, compare and buy, blanket blocks can stop real customers. Allow verified agents on browse and cart paths, require the customer's confirmation for payment, and challenge or rate-limit unverified automation." },
      { q: "Does verifying an agent mean I trust everything it does?", a: "No. A signature proves who operates the agent, not that the request is legitimate or that the user intended it. Keep authentication, payment verification, fraud screening and rate limits in place." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Treat AI agents as a third category alongside humans and bad bots. Signed requests make that practical: ChatGPT agent and other operators sign their HTTP requests (RFC 9421 HTTP Message Signatures) and publish keys, the IETF's Web Bot Auth working group is standardizing the approach, and Visa's Trusted Agent Protocol uses it for agent checkout. Verify signatures at your CDN or edge, allow verified agents on browsing and cart paths, keep payment and account changes behind customer confirmation and normal fraud checks, and rate-limit or challenge unsigned automation. Do not rely on user agent strings, and do not block all automation by default.",
        ],
      },
      {
        heading: "Why blanket bot blocking is becoming expensive",
        body: [
          "For years the safe default was simple: anything that is not a browser operated by a person is suspicious. Credential stuffing, scalping, scraping and card testing made that a reasonable rule, and bot-protection products are good at enforcing it.",
          "Agentic commerce breaks the rule. When a shopper asks an assistant to find a product, compare options and put it in a cart, the request reaching your store comes from automation acting with permission. If your defences treat it like a scraper, you lose the sale and never see it in analytics. The same applies to travel bookings, restaurant reservations, appointment scheduling and B2B reordering. Our [[/blogs/agentic-commerce|agentic commerce guide]] covers how these purchases work end to end.",
        ],
        table: {
          headers: ["Traffic", "Intent", "Desired treatment"],
          rows: [
            ["Customer in a browser", "Buy, book, enquire", "Allow; normal fraud checks"],
            ["Search and AI search crawlers", "Index content", "Allow on public pages; verify by IP or signature"],
            ["Verified AI agent acting for a user", "Browse, compare, add to cart, check out with confirmation", "Allow on defined paths; confirm sensitive steps"],
            ["Unverified automation", "Unknown", "Rate-limit, challenge, monitor"],
            ["Malicious bots", "Scrape, stuff credentials, test cards, hoard stock", "Block"],
          ],
        },
      },
      {
        heading: "Why user agents and IP lists are not enough",
        body: [
          "A user agent string is self-declared; any script can claim to be ChatGPT. IP allowlists are better for crawlers (OpenAI, Google and others publish their crawler ranges), but they are brittle for agents that run on shared cloud infrastructure, and they say nothing about which operator or product sent a specific request. Verifying claimed crawlers by IP or reverse DNS remains good practice, but for agents acting on behalf of people you need something stronger.",
        ],
      },
      {
        heading: "How signed agent requests work",
        body: [
          "HTTP Message Signatures (RFC 9421) let a client sign selected parts of an HTTP request with a private key. The server verifies the signature with the matching public key. For bots and agents, the operator publishes its public keys in a directory at a well-known URL and adds headers that tell the server where to find them.",
          "OpenAI documents this for ChatGPT agent: each request carries `Signature` and `Signature-Input` headers plus a `Signature-Agent` header set to `\"https://chatgpt.com\"`, and the keys are published at a well-known HTTP message signatures directory on chatgpt.com. A server verifies that the Signature-Agent value matches, fetches the key, and checks the signature as defined in RFC 9421.",
          "The IETF chartered the **Web Bot Auth (webbotauth)** working group to standardize these methods for crawlers, archivers and AI agents, with milestones through 2026 for authentication techniques, conveying bot information and operational best practice. Several CDN and bot-management providers already verify signed agents for their customers, which means many merchants can enable verification as a setting rather than writing code.",
        ],
        code: {
          label: "Simplified headers on a signed agent request",
          text: `GET /products/trail-shoe-42 HTTP/1.1
Host: shop.example.com
Signature-Agent: "https://chatgpt.com"
Signature-Input: sig1=("@authority" "@method" "@path" "signature-agent");created=1791400000;expires=1791400300;keyid="…";tag="web-bot-auth"
Signature: sig1=:BASE64SIGNATURE…:`,
        },
        callout: {
          type: "note",
          text: "The header example is illustrative and shortened. Use your CDN's built-in verification or a maintained library rather than writing signature verification from scratch.",
        },
      },
      {
        heading: "Payments: Visa's Trusted Agent Protocol and similar efforts",
        body: [
          "Card networks have the same problem at checkout: was this purchase made by a legitimate agent acting for a real cardholder? Visa announced its **Trusted Agent Protocol** in October 2025, developed with Cloudflare and with feedback from payment providers and platforms including Adyen, Checkout.com, Stripe, Shopify, Worldpay and Microsoft. It lets approved agents pass signed information to merchants so they can tell legitimate agents from malicious bots, for both guest and logged-in checkout. Visa describes it as built on HTTP Message Signatures and aligned with Web Bot Auth.",
          "Mastercard has a parallel programme (Agent Pay), and Google's Agent Payments Protocol (AP2) focuses on proving the user authorized a purchase. For merchants, the practical message is the same: these schemes are arriving through payment providers and CDNs, so ask yours what they support rather than building to a protocol directly.",
        ],
      },
      {
        heading: "A policy that allows agents and stops abuse",
        body: [
          "Write the policy by path and action, not by bot name.",
        ],
        table: {
          headers: ["Path or action", "Verified agent", "Unverified automation"],
          rows: [
            ["Public pages, product and category pages", "Allow", "Allow with rate limits"],
            ["Search and filters", "Allow with rate limits", "Rate-limit tightly or challenge"],
            ["Add to cart", "Allow", "Challenge on unusual patterns (stock hoarding)"],
            ["Login and account creation", "Allow via user's own credentials or OAuth; monitor", "Challenge; protect against credential stuffing"],
            ["Checkout and payment", "Allow with customer confirmation and normal fraud screening", "Challenge or block"],
            ["Account changes, refunds, addresses", "Require step-up confirmation by the customer", "Block"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "A valid signature tells you who operates the agent, not whether this particular request is legitimate. Keep authentication, fraud screening and confirmation steps in place for consequential actions.",
        },
      },
      {
        heading: "Implementation steps",
        body: [],
        checklist: [
          "**Measure first:** identify automated traffic by user agent, signature headers and behaviour in your CDN and server logs",
          "**Ask your CDN or bot vendor** whether it verifies signed agents (Web Bot Auth, ChatGPT agent) and how to configure policies",
          "**Ask your payment provider** about agent checkout support (Visa TAP, Mastercard Agent Pay, AP2) and fraud rules for agent-initiated orders",
          "**Define the path policy** above and apply it at the edge",
          "**Label agent sessions** in analytics so you can see agent-assisted orders and conversion",
          "**Make confirmation steps explicit** so agents can surface them to users (see [[/blogs/how-ai-agents-use-websites|how AI agents use websites]])",
          "**Review monthly:** new operators, false positives, abuse patterns",
        ],
        cta: {
          title: "Running a store that needs to welcome AI shoppers?",
          description: "ZSpace Labs configures bot policies, agent-ready checkout flows and analytics for Shopify and custom stores. See [[/services/shopify-development|Shopify development services]].",
        },
      },
      {
        heading: "Limitations and open questions",
        body: [
          "Signed agents are new. Not every operator signs requests yet, standards are still being finalized, and the long tail of smaller agents will take time to adopt them. Signatures also do not answer every question: an agent might be operated by a reputable company and still be misused by its user. Expect to run signature verification alongside behavioural bot detection for some time, and to adjust the policy as payment networks and platforms settle on their schemes.",
          "For crawler-specific controls, see [[/blogs/ai-crawlers-robots-txt|AI crawlers and robots.txt]]. For general store protection, see [[/blogs/ecommerce-security|ecommerce security]] and [[/blogs/ecommerce-fraud-detection|ecommerce fraud detection]].",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "The old rule (humans good, automation bad) no longer fits a world where customers delegate shopping and booking to assistants. Verify agents cryptographically where operators support it, allow them on low-risk paths, keep customers in control of payment and account changes, and keep blocking the abuse you were blocking before. That keeps the door open for AI-assisted customers without opening it to everyone.",
        ],
      },
    ],
  },

  // ---------------------------------------- OWASP TOP 10 FOR AGENTIC APPLICATIONS
  {
    slug: "owasp-top-10-agentic-applications",
    title: "OWASP Top 10 for Agentic Applications: A Practical Guide for Teams Building Agents",
    seoTitle: "OWASP Top 10 for Agentic Applications Explained (ASI01–ASI10)",
    excerpt:
      "The OWASP Top 10 for Agentic Applications (ASI01–ASI10) in plain language, with an example and the first controls to implement for each risk.",
    category: "AI & Automation",
    banner: "owaspagentic",
    bannerAlt:
      "OWASP Top 10 for Agentic Applications grouped: Inputs (goal hijack, memory poisoning), Actions (highlighted: tool misuse, identity abuse, code execution), System (supply chain, agent messages, cascades) and People (trust exploits, rogue agents).",
    date: "2026-10-07",
    readingTime: "9 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["fintech", "healthcare-healthtech", "b2b-enterprise"],
    relatedSlugs: ["ai-agent-guardrails", "ai-agent-access-control", "ai-tool-security"],
    faqs: [
      { q: "What is the OWASP Top 10 for Agentic Applications?", a: "A peer-reviewed list of the ten most important security risks specific to autonomous AI agents, published on 9 December 2025 by the OWASP GenAI Security Project. The risks are numbered ASI01 to ASI10." },
      { q: "How is it different from the OWASP Top 10 for LLM Applications?", a: "The LLM list covers risks in applications that use language models, such as prompt injection and sensitive information disclosure. The agentic list focuses on what changes when models plan, keep memory, call tools and act with delegated authority, such as tool misuse, identity abuse and cascading failures across agents." },
      { q: "What is ASI01 Agent Goal Hijack?", a: "An attacker changes what the agent is trying to achieve, usually by planting instructions in content the agent reads, such as a web page, document, email or tool result. It is closely related to indirect prompt injection." },
      { q: "Which risks should a small team address first?", a: "Start with the ones that turn a model mistake into real damage: least-privilege tool access and identity (ASI02, ASI03), treating external content as untrusted (ASI01), sandboxing code execution (ASI05) and human approval for consequential actions (ASI09)." },
      { q: "Is the list a compliance standard?", a: "No. It is guidance for identifying and prioritizing risks. Many teams use it as a threat-modelling checklist and map controls to it alongside frameworks such as the NIST AI Risk Management Framework." },
      { q: "Do these risks apply to MCP servers?", a: "Yes. MCP servers are tools and supply-chain components for agents, so tool misuse, supply chain and identity risks apply directly." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "The OWASP Top 10 for Agentic Applications, published in December 2025, lists the ten most important security risks for AI agents that plan, remember, call tools and act on someone's behalf: **ASI01 Agent Goal Hijack, ASI02 Tool Misuse and Exploitation, ASI03 Identity and Privilege Abuse, ASI04 Agentic Supply Chain Vulnerabilities, ASI05 Unexpected Code Execution, ASI06 Memory and Context Poisoning, ASI07 Insecure Inter-Agent Communication, ASI08 Cascading Failures, ASI09 Human-Agent Trust Exploitation and ASI10 Rogue Agents**. Most share one root cause: an agent with more access than it needs, reading content it should not trust. Least privilege, untrusted-input handling, sandboxing, human approval and full audit logs address the majority.",
        ],
      },
      {
        heading: "Why agents need their own list",
        body: [
          "A chatbot that gives a wrong answer produces a bad paragraph. An agent that is manipulated can send the email, issue the refund, run the command or change the record. The OWASP GenAI Security Project built the agentic list from incidents and research in 2025, with input from more than a hundred practitioners, to capture what changes when models are given autonomy and tools.",
          "Use it as a threat-modelling checklist: for each risk, ask whether your agent could be affected, what the worst outcome would be, and which control limits it. The sections below explain each risk, give an example and list the first controls to put in place. Deeper guides on specific controls are linked throughout.",
        ],
      },
      {
        heading: "The ten risks at a glance",
        body: [],
        table: {
          headers: ["ID", "Risk", "In one line", "First control"],
          rows: [
            ["ASI01", "Agent Goal Hijack", "Planted instructions redirect the agent's objective", "Treat all retrieved content as data, not instructions"],
            ["ASI02", "Tool Misuse and Exploitation", "Legitimate tools used in harmful ways", "Narrow tools, validated parameters, limits"],
            ["ASI03", "Identity and Privilege Abuse", "Agent credentials grant too much or are borrowed", "Per-agent identity, scoped short-lived credentials"],
            ["ASI04", "Agentic Supply Chain Vulnerabilities", "Compromised tools, MCP servers, plugins or models", "Vet, pin and review components"],
            ["ASI05", "Unexpected Code Execution", "Agent-generated or injected code runs with real access", "Sandbox execution; no production credentials"],
            ["ASI06", "Memory and Context Poisoning", "Malicious data persists in memory or RAG and steers later runs", "Validate and scope what gets remembered"],
            ["ASI07", "Insecure Inter-Agent Communication", "Messages between agents spoofed or tampered", "Authenticate agents; validate messages"],
            ["ASI08", "Cascading Failures", "One error multiplies across agents and steps", "Budgets, circuit breakers, checkpoints"],
            ["ASI09", "Human-Agent Trust Exploitation", "People approve what the agent presents without real scrutiny", "Meaningful approvals with clear summaries"],
            ["ASI10", "Rogue Agents", "Agents acting outside intended behaviour or control", "Monitoring, kill switch, inventory"],
          ],
        },
      },
      {
        heading: "ASI01: Agent Goal Hijack",
        body: [
          "**What it is:** an attacker changes the agent's objective, usually through instructions hidden in something the agent reads: a web page, PDF, email, support ticket, code comment or tool output. The agent then pursues the attacker's goal while appearing to do its job.",
          "**Example:** a support agent summarizes incoming emails. One email contains hidden text telling it to forward the last ten customer conversations to an outside address.",
          "**First controls:** keep untrusted content clearly separated from instructions; never let retrieved content expand the agent's permissions; require approval for any action not implied by the user's request; filter outbound channels such as email and URLs. See [[/blogs/indirect-prompt-injection|indirect prompt injection]] and [[/blogs/prompt-injection-prevention|prompt injection prevention]].",
        ],
      },
      {
        heading: "ASI02: Tool Misuse and Exploitation",
        body: [
          "**What it is:** the agent uses tools it is allowed to use, but in harmful ways: deleting instead of archiving, querying far more data than needed, calling an expensive API in a loop, or chaining safe tools into an unsafe outcome.",
          "**Example:** an operations agent with a general \"run SQL\" tool is asked to clean up test data and deletes production rows.",
          "**First controls:** replace broad tools with narrow ones (\"archive order\" rather than \"run SQL\"), validate parameters server-side, cap quantities and rates, and mark destructive tools for confirmation. Our guides to [[/blogs/ai-tool-security|AI tool security]] and [[/blogs/ai-agent-tool-design|AI agent tool design]] cover this in depth.",
        ],
      },
      {
        heading: "ASI03: Identity and Privilege Abuse",
        body: [
          "**What it is:** agents run with credentials that are too broad, shared between agents, long-lived, or borrowed from a powerful user, so any compromise or mistake inherits all of that access.",
          "**Example:** a reporting agent uses an administrator's API key because it was quicker to set up; a goal hijack lets it change billing settings.",
          "**First controls:** give each agent its own identity, act on behalf of the user with delegated, scoped tokens where possible, keep credentials short-lived and out of the model's context, and enforce authorization in your systems, not in the prompt. See [[/blogs/ai-agent-access-control|AI agent access control]].",
        ],
      },
      {
        heading: "ASI04: Agentic Supply Chain Vulnerabilities",
        body: [
          "**What it is:** the agent depends on components you did not build (models, MCP servers, plugins, tool descriptions, prompt templates, packages) and one of them is malicious, compromised or changes behaviour after you trusted it.",
          "**Example:** a community MCP server update adds a tool description instructing the agent to send file contents to an external endpoint.",
          "**First controls:** maintain an inventory of agent components, pin versions, review tool descriptions and permissions on update, prefer official servers, and run third-party components with minimal access. See [[/blogs/mcp-security|MCP security]] and [[/blogs/ai-supply-chain-security|AI supply chain security]].",
        ],
      },
      {
        heading: "ASI05: Unexpected Code Execution",
        body: [
          "**What it is:** the agent writes or receives code and runs it (scripts, shell commands, notebooks, generated queries) with access to real systems, turning a manipulation into remote code execution.",
          "**Example:** a coding agent reads a repository file containing injected instructions and runs a command that exfiltrates environment variables.",
          "**First controls:** run code in sandboxes with no production credentials and restricted network egress, allowlist commands where possible, and require approval for anything outside the sandbox. Coding agents need particular care; see [[/blogs/ai-coding-agent-security|securing AI coding agents]].",
        ],
      },
      {
        heading: "ASI06: Memory and Context Poisoning",
        body: [
          "**What it is:** malicious or false information is written into the agent's long-term memory, a shared knowledge base or a RAG index, and quietly influences future runs, sometimes for other users.",
          "**Example:** a user convinces an assistant to \"remember\" that refunds over a limit no longer need approval; later sessions follow that rule.",
          "**First controls:** decide explicitly what may be stored, keep memory scoped per user or tenant, record the source of each memory, review or expire memories that change behaviour, and protect retrieval indexes like any data store. See [[/blogs/ai-agent-memory|AI agent memory]].",
        ],
      },
      {
        heading: "ASI07: Insecure Inter-Agent Communication",
        body: [
          "**What it is:** in multi-agent systems, messages between agents can be spoofed, replayed, tampered with or used to smuggle instructions from a compromised agent to others.",
          "**Example:** a compromised research agent tells the purchasing agent that a supplier has been pre-approved.",
          "**First controls:** authenticate agents to each other, validate message structure, treat other agents' outputs as untrusted input, and keep authority with the system of record rather than with what another agent says. See [[/blogs/agent-to-agent-communication|agent-to-agent communication]].",
        ],
      },
      {
        heading: "ASI08: Cascading Failures",
        body: [
          "**What it is:** a small error (a hallucinated fact, a failed tool call, a bad plan) propagates through steps or agents and multiplies: retries that loop, downstream agents acting on wrong data, costs that spiral.",
          "**Example:** an inventory agent misreads a feed and marks hundreds of products out of stock; a pricing agent responds by changing prices across the catalogue.",
          "**First controls:** set budgets for steps, tokens, spend and affected records; add circuit breakers and anomaly checks; checkpoint long workflows; and require human review when the blast radius exceeds a threshold. See [[/blogs/ai-agent-orchestration|AI agent orchestration]].",
        ],
      },
      {
        heading: "ASI09: Human-Agent Trust Exploitation",
        body: [
          "**What it is:** the human in the loop becomes a rubber stamp. Agents present confident summaries, approvals arrive in volume, and people approve what they do not actually check, or attackers use the agent's credibility to persuade users.",
          "**Example:** a finance approver receives fifty agent-prepared payment approvals a day and approves a manipulated one because the summary looked routine.",
          "**First controls:** make approvals meaningful: show exactly what will happen, highlight changes from normal, reduce volume by auto-handling only truly low-risk cases, and sample approved actions for review. See [[/blogs/human-in-the-loop-ai|human-in-the-loop AI]].",
        ],
      },
      {
        heading: "ASI10: Rogue Agents",
        body: [
          "**What it is:** an agent operates outside its intended behaviour or oversight, whether through compromise, misconfiguration, emergent behaviour in long-running autonomy, or simply being forgotten while still holding credentials.",
          "**Example:** a pilot agent from last year still runs nightly with access to the CRM, though nobody monitors its output.",
          "**First controls:** keep an inventory of every agent, its owner, permissions and purpose; monitor behaviour against expectations; have a tested kill switch that revokes credentials; and decommission agents properly. See [[/blogs/ai-agent-observability|AI agent observability]] and [[/blogs/ai-governance-framework|AI governance]].",
        ],
      },
      {
        heading: "How to use the list in practice",
        body: [
          "Run a short workshop per agent. List its tools, data access, memory, other agents it talks to and the people who approve its actions. Walk through ASI01 to ASI10 and mark each risk as not applicable, mitigated or open. Prioritize open risks by impact. Then turn the result into tests: injection attempts in documents, out-of-scope tool calls, expired credentials, poisoned memory entries. Repeat whenever tools or permissions change.",
        ],
        checklist: [
          "Inventory every agent with owner, purpose, tools and permissions",
          "Map each agent against ASI01–ASI10 and record decisions",
          "Enforce least privilege and per-agent identity before adding tools",
          "Sandbox all code execution",
          "Gate consequential actions with meaningful human approval",
          "Log every tool call with inputs, outputs and identity",
          "Red-team with planted instructions and poisoned data before launch (see [[/blogs/ai-red-teaming|AI red teaming]])",
        ],
        cta: {
          title: "Building agents that touch real systems?",
          description: "ZSpace Labs designs agents with least-privilege tools, approvals and audit trails from the start, and reviews existing agents against the OWASP agentic risks. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "The OWASP agentic list gives teams a shared vocabulary for risks that did not exist when software only did what it was explicitly coded to do. You do not need ten separate programmes: scope tools and identities tightly, treat everything the agent reads as untrusted, sandbox execution, make human approvals real and watch what agents actually do. Those five habits cover most of the list.",
        ],
      },
    ],
  },

  // ---------------------------------------- AI AGENT TOOL DESIGN
  {
    slug: "ai-agent-tool-design",
    title: "AI Agent Tool Design: How to Build Tools an Agent Can Use Reliably",
    seoTitle: "AI Agent Tool Design: Building Tools Agents Use Reliably",
    excerpt:
      "How to design tools an AI agent can use reliably: granularity, names and descriptions, input schemas, outputs, errors, safe writes and evaluation.",
    category: "AI & Automation",
    banner: "tooldesignflow",
    bannerAlt:
      "Designing an agent tool: Pick the task, Name + describe, Input schema, Execute safely (highlighted), Useful output, Evaluate, with a loop to refine from real transcripts.",
    date: "2026-10-07",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise"],
    relatedSlugs: ["ai-agent-development", "ai-tool-security", "how-to-build-an-mcp-server"],
    faqs: [
      { q: "What is a tool in an AI agent?", a: "A function the model can ask your application to run, described by a name, a natural-language description and an input schema. The model chooses a tool and arguments; your code executes it and returns the result." },
      { q: "How many tools should an agent have?", a: "As few as the task needs. Agents choose more reliably between a small set of distinct tools than among dozens of overlapping ones. Group related operations or split work across specialized agents when the list grows long." },
      { q: "Should I just expose my existing API endpoints as tools?", a: "Usually not one-to-one. APIs are designed for programs that already know the workflow. Agent tools work better when they match tasks (find a customer's open orders) rather than raw endpoints (list orders with 20 filter parameters)." },
      { q: "How do I stop an agent from taking dangerous actions?", a: "Do not rely on the description alone. Enforce authorization and limits in your code, separate read tools from write tools, require confirmation for destructive or financial actions, and make writes idempotent so retries do not duplicate effects." },
      { q: "What should a tool return?", a: "The information the agent needs for its next decision, in a compact and readable form: meaningful identifiers and names rather than internal codes, paginated or truncated results, and clear error messages that say how to fix the call." },
      { q: "How do I know whether my tools are good?", a: "Evaluate them with realistic tasks. Run the agent on a set of real requests, check whether it picks the right tools with the right arguments, read the transcripts where it fails, and refine names, descriptions and outputs." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An agent is only as good as the actions it can take. Design tools around tasks, not raw endpoints; keep the set small and distinct; give each tool a clear name, a description that says when to use it and a strict input schema; return compact, meaningful results and errors that explain how to recover; separate reads from writes; make writes idempotent; enforce permissions and limits in code; and require confirmation for consequential actions. Then evaluate the tools on real tasks and refine them from the transcripts.",
        ],
      },
      {
        heading: "Where tools fit in an agent",
        body: [
          "Every major model API supports tool use (also called function calling): you describe functions, the model decides when to call one and with which arguments, your application runs it and returns the result, and the loop continues until the task is done. The [[/blogs/model-context-protocol|Model Context Protocol]] standardizes the same idea across applications, so a tool written as an MCP server can be used by many agents.",
          "The model never touches your systems directly. Your code does, which means tool design is where usefulness and safety are decided. For the overall build, see our [[/blogs/ai-agent-development|AI agent development guide]]; this article focuses on the tools themselves.",
        ],
      },
      {
        heading: "Choose the right granularity",
        body: [
          "The most common mistake is wrapping every API endpoint as a tool. An agent then has to discover multi-step workflows, juggle IDs and read large payloads, which wastes context and creates errors. Anthropic's engineering guidance on writing tools for agents makes the same point: build a few thoughtful tools for high-impact workflows rather than mirroring an API.",
        ],
        table: {
          headers: ["Endpoint-shaped tool", "Task-shaped tool", "Why it is better"],
          rows: [
            ["list_customers + list_orders + get_order", "find_customer_orders(customer_email, status)", "One call, no ID juggling"],
            ["update_record(table, id, fields)", "update_shipping_address(order_id, address)", "Narrow, validatable, auditable"],
            ["run_sql(query)", "get_sales_summary(period, region)", "No arbitrary queries; predictable cost"],
            ["send_email(to, subject, body)", "send_order_update(order_id, template)", "Recipients and content constrained"],
          ],
        },
        callout: {
          type: "tip",
          text: "Write down the ten tasks the agent must handle, then design the smallest set of tools that covers them. Add tools only when a real task needs one.",
        },
      },
      {
        heading: "Names and descriptions are prompts",
        body: [
          "The model chooses tools from their names and descriptions, so treat them as carefully as any prompt. Use clear verbs and nouns, consistent prefixes for related tools (`orders_search`, `orders_get`), and descriptions that say what the tool does, when to use it, when not to, and what it returns. Spell out units, formats and constraints.",
        ],
        code: {
          label: "A tool definition with a useful description",
          text: `{
  "name": "orders_find_by_customer",
  "description": "Find a customer's orders by email. Use when the user asks about their orders, deliveries or returns. Returns up to 10 most recent orders with status and delivery date. Does not return payment details. For a single known order number, use orders_get instead.",
  "input_schema": {
    "type": "object",
    "properties": {
      "customer_email": { "type": "string", "format": "email" },
      "status": { "type": "string", "enum": ["any", "open", "shipped", "delivered", "returned"], "default": "any" }
    },
    "required": ["customer_email"],
    "additionalProperties": false
  }
}`,
        },
      },
      {
        heading: "Make inputs hard to get wrong",
        body: [
          "Use strict schemas: enums instead of free text, explicit formats for dates and emails, required fields marked, and no unexpected properties. Most model APIs offer a strict or structured mode that constrains arguments to the schema; turn it on where available. Then validate again on the server anyway, because the schema guides the model but your code is the enforcement point.",
          "Prefer identifiers the model can obtain naturally (an email the user gave, an order number shown in an earlier result) over internal IDs it would have to guess.",
        ],
      },
      {
        heading: "Return what the next step needs",
        body: [
          "Tool results go back into the model's context, where every token costs money and attention. Return the fields that matter for the next decision, use human-readable names alongside IDs, paginate or truncate long lists and say that you did, and offer a concise and a detailed mode if both are needed.",
          "Errors deserve the same care. \"400 Bad Request\" teaches the agent nothing. \"No customer found for that email. Ask the user to confirm the email address or provide an order number\" lets it recover.",
        ],
        table: {
          headers: ["Weak result", "Better result"],
          rows: [
            ["Full JSON of 200 orders with 60 fields each", "10 most recent orders: number, date, status, total, delivery date; note that more exist"],
            ["{\"error\": \"ERR_42\"}", "\"Address update not allowed: order already shipped. Offer the user a return or redirect request instead.\""],
            ["Internal status code 7", "\"Status: awaiting payment confirmation\""],
          ],
        },
      },
      {
        heading: "Design writes for safety and retries",
        body: [
          "Write tools change the world, so they need more than a good description.",
        ],
        checklist: [
          "**Separate reads from writes** so read-only agents can be given only read tools",
          "**Make writes idempotent** with an idempotency key, so a retried call does not create two refunds",
          "**Enforce authorization in code** using the identity of the user the agent acts for, never a flag in the prompt",
          "**Limit blast radius:** maximum amounts, quantities and affected records per call",
          "**Require confirmation** for destructive, financial or external-communication actions, ideally by returning a preview the user approves",
          "**Log every call** with arguments, result, identity and the run it belonged to",
        ],
        callout: {
          type: "note",
          text: "MCP lets servers annotate tools with hints such as read-only or destructive. They help clients decide when to ask for confirmation, but they are hints. Enforcement still belongs in your server.",
        },
      },
      {
        heading: "Confirmation patterns that work",
        body: [
          "Asking \"Are you sure?\" before every action trains people to click yes. Reserve confirmation for actions that are costly, irreversible or visible to others, and make it informative.",
        ],
        table: {
          headers: ["Pattern", "How it works", "Use for"],
          rows: [
            ["Preview then commit", "Tool returns a summary and a token; a second call with the token executes", "Refunds, bulk updates, sending messages"],
            ["Draft for human", "Agent creates a draft in your system; a person sends or applies it", "Customer emails, contracts, price changes"],
            ["Thresholds", "Auto-execute below a limit, require approval above it", "Discounts, credits, purchase orders"],
            ["Undo window", "Execute with a short reversal period", "Low-risk, reversible changes"],
          ],
        },
        cta: {
          title: "Designing agents that take real actions?",
          description: "ZSpace Labs builds task-shaped tools, MCP servers and approval flows around your existing systems. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Evaluate tools with real tasks",
        body: [
          "Tools are hard to judge by reading them. Build a set of realistic requests (including ambiguous and adversarial ones), run the agent, and check whether it chose the right tools with the right arguments, how many calls it needed and where it failed. Read the transcripts: confusion between two tools usually means their descriptions overlap; repeated retries usually mean errors are unhelpful; long runs usually mean results are too verbose.",
          "Repeat the evaluation whenever you change a tool, its description or the model. Our [[/blogs/ai-agent-evaluation|AI agent evaluation guide]] covers building the test set and metrics.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Mirroring every API endpoint as a separate tool",
          "Overlapping tools with similar names and vague descriptions",
          "Free-text parameters where an enum or format would do",
          "Returning entire records or unpaginated lists",
          "Opaque error codes the agent cannot act on",
          "Write tools without idempotency, limits or confirmation",
          "Relying on the prompt to enforce permissions",
          "Never evaluating tools against real tasks",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Good agents are built from good tools: few, task-shaped, clearly described, strictly typed, economical in what they return and safe when they write. Treat tool design as product design for a very literal user, evaluate it with real tasks and enforce every rule in code. For the security side, read [[/blogs/ai-tool-security|AI tool security]]; to package tools for many agents, see [[/blogs/how-to-build-an-mcp-server|how to build an MCP server]].",
          "When an agent has access to many tools, see [[/blogs/ai-agent-tool-selection|AI agent tool selection]]; to make tool arguments and results dependable, see [[/blogs/llm-structured-outputs|structured outputs]].",
        ],
      },
    ],
  },
];
