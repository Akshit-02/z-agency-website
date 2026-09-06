"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { blogCategories } from "@/data/blog";
import { BlogCard } from "./blog-card";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/types";

export function BlogList({ posts: allPosts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const posts = useMemo(() => {
    return allPosts.filter((post) => {
      if (category && post.category !== category) return false;
      if (query && !`${post.title} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase())) {
        return false;
      }
      return true;
    });
  }, [allPosts, query, category]);

  return (
    <div>
      <div className="flex flex-col gap-5 border-y border-line py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono-label text-xs uppercase tracking-wide">
          <button
            type="button"
            onClick={() => setCategory(null)}
            className={cn(!category ? "text-ink" : "text-ink-faint hover:text-ink-soft")}
          >
            All topics
          </button>
          {blogCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat === category ? null : cat)}
              className={cn(category === cat ? "text-ink" : "text-ink-faint hover:text-ink-soft")}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-ink-faint" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles"
            className="w-full border border-line-strong bg-white py-2.5 pl-10 pr-4 text-sm focus-visible:outline-2 focus-visible:outline-blue"
          />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <p className="mt-16 text-center text-ink-faint">
          Nothing matches that search yet — try a different term or topic.
        </p>
      )}
    </div>
  );
}
