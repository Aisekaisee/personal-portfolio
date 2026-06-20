import React from "react"

interface SectionHeadingProps {
  children: React.ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
      {children}
    </h2>
  );
}
