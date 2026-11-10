import type { BlogPost } from "./blog-data";

/**
 * Listicle batch 5 (2026-10-28): three topics out of candidates 81–100 with no
 * existing article on the same primary intent. Deployment checks (83) and
 * suggest-versus-execute steps for AI (94) became updates to
 * zero-downtime-deployments and ai-agent-autonomy-levels; fifteen others were
 * already covered. No external links (owner rule).
 * Sources checked 2026-10-28:
 * - RFC 6585 (429 Too Many Requests, may include Retry-After); RFC 9110
 *   (Retry-After). IETF HTTPAPI draft-ietf-httpapi-ratelimit-headers-11
 *   (23 May 2026): RateLimit-Policy and RateLimit fields; still an
 *   Internet-Draft. OWASP API Security Top 10 2023, API4 Unrestricted Resource
 *   Consumption: rate limits, per-operation throttling (OTP, password
 *   recovery), payload and pagination limits, spending limits.
 * - NN/g, Page Laubheimer, Data Tables: Four Major User Tasks (2022): find,
 *   compare, view/edit a row, act on records; freeze headers and first column;
 *   visible active filters; batch actions with select all; side panel editing.
 *   W3C WAI-ARIA Authoring Practices: table and grid patterns.
 * - Android Developers: notification channels required from Android 8.0; users
 *   control channel behaviour; importance cannot be changed after creation.
 *   Apple App Review Guideline 4.5.4: marketing push needs explicit opt-in and
 *   an in-app opt-out; push must not be required for the app to function.
 *   Google email sender guidelines: senders of more than 5,000 messages a day
 *   must support one-click unsubscribe (List-Unsubscribe and
 *   List-Unsubscribe-Post headers) for marketing and subscribed messages.
 */
export const listiclePosts6: BlogPost[] = [
  // ------------------------------------------- API RATE LIMITING STRATEGIES
  {
    slug: "api-rate-limiting-strategies",
    title: "10 API Rate-Limiting Strategies for Reliable Web Applications",
    seoTitle: "10 API Rate-Limiting Strategies for Reliable Web Applications",
    excerpt:
      "Ten rate-limiting strategies for your own APIs, from token buckets and sliding windows to per-operation and cost-based limits, and how to signal them.",
    category: "Web Development",
    banner: "apiflow",
    sceneKind: "security",
    bannerAlt: "Requests from several clients passing through a rate limiter that allows, delays or rejects them with a 429 response",
    date: "2026-10-28",
    readingTime: "10 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["saas-technology", "fintech", "ecommerce"],
    relatedSlugs: ["api-security-best-practices", "ecommerce-api-gateway", "integration-failure-scenarios"],
    faqs: [
      {
        q: "What HTTP status code should a rate-limited API return?",
        a: "429 Too Many Requests, defined in RFC 6585. The response can include a Retry-After header telling the client how long to wait before trying again.",
      },
      {
        q: "What is the difference between rate limiting and quotas?",
        a: "Rate limits control how fast a client can make requests, such as 100 per minute. Quotas cap the total over a longer period, such as 10,000 calls a month, and are often tied to a pricing plan. Many APIs use both.",
      },
      {
        q: "Is there a standard header for rate-limit information?",
        a: "Not a finished one yet. Many APIs use their own X-RateLimit headers. The IETF HTTP APIs working group is drafting standard RateLimit and RateLimit-Policy fields; as of May 2026 the specification was still an Internet-Draft.",
      },
    ],
    content: [
      {
        heading: "Which rate-limiting strategy should an API use?",
        body: [
          "**Most APIs combine a token bucket or sliding-window limit per client identity with stricter limits on sensitive operations (login, one-time passwords, password resets), weighted limits for expensive requests, plan-based quotas for paying customers, and caps on payload size and page size.** Reject excess requests with a 429 status and a Retry-After value, enforce limits centrally so every server instance agrees, and monitor who hits them.",
          "This list is for developers and technical leads building APIs for web apps, mobile apps or partners. Rate limiting protects availability and cost; OWASP's API Security Top 10 (2023) lists unrestricted resource consumption as a top API risk and recommends rate limits, per-operation throttling, payload limits and spending limits. For consuming other people's rate-limited APIs, see [[/blogs/integration-failure-scenarios|integration failure scenarios]].",
        ],
      },
      {
        heading: "Algorithms",
        body: [
          "**1. Fixed window.** Count requests per client in fixed periods (for example, per minute) and reset at the boundary. Simple and cheap to store. **Trade-off:** clients can send a burst at the end of one window and the start of the next, briefly doubling the rate.",
          "**2. Sliding window.** Count requests over the last N seconds at any moment, usually approximated by weighting the current and previous windows. **Trade-off:** slightly more computation, but smoother than fixed windows and avoids boundary bursts.",
          "**3. Token bucket.** Each client has a bucket that refills at a steady rate up to a maximum; each request spends a token. It allows short bursts up to the bucket size while enforcing an average rate, which suits real user behaviour. **Trade-off:** you must choose both a refill rate and a burst size.",
          "**4. Leaky bucket or queueing.** Requests enter a queue processed at a fixed rate; excess requests wait or are dropped. Useful for smoothing traffic to a fragile downstream system. **Trade-off:** adds latency, and queued requests can time out on the client side.",
        ],
      },
      {
        heading: "Who and what to limit",
        body: [
          "**5. Per identity, not just per IP address.** Limit by user, API key or tenant where you can identify them; fall back to IP address for unauthenticated traffic. IP-only limits punish many users behind one office or mobile network, and are easy to evade with many addresses.",
          "**6. Per operation for sensitive endpoints.** Login, OTP verification, password reset, sign-up and payment attempts need much stricter limits than reading a product list. OWASP specifically mentions throttling operations such as OTP validation and password recovery.",
          "**7. Weighted or cost-based limits.** Not every request costs the same. Give expensive operations (reports, exports, search with many filters, GraphQL queries with high complexity, calls that trigger AI models) a higher cost against the client's budget.",
          "**8. Plan-based quotas.** For APIs sold to customers, combine short-term rate limits with longer-term quotas tied to their plan, and show usage in their dashboard before they hit the limit.",
        ],
      },
      {
        heading: "Enforcing and communicating limits",
        body: [
          "**9. Return 429 with useful information.** RFC 6585 defines 429 Too Many Requests and allows a Retry-After header saying how long to wait. Many APIs also return remaining-quota headers; the IETF is drafting standard RateLimit and RateLimit-Policy fields, which were still an Internet-Draft as of May 2026. Document your limits so client developers can build backoff and retries correctly.",
          "**10. Enforce centrally and consistently.** If each server instance counts separately, a client gets a different limit depending on which server it hits. Enforce at an API gateway or edge layer, or share counters in a fast store such as Redis, and decide what happens if that store is unavailable (fail open for low-risk reads, fail closed for sensitive operations). See [[/blogs/ecommerce-api-gateway|API gateways]].",
        ],
        callout: {
          type: "note",
          text: "Rate limits are one part of resource protection. OWASP also recommends maximum payload and upload sizes, a maximum page size for list endpoints, server-side validation of parameters that control how much data is returned, and spending limits or billing alerts on third-party services your API calls.",
        },
        cta: {
          title: "Building an API that partners and apps depend on?",
          description: "ZSpace Labs designs and builds APIs and web applications with authentication, rate limiting and monitoring planned in. See our [[/services/website-development|web application development service]].",
        },
      },
      {
        heading: "Strategy comparison",
        body: [],
        table: {
          headers: ["Strategy", "Good for", "Watch for"],
          rows: [
            ["Fixed window", "Simple internal limits", "Bursts at window boundaries"],
            ["Sliding window", "Smoother public API limits", "Slightly more state and computation"],
            ["Token bucket", "Bursty real-world clients", "Choosing refill rate and burst size"],
            ["Leaky bucket / queue", "Protecting fragile downstream systems", "Added latency; queued timeouts"],
            ["Per identity", "Fairness between users and tenants", "Unauthenticated traffic needs IP fallback"],
            ["Per operation", "Login, OTP, password reset, payments", "Locking out real users; add recovery paths"],
            ["Weighted / cost-based", "Expensive queries, exports, AI calls", "Explaining costs to client developers"],
            ["Plan quotas", "Paid APIs", "Visibility of usage before the limit"],
            ["429 + Retry-After", "Well-behaved clients", "Clients that ignore it; monitor them"],
            ["Central enforcement", "Multi-instance deployments", "Behaviour when the counter store fails"],
          ],
        },
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Setting limits without looking at real traffic; start from measured usage and leave headroom.",
          "One global limit for all endpoints, which is either too loose for login or too tight for reads.",
          "Returning 500 or 403 instead of 429, so clients cannot tell they should slow down.",
          "Not documenting limits, which leads to aggressive client retries that make things worse.",
          "Never reviewing who hits limits: a sudden rise can signal abuse, a broken client or a plan that no longer fits.",
          "Rate limiting without monitoring and alerting. See [[/blogs/application-monitoring-observability|application monitoring]].",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Good rate limiting is layered: a fair per-identity limit using a token bucket or sliding window, tighter limits on sensitive operations, weighted limits for expensive work, plan quotas where you sell access, and clear 429 responses with Retry-After. Enforce it centrally, document it, and watch the numbers. It sits alongside the other controls in [[/blogs/api-security-best-practices|API security best practices]].",
          "For token quotas, budgets and fallbacks on AI features, see [[/blogs/ai-cost-abuse-protection|protecting AI applications from cost abuse]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "IETF RFC 6585 (429 Too Many Requests) and RFC 9110 (Retry-After). IETF HTTPAPI working group, RateLimit header fields for HTTP (draft-ietf-httpapi-ratelimit-headers-11, May 2026). OWASP API Security Top 10 2023, API4 Unrestricted Resource Consumption. Accessed 28 October 2026.",
        ],
      },
    ],
  },

  // ---------------------------------------------- DATA TABLE DESIGN
  {
    slug: "data-table-design",
    title: "12 Data Table and Filter Features That Help Users Find Answers Faster",
    seoTitle: "12 Data Table and Filter Features for Dashboards and SaaS",
    excerpt:
      "Twelve data table features for dashboards and SaaS products, from sticky headers and visible filters to saved views, bulk actions and side-panel editing.",
    category: "UI/UX",
    banner: "comparetable",
    sceneKind: "analytics",
    bannerAlt: "A data table with sticky headers, active filter chips, sortable columns, row selection for bulk actions and a side panel showing one record",
    date: "2026-10-28",
    readingTime: "10 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise", "logistics-supply-chain"],
    relatedSlugs: ["saas-dashboard-design", "saas-empty-state-design", "ecommerce-filters"],
    faqs: [
      {
        q: "Should a data table use pagination or infinite scroll?",
        a: "For work tools where people need to find, compare and come back to records, pagination or a virtualised list with a visible total count is usually better than infinite scroll, which makes it hard to know how much data there is or return to a position. Infinite scroll suits browsing feeds more than task-focused tables.",
      },
      {
        q: "How should numbers be aligned in a table?",
        a: "Right-aligned, with the same number of decimal places, so digits line up and values are easy to compare. Text is usually left-aligned.",
      },
      {
        q: "Should filters be applied instantly or with an Apply button?",
        a: "Instant filtering works when results update quickly and each choice is independent. An Apply button suits slow queries or when users set several filters at once, so the table does not reload after every click.",
      },
    ],
    content: [
      {
        heading: "Which data table features help users most?",
        body: [
          "**The features that matter most are the ones that support the four tasks NN/g identifies for data tables: finding records that match criteria, comparing data, viewing or editing a single record, and taking action on records.** In practice that means sticky headers, clear sorting, visible filters with active-filter chips, search, saved views, column control, readable density and alignment, sensible pagination with totals, bulk actions, side-panel details, export and proper empty and loading states.",
          "This list is for product designers and front-end developers building admin panels, SaaS dashboards and internal tools, where tables are often the main screen. It complements our guide to [[/blogs/saas-dashboard-design|designing actionable SaaS dashboards]], which covers charts and layout rather than tables.",
        ],
      },
      {
        heading: "Finding records",
        body: [
          "**1. Visible filters with active-filter chips.** Put the most-used filters where people can see them, and show every active filter as a removable chip with a \"Clear all\" option. NN/g recommends a visible indicator when filters are active; hidden filters are a common reason users think data is missing.",
          "**2. Search within the table.** A search box across the main text columns (name, reference, email) finds a known record faster than any filter. Say which columns it searches.",
          "**3. Sensible default sort.** Decide the default order by the main task: newest first for activity, most urgent first for queues, alphabetical for directories. Show which column is sorted and in which direction.",
          "**4. Saved and shareable views.** Let users save filter, sort and column combinations as named views (\"My overdue invoices\"). Keeping the state in the URL lets people bookmark and share a view with a colleague.",
        ],
      },
      {
        heading: "Comparing data",
        body: [
          "**5. Sticky headers and first column.** NN/g advises freezing header rows and the first column when a table is larger than the screen, so people always know which column and record they are looking at.",
          "**6. Column choice, order and width.** Put the most important columns first and related columns next to each other; let users hide, reorder and resize columns, and remember their choices.",
          "**7. Readable alignment and density.** Right-align numbers with consistent decimals, left-align text, use subtle row separators or zebra striping and a hover highlight to track rows, and offer a compact or comfortable density option for different users and screens.",
          "**8. Sortable columns.** Let users sort by any column where order is meaningful, with a clear indicator. Sorting by status or date is often how people find what needs attention.",
        ],
      },
      {
        heading: "Viewing and acting on records",
        body: [
          "**9. Side-panel details.** Opening a record in a modal hides the table behind it. NN/g suggests a non-modal side panel so users can view or edit one record while still seeing the list, and move to the next record quickly.",
          "**10. Row actions and bulk actions.** Put the one or two most common actions on each row, with the rest in a menu. Add checkboxes with select-all for bulk actions such as assign, export or archive, and make clear whether \"select all\" means this page or every matching record.",
          "**11. Pagination with totals.** Show how many records match and where the user is (\"51–100 of 1,240\"). For very large datasets, virtualised scrolling keeps the page fast. Keep position when people return from a record.",
          "**12. Export that respects filters and permissions.** Exports should match what the user sees (current filters and columns) and only include data they are allowed to access. Large exports should run in the background and notify the user when ready.",
        ],
        cta: {
          title: "Tables your users struggle with?",
          description: "ZSpace Labs designs and builds SaaS dashboards, admin panels and internal tools around how people actually find and act on data. See our [[/services/ui-ux-design|UI/UX design service]].",
        },
      },
      {
        heading: "Feature checklist by task",
        body: [],
        table: {
          headers: ["Feature", "User task (NN/g)", "Priority for most products"],
          rows: [
            ["1. Visible filters and active chips", "Find", "Essential"],
            ["2. Search within table", "Find", "Essential"],
            ["3. Sensible default sort", "Find", "Essential"],
            ["4. Saved and shareable views", "Find", "When users repeat the same queries"],
            ["5. Sticky header and first column", "Compare", "Essential for wide or long tables"],
            ["6. Column choice and order", "Compare", "When users' needs differ"],
            ["7. Alignment and density", "Compare", "Essential"],
            ["8. Sortable columns", "Compare", "Essential"],
            ["9. Side-panel details", "View or edit a row", "When records are edited often"],
            ["10. Row and bulk actions", "Act on records", "When users process many records"],
            ["11. Pagination with totals", "Find and return", "Essential"],
            ["12. Filtered, permission-aware export", "Act on records", "When data leaves the product"],
          ],
        },
      },
      {
        heading: "States and accessibility",
        body: [
          "Design what the table shows while loading (a skeleton that keeps the layout), when there are no records yet, when filters match nothing, and when loading fails; each needs a different message and action. See [[/blogs/saas-empty-state-design|SaaS empty state patterns]].",
          "Use real table markup with header cells so screen readers announce column and row headers. For spreadsheet-like interactive grids, follow the WAI-ARIA Authoring Practices grid pattern for keyboard navigation. Make sort buttons, filter chips and row checkboxes reachable and labelled for keyboard and screen reader users.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Tables are where many business users spend their day. Design them around finding, comparing, viewing and acting: visible filters, search and sorting, sticky headers, readable alignment, side-panel details, bulk actions, clear totals and honest export. Test them with real data volumes, not five sample rows. For filters in shopping contexts, which follow different rules, see [[/blogs/ecommerce-filters|ecommerce product filters]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Nielsen Norman Group, Page Laubheimer, Data Tables: Four Major User Tasks (2022). W3C WAI-ARIA Authoring Practices Guide, table and grid patterns. Accessed 28 October 2026.",
        ],
      },
    ],
  },

  // ------------------------------------------ NOTIFICATION PREFERENCES
  {
    slug: "notification-preferences-design",
    title: "10 Notification Preference Patterns for Apps That Respect User Attention",
    seoTitle: "10 Notification Preference Patterns That Respect Users",
    excerpt:
      "Ten notification preference patterns for apps and SaaS products, from channel-by-type settings and digests to quiet hours, snooze and one-click unsubscribe.",
    category: "UI/UX",
    banner: "pushflow",
    sceneKind: "mobile",
    bannerAlt: "A notification settings screen with a grid of notification types against channels, a digest option, quiet hours and a snooze control",
    date: "2026-10-28",
    readingTime: "9 min read",
    relatedServiceSlugs: ["ui-ux-design", "mobile-app-development"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce", "education-edtech"],
    relatedSlugs: ["mobile-app-push-notifications", "order-status-notifications", "mobile-app-permissions"],
    faqs: [
      {
        q: "Should users be able to turn off all notifications?",
        a: "They should be able to turn off anything optional. Security alerts, receipts and messages required to deliver a service they asked for may stay on, but say clearly why they cannot be turned off and keep them few.",
      },
      {
        q: "Do marketing push notifications need consent?",
        a: "On iOS, Apple's App Review Guidelines say push notifications should not be used for promotions or direct marketing unless customers have explicitly opted in through consent language in the app, with an in-app way to opt out. Privacy and marketing laws in many markets add their own consent rules for marketing messages.",
      },
      {
        q: "What is a notification digest?",
        a: "A single message that summarises several updates over a period, such as a daily summary of comments, instead of sending each one as it happens. It suits frequent, non-urgent updates.",
      },
    ],
    content: [
      {
        heading: "Which notification preferences should an app offer?",
        body: [
          "**Separate essential notifications from optional ones, let users choose channels per notification type, offer digests for frequent updates, add quiet hours and snooze, allow muting individual threads or items, put \"turn off notifications like this\" next to the notification itself, keep marketing opt-in and easy to leave, respect the operating system's settings, and start with sensible defaults.** The goal is fewer, more wanted notifications, so that people do not turn everything off or uninstall.",
          "This list is for product designers and developers of mobile apps and SaaS products. It covers preference design; for when and how to send push notifications in the first place, see [[/blogs/mobile-app-push-notifications|push notifications in mobile apps]]. Platform rules were checked against Apple, Android and Google documentation on 28 October 2026.",
        ],
      },
      {
        heading: "Structure",
        body: [
          "**1. Separate essential from optional.** Group notifications into those needed to deliver the service (security alerts, password resets, receipts, order updates the user asked for) and optional ones (activity, reminders, recommendations, marketing). Only essential ones should be locked on, and the screen should say why.",
          "**2. A channel-by-type grid.** For each notification type, let users choose push, email, SMS or in-app. A simple grid of types against channels is the familiar pattern in SaaS products. Keep the number of types small and named in the user's terms (\"Comments on my tasks\", not \"entity_comment_created\").",
          "**3. Map types to Android notification channels.** Since Android 8.0 every notification must belong to a channel, and users can change each channel's behaviour in system settings. Android's documentation notes that apps cannot change a channel's importance after creating it, so design channels around the types users will want to control separately.",
        ],
      },
      {
        heading: "Frequency and timing",
        body: [
          "**4. Digests.** Offer a daily or weekly summary for frequent, non-urgent updates such as comments, likes or reports. Many users prefer one digest to a stream of individual alerts.",
          "**5. Quiet hours.** Let users set hours when non-urgent notifications are held until morning, in their own time zone. Respect device focus and do-not-disturb modes rather than trying to work around them.",
          "**6. Snooze.** A \"pause notifications for 1 hour, until tomorrow or for a week\" option helps during holidays or busy periods, and is less drastic than turning things off.",
        ],
      },
      {
        heading: "Granular control",
        body: [
          "**7. Mute or follow individual items.** Let users mute a noisy thread, project or channel, or follow one they care about, without changing global settings.",
          "**8. In-context controls.** Put \"Turn off notifications like this\" in the notification's menu, the email footer or the in-app activity feed, linking directly to the right setting. People decide at the moment they are annoyed, not when they visit a settings page.",
        ],
      },
      {
        heading: "Consent and defaults",
        body: [
          "**9. Marketing opt-in and easy opt-out.** Apple's guideline 4.5.4 says push notifications should not be used for promotions or direct marketing unless users explicitly opted in through consent language in the app, with an in-app way to opt out, and that push must not be required for the app to work. For email, Google's sender guidelines require senders of more than 5,000 messages a day to support one-click unsubscribe for marketing and subscribed messages. Check the consent rules in your markets too.",
          "**10. Sensible defaults and synced preferences.** Start new users with a small set of useful notifications on, not everything. Store preferences on the server so they apply across devices, and keep them consistent with the operating system: if the user has turned off your notifications at the OS level, do not keep asking. See [[/blogs/mobile-app-permissions|when to request permissions]].",
        ],
        cta: {
          title: "Designing notifications people actually want?",
          description: "ZSpace Labs designs and builds notification systems and preference centres for apps and SaaS products. See our [[/services/ui-ux-design|UI/UX design]] and [[/services/mobile-app-development|mobile app development]] services.",
        },
      },
      {
        heading: "Pattern summary",
        body: [],
        table: {
          headers: ["Pattern", "Solves", "Implementation note"],
          rows: [
            ["1. Essential vs optional", "Users turning off critical alerts", "Explain why essentials stay on"],
            ["2. Channel-by-type grid", "One-size-fits-all settings", "Few types, named in user language"],
            ["3. Android channels by type", "Coarse system-level control", "Importance fixed once created"],
            ["4. Digests", "Notification overload", "Server-side batching"],
            ["5. Quiet hours", "Night-time interruptions", "Use the user's time zone"],
            ["6. Snooze", "Temporary overload", "Auto-resume with a reminder"],
            ["7. Mute or follow items", "Noisy threads", "Per-item subscription records"],
            ["8. In-context controls", "Hard-to-find settings", "Deep link to the exact setting"],
            ["9. Marketing opt-in and opt-out", "Unwanted promotions; store and email rules", "Consent records; one-click unsubscribe"],
            ["10. Defaults and sync", "Inconsistent behaviour across devices", "Store preferences server-side"],
          ],
        },
      },
      {
        heading: "Measuring whether it works",
        body: [],
        checklist: [
          "Track opt-out and mute rates by notification type; a type many people turn off is probably too frequent or not useful.",
          "Watch OS-level notification permission rates and uninstalls after notification campaigns.",
          "Measure engagement per notification (opened, acted on), not just sends.",
          "Review the full list of notification types every few months and retire unused ones.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Notification preferences are how an app earns the right to interrupt. Keep essentials separate, let people choose channels and frequency, provide digests, quiet hours, snooze and per-item control, honour marketing consent and system settings, and default to fewer notifications. For the messages ecommerce customers expect after buying, see [[/blogs/order-status-notifications|order status notifications]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Apple App Review Guidelines, 4.5.4 Push Notifications. Android Developers, create and manage notification channels. Google Workspace Admin Help, email sender guidelines (one-click unsubscribe). Accessed 28 October 2026.",
        ],
      },
    ],
  },
];
