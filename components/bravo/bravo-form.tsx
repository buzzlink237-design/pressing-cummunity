"use client"

import { useMemo, useState } from "react"
import { Controller, useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Field, fieldAreaClass, fieldControlClass } from "@/components/forms/field"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  BRAVO_DRAFT_KEY,
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
  BIRTH_MAX,
  BIRTH_MIN,
} from "@/lib/bravo/constants"
import { PARENT_SECTION_INTRO } from "@/lib/bravo/messages"
import { formatPhoneInput, normalizeCameroonPhone } from "@/lib/bravo/phone"
import {
  BRAVO_SECTION_FIELDS,
  bravoFormSchema,
  defaultBravoFormValues,
  emptyUtm,
  type BravoFormInput,
  type BravoUtm,
} from "@/lib/bravo/schema"
import { cn } from "@/lib/utils"

import { BravoCountdown } from "./bravo-countdown"
import { CheckRow, ChoiceGroup, SelectField, TextField } from "./bravo-fields"

const SECTIONS = [
  { id: "A", title: "Le candidat" },
  { id: "B", title: "L'examen de 2026" },
  { id: "C", title: "Le parent ou responsable" },
  { id: "D", title: "La situation" },
  { id: "E", title: "Deux réponses courtes" },
  { id: "F", title: "Engagements et canal" },
] as const

function loadDraft(): BravoFormInput {
  if (typeof window === "undefined") return defaultBravoFormValues()
  try {
    const raw = window.localStorage.getItem(BRAVO_DRAFT_KEY)
    if (!raw) return defaultBravoFormValues()
    return { ...defaultBravoFormValues(), ...(JSON.parse(raw) as Partial<BravoFormInput>) }
  } catch {
    return defaultBravoFormValues()
  }
}

function persistDraft(values: BravoFormInput) {
  try {
    window.localStorage.setItem(BRAVO_DRAFT_KEY, JSON.stringify(values))
  } catch {
    /* quota / private mode */
  }
}

export function BravoForm({
  utm,
  canSubmit,
  showCountdown,
  closedMessage,
  onSubmitted,
}: {
  utm: BravoUtm
  canSubmit: boolean
  showCountdown?: boolean
  closedMessage?: string
  onSubmitted: (result: { numero: string; prenom: string }) => void
}) {
  const [section, setSection] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [honeypot, setHoneypot] = useState("")

  const form = useForm<BravoFormInput>({
    resolver: zodResolver(bravoFormSchema),
    defaultValues: loadDraft(),
    mode: "onSubmit",
    reValidateMode: "onChange",
  })

  const {
    control,
    register,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors, isSubmitting },
  } = form

  const candidatWhatsappReg = register("candidat_whatsapp")
  const parentMomoReg = register("parent_momo")
  const parentWhatsappReg = register("parent_whatsapp")

  const usageDon = useWatch({ control, name: "usage_don" }) ?? ""
  const reussir = useWatch({ control, name: "reussir" }) ?? ""
  const candidatWhatsapp = useWatch({ control, name: "candidat_whatsapp" }) ?? ""
  const parentMomo = useWatch({ control, name: "parent_momo" }) ?? ""
  const naissance = useWatch({ control, name: "candidat_naissance" }) ?? ""

  const candidatePhone = normalizeCameroonPhone(candidatWhatsapp)
  const parentPhone = normalizeCameroonPhone(parentMomo)
  const sameNumber = Boolean(candidatePhone && parentPhone && candidatePhone === parentPhone)
  const ageFlag = Boolean(naissance && (naissance < BIRTH_MIN || naissance > BIRTH_MAX))
  const progress = useMemo(() => ((section + 1) / SECTIONS.length) * 100, [section])
  const current = SECTIONS[section]
  const last = section === SECTIONS.length - 1

  async function goNext() {
    const fields = [...BRAVO_SECTION_FIELDS[section]]
    const ok = await trigger(fields)
    if (!ok) {
      const message = fields
        .map((name) => form.getFieldState(name).error?.message)
        .find(Boolean)
      setError(message || "Complétez cette section.")
      return
    }
    setError(null)
    persistDraft(form.getValues())
    setSection((currentSection) => Math.min(currentSection + 1, SECTIONS.length - 1))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  function goBack() {
    setError(null)
    persistDraft(form.getValues())
    setSection((currentSection) => Math.max(currentSection - 1, 0))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const onValid = handleSubmit(async (values) => {
    if (!canSubmit) {
      setError(closedMessage || "Les candidatures ne sont pas encore ouvertes.")
      return
    }
    setError(null)
    try {
      const response = await fetch("/api/bravo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          website: honeypot,
          utm: utm.utm ? utm : emptyUtm(),
          utm_source: utm.utm_source,
          utm_medium: utm.utm_medium,
          utm_campaign: utm.utm_campaign,
          utm_content: utm.utm_content,
          utm_term: utm.utm_term,
        }),
      })
      const payload = (await response.json()) as { error?: string; numero?: string }
      if (!response.ok || !payload.numero) {
        throw new Error(payload.error || "Envoi impossible.")
      }
      onSubmitted({ numero: payload.numero, prenom: values.candidat_prenom })
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Envoi impossible.")
    }
  })

  return (
    <form
      className="mx-auto max-w-xl"
      onChange={() => persistDraft(form.getValues())}
      onSubmit={(event) => {
        event.preventDefault()
        if (last) void onValid()
        else void goNext()
      }}
      noValidate
    >
      <div className="mb-6">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-teal uppercase">
          Section {current.id} · {section + 1}/{SECTIONS.length}
        </p>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/10">
          <div className="h-full rounded-full bg-teal transition-[width]" style={{ width: `${progress}%` }} />
        </div>
        <h2 className="mt-3 text-2xl tracking-tight text-ink">{current.title}</h2>
      </div>

      {section === 0 ? (
        <div className="grid gap-4">
          <TextField
            id="candidat_nom"
            label="Nom(s) de famille / Surname(s)"
            autoComplete="family-name"
            error={errors.candidat_nom?.message}
            {...register("candidat_nom")}
          />
          <TextField
            id="candidat_prenom"
            label="Prénom(s) / First name(s)"
            autoComplete="given-name"
            error={errors.candidat_prenom?.message}
            {...register("candidat_prenom")}
          />
          <Field
            id="candidat_naissance"
            label="Date de naissance / Date of birth"
            error={errors.candidat_naissance?.message}
          >
            <Input
              id="candidat_naissance"
              type="date"
              className={cn(fieldControlClass, errors.candidat_naissance && "border-red-300")}
              {...register("candidat_naissance")}
            />
          </Field>
          {ageFlag ? (
            <p className="rounded-xl bg-orange/15 px-3 py-2 text-sm leading-relaxed text-ink/80">
              Cette date est hors des bornes habituelles (2000–2011). Vous pouvez envoyer : le
              dossier sera vérifié manuellement.
            </p>
          ) : null}
          <Field id="candidat_sexe" label="Sexe / Sex">
            <Controller
              name="candidat_sexe"
              control={control}
              render={({ field }) => (
                <ChoiceGroup
                  name={field.name}
                  value={field.value}
                  options={SEXES}
                  error={errors.candidat_sexe?.message}
                  onChange={field.onChange}
                  columns={2}
                />
              )}
            />
          </Field>
          <TextField
            id="candidat_whatsapp"
            label="Votre numéro WhatsApp — +237 6XX XX XX XX"
            inputMode="tel"
            autoComplete="tel"
            error={errors.candidat_whatsapp?.message}
            {...candidatWhatsappReg}
            onBlur={(event) => {
              candidatWhatsappReg.onBlur(event)
              setValue("candidat_whatsapp", formatPhoneInput(event.target.value), {
                shouldValidate: Boolean(errors.candidat_whatsapp),
              })
            }}
          />
          <TextField
            id="candidat_email"
            label="Adresse e-mail, si vous en avez une"
            type="email"
            autoComplete="email"
            error={errors.candidat_email?.message}
            {...register("candidat_email")}
          />
          <Controller
            name="candidat_region"
            control={control}
            render={({ field }) => (
              <SelectField
                id="candidat_region"
                label="Région où vous habitez"
                placeholder="Choisir une région"
                options={REGIONS}
                value={field.value}
                error={errors.candidat_region?.message}
                onChange={field.onChange}
              />
            )}
          />
          <TextField
            id="candidat_ville"
            label="Ville ou village"
            error={errors.candidat_ville?.message}
            {...register("candidat_ville")}
          />
        </div>
      ) : null}

      {section === 1 ? (
        <div className="grid gap-4">
          <Field id="sous_systeme" label="Vous avez passé :">
            <Controller
              name="sous_systeme"
              control={control}
              render={({ field }) => (
                <ChoiceGroup
                  name={field.name}
                  value={field.value}
                  options={SOUS_SYSTEMES}
                  error={errors.sous_systeme?.message}
                  onChange={field.onChange}
                />
              )}
            />
          </Field>
          <TextField
            id="serie"
            label="Série ou combinaison — ex. A4, C, D, Arts, Science"
            error={errors.serie?.message}
            {...register("serie")}
          />
          <Field id="annee" label="Année d'obtention">
            <Input id="annee" readOnly value={BRAVO_YEAR} className={cn(fieldControlClass, "bg-ink/4")} />
            <input type="hidden" {...register("annee")} />
          </Field>
          <Controller
            name="etab_region"
            control={control}
            render={({ field }) => (
              <SelectField
                id="etab_region"
                label="Région de l'établissement où vous avez composé"
                placeholder="Choisir une région"
                options={REGIONS}
                value={field.value}
                error={errors.etab_region?.message}
                onChange={field.onChange}
              />
            )}
          />
          <Field id="etab_type" label="Votre établissement">
            <Controller
              name="etab_type"
              control={control}
              render={({ field }) => (
                <ChoiceGroup
                  name={field.name}
                  value={field.value}
                  options={ETAB_TYPES}
                  error={errors.etab_type?.message}
                  onChange={field.onChange}
                />
              )}
            />
          </Field>
          <TextField
            id="projet_filiere"
            label="Que voulez-vous étudier à la rentrée ?"
            error={errors.projet_filiere?.message}
            {...register("projet_filiere")}
          />
          <TextField
            id="projet_etab"
            label="Dans quel établissement espérez-vous entrer ?"
            error={errors.projet_etab?.message}
            {...register("projet_etab")}
          />
        </div>
      ) : null}

      {section === 2 ? (
        <div className="grid gap-4">
          <p className="rounded-2xl bg-ink/4 px-4 py-3 text-base leading-relaxed text-ink/75">
            {PARENT_SECTION_INTRO}
          </p>
          <TextField
            id="parent_nom"
            label="Nom et prénom du parent ou du responsable"
            error={errors.parent_nom?.message}
            {...register("parent_nom")}
          />
          <Controller
            name="parent_lien"
            control={control}
            render={({ field }) => (
              <SelectField
                id="parent_lien"
                label="Son lien avec vous"
                placeholder="Choisir"
                options={PARENT_LIENS}
                value={field.value}
                error={errors.parent_lien?.message}
                onChange={field.onChange}
              />
            )}
          />
          <TextField
            id="parent_momo"
            label="Son numéro Mobile Money — recevra les 50 000 FCFA"
            inputMode="tel"
            error={errors.parent_momo?.message}
            {...parentMomoReg}
            onBlur={(event) => {
              parentMomoReg.onBlur(event)
              setValue("parent_momo", formatPhoneInput(event.target.value), {
                shouldValidate: Boolean(errors.parent_momo),
              })
            }}
          />
          {sameNumber ? (
            <p className="rounded-xl bg-orange/15 px-3 py-2 text-sm leading-relaxed text-ink/80">
              Le numéro du parent doit être le sien. Vous pouvez quand même envoyer : le dossier
              sera signalé.
            </p>
          ) : null}
          <Field id="parent_operateur" label="Opérateur">
            <Controller
              name="parent_operateur"
              control={control}
              render={({ field }) => (
                <ChoiceGroup
                  name={field.name}
                  value={field.value}
                  options={OPERATEURS}
                  error={errors.parent_operateur?.message}
                  onChange={field.onChange}
                />
              )}
            />
          </Field>
          <TextField
            id="parent_nom_compte"
            label="Le nom exact enregistré sur ce compte Mobile Money"
            error={errors.parent_nom_compte?.message}
            {...register("parent_nom_compte")}
          />
          <TextField
            id="parent_whatsapp"
            label="Son numéro WhatsApp, si différent du numéro Mobile Money"
            inputMode="tel"
            error={errors.parent_whatsapp?.message}
            {...parentWhatsappReg}
            onBlur={(event) => {
              parentWhatsappReg.onBlur(event)
              if (event.target.value) {
                setValue("parent_whatsapp", formatPhoneInput(event.target.value), {
                  shouldValidate: Boolean(errors.parent_whatsapp),
                })
              }
            }}
          />
          <Controller
            name="parent_informe"
            control={control}
            render={({ field }) => (
              <CheckRow
                id="parent_informe"
                checked={Boolean(field.value)}
                error={errors.parent_informe?.message}
                onChange={field.onChange}
              >
                Mon parent/responsable est informé de cette candidature et accepte de recevoir le don
                à son nom.
              </CheckRow>
            )}
          />
        </div>
      ) : null}

      {section === 3 ? (
        <div className="grid gap-4">
          <Field
            id="inscription_payee"
            label="Avez-vous déjà payé votre inscription pour la rentrée 2026-2027 ?"
          >
            <Controller
              name="inscription_payee"
              control={control}
              render={({ field }) => (
                <ChoiceGroup
                  name={field.name}
                  value={field.value}
                  options={INSCRIPTION_PAYEE}
                  error={errors.inscription_payee?.message}
                  onChange={field.onChange}
                />
              )}
            />
          </Field>
          <Field
            id="premier_famille"
            label="Êtes-vous le premier de votre famille à entrer dans l'enseignement supérieur ?"
          >
            <Controller
              name="premier_famille"
              control={control}
              render={({ field }) => (
                <ChoiceGroup
                  name={field.name}
                  value={field.value}
                  options={PREMIER_FAMILLE}
                  error={errors.premier_famille?.message}
                  onChange={field.onChange}
                />
              )}
            />
          </Field>
          <Controller
            name="foyer_situation"
            control={control}
            render={({ field }) => (
              <SelectField
                id="foyer_situation"
                label="Votre foyer aujourd'hui"
                placeholder="Choisir"
                options={FOYER_SITUATIONS}
                value={field.value}
                error={errors.foyer_situation?.message}
                onChange={field.onChange}
              />
            )}
          />
          <TextField
            id="foyer_charges"
            label="Combien de personnes vivent du même revenu que vous à la maison ?"
            type="number"
            min={1}
            max={30}
            inputMode="numeric"
            error={errors.foyer_charges?.message}
            {...register("foyer_charges")}
          />
          <TextField
            id="foyer_prise_en_charge"
            label="Qui prend en charge vos frais de scolarité ?"
            error={errors.foyer_prise_en_charge?.message}
            {...register("foyer_prise_en_charge")}
          />
        </div>
      ) : null}

      {section === 4 ? (
        <div className="grid gap-4">
          <Field
            id="usage_don"
            label="Si vous receviez les 50 000 FCFA, à quoi serviraient-ils exactement ? Soyez précis."
            hint={`${usageDon.length}/${USAGE_DON_MAX}`}
            error={errors.usage_don?.message}
          >
            <textarea
              id="usage_don"
              maxLength={USAGE_DON_MAX}
              rows={4}
              className={cn(fieldAreaClass, "min-h-32", errors.usage_don && "border-red-300")}
              {...register("usage_don")}
            />
          </Field>
          <Field
            id="reussir"
            label="En une phrase : pour vous, réussir, c'est quoi ?"
            hint={`${reussir.length}/${REUSSIR_MAX}`}
            error={errors.reussir?.message}
          >
            <textarea
              id="reussir"
              maxLength={REUSSIR_MAX}
              rows={3}
              className={cn(fieldAreaClass, "min-h-24", errors.reussir && "border-red-300")}
              {...register("reussir")}
            />
          </Field>
        </div>
      ) : null}

      {section === 5 ? (
        <div className="grid gap-4">
          <Controller
            name="dispo_live"
            control={control}
            render={({ field }) => (
              <CheckRow
                id="dispo_live"
                checked={Boolean(field.value)}
                error={errors.dispo_live?.message}
                onChange={field.onChange}
              >
                Je serai en ligne le samedi 26 septembre entre 19 h 45 et 21 h 30.
              </CheckRow>
            )}
          />
          <Controller
            name="autorisation_image"
            control={control}
            render={({ field }) => (
              <CheckRow
                id="autorisation_image"
                checked={Boolean(field.value)}
                error={errors.autorisation_image?.message}
                onChange={field.onChange}
              >
                J&apos;autorise The Pressing Community à citer mon prénom et ma ville pendant le
                direct et dans son rapport public.
              </CheckRow>
            )}
          />
          <Controller
            name="sincerite"
            control={control}
            render={({ field }) => (
              <CheckRow
                id="sincerite"
                checked={Boolean(field.value)}
                error={errors.sincerite?.message}
                onChange={field.onChange}
              >
                Je certifie que les informations ci-dessus sont exactes.
              </CheckRow>
            )}
          />
          <Controller
            name="canal"
            control={control}
            render={({ field }) => (
              <SelectField
                id="canal"
                label="Comment avez-vous connu BRAVO 2026 ?"
                placeholder="Choisir"
                options={CANAUX}
                value={field.value}
                error={errors.canal?.message}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            name="base_contact"
            control={control}
            render={({ field }) => (
              <CheckRow
                id="base_contact"
                checked={Boolean(field.value)}
                onChange={field.onChange}
              >
                J&apos;accepte de recevoir les informations de The Pressing Community : bourses,
                ateliers, opportunités. Je peux me désinscrire à tout moment.
              </CheckRow>
            )}
          />
          <p className="text-sm leading-relaxed text-ink/50">
            Gratuit, sans exception. Nous ne demandons jamais d&apos;argent.
          </p>
        </div>
      ) : null}

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={honeypot}
        onChange={(event) => setHoneypot(event.target.value)}
        className="hidden"
        aria-hidden
      />

      {error ? (
        <p className="mt-5 text-base text-red-700" role="alert">
          {error}
        </p>
      ) : null}

      {last && !canSubmit && showCountdown ? <BravoCountdown className="mt-7" /> : null}

      <div className={cn("flex flex-col gap-3 sm:flex-row", last && !canSubmit && showCountdown ? "mt-4" : "mt-7")}>
        {section > 0 ? (
          <Button
            type="button"
            variant="outline"
            onClick={goBack}
            className="h-12 w-full rounded-full text-base sm:w-auto sm:min-w-32"
          >
            Retour
          </Button>
        ) : null}
        <Button
          type="submit"
          disabled={isSubmitting || (last && !canSubmit)}
          className="h-12 w-full rounded-full px-7 text-base font-semibold sm:flex-1"
        >
          {last
            ? isSubmitting
              ? "Envoi…"
              : canSubmit
                ? "Envoyer ma candidature"
                : "Inscription le 21 septembre"
            : "Continuer"}
        </Button>
      </div>
      {last && !canSubmit && closedMessage && !showCountdown ? (
        <p className="mt-3 text-sm leading-relaxed text-ink/55">{closedMessage}</p>
      ) : null}
    </form>
  )
}
