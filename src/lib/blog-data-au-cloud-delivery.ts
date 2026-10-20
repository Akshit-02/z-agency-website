import type { BlogPost } from "./blog-data";

/**
 * Batch 281–330 cloud and delivery set: Kubernetes vs serverless vs virtual
 * machines, infrastructure as code, secrets management and zero-downtime
 * deployments. Generic slugs in Australian English; deep dives linked from
 * devops-for-growing-businesses. Educational: ZSpace Labs does not offer
 * managed cloud, DevOps retainers or security services, and the CTAs say so
 * where relevant. No benchmark or cost figures are quoted.
 * Sources checked 2026-10-10: AWS Lambda quotas (900 s timeout, 128–10,240 MB
 * memory); Kubernetes Deployment docs; martinfowler.com BlueGreenDeployment
 * and CanaryRelease; OWASP Secrets Management Cheat Sheet; GitHub secret
 * scanning docs; HashiCorp Terraform and OpenTofu sites; 12factor.net config.
 */
export const auCloudDeliveryPosts: BlogPost[] = [
  {
    slug: "kubernetes-vs-serverless-vs-virtual-machines",
    title: "Kubernetes vs Serverless vs Virtual Machines: Choosing an Application Platform",
    seoTitle: "Kubernetes vs Serverless vs VMs: How to Choose",
    excerpt:
      "Kubernetes vs serverless vs virtual machines and managed platforms: control, operations effort, scaling, cost behaviour, limits and which fits.",
    category: "Web Development",
    banner: "servingstack",
    sceneKind: "compare",
    bannerAlt: "Four ways to run an application compared: virtual machines, a managed platform, Kubernetes containers and serverless functions, on control, operations effort and scaling",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["saas-technology", "startups", "ecommerce", "fintech"],
    relatedSlugs: ["devops-for-growing-businesses", "scaling-saas-applications", "cloud-cost-optimization-australia"],
    faqs: [
      {
        q: "Should a small team use Kubernetes?",
        a: "Usually not as a first choice. Kubernetes is powerful for running many services with consistent tooling, but it adds operational work even when managed by a cloud provider. Small teams often move faster on a managed application platform or serverless containers, adopting Kubernetes when scale, service count or portability needs justify it.",
      },
      {
        q: "What are the limits of serverless functions?",
        a: "Functions have execution time, memory and payload limits; for example, AWS Lambda functions can run for up to 15 minutes per invocation with up to 10,240 MB of memory. Cold starts can add latency, long-running or stateful work fits poorly, and costs can rise at sustained high volume.",
      },
      {
        q: "Are virtual machines outdated?",
        a: "No. VMs remain a good fit for legacy applications, software that needs full operating system control, steady workloads and licensed products. They need patching, scaling and configuration management, which infrastructure as code helps with.",
      },
      {
        q: "Which is cheapest?",
        a: "It depends on the workload. Serverless is often cheapest for spiky or low traffic because you pay per use. Steady, high-utilisation workloads can be cheaper on VMs or containers with commitment discounts. Include engineering and operations time, not just the cloud bill.",
      },
      {
        q: "Can we mix them?",
        a: "Yes, and most organisations do: a web application on a managed platform or containers, background jobs and event handlers on serverless functions, and a legacy system on a VM. Consistent deployment, monitoring and security across them matters more than uniformity.",
      },
    ],
    content: [
      {
        heading: "Kubernetes, serverless or virtual machines?",
        body: [
          "**Choose virtual machines for legacy or OS-dependent software and steady workloads; a managed application platform or serverless containers for most web apps and APIs run by small teams; serverless functions for event-driven and spiky workloads that fit their limits; and Kubernetes when you run many services, need consistent portable tooling and have the skills to operate it.** Most organisations mix several options; the goal is the least operational effort that meets your needs.",
          "This guide is for CTOs, technical founders and engineering leads. For the delivery practices around any platform, see [[/blogs/devops-for-growing-businesses|DevOps for growing businesses]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Start with the simplest platform that meets requirements.",
          "Managed platforms reduce operations work for small teams.",
          "Serverless suits events and spiky load within its limits.",
          "Kubernetes pays off with many services and platform skills.",
          "Compare total cost, including people's time.",
        ],
      },
      {
        heading: "The options",
        body: [],
        table: {
          headers: ["Option", "You manage", "Provider manages"],
          rows: [
            ["**Virtual machines**", "OS, patching, runtime, scaling, app", "Hardware, hypervisor"],
            ["**Managed app platform (PaaS)**", "App code and configuration", "OS, runtime, scaling, load balancing"],
            ["**Serverless containers**", "Container image and configuration", "Servers, scaling (often to zero)"],
            ["**Kubernetes (managed)**", "Workloads, cluster configuration, add-ons, upgrades", "Control plane, often node infrastructure"],
            ["**Serverless functions**", "Function code and triggers", "Everything else"],
          ],
        },
      },
      {
        heading: "Comparison",
        body: [],
        table: {
          headers: ["Factor", "VMs", "Managed platform", "Kubernetes", "Functions"],
          rows: [
            ["**Control**", "Highest", "Lower", "High", "Lowest"],
            ["**Operations effort**", "High", "Low", "Medium to high", "Low"],
            ["**Scaling**", "Manual or autoscaling groups", "Built in", "Built in, configurable", "Automatic, per request"],
            ["**Long-running work**", "Yes", "Yes", "Yes", "Limited (for example 15 minutes on Lambda)"],
            ["**Cost behaviour**", "Pay for capacity", "Pay for instances or usage", "Pay for nodes", "Pay per invocation and duration"],
            ["**Portability**", "Image-based", "Platform-specific", "High across providers", "Provider-specific"],
          ],
        },
      },
      {
        heading: "Constraints to check",
        body: [
          "Serverless functions have time, memory and payload limits; AWS documents a 900-second (15-minute) maximum timeout and memory from 128 MB to 10,240 MB for Lambda. Cold starts affect latency-sensitive endpoints. Kubernetes needs regular version upgrades, security configuration, networking and observability skills. VMs need patching and configuration management, ideally through [[/blogs/infrastructure-as-code|infrastructure as code]]. Check that each service is available in the Australian region you need.",
        ],
      },
      {
        heading: "Which fits?",
        body: [],
        checklist: [
          "**A single web app or API, small team:** managed platform or serverless containers.",
          "**Background jobs, webhooks, scheduled tasks:** serverless functions or a job queue.",
          "**Many services, several teams, portability needs:** managed Kubernetes.",
          "**Legacy or licensed software:** VMs, possibly later containerised.",
          "**AI inference with GPUs:** managed inference services or Kubernetes with GPU nodes, depending on scale.",
        ],
      },
      {
        heading: "Hypothetical example: a growing SaaS",
        body: [
          "**This example is hypothetical.** A SaaS company ran its web app on a managed platform, its webhook handlers and nightly reports on serverless functions, and a licensed reporting tool on a VM. As it grew to a dozen services and three teams, it moved the web app and APIs to managed Kubernetes for consistent deployments, keeping functions for event handlers. It measured deployment time, incidents and monthly cost before and after rather than assuming the move would help.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Adopting Kubernetes before there is a need or the skills.",
          "Forcing long-running jobs into functions.",
          "Ignoring cold starts on user-facing endpoints.",
          "Hand-configured VMs nobody can rebuild.",
          "Comparing cloud bills without engineering time.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/scaling-saas-applications|Scaling SaaS applications]] for growth patterns.",
          "[[/blogs/zero-downtime-deployments|Zero-downtime deployments]] for releasing on any platform.",
          "[[/blogs/cloud-migration-australia|Cloud migration in Australia]] for moving existing systems.",
          "[[/blogs/application-monitoring-observability|Application monitoring and observability]] for running in production.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "There is no single best platform. Use the simplest option that meets your requirements, mix where it helps, and move to more complex platforms such as Kubernetes when service count, team size and skills justify the operational cost.",
        ],
        cta: {
          title: "Choosing where to run your application?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|web applications, APIs and their deployment]]. We do not offer managed cloud operations, but if it would help to choose a platform for software we build, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "infrastructure-as-code",
    title: "Infrastructure as Code: Benefits, Risks and Implementation Best Practices",
    seoTitle: "Infrastructure as Code: Benefits and Best Practices",
    excerpt:
      "Infrastructure as code explained: benefits, tools (Terraform, OpenTofu, CloudFormation, Bicep, Pulumi), state, reviews, drift, secrets and adoption.",
    category: "Web Development",
    banner: "techstack",
    sceneKind: "code",
    bannerAlt: "Cloud infrastructure defined in version-controlled code, reviewed in a pull request with a plan preview, applied by CI and checked for drift against the live environment",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["saas-technology", "startups", "fintech", "ecommerce"],
    relatedSlugs: ["devops-for-growing-businesses", "secrets-management", "cloud-security-posture-review-australia"],
    faqs: [
      {
        q: "What is infrastructure as code?",
        a: "Defining cloud and server infrastructure, such as networks, databases, compute, permissions and DNS, in version-controlled files that tools use to create and update resources, instead of configuring them by hand in a console.",
      },
      {
        q: "Which tool should we use?",
        a: "Common choices are Terraform and its open-source fork OpenTofu for multi-cloud, AWS CloudFormation or CDK for AWS, Bicep for Azure, and Pulumi for general-purpose programming languages. Choose based on your cloud, team skills and licensing preferences, then standardise.",
      },
      {
        q: "What is state and why does it matter?",
        a: "Tools such as Terraform keep a state file mapping code to real resources. It must be stored remotely, locked during changes, backed up and protected, because it can contain sensitive values and losing or corrupting it makes changes risky.",
      },
      {
        q: "What is drift?",
        a: "Differences between the code and the live environment, usually from manual changes in the console. Detect drift by running plans regularly, and either bring the change into code or revert it.",
      },
      {
        q: "Is IaC worth it for a small business?",
        a: "Usually yes for anything you would need to rebuild after an incident or replicate for staging. Start with the most important resources, such as the database, networking and production compute, rather than everything at once.",
      },
    ],
    content: [
      {
        heading: "What is infrastructure as code and how do you adopt it?",
        body: [
          "**Infrastructure as code (IaC) defines cloud resources in version-controlled files that tools apply automatically. Adopt it by choosing one tool, storing state securely, organising code into reusable modules per environment, reviewing plans in pull requests, applying changes through CI rather than laptops, keeping secrets out of code, and checking for drift.** The benefits are repeatability, review and recovery; the risks are mostly about state, permissions and accidental deletion.",
          "This guide is for engineering leads and developers. It is a deep dive from [[/blogs/devops-for-growing-businesses|DevOps for growing businesses]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Pick one tool per cloud and standardise.",
          "Remote, locked, encrypted, backed-up state.",
          "Review plans before apply; apply from CI.",
          "No secrets in code or plain-text state where avoidable.",
          "Detect and resolve drift.",
          "Protect critical resources from deletion.",
        ],
      },
      {
        heading: "Benefits",
        body: [],
        checklist: [
          "Rebuild environments after incidents or for new regions.",
          "Consistent staging and production.",
          "Peer review and history for every infrastructure change.",
          "Security and cost policies checked automatically.",
          "Faster, documented onboarding for new engineers.",
        ],
      },
      {
        heading: "Tools",
        body: [],
        table: {
          headers: ["Tool", "Approach", "Notes"],
          rows: [
            ["**Terraform**", "Declarative HCL, many providers", "Widely used; licensed under the Business Source Licence since 2023"],
            ["**OpenTofu**", "Open-source fork of Terraform", "Community-governed"],
            ["**AWS CloudFormation / CDK**", "AWS-native templates or code", "Deep AWS integration"],
            ["**Azure Bicep**", "Azure-native declarative language", "Deep Azure integration"],
            ["**Pulumi**", "General-purpose languages", "Familiar to application developers"],
          ],
        },
      },
      {
        heading: "Practices that matter",
        body: [],
        checklist: [
          "**State:** remote backend with locking, encryption, access control and versioning.",
          "**Structure:** modules for repeated patterns; separate state per environment and per major component to limit blast radius.",
          "**Review:** run a plan in CI on every pull request and require approval for production.",
          "**Apply:** from CI with short-lived credentials, not from developer laptops.",
          "**Policy:** automated checks for public exposure, encryption, tagging and cost.",
          "**Protection:** deletion protection on databases and critical storage; review any plan that destroys resources.",
          "**Drift:** scheduled plans that alert on differences.",
        ],
      },
      {
        heading: "Secrets and security",
        body: [
          "Do not put passwords or keys in IaC files. Reference a secret store, generate secrets inside the cloud provider, and treat state as sensitive because some resources write secret values into it. Give the CI role only the permissions it needs. See [[/blogs/secrets-management|secrets management]] and [[/blogs/cloud-security-posture-review-australia|cloud security posture reviews]].",
        ],
      },
      {
        heading: "Adopting IaC step by step",
        body: [],
        checklist: [
          "Choose a tool and a remote state backend.",
          "Import the most critical existing resources: network, database, production compute, DNS.",
          "Set up CI to plan on pull requests and apply on merge with approval.",
          "Recreate staging from code to prove it works.",
          "Add policy checks and drift detection.",
          "Stop console changes in production except for emergencies, and record them.",
        ],
      },
      {
        heading: "Hypothetical example: rebuilding staging",
        body: [
          "**This example is hypothetical.** A small product team had built its AWS environment by hand. When it needed a staging environment, nobody could reproduce production exactly. The team imported the VPC, database, containers and DNS into OpenTofu modules with remote encrypted state, set CI to post plans on pull requests, and created staging from the same modules with smaller sizes. A later accidental console change was caught by the nightly drift check.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Local state files on laptops.",
          "One huge state for everything.",
          "Applying without reviewing the plan.",
          "Secrets committed in variables files.",
          "Allowing console changes that never reach code.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/kubernetes-vs-serverless-vs-virtual-machines|Kubernetes vs serverless vs VMs]] for choosing a platform.",
          "[[/blogs/zero-downtime-deployments|Zero-downtime deployments]] for releasing applications.",
          "[[/blogs/business-continuity-digital-products-australia|Business continuity for digital products]] for recovery planning.",
          "[[/blogs/cloud-cost-optimization-australia|Cloud cost optimisation]] for tagging and policies.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Infrastructure as code makes environments reproducible, reviewable and recoverable. Choose one tool, protect state and secrets, review plans in CI, guard against destructive changes and watch for drift. Start with the resources you could least afford to rebuild by hand.",
        ],
        cta: {
          title: "Building infrastructure for a new product?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|web applications and the infrastructure they run on]]. We do not offer managed cloud operations, but we set up reproducible environments for the software we build.",
        },
      },
    ],
  },
  {
    slug: "secrets-management",
    title: "Secrets Management for Software Teams: Protecting API Keys and Credentials",
    seoTitle: "Secrets Management for Software Teams: A Guide",
    excerpt:
      "Secrets management for software teams: what counts as a secret, how they leak, secret stores, short-lived credentials, rotation, scanning and leak response.",
    category: "Web Development",
    banner: "toolsecurity",
    sceneKind: "security",
    bannerAlt: "API keys and passwords moved out of code and chat into a secret store, issued as short-lived credentials to applications and CI, with scanning and rotation",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["saas-technology", "fintech", "ecommerce", "healthcare-healthtech", "startups"],
    relatedSlugs: ["api-security-best-practices", "infrastructure-as-code", "cyber-incident-response-plan-australia"],
    faqs: [
      {
        q: "What counts as a secret?",
        a: "Anything that grants access: API keys, database passwords, cloud access keys, OAuth client secrets, signing keys, certificates' private keys, webhook secrets, encryption keys and tokens for third-party services.",
      },
      {
        q: "Are environment variables safe for secrets?",
        a: "They are better than hard-coding and are a common way to pass configuration, but they can leak through logs, error reports, process listings and build output. Load secrets at runtime from a secret store where possible, and keep environment variables out of logs.",
      },
      {
        q: "What should we do if a key is leaked?",
        a: "Revoke or rotate it immediately, check logs for misuse, find how it leaked and fix the cause, remove it from code history if needed, and follow your incident response plan, including notification assessments if personal information may be affected. Rotating is essential; deleting the commit alone is not enough.",
      },
      {
        q: "How often should secrets be rotated?",
        a: "Prefer short-lived, automatically issued credentials so rotation is continuous. For long-lived secrets, rotate on a schedule that reflects risk and immediately when someone with access leaves or a leak is suspected. Automate rotation where the provider supports it.",
      },
      {
        q: "Does ZSpace Labs provide security services?",
        a: "No. ZSpace Labs does not offer penetration testing, managed security or security certification. We apply secrets management practices in the software we build and can work alongside your security provider.",
      },
    ],
    content: [
      {
        heading: "How should software teams manage secrets?",
        body: [
          "**Keep secrets out of code, chat and documents; store them in a dedicated secret store with access control and audit logs; prefer short-lived credentials issued through workload identity (for example OIDC from CI to the cloud) over long-lived keys; rotate what remains; scan repositories and builds for leaks; and have a tested plan for revoking a leaked key fast.** The OWASP Secrets Management Cheat Sheet is a good reference.",
          "This guide is for developers and engineering leads. It is educational; ZSpace Labs does not provide security services. For API protection more broadly, see [[/blogs/api-security-best-practices|API security best practices]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "No secrets in code, tickets, chat or wikis.",
          "One secret store per environment, with least-privilege access.",
          "Short-lived credentials beat stored keys.",
          "Automated scanning on commits and pushes.",
          "Rotate on schedule and on staff changes.",
          "Practise revoking a leaked key.",
        ],
      },
      {
        heading: "How secrets leak",
        body: [],
        checklist: [
          "Committed to repositories, including history and forks.",
          "Pasted into chat, tickets or documents.",
          "Printed in logs, error reports and CI output.",
          "Bundled into mobile apps or front-end JavaScript.",
          "Shared between environments and people.",
          "Left in old servers, images and backups.",
        ],
      },
      {
        heading: "Secret stores and access",
        body: [
          "Use your cloud provider's secret manager or a dedicated vault. Separate secrets per environment, grant applications and people only what they need, log every access, and inject secrets at runtime rather than baking them into images. Configuration that is not secret can stay in environment variables, following the separation described by the Twelve-Factor App. Never ship server secrets in mobile or browser code; anything on the device should be considered public.",
        ],
      },
      {
        heading: "Short-lived credentials and rotation",
        body: [],
        table: {
          headers: ["Practice", "Example"],
          rows: [
            ["**Workload identity**", "Applications use the cloud role attached to their runtime, with no stored keys"],
            ["**OIDC from CI**", "Pipelines exchange a signed token for temporary cloud credentials"],
            ["**Dynamic database credentials**", "Vault-issued usernames that expire"],
            ["**Automated rotation**", "Secret manager rotates database passwords on a schedule"],
            ["**Scoped API keys**", "Third-party keys limited to the permissions and IPs needed"],
          ],
        },
      },
      {
        heading: "Scanning and prevention",
        body: [
          "Turn on secret scanning in your source control platform; GitHub, for example, scans repositories for known secret formats and can block pushes containing them. Add pre-commit hooks, scan CI logs and container images, and mask secrets in logging. Review third-party integrations' access regularly.",
        ],
      },
      {
        heading: "When a secret leaks",
        body: [],
        checklist: [
          "Revoke or rotate the secret immediately.",
          "Check provider and application logs for misuse.",
          "Find and fix how it leaked.",
          "Remove it from code history if exposed publicly, knowing copies may exist.",
          "Follow your incident response plan, including Notifiable Data Breaches assessment if personal information may be affected; see [[/blogs/cyber-incident-response-plan-australia|cyber incident response plans]].",
          "Record lessons and add a control to prevent recurrence.",
        ],
      },
      {
        heading: "Hypothetical example: a leaked payment key",
        body: [
          "**This example is hypothetical.** A developer accidentally pushed a test payment provider key and a production email API key to a public repository. Push protection was not enabled. The team rotated both keys within the hour, checked provider logs, found no misuse, enabled push protection and pre-commit scanning, moved all keys into the cloud secret manager, and switched CI to OIDC so no cloud keys were stored in the pipeline.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Shared admin keys used by everyone.",
          "Secrets in mobile apps or front-end code.",
          "Deleting the commit instead of rotating the key.",
          "The same secret in every environment.",
          "No owner or expiry for third-party keys.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/infrastructure-as-code|Infrastructure as code]] for keeping secrets out of infrastructure files.",
          "[[/blogs/mobile-app-security|Mobile app security]] for what can live on a device.",
          "[[/blogs/secure-web-application-development-australia|Secure web application development]] for broader practice.",
          "[[/blogs/cloud-security-posture-review-australia|Cloud security posture review]] for account-level checks.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Good secrets management combines a secret store, short-lived credentials, scanning and fast revocation. Remove secrets from code and conversations, give each workload only what it needs, and practise responding to a leak before you need to.",
        ],
        cta: {
          title: "Building software that handles sensitive keys?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|secure web applications and integrations]]. We do not provide security assurance or penetration testing, but we apply these practices in the software we build.",
        },
      },
    ],
  },
  {
    slug: "zero-downtime-deployments",
    title: "Zero-Downtime Deployments: Blue-Green, Canary and Rolling Release Strategies",
    seoTitle: "Zero-Downtime Deployments: Blue-Green, Canary, Rolling",
    excerpt:
      "How to deploy without downtime: rolling, blue-green and canary releases, feature flags, health checks, expand and contract migrations, and rollback.",
    category: "Web Development",
    banner: "rollbacktree",
    sceneKind: "pipeline",
    bannerAlt: "A new version released alongside the old through rolling, blue-green and canary strategies, with health checks, traffic shifting, database expand and contract steps and a rollback path",
    date: "2026-10-10",
    readingTime: "4 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce", "fintech", "travel-hospitality"],
    relatedSlugs: ["devops-for-growing-businesses", "feature-flag-implementation", "application-monitoring-observability"],
    faqs: [
      {
        q: "What is the difference between blue-green and canary deployments?",
        a: "Blue-green runs two full environments and switches all traffic from the old (blue) to the new (green) at once, keeping blue ready for rollback. Canary sends a small share of traffic to the new version first, watches metrics, then increases gradually.",
      },
      {
        q: "What is a rolling deployment?",
        a: "Replacing instances of the old version with the new one a few at a time, keeping enough healthy instances to serve traffic. It is the default strategy for Kubernetes Deployments and many managed platforms.",
      },
      {
        q: "How do we change the database without downtime?",
        a: "Use expand and contract: first add new columns or tables in a backwards-compatible way, deploy code that writes to both or reads from the new structure, backfill data, then remove the old structure in a later release once nothing uses it. Avoid long locking operations during busy periods.",
      },
      {
        q: "Do feature flags replace deployment strategies?",
        a: "No, they complement them. Deployment strategies control which version of the code runs; feature flags control which features are active within it. Together they let you deploy often and release features gradually.",
      },
      {
        q: "What about mobile apps?",
        a: "You cannot instantly roll back a mobile app on users' devices. Use staged rollouts in the stores, feature flags, and backend APIs that stay compatible with older app versions for a period.",
      },
    ],
    content: [
      {
        heading: "How do you deploy without downtime?",
        body: [
          "**Run the new version alongside the old one, send traffic to it only when health checks pass, shift traffic gradually (rolling or canary) or all at once with an instant switch back (blue-green), keep database changes backwards compatible with an expand and contract approach, drain connections cleanly, and watch error rates and key journeys so you can roll back quickly.** Feature flags then separate releasing features from deploying code.",
          "This guide is for developers and engineering leads. It builds on [[/blogs/devops-for-growing-businesses|DevOps for growing businesses]] and [[/blogs/feature-flag-implementation|feature flag implementation]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Readiness checks before traffic; graceful shutdown after.",
          "Choose rolling, blue-green or canary per service and risk.",
          "Database changes must work with old and new code.",
          "Define automatic rollback triggers.",
          "Keep APIs compatible with older clients.",
        ],
      },
      {
        heading: "Strategies compared",
        body: [],
        table: {
          headers: ["Strategy", "How it works", "Good for", "Trade-off"],
          rows: [
            ["**Rolling**", "Replace instances gradually", "Most stateless services", "Old and new run together briefly"],
            ["**Blue-green**", "Two environments; switch traffic at once", "Fast, clean rollback", "Double capacity during release"],
            ["**Canary**", "Small share of traffic first, then more", "High-risk changes, large user bases", "Needs good metrics and routing"],
            ["**Feature flags**", "Deploy dark, enable gradually", "Separating release from deploy", "Flag clean-up and testing"],
          ],
        },
      },
      {
        heading: "Mechanics that make it work",
        body: [],
        checklist: [
          "**Readiness and liveness checks** so traffic only reaches ready instances; see the Kubernetes Deployment documentation.",
          "**Graceful shutdown and connection draining** so in-flight requests finish.",
          "**Stateless services** with sessions in a shared store.",
          "**Backwards-compatible APIs and message formats** during the overlap.",
          "**Automated smoke tests** after each step.",
          "**Rollback triggers** on error rate, latency and key business events.",
        ],
      },
      {
        heading: "Database migrations: expand and contract",
        body: [
          "Most downtime comes from schema changes. Expand first: add new columns or tables without breaking old code. Deploy code that works with both. Backfill data in batches. Switch reads to the new structure. Contract later: remove old columns once nothing uses them. Check that migrations do not take long locks on large tables, and test them on production-sized data. See [[/blogs/database-performance-optimization|database performance optimisation]].",
        ],
      },
      {
        heading: "Blue-green and canary in practice",
        body: [
          "Blue-green suits services where a quick full switch and instant rollback matter, as described by Martin Fowler. Canary suits risky changes with enough traffic to detect problems early. For both, compare the new version's error rate, latency and business metrics, such as checkout completion, with the old version before going further. See [[/blogs/application-monitoring-observability|monitoring and observability]].",
        ],
      },
      {
        heading: "Hypothetical example: an ecommerce API",
        body: [
          "**This example is hypothetical.** An online retailer's deployments caused short outages and occasional failed checkouts. The team added readiness checks and graceful shutdown, moved to rolling deployments for most services and canary releases for the checkout API with automatic rollback on error rate, and adopted expand and contract for schema changes. A column rename that previously needed a maintenance window was done over three releases.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Readiness checks that always pass.",
          "Schema changes that break the running version.",
          "No rollback plan for data changes.",
          "Canary releases without metrics to judge them.",
          "Breaking API changes for older mobile app versions.",
        ],
      },
      {
        heading: "Related guides",
        body: [],
        checklist: [
          "[[/blogs/kubernetes-vs-serverless-vs-virtual-machines|Kubernetes vs serverless vs VMs]] for platform choice.",
          "[[/blogs/automated-regression-testing|Automated regression testing]] for release confidence.",
          "[[/blogs/infrastructure-as-code|Infrastructure as code]] for reproducible environments.",
          "[[/blogs/mobile-app-maintenance|Mobile app maintenance]] for staged app releases.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Zero-downtime deployment is a set of habits: health checks, graceful shutdown, gradual or switchable traffic, backwards-compatible data changes and quick rollback. Pick the strategy that matches each service's risk, measure releases, and use feature flags to separate deploy from release. To decide when to pause releases, see [[/blogs/slos-and-error-budgets|SLOs and error budgets]].",
        ],
        cta: {
          title: "Releases causing outages?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|web applications and release pipelines]] and [[/services/mobile-app-development|mobile apps]]. If it would help to review how your software is released, we are happy to talk it through.",
        },
      },
    ],
  },
];
