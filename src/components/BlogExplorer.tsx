"use client";

import { useMemo, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BlogCard } from "./BlogCard";
import { categories, type BlogPost } from "@/lib/blog-data";

const EASE = [0.25, 1, 0.5, 1] as const;

export function BlogExplorer({ posts }: { posts: BlogPost[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  function handleQueryChange(value: string) {
    setQuery(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value.trim()) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    router.replace(params.toString() ? `${pathname}?${params.toString()}` : pathname, {
      scroll: false,
    });
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

  return (
    <div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`rounded-full border px-4 py-2 text-[0.88rem] font-medium transition-colors duration-300 ${
                category === c
                  ? "border-blue bg-blue text-white"
                  : "border-line-strong text-ink-soft hover:border-blue hover:text-blue"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <label className="relative w-full sm:w-64">
          <span className="sr-only">Search articles</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
          <input
            type="search"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Search articles"
            className="w-full rounded-full border border-line-strong bg-transparent py-2.5 pl-10 pr-4 text-[0.92rem] outline-none transition-colors focus:border-blue"
          />
        </label>
      </div>

      <div className="mt-10">
        {filtered.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${category}-${query}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: EASE }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        ) : (
          <p className="border-t border-line py-16 text-center text-[1rem] text-ink-soft">
            No articles match that search yet.
          </p>
        )}
      </div>
    </div>
  );
}
