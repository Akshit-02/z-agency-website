import type { BlogPost } from "./blog-data";

/**
 * AI knowledge hub, part twenty-eight: lineage and real-time data close the
 * data engineering cluster; the AI security cluster opens with red teaming
 * and indirect prompt injection. The general prompt injection article stays
 * prompt-injection-prevention (proposed slot 682 was not created to avoid a
 * competing page); indirect-prompt-injection is the deep dive on content
 * that arrives through retrieval, browsing, email and tools.
 * Merged into `posts` in blog-data.ts.
 */

export const aiOpsPosts5: BlogPost[] = [
  // ---------------------------------------- 679 · AI DATA LINEAGE
  {
    slug: "ai-data-lineage",
    title: "AI Data Lineage: How to Track the Origin and Transformation of AI Data",
    seoTitle: "AI Data Lineage: Sources, Versions, Reproducibility and Audit",
    excerpt:
      "How to track lineage for AI systems: source tracking, transformation history, dataset and index versions, links to models, prompts and outputs, reproducibility, auditability, deletion and governance, with standards and tools.",
    category: "AI & Automation",
    banner: "lineagemap",
    bannerAlt:
      "AI data lineage in four columns: sources (Systems, Documents, Owners, Licences), jobs (Pipelines, Code versions, Parameters, Runs), artefacts highlighted (Datasets, Chunks, Embeddings, Features) and consumers (Models, Prompts, Answers, Reports).",
    date: "2026-10-02",
    updated: "2026-10-08",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["fintech", "healthcare-healthtech", "b2b-enterprise"],
    relatedSlugs: ["ai-governance-framework", "data-pipelines-for-ai", "ai-supply-chain-security"],
    faqs: [
      { q: "What is AI data lineage?", a: "A record of where data used by AI systems came from, how it was transformed, which versions exist and which models, indexes, prompts and outputs depend on it." },
      { q: "Why does lineage matter for AI?", a: "It lets you explain answers, reproduce training and evaluation runs, find everything affected by a bad source, honour deletion requests across derived stores, check licences and satisfy auditors and regulators." },
      { q: "What is the difference between data lineage and provenance?", a: "The terms overlap. Provenance usually emphasizes origin and history of a specific artefact; lineage emphasizes the flow and dependencies between datasets, jobs and consumers. AI governance needs both." },
      { q: "How is lineage captured?", a: "By instrumenting pipelines and orchestrators to emit events about inputs, outputs and jobs, recording versions and IDs in metadata, and storing links between artefacts in a catalog or lineage service." },
      { q: "What is OpenLineage?", a: "An open standard for collecting lineage metadata from data pipelines, with integrations for common orchestrators and processing engines." },
      { q: "Does lineage apply to RAG systems?", a: "Yes. Each chunk should record its source document, version, parser and embedding model, and each answer trace should record which chunks were used, linking answers back to sources." },
      { q: "How detailed should lineage be?", a: "Enough to answer your real questions: which sources feed this model or index, what produced this answer, what is affected if this source is wrong or deleted. Column-level lineage is valuable for regulated data but not always necessary." },
      { q: "How does lineage help with deletion requests?", a: "It shows every derived copy of a person's data, such as tables, chunks, embeddings, caches, evaluation sets and fine-tuning sets, so deletion or exclusion can be applied everywhere." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI data lineage records the path from source to output: which systems and documents data came from, which jobs and code versions transformed it, which dataset, index and embedding versions resulted and which models, prompts and answers used them. Capture it automatically from pipelines with standards such as OpenLineage, store IDs and versions on every derived artefact, link answer traces to source chunks and use lineage to reproduce runs, trace errors, honour deletions and support audits.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Lineage underpins [[/blogs/ai-governance-framework|AI governance]], [[/blogs/ai-supply-chain-security|AI supply chain security]] and [[/blogs/ai-data-privacy|privacy]] work. It is captured in [[/blogs/data-pipelines-for-ai|data pipelines]] and used in [[/blogs/llm-observability|observability]] to explain answers.",
        ],
      },
      {
        heading: "Questions Lineage Should Answer",
        body: [],
        checklist: [
          "Which sources and versions does this model, index or evaluation set depend on?",
          "Which documents and chunks produced this specific answer?",
          "If this source was wrong for a week, which outputs were affected?",
          "Where are all copies of this person's data, including derived ones?",
          "Can we reproduce last quarter's training or evaluation run exactly?",
          "Are we allowed to use each source for this purpose under its licence or consent?",
        ],
      },
      {
        heading: "The Lineage Graph",
        body: [
          "Lineage is naturally a graph: sources feed jobs, jobs produce datasets, datasets feed further jobs, models and indexes, which serve applications and outputs. Each node carries versions and metadata; each edge records which run created it.",
        ],
        diagram: {
          variant: "lineageflow",
          alt: "Lineage from source to answer: Source, Ingest run, Dataset version, Chunks + embeddings (highlighted), Index, Answer trace.",
          caption: "Recording versions at every hop lets an answer be traced back to the exact source text and job that produced it.",
        },
      },
      {
        heading: "What to Record",
        body: [],
        table: {
          headers: ["Artefact", "Record"],
          rows: [
            ["Source item", "System, ID, URL, owner, licence or consent basis, version, timestamps"],
            ["Pipeline run", "Job name, code version, parameters, inputs, outputs, start and end, status"],
            ["Dataset", "Version, schema, row counts, quality results, parent datasets"],
            ["Chunk and embedding", "Source ID and version, parser version, chunking settings, embedding model"],
            ["Model or fine-tune", "Training data versions, code, hyperparameters, evaluation results"],
            ["Answer trace", "Prompt version, model, retrieved chunk IDs, tool calls"],
          ],
        },
        cta: {
          title: "Need to explain where your AI's answers come from?",
          description: "ZSpace Labs builds lineage and traceability into AI data pipelines and applications. See [[/services/ai-automation|AI development services]].",
        },
      },
      {
        heading: "Capturing Lineage Automatically",
        body: [
          "Manual lineage documentation goes stale quickly. Capture it from the systems that move data. OpenLineage defines a standard event format for jobs, runs and datasets, with integrations for common orchestrators and processing engines; lineage services and data catalogs store and visualize the graph. For AI-specific artefacts, write source IDs and versions into chunk metadata, record embedding model versions and log retrieved chunk IDs on every answer trace.",
        ],
      },
      {
        heading: "Reproducibility",
        body: [
          "To reproduce a training or evaluation run you need the exact data versions, code, configuration and model versions used. Version datasets immutably (snapshot or versioned storage), pin code and dependency versions and record configuration with each run. For hosted models that change behind aliases, record the exact model version returned by the API where available, and accept that perfect reproduction may not be possible for retired models.",
        ],
      },
      {
        heading: "Lineage for Governance and Compliance",
        body: [
          "Regulators and auditors increasingly ask how AI systems were built and what data they use. Lineage provides evidence: data sources and their legal basis, quality checks performed, versions of models and data in production on a given date. It also supports licence compliance by showing which datasets feed which models, and privacy obligations by locating every copy of personal data. See [[/blogs/ai-governance-framework|AI governance framework]].",
        ],
      },
      {
        heading: "Impact Analysis",
        body: [
          "When a source turns out to be wrong, such as a mispriced product feed or an outdated policy, lineage tells you which indexes, models and evaluation sets consumed it and, through answer traces, which outputs were affected and when. This turns a vague incident into a bounded one: reprocess the affected artefacts, notify affected users if needed and add a quality check upstream.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Lineage makes AI systems explainable, auditable and maintainable. It requires instrumentation across tools that do not always integrate, adds metadata storage and can become noisy at fine granularity. Start with coarse lineage for the most important pipelines and add detail where questions demand it.",
        ],
      },
      {
        heading: "How to Implement Lineage Step by Step",
        body: [],
        checklist: [
          "**1. List the questions** lineage must answer for your use cases",
          "**2. Assign stable IDs** to sources, runs and artefacts",
          "**3. Emit lineage events** from orchestrators and jobs",
          "**4. Store versions** on chunks, embeddings and datasets",
          "**5. Log retrieved chunk IDs** on answer traces",
          "**6. Connect a catalog or lineage service** for search and visualization",
          "**7. Test with real scenarios**: deletion, impact analysis, reproduction",
        ],
      },
      {
        heading: "Lineage for Retrieval-Augmented Generation",
        body: [
          "RAG systems need lineage at chunk level. Each chunk should carry its source document ID and version, the parser and chunking configuration that produced it and the embedding model that encoded it. Each answer trace should record the chunk IDs retrieved and used. With these links, a reviewer can click from an answer to the exact source passage, an incident team can find every answer that used a faulty document, and a deletion request can find every chunk derived from a person's data. See [[/blogs/enterprise-rag-architecture|enterprise RAG architecture]].",
          "Lineage explains how documents reach the index; recording which chunks, versions and tool outputs produced one specific answer is answer-level provenance, covered in [[/blogs/data-provenance-for-ai|data provenance for AI]].",
        ],
      },
      {
        heading: "Choosing Granularity",
        body: [
          "Lineage can be recorded at dataset, table, column, record or chunk level. Finer granularity answers more questions but costs more to capture and store. Many organizations use dataset-level lineage across most pipelines, column-level lineage for regulated or sensitive fields, and record or chunk-level lineage where AI outputs must be traceable to specific sources. Decide based on the questions you must answer, such as audit requests, deletion obligations or answer explanations, rather than capturing everything by default.",
        ],
      },
      {
        heading: "Tools for Lineage",
        body: [
          "Lineage tooling falls into three groups. **Standards and collectors**, such as OpenLineage and its integrations with orchestrators and processing engines, emit lineage events as jobs run. **Catalogs and lineage services** store and visualize the graph, link it to ownership and documentation and support search and impact analysis. **Application-level records**, which you build yourself, capture AI-specific links such as chunk sources, embedding versions and retrieved chunk IDs on answer traces.",
          "Most organizations need all three, connected by consistent identifiers. Start by assigning stable IDs to sources, datasets and pipeline runs, emit lineage from your orchestrator and add AI-specific metadata in your own pipelines and traces. Visualization is useful but secondary to having the links recorded. Observability for answer traces is covered in [[/blogs/llm-observability|LLM observability]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: an insurer discovers that a policy wording document was uploaded with an error and used for three weeks. Because chunks carry source versions and answer traces record chunk IDs, the team identifies every assistant answer that cited the faulty version, reviews them, contacts the affected customers and re-indexes the corrected document within a day.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Lineage documented by hand and never updated",
          "Chunks without source IDs or versions",
          "Answer traces that do not record retrieved sources",
          "Mutable datasets that cannot be reproduced",
          "No licence or consent information on sources",
        ],
        cta: {
          title: "Preparing for AI audits or regulatory questions?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|AI traceability]]: lineage, versioning and evidence for governance.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Lineage connects every AI output to the data and processes behind it. Capture it automatically, version every derived artefact, link answers to sources and use it for reproduction, impact analysis, deletion and audit.",
        ],
      },
    ],
  },

  // ---------------------------------------- 680 · REAL-TIME DATA FOR AI
  {
    slug: "real-time-data-for-ai",
    title: "Real-Time Data for AI Applications: How to Build Streaming Data Pipelines",
    seoTitle: "Real-Time Data for AI: Streaming Pipelines, State and Trade-Offs",
    excerpt:
      "How to build streaming data pipelines for AI: event streams, ingestion, stream processing, state, latency, ordering, retries and exactly-once concerns, feeding features, indexes and agents, and when batch is the better choice.",
    category: "AI & Automation",
    banner: "streamvsbatch",
    bannerAlt:
      "Streaming vs batch for AI compared (Streaming and Batch, with Streaming highlighted) by freshness, complexity, cost, failures and ai uses.",
    date: "2026-10-02",
    updated: "2026-10-08",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["fintech", "ecommerce", "logistics-supply-chain"],
    relatedSlugs: ["data-pipelines-for-ai", "ai-data-ingestion", "ai-data-engineering"],
    faqs: [
      { q: "When does an AI application need real-time data?", a: "When decisions or answers are wrong if data is minutes or hours old: fraud checks, live inventory or pricing in shopping assistants, order status in support, operational alerts and personalization based on the current session." },
      { q: "What is a streaming data pipeline?", a: "A pipeline that processes events continuously as they occur, rather than in scheduled batches, typically using an event streaming platform such as Apache Kafka and a stream processor such as Apache Flink." },
      { q: "Is real-time always better than batch?", a: "No. Streaming adds complexity in ordering, state, retries and monitoring. If the use case tolerates hourly or daily freshness, batch is simpler and cheaper." },
      { q: "Can an AI application just call APIs for fresh data?", a: "Often, yes. For a single fact such as order status, calling the system of record at request time through a tool or API is simpler than streaming everything. Streaming helps when you need aggregated features or to keep indexes continuously updated." },
      { q: "How do streaming pipelines handle duplicates and ordering?", a: "By designing consumers to be idempotent, using event keys and partitions for per-entity ordering, tracking offsets and handling late or out-of-order events explicitly with timestamps and windows." },
      { q: "What are real-time features?", a: "Values computed from recent events, such as the number of transactions in the last ten minutes, served with low latency to models at prediction time, often through a feature store." },
      { q: "How do we keep a vector index updated in real time?", a: "Consume change events for documents, re-chunk and re-embed changed items, update or delete their vectors and monitor the lag between source changes and index updates." },
      { q: "What latency should we target?", a: "Set targets from the use case: fraud scoring may need data within seconds, support assistants within a minute, and dashboards within minutes. Measure end-to-end lag from source event to AI availability." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Use real-time data only where freshness changes outcomes. For single facts, call the system of record at request time. For continuously updated features, indexes or triggers, publish change events to a streaming platform, process them with idempotent consumers that handle ordering, duplicates and late events, maintain state for windowed features and deliver results to feature stores, indexes or agents. Measure end-to-end lag, plan retries and dead-letter handling, and keep batch pipelines for everything that does not need seconds-level freshness.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Batch pipeline design is in [[/blogs/data-pipelines-for-ai|data pipelines for AI]] and source connections in [[/blogs/ai-data-ingestion|AI data ingestion]]. Retrieval of live facts through tools is discussed in [[/blogs/ai-api-integration|AI API integration]] and [[/blogs/model-context-protocol|the Model Context Protocol guide]].",
        ],
      },
      {
        heading: "Do You Need Streaming?",
        body: [
          "Deciding how fresh each kind of data must be comes before choosing streaming; [[/blogs/data-freshness-for-ai|data freshness for AI]] gives a real-time, near-real-time and batch decision framework, plus the TTL and re-check controls that stop agents acting on stale values.",
        ],
        table: {
          headers: ["Need", "Simplest approach"],
          rows: [
            ["One current fact during a request (order status, balance)", "Call the API or tool at request time"],
            ["Aggregates over recent events (velocity, session behaviour)", "Stream processing with state"],
            ["Search or RAG index reflecting changes within minutes", "Change events driving incremental indexing"],
            ["Triggering an AI workflow when something happens", "Event subscription or webhook to a queue"],
            ["Training data, analytics, nightly document sync", "Batch"],
          ],
        },
      },
      {
        heading: "A Streaming Architecture for AI",
        body: [],
        diagram: {
          variant: "streamflow",
          alt: "Streaming architecture for AI: Source change, CDC, Event stream, Stateful processor (highlighted), Features or index, AI app; loop: monitor end-to-end lag against the freshness target.",
          caption: "Stateful processing turns raw events into features and index updates that models can use immediately.",
        },
      },
      {
        heading: "Event Streams and Ingestion",
        body: [
          "Event streaming platforms such as Apache Kafka store ordered, replayable logs of events partitioned by key. Sources publish events directly, or change data capture tools publish database changes. Define event schemas, register them and evolve them compatibly so consumers do not break. Key events by entity, such as customer or document ID, to keep per-entity ordering.",
        ],
      },
      {
        heading: "Processing, State and Windows",
        body: [
          "Stream processors such as Apache Flink compute results continuously: filtering, enrichment, joins and aggregations over time windows. Stateful processing lets you maintain counts, averages or sessions per key, which is how real-time features like transactions in the last ten minutes are produced. Use event time rather than processing time where order matters, and decide how long to wait for late events.",
        ],
        cta: {
          title: "Does your AI need fresher data?",
          description: "ZSpace Labs designs real-time and batch data flows for AI features based on the freshness each use case truly needs. See [[/services/ai-automation|AI engineering services]].",
        },
      },
      {
        heading: "Ordering, Duplicates and Retries",
        body: [
          "Distributed systems deliver events more than once and sometimes out of order. Make consumers idempotent by upserting on keys and checking event versions, so reprocessing does no harm. Track consumer offsets and commit them only after successful processing. Route events that fail repeatedly to a dead-letter queue with context for investigation, rather than blocking the stream. Exactly-once processing is possible in some platforms but adds constraints; idempotent design is usually simpler and more robust.",
        ],
      },
      {
        heading: "Feeding AI Applications",
        body: [
          "Streaming outputs reach AI applications in three main ways. **Feature stores** serve the latest computed features to models at prediction time with low latency. **Indexes** receive incremental updates as documents or products change, so retrieval reflects current information. **Triggers** start AI workflows, such as an agent investigating an anomaly, through queues with their own retries and limits. Keep model calls out of the stream processor's critical path where possible; slow or rate-limited model calls can back up the whole stream.",
        ],
      },
      {
        heading: "Monitoring Lag and Health",
        body: [
          "The key metric is end-to-end lag: time from the source event to the data being usable by the AI application. Also monitor consumer lag, throughput, error and dead-letter rates, state size and schema validation failures. Alert when lag exceeds the use case's freshness target, and show data freshness to users where it matters, for example 'stock levels updated 2 minutes ago'.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Streaming enables AI that reacts to the present: fraud prevention, live operations, current inventory and contextual personalization. It brings operational complexity, more failure modes and higher running costs than batch. Many teams succeed with a hybrid: request-time API calls for facts, streaming for a few critical features or indexes, and batch for everything else.",
        ],
      },
      {
        heading: "How to Build a Streaming Pipeline Step by Step",
        body: [],
        checklist: [
          "**1. Confirm the freshness requirement** and whether request-time calls suffice",
          "**2. Define event schemas** and keys",
          "**3. Capture changes** with CDC or producer events",
          "**4. Build idempotent, stateful processing**",
          "**5. Deliver to feature stores, indexes or queues**",
          "**6. Add dead-letter handling and replay**",
          "**7. Monitor end-to-end lag** against targets",
        ],
      },
      {
        heading: "Schema Evolution and Data Contracts for Events",
        body: [
          "Streams run continuously, so schema changes cannot be coordinated with a single batch run. Register event schemas, require compatible changes (adding optional fields rather than renaming or removing), version breaking changes as new event types and validate events at the producer. Data contracts between event producers and AI consumers make expectations explicit; see [[/blogs/data-pipelines-for-ai|data pipelines for AI]].",
        ],
      },
      {
        heading: "Real-Time Features for Models",
        body: [
          "Features computed from recent events, such as the number of logins in the last hour or items viewed in the current session, are valuable for fraud detection, personalization and ranking. Compute them in the stream processor, store them in a low-latency feature store and serve them to models at prediction time. Use the same definitions to compute historical values for training, or models will behave differently in production than in testing. Personalization uses are discussed in [[/blogs/ai-recommendation-systems|AI recommendation systems]].",
        ],
      },
      {
        heading: "Agents Triggered by Events",
        body: [
          "Streams can trigger AI workflows: an anomaly in sensor data starts an investigation agent, a high-value customer complaint starts a triage assistant, a failed payment starts a recovery workflow. Route triggers into a queue rather than calling models directly from the stream processor, apply rate limits so a burst of events does not launch thousands of agent runs, deduplicate related events into one task and record which event triggered which run. Human approval rules still apply to any actions the agent proposes.",
          "Event-driven agents should also handle stale triggers: if an event waited in a queue during an outage, check that the situation still applies before acting. Workflow design is covered in [[/blogs/agentic-workflow-automation|agentic workflow automation]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a grocery delivery app's shopping assistant recommends out-of-stock items because its product index refreshes nightly. Instead of streaming the whole catalogue, the team publishes stock change events, updates an availability field in the search index within a minute and has the assistant check live availability through an API before confirming. Prices and descriptions stay on the nightly batch.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Streaming everything when only a few fields need freshness",
          "Non-idempotent consumers that double count after retries",
          "Model calls inside the stream processor's hot path",
          "No dead-letter queue, so one bad event blocks processing",
          "Not measuring end-to-end lag",
        ],
        cta: {
          title: "Weighing streaming against batch for an AI use case?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|real-time data architecture]] that keeps complexity proportional to the need.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Real-time data is valuable where freshness changes outcomes and costly everywhere else. Use request-time calls for facts, streaming for features and indexes that must stay current, and batch for the rest, with idempotent processing and lag monitoring throughout.",
        ],
      },
    ],
  },

  // ---------------------------------------- 681 · AI RED TEAMING
  {
    slug: "ai-red-teaming",
    title: "AI Red Teaming: How to Test AI Applications for Security Risks",
    seoTitle: "AI Red Teaming: Scope, Scenarios, Tools and Remediation",
    excerpt:
      "A defensive guide to red teaming AI applications: scoping, threat discovery, test scenarios for prompt injection, tool misuse and data exposure, automated and manual testing, evaluation, remediation and repeat testing.",
    category: "AI & Automation",
    banner: "redteamscope",
    bannerAlt:
      "AI red teaming scope in four columns: inputs (Direct prompts, Documents, Web content, Files), behaviour (Policy, Refusals, Harmful output, Bias), actions highlighted (Tool misuse, Excess rights, Exfiltration, Loops) and data (Leakage, Cross-user, System prompt, Secrets).",
    date: "2026-10-02",
    readingTime: "8 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["fintech", "cybersecurity", "b2b-enterprise"],
    relatedSlugs: ["ai-security-testing", "ai-jailbreak-testing", "ai-application-threat-modeling"],
    faqs: [
      { q: "What is AI red teaming?", a: "Structured adversarial testing of an AI system by people and tools acting like attackers or misusers, to find security, safety and data-exposure weaknesses before real adversaries or users do." },
      { q: "How is AI red teaming different from penetration testing?", a: "Penetration testing focuses on infrastructure and application vulnerabilities. AI red teaming adds model behaviour: prompt injection, jailbreaks, harmful outputs, tool misuse by the model and leakage through responses. Most AI applications need both." },
      { q: "Who should do AI red teaming?", a: "A mix of security specialists, people who know the product and domain, and people outside the build team. External red teams add independence for high-risk systems." },
      { q: "Which tools support AI red teaming?", a: "Open-source tools such as Microsoft's PyRIT and NVIDIA's garak automate parts of adversarial testing. They complement, but do not replace, manual testing designed around your application's tools and data." },
      { q: "How often should we red team?", a: "Before launch, after major changes such as new tools, data sources or models, and periodically. Automated adversarial tests should run on every release." },
      { q: "What frameworks guide AI red teaming?", a: "The OWASP Top 10 for LLM Applications, the OWASP agentic AI guidance, MITRE ATLAS and NIST's adversarial machine learning taxonomy help structure scenarios and reporting." },
      { q: "What happens after red teaming finds issues?", a: "Findings are triaged by severity, fixed with layered controls rather than prompt tweaks alone, turned into automated regression tests and re-tested." },
      { q: "Is it legal to red team third-party AI services?", a: "Test only systems you own or are authorized to test, and follow providers' terms and responsible disclosure policies. Testing your own application built on a provider's model is normal practice." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "AI red teaming is authorized adversarial testing of your AI application. Scope it from a threat model, then test how the system handles malicious direct prompts, injected instructions in documents and web content, attempts to misuse tools or exceed permissions, extraction of system prompts, secrets or other users' data, and harmful or policy-violating outputs. Combine automated tools with creative manual testing, rate findings by impact, fix them with layered controls, convert them into regression tests and re-test after every significant change.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Red teaming is one activity in AI security. Threat modelling comes first ([[/blogs/ai-application-threat-modeling|AI application threat modeling]]); a broad checklist is in [[/blogs/ai-security-testing|AI security testing]]; model-behaviour testing in [[/blogs/ai-jailbreak-testing|AI jailbreak testing]]; and the main attack class in [[/blogs/prompt-injection-prevention|prompt injection prevention]] and [[/blogs/indirect-prompt-injection|indirect prompt injection]].",
        ],
        callout: {
          type: "note",
          text: "This guide is for testing systems you own or are authorized to test. It describes categories of tests and defences, not techniques for attacking other people's systems.",
        },
      },
      {
        heading: "Why AI Applications Need Red Teaming",
        body: [
          "Traditional security testing looks for flaws in code and configuration. AI applications add a component, the model, that follows instructions written in natural language and cannot reliably distinguish the developer's instructions from instructions hidden in content it reads. When that model can call tools, read private data or take actions, a successful manipulation becomes a security incident. These weaknesses rarely show up in code review or functional tests; they appear when someone deliberately tries to break the system.",
        ],
      },
      {
        heading: "The Red Teaming Process",
        body: [],
        diagram: {
          variant: "redteamflow",
          alt: "AI red teaming process: Threat model, Design scenarios, Automated probes, Manual testing (highlighted), Rate + fix, Regression tests; loop: re-test after every significant change.",
          caption: "Manual, context-aware testing finds the issues automated probes miss; regression tests keep them fixed.",
        },
      },
      {
        heading: "Scoping",
        body: [
          "Start from the threat model: what assets the system can reach (data, tools, accounts), who might attack it (external users, compromised content sources, malicious insiders) and what would be harmful (data exposure, unauthorized actions, harmful content, cost abuse). Agree rules of engagement: environments, accounts, data to use, actions that must be mocked, how to report critical findings immediately and who approves testing.",
        ],
      },
      {
        heading: "Scenario Categories",
        body: [],
        table: {
          headers: ["Category", "Example objective (defensive test)", "Typical controls"],
          rows: [
            ["Direct prompt injection", "Can a user override system rules?", "Privilege separation, output checks, least privilege"],
            ["Indirect prompt injection", "Can a document or web page steer the assistant?", "Content isolation, action confirmation, tool limits"],
            ["Tool misuse", "Can the model call tools beyond the user's rights?", "Authorization outside the model, schemas, approvals"],
            ["Data leakage", "Can responses reveal other users' data or secrets?", "Permission-aware retrieval, redaction, tenant isolation"],
            ["System prompt extraction", "Can configuration or hidden rules be revealed?", "No secrets in prompts, accept some disclosure risk"],
            ["Harmful output", "Can the system produce disallowed content?", "Policies, classifiers, refusals, review"],
            ["Resource abuse", "Can inputs cause runaway cost or loops?", "Limits, budgets, timeouts"],
          ],
        },
        cta: {
          title: "Launching an AI feature with access to real data or tools?",
          description: "ZSpace Labs runs defensive AI security reviews and red team exercises for AI applications. See [[/services/ai-automation|our AI development services]].",
        },
      },
      {
        heading: "Automated and Manual Testing",
        body: [
          "Automated tools generate and run large numbers of adversarial prompts, mutate them and score responses. Open-source examples include PyRIT from Microsoft and garak from NVIDIA. They provide breadth and repeatability and work well in CI.",
          "Manual testing provides depth. Testers who understand the application chain steps together, such as planting content in a shared document, waiting for the assistant to retrieve it and observing whether a tool is called. These application-specific chains are where the most serious findings usually come from, and they then become automated regression cases.",
        ],
      },
      {
        heading: "Using Frameworks",
        body: [
          "Frameworks keep coverage systematic and reports understandable. The OWASP Top 10 for LLM Applications lists major risk classes such as prompt injection, sensitive information disclosure, excessive agency and unbounded consumption. MITRE ATLAS catalogues adversary tactics against AI systems, and NIST's adversarial machine learning taxonomy defines attack and mitigation terms. Map scenarios and findings to these references.",
        ],
      },
      {
        heading: "Rating and Remediating Findings",
        body: [
          "Rate each finding by impact (what an attacker gains) and likelihood (how easy and realistic it is), with a reproducible description. Fix with layered controls rather than prompt edits alone: prompt changes help but are easily bypassed. Effective fixes include moving authorization checks out of the model, reducing tool permissions, requiring confirmation for sensitive actions, isolating untrusted content and validating outputs. See [[/blogs/ai-agent-guardrails|AI agent guardrails]].",
          "Every confirmed finding should become an automated test so it stays fixed after future prompt or model changes.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Red teaming finds real weaknesses before attackers do and builds organizational understanding of AI risk. It cannot prove a system is secure: language models have an open-ended input space, and new techniques appear regularly. Treat it as recurring practice, combined with defence in depth that limits the damage when a manipulation succeeds.",
        ],
      },
      {
        heading: "How to Run an AI Red Team Exercise Step by Step",
        body: [],
        checklist: [
          "**1. Build or update the threat model**",
          "**2. Agree scope and rules of engagement**",
          "**3. Prepare a test environment** with realistic data and mocked side effects",
          "**4. Run automated probes** for breadth",
          "**5. Run manual, application-specific scenarios**",
          "**6. Rate, report and fix findings** with layered controls",
          "**7. Add regression tests** and re-test",
        ],
      },
      {
        heading: "Red Teaming Agents",
        body: [
          "Agents widen the scope of red teaming because they chain actions. Test whether planted content in one step can steer later tool calls, whether the agent can be led to exceed its budget or loop, whether it asks for confirmation before consequential actions under pressure, and whether permission checks hold when the agent combines tools in unexpected orders. Run agent tests in sandboxes with mocked side effects, and review full trajectories rather than final answers. The OWASP Top 10 for Agentic Applications is a useful reference for agent-specific risk categories.",
        ],
      },
      {
        heading: "Reporting Findings",
        body: [
          "A useful finding report states the scenario, the impact, a reproducible description in controlled form, the affected components, the severity rating and the recommended layered fix. Share detailed reproductions only with people who need them, and store them in access-controlled locations. Track findings to closure like other security defects, with retest results attached. Summaries for leadership should focus on risk themes and trends across exercises rather than individual prompts.",
        ],
      },
      {
        heading: "Building a Red Teaming Programme",
        body: [
          "One-off exercises find issues; a programme keeps finding them as systems change. Define which systems need red teaming and how often based on risk, maintain a shared library of scenarios and findings, train product engineers in basic adversarial testing, schedule independent exercises for high-risk launches and track metrics such as findings per exercise, time to fix and regression test coverage.",
          "Make results visible to leadership in terms of risk themes and trends, and connect them to governance decisions such as approving a new tool or autonomy level. Keep the programme defensive and authorized: test only systems you own or have permission to test, and handle third-party model issues through providers' disclosure processes. See [[/blogs/ai-governance-framework|AI governance framework]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: before launching an email assistant that can draft replies and create calendar events, a red team plants instructions in a test email asking the assistant to forward the inbox summary to an external address. The assistant attempts the action. The fix removes external sending from the assistant's tools, requires confirmation for any outgoing message and marks email content as untrusted data. The scenario becomes a release-blocking regression test.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Testing only direct chat prompts, not documents, web pages or tool outputs",
          "Relying on automated scanners alone",
          "Fixing findings with prompt wording only",
          "Running tests against production with real side effects",
          "No regression tests, so issues return after model changes",
        ],
        cta: {
          title: "Want an independent look at your AI application's security?",
          description: "Talk to ZSpace Labs about an [[/services/ai-automation|AI security assessment]] covering injection, tools, data exposure and remediation.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "AI red teaming tests what code review cannot: how a model-driven system behaves under adversarial pressure. Scope from a threat model, combine automated breadth with manual depth, fix with layered controls and keep every finding as a regression test.",
        ],
      },
    ],
  },

  // ---------------------------------------- 683 · INDIRECT PROMPT INJECTION
  {
    slug: "indirect-prompt-injection",
    title: "Indirect Prompt Injection: Risks in AI Browsing, RAG and Document Workflows",
    seoTitle: "Indirect Prompt Injection: RAG, Browsing, Email and Tool Risks",
    excerpt:
      "How indirect prompt injection works when AI systems read web pages, retrieved documents, emails and tool outputs, why it is hard to prevent, and the trust boundaries, content isolation, least privilege, action confirmation and monitoring that limit damage.",
    category: "AI & Automation",
    banner: "indirectinjection",
    bannerAlt:
      "Indirect injection entry points in four columns: retrieval (Knowledge base, Shared drives, Tickets, Reviews), browsing (Web pages, Search results, Hidden text, Links), messages (Emails, Chats, Calendar, Attachments) and tool outputs highlighted (APIs, MCP servers, Plugins, Files).",
    date: "2026-10-02",
    readingTime: "8 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["cybersecurity", "b2b-enterprise", "saas-technology"],
    relatedSlugs: ["prompt-injection-prevention", "ai-tool-security", "ai-red-teaming"],
    faqs: [
      { q: "What is indirect prompt injection?", a: "An attack where malicious instructions are placed in content an AI system will read later, such as a web page, document, email, review or tool response, rather than typed by the user, so the model may follow them while performing an unrelated task." },
      { q: "How is it different from direct prompt injection?", a: "In direct injection the user is the attacker. In indirect injection the user is usually innocent; the attacker controls content the AI processes on the user's behalf, which can turn the assistant against the person using it." },
      { q: "Which AI systems are most exposed?", a: "Systems that both read untrusted content and can take actions or access private data: browsing agents, email and calendar assistants, RAG systems over shared or public content, coding agents reading issues and repositories, and agents using third-party tools." },
      { q: "Can indirect prompt injection be fully prevented?", a: "Not reliably with current models. Detection and model training reduce success rates, but the robust approach is to limit what a successful injection can do through privilege separation, least privilege and confirmation of consequential actions." },
      { q: "What is data exfiltration through prompt injection?", a: "An attacker's instructions make the AI include private data in an outgoing channel, such as a URL, image link, email or tool call, so the data reaches the attacker." },
      { q: "Does RAG make prompt injection worse?", a: "It adds an entry point. Anyone who can write content that gets indexed, such as a shared document, ticket or review, may be able to influence answers, so treat retrieved content as untrusted data." },
      { q: "Are delimiters or 'ignore instructions in data' prompts enough?", a: "They help a little but are not a security boundary. Determined content can still influence models, so pair them with architectural controls." },
      { q: "How do we test for indirect injection?", a: "Plant test instructions in documents, pages, emails and tool responses in a test environment and check whether the system follows them, leaks data or attempts actions. Make these release-blocking regression tests." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Indirect prompt injection hides instructions in content an AI system reads while working for someone else: web pages, retrieved documents, emails, reviews and tool outputs. Because models cannot reliably separate data from instructions, design so that a successful injection has limited effect: treat all retrieved and tool content as untrusted, keep sensitive data and powerful tools away from contexts that process untrusted content, enforce permissions outside the model, require user confirmation for consequential or outbound actions, block exfiltration channels and test with planted content.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "The general prompt injection guide, including direct attacks and defence in depth, is [[/blogs/prompt-injection-prevention|prompt injection prevention]]. This article goes deeper on content that enters through retrieval, browsing, communications and tools. Tool controls are in [[/blogs/ai-tool-security|AI tool security]], MCP-specific risks in [[/blogs/mcp-security|MCP security]] and testing in [[/blogs/ai-red-teaming|AI red teaming]].",
        ],
      },
      {
        heading: "How the Attack Works",
        body: [
          "A user asks an assistant to summarize a web page, triage their inbox or answer a question from the company wiki. Somewhere in that content, an attacker has placed text written as instructions: perhaps visible, perhaps hidden in white text, metadata or alt text. The model reads the content to do its job and may treat the planted text as instructions, for example to reveal information, change its answer or call a tool.",
          "The core problem is that language models process instructions and data in the same channel. Training and filtering reduce susceptibility, but no current approach makes models reliably ignore well-crafted instructions in content.",
        ],
        diagram: {
          variant: "injectpathflow",
          alt: "Indirect prompt injection path: Attacker plants text, Indexed or fetched, Innocent request, Model reads content (highlighted), Tries tool or leak, Controls block.",
          caption: "The user never sees the instruction; controls after the model are what stop the harmful action.",
        },
      },
      {
        heading: "Entry Points",
        body: [],
        table: {
          headers: ["Entry point", "Example", "Who can write it"],
          rows: [
            ["Web pages and search results", "Browsing agent summarizes a page", "Anyone on the internet"],
            ["Emails and messages", "Assistant triages an inbox", "Anyone who can send email"],
            ["Shared documents and wikis", "RAG over company drive", "Employees, guests, compromised accounts"],
            ["User-generated content", "Product reviews, support tickets, forum posts", "Customers or the public"],
            ["Tool and API outputs", "Third-party API or MCP server response", "The tool provider or anyone who can influence its data"],
            ["Code repositories and issues", "Coding agent reads issues and READMEs", "Contributors, external reporters"],
          ],
        },
      },
      {
        heading: "Why Exfiltration Is the Main Danger",
        body: [
          "The most damaging pattern combines three ingredients: access to private data, exposure to untrusted content and a channel to send data out. If an assistant can read your inbox, process an attacker's email and render images or links, planted instructions might encode private data into a URL that the attacker's server receives when loaded. Removing any one ingredient breaks the chain. OpenAI's guidance on designing agents to resist prompt injection describes analysing where data flows to (sinks) and asking users to confirm or blocking steps that would send conversation data to third parties.",
        ],
        cta: {
          title: "Building an assistant that reads email, documents or the web?",
          description: "ZSpace Labs designs AI architectures with trust boundaries and confirmation flows that contain injection risk. See [[/services/ai-automation|AI development services]].",
        },
      },
      {
        heading: "Trust Boundaries and Content Isolation",
        body: [
          "Draw trust boundaries explicitly. Developer-authored system instructions are trusted. User input, retrieved documents, web content, emails and tool outputs are not. Microsoft's agent safety guidance makes the same point: only developer-controlled content belongs in system messages, and tool and retrieved content must be treated as untrusted.",
          "Isolation patterns reduce exposure. A quarantined model can process untrusted content and return only constrained, structured results, such as a classification or extracted fields, to a privileged component that holds tools. Research on design patterns for securing LLM agents describes several such patterns, all based on preventing untrusted input from triggering consequential actions.",
        ],
      },
      {
        heading: "Least Privilege and Action Confirmation",
        body: [
          "Give each assistant only the tools and data its task needs, scoped to the current user. A summarizer does not need a send-email tool; an inbox triage assistant does not need access to file shares. Enforce permissions in the systems the tools call, not in the prompt.",
          "Require explicit user confirmation for consequential actions, especially outbound ones: sending messages, sharing files, making payments, changing settings, visiting URLs constructed from private data. Show the user exactly what will happen, including recipients and content. See [[/blogs/ai-agent-access-control|AI agent access control]] and [[/blogs/human-in-the-loop-ai|human-in-the-loop AI]].",
        ],
      },
      {
        heading: "Additional Controls",
        body: [],
        checklist: [
          "Block or proxy automatic loading of external images and links in AI output",
          "Restrict network egress for agents and tools to allow-listed domains",
          "Mark retrieved content with source and trust level in the context",
          "Limit who can write to indexed sources, and monitor changes",
          "Scan incoming content with injection classifiers as one signal, not the only defence",
          "Log tool calls with the content that preceded them for investigation",
        ],
      },
      {
        heading: "Advantages and Limitations of Current Defences",
        body: [
          "Architectural controls such as least privilege, isolation, confirmation and egress restrictions are robust because they do not depend on the model resisting manipulation. They also reduce capability and add friction. Detection classifiers and model hardening lower success rates but can be bypassed. Combine both, and decide consciously which capabilities are worth the residual risk.",
        ],
      },
      {
        heading: "How to Reduce Indirect Injection Risk Step by Step",
        body: [],
        checklist: [
          "**1. Map every untrusted content source** the system reads",
          "**2. Map data and tools** reachable in the same context",
          "**3. Remove unnecessary tools and data** from those contexts",
          "**4. Add confirmation** for outbound and consequential actions",
          "**5. Close exfiltration channels** such as auto-loaded links",
          "**6. Plant test injections** in each source type and test",
          "**7. Monitor tool calls** following untrusted content",
        ],
      },
      {
        heading: "Indirect Injection in Coding Agents and Browsing Agents",
        body: [
          "Coding agents read issues, pull request comments, documentation and dependency files, any of which outside contributors may write. Restrict which events can trigger agents, run them with tokens limited to branches and pull requests, and require human review before merge; see [[/blogs/ai-coding-agents|AI coding agents]]. Browsing agents read arbitrary web pages, so keep them separate from private data and sensitive tools, restrict where they can submit forms or send data, and require confirmation before purchases, logins or sharing information.",
        ],
      },
      {
        heading: "Monitoring and Response",
        body: [
          "Assume some injections will get through and design detection. Log tool calls together with the content that preceded them, alert on unusual patterns such as outbound messages to new recipients or tool calls right after reading external content, and review samples of agent trajectories. Keep the ability to disable specific tools or sources quickly, and when an injection is found in indexed content, remove it, search for similar content and add the case to the regression suite. See [[/blogs/llm-observability|LLM observability]].",
        ],
      },
      {
        heading: "Designing Confirmation That Works",
        body: [
          "Confirmation is one of the strongest controls against injected instructions, but only if users actually review what they confirm. Show the concrete action: recipient, content, amount, destination URL. Highlight anything unusual, such as an external recipient, a link to an unfamiliar domain or data the user did not mention. Avoid confirmation prompts for trivial actions, which train users to click through. For high-risk actions, require users to edit or type a value rather than clicking a default button.",
          "Never let the model write the confirmation text alone; generate the summary from the structured tool call so a manipulated model cannot describe a harmful action innocently. Interface patterns are covered in [[/blogs/ai-copilot-ux|AI copilot UX]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a support team's assistant answers from tickets, including text customers submit. Testing shows a planted instruction in a ticket can make the assistant append a link to its answer. The team stops rendering links from model output except to allow-listed domains, marks customer text as untrusted in the prompt, removes an unnecessary tool that could update ticket priority and adds the planted ticket to the regression suite.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Assuming only users can inject instructions",
          "Giving reading assistants sending or sharing tools",
          "Rendering model-generated links and images automatically",
          "Relying on 'ignore instructions in documents' prompts",
          "Indexing content anyone can edit without monitoring",
        ],
        cta: {
          title: "Want your assistant tested against injected content?",
          description: "Talk to ZSpace Labs about an [[/services/ai-automation|AI security review]] focused on retrieval, browsing, email and tool risks.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Any content an AI system reads can carry instructions. Treat it as untrusted, keep powerful tools and private data out of reach of untrusted contexts, confirm consequential actions with users, close exfiltration channels and keep testing with planted content.",
        ],
      },
    ],
  },
];
