"use client"

import { useState } from "react"

import type { BravoPublicCopy } from "@/lib/bravo/config"
import { emptyUtm, type BravoUtm } from "@/lib/bravo/schema"
import {
  ImageField,
  PanelContent,
  StackPanel,
  StackTrack,
} from "@/components/layout/viewport"
import { FadeIn } from "@/components/motion/fade-in"
import { CtaLink, CtaRow } from "@/components/ui/cta-link"

import { BravoConfirm } from "./bravo-confirm"
import { useBravoWindow } from "./bravo-countdown"
import { BravoForm } from "./bravo-form"
import { BravoIntro } from "./bravo-intro"

const CONFIRM_KEY = "bravo-2026-confirmation"
const UTM_KEY = "bravo-2026-utm"

function rememberUtm(incoming: BravoUtm): BravoUtm {
  try {
    const storedRaw = window.localStorage.getItem(UTM_KEY)
    const stored = storedRaw ? (JSON.parse(storedRaw) as BravoUtm) : emptyUtm()
    const chosen = incoming.utm ? incoming : stored.utm ? stored : incoming
    if (chosen.utm) window.localStorage.setItem(UTM_KEY, JSON.stringify(chosen))
    return chosen
  } catch {
    return incoming
  }
}

type Step = "intro" | "form" | "confirm"

export function BravoCampaign({
  utm,
  copy,
}: {
  utm: BravoUtm
  copy: BravoPublicCopy
}) {
  const status = useBravoWindow()
  const [step, setStep] = useState<Step>("intro")
  const [numero, setNumero] = useState("")
  const [resolvedUtm, setResolvedUtm] = useState(utm)

  function startForm() {
    setResolvedUtm(rememberUtm(utm))
    setStep("form")
    document.getElementById("candidature")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <StackTrack>
      <StackPanel theme="black" flush>
        <ImageField name="youth" label="BRAVO 2026" priority />
        <PanelContent className="items-center justify-end text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange">
              BRAVO 2026
            </p>
            <h1 className="mx-auto mt-4 max-w-4xl text-3xl leading-[1.08] text-balance sm:mt-5 sm:text-5xl md:text-6xl">
              Vous avez réussi. Maintenant, que ça compte.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg">
              Vingt jeunes, 50 000 FCFA chacun. Dix francophones, dix anglophones,
              de toutes les régions. Gratuit, sans compte à créer.
            </p>
            {status === "closed" ? (
              <p className="mx-auto mt-8 max-w-xl text-base text-white/70">
                Les candidatures sont closes. Les vingt noms seront annoncés le
                samedi 26 septembre à 20 h 30, en direct.
              </p>
            ) : (
              <CtaRow>
                <CtaLink href="#candidature" variant="accent">
                  {status === "soon" ? "Préparer ma candidature" : "Candidater — c'est gratuit"}
                </CtaLink>
              </CtaRow>
            )}
          </FadeIn>
        </PanelContent>
      </StackPanel>

      <StackPanel id="candidature" theme="white" pin={false} className="scroll-mt-[var(--header-height)]">
        <div className="mx-auto w-full max-w-6xl px-4 pt-[calc(var(--header-height)+1rem)] pb-16 sm:px-6 sm:pb-20 md:px-12">
          {step === "intro" ? <BravoIntro status={status} onStart={startForm} /> : null}

          {step === "form" ? (
            <div className="mx-auto max-w-xl rounded-[1.6rem] bg-white p-5 ring-1 ring-ink/8 sm:rounded-[1.85rem] sm:p-8">
              <BravoForm
                utm={resolvedUtm}
                canSubmit={status === "open"}
                showCountdown={status === "soon"}
                closedMessage={
                  status === "soon"
                    ? "L'inscription ouvre le lundi 21 septembre 2026 à minuit. Votre saisie est déjà enregistrée sur cet appareil."
                    : "Les candidatures sont closes."
                }
                onSubmitted={({ numero: assigned }) => {
                  setNumero(assigned)
                  setStep("confirm")
                  try {
                    window.sessionStorage.setItem(
                      CONFIRM_KEY,
                      JSON.stringify({ numero: assigned })
                    )
                  } catch {
                    /* ignore */
                  }
                  document.getElementById("candidature")?.scrollIntoView({ behavior: "smooth" })
                }}
              />
            </div>
          ) : null}

          {step === "confirm" ? (
            <div className="mx-auto max-w-xl rounded-[1.6rem] bg-white p-5 ring-1 ring-ink/8 sm:rounded-[1.85rem] sm:p-8">
              <BravoConfirm
                numero={numero}
                copy={copy}
                onAgain={() => {
                  setStep("form")
                  try {
                    window.sessionStorage.removeItem(CONFIRM_KEY)
                  } catch {
                    /* ignore */
                  }
                }}
              />
            </div>
          ) : null}
        </div>
      </StackPanel>
    </StackTrack>
  )
}
