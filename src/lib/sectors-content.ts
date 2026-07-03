/**
 * Contenu long-form par secteur (pages /secteurs/[slug]).
 * Séparé de content-data.ts (qui porte meta/keyword/title) pour garder ce dernier léger.
 * Chaque entrée doit être SPÉCIFIQUE au secteur : pain points, approche et FAQ propres,
 * pour éviter le piège des doorway pages (pages quasi identiques pénalisées par Google).
 *
 * Règles éditoriales Kenzy : français natif, zéro em dash, aucun prix en euros,
 * vouvoiement, voix « équipe », chiffres clients autorisés uniquement
 * (41 RDV Happycolis, 151 Invent-App, 14 % Dunforce, 300-400 msg/jour), pas de durée minimum.
 */

export interface SectorLink {
  href: string;
  label: string;
}

export interface SectorContent {
  slug: string;
  serviceType: string;
  heroLead: string;
  heroSub: string;
  intro: string[];
  painPoints: { titre: string; texte: string }[];
  approche: string[];
  casClient: { texte: string };
  maillage: {
    service: SectorLink;
    caseStudy: SectorLink;
    article: SectorLink;
  };
  faq: { question: string; answer: string }[];
}

export const SECTORS_CONTENT: Record<string, SectorContent> = {
  saas: {
    slug: 'saas',
    serviceType: 'B2B Lead Generation - SaaS',
    heroLead:
      "La prospection sortante d'un éditeur SaaS ne se pilote pas comme celle d'un cabinet ou d'une ESN. Le marché se lit par signaux, le cycle varie selon que vous vendez à une équipe opérationnelle ou à la direction technique, et votre prospect reçoit déjà dix messages de concurrents chaque semaine. Cette page explique comment nous adaptons le ciblage, le message et le canal à ces contraintes propres au logiciel.",
    heroSub:
      "L'objectif n'est pas d'arroser tout votre TAM, mais d'aller chercher les comptes qui montrent une intention réelle, au bon moment, avec un discours qui parle problème métier plutôt que liste de fonctionnalités.",
    intro: [
      "La prospection B2B pour un éditeur SaaS a une particularité que peu d'agences intègrent : votre marché est lisible en temps réel. Une entreprise qui recrute un poste précis, qui adopte un outil complémentaire au vôtre, qui vient de lever des fonds ou d'ouvrir un bureau devient une cible chaude, souvent avant même qu'elle ne se sache en recherche. Ces signaux sont publics. Les exploiter change radicalement le rendement d'une campagne, parce que vous arrivez au moment où le besoin émerge plutôt que par hasard.",
      "Le piège classique du SaaS, c'est de traiter l'ensemble du marché adressable comme une masse indifférenciée. Un produit au stade early n'a pas la même cible ni le même argumentaire qu'un logiciel mature qui monte en gamme. Nous segmentons votre client idéal par stade de maturité, par taille de l'équipe utilisatrice et par stack technique déjà en place, pour adresser chaque segment avec l'angle qui lui correspond, au lieu d'un pitch produit unique récité à tout le monde.",
    ],
    painPoints: [
      {
        titre: 'Un ICP trop large qui dilue le message',
        texte:
          "Quand la cible va de la TPE au grand compte, aucun message ne résonne vraiment. Le SaaS horizontal souffre particulièrement de ce flou. Nous resserrons sur les segments où votre produit a déjà fait ses preuves, mesuré par vos propres taux de rétention et d'expansion, avant d'élargir méthodiquement.",
      },
      {
        titre: 'Des signaux d\'achat laissés de côté',
        texte:
          "Levées, recrutements sur des postes clés, changements d'outillage, ouverture de nouveaux marchés : ces événements prédisent l'intention et sont accessibles. La plupart des équipes SaaS ne les intègrent pas au ciblage faute de temps ou d'outil. Nous les surveillons et déclenchons la prise de contact quand le besoin est frais.",
      },
      {
        titre: 'Un discours feature au lieu d\'un discours problème',
        texte:
          "Les équipes produit adorent parler fonctionnalités. Le décideur, lui, achète une résolution de problème et un gain chiffrable. Nous traduisons chaque brique de votre produit en bénéfice métier concret pour l'interlocuteur ciblé, sans jargon interne ni superlatif.",
      },
      {
        titre: 'Une boîte de réception saturée par la concurrence',
        texte:
          "Sur un marché logiciel encombré, votre prospect reçoit chaque semaine plusieurs sollicitations quasi identiques. La délivrabilité technique et la personnalisation réelle ne sont plus des bonus : elles décident si votre email atteint la boîte principale et retient l'attention, ou s'il rejoint le bruit ambiant.",
      },
    ],
    approche: [
      "Côté ciblage, nous croisons des critères firmographiques (secteur, effectif, technologies détectées sur le site) avec des signaux temporels : une levée récente, un recrutement de Head of quelque chose, l'adoption d'un outil voisin du vôtre. Cette couche de signaux transforme une liste statique en pipeline de comptes chauds, priorisés par probabilité d'intention.",
      "Côté message, nous construisons un angle par segment. L'ouverture s'appuie sur une observation vérifiable propre au prospect, pas sur une formule de politesse. Le corps expose le problème que vous résolvez pour ce type d'entreprise à ce stade précis, puis propose une conversation courte plutôt qu'une démo lourde. Chaque variante tourne en plusieurs versions pour préserver l'unicité aux yeux des filtres.",
      "Côté canal, le cold email porte le volume et la scalabilité, indispensables quand la cible SaaS se compte en milliers de comptes. LinkedIn prend le relais sur les segments où l'email professionnel est difficile à obtenir ou quand l'interlocuteur est très sollicité. Les deux canaux s'orchestrent souvent dans une même séquence, avec un rythme réaliste qui préserve vos domaines.",
    ],
    casClient: {
      texte:
        "Sur la verticale SaaS B2B, nous avons livré 151 rendez-vous qualifiés à Invent-App, dont plus de 90 % jugés qualifiés par le client. Le ciblage par stade et la traduction produit vers problème métier y ont joué un rôle central. Le déroulé complet, angles testés compris, est détaillé dans le cas client.",
    },
    maillage: {
      service: { href: '/services/cold-email', label: 'notre agence cold email' },
      caseStudy: { href: '/cas-clients/invent-app', label: '151 RDV qualifiés pour Invent-App' },
      article: {
        href: '/blog/definir-client-ideal-ciblage-b2b',
        label: 'définir son client idéal et son ciblage B2B',
      },
    },
    faq: [
      {
        question: "Comment ciblez-vous les bons décideurs dans une entreprise SaaS ?",
        answer:
          "Nous partons de votre client idéal segmenté par stade et par taille d'équipe, puis nous identifions les fonctions décisionnaires réelles selon votre produit : direction technique pour un outil d'infrastructure, direction métier pour un logiciel opérationnel, direction générale sur les petits comptes. L'enrichissement de données nous donne les contacts, les signaux d'achat nous donnent le timing.",
      },
      {
        question: "Le cold email fonctionne-t-il encore pour vendre un SaaS en 2026 ?",
        answer:
          "Oui, à condition de traiter la délivrabilité comme un métier et d'abandonner les templates génériques saturés. Sur une cible SaaS bien configurée, avec domaines dédiés, warm-up et personnalisation à l'échelle, le canal reste l'un des plus rentables pour ouvrir des comptes. Il perd toute efficacité dès qu'il est traité comme de l'envoi de masse.",
      },
      {
        question: "Quels signaux d'achat surveillez-vous pour un éditeur SaaS ?",
        answer:
          "Levées de fonds, recrutements sur des postes révélateurs d'un projet, adoption d'outils complémentaires ou concurrents, ouverture de bureaux, changements de dirigeants. Chaque signal indique qu'un besoin proche du vôtre vient d'apparaître. Nous les intégrons au ciblage pour contacter au moment où l'intention est la plus forte.",
      },
      {
        question: "Faut-il privilégier le cold email ou LinkedIn pour un SaaS ?",
        answer:
          "Cela dépend du segment. Le cold email domine sur les cibles volumineuses où l'email professionnel est enrichissable. LinkedIn prend l'avantage sur les décideurs très sollicités ou quand l'email est difficile à trouver. Sur la plupart des campagnes SaaS, nous orchestrons les deux dans une séquence unique plutôt que de choisir.",
      },
      {
        question: "Combien de temps avant les premiers rendez-vous SaaS ?",
        answer:
          "Comptez deux à quatre semaines de mise en route : cadrage, sourcing de la base, configuration de l'infrastructure email et warm-up. Les premiers rendez-vous arrivent ensuite, dès que les envois commerciaux démarrent. Le rythme se stabilise après le premier mois, une fois les angles gagnants identifiés.",
      },
    ],
  },
};
