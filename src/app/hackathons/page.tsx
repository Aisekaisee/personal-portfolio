import Link from "next/link";
import { hackathons } from "@/data/portfolio";
import { HackathonItem } from "@/components/hackathon-item";
import { SectionHeading } from "@/components/section-heading";
import { ScrollReveal, ScrollRevealList, ScrollRevealListItem } from "@/components/scroll-reveal";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata = {
  title: "Hackathons",
  description: "Hackathons and prototypes built by Vipul Kohli.",
};

export default function HackathonsPage() {
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
          <SectionHeading>Hackathons</SectionHeading>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            A history of experiments and projects built during hackathons, design sprints, and developer events.
          </p>
        </div>
      </ScrollReveal>

      {/* Hackathons List */}
      <div className="mt-4">
        <ScrollRevealList staggerDelay={0.05}>
          <div className="flex flex-col divide-y divide-zinc-150 dark:divide-zinc-900">
            {hackathons.map((hackathon, idx) => (
              <ScrollRevealListItem key={`${hackathon.name}-${idx}`}>
                <HackathonItem item={hackathon} index={idx} />
              </ScrollRevealListItem>
            ))}
          </div>
        </ScrollRevealList>
      </div>
    </div>
  );
}
