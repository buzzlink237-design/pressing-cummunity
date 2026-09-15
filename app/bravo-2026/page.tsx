import { BravoCampaign } from "@/components/bravo/bravo-campaign"
import { getBravoPublicCopy } from "@/lib/bravo/config"
import { parseUtmFromSearch } from "@/lib/bravo/schema"

export const metadata = {
  title: "BRAVO 2026 — Candidature",
  description:
    "Vingt jeunes qui ont obtenu leur Baccalauréat ou leur GCE Advanced Level en 2026 recevront 50 000 FCFA. Inscription gratuite, à partir du 21 septembre.",
}

type BravoPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function BravoPage({ searchParams }: BravoPageProps) {
  const params = await searchParams
  return <BravoCampaign utm={parseUtmFromSearch(params)} copy={getBravoPublicCopy()} />
}
