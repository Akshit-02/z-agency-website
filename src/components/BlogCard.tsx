import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogSummary } from "@/lib/blog-data";
import { BlogScene } from "./blog/BlogScene";
import { TiltCard } from "./ui/Aesthetic";

export function BlogCard({ post }: { post: BlogSummary }) {
  return (
    <TiltCard glow="#2563eb" max={6}>
      <Link href={`/blogs/${post.slug}`} className="group flex h-full flex-col p-3.5">
        <div className="rounded-[16px] bg-ink/[0.03] p-1.5 ring-1 ring-ink/[0.06]">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[12px] bg-white">
            <div className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]">
              <BlogScene scene={post.scene} />
            </div>
            <span className="absolute bottom-2.5 left-2.5 rounded-full bg-white/95 px-2.5 py-1 text-[0.66rem] font-medium text-ink shadow-sm backdrop-blur-sm">
              {post.category}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col px-1.5 pb-1.5">
          <span className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink/40">{post.readingTime}</span>
          <h3 className="mt-2 text-balance font-serif-display text-[1.3rem] leading-[1.2] transition-colors duration-300 group-hover:text-orange">
            {post.title}
          </h3>
          <p className="mt-2.5 line-clamp-3 text-pretty text-[0.9rem] leading-relaxed text-ink/55">{post.excerpt}</p>
          <span className="mt-auto flex items-center gap-2 pt-4 text-[0.82rem] font-medium text-ink">
            Read article
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink/[0.05] transition-all duration-500 group-hover:-rotate-45 group-hover:bg-ink group-hover:text-white">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </span>
        </div>
      </Link>
    </TiltCard>
  );
}
