"use client"

import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowUpRight01Icon,
  HouseHeartIcon,
  SmileIcon,
} from "@hugeicons/core-free-icons"

import { ImageField } from "@/components/layout/viewport"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import type { MediaKey } from "@/lib/media"
import { cn } from "@/lib/utils"

const photoCardClass = "h-full min-h-0"

export function HeroMosaic() {
  return (
    <>
      <div className="mx-auto hidden h-[min(42rem,64svh)] min-h-[32rem] w-full max-w-[1400px] shrink-0 px-4 md:px-8 lg:block">
        <Stagger className="grid h-full grid-cols-[1fr_1.2fr_0.95fr_1.2fr_1fr] items-end gap-3">
          <StaggerItem className="flex h-full min-h-0 flex-col gap-3">
            <DonateCard className="min-h-0 flex-1" />
            <AccentCard
              href="/nos-actions/talents"
              icon={SmileIcon}
              title="Leur donner une voix"
            />
          </StaggerItem>

          <StaggerItem className="h-full min-h-0">
            <PhotoCard
              href="/nos-actions/solidarite"
              image="solidarity"
              kicker="Solidarité"
              title="Orphelinats, veuves et familles à Douala"
              tab="tr"
              className={photoCardClass}
              priority
            />
          </StaggerItem>

          <StaggerItem className="h-[58%] min-h-0">
            <JoinCard className="h-full" />
          </StaggerItem>

          <StaggerItem className="h-full min-h-0">
            <PhotoCard
              href="/nos-actions/formation"
              image="workshop"
              kicker="Formation"
              title="Anglais, TCF, IA et entrepreneuriat"
              tab="tr"
              className={photoCardClass}
              priority
            />
          </StaggerItem>

          <StaggerItem className="flex h-full min-h-0 flex-col gap-3">
            <ExploreCard className="min-h-0 flex-1" />
            <AccentCard
              href="/nous-soutenir"
              icon={HouseHeartIcon}
              title="Votre relais d'entraide"
              accent
            />
          </StaggerItem>
        </Stagger>
      </div>

      <MobileMosaic />
    </>
  )
}

function MobileMosaic() {
  return (
    <div className="flex w-full flex-col gap-3 px-3.5 pt-4 sm:px-6 sm:pt-6 lg:hidden">
      <div className="grid h-[20.5rem] grid-cols-[1.15fr_0.85fr] gap-2.5 sm:h-[26rem]">
        <PhotoCard
          href="/nos-actions/solidarite"
          image="solidarity"
          kicker="Solidarité"
          title="Aider à Douala"
          tab="tr"
          className="h-full"
          priority
        />
        <div className="flex min-h-0 flex-col gap-2.5">
          <PhotoCard
            href="/nos-actions/formation"
            image="workshop"
            kicker="Formation"
            title="Se former"
            tab="tl"
            className="min-h-0 flex-1"
          />
          <DonateCard compact className="min-h-[6rem] flex-[0.72]" />
        </div>
      </div>

      <div className="scrollbar-none -mx-3.5 flex gap-2.5 overflow-x-auto overscroll-x-contain px-3.5 pb-1 sm:-mx-6 sm:px-6">
        <PhotoCard
          href="/nos-actions/talents"
          image="students"
          kicker="Talents"
          title="Donner une chance"
          tab="tr"
          className="h-38 w-[11rem] shrink-0 sm:h-44 sm:w-52"
        />
        <PhotoCard
          href="/nos-actions/jeunesse"
          image="youth"
          kicker="Jeunesse"
          title="Construire son autonomie"
          tab="tl"
          className="h-38 w-[11rem] shrink-0 sm:h-44 sm:w-52"
        />
        <ExploreCard className="h-38 w-[11rem] shrink-0 sm:h-44 sm:w-52" />
        <AccentCard
          href="/nous-soutenir"
          icon={HouseHeartIcon}
          title="Votre relais d'entraide"
          accent
          className="h-38 w-[11rem] shrink-0 flex-col items-start justify-between py-4 sm:h-44 sm:w-52"
        />
      </div>
    </div>
  )
}

function cardShape(tab: "tr" | "tl" | "none" = "tr") {
  return cn(
    "overflow-hidden rounded-[1.35rem] sm:rounded-[1.7rem]",
    tab === "tr" && "rounded-tr-[2.75rem] sm:rounded-tr-[3.75rem] lg:rounded-tr-[4.25rem]",
    tab === "tl" && "rounded-tl-[2.75rem] sm:rounded-tl-[3.75rem] lg:rounded-tl-[4.25rem]"
  )
}

function DonateCard({
  className,
  compact = false,
}: {
  className?: string
  compact?: boolean
}) {
  return (
    <Link
      href="/nous-soutenir/faire-un-don"
      className={cn(
        "group flex flex-col justify-between bg-teal-deep p-3.5 text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50 sm:p-5",
        cardShape("tr"),
        className
      )}
    >
      <div>
        <p
          className={cn(
            "font-heading leading-none",
            compact ? "text-2xl" : "text-3xl sm:text-4xl"
          )}
        >
          Aider.
        </p>
        {compact ? null : (
          <p className="mt-2 max-w-[18ch] text-sm leading-relaxed text-white/70 sm:text-base">
            Orphelinats, veuves, familles : une aide concrète, ici et maintenant.
          </p>
        )}
      </div>
      <span
        className={cn(
          "flex items-center justify-between gap-3 font-semibold",
          compact ? "mt-3 text-xs" : "mt-4 text-sm"
        )}
      >
        Faire un don
        <ArrowDisc
          className={cn(
            "bg-orange text-ink group-hover:bg-orange/90",
            compact && "size-7"
          )}
        />
      </span>
    </Link>
  )
}

function JoinCard({ className }: { className?: string }) {
  return (
    <Link
      href="/devenir-membre"
      className={cn(
        "group flex flex-col justify-between bg-white p-4 text-ink shadow-[0_10px_30px_rgba(26,31,37,0.06)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/40 sm:p-5",
        cardShape("tr"),
        className
      )}
    >
      <p className="max-w-[12ch] font-heading text-xl leading-[1.05] sm:text-2xl">
        Rejoindre la communauté
      </p>
      <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-ink py-1 pr-1 pl-3 text-xs font-bold text-white">
        Devenir membre
        <ArrowDisc className="size-7 bg-orange text-ink group-hover:bg-orange/90" />
      </span>
    </Link>
  )
}

function ExploreCard({ className }: { className?: string }) {
  return (
    <Link
      href="/nos-actions"
      className={cn(
        "group relative flex flex-col justify-end bg-orange p-4 text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/50 sm:p-5",
        cardShape("tl"),
        className
      )}
    >
      <ImageField
        name="hands"
        overlay={false}
        sizes="22vw"
        className="bg-transparent opacity-40 mix-blend-multiply grayscale"
      />
      <span className="relative z-10 flex items-center justify-between gap-3 font-heading text-lg leading-none sm:text-xl">
        Explorer
        <ArrowDisc className="bg-ink text-orange group-hover:bg-ink/85" />
      </span>
    </Link>
  )
}

function AccentCard({
  href,
  icon,
  title,
  accent = false,
  className,
}: {
  href: string
  icon: typeof SmileIcon
  title: string
  accent?: boolean
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex h-[4.6rem] shrink-0 items-center gap-3 rounded-[1.5rem] bg-ink px-4 text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
        accent && "text-orange",
        className
      )}
    >
      <HugeiconsIcon icon={icon} strokeWidth={1.75} className="size-7 shrink-0" />
      <span className="font-heading text-[15px] leading-tight">{title}</span>
    </Link>
  )
}

function PhotoCard({
  href,
  image,
  kicker,
  title,
  tab = "tr",
  className,
  priority = false,
}: {
  href: string
  image: MediaKey
  kicker: string
  title: string
  tab?: "tr" | "tl" | "none"
  className?: string
  priority?: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex h-full min-h-0 flex-col justify-between p-4 text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
        cardShape(tab),
        className
      )}
    >
      <ImageField
        name={image}
        overlay={false}
        priority={priority}
        sizes="(max-width: 1024px) 50vw, 22vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/10 to-ink/25" />
      <p className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90">
        {kicker}
      </p>
      <p className="relative z-10 max-w-[16ch] font-heading text-base leading-snug drop-shadow-sm sm:text-lg lg:text-xl">
        {title}
      </p>
    </Link>
  )
}

function ArrowDisc({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid size-8 shrink-0 place-items-center rounded-full transition-colors",
        className
      )}
    >
      <HugeiconsIcon icon={ArrowUpRight01Icon} strokeWidth={2} className="size-3.5" />
    </span>
  )
}
