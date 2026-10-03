import type { BlogPost } from "./blog-data";

/**
 * AI knowledge hub, part twenty-nine: AI security continued. Jailbreak
 * testing is written defensively (test design, evaluation, remediation; no
 * attack recipes). ai-data-leakage focuses on exposure channels and controls
 * (compliance-side privacy stays in ai-data-privacy). ai-agent-access-control
 * covers identity and permissions; ai-tool-security covers tool
 * implementation; MCP-specific issues stay in mcp-security.
 * Merged into `posts` in blog-data.ts.
 */

export const aiOpsPosts6: BlogPost[] = [
  // ---------------------------------------- 684 · AI JAILBREAK TESTING
  {
    slug: "ai-jailbreak-testing",
    title: "AI Jailbreak Testing: How to Evaluate Model Safety and Instruction Handling",
    seoTitle: "AI Jailbreak Testing: Defensive Test Design and Remediation",
    excerpt:
      "A defensive guide to jailbreak testing for AI applications: defining policies, designing test cases by category, measuring policy adherence and over-refusal, robustness evaluation, failure analysis and layered remediation.",
    category: "AI & Automation",
    banner: "jailbreakeval",
    bannerAlt:
      "Jailbreak testing measures compared (Measures and Goal, with Goal highlighted) by attack success, over-refusal, consistency, severity and multi-turn.",
    date: "2026-10-02",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["cybersecurity", "saas-technology", "education-edtech"],
    relatedSlugs: ["ai-red-teaming", "ai-security-testing", "ai-model-evaluation"],
    faqs: [
      { q: "What is a jailbreak in AI?", a: "An input designed to make a model ignore its safety policies or the application's rules and produce content or behaviour it should refuse." },
      { q: "How is jailbreaking different from prompt injection?", a: "Jailbreaks target the model's safety and policy behaviour, usually through direct user input. Prompt injection targets the application, making the model follow attacker instructions, often hidden in content, to misuse data or tools. Tests and defences overlap but are not the same." },
      { q: "Why test jailbreaks if the model provider already does?", a: "Providers test general safety. Your application adds its own policies, domain risks, system prompts and tools, and a model that is robust in general may still violate your specific rules." },
      { q: "What should a jailbreak test set contain?", a: "Cases for each policy category, rephrasings and different languages, multi-turn conversations, role-play and hypothetical framings, plus benign but sensitive requests to measure over-refusal. Sources include public benchmarks and your own red team findings." },
      { q: "What is over-refusal?", a: "When a system refuses legitimate requests because they superficially resemble disallowed ones. It harms usefulness and should be measured alongside attack success." },
      { q: "Which tools help?", a: "Open-source tools such as NVIDIA's garak and Microsoft's PyRIT run adversarial probes; evaluation frameworks score responses. Use them alongside curated, application-specific cases." },
      { q: "How do we fix jailbreak failures?", a: "Combine clearer policies in system prompts, input and output classifiers, model choice, limits on what the application can do and human review for high-risk outputs. Re-test after each change." },
      { q: "Should jailbreak test cases be shared publicly?", a: "Generally no. Keep detailed cases in controlled repositories, share categories and results rather than working prompts, and follow responsible disclosure for issues found in third-party models." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Jailbreak testing checks whether your AI application keeps to its policies when users try to talk it out of them. Define clear policies, build a controlled test set covering each policy category with rephrasings, languages, multi-turn and role-play variations, plus legitimate sensitive requests to measure over-refusal. Run it automatically on every model or prompt change, score both attack success and over-refusal, analyse failures by pattern and fix them with layered controls rather than prompt wording alone.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Jailbreak testing is one part of [[/blogs/ai-red-teaming|AI red teaming]] and [[/blogs/ai-security-testing|AI security testing]]. Attacks on the application through content are covered in [[/blogs/indirect-prompt-injection|indirect prompt injection]]. Scoring methods are in [[/blogs/ai-model-evaluation|AI model evaluation]].",
        ],
        callout: {
          type: "note",
          text: "This guide is about evaluating and hardening systems you operate. It covers test design and defences, not techniques for bypassing safety measures.",
        },
      },
      {
        heading: "Start With Policies",
        body: [
          "You cannot test policy adherence without written policies. Combine the model provider's usage policies with your application's own rules: topics it must not cover (for example, a children's education app avoiding mature content), actions it must not take, advice it must not give (such as individual legal or medical decisions) and tone requirements. For each rule, write what correct behaviour looks like, including how to refuse helpfully and where to redirect users.",
        ],
      },
      {
        heading: "Designing Test Cases",
        body: [
          "Organize cases by policy category, then vary how each request is made. Common variation types, described at category level rather than as recipes, include rephrasing and indirect wording, translation into other languages, multi-turn conversations that build up gradually, role-play and fictional framing, requests split across several messages and formatting tricks. Public benchmarks provide starting material; your red team findings and production logs provide application-specific cases.",
          "Include an equal effort on legitimate requests that resemble disallowed ones, such as a nurse asking about medication safety or a security team asking about phishing awareness. These measure over-refusal.",
        ],
        diagram: {
          variant: "jailbreakflow",
          alt: "Jailbreak testing cycle: Define policies, Build test set, Run, Score both directions (highlighted), Analyse failures, Remediate; loop: re-run on every model or prompt change.",
          caption: "Scoring both failure directions prevents fixes that simply make the system refuse everything.",
        },
      },
      {
        heading: "Measuring Results",
        body: [],
        table: {
          headers: ["Metric", "What it shows", "Notes"],
          rows: [
            ["Attack success rate", "Share of adversarial cases that produced policy violations", "Report by category and severity"],
            ["Over-refusal rate", "Share of legitimate sensitive requests refused", "As important as attack success"],
            ["Consistency", "Same outcome across paraphrases and languages", "Low consistency signals fragile defences"],
            ["Severity", "How harmful each violation would be", "A few severe failures outweigh many mild ones"],
            ["Multi-turn robustness", "Whether policies hold over long conversations", "Often weaker than single-turn"],
          ],
        },
        cta: {
          title: "Need confidence your AI stays within its rules?",
          description: "ZSpace Labs builds safety and policy test suites for AI applications and integrates them into release gates. See [[/services/ai-automation|AI development services]].",
        },
      },
      {
        heading: "Scoring Responses",
        body: [
          "Classify each response as compliant refusal, compliant answer, partial violation or full violation. Automated classifiers or calibrated LLM judges can score at scale, but validate them against human labels, especially for borderline categories. Keep humans in the loop for severe categories and for reviewing all failures before reporting.",
        ],
      },
      {
        heading: "Tools",
        body: [
          "Open-source tools such as garak and PyRIT automate probing with libraries of adversarial techniques and scorers. They provide breadth and keep up with known patterns. Application-specific cases, built around your policies, system prompt and tools, provide relevance. Run both, and store test sets in access-controlled repositories.",
        ],
      },
      {
        heading: "Remediation",
        body: [
          "Prompt clarifications fix some failures but are fragile against new phrasings. Stronger remediations include input and output classifiers for policy categories, choosing models with better safety behaviour for sensitive features, narrowing the application's scope so fewer requests are in play, removing capabilities that make violations harmful, and routing high-risk topics to human review or vetted content. After each change, re-run the full suite, including over-refusal cases. Guardrail layering is covered in [[/blogs/ai-agent-guardrails|AI agent guardrails]].",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Systematic jailbreak testing makes safety measurable, catches regressions after model upgrades and shows where policies are ambiguous. It cannot guarantee robustness: new techniques appear, and the space of possible inputs is effectively unlimited. Combine testing with monitoring of production for policy flags, and with limits on what a successful jailbreak could achieve.",
        ],
      },
      {
        heading: "How to Set Up Jailbreak Testing Step by Step",
        body: [],
        checklist: [
          "**1. Write application policies** with examples of correct behaviour",
          "**2. Build a categorized test set** with variations and over-refusal cases",
          "**3. Choose scoring** and validate it against human labels",
          "**4. Run automated probes** plus application-specific cases",
          "**5. Analyse failures** by category and pattern",
          "**6. Remediate with layered controls**",
          "**7. Gate releases** on attack success and over-refusal thresholds",
        ],
      },
      {
        heading: "Policies for Different Audiences",
        body: [
          "The right policy depends on who uses the system. A children's education product, a medical professional tool and an internal security research assistant need very different boundaries. Write policies per audience and context, test each separately and make sure the deployed application knows which policy applies, for example through account type rather than user claims in the conversation. Over-refusal cases should reflect the legitimate needs of each audience.",
        ],
      },
      {
        heading: "Monitoring Policy Adherence in Production",
        body: [
          "Testing before release cannot cover everything users will try. Run output classifiers on production traffic for your policy categories, sample flagged and unflagged conversations for human review, track policy flag rates by feature and release, and route serious cases to an incident process. Add confirmed production failures to the test set. Production monitoring approaches are in [[/blogs/ai-model-monitoring|AI model monitoring]].",
        ],
      },
      {
        heading: "Layered Defences That Reduce Jailbreak Impact",
        body: [],
        table: {
          headers: ["Layer", "Example", "What it adds"],
          rows: [
            ["Model choice", "Models with stronger safety behaviour for sensitive features", "Lower baseline violation rate"],
            ["System instructions", "Clear policy and refusal guidance", "Steers typical behaviour"],
            ["Input classifiers", "Flag risky requests for stricter handling", "Catches known patterns"],
            ["Output classifiers", "Block or route policy-violating outputs", "Independent of how the request was phrased"],
            ["Capability limits", "No tools or data that make violations harmful", "Limits impact"],
            ["Human review", "For high-risk categories", "Final check where stakes justify it"],
          ],
        },
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a learning platform for teenagers tests its tutor assistant. Single-turn tests pass, but multi-turn role-play cases in two languages show policy drift on mature topics. The team adds an output classifier for those categories, shortens the maximum conversation length before a context reset, and adds over-refusal cases after the first fix starts refusing legitimate biology questions.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Testing only single-turn English prompts",
          "Measuring attack success but not over-refusal",
          "Fixing failures with prompt wording alone",
          "Not re-testing after model or provider upgrades",
          "Sharing working jailbreak prompts widely",
        ],
        cta: {
          title: "Upgrading models for a sensitive AI feature?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|safety regression testing]] before and after model changes.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Jailbreak testing turns AI safety from assumption into measurement. Define policies, test with categorized variations, score both violations and over-refusals, remediate in layers and repeat on every change.",
        ],
      },
    ],
  },

  // ---------------------------------------- 685 · AI DATA LEAKAGE
  {
    slug: "ai-data-leakage",
    title: "AI Data Leakage: How to Prevent Sensitive Information Exposure",
    seoTitle: "AI Data Leakage: Causes, Exposure Channels and Controls",
    excerpt:
      "How AI applications leak sensitive information and how to prevent it: over-broad retrieval, missing tenant isolation, secrets in prompts, logging, memory, training data, output channels and validation, with practical controls and tests.",
    category: "AI & Automation",
    banner: "leakchannels",
    bannerAlt:
      "AI data leakage channels in four columns: retrieval highlighted (No ACLs, Cross-tenant, Stale ACLs, Over-sharing), context (Secrets, System prompt, Memory, History), outputs (Answers, Links, Images, Tool calls) and storage (Logs, Traces, Caches, Training sets).",
    date: "2026-10-02",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["fintech", "healthcare-healthtech", "b2b-enterprise"],
    relatedSlugs: ["ai-data-privacy", "ai-agent-access-control", "indirect-prompt-injection"],
    faqs: [
      { q: "What is AI data leakage?", a: "Exposure of sensitive information through an AI system to people or systems that should not receive it, such as other users, other tenants, attackers or third-party services." },
      { q: "What is the most common cause?", a: "Retrieval that ignores permissions: data indexed without access controls, or filters applied incorrectly, so an assistant answers one user with content only another user should see." },
      { q: "Can the system prompt leak?", a: "Yes. Users can often coax models into revealing system prompts. Never put secrets, credentials or confidential business rules in prompts, and assume prompt contents may become visible." },
      { q: "Can models leak training data?", a: "Models can reproduce fragments of training data, especially rare or repeated content. This matters most when you fine-tune on sensitive data; avoid including secrets or personal data in fine-tuning sets." },
      { q: "How do logs cause leakage?", a: "Prompts, outputs and traces often contain personal or confidential data. Broad access to logging tools, long retention or export to third-party services can expose it." },
      { q: "How does prompt injection relate to leakage?", a: "Injected instructions can make a model send private data out through links, images, emails or tool calls. Preventing exfiltration channels is a key leakage control." },
      { q: "What is OWASP's view of this risk?", a: "The OWASP Top 10 for LLM Applications lists sensitive information disclosure and system prompt leakage as distinct risks, alongside prompt injection." },
      { q: "How do we test for leakage?", a: "Create test users and tenants with different permissions, seed distinctive canary data and check whether it ever appears for the wrong user, in logs or in outbound requests." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI data leakage happens when retrieval ignores permissions, tenants are not isolated, secrets sit in prompts, memories or caches are shared, logs hold sensitive data with broad access, fine-tuning data contains secrets, or outputs carry data out through links, images and tool calls. Prevent it by enforcing permissions at retrieval and in tools, isolating tenants and sessions, keeping secrets out of prompts, minimizing and redacting data, controlling logs, closing exfiltration channels and testing with canary data across users.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "This article focuses on exposure channels and engineering controls. Compliance obligations such as notices, rights and impact assessments are in [[/blogs/ai-data-privacy|AI data privacy]]. Identity and permissions for agents are in [[/blogs/ai-agent-access-control|AI agent access control]], and exfiltration through injected content in [[/blogs/indirect-prompt-injection|indirect prompt injection]].",
        ],
      },
      {
        heading: "Leakage Channels",
        body: [],
        table: {
          headers: ["Channel", "How it happens", "Primary control"],
          rows: [
            ["Retrieval", "Index lacks permissions or filters are wrong", "Permission-aware retrieval, tested"],
            ["Multi-tenancy", "Shared indexes, caches or memories across customers", "Tenant isolation at storage and query level"],
            ["Prompts and configuration", "Secrets or confidential rules in system prompts", "No secrets in prompts; server-side checks"],
            ["Conversation memory", "History or memories visible to the wrong user", "Scoped memory with expiry and access checks"],
            ["Outputs", "Data encoded in links, images or messages", "Output filtering, link rendering controls, confirmation"],
            ["Logs and traces", "Sensitive content stored widely", "Redaction, access control, retention"],
            ["Fine-tuning data", "Model memorizes and reproduces records", "Exclude secrets and personal data"],
            ["Third-party services", "Data sent to tools or providers without approval", "Approved providers, data rules, egress limits"],
          ],
        },
      },
      {
        heading: "Retrieval and Tenant Isolation",
        body: [
          "Most serious AI leakage incidents come from retrieval. If a vector index contains documents without their access lists, or if filters are applied after similarity search on a truncated result set, users can receive content they should not see. Capture permissions at ingestion, filter by the requesting user's identity during the search, and test with users who have different rights. For multi-tenant products, isolate tenants with separate indexes or namespaces and enforce tenant IDs from authenticated context, never from model output or user-supplied parameters. See [[/blogs/ai-data-ingestion|AI data ingestion]] for permission capture.",
        ],
        diagram: {
          variant: "leakpreventflow",
          alt: "Leakage prevention flow: User + tenant, Permission context, Filtered retrieval (highlighted), Minimal context, Output checks, Redacted logs.",
          caption: "Permissions applied during retrieval stop most leaks before the model ever sees the data.",
        },
      },
      {
        heading: "Secrets and System Prompts",
        body: [
          "Treat system prompts as potentially visible. Do not include API keys, credentials, internal URLs that grant access, or confidential logic whose disclosure would cause harm. The OWASP Top 10 for LLM Applications lists system prompt leakage as its own risk for this reason. Enforce business rules such as discounts, limits and permissions in server-side code, where users cannot argue with them.",
        ],
        cta: {
          title: "Worried your AI assistant could show the wrong data to the wrong user?",
          description: "ZSpace Labs reviews and hardens retrieval, tenancy and output handling in AI applications. See [[/services/ai-automation|AI security services]].",
        },
      },
      {
        heading: "Outputs and Exfiltration Channels",
        body: [
          "Outputs can carry data to places it should not go. Markdown images and links rendered automatically can send data in URLs to external servers; tool calls can email or post content externally. Restrict rendering of external images and links to allow-listed domains, require confirmation for outbound actions, limit agent network egress and scan outputs for sensitive patterns such as card numbers or credentials before display or sending.",
        ],
      },
      {
        heading: "Logs, Traces and Caches",
        body: [
          "Observability data often becomes the largest store of sensitive content. Redact identifiers and secrets before logging, restrict trace access to people who need it, set retention limits and check what third-party observability services receive. Response caches must be keyed by user or tenant where content is personalized, or a cached answer for one user can be served to another. See [[/blogs/llm-observability|LLM observability]].",
        ],
      },
      {
        heading: "Training and Fine-Tuning Data",
        body: [
          "Models can memorize and reproduce rare strings from training data. If you fine-tune, exclude secrets and minimize personal data, deduplicate sensitive records and test the fine-tuned model with prompts designed to elicit memorized content. Check provider terms on whether inputs to hosted models may be used for training, and configure accordingly; see [[/blogs/ai-data-privacy|AI data privacy]].",
        ],
      },
      {
        heading: "Testing for Leakage",
        body: [],
        checklist: [
          "Seed unique canary strings in documents restricted to specific users and tenants",
          "Query as other users and tenants and check canaries never appear",
          "Attempt system prompt and configuration extraction",
          "Plant injected instructions asking to send data out and check outbound requests",
          "Inspect logs and traces for sensitive fields",
          "Check caches return personalized content only to the right user",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Engineering controls at retrieval, tenancy and output layers prevent the most damaging leaks reliably, because they do not depend on model behaviour. They require careful implementation and testing, especially permission sync. Output scanning catches some leaks but not all, so treat it as a final layer.",
        ],
      },
      {
        heading: "How to Prevent Leakage Step by Step",
        body: [],
        checklist: [
          "**1. Map sensitive data** reachable by each AI feature",
          "**2. Enforce permissions and tenant isolation** at retrieval",
          "**3. Remove secrets** from prompts and configuration",
          "**4. Scope memory and caches** per user or tenant",
          "**5. Control output rendering and outbound actions**",
          "**6. Redact and restrict logs**",
          "**7. Test with canaries** on every release",
        ],
      },
      {
        heading: "Leakage Through Conversation Memory and Sharing",
        body: [
          "Features that remember previous conversations, share chats or let teams collaborate in AI workspaces create new exposure paths. Scope memory strictly to the user or team that created it, show users what is remembered and let them delete it, and check permissions again when a shared conversation is opened by someone else, because its retrieved content may include documents the viewer cannot access. Memory design is covered in [[/blogs/ai-agent-memory|AI agent memory]].",
        ],
      },
      {
        heading: "Responding to a Leak",
        body: [
          "If leakage is suspected, contain first: disable the affected feature or source, revoke credentials if needed and preserve traces. Use lineage and traces to determine what data was exposed, to whom and when; see [[/blogs/ai-data-lineage|AI data lineage]]. Fix the root cause, typically permissions, isolation or an exfiltration channel, add canary tests that would have caught it and follow your incident and notification obligations, which may include regulators and affected individuals under data protection law.",
        ],
      },
      {
        heading: "Designing Permission-Aware Retrieval",
        body: [
          "Permission-aware retrieval needs three pieces. First, every indexed item carries its access rules, captured at ingestion and refreshed when they change in the source. Second, every query carries the requesting user's identity and group memberships from authenticated context. Third, the search applies permission filters as part of the query, so results are drawn only from permitted items, rather than filtering a short list after ranking, which can return too few results and tempts engineers to relax filters.",
          "Test with users who have different rights and with recently revoked access, because permission sync lag is a common gap. For very sensitive collections, separate indexes per security boundary are simpler to reason about than fine-grained filters. Retrieval design is covered in [[/blogs/enterprise-rag-architecture|enterprise RAG architecture]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a B2B SaaS assistant shares one vector index across customers, filtering by tenant after retrieving the top results. When one tenant's documents dominate similarity scores, another tenant's query returns too few results and an engineer 'fixes' it by relaxing the filter. A canary test catches cross-tenant content before release; the team moves to per-tenant namespaces with the tenant taken from the authenticated session.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Indexing documents without access lists",
          "Tenant IDs passed by the client or model",
          "Credentials or confidential rules in system prompts",
          "Shared response caches for personalized content",
          "Auto-rendering external links and images from model output",
        ],
        cta: {
          title: "Want a leakage test before launch?",
          description: "Talk to ZSpace Labs about an [[/services/ai-automation|AI data exposure review]] with canary testing across users and tenants.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "AI data leakage is mostly an architecture problem. Enforce permissions where data is retrieved, isolate tenants, keep secrets out of prompts, control outputs and logs, and prove it with canary tests.",
        ],
      },
    ],
  },

  // ---------------------------------------- 686 · AI AGENT ACCESS CONTROL
  {
    slug: "ai-agent-access-control",
    title: "AI Agent Access Control: How to Manage Permissions for Autonomous Systems",
    seoTitle: "AI Agent Access Control: Identities, Scoped Credentials, Approvals",
    excerpt:
      "How to control what AI agents can access and do: agent identities, acting on behalf of users, role-based and attribute-based access, scoped short-lived credentials, least privilege, approval boundaries, audit logs and separation of duties.",
    category: "AI & Automation",
    banner: "agentaccess",
    bannerAlt:
      "AI agent access models compared (Delegated, Service ID and Hybrid, with Hybrid highlighted) by permissions, audit, risk and use for.",
    date: "2026-10-02",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["fintech", "b2b-enterprise", "saas-technology"],
    relatedSlugs: ["ai-agent-guardrails", "ai-tool-security", "mcp-security"],
    faqs: [
      { q: "Should an AI agent have its own identity?", a: "Yes. Give each agent or agent deployment a distinct identity so its actions can be authorized, limited, audited and revoked separately from human users and other services." },
      { q: "Should agents act as the user or as themselves?", a: "For user-facing tasks, agents should usually act on the user's behalf with delegated permissions, so they can never do more than the user could. Background agents act as service identities with narrowly scoped permissions. Many systems combine both." },
      { q: "What is least privilege for agents?", a: "Granting only the tools, data and operations needed for the agent's specific task, for the shortest time necessary, rather than broad access 'just in case'." },
      { q: "What are scoped, short-lived credentials?", a: "Tokens limited to specific resources and operations that expire quickly, issued per task or session, so a leaked or misused token has limited impact." },
      { q: "Where should authorization checks happen?", a: "In the systems and tool layer the agent calls, not in the model's prompt. The model can be manipulated; the API enforcing permissions cannot be persuaded." },
      { q: "When should agents require human approval?", a: "For actions that are irreversible, high-value, external-facing, affect many records or involve sensitive data, and whenever the agent is uncertain." },
      { q: "What is separation of duties for agents?", a: "Ensuring one agent cannot both initiate and approve a sensitive action, such as creating and paying a supplier, mirroring controls applied to people." },
      { q: "How does MCP handle authorization?", a: "The Model Context Protocol specifies OAuth-based authorization for remote servers, with tokens bound to the intended server. Implementations still need careful scoping on the server side." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Control agents like any powerful service account, with extra caution. Give each agent its own identity; let user-facing agents act on the user's behalf with delegated permissions; issue scoped, short-lived credentials per task; grant only the tools and data the task needs; enforce authorization in the systems agents call, never in prompts; require human approval for irreversible, high-value or external actions; separate initiation from approval for sensitive processes; and log every action with both the agent and user identities.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Broader controls such as policy checks, budgets and kill switches are in [[/blogs/ai-agent-guardrails|AI agent guardrails]]. Securing the tools themselves is in [[/blogs/ai-tool-security|AI tool security]], MCP-specific authorization in [[/blogs/mcp-security|MCP security]] and approval design in [[/blogs/human-in-the-loop-ai|human-in-the-loop AI]].",
        ],
      },
      {
        heading: "Why Agents Need Their Own Access Model",
        body: [
          "Agents choose actions dynamically from natural-language goals, can be manipulated by content they read and run faster and longer than people. If an agent holds broad credentials, a misunderstanding or a successful prompt injection becomes a broad incident. Access control is what bounds the damage: even a confused or manipulated agent should only be able to do a small set of things, for a short time, on behalf of the right person.",
        ],
      },
      {
        heading: "Identity Models",
        body: [],
        table: {
          headers: ["Model", "Whose permissions", "Use for", "Watch for"],
          rows: [
            ["Delegated (on behalf of user)", "Intersection of user and agent scopes", "Assistants and copilots", "Token handling, consent screens"],
            ["Service identity", "Agent's own narrow role", "Background and scheduled agents", "Scope creep over time"],
            ["Hybrid with approvals", "Agent prepares; user or approver authorizes", "Sensitive actions", "Approval fatigue"],
          ],
        },
      },
      {
        heading: "The Authorization Path",
        body: [],
        diagram: {
          variant: "agentauthflow",
          alt: "Agent authorization path: User signs in, Scoped token, Agent proposes, Policy check (highlighted), Approval if needed, Act + audit.",
          caption: "The model proposes; the tool layer decides, using identities and policies the model cannot change.",
        },
      },
      {
        heading: "Scoped, Short-Lived Credentials",
        body: [
          "Prefer tokens issued per session or task, limited to specific resources and operations, and expiring quickly. OAuth flows support delegated access with scopes; cloud providers support short-lived role credentials. Avoid long-lived API keys stored in agent configuration. Where an agent calls several systems, use token exchange or per-system tokens rather than one master credential, and bind tokens to their intended audience so they cannot be replayed elsewhere. The MCP specification adopts OAuth-based authorization for remote servers along these lines.",
        ],
        cta: {
          title: "Connecting agents to business systems?",
          description: "ZSpace Labs designs agent identity, permissions and approval flows that keep automation within safe bounds. See [[/services/ai-automation|AI agent development]].",
        },
      },
      {
        heading: "Role and Attribute-Based Access",
        body: [
          "Role-based access control assigns permissions to roles such as 'support agent assistant' or 'invoice processing agent'. Attribute-based control adds conditions: amount limits, record ownership, region, time of day or data sensitivity. Agents often need both, for example, an accounts payable agent may create payment drafts for approved suppliers under a threshold, but never approve them. Express these rules in a policy engine or the target system's authorization layer so they are testable and auditable.",
        ],
      },
      {
        heading: "Approval Boundaries and Separation of Duties",
        body: [
          "Define which actions an agent may take alone, which need user confirmation and which need a separate approver. Typical approval triggers: irreversible actions, payments and refunds above thresholds, external communications, bulk changes, permission changes and access to highly sensitive data. Apply separation of duties as you would for people: an agent that creates a supplier record should not also be able to approve payments to it. Microsoft's agent safety guidance similarly recommends gating side-effecting, sensitive, irreversible and broad-impact tools behind approval.",
        ],
      },
      {
        heading: "Audit Logs",
        body: [
          "Log every agent action with the agent identity, the user on whose behalf it acted, the tool and arguments, the authorization decision, any approval and the outcome. Link entries to the agent's trace so investigators can see what content preceded each action. Protect logs from modification and review them, including periodic checks of permissions actually used versus permissions granted.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Strong access control limits the damage from model errors, manipulation and compromised credentials, and it makes agents acceptable to security and audit teams. It adds integration work, requires systems that support fine-grained permissions and can create approval fatigue if thresholds are too low. Review approval rates and adjust.",
        ],
      },
      {
        heading: "How to Implement Agent Access Control Step by Step",
        body: [],
        checklist: [
          "**1. Inventory agent actions** and the data each touches",
          "**2. Assign identities** to each agent deployment",
          "**3. Choose delegated or service access** per use case",
          "**4. Issue scoped, short-lived tokens**",
          "**5. Enforce policies** in tools and target systems",
          "**6. Define approval and separation-of-duty rules**",
          "**7. Log, review and prune permissions** regularly",
        ],
      },
      {
        heading: "Consent and Delegation UX",
        body: [
          "When agents act on behalf of users, users should understand and approve what they are delegating. Consent screens should name the systems and actions in plain language, such as 'read your calendar and create events', rather than technical scopes. Let users review and revoke agent access, show recent agent actions and require re-consent when an agent requests broader permissions. Clear delegation design reduces both security risk and user surprise; see [[/blogs/ai-transparency-ux|AI transparency in UX]].",
        ],
      },
      {
        heading: "Reviewing and Pruning Permissions",
        body: [
          "Agent permissions tend to grow as teams add features. Schedule regular reviews comparing permissions granted with permissions actually used, remove unused scopes, rotate credentials and check that approval thresholds still match risk. Monitor for unusual behaviour such as access outside normal hours, sudden volume increases or attempts to use denied operations, which may indicate manipulation or compromise.",
        ],
      },
      {
        heading: "Example Agent Policy",
        body: [
          "Expressing agent permissions as a reviewable policy makes them testable and auditable. The format below is illustrative; real implementations use your identity provider, policy engine or target system's authorization model.",
        ],
        code: {
          label: "Example: accounts payable agent policy (illustrative)",
          text: "agent: ap-invoice-agent\nidentity: svc-ap-agent (service), acts_for: requesting user where delegated\nallow:\n  - read: suppliers, purchase_orders, invoices\n  - create: invoice_draft\n  - update: invoice_draft (own drafts only)\nrequire_approval:\n  - submit_invoice where amount > 5000 -> approver role: ap-manager\n  - any action on supplier flagged 'new' within 30 days\ndeny:\n  - update: supplier.bank_details\n  - approve: payments\n  - delete: any\ntoken: scoped, expires 15 min, audience=erp-api\naudit: log tool, args, decision, approver, user, agent, trace_id",
        },
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a procurement agent runs with an administrator's API key 'to avoid permission errors'. A security review replaces it with a service identity that can read supplier records and create draft purchase orders only, delegated user tokens for actions in a buyer's name, and an approval step for orders above a threshold. A test confirms the agent cannot change supplier bank details even when instructed.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Agents running with personal admin credentials",
          "Permissions checked only in the system prompt",
          "Long-lived keys shared across agents",
          "One agent able to both initiate and approve",
          "Logs that do not record which user the agent acted for",
        ],
        cta: {
          title: "Need a permissions review for your agents?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|agent access control]]: identities, scopes, approvals and audit.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Agents should never be able to do more than the task and the user allow. Give them identities, scoped short-lived credentials and enforced policies, require approval where stakes are high and keep an audit trail that names both agent and user.",
        ],
      },
    ],
  },

  // ---------------------------------------- 687 · AI TOOL SECURITY
  {
    slug: "ai-tool-security",
    title: "AI Tool Security: How to Secure Function Calling and External Integrations",
    seoTitle: "AI Tool Security: Function Calling, Validation, Sandboxing, Limits",
    excerpt:
      "How to secure tools and function calling in AI applications: tool schemas, argument validation, authorization, output handling, network restrictions, sandboxing code execution, rate limits, safe errors and third-party tool risks.",
    category: "AI & Automation",
    banner: "toolsecurity",
    bannerAlt:
      "AI tool security in four columns: definition (Narrow, Strict schema, Clear docs, Versioned), input highlighted (Validate, Allow-lists, Authorize, Limits), execution (Sandbox, Egress rules, Timeouts, Idempotent) and output (Sanitize, Untrusted, Size limits, Safe errors).",
    date: "2026-10-02",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "fintech", "cybersecurity"],
    relatedSlugs: ["ai-agent-access-control", "mcp-security", "indirect-prompt-injection"],
    faqs: [
      { q: "What is tool or function calling in AI?", a: "A capability where a model outputs a structured request to call a function you define, such as looking up an order or creating a ticket. Your application executes the function and returns the result to the model." },
      { q: "Why are tools a security risk?", a: "They turn model outputs into actions. If a model is mistaken or manipulated, tools can read or change data, send messages or run code. Tool arguments chosen by the model must be treated as untrusted input." },
      { q: "How should tool arguments be validated?", a: "Against strict schemas with types, ranges and lengths, using allow-lists for identifiers and paths, parameterized queries for databases and business rules checked in code, never by trusting the model." },
      { q: "Should tools return raw data to the model?", a: "Return only what the task needs, mark external content as untrusted, limit size and strip content that could carry instructions or sensitive data unnecessarily." },
      { q: "How do we secure code execution tools?", a: "Run code in isolated sandboxes with no access to secrets, restricted network egress, CPU, memory and time limits, and fresh environments per task." },
      { q: "Are third-party tools and MCP servers safe?", a: "Treat them like any third-party dependency: review their source or vendor, permissions, data handling and updates. Tool descriptions and outputs from third parties can contain injected instructions." },
      { q: "How detailed should tool error messages be?", a: "Detailed enough for the model to correct its call, such as 'amount must be under 500', but without stack traces, internal paths, secrets or data the user is not entitled to." },
      { q: "How many tools should an agent have?", a: "As few as the task requires. Fewer, narrower tools reduce both mistakes and the impact of manipulation." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Secure AI tools by designing them narrowly, with strict schemas and clear descriptions; validating every model-supplied argument with allow-lists, ranges and business rules; authorizing each call as the requesting user in the tool layer; sandboxing code execution and restricting network egress; applying timeouts, rate limits and idempotency; treating tool outputs as untrusted content with size limits; returning safe, useful errors; and vetting third-party tools and MCP servers like any other dependency.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Identity and permissions for agents are covered in [[/blogs/ai-agent-access-control|AI agent access control]]; MCP-specific threats such as tool poisoning in [[/blogs/mcp-security|MCP security]]; injected content arriving through tool outputs in [[/blogs/indirect-prompt-injection|indirect prompt injection]]; and backend integration patterns in [[/blogs/ai-api-integration|AI API integration]].",
        ],
      },
      {
        heading: "How Tool Calls Flow",
        body: [],
        diagram: {
          variant: "toolcallflow",
          alt: "Secure tool call flow: Model proposes, Schema check, Authorize as user (highlighted), Sandbox execute, Sanitize output, Log.",
          caption: "Every step after the model's proposal is enforced in code the model cannot influence.",
        },
      },
      {
        heading: "Designing Tools Narrowly",
        body: [
          "A tool called run_sql or http_request gives a model enormous power; a tool called get_order_status(order_id) gives it exactly what the task needs. Prefer narrow, task-specific tools over general ones, separate read tools from write tools, and expose only the tools relevant to the current task or user. Write tool descriptions that state when to use them and their limits, and version them, because description changes affect model behaviour.",
        ],
        code: {
          label: "Example: a narrow tool definition with strict schema (illustrative)",
          text: "{\n  \"name\": \"issue_refund\",\n  \"description\": \"Create a refund request for an order the current user owns. Requires user confirmation. Maximum 500.00 in the order currency.\",\n  \"input_schema\": {\n    \"type\": \"object\",\n    \"properties\": {\n      \"order_id\": { \"type\": \"string\", \"pattern\": \"^ORD-[0-9]{8}$\" },\n      \"amount\":   { \"type\": \"number\", \"exclusiveMinimum\": 0, \"maximum\": 500 },\n      \"reason\":   { \"type\": \"string\", \"enum\": [\"damaged\", \"late\", \"wrong_item\", \"other\"] }\n    },\n    \"required\": [\"order_id\", \"amount\", \"reason\"],\n    \"additionalProperties\": false\n  }\n}\n# Server side: verify order belongs to user, amount <= amount paid, confirmation recorded",
        },
      },
      {
        heading: "Validating Inputs",
        body: [
          "Treat arguments as you would untrusted input to a public API. Validate types, formats, lengths and ranges against the schema; check identifiers against what the user may access; resolve file paths and confirm they stay inside allowed directories; use parameterized queries and never build SQL or shell commands by string concatenation; and re-check business rules such as refund limits in code. Microsoft's agent safety guidance makes the same recommendations, favouring allow-lists over trying to filter known-bad patterns.",
        ],
        cta: {
          title: "Giving an AI assistant real actions to take?",
          description: "ZSpace Labs builds secure tool layers for AI agents and copilots, with validation, authorization and sandboxing. See [[/services/ai-automation|AI integration services]].",
        },
      },
      {
        heading: "Authorization",
        body: [
          "Every tool call should run with the permissions of the user the agent is acting for, or a narrowly scoped service identity, and be checked by the system that owns the data. The model's choice of tool is a request, not a permission. See [[/blogs/ai-agent-access-control|AI agent access control]] for identity models and approvals.",
        ],
      },
      {
        heading: "Execution Controls",
        body: [],
        table: {
          headers: ["Control", "Purpose"],
          rows: [
            ["Sandboxing", "Isolate code execution and file operations from hosts and secrets"],
            ["Network egress allow-lists", "Prevent tools from reaching arbitrary destinations or exfiltrating data"],
            ["Timeouts", "Stop hung or slow operations"],
            ["Rate limits and quotas", "Limit abuse, loops and cost"],
            ["Idempotency keys", "Make retries safe for side-effecting operations"],
            ["Dry-run and preview modes", "Show effects before committing"],
          ],
        },
      },
      {
        heading: "Handling Tool Outputs",
        body: [
          "Tool outputs flow back into the model's context, so they are another channel for injected instructions and for leaking data the model does not need. Return the minimum fields required, limit sizes, mark content from external sources as untrusted and avoid echoing secrets or internal identifiers. When outputs will be rendered to users or used in further actions, validate and sanitize them like any untrusted data.",
        ],
      },
      {
        heading: "Safe Error Handling",
        body: [
          "Errors should help the model correct its call without revealing internals. Return clear validation messages ('amount exceeds the refund limit for this order') rather than stack traces, connection strings or data from other records. Log full error details server-side for engineers.",
        ],
      },
      {
        heading: "Third-Party Tools and MCP Servers",
        body: [
          "Third-party tools and [[/blogs/model-context-protocol|MCP servers]] extend agents quickly but bring supply chain risk. Review the provider and source, pin versions, check which permissions and data each tool needs, watch for changes to tool descriptions (which can carry injected instructions) and run untrusted servers in isolated environments. See [[/blogs/ai-supply-chain-security|AI supply chain security]].",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "A secure tool layer lets agents do useful work while keeping the blast radius of mistakes small, and it works regardless of how the model behaves. Narrow tools mean more tools to build and maintain, and strict validation can frustrate legitimate edge cases; review rejected calls to refine rules.",
        ],
      },
      {
        heading: "How to Secure Tools Step by Step",
        body: [],
        checklist: [
          "**1. Inventory tools** with the data and actions each exposes",
          "**2. Narrow and split** broad tools into task-specific ones",
          "**3. Define strict schemas** and validate every call",
          "**4. Authorize as the user** in the tool layer",
          "**5. Sandbox execution** and restrict egress",
          "**6. Limit, sanitize and mark** tool outputs",
          "**7. Vet and pin** third-party tools",
        ],
      },
      {
        heading: "Code Execution and Browser Tools",
        body: [
          "Tools that run code or control a browser are among the most powerful and risky. Run code in ephemeral sandboxes, such as containers or microVMs created per task, with no credentials, restricted network egress, CPU, memory and time limits, and read-only access to only the files the task needs. Browser tools should run in isolated profiles without saved logins unless a task requires a specific session, with allow-listed domains for form submission and confirmation before purchases or account changes.",
        ],
      },
      {
        heading: "Testing Tools",
        body: [
          "Test each tool as an API exposed to an untrusted caller: invalid types and ranges, identifiers belonging to other users, path traversal attempts, oversized inputs and repeated calls. Test the model's use of tools too: whether planted content can trigger unwanted calls and whether confirmation rules hold. Add these cases to the automated suite described in [[/blogs/ai-security-testing|AI security testing]].",
        ],
      },
      {
        heading: "Tool Description Hygiene",
        body: [
          "Tool descriptions are instructions to the model, so they are part of your security surface. Write them yourself for internal tools, review descriptions of third-party tools before enabling them and watch for changes, because a modified description can steer the model, a risk sometimes called tool poisoning in MCP discussions. Keep descriptions factual about purpose, inputs and limits, and never include secrets or internal URLs that grant access.",
          "Present only tools relevant to the current task and user. Large tool lists increase both mistakes and the chance that one poorly described tool is misused. Version tool definitions alongside prompts and evaluate changes the same way. MCP-specific concerns are covered in [[/blogs/mcp-security|MCP security]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: an internal analytics assistant has a generic run_sql tool connected with a read-write database user. A review replaces it with read-only access to a set of curated views, a query tool that only accepts parameterized templates, a row limit and a timeout. The assistant still answers most analytics questions, and destructive or bulk-export queries are no longer possible.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Generic tools such as raw SQL, shell or HTTP access",
          "Trusting model-supplied IDs and amounts",
          "Code execution with access to secrets or the internet",
          "Returning full records and raw web content to the model",
          "Stack traces and internal details in tool errors",
        ],
        cta: {
          title: "Want your agent's tools reviewed?",
          description: "Talk to ZSpace Labs about an [[/services/ai-automation|AI tool security review]] covering schemas, validation, sandboxing and third-party tools.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Tools are where AI output becomes action. Keep them narrow, validate and authorize every call in code, sandbox execution, treat outputs as untrusted and vet third-party tools carefully.",
        ],
      },
    ],
  },
];
