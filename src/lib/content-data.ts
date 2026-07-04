/**
 * Source de vérité provisoire pour les pages services / secteurs / villes / outils / comparatifs.
 * Chaque entrée pose URL + meta SEO de base + cibles keyword.
 * Le contenu détaillé (paragraphes, FAQ, schemas spécifiques) sera produit par Théo
 * sur la base des briefs Sacha et stocké soit en MDX (collections), soit ici si trop court.
 */

export interface ServicePage {
  slug: string;
  title: string;
  shortName: string;
  description: string;
  metaDescription: string;
  keyword: string;
  serviceType: string;
}

/**
 * Décision SEO 2026-07-03 (mono-offre) : la requête "agence prospection b2b"
 * est visée par la HOME, pas par une page service dédiée (cannibalisation).
 * Les 3 services restants visent des requêtes canal/format distinctes.
 */
export const SERVICES: ServicePage[] = [
  {
    slug: 'cold-email',
    shortName: 'Cold email',
    title: 'Agence cold email',
    description:
      "Délivrabilité, copy travaillé, séquences multi-touch. On gère SPF/DKIM/DMARC, warm-up, segmentation et A/B test des objets.",
    metaDescription:
      "Agence cold email B2B : délivrabilité, copy, séquences. Configuration SPF/DKIM/DMARC, warm-up, A/B test. Forfait mensuel sans engagement.",
    keyword: 'agence cold email',
    serviceType: 'Cold Email Outreach',
  },
  {
    slug: 'linkedin-outreach',
    shortName: 'LinkedIn outreach',
    title: 'Agence prospection LinkedIn',
    description:
      "Prospection LinkedIn ciblée via Sales Navigator. Scripts personnalisés, rythme réaliste, suivi des conversations, pas de spam mass-message.",
    metaDescription:
      "Agence prospection LinkedIn B2B : ciblage Sales Navigator, scripts personnalisés, rythme réaliste. Forfait mensuel avec garantie de RDV.",
    keyword: 'agence prospection linkedin',
    serviceType: 'LinkedIn Outreach',
  },
  {
    slug: 'sdr-externalise',
    shortName: 'SDR externalisé',
    title: 'SDR externalisé en marque blanche',
    description:
      "Une équipe de prospection complète en marque blanche, sans recruter. Capacité 300-400 messages/jour, qualification en amont, RDV livrés sur votre agenda.",
    metaDescription:
      "SDR externalisé en marque blanche. Équipe complète sans recrutement, 300-400 msg/jour, RDV qualifiés sur votre agenda. Garantie minimum vital.",
    keyword: 'agence sdr externalisé',
    serviceType: 'Outsourced SDR',
  },
];

export interface SectorPage {
  slug: string;
  shortName: string;
  title: string;
  description: string;
  metaDescription: string;
  keyword: string;
  angle: string;
}

export const SECTORS: SectorPage[] = [
  {
    slug: 'saas',
    shortName: 'SaaS',
    title: 'Prospection B2B pour éditeurs SaaS',
    description:
      "Atteindre les bons décideurs SaaS B2B sans saturer la SERP. ICP segmenté par stade (early, scale, mature), cycle court, signaux d'achat techniques.",
    metaDescription:
      "Agence prospection B2B pour éditeurs SaaS : ICP par stade, signaux techniques, cycle court. Forfait mensuel avec garantie de RDV qualifiés.",
    keyword: 'agence prospection saas',
    angle: 'product-market fit, ICP par stade, signaux d\'usage, integrations',
  },
  {
    slug: 'esn',
    shortName: 'ESN',
    title: 'Prospection commerciale pour ESN',
    description:
      "Représentation commerciale pour ESN : staffing, Capgemini-like, mise en avant des références sectorielles, signaux de contrats à venir.",
    metaDescription:
      "Agence prospection B2B pour ESN : staffing, références sectorielles, signaux contrats. Forfait mensuel sans engagement, RDV livrés.",
    keyword: 'agence prospection esn',
    angle: 'staffing, références, signaux RFP, syndication',
  },
  {
    slug: 'cabinet-conseil',
    shortName: 'Cabinet conseil',
    title: 'Prospection pour cabinets conseil',
    description:
      "Lead nurturing long, partner-led selling, contenu d'autorité, cibles C-level. La prospection cabinet conseil ne se fait pas comme la SaaS.",
    metaDescription:
      "Agence prospection pour cabinets conseil : lead nurturing long, partner-led, ciblage C-level. Approche éditoriale et conversationnelle.",
    keyword: 'agence prospection cabinet conseil',
    angle: 'partner-led, contenu d\'autorité, C-level long cycle, événementiel',
  },
  {
    slug: 'scale-up-post-levee',
    shortName: 'Scale-up post-levée',
    title: 'Prospection scale-up post-levée',
    description:
      "Pression deadline, board, mission impossible avant le premier Head of Sales. On déploie une machine outbound en 3 semaines pour absorber les premiers mois post-Series A.",
    metaDescription:
      "Agence prospection scale-up post-levée : machine outbound déployée en 3 semaines. Garantie de RDV pour absorber les premiers mois post-Series A.",
    keyword: 'agence prospection scale-up',
    angle: 'pression Series A, premier Head of Sales pas encore recruté, runway',
  },
  {
    slug: 'agences',
    shortName: 'Agences',
    title: 'Prospection en marque blanche pour agences',
    description:
      "Pour les agences marketing/digitales qui veulent ajouter la prospection à leur catalogue sans recruter. Marque blanche complète, vous facturez votre marge.",
    metaDescription:
      "Prospection B2B en marque blanche pour agences. Capacité, copy, qualification : on délivre, vous facturez votre client. Sans recruter.",
    keyword: 'prospection b2b marque blanche',
    angle: 'capacité immédiate, marque blanche, marge agence',
  },
];

export interface CityPage {
  slug: string;
  name: string;
  title: string;
  description: string;
  metaDescription: string;
  keyword: string;
  localAngle: string;
}

export const CITIES: CityPage[] = [
  {
    slug: 'paris',
    name: 'Paris',
    title: 'Agence de prospection B2B à Paris',
    description:
      "Basée 229 rue Saint-Honoré, Paris 1er. Densité de PME B2B la plus forte de France, écosystème scale-up post-Series A actif, terrain naturel pour la prospection ciblée.",
    metaDescription:
      "Agence de prospection B2B à Paris : RDV qualifiés via cold email et LinkedIn. Forfait mensuel, garantie minimum vital. Bureau 1er arr.",
    keyword: 'agence prospection b2b paris',
    localAngle: 'densité PME, scale-up post-levée, écosystème tech',
  },
  {
    slug: 'lyon',
    name: 'Lyon',
    title: 'Agence de prospection B2B à Lyon',
    description:
      "Écosystème industriel et tech lyonnais, deuxième pôle économique français. Cibles : éditeurs SaaS B2B, sociétés de service tech, ETI industrielles.",
    metaDescription:
      "Agence de prospection B2B à Lyon : SaaS, services tech, ETI industrielles. Forfait mensuel avec garantie. Intervention à distance et présentielle.",
    keyword: 'agence prospection b2b lyon',
    localAngle: 'industrie, tech B2B, ETI Auvergne-Rhône-Alpes',
  },
  {
    slug: 'bordeaux',
    name: 'Bordeaux',
    title: 'Agence de prospection B2B à Bordeaux',
    description:
      "Bordeaux et Nouvelle-Aquitaine : écosystème early-stage tech, agro-alimentaire, viticole et services aux entreprises. Cibles PME en croissance et primo-accédantes à la prospection structurée.",
    metaDescription:
      "Agence de prospection B2B à Bordeaux : early-stage tech, agro, services. Forfait mensuel avec garantie de RDV. Intervention à distance.",
    keyword: 'agence prospection b2b bordeaux',
    localAngle: 'early-stage tech, agro/viticole, services PME',
  },
  {
    slug: 'lille',
    name: 'Lille',
    title: 'Agence de prospection B2B à Lille',
    description:
      "Lille et Hauts-de-France : pôle tech (Euratechnologies, Plaine Images), services aux entreprises, retail B2B. Forte densité d'éditeurs SaaS et de PME industrielles.",
    metaDescription:
      "Agence de prospection B2B à Lille : tech, services, retail B2B. Forfait mensuel avec garantie. Couverture Hauts-de-France et national.",
    keyword: 'agence prospection b2b lille',
    localAngle: 'Euratechnologies, retail B2B, services',
  },
  {
    slug: 'marseille',
    name: 'Marseille',
    title: 'Agence de prospection B2B à Marseille',
    description:
      "Marseille et PACA : maritime, logistique, PME family business, secteur public et parapublic. Approche prospection adaptée aux cycles d'achat plus longs et à la dimension relationnelle régionale.",
    metaDescription:
      "Agence de prospection B2B à Marseille : maritime, logistique, PME family business. Forfait mensuel avec garantie. Couverture PACA et national.",
    keyword: 'agence prospection b2b marseille',
    localAngle: 'maritime, logistique, family business, PACA',
  },
];

export interface CaseStudyMeta {
  slug: string;
  client: string;
  title: string;
  metaDescription: string;
  sector: string;
  duration: string;
  headline: string;
  results: { metric: string; value: string }[];
}

export const CASE_STUDIES: CaseStudyMeta[] = [
  {
    slug: 'happycolis',
    client: 'Happycolis',
    title: 'Cas client Happycolis : 41 RDV qualifiés en 5 semaines',
    metaDescription:
      "Comment Agence Simple a généré 41 RDV qualifiés en 5 semaines pour Happycolis (e-commerce B2B). Stratégie, résultats, learnings.",
    sector: 'E-commerce B2B',
    duration: '5 semaines',
    headline: '41 RDV qualifiés en 5 semaines',
    results: [
      { metric: 'RDV qualifiés', value: '41' },
      { metric: 'Durée campagne', value: '5 semaines' },
      { metric: 'Taux de réponse', value: '8,2 %' },
    ],
  },
  {
    slug: 'invent-app',
    client: 'Invent-App',
    title: 'Cas client Invent-App : 151 RDV générés',
    metaDescription:
      "Comment Agence Simple a livré 151 RDV qualifiés à Invent-App. Méthode, ciblage, copy gagnant, learnings sur la verticale.",
    sector: 'SaaS B2B',
    duration: 'Campagne longue durée',
    headline: '151 RDV qualifiés générés',
    results: [
      { metric: 'RDV qualifiés', value: '151' },
      { metric: 'Verticale', value: 'SaaS B2B' },
      { metric: 'Taux qualification', value: '> 90 %' },
    ],
  },
  {
    slug: 'dunforce',
    client: 'Dunforce',
    title: 'Cas client Dunforce : 14 % de taux de réponse sur les bailleurs sociaux',
    metaDescription:
      "Comment Agence Simple a atteint 14 % de taux de réponse pour Dunforce sur la cible bailleurs sociaux. Approche, copy, learnings.",
    sector: 'Fintech B2B',
    duration: 'Campagne longue durée',
    headline: '14 % de taux de réponse sur les bailleurs sociaux',
    results: [
      { metric: 'Taux de réponse', value: '14 %' },
      { metric: 'Cible', value: 'Bailleurs sociaux' },
      { metric: 'Verticale', value: 'Fintech recouvrement' },
    ],
  },
];

export interface Tool {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  description: string;
}

export const TOOLS: Tool[] = [
  {
    slug: 'calculateur-cout-sdr-interne-vs-agence',
    name: 'Calculateur coût SDR interne vs agence',
    title: 'Calculateur : coût d\'un SDR interne vs agence externalisée',
    metaDescription:
      "Combien coûte un SDR interne par rapport à une agence externalisée ? Calculateur transparent : salaire, charges, outils, management, rampe.",
    description: 'Comparez le coût complet d\'un SDR interne vs une agence externalisée.',
  },
  {
    slug: 'calculateur-roi-prospection',
    name: 'Calculateur ROI prospection',
    title: 'Calculateur ROI prospection B2B',
    metaDescription:
      "Calculez le ROI de votre prospection B2B : coût d'acquisition, taux de conversion, panier moyen, payback. Estimateur transparent gratuit.",
    description: 'Estimez le ROI réel d\'une campagne de prospection B2B.',
  },
  {
    slug: 'simulateur-rdv-mensuels',
    name: 'Simulateur RDV mensuels',
    title: 'Simulateur de RDV mensuels en prospection B2B',
    metaDescription:
      "Combien de RDV qualifiés mensuels pouvez-vous générer ? Simulateur basé sur volume, taux d'ouverture, taux de réponse et qualification.",
    description: 'Estimez le volume de RDV mensuels atteignable selon votre cible.',
  },
];

export interface Comparison {
  slug: string;
  title: string;
  metaDescription: string;
  description: string;
}

export const COMPARISONS: Comparison[] = [
  {
    slug: 'sdr-interne-vs-agence-externalisee',
    title: 'SDR interne vs agence externalisée : comparatif honnête',
    metaDescription:
      "SDR interne ou agence externalisée ? Comparatif coût, vitesse de mise en route, scalabilité, maitrise du process, risque, ROI.",
    description: 'Comparatif sincère des deux modèles pour décider sur la base des chiffres.',
  },
  {
    slug: 'cold-email-vs-linkedin-outreach',
    title: 'Cold email vs LinkedIn : quel canal pour votre prospection',
    metaDescription:
      "Cold email ou LinkedIn outreach ? Comparatif volume, taux de réponse, qualité des conversations, coût par lead, par segment cible.",
    description: 'Quel canal est le bon pour votre cible et votre objectif ?',
  },
  {
    slug: 'agence-prospection-vs-freelance',
    title: 'Agence de prospection vs freelance : comparatif',
    metaDescription:
      "Agence ou freelance pour la prospection B2B ? Comparatif sur la capacité, la résilience, la spécialisation, la facturation, la marge d'erreur.",
    description: 'Quand prendre une agence, quand prendre un freelance.',
  },
];

export interface FaqItem {
  q: string;
  a: string;
}

/**
 * FAQ de la home : source unique partagée entre FaqSection.astro (rendu visible)
 * et index.astro (schema FAQPage). Le schema DOIT refléter les questions visibles.
 * Règles Kenzy 2026-07-03 : aucun prix en euros, voix « équipe », cohérence avec
 * la card « Aucun engagement » (pas de durée minimum).
 */
export const HOME_FAQ: FaqItem[] = [
  {
    q: 'Comment fonctionne le modèle « payez seulement quand vous avez un RDV qualifié » ?',
    a: "Notre modèle est basé sur la performance : vous payez pour des rendez-vous qualifiés livrés, pas pour un volume de messages envoyés. Nous identifions, contactons et qualifions les prospects par cold email et LinkedIn avant de fixer le rendez-vous. Au lancement, des frais de set-up couvrent l'infrastructure, les outils et le copywriting.",
  },
  {
    q: "Qu'est-ce qui est inclus dans le forfait mensuel ?",
    a: "La stratégie de campagne, le sourcing des prospects, l'enrichissement des contacts, l'infrastructure email dédiée, le copywriting personnalisé, le pilotage hebdomadaire et un reporting transparent. Les outils sont refacturés au coût réel, sans marge.",
  },
  {
    q: 'Combien de RDV qualifiés par mois puis-je espérer ?',
    a: "Cela dépend de votre cible, de votre panier moyen et du canal. Plutôt que d'afficher une fourchette générique, nous définissons un minimum vital chiffré au démarrage, calibré sur votre cas, et nous nous engageons dessus contractuellement.",
  },
  {
    q: 'Comment vous calculez le minimum vital ?',
    a: "On regarde votre taux de conversion en clientèle et combien de clients il vous faut pour rentabiliser la mission. On en déduit ensemble un seuil chiffré de RDV qualifiés par mois, écrit dans le contrat.",
  },
  {
    q: "Et si le minimum vital n'est pas atteint ?",
    a: "On continue gratuitement jusqu'à l'atteindre. Pas de petites lignes, pas de remboursement compliqué à demander. On reste, on travaille, on livre.",
  },
  {
    q: "Qui définit ce qu'est un RDV qualifié ?",
    a: "Vous, et vous seul. Chaque RDV vous est remis avec le profil de l'interlocuteur, son contexte et la conversation d'origine. Si vous marquez un RDV comme non qualifié, il sort du décompte de l'engagement. Cette règle est écrite dans le contrat.",
  },
  {
    q: 'Suis-je engagé sur la durée ?',
    a: "Non. Le forfait est mensuel, résiliable avec un préavis de 30 jours, sans pénalité. La garantie minimum vital reste active tant que le contrat court.",
  },
  {
    q: 'Utilisez-vous mes propres domaines email ?',
    a: "Non. Nous prospectons depuis des domaines secondaires dédiés, jamais depuis votre domaine principal : sa réputation d'envoi reste intacte pour vos emails du quotidien. Vous gardez la propriété des domaines créés pour la mission.",
  },
];
