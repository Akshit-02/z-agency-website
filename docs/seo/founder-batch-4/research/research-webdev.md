# Batch 4 research: web development (topics 61–64)

Checked 15 October 2026. Reddit cannot be reached from these tools, and search is US-only, so demand evidence below is weaker than it would be with community data. Prices are vendor **list prices** in USD, excluding tax unless stated. They change often and must be re-checked on the day of publishing.

Prior decisions this file relies on:
- `docs/seo/founder-batch-9/03-batch-9-decisions.md` #161 already decided **UPDATE multi-tenant-saas-architecture** (row-level security, cross-tenant test suite, per-tenant backup/restore, noisy neighbours, support-staff access).
- `docs/seo/founder-batch-8/03-batch-8-decisions.md` #143 decided **UPDATE saas-roles-and-permissions (substantial)**.
- Batch 9 #164 put "preparing for a security review before launch" into `web-application-penetration-testing-australia`.

Topic 63 and topic 64 must be checked against these so the same section is not written twice (see each topic).

---

## 61. How much does it cost to host a web application in 2026?

**1. Founder question and pain.** "The build quote is signed. What will the app cost every month to keep running, and why did someone's bill jump from $20 to $1,000?" The pain is a running cost nobody budgeted. Free tiers that cannot be used commercially, surprise egress or function charges, a database that costs more than compute, and staging environments that double the bill.

**2. Intent and buyer stage.** Commercial investigation, mid-to-late stage. These are founders budgeting a build or choosing an architecture, and teams surprised by a bill. Roadmap WEB-15 tagged this "Budget & cost".

**3. Queries (qualitative).**
- Primary: "web application hosting cost" or "how much does it cost to host a web app".
- Supporting: "web app monthly running costs", "Vercel vs AWS cost", "cost to host a SaaS app", "Vercel Hobby commercial use", "AWS free tier 2026", "egress costs explained", "hosting cost India / UAE region", "serverless vs VPS cost".

**4. Evidence of demand (moderate).**
- The SERP for "how much does it cost to host a web application per month 2026" is dominated by shared-hosting vendors: https://www.hostinger.com/tutorials/how-much-does-website-hosting-cost, https://www.truehost.com/how-much-does-website-hosting-cost-in-2026/ and https://www.maiahost.com/news/web-hosting-cost-2026/. The query clearly exists, but the answers are about websites, not apps.
- There are community complaints about bills: an r/nextjs "Vercel billing rant" (Feb 2025, seen via a mirror at https://redlib.ssps.io/r/nextjs/comments/1ijic43/vercel_billing_rant, and Reddit itself was not reachable) and https://www.indiehackers.com/post/vercel-is-ridiculously-expensive-4d7bce8ca8.
- A Jan 2026 founder post, seen via a Reddit snapshot mirror, describes hosting rising sharply after traction. Its author is a migration consultant, so it is anecdotal and should not be cited.
- People Also Ask could not be captured. Search is US-only.

**5. Existing ZSpace pages.**
- `/blogs/custom-web-application-development-cost` (1,882w, 14 Oct). "Step 5: Estimate running costs" is a single table with seven lines: database and backups, hosting and compute, email/SMS, third-party, monitoring, security, maintenance. It points to the Vercel and Netlify pricing pages. It tells the reader *what to check*, but gives no architecture comparison, no free-tier limits, no egress explanation, no environments and no regions. **The intents are distinct.** The cost page is about estimating the build. This topic is about the monthly bill by architecture. Link from Step 5 to the new page ("for a line-by-line hosting model, see…").
- `/blogs/kubernetes-vs-serverless-vs-virtual-machines` (573w) is a platform choice, not cost. Link both ways.
- `/blogs/cloud-cost-optimization-australia` (1,244w) is about reducing an existing bill (visibility, right-sizing). It suits a later stage. Link from the new page's "when the bill grows" section.
- `/blogs/website-maintenance-guide` and `/blogs/wordpress-vs-custom-development-cost-of-ownership` are adjacent and should be linked.
- No page has slug `web-app-hosting-running-costs` or `web-application-hosting-cost` (grep of src/lib, 15 Oct).

**6. SERP weaknesses.**
- https://www.hostinger.com/tutorials/how-much-does-website-hosting-cost: a vendor gives ranges by hosting type (shared/VPS/cloud/dedicated). It covers no app-specific lines (database, egress, email, environments) and is written in the interest of a shared-hosting seller.
- https://www.maiahost.com/news/web-hosting-cost-2026/: also a website-hosting frame, and only notes that renewal prices rise.
- https://www.getmonetizely.com/articles/vercel-vs-netlify-vs-aws-amplify-which-jamstack-hosting-pricing-model-is-right-for-you: per the search summary, it quotes Vercel bandwidth overage as "$40 per 100GB". That is now out of date. Vercel's current page lists Fast Data Transfer on Pro at $0.15/GB after 1 TB (see facts). It is a good example of stale cost content.
- https://dev.to/sohanaakbar7/cost-of-hosting-a-react-app-on-aws-vs-vercel-real-numbers-gc7: a single-author comparison of static React only. It has no database, no environments and no regions.
- https://leapcell.io/blog/whats-the-real-cost-of-hosting-an-e-commerce-website: written by a competitor-vendor.
- Common gaps: no line-item model, no commercial-use and free-tier caveats, no staging or preview environments, no backups or monitoring, and no regional data-location options for India, UAE, Australia, UK or Singapore.

**7. Qualified-buyer potential: high.** The reader is about to commit to an architecture or has just been quoted. A worksheet that ends in "we can model this with you" fits naturally into a website-development discovery call.

**8. Format and original asset.**
- Format: a guide built around a **"hosting bill builder" table** with rows for line items and columns for architecture, plus a short worksheet.
- Original asset: **a cost model by architecture.**
  - Columns: (A) static/Jamstack on a CDN; (B) a managed PaaS such as Vercel, Netlify, Render or Railway; (C) serverless or managed containers on AWS, GCP or Azure; (D) a VPS.
  - Rows: compute, bandwidth/egress, database, file storage, CDN, email/SMS, monitoring/logs, backups, environments (prod, staging, preview), team seats, and paid add-ons (SSO, static IPs, password protection).
  - Each cell says *how it is billed* (per seat, per GB, per request, flat instance, credit) and the free-tier boundary, not a total.
  - Then a worked hypothetical example in which the reader plugs in their own usage. No invented averages.
- Supporting asset: a regional table showing which providers have regions in Mumbai/Hyderabad/Delhi, UAE, Sydney/Melbourne, London and Singapore, with the caution that a region alone does not make a residency guarantee.
- Optional: "five bill-shock causes", each tied to a vendor fact. Examples: Hobby is non-commercial; Render free Postgres expires after 30 days; per-seat pricing grows with the team; egress beyond allowances; preview and staging environments running all month.

**9. Service page and CTA.** `/services/website-development`. CTA: "Share your expected users, data and regions and we'll map your running-cost lines before you pick a stack."

**10. Recommendation: CREATE `/blogs/web-application-hosting-cost`. I agree.**
- The intent is distinct from the build-cost page, which only lists lines to check.
- The new slug matches the query better than the reserved `web-app-hosting-running-costs`. Retire the reserved slug in the roadmap and mark WEB-15 as absorbed.
- Keep "running costs" in the H1 or intro, e.g. "Web Application Hosting Cost: What You'll Pay Each Month, by Architecture".
- Add a one-line link from Step 5 of `custom-web-application-development-cost`.
- Do not repeat cloud-cost optimisation. Link to it.

**11. Facts an article would need** (all checked 15 Oct 2026)

| # | Exact claim | Source | Label |
|---|---|---|---|
| 1 | Vercel Hobby is $0, and "Our Hobby plan is for personal, non-commercial use." Hobby includes 100 GB/month Fast Data Transfer and 1M function invocations, and is capped (no extra usage can be bought). | https://vercel.com/pricing | [Vendor] |
| 2 | Vercel Pro: "$20/month Pro platform fee", which includes 1 deploying team seat and $20/month usage credit. Additional Owner/Member seats are $20/month each. Viewer seats are free. Pro includes 1 TB data transfer and 1M CDN requests per month (Flat Rate CDN lowest tier). Prices are in USD, excluding VAT/GST. The docs page was last updated 2026-09-15. | https://vercel.com/docs/plans/pro-plan | [Vendor] |
| 3 | Vercel Pro list prices: Fast Data Transfer beyond 1 TB is $0.15/GB, and function invocations start at $0.60 per 1M. | https://vercel.com/pricing | [Vendor] (re-check; the tool summary was not cross-checked against /docs/pricing) |
| 4 | Vercel Pro paid add-ons: SAML SSO $300/month, HIPAA BAA $350/month, Password Protection $20 per project per month, Static IPs $100/month per project. Spend-management notifications default to $200 per billing cycle for new customers. | https://vercel.com/docs/plans/pro-plan | [Vendor] |
| 5 | Netlify plans: Free $0 (300 credit limit), Personal $9/month (1,000 credits), Pro $20/month (3,000 credits, "unlimited members"), Enterprise custom. The pricing page states no commercial-use restriction for Free. | https://www.netlify.com/pricing/ | [Vendor] (check Netlify's terms before saying the Free plan is OK for commercial use; not verified) |
| 6 | Render free web services spin down after 15 minutes without inbound traffic and take about one minute to spin up. A workspace gets 750 free instance hours a month. Free Postgres expires 30 days after creation (14-day grace period, then deleted), has 1 GB of storage and no backups. Render says of free instances: "Do not use them for production applications." | https://render.com/docs/free | [Vendor] |
| 7 | Render paid instance and Postgres list prices | https://render.com/pricing | **Unverified.** The page did not render through the fetch tool, so check it manually. |
| 8 | Railway: Hobby $5/month including $5 usage; Pro $20/month per workspace including $20 usage ("Seats are unlimited and included — the fee is per workspace, not per seat"). Usage is about $20 per vCPU-month and $10 per GB RAM-month, volumes $0.15/GB-month, egress $0.05/GB, billed per second. | https://railway.com/pricing | [Vendor] |
| 9 | Cloudflare Workers: the Free plan gives 100,000 requests/day. Paid has a minimum of $5/month per account and includes 10M requests and 30M CPU-ms. "Requests to static assets are free and unlimited." There are no extra charges for egress or bandwidth on Workers Paid (containers excepted). | https://developers.cloudflare.com/workers/platform/pricing/ | [Vendor] |
| 10 | DigitalOcean's cheapest Basic Droplet is $4/month (512 MiB, 1 vCPU, 10 GiB SSD, 500 GiB outbound transfer). Billing is per second with a 60-second minimum (from 1 Jan 2026), and inbound is free. Datacenters include Bangalore, Singapore, Sydney and London. | https://www.digitalocean.com/pricing/droplets | [Vendor] |
| 11 | AWS Free Tier: new accounts get $100 in credits plus up to $100 more for exploring services. The Free plan account "closes on its own 6 months after you open it or when your credits run out". "30+ AWS services are always free within monthly usage limits." | https://aws.amazon.com/free/ | [Vendor]. **Conflict:** the SES pricing page says "All Free Tier credits must be used within 12 months of your account creation date" and "The free plan will be available for 6 months". Describe it as "a 6-month free plan with credits" and link out rather than restating the 12-month line. |
| 12 | AWS: "100 GB of free DTO per month from AWS Regions to the internet… aggregated across all AWS services and Regions (except China and GovCloud)", plus "1 TB of free data transfer out of Amazon CloudFront every month". | https://aws.amazon.com/about-aws/global-infrastructure/global-network/faqs | [Vendor] |
| 13 | AWS Lambda free tier: "one million requests and 400,000 GB-seconds per month." | https://aws.amazon.com/lambda/pricing/ | [Vendor] |
| 14 | Amazon SES: $0.10 per 1,000 outbound emails (à la carte). | https://aws.amazon.com/ses/pricing/ | [Vendor] |
| 15 | Google Cloud: $300 Welcome credit over 90 days. Free tier: Cloud Run 2M requests/month, 360,000 GB-seconds memory and 180,000 vCPU-seconds. One e2-micro VM, only in us-west1, us-central1 and us-east1. Cloud Storage free tier applies only in US regions. Firestore: 1 GiB storage, 50k reads, 20k writes and 20k deletes per day. Page last updated 2026-10-13. | https://docs.cloud.google.com/free/docs/free-cloud-features | [Vendor]. Note for India/UAE/AU readers that the free compute and storage are **US regions only**. |
| 16 | Azure free account: "$200 credit" to use "within 30 days". 12 months free includes 750 hours of B1s/B2pts v2/B2ats v2 VMs and 750 hours of PostgreSQL Flexible Server B1MS. Always free includes App Service "Up to 10 web or API apps with 1 GB storage and 1 hour per day" and Functions "1 million requests". | https://azure.microsoft.com/en-us/pricing/purchase-options/azure-account | [Vendor] |
| 17 | AWS regions: ap-south-1 Mumbai (enabled by default), ap-south-2 Hyderabad (opt-in), me-central-1 Middle East (UAE) (opt-in), me-south-1 Bahrain (opt-in), ap-southeast-2 Sydney, ap-southeast-4 Melbourne (opt-in), eu-west-2 London, ap-southeast-1 Singapore. Regions introduced after 20 March 2019 must be enabled before use. | https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html | [Official/Vendor docs] |
| 18 | Google Cloud regions: asia-south1 Mumbai, asia-south2 Delhi, australia-southeast1 Sydney, australia-southeast2 Melbourne, europe-west2 London, asia-southeast1 Singapore, me-central1 Doha, me-central2 Dammam, me-west1 Tel Aviv. **There is no UAE region** in the list. | https://docs.cloud.google.com/compute/docs/regions-zones | [Vendor docs] |
| 19 | Azure regions: Central India (Pune), South India (Chennai), West India (Mumbai), India South Central (Hyderabad), UAE North (Dubai), UAE Central (Abu Dhabi; access restricted), Australia East (NSW), Australia Southeast (Victoria), Australia Central (Canberra), UK South (London), UK West (Cardiff), Southeast Asia (Singapore). Updated 2026-10-13. | https://learn.microsoft.com/en-us/azure/reliability/regions-list | [Vendor docs] |
| 20 | Prices vary by region (the same service costs differently in Mumbai vs us-east-1). | Not fetched as a quotable sentence today. | **[Inference]**. Phrase it as "check the price for your region in the provider's calculator" without stating a percentage. |
| 21 | Next.js on a Node server or Docker supports all features, while static export is "Limited". | https://nextjs.org/docs/app/getting-started/deploying (Batch 1, lastUpdated 2026-08-06) | [Official] reuse |

Regional notes:
- Data residency is a contract and legal question, not just a region choice. Link to existing regional pages (e.g. `/blogs/cloud-migration-uae`, `/blogs/cloud-migration-australia`) rather than restating law here.
- Google Cloud has no UAE region, so a UAE-hosting requirement narrows the choice to AWS me-central-1 or Azure UAE North (or local providers, not researched).
- Managed PaaS (Vercel, Netlify, Railway) region availability per plan was **not verified**. Do not claim Indian or UAE regions for them.

---

## 62. CMS vs custom admin panel: which is right?

**1. Founder question and pain.** "Our ops team runs orders, refunds, user accounts and approvals out of spreadsheets, a WordPress back end or raw database access. Do we bend a CMS, buy an internal-tool builder, or build an admin?"
- The pain is a back office designed for *publishing pages* being used for *operating records*.
- Support staff get too much access.
- There is no audit trail.
- Every new workflow needs a developer.

**2. Intent and buyer stage.** Commercial investigation, mid stage, framed as build vs buy. The readers are SaaS and marketplace founders, product/ops leads, and agencies scoping a platform. This is the same audience as roadmap WEB-10 ("build admin panel vs retool").

**3. Queries (qualitative).**
- Primary: "CMS vs custom admin panel" or "admin panel build vs buy".
- Supporting: "Retool vs custom admin", "Django admin for production", "Filament vs Nova", "headless CMS as admin panel", "internal tools for startups", "do I need an admin dashboard for my app", "Appsmith self-hosted".

**4. Evidence of demand (moderate, mostly developer forums and vendor blogs).**
- A Laracasts thread literally titled "CMS vs admin panel": https://laracasts.com/discuss/channels/laravel/cms-vs-admin-panel
- An Indie Hackers founder thread asking whether people build admin panels for their products: https://www.indiehackers.com/post/do-you-create-admin-panels-dashboards-for-your-products-a3ea98bc78
- Several 2026 "Retool vs custom build" posts (below) and a 2026 academic comparison of Filament v4 vs Django Admin (https://journal.lembagakita.com/ijsecs/article/download/8154/5143/30538, ten respondents, so weak). Together they show the question is live.
- Reddit and People Also Ask could not be checked.

**5. Existing ZSpace pages.**
- `/blogs/custom-cms-vs-wordpress` (605w). Its "Admin Experience and Custom Workflows" section is one paragraph saying an operations team "managing hundreds of structured records with validation rules, approval stages and role-specific views" may need a custom admin. That is the right instinct, but the page's frame is still *content management (a CMS)*. It does not cover framework admins, internal-tool builders, support-staff permissions or audit trails.
- `/blogs/how-to-choose-a-cms` (655w) and `/blogs/headless-cms-vs-traditional-cms` (661w) are pure content/editorial selection.
- `/blogs/low-code-vs-custom-software` (816w, AU build-decisions file) is the **closest overlap**. It names "Retool-style internal tools" in a four-option table, but works at the level of a whole business application (Power Apps, Salesforce, OutSystems). It does not deal with the admin back office of a product you are already building.
- **Is the distinction real? Yes.**
  - *Content management* covers pages, articles, media, SEO fields, editorial workflow and previews, and is used by marketing and editors.
  - *Operational admin* covers users, orders, refunds, subscriptions, KYC/approvals, support look-ups, impersonation, feature flags and bulk fixes, and is used by ops and support.
  - The two differ in data model, permission model, audit needs and who the users are.
  - Django's own docs draw this line (see facts).
- Risk: if the new page is framed as "CMS vs …", it will collide with the three CMS pages. **Frame the H1 around the admin/back office**, and treat the CMS as one option.

**6. SERP weaknesses.**
- https://www.dronahq.com/building-admin-panels/: a vendor promoting its own low-code tool.
- https://fastw3b.com/blog/custom-admin-panel-ops: argues for custom (agency). Useful framing ("a CMS dashboard is built for publishing, not record-level operations") but one-sided.
- https://techconcepts.org/blog/retool-vs-custom-internal-tool and https://rohitraj.tech/en/notes/retool-vs-custom-build-internal-tool-2026: give unsourced custom-build cost figures and breakeven years. That is exactly the "invented averages" pattern to avoid.
- https://themewagon.com/?p=154776: a template seller that argues for templates.
- https://glukhov.org/post/2025/11/headless-cms-comparison-strapi-directus-payload/: says Directus is BSL 1.1. The Directus GitHub repo now says the Monospace Sustainable Core License (see facts), so this information is **stale**.
- Gaps: none of these maps *options to the kind of admin work*. None covers access control for staff (least privilege, impersonation, audit logs), the risk of an internal tool holding production credentials, or the exit cost of a hosted builder.

**7. Qualified-buyer potential: high.** People asking this are building or running a product and are scoping work. It maps directly to website-development (the app back office) and UI/UX (admin usability).

**8. Format and original asset.**
- Format: a decision guide with a **job-to-option matrix**.
  - Rows are admin jobs: edit marketing pages; manage product catalogue; look up a user and reset MFA; issue a refund; approve a KYC or vendor application; bulk-fix data; view audit history; let customers' own admins manage their teams.
  - Columns are the options: (1) a CMS, traditional or headless; (2) a framework admin (Django admin, Laravel Filament/Nova, a Rails scaffold or gem); (3) an internal-tool builder (Retool, Appsmith); (4) a fully custom admin.
- Original asset: that matrix, plus a **"back-office requirements checklist"**. It covers roles and least privilege, an audit log, approvals and maker-checker, impersonation rules, PII masking, bulk actions, data export, where credentials live, hosting and data location, seat-cost growth, and exit/portability.
- Note the hybrid most products end up with: a CMS for marketing content, plus a framework admin or builder for ops, with the custom build kept for customer-facing admin (tenant admins), which should live in the product.
- Hypothetical example: a marketplace whose marketing site is on a headless CMS, whose ops team uses a framework admin, and whose seller-onboarding approvals got a custom screen.

**9. Service page and CTA.** `/services/website-development` (primary) and `/services/ui-ux-design` (admin UX). CTA: "List the five things your ops team does every day; we'll tell you which can live in a CMS, which in a framework admin, and which deserve a custom screen."

**10. Recommendation: CREATE, but slug `/blogs/admin-panel-build-vs-buy` (the slug WEB-10 reserved), not `/blogs/cms-vs-custom-admin-panel`. I partly disagree with the preliminary call.**
- The intent is real and distinct. Agree.
- But "CMS vs custom admin panel" in the slug and H1 invites cannibalisation with `custom-cms-vs-wordpress` and `how-to-choose-a-cms`. The commercial query with buyer intent is the build-vs-buy back-office question.
- Suggested H1: "Admin Panel: Use a CMS, a Framework Admin, an Internal-Tool Builder, or Build Custom?" Include "CMS vs custom admin panel" as an H2 and an FAQ so the phrasing is still covered.
- If the owner prefers the `cms-vs-custom-admin-panel` slug, that is acceptable, provided the page opens with the content-vs-operations distinction and links out to the CMS pages for content-only decisions.
- Also:
  - Add a one-line link from `custom-cms-vs-wordpress` "Admin Experience…" to the new page.
  - Add a link from `low-code-vs-custom-software`.
  - Link to `saas-roles-and-permissions` and `saas-audit-logging` for staff access.

**11. Facts an article would need** (checked 15 Oct 2026)

| # | Exact claim | Source | Label |
|---|---|---|---|
| 1 | Django: "The admin's recommended use is limited to an organization's internal management tool. It's not intended for building your entire front end around." Also: "If you need to provide a more process-centric interface that abstracts away the implementation details of database tables and fields, then it's probably time to write your own views." (Django 6.1 docs) | https://docs.djangoproject.com/en/stable/ref/contrib/admin/ | [Official] |
| 2 | Filament is MIT-licensed, "A powerful open-source UI framework for Laravel", tagline "Build and ship apps & admin panels fast with Livewire". | https://github.com/filamentphp/filament | [Vendor/OSS] |
| 3 | Laravel Nova: Single licence $99 one-time (renews at $79/year, one project). Unlimited $299 one-time (renews at $249/year). "Nova is a one-time purchase and includes free updates for a whole year." | https://nova.laravel.com/ | [Vendor] list price, USD |
| 4 | Rails has no built-in admin. `rails generate scaffold` "generates a full set of files for a resource" (model, migration, controller, views, routes, tests). Admin gems such as ActiveAdmin and Administrate exist but were **not verified** today. | https://guides.rubyonrails.org/command_line.html | [Official]. The gem claims are [Inference]. |
| 5 | Retool Cloud: Free $0, "Up to 5 users". Team: builders $10 (annual) / $12 (monthly) per month, internal users $5/$7. Business: builders $50/$65, internal users $15/$18. Enterprise custom. External users on Business: 0–50 free, then tiered. Self-hosting is available on all tiers (Free up to 5 users, Team/Business up to 100), and Enterprise is required for "unlimited users, SSO, and advanced self-host features". | https://retool.com/pricing | [Vendor] list prices, USD, per user per month |
| 6 | Appsmith: Free $0 ("Up to 5 users for cloud"). Business $15/month per user (up to 99 users). Enterprise "$2,500"/month for 100 users. The Community edition is "Our open-source low code application platform, available for free". The repo is Apache-2.0. | https://www.appsmith.com/pricing ; https://github.com/appsmithorg/appsmith | [Vendor] |
| 7 | Directus connects to any SQL database and provides REST and GraphQL APIs plus a studio. Licence: Monospace Sustainable Core License (MSCL) 1.0, source-available. Free for organisations under "$5M in annual revenue and 50 employees" via its Open Innovation Grant. | https://github.com/directus/directus | [Vendor]. Third-party pages still say BSL 1.1, so cite only the repo. |
| 8 | Access control in admin tools: deny by default, least privilege, and enforce on the server. | https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html (already cited by `saas-roles-and-permissions`) | [Industry]. Re-confirm wording before quoting. |
| 9 | Ramp built 100+ internal tools on Retool in its first year. | https://www.nocode.tech/article/ramp-built-its-critical-internal-tools-on-retool-heres-the-build-vs-buy-framework-that-matters | [Vendor case study]. **Do not use**: it relays a vendor claim that has not been audited. |
| 10 | Custom-build costs and breakeven years in competitor posts | techconcepts.org, rohitraj.tech | **Do not cite**: unsourced. Per policy, give no averages. |

No regional rules differ materially. The one exception is data location for hosted builders (Retool/Appsmith cloud vs self-host). Mention self-hosting as the control lever, and link to regional hosting/residency guidance (topic 61) instead of making region claims for these vendors (not verified).

---

## 63. Web application security checklist before launch

**1. Founder question and pain.** "We launch in two weeks. What has to be true, security-wise, before real users and real data arrive, and who signs it off?" The pain:
- debug mode left on;
- test keys in production;
- an open admin route;
- no backups proven to restore;
- nobody owns the decision to go live with known issues.

**2. Intent and buyer stage.** Late stage, pre-launch. It is mostly informational with a strong commercial tail ("can someone review this for us?").

**3. Queries (qualitative).**
- Primary: "web application security checklist before launch" or "pre-launch security checklist".
- Supporting: "go-live security checklist", "production security checklist", "security checklist for AI-generated app", "do I need a pen test before launch", "OWASP checklist".

**4. Evidence of demand (moderate).** The SERP is crowded with checklists aimed at specific audiences:
- https://www.testriq.com/blog/post/security-testing-checklist-before-go-live-2 (QA vendor);
- https://pandastack.io/blog/production-security-checklist;
- https://vibe-eval.com/deployment/production-security-checklist/ (AI-generated apps, a growing sub-intent);
- https://axonbuild.com/blog/go-live-checklist/;
- a university go-live process (https://www.web.uillinois.edu/sitepublish/resources/go_live_checklist) that requires a vulnerability scan in non-production and fixing high and medium findings before go-live.

Reddit and People Also Ask were not checked.

**5. Existing ZSpace pages, and a cannibalisation check.**
- `/blogs/website-security-checklist` (2,168w, updated 9 Oct). It has 14 control sections, an 11-item "Practical Security Checklist", OWASP Top 10:2025 and NIST CSF 2.0 mappings, monthly and quarterly tasks, and a UAE/GCC section.
  - It says outright that it is "a defensive implementation checklist… not offensive security testing".
  - **What is missing for "before launch":** there is no launch gate. Production config (debug off, verbose errors off, test or demo accounts removed, live vs test keys), security headers and cookie flags, admin routes restricted, a backup restore test, an alert route, a vulnerability or dependency scan with a severity threshold, security.txt and a disclosure contact, a rollback plan, and a named owner who signs off and records accepted risks.
  - Its framing is "business website", while the query says "web application".
- `/blogs/secure-business-website-development` (696w) covers the **build phase** ("Security in Development, Not Just at Launch"). Its first FAQ explicitly separates it from the checklist. The two are distinct, and both pages link to each other.
- `/blogs/secure-web-application-development-australia` (1,934w) is a build-time checklist for AU customer-facing apps, with ASVS, threat model and a release-practices section. Its first FAQ also separates it from the website checklist.
- Also relevant:
  - `/blogs/website-security-australia` (4,464w, AU SMB);
  - `/blogs/web-application-penetration-testing-australia` (1,092w; Batch 9 #164 is adding "preparing for a security review" there);
  - `/blogs/api-security-best-practices`;
  - `/blogs/ai-generated-code-security`.
- **Cannibalisation verdict:** the three named pages split by *stage* (build vs operate/checklist) and *market* (generic vs AU), and each says so in an FAQ.
  - The real overlap is `secure-business-website-development` (generic build) vs `secure-web-application-development-australia` (AU build): same stage, different market and depth. Today that is tolerable because the AU page is framed by market. A future consolidation could make the generic page the canonical build guide and keep the AU page for AU obligations (Privacy Act, NDB, Essential Eight).
  - `website-security-australia` vs `website-security-checklist` is the same pattern (AU vs generic operations).
  - No action is needed in this batch beyond making sure the checklist links to all three with stage labels.

**6. SERP weaknesses.**
- testriq.com is a QA vendor and leans on testing only, with weak sourcing.
- vibe-eval.com is narrow (AI-generated apps).
- pandastack.io is a long list with no prioritisation or owner.
- The common gaps:
  - no **sign-off artefact** (who decides, what evidence, which risks are accepted);
  - no severity threshold for launch;
  - no mapping to a standard such as OWASP ASVS levels;
  - little on restore tests or disclosure contacts.

**7. Qualified-buyer potential: medium-high.** Pre-launch teams often need help fast. The CTA is a pre-launch review under website-development.

**8. Format and original asset.** Add a section to the existing page, **"Pre-launch security sign-off"** (about 300–450 words plus a table). Columns: check, evidence to keep, owner, blocker yes/no. Rows:
1. Production config: debug off, generic error pages, test/demo accounts and seed data removed, live keys only in a secrets manager.
2. Access: admin routes behind SSO/MFA or IP restriction; least-privilege production DB and cloud roles; server-side authorization checks on object IDs (OWASP API1 BOLA test on two accounts).
3. Transport and browser: HTTPS everywhere with HSTS considered; cookie Secure/HttpOnly/SameSite; core security headers set.
4. Dependencies: a scan run, with no unresolved critical or high findings (or each accepted in writing).
5. Data: backups running and **one restore tested**; retention and deletion paths work.
6. Detection: logs for sign-in, permission changes and admin actions; alerts route to a named person.
7. Disclosure: a `/.well-known/security.txt` with Contact and Expires (RFC 9116); an incident contact list.
8. Release: a rollback plan; a pen test or security review where risk warrants it (link the pen-testing page).
9. Sign-off: a named owner, date, and accepted-risk list.

Also:
- Optional seoTitle tweak to capture the web-app phrasing: "Website and Web App Security Checklist (OWASP 2025)". Keep the H1 to avoid churn.
- Add an FAQ: "What must be true before we launch?"

**9. Service page and CTA.** `/services/website-development`. CTA: "Want a second pair of eyes on your launch checklist? We can review the evidence with your team before go-live."

**10. Recommendation: KEEP `/blogs/website-security-checklist` with a minor UPDATE (add the "Pre-launch security sign-off" section, one FAQ and an optional seoTitle tweak). I agree.** Do not create a new page.
- Five pages already cover security stages, and roadmap WEB-31 said "consolidate signal rather than add".
- **Coordinate with Batch 9 #164** so the sign-off section links to the "preparing for a security review" content rather than repeating it.
- Add stage labels to the existing cross-links: "building it → secure-business-website-development; AU build → secure-web-application-development-australia; testing → web-application-penetration-testing-australia".

**11. Facts an article would need** (checked 15 Oct 2026 unless stated)

| # | Exact claim | Source | Label |
|---|---|---|---|
| 1 | OWASP Top 10:2025 is released. A01 is Broken Access Control; it adds A03 Software Supply Chain Failures and A10 Mishandling of Exceptional Conditions. | https://top10.owasp.org/2025 (Batch 1, 14 Oct; already on page) | [Official] reuse |
| 2 | OWASP API Security Top 10 2023: "API1:2023 Broken Object Level Authorization". Checks "should validate that the logged-in user has permissions to perform the requested action on the requested object". Comparing the session user ID with the ID parameter "isn't a sufficient solution". Prevention includes "Write tests to evaluate the vulnerability of the authorization mechanism." | https://api-security.owasp.org/editions/2023/en/0xa1-broken-object-level-authorization | [Official] |
| 3 | The latest stable OWASP ASVS is 5.0.0 (the project page labels it inconsistently; no release date shown). | https://owasp.org/www-project-application-security-verification-standard/ | [Official]. The launch date (May 2025) and L1–L3 levels remain **unverified on the primary page** (see Batch 3). |
| 4 | RFC 9116 (security.txt) is an Informational RFC (2022). "organizations MUST place the "security.txt" file under the "/.well-known/" path". The Contact field "MUST always be present", and Expires "MUST always be present and MUST NOT appear more than once". The file is served over HTTPS. | https://www.rfc-editor.org/rfc/rfc9116 | [Official] |
| 5 | NIST CSF 2.0 (Feb 2024) | already on page | [Official] reuse |
| 6 | Singapore PDPC "Building Websites" guide recommends security testing before launch and regularly afterwards. | Batch 1 research-webdev.md line 56 | [Official] reuse. Use only if a regional note is added. |
| 7 | A university go-live process requires a vulnerability scan in non-production, with high and medium issues fixed before go-live. | https://www.web.uillinois.edu/sitepublish/resources/go_live_checklist | [Industry example]. Use it only as an illustration of a severity gate, not as a standard. |
| 8 | Security header and cookie flag recommendations | OWASP HTTP Headers Cheat Sheet / Session Management Cheat Sheet | **Not fetched today.** Verify before citing specific headers. |

---

## 64. How to design a SaaS architecture for multiple user roles and organisations

**1. Founder question and pain.** "Our first customers each want their own workspace, their own admins and different roles. One user belongs to two client companies. Enterprise prospects ask for SSO, SCIM and EU or India data hosting. How do we model this without leaking data between customers?" The pain:
- a retrofit after a cross-tenant bug;
- an enterprise deal blocked on SSO, SCIM or residency;
- support staff with god-mode access.

**2. Intent and buyer stage.** Informational and architectural, early-to-mid build. The readers are technical founders and CTOs, plus non-technical founders scoping a B2B SaaS.

**3. Queries (qualitative).**
- Primary: "SaaS architecture for multiple organisations and roles" or "multi-tenant SaaS architecture".
- Supporting: "organisation user role permission data model", "tenant isolation", "user belongs to multiple organizations", "row level security multi-tenant", "BOLA multi-tenant", "SSO SCIM B2B SaaS", "data residency per tenant".

**4. Evidence of demand (moderate).**
- The SERP shows identity vendors competing on this exact question:
  - https://clerk.com/blog/how-to-design-multitenant-saas-architecture
  - https://workos.com/blog/model-your-b2b-saas-with-organizations
  - https://www.ory.com/blog/what-is-multi-tenancy
  - https://openfga.dev/docs/use-cases/multi-tenant-saas
  - https://blog.logto.io/tenant-isolation
- There is also a DEV thread on organisation and multi-tenant auth (https://dev.to/moose978/organization-and-multi-tenant-authentication-do5).
- OWASP now publishes a dedicated Multi-Tenant Security Cheat Sheet, which signals that the topic is mainstream.
- Reddit and People Also Ask were not checked.

**5. Existing ZSpace pages.**
- `/blogs/multi-tenant-saas-architecture` (699w, AU file, one external source).
  - It has isolation models (pool/silo/bridge table), a data-access checklist, config/billing, testing/ops, "Australian considerations" (APP 8), a hypothetical and mistakes.
  - **Missing:**
    - an explicit organisation/user/membership/role/permission data model, including users in several orgs and an active-org switch;
    - a tenant-isolation decision table;
    - BOLA/cross-tenant risks named against OWASP;
    - privileged/RLS-bypass connections;
    - support/platform-admin access;
    - SSO/SCIM at org level;
    - per-tenant data residency beyond Australia;
    - per-tenant backup/restore and offboarding.
  - Its CTA and intro are AU-framed.
- `/blogs/saas-roles-and-permissions` (681w, UI/UX category) covers RBAC vs attributes, default/custom roles, admin UX, enforcement, and the permission matrix. **Keep it as the "what can a user do inside an org" page.** The architecture page owns "how orgs, users and data are separated". They already link both ways; keep that and add anchor text that names each page's job. Batch 8 #143 is already updating it (resource ownership/BOLA from the *permission* angle), so the architecture page should cover BOLA from the *tenant boundary* angle and link to it.
- `/blogs/enterprise-sso-implementation` (529w) already covers SAML vs OIDC, per-tenant IdP, verified-domain routing, SCIM (cites RFC 7644) and JIT. The architecture page should **summarise SSO/SCIM in 2–3 sentences and link**, not re-explain.
- `/blogs/saas-audit-logging` and `/blogs/api-security-best-practices` already exist. Link them.
- Batch 9 #161 already decided the same UPDATE (RLS, cross-tenant tests, per-tenant backup/restore, noisy neighbours, support access). **Merge this brief into that work item** rather than scheduling two updates.

**6. SERP weaknesses.**
- The Clerk, WorkOS, Logto and Ory pages are vendor-authored and steer toward their own org/identity product. Their data models are tied to the vendor.
- https://docs.aws.amazon.com/whitepapers/latest/saas-architecture-fundamentals/tenant-isolation.md is authoritative but marked historical (per the search summary) and AWS-centric.
- https://openfga.dev/docs/use-cases/multi-tenant-saas is a single authorisation engine.
- https://www.turbostarter.dev/blog/how-to-build-multi-tenant-saas is a starter-kit seller.
- The common gaps:
  - a neutral reference data model;
  - one decision table linking isolation choice to customer requirement (residency, SSO, noisy neighbour, contract);
  - platform-staff access rules;
  - residency handled as per-tenant routing rather than a global choice.

**7. Qualified-buyer potential: high.** People reading this are designing a B2B product, which is a website-development (SaaS build) engagement. They are also likely to need the UI/UX of admin and role screens.

**8. Format and original asset.** Expand the existing page to about 1,800–2,300 words.
- **Reference data model (neutral):**
  - `organisations` (tenant; region/home deployment, plan, status);
  - `users` (global identity);
  - `memberships` (user ↔ org, status, invited_by);
  - `roles` (system roles plus optional org-defined custom roles);
  - `role_permissions`;
  - `membership_roles`;
  - optional `resource_grants` for per-object sharing;
  - `platform_staff_grants` (time-boxed, audited support access);
  - `identity_connections` (per-org SAML/OIDC, SCIM token, verified domains).

  Rules: every tenant-owned row carries `organisation_id`; the active org comes from the session and is validated against membership; a tenant admin is not a platform admin.
- **Tenant isolation decision table.** Rows are requirements:
  - many small customers;
  - an enterprise needing a dedicated DB;
  - per-country data location;
  - a noisy tenant;
  - per-tenant restore;
  - cost sensitivity.

  Columns: pool + app scoping; pool + RLS; schema-per-tenant; database-per-tenant; stack-per-tenant (silo). Each cell gives the trade-off, not a verdict.
- **Cross-tenant risk list** (from the OWASP Multi-Tenant cheat sheet and API1 BOLA):
  - client-supplied tenant ID treated as proof;
  - object ID without tenant check;
  - RLS-bypassing pooled connection;
  - cache keys without tenant;
  - shared queues;
  - exports and backups;
  - support impersonation.
- **Enterprise org features:** SSO (SAML 2.0/OIDC) per org, SCIM provisioning, verified domains, and org-level audit logs. Keep this short and link.
- **Data residency per tenant:** map each org to a home deployment/region (Azure's "tenants and deployments" mapping), and say that residency also covers backups, logs and support access. Give a market-neutral list of where AWS/Azure/GCP have regions (reuse the topic 61 table). Point to market pages for law: APP 8 for AU, plus UAE/UK/India pages.
- **Replace "Australian considerations"** with "Data location and regional requirements". Keep the APP 8 sentence as one of several bullets so AU value is not lost.
- **Update the hypothetical** to use a user in two orgs and one enterprise tenant moved to a dedicated database in another region.

**9. Service page and CTA.** `/services/website-development` (primary) and `/services/ui-ux-design` (role and admin UX). The CTA should be rewritten to be market-neutral: "Designing a B2B product for multiple organisations? We can review your tenant model, roles and isolation tests before you scale."

**10. Recommendation: UPDATE `/blogs/multi-tenant-saas-architecture` (substantial). I agree. Combine this with Batch 9 #161 into one update. Do not create a new slug.**
- The proposed slug already exists, and the intent is the same.
- Keep the slug. Retitle to "Multi-Tenant SaaS Architecture: Organisations, Roles, Isolation and Data Residency" or similar.
- seoTitle: "Multi-Tenant SaaS Architecture: Orgs, Roles and Isolation".
- Keep `saas-roles-and-permissions` (permission design) and `enterprise-sso-implementation` (SSO mechanics) distinct and linked both ways.
- The page sits in `blog-data-au-saas-engineering.ts`. Making it market-neutral is a content change only; the file location does not matter.

**11. Facts an article would need** (checked 15 Oct 2026)

| # | Exact claim | Source | Label |
|---|---|---|---|
| 1 | AWS SaaS Lens: silo = "tenants are provided dedicated resources"; pool = "tenants share resources"; bridge = a "mixed mode where some of the system is implemented in a silo model and some is in a pooled model". Even a silo "still relies on a shared identity, onboarding, and operational experience". | https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/silo-pool-and-bridge-models.html | [Vendor/Official docs] |
| 2 | Azure Architecture Center: in B2B, "you likely map your tenants to those customers… A single tenant typically has multiple users." "Selecting a tenancy model isn't only a technical decision. It's also a commercial decision." Models: automated single-tenant, fully multitenant, vertically partitioned, horizontally partitioned. "Test your isolation model… verify that one tenant's data isn't accidentally leaked to another." Tenants can be mapped to deployments ("stamps"), including geographically. Updated 2026-10-11. | https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/considerations/tenancy-models | [Vendor/Official docs] |
| 3 | OWASP Multi-Tenant Security Cheat Sheet: "Treat client-supplied tenant identifiers as selectors only." "Bind tenant context to a server-verified identity and current tenant membership". "For each tenant-scoped resource, verify that the authenticated principal can act in the resource's tenant." "Do not serve ordinary tenant-scoped requests through a privileged connection." "Include the tenant identifier in every cache key…" "A shared queue or topic is not itself a tenant-isolation boundary." "Make any cross-tenant administrative path explicit, separately authorized, and auditable." "a tenant-local admin is not implicitly a platform auditor." | https://cheatsheetseries.owasp.org/cheatsheets/Multi_Tenant_Security_Cheat_Sheet.html | [Industry/Official OWASP] |
| 4 | OWASP API1:2023 Broken Object Level Authorization. See topic 63 fact 2. "Prefer the use of random and unpredictable values as GUIDs", but the cheat sheet says random IDs are "defense in depth against enumeration, not as a substitute for authorization". | as above | [Official] |
| 5 | PostgreSQL 18 docs: row security policies "restrict, on a per-user basis, which rows can be returned by normal queries or inserted, updated, or deleted". "If no policy exists for the table, a default-deny policy is used". "Superusers and roles with the BYPASSRLS attribute always bypass the row security system". Table owners bypass unless `FORCE ROW LEVEL SECURITY`. | https://www.postgresql.org/docs/current/ddl-rowsecurity.html | [Official] |
| 6 | SCIM: RFC 7644 "System for Cross-domain Identity Management: Protocol", Proposed Standard, September 2015 (updated by RFC 9865 and RFC 9967). Its schema is defined in RFC 7643 (SCIM Core Schema). | https://www.rfc-editor.org/rfc/rfc7644 | [Official]. The RFC 7643 page was not fetched separately; its title comes from RFC 7644's reference. The content of RFC 9865/9967 was **not checked**. |
| 7 | "OpenID Connect 1.0 is a simple identity layer on top of the OAuth 2.0 protocol." (Core 1.0 incorporating errata set 2, 15 Dec 2023) | https://openid.net/specs/openid-connect-core-1_0.html | [Official] |
| 8 | SAML V2.0 core: "Assertions and Protocols for the OASIS Security Assertion Markup Language (SAML) V2.0", OASIS Standard, 15 March 2005. | https://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf | [Official] |
| 9 | Cloud regions for per-tenant residency (AWS, Azure, GCP lists including India, UAE, AU, UK, Singapore; GCP has no UAE region) | see topic 61 facts 17–19 | [Vendor docs] |
| 10 | Australia APP 8: before disclosing overseas, take "such steps as are reasonable in the circumstances to ensure that the recipient does not breach the APPs". Overseas cloud storage "may be a 'use'" (not a disclosure) only where a contract limits the provider to storage, subcontractors are bound, and the entity keeps effective control (para 8.14). Otherwise "in most circumstances" provision to a contractor "is a disclosure" (8.12). | https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information | [Official] (the tool partly paraphrased 8.2, so re-quote from the page) |
| 11 | India DPDP Act s.16: the Central Government may by notification restrict transfers to notified countries (a negative list); s.16(2) preserves stricter sectoral laws. | Secondary sources only (e.g. https://www.dsci.in/files/content/documents/2025/cross-border-flow-of-data.pdf) | **Unverified.** Secondary sources conflict on the commencement date of s.16 (Nov 2025 vs 13 May 2027), and whether a restricted list has been notified is unknown. Do not state specifics without the Gazette/MeitY text. |
| 12 | Vendor guidance that users can belong to several organisations with a different role in each (shared user pool) | https://clerk.com/docs/guides/multi-tenant-architecture ; https://workos.com/blog/model-your-b2b-saas-with-organizations | [Vendor]. Use as context only; the data model is our own. |

Regional note: the only real regional difference is **where data may live and who can access it**. Keep law in the market pages and keep this page market-neutral.

---

## Summary

1. **61: CREATE `/blogs/web-application-hosting-cost`** (agree). It absorbs WEB-15 and retires the reserved `web-app-hosting-running-costs`. The intent is distinct from the build-cost page's "Step 5", which only lists lines to check. Link Step 5 to the new page.
2. The 61 asset is a line-item × architecture cost model (static, PaaS, hyperscaler serverless/containers, VPS) showing billing basis and free-tier limits, plus a region table. Verified: Vercel Hobby non-commercial and Pro $20 platform fee + $20/seat; Netlify; Railway; Render (free Postgres expires in 30 days); Cloudflare Workers; DigitalOcean; AWS, GCP and Azure free tiers and regions. GCP has no UAE region.
3. 61 flags: the Render paid price page did not render; AWS Free Tier 6- vs 12-month wording conflicts between pages; regional price variation is inference only.
4. **62: CREATE, but use the WEB-10 slug `/blogs/admin-panel-build-vs-buy`** (partly disagree). The content-vs-operations distinction is real (Django's own docs draw it), but a "CMS vs…" slug would collide with three CMS pages. `low-code-vs-custom-software` is the nearest overlap.
5. The 62 asset is a matrix of admin jobs × options (CMS, framework admin, internal-tool builder, custom) plus a back-office requirements checklist. Vendor list prices are verified for Retool, Appsmith and Nova; Filament (MIT) and the Directus licence (MSCL, not BSL) are verified.
6. **63: KEEP `/blogs/website-security-checklist` + a minor UPDATE** (agree). Add a "Pre-launch security sign-off" table (evidence, owner, blocker), a security.txt (RFC 9116) and BOLA test, and an optional seoTitle tweak. Coordinate with Batch 9 #164.
7. 63 cannibalisation: the three security pages are split by stage and market, and each says so in an FAQ. The only latent overlap is generic vs AU build guides. No action now.
8. **64: UPDATE `/blogs/multi-tenant-saas-architecture` (substantial)** (agree). Merge it with the Batch 9 #161 work item. Add a neutral org/user/membership/role data model, an isolation decision table, OWASP Multi-Tenant cheat sheet risks and BOLA, a brief SSO/SCIM section linking to `enterprise-sso-implementation`, and per-tenant residency. Replace "Australian considerations" with a market-neutral section.
9. 64: keep `saas-roles-and-permissions` (Batch 8 #143) as the permission-design page. The two pages split as tenant boundary vs in-tenant permissions, linked both ways.
10. Limits: Reddit and People Also Ask were unavailable and search is US-only. The DPDP s.16 commencement is unverified, as are the ASVS 5.0 date and levels and specific security headers. No ZSpace prices or market averages are used anywhere.
