"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9 rounded-md border border-zinc-200 dark:border-zinc-800" disabled>
        <div className="h-4 w-4 rounded-full bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-9 w-9 rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
    >
      {isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-zinc-400 hover:text-zinc-50" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-zinc-500 hover:text-zinc-900" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
