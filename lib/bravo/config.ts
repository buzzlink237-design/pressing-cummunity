export type BravoPublicCopy = {
  liveAccount: string
  whatsappChannel: string
  parentContact: string
}

/** Hardcoded from the official BRAVO 2026 materials (no contact env vars). */
export function getBravoPublicCopy(): BravoPublicCopy {
  return {
    liveAccount: "@lapressingcommunity",
    whatsappChannel: "https://wa.me/237678014289",
    parentContact: "00 237 678 014 289",
  }
}
