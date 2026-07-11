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

  esn: {
    slug: 'esn',
    serviceType: 'B2B Lead Generation - ESN',
    heroLead:
      "Vendre une ESN, ce n'est pas vendre un produit : c'est vendre une capacité à staffer, des références sectorielles et une confiance qui se construit avant l'appel d'offres. La prospection sortante d'une société de services se joue donc sur la crédibilité et le timing, bien plus que sur le volume brut. Cette page détaille comment nous adressons les décideurs achats et métier d'une ESN.",
    heroSub:
      "L'enjeu n'est pas d'annoncer que vous avez des consultants disponibles, mais d'arriver dans le champ de vision du bon donneur d'ordre au moment où un besoin de compétences se dessine, avec les bonnes preuves.",
    intro: [
      "La prospection pour une ESN se distingue par la nature de ce que vous vendez : de la compétence humaine, mobilisable, référencée. Le prospect n'achète pas une fonctionnalité mais la certitude que vous saurez staffer un profil rare dans les délais, sur son secteur, avec des références comparables. Cette dimension confiance change tout dans le message : une accroche efficace met en avant une référence pertinente ou une expertise verticale précise, pas une liste de technologies génériques que toutes les ESN affichent.",
      "L'autre spécificité, c'est le circuit de décision. Entre le responsable achats qui pilote le référencement fournisseur, le manager métier qui exprime le besoin réel et la direction technique qui valide les profils, plusieurs interlocuteurs coexistent. Nous cartographions ce circuit pour chaque compte cible et adressons le bon message à chaque rôle, plutôt que d'envoyer un pitch unique dans une organisation où la décision se partage.",
    ],
    painPoints: [
      {
        titre: 'Un discours indifférencié face à des concurrents nombreux',
        texte:
          "Le marché des ESN est dense et les messages se ressemblent : disponibilité de consultants, expertise large, engagement qualité. Ces formules ne distinguent personne. Nous ancrons chaque prise de contact dans une référence sectorielle vérifiable ou une expertise précise, la seule chose qui vous sépare vraiment du concurrent d'à côté.",
      },
      {
        titre: 'Un référencement fournisseur difficile à percer',
        texte:
          "Les grands comptes travaillent avec des panels fermés et un référencement lourd. Y entrer demande de viser les bons interlocuteurs achats et de documenter votre légitimité en amont. Nous identifions ces contacts et construisons une approche patiente, orientée mise en relation plutôt que vente directe.",
      },
      {
        titre: 'Des signaux de besoin invisibles sans veille',
        texte:
          "Un recrutement massif de profils techniques, un projet de transformation annoncé, un appel d'offres à venir : ces signaux indiquent un besoin de renfort proche. Sans veille structurée, votre ESN les découvre trop tard, une fois le staffing déjà attribué. Nous surveillons ces indices pour arriver avant la mise en concurrence.",
      },
      {
        titre: 'Une relation qui se construit sur la durée',
        texte:
          "En prestation de services, le premier contact aboutit rarement à un contrat immédiat : il ouvre une relation qui mûrit jusqu'au bon projet. Une prospection qui cherche la signature dès le premier email échoue. Nous privilégions un rythme de nurturing qui garde votre nom présent sans saturer l'interlocuteur.",
      },
    ],
    approche: [
      "Côté ciblage, nous croisons les comptes de votre secteur de prédilection avec des signaux de renfort : recrutements techniques en volume, projets de transformation, ouvertures de postes de direction de programme. Nous identifions dans chaque compte le responsable achats, le manager opérationnel et le référent technique, pour couvrir le circuit de décision réel d'une prestation de services.",
      "Côté message, nous remplaçons les formules génériques par des preuves. Une accroche efficace pour une ESN cite une mission comparable, un secteur maîtrisé ou une compétence rare que vous savez staffer, puis propose un échange court pour être référencé le jour où le besoin tombe. La personnalisation s'appuie sur le contexte réel du compte, pas sur une variable prénom.",
      "Côté canal, LinkedIn joue un rôle central : les décideurs achats et métier y sont actifs et la mise en relation professionnelle y est légitime. Le cold email complète pour documenter votre légitimité et relancer avec des références. Le rythme reste mesuré, cohérent avec un cycle de décision long où la constance compte plus que la fréquence.",
    ],
    casClient: {
      texte:
        "Sur des cibles B2B réputées difficiles d'accès, où la crédibilité conditionne la première réponse, nous avons atteint 14 % de taux de réponse pour Dunforce sur la population des bailleurs sociaux. La logique est transposable à une ESN qui vise un secteur exigeant : une accroche ancrée dans une référence pertinente ouvre des portes qu'un pitch générique laisse fermées.",
    },
    maillage: {
      service: { href: '/services/linkedin-outreach', label: 'notre prospection LinkedIn' },
      caseStudy: { href: '/cas-clients/dunforce', label: '14 % de réponse sur une cible difficile (Dunforce)' },
      article: {
        href: '/blog/sales-navigator-guide-ciblage',
        label: 'le guide du ciblage avec Sales Navigator',
      },
    },
    faq: [
      {
        question: "Comment prospecter pour une ESN sans ressembler à toutes les autres ?",
        answer:
          "En abandonnant le discours de disponibilité générique au profit de preuves concrètes : une référence sur le secteur du prospect, une expertise rare que vous savez staffer, une mission comparable réussie. C'est la spécificité vérifiable qui distingue votre message, pas l'annonce de consultants libres que toutes les ESN affichent.",
      },
      {
        question: "Faut-il viser les achats ou les opérationnels dans une ESN cible ?",
        answer:
          "Les deux, avec un message adapté à chacun. Le responsable achats pilote le référencement fournisseur, le manager métier exprime le besoin réel, la direction technique valide les profils. Nous cartographions ce circuit par compte et adressons le bon angle à chaque rôle, au lieu d'un pitch unique dans une décision partagée.",
      },
      {
        question: "Quels signaux indiquent qu'une entreprise va avoir besoin d'une ESN ?",
        answer:
          "Un recrutement massif de profils techniques, un projet de transformation annoncé, l'ouverture de postes de direction de programme, une levée destinée à accélérer la roadmap. Ces événements précèdent un besoin de renfort. Les surveiller permet d'entrer en contact avant que le staffing ne soit attribué à un concurrent déjà référencé.",
      },
      {
        question: "Le cycle de décision est long : la prospection sortante est-elle rentable ?",
        answer:
          "Oui, à condition de raisonner en ouverture de relation plutôt qu'en signature immédiate. Le premier contact vise à être référencé et à rester présent jusqu'au bon projet. Un rythme de relance mesuré, orienté valeur et références, maintient votre nom dans le champ de vision sans saturer un interlocuteur qui décidera plus tard.",
      },
      {
        question: "LinkedIn ou email pour prospecter des donneurs d'ordre d'ESN ?",
        answer:
          "LinkedIn en priorité, car les décideurs achats et métier y sont actifs et la mise en relation professionnelle y est naturelle pour une prestation de services. L'email complète en documentant votre légitimité et en relançant avec des références. Nous orchestrons souvent les deux, avec un tempo cohérent avec un cycle long.",
      },
    ],
  },

  'cabinet-conseil': {
    slug: 'cabinet-conseil',
    serviceType: 'B2B Lead Generation - Cabinet de conseil',
    heroLead:
      "Un cabinet de conseil ne se vend pas au volume : il se vend à l'autorité, à la relation partner-led et à la pertinence de l'expertise sur un problème précis de dirigeant. La prospection sortante d'un cabinet doit donc respecter le niveau de l'interlocuteur, souvent C-level, et s'inscrire dans un cycle long. Cette page explique comment nous ouvrons ces conversations sans dévaloriser votre positionnement.",
    heroSub:
      "Le but n'est pas de générer des demandes de devis, mais d'installer un premier échange crédible avec un décideur senior, sur un sujet où votre cabinet a une vraie légitimité à faire valoir.",
    intro: [
      "La prospection pour un cabinet de conseil obéit à des codes que la vente logicielle ignore. Votre interlocuteur est souvent un dirigeant ou un membre du comité exécutif, sollicité en permanence, qui juge un message d'abord à sa pertinence intellectuelle. Une accroche maladroite ou trop commerciale ferme la porte immédiatement et abîme la perception de votre marque. À l'inverse, un message qui démontre une compréhension fine de son enjeu ouvre une conversation que la relation partner-led transformera ensuite en mission.",
      "L'autre particularité, c'est le rôle du contenu et de la preuve d'autorité. Un cabinet se choisit sur sa capacité à éclairer une décision, pas sur un argument de prix ou de délai. La prospection efficace s'appuie donc sur des angles de fond : un point de vue tranché sur une évolution du secteur du prospect, une lecture d'un enjeu réglementaire ou stratégique. Nous construisons ces angles avec vous pour que chaque prise de contact renforce votre positionnement au lieu de le banaliser.",
    ],
    painPoints: [
      {
        titre: 'Un message trop commercial qui dévalorise l\'expertise',
        texte:
          "Un dirigeant repère instantanément une sollicitation générique et l'assimile à du démarchage. Pour un cabinet, c'est doublement coûteux : la porte se ferme et l'image se dégrade. Nous calibrons chaque message sur le registre du pair qui apporte un éclairage, pas du prestataire qui cherche un rendez-vous à tout prix.",
      },
      {
        titre: 'Des cibles C-level très difficiles à atteindre',
        texte:
          "Les décideurs seniors filtrent leurs sollicitations et délèguent une partie de leur boîte. Les atteindre demande un ciblage précis, un angle qui justifie leur attention et parfois un chemin par leur entourage direct. Nous traitons cet accès comme un travail d'orfèvre, pas comme un envoi de masse.",
      },
      {
        titre: 'Un cycle de décision long et non linéaire',
        texte:
          "Une mission de conseil se déclenche souvent des mois après le premier contact, au moment où l'enjeu devient prioritaire. Une prospection qui pousse à la signature immédiate rate ce timing. Nous entretenons une présence de fond, faite d'apports de valeur espacés, qui vous garde en tête jusqu'au déclencheur.",
      },
      {
        titre: 'Une expertise mal traduite en accroche',
        texte:
          "Les consultants raisonnent en méthodologies et en cadres. Le dirigeant, lui, pense en enjeux et en risques. Nous traduisons votre expertise en une lecture concrète du problème que vit l'interlocuteur, formulée dans son langage, pour que la valeur soit perçue dès la première ligne.",
      },
    ],
    approche: [
      "Côté ciblage, nous partons de votre positionnement d'autorité pour identifier les entreprises et les dirigeants pour qui votre expertise est immédiatement pertinente, en croisant secteur, taille, et signaux stratégiques : nomination récente, enjeu réglementaire, opération de croissance. La cible d'un cabinet se compte en dizaines de comptes prioritaires, pas en milliers, et se travaille en profondeur.",
      "Côté message, nous construisons des angles de fond. Plutôt qu'une proposition de service, la prise de contact partage un point de vue ou une observation pertinente sur l'enjeu du dirigeant, puis propose un échange d'égal à égal. Ce registre partner-led respecte le niveau de l'interlocuteur et positionne votre cabinet comme un apporteur d'éclairage, pas comme un fournisseur en quête de mandat.",
      "Côté canal, LinkedIn prime pour son registre professionnel et sa capacité à installer une relation avant le rendez-vous, appuyé le cas échéant par votre production de contenu. L'email prend le relais pour approfondir avec une note de fond. La cadence reste lente et qualitative, cohérente avec un cycle long où chaque interaction doit renforcer votre crédibilité.",
    ],
    casClient: {
      texte:
        "Sur les cibles exigeantes où la qualité de l'accroche conditionne tout, nous avons atteint 14 % de taux de réponse pour Dunforce en travaillant l'angle plutôt que le volume. Pour un cabinet de conseil, la même logique s'applique : c'est la pertinence perçue du premier message, adressé au bon dirigeant, qui décide de l'ouverture de la relation.",
    },
    maillage: {
      service: { href: '/services/linkedin-outreach', label: 'notre prospection LinkedIn ciblée' },
      caseStudy: { href: '/cas-clients/dunforce', label: '14 % de réponse par la qualité de l\'accroche (Dunforce)' },
      article: {
        href: '/blog/prospection-linkedin-methode',
        label: 'la méthode complète de prospection LinkedIn',
      },
    },
    faq: [
      {
        question: "Comment prospecter des dirigeants sans nuire à l'image du cabinet ?",
        answer:
          "En adoptant le registre du pair qui apporte un éclairage, pas celui du prestataire qui quémande un rendez-vous. Chaque message part d'une observation pertinente sur l'enjeu du dirigeant et propose un échange d'égal à égal. Ce positionnement partner-led ouvre la conversation tout en renforçant votre autorité, au lieu de la banaliser.",
      },
      {
        question: "Peut-on vraiment atteindre des cibles C-level en prospection sortante ?",
        answer:
          "Oui, mais pas par le volume. L'accès aux décideurs seniors se gagne par un ciblage précis, un angle qui justifie leur attention et parfois un chemin par leur entourage direct. Nous traitons chaque compte prioritaire individuellement, ce qui est possible parce que la cible d'un cabinet se compte en dizaines, pas en milliers.",
      },
      {
        question: "Le contenu et l'autorité jouent-ils un rôle dans votre approche ?",
        answer:
          "Un rôle central. Un cabinet se choisit sur sa capacité à éclairer une décision. Nous construisons des angles de fond, points de vue tranchés ou lectures d'enjeux, qui servent d'accroche et positionnent votre expertise. Si vous produisez du contenu, nous l'articulons à la prospection pour appuyer la crédibilité avant le rendez-vous.",
      },
      {
        question: "Comment gérez-vous un cycle de décision de plusieurs mois ?",
        answer:
          "En entretenant une présence de fond plutôt qu'en poussant à la signature. Le premier contact ouvre une relation ; des apports de valeur espacés la maintiennent jusqu'au moment où l'enjeu devient prioritaire pour le dirigeant. Cette constance qualitative capte le déclencheur au bon moment, là où une relance agressive aurait fait fuir.",
      },
      {
        question: "Quel canal privilégier pour un cabinet de conseil ?",
        answer:
          "LinkedIn en premier, pour son registre professionnel et sa capacité à installer une relation avant le rendez-vous, complété par votre production de contenu si elle existe. L'email approfondit avec une note de fond. La cadence reste lente et qualitative, chaque interaction devant renforcer votre crédibilité auprès d'un décideur senior.",
      },
    ],
  },

  'scale-up-post-levee': {
    slug: 'scale-up-post-levee',
    serviceType: 'B2B Lead Generation - Scale-up',
    heroLead:
      "Une scale-up qui vient de lever a un problème simple et brutal : le board attend de la croissance tout de suite, mais le premier Head of Sales n'est pas encore recruté et l'équipe commerciale n'existe qu'à moitié. La prospection sortante doit alors se déployer vite, sans attendre l'organisation cible. Cette page explique comment nous montons une machine outbound opérationnelle pendant que vous construisez votre équipe.",
    heroSub:
      "L'objectif n'est pas de remplacer votre future équipe commerciale, mais de tenir la pression des premiers mois post-levée en alimentant le pipeline dès maintenant, sans brûler des mois en recrutement et en rampe.",
    intro: [
      "La prospection pour une scale-up post-levée se joue sous contrainte de temps. Après une Series A ou B, le plan de croissance présenté aux investisseurs suppose une machine commerciale qui, dans les faits, reste largement à construire. Recruter un Head of Sales, puis des SDR, puis les faire monter en compétence prend des mois pendant lesquels le pipeline se doit d'exister. C'est précisément la fenêtre où une équipe outbound externe apporte le plus de valeur : elle absorbe la pression immédiate sans attendre que l'organisation cible soit en place.",
      "L'autre spécificité, c'est que tout est encore en mouvement : l'ICP se précise, le message se teste, les segments se départagent. Une scale-up n'a pas le luxe d'un playbook figé. Nous déployons donc une démarche volontairement itérative, capable de tester plusieurs cibles et plusieurs angles en parallèle sur les premières semaines, pour identifier vite ce qui convertit et fournir à votre future équipe un socle documenté plutôt qu'une page blanche.",
    ],
    painPoints: [
      {
        titre: 'La pression du board sans équipe pour l\'absorber',
        texte:
          "Le plan de croissance est signé, mais l'équipe commerciale n'est pas encore là. Chaque mois sans pipeline creuse l'écart avec les objectifs annoncés. Nous déployons une capacité outbound immédiate, jusqu'à 300 à 400 messages par jour, pour tenir la cadence pendant que vous recrutez.",
      },
      {
        titre: 'Un ICP encore flou qui coûte cher à tester en interne',
        texte:
          "Tester plusieurs cibles avec une équipe naissante disperse une ressource rare et ralentit tout. Nous menons ces tests en parallèle, sur plusieurs segments et angles, et remontons rapidement ce qui répond, sans immobiliser vos premiers commerciaux sur de l'exploration.",
      },
      {
        titre: 'Le temps de recrutement et de rampe qui joue contre vous',
        texte:
          "Entre le sourcing d'un Head of Sales, son intégration et la montée en régime des SDR, plusieurs trimestres passent. La machine outbound externe démarre en quelques semaines et comble ce trou de pipeline le temps que l'équipe interne devienne autonome.",
      },
      {
        titre: 'Un socle non documenté à transmettre à la future équipe',
        texte:
          "Beaucoup de scale-up découvrent, une fois l'équipe en place, qu'aucun apprentissage n'a été capitalisé. Nous documentons les cibles, angles et messages qui fonctionnent, pour que votre Head of Sales hérite d'un playbook validé plutôt que de repartir de zéro.",
      },
    ],
    approche: [
      "Côté ciblage, nous cadrons votre ICP avec vous puis le déclinons en plusieurs segments testables. Comme le marché n'est pas encore tranché, nous privilégions une exploration structurée sur les premières semaines : plusieurs cibles sourcées, priorisées par potentiel, avec une lecture rapide de ce qui réagit. L'objectif est de converger vite vers les segments qui remplissent réellement l'agenda.",
      "Côté message, nous testons plusieurs angles en parallèle plutôt que de parier sur un seul. Une scale-up a souvent plusieurs promesses possibles selon le segment ; nous les mettons à l'épreuve simultanément et gardons celles qui convertissent. Chaque variante s'appuie sur une accroche spécifique au prospect, jamais sur un template générique qui se remarque au premier coup d'oeil.",
      "Côté canal, nous ouvrons le cold email et LinkedIn ensemble pour maximiser la couverture pendant la fenêtre critique, avec une capacité montée rapidement via plusieurs domaines et boîtes dédiés. Le rythme est soutenu mais maîtrisé pour préserver la délivrabilité. Tout est piloté pour livrer du rendez-vous dès que possible, sans sacrifier la durabilité de l'infrastructure.",
    ],
    casClient: {
      texte:
        "Sur une verticale SaaS proche de l'univers scale-up, nous avons livré 151 rendez-vous qualifiés à Invent-App, avec plus de 90 % jugés qualifiés par le client, en itérant sur les angles jusqu'à trouver la mécanique gagnante. C'est exactement le type de montée en volume rapide et documentée qu'une scale-up post-levée recherche pour absorber ses premiers mois.",
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
        question: "En combien de temps une machine outbound est-elle opérationnelle ?",
        answer:
          "Comptez deux à quatre semaines : cadrage de l'ICP, sourcing des premières bases, configuration de l'infrastructure email et warm-up en parallèle. Les premiers rendez-vous suivent dès le démarrage des envois. C'est bien plus rapide que le temps de recruter, intégrer et faire monter en régime une équipe commerciale interne.",
      },
      {
        question: "Est-ce que vous remplacez notre future équipe commerciale ?",
        answer:
          "Non, nous comblons le trou de pipeline en attendant qu'elle existe et soit autonome. Notre rôle est d'absorber la pression des premiers mois post-levée et de documenter ce qui fonctionne. Quand votre Head of Sales et vos SDR sont en place, vous récupérez un playbook validé plutôt qu'une page blanche.",
      },
      {
        question: "Comment gérez-vous un ICP qui n'est pas encore stabilisé ?",
        answer:
          "En le traitant comme une hypothèse à tester. Nous déclinons votre cible en plusieurs segments, les sourçons et les mettons à l'épreuve en parallèle sur les premières semaines. La lecture rapide des réponses nous fait converger vers les segments qui remplissent réellement l'agenda, sans immobiliser vos premiers commerciaux sur de l'exploration.",
      },
      {
        question: "Quel volume pouvez-vous tenir pendant la phase critique ?",
        answer:
          "Nous montons une capacité pouvant atteindre 300 à 400 messages par jour, répartie sur plusieurs domaines et boîtes dédiés pour préserver la délivrabilité. Ce volume permet de tenir la cadence attendue par le board sans brûler l'infrastructure, contrairement aux promesses de volumes irréalistes par boîte que certains outils affichent.",
      },
      {
        question: "Y a-t-il un engagement de durée après une levée ?",
        answer:
          "Non. Le forfait est mensuel, résiliable avec un préavis de 30 jours, sans durée minimum. Cette souplesse est utile pour une scale-up : vous gardez la main pour internaliser dès que votre équipe est prête, tout en conservant la garantie de rendez-vous tant que la mission court.",
      },
    ],
  },

  agences: {
    slug: 'agences',
    serviceType: 'B2B Lead Generation - Marque blanche pour agences',
    heroLead:
      "Une agence marketing ou digitale à qui ses clients réclament de la prospection a deux options : recruter et manager une équipe outbound en interne, ou la déléguer en marque blanche et facturer sa marge. La seconde est plus rapide et moins risquée. Cette page explique comment nous opérons sous votre marque, de façon invisible pour votre client, pour que vous ajoutiez la prospection à votre catalogue sans changer de métier.",
    heroSub:
      "L'enjeu n'est pas de vous vendre un service de plus, mais de vous donner une capacité de production que vous revendez à vos clients comme la vôtre, avec la qualité et la discrétion que cela impose.",
    intro: [
      "La prospection en marque blanche pour une agence répond à une demande précise : vos clients veulent des rendez-vous, et vous ne voulez ni les décevoir ni bâtir un pôle outbound de toutes pièces. Monter cette compétence en interne suppose de recruter des profils rares, d'acheter et de maîtriser une stack technique, de gérer la délivrabilité au quotidien : un métier entier, avec ses risques, pour une ligne de votre offre. La marque blanche vous donne le résultat sans le chantier.",
      "La spécificité de cette relation, c'est la discrétion et l'exigence de qualité. Nous opérons sous votre nom, dans vos codes, sans jamais apparaître face au client final. Chaque livrable doit tenir votre standard, parce que c'est votre réputation qui est engagée, pas la nôtre. Cela change la manière de travailler : plus de cadrage en amont, une coordination fluide avec vous, et une capacité à absorber plusieurs de vos clients en parallèle sans perte de qualité.",
    ],
    painPoints: [
      {
        titre: 'Une demande client à laquelle vous ne pouvez pas dire non',
        texte:
          "Vos clients attendent des rendez-vous et regardent ailleurs si vous ne les fournissez pas. Bâtir un pôle outbound à la hâte pour répondre présente un risque de qualité. Nous vous donnons une capacité immédiate à revendre, pour saisir la demande sans improviser une équipe.",
      },
      {
        titre: 'Le coût et le risque de recruter en interne',
        texte:
          "Un SDR, un outil de sending, la gestion de la délivrabilité, le management : monter cela en interne pour une ligne d'offre est lourd et incertain. En marque blanche, vous transformez ce coût fixe en coût variable indexé sur vos ventes, sans immobiliser de capital ni de temps de direction.",
      },
      {
        titre: 'La réputation de votre agence engagée à chaque envoi',
        texte:
          "Une campagne mal délivrée ou un copy approximatif sous votre marque abîme votre image auprès de votre propre client. Nous appliquons les mêmes standards de délivrabilité et de copy que sur nos missions directes, parce que c'est votre nom qui est en jeu à chaque message envoyé.",
      },
      {
        titre: 'La difficulté de scaler sur plusieurs clients à la fois',
        texte:
          "Servir un client outbound est déjà exigeant ; en servir cinq en parallèle avec une petite équipe est ingérable. Notre capacité de production, jusqu'à 300 à 400 messages par jour et par client, absorbe plusieurs de vos comptes simultanément sans que la qualité décroche.",
      },
    ],
    approche: [
      "Côté organisation, nous nous plaçons en sous-traitant invisible : vous gardez la relation client, la facturation et la marque, nous produisons. Le cadrage se fait avec vous, les livrables sortent à votre standard et sous votre nom, et votre client ne nous voit jamais. Cette coordination fluide vous permet de vendre la prospection comme une compétence interne.",
      "Côté exécution, chaque client que vous nous confiez bénéficie du même socle que nos missions directes : ciblage précis, copy travaillé, infrastructure de délivrabilité montée dans les règles, qualification humaine des réponses. Nous adaptons le ciblage et le message au secteur de chacun de vos clients, sans recycler une trame unique d'un compte à l'autre.",
      "Côté canal, nous ouvrons cold email et LinkedIn selon la cible de chaque client, avec une capacité montée sur des domaines et boîtes dédiés à chaque compte pour cloisonner les réputations. Le pilotage quotidien reste de notre côté ; vous recevez un reporting clair à reformater à votre marque et à présenter à votre client comme le vôtre.",
    ],
    casClient: {
      texte:
        "Sur une cible e-commerce et logistique, exactement le type de compte qu'une agence peut nous confier en marque blanche, nous avons livré 41 rendez-vous qualifiés à Happycolis en 5 semaines, autour de 7 % de taux de réponse. Ce résultat, produit à notre standard, est celui que vous revendez à votre client sous votre nom.",
    },
    maillage: {
      service: { href: '/services/sdr-externalise', label: 'notre SDR externalisé en marque blanche' },
      caseStudy: { href: '/cas-clients/happycolis', label: '41 RDV en 5 semaines pour Happycolis' },
      article: {
        href: '/blog/cout-sdr-interne-vs-agence',
        label: 'le coût d\'un SDR interne face à une agence',
      },
    },
    faq: [
      {
        question: "Comment fonctionne la prospection en marque blanche pour une agence ?",
        answer:
          "Nous opérons sous votre nom, sans jamais apparaître face à votre client. Vous gardez la relation, la marque et la facturation ; nous produisons le ciblage, le copy, l'envoi et la qualification. Vous recevez des livrables et un reporting à votre standard, que vous présentez comme réalisés en interne. Votre client ne nous connaît pas.",
      },
      {
        question: "Votre intervention est-elle vraiment invisible pour notre client ?",
        answer:
          "Oui. Domaines, boîtes d'envoi, copy et reporting sortent sous votre marque et dans vos codes. Nous ne prenons aucun contact direct avec votre client final et n'apparaissons sur aucun livrable. La discrétion fait partie du cahier des charges de la marque blanche, au même titre que la qualité de production.",
      },
      {
        question: "Pourquoi ne pas recruter une équipe outbound en interne ?",
        answer:
          "Parce que c'est un métier entier, avec ses risques, monté pour une seule ligne de votre offre : profils rares à recruter, stack à acheter et maîtriser, délivrabilité à gérer chaque jour, management à assurer. La marque blanche transforme ce coût fixe et incertain en coût variable indexé sur vos ventes, disponible immédiatement.",
      },
      {
        question: "Pouvez-vous gérer plusieurs de nos clients en parallèle ?",
        answer:
          "Oui, avec une infrastructure dédiée par client pour cloisonner les réputations d'envoi et une capacité pouvant atteindre 300 à 400 messages par jour par compte. Chaque client reçoit un ciblage et un message adaptés à son secteur, sans trame recyclée d'un compte à l'autre. La qualité ne décroche pas quand le nombre de comptes augmente.",
      },
      {
        question: "Comment se répartit la marge entre votre agence et la nôtre ?",
        answer:
          "Vous nous rémunérez pour la production et vous fixez librement le prix de revente à votre client : la marge est la vôtre. Sans engagement de durée de notre côté, préavis de 30 jours, vous gardez la main sur la relation commerciale et sur votre positionnement tarifaire, que nous n'avons pas à connaître.",
      },
    ],
  },
};
