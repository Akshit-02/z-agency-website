import type { BlogPost } from "./blog-data";

/**
 * AI knowledge hub, part ten: model routing, application orchestration,
 * memory and agent interoperability. A2A statements follow the A2A project
 * documentation (Linux Foundation project since June 2025; Agent Card at
 * /.well-known/agent-card.json; tasks, messages and artifacts); version
 * numbers are avoided because the protocol is moving quickly. Merged into
 * `posts` in blog-data.ts.
 */

export const aiCorePosts10: BlogPost[] = [
  // ---------------------------------------- 597 · LLM ROUTING
  {
    slug: "llm-routing",
    title: "LLM Routing: How to Choose the Right AI Model for Each Task",
    seoTitle: "LLM Routing: Static, Classifier and Cascade Strategies",
    excerpt:
      "How LLM routing works: matching tasks to models by complexity, quality, latency and cost, static rules, classifier routers and cascades, fallbacks, and evaluation-based routing decisions.",
    category: "AI & Automation",
    banner: "routingstrategies",
    bannerAlt:
      "Comparison of three LLM routing strategies (static by task highlighted, classifier router, cascade) by how they work, pros, cons and what they need.",
    date: "2026-10-02",
    readingTime: "5 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise"],
    relatedSlugs: ["llm-gateway", "llm-cost-optimization", "ai-agent-evaluation"],
    faqs: [
      { q: "What is LLM routing?", a: "Choosing which language model handles each request or step, based on the task's requirements for quality, latency, cost, context length, language or data handling." },
      { q: "Why not use the best model for everything?", a: "The most capable model is usually slower and more expensive, and many tasks such as classification or extraction are handled equally well by smaller models. Routing matches capability to need." },
      { q: "What are the main routing strategies?", a: "Static routing by task type, classifier routing that predicts which model a request needs, and cascades that try a cheaper model first and escalate when a quality check fails." },
      { q: "Is there a single best LLM?", a: "No. Model rankings vary by task, language, data and over time as new models are released. Choose per task using your own evaluations." },
      { q: "How do you know a routing rule is working?", a: "Compare quality, latency and cost per task on an evaluation set for each candidate model, then monitor production metrics and re-run evaluations when models change." },
      { q: "What is a model cascade?", a: "A pattern where a request goes to a cheaper model first; if its output fails validation or a confidence check, the request is retried with a more capable model." },
      { q: "Is routing the same as orchestration?", a: "No. Routing decides which model handles a call. Orchestration coordinates the sequence of model calls, retrieval, tools and state in an application." },
      { q: "Where should routing logic live?", a: "In an LLM gateway or your AI service layer, configured rather than hard-coded, so changes can be tested and rolled out safely." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "LLM routing sends each request or step to the model that meets its quality requirement at the lowest acceptable cost and latency. Start with static routing by task type (a small model for classification and extraction, a stronger model for complex reasoning), backed by evaluations on your own data. Add a classifier router or a cascade (cheap model first, escalate when validation fails) only when traffic is varied enough to justify it. No model is best at everything, so re-evaluate routes when models change.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Routing usually lives in an [[/blogs/llm-gateway|LLM gateway]] or AI service. It is a major lever for [[/blogs/llm-cost-optimization|cost optimization]], depends on [[/blogs/ai-agent-evaluation|evaluation]] for its decisions, and differs from [[/blogs/ai-orchestration|AI orchestration]], which coordinates whole flows.",
        ],
      },
      {
        heading: "What Should Drive Model Choice?",
        body: [],
        table: {
          headers: ["Factor", "Questions to ask"],
          rows: [
            ["Quality", "Does this model pass the evaluation set for this task?"],
            ["Latency", "Is the response fast enough for the user experience?"],
            ["Cost", "What is the cost per completed task, including retries?"],
            ["Context length", "Does the input fit comfortably?"],
            ["Capabilities", "Tool use, structured outputs, vision, audio, languages"],
            ["Data handling", "Where is data processed and retained? Is this data class allowed?"],
          ],
        },
      },
      {
        heading: "Routing Strategies",
        body: [
          "**Static by task:** each task type has a configured model. Simple, predictable and usually the right start. **Classifier router:** a small model or rules estimate the difficulty or type of each request and pick a tier. Useful when one endpoint receives very varied requests. **Cascade:** try a cheaper model, validate the result, escalate to a stronger model on failure. Saves cost when most requests are easy, at the price of extra latency on hard ones.",
        ],
        diagram: {
          variant: "llmrouteflow",
          alt: "LLM routing flow: request, classify task, pick model tier (highlighted), call, quality check, escalate if needed; routing rules are judged by evaluations, not by price alone.",
          caption: "Every route needs a quality check, or cost savings may come from worse answers.",
        },
      },
      {
        heading: "Evaluation-Based Routing",
        body: [
          "Routing decisions should come from data. For each task, run your evaluation set through candidate models and record success rate, latency and cost. Choose the cheapest model that meets the quality bar, document the decision and re-test when providers release or update models. Monitor production signals (validation failures, escalations, user feedback) by route.",
        ],
        cta: {
          title: "Paying top-model prices for simple tasks?",
          description: "ZSpace Labs evaluates models on your real tasks and sets up routing that cuts cost without lowering quality.",
        },
      },
      {
        heading: "Fallbacks and Availability",
        body: [
          "Routing also handles failure: when a provider returns errors or times out, fall back to another model or provider that has been evaluated for that task. Avoid silent fallbacks for tasks where consistency matters, such as extraction feeding financial systems, and log every fallback.",
        ],
      },
      {
        heading: "Implementation Options",
        body: [],
        checklist: [
          "Configuration in an LLM gateway mapping tasks to models and fallbacks",
          "A routing function in your AI service, versioned with prompts",
          "Classifier routers trained or prompted on labelled examples",
          "Cascades with deterministic validation between tiers",
          "Feature flags to roll out routing changes gradually",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Routing reduces cost and latency and improves resilience. It adds evaluation and maintenance work, routers can misclassify, cascades add latency for hard requests, and different models can produce subtly different behaviour that users notice. Keep the number of routes small and well tested.",
        ],
      },
      {
        heading: "How to Set Up Routing Step by Step",
        body: [],
        checklist: [
          "**1. List AI tasks** and their quality, latency and data requirements",
          "**2. Build evaluation sets** per task",
          "**3. Test candidate models** and record quality, latency and cost",
          "**4. Configure static routes** with fallbacks",
          "**5. Monitor production metrics** by route",
          "**6. Add classifier or cascade routing** only where traffic varies widely",
          "**7. Re-evaluate** when models change",
        ],
      },
      {
        heading: "Example Routing Configuration",
        body: [
          "Keep routing rules in configuration, versioned and tied to evaluation results, so changes are reviewed like code.",
        ],
        code: {
          label: "Example: task-based routing with fallbacks (illustrative)",
          text: "routes:\n  ticket_classification:\n    model: small-fast-model\n    fallback: [small-model-provider-b]\n    eval: classification_v4   # 96% accuracy at last run\n  reply_drafting:\n    model: large-model\n    fallback: [large-model-provider-b]\n    eval: drafting_v2\n  document_extraction:\n    cascade:\n      - model: small-vision-model\n        accept_if: schema_valid and totals_match\n      - model: large-vision-model\n    eval: extraction_v3\n  contract_review:\n    model: large-model\n    fallback: []              # no silent fallback for this task",
        },
      },
      {
        heading: "Routing Inside Agents",
        body: [
          "Agents make many calls of different difficulty. Planning and final answers may need a strong model; tool argument formatting, summarizing tool results and classifying intermediate states often do not. Route agent steps by type, and watch for errors introduced at handoffs between models. Include agent-level success and cost in routing evaluations, not just per-step accuracy; see [[/blogs/ai-agent-development|AI agent development]].",
        ],
      },
      {
        heading: "Routing vs Orchestration",
        body: [
          "Model routing and orchestration are often confused. Routing answers one question per request or step: which model should handle this, given task type, difficulty, cost, latency and provider availability? Orchestration coordinates a whole workflow: the sequence of retrieval, model calls, tools, validation, retries and human approvals. A router is usually one component inside an orchestrated system, often implemented in the gateway, while orchestration lives in application or agent logic. See [[/blogs/ai-orchestration|AI orchestration]] and [[/blogs/ai-agent-orchestration|AI agent orchestration]] for the broader picture.",
        ],
      },
      {
        heading: "Cost Governance for Routing",
        body: [
          "Routing is one of the strongest cost levers, so govern it like spending policy. Record which model handled each request and why, report cost and quality by route, and review routes when providers change prices or release models. Set per-feature budgets and let the router prefer cheaper models as budgets tighten, only where evaluation shows quality holds. Avoid routing changes that silently trade quality for cost: every change to routing rules should pass the same evaluation gates as prompt and model changes. Related practices are in [[/blogs/ai-inference-optimization|AI inference optimization]], [[/blogs/llm-regression-testing|LLM regression testing]] and [[/blogs/ai-platform-engineering|AI platform engineering]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a support platform uses one large model for ticket classification, reply drafting and summarization. Evaluation shows a small model matches the large one on classification and summarization. Routing those tasks to the small model and keeping drafting on the larger one lowers cost substantially with no measurable quality change on the evaluation set.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Choosing models from public leaderboards rather than your own tasks",
          "Routing on price without quality checks",
          "Too many routes to maintain",
          "Silent fallbacks for consistency-critical tasks",
          "Not re-testing after provider model updates",
        ],
        cta: {
          title: "Want the right model for every task?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|LLM routing, evaluation and AI platform work]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Routing matches models to tasks using evidence. Start static, evaluate per task, add smarter routing only where it pays and re-test as models evolve. Related: [[/blogs/llm-gateway|LLM gateway]] and [[/blogs/llm-cost-optimization|LLM cost optimization]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 598 · AI ORCHESTRATION
  {
    slug: "ai-orchestration",
    title: "AI Orchestration: How to Connect Models, Tools, Data and Workflows",
    seoTitle: "AI Orchestration: Models, Retrieval, Tools, State and Validation",
    excerpt:
      "What AI orchestration is: coordinating model calls, retrieval, tool execution, workflow state, routing, retries, validation and monitoring inside AI applications, and how it differs from agent orchestration.",
    category: "AI & Automation",
    banner: "aiorchestrationlayer",
    bannerAlt:
      "AI orchestration in four columns: inputs (user request, events, schedules, documents), orchestration highlighted (flow or graph, state, retries, branching), capabilities (models, retrieval, tools, agents) and controls (validation, approvals, tracing, budgets).",
    date: "2026-10-02",
    readingTime: "5 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise"],
    relatedSlugs: ["ai-agent-orchestration", "ai-workflow-automation", "llm-routing"],
    faqs: [
      { q: "What is AI orchestration?", a: "The coordination layer in an AI application that sequences and connects model calls, retrieval, tool execution and business logic, manages state, handles errors and validates outputs." },
      { q: "How is AI orchestration different from agent orchestration?", a: "AI orchestration covers any AI application flow, including fixed pipelines such as RAG or document processing. Agent orchestration specifically coordinates agent runs and hand-offs between agents." },
      { q: "How is it different from LLM routing?", a: "Routing picks which model handles one call. Orchestration decides what happens across the whole flow: which calls, in what order, with what data and what happens on failure." },
      { q: "What tools are used for AI orchestration?", a: "Frameworks such as LangChain, LangGraph and LlamaIndex, provider SDKs, workflow engines and plain application code with queues. The right choice depends on complexity and team skills." },
      { q: "Do I need a framework?", a: "Not always. Simple pipelines are often clearer in plain code. Frameworks help with complex graphs, state, streaming and integrations, at the cost of abstraction to learn." },
      { q: "How do you make orchestrated AI flows reliable?", a: "Validate outputs between steps, keep state outside models, use timeouts, retries and fallbacks, make side effects idempotent, and trace every step." },
      { q: "Where does business logic belong?", a: "In deterministic code within the orchestration layer or downstream services, not in prompts. Models interpret and generate; code decides and acts." },
      { q: "How do you monitor AI orchestration?", a: "With traces linking every model call, retrieval and tool call in a request, plus metrics for latency, errors, cost and output quality." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI orchestration is the layer that turns individual model calls into a working application. It decides which steps run (retrieve context, call a model, run a tool, validate, call another model), passes data between them, keeps state, applies business rules, handles retries and fallbacks and records traces. Keep the flow explicit and deterministic where possible, let models handle interpretation and generation, validate between steps and choose the lightest tooling (plain code, a framework or a workflow engine) that meets the complexity.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "When the flow includes autonomous agents and hand-offs, see [[/blogs/ai-agent-orchestration|AI agent orchestration]]. When AI steps sit inside business workflows, see [[/blogs/ai-workflow-automation|AI workflow automation]]. Model selection per step is [[/blogs/llm-routing|LLM routing]].",
        ],
      },
      {
        heading: "What Gets Orchestrated",
        body: [],
        table: {
          headers: ["Component", "Role in the flow"],
          rows: [
            ["Model calls", "Interpret, generate, classify, extract, plan"],
            ["Retrieval", "Supply relevant documents and records"],
            ["Tools", "Read and change external systems"],
            ["Business logic", "Rules, calculations, permissions"],
            ["State", "Conversation, task progress, intermediate results"],
            ["Validation", "Schemas, rules, citation checks between steps"],
            ["Controls", "Approvals, budgets, timeouts, tracing"],
          ],
        },
      },
      {
        heading: "A Typical Orchestrated Flow",
        body: [],
        diagram: {
          variant: "aiorchflow",
          alt: "Orchestrated AI flow: request, retrieve context, model call, run tools, validate (highlighted), persist state and respond.",
          caption: "Validation between steps keeps a model error from flowing silently into the next step.",
        },
      },
      {
        heading: "Orchestration Patterns",
        body: [
          "**Pipeline:** fixed steps in order, such as retrieve, generate, validate. Easiest to test; most RAG and document systems. **Branching flow:** conditions route to different steps based on validated outputs. **Graph:** steps as nodes with conditional edges and loops, useful for agents and multi-step reasoning with checkpoints. **Event-driven:** steps triggered by events through queues, suited to long-running or background work.",
        ],
      },
      {
        heading: "Choosing Tooling",
        body: [],
        table: {
          headers: ["Option", "Good for", "Watch for"],
          rows: [
            ["Plain code", "Simple pipelines, full control", "You build retries and tracing"],
            ["LangChain / LlamaIndex", "Retrieval and integrations", "Abstraction layers to debug through"],
            ["LangGraph and graph frameworks", "Stateful flows, agents, checkpoints", "Learning curve"],
            ["Provider SDKs", "Native features of one provider", "Provider coupling"],
            ["Workflow engines", "Long-running, durable business flows", "More infrastructure"],
          ],
        },
        cta: {
          title: "Turning AI prototypes into reliable applications?",
          description: "ZSpace Labs designs orchestration layers that connect models, retrieval, tools and business logic with validation and tracing built in.",
        },
      },
      {
        heading: "Reliability Practices",
        body: [],
        checklist: [
          "Explicit state stored outside the model",
          "Schema validation and business rules between steps",
          "Timeouts and step budgets",
          "Retries with backoff for transient errors; fallbacks for provider outages",
          "Idempotent side effects",
          "Tracing across every step with one request ID",
          "Versioned prompts and flows tied to evaluation results",
        ],
      },
      {
        heading: "Security Considerations",
        body: [
          "Orchestration is where untrusted content (user input, retrieved documents, tool results) meets privileged capabilities (tools, data). Label untrusted content, keep permissions checks in code before tools run, avoid passing secrets through prompts and log what each step received and produced. See [[/blogs/prompt-injection-prevention|prompt injection prevention]].",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Good orchestration makes AI applications predictable, testable and observable. Over-engineered orchestration (deep framework abstractions for a three-step pipeline) makes debugging harder. Match the tooling to the flow's real complexity and keep business logic out of prompts.",
        ],
      },
      {
        heading: "How to Design an Orchestrated Flow Step by Step",
        body: [],
        checklist: [
          "**1. Write the flow as steps** with inputs, outputs and failure behaviour",
          "**2. Mark which steps need a model** and which are deterministic",
          "**3. Define schemas** for every hand-off",
          "**4. Choose tooling** by complexity",
          "**5. Implement validation, retries and timeouts**",
          "**6. Add tracing and cost tracking**",
          "**7. Evaluate end to end** and per step",
        ],
      },
      {
        heading: "Example Flow Definition",
        body: [
          "Writing the flow down explicitly, even before choosing tooling, clarifies where models are used and where code decides.",
        ],
        code: {
          label: "Example: a document Q&A flow (illustrative pseudocode)",
          text: "async function answer(question, user) {\n  const q = await rewriteQuery(question)                      // small model, optional\n  const candidates = await hybridSearch(q, { tenant: user.tenant, groups: user.groups, k: 40 })\n  const top = await rerank(q, candidates, { keep: 6 })\n  if (top.length === 0 || top[0].score < MIN_SCORE) return refuse(\"No relevant sources found\")\n  const draft = await generate({ model: \"answer-model\", question, sources: top, schema: AnswerWithCitations })\n  const checked = verifyCitations(draft, top)                 // code: every claim cites a provided source\n  await trace.record({ question, sources: top.map(s => s.id), draft, checked })\n  return checked.ok ? checked.answer : refuse(\"Could not produce a supported answer\")\n}",
        },
      },
      {
        heading: "Testing Orchestrated Flows",
        body: [
          "Test each step in isolation (retrieval returns the right sources, validation catches bad outputs), then test the whole flow against an evaluation set. Mock external tools for deterministic tests of branching and error handling, and run full end-to-end evaluations with real models before each release. Inject failures (timeouts, invalid outputs, empty retrieval) to confirm the flow degrades gracefully. See [[/blogs/ai-agent-evaluation|AI evaluation]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a contract review application retrieves relevant clauses, asks a model to compare them with a playbook, validates that each finding cites a clause, runs a deterministic risk-scoring rule and stores results for a lawyer's review. The flow is a simple pipeline in plain code with a queue, which the team finds easier to debug than the agent framework it prototyped with.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Business rules embedded in prompts",
          "No validation between steps",
          "Heavy frameworks for simple pipelines",
          "State kept only in conversation history",
          "No tracing across steps",
        ],
        cta: {
          title: "Need an AI application that behaves predictably?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|AI orchestration and application development]] and [[/services/website-development|backend engineering]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "AI orchestration is ordinary software engineering applied to probabilistic components: explicit flows, validated hand-offs, durable state and full visibility. Related: [[/blogs/ai-agent-orchestration|agent orchestration]], [[/blogs/ai-workflow-automation|AI workflow automation]] and [[/blogs/llm-routing|LLM routing]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 599 · AI AGENT MEMORY
  {
    slug: "ai-agent-memory",
    title: "AI Agent Memory: How to Build Agents That Retain Useful Context",
    seoTitle: "AI Agent Memory: Working, Session and Long-Term Memory Design",
    excerpt:
      "How AI agent memory works: working memory, conversation history and summaries, long-term memory stores, retrieval, memory updates, consent, privacy, expiry and user control.",
    category: "AI & Automation",
    banner: "agentmemorytypes",
    bannerAlt:
      "AI agent memory in four columns: working (current step, scratchpad, tool results, discarded), session (conversation, summaries, task state, expires), long-term highlighted (user preferences, facts, consent, editable) and shared (knowledge base, policies, organization data, permissioned).",
    date: "2026-10-02",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation", "ui-ux-design"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce"],
    relatedSlugs: ["ai-agent-architecture", "retrieval-augmented-generation", "ai-agent-guardrails"],
    faqs: [
      { q: "What is AI agent memory?", a: "The mechanisms that let an agent use information beyond the current model call: working memory within a task, conversation history within a session, and long-term memory of facts and preferences across sessions." },
      { q: "Do language models remember previous conversations?", a: "Not by themselves. Model calls are stateless; applications provide memory by storing information and including relevant parts in later requests." },
      { q: "What is the difference between memory and RAG?", a: "RAG retrieves from shared knowledge such as documents. Long-term memory stores information learned from interactions, often about a specific user or account. Both use retrieval, but memory is written by the agent's interactions and needs consent and correction." },
      { q: "How should conversation history be managed?", a: "Keep recent turns verbatim, summarize older parts, and drop irrelevant content to stay within context limits and cost budgets." },
      { q: "What should an agent remember long-term?", a: "Stable, useful facts and preferences the user expects it to remember, such as a preferred delivery address or report format, not every detail of every conversation." },
      { q: "How do you handle privacy in agent memory?", a: "Tell users what is remembered, get consent where required, let them view, edit and delete memories, set expiry, avoid sensitive data unless necessary and isolate memories by user and tenant." },
      { q: "Can memory make agents worse?", a: "Yes. Wrong or outdated memories mislead the agent, and memory can be poisoned by manipulated inputs. Validate before storing and prefer fresh system data over remembered values." },
      { q: "Where should agent memory be stored?", a: "In a database or memory store you control, with structured records for facts and optionally embeddings for semantic recall, protected like other personal data." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI agents have no memory of their own; applications provide it. Design three layers: working memory for the current task (tool results, intermediate notes, discarded afterwards), session memory for the conversation (recent turns plus summaries, expiring with the session) and long-term memory for stable facts and preferences across sessions, stored in your database with consent, expiry and user controls to view, edit and delete. Validate before writing memories, prefer live system data over remembered values, and treat memory as personal data.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Memory is a component of [[/blogs/ai-agent-architecture|agent architecture]]. Shared organizational knowledge is better served by [[/blogs/retrieval-augmented-generation|RAG]]. Memory poisoning is one of the risks covered in [[/blogs/ai-agent-guardrails|guardrails]] and [[/blogs/prompt-injection-prevention|prompt injection prevention]].",
        ],
      },
      {
        heading: "Types of Agent Memory",
        body: [],
        table: {
          headers: ["Type", "Contents", "Lifetime", "Storage"],
          rows: [
            ["Working", "Current step's notes and tool results", "One task", "Run state"],
            ["Session", "Conversation turns and summaries", "One session", "Session store"],
            ["Long-term (personal)", "Preferences, facts about the user or account", "Until changed or expired", "Database, optionally with embeddings"],
            ["Episodic", "Records of past tasks and outcomes", "Policy-defined", "Database"],
            ["Shared knowledge", "Policies, documents, product data", "Maintained by owners", "RAG index"],
          ],
        },
      },
      {
        heading: "Managing Context Windows",
        body: [
          "Even large context windows are finite and costly. Keep recent turns verbatim, summarize older turns, and include only memories relevant to the current request. Retrieval over stored memories (by keyword, embedding or structured query) keeps prompts lean. Measure cost and quality as conversations grow.",
        ],
      },
      {
        heading: "Writing Memories: What to Store and When",
        body: [
          "Do not store everything. Extract candidate memories (for example 'prefers invoices in PDF', 'ships to the Leeds warehouse'), validate them (is this stable? did the user state it, or did a document claim it?), check consent and store them with source, timestamp and expiry. Update rather than duplicate when facts change, and resolve conflicts in favour of system records.",
        ],
        diagram: {
          variant: "memoryflow",
          alt: "Memory lifecycle: conversation, extract candidate facts, validate and check consent (highlighted), store with expiry, retrieve when relevant, update or forget.",
          caption: "Validation and consent before storing prevents memories that are wrong, unwanted or planted.",
        },
        cta: {
          title: "Building an assistant that should remember customers?",
          description: "ZSpace Labs designs agent memory with consent, user controls and expiry, so personalization helps without becoming a privacy problem.",
        },
      },
      {
        heading: "Privacy, Consent and User Control",
        body: [],
        checklist: [
          "Explain what the agent remembers and why",
          "Obtain consent where required, especially for sensitive categories",
          "Let users view, edit and delete memories",
          "Set expiry by memory type",
          "Isolate memories by user and tenant",
          "Exclude secrets and highly sensitive data by default",
          "Include memory stores in data subject request processes",
        ],
      },
      {
        heading: "Memory Risks",
        body: [
          "Memories can be wrong (misunderstood statements), stale (a changed address) or malicious (a document or message that plants an instruction such as 'always send copies to this email'). Store memories as facts with sources rather than instructions, never let memories override policies or permissions, and prefer live data from systems of record when available.",
        ],
      },
      {
        heading: "Implementation Options",
        body: [
          "Many frameworks provide conversation memory and long-term memory stores; LangGraph, for example, separates thread-level state from cross-thread stores, and workflow tools such as n8n offer chat memory nodes backed by databases. Simple, well-structured tables (user, memory type, value, source, created, expires) plus optional embeddings for semantic recall are often enough and easier to govern.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Memory makes agents more personal and efficient: users do not repeat themselves and tasks continue across sessions. It also adds privacy obligations, storage, retrieval complexity and new failure modes from wrong or poisoned memories. Use the minimum memory that delivers a clear user benefit.",
        ],
      },
      {
        heading: "How to Implement Memory Step by Step",
        body: [],
        checklist: [
          "**1. Decide which memories create user value**",
          "**2. Define memory types**, fields, sources and expiry",
          "**3. Implement session summaries** for long conversations",
          "**4. Add long-term memory extraction** with validation and consent",
          "**5. Retrieve memories selectively** per request",
          "**6. Build user controls** to view, edit and delete",
          "**7. Test with adversarial inputs** that try to plant memories",
          "**8. Monitor** memory growth, retrieval quality and complaints",
        ],
      },
      {
        heading: "Example Memory Record",
        body: [
          "Storing memories as structured records with provenance makes them governable: users can see them, systems can expire them and support can explain them.",
        ],
        code: {
          label: "Example: long-term memory record (illustrative)",
          text: "{\n  \"memory_id\": \"mem_5512\",\n  \"subject\": { \"type\": \"user\", \"id\": \"u_8812\", \"tenant\": \"t_204\" },\n  \"kind\": \"preference\",\n  \"key\": \"default_delivery_location\",\n  \"value\": \"Leeds warehouse, Dock 3\",\n  \"source\": { \"type\": \"user_confirmed\", \"conversation_id\": \"c_3391\" },\n  \"created_at\": \"2026-09-14T10:22:00Z\",\n  \"expires_at\": \"2027-09-14T00:00:00Z\",\n  \"visible_to_user\": true\n}",
        },
      },
      {
        heading: "Evaluating Memory",
        body: [
          "Memory needs its own tests: does the agent remember what it should (recall), avoid storing what it should not (precision and sensitive data), apply memories only when relevant, prefer live data when memories conflict with systems of record, forget on request and resist planted memories from untrusted content? Add these cases to your evaluation set; see [[/blogs/ai-agent-evaluation|AI agent evaluation]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a B2B ordering assistant remembers each buyer's usual delivery location and preferred pack sizes. Memories are created only when the buyer confirms ('Remember this for next time?'), expire after a year without use, and are shown in account settings. Prices and stock always come from live systems, never from memory.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Storing whole conversations indefinitely",
          "Remembering instructions instead of facts",
          "No way for users to see or delete memories",
          "Trusting memory over live system data",
          "Mixing memories across users or tenants",
        ],
        cta: {
          title: "Want personalization without privacy risk?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|AI agent development with memory]] and [[/services/ui-ux-design|memory controls and settings UX]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Agent memory is application design: layered, selective, validated and under the user's control. Remember what helps, forget what does not and prefer the system of record. Related: [[/blogs/ai-agent-architecture|architecture]], [[/blogs/retrieval-augmented-generation|RAG]] and [[/blogs/ai-agent-guardrails|guardrails]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 600 · AGENT-TO-AGENT COMMUNICATION
  {
    slug: "agent-to-agent-communication",
    title: "Agent-to-Agent Communication: How AI Agents Work Together",
    seoTitle: "Agent-to-Agent Communication and the A2A Protocol Explained",
    excerpt:
      "How AI agents communicate and delegate work: internal hand-offs versus cross-system protocols, the A2A protocol's Agent Cards, tasks, messages and artifacts, how A2A relates to MCP, security and when it is worth it.",
    category: "AI & Automation",
    banner: "a2aflow",
    bannerAlt:
      "A2A flow: client agent, fetch Agent Card (highlighted), check skills and authentication, send message, remote agent works, artifacts returned.",
    date: "2026-10-02",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise"],
    relatedSlugs: ["single-agent-vs-multi-agent-systems", "model-context-protocol", "ai-agent-orchestration"],
    faqs: [
      { q: "What is agent-to-agent communication?", a: "The exchange of tasks, messages and results between AI agents, either inside one application through an orchestrator or across systems and organizations through a protocol such as A2A." },
      { q: "What is the A2A protocol?", a: "Agent2Agent (A2A) is an open protocol for communication between independent AI agents. It was introduced by Google in 2025 and has been a Linux Foundation project since June 2025. It defines how agents discover each other, exchange messages and manage tasks." },
      { q: "What is an Agent Card?", a: "A JSON document an A2A agent publishes, typically at /.well-known/agent-card.json, describing its name, skills, endpoint, supported interaction modes and authentication requirements." },
      { q: "How is A2A different from MCP?", a: "MCP connects an AI application to tools and data sources. A2A connects agents to other agents that have their own reasoning and tools. They are complementary: an agent can use MCP for its tools and A2A to delegate to peers." },
      { q: "Do I need A2A for a multi-agent system?", a: "Not if all agents live in one application you control; an orchestrator with shared state is simpler. A2A is valuable when agents are built by different teams, vendors or organizations." },
      { q: "How do A2A agents authenticate each other?", a: "Agent Cards declare supported authentication schemes, and agents use standard web security such as OAuth and HTTPS. Each agent should still authorize every request and apply its own policies." },
      { q: "What are tasks and artifacts in A2A?", a: "A task represents a unit of work with a lifecycle and status. Artifacts are the outputs a remote agent produces, such as documents or structured data, returned to the requesting agent." },
      { q: "What are the risks of agents talking to agents?", a: "Untrusted agents can return manipulated content, overstate capabilities or try to extract data. Treat remote agents as untrusted services: authenticate, limit what you share and validate what comes back." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Agents communicate in two ways. Inside one application, an orchestrator passes structured tasks and results between agents through shared state, which is simpler and easier to control. Across teams, vendors or organizations, a protocol helps: A2A (Agent2Agent) lets an agent discover another through its Agent Card (served at /.well-known/agent-card.json), check its skills and authentication, send it messages and tasks, and receive results as artifacts. A2A complements MCP, which connects agents to tools and data. Treat every remote agent as an untrusted service.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Whether you need several agents at all is covered in [[/blogs/single-agent-vs-multi-agent-systems|single-agent vs multi-agent systems]], and coordinating them in one application in [[/blogs/ai-agent-orchestration|AI agent orchestration]]. Connecting agents to tools is [[/blogs/model-context-protocol|MCP]].",
        ],
      },
      {
        heading: "Internal Hand-offs vs Cross-System Protocols",
        body: [],
        table: {
          headers: ["", "Internal hand-off", "Cross-system protocol (A2A)"],
          rows: [
            ["Agents built by", "One team, one codebase", "Different teams, vendors or companies"],
            ["Communication", "Function calls, shared state", "HTTP-based messages and tasks"],
            ["Discovery", "Known at build time", "Agent Cards"],
            ["Trust", "Same security boundary", "Separate boundaries; authenticate and authorize"],
            ["Best for", "Most multi-agent applications", "Interoperability between independent agents"],
          ],
        },
      },
      {
        heading: "How A2A Works",
        body: [
          "A2A is an open protocol introduced by Google in 2025 and hosted by the Linux Foundation since June 2025. In outline, as described in the A2A specification:",
        ],
        checklist: [
          "**Discovery:** each agent publishes an Agent Card describing its identity, skills, endpoint, interaction modes and authentication requirements",
          "**Messages:** the client agent sends a message with parts (text, files, structured data)",
          "**Tasks:** longer work is tracked as a task with a lifecycle and status updates",
          "**Artifacts:** the remote agent returns outputs as artifacts",
          "**Transport:** standard web technologies, with streaming and asynchronous updates for long-running work",
        ],
        diagram: {
          variant: "mcpvsa2a",
          alt: "Comparison of MCP and A2A by what each connects, unit of work, discovery, typical use and relation; the note says an agent can use MCP for its tools and A2A to talk to peers.",
          caption: "MCP gives an agent abilities; A2A lets it delegate to another agent.",
        },
      },
      {
        heading: "A2A vs MCP",
        body: [
          "MCP and A2A are often confused because both are about agents and interoperability. MCP standardizes how an AI application reaches tools, resources and prompts: deterministic capabilities. A2A standardizes how one agent asks another agent, which has its own reasoning, tools and policies, to do work. A travel agent might use MCP servers for flight search and payments, and A2A to delegate visa questions to a partner's specialist agent.",
        ],
        cta: {
          title: "Connecting your agents to partners' or vendors' agents?",
          description: "ZSpace Labs can assess whether A2A or a simpler integration fits, and build secure agent-to-agent connections where they add value.",
        },
      },
      {
        heading: "Designing Agent Conversations",
        body: [
          "Whether internal or via A2A, agents communicate best with structured contracts: clear task descriptions, required inputs, expected output formats and deadlines. Avoid passing whole conversation transcripts; send what the receiving agent needs. Track task status explicitly so the caller knows whether to wait, retry or escalate.",
        ],
      },
      {
        heading: "Security and Trust",
        body: [],
        checklist: [
          "Authenticate remote agents using the schemes in their Agent Cards and verify their identity",
          "Authorize every incoming task against your own policies",
          "Share the minimum data needed; never send credentials",
          "Treat returned artifacts and messages as untrusted input",
          "Validate artifacts against schemas before using them",
          "Log every exchange with both agents' identities",
          "Keep human approval for consequential actions that remote agents request",
        ],
      },
      {
        heading: "When A2A Is Worth It",
        body: [
          "A2A earns its complexity when agents genuinely belong to different owners: a company exposing a specialist agent to customers' agents, enterprises connecting agents across business units with separate platforms, or marketplaces of agents. For agents within one product, internal orchestration remains simpler and easier to secure.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Standard agent communication enables reuse and collaboration across organizational and vendor boundaries. The protocol and its ecosystem are still maturing, implementations vary, debugging spans systems you do not control and trust between agents must be established carefully. Start with a narrow, well-defined skill.",
        ],
      },
      {
        heading: "How to Implement Agent Communication Step by Step",
        body: [],
        checklist: [
          "**1. Decide if agents share an owner**; if so, use internal orchestration",
          "**2. Define skills and contracts** for cross-boundary work",
          "**3. Publish or consume Agent Cards** with authentication requirements",
          "**4. Implement tasks with status tracking** and timeouts",
          "**5. Validate artifacts** and limit shared data",
          "**6. Trace exchanges** across both sides where possible",
          "**7. Pilot one skill** before broadening",
        ],
      },
      {
        heading: "What an Agent Card Describes",
        body: [
          "An Agent Card is how one agent learns what another can do and how to reach it. The simplified example below shows the kind of information it carries; field names and structure follow the A2A specification, which has evolved across versions, so use the current specification and an official SDK rather than this sketch.",
        ],
        code: {
          label: "Example: simplified Agent Card content (illustrative, not schema-exact)",
          text: "{\n  \"name\": \"Shipment Exception Agent\",\n  \"description\": \"Investigates delayed or failed shipments and proposes resolutions.\",\n  \"url\": \"https://agents.example-logistics.com/a2a\",\n  \"version\": \"1.4.0\",\n  \"capabilities\": { \"streaming\": true },\n  \"authentication\": \"OAuth 2.0 (client credentials)\",\n  \"skills\": [\n    {\n      \"id\": \"resolve-exception\",\n      \"name\": \"Resolve shipment exception\",\n      \"description\": \"Given a shipment reference, returns cause, options and a recommended resolution.\",\n      \"inputModes\": [\"application/json\"],\n      \"outputModes\": [\"application/json\"]\n    }\n  ]\n}",
        },
      },
      {
        heading: "Use Cases for Cross-Organization Agents",
        body: [],
        table: {
          headers: ["Scenario", "Requesting agent", "Remote agent"],
          rows: [
            ["Logistics", "Customer's procurement agent", "Carrier's exception agent"],
            ["Travel", "Corporate travel assistant", "Airline or hotel booking agent"],
            ["Financial services", "Business finance agent", "Bank's account services agent"],
            ["Enterprise IT", "Department agent", "Central IT provisioning agent"],
            ["Software platforms", "Customer's AI assistant", "Vendor's product support agent"],
          ],
        },
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a logistics provider exposes a 'shipment exception resolution' agent for large customers. Customers' procurement agents discover it through its Agent Card, authenticate with OAuth and submit tasks with shipment references. The logistics agent returns structured resolution artifacts; customer-side agents validate them and route anything involving cost changes to a person.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Using a cross-system protocol for agents in one codebase",
          "Trusting remote agents' outputs without validation",
          "Sharing more data than the task needs",
          "No task status or timeout handling",
          "Confusing MCP and A2A roles",
        ],
        cta: {
          title: "Exploring agent interoperability?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|multi-agent and A2A development]] and [[/services/website-development|secure API infrastructure]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Agents work together through orchestration inside one system and through protocols like A2A across systems. Keep contracts structured, trust explicit and the simpler option first. Related: [[/blogs/model-context-protocol|MCP]], [[/blogs/ai-agent-orchestration|agent orchestration]] and [[/blogs/single-agent-vs-multi-agent-systems|single vs multi-agent]].",
        ],
      },
    ],
  },
];
