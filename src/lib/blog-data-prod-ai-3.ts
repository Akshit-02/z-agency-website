import type { BlogPost } from "./blog-data";

/**
 * Production AI batch (2026-10-08), part three: local and hybrid AI, AI
 * commerce operations and the flagship "future of websites" article.
 * "Local AI vs cloud AI" and "hybrid AI architecture" were merged; "AI
 * inference cost by task" was replaced by small-language-models because
 * llm-routing owns per-task model choice; the two AI-shopping candidates
 * were replaced by agent-placed-orders because ai-commerce-analytics and
 * ai-agents-ecommerce-funnel (2026-10-07) own them. Sources checked
 * 2026-10-08: Microsoft Foundry blog (Foundry Local GA, April 2026), Apple
 * WWDC26 guide, Android Developers blog (I/O 2026), NVIDIA Research (arXiv
 * 2506.02153), Shopify Help Center, Visa (TAP, Oct 2025), web.dev (Apr
 * 2026), Google Search Central, Chrome WebMCP docs, Adobe via Digital
 * Commerce 360 (Aug 2026).
 */

export const prodAiPosts3: BlogPost[] = [
  // ---------------------------------------- HYBRID AI ARCHITECTURE
  {
    slug: "hybrid-ai-architecture",
    title: "Local AI vs Cloud AI: How to Design a Hybrid AI Architecture",
    seoTitle: "Local AI vs Cloud AI: How to Design a Hybrid AI Architecture",
    excerpt:
      "How to choose between local and cloud AI on privacy, latency, cost, quality and operations, and how to design a hybrid architecture with routing and fallback.",
    category: "AI & Automation",
    banner: "hybridaiflow",
    sceneKind: "pipeline",
    bannerAlt:
      "Hybrid AI request path: User, Application, Local model, Router (highlighted), Cloud model, Business APIs, with a branch for fallback when the local model cannot answer.",
    date: "2026-10-08",
    readingTime: "5 min read",
    relatedServiceSlugs: ["ai-automation", "mobile-app-development"],
    relatedIndustrySlugs: ["healthcare-healthtech", "fintech", "manufacturing"],
    relatedSlugs: ["llm-self-hosting", "small-language-models", "llm-routing"],
    faqs: [
      { q: "What is the difference between local AI and cloud AI?", a: "Local AI runs models on devices or servers you control (laptops, phones, on-premises servers, your own cloud account). Cloud AI calls a provider's hosted models over an API. Local gives control, privacy and offline use; cloud gives the most capable models with no infrastructure to run." },
      { q: "Which should my business use?", a: "Usually both. Use local models where data must stay inside, latency or offline use matters, or volume is high and the task is simple; use cloud models for complex reasoning, broad knowledge and fast-changing capabilities. A router decides per request." },
      { q: "Is local AI cheaper?", a: "Per request it can be, especially on hardware you already have. Total cost includes hardware, setup, model updates and operations. At low or uneven volume, cloud APIs are often cheaper overall." },
      { q: "What hardware do I need for local AI?", a: "Small models run on modern laptops and phones; larger models need GPUs with enough memory. Start from the model size your task needs, then size hardware; see our self-hosting guide." },
      { q: "What is a hybrid AI architecture?", a: "A design in which an application routes each request to a local or cloud model based on rules about data sensitivity, task complexity, latency, cost and availability, with fallback when one side cannot handle it." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Local AI (models running on devices or servers you control) wins on data control, offline use, predictable latency and per-request cost at volume. Cloud AI (hosted models via API) wins on model quality, breadth of capability and zero infrastructure. Most businesses should not pick one: design a hybrid architecture in which a router sends each request to the right model based on data sensitivity, task complexity, latency and cost, with fallback when the first choice fails or is unsure. Start by classifying your AI tasks, not by buying hardware.",
        ],
      },
      {
        heading: "Local vs cloud, compared",
        body: [],
        table: {
          headers: ["Factor", "Local AI", "Cloud AI"],
          rows: [
            ["Privacy and data control", "Data stays on your devices or servers", "Depends on provider terms, region and settings"],
            ["Latency", "No network round trip; consistent", "Network-dependent; can vary with load"],
            ["Offline capability", "Works without connectivity", "Requires connectivity"],
            ["Model quality", "Smaller and open-weight models; strong on focused tasks", "Frontier models; best for complex reasoning"],
            ["Cost model", "Hardware and operations; low marginal cost", "Pay per use; no upfront cost"],
            ["Scalability", "Limited by your hardware", "Elastic"],
            ["Maintenance", "You update models, runtimes and drivers", "Provider manages; you track model changes"],
            ["Speed of new capabilities", "Wait for open models or update yourself", "Immediate access to new releases"],
          ],
        },
      },
      {
        heading: "Where local AI now runs",
        body: [
          "\"Local\" covers a range of places, and platform support has improved quickly. **On phones**, Apple's Foundation Models framework and Android's ML Kit GenAI APIs with Gemini Nano run models on supported devices (see [[/blogs/on-device-ai-mobile-apps|on-device AI in mobile apps]]). **On laptops and desktops**, Microsoft made Foundry Local, its runtime for running models on end-user devices across Windows, macOS and Linux, generally available in April 2026, and open-source runtimes serve quantized models on ordinary hardware. **On servers you control**, open-weight models run with inference engines such as vLLM (see [[/blogs/llm-self-hosting|LLM self-hosting]]).",
        ],
      },
      {
        heading: "A reference hybrid architecture",
        body: [
          "A typical request path looks like this:",
        ],
        code: {
          label: "Hybrid AI request path",
          text: `User
  ↓
Application (auth, data classification, request type)
  ↓
Local model  ── handles: classification, extraction, redaction, short drafts
  ↓
Router  ── decides: answer locally, or escalate?
  ↓
Cloud model  ── handles: complex reasoning, long documents, broad knowledge
  ↓
Business APIs (orders, CRM, ERP) via tools
  ↓
Database / systems of record`,
        },
        callout: {
          type: "takeaway",
          text: "A useful pattern is local first for privacy: let a local model classify and redact sensitive details before anything leaves your environment, then send only what the cloud model needs.",
        },
      },
      {
        heading: "Routing rules",
        body: [
          "The router is ordinary code, sometimes helped by a small classifier model. Make its rules explicit and logged.",
        ],
        table: {
          headers: ["Signal", "Route local when…", "Route to cloud when…"],
          rows: [
            ["Data sensitivity", "Request contains regulated or confidential data that may not leave", "Data is approved for the provider and region"],
            ["Task complexity", "Classification, extraction, short rewrite, tagging", "Multi-step reasoning, long context, open-ended generation"],
            ["Latency", "Interactive feature needs consistent speed", "User can wait; quality matters more"],
            ["Connectivity", "Device is offline or network is poor", "Connected"],
            ["Confidence", "Local output passes validation", "Local output fails validation or is low-confidence"],
            ["Cost and volume", "High-volume simple tasks", "Low-volume complex tasks"],
          ],
        },
      },
      {
        heading: "Fallback and availability",
        body: [
          "Hybrid designs also improve resilience. If the cloud provider is slow or unavailable, a local model can handle simpler requests or queue the rest; if a device lacks the capability for a local model, the cloud takes over. Define the fallback for each feature in advance: degrade to a simpler result, queue for later, or show a clear message. Platforms are building this in: Firebase AI Logic supports explicit on-device or cloud preferences on Android, and Apple's Foundation Models framework in iOS 27 can work with cloud models through the same interface. For multi-provider cloud routing, see [[/blogs/llm-gateway|LLM gateway]] and [[/blogs/llm-routing|LLM routing]].",
        ],
        cta: {
          title: "Need AI that keeps sensitive data in-house?",
          description: "ZSpace Labs designs hybrid AI architectures that combine local and cloud models with routing, redaction and fallback. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Choosing step by step",
        body: [],
        checklist: [
          "**List AI tasks** and the data each one touches",
          "**Classify data** by what may leave your environment, and to which providers and regions",
          "**Test a small local model** on the simple, high-volume tasks; measure quality and latency",
          "**Keep complex tasks in the cloud** with approved providers",
          "**Write routing rules** and validation checks; log every routing decision",
          "**Define fallbacks** for outages, unsupported devices and low-confidence results",
          "**Compare total cost** including hardware and operations, not just per-token price",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Local versus cloud is rarely an either-or decision. Classify tasks and data, run simple and sensitive work locally, send complex work to the cloud, and connect them with explicit routing and fallback. For when a small local model is good enough, see [[/blogs/small-language-models|small language models for business]].",
        ],
      },
    ],
  },

  // ---------------------------------------- SMALL LANGUAGE MODELS
  {
    slug: "small-language-models",
    title: "Small Language Models for Business: When a Smaller Model Is the Better Choice",
    seoTitle: "Small Language Models for Business: When Smaller Is Better",
    excerpt:
      "When small language models beat large ones on cost, speed and privacy, which tasks they handle well, how to test them and where they fall short.",
    category: "AI & Automation",
    banner: "slmvsllm",
    sceneKind: "cost",
    bannerAlt:
      "Small language model vs large language model (small highlighted) compared by cost per task, latency, deployment, best tasks and weak spots.",
    date: "2026-10-08",
    readingTime: "4 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["manufacturing", "healthcare-healthtech", "ecommerce"],
    relatedSlugs: ["llm-routing", "hybrid-ai-architecture", "llm-quantization"],
    faqs: [
      { q: "What is a small language model?", a: "A language model small enough to run cheaply and quickly, often on a single GPU, a laptop or a phone. There is no fixed cutoff; models from roughly one to a few tens of billions of parameters are commonly called small, compared with frontier models served by large providers." },
      { q: "When is a small model good enough?", a: "For focused, repetitive tasks with clear inputs and outputs: classification, extraction, routing, tagging, short rewriting, structured output and many tool-calling steps inside agents. Test on your own data to confirm." },
      { q: "When should I use a large model instead?", a: "For complex reasoning, long documents, broad world knowledge, open-ended writing, and tasks where errors are costly and hard to detect." },
      { q: "Are small models cheaper?", a: "Per request, almost always. Per completed task, usually, but not if the small model needs more retries, more human correction or more steps to finish. Compare cost per correct outcome." },
      { q: "Can small models be fine-tuned?", a: "Yes, and fine-tuning a small model on a narrow task is a common way to match larger models on that task at lower cost. It requires good training data and evaluation." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Use a small language model when the task is narrow and repetitive (classify, extract, route, tag, rewrite briefly, produce structured output, pick the next tool) and you care about cost, speed, privacy or running locally. Use a large model for complex reasoning, long context, broad knowledge and open-ended writing. Many systems use both: small models for the many routine steps, a large model for the few hard ones. Decide on your own test set by cost per correct result, not price per token.",
        ],
      },
      {
        heading: "Why small models are back in the conversation",
        body: [
          "For two years the default was to send everything to the most capable model. Agents changed the economics: a single task can involve dozens of model calls, most of them simple. NVIDIA researchers argued in a June 2025 position paper, *Small Language Models are the Future of Agentic AI*, that small models are sufficiently capable, better suited and more economical for many of the repetitive invocations inside agentic systems, with large models reserved for the steps that need them. At the same time, small models became easier to run on laptops, phones and modest servers.",
        ],
      },
      {
        heading: "Small vs large models",
        body: [],
        table: {
          headers: ["Factor", "Small language model", "Large language model"],
          rows: [
            ["Cost per task", "Low", "Higher"],
            ["Latency", "Fast, especially locally", "Slower; network-dependent if hosted"],
            ["Deployment", "Phone, laptop, single GPU, or cheap API tier", "Provider API or multi-GPU servers"],
            ["Best tasks", "Classification, extraction, routing, structured output, short rewrites", "Reasoning, planning, long documents, open-ended writing"],
            ["Weak spots", "Broad knowledge, multi-step reasoning, long context", "Cost and latency at high volume"],
            ["Customization", "Practical to fine-tune for a narrow task", "Usually prompt and retrieval only"],
          ],
        },
      },
      {
        heading: "Tasks that suit small models",
        body: [],
        checklist: [
          "Classifying tickets, emails or documents into known categories",
          "Extracting fields from invoices, forms or messages into a schema",
          "Routing requests to the right workflow or model",
          "Redacting personal data before anything is sent to a cloud model",
          "Generating short, templated replies and summaries",
          "Choosing the next tool in an agent step where options are few and well described",
        ],
        callout: {
          type: "takeaway",
          text: "The cheapest model is not always the cheapest system. A small model that needs retries or human correction can cost more per completed task than a larger model that gets it right first time.",
        },
      },
      {
        heading: "How to test whether a small model is enough",
        body: [],
        checklist: [
          "**Build a test set** of 100–300 real examples with correct answers",
          "**Run a large model** as the quality reference",
          "**Run two or three small models** at the precision you would deploy (see [[/blogs/llm-quantization|LLM quantization]])",
          "**Compare** accuracy, latency and cost per correct result",
          "**Try structured output and better instructions** before concluding a small model fails",
          "**Consider fine-tuning** if a small model is close but not quite there",
          "**Route** low-confidence cases to the large model rather than forcing one model to do everything",
        ],
        cta: {
          title: "Paying frontier-model prices for simple tasks?",
          description: "ZSpace Labs evaluates small and large models on your own data and builds routing that uses each where it fits. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Deployment options",
        body: [
          "Small models can be called through provider APIs (most providers offer smaller, cheaper tiers), self-hosted on a single GPU (see [[/blogs/llm-self-hosting|LLM self-hosting]]), run on laptops through local runtimes such as Microsoft Foundry Local (generally available since April 2026), or run on phones through platform frameworks (see [[/blogs/on-device-ai-mobile-apps|on-device AI in mobile apps]]). The right option depends on data rules, volume and where the application runs; [[/blogs/hybrid-ai-architecture|hybrid AI architecture]] covers combining them.",
        ],
      },
      {
        heading: "An illustrative cost comparison",
        body: [
          "A hypothetical example, not real prices: a support team classifies 100,000 tickets a month into 12 categories. On a 300-ticket test set, a large hosted model is correct 96 percent of the time; a small model run locally is correct 91 percent of the time, and 95 percent after fine-tuning on 2,000 labelled tickets. Each misrouted ticket costs a few minutes of an agent's time to re-route.",
          "The small model's per-request cost is a fraction of the large model's, but the first version's extra five points of errors add thousands of manual re-routes a month. The fine-tuned version closes most of that gap, so it wins on cost per correct result; the untuned version may not. The lesson generalizes: include the cost of errors and human correction, and test small models properly (including fine-tuning) before deciding.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Small language models are often the right tool for the many routine steps in AI systems. Test them on your own tasks, compare cost per correct result, route hard cases to larger models and deploy where your data and latency needs point. For choosing between models per request, see [[/blogs/llm-routing|LLM routing]].",
        ],
      },
    ],
  },

  // ---------------------------------------- AGENT-PLACED ORDERS
  {
    slug: "agent-placed-orders",
    title: "Orders Placed by AI Agents: Fraud, Returns and Customer Service for Agentic Commerce",
    seoTitle: "Orders Placed by AI Agents: Fraud, Returns and Customer Service",
    excerpt:
      "What changes after an AI agent places an order: identifying agent orders, fraud screening, confirmation, returns, customer service and policies.",
    category: "Shopify & Ecommerce",
    banner: "agentorderflow",
    sceneKind: "orders",
    bannerAlt:
      "After an AI agent places an order: Agent order, Identify channel, Fraud screen (highlighted), Confirm with customer, Fulfil, Returns + service.",
    date: "2026-10-08",
    readingTime: "4 min read",
    relatedServiceSlugs: ["shopify-development", "website-development"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer"],
    relatedSlugs: ["agentic-commerce", "ai-agent-traffic-verification", "ai-commerce-analytics"],
    faqs: [
      { q: "Who is responsible for an order placed by an AI agent?", a: "In current agentic commerce setups such as Shopify's Agentic Storefronts and the protocols behind them, the merchant remains the seller of record and is responsible for fulfilment, returns and service, as with any other order." },
      { q: "How do I know an order came from an AI agent?", a: "Through your commerce platform's channel or referrer attribution. Shopify's Help Center says orders from AI channels appear in the admin with channel or referrer attribution. Tag them so service and fraud teams can see it too." },
      { q: "Are agent orders riskier for fraud?", a: "They change the signals rather than simply increasing risk. Device and behavioural signals may look unusual, while new schemes such as Visa's Trusted Agent Protocol add verified information about legitimate agents. Adjust rules rather than blocking agent orders outright." },
      { q: "Do returns work differently?", a: "Your return policy applies, but customers may misunderstand what an agent bought (size, variant, quantity). Clear confirmation emails, accurate product data and easy self-service returns reduce disputes." },
      { q: "Should customer service treat these customers differently?", a: "Mostly no, but agents should see the channel on the order and be ready for questions such as \"my assistant ordered the wrong size\", with a clear, fair policy for agent-related mistakes." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "When an AI agent places or hands off an order, your business is still the seller: you fulfil it, handle returns and answer questions. Prepare operations for that: identify agent-originated orders by channel and tag them, tune fraud rules for agent signals instead of blocking them, send a clear confirmation the customer can check, make sure product data matches what was bought (size, variant, quantity), offer easy self-service returns, and give customer service a fair policy for agent mistakes. Then compare return, cancellation and complaint rates for agent orders with other channels.",
        ],
      },
      {
        heading: "What changes after the agent clicks buy",
        body: [
          "Most agentic commerce content focuses on getting discovered and checked out. The less glamorous part is everything after. In Shopify's Agentic Storefronts and in protocols such as UCP and ACP, the merchant remains the seller, so fulfilment, returns, refunds and service work as for any order, but some signals and expectations differ. The shopper may not have seen your product page, may not remember exactly what the assistant chose, and may contact you about the assistant's decision rather than yours. See [[/blogs/agentic-commerce|agentic commerce]] for how these orders are created.",
        ],
      },
      {
        heading: "Identify agent orders",
        body: [
          "You cannot manage what you cannot see. Shopify's Help Center says orders from AI channels appear in the admin with channel or referrer attribution; other platforms and protocols label orders differently. Add an order tag or attribute for agent-originated orders if needed, pass it to your helpdesk and fraud tools, and include it in reporting (see [[/blogs/ai-commerce-analytics|how to track AI-referred ecommerce sales]]).",
        ],
      },
      {
        heading: "Fraud: adjust signals, do not block the channel",
        body: [
          "Fraud tools rely on device, browser and behaviour signals that look different when an agent is involved. Blocking everything automated would also block legitimate customers. Card networks are adding verification for agents: Visa's Trusted Agent Protocol (October 2025) lets approved agents send signed information to merchants to distinguish them from malicious bots. Ask your payment provider and fraud vendor how they score agent-initiated orders, and keep normal checks (address verification, velocity limits, high-risk product rules) in place. For traffic-level verification, see [[/blogs/ai-agent-traffic-verification|how to verify AI agent traffic]].",
        ],
        table: {
          headers: ["Risk", "Control"],
          rows: [
            ["Stolen cards through compromised assistant accounts", "Normal payment checks, 3D Secure where applicable, velocity rules"],
            ["Bots pretending to be agents", "Verify signed agents; challenge unverified automation"],
            ["Stock hoarding by automation", "Per-customer and per-product limits"],
            ["Disputes claiming the agent was unauthorized", "Keep order records, confirmations and channel data for chargeback evidence"],
          ],
        },
      },
      {
        heading: "Confirmation and accuracy",
        body: [
          "Agent orders fail most often on details: wrong size, variant or quantity. Reduce that before and after the order. Before: complete product data, clear variant naming and accurate stock in feeds (see [[/blogs/ecommerce-product-data-ai-search|product data for AI search]]). After: an immediate confirmation that states exactly what was ordered, with a short window to change or cancel before fulfilment.",
        ],
        callout: {
          type: "takeaway",
          text: "A clear confirmation with an easy change window prevents most agent-related returns. It costs little and protects the customer relationship.",
        },
      },
      {
        heading: "Returns and customer service",
        body: [],
        checklist: [
          "Show the order channel to service agents in the helpdesk",
          "Decide how to handle \"my assistant ordered the wrong item\" (for example, free exchange within a short window)",
          "Offer self-service returns and exchanges linked from the confirmation",
          "Track return reasons for agent orders separately",
          "Feed recurring mistakes back into product data (sizing, compatibility, variant names)",
          "Keep policies on returns, delivery and warranties explicit and machine-readable on your site",
        ],
        cta: {
          title: "Preparing your store for orders placed by AI agents?",
          description: "ZSpace Labs sets up order tagging, fraud rules, confirmations and service workflows for agentic channels on Shopify and custom stores. See [[/services/shopify-development|Shopify development]].",
        },
      },
      {
        heading: "Measure the operational picture",
        body: [],
        table: {
          headers: ["Metric", "Why"],
          rows: [
            ["Return rate and reasons (agent vs other channels)", "Shows whether agents choose well with your data"],
            ["Cancellation and change requests", "Signals confusion at order time"],
            ["Contact rate per order", "Measures service load"],
            ["Chargeback rate", "Fraud and authorization issues"],
            ["Repeat purchase rate", "Whether agent-acquired customers stay"],
          ],
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Agentic commerce does not end at checkout. Identify agent orders, tune fraud controls instead of blocking, confirm clearly, make returns easy and give service teams a fair policy. Use the return and contact data to fix product information, which in turn helps agents choose correctly next time. For how assistants change the funnel before the order, see [[/blogs/ai-agents-ecommerce-funnel|how AI agents change the ecommerce funnel]].",
        ],
      },
    ],
  },

  // ---------------------------------------- WILL AI AGENTS REPLACE WEBSITES (flagship)
  {
    slug: "will-ai-agents-replace-websites",
    title: "Will AI Agents Replace Websites? Why the Interface Layer Is Expanding",
    seoTitle: "Will AI Agents Replace Websites? Why the Interface Layer Expands",
    excerpt:
      "Why websites are not disappearing but now serve four audiences (people, search engines, AI systems and agents), and what a business website needs as a result.",
    category: "Web Development",
    banner: "interfacelayers",
    sceneKind: "landing",
    bannerAlt:
      "The expanding interface layer: Web, App, API, AI interface, AI agent (highlighted), with the website and its data still underneath each one.",
    date: "2026-10-08",
    readingTime: "5 min read",
    relatedServiceSlugs: ["website-development", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "saas-technology", "travel-hospitality"],
    relatedSlugs: ["how-ai-agents-use-websites", "apis-for-ai-agents", "ai-search-visibility"],
    faqs: [
      { q: "Will AI agents replace websites?", a: "No. AI assistants and agents depend on websites, feeds and APIs for facts and transactions, and most purchases and sign-ups still complete with the business. What changes is that a growing share of visits and decisions are mediated by AI, so websites must work for software as well as people." },
      { q: "Who are a website's audiences now?", a: "Four: people who browse, search engines that index, AI systems that read and cite content in answers, and agents that act on a person's behalf. Each needs something different from the same site." },
      { q: "Will website traffic fall?", a: "Some informational queries now end in an AI answer without a click, and AI-referred visits are still small compared with search for most sites. But AI-referred visitors often arrive later in the decision; Adobe reported in August 2026 that AI-referred retail visits converted 60 percent better than other traffic." },
      { q: "What should a business change first?", a: "Make sure AI crawlers and agents can read the site, put specific facts (prices, specifications, policies) in text, fix accessibility so agents can operate key journeys, and consider a structured interface (API or MCP server) for your most valuable task." },
      { q: "Do we need a separate site for AI?", a: "No. Google states there are no special files or markup required for its AI features. One well-built site with good structure, accurate content and accessible interfaces serves every audience." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI agents will not replace websites, but they are changing who uses them. A business website now serves four audiences: people who browse and decide, search engines that index, AI systems that read and cite content in answers, and agents that act for a person (comparing, booking, buying). The interface layer is expanding, not disappearing: web, then apps, then APIs, now AI answers and agents, all drawing on the same underlying content, data and actions. The practical response is one well-built site with specific, structured facts, accessible journeys and, for the most valuable tasks, a structured interface agents can call.",
        ],
      },
      {
        heading: "Every new interface added a layer, none removed the web",
        body: [
          "Apps did not end websites; they added a second interface. APIs did not end apps; they let partners and integrations reach the same business. AI assistants and agents are the next layer: a person asks an assistant, and the assistant reads your pages, queries your feeds or calls your API on their behalf. Each layer still depends on the same foundation: accurate content, structured data and well-defined actions.",
        ],
        table: {
          headers: ["Layer", "Who uses it", "What it needs from the business"],
          rows: [
            ["Web", "People with browsers", "Clear value, trust, fast pages, good UX"],
            ["App", "Repeat customers on phones", "Accounts, notifications, quick tasks"],
            ["API", "Partners and integrations", "Documented, secured operations"],
            ["AI interface (answers)", "People asking assistants and AI search", "Crawlable, specific, consistent facts worth citing"],
            ["AI agent", "Software acting for a person", "Operable journeys, visible facts, structured actions, verifiable identity, confirmation steps"],
          ],
        },
      },
      {
        heading: "What the evidence shows so far",
        body: [
          "The shift is real but measured. Google's AI features answer many questions on the results page, and Google's own guidance (May 2026, updated July 2026) says appearing in them is still SEO: indexed, useful, unique content, with no special AI files or markup. Google's web.dev team published guidance in April 2026 on building agent-friendly websites, describing agents as a new type of visitor that reads pages through screenshots, HTML and the accessibility tree. Chrome is trialling WebMCP, a proposed standard for pages to expose actions directly to agents. On the commercial side, Adobe reported in August 2026 that AI-referred visits to US retail sites were up 62 percent year on year and converted 60 percent better than other traffic, while still a small share of total visits.",
          "Read together: AI is becoming a meaningful route to websites, the visitors it sends are valuable, and the platforms are investing in making sites usable by agents, not in replacing them.",
        ],
      },
      {
        heading: "What each audience needs",
        body: [],
        table: {
          headers: ["Audience", "Needs", "Read more"],
          rows: [
            ["People", "Fast, clear, trustworthy pages and easy decisions", "[[/blogs/website-trust-and-credibility|Website trust and credibility]]"],
            ["Search engines", "Crawlable, indexable, well-structured pages", "[[/blogs/seo-friendly-website-development|SEO-friendly development]]"],
            ["AI systems", "Specific facts in text, consistent identity, crawler access", "[[/blogs/ai-search-visibility|AI search visibility]]"],
            ["Agents", "Semantic, accessible controls; visible prices and policies; confirmations; optional APIs or tools", "[[/blogs/how-ai-agents-use-websites|How AI agents use websites]]"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "The same improvements serve all four audiences: specific facts in text, clean structure, accessible interfaces and honest information up front. There is rarely a trade-off between building for people and building for machines.",
        },
      },
      {
        heading: "The website of the next few years",
        body: [
          "We expect business websites to evolve in five ways, none of which require starting over:",
        ],
        checklist: [
          "**Structured content as a first-class asset:** product attributes, policies, pricing and service details maintained as data, rendered for people and readable by machines",
          "**Actions, not just pages:** key tasks (quote, book, order, check status) available as well-defined operations, through the interface and, where it pays, an API or MCP server (see [[/blogs/apis-for-ai-agents|APIs for AI agents]])",
          "**Authentication for delegation:** customers able to let an assistant act for them with scoped, revocable permissions",
          "**Verifiable visitors:** policies that welcome verified agents and stop abusive bots (see [[/blogs/ai-agent-traffic-verification|verifying agent traffic]])",
          "**Human UX that confirms rather than persuades:** more visitors arrive having compared options already, so pages must confirm decisions quickly",
        ],
      },
      {
        heading: "What not to do",
        body: [],
        checklist: [
          "Build a separate \"AI version\" of the site; Google says it is not needed and it splits your effort",
          "Block all AI crawlers and agents by default (see [[/blogs/ai-crawlers-robots-txt|AI crawlers and robots.txt]])",
          "Strip human UX in favour of machine-readable pages; people still decide and pay",
          "Chase AI \"ranking hacks\"; invest in content and structure that hold up across platforms",
        ],
        cta: {
          title: "Planning a website that works for people and AI?",
          description: "ZSpace Labs builds and upgrades business websites for every audience: clear UX for people, clean structure for search and AI, accessible journeys and APIs for agents. See [[/services/website-development|website development services]].",
        },
      },
      {
        heading: "How to prepare without guessing",
        body: [
          "Start with the work that pays off regardless of how fast agents grow: fix crawler access and indexing, put specific facts in text, make key journeys accessible, keep business information consistent everywhere, and measure AI-referred traffic and orders separately (see [[/blogs/ai-search-traffic-tracking|measuring AI search traffic]]). Then decide whether one high-value task deserves a structured interface for agents. Revisit every six months; the platforms are moving quickly, but the fundamentals are not.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Websites are not disappearing; they are becoming the shared foundation behind several interfaces at once. The businesses that do well will treat their site as a source of truth for people, search engines, AI systems and agents alike: clear facts, clean structure, accessible journeys and well-defined actions.",
        ],
      },
    ],
  },
];
