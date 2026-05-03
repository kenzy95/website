# Agence Simple — Site v2

Reconstruction from scratch du site agencesimple.fr.
Stack : Astro 5 + Tailwind CSS 4 + MDX + TypeScript strict + Cloudflare Pages.

## Stack

| Brique | Choix | Pourquoi |
|---|---|---|
| Framework | Astro 5 | HTML par défaut, JS en opt-in, score Lighthouse 95+ trivial |
| CSS | Tailwind CSS 4 | Tokens via `@theme`, atomic, perf garantie |
| Contenu | MDX collections | Validation typée via zod, frontmatter strict |
| Hébergement | Cloudflare Pages | Gratuit, CDN mondial, build sur push git |
| TypeScript | Strict | Type safety partout, inclus tsconfig Astro |

## Démarrage

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build prod (lance astro check + astro build)
npm run preview  # preview du build local
```

## Structure

```
src/
  components/      Composants Astro réutilisables (atoms + molecules)
    SeoHead.astro  Meta SEO + JSON-LD injection
  layouts/         Templates de page
    BaseLayout.astro
  lib/             Logique JS pure
    site.ts        Constantes brand (source de vérité)
    schema.ts      Helpers JSON-LD Schema.org
  content/         Collections MDX (blog, caseStudy, services)
    config.ts      Schemas zod
  pages/           Routes (file-based routing Astro)
    index.astro
    services/
    secteurs/
    villes/
    cas-clients/
    outils/
    comparatifs/
    blog/
  styles/
    global.css     Tokens Tailwind via @theme
public/
  robots.txt       Crawlers + LLM autorisés explicitement
  llms.txt         Standard 2025-2026 pour citation LLM
  favicon.svg
```

## Conventions

### Routing
- URLs en français (`/services/prospection-b2b`, pas `/services/b2b-prospection`).
- Pas de trailing slash (`trailingSlash: 'never'`).
- Profondeur ≤ 3 niveaux.

### Composants
- PascalCase pour les composants Astro/TS (`SeoHead.astro`, `Hero.astro`).
- Préférer slots à props quand le contenu est composable.
- Pas de logique JS dans les composants : extraire dans `src/lib/`.

### SEO / GEO
- Toute page passe par `BaseLayout` qui injecte `Organization` + `WebSite` schema automatiquement.
- Pages spécifiques ajoutent leurs schemas via la prop `schemas` (`Service`, `Article`, `BreadcrumbList`, `FAQPage`).
- Validation obligatoire avant push : https://validator.schema.org/

### Perf budget (objectif Lighthouse mobile)
- LCP < 2s
- INP < 200ms
- CLS < 0.05
- Total JS < 50 KB
- Total CSS < 30 KB
- Total HTML < 80 KB par page

### Images
- Toujours via le composant `<Image />` Astro (Sharp built-in).
- Format WebP/AVIF par défaut.
- Lazy par défaut sauf hero (eager + preload).

## Sources de vérité

- Brand : `src/lib/site.ts` (nom, contact, social, services).
- Charte v1.0 : memory `project_charte_marque.md`.
- Logo Simple. v1 : memory `project_logo_final_v1.md`.
- Audit SEO : memory `project_audit_seo_2026_05.md` (à venir).

## Roadmap

- [x] Scaffolding Astro + Tailwind + MDX + sitemap
- [x] Layout SEO-first + helpers schema JSON-LD
- [x] robots.txt + llms.txt
- [x] Collections MDX typées (blog, cas clients, services)
- [ ] Direction visuelle Iris (3 options)
- [ ] Composants design system (Button, Section, Card, Hero, Footer, Header)
- [ ] Pages services (4)
- [ ] Pages secteurs (5)
- [ ] Pages villes (5)
- [ ] Cas clients (3 migrés depuis Framer)
- [ ] Page méthode + tarifs
- [ ] Outils interactifs (3 calculateurs)
- [ ] 8 articles fondateurs
- [ ] Comparatifs (3)
- [ ] QA technique (Lighthouse, Schema validator, mobile)
- [ ] Plan redirections 301
- [ ] DNS Cloudflare + go-live

## Licence

Propriétaire — Agence Simple. Code source public pour transparence.
