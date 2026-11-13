"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BlogCard } from "./BlogCard";
import type { BlogSummary } from "@/lib/blog-data";
import { categories } from "@/lib/blog-categories";

const PAGE_SIZE = 24;

const EASE = [0.25, 1, 0.5, 1] as const;

/**
 * `initial` is the first page of cards, rendered into the HTML. The full list
 * (`total` entries) is fetched from the static /blogs-index.json only once the
 * visitor searches, filters or loads more, so a plain visit stays small.
 */
export function BlogExplorer({ initial, total }: { initial: BlogSummary[]; total: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [all, setAll] = useState<BlogSummary[] | null>(null);
  const [wantAll, setWantAll] = useState(false);

  const filtering = category !== "All" || query.trim() !== "";
  const needsAll = wantAll || filtering;

  useEffect(() => {
    if (!needsAll || all) return;
    let cancelled = false;
    fetch("/blogs-index.json")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: BlogSummary[]) => {
        if (!cancelled) setAll(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [needsAll, all]);

  const posts = all ?? initial;
  // Only blank the grid while a filter is waiting on the full list; "Load
  // more" keeps showing the first page until the rest arrives.
  const loading = filtering && !all;

  function handleQueryChange(value: string) {
    setVisible(PAGE_SIZE);
    setQuery(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value.trim()) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    // Native replaceState keeps ?q= shareable without a server round trip per
    // keystroke (router.replace refetched /blogs?q=… — a CDN miss each time).
    window.history.replaceState(null, "", params.toString() ? `${pathname}?${params.toString()}` : pathname);
  }

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        query.trim() === "" ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [posts, category, query]);
  const filteredTotal = all || filtering ? filtered.length : total;

  return (
    <div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => {
            const active = category === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setCategory(c);
                  setVisible(PAGE_SIZE);
                }}
                aria-pressed={active}
                className={`relative rounded-full px-4 py-2 text-[0.85rem] transition-colors duration-300 ${
                  active ? "text-white" : "text-ink/60 hover:text-ink"
                }`}
              >
                {active ? (
                  <motion.span
                    layoutId="blog-filter"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                ) : (
                  <span className="absolute inset-0 rounded-full border border-ink/10" />
                )}
                <span className="relative">{c}</span>
              </button>
            );
          })}
        </div>

        <label className="relative w-full sm:w-64">
          <span className="sr-only">Search articles</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
          <input
            type="search"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Search articles"
            className="w-full rounded-full border border-ink/10 bg-white py-3 pl-10 pr-4 text-[0.92rem] shadow-[0_1px_2px_rgba(11,12,14,0.03)] outline-none transition-all focus:border-ink/40 focus:shadow-[0_10px_30px_-18px_rgba(11,12,14,0.35)]"
          />
        </label>
      </div>

      <div className="mt-10">
        {loading ? (
          <p className="py-16 text-center text-[1rem] text-ink-soft">Loading articles…</p>
        ) : filtered.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${category}-${query}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.slice(0, visible).map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 30, rotateX: 18 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: Math.min(i % PAGE_SIZE, 8) * 0.05, ease: EASE }}
                  style={{ transformPerspective: 1000, transformOrigin: "50% 100%" }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        ) : null}
        {!loading && filteredTotal > visible && (
          <div className="mt-14 flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setWantAll(true);
                setVisible((v) => v + PAGE_SIZE);
              }}
              className="rounded-full bg-ink px-7 py-3.5 text-[0.9rem] font-medium text-white transition-colors duration-300 hover:bg-ink/85"
            >
              Load more articles
            </button>
            <p className="text-[0.85rem] text-ink-soft">
              Showing {Math.min(visible, filteredTotal)} of {filteredTotal}
            </p>
          </div>
        )}
        {!loading && filtered.length === 0 && (
          <p className="rounded-2xl border border-dashed border-ink/15 py-16 text-center text-[1rem] text-ink-soft">
            No articles match that search yet.
          </p>
        )}
      </div>
    </div>
  );
}
