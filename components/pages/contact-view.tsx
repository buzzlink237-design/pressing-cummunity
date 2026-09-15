"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowUpRight01Icon,
  Location01Icon,
  Mail01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons"

import { InquiryForm } from "@/components/forms/inquiry-form"
import type { ContactSubject } from "@/lib/inquiry"
import {
  ImageField,
  PanelContent,
  StackPanel,
  StackTrack,
} from "@/components/layout/viewport"
import { FadeIn } from "@/components/motion/fade-in"
import { CtaLink, CtaRow } from "@/components/ui/cta-link"
import { site, socialLinks } from "@/lib/navigation"
import { cn } from "@/lib/utils"

const socialNames = socialLinks.map((item) => item.label).join(", ")

const channels = [
  {
    icon: WhatsappIcon,
    title: "WhatsApp",
    text: "La façon la plus rapide de nous joindre pour une question, une urgence sociale ou une première prise de contact.",
    detail: site.whatsapp,
    href: site.whatsappHref,
    cta: "Ouvrir WhatsApp",
    theme: "black" as const,
  },
  {
    icon: Mail01Icon,
    title: "E-mail",
    text: "Pour les demandes détaillées, les dossiers et tout ce qui doit rester par écrit.",
    detail: site.email,
    href: site.emailHref,
    cta: "Écrire un e-mail",
    theme: "white" as const,
  },
  {
    icon: ArrowUpRight01Icon,
    title: "Site & réseaux",
    text: socialNames
      ? `Retrouvez-nous en ligne et suivez les actions de la communauté sur ${socialNames}.`
      : "Retrouvez-nous en ligne sur le site de la communauté.",
    detail: `${site.website} · ${site.handle}`,
    href: site.websiteHref,
    cta: "Visiter le site",
    theme: "white" as const,
  },
  {
    icon: Location01Icon,
    title: "Nous rencontrer",
    text: "Le siège est à Douala. L'adresse précise sera publiée ici dès qu'elle sera confirmée. En attendant, prenez rendez-vous.",
    detail: site.address,
    theme: "muted" as const,
  },
]

export function ContactView({ defaultSubject }: { defaultSubject?: ContactSubject }) {
  return (
    <StackTrack>
      <StackPanel theme="black" flush>
        <ImageField name="city" label="Nous contacter" priority />
        <PanelContent className="items-center justify-end text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange">
              {site.city}
            </p>
            <h1 className="mx-auto mt-5 max-w-4xl text-4xl text-balance md:text-6xl">
              Nous contacter
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Adhésion, don, partenariat, formation, idée : un seul formulaire.
              Choisissez la démarche, puis écrivez-nous. WhatsApp reste le plus
              rapide pour une urgence.
            </p>
          </FadeIn>
        </PanelContent>
      </StackPanel>

      {channels.map((channel) => (
        <StackPanel key={channel.title} theme={channel.theme}>
          <PanelContent>
            <FadeIn>
              <p className={cn(
                "text-xs font-semibold uppercase tracking-[0.24em]",
                channel.theme === "black" ? "text-orange" : "text-teal"
              )}>
                Moyens de contact
              </p>
              <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
                <div className="max-w-xl">
                  <span className="grid size-12 sm:size-14 place-items-center rounded-full bg-current/10">
                    <HugeiconsIcon icon={channel.icon} strokeWidth={1.75} className="size-6 sm:size-7" />
                  </span>
                  <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-6xl">
                    {channel.title}
                  </h2>
                  <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed opacity-75">
                    {channel.text}
                  </p>
                  {channel.cta ? (
                    <CtaRow className="justify-start">
                      <CtaLink
                        href={channel.href ?? "#"}
                        variant={channel.theme === "black" ? "accent" : "default"}
                        icon
                      >
                        {channel.cta}
                      </CtaLink>
                    </CtaRow>
                  ) : null}
                </div>
                <p className="break-all text-base sm:text-lg font-medium tracking-tight sm:break-normal md:text-right md:text-2xl">
                  {channel.detail}
                </p>
              </div>
            </FadeIn>
          </PanelContent>
        </StackPanel>
      ))}

      <StackPanel id="message" theme="muted" pin={false} className="scroll-mt-[var(--header-height)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 md:px-12 md:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-8">
              <InquiryForm defaultSubject={defaultSubject} />
            </div>

            <aside className="lg:col-span-4">
              <div className="rounded-[1.75rem] bg-white p-6 ring-1 ring-ink/8 sm:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal">
                  Moyens de contact
                </p>
                <ul className="mt-4 divide-y divide-ink/8">
                  {channels.map((channel) => (
                    <li key={channel.title}>
                      <ChannelRow
                        label={channel.title}
                        value={channel.detail}
                        href={channel.href}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {socialLinks.length > 0 ? (
                <div className="mt-6 rounded-[1.75rem] bg-teal p-6 text-white sm:p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange">
                    Suivez nos actions
                  </p>
                  <p className="mt-3 text-lg leading-relaxed text-white/80">
                    {site.handle}
                    {socialNames ? ` — ${socialNames}.` : "."}
                  </p>
                  <ul className="mt-5 divide-y divide-white/15">
                    {socialLinks.map((item) => (
                      <li key={item.label}>
                        <ChannelRow
                          label={item.label}
                          value={site.handle}
                          href={item.href}
                          inverted
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </aside>
          </div>
        </div>
      </StackPanel>
    </StackTrack>
  )
}

function ChannelRow({
  label,
  value,
  href,
  inverted = false,
}: {
  label: string
  value: string
  href?: string
  inverted?: boolean
}) {
  const content = (
    <div className="flex items-baseline justify-between gap-6 py-3.5">
      <span className="text-base font-medium">{label}</span>
      <span className={cn("text-right text-base", inverted ? "text-white/70" : "text-muted-foreground")}>
        {value}
      </span>
    </div>
  )

  if (!href || href === "#") return content

  return (
    <a href={href} className="block hover:opacity-70">
      {content}
    </a>
  )
}
