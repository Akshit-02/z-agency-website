import type { BlogPost } from "./blog-data";

/**
 * AI knowledge hub, part nine: MCP positioning and security, and the model
 * integration layer. MCP security requirements are taken from the
 * 2026-07-28 authorization security considerations (audience validation,
 * no token passthrough, PKCE with S256, RFC 8707 resource parameter, RFC
 * 9207 issuer validation, confused-deputy consent for proxy servers). The
 * gateway and API integration guides are provider-neutral. Merged into
 * `posts` in blog-data.ts.
 */

export const aiCorePosts9: BlogPost[] = [
  // ---------------------------------------- 593 · MCP VS API
  {
    slug: "mcp-vs-api",
    title: "MCP vs API: What's the Difference and When Should You Use Each?",
    seoTitle: "MCP vs API: Differences, How They Work Together, When to Use",
    excerpt:
      "How the Model Context Protocol differs from traditional APIs: audience, discovery, schemas and descriptions, authorization and interoperability, why MCP usually wraps APIs, and when to build each.",
    category: "AI & Automation",
    banner: "mcpvsapi",
    bannerAlt:
      "Comparison of traditional APIs and MCP servers by audience, discovery, descriptions, authorization and whether one replaces the other; the note says MCP is an adapter for AI clients built on top of APIs.",
    date: "2026-10-02",
    updated: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise"],
    relatedSlugs: ["model-context-protocol", "ai-api-integration", "how-to-build-an-mcp-server"],
    faqs: [
      { q: "What is the difference between MCP and an API?", a: "An API is an interface for software to call a system, designed for developers who write integration code. MCP is a protocol that standardizes how AI applications discover and use tools and data, so a model-driven client can use a system without custom integration code." },
      { q: "Does MCP replace REST APIs?", a: "No. MCP servers usually call existing APIs underneath. The API remains the place for business logic, validation and permissions; MCP adapts it for AI clients." },
      { q: "When should I build an MCP server instead of only an API?", a: "When you want AI assistants, agents or IDEs, including ones you do not control, to use your system through a standard interface. If only your own code calls the system, a normal API is enough." },
      { q: "Can AI agents use APIs directly?", a: "Yes. Developers can define tools that call APIs through a model provider's function calling. MCP adds standard discovery and reuse across different AI applications." },
      { q: "How is authentication different?", a: "APIs use whatever scheme you choose. Remote MCP servers follow the MCP authorization specification, which is based on OAuth 2.1 with protected resource metadata and audience-bound tokens." },
      { q: "Is OpenAPI the same as MCP?", a: "No. OpenAPI describes REST APIs for developers and tools. MCP is a runtime protocol for AI clients. Some tools generate MCP servers from OpenAPI descriptions, but good AI tools usually need more focused design." },
      { q: "Do I need both MCP and A2A?", a: "They solve different problems. MCP connects AI applications to tools and data; A2A connects agents to other agents. A system may use both." },
      { q: "Should every API endpoint become an MCP tool?", a: "No. Expose a small set of task-oriented tools with clear descriptions. Mirroring a large API one-to-one usually confuses models and widens risk." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An API is an interface for software written by developers; MCP is a protocol that lets AI applications discover and use tools and data at run time. They work together: an MCP server typically wraps your existing API, exposing a small set of task-oriented tools with model-friendly descriptions and schemas, plus standard discovery and OAuth-based authorization for remote use. Build an API for your systems in any case; add an MCP server when you want AI assistants and agents, including ones you do not build yourself, to use those systems without custom integrations.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "MCP itself is explained in [[/blogs/model-context-protocol|the MCP guide]], and building a server in [[/blogs/how-to-build-an-mcp-server|how to build an MCP server]]. Calling model APIs from your own applications is covered in [[/blogs/ai-api-integration|AI API integration]], and general integration patterns in [[/blogs/website-api-integration|website API integration]].",
        ],
      },
      {
        heading: "MCP vs API Compared",
        body: [],
        table: {
          headers: ["Dimension", "Traditional API", "MCP server"],
          rows: [
            ["Primary user", "Developers writing code", "AI applications and their models"],
            ["Discovery", "Documentation, OpenAPI specs", "Protocol-level listing of tools, resources, prompts"],
            ["Descriptions", "Written for humans", "Written for models to choose tools"],
            ["Granularity", "Resources and endpoints", "Task-oriented tools"],
            ["Auth", "Any scheme (keys, OAuth, mTLS)", "OAuth 2.1-based for remote servers"],
            ["Business logic", "Lives here", "Should stay in the API underneath"],
            ["Reuse", "Each integration written separately", "One server, many compatible clients"],
          ],
        },
      },
      {
        heading: "How They Work Together",
        body: [
          "In a typical setup, the AI host's MCP client calls your MCP server; the server validates input, checks authorization and calls your API; the API applies business rules and talks to databases and services. The MCP server is an adapter that makes the API safe and usable for model-driven clients.",
        ],
        diagram: {
          variant: "mcplayers",
          alt: "Where MCP sits, in four columns: AI host (model, tool picker, user approval, client), MCP server highlighted (tool schemas, authorization, validation, mapping), your API (business logic, permissions, rate limits, audit) and systems (database, SaaS apps, files, queues); the note says keep business rules in the API, not in tool descriptions.",
          caption: "MCP sits in front of your API, not instead of it.",
        },
      },
      {
        heading: "When an API Alone Is Enough",
        body: [],
        checklist: [
          "Only your own application calls the system",
          "Your AI features are built in-house and call tools through your model provider's function calling",
          "You do not want third-party AI applications to access the system",
          "The integration is machine-to-machine without a model choosing actions",
        ],
      },
      {
        heading: "When to Add an MCP Server",
        body: [],
        checklist: [
          "Customers want to use your product from their AI assistants",
          "Several internal AI tools need the same capabilities",
          "Developers use AI-enabled IDEs that should reach internal systems safely",
          "You want consistent authorization and logging for AI access",
        ],
        cta: {
          title: "Wondering whether your product needs an MCP server?",
          description: "ZSpace Labs can assess how customers and teams would use your system from AI tools and design the right mix of API and MCP.",
        },
      },
      {
        heading: "Designing Tools From an API",
        body: [
          "Do not mirror every endpoint. An API might have 80 endpoints; an MCP server might expose six tools that match real tasks, each combining calls where helpful. Describe when to use each tool, constrain inputs and return concise results. Generators that convert OpenAPI specs into MCP tools can bootstrap a server, but curated tools usually perform and behave better.",
        ],
      },
      {
        heading: "Authorization Differences",
        body: [
          "Your API might use API keys for partners and OAuth for users. A remote MCP server follows the MCP authorization specification: protected resource metadata, OAuth 2.1 with PKCE, tokens bound to the MCP server's audience, and no token passthrough to upstream APIs. Plan identity so that the MCP server can call your API with the right user context. See [[/blogs/mcp-security|MCP security]].",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [],
        table: {
          headers: ["", "Advantages", "Limitations"],
          rows: [
            ["API", "Universal, flexible, mature tooling", "Each AI integration built separately"],
            ["MCP", "Standard AI discovery and reuse", "Extra service; evolving spec and client support"],
          ],
        },
      },
      {
        heading: "How to Decide Step by Step",
        body: [],
        checklist: [
          "**1. Make sure your API is solid**: business rules, permissions, rate limits",
          "**2. List the AI clients** that need access and who controls them",
          "**3. If only your code needs access**, use function calling over your API",
          "**4. If many or external AI clients need access**, add an MCP server",
          "**5. Design task-level tools** and authorization",
          "**6. Monitor usage** and expand based on real requests",
        ],
      },
      {
        heading: "Example: From API Endpoints to MCP Tools",
        body: [
          "A typical project management API exposes resource-oriented endpoints. A good MCP server turns them into a few task-oriented tools that match what users ask an assistant to do.",
        ],
        table: {
          headers: ["API endpoints", "MCP tool", "Why"],
          rows: [
            ["GET /projects, GET /projects/{id}/tasks?due_before=", "find_tasks_due(project?, before_date)", "Matches a common question in one call"],
            ["POST /projects/{id}/tasks", "create_task(project, title, due_date, assignee?)", "Narrow write with validation"],
            ["GET /users/me, GET /tasks?assignee=", "list_my_open_tasks()", "Uses the caller's identity, no user ID guessing"],
            ["PATCH /tasks/{id}", "complete_task(task_id)", "Exposes only the safe change"],
            ["DELETE /projects/{id}", "Not exposed", "Destructive; keep out of AI reach"],
          ],
        },
      },
      {
        heading: "Performance and Cost Considerations",
        body: [
          "Every tool description is sent to the model, so dozens of verbose tools consume context and increase cost and tool-selection errors. Keep descriptions concise, return compact results rather than full API payloads, and support pagination or filters so the model does not pull thousands of records. The 2026-07-28 specification adds cache hints to list results, which helps clients avoid re-fetching tool lists unnecessarily.",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a project management SaaS already has a REST API used by partners. Customers ask to use it from their AI assistants. The company adds a remote MCP server with tools such as 'find tasks due this week' and 'create task in project', calling the existing API with the user's delegated permissions. The API remains unchanged and the source of all rules.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Claiming MCP replaces APIs and moving business logic into tool code",
          "Mirroring every endpoint as a tool",
          "Different permission rules in MCP and the API",
          "Token passthrough",
        ],
        cta: {
          title: "Planning AI access to your platform?",
          description: "Talk to ZSpace Labs about [[/services/website-development|API development]] and [[/services/ai-automation|MCP server development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "APIs and MCP are layers, not rivals. Keep the API as the source of truth and add MCP where AI clients need standard access. Related: [[/blogs/model-context-protocol|MCP guide]], [[/blogs/how-to-build-an-mcp-server|build an MCP server]] and [[/blogs/ai-api-integration|AI API integration]].",
          "For the wider integration decision, including webhooks and RPA, see [[/blogs/ai-automation-integration-options|AI automation integration: APIs, webhooks, MCP or RPA]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 594 · MCP SECURITY
  {
    slug: "mcp-security",
    title: "MCP Security: How to Secure AI Tools, Servers and Data Access",
    seoTitle: "MCP Security: Authorization, Tokens, Tools and Servers",
    excerpt:
      "How to secure Model Context Protocol deployments: OAuth-based authorization, audience-bound tokens, no token passthrough, least-privilege tools, consent, tool poisoning, prompt injection, local server risks and audit trails.",
    category: "AI & Automation",
    banner: "mcpthreats",
    bannerAlt:
      "MCP security in four columns: identity highlighted (audience checks, no passthrough, scopes, short-lived tokens), tools (poisoned descriptions, over-broad tools, approvals, argument validation), data (injection in results, least data, tenant isolation, redaction) and supply chain (untrusted servers, pinned versions, local execution risk, review).",
    date: "2026-10-02",
    updated: "2026-10-08",
    readingTime: "8 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["saas-technology", "fintech", "cybersecurity"],
    relatedSlugs: ["model-context-protocol", "prompt-injection-prevention", "ai-agent-guardrails"],
    faqs: [
      { q: "What are the main security risks with MCP?", a: "Token misuse (accepting tokens meant for other services or passing tokens through), over-broad tools, malicious or compromised servers, tool descriptions crafted to manipulate models, prompt injection through tool results, local servers with excessive system access, and missing audit trails." },
      { q: "How does MCP authorization work?", a: "Remote servers publish OAuth protected resource metadata; clients discover the authorization server, use the authorization code flow with PKCE and request tokens for the specific MCP server using the resource parameter; servers validate the token's audience and scopes on every request." },
      { q: "What is token passthrough and why is it forbidden?", a: "Forwarding the token a client sent to the MCP server on to another API. The MCP specification forbids it because it bypasses audience checks and lets a token reach services it was never meant for. Servers must obtain separate tokens for upstream APIs." },
      { q: "What is the confused deputy problem in MCP?", a: "When an MCP server acting as a proxy to a third-party API is tricked into using its own authority on behalf of an attacker. The specification requires proxy servers using static client IDs to obtain user consent for each dynamically registered client." },
      { q: "What is tool poisoning?", a: "Hiding malicious instructions in tool names, descriptions or results so the model takes unintended actions, such as exfiltrating data through another tool. Review server metadata and treat tool output as untrusted." },
      { q: "Are local MCP servers safe?", a: "Local stdio servers run with the user's permissions on their machine, so an untrusted server can access files and credentials. Install only trusted servers, pin versions and review what each server can access." },
      { q: "Should users approve MCP tool calls?", a: "For actions that write, send or spend, yes. Hosts commonly ask for approval; servers should also enforce their own permissions and limits rather than relying on the host." },
      { q: "How do you audit MCP usage?", a: "Log every request with the authenticated user, client, tool, arguments (redacted where needed), result status and time, and trace calls through to upstream APIs." },
      { q: "Where can I find official MCP security guidance?", a: "The MCP specification's authorization and security considerations documents and the security best practices guide on modelcontextprotocol.io." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Securing MCP means getting identity, tools, data and supply chain right. For remote servers, follow the specification's OAuth 2.1-based authorization: PKCE with S256, the resource parameter so tokens are bound to your server, strict audience and scope validation on every request, short-lived tokens and no token passthrough to upstream APIs. Expose narrow, least-privilege tools with validated arguments and approvals for consequential actions, treat tool descriptions and results as untrusted input, install only vetted servers and pin versions, isolate tenants and log every call.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "MCP basics are in [[/blogs/model-context-protocol|the MCP guide]] and implementation in [[/blogs/how-to-build-an-mcp-server|how to build an MCP server]]. Injection attacks generally are covered in [[/blogs/prompt-injection-prevention|prompt injection prevention]], and agent-level controls in [[/blogs/ai-agent-guardrails|AI agent guardrails]].",
        ],
      },
      {
        heading: "The MCP Threat Model",
        body: [],
        table: {
          headers: ["Threat", "Example", "Primary control"],
          rows: [
            ["Token misuse", "Server accepts a token issued for another service", "Audience validation"],
            ["Token passthrough", "Server forwards client token to an upstream API", "Separate upstream credentials"],
            ["Confused deputy", "Proxy server uses its authority for an attacker", "Per-client user consent"],
            ["Over-broad tools", "A 'run SQL' tool reachable by any user", "Narrow tools, least privilege"],
            ["Tool poisoning", "Malicious instructions in tool descriptions", "Vetted servers, metadata review"],
            ["Injection via results", "Retrieved document tells the model to exfiltrate data", "Treat results as data, limit tools"],
            ["Malicious local server", "Installed package reads local credentials", "Trusted sources, pinned versions, sandboxing"],
          ],
        },
      },
      {
        heading: "Authorization Done Right",
        body: [
          "The MCP authorization security considerations set clear requirements. Clients must use PKCE (with S256 where possible) and include the resource parameter defined in RFC 8707, so tokens are bound to the intended MCP server. Servers must validate that every token was issued specifically for them and reject others. Servers that call upstream APIs act as their own OAuth clients and must not pass through the token they received. Authorization servers should issue short-lived tokens and rotate refresh tokens for public clients, and clients must validate the issuer parameter to prevent mix-up attacks.",
        ],
        diagram: {
          variant: "mcpauthflow",
          alt: "MCP authorization flow: client calls, server returns 401 with resource metadata, client discovers the authorization server, OAuth with PKCE, token issued for this server, server validates audience (highlighted).",
          caption: "Audience validation on every request is the control that stops tokens being reused against the wrong service.",
        },
      },
      {
        heading: "Client Registration and Consent",
        body: [
          "The 2026-07-28 revision prefers Client ID Metadata Documents for client registration and deprecates Dynamic Client Registration (still allowed for compatibility). Authorization servers fetching client metadata should guard against server-side request forgery, warn on localhost-only redirect URIs and clearly show the redirect host during consent. MCP proxy servers that use a static client ID with third-party authorization servers must obtain user consent for each dynamically registered client, which prevents the confused deputy problem.",
        ],
      },
      {
        heading: "Tool Design and Least Privilege",
        body: [
          "Framework-neutral guidance for function calling is in [[/blogs/ai-tool-security|AI tool security]], and agent identities in [[/blogs/ai-agent-access-control|AI agent access control]].",
        ],
        checklist: [
          "Expose task-level tools, not generic query or command execution",
          "Separate read and write tools, with different scopes",
          "Validate every argument against strict schemas and business rules",
          "Enforce permissions server-side using the authenticated user's identity",
          "Require approval for actions that send, spend, delete or change customer-facing data",
          "Rate-limit per user and tool",
          "Return minimal data in results, redacting sensitive fields",
        ],
        cta: {
          title: "Exposing systems to AI clients through MCP?",
          description: "ZSpace Labs builds and reviews MCP servers against the current specification's authorization and security requirements.",
        },
      },
      {
        heading: "Prompt Injection and Tool Poisoning",
        body: [
          "Models read tool descriptions and tool results, and both can carry instructions. A malicious server can hide directives in descriptions; a document or web page returned by a tool can tell the model to call another tool with sensitive data. Hosts should show users which servers and tools are active and ask for approval on sensitive calls; servers should never assume the model's request reflects the user's intent. Limit what any single model session can do across servers. See [[/blogs/prompt-injection-prevention|prompt injection prevention]].",
        ],
      },
      {
        heading: "Supply Chain and Local Servers",
        body: [
          "Local stdio servers run as processes with the user's permissions. Install servers only from trusted publishers, review their code or provenance, pin versions, and update deliberately. In organizations, maintain an approved list of servers and block others. Consider sandboxing local servers with restricted file system and network access.",
        ],
      },
      {
        heading: "Data Protection and Tenant Isolation",
        body: [
          "Multi-tenant MCP servers must scope every query to the authenticated tenant and user. Minimize the data returned to models, which may be sent to third-party model providers. Respect data residency requirements and document which data flows through MCP in your privacy records.",
        ],
      },
      {
        heading: "Logging, Monitoring and Incident Response",
        body: [
          "Log every request: authenticated user, client, tool, arguments (redacted), result status, latency and upstream calls, with trace context. Alert on unusual patterns such as bursts of write calls, access across tenants or repeated authorization failures. Be able to revoke tokens, disable tools and block clients quickly.",
        ],
      },
      {
        heading: "Advantages and Limitations of MCP's Security Model",
        body: [
          "MCP's specification gives remote servers a clear, standards-based authorization model, which is better than ad hoc API keys pasted into assistants. It cannot stop a model from being manipulated, a user from approving a harmful action, or a malicious local server from abusing the permissions it runs with. Defence in depth (narrow tools, server-side permissions, approvals, monitoring) is still required.",
        ],
      },
      {
        heading: "MCP Security Checklist",
        body: [],
        checklist: [
          "**1. Implement authorization per the current specification** for remote servers",
          "**2. Validate audience and scopes** on every request; no token passthrough",
          "**3. Design narrow, least-privilege tools** with schema validation",
          "**4. Enforce permissions and limits server-side**",
          "**5. Require approvals** for consequential actions",
          "**6. Vet and pin servers**, especially local ones",
          "**7. Isolate tenants and minimize data**",
          "**8. Log, monitor and rehearse revocation**",
        ],
      },
      {
        heading: "Hardening Local MCP Servers",
        body: [],
        checklist: [
          "Install only from trusted publishers and pinned versions; review changes on upgrade",
          "Run with the least file system and network access possible (containers or OS sandboxing)",
          "Never embed long-lived high-privilege tokens in local configuration files",
          "Prefer read-only modes where servers offer them",
          "Review what each server's tools can do before enabling them in an assistant",
          "Remove servers that are no longer used",
        ],
      },
      {
        heading: "Governance: An Approved Server Catalogue",
        body: [
          "Organizations should keep a catalogue of approved MCP servers with owner, purpose, data classes, tools, authentication method and permitted clients, and block or warn on unapproved servers on managed devices. New servers go through a light security review: who publishes it, what it can access, how it authenticates, whether it passes tokens through and how it logs. This is the MCP equivalent of approving browser extensions or SaaS integrations; see [[/blogs/ecommerce-security-audit|security review practices]] for the general approach.",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a company's internal MCP server for HR data initially accepted any valid token from its identity provider. A review finds tokens issued for other internal apps work too. The team adds audience validation, per-tool scopes (employees can read only their own records, HR staff can read their department) and logging, and removes a generic search tool that could reach salary fields.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Accepting tokens without audience checks",
          "Passing user tokens to upstream APIs",
          "Generic tools with broad data access",
          "Installing community servers without review",
          "No approval for write actions",
          "No logs of tool calls",
        ],
        cta: {
          title: "Want an MCP security review?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|secure MCP and agent development]] and [[/services/website-development|identity and API security]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "MCP security is standard security applied carefully to a new kind of client: audience-bound tokens, no passthrough, least-privilege tools, untrusted inputs, vetted servers and full audit trails. Related: [[/blogs/model-context-protocol|MCP guide]], [[/blogs/prompt-injection-prevention|prompt injection prevention]] and [[/blogs/ai-agent-guardrails|guardrails]].",
          "Securing each server is half the job; deciding which servers people and agents may use at all is the other. See [[/blogs/mcp-governance|MCP governance]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 595 · AI API INTEGRATION
  {
    slug: "ai-api-integration",
    title: "AI API Integration: How to Connect AI Models to Business Applications",
    seoTitle: "AI API Integration: Backend Patterns and Best Practices",
    excerpt:
      "How to integrate AI model APIs into business applications: backend architecture, key management, prompt and context building, structured outputs, streaming, rate limits, retries, fallbacks, costs and monitoring.",
    category: "AI & Automation",
    banner: "aiapiintegration",
    bannerAlt:
      "AI API integration in four columns: request (authenticate user, build context, trim tokens, idempotency), model call (server-side key, streaming, timeouts, retries), response highlighted (schema check, business rules, store, show user) and operations (usage and cost, rate limits, fallbacks, evaluations).",
    date: "2026-10-02",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ai-automation", "website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["saas-technology", "fintech", "ecommerce"],
    relatedSlugs: ["llm-gateway", "llm-routing", "mcp-vs-api"],
    faqs: [
      { q: "How do I integrate an AI model into my application?", a: "Call the model provider's API from your backend, not from the browser or app, with your own service handling authentication, prompt and context building, structured output validation, error handling, logging and cost tracking." },
      { q: "Why should AI API calls go through the backend?", a: "So secret API keys are never exposed, users are authenticated and rate-limited, inputs and outputs can be validated and logged, and providers can be swapped without changing clients." },
      { q: "What are structured outputs?", a: "A feature offered by major providers that constrains model responses to a JSON schema, so your code receives predictable fields. Values still need validation." },
      { q: "Should I stream model responses?", a: "For chat and long text, streaming improves perceived speed. For structured outputs consumed by code, waiting for the full validated response is often simpler." },
      { q: "How do I handle rate limits?", a: "Retry 429 responses with exponential backoff and jitter, respect retry-after headers, queue non-urgent work, set per-user limits and consider fallback models or providers." },
      { q: "How do I control AI API costs?", a: "Track tokens per request and feature, trim context, set output limits, use smaller models where evaluations allow, cache where safe, use batch APIs for offline work and set budgets with alerts." },
      { q: "Which OpenAI API should new projects use?", a: "OpenAI recommends the Responses API for new development; the Assistants API was retired on 26 August 2026." },
      { q: "How should prompts be managed?", a: "Keep them versioned in code or configuration, test changes against an evaluation set and record the version used for each request." },
      { q: "What about data privacy?", a: "Send only necessary data, check providers' data retention and training policies and regions, apply enterprise or zero-retention options where needed, and document processing in your privacy records." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Integrate AI models through your backend. A dedicated AI service authenticates the user, builds the prompt and context (retrieved data, conversation, instructions) within a token budget, calls the model API with a server-side key, timeouts and retries, validates structured outputs against schemas and business rules, then stores and returns the result. Around it, track tokens and cost per feature, enforce rate limits, plan fallbacks for provider errors, version prompts and evaluate changes. Never call model APIs with secret keys from browsers or mobile apps.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Once several apps or providers are involved, an [[/blogs/llm-gateway|LLM gateway]] centralizes access, and [[/blogs/llm-routing|LLM routing]] picks models per task. Connecting AI clients to your systems (the reverse direction) is covered in [[/blogs/mcp-vs-api|MCP vs API]]. General API integration practice is in [[/blogs/website-api-integration|website API integration]] and [[/blogs/mobile-app-api-integration|mobile app API integration]].",
        ],
      },
      {
        heading: "Reference Architecture",
        body: [],
        table: {
          headers: ["Component", "Responsibility"],
          rows: [
            ["Client (web, mobile, internal tool)", "Sends user requests; never holds model API keys"],
            ["AI service in your backend", "Auth, context building, model calls, validation"],
            ["Context sources", "Database records, retrieval index, user profile"],
            ["Model provider(s)", "Generation, embeddings, speech"],
            ["Gateway (optional)", "Shared routing, limits, logging across apps"],
            ["Observability", "Traces, token usage, cost, errors, evaluations"],
          ],
        },
        diagram: {
          variant: "aiapiflow",
          alt: "AI API request flow: app request, prompt and context, model call with streaming, validate schema (highlighted), store and respond, log usage; a branch shows 429 or 5xx errors handled with backoff or fallback.",
          caption: "Validation sits between the model's output and anything your application does with it.",
        },
      },
      {
        heading: "Choosing the Right Provider API",
        body: [
          "Use each provider's current recommended interface: OpenAI recommends the Responses API (the Assistants API was retired on 26 August 2026); Anthropic offers the Messages API with tool use and structured outputs; Google offers the Gemini API. Wrap provider SDKs behind your own interface so switching or adding providers does not touch business code.",
        ],
      },
      {
        heading: "Building Prompts and Context",
        body: [
          "Separate the parts: system instructions (versioned), task input, retrieved context and conversation history. Set a token budget and trim lowest-value context first. Clearly mark untrusted content (user input, documents) as data. Prompt caching features offered by providers reduce cost and latency when large stable prefixes repeat; order prompts so stable content comes first.",
        ],
      },
      {
        heading: "Structured Outputs and Validation",
        body: [
          "When code consumes the result, use schema-constrained outputs (available from major providers) and validate values with business rules. On failure, retry once with the validation error or fall back to a review path. For free-text responses shown to users, apply content checks proportionate to the risk.",
        ],
        code: {
          label: "Example: backend call with schema validation and retries (pseudocode)",
          text: "async function classifyTicket(ticket, user) {\n  authorize(user, \"tickets:classify\")\n  const input = buildPrompt({ instructions: PROMPT_V7, ticket: asUntrusted(ticket.text) })\n  const res = await withRetry(() => model.respond({\n    model: config.models.classify,\n    input,\n    output_schema: TicketClassification,\n    max_output_tokens: 300,\n    timeout_ms: 15000,\n  }), { retryOn: [429, 500, 503], maxAttempts: 3, backoff: \"exponential+jitter\" })\n  const result = TicketClassification.parse(res.output)  // validation\n  enforceRules(result)                                  // business rules\n  logUsage({ feature: \"ticket_classify\", tokens: res.usage, promptVersion: \"v7\" })\n  return result\n}",
        },
        cta: {
          title: "Adding AI features to an existing product?",
          description: "ZSpace Labs builds backend AI services with validation, cost tracking and fallbacks, integrated with your web and mobile apps.",
        },
      },
      {
        heading: "Streaming",
        body: [
          "Streaming tokens to the client makes chat and long text feel fast. Stream through your backend (for example with server-sent events) so you keep control of authentication and logging. For structured outputs that drive actions, validate the complete response before acting. Handle client disconnects so you stop paying for unused generation where the provider allows cancellation.",
        ],
      },
      {
        heading: "Rate Limits, Retries and Fallbacks",
        body: [],
        checklist: [
          "Retry 429 and transient 5xx errors with exponential backoff and jitter",
          "Respect retry-after headers",
          "Set timeouts per call and per user request",
          "Queue non-urgent work and use batch APIs where available",
          "Apply per-user and per-tenant rate limits in your service",
          "Fall back to another model or provider for critical paths, with evaluated quality",
          "Degrade gracefully: show a clear message instead of a spinner that never ends",
        ],
      },
      {
        heading: "Security and Privacy",
        body: [
          "Keep keys in a secrets manager and rotate them. Authenticate and authorize every request. Minimize data sent to providers, check retention and training policies and regions, and use enterprise data controls where needed. Treat model output as untrusted when it is used in queries, HTML or commands, to avoid injection into downstream systems.",
        ],
      },
      {
        heading: "Monitoring and Cost Control",
        body: [
          "Log model, prompt version, tokens, latency, errors and cost for every call, attributed to feature and customer. Set budgets and alerts. Review the most expensive features monthly and apply [[/blogs/llm-cost-optimization|cost optimization]] levers. Re-run evaluations when providers update models.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "A clean AI integration layer lets you add AI features quickly, swap models as they improve and keep control of cost and data. The limits are provider dependence, variable latency, non-deterministic outputs and costs that scale with usage. Design for those from the start.",
        ],
      },
      {
        heading: "How to Integrate Step by Step",
        body: [],
        checklist: [
          "**1. Define the feature's input, output schema and success criteria**",
          "**2. Build a backend AI service** with a provider-neutral interface",
          "**3. Implement context building** with token budgets",
          "**4. Add structured outputs and validation**",
          "**5. Add retries, timeouts and fallbacks**",
          "**6. Add logging, cost tracking and alerts**",
          "**7. Evaluate on real examples** before launch and on every change",
        ],
      },
      {
        heading: "Testing AI Integrations",
        body: [
          "Unit tests can mock the model client to check prompt construction, validation and error handling deterministically. Evaluation tests call the real model with a fixed set of inputs and score outputs, run on every prompt or model change. Contract tests confirm that structured outputs still match the schema your code expects. Load tests check behaviour under rate limits. Record model versions in test reports, because provider updates can change behaviour without any code change on your side. See [[/blogs/ai-agent-evaluation|AI evaluation]].",
        ],
      },
      {
        heading: "Web and Mobile Considerations",
        body: [
          "Clients should call your backend, which calls the model. For streaming in browsers, use server-sent events or WebSockets from your backend; for mobile apps, handle interrupted connections and resume gracefully. Show progress states for longer operations, let users cancel, and design for failure with clear messages and retry options. Cache results the user is likely to revisit. For realtime voice in apps, providers offer WebRTC-based options; see [[/blogs/voice-ai-agent-development|voice AI agent development]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a mobile app calls a model API directly with a key embedded in the app, which is extracted and abused. The team moves calls to a backend AI service with user authentication and per-user limits, rotates the key, adds schema validation for the app's structured responses and gains per-feature cost reporting for the first time.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "API keys in front-end or mobile code",
          "Parsing free text instead of using structured outputs",
          "No timeouts or retry strategy",
          "No cost attribution",
          "Unversioned prompts",
          "Using model output directly in SQL, HTML or shell commands",
        ],
        cta: {
          title: "Need a dependable AI integration layer?",
          description: "Talk to ZSpace Labs about [[/services/website-development|backend and API development]], [[/services/mobile-app-development|AI features in mobile apps]] and [[/services/ai-automation|AI automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Treat model APIs like any critical dependency: call them from the backend, validate outputs, handle failures, track cost and test changes. Related: [[/blogs/llm-gateway|LLM gateway]], [[/blogs/llm-routing|LLM routing]] and [[/blogs/llm-cost-optimization|LLM cost optimization]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 596 · LLM GATEWAY
  {
    slug: "llm-gateway",
    title: "LLM Gateway: How to Manage Multiple AI Models Through One Interface",
    seoTitle: "LLM Gateway: Routing, Budgets and Provider Abstraction",
    excerpt:
      "What an LLM gateway does: one interface to multiple model providers, authentication, routing and fallbacks, rate limits and budgets, logging, data policies, caching and when to build or buy one.",
    category: "AI & Automation",
    banner: "llmgateway",
    bannerAlt:
      "LLM gateway in four columns: apps (web, internal tools, agents, batch jobs), gateway highlighted (one API, authentication, routing, logging), policies (budgets, rate limits, PII rules, model allow-list) and providers (provider A, provider B, self-hosted, fallbacks).",
    date: "2026-10-02",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise", "fintech"],
    relatedSlugs: ["llm-routing", "ai-api-integration", "llm-cost-optimization"],
    faqs: [
      { q: "What is an LLM gateway?", a: "A service that sits between your applications and AI model providers, offering one interface for model calls while handling authentication, routing, fallbacks, rate limits, budgets, logging and data policies centrally." },
      { q: "Why use an LLM gateway?", a: "To avoid every team integrating providers separately, to control cost and access centrally, to switch or add models without changing applications, and to have one place for logging and compliance." },
      { q: "Is an LLM gateway the same as an API gateway?", a: "It is similar in role but specialised for model traffic: token-based usage and cost, streaming, provider-specific formats, model routing and AI data policies." },
      { q: "Can an LLM gateway route between models?", a: "Yes. Gateways commonly support routing by task, user or cost, and fallback to another model or provider on errors. Smarter routing should be backed by evaluations." },
      { q: "Does a gateway add latency?", a: "A small amount for most deployments. Measure it, especially for real-time voice and chat, and deploy the gateway close to applications." },
      { q: "Should we build or buy an LLM gateway?", a: "Open-source and managed gateways cover common needs. Build when you have unusual policy, residency or integration requirements, or when the gateway is part of your product." },
      { q: "Can a gateway enforce data policies?", a: "It can redact or block sensitive data patterns, restrict which models handle which data classes and enforce regional routing, as long as policies are defined clearly." },
      { q: "Does a gateway store prompts?", a: "Many log requests and responses for debugging and audit. Configure redaction, access controls and retention to match your privacy obligations." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An LLM gateway is a service between your applications and model providers. Applications call one interface; the gateway authenticates them, applies policies (allowed models, data rules, rate limits, budgets), routes the request to the right provider or model, falls back when a provider fails, and logs tokens, cost and latency for every call. It pays off once several teams, applications or providers are involved, giving central control without each team rebuilding the same plumbing.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Single-application integration is covered in [[/blogs/ai-api-integration|AI API integration]]. Deciding which model handles which request is [[/blogs/llm-routing|LLM routing]], and reducing spend is [[/blogs/llm-cost-optimization|LLM cost optimization]]. The equivalent pattern for commerce APIs is in [[/blogs/ecommerce-api-gateway|ecommerce API gateway]].",
          "How a gateway fits into shared infrastructure for many teams is covered in [[/blogs/ai-platform-engineering|AI platform engineering]].",
        ],
      },
      {
        heading: "What an LLM Gateway Does",
        body: [],
        table: {
          headers: ["Function", "What it covers"],
          rows: [
            ["Unified interface", "One API format for many providers and models"],
            ["Authentication", "Per-application keys or identity; provider keys stay central"],
            ["Routing and fallback", "Choose models per request; fail over on errors"],
            ["Limits and budgets", "Rate limits, token quotas and spending caps per team or app"],
            ["Policies", "Allowed models per data class, redaction, regional routing"],
            ["Observability", "Logs, traces, tokens, cost and latency per call"],
            ["Caching", "Response or semantic caching where safe"],
          ],
        },
      },
      {
        heading: "How Requests Flow",
        body: [],
        diagram: {
          variant: "gatewayflow",
          alt: "Gateway request flow: application call, authentication and quota, route (highlighted), provider call, log usage and cost, response; a branch shows fallback when a provider is down.",
          caption: "Routing and fallback live in one place instead of every application.",
        },
      },
      {
        heading: "Routing and Fallbacks",
        body: [
          "Gateways typically route by configuration: this application or task uses this model, with a fallback list. More advanced routing considers cost, latency or request type; see [[/blogs/llm-routing|LLM routing]]. Fallbacks protect availability, but a fallback model may behave differently, so evaluate quality on the fallback path and avoid silently switching for tasks where consistency matters.",
        ],
      },
      {
        heading: "Cost Control and Budgets",
        body: [
          "Because every call passes through it, the gateway is the natural place for cost control: attribute tokens and cost to teams, applications and features; set budgets with alerts or hard limits; block unapproved expensive models; and report trends. This is often the first measurable benefit.",
        ],
        cta: {
          title: "AI usage spreading across teams without visibility?",
          description: "ZSpace Labs can set up an LLM gateway with routing, budgets, logging and data policies across your applications and providers.",
        },
      },
      {
        heading: "Data Governance and Security",
        body: [
          "Define data classes and which models and regions may process each. The gateway can enforce those rules, redact patterns such as card numbers or IDs before requests leave, and keep provider keys out of applications. Logs contain sensitive data, so restrict access, redact and set retention. Keep the gateway itself highly available and secured like any critical service.",
        ],
      },
      {
        heading: "Caching",
        body: [
          "Exact-match response caching helps with repeated identical requests such as fixed prompts. Semantic caching (reusing answers for similar requests) can save more but risks returning answers that do not fit the new request; use it only where that risk is acceptable. Provider-side prompt caching reduces cost for repeated prompt prefixes and is separate from gateway caching.",
        ],
      },
      {
        heading: "Build or Buy",
        body: [],
        table: {
          headers: ["Option", "Fits", "Trade-offs"],
          rows: [
            ["Open-source gateway, self-hosted", "Teams wanting control and no extra vendor", "You operate and secure it"],
            ["Managed gateway service", "Fast start, many providers", "Another vendor in the data path"],
            ["Cloud platform model services", "Teams standardised on one cloud", "Less multi-provider flexibility"],
            ["Custom gateway", "Unusual policies or product-embedded needs", "Build and maintenance effort"],
          ],
        },
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "A gateway centralizes control, visibility and flexibility. It also adds a component in the critical path (latency and availability risk), can lag behind providers' newest features, and normalizing formats across providers can hide useful provider-specific options. Keep an escape hatch for features the gateway does not yet support.",
        ],
      },
      {
        heading: "How to Introduce a Gateway Step by Step",
        body: [],
        checklist: [
          "**1. Inventory current model usage** by team, application and provider",
          "**2. Define policies:** allowed models, data classes, budgets",
          "**3. Choose build or buy** and deploy close to applications",
          "**4. Migrate one application** and compare latency and behaviour",
          "**5. Add routing and fallbacks** with evaluated quality",
          "**6. Turn on cost attribution and alerts**",
          "**7. Migrate remaining applications** and remove direct provider keys",
        ],
      },
      {
        heading: "Gateway Feature Checklist",
        body: [],
        checklist: [
          "Support for the providers and models you use, including streaming and tool calling",
          "Per-application keys or identity integration",
          "Routing rules and fallbacks with clear logging",
          "Budgets, quotas and rate limits per team, app or customer",
          "Redaction and data-class policies, regional routing",
          "Logs, traces and cost reports exportable to your observability stack",
          "Pass-through for provider-specific features when needed",
          "High availability, low added latency and a clear upgrade path",
        ],
      },
      {
        heading: "Placement and Latency",
        body: [
          "Deploy the gateway close to the applications that call it and in regions that match your data residency needs. Measure the added latency, especially time to first token for streaming. For voice and other real-time uses, consider direct provider connections with central policy enforcement elsewhere if the gateway adds too much delay. Run at least two instances behind a load balancer; a gateway outage takes every AI feature down with it.",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a company has six teams calling two model providers with separate keys. Monthly costs are unclear and one key leaks in a repository. A gateway centralizes keys, gives each team a budget and dashboard, routes classification tasks to a smaller model and provides a fallback provider for the customer-facing assistant. The leaked key is rotated and direct access removed.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Silent fallbacks to models that behave differently",
          "Logging full prompts with no redaction or retention policy",
          "A single gateway instance with no redundancy",
          "Normalizing away provider features you need",
          "Budgets without alerts",
        ],
        cta: {
          title: "Ready to centralize how your teams use AI models?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|LLM gateway and AI platform setup]] and [[/services/website-development|backend infrastructure]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "An LLM gateway gives one controlled path to many models: central keys, policies, routing, budgets and logs. Add it when usage spreads beyond one application. Related: [[/blogs/llm-routing|LLM routing]], [[/blogs/ai-api-integration|AI API integration]] and [[/blogs/llm-cost-optimization|cost optimization]].",
        ],
      },
    ],
  },
];
