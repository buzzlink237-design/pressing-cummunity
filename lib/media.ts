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

/**
 * Hybrid catalog: brand locals for identity; African / Cameroon-context
 * Unsplash photos for service themes (solidarity, formation, youth, partners).
 */
export const media = {
  community: brand.door,
  models: brand.models,
  street: brand.street,

  solidarity: unsplash(
    "photo-1509099863731-ef4bff19e808",
    "Des enfants africains souriants, symbole de solidarité"
  ),
  volunteers: unsplash(
    "photo-1444664361762-afba083a4d77",
    "Des bénévoles africains engagés sur le terrain"
  ),
  charity: unsplash(
    "photo-1524414621493-7dec026782c3",
    "Une action de solidarité au sein d'une communauté africaine"
  ),
  kidsSchool: unsplash(
    "photo-1473649085228-583485e6e4d7",
    "Des élèves africains attentifs en classe"
  ),
  africanChildren: unsplash(
    "photo-1509099836639-18ba1795216d",
    "Des enfants africains souriant ensemble"
  ),
  landscape: unsplash(
    "photo-1547471080-7cc2caa01a7e",
    "Paysage d'Afrique, acacias au coucher du soleil"
  ),
  formation: unsplash(
    "photo-1632215863153-0dae7657d0a9",
    "De jeunes Africains réunis pour apprendre ensemble"
  ),
  classroom: unsplash(
    "photo-1744809482817-9a9d4fc280af",
    "Une enseignante africaine face à sa classe"
  ),
  workshop: unsplash(
    "photo-1573164574572-cb89e39749b4",
    "Des professionnels africains en atelier de formation"
  ),
  youth: unsplash(
    "photo-1624036695632-76337f9426cd",
    "Jeunes Africains complices, énergie et avenir"
  ),
  students: unsplash(
    "photo-1547496613-4e19af6736dc",
    "Des étudiants africains concentrés sur leurs études"
  ),
  mentoring: unsplash(
    "photo-1573164574397-dd250bc8a598",
    "Une professionnelle africaine qui conseille et accompagne"
  ),
  tech: unsplash(
    "photo-1680713660046-67b7350ed679",
    "Une entrepreneure africaine au travail devant un écran"
  ),
  entrepreneur: unsplash(
    "photo-1655720357872-ce227e4164ba",
    "Des entrepreneures africaines en discussion autour d'un projet"
  ),
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
  sports: unsplash(
    "photo-1652664845183-c6083bc286fc",
    "Des jeunes Africains qui jouent au football"
  ),
  hands: unsplash(
    "photo-1582213782179-e0d53f98f2ca",
    "Des mains jointes, symbole d'entraide"
  ),
  packing: unsplash(
    "photo-1560220604-1985ebfe28b1",
    "Des bénévoles africains qui préparent des colis de solidarité"
  ),
  classroomPexels: unsplash(
    "photo-1627423894921-c55a18a2de90",
    "Des enfants africains qui apprennent en classe"
  ),
  meeting: unsplash(
    "photo-1573164574511-73c773193279",
    "Une équipe africaine réunie autour d'une table de travail"
  ),
  highFive: unsplash(
    "photo-1632215863479-201029d93143",
    "De jeunes Africains fiers après un succès collectif"
  ),
  study: unsplash(
    "photo-1666281269793-da06484657e8",
    "Des jeunes femmes africaines avec des livres, prêtes à apprendre"
  ),
  volunteersPexels: unsplash(
    "photo-1553775927-a071d5a6a39a",
    "Des bénévoles africains qui préparent une distribution"
  ),
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
  music: unsplash(
    "photo-1585619443911-c2bb23fb2a49",
    "Un musicien africain sur scène, expression des talents"
  ),
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
  listening: unsplash(
    "photo-1573164574048-f968d7ee9f20",
    "Deux personnes africaines en conversation, écoute et conseil"
  ),
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
