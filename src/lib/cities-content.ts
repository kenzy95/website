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
  lyon: {
    slug: 'lyon',
    serviceType: 'B2B Lead Generation - Lyon',
    heroLead:
      "Lyon est le deuxième pôle économique français et un territoire à la personnalité industrielle marquée : chimie et santé dans la Vallée de la Chimie et autour de Lyonbiopôle, mécanique, agroalimentaire, et un secteur numérique en croissance autour de la Part-Dieu et de la Confluence. Cette diversité produit un vivier de comptes B2B dense mais moins saturé qu'à Paris, ce qui en fait un terrain de prospection intéressant.",
    heroSub:
      "Nous accompagnons des clients lyonnais et de toute la région Auvergne-Rhône-Alpes depuis notre siège parisien, en visio le plus souvent, en présentiel quand le déplacement se justifie. La géographie ne change pas la méthode : cibler juste, écrire vrai, délivrer, qualifier.",
    intro: [
      "Prospecter à Lyon, c'est composer avec un tissu économique double : d'un côté une industrie établie, faite d'ETI familiales et de sous-traitants techniques au cycle d'achat long ; de l'autre un écosystème tech et service plus jeune, plus réactif, qui se prospecte comme une scale-up parisienne. Les deux ne demandent ni le même message ni le même canal, et confondre les deux est la première erreur d'une campagne mal cadrée sur ce territoire.",
      "L'avantage de Lyon, c'est que la cible y est identifiable et joignable sans être sur-sollicitée. Un dirigeant d'ETI industrielle rhônalpine reçoit nettement moins de prospection froide qu'un homologue parisien, ce qui laisse plus de place à un message soigné pour émerger. Encore faut-il parler sa langue : références concrètes, preuve d'usage, ton posé. C'est exactement le type d'adaptation que nous faisons compte par compte.",
    ],
    cibles: [
      {
        titre: 'ETI et PME industrielles',
        texte:
          "Le socle industriel de la région, mécanique, chimie, agroalimentaire, plasturgie, regroupe des ETI et PME souvent familiales. Ces comptes se prospectent avec un registre qualitatif, orienté références et fiabilité, et un cycle d'achat que nous respectons plutôt que de le brusquer.",
      },
      {
        titre: 'Éditeurs SaaS et sociétés tech',
        texte:
          "L'écosystème numérique lyonnais, concentré autour de la Part-Dieu, de la Confluence et de plusieurs incubateurs, produit des éditeurs et sociétés de service tech qui se lisent par signaux et se prospectent efficacement en cold email comme sur LinkedIn.",
      },
      {
        titre: 'Santé, biotech et medtech',
        texte:
          "Le pôle santé lyonnais, structuré autour de Lyonbiopôle et d'un tissu de laboratoires et de medtech, appelle une prospection précise, respectueuse des interlocuteurs techniques et des contraintes réglementaires du secteur.",
      },
    ],
    distance: [
      "Pour un client lyonnais, l'essentiel du dispositif se pilote à distance : sourcing des comptes dans la région, écriture des séquences, gestion de la délivrabilité, qualification des réponses. C'est ce travail continu, invisible mais décisif, qui fait le rendement d'une campagne, pas la présence d'un bureau au coin de la rue.",
      "Quand un déplacement a du sens, un cadrage stratégique important, un point de bilan, nous montons à Lyon plutôt qu'en visio. Mais nous sommes transparents : nous ne sommes pas une agence lyonnaise, nous sommes une équipe parisienne qui prospecte pour des clients partout en France, Lyon compris, avec le même niveau d'exigence.",
    ],
    casClient: {
      texte:
        "Notre performance ne dépend pas de la ville du client : nous avons généré 41 rendez-vous qualifiés en cinq semaines pour Happycolis, sur une cible opérationnelle exigeante. La même mécanique de ciblage et de copy s'applique à une ETI industrielle rhônalpine comme à n'importe quel compte français, avec sur Lyon la possibilité de points en présentiel.",
    },
    maillage: {
      service: { href: '/services/cold-email', label: 'notre agence cold email' },
      caseStudy: { href: '/cas-clients/happycolis', label: '41 RDV qualifiés en 5 semaines pour Happycolis' },
      article: {
        href: '/blog/sales-navigator-guide-ciblage',
        label: 'notre guide du ciblage sur Sales Navigator',
      },
    },
    faq: [
      {
        question: "Avez-vous un bureau à Lyon ?",
        answer:
          "Non. Notre siège est à Paris, au 229 rue Saint-Honoré. Nous prospectons pour des clients lyonnais et de toute la région Auvergne-Rhône-Alpes à distance, avec des déplacements possibles quand un rendez-vous important le justifie. Nous préférons être clairs là-dessus plutôt que d'afficher une fausse adresse locale.",
      },
      {
        question: "La prospection fonctionne-t-elle sur des ETI industrielles rhônalpines ?",
        answer:
          "Oui, à condition d'adapter le registre. Une ETI familiale de la mécanique ou de la chimie n'a pas le même cycle d'achat ni la même sensibilité qu'une scale-up. Nous travaillons un message plus qualitatif, orienté références et preuve, et nous respectons un tempo d'achat plus long plutôt que de forcer la vente.",
      },
      {
        question: "Quelles cibles atteignez-vous sur la région lyonnaise ?",
        answer:
          "Principalement les ETI et PME industrielles, les éditeurs SaaS et sociétés tech du bassin Part-Dieu et Confluence, et le pôle santé, biotech et medtech structuré autour de Lyonbiopôle. Chaque type de cible appelle un canal et un ton différents, que nous calibrons compte par compte.",
      },
      {
        question: "Pourquoi prospecter à Lyon plutôt que de viser uniquement Paris ?",
        answer:
          "Parce que la cible y est moins sur-sollicitée. Un décideur rhônalpin reçoit moins de prospection froide qu'un parisien, ce qui laisse plus de place à un message soigné pour émerger. La contrepartie est un tissu plus hétérogène, industriel et tech mêlés, qui exige un ciblage rigoureux pour ne pas diluer l'effort.",
      },
    ],
  },
  bordeaux: {
    slug: 'bordeaux',
    serviceType: 'B2B Lead Generation - Bordeaux',
    heroLead:
      "Bordeaux a changé de visage : à la filière viticole et agroalimentaire historique s'est ajouté un écosystème tech jeune, porté par des lieux comme la French Tech Bordeaux et une nouvelle vague de start-up early-stage. Cette métropole en croissance attire des fondateurs et des PME qui découvrent souvent la prospection structurée, ce qui en fait un terrain à fort potentiel pour l'outbound bien mené.",
    heroSub:
      "Nous accompagnons des clients bordelais et de toute la Nouvelle-Aquitaine depuis Paris, à distance pour l'essentiel, en présentiel quand le déplacement est justifié. La méthode ne bouge pas avec la géographie : cibler juste, écrire vrai, délivrer, qualifier.",
    intro: [
      "Prospecter à Bordeaux, c'est souvent adresser des entreprises pour qui la prospection sortante est neuve. Beaucoup de PME régionales et de jeunes pousses ont grandi par le bouche-à-oreille, le réseau local ou l'inbound, et n'ont jamais structuré de machine outbound. C'est une opportunité : la cible n'est pas blasée par des dizaines de sollicitations mal faites, un message juste y a d'autant plus d'impact.",
      "L'autre spécificité bordelaise, c'est la coexistence de mondes très différents : la tech early-stage qui se prospecte vite et par signaux, et l'agroalimentaire ou le viticole, plus traditionnels, où la relation et la crédibilité priment sur la vitesse. Traiter ces deux univers avec la même trame serait une faute. Nous calibrons le ciblage et le ton compte par compte, en fonction de ce que le compte attend vraiment.",
    ],
    cibles: [
      {
        titre: 'Start-up et scale-up early-stage',
        texte:
          "L'écosystème French Tech bordelais produit des jeunes sociétés qui doivent aller chercher leurs premiers clients au-delà de leur réseau. Une machine outbound déployée vite leur donne un canal d'acquisition prévisible, le temps que l'équipe commerciale interne se constitue.",
      },
      {
        titre: 'Agroalimentaire, vin et spiritueux',
        texte:
          "La filière historique de la région, du négoce viticole aux acteurs de l'agroalimentaire, se prospecte sur un registre relationnel et crédible. Nous privilégions un message posé, orienté références et compréhension du métier, plutôt qu'une approche agressive qui ferait fuir ces interlocuteurs.",
      },
      {
        titre: 'Services aux entreprises et PME en croissance',
        texte:
          "Le tissu de services professionnels bordelais, conseil, agences, sociétés de service, regroupe des PME qui découvrent souvent la prospection structurée. Ces comptes réagissent bien à une approche méthodique et personnalisée, à condition de bien définir en amont leur client idéal.",
      },
    ],
    distance: [
      "Pour un client bordelais, tout le dispositif de fond se pilote à distance : identification des comptes dans la région, écriture des séquences, gestion de la délivrabilité, qualification des réponses. Ce travail continu est ce qui produit les rendez-vous, indépendamment de la présence physique d'une équipe sur place.",
      "Quand un moment clé le justifie, un cadrage initial, un point de bilan, nous nous déplaçons à Bordeaux. Mais nous restons honnêtes sur ce que nous sommes : pas une agence bordelaise, une équipe parisienne qui prospecte pour des clients de toute la France, la Nouvelle-Aquitaine comprise, avec la même exigence partout.",
    ],
    casClient: {
      texte:
        "Notre résultat ne dépend pas de la géographie : nous avons livré 151 rendez-vous qualifiés à Invent-App sur une verticale SaaS, dont plus de 90 % jugés qualifiés. Cette mécanique de ciblage et de copy s'applique aussi bien à une start-up early-stage bordelaise qu'à une PME de service régionale, avec sur Bordeaux la possibilité de se voir en présentiel.",
    },
    maillage: {
      service: { href: '/services/linkedin-outreach', label: 'notre agence de prospection LinkedIn' },
      caseStudy: { href: '/cas-clients/invent-app', label: '151 RDV qualifiés pour Invent-App' },
      article: {
        href: '/blog/definir-client-ideal-ciblage-b2b',
        label: 'notre méthode pour définir son client idéal',
      },
    },
    faq: [
      {
        question: "Êtes-vous une agence bordelaise ?",
        answer:
          "Non. Notre siège est à Paris, au 229 rue Saint-Honoré. Nous prospectons pour des clients bordelais et de toute la Nouvelle-Aquitaine à distance, avec des déplacements ponctuels quand un rendez-vous le justifie. Nous préférons l'annoncer clairement plutôt que d'afficher une fausse implantation locale.",
      },
      {
        question: "La prospection marche-t-elle si mon marché n'a pas l'habitude d'être démarché ?",
        answer:
          "C'est souvent un avantage. Sur un marché peu sollicité, comme beaucoup de PME et de jeunes pousses bordelaises, un message juste et personnalisé émerge plus facilement que là où les décideurs reçoivent des dizaines de mails froids par semaine. La condition, c'est un ciblage précis et un copy soigné, jamais un envoi de masse générique.",
      },
      {
        question: "Comment adaptez-vous l'approche entre tech et agroalimentaire ?",
        answer:
          "Ce sont deux logiques distinctes. La tech early-stage se prospecte par signaux, avec un ton direct et une promesse claire. Le viticole et l'agroalimentaire demandent un registre plus relationnel, orienté crédibilité et compréhension du métier. Nous ne réutilisons pas la même trame d'un univers à l'autre, nous la construisons pour chaque cible.",
      },
      {
        question: "Quelles cibles atteignez-vous en Nouvelle-Aquitaine ?",
        answer:
          "Principalement les start-up et scale-up early-stage de l'écosystème French Tech, la filière agroalimentaire, vin et spiritueux, et le tissu de services aux entreprises et de PME en croissance. Chaque profil appelle un canal et un ton propres, que nous définissons après avoir clarifié le client idéal.",
      },
    ],
  },
  lille: {
    slug: 'lille',
    serviceType: 'B2B Lead Generation - Lille',
    heroLead:
      "Lille combine un héritage retail et distribution puissant, avec la présence de grands sièges de la grande distribution et de leur écosystème de fournisseurs, et un pôle numérique dynamique autour d'Euratechnologies et de la Plaine Images. Sa position frontalière avec la Belgique élargit encore le terrain de jeu. Pour l'outbound, cette double identité, commerce et tech, ouvre des cibles B2B variées et accessibles.",
    heroSub:
      "Nous accompagnons des clients lillois et de tous les Hauts-de-France depuis Paris, à une heure de TGV, à distance pour l'essentiel et en présentiel quand cela se justifie. La méthode reste la même quelle que soit la ville : cibler juste, écrire vrai, délivrer, qualifier.",
    intro: [
      "Prospecter à Lille, c'est bénéficier d'un tissu B2B structuré par la distribution. La région concentre des sièges de la grande distribution et toute une chaîne de fournisseurs, prestataires et éditeurs qui gravitent autour du retail. Ces comptes ont une culture de la négociation forte, ils attendent du concret et vont vite à l'essentiel, ce qui récompense un message direct et sans détour.",
      "À côté de ce socle commercial, le pôle tech lillois, structuré autour d'Euratechnologies et de la Plaine Images, produit un flux d'éditeurs SaaS et de sociétés numériques qui se prospectent comme partout ailleurs, par signaux et personnalisation. La proximité de Paris, à une heure de train, rend d'ailleurs les points en présentiel simples quand un dossier le mérite, sans que cela change la façon dont la campagne se pilote.",
    ],
    cibles: [
      {
        titre: 'Retail B2B et fournisseurs de la distribution',
        texte:
          "L'écosystème qui gravite autour des sièges de la grande distribution, fournisseurs, prestataires logistiques, éditeurs de solutions retail, forme une cible dense. Ces comptes attendent un message direct, chiffré et concret, en phase avec une culture de la négociation exigeante.",
      },
      {
        titre: 'Éditeurs SaaS et sociétés tech',
        texte:
          "Le pôle numérique d'Euratechnologies et de la Plaine Images regroupe des éditeurs et sociétés de service tech qui se lisent par signaux, recrutements, levées, adoption d'outils, et se prospectent efficacement en cold email comme sur LinkedIn.",
      },
      {
        titre: 'Services aux entreprises et acteurs transfrontaliers',
        texte:
          "Le tissu de services professionnels des Hauts-de-France, souvent tourné aussi vers la Belgique, offre des comptes intéressants pour une prospection méthodique. La dimension transfrontalière ouvre des segments que nous savons cibler et adresser proprement.",
      },
    ],
    distance: [
      "Pour un client lillois, l'essentiel du dispositif se pilote à distance : identification des comptes de la région, écriture des séquences, gestion de la délivrabilité, qualification des réponses. C'est ce travail de fond, continu, qui produit les rendez-vous, pas la présence d'un bureau sur la Grand-Place.",
      "La proximité de Paris facilite les rencontres : une heure de TGV suffit pour un cadrage important ou un point de bilan en présentiel. Mais nous restons transparents sur notre nature : une équipe parisienne qui prospecte pour des clients dans toute la France, Hauts-de-France compris, avec le même niveau d'exigence, et non une agence lilloise de façade.",
    ],
    casClient: {
      texte:
        "Notre performance ne tient pas à la géographie du client : nous avons obtenu 14 % de taux de réponse pour Dunforce sur une cible de bailleurs sociaux, un segment difficile à ouvrir. La même rigueur de ciblage, de copy et de délivrabilité s'applique à un fournisseur retail lillois comme à n'importe quel compte français, avec sur Lille des rencontres en présentiel facilitées par le TGV.",
    },
    maillage: {
      service: { href: '/services/cold-email', label: 'notre agence cold email' },
      caseStudy: { href: '/cas-clients/dunforce', label: '14 % de taux de réponse pour Dunforce' },
      article: {
        href: '/blog/delivrabilite-email-spf-dkim-dmarc',
        label: 'notre guide de la délivrabilité email (SPF, DKIM, DMARC)',
      },
    },
    faq: [
      {
        question: "Avez-vous une agence à Lille ?",
        answer:
          "Non. Notre siège est à Paris, au 229 rue Saint-Honoré, à une heure de TGV de Lille. Nous prospectons pour des clients lillois et de tous les Hauts-de-France à distance, avec des déplacements simples quand un rendez-vous le justifie. Nous préférons être clairs plutôt que d'afficher une fausse adresse locale.",
      },
      {
        question: "La prospection est-elle adaptée aux acteurs du retail et de la distribution ?",
        answer:
          "Oui, à condition d'assumer un message direct. La culture de la négociation est forte dans l'écosystème de la distribution lilloise : les décideurs attendent du concret, des chiffres et une promesse claire, pas un mail alambiqué. Nous calibrons un copy franc et argumenté, qui va vite à l'essentiel.",
      },
      {
        question: "Prenez-vous en compte la dimension transfrontalière avec la Belgique ?",
        answer:
          "Quand c'est pertinent, oui. Une partie du tissu économique des Hauts-de-France est tournée vers la Belgique, ce qui ouvre des segments supplémentaires. Nous savons cibler et adresser ces comptes, en adaptant la langue et le registre au marché visé, dans le respect des règles de prospection en vigueur.",
      },
      {
        question: "Quelles cibles atteignez-vous dans les Hauts-de-France ?",
        answer:
          "Principalement le retail B2B et les fournisseurs de la distribution, les éditeurs SaaS et sociétés tech d'Euratechnologies et de la Plaine Images, et le tissu de services aux entreprises, dont des acteurs transfrontaliers. Chaque cible appelle un canal et un ton propres, que nous ajustons compte par compte.",
      },
    ],
  },
};
