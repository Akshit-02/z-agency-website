import type { BlogPost } from "./blog-data";

/**
 * Australian trust pair: website security for Australian small businesses and
 * API integration for Australian businesses. Differentiated from the generic
 * owners (website-security-checklist, secure-business-website-development,
 * ecommerce-security, website-api-integration, ecommerce-api-integration,
 * ecommerce-webhooks, ecommerce-erp-integration) and from api-integration-uae
 * by Australian structure: the Essential Eight mapping, the split between
 * guidance and obligations (NDB scheme, Cyber Security Act ransomware payment
 * reporting), Australian reporting routes, and an Australian integration
 * catalogue (Xero, MYOB, Australia Post, Peppol, STP, CDR).
 * Sources checked 2026-10-09: ASD's ACSC (Essential Eight Maturity Model
 * November 2023; Annual Cyber Threat Report 2024–25 business factsheet;
 * ReportCyber; questions to ask managed service providers); Home Affairs
 * ransomware payment reporting factsheet; OAIC (NDB statistics 2025; when to
 * report a data breach; data breach preparation and response Part 4; APP 8
 * guidelines); FIDO Alliance (passkeys); OWASP Top 10:2025; OWASP API Security
 * Top 10 2023; NIST CSF 2.0; RFC 9700; RFC 6585; Stripe docs; Shopify docs;
 * AWS Builders' Library; OpenAPI 3.2.1; php.net and nodejs.org schedules;
 * Google Search Console help; Xero and MYOB developer portals; Australia Post
 * developer centre; ATO (Peppol, STP, GST); Department of Finance RMG 417;
 * cdr.gov.au; IBM (iPaaS); Shopify Payments supported countries; stripe.com/global.
 * No figure here is ZSpace client data.
 */
export const auTrustPosts: BlogPost[] = [
  {
    slug: "website-security-australia",
    title: "Website Security for Australian Small Businesses: A Practical Checklist",
    seoTitle: "Website Security Australia: Small Business Checklist",
    excerpt:
      "A website security checklist for Australian small businesses, mapped to the Essential Eight, with NDB, ransomware reporting and incident response steps.",
    category: "Web Development",
    banner: "auditgrid",
    sceneKind: "security",
    bannerAlt: "A small business website protected by layered controls, including multi-factor sign-in, patching, backups and monitoring, mapped against ASD's Essential Eight strategies",
    date: "2026-10-09",
    readingTime: "23 min read",
    relatedServiceSlugs: ["website-development", "shopify-development"],
    relatedIndustrySlugs: ["professional-services", "healthcare-healthtech", "ecommerce", "retail", "startups"],
    relatedSlugs: ["website-security-checklist", "secure-business-website-development", "ecommerce-security"],
    faqs: [
      {
        q: "Is the Essential Eight mandatory for Australian small businesses?",
        a: "No. The Essential Eight is guidance published by ASD's Australian Cyber Security Centre, not a legal obligation for private businesses. It is still a sensible benchmark, and some customers, insurers or government buyers ask suppliers about it in questionnaires and contracts. Treat it as a structured way to prioritise controls such as patching, multi-factor authentication, restricted admin rights and backups, and record how far you have implemented each strategy.",
      },
      {
        q: "Does the Notifiable Data Breaches scheme apply to my small business?",
        a: "It depends. The OAIC explains that the scheme applies to entities covered by the Privacy Act, which includes businesses with annual turnover of more than AUD 3 million. Small business operators are generally excluded, but there are exceptions, for example businesses that provide a health service and hold health information. Tax file number recipients are covered to the extent TFN information is involved. Check your position with the OAIC or a privacy adviser.",
      },
      {
        q: "How quickly do we have to report a data breach in Australia?",
        a: "Under the NDB scheme, an entity that suspects an eligible data breach must take all reasonable steps to complete its assessment within 30 calendar days, according to OAIC guidance, and the OAIC expects it to be much faster where possible. Once it is reasonable to believe an eligible breach has occurred, the OAIC and affected individuals must be notified as soon as practicable. Separate rules cover ransomware payments.",
      },
      {
        q: "Do we have to report paying a ransom?",
        a: "Since 30 May 2025, businesses carrying on business in Australia with annual turnover over AUD 3 million, and responsible entities for certain critical infrastructure assets, must report a ransomware or cyber extortion payment to ASD within 72 hours of making it, according to Home Affairs. No report is required if a demand was made but nothing was paid. Paying is not generally prohibited, but the government strongly discourages it.",
      },
      {
        q: "Where should an Australian business report a cyber attack?",
        a: "ASD's ACSC directs businesses to report cybercrime and cyber security incidents through cyber.gov.au/report, which includes ReportCyber, and runs the Australian Cyber Security Hotline on 1300 CYBER1 (1300 292 371). Depending on what happened, you may also need to notify the OAIC under the NDB scheme, report a ransomware payment, tell your bank or payment provider, and contact your cyber insurer.",
      },
      {
        q: "Are passkeys better than passwords plus SMS codes?",
        a: "For staff and admin accounts, generally yes. The FIDO Alliance describes passkeys as cryptographic credentials tied to an account on a website or app, and as phishing resistant. Codes sent by SMS or typed from an app can be captured by a convincing fake login page; a passkey will not work on the wrong site. Where a platform does not yet support passkeys, an authenticator app is still far better than a password alone.",
      },
      {
        q: "Which PHP and Node.js versions are safe to run in production?",
        a: "Use versions that still receive security fixes. As of 9 October 2026, php.net lists PHP 8.1 and earlier as end of life and PHP 8.2 security support ending on 31 December 2026, so 8.2 sites need an upgrade plan now. The Node.js project lists v20 as end of life and says production applications should only use Active LTS or Maintenance LTS releases, currently v22 and v24.",
      },
      {
        q: "Does a security checklist guarantee our website will not be hacked?",
        a: "No. A checklist reduces the most common, well-understood risks, which is where most small business incidents start. It does not cover every attack, and it does not replace a risk assessment, security testing for higher-risk sites, or legal advice about your obligations. The aim is to make your business a harder target, notice problems quickly and recover cleanly when something does go wrong.",
      },
    ],
    content: [
      {
        heading: "What does website security mean for an Australian small business?",
        body: [
          "**Website security** for an Australian small business means protecting the site, its admin accounts and the customer data it collects so attackers cannot take it over, steal data or use it to defraud you. In practice that is a short list of habits: multi-factor sign-in, prompt updates, least-privilege access, tested backups, monitoring and a written plan for reporting incidents.",
          "This guide is written for owners and managers of small and medium businesses whose website is a brochure site, a booking or enquiry tool, a customer portal or an online store. It is the Australian companion to our general [[/blogs/website-security-checklist|website security checklist]], which covers the generic depth on HTTPS, sessions, input validation and the OWASP Top 10. Here we focus on what changes in Australia: ASD's Essential Eight as a benchmark, the difference between good practice and legal obligations, and where and when to report an incident.",
          "Facts are sourced and dated; recommendations are labelled as ours; examples are hypothetical. Nothing here is legal advice. For your obligations, check with the OAIC, ASD's Australian Cyber Security Centre (ACSC) or an adviser.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Keep two lists: **recommended controls** (good practice, including the Essential Eight) and **legal obligations** (such as the Notifiable Data Breaches scheme and ransomware payment reporting). Mixing them leads to either over-spending or missed duties.",
          "ASD's Annual Cyber Threat Report 2024–25 business factsheet puts the average self-reported cost of cybercrime per report at AUD 56,600 for small businesses, up 14%.",
          "Turn on multi-factor authentication for every admin, hosting, domain, email and payment account first. Prefer passkeys where the platform supports them.",
          "Patch on a timetable. PHP 8.2 loses security support on 31 December 2026, and Node.js v20 is already end of life (php.net and nodejs.org, checked 9 October 2026).",
          "Backups only count if a restore has been tested, and copies should be out of reach of the admin accounts an attacker might steal.",
          "Know your reporting routes before you need them: cyber.gov.au/report, the OAIC for eligible data breaches, and ASD within 72 hours for ransomware payments if you are in scope.",
          "Ask your web agency, host and IT provider the ACSC's questions about how they secure, monitor and respond. Their access is your risk.",
          "No checklist guarantees security. The goal is fewer easy openings, faster detection and a clean recovery.",
        ],
      },
      {
        heading: "The Australian threat picture, in official numbers",
        body: [
          "**ASD figures.** ASD's ACSC received over 84,700 cybercrime reports in FY2024–25, an average of one every six minutes, according to its Annual Cyber Threat Report 2024–25 factsheet for businesses. The same factsheet gives the average self-reported cost of cybercrime per report by business size, shown below. The most common cybercrimes reported by businesses were email compromise with no financial loss (19%), business email compromise fraud with financial loss (15%) and identity fraud (11%).",
          "Read these numbers carefully. They are averages per report, self-reported by victims who chose to report. They are not the total cost of a typical incident, not a prediction of your loss, and not a measure of how many businesses were attacked. ASD itself notes that much cybercrime goes unreported.",
          "**OAIC figures.** The OAIC received 1,205 data breach notifications in calendar 2025, up 8% from 1,112 in 2024 and the highest since the scheme began in 2018. Malicious or criminal attacks accounted for 716, and the OAIC says ‘cyber hacking remains the primary cause of data breaches reported to the OAIC’. Health service providers notified the most breaches (225, or 19%), followed by finance (157) and the Australian Government (118) ([[https://www.oaic.gov.au/news/media-centre/data-breach-notifications-increase-to-all-time-high-in-2025,-new-ndb-stats-show|OAIC, July 2026]]).",
          "**What this means for a website.** Two patterns stand out for small businesses. First, email and account compromise dominate, so the controls that protect logins (multi-factor authentication, passkeys, removing old accounts) matter more than exotic defences. Second, breaches of personal information are rising, and a website is often where that information is collected: enquiry forms, bookings, accounts and orders.",
        ],
        table: {
          headers: ["Business size", "Average self-reported cost per cybercrime report, FY2024–25", "Change on previous year"],
          rows: [
            ["Small business", "AUD 56,600", "Up 14%"],
            ["Medium business", "AUD 97,200", "Up 55%"],
            ["Large business", "AUD 202,700", "Up 219%"],
            ["All businesses (average)", "AUD 80,850", "Up 50%"],
          ],
        },
        callout: {
          type: "note",
          text: "Source: ASD's ACSC, Annual Cyber Threat Report 2024–25 factsheet for businesses and organisations (October 2025). We could not open the factsheet directly when checking, so these figures come from ASD's published summaries and consistent secondary coverage. Confirm against the original before quoting them in a board paper.",
        },
      },
      {
        heading: "Recommendations versus legal obligations: keep two lists",
        body: [
          "Many security articles blur ‘you should’ and ‘you must’. For a small business that matters: if you treat guidance as law you may spend money you did not need to, and if you treat law as optional you may miss a reporting deadline. We suggest keeping two separate lists, reviewed at least once a year.",
          "**List 1: general recommendations.** These are good practice that applies to almost every business: the controls in this checklist, ASD's Essential Eight, the [[https://top10.owasp.org/2025|OWASP Top 10:2025]] for web applications and the NIST Cybersecurity Framework 2.0. The Essential Eight is guidance, not a legal requirement for private businesses. Customers, insurers and government buyers may still make some of it a contractual requirement, which is a different thing from law.",
          "**List 2: legal obligations.** These depend on your size, sector and what happened. The table below summarises the ones most relevant to a website. It is a starting point for a conversation with an adviser, not a complete legal map.",
        ],
        table: {
          headers: ["Obligation", "Status", "Who it applies to", "What it means for your website"],
          rows: [
            ["Notifiable Data Breaches scheme (Privacy Act)", "Enacted and in force", "Entities covered by the Privacy Act, including businesses with turnover over AUD 3 million; some smaller businesses too, for example health service providers that hold health information (OAIC)", "Assess a suspected eligible breach within 30 days; notify the OAIC and affected individuals as soon as practicable"],
            ["Ransomware and cyber extortion payment reporting (Cyber Security Act 2024)", "Enacted; in force since 30 May 2025", "Businesses carrying on business in Australia with annual turnover over AUD 3 million, and responsible entities for critical infrastructure assets (Home Affairs)", "Report any ransom payment to ASD within 72 hours of paying"],
            ["Cross-border disclosure (APP 8)", "Enacted", "Entities covered by the Privacy Act", "Overseas hosting, backups and service providers that handle personal information need reasonable steps and contracts"],
            ["Security of Critical Infrastructure Act 2018", "Enacted", "Responsible entities for specified critical infrastructure assets", "Rarely relevant to a typical small business website"],
            ["Card payment security (PCI DSS)", "Contractual, via your payment provider", "Businesses that accept card payments, depending on how payment pages are built", "Scope depends on whether you use a hosted payment page; ask your provider"],
            ["Essential Eight", "Guidance", "Recommended for all organisations; not law for private businesses", "A benchmark for prioritising controls"],
          ],
        },
        callout: {
          type: "tip",
          text: "Write down, with a date, which obligations apply to you, which do not, and who confirmed it. If a customer, insurer or tender asks, you have an answer, and you can re-check it when your turnover, sector or systems change.",
        },
      },
      {
        heading: "Checklist part 1: accounts, sign-in and least privilege",
        body: [
          "Many website compromises start with an account: a reused password on the CMS admin, a phished hosting login, a forgotten agency account or a shared email inbox that controls password resets. Protect the accounts that control the website before anything else.",
          "**Multi-factor authentication (MFA).** Turn it on for the CMS or store admin, the hosting control panel, the domain registrar, DNS, the email accounts that receive password resets, code repositories and the payment provider dashboard. These are the accounts that let someone take the whole site, not just one page.",
          "**Passkeys where available.** The FIDO Alliance describes passkeys as ‘a password replacement technology’ and says they are ‘phishing resistant and secure by design’ ([[https://fidoalliance.org/passkeys/|FIDO Alliance]]). Because a passkey is tied to the real site, a convincing fake login page cannot collect it. Use passkeys for admin and staff accounts where your platforms support them; use an authenticator app where they do not. Codes sent by SMS are better than nothing but are the weakest option.",
          "**Least privilege.** Give each person the lowest role that lets them do their job. Content editors do not need to install plugins; a marketing contractor does not need billing access. Keep a small number of named administrators, never a shared ‘admin’ login, and review the list monthly.",
        ],
        checklist: [
          "MFA on CMS, hosting, registrar, DNS, email, repository and payment accounts",
          "Passkeys for admin and staff accounts where supported; authenticator apps otherwise",
          "Named accounts only; no shared admin logins",
          "Separate everyday accounts from administrator accounts for people who need both",
          "Leavers and finished contractors removed on their last day",
          "Customer account logins rate-limited, with breached-password checks if your platform offers them",
          "Domain registrar locked, with renewal and contact details current",
        ],
      },
      {
        heading: "Checklist part 2: updates, runtimes and the software supply chain",
        body: [
          "Unpatched software is the other common opening. A small business website typically depends on a CMS or ecommerce platform, a theme, a dozen or more plugins or packages, a runtime such as PHP or Node.js, and the server or hosting stack underneath. Each one receives security fixes, and each one eventually stops receiving them.",
          "**Patch on a timetable, not when you remember.** ASD's Essential Eight Maturity Model (November 2023) sets, at Maturity Level One, patch timeframes of 48 hours for vulnerabilities in internet-facing services that are critical or have working exploits, and two weeks for other applications such as browsers, office suites and security products. We have taken these from ASD's published summaries; check the current model for the exact wording. Even if you do not aim for a maturity level, they are a useful yardstick: a public-facing website is an internet-facing service.",
          "**Check runtime support dates.** As of 9 October 2026, php.net lists PHP 8.1 and earlier as end of life, PHP 8.2 and 8.3 as security fixes only (until 31 December 2026 and 31 December 2027) and PHP 8.4 and 8.5 as actively supported ([[https://www.php.net/supported-versions.php|PHP]]). The Node.js project lists v20 as end of life, v22 and v24 as LTS, and says ‘Production applications should only use Active LTS or Maintenance LTS releases’ ([[https://nodejs.org/en/about/previous-releases|Node.js]]).",
          "**Manage dependencies deliberately.** Software supply chain failures are now a category of their own in the OWASP Top 10:2025. Keep a list of plugins and packages, remove anything unused, prefer well-maintained components, turn on vulnerability alerts in your repository or hosting, and test updates on a staging copy before production. Our guide to [[/blogs/secure-business-website-development|building a secure business website]] covers how to design this in from the start.",
        ],
        table: {
          headers: ["Runtime", "Status on 9 Oct 2026", "What to do"],
          rows: [
            ["PHP 8.1 and earlier", "End of life", "Upgrade now; no security fixes are issued"],
            ["PHP 8.2", "Security fixes only, until 31 Dec 2026", "Plan and test the upgrade this quarter"],
            ["PHP 8.3", "Security fixes only, until 31 Dec 2027", "Schedule an upgrade within the next year"],
            ["PHP 8.4 and 8.5", "Active support", "Keep on current point releases"],
            ["Node.js v20", "End of life", "Move to an LTS release"],
            ["Node.js v22 and v24", "LTS", "Suitable for production; track the end dates"],
          ],
        },
      },
      {
        heading: "Checklist part 3: TLS, secrets and backups",
        body: [
          "**TLS everywhere.** Serve every page over HTTPS, redirect plain HTTP, renew certificates automatically and check that renewal actually happened. Turn off old protocol versions at the host or CDN where you have the option. The generic [[/blogs/website-security-checklist|website security checklist]] covers headers and sessions in more detail.",
          "**Secrets out of code.** API keys for payment providers, email services, CRMs and accounting systems belong in environment variables or a secrets manager, not in the code repository, the theme files or browser JavaScript. Use a separate key per integration and per environment so one can be revoked without breaking the rest, and rotate high-value keys on a schedule. Integrations multiply secrets quickly; our guide to [[/blogs/api-integration-australia|API integration for Australian businesses]] covers how to scope and rotate them.",
          "**Backups an attacker cannot delete.** Back up both the code and the data (database and uploaded files). Keep at least one copy somewhere the website's own admin and hosting credentials cannot reach, because ransomware operators and intruders look for backups first. Test a restore to a staging environment every quarter: a backup you have never restored is an assumption.",
          "**Where backups live is a privacy question.** If backups or hosting sit overseas and contain personal information, APP 8 may apply. The OAIC's guidelines explain that, before disclosing personal information overseas, an entity must take reasonable steps to ensure the overseas recipient does not breach the Australian Privacy Principles, and that overseas cloud storage can be treated as a ‘use’ rather than a ‘disclosure’ where a binding contract limits how the provider handles the data and the entity keeps effective control ([[https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information|OAIC APP 8 guidelines]]). Ask your host where backups are stored, and take advice if you are unsure.",
        ],
      },
      {
        heading: "Checklist part 4: monitoring and detection",
        body: [
          "Detection is where small businesses are weakest. A site can be quietly serving spam pages or skimming payment details for weeks before anyone notices. You do not need a security operations centre; you need a few alerts that reach a named person.",
          "**What to watch.** Failed and successful admin logins, new admin accounts, changes to plugins or theme files, unexpected outbound traffic, uptime, certificate expiry and changes on payment pages. The OWASP Logging Cheat Sheet recommends logging authentication outcomes, access-control failures and high-risk actions such as privilege changes ([[https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html|OWASP]]).",
          "**Use free signals.** Google Search Console's Security Issues report shows Google's findings when a site ‘was hacked or behaves in ways that could harm visitors’, covering hacked content, malware and unwanted software, and social engineering ([[https://support.google.com/webmasters/answer/9044101|Google]]). Verify your site and make sure alerts go to someone who reads them.",
          "**Keep logs long enough to investigate.** If you have to assess a suspected breach, you will need to know what was accessed and when. Agree retention with your host and store copies of critical logs outside the web server.",
        ],
      },
      {
        heading: "Mapping the checklist to the Essential Eight",
        body: [
          "ASD's Essential Eight is the Australian benchmark most often referenced in supplier questionnaires and cyber insurance forms. Its eight mitigation strategies are: patch applications, patch operating systems, multi-factor authentication, restrict administrative privileges, application control, restrict Microsoft Office macros, user application hardening and regular backups. ASD defines maturity levels one to three, each targeting increasingly capable adversaries.",
          "The Essential Eight was written for an organisation's IT environment as a whole, not for websites specifically, and some strategies (macros, application control) are about staff computers. The table is our own mapping of how each strategy translates to a small business website and the people who run it. It is guidance, not a compliance assessment.",
        ],
        table: {
          headers: ["Essential Eight strategy", "Website and admin equivalent", "Practical control", "Usually owned by"],
          rows: [
            ["Patch applications", "CMS, ecommerce platform, plugins, themes, packages", "Monthly update cycle; critical fixes for internet-facing components as fast as possible", "Web developer or agency"],
            ["Patch operating systems", "Server OS, runtime (PHP, Node.js), database", "Supported versions only; managed hosting or a patch schedule", "Host or developer"],
            ["Multi-factor authentication", "CMS, hosting, registrar, DNS, email, repository, payment dashboards", "MFA everywhere; passkeys for admins where supported", "Business owner, enforced by IT"],
            ["Restrict administrative privileges", "Admin roles in CMS, hosting and cloud accounts", "Few named admins; separate admin accounts; monthly review", "Business owner"],
            ["Application control", "Which plugins, scripts and code may run", "Approved plugin list; no uploads of executable files; third-party script inventory", "Developer"],
            ["Restrict Microsoft Office macros", "Staff devices used to manage the site", "Macros blocked on the computers admins use", "IT provider"],
            ["User application hardening", "Browsers used by admins; security headers on the site", "Hardened, updated browsers; content security policy where practical", "IT provider and developer"],
            ["Regular backups", "Code, database and uploaded files", "Automated, isolated, restore-tested quarterly", "Host or developer"],
          ],
        },
        callout: {
          type: "note",
          text: "If a customer or insurer asks for your Essential Eight maturity, answer for your whole business, not only the website. The website controls above cover part of the picture; staff devices, email and file storage cover the rest.",
        },
      },
      {
        heading: "Incident response: what to do, and who to tell",
        body: [
          "When something goes wrong, the first hours are spent working out what happened. Deadlines and reporting duties should not be something you look up for the first time during an incident. Write a one-page runbook now, and include the reporting routes below.",
          "**Contain and preserve.** Take the affected site or account offline or into maintenance mode, change and revoke the credentials involved, and keep logs and copies of affected files before you clean up. Restoring over the evidence makes it harder to know what data was touched.",
          "**Report the cybercrime.** ASD's ACSC asks businesses to report cybercrime and cyber security incidents through [[https://www.cyber.gov.au/report|cyber.gov.au/report]], which includes ReportCyber, and runs the Australian Cyber Security Hotline on 1300 CYBER1 (1300 292 371), staffed 24 hours a day. If you are unsure which route applies, the hotline can help.",
          "**Assess for an eligible data breach.** Under the Notifiable Data Breaches scheme, a breach is ‘eligible’ when there is unauthorised access to, unauthorised disclosure of, or loss of personal information; this is likely to result in serious harm to one or more individuals; and the entity has not been able to prevent the likely risk of serious harm with remedial action ([[https://www.oaic.gov.au/privacy/notifiable-data-breaches/when-to-report-a-data-breach|OAIC]]). If you suspect one, OAIC guidance says you must take all reasonable steps to complete the assessment within 30 calendar days, and once you have reasonable grounds to believe it is eligible, notify the OAIC and affected individuals as soon as practicable. The OAIC treats 30 days as a maximum, not a target.",
          "**Report any ransomware payment.** Mandatory ransomware and cyber extortion payment reporting has been active since 30 May 2025. It applies to businesses carrying on business in Australia with annual turnover over AUD 3 million (per Home Affairs), and to responsible entities for critical infrastructure assets. The report goes to ASD within 72 hours of making the payment, or of becoming aware it was made on your behalf. No report is needed if a demand was made but nothing was paid. A civil penalty of 60 penalty units may apply for failing to report, and from 1 January 2026 Home Affairs describes a ‘Compliance and Education Approach’ with a more active regulatory focus ([[https://www.homeaffairs.gov.au/cyber-security-subsite/files/factsheet-ransomware-payment-reporting.pdf|Home Affairs factsheet]]).",
          "**A note on the threshold wording.** The Home Affairs factsheet describes the threshold as turnover that ‘exceeds’ AUD 3 million in one passage and as ‘$3 million or more’ in another. If your turnover is close to AUD 3 million, take advice rather than relying on either phrasing. Businesses trading for part of a year pro-rate the threshold, and not-for-profits are not explicitly exempt. Paying a ransom is not generally prohibited, but the government strongly discourages it, and sanctions and anti-money-laundering laws may still apply.",
        ],
        code: {
          label: "Illustrative incident timeline and reporting routes",
          text: "Hour 0      Incident noticed (alert, customer, Google)\n  |         Contain: offline, revoke credentials\n  |         Preserve: logs, copies of affected files\n  v\nHours 1-24  Call host / agency / insurer\n  |         Report cybercrime: cyber.gov.au/report\n  |         Start NDB assessment if personal data\n  v\n<= 72 h     Ransom PAID and turnover over AUD 3m?\n  after       -> report payment to ASD\n  payment\n  v\n<= 30 days  Finish NDB assessment (sooner is expected)\n  |         Eligible breach? Notify OAIC and\n  |         individuals as soon as practicable\n  v\nAfter       Restore from clean backup, fix root cause,\n            update this runbook",
        },
        checklist: [
          "Runbook printed and stored outside the systems it describes",
          "Contacts listed: host, developer or agency, IT provider, insurer, bank, payment provider",
          "Turnover checked against the ransomware reporting threshold, with the date checked",
          "Privacy Act coverage confirmed, so you know whether NDB applies",
          "A named person who decides when to take the site offline",
          "A draft customer notice template, reviewed by an adviser",
        ],
      },
      {
        heading: "Vendor risk: questions for your agency, host and IT provider",
        body: [
          "Most small businesses do not run their own servers. A web agency, a hosting company, a managed service provider (MSP) and a handful of SaaS tools hold admin access to the website. Their security is part of yours, and the shared responsibility split is rarely written down.",
          "ASD's ACSC publishes ‘Questions to ask managed service providers’, built around five questions: are you implementing better practice cyber security, such as the Essential Eight; are you securely administering your systems and services; are you monitoring activity on your systems and services; are you regularly assessing your systems and services; and are you prepared for, and able to respond to, cyber security incidents. We could not load the ACSC page while checking, so the wording comes from ASD's published summaries.",
          "**Our additions for web suppliers.** Ask who holds which admin accounts and whether they use MFA; how quickly they apply critical updates and who pays for that time; where hosting and backups are located; how they will tell you about an incident affecting your site, and how fast; and how access is handed back if you change supplier. If you are choosing a new partner, our guide to [[/blogs/web-development-company-australia|choosing a web development company in Australia]] covers contracts and handover in more depth.",
        ],
        checklist: [
          "A list of every supplier with admin or data access, and what they can reach",
          "MFA confirmed on supplier accounts that touch your site",
          "Patch and update responsibilities written into the support agreement",
          "Hosting and backup locations confirmed, with APP 8 considered for personal information",
          "Incident notification commitment from each supplier, with a contact",
          "Credentials and domain ownership in the business's name, not the agency's",
        ],
      },
      {
        heading: "AI-enabled attacks: what changes and what does not",
        body: [
          "Generative AI makes some attacks cheaper to run: more convincing phishing emails, fake invoices in your suppliers' style, cloned login pages and faster scanning for known vulnerabilities. We have not found an ASD figure that measures how much of the Australian picture is AI-driven, so we are not quoting one.",
          "What does not change is where the attacks land. Business email compromise and account takeover were already among the most reported business cybercrimes in ASD's factsheet, and the defences are the same ones above: phishing-resistant sign-in, a rule that bank detail changes are confirmed by phone on a known number, least privilege and fast patching.",
          "**If your website has an AI chatbot or assistant,** treat it as a new attack surface. Prompt injection is the first item in the OWASP Top 10 for LLM Applications 2025, and an assistant connected to orders, bookings or customer records should have the narrowest permissions possible. Our guides to [[/blogs/ai-security-business-applications|AI security for business applications]] and [[/blogs/ai-governance-australia|AI governance in Australia]] cover the controls, and [[/blogs/ai-automation-australia|AI automation in Australia]] covers where such tools fit.",
        ],
      },
      {
        heading: "A security calendar: monthly, quarterly and annual tasks",
        body: [
          "Security is mostly routine work done on time. The calendar below is our recommendation for a typical small business website; raise the frequency for online stores, portals and sites holding health or financial information. Many tasks overlap with the [[/blogs/website-maintenance-guide|website maintenance guide]], so run them together.",
        ],
        table: {
          headers: ["Task", "Cadence", "Owner", "Essential Eight link"],
          rows: [
            ["Apply CMS, plugin, theme and package updates (critical ones immediately)", "Monthly", "Developer or agency", "Patch applications"],
            ["Review admin accounts, remove leavers, confirm MFA", "Monthly", "Business owner", "Restrict admin privileges; MFA"],
            ["Check Search Console Security Issues, uptime and certificate alerts", "Monthly", "Developer", "None directly (detection)"],
            ["Review login and change alerts", "Monthly, with real-time alerts for critical events", "Developer", "None directly (detection)"],
            ["Test a restore from backup to staging", "Quarterly", "Host or developer", "Regular backups"],
            ["Check PHP or Node.js version against support dates", "Quarterly", "Developer", "Patch operating systems"],
            ["Review plugins and third-party scripts; remove unused ones", "Quarterly", "Developer", "Application control"],
            ["Rotate high-value API keys and secrets", "Quarterly or per policy; immediately if exposed", "Developer", "None directly"],
            ["Re-check legal obligations (turnover, sector, data held)", "Annually, or after a big change", "Business owner with adviser", "Not applicable (legal)"],
            ["Walk through the incident runbook with suppliers", "Annually", "Business owner", "Not applicable (response)"],
            ["Ask suppliers the ACSC questions again", "Annually, and at renewal", "Business owner", "All"],
          ],
        },
      },
      {
        heading: "Hypothetical examples",
        body: [
          "These are illustrative composites, not ZSpace clients or real businesses.",
          "**Hypothetical example 1: an allied health clinic with online bookings.** A clinic with turnover well under AUD 3 million takes bookings through its website and stores intake forms. Because it provides a health service and holds health information, the NDB scheme can apply even though it is a small business, according to the OAIC. It moves intake forms into its practice management system rather than the website database, turns on passkeys for the two staff who administer the site, confirms where the booking tool stores data, and adds the OAIC's eligible-breach test to its runbook.",
          "**Hypothetical example 2: an online retailer over the threshold.** A homewares store on a hosted ecommerce platform has turnover above AUD 3 million. Its main risks are admin account takeover and third-party scripts on checkout. It enforces MFA for every staff and agency account, removes four unused apps, keeps payment on the provider's hosted checkout to limit card-data exposure, and records in its runbook that any ransom payment must be reported to ASD within 72 hours. See [[/blogs/ecommerce-security|ecommerce security]] and [[/blogs/shopify-development-australia|Shopify development in Australia]] for store-specific controls.",
          "**Hypothetical example 3: a trades business with an ageing site.** A plumbing company's WordPress site runs on PHP 8.1, which is end of life. The developer who built it has moved on, and nobody knows the hosting login. The first job is not a redesign: it is recovering ownership of the domain and hosting accounts, enabling MFA, taking a backup, upgrading PHP on a staging copy and removing abandoned plugins. Only then is it worth deciding whether to rebuild.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "**Treating the Essential Eight as law,** or ignoring it because it is not; it is a useful benchmark either way.",
          "**Assuming the NDB scheme never applies to small businesses.** Health service providers and some others are covered regardless of turnover.",
          "**MFA on the website but not on the email account** that receives its password resets.",
          "**Backups stored with the same credentials as the site,** so the intruder deletes both.",
          "**Running an end-of-life PHP or Node.js version** because the site ‘still works’.",
          "**The agency owns the domain and hosting accounts,** so the business cannot act quickly in an incident.",
          "**No runbook,** so reporting deadlines are discovered mid-incident.",
          "**Restoring over the evidence** before working out what personal information was accessed.",
          "**Believing a checklist equals security.** It reduces common risks; it does not guarantee anything.",
        ],
      },
      {
        heading: "Where this fits with your other projects",
        body: [
          "Security decisions sit inside wider website and software work. If you are building or rebuilding, our [[/blogs/digital-product-development-australia|digital product development guide for Australia]] shows where security fits in a product roadmap, and [[/blogs/custom-software-development-australia|custom software development in Australia]] and [[/blogs/saas-development-australia|SaaS development in Australia]] cover the extra controls portals and multi-tenant products need. Every integration adds an attack surface, so read [[/blogs/website-api-integration|website API integration]], [[/blogs/ecommerce-webhooks|ecommerce webhooks]] and [[/blogs/payment-gateway-integration|payment gateway integration]] alongside this guide. If a CRM or AI tool is connected to your site, see [[/blogs/crm-website-integration|CRM website integration]] and [[/blogs/enterprise-ai-integration|enterprise AI integration]].",
          "Security and accessibility reviews are often scheduled together because both touch forms, logins and third-party scripts. Our [[/blogs/website-accessibility-australia|website accessibility guide for Australia]] covers the accessibility side.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**ASD and ACSC:** [[https://www.cyber.gov.au/sites/default/files/2025-10/Annual%20Cyber%20Threat%20Report%202024-25%20factsheet%20for%20businesses%20and%20organisations.pdf|Annual Cyber Threat Report 2024–25 factsheet for businesses and organisations]]; [[https://www.cyber.gov.au/sites/default/files/2023-11/PROTECT%20-%20Essential%20Eight%20Maturity%20Model%20(November%202023).pdf|Essential Eight Maturity Model (November 2023)]]; [[https://www.cyber.gov.au/report|Report a cybercrime or incident]]; [[https://www.cyber.gov.au/business-government/supplier-cyber-risk-management/managed-service-providers/questions-to-ask-managed-service-providers|Questions to ask managed service providers]].",
          "**Legal obligations:** [[https://www.homeaffairs.gov.au/cyber-security-subsite/files/factsheet-ransomware-payment-reporting.pdf|Home Affairs, ransomware payment reporting factsheet]]; [[https://www.oaic.gov.au/privacy/notifiable-data-breaches/when-to-report-a-data-breach|OAIC, when to report a data breach]]; [[https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/preventing-preparing-for-and-responding-to-data-breaches/data-breach-preparation-and-response/part-4-notifiable-data-breach-ndb-scheme|OAIC, Part 4: Notifiable Data Breach scheme]]; [[https://www.oaic.gov.au/news/media-centre/data-breach-notifications-increase-to-all-time-high-in-2025,-new-ndb-stats-show|OAIC, 2025 NDB statistics]]; [[https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information|OAIC, APP 8 guidelines]].",
          "**Technical references:** [[https://fidoalliance.org/passkeys/|FIDO Alliance, passkeys]]; [[https://top10.owasp.org/2025|OWASP Top 10:2025]]; [[https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html|OWASP Logging Cheat Sheet]]; [[https://genai.owasp.org/llm-top-10/|OWASP Top 10 for LLM Applications 2025]]; [[https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework|NIST CSF 2.0]]; [[https://www.php.net/supported-versions.php|PHP supported versions]]; [[https://nodejs.org/en/about/previous-releases|Node.js releases]]; [[https://support.google.com/webmasters/answer/9044101|Google Search Console Security Issues report]].",
          "Checked 9 October 2026. Rules, thresholds and support dates change; re-check before relying on them. Nothing here is ZSpace client data or legal advice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Website security for an Australian small business is not a product you buy once. It is a short set of controls (MFA and passkeys, timely patching, least privilege, isolated and tested backups, monitoring) kept up on a calendar, plus a clear view of which legal duties apply to you and a runbook for when something goes wrong. The Essential Eight gives you a familiar structure for the first part; the OAIC and Home Affairs set the rules for the second.",
          "Start with the accounts that control your site, check your runtime versions against the dates above, and write the one-page runbook this month. Those three steps close more risk than any single tool.",
        ],
        cta: {
          title: "Want a second pair of eyes on your site?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses. We build and maintain [[/services/website-development|websites and web applications]] with security built into the delivery process, and can review an existing site's updates, access and backups. India is 4.5 hours behind AEST (5.5 hours during AEDT), which leaves a workable overlap with the Australian business day.",
        },
      },
    ],
  },
  {
    slug: "api-integration-australia",
    title: "API Integration for Australian Businesses: Connect Your CRM, Ecommerce and Operations",
    seoTitle: "API Integration Australia: CRM, Ecommerce and Xero",
    excerpt:
      "How Australian businesses connect CRM, ecommerce, Xero or MYOB, Australia Post and Peppol: APIs, webhooks, ABN and GST mapping, retries and monitoring.",
    category: "Web Development",
    banner: "apiflow",
    sceneKind: "workflow",
    bannerAlt: "An online store, a CRM, an accounting system, a payment provider and a shipping service connected through APIs and signed webhooks, with a queue, retries and monitoring in the middle",
    date: "2026-10-09",
    readingTime: "23 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["ecommerce", "retail", "professional-services", "logistics-supply-chain", "b2b-enterprise", "saas-technology"],
    relatedSlugs: ["website-api-integration", "ecommerce-erp-integration", "ecommerce-webhooks"],
    faqs: [
      {
        q: "What does API integration mean for a small or medium business?",
        a: "It means connecting your software, such as the website or store, CRM, accounting system, payment provider and courier, through their APIs so records and events move between them automatically. A paid order can become an invoice in Xero or MYOB, a shipment with Australia Post and a customer update in the CRM, without anyone copying details between screens. Done well, it removes re-keying errors and makes the numbers agree.",
      },
      {
        q: "Can we connect our website or store to Xero or MYOB?",
        a: "Usually, yes. Xero's developer platform offers an accounting API and an Australian payroll API using OAuth 2.0, and MYOB's developer portal offers the MYOB Business API along with APIs for products such as EXO and Acumatica. Many ecommerce platforms also have ready-made connectors. The real work is deciding what syncs (invoices, payments, contacts, stock), how GST codes map and which system is the source of truth.",
      },
      {
        q: "Do we need Peppol eInvoicing?",
        a: "Business-to-business eInvoicing in Australia is voluntary; we found no mandate. It can still be worth adopting, especially if you supply the Commonwealth: under the Department of Finance's supplier pay policy, eInvoices are to be paid within five calendar days where both parties use Peppol, compared with 20 for other invoices. You connect through an accredited access point provider, often built into accounting software, and are identified by your ABN.",
      },
      {
        q: "Should we use Zapier-style tools, an iPaaS or a custom integration?",
        a: "Use a no-code or iPaaS tool when connectors exist for your systems, the logic is simple mapping and volumes are modest. Build a custom integration service when you need complex rules, high volumes, strict control over where personal data is processed, or reliable replay and reconciliation. A single direct link between two systems is fine for one simple job, but several of them become hard to maintain.",
      },
      {
        q: "How do we stop duplicate orders or invoices when an integration retries?",
        a: "Make every write idempotent. Send an idempotency key with create requests where the provider supports it, as Stripe does, so a retried request returns the original result instead of creating a second record. Store the IDs of webhook events you have processed and skip repeats, because providers such as Stripe say the same event can arrive more than once. Reconcile daily to catch anything that still slips through.",
      },
      {
        q: "What should happen when an integration fails?",
        a: "Temporary failures such as timeouts, most server errors and rate limits should be retried with exponential backoff and jitter, honouring any Retry-After header. Permanent failures such as a missing product mapping or an invalid ABN should go to a dead-letter queue with the error and payload, alert a named person and be replayable once fixed. A daily reconciliation catches failures nobody was alerted about.",
      },
      {
        q: "Is it a privacy problem if our integration platform is hosted overseas?",
        a: "It can be. If you are covered by the Privacy Act and an overseas integration platform handles personal information, APP 8 may apply. The OAIC's guidelines require reasonable steps to ensure an overseas recipient does not breach the Australian Privacy Principles, with some situations treated as a use rather than a disclosure where contracts limit handling and you keep effective control. Check the platform's processing locations and take privacy advice.",
      },
      {
        q: "Can we pull customers' banking data through the Consumer Data Right?",
        a: "Not simply by calling an API. Access to consumer data under the Consumer Data Right is regulated by the ACCC and OAIC and is limited to accredited data recipients and other arrangements permitted by the rules. The regime covers banking and energy, with non-bank lending being phased in during 2026. If your product depends on CDR data, check cdr.gov.au and take advice before designing it.",
      },
    ],
    content: [
      {
        heading: "What is API integration, and what should Australian businesses connect first?",
        body: [
          "**API integration** connects your business systems through their application programming interfaces so data and events move between them automatically. For most Australian businesses the first connections worth building are the ones that carry money: online orders into Xero or MYOB with the right GST treatment, payments reconciled against invoices, and shipments created with the courier. CRM and support links usually come next.",
          "This guide is for owners, operations leads and product managers who are tired of copying the same customer, order and invoice details between systems. It is the Australian companion to our general guides on [[/blogs/website-api-integration|website API integration]] and [[/blogs/ecommerce-api-integration|ecommerce API integration]], which cover the generic depth. Here we organise the work around business flows, cover Australian data (ABN, GST, AUD and addresses), list the Australian systems and schemes you are likely to meet, and give a decision framework and implementation checklist.",
          "Facts are sourced and dated; recommendations are labelled as ours; examples are hypothetical. Nothing here is tax, legal or financial advice. For GST and payroll questions, check with the ATO or your accountant.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Design around business flows (lead to customer, order to cash, invoice to payment, hire to pay), not around individual apps.",
          "Decide which system owns each record and field before writing any code. Most integration bugs are ownership disagreements.",
          "Map Australian data explicitly: ABN, GST codes and inclusive or exclusive pricing, AUD amounts in cents, state codes and four-digit postcodes stored as text.",
          "Use OAuth 2.0 where offered. RFC 9700 (January 2025) says public clients must use PKCE and should not use the implicit grant.",
          "Verify webhook signatures against the raw body, acknowledge fast, process on a queue and expect duplicates.",
          "Retry only temporary failures, with exponential backoff and jitter; honour 429 and Retry-After; make every write idempotent.",
          "Failed messages go to a dead-letter queue with a replay button, and a daily reconciliation catches what alerts miss.",
          "Peppol eInvoicing is voluntary for B2B, Australia Post shipping APIs need a contract, and CDR data needs accreditation. Check each scheme's rules before you design around it.",
        ],
      },
      {
        heading: "Start from business flows, not from systems",
        body: [
          "A common way to scope integration is to list the apps and draw lines between them. That produces a tangle of one-off connections nobody can explain. We find it more useful to start from the four or five flows that run the business, decide what each flow must achieve, and only then choose which APIs and tools carry it.",
          "**Our framework: the flow card.** For each flow, write one card with five lines: the trigger (what starts it), the outcome (what must be true at the end, and how fast), the source of truth for each record, the systems touched, and the cost of failure (what goes wrong if a message is lost). The cost of failure tells you how much reliability engineering the flow deserves. The table below shows typical Australian flows; adapt it to your business.",
        ],
        table: {
          headers: ["Flow", "Trigger", "Systems usually touched", "Source of truth", "Cost if a message is lost"],
          rows: [
            ["Lead to customer", "Website form or booking", "Website, CRM, email, calendar", "CRM for contacts and deals", "Lost enquiry; slow response"],
            ["Order to cash", "Paid online order", "Store, payment provider, Xero or MYOB, Australia Post or courier", "Store for orders; accounting for invoices and GST", "Unshipped order; books that do not reconcile"],
            ["Invoice to payment (B2B)", "Invoice approved", "Accounting system, Peppol access point, bank feed", "Accounting system", "Late payment; duplicate invoice"],
            ["Hire to pay", "New starter or pay run", "HR system, payroll, ATO via Single Touch Payroll", "Payroll software", "Payroll and reporting errors"],
            ["Issue to resolution", "Support ticket or return", "Helpdesk, store, CRM, courier", "Helpdesk for the case; store for refunds", "Unhappy customer; refund missed"],
          ],
        },
        callout: {
          type: "tip",
          text: "Rank flows by cost of failure, not by how annoying the manual work is. Order to cash usually comes first because errors there touch customers, cash and GST reporting at once.",
        },
      },
      {
        heading: "The building blocks: REST APIs, webhooks and files",
        body: [
          "**REST APIs** are how your integration reads and writes records on demand: create an invoice, fetch an order, update a contact. Almost every system an Australian business uses has one. Some platforms, Shopify among them, also offer GraphQL; our [[/blogs/rest-api-vs-graphql|REST API vs GraphQL guide]] explains the difference.",
          "**Webhooks** turn the direction around: the other system calls your endpoint when something happens, such as an order being paid. They are faster and cheaper than polling every few minutes, but must be verified and processed carefully, as covered below.",
          "**Files** still matter. Some ERPs, banks and warehouses exchange CSV or XML files on a schedule. That is acceptable for nightly batches if each file is validated, logged and reconciled.",
          "**Describe your own APIs.** If you build an API for partners or for your own apps, describe it with the OpenAPI Specification, which ‘defines a standard, programming language-agnostic interface description for HTTP APIs’. The latest version is 3.2.1, published on 10 September 2026 ([[https://spec.openapis.org/oas/latest.html|OpenAPI Initiative]]). A written contract makes testing, documentation and handover far easier.",
        ],
      },
      {
        heading: "Authentication: OAuth 2.0, tokens and who authorised the connection",
        body: [
          "**OAuth 2.0** is the standard for letting one application act on another's data with a user's consent, using short-lived access tokens and defined scopes. Xero's developer platform uses OAuth 2.0 for its accounting and Australian payroll APIs ([[https://developer.xero.com/documentation/|Xero Developer]]). RFC 9700, the IETF's Best Current Practice for OAuth 2.0 Security published in January 2025, says ‘Public clients MUST use PKCE’ and that clients ‘SHOULD NOT use the implicit grant’ because it is vulnerable to access token leakage and replay ([[https://datatracker.ietf.org/doc/rfc9700/|RFC 9700]]).",
          "**API keys** are simpler: a long secret that identifies your integration. They often carry broad access and do not expire, so keep them on the server, never in browser code, store them in a secrets manager, use one per integration and environment, and rotate them.",
          "**Our recommendation: record who authorised each connection.** With OAuth connections to accounting and CRM tools, the connection is often granted by a particular staff member's login. Record whose account it is, which scopes were granted and where refresh tokens are stored, and check what happens to the connection when that person leaves. Request the narrowest scopes that do the job. Our [[/blogs/website-security-australia|website security guide for Australian businesses]] covers MFA and least privilege for the accounts behind these connections.",
        ],
      },
      {
        heading: "Webhooks: verify, acknowledge, then process",
        body: [
          "A webhook endpoint is a public URL that triggers business actions, so treat every request as untrusted until verified. Stripe warns that ‘Without verification, an attacker could send fake webhook events to your endpoint to trigger actions like fulfilling orders’ ([[https://docs.stripe.com/webhooks/signature|Stripe]]).",
          "**Verify against the raw body.** Shopify includes a base64-encoded HMAC signature in the X-Shopify-Hmac-SHA256 header, computed over the raw request body with your app's client secret, and notes that ‘HMAC verification requires the raw request body’ ([[https://shopify.dev/docs/apps/build/webhooks/subscribe/https|Shopify]]). Stripe signs events in a Stripe-Signature header and requires the exact body it sent; body-parsing middleware that reformats JSON breaks verification.",
          "**Acknowledge fast, process later.** Stripe recommends returning a 2xx status before any complex logic. Store the event, put it on a queue, return success, and let a worker do the slow work of creating invoices or shipments. Our [[/blogs/ecommerce-queue-architecture|ecommerce queue architecture guide]] covers the pattern.",
          "**Expect duplicates and disorder.** Stripe says endpoints ‘might occasionally receive the same event more than once’ and retries undelivered events for up to three days. Keep a table of processed event IDs, and fetch the current state from the API when the order of events matters. The generic [[/blogs/ecommerce-webhooks|ecommerce webhooks guide]] goes deeper.",
        ],
      },
      {
        heading: "Australian data mapping: ABN, GST, AUD and addresses",
        body: [
          "Data mapping decides which field in one system matches which field in another, which system owns it, and how values are transformed in between. Australian businesses meet a few recurring problems. The table is our general guidance, not a description of any particular product's behaviour, and tax treatment should be confirmed with your accountant.",
          "**GST basics.** GST is 10% on most taxable supplies, according to the [[https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst|ATO]]. The integration problems are rarely the rate itself; they are tax codes named differently in each system, prices stored GST-inclusive in one and exclusive in the other, GST-free items mis-coded, and rounding done per line in one system and per invoice in another.",
        ],
        table: {
          headers: ["Data", "Typical problem", "Our recommendation"],
          rows: [
            ["ABN", "Stored as a number (losing formatting or leading digits), with spaces, or missing on business customers", "Store as text without spaces; validate format on entry; make it required for B2B accounts and Peppol"],
            ["GST codes", "Store and accounting system use different code names; GST-free products mis-mapped", "Maintain an explicit tax-code mapping table, owned by finance, tested with GST-free and taxable lines"],
            ["Inclusive vs exclusive prices", "Store sends GST-inclusive totals; accounting expects exclusive line amounts", "Agree which system calculates GST and send amounts in that form; reconcile totals to the cent"],
            ["AUD amounts", "Floating-point rounding errors; currency not recorded", "Store integer cents with an AUD currency code on every amount"],
            ["States and territories", "Free text such as ‘Vic’, ‘Victoria’ and ‘VIC’ in the same field", "Store the standard abbreviation (NSW, VIC, QLD, WA, SA, TAS, ACT, NT) in its own field"],
            ["Postcodes", "Stored as numbers, so Northern Territory postcodes starting with 0 lose a digit", "Store as four-character text; validate against the suburb and state where your courier API allows"],
            ["Addresses", "Suburb, unit and street combined in one line; PO boxes sent to couriers that cannot deliver to them", "Separate fields for unit, street, suburb, state and postcode; flag PO boxes before shipment creation"],
            ["Dates and times", "Several time zones and different daylight saving rules between states", "Exchange ISO 8601 timestamps in UTC; convert to local time only for display"],
            ["Customer identity", "Same customer created in store, CRM and accounting with different spellings", "Match on email, phone or ABN, not on name; choose one system as the customer master"],
          ],
        },
        callout: {
          type: "note",
          text: "Write the mapping down as a field ownership table: for each field, which system owns it, which systems receive it, and what transformation applies. It becomes the specification, the test plan and the handover document in one.",
        },
      },
      {
        heading: "Accounting and ERP: connecting Xero and MYOB",
        body: [
          "For many Australian small and medium businesses, the accounting system is the centre of gravity: it holds invoices, payments, GST and often stock. **Xero**'s developer platform documents an accounting API and an Australian payroll API, using OAuth 2.0 ([[https://developer.xero.com/documentation/|Xero Developer]]). **MYOB**'s developer portal introduces the MYOB Business API and also lists APIs for EXO, Acumatica and transactions, with AccountRight mentioned ([[https://developer.myob.com/|MYOB Developer]]). Check which MYOB product you actually run before scoping, because the APIs differ.",
          "**Decide the posting model.** Do you create one invoice per online order, or a daily summary invoice per sales channel? Per-order invoices give traceability; summaries reduce volume and rate-limit pressure. Decide with your accountant, because it changes how GST reports and reconciliations look.",
          "**Payments and fees.** Record the payment against the invoice, and record payment provider fees separately so the bank deposit reconciles. Refunds and partial refunds need their own credit note logic; they are where most order-to-cash integrations break.",
          "**Stock.** If stock lives in the accounting system or an ERP, decide how often it syncs to the store and what happens when an item sells out between syncs. Our [[/blogs/ecommerce-erp-integration|ecommerce ERP integration guide]] covers stock, pricing and order patterns in depth.",
        ],
      },
      {
        heading: "CRM, ecommerce, billing and ticketing",
        body: [
          "**CRM.** Website forms, bookings and chat should create or update CRM contacts with the source and consent recorded, and deals should move when orders or quotes change. Keep forms accessible as well as connected; our [[/blogs/website-accessibility-australia|website accessibility guide for Australia]] covers forms. For the generic depth, see [[/blogs/crm-website-integration|CRM website integration]].",
          "**Ecommerce.** Shopify Payments lists Australia among its supported countries ([[https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries|Shopify]]), and Shopify's webhooks and APIs cover orders, customers, products and fulfilment. For Australian store builds and app choices, see [[/blogs/shopify-development-australia|Shopify development in Australia]] and the [[/blogs/shopify-business-systems-integration-guide|Shopify business systems integration guide]].",
          "**Billing and payments.** Stripe lists Australia as a supported country ([[https://stripe.com/global|Stripe]]). Its idempotency keys let you retry ‘without accidentally performing the same operation twice’ ([[https://docs.stripe.com/api/idempotent_requests|Stripe]]), which is exactly what billing integrations need. See [[/blogs/payment-gateway-integration|payment gateway integration]] for provider choice and checkout patterns.",
          "**Ticketing.** Support tools should be able to look up orders, shipments and refunds without agents switching screens, and should write back outcomes such as a replacement shipment. Start read-only; add write actions once the read side is trusted.",
        ],
        table: {
          headers: ["Connection", "What usually syncs", "Usual trigger", "Watch out for"],
          rows: [
            ["Website to CRM", "Contacts, enquiry details, source, consent", "Form submission webhook", "Duplicate contacts; consent not carried across"],
            ["Store to accounting", "Invoices or summaries, payments, fees, refunds", "Order paid or refunded", "GST mapping; partial refunds; fee reconciliation"],
            ["Store to courier", "Shipments, labels, tracking numbers", "Order ready to fulfil", "Address validation; PO boxes; contract-only APIs"],
            ["Billing to accounting", "Subscription invoices, payments, failed payments", "Billing provider events", "Duplicate invoices on retry; proration"],
            ["Helpdesk to store and CRM", "Order lookups, refunds, case outcomes", "Agent action", "Over-broad write access for support tools"],
          ],
        },
      },
      {
        heading: "Australian integration catalogue",
        body: [
          "The table lists Australian systems and schemes businesses commonly integrate with, and what we could confirm about them. Items marked ‘per official pages’ were checked against the provider's or regulator's site; items marked ‘per summaries’ come from official URLs we could not open in full, so verify them before relying on them. Inclusion is not an endorsement and implies no relationship with ZSpace Labs.",
        ],
        table: {
          headers: ["System or scheme", "What it does", "What we confirmed", "Integration notes"],
          rows: [
            ["Xero", "Cloud accounting and payroll", "Accounting API and Australian payroll API; OAuth 2.0 (per official pages)", "Plan GST code mapping and posting model; check published API limits"],
            ["MYOB", "Accounting and ERP products", "MYOB Business API, plus EXO, Acumatica and Transactions APIs (per official pages)", "Confirm which MYOB product and edition you run"],
            ["Australia Post", "Postage, shipping and tracking", "Postage Assessment Calculator for retail rates; Shipping and Tracking APIs require an eParcel or StarTrack contract; Delivery Choices API (per summaries)", "Budget time for contract setup before development"],
            ["Peppol eInvoicing", "Structured invoices exchanged between accounting systems", "The ATO is the Australian Peppol Authority; businesses are usually identified by ABN (scheme 0151); you connect through an accredited access point provider; the ATO does not receive copies of eInvoices; B2B use is voluntary (per summaries)", "Often available inside accounting software; check before building"],
            ["Commonwealth supplier payments", "Payment terms for government suppliers", "Department of Finance policy (RMG 417): eInvoices paid within 5 calendar days where both parties use Peppol, other invoices within 20; an updated policy takes effect on 1 January 2027 (per summaries)", "Relevant if you invoice Commonwealth entities; check the current terms"],
            ["Single Touch Payroll (STP)", "Payroll reporting to the ATO", "Payroll software sends tax and super information to the ATO on or before each pay day; mandatory since 2018 (20+ employees) and 2019 (19 or fewer); Payday Super reporting from 1 July 2026 (per summaries)", "Report through STP-enabled payroll software; integrate HR data into payroll, not directly with the ATO"],
            ["Consumer Data Right (CDR)", "Consumer-directed sharing of banking, energy and lending data", "Banking since 2020, energy since 2022; non-bank lending phased in from July and November 2026; regulated by the ACCC and OAIC (per secondary summaries)", "Receiving CDR data requires accreditation or a permitted arrangement; check cdr.gov.au"],
            ["Stripe", "Online payments and billing", "Australia listed as supported (per official pages)", "Idempotency keys and signed webhooks are documented"],
            ["Shopify Payments", "Payments for Shopify stores", "Australia on the supported-countries list (per official pages)", "Order and refund webhooks drive accounting and courier flows"],
          ],
        },
        callout: {
          type: "tip",
          text: "Before building any integration with a government scheme, check whether your existing accounting or payroll software already does it. For STP and Peppol in particular, the usual route is a capable product plus clean data, not a custom connection.",
        },
      },
      {
        heading: "Designing for failure: a reliability contract for every integration",
        body: [
          "Networks drop, providers throttle and timeouts leave you unsure whether a request worked. We recommend agreeing a short reliability contract for each integration before building it: what counts as a temporary failure, how it is retried, what makes it permanent, and where permanent failures go.",
          "**Backoff with jitter.** Retry temporary failures with increasing delays plus randomness. The AWS Builders' Library explains that ‘Jitter adds some amount of randomness to the backoff to spread the retries around in time’, and warns that retries stacked independently across several layers can multiply load on a database dramatically ([[https://builder.aws.com/content/3EumjoZascWd1oZiEgL8ORlv3qE/timeouts-retries-and-backoff-with-jitter|AWS Builders' Library]]). Retry in one layer, not every layer.",
          "**Rate limits.** HTTP 429 means ‘the user has sent too many requests in a given amount of time’, and the response ‘MAY include a Retry-After header indicating how long to wait’ ([[https://www.rfc-editor.org/rfc/rfc6585#section-4|RFC 6585]]). Read each provider's published limits, queue work instead of sending it in bursts, and use bulk endpoints for backfills.",
          "**Idempotency.** Stripe saves the result of the first request for an idempotency key and returns the same result for repeats, and suggests V4 UUIDs ([[https://docs.stripe.com/api/idempotent_requests|Stripe]]). An IETF draft once proposed a standard Idempotency-Key header, but it has expired and is not an RFC, so support varies by provider. Where a provider has no idempotency feature, look up by your own reference (such as the order number) before creating.",
        ],
        table: {
          headers: ["Failure", "Example", "Treat as", "Action"],
          rows: [
            ["Timeout or connection error", "Accounting API does not respond", "Temporary, outcome unknown", "Retry with backoff and jitter, using the same idempotency key"],
            ["Server error (5xx)", "Provider outage", "Temporary", "Retry with backoff; alert if it persists"],
            ["Rate limited (429)", "Bulk sync during a sale", "Temporary", "Wait for Retry-After; slow the queue"],
            ["Validation error (4xx)", "Missing ABN, unknown tax code, closed period", "Permanent until data is fixed", "Dead-letter queue; alert the data owner"],
            ["Authentication error (401 or 403)", "Expired or revoked OAuth connection", "Permanent until reconnected", "Pause the flow; alert the connection owner"],
            ["Duplicate webhook", "Same order-paid event delivered twice", "Expected", "Skip using the processed event ID table"],
          ],
        },
      },
      {
        heading: "Error recovery and monitoring",
        body: [
          "**Dead-letter queues.** After the last retry, move the failed message, its error and its attempt history to a dead-letter queue, and notify a named person. In Australian flows the common causes are a missing GST mapping, an invalid or missing ABN, an address the courier rejects, a closed accounting period and an expired OAuth connection.",
          "**Replay.** Once the cause is fixed, replay the message through the same idempotent path, so replaying twice does no harm. A simple admin screen listing failed messages with a ‘retry’ button saves a surprising amount of developer time.",
          "**Reconciliation.** Run a scheduled comparison between systems: for example, yesterday's paid orders in the store against invoices in Xero or MYOB, or shipments created against orders marked fulfilled. Reconciliation finds the failures that never raised an error.",
          "**Monitoring.** Track error rate per flow, queue depth, dead-letter count, time from event to completion and the time since the last successful sync. A sync that quietly stopped on Friday is worse than one that failed loudly. Our [[/blogs/website-maintenance-guide|website maintenance guide]] covers the routine checks that sit alongside this.",
        ],
        code: {
          label: "Order-to-cash flow with recovery (illustrative)",
          text: "[Store: order paid] --signed webhook--> [Receiver]\n                      verify HMAC, save event ID, 200 OK\n                               |\n                               v\n                            [Queue]\n                               |\n                       [Worker: map ABN, GST,\n                        AUD cents, address]\n                      /        |          \\\n             [Xero/MYOB]  [Australia Post] [CRM]\n               invoice     shipment       contact\n                      \\        |          /\n             temporary error: backoff + jitter\n             permanent error: dead-letter queue\n                               |\n                [Alert owner] -> fix -> replay\n\nNightly: reconcile store orders vs invoices",
        },
      },
      {
        heading: "Security and privacy for integrations",
        body: [
          "Every integration is an attack surface: a public webhook URL, a stored token, a service account with write access to your books. The [[https://api-security.owasp.org/editions/2023/en/0x11-t10|OWASP API Security Top 10 (2023)]] is a good reference. Four items matter most for typical business integrations: **API1 Broken Object Level Authorization** (can a caller fetch someone else's order?), **API2 Broken Authentication** (leaked or never-expiring credentials), **API9 Improper Inventory Management** (old endpoints and forgotten integrations still live) and **API10 Unsafe Consumption of APIs** (trusting a partner's data without validating it).",
          "**Privacy.** Integrations copy personal information between systems, and some integration platforms process it overseas. If you are covered by the Privacy Act, APP 8 may apply to overseas recipients; the OAIC's guidelines require reasonable steps to ensure the recipient does not breach the APPs, and treat some cloud arrangements as a ‘use’ rather than a ‘disclosure’ where contracts limit handling and you keep effective control ([[https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information|OAIC APP 8 guidelines]]). Copy only the fields each system needs.",
          "**Incidents.** If an integration is compromised and personal information is exposed, the Notifiable Data Breaches scheme may apply. Our [[/blogs/website-security-australia|website security guide for Australian small businesses]] covers reporting routes and deadlines, and the generic [[/blogs/website-security-checklist|website security checklist]] covers API keys and secrets.",
        ],
      },
      {
        heading: "Point-to-point, iPaaS or a custom integration service? A decision framework",
        body: [
          "There are three broad ways to build integrations. **Point-to-point** links connect two systems directly, often with a built-in connector or a small script. An **integration platform (iPaaS)** is, in IBM's description, ‘a suite of self-service, cloud-based tools and solutions used to integrate applications, systems and data sources’, using ‘pre-built connectors, maps, and transformation components’ ([[https://www.ibm.com/think/topics/ipaas|IBM]]). A **custom integration service** is your own small application, with a queue, workers and an admin screen, that owns the flows.",
          "**How to use the table.** Work through the signals for your most important flow and note which column each answer points to. If most answers point one way, start there. If they are split, start with the simpler option for low-risk flows and the more controlled option for the flow with the highest cost of failure. Mixing approaches is normal.",
        ],
        table: {
          headers: ["Signal", "Points to point-to-point", "Points to iPaaS", "Points to a custom integration service"],
          rows: [
            ["How many systems share this flow?", "Two", "Three to six, with standard connectors", "Several, including legacy or bespoke systems"],
            ["How complex are the rules?", "Copy fields across", "Mapping and simple conditions", "Multi-step logic, GST edge cases, partial refunds, approvals"],
            ["Volume and speed", "Low; minutes are fine", "Low to moderate", "High volume, sale-day spikes or near real time"],
            ["Cost of a lost message", "Low", "Moderate", "High: money, stock or compliance"],
            ["Need for replay and reconciliation", "Manual is acceptable", "Platform features suffice", "Must be built in and auditable"],
            ["Control over where personal data is processed", "Depends on both vendors", "Depends on the platform's hosting", "You choose hosting and logging"],
            ["Who will maintain it?", "Whoever set it up", "A trained administrator", "A development team or partner"],
            ["Main long-term risk", "A tangle of undocumented links", "Per-task pricing growth; connector limits", "Build and maintenance effort"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Our rule of thumb: if you cannot answer ‘where do failed messages go, and who replays them?’ for a flow, it is not finished, whichever option you chose. If you are weighing a bespoke build more broadly, see [[/blogs/custom-software-development-australia|custom software development in Australia]].",
        },
      },
      {
        heading: "Implementation checklist",
        body: [
          "Our recommended sequence for each new integration, grouped by stage. Tick every item before go-live; revisit the last group each quarter.",
        ],
        checklist: [
          "**Before building:** write the flow card (trigger, outcome, source of truth, systems, cost of failure)",
          "**Before building:** complete the field ownership table, including ABN, GST codes, AUD amounts and address fields, signed off by finance",
          "**Before building:** confirm API access, authentication method, scopes, sandbox, webhooks and published rate limits for each system",
          "**Before building:** sort out contracts and accounts needed for API access, such as an Australia Post eParcel or StarTrack contract",
          "**Before building:** check where any integration platform processes personal information, and whether APP 8 applies",
          "**Build:** verify webhook signatures on the raw body; store processed event IDs",
          "**Build:** idempotency keys or reference look-ups on every create",
          "**Build:** retries with backoff and jitter in one layer only; honour Retry-After",
          "**Build:** dead-letter queue, alerts to a named person and a replay function",
          "**Build:** secrets in a secrets manager; separate credentials per environment",
          "**Test:** duplicates, timeouts, 429s, expired tokens, GST-free lines, partial refunds, PO boxes and NT postcodes",
          "**Go live:** start with one channel or a share of orders; reconcile daily for the first weeks",
          "**Hand over:** document flows, credentials, owners and runbook; add the integration to a register",
          "**Run:** review errors, API deprecation notices and credential rotation quarterly",
        ],
      },
      {
        heading: "Hypothetical examples",
        body: [
          "These are illustrative composites, not ZSpace clients or real businesses.",
          "**Hypothetical example 1: a Shopify retailer and Xero.** A homewares retailer re-keys about a day's orders each morning into Xero and books Australia Post shipments by hand. Its flow card puts order to cash first. It chooses per-day summary invoices per channel after talking to its accountant, maps GST-free and taxable products explicitly, sends shipments through its Australia Post contract, and adds a nightly reconciliation of paid orders against Xero. Because volumes are moderate and the rules simple, it uses a connector for invoices and a small custom service only for shipments, where address validation needed custom logic.",
          "**Hypothetical example 2: a B2B wholesaler supplying government.** A wholesaler on MYOB invoices several Commonwealth agencies. It checks whether its MYOB product supports Peppol through an access point before considering any build, cleans ABNs on customer records, and moves those customers to eInvoicing. Its custom work is limited to pushing approved orders from its trade portal into MYOB with idempotent creates and a dead-letter queue for validation failures.",
          "**Hypothetical example 3: a service business and its CRM.** A home-services company loses enquiries between its website, a booking tool and a CRM. It routes all three into the CRM through signed webhooks, matches customers on phone and email rather than name, and alerts the office manager when the dead-letter queue is not empty. No iPaaS is needed; one well-documented point-to-point link per source is enough at this size.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "**Starting with tools instead of flows,** so nobody can say what the integration must achieve.",
          "**No source of truth per field,** so two systems overwrite each other.",
          "**Storing ABNs and postcodes as numbers,** losing leading zeros and formatting.",
          "**Leaving GST mapping to the developer** instead of finance.",
          "**Skipping webhook signature verification** because the URL is ‘secret’.",
          "**Retrying everything, at every layer,** including validation errors that will never succeed.",
          "**No idempotency,** so a timeout produces duplicate invoices or charges.",
          "**OAuth connections tied to a staff member who leaves,** and nobody notices until syncs stop.",
          "**Building a government-scheme connection your software already provides,** such as STP or Peppol.",
          "**No reconciliation,** so silent failures are found at BAS time.",
        ],
      },
      {
        heading: "Where integration fits in a wider roadmap",
        body: [
          "Integration is often the first sign that a business has outgrown its tools. If one system has no usable API, every link around it will be fragile, and replacing or wrapping that system may be the better project. Our [[/blogs/digital-product-development-australia|digital product development guide for Australia]] covers how to sequence that work, and [[/blogs/saas-development-australia|SaaS development in Australia]] covers integration as a product feature if you are building software for others.",
          "Once data flows cleanly, automation and AI become far more practical: an assistant can only answer questions about orders it can see. See [[/blogs/ai-automation-australia|AI automation in Australia]] for where to start, [[/blogs/enterprise-ai-integration|enterprise AI integration]] for connecting AI to business systems, and [[/blogs/ai-governance-australia|AI governance in Australia]] for the controls. If you are choosing a partner for the work, [[/blogs/web-development-company-australia|choosing a web development company in Australia]] lists the questions to ask.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**Australian systems and schemes:** [[https://developer.xero.com/documentation/|Xero Developer documentation]]; [[https://developer.myob.com/|MYOB Developer]]; [[https://developers.auspost.com.au/|Australia Post Developer Centre]]; [[https://www.ato.gov.au/businesses-and-organisations/einvoicing/about-peppol/identifying-australian-businesses-on-the-peppol-network|ATO, identifying Australian businesses on the Peppol network]]; [[https://www.finance.gov.au/publications/resource-management-guides/supplier-pay-time-or-pay-interest-policy-rmg-417|Department of Finance, RMG 417]]; [[https://www.ato.gov.au/businesses-and-organisations/hiring-and-paying-your-workers/single-touch-payroll/what-is-stp|ATO, what is STP]]; [[https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst|ATO, GST]]; [[https://www.cdr.gov.au/|Consumer Data Right]].",
          "**Payments and platforms:** [[https://stripe.com/global|Stripe global availability]]; [[https://docs.stripe.com/api/idempotent_requests|Stripe idempotent requests]]; [[https://docs.stripe.com/webhooks/signature|Stripe webhook signatures]]; [[https://shopify.dev/docs/apps/build/webhooks/subscribe/https|Shopify HTTPS webhooks]]; [[https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries|Shopify Payments supported countries]].",
          "**Standards and engineering references:** [[https://datatracker.ietf.org/doc/rfc9700/|RFC 9700, OAuth 2.0 Security Best Current Practice]]; [[https://www.rfc-editor.org/rfc/rfc6585#section-4|RFC 6585, HTTP 429]]; [[https://builder.aws.com/content/3EumjoZascWd1oZiEgL8ORlv3qE/timeouts-retries-and-backoff-with-jitter|AWS Builders' Library, timeouts, retries and backoff with jitter]]; [[https://datatracker.ietf.org/doc/draft-ietf-httpapi-idempotency-key-header/|IETF Idempotency-Key header draft (expired)]]; [[https://spec.openapis.org/oas/latest.html|OpenAPI Specification]]; [[https://api-security.owasp.org/editions/2023/en/0x11-t10|OWASP API Security Top 10 2023]]; [[https://www.ibm.com/think/topics/ipaas|IBM, what is iPaaS]]; [[https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-8-app-8-cross-border-disclosure-of-personal-information|OAIC, APP 8 guidelines]].",
          "Checked 9 October 2026. Some government pages could not be opened in full when checking and are marked ‘per summaries’ above; re-check scheme rules and dates before relying on them. Nothing here is ZSpace client data or tax, legal or financial advice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "API integration for an Australian business is less about choosing a clever tool and more about being clear on a few things: which flows matter most, which system owns each record, how ABN, GST, AUD and address data are mapped, and what happens when a message fails. Get those right and the choice between a connector, an integration platform and a custom service becomes straightforward.",
          "Start with order to cash or whichever flow has the highest cost of failure, write its flow card and field ownership table, and build the dead-letter queue and reconciliation from day one rather than after the first missed invoice.",
        ],
        cta: {
          title: "Planning an integration project?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses. We build [[/services/website-development|web applications and integration services]] and [[/services/ai-automation|workflow automation]] that connect stores, CRMs and accounting systems. India is 4.5 hours behind AEST (5.5 hours during AEDT), so there is a regular overlap with the Australian working day for reviews and releases.",
        },
      },
    ],
  },
];
