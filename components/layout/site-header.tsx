"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { donateCta, headerNav, type NavItem } from "@/lib/navigation"
import type { MediaKey } from "@/lib/media"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { BravoNavLink } from "@/components/bravo/bravo-nav-link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ImageField } from "@/components/layout/viewport"

import { BrandMark } from "./brand-mark"
import { MobileNav } from "./mobile-nav"

const featuredImage: Record<string, MediaKey> = {
  "/qui-sommes-nous": "community",
  "/nos-actions": "volunteers",
  "/nous-soutenir": "hands",
}

function isActivePath(pathname: string, href: string) {
  const path = href.split("#")[0]
  if (path === "/") return pathname === "/"
  return pathname === path || pathname.startsWith(`${path}/`)
}

function navItemClass(onDark: boolean, active: boolean) {
  return cn(
    "h-10 rounded-full bg-transparent px-3.5 py-0 text-[15px] font-medium tracking-tight hover:bg-ink/6 data-popup-open:bg-ink/8 data-open:bg-ink/8",
    onDark &&
      "hover:bg-white/12 data-popup-open:bg-white/12 data-open:bg-white/12",
    active &&
      (onDark
        ? "bg-white text-ink hover:bg-white data-popup-open:bg-white data-open:bg-white"
        : "bg-teal text-white hover:bg-teal data-popup-open:bg-teal data-open:bg-teal")
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const solid = scrolled
  const lightHero = pathname === "/"
  const onDark = !solid && !lightHero

  return (
    <header className="fixed inset-x-0 top-0 z-50 font-heading">
      <div className="mx-auto max-w-[1400px] px-3 pt-2 md:px-4">
        <div
          className={cn(
            "flex h-16 items-center justify-between rounded-full border px-1.5 transition-colors duration-300 md:h-16 md:px-3 lg:grid lg:h-[4.25rem] lg:grid-cols-[1fr_auto_1fr]",
            solid
              ? "border-ink/10 bg-white text-ink shadow-sm lg:bg-white/95 lg:backdrop-blur-md"
              : onDark
                ? "border-white/15 bg-ink text-white shadow-sm lg:bg-ink/55 lg:backdrop-blur-md"
                : "border-ink/8 bg-white text-ink shadow-sm lg:bg-white/80 lg:backdrop-blur-md"
          )}
        >
          <BrandMark inverted={onDark} />

          <NavigationMenu className="hidden lg:flex" align="center">
            <NavigationMenuList className="gap-0.5">
              {headerNav.map((item) => {
                const active = isActivePath(pathname, item.href)

                if (!item.children) {
                  return (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuLink
                        href={item.href}
                        render={<Link href={item.href} />}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          navItemClass(onDark, active)
                        )}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                }

                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuTrigger
                      className={navItemClass(onDark, active)}
                    >
                      <Link href={item.href} className="contents">
                        {item.label}
                      </Link>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <MegaMenu item={item} />
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="ml-auto flex items-center justify-end gap-1.5 lg:ml-0">
            <BravoNavLink
              className={cn(
                buttonVariants(),
                "inline-flex h-10 rounded-full px-3 text-sm font-sans font-semibold sm:px-4",
                solid || lightHero
                  ? "bg-teal text-white hover:bg-teal-deep"
                  : "bg-white text-ink hover:bg-white/90"
              )}
            />
            <Link
              href={donateCta.href}
              className={cn(
                buttonVariants(),
                "hidden h-10 rounded-full px-5 text-sm font-sans font-semibold md:inline-flex",
                "bg-orange text-ink hover:bg-orange/90"
              )}
            >
              {donateCta.label}
            </Link>
            <div className={cn("lg:hidden", onDark ? "text-white" : "text-ink")}>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function MegaMenu({ item }: { item: NavItem }) {
  const image = featuredImage[item.href]

  return (
    <div className="grid w-[min(44rem,calc(100vw-2rem))] gap-3 p-3 md:grid-cols-[minmax(13rem,0.85fr)_1.15fr] md:p-4">
      <Link
        href={item.href}
        className="relative flex min-h-44 flex-col justify-end overflow-hidden rounded-2xl p-5 text-white"
      >
        {image ? (
          <ImageField name={image} label={item.label} sizes="280px" />
        ) : (
          <span className="absolute inset-0 bg-teal" />
        )}
        <span className="relative z-10 font-heading text-2xl leading-tight">{item.label}</span>
        {item.description ? (
          <span className="relative z-10 mt-2 line-clamp-3 text-sm leading-relaxed text-white/80">
            {item.description}
          </span>
        ) : null}
      </Link>

      <ul className="grid content-start gap-1">
        {item.children?.map((child) => (
          <li key={child.href}>
            <NavigationMenuLink
              href={child.href}
              render={<Link href={child.href} />}
              className="flex flex-col items-start gap-0.5 rounded-xl p-3"
            >
              <span className="font-heading text-base">{child.label}</span>
              {child.description ? (
                <span className="line-clamp-2 font-sans text-sm leading-snug text-muted-foreground">
                  {child.description}
                </span>
              ) : null}
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
