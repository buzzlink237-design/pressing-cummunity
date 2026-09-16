import { cn } from "@/lib/utils"

import { themeClass, type ViewportTheme } from "./themes"

export type StackPanelProps = {
  id?: string
  theme?: ViewportTheme
  flush?: boolean
  pin?: boolean
  /** Vertical scroll-snap for this panel. Disable on long forms / application flows. */
  snap?: boolean
  className?: string
  children: React.ReactNode
}

export function StackPanel({
  id,
  theme = "white",
  flush = true,
  pin = true,
  snap = true,
  className,
  children,
}: StackPanelProps) {
  return (
    <section
      id={id}
      data-stack-panel
      data-theme={theme}
      className={cn(
        "relative w-full min-h-svh",
        snap && "snap-start",
        pin
          ? cn("h-svh max-h-svh overflow-hidden", snap && "snap-always")
          : "overflow-visible",
        !flush && "rounded-t-[2rem] shadow-[0_-18px_50px_rgba(0,0,0,0.18)]",
        themeClass(theme),
        className
      )}
    >
      {children}
    </section>
  )
}
