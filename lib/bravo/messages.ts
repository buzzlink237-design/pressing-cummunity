import type { BravoPublicCopy } from "./config"

function fill(template: string, copy: BravoPublicCopy, extras: Record<string, string> = {}) {
  return template
    .replaceAll("[COMPTE]", copy.liveAccount)
    .replaceAll("[LIEN]", copy.whatsappChannel)
    .replaceAll("[CONTACT]", copy.parentContact)
    .replaceAll("[PRENOM]", extras.prenom ?? "")
    .replaceAll("[NUMERO]", extras.numero ?? "")
}

export function confirmationScreenText(numero: string, copy: BravoPublicCopy) {
  return fill(
    [
      "Votre candidature est enregistrée.",
      `Votre numéro : ${numero}. Notez-le, il sera prononcé en direct.`,
      "Les vingt noms seront annoncés le samedi 26 septembre à 20 h 30, en direct sur [COMPTE]. Il faut être connecté ce soir-là : c'est en direct que les lauréats se manifestent.",
      "D'ici là, personne de notre part ne vous appellera pour vous demander de l'argent, des frais de dossier ou un code de retrait. Si cela arrive, c'est une escroquerie.",
      "Rejoignez le canal WhatsApp officiel pour ne rien manquer : [LIEN].",
    ].join("\n\n"),
    copy,
    { numero }
  )
}

/** Kept for a later WhatsApp Cloud / Twilio branch. Do not send automatically in v1. */
export function candidateWhatsAppMessage(prenom: string, numero: string, copy: BravoPublicCopy) {
  return fill(
    "Bonjour [PRENOM]. Votre candidature à BRAVO 2026 est bien enregistrée sous le numéro [NUMERO]. Rendez-vous le samedi 26 septembre à 20 h 30 en direct sur [COMPTE] pour l'annonce des 20 lauréats. C'est gratuit, et nous ne vous demanderons jamais d'argent. Canal officiel : [LIEN]. — The Pressing Community",
    copy,
    { prenom, numero }
  )
}

/** Kept for a later WhatsApp Cloud / Twilio branch. Do not send automatically in v1. */
export function parentWhatsAppMessage(prenom: string, copy: BravoPublicCopy) {
  return fill(
    "Bonjour. [PRENOM] a déposé une candidature à BRAVO 2026, une opération de The Pressing Community qui remet 50 000 FCFA à vingt jeunes ayant réussi leur examen cette année. Vous êtes indiqué comme parent ou responsable : si votre enfant est retenu, c'est sur votre numéro Mobile Money que la somme sera envoyée, le samedi 26 septembre en direct. Vous n'avez rien à payer et rien à avancer. Pour toute question : [CONTACT].",
    copy,
    { prenom }
  )
}

export const INTRO_FR = {
  title: "BRAVO 2026 — Vous avez réussi. Maintenant, que ça compte.",
  body: [
    "Vingt jeunes qui ont obtenu leur Baccalauréat ou leur GCE Advanced Level en 2026 recevront 50 000 FCFA chacun. Dix francophones, dix anglophones, de toutes les régions du Cameroun. La remise se fait en direct le samedi 26 septembre à 20 h 30.",
    "L'inscription est gratuite et prend moins de cinq minutes. Elle ouvre le lundi 21 septembre et reste ouverte jusqu'au vendredi 25 septembre à minuit.",
    "L'argent est versé au parent ou au responsable du candidat, sur son compte Mobile Money. Nous ne demandons jamais d'argent à personne, à aucun moment. Si quelqu'un vous en réclame en notre nom, c'est une escroquerie.",
  ],
}

export const INTRO_EN = {
  title: "BRAVO 2026 — You passed. Now let it count.",
  body: [
    "Twenty young people who passed the Baccalauréat or the GCE Advanced Level in 2026 will each receive 50,000 FCFA. Ten francophones, ten anglophones, from every region of Cameroon. The handover happens live on Saturday 26 September at 8:30 p.m.",
    "Registration is free and takes under five minutes. It opens on Monday 21 September and closes on Friday 25 September at midnight.",
    "The money is paid to the candidate's parent or guardian, on their Mobile Money account. We never ask anyone for money, at any stage. If someone asks you for money in our name, it is a scam.",
  ],
}

export const PARENT_SECTION_INTRO =
  "Les 50 000 FCFA ne sont pas versés au candidat. Ils sont versés à son parent ou à son responsable, sur son compte Mobile Money. C'est lui qui porte les frais de la rentrée."
