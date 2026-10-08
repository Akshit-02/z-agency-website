import type { BlogPost } from "./blog-data";

/**
 * AI-ready business batch (October 2026), part three: agent governance and
 * platform choice. "Human approval workflows" was not created because
 * human-in-the-loop-ai already targets it; "agent identity" is narrowed to
 * authentication and delegation (authorization lives in
 * ai-agent-access-control). Incident response and build vs buy are research
 * replacements. Sources checked 2026-10-07: Moffatt v. Air Canada (2024 BCCRT
 * 149), Directive (EU) 2024/2853, MCP authorization spec, RFC 8693, Microsoft
 * Entra Agent ID documentation, vendor documentation. Not legal advice.
 * Merged into `posts` in blog-data.ts.
 */

export const aiBusinessPosts3: BlogPost[] = [
  // ---------------------------------------- AI AGENT AUTHENTICATION
  {
    slug: "ai-agent-authentication",
    title: "AI Agent Identity and Authentication: How Agents Should Prove Who They Are and Act for Users",
    seoTitle: "AI Agent Identity and Authentication: OAuth, Delegation, Tokens",
    excerpt:
      "How AI agents should authenticate: their own identities, delegated OAuth tokens, token exchange, MCP authorization and agent identity platforms.",
    category: "AI & Automation",
    banner: "agentidflow",
    sceneKind: "security",
    bannerAlt:
      "How an agent acts on a user's behalf: User signs in, Consent to scopes, Agent identity, Delegated token (highlighted), API checks scopes, Audit log.",
    date: "2026-10-07",
    readingTime: "5 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["fintech", "b2b-enterprise", "healthcare-healthtech"],
    relatedSlugs: ["ai-agent-access-control", "mcp-security", "ai-agent-accountability"],
    faqs: [
      { q: "How should an AI agent authenticate?", a: "With its own identity, not a person's password or a shared API key. When it acts for a user, it should hold a delegated, scoped, short-lived token obtained with that user's consent (typically through OAuth), so every action is traceable to both the agent and the user." },
      { q: "Should an agent use an employee's login?", a: "No. Shared or borrowed credentials make it impossible to tell what the agent did versus the person, usually grant far more access than needed, and break when the person leaves." },
      { q: "What is on-behalf-of access for agents?", a: "A pattern where the agent receives a token representing both the user and the agent, limited to specific scopes. Standards such as OAuth 2.0 Token Exchange (RFC 8693) support issuing such delegated tokens, and identity platforms provide on-behalf-of flows for agents." },
      { q: "How does MCP handle authentication?", a: "The MCP authorization specification builds on OAuth 2.1. A protected MCP server acts as a resource server, publishes protected resource metadata so clients can discover its authorization server, and accepts access tokens issued for it." },
      { q: "What is Microsoft Entra Agent ID?", a: "Microsoft's identity platform for AI agents, generally available in 2026. It adds agent identity blueprints, agent identities and agent user accounts, with Conditional Access, governance and lifecycle controls for agents acting autonomously or on behalf of users." },
      { q: "How is authentication different from access control?", a: "Authentication establishes who the agent is and for whom it acts. Access control (authorization) decides what that identity may do. Both are needed; this article covers the first, and our access control guide covers the second." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Give every AI agent its own identity, never a person's password or a shared API key. When an agent works for a user, it should act **on behalf of** that user with a delegated token: obtained through OAuth with the user's consent, limited to specific scopes, short-lived and revocable, and carrying both identities so every action is traceable. Autonomous agents with no user should run as workload identities with narrowly scoped permissions. Use standard protocols (OAuth 2.1, token exchange, the MCP authorization spec) and, in larger organizations, an identity platform that manages agents like employees and applications, with owners, lifecycle and conditional access.",
        ],
      },
      {
        heading: "Why agents break traditional identity",
        body: [
          "Identity systems were built for two kinds of actors: people, who sign in interactively, and applications, which use service credentials. Agents are neither. They act autonomously like applications but often on behalf of a specific person, with that person's context and limits. They also multiply: a company may run dozens of agents, each calling many tools.",
          "The shortcuts teams take in pilots (an employee's API token pasted into configuration, one admin key shared by every agent) create the problems the OWASP Top 10 for Agentic Applications lists as Identity and Privilege Abuse: excessive access, no attribution and credentials that outlive their purpose. See [[/blogs/owasp-top-10-agentic-applications|the OWASP agentic guide]].",
        ],
      },
      {
        heading: "Three identity patterns",
        body: [],
        table: {
          headers: ["Pattern", "When to use", "How it works", "Watch for"],
          rows: [
            ["Delegated (on behalf of a user)", "Assistants and agents that act for a signed-in person", "User consents; agent receives a scoped token representing user + agent", "Scope creep; long-lived refresh tokens"],
            ["Autonomous workload identity", "Background agents with no user (monitoring, batch processing)", "Agent has its own identity with fixed, narrow permissions", "Becoming a de facto admin account"],
            ["Agent user account", "Agents that must appear as a member of a team (mailbox, chat)", "A dedicated account owned by a sponsor, governed like a user", "Orphaned accounts when owners leave"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Every action should answer two questions: which agent did this, and on whose behalf? If your logs can only answer one, the identity design is incomplete.",
        },
      },
      {
        heading: "Delegation with OAuth",
        body: [
          "OAuth is the standard tool for delegation. The user signs in and consents to specific scopes; the agent receives an access token that the API validates. Two refinements matter for agents. **Token exchange** (OAuth 2.0 Token Exchange, RFC 8693) lets a service swap one token for another with a different audience or narrower scope, so a token for the agent platform is not reused against every downstream API. **Short lifetimes and revocation** limit damage if a token leaks into logs or a manipulated prompt.",
          "Scopes should describe actions, not systems: \"read orders\" and \"create return request\" rather than \"full CRM access\". The API, not the agent, enforces them.",
        ],
      },
      {
        heading: "MCP authorization",
        body: [
          "If your agents use MCP servers, or you publish one, follow the MCP authorization specification. It builds on OAuth 2.1: a protected MCP server is a resource server, it publishes OAuth 2.0 Protected Resource Metadata (RFC 9728) so clients can find the authorization server, and clients obtain tokens issued specifically for that server. The specification also supports client ID metadata documents so clients can identify themselves without manual registration. Do not pass tokens received by an MCP server straight through to other APIs; obtain properly scoped tokens for each audience. See [[/blogs/mcp-security|MCP security]].",
        ],
      },
      {
        heading: "Enterprise agent identity platforms",
        body: [
          "Identity vendors now treat agents as a first-class identity type. Microsoft Entra Agent ID, generally available in 2026, introduces agent identity blueprints, agent identities and agent user accounts, with sponsors and owners, lifecycle workflows that reassign sponsorship when people leave, access packages for on-behalf-of and autonomous scenarios, and Conditional Access templates for agents. Microsoft also documents patterns for non-Microsoft agents (for example on AWS or n8n) through federation or a sidecar. Other identity providers offer similar capabilities for agents and delegated access.",
          "You do not need an enterprise platform to apply the principles, but if you already run a central identity provider, extend it to agents rather than managing agent credentials separately.",
        ],
        cta: {
          title: "Designing how your agents sign in and act?",
          description: "ZSpace Labs designs agent identity and delegated access with OAuth, token exchange and your identity provider, and builds the audit trail around it. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Agents that act outside your organization",
        body: [
          "When an agent visits other companies' websites or APIs (for example to shop or book), the other side also needs to know who it is. Agent operators increasingly sign their HTTP requests so sites can verify them; see [[/blogs/ai-agent-traffic-verification|how to verify AI agent traffic]]. If you build agents that act externally, plan for the same: a verifiable identity, a published policy and contact details for site owners.",
        ],
      },
      {
        heading: "Implementation checklist",
        body: [],
        checklist: [
          "Every agent registered with an identity, an owner and a purpose",
          "No shared keys; no agents using a person's password or personal token",
          "Delegated tokens with action-level scopes for agents acting for users",
          "Short-lived tokens; refresh limited; revocation tested",
          "Token exchange or per-audience tokens for downstream APIs",
          "Secrets and tokens kept out of model context and logs",
          "Every action logged with agent identity, user identity, scopes and result",
          "Lifecycle: review permissions periodically; disable agents whose owner leaves",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Authentication is where agent governance starts. Give each agent its own identity, use delegated, scoped, short-lived tokens when it acts for people, follow OAuth and the MCP authorization spec, and log both identities on every action. Then decide what each identity may do with [[/blogs/ai-agent-access-control|AI agent access control]].",
        ],
      },
    ],
  },

  // ---------------------------------------- AI AGENT ACCOUNTABILITY
  {
    slug: "ai-agent-accountability",
    title: "Who Is Responsible When an AI Agent Makes a Mistake?",
    seoTitle: "Who Is Responsible When an AI Agent Makes a Mistake?",
    excerpt:
      "Why businesses stay accountable for their AI agents, what courts and EU liability rules signal, and how to assign ownership and keep evidence.",
    category: "AI & Automation",
    banner: "agentgovflow",
    sceneKind: "security",
    bannerAlt:
      "AI agent governance chain: Agent, Identity, Permissions, Tool access, Approval (highlighted), Execution, Audit log.",
    date: "2026-10-07",
    readingTime: "5 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["fintech", "travel-hospitality", "healthcare-healthtech"],
    relatedSlugs: ["ai-governance-framework", "human-in-the-loop-ai", "ai-agent-incident-response"],
    faqs: [
      { q: "Is a company responsible for what its AI agent does?", a: "In general, yes. An AI agent is not a legal person; the business that deploys it is responsible for its statements and actions toward customers, as a Canadian tribunal held in Moffatt v. Air Canada (2024). Specific liability depends on jurisdiction, contracts and facts, so take legal advice for your situation." },
      { q: "Can we blame the AI vendor?", a: "Contracts may allocate some risk to vendors, and new product liability rules in the EU extend to software, but toward your customers you usually remain the responsible party. Vendor terms often limit their liability." },
      { q: "Who inside the company should own an AI agent?", a: "A named business owner accountable for outcomes, a technical owner responsible for operation and changes, and clear approvers for consequential actions. Shared ownership by a committee usually means no ownership." },
      { q: "Does human approval remove our responsibility?", a: "No, but meaningful approval reduces the chance of harmful actions and shows reasonable care. Rubber-stamp approvals provide little protection." },
      { q: "What evidence should we keep?", a: "Logs of inputs, actions, tool calls, approvals and outputs; versions of models, prompts and tools; evaluation results; and incident records. These show what happened and that reasonable controls were in place." },
      { q: "Is this legal advice?", a: "No. This article explains practical governance. Liability rules differ by country and sector; consult a qualified lawyer for decisions about your specific obligations." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "When an AI agent makes a mistake, the business that deployed it is generally responsible toward its customers. The agent is not a separate legal actor, and vendor contracts rarely shift that responsibility entirely. A Canadian tribunal said so plainly in Moffatt v. Air Canada (2024), and the EU's revised Product Liability Directive extends strict liability to software, including AI, from December 2026. In practice, accountability means a named owner for every agent, permissions and approvals proportionate to risk, evidence of what the agent did, and a plan for fixing mistakes. This is practical governance, not legal advice.",
        ],
      },
      {
        heading: "What recent decisions and rules signal",
        body: [
          "**Moffatt v. Air Canada (2024 BCCRT 149).** A customer relied on the airline's website chatbot, which wrongly told him he could apply for a bereavement fare retroactively. Air Canada argued, in effect, that the chatbot was responsible for its own statements. The British Columbia Civil Resolution Tribunal rejected that, held the airline liable for negligent misrepresentation and noted it had not taken reasonable care to ensure the chatbot was accurate. The amount was small; the principle is not: a business cannot disown what its AI tells customers.",
          "**EU Product Liability Directive (Directive (EU) 2024/2853).** The revised directive explicitly treats software, including AI systems and software delivered as a service, as a product, with strict liability for damage caused by defects. Member States must apply it to products placed on the market from 9 December 2026. It also covers defects introduced by updates and failures to provide security updates.",
          "Other regimes (consumer protection, data protection, sector regulation, the EU AI Act for certain uses) add obligations depending on what the agent does. The common thread: responsibility follows the business that puts the system in front of customers or into its operations.",
        ],
        callout: {
          type: "note",
          text: "Laws and their application differ by jurisdiction and sector. Use this article to organize governance, and take legal advice for specific obligations.",
        },
      },
      {
        heading: "Accountability inside the business",
        body: [
          "External liability is settled by law and contracts; internal accountability is a design choice. Every agent in production should have clearly named roles.",
        ],
        table: {
          headers: ["Role", "Responsible for"],
          rows: [
            ["Business owner", "Outcomes, risk acceptance, scope of what the agent may do, customer impact"],
            ["Technical owner", "Operation, changes, evaluation, monitoring, incident response"],
            ["Approvers", "Decisions on consequential actions the agent proposes"],
            ["Risk, legal or compliance", "Risk tier, applicable rules, review of high-impact uses"],
            ["Vendors", "Contractual obligations: security, data handling, uptime, support"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "If you cannot name the person who would explain an agent's mistake to a customer or regulator, the agent is not ready for production.",
        },
      },
      {
        heading: "Match controls to the cost of a mistake",
        body: [
          "Accountability is easier when the agent cannot do much damage. Tier each agent by the worst plausible mistake and apply controls accordingly.",
        ],
        table: {
          headers: ["Risk tier", "Example actions", "Controls"],
          rows: [
            ["Low", "Drafting internal summaries, research, tagging", "Logging, periodic sampling"],
            ["Medium", "Customer replies on routine questions, creating records", "Grounded answers from approved sources, monitoring, easy escalation"],
            ["High", "Refunds, pricing, commitments to customers, data changes", "Approval or thresholds, previews, audit trail, reversal path"],
            ["Critical", "Money movement, legal, medical, safety decisions", "Agent advises only; a qualified person decides"],
          ],
        },
      },
      {
        heading: "Customer-facing agents: say only what you can stand behind",
        body: [
          "The Air Canada case was about information, not an action. Customer-facing agents should answer from approved, current sources (policies, prices, terms) rather than general model knowledge, cite or link to the governing policy, avoid promising things outside policy, and hand off to a person for exceptions. Disclose that customers are dealing with an AI system where rules require it. See [[/blogs/ai-customer-support-automation|AI customer support automation]].",
        ],
      },
      {
        heading: "Evidence: show what happened and that you took care",
        body: [
          "When something goes wrong, you need to reconstruct exactly what the agent saw and did, and to show that reasonable controls existed. Keep:",
        ],
        checklist: [
          "Traces of each run: inputs, retrieved sources, tool calls, outputs",
          "Identity of the agent and the user it acted for (see [[/blogs/ai-agent-authentication|AI agent authentication]])",
          "Approval records: who approved, what they saw, when",
          "Versions of model, prompts, tools and policies in force at the time",
          "Evaluation results before each release",
          "Incident records and corrective actions",
        ],
        cta: {
          title: "Putting customer-facing agents into production?",
          description: "ZSpace Labs builds agents with grounded answers, approval thresholds, audit trails and named ownership designed in from the start. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Contracts with AI vendors",
        body: [
          "Read vendor terms for data use and retention, security commitments, service levels, liability caps and indemnities, and how model changes are communicated. Expect liability caps; plan your own controls on the assumption that you carry the customer-facing risk. Keep the ability to switch providers, so a vendor's change in behaviour or terms does not leave you exposed.",
        ],
      },
      {
        heading: "When a mistake happens",
        body: [
          "Accountability shows in the response: stop or limit the agent, correct the outcome for affected customers, find the cause, fix the control that failed and record what changed. A prepared runbook makes this fast; see [[/blogs/ai-agent-incident-response|AI agent incident response]]. For approval design, see [[/blogs/human-in-the-loop-ai|human-in-the-loop AI]]; for the organization-wide framework, [[/blogs/ai-governance-framework|AI governance framework]].",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "An AI agent's mistakes are the business's mistakes. Accept that early and design for it: named owners, controls proportionate to risk, grounded customer communication, evidence of every action and a tested response plan. Done well, this is what lets a business give agents real responsibility with confidence.",
        ],
      },
    ],
  },

  // ---------------------------------------- AI AGENT INCIDENT RESPONSE
  {
    slug: "ai-agent-incident-response",
    title: "AI Agent Incident Response: What to Do When an Agent Gets It Wrong",
    seoTitle: "AI Agent Incident Response: Kill Switches, Rollback and Runbooks",
    excerpt:
      "An incident response plan for AI agents: detection, kill switches, containment, reversing actions, root cause analysis and preventing repeats.",
    category: "AI & Automation",
    banner: "agentincidentflow",
    sceneKind: "monitor",
    bannerAlt:
      "AI agent incident response: Detect, Contain (highlighted), Assess impact, Reverse + remediate, Root cause, Fix + re-evaluate, with a loop to update the runbook.",
    date: "2026-10-07",
    readingTime: "5 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["fintech", "ecommerce", "saas-technology"],
    relatedSlugs: ["ai-agent-observability", "ai-agent-accountability", "owasp-top-10-agentic-applications"],
    faqs: [
      { q: "What is an AI agent incident?", a: "Any event where an agent causes or nearly causes harm: wrong actions on records or money, incorrect statements to customers, data exposure, runaway costs, or behaviour suggesting manipulation such as prompt injection." },
      { q: "What is a kill switch for an AI agent?", a: "A tested way to stop an agent quickly, such as disabling it in configuration, revoking its credentials or switching its workflow to manual handling, without a code deployment." },
      { q: "How do you undo what an agent did?", a: "Only if you planned for it: log every action with enough detail to reverse it, prefer reversible operations, and keep compensating actions (refund reversal, record restore) ready. Some actions, like sent messages, can only be corrected, not undone." },
      { q: "Who should be on the incident team?", a: "The agent's technical owner, its business owner, someone who can operate the affected systems, and security or legal when data, customers or regulation are involved." },
      { q: "How is this different from normal incident response?", a: "The principles are the same, but agents add non-deterministic behaviour, possible manipulation through content they read, many small actions instead of one failure, and the need to examine prompts, context and tool calls to find the cause." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Prepare before anything goes wrong. Every production agent needs a way to detect problems (outcome monitoring and alerts, not just uptime), a tested kill switch that stops it without a deployment, a log detailed enough to list and reverse its actions, a fallback to the manual process, and a runbook naming who decides what. When an incident happens: contain first, assess which actions and customers were affected, reverse or correct them, find the root cause from traces (context, tools, permissions, model change or manipulation), fix the control that failed, re-run evaluations and update the runbook.",
        ],
      },
      {
        heading: "What counts as an agent incident",
        body: [],
        table: {
          headers: ["Type", "Example", "Typical cause"],
          rows: [
            ["Wrong action", "Refunds issued twice; records overwritten", "Non-idempotent tool, retry loop, bad data"],
            ["Wrong statement", "Agent promises a policy that does not exist", "Ungrounded answer, outdated source"],
            ["Data exposure", "Agent includes another customer's details", "Retrieval without tenant scoping"],
            ["Manipulation", "Agent follows instructions hidden in an email", "Prompt injection (goal hijack)"],
            ["Runaway cost", "Token spend jumps tenfold overnight", "Loop, oversized context, traffic spike"],
            ["Silent degradation", "Accuracy drops after a model update", "Unevaluated change"],
          ],
        },
      },
      {
        heading: "Before an incident: the minimum preparation",
        body: [],
        checklist: [
          "**Detection:** outcome metrics (error rate, escalation rate, refunds, complaints), cost alerts and anomaly alerts on action volume; see [[/blogs/ai-agent-observability|AI agent observability]]",
          "**Kill switch:** a configuration flag or credential revocation that stops the agent in minutes, tested regularly",
          "**Degraded modes:** read-only mode, approval-required mode, or routing all cases to people",
          "**Action log:** every write with enough detail to identify and reverse it",
          "**Compensating actions:** scripted reversals for common writes (void credit, restore record)",
          "**Runbook:** who is on call, who decides to stop the agent, who talks to customers",
          "**Version records:** model, prompt, tool and policy versions per run",
        ],
        callout: {
          type: "takeaway",
          text: "If stopping an agent requires a code deployment, you do not have a kill switch. Test the switch the same way you test backups.",
        },
      },
      {
        heading: "During an incident: contain, then assess",
        body: [
          "**Contain first.** Switch the agent to a degraded mode or stop it. Do not wait to understand the cause; agents can repeat a mistake hundreds of times while you investigate. If manipulation is suspected, revoke the agent's credentials and those of any connected tools.",
          "**Assess impact.** Use the action log to list everything the agent did in the affected period: which records, customers, amounts and messages. Narrow by the run IDs and tools involved. This list drives remediation and any notifications.",
          "**Reverse and remediate.** Run compensating actions where possible, correct records, and contact affected customers with a clear explanation and fix. Some actions (messages sent, information disclosed) cannot be undone; correct them and record what was done.",
        ],
      },
      {
        heading: "Finding the root cause",
        body: [
          "Agent incidents rarely have a single bug. Read the traces of affected runs and work through the layers:",
        ],
        table: {
          headers: ["Layer", "Question"],
          rows: [
            ["Context", "Did the agent have wrong, stale, missing or injected information?"],
            ["Tools", "Did a tool return an error, partial data or allow an unsafe action?"],
            ["Permissions", "Could the agent do more than its task required?"],
            ["Approvals", "Did an approval step exist, and was it meaningful?"],
            ["Changes", "Did a model, prompt, tool or data change precede the incident?"],
            ["Input", "Was there adversarial content (emails, documents, web pages)?"],
          ],
        },
      },
      {
        heading: "After an incident: fix the control, not just the case",
        body: [
          "Patching the prompt for the specific case is rarely enough. Fix the control that let the mistake through: narrow a tool, add a validation, scope retrieval per tenant, add a threshold for approval, make a write idempotent, add a cost limit. Add the incident to your evaluation set so it is tested on every future change, re-run evaluations and record the change. The OWASP Top 10 for Agentic Applications is a useful checklist for which class of control failed; see [[/blogs/owasp-top-10-agentic-applications|the OWASP agentic guide]].",
        ],
        cta: {
          title: "Need agents you can stop, audit and repair?",
          description: "ZSpace Labs builds kill switches, degraded modes, action logs and runbooks into production agents. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Communicating with customers and stakeholders",
        body: [
          "Be direct: what happened, who was affected, what you have done and what changes. Do not blame \"the AI\"; customers and regulators hold the business responsible, as covered in [[/blogs/ai-agent-accountability|who is responsible when an AI agent makes a mistake]]. Where personal data is involved, follow your data breach procedures and legal notification duties.",
        ],
      },
      {
        heading: "Practise",
        body: [
          "Run a short exercise each quarter for important agents: simulate a manipulation or a runaway loop, trigger the kill switch, list the affected actions from logs and reverse a sample. The first exercise usually reveals a missing log field or a switch nobody can find. See [[/blogs/ai-red-teaming|AI red teaming]] for adversarial testing.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Agents will make mistakes; the difference between a minor incident and a serious one is preparation. Detect outcomes, keep a tested kill switch and degraded modes, log every action so it can be reversed, contain before investigating, and fix the control that failed. Then practise, so the plan works when it matters.",
          "The detail behind two steps of this plan is covered separately: [[/blogs/ai-agent-rollback|how to safely undo autonomous actions]] and [[/blogs/ai-agent-audit-trail|how to build an audit trail for agent actions]].",
        ],
      },
    ],
  },

  // ---------------------------------------- BUILD VS BUY AI AGENTS
  {
    slug: "build-vs-buy-ai-agents",
    title: "Build vs Buy AI Agents: Agent Platforms vs Custom Development",
    seoTitle: "Build vs Buy AI Agents: Agent Platforms vs Custom Development",
    excerpt:
      "When to use an agent platform like Agentforce, Copilot Studio or Gemini Enterprise, when to build custom, and how hybrid, lock-in and cost compare.",
    category: "AI & Automation",
    banner: "buildvsbuyagents",
    sceneKind: "workflow",
    bannerAlt:
      "Buying an agent platform, building a custom agent and a hybrid approach (highlighted) compared by time to start, fit to process, integrations, control and cost model.",
    date: "2026-10-07",
    updated: "2026-10-08",
    readingTime: "5 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["b2b-enterprise", "saas-technology", "professional-services"],
    relatedSlugs: ["ai-agent-roi", "ai-agent-development", "which-processes-suit-ai-agents"],
    faqs: [
      { q: "Should we build or buy an AI agent?", a: "Buy, or configure a platform, when the agent works mainly inside one vendor's ecosystem (CRM, office suite, helpdesk) and the process is standard. Build when the agent is core to your product or differentiation, spans several systems, needs custom controls, or platform pricing does not fit your volume. Many organizations do both." },
      { q: "What are the main AI agent platforms?", a: "Ecosystem platforms such as Salesforce Agentforce, Microsoft Copilot Studio, ServiceNow and Google's Gemini Enterprise; cloud agent services such as Amazon Bedrock AgentCore and Google Cloud's agent tools; and developer toolkits such as OpenAI's AgentKit and Agents SDK, Anthropic's Claude Agent SDK and open-source frameworks." },
      { q: "Is building a custom agent expensive?", a: "The model is not the main cost. Integrations, controls, evaluation and maintenance are. A narrow custom agent on systems with good APIs can be modest; a broad agent across legacy systems is a substantial project." },
      { q: "What about vendor lock-in?", a: "Platforms tie agent logic, data and pricing to their ecosystem. Reduce lock-in by keeping business logic in your own APIs, using open protocols such as MCP for tools, and owning your evaluation sets and logs." },
      { q: "Can we start with a platform and build later?", a: "Yes. A common path is to prove value with a platform agent inside an existing tool, then build custom agents for cross-system or differentiating work once requirements are clear." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Use a vendor agent platform when the work lives mainly inside that vendor's ecosystem (CRM, office suite, helpdesk, ITSM), the process is close to standard, and the pricing fits your volume: you get identity, data access and governance largely built in. Build a custom agent when it spans several systems, is core to your product or differentiation, needs controls the platform cannot express, or would be expensive at your volume on per-action pricing. Most organizations end up hybrid: platform agents for ecosystem tasks, custom agents for cross-system and product work, connected through APIs and MCP.",
        ],
      },
      {
        heading: "The three categories of options",
        body: [
          "The market has settled into three broad groups. Product names and packaging change frequently; check current vendor documentation.",
        ],
        table: {
          headers: ["Category", "Examples", "Strength", "Trade-off"],
          rows: [
            ["Ecosystem agent platforms", "Salesforce Agentforce, Microsoft Copilot Studio, ServiceNow, Google Gemini Enterprise", "Native access to the vendor's data, identity and admin controls", "Best inside one ecosystem; pricing and logic tied to the vendor"],
            ["Cloud agent services", "Amazon Bedrock AgentCore, Google Cloud's agent-building tools, Microsoft Foundry", "Managed runtime, identity, memory and observability building blocks", "Still requires engineering; cloud-specific"],
            ["Developer toolkits and frameworks", "OpenAI AgentKit and Agents SDK, Anthropic Claude Agent SDK, open-source frameworks", "Full control over logic, tools and models", "You own operation, security and maintenance"],
          ],
        },
      },
      {
        heading: "When buying (configuring a platform) is the right call",
        body: [],
        checklist: [
          "The data and actions the agent needs are mostly in one vendor's system (for example, a CRM or helpdesk you already use)",
          "The use case is common: case summarization, lead qualification, IT requests, knowledge answers",
          "Your team configures rather than codes, and the platform's admin and governance tools meet your needs",
          "Speed to a working pilot matters more than fine control",
          "The vendor's pricing model is predictable at your expected volume",
        ],
      },
      {
        heading: "When building is the right call",
        body: [],
        checklist: [
          "The agent crosses several systems from different vendors, including your own databases or legacy tools",
          "The agent is part of your product or customer experience and differentiates you",
          "You need specific controls: custom approvals, domain validation, strict data residency, particular models",
          "High volume makes per-conversation or per-action platform pricing expensive",
          "You need full traces and evaluation in your own environment",
        ],
        callout: {
          type: "takeaway",
          text: "Pick the existing system of record first and the agent approach second. An agent that lives where the data and permissions already are is cheaper to build and easier to govern.",
        },
      },
      {
        heading: "Total cost: compare like with like",
        body: [
          "Platform and custom costs show up in different places, so compare them over two or three years, not by licence price alone.",
        ],
        table: {
          headers: ["Cost", "Platform", "Custom"],
          rows: [
            ["Licences and usage", "Seats, credits, per-conversation or per-action fees", "Model usage, hosting, observability tools"],
            ["Build effort", "Configuration, connectors, testing", "Engineering for tools, orchestration, controls, UI"],
            ["Integrations outside the ecosystem", "Often extra connectors or middleware", "Direct, but you build and maintain them"],
            ["Governance and security", "Largely provided; must be configured", "You design and operate it"],
            ["Maintenance", "Vendor upgrades; your configuration upkeep", "Model, prompt, tool and dependency updates"],
            ["Switching cost", "High; logic lives in the platform", "Lower if built on open protocols"],
          ],
        },
        cta: {
          title: "Comparing a platform agent with a custom build?",
          description: "ZSpace Labs evaluates both on your process and data, builds the business case and implements whichever wins, including hybrid designs. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Reducing lock-in either way",
        body: [
          "Keep business rules and data access in your own APIs rather than inside agent prompts or platform configuration. Expose tools through open protocols such as MCP, which most platforms and frameworks now support, so the same tools work across agents. Own your evaluation sets, logs and prompts. Give agents identities in your identity provider; see [[/blogs/ai-agent-authentication|AI agent identity and authentication]]. These choices make it practical to move an agent between platforms or from platform to custom as needs change.",
        ],
      },
      {
        heading: "A hybrid pattern that works",
        body: [
          "A mid-sized company uses its CRM vendor's agent for account summaries and lead follow-ups inside the CRM, its office suite's agent builder for internal knowledge questions, and a custom agent for order exception handling that spans the store, ERP and carrier APIs. Shared tools are exposed through an internal MCP server and APIs, identities come from one provider and all agents log to the same observability stack. Each choice follows where the work and data live.",
        ],
      },
      {
        heading: "How to decide",
        body: [],
        checklist: [
          "**1. Define the process and outcome** and check it suits an agent ([[/blogs/which-processes-suit-ai-agents|which processes suit AI agents]])",
          "**2. Map systems and data** the agent must read and change",
          "**3. Shortlist** the platform of your main system of record and a custom option",
          "**4. Prototype both** on the same real cases if the decision is close",
          "**5. Model three-year cost** and switching cost ([[/blogs/ai-agent-roi|AI agent ROI]])",
          "**6. Check governance:** identity, audit, data residency and approvals on each option",
        ],
      },
      {
        heading: "Four Options, Not Two",
        body: [
          "Build vs buy hides two middle options that often fit best. **Integrate**: connect an off-the-shelf AI product to your systems through APIs, webhooks or MCP so it works with your data. **Customize**: configure an agent platform heavily (tools, workflows, policies) without building the runtime yourself. Score each option on business differentiation, cost over two to three years, time to deploy, data sensitivity, workflow complexity, integration needs, maintenance, lock-in, security, scalability and your team's engineering capacity.",
          "For the integration side, see [[/blogs/ai-automation-integration-options|APIs vs webhooks vs MCP vs RPA]] and [[/blogs/ai-automation-architecture|AI automation architecture]].",
        ],
        table: {
          headers: ["Criterion", "Buy", "Integrate", "Customize a platform", "Build"],
          rows: [
            ["Differentiation", "Low", "Low–medium", "Medium", "High"],
            ["Time to deploy", "Fastest", "Fast", "Medium", "Slowest"],
            ["Fit to complex workflows", "Low", "Medium", "Medium–high", "High"],
            ["Control over data and security", "Vendor terms", "Shared", "Vendor platform + your config", "Full"],
            ["Maintenance burden", "Vendor", "Integrations", "Configuration + integrations", "Everything"],
            ["Lock-in risk", "High", "Medium", "High", "Low (if built on open standards)"],
          ],
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Build vs buy is less about technology than about where the work lives. Use platforms where an ecosystem already holds the data and permissions; build where agents cross systems, differentiate your product or need control. Keep logic, tools and evidence portable, and the decision can change as your needs do. For the build side, see [[/blogs/ai-agent-development|AI agent development]].",
          "Before buying, run a structured assessment; see [[/blogs/ai-agent-vendor-assessment|how to assess an AI agent vendor]].",
        ],
      },
    ],
  },
];
