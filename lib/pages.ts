import {
  accompanimentAreas,
  actionAxes,
  developmentPhases,
  formationDomains,
  solidarityAudiences,
  supportWays,
  values,
  youthPrograms,
} from "@/lib/content"
import type { PagePlaceholderProps } from "@/components/pages"
import { contactHref } from "@/lib/inquiry"

export const quiSommesNous: PagePlaceholderProps = {
  title: "Qui sommes-nous ?",
  subtitle:
    "Une communauté camerounaise engagée à créer et faciliter de meilleures opportunités pour les Camerounais.",
  cover: "president",
  ctas: [{ label: "Rejoindre la communauté", href: "/devenir-membre" }],
  sections: [
    {
      title: "Notre raison d'être",
      body: [
        "The Pressing Community est une communauté camerounaise engagée à créer et faciliter de meilleures opportunités pour les Camerounais. Nous sommes nés à Douala, avec celles et ceux qui veulent contribuer — pas avec un discours, avec des gestes.",
        "Nous voulons construire une communauté qui ne se limite pas à la solidarité ponctuelle. Aider aujourd'hui est nécessaire. Former, accompagner et ouvrir des portes, c'est ce qui change une trajectoire. L'un ne remplace pas l'autre : l'un rend l'autre possible.",
        "Nous commençons ici, avec le temps, les besoins et les ressources. Pas avec des slogans. Une communauté utile se reconnaît à ce qu'elle tient, à ce qu'elle transmet, et à ce qu'elle rend possible pour la personne d'à côté.",
      ],
    },
    {
      id: "vision",
      layout: "image",
      image: "leaders",
      title: "Notre vision",
      body: "Contribuer à l'émergence d'une génération de Camerounais mieux informés, mieux formés, mieux accompagnés et capables de saisir davantage d'opportunités. Une génération qui, à son tour, ouvre des portes.",
    },
    {
      title: "Notre mission",
      body: [
        "Nous ne voulons pas seulement aider les personnes à résoudre un problème. Nous voulons leur donner les moyens de construire une meilleure situation pour leur avenir — un métier, une formation, un réseau, une décision plus claire.",
        "Cela passe par cinq engagements concrets, que nous tenons à la fois sur le terrain et dans la durée. Ils ne sont pas des rubriques de communication : ce sont les gestes par lesquels on peut nous juger.",
      ],
      items: [
        {
          title: "Soutenir les personnes et communautés vulnérables",
          text: "orphelinats, veuves, familles, urgences sociales",
        },
        {
          title: "Faciliter l'accès à l'information et aux opportunités",
          text: "orientation claire, sans fausse promesse",
        },
        {
          title: "Accompagner nos membres dans leurs projets",
          text: "un suivi humain, pas un guichet anonyme",
        },
        {
          title: "Organiser des formations accessibles",
          text: "anglais, TCF, IA, entrepreneuriat",
        },
        {
          title: "Identifier et promouvoir les talents camerounais",
          text: "ceux qui ont un don et à qui il manque des moyens",
        },
      ],
    },
    {
      id: "valeurs",
      title: "Nos valeurs",
      subtitle: "Ce qui oriente chaque geste",
      layout: "cards",
      body: "Sept exigences, pas sept affiches. Elles servent à décider : qui nous aidons, comment nous parlons, ce que nous promettons, et ce que nous refusons.",
      items: values,
    },
    {
      id: "gouvernance",
      title: "Notre gouvernance",
      layout: "split",
      image: "formal",
      body: [
        "The Pressing Community repose sur une organisation structurée : fondateurs, gouvernance, responsables, équipes et commissions. Une communauté qui agit sans pouvoir rendre compte finit par se perdre.",
        "Nous voulons une organisation lisible, responsable, capable d'expliquer ce qu'elle fait de l'argent, du temps et de la confiance qu'on lui confie. Les photos et fonctions des membres du bureau seront publiées ici dès qu'elles seront validées.",
      ],
      theme: "white",
    },
    {
      id: "developpement",
      title: "Notre développement",
      subtitle: "Grandir sans se précipiter",
      layout: "cards",
      body: "Cinq phases, dans l'ordre. Nous ne sautons pas l'étape humaine pour coller une ambition trop large trop tôt.",
      items: developmentPhases,
    },
    {
      title: "Notre engagement",
      body: [
        "Nous voulons construire une communauté où celui qui possède une compétence peut la transmettre, et celui qui a bénéficié d'une opportunité peut, à son tour, en créer une pour quelqu'un d'autre.",
        "C'est un cercle, pas une file d'attente. Rejoindre The Pressing Community, c'est accepter d'y prendre part — selon ses moyens, sans se comparer, sans se dérober.",
      ],
      ctas: [{ label: "Rejoindre la communauté", href: "/devenir-membre" }],
    },
  ],
}

export const nosActions: PagePlaceholderProps = {
  title: "Nos grands axes d'action",
  subtitle: "Aider aujourd'hui. Construire des solutions pour demain.",
  cover: "volunteers",
  sections: [
    {
      title: "Cinq axes, une seule direction",
      body: [
        "Donner à chacun les moyens de construire une meilleure situation : voilà le fil qui relie nos actions. La solidarité ouvre le chemin. La formation et l'accompagnement le prolongent. Les talents et la jeunesse en sont l'horizon.",
        "Ces cinq axes ne sont pas des tiroirs séparés. Une action de solidarité peut déboucher sur une formation. Un accompagnement peut révéler un talent. Une session jeunesse peut devenir, plus tard, un membre qui transmet.",
        "Nous commençons à Douala, là où nous pouvons tenir ce que nous promettons. L'échelle viendra des ressources, des partenaires et de la communauté — pas d'un plan trop large trop tôt.",
      ],
    },
    {
      title: "Les 5 axes",
      subtitle: "Cliquez pour entrer dans chaque programme",
      layout: "cards",
      body: "Chaque axe a sa page, ses publics, sa manière d'agir.",
      items: actionAxes,
    },
    {
      title: "Vous voulez participer à ces actions ?",
      body: "Devenez membre, soutenez une action, ou proposez vos compétences. La communauté se construit avec celles et ceux qui s'y mettent — pas avec celles et ceux qui regardent de loin.",
      theme: "black",
      ctas: [
        { label: "Devenir membre", href: "/devenir-membre" },
        { label: "Soutenir une action", href: "/nous-soutenir/faire-un-don", variant: "outline" },
      ],
    },
  ],
}

export const solidarite: PagePlaceholderProps = {
  title: "Solidarité & action sociale",
  subtitle: "Nos premières actions sont orientées vers les personnes qui en ont le plus besoin.",
  cover: "solidarity",
  sections: [
    {
      layout: "image",
      image: "africanChildren",
      title: "Aider aujourd'hui",
      body: "Aider aujourd'hui. Construire des solutions pour demain. Une urgence — un repas, un toit, une rentrée scolaire — ne peut pas attendre que tout le reste soit en place. Nous commençons par là.",
    },
    {
      title: "Auprès de qui nous intervenons",
      layout: "cards",
      body: [
        "Nous commençons là où le besoin est le plus immédiat, à Douala et dans les communautés qui nous sollicitent. Ces publics ne sont pas des « cibles » : ce sont des personnes, des foyers, des structures avec qui il faut parler avant d'agir.",
      ],
      items: solidarityAudiences,
    },
    {
      layout: "split",
      image: "packing",
      title: "Notre approche",
      body: [
        "Notre ambition est d'aller progressivement au-delà du simple don. Une aide ponctuelle règle un problème du jour. Une formation, un accompagnement ou une opportunité changent une trajectoire.",
        "Mais on ne forme pas quelqu'un qui a faim. La solidarité reste le premier geste — pas le dernier. C'est pourquoi nos actions sociales sont liées, dès que possible, à un après : une orientation, une session, un relais.",
      ],
      ctas: [
        { label: "Devenir membre", href: "/devenir-membre" },
        { label: "Faire un don", href: "/nous-soutenir/faire-un-don", variant: "outline" },
      ],
    },
  ],
}

export const accompagnement: PagePlaceholderProps = {
  title: "Opportunités & accompagnement",
  subtitle: "Rendre l'information plus accessible pour permettre à chacun de mieux décider.",
  cover: "mentoring",
  sections: [
    {
      layout: "split",
      image: "tech",
      title: "Le principe",
      body: [
        "Trop de portes restent fermées faute d'information, d'orientation ou d'un interlocuteur de confiance. Nous accompagnons nos membres avec de l'écoute, des repères et un suivi — le temps de voir plus clair, puis de choisir.",
        "Le site parle d'orientation, jamais de garantie de visa, d'emploi ou de résultat. Nous ne vendons pas de rêve : nous aidons à lire une offre, à peser une option, à trouver le prochain pas utile.",
        "L'accompagnement dépend de nos capacités d'accueil. Nous répondons selon ce que nous pouvons réellement tenir, pas selon ce qu'il serait agréable de promettre.",
      ],
    },
    {
      title: "Ce que l'accompagnement peut couvrir",
      layout: "cards",
      body: "Quatre manières d'aider à décider. Ce n'est pas un catalogue de services garantis : c'est le périmètre dans lequel nous savons être utiles aujourd'hui.",
      items: accompanimentAreas,
    },
    {
      title: "Demande d'accompagnement",
      body: "Décrivez votre besoin le plus simplement possible : où vous en êtes, ce que vous cherchez, ce qui bloque. Écrivez-nous depuis la page contact en choisissant « Accompagnement ». Nous revenons vers vous selon nos capacités d'accueil.",
      ctas: [{ label: "Demander un accompagnement", href: contactHref("Accompagnement") }],
    },
  ],
}

export const formation: PagePlaceholderProps = {
  title: "Formation & développement",
  subtitle: "Anglais, TCF, intelligence artificielle, entrepreneuriat : des formations accessibles.",
  cover: "workshop",
  sections: [
    {
      layout: "image",
      image: "classroom",
      title: "Apprendre pour avancer",
      body: "Des sessions utiles, ancrées dans les besoins réels, ouvertes d'abord aux membres de la communauté. Apprendre doit débloquer une porte — un entretien, un projet, un outil — pas seulement remplir une salle.",
    },
    {
      title: "Nos domaines de formation",
      layout: "cards",
      body: "Nous commençons par ce qui débloque le plus de portes. D'autres modules viendront selon les formateurs, la demande et ce que nous pouvons tenir dans la durée.",
      items: formationDomains,
    },
    {
      layout: "split",
      image: "study",
      title: "Prochaines sessions",
      body: [
        "Les sessions de formation seront publiées ici dès qu'elles seront confirmées : dates, lieux, modalités, public concerné. Tant qu'une session n'est pas datée, elle n'est pas ouverte.",
        "En attendant, inscrivez-vous pour être informé en priorité. Si vous êtes formateur ou formatrice, nous voulons aussi vous entendre : la transmission est l'une de nos valeurs, et elle a besoin de vous.",
      ],
      ctas: [
        { label: "M'inscrire à une formation", href: contactHref("Formation") },
        { label: "Offrir mes compétences", href: "/nous-soutenir/competences", variant: "outline" },
      ],
    },
  ],
}

export const talents: PagePlaceholderProps = {
  title: "Talents camerounais",
  subtitle: "Nous identifions et accompagnons les jeunes talents qui manquent de moyens.",
  cover: "students",
  sections: [
    {
      layout: "image",
      image: "highFive",
      title: "Le programme",
      body: "Identifier, accompagner et donner une chance aux talents camerounais. Un don n'attend pas d'être « découvert » à l'étranger pour exister. Il a besoin d'un relais, ici.",
    },
    {
      title: "À qui s'adresse cet appel",
      body: [
        "Musique, sport, création, entrepreneuriat, recherche, artisanat : le talent a plusieurs visages. Ce qui nous intéresse, c'est le sérieux du geste et le manque de moyens pour le déployer.",
        "Nous ne cherchons pas des profils « parfaits ». Nous cherchons des personnes qui travaillent déjà, même dans l'ombre, et à qui il manque une passerelle : matériel, mentorat, visibilité, formation.",
      ],
      items: [
        { title: "Un talent identifié", text: "une pratique, un projet, une discipline que vous tenez déjà" },
        { title: "Un besoin concret", text: "matériel, mentorat, visibilité, formation — pas un souhait vague" },
        { title: "Une volonté de transmettre ensuite", text: "recevoir, puis ouvrir une porte à quelqu'un d'autre" },
      ],
    },
    {
      title: "Vous avez un talent à développer ?",
      body: "Écrivez-nous une candidature simple depuis la page contact, en choisissant « Programme talents ». Nous ne promettons pas une carrière. Nous promettons d'écouter, d'orienter, et d'accompagner autant que nos ressources le permettent.",
      ctas: [{ label: "Déposer ma candidature", href: contactHref("Programme talents") }],
    },
  ],
}

export const jeunesse: PagePlaceholderProps = {
  title: "Jeunesse & développement",
  subtitle: "Apprendre, se former, découvrir ses talents et construire son autonomie.",
  cover: "youth",
  sections: [
    {
      title: "BRAVO 2026",
      body: [
        "Vingt jeunes qui ont obtenu leur Baccalauréat ou leur GCE Advanced Level en 2026 recevront 50 000 FCFA chacun. Dix francophones, dix anglophones, de toutes les régions. L'inscription est gratuite, sans compte à créer, du lundi 21 au vendredi 25 septembre à minuit.",
        "Nous ne demandons jamais d'argent. Si quelqu'un vous en réclame en notre nom, c'est une escroquerie.",
      ],
      ctas: [{ label: "Déposer ma candidature", href: "/bravo-2026" }],
    },
    {
      layout: "split",
      image: "sports",
      title: "Nos programmes jeunesse",
      body: [
        "Des activités pour apprendre, se former et construire son autonomie. La jeunesse n'est pas un public à « occuper » : c'est la génération que nous formons aujourd'hui, à Douala, avec les familles et les écoles qui veulent s'y mettre.",
        "Ateliers, découverte des métiers, initiation numérique, sport et vivre-ensemble : le programme se précisera avec les animateurs, les établissements et ce que le terrain nous dira. Nous préférons un premier cycle tenu qu'une affiche trop large.",
      ],
    },
    {
      title: "Ce que nous voulons offrir",
      layout: "cards",
      body: "Quatre portes d'entrée, à ajuster avec le terrain. Elles peuvent se combiner : un atelier d'expression à côté d'une initiation numérique, un sport qui ouvre ensuite une découverte des métiers.",
      items: youthPrograms,
    },
    {
      title: "Participer",
      body: "Parents, jeunes, animateurs, écoles : dites-nous comment vous voulez prendre part. Une idée de terrain vaut souvent mieux qu'un programme écrit trop tôt. Si vous avez un lieu, un créneau, une compétence, nous voulons l'entendre.",
      theme: "black",
      ctas: [
        { label: "Devenir membre", href: "/devenir-membre" },
        { label: "Proposer une idée", href: "/proposer-une-idee", variant: "outline" },
      ],
    },
  ],
}

export const devenirMembre: PagePlaceholderProps = {
  title: "Devenir membre de The Pressing Community",
  subtitle: "Faire partie d'une communauté qui cherche à progresser collectivement.",
  cover: "community",
  ctas: [{ label: "Remplir ma demande d'adhésion", href: contactHref("Adhésion") }],
  sections: [
    {
      layout: "split",
      image: "community",
      title: "Vos droits en tant que membre",
      body: "L'adhésion ouvre des portes. Elle n'achète pas un privilège : elle inscrit dans un cercle de participation. Voici ce à quoi un membre peut prétendre — et ce que la communauté s'engage à organiser, selon ses moyens.",
      items: [
        { title: "Participer aux activités", text: "rencontres, actions, temps forts de la communauté" },
        { title: "Participer aux actions sociales", text: "donner de son temps, pas seulement de l'argent" },
        { title: "Participer aux formations", text: "priorité d'accès aux sessions confirmées" },
        { title: "Accéder à l'accompagnement prévu", text: "selon les capacités d'accueil, sans fausse promesse" },
        { title: "Proposer des initiatives et développer vos projets", text: "le registre des idées est ouvert à tous les membres" },
      ],
    },
    {
      title: "L'adhésion est aussi une responsabilité",
      body: [
        "Être membre ne consiste pas seulement à recevoir. Chaque membre est encouragé à contribuer, selon ses possibilités, au développement de la communauté.",
        "Une compétence, un relais, une présence, un don : il n'y a pas une seule manière d'être utile. Il y a surtout celle que l'on tient vraiment.",
      ],
    },
    {
      id: "adhesion",
      title: "Comment fonctionne l'adhésion",
      body: "Montant et périodicité des frais d'adhésion : à confirmer. Moyens de paiement : à confirmer. En attendant, envoyez votre demande depuis la page contact en choisissant « Adhésion » — nom, ville, motivation. Nous vous recontactons pour la suite.",
      ctas: [{ label: "Envoyer ma demande", href: contactHref("Adhésion") }],
    },
  ],
}

export const nousSoutenir: PagePlaceholderProps = {
  title: "Comment nous soutenir ?",
  subtitle: "Il existe plusieurs manières de contribuer. Chacune compte.",
  cover: "hands",
  sections: [
    {
      title: "Choisir sa manière",
      body: [
        "Tout le monde ne peut pas donner la même chose. C'est précisément pour cela qu'il existe plusieurs portes : don, mécénat, partenariat, compétences, matériel, idées. Aucune n'est « plus noble » que les autres.",
        "Choisissez ce qui correspond à vos moyens. La communauté a besoin de toutes ces formes de contribution, et surtout de celles que l'on peut tenir dans la durée.",
      ],
    },
    {
      title: "Les 7 façons de contribuer",
      layout: "cards",
      body: "Sept manières d'entrer. Cliquez pour le détail, puis écrivez-nous depuis la page contact en choisissant la démarche qui vous correspond.",
      items: supportWays,
    },
    {
      title: "Comment nous finançons nos actions",
      body: "Pour assurer sa pérennité, The Pressing Community mobilise plusieurs sources compatibles avec son objet : frais d'adhésion, dons, mécénat, partenariats, formations et activités économiques compatibles. Diversifier, ici, c'est éviter de tout faire reposer sur un seul élan.",
      theme: "black",
    },
  ],
}

export const faireUnDon: PagePlaceholderProps = {
  title: "Faire un don",
  subtitle: "Soutenir une action ou un programme précis.",
  cover: "donation",
  sections: [
    {
      layout: "split",
      image: "volunteersPexels",
      title: "À quoi sert un don",
      body: [
        "Un don peut financer une action de solidarité, une session de formation, du matériel pédagogique, ou l'accompagnement d'un talent. Nous voulons que chaque contribution ait une destination — pas seulement un reçu.",
        "Les montants et moyens de paiement (Orange Money, MTN MoMo, virement, PayPal) seront affichés dès qu'ils seront confirmés. En attendant, indiquez ce que vous souhaitez soutenir : nous vous recontactons avec les modalités.",
      ],
    },
    {
      title: "Confirmer un don",
      body: "Indiquez le montant envisagé et, si vous le souhaitez, l'action que vous aimeriez soutenir. Écrivez-nous depuis la page contact en choisissant « Faire un don ». Nous vous recontactons avec les modalités dès qu'elles sont ouvertes.",
      ctas: [{ label: "Confirmer un don", href: contactHref("Faire un don") }],
    },
  ],
}

export const mecene: PagePlaceholderProps = {
  title: "Devenir mécène",
  subtitle: "Contribuer régulièrement au financement de nos activités.",
  cover: "handshake",
  sections: [
    {
      layout: "split",
      image: "entrepreneur",
      title: "Votre engagement",
      body: [
        "Le mécénat permet de soutenir durablement les programmes de la communauté : formations, actions sociales, accompagnement des talents. Un don unique aide. Un engagement régulier permet de planifier.",
        "Personne physique ou organisation, vous choisissez un rythme et un objet. Nous construisons ensuite un cadre clair : objet, durée, visibilité éventuelle, redevabilité. Rien n'est affiché sans accord.",
      ],
      ctas: [{ label: "Proposer un mécénat", href: contactHref("Devenir mécène") }],
    },
  ],
}

export const partenaire: PagePlaceholderProps = {
  title: "Devenir partenaire",
  subtitle: "Construire un projet commun avec la communauté.",
  cover: "handshake",
  sections: [
    {
      layout: "split",
      image: "meeting",
      title: "Avec qui nous travaillons",
      body: [
        "Entreprises, institutions, associations et professionnels qui veulent créer un impact concret — pas seulement un logo sur une affiche. Un partenariat se juge à ce qu'il change pour les personnes, pas à la photo de signature.",
        "Il se définit par un projet : une formation, une action de terrain, un mécénat de compétences, un accès à des opportunités pour nos membres. Dites-nous ce que vous savez faire, et ce que vous voulez construire avec nous.",
      ],
    },
    {
      title: "Proposer un partenariat",
      body: "Présentez votre organisation et le projet que vous imaginez — même s'il n'est encore qu'une intention. Écrivez-nous depuis la page contact en choisissant « Partenariat ». Nous vous répondons pour en discuter.",
      ctas: [{ label: "Proposer un partenariat", href: contactHref("Partenariat") }],
    },
  ],
}

export const competences: PagePlaceholderProps = {
  title: "Offrir vos compétences",
  subtitle: "Formateur, mentor, professionnel : votre expertise vaut autant qu'une contribution financière.",
  cover: "workshop",
  sections: [
    {
      layout: "split",
      image: "collaboration",
      title: "Ce que vous pouvez apporter",
      body: [
        "Animer une session, accompagner un membre, relire un projet, organiser une action, conseiller sur un sujet que vous maîtrisez. La communauté a autant besoin de compétences que de financements.",
        "Dites-nous votre domaine et le temps que vous pouvez offrir. Nous ferons le lien avec un besoin réel — pas avec une liste d'attente abstraite. Mieux vaut deux heures tenues qu'une disponibilité vague.",
      ],
      ctas: [{ label: "Proposer mes compétences", href: contactHref("Offrir des compétences") }],
    },
  ],
}

export const materiel: PagePlaceholderProps = {
  title: "Offrir du matériel",
  subtitle: "Équipements, fournitures, matériel informatique : ce dont vous n'avez plus l'usage peut servir ailleurs.",
  cover: "packing",
  sections: [
    {
      layout: "split",
      image: "classroomPexels",
      title: "Décrire le matériel",
      body: [
        "Ordinateurs, téléphones, fournitures scolaires, livres, matériel sportif, équipements de formation : décrivez ce que vous pouvez donner, où il se trouve, et dans quel état. Un don matériel utile est un don identifié.",
        "Nous organisons la collecte selon la nature du don et le besoin du moment. Merci de ne pas déposer de matériel sans échange préalable : nous voulons éviter les stocks inutiles et les déplacements à vide.",
      ],
      ctas: [{ label: "Proposer du matériel", href: contactHref("Offrir du matériel") }],
    },
  ],
}

export const proposerIdee: PagePlaceholderProps = {
  title: "Chaque idée compte",
  subtitle: "Enregistrez une proposition dans le registre des idées de la communauté.",
  cover: "writing",
  sections: [
    {
      layout: "split",
      image: "circle",
      title: "Le principe",
      body: [
        "Celui qui possède une idée peut la proposer. Les meilleures initiatives peuvent devenir des actions, des formations ou des programmes. La communauté n'a pas le monopole de l'invention : elle a le devoir d'écouter.",
        "Inutile d'attendre d'avoir un dossier parfait. Une intention claire, un public, un geste possible : c'est déjà une proposition. Nous l'inscrivons au registre, puis nous revenons vers vous si elle peut être portée.",
      ],
    },
    {
      title: "Enregistrer mon idée",
      body: "Décrivez l'idée en quelques phrases : qui cela concerne, ce que vous imaginez, ce qu'il faudrait pour commencer. Écrivez-nous depuis la page contact en choisissant « Proposer une idée ». Nous l'inscrivons au registre et revenons vers vous si elle peut être portée.",
      ctas: [{ label: "Enregistrer mon idée", href: contactHref("Proposer une idée") }],
    },
  ],
}

export const actualites: PagePlaceholderProps = {
  title: "Actualités",
  subtitle: "Nos actions, nos formations et les opportunités de la communauté.",
  cover: "formal",
  sections: [
    {
      title: "Aucun article publié pour le moment",
      body: "Cette section restera masquée en production tant qu'aucun article n'est publié. Les filtres et la liste arriveront avec les premiers contenus.",
      ctas: [{ label: "Revenir à l'accueil", href: "/" }],
    },
  ],
}

export const contact: PagePlaceholderProps = {
  title: "Nous contacter",
  subtitle: "Une question, une proposition, une situation à signaler : écrivez-nous.",
  cover: "city",
  sections: [
    {
      title: "Moyens de contact",
      items: [
        { title: "WhatsApp", text: "La façon la plus rapide de nous joindre. 00 237 678 014 289" },
        { title: "E-mail", text: "Pour les demandes détaillées et les dossiers. contact@pressing-community.org" },
        { title: "Nous rencontrer", text: "Adresse du siège, Douala …" },
      ],
    },
    {
      title: "Envoyer un message",
      body: "Choisissez votre démarche sur la page contact : adhésion, don, partenariat, formation, et les autres actions de la communauté.",
      ctas: [{ label: "Nous écrire", href: contactHref() }],
    },
  ],
}

function legalPage(title: string, cover: string): PagePlaceholderProps {
  return {
    title,
    subtitle: "Gabarit provisoire. Le contenu juridique sera rédigé ou validé par le client.",
    sections: [
      {
        title: "Contenu à valider",
        body: `${cover} Date de dernière mise à jour : à renseigner.`,
      },
    ],
  }
}

export const mentionsLegales = legalPage(
  "Mentions légales",
  "Dénomination, statut, siège, responsable de publication et hébergeur seront indiqués ici."
)

export const politiqueConfidentialite = legalPage(
  "Politique de confidentialité",
  "Données collectées via les formulaires, finalité, durée de conservation, droit d'accès et de suppression."
)

export const conditionsAdhesion = legalPage(
  "Conditions d'adhésion",
  "Conditions d'accès, frais, droits et devoirs du membre, motifs d'exclusion."
)
