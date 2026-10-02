import type { BlogPost } from "./blog-data";

/**
 * AI knowledge hub, part six: RAG foundations. retrieval-augmented-generation
 * is the RAG hub; enterprise-rag-architecture owns permissions, connectors
 * and operations at organizational scale; ai-knowledge-base owns the product
 * experience. Ecommerce product search (ecommerce-semantic-search) remains
 * the shopper-search guide. pgvector statements follow the pgvector README
 * (HNSW and IVFFlat indexes, halfvec, iterative index scans since 0.8.0).
 * Merged into `posts` in blog-data.ts.
 */

export const aiCorePosts6: BlogPost[] = [
  // ---------------------------------------- 581 · RAG (PILLAR)
  {
    slug: "retrieval-augmented-generation",
    title: "Retrieval-Augmented Generation (RAG): A Complete Guide for Businesses",
    seoTitle: "Retrieval-Augmented Generation (RAG): A Practical Guide",
    excerpt:
      "What retrieval-augmented generation is and how to build it: ingestion, chunking, embeddings, hybrid retrieval, reranking, grounded generation with citations, evaluation, costs and common failure modes.",
    category: "AI & Automation",
    banner: "ragpipeline",
    bannerAlt:
      "RAG pipeline: ingest, chunk, embed and index, retrieve (highlighted), generate with citations, evaluate; the note says most answer failures are retrieval failures.",
    date: "2026-10-03",
    readingTime: "9 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["professional-services", "saas-technology", "healthcare-healthtech"],
    relatedSlugs: ["enterprise-rag-architecture", "rag-vs-fine-tuning", "ai-knowledge-base"],
    faqs: [
      { q: "What is retrieval-augmented generation?", a: "A technique where an AI system first retrieves relevant information from your own sources, such as documents or databases, and then gives it to a language model to generate an answer grounded in that information, usually with citations." },
      { q: "Why use RAG instead of just asking a language model?", a: "Models do not know your private or recent information and can produce confident but wrong answers. RAG supplies the right source material at answer time, which improves accuracy, freshness and traceability." },
      { q: "What are the main components of a RAG system?", a: "Data connectors and ingestion, parsing and chunking, embeddings and an index (vector, keyword or both), a retriever with filters, optional reranking, a generation step with instructions and citations, and evaluation and monitoring." },
      { q: "Does RAG require a vector database?", a: "Not necessarily. You need a searchable index; that can be a vector database, Postgres with pgvector, or a search engine with vector and keyword support. Many systems use hybrid search." },
      { q: "What causes poor RAG answers?", a: "Usually retrieval: documents missing or stale, poor parsing, chunks that split key information, missing keyword matching for codes and names, no reranking, or permissions filtering out the right source. Generation issues are less common than teams expect." },
      { q: "How do you evaluate RAG?", a: "Separately for retrieval (did the right sources appear in the top results?) and generation (is the answer faithful to sources, complete and correct?), using a question set with known answers and sources." },
      { q: "How much does RAG cost?", a: "Costs include embedding documents (mostly one-time plus updates), index storage, retrieval infrastructure and model tokens per question, which grow with how much context you include. Reranking and larger models add cost per query." },
      { q: "Can RAG prevent hallucinations?", a: "It reduces them but does not eliminate them. Instructions to answer only from sources, citation checks, refusal when evidence is missing and evaluation of faithfulness are still needed." },
      { q: "Is RAG secure for company data?", a: "It can be, if retrieval enforces the same permissions as the source systems, data is processed by approved providers and retrieved content is treated as untrusted input that cannot trigger actions." },
      { q: "When should I use fine-tuning instead of RAG?", a: "When the problem is the model's behaviour, format or specialised skill rather than missing knowledge. For knowledge that changes, RAG is usually the better fit." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Retrieval-augmented generation (RAG) answers questions using your own information. At indexing time, documents are collected, parsed, split into chunks, embedded and indexed with metadata and permissions. At question time, the system retrieves the most relevant chunks (ideally with hybrid keyword and vector search plus reranking), gives them to a language model with instructions to answer only from them and cite sources, and refuses when evidence is missing. Evaluate retrieval and answers separately, because most failures start with retrieving the wrong content.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "This is the hub for ZSpace's RAG guides. Deeper topics: [[/blogs/rag-chunking-strategies|chunking]], [[/blogs/vector-embeddings-explained|embeddings]], [[/blogs/vector-databases-for-ai|vector databases]], [[/blogs/hybrid-search-for-rag|hybrid search]], [[/blogs/rag-reranking|reranking]], [[/blogs/enterprise-rag-architecture|enterprise RAG architecture]], [[/blogs/graphrag-explained|GraphRAG]] and [[/blogs/rag-vs-fine-tuning|RAG vs fine-tuning]]. For a product view, see [[/blogs/ai-knowledge-base|AI knowledge base]].",
          "For building complete generative AI products around RAG, see [[/blogs/generative-ai-application-development|generative AI application development]].",
        ],
      },
      {
        heading: "How RAG Works",
        body: [
          "RAG has two phases. **Indexing** prepares your content: connectors pull documents, parsers extract text and structure, chunking splits it into retrievable passages, an embedding model converts passages into vectors, and an index stores vectors, text, metadata and permissions. **Query time** finds and uses that content: the question may be rewritten, retrieval finds candidate passages, a reranker orders them, and the model generates an answer from the top passages with citations.",
        ],
        diagram: {
          variant: "ragtwophase",
          alt: "RAG in four columns: indexing (connectors, parse and chunk, embed, metadata), query time highlighted (rewrite query, hybrid search, filter, rerank), generation (prompt with sources, answer, citations, refuse if unsure) and evaluation (retrieval recall, faithfulness, answer quality, feedback).",
          caption: "Query time is where most quality is won or lost.",
        },
      },
      {
        heading: "Ingestion and Parsing",
        body: [
          "Garbage in, garbage retrieved. Parse documents in a way that keeps structure: headings, lists, tables and page numbers. PDFs with columns, scanned pages and complex tables need specialised parsing or OCR. Store metadata (source, title, section, date, owner, access groups) with every chunk; it powers filtering, citations and freshness. Re-index on change rather than on a slow schedule where content changes often.",
        ],
      },
      {
        heading: "Chunking and Embeddings",
        body: [
          "Chunks should be small enough to be specific and large enough to make sense on their own. Structure-aware chunking (by section) usually beats fixed-size splitting for business documents; see [[/blogs/rag-chunking-strategies|RAG chunking strategies]]. Embeddings turn chunks into vectors for semantic search; the model you choose affects quality, cost and language support; see [[/blogs/vector-embeddings-explained|vector embeddings explained]].",
        ],
      },
      {
        heading: "Retrieval: Hybrid Search, Filters and Reranking",
        body: [
          "Vector search finds passages with similar meaning; keyword search (BM25) finds exact terms such as product codes, names and error messages. Combining them in [[/blogs/hybrid-search-for-rag|hybrid search]] usually beats either alone. Apply metadata filters (permissions, product, date) during retrieval. Then [[/blogs/rag-reranking|rerank]] a larger candidate set with a cross-encoder or similar model so the best passages reach the prompt.",
        ],
        table: {
          headers: ["Technique", "What it fixes"],
          rows: [
            ["Query rewriting", "Vague or conversational questions"],
            ["Hybrid search", "Missed exact terms and codes"],
            ["Metadata filters", "Wrong product, region, date or permission"],
            ["Reranking", "Relevant passages ranked too low"],
            ["Parent-document retrieval", "Chunks too small to answer alone"],
          ],
        },
      },
      {
        heading: "Generation: Grounded Answers With Citations",
        body: [
          "Instruct the model to answer only from the provided sources, cite them, say when the sources do not contain the answer and avoid speculation. Keep the context focused: more passages are not always better, and irrelevant text can confuse the model and raises cost. Validate citations where accuracy matters (does the cited passage support the claim?). For structured outputs from documents, see [[/blogs/ai-document-extraction|AI document extraction]].",
        ],
        cta: {
          title: "Building an AI assistant on your company's documents?",
          description: "ZSpace builds RAG systems with permission-aware retrieval, citations and evaluation, connected to the sources your teams already use.",
        },
      },
      {
        heading: "Evaluating RAG",
        body: [
          "Build a question set from real queries with expected answers and the sources that contain them. Measure retrieval (are the right sources in the top results?) separately from generation (is the answer faithful to the sources, correct and complete?). Use deterministic checks where possible and calibrated LLM judges for faithfulness. Re-run on every change to parsing, chunking, embeddings, retrieval settings or model. See [[/blogs/ai-agent-evaluation|AI evaluation]].",
        ],
        checklist: [
          "Retrieval recall at k: is a correct source in the top k?",
          "Ranking quality: how high does the correct source appear?",
          "Faithfulness: are all claims supported by retrieved text?",
          "Answer correctness and completeness",
          "Correct refusals when the answer is not in the sources",
          "Latency and cost per question",
        ],
      },
      {
        heading: "Security and Permissions",
        body: [
          "A RAG system must not show people documents they cannot open in the source system. Copy access controls with content and filter at retrieval time by the user's identity and groups. Treat retrieved text as untrusted: a document could contain instructions aimed at the model, so retrieval-only assistants should not have powerful tools. The [[https://genai.owasp.org/llm-top-10/|OWASP Top 10 for LLM Applications]] lists vector and embedding weaknesses among its risks. See [[/blogs/enterprise-rag-architecture|enterprise RAG architecture]].",
        ],
      },
      {
        heading: "Costs",
        body: [
          "Indexing costs come from parsing and embedding (mostly up front, plus updates). Query costs come from retrieval infrastructure, reranking and model tokens, which scale with the number of passages included. Keep context lean, cache frequent answers where safe and choose the smallest model that meets quality targets; see [[/blogs/llm-cost-optimization|LLM cost optimization]].",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [],
        table: {
          headers: ["Advantages", "Limitations"],
          rows: [
            ["Answers from current, private information", "Quality depends on content quality and coverage"],
            ["Citations make answers checkable", "Retrieval can miss or misrank the right passage"],
            ["Update knowledge by re-indexing, not retraining", "Complex questions across many documents are hard"],
            ["Permissions can mirror source systems", "Needs ongoing evaluation and content ownership"],
          ],
        },
      },
      {
        heading: "How to Build a RAG System Step by Step",
        body: [],
        checklist: [
          "**1. Define the questions** users need answered and collect real examples",
          "**2. Inventory sources** and their owners, formats and permissions",
          "**3. Build ingestion** with structure-preserving parsing and metadata",
          "**4. Choose chunking and embeddings** and test on your questions",
          "**5. Implement hybrid retrieval with filters and reranking**",
          "**6. Write generation instructions** for grounded, cited answers and refusals",
          "**7. Evaluate retrieval and answers** separately and fix the weakest stage",
          "**8. Launch with feedback** and a process for content owners to fix gaps",
        ],
      },
      {
        heading: "RAG Architecture Patterns",
        body: [],
        table: {
          headers: ["Pattern", "How it works", "When to use"],
          rows: [
            ["Basic RAG", "Retrieve top chunks, generate once", "Prototypes, simple FAQs"],
            ["Advanced RAG", "Query rewriting, hybrid search, reranking, citations", "Most production systems"],
            ["Parent-document RAG", "Match small chunks, pass larger sections", "Long structured documents"],
            ["Agentic RAG", "An agent decides when and what to retrieve, possibly several times", "Complex, multi-part questions"],
            ["GraphRAG", "Knowledge graph and community summaries", "Relationship and corpus-wide questions"],
          ],
        },
      },
      {
        heading: "Tools and Technology Choices",
        body: [
          "A RAG stack typically includes connectors and parsers, an embedding model, an index (Postgres with pgvector, a dedicated vector database or a search engine with vector support), a reranker, a language model and an evaluation harness. Frameworks such as LlamaIndex and LangChain speed up assembly; cloud platforms and enterprise search products offer managed options. Choose components based on your sources, scale, permission model and data residency, and keep them swappable behind your own interfaces. Storage choices are compared in [[/blogs/vector-databases-for-ai|vector databases for AI]].",
        ],
      },
      {
        heading: "RAG Use Cases by Function",
        body: [],
        table: {
          headers: ["Function", "Questions RAG answers", "Typical sources"],
          rows: [
            ["HR and people", "Leave, benefits, policies, onboarding", "Handbooks, policy sites"],
            ["Customer support", "Product how-to, troubleshooting, policies", "Help centre, runbooks, resolved tickets"],
            ["Sales", "Product capabilities, pricing rules, security answers", "Product docs, approved security questionnaires"],
            ["Legal and compliance", "Clause positions, policy interpretation", "Playbooks, contract libraries"],
            ["Engineering and IT", "Architecture decisions, runbooks, incidents", "Wikis, repositories, postmortems"],
            ["Operations", "Procedures, specifications, standards", "SOPs, manuals, specifications"],
          ],
        },
      },
      {
        heading: "Operating RAG in Production",
        body: [
          "Launching is the start. Production RAG needs ingestion monitoring (failed syncs, parsing errors, document counts), freshness tracking, evaluation runs after every pipeline change, sampled answer reviews, user feedback triage and cost and latency dashboards. Assign owners: an engineering owner for the pipeline and content owners for each source area. Schedule re-evaluation when you change embedding models, chunking, retrieval settings or the generation model, and keep the previous index available until the new one is proven.",
        ],
        checklist: [
          "Ingestion health and freshness alerts",
          "Evaluation in CI for pipeline and prompt changes",
          "Weekly review of low-rated answers and unanswered questions",
          "Content owner reports per source area",
          "Cost per question and latency percentiles",
          "Versioned indexes with rollback",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: an engineering firm's RAG assistant gives vague answers about project standards. Evaluation shows the right document is retrieved but split mid-table, and part numbers are missed by vector search. Switching to section-aware chunking that keeps tables intact and adding keyword search with rank fusion fixes most failures; a reranker improves the rest.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Tuning prompts when retrieval is the problem",
          "Vector-only search for content full of codes and names",
          "Losing tables and headings during parsing",
          "No permission filtering",
          "No evaluation set",
          "Stale indexes nobody owns",
        ],
        cta: {
          title: "Want a RAG system your team can trust?",
          description: "Talk to ZSpace about [[/services/ai-automation|RAG development]] and [[/services/website-development|data integration and deployment]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "RAG is a retrieval problem first and a generation problem second. Invest in parsing, chunking, hybrid retrieval, reranking, permissions and evaluation, and keep content owners involved. Next: [[/blogs/enterprise-rag-architecture|enterprise RAG]], [[/blogs/hybrid-search-for-rag|hybrid search]] and [[/blogs/ai-knowledge-base|AI knowledge base]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 582 · RAG VS FINE-TUNING
  {
    slug: "rag-vs-fine-tuning",
    title: "RAG vs Fine-Tuning: Which Approach Should You Choose for AI Applications?",
    seoTitle: "RAG vs Fine-Tuning: Differences, Costs and When to Use Each",
    excerpt:
      "How RAG and fine-tuning differ: knowledge versus behaviour, freshness, data needs, cost, citations and maintenance, with a decision process and when combining them makes sense.",
    category: "AI & Automation",
    banner: "ragvsft",
    bannerAlt:
      "Comparison of RAG (highlighted), fine-tuning and both combined by what changes, fresh data, citations, data needed and best fit; the note says knowledge problems call for RAG and behaviour problems for prompts first, then tuning.",
    date: "2026-10-03",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "professional-services"],
    relatedSlugs: ["retrieval-augmented-generation", "llm-routing", "ai-agent-evaluation"],
    faqs: [
      { q: "What is the difference between RAG and fine-tuning?", a: "RAG gives a model relevant information at answer time by retrieving it from your sources. Fine-tuning changes the model's weights by training it on examples, which changes how it behaves, formats responses or performs a specialised task." },
      { q: "Can fine-tuning teach a model company knowledge?", a: "It can absorb some facts, but unreliably, and the knowledge goes stale as soon as information changes. It also makes citations hard. For changing knowledge, RAG is usually better." },
      { q: "When is fine-tuning the right choice?", a: "When prompts and examples cannot get the format, style or task performance you need, especially at high volume where a smaller tuned model can replace a larger general one." },
      { q: "Is fine-tuning more expensive than RAG?", a: "Fine-tuning needs labelled training data, training runs, evaluation and retraining when requirements change. RAG needs indexing and retrieval infrastructure and adds tokens per query. Which costs more depends on volume and change frequency." },
      { q: "Can RAG and fine-tuning be combined?", a: "Yes. A model can be tuned for format, tone or domain reasoning while RAG supplies current facts at answer time." },
      { q: "What should I try before fine-tuning?", a: "Better prompts, examples in the prompt, structured outputs, a stronger model, better retrieval and smaller task decomposition. Many problems are solved before tuning is needed." },
      { q: "What types of fine-tuning exist?", a: "Providers offer methods such as supervised fine-tuning on example input-output pairs and preference-based methods. Availability varies by provider and model, so check current documentation." },
      { q: "Does fine-tuning reduce hallucinations?", a: "It can improve behaviour on the trained task, but it does not give the model reliable access to facts it was not trained on. Grounding with retrieval remains the main tool for factual accuracy." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Use RAG when the problem is knowledge: the model needs your documents, data or recent information, with citations and easy updates. Use fine-tuning when the problem is behaviour: a consistent format, style or specialised task that prompting cannot achieve reliably, or when you want a smaller, cheaper model to perform a narrow task at volume. Try better prompts, examples and retrieval before fine-tuning, and combine both when you need tuned behaviour with current facts.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "RAG is explained in depth in [[/blogs/retrieval-augmented-generation|the RAG guide]]. Choosing between models for different tasks is covered in [[/blogs/llm-routing|LLM routing]], and testing either approach in [[/blogs/ai-agent-evaluation|AI evaluation]].",
          "Preparing the documents and data that both approaches depend on is covered in [[/blogs/ai-data-readiness|AI data readiness]].",
        ],
      },
      {
        heading: "Knowledge vs Behaviour",
        body: [
          "This is the most useful distinction. **Knowledge** is what the model should know: your policies, product specs, customer records, last week's changes. **Behaviour** is how the model should act: output format, tone, classification scheme, reasoning style for a narrow domain task. RAG changes what the model sees; fine-tuning changes how it responds.",
        ],
        table: {
          headers: ["Dimension", "RAG", "Fine-tuning"],
          rows: [
            ["Changes", "Input context at answer time", "Model weights"],
            ["Updating knowledge", "Re-index documents", "Retrain"],
            ["Citations", "Natural", "Not available"],
            ["Data needed", "Documents and metadata", "Labelled examples"],
            ["Latency and tokens", "More input tokens per query", "Can reduce prompt size"],
            ["Ongoing work", "Content ownership, index updates", "Data curation, retraining, re-evaluation"],
            ["Best for", "Facts, policies, records", "Format, style, narrow skills, cost reduction"],
          ],
        },
      },
      {
        heading: "A Decision Process",
        body: [],
        diagram: {
          variant: "ragftflow",
          alt: "Decision flow: define the failure, is it a knowledge gap (highlighted)? use RAG; is it a behaviour gap? prompt first, then tune; evaluate both.",
          caption: "Start from the failure you observe, not from the technique you want to use.",
        },
        checklist: [
          "**Answers are wrong because information is missing or outdated:** RAG",
          "**Answers need citations or must reflect recent changes:** RAG",
          "**Output format or style is inconsistent:** structured outputs and examples first, then fine-tuning",
          "**A narrow task runs at high volume and a large model is too costly:** fine-tune a smaller model",
          "**The model lacks a specialised skill even with good context:** consider fine-tuning or a stronger model",
        ],
      },
      {
        heading: "What to Try Before Fine-Tuning",
        body: [
          "Many problems disappear with clearer instructions, a few examples in the prompt, schema-constrained outputs, splitting a complex task into steps, a more capable model or better retrieval. These are faster to change and easier to evaluate. Fine-tune when you have exhausted them and have good labelled data.",
        ],
        cta: {
          title: "Unsure whether your AI problem needs RAG or tuning?",
          description: "ZSpace diagnoses where your system fails and tests the cheapest fix first, from retrieval improvements to fine-tuned models.",
        },
      },
      {
        heading: "Costs and Maintenance",
        body: [
          "RAG costs include indexing, storage, retrieval and extra tokens per query, plus keeping content current. Fine-tuning costs include building and cleaning training data, training runs, hosting or per-token fees for the tuned model, and repeating the cycle when requirements or base models change. Fine-tuning tends to pay off for stable, high-volume tasks; RAG for changing knowledge.",
          "How fine-tuning differs from pretraining and inference in compute and operations is explained in [[/blogs/llm-inference-vs-training|LLM inference vs training]].",
        ],
      },
      {
        heading: "Combining RAG and Fine-Tuning",
        body: [
          "A combined system might fine-tune a model to produce a specific report format or follow a domain's conventions, then use RAG to supply the current facts for each report. Evaluate the combination against each approach alone; complexity should earn its place.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [],
        table: {
          headers: ["", "Advantages", "Limitations"],
          rows: [
            ["RAG", "Fresh, citable, permission-aware knowledge", "Depends on retrieval quality; more tokens per query"],
            ["Fine-tuning", "Consistent behaviour, smaller models, shorter prompts", "Stale knowledge, data effort, retraining"],
          ],
        },
      },
      {
        heading: "How to Decide Step by Step",
        body: [],
        checklist: [
          "**1. Collect failing examples** and label why each fails",
          "**2. Group failures** into knowledge, behaviour and capability",
          "**3. Fix knowledge failures with retrieval** and re-evaluate",
          "**4. Fix behaviour failures with prompts and structured outputs** and re-evaluate",
          "**5. Fine-tune only remaining behaviour or cost problems** with enough labelled data",
          "**6. Compare against the baseline** on the same evaluation set",
        ],
      },
      {
        heading: "Example Scenarios",
        body: [],
        table: {
          headers: ["Scenario", "Better fit", "Why"],
          rows: [
            ["Answer questions about current HR policies", "RAG", "Policies change; answers need citations"],
            ["Classify support tickets into 40 categories at scale", "Fine-tune a small model (or prompt a small model first)", "Stable task, high volume, format consistency"],
            ["Draft reports in a strict house style using this week's data", "RAG plus structured outputs; fine-tune if style remains inconsistent", "Fresh facts plus behaviour"],
            ["Product assistant for a catalogue that changes daily", "RAG", "Freshness"],
            ["Extract fields from a specialized document type", "Prompted extraction first; fine-tune if accuracy plateaus", "Behaviour on a narrow task"],
          ],
        },
      },
      {
        heading: "How to Compare the Approaches Fairly",
        body: [
          "Use one evaluation set that reflects real usage, including questions whose answers changed recently. Measure accuracy, faithfulness to sources (for RAG), format compliance, latency and cost per request, and estimate maintenance: how often would you re-index versus retrain? Include the fine-tuning data preparation effort in the comparison; it is often the largest cost. Test on held-out data to avoid flattering a tuned model. See [[/blogs/ai-agent-evaluation|AI evaluation]].",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a legal operations team wants a model to draft clause summaries in a strict house format using current templates. RAG supplies the current clause library; the format problems are solved first with structured outputs. Months later, at high volume, the team fine-tunes a smaller model on approved summaries to cut cost, keeping RAG for the clause content.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Fine-tuning to teach facts that change",
          "Skipping prompt and retrieval fixes",
          "Training on small or inconsistent data",
          "No evaluation baseline to compare against",
          "Forgetting retraining costs when base models update",
        ],
        cta: {
          title: "Need the right approach for your AI application?",
          description: "Talk to ZSpace about [[/services/ai-automation|RAG, fine-tuning and AI application development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "RAG for knowledge, fine-tuning for behaviour, prompts and retrieval before training, and evaluation to decide. Related: [[/blogs/retrieval-augmented-generation|RAG guide]], [[/blogs/llm-routing|LLM routing]] and [[/blogs/llm-cost-optimization|LLM cost optimization]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 583 · ENTERPRISE RAG ARCHITECTURE
  {
    slug: "enterprise-rag-architecture",
    title: "Enterprise RAG Architecture: How to Build AI Systems With Company Data",
    seoTitle: "Enterprise RAG Architecture: Permissions and Connectors",
    excerpt:
      "How to architect RAG for an organization: source connectors, ingestion pipelines, access control sync, permission-aware retrieval, indexing, freshness, monitoring, governance and deployment.",
    category: "AI & Automation",
    banner: "enterpriserag",
    bannerAlt:
      "Enterprise RAG architecture in four columns: sources (SharePoint or Drive, wikis, ticketing, databases), ingestion (connectors, parsing, access control sync, re-index jobs), retrieval highlighted (hybrid search, permission filter, rerank, freshness) and serving (assistant UI, APIs, audit logs, evaluations).",
    date: "2026-10-03",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["b2b-enterprise", "professional-services", "fintech"],
    relatedSlugs: ["retrieval-augmented-generation", "ai-knowledge-base", "hybrid-search-for-rag"],
    faqs: [
      { q: "What is enterprise RAG?", a: "Retrieval-augmented generation built for organizational use: many data sources, document-level permissions, large and changing content, audit requirements, multiple applications and production operations." },
      { q: "How do you enforce permissions in RAG?", a: "Sync access control lists from source systems with each document or chunk, resolve the user's identity and groups at query time, and filter retrieval so only permitted content can be returned." },
      { q: "Should permissions be checked before or after retrieval?", a: "During retrieval, as a filter, so unauthorized content never reaches the model. Post-filtering can leak information through summaries and can leave too few results." },
      { q: "How do you keep enterprise RAG up to date?", a: "Use change notifications or incremental sync from sources, re-index changed documents quickly, remove deleted content promptly and show content dates in answers." },
      { q: "What connectors are typically needed?", a: "Document stores such as SharePoint, Google Drive and Box, wikis such as Confluence, ticketing systems, CRMs, databases and data warehouses, each with content and permission sync." },
      { q: "Should we build or buy enterprise RAG?", a: "Buy when an existing platform supports your sources, permissions and deployment needs. Build or customize when sources are specialised, retrieval needs tuning, or the RAG system is part of your own product." },
      { q: "How is enterprise RAG monitored?", a: "With retrieval and answer evaluation, usage analytics, feedback, latency and cost tracking, ingestion health checks and audit logs of who asked what and which sources were used." },
      { q: "Where should enterprise RAG data be processed?", a: "Where your security, residency and contractual requirements allow. Check model and embedding providers' data handling terms and regions, and consider private deployment options for sensitive data." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Enterprise RAG architecture connects many company sources to AI applications safely. Connectors pull content and its access permissions; an ingestion pipeline parses, chunks, embeds and indexes it with metadata; retrieval resolves the user's identity and filters by permissions before hybrid search and reranking; a serving layer exposes grounded, cited answers to assistants and APIs; and an operations layer handles incremental sync, deletion, evaluation, monitoring and audit logs. Permissions and freshness are the two problems that separate enterprise RAG from a prototype.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Core RAG concepts are in [[/blogs/retrieval-augmented-generation|the RAG guide]]; the user-facing product in [[/blogs/ai-knowledge-base|AI knowledge base]]. Retrieval quality techniques are in [[/blogs/hybrid-search-for-rag|hybrid search]] and [[/blogs/rag-reranking|reranking]]; storage choices in [[/blogs/vector-databases-for-ai|vector databases]].",
        ],
      },
      {
        heading: "Reference Architecture",
        body: [],
        table: {
          headers: ["Layer", "Components", "Key concerns"],
          rows: [
            ["Sources", "Document stores, wikis, tickets, CRM, databases", "Owners, formats, volume, change rate"],
            ["Connectors", "Content and ACL sync, change detection", "Incremental updates, deletions, rate limits"],
            ["Ingestion", "Parsing, OCR, chunking, embedding, metadata", "Structure preservation, cost, versioning"],
            ["Index", "Vector and keyword indexes, metadata store", "Scale, filtering, multi-tenancy"],
            ["Retrieval", "Identity resolution, filters, hybrid search, rerank", "Permissions, relevance, latency"],
            ["Serving", "Assistant UI, APIs, agents", "Citations, refusals, rate limits"],
            ["Operations", "Evaluation, monitoring, audit, governance", "Quality, cost, compliance"],
          ],
        },
      },
      {
        heading: "Permission-Aware Retrieval",
        body: [
          "The non-negotiable rule: users must only receive answers built from content they could open in the source system. Sync access control lists with content (users, groups, sharing links), resolve the requesting user's identity and group memberships at query time, and apply them as retrieval filters. Re-sync permissions when they change, not only when content changes. Test with users who have different access, and log which sources contributed to each answer.",
        ],
        diagram: {
          variant: "permissionflow",
          alt: "Permission-aware retrieval: user query, resolve identity, filtered retrieval (highlighted), rerank, answer with citations, audit log; permissions are enforced before retrieval, not after.",
          caption: "Filtering during retrieval means unauthorized text never reaches the model.",
        },
      },
      {
        heading: "Connectors, Freshness and Deletion",
        body: [
          "Prefer change notifications or incremental sync over full re-crawls. Track each document's version and last sync. Deletions and permission removals must propagate quickly; an assistant that keeps quoting a withdrawn policy or a document someone lost access to is a real risk. Show the source date in answers so users can judge freshness.",
          "Connector design, change detection and permission capture are covered in [[/blogs/ai-data-ingestion|AI data ingestion]], and near-real-time updates in [[/blogs/real-time-data-for-ai|real-time data for AI]].",
        ],
        cta: {
          title: "Connecting AI to company data without leaking it?",
          description: "ZSpace builds enterprise RAG with permission sync, incremental updates and audit logging across your document and business systems.",
        },
      },
      {
        heading: "Indexing at Scale",
        body: [
          "Large corpora need batch and incremental ingestion, versioned embeddings (so you can re-embed when you change models) and an index that filters efficiently by metadata and permissions. Separate indexes by tenant or sensitivity when isolation requirements are strict. Plan for re-indexing: changing chunking or embedding models means reprocessing everything, so budget for it.",
        ],
      },
      {
        heading: "Security, Privacy and Data Residency",
        body: [
          "Classify sources by sensitivity and decide which can be indexed at all. Check where embedding and model providers process and retain data, and whether contractual terms meet your requirements. Encrypt indexes, restrict administrative access, keep audit logs of queries and sources, and treat retrieved content as untrusted input that cannot trigger actions without separate authorization.",
        ],
      },
      {
        heading: "Evaluation and Monitoring",
        body: [],
        checklist: [
          "Question sets per department with expected sources",
          "Retrieval recall and ranking metrics by source",
          "Faithfulness and correctness of answers",
          "Permission tests with different user profiles",
          "Ingestion health: failures, lag, document counts",
          "Usage, feedback, latency and cost dashboards",
        ],
      },
      {
        heading: "Governance and Ownership",
        body: [
          "Assign owners to sources and content areas. Answers are only as good as the documents, so owners need reports on unanswered or poorly rated questions in their area. Define which sources are authoritative when documents conflict, and retire outdated content rather than leaving it searchable.",
        ],
      },
      {
        heading: "Build vs Buy",
        body: [],
        table: {
          headers: ["Option", "Fits", "Trade-offs"],
          rows: [
            ["Workplace AI features in existing suites", "Content already in one suite", "Limited control and customization"],
            ["Enterprise search or RAG platforms", "Many standard sources", "Licence cost, connector coverage"],
            ["Cloud building blocks", "Teams with engineering capacity", "More integration work"],
            ["Custom build", "Specialised sources or product-embedded RAG", "Full control, full responsibility"],
          ],
        },
      },
      {
        heading: "How to Implement Step by Step",
        body: [],
        checklist: [
          "**1. Choose the first use case** and its sources",
          "**2. Map permissions** in each source and the identity system",
          "**3. Build connectors** with content, ACL and deletion sync",
          "**4. Build ingestion and indexing** with metadata and versioning",
          "**5. Implement permission-filtered hybrid retrieval and reranking**",
          "**6. Evaluate**, including permission tests",
          "**7. Launch to a pilot group** with feedback and audit logging",
          "**8. Add sources and departments** one at a time",
        ],
      },
      {
        heading: "Product-Embedded and Multi-Tenant RAG",
        body: [
          "When RAG is a feature of your product, serving many customers, tenant isolation becomes the top concern. Options include a separate index per tenant (strong isolation, more operational overhead), a shared index with mandatory tenant filters (efficient, but every query path must apply the filter), or a hybrid by tenant size. Enforce tenant scoping in the retrieval service, not in the application calling it, and test it with automated cross-tenant checks.",
        ],
      },
      {
        heading: "Agentic RAG in the Enterprise",
        body: [
          "Agents increasingly use retrieval as one tool among many, deciding when to search, which source to query and whether to search again. That improves complex answers but multiplies retrieval calls and permission checks. Give agents retrieval tools that enforce the user's permissions automatically, cap retrieval calls per run, and log which sources each step used. Keep retrieval-only assistants separate from agents that can take actions, to reduce prompt injection risk from indexed content.",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a consulting firm wants an assistant over proposals, methodologies and client deliverables. Client folders have strict access, so the connector syncs folder permissions and group memberships; retrieval filters by the consultant's groups. A permission test suite runs nightly with test accounts for three roles, and an audit log records the sources behind each answer.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Indexing everything with a single service account and no ACLs",
          "Filtering permissions after generation",
          "Ignoring deletions and permission changes",
          "No plan for re-embedding",
          "No content owners",
        ],
        cta: {
          title: "Planning AI over your organization's knowledge?",
          description: "Talk to ZSpace about [[/services/ai-automation|enterprise RAG development]] and [[/services/website-development|connectors, APIs and deployment]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Enterprise RAG succeeds on permissions, freshness and ownership as much as on retrieval quality. Related: [[/blogs/retrieval-augmented-generation|RAG guide]], [[/blogs/ai-knowledge-base|AI knowledge base]] and [[/blogs/vector-databases-for-ai|vector databases]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 584 · VECTOR DATABASES FOR AI
  {
    slug: "vector-databases-for-ai",
    title: "Vector Databases for AI: How They Work and When to Use Them",
    seoTitle: "Vector Databases: How They Work, pgvector vs Dedicated, Selection",
    excerpt:
      "How vector databases work and how to choose one: approximate nearest neighbour indexes such as HNSW, filtering, hybrid search, scaling, cost, and when Postgres with pgvector is enough.",
    category: "AI & Automation",
    banner: "vectordbmap",
    bannerAlt:
      "Vector databases in four columns: store (vectors, metadata, source IDs, tenants), index highlighted (HNSW, IVF, quantization, rebuilds), query (k-nearest neighbours, filters, hybrid, thresholds) and operate (backups, scaling, cost, monitoring).",
    date: "2026-10-03",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation", "website-development"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce"],
    relatedSlugs: ["vector-embeddings-explained", "hybrid-search-for-rag", "retrieval-augmented-generation"],
    faqs: [
      { q: "What is a vector database?", a: "A database designed to store vector embeddings and find the vectors most similar to a query vector quickly, usually with approximate nearest neighbour indexes, along with metadata filtering." },
      { q: "Do I need a dedicated vector database?", a: "Not always. If your data already lives in Postgres and volumes are moderate, the pgvector extension is often enough. Dedicated vector databases help at large scale or when you need advanced vector features." },
      { q: "What is approximate nearest neighbour search?", a: "Search that finds vectors very close to the query without comparing against every stored vector, trading a small amount of accuracy for large speed gains. HNSW and IVF are common index types." },
      { q: "What is HNSW?", a: "Hierarchical Navigable Small World, a graph-based index that gives fast, accurate approximate nearest neighbour search at the cost of memory and build time." },
      { q: "How does filtering work with vector search?", a: "Metadata filters (for example tenant, permission or date) restrict results. With approximate indexes, filtering can return fewer results than requested; some systems scan further, as pgvector's iterative index scans do since version 0.8.0." },
      { q: "Can vector databases do keyword search?", a: "Some support hybrid search combining vector and keyword or sparse-vector retrieval. Search engines such as Elasticsearch also support vector search." },
      { q: "How much does a vector database cost?", a: "Costs depend on the number of vectors, dimensions, index type, replicas and query volume. Reducing dimensions or using quantization can cut memory and cost." },
      { q: "Which vector database should I choose?", a: "Choose by data location, scale, filtering needs, hybrid search, operations and team skills. Test with your own data and queries rather than relying on generic benchmarks." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A vector database stores embeddings with metadata and quickly finds the vectors nearest to a query, using approximate nearest neighbour indexes such as HNSW or IVF. It powers semantic search and RAG retrieval. If your data already lives in Postgres and scale is moderate, pgvector is often enough; dedicated vector databases suit large scale or advanced vector features; search engines suit teams that need strong keyword and hybrid search. Choose by filtering needs, scale, hybrid search, operations and cost, tested on your own data.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Vectors come from [[/blogs/vector-embeddings-explained|embedding models]]. Retrieval quality usually improves with [[/blogs/hybrid-search-for-rag|hybrid search]] and [[/blogs/rag-reranking|reranking]]. The full pipeline is in [[/blogs/retrieval-augmented-generation|the RAG guide]], and product search use is in [[/blogs/ecommerce-semantic-search|ecommerce semantic search]].",
        ],
      },
      {
        heading: "How Vector Search Works",
        body: [
          "Each item (a document chunk, product or image) is stored as a vector: a list of numbers produced by an embedding model. A query is embedded the same way, and the database returns the stored vectors with the smallest distance (cosine, dot product or Euclidean). Comparing against every vector is exact but slow at scale, so databases build approximate nearest neighbour (ANN) indexes that find near-best matches quickly.",
        ],
        table: {
          headers: ["Index type", "How it works", "Trade-offs"],
          rows: [
            ["Flat (exact)", "Compare with every vector", "Exact, slow at scale"],
            ["HNSW", "Multi-layer proximity graph", "Fast and accurate; more memory, slower builds"],
            ["IVF", "Cluster vectors, search nearest clusters", "Less memory; needs training and tuning"],
            ["Quantization", "Compress vectors", "Lower memory and cost; some accuracy loss"],
          ],
        },
      },
      {
        heading: "Filtering and Multi-Tenancy",
        body: [
          "Real queries filter: this customer's documents, this product line, content the user may see. With approximate indexes, filters applied after the index scan can return too few results. Systems handle this differently: pre-filtering, filtered index traversal or scanning further. pgvector added [[https://github.com/pgvector/pgvector|iterative index scans]] in version 0.8.0 for this reason. For multi-tenant products, decide between shared indexes with tenant filters and separate indexes per tenant based on isolation needs and scale.",
        ],
      },
      {
        heading: "Choosing the Type of System",
        body: [],
        diagram: {
          variant: "vectordbcompare",
          alt: "Comparison of Postgres with pgvector, dedicated vector databases and search engines by when each is good, strengths, what to watch for and filtering; the note says choose by data, scale and team rather than benchmarks alone.",
          caption: "The best vector store is often the one that fits the data you already run.",
        },
      },
      {
        heading: "Postgres and pgvector",
        body: [
          "pgvector adds vector types and indexes to Postgres. You get transactions, joins with business tables, SQL filtering and your existing backups and operations. It supports HNSW and IVFFlat indexes, half-precision vectors (halfvec) for smaller indexes and iterative scans for filtered queries. It suits many RAG and semantic search systems; at very large scale or with heavy query loads, tuning and dedicated infrastructure become more important.",
        ],
        cta: {
          title: "Choosing a vector store for your AI application?",
          description: "ZSpace can benchmark pgvector, dedicated vector databases and search engines on your own data and queries before you commit.",
        },
      },
      {
        heading: "Dedicated Vector Databases and Search Engines",
        body: [
          "Dedicated vector databases such as Qdrant, Pinecone, Weaviate and Milvus focus on vector workloads: scaling, filtering, quantization and often hybrid search with sparse vectors. Search engines such as Elasticsearch and OpenSearch combine mature keyword search with vector search and rank fusion, which suits content-heavy retrieval. Each adds a system to operate or a managed service to pay for.",
        ],
      },
      {
        heading: "Selection Criteria",
        body: [],
        checklist: [
          "Where your source data already lives",
          "Number of vectors now and in two years, and dimensions",
          "Filtering complexity and permission requirements",
          "Need for keyword or hybrid search",
          "Latency and throughput targets",
          "Managed service versus self-hosting, and data residency",
          "Team familiarity and operational tooling",
          "Total cost including replicas and re-indexing",
        ],
      },
      {
        heading: "Operations and Cost",
        body: [
          "Plan for backups, re-indexing when embedding models change, index rebuild times, memory usage (HNSW indexes can be large), replicas for availability and monitoring of recall and latency. Reduce cost with smaller embedding dimensions where quality allows, quantization, and removing stale vectors.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [],
        table: {
          headers: ["Advantages", "Limitations"],
          rows: [
            ["Fast semantic search at scale", "Approximate results; recall must be measured"],
            ["Find similar items without exact terms", "Weak on exact codes without hybrid search"],
            ["Metadata filtering and multi-tenancy", "Filtering and ANN interact in tricky ways"],
            ["Managed options reduce operations", "Another system and cost to manage"],
          ],
        },
      },
      {
        heading: "How to Choose Step by Step",
        body: [],
        checklist: [
          "**1. Write down data size, filters and latency needs**",
          "**2. Shortlist** pgvector, one dedicated database and one search engine",
          "**3. Load a realistic sample** with your embeddings and metadata",
          "**4. Run your real queries** and measure recall, latency and filtered results",
          "**5. Estimate cost** at expected scale",
          "**6. Decide**, documenting re-indexing and backup plans",
        ],
      },
      {
        heading: "Example: Vector Search in Postgres With pgvector",
        body: [
          "For teams already on Postgres, a minimal setup looks like this. Check the pgvector documentation for current syntax and tuning parameters.",
        ],
        code: {
          label: "Example: pgvector table, HNSW index and filtered query (illustrative SQL)",
          text: "CREATE EXTENSION IF NOT EXISTS vector;\n\nCREATE TABLE doc_chunks (\n  id bigserial PRIMARY KEY,\n  tenant_id uuid NOT NULL,\n  source_id text NOT NULL,\n  content text NOT NULL,\n  embedding vector(1024) NOT NULL\n);\n\nCREATE INDEX ON doc_chunks USING hnsw (embedding vector_cosine_ops);\nCREATE INDEX ON doc_chunks (tenant_id);\n\n-- with filtered queries, consider iterative index scans (pgvector 0.8.0+)\nSET hnsw.iterative_scan = relaxed_order;\n\nSELECT id, source_id, content\nFROM doc_chunks\nWHERE tenant_id = $1\nORDER BY embedding <=> $2   -- cosine distance to the query embedding\nLIMIT 20;",
        },
      },
      {
        heading: "Sizing and Capacity Planning",
        body: [
          "Estimate vectors (chunks per document times documents, including growth), dimensions and precision to size storage and memory. Graph indexes such as HNSW perform best when they fit in memory. Reduce footprint with shorter embeddings where quality allows, half-precision or quantized vectors, and removing stale content. Plan capacity for re-indexing, which can temporarily double storage, and for query peaks. Load-test with realistic filters, not just unfiltered nearest-neighbour queries.",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a SaaS company adds document Q&A for customers. Its data is already in Postgres, with a few million chunks across tenants. pgvector with an HNSW index, tenant filters and iterative scans meets latency targets in testing, avoiding a new system. The team documents a threshold at which it would revisit a dedicated vector database.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Choosing from benchmarks that do not match your filters",
          "Ignoring filtered-query recall",
          "No plan for re-embedding",
          "Vector-only retrieval for content full of identifiers",
          "Over-provisioning dimensions and replicas",
        ],
        cta: {
          title: "Need retrieval infrastructure that scales sensibly?",
          description: "Talk to ZSpace about [[/services/ai-automation|RAG and vector search development]] and [[/services/website-development|database and backend architecture]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Vector databases make semantic retrieval fast, but the right choice depends on your data, filters and team. Start with what you already run, measure filtered recall and add specialised systems only when needed. Related: [[/blogs/vector-embeddings-explained|vector embeddings]], [[/blogs/hybrid-search-for-rag|hybrid search]] and [[/blogs/retrieval-augmented-generation|RAG]].",
        ],
      },
    ],
  },
];
