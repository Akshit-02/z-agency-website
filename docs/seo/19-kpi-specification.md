# 19. Baseline and KPI tracking specification

One dashboard, one row per country (IN, AE, GB, AU, SG, other), answering one question: which countries and pages produce qualified enquiries and revenue. Targets are set after 90 days of baseline; none are proposed now.

## Baseline to record before deploying batch 1

| Item | Source | Export |
| --- | --- | --- |
| Indexed vs submitted pages | Search Console → Pages | Indexed count, "Crawled – currently not indexed", "Discovered – not indexed" |
| Clicks, impressions, CTR, position | Search Console → Performance | Last 3 months by page, query and country |
| AI feature impressions | Search Console → Generative AI report (impressions only) | By country |
| Sessions and enquiries | GA4 | Organic sessions by country and landing page; `generate_lead` count |
| Backlinks | Search Console → Links | Top linked pages, linking sites |
| Leads | Inbox or CRM | Count by month, need, budget, source page |

## Metrics

| Metric | Definition | Source | Cut by | Cadence |
| --- | --- | --- | --- | --- |
| Indexed pages | Indexed ÷ submitted | Search Console | Page type | Monthly |
| Organic impressions and clicks | As reported | Search Console | Country, page type, service cluster | Weekly |
| CTR and average position | As reported | Search Console | Country, query group (brand / service / informational) | Weekly |
| AI feature impressions | As reported | Search Console | Country | Monthly |
| Organic sessions | GA4 organic search | GA4 | Country, landing page | Weekly |
| Enquiries | `generate_lead` (server-confirmed) | GA4 + lead log | Country, landing page, source page, channel (UTM/referrer), service | Weekly |
| Enquiry rate | Enquiries ÷ sessions | GA4 | Country, page type | Monthly |
| Qualified leads | Marked qualified (fit, budget, real project) | CRM / sheet | Country, service, first-touch landing page | Weekly |
| Proposals, wins, revenue | Pipeline stages and invoiced value | CRM / accounts | Country (billing), service, first-touch channel | Monthly |
| Revenue per landing page | Won revenue by first-touch `landing_page` | CRM join | Cluster | Quarterly |
| Content health | Articles with 0 impressions in 90 days; articles refreshed; sources added | Search Console + `03-…` | Cluster, class | Monthly |

## Definitions to agree

- "Qualified": fits a service, has a budget band, describes a real project.
- Country: visitor country (GA4) for traffic; client billing country for leads and revenue. Add an optional Country field to the form to capture it.
- Attribution: first touch (`landing_page`, `referrer`, `utm`, captured from batch 1) for strategy; last page (`?src=`) for page optimisation.

## Rules

Show Search Console and GA4 side by side, never summed. Treat any figure under 30 enquiries a month as directional. Never back-fill the blank performance columns in `02-…` or `03-…` with estimates. Looker Studio is enough: native Search Console and GA4 connectors, plus the CRM sheet joined on lead ID.
