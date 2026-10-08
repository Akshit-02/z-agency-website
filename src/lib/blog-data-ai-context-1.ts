import type { BlogPost } from "./blog-data";

/**
 * AI data and business context cluster, part one (published 2026-10-08):
 * business context layer, semantic layer and business ontology. Sources
 * checked 2026-10-08: Anthropic "Effective context engineering for AI
 * agents"; Snowflake and dbt Labs on the Open Semantic Interchange (OSI);
 * Snowflake semantic views and Databricks Unity Catalog metric views docs;
 * W3C OWL 2, SKOS and RDF 1.1 specifications.
 */

export const aiContextPosts1: BlogPost[] = [
  // ---------------------------------------- BUSINESS CONTEXT LAYER
  {
    slug: "business-context-layer-for-ai",
    title: "What Is a Business Context Layer for AI? How Companies Make Enterprise Data Understandable to AI",
    seoTitle: "Business Context Layer for AI: What It Is and How to Build It",
    excerpt:
      "A business context layer gives AI the definitions, rules, entities, permissions and timing behind enterprise data, so correct data leads to correct answers.",
    category: "AI & Automation",
    banner: "aireadystack",
    sceneKind: "pipeline",
    date: "2026-10-08",
    readingTime: "9 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["b2b-enterprise", "saas-technology"],
    relatedSlugs: ["semantic-layer-for-ai", "context-engineering-ai-agents", "ai-data-readiness"],
    faqs: [
      { q: "What is a business context layer for AI?", a: "It is the shared layer that tells AI systems what enterprise data means: business definitions, rules, entities and their relationships, organizational structure, time periods and who is allowed to see what. AI applications and agents query it alongside the data itself so their answers use the company's meaning, not a guess." },
      { q: "Is a business context layer the same as a semantic layer?", a: "No. A semantic layer is one part of it: governed metrics and dimensions over structured data. The business context layer is broader and also covers policies, document knowledge, entity identity, organizational context, temporal rules and permissions for both structured and unstructured sources." },
      { q: "Why can accurate data still produce a wrong AI answer?", a: "Because the question is interpreted with the wrong meaning. If 'active customer' means 'ordered in 90 days' for sales but 'has a live contract' for finance, an AI can sum perfectly correct rows and still answer the wrong question." },
      { q: "Do we need a knowledge graph to build a context layer?", a: "Not necessarily. Many teams start with a governed glossary, a semantic layer for metrics, documented business rules and permission-aware retrieval. A knowledge graph helps when relationships between entities drive the questions people ask." },
      { q: "Where should a company start?", a: "With one high-value question area, such as revenue reporting or order support. Write down the definitions and rules people actually use, find where they conflict, assign owners, and expose them to the AI application through retrieval or tools before expanding to the next domain." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A **business context layer** is the part of an AI architecture that explains what enterprise data means. It holds business definitions, rules, entities and relationships, organizational context, time conventions and permissions, and it serves them to AI applications and agents at the moment they answer a question or take an action.",
          "Raw tables and documents tell an AI what was recorded. The context layer tells it what the records mean in this company: which revenue figure finance reports, which customer record is the real one, which policy applies in which region and who is allowed to see the answer. Without it, an AI can read accurate data and still give a wrong business answer.",
        ],
      },
      {
        heading: "What does business context mean?",
        body: [
          "Business context is the knowledge people use to interpret data correctly that is rarely stored next to the data. An analyst who has worked in a company for two years knows that 'bookings' excludes trials, that the EMEA region moved two countries last quarter, that the fiscal year starts in April and that refunds post three days after a return is received. A model reading the warehouse knows none of that.",
          "Context engineering, the practice of curating what a model sees for each request, has become a core discipline for AI agents; Anthropic describes it as managing the whole set of tokens a model sees, not just writing the prompt ([[https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents|Anthropic on effective context engineering]]). A business context layer is the enterprise-wide source that context engineering draws from. Our guide to [[/blogs/context-engineering-ai-agents|context engineering for AI agents]] covers the per-request side; this article covers the shared layer underneath.",
        ],
      },
      {
        heading: "Why raw enterprise data is not enough",
        body: [
          "Enterprise data is shaped by the systems that wrote it, not by the questions people ask. Column names are abbreviations, statuses are codes, the same customer exists in four systems, and many rules live in spreadsheets, wikis or people's heads. Retrieval-augmented generation and text-to-SQL can find data, but finding is not understanding.",
          "**Accurate data, wrong answer.** A hypothetical example: a sales director asks an internal assistant, 'How many active customers did we have in Germany last quarter?' The assistant counts customers with an order in the last 90 days, filtered by billing country, using calendar quarters. Finance reports a different number because, in this company, an active customer has a live contract, region follows the shipping entity and quarters are fiscal. Every row the assistant used was correct. The answer was still wrong, because the meaning was wrong.",
        ],
        callout: {
          type: "takeaway",
          text: "Most wrong answers from enterprise AI are interpretation failures, not data failures. Fixing the data pipeline does not fix a missing definition.",
        },
      },
      {
        heading: "The seven kinds of context the layer holds",
        body: [
          "A useful context layer covers seven kinds of knowledge. Each one answers a question the AI would otherwise guess.",
        ],
        table: {
          headers: ["Context", "Question it answers", "Example"],
          rows: [
            ["Business definitions", "What does this term mean here?", "'Active customer' = live contract, not recent order"],
            ["Business rules", "How is it calculated or decided?", "Net revenue excludes tax, shipping and refunds within 30 days"],
            ["Entities", "Which real-world thing is this?", "Customer, product, supplier, contract, with a canonical ID"],
            ["Relationships", "How are things connected?", "Account belongs to a parent group; contract covers these products"],
            ["Organizational context", "Who owns what, and how is the company structured?", "Regions, business units, cost centres, approval chains"],
            ["Temporal context", "Which time frame and version applies?", "Fiscal calendar, policy effective dates, as-of snapshots"],
            ["Permissions", "Who may see or act on this?", "Region managers see their region; HR fields are restricted"],
          ],
        },
      },
      {
        heading: "Business definitions and business rules",
        body: [
          "Definitions are the vocabulary; rules are the logic. Both need a single owner, a written statement in plain language, a machine-usable form (a SQL expression, a metric definition, a policy check) and a version. When two departments use the same word differently, the context layer should hold both meanings with clear names, such as 'active customer (sales)' and 'active customer (finance)', rather than pretending there is one.",
          "Governed metrics usually live in a [[/blogs/semantic-layer-for-ai|semantic layer]], which defines measures and dimensions once and compiles queries consistently. Rules that are not metrics, such as refund eligibility or discount limits, belong in policy documents with structured summaries or in tools that enforce them.",
        ],
      },
      {
        heading: "Entities, relationships and identity",
        body: [
          "AI answers degrade quickly when the same customer, product or company has different IDs in different systems. The context layer needs canonical entities and a way to map system records to them, which is the job of [[/blogs/entity-resolution-for-ai|entity resolution]]. Relationships (parent and subsidiary, product and bundle, contract and site) let the AI answer questions that span systems.",
          "How formally to model this depends on the questions. A list of entity types with key attributes is often enough at first. When questions depend on chains of relationships, a [[/blogs/business-ontology-for-ai|business ontology]] and possibly a knowledge graph become worthwhile.",
        ],
      },
      {
        heading: "Organizational and temporal context",
        body: [
          "Organizational context explains how the business is arranged: regions, legal entities, teams, owners and approval paths. It is what lets an AI route an exception to the right person or scope an answer to a manager's area.",
          "Temporal context is the most commonly missed. Policies have effective dates, prices change, regions are reorganized and products are renamed. An answer about 'last quarter' must use last quarter's rules and hierarchy, not today's. Store effective-from and effective-to dates on definitions and rules, and pass the as-of date into every query. For how current the underlying data must be, see [[/blogs/data-freshness-for-ai|data freshness for AI]].",
        ],
      },
      {
        heading: "Permissions belong in the context layer",
        body: [
          "Permissions are context too: the same question has different correct answers for different people. A regional manager asking about revenue should get their region; an HR assistant must not reveal salary fields to a line manager who lacks access. The context layer should carry the user's identity and entitlements into retrieval and query generation so filters are applied before the model sees data, not after. Our guide to [[/blogs/ai-agent-access-control|AI agent access control]] covers delegated permissions for agents.",
        ],
      },
      {
        heading: "How context retrieval works",
        body: [
          "At request time, the AI application gathers the context relevant to the question rather than loading everything. A typical sequence: identify the user and their entitlements, detect the business terms and entities in the question, look up their governed definitions and rules, resolve entities to canonical IDs, apply the right time frame, then retrieve or query the data with those constraints. The model receives a compact package: the question, the definitions used, the data, and where each piece came from.",
          "Recording which definitions and sources were used also gives you [[/blogs/data-provenance-for-ai|answer provenance]], so a reviewer can see why the assistant said what it said.",
        ],
      },
      {
        heading: "Context layer architecture",
        body: [
          "The layer sits between enterprise systems and AI applications. It does not replace your warehouse, document stores or catalogs; it organizes their meaning and serves it through APIs, retrieval and tools.",
        ],
        code: {
          label: "Business context layer architecture (diagram)",
          text: `  AI assistants · AI agents · analytics copilots
                     │  question + user identity
                     ▼
 ┌───────────────── CONTEXT SERVICE ─────────────────┐
 │ term & entity detection → definition lookup        │
 │ entity resolution → time frame → permission filter │
 └───────┬─────────────┬─────────────┬───────────────┘
         ▼             ▼             ▼
  ┌────────────┐ ┌────────────┐ ┌──────────────┐
  │ Glossary + │ │ Semantic   │ │ Entities +   │
  │ rules      │ │ layer      │ │ relationships│
  │ (versioned)│ │ (metrics)  │ │ (IDs, graph) │
  └────────────┘ └────────────┘ └──────────────┘
  ┌────────────┐ ┌────────────┐ ┌──────────────┐
  │ Org model  │ │ Policies + │ │ Entitlements │
  │ (regions,  │ │ documents  │ │ (who sees    │
  │ owners)    │ │ (indexed)  │ │ what)        │
  └────────────┘ └────────────┘ └──────────────┘
         ▲             ▲             ▲
   warehouse · CRM · ERP · ecommerce · wikis · HR`,
        },
        callout: {
          type: "note",
          text: "Start with the components you already have: a data catalog's glossary, BI metric definitions and your identity provider. The context layer is often an integration project before it is a new platform.",
        },
      },
      {
        heading: "An example enterprise scenario",
        body: [
          "A hypothetical B2B distributor wants an assistant that answers account managers' questions about customers, orders and margin. In the first version, the assistant reads the CRM and ERP directly. It reports margins that ignore rebates, treats a parent group's five subsidiaries as unrelated customers and shows contract terms that were superseded last month.",
          "The team adds a context layer in stages. Margin is defined once in the semantic layer, including rebates, and owned by finance. Customer records from CRM and ERP are resolved to one account with a parent-child hierarchy. Contract documents carry effective dates, and retrieval filters to the version in force on the date asked about. Account managers only see their own territories. The assistant now uses the same numbers as the monthly business review, and when it cannot resolve a term it asks rather than guesses.",
        ],
      },
      {
        heading: "Business context layer vs related concepts",
        body: [
          "The terms overlap, so it helps to place each at its layer. The business context layer is the umbrella. A semantic layer works at the metrics layer over structured data. An ontology works at the conceptual model layer, defining entity types and relationships. A knowledge graph stores instances of those entities and links. A RAG index retrieves passages from documents. Context engineering decides what goes into one model call.",
        ],
        table: {
          headers: ["Concept", "Works at", "Main job"],
          rows: [
            ["Business context layer", "Enterprise meaning", "Serve definitions, rules, entities, time and permissions to AI"],
            ["Semantic layer", "Metrics over structured data", "Define measures and dimensions once; generate consistent queries"],
            ["Ontology", "Conceptual model", "Define entity types, attributes and relationships"],
            ["Knowledge graph", "Instance data", "Store connected entities for traversal and lookup"],
            ["RAG index", "Documents", "Retrieve relevant passages for a question"],
            ["Context engineering", "Single model call", "Choose and order what the model sees now"],
          ],
        },
      },
      {
        heading: "Implementation checklist",
        body: [],
        checklist: [
          "Pick one question domain with real demand and measurable answers",
          "Collect the definitions people use today, including conflicting ones",
          "Assign an owner to every definition and rule; record effective dates",
          "Put metrics in a semantic layer instead of in prompts",
          "Resolve key entities (customer, product, account) to canonical IDs",
          "Model the organization: regions, units, owners, approval paths",
          "Carry user identity into retrieval and queries; filter before generation",
          "Return the definitions and sources used with every answer",
          "Make the assistant ask when a term is ambiguous instead of guessing",
          "Build an evaluation set of real questions with agreed correct answers",
          "Review and version changes to definitions like code changes",
        ],
      },
      {
        heading: "Common mistakes",
        body: [
          "The most common mistake is putting business definitions into a system prompt. It works for a demo and then drifts: nobody owns the prompt, definitions change without review and different assistants hold different versions. A second mistake is trying to model the whole enterprise before shipping anything; context layers grow domain by domain. A third is treating permissions as an output filter, which leaks information into the model's reasoning even if the final answer is redacted. Finally, teams forget time, so assistants answer historical questions with today's rules.",
        ],
        cta: {
          title: "Making company data usable by AI?",
          description: "ZSpace Labs designs and builds the data access, retrieval and tool layers behind AI assistants and agents, connected to your existing systems. See [[/services/ai-automation|AI automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A business context layer is what turns enterprise data into something an AI can interpret the way your people do. It is not a single product: it is a set of governed definitions, rules, entities, organizational and temporal context and permissions, served at the moment of the question. Start with one domain, write down the meaning that already exists in people's heads, give it owners and versions, and make every answer show which definitions it used. The rest of this cluster goes deeper into each part, from the [[/blogs/semantic-layer-for-ai|semantic layer]] to [[/blogs/data-provenance-for-ai|provenance]].",
        ],
      },
    ],
  },

  // ---------------------------------------- SEMANTIC LAYER
  {
    slug: "semantic-layer-for-ai",
    title: "Semantic Layer for AI: Why Your AI Needs Business Definitions, Not Just Database Tables",
    seoTitle: "Semantic Layer for AI: Business Definitions, Not Just Tables",
    excerpt:
      "What a semantic layer is, how metrics and dimensions work, and how it compares with databases, RAG and knowledge graphs when AI answers business questions.",
    category: "AI & Automation",
    banner: "aiplatformmap",
    sceneKind: "analytics",
    date: "2026-10-08",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["b2b-enterprise", "saas-technology", "ecommerce"],
    relatedSlugs: ["business-context-layer-for-ai", "text-to-sql-for-business-data", "business-ontology-for-ai"],
    faqs: [
      { q: "What is a semantic layer?", a: "A semantic layer is a governed set of business definitions, mainly metrics and dimensions, mapped onto physical data. Tools and AI applications ask for 'net revenue by region last quarter' and the layer generates the correct query, so every consumer gets the same number." },
      { q: "Why does AI need a semantic layer?", a: "Language models can write SQL, but they do not know your business definitions, join paths or exclusions. A semantic layer gives them a small, named vocabulary of approved metrics and dimensions instead of hundreds of raw tables, which makes answers consistent and easier to verify." },
      { q: "Is a semantic layer the same as RAG?", a: "No. RAG retrieves passages of text to ground an answer. A semantic layer computes numbers from structured data using governed definitions. Many assistants use both: RAG for policies and documents, the semantic layer for metrics." },
      { q: "What is the difference between a semantic layer and a knowledge graph?", a: "A semantic layer is optimized for aggregating metrics over dimensions. A knowledge graph is optimized for entities and the relationships between them. The semantic layer answers 'how much'; the graph answers 'how is this connected'." },
      { q: "Which semantic layer tools exist?", a: "Options include the dbt Semantic Layer with MetricFlow, Cube, LookML in Looker, Snowflake semantic views, Databricks Unity Catalog metric views and BI-native models such as Power BI semantic models. The right choice usually follows your existing warehouse and BI stack." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A **semantic layer** is a governed translation layer between business language and physical data. It defines **metrics** (what is measured, such as net revenue), **dimensions** (how results can be sliced, such as region or product line), the joins and filters behind them, and who may see them. Applications ask for a metric by name; the layer generates the query.",
          "For AI, the semantic layer replaces guesswork. Instead of asking a model to write SQL against hundreds of tables and hope it applies your exclusions correctly, the model selects from a short list of approved metrics and dimensions, and the layer computes the number the same way finance does.",
        ],
      },
      {
        heading: "Why database tables are not enough for AI",
        body: [
          "Databases store facts in a shape that suits the applications that write them. Answering a business question usually requires knowledge that is not in the schema: which status codes count as a completed order, which table holds the reporting currency, whether refunds reduce revenue in the month of sale or the month of refund, and which of three customer tables is authoritative.",
          "A language model given the schema will produce plausible SQL. Plausible is the problem: a query can run, return a number and still use the wrong definition. Benchmarks such as BIRD were designed around this gap between understanding a question and querying a real, messy database; on that benchmark, human experts still score clearly higher than the best automated systems ([[https://bird-bench.github.io/|BIRD benchmark]]). The fix is not only a better model; it is giving the model better-defined things to ask for. See [[/blogs/text-to-sql-for-business-data|text-to-SQL for business data]] for the query side.",
        ],
      },
      {
        heading: "Metrics, dimensions and semantic models",
        body: [
          "Most semantic layers share the same building blocks, even if each product names them differently.",
        ],
        table: {
          headers: ["Building block", "What it is", "Example"],
          rows: [
            ["Semantic model", "A business view over one or more tables, with keys and joins", "Orders model joining orders, lines and customers"],
            ["Measure", "An aggregation on a column", "SUM(line_amount_net)"],
            ["Metric", "A named business calculation built from measures", "Net revenue = gross sales minus discounts and refunds"],
            ["Dimension", "An attribute to group or filter by", "Region, product category, sales channel"],
            ["Time dimension", "A date with grains and calendars", "Order date by fiscal month"],
            ["Entity / join key", "How models connect", "customer_id links orders to accounts"],
            ["Access policy", "Who can query what", "Region managers see only their region"],
          ],
        },
        code: {
          label: "A metric definition (illustrative, YAML-style)",
          text: `metric: net_revenue
description: >
  Revenue after discounts and refunds, excluding tax and
  shipping. Owned by Finance. Used in board reporting.
type: derived
expr: gross_sales - discounts - refunds
filters:
  - order_status in ('completed', 'partially_refunded')
  - is_test_order = false
time_dimension: order_date      # fiscal calendar, starts April
dimensions: [region, channel, product_category]
owner: finance-analytics
synonyms: ["revenue", "net sales"]`,
        },
      },
      {
        heading: "Business definitions are the point",
        body: [
          "The value of a semantic layer is not the YAML. It is that a definition is agreed once, owned by someone and reused everywhere. Write a plain-language description for every metric and dimension, list synonyms people actually use, and document exclusions. Those descriptions are exactly what an AI model reads to choose the right metric, so they double as AI instructions.",
          "This is one part of a wider [[/blogs/business-context-layer-for-ai|business context layer]], which also holds rules, entities, organizational structure, time and permissions that are not metrics.",
        ],
      },
      {
        heading: "How an AI assistant uses a semantic layer",
        body: [
          "A typical flow: the user asks a question; the assistant identifies candidate metrics and dimensions from their names, descriptions and synonyms; it fills a structured request (metric, dimensions, filters, time range); the semantic layer validates it, applies the user's access policy and generates SQL; the warehouse returns results; the assistant explains them and states which definitions it used. The model never writes free-form SQL against raw tables, which removes a whole class of errors and makes answers auditable.",
        ],
        code: {
          label: "Semantic layer in an AI analytics flow (diagram)",
          text: `User question ─▶ AI assistant
                  │ picks metric + dimensions
                  │ (structured request, not SQL)
                  ▼
           ┌──────────────┐   definitions, joins,
           │ Semantic     │◀─ synonyms, owners,
           │ layer        │   access policies
           └──────┬───────┘
                  │ generated SQL (governed)
                  ▼
           Warehouse / lakehouse
                  │ result rows
                  ▼
   Answer + "metric used: net_revenue (Finance)"`,
        },
      },
      {
        heading: "Database vs semantic layer",
        body: [
          "The database stores and computes; the semantic layer decides what should be computed and how. You still need a well-modelled warehouse. The semantic layer sits on top and turns that model into business vocabulary.",
        ],
        table: {
          headers: ["", "Database or warehouse", "Semantic layer"],
          rows: [
            ["Unit", "Tables, columns, rows", "Metrics, dimensions, entities"],
            ["Language", "SQL", "Business terms mapped to SQL"],
            ["Definitions", "Implicit in queries and reports", "Explicit, named, owned, versioned"],
            ["Consistency", "Each query may differ", "Same metric, same logic everywhere"],
            ["AI interface", "Model writes SQL against schema", "Model selects governed metrics"],
          ],
        },
      },
      {
        heading: "Semantic layer vs RAG vs knowledge graph",
        body: [
          "These three are often confused because all of them 'give AI context'. They work at different layers and answer different kinds of questions. A semantic layer works at the metrics layer over structured data. [[/blogs/retrieval-augmented-generation|RAG]] works at the document layer, retrieving text passages. A knowledge graph works at the relationship layer, storing entities and the links between them (see [[/blogs/knowledge-graph-vs-vector-database|knowledge graph vs vector database]]).",
        ],
        table: {
          headers: ["", "Semantic layer", "RAG", "Knowledge graph"],
          rows: [
            ["Best question", "How much? How many? Trend?", "What does the policy say?", "How is X connected to Y?"],
            ["Data", "Structured, aggregated", "Unstructured text", "Entities and relationships"],
            ["Output", "Computed numbers", "Relevant passages", "Paths, neighbours, facts"],
            ["Correctness comes from", "Governed definitions", "Retrieval quality and citations", "Modelled relationships"],
            ["Typical failure", "Missing metric or dimension", "Wrong or stale passage", "Incomplete or outdated graph"],
          ],
        },
        callout: {
          type: "tip",
          text: "Route by question type. Numeric business questions go to the semantic layer, policy and how-to questions go to retrieval, and relationship questions go to the graph. One assistant can use all three as tools.",
        },
      },
      {
        heading: "Semantic layer options",
        body: [
          "Semantic layers come in three broad forms. **Standalone or transformation-linked layers** such as the dbt Semantic Layer (built on MetricFlow) and Cube define metrics once and serve many tools. **Warehouse-native semantics** such as Snowflake semantic views and [[https://docs.databricks.com/aws/en/metric-views|Databricks Unity Catalog metric views]] store definitions as governed objects inside the platform, and both vendors position them as the basis for their natural-language analytics features. **BI-native models** such as LookML and Power BI semantic models live inside a BI tool.",
          "Portability is improving. The Open Semantic Interchange (OSI) initiative, announced by Snowflake with Salesforce, dbt Labs, BlackRock, RelationalAI and others, is working on a vendor-neutral specification so semantic definitions can move between tools ([[https://www.getdbt.com/blog/the-osi-spec-updates|dbt Labs on the OSI specification]]). It is young; check current tool support before depending on it.",
        ],
      },
      {
        heading: "AI agent use cases",
        body: [
          "Semantic layers are not only for chat-with-your-data. Agents use them as a safe, read-only analytics tool. Examples: a finance agent preparing a monthly variance commentary queries governed metrics and explains movements; a sales agent checks an account's revenue trend before drafting a renewal note; an operations agent monitors a fulfilment-rate metric and opens a ticket when it drops below threshold; an ecommerce merchandising assistant compares category margin across channels. In each case the agent calls a tool such as query_metric(metric, dimensions, filters, time_range), which is far easier to secure and evaluate than free-form SQL. See [[/blogs/ai-agent-tool-design|AI agent tool design]].",
        ],
      },
      {
        heading: "How to implement a semantic layer for AI",
        body: [],
        checklist: [
          "Start with the 10 to 20 metrics behind your most common business questions",
          "Agree definitions with their owners before writing any code",
          "Write descriptions and synonyms for every metric and dimension",
          "Choose the layer that fits your warehouse and BI stack",
          "Expose it to AI through a structured tool, not raw SQL access",
          "Apply row- and column-level access policies inside the layer",
          "Make the assistant cite the metric and definition it used",
          "Build an evaluation set of real questions with verified answers",
          "Treat metric changes like code changes: review, version, test",
        ],
      },
      {
        heading: "Common mistakes",
        body: [
          "Teams often expose every column as a dimension, which recreates the raw-schema problem with nicer names. Keep the vocabulary small and curated. Another mistake is skipping descriptions; for AI, the description is the interface. Some teams build a semantic layer for dashboards but let the AI assistant query raw tables anyway, which guarantees two sets of numbers. Finally, a semantic layer cannot answer questions it has no metric for; the assistant should say so rather than improvise a query.",
        ],
        cta: {
          title: "Building AI analytics on company data?",
          description: "ZSpace Labs connects AI assistants and agents to governed data through well-designed tools and APIs. See [[/services/ai-automation|AI automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A semantic layer gives AI the one thing a schema cannot: agreed business meaning. It turns 'write some SQL' into 'choose from these governed metrics', which makes answers consistent with the rest of the business and easy to check. Use it for numeric questions, pair it with retrieval for documents and a graph for relationships, and treat its definitions as the shared language between people, BI tools and AI.",
        ],
      },
    ],
  },

  // ---------------------------------------- BUSINESS ONTOLOGY
  {
    slug: "business-ontology-for-ai",
    title: "Business Ontology for AI: How to Teach AI What Your Company Actually Means",
    seoTitle: "Business Ontology for AI: Teach AI What Your Company Means",
    excerpt:
      "How a business ontology defines entities, attributes, relationships and rules for AI, how it differs from a taxonomy, knowledge graph and semantic layer.",
    category: "AI & Automation",
    banner: "agentinterfaces",
    sceneKind: "pipeline",
    date: "2026-10-08",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["b2b-enterprise", "manufacturing", "ecommerce"],
    relatedSlugs: ["knowledge-graph-vs-vector-database", "business-context-layer-for-ai", "entity-resolution-for-ai"],
    faqs: [
      { q: "What is a business ontology?", a: "A business ontology is a formal model of the things a company deals with (customers, products, contracts, sites), their attributes, how they relate and the rules that constrain them. It gives people and software a shared, explicit vocabulary." },
      { q: "What is the difference between an ontology and a taxonomy?", a: "A taxonomy is a hierarchy of categories, such as product categories. An ontology includes hierarchies but also defines attributes, many kinds of relationships and rules, so it can describe how things connect rather than only how they are classified." },
      { q: "Is an ontology the same as a knowledge graph?", a: "No. The ontology is the schema: entity types, relationship types and rules. The knowledge graph is the data that follows it: the actual customers, products and links. You can have an ontology without a graph database, but a useful knowledge graph needs an ontology." },
      { q: "Does an ontology make an LLM accurate?", a: "Not by itself. It gives the AI system clearer structure to retrieve from and validate against, which can reduce interpretation errors. Accuracy still depends on data quality, retrieval, the model, evaluation and checks in the application." },
      { q: "Do we need RDF and OWL to build one?", a: "No. W3C standards such as RDF, OWL and SKOS are useful for interoperability and reasoning, but many business ontologies start as documented entity and relationship models, property graph schemas or well-structured data models." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A **business ontology** is an explicit model of what a company's concepts are and how they relate: the **entities** (customer, product, contract, site), their **attributes**, the **relationships** between them, their **hierarchies** and the **business rules** that constrain them. For AI, it provides a shared structure that retrieval, tools and validation can rely on, so an assistant can tell that a 'site' belongs to an 'account', that a 'bundle' contains 'SKUs' and that a contract 'covers' certain products.",
          "An ontology does not make a language model accurate on its own. It makes the system around the model more precise: better retrieval, clearer tool inputs and checks that catch answers which violate known rules.",
        ],
      },
      {
        heading: "Why AI needs an explicit model of the business",
        body: [
          "Language models have broad general knowledge and no knowledge of your specific business structure. They will happily assume that a customer is a person, that a product has one price or that a region is a country, because those are common patterns. In many companies none of that is true. An ontology writes the real structure down once, so every AI application uses the same model instead of each prompt describing the business slightly differently.",
          "It is one part of a wider [[/blogs/business-context-layer-for-ai|business context layer]]: the part that describes what things are and how they connect.",
        ],
      },
      {
        heading: "The building blocks",
        body: [],
        table: {
          headers: ["Element", "What it defines", "Example"],
          rows: [
            ["Entity (class)", "A type of thing the business deals with", "Account, Site, Contract, Product, Order"],
            ["Attribute (property)", "A characteristic of an entity", "Contract.end_date, Product.hazard_class"],
            ["Relationship", "A typed link between entities", "Contract covers Product; Site belongs to Account"],
            ["Hierarchy", "Parent-child or broader-narrower structure", "Account group > Account > Site"],
            ["Business rule (constraint)", "What must or must not be true", "An Order must reference an active Contract"],
            ["Identifier", "How an entity is uniquely recognized", "Canonical account ID mapped to CRM and ERP IDs"],
          ],
        },
      },
      {
        heading: "Ontology vs taxonomy",
        body: [
          "A taxonomy organizes things into categories, usually a tree: Equipment > Pumps > Centrifugal pumps. It answers 'what kind of thing is this?'. An ontology includes taxonomies but adds attributes, many relationship types and rules. It answers 'what is this, what does it have, and how does it connect to everything else?'.",
          "Most companies already have taxonomies: product categories, industry codes, support issue types. They are a good starting point. The W3C's SKOS standard is designed for exactly these concept schemes, while OWL is designed for richer ontologies with logical constraints ([[https://www.w3.org/TR/skos-reference/|W3C SKOS]], [[https://www.w3.org/TR/owl2-overview/|W3C OWL 2]]).",
        ],
      },
      {
        heading: "A practical enterprise example",
        body: [
          "A hypothetical industrial equipment supplier wants an AI service assistant that answers questions such as 'Which of this customer's sites have pumps covered by a service contract that expires this quarter?'. The data lives in CRM (accounts, sites), ERP (orders, installed equipment), a contract system and the product catalog. Each system names things differently.",
          "The team defines a small ontology first, before building anything else:",
        ],
        code: {
          label: "Ontology for an equipment service assistant (diagram)",
          text: `  AccountGroup
      │ has
      ▼
   Account ──── has ────▶ Site
      │                     │ hosts
      │ holds               ▼
      ▼               InstalledAsset ── instance of ──▶ Product
   Contract ── covers ──────┘                             │
      │                                                   │ in
      │ attributes: start_date, end_date, tier            ▼
      ▼                                            ProductCategory
   rule: an InstalledAsset is "covered" only        (taxonomy:
   if a Contract with status=active covers it        Pumps > Centrifugal)
   on the date asked about`,
        },
      },
      {
        heading: "What the ontology changes in that example",
        body: [
          "With the ontology in place, the assistant has a defined path to answer the question: resolve the customer to an Account, follow 'has' to Sites, 'hosts' to InstalledAssets, filter by ProductCategory 'Pumps', then check which Contracts 'cover' them with an end date in the quarter. The question becomes a traversal or a set of tool calls with typed inputs, rather than a model guessing joins across four systems.",
          "The rule about active coverage also becomes a check. If the model drafts an answer saying an asset is covered by an expired contract, the application can detect the violation and correct or flag it.",
        ],
        callout: {
          type: "note",
          text: "The ontology did not make the model smarter. It gave the system a precise structure to retrieve from and validate against, which is where most of the accuracy gain comes from.",
        },
      },
      {
        heading: "Ontology vs knowledge graph",
        body: [
          "The ontology is the schema; the knowledge graph is the data. The ontology says 'a Contract covers Products'; the knowledge graph says 'contract C-1042 covers asset A-77 and A-78'. You can implement an ontology in an RDF triple store, a property graph database, or even relational tables with a documented model. What matters is that the structure is explicit and shared. For when a graph store is worth it, see [[/blogs/knowledge-graph-vs-vector-database|knowledge graph vs vector database]] and [[/blogs/graphrag-explained|GraphRAG]].",
        ],
      },
      {
        heading: "Ontology vs semantic layer",
        body: [
          "A [[/blogs/semantic-layer-for-ai|semantic layer]] works at the metrics layer: it defines how to compute 'net revenue' across dimensions. An ontology works at the conceptual layer: it defines what an Account, a Site and a Contract are and how they relate. They complement each other. The ontology's entities often become the semantic layer's join keys and dimensions, and the semantic layer's metrics become attributes you can attach to ontology entities.",
        ],
        table: {
          headers: ["", "Taxonomy", "Ontology", "Knowledge graph", "Semantic layer"],
          rows: [
            ["Describes", "Categories", "Concepts, relationships, rules", "Actual entities and links", "Metrics and dimensions"],
            ["Shape", "Tree", "Schema (graph of types)", "Graph of instances", "Models over tables"],
            ["Question it helps", "What kind?", "What is it, how does it relate?", "What is connected to this?", "How much, how many?"],
            ["AI use", "Classification, filters", "Tool design, retrieval, validation", "Multi-hop retrieval", "Governed analytics"],
          ],
        },
      },
      {
        heading: "How AI systems use an ontology",
        body: [
          "There are four practical uses. **Tool design:** entity and relationship types become the inputs and outputs of agent tools, such as get_sites(account_id). **Retrieval:** documents and records are tagged with ontology entities, so retrieval can filter by entity and follow relationships. **Extraction:** when AI reads contracts or emails, the ontology defines what to extract and how to type it, often enforced with [[/blogs/llm-structured-outputs|structured outputs]]. **Validation:** rules catch answers and actions that contradict the model of the business.",
        ],
      },
      {
        heading: "How to build a business ontology without boiling the ocean",
        body: [],
        checklist: [
          "Start from 20 to 50 real questions the AI should answer",
          "List the entities and relationships those questions need, nothing more",
          "Reuse existing taxonomies and data models where they are sound",
          "Define each entity with an owner, identifier and key attributes",
          "Write relationship names as verbs people recognise ('covers', 'belongs to')",
          "Capture the rules that decide correctness, with effective dates",
          "Map each entity to its source systems and resolve identities across them",
          "Choose storage only after the model is agreed",
          "Version the ontology and review changes with domain owners",
        ],
      },
      {
        heading: "Common mistakes",
        body: [
          "Ontology projects fail when they try to model the whole enterprise up front, use academic terminology business users do not recognize, or never connect to real data. Another failure is ignoring identity: an ontology that says 'Account has Sites' is useless if the same account has three IDs. Pair the model with [[/blogs/entity-resolution-for-ai|entity resolution]]. Finally, do not oversell it internally. An ontology improves structure and consistency; it does not remove the need for evaluation and review of AI outputs.",
        ],
        cta: {
          title: "Structuring business knowledge for AI?",
          description: "ZSpace Labs helps teams model the entities, tools and retrieval behind reliable AI assistants and agents. See [[/services/ai-automation|AI automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A business ontology is the explicit answer to 'what do we mean by that?'. It defines the entities, attributes, relationships, hierarchies and rules that make a company's data interpretable, and AI systems use it to design tools, focus retrieval, type extracted data and validate outputs. Keep it small, question-driven and owned, connect it to resolved identities and real systems, and treat it as one layer of the wider business context your AI depends on.",
        ],
      },
    ],
  },
];
