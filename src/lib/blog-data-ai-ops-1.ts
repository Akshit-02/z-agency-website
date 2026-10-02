import type { BlogPost } from "./blog-data";

/**
 * AI knowledge hub, part twenty-four: LLMOps. llmops is the cluster hub;
 * llmops-vs-mlops compares disciplines; llm-application-deployment covers
 * getting an LLM app into production; llm-evaluation-pipeline covers the
 * application-level evaluation pipeline (model-level evaluation stays in
 * ai-model-evaluation, agent trajectories in ai-agent-evaluation).
 * Merged into `posts` in blog-data.ts.
 */

export const aiOpsPosts1: BlogPost[] = [
  // ---------------------------------------- 661 · LLMOPS
  {
    slug: "llmops",
    title: "LLMOps: A Complete Guide to Operating AI Applications in Production",
    seoTitle: "LLMOps: How to Operate LLM Applications in Production",
    excerpt:
      "What LLMOps is and how to run it: prompt and configuration management, evaluation, deployment, observability, cost control, security, governance and continuous improvement for applications built on large language models.",
    category: "AI & Automation",
    banner: "llmopshub",
    bannerAlt:
      "LLMOps in four columns: build (Prompts, Retrieval, Tools, Datasets), evaluate highlighted (Test sets, Judges, Human review, Release gates), operate (Deploy, Trace, Cost, Incidents) and govern (Access, Data rules, Audit, Reviews).",
    date: "2026-10-02",
    readingTime: "10 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise", "fintech"],
    relatedSlugs: ["llmops-vs-mlops", "llm-evaluation-pipeline", "llm-observability"],
    faqs: [
      { q: "What is LLMOps?", a: "LLMOps is the set of practices for building, releasing and running applications that use large language models: managing prompts and configuration, evaluating quality, deploying safely, observing behaviour and cost in production, securing data and tools, and improving the system over time." },
      { q: "Is LLMOps different from DevOps?", a: "It builds on DevOps. Version control, CI/CD, infrastructure as code and monitoring all still apply. LLMOps adds what DevOps does not cover: probabilistic outputs, prompt and model versions, evaluation datasets, quality monitoring, token costs and new security risks such as prompt injection." },
      { q: "Do we need LLMOps if we only call a hosted model API?", a: "Yes. Most LLMOps work sits in your application: prompts, retrieval, tools, evaluation, tracing, cost limits and release processes. Hosted APIs remove model hosting, not the need to operate the application responsibly." },
      { q: "What tools are used for LLMOps?", a: "Typical stacks combine version control and CI, an evaluation framework, tracing and observability (often built on OpenTelemetry), an LLM gateway for access and cost control, a prompt or configuration store and the usual cloud infrastructure. Platforms such as MLflow, Langfuse and LangSmith bundle several of these." },
      { q: "Who owns LLMOps in an organization?", a: "Usually a shared model: product teams own their applications, prompts and evaluation sets; a platform team owns shared services such as the gateway, tracing and deployment pipelines; security and governance teams set policies. Clear ownership of each layer matters more than the team name." },
      { q: "What is the most important LLMOps practice to start with?", a: "An evaluation set run on every change. Without it, prompt edits, model upgrades and retrieval changes are released blind, and quality problems are found by users." },
      { q: "How is LLMOps different from MLOps?", a: "MLOps centres on training, versioning and serving models you build. LLMOps usually centres on applications built around models you consume, with prompts, retrieval and tools as the main things you change. The full comparison is in our LLMOps vs MLOps guide." },
      { q: "How much does LLMOps cost?", a: "It depends on scale. Small teams can start with open-source tracing and evaluation libraries and existing CI. Costs grow with trace volume, evaluation runs that call models, and platform engineering time, which should be weighed against the cost of quality incidents." },
      { q: "Does LLMOps apply to AI agents?", a: "Yes, with extra emphasis on step-level tracing, tool permissions, budgets and trajectory evaluation, because agents take multiple actions per request." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "LLMOps is the discipline of running applications built on large language models reliably. It covers versioning prompts and configuration, evaluating quality on datasets before every release, deploying through staged rollouts, tracing requests in production, controlling cost and latency, securing data and tools, governing use and feeding production failures back into tests. It extends DevOps practices to systems whose outputs are probabilistic and whose behaviour changes when prompts, models or data change.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "This is the hub for our LLMOps cluster. The comparison with classical machine learning operations is in [[/blogs/llmops-vs-mlops|LLMOps vs MLOps]]. Detailed guides cover [[/blogs/llm-application-deployment|deployment]], [[/blogs/llm-evaluation-pipeline|evaluation pipelines]], [[/blogs/llm-observability|observability and tracing]], [[/blogs/prompt-versioning|prompt versioning]], [[/blogs/llm-regression-testing|regression testing]], [[/blogs/llm-application-reliability|reliability]] and [[/blogs/ai-application-release-management|release management]]. For agents specifically, see [[/blogs/ai-agent-observability|AI agent observability]].",
        ],
      },
      {
        heading: "Why LLM Applications Need Their Own Operations Practice",
        body: [
          "Conventional software is deterministic: the same input and code give the same output, and tests either pass or fail. LLM applications break this assumption in several ways. The same prompt can produce different outputs. A provider can update a model behind a stable name. A small wording change in a prompt can improve one case and break another. Retrieval results change as documents change. Costs scale with tokens, not just requests.",
          "This means the things you version, test and monitor are different. Code is still important, but so are prompts, model identifiers, generation settings, retrieval configuration, tool definitions and evaluation datasets. A release can change behaviour without any code change at all, and a quality regression can appear without any error being logged.",
        ],
      },
      {
        heading: "The LLMOps Lifecycle",
        body: [
          "The lifecycle is a loop rather than a line. Production traces and user feedback supply new test cases; evaluation decides whether changes ship; monitoring decides what to work on next.",
        ],
        diagram: {
          variant: "llmopsloop",
          alt: "LLMOps lifecycle: Design, Prompts + retrieval, Evaluate (highlighted), Staged release, Observe, Learn from failures; loop: production failures become new test cases.",
          caption: "Evaluation is the gate between change and release; production traces feed the next round of tests.",
        },
      },
      {
        heading: "What You Version",
        body: [
          "Treat every behaviour-affecting artefact as configuration under version control, linked to the evaluation results that justified it.",
        ],
        table: {
          headers: ["Artefact", "Examples", "Why it matters"],
          rows: [
            ["Prompts", "System prompts, templates, few-shot examples", "Small edits change behaviour"],
            ["Model settings", "Provider, model ID, temperature, max tokens", "Upgrades change quality, cost and latency"],
            ["Retrieval config", "Chunking, embedding model, top-k, filters", "Changes what context the model sees"],
            ["Tools", "Schemas, descriptions, permissions", "Affects which actions are chosen"],
            ["Guardrails", "Validation rules, policies, thresholds", "Defines what is allowed through"],
            ["Evaluation sets", "Test cases, expected answers, rubrics", "Defines what good means"],
          ],
        },
      },
      {
        heading: "Evaluation Before Release",
        body: [
          "Every change that can affect behaviour should run against an evaluation set before release: deterministic checks for format and rules, automated scoring for task quality, and human review for a sample or for high-risk changes. Results are compared with the current production version, and the change ships only if agreed thresholds hold.",
          "The pipeline design is covered in [[/blogs/llm-evaluation-pipeline|LLM evaluation pipeline]] and change-specific comparisons in [[/blogs/llm-regression-testing|LLM regression testing]]. Model-level methods such as LLM judges and human rubrics are in [[/blogs/ai-model-evaluation|AI model evaluation]].",
        ],
        cta: {
          title: "Taking an LLM application to production?",
          description: "ZSpace Labs sets up evaluation, release and monitoring for AI features so changes ship with evidence. See our [[/services/ai-automation|AI development services]].",
        },
      },
      {
        heading: "Deployment and Release",
        body: [
          "Deploy LLM applications like other services: separate environments, secrets in a manager rather than code, containers or serverless functions, infrastructure as code. Then add LLM-specific release controls: feature flags for prompt and model changes, canary or percentage rollouts, shadow testing where a new configuration runs alongside production without affecting users, and fast rollback to the previous configuration.",
          "See [[/blogs/llm-application-deployment|LLM application deployment]] for the architecture and [[/blogs/ai-application-release-management|release management]] for rollout strategies.",
        ],
      },
      {
        heading: "Observability, Cost and Reliability",
        body: [
          "Production visibility needs traces that show each step of a request (retrieval, model calls, tool calls, validation) with inputs, outputs, tokens, latency and versions. Metrics track error rates, latency percentiles, cost per request and per feature, and quality signals such as sampled evaluation scores and user feedback. The OpenTelemetry [[https://opentelemetry.io/docs/specs/semconv/gen-ai/|generative AI semantic conventions]] give these attributes a standard shape.",
          "Reliability work handles provider outages, rate limits, timeouts and malformed outputs with retries, fallbacks and graceful degradation; see [[/blogs/llm-application-reliability|LLM application reliability]]. Cost controls such as routing, caching and budgets are in [[/blogs/llm-cost-optimization|LLM cost optimization]].",
        ],
      },
      {
        heading: "Security and Governance",
        body: [
          "LLMOps includes security controls that ordinary applications lack: defences against prompt injection, permission checks outside the model, output validation before rendering or execution, redaction of sensitive data in logs, and limits on tool use. The [[https://genai.owasp.org/llm-top-10/|OWASP Top 10 for LLM Applications]] is a practical checklist.",
          "Governance connects operations to accountability: an inventory of AI features, owners, risk tiers, approval for high-risk changes and records of evaluation results. See [[/blogs/ai-governance-framework|AI governance framework]] and [[/blogs/ai-security-business-applications|AI security for business applications]].",
        ],
      },
      {
        heading: "Who Owns What",
        body: [
          "A useful split: product teams own their prompts, evaluation sets and quality targets; a platform team owns shared infrastructure such as the model gateway, tracing, evaluation runners and deployment pipelines; security and governance teams set policy and review high-risk systems. The CNCF discusses this ownership question in [[https://www.cncf.io/blog/2026/08/13/llmops-and-platform-engineering-who-should-own-the-ai-pipeline/|LLMOps and platform engineering]], arguing that clarity about who owns each layer matters more than which team name is used. Platform design is covered in [[/blogs/ai-platform-engineering|AI platform engineering]].",
        ],
      },
      {
        heading: "An LLMOps Maturity Path",
        body: [],
        table: {
          headers: ["Stage", "Typical state", "Next step"],
          rows: [
            ["Ad hoc", "Prompts in code, manual testing, no traces", "Version prompts, build a first evaluation set"],
            ["Repeatable", "Evaluation set runs in CI, basic logging", "Add tracing, cost metrics and release gates"],
            ["Managed", "Traces, dashboards, staged rollouts", "Feed production failures into tests, add sampled quality scoring"],
            ["Platform", "Shared gateway, evaluation and tracing for many teams", "Self-service with policy built in"],
          ],
        },
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Good LLMOps lets teams change prompts and models with confidence, catch regressions before users do, explain incidents from traces and keep costs predictable. It also takes effort: evaluation sets need curating, automated judges need calibrating, traces contain sensitive data that must be protected, and tooling is still maturing, so some components will be built in-house or replaced over time.",
        ],
      },
      {
        heading: "How to Introduce LLMOps Step by Step",
        body: [],
        checklist: [
          "**1. Move prompts and model settings** into versioned configuration",
          "**2. Build an evaluation set** from real or realistic cases, 50 to a few hundred to start",
          "**3. Run it in CI** on every behaviour-affecting change, with thresholds",
          "**4. Add tracing** with versions, tokens, latency and cost on every request",
          "**5. Release through flags** with staged rollout and one-step rollback",
          "**6. Review production samples** weekly and add failures to the evaluation set",
          "**7. Centralize shared pieces** (gateway, tracing, evaluation runner) as more teams build",
        ],
      },
      {
        heading: "LLMOps for RAG Applications and Agents",
        body: [
          "Retrieval-augmented applications add a data dimension to LLMOps. Index versions, chunking settings and embedding models change answers as much as prompts do, so they need versioning, evaluation and staged rollout too. Retrieval quality deserves its own metrics, such as whether the right documents appear in the top results, separate from answer quality. Document freshness and permissions are operational concerns, not one-time setup; see [[/blogs/enterprise-rag-architecture|enterprise RAG architecture]].",
          "Agents add multi-step behaviour. Each request may involve many model and tool calls, so traces must capture the full trajectory, budgets must cap steps, time and cost, and evaluation must judge whether the agent took sensible actions, not only whether the final answer looked right. Tool permissions and approval rules become part of what you version and review. See [[/blogs/ai-agent-evaluation|AI agent evaluation]] and [[/blogs/ai-agent-guardrails|AI agent guardrails]].",
        ],
      },
      {
        heading: "Incident Management for AI Features",
        body: [
          "AI incidents look different from outages: a burst of wrong answers, a prompt injection exploit, a cost spike from a looping agent or a provider model change that degrades one language. Prepare runbooks for the most likely cases: how to disable a feature with a kill switch, roll back prompt or model versions, switch providers, notify affected users and preserve traces for investigation.",
          "After each incident, record the cause across prompts, data, model, tools and process, add the triggering cases to the evaluation set and update monitoring so the same pattern is caught earlier. Keep incidents in the AI inventory so governance reviews see them; see [[/blogs/ai-governance-framework|AI governance framework]].",
        ],
      },
      {
        heading: "Choosing LLMOps Tooling",
        body: [
          "The LLMOps tooling market changes quickly, so choose by capability and fit rather than brand. Most teams need five capabilities: versioned configuration for prompts and model settings, an evaluation runner that works in CI, tracing with token and cost data, a gateway for model access and limits, and a place to review production samples and feedback. Some platforms bundle several of these; others do one thing well.",
          "Evaluate candidates on your own application: how easily they instrument your stack, whether they support OpenTelemetry so data stays portable, where trace data is stored and whether self-hosting is possible for sensitive content, how they handle evaluation datasets and judges, and pricing at your expected trace volume. Prefer tools that let you export data, because you may change tools as needs grow. Microsoft's [[https://learn.microsoft.com/en-us/ai/playbook/technology-guidance/generative-ai/mlops-in-openai/|LLMOps guidance]] is a useful vendor-neutral checklist of lifecycle stages to cover.",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a SaaS company's support assistant changes prompts several times a week, and twice a bad edit reaches customers. The team moves prompts into versioned configuration, builds a 250-case evaluation set from anonymized tickets, adds a CI gate and rolls out changes to 10% of traffic first. Traces show each answer's retrieved sources and versions. The next problematic edit fails the gate on citation accuracy and never reaches customers.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Prompts edited directly in production without review or tests",
          "Monitoring only errors and latency, not output quality",
          "Treating a provider model name as fixed behaviour",
          "Logging full prompts with personal data and no retention limits",
          "Building a heavy platform before a single application has evaluation",
        ],
        cta: {
          title: "Need an LLMOps foundation for your team?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|production AI engineering]]: evaluation, tracing, release processes and cost controls sized to your stage.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "LLMOps is how AI features stay trustworthy after launch: version everything that changes behaviour, evaluate before release, observe in production and turn failures into tests. Start small with an evaluation set and tracing, then grow into shared platform services as AI use spreads.",
        ],
      },
    ],
  },

  // ---------------------------------------- 662 · LLMOPS VS MLOPS
  {
    slug: "llmops-vs-mlops",
    title: "LLMOps vs MLOps: What's the Difference?",
    seoTitle: "LLMOps vs MLOps: Differences, Overlaps and When You Need Each",
    excerpt:
      "How LLMOps differs from MLOps across lifecycle, data, evaluation, deployment, monitoring, cost and team responsibilities, where the practices overlap and how organizations running both should structure them.",
    category: "AI & Automation",
    banner: "llmopsvsmlops",
    bannerAlt:
      "MLOps vs LLMOps compared (MLOps and LLMOps, with LLMOps highlighted) by main lever, data, evaluation, serving and main cost.",
    date: "2026-10-02",
    readingTime: "8 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise", "fintech"],
    relatedSlugs: ["llmops", "llm-evaluation-pipeline", "rag-vs-fine-tuning"],
    faqs: [
      { q: "Is LLMOps just a subset of MLOps?", a: "Partly. LLMOps inherits MLOps ideas such as versioning, reproducibility, evaluation and monitoring. But most LLM applications do not train models, so their operational focus shifts to prompts, retrieval, tools, evaluation of open-ended outputs and token costs, which classical MLOps tooling was not designed for." },
      { q: "Do LLM applications need MLOps tools?", a: "Some do. If you fine-tune or self-host models, you need experiment tracking, model registries and serving infrastructure, which are MLOps staples. If you only call hosted APIs, your needs centre on prompt management, evaluation, tracing and gateways." },
      { q: "What is the biggest difference in evaluation?", a: "Classical ML models are usually scored against labelled data with clear metrics such as accuracy or error. LLM outputs are often open-ended, so evaluation combines deterministic checks, rubric-based scoring by people or LLM judges, and task-specific metrics." },
      { q: "How does monitoring differ?", a: "MLOps monitoring focuses on data drift and prediction quality against delayed labels. LLMOps monitoring adds traces of multi-step requests, token usage and cost, safety and policy violations, retrieval quality and sampled output quality." },
      { q: "Is fine-tuning part of LLMOps or MLOps?", a: "Both. Fine-tuning a language model uses MLOps practices for data, training runs and model registries, then LLMOps practices for evaluating and operating the resulting application." },
      { q: "Can one team handle both?", a: "In smaller organizations, yes. Larger ones often keep a shared platform team for infrastructure, with ML specialists focused on trained models and product teams owning LLM applications and their evaluation." },
      { q: "Which costs more to operate?", a: "It depends. Classical ML costs concentrate in training and feature pipelines; LLM application costs concentrate in per-request inference, which grows with usage and context length. Self-hosting LLMs adds substantial GPU costs." },
      { q: "Do we still need data pipelines for LLM applications?", a: "Yes. Retrieval-based applications need reliable ingestion, parsing, chunking, embedding and permission pipelines for documents, plus pipelines for evaluation datasets and feedback." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "MLOps manages the lifecycle of models you train: data pipelines, experiments, training, model registries, serving and drift monitoring. LLMOps manages applications built on large language models, which are usually consumed rather than trained, so the main levers become prompts, retrieval, tools and model choice. Both rely on versioning, automated testing, staged deployment and monitoring, but LLMOps adds open-ended output evaluation, token cost control, tracing of multi-step requests and defences against risks such as prompt injection.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "The full LLMOps practice is in [[/blogs/llmops|our LLMOps guide]]. When fine-tuning is worth it is discussed in [[/blogs/rag-vs-fine-tuning|RAG vs fine-tuning]], and model-level quality measurement in [[/blogs/ai-model-evaluation|AI model evaluation]].",
        ],
      },
      {
        heading: "Side-by-Side Comparison",
        body: [],
        table: {
          headers: ["Area", "MLOps", "LLMOps"],
          rows: [
            ["Primary artefact", "Trained model", "Application: prompts, retrieval, tools, model choice"],
            ["Data focus", "Labelled training data, features", "Documents, context, evaluation sets, feedback"],
            ["Change frequency", "Retraining cycles", "Prompt and config changes, often weekly or daily"],
            ["Evaluation", "Metrics on held-out labelled data", "Deterministic checks, rubrics, LLM judges, human review"],
            ["Serving", "Model endpoint you host", "Usually provider APIs via a gateway; self-hosting optional"],
            ["Monitoring", "Data and prediction drift, accuracy", "Traces, tokens, cost, safety, sampled output quality"],
            ["Main cost", "Training compute, feature pipelines", "Per-request inference, context length"],
            ["New security risks", "Data poisoning, model theft", "Prompt injection, data leakage, tool misuse"],
          ],
        },
      },
      {
        heading: "Where They Overlap",
        body: [
          "Both disciplines rest on the same engineering principles: everything that affects behaviour is versioned, every change is tested automatically before release, deployment is staged and reversible, and production behaviour is measured. Both need reproducibility, meaning that you can tell exactly which data, code and configuration produced a result. Both need governance for higher-risk uses.",
          "Many tools now span both. MLflow, for example, has added [[https://mlflow.org/docs/latest/genai/|generative AI features]] such as tracing and evaluation alongside its classical experiment tracking and model registry. Kubernetes-based serving platforms such as [[https://kserve.github.io/website/|KServe]] host both traditional models and language models.",
        ],
      },
      {
        heading: "Lifecycles Compared",
        body: [
          "The MLOps loop centres on data and training: collect and label data, engineer features, train and tune, register the model, deploy, watch for drift and retrain. The LLMOps loop centres on application behaviour: design the task, write prompts and connect retrieval and tools, evaluate on a test set, release in stages, trace production requests and turn failures into new tests.",
        ],
        diagram: {
          variant: "mlopsllmopsflow",
          alt: "LLMOps lifecycle, which iterates on prompts, retrieval and evaluation rather than training: Task design, Prompts + retrieval, Evaluate (highlighted), Staged release, Trace, Feedback; loop: MLOps iterates on training; LLMOps on everything around the model.",
          caption: "MLOps iterates on trained models; LLMOps iterates mostly on everything around the model.",
        },
      },
      {
        heading: "Evaluation: The Largest Practical Difference",
        body: [
          "A fraud model can be scored against labelled transactions with precision and recall. An assistant that drafts customer replies has no single correct answer, so teams combine several methods: deterministic checks for format, citations and forbidden content; rubric-based scoring by domain experts; LLM judges calibrated against human labels; and task outcomes such as resolution rates.",
          "Evaluation also runs far more often. Prompt changes can happen several times a week, and each one needs testing. This makes fast, cheap evaluation in CI a core LLMOps capability. See [[/blogs/llm-evaluation-pipeline|LLM evaluation pipeline]].",
        ],
        cta: {
          title: "Running both classical ML and LLM applications?",
          description: "ZSpace Labs helps teams design evaluation and operations that fit each kind of system. Explore our [[/services/ai-automation|AI engineering services]].",
        },
      },
      {
        heading: "Monitoring Differences",
        body: [
          "MLOps monitoring watches input distributions and prediction quality, often with delayed ground-truth labels. LLMOps monitoring needs traces of each request's steps, because a wrong answer might come from retrieval, the prompt, the model or a tool. It also tracks token usage and cost per feature, policy and safety flags, and sampled quality scores, since there may never be a label for most outputs. See [[/blogs/llm-observability|LLM observability]].",
        ],
      },
      {
        heading: "When You Need Both",
        body: [
          "Organizations often run both kinds of systems: a demand forecasting or fraud model alongside a support assistant. Fine-tuning a language model also uses both: MLOps practices for training data, runs and registries, then LLMOps for evaluating and operating the application around the fine-tuned model. Self-hosting open-weight models brings MLOps-style serving and capacity management into LLM work; see [[/blogs/llm-self-hosting|LLM self-hosting]].",
        ],
      },
      {
        heading: "Team Responsibilities",
        body: [],
        table: {
          headers: ["Responsibility", "Classical ML focus", "LLM application focus"],
          rows: [
            ["Data", "Data engineers, ML engineers", "Data engineers for document pipelines; product teams for evaluation sets"],
            ["Model", "Data scientists train and tune", "Product and AI engineers choose models and write prompts"],
            ["Quality", "Model metrics owners", "Product owners with domain reviewers"],
            ["Platform", "ML platform team", "AI platform team: gateway, tracing, evaluation runner"],
            ["Risk", "Model risk management", "AI governance, security for injection and tool misuse"],
          ],
        },
      },
      {
        heading: "Advantages and Limitations of Separating the Practices",
        body: [
          "Treating LLMOps as its own practice keeps attention on what actually changes in LLM applications, such as prompts and evaluation, rather than forcing them into training-centric workflows. The downside of separation is duplicated tooling and inconsistent standards. Most organizations do best with one shared platform and governance model, with practices tailored to each system type.",
        ],
      },
      {
        heading: "How to Decide What You Need",
        body: [],
        checklist: [
          "**Only hosted LLM APIs:** focus on prompt versioning, evaluation, tracing, gateway and cost controls",
          "**Fine-tuning:** add experiment tracking, dataset versioning and a model registry",
          "**Self-hosting models:** add serving infrastructure, capacity planning and GPU monitoring",
          "**Classical ML models too:** keep MLOps pipelines and share platform, observability and governance",
          "**Agents:** add step-level tracing, tool permissions and trajectory evaluation",
        ],
      },
      {
        heading: "Data Pipelines in Both Worlds",
        body: [
          "MLOps data work centres on training data: collecting, labelling, versioning and computing features consistently for training and serving. LLM applications still need data pipelines, but different ones: ingesting and parsing documents for retrieval, keeping indexes in sync with sources and permissions, curating evaluation datasets and routing feedback into review. Teams that assume no data engineering is needed because no model is trained usually discover the gap through poor retrieval.",
          "Both need lineage: knowing which data version produced a model or an answer. Our [[/blogs/ai-data-engineering|AI data engineering]] guide covers the shared foundations, and [[/blogs/ai-data-lineage|AI data lineage]] the traceability both disciplines rely on.",
        ],
      },
      {
        heading: "Tooling Overlap and Choices",
        body: [
          "Tool categories map partially across the two practices. Experiment tracking and model registries are central to MLOps and matter in LLMOps mainly when you fine-tune. Prompt management, LLM gateways and LLM-specific tracing are new categories. Evaluation tooling exists in both but looks different: metric computation on labelled data versus rubric scoring and judge calibration. Orchestration, CI/CD, infrastructure as code and general observability are shared.",
          "Rather than buying separate stacks, look for a common platform layer (CI, deployment, observability, secrets, governance) with specialized components on top. The CNCF's discussion of [[https://www.cncf.io/blog/2026/08/13/llmops-and-platform-engineering-who-should-own-the-ai-pipeline/|LLMOps and platform engineering]] makes the case for clarifying which team owns each layer; see also [[/blogs/ai-platform-engineering|AI platform engineering]].",
        ],
      },
      {
        heading: "Monitoring Compared in Practice",
        body: [
          "Consider a credit risk model and a customer support assistant in the same company. The credit model's monitoring compares input feature distributions with the training reference, tracks approval rates by segment and, months later, compares predictions with actual defaults. Alerts fire on drift or fairness metric changes, and the response is often retraining.",
          "The assistant's monitoring traces every request, tracks tokens and cost per conversation, samples answers for automated and human quality scoring, watches feedback and escalation rates and alerts on spikes in validation failures or policy flags. The response is usually a prompt fix, a retrieval fix or a model change, often within days. Both need dashboards, owners and incident processes, but the signals and response cycles are different, which is why teams benefit from understanding both; see [[/blogs/ai-model-monitoring|AI model monitoring]] and [[/blogs/llm-observability|LLM observability]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: an insurer runs a claims fraud model under an established MLOps process and adds an assistant that summarizes claim files. Initially the assistant is pushed through the fraud model's quarterly validation process, which slows prompt fixes to a crawl. The team instead keeps shared infrastructure and risk review, but gives the assistant its own evaluation set, CI gate and weekly release cadence, with model risk reviewing only material changes.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Forcing prompt changes through retraining-oriented release cycles",
          "Assuming accuracy metrics alone can judge open-ended outputs",
          "Ignoring token cost as an operational metric",
          "Building separate, incompatible platforms for ML and LLM teams",
          "Skipping data pipelines because no model is being trained",
        ],
        cta: {
          title: "Want help shaping your AI operations model?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|AI platform and operations design]] that fits the systems you actually run.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "MLOps and LLMOps share foundations but optimize different loops: training models versus operating applications around models. Use MLOps where you train or host models, LLMOps wherever language models power features, and a common platform and governance layer underneath both.",
        ],
      },
    ],
  },

  // ---------------------------------------- 663 · LLM APPLICATION DEPLOYMENT
  {
    slug: "llm-application-deployment",
    title: "LLM Application Deployment: How to Move an AI App Into Production",
    seoTitle: "LLM App Deployment: Architecture, Secrets, Scaling and Rollback",
    excerpt:
      "How to deploy an LLM application to production: environment separation, secrets, provider access through a gateway, containers and serverless options, streaming, scaling, access control, rollback and a production readiness checklist.",
    category: "AI & Automation",
    banner: "llmdeployarch",
    bannerAlt:
      "LLM app deployment in four columns: client (Web, Mobile, Streaming UI, Auth), application (API, Orchestration, Validation, Queues), ai layer highlighted (Gateway, Prompts, Retrieval, Tools) and operations (Secrets, Tracing, Flags, Rollback).",
    date: "2026-10-02",
    readingTime: "8 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise", "ecommerce"],
    relatedSlugs: ["llmops", "ai-application-release-management", "llm-application-reliability"],
    faqs: [
      { q: "What is different about deploying an LLM application?", a: "The application code deploys like any service, but behaviour also depends on prompts, model versions, retrieval indexes and provider availability. Deployment therefore includes configuration management, provider access, streaming, cost limits and the ability to roll back prompts and models independently of code." },
      { q: "Should we use serverless or containers?", a: "Both work. Serverless suits spiky, short requests but can hit timeout limits with long generations or agent runs. Containers on a managed platform or Kubernetes suit long-running requests, streaming, background jobs and steady traffic." },
      { q: "Where should API keys for model providers live?", a: "In a secrets manager, injected at runtime, never in code, client apps or browser bundles. Calls to providers should go through your backend or a gateway so keys and usage stay under your control." },
      { q: "Do we need an LLM gateway?", a: "Not on day one, but it helps once you have several features, models or teams. A gateway centralizes keys, routing, rate limits, budgets, logging and fallback." },
      { q: "How do we handle long-running requests?", a: "Stream responses to the user for interactive tasks, and move long jobs such as document processing or agent runs to background queues with status updates." },
      { q: "How should environments be separated?", a: "Use separate provider keys, budgets, data stores and indexes for development, staging and production, so tests cannot leak data or consume production quota." },
      { q: "How do we roll back a bad release?", a: "Keep prompts and model settings in versioned configuration behind flags, so you can revert them in seconds without redeploying code, and keep previous application builds ready to redeploy." },
      { q: "What should be in a production readiness review?", a: "Evaluation results against thresholds, security review, rate limits and budgets, tracing and alerts, fallbacks, rollback plan, data handling and retention, and an owner on call." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "To deploy an LLM application, run it as a normal backend service with separate development, staging and production environments, keep provider keys in a secrets manager and call models only from the server or a gateway. Put prompts and model settings in versioned configuration behind flags, stream interactive responses, move long tasks to queues, enforce authentication, rate limits and budgets, add tracing and alerts, and pass an evaluation and security review before release with a tested rollback plan.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "This guide covers getting a working prototype into production. The wider practice is in [[/blogs/llmops|LLMOps]], rollout strategies in [[/blogs/ai-application-release-management|AI application release management]], failure handling in [[/blogs/llm-application-reliability|LLM application reliability]] and backend integration patterns in [[/blogs/ai-api-integration|AI API integration]].",
        ],
      },
      {
        heading: "A Reference Architecture",
        body: [
          "Most production LLM applications share the same layers. Clients talk only to your backend. The backend handles authentication, business logic and orchestration. An AI layer, often behind a gateway, handles model access, prompts, retrieval and tools. Operations services handle secrets, tracing, feature flags and deployment.",
        ],
        diagram: {
          variant: "llmdeployflow",
          alt: "Request path in a deployed LLM application: Client, Auth'd API, Orchestration, Gateway (highlighted), Model provider, Validate + stream.",
          caption: "Clients never call model providers directly; the gateway is where keys, limits and logging live.",
        },
      },
      {
        heading: "Environments and Configuration",
        body: [
          "Use separate environments with separate provider keys, budgets, vector indexes and data. Staging should mirror production configuration closely, including model versions, so evaluation results transfer. Development can use cheaper models for iteration, but final evaluation should use the production model.",
          "Store prompts, model identifiers, generation settings and retrieval parameters as versioned configuration rather than constants in code. Promote configuration between environments the same way you promote builds, and record which version is live in each environment. See [[/blogs/prompt-versioning|prompt versioning]] for a workflow.",
        ],
      },
      {
        heading: "Secrets and Provider Access",
        body: [
          "Model provider keys are high-value credentials: a leaked key can run up large bills or expose data. Keep them in a secrets manager, inject them at runtime, rotate them and scope them per environment and, where providers allow, per project. Never ship keys in mobile apps or front-end code.",
          "As usage grows, route all model calls through an [[/blogs/llm-gateway|LLM gateway]] that holds keys centrally and enforces rate limits, budgets, logging and fallback. This also makes switching providers or models a configuration change.",
        ],
      },
      {
        heading: "Hosting Options",
        body: [],
        table: {
          headers: ["Option", "Good for", "Watch for"],
          rows: [
            ["Serverless functions", "Spiky traffic, short requests", "Timeouts on long generations, cold starts, streaming support"],
            ["Managed containers", "Most applications, streaming, steady traffic", "Autoscaling settings, concurrency per instance"],
            ["Kubernetes", "Many services, self-hosted models, platform teams", "Operational overhead"],
            ["Background workers + queue", "Document processing, agent runs, batch jobs", "Status reporting, retries, idempotency"],
            ["Edge runtimes", "Low-latency routing, light pre-processing", "Runtime limits, data residency"],
          ],
        },
        cta: {
          title: "Have a prototype that needs to become a product?",
          description: "ZSpace Labs takes AI prototypes to production with secure architecture, evaluation and monitoring. See [[/services/ai-automation|AI application development]].",
        },
      },
      {
        heading: "Streaming, Timeouts and Long Tasks",
        body: [
          "Interactive features should stream tokens so users see progress within a second or two. Streaming affects your stack: load balancers, proxies and serverless platforms must support long-lived connections, and validation of the full output has to happen after streaming completes or on structured chunks.",
          "Set explicit timeouts on model calls and total request time. Tasks that take minutes, such as processing large documents or running agents, belong in background queues with progress updates, retries and idempotency keys so a retry does not repeat side effects.",
        ],
      },
      {
        heading: "Scaling and Limits",
        body: [
          "Provider rate limits, measured in requests and tokens per minute, are often the first scaling constraint rather than your own servers. Track usage against limits, request increases ahead of launches, spread load across deployments or regions where providers support it, and queue or shed non-urgent work under pressure.",
          "Protect yourself from abuse and runaway costs with per-user and per-tenant rate limits, maximum input sizes, maximum output tokens and daily budgets with alerts. Cost levers are covered in [[/blogs/llm-cost-optimization|LLM cost optimization]].",
        ],
      },
      {
        heading: "Access Control and Data Handling",
        body: [
          "Authenticate every request and pass the user's identity through to retrieval and tools so permissions are enforced at the data layer, not by the model. Decide what data may be sent to which providers, configure retention and regional settings, and redact sensitive fields where possible. See [[/blogs/ai-data-privacy|AI data privacy]] and [[/blogs/ai-data-leakage|AI data leakage]].",
        ],
      },
      {
        heading: "Production Readiness Checklist",
        body: [],
        checklist: [
          "Evaluation results meet agreed thresholds on the production configuration",
          "Security review done: injection, output handling, tool permissions, secrets",
          "Rate limits, input limits, output limits and budgets configured",
          "Tracing with versions, tokens, latency and cost on every request",
          "Alerts for errors, latency, cost spikes and quality signals",
          "Fallbacks for provider failure and a user-facing degraded mode",
          "Rollback tested for code, prompts and model settings",
          "Data retention and deletion paths documented",
          "An owner and on-call process for the feature",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Deploying through a disciplined architecture keeps keys safe, costs bounded and behaviour reversible. It adds components, such as a gateway, configuration store and tracing, that small teams may find heavy at first. Start with the essentials (server-side calls, secrets, limits, tracing and versioned prompts) and add the rest as usage grows.",
        ],
      },
      {
        heading: "How to Deploy Step by Step",
        body: [],
        checklist: [
          "**1. Move model calls server-side** and remove keys from clients",
          "**2. Externalize prompts and settings** into versioned configuration",
          "**3. Set up environments** with separate keys, data and budgets",
          "**4. Containerize or choose serverless** based on request length and streaming",
          "**5. Add limits, tracing and alerts**",
          "**6. Run evaluation and security review** on staging",
          "**7. Release behind a flag** to a small share of users, then expand",
        ],
      },
      {
        heading: "Infrastructure as Code and CI/CD",
        body: [
          "Define AI infrastructure the same way as the rest of your stack: gateway configuration, secrets references, queues, vector databases, autoscaling rules and alerts in infrastructure-as-code templates reviewed through pull requests. This makes environments reproducible and changes auditable.",
          "In CI, run unit tests, the fast evaluation subset and security checks on every change; build container images, scan them and deploy to staging automatically; run the full evaluation suite there; then promote to production behind a flag. Keep prompt and model configuration deployable independently of code so behaviour fixes do not wait for a full release. The release side is covered in [[/blogs/ai-application-release-management|AI application release management]].",
        ],
      },
      {
        heading: "Multi-Provider and Regional Deployment",
        body: [
          "Production applications often need more than one model provider: for fallback during outages, for regional data residency or for routing different tasks to different models. Abstract provider calls behind a gateway or internal client, keep prompts adaptable per model and evaluate each provider-model pair you might use. Regional requirements may mean deploying the application, vector store and model endpoints in the same region and verifying that logs and traces stay there too. Cost and routing considerations are in [[/blogs/llm-routing|LLM routing]] and [[/blogs/llm-gateway|LLM gateway]].",
        ],
      },
      {
        heading: "Example Deployment Configuration",
        body: [
          "Keeping AI-specific settings in one configuration file per environment makes reviews and promotion simple. The example below is illustrative; adapt names to your stack.",
        ],
        code: {
          label: "Example: per-environment AI configuration (illustrative)",
          text: "environment: production\ngateway:\n  base_url: https://ai-gateway.internal\n  api_key_secret: secrets/ai-gateway/prod\nfeatures:\n  support_answer:\n    prompt: support_answer@v12\n    model: <provider/model-version>\n    fallback_model: <provider-b/model-version>\n    max_input_tokens: 8000\n    max_output_tokens: 600\n    timeout_seconds: 20\n    retrieval: { index: kb_v14, top_k: 8, rerank: true }\n    rollout: { flag: support_answer_v12, percent: 25 }\nlimits:\n  per_user_requests_per_minute: 20\n  daily_budget_usd: 400\nobservability:\n  tracing: otel\n  capture_content: sampled_redacted\n  retention_days: 14",
        },
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a startup's AI report generator calls a model directly from the browser with an embedded key, and a scraped key leads to unexpected charges. The team moves calls behind an authenticated API, stores keys in a secrets manager, moves report generation to a background queue with progress updates, adds per-account daily limits and puts prompts behind a flag. The next release goes to 5% of accounts first.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Calling providers from client code with embedded keys",
          "Using one provider key and budget for every environment",
          "Serverless timeouts cutting off long generations",
          "No limits on input size, output tokens or spend",
          "No way to roll back a prompt without a full redeploy",
        ],
        cta: {
          title: "Want a production review before launch?",
          description: "Talk to ZSpace Labs about a [[/services/ai-automation|production readiness review]] covering architecture, security, evaluation and operations.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Deploying an LLM application is ordinary service deployment plus control over prompts, models, providers and cost. Keep model access server-side, version configuration, plan for long requests, limit usage and make every change reversible.",
        ],
      },
    ],
  },

  // ---------------------------------------- 664 · LLM EVALUATION PIPELINE
  {
    slug: "llm-evaluation-pipeline",
    title: "LLM Evaluation Pipeline: How to Test AI Applications Before Release",
    seoTitle: "LLM Evaluation Pipeline: Datasets, Scoring, Human Review, Gates",
    excerpt:
      "How to build an evaluation pipeline for LLM applications: evaluation datasets, reference answers, deterministic checks, automated scoring, human review, quality dimensions, CI integration and release gates, and how application evaluation differs from model evaluation.",
    category: "AI & Automation",
    banner: "evalpipeline",
    bannerAlt:
      "LLM evaluation pipeline in four columns: datasets (Real cases, Edge cases, Adversarial, Versioned), checks (Schema, Citations, Rules, Safety), scoring highlighted (Rubrics, LLM judges, References, Segments) and gates (Thresholds, vs baseline, Sign-off, Report).",
    date: "2026-10-02",
    readingTime: "8 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "fintech", "healthcare-healthtech"],
    relatedSlugs: ["llm-regression-testing", "ai-model-evaluation", "llmops"],
    faqs: [
      { q: "What is an LLM evaluation pipeline?", a: "An automated process that runs an LLM application against a versioned set of test cases, scores the outputs with deterministic checks, automated judges and human review, compares results with the current production version and decides whether a change can be released." },
      { q: "How is application evaluation different from model evaluation?", a: "Model evaluation compares models on tasks. Application evaluation tests the whole system as users experience it: prompts, retrieval, tools, validation and formatting together. A strong model can still fail inside an application with poor retrieval or prompts." },
      { q: "How many test cases do we need?", a: "Enough to cover common cases, important edge cases and known failures with stable results. Many teams start with 50 to 200 cases and grow to several hundred or more for important features. Coverage of real situations matters more than raw size." },
      { q: "Do we need reference answers?", a: "Not always. Reference answers help for factual or extraction tasks. For open-ended tasks, rubrics describing what a good answer must contain or avoid are often more practical." },
      { q: "Can we rely on LLM judges?", a: "Only after calibration. Compare judge scores with human labels on a sample, use clear rubrics, watch for position and length bias and keep deterministic checks for anything that can be checked exactly." },
      { q: "How often should the pipeline run?", a: "A fast subset on every pull request that changes behaviour, the full suite before releases and on model or provider updates, and a scheduled run to catch silent changes in hosted models." },
      { q: "What should block a release?", a: "Agreed thresholds on critical metrics, such as zero failures on safety and permission tests, no drop beyond a tolerance on task quality and format validity at or above a set rate. Agree thresholds before seeing results." },
      { q: "Which tools can run LLM evaluations?", a: "Options include open-source frameworks, evaluation features in observability platforms such as MLflow, Langfuse or LangSmith, cloud provider evaluation services and simple custom runners in your test framework. The dataset and rubrics matter more than the tool." },
      { q: "How much does running evaluations cost?", a: "Each run calls the model for every case and possibly a judge model too. Control cost with fast subsets for pull requests, caching unchanged results and running expensive judges only where needed." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An LLM evaluation pipeline runs your whole application, not just the model, against a versioned dataset of realistic and adversarial cases. It applies deterministic checks (format, citations, forbidden content, permissions), automated scoring with calibrated judges or reference comparisons, and human review for samples and high-risk changes. Results are compared with production by segment, and a change ships only if thresholds agreed in advance hold. Run a fast subset on every change and the full suite before release.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "This guide covers the pipeline that tests a complete application before release. Methods for scoring models, such as rubrics and LLM judges, are in [[/blogs/ai-model-evaluation|AI model evaluation]]; agent trajectories in [[/blogs/ai-agent-evaluation|AI agent evaluation]]; change-specific comparisons in [[/blogs/llm-regression-testing|LLM regression testing]]. The surrounding practice is [[/blogs/llmops|LLMOps]].",
        ],
      },
      {
        heading: "Model Evaluation vs Application Evaluation",
        body: [
          "Model evaluation asks which model performs best on a task. Application evaluation asks whether the system users touch behaves correctly: the right documents are retrieved, the prompt uses them properly, tools are called with valid arguments, validation catches bad outputs and the final response meets the product's rules. Most production failures come from these surrounding parts, so the pipeline must exercise them together, ideally through the same code path as production.",
        ],
      },
      {
        heading: "Pipeline Stages",
        body: [],
        diagram: {
          variant: "evalpipeflow",
          alt: "Evaluation pipeline stages: Change submitted, Load dataset, Run app, Deterministic checks, Auto scoring (highlighted), Gate vs baseline.",
          caption: "Each stage is cheap to automate except human review, which is reserved for samples and high-risk changes.",
        },
      },
      {
        heading: "Building the Dataset",
        body: [
          "Start from real usage where possible: anonymized production requests, support tickets, documents and questions from domain experts. Add edge cases (ambiguous questions, missing information, very long inputs), known past failures and adversarial cases such as prompt injection attempts and requests outside permissions.",
          "Tag each case with attributes such as topic, language, customer segment and difficulty so results can be broken down. Version the dataset, record where each case came from and keep a held-out portion that is not used while tuning prompts, so scores reflect generalization. Data preparation is covered in [[/blogs/ai-data-readiness|AI data readiness]].",
        ],
      },
      {
        heading: "Quality Dimensions and Scoring Methods",
        body: [],
        table: {
          headers: ["Dimension", "Example check", "Method"],
          rows: [
            ["Format", "Valid JSON, required fields present", "Deterministic"],
            ["Grounding", "Claims supported by retrieved sources", "LLM judge or human, with citation checks"],
            ["Correctness", "Matches reference answer or extracted values", "Reference comparison, exact or fuzzy match"],
            ["Completeness", "Covers all required points from the rubric", "Rubric scoring"],
            ["Safety and policy", "No forbidden advice, no data outside permissions", "Deterministic rules plus classifiers"],
            ["Tool use", "Correct tool, valid arguments, no unnecessary calls", "Trace inspection"],
            ["Operations", "Latency and cost per case", "Measured"],
          ],
        },
      },
      {
        heading: "Automated Judges and Human Review",
        body: [
          "LLM judges make open-ended scoring scalable, but they need explicit rubrics, examples of each score level and validation against human labels on a sample before you trust them. Research such as [[https://arxiv.org/abs/2306.05685|Judging LLM-as-a-Judge]] documents biases toward position and length, so randomize order in comparisons and check calibration when you change the judge model.",
          "Human review remains the reference. Use domain experts with clear rubrics, blind them to which version produced each output and measure their agreement. Reserve human time for threshold setting, judge calibration, high-risk changes and failures the automated checks flag.",
        ],
        cta: {
          title: "Need an evaluation pipeline for your AI features?",
          description: "ZSpace Labs builds evaluation datasets, scoring and CI gates for LLM applications. See our [[/services/ai-automation|AI development services]].",
        },
      },
      {
        heading: "Integrating With CI and Releases",
        body: [
          "Run a fast, representative subset on every pull request that changes prompts, retrieval, tools or model settings, and fail the build when critical checks fail. Run the full suite before releases, on model or provider version changes and on a schedule to detect silent changes in hosted models.",
          "Store every run's results with the dataset version, application version and configuration, so you can see trends and explain decisions later. Cloud providers document similar approaches, for example Microsoft's guidance on [[https://learn.microsoft.com/en-us/azure/ai-foundry/concepts/evaluation-approach-gen-ai|evaluating generative AI applications]].",
        ],
      },
      {
        heading: "Designing Release Gates",
        body: [],
        checklist: [
          "Agree thresholds before running the evaluation, not after seeing results",
          "Zero tolerance for safety, permission and data-leak test failures",
          "Tolerance bands for quality scores relative to the production baseline",
          "Segment checks so an average improvement cannot hide a drop for one group",
          "Latency and cost limits per case",
          "Human sign-off for high-risk features or large changes",
          "A written report attached to the release",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "An evaluation pipeline turns quality from opinion into evidence and lets teams change prompts and models quickly without fear. Its limits are coverage and cost: datasets never cover everything users do, judges can be wrong and each run costs money. Production monitoring and feedback, described in [[/blogs/llm-observability|LLM observability]], close the gap.",
        ],
      },
      {
        heading: "How to Build the Pipeline Step by Step",
        body: [],
        checklist: [
          "**1. Define quality dimensions** with product owners and domain experts",
          "**2. Collect 50 to 200 initial cases** from real usage, tagged by segment",
          "**3. Implement deterministic checks** first, then rubric or judge scoring",
          "**4. Calibrate judges** against human labels on a sample",
          "**5. Wire a fast subset into CI** and the full suite into release",
          "**6. Set thresholds and segment checks** with owners",
          "**7. Add production failures** to the dataset every week",
        ],
      },
      {
        heading: "Evaluating RAG and Tool-Using Applications",
        body: [
          "Retrieval-based applications need two layers of evaluation. Retrieval metrics check whether the right documents or chunks appear in the top results for each test question, using labelled relevant sources. Answer metrics check whether the response is correct, complete and grounded in what was retrieved. Separating them shows whether a failure comes from search or generation; see [[/blogs/retrieval-augmented-generation|retrieval-augmented generation]].",
          "For applications that call tools, evaluate the trace as well as the answer: was the right tool chosen, were arguments valid, were unnecessary calls avoided and were confirmations requested where required? Deterministic assertions on traces are reliable and cheap, and they catch problems that a fluent final answer can hide.",
        ],
      },
      {
        heading: "Managing Evaluation Cost and Speed",
        body: [
          "Evaluation runs call the application and often a judge model for every case, so cost and time grow with the dataset. Keep a fast subset of a few dozen representative and high-risk cases for every pull request, and run the full set before releases or nightly. Cache results for cases whose inputs, prompts and models did not change. Use cheaper judge models where calibration shows they agree with humans, and reserve stronger judges for subtle dimensions. Track evaluation spend like any other cost; it is usually small compared with the cost of shipping regressions.",
        ],
      },
      {
        heading: "Example Evaluation Case and Run Report",
        body: [
          "Concrete formats make pipelines easier to maintain. Each case carries inputs, expectations and tags; each run produces a report comparable with previous runs.",
        ],
        code: {
          label: "Example: evaluation case and run summary (illustrative)",
          text: "# case\nid: billing-042\ninput: \"Can I get a refund if I cancel mid-month?\"\ncontext_fixture: kb_snapshot_2026_09\nexpect:\n  must_cite: [\"refund-policy#section-3\"]\n  must_not_include: [\"guaranteed refund\"]\n  rubric: completeness>=4\ntags: [billing, refunds, en]\n\n# run summary\nrun: eval-2026-10-02-118  app: 2026.10.2  dataset: v31 (248 cases)\nschema_valid: 100%   citation_found: 97% (baseline 94%)\nsafety_failures: 0   completeness_avg: 4.3 (baseline 4.2)\nsegments_below_tolerance: none\np95_latency: 3.4s    cost_per_case: $0.006\ndecision: PASS",
        },
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a legal research assistant's evaluation set contains 180 questions with reference citations. Deterministic checks verify every citation exists in the retrieved documents; a calibrated judge scores answer completeness; a lawyer reviews 20 sampled outputs per release. A new embedding model raises average scores but the segment report shows employment-law questions dropping, so the change is held until retrieval for that area is fixed.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Evaluating the model in isolation rather than the full application",
          "Datasets built only from easy, invented examples",
          "Trusting uncalibrated LLM judges",
          "Tuning prompts on the same cases used to judge them",
          "Looking only at averages, not segments",
        ],
        cta: {
          title: "Want a second opinion on your evaluation approach?",
          description: "Talk to ZSpace Labs about an [[/services/ai-automation|AI quality review]]: datasets, scoring, thresholds and CI integration.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A good evaluation pipeline tests what users experience, scores what matters with checks you trust and blocks releases that fall short. Build it early, keep the dataset growing from production and treat its results as the release decision, not a formality.",
        ],
      },
    ],
  },
];
