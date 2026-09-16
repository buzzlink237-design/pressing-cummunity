import { BIRTH_MAX, BIRTH_MIN } from "./constants"

/** Try to read a birth date from free text into YYYY-MM-DD when possible. */
export function parseBirthDateIso(raw: string): string | null {
  const value = raw.trim()
  if (!value) return null

  const iso = value.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/)
  if (iso) return toIso(Number(iso[1]), Number(iso[2]), Number(iso[3]))

  const dmy = value.match(/^(\d{1,2})[/.\-](\d{1,2})[/.\-](\d{4})$/)
  if (dmy) return toIso(Number(dmy[3]), Number(dmy[2]), Number(dmy[1]))

  const mdy = value.match(/^(\d{1,2})[/.\-](\d{1,2})[/.\-](\d{2})$/)
  if (mdy) {
    const year = 2000 + Number(mdy[3])
    // Prefer day/month/year (common in Cameroon) when both parts ≤ 12 is ambiguous.
    return toIso(year, Number(mdy[2]), Number(mdy[1]))
  }

  return null
}

function toIso(year: number, month: number, day: number): string | null {
  if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) return null
  if (year < 1900 || year > 2100 || month < 1 || month > 12 || day < 1 || day > 31) return null
  const date = new Date(Date.UTC(year, month - 1, day))
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null
  }
  return `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`
}

/** True when the date can be parsed and falls outside the usual BRAVO age window. */
export function isBirthDateOutOfRange(raw: string): boolean {
  const iso = parseBirthDateIso(raw)
  if (!iso) return false
  return iso < BIRTH_MIN || iso > BIRTH_MAX
}
