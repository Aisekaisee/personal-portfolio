import Image from "next/image"
import { WorkExperience } from "@/data/portfolio"

interface WorkExperienceItemProps {
  item: WorkExperience;
}

export function WorkExperienceItem({ item }: WorkExperienceItemProps) {
  return (
    <div className="flex gap-4 items-start py-4">
      <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 shrink-0 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center p-1">
        <Image
          src={item.logo}
          alt={`${item.company} logo`}
          width={40}
          height={40}
          className="object-contain grayscale dark:invert"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
          <div>
            <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-50 leading-none">
              {item.role}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-450 mt-1">
              {item.company}
            </p>
          </div>
          <span className="text-xs text-zinc-400 dark:text-zinc-500 font-normal shrink-0 sm:text-right">
            {item.dateRange}
          </span>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mt-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}
