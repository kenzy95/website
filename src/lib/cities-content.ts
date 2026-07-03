/**
 * Contenu long-form par ville (pages /villes/[slug]).
 * Séparé de content-data.ts pour garder ce dernier léger.
 *
 * Honnêteté géographique imposée (brief) : Agence Simple opère pour des clients
 * partout en France, siège à Paris (229 rue Saint-Honoré). La ville est une ZONE
 * D'INTERVENTION, pas une fausse agence locale. Le contenu le dit clairement et le
 * schema ne contient qu'une seule adresse (Paris), avec areaServed sur la ville.
 *
 * Règles éditoriales Kenzy : français natif, zéro em dash, aucun prix en euros,
 * vouvoiement, voix « équipe », chiffres clients autorisés uniquement
 * (41 RDV Happycolis, 151 Invent-App, 14 % Dunforce, 300-400 msg/jour), pas de durée minimum.
 * Le tissu économique cité doit être RÉEL (pas de chiffre de marché inventé).
 */

export interface CityLink {
  href: string;
  label: string;
}

export interface CityContent {
  slug: string;
  serviceType: string;
  heroLead: string;
  heroSub: string;
  intro: string[];
  cibles: { titre: string; texte: string }[];
  distance: string[];
  casClient: { texte: string };
  maillage: {
    service: CityLink;
    caseStudy: CityLink;
    article: CityLink;
  };
  faq: { question: string; answer: string }[];
}

export const CITIES_CONTENT: Record<string, CityContent> = {
  paris: {
    slug: 'paris',
    serviceType: 'B2B Lead Generation - Paris',
    heroLead:
      "Paris concentre la plus forte densité de PME et d'entreprises B2B de France, un écosystème de scale-up post-levée particulièrement actif et un nombre élevé de sièges sociaux. C'est un terrain naturel pour la prospection ciblée : la cible y est dense, identifiable et joignable. Notre bureau est au 229 rue Saint-Honoré, dans le 1er arrondissement, ce qui rend les rencontres en présentiel simples quand elles ont du sens.",
    heroSub:
      "Nous accompagnons des clients partout en France depuis Paris. Sur la région parisienne, la proximité permet en plus des points en présentiel, mais l'essentiel du travail reste le même : cibler, écrire, délivrer, qualifier.",
    intro: [
      "Prospecter en B2B à Paris, c'est travailler sur le marché le plus dense du pays. L'Île-de-France concentre une part majeure des sièges sociaux, des éditeurs de logiciels, des cabinets et des jeunes pousses financées. Pour une campagne outbound, cette densité est un avantage direct : le volume de comptes correspondant à un client idéal donné y est plus élevé qu'ailleurs, ce qui laisse de la marge pour segmenter finement sans épuiser la cible.",
      "Cette richesse a une contrepartie : la concurrence pour l'attention y est féroce. Un décideur parisien reçoit davantage de sollicitations qu'un homologue en région. La délivrabilité technique et la personnalisation réelle deviennent donc décisives pour émerger. Notre implantation dans le 1er arrondissement nous permet aussi, quand un client le souhaite, de traiter certains rendez-vous ou cadrages en présentiel plutôt qu'en visio.",
    ],
    cibles: [
      {
        titre: 'Scale-up post-levée',
        texte:
          "L'écosystème de financement parisien produit un flux continu de sociétés qui viennent de lever et doivent structurer leur croissance commerciale. Ces comptes sont une cible naturelle pour une machine outbound déployée vite, le temps que l'équipe interne se constitue.",
      },
      {
        titre: 'Éditeurs SaaS et sociétés tech',
        texte:
          "Paris concentre une part importante de l'édition logicielle française. Ces cibles se lisent par signaux (recrutements, levées, adoption d'outils) et se prospectent efficacement en cold email comme sur LinkedIn.",
      },
      {
        titre: 'Cabinets, ESN et services aux entreprises',
        texte:
          "Le tissu de services professionnels parisien est dense : conseil, ESN, agences, finance. Ces cibles demandent un registre plus qualitatif, orienté références et relation, que nous adaptons compte par compte.",
      },
    ],
    distance: [
      "Sur la région parisienne, notre implantation change une chose concrète : nous pouvons vous rencontrer en présentiel pour le cadrage initial ou certains points d'étape, là où nous travaillons en visio avec nos clients en région. Le reste du dispositif est identique, parce que la prospection outbound se pilote de la même façon quelle que soit la géographie.",
      "L'essentiel du travail, sourcing des comptes, écriture des séquences, gestion de la délivrabilité, qualification des réponses, se fait à distance et de façon continue. La proximité géographique est un confort relationnel, pas une condition de performance. Nos résultats en région le montrent aussi bien que ceux obtenus à Paris.",
    ],
    casClient: {
      texte:
        "Notre travail ne dépend pas de la géographie du client : nous avons livré 151 rendez-vous qualifiés à Invent-App sur une verticale SaaS, dont plus de 90 % jugés qualifiés. La même mécanique de ciblage et de copy s'applique à un client parisien comme à un client basé ailleurs, avec en plus, sur Paris, la possibilité de se voir en présentiel.",
    },
    maillage: {
      service: { href: '/services/sdr-externalise', label: 'notre SDR externalisé en marque blanche' },
      caseStudy: { href: '/cas-clients/invent-app', label: '151 RDV qualifiés pour Invent-App' },
      article: {
        href: '/blog/externaliser-prospection-b2b-guide',
        label: 'le guide pour externaliser sa prospection B2B',
      },
    },
    faq: [
      {
        question: "Avez-vous vraiment un bureau à Paris ?",
        answer:
          "Oui, au 229 rue Saint-Honoré, dans le 1er arrondissement. C'est notre siège. Pour un client parisien ou francilien, cela permet des rencontres en présentiel pour le cadrage ou les points d'étape. Pour nos clients en région, nous travaillons en visio, avec exactement le même dispositif de prospection.",
      },
      {
        question: "Pourquoi prospecter en outbound à Paris plutôt qu'ailleurs ?",
        answer:
          "Parce que la densité de comptes B2B y est la plus forte de France. Pour un client idéal donné, le volume de cibles correspondantes est plus élevé en Île-de-France, ce qui permet de segmenter finement sans épuiser la liste. La contrepartie est une concurrence accrue pour l'attention, qui rend la délivrabilité et la personnalisation décisives.",
      },
      {
        question: "Quelles cibles B2B atteignez-vous sur la région parisienne ?",
        answer:
          "Principalement les scale-up post-levée, les éditeurs SaaS et sociétés tech, et le tissu dense de services aux entreprises : cabinets de conseil, ESN, agences, finance. Chaque type de cible appelle un registre et un canal différents, que nous adaptons compte par compte plutôt que d'appliquer une trame unique.",
      },
      {
        question: "La proximité géographique change-t-elle les résultats ?",
        answer:
          "Non. La proximité apporte un confort relationnel, des rencontres en présentiel possibles, mais la performance d'une campagne dépend du ciblage, du copy et de la délivrabilité, qui se pilotent à distance. Nos résultats en région sont comparables à ceux obtenus à Paris.",
      },
    ],
  },
};
