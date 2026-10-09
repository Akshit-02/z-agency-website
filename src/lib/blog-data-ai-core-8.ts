import type { BlogPost } from "./blog-data";

/**
 * AI knowledge hub, part eight: knowledge products, GraphRAG and MCP.
 * MCP statements follow the 2026-07-28 specification and its changelog
 * (stateless core without the initialize handshake, server/discover,
 * Streamable HTTP and stdio transports, Roots/Sampling/Logging deprecated,
 * Client ID Metadata Documents preferred over Dynamic Client Registration)
 * and the official "Build an MCP server" tutorial (TypeScript package
 * @modelcontextprotocol/server; Python MCPServer from mcp.server). MCP has
 * been governed by the Agentic AI Foundation under the Linux Foundation
 * since December 2025. GraphRAG terms follow Microsoft's GraphRAG docs.
 * Merged into `posts` in blog-data.ts.
 */

export const aiCorePosts8: BlogPost[] = [
  // ---------------------------------------- 589 · AI KNOWLEDGE BASE
  {
    slug: "ai-knowledge-base",
    title: "AI Knowledge Base: How to Build an AI Assistant That Uses Company Documents",
    seoTitle: "AI Knowledge Base: Build an Assistant on Company Documents",
    excerpt:
      "How to build an AI knowledge base assistant: choosing sources, ingestion, permissions, retrieval, cited answers, refusals, feedback loops, content ownership, rollout and measurement.",
    category: "AI & Automation",
    banner: "kbassistant",
    bannerAlt:
      "AI knowledge base in four columns: sources (policies, manuals, tickets, wikis), pipeline (sync, parse and chunk, permissions, index), assistant (answers, citations, refusals, hand-off) and feedback highlighted (thumbs and notes, gap reports, owner fixes, re-test).",
    date: "2026-10-02",
    updated: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation", "ui-ux-design"],
    relatedIndustrySlugs: ["professional-services", "saas-technology", "b2b-enterprise"],
    relatedSlugs: ["enterprise-rag-architecture", "retrieval-augmented-generation", "ai-customer-support-automation"],
    faqs: [
      { q: "What is an AI knowledge base?", a: "An assistant that answers questions from a company's own documents and records, using retrieval to find relevant content and a language model to compose answers with citations, while respecting who may see what." },
      { q: "Is an AI knowledge base the same as a help centre?", a: "No. A help centre is a set of articles; an AI knowledge base answers questions by retrieving from those articles and other sources, and can serve employees, customers or both." },
      { q: "Which sources should be included first?", a: "Authoritative, maintained sources that answer frequent questions: policies, product documentation, process guides and resolved support tickets. Exclude drafts, duplicates and outdated material." },
      { q: "How do you stop the assistant making things up?", a: "Ground answers in retrieved sources, require citations, instruct it to say when sources do not contain the answer, evaluate faithfulness and give users a way to report wrong answers." },
      { q: "How are permissions handled?", a: "Sync access controls from source systems and filter retrieval by the user's identity, so the assistant never answers from content the user cannot open." },
      { q: "Who maintains an AI knowledge base?", a: "Content owners for each area, supported by reports of unanswered and poorly rated questions. The assistant's quality depends on the documents behind it." },
      { q: "Can it be used for customer-facing support?", a: "Yes, with public content only, strong refusal behaviour, clear hand-off to people and testing for sensitive topics." },
      { q: "How do you measure success?", a: "Answer rate, citation accuracy, user ratings, escalations, time saved for staff, ticket deflection for customer use and the number of content gaps fixed." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An AI knowledge base is a retrieval-augmented assistant over your company's content. Choose authoritative sources, sync them with their permissions, parse and index them for hybrid retrieval, and have the assistant answer only from retrieved sources with citations, saying clearly when it cannot find an answer and handing off to people. The part most teams underestimate is the feedback loop: owners must see unanswered and poorly rated questions and fix the underlying content, or quality decays.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Technical foundations are in [[/blogs/retrieval-augmented-generation|the RAG guide]] and organizational architecture in [[/blogs/enterprise-rag-architecture|enterprise RAG architecture]]. Customer-facing use overlaps with [[/blogs/ai-customer-support-automation|AI customer support automation]].",
        ],
      },
      {
        heading: "Internal vs Customer-Facing Knowledge Assistants",
        body: [],
        table: {
          headers: ["", "Internal assistant", "Customer-facing assistant"],
          rows: [
            ["Sources", "Policies, processes, tickets, wikis", "Public docs and help content only"],
            ["Permissions", "Per user and group", "Public, or per customer account"],
            ["Tone and risk", "Practical, can link internal tools", "Brand voice, careful on commitments"],
            ["Escalation", "To a team channel or owner", "To support agents with context"],
            ["Measure", "Time saved, adoption", "Resolution, deflection, satisfaction"],
          ],
        },
      },
      {
        heading: "Choosing and Preparing Sources",
        body: [
          "Quality in, quality out. Start with sources that are authoritative and maintained. Remove or label outdated versions, resolve conflicting documents and assign an owner to each content area. Resolved support tickets can be valuable but need cleaning, because they contain one-off answers and personal data. See [[/blogs/rag-chunking-strategies|chunking strategies]] for preparing documents.",
        ],
      },
      {
        heading: "Answers, Citations and Refusals",
        body: [
          "Every answer should cite the passages it used, linking to the source document and section, so users can verify. When retrieval finds nothing relevant, the assistant should say so and suggest where to go next, not guess. For policy questions, quote the policy text rather than paraphrasing loosely. Show the document's date when freshness matters.",
          "Citations are the visible part of a fuller record; [[/blogs/data-provenance-for-ai|data provenance for AI]] covers what to store behind each answer.",
        ],
        diagram: {
          variant: "kbflow",
          alt: "Knowledge assistant flow: question, check access (highlighted), retrieve, answer with citations, feedback, fix content; bad answers usually point to missing or stale documents.",
          caption: "The loop back to content owners is what keeps the assistant accurate over time.",
        },
      },
      {
        heading: "The Feedback Loop",
        body: [],
        checklist: [
          "Thumbs up and down with an optional comment on every answer",
          "Reports of questions with no good sources, grouped by topic",
          "Owner dashboards per content area",
          "A simple process to fix or add documents and re-index",
          "Regression tests on questions that were fixed",
        ],
        cta: {
          title: "Want an assistant your team can actually rely on?",
          description: "ZSpace Labs builds knowledge assistants with permission-aware retrieval, citations and the feedback tools content owners need.",
        },
      },
      {
        heading: "Interface and Experience",
        body: [
          "Put the assistant where people already work: the intranet, the help desk tool, chat platforms or your product. Show sources clearly, allow follow-up questions, let users open the source document in one click and make escalation obvious. For internal use, sign-in should be single sign-on so permissions apply automatically.",
        ],
      },
      {
        heading: "Security and Privacy",
        body: [
          "Enforce source permissions at retrieval, exclude highly sensitive repositories unless there is a clear need, log queries and sources for audit, and check where model providers process data. Retrieved documents may contain text that tries to manipulate the model, so a knowledge assistant should not hold powerful tools; see [[/blogs/prompt-injection-prevention|prompt injection prevention]].",
          "Redaction, retention and provider terms for personal data are covered in [[/blogs/ai-data-privacy|AI data privacy]].",
        ],
      },
      {
        heading: "Measuring Success",
        body: [],
        table: {
          headers: ["Metric", "What it shows"],
          rows: [
            ["Answer rate", "Share of questions answered with sources"],
            ["Rating and correction rate", "Perceived and actual quality"],
            ["Citation accuracy (sampled)", "Whether sources support answers"],
            ["Escalations", "Where people still need help"],
            ["Gaps fixed per month", "Health of the feedback loop"],
            ["Time saved or tickets deflected", "Business value"],
          ],
        },
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "A knowledge assistant makes scattered information usable, shortens onboarding and reduces repeated questions to experts. Its limits are the content itself: missing, conflicting or outdated documents produce weak answers no matter how good the model is. It also needs ongoing ownership, which is an organizational commitment rather than a one-off project.",
        ],
      },
      {
        heading: "How to Build It Step by Step",
        body: [],
        checklist: [
          "**1. Pick a domain and audience** (for example HR policies for employees)",
          "**2. Collect real questions** and expected answers",
          "**3. Select and clean sources**, assigning owners",
          "**4. Build the RAG pipeline** with permissions and hybrid retrieval",
          "**5. Design answers with citations and refusals**",
          "**6. Evaluate** on the question set",
          "**7. Launch to a pilot group** with feedback",
          "**8. Expand domains** once the loop is working",
        ],
      },
      {
        heading: "Tools and Platform Options",
        body: [],
        table: {
          headers: ["Option", "Fits", "Trade-offs"],
          rows: [
            ["AI features in your workplace suite or wiki", "Content already in one platform", "Limited cross-source coverage and tuning"],
            ["Help desk AI for customer answers", "Support content in a help desk", "Tied to that platform's content"],
            ["Enterprise search and RAG platforms", "Many sources, internal use", "Licence cost, connector coverage"],
            ["Custom RAG application", "Specific sources, UX or integration needs", "Build and maintenance effort"],
          ],
        },
      },
      {
        heading: "A Content Governance Model",
        body: [
          "Treat the knowledge base as a product with editors. Assign an owner per content area, set review dates on documents, mark one source as authoritative when documents overlap, archive superseded versions so they leave the index, and use the assistant's gap reports in regular content reviews. Track content freshness as a metric alongside answer quality. Without this, even a well-engineered assistant degrades as documents drift out of date.",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a healthcare software vendor's support team spends hours finding configuration answers spread across release notes and old tickets. An internal assistant indexes current documentation and curated resolved tickets, cites sources and flags unanswered questions to product owners weekly. New support staff reach confidence faster, and documentation gaps become visible for the first time.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Indexing everything, including outdated drafts",
          "No citations, so users cannot verify",
          "Guessing instead of refusing",
          "No owners for content areas",
          "Ignoring permissions",
        ],
        cta: {
          title: "Planning a knowledge assistant for employees or customers?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|AI knowledge base development]] and [[/services/ui-ux-design|assistant interface design]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "An AI knowledge base is a content program with an AI interface. Get sources, permissions, citations and ownership right, and the assistant improves over time. Related: [[/blogs/enterprise-rag-architecture|enterprise RAG]], [[/blogs/retrieval-augmented-generation|RAG guide]] and [[/blogs/ai-customer-support-automation|AI customer support automation]]. For bilingual Arabic and English knowledge bases and UAE data rules, see [[/blogs/ai-knowledge-base-uae|how to build an AI knowledge base for a UAE business]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 590 · GRAPHRAG EXPLAINED
  {
    slug: "graphrag-explained",
    title: "GraphRAG Explained: How Knowledge Graphs Improve AI Retrieval",
    seoTitle: "GraphRAG Explained: Knowledge Graphs, Communities and Use Cases",
    excerpt:
      "What GraphRAG is and when it helps: entity and relationship extraction, knowledge graph construction, community summaries, local and global search, costs, limitations and when standard RAG is enough.",
    category: "AI & Automation",
    banner: "graphragflow",
    bannerAlt:
      "GraphRAG flow: documents, extract entities, build graph (highlighted), detect communities, summarize, query locally or globally.",
    date: "2026-10-02",
    updated: "2026-10-08",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["professional-services", "pharmaceuticals", "b2b-enterprise"],
    relatedSlugs: ["retrieval-augmented-generation", "enterprise-rag-architecture", "hybrid-search-for-rag"],
    faqs: [
      { q: "What is GraphRAG?", a: "An approach to retrieval-augmented generation that builds a knowledge graph of entities and relationships from documents, often with summaries of related groups of entities, and uses that structure to retrieve information for a language model." },
      { q: "How is GraphRAG different from standard RAG?", a: "Standard RAG retrieves text chunks similar to the question. GraphRAG also uses explicit entities and relationships, which helps with questions about connections across documents and themes across a whole corpus." },
      { q: "When is GraphRAG useful?", a: "For questions that require connecting information across many documents, such as 'what are the main risks across these reports?' or 'how are these suppliers connected to these incidents?', and for exploring relationships." },
      { q: "Is GraphRAG necessary for most RAG applications?", a: "No. Most question-answering over documentation works well with good chunking, hybrid search and reranking. GraphRAG adds cost and complexity that should be justified by evaluation." },
      { q: "What are community summaries?", a: "In Microsoft's GraphRAG, the graph is partitioned into communities of closely related entities, and a language model writes a summary of each, which supports broad, corpus-wide questions." },
      { q: "What are local and global search in GraphRAG?", a: "Local search answers questions about specific entities using their neighbourhood in the graph and related text. Global search answers broad questions using community summaries across the dataset." },
      { q: "How expensive is GraphRAG?", a: "Building the graph typically uses a language model to extract entities and relationships and to write summaries across the corpus, which can be costly for large or frequently changing data. Variants such as LazyGraphRAG defer more work to query time." },
      { q: "Do I need a graph database?", a: "Not necessarily. Some implementations store graphs in files or relational tables; graph databases help when you need complex graph queries, large graphs or interactive exploration." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "GraphRAG builds a knowledge graph from your documents (entities such as people, organizations, products and events, and the relationships between them) and uses it for retrieval. Microsoft's GraphRAG also groups related entities into communities and writes summaries of each, enabling 'global' answers about themes across a whole corpus as well as 'local' answers about specific entities. It helps with relationship and corpus-wide questions, but indexing is expensive and harder to keep fresh, so most document Q&A should start with well-tuned standard RAG.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Standard retrieval techniques are covered in [[/blogs/retrieval-augmented-generation|the RAG guide]], [[/blogs/hybrid-search-for-rag|hybrid search]] and [[/blogs/rag-reranking|reranking]]. Organizational concerns such as permissions apply equally to graphs; see [[/blogs/enterprise-rag-architecture|enterprise RAG architecture]].",
        ],
      },
      {
        heading: "What Problem Does GraphRAG Solve?",
        body: [
          "Chunk-based retrieval answers 'what does the travel policy say about hotels?' well, because the answer lives in a few passages. It struggles with 'what themes come up across 400 customer interviews?' or 'which suppliers are linked to quality incidents at more than one plant?', because the answer is spread across many documents and depends on relationships. GraphRAG makes those relationships explicit and pre-summarizes groups of related information.",
        ],
      },
      {
        heading: "How GraphRAG Works",
        body: [],
        table: {
          headers: ["Stage", "What happens"],
          rows: [
            ["Extraction", "A language model or NLP pipeline identifies entities, relationships and claims in each text unit"],
            ["Graph construction", "Entities become nodes and relationships edges, merged across documents"],
            ["Community detection", "Clustering finds groups of closely connected entities"],
            ["Summarization", "A model writes reports for each community, often at several levels"],
            ["Query", "Local search uses entity neighbourhoods; global search uses community reports; hybrid modes combine them"],
          ],
        },
        diagram: {
          variant: "graphragcompare",
          alt: "Comparison of vector RAG (highlighted) and GraphRAG by best questions, indexing cost, freshness, explainability and where to start; the note says GraphRAG answers corpus-wide questions vector RAG struggles with.",
          caption: "Start with vector or hybrid RAG; add a graph when evaluation shows relationship questions failing.",
        },
      },
      {
        heading: "Local, Global and Combined Search",
        body: [
          "Microsoft's GraphRAG describes local search for questions about specific entities (it gathers an entity's neighbours, relationships and source text) and global search for broad questions (it uses community reports across the dataset). Microsoft Research has also described DRIFT search, which combines the two, and LazyGraphRAG, which defers summarization to query time to cut indexing cost. These are evolving research-led tools, so test them on your own corpus.",
        ],
        cta: {
          title: "Have questions that span hundreds of documents?",
          description: "ZSpace Labs can test whether a knowledge graph improves answers on your data before you invest in building one.",
        },
      },
      {
        heading: "Costs and Freshness",
        body: [
          "Building a graph with LLM extraction processes the whole corpus, often several times (extraction, merging, summaries), so indexing costs far exceed embedding a corpus. When documents change, the affected parts of the graph and summaries must be updated. For fast-changing content, this can be a deciding factor against GraphRAG or in favour of lazier variants.",
        ],
      },
      {
        heading: "When GraphRAG Is a Good Fit",
        body: [],
        checklist: [
          "Research, investigation and due-diligence corpora with many interlinked entities",
          "Questions about themes, patterns and connections rather than single facts",
          "Relatively stable document collections",
          "Value in exploring the graph visually, not just answering questions",
          "Domains with clear entity types (companies, compounds, components, cases)",
        ],
      },
      {
        heading: "When to Stay With Standard RAG",
        body: [
          "Stay with chunk-based retrieval when questions are mostly factual lookups, content changes daily, budgets are tight, or evaluation shows standard RAG already performs well. Improving parsing, chunking, hybrid search and reranking is cheaper and often closes most gaps.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [],
        table: {
          headers: ["Advantages", "Limitations"],
          rows: [
            ["Answers corpus-wide and relationship questions", "Expensive indexing with LLM extraction"],
            ["Explicit entities aid explanation and exploration", "Extraction errors propagate into the graph"],
            ["Community summaries support global questions", "Harder to keep fresh as documents change"],
            ["Can combine with vector retrieval", "More components to build, evaluate and secure"],
          ],
        },
      },
      {
        heading: "How to Evaluate Whether You Need GraphRAG",
        body: [],
        checklist: [
          "**1. Collect questions** and label them as factual, relational or thematic",
          "**2. Build a strong standard RAG baseline** with hybrid search and reranking",
          "**3. Measure where it fails**",
          "**4. Prototype GraphRAG on a subset** of the corpus",
          "**5. Compare answer quality, cost and update effort**",
          "**6. Adopt it only for the question types** where it clearly helps",
        ],
      },
      {
        heading: "Building a Graph: Practical Choices",
        body: [],
        checklist: [
          "**Entity types:** define the types that matter (organizations, products, components, sites, incidents) rather than extracting everything",
          "**Relationship types:** supplies, located at, caused, mentions; constrain them to keep the graph usable",
          "**Entity resolution:** merge variants of the same entity ('ACME Ltd', 'Acme Limited') with rules and review",
          "**Provenance:** link every node and edge to source text for citations",
          "**Storage:** files and tables for batch analysis, a graph database such as Neo4j for interactive queries",
          "**Tooling:** Microsoft's open-source GraphRAG library implements extraction, communities and search modes; graph databases and frameworks offer their own GraphRAG integrations",
        ],
      },
      {
        heading: "Combining Graph and Vector Retrieval",
        body: [
          "In practice, graphs and vectors work together. A query can use vector search to find relevant entities or passages, then expand through graph relationships to related entities and their sources, or use community summaries for broad questions and chunk retrieval for specifics. A router or agent can choose the mode per question. Evaluate each combination against your standard RAG baseline, as described in [[/blogs/retrieval-augmented-generation|the RAG guide]].",
          "For a broader comparison of the two stores, including when vector search alone is enough, see [[/blogs/knowledge-graph-vs-vector-database|knowledge graph vs vector database]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a manufacturer's quality team asks which component suppliers appear in incidents across several plants. Standard RAG returns individual incident reports but cannot summarize connections. A graph built from incident reports links suppliers, components, plants and failure modes; global queries over community summaries surface recurring patterns, while day-to-day policy questions continue to use standard RAG.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Adopting GraphRAG before a strong standard baseline exists",
          "Underestimating indexing cost and refresh effort",
          "Not checking extraction quality",
          "Ignoring permissions in graph data",
          "Using graphs for simple factual Q&A",
        ],
        cta: {
          title: "Exploring knowledge graphs for AI retrieval?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|GraphRAG and advanced RAG development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "GraphRAG is a powerful option for relationship and thematic questions, not a default. Build a strong standard RAG baseline first and add a graph where evaluation shows it pays. Related: [[/blogs/retrieval-augmented-generation|RAG guide]] and [[/blogs/enterprise-rag-architecture|enterprise RAG architecture]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 591 · MODEL CONTEXT PROTOCOL
  {
    slug: "model-context-protocol",
    title: "Model Context Protocol (MCP): A Complete Guide for Developers and Businesses",
    seoTitle: "Model Context Protocol (MCP): Architecture, Spec and Use Cases",
    excerpt:
      "What the Model Context Protocol is and how it works in 2026: hosts, clients and servers, tools, resources and prompts, transports, the stateless 2026-07-28 specification, authorization and practical use cases.",
    category: "AI & Automation",
    banner: "mcparch",
    bannerAlt:
      "Model Context Protocol architecture in four columns: host (AI app or IDE, user consent, model access, many clients), client (one per server, protocol, capabilities, auth), server highlighted (your system, stdio or HTTP, validation, scoped access) and capabilities (tools, resources, prompts, extensions).",
    date: "2026-10-02",
    updated: "2026-10-08",
    readingTime: "9 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise"],
    relatedSlugs: ["how-to-build-an-mcp-server", "mcp-vs-api", "mcp-security"],
    faqs: [
      { q: "What is the Model Context Protocol?", a: "An open protocol that standardizes how AI applications connect to external tools, data and prompts. An MCP server exposes capabilities once, and any MCP-compatible AI application can discover and use them." },
      { q: "Who maintains MCP?", a: "MCP was introduced by Anthropic in November 2024 and was contributed to the Agentic AI Foundation, a directed fund under the Linux Foundation, in December 2025. The specification is developed openly with versioned releases." },
      { q: "What is the current MCP specification version?", a: "As of October 2026, the latest revision is dated 2026-07-28. It made the protocol stateless, removing the initialize handshake and protocol-level sessions, and added server/discover. Check modelcontextprotocol.io for newer revisions." },
      { q: "What are MCP hosts, clients and servers?", a: "The host is the AI application the user interacts with. Inside it, an MCP client connects to each MCP server. Servers expose tools, resources and prompts from a system such as a database, SaaS product or file store." },
      { q: "What are MCP tools, resources and prompts?", a: "Tools are functions the model can call to take actions or fetch data. Resources are data the application can read, identified by URIs. Prompts are reusable templates users can invoke." },
      { q: "Which transports does MCP use?", a: "stdio for local servers launched by the host, and Streamable HTTP for remote servers. The older HTTP+SSE transport is deprecated." },
      { q: "How does MCP handle authorization?", a: "For remote HTTP servers, MCP uses OAuth 2.1-based authorization: servers publish protected resource metadata, clients obtain audience-bound tokens with PKCE, and servers must validate that tokens were issued for them and must not pass them through to other APIs." },
      { q: "Does MCP replace APIs?", a: "No. MCP servers usually wrap existing APIs to make them usable by AI applications. Your APIs remain the source of business logic and permissions." },
      { q: "Which applications support MCP?", a: "Many AI assistants, IDEs, agent frameworks and model platforms support MCP clients, and many software vendors publish MCP servers. Support for specific features varies, so check each client's documentation." },
      { q: "Is MCP secure?", a: "The protocol defines authorization and security requirements, but safety depends on implementation: trusted servers only, least-privilege tools, user consent, audience-bound tokens, input validation and protection against prompt injection through tool results." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "The Model Context Protocol (MCP) is an open standard for connecting AI applications to tools and data. An MCP server exposes tools (functions the model can call), resources (readable data) and prompts (templates) from a system such as a CRM or database. AI applications (hosts) connect through MCP clients over stdio for local servers or Streamable HTTP for remote ones, discover what a server offers and call it. The 2026-07-28 specification made MCP stateless, and remote servers use OAuth 2.1-based authorization. MCP complements APIs rather than replacing them.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Building a server is covered in [[/blogs/how-to-build-an-mcp-server|how to build an MCP server]], positioning against APIs in [[/blogs/mcp-vs-api|MCP vs API]] and security in [[/blogs/mcp-security|MCP security]]. For agents talking to other agents, see [[/blogs/agent-to-agent-communication|agent-to-agent communication]]. Agent design generally is in [[/blogs/ai-agent-development|AI agent development]].",
        ],
      },
      {
        heading: "Why MCP Exists",
        body: [
          "Before MCP, every AI application integrated every tool its own way: one connector for each pair of app and system. MCP turns that many-to-many problem into a standard interface. A company can expose its order system once as an MCP server, and any compatible assistant, IDE or agent framework can use it, with consistent discovery, schemas and authorization.",
          "Anthropic introduced MCP in November 2024; in December 2025 it was contributed to the Agentic AI Foundation under the Linux Foundation, with support from several major AI and cloud companies.",
        ],
      },
      {
        heading: "MCP Architecture: Hosts, Clients and Servers",
        body: [],
        table: {
          headers: ["Role", "What it is", "Example"],
          rows: [
            ["Host", "The AI application the user works in", "A chat assistant, IDE or agent platform"],
            ["Client", "The connector inside the host, one per server", "Handles protocol messages and auth"],
            ["Server", "A program exposing capabilities from a system", "An MCP server for your CRM or file store"],
          ],
        },
        diagram: {
          variant: "mcpflow",
          alt: "MCP flow: host app, MCP client, server/discover, tools/list, tools/call (highlighted), result returned to the model.",
          caption: "Discovery tells the client what the server offers; tool calls do the work.",
        },
      },
      {
        heading: "Server Capabilities: Tools, Resources and Prompts",
        body: [
          "**Tools** are functions with a name, description and JSON Schema for inputs (and optionally outputs). The model decides when to call them; the host typically asks the user to approve. **Resources** are data identified by URIs, such as files or records, which the application can read and include as context. **Prompts** are templates a user can choose, such as 'summarize this ticket'. Servers can also declare optional **extensions**, a formal mechanism added in the 2026-07-28 revision; long-running work uses the official tasks extension.",
        ],
      },
      {
        heading: "What Changed in the 2026-07-28 Specification",
        body: [
          "The 2026-07-28 revision is the largest change since launch, so older tutorials may be out of date:",
        ],
        checklist: [
          "**Stateless core:** the initialize handshake and protocol-level sessions (the Mcp-Session-Id header) are removed; each request carries its protocol version and client capabilities in metadata",
          "**server/discover:** servers must implement it to advertise versions, capabilities and identity",
          "**Multi Round-Trip Requests:** servers that need more input return an input_required result instead of sending requests to the client",
          "**subscriptions/listen:** one opt-in stream for change notifications replaces older subscription mechanisms",
          "**Deprecations:** Roots, Sampling and Logging features, the HTTP+SSE transport, and Dynamic Client Registration in favour of Client ID Metadata Documents",
          "**Caching hints:** list and read results carry ttlMs and cacheScope fields",
        ],
      },
      {
        heading: "Transports",
        body: [
          "**stdio:** the host launches the server as a local process and exchanges messages over standard input and output. Simple and private, suited to developer tools and desktop assistants. Servers must not write logs to stdout, which would corrupt messages.",
          "**Streamable HTTP:** the server runs as a web service and clients send requests over HTTP, with streamed responses where needed. Suited to remote, shared and SaaS-hosted servers, and the transport where authorization applies.",
        ],
        cta: {
          title: "Want your product or internal systems available to AI assistants?",
          description: "ZSpace Labs designs and builds MCP servers with narrow tools, proper authorization and the testing needed for production use.",
        },
      },
      {
        heading: "Authorization and Security",
        body: [
          "Remote MCP servers use OAuth 2.1-based authorization. The server publishes protected resource metadata so clients can discover its authorization server; clients use the authorization code flow with PKCE and request audience-bound tokens; the server must validate that tokens were issued for it and must not pass the client's token through to upstream APIs. Beyond authorization, the main risks are over-broad tools, untrusted servers and prompt injection through tool results. See [[/blogs/mcp-security|MCP security]].",
        ],
      },
      {
        heading: "Practical Use Cases",
        body: [
          "MCP Apps, the official UI extension, lets tools return interactive interfaces inside supporting assistants; see [[/blogs/ai-assistant-app-ux|AI assistant app UX]]. In commerce, MCP is a transport for protocols such as UCP; see [[/blogs/acp-vs-ucp-vs-mcp|ACP vs UCP vs MCP]].",
        ],
        table: {
          headers: ["Use case", "What the MCP server exposes"],
          rows: [
            ["Internal assistant over company systems", "Read tools for CRM, tickets and documents"],
            ["Developer tooling", "Repository, CI, issue tracker and database access"],
            ["SaaS product integration", "Your product's actions for customers' AI assistants"],
            ["Operations agents", "Narrow write tools such as creating tickets or updating orders"],
            ["Data analysis", "Query tools over a warehouse with row limits and read-only roles"],
          ],
        },
      },
      {
        heading: "MCP vs Other Standards",
        body: [
          "MCP connects an AI application to tools and data. It is complementary to [[/blogs/agent-to-agent-communication|A2A]], which connects agents to other agents, and to ordinary APIs, which MCP servers usually call underneath. Model providers' function-calling features define how a model requests a tool call; MCP standardizes how those tools are discovered and reached across applications.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [],
        table: {
          headers: ["Advantages", "Limitations"],
          rows: [
            ["Build once, use from many AI applications", "Specification is evolving quickly; implementations lag"],
            ["Standard discovery and schemas", "Client support for features varies"],
            ["Defined authorization model for remote servers", "Security depends on careful implementation"],
            ["Open governance under the Linux Foundation", "Not a substitute for well-designed APIs"],
          ],
        },
      },
      {
        heading: "How to Adopt MCP Step by Step",
        body: [],
        checklist: [
          "**1. Pick one system and a handful of high-value tools**",
          "**2. Decide local (stdio) or remote (Streamable HTTP)** based on who will use it",
          "**3. Design narrow tools** over your existing APIs, read-only first",
          "**4. Implement with an official SDK** targeting the current specification",
          "**5. Add authorization** for remote servers and least-privilege access",
          "**6. Test with the MCP Inspector and real clients**",
          "**7. Monitor usage** and extend tools based on evidence",
        ],
      },
      {
        heading: "MCP in the Enterprise: Governance",
        body: [
          "As MCP use spreads, organizations need the same governance they apply to other integrations. Maintain a catalogue of approved MCP servers (internal and third-party) with owners, data access and permitted clients; block unapproved servers on managed devices; require security review for servers that touch sensitive data or perform writes; and route remote server access through identity providers with audit logs. Treat MCP servers as production services with versioning, monitoring and incident response.",
        ],
      },
      {
        heading: "Common MCP Server Patterns",
        body: [],
        table: {
          headers: ["Pattern", "Description", "Watch for"],
          rows: [
            ["API adapter", "Wraps an existing REST or GraphQL API in task-level tools", "Keep business rules in the API"],
            ["Data access", "Read-only queries over a database or warehouse", "Row limits, read-only roles, no free-form SQL for untrusted users"],
            ["Document source", "Exposes files or knowledge as resources", "Permissions per document"],
            ["Workflow trigger", "Starts approved automations", "Approvals and idempotency"],
            ["Developer tooling", "Repositories, CI, issue trackers", "Local execution risk, token scopes"],
          ],
        },
      },
      {
        heading: "How MCP Fits With Function Calling",
        body: [
          "Model providers' function calling and MCP operate at different levels. Function calling is the model-side mechanism: the model returns a structured request to call a tool, and the application executes it. MCP is the integration-side standard: how the application discovers available tools from servers, how it calls them and how authorization works for remote servers. An AI host typically lists MCP tools to the model through function calling, receives the model's tool call and routes it to the right MCP server. Several model platforms can also connect to remote MCP servers directly from their APIs.",
        ],
      },
      {
        heading: "Planning an MCP Rollout",
        body: [],
        checklist: [
          "**Inventory:** which systems should AI clients reach, and for whom",
          "**Prioritize:** start with read-only, high-value tools",
          "**Design:** task-level tools over existing APIs, with clear descriptions",
          "**Secure:** OAuth-based authorization for remote servers, least-privilege scopes, approvals for writes",
          "**Govern:** catalogue approved servers, owners and data classes",
          "**Operate:** logging, tracing, versioning and support",
          "**Track the specification:** plan upgrades when new revisions ship",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a B2B software company wants customers' AI assistants to check account status and open support tickets. It builds a remote MCP server over its existing public API with three tools (get account summary, list open tickets, create ticket), OAuth-based authorization tied to customer accounts and per-tool scopes, and logs every call. Customers connect from their preferred assistant without a custom integration for each.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Following pre-2026 tutorials that rely on the removed initialize handshake or sessions",
          "Exposing a generic 'run any query' tool",
          "Passing user tokens through to upstream APIs",
          "Connecting unvetted third-party servers to sensitive data",
          "Writing logs to stdout in stdio servers",
        ],
        cta: {
          title: "Planning an MCP integration?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|MCP server development]] and [[/services/website-development|API and backend integration]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "MCP is becoming the standard way to give AI applications access to tools and data. Build narrow, well-authorized servers on top of your APIs, target the current specification and treat security as a first-class concern. Next: [[/blogs/how-to-build-an-mcp-server|build an MCP server]], [[/blogs/mcp-vs-api|MCP vs API]] and [[/blogs/mcp-security|MCP security]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 592 · HOW TO BUILD AN MCP SERVER
  {
    slug: "how-to-build-an-mcp-server",
    title: "How to Build an MCP Server: A Practical Development Guide",
    seoTitle: "How to Build an MCP Server: SDKs, Tools, Transport and Auth",
    excerpt:
      "A practical guide to building an MCP server: choosing an SDK, defining tools with schemas, implementing handlers, stdio and Streamable HTTP transports, authorization, testing with the Inspector and deployment.",
    category: "AI & Automation",
    banner: "mcpserverbuild",
    bannerAlt:
      "MCP server build steps: pick SDK, define tools (highlighted), implement handlers, choose transport, add authorization, test and deploy.",
    date: "2026-10-02",
    readingTime: "7 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise"],
    relatedSlugs: ["model-context-protocol", "mcp-security", "mcp-vs-api"],
    faqs: [
      { q: "What do I need to build an MCP server?", a: "An official MCP SDK for your language, a clear set of tools or resources to expose, the API or data source they will use, a transport choice (stdio or Streamable HTTP), and for remote servers an authorization setup." },
      { q: "Which language should I use?", a: "Use the language your team and the underlying system already use. Official SDKs exist for several languages, including TypeScript and Python, with others such as Java, Kotlin and C# available." },
      { q: "How do I define a tool?", a: "Register it with a name, a description written for the model, an input schema (for example a Zod object in TypeScript or type hints in Python) and a handler that performs the work and returns content." },
      { q: "Should my server use stdio or HTTP?", a: "Use stdio for local servers launched by a desktop app or IDE on the user's machine. Use Streamable HTTP for remote servers shared by many users, which also need authorization." },
      { q: "How do I test an MCP server?", a: "Unit-test handlers, use the MCP Inspector to call tools interactively, connect it to a real client, and test invalid inputs, permission denials and upstream failures." },
      { q: "Why must stdio servers not print to stdout?", a: "Because stdout carries the protocol's JSON-RPC messages. Writing logs there corrupts the stream. Log to stderr or files instead." },
      { q: "How should a server authenticate users?", a: "Remote servers use OAuth 2.1-based authorization as defined by the specification: publish protected resource metadata, accept only tokens issued for the server, and use separate credentials for upstream APIs." },
      { q: "How should I deploy a remote MCP server?", a: "Like any web service: HTTPS, an authorization server, secrets management, rate limits, logging and tracing, versioned releases and monitoring." },
      { q: "How many tools should a server expose?", a: "As few as needed for the use case, each with one clear purpose. Too many similar tools make it harder for models to choose correctly." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "To build an MCP server: pick an official SDK in your team's language, define a small set of narrow tools with clear descriptions and strict input schemas, implement handlers that call your existing APIs with validation and permission checks, and choose a transport (stdio for local use, Streamable HTTP for remote use with OAuth-based authorization). Test with unit tests, the MCP Inspector and a real client, then deploy like any production service with logging, tracing, rate limits and versioning. Target the current 2026-07-28 specification.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Read [[/blogs/model-context-protocol|the MCP guide]] for concepts first. Security requirements are in [[/blogs/mcp-security|MCP security]], and when MCP is the right interface at all is in [[/blogs/mcp-vs-api|MCP vs API]].",
        ],
      },
      {
        heading: "Step 1: Decide What to Expose",
        body: [
          "Start from the questions and actions users need, not from your whole API. List candidate tools, mark each as read or write, and choose a first set of three to five read tools. Decide whether some data is better exposed as resources (readable documents or records by URI) and whether reusable prompts help users.",
        ],
        table: {
          headers: ["Capability", "Use for", "Example"],
          rows: [
            ["Tool", "Actions and queries the model initiates", "get_order_status, create_ticket"],
            ["Resource", "Data the application can read by URI", "orders://ORD-123456, a policy document"],
            ["Prompt", "Templates a user can choose", "'Summarize this account for a QBR'"],
          ],
        },
      },
      {
        heading: "Step 2: Choose an SDK and Transport",
        body: [
          "Use an official SDK so protocol details (discovery, message formats, the stateless request metadata introduced in 2026-07-28) are handled for you. The official server tutorial covers TypeScript, Python, Java, Kotlin and C#. For transport, stdio suits local desktop and IDE use; Streamable HTTP suits remote servers. The older HTTP+SSE transport is deprecated.",
        ],
        diagram: {
          variant: "mcpservercomponents",
          alt: "Inside an MCP server in four columns: capabilities (tools, resources, prompts, descriptions), validation highlighted (input schema, output schema, auth checks, rate limits), transport (stdio for local, Streamable HTTP, TLS, headers) and operations (logging, tracing, versioning, tests).",
          caption: "Validation is the part of the server that protects your systems from bad inputs.",
        },
      },
      {
        heading: "Step 3: Define Tools and Implement Handlers",
        body: [
          "The example below follows the official TypeScript tutorial's API: the server package is @modelcontextprotocol/server, tools are registered with registerTool and a Zod input schema, and a stdio transport connects the server. It wraps an existing internal API rather than querying a database directly, and returns a helpful message on failure instead of throwing raw errors.",
        ],
        code: {
          label: "Example: a minimal TypeScript MCP server with one read tool (stdio)",
          text: "import { McpServer } from \"@modelcontextprotocol/server\";\nimport { StdioServerTransport } from \"@modelcontextprotocol/server/stdio\";\nimport { z } from \"zod\";\n\nconst server = new McpServer({ name: \"orders\", version: \"1.0.0\" });\n\nserver.registerTool(\n  \"get_order_status\",\n  {\n    description: \"Get the status, items and latest shipment event for one order by its ID.\",\n    inputSchema: z.object({\n      orderId: z.string().regex(/^ORD-[0-9]{6}$/).describe(\"Order ID, e.g. ORD-123456\"),\n    }),\n  },\n  async ({ orderId }) => {\n    const res = await fetch(`${process.env.ORDERS_API}/orders/${orderId}`, {\n      headers: { Authorization: `Bearer ${process.env.ORDERS_API_TOKEN}` },\n    });\n    if (!res.ok) {\n      return { content: [{ type: \"text\", text: `Order ${orderId} could not be retrieved (${res.status}).` }] };\n    }\n    const order = await res.json();\n    return { content: [{ type: \"text\", text: JSON.stringify({ status: order.status, items: order.items, lastEvent: order.lastEvent }) }] };\n  }\n);\n\nasync function main() {\n  await server.connect(new StdioServerTransport());\n  console.error(\"orders MCP server running on stdio\"); // stderr, never stdout\n}\n\nmain().catch((err) => { console.error(err); process.exit(1); });",
        },
      },
      {
        heading: "Writing Good Tool Definitions",
        body: [],
        checklist: [
          "Name tools with verbs and objects: get_order_status, create_support_ticket",
          "Describe when to use the tool and what it returns, in one or two sentences",
          "Constrain inputs with patterns, enums, ranges and required fields",
          "Return concise, structured results; avoid dumping whole API responses",
          "Return clear error messages the model can act on",
          "Keep write tools separate from read tools, and make them idempotent",
          "Return tools in a deterministic order, as the 2026-07-28 specification recommends",
        ],
        cta: {
          title: "Building an MCP server for your product or internal systems?",
          description: "ZSpace Labs builds MCP servers with narrow tools, validation, authorization and tests, on top of your existing APIs.",
        },
      },
      {
        heading: "Step 4: Add Authorization for Remote Servers",
        body: [
          "A remote server over Streamable HTTP needs authorization. Following the specification: publish OAuth protected resource metadata so clients can find your authorization server, require access tokens with each request, validate that each token was issued for your server (audience) and has the right scopes, and use separate credentials when calling upstream APIs; never pass the client's token through. Prefer Client ID Metadata Documents for client registration, as Dynamic Client Registration is now deprecated in MCP. Details are in [[/blogs/mcp-security|MCP security]].",
        ],
      },
      {
        heading: "Step 5: Test",
        body: [],
        checklist: [
          "Unit-test each handler, including upstream failures",
          "Use the MCP Inspector to list and call tools interactively",
          "Connect a real client and try realistic requests",
          "Test invalid inputs, unauthorized users and rate limits",
          "Check tool descriptions by watching which tools the model picks",
          "Add regression tests before changing tool schemas",
        ],
      },
      {
        heading: "Step 6: Deploy and Operate",
        body: [
          "Package local servers so users can install them easily and pin versions. Deploy remote servers as web services behind HTTPS with secrets management, rate limits, structured logging and tracing (the specification documents OpenTelemetry trace context in request metadata), health checks and alerts. Version your server and tools, communicate breaking changes and keep old versions during migrations.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "A well-built MCP server makes your systems usable from many AI applications without bespoke integrations, and centralizes validation and authorization in one place. The limits: the specification and SDKs are moving quickly, clients support features unevenly, and an MCP server adds another service to secure and maintain. Keep business logic in your APIs so the server stays a thin, safe adapter.",
        ],
      },
      {
        heading: "The Same Tool in Python",
        body: [
          "In the official Python SDK, the current tutorial uses the MCPServer class from mcp.server, with tools defined by decorators and type hints. The equivalent of the TypeScript example looks like this (check the SDK documentation for the version you install):",
        ],
        code: {
          label: "Example: Python MCP server with one read tool (stdio)",
          text: "import os\nimport logging\nimport httpx2\nfrom mcp.server import MCPServer\n\nlogging.basicConfig(level=logging.INFO)  # logs go to stderr, never stdout\nmcp = MCPServer(\"orders\")\n\n@mcp.tool()\nasync def get_order_status(order_id: str) -> str:\n    \"\"\"Get the status, items and latest shipment event for one order.\n\n    Args:\n        order_id: Order ID in the form ORD-123456\n    \"\"\"\n    if not (order_id.startswith(\"ORD-\") and order_id[4:].isdigit() and len(order_id) == 10):\n        return \"Invalid order ID format. Expected ORD-123456.\"\n    async with httpx2.AsyncClient(timeout=15) as client:\n        res = await client.get(\n            f\"{os.environ['ORDERS_API']}/orders/{order_id}\",\n            headers={\"Authorization\": f\"Bearer {os.environ['ORDERS_API_TOKEN']}\"},\n        )\n    if res.status_code != 200:\n        return f\"Order {order_id} could not be retrieved ({res.status_code}).\"\n    order = res.json()\n    return f\"Status: {order['status']}; last event: {order['lastEvent']}\"\n\nif __name__ == \"__main__\":\n    mcp.run(transport=\"stdio\")",
        },
      },
      {
        heading: "Remote Server Deployment Checklist",
        body: [],
        checklist: [
          "Streamable HTTP over HTTPS only",
          "Protected resource metadata published; authorization server configured with PKCE and resource indicators",
          "Audience and scope validation on every request",
          "Separate credentials for upstream APIs; no token passthrough",
          "Per-user and per-tool rate limits",
          "Structured logs and traces, with sensitive values redacted",
          "Health checks, alerts and an on-call owner",
          "Versioned releases with a changelog for tool changes",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: an internal operations team builds a stdio server with three read tools over its warehouse API so analysts can ask an AI assistant about stock and shipments. After a month, a remote version adds a create_transfer_request write tool behind OAuth with a scope only supervisors receive, and every call is logged with the user and arguments.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Copying older examples that use deprecated transports or the removed handshake",
          "Generic tools that accept arbitrary queries",
          "Logging to stdout in stdio servers",
          "Token passthrough to upstream APIs",
          "Dumping entire API responses into tool results",
          "No tests for failure paths",
        ],
        cta: {
          title: "Need help taking an MCP server to production?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|MCP development]] and [[/services/website-development|API, auth and deployment work]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A good MCP server is a thin, well-validated adapter over your APIs: few narrow tools, clear descriptions, the right transport, proper authorization and solid tests. Related: [[/blogs/model-context-protocol|MCP guide]], [[/blogs/mcp-security|MCP security]] and [[/blogs/mcp-vs-api|MCP vs API]].",
        ],
      },
    ],
  },
];
