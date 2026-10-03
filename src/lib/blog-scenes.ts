/**
 * Picks a realistic interface "scene" for each article's cover and pulls a few
 * short labels from the article itself, so every cover is specific to its post.
 * Pure data: safe to call on the server and send to the client.
 */

export type SceneKind =
  | "speed"
  | "landing"
  | "shopify"
  | "pdp"
  | "checkout"
  | "orders"
  | "analytics"
  | "abtest"
  | "funnel"
  | "heatmap"
  | "design"
  | "mobile"
  | "chat"
  | "rag"
  | "workflow"
  | "agent"
  | "code"
  | "security"
  | "serp"
  | "crm"
  | "cost"
  | "roadmap"
  | "compare"
  | "monitor"
  | "a11y"
  | "pipeline";

export type BlogSceneData = {
  kind: SceneKind;
  /** Short version of the title, shown inside the interface. */
  label: string;
  /** Up to four short points from the article. */
  items: string[];
  seed: number;
  /** Small wording variations inside a scene. */
  flavor?: "app";
};

type PostLike = {
  slug: string;
  title: string;
  category: string;
  banner?: string;
  content?: { heading: string; checklist?: string[] }[];
};

// First match wins, so more specific topics come first.
const rules: [SceneKind, RegExp][] = [
  ["a11y", /accessib|a11y|wcag|screen.?reader|inclusive/],
  ["security", /secur|\bpci\b|gdpr|privacy|complian|threat|\bauth|fraud|trust.?safety|hipaa|soc.?2|permission|toolsecurity|securitylock/],
  ["monitor", /llmops|observab|monitor|\bevals?\b|(model|llm|ai|rag).?evaluat|inference|latency|mlops|drift|guardrail|benchmark|model.?serv|fine.?tun|gpu|token.?cost/],
  ["rag", /\brag\b|retriev|vector|embedding|knowledge.?base|semantic.?search|chunk|reranking|vectordb/],
  ["agent", /agent/],
  ["chat", /chatbot|assistant|copilot|conversation|customer.?(support|service)|helpdesk|\bllm|\bgpt|prompt|voice|support.?system|ai.?search.?ux/],
  ["pipeline", /data.?(engineer|pipeline|quality|platform|warehouse)|\betl\b|unstruct|data.?prep|synthetic.?data|synthvsreal/],
  ["orders", /shipping|fulfil|returns?\b|exchange|\b3pl\b|threepl|warehouse|\bwms|delivery|order.?track|trackingpage|logistic|inventory/],
  ["checkout", /checkout|\bcart|payment|wallet|3ds|threeds|\btax|subscription|bnpl|upsell|cartdrawer|walletcheckout/],
  ["serp", /\bseo\b|serp|search.?console|ranking|schema|ai.?search|\bgeo\b|\baeo\b|sitemap|crawl|indexing|redirect|url.?map|urlmap|structured.?data/],
  ["speed", /speed|performance|web.?vitals|\bcwv\b|lighthouse|load.?time|gauge|waterfall|image.?optim|caching|\bcdn\b/],
  ["abtest", /a\/b|\bab.?test|split.?test|experiment|testideas|hypothes|testmatrix|test.?idea/],
  ["heatmap", /heatmap|audit|usability|ux.?research|user.?research|session.?record|friction|auditgrid|uxaudit/],
  ["funnel", /funnel|journey|drop.?off|onboarding|activation|retention|lifecycle|considerationfunnel|salesfunnel/],
  ["analytics", /analytic|attribution|\bga4\b|tracking|metric|\bkpi|dashboard|reporting|measure|cohort|segment/],
  ["crm", /\bcrm|lead|email|newsletter|\bsales|b2b|wholesale|quote|outreach|follow.?up/],
  ["cost", /\bcost|pricing|\bprice|budget|how.?much|\broi\b|estimate|costbreakdown/],
  ["compare", /\bvs\b|-vs-|versus|compar|alternative|choos|which.?|best.?|compare3|decisiontree|fork/],
  ["design", /design.?system|figma|component|wireframe|prototyp|handoff|ui.?kit|typograph|colou?r|style.?guide|token|mockup|ui.?design|interface|microinteraction|dark.?mode|icon/],
  ["pdp", /product.?(page|detail|data|photo|video)|\bpdp|merchandis|collection|catalog|variant|swatch|size.?guide|filter|wishlist|pdphotspots|search.?and.?discovery|zero.?result/],
  ["mobile", /mobile|\bios\b|android|react.?native|flutter|swift|kotlin|app.?store|push.?notif|mobileframe|appshelf|appblocks|wearable/],
  ["shopify", /shopify|store|theme|liquid|hydrogen|metafield|markets|ecommerce|commerce|d2c|marketplace|dropship/],
  ["workflow", /automat|workflow|zapier|n8n|integrat|webhook|\brpa\b|no.?code|low.?code|\bsync|wfvsrpa/],
  ["code", /\bapi\b|graphql|restgraphql|headless|next.?js|react|typescript|node|backend|architect|framework|tech.?stack|techstack|migrat|devops|deploy|hosting|serverless|database|\bcms\b|developer|engineering|tech.?debt|microservice|testing|testpyramid/],
  ["roadmap", /roadmap|process|\bplan|\bmvp|discovery|timeline|agency|hir(e|ing)|team|maintenance|launch|checklist|strategy|cycle|layers|tiers/],
  ["landing", /website|landing|homepage|redesign|\bhero|\bcta|copywrit|content|blog|brand|homepageanatomy|ctahierarchy/],
];

const byCategory: Record<string, SceneKind> = {
  "Web Development": "landing",
  "Mobile Apps": "mobile",
  "Shopify & Ecommerce": "shopify",
  "UI/UX": "design",
  "AI & Automation": "workflow",
  CRO: "abtest",
};

const generic = /^(quick answer|faq|faqs|conclusion|summary|references|sources|final thoughts|key takeaways|next steps|frequently asked questions|in short|tl;?dr)/i;

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h) || 1;
}

function clean(s: string) {
  return s
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\{\{[bo]:(.+?)\}\}/g, "$1")
    .replace(/\[\[[^|\]]+\|(.+?)\]\]/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

/** Shorten at a word boundary. */
export function shorten(s: string, max: number) {
  const t = clean(s).replace(/[.:;,]$/, "");
  if (t.length <= max) return t;
  const cut = t.slice(0, max + 1);
  const at = cut.lastIndexOf(" ");
  return (at > max * 0.55 ? cut.slice(0, at) : t.slice(0, max)).replace(/[,:;\-–—]$/, "") + "…";
}

function shortLabel(title: string) {
  const t = clean(title);
  const head = t.split(/[:?]| — | – /)[0];
  return shorten(head.length >= 14 ? head : t, 46);
}

function pickItems(post: PostLike) {
  const sections = post.content ?? [];
  const list = sections.find((s) => (s.checklist?.length ?? 0) >= 3)?.checklist;
  const raw = list ?? sections.map((s) => s.heading).filter((h) => !generic.test(clean(h)));
  const seen = new Set<string>();
  const out: string[] = [];
  for (const r of raw) {
    // take the lead phrase of a checklist line ("Measure X: because..." -> "Measure X")
    const lead = clean(r).split(/: | — | – |\. /)[0];
    const s = shorten(lead, 32);
    if (s.length < 4 || seen.has(s.toLowerCase())) continue;
    seen.add(s.toLowerCase());
    out.push(s);
    if (out.length === 4) break;
  }
  return out;
}

export function sceneFor(post: PostLike): BlogSceneData {
  const text = `${post.slug} ${post.title} ${post.banner ?? ""}`.toLowerCase();
  let kind: SceneKind | undefined;
  // AI agent articles get the agent scene unless they're about securing agents
  if (/agent/.test(text) && !/secur|threat|permission/.test(text)) kind = "agent";
  for (const [k, re] of kind ? [] : rules) {
    if (!re.test(text)) continue;
    // a bare "app" in a Shopify article means a Shopify app, not a phone app
    if (k === "mobile" && post.category === "Shopify & Ecommerce" && !/mobile|ios|android/.test(text)) continue;
    kind = k;
    break;
  }
  const items = pickItems(post);
  while (items.length < 3) items.push(["Plan", "Build", "Measure", "Improve"][items.length]);
  const finalKind = kind ?? byCategory[post.category] ?? "landing";
  return {
    ...(finalKind === "monitor" && (post.category === "Mobile Apps" || /crash|app.?(performance|monitor)/.test(text)) ? { flavor: "app" as const } : {}),
    kind: finalKind,
    label: shortLabel(post.title),
    items,
    seed: hash(post.slug),
  };
}
