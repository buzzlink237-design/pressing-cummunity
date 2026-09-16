import { z } from "zod"

import {
  BRAVO_YEAR,
  CANAUX,
  ETAB_TYPES,
  FOYER_SITUATIONS,
  INSCRIPTION_PAYEE,
  OPERATEURS,
  PARENT_LIENS,
  PREMIER_FAMILLE,
  REGIONS,
  REUSSIR_MAX,
  SEXES,
  SOUS_SYSTEMES,
  USAGE_DON_MAX,
} from "./constants"
import { isBirthDateOutOfRange } from "./birth"
import { normalizeCameroonPhone } from "./phone"

export type BravoUtm = {
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_content: string
  utm_term: string
  utm: string
}

const requiredText = (message: string) => z.string().trim().min(1, message)

function requiredEnum<T extends readonly [string, ...string[]]>(values: T, message: string) {
  return z.enum(values, { error: message })
}

function requiredPhone(message: string) {
  return requiredText(message).refine((value) => Boolean(normalizeCameroonPhone(value)), message)
}

function optionalPhone(message: string) {
  return z.string().trim().refine((value) => value === "" || Boolean(normalizeCameroonPhone(value)), message)
}

const requiredTrue = (message: string) =>
  z.boolean().refine((value) => value === true, message)

export const bravoFormSchema = z.object({
  candidat_nom: requiredText("Indiquez le nom de famille."),
  candidat_prenom: requiredText("Indiquez le prénom."),
  candidat_naissance: requiredText("Indiquez votre date de naissance.")
    .max(40, "La date de naissance est trop longue."),
  candidat_sexe: requiredEnum(SEXES, "Indiquez le sexe."),
  candidat_whatsapp: requiredPhone(
    "Indiquez un numéro WhatsApp camerounais (+237 6XX XX XX XX)."
  ),
  candidat_email: z
    .string()
    .trim()
    .toLowerCase()
    .refine(
      (value) => value === "" || z.email().safeParse(value).success,
      "Indiquez une adresse e-mail valide, ou laissez le champ vide."
    ),
  candidat_region: requiredEnum(REGIONS, "Choisissez la région où vous habitez."),
  candidat_ville: requiredText("Indiquez votre ville ou village."),
  sous_systeme: requiredEnum(SOUS_SYSTEMES, "Indiquez l'examen passé."),
  serie: requiredText("Indiquez la série ou la combinaison."),
  annee: z.literal(BRAVO_YEAR, { error: "L'opération concerne uniquement 2026." }),
  etab_region: requiredEnum(REGIONS, "Choisissez la région de l'établissement."),
  etab_type: requiredEnum(ETAB_TYPES, "Indiquez le type d'établissement."),
  projet_filiere: requiredText("Indiquez ce que vous voulez étudier."),
  projet_etab: z.string().trim(),
  parent_nom: requiredText("Indiquez le nom du parent ou du responsable."),
  parent_lien: requiredEnum(PARENT_LIENS, "Indiquez le lien avec le parent."),
  parent_momo: requiredPhone("Indiquez le numéro Mobile Money du parent (+237 6XX XX XX XX)."),
  parent_operateur: requiredEnum(OPERATEURS, "Choisissez l'opérateur Mobile Money."),
  parent_nom_compte: requiredText("Indiquez le nom exact enregistré sur le compte Mobile Money."),
  parent_whatsapp: optionalPhone("WhatsApp du parent : numéro invalide, ou laissez vide."),
  parent_informe: requiredTrue(
    "Le parent ou responsable doit être informé de cette candidature."
  ),
  inscription_payee: requiredEnum(
    INSCRIPTION_PAYEE,
    "Indiquez si l'inscription universitaire est déjà payée."
  ),
  premier_famille: requiredEnum(
    PREMIER_FAMILLE,
    "Indiquez si vous êtes le premier de la famille dans le supérieur."
  ),
  foyer_situation: requiredEnum(FOYER_SITUATIONS, "Indiquez la situation du foyer."),
  foyer_charges: z
    .string()
    .trim()
    .min(1, "Indiquez le nombre de personnes du foyer, entre 1 et 30.")
    .refine((value) => {
      const parsed = Number.parseInt(value, 10)
      return Number.isInteger(parsed) && parsed >= 1 && parsed <= 30
    }, "Indiquez le nombre de personnes du foyer, entre 1 et 30."),
  foyer_prise_en_charge: requiredText("Indiquez qui prend en charge les frais de scolarité."),
  usage_don: requiredText("Précisez à quoi serviraient les 50 000 FCFA.").max(
    USAGE_DON_MAX,
    `La réponse sur l'usage du don dépasse ${USAGE_DON_MAX} caractères.`
  ),
  reussir: requiredText("Répondez en une phrase : pour vous, réussir, c'est quoi ?").max(
    REUSSIR_MAX,
    `La phrase sur réussir dépasse ${REUSSIR_MAX} caractères.`
  ),
  dispo_live: requiredTrue("Confirmez votre présence en ligne le 26 septembre."),
  autorisation_image: requiredTrue("L'autorisation de citer le prénom et la ville est requise."),
  sincerite: requiredTrue("Certifiez que les informations sont exactes."),
  canal: requiredEnum(CANAUX, "Indiquez comment vous avez connu BRAVO 2026."),
  base_contact: z.boolean(),
})

export type BravoFormInput = z.input<typeof bravoFormSchema>
export type BravoFormValues = z.output<typeof bravoFormSchema>

export const BRAVO_SECTION_FIELDS = [
  [
    "candidat_nom",
    "candidat_prenom",
    "candidat_naissance",
    "candidat_sexe",
    "candidat_whatsapp",
    "candidat_email",
    "candidat_region",
    "candidat_ville",
  ],
  [
    "sous_systeme",
    "serie",
    "annee",
    "etab_region",
    "etab_type",
    "projet_filiere",
    "projet_etab",
  ],
  [
    "parent_nom",
    "parent_lien",
    "parent_momo",
    "parent_operateur",
    "parent_nom_compte",
    "parent_whatsapp",
    "parent_informe",
  ],
  [
    "inscription_payee",
    "premier_famille",
    "foyer_situation",
    "foyer_charges",
    "foyer_prise_en_charge",
  ],
  ["usage_don", "reussir"],
  ["dispo_live", "autorisation_image", "sincerite", "canal", "base_contact"],
] as const satisfies readonly (readonly (keyof BravoFormValues)[])[]

const utmSchema = z.object({
  utm_source: z.string().optional().default(""),
  utm_medium: z.string().optional().default(""),
  utm_campaign: z.string().optional().default(""),
  utm_content: z.string().optional().default(""),
  utm_term: z.string().optional().default(""),
  utm: z.string().optional().default(""),
})

export type BravoApplication = Omit<
  BravoFormValues,
  "foyer_charges" | "candidat_whatsapp" | "parent_momo" | "parent_whatsapp"
> & {
  foyer_charges: number
  candidat_whatsapp: string
  parent_momo: string
  parent_whatsapp: string
  utm: BravoUtm
  alerte_numeros_identiques: boolean
  verif_age: boolean
}

export type BravoParseResult =
  | { ok: true; application: BravoApplication }
  | { ok: false; error: string; ignored?: boolean }

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : ""
}

export function emptyUtm(): BravoUtm {
  return {
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    utm: "",
  }
}

export function parseUtmFromSearch(
  params: Record<string, string | string[] | undefined>
): BravoUtm {
  const first = (key: string) => {
    const value = params[key]
    return (Array.isArray(value) ? value[0] : value)?.trim() ?? ""
  }
  const utm_source = first("utm_source")
  const utm_medium = first("utm_medium")
  const utm_campaign = first("utm_campaign")
  const utm_content = first("utm_content")
  const utm_term = first("utm_term")
  const parts = [
    utm_source && `source=${utm_source}`,
    utm_medium && `medium=${utm_medium}`,
    utm_campaign && `campaign=${utm_campaign}`,
    utm_content && `content=${utm_content}`,
    utm_term && `term=${utm_term}`,
  ].filter(Boolean)
  return {
    utm_source,
    utm_medium,
    utm_campaign,
    utm_content,
    utm_term,
    utm: parts.join("&"),
  }
}

export function defaultBravoFormValues(): BravoFormInput {
  return {
    candidat_nom: "",
    candidat_prenom: "",
    candidat_naissance: "",
    candidat_sexe: "" as BravoFormInput["candidat_sexe"],
    candidat_whatsapp: "",
    candidat_email: "",
    candidat_region: "" as BravoFormInput["candidat_region"],
    candidat_ville: "",
    sous_systeme: "" as BravoFormInput["sous_systeme"],
    serie: "",
    annee: BRAVO_YEAR,
    etab_region: "" as BravoFormInput["etab_region"],
    etab_type: "" as BravoFormInput["etab_type"],
    projet_filiere: "",
    projet_etab: "",
    parent_nom: "",
    parent_lien: "" as BravoFormInput["parent_lien"],
    parent_momo: "",
    parent_operateur: "" as BravoFormInput["parent_operateur"],
    parent_nom_compte: "",
    parent_whatsapp: "",
    parent_informe: false,
    inscription_payee: "" as BravoFormInput["inscription_payee"],
    premier_famille: "" as BravoFormInput["premier_famille"],
    foyer_situation: "" as BravoFormInput["foyer_situation"],
    foyer_charges: "",
    foyer_prise_en_charge: "",
    usage_don: "",
    reussir: "",
    dispo_live: false,
    autorisation_image: false,
    sincerite: false,
    canal: "" as BravoFormInput["canal"],
    base_contact: true,
  }
}

function readUtm(input: Record<string, unknown>): BravoUtm {
  const parsed = utmSchema.safeParse(
    input.utm && typeof input.utm === "object"
      ? input.utm
      : {
          utm_source: input.utm_source,
          utm_medium: input.utm_medium,
          utm_campaign: input.utm_campaign,
          utm_content: input.utm_content,
          utm_term: input.utm_term,
          utm: input.utm,
        }
  )
  return parsed.success ? parsed.data : emptyUtm()
}

function asBool(value: unknown, fallback = false) {
  if (value === true || value === "true" || value === "on" || value === "oui" || value === "1") {
    return true
  }
  if (value === false || value === "false" || value === "off" || value === "non" || value === "0") {
    return false
  }
  return fallback
}

export function parseBravoApplication(input: Record<string, unknown>): BravoParseResult {
  if (asString(input.website)) {
    return { ok: false, error: "ignored", ignored: true }
  }

  const parsed = bravoFormSchema.safeParse({
    ...input,
    foyer_charges: input.foyer_charges == null ? "" : String(input.foyer_charges),
    annee: asString(input.annee) || BRAVO_YEAR,
    parent_informe: asBool(input.parent_informe),
    dispo_live: asBool(input.dispo_live),
    autorisation_image: asBool(input.autorisation_image),
    sincerite: asBool(input.sincerite),
    base_contact: input.base_contact === undefined ? true : asBool(input.base_contact, true),
  })
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message || "Formulaire incomplet." }
  }

  const data = parsed.data
  const candidat_whatsapp = normalizeCameroonPhone(data.candidat_whatsapp) ?? data.candidat_whatsapp
  const parent_momo = normalizeCameroonPhone(data.parent_momo) ?? data.parent_momo
  const parent_whatsapp = data.parent_whatsapp
    ? (normalizeCameroonPhone(data.parent_whatsapp) ?? data.parent_whatsapp)
    : ""

  return {
    ok: true,
    application: {
      ...data,
      foyer_charges: Number.parseInt(data.foyer_charges, 10),
      candidat_whatsapp,
      parent_momo,
      parent_whatsapp,
      utm: readUtm(input),
      alerte_numeros_identiques: candidat_whatsapp === parent_momo,
      verif_age: isBirthDateOutOfRange(data.candidat_naissance),
    },
  }
}
