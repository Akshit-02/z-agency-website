import type { BlogPost } from "./blog-data";

/**
 * Listicle batch 7 (2026-10-28): four topics out of candidates 121–140 with no
 * existing article on the same primary intent. API versioning (121), feed
 * validation (129) and structured-output checks (135) became updates to
 * api-versioning, ecommerce-product-feeds and llm-structured-outputs; thirteen
 * others were already covered. No external links (owner rule).
 * Sources checked 2026-10-28:
 * - RFC 9110: idempotent methods (PUT, DELETE and safe methods). Stripe API
 *   reference, idempotent requests (Idempotency-Key header; first response
 *   saved, including 500s, for API v1; keys can be pruned after 24 hours;
 *   parameter mismatch errors; up to 255 characters; avoid personal data in
 *   keys). IETF draft-ietf-httpapi-idempotency-key-header-08 (22 Oct 2026),
 *   still an Internet-Draft: 400 when required key missing, 422 for reuse with
 *   a different payload, 409 while the original is still processing.
 * - India DPDP Act 2023, section 16 (Central Government may restrict transfers
 *   to notified countries). GDPR Chapter V (transfers to third countries).
 * - Android 14 features: font scaling up to 200%, non-linear; use sp for text
 *   and line height; test at 200%. Apple HIG typography (Dynamic Type and
 *   accessibility sizes) - page body not retrieved, so no quotes are used.
 *   W3C WCAG 2.2: 1.4.4 Resize Text, 1.4.10 Reflow, 2.3.3 Animation from
 *   Interactions.
 * - Google Analytics Help, User-ID: business-generated ID, no information a
 *   third party could use to identify the user, set to null on logout,
 *   reporting identity (Blended or Observed), no reprocessing of earlier data.
 * - Google Merchant Center product data specification (used in the
 *   ecommerce-product-feeds update).
 */
export const listiclePosts8: BlogPost[] = [
  // ------------------------------------------------ API IDEMPOTENCY PATTERNS
  {
    slug: "api-idempotency-patterns",
    title: "10 Idempotency Patterns for APIs That Process Payments, Orders and Repeated Requests",
    seoTitle: "10 API Idempotency Patterns for Payments and Orders",
    excerpt:
      "Ten idempotency patterns that stop retries creating duplicate payments and orders: idempotency keys, natural keys, upserts, event IDs, state checks and more.",
    category: "Web Development",
    banner: "apimap",
    sceneKind: "code",
    bannerAlt: "A client retrying the same payment request with an idempotency key, and the server returning the saved result instead of charging twice",
    date: "2026-10-28",
    readingTime: "10 min read",
    relatedServiceSlugs: ["website-development", "shopify-development"],
    relatedIndustrySlugs: ["fintech", "ecommerce", "saas-technology"],
    relatedSlugs: ["ecommerce-payment-failure-handling", "webhook-use-cases", "integration-failure-scenarios"],
    faqs: [
      {
        q: "What does idempotent mean for an API?",
        a: "An operation is idempotent if doing it several times has the same effect as doing it once. In HTTP, RFC 9110 defines PUT, DELETE and the safe methods such as GET as idempotent; POST is not, which is why APIs add idempotency keys to POST requests that create payments or orders.",
      },
      {
        q: "How long should idempotency keys be stored?",
        a: "Long enough to cover realistic retries. Stripe's documentation says its API v1 may prune keys once they are at least 24 hours old, after which a reused key is treated as a new request. Choose a period that covers your clients' retry behaviour and any queued or offline requests.",
      },
      {
        q: "Is there a standard Idempotency-Key header?",
        a: "The IETF HTTP APIs working group is drafting one. As of version 08 (October 2026) it is still an Internet-Draft, not an RFC, though many APIs already use a header with that name.",
      },
    ],
    content: [
      {
        heading: "How do you stop repeated requests creating duplicates?",
        body: [
          "**Make every operation that changes money or records safe to repeat. The main tools are client-supplied idempotency keys on create requests, unique natural keys and database constraints, upserts and PUT semantics for updates, event IDs for webhooks and messages, state checks before transitions, and outbox records so side effects happen once.** Store the result of the first request and return it to retries, reject reuse of a key with different data, and handle the case where the original request is still in progress.",
          "Duplicates happen because networks fail in the middle: the client times out, does not know whether the payment went through, and tries again. Users double-tap buttons, queues redeliver messages and webhooks arrive twice. This list is for developers and technical leads building APIs, checkouts and integrations. For payment-specific failure handling, see [[/blogs/ecommerce-payment-failure-handling|ecommerce payment failure handling]].",
        ],
      },
      {
        heading: "Patterns for create requests",
        body: [
          "**1. Client-supplied idempotency keys.** The client generates a unique key (a random UUID, not personal data) for each logical operation and sends it with the request, usually in an Idempotency-Key header. The server stores the key with the result and returns that same result for any retry. Stripe's documentation describes saving the status code and body of the first request made with a key, including 500 errors, for its v1 API.",
          "**2. Reject key reuse with different data.** If a retry arrives with the same key but different parameters, it is a bug, not a retry. Stripe compares parameters and returns an error; the IETF draft suggests 422 Unprocessable Content for this case.",
          "**3. Handle requests still in progress.** A retry can arrive while the first request is still running. Lock on the key and return a conflict response (the IETF draft suggests 409) or wait, rather than starting a second operation.",
          "**4. Natural keys and unique constraints.** Where the business has a natural unique reference, such as an order number from the storefront or an invoice number from the ERP, enforce uniqueness in the database. Even if application checks fail under concurrency, the constraint stops the duplicate.",
        ],
      },
      {
        heading: "Patterns for updates and state",
        body: [
          "**5. PUT and upserts for updates.** Setting a value (\"status = shipped\") is naturally idempotent; incrementing it (\"stock = stock - 1\") is not. Prefer set-style operations, or make increments conditional on a version or reference.",
          "**6. State-transition checks.** Before acting, check the current state: only capture a payment that is authorised, only ship an order that is paid. A repeated \"capture\" on an already-captured payment then becomes a no-op that returns the current state.",
          "**7. Optimistic concurrency with versions.** Include a version number or ETag with updates and reject updates based on stale data. This prevents a retried or delayed update from overwriting newer changes.",
        ],
      },
      {
        heading: "Patterns for events and side effects",
        body: [
          "**8. Event and message IDs for consumers.** Webhooks and queue messages can be delivered more than once. Record processed event IDs and skip duplicates; Stripe, Shopify and Razorpay all document duplicate deliveries. See [[/blogs/webhook-use-cases|webhook use cases]].",
          "**9. The outbox pattern for side effects.** When an operation must update the database and send an email or call another system, write the side effect to an outbox table in the same transaction, and have a worker deliver it once and mark it done. This avoids sending twice or not at all when something fails between the two steps.",
          "**10. Idempotent calls to third parties.** When your system calls a payment provider or other API, pass your own idempotency key or unique reference so your retries are safe on their side too. Most payment APIs support this.",
        ],
        cta: {
          title: "Building checkout, payments or order APIs?",
          description: "ZSpace Labs builds APIs and integrations with idempotency, retries and reconciliation designed in. See our [[/services/website-development|web application development service]].",
        },
      },
      {
        heading: "Pattern summary",
        body: [],
        table: {
          headers: ["Pattern", "Protects against", "Implementation note"],
          rows: [
            ["1. Idempotency keys", "Client retries after timeouts", "Store key, request hash and response"],
            ["2. Reject mismatched reuse", "Client bugs reusing keys", "Compare parameters; return an error"],
            ["3. In-progress handling", "Concurrent retries", "Lock per key; conflict response"],
            ["4. Natural keys and constraints", "Duplicates under concurrency", "Unique constraint in the database"],
            ["5. PUT and upserts", "Repeated updates", "Set values; avoid blind increments"],
            ["6. State checks", "Repeated transitions", "Return current state for no-ops"],
            ["7. Versions and ETags", "Stale or delayed updates", "Reject updates on old versions"],
            ["8. Event IDs", "Duplicate webhooks and messages", "Processed-events table"],
            ["9. Outbox", "Double or missing side effects", "Same-transaction outbox plus worker"],
            ["10. Keys to third parties", "Duplicates at providers", "Pass your reference downstream"],
          ],
        },
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Generating the idempotency key on the server, which makes it useless for client retries.",
          "Using personal data such as an email address as the key; Stripe's documentation advises against it.",
          "Storing keys for too short a time to cover mobile apps that retry after reconnecting.",
          "Saving the key only after the operation succeeds, so a crash in between allows a duplicate.",
          "Treating idempotency as a client concern only; the server and database must enforce it.",
          "Forgetting background jobs and scheduled tasks, which retry too.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Retries are normal; duplicates should not be. Add idempotency keys to create requests, back them with unique constraints, prefer set-style updates and state checks, deduplicate events, and use an outbox for side effects. Test by sending the same request twice, concurrently and after a simulated timeout. For the wider set of integration failures, see [[/blogs/integration-failure-scenarios|integration failure scenarios]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "IETF RFC 9110, HTTP Semantics (idempotent methods). Stripe API reference, idempotent requests. IETF HTTPAPI working group, The Idempotency-Key HTTP Header Field (draft-ietf-httpapi-idempotency-key-header-08, October 2026). Accessed 28 October 2026.",
        ],
      },
    ],
  },

  // ---------------------------------------------- DATA RESIDENCY QUESTIONS
  {
    slug: "data-residency-questions",
    title: "12 Data-Residency Questions to Answer Before Expanding an Application Internationally",
    seoTitle: "12 Data-Residency Questions Before Expanding Internationally",
    excerpt:
      "Twelve questions about where your application stores, processes, backs up and supports data before you sell in new countries, and what each decision affects.",
    category: "Web Development",
    banner: "multiregionarch",
    sceneKind: "security",
    bannerAlt: "An application's data flows mapped across regions: primary database, backups, logs, AI providers and support access, each tagged with its location",
    date: "2026-10-28",
    readingTime: "9 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["saas-technology", "fintech", "healthcare-healthtech"],
    relatedSlugs: ["multi-tenant-saas-architecture", "ai-data-privacy", "web-application-hosting-cost"],
    faqs: [
      {
        q: "What is data residency?",
        a: "Where data is physically stored and processed. Some laws, contracts or customer policies require certain data to stay in a particular country or region, or restrict transfers elsewhere. Data residency is a technical and contractual question as much as a legal one.",
      },
      {
        q: "Does choosing a local cloud region solve data residency?",
        a: "Not on its own. Backups, logs, monitoring, email, analytics, support tools and AI providers may store or process copies of the data elsewhere. You need to map every place data goes.",
      },
      {
        q: "Does India require data to be stored in India?",
        a: "India's Digital Personal Data Protection Act 2023 allows the Central Government to restrict transfers of personal data to countries it notifies, and some sectors have their own rules, such as payment data. Requirements depend on your sector and data, so take legal advice.",
      },
    ],
    content: [
      {
        heading: "What should you settle about data residency before expanding?",
        body: [
          "**Before selling in new countries, know what data you hold, which rules and customer contracts apply to it, where every copy is stored and processed (including backups, logs, analytics and AI providers), who can access it from where, whether you need regional deployments, and how you will prove all of this to customers and auditors.** The answers decide your hosting regions, your vendors and sometimes your architecture.",
          "This list is for founders and technical leads of SaaS products and business applications expanding beyond one country. It is not legal advice: requirements depend on the country, the sector, the data and your contracts. Laws such as the GDPR (which restricts transfers of personal data outside the European Economic Area unless conditions are met) and India's DPDP Act (which lets the government restrict transfers to notified countries) are examples of why the questions matter. For region-specific notes, see our [[/blogs/cloud-migration-uae|UAE cloud migration]] guide.",
        ],
      },
      {
        heading: "Know the data and the rules",
        body: [
          "**1. What data do we hold, and how sensitive is it?** Classify it: personal data, financial or payment data, health data, children's data, customer business data, and anonymous data. Residency rules usually attach to specific categories.",
          "**2. Which laws, sector rules and contracts apply?** List the countries where your customers and users are, any sector regulators (finance, health, government), and what enterprise customers' contracts and security questionnaires require. Contracts are often stricter than law.",
          "**3. Is the requirement about storage, processing, access or transfer?** These differ. Some rules require data to be stored locally; others allow transfers with safeguards; some care mainly about who can access it.",
        ],
      },
      {
        heading: "Map every copy",
        body: [
          "**4. Where is the primary data stored and processed?** Database, file storage and application servers, by cloud region.",
          "**5. Where do backups and disaster-recovery copies go?** Cross-region backups are good for resilience and can conflict with residency. Decide deliberately.",
          "**6. Where do logs, monitoring and error-tracking data go?** Logs often contain personal data such as emails, IP addresses or request bodies, and many monitoring services store data in one region by default.",
          "**7. Which third-party services receive data?** Email delivery, analytics, customer support, CRM, payment and AI providers. Check each vendor's processing locations and sub-processors. AI model providers deserve particular attention; see [[/blogs/ai-data-privacy|AI data privacy]].",
        ],
      },
      {
        heading: "Access and architecture",
        body: [
          "**8. Who can access the data, and from where?** Support staff, developers and contractors in other countries accessing production data may count as a transfer. Limit and log access.",
          "**9. Do we need separate regional deployments?** Options range from one region for everyone, to a choice of region per customer, to fully separate deployments per country. Each step adds operational cost. See [[/blogs/multi-tenant-saas-architecture|multi-tenant SaaS architecture]] on per-tenant data placement.",
          "**10. How do features that cross regions work?** Global search, shared analytics, cross-region reporting and integrations may move data between regions. Design them to respect where data must stay.",
        ],
      },
      {
        heading: "Proof and change",
        body: [
          "**11. How will we prove it?** Customers and auditors will ask. Keep a data map, a list of sub-processors with locations, and the configuration that enforces region choices.",
          "**12. What happens when something changes?** New vendors, new features and new markets can break residency commitments. Add a residency check to vendor selection and architecture reviews, and decide who owns it.",
        ],
        cta: {
          title: "Planning an international rollout?",
          description: "ZSpace Labs designs and builds web applications and SaaS platforms, including region-aware hosting and data architecture. See our [[/services/website-development|web application development service]].",
        },
      },
      {
        heading: "Data-residency worksheet",
        body: [],
        table: {
          headers: ["Question", "Output to record"],
          rows: [
            ["1. Data held", "Data classification"],
            ["2. Applicable rules and contracts", "Requirement register by country and customer"],
            ["3. Storage, processing, access or transfer", "Exact nature of each requirement"],
            ["4. Primary location", "Regions per data store"],
            ["5. Backups and DR", "Backup regions and justification"],
            ["6. Logs and monitoring", "Log contents and storage regions"],
            ["7. Third parties", "Sub-processor list with locations"],
            ["8. Access", "Who, from where, with what logging"],
            ["9. Regional deployments", "Chosen model and cost"],
            ["10. Cross-region features", "Design constraints"],
            ["11. Evidence", "Data map and configuration records"],
            ["12. Change control", "Owner and review triggers"],
          ],
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Data residency is decided by many small choices: cloud regions, backups, logs, vendors, AI providers and support access. Map every copy, separate legal requirements from customer expectations, choose a deployment model you can operate, and keep evidence. Get legal advice for the specific countries and sectors you enter. For hosting cost implications, see [[/blogs/web-application-hosting-cost|web application hosting cost]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Regulation (EU) 2016/679 (GDPR), Chapter V on transfers of personal data to third countries. India, Digital Personal Data Protection Act 2023, section 16. Accessed 28 October 2026. These are examples only; check the rules for your markets and sector.",
        ],
      },
    ],
  },

  // ------------------------------------------- MOBILE DISPLAY SETTINGS
  {
    slug: "mobile-app-display-settings-testing",
    title: "12 Text and Display Settings to Test in Mobile Apps",
    seoTitle: "12 Text and Display Settings to Test in Mobile Apps",
    excerpt:
      "Twelve iOS and Android text and display settings to test, from Dynamic Type and 200% font scaling to dark mode, bold text, reduced motion and display size.",
    category: "Mobile Apps",
    banner: "a11yjourney",
    sceneKind: "a11y",
    bannerAlt: "The same app screen at default text size, at the largest text size and in dark mode, showing wrapped labels and a stacked layout",
    date: "2026-10-28",
    readingTime: "9 min read",
    relatedServiceSlugs: ["mobile-app-development", "ui-ux-design"],
    relatedIndustrySlugs: ["healthcare-healthtech", "fintech", "education-edtech"],
    relatedSlugs: ["mobile-app-testing", "accessible-ui-ux-design", "accessibility-testing-tools"],
    faqs: [
      {
        q: "How large can text get on Android?",
        a: "Android's documentation says that from Android 14 the system supports font scaling up to 200%, using a non-linear curve so large text grows less than small text. Google recommends testing your UI at the 200% setting.",
      },
      {
        q: "What is Dynamic Type?",
        a: "Apple's system that lets iOS users choose their preferred text size, including larger accessibility sizes. Apps that use the system text styles scale automatically; apps with fixed font sizes do not.",
      },
      {
        q: "Is supporting large text a legal requirement?",
        a: "Accessibility laws in many markets reference WCAG, which includes resizing text to 200% (1.4.4) and reflowing content (1.4.10). Whether a specific law applies to your app depends on your sector and market.",
      },
    ],
    content: [
      {
        heading: "Which display settings should you test in a mobile app?",
        body: [
          "**Test the largest text sizes (iOS Dynamic Type including accessibility sizes, and Android font scaling up to 200%), Android display size, dark mode, bold text, increased contrast, reduced motion, colour inversion and filters, right-to-left languages, landscape and split-screen or foldable layouts, and the screen readers that rely on all of these.** These settings are how many people make their phones usable, and screens that look fine at default often break: text is cut off, buttons overlap, or content disappears.",
          "This list is for mobile developers, designers and QA testers. Android facts were checked against Android Developers documentation on 28 October 2026; Apple's Human Interface Guidelines cover Dynamic Type. For the wider QA plan, see [[/blogs/mobile-app-testing|mobile app testing]].",
        ],
      },
      {
        heading: "Text size",
        body: [
          "**1. iOS Dynamic Type at the largest sizes.** Use the system text styles so text scales with the user's setting, and test at the largest standard size and the accessibility sizes. Let text wrap rather than truncate, and switch side-by-side layouts to stacked ones at large sizes.",
          "**2. Android font scaling up to 200%.** Android 14 supports font scaling up to 200% with a non-linear curve. Android's guidance: specify text sizes and line heights in sp units, do not use sp for padding, avoid hard-coded scaling maths, and test at 200%.",
          "**3. Fixed-height containers.** Buttons, tabs, cards and list rows with fixed heights clip enlarged text. Let them grow with content.",
          "**4. Text in images and custom-drawn text.** Text drawn into images, charts or canvases does not scale. Use real text, or provide scaled alternatives.",
        ],
      },
      {
        heading: "Display and appearance",
        body: [
          "**5. Android display size.** Separate from font size, display size makes everything larger and reduces the effective screen width. Check that layouts still fit and nothing important moves off-screen.",
          "**6. Dark mode.** Check every screen, including images with transparent backgrounds, charts, maps, web views and third-party SDK screens. Hard-coded colours are the usual problem; use semantic colours.",
          "**7. Bold text and increased contrast.** iOS and Android offer bold text and higher-contrast options. Bold text makes strings wider; increased contrast should strengthen borders and text colours where you use custom styles.",
          "**8. Colour inversion and filters.** Users with low vision or colour-vision deficiency may invert colours or apply filters. Make sure meaning does not rely on colour alone, and that photos are not inverted where the platform lets you opt them out.",
        ],
      },
      {
        heading: "Motion, orientation and language",
        body: [
          "**9. Reduced motion.** iOS Reduce Motion and Android's option to remove animations signal that users want less movement. Replace large movements, parallax and auto-playing animation with simple fades or none. WCAG's guidance on animation from interactions follows the same principle.",
          "**10. Landscape, split-screen and foldables.** Rotating, using multi-window on Android tablets or unfolding a foldable changes the available space mid-session. Check layouts and that state is kept when the configuration changes.",
          "**11. Right-to-left languages.** With an Arabic or Hebrew device language, layouts mirror. Test even before you translate, to catch hard-coded left and right alignment. See [[/blogs/localisation-layout-issues|localisation layout problems]].",
        ],
      },
      {
        heading: "Assistive technology",
        body: [
          "**12. Screen readers with these settings on.** VoiceOver and TalkBack users often also use large text or high contrast. Test key journeys with a screen reader and large text together, checking labels, reading order and that enlarged elements remain reachable. See [[/blogs/accessibility-testing-tools|accessibility testing tools]].",
        ],
        cta: {
          title: "Want your app usable at every text size?",
          description: "ZSpace Labs designs and builds iOS and Android apps with accessibility and display settings tested as part of QA. See our [[/services/mobile-app-development|mobile app development service]].",
        },
      },
      {
        heading: "Test matrix",
        body: [],
        table: {
          headers: ["Setting", "iOS", "Android", "What usually breaks"],
          rows: [
            ["1. Largest text", "Dynamic Type incl. accessibility sizes", "Font size up to 200% (Android 14+)", "Truncation, overlap"],
            ["2. Font scaling units", "System text styles", "sp for text and line height", "Text that does not scale"],
            ["3. Fixed heights", "Both", "Both", "Clipped buttons and rows"],
            ["4. Text in images", "Both", "Both", "Unscaled text"],
            ["5. Display size", "Display Zoom", "Display size", "Content pushed off-screen"],
            ["6. Dark mode", "Dark appearance", "Dark theme", "Hard-coded colours, invisible icons"],
            ["7. Bold and contrast", "Bold Text, Increase Contrast", "Bold text, high contrast text", "Wider labels, weak borders"],
            ["8. Inversion and filters", "Smart Invert, colour filters", "Colour inversion, correction", "Inverted photos, colour-only meaning"],
            ["9. Reduced motion", "Reduce Motion", "Remove animations", "Unwanted movement"],
            ["10. Orientation and size changes", "Rotation, iPad multitasking", "Multi-window, foldables", "Layout and lost state"],
            ["11. Right-to-left", "Arabic or Hebrew language", "Arabic or Hebrew language", "Unmirrored layouts"],
            ["12. Screen reader plus large text", "VoiceOver", "TalkBack", "Unreachable or unlabelled controls"],
          ],
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Display settings are not edge cases; they are how many people use their phones. Build with system text styles and sp units, avoid fixed heights and hard-coded colours, and add the largest text size, dark mode, reduced motion and a right-to-left language to every release test. For designing accessibly from the start, see [[/blogs/accessible-ui-ux-design|accessible UI/UX design]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Android Developers, Android 14 features: non-linear font scaling to 200%. Apple Human Interface Guidelines, typography and Dynamic Type. W3C WCAG 2.2: 1.4.4 Resize Text, 1.4.10 Reflow, 2.3.3 Animation from Interactions. Accessed 28 October 2026.",
        ],
      },
    ],
  },

  // -------------------------------------------- PRODUCT ANALYTICS IDENTITY
  {
    slug: "product-analytics-identity",
    title: "12 User-Identity Tracking Decisions That Affect Product Analytics Accuracy",
    seoTitle: "12 User-Identity Decisions for Accurate Product Analytics",
    excerpt:
      "Twelve identity decisions for product analytics, from anonymous IDs and login merging to logout, shared devices, B2B accounts and server-side events.",
    category: "CRO",
    banner: "eventmap",
    sceneKind: "analytics",
    bannerAlt: "An anonymous visitor's events being joined to a user ID at sign-in, with the user grouped under a company account across web and mobile",
    date: "2026-10-28",
    readingTime: "10 min read",
    relatedServiceSlugs: ["cro-audit", "website-development"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise", "ecommerce"],
    relatedSlugs: ["product-analytics-implementation-australia", "mobile-app-analytics", "analytics-consent-checks"],
    faqs: [
      {
        q: "Can I use an email address as the user ID?",
        a: "Not for Google Analytics. Google's User-ID rules say the ID must not contain information a third party could use to identify the user. Use an internal account ID or a non-reversible identifier generated by your system.",
      },
      {
        q: "What should happen to the user ID when someone logs out?",
        a: "Clear it. Google's guidance for GA4 is to set the user ID to null, not an empty string or placeholder, so later events on that device are not attributed to the previous user.",
      },
      {
        q: "Why do my user counts differ between tools?",
        a: "Each tool decides identity differently: whether it uses device IDs, user IDs or modelled data, how it merges anonymous and logged-in activity, and whether it applies identity retroactively. Align the identity rules before comparing numbers.",
      },
    ],
    content: [
      {
        heading: "Which identity decisions affect analytics accuracy?",
        body: [
          "**Decide what counts as a user, which ID represents them before and after sign-in, when to link anonymous activity to an account, what happens at logout and on shared devices, how to handle several devices and platforms, how to group users into company accounts, how to send server-side events with the same ID, and how consent affects identity.** These choices change user counts, funnels, retention and attribution more than most dashboards reveal.",
          "This list is for product managers, analysts and developers setting up product analytics for SaaS products, apps and ecommerce accounts. Google Analytics' User-ID rules were checked on 28 October 2026; other tools differ, so check yours. For event design and tracking plans, see [[/blogs/product-analytics-implementation-australia|product analytics implementation]].",
        ],
      },
      {
        heading: "Defining identity",
        body: [
          "**1. What counts as a user.** A device, a browser, a signed-in person, or an account? Write the definition down. Reports of \"users\" mean different things in different tools.",
          "**2. The anonymous ID.** Before sign-in, tools assign a device or cookie ID. Know its lifetime, and that clearing cookies, private browsing and consent choices reset it.",
          "**3. The user ID.** After sign-in, use a stable internal account ID. Google's GA4 rules say the ID must not contain information a third party could use to identify the person, so not an email address or phone number.",
          "**4. When to identify.** Set the user ID at sign-up and sign-in, and on app start for already signed-in users. Missing the app-start case is a common cause of anonymous events from logged-in users.",
        ],
      },
      {
        heading: "Joining and separating activity",
        body: [
          "**5. Linking pre-login activity.** Decide whether activity before sign-in (such as a pricing page visit) should join the user's history. Some tools merge it automatically; others need an explicit call. Note that GA4 does not reprocess data collected before you implemented User-ID.",
          "**6. Logout.** Clear the user ID on logout. Google's guidance is to set it to null rather than an empty string or placeholder; otherwise the next person on the device inherits the previous user's identity.",
          "**7. Shared devices.** Family tablets, shop counters and office computers mean one device, many people. Reset identity on logout and avoid merging anonymous activity on devices you know are shared.",
          "**8. Multiple devices and platforms.** Use the same user ID on web, iOS and Android so one person is not counted three times. In GA4, cross-device reporting depends on a reporting identity that includes User-ID (Blended or Observed).",
        ],
      },
      {
        heading: "Accounts and data sources",
        body: [
          "**9. Company accounts in B2B products.** Track both the person and the organisation they belong to, so you can measure account activation, seats used and account-level retention. Decide how to handle people who belong to several organisations.",
          "**10. Server-side events.** Events from your backend (subscription renewed, invoice paid, record imported) should carry the same user and account IDs as client events, so journeys join up.",
          "**11. Identity across tools.** If analytics, CRM, support and billing each use different IDs, you cannot join them. Agree on a shared internal ID and map other systems' IDs to it.",
          "**12. Consent and identity.** Where consent is required, identifiers may not be set until a visitor agrees, and some visitors will never be identified. Expect gaps and document them. See [[/blogs/analytics-consent-checks|analytics checks for websites with consent requirements]].",
        ],
        cta: {
          title: "Product numbers that do not add up?",
          description: "A [[/services/cro-audit|ZSpace Labs analytics and conversion audit]] reviews identity, event tracking and data quality across your web and app analytics.",
        },
      },
      {
        heading: "Decision record",
        body: [],
        table: {
          headers: ["Decision", "Record", "Common mistake"],
          rows: [
            ["1. What a user is", "Written definition", "Comparing tools with different definitions"],
            ["2. Anonymous ID", "Lifetime and reset conditions", "Assuming it is permanent"],
            ["3. User ID", "Internal, non-identifying ID", "Using email or phone"],
            ["4. When to identify", "Sign-up, sign-in, app start", "Missing already-logged-in users"],
            ["5. Pre-login linking", "Merge or not; tool behaviour", "Expecting retroactive joins"],
            ["6. Logout", "Clear ID (null in GA4)", "Leaving the old ID set"],
            ["7. Shared devices", "Reset and merge rules", "Merging different people"],
            ["8. Cross-device", "Same ID on all platforms", "Different IDs per app"],
            ["9. B2B accounts", "Person and organisation IDs", "Only tracking individuals"],
            ["10. Server-side events", "Same IDs as client", "Events that cannot be joined"],
            ["11. Cross-tool IDs", "Shared internal ID and mapping", "Separate IDs in every system"],
            ["12. Consent", "What is tracked before and after consent", "Treating counts as complete"],
          ],
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Product analytics is only as accurate as its identity rules. Define what a user is, use a stable non-identifying user ID, set and clear it at the right moments, handle shared devices and B2B accounts, and use the same IDs on every platform and server-side event. Then test: sign up, log out, switch devices and check the results. For mobile-specific events, see [[/blogs/mobile-app-analytics|mobile app analytics]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Google Analytics Help, measure activity across platforms with User-ID (ID rules, logout, reporting identity, no reprocessing). Accessed 28 October 2026.",
        ],
      },
    ],
  },
];
