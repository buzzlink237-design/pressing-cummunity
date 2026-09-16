import type { ComponentProps, ReactNode } from "react"

import { Field, SelectControl, fieldControlClass, fieldDescribedBy } from "@/components/forms/field"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function ChoiceGroup({
  name,
  value,
  options,
  onChange,
  error,
  columns = 1,
  labelledBy,
}: {
  name: string
  value: string
  options: readonly string[]
  onChange: (value: string) => void
  error?: string
  columns?: 1 | 2
  labelledBy?: string
}) {
  const errorId = error ? `${name}-error` : undefined
  return (
    <div
      className="grid gap-2"
      role="radiogroup"
      aria-labelledby={labelledBy}
      aria-invalid={error ? true : undefined}
      aria-describedby={errorId}
    >
      <div className={cn("grid gap-2", columns === 2 && "sm:grid-cols-2")}>
        {options.map((option) => {
          const selected = value === option
          return (
            <label
              key={option}
              className={cn(
                "flex min-h-12 cursor-pointer items-center rounded-xl border px-4 py-3 text-base leading-snug",
                selected
                  ? "border-teal bg-teal/8 text-ink ring-2 ring-teal/20"
                  : error
                    ? "border-red-300 bg-white text-ink/80"
                    : "border-ink/12 bg-white text-ink/80"
              )}
            >
              <input
                type="radio"
                name={name}
                value={option}
                checked={selected}
                onChange={() => onChange(option)}
                className="sr-only"
              />
              {option}
            </label>
          )
        })}
      </div>
      {error ? (
        <p id={errorId} className="text-sm leading-relaxed text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export function CheckRow({
  id,
  checked,
  onChange,
  error,
  children,
}: {
  id: string
  checked: boolean
  onChange: (checked: boolean) => void
  error?: string
  children: ReactNode
}) {
  const errorId = error ? `${id}-error` : undefined
  return (
    <div className="grid gap-2">
      <label
        htmlFor={id}
        className={cn(
          "flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3.5 text-base leading-snug",
          error ? "border-red-300" : checked ? "border-teal bg-teal/8" : "border-ink/12 bg-white"
        )}
      >
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          className="mt-1 size-5 shrink-0 accent-teal"
        />
        <span>{children}</span>
      </label>
      {error ? (
        <p id={errorId} className="text-sm leading-relaxed text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export function TextField({
  id,
  label,
  hint,
  error,
  className,
  ...props
}: {
  id: string
  label: string
  hint?: string
  error?: string
  className?: string
} & ComponentProps<typeof Input>) {
  return (
    <Field id={id} label={label} hint={hint} error={error} className={className}>
      <Input
        id={id}
        name={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={fieldDescribedBy(id, hint, error)}
        className={cn(fieldControlClass, error && "border-red-300")}
        {...props}
      />
    </Field>
  )
}

export function SelectField({
  id,
  label,
  hint,
  error,
  value,
  placeholder,
  options,
  onChange,
}: {
  id: string
  label: string
  hint?: string
  error?: string
  value: string
  placeholder: string
  options: readonly string[]
  onChange: (value: string) => void
}) {
  return (
    <Field id={id} label={label} hint={hint} error={error}>
      <SelectControl
        id={id}
        name={id}
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={fieldDescribedBy(id, hint, error)}
        onChange={(event) => onChange(event.target.value)}
        className={error ? "border-red-300" : undefined}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </SelectControl>
    </Field>
  )
}
