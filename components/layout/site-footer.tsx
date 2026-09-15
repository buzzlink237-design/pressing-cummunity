import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Facebook01Icon,
  InstagramIcon,
  TiktokIcon,
  YoutubeIcon,
} from "@hugeicons/core-free-icons"

import {
  footerAct,
  footerNavigate,
  legalLinks,
  site,
  socialLinks,
} from "@/lib/navigation"

import { BrandMark } from "./brand-mark"

const socialIcons = {
  Instagram: InstagramIcon,
  Facebook: Facebook01Icon,
  YouTube: YoutubeIcon,
  TikTok: TiktokIcon,
}

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-40 flex min-h-svh w-full snap-start flex-col bg-ink text-white">

      {/* ── Big logo hero ── */}
      <div className="mx-auto w-full max-w-6xl px-5 pt-[calc(var(--header-height)+2rem)] sm:px-8 md:px-12 md:pt-[calc(var(--header-height)+3rem)]">
        <BrandMark inverted large />
        <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
          {site.baseline}
        </p>
        {/* separator */}
        <div className="mt-10 h-px w-full bg-white/10" />
      </div>

      {/* ── Nav columns ── */}
      <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 content-start gap-10 px-5 pt-10 sm:grid-cols-2 sm:gap-10 sm:px-8 md:grid-cols-4 md:px-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">À propos</p>
          <p className="mt-4 text-base leading-relaxed text-white/55">
            Solidarité, formation, accompagnement et talents — une communauté
            camerounaise qui aide aujourd&apos;hui et construit demain.
          </p>
          <p className="mt-5 text-sm text-white/50">{site.city}</p>
          <p className="mt-1 text-sm text-white/35">{site.registration}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">Naviguer</p>
          <ul className="mt-5 space-y-3">
            {footerNavigate.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-base text-white/85 hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">Agir</p>
          <ul className="mt-5 space-y-3">
            {footerAct.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-base text-white/85 hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange">Nous joindre</p>
          <ul className="mt-5 space-y-3 text-base text-white/80">
            <li className="break-words">
              <a href={site.whatsappHref} className="hover:text-white hover:underline">
                WhatsApp : {site.whatsapp}
              </a>
            </li>
            <li className="break-all sm:break-normal">
              <a href={site.emailHref} className="hover:text-white hover:underline">
                {site.email}
              </a>
            </li>
            <li className="break-all sm:break-normal">
              <a href={site.websiteHref} className="hover:text-white hover:underline">
                {site.website}
              </a>
            </li>
            <li className="break-words">{site.handle}</li>
            <li className="break-words">Adresse : {site.address}</li>
          </ul>
          {socialLinks.length > 0 ? (
            <div className="mt-6 sm:mt-8 flex items-center gap-3">
              {socialLinks.map((item) => {
                const icon = socialIcons[item.label as keyof typeof socialIcons]
                if (!icon) return null
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-10 place-items-center rounded-full bg-white/5 transition hover:bg-teal/40"
                  >
                    <HugeiconsIcon icon={icon} strokeWidth={2} className="size-4" />
                  </Link>
                )
              })}
            </div>
          ) : null}
        </div>
      </div>

      {/* ── Legal bar ── */}
      <div className="mt-10 px-5 pb-12 pt-6 text-xs text-white/40 sm:mt-auto sm:px-8 sm:pb-10 sm:pt-10 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.name}. Tous droits réservés.</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
