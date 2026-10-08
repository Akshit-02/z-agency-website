# Next 20 AI Governance Topics: Content Plan

Prepared 2026-10-08. For decisions see `next-20-ai-governance-content-audit.md`; for results see `next-20-ai-governance-implementation.md`.

**Final: 10 articles.** No search-volume, difficulty or traffic data is available to this project, so none is stated. Copy is evergreen: no specific years in titles, headings, FAQs or body text.

## Shared requirements (all articles)

- **Schema:** BlogPosting + BreadcrumbList + FAQPage (visible FAQs) from the shared template. No QAPage, LocalBusiness, reviews, ratings or invented authors.
- **Images:** generated SVG cover scene (no image requests, no layout shift), `sceneKind` pinned, `bannerAlt` describing a new diagram spec in `BlogBanner.tsx`. In-article diagrams are text code blocks where a structure helps (layers, architectures, checklists).
- **Metadata:** unique `seoTitle` of 70 characters or fewer, excerpt of 155 characters or fewer (used as meta and Open Graph description), self-referencing canonical on www.
- **CTA:** one contextual CTA per article, at most two.

## Final topics

| Cluster | Title | URL | Primary keyword | Search intent | Secondary keywords | Key internal links | Service |
|---|---|---|---|---|---|---|---|
| Governance | AI Agent Governance: What Businesses Need to Control Before Agents Go Autonomous | /blogs/ai-agent-governance | AI agent governance | Framework / informational-commercial | agent governance framework, runtime controls, agent risk assessment | ai-governance-framework, ai-agent-access-control, ai-agent-guardrails, ai-control-plane, ai-agent-lifecycle-management | AI Automation |
| Governance | AI Control Plane: What Organizations Need to Manage Many AI Agents | /blogs/ai-control-plane | AI control plane | Definition + architecture | agent control plane, agent registry, control plane vs data plane | ai-platform-engineering, mcp-governance, llm-gateway, ai-agent-governance | AI Automation |
| Governance | Shadow AI Agents: How to Discover and Govern Unapproved AI Automation | /blogs/shadow-ai-agents | shadow AI agents | Problem / solution | shadow AI, BYOAI, unapproved automations, AI discovery | ai-governance-framework, mcp-governance, ai-coding-policy, ai-agent-lifecycle-management | AI Automation |
| Governance | AI Agent Lifecycle Management: From Creation to Retirement | /blogs/ai-agent-lifecycle-management | AI agent lifecycle management | Framework / checklist | agent retirement, orphaned agents, agent ownership | ai-application-release-management, ai-agent-authentication, owasp-top-10-agentic-applications | AI Automation |
| Governance | ISO/IEC 42001: What an AI Management System Means for Your Business | /blogs/iso-42001-ai-management-system | ISO 42001 | Informational / commercial investigation | AI management system, ISO 42001 certification, ISO 42005 | ai-governance-framework, ai-agent-governance, ai-agent-vendor-assessment | AI Automation |
| Governance | How to Assess an AI Agent Vendor: Security, Data and Governance Questions | /blogs/ai-agent-vendor-assessment | AI vendor assessment | Commercial investigation / checklist | AI vendor due diligence, AI vendor questionnaire | build-vs-buy-ai-agents, ai-agent-authentication, iso-42001-ai-management-system | AI Automation |
| AI-native product | AI-Native vs AI-Enabled Software: What Actually Changes in the Architecture | /blogs/ai-native-vs-ai-enabled-software | AI-native vs AI-enabled | Comparison | AI-native application architecture, AI-native software | ai-powered-saas-development, ai-automation-architecture, llm-structured-outputs | Website Development / AI Automation |
| AI-native product | How to Turn an Existing SaaS Product Into an AI-Native Product | /blogs/turn-saas-product-into-ai-native-product | turn SaaS into AI-native | Implementation roadmap | add AI to SaaS product, AI-native SaaS migration | ai-powered-saas-development, ai-native-vs-ai-enabled-software, apis-for-ai-agents, ai-agent-autonomy-levels | Website Development / UI/UX |
| Enterprise automation | AI Automation Technical Debt: Why AI Workflows Become Hard to Maintain | /blogs/ai-automation-technical-debt | AI automation technical debt | Problem / checklist | AI workflow maintenance, prompt debt, hidden technical debt | ai-application-release-management, ai-agent-lifecycle-management, shadow-ai-agents, ai-automation-architecture | AI Automation |
| Enterprise automation | AI Automation Center of Excellence: How to Organize AI Workflows at Scale | /blogs/ai-automation-center-of-excellence | AI center of excellence | Organizational design | AI CoE operating model, AI governance team | enterprise-ai-implementation, ai-control-plane, ai-agent-governance | AI Automation |

## Cluster relationships

```
GOVERNANCE: ai-agent-governance (hub) → ai-control-plane → shadow-ai-agents → ai-agent-lifecycle-management
            → iso-42001-ai-management-system → ai-agent-vendor-assessment
            existing: ai-governance-framework, access-control, guardrails, autonomy-levels, accountability, audit-trail
AI-NATIVE:  ai-native-vs-ai-enabled-software → turn-saas-product-into-ai-native-product
            existing: ai-powered-saas-development, apis-for-ai-agents, how-ai-agents-use-websites
ENTERPRISE: ai-automation-technical-debt → ai-automation-center-of-excellence
            existing: ai-automation-architecture, enterprise-ai-implementation
```
