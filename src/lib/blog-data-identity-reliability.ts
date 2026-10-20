import type { BlogPost } from "./blog-data";

/**
 * UK batch 481–530, generic engineering set: joiner-mover-leaver automation
 * (494, absorbing identity governance and access reviews, 495) and SLOs and
 * error budgets for SaaS teams (528). Generic slugs in British English; no
 * jurisdiction-specific claims beyond pointers to NCSC Cyber Essentials.
 * Error budget arithmetic and burn-rate thresholds follow the Google SRE
 * workbook. Sources checked 2026-10-10: RFC 7643/7644 (SCIM); Microsoft
 * Entra lifecycle workflows; NCSC Cyber Essentials; sre.google.
 */
export const identityReliabilityPosts: BlogPost[] = [
  {
    slug: "joiner-mover-leaver-automation",
    title: "Joiner-Mover-Leaver Automation: Managing Employee Access Across Business Systems",
    seoTitle: "Joiner-Mover-Leaver Automation: Access Across Systems",
    excerpt:
      "How to automate joiner, mover and leaver access: HR as the source of truth, role-based access, SCIM provisioning, access reviews and offboarding evidence.",
    category: "Web Development",
    banner: "permissionflow",
    sceneKind: "security",
    bannerAlt: "An HR change for a joiner, mover or leaver flowing to the identity provider, which grants or removes role-based access in connected applications through SCIM or APIs, with access reviews and an audit trail",
    date: "2026-10-10",
    readingTime: "5 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["b2b-enterprise", "saas-technology", "cybersecurity", "professional-services"],
    relatedSlugs: ["enterprise-sso-implementation", "saas-roles-and-permissions", "workflow-automation"],
    faqs: [
      {
        q: "What is joiner-mover-leaver (JML)?",
        a: "The process of giving people the right access when they join, changing it when their role changes, and removing it when they leave. Automating JML means HR events trigger those changes in the identity provider and connected applications, with approvals and records.",
      },
      {
        q: "Why are movers the hardest part?",
        a: "Because access from the old role is often left in place when new access is added. Over time people accumulate permissions they no longer need. Automating removal of role-based access on a move, with a short overlap if needed, prevents this.",
      },
      {
        q: "What is SCIM?",
        a: "System for Cross-domain Identity Management, an open standard (RFC 7643 and RFC 7644) for creating, updating and deactivating user accounts and groups across systems. Many SaaS applications accept SCIM from identity providers.",
      },
      {
        q: "What about applications that do not support SCIM?",
        a: "Use the application's API if it has one, a connector from your identity governance tool, or a tracked task for an administrator with a deadline and confirmation. Do not leave them out of the process.",
      },
      {
        q: "How often should access be reviewed?",
        a: "Set it by risk: privileged and sensitive access more often, such as quarterly, and general access less often. Reviews should show reviewers what the access allows and make removal one click.",
      },
    ],
    content: [
      {
        heading: "What should joiner-mover-leaver automation do?",
        body: [
          "**Joiner-mover-leaver (JML) automation should take HR changes as the trigger, create or update the person in the identity provider, grant birthright access by role and location, route extra access through requests and approvals, remove old access when people move, disable accounts and sessions promptly when people leave, and record every change for audit.** Periodic access reviews and segregation-of-duties checks catch what automation misses.",
          "This guide is for IT, security and operations leads at organisations with dozens of business applications and people joining, moving and leaving every month.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Make the HR system the source of truth for who works here and in what role.",
          "Grant birthright access by role; request everything else with approval.",
          "On a move, remove old role access as well as adding new.",
          "On leaving, disable sign-in and revoke sessions and tokens, not just licences.",
          "Include non-SCIM applications through APIs or tracked tasks.",
          "Review privileged access regularly and record decisions.",
        ],
      },
      {
        heading: "Joiners, movers and leavers at a glance",
        body: [],
        table: {
          headers: ["Event", "Trigger", "Actions", "Main risk"],
          rows: [
            ["**Joiner**", "Hire confirmed in HR with start date", "Create identity; assign role groups; provision apps; prepare device; activate on day one", "Access too early, or too late to be productive"],
            ["**Mover**", "Role, team, location or manager change", "Add new role access; remove old role access after an agreed overlap; re-approve exceptions", "Privilege creep"],
            ["**Leaver**", "Termination date and time in HR", "Disable sign-in; revoke sessions and tokens; deprovision apps; transfer data ownership; recover devices", "Former staff retaining access"],
            ["**Contractor or temporary staff**", "Engagement record with end date", "Time-limited access; sponsor; automatic expiry", "Accounts that never expire"],
          ],
        },
      },
      {
        heading: "Reference architecture",
        body: [
          "The common pattern is HR system to identity provider to applications. The identity provider (for example Microsoft Entra ID, Okta or Google Workspace) holds groups that represent roles, and pushes accounts to applications through SCIM or connectors. Lifecycle features such as Microsoft Entra lifecycle workflows can run tasks before a start date or after a leave date. For sign-in and provisioning detail, see [[/blogs/enterprise-sso-implementation|enterprise SSO implementation]].",
        ],
        table: {
          headers: ["Layer", "Responsibility"],
          rows: [
            ["**HR system**", "Who the person is, role, department, location, manager, start and end dates"],
            ["**Identity provider**", "Accounts, authentication, groups, conditional access, session revocation"],
            ["**Role model**", "Mapping from HR attributes to groups and application entitlements"],
            ["**Provisioning**", "SCIM, APIs or tracked admin tasks per application"],
            ["**Requests and approvals**", "Access beyond birthright, with owner approval and expiry"],
            ["**Reviews and audit**", "Periodic certifications, segregation-of-duties checks, change logs"],
          ],
        },
      },
      {
        heading: "Designing the role model",
        body: [
          "Start small. Define birthright access that everyone in a department or location gets, such as email, chat and the intranet, then role bundles for common jobs. Keep exceptions as requests with an expiry rather than adding more roles. Name groups by purpose, give each application entitlement an owner, and keep the mapping in configuration that people can review. For product-side permissions inside your own SaaS, see [[/blogs/saas-roles-and-permissions|SaaS roles and permissions]].",
        ],
      },
      {
        heading: "Leavers: what complete offboarding looks like",
        body: [],
        checklist: [
          "Disable the identity at the agreed date and time, or immediately for urgent exits.",
          "Revoke active sessions, refresh tokens and app passwords.",
          "Deprovision accounts in every connected application, including non-SCIM ones.",
          "Rotate shared secrets and credentials the person knew.",
          "Transfer ownership of files, mailboxes, repositories and automations.",
          "Recover devices and wipe or reassign them.",
          "Record completion per system, with exceptions followed up.",
        ],
      },
      {
        heading: "Access reviews and segregation of duties",
        body: [
          "Automation keeps access aligned with HR data, but it cannot judge whether someone still needs an exception or whether two permissions together are risky. Periodic access reviews ask managers or application owners to confirm or remove access. Segregation-of-duties rules flag combinations that let one person complete a sensitive process alone.",
        ],
        table: {
          headers: ["Combination", "Why it is risky", "Typical control"],
          rows: [
            ["Create supplier and approve payment", "One person could pay a fictitious supplier", "Block, or require a second approver"],
            ["Deploy code and approve own changes", "Unreviewed changes reach production", "Branch protection and separate approvers"],
            ["Administer identity and audit logs", "Changes could be hidden", "Separate admin roles; immutable logs"],
          ],
        },
      },
      {
        heading: "Evidence for security frameworks",
        body: [
          "Joiner, mover and leaver records help show user access control in frameworks such as the NCSC's Cyber Essentials and ISO/IEC 27001. Keep logs of who approved what, when access was granted and removed, and review outcomes. Software produces the evidence; your policies and assessors decide what is enough.",
        ],
      },
      {
        heading: "Hypothetical example: a 300-person services firm",
        body: [
          "**This example is hypothetical.** A professional services firm onboarded people by email checklist and found former contractors still active in its project tool months after they left. It connected its HR system to its identity provider, defined birthright and role groups for five job families, turned on SCIM for the applications that supported it and created tracked tasks for three that did not, and set contractor access to expire on the engagement end date. Quarterly reviews now cover finance and admin roles.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Starting from the identity provider instead of clean HR data.",
          "Only adding access on a move.",
          "Disabling licences but leaving sessions and tokens active.",
          "Ignoring applications without SCIM.",
          "Hundreds of roles that nobody can review.",
          "Access reviews that show entitlement codes reviewers cannot understand.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Standards and platforms: RFC 7643 (SCIM core schema); RFC 7644 (SCIM protocol); Microsoft Entra lifecycle workflows; NCSC: Cyber Essentials.",
          "Accessed 10 October 2026.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "JML automation works when HR data is trustworthy, roles are few and owned, moves remove old access, leavers lose sessions as well as accounts, and every application is covered by SCIM, an API or a tracked task. Access reviews and segregation-of-duties checks cover the judgement automation cannot.",
        ],
        cta: {
          title: "Still offboarding people with a checklist?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/website-development|identity integrations and internal tools]] and [[/services/ai-automation|workflow automation]]. If it would help to map your HR, identity and application flows, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "slos-and-error-budgets",
    title: "SLOs and Error Budgets for SaaS Teams: Turning Reliability into Release Decisions",
    seoTitle: "SLOs and Error Budgets for SaaS Teams: A Practical Guide",
    excerpt:
      "How SaaS teams choose SLIs, set SLOs, calculate error budgets, alert on burn rate and use an error budget policy to decide when to ship and when to fix.",
    category: "Web Development",
    banner: "observabilitymap",
    sceneKind: "monitor",
    bannerAlt: "User journeys measured as service level indicators, compared with SLO targets, with the remaining error budget and burn rate driving alerts and release decisions",
    date: "2026-10-10",
    readingTime: "5 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["saas-technology", "fintech", "ecommerce", "startups"],
    relatedSlugs: ["application-monitoring-observability", "zero-downtime-deployments", "scaling-saas-applications"],
    faqs: [
      {
        q: "What is the difference between an SLI, an SLO and an SLA?",
        a: "An SLI (service level indicator) is a measurement, such as the share of requests that succeed. An SLO (service level objective) is the target for that measurement over a period, such as 99.9% over 30 days. An SLA (service level agreement) is a contract with customers, usually with credits, and should be looser than the internal SLO.",
      },
      {
        q: "What is an error budget?",
        a: "The amount of unreliability the SLO allows. With a 99.9% availability SLO over 30 days, the budget is 0.1%: about 43 minutes of full downtime, or 1,000 failed requests in every million.",
      },
      {
        q: "Should we aim for 100% reliability?",
        a: "No. Users cannot tell the difference beyond a point, their own networks and devices fail more often, and each extra nine costs more engineering time. Set targets from what users need.",
      },
      {
        q: "What is burn-rate alerting?",
        a: "Alerting on how fast the error budget is being consumed rather than on raw error rates. A burn rate of 1 uses the whole budget exactly over the SLO period; a burn rate of 14.4 over an hour would use 2% of a 30-day budget in that hour, which usually warrants paging someone.",
      },
      {
        q: "What happens when the error budget runs out?",
        a: "Whatever your error budget policy says. Commonly, non-urgent feature releases pause and the team prioritises reliability work until the budget recovers, with exceptions agreed in advance.",
      },
    ],
    content: [
      {
        heading: "How do SLOs and error budgets work?",
        body: [
          "**Pick a few service level indicators (SLIs) that reflect what users experience, such as successful requests or fast page loads for key journeys. Set a service level objective (SLO) for each over a rolling window, for example 99.9% of checkout requests succeed over 30 days. The gap between the SLO and 100% is the error budget. Alert when the budget is burning fast, and agree an error budget policy: while budget remains, ship features; when it is exhausted, prioritise reliability.** SLOs turn reliability arguments into a shared, measurable decision.",
          "This guide is for engineering and product leads at SaaS companies who want reliability targets that influence what gets built.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Measure user journeys, not servers.",
          "Start with two or three SLOs, not dozens.",
          "Set SLAs looser than SLOs.",
          "Alert on burn rate, not on every error spike.",
          "Write the error budget policy before you need it.",
          "Review SLOs quarterly against user feedback and incidents.",
        ],
      },
      {
        heading: "Definitions",
        body: [],
        table: {
          headers: ["Term", "Meaning", "Example"],
          rows: [
            ["**SLI**", "A ratio of good events to valid events", "Checkout API requests returning success within 1 second / all checkout requests"],
            ["**SLO**", "Target for an SLI over a window", "99.9% over a rolling 30 days"],
            ["**Error budget**", "1 − SLO, over the window", "0.1% of requests, or about 43 minutes"],
            ["**Burn rate**", "How fast budget is being used relative to the window", "Burn rate 2 exhausts a 30-day budget in 15 days"],
            ["**SLA**", "Contractual commitment with remedies", "99.5% monthly availability with service credits"],
          ],
        },
      },
      {
        heading: "Choosing SLIs",
        body: [
          "Start from the journeys users care about: signing in, loading the main dashboard, saving work, checking out, receiving webhooks. For each, pick indicators measured as close to the user as practical, at the load balancer or API gateway rather than inside one service.",
        ],
        checklist: [
          "**Availability:** share of valid requests that succeed (exclude client errors you cannot fix).",
          "**Latency:** share of requests faster than a threshold, rather than an average.",
          "**Correctness:** share of jobs or calculations producing the right result.",
          "**Freshness:** share of time data is updated within an agreed delay, for pipelines and syncs.",
          "**Durability:** for storage, share of data retrievable.",
        ],
      },
      {
        heading: "Error budget arithmetic",
        body: [
          "Time-based budgets are easy to explain; request-based budgets are fairer when traffic varies. Both come from the same calculation.",
        ],
        table: {
          headers: ["SLO", "Budget over 30 days (time)", "Failed requests allowed per 1,000,000"],
          rows: [
            ["99%", "7.2 hours", "10,000"],
            ["99.5%", "3.6 hours", "5,000"],
            ["99.9%", "43.2 minutes", "1,000"],
            ["99.95%", "21.6 minutes", "500"],
            ["99.99%", "4.3 minutes", "100"],
          ],
        },
        code: {
          label: "Availability SLI as a ratio (Prometheus-style, illustrative)",
          text: `# Good events / valid events over 30 days
sum(rate(http_requests_total{route="/checkout", code!~"5.."}[30d]))
/
sum(rate(http_requests_total{route="/checkout"}[30d]))`,
        },
      },
      {
        heading: "Alerting on burn rate",
        body: [
          "Alerting on every error spike wakes people for blips; alerting on SLO breaches alerts too late. The Google SRE workbook recommends multiwindow, multi-burn-rate alerts. A common starting point for a 30-day SLO:",
        ],
        table: {
          headers: ["Budget consumed", "Long window", "Short window", "Burn rate", "Response"],
          rows: [
            ["2%", "1 hour", "5 minutes", "14.4", "Page"],
            ["5%", "6 hours", "30 minutes", "6", "Page"],
            ["10%", "3 days", "6 hours", "1", "Ticket"],
          ],
        },
        callout: {
          type: "tip",
          text: "The short window stops alerts firing long after a problem has been fixed. Tune thresholds for low-traffic services, where a handful of failures can look like a fast burn.",
        },
      },
      {
        heading: "Writing an error budget policy",
        body: [
          "The policy is what turns numbers into decisions. Agree it between engineering and product leadership in advance, so it is not negotiated during an incident. Google publishes an example error budget policy.",
        ],
        checklist: [
          "What happens when budget is exhausted: pause non-urgent releases, prioritise reliability fixes.",
          "Exceptions: security fixes, legal requirements and agreed critical launches.",
          "When a single incident uses a large share of budget, a post-incident review is mandatory.",
          "Who decides, and how disagreements are escalated.",
          "When the policy and SLOs are reviewed.",
        ],
      },
      {
        heading: "SLOs in multi-tenant SaaS",
        body: [
          "An aggregate SLO can look healthy while one large customer has a bad week. Track SLIs per tenant or tier for important accounts, and consider separate SLOs for enterprise tiers with their own SLAs. Dependencies matter too: if a payment provider or identity provider fails, your users still see failure, so decide whether to count it and how to degrade gracefully. See [[/blogs/scaling-saas-applications|scaling SaaS applications]] and [[/blogs/multi-tenant-saas-architecture|multi-tenant SaaS architecture]].",
        ],
      },
      {
        heading: "Connecting SLOs to releases",
        body: [
          "Deployments cause a large share of incidents, so tie release practices to the budget: progressive rollouts and automatic rollback when burn rate spikes, feature flags to turn off risky changes, and release freezes only when the policy says so. See [[/blogs/zero-downtime-deployments|zero-downtime deployments]] and [[/blogs/feature-flag-implementation|feature flag implementation]].",
        ],
      },
      {
        heading: "Hypothetical example: a B2B scheduling platform",
        body: [
          "**This example is hypothetical.** A scheduling SaaS team argued every month about whether to slow down for reliability. It defined three SLOs (sign-in availability 99.9%, booking API success 99.9%, calendar sync freshness within 5 minutes for 99% of the time), added burn-rate alerts, and agreed that non-urgent releases pause when a 30-day budget is exhausted. In the first quarter, a sync bug used most of the freshness budget; the team spent two sprints on the sync pipeline, and the debate became a decision based on shared numbers.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "SLOs for every service instead of user journeys.",
          "Targets copied from SLAs or set at 99.99% by default.",
          "Averages instead of thresholds for latency.",
          "No error budget policy, so the numbers change nothing.",
          "Alerting on SLO breach instead of burn rate.",
          "Never revisiting targets.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Google SRE book: Service Level Objectives; SRE workbook: Implementing SLOs; SRE workbook: Alerting on SLOs; SRE workbook: example error budget policy.",
          "Accessed 10 October 2026.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "SLOs work when they measure what users feel, the error budget is calculated honestly, alerts follow burn rate, and a written policy says what happens when the budget is gone. Start with a few journeys, review quarterly, and use the budget to decide between features and reliability rather than arguing about it. For the monitoring underneath, see [[/blogs/application-monitoring-observability|application monitoring and observability]].",
        ],
        cta: {
          title: "Want reliability targets your team will actually use?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/website-development|SaaS engineering, monitoring and release pipelines]]. If it would help to define SLIs, SLOs and alerts for your product, we are happy to talk it through.",
        },
      },
    ],
  },
];
