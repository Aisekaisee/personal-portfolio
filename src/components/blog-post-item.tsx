import { Badge } from "@/components/ui/badge"
import { BlogPost } from "@/data/portfolio"
import { ArrowUpRight } from "lucide-react"

interface BlogPostItemProps {
  post: BlogPost;
}

export function BlogPostItem({ post }: BlogPostItemProps) {
  return (
    <div className="py-4 border-b border-zinc-150 dark:border-zinc-900 last:border-b-0">
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-start justify-between gap-4"
      >
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors flex items-center gap-1.5 leading-snug">
            {post.title}
            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 shrink-0" />
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
            {post.description}
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <span className="text-[11px] text-zinc-450 dark:text-zinc-500 font-normal mr-2">
              {post.date}
            </span>
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-[9px] py-0 px-1.5 rounded-full border-zinc-200 dark:border-zinc-800 text-zinc-400 dark:text-zinc-500 bg-transparent"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}
