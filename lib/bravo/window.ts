export const BRAVO_TIMEZONE = "Africa/Douala"

/** Monday 21 September 2026, 00:00 WAT (kept for display / countdown helpers). */
export const BRAVO_OPENS_AT = "2026-09-21T00:00:00+01:00"

/** Original close: Friday 25 September at midnight WAT. Window gating is disabled. */
export const BRAVO_CLOSES_AT = "2026-09-26T00:00:00+01:00"

export type BravoWindowStatus = "soon" | "open" | "closed"

export type BravoCountdown = {
  totalMs: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

/** Candidatures stay open — no open/close date gate. */
export function getBravoWindow(_now = Date.now()): BravoWindowStatus {
  return "open"
}

export function isBravoOpen(now = Date.now()) {
  return getBravoWindow(now) === "open"
}

export function getBravoCountdown(now = Date.now()): BravoCountdown {
  const totalMs = Math.max(0, Date.parse(BRAVO_OPENS_AT) - now)
  const totalSeconds = Math.floor(totalMs / 1000)
  return {
    totalMs,
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

export function formatWatTimestamp(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: BRAVO_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date)
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? ""
  return `${value("year")}-${value("month")}-${value("day")} ${value("hour")}:${value("minute")}:${value("second")} WAT`
}
