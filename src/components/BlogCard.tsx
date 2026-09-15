import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";
import { BlogBanner } from "./BlogBanner";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blogs/${post.slug}`} className="group flex flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line">
        <div className="h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]">
          <BlogBanner variant={post.banner} />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1.5 text-[0.75rem] font-medium uppercase tracking-[0.06em] text-ink backdrop-blur-sm">
          {post.category}
        </span>
      </div>

      <div className="mt-5 flex items-center gap-3 text-[0.82rem] font-medium uppercase tracking-[0.08em]">
        <span className="text-blue">{post.readingTime}</span>
      </div>
      <h3 className="mt-3 max-w-2xl text-balance font-display text-[1.3rem] font-medium leading-[1.25] tracking-tight transition-colors duration-300 group-hover:text-orange sm:text-[1.4rem]">
        {post.title}
      </h3>
      <p className="mt-3 max-w-2xl text-pretty text-[0.96rem] leading-relaxed text-ink-soft">
        {post.excerpt}
      </p>
      <div className="mt-4 flex items-center gap-2 text-[0.9rem] font-medium text-ink">
        Read article
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
