import type { BlogPost } from "./blog-data";

/**
 * Batch 331–380 integration and architecture set: integration architecture
 * patterns (absorbing replacing point-to-point integrations), API
 * versioning, OAuth 2.0 vs OpenID Connect, the strangler fig pattern, and
 * modular monolith vs microservices. Generic slugs in Australian English;
 * balanced comparisons that do not default to microservices or custom
 * builds. Distinct from the ecommerce architecture pages, which are linked.
 * Sources checked 2026-10-10: RFC 9745 (Deprecation header) and RFC 8594
 * (Sunset header); Stripe API versioning docs; Google API design versioning;
 * RFC 6749, RFC 7636 (PKCE), RFC 9700 (OAuth security BCP); OpenID Connect
 * Core 1.0; OAuth 2.1 draft (datatracker); martinfowler.com
 * StranglerFigApplication, MonolithFirst, MicroservicePrerequisites.
 */
export const auIntegrationArchPosts: BlogPost[] = [
  {
    slug: "integration-architecture-patterns",
    title: "Integration Architecture Patterns: Choosing Between APIs, Events, Queues and Integration Platforms",
    seoTitle: "Integration Architecture Patterns: APIs, Events, Queues",
    excerpt:
      "Choosing integration patterns for business systems: direct APIs, webhooks and events, queues, integration platforms, batch files and escaping point-to-point.",
    category: "Web Development",
    banner: "integrationcompare",
    sceneKind: "pipeline",
    bannerAlt: "Tangled point-to-point connections between CRM, ERP, ecommerce and accounting replaced by a mix of APIs, an event bus, queues and an integration platform with monitoring",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["b2b-enterprise", "retail", "manufacturing", "logistics-supply-chain", "saas-technology"],
    relatedSlugs: ["api-integration-australia", "api-integration-reliability", "ecommerce-event-driven-architecture"],
    faqs: [
      {
        q: "What is wrong with point-to-point integrations?",
        a: "Nothing at small scale. As systems grow, each new connection adds custom code, credentials and failure points; the number of connections grows quickly, nobody has a full picture, and changing one system breaks others. The problem is unmanaged growth, not direct connections themselves.",
      },
      {
        q: "When should we use events instead of API calls?",
        a: "Use API calls when one system needs an answer now, such as checking stock during checkout. Use events when something has happened that several systems may care about, such as an order placed, and they can react independently and asynchronously.",
      },
      {
        q: "What does a message queue add?",
        a: "A queue buffers work between systems, so a slow or unavailable consumer does not lose messages or block the sender. It supports retries, load levelling and dead-letter handling for messages that keep failing.",
      },
      {
        q: "Do we need an integration platform (iPaaS)?",
        a: "It helps when you connect many SaaS applications with common patterns and want visual flows, connectors and monitoring without building everything. Custom integration code suits complex logic, high volumes or unusual systems. Many businesses use both.",
      },
      {
        q: "Is a shared database a good integration method?",
        a: "Generally no. Letting several applications read and write the same tables couples them tightly, makes changes risky and blurs ownership. Expose data through APIs or events instead.",
      },
    ],
    content: [
      {
        heading: "How do you choose integration patterns?",
        body: [
          "**Choose per integration flow: direct API calls when a system needs an immediate answer; webhooks or events when something has happened that other systems react to; message queues when work must be buffered, retried and processed reliably; an integration platform when connecting many SaaS tools with common patterns; and scheduled batch files when partners or legacy systems offer nothing else. Escape point-to-point sprawl gradually by cataloguing integrations, assigning owners, standardising patterns and monitoring every flow.** There is no single right architecture.",
          "This guide is for CTOs, architects and IT managers. For practical integration in Australian businesses, see [[/blogs/api-integration-australia|API integration in Australia]]; for reliability patterns, [[/blogs/api-integration-reliability|API integration reliability]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Pick patterns per flow, by timing and coupling needs.",
          "Events and queues decouple systems; APIs give immediate answers.",
          "Avoid shared databases between applications.",
          "Catalogue every integration with an owner.",
          "Monitor flows end to end and reconcile data.",
        ],
      },
      {
        heading: "Patterns compared",
        body: [],
        table: {
          headers: ["Pattern", "Use when", "Watch for"],
          rows: [
            ["**Direct API call**", "Immediate answer needed (stock, price, validation)", "Coupling, timeouts, rate limits"],
            ["**Webhooks**", "A SaaS app notifies you of changes", "Signatures, retries, out-of-order delivery"],
            ["**Events (publish/subscribe)**", "Many systems react to the same business event", "Event design, schema versioning"],
            ["**Message queue**", "Reliable, buffered work between two systems", "Dead letters, idempotent consumers"],
            ["**Integration platform (iPaaS)**", "Many SaaS connections with common patterns", "Licence costs, complex logic limits"],
            ["**Batch files**", "Legacy or partner systems with no API", "Latency, file validation"],
            ["**Shared database**", "Avoid between applications", "Tight coupling, unclear ownership"],
          ],
        },
      },
      {
        heading: "Escaping point-to-point sprawl",
        body: [],
        checklist: [
          "List every integration: source, target, data, trigger, method, owner, failure handling.",
          "Identify the core business events (order placed, customer updated, invoice paid).",
          "Name a system of record per entity; see [[/blogs/master-data-management|master data management]].",
          "Introduce standard patterns: an event bus or queue for events, an API layer for queries.",
          "Move the most fragile or most-changed connections first.",
          "Add monitoring, alerting and reconciliation for every flow.",
          "Retire old connections once replacements are proven.",
        ],
      },
      {
        heading: "Designing events well",
        body: [
          "Name events after business facts in the past tense, such as OrderPlaced, include an identifier, timestamp and version, and decide whether events carry full data or a reference consumers fetch. Version event schemas so consumers can upgrade at their own pace. Make consumers idempotent, because events can be delivered more than once and out of order. See [[/blogs/ecommerce-event-driven-architecture|event-driven architecture]] and [[/blogs/ecommerce-queue-architecture|queue architecture]] for ecommerce examples.",
        ],
      },
      {
        heading: "Governance",
        body: [
          "Keep an integration catalogue, assign owners, store credentials in a secret manager, document data contracts, and review new integrations against the standard patterns. Monitor delivery, latency and error rates, and reconcile key totals, such as orders in ecommerce versus ERP, daily. See [[/blogs/api-versioning|API versioning]] for managing change.",
        ],
      },
      {
        heading: "Hypothetical example: a wholesaler with ten systems",
        body: [
          "**This example is hypothetical.** A wholesaler had grown to about 25 point-to-point scripts between ecommerce, ERP, CRM, warehouse, accounting and a marketplace. Failures were found by customers. The team catalogued every flow, introduced a queue-backed event for 'order placed' that the ERP, warehouse and CRM consumed independently, used the existing iPaaS for simple SaaS-to-SaaS syncs, kept direct API calls for live stock checks, and added a dashboard and daily reconciliation. Old scripts were retired one at a time.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "One pattern forced on every flow.",
          "Events without versioning or idempotent consumers.",
          "No owner or monitoring for integrations.",
          "Replacing everything at once.",
          "Shared databases used as integration points.",
        ],
      },
      {
        heading: "Related guides",
        body: [
        ],
        checklist: [
          "[[/blogs/api-integration-australia|API integration in Australia]] for connecting business systems.",
          "[[/blogs/ecommerce-webhooks|Ecommerce webhooks]] for receiving events reliably.",
          "[[/blogs/data-engineering-for-growing-businesses|Data engineering for growing businesses]] for reporting pipelines.",
          "[[/blogs/customer-data-integration-australia|Customer data integration]] for sync and identity.",
          "[[/blogs/low-code-vs-custom-software|Low-code vs custom software]] for integration platforms vs code.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Good integration architecture matches each flow to the right pattern, gives every integration an owner and monitoring, and moves away from point-to-point sprawl step by step. Standardise patterns, design events carefully and reconcile data.",
        ],
        cta: {
          title: "Integrations becoming fragile?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|system integrations and APIs]] and [[/services/ai-automation|workflow automation]]. If it would help to map and simplify your integrations, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "api-versioning",
    title: "API Versioning and Backward Compatibility: A Practical Engineering Guide",
    seoTitle: "API Versioning and Backward Compatibility",
    excerpt:
      "How to version APIs: breaking vs non-breaking changes, URL, header and date-based versions, Deprecation and Sunset headers, and compatibility testing.",
    category: "Web Development",
    banner: "apimap",
    sceneKind: "code",
    bannerAlt: "An API evolving through additive changes and a new version, with deprecation and sunset dates announced to clients, a changelog and compatibility tests",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["saas-technology", "fintech", "startups", "b2b-enterprise"],
    relatedSlugs: ["api-documentation-best-practices", "saas-integration-marketplace", "api-security-best-practices"],
    faqs: [
      {
        q: "What counts as a breaking API change?",
        a: "Anything that can make existing clients fail: removing or renaming fields or endpoints, changing types or formats, making optional inputs required, changing error codes or behaviour, tightening validation, or changing authentication. Adding optional fields or new endpoints is usually non-breaking, provided clients ignore unknown fields.",
      },
      {
        q: "Should the version go in the URL or a header?",
        a: "Both work. URL versions (such as /v1/) are visible and easy to route and cache. Header or media-type versions keep URLs stable. Date-based versions, used by Stripe, pin each client to the API behaviour at a date. Choose one approach and apply it consistently.",
      },
      {
        q: "How do we deprecate an old version?",
        a: "Announce it with a timeline, document migration steps, signal deprecation in responses (the Deprecation header in RFC 9745 and the Sunset header in RFC 8594), track who still uses it, contact those clients directly, and only remove it after the sunset date.",
      },
      {
        q: "How long should we support old versions?",
        a: "Long enough for clients to migrate, which depends on who they are. Internal clients may move in weeks; partners and mobile apps on users' devices often need many months. Publish the policy and keep to it.",
      },
      {
        q: "Can we avoid versioning entirely?",
        a: "Some teams evolve APIs only through additive, backward-compatible changes and rarely introduce new versions. It requires discipline, tolerant clients and good testing. Breaking changes will still occasionally be needed, so have a versioning policy ready.",
      },
    ],
    content: [
      {
        heading: "How should you version an API?",
        body: [
          "**Prefer additive, backward-compatible changes; introduce a new version only for unavoidable breaking changes; choose one versioning approach (URL path, header or date-based) and use it consistently; announce deprecations with dates, migration guides and the Deprecation and Sunset response headers; track usage of old versions; and test compatibility automatically.** The goal is to change the API without breaking the people who depend on it.",
          "This guide is for API owners and engineers. For documentation, see [[/blogs/api-documentation-best-practices|API documentation best practices]]; for partner ecosystems, [[/blogs/saas-integration-marketplace|SaaS integration marketplaces]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Know what counts as breaking.",
          "Make additive changes the default.",
          "Pick one versioning scheme and document it.",
          "Deprecate with dates, headers and direct contact.",
          "Keep old versions working until the sunset date.",
          "Run contract tests for every supported version.",
        ],
      },
      {
        heading: "Breaking vs non-breaking changes",
        body: [],
        table: {
          headers: ["Usually non-breaking", "Usually breaking"],
          rows: [
            ["Adding an optional request field", "Making a field required"],
            ["Adding a response field", "Removing or renaming a field"],
            ["Adding an endpoint", "Removing an endpoint"],
            ["Adding an enum value (if clients tolerate it)", "Changing a field's type or format"],
            ["Relaxing validation", "Tightening validation"],
            ["New optional query parameter", "Changing default sorting, paging or error codes"],
          ],
        },
      },
      {
        heading: "Versioning approaches",
        body: [],
        table: {
          headers: ["Approach", "Example", "Notes"],
          rows: [
            ["**URL path**", "/v1/orders, /v2/orders", "Simple to route and understand"],
            ["**Header or media type**", "Accept: application/vnd.example.v2+json", "Stable URLs; less visible"],
            ["**Date-based**", "A version header pinned to a date", "Fine-grained; used by Stripe ([[https://docs.stripe.com/api/versioning|Stripe docs]])"],
            ["**No explicit versions**", "Additive changes only", "Requires discipline; still need a plan for breaks"],
          ],
        },
      },
      {
        heading: "Deprecation and sunset",
        body: [
          "Publish a deprecation policy with minimum support periods. When deprecating, announce it in the changelog and by email to known clients, add migration guides, and return the Deprecation header (RFC 9745) and, when a removal date is set, the Sunset header (RFC 8594) on affected responses ([[https://www.rfc-editor.org/rfc/rfc9745|RFC 9745]]; [[https://www.rfc-editor.org/rfc/rfc8594|RFC 8594]]). Monitor which clients still call old versions and contact them before removal. Google's API design guidance is another useful reference ([[https://cloud.google.com/apis/design/versioning|Google Cloud]]).",
        ],
      },
      {
        heading: "Mobile apps and long-lived clients",
        body: [
          "Mobile apps on users' devices cannot all be updated at once. Keep APIs compatible with app versions still in use, track app versions in requests, use minimum supported version checks with friendly upgrade prompts, and plan backend changes around store release cycles. See [[/blogs/mobile-app-api-integration|mobile app API integration]].",
        ],
      },
      {
        heading: "Testing compatibility",
        body: [],
        checklist: [
          "Compare OpenAPI descriptions between releases and flag breaking changes in CI.",
          "Run consumer-driven contract tests for key clients.",
          "Keep regression tests for each supported version.",
          "Monitor error rates by client and version after releases.",
        ],
      },
      {
        heading: "Hypothetical example: a logistics API",
        body: [
          "**This example is hypothetical.** A logistics platform needed to split an address field into structured parts. It added the new fields alongside the old one, documented the change, and released v2 only for clients that wanted the old field removed. v1 responses carried a Deprecation header and, six months later, a Sunset header with a date. The team tracked v1 usage by client and contacted the remaining integrators before switching it off.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Breaking changes shipped without a new version.",
          "Several versioning schemes in one API.",
          "Removing versions without warning or usage data.",
          "Forgetting older mobile app versions.",
          "No automated check for breaking changes.",
        ],
      },
      {
        heading: "Related guides",
        body: [
        ],
        checklist: [
          "[[/blogs/api-integration-reliability|API integration reliability]] for retries and idempotency.",
          "[[/blogs/ecommerce-api-gateway|API gateways]] for routing versions.",
          "[[/blogs/zero-downtime-deployments|Zero-downtime deployments]] for releasing changes safely.",
          "[[/blogs/integration-architecture-patterns|Integration architecture patterns]] for event schema versioning.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "API versioning is mostly about avoiding breaks: change additively, version when you must, deprecate transparently with dates and headers, and test compatibility automatically. Clients trust APIs that change predictably.",
        ],
        cta: {
          title: "Evolving an API others depend on?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|APIs and integrations]] and [[/services/mobile-app-development|mobile apps that consume them]]. If it would help to plan a versioning strategy, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "oauth-vs-openid-connect",
    title: "OAuth 2.0 vs OpenID Connect: Choosing the Right Approach for Authorisation and Sign-In",
    seoTitle: "OAuth 2.0 vs OpenID Connect: What's the Difference?",
    excerpt:
      "OAuth 2.0 vs OpenID Connect explained: authorisation vs authentication, access and ID tokens, which flows to use, PKCE, SAML, and common security mistakes.",
    category: "Web Development",
    banner: "authflow",
    sceneKind: "security",
    bannerAlt: "A user signing in through an identity provider with OpenID Connect to receive an ID token, while an app uses an OAuth access token to call an API on the user's behalf",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["saas-technology", "fintech", "healthcare-healthtech", "b2b-enterprise"],
    relatedSlugs: ["api-security-best-practices", "mobile-app-authentication", "saas-roles-and-permissions"],
    faqs: [
      {
        q: "What is the difference between OAuth 2.0 and OpenID Connect?",
        a: "OAuth 2.0 is an authorisation framework: it lets an application obtain an access token to call an API with limited permissions. OpenID Connect (OIDC) is an identity layer on top of OAuth 2.0: it adds an ID token and standard user information so an application can sign a user in and know who they are.",
      },
      {
        q: "Can we use OAuth access tokens to identify users?",
        a: "Not reliably. Access tokens are meant for the API they were issued for, and their format and contents are not guaranteed for the client. Use OpenID Connect ID tokens, validated properly, for sign-in.",
      },
      {
        q: "Which OAuth flow should we use?",
        a: "For web, single-page and mobile apps where users sign in, use the authorisation code flow with PKCE. For server-to-server access without a user, use client credentials. Current security guidance (RFC 9700) recommends against the implicit flow and prohibits the resource owner password credentials grant.",
      },
      {
        q: "What about SAML?",
        a: "SAML is an older XML-based standard still widely used for enterprise single sign-on. Many identity providers support both SAML and OIDC. New applications usually prefer OIDC, but B2B SaaS often supports SAML too because enterprise customers require it.",
      },
      {
        q: "Should we build our own authentication?",
        a: "Usually not. Use an established identity provider or a well-maintained library that implements OAuth 2.0 and OIDC, and focus on configuration, roles and user experience. Building authentication from scratch is risky.",
      },
    ],
    content: [
      {
        heading: "OAuth 2.0 or OpenID Connect?",
        body: [
          "**Use OpenID Connect when you need to sign users in and know who they are; use OAuth 2.0 when an application needs delegated, limited access to an API. Most modern apps use both: OIDC for sign-in, returning an ID token, and OAuth access tokens for calling APIs. Use the authorisation code flow with PKCE for user-facing apps and client credentials for machine-to-machine access, and rely on an established identity provider rather than building your own.**",
          "This guide is for developers and technical leads. For API protection, see [[/blogs/api-security-best-practices|API security best practices]]; for mobile sign-in, [[/blogs/mobile-app-authentication|mobile app authentication]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "OAuth is for authorisation; OIDC adds authentication.",
          "ID tokens identify users; access tokens call APIs.",
          "Authorisation code with PKCE for user-facing apps.",
          "Client credentials for service-to-service calls.",
          "No implicit or password grants for new work.",
          "Use an identity provider; validate tokens properly.",
        ],
      },
      {
        heading: "Comparison",
        body: [],
        table: {
          headers: ["Aspect", "OAuth 2.0", "OpenID Connect"],
          rows: [
            ["**Purpose**", "Delegated authorisation to APIs", "User authentication (sign-in) on top of OAuth"],
            ["**Main token**", "Access token (plus refresh token)", "ID token (a signed JWT), plus OAuth tokens"],
            ["**Who reads the token**", "The API (resource server)", "The client application"],
            ["**User information**", "Not standardised", "Standard claims and a UserInfo endpoint"],
            ["**Specification**", "RFC 6749 ([[https://www.rfc-editor.org/rfc/rfc6749|IETF]])", "OpenID Connect Core 1.0 ([[https://openid.net/specs/openid-connect-core-1_0.html|OpenID Foundation]])"],
          ],
        },
      },
      {
        heading: "Which flow to use",
        body: [],
        table: {
          headers: ["Scenario", "Flow"],
          rows: [
            ["Web app with a server", "Authorisation code (with PKCE)"],
            ["Single-page app", "Authorisation code with PKCE, ideally with a backend-for-frontend holding tokens"],
            ["Mobile app", "Authorisation code with PKCE via the system browser"],
            ["Server-to-server", "Client credentials"],
            ["Devices without browsers", "Device authorisation grant"],
            ["Legacy implicit or password flows", "Replace; see RFC 9700 ([[https://www.rfc-editor.org/rfc/rfc9700|IETF]])"],
          ],
        },
      },
      {
        heading: "Tokens and validation",
        body: [
          "Validate ID tokens' signature, issuer, audience, expiry and nonce before trusting them. APIs should validate access tokens and check scopes and audience. Keep access tokens short-lived, store refresh tokens securely and rotate them, and never put tokens in URLs or logs. PKCE (RFC 7636) protects the authorisation code from interception ([[https://www.rfc-editor.org/rfc/rfc7636|RFC 7636]]). OAuth 2.1, which consolidates current practice, is still an IETF draft at the time of writing.",
        ],
      },
      {
        heading: "Enterprise sign-in for B2B SaaS",
        body: [
          "Business customers often require single sign-on with their identity provider through OIDC or SAML, plus automated provisioning (often SCIM) and group-to-role mapping. Plan for multiple customer identity providers per tenant, and make sure users removed by the customer lose access promptly. See [[/blogs/saas-roles-and-permissions|SaaS roles and permissions]].",
        ],
      },
      {
        heading: "Hypothetical example: a SaaS adding SSO and an API",
        body: [
          "**This example is hypothetical.** A B2B SaaS used its own passwords and shared API keys. It moved sign-in to an identity provider using OIDC with the authorisation code flow and PKCE, added SAML and OIDC single sign-on for enterprise tenants, and replaced API keys for partner integrations with OAuth client credentials and per-client scopes. The API validated access tokens and scopes on every request.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Using access tokens as proof of identity.",
          "Implicit flow in single-page apps.",
          "Skipping ID token validation.",
          "Long-lived tokens stored in browser storage.",
          "Building authentication from scratch.",
        ],
      },
      {
        heading: "Related guides",
        body: [
        ],
        checklist: [
          "[[/blogs/secrets-management|Secrets management]] for client secrets and keys.",
          "[[/blogs/multi-tenant-saas-architecture|Multi-tenant SaaS architecture]] for per-tenant identity providers.",
          "[[/blogs/saas-integration-marketplace|SaaS integration marketplaces]] for third-party app authorisation.",
          "[[/blogs/secure-web-application-development-australia|Secure web application development]] for broader practice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "OAuth 2.0 and OpenID Connect work together: OIDC signs users in, OAuth grants API access. Use current flows, validate tokens, keep them short-lived and rely on a proven identity provider. For implementing SSO for business customers, see [[/blogs/enterprise-sso-implementation|enterprise SSO implementation]].",
        ],
        cta: {
          title: "Adding sign-in or securing an API?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|secure web applications and APIs]] and [[/services/mobile-app-development|mobile apps]]. If it would help to plan authentication for your product, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "strangler-fig-pattern",
    title: "Strangler Fig Pattern: Replacing Legacy Systems Incrementally Without a Big Bang",
    seoTitle: "Strangler Fig Pattern for Legacy Modernisation",
    excerpt:
      "How the strangler fig pattern replaces legacy systems step by step: routing layers, slicing by capability, data strategies and anti-corruption layers.",
    category: "Web Development",
    banner: "legacyflow",
    sceneKind: "roadmap",
    bannerAlt: "A routing layer in front of a legacy system sending more requests to new services over time, with data synchronised between them until the old system is retired",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["b2b-enterprise", "manufacturing", "fintech", "logistics-supply-chain", "insurtech"],
    relatedSlugs: ["legacy-software-modernization-australia", "modular-monolith-vs-microservices", "data-migration-australia"],
    faqs: [
      {
        q: "What is the strangler fig pattern?",
        a: "An approach to replacing a legacy system gradually: put a routing layer in front of it, build new functionality alongside, move capabilities and their users across one slice at a time, and retire the old system when nothing depends on it. Martin Fowler named it after strangler fig vines that grow around a host tree.",
      },
      {
        q: "Why not rewrite the whole system at once?",
        a: "Big-bang rewrites take longer than expected, delay value, and carry high cutover risk because everything changes at once. Incremental replacement delivers value earlier and limits the impact of each change, though it requires running old and new side by side for a while.",
      },
      {
        q: "How do we handle data during the transition?",
        a: "Options include having new components read the legacy database temporarily, synchronising data between old and new stores (for example with change data capture), or moving ownership of a data set to the new system with the legacy system reading from it. Each slice needs a clear owner for its data.",
      },
      {
        q: "When does the strangler fig pattern not fit?",
        a: "When you cannot intercept requests or integrations, when the system is small enough to replace safely in one go, or when a packaged product will replace it entirely with a data migration. It also struggles when core data is deeply entangled and cannot be separated.",
      },
      {
        q: "What is an anti-corruption layer?",
        a: "A translation layer between the new and old systems so the new design is not forced to adopt the legacy system's data model and quirks. It isolates the new code and can be removed when the legacy system goes.",
      },
    ],
    content: [
      {
        heading: "How does the strangler fig pattern work?",
        body: [
          "**Place a routing layer (a proxy, API gateway or facade) in front of the legacy system; choose a first slice of capability with clear boundaries; build it in the new system, with an anti-corruption layer translating between old and new; route that slice's traffic to the new system, often gradually; resolve data ownership for the slice; repeat; and retire the legacy system when nothing depends on it.** It trades a longer period of coexistence for much lower risk than a big-bang rewrite ([[https://martinfowler.com/bliki/StranglerFigApplication.html|Martin Fowler]]).",
          "This guide is for CTOs and engineering leads. For the business decision of whether and how to modernise, see [[/blogs/legacy-software-modernization-australia|legacy software modernisation]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Intercept first: you need a place to route traffic.",
          "Slice by business capability, not by technical layer.",
          "Decide data ownership for each slice.",
          "Protect the new design with an anti-corruption layer.",
          "Measure and retire old parts as you go.",
        ],
      },
      {
        heading: "Steps",
        body: [],
        checklist: [
          "**Map** the legacy system's capabilities, users, integrations and data.",
          "**Intercept** requests with a proxy, gateway or facade; for batch jobs and integrations, find equivalent interception points.",
          "**Choose a first slice:** valuable, reasonably independent and low risk, such as reporting or a single product line.",
          "**Build** it in the new system with tests and monitoring.",
          "**Route** traffic gradually, comparing results where possible.",
          "**Move data ownership** for the slice.",
          "**Retire** the legacy code for that slice; repeat.",
        ],
      },
      {
        heading: "Data strategies",
        body: [],
        table: {
          headers: ["Strategy", "How it works", "Trade-off"],
          rows: [
            ["**Read legacy data**", "New components read the old database temporarily", "Fast start; keeps coupling"],
            ["**Synchronise**", "Change data capture or events keep old and new stores aligned", "Complexity; conflict handling"],
            ["**Move ownership**", "New system owns the data; legacy reads from it", "Cleanest end state; needs legacy changes"],
          ],
        },
      },
      {
        heading: "Testing and parallel runs",
        body: [
          "For critical calculations, run old and new side by side and compare outputs before switching, sometimes called shadowing. Use feature flags or routing rules to move users in stages, and keep the ability to route back. Reconcile data between systems during the transition. See [[/blogs/feature-flag-implementation|feature flags]] and [[/blogs/data-migration-australia|data migration]].",
        ],
      },
      {
        heading: "When it does not fit",
        body: [],
        checklist: [
          "You cannot intercept traffic or integrations.",
          "The system is small and well understood; replace it in one go.",
          "A packaged product replaces it entirely; plan a migration instead.",
          "Core data cannot be separated by capability.",
          "There is no commitment to finish; half-strangled systems cost more than either end state.",
        ],
      },
      {
        heading: "Hypothetical example: an insurer's policy system",
        body: [
          "**This example is hypothetical.** An insurer's 20-year-old policy administration system handled quotes, policies, renewals and claims. The team put an API gateway in front of it, rebuilt quoting first for one product line with an anti-corruption layer translating legacy policy codes, and ran old and new quote calculations in parallel for a month before switching. Renewals followed, with change data capture keeping policy data in sync. Claims remained on the legacy system until a later phase.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "No interception point, so traffic cannot be moved.",
          "Slicing by technical layer instead of capability.",
          "Copying the legacy data model into the new system.",
          "Never retiring old parts.",
          "No reconciliation between old and new.",
        ],
      },
      {
        heading: "Related guides",
        body: [
        ],
        checklist: [
          "[[/blogs/modular-monolith-vs-microservices|Modular monolith vs microservices]] for the target architecture.",
          "[[/blogs/software-architecture-review|Software architecture review]] for assessing the legacy system.",
          "[[/blogs/integration-architecture-patterns|Integration architecture patterns]] for intercepting integrations.",
          "[[/blogs/ai-legacy-code-modernization|AI legacy code modernisation]] for understanding old code.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "The strangler fig pattern replaces legacy systems through many small, reversible steps: intercept, slice, build, route, move data and retire. It needs patience and commitment to finish, and it usually beats a big-bang rewrite on risk.",
        ],
        cta: {
          title: "Planning to replace a legacy system?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|incremental modernisation and new platforms]]. If it would help to find the first slice, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "modular-monolith-vs-microservices",
    title: "Modular Monolith vs Microservices: Choosing an Architecture That Fits Your Team",
    seoTitle: "Modular Monolith vs Microservices: How to Choose",
    excerpt:
      "Modular monolith vs microservices: how they differ on deployment, data, scaling, operations and team size, and when to extract services later.",
    category: "Web Development",
    banner: "monovsmicro",
    sceneKind: "compare",
    bannerAlt: "One deployable application with well-separated modules beside a set of independently deployed microservices, compared on team size, operations, data and scaling",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["saas-technology", "startups", "fintech", "b2b-enterprise"],
    relatedSlugs: ["ecommerce-microservices-vs-monolith", "software-architecture-review", "scaling-saas-applications"],
    faqs: [
      {
        q: "What is a modular monolith?",
        a: "A single deployable application divided into well-defined modules with clear boundaries and interfaces, each owning its own data and logic. It keeps the operational simplicity of one deployment while avoiding the tangled code of an unstructured monolith.",
      },
      {
        q: "When do microservices make sense?",
        a: "When several teams need to deploy independently, parts of the system have very different scaling or reliability needs, and you have the operational maturity to run distributed systems: automated deployment, monitoring, tracing and on-call. Without those, microservices usually slow teams down.",
      },
      {
        q: "Is a monolith bad for scaling?",
        a: "Not necessarily. Monoliths can scale horizontally behind load balancers, and many large products run on them. Database design, caching and background processing often matter more than the number of services.",
      },
      {
        q: "Can we move from a modular monolith to microservices later?",
        a: "Yes, and well-defined modules make it much easier. Extract a module into a service when there is a clear reason, such as independent scaling or a separate team, using its existing interface and data ownership.",
      },
      {
        q: "Are microservices more reliable?",
        a: "They can isolate some failures, but they add network calls, partial failures and data consistency challenges. Reliability depends on design and operations, not the architecture label.",
      },
    ],
    content: [
      {
        heading: "Modular monolith or microservices?",
        body: [
          "**Most growing products and teams are better served by a modular monolith: one deployable application with strong module boundaries, each owning its data. Move to microservices for specific parts when several teams need independent deployment, parts have very different scaling or reliability needs, and you have the operational maturity for distributed systems.** Martin Fowler's MonolithFirst and microservice prerequisites articles explain the reasoning ([[https://martinfowler.com/bliki/MonolithFirst.html|MonolithFirst]]; [[https://martinfowler.com/bliki/MicroservicePrerequisites.html|prerequisites]]).",
          "This guide is for CTOs and technical founders of SaaS and business applications. For ecommerce platforms specifically, see [[/blogs/ecommerce-microservices-vs-monolith|ecommerce microservices vs monolith]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Architecture should fit team size and operational maturity.",
          "Module boundaries matter more than deployment units.",
          "Each module owns its data; no reaching into other modules' tables.",
          "Extract services for a reason, not by default.",
          "Microservices need automation, monitoring and tracing first.",
        ],
      },
      {
        heading: "Comparison",
        body: [],
        table: {
          headers: ["Factor", "Modular monolith", "Microservices"],
          rows: [
            ["**Deployment**", "One unit", "Many independent units"],
            ["**Team fit**", "One to a few teams", "Several autonomous teams"],
            ["**Data**", "One database, schemas or tables per module", "Database per service; eventual consistency"],
            ["**Calls between parts**", "In-process, fast, transactional", "Network calls; partial failures"],
            ["**Scaling**", "Scale the whole app; often enough", "Scale services independently"],
            ["**Operations**", "Simpler monitoring and debugging", "Distributed tracing, service discovery, more infrastructure"],
            ["**Change**", "Refactoring across modules is easier", "Contracts between services must be versioned"],
          ],
        },
      },
      {
        heading: "Designing good modules",
        body: [],
        checklist: [
          "Draw boundaries around business capabilities (billing, scheduling, catalogue).",
          "Expose each module through a small public interface.",
          "Keep each module's data private; access it only through its interface.",
          "Enforce boundaries with code structure and automated checks.",
          "Communicate between modules with events where coupling should be loose.",
        ],
      },
      {
        heading: "Extracting a service later",
        body: [
          "Extract a module when there is a clear driver: a separate team, very different scaling needs, a different technology requirement or isolation for reliability or security. Because the module already has an interface and owns its data, extraction mainly changes in-process calls to network calls; plan for timeouts, retries and versioning. See [[/blogs/api-versioning|API versioning]] and [[/blogs/strangler-fig-pattern|the strangler fig pattern]].",
        ],
      },
      {
        heading: "Teams and Conway's law",
        body: [
          "Systems tend to mirror the communication structure of the teams that build them. A single team running ten microservices spends much of its time on operations; several teams sharing one tangled codebase step on each other. Align modules or services with team ownership, and revisit as the organisation grows.",
        ],
      },
      {
        heading: "Hypothetical example: a SaaS at two stages",
        body: [
          "**This example is hypothetical.** A workforce SaaS with eight engineers rebuilt its tangled application as a modular monolith with modules for accounts, scheduling, timesheets and billing. Two years later, with four teams, the scheduling engine needed heavy compute at roster publication time, so it was extracted as a separate service behind its existing interface, with queue-based communication. Everything else stayed in the monolith.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Starting with microservices for a small team.",
          "A 'distributed monolith' where services share a database.",
          "No module boundaries in the monolith.",
          "Extracting services without monitoring and tracing.",
          "Splitting by technical layer instead of capability.",
        ],
      },
      {
        heading: "Related guides",
        body: [
        ],
        checklist: [
          "[[/blogs/scaling-saas-applications|Scaling SaaS applications]] for growth bottlenecks.",
          "[[/blogs/kubernetes-vs-serverless-vs-virtual-machines|Kubernetes vs serverless vs VMs]] for where to run it.",
          "[[/blogs/multi-tenant-saas-architecture|Multi-tenant SaaS architecture]] for tenant data design.",
          "[[/blogs/application-monitoring-observability|Monitoring and observability]] before distributing systems.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A modular monolith is the sensible default for most growing teams. Invest in boundaries and data ownership, and extract microservices only where team structure, scaling or isolation needs justify the operational cost.",
        ],
        cta: {
          title: "Deciding on architecture for your product?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|SaaS and business application architecture and development]]. If it would help to review your options, we are happy to talk it through.",
        },
      },
    ],
  },
];
