import Link from "next/link";
import type { ReactNode } from "react";

const TOKEN_RE = /\*\*(.+?)\*\*|\{\{(b|o):(.+?)\}\}|\[\[(.+?)\|(.+?)\]\]/g;

/**
 * Minimal inline markup for article body copy:
 *  **text**            -> bold
 *  {{b:text}}          -> blue accent
 *  {{o:text}}          -> orange accent
 *  [[/href|text]]      -> internal link
 */
export function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  TOKEN_RE.lastIndex = 0;

  let match: RegExpExecArray | null;
  while ((match = TOKEN_RE.exec(text))) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const [, bold, accent, accentText, href, label] = match;

    if (bold !== undefined) {
      nodes.push(
        <strong key={key++} className="font-semibold text-ink">
          {bold}
        </strong>
      );
    } else if (accent !== undefined) {
      nodes.push(
        <span key={key++} className={accent === "b" ? "text-blue" : "text-orange"}>
          {accentText}
        </span>
      );
    } else if (href !== undefined) {
      nodes.push(
        <Link
          key={key++}
          href={href}
          className="text-blue underline decoration-line-strong underline-offset-2 transition-colors hover:decoration-blue"
        >
          {label}
        </Link>
      );
    }

    lastIndex = TOKEN_RE.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

export function slugifyHeading(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
