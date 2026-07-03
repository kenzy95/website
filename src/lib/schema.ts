/**
 * Helpers JSON-LD Schema.org pour Agence Simple.
 * Tous les types renvoient un objet sérialisable directement injectable
 * dans une balise <script type="application/ld+json">.
 *
 * Validation : https://validator.schema.org/ et https://search.google.com/test/rich-results
 *
 * Règles internes :
 * - Pas plus de 3 types par page.
 * - Toujours inclure Organization sur la home + sameAs.
 * - BreadcrumbList partout sauf home.
 * - FAQPage uniquement si la page contient VRAIMENT des FAQ visibles.
 */

import { SITE } from './site';

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;
const FOUNDER_ID = `${SITE.url}/#kenzy-gasmi`;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    description: SITE.description,
    email: SITE.contact.email,
    telephone: SITE.contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.contact.address.street,
      postalCode: SITE.contact.address.postalCode,
      addressLocality: SITE.contact.address.city,
      addressCountry: SITE.contact.address.country,
    },
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'SIRET',
      value: SITE.legal.siret,
    },
    founder: {
      '@type': 'Person',
      '@id': FOUNDER_ID,
      name: SITE.founder.name,
      jobTitle: SITE.founder.role,
      url: SITE.founder.linkedin,
    },
    sameAs: [
      SITE.social.linkedinCompany,
      SITE.social.linkedinFounder,
      SITE.social.github,
    ],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    inLanguage: SITE.defaultLocale,
    publisher: { '@id': ORG_ID },
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE.url}/#localbusiness`,
    name: SITE.name,
    image: `${SITE.url}/logo.png`,
    url: SITE.url,
    telephone: SITE.contact.phone,
    email: SITE.contact.email,
    priceRange: '€€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.contact.address.street,
      postalCode: SITE.contact.address.postalCode,
      addressLocality: SITE.contact.address.city,
      addressCountry: SITE.contact.address.country,
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
  };
}

interface ServiceParams {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}

export function serviceSchema(params: ServiceParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    url: params.url,
    serviceType: params.serviceType,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'France' },
  };
}

interface ArticleParams {
  headline: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
  authorUrl?: string;
}

export function articleSchema(params: ArticleParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.headline,
    description: params.description,
    image: params.image,
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    author: {
      '@type': 'Person',
      '@id': FOUNDER_ID,
      name: params.authorName ?? SITE.founder.name,
      url: params.authorUrl ?? SITE.founder.linkedin,
    },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': params.url },
  };
}

interface CaseStudyParams extends ArticleParams {
  client: string;
  results: { metric: string; value: string }[];
}

export function caseStudySchema(params: CaseStudyParams) {
  return {
    ...articleSchema(params),
    '@type': 'Article',
    about: {
      '@type': 'Organization',
      name: params.client,
    },
    keywords: ['cas client', 'prospection b2b', params.client].join(', '),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

interface VideoObjectParams {
  name: string;
  description: string;
  embedUrl: string;
  thumbnailUrl: string;
  uploadDate: string;
}

export function videoObjectSchema(params: VideoObjectParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: params.name,
    description: params.description,
    thumbnailUrl: params.thumbnailUrl,
    uploadDate: params.uploadDate,
    embedUrl: params.embedUrl,
    publisher: { '@id': ORG_ID },
  };
}

export function howToSchema(params: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: params.name,
    description: params.description,
    step: params.steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function contactPointSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Agence Simple',
    url: `${SITE.url}/contact`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: SITE.contact.email,
      telephone: SITE.contact.phone,
      areaServed: 'FR',
      availableLanguage: ['French'],
    },
  };
}
