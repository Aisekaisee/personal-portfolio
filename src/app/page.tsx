import Image from "next/image";
import Link from "next/link";
import { profile, workExperience, education, skills, projects, hackathons } from "@/data/portfolio";
import { ScrollReveal, ScrollRevealList, ScrollRevealListItem } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { WorkExperienceItem } from "@/components/work-experience-item";
import { ProjectCard } from "@/components/project-card";
import { HackathonItem } from "@/components/hackathon-item";
import { SocialLinks } from "@/components/social-links";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";

export default function Home() {
  // Homepage previews
  const homeWork = workExperience.slice(0, 3);
  const homeProjects = projects.slice(0, 3);
  const homeHackathons = hackathons.slice(0, 3);

  return (
    <div className="flex flex-col gap-16 md:gap-20">
      {/* A. Hero / Profile Section */}
      <ScrollReveal delay={0.1}>
        <section className="relative flex flex-col items-center text-center gap-6">
          <div className="absolute top-0 right-0">
            <ThemeToggle />
          </div>

          <div className="relative w-24 h-24 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 mt-8 sm:mt-0">
            <Image
              src={profile.avatar}
              alt={`${profile.name} profile photo`}
              fill
              sizes="96px"
              priority
              className="object-cover grayscale"
            />
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                {profile.name}
              </h1>
              <a href={profile.socials.email}>
                <Badge className="bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-zinc-50 dark:text-zinc-950 text-[10px] font-medium py-0.5 px-2 rounded-full cursor-pointer flex items-center gap-1">
                  <Mail className="w-2.5 h-2.5" />
                  Hire Me!
                </Badge>
              </a>
            </div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {profile.title}
            </p>
          </div>

          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-lg">
            {profile.bio}
          </p>

          <div className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500 font-medium">
            <span>📍</span>
            {profile.locationLink ? (
              <a
                href={profile.locationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {profile.location}
              </a>
            ) : (
              <span>{profile.location}</span>
            )}
          </div>

          <SocialLinks socials={profile.socials} />

          {/* Inline Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-4 border-t border-zinc-150 dark:border-zinc-900 pt-6 w-full">
            <Link href="/projects" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              Proof of Work
            </Link>
            <Link href="/experience" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
              Full Experience
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* B. Work Experience Section */}
      <ScrollReveal>
        <section className="flex flex-col gap-4">
          <SectionHeading>Work Experience</SectionHeading>
          <ScrollRevealList>
            {homeWork.map((item, idx) => (
              <ScrollRevealListItem key={`${item.company}-${idx}`}>
                <WorkExperienceItem item={item} />
              </ScrollRevealListItem>
            ))}
          </ScrollRevealList>
        </section>
      </ScrollReveal>

      {/* C. Education Section */}
      <ScrollReveal>
        <section className="flex flex-col gap-4">
          <SectionHeading>Education</SectionHeading>
          <ScrollRevealList>
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
          </ScrollRevealList>
        </section>
      </ScrollReveal>

      {/* D. Skills Section */}
      <ScrollReveal>
        <section className="flex flex-col gap-4">
          <SectionHeading>Skills</SectionHeading>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="text-xs py-1 px-3 rounded-full border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* E. Projects Section ("Proof of Work") */}
      <ScrollReveal>
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 dark:text-zinc-500">
              Proof of Work
            </span>
            <SectionHeading>Check out my latest work</SectionHeading>
            <p className="text-xs text-zinc-500 dark:text-zinc-450 mt-1">
              A curated collection of web applications and decentralized technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {homeProjects.map((project, idx) => (
              <ProjectCard key={`${project.name}-${idx}`} project={project} />
            ))}
          </div>

          <div className="flex justify-end mt-2">
            <Link
              href="/projects"
              className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors flex items-center gap-1 group"
            >
              View More
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* F. Hackathons Section */}
      <ScrollReveal>
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 dark:text-zinc-500">
              Hackathons
            </span>
            <SectionHeading>Building excites me</SectionHeading>
            <p className="text-xs text-zinc-500 dark:text-zinc-450 mt-1">
              Building prototypes and launching experiments in high-pressure environments.
            </p>
          </div>

          <ScrollRevealList>
            {homeHackathons.map((hackathon, idx) => (
              <ScrollRevealListItem key={`${hackathon.name}-${idx}`}>
                <HackathonItem item={hackathon} index={idx} />
              </ScrollRevealListItem>
            ))}
          </ScrollRevealList>

          <div className="flex justify-end mt-2">
            <Link
              href="/hackathons"
              className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors flex items-center gap-1 group"
            >
              View More
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
          </div>
        </section>
      </ScrollReveal>


      {/* H. Contact / Footer Section */}
      <ScrollReveal>
        <section className="flex flex-col gap-4 border-t border-zinc-150 dark:border-zinc-900 pt-10 text-center">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Get in Touch
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-md mx-auto">
            Want to collaborate on a project or just chat? Feel free to shoot me an email at{" "}
            <a
              href={profile.socials.email}
              className="font-medium text-zinc-900 dark:text-zinc-50 hover:underline"
            >
              {profile.email}
            </a>{" "}
            or DM me on{" "}
            <a
              href={profile.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-900 dark:text-zinc-50 hover:underline"
            >
              Twitter/X
            </a>.
          </p>

        </section>
      </ScrollReveal>
    </div>
  );
}
