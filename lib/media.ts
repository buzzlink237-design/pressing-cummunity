export type MediaAsset = {
  src: string
  alt: string
  source: "local" | "unsplash" | "pexels"
}

function local(file: string, alt: string): MediaAsset {
  return {
    src: `/images/${file}`,
    alt,
    source: "local",
  }
}

function unsplash(id: string, alt: string): MediaAsset {
  return {
    src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=80`,
    alt,
    source: "unsplash",
  }
}

/** Brand photography from public/images — identity / community surfaces (Douala). */
const brand = {
  profile: local(
    "pressing-01.jpg",
    "Portrait de marque La Pressing Community — Community Wear"
  ),
  models: local(
    "pressing-02.jpg",
    "Trois membres La Pressing Community en polo et casquette de la communauté"
  ),
  collage: local(
    "pressing-03.jpg",
    "Collage culturel La Pressing Community — Douala, style et communauté"
  ),
  president: local(
    "pressing-04.jpg",
    "Céleste Victorien, président de La Pressing Community, avec la communauté"
  ),
  door: local(
    "pressing-05.jpg",
    "La Pressing Community : leadership et équipe réunie derrière une porte"
  ),
  street: local(
    "pressing-06.jpg",
    "La Pressing Community dans la rue — Cameroon stand up"
  ),
  formal: local(
    "pressing-07.jpg",
    "Céleste Victorien et l'équipe La Pressing Community — We rise together"
  ),
  leaders: local(
    "pressing-08.jpg",
    "La prochaine génération de leaders — jeunesse et développement, Douala"
  ),
} as const

/** Action-theme photography from public/images/solidarities. */
const themes = {
  solidarityCover: local(
    "solidarities/pc-a1-solidarite-proposition-7-jeunes-don-orphelinat-tshirts-4k12.png",
    "Jeunes de La Pressing Community en don à un orphelinat"
  ),
  orphanageGift: local(
    "solidarities/pc-a1-solidarite-proposition-4-don-orphelinat-4k7.png",
    "Don à un orphelinat — solidarité de La Pressing Community"
  ),
  renovation: local(
    "solidarities/pc-a1-solidarite-proposition-5-jeunes-renovation-tshirts-4k10.png",
    "Jeunes bénévoles en t-shirts lors d'une rénovation"
  ),
  bloodDrive: local(
    "solidarities/pc-a1-solidarite-proposition-6-jeunes-don-sang-tshirts-4k1.png",
    "Jeunes de La Pressing Community lors d'un don de sang"
  ),
  orphanageTeam: local(
    "solidarities/pc-a1-solidarite-proposition-7-jeunes-don-orphelinat-tshirts-4k11.png",
    "Équipe de jeunes en don à un orphelinat"
  ),
  library: local(
    "solidarities/pc-i2-solidarite-proposition-1-bibliotheque-4k1.png",
    "Bibliothèque communautaire — action de solidarité"
  ),
  communityGarden: local(
    "solidarities/pc-i2-solidarite-proposition-3-jardin-communautaire-4k8.png",
    "Jardin communautaire — solidarité et entraide"
  ),
  digitalWorkshop: local(
    "solidarities/pc-a2-formation-proposition-1-atelier-numerique-4k3.png",
    "Atelier numérique de formation"
  ),
  entrepreneurship: local(
    "solidarities/pc-a2-formation-proposition-2-entrepreneuriat-4k2.png",
    "Session de formation à l'entrepreneuriat"
  ),
  contentCreation: local(
    "solidarities/pc-a2-formation-proposition-3-creation-contenu-4k1.png",
    "Atelier de création de contenu"
  ),
  mentor: local(
    "solidarities/pc-i3-accompagnement-proposition-2-mentor-cravate-4k1.png",
    "Mentorat et accompagnement personnalisé"
  ),
  smartCasual: local(
    "solidarities/pc-i3-accompagnement-proposition-3-smart-casual-4k1.png",
    "Accompagnement en entretien — écoute et conseil"
  ),
  seamstress: local(
    "solidarities/pc-i5-talent-proposition-1-couturiere-cliente-4k1.png",
    "Couturière avec une cliente — talents camerounais"
  ),
  mechanic: local(
    "solidarities/pc-a3-talents-proposition-2-mecanique-4k1.png",
    "Atelier de mécanique — talents et savoir-faire"
  ),
  apprentice: local(
    "solidarities/pc-i5-talent-proposition-2-mecanicien-apprenti-4k4.png",
    "Mécanicien et apprenti — transmission d'un talent"
  ),
  producer: local(
    "solidarities/pc-i5-talent-proposition-3-productrice-artiste-4k13.png",
    "Productrice et artiste — expression des talents"
  ),
  producerAlt: local(
    "solidarities/pc-i5-talent-proposition-3-productrice-artiste-4k6.png",
    "Productrice et artiste au travail"
  ),
  youthCourtyard: local(
    "solidarities/pc-a4-jeunesse-proposition-1-discussion-cour-4k1.png",
    "Discussion entre jeunes dans une cour"
  ),
  youthWorkshop: local(
    "solidarities/pc-a4-jeunesse-proposition-2-atelier-participatif-4k5.png",
    "Atelier participatif jeunesse"
  ),
  youthTerrace: local(
    "solidarities/pc-a4-jeunesse-proposition-3-terrasse-douala-4k9.png",
    "Jeunes sur une terrasse à Douala"
  ),
} as const

/**
 * Hybrid catalog: brand locals for identity; solidarities locals for action
 * themes; Unsplash kept for remaining generic surfaces.
 */
export const media = {
  community: brand.door,
  models: brand.models,
  street: brand.street,

  solidarity: themes.solidarityCover,
  volunteers: themes.orphanageTeam,
  charity: themes.bloodDrive,
  kidsSchool: themes.library,
  africanChildren: themes.orphanageGift,
  landscape: unsplash(
    "photo-1547471080-7cc2caa01a7e",
    "Paysage d'Afrique, acacias au coucher du soleil"
  ),
  formation: themes.contentCreation,
  classroom: themes.entrepreneurship,
  workshop: themes.digitalWorkshop,
  youth: themes.youthCourtyard,
  students: themes.seamstress,
  mentoring: themes.mentor,
  tech: themes.producerAlt,
  entrepreneur: themes.mechanic,
  donation: unsplash(
    "photo-1532629345422-7515f3d16bb6",
    "Des mains qui tiennent un cœur en papier, symbole de don"
  ),
  handshake: unsplash(
    "photo-1596633607590-7156877ef734",
    "Une poignée de main entre partenaires africains"
  ),
  team: brand.models,
  writing: unsplash(
    "photo-1539893867126-7ce0b48971ca",
    "Un élève africain qui écrit et prépare son avenir"
  ),
  city: unsplash(
    "photo-1594386167307-e448a81529ab",
    "Vue urbaine au Cameroun — Douala et la vie de la ville"
  ),
  sports: themes.youthTerrace,
  hands: unsplash(
    "photo-1582213782179-e0d53f98f2ca",
    "Des mains jointes, symbole d'entraide"
  ),
  packing: themes.renovation,
  classroomPexels: themes.youthWorkshop,
  meeting: unsplash(
    "photo-1573164574511-73c773193279",
    "Une équipe africaine réunie autour d'une table de travail"
  ),
  highFive: themes.apprentice,
  study: themes.contentCreation,
  volunteersPexels: themes.communityGarden,
  collaboration: unsplash(
    "photo-1573164574230-db1d5e960238",
    "Des collègues africains qui collaborent autour d'un projet"
  ),
  circle: unsplash(
    "photo-1509099955921-f0b4ed0c175c",
    "Une communauté africaine réunie, entraide et dialogue"
  ),
  family: unsplash(
    "photo-1515658323406-25d61c141a6e",
    "Une famille africaine réunie, symbole de foyer et de solidarité"
  ),
  teacher: unsplash(
    "photo-1632215861513-130b66fe97f4",
    "Une enseignante africaine avec ses élèves"
  ),
  books: unsplash(
    "photo-14565130808-af0986bc3505",
    "Des livres ouverts, travail et préparation d'un examen"
  ),
  coding: unsplash(
    "photo-1517694712202-14dd9538aa97",
    "Des mains qui tapent du code sur un ordinateur"
  ),
  music: themes.producer,
  football: unsplash(
    "photo-1652665314612-c48e10a01598",
    "Des jeunes Africains qui jouent au football"
  ),
  crowd: brand.street,
  village: unsplash(
    "photo-1523805009345-7448845a9e53",
    "Un village africain sous un ciel clair"
  ),
  portrait: brand.profile,
  listening: themes.smartCasual,
  kidsPlay: unsplash(
    "photo-1553777907-f5dbbbb44d7c",
    "Des enfants africains qui jouent et courent ensemble"
  ),
  notes: unsplash(
    "photo-1573164574308-edcb95e8b261",
    "Une équipe africaine qui prend des notes pendant une réunion"
  ),
  collage: brand.collage,
  formal: brand.formal,
  president: brand.president,
  leaders: brand.leaders,
} as const

export type MediaKey = keyof typeof media

export const mediaByIndex: MediaKey[] = [
  "solidarity",
  "community",
  "formation",
  "students",
  "youth",
  "workshop",
  "volunteers",
  "landscape",
]

export function getMedia(key?: MediaKey, seed = 0): MediaAsset {
  if (key) return media[key]
  return media[mediaByIndex[seed % mediaByIndex.length]]
}
