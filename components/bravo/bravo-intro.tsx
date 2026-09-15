import { FadeIn } from "@/components/motion/fade-in"
import { Button } from "@/components/ui/button"
import type { BravoWindowStatus } from "@/lib/bravo/window"
import { cn } from "@/lib/utils"

import { BravoCountdown } from "./bravo-countdown"

const facts = [
  {
    fr: "20 jeunes · 50 000 FCFA chacun",
    en: "Twenty young people · 50,000 FCFA each",
    tone: "teal",
    span: "sm:col-span-2",
  },
  {
    fr: "10 francophones, 10 anglophones",
    en: "Ten francophones, ten anglophones",
    tone: "ink",
    span: "",
  },
  {
    fr: "Toutes les régions du Cameroun",
    en: "From every region of Cameroon",
    tone: "paper",
    span: "",
  },
  {
    fr: "Direct le samedi 26 septembre à 20 h 30",
    en: "Live on Saturday 26 September at 8:30 p.m.",
    tone: "paper",
    span: "",
  },
  {
    fr: "Gratuit, moins de cinq minutes. Pas de compte.",
    en: "Free, under five minutes. No account to create.",
    tone: "paper",
    span: "",
  },
  {
    fr: "Versé au parent, sur Mobile Money — jamais au candidat",
    en: "Paid to the parent or guardian, on Mobile Money — never to the candidate",
    tone: "ink",
    span: "sm:col-span-2",
  },
] as const

const toneClass = {
  teal: "bg-teal text-white",
  ink: "bg-ink text-white",
  paper: "bg-paper text-ink ring-1 ring-ink/8",
} as const

export function BravoIntro({
  status,
  onStart,
}: {
  status: BravoWindowStatus
  onStart: () => void
}) {
  return (
    <>
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal">
          The Pressing Community
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl leading-[1.12] sm:mt-4 md:text-5xl">
          BRAVO 2026 — Vous avez réussi. Maintenant, que ça compte.
        </h2>
        <h2 className="mt-3 max-w-3xl text-3xl leading-[1.12] text-ink/70 sm:mt-4 md:text-5xl">
          BRAVO 2026 — You passed. Now let it count.
        </h2>
      </FadeIn>

      <ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {facts.map((fact) => (
          <li
            key={fact.fr}
            className={cn(
              "flex min-h-40 flex-col justify-end rounded-[1.65rem] p-5 sm:p-6",
              toneClass[fact.tone],
              fact.span
            )}
          >
            <p className="text-lg font-medium leading-snug tracking-tight sm:text-xl">{fact.fr}</p>
            <p
              className={cn(
                "mt-2 text-lg leading-snug sm:text-xl",
                fact.tone === "paper" ? "text-ink/55" : "text-white/70"
              )}
            >
              {fact.en}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-4 rounded-[1.65rem] bg-orange px-5 py-5 text-ink sm:px-6">
        <p className="text-lg font-medium leading-snug sm:text-xl">
          Nous ne demandons jamais d&apos;argent à personne, à aucun moment. Si
          quelqu&apos;un vous en réclame en notre nom, c&apos;est une escroquerie.
        </p>
        <p className="mt-2 text-lg leading-snug text-ink/70 sm:text-xl">
          We never ask anyone for money, at any stage. If someone asks you for
          money in our name, it is a scam.
        </p>
      </div>

      {status === "closed" ? (
        <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
          Les candidatures sont closes. Les vingt noms seront annoncés le samedi
          26 septembre à 20 h 30, en direct.
        </p>
      ) : (
        <div className="mt-8 max-w-xl">
          {status === "soon" ? <BravoCountdown className="mb-4" /> : null}
          <Button
            type="button"
            onClick={onStart}
            className="h-13 w-full rounded-full px-7 text-base font-semibold sm:h-14 sm:w-auto sm:min-w-64"
          >
            {status === "soon" ? "Préparer ma candidature" : "Candidater — c'est gratuit"}
          </Button>
          <p className="mt-3 text-sm text-ink/50">Moins de cinq minutes. Pas de compte à créer.</p>
        </div>
      )}
    </>
  )
}
