import type { BlogPost } from "./blog-data";

/**
 * Founder Batch 4, build set: web application hosting cost (topic 61) and
 * admin panel build vs buy (topic 62). Global, British English. No ZSpace
 * prices and no market averages; vendor list prices only, each with the date
 * checked, currency and billing basis. Examples are labelled hypothetical.
 * Sources checked 2026-10-15:
 * - Vercel pricing page and Pro plan docs (last updated 2026-09-15): Hobby
 *   non-commercial, Pro $20 platform fee, seats, included transfer, add-ons.
 * - Netlify pricing (plans, credits, credit consumption).
 * - Railway pricing (plans, per-second usage rates, egress).
 * - Render free instances docs (spin-down, 750 hours, free Postgres expiry,
 *   no backups). Render's paid pricing page did not load, so it is not quoted.
 * - Cloudflare Workers pricing (free and paid allowances, egress statement).
 * - DigitalOcean Droplet and Managed Database pricing.
 * - AWS Free Tier page, AWS global network FAQs (data transfer out), Lambda
 *   pricing, SES pricing, AWS Regions list (opt-in status).
 * - Google Cloud free features (last updated 2026-10-13) and regions/zones.
 * - Azure free account page and Azure regions list (updated 2026-10-13).
 * - Next.js deploying docs (lastUpdated 2026-08-06).
 * - Django 6.1 admin docs (internal management tool; admin actions; LogEntry).
 * - Filament GitHub repo (MIT) and Filament 5.x import and export action docs.
 * - Laravel Nova licence prices; Retool pricing; Appsmith pricing and GitHub
 *   repo (Apache-2.0); Directus GitHub repo (MSCL 1.0).
 * - OWASP Authorization Cheat Sheet.
 * Not used: Render paid list prices (page did not render); Rails admin gems
 * (not verified); PaaS region availability per plan (not verified); vendor
 * case studies and third-party breakeven figures (unsourced).
 */

const VERCEL_PRICING = "https://vercel.com/pricing";
const VERCEL_PRO = "https://vercel.com/docs/plans/pro-plan";
const NETLIFY = "https://www.netlify.com/pricing/";
const RAILWAY = "https://railway.com/pricing";
const RENDER_FREE = "https://render.com/docs/free";
const CF_WORKERS = "https://developers.cloudflare.com/workers/platform/pricing/";
const DO_DROPLETS = "https://www.digitalocean.com/pricing/droplets";
const DO_DB = "https://www.digitalocean.com/pricing/managed-databases";
const AWS_FREE = "https://aws.amazon.com/free/";
const AWS_DTO = "https://aws.amazon.com/about-aws/global-infrastructure/global-network/faqs";
const AWS_LAMBDA = "https://aws.amazon.com/lambda/pricing/";
const AWS_SES = "https://aws.amazon.com/ses/pricing/";
const AWS_REGIONS = "https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions.html";
const GCP_FREE = "https://docs.cloud.google.com/free/docs/free-cloud-features";
const GCP_REGIONS = "https://docs.cloud.google.com/compute/docs/regions-zones";
const AZURE_FREE = "https://azure.microsoft.com/en-us/pricing/purchase-options/azure-account";
const AZURE_REGIONS = "https://learn.microsoft.com/en-us/azure/reliability/regions-list";
const NEXT_DEPLOY = "https://nextjs.org/docs/app/getting-started/deploying";

const DJANGO_ADMIN = "https://docs.djangoproject.com/en/stable/ref/contrib/admin/";
const DJANGO_ACTIONS = "https://docs.djangoproject.com/en/stable/ref/contrib/admin/actions/";
const FILAMENT = "https://github.com/filamentphp/filament";
const FILAMENT_IMPORT = "https://filamentphp.com/docs/5.x/actions/import";
const FILAMENT_EXPORT = "https://filamentphp.com/docs/5.x/actions/export";
const NOVA = "https://nova.laravel.com/";
const RETOOL = "https://retool.com/pricing";
const APPSMITH = "https://www.appsmith.com/pricing";
const APPSMITH_REPO = "https://github.com/appsmithorg/appsmith";
const DIRECTUS = "https://github.com/directus/directus";
const OWASP_AUTHZ = "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html";

export const founderBuildPosts4: BlogPost[] = [
  {
    slug: "web-application-hosting-cost",
    title: "How Much Does It Cost to Host a Web Application?",
    seoTitle: "Web Application Hosting Cost: The Monthly Bill, Line by Line",
    excerpt:
      "What hosting a web app costs each month: line items by architecture, where free tiers end, dated vendor list prices, egress, databases, staging and regions.",
    category: "Web Development",
    banner: "costbreakdown",
    sceneKind: "cost",
    bannerAlt:
      "A monthly hosting bill broken into line items (compute, data transfer, database, storage, backups, email, monitoring, environments and seats) across four hosting architectures",
    date: "2026-10-15",
    readingTime: "11 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["startups", "saas-technology"],
    relatedSlugs: [
      "custom-web-application-development-cost",
      "cloud-cost-optimization-australia",
      "kubernetes-vs-serverless-vs-virtual-machines",
    ],
    faqs: [
      {
        q: "Can I run a business web app on Vercel's free Hobby plan?",
        a: "No. Vercel's pricing page describes Hobby as for personal, non-commercial use, so a commercial product needs a paid plan such as Pro from the start. Check the current terms on Vercel's pricing page before you launch, because plans change.",
      },
      {
        q: "Why is my database often a bigger line than my web hosting?",
        a: "The web tier of many apps is billed by use and may sit inside an included allowance, while a managed database is usually billed for an always-on instance plus storage and backups, whether or not traffic is high. Compare the instance size, storage and backup retention you actually need rather than the smallest listed plan.",
      },
      {
        q: "What is egress and why does it matter?",
        a: "Egress is data your application sends out to the internet: pages, API responses, images and file downloads. Most platforms include an allowance and then bill per GB. AWS, for example, includes 100 GB a month from its Regions to the internet across services, and Vercel Pro includes 1 TB a month before per-GB charges. Large files and media are the usual cause of growth.",
      },
      {
        q: "Do staging and preview environments cost extra?",
        a: "Usually yes, in some form. Preview deployments on a PaaS may be included but can consume build credits, and add-ons such as password protection can be priced per project. A full staging environment on a cloud provider or VPS is a second copy of the stack, often with its own database, billed like production.",
      },
      {
        q: "Is a VPS always cheaper than a managed platform?",
        a: "The instance price is often lower and predictable, but you take on patching, backups, monitoring, scaling and security yourself. Count that maintenance time, and the cost of a managed database if you add one, before comparing. A managed platform can be the cheaper option once you price the work a VPS needs.",
      },
      {
        q: "Does choosing a local cloud region mean my data stays in that country?",
        a: "Not on its own. A region controls where the resources you create run, but backups, logs, third-party services, support access and the contract all affect where data goes. Treat data location as a contract and legal question, and use the region choice as one part of the answer.",
      },
    ],
    content: [
      {
        heading: "The short answer: a sum of metered lines, not one price",
        body: [
          "**There is no single monthly price for hosting a web application. The bill is the sum of separate line items, each metered in its own way: compute, data transfer (egress), the database, file storage, backups, email and SMS, monitoring and logs, extra environments, team seats and paid add-ons.** Which lines you pay for, and where each free allowance ends, depends mostly on the architecture: a static site on a CDN, a managed platform (PaaS), serverless functions or containers on a large cloud, or a virtual private server (VPS).",
          "Published entry prices are low. On 15 October 2026 Vercel listed its Pro plan as a $20/month platform fee (USD, excluding tax) and DigitalOcean listed its smallest Basic Droplet at $4/month. Those are list prices for a starting plan, not what a production application usually pays in total: the database, extra seats, data transfer beyond the allowance and add-ons sit on top. The reliable way to estimate is to list the lines, attach your own usage to each, and price them in the vendor's calculator for your region.",
          "This guide covers the running bill once the application is live. To estimate the build itself, see [[/blogs/custom-web-application-development-cost|how to estimate the cost of a custom web application]], whose running-costs step points here.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Price each line separately. The platform fee is one line; the database, data transfer, seats and add-ons are billed on their own meters.",
          "Vercel's Hobby plan is for personal, non-commercial use. A business app needs a paid plan from day one. Render says its free instances should not be used for production.",
          "Big-cloud free offers are limited by time or region: the AWS Free plan closes after six months or when credits run out, and Google Cloud's free compute and storage allowances apply only in named US regions.",
          "Staging, preview environments, backups and log retention are real lines. Put them in the budget before launch.",
          "Most platforms bill egress per GB beyond an allowance. Cloudflare Workers is an exception that states no extra charge for data transfer.",
          "Pick a region for latency and contractual data-location needs first, then price it there. A region on its own is not a residency guarantee.",
        ],
      },
      {
        heading: "The hosting bill builder: what each line is billed by",
        body: [
          "Read across a row to see how the same line is metered in each architecture. Each cell says what the line is billed by and, where a vendor publishes one, where the included allowance ends. Named vendors are examples to check, not recommendations. All figures are vendor list prices or allowances checked on 15 October 2026 and will change.",
        ],
        table: {
          headers: [
            "Line item",
            "Static / Jamstack on a CDN",
            "Managed PaaS (e.g. Vercel, Netlify, Railway, Render)",
            "Cloud serverless or containers (AWS, Google Cloud, Azure)",
            "VPS (e.g. a DigitalOcean Droplet)",
          ],
          rows: [
            [
              "**Compute**",
              "None at request time. Builds and deploys may use plan credits (Netlify: 15 credits per production deploy).",
              "Function invocations and duration, or instance time. Vercel Pro includes 1M invocations, then from $0.60 per 1M. Railway meters CPU and RAM per second against the plan's included credit.",
              "Per request plus duration or vCPU and memory time. Free tiers: Lambda 1M requests and 400,000 GB-seconds a month; Cloud Run 2M requests a month.",
              "A flat instance price, billed per second with a 60-second minimum on DigitalOcean. You pay for it whether it is busy or idle.",
            ],
            [
              "**Data transfer (egress)**",
              "Per GB or plan credits beyond an allowance (Netlify: 20 credits per GB). Cloudflare Workers: requests to static assets are free and unlimited.",
              "Allowance, then per GB. Vercel Hobby 100 GB a month; Vercel Pro 1 TB, then from $0.15/GB. Railway $0.05/GB for services.",
              "Per GB to the internet after the free allowance. AWS: 100 GB a month from Regions, plus 1 TB a month out of CloudFront.",
              "An allowance bundled with the instance (500 GiB on the smallest Basic Droplet). Inbound is free.",
            ],
            [
              "**CDN and requests**",
              "The core of the product. Requests may be metered (Netlify: 2 credits per 10,000 web requests).",
              "Included in the plan. Vercel Pro's lowest Flat Rate CDN tier covers 1M CDN requests and 1 TB a month.",
              "A separate service (for example CloudFront) with its own request and transfer pricing.",
              "Not included. Add a CDN service and its own bill if you need one.",
            ],
            [
              "**Database**",
              "None in the static site. Data lives in a separate hosted database or API, billed by that provider.",
              "An add-on or partner database, billed by instance size and storage or by usage. Render's free Postgres expires 30 days after creation.",
              "A managed database billed for instance time or capacity, plus storage and backups. Azure's 12-month free offer includes 750 hours of a burstable PostgreSQL Flexible Server.",
              "Self-managed on the server (your team's time), or a managed database billed separately: DigitalOcean lists managed PostgreSQL from $15.15/month for the smallest node, storage extra.",
            ],
            [
              "**File storage**",
              "Build output only. User uploads need object storage elsewhere.",
              "Volumes or object storage per GB-month (Railway volumes about $0.15/GB-month as a monthly equivalent).",
              "Object storage per GB-month, plus requests and egress. Google Cloud Storage's free tier applies only in three US regions.",
              "Disk is part of the instance (10 GiB on the smallest Droplet). Extra volumes or object storage are separate.",
            ],
            [
              "**Backups**",
              "Code is in Git. Back up the data wherever it lives.",
              "Depends on the database plan. Render's free Postgres has no backups at all.",
              "Backup and snapshot storage per GB-month; retention and point-in-time restore vary by service.",
              "Check whether instance backups are included or extra, and whether you also need database dumps stored elsewhere.",
            ],
            [
              "**Email and SMS**",
              "The same in every architecture: a separate provider billed per message. Amazon SES lists $0.10 per 1,000 outbound emails on its à la carte pricing.",
              "As left.",
              "As left.",
              "As left.",
            ],
            [
              "**Monitoring and logs**",
              "Basic analytics, with paid tiers.",
              "Plan features plus add-ons (Vercel Observability Plus: $1.20 per 1M events). Log retention varies by plan.",
              "Logs and metrics are separate metered services. Check ingestion and retention pricing.",
              "You run monitoring yourself or buy a third-party tool, usually billed per host, seat or event.",
            ],
            [
              "**Environments (staging, preview)**",
              "Preview deploys per branch, which may use build credits.",
              "Previews are usually built in; persistent staging is another project or service. Some add-ons are per project (Vercel Password Protection: $20 per project per month).",
              "Staging is a second copy of the stack, often with its own database, billed like production.",
              "A second server, or staging on the production server (cheaper, but a fault in one can affect the other).",
            ],
            [
              "**Team seats**",
              "Varies by provider; check the plan.",
              "Vercel Pro: extra deploying seats $20/month each, viewer seats free. Netlify Pro: unlimited members. Railway Pro: unlimited seats, fee per workspace.",
              "The pricing pages checked meter usage, not people. Support plans and third-party tools are priced separately.",
              "No seat fee from the host.",
            ],
            [
              "**Paid add-ons**",
              "Password protection, analytics and form handling may be extras.",
              "Vercel Pro lists SAML SSO at $300/month, Static IPs at $100/month per project and a HIPAA BAA at $350/month.",
              "Each extra network or security service has its own meter.",
              "Load balancers, firewalls and extra IPs are separate products.",
            ],
          ],
        },
      },
      {
        heading: "Vendor list prices and where free allowances end",
        body: [
          "The table below records what each vendor's own page said on 15 October 2026. Prices are list prices in US dollars as displayed (Vercel and Cloudflare state USD; check the currency shown for your account), excluding tax unless stated. They are starting points for your own model, not typical totals, and vendors change them often.",
        ],
        table: {
          headers: ["Vendor and plan", "List price (checked 15 Oct 2026)", "Billing basis", "Where the included or free allowance ends"],
          rows: [
            ["**Vercel Hobby**", "$0", "Personal, non-commercial use only", "100 GB Fast Data Transfer and 1M function invocations a month"],
            ["**Vercel Pro**", "$20/month platform fee, USD, excluding VAT/GST", "Includes 1 deploying seat and $20 monthly usage credit, which expires at month end; extra deploying seats $20/month", "1 TB data transfer and 1M CDN requests a month, then transfer from $0.15/GB; invocations from $0.60 per 1M after 1M"],
            ["**Netlify Free / Personal / Pro**", "$0 / $9 / $20 a month", "Credits: 300 / 1,000 / 3,000 a month; Pro has unlimited members", "Credits are consumed by production deploys (15 each), compute (10 per GB-hour), bandwidth (20 per GB) and web requests (2 per 10,000)"],
            ["**Railway Hobby / Pro**", "$5 / $20 a month (Pro per workspace)", "Includes the same amount in usage credit; usage metered per second", "CPU $0.00000772 per vCPU-second and RAM $0.00000386 per GB-second (about $20 per vCPU-month and $10 per GB-month); egress $0.05/GB"],
            ["**Render Free**", "$0", "750 free instance hours per workspace a month; free web services spin down after 15 minutes without traffic", "Free Postgres expires 30 days after creation, with 14 days to upgrade; 1 GB; no backups. Paid prices not quoted here: check Render's pricing page"],
            ["**Cloudflare Workers Free / Paid**", "$0 / minimum $5 a month per account", "Free: 100,000 requests a day. Paid: 10M requests and 30M CPU milliseconds a month included", "Then $0.30 per extra million requests and $0.02 per extra million CPU milliseconds; static asset requests free; no extra egress charge"],
            ["**DigitalOcean Basic Droplet**", "From $4/month", "Per second, 60-second minimum", "512 MiB RAM, 1 vCPU, 10 GiB SSD, 500 GiB outbound transfer; inbound free"],
            ["**DigitalOcean Managed PostgreSQL**", "From $15.15/month (1 GiB, 1 vCPU node)", "Hourly up to a monthly cap", "Storage billed separately at $0.215/GiB-month"],
            ["**AWS Free plan**", "$100 credit on sign-up, up to $100 more by exploring services", "Account closes after 6 months or when credits run out, whichever comes first", "30+ always-free services within limits; Lambda 1M requests and 400,000 GB-seconds a month; 100 GB data out a month; SES $0.10 per 1,000 emails"],
            ["**Google Cloud**", "$300 Welcome credit over 90 days", "Free tier continues after the credit", "Cloud Run 2M requests a month; one e2-micro VM only in us-west1, us-central1 or us-east1; Cloud Storage free tier only in those regions"],
            ["**Azure free account**", "$200 credit to use within 30 days", "12 months of selected free services, then always-free allowances", "750 hours each of B1s, B2pts v2 and B2ats v2 VMs and 750 hours of PostgreSQL Flexible Server B1MS for 12 months; App Service up to 10 apps with 1 GB and 1 hour a day; Functions 1M requests"],
          ],
        },
        callout: {
          type: "note",
          text: "Vercel's Hobby plan is for personal, non-commercial use. If the application earns money or serves a business, budget for a paid plan from launch. Render says of its free instances: \"Do not use them for production applications.\" Sources: [[" + VERCEL_PRICING + "|Vercel pricing]] and [[" + RENDER_FREE + "|Render free instances]] (vendor pages).",
        },
      },
      {
        heading: "Five lines that are easy to leave out",
        body: [
          "**Environments.** A serious application has production, at least one staging environment, and often a preview build for every change. On a PaaS the previews are usually built in, but persistent staging is another project, and some add-ons are priced per project. On a cloud provider or VPS, a realistic staging environment is a second copy of the stack, and the database is the part people forget to copy. Decide which environments run all month and which can be paused or scaled down.",
          "**Egress.** Data leaving the platform for the internet is metered on most providers once the allowance is used. Images, video, file exports and chatty APIs drive it. AWS includes 100 GB a month from its Regions across services and 1 TB a month from CloudFront ([[" + AWS_DTO + "|AWS network FAQs]], vendor). Serving large files through a CDN or object storage designed for it usually changes this line more than any other choice.",
          "**Managed databases.** A managed database is normally billed as an always-on instance plus storage, and higher tiers add replicas, more storage and longer backup retention. It is often the line that grows first once real data arrives. Free database tiers are for trying things: Render's free Postgres expires after 30 days and has no backups ([[" + RENDER_FREE + "|Render docs]], vendor).",
          "**Backups and restore.** Check how long backups are kept, whether point-in-time restore is included, where the copies are stored and what restoring costs in time. A backup you have never restored is an assumption, not a plan. The [[/blogs/website-maintenance-guide|website maintenance guide]] covers how to schedule and test restores alongside updates.",
          "**Observability.** Error tracking, uptime checks, logs and metrics each have their own meter, usually events, GB ingested or retention days. Short retention is cheap but limits investigation after an incident. Decide how many days of logs you need, and keep debug-level logging out of production.",
        ],
      },
      {
        heading: "Hypothetical example: how the bill grows by line item",
        body: [
          "**Hypothetical example:** a business-to-business booking application, built with Next.js and a PostgreSQL database. The table records usage assumptions only. It deliberately gives no totals, because the result depends on the provider, region and plan you pick. Replace each assumption with your own.",
        ],
        table: {
          headers: ["Line item", "Stage 1: launch", "Stage 2: first paying customers", "Stage 3: larger team and traffic"],
          rows: [
            ["**People who deploy**", "1 developer", "3 developers", "6 developers, plus a contractor who only needs to view"],
            ["**Environments**", "Production and one staging", "Adds a preview build per pull request", "Adds a second staging environment for a customer pilot"],
            ["**Database**", "2 GB, daily backups", "20 GB, point-in-time restore wanted", "80 GB, a read replica for reports"],
            ["**Data out to the internet**", "30 GB a month", "300 GB a month", "1.4 TB a month, mostly images and exports"],
            ["**Transactional email**", "1,000 a month", "20,000 a month", "150,000 a month"],
            ["**Logs and monitoring**", "Free error tracking tier", "14 days of log retention", "30 days of retention and on-call alerts"],
            ["**Add-ons**", "None", "Password-protected staging", "SAML single sign-on requested by an enterprise customer"],
          ],
        },
      },
      {
        heading: "Reading the example against the price lists",
        body: [
          "On Vercel Pro, as listed on 15 October 2026, Stage 2 adds two deploying seats at $20/month each and password protection at $20 per protected project per month. Stage 3 adds three more deploying seats; the contractor can use a free viewer seat. The 1.4 TB of transfer goes past the 1 TB included, so the extra 0.4 TB is billed per GB at the listed rate, from $0.15/GB. SAML SSO is a $300/month add-on ([[" + VERCEL_PRO + "|Vercel Pro plan docs]], vendor).",
          "On AWS, the 100 GB monthly data-transfer allowance is used up during Stage 2, and email is billed per 1,000 messages on SES. On a VPS, the instance price stays flat until the server needs resizing, but the database, backups and monitoring become either separate products or work for your team. In every architecture the database line moves at each stage, which is why it deserves its own estimate rather than a share of \"hosting\".",
          "Notice what does not change much: the base platform fee. The lines that grow are seats, transfer, the database and add-ons that customers ask for.",
        ],
        checklist: [
          "Who deploys, and who only needs to view?",
          "Which environments run all month, and does each have its own database?",
          "Database size now and in 12 months, backup retention and restore target",
          "Data out per month, and how much of it is large files",
          "Emails and SMS per month, by country",
          "Log retention in days and which alerts you need",
          "Add-ons a customer contract could require: SSO, static IPs, compliance agreements",
          "Region, and any contract terms about where data is stored",
        ],
      },
      {
        heading: "Regions and data location",
        body: [
          "Region choice changes latency, which services are available and the price. The same service can cost a different amount in a different region, so price your model in the region you will use, in the provider's own calculator. The table lists regions published by each provider on 15 October 2026 for the markets most of our readers ask about.",
        ],
        table: {
          headers: ["Market", "AWS", "Google Cloud", "Azure", "DigitalOcean"],
          rows: [
            ["**India**", "Asia Pacific (Mumbai), enabled by default; Asia Pacific (Hyderabad), opt-in", "asia-south1 (Mumbai), asia-south2 (Delhi)", "Central India, South India, West India, India South Central", "Bangalore"],
            ["**UAE**", "Middle East (UAE), opt-in; Middle East (Bahrain), opt-in, is outside the UAE", "No UAE region listed; the nearest listed are in Qatar and Saudi Arabia", "UAE North; UAE Central has restricted access", "Not listed in its pricing FAQ"],
            ["**United Kingdom**", "Europe (London)", "europe-west2 (London)", "UK South, UK West", "London"],
            ["**Australia**", "Asia Pacific (Sydney); Asia Pacific (Melbourne), opt-in", "australia-southeast1 and australia-southeast2", "Australia East, Australia Southeast; Australia Central", "Sydney"],
            ["**Singapore**", "Asia Pacific (Singapore)", "asia-southeast1", "Southeast Asia", "Singapore"],
          ],
        },
        callout: {
          type: "note",
          text: "AWS Regions introduced after 20 March 2019 must be enabled before use. Region availability for managed platforms such as Vercel, Netlify and Railway was not verified for this article, so check each provider's region list for your plan. A region controls where your resources run; backups, logs, third-party services and support access also affect where data goes. For market-specific rules see [[/blogs/cloud-migration-uae|cloud migration in the UAE]] and [[/blogs/cloud-migration-australia|cloud migration in Australia]].",
        },
      },
      {
        heading: "Matching the architecture to your cost shape",
        body: [
          "**Static or Jamstack** suits marketing sites and apps whose dynamic parts live in a separate API or backend. It is cheap to serve, but it is not suitable when most pages depend on signed-in data or server rendering. Next.js lists static export as \"Limited\" feature support, while a Node.js server or Docker container supports all features ([[" + NEXT_DEPLOY + "|Next.js deploying docs]]).",
          "**A managed PaaS** suits small teams that want deployments, previews and scaling handled for them. The trade-off is per-seat and per-add-on pricing that grows with the team and with enterprise customer demands. It is a poor fit when you need fine control over networking or must keep everything inside one cloud account for contractual reasons.",
          "**Cloud serverless or containers** suit teams that need specific regions, managed databases and services from one provider, or traffic that varies widely. Every service has its own meter, so the bill needs someone who reads it. It is not suitable if nobody on the team can own cloud configuration and cost alerts.",
          "**A VPS** suits steady, predictable workloads and teams willing to run servers. The instance price is flat, but patching, backups, monitoring and scaling are your job. It is a poor fit when uptime matters and nobody is on call.",
          "For the technical trade-offs beyond cost, see [[/blogs/kubernetes-vs-serverless-vs-virtual-machines|Kubernetes vs serverless vs virtual machines]].",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Launching a commercial product on a plan its vendor describes as non-commercial.",
          "Budgeting from the platform fee and leaving out the database, seats and add-ons.",
          "Assuming a big-cloud free offer lasts: AWS's Free plan closes after six months or when credits run out, and Azure's $200 credit must be used within 30 days.",
          "Counting on Google Cloud's free VM or storage allowance while hosting in India, the UAE, the UK, Australia or Singapore, where it does not apply.",
          "Running preview and staging environments, with their databases, all month when nobody uses them.",
          "Serving large files from the application instead of object storage and a CDN.",
          "Setting no spend alerts. Vercel enables a default notification at $200 per billing cycle for new customers; set thresholds that fit your own budget on any platform.",
          "Forgetting third-party APIs. Maps, payments, search and messaging fees are running costs too; see [[/blogs/api-integration-development-cost|API integration costs]].",
        ],
      },
      {
        heading: "When the bill has already grown",
        body: [
          "If you are already live and the bill is rising, the work changes from estimating to finding where the money goes: tagging resources, right-sizing instances, pausing idle environments and committing to capacity where usage is steady. That is covered in [[/blogs/cloud-cost-optimization-australia|cloud cost optimisation]]; its methods apply outside Australia. Hosting changes should also go into the maintenance plan, so that someone owns updates, restores and cost reviews every month.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Managed platforms (vendor pages): [[" + VERCEL_PRICING + "|Vercel pricing]]; [[" + VERCEL_PRO + "|Vercel Pro plan docs]] (last updated 15 September 2026); [[" + NETLIFY + "|Netlify pricing]]; [[" + RAILWAY + "|Railway pricing]]; [[" + RENDER_FREE + "|Render: deploy for free]]; [[" + CF_WORKERS + "|Cloudflare Workers pricing]].",
          "VPS and databases (vendor pages): [[" + DO_DROPLETS + "|DigitalOcean Droplet pricing]]; [[" + DO_DB + "|DigitalOcean Managed Database pricing]].",
          "Cloud providers (vendor pages and docs): [[" + AWS_FREE + "|AWS Free Tier]]; [[" + AWS_DTO + "|AWS global network FAQs]]; [[" + AWS_LAMBDA + "|AWS Lambda pricing]]; [[" + AWS_SES + "|Amazon SES pricing]]; [[" + AWS_REGIONS + "|AWS Regions]]; [[" + GCP_FREE + "|Google Cloud free features]] (last updated 13 October 2026); [[" + GCP_REGIONS + "|Google Cloud regions and zones]]; [[" + AZURE_FREE + "|Azure free account]]; [[" + AZURE_REGIONS + "|List of Azure regions]] (updated 13 October 2026).",
          "Framework: [[" + NEXT_DEPLOY + "|Next.js: deploying]].",
          "Accessed 15 October 2026. All prices are vendor list prices and allowances that change; check the vendor's page and calculator for your region before you commit.",
        ],
      },
      {
        heading: "Next steps",
        body: [
          "Write down your expected users, data size, monthly data out, emails, environments and region. Put each against the bill-builder rows above, price it on the vendor's page for your region, and record the date. Then compare two architectures on the same assumptions, including the team time a VPS or raw cloud setup needs. If you are choosing a stack as part of a new build, our [[/services/website-development|web application development]] work starts from these running-cost lines.",
        ],
        cta: {
          title: "Want your running-cost lines mapped before you pick a stack?",
          description:
            "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/website-development|web application development]]. If useful, share your expected users, data and regions and we can talk through which running-cost lines apply to each architecture you are considering.",
        },
      },
    ],
  },
  {
    slug: "admin-panel-build-vs-buy",
    title: "CMS, Framework Admin, Internal-Tool Builder or Custom: How to Choose Your Admin Panel",
    seoTitle: "Admin Panel: CMS, Framework, Builder or Custom Build?",
    excerpt:
      "Choosing an admin panel: CMS, Django or Laravel admin, Retool or Appsmith, or custom. A job-by-option matrix and a back-office requirements checklist.",
    category: "Web Development",
    banner: "dashboard",
    sceneKind: "compare",
    bannerAlt:
      "An admin back office split into four routes: a CMS for content, a framework admin, an internal-tool builder and a custom admin, matched to operational jobs",
    date: "2026-10-15",
    readingTime: "10 min read",
    relatedServiceSlugs: ["website-development", "ui-ux-design"],
    relatedIndustrySlugs: ["startups", "saas-technology", "ecommerce"],
    relatedSlugs: ["low-code-vs-custom-software", "custom-cms-vs-wordpress", "saas-roles-and-permissions"],
    faqs: [
      {
        q: "CMS vs custom admin panel: which do I need?",
        a: "If the work is publishing pages, articles and media, a CMS is built for it. If the work is operating records such as users, orders, refunds and approvals, a CMS is the wrong tool and you need a framework admin, an internal-tool builder or a custom admin. Many products use a CMS for marketing content and one of the other three for operations.",
      },
      {
        q: "Is Django admin suitable for production use?",
        a: "Yes, for its intended purpose. Django's documentation says the admin's recommended use is limited to an organisation's internal management tool, and that it is not intended for building your entire front end. When staff need a process-centric interface rather than tables and fields, the docs suggest writing your own views.",
      },
      {
        q: "Is Retool or Appsmith cheaper than building an admin?",
        a: "It depends on how many people use it and for how long. Both have free tiers for up to five users and per-user monthly pricing above that, so the cost grows with headcount. A custom or framework admin has no per-user licence but costs development and maintenance time. Model both over several years at your expected number of staff users.",
      },
      {
        q: "Should my customers' own administrators use the same admin panel as my staff?",
        a: "Usually not. Customer-facing admin, such as letting a client's admin manage their team, belongs inside the product with its own tenant-scoped permissions. Staff back offices see across customers and need stricter controls, audit logs and different screens.",
      },
      {
        q: "What licence does Directus use now?",
        a: "Its GitHub repository states the Monospace Sustainable Core License (MSCL) 1.0, a source-available licence, with free use for organisations under $5M in annual revenue and 50 employees through its Open Innovation Grant. Some older articles still describe it as BSL 1.1; check the repository for the current terms.",
      },
      {
        q: "Can we start with an internal-tool builder and replace it later?",
        a: "Yes, if you plan for it. Keep business rules in your own backend or API rather than inside the builder's queries, use a restricted service account rather than full database credentials, and document each screen. Expect replacing it to be a rebuild of the screens, not an export.",
      },
    ],
    content: [
      {
        heading: "Which admin panel option fits?",
        body: [
          "**Use a CMS for marketing content. Use a framework admin (Django admin, Laravel Filament or Nova) when a small, trusted team needs to manage records in an app you already build on that framework. Use an internal-tool builder (Retool, Appsmith) for operational screens that pull from several systems and change often. Build a custom admin for processes that are high-risk, multi-step or used by your customers' own administrators.** Most products end up with two of these, not one.",
          "The question is often asked as \"CMS vs custom admin panel\", but that frames it as a choice between two versions of the same thing. They are different jobs, and the right tool depends on which job each screen does. This guide is for founders, product and operations leads scoping a back office for a product that already exists or is being built.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Separate content management from operational back-office work before choosing a tool.",
          "A framework admin is quick and cheap for internal record management, within the limits its own docs set.",
          "Internal-tool builders trade per-user pricing and platform dependence for speed.",
          "Custom admin earns its cost on high-risk or process-heavy work, and on anything customers use.",
          "Roles, audit logs, bulk actions, imports and exports, approvals and reporting decide the choice more than the user interface does.",
        ],
      },
      {
        heading: "Content management and back-office operations are different jobs",
        body: [
          "Django's documentation draws the line clearly. It says: \"The admin's recommended use is limited to an organization's internal management tool. It's not intended for building your entire front end around.\" It adds: \"If you need to provide a more process-centric interface that abstracts away the implementation details of database tables and fields, then it's probably time to write your own views.\" ([[" + DJANGO_ADMIN + "|Django 6.1 admin docs]]). The same logic applies to every option below: tools that expose records are fine for people who understand the records, and processes need screens designed around the process.",
        ],
        table: {
          headers: ["", "Content management", "Operational back office"],
          rows: [
            ["**Typical work**", "Pages, articles, media, SEO fields, previews, publishing", "Users, orders, refunds, subscriptions, approvals, support look-ups, bulk fixes"],
            ["**Who uses it**", "Marketing and editorial staff", "Operations, support and finance staff"],
            ["**Data**", "Documents and assets", "Transactional records linked to money and accounts"],
            ["**Permissions**", "Who can edit and publish", "Who can see personal data, move money, approve, impersonate"],
            ["**Audit needs**", "Revision history", "Who did what to which record, when, and why"],
          ],
        },
      },
      {
        heading: "The four options",
        body: [
          "**A CMS, traditional or headless.** Built for publishing. Some, such as Directus, describe themselves more broadly: its repository says it can \"Turn your DB into a headless CMS, admin panels, or apps\" over SQL databases, with generated REST and GraphQL APIs. Note its licence: the repository now states the Monospace Sustainable Core License (MSCL) 1.0, source-available, free for organisations under $5M annual revenue and 50 employees ([[" + DIRECTUS + "|Directus on GitHub]], vendor). For content-only decisions, see [[/blogs/how-to-choose-a-cms|how to choose a CMS]] and [[/blogs/custom-cms-vs-wordpress|custom CMS vs WordPress]].",
          "**A framework admin.** Django ships an admin with bulk \"actions\" on selected records and a built-in \"delete selected objects\" action, and its LogEntry model tracks additions, changes and deletions made through the admin ([[" + DJANGO_ACTIONS + "|Django admin actions]]). On Laravel, Filament is MIT-licensed and describes itself as a way to \"Build and ship apps & admin panels fast with Livewire\" ([[" + FILAMENT + "|Filament on GitHub]]); it includes actions to import rows from a CSV and export to CSV or XLSX. Laravel Nova is a paid admin package (prices below).",
          "**An internal-tool builder.** Retool and Appsmith let you assemble screens over databases and APIs with less code. Appsmith's repository describes it as a \"Platform to build admin panels, internal tools, and dashboards\" and is Apache-2.0 licensed ([[" + APPSMITH_REPO + "|Appsmith on GitHub]]). Both offer hosted and self-hosted versions. For the wider low-code question across whole business applications, see [[/blogs/low-code-vs-custom-software|low-code vs custom software]].",
          "**A custom admin.** Screens built in your product's own codebase around specific processes, with permissions and audit designed for them. It costs the most to build and has no licence fee.",
        ],
      },
      {
        heading: "Admin jobs mapped to the four options",
        body: [
          "Find the jobs your team does every day in the left column. Where most of your rows point the same way, that is your default; where one row points elsewhere, that screen may deserve a different tool.",
        ],
        table: {
          headers: ["Admin job", "CMS", "Framework admin", "Internal-tool builder", "Custom admin"],
          rows: [
            ["**Edit marketing pages and media**", "Best fit: built for it, with previews and publishing", "Poor fit: no editorial workflow", "Poor fit", "Rarely worth building"],
            ["**Manage a product catalogue**", "Workable for content fields; weak for stock and pricing rules", "Good fit for structured records", "Good fit if data comes from several systems", "When catalogue rules are complex"],
            ["**Look up a user and reset access**", "Poor fit", "Workable with tight permissions", "Good fit; check credential handling", "Good fit for sensitive or high-volume support"],
            ["**Issue a refund**", "Not suitable", "Risky as a raw field edit; add a custom action", "Workable if it calls your payment API, not the database", "Best fit: limits, reasons and approval built in"],
            ["**Approve a vendor or KYC application**", "Not suitable", "Workable for simple yes or no", "Good fit for a review queue", "Best fit for multi-step or regulated approvals"],
            ["**Bulk-fix records**", "Poor fit", "Good fit with admin actions; mind the delete action", "Good fit with a preview step", "When fixes need validation and rollback"],
            ["**View who changed what**", "Revision history for content", "Django LogEntry covers admin changes; app changes need more", "Audit logs on paid plans", "Designed to your audit requirements"],
            ["**Reporting and exports**", "Poor fit", "Basic exports (Filament CSV or XLSX)", "Good fit for internal dashboards", "When reports are customer-facing or audited"],
            ["**Customers' admins manage their own teams**", "Not suitable", "Not suitable", "Not suitable for most products", "Best fit: belongs inside the product"],
          ],
        },
      },
      {
        heading: "Back-office requirements checklist",
        body: [
          "Score each candidate against these before comparing screenshots. The usability of a back office matters, but these requirements are what decide whether it is safe to use and possible to change later.",
        ],
        checklist: [
          "**Roles and least privilege:** each role sees and changes only what it needs. OWASP's authorisation guidance says to deny by default, validate permissions on every request and enforce checks on the server ([[" + OWASP_AUTHZ + "|OWASP Authorization Cheat Sheet]]). See [[/blogs/saas-roles-and-permissions|SaaS roles and permissions]].",
          "**Audit log:** who did what, to which record, when, with the before and after values, kept where staff cannot edit it.",
          "**Bulk actions:** a preview of affected records, a limit on batch size, and a way to undo or reverse.",
          "**Imports:** validation before anything is written, a clear error report, and a dry-run mode.",
          "**Exports:** limited by role, with personal data masked where the job does not need it.",
          "**Approvals:** maker-checker for money, refunds, account changes and onboarding decisions, so one person cannot request and approve.",
          "**Impersonation:** if staff can view as a user, it is logged, time-limited and visible to the user where appropriate.",
          "**Reporting:** which numbers staff need daily, and whether they come from the live database or a reporting copy.",
          "**Credentials:** what database or API access the tool holds, and whether it uses a restricted account instead of full production credentials.",
          "**Hosting and data location:** hosted or self-hosted, and whether that meets your contracts.",
          "**Cost growth:** licence cost at today's staff numbers and at three times that.",
          "**Exit:** what you keep if you leave the tool: code, queries, screen definitions, data.",
        ],
      },
      {
        heading: "What each option costs to run",
        body: [
          "Prices are vendor list prices shown on each vendor's page on 15 October 2026, in dollars as displayed, excluding tax. They change. No build costs are given, because they depend entirely on scope.",
        ],
        table: {
          headers: ["Option", "Licence or list price", "What makes the cost grow"],
          rows: [
            ["**Django admin**", "Part of Django, open source", "Developer time for custom actions, permissions and views"],
            ["**Laravel Filament**", "MIT licence, free", "Developer time; any paid plugins you choose"],
            ["**Laravel Nova**", "Single project $99 one-time, renews at $79 a year; Unlimited $299 one-time, renews at $249 a year. Includes a year of updates", "Renewals for continued updates; developer time"],
            ["**Retool**", "Free up to 5 users. Team: builders $10 (annual) or $12 (monthly), internal users $5 or $7, per user a month. Business: builders $50 or $65, internal users $15 or $18. Enterprise: custom", "Every additional staff user; Business needed for audit logs on cloud; Enterprise required for SSO and unlimited self-hosted users"],
            ["**Appsmith**", "Free up to 5 users on cloud; Business $15 per user a month, up to 99 users; Enterprise $2,500 a month for 100 users. Community edition free and open source", "Staff headcount; Business adds audit logs and granular roles; SAML or OIDC SSO is Enterprise"],
            ["**Directus**", "MSCL 1.0; free for organisations under $5M revenue and 50 employees", "A commercial licence above those thresholds for advanced or enterprise features"],
            ["**Custom admin**", "No licence", "Design, build, testing and maintenance time for every screen"],
          ],
        },
        callout: {
          type: "note",
          text: "Vendor pricing sources: [[" + NOVA + "|Laravel Nova]], [[" + RETOOL + "|Retool pricing]], [[" + APPSMITH + "|Appsmith pricing]]. Retool's page was not fully consistent about audit logging on self-hosted Business plans, so confirm with the vendor if that matters to you.",
        },
      },
      {
        heading: "Hypothetical example: one marketplace, three back-office tools",
        body: [
          "**Hypothetical example:** a two-sided marketplace with a marketing site, a buyer app and a seller app, run by a small operations team.",
          "The marketing site's pages and blog sit in a headless CMS, because editors need previews and publishing and nothing more. The operations team manages listings, categories and user look-ups in the framework admin that ships with the backend, with roles limiting who can see payout details. Bulk fixes go through admin actions that show the affected records first.",
          "Two jobs did not fit. Seller onboarding needs document checks, two reviewers and a reason for every rejection, so it gets a custom review screen with maker-checker and its own audit trail. Sellers managing their own staff is customer-facing, so it lives inside the seller app with tenant-scoped permissions. An internal-tool builder could have handled the review queue too; the deciding factors would be how many staff use it, where the documents are stored, and whether the builder may hold credentials to that data.",
        ],
      },
      {
        heading: "When each option is the wrong choice",
        body: [
          "**A CMS** is the wrong choice for transactional records. It lacks the permission model, audit trail and validation that money and accounts need, and bending it creates a fragile back office.",
          "**A framework admin** is the wrong choice for people who do not understand the underlying records, for multi-step processes, and for anything customers use. Django's own docs say it is not intended for building your front end around. Be careful with defaults: Django's built-in bulk delete uses QuerySet.delete(), so a model's own delete() method is not called.",
          "**An internal-tool builder** is the wrong choice when per-user costs at your real staff numbers exceed the cost of maintaining code, when the tool would need broad production credentials, or when hosting and data location rules rule out the hosted version and you cannot run the self-hosted one well. Business logic built inside the builder is hard to move.",
          "**A custom admin** is the wrong choice for simple record editing that a framework admin already does, or when nobody will fund maintenance. Every screen is code to test and update.",
          "If you are still deciding whether the product needs application features at all, start with [[/blogs/custom-website-vs-web-application|custom website vs web application]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Framework documentation: [[" + DJANGO_ADMIN + "|Django 6.1: the Django admin site]]; [[" + DJANGO_ACTIONS + "|Django: admin actions]]; [[" + FILAMENT + "|Filament repository (MIT)]]; [[" + FILAMENT_IMPORT + "|Filament import action]]; [[" + FILAMENT_EXPORT + "|Filament export action]].",
          "Vendor pages: [[" + NOVA + "|Laravel Nova]]; [[" + RETOOL + "|Retool pricing]]; [[" + APPSMITH + "|Appsmith pricing]]; [[" + APPSMITH_REPO + "|Appsmith repository]]; [[" + DIRECTUS + "|Directus repository]].",
          "Security guidance: [[" + OWASP_AUTHZ + "|OWASP Authorization Cheat Sheet]].",
          "Accessed 15 October 2026. Prices, licences and plan features are vendor data and change; check the current pages before deciding.",
        ],
      },
      {
        heading: "Next steps",
        body: [
          "List the five things your operations team does most often, and the two that would hurt most if done wrong. Put each in the job matrix, then score your shortlist against the requirements checklist, including licence cost at three times today's headcount. Keep marketing content in a CMS whatever you choose, and design anything customers touch as part of the product. If the back office is part of a larger build, it belongs in the same [[/services/website-development|web application development]] scope as the product, with the admin screens designed for the people who use them every day.",
        ],
        cta: {
          title: "Not sure which admin jobs deserve a custom screen?",
          description:
            "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/website-development|web application development]] and [[/services/ui-ux-design|UI/UX design]]. If useful, list the jobs your operations team does every day and we can talk through which belong in a CMS, which in a framework admin or builder, and which need a custom screen.",
        },
      },
    ],
  },
];
