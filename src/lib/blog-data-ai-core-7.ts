import type { BlogPost } from "./blog-data";

/**
 * AI knowledge hub, part seven: retrieval techniques. Embedding model facts
 * follow OpenAI's embeddings guide (text-embedding-3 models, the
 * `dimensions` parameter); hybrid search behaviour follows Elasticsearch,
 * Weaviate and Qdrant documentation (RRF with a default rank constant of 60
 * in Elasticsearch). No benchmark numbers are quoted. Merged into `posts`
 * in blog-data.ts.
 */

export const aiCorePosts7: BlogPost[] = [
  // ---------------------------------------- 585 · VECTOR EMBEDDINGS EXPLAINED
  {
    slug: "vector-embeddings-explained",
    title: "Vector Embeddings Explained: How AI Converts Data Into Meaning",
    seoTitle: "Vector Embeddings Explained: Models, Dimensions and Similarity",
    excerpt:
      "What vector embeddings are and how they work: embedding models, dimensions, semantic similarity, distance metrics, storage, multilingual and multimodal embeddings, limitations and how to choose a model.",
    category: "AI & Automation",
    banner: "embeddingflow",
    bannerAlt:
      "Embedding flow: text, embedding model (highlighted), vector, store and index, query vector, nearest neighbours; the note says similar meaning produces nearby vectors if the model fits your data.",
    date: "2026-10-03",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce"],
    relatedSlugs: ["vector-databases-for-ai", "rag-chunking-strategies", "hybrid-search-for-rag"],
    faqs: [
      { q: "What is a vector embedding?", a: "A list of numbers produced by a model that represents a piece of content, such as a sentence, document, image or product, so that items with similar meaning end up close together in that numeric space." },
      { q: "How are embeddings different from language models?", a: "An embedding model turns input into a fixed-length vector for comparison and search. A generative language model produces text. RAG systems typically use both: embeddings to retrieve, a language model to answer." },
      { q: "What do embedding dimensions mean?", a: "The length of the vector, for example 1,024 or 3,072 numbers. More dimensions can capture more nuance but cost more to store and search. Some models let you shorten vectors with a small quality trade-off." },
      { q: "How is similarity measured?", a: "Usually with cosine similarity or dot product between vectors; Euclidean distance is also used. Use the metric the model was designed for." },
      { q: "Can I mix embeddings from different models?", a: "No. Vectors from different models live in different spaces. If you change models, re-embed all content." },
      { q: "Do embeddings understand exact codes and numbers?", a: "Often poorly. Product codes, IDs, rare names and numbers may not be represented precisely, which is why hybrid search with keyword matching is common." },
      { q: "Are there multilingual embeddings?", a: "Yes. Multilingual models place text in different languages in a shared space, so a query in one language can find content in another, with quality varying by language." },
      { q: "How do I choose an embedding model?", a: "Test candidates on your own content and queries, measuring retrieval recall, then weigh dimensions, cost, latency, language support, context length and where the model can run." },
      { q: "Are embeddings personal data?", a: "Embeddings derived from personal data can still relate to individuals and may allow some information to be inferred. Treat them with the same care as the source data." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A vector embedding is a list of numbers that an embedding model produces to represent content so that items with similar meaning are close together. Embeddings power semantic search, RAG retrieval, recommendations, clustering and deduplication: you embed your content once, embed each query the same way, and find the nearest vectors. They capture meaning and paraphrase well but handle exact codes, rare names and numbers poorly, and vectors from different models cannot be mixed. Choose a model by testing retrieval on your own data.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Embeddings are stored and searched in [[/blogs/vector-databases-for-ai|vector databases]], created from [[/blogs/rag-chunking-strategies|chunks]] and combined with keyword search in [[/blogs/hybrid-search-for-rag|hybrid search]]. Their role in RAG is covered in [[/blogs/retrieval-augmented-generation|the RAG guide]], and in product search in [[/blogs/ecommerce-semantic-search|ecommerce semantic search]].",
        ],
      },
      {
        heading: "How Embeddings Work",
        body: [
          "An embedding model reads input and outputs a fixed-length vector. Training teaches the model to place related inputs near each other: 'How do I reset my password?' lands near 'Forgot login credentials', even with no words in common. Distance between vectors becomes a measure of semantic similarity, computed with cosine similarity, dot product or Euclidean distance.",
        ],
        diagram: {
          variant: "embeddingtradeoffs",
          alt: "What embeddings capture and miss, in four columns: captures (meaning, paraphrases, topics, cross-language with multilingual models), misses highlighted (exact codes, rare names, negation, numbers), choices (model, dimensions, distance metric, chunk size) and costs (embedding calls, storage, re-embedding, index memory).",
          caption: "The 'misses' column is why most production retrieval combines embeddings with keyword search.",
        },
      },
      {
        heading: "Embeddings vs Language Models",
        body: [
          "Both are neural networks, but they do different jobs. An embedding model compresses input into a vector for comparison; it does not write answers. A generative model produces text. In RAG, the embedding model finds relevant passages and the language model reads them and answers. Using a generative model for retrieval is possible but usually slower and costlier than embeddings plus reranking.",
        ],
      },
      {
        heading: "Dimensions, Storage and Cost",
        body: [
          "Embedding models output vectors of a fixed size, often hundreds to a few thousand dimensions. More dimensions can capture more detail but increase storage, memory and search cost. Some models are trained so vectors can be shortened: OpenAI's [[https://developers.openai.com/api/docs/guides/embeddings|text-embedding-3 models]] accept a dimensions parameter, letting you trade some quality for smaller vectors. Storage types such as half-precision vectors and quantization reduce cost further.",
        ],
        table: {
          headers: ["Decision", "Options", "Trade-off"],
          rows: [
            ["Model", "Hosted API or self-hosted open model", "Quality, cost, data control"],
            ["Dimensions", "Full or shortened vectors", "Quality versus storage and speed"],
            ["Precision", "Full, half or quantized", "Memory versus accuracy"],
            ["Distance metric", "Cosine, dot product, Euclidean", "Use what the model expects"],
          ],
        },
      },
      {
        heading: "Types of Embeddings",
        body: [],
        checklist: [
          "**Text embeddings** for documents, questions and messages",
          "**Multilingual embeddings** for cross-language retrieval",
          "**Code embeddings** for searching source code",
          "**Image and multimodal embeddings** for matching images with text",
          "**Sparse embeddings** that weight specific terms, often used in hybrid search",
          "**Late-interaction models** that keep token-level vectors for more precise matching at higher cost",
        ],
        cta: {
          title: "Choosing an embedding model for your data?",
          description: "ZSpace Labs evaluates embedding models on your own documents and queries, balancing retrieval quality, cost and where data is processed.",
        },
      },
      {
        heading: "Limitations to Plan For",
        body: [
          "Embeddings blur exact details: part numbers, account IDs and rare surnames may not match reliably. Negation ('not compatible with') and numerical comparisons are weak. Long passages compress many ideas into one vector, so chunking matters. Domain jargon may be poorly represented by general models. Switching models means re-embedding everything. Plan hybrid search, sensible chunking and re-embedding budgets from the start.",
        ],
      },
      {
        heading: "Choosing an Embedding Model",
        body: [],
        checklist: [
          "**1. Build a test set** of real queries and the passages that should be found",
          "**2. Shortlist models** by language support, context length and deployment options",
          "**3. Embed a representative sample** with each candidate",
          "**4. Measure recall at k** and ranking quality on your test set",
          "**5. Compare cost, latency and storage** at expected scale",
          "**6. Check data handling terms** for hosted models",
          "**7. Version embeddings** with the model name so re-embedding is manageable",
        ],
      },
      {
        heading: "Privacy and Security",
        body: [
          "Embeddings derived from personal or confidential text should be protected like the source data; research has shown some information can be inferred from vectors. Apply access controls, encryption and retention rules to vector stores, and check how embedding API providers handle inputs. The OWASP LLM Top 10 lists vector and embedding weaknesses as a risk category.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [],
        table: {
          headers: ["Advantages", "Limitations"],
          rows: [
            ["Find content by meaning, not keywords", "Weak on exact identifiers and numbers"],
            ["Work across languages with multilingual models", "Quality varies by domain and language"],
            ["Cheap to compute compared with generation", "Re-embedding needed when models change"],
            ["Useful beyond search: clustering, deduplication", "Can encode sensitive information"],
          ],
        },
      },
      {
        heading: "Embeddings Beyond Search",
        body: [],
        table: {
          headers: ["Use", "How embeddings help"],
          rows: [
            ["Semantic search and RAG", "Find passages by meaning"],
            ["Recommendations", "Find similar products, articles or cases"],
            ["Clustering", "Group support tickets or feedback by theme"],
            ["Deduplication", "Detect near-duplicate records or documents"],
            ["Classification", "Train light classifiers on embedding features"],
            ["Routing", "Match requests to the most similar handler or template"],
          ],
        },
      },
      {
        heading: "Re-Embedding and Versioning",
        body: [
          "Embedding models improve, and switching models means re-embedding everything, because vectors from different models are not comparable. Store the model name and version with every vector, keep the source text so you can re-embed, and plan migrations as a background job that builds a new index while the old one serves traffic, then switch once evaluation confirms the new index performs better. Budget for the embedding cost of the whole corpus when you plan a migration.",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: an industrial supplier's semantic search finds 'replacement seal for hydraulic pump' well but misses exact part numbers. Testing shows the embedding model is fine for descriptions, so the team keeps it and adds keyword search for identifiers with rank fusion. They also shorten vectors to a smaller dimension after confirming recall barely changes, cutting index memory.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Choosing a model from a leaderboard without testing on your data",
          "Mixing vectors from different models",
          "Relying on embeddings for exact identifiers",
          "Embedding whole documents as single vectors",
          "No record of which model produced which vectors",
        ],
        cta: {
          title: "Building semantic search or RAG?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|embeddings, retrieval and RAG development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Embeddings turn meaning into geometry, which makes semantic retrieval possible. Test models on your data, plan for their blind spots with hybrid search and keep track of versions. Related: [[/blogs/vector-databases-for-ai|vector databases]], [[/blogs/hybrid-search-for-rag|hybrid search]] and [[/blogs/rag-chunking-strategies|chunking]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 586 · RAG CHUNKING STRATEGIES
  {
    slug: "rag-chunking-strategies",
    title: "RAG Chunking Strategies: How to Prepare Documents for AI Retrieval",
    seoTitle: "RAG Chunking Strategies: How to Split Documents for Retrieval",
    excerpt:
      "How to chunk documents for RAG: fixed-size, recursive, structure-aware and semantic chunking, chunk size and overlap, tables, metadata, parent-document retrieval and how to test chunking choices.",
    category: "AI & Automation",
    banner: "chunkingmethods",
    bannerAlt:
      "Comparison of fixed-size, recursive, structure-aware (highlighted) and semantic chunking by how each splits, what it is best for and its main risk.",
    date: "2026-10-03",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["professional-services", "saas-technology"],
    relatedSlugs: ["retrieval-augmented-generation", "vector-embeddings-explained", "rag-reranking"],
    faqs: [
      { q: "What is chunking in RAG?", a: "Splitting documents into smaller passages before embedding and indexing them, so retrieval can return the specific parts that answer a question rather than whole documents." },
      { q: "What is the best chunk size for RAG?", a: "There is no universal best size. Chunks must be small enough to be specific and large enough to make sense alone; many systems land somewhere between a paragraph and a short section. Test sizes on your own questions." },
      { q: "Should chunks overlap?", a: "Modest overlap can help when splits cut through ideas, especially with fixed-size chunking. Structure-aware chunking that splits at section boundaries needs less overlap." },
      { q: "What is structure-aware chunking?", a: "Splitting by the document's own structure, such as headings, sections, list items and table boundaries, and keeping headings attached to the text beneath them." },
      { q: "What is semantic chunking?", a: "Splitting where the topic changes, detected by comparing embeddings of consecutive sentences. It can produce coherent chunks but adds cost and variability." },
      { q: "How should tables be chunked?", a: "Keep tables intact where possible, or split by rows while repeating the header row, and store a textual description or caption so the table is retrievable." },
      { q: "What is parent-document retrieval?", a: "Retrieving small chunks for precise matching, then giving the model the larger parent section they belong to, so it has enough context to answer." },
      { q: "What metadata should each chunk have?", a: "Source document, title, section heading path, page, date, owner, document type and access permissions, which support filtering, citations and freshness." },
      { q: "How do I test chunking strategies?", a: "Build a question set with known source passages, index the corpus with each strategy and compare retrieval recall and answer quality." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Chunking splits documents into passages for retrieval. For most business documents, structure-aware chunking works best: split at headings and sections, keep headings attached to their text, keep tables and lists intact, and add metadata such as source, section path, date and permissions to every chunk. Use recursive splitting as a general fallback, modest overlap where splits cut ideas, and parent-document retrieval when small chunks lack context. There is no universal chunk size; test strategies against real questions and measure retrieval recall.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Chunking is part of the indexing phase in [[/blogs/retrieval-augmented-generation|RAG]], before [[/blogs/vector-embeddings-explained|embeddings]] are created. Ranking retrieved chunks is covered in [[/blogs/rag-reranking|reranking]], and document parsing at scale in [[/blogs/enterprise-rag-architecture|enterprise RAG architecture]].",
        ],
      },
      {
        heading: "Why Chunking Matters",
        body: [
          "Retrieval returns chunks, not documents. If a chunk cuts a definition in half, mixes two unrelated topics or loses the heading that gives it meaning, the right answer may never be retrieved, or may be retrieved without the context the model needs. Many RAG quality problems blamed on the model are chunking problems.",
        ],
      },
      {
        heading: "Chunking Strategies Compared",
        body: [],
        table: {
          headers: ["Strategy", "How it splits", "Strengths", "Weaknesses"],
          rows: [
            ["Fixed size", "Every N tokens, optional overlap", "Simple, predictable", "Cuts mid-sentence and mid-idea"],
            ["Recursive", "Tries paragraphs, then sentences, then words", "Good general default", "Ignores document semantics"],
            ["Structure-aware", "Headings, sections, lists, tables", "Coherent, citable chunks", "Needs good parsing"],
            ["Semantic", "Where topic shifts", "Coherent for narrative text", "Extra cost, variable sizes"],
            ["Document-specific", "Custom rules per format (FAQs, contracts, code)", "Best fit for known formats", "More engineering"],
          ],
        },
      },
      {
        heading: "Structure-Aware Chunking in Practice",
        body: [
          "Parse the document into its structure first: headings, paragraphs, lists, tables, code blocks. Split at section boundaries, merge very small sections with neighbours, and split very long sections recursively. Prepend the heading path ('HR Policy > Leave > Parental leave') to each chunk's text or metadata so it carries context. FAQs become one chunk per question and answer; contracts often split by clause.",
        ],
        diagram: {
          variant: "chunkflow",
          alt: "Chunking flow: parse document, keep structure (highlighted), split by section, set size and overlap, add metadata, test retrieval.",
          caption: "Keeping structure is the step that most improves retrieval for business documents.",
        },
      },
      {
        heading: "Chunk Size and Overlap",
        body: [
          "Smaller chunks match questions precisely but may lack context; larger chunks carry context but dilute the embedding and cost more tokens when retrieved. Start around a paragraph to a short section, then test smaller and larger variants. Overlap of a sentence or two helps fixed-size chunking; structure-aware chunking usually needs little. Check your embedding model's input limit and avoid silently truncated chunks.",
        ],
        cta: {
          title: "RAG answers missing information that is clearly in your documents?",
          description: "ZSpace Labs can audit parsing and chunking on your corpus and test alternatives against real questions.",
        },
      },
      {
        heading: "Tables, Lists and Special Content",
        body: [
          "Parsing, OCR and transcription before chunking are covered in [[/blogs/unstructured-data-processing-ai|unstructured data processing]].",
        ],
        checklist: [
          "Keep small tables whole; split large tables by row groups and repeat headers",
          "Add a caption or summary sentence so tables are findable by meaning",
          "Keep numbered steps together where possible",
          "Treat code blocks as units",
          "Use OCR and layout parsing for scanned PDFs before chunking",
          "Drop boilerplate such as repeated headers, footers and navigation",
        ],
      },
      {
        heading: "Metadata and Parent-Document Retrieval",
        body: [
          "Every chunk should carry metadata: source ID, title, heading path, page, date, document type, owner and access groups. Metadata supports filtering, citations and freshness. Parent-document retrieval indexes small chunks but returns the surrounding section to the model, combining precise matching with enough context. Some systems also index a short summary per document to help with broad questions.",
        ],
      },
      {
        heading: "Testing Chunking Choices",
        body: [],
        checklist: [
          "**1. Build a question set** with the passages that answer each question",
          "**2. Index the same corpus** with two or three strategies",
          "**3. Measure recall at k** and where the right chunk ranks",
          "**4. Check answer quality** end to end on a sample",
          "**5. Inspect failures** to see whether splits, headings or tables caused them",
          "**6. Pick the strategy** and document it with the index version",
        ],
      },
      {
        heading: "Advantages and Limitations of Each Approach",
        body: [
          "Simple strategies are fast to build and good enough for uniform text. Structure-aware chunking gives the best results on manuals, policies and documentation but depends on parsing quality. Semantic chunking helps with long narrative text but adds cost and makes results less predictable. Whatever you choose, re-chunking means re-embedding, so test before indexing everything.",
        ],
      },
      {
        heading: "Chunking by Document Type",
        body: [],
        table: {
          headers: ["Document type", "Recommended approach"],
          rows: [
            ["Policies and handbooks", "Section-based with heading paths"],
            ["FAQs", "One question and answer per chunk"],
            ["Contracts", "Clause-based, keeping definitions retrievable"],
            ["Product documentation", "Section-based; keep code blocks and steps together"],
            ["Support tickets", "Summarize or chunk resolution separately from conversation"],
            ["Spreadsheets and tables", "Row groups with headers, plus a table summary"],
            ["Transcripts", "Time or topic windows with speaker labels"],
          ],
        },
      },
      {
        heading: "Adding Context to Each Chunk",
        body: [
          "A chunk that says 'the limit is 30 days' is useless without knowing which policy it belongs to. Besides heading paths, some teams prepend a short, generated description of where the chunk sits in its document before embedding it, an approach Anthropic has described as contextual retrieval. It can improve retrieval for chunks that are ambiguous on their own, at the cost of an extra model call per chunk during indexing. Test whether it helps on your corpus before applying it everywhere.",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a company indexes its employee handbook with fixed 500-token chunks. Questions about parental leave return chunks that start mid-policy without the heading. Switching to section-based chunks with heading paths and keeping eligibility tables intact makes the correct section the top result for most leave questions in the test set.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "One chunk size for every document type",
          "Losing headings and table structure during parsing",
          "Chunks larger than the embedding model's input limit",
          "No metadata for filtering and citations",
          "Changing chunking without re-running evaluations",
        ],
        cta: {
          title: "Preparing a document corpus for AI retrieval?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|RAG development and document pipelines]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Good chunking keeps meaning intact: split by structure, keep context with each chunk, handle tables carefully and test against real questions. Related: [[/blogs/retrieval-augmented-generation|RAG guide]], [[/blogs/vector-embeddings-explained|embeddings]] and [[/blogs/rag-reranking|reranking]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 587 · RAG RERANKING
  {
    slug: "rag-reranking",
    title: "RAG Reranking: How to Improve Retrieval Accuracy in AI Applications",
    seoTitle: "RAG Reranking: Cross-Encoders, Candidate Sets and Evaluation",
    excerpt:
      "How reranking improves RAG: two-stage retrieval, cross-encoder and LLM rerankers, candidate set size, relevance scores and thresholds, latency and cost, and how to evaluate the gain.",
    category: "AI & Automation",
    banner: "rerankflow",
    bannerAlt:
      "Reranking flow: query, retrieve top 50, rerank model (highlighted), keep top 5 to 10, generate, measure; the note says fast recall comes first and precise ordering second.",
    date: "2026-10-03",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "professional-services"],
    relatedSlugs: ["hybrid-search-for-rag", "retrieval-augmented-generation", "rag-chunking-strategies"],
    faqs: [
      { q: "What is reranking in RAG?", a: "A second retrieval stage in which a more precise model re-scores the candidates returned by the first stage, so the most relevant passages are placed at the top and passed to the language model." },
      { q: "Why not use the reranker for all retrieval?", a: "Rerankers read the query and each candidate together, which is accurate but too slow for millions of documents. The first stage quickly narrows the field; the reranker orders a small candidate set." },
      { q: "What is a cross-encoder?", a: "A model that takes the query and a passage together as input and outputs a relevance score, capturing interactions between them that separate embeddings miss." },
      { q: "How many candidates should be reranked?", a: "Often a few dozen to around a hundred, depending on latency budget and first-stage recall. Measure whether a larger candidate set finds more correct passages." },
      { q: "Can a language model rerank results?", a: "Yes, by asking it to judge or order passages. It can be accurate but is usually slower and costlier than dedicated rerankers, so it suits small candidate sets or offline work." },
      { q: "Do reranker scores tell me if a passage is relevant?", a: "Scores order candidates; with calibration on your data they can also support thresholds, such as refusing to answer when no passage scores above a minimum." },
      { q: "How much latency does reranking add?", a: "It depends on the model, hosting and number of candidates. Measure end-to-end latency and reduce candidates or use a smaller reranker if needed." },
      { q: "When is reranking not worth it?", a: "When retrieval is already precise for your questions, latency budgets are very tight or the corpus is tiny. Evaluate before adding it." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Reranking adds a precise second stage to RAG retrieval. A fast first stage (vector, keyword or hybrid search) gathers a broad candidate set, perhaps the top 50 passages; a reranker, usually a cross-encoder that reads the query and each passage together, re-scores them; and only the top few go to the language model. This often fixes cases where the right passage was retrieved but ranked too low. Tune the candidate count against latency, consider score thresholds for refusals and measure the gain on your own question set.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Reranking follows [[/blogs/hybrid-search-for-rag|hybrid search]] in the [[/blogs/retrieval-augmented-generation|RAG pipeline]]. Its gains depend on good [[/blogs/rag-chunking-strategies|chunking]], since a reranker cannot fix a chunk that lacks the answer.",
        ],
      },
      {
        heading: "Why First-Stage Retrieval Is Not Enough",
        body: [
          "Embedding search compares a query vector with passage vectors computed independently, which is fast but approximate. Keyword search matches terms but not intent. Both produce reasonable candidate sets with imperfect order. Because the language model only sees the top few passages, a relevant passage at rank 15 might as well not exist. Reranking reorders the candidates using a model that reads query and passage together.",
        ],
        diagram: {
          variant: "rerankcompare",
          alt: "Comparison of bi-encoder retrieval, cross-encoder reranking (highlighted) and LLM reranking by what each reads, speed, precision and typical use.",
          caption: "Each stage trades speed for precision; use them in sequence.",
        },
      },
      {
        heading: "How Two-Stage Retrieval Works",
        body: [],
        checklist: [
          "**Stage 1, recall:** hybrid search returns a candidate set (for example 30 to 100 passages) with permission filters applied",
          "**Stage 2, precision:** the reranker scores each candidate against the query",
          "**Selection:** keep the top few, optionally only those above a calibrated score threshold",
          "**Generation:** pass the selected passages to the model with instructions to cite them",
        ],
      },
      {
        heading: "Types of Rerankers",
        body: [],
        table: {
          headers: ["Type", "How it works", "Fits"],
          rows: [
            ["Cross-encoder models", "Score query and passage pairs", "Most RAG systems"],
            ["Hosted rerank APIs", "Managed cross-encoder style models", "Teams avoiding model hosting"],
            ["Late-interaction models", "Token-level matching", "Higher precision with some speed"],
            ["LLM-based reranking", "Language model judges or orders passages", "Small candidate sets, offline work"],
            ["Rules and signals", "Boost recency, authority or source type", "Combined with model scores"],
          ],
        },
        cta: {
          title: "Right documents retrieved but answers still wrong?",
          description: "ZSpace Labs can add and tune reranking in your RAG pipeline and measure the improvement on your own questions.",
        },
      },
      {
        heading: "Tuning Candidate Counts and Thresholds",
        body: [
          "The candidate set must contain the right passage for reranking to help, so measure first-stage recall at different sizes. Larger sets improve the chance but add latency and cost. After reranking, choose how many passages to pass on: too few risks missing context, too many adds noise and tokens. Calibrated score thresholds can trigger 'I could not find this in our documents' rather than a weak answer.",
        ],
      },
      {
        heading: "Combining Reranking With Business Signals",
        body: [
          "Relevance is not the only factor. A newer policy should outrank an older version; an official handbook should outrank a chat message. Combine reranker scores with metadata such as date, document status and source authority, or filter outdated documents before reranking.",
        ],
      },
      {
        heading: "Evaluating Reranking",
        body: [
          "Use the same question set as for retrieval evaluation. Compare, with and without reranking: the rank of the correct passage, recall at the number of passages you send to the model, answer faithfulness and correctness, and latency and cost per query. Keep reranking only if gains are clear on your data.",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [],
        table: {
          headers: ["Advantages", "Limitations"],
          rows: [
            ["Better ordering of retrieved passages", "Adds latency and cost per query"],
            ["Fewer, more relevant passages in the prompt", "Cannot recover passages the first stage missed"],
            ["Scores can support refusal thresholds", "Thresholds need calibration"],
            ["Easy to add to an existing pipeline", "Another model to host or pay for"],
          ],
        },
      },
      {
        heading: "How to Add Reranking Step by Step",
        body: [],
        checklist: [
          "**1. Measure first-stage recall** at several candidate sizes",
          "**2. Choose a reranker** that fits latency, language and hosting needs",
          "**3. Rerank the candidate set** and select the top passages",
          "**4. Compare metrics** with and without reranking",
          "**5. Tune candidate counts and thresholds**",
          "**6. Monitor latency and cost** in production",
        ],
      },
      {
        heading: "Reranking, Filters and Permissions",
        body: [
          "Apply permission and metadata filters before reranking, in the first-stage retrieval. Reranking unfiltered candidates and filtering afterwards wastes compute and risks exposing restricted content in logs or debug views. If filters remove most candidates, increase the first-stage candidate count for filtered queries rather than reranking fewer results. Keep the filter logic in the retrieval service so every application using it inherits the same rules; see [[/blogs/enterprise-rag-architecture|enterprise RAG architecture]].",
        ],
      },
      {
        heading: "Tools and Hosting Options",
        body: [
          "Rerankers are available as hosted APIs from several model providers, as open-source cross-encoder models you can run on your own infrastructure, and built into some search engines and vector databases. Hosted APIs are fastest to adopt; self-hosting gives data control and predictable cost at volume but requires GPU or optimized CPU serving. Whichever you choose, check language support for your content and measure latency at your candidate set size.",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a software company's documentation assistant retrieves the right troubleshooting page in its top 20 for most questions, but often not in the top 3 that reach the model. Adding a cross-encoder reranker over the top 40 candidates moves the correct page into the top 3 much more often in evaluation, with acceptable added latency.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Adding reranking without measuring first-stage recall",
          "Reranking too few candidates to matter",
          "Passing many reranked passages anyway, adding noise",
          "Ignoring document freshness and authority",
          "Not tracking added latency",
        ],
        cta: {
          title: "Want measurably better retrieval?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|RAG optimization and development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Reranking separates finding candidates from ordering them, which often fixes the gap between 'retrieved somewhere' and 'used in the answer'. Measure recall, tune candidates and keep it only where it helps. Related: [[/blogs/hybrid-search-for-rag|hybrid search]] and [[/blogs/retrieval-augmented-generation|RAG guide]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 588 · HYBRID SEARCH FOR RAG
  {
    slug: "hybrid-search-for-rag",
    title: "Hybrid Search for RAG: Combining Keyword and Semantic Search",
    seoTitle: "Hybrid Search for RAG: BM25, Vectors and Reciprocal Rank Fusion",
    excerpt:
      "How hybrid search works in RAG: BM25 keyword search, vector search, reciprocal rank fusion and weighted fusion, filters, sparse vectors, relevance tuning and implementation options.",
    category: "AI & Automation",
    banner: "hybridsearch",
    bannerAlt:
      "Hybrid search in four columns: keyword BM25 (exact terms, codes and SKUs, names, rare words), vector (meaning, paraphrase, synonyms, questions), fusion highlighted (RRF by rank, weighted scores, tuned on evaluation, then rerank) and filters (permissions, dates, source, language).",
    date: "2026-10-03",
    readingTime: "6 min read",
    relatedServiceSlugs: ["ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce"],
    relatedSlugs: ["rag-reranking", "vector-databases-for-ai", "retrieval-augmented-generation"],
    faqs: [
      { q: "What is hybrid search?", a: "Search that combines keyword (lexical) retrieval such as BM25 with vector (semantic) retrieval and merges the results, so queries benefit from both exact term matching and meaning-based matching." },
      { q: "Why is hybrid search better than vector search alone for RAG?", a: "Vector search can miss exact identifiers, names, error codes and rare terms; keyword search misses paraphrases. Combining them covers both, which is why many production RAG systems use hybrid retrieval." },
      { q: "What is BM25?", a: "A widely used keyword ranking function that scores documents by how often query terms appear, adjusted for term rarity and document length." },
      { q: "What is reciprocal rank fusion?", a: "A method that merges ranked lists using each document's position in each list rather than raw scores, so results from different scoring systems can be combined. Elasticsearch's implementation uses a rank constant that defaults to 60." },
      { q: "What is weighted or score fusion?", a: "Combining normalized scores from keyword and vector search with weights, such as Weaviate's alpha parameter. It needs score normalization and tuning." },
      { q: "What are sparse vectors?", a: "Vectors where most values are zero and non-zero values correspond to terms, used to represent lexical matching inside vector databases that support hybrid queries." },
      { q: "Which databases support hybrid search?", a: "Search engines such as Elasticsearch and OpenSearch, and vector databases such as Weaviate, Qdrant and Pinecone, among others. Postgres can combine full-text search with pgvector in SQL." },
      { q: "Should hybrid search be followed by reranking?", a: "Often yes. Fusion produces a good candidate set; a reranker then orders it precisely before generation." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Hybrid search runs keyword search (typically BM25) and vector search for the same query and merges the results. Keyword search catches exact terms such as product codes, names and error messages; vector search catches paraphrases and intent. Merge with reciprocal rank fusion, which combines rankings without comparing raw scores, or with tuned weighted score fusion, apply permission and metadata filters in both, then rerank the fused candidates before generation. Tune and verify the combination on your own questions.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "Hybrid search is the retrieval stage of [[/blogs/retrieval-augmented-generation|RAG]], usually followed by [[/blogs/rag-reranking|reranking]]. Storage options are compared in [[/blogs/vector-databases-for-ai|vector databases]], and the same idea applied to product search is in [[/blogs/ecommerce-semantic-search|ecommerce semantic search]].",
        ],
      },
      {
        heading: "Keyword vs Vector Search",
        body: [],
        table: {
          headers: ["", "Keyword (BM25)", "Vector (semantic)"],
          rows: [
            ["Matches", "Exact terms and their frequency", "Meaning and similarity"],
            ["Strong on", "Codes, IDs, names, rare words, quotes", "Paraphrases, synonyms, natural questions"],
            ["Weak on", "Different wording for same idea", "Exact identifiers, negation, numbers"],
            ["Infrastructure", "Inverted index", "Vector index"],
            ["Explainability", "Visible term matches", "Similarity scores"],
          ],
        },
      },
      {
        heading: "How Hybrid Retrieval Works",
        body: [],
        diagram: {
          variant: "hybridflow",
          alt: "Hybrid retrieval flow: query, keyword results, vector results, fuse with reciprocal rank fusion (highlighted), rerank, answer.",
          caption: "Fusion merges two imperfect rankings into a better candidate set for the reranker.",
        },
      },
      {
        heading: "Fusion Methods",
        body: [
          "**Reciprocal rank fusion (RRF)** gives each document a score based on its rank in each list, roughly the sum of 1 divided by (constant plus rank), and orders by that. Because it ignores raw scores, it combines very different scoring systems robustly; [[https://www.elastic.co/docs/reference/elasticsearch/rest-apis/reciprocal-rank-fusion|Elasticsearch's RRF]] uses a rank constant that defaults to 60, and Qdrant supports RRF in hybrid queries.",
          "**Weighted score fusion** normalizes scores from each method and combines them with weights. [[https://docs.weaviate.io/weaviate/concepts/search/hybrid-search|Weaviate's hybrid search]] exposes this through an alpha parameter, where 0 is pure keyword and 1 pure vector. It can outperform RRF when tuned, but tuning must be done on evaluation data.",
        ],
        code: {
          label: "Example: reciprocal rank fusion (pseudocode)",
          text: "rrf(lists, k = 60):\n  scores = {}\n  for ranked in lists:                 # e.g. [bm25_results, vector_results]\n    for rank, doc in enumerate(ranked, start = 1):\n      scores[doc] += 1 / (k + rank)\n  return sort_by_value_desc(scores)",
        },
      },
      {
        heading: "Filters and Permissions",
        body: [
          "Apply the same filters to both retrievers: permissions, tenant, product, language and date. A filter applied to only one side can leak restricted content through the other. Check how your system applies filters with approximate vector indexes, which can return fewer results after filtering.",
        ],
        cta: {
          title: "Your RAG system missing exact codes and names?",
          description: "ZSpace Labs implements hybrid retrieval with fusion, filters and reranking, tuned on your own questions.",
        },
      },
      {
        heading: "Implementation Options",
        body: [],
        table: {
          headers: ["Option", "How hybrid works", "Notes"],
          rows: [
            ["Elasticsearch / OpenSearch", "BM25 plus kNN with RRF or combined queries", "Mature keyword search"],
            ["Weaviate", "Built-in hybrid with alpha weighting", "Single query API"],
            ["Qdrant", "Dense and sparse vectors with prefetch and fusion", "RRF and distribution-based fusion"],
            ["Pinecone", "Sparse-dense vectors", "Managed service"],
            ["Postgres", "Full-text search plus pgvector, fused in SQL or code", "Keeps data in one database"],
          ],
        },
      },
      {
        heading: "Tuning Relevance",
        body: [],
        checklist: [
          "Build a question set that includes identifier lookups and natural-language questions",
          "Measure recall for keyword only, vector only and hybrid",
          "Tune candidate counts per retriever and fusion parameters",
          "Configure analyzers for your language, synonyms and code formats",
          "Add reranking and measure again",
          "Re-test when content or embedding models change",
        ],
      },
      {
        heading: "Advantages and Limitations",
        body: [
          "Hybrid search reliably improves recall across mixed query types and makes retrieval more robust. It adds two indexes to maintain, more parameters to tune and slightly more latency. For small, uniform corpora where one method already performs well, the extra complexity may not be needed.",
        ],
      },
      {
        heading: "How to Implement Step by Step",
        body: [],
        checklist: [
          "**1. Add a keyword index** alongside the vector index, with the same chunks and metadata",
          "**2. Run both retrievers** with identical filters",
          "**3. Fuse with RRF** as a robust default",
          "**4. Rerank the fused candidates**",
          "**5. Evaluate** against single-method baselines",
          "**6. Tune** weights or fusion parameters only with evaluation data",
        ],
      },
      {
        heading: "Example: Hybrid Search in Postgres",
        body: [
          "Teams already on Postgres can combine built-in full-text search with pgvector and fuse results with reciprocal rank fusion in SQL. It is not as feature-rich as a search engine, but it keeps everything in one database.",
        ],
        code: {
          label: "Example: keyword plus vector retrieval fused with RRF (illustrative SQL)",
          text: "WITH keyword AS (\n  SELECT id, row_number() OVER (ORDER BY ts_rank_cd(tsv, q) DESC) AS rank\n  FROM doc_chunks, websearch_to_tsquery('english', $1) q\n  WHERE tsv @@ q AND tenant_id = $3\n  ORDER BY ts_rank_cd(tsv, q) DESC LIMIT 50\n),\nsemantic AS (\n  SELECT id, row_number() OVER (ORDER BY embedding <=> $2) AS rank\n  FROM doc_chunks\n  WHERE tenant_id = $3\n  ORDER BY embedding <=> $2 LIMIT 50\n)\nSELECT id, SUM(1.0 / (60 + rank)) AS rrf_score\nFROM (SELECT * FROM keyword UNION ALL SELECT * FROM semantic) r\nGROUP BY id\nORDER BY rrf_score DESC\nLIMIT 20;",
        },
      },
      {
        heading: "Which Retriever Wins for Which Query",
        body: [],
        table: {
          headers: ["Query type", "Usually best", "Example"],
          rows: [
            ["Exact identifier", "Keyword", "'Error E-4021 on startup'"],
            ["Natural question", "Vector", "'Why does my laptop lose VPN after sleep?'"],
            ["Name or rare term", "Keyword", "'Halvorsen clause'"],
            ["Concept with varied wording", "Vector", "'staff leave when a child is born'"],
            ["Mixed", "Hybrid", "'refund policy for SKU 88-210 bought online'"],
          ],
        },
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: an IT support assistant searches internal runbooks. Vector-only retrieval handles 'laptop won't connect to VPN' but misses queries quoting exact error codes. Adding BM25 and fusing with RRF makes error-code queries retrieve the right runbook, while natural-language questions perform as before.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Vector-only retrieval for identifier-heavy content",
          "Different filters on the two retrievers",
          "Combining raw scores without normalization",
          "Tuning weights on a handful of queries",
          "Skipping reranking after fusion",
        ],
        cta: {
          title: "Need retrieval that handles every kind of question?",
          description: "Talk to ZSpace Labs about [[/services/ai-automation|hybrid search and RAG development]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Hybrid search combines the precision of keywords with the flexibility of meaning. Fuse rankings robustly, filter consistently, rerank and measure. Related: [[/blogs/rag-reranking|reranking]], [[/blogs/vector-databases-for-ai|vector databases]] and [[/blogs/retrieval-augmented-generation|RAG guide]].",
        ],
      },
    ],
  },
];
