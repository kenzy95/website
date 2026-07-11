# Site Agence Simple — brief pour Claude Design

## Contexte

Porting du site Framer **agencesimple.fr** vers **Astro 5 + Tailwind 4** + animations modernes. Branche actuelle : `feature/lamp-aceternity`.

## Stack

- **Astro 5** + Tailwind CSS 4
- **React 19** + Framer Motion (uniquement pour `Lamp.tsx`, le reste est CSS pur)
- TypeScript strict
- Aucune lib UI (composants maison)

## Charte

| Couleur | Hex | Usage |
|---|---|---|
| Encre | `#0F1B3F` | Fond principal (dark) |
| Bleu primary | `#1E90FF` | Accent, CTAs |
| Orange | `#F47B3F` | Accent chaud |
| Crème | `#FAF7F2` | Texte clair, fond crème |
| Violet | `#764cdc` | Glow secondaire |

Toutes définies en CSS variables dans `src/styles/global.css`.

## Démarrer

```bash
npm install
npm run dev
# → http://localhost:4321
```

## Composants clés modifiés cette session

Tous dans `src/components/`. Les animations utilisent un pattern commun : **variable CSS `--progress` (0 → 1)** calculée au scroll via JS minimal, puis utilisée dans le CSS pour interpoler opacity/transform/width.

### Hero
- **`ui/Lamp.tsx`** : composant Aceternity Lamp (React, hydraté en `client:load`). Couleurs cyan d'origine remplacées par `#1E90FF`. Animation CSS keyframes (pas Framer Motion à cause d'un bug `whileInView` en SSR Astro).

### Section dashboard
- **`animations/ContainerScroll.astro`** : card 3D qui se redresse au scroll. `rotateX(35°→0°)` + `scale(1.05→1)`. Animation finit à `progress 0.4` (boost x2.5), puis le card reste figé.
- **`MailboxDashboard.astro`** : mockup du dashboard email (PNG `/public/images/hero-dashboard.png`).

### Section partner
- **`PartnerWilco.astro`** : card "Partenaire WILCO" 22rem rounded-24px, à cheval sur le bas du dashboard (margin-top -8rem).

### Section logos clients
- **`LogoMarquee.astro`** : pill blanche 1200×220, border-radius 70px, contient un marquee infini de 7 logos (Trimble, Yomoni, Solunea, Job2bedone, MOFFI, Dr.Rubber, Les Épaulettes). Slot uniforme 280×130px, logos en `object-fit: contain` max-height 80px.

### Section garanties
- **`GuaranteeCards.astro`** : 2 cards bicolores (orange + encre+texture cuivre) avec hauteur uniformisée (`height: 100%` dans grid stretch).
- Wrappées dans **`ui/GlowCard.astro`** = effet spotlight au curseur (radial-gradient suit la souris, alternance bleu/orange).

### Section "Ce qu'on fait pour vous"
- **`animations/WhatWeDo.astro`** : port exact du pattern Webflow qubix-flowdevz inspecté en live.
  - Mots "Ce" + spacer + "qu'on fait pour vous" en flex
  - Sphère 3D dans le spacer central (toujours alignée pile entre les mots)
  - 3 cards autour qui apparaissent en séquence au scroll (Stratégie / Sourcing & enrichissement / Infrastructure)
  - Stages : titre (0→0.3), sphère (0.2→0.55, translateZ -847→0), card 1 (0.4→0.7), card 2 (0.5→0.8), card 3 (0.6→0.9)

### Section services
- **`ServiceTakeover.astro`** : 5 cards sur fond crème (Stratégie / Identification prospects / Enrichissement / Infrastructure / Prix outils), grid 6 colonnes desktop, wrappées dans GlowCard avec alternance bleu/orange. Utilise `:global()` Astro pour casser le scope CSS sur les nth-child.

### Orchestration
- **`pages/index.astro`** : ordre des sections du hero au footer.

## Notes techniques

### Scope CSS Astro
Astro scope automatiquement les sélecteurs `>` aux deux côtés du combinator. Pour cibler les enfants rendus par un autre composant (ex: GlowCard dans ServiceTakeover), utiliser `:global()` :

```css
.takeover-grid > :global(:nth-child(1)) { grid-column: span 2; }
```

### Pattern --progress
Le script JS minimal calcule `--progress` (0→1) en fonction de la position scroll de la section :

```js
var rect = section.getBoundingClientRect();
var vh = window.innerHeight;
var total = vh + rect.height;
var traveled = vh - rect.top;
var p = Math.max(0, Math.min(1, traveled / total));
section.style.setProperty('--progress', p.toFixed(4));
```

Ensuite tout le reste se fait en CSS :
```css
opacity: clamp(0, calc(var(--progress) * 3.33), 1);
transform: translateY(calc((1 - var(--progress)) * 50px));
```

### Path aliases (tsconfig.json)
- `@components/...` → `src/components/`
- `@layouts/...` → `src/layouts/`
- `@lib/...` → `src/lib/`
- `@content/...` → `src/content/`

## Sphère "Ce qu'on fait pour vous"

La sphère actuelle est en CSS pur (radial-gradient + 2 rings). Une vraie sphère 3D serait mieux. Pistes :
- Three.js + react-three-fiber (mais ajout de dépendances)
- SVG/Canvas
- Image PNG/WebP avec rotation CSS

## Bugs résolus cette session

- **Framer Motion `whileInView` ne se déclenche pas en SSR Astro `client:load`** → remplacé par animation CSS keyframes pour la Lamp.
- **Image hero-dashboard.png était 2000×2000** (carrée) avec dashboard mal cadré → recadrée à 1685×2000.
- **Logos PNG étaient 1920×1080 avec 80% de marges blanches** → cropés via script Python PIL.
- **3 fichiers PNG mal nommés** : `wilco-partner.png` contenait le vrai Trimble, `nestore.png` contenait Les Épaulettes, `dunforce.svg` contenait un dashboard financier (pas un logo).

## TODO suggérés pour Claude Design

- Optimiser le rendu visuel de la sphère "What We Do" (vraie 3D ou meilleure illusion)
- Affiner le rendu de l'effet GlowCard (la couleur du glow pourrait être plus impactante)
- Mobile responsive : tester chaque section sur viewport 375px
- Animation d'entrée du hero (au load, pas juste au scroll)
- Ajouter d'autres sections du Framer original (Tools constellation, ROI calculator, Client interviews, FAQ, Final CTA, Story scroll) — placeholders dans index.astro
