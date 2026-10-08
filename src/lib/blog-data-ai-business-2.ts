import type { BlogPost } from "./blog-data";

/**
 * AI-ready business batch (October 2026), part two: the systems layer.
 * "AI transformation is a systems problem" and "the AI-native business stack"
 * were merged; "what data does an agent need" was reframed as context
 * engineering because ai-data-readiness and data-quality-for-ai own the data
 * preparation intent; "APIs for AI agents" absorbed "from websites to agent
 * interfaces" (how-ai-agents-use-websites covers the browsing side). Sources
 * checked 2026-10-07: McKinsey State of AI 2025, Anthropic engineering
 * (context engineering, Sep 2025), MCP specification 2026-07-28, OpenAI and
 * Anthropic developer documentation. Merged into `posts` in blog-data.ts.
 */

export const aiBusinessPosts2: BlogPost[] = [
  // ---------------------------------------- AI-READY BUSINESS STACK
  {
    slug: "ai-ready-business-stack",
    title: "AI Adoption Is a Systems Problem: The AI-Ready Business Stack",
    seoTitle: "The AI-Ready Business Stack: What You Need Beyond the AI Model",
    excerpt:
      "Why AI adoption stalls on systems, not models, and the seven layers an AI-ready business needs, from data and APIs to identity and governance.",
    category: "AI & Automation",
    banner: "aireadystack",
    sceneKind: "pipeline",
    bannerAlt:
      "The AI-ready business stack in three groups: Foundation (data and systems of record, access through APIs, actions as tools), Control (highlighted: identity, permissions, approvals) and Operations (workflow, observability, governance), with models and interfaces on top.",
    date: "2026-10-07",
    readingTime: "5 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["b2b-enterprise", "saas-technology", "manufacturing"],
    relatedSlugs: ["ai-readiness-assessment", "apis-for-ai-agents", "context-engineering-ai-agents"],
    faqs: [
      { q: "What does a business need beyond an AI model?", a: "Reliable data in known systems of record, programmatic access to those systems (APIs, retrieval), well-designed actions the AI can take, identity and permissions, workflows with human approval, observability and audit trails, and governance. The model is the easiest part to change; these layers determine whether AI works." },
      { q: "Why do AI projects stall after the pilot?", a: "Because pilots often run on exported data, broad access and a developer watching. Production requires integration with live systems, permissions, monitoring and ownership. Those are systems problems, not model problems." },
      { q: "Do small businesses need all of this?", a: "The same layers apply at a smaller scale: a few well-kept systems with APIs, sensible permissions, a workflow tool with approvals and basic logging. Many SaaS tools provide parts of the stack already." },
      { q: "Should we pick a model provider first?", a: "No. Models change quickly and most stacks can switch between them. Decide first which processes to improve and whether your data and systems can support them; then pick models per task." },
      { q: "What is the first investment to make?", a: "Usually access: making the systems that hold your key facts (customers, orders, products, cases) reachable through documented APIs with proper permissions. It benefits AI, integrations and reporting at the same time." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI adoption is now limited less by models than by the systems around them. An AI-ready business has seven layers in place: **data** in clear systems of record, **access** to that data through APIs and retrieval, **actions** exposed as safe tools, **identity and permissions** for AI acting on someone's behalf, **workflows** with human approval where it matters, **observability and audit** of what AI did, and **governance** that assigns ownership. Models and interfaces sit on top and can be swapped. Invest in the lower layers first; they also improve integrations, reporting and operations without any AI at all.",
        ],
      },
      {
        heading: "Why the model is the easy part",
        body: [
          "Two years ago, choosing a model felt like the main decision. Today capable models are available from several providers, prices fall regularly, and most frameworks let you switch between them. What does not change quickly is the business underneath: where customer data lives, whether the order system has an API, who is allowed to approve a refund, whether anyone can see what the AI did yesterday.",
          "The adoption data points the same way. McKinsey's State of AI 2025 found most organizations using AI, and 62 percent at least experimenting with agents, yet nearly two-thirds had not begun scaling AI across the enterprise. The pattern behind that gap is consistent: pilots run on exported spreadsheets and broad access; production needs live systems, permissions, monitoring and owners.",
        ],
      },
      {
        heading: "The seven layers",
        body: [],
        table: {
          headers: ["Layer", "What it means", "Signs it is missing"],
          rows: [
            ["1. Data and systems of record", "Each fact (customer, product, order, contract) has one authoritative home", "The same customer differs between CRM, billing and support"],
            ["2. Access", "APIs, search and retrieval over that data with documented contracts", "Data only reachable through screens, exports or one person's spreadsheet"],
            ["3. Actions", "Business operations exposed as narrow, safe tools", "AI can read but every change is manual, or it gets broad write access"],
            ["4. Identity and permissions", "AI acts with scoped, auditable identity, often on behalf of a user", "Shared API keys; agents using an admin account"],
            ["5. Workflow and approvals", "Orchestration with human approval at consequential steps", "AI outputs pasted manually into other systems"],
            ["6. Observability and audit", "Traces of inputs, actions, costs and outcomes", "Nobody can say what the AI did or why"],
            ["7. Governance", "Owners, risk tiers, policies, inventory", "AI tools adopted ad hoc; nobody accountable"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "An AI system can only be as good as the systems it can query and the actions it is allowed to take. Weak data and access cap quality no matter which model you choose.",
        },
      },
      {
        heading: "Layer 1 and 2: data you can reach",
        body: [
          "The most valuable AI work (answering customer questions, resolving cases, preparing quotes, reconciling records) depends on current, correct facts from operational systems. That requires knowing which system is authoritative for each fact, keeping it reasonably clean, and exposing it through APIs or a retrieval layer with permissions. Our guides to [[/blogs/ai-data-readiness|AI data readiness]] and [[/blogs/data-quality-for-ai|data quality for AI]] cover the preparation work; [[/blogs/context-engineering-ai-agents|context engineering]] covers how that information reaches a model at the right moment.",
        ],
      },
      {
        heading: "Layer 3 and 4: actions with identity",
        body: [
          "Reading is useful; acting is where value and risk grow. Expose actions as narrow tools (\"issue store credit up to a limit\") rather than broad access (\"write to the database\"), and give AI an identity that says who it is and on whose behalf it acts. Microsoft made Entra Agent ID generally available in 2026 precisely because organizations need agent identities to be governed like employees and applications. See [[/blogs/ai-agent-tool-design|AI agent tool design]] and [[/blogs/ai-agent-authentication|AI agent identity and authentication]].",
        ],
      },
      {
        heading: "Layer 5 and 6: workflows you can see",
        body: [
          "AI rarely works alone. It sits inside workflows that route cases, request approvals, call systems and notify people. A workflow layer makes those steps explicit, enforces approvals and handles retries. Observability then records what happened at each step: inputs, outputs, tool calls, costs and who approved what. Without it you cannot debug, improve or defend an AI system. See [[/blogs/human-in-the-loop-ai|human-in-the-loop AI]] and [[/blogs/ai-agent-observability|AI agent observability]].",
        ],
      },
      {
        heading: "Layer 7: governance that fits the business",
        body: [
          "Governance does not need to be a committee. For most organizations it means an inventory of AI systems, an owner for each, risk tiers that decide which controls apply, and a small set of usable policies (what data may go where, which actions need approval). See [[/blogs/ai-governance-framework|AI governance framework]] and [[/blogs/ai-agent-accountability|who is responsible when an AI agent makes a mistake]].",
        ],
        cta: {
          title: "Want to know which layers your business is missing?",
          description: "ZSpace Labs assesses your systems for AI readiness and builds the missing layers: APIs, integrations, tools, approvals and observability. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "AI as a new user of your software",
        body: [
          "The stack also faces outward. Customers increasingly reach businesses through AI assistants and agents, which read websites, call APIs and complete tasks. The same layers that make AI work internally (clean data, documented APIs, scoped actions, identity) are what make a business usable by external agents. See [[/blogs/apis-for-ai-agents|should your business build APIs for AI agents]] and [[/blogs/how-ai-agents-use-websites|how AI agents use websites]].",
        ],
      },
      {
        heading: "Where to start",
        body: [],
        table: {
          headers: ["Situation", "First investment"],
          rows: [
            ["Data scattered across spreadsheets and tools", "Define systems of record; consolidate key entities"],
            ["Core systems lack APIs", "Add an integration layer or API over the most-used systems"],
            ["AI pilots exist but nobody can see what they do", "Tracing, logging and an owner per system"],
            ["Teams adopt AI tools ad hoc", "Inventory, data rules and approved tools"],
            ["Ready to automate actions", "Narrow tools, scoped identity and approvals"],
          ],
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Treat AI transformation as a systems programme with a model on top, not a model choice with some integration afterwards. Data you can trust, access you can control, actions you can audit and owners who are accountable make any model more useful, and they keep paying off as models change. For a structured starting point, run an [[/blogs/ai-readiness-assessment|AI readiness assessment]] against these seven layers.",
        ],
      },
    ],
  },

  // ---------------------------------------- CONTEXT ENGINEERING
  {
    slug: "context-engineering-ai-agents",
    title: "Context Engineering: What Information an AI Agent Needs to Work Reliably",
    seoTitle: "Context Engineering for AI Agents: What Information They Need",
    excerpt:
      "What context engineering is, what information an AI agent needs at each step, why more context can hurt, and how to supply it reliably.",
    category: "AI & Automation",
    banner: "contextflow",
    sceneKind: "rag",
    bannerAlt:
      "Assembling an agent's context for one step: Instructions, Task + user, Retrieved facts, Tool results (highlighted), Compacted history, Model call.",
    date: "2026-10-07",
    updated: "2026-10-08",
    readingTime: "5 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise"],
    relatedSlugs: ["ai-agent-memory", "retrieval-augmented-generation", "ai-agent-tool-design"],
    faqs: [
      { q: "What is context engineering?", a: "The practice of deciding what information goes into a model's context window at each step (instructions, task details, retrieved data, tool results, history) and keeping it relevant as a task progresses. Anthropic describes it as the natural progression of prompt engineering for agents." },
      { q: "What data does an AI agent need?", a: "Clear instructions and constraints, the details of the current task and user, the specific facts needed for the next decision (retrieved from systems of record), descriptions of the tools it can use, and a compact summary of what has happened so far. It does not need everything you have." },
      { q: "Is more context better?", a: "No. Models have a limited attention budget, and Anthropic notes that recall degrades as context grows, an effect it calls context rot. Irrelevant or conflicting information can make an agent less accurate." },
      { q: "How is context engineering different from RAG?", a: "Retrieval-augmented generation is one technique within context engineering: fetching relevant documents. Context engineering also covers instructions, tool design, what tool results return, memory and how history is compacted over long tasks." },
      { q: "How do we know what context an agent is missing?", a: "Read failed transcripts and ask what a competent person would have known that the agent did not. Interview the people who do the work for unwritten rules. Then decide whether that information belongs in instructions, retrieval, a tool or memory." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Context engineering is deciding what information an AI agent sees at each step. An agent needs five things: instructions and limits, the current task and who it is for, the specific facts required for the next decision (fetched from systems of record, not pasted in bulk), clear descriptions of its tools, and a compact record of what has happened so far. More is not better: models attend less reliably as context grows, so the goal is the smallest set of high-signal information. Most agent failures that look like reasoning errors are actually missing, stale or noisy context.",
        ],
      },
      {
        heading: "From prompt engineering to context engineering",
        body: [
          "Prompt engineering focused on wording a single instruction well. Agents changed the problem: they run for many steps, call tools, read documents and accumulate history, so what the model sees at step twelve is mostly not the prompt you wrote. Anthropic's engineering team described this shift in September 2025 as context engineering: curating and maintaining the optimal set of information during inference, including everything that lands in the context window beyond the prompt.",
          "The same article names the core constraint. Models have a finite attention budget; as the number of tokens grows, the ability to recall and use specific information declines, an effect Anthropic calls context rot. Large context windows help, but they do not remove the need to choose.",
        ],
      },
      {
        heading: "The five kinds of context an agent needs",
        body: [],
        table: {
          headers: ["Context", "What it contains", "Where it should come from"],
          rows: [
            ["Instructions", "Role, goal, constraints, escalation rules, tone", "System prompt; short and specific"],
            ["Task and user", "The request, who is asking, their permissions and account", "Application state, identity system"],
            ["Facts for the next decision", "Order status, contract terms, product specs, policy clauses", "Tools and retrieval over systems of record, fetched just in time"],
            ["Tools", "What actions exist, when to use each, what they return", "Tool names, descriptions and schemas"],
            ["History", "What has been tried, decided and learned in this task", "Compacted summaries and structured notes, not full transcripts"],
          ],
        },
      },
      {
        heading: "Fetch facts just in time instead of pasting them in",
        body: [
          "The most common mistake is loading everything up front: the whole policy manual, the full customer record, every past ticket. It is expensive, it buries the relevant line, and it is out of date by the time it is used. Better: give the agent tools to look up what it needs when it needs it (\"get_refund_policy(region)\", \"get_order(order_id)\"), and make those tools return compact, relevant results. This is why tool design and context engineering are the same discipline; see [[/blogs/ai-agent-tool-design|AI agent tool design]].",
        ],
        callout: {
          type: "takeaway",
          text: "The quality of an agent is constrained by the quality and accessibility of the systems it can actually query. If the facts are not reachable through a tool or retrieval, no prompt will supply them.",
        },
      },
      {
        heading: "Capture the knowledge people never wrote down",
        body: [
          "Every process runs on unwritten rules: which customers get flexibility, which supplier formats are unreliable, what \"urgent\" means for a particular account. People apply them without thinking; agents cannot. Before building, interview the people who do the work and review cases where they made non-obvious decisions. Then decide where each rule belongs: a short instruction if it applies everywhere, a retrievable document if it applies sometimes, a field in a system if it is per customer, or a deterministic check if it must always hold.",
        ],
      },
      {
        heading: "Managing long tasks",
        body: [
          "Agents working for many steps accumulate tool outputs and reasoning that crowd out what matters. Three techniques keep context useful:",
        ],
        checklist: [
          "**Compaction:** periodically summarize progress and decisions, then continue from the summary instead of the full transcript",
          "**Structured notes:** have the agent keep a small working file (findings, open questions, next steps) that survives compaction",
          "**Sub-agents:** delegate focused sub-tasks to separate agents with clean context, returning only their conclusions",
          "**Trim tool output:** return summaries, top results and identifiers, with a way to fetch detail on request",
        ],
      },
      {
        heading: "Memory across sessions",
        body: [
          "Some information should persist beyond one task: a customer's preferences, a project's conventions, lessons from previous cases. Store it deliberately, scoped per user or tenant, with its source recorded, and retrieve it when relevant rather than injecting all of it every time. Poorly governed memory is also a security risk, since poisoned entries can steer later runs. See [[/blogs/ai-agent-memory|AI agent memory]] and the memory risk in [[/blogs/owasp-top-10-agentic-applications|the OWASP agentic Top 10]].",
        ],
        cta: {
          title: "Agents getting answers wrong in production?",
          description: "ZSpace Labs diagnoses agent failures from transcripts, then fixes the context: retrieval, tools, instructions and memory. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Diagnosing context problems",
        body: [
          "When an agent makes a bad decision, read the exact context it had at that step and ask four questions.",
        ],
        table: {
          headers: ["Question", "If yes", "Fix"],
          rows: [
            ["Was a needed fact missing?", "Missing context", "Add a tool or retrieval source; capture the unwritten rule"],
            ["Was the fact present but outdated?", "Stale context", "Read from the system of record; add freshness checks"],
            ["Was it present but buried?", "Noisy context", "Trim tool outputs, compact history, narrow retrieval"],
            ["Were there conflicting instructions or facts?", "Conflicting context", "Resolve the source of truth; simplify instructions"],
          ],
        },
      },
      {
        heading: "Context Engineering vs Prompt Engineering",
        body: [
          "Prompt engineering shapes how the model should behave: role, instructions, tone, examples. Context engineering designs the whole information environment the model works in at each step: which facts, tools, history and memories are present, in what form and when. Prompts are one part of context. For single-turn features, a well-written prompt may be enough; for agents that run many steps and call tools, context design decides most of the quality.",
        ],
        table: {
          headers: ["", "Prompt engineering", "Context engineering"],
          rows: [
            ["Focus", "Instructions and behaviour", "Information available at each step"],
            ["Scope", "System and user prompts", "Prompts, retrieval, tool definitions and results, memory, history"],
            ["Changes during a task?", "Mostly static", "Changes every step"],
            ["Typical failure", "Vague or conflicting instructions", "Missing, stale, buried or conflicting facts"],
            ["Main tools", "Wording, examples, output format", "Retrieval, tool design, compaction, memory policies"],
            ["Matters most for", "Single-turn generation and classification", "Agents and long-running, tool-using tasks"],
          ],
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Reliable agents are mostly well-fed agents. Decide what each step needs, fetch facts just in time from systems of record, keep instructions short, return compact tool results, compact long histories and capture the rules people never wrote down. For the data preparation underneath, see [[/blogs/ai-data-readiness|AI data readiness]]; for retrieval techniques, [[/blogs/retrieval-augmented-generation|retrieval-augmented generation]].",
        ],
      },
    ],
  },

  // ---------------------------------------- APIS FOR AI AGENTS
  {
    slug: "apis-for-ai-agents",
    title: "Should Your Business Build APIs for AI Agents? MCP Servers, APIs and Agent Interfaces",
    seoTitle: "Should Your Business Build APIs for AI Agents? A Practical Guide",
    excerpt:
      "When AI agents become users of your product: whether to offer an API, MCP server or ChatGPT/Claude integration, and what to expose first.",
    category: "Web Development",
    banner: "agentinterfaces",
    sceneKind: "code",
    bannerAlt:
      "Two paths into a business: Human to Website to Business systems, and AI agent to Structured data, API or MCP server (highlighted) to Business systems.",
    date: "2026-10-07",
    updated: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "travel-hospitality", "ecommerce"],
    relatedSlugs: ["how-ai-agents-use-websites", "mcp-vs-api", "how-to-build-an-mcp-server"],
    faqs: [
      { q: "Should my business build an API for AI agents?", a: "If customers or partners would benefit from completing tasks with you through AI assistants (booking, ordering, checking status, querying data), yes, starting with a few high-value actions. If your offering is mostly content or one-off purchases, focus on an accessible website, structured data and feeds first." },
      { q: "What is the difference between an API and an MCP server?", a: "An API is a general programmatic interface for any software. An MCP server describes tools and data in the Model Context Protocol so AI applications such as ChatGPT, Claude and coding agents can discover and use them. Many businesses put an MCP server in front of an existing API." },
      { q: "What are ChatGPT plugins and Claude connectors?", a: "Ways to make your service available inside those assistants. OpenAI's plugins (previously called apps) and Claude's connectors are built on MCP servers, optionally with a user interface and reusable skills, and are listed in each platform's directory after review." },
      { q: "Do I need to do this if agents can already use my website?", a: "Browser agents can operate websites, but slowly and unreliably. A structured interface is faster, more accurate and lets you control exactly which actions are available and under what permissions." },
      { q: "How do agents authenticate to my API?", a: "Usually with OAuth so the agent acts on behalf of a signed-in user with scoped permissions. The MCP specification builds its authorization on OAuth 2.1." },
      { q: "What should we expose first?", a: "Read-only actions with clear value (search, availability, status, quotes), then low-risk writes (create a draft, add to cart, book with confirmation). Keep payments, cancellations and account changes behind explicit user confirmation." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Build an agent interface when customers or partners will want to complete tasks with you through AI assistants: searching your catalogue, checking availability, getting quotes, booking, ordering or querying their account. Start with an API (or an existing one) and put an MCP server in front of it so ChatGPT, Claude, coding agents and other MCP clients can use it; publish it as a ChatGPT plugin or Claude connector if your customers use those assistants. Expose a few task-shaped actions first, read-only before writes, with OAuth-based user consent and confirmation for anything consequential. If your business is mostly content or simple purchases, an accessible website, structured data and product feeds come first.",
        ],
      },
      {
        heading: "AI is becoming a user of your software",
        body: [
          "For most of the web's history the path was simple: a person uses your website, which talks to your systems. A second path is now opening: a person asks an AI assistant, and the assistant works with your business on their behalf, by reading your website, calling an API or using a tool you publish.",
          "Agents can already use websites by operating the interface (covered in [[/blogs/how-ai-agents-use-websites|how AI agents use websites]]), but that is the slowest and least reliable route. A structured interface lets an agent do the same task in one call, with typed inputs, clear errors and permissions you control. The question for a business is not whether agents will arrive, but which of your tasks are worth making easy for them.",
        ],
        table: {
          headers: ["Interface", "Who uses it", "Strength", "Limitation"],
          rows: [
            ["Website (accessible, semantic)", "People and browser agents", "Works for everyone today", "Slow and brittle for agents"],
            ["Structured data and feeds", "Search engines, shopping and AI answers", "Discovery and comparison", "Read-only"],
            ["Public or partner API", "Developers and integrations", "Precise, general-purpose", "Agents need a description layer to use it well"],
            ["MCP server", "AI applications (ChatGPT, Claude, coding agents, custom agents)", "Discoverable tools designed for models", "Needs auth, design and review effort"],
            ["Assistant directory listing (ChatGPT plugin, Claude connector)", "Assistant users", "Distribution inside the assistant", "Platform review and rules"],
          ],
        },
      },
      {
        heading: "Who should build one",
        body: [],
        table: {
          headers: ["Business type", "Agent interface worth it?", "First actions to expose"],
          rows: [
            ["SaaS and B2B platforms", "Usually yes", "Search records, create items, run reports, status"],
            ["Travel, hospitality, appointments", "Often yes", "Availability, quotes, bookings with confirmation"],
            ["Ecommerce", "Via platform first", "Feeds, catalogue and checkout protocols (UCP, ACP) through your commerce platform"],
            ["Logistics and B2B ordering", "Often yes", "Order status, reorder, delivery slots"],
            ["Financial services", "Carefully", "Read-only account information with strong consent"],
            ["Content and marketing sites", "Rarely", "Focus on crawlable pages and structured data"],
          ],
        },
        callout: {
          type: "note",
          text: "Ecommerce brands on Shopify already reach several AI assistants through Shopify's Agentic Storefronts and the Universal Commerce Protocol, so a custom MCP server is rarely the first step. See [[/blogs/shopify-agentic-commerce|Shopify agentic commerce]].",
        },
      },
      {
        heading: "MCP, APIs and assistant directories",
        body: [
          "The [[/blogs/model-context-protocol|Model Context Protocol]] has become the common way AI applications connect to external tools and data. An MCP server describes a set of tools (name, description, input schema) that any MCP client can discover and call. The current specification (2026-07-28) moved to a stateless core, which makes MCP servers simpler to host behind ordinary infrastructure.",
          "The large assistants distribute MCP-based integrations through directories. OpenAI's ChatGPT supports plugins (renamed from apps in mid-2026) that bundle MCP-based apps, optional UI and reusable skills, submitted for review before listing. Anthropic's Claude lists remote MCP servers as connectors in its directory. Both mean the same underlying work, a well-designed, secured MCP server, can reach users in several assistants.",
          "MCP does not replace your API. Most teams keep an API as the stable contract and build an MCP server as a thin, task-shaped layer on top. The difference is covered in [[/blogs/mcp-vs-api|MCP vs API]], and the build steps in [[/blogs/how-to-build-an-mcp-server|how to build an MCP server]].",
        ],
      },
      {
        heading: "Design for agents, not just developers",
        body: [
          "An API designed for developers assumes the caller already knows the workflow. Agents do better with task-shaped tools, clear descriptions and compact responses.",
        ],
        checklist: [
          "Expose tasks (\"find available rooms for dates\") rather than raw endpoints (\"list inventory with 20 filters\")",
          "Write descriptions that say when to use each tool and what it returns",
          "Use strict input schemas and human-readable identifiers",
          "Return compact results with a way to fetch detail",
          "Return errors that explain how to recover",
          "Make writes idempotent and preview consequential actions for user confirmation",
        ],
      },
      {
        heading: "Security and permissions",
        body: [
          "An agent interface is a new front door, so treat it like one. The MCP specification bases authorization on OAuth 2.1: the MCP server acts as a resource server, and clients obtain tokens through standard flows with protected resource metadata for discovery. In practice that means the agent acts on behalf of a signed-in user, with scopes that limit what it can do, and consent the user can revoke.",
          "Add rate limits, input validation, logging of every call with the user and client identity, and confirmation for payments, cancellations and data changes. Assume tool descriptions and returned content may be read by models that can be manipulated, so never return secrets and never let returned text grant extra permissions. See [[/blogs/ai-agent-authentication|AI agent identity and authentication]] and [[/blogs/mcp-security|MCP security]].",
        ],
        cta: {
          title: "Thinking about an MCP server or assistant integration?",
          description: "ZSpace Labs designs and builds agent-facing APIs and MCP servers on top of your existing systems, with OAuth, permissions and monitoring. See [[/services/website-development|web and API development]] and [[/services/ai-automation|AI automation]].",
        },
      },
      {
        heading: "Measuring whether it is worth it",
        body: [
          "Treat the agent interface as a channel. Track how many users connect it, which tools are called, completion and error rates, and the business outcomes that follow (bookings, orders, retained accounts). Tag actions with the calling client so you can compare assistants. If usage is low after a fair period, the interface may be ahead of your customers; keep it maintained but invest elsewhere.",
        ],
      },
      {
        heading: "A staged plan",
        body: [],
        checklist: [
          "**1. List tasks** customers already do repeatedly with you; rank by value and risk",
          "**2. Check your API:** does it cover those tasks with proper auth? Fill gaps first",
          "**3. Build an MCP server** exposing 3–5 read-only tools; test with your own agents",
          "**4. Add low-risk writes** with confirmation and idempotency",
          "**5. Publish** to the assistant directories your customers use, following each platform's review rules",
          "**6. Measure and iterate** on tool design from real call logs",
        ],
      },
      {
        heading: "Agent-ready API checklist",
        body: [
          "An API designed for human-triggered workflows often assumes a person will notice odd results, retry sensibly and read documentation. Autonomous agents do none of that reliably, so the API itself has to be explicit and safe.",
        ],
        checklist: [
          "**Clear schemas** with types, enums, formats and required fields (OpenAPI or MCP tool schemas)",
          "**Action descriptions** that say what an operation does, when to use it and its side effects",
          "**Predictable responses** with consistent shapes and human-readable names alongside IDs",
          "**Authentication** with OAuth and delegated, scoped tokens; no shared keys",
          "**Authorization** enforced per user, tenant and action on the server",
          "**Idempotency keys** on every write so retries never duplicate effects",
          "**Machine-readable errors** with codes, messages and whether the call is retryable",
          "**Rate limits** with clear headers and limits per agent and per user",
          "**Pagination** and bounded result sizes to protect agent context",
          "**Validation** of every input, including values an agent may have invented",
          "**Previews or dry runs** for consequential actions so agents can ask for approval",
          "**Audit fields:** request IDs and trace propagation so every call is attributable",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "AI agents are becoming a real way customers interact with businesses. Make your website accessible for agents that browse, and for the tasks that matter most, offer a structured interface: an API with an MCP layer, secured with OAuth and designed around tasks. Start small, measure use, and expand where agents are actually bringing customers. For the systems underneath, see [[/blogs/ai-ready-business-stack|the AI-ready business stack]].",
          "For the bigger picture of how websites, APIs and agents fit together, see [[/blogs/will-ai-agents-replace-websites|will AI agents replace websites?]].",
        ],
      },
    ],
  },
];
