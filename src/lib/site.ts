/**
 * Constantes brand Agence Simple.
 * Source de vérité unique pour SEO meta, schema JSON-LD, footer, mentions légales.
 */

export const SITE = {
  name: 'Agence Simple',
  legalName: 'Agence Simple',
  domain: 'agencesimple.fr',
  url: 'https://agencesimple.fr',
  defaultLocale: 'fr-FR',
  description:
    "Agence de prospection B2B basée à Paris. Rendez-vous qualifiés via cold email et LinkedIn outreach. Forfait mensuel avec garantie minimum vital.",
  ogImage: '/og-default.jpg',

  contact: {
    email: 'contact@agencesimple.fr',
    phone: '+33 6 24 40 46 24',
    address: {
      street: '229 rue Saint-Honoré',
      postalCode: '75001',
      city: 'Paris',
      country: 'FR',
    },
  },

  legal: {
    siret: '92182984200019',
    vatId: null,
  },

  social: {
    linkedinCompany: 'https://www.linkedin.com/company/agencesimple/',
    linkedinFounder: 'https://www.linkedin.com/in/kenzy-gasmi-66694095',
    github: 'https://github.com/kenzy95',
  },

  founder: {
    name: 'Kenzy Gasmi',
    role: 'Fondateur',
    linkedin: 'https://www.linkedin.com/in/kenzy-gasmi-66694095',
  },

  /* Prospection B2B clé en main = la home (décision mono-offre 2026-07-03). */
  services: [
    { slug: 'cold-email', name: 'Cold email', shortDesc: 'Délivrabilité, copy, séquences' },
    { slug: 'linkedin-outreach', name: 'LinkedIn outreach', shortDesc: 'Sales Navigator + scripts' },
    { slug: 'sdr-externalise', name: 'SDR externalisé', shortDesc: 'Équipe de prospection en marque blanche' },
  ],
} as const;

export type Service = (typeof SITE.services)[number];
