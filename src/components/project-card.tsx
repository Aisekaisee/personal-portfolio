import Image from "next/image"
import { Globe } from "lucide-react"
import { Github } from "@/components/icons"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Project } from "@/data/portfolio"

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full bg-background border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:shadow-sm transition-all duration-200">
      <div className="relative w-full aspect-video overflow-hidden border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
        <Image
          src={project.image}
          alt={`${project.name} thumbnail`}
          fill
          sizes="(max-w-md) 100vw, 400px"
          className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="font-semibold text-zinc-900 dark:text-zinc-50 text-base leading-tight">
            {project.name}
          </CardTitle>
          <Badge
            variant={project.status === "Completed" ? "default" : "secondary"}
            className="text-[10px] font-medium py-0 px-2 rounded-full shrink-0"
          >
            {project.status}
          </Badge>
        </div>
        <span className="text-[11px] text-zinc-400 dark:text-zinc-500 font-normal">
          {project.date}
        </span>
      </CardHeader>
      <CardContent className="p-4 flex-1">
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 mt-4">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-[10px] py-0 px-1.5 rounded-full border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-450 bg-transparent"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 border-t-0 flex gap-3 text-xs">
        {project.links.website && (
          <a
            href={project.links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors font-medium"
          >
            <Globe className="w-3.5 h-3.5" />
            Website
          </a>
        )}
        {project.links.source && (
          <a
            href={project.links.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors font-medium"
          >
            <Github className="w-3.5 h-3.5" />
            Source
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
