import { site } from "./site";

/**
 * Shared SEO helpers. Kept framework-agnostic so they can be unit-checked
 * from scripts as well as used in generateMetadata.
 */

export const ORG_ID = `${site.url}/#organization`;
export const WEBSITE_ID = `${site.url}/#website`;

const BRAND_SUFFIX = ` — ${site.name}`;
const MAX_TITLE = 70;

/**
 * Page titles get " — ZSpace Labs" from the root template. When that would
 * push a title past ~70 characters (where search results truncate), return
 * the bare title as an absolute title instead, so the descriptive part is
 * what users see.
 */
export function pageTitle(title: string): string | { absolute: string } {
  return (title + BRAND_SUFFIX).length > MAX_TITLE ? { absolute: title } : title;
}

/**
 * Meta descriptions: search engines show roughly 150–160 characters. Long
 * excerpts are shortened at natural boundaries (sentence, then list item)
 * rather than cut mid-word, so the result still reads as a complete line.
 */
export function metaDescription(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;

  // 1. First sentence, if it is long enough to stand alone.
  const sentence = clean.match(/^(.{70,}?[.!?])\s/);
  if (sentence && sentence[1].length <= max) return sentence[1];

  // 2. Drop a trailing aside introduced by a dash, if what remains stands alone.
  const dash = clean.split(/ [—–] /)[0].replace(/[.]$/, "");
  if (dash !== clean && dash.length >= 90 && dash.length < max) return dash + ".";

  // 3. Lists such as "How to X: a, b, c, d and e." — drop trailing items
  //    and close the list with "and".
  const parts = clean.replace(/[.]$/, "").split(", ");
  if (parts.length > 2) {
    for (let n = parts.length - 1; n >= 2; n--) {
      const head = parts.slice(0, n - 1).join(", ");
      const last = parts[n - 1].replace(/^and /, "").split(" and ")[0];
      const candidate = `${head} and ${last}.`;
      if (candidate.length <= max && head.length > 40) return candidate;
    }
  }

  // 4. Fallback: cut at the last word boundary and end cleanly.
  const cut = clean.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:—–-]+$/, "") + "…";
}
