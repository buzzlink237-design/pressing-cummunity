import { cn } from "@/lib/utils"

type StackTrackProps = {
  snap?: "y" | "none"
  className?: string
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export function StackTrack({ className, children, snap: _snap, ...props }: StackTrackProps) {
  return (
    <div id="stack-track" className={cn("relative w-full", className)} {...props}>
      {children}
    </div>
  )
}
