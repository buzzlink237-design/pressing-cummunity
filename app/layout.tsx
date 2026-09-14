import type { Metadata, Viewport } from "next"
import { Englebert, Inter } from "next/font/google"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { WhatsAppFab } from "@/components/layout/whatsapp-fab"
import { cn } from "@/lib/utils"

import "./globals.css"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
})

const englebert = Englebert({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-englebert",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#007c8c",
}

export const metadata: Metadata = {
  title: {
    default: "The Pressing Community — Communauté camerounaise d'entraide, de formation et d'opportunités",
    template: "%s — The Pressing Community",
  },
  description:
    "Solidarité, formation, accompagnement et développement des talents au Cameroun. Rejoignez une communauté qui crée des opportunités concrètes pour les Camerounais.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={cn("antialiased", inter.variable, englebert.variable, "font-sans")}>
      <body className="min-h-svh bg-background text-base sm:text-lg leading-relaxed text-foreground">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppFab />
      </body>
    </html>
  )
}

