import type { BlogPost } from "./blog-data";

/**
 * AI agent governance cluster, part two (published 2026-10-08): ISO/IEC
 * 42001 and AI agent vendor assessment (research replacements), and the
 * AI-native vs AI-enabled comparison (absorbing the "AI-native application
 * architecture" proposal). Evergreen copy: no specific years in titles,
 * headings, FAQs or body text. Sources checked 2026-10-08: ISO/IEC 42001,
 * 42005 and 42006 (ISO), NIST AI Risk Management Framework, OWASP Top 10
 * for Agentic Applications.
 */

export const aiGovernancePosts2: BlogPost[] = [
  // ---------------------------------------- ISO 42001
  {
    slug: "iso-42001-ai-management-system",
    title: "ISO/IEC 42001: What an AI Management System Means for Your Business",
    seoTitle: "ISO/IEC 42001 Explained: What an AI Management System Means",
    excerpt:
      "What ISO/IEC 42001 requires, how certification works, how it relates to NIST AI RMF and the EU AI Act, and whether your business should pursue it.",
    category: "AI & Automation",
    banner: "iso42001cycle",
    sceneKind: "security",
    bannerAlt:
      "ISO/IEC 42001 management cycle: Context + scope, Leadership + policy, Risk + impact assessment (highlighted), Controls, Operate + monitor, Audit + improve.",
    date: "2026-10-08",
    readingTime: "5 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["fintech", "healthcare-healthtech", "saas-technology"],
    relatedSlugs: ["ai-governance-framework", "ai-agent-governance", "ai-agent-vendor-assessment"],
    faqs: [
      { q: "What is ISO/IEC 42001?", a: "An international standard that specifies requirements for an AI management system (AIMS): the policies, roles, risk and impact assessment processes, controls, monitoring and continual improvement an organization uses to develop, provide or use AI responsibly. It follows the same management-system structure as ISO/IEC 27001." },
      { q: "Can a company be certified to ISO/IEC 42001?", a: "Yes. It is a certifiable management system standard. Accredited certification bodies audit the organization against its requirements; ISO/IEC 42006 sets requirements for bodies that audit and certify AI management systems." },
      { q: "Is ISO/IEC 42001 mandatory?", a: "No. It is voluntary. Customers, partners or regulators may ask for evidence of AI governance, and certification is one way to provide it, but no general law requires it." },
      { q: "How does it relate to the EU AI Act and NIST AI RMF?", a: "The EU AI Act is law with obligations by risk category. The NIST AI Risk Management Framework is voluntary guidance. ISO/IEC 42001 is a certifiable management system that can organize how you meet both, but certification does not by itself prove legal compliance." },
      { q: "Is it relevant for small companies?", a: "It can be, especially for AI product companies selling to enterprises or regulated sectors where buyers ask for assurance. Many small companies start by aligning with the standard's structure before deciding on certification." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "ISO/IEC 42001 is the international standard for an **AI management system**: the organizational system of policy, roles, risk and impact assessment, controls, monitoring and continual improvement for developing, providing or using AI. It is voluntary and certifiable by accredited auditors, built on the same structure as ISO/IEC 27001 for information security. It is most valuable for AI product companies selling to enterprises and regulated sectors, and for organizations that want one structured way to organize AI governance. Certification shows a functioning management system; it does not on its own prove that any specific AI system is safe or legally compliant.",
        ],
      },
      {
        heading: "What the standard covers",
        body: [
          "Like other ISO management system standards, ISO/IEC 42001 sets out clauses for context, leadership, planning, support, operation, performance evaluation and improvement, and adds annexes specific to AI: a normative annex of AI controls grouped under control objectives, implementation guidance for those controls, a catalogue of AI-specific risk sources and objectives, and guidance on use across domains and sectors.",
        ],
        table: {
          headers: ["Area", "What you need to show"],
          rows: [
            ["Context and scope", "Which AI systems, roles (developer, provider, user) and boundaries the system covers"],
            ["Leadership and policy", "An AI policy, assigned responsibilities and management commitment"],
            ["Risk and impact assessment", "A process to assess AI risks and impacts on individuals, groups and society"],
            ["Controls", "Selected controls from the annex (and others) with justification for exclusions"],
            ["Operation", "AI system lifecycle processes: data, development, verification, deployment, monitoring"],
            ["Third parties", "Management of suppliers, customers and partners in the AI lifecycle"],
            ["Performance evaluation", "Monitoring, internal audit, management review"],
            ["Improvement", "Nonconformities, corrective action and continual improvement"],
          ],
        },
      },
      {
        heading: "The related standards",
        body: [
          "ISO/IEC 42001 sits in a growing family. **ISO/IEC 42005** gives guidance on AI system impact assessment, which supports the impact assessment process 42001 requires. **ISO/IEC 42006** sets requirements for the bodies that audit and certify AI management systems, which is what makes an accredited certificate different from a self-declaration. **ISO/IEC 23894** provides guidance on AI risk management.",
        ],
      },
      {
        heading: "ISO/IEC 42001 vs NIST AI RMF vs the EU AI Act",
        body: [],
        table: {
          headers: ["", "ISO/IEC 42001", "NIST AI RMF", "EU AI Act"],
          rows: [
            ["Type", "International management system standard", "Voluntary framework", "Regulation (law)"],
            ["Certifiable", "Yes", "No", "Conformity assessment for some high-risk systems"],
            ["Focus", "Organization-wide AI governance system", "Managing AI risks (govern, map, measure, manage)", "Obligations by risk category and role"],
            ["Best used for", "Structured, auditable governance; customer assurance", "Practical risk activities and vocabulary", "Legal requirements in the EU market"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Use the frameworks together: ISO/IEC 42001 as the management structure, NIST AI RMF for practical risk activities, and the EU AI Act (and other laws) for the legal obligations the structure must meet.",
        },
      },
      {
        heading: "Who should consider certification",
        body: [],
        table: {
          headers: ["Situation", "Recommendation"],
          rows: [
            ["AI product company selling to enterprises or regulated sectors", "Strong candidate; buyers increasingly ask for AI governance assurance"],
            ["Company already certified to ISO/IEC 27001", "Efficient extension; structures and audits align"],
            ["Organization using AI internally with moderate risk", "Align with the structure; certify only if customers or regulators value it"],
            ["Early-stage startup with one AI feature", "Adopt the practices lightly; certification usually later"],
          ],
        },
      },
      {
        heading: "How it applies to AI agents",
        body: [
          "The standard is technology-neutral, so agents fit inside it as AI systems with higher operational risk. In practice the management system needs evidence that agent-specific controls exist: inventories and owners, identities and least-privilege access, runtime policy checks, approvals for consequential actions, audit trails, evaluation on every change and incident response. Our [[/blogs/ai-agent-governance|AI agent governance framework]] maps closely to what auditors will look for.",
        ],
        cta: {
          title: "Preparing AI systems for governance audits?",
          description: "ZSpace Labs implements the technical controls behind AI governance (inventories, access, logging, evaluation and incident response) so policies have evidence behind them. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "A practical path to readiness",
        body: [],
        checklist: [
          "Define scope: which AI systems and which roles (developer, provider, user)",
          "Inventory AI systems with owners and risk tiers (see [[/blogs/ai-governance-framework|AI governance framework]])",
          "Write an AI policy people can follow; assign responsibilities",
          "Set up risk and impact assessment for new and changed systems",
          "Select controls and document justifications",
          "Produce evidence: logs, evaluations, reviews, supplier assessments (see [[/blogs/ai-agent-vendor-assessment|AI vendor assessment]])",
          "Run internal audit and management review; fix gaps",
          "Engage an accredited certification body if certification is the goal",
        ],
      },
      {
        heading: "Evidence auditors typically look for",
        body: [
          "A management system is judged on evidence that processes run, not on documents alone. Expect requests along these lines:",
        ],
        table: {
          headers: ["Requirement area", "Example evidence"],
          rows: [
            ["Scope and inventory", "List of AI systems in scope with owners and roles"],
            ["Policy and roles", "Approved AI policy; responsibility assignments; training records"],
            ["Risk and impact assessment", "Completed assessments for new and changed systems"],
            ["Controls", "Statement of applicability; configuration records; access reviews"],
            ["Lifecycle", "Design records, evaluation results, release approvals, monitoring dashboards"],
            ["Third parties", "Supplier assessments and contract terms"],
            ["Incidents and improvement", "Incident records, corrective actions, management review minutes"],
          ],
        },
      },
      {
        heading: "Common misconceptions",
        body: [],
        checklist: [
          "**\"Certification means our AI is safe.\"** It shows a functioning management system, not that each system is risk-free",
          "**\"It is the same as EU AI Act compliance.\"** It can support compliance but does not replace legal obligations",
          "**\"It is only for AI developers.\"** Organizations that use or provide AI systems can implement it too",
          "**\"We need everything in Annex A.\"** Controls are selected based on risk, with exclusions justified",
          "**\"Paperwork is enough.\"** Without technical controls producing evidence, audits expose the gap",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "ISO/IEC 42001 turns AI governance into an auditable management system. It is most useful when customers or regulators want assurance, and it works best when real technical controls sit underneath the paperwork. Align early, certify when it matters to your market, and keep the evidence flowing from the systems themselves.",
        ],
      },
    ],
  },

  // ---------------------------------------- VENDOR ASSESSMENT
  {
    slug: "ai-agent-vendor-assessment",
    title: "How to Assess an AI Agent Vendor: Security, Data and Governance Questions",
    seoTitle: "How to Assess an AI Agent Vendor: Security, Data and Governance",
    excerpt:
      "The questions to ask before buying an AI agent platform or product: data use, security, identity, permissions, controls, evaluation, audit, incidents and exit.",
    category: "AI & Automation",
    banner: "vendorassessmap",
    sceneKind: "security",
    bannerAlt:
      "AI agent vendor assessment areas: Data (training use, residency, retention), Security (highlighted: identity, permissions, injection), Controls (approvals, limits, audit), Quality (evaluation, model changes, incidents) and Exit (export, standards).",
    date: "2026-10-08",
    readingTime: "5 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["b2b-enterprise", "fintech", "healthcare-healthtech"],
    relatedSlugs: ["build-vs-buy-ai-agents", "iso-42001-ai-management-system", "ai-agent-authentication"],
    faqs: [
      { q: "Why do AI agent vendors need a different assessment from other SaaS?", a: "Because agents act. Beyond the usual security and privacy checks, you need to know how the agent authenticates, what it can do in your systems, how its actions are limited, approved and logged, how it resists manipulation and how quality is maintained when models change." },
      { q: "What are the most important questions?", a: "Whether your data is used to train models, where it is processed and stored, how the agent's permissions are scoped, whether consequential actions can require approval, whether every action is logged and exportable, and what happens to your data and agents if you leave." },
      { q: "Is a certification enough?", a: "Certifications such as SOC 2, ISO/IEC 27001 or ISO/IEC 42001 are useful evidence of management systems, but they do not answer agent-specific questions about permissions, approvals and action logging. Ask those directly and test them." },
      { q: "Should we test the vendor ourselves?", a: "Yes. Run a pilot in a sandbox with your own scenarios, including adversarial inputs and failure cases, and check that controls and logs work as described." },
      { q: "How do we avoid lock-in?", a: "Prefer vendors that support open standards such as MCP for tools and standard identity protocols, let you export configurations, logs and data, and do not require your business rules to live only inside their platform." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Assess an AI agent vendor on five areas: **data and privacy** (training use, residency, retention, subprocessors), **security and identity** (how agents authenticate, delegated access, least privilege), **controls and audit** (approvals, limits, action logs you can export), **quality and operations** (evaluation, model change management, monitoring, incident response) and **commercial and exit** (pricing at your volume, data and configuration export, open standards). Ask for evidence, not just answers, and pilot the product in a sandbox with your own adversarial and failure scenarios before granting production access.",
        ],
      },
      {
        heading: "Why agent vendors need extra scrutiny",
        body: [
          "A standard SaaS security review asks whether a vendor protects your data. An agent vendor also acts inside your systems: it may read mailboxes, update CRM records, issue refunds or send messages on your behalf. That raises questions ordinary questionnaires do not cover: whose identity it acts under, what stops it doing too much, whether a manipulated document can redirect it, and whether you can prove afterwards what it did. The OWASP Top 10 for Agentic Applications is a useful lens for these risks; see [[/blogs/owasp-top-10-agentic-applications|the OWASP agentic guide]].",
        ],
      },
      {
        heading: "The assessment questions",
        body: [],
        table: {
          headers: ["Area", "Questions to ask", "Evidence to request"],
          rows: [
            ["Data use", "Is our data used to train or improve models? Can we opt out? How long are prompts, outputs and logs retained?", "Contract terms, data processing agreement"],
            ["Data location", "Where is data processed and stored? Which subprocessors and model providers are involved?", "Subprocessor list, region options"],
            ["Identity", "How does the agent authenticate to our systems? Does it act on behalf of users with scoped, revocable delegation?", "Architecture docs, OAuth scopes"],
            ["Permissions", "Can we restrict tools and actions per agent and per user? Are limits enforced in code?", "Admin console demo, configuration docs"],
            ["Approvals and limits", "Can consequential actions require approval? Are there spend, volume and rate limits?", "Demo of approval flows and limits"],
            ["Audit", "Is every action logged with identity, inputs, outputs and approver? Can we export logs to our systems?", "Sample audit export"],
            ["Manipulation resistance", "How is prompt injection from documents, emails and web content handled?", "Security documentation, test results"],
            ["Quality and change", "How are model and prompt changes evaluated and communicated? Can we pin versions?", "Release notes process, evaluation approach"],
            ["Incidents", "How are incidents detected, contained and notified? Is there a kill switch we control?", "Incident policy, SLAs"],
            ["Certifications", "Which assurance reports and certifications cover the product?", "SOC 2 report, ISO/IEC 27001, ISO/IEC 42001 certificates"],
            ["Exit", "Can we export data, configurations and logs? What happens to our data on termination?", "Contract exit clauses"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Certificates show that a vendor runs a management system. Only a demonstration and a pilot show whether the agent's permissions, approvals and logs work the way you need.",
        },
      },
      {
        heading: "Run a structured pilot",
        body: [
          "Before production access, pilot the vendor in a sandbox or test tenant with masked data: normal cases from your own workflows, edge cases, tool failures and adversarial inputs such as instructions hidden in documents. Confirm that restricted actions are refused, approvals trigger, limits hold and audit logs capture what happened. See [[/blogs/ai-agent-sandbox|AI agent sandbox]] for how to set up the environment.",
        ],
      },
      {
        heading: "Scoring and decision",
        body: [
          "Weight areas by your risk tier. For an agent that only drafts internal summaries, data use and retention dominate. For an agent that acts on customer accounts or money, identity, permissions, approvals and audit become pass/fail requirements. Record the assessment, the evidence and any accepted risks with an owner, and schedule a re-assessment, since vendors change models and features frequently. If gaps are fundamental, reconsider whether to integrate, customize or build instead; see [[/blogs/build-vs-buy-ai-agents|build vs buy AI agents]].",
        ],
        cta: {
          title: "Evaluating AI agent platforms?",
          description: "ZSpace Labs helps teams assess AI agent vendors against their own workflows, runs sandbox pilots and builds the integrations and controls around the chosen platform. See [[/services/ai-automation|AI automation services]].",
        },
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Using a generic SaaS questionnaire with no agent-specific questions",
          "Accepting a certificate as proof that agent actions are controlled",
          "Granting broad OAuth scopes during setup \"to make it work\"",
          "No pilot with adversarial or failure scenarios",
          "No exit plan for data, configurations and logs",
        ],
      },
      {
        heading: "Red flags",
        body: [],
        checklist: [
          "Vague or changing answers about whether your data trains models",
          "Agents that require broad administrator access to work",
          "No way to require approval for consequential actions",
          "Action logs that cannot be exported or lack user and input detail",
          "No documented approach to prompt injection",
          "Model changes rolled out without notice or a way to pin versions",
          "No data export or deletion commitments at contract end",
        ],
      },
      {
        heading: "Contract points to request",
        body: [
          "Ask legal and procurement to cover the agent-specific points, not just standard SaaS terms: no training on your data without explicit opt-in; data residency and retention limits; subprocessor change notice; security incident notification timelines; notice of material model or behaviour changes; audit log retention and export; service levels for the agent's availability and support; liability and indemnities appropriate to the actions the agent can take; and exit assistance with export of data, configurations and logs. For who carries responsibility toward your customers regardless of contract terms, see [[/blogs/ai-agent-accountability|who is responsible when an AI agent makes a mistake]].",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Buying an AI agent means letting a vendor's software act inside your business. Assess data use, identity, permissions, approvals, audit, quality management and exit, ask for evidence, and prove the controls in a pilot. For the governance standard many vendors cite, see [[/blogs/iso-42001-ai-management-system|ISO/IEC 42001]], and for identity requirements, [[/blogs/ai-agent-authentication|AI agent authentication]].",
        ],
      },
    ],
  },

  // ---------------------------------------- AI-NATIVE VS AI-ENABLED
  {
    slug: "ai-native-vs-ai-enabled-software",
    title: "AI-Native vs AI-Enabled Software: What Actually Changes in the Architecture",
    seoTitle: "AI-Native vs AI-Enabled Software: What Actually Changes",
    excerpt:
      "The difference between adding AI features and designing a product around AI: architecture, UX, data, evaluation, permissions and business model.",
    category: "Web Development",
    banner: "ainativecompare",
    sceneKind: "code",
    bannerAlt:
      "AI-enabled vs AI-native software (AI-native highlighted) compared by architecture, UX, data, evaluation and permissions.",
    date: "2026-10-08",
    updated: "2026-10-08",
    readingTime: "7 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise"],
    relatedSlugs: ["turn-saas-product-into-ai-native-product", "ai-powered-saas-development", "ai-automation-architecture"],
    faqs: [
      { q: "What is AI-enabled software?", a: "An existing product with AI features added, such as a summarize button, a chat assistant or smart suggestions, while the core workflows, data model and architecture stay as they were." },
      { q: "What is AI-native software?", a: "Software whose architecture, workflows and user experience are designed around AI capabilities: models interpret intent, agents carry out multi-step work through tools, deterministic rules and verification keep it safe, and evaluation and observability are part of the core system." },
      { q: "Does adding a chatbot make a product AI-native?", a: "No. A chatbot bolted onto a dashboard is AI-enabled. A product becomes AI-native when the core jobs users hire it for are redesigned so AI does meaningful work inside them, with the data, tools, permissions and controls to do it reliably." },
      { q: "Is AI-native always better?", a: "No. Many products should stay AI-enabled: AI helps at specific points while deterministic workflows remain the backbone. AI-native designs bring more capability and more complexity, cost and risk." },
      { q: "What is the biggest architectural change?", a: "Introducing probabilistic components into the core path. That requires deterministic business rules around them, verification of outputs and actions, evaluation as part of releases, and observability of quality, not only uptime." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**AI-enabled** software is an existing product plus AI features: a summarize button, a chat panel, smarter search. The architecture and core workflows stay the same. **AI-native** software is designed around AI capabilities: models interpret what users want, agents do multi-step work through tools, deterministic rules and verification keep results safe, and evaluation and observability are part of the core system. Adding a chatbot does not make a product AI-native; redesigning the main jobs users come for, with the data, tools and controls to support AI doing real work, does. Neither is automatically better: AI-native adds capability along with cost, complexity and risk.",
        ],
      },
      {
        heading: "Two architectures",
        body: [
          "A traditional product moves requests through a predictable path. An AI-native product adds layers whose behaviour is probabilistic, and surrounds them with deterministic controls.",
        ],
        code: {
          label: "Traditional vs AI-native request path",
          text: `TRADITIONAL
UI → API → business logic → database

AI-NATIVE
UI (conversational + direct manipulation)
 → AI interface (intent, clarification)
 → model(s)
 → context (retrieval, user, business state)
 → tools (task-shaped actions)
 → business logic (deterministic rules, permissions)
 → data
 → actions (with approvals where needed)
 → verification (post-action checks, evaluation, audit)`,
        },
        callout: {
          type: "takeaway",
          text: "The defining change is a probabilistic component in the core path. Everything that makes AI-native products reliable, from rules and verification to evaluation and observability, exists to contain it.",
        },
      },
      {
        heading: "AI-enabled vs AI-native, compared",
        body: [],
        table: {
          headers: ["Dimension", "AI-enabled", "AI-native"],
          rows: [
            ["Architecture", "AI calls added at a few points", "AI layer, tools, context and verification designed in"],
            ["UX", "Existing screens plus an AI panel or button", "Users state goals; AI proposes and executes; UI shows plans, progress and approvals"],
            ["Data", "Existing data model", "Data and APIs designed to be retrieved and acted on by AI"],
            ["Workflows", "Unchanged; AI assists steps", "Redesigned so AI does meaningful parts of the work"],
            ["Evaluation", "Spot checks of the feature", "Continuous evaluation as part of every release"],
            ["Permissions", "User permissions only", "Agent identities, delegated permissions, action limits"],
            ["Observability", "Uptime and errors", "Quality, cost, tool calls, interventions, outcomes"],
            ["Business model", "Seats, AI as add-on", "Often usage- or outcome-linked, because AI cost scales with work done"],
          ],
        },
      },
      {
        heading: "Illustrative examples",
        body: [
          "Illustrative product designs, not claims about specific companies:",
        ],
        table: {
          headers: ["Product", "AI-enabled version", "AI-native version"],
          rows: [
            ["Helpdesk", "Suggested replies for agents", "Agent resolves routine cases end to end with tools and approvals; people handle exceptions"],
            ["Accounting tool", "Receipt OCR", "Agent reconciles transactions, proposes entries, explains anomalies; accountant approves"],
            ["CRM", "Email drafting button", "Agent researches accounts, updates records, prepares next actions within permissions"],
            ["Project tool", "Summaries of tasks", "Agent turns goals into plans, tracks progress, chases owners, reports risks"],
          ],
        },
      },
      {
        heading: "What AI-native requires",
        body: [],
        checklist: [
          "**Deterministic rules around the model:** permissions, limits and validations in code, not prompts",
          "**Task-shaped tools and APIs** for the actions AI performs (see [[/blogs/apis-for-ai-agents|APIs for AI agents]])",
          "**Context architecture:** retrieval, user and business state supplied per step",
          "**Structured outputs** and verification of every consequential result (see [[/blogs/llm-structured-outputs|structured outputs]])",
          "**Human oversight UX:** previews, approvals, undo, explanations",
          "**Evaluation in the release process** and quality observability in production",
          "**Cost architecture:** routing, caching and budgets, because AI cost scales with usage",
        ],
        cta: {
          title: "Deciding how far to take AI in your product?",
          description: "ZSpace Labs designs and builds AI-native product capabilities and the architecture behind them, from tools and context to evaluation and UX. See [[/services/website-development|web application development]] and [[/services/ai-automation|AI automation]].",
        },
      },
      {
        heading: "When to stay AI-enabled",
        body: [
          "AI-enabled is the right answer when the core workflow is deterministic and valued for predictability (billing, compliance records), when errors are costly and hard to verify, when your users do not want to delegate the work, or when AI usage costs would break your pricing. Adding well-chosen AI features to those products is good product work, not a failure to be AI-native.",
        ],
      },
      {
        heading: "Cost and performance implications",
        body: [
          "AI-native designs change the economics. Every AI step has a variable cost and latency, multi-step agents multiply both, and quality has to be paid for in evaluation and review. AI-enabled features are cheaper to run because AI sits at a few points. Before committing, model cost per task at realistic usage, decide which steps can use smaller models, and design the UX around latency (streaming, progress, background work). See [[/blogs/runaway-ai-agents|how to stop agents looping and running up costs]] and [[/blogs/small-language-models|small language models]].",
        ],
        table: {
          headers: ["Factor", "AI-enabled", "AI-native"],
          rows: [
            ["Variable cost per user", "Low", "Material; scales with work done"],
            ["Latency", "Isolated to AI features", "In the core path; needs UX design"],
            ["Quality assurance", "Feature-level checks", "Continuous evaluation and monitoring"],
            ["Engineering effort", "Moderate", "Significant: tools, controls, verification"],
          ],
        },
      },
      {
        heading: "Signals your product should move toward AI-native",
        body: [],
        checklist: [
          "Users spend most of their time on repetitive steps the product already has data for",
          "Customers ask the product to do the work, not just show it",
          "Competitors deliver the outcome with far fewer user steps",
          "Your domain logic is well encapsulated and can be exposed as tools",
          "Outcomes can be verified by rules or quick user review",
        ],
      },
      {
        heading: "Common misconceptions",
        body: [],
        checklist: [
          "**AI-native means chat-only.** Good AI-native products combine goals, conversation and direct manipulation",
          "**AI-native means no rules.** It needs more deterministic rules, not fewer",
          "**You must rebuild.** Most products get there by exposing existing logic as tools",
          "**The model is the product.** Data, tools, controls and UX are what make it reliable and defensible",
        ],
      },
      {
        heading: "What AI-native UX looks like",
        body: [
          "The architecture differences above show up directly in the interface. In an AI-enabled product, the interaction model is still screens and forms, with AI behind a button or in a side panel. In an AI-native product, **AI is a primary interface**: users state goals, the product proposes plans or generated workflows, and screens adapt to the task. Five UX properties follow from that. **Human control:** plans can be edited, consequential actions are confirmed and everything can be stopped. **State:** tasks persist and are visible outside the conversation, in task cards and activity timelines. **Memory:** the product remembers preferences and past decisions, visibly and editably. **Permissions:** the interface shows what the AI is allowed to do on the user's behalf. **Evaluation:** quality is measured per release, so interface behaviour does not silently change.",
          "The practical patterns are collected in [[/blogs/ai-interface-patterns|AI interface patterns]]; for interfaces assembled per request, see [[/blogs/generative-ui|generative UI]], and for deciding when the AI must ask first, [[/blogs/ai-action-confirmation-ux|AI action confirmation UX]].",
        ],
        table: {
          headers: [
            "UX aspect",
            "AI-enabled",
            "AI-native",
          ],
          rows: [
            [
              "Primary interaction",
              "Screens and forms; AI on request",
              "Goals and plans; screens adapt",
            ],
            [
              "Workflows",
              "Fixed, designed in advance",
              "Generated or adapted per task, within limits",
            ],
            [
              "Human control",
              "User does the work",
              "User directs, reviews and approves",
            ],
            [
              "State",
              "Lives in records",
              "Also in tasks, plans and activity history",
            ],
            [
              "Memory",
              "Per session, if any",
              "Persistent, visible and editable",
            ],
            [
              "Permissions shown to users",
              "Rarely needed",
              "Explicit: what the AI may do for you",
            ],
          ],
        },
      },
      {
        heading: "Conclusion",
        body: [
          "AI-native is an architectural and product commitment: AI does real work in the core path, and rules, tools, verification, evaluation and oversight are designed around it. AI-enabled adds AI at the edges. Choose by what your users need done, not by label. For moving an existing product toward AI-native, see [[/blogs/turn-saas-product-into-ai-native-product|how to turn a SaaS product into an AI-native product]]; for building one from scratch, [[/blogs/ai-powered-saas-development|AI-powered SaaS development]].",
        ],
      },
    ],
  },
];
