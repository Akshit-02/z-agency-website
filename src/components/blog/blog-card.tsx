import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatDate, cn } from "@/lib/utils";
import type { BlogPost } from "@/types";

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden border border-line transition-colors hover:border-line-strong",
        featured && "lg:flex-row",
      )}
    >
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden bg-mist",
          featured ? "lg:w-2/5" : "aspect-[16/10]",
        )}
      >
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(12,16,41,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(12,16,41,0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <span
          className="relative font-display text-6xl font-medium text-transparent"
          style={{ WebkitTextStroke: "1.5px rgba(12,16,41,0.18)" }}
        >
          {post.category.slice(0, 2).toUpperCase()}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 font-mono-label text-[0.7rem] uppercase tracking-wide text-ink-faint">
          <span className="text-coral">{post.category}</span>
          <span>{post.readingTime}</span>
        </div>
        <h3
          className={cn(
            "mt-4 font-display font-medium leading-snug text-ink",
            featured ? "text-2xl sm:text-3xl" : "text-lg",
          )}
        >
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
          <span className="text-xs text-ink-faint">{formatDate(post.publishedAt)}</span>
          <ArrowUpRight className="size-4 text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
        </div>
      </div>
    </Link>
  );
}
