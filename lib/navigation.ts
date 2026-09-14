export type NavLink = {
  label: string
  href: string
  description?: string
}

export type NavItem = NavLink & {
  children?: NavLink[]
}

export const site = {
  name: "The Pressing Community",
  shortName: "Pressing",
  baseline: "Une communauté. Des opportunités. Un impact.",
  city: "Douala, Cameroun",
  registration: "Statut juridique et numéro d'enregistrement …",
  whatsapp: "00 237 678 014 289",
  whatsappHref: "https://wa.me/237678014289",
  website: "www.pressing-community.org",
  websiteHref: "https://www.pressing-community.org",
  handle: "@lapressingcommunity",
  address: "Douala, Cameroun",
  signature: "Chaque opportunité peut changer une vie. Construisons-les ensemble.",
}

export const headerNav: NavItem[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Qui sommes-nous",
    href: "/qui-sommes-nous",
    description:
      "Vision, mission, valeurs et gouvernance d'une communauté camerounaise qui forme, accompagne et ouvre des portes.",
    children: [
      { label: "Notre vision", href: "/qui-sommes-nous#vision", description: "Une génération mieux informée, formée et capable de saisir des opportunités." },
      { label: "Nos valeurs", href: "/qui-sommes-nous#valeurs", description: "Solidarité, intégrité, transmission : ce qui oriente chaque geste." },
      { label: "Notre gouvernance", href: "/qui-sommes-nous#gouvernance", description: "Une organisation lisible, responsable, capable de rendre compte." },
      { label: "Notre développement", href: "/qui-sommes-nous#developpement", description: "Cinq phases, dans l'ordre, pour grandir sans se précipiter." },
    ],
  },
  {
    label: "Nos actions",
    href: "/nos-actions",
    description:
      "Cinq axes, une seule direction : aider aujourd'hui, et construire ce qui aidera demain.",
    children: [
      { label: "Solidarité & action sociale", href: "/nos-actions/solidarite", description: "Orphelinats, veuves et familles : une aide concrète, ici et maintenant." },
      { label: "Opportunités & accompagnement", href: "/nos-actions/accompagnement", description: "S'orienter, lire une offre, avancer — sans fausse promesse." },
      { label: "Formation & développement", href: "/nos-actions/formation", description: "Anglais, TCF, IA et entrepreneuriat, accessibles aux membres." },
      { label: "Talents camerounais", href: "/nos-actions/talents", description: "Identifier et accompagner ceux à qui il manque des moyens." },
      { label: "Jeunesse & développement", href: "/nos-actions/jeunesse", description: "Apprendre, se former et construire son autonomie." },
    ],
  },
  { label: "Devenir membre", href: "/devenir-membre" },
  {
    label: "Nous soutenir",
    href: "/nous-soutenir",
    description:
      "Don, mécénat, partenariat, compétences, idées : chacune de ces portes compte.",
    children: [
      { label: "Faire un don", href: "/nous-soutenir/faire-un-don", description: "Soutenir une action ou un programme précis." },
      { label: "Devenir mécène", href: "/nous-soutenir/mecene", description: "Contribuer régulièrement, pour que les programmes durent." },
      { label: "Devenir partenaire", href: "/nous-soutenir/partenaire", description: "Construire un projet commun avec la communauté." },
      { label: "Offrir mes compétences", href: "/nous-soutenir/competences", description: "Former, accompagner, conseiller : votre temps compte." },
      { label: "Proposer une idée", href: "/proposer-une-idee", description: "Une intention claire peut devenir une action." },
    ],
  },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
]

export const donateCta: NavLink = {
  label: "Faire un don",
  href: "/nous-soutenir/faire-un-don",
}

export const memberCta: NavLink = {
  label: "Devenir membre",
  href: "/devenir-membre",
}

export const bravoCta: NavLink = {
  label: "BRAVO 2026",
  href: "/bravo-2026",
}

export const footerNavigate: NavLink[] = [
  { label: "Qui sommes-nous", href: "/qui-sommes-nous" },
  { label: "Nos actions", href: "/nos-actions" },
  { label: "BRAVO 2026", href: "/bravo-2026" },
  { label: "Devenir membre", href: "/devenir-membre" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
]

export const footerAct: NavLink[] = [
  { label: "Faire un don", href: "/nous-soutenir/faire-un-don" },
  { label: "Devenir mécène", href: "/nous-soutenir/mecene" },
  { label: "Devenir partenaire", href: "/nous-soutenir/partenaire" },
  { label: "Offrir mes compétences", href: "/nous-soutenir/competences" },
  { label: "Proposer une idée", href: "/proposer-une-idee" },
]

export const legalLinks: NavLink[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  { label: "Conditions d'adhésion", href: "/conditions-adhesion" },
]

export const socialLinks: NavLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/lapressingcommunity" },
  { label: "YouTube", href: "https://www.youtube.com/@lapressingcommunity" },
]
