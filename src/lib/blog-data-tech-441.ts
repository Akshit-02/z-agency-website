import type { BlogPost } from "./blog-data";

/**
 * 2027 content expansion, topics 441–460, first implementation pass
 * (2026-11-10). Research and decisions: zspace-2027-content-expansion-441-460/.
 * The brief listed themes rather than titles; topic numbers follow its own
 * groupings. CREATE: AI FinOps (441, with 442 and the AI part of 460),
 * AI SaaS pricing models (443), AI cost abuse protection (444),
 * post-quantum cryptography readiness (448). Topics 456, 458 and 459 are an
 * in-place update of energy-management-software-australia
 * (blog-data-au-industry-3.ts).
 *
 * No external links in article bodies (owner rule). Sources:
 * zspace-2027-content-expansion-441-460/research-sources-441-460.md.
 * Fast-moving facts: AI vendor pricing (Intercom, Salesforce, GitHub, Cursor),
 * FOCUS versions, PQC deadlines (NIST IR 8547 final Oct 2026, EO June 2026).
 */
export const techPosts441: BlogPost[] = [
  {
    slug: "ai-finops",
    title: "AI FinOps: How to Meter, Attribute and Control the Cost of AI Features",
    seoTitle: "AI FinOps: Metering, Cost Attribution and Cost per Outcome",
    excerpt:
      "How to run FinOps for AI: metering model usage, attributing token and inference costs to features and customers, cost per outcome, budgets and shared reporting.",
    category: "AI & Automation",
    banner: "aifinopsflow",
    sceneKind: "cost",
    bannerAlt:
      "AI cost flow: every model call passes through a gateway that records tokens, model, feature, team and customer (highlighted), usage is priced and joined with cloud and SaaS bills, and dashboards show cost per feature, per customer and per business outcome against budgets",
    date: "2026-11-10",
    readingTime: "15 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["saas-technology", "fintech", "ecommerce", "b2b-enterprise"],
    relatedSlugs: ["llm-cost-optimization", "cloud-cost-optimization-australia", "ai-saas-pricing-models"],
    faqs: [
      {
        q: "What is AI FinOps?",
        a: "The practice of measuring, attributing and managing the cost of AI services, such as model API calls, AI cloud services and GPUs, so engineering, product and finance can make shared decisions. It extends cloud FinOps to token-based pricing, per-request costs and cost per business outcome.",
      },
      {
        q: "How do you attribute LLM costs to features and customers?",
        a: "Route every model call through a gateway or shared library that records the model, token counts, feature, team and customer, then price each call from versioned price tables and reconcile the totals with provider invoices. Provider project or workspace separation gives a coarse split; per-call tags give the detail.",
      },
      {
        q: "What is cost per outcome?",
        a: "The total cost of an AI feature, including model usage, retrieval, infrastructure and human review, divided by the business results it produces, such as tickets resolved or documents processed. It shows whether a feature pays off better than token prices or total spend do.",
      },
      {
        q: "What is FOCUS in FinOps?",
        a: "The FinOps Open Cost and Usage Specification, a common format for billing data published by the FinOps Foundation. Major cloud providers support FOCUS exports, which makes it easier to combine costs from several providers and SaaS tools in one view.",
      },
      {
        q: "Who should own AI costs?",
        a: "Shared ownership works best: engineering instruments and optimises, product owns each feature's cost per outcome and fair-use rules, finance owns budgets, forecasts and allocation, and leadership decides where AI investment goes.",
      },
    ],
    content: [
      {
        heading: "The short answer",
        body: [
          "**AI FinOps is the practice of measuring, attributing and controlling what AI features cost, so engineering, product and finance can make decisions together. In practice it means sending every model call through a point where usage is recorded with the feature, team and customer it belongs to; pricing that usage accurately (tokens, cached tokens, batch discounts, GPUs); combining it with cloud and SaaS costs; and tracking cost per business outcome, such as cost per resolved ticket or per processed invoice, rather than only total spend.**",
          "This guide is for CTOs, product leaders and finance teams running AI features in production. For the technical levers that reduce cost once you can see it, see [[/blogs/llm-cost-optimization|LLM cost optimisation]].",
        ],
      },
      {
        heading: "How AI FinOps differs from cloud FinOps",
        body: [
          "Traditional cloud FinOps manages infrastructure bills: compute, storage, networking, commitments and reserved capacity. The FinOps Foundation's framework has broadened to cover other areas of technology spend, including SaaS and AI, and it describes FinOps for AI as planning, estimating, allocating, optimising and reporting on AI services with token-based pricing. AI changes the shape of the problem in a few ways.",
        ],
        table: {
          headers: ["", "Cloud FinOps", "AI FinOps"],
          rows: [
            ["**Unit of cost**", "Instance hours, storage, data transfer", "Tokens (input, output, cached), requests, GPU hours, per-call fees"],
            ["**Who creates cost**", "Infrastructure provisioned by engineers", "Every user action that calls a model, including customers and agents"],
            ["**Variability**", "Fairly predictable once provisioned", "Can swing with prompt length, model choice, retries and agent loops"],
            ["**Where costs appear**", "Cloud provider bill", "Model provider APIs, cloud AI services, self-hosted GPUs, AI features inside SaaS tools"],
            ["**Key question**", "Are we paying for capacity we don't use?", "Is each AI feature worth what it costs per outcome?"],
          ],
        },
      },
      {
        heading: "Step 1: meter every model call",
        body: [
          "You can't attribute what you don't record. The most reliable approach is to route all model calls through one place, such as an internal AI gateway, a shared client library or an open-source LLM proxy, that records for each call:",
        ],
        checklist: [
          "Provider, model and version",
          "Input, output and cached tokens (or other billable units such as images, audio seconds or GPU time)",
          "Feature or workflow, team, environment (production or test)",
          "Customer, tenant or user, where your pricing or contracts need it",
          "Whether it was a batch or real-time call, and any retries",
          "Latency and outcome (success, error, fallback), so cost can be compared with quality",
          "OpenTelemetry's generative AI conventions, still marked as in development, define standard attributes for input, output and cached token counts, which helps if you already use OpenTelemetry for tracing",
        ],
      },
      {
        heading: "Step 2: attribute costs",
        body: [
          "Attribution turns raw usage into answers: which feature costs what, which customers are profitable, which team's experiment doubled last month's bill.",
        ],
        table: {
          headers: ["Attribution level", "How", "Used for"],
          rows: [
            ["**Provider account or project**", "Separate projects, workspaces or API keys per product or team", "Coarse budgets and access control"],
            ["**Feature or workflow**", "Feature tag on every call through the gateway", "Product decisions: is this feature worth its cost?"],
            ["**Customer or tenant**", "Tenant ID on every call", "Margins per customer, fair-use limits, usage-based pricing"],
            ["**Business outcome**", "Join usage to outcomes (ticket resolved, document processed, lead qualified)", "Cost per outcome, the number that matters most"],
            ["**Shared costs**", "Allocate platform costs (gateway, vector database, evaluation runs) by usage share", "Complete unit economics"],
          ],
        },
      },
      {
        heading: "Step 3: measure cost per outcome",
        body: [
          "Token prices are a poor guide to whether an AI feature pays off. A cheaper model that needs three attempts or more human corrections can cost more per resolved case than a more expensive model that gets it right first time.",
          "Define the outcome for each feature, then track cost per outcome alongside quality. An illustrative support assistant: add model usage, retrieval and infrastructure costs for the month, divide by tickets resolved without human handover, and compare with the cost of a human-handled ticket. The same thinking applies to cost per invoice processed, per qualified lead or per generated report.",
        ],
        callout: {
          type: "tip",
          text: "Track cost per outcome and quality together. Cutting cost per ticket by switching models is only a win if the resolution rate and customer satisfaction hold.",
        },
      },
      {
        heading: "Step 4: bring AI, cloud and SaaS costs together",
        body: [
          "AI spend is spread across several bills: model provider APIs, cloud AI services, GPUs, vector databases, and AI add-ons inside SaaS tools your teams already use. Finance sees separate invoices; engineering sees usage dashboards. Shared cost intelligence means one view where both can work from the same numbers.",
          "Standardised billing data helps. The FinOps Foundation's FOCUS specification defines a common format for cost and usage data across cloud and SaaS providers (version 1.4 was ratified in June 2026), and AWS, Microsoft, Google Cloud and Oracle support FOCUS exports, which makes combining bills far easier than reconciling each provider's own format. Model providers also offer usage and cost APIs that can be grouped by project, workspace, API key or model, which are useful for reconciling your own metering against invoices.",
        ],
      },
      {
        heading: "Controls: budgets, limits and alerts",
        body: [],
        checklist: [
          "**Budgets** per team, feature and environment, with alerts at thresholds before the limit is reached",
          "**Spend limits** at provider project or workspace level as a backstop; several model providers support hard monthly limits per project or workspace",
          "**Per-tenant and per-user quotas** so one customer or script can't consume the month's budget; see [[/blogs/ai-cost-abuse-protection|protecting AI applications from cost abuse]]",
          "**Agent limits:** maximum steps, tool calls and tokens per task",
          "**Anomaly alerts** when usage per feature or tenant jumps unexpectedly",
          "**Review of non-production usage,** because test and evaluation runs can be a surprising share of spend",
        ],
        cta: {
          title: "Can't see what your AI features cost?",
          description: "ZSpace Labs builds [[/services/ai-automation|AI gateways, usage metering and cost dashboards]] that attribute model spend to features, teams and customers, and connect it to the outcomes you care about.",
        },
      },
      {
        heading: "Who does what",
        body: [],
        table: {
          headers: ["Team", "Role in AI FinOps"],
          rows: [
            ["**Engineering**", "Instrument every call, implement limits and optimisations, choose models"],
            ["**Product**", "Define outcomes per feature, decide which features justify their cost, set fair-use rules"],
            ["**Finance**", "Budgets, forecasting, allocation of shared costs, margin analysis"],
            ["**Leadership**", "Decide where AI investment goes based on cost per outcome and strategic value"],
          ],
        },
      },
      {
        heading: "Architecture",
        body: [],
        checklist: [
          "**AI gateway or shared SDK** that every service uses for model calls, adding tags and enforcing limits; open-source LLM proxies such as LiteLLM support per-key, per-user and per-team budgets",
          "**Usage event stream** into a warehouse, joined with provider price lists to calculate cost per call. Prices differ for cached input, cache writes and batch requests (major providers offer batch processing at roughly half the real-time price), and they change, so keep price tables versioned",
          "**Billing data imports** from providers and cloud accounts, ideally in FOCUS format, to reconcile calculated costs with invoices",
          "**Outcome events** from the application (ticket resolved, document approved) to calculate cost per outcome",
          "**Dashboards and alerts** for engineering, product and finance, each with the views they need",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Letting services call model APIs directly with shared keys and no tags",
          "Reporting total AI spend but not cost per feature or outcome",
          "Comparing models on token price instead of cost per successful outcome",
          "Ignoring retries, agent loops and evaluation runs",
          "Calculated costs that never get reconciled with actual invoices",
          "Budgets without anyone accountable for them",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "AI FinOps starts with metering every call and tagging it with who and what it served. From there, attribution, cost per outcome, budgets and shared dashboards let engineering, product and finance decide which AI features earn their keep. Once costs are visible, use [[/blogs/llm-cost-optimization|LLM cost optimisation]] techniques to reduce them, and [[/blogs/ai-saas-pricing-models|AI SaaS pricing]] to make sure what you charge covers them.",
        ],
        cta: {
          title: "Planning AI cost visibility?",
          description: "Tell us which AI features you run, which providers you use and how you report costs today. ZSpace Labs will suggest a practical metering and reporting setup. [[/contact|Discuss your AI platform]].",
        },
      },
    ],
  },
  {
    slug: "ai-saas-pricing-models",
    title: "AI SaaS Pricing Models: Seats, Usage, Credits and Outcome-Based Pricing",
    seoTitle: "AI SaaS Pricing Models: Usage, Credits and Outcome Pricing",
    excerpt:
      "How to price AI features in SaaS: seats, usage, credits, outcome-based and hybrid models, with real examples, margin risks and the metering they need.",
    category: "Web Development",
    banner: "aipricingmap",
    sceneKind: "cost",
    bannerAlt:
      "Five AI pricing models compared: per seat, usage-based, credits (highlighted), outcome-based and hybrid, each showing how revenue tracks customer value and how well it protects margins when model costs vary",
    date: "2026-11-10",
    readingTime: "14 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "martech", "hrtech", "fintech"],
    relatedSlugs: ["saas-pricing-page-optimization", "subscription-billing-architecture", "ai-finops"],
    faqs: [
      {
        q: "What pricing models do AI SaaS products use?",
        a: "The main ones are per-seat subscriptions with AI included or as an add-on, usage-based pricing by tokens, requests or tasks, credits that customers buy and spend across features, outcome-based pricing per resolved case or completed task, and hybrids that combine a subscription with included usage and overage charges.",
      },
      {
        q: "Why is seat-based pricing harder for AI products?",
        a: "Because AI costs scale with usage, not users. A few heavy users can cost far more than the seat price, and as AI does more of the work, customers may need fewer seats. Many vendors now combine seats with usage allowances or credits.",
      },
      {
        q: "What is outcome-based pricing?",
        a: "Charging for a defined result, such as a support conversation resolved by AI, rather than for access or usage. It aligns price with value but requires a clear, measurable definition of the outcome, reliable tracking and a process for disputes.",
      },
      {
        q: "How should we price when our model costs change?",
        a: "Track cost per unit of whatever you charge for, keep a margin buffer, and avoid fixing prices to one provider's current token rates. Credits and plan allowances give you room to adjust what a credit buys as costs change, with notice to customers.",
      },
      {
        q: "What billing infrastructure do usage-based AI products need?",
        a: "Reliable usage metering in your own application, a billing system that can aggregate usage events and rate them against plans, customer-facing usage dashboards and alerts, and invoicing with clear line items. Options range from billing platforms with usage features to open-source and custom billing.",
      },
    ],
    content: [
      {
        heading: "The short answer",
        body: [
          "**AI features change SaaS pricing because every use costs money, and that cost varies by customer. The main options are seats (simple, but heavy users can erode margins), usage-based pricing (fair and scalable, but harder for customers to predict), credits (a middle ground that bundles different AI actions into one currency), outcome-based pricing (aligned with value, but dependent on measuring outcomes precisely), and hybrids of these. Most products land on a hybrid: a subscription with included AI usage, plus credits or overages for heavy use. Whatever you choose, you need accurate metering of your own costs and customers' usage before you set prices.**",
          "This guide is for SaaS founders, product and finance leaders. It covers the models, public examples, margin risks and the metering and billing systems behind them. For the pricing page itself, see [[/blogs/saas-pricing-page-optimization|SaaS pricing page optimisation]].",
        ],
      },
      {
        heading: "The pricing models compared",
        body: [],
        table: {
          headers: ["Model", "How customers pay", "Strengths", "Risks"],
          rows: [
            ["**Per seat (AI included)**", "Fixed price per user", "Simple to buy and forecast", "Heavy users can cost more than they pay; AI may reduce seat counts over time"],
            ["**Per seat + AI add-on**", "Seat price plus an AI upgrade per user", "Separates AI value; easy upsell", "Same cost exposure if add-on usage is unlimited"],
            ["**Usage-based**", "Per token, request, document, minute or task", "Price tracks cost; scales with value", "Bills are harder to predict; customers may limit use"],
            ["**Credits**", "Buy a pool of credits; actions consume different amounts", "One currency for many features; room to reprice actions", "Credits can feel opaque; needs clear dashboards"],
            ["**Outcome-based**", "Per resolved ticket, completed task or qualified lead", "Strongest alignment with customer value", "Outcome definitions, attribution and disputes"],
            ["**Hybrid**", "Subscription with included usage, plus overage or credits", "Predictable base with protection against heavy use", "More complex to explain and bill"],
          ],
        },
      },
      {
        heading: "What well-known products have done",
        body: [
          "Public examples show how quickly AI pricing has evolved. These were checked in November 2026 and may change.",
        ],
        table: {
          headers: ["Product", "Approach"],
          rows: [
            ["**Intercom Fin**", "Charges per Fin outcome (US$0.99 at the time of writing), separately from helpdesk seats"],
            ["**Zendesk**", "Announced outcome-based pricing for AI agents in 2024, charging for automated resolutions"],
            ["**Salesforce Agentforce**", "Moved from a per-conversation price to Flex Credits in 2025, with each agent action consuming credits"],
            ["**GitHub Copilot**", "Introduced premium request allowances in 2025, then announced a move to usage-based AI credits priced by tokens from June 2026"],
            ["**Cursor**", "Changed its Pro plan from request limits to usage-based limits in mid-2025 and later clarified the change after customer feedback"],
          ],
        },
        callout: {
          type: "tip",
          text: "The pattern across these examples is a move away from \"unlimited AI\" towards pricing that tracks usage or outcomes. The Cursor example also shows the reputational cost of changing pricing without clear communication.",
        },
      },
      {
        heading: "Start from your unit economics",
        body: [
          "Before choosing a model, know what one unit of AI value costs you. For each AI feature, measure the cost per action or outcome (model usage, retrieval, infrastructure and any human review), and how that cost varies across customers. See [[/blogs/ai-finops|AI FinOps]] for how to meter and attribute these costs.",
          "Then check three things for each candidate pricing model: the gross margin for typical, heavy and extreme customers; what happens to margins if your model provider changes prices or you switch models; and whether customers can predict their bill well enough to buy with confidence.",
        ],
      },
      {
        heading: "Choosing a model",
        body: [],
        table: {
          headers: ["If your product…", "Consider"],
          rows: [
            ["Uses AI lightly to improve an existing workflow", "Seats with AI included, with fair-use limits"],
            ["Has AI usage that varies widely between customers", "Hybrid: subscription with included usage and overages or credits"],
            ["Offers several AI actions with different costs", "Credits, with a published table of what each action consumes"],
            ["Delivers a clear, countable result (resolved ticket, processed invoice)", "Outcome-based pricing, if outcomes can be measured reliably"],
            ["Sells to developers or technical buyers", "Usage-based pricing with transparent rates and budgets"],
          ],
        },
      },
      {
        heading: "Outcome-based pricing: define the outcome like a contract",
        body: [
          "Outcome pricing is attractive but demanding. Write down exactly what counts: for a support assistant, does a conversation count as resolved if the customer doesn't reply? If they come back within 24 hours? If a person reviewed the answer? Record the evidence for each billed outcome, let customers see it, and have a clear process for disputes. Without this, outcome pricing turns into billing arguments.",
        ],
      },
      {
        heading: "Protecting margins",
        body: [],
        checklist: [
          "Include usage allowances per plan rather than \"unlimited\" AI",
          "Set fair-use limits and quotas per user and account; see [[/blogs/ai-cost-abuse-protection|protecting AI applications from cost abuse]]",
          "Keep the right to adjust what a credit buys as model costs change, with notice",
          "Route simple tasks to smaller models and reserve expensive ones for complex work",
          "Watch for new free tiers or trials being used as a free model API",
          "Review margins per plan and per customer monthly",
        ],
        cta: {
          title: "Adding AI to your SaaS product?",
          description: "ZSpace Labs builds [[/services/ai-automation|AI features]] together with the [[/services/website-development|usage metering, quotas and billing integrations]] needed to price them sustainably.",
        },
      },
      {
        heading: "The metering and billing system behind the price",
        body: [
          "Every usage-based, credit or outcome model needs reliable metering in your own product, not just your provider's invoice:",
        ],
        checklist: [
          "**Usage events** recorded at the point of use, with customer, feature, quantity and an idempotency key so retries aren't double-counted",
          "**Rating** that turns events into charges according to each customer's plan, allowances and credit balance",
          "**Customer visibility:** usage dashboards, balance alerts and budget controls inside the product",
          "**Billing integration:** usage summaries sent to your billing system for invoicing; see [[/blogs/subscription-billing-architecture|subscription billing architecture]]",
          "**Reconciliation** between metered usage, invoices and your own provider costs",
        ],
      },
      {
        heading: "Build or buy billing",
        body: [
          "Billing platforms increasingly support usage-based pricing. Stripe, for example, completed its acquisition of the usage-billing company Metronome in January 2026 and now points new usage-based integrations to it, and open-source options such as Lago exist for teams that want to self-host. Buy where these fit. Build custom metering and rating when your pricing combines several dimensions the platforms don't handle well, when outcomes must be calculated from your own application data, or when usage must be enforced in real time inside the product. Most teams end up with custom metering feeding a commercial billing system.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Launching \"unlimited AI\" and discovering heavy users later",
          "Pricing on one provider's current token rates",
          "Credits with no clear table of what actions cost",
          "Outcome pricing without a precise definition and evidence trail",
          "No usage dashboards, so customers are surprised by bills",
          "Changing pricing without clear notice and transition terms",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "AI pricing works when it reflects how customers get value and what it costs you to deliver. Measure unit economics first, choose the simplest model that protects margins, make usage visible to customers, and build metering you can trust. For controlling the costs behind the price, see [[/blogs/llm-cost-optimization|LLM cost optimisation]].",
        ],
        cta: {
          title: "Rethinking pricing for AI features?",
          description: "Tell us about your product, AI features and current billing setup. ZSpace Labs will help you design the metering and billing to support it. [[/contact|Discuss your SaaS product]].",
        },
      },
    ],
  },
  {
    slug: "ai-cost-abuse-protection",
    title: "Protecting AI Applications from Cost Abuse: Limits, Budgets and Graceful Degradation",
    seoTitle: "AI Cost Abuse Protection: Limits, Budgets and Safe Fallbacks",
    excerpt:
      "How to protect AI applications from runaway costs and abuse: authentication, rate limits, token quotas, budgets, anomaly detection and graceful degradation.",
    category: "AI & Automation",
    banner: "costguardflow",
    sceneKind: "security",
    bannerAlt:
      "Layered protection in front of an AI model: identity checks, per-user rate limits, token and cost quotas (highlighted), input size limits, anomaly detection and budget alerts, with a fallback to a cheaper model or a cached answer when limits are reached",
    date: "2026-11-10",
    readingTime: "12 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce", "fintech"],
    relatedSlugs: ["api-rate-limiting-strategies", "ai-finops", "prompt-injection-prevention"],
    faqs: [
      {
        q: "What is denial of wallet?",
        a: "A form of abuse where someone deliberately or accidentally drives up the cost of a pay-per-use service, such as an AI feature, by triggering expensive requests at scale. The service may stay online, but the bill grows. OWASP lists it under unbounded consumption in its Top 10 for LLM applications.",
      },
      {
        q: "Are request rate limits enough for AI features?",
        a: "No. AI cost depends on tokens, model choice and agent steps, not just the number of requests. Limit tokens, input size, output length and agent steps as well as request counts, and set cost quotas per user and tenant.",
      },
      {
        q: "Should we put model provider API keys in our mobile app?",
        a: "No. Keys in client apps can be extracted and used by anyone. Call models from your own backend, where you can authenticate users, apply limits and keep keys scoped, rotated and protected.",
      },
      {
        q: "What should happen when a user hits their AI quota?",
        a: "Warn them before they reach it, then degrade gracefully: switch to a smaller model, return cached answers, queue the request or offer an upgrade. Avoid both abrupt failures and silently continuing to spend.",
      },
      {
        q: "How do we detect abuse early?",
        a: "Track tokens and cost per user, tenant, key and feature, and alert on sudden jumps against each account's normal pattern, clusters of new accounts from the same source, or rising cost per request. Combine these alerts with hard spend limits at the provider.",
      },
    ],
    content: [
      {
        heading: "The short answer",
        body: [
          "**AI features cost money every time they run, so anyone who can trigger them at scale can run up your bill or exhaust capacity for other users. Protect them in layers: require authentication for anything expensive, rate-limit by user, tenant and IP, set token and cost quotas per user and per period, cap input size and agent steps, alert on unusual usage, set hard budget limits at the provider, and degrade gracefully (cheaper model, cached answers, queueing) instead of failing or overspending when limits are reached.**",
          "This guide is written for defenders: product, platform and security teams running AI features. It describes risks and controls, not methods of attack.",
        ],
      },
      {
        heading: "Why AI features need extra protection",
        body: [
          "A normal web page costs fractions of a cent to serve. A single AI request can cost far more, especially with long context, large models, image or audio processing, or agents that make many calls per task. That changes the economics of abuse: an attacker or a buggy integration doesn't need to take your service down to hurt you; it can simply make it expensive. This is sometimes called \"denial of wallet\".",
        ],
        table: {
          headers: ["Scenario", "What happens", "Main controls"],
          rows: [
            ["**Free-tier or anonymous abuse**", "Scripts use a public chatbot or free trial as a free model API", "Authentication, sign-up friction, per-account and per-IP limits"],
            ["**Oversized inputs**", "Very long prompts or files inflate token costs per request", "Input size limits, document page limits, truncation rules"],
            ["**Runaway agents or loops**", "An agent or integration retries or loops without stopping", "Step limits, token budgets per task, circuit breakers"],
            ["**Compromised API keys**", "Leaked keys used by third parties", "Secrets management, key scoping, spend limits, anomaly alerts"],
            ["**Tenant overuse**", "One customer's heavy use degrades service and margins for others", "Per-tenant quotas, fair-use policy, usage-based pricing"],
            ["**Scraping valuable outputs**", "Automated harvesting of generated content or data", "Rate limits, bot detection, terms of service enforcement"],
          ],
        },
        callout: {
          type: "note",
          text: "Security guidance recognises these risks. OWASP's 2025 Top 10 for LLM applications includes unbounded consumption and names denial of wallet as one form of it. Its API Security Top 10 (2023) includes unrestricted resource consumption, explicitly listing missing spending limits with third-party providers as a weakness, and unrestricted access to sensitive business flows.",
        },
      },
      {
        heading: "Layered controls",
        body: [],
        checklist: [
          "**Identity first:** require sign-in for expensive features; use verified accounts or payment details for higher limits",
          "**Rate limits** per user, tenant, API key and IP, on both request count and tokens; see [[/blogs/api-rate-limiting-strategies|API rate limiting strategies]]",
          "**Quotas and budgets:** daily and monthly token or cost allowances per user and tenant, matched to their plan",
          "**Input limits:** maximum prompt length, file size, pages and image resolution, enforced before the model is called",
          "**Output limits:** maximum output tokens per request",
          "**Agent limits:** maximum steps, tool calls, tokens and wall-clock time per task",
          "**Provider spend limits:** hard limits and alerts on each model provider project and cloud account, as a backstop if application controls fail. Some model providers let you set hard monthly limits per project or workspace that reject further requests once reached, and cloud budget tools can alert or, in some cases, apply restrictive policies automatically",
          "**Key hygiene:** keep provider keys on the server, scoped per service and environment, rotated, and never shipped in mobile or browser code; see [[/blogs/secrets-management|secrets management]]",
        ],
      },
      {
        heading: "Detecting unusual usage",
        body: [
          "Limits catch the obvious cases; monitoring catches the rest. Track tokens and cost per user, tenant, key and feature over time, and alert when usage jumps well above that account's normal pattern, when many new accounts appear from the same source, or when cost per request rises suddenly (often a sign of oversized inputs or a loop). Feed these signals into the same metering you use for [[/blogs/ai-finops|AI FinOps]], so security and cost views agree.",
        ],
      },
      {
        heading: "Graceful degradation",
        body: [
          "When a user or the whole system approaches a limit, failing abruptly is rarely the best experience, and silently continuing to spend is the worst outcome. Plan what happens instead:",
        ],
        table: {
          headers: ["Situation", "Graceful response"],
          rows: [
            ["**User near their quota**", "Warn them, show remaining usage, offer an upgrade"],
            ["**User over quota**", "Switch to a smaller model, a shorter answer or cached results; or queue the request"],
            ["**Provider rate limit or outage**", "Retry with backoff, then fall back to another model or provider"],
            ["**Global budget nearly reached**", "Pause non-essential AI features first, keep core ones running, and alert the owner"],
            ["**Suspected abuse**", "Slow responses, require re-verification, or suspend the account pending review"],
          ],
        },
        cta: {
          title: "Worried about AI costs getting out of hand?",
          description: "ZSpace Labs builds [[/services/ai-automation|AI gateways with quotas, budgets and fallbacks]], so your AI features stay available and affordable as usage grows.",
        },
      },
      {
        heading: "Design choices that reduce exposure",
        body: [],
        checklist: [
          "Cache answers to common questions and reuse retrieved context where it is safe to do so",
          "Use smaller models for classification, routing and simple tasks, and reserve large models for hard cases",
          "Move non-urgent work to batch processing, which providers typically offer at lower prices",
          "Keep free tiers generous enough to show value but capped in tokens, not just requests",
          "Price heavy usage so that it pays for itself; see [[/blogs/ai-saas-pricing-models|AI SaaS pricing models]]",
        ],
      },
      {
        heading: "Testing your protections",
        body: [
          "Test limits the way you test any other feature: automated tests that confirm quotas, input limits and agent step limits are enforced; load tests in a staging environment with spending caps; and alert tests that confirm the right people are notified. Review provider spend limits whenever you add a new project, key or model.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Rate-limiting requests but not tokens, so one huge request costs as much as thousands of small ones",
          "No hard spend limit at the provider",
          "Provider API keys embedded in front-end or mobile code",
          "Unlimited agent loops and retries",
          "Free trials that allow unlimited usage",
          "Failing open: continuing to call the model when quota checks error out",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Treat cost as something attackers and bugs can exploit. Authenticate expensive features, limit tokens as well as requests, cap inputs and agent steps, set provider spend limits, watch for anomalies, and degrade gracefully. These controls protect your margins and keep the service fair for every user. For security risks that come through prompts themselves, see [[/blogs/prompt-injection-prevention|prompt injection prevention]].",
        ],
        cta: {
          title: "Launching an AI feature to the public?",
          description: "Tell us how users will access it and what it costs per request. ZSpace Labs will help you design limits and fallbacks before launch. [[/contact|Discuss your AI application]].",
        },
      },
    ],
  },
  {
    slug: "post-quantum-cryptography-readiness",
    title: "Post-Quantum Cryptography Readiness: What Software Businesses Should Do Now",
    seoTitle: "Post-Quantum Cryptography Readiness: A Practical Plan",
    excerpt:
      "How software teams can prepare for post-quantum cryptography: NIST standards, government deadlines, cryptographic inventory, crypto agility and migration.",
    category: "Web Development",
    banner: "pqcflow",
    sceneKind: "security",
    bannerAlt:
      "A post-quantum migration plan: inventory where cryptography is used (highlighted), rank systems by how long their data must stay secret, upgrade libraries and enable hybrid key exchange, move signatures and certificates, then retire quantum-vulnerable algorithms, with crypto agility built in throughout",
    date: "2026-11-10",
    readingTime: "15 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["fintech", "healthcare-healthtech", "saas-technology", "b2b-enterprise"],
    relatedSlugs: ["secrets-management", "confidential-computing-business-applications", "software-supply-chain-security"],
    faqs: [
      {
        q: "Can quantum computers break today's encryption?",
        a: "Not today. Security agencies including the UK NCSC and the US CISA state that a cryptographically relevant quantum computer, one able to break today's public-key cryptography, does not yet exist. The concern is the future: data intercepted now could be decrypted later if such a machine is built, which is why long-lived sensitive data and long-lived systems need attention first.",
      },
      {
        q: "What are the NIST post-quantum standards?",
        a: "NIST published three standards in August 2024: FIPS 203 (ML-KEM) for key establishment, FIPS 204 (ML-DSA) and FIPS 205 (SLH-DSA) for digital signatures. A further signature standard (FN-DSA, FIPS 206) is in development, and NIST selected HQC in March 2025 as a backup key-establishment algorithm, with a final standard expected around 2027.",
      },
      {
        q: "What is crypto agility?",
        a: "The ability to change cryptographic algorithms, key sizes and libraries without redesigning applications: algorithms chosen by configuration, cryptography behind well-defined interfaces, and an inventory of where cryptography is used. NIST has published guidance on achieving it. It matters because post-quantum migration will not be the last algorithm change.",
      },
      {
        q: "Does symmetric encryption like AES need replacing?",
        a: "The main risk is to public-key cryptography (RSA, Diffie-Hellman and elliptic-curve algorithms) used for key exchange and signatures. Symmetric algorithms such as AES with adequate key lengths are much less affected; follow your national guidance on recommended key sizes.",
      },
      {
        q: "What is hybrid key exchange?",
        a: "Combining a classical algorithm (such as X25519) with a post-quantum one (such as ML-KEM) so a connection stays secure if either holds. Major browsers and libraries now support hybrid TLS key exchange; Chrome and Firefox enable it by default, and OpenSSL 3.5 includes it in its default key shares. Some national agencies prefer pure post-quantum schemes in the long term, so check your regulator's position.",
      },
    ],
    content: [
      {
        heading: "The short answer",
        body: [
          "**Quantum computers can't break today's public-key cryptography yet, but governments have set migration deadlines in the early to mid 2030s, and data encrypted today could be stored and decrypted later. Software businesses should start now with three things: an inventory of where and how they use cryptography, a priority list based on how long data must stay confidential and how long systems will live, and crypto agility, so algorithms can be swapped through configuration and library upgrades rather than rewrites. Much of the first wave of protection arrives through updated TLS libraries, browsers and cloud services; the harder work is signatures, certificates, embedded devices and your own code.**",
          "This guide is for CTOs, security leads and engineering teams at SaaS, fintech, healthcare and enterprise software businesses. It summarises the standards and deadlines, then sets out a practical plan.",
        ],
      },
      {
        heading: "Why act before quantum computers exist",
        body: [
          "Two reasons. First, **harvest now, decrypt later**: an adversary can record encrypted traffic or steal encrypted archives today and wait until a capable quantum computer exists. If your data must stay confidential for ten years or more (health records, financial data, intellectual property, government contracts), the risk window has already started. Second, **migration takes years**. Cryptography is buried in libraries, protocols, certificates, hardware, partner integrations and contracts, and changing it safely is slow.",
        ],
        callout: {
          type: "note",
          text: "Timelines for a cryptographically relevant quantum computer are uncertain, and forecasts vary widely. Plans should be driven by the official deadlines and by how long your data and systems need protection, not by predictions of a specific year.",
        },
      },
      {
        heading: "The standards",
        body: [],
        table: {
          headers: ["Standard", "Algorithm", "Purpose", "Status (Nov 2026)"],
          rows: [
            ["**FIPS 203**", "ML-KEM (from CRYSTALS-Kyber)", "Key establishment", "Final, August 2024"],
            ["**FIPS 204**", "ML-DSA (from CRYSTALS-Dilithium)", "Digital signatures", "Final, August 2024"],
            ["**FIPS 205**", "SLH-DSA (from SPHINCS+)", "Hash-based digital signatures", "Final, August 2024"],
            ["**FIPS 206**", "FN-DSA (from Falcon)", "Compact digital signatures", "In development"],
            ["**HQC**", "Code-based key establishment", "Backup to ML-KEM using different mathematics", "Selected March 2025; final standard expected around 2027"],
          ],
        },
      },
      {
        heading: "Government timelines",
        body: [
          "Deadlines differ by country and mostly apply directly to government and critical infrastructure, but they shape what enterprise customers and regulators will ask of suppliers. Checked in November 2026:",
        ],
        table: {
          headers: ["Jurisdiction", "Guidance"],
          rows: [
            ["**United States**", "NIST's transition report (IR 8547, finalised October 2026) deprecates quantum-vulnerable public-key algorithms after 2030 and disallows them by 2035. A June 2026 executive order requires high-value federal systems to use post-quantum key establishment by the end of 2030 and signatures by the end of 2031, with requirements expected to flow to federal contractors."],
            ["**United Kingdom**", "The NCSC's timeline (March 2025): complete discovery and an initial plan by 2028, migrate the highest-priority systems by 2031, and complete migration by 2035."],
            ["**European Union**", "A coordinated roadmap (June 2025): member states start the transition by the end of 2026, migrate high-risk use cases by the end of 2030, and the rest by 2035."],
            ["**Australia**", "The Australian Signals Directorate's guidance recommends ceasing use of traditional asymmetric cryptography by the end of 2030."],
            ["**Singapore**", "The Monetary Authority of Singapore issued an advisory on quantum-related cybersecurity risks in 2024, focused on inventory and crypto agility, and the Cyber Security Agency has published a quantum-safe handbook."],
            ["**India**", "A national task force report on a quantum-safe ecosystem was published in 2026 under the National Quantum Mission; check sector regulators for specific requirements."],
          ],
        },
      },
      {
        heading: "What is already happening without you",
        body: [
          "A lot of protection is arriving through updates you may already be receiving. Chrome and Firefox enable hybrid post-quantum key exchange (X25519 combined with ML-KEM) in TLS by default, OpenSSL 3.5 includes post-quantum algorithms and hybrid key shares by default, Cloudflare reports that most browser traffic through its network is now post-quantum encrypted, and messaging apps such as iMessage and Signal have added post-quantum protection. Cloud key management services are adding post-quantum signature keys; AWS KMS, for example, supports ML-DSA.",
          "That covers much of the risk to data in transit over the public web, provided your servers, load balancers and CDNs are updated. It doesn't cover internal service-to-service traffic on old libraries, mobile apps pinned to old crypto, VPNs, partner integrations, signed software and documents, certificates, hardware security modules, IoT devices, or anything your own code implements directly.",
        ],
      },
      {
        heading: "Step 1: build a cryptographic inventory",
        body: [
          "You can't migrate what you can't find. Build an inventory, sometimes called a cryptographic bill of materials, that records:",
        ],
        checklist: [
          "**Where cryptography is used:** TLS endpoints, VPNs, SSH, databases, file and backup encryption, message signing, JWTs and tokens, code signing, document signatures, payment integrations, HSMs and key management",
          "**Which algorithms and key sizes,** and which library or service provides them",
          "**Certificates:** issuers, algorithms, expiry and where they are pinned",
          "**Third parties:** vendors, SaaS tools, payment providers and partners whose crypto you depend on",
          "**Data lifetime:** how long the protected data must remain confidential or signatures must remain trustworthy",
          "**System lifetime:** how long the system or device will remain in service",
        ],
      },
      {
        heading: "Step 2: prioritise",
        body: [
          "A useful rule of thumb: if the time your data must stay secret, plus the time migration will take, is longer than the time until a quantum threat might arrive, you should act now. In practice, prioritise:",
        ],
        table: {
          headers: ["Priority", "Examples"],
          rows: [
            ["**First**", "Long-lived confidential data in transit or archived (health, financial, legal, IP); key exchange on external connections; systems or devices that will stay in service for 10+ years"],
            ["**Next**", "Signatures that must stay trustworthy for years (software updates, firmware, contracts, certificates with long chains); partner and payment integrations"],
            ["**Later**", "Short-lived data and systems due for replacement anyway"],
          ],
        },
      },
      {
        heading: "Step 3: build crypto agility into your software",
        body: [],
        checklist: [
          "Use well-maintained, current cryptographic libraries rather than custom implementations",
          "Keep cryptography behind a small number of internal interfaces, not scattered across the codebase",
          "Choose algorithms and key sizes through configuration, so they can change without code changes",
          "Avoid hard-coding certificate algorithms or pinning in mobile apps without an update path",
          "Record algorithm identifiers alongside encrypted data and signatures, so old and new formats can coexist during migration",
          "Add cryptographic checks to CI, for example flagging deprecated algorithms or outdated libraries",
          "Plan for larger keys and signatures: post-quantum signatures and keys are bigger, which affects certificate sizes, handshake sizes, database fields and constrained devices",
        ],
        cta: {
          title: "Planning for post-quantum migration?",
          description: "ZSpace Labs helps teams build [[/services/website-development|secure, crypto-agile applications]]: cryptographic inventories, library upgrades, key management integration and testing for larger post-quantum keys and signatures.",
        },
      },
      {
        heading: "Step 4: migrate and test",
        body: [],
        table: {
          headers: ["Area", "Typical action"],
          rows: [
            ["**Public TLS**", "Upgrade servers, load balancers and CDNs to versions supporting hybrid ML-KEM key exchange; test older clients"],
            ["**Internal services**", "Upgrade TLS libraries and service meshes; enable hybrid key exchange"],
            ["**Mobile apps**", "Update networking libraries and any certificate pinning, with an app update path"],
            ["**Signatures and certificates**", "Follow your certificate authorities' and platforms' post-quantum roadmaps; test larger certificates and signatures"],
            ["**Stored data**", "Re-encrypt long-lived archives where key exchange or key wrapping relied on vulnerable algorithms"],
            ["**Vendors**", "Ask suppliers for their post-quantum roadmap and add it to procurement and security questionnaires"],
          ],
        },
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Waiting for a quantum computer announcement before starting the inventory",
          "Assuming browser support means the whole system is protected",
          "Implementing post-quantum algorithms yourself instead of using vetted libraries",
          "Forgetting signatures, certificates and firmware, which often have the longest lifetimes",
          "Ignoring the size and performance impact of larger keys on constrained devices and protocols",
          "Treating this as a one-off migration instead of building crypto agility",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Post-quantum readiness is a planning and engineering exercise, not a panic. Inventory your cryptography, prioritise by data and system lifetime, keep libraries current, build crypto agility, and work through signatures, certificates and integrations ahead of the 2030 to 2035 deadlines. For protecting keys and secrets more generally, see [[/blogs/secrets-management|secrets management]], and for protecting data while it is processed, [[/blogs/confidential-computing-business-applications|confidential computing]].",
        ],
        cta: {
          title: "Need a cryptographic inventory?",
          description: "Tell us about your applications, integrations and data retention needs. ZSpace Labs will help you scope a practical post-quantum readiness plan. [[/contact|Discuss your security roadmap]].",
        },
      },
    ],
  },
];
