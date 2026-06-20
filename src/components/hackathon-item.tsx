import Image from "next/image"
import { Hackathon } from "@/data/portfolio"
import { Badge } from "@/components/ui/badge"

interface HackathonItemProps {
  item: Hackathon;
  index: number;
}

export function HackathonItem({ item, index }: HackathonItemProps) {
  return (
    <div className="flex gap-4 items-start py-4">
      <div className="flex items-center justify-center text-xs font-semibold text-zinc-400 dark:text-zinc-600 w-5 h-11 shrink-0">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 shrink-0 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center p-1">
        <Image
          src={item.logo}
          alt={`${item.name} logo`}
          width={40}
          height={40}
          className="object-contain grayscale dark:invert"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
          <div>
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-50 leading-none">
              {item.name}
            </h3>
            <p className="text-xs text-zinc-450 dark:text-zinc-500 mt-1.5">
              {item.location}
            </p>
          </div>
          <span className="text-xs text-zinc-400 dark:text-zinc-500 font-normal shrink-0 sm:text-right">
            {item.dateRange}
          </span>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mt-2">
          {item.description}
        </p>
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {item.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-[10px] py-0 px-1.5 rounded-full border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 bg-transparent"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
