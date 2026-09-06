import { blogPosts } from "@/data/blog";
import { BlogCard } from "@/components/blog/blog-card";

export function InsightsPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
