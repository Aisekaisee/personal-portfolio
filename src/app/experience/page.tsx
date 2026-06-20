import Link from "next/link";
import { workExperience, education } from "@/data/portfolio";
import { WorkExperienceItem } from "@/components/work-experience-item";
import { SectionHeading } from "@/components/section-heading";
import { ScrollReveal, ScrollRevealList, ScrollRevealListItem } from "@/components/scroll-reveal";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata = {
  title: "Experience",
  description: "Work experience and academic background of Vipul Kohli.",
};

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-12 w-full">
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
          <SectionHeading>Full Experience</SectionHeading>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            A comprehensive overview of my professional roles, engineering contributions, and education.
          </p>
        </div>
      </ScrollReveal>

      {/* Work Experience */}
      <div className="flex flex-col gap-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
          Professional Experience
        </h2>
        <ScrollRevealList staggerDelay={0.05}>
          <div className="flex flex-col divide-y divide-zinc-150 dark:divide-zinc-900">
            {workExperience.map((item, idx) => (
              <ScrollRevealListItem key={`${item.company}-${idx}`}>
                <WorkExperienceItem item={item} />
              </ScrollRevealListItem>
            ))}
          </div>
        </ScrollRevealList>
      </div>

      {/* Education */}
      <div className="flex flex-col gap-4 border-t border-zinc-150 dark:border-zinc-900 pt-8">
        <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
          Education
        </h2>
        <ScrollRevealList staggerDelay={0.05}>
          <div className="flex flex-col divide-y divide-zinc-150 dark:divide-zinc-900">
            {education.map((item, idx) => (
              <ScrollRevealListItem key={`${item.institution}-${idx}`}>
                <WorkExperienceItem
                  item={{
                    company: item.institution,
                    logo: item.logo,
                    role: item.degree,
                    dateRange: item.dateRange,
                    description: item.description,
                  }}
                />
              </ScrollRevealListItem>
            ))}
          </div>
        </ScrollRevealList>
      </div>
    </div>
  );
}
