import type { MediaKey } from "@/lib/media"

export type NewsArticle = {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  image: MediaKey
  body: string[]
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "bravo-2026",
    title: "BRAVO 2026 : 50 000 FCFA pour vingt bacheliers et titulaires du GCE",
    excerpt:
      "Inscription gratuite à partir du 21 septembre. Dix francophones, dix anglophones, de toutes les régions. L'argent est versé au parent, en direct le 26 septembre.",
    date: "2026-09-05",
    category: "Jeunesse",
    image: "students",
    body: [
      "Vous avez réussi le Baccalauréat ou le GCE Advanced Level en 2026. BRAVO 2026 veut que ça compte : vingt jeunes recevront 50 000 FCFA chacun, dix francophones et dix anglophones, de toutes les régions du Cameroun.",
      "La sélection ne se fait pas sur la moyenne. Avoir réussi suffit. Le départage se fait sur le sous-système, la région de l'établissement, le besoin immédiat à la rentrée, et le fait d'être le premier de la famille dans le supérieur.",
      "L'inscription est gratuite et prend moins de cinq minutes. Pas de compte à créer. L'argent n'est jamais versé au candidat : il part sur le Mobile Money du parent ou du responsable. The Pressing Community ne demande jamais d'argent. Si quelqu'un vous en réclame en notre nom, c'est une escroquerie.",
      "Les candidatures ouvrent le lundi 21 septembre et ferment le vendredi 25 septembre à minuit. Les vingt noms seront annoncés le samedi 26 septembre à 20 h 30, en direct. Déposez votre dossier depuis la page BRAVO 2026.",
    ],
  },
  {
    slug: "lancement-douala",
    title: "The Pressing Community ouvre ses portes à Douala",
    excerpt:
      "Une communauté camerounaise d'entraide, de formation et d'opportunités se met en place. Le point de départ est clair : commencer ensemble, ici.",
    date: "2026-09-01",
    category: "Communauté",
    image: "community",
    body: [
      "The Pressing Community naît à Douala avec une conviction simple : la solidarité ponctuelle ne suffit pas. Il faut aussi former, accompagner, et ouvrir des portes. Aider aujourd'hui reste nécessaire. Construire demain commence le même jour.",
      "Nous rassemblons celles et ceux qui veulent contribuer — membres, bénévoles, partenaires, mécènes — autour de cinq axes : solidarité, accompagnement, formation, talents et jeunesse. Ces axes ne sont pas des tiroirs. Une action peut en ouvrir une autre.",
      "Les premières semaines sont consacrées à construire la communauté, identifier les besoins du terrain et préparer les premières actions concrètes. Nous préférons un commencement tenu à une affiche trop large.",
      "Si vous voulez en faire partie, l'adhésion est ouverte. Vous pouvez aussi soutenir une action, proposer une compétence, ou simplement écrire. Une communauté se reconnaît à celles et ceux qui s'y mettent.",
    ],
  },
  {
    slug: "action-solidarite-orphelinats",
    title: "Aux côtés des orphelinats, des veuves et des familles",
    excerpt:
      "Nos premières actions de solidarité s'adressent à celles et ceux qui en ont le plus besoin. Aider aujourd'hui, pour construire demain.",
    date: "2026-08-18",
    category: "Solidarité",
    image: "solidarity",
    body: [
      "Une aide ponctuelle règle un problème du jour. Nous savons que ce n'est pas suffisant — et pourtant, il faut parfois commencer par là : un repas, des fournitures, une présence. On ne forme pas quelqu'un qui a faim.",
      "The Pressing Community oriente ses premières actions vers les orphelinats, les veuves, les familles défavorisées et les personnes vulnérables de Douala et des environs. Ces publics ne sont pas des « cibles ». Ce sont des personnes et des structures avec qui il faut parler avant d'agir.",
      "Notre ambition, ensuite, est d'aller au-delà du don : formation, accompagnement, opportunités. Mais on ne construit pas une trajectoire sur une urgence ignorée. La solidarité reste le premier geste — pas le dernier.",
      "Merci à celles et ceux qui rendent ces premiers gestes possibles : membres, donateurs, bénévoles. Si vous voulez participer à la prochaine action, écrivez-nous ou rejoignez la communauté.",
    ],
  },
  {
    slug: "formations-automne",
    title: "Formations d'automne : anglais, TCF et initiation à l'IA",
    excerpt:
      "Les premières sessions de formation se préparent. Accessibles, utiles, ancrées dans les besoins réels des membres.",
    date: "2026-08-05",
    category: "Formation",
    image: "workshop",
    body: [
      "Anglais, préparation au TCF, initiation à l'intelligence artificielle, bases de l'entrepreneuriat : tels sont les premiers domaines que nous voulons rendre accessibles. Pas parce qu'ils sont à la mode. Parce qu'ils débloquent des portes — un entretien, un examen, un outil, un projet.",
      "Les sessions seront publiées au fur et à mesure de leur confirmation : dates, lieux, modalités, public concerné. Tant qu'une session n'est pas datée, elle n'est pas ouverte. Les membres de la communauté seront prioritaires ; les places restantes pourront l'être plus largement.",
      "Nous voulons des formations utiles, tenues, suivies. Mieux vaut un premier cycle sérieux qu'un catalogue trop large trop tôt.",
      "Si vous êtes formateur, formatrice ou professionnel et que vous souhaitez transmettre, dites-le nous. La transmission est l'une de nos valeurs — et elle a besoin de vous.",
    ],
  },
  {
    slug: "appel-talents-camerounais",
    title: "Appel aux talents : identifiez-vous, on vous accompagne",
    excerpt:
      "Vous avez un don, une discipline, une idée, et il vous manque des moyens ? The Pressing Community veut vous entendre.",
    date: "2026-07-22",
    category: "Talents",
    image: "students",
    body: [
      "Le Cameroun ne manque pas de talents. Il manque trop souvent de passerelles : un mentor, un matériel, une information, un premier réseau. Un don n'attend pas d'être « découvert » à l'étranger pour exister.",
      "Nous lançons un appel : musiciens, sportifs, créateurs, entrepreneurs, chercheurs, artisans — si vous avez quelque chose à développer et que les moyens manquent, déposez une candidature. Nous ne cherchons pas des profils parfaits. Nous cherchons le sérieux d'un geste.",
      "Nous ne promettons pas une carrière. Nous promettons d'écouter, d'orienter, et d'accompagner autant que nos ressources le permettent. C'est déjà un commencement.",
      "Les candidatures se déposent depuis la page Talents camerounais. Si vous pouvez, vous, offrir du mentorat, du matériel ou une visibilité, nous voulons aussi vous entendre.",
    ],
  },
  {
    slug: "programmes-jeunesse",
    title: "Jeunesse : apprendre, s'orienter, se tenir ensemble",
    excerpt:
      "Ateliers, métiers, numérique, sport : nous préparons des programmes pour que la jeunesse ne soit pas un public à occuper, mais une génération à former.",
    date: "2026-07-08",
    category: "Jeunesse",
    image: "youth",
    body: [
      "La jeunesse n'est pas un problème à gérer. C'est la génération que nous formons aujourd'hui. Trop de programmes s'écrivent trop tôt, trop large, trop loin du terrain. Nous voulons l'inverse : un premier cycle tenu, avec les familles, les écoles et les animateurs qui s'y mettent.",
      "Quatre portes d'entrée se dessinent : découverte des métiers, ateliers d'expression, initiation numérique, sport et vivre-ensemble. Elles peuvent se combiner. Elles devront s'ajuster à ce que Douala nous dira.",
      "Parents, jeunes, enseignants, coachs : si vous avez un lieu, un créneau, une compétence, écrivez-nous. Une idée de terrain vaut souvent mieux qu'un programme écrit trop tôt.",
      "Les inscriptions et le calendrier seront publiés ici dès qu'un premier cycle sera confirmé. En attendant, rejoindre la communauté reste la meilleure façon d'être informé.",
    ],
  },
]

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug)
}

export function formatNewsDate(iso: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T12:00:00`))
}
