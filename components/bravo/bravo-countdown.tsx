"use client"

import { useEffect, useState } from "react"

import {
  getBravoCountdown,
  getBravoWindow,
  type BravoCountdown as BravoCountdownParts,
  type BravoWindowStatus,
} from "@/lib/bravo/window"
import { cn } from "@/lib/utils"

const UNITS = [
  { key: "days", fr: "jours", en: "days" },
  { key: "hours", fr: "heures", en: "hours" },
  { key: "minutes", fr: "min", en: "min" },
  { key: "seconds", fr: "sec", en: "sec" },
] as const

function pad(value: number) {
  return String(value).padStart(2, "0")
}

export function useBravoWindow() {
  const [status, setStatus] = useState<BravoWindowStatus>(() => getBravoWindow())

  useEffect(() => {
    const sync = () => setStatus(getBravoWindow())
    sync()
    const id = window.setInterval(sync, 1000)
    return () => window.clearInterval(id)
  }, [])

  return status
}

export function BravoCountdown({ className }: { className?: string }) {
  const [parts, setParts] = useState<BravoCountdownParts | null>(null)

  useEffect(() => {
    const tick = () => setParts(getBravoCountdown())
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [])

  if (parts && parts.totalMs <= 0) return null

  const display = parts ?? { days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 1 }

  return (
    <div
      className={cn(
        "rounded-[1.65rem] bg-ink px-5 py-5 text-white sm:px-6",
        className
      )}
      role="timer"
      aria-live="polite"
      aria-label="Temps restant avant l'ouverture des candidatures"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange">
        Ouverture lundi 21 septembre · 00 h 00
      </p>
      <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-3">
        {UNITS.map((unit) => (
          <div
            key={unit.key}
            className="rounded-2xl bg-white/10 px-2 py-3 text-center sm:py-4"
          >
            <p className="font-heading text-2xl tabular-nums tracking-tight sm:text-3xl">
              {parts ? pad(display[unit.key]) : "––"}
            </p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/55">
              {unit.fr}
            </p>
            <p className="text-[10px] uppercase tracking-wider text-white/35">{unit.en}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-base leading-snug text-white/75 sm:text-lg">
        L&apos;envoi s&apos;ouvrira automatiquement. Vous pouvez déjà préparer votre
        dossier.
      </p>
      <p className="mt-1 text-base leading-snug text-white/45 sm:text-lg">
        Submissions open automatically. You can prepare your file now.
      </p>
    </div>
  )
}
