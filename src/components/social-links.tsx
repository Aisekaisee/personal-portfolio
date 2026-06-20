"use client"

import { Mail } from "lucide-react"
import { Github, Linkedin, Twitter } from "@/components/icons"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

interface SocialLinksProps {
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export function SocialLinks({ socials }: SocialLinksProps) {
  const items = [
    { name: "Email", icon: Mail, href: socials.email },
    { name: "GitHub", icon: Github, href: socials.github },
    { name: "LinkedIn", icon: Linkedin, href: socials.linkedin },
    { name: "Twitter / X", icon: Twitter, href: socials.twitter },
  ].filter((item) => item.href);

  return (
    <div className="flex gap-2">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Tooltip key={item.name}>
            <TooltipTrigger
              render={
                <a
                  href={item.href}
                  target={item.href?.startsWith("mailto:") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-550 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span className="sr-only">{item.name}</span>
                </a>
              }
            />
            <TooltipContent>
              <p>{item.name}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}
