import Link from "next/link"

import {
  ImageField,
  PanelContent,
  StackPanel,
  StackTrack,
} from "@/components/layout/viewport"
import { FadeIn } from "@/components/motion/fade-in"
import { CtaLink, CtaRow } from "@/components/ui/cta-link"
import { formatNewsDate, newsArticles } from "@/lib/news"

export function NewsListView() {
  return (
    <StackTrack snap="y">
      <StackPanel theme="black" flush>
        <ImageField name="community" label="Actualités" priority />
        <PanelContent className="items-center justify-end text-center">
          <FadeIn>
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-orange">
              The Pressing Community
            </p>
            <h1 className="mx-auto mt-4 sm:mt-5 max-w-4xl text-3xl leading-[1.08] text-balance sm:text-5xl md:text-6xl">
              Actualités
            </h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/75">
              Nos actions, nos formations et les opportunités de la communauté.
              Ici, nous racontons ce qui se passe vraiment : un lancement, une
              action de solidarité, une session, un appel.
            </p>
          </FadeIn>
        </PanelContent>
      </StackPanel>

      <StackPanel theme="white" pin={false} flush>
        <div className="mx-auto w-full max-w-6xl px-4 pt-[calc(var(--header-height)+1rem)] pb-16 sm:px-6 sm:pb-20 md:px-12">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal">
              Journal de la communauté
            </p>
            <h2 className="mt-3 sm:mt-4 max-w-3xl text-2xl sm:text-3xl md:text-5xl">
              Ce que nous construisons, au fil des semaines
            </h2>
            <p className="mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              Cinq premiers récits pour poser le cadre. D&apos;autres suivront
              dès que les actions de terrain auront leurs propres photos et
              leurs propres dates.
            </p>
          </FadeIn>

          <ul className="mt-8 sm:mt-12 grid gap-6 sm:grid-cols-2 sm:gap-8">
            {newsArticles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/actualites/${article.slug}`}
                  className="group block overflow-hidden rounded-[1.4rem] sm:rounded-[1.65rem] border border-ink/8 bg-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/40"
                >
                  <div className="relative aspect-16/10">
                    <ImageField
                      name={article.image}
                      label={article.title}
                      overlay={false}
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-ink/50 to-transparent" />
                    <p className="absolute top-3.5 left-3.5 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wide text-teal">
                      {article.category}
                    </p>
                  </div>
                  <div className="px-4 py-4 sm:px-5 sm:py-5">
                    <p className="text-xs text-muted-foreground">
                      {formatNewsDate(article.date)}
                    </p>
                    <h3 className="mt-1.5 text-lg sm:text-xl font-semibold leading-snug group-hover:text-teal">
                      {article.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </StackPanel>

      <StackPanel theme="black">
        <PanelContent className="items-center text-center">
          <FadeIn>
            <h2 className="mx-auto max-w-3xl text-3xl md:text-5xl">
              Vous voulez participer aux prochaines actions ?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Rejoignez la communauté ou soutenez une action en cours.
            </p>
            <CtaRow>
              <CtaLink href="/devenir-membre" variant="accent">
                Devenir membre
              </CtaLink>
              <CtaLink
                href="/nous-soutenir/faire-un-don"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/10"
              >
                Faire un don
              </CtaLink>
            </CtaRow>
          </FadeIn>
        </PanelContent>
      </StackPanel>
    </StackTrack>
  )
}
