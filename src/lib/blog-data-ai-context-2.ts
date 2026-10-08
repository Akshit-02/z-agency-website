import type { BlogPost } from "./blog-data";

/**
 * AI data and business context cluster, part two (published 2026-10-08):
 * AI data contracts, AI-ready data products and knowledge graph vs vector
 * database. Sources checked 2026-10-08: Bitol Open Data Contract Standard
 * (ODCS v3.1.0) and Open Data Product Standard (ODPS v1.0.0), Linux
 * Foundation; Martin Fowler, "Designing data products"; Microsoft GraphRAG
 * documentation; pgvector.
 */

export const aiContextPosts2: BlogPost[] = [
  // ---------------------------------------- AI DATA CONTRACTS
  {
    slug: "ai-data-contracts",
    title: "AI Data Contracts: How to Make Data Reliable for AI Applications",
    seoTitle: "AI Data Contracts: How to Make Data Reliable for AI",
    excerpt:
      "What a data contract covers for AI: schema, meaning, quality, ownership, freshness and versioning, with an example and the rules for breaking changes.",
    category: "AI & Automation",
    banner: "structuredoutputflow",
    sceneKind: "pipeline",
    date: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["b2b-enterprise", "saas-technology", "ecommerce"],
    relatedSlugs: ["data-pipelines-for-ai", "ai-ready-data-products", "data-quality-for-ai"],
    faqs: [
      { q: "What is a data contract?", a: "A data contract is an agreement between the team that produces a dataset and the teams or systems that consume it. It specifies the schema, the meaning of fields, quality expectations, freshness, availability, ownership and how changes will be made, and it is checked automatically." },
      { q: "Why do AI applications need data contracts?", a: "AI systems turn data into retrieved context, tool results and model inputs. A renamed field, a new status value or a delayed load can silently change what an assistant says or what an agent does, without any error. Contracts make those changes visible before they reach production." },
      { q: "What is a semantic contract?", a: "It is the part of a data contract that fixes meaning, not just type: what a field represents, its units, allowed values and how they should be interpreted. A column can keep its type while its meaning changes, which breaks AI consumers quietly." },
      { q: "Is there a standard format for data contracts?", a: "The Open Data Contract Standard (ODCS), maintained by the Bitol project at the Linux Foundation, is a widely used YAML format covering schema, quality, SLAs, team, support and more. Many teams also write contracts in their transformation tool or as JSON Schema." },
      { q: "Who owns a data contract?", a: "The producing team owns the contract and is responsible for honouring it. Consumers are responsible for declaring their dependency and their requirements. A platform team usually provides the tooling that validates contracts in CI and in pipelines." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An **AI data contract** is an explicit, versioned agreement between a data producer and the AI applications that consume its data. It covers the **schema** (fields and types), the **semantics** (what fields mean), **quality** expectations, **ownership**, **freshness**, **availability** and how **changes** are introduced. It is validated automatically, so breaking changes are caught in the producer's pipeline instead of being discovered when an assistant starts giving different answers.",
          "Contracts matter more for AI than for dashboards, because AI consumers fail quietly. A dashboard with a missing column shows an error; an agent with a missing field may simply decide differently.",
        ],
      },
      {
        heading: "Why AI systems are more sensitive to data changes",
        body: [
          "In a traditional report, a schema change usually breaks a query loudly. In an AI application, the same data feeds three looser paths: retrieval (documents and records chosen by similarity or filters), tool calls (an agent reading fields to decide what to do next) and model inputs (text the model interprets). Each tolerates change in ways that hide problems.",
          "A hypothetical example: an operations team adds a new order status, 'on_hold_compliance'. The pipeline runs, the dashboard still loads. But the support assistant's tool returns that status, the model has never seen it and tells customers their order is 'being processed'. An agent that issues delay credits only for 'delayed' orders now skips these customers. No component failed. Behaviour changed because a value set changed without notice.",
        ],
        callout: {
          type: "takeaway",
          text: "For AI consumers, 'the pipeline succeeded' is not the same as 'the data still means what the system assumes'. Contracts check the second.",
        },
      },
      {
        heading: "What a data contract covers",
        body: [],
        table: {
          headers: ["Part", "What it specifies", "Why AI consumers care"],
          rows: [
            ["Schema contract", "Fields, types, nullability, keys", "Tools and retrieval filters break or silently drop data"],
            ["Semantic contract", "Meaning, units, allowed values, definitions", "Models interpret values; a changed meaning changes answers"],
            ["Quality contract", "Completeness, validity, uniqueness thresholds", "Missing or duplicate records skew retrieval and actions"],
            ["Ownership", "Producing team, contact, escalation", "Someone must fix and communicate problems"],
            ["Freshness", "Maximum age, update schedule", "Stale facts lead to outdated answers and wrong actions"],
            ["Availability", "Uptime, access method, latency", "Agents calling tools need predictable access"],
            ["Access and sensitivity", "Classification, permitted uses, PII fields", "Controls what may be embedded, retrieved or sent to models"],
            ["Versioning", "Version number, change policy, deprecation period", "Consumers can test and migrate before changes land"],
          ],
        },
      },
      {
        heading: "Schema and semantic contracts",
        body: [
          "Schema contracts are the familiar part: field names, types and required fields. They catch renamed and removed columns. Semantic contracts go further and fix meaning: that amount is in minor currency units, that status values form a closed list, that customer_tier is assigned by finance quarterly, that region follows the shipping entity. Semantic changes are the dangerous ones for AI because types stay valid. If a field's meaning must change, it should become a new field or a new major version.",
          "Semantic contracts connect naturally to a [[/blogs/semantic-layer-for-ai|semantic layer]] and a [[/blogs/business-context-layer-for-ai|business context layer]]: the contract guarantees the raw meaning; the layers above build business definitions on it.",
        ],
      },
      {
        heading: "Quality, freshness and availability",
        body: [
          "Quality rules should reflect what consumers depend on, not a generic checklist: 'every active product has a non-empty description', 'no duplicate order IDs', 'price is positive'. Freshness should be stated as a maximum age the consumer can tolerate, such as 'inventory no older than 15 minutes during trading hours', and measured from source timestamps, not load time. See [[/blogs/data-freshness-for-ai|data freshness for AI]] for how to set those requirements. Availability matters when agents query data live through tools: state the access method, expected latency and what happens during maintenance.",
          "Our guide to [[/blogs/data-quality-for-ai|data quality for AI]] covers how to detect and fix problems; the contract is what turns those checks into an agreement with consequences.",
        ],
      },
      {
        heading: "A practical AI data contract example",
        body: [
          "The example below is illustrative and loosely follows the structure of the [[https://github.com/bitol-io/open-data-contract-standard|Open Data Contract Standard (ODCS)]], a YAML format maintained by the Bitol project under the Linux Foundation. It describes an order status dataset consumed by a customer support assistant and a refund agent.",
        ],
        code: {
          label: "Data contract for an AI-consumed dataset (illustrative)",
          text: `apiVersion: v3.1.0
kind: DataContract
id: orders-status
name: Order status for customer-facing AI
version: 2.3.0
status: active
team:
  owner: order-platform-team
  contact: "#order-platform"
schema:
  - name: order_status
    properties:
      - name: order_id
        logicalType: string
        required: true
        unique: true
      - name: status
        logicalType: string
        required: true
        description: Customer-visible order state.
        # semantic contract: closed list; new values = minor
        # version + 30 days notice to registered consumers
        enum: [placed, paid, packed, shipped, delivered,
               delayed, cancelled, refunded]
      - name: status_updated_at
        logicalType: timestamp
        description: Time the status changed in the source system.
      - name: delay_reason
        logicalType: string
        description: Plain-language reason; may be shown to customers.
quality:
  - rule: status_updated_at is not null
  - rule: no duplicate order_id
slaProperties:
  - property: freshness
    value: 5
    unit: minutes        # measured from status_updated_at
  - property: availability
    value: 99.9
    unit: percent
consumers:
  - support-assistant (read, retrieval + tool)
  - refund-agent (read, decisions on 'delayed')`,
        },
      },
      {
        heading: "Versioning and breaking changes",
        body: [
          "Use semantic versioning and make the rules explicit. A **patch** fixes documentation or tightens quality without changing data shape or meaning. A **minor** version adds optional fields or new allowed values with notice. A **major** version removes or renames fields, changes types or changes meaning. For AI consumers, treat any new enum value as at least minor, because models and agent logic often branch on values.",
        ],
        table: {
          headers: ["Change", "Breaking for AI?", "How to handle"],
          rows: [
            ["Add optional field", "Usually not", "Minor version; consumers opt in"],
            ["Add allowed value", "Often yes", "Minor version, notice period, update prompts, tools and evaluations"],
            ["Rename or remove field", "Yes", "Major version; run old and new in parallel; deprecate"],
            ["Change units or meaning", "Yes, silently", "New field or major version; never reuse the old name"],
            ["Loosen freshness or quality", "Yes", "Treat as breaking; consumers may rely on it"],
          ],
        },
      },
      {
        heading: "Producer and consumer responsibilities",
        body: [
          "Contracts only work when both sides have duties. **Producers** publish the contract, validate it in CI and in the pipeline, announce changes through a known channel, honour deprecation periods and fix violations. **Consumers** register their dependency (so producers know who to warn), state their actual requirements, pin to a major version, and re-run their [[/blogs/llm-regression-testing|AI regression tests]] when a new version arrives. A **platform team** provides the registry, validation tooling and alerting.",
        ],
        code: {
          label: "Data contract flow for AI consumers (diagram)",
          text: `Producer change (PR)
   │
   ▼
CI: validate against contract ──✗──▶ block merge / bump version
   │ ✓
   ▼
Pipeline run: schema + quality + freshness checks
   │                    │
   │ ✓                  └─✗─▶ quarantine batch, alert owner
   ▼
Published dataset (version 2.3.0)
   │
   ├──▶ retrieval index (re-embed on change)
   ├──▶ agent tools (typed responses)
   └──▶ evaluation set re-run on new version`,
        },
      },
      {
        heading: "Implementation checklist",
        body: [],
        checklist: [
          "Inventory the datasets your AI applications actually read",
          "Write contracts for the few that drive decisions or customer answers first",
          "Include semantics and allowed values, not just types",
          "Measure freshness from source timestamps",
          "Validate contracts in the producer's CI and in every pipeline run",
          "Register consumers so producers know who a change affects",
          "Quarantine failing batches instead of publishing them",
          "Tie contract versions to AI evaluation runs",
          "Record the contract version in answer provenance",
        ],
      },
      {
        heading: "Common mistakes",
        body: [
          "Teams often write contracts as documentation that nothing enforces; a contract that is not checked is a wish. Others contract every table at once and stall. Start with datasets that feed decisions or customer-facing answers. Another mistake is checking only schema, which misses the semantic changes that hurt AI most. Finally, consumers forget to declare themselves, so producers cannot know who a change will affect. Our guide to [[/blogs/data-pipelines-for-ai|data pipelines for AI]] shows where validation fits in the pipeline itself.",
        ],
        cta: {
          title: "Making AI data dependable?",
          description: "ZSpace Labs builds the pipelines, validation and integration layers that keep AI applications reliable as source systems change. See [[/services/ai-automation|AI automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Data contracts turn implicit assumptions into checked agreements. For AI applications, the important parts are semantics, allowed values, freshness and versioning, because those are the changes that alter answers and actions without raising errors. Contract the datasets that matter most, enforce them automatically, register consumers and connect contract versions to evaluation, and your AI systems will change when you decide, not when a source system does.",
        ],
      },
    ],
  },

  // ---------------------------------------- AI-READY DATA PRODUCTS
  {
    slug: "ai-ready-data-products",
    title: "AI-Ready Data Products: How to Package Enterprise Data for AI Agents",
    seoTitle: "AI-Ready Data Products: Packaging Enterprise Data for Agents",
    excerpt:
      "How a data product differs from a dataset, what makes one AI-ready, and how analytics, applications, AI apps and agents can all consume the same product.",
    category: "AI & Automation",
    banner: "integrationcompare",
    sceneKind: "pipeline",
    date: "2026-10-08",
    readingTime: "5 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["b2b-enterprise", "saas-technology", "ecommerce"],
    relatedSlugs: ["ai-data-contracts", "apis-for-ai-agents", "ai-data-engineering"],
    faqs: [
      { q: "What is a data product?", a: "A data product is a dataset packaged for use by others: it has an owner, a clear purpose, documentation, a stable interface, quality and freshness guarantees, access controls and a version. It is managed like a product with consumers, not left as a table someone happens to maintain." },
      { q: "What is the difference between a dataset and a data product?", a: "A dataset is data in a location. A data product adds ownership, documentation, metadata, guarantees, access methods and lifecycle management, so consumers can find it, trust it and use it without asking the producer how it works." },
      { q: "What makes a data product AI-ready?", a: "Machine-readable descriptions of fields and meaning, a contract with freshness and quality guarantees, permission-aware access, interfaces an AI application or agent can call (query API, retrieval index or MCP tools), provenance metadata and evaluation-friendly stability." },
      { q: "Do data products require a data mesh?", a: "No. Data products came to prominence through data mesh, but any organization can package important data as products. A central data team can own data products just as well as domain teams can." },
      { q: "How do AI agents access a data product?", a: "Through narrow, documented interfaces: a query endpoint, a governed metrics tool, a retrieval index or an MCP server exposing a few task-shaped tools. Agents should not receive raw database credentials." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An **AI-ready data product** is a set of enterprise data packaged so that people, applications, AI applications and AI agents can all use it safely without help from the team that built it. It has an **owner**, **documentation and metadata** that machines can read, a **contract** for schema, meaning, quality and freshness, **permissions**, and **interfaces** suited to each consumer: SQL or files for analytics, an API for applications, a retrieval index for AI apps and tools for agents.",
          "The difference from a dataset is accountability. A dataset is data in a location. A data product is data with a promise.",
        ],
      },
      {
        heading: "Dataset vs data product",
        body: [
          "The idea of treating data as a product was popularized by the data mesh approach, which asks that data products be discoverable, addressable, trustworthy and self-describing, among other qualities ([[https://martinfowler.com/articles/designing-data-products.html|Martin Fowler on designing data products]]). You do not need to adopt data mesh to use the idea. The core shift is simple: someone owns the data for its consumers, not only for the system that wrote it.",
        ],
        table: {
          headers: ["", "Dataset", "Data product"],
          rows: [
            ["Owner", "Whoever built the pipeline", "Named product owner with consumers"],
            ["Purpose", "Implicit", "Stated use cases and limits"],
            ["Documentation", "Sparse or tribal", "Field meanings, examples, known issues"],
            ["Interface", "Direct table access", "Stable, versioned interfaces per consumer type"],
            ["Guarantees", "None stated", "Contract: schema, semantics, quality, freshness"],
            ["Access", "Ad hoc grants", "Policy-based, auditable"],
            ["Lifecycle", "Grows until it breaks", "Versioned, deprecated, retired"],
          ],
        },
      },
      {
        heading: "The parts of an AI-ready data product",
        body: [
          "**Ownership.** A team that answers for the product's quality and changes, with a contact and an escalation path. **Documentation.** What the product is for, what it is not for, field meanings, example queries and known limitations. **Metadata.** Machine-readable descriptions, tags, sensitivity classification, lineage and the current version, ideally in your data catalog. **API access.** Interfaces suited to each consumer, discussed below. **Permissions.** Row- and column-level policies that follow the requesting user or agent. **Freshness and quality.** Stated in a [[/blogs/ai-data-contracts|data contract]] and measured continuously. **Machine-readable interfaces.** Typed schemas and descriptions that an AI model can read to decide how to use the product.",
          "The Bitol project at the Linux Foundation publishes an Open Data Product Standard alongside its data contract standard, which is a useful reference for what a product descriptor can contain.",
        ],
      },
      {
        heading: "One product, four kinds of consumer",
        body: [
          "A well-designed data product serves very different consumers from the same governed core. Take a hypothetical 'Customer 360' product combining CRM, orders, support and subscription data with resolved identities.",
        ],
        code: {
          label: "One data product, four consumers (diagram)",
          text: `              ┌───────── CUSTOMER 360 DATA PRODUCT ─────────┐
              │ owner · contract v3 · metadata · policies    │
              │ resolved customer IDs · freshness: 15 min    │
              └──┬───────────┬───────────┬───────────┬──────┘
                 │           │           │           │
            SQL / files   REST API   retrieval   agent tools
                 │           │       index (text  (MCP server:
                 │           │       + metadata)   3 tools)
                 ▼           ▼           ▼           ▼
            Analytics    Applications  AI apps    AI agents
            (BI, models) (CRM widget,  (support   (renewal agent
                          portal)       assistant) drafts offers)`,
        },
      },
      {
        heading: "How each consumer uses the product",
        body: [],
        table: {
          headers: ["Consumer", "Interface", "What matters most"],
          rows: [
            ["Analytics", "SQL views, files, semantic layer metrics", "Consistent definitions, history, documentation"],
            ["Applications", "Versioned REST or GraphQL API", "Latency, availability, stable schema"],
            ["AI applications", "Retrieval index with metadata filters; summaries", "Clear text, permissions on retrieval, freshness, provenance"],
            ["AI agents", "A few task-shaped tools (for example via MCP)", "Narrow scope, typed inputs and outputs, delegated permissions, audit"],
          ],
        },
      },
      {
        heading: "Designing interfaces for agents",
        body: [
          "Agents need less than you think, and less is safer. Instead of exposing the whole Customer 360 schema, expose a handful of tools that match tasks: get_customer_summary(customer_id), list_open_issues(customer_id), get_renewal_context(customer_id). Each returns a compact, typed result with the fields an agent needs to decide, the as-of time and source references. The [[https://modelcontextprotocol.io/|Model Context Protocol]] is a common way to expose such tools to many AI clients; our guides to [[/blogs/apis-for-ai-agents|APIs for AI agents]] and [[/blogs/ai-agent-tool-design|AI agent tool design]] cover the details.",
          "Permissions must follow the agent's delegated identity, so a renewal agent acting for one account manager sees only that manager's accounts. See [[/blogs/ai-agent-access-control|AI agent access control]].",
        ],
        callout: {
          type: "tip",
          text: "Return the product version and data timestamps with every tool response. It makes answers traceable and lets agents decide whether data is fresh enough to act on.",
        },
      },
      {
        heading: "What makes a data product AI-ready: a checklist",
        body: [],
        checklist: [
          "A named owner and a stated purpose, including what it should not be used for",
          "Plain-language descriptions for every field, readable by people and models",
          "A data contract covering schema, semantics, quality and freshness",
          "Resolved identities for key entities, not one ID per source system",
          "Sensitivity labels and permission policies that follow the requester",
          "Interfaces per consumer type, including narrow tools for agents",
          "Timestamps and version on every record or response",
          "Lineage to source systems, so answers can be traced",
          "A changelog and deprecation policy consumers can rely on",
          "Usage metrics, so the owner knows who depends on what",
        ],
      },
      {
        heading: "Where to start",
        body: [
          "Pick the data behind your first serious AI use case, not the data easiest to package. If the use case is a support assistant, the first data products are probably orders, customers and knowledge articles. Package those well, with contracts and interfaces, then let the second use case reuse them. The value of data products compounds: each new AI application should need less new data work than the last. For the broader engineering foundation, see [[/blogs/ai-data-engineering|AI data engineering]].",
        ],
      },
      {
        heading: "Common mistakes",
        body: [
          "Renaming existing tables as 'products' without adding ownership or guarantees changes nothing. Building separate copies of the same data for each AI project recreates inconsistency. Giving agents broad SQL access to a product defeats its access policies. And skipping documentation hurts AI more than people, because the model's only understanding of a field is the description you provide.",
        ],
        cta: {
          title: "Packaging data for AI applications and agents?",
          description: "ZSpace Labs designs APIs, retrieval and agent tools over existing business data, with permissions and monitoring built in. See [[/services/ai-automation|AI automation]] and [[/services/website-development|full-stack development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "AI-ready data products are how enterprise data stops being rebuilt for every AI project. Give each product an owner, a contract, machine-readable documentation, permissions and interfaces suited to analytics, applications, AI apps and agents. The work is mostly product discipline, not new technology, and it is what lets agents use company data safely at scale.",
        ],
      },
    ],
  },

  // ---------------------------------------- KNOWLEDGE GRAPH VS VECTOR DATABASE
  {
    slug: "knowledge-graph-vs-vector-database",
    title: "Knowledge Graph vs Vector Database for AI: Which One Should You Use?",
    seoTitle: "Knowledge Graph vs Vector Database for AI: Which to Use?",
    excerpt:
      "A clear comparison of knowledge graphs and vector databases for AI: data model, retrieval, relationships, updates and cost, and when to combine them.",
    category: "AI & Automation",
    banner: "slmvsllm",
    sceneKind: "rag",
    date: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["b2b-enterprise", "saas-technology"],
    relatedSlugs: ["vector-databases-for-ai", "graphrag-explained", "business-ontology-for-ai"],
    faqs: [
      { q: "What is the difference between a knowledge graph and a vector database?", a: "A vector database stores embeddings and finds items that are similar in meaning. A knowledge graph stores entities and typed relationships and answers questions by following those relationships. One is built for similarity, the other for connections." },
      { q: "Is a vector database enough for RAG?", a: "For many RAG applications, yes. If questions can be answered from one or a few relevant passages, vector search with metadata filters, often combined with keyword search and reranking, is usually sufficient." },
      { q: "When does a knowledge graph make sense?", a: "When questions depend on relationships across entities and systems, need multi-hop reasoning, require precise structured answers or need explainable paths, such as which suppliers feed products sold to a given customer." },
      { q: "Can you use both together?", a: "Yes, and many production systems do. A common pattern is to use vector search to find relevant entities or passages, then use the graph to expand to related entities and facts, or use the graph to filter candidates before semantic search." },
      { q: "Which is harder to operate?", a: "Knowledge graphs usually take more effort: you need an ontology, entity resolution and pipelines that keep relationships correct. Vector databases are simpler to start, though re-embedding, filtering and scaling still need care." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A **vector database** finds things that are **similar in meaning**: it stores embeddings of text, images or records and returns the nearest ones to a query. A **knowledge graph** finds things that are **connected**: it stores entities and typed relationships and answers questions by traversing them. Use a vector database when answers live in relevant passages. Use a knowledge graph when answers depend on relationships between entities. Combine them when you need both semantic recall and precise connections.",
          "Neither wins universally. They solve different retrieval problems, and the right choice follows from the questions your users actually ask.",
        ],
      },
      {
        heading: "How each one works",
        body: [
          "A vector database turns content into [[/blogs/vector-embeddings-explained|embeddings]], numerical vectors where similar meanings sit close together, and uses approximate nearest-neighbour indexes to find the closest vectors to a query. It is excellent at 'find me passages about late delivery compensation' even when the wording differs. It does not know that a passage is about customer C-102, unless you add that as metadata. See [[/blogs/vector-databases-for-ai|vector databases for AI]].",
          "A knowledge graph stores nodes (customers, products, suppliers, contracts) and edges (buys, supplies, covers, reports to), each with properties. Queries follow edges: from a customer to their orders, to the products in them, to the suppliers of those products. It is excellent at precise, multi-step questions and at explaining how an answer was reached. It needs a defined [[/blogs/business-ontology-for-ai|ontology]] and clean identities to work.",
        ],
      },
      {
        heading: "Side-by-side comparison",
        body: [],
        table: {
          headers: ["Dimension", "Vector database", "Knowledge graph"],
          rows: [
            ["Data model", "Vectors plus metadata", "Nodes, typed edges, properties"],
            ["Retrieval", "Nearest-neighbour similarity", "Traversal, pattern matching, lookups"],
            ["Relationships", "Implicit, via metadata or co-occurrence", "Explicit and typed"],
            ["Similarity", "Native strength", "Not native; can add embeddings to nodes"],
            ["Multi-hop reasoning", "Weak; each hop needs a new search", "Native; follow edges"],
            ["Structured data", "Possible, but loses structure", "Natural fit"],
            ["Unstructured data", "Natural fit", "Requires extraction into entities and edges"],
            ["Update pattern", "Re-embed changed items; model change means re-embedding everything", "Update nodes and edges; schema changes need migration"],
            ["Explainability", "'These passages were similar'", "'This path connects A to B'"],
            ["Operational complexity", "Lower to start", "Higher: ontology, entity resolution, pipelines"],
            ["Typical use cases", "Document Q&A, semantic search, recommendations by similarity", "Supply chains, fraud rings, product compatibility, org and account structures"],
          ],
        },
        code: {
          label: "Vector retrieval vs graph retrieval (diagram)",
          text: `VECTOR: "refund rules for damaged goods"
   query ──embed──▶ ● nearest neighbours
                    ├─ passage 12 (0.89)
                    ├─ passage 47 (0.86)
                    └─ passage 03 (0.81)   → similar text

GRAPH: "which customers are affected if supplier S7 stops?"
   (Supplier S7) ─supplies─▶ (Part P3) ─used in─▶ (Product X)
                                         └─used in─▶ (Product Y)
   (Product X) ◀─ordered─ (Customer A), (Customer B)
   (Product Y) ◀─ordered─ (Customer C)   → connected entities`,
        },
      },
      {
        heading: "When a vector database alone is enough",
        body: [
          "Most document-based assistants do not need a graph. If users ask questions answered by one or a few passages (policies, manuals, help articles, contracts read one at a time), vector search with good chunking, metadata filters and reranking is usually sufficient. Add keyword search for exact terms such as SKUs and error codes; see [[/blogs/hybrid-search-for-rag|hybrid search for RAG]]. Many teams can also store vectors in an existing database, such as Postgres with [[https://github.com/pgvector/pgvector|pgvector]], before adopting a dedicated system.",
        ],
        checklist: [
          "Answers live inside individual documents or passages",
          "Relationships can be handled with metadata filters (customer ID, region, product)",
          "Wording varies a lot, so semantic matching matters",
          "The content changes often and must be indexed quickly",
          "The team needs something working in weeks, not months",
        ],
      },
      {
        heading: "When a knowledge graph makes sense",
        body: [
          "A graph earns its cost when the questions are about structure. 'Which of our customers buy products that contain this recalled component?' 'Who approves contracts for this subsidiary?' 'Which accessories are compatible with this model and in stock in this region?' Each requires following several relationships across systems. Vector search can retrieve documents mentioning these things but cannot reliably assemble the chain.",
        ],
        checklist: [
          "Questions require two or more hops across entities",
          "Precision matters more than recall (compliance, safety, finance)",
          "Users need to see how an answer was derived",
          "Data comes from several systems that share entities",
          "You already have, or will invest in, entity resolution and an ontology",
        ],
      },
      {
        heading: "When to combine them",
        body: [
          "Hybrid designs are common and practical. Three patterns cover most cases:",
        ],
        table: {
          headers: ["Pattern", "How it works", "Good for"],
          rows: [
            ["Vector first, graph expand", "Semantic search finds relevant passages or entities; the graph adds related entities and facts", "Questions phrased loosely that need connected context"],
            ["Graph first, vector rank", "The graph narrows candidates by relationships; vector search ranks text within them", "Scoped questions ('in this customer's contracts, what says...')"],
            ["GraphRAG-style summaries", "An LLM extracts entities and relationships from documents, builds a graph and community summaries for global questions", "Themes across large document collections"],
          ],
        },
        callout: {
          type: "note",
          text: "Microsoft's GraphRAG is one well-documented approach to the third pattern, building a graph and summaries from text with an LLM. It adds indexing cost, so evaluate it on your own questions first. See our guide to GraphRAG.",
        },
      },
      {
        heading: "Update patterns and operating costs",
        body: [
          "Vector stores update by re-embedding changed content, which is simple per item but means a full re-embed when you change embedding models. Freshness depends on how quickly changes reach the index. Graphs update by changing nodes and edges, which requires pipelines that resolve identities and keep relationships consistent; a wrong merge can connect unrelated entities. Graphs built by LLM extraction (as in [[/blogs/graphrag-explained|GraphRAG]]) also carry extraction errors and indexing cost. Plan for these operating costs before choosing, and see [[/blogs/data-freshness-for-ai|data freshness for AI]] for how to keep either one current.",
        ],
      },
      {
        heading: "A decision framework",
        body: [],
        table: {
          headers: ["If most questions are...", "Start with"],
          rows: [
            ["'What does this document or policy say about X?'", "Vector database (plus keyword search)"],
            ["'Find similar items, tickets or products'", "Vector database"],
            ["'How is A connected to B?' or 'Who or what is affected by X?'", "Knowledge graph"],
            ["'How much or how many?' over business data", "Semantic layer, not either of these"],
            ["Loosely phrased questions that need connected facts", "Both: vector first, graph expand"],
            ["Broad themes across thousands of documents", "Evaluate GraphRAG-style summaries"],
          ],
        },
      },
      {
        heading: "Common mistakes",
        body: [
          "Building a knowledge graph because it sounds more sophisticated, without questions that need it, is the most expensive mistake on this list. The opposite mistake is forcing relational questions through vector search and blaming the model when it misses links. Other mistakes: skipping entity resolution, so the graph has three nodes for one customer; using numeric questions as a reason for either store, when a [[/blogs/semantic-layer-for-ai|semantic layer]] is the right tool; and not evaluating retrieval on real questions before and after a change.",
        ],
        cta: {
          title: "Choosing retrieval architecture for an AI application?",
          description: "ZSpace Labs builds RAG, graph and hybrid retrieval systems and evaluates them against your real questions. See [[/services/ai-automation|AI automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Vector databases and knowledge graphs answer different questions. Vector search is the default for document-grounded AI because it is quick to build and handles varied wording. Knowledge graphs are worth their cost when relationships are the answer. Many mature systems combine them. Write down your users' real questions, classify them by type, and let that decide the architecture.",
        ],
      },
    ],
  },
];
