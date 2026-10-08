import type { BlogPost } from "./blog-data";

/**
 * AI data and business context cluster, part three (published 2026-10-08):
 * entity resolution, data freshness, data provenance and text-to-SQL.
 * Sources checked 2026-10-08: UK Ministry of Justice Splink documentation
 * and GOV.UK publications (Fellegi-Sunter record linkage); dbt source
 * freshness reference; IETF RFC 9111 (HTTP caching); W3C PROV-DM; Anthropic
 * Claude citations documentation; BIRD text-to-SQL benchmark.
 */

export const aiContextPosts3: BlogPost[] = [
  // ---------------------------------------- ENTITY RESOLUTION
  {
    slug: "entity-resolution-for-ai",
    title: "How Entity Resolution Improves AI: Connecting the Same Customer, Product and Company Across Systems",
    seoTitle: "Entity Resolution for AI: One Customer Across Every System",
    excerpt:
      "How entity resolution links the same customer, product and company across CRM, ERP, ecommerce, support and marketing, and why AI answers depend on it.",
    category: "AI & Automation",
    banner: "agentfailmap",
    sceneKind: "crm",
    date: "2026-10-08",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ai-automation", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "b2b-enterprise", "retail"],
    relatedSlugs: ["data-quality-for-ai", "business-ontology-for-ai", "ai-ready-data-products"],
    faqs: [
      { q: "What is entity resolution?", a: "Entity resolution is the process of working out which records, across one or many systems, refer to the same real-world thing, such as the same customer, product or company, and linking them under one identity." },
      { q: "What is the difference between entity resolution and deduplication?", a: "Deduplication removes duplicate records inside one dataset. Entity resolution links records across datasets and systems, usually keeping the source records and adding a shared identifier, so every system can still be traced." },
      { q: "Why does entity resolution matter for AI?", a: "AI assistants and agents combine data from many systems. If one customer has four IDs, an assistant may report a quarter of their history, miss an open complaint or let an agent send an offer to someone who just cancelled." },
      { q: "Rules or machine learning for entity matching?", a: "Most teams use both. Deterministic rules handle exact identifiers such as tax IDs or verified emails; probabilistic or ML matching scores fuzzy matches on names, addresses and phone numbers; uncertain pairs go to human review." },
      { q: "Can an LLM do entity resolution?", a: "LLMs can help judge difficult candidate pairs and normalise messy text, but they are slow and costly at scale and can be inconsistent. Use them on the small set of uncertain pairs after blocking and scoring, not on every comparison." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**Entity resolution** works out which records refer to the same real-world entity (a customer, a product, a company) across systems that each use their own IDs, and links them under one canonical identity. **Entity matching** is the comparison step inside it: scoring whether two records describe the same thing.",
          "AI depends on it because assistants and agents assemble answers from many systems. If the CRM, ERP, ecommerce platform, helpdesk and marketing tool each hold a different version of the same customer, the AI sees four partial customers. Its answers become incomplete, and its actions can be wrong.",
        ],
      },
      {
        heading: "Why the same entity ends up with many identities",
        body: [
          "Every system creates records for its own purpose. Sales creates an account in the CRM with the company's trading name. Finance creates a customer in the ERP with the legal name and tax ID. The online store creates a customer per email address, so a buyer who used a work and a personal email exists twice. Support creates contacts from incoming emails. Marketing imports leads from events with misspelled names. Products suffer the same: a supplier's part number, an internal SKU, a marketplace listing ID and a bundle code for the same item.",
          "None of these systems is wrong. They simply do not share an identity, and most were never designed to.",
        ],
        code: {
          label: "One customer across five systems (diagram)",
          text: `CRM          account  "Acme Industrial"      A-1007
ERP          customer "ACME Industrial Ltd"  C-55120  VAT GB123...
Ecommerce    customer "j.doe@acme.co"        S-88812
Support      contact  "John Doe <jd@acme.co>" T-3391
Marketing    lead     "Jon Doe, Acme Ind."   M-40012
                     │
                     ▼  entity resolution
        CANONICAL ACCOUNT  ent:acme-industrial
        └─ person ent:john-doe (2 emails, 3 records)`,
        },
      },
      {
        heading: "How inconsistent identities degrade AI answers and actions",
        body: [
          "The failures are rarely dramatic, which is why they go unnoticed. Some hypothetical but typical examples:",
        ],
        table: {
          headers: ["Situation", "What the AI does", "Why"],
          rows: [
            ["Support assistant summarises a customer", "Misses an open complaint and a recent refund", "Ticket and refund sit under different IDs"],
            ["Sales agent drafts an upsell email", "Pitches a product the customer bought last week online", "Online orders are linked to a personal email"],
            ["Finance assistant reports top accounts", "Ranks a group's subsidiaries separately and too low", "No parent-child link across entities"],
            ["Marketing agent sends a win-back offer", "Targets someone who renewed through a reseller", "Reseller orders use the reseller's account"],
            ["Product assistant answers stock questions", "Says an item is out of stock", "Inventory is under the supplier part number, not the SKU"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "For agents, bad identity is a safety issue, not only a quality issue. An agent that acts on a partial customer can send the wrong offer, refund twice or contact someone who opted out.",
        },
      },
      {
        heading: "Customer, product and company identity",
        body: [
          "**Customer identity** usually combines verified identifiers (account number, verified email, phone) with fuzzy attributes (name, address). In B2C, households and multiple emails complicate it; consent and privacy rules limit what can be linked. **Product identity** relies on GTINs, manufacturer part numbers and supplier codes where they exist, and on attribute matching (brand, model, size, colour) where they do not; variants and bundles need explicit relationships rather than merges. **Company identity** uses legal names, registration and tax numbers, domains and addresses, and needs hierarchies: parent groups, subsidiaries, sites and trading names.",
          "In each case, decide what 'the same' means for your business. A parent company and its subsidiary are different entities with a relationship, not duplicates; that decision belongs in your [[/blogs/business-ontology-for-ai|business ontology]].",
        ],
      },
      {
        heading: "How entity resolution works",
        body: [
          "Most pipelines follow the same stages. **Standardize** names, addresses, phone numbers and codes. **Block** records into candidate groups (same postcode, same email domain) so you avoid comparing everything with everything. **Compare** candidate pairs on several attributes. **Score** each pair, with rules for exact identifiers and a probabilistic or ML model for fuzzy evidence. **Decide** using thresholds: auto-link, auto-reject or send to review. **Cluster** linked pairs into entities and assign canonical IDs. **Maintain** links as new records arrive, and keep the ability to split wrong merges.",
          "The classic statistical approach is the Fellegi-Sunter model, which weighs how much each agreeing or disagreeing attribute changes the odds of a match. The UK Ministry of Justice's open-source library Splink implements it at scale and is used to link people across courts, prisons and probation data ([[https://moj-analytical-services.github.io/splink/|Splink documentation]]).",
        ],
        code: {
          label: "Entity resolution pipeline (diagram)",
          text: `CRM ─┐
ERP ─┤
Shop ├─▶ standardize ─▶ block ─▶ compare pairs ─▶ score
Help ─┤                                           │
Mktg ─┘                         ┌─────────────────┼──────────┐
                                ▼                 ▼          ▼
                           auto-link        human review  no match
                                └────────┬────────┘
                                         ▼
                        cluster ─▶ canonical IDs + crosswalk
                                         │
                 ┌───────────────────────┼─────────────────────┐
                 ▼                       ▼                     ▼
          data products            retrieval metadata     agent tools`,
        },
      },
      {
        heading: "Architecture: where resolved identity lives",
        body: [
          "The output of entity resolution is a **crosswalk**: a table mapping every source record ID to a canonical entity ID, with match confidence and the date linked. Keep source records intact. Downstream, the canonical ID should appear everywhere AI consumes data: in [[/blogs/ai-ready-data-products|data products]], as metadata on retrieval chunks (so a search can filter to one customer's documents across systems) and in agent tool inputs and outputs. Agents should look up a customer once and receive the canonical ID plus the linked source IDs, rather than searching each system by name.",
          "Some organizations run this as a master data management (MDM) programme with golden records; others keep a lighter crosswalk. For AI, the essential parts are the same: a stable canonical ID, links back to sources and a way to fix mistakes.",
        ],
      },
      {
        heading: "Practical examples",
        body: [
          "**Ecommerce brand (hypothetical).** Shopify customers, marketplace orders, helpdesk contacts and email subscribers are resolved on verified email, phone and address. The support assistant now sees every order and ticket for a person, and the marketing agent suppresses offers to anyone with an open complaint.",
          "**B2B distributor (hypothetical).** CRM accounts and ERP customers are linked on tax ID and domain, then grouped by legal parent. Account managers' assistants report group-level revenue that matches finance, and the renewal agent sees all sites under a contract.",
          "**Product catalogue (hypothetical).** Supplier part numbers, internal SKUs and marketplace listings are linked through GTINs and attribute matching, so the product assistant answers stock and compatibility questions with the right item.",
        ],
      },
      {
        heading: "Using LLMs in entity resolution",
        body: [
          "Language models are useful for the hard middle: normalizing messy company names, judging ambiguous pairs with free-text evidence and explaining why two records probably match. They are a poor fit for the full comparison workload because of cost, latency and inconsistency. A sensible pattern is to block and score with conventional methods, then send only uncertain pairs to an LLM with a [[/blogs/llm-structured-outputs|structured output]] ('match', 'no match', 'unsure', with reasons), and route 'unsure' to a person. Measure precision and recall on a labelled sample before trusting it.",
        ],
      },
      {
        heading: "Implementation checklist",
        body: [],
        checklist: [
          "Choose the entities that matter for your first AI use case",
          "Define what 'same entity' means, including hierarchies and exclusions",
          "Inventory identifiers in each source and how reliable they are",
          "Standardize, block, compare and score; start with exact identifiers",
          "Set thresholds for auto-link, review and reject from a labelled sample",
          "Keep a crosswalk with confidence and link dates; never overwrite sources",
          "Support un-merging when a link is wrong",
          "Propagate canonical IDs into data products, retrieval metadata and tools",
          "Respect consent and privacy rules when linking personal data",
          "Monitor match rates and review queues as new data arrives",
        ],
      },
      {
        heading: "Common mistakes",
        body: [
          "Over-merging is worse than under-merging: linking two different customers can expose one person's data to another and lead agents to act on the wrong account. Tune for precision first. Other mistakes include matching on names alone, treating parent and subsidiary as duplicates, running resolution once instead of continuously, and resolving identities in the warehouse while the AI still queries source systems by name. Our guides to [[/blogs/data-quality-for-ai|data quality for AI]] and [[/blogs/crm-automation-guide|CRM automation]] cover related clean-up work.",
        ],
        cta: {
          title: "Connecting customer and product data for AI?",
          description: "ZSpace Labs integrates CRM, ERP, ecommerce and support systems so AI assistants and agents see one consistent view. See [[/services/ai-automation|AI automation]] and [[/services/shopify-development|Shopify development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Entity resolution is quiet infrastructure with a large effect on AI. It decides whether an assistant sees one customer or four fragments, and whether an agent acts on the whole picture. Define what 'same' means, match with rules and scores, review the uncertain middle, keep a reversible crosswalk and carry canonical IDs into everything AI reads.",
        ],
      },
    ],
  },

  // ---------------------------------------- DATA FRESHNESS
  {
    slug: "data-freshness-for-ai",
    title: "Data Freshness for AI: How to Stop AI Agents From Using Outdated Information",
    seoTitle: "Data Freshness for AI: Stop Agents Using Outdated Data",
    excerpt:
      "How to set freshness requirements for AI, choose real-time, near-real-time or batch, and control staleness with timestamps, TTLs and invalidation.",
    category: "AI & Automation",
    banner: "runawaycontrols",
    sceneKind: "monitor",
    date: "2026-10-08",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ai-automation", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "logistics-supply-chain", "fintech"],
    relatedSlugs: ["real-time-data-for-ai", "data-provenance-for-ai", "ai-data-contracts"],
    faqs: [
      { q: "What is data freshness in AI?", a: "Data freshness is how recent the information an AI system uses is, measured from when the fact changed in the source system to when the AI uses it. It applies to retrieval indexes, caches, tool results, memory and the context an agent carries through a task." },
      { q: "Does every AI application need real-time data?", a: "No. Policies, manuals and product descriptions change rarely and work well with daily or event-triggered updates. Real-time data matters for facts that change quickly and drive decisions, such as stock, prices, order status, balances and availability." },
      { q: "What is a TTL for AI data?", a: "A time to live is the maximum age after which cached or indexed data must be refreshed or treated as stale. Set it per type of data based on how fast it changes and what a stale value would cost." },
      { q: "How do I stop an agent acting on stale data?", a: "Re-read decision-critical facts from the system of record immediately before the action, check timestamps against a freshness requirement, and make the action itself validate preconditions (for example, that stock is still available) so a stale read cannot complete." },
      { q: "How is this different from building a streaming pipeline?", a: "Streaming is one way to achieve freshness. Freshness is the requirement: how current each fact must be for each use. Many requirements are met more cheaply with event-triggered updates, short caches or live tool calls than with full streaming." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**Data freshness for AI** is about making sure the facts an assistant or agent uses are recent enough for the decision being made. Stale data is one of the most common causes of confident, wrong AI answers: the old return policy, last week's price, an order status from this morning.",
          "Fixing it does not mean making everything real-time. Set a **freshness requirement** per type of data, measure age from **source timestamps**, refresh with the cheapest method that meets the requirement (batch, event-driven updates or live reads) and re-check decision-critical facts at the moment an agent acts.",
        ],
      },
      {
        heading: "How stale data gets into AI systems",
        body: [
          "AI systems keep copies of data in more places than traditional applications, and each copy ages. Stale information enters through:",
        ],
        table: {
          headers: ["Where", "How it goes stale", "Example"],
          rows: [
            ["Retrieval index", "Documents re-indexed on a schedule; deletions missed", "Assistant quotes a superseded policy"],
            ["Caches", "Responses or tool results cached too long", "Cached answer shows an old delivery estimate"],
            ["Tool results in context", "An agent reads a value early in a long task", "Agent quotes a price read 40 minutes earlier"],
            ["Agent memory", "Facts remembered across sessions without expiry", "Agent remembers a customer's old address"],
            ["Model knowledge", "Training data has a cutoff", "Model describes an API that has since changed"],
            ["Derived datasets", "Upstream pipeline delays", "Inventory feed is three hours behind"],
          ],
        },
      },
      {
        heading: "Not every AI workflow needs real-time data",
        body: [
          "Freshness has a cost. Streaming pipelines, frequent re-indexing and live tool calls add infrastructure, latency and spend. The question is not 'how fresh can we make it?' but 'how stale can this be before it causes harm?'. A handbook assistant is fine with nightly updates plus re-indexing when a policy is published. A stock answer on a busy product page is not. Our guide to [[/blogs/real-time-data-for-ai|real-time data for AI]] covers how to build streaming pipelines when you genuinely need them; this article is about deciding when you do.",
        ],
      },
      {
        heading: "Decision framework: real-time vs near-real-time vs batch",
        body: [
          "Classify each fact the AI uses by how fast it changes and what a stale value would cost. Then pick the cheapest refresh mode that meets the requirement.",
        ],
        table: {
          headers: ["Mode", "Typical age", "Good for", "How"],
          rows: [
            ["Real-time (live read)", "Seconds", "Stock at checkout, balances, prices at decision time, order status for actions", "Tool call to the system of record at the moment of use"],
            ["Near-real-time", "Seconds to minutes", "Order status in answers, ticket status, delivery tracking, fraud signals", "Event-driven updates, change data capture, streaming"],
            ["Micro-batch", "Minutes to an hour", "Product catalogue changes, CRM updates, dashboards", "Scheduled incremental loads"],
            ["Batch", "Hours to a day", "Policies, manuals, help content, historical analytics", "Nightly jobs plus event-triggered re-index on publish"],
          ],
        },
        code: {
          label: "Choosing a freshness mode (diagram)",
          text: `Will an agent ACT on this fact (pay, ship, promise)?
   ├─ yes ─▶ live read at decision time + precondition check
   └─ no
       │
   Does it change within minutes AND appear in answers?
       ├─ yes ─▶ near-real-time: events / CDC → index or cache
       └─ no
           │
   Does it change daily or less, mostly on publish?
           ├─ yes ─▶ batch + re-index on publish event
           └─ no  ─▶ micro-batch on a schedule`,
        },
      },
      {
        heading: "Source timestamps: measure age correctly",
        body: [
          "Freshness should be measured from when a fact changed in the source, not when your pipeline loaded it. A batch that loaded at 09:00 might contain data extracted at 02:00. Carry source timestamps (status_updated_at, price_effective_from, document_modified_at) through pipelines, into retrieval metadata and into tool responses. Transformation tools can check this: dbt, for example, lets you declare warn_after and error_after thresholds on a source's loaded_at_field ([[https://docs.getdbt.com/reference/resource-properties/freshness|dbt freshness reference]]). Make freshness part of each dataset's [[/blogs/ai-data-contracts|data contract]].",
        ],
      },
      {
        heading: "TTLs and cache invalidation",
        body: [
          "Every cache in an AI system needs a time to live that matches the data, not a single global value. Cache static content for hours or days, product data for minutes, and do not cache decision-critical facts at all. HTTP caching semantics (max-age, validation with ETags) remain a good model for tool responses ([[https://www.rfc-editor.org/rfc/rfc9111|RFC 9111]]).",
          "TTLs alone are not enough for content that changes unpredictably. Pair them with **invalidation**: when a policy is published, a price changes or a product is withdrawn, emit an event that removes or refreshes the affected cache entries and retrieval chunks. Deletions matter as much as updates; an index that never removes withdrawn documents will keep citing them. For caching LLM responses specifically, see [[/blogs/llm-batching-and-caching|LLM batching and caching]].",
        ],
      },
      {
        heading: "Event-driven updates and streaming",
        body: [
          "Event-driven updates are often the best middle ground. Instead of re-indexing everything on a schedule, subscribe to change events (webhooks from your commerce platform, change data capture from the database, publish events from the CMS) and update only what changed. Full streaming pipelines are worth it when many facts change continuously and several consumers need them; see [[/blogs/real-time-data-for-ai|real-time data for AI]] for the architecture.",
        ],
      },
      {
        heading: "Retrieval freshness",
        body: [
          "For RAG, freshness has three parts: how quickly new and changed documents are indexed, whether deleted or superseded documents are removed, and whether retrieval prefers current versions. Store effective dates and status (current, superseded) as metadata, filter out superseded content by default, and include the document date in what the model sees so it can say 'according to the policy updated on...'. Monitor index lag as a metric. [[/blogs/enterprise-rag-architecture|Enterprise RAG architecture]] covers connector design for this.",
        ],
      },
      {
        heading: "Agent decision freshness",
        body: [
          "Agents add a new problem: data read early in a task can expire before the agent acts. A refund agent might read an order status, spend several minutes gathering information and then issue a refund on an order that was already refunded by a colleague. Three controls prevent this:",
        ],
        checklist: [
          "**Re-read before acting:** fetch decision-critical facts from the system of record immediately before a consequential action",
          "**Freshness checks in tools:** tools reject inputs based on data older than the requirement and tell the agent to refresh",
          "**Preconditions in the action:** the action API verifies state (stock still available, order not already refunded) so a stale decision cannot complete",
          "**Timestamps in context:** every tool result includes as-of time so the agent and reviewers can see how old it is",
          "**Expire memory:** long-term memory entries carry dates and are re-verified before use",
        ],
        callout: {
          type: "takeaway",
          text: "Answers can tolerate some staleness if they disclose it. Actions cannot. Put the strictest freshness controls where agents change things.",
        },
      },
      {
        heading: "Monitoring freshness",
        body: [
          "Track data age at the point of use, not only pipeline success. Useful metrics: index lag (time from source change to searchable), share of retrieved chunks older than their freshness requirement, cache hit age, tool response age at action time and the number of actions blocked by precondition checks. Alert when any crosses its threshold. Record the age of the data behind each answer in [[/blogs/data-provenance-for-ai|answer provenance]] so stale-data incidents can be traced.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [
          "Making everything real-time is expensive and often unnecessary. The opposite mistake is one nightly job for all data, including facts agents act on. Other mistakes: measuring freshness from load time, caching tool results without TTLs, never deleting withdrawn documents from the index, and letting agents act on values read at the start of a long task.",
        ],
        cta: {
          title: "Keeping AI answers current?",
          description: "ZSpace Labs builds event-driven integrations, retrieval pipelines and agent tools with freshness checks built in. See [[/services/ai-automation|AI automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Data freshness is a requirement to define per fact, not a property to maximize. Decide how stale each type of data can be, measure age from source timestamps, use batch, events or live reads as appropriate, invalidate caches and indexes on change, and always re-verify before an agent acts. That combination stops most outdated answers without paying for real-time everything.",
        ],
      },
    ],
  },

  // ---------------------------------------- DATA PROVENANCE
  {
    slug: "data-provenance-for-ai",
    title: "Data Provenance for AI: How to Know Where an AI Answer Came From",
    seoTitle: "Data Provenance for AI: Where Did This Answer Come From?",
    excerpt:
      "How to record the sources, chunks, versions, tool outputs and transformations behind every AI answer, and how provenance differs from lineage and citations.",
    category: "AI & Automation",
    banner: "agentauditflow",
    sceneKind: "rag",
    date: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["fintech", "healthcare-healthtech", "legaltech", "b2b-enterprise"],
    relatedSlugs: ["ai-data-lineage", "ai-agent-audit-trail", "reduce-ai-agent-hallucinations"],
    faqs: [
      { q: "What is data provenance in AI?", a: "Data provenance for AI is the record of where an answer or action came from: which sources, document versions and chunks were retrieved, which tools returned what, which transformations were applied, which model and prompt version produced the output and when." },
      { q: "What is the difference between data lineage and data provenance?", a: "Lineage tracks how datasets flow and transform through pipelines over time. Provenance records the specific origin and history of a particular output, such as one AI answer. Lineage is the map of the roads; provenance is the route one answer took." },
      { q: "Are citations the same as provenance?", a: "No. Citations are the user-facing part: the sources shown next to an answer. Provenance is the full internal record, including retrieval scores, document versions, tool outputs, prompt and model versions, which may never be shown to users." },
      { q: "Why does AI answer provenance matter?", a: "It lets people verify answers, helps teams debug wrong outputs, supports audits and regulatory questions, makes it possible to find every answer affected by a bad document, and builds user trust." },
      { q: "How much provenance should we store?", a: "Store identifiers and versions rather than full copies where possible: document IDs, chunk IDs, content hashes, tool call IDs and timestamps. Keep full payloads only where audits require them, with retention and privacy rules." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**Data provenance for AI** answers one question: **where did this answer come from?** For every response or action, it records the source documents and their versions, the chunks that were retrieved, the tool calls and their outputs, the transformations applied, the timestamps, the prompt and model versions, and how the final claims map to that evidence.",
          "It is different from **data lineage**, which maps how datasets flow through pipelines, and from **answer citations**, which are the sources shown to the user. Citations are what the user sees; provenance is the complete record behind them.",
        ],
      },
      {
        heading: "Why provenance matters for AI answers",
        body: [
          "Language models produce fluent text whether or not it is supported. Provenance makes support checkable. It lets a user verify a claim, lets an engineer reproduce and debug a wrong answer, lets a compliance team show what an AI said and why, and lets you find every answer that relied on a document later found to be wrong. It is also the foundation for measuring grounding: you cannot test whether answers are supported by evidence if you did not record the evidence. See [[/blogs/reduce-ai-agent-hallucinations|how to reduce hallucinations in AI agents]].",
        ],
      },
      {
        heading: "Lineage vs provenance vs citations",
        body: [
          "The three are related and often confused. Data lineage works at the dataset and pipeline layer. Data provenance works at the individual output layer. Citations work at the user interface layer.",
        ],
        table: {
          headers: ["", "Data lineage", "Data provenance (AI answers)", "Answer citations"],
          rows: [
            ["Question", "Where does this dataset come from and what feeds it?", "Where did this specific answer come from?", "Which sources support this claim?"],
            ["Unit", "Datasets, tables, pipelines", "One answer or action", "One claim or sentence"],
            ["Audience", "Data engineers, governance", "Engineers, auditors, reviewers", "End users"],
            ["Contents", "Upstream and downstream graph, transformations", "Sources, versions, chunks, tool outputs, model and prompt versions, timestamps", "Titles, links, quoted passages"],
            ["Typical tooling", "Lineage tools, catalogs", "Tracing and audit stores", "UI components, model citation features"],
          ],
        },
        callout: {
          type: "note",
          text: "Provenance links to lineage: a provenance record says 'chunk 14 of policy v7', and lineage explains how policy v7 reached the index. Our guide to AI data lineage covers the pipeline side.",
        },
      },
      {
        heading: "What a provenance record contains",
        body: [
          "The W3C PROV model describes provenance in terms of **entities** (things, such as documents and answers), **activities** (things that happen, such as retrieval and generation) and **agents** (who or what is responsible) ([[https://www.w3.org/TR/prov-dm/|W3C PROV-DM]]). That maps well onto AI systems. A practical record for one answer includes:",
        ],
        table: {
          headers: ["Element", "What to record"],
          rows: [
            ["Request", "Request ID, user or agent identity, time, the question"],
            ["Source documents", "Document ID, version, effective date, owner, access level"],
            ["Retrieved chunks", "Chunk IDs, content hash, retrieval scores, rank, filters applied"],
            ["Transformations", "Parsing, chunking and summarization versions; any reranking"],
            ["Tool outputs", "Tool name, inputs, output (or hash), as-of timestamp, system of record"],
            ["Business definitions", "Metric or rule versions used (for example from a semantic layer)"],
            ["Generation", "Model and version, prompt template version, parameters"],
            ["Evidence mapping", "Which claims in the answer are supported by which chunks or tool outputs"],
            ["Outcome", "Answer shown, citations shown, user feedback, any action taken"],
          ],
        },
      },
      {
        heading: "The provenance chain",
        body: [
          "Provenance is a chain from the source system to the sentence on screen. Each link should carry an ID that lets you walk back to the previous one.",
        ],
        code: {
          label: "Provenance chain for one AI answer (diagram)",
          text: `Source system         policy.docx  v7  (owner: legal, 3 Mar)
     │ ingest job #812, parser v2
     ▼
Chunks                chunk 14, 15  (hash a91f…, b07c…)
     │ retrieval run r-55: hybrid search + rerank
     ▼
Tool calls            get_order(4471) → status=delayed @ 10:42
     │
     ▼
Generation            model X, prompt support-v12
     │
     ▼
Answer                "You can claim a delay credit of…"
     │ claim → evidence map
     ├─ claim 1 ← chunk 14
     └─ claim 2 ← get_order(4471)
     ▼
Shown to user         2 citations · request req-9c21`,
        },
      },
      {
        heading: "Citations and evidence in practice",
        body: [
          "Several model platforms now return citation data natively. Anthropic's Claude API, for example, can return citations that point to the exact passages of supplied documents used in an answer ([[https://platform.claude.com/docs/en/build-with-claude/citations|Claude citations documentation]]); other providers' file search and grounding features return source annotations. Use these to build the claim-to-evidence map, but store your own IDs alongside them, because the model's citation refers to what it was given, and only your system knows which document version and retrieval run that was.",
          "For tool-based answers, the evidence is the tool output. Return structured results with IDs and timestamps from tools, and record them. 'Your order shipped yesterday' should map to a specific get_order call and its as-of time.",
        ],
      },
      {
        heading: "A practical provenance architecture",
        body: [
          "You do not need a special platform to start. Most of the data already exists in your application; the work is to give everything stable IDs and write one record per request.",
        ],
        checklist: [
          "Give every document version, chunk and tool call a stable ID",
          "Carry source metadata (version, date, owner, access level) into the index",
          "Have tools return IDs and as-of timestamps with every result",
          "Log retrieval runs with filters, scores and ranks",
          "Version prompts and record model identifiers per call",
          "Write one provenance record per answer to an append-only store, keyed by request ID",
          "Link it to your tracing system so engineers can jump from a trace to its evidence",
          "Store hashes or IDs rather than full payloads unless audits require more",
          "Apply the same access controls to provenance as to the sources it references",
        ],
      },
      {
        heading: "Provenance for agents",
        body: [
          "When agents act, provenance extends to the action: which evidence led to the decision, which policy allowed it, who approved it and what changed. That record overlaps with the audit trail; keep them linked by request and trace IDs rather than duplicated. See [[/blogs/ai-agent-audit-trail|how to build an audit trail for AI agent actions]].",
        ],
      },
      {
        heading: "Uses beyond debugging",
        body: [
          "Provenance pays for itself in several ways. **Impact analysis:** when a document is found to be wrong, query which answers used it and notify affected users. **Evaluation:** check whether claims are supported by retrieved evidence. **Freshness checks:** see how old the data behind an answer was (see [[/blogs/data-freshness-for-ai|data freshness for AI]]). **Content governance:** find documents that are retrieved often but rated poorly, and fix them. Our guide to building an [[/blogs/ai-knowledge-base|AI knowledge base]] covers the feedback loop.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [
          "Showing citations but not storing which document version they referred to makes them unverifiable later. Logging prompts and responses without retrieval details loses the most important part. Storing full copies of sensitive content in logs creates a new data protection problem. And treating provenance as an add-on after launch means the IDs needed to build it were never created.",
        ],
        cta: {
          title: "Need traceable AI answers?",
          description: "ZSpace Labs builds retrieval, tool and logging layers that record the evidence behind every AI answer and action. See [[/services/ai-automation|AI automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Provenance turns 'the AI said so' into 'the AI said so because of these sources, at these versions, retrieved this way, at this time'. Distinguish it from lineage and citations, record it per answer with stable IDs, map claims to evidence and keep it linked to your traces and audit logs. It is the basis for trust, debugging, audits and continuous improvement of AI answers.",
        ],
      },
    ],
  },

  // ---------------------------------------- TEXT-TO-SQL
  {
    slug: "text-to-sql-for-business-data",
    title: "Text-to-SQL for Business Data: Why Accuracy Depends on Context, Not Just the Model",
    seoTitle: "Text-to-SQL for Business Data: Accuracy Needs Context",
    excerpt:
      "Why natural-language-to-SQL fails on real business data, and how schema curation, semantic layers, permissions and validation make it dependable.",
    category: "AI & Automation",
    banner: "toolselectflow",
    sceneKind: "analytics",
    date: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["b2b-enterprise", "saas-technology", "ecommerce"],
    relatedSlugs: ["semantic-layer-for-ai", "business-context-layer-for-ai", "ai-agent-access-control"],
    faqs: [
      { q: "What is text-to-SQL?", a: "Text-to-SQL is the use of a language model to turn a natural-language question, such as 'What was revenue by region last quarter?', into a SQL query that runs against a database, so non-technical users can ask questions of data." },
      { q: "Why does text-to-SQL give wrong answers?", a: "Most errors come from missing context rather than SQL syntax: ambiguous business terms, unknown exclusions, wrong joins, wrong time conventions and too many similar tables. The query runs and returns a plausible but wrong number." },
      { q: "Is text-to-SQL accurate enough for business use?", a: "On public benchmarks with real-world databases, leading systems still score below human experts. In business use, accuracy depends heavily on how much context and structure you provide; governed semantic layers and curated views make it far more dependable than raw schemas." },
      { q: "Should AI generate SQL or use a semantic layer?", a: "For governed business metrics, have the AI select metrics and dimensions from a semantic layer, which generates the SQL. Free-form SQL generation is better reserved for exploratory analysis by people who can check the query." },
      { q: "Is it safe to let AI query production databases?", a: "Only with controls: read-only credentials, a replica or warehouse rather than the transactional database, row- and column-level security tied to the user, query validation, cost and row limits, and logging." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**Text-to-SQL** lets people ask questions of business data in plain language while a language model writes the SQL. Modern models write syntactically valid SQL well. The hard part is **business meaning**: which table is authoritative, what counts as revenue, how quarters are defined, which records to exclude and what this user is allowed to see.",
          "Accuracy therefore depends more on context than on the model. Curate the schema the model sees, describe tables and columns in business language, route governed metrics through a [[/blogs/semantic-layer-for-ai|semantic layer]], enforce permissions in the database layer, validate queries before running them and show users the definitions used.",
        ],
      },
      {
        heading: "Why text-to-SQL is harder on real business data",
        body: [
          "Demos use clean schemas with obvious names. Enterprise warehouses have hundreds of tables, legacy naming, several versions of the same entity, soft-deleted rows, test orders and business rules that exist only in report code. Research benchmarks reflect this: BIRD, which uses large real-world databases with dirty values and external knowledge, still shows a clear gap between the best automated systems and human experts ([[https://bird-bench.github.io/|BIRD benchmark]]).",
          "The failure mode is not a crash. It is a confident, plausible, wrong number. That is why text-to-SQL needs more than a capable model.",
        ],
      },
      {
        heading: "Where text-to-SQL goes wrong",
        body: [],
        table: {
          headers: ["Error type", "Example", "Fix"],
          rows: [
            ["Ambiguous term", "'Customers' = all accounts, or paying accounts?", "Governed definitions and synonyms; ask when unclear"],
            ["Wrong table", "Uses orders_v1 instead of fct_orders", "Expose only curated tables or views"],
            ["Missing exclusions", "Includes test orders and cancelled orders", "Encode exclusions in views or metrics"],
            ["Wrong join", "Joins on email instead of customer ID; duplicates rows", "Document join keys; use semantic models"],
            ["Time conventions", "Calendar quarter instead of fiscal quarter", "Time dimension with fiscal calendar"],
            ["Units and currency", "Sums mixed currencies", "Reporting currency columns; documented units"],
            ["Permissions", "Returns rows the user should not see", "Row- and column-level security in the database"],
            ["Silent fan-out", "Aggregates after a one-to-many join", "Validation for row-count anomalies; semantic layer"],
          ],
        },
      },
      {
        heading: "Three architectures, from least to most governed",
        body: [
          "**1. Raw schema.** The model sees table definitions and writes SQL. Fast to prototype, risky for business answers. **2. Curated views with descriptions.** The model sees a small set of documented views built for questions, with business descriptions, sample values and example queries. Much more reliable for exploration. **3. Semantic layer.** The model selects metrics, dimensions and filters; the layer generates governed SQL. Most reliable for recurring business metrics, limited to what has been modelled.",
          "Many teams combine 2 and 3: governed metrics through the semantic layer, exploratory questions through curated views, with the assistant telling users which mode it used.",
        ],
        table: {
          headers: ["", "Raw schema", "Curated views", "Semantic layer"],
          rows: [
            ["Setup effort", "Low", "Medium", "Higher"],
            ["Consistency with official numbers", "Low", "Medium", "High"],
            ["Flexibility", "High", "Medium", "Limited to modelled metrics"],
            ["Best for", "Prototypes, analysts", "Exploration by business users", "KPIs, reporting, agents"],
          ],
        },
      },
      {
        heading: "Context that improves accuracy",
        body: [
          "Whatever the architecture, the model needs the right context for each question, not the whole schema. Useful context includes table and column descriptions in business language, relationships and join keys, sample and allowed values for categorical columns, business definitions and synonyms, the fiscal calendar, verified example questions with their correct SQL, and the user's permissions. Retrieve the relevant subset per question. Warehouse vendors' natural-language features are built on this idea; Snowflake's semantic views, for example, can hold verified queries and custom instructions alongside metrics and dimensions.",
          "This is the same principle as a [[/blogs/business-context-layer-for-ai|business context layer]]: meaning must be supplied, not inferred.",
        ],
        code: {
          label: "Dependable text-to-SQL flow (diagram)",
          text: `Question + user identity
   │
   ▼
Classify: governed metric?  ──yes──▶ semantic layer request
   │ no                                (metric, dims, filters)
   ▼
Retrieve context: relevant views, descriptions,
values, definitions, verified examples
   │
   ▼
Model drafts SQL (structured output)
   │
   ▼
Validate: parse · allowed tables only · read-only ·
row/cost limits · dry run / EXPLAIN
   │ ✓                      ✗ → repair or ask user
   ▼
Run as the user (row/column security applies)
   │
   ▼
Answer + SQL + definitions used + data as-of time`,
        },
      },
      {
        heading: "Security and permissions",
        body: [
          "Never rely on the prompt to enforce access. Run queries with credentials tied to the requesting user, or apply row- and column-level security in the warehouse so the same query returns only what that user may see. Use read-only roles on a replica or warehouse, never the transactional database. Allowlist schemas, block data-modifying statements at the parser and the role, cap rows and execution time, and log every query. Treat question text as untrusted input, since a crafted question can try to steer the generated SQL; see [[/blogs/prompt-injection-prevention|prompt injection prevention]] and [[/blogs/ai-agent-access-control|AI agent access control]].",
        ],
      },
      {
        heading: "Validation before and after the query",
        body: [
          "Before running: parse the SQL, check that it only references allowed objects, require a time filter on large tables and run a cost estimate. After running: check for empty results, suspicious row counts after joins and values outside expected ranges. When a check fails, let the model repair the query once, then ask the user to clarify rather than looping. Generating SQL into a [[/blogs/llm-structured-outputs|structured output]] (query plus the metrics, tables and assumptions used) makes these checks easier.",
        ],
      },
      {
        heading: "Show your working",
        body: [
          "Users trust numbers they can check. Show the definition used ('net revenue: excludes tax, shipping and refunds; fiscal quarters'), the time range, the filters and the data as-of time, with the SQL available for analysts. When the assistant is unsure which definition is meant, it should ask. Recording this is also your [[/blogs/data-provenance-for-ai|answer provenance]].",
        ],
      },
      {
        heading: "How to evaluate text-to-SQL for your business",
        body: [],
        checklist: [
          "Collect 50 to 200 real questions from the people who will use it",
          "Have analysts write and verify the correct answer for each",
          "Compare results (execution accuracy), not just SQL text",
          "Include ambiguous questions; the right behaviour may be to ask",
          "Include permission tests: questions users should not be able to answer",
          "Re-run the set on every change to models, prompts, views or definitions",
          "Track accuracy by question type to see where curation is needed",
        ],
      },
      {
        heading: "Common mistakes",
        body: [
          "The biggest mistake is giving the model the full schema and judging success by whether queries run. Others: letting the assistant answer KPI questions with different logic from official reports, enforcing permissions in the prompt, skipping evaluation with verified answers and hiding the SQL and definitions from users.",
        ],
        cta: {
          title: "Building natural-language access to business data?",
          description: "ZSpace Labs builds AI analytics assistants on governed data, with permissions, validation and evaluation. See [[/services/ai-automation|AI automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Text-to-SQL is no longer limited by SQL syntax. It is limited by business context. Curate what the model sees, route governed metrics through a semantic layer, enforce access in the database, validate before and after running, evaluate against verified answers and show users how each number was produced. Do that, and natural-language access to data becomes something people can rely on.",
        ],
      },
    ],
  },
];
