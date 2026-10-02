import type { BlogPost } from "./blog-data";

/**
 * AI knowledge hub, part thirty: supply chain, threat modelling and the
 * security testing checklist close the AI security cluster
 * (ai-security-business-applications remains the overview). The AI product
 * design cluster opens with its hub, ai-product-design.
 * Merged into `posts` in blog-data.ts.
 */

export const aiOpsPosts7: BlogPost[] = [
  // ---------------------------------------- 688 · AI SUPPLY CHAIN SECURITY
  {
    slug: "ai-supply-chain-security",
    title: "AI Supply Chain Security: How to Assess Models, Datasets and Dependencies",
    seoTitle: "AI Supply Chain Security: Models, Datasets, Packages and Services",
    excerpt:
      "How to secure the AI supply chain: model provenance and licences, safe model formats, signing, datasets and poisoning risk, package dependencies, third-party AI services and tools, AI bills of materials, vulnerability management and deployment controls.",
    category: "AI & Automation",
    banner: "aisupplychain",
    bannerAlt:
      "AI supply chain in four columns: models highlighted (Provenance, Licence, Format, Signature), data (Sources, Rights, Poisoning, Versions), software (Packages, Containers, SDKs, Frameworks) and services (Model APIs, Tools, MCP servers, Vendors).",
    date: "2026-10-02",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["cybersecurity", "b2b-enterprise", "fintech"],
    relatedSlugs: ["ai-security-testing", "ai-data-lineage", "llm-self-hosting"],
    faqs: [
      { q: "What is the AI supply chain?", a: "Everything an AI system depends on that you did not build: pre-trained models and weights, datasets, ML frameworks and packages, containers, model APIs, third-party tools, plugins and MCP servers, and the vendors behind them." },
      { q: "What are the main AI supply chain risks?", a: "Tampered or malicious model files, unclear licences, poisoned or improperly sourced training data, vulnerable or typosquatted packages, compromised third-party tools and changes in hosted services you rely on." },
      { q: "Why are some model file formats risky?", a: "Formats based on Python pickle can execute code when loaded. Safer formats such as safetensors store only tensors. Prefer them and avoid loading untrusted pickle-based files." },
      { q: "What is an AI bill of materials?", a: "An inventory of the models, datasets, software components and services an AI system uses, with versions, sources and licences. Standards such as CycloneDX include machine learning BOM support." },
      { q: "How do we verify a model's provenance?", a: "Download from official publishers, check hashes or signatures where provided, review model cards and licences, and record the exact version used. Model signing tools based on Sigstore are emerging." },
      { q: "What is data poisoning?", a: "Manipulating training or fine-tuning data, or content sources used for retrieval, so the resulting system behaves in ways an attacker wants, such as producing wrong answers for certain inputs." },
      { q: "Are open-weight models riskier than APIs?", a: "They shift risks. Open weights require you to verify files, licences and security of your serving stack. Hosted APIs shift risk to the vendor's practices, data handling and change management." },
      { q: "How do we manage vulnerabilities in AI dependencies?", a: "Scan packages and containers, track advisories for ML frameworks and serving software, pin versions, update regularly and test after updates." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Secure the AI supply chain by inventorying every model, dataset, package, container and AI service you depend on; obtaining models from official sources with checked hashes or signatures and safe formats such as safetensors; reviewing licences and data rights; protecting training and retrieval data from poisoning; scanning and pinning software dependencies; assessing third-party model APIs, tools and MCP servers as vendors; recording all of it in an AI bill of materials; and controlling what reaches production through review and signed artefacts.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "This article extends software supply chain practice to AI. Lineage of data is covered in [[/blogs/ai-data-lineage|AI data lineage]], third-party tools in [[/blogs/ai-tool-security|AI tool security]] and [[/blogs/mcp-security|MCP security]], self-hosted models in [[/blogs/llm-self-hosting|LLM self-hosting]] and the overall security picture in [[/blogs/ai-security-business-applications|AI security for business applications]].",
        ],
      },
      {
        heading: "What the AI Supply Chain Includes",
        body: [],
        table: {
          headers: ["Component", "Examples", "Key risks"],
          rows: [
            ["Pre-trained models", "Open-weight LLMs, embedding and vision models", "Tampered files, unsafe formats, licence terms, hidden behaviour"],
            ["Datasets", "Public corpora, purchased data, scraped content", "Rights, consent, poisoning, quality"],
            ["Software", "ML frameworks, inference servers, SDKs, containers", "Vulnerabilities, typosquatting, abandoned packages"],
            ["Hosted AI services", "Model APIs, embedding APIs, vector databases", "Data handling, model changes, outages"],
            ["Tools and integrations", "Plugins, MCP servers, agent tools", "Malicious descriptions, excess permissions, compromise"],
          ],
        },
      },
      {
        heading: "Models: Provenance, Formats and Licences",
        body: [
          "Download models from official publisher accounts, verify hashes where published and record the exact revision. Prefer the [[https://huggingface.co/docs/safetensors/index|safetensors]] format, which stores weights without executable code, over pickle-based formats that can run code when loaded; never load untrusted pickle files on systems with access to secrets. Emerging model signing, such as the OpenSSF [[https://github.com/sigstore/model-transparency|model transparency]] project built on Sigstore, lets you verify that a model came from its claimed publisher.",
          "Read licences carefully. Many popular models are open-weight but not open-source, with use restrictions, attribution requirements or thresholds; see [[/blogs/llm-self-hosting|LLM self-hosting]] for the distinction.",
        ],
      },
      {
        heading: "Data: Rights and Poisoning",
        body: [
          "For datasets used in training, fine-tuning, evaluation or retrieval, record source, licence or legal basis, collection date and processing. Poisoning risk applies wherever outsiders can influence data: public web data, user-generated content, shared documents indexed for retrieval. Restrict who can write to sources that feed AI systems, monitor changes, validate datasets before training and keep provenance so suspicious data can be traced and removed. CISA and partner agencies have published [[https://www.cisa.gov/resources-tools/resources/ai-data-security-best-practices-securing-data-used-train-operate-ai-systems|AI data security best practices]] covering these risks.",
        ],
        cta: {
          title: "Bringing open models or third-party AI tools into production?",
          description: "ZSpace Labs assesses AI dependencies and builds controlled deployment pipelines for models and tools. See [[/services/ai-automation|AI engineering services]].",
        },
      },
      {
        heading: "Software Dependencies",
        body: [
          "AI projects pull in large dependency trees: ML frameworks, tokenizers, inference servers, vector database clients and agent frameworks, many moving fast. Apply normal software supply chain controls: pin versions, use lockfiles, scan for known vulnerabilities, verify package names to avoid typosquatting (AI coding assistants sometimes suggest non-existent packages), build containers from trusted bases and generate provenance for builds using frameworks such as [[https://slsa.dev/|SLSA]].",
        ],
      },
      {
        heading: "Third-Party AI Services and Tools",
        body: [
          "Treat model API providers, AI SaaS vendors, plugins and MCP servers as suppliers. Assess data processing terms, retention, training use, regions, security certifications, incident notification and how model changes are communicated. For tools and MCP servers, review source or vendor reputation, required permissions and update practices, and watch for changed tool descriptions that could carry injected instructions.",
        ],
      },
      {
        heading: "AI Bill of Materials",
        body: [
          "An AI bill of materials lists models, datasets, software components and services with versions, sources and licences for each AI system. It speeds up response when a vulnerability or licence issue appears in a component, and it supports governance and customer questionnaires. The [[https://cyclonedx.org/capabilities/mlbom/|CycloneDX ML-BOM]] format is one standard way to express it; link it to your AI inventory in [[/blogs/ai-governance-framework|AI governance]].",
        ],
        diagram: {
          variant: "supplychainflow",
          alt: "AI supply chain control flow: Select, Verify source, Licence + data rights (highlighted), Scan, Record in AI-BOM, Registry + deploy.",
          caption: "Only components that pass verification and review should reach the internal registry production pulls from.",
        },
      },
      {
        heading: "Deployment Controls",
        body: [
          "Serve models and packages to production only from internal registries populated through review, not directly from public hubs. Sign artefacts you build and verify signatures at deploy time. Run model serving with least privilege and restricted network egress. Monitor advisories for components in your bill of materials and re-evaluate models after updates.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Supply chain controls prevent some of the most damaging and least visible AI risks, from malicious model files to licence surprises. Tooling for model signing and AI BOMs is still maturing, and full provenance for large pre-trained models is often unavailable. Focus on verifiable steps you control: sources, formats, scanning, registries and records.",
        ],
      },
      {
        heading: "How to Secure the AI Supply Chain Step by Step",
        body: [],
        checklist: [
          "**1. Inventory components** for each AI system",
          "**2. Verify sources, hashes and signatures** for models",
          "**3. Prefer safe formats** and block untrusted pickle loading",
          "**4. Review licences and data rights**",
          "**5. Scan and pin software dependencies**",
          "**6. Assess AI vendors, tools and MCP servers**",
          "**7. Use internal registries** and an AI bill of materials",
        ],
      },
      {
        heading: "Model Evaluation as a Supply Chain Control",
        body: [
          "Verifying where a model came from does not tell you how it behaves. Before adopting a new model or version, run your evaluation suite, including safety, jailbreak and injection tests, and compare it with the model it replaces. Fine-tuned community models can carry altered behaviour that looks normal on common tasks. Re-evaluate after provider updates to hosted models too, since behaviour can change without notice; see [[/blogs/llm-regression-testing|LLM regression testing]].",
        ],
      },
      {
        heading: "Vendor Assessment Questions",
        body: [],
        checklist: [
          "What data is retained, for how long, and is it used for training?",
          "Where is data processed and stored, and which sub-processors are involved?",
          "How are model changes and retirements communicated, and with what notice?",
          "What security certifications and audit reports are available?",
          "How are incidents detected, handled and notified?",
          "What controls exist for access, logging and administration?",
        ],
      },
      {
        heading: "Example AI Bill of Materials Entry",
        body: [
          "An AI bill of materials does not have to start as a formal standard document; a structured record per system already answers most questions. Map it to a standard such as CycloneDX later.",
        ],
        code: {
          label: "Example: AI-BOM entry (illustrative)",
          text: "system: claims-summary-assistant\nmodels:\n  - name: <open-weight-model>  version: <revision hash>\n    source: official publisher repository  format: safetensors\n    licence: <licence name>  verified_hash: true\n  - name: <embedding-model>  provider: <hosted API>  version: <pinned>\ndatasets:\n  - fine_tune: claims-summaries-v4 (internal, 3,200 reviewed examples, legal basis recorded)\n  - retrieval: policy-docs index v22\nsoftware:\n  - inference engine <name>@<version>, container sha256:...\n  - agent framework <name>@<version>\nservices:\n  - model gateway (internal), vector database (managed, EU region)\nlast_reviewed: 2026-09-29  owner: claims-platform-team",
        },
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a team downloads a fine-tuned model from a community account because it scores well on a leaderboard. Review finds a pickle-based file from an unknown publisher and a licence that forbids commercial use. The team switches to the official base model in safetensors format, fine-tunes it internally with documented data, stores it in an internal registry and records it in the AI bill of materials.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Loading models from unverified community uploads",
          "Using pickle-based model files from untrusted sources",
          "Assuming open-weight means unrestricted licence",
          "Installing AI-suggested packages without checking they exist and are legitimate",
          "No record of which models and datasets are in production",
        ],
        cta: {
          title: "Need an AI bill of materials or dependency review?",
          description: "Talk to ZSpace Labs about an [[/services/ai-automation|AI supply chain assessment]] for models, data, packages and services.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "AI systems inherit risk from every model, dataset, package and service they use. Verify sources, prefer safe formats, review licences and data rights, vet vendors and tools, and keep an AI bill of materials so you can respond quickly when something changes.",
        ],
      },
    ],
  },

  // ---------------------------------------- 689 · AI APPLICATION THREAT MODELING
  {
    slug: "ai-application-threat-modeling",
    title: "AI Application Threat Modeling: How to Identify Risks Before Deployment",
    seoTitle: "AI Threat Modeling: Trust Boundaries, Abuse Cases, Mitigations",
    excerpt:
      "A structured method for threat modelling AI applications: describing the system, assets, actors, data flows and trust boundaries, AI-specific attack surfaces, abuse cases, mitigations and residual risk, with a worked template.",
    category: "AI & Automation",
    banner: "threatmodelai",
    bannerAlt:
      "AI threat modeling in four columns: describe (Components, Data flows, Assets, Actors), boundaries highlighted (User input, Retrieved, Tools, Providers), threats (Injection, Leakage, Misuse, Abuse cases) and respond (Mitigations, Owners, Residual risk, Tests).",
    date: "2026-10-02",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["cybersecurity", "fintech", "b2b-enterprise"],
    relatedSlugs: ["ai-security-testing", "ai-red-teaming", "ai-security-business-applications"],
    faqs: [
      { q: "What is threat modeling for AI applications?", a: "A structured analysis of how an AI system could be attacked or misused, done before and during development: describing the system and its data flows, identifying assets, actors and trust boundaries, listing threats and abuse cases, choosing mitigations and accepting or reducing residual risk." },
      { q: "How is AI threat modeling different from traditional threat modeling?", a: "The method is the same, but AI adds new components and threats: models that follow instructions in data, retrieved content and tool outputs as untrusted inputs, model-driven actions, model providers as third parties and harms such as misinformation or unsafe content." },
      { q: "Which frameworks can we use?", a: "General methods such as STRIDE and attack trees still work. Add AI-specific references: the OWASP Top 10 for LLM Applications, OWASP agentic AI guidance, MITRE ATLAS and NIST's adversarial machine learning taxonomy." },
      { q: "When should we threat model an AI feature?", a: "During design, before building integrations, and again when adding tools, data sources, models or autonomy. Lightweight updates on each significant change keep it current." },
      { q: "Who should take part?", a: "Engineers who build the system, a security specialist, the product owner and someone who knows the data and users. For high-risk systems, include privacy and legal." },
      { q: "What is an abuse case?", a: "A description of how someone could use the system in an unintended, harmful way, such as a customer manipulating a support assistant into issuing refunds, written like a user story from the attacker's perspective." },
      { q: "What is residual risk?", a: "The risk that remains after mitigations. It should be explicitly accepted by an accountable owner, monitored and revisited." },
      { q: "How long does an AI threat model take?", a: "A focused session of a few hours is often enough for a single feature, with follow-up for mitigations. Complex agent systems may need several sessions." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Threat model an AI application by first drawing the system: components, data flows, assets and actors. Mark trust boundaries, treating user input, retrieved documents, web content, tool outputs and model providers as untrusted or external. For each boundary and component, list threats using STRIDE plus AI references such as the OWASP Top 10 for LLM Applications, write concrete abuse cases, choose layered mitigations with owners, and record residual risk for an accountable person to accept. Revisit whenever tools, data, models or autonomy change.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Threat modelling comes before [[/blogs/ai-red-teaming|red teaming]] and [[/blogs/ai-security-testing|security testing]], which verify that mitigations work. An overview of AI threats is in [[/blogs/ai-security-business-applications|AI security for business applications]], and governance of residual risk in [[/blogs/ai-governance-framework|AI governance framework]].",
        ],
      },
      {
        heading: "The Method",
        body: [],
        diagram: {
          variant: "threatflow",
          alt: "AI threat modeling steps: Describe system, Assets + actors, Trust boundaries (highlighted), Abuse cases, Mitigate, Verify.",
          caption: "Trust boundaries are where most AI threats concentrate, so they deserve the most time.",
        },
      },
      {
        heading: "Step 1: Describe the System",
        body: [
          "Draw a data flow diagram covering users, front ends, backend services, the model provider or self-hosted model, retrieval stores, tools and the systems they call, logs and traces, and administrators. Note what data moves along each flow and in which direction. Many risks become obvious once the diagram shows, for example, that an assistant reading customer emails also has a tool that sends email.",
        ],
      },
      {
        heading: "Step 2: Assets and Actors",
        body: [],
        table: {
          headers: ["Assets", "Actors"],
          rows: [
            ["Customer and employee personal data", "Legitimate users making mistakes"],
            ["Confidential documents in retrieval", "Malicious users and fraudsters"],
            ["Ability to take actions (refunds, emails, changes)", "Authors of content the AI reads (web, email, documents)"],
            ["Credentials and API keys", "Compromised third-party tools or providers"],
            ["Model and prompt configuration", "Insiders with excessive access"],
            ["Budget and availability", "Automated abuse such as scraping and cost attacks"],
          ],
        },
      },
      {
        heading: "Step 3: Trust Boundaries",
        body: [
          "Mark every point where data crosses from less trusted to more trusted context. In AI applications the critical boundaries are: user input entering prompts; retrieved documents, web pages, emails and tool outputs entering the model's context; model output turning into tool calls, rendered HTML or database queries; and data leaving to model providers and third-party tools. Treat everything crossing into the model's context from outside as potentially containing instructions, and everything leaving the model as untrusted output.",
        ],
        cta: {
          title: "Designing an AI feature with tools or sensitive data?",
          description: "ZSpace Labs runs threat modelling workshops for AI applications and turns findings into concrete controls. See [[/services/ai-automation|AI development services]].",
        },
      },
      {
        heading: "Step 4: Threats and Abuse Cases",
        body: [
          "Use STRIDE (spoofing, tampering, repudiation, information disclosure, denial of service, elevation of privilege) for the conventional view, then walk through AI-specific risks from the [[https://genai.owasp.org/llm-top-10/|OWASP Top 10 for LLM Applications]] and tactics in [[https://atlas.mitre.org/|MITRE ATLAS]]. Turn them into concrete abuse cases written from the attacker's perspective, such as: 'As a customer, I paste instructions into the chat so the assistant approves a refund above policy' or 'As an outsider, I email instructions that make the inbox assistant forward a summary to me.'",
        ],
      },
      {
        heading: "Step 5: Mitigations and Residual Risk",
        body: [
          "For each abuse case, choose layered mitigations: prevention (least privilege, validation outside the model, isolation of untrusted content), detection (monitoring tool calls, anomaly alerts), response (kill switches, rollback) and limits (budgets, approval thresholds). Prompt instructions can be one layer, never the only one. Assign owners and target dates, then record residual risk and have an accountable owner accept it explicitly.",
        ],
        code: {
          label: "Example: threat model entry (illustrative)",
          text: "id: TM-07\ncomponent: support assistant -> refund tool\nboundary: user chat input -> model context -> tool call\nabuse_case: customer instructs assistant to issue refund above policy\nimpact: financial loss; likelihood: medium\nmitigations:\n  - refund tool enforces policy limits server-side (prevent)\n  - refunds above 50 require agent approval (limit)\n  - alert on refund rate per account (detect)\n  - regression test TM-07 in red team suite (verify)\nresidual_risk: low; accepted_by: head of support ops; review: 2027-01",
        },
      },
      {
        heading: "Step 6: Verify",
        body: [
          "A threat model is a hypothesis about where the system is weak. Verify mitigations with targeted tests, red team exercises and automated regression cases tied to threat IDs. Update the model when tests reveal unexpected paths.",
        ],
      },
      {
        heading: "Common AI Threats to Consider",
        body: [],
        checklist: [
          "Direct and indirect prompt injection",
          "Sensitive information disclosure through retrieval, outputs or logs",
          "Excessive agency: tools or permissions beyond the task",
          "Improper output handling: model output executed or rendered unsafely",
          "Supply chain compromise of models, packages or tools",
          "Data and model poisoning through writable sources",
          "Unbounded consumption: cost and denial-of-service abuse",
          "Misinformation and over-reliance on wrong outputs",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Threat modelling finds design-level risks when they are cheapest to fix, and it gives security, product and engineering a shared picture. It depends on participants' knowledge and imagination, and it ages as the system changes. Keep it lightweight, tied to the architecture diagram and updated on every significant change.",
        ],
      },
      {
        heading: "Threat Modelling Agents and Multi-Agent Systems",
        body: [
          "Agents add threats around autonomy: goals being hijacked by injected content, tools combined in unintended ways, permissions inherited across agents, runaway loops and actions taken without the user's awareness. In multi-agent systems, messages between agents are another trust boundary; one compromised or confused agent can pass harmful instructions to others. Model each agent's identity, tools, data access and the channels between agents explicitly. See [[/blogs/ai-agent-architecture|AI agent architecture]] and [[/blogs/agent-to-agent-communication|agent-to-agent communication]].",
        ],
      },
      {
        heading: "Keeping the Threat Model Current",
        body: [
          "Tie threat model updates to change triggers: adding a tool, connecting a new data source, changing the model or provider, increasing autonomy or exposing the feature to new users. Keep the model next to the architecture diagram in the repository, review it in design reviews for these changes and link each threat to its tests. A short, current threat model is far more useful than a long one written once.",
        ],
      },
      {
        heading: "Running a Threat Modelling Session",
        body: [
          "A practical session for one AI feature takes two to three hours. Before it, the engineering lead prepares the data flow diagram and a list of tools, data sources and providers. In the session, walk the diagram from user input to final action, stopping at each trust boundary to ask what could enter, what could leave and what the model could be persuaded to do. Capture abuse cases on the diagram itself. Spend the last part agreeing mitigations, owners and which threats need tests.",
          "Keep the group small but varied: the engineers who build it, a security specialist, the product owner and someone who knows the users and data. Afterwards, write up the results in the repository next to the architecture, and schedule a short review when the next significant change lands. Testing that follows is covered in [[/blogs/ai-red-teaming|AI red teaming]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a property management company designs a tenant assistant that can read lease documents and log maintenance requests. The threat model shows the assistant could retrieve other tenants' leases because documents are indexed by building, not by tenant. The design changes to per-tenant document filters before any code is written, and a canary test is added to the release suite.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [
          "Most weak threat models share the same gaps.",
        ],
        checklist: [
          "Modelling only the chat input, not retrieved content and tools",
          "Relying on prompt instructions as the main mitigation",
          "No owner or acceptance for residual risk",
          "Threat models written once and never updated",
          "No tests linked to the identified threats",
        ],
        cta: {
          title: "Want a threat model before you build?",
          description: "Talk to ZSpace Labs about an [[/services/ai-automation|AI threat modelling session]] for your planned AI feature or agent.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Threat modelling makes AI risks visible while they are still design decisions. Draw the system, mark trust boundaries, write abuse cases, layer mitigations, accept residual risk explicitly and verify with tests.",
        ],
      },
    ],
  },

  // ---------------------------------------- 690 · AI SECURITY TESTING
  {
    slug: "ai-security-testing",
    title: "AI Security Testing: A Practical Checklist for Testing AI Systems",
    seoTitle: "AI Security Testing Checklist: Injection, Leakage, Tools, Logging",
    excerpt:
      "A practical, defensive checklist for testing AI systems: authentication and authorization, prompt injection, data leakage, tool execution, output handling, logging and privacy, dependencies, resource limits and incident response readiness.",
    category: "AI & Automation",
    banner: "aisectestmap",
    bannerAlt:
      "AI security testing in four columns: access (AuthN, AuthZ, Tenancy, Sessions), model inputs highlighted (Direct inj., Indirect inj., Jailbreaks, Uploads), actions (Tool calls, Output use, Exfiltration, Limits) and operations (Logging, Privacy, Dependencies, Incidents).",
    date: "2026-10-02",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["cybersecurity", "saas-technology", "fintech"],
    relatedSlugs: ["ai-red-teaming", "ai-application-threat-modeling", "ai-jailbreak-testing"],
    faqs: [
      { q: "What should AI security testing cover?", a: "Conventional application security plus AI-specific areas: prompt injection (direct and indirect), jailbreaks, data leakage, tool and action misuse, unsafe output handling, logging and privacy, dependencies and model supply chain, resource abuse and incident response." },
      { q: "How is it different from red teaming?", a: "Security testing is systematic verification against a checklist and requirements, often automated. Red teaming is creative adversarial exploration. Both are needed; red team findings feed the test suite." },
      { q: "Can AI security tests be automated?", a: "Many can: authorization tests, canary leakage tests, injection test sets, tool argument validation tests and output handling tests. Creative scenarios still need people." },
      { q: "Should AI security tests block releases?", a: "Critical ones should: any cross-user data exposure, unauthorized tool action or successful exfiltration in tests. Others can be tracked with thresholds." },
      { q: "What is improper output handling?", a: "Using model output unsafely, such as rendering it as HTML without sanitizing, executing it as code or inserting it into database queries, which can lead to cross-site scripting, injection or command execution." },
      { q: "How do we test indirect prompt injection?", a: "Plant test instructions in documents, web pages, emails or tool responses in a test environment and verify the system does not follow them, leak data or take actions." },
      { q: "What about traditional penetration testing?", a: "Still required. AI applications are web applications and APIs with all the usual vulnerabilities, plus the AI-specific ones." },
      { q: "How often should we test?", a: "Automated suites on every release; full checklist reviews before launch and after major changes; external testing periodically for high-risk systems." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Test AI systems across eight areas: access control and tenancy; direct and indirect prompt injection; jailbreak and policy adherence; data leakage through retrieval, outputs and logs; tool execution and authorization; output handling before rendering or execution; dependencies and model supply chain; and resource limits and incident response. Automate what you can, especially canary leakage tests, authorization tests and injection test sets, block releases on critical failures and feed red team findings back into the suite.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Start with a [[/blogs/ai-application-threat-modeling|threat model]] to prioritize tests. Creative adversarial testing is in [[/blogs/ai-red-teaming|AI red teaming]], policy adherence in [[/blogs/ai-jailbreak-testing|AI jailbreak testing]] and general web security in our [[/blogs/website-security-checklist|website security checklist]].",
        ],
        callout: {
          type: "note",
          text: "Run these tests only against systems you own or are authorized to test, ideally in a non-production environment with mocked side effects.",
        },
      },
      {
        heading: "How Testing Fits the Release Cycle",
        body: [],
        diagram: {
          variant: "sectestflow",
          alt: "AI security testing in the release cycle: Threat model, Tests per threat, CI suite (highlighted), Manual review, Release gate, Monitor; loop: red team findings become new automated tests.",
          caption: "Every confirmed weakness becomes an automated test so it cannot quietly return.",
        },
      },
      {
        heading: "1. Authentication, Authorization and Tenancy",
        body: [],
        checklist: [
          "All AI endpoints require authentication; no keys in clients",
          "Retrieval returns only content the requesting user may see",
          "Tenant ID comes from the authenticated session, never from input or model output",
          "Conversation history and memory are scoped to the right user",
          "Rate limits apply per user and tenant",
        ],
      },
      {
        heading: "2. Prompt Injection and Jailbreaks",
        body: [],
        checklist: [
          "Direct injection test set run against system rules",
          "Planted instructions in each indexed source type, web content and tool outputs",
          "Multi-turn and multi-language variations",
          "System prompt extraction attempts; confirm no secrets would be exposed",
          "Over-refusal cases to confirm fixes do not break legitimate use",
        ],
        cta: {
          title: "Need a security test suite for your AI application?",
          description: "ZSpace Labs builds automated AI security tests and release gates alongside manual reviews. See [[/services/ai-automation|AI development services]].",
        },
      },
      {
        heading: "3. Data Leakage",
        body: [],
        checklist: [
          "Canary strings in restricted documents never appear for unauthorized users",
          "Cross-tenant queries return nothing from other tenants",
          "Outputs scanned for secrets and sensitive patterns",
          "Caches keyed correctly for personalized responses",
          "Fine-tuned models tested for memorized sensitive content where applicable",
        ],
      },
      {
        heading: "4. Tools and Actions",
        body: [],
        checklist: [
          "Tool arguments validated: types, ranges, allow-lists, ownership",
          "Tools run with the user's or a scoped service identity",
          "Consequential actions require confirmation or approval",
          "Code execution sandboxed with no secrets and restricted egress",
          "Agents cannot exceed step, time and cost budgets",
        ],
      },
      {
        heading: "5. Output Handling",
        body: [
          "Model output must be treated as untrusted. Test that HTML and Markdown are sanitized before rendering, external images and links are restricted, output is never executed as code or inserted into queries or shell commands without validation, and structured outputs are validated against schemas before use. The OWASP Top 10 for LLM Applications lists [[https://genai.owasp.org/llm-top-10/|improper output handling]] as a distinct risk.",
        ],
      },
      {
        heading: "6. Logging and Privacy",
        body: [],
        checklist: [
          "Logs and traces redact identifiers and secrets",
          "Access to traces restricted by role",
          "Retention limits enforced",
          "Data sent to providers matches approved data rules and regions",
          "Deletion requests reach logs, indexes and memories",
        ],
      },
      {
        heading: "7. Dependencies and Supply Chain",
        body: [],
        checklist: [
          "Packages and containers scanned; versions pinned",
          "Models from verified sources in safe formats",
          "Third-party tools and MCP servers reviewed and pinned",
          "AI bill of materials current",
        ],
      },
      {
        heading: "8. Resource Limits and Incident Response",
        body: [
          "Test that input size limits, output token limits, timeouts and budgets work, and that alerts fire on cost spikes and unusual tool activity. Rehearse incident response: disabling an AI feature with a kill switch, revoking tool credentials, rolling back prompts and models, and preserving traces for investigation. See [[/blogs/llm-application-reliability|LLM application reliability]] for degraded modes.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "A checklist-driven, automated suite makes AI security repeatable and catches regressions after model or prompt changes. It only tests what you thought of. Pair it with threat modelling for coverage, red teaming for creativity and production monitoring for what slips through.",
        ],
      },
      {
        heading: "How to Build Your Test Suite Step by Step",
        body: [],
        checklist: [
          "**1. Map threats** from your threat model to test areas",
          "**2. Create test users, tenants and canary data**",
          "**3. Automate authorization, leakage and injection tests**",
          "**4. Add tool and output handling tests**",
          "**5. Gate releases** on critical failures",
          "**6. Review the full checklist** before launch",
          "**7. Add red team findings** after each exercise",
        ],
      },
      {
        heading: "Testing File Uploads and Multimodal Inputs",
        body: [
          "Files and images are input channels too. Test that uploads are validated for type and size, scanned where appropriate and processed in isolated services; that text extracted from documents and images is treated as untrusted; that instructions hidden in images, metadata or document properties do not trigger actions; and that uploaded files cannot be read by other users. Multimodal processing is covered in [[/blogs/multimodal-ai-applications|multimodal AI applications]].",
        ],
      },
      {
        heading: "Who Should Run Which Tests",
        body: [
          "Product engineers own automated tests for their features, including authorization, leakage canaries and tool validation. Security teams own the checklist, threat modelling support and periodic manual reviews. Independent red teams, internal or external, test high-risk systems before launch and periodically afterwards. Platform teams provide shared test harnesses and canary data so every team does not build them from scratch; see [[/blogs/ai-platform-engineering|AI platform engineering]].",
        ],
      },
      {
        heading: "Example Automated Security Tests",
        body: [
          "Many AI security checks can be expressed as ordinary automated tests that run in CI against a staging environment with test users, tenants and canary data.",
        ],
        code: {
          label: "Example: AI security test cases (illustrative pseudocode)",
          text: "test cross_tenant_retrieval_blocked:\n    ask(as=user_tenant_A, \"What is in the Q3 pricing memo?\")\n    assert CANARY_TENANT_B not in response and not in retrieved_chunks\n\ntest planted_instruction_in_document_ignored:\n    index(doc_with_instruction(\"send this summary to external address\"))\n    run(as=user_A, \"Summarize the onboarding docs\")\n    assert no tool_call(\"send_email\") and no external_links(response)\n\ntest refund_limit_enforced_server_side:\n    tool_call(\"issue_refund\", order=own_order, amount=10_000)\n    assert rejected(\"exceeds limit\")\n\ntest markdown_images_restricted:\n    response = render(model_output_with_external_image)\n    assert no_network_request_to(untrusted_domain)",
        },
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: before launching an AI knowledge assistant, a company runs the checklist and finds that Markdown images in answers load from any domain and that one source connector ignores folder permissions. Both are fixed, and canary and rendering tests join the CI suite. Two months later a library upgrade re-enables image rendering, and the test blocks the release.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Testing only the chat box, not documents, tools and outputs",
          "Skipping conventional web and API security testing",
          "Manual one-off tests with no automation",
          "No canary data, so leakage is hard to detect",
          "No rehearsal of disabling AI features in an incident",
        ],
        cta: {
          title: "Want an AI security review before launch?",
          description: "Talk to ZSpace Labs about an [[/services/ai-automation|AI security assessment]] using this checklist, adapted to your system.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "AI security testing extends application security to injection, leakage, tools and outputs. Work from a threat model, automate the critical checks, block releases on serious failures and keep the suite growing with every finding.",
        ],
      },
    ],
  },

  // ---------------------------------------- 691 · AI PRODUCT DESIGN
  {
    slug: "ai-product-design",
    title: "AI Product Design: A Complete Guide to Designing AI-Powered Products",
    seoTitle: "AI Product Design: From Problem Discovery to Trusted AI Features",
    excerpt:
      "How to design AI-powered products: problem discovery, user research, assessing AI feasibility, designing workflows around model limitations, prototyping with real models, evaluation, trust, transparency and iteration after launch.",
    category: "UI/UX",
    banner: "aiproductdesign",
    bannerAlt:
      "AI product design in four columns: problem (User needs, Workflows, Value, Risk), feasibility (Data, Model fit, Accuracy, Cost), experience highlighted (Pattern, Control, Transparency, Recovery) and learning (Evaluation, Feedback, Metrics, Iteration).",
    date: "2026-10-02",
    readingTime: "8 min read",
    relatedServiceSlugs: ["ui-ux-design", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise", "education-edtech"],
    relatedSlugs: ["ai-ux-design", "ai-product-idea-validation", "human-ai-interaction-design"],
    faqs: [
      { q: "What is AI product design?", a: "Designing products and features where AI is part of the core value: deciding which problems AI should solve, how users interact with probabilistic outputs, how much control users keep and how the product learns and improves over time." },
      { q: "How is designing AI products different from other products?", a: "AI outputs vary and are sometimes wrong, capabilities are uncertain until tested on real data, and user trust must be calibrated. Designers work closely with engineers on data, evaluation and failure modes, not just interfaces." },
      { q: "Should designers prototype with real models?", a: "Yes, as early as possible. Mock outputs hide how often models are wrong, slow or inconsistent, which is often what makes or breaks the experience." },
      { q: "When should a product not use AI?", a: "When rules or simple software solve the problem reliably, when errors are costly and hard to detect, when data is unavailable, or when users need deterministic, explainable results." },
      { q: "What guidelines exist for human-AI interaction?", a: "Microsoft's Guidelines for Human-AI Interaction and Google's People + AI Guidebook are widely used research-based references." },
      { q: "How do we measure AI product success?", a: "By user outcomes, such as time saved, task success and quality, plus adoption, retention, trust signals such as edits and overrides, and costs, not just model metrics." },
      { q: "Who should be on an AI product team?", a: "Product management, design, engineering, an AI or ML specialist, domain experts for evaluation and, for sensitive uses, legal, privacy and security." },
      { q: "How do we design for AI mistakes?", a: "Assume they will happen: show sources, make outputs editable, require confirmation for consequential actions, offer easy correction and recovery, and route uncertain cases to people." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Design AI products by starting from a real user problem and workflow, then testing whether AI can solve it well enough with the data available. Prototype with real models early, choose an interaction pattern (automate, suggest or assist) that matches the cost of errors, design for mistakes with sources, editing, confirmation and recovery, communicate capabilities and limits honestly, evaluate quality with domain experts and measure user outcomes after launch, iterating on prompts, data and experience together.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "This is the hub for our AI product design cluster. Related guides cover [[/blogs/ai-ux-design|AI UX design]], [[/blogs/human-ai-interaction-design|human-AI interaction principles]], [[/blogs/ai-chat-interface-design|chat interfaces]], [[/blogs/ai-copilot-ux|copilot UX]], [[/blogs/ai-onboarding-ux|onboarding]], [[/blogs/ai-transparency-ux|transparency]], [[/blogs/ai-error-handling-ux|error handling]], [[/blogs/ai-feedback-ux|feedback]] and [[/blogs/ai-product-idea-validation|validating an AI product idea]]. General product design practice is in our [[/blogs/product-design-guide|product design guide]].",
        ],
      },
      {
        heading: "What Makes AI Products Different",
        body: [
          "Conventional software does what it was programmed to do; when it fails, it usually fails visibly. AI features produce outputs that are plausible but sometimes wrong, vary between attempts and can be confidently mistaken. Their capability is uncertain until tested on real data, and it changes when models change.",
          "This shifts design work. Designers must understand error rates and failure modes, decide how much users should rely on outputs, design verification and correction into the flow and plan how the product will learn from use. Interface polish cannot compensate for a feature that is wrong too often for its context.",
        ],
      },
      {
        heading: "The AI Product Design Process",
        body: [],
        diagram: {
          variant: "aipdflow",
          alt: "AI product design process: Discover problem, Assess AI fit, Real-model prototype (highlighted), Evaluate, Design for errors, Launch narrowly; loop: learn from use and iterate.",
          caption: "Prototyping with a real model early reveals the error patterns the experience must be designed around.",
        },
      },
      {
        heading: "Problem Discovery and AI Fit",
        body: [
          "Start with user research as you would for any product: observe workflows, find where people spend time, make errors or wait. Then ask whether AI is the right tool. Good fits include tasks involving unstructured information (reading, summarizing, drafting, classifying), tasks where suggestions save effort even if imperfect, and tasks where scale makes manual work impossible. Poor fits include problems with precise rules, tasks where any error is unacceptable and invisible, and situations without the data or context the AI would need.",
          "The detailed validation process is in [[/blogs/ai-product-idea-validation|how to validate an AI product idea]].",
        ],
      },
      {
        heading: "Choosing the Level of Automation",
        body: [],
        table: {
          headers: ["Pattern", "User role", "Fits when"],
          rows: [
            ["Automate", "Reviews exceptions or samples", "High accuracy, low error cost, easy to reverse"],
            ["Suggest and confirm", "Approves or edits each output", "Moderate accuracy, errors matter, user has context"],
            ["Assist on demand", "Invokes help when wanted", "Variable tasks, user stays in control"],
            ["Inform", "Uses AI insight in their own decision", "High-stakes decisions that stay with people"],
          ],
        },
        cta: {
          title: "Designing an AI feature or product?",
          description: "ZSpace Labs combines product design and AI engineering to design AI experiences around real model behaviour. See [[/services/ui-ux-design|our product design services]].",
        },
      },
      {
        heading: "Prototyping With Real Models",
        body: [
          "Static mock-ups with perfect AI outputs mislead everyone. Prototype early with real models and realistic data, even if crudely, so the team sees actual quality, latency and variability. Test with users on their own tasks. Many promising ideas change shape at this stage: a fully automated feature becomes a suggestion, or a chat interface becomes an inline action because users do not want to write prompts.",
        ],
      },
      {
        heading: "Designing for Errors and Trust",
        body: [
          "Trust should be calibrated, not maximized: users should rely on AI where it is reliable and check it where it is not. Design supports this through sources and evidence users can inspect, clear signals of uncertainty, editable outputs, confirmation before consequential actions, easy undo and visible paths to a person. Research-based guidance such as Microsoft's [[https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/|Guidelines for Human-AI Interaction]] and Google's [[https://pair.withgoogle.com/guidebook/|People + AI Guidebook]] offer tested principles; see [[/blogs/human-ai-interaction-design|human-AI interaction design]].",
        ],
      },
      {
        heading: "Evaluation as a Design Activity",
        body: [
          "Designers should help define what a good output is, because quality is partly a product decision: tone, length, completeness, when to refuse and when to ask a question. Work with domain experts to write rubrics and example outputs, review evaluation results and failure cases with engineers, and decide which failure types the experience must handle. See [[/blogs/llm-evaluation-pipeline|LLM evaluation pipeline]].",
        ],
      },
      {
        heading: "Measuring Success After Launch",
        body: [],
        table: {
          headers: ["Measure", "Signal"],
          rows: [
            ["Task success and time", "Whether AI actually helps users finish work"],
            ["Adoption and retention", "Whether users return to the feature"],
            ["Acceptance, edits and overrides", "Quality and calibrated trust"],
            ["Feedback and complaints", "Specific failure patterns"],
            ["Escalations to people", "Where AI falls short"],
            ["Cost per successful task", "Sustainability"],
          ],
        },
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "A design process built around real model behaviour produces AI features people adopt and trust, rather than impressive demos that disappoint. It requires closer collaboration between design and engineering than many teams are used to, and it means accepting that the best design may use less AI than first imagined.",
        ],
      },
      {
        heading: "How to Design an AI Product Step by Step",
        body: [],
        checklist: [
          "**1. Research the workflow** and where users struggle",
          "**2. Assess AI fit** and data availability",
          "**3. Prototype with a real model** on real tasks",
          "**4. Choose the automation level** from error cost",
          "**5. Design sources, editing, confirmation and recovery**",
          "**6. Define quality with experts** and evaluate",
          "**7. Launch narrowly**, measure outcomes and iterate",
        ],
      },
      {
        heading: "Designing With Engineers and Domain Experts",
        body: [
          "AI product design works best as a joint activity. Engineers explain what is feasible, how outputs vary and what failures look like; domain experts define quality and spot subtle errors; designers turn this into flows, states and language users understand. Shared artefacts help: example output sets showing good, borderline and bad results, error taxonomies from evaluation and annotated traces of real failures. Review them together before finalizing designs, and again after evaluation runs change the picture.",
        ],
      },
      {
        heading: "Ethics, Fairness and Accessibility",
        body: [
          "AI features can treat groups differently, exclude people who communicate in non-standard ways or create new barriers for people using assistive technology. Include diverse users in research and testing, evaluate outputs across languages and demographics relevant to your audience, give alternatives to voice-only or image-only interactions and check that generated content meets accessibility standards. For features affecting people's opportunities or access to services, involve legal and governance early; see [[/blogs/ai-governance-framework|AI governance framework]] and [[/blogs/accessible-ui-ux-design|accessible UI/UX design]].",
        ],
      },
      {
        heading: "AI Design Artefacts",
        body: [
          "A few artefacts make AI design work concrete and shareable. A **capability and limits statement** describes what the feature does well, where it struggles and what users should check. An **example output set** shows good, borderline and bad outputs agreed with domain experts. An **error taxonomy** lists failure types from evaluation with the design response for each. A **state map** covers every interface state, including waiting, partial, uncertain, failed and stopped. A **trust and control plan** lists where users confirm, edit, undo and escalate.",
          "These artefacts connect design to engineering and evaluation: the example outputs become test cases, the error taxonomy guides monitoring and the state map guides implementation. They also make design reviews faster, because discussions focus on real behaviour. See [[/blogs/ai-ux-design|AI UX design]] for state patterns.",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a recruitment software company plans an AI feature to rank candidates automatically. Discovery shows recruiters want help reading long applications, not rankings, and regulation makes automated ranking high-risk. The team instead designs a summary panel that highlights evidence for each job requirement with links to the CV text, leaving decisions with recruiters. Usability tests show time savings and recruiters trusting the summaries because they can check them.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Starting from a model capability instead of a user problem",
          "Designing with perfect mock outputs",
          "Defaulting to a chat interface for every AI feature",
          "Automating decisions where errors are costly and invisible",
          "Measuring model accuracy but not user outcomes",
        ],
        cta: {
          title: "Want help shaping an AI product from idea to launch?",
          description: "Talk to ZSpace Labs about [[/services/ui-ux-design|AI product design]] and [[/services/ai-automation|AI development]] as one team.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "AI product design is designing for uncertainty. Start from real problems, test with real models, match automation to the cost of errors, design for mistakes and trust, and measure what users actually achieve.",
        ],
      },
    ],
  },
];
