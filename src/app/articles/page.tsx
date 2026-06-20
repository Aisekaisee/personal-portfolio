import Link from "next/link";
import { blogPosts } from "@/data/portfolio";
import { BlogPostItem } from "@/components/blog-post-item";
import { SectionHeading } from "@/components/section-heading";
import { ScrollReveal, ScrollRevealList, ScrollRevealListItem } from "@/components/scroll-reveal";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata = {
  title: "Blogs",
  description: "Technical articles and blogs written by Vipul Kohli.",
};

export default function ArticlesPage() {
  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors flex items-center gap-1 group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          Back to Resume
        </Link>
        <ThemeToggle />
      </div>

      <ScrollReveal delay={0.05}>
        <div className="flex flex-col gap-2">
          <SectionHeading>Blogs & Articles</SectionHeading>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Thoughts, deep-dives, and tutorials on full stack architecture, EVM optimization, and frontend systems.
          </p>
        </div>
      </ScrollReveal>

      {/* Blogs List */}
      <div className="mt-4">
        <ScrollRevealList staggerDelay={0.05}>
          <div className="flex flex-col divide-y divide-zinc-150 dark:divide-zinc-900">
            {blogPosts.map((post, idx) => (
              <ScrollRevealListItem key={`${post.title}-${idx}`}>
                <BlogPostItem post={post} />
              </ScrollRevealListItem>
            ))}
          </div>
        </ScrollRevealList>
      </div>
    </div>
  );
}
