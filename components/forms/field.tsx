import type { ComponentProps, ReactNode } from "react"

import { cn } from "@/lib/utils"

export const fieldControlClass =
  "h-12 w-full appearance-none rounded-xl border border-ink/12 bg-white px-4 text-base text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] outline-none transition placeholder:text-ink/35 focus-visible:border-teal/55 focus-visible:ring-2 focus-visible:ring-teal/20"

export const fieldAreaClass =
  "min-h-40 w-full resize-y rounded-xl border border-ink/12 bg-white px-4 py-3 text-base leading-relaxed text-ink outline-none transition placeholder:text-ink/35 focus-visible:border-teal/55 focus-visible:ring-2 focus-visible:ring-teal/20"

export function fieldDescribedBy(id: string, hint?: string, error?: string) {
  return [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(Boolean).join(" ") || undefined
}

export function Field({
  id,
  label,
  hint,
  error,
  children,
  className,
}: {
  id: string
  label: string
  hint?: string
  error?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("grid gap-2", className)}>
      <label htmlFor={id} className="text-[0.95rem] font-medium tracking-tight text-ink">
        {label}
      </label>
      {children}
      {hint ? (
        <p id={`${id}-hint`} className="text-sm leading-relaxed text-ink/50">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="text-sm leading-relaxed text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export function SelectControl({
  children,
  className,
  ...props
}: ComponentProps<"select">) {
  return (
    <div className="relative">
      <select {...props} className={cn(fieldControlClass, "pr-10", className)}>
        {children}
      </select>
      <span aria-hidden className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-ink/40">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 6.2 8 10.2 12 6.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  )
}
