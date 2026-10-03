import type { BlogPost } from "./blog-data";

/**
 * AI knowledge hub, part thirty-five: self-hosting and platform engineering
 * close the AI infrastructure cluster. Proposed slot 707 (AI model routing)
 * was not created because llm-routing already targets that intent; that
 * article was extended instead. The cost comparison of self-hosting vs APIs
 * also lives in llm-cost-optimization; this article covers the full
 * operational picture. Merged into `posts` in blog-data.ts.
 */

export const aiOpsPosts12: BlogPost[] = [
  // ---------------------------------------- 709 · LLM SELF-HOSTING
  {
    slug: "llm-self-hosting",
    title: "LLM Self-Hosting: How to Run Open-Weight Models on Your Own Infrastructure",
    seoTitle: "LLM Self-Hosting: Hardware, Serving, Licensing and Total Cost",
    excerpt:
      "How to self-host open-weight language models: when it makes sense, open-weight vs open-source, licences, hardware selection, serving software, security, scaling, monitoring, maintenance and total cost of ownership compared with hosted APIs.",
    category: "AI & Automation",
    banner: "selfhostvsapi",
    bannerAlt:
      "Self-hosted models vs hosted APIs compared (Self-hosted and Hosted API, with Self-hosted highlighted) by data, models, low volume, high volume and operations.",
    date: "2026-10-02",
    readingTime: "8 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["fintech", "healthcare-healthtech", "b2b-enterprise"],
    relatedSlugs: ["llm-model-serving", "llm-quantization", "llm-cost-optimization"],
    faqs: [
      { q: "What does it mean to self-host an LLM?", a: "Running a language model on infrastructure you control, such as your own servers, cloud GPUs in your account or a private data centre, instead of calling a provider's hosted API." },
      { q: "What is the difference between open-weight and open-source models?", a: "Open-weight models publish trained weights you can download and run, often under licences with use restrictions. The Open Source Initiative's Open Source AI Definition additionally expects sufficiently detailed training data information, the full code used to train and run the system and the parameters, all under terms allowing use, study, modification and sharing. Many popular models are open-weight but do not meet that definition." },
      { q: "When does self-hosting make sense?", a: "When data must stay in your environment, you need control over model versions and behaviour, you have high, steady volume where GPU costs beat per-token pricing, you need offline or on-premises operation, or you want to fine-tune and serve your own variants." },
      { q: "Is self-hosting cheaper than APIs?", a: "Sometimes, at high and steady utilization. At low or spiky volume, hosted APIs are usually cheaper once you include idle GPUs, engineering time, monitoring and maintenance." },
      { q: "What hardware do we need?", a: "Enough GPU memory for the model weights plus KV cache at your target concurrency and context length. Small quantized models can run on a single modest GPU; large models need multiple high-memory GPUs." },
      { q: "Which software serves self-hosted models?", a: "Inference engines such as vLLM, SGLang and TensorRT-LLM for GPUs, llama.cpp for CPUs and small deployments, often behind a gateway and on Kubernetes or a managed GPU platform." },
      { q: "Do we lose access to the best models by self-hosting?", a: "Some frontier models are only available through APIs. Open-weight models are strong for many tasks, so evaluate them on your own workload; many organizations use both." },
      { q: "What maintenance does self-hosting require?", a: "Updating models and serving software, patching security issues, capacity planning, monitoring, evaluating new model releases and handling hardware or cloud capacity changes." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Self-host language models when data control, version control, offline operation, customization or high steady volume justify running your own infrastructure. Pick an open-weight model whose licence fits your use, size GPUs for weights plus KV cache at your target concurrency, serve it with an efficient engine such as vLLM or SGLang behind a gateway, secure the environment, autoscale on real load, monitor latency and quality, and budget for ongoing maintenance. Compare total cost of ownership with hosted APIs honestly, including idle capacity and engineering time.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Serving architecture is detailed in [[/blogs/llm-model-serving|LLM model serving]], memory reduction in [[/blogs/llm-quantization|LLM quantization]], GPU efficiency in [[/blogs/gpu-optimization-for-ai|GPU optimization]] and cost comparisons in [[/blogs/llm-cost-optimization|LLM cost optimization]]. Model supply chain checks are in [[/blogs/ai-supply-chain-security|AI supply chain security]].",
        ],
      },
      {
        heading: "Self-Hosting vs Hosted APIs",
        body: [],
        table: {
          headers: ["Factor", "Self-hosted", "Hosted API"],
          rows: [
            ["Data control", "Data stays in your environment", "Depends on provider terms and settings"],
            ["Model choice", "Open-weight models, your fine-tunes", "Provider's models, including frontier models"],
            ["Version control", "You decide when to change", "Provider schedules updates and retirements"],
            ["Cost at low or spiky volume", "Often higher (idle GPUs)", "Pay per use"],
            ["Cost at high, steady volume", "Can be lower", "Scales linearly with tokens"],
            ["Operations", "Your team: serving, scaling, security, updates", "Provider"],
          ],
        },
      },
      {
        heading: "Open-Weight vs Open-Source",
        body: [
          "Many models described as open are open-weight: you can download and run the weights, but the licence may restrict certain uses, require attribution or impose conditions above user thresholds, and training data is often undisclosed. The Open Source Initiative's Open Source AI Definition expects detailed data information, complete training and inference code and the parameters, under terms that permit use, study, modification and sharing. Read each model's licence (for example, the Llama 3 licence has its own conditions) and record it in your AI inventory.",
        ],
      },
      {
        heading: "The Self-Hosting Stack",
        body: [],
        diagram: {
          variant: "selfhostflow",
          alt: "Self-hosting stack: Model + licence, Verify weights, Hardware, Inference engine (highlighted), Gateway, Monitor + update.",
          caption: "The inference engine is the heart of the stack, but the gateway, monitoring and update process make it production-ready.",
        },
      },
      {
        heading: "Choosing Hardware",
        body: [
          "Start from the model size, precision, context length and concurrency you need. Weights in 16-bit precision need about 2 bytes per parameter, roughly halved with 8-bit and quartered with 4-bit formats, and the KV cache needs additional memory that grows with context and concurrent requests. A small model may run on a single mid-range GPU; large models need several high-memory GPUs with fast interconnects. Cloud GPUs avoid upfront purchases and suit variable demand; owned hardware can pay off with steady, high utilization. Test on the actual hardware before committing.",
        ],
        cta: {
          title: "Weighing self-hosting against APIs?",
          description: "ZSpace Labs models total cost, evaluates open-weight models on your tasks and builds self-hosted serving when it makes sense. See [[/services/ai-automation|AI infrastructure services]].",
        },
      },
      {
        heading: "Serving Software",
        body: [
          "Use a purpose-built inference engine rather than a generic web server. vLLM and SGLang are widely used open-source engines for GPUs; TensorRT-LLM targets NVIDIA hardware; llama.cpp serves quantized models on CPUs and small machines. Most expose OpenAI-compatible APIs, which lets applications switch between self-hosted and hosted models through a gateway. See [[/blogs/llm-model-serving|LLM model serving]] for engine trade-offs.",
        ],
      },
      {
        heading: "Security",
        body: [],
        checklist: [
          "Download weights from official sources; verify hashes; prefer safetensors",
          "Run serving in isolated networks with no unnecessary egress",
          "Authenticate and rate-limit all access through a gateway",
          "Patch inference engines and drivers regularly",
          "Protect prompts and outputs in logs like any sensitive data",
          "Apply the same application-level defences (injection, leakage) as with hosted models",
        ],
      },
      {
        heading: "Total Cost of Ownership",
        body: [
          "Compare like for like. Self-hosting costs include GPU instances or hardware (including idle time and redundancy), storage and networking, engineering time to build and operate the stack, monitoring and on-call, evaluation of new model releases and upgrades. Hosted API costs include per-token charges at your real volume and any enterprise commitments. Utilization is the key variable: self-hosting is most competitive with steady, high load or when data requirements rule out APIs.",
        ],
        table: {
          headers: ["Cost item", "Often overlooked because"],
          rows: [
            ["Idle GPU capacity", "Traffic is spiky; GPUs are billed regardless"],
            ["Redundancy", "Production needs more than one replica"],
            ["Engineering and on-call", "Serving stacks need constant care"],
            ["Model evaluation and upgrades", "New releases arrive frequently"],
            ["Quality gap", "A cheaper model may need more review or retries"],
          ],
        },
      },
      {
        heading: "Scaling, Monitoring and Maintenance",
        body: [
          "Scale on queue length or token throughput, keep warm capacity for interactive use and plan for slow model loading. Monitor latency, errors, GPU memory and quality, and run your evaluation set whenever you change models, quantization or engine versions. Keep a hosted fallback for overflow or outages if data rules allow. Maintenance never stops: engines, drivers and models update frequently.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Self-hosting offers data control, predictable behaviour, customization and potentially lower cost at scale. It requires GPU operations skills, careful licensing review and ongoing maintenance, and some of the most capable models are only available through APIs. Many organizations run a hybrid: self-hosted models for sensitive or high-volume tasks, hosted APIs for the rest.",
        ],
      },
      {
        heading: "How to Self-Host Step by Step",
        body: [],
        checklist: [
          "**1. Define why**: data, control, cost or offline needs",
          "**2. Shortlist open-weight models** and check licences",
          "**3. Evaluate them** on your tasks against hosted options",
          "**4. Size hardware** for weights, KV cache and redundancy",
          "**5. Deploy an inference engine** behind a gateway",
          "**6. Secure, monitor and autoscale**",
          "**7. Track total cost** and revisit the decision regularly",
        ],
      },
      {
        heading: "Evaluating Open-Weight Models",
        body: [
          "Public benchmarks give a rough ranking but rarely predict performance on your tasks. Shortlist two or three open-weight models of sizes your hardware can serve, run your evaluation set on each in the precision you will deploy (for example FP8 or 4-bit) and compare with the hosted model you would otherwise use. Include latency and throughput at realistic concurrency. Re-run the comparison as new open-weight releases appear, since the gap with hosted models changes over time. See [[/blogs/llm-evaluation-pipeline|LLM evaluation pipeline]].",
        ],
      },
      {
        heading: "Fine-Tuning Self-Hosted Models",
        body: [
          "Self-hosting makes fine-tuning more practical, because you control the base model and can serve adapters alongside it. Fine-tune for consistent formats, domain terminology or narrow tasks, using curated, documented datasets and parameter-efficient methods. Version each fine-tune, evaluate it against the base model and keep the base model available for rollback. Retrieval remains the better tool for knowledge that changes; see [[/blogs/rag-vs-fine-tuning|RAG vs fine-tuning]].",
        ],
      },
      {
        heading: "A Simple Cost Comparison Method",
        body: [
          "To compare self-hosting with APIs, start from measured usage: input and output tokens per month by feature. Price that volume with your current API rates, including any caching discounts. For self-hosting, benchmark the candidate model on target GPUs to find sustainable tokens per second at your latency target, calculate how many GPUs you need for peak load plus redundancy, multiply by hours and price, and add storage, networking and a realistic share of engineering and on-call time.",
          "Compare the totals at current volume and at projected volume in a year. Self-hosting often loses at low volume and can win at high, steady volume, but quality differences matter too: a cheaper model that needs more human review may cost more overall. Revisit the comparison as prices and models change; see [[/blogs/llm-cost-optimization|LLM cost optimization]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a healthcare analytics company cannot send certain records to external APIs under customer contracts. It evaluates three open-weight models on its summarization tasks, selects one that meets quality targets in FP8, serves it with vLLM on cloud GPUs in its own account and region behind an internal gateway, and keeps a hosted model for non-sensitive marketing content. Total cost is reviewed quarterly as volumes grow.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Assuming open-weight means unrestricted use",
          "Comparing GPU hourly price with API price without utilization",
          "Sizing for weights but not KV cache and redundancy",
          "Skipping evaluation against hosted alternatives",
          "No plan for engine, driver and model updates",
        ],
        cta: {
          title: "Need help running models in your own environment?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|self-hosted LLM deployment]], from model selection and licensing to serving and monitoring.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Self-hosting gives control at the price of responsibility. Choose it for clear reasons, check licences, size hardware for real workloads, use a proper inference engine, secure and monitor it, and compare total cost honestly with hosted APIs.",
        ],
      },
    ],
  },

  // ---------------------------------------- 710 · AI PLATFORM ENGINEERING
  {
    slug: "ai-platform-engineering",
    title: "AI Platform Engineering: How to Build Infrastructure for Multiple AI Teams",
    seoTitle: "AI Platform Engineering: Gateways, Golden Paths and Governance",
    excerpt:
      "How to build an internal AI platform for multiple teams: model gateways, reusable services for retrieval, evaluation and tracing, deployment pipelines, developer experience and golden paths, access control, cost management, governance built in and platform ownership.",
    category: "AI & Automation",
    banner: "aiplatformmap",
    bannerAlt:
      "AI platform in four columns: access (Gateway, Keys, quotas, Routing, Fallbacks), shared services highlighted (Retrieval, Evaluation, Tracing, Prompt registry), delivery (Templates, CI gates, Deploy, Environments) and governance (Policies, Inventory, Cost reports, Audit).",
    date: "2026-10-02",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["b2b-enterprise", "saas-technology", "fintech"],
    relatedSlugs: ["enterprise-ai-implementation", "llm-gateway", "llmops"],
    faqs: [
      { q: "What is AI platform engineering?", a: "Building and running shared infrastructure and tooling that lets many teams build, deploy and operate AI features safely and quickly, such as model gateways, retrieval services, evaluation and tracing, deployment templates and built-in governance." },
      { q: "When does an organization need an AI platform?", a: "When several teams build AI features and start duplicating work, managing their own keys, building separate retrieval pipelines or skipping evaluation and governance. One or two projects rarely justify a full platform." },
      { q: "What is the core of an AI platform?", a: "Usually a model gateway for access, routing, quotas and logging, plus shared tracing and evaluation. Retrieval services, prompt management and deployment templates follow as needs grow." },
      { q: "What is a golden path?", a: "A supported, well-documented way to build a common kind of AI feature, such as a RAG assistant, with templates, defaults and built-in controls, so teams can move quickly without reinventing infrastructure." },
      { q: "How does a platform enforce governance?", a: "By building policies into shared services: approved models in the gateway, data rules per model, mandatory tracing, evaluation gates in templates, inventory registration and cost attribution by team." },
      { q: "Who should own the AI platform?", a: "A platform team with AI and infrastructure skills, working closely with security, data and governance, and treating product teams as customers." },
      { q: "How do we measure platform success?", a: "Time for a team to ship a new AI feature, adoption of shared services, incidents and policy violations, cost visibility and developer satisfaction." },
      { q: "How do we prevent shadow AI pipelines?", a: "Make the platform path easier than building alone: fast access, good defaults, templates and support, combined with clear policies about unapproved tools." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An AI platform gives many teams a fast, safe path to production. Start with a model gateway for approved models, keys, quotas, routing, fallback and logging; add shared tracing and evaluation; then reusable retrieval, prompt management and deployment templates as demand grows. Build governance into these services rather than into review meetings, attribute cost to teams, measure time to ship and adoption, and run the platform as a product with product teams as its customers.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "The organizational view of scaling AI is in [[/blogs/enterprise-ai-implementation|enterprise AI implementation]]. Platform components are covered in [[/blogs/llm-gateway|LLM gateway]], [[/blogs/llm-observability|LLM observability]], [[/blogs/llm-evaluation-pipeline|LLM evaluation pipeline]], [[/blogs/prompt-versioning|prompt versioning]] and [[/blogs/llm-model-serving|LLM model serving]]. The practices the platform supports are in [[/blogs/llmops|LLMOps]].",
        ],
      },
      {
        heading: "Why Build an AI Platform",
        body: [
          "Without a platform, each team solves the same problems separately: obtaining model access, handling keys, building retrieval pipelines, logging prompts, estimating cost and satisfying security reviews. The results are duplicated effort, inconsistent security, unknown spend and governance gaps. The CNCF describes the risk of teams building unsanctioned pipelines outside the platform and argues for exposing LLMOps as a governed, self-service capability.",
        ],
      },
      {
        heading: "Platform Components",
        body: [],
        table: {
          headers: ["Component", "What it provides", "Build first?"],
          rows: [
            ["Model gateway", "Approved models, keys, quotas, routing, fallback, logging, cost attribution", "Yes"],
            ["Tracing and observability", "Standard traces, dashboards, sensitive data handling", "Yes"],
            ["Evaluation service", "Dataset storage, runners, judges, CI integration, reports", "Early"],
            ["Retrieval service", "Ingestion connectors, permission-aware indexes, search APIs", "When several teams need RAG"],
            ["Prompt and config registry", "Versioned prompts, environments, rollout flags", "When non-engineers edit prompts"],
            ["Model serving", "Self-hosted models and fine-tunes", "Only if self-hosting"],
            ["Templates and golden paths", "Starter projects with controls built in", "As patterns repeat"],
          ],
        },
      },
      {
        heading: "The Platform Request Path",
        body: [],
        diagram: {
          variant: "aiplatformflow",
          alt: "AI platform request path: Team app, Platform SDK, Model gateway (highlighted), Models, Shared services, Tracing + cost.",
          caption: "Routing all model access through the gateway gives the platform one place to apply policy, measure cost and switch models.",
        },
      },
      {
        heading: "Developer Experience and Golden Paths",
        body: [
          "A platform succeeds only if teams choose it. Make the supported path the fastest: self-service access to approved models in minutes, an SDK that adds tracing and cost tags automatically, templates for common patterns such as a RAG assistant, document extraction or an internal copilot, and clear documentation with examples. Platform engineering tools such as Backstage for developer portals can present these as a catalog. Listen to teams and remove friction continuously.",
        ],
        cta: {
          title: "Several teams building AI separately?",
          description: "ZSpace Labs designs and builds internal AI platforms: gateways, shared services, templates and governance. See [[/services/ai-automation|AI engineering services]].",
        },
      },
      {
        heading: "Governance Built In",
        body: [
          "Encode policies in the platform rather than relying on manual review alone. The gateway allows only approved models and enforces which data classifications may go to which providers. Templates include evaluation gates and tracing by default. New applications register in the AI inventory when they request access. Cost is attributed by team and feature. High-risk uses still get human review, but routine safe uses flow quickly. See [[/blogs/ai-governance-framework|AI governance framework]].",
        ],
      },
      {
        heading: "Access Control and Security",
        body: [
          "Issue credentials per application and environment, not per person or shared across teams. Apply quotas and budgets per application. Centralize secrets for provider keys in the gateway so applications never hold them. Provide shared security components, such as injection detection, output filtering and redaction, that teams can adopt easily. Agent-specific identity patterns are in [[/blogs/ai-agent-access-control|AI agent access control]].",
        ],
      },
      {
        heading: "Cost Management",
        body: [
          "The platform is the natural place for cost visibility: every request through the gateway carries team, application and feature tags, so dashboards show spend by owner, and budgets can alert or throttle. Shared caching, routing to cheaper models and batch processing can be offered centrally. Report cost alongside value so teams make sensible trade-offs; see [[/blogs/llm-cost-optimization|LLM cost optimization]].",
        ],
      },
      {
        heading: "Ownership and Operating Model",
        body: [
          "A platform team owns shared services, their reliability and roadmap. Product teams own their applications, prompts, evaluation sets and quality. Security, data and governance teams define policies the platform enforces. Treat the platform as a product: gather requirements from teams, publish a roadmap, measure adoption and satisfaction, and avoid building features no team needs yet.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "A good AI platform speeds up delivery, makes security and governance consistent and gives leadership visibility of cost and risk. It costs a dedicated team, can become a bottleneck if it is slow to adapt, and can be overbuilt before demand exists. Start with the gateway and observability, and grow with real needs.",
        ],
      },
      {
        heading: "How to Build an AI Platform Step by Step",
        body: [],
        checklist: [
          "**1. Interview teams** about what they build and where they struggle",
          "**2. Launch a model gateway** with approved models, quotas and logging",
          "**3. Add standard tracing** and cost attribution",
          "**4. Provide evaluation tooling** and CI integration",
          "**5. Offer shared retrieval** when several teams need it",
          "**6. Publish golden-path templates** with controls built in",
          "**7. Measure time to ship, adoption and spend**, and iterate",
        ],
      },
      {
        heading: "Platform Maturity Stages",
        body: [],
        table: {
          headers: ["Stage", "Typical state", "Platform focus"],
          rows: [
            ["Experiments", "Few teams, direct provider access", "Approved models, key management, basic policy"],
            ["Early production", "Several features live", "Gateway, tracing, cost attribution, evaluation tooling"],
            ["Scaling", "Many teams, repeated patterns", "Shared retrieval, templates, prompt registry, self-service"],
            ["Mature", "AI across the business", "Self-hosted models where justified, policy as code, portfolio reporting"],
          ],
        },
      },
      {
        heading: "Measuring the Platform",
        body: [
          "Measure the platform by what it enables: time from idea to production for a new AI feature, share of AI traffic flowing through the gateway, adoption of shared services, number of security findings per launch, completeness of the AI inventory and accuracy of cost attribution. Survey developers regularly. If teams route around the platform, find out why and fix the friction. The organizational view is in [[/blogs/enterprise-ai-implementation|enterprise AI implementation]].",
        ],
      },
      {
        heading: "Example Golden-Path Template",
        body: [
          "A golden path packages decisions so teams start with good defaults. A template for a retrieval assistant might include the following.",
        ],
        checklist: [
          "Service skeleton with authentication and the platform SDK preconfigured",
          "Gateway access to approved models with team budget and quotas",
          "Connector configuration for permission-aware ingestion into the shared retrieval service",
          "Tracing with redaction and cost tags enabled by default",
          "Evaluation dataset folder, starter cases and CI job with release gate",
          "Feature flag wiring for prompts and models",
          "Inventory registration and data classification form",
          "Runbook with kill switch and rollback steps",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: in a mid-sized software company, five teams each integrate model providers separately, with keys in different vaults and no shared cost view. A two-person platform effort launches a gateway with approved models, per-team keys and budgets, an SDK that adds tracing, and a RAG template with permission-aware retrieval. New AI features reach production faster, spend becomes visible by team and security reviews shrink because controls are standard.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Building a large platform before teams need it",
          "A platform path slower than going around it",
          "Governance as meetings instead of built-in controls",
          "Shared keys with no cost attribution",
          "No product mindset or feedback from teams",
        ],
        cta: {
          title: "Planning shared AI infrastructure?",
          description: "Talk to ZSpace Labs about an [[/services/ai-automation|AI platform roadmap]] sized to your teams and use cases.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "AI platform engineering turns scattered AI experiments into a consistent, governed capability. Start with the gateway and observability, add shared services as patterns repeat, build governance into defaults and run the platform as a product for the teams it serves.",
        ],
      },
    ],
  },
];
