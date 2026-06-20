"use client"

import * as React from "react"
import Link from "next/link"
import { projects } from "@/data/portfolio"
import { ProjectCard } from "@/components/project-card"
import { SectionHeading } from "@/components/section-heading"
import { ScrollReveal, ScrollRevealList, ScrollRevealListItem } from "@/components/scroll-reveal"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = React.useState("all")

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "all") return true;
    return project.category === activeTab;
  })

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
          <SectionHeading>Proof of Work</SectionHeading>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            A comprehensive list of projects I have built, open-sourced, or contributed to.
          </p>
        </div>
      </ScrollReveal>

      {/* Filter Tabs */}
      <ScrollReveal delay={0.1}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList variant="line" className="border-b border-zinc-200 dark:border-zinc-800 pb-0 flex gap-4 w-full justify-start rounded-none">
            <TabsTrigger value="all" className="pb-2 text-xs font-semibold px-0 rounded-none border-b-2 border-transparent data-[state=active]:border-zinc-900 dark:data-[state=active]:border-zinc-50 cursor-pointer">
              All Projects
            </TabsTrigger>
            <TabsTrigger value="web3" className="pb-2 text-xs font-semibold px-0 rounded-none border-b-2 border-transparent data-[state=active]:border-zinc-900 dark:data-[state=active]:border-zinc-50 cursor-pointer">
              Web3 / Cryptography
            </TabsTrigger>
            <TabsTrigger value="web2" className="pb-2 text-xs font-semibold px-0 rounded-none border-b-2 border-transparent data-[state=active]:border-zinc-900 dark:data-[state=active]:border-zinc-50 cursor-pointer">
              Web2 / Tooling
            </TabsTrigger>
            <TabsTrigger value="bootcamps" className="pb-2 text-xs font-semibold px-0 rounded-none border-b-2 border-transparent data-[state=active]:border-zinc-900 dark:data-[state=active]:border-zinc-50 cursor-pointer">
              Bootcamps
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </ScrollReveal>

      {/* Projects Grid */}
      <div className="mt-4">
        {filteredProjects.length > 0 ? (
          <ScrollRevealList staggerDelay={0.05} key={activeTab}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredProjects.map((project, idx) => (
                <ScrollRevealListItem key={`${project.name}-${idx}`}>
                  <ProjectCard project={project} />
                </ScrollRevealListItem>
              ))}
            </div>
          </ScrollRevealList>
        ) : (
          <ScrollReveal delay={0.1}>
            <div className="text-center py-12 text-sm text-zinc-400 dark:text-zinc-500">
              No projects found in this category.
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
}
