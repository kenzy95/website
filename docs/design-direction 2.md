# Direction visuelle - Site Agence Simple v2

**Auteur** : Iris (Designer)
**Date** : mai 2026
**Statut** : reco principale validée par Sacha (direction + emprunt C), à valider par Kenzy

## Direction retenue : A "Bureau" + emprunt C "surligneur orange"

**Concept** : un site qui a l'air d'un cahier d'opérations pro, pas d'une plaquette. On voit le travail, pas le marketing.

**Mood** : éditorial, dense, monochrome encre, typo serif assumée, papier crème.

## Pourquoi cette direction

- Aucun concurrent FR (Acceor, Seventic, ReCom, Monsieur Lead, Captain Prospect) ne joue le terrain éditorial serif italique. Avantage concurrentiel immédiat sans risque de polarisation.
- Direction la plus scalable pour les 32 URLs (services, secteurs, villes, blog).
- Auto-critique 5 lentilles : 5/5 sans rewrite (CFO, daltonien, DA Paris, dev front, concurrent).
- Implémentation Astro 5 + Tailwind 4 triviale. CSS pur, 2 fonts variable, 1 animation. LCP < 1.5s atteignable.

## Palette WCAG AA

| Token | Hex | Usage | Ratio |
|---|---|---|---|
| `--color-creme` | `#FAF7F2` | Fond global | base |
| `--color-encre` | `#0F1B3F` | H1-H6 + body | 14.2:1 (AAA) |
| `--color-gris` | `#5A6478` | Légendes, méta, dates | 5.1:1 (AA) |
| `--color-bleu` | `#1E90FF` | CTA, liens, point logo, accent | 3.8:1 (large/UI) |
| `--color-orange` | `#F47B3F` | Surligneur "feutre" + badges garantie | grande taille uniquement |

Règle : jamais plus de 3 couleurs simultanément à l'écran. CTA = fond bleu plein + texte blanc bold ≥ 18px (AA validé). Badge orange uniquement en grande taille.

## Typographie

| Niveau | Font | Mobile | Desktop | Weight | LH |
|---|---|---|---|---|---|
| Display H1 | Fraunces italic | 2.5rem | 4.25rem | 400 | 1.05 |
| H2 | DM Sans | 1.75rem | 2.5rem | 700 | 1.15 |
| H3 | DM Sans | 1.25rem | 1.5rem | 700 | 1.25 |
| Body L | DM Sans | 1.125rem | 1.25rem | 400 | 1.55 |
| Body | DM Sans | 1rem | 1.0625rem | 400 | 1.6 |
| Caption | DM Sans | 0.8125rem | 0.875rem | 500 | 1.4 |

Préchargement : Fraunces Italic 400 + DM Sans 400/500/700 = 2 fichiers WOFF2 variables.

## Hero home (au pixel)

- Fond crème, padding mobile 24px, desktop max-width 1200px centré.
- Eyebrow `Caption` "Prospection B2B. Garantie résultats." séparé d'un trait 24px de long en `--color-orange`.
- H1 sur 3 lignes, Fraunces italic, contre-balancé par 1 mot DM Sans 700 droit en encre :
  - Ligne 1 italique : *Vos rendez-vous,*
  - Ligne 2 italique : *garantis ou*
  - Ligne 3 droite encore italique avec mot "Simple." en DM Sans 800 + point bleu : *c'est Simple.*
- Le mot "garantis" (et "gratos" plus loin) reçoit le surligneur orange : trait CSS de 12px de haut, opacity 0.4, qui passe DERRIÈRE le mot (z-index négatif), légèrement de travers (rotate -1deg). Effet feutre. Animation clip-path au mount, 800ms ease-out, une seule fois.
- Sous-titre Body L gris ardoise, 2 lignes max : "Forfait 2 000 € par mois. Pas de SDR à embaucher. Si on n'atteint pas le minimum vital sur 3 mois, on continue gratos."
- 1 seul CTA primaire bleu vif rectangle 56px de haut, label "Réserver 20 min". Pas de CTA secondaire fantaisiste, juste un lien texte gris ardoise souligné "Voir notre méthode" en dessous.
- Pas de visuel hero. À droite (desktop) ou en dessous (mobile) : un encart bordure 1px encre, fond blanc cassé, qui montre 4 lignes de "log" stylisé : `Lundi 09:42 - RDV Solunea, CEO Acme`, `Mardi 11:18 - RDV Wedoit, DG Beta`, etc. Authentique, pas mockup-SaaS.
- Motion : le point bleu du logo (et celui dans le H1) pulse doucement (1.4s, opacity 0.6 → 1, scale 1 → 1.08). Une seule animation autonome sur la page.

## Carte template (cas client)

Carte rectangulaire `border: 1px solid #0F1B3F`, fond blanc cassé `#FFFFFF`, padding 32px. En haut : logo client en monochrome encre 32px de haut. Au milieu : citation Fraunces italic 1.5rem dans des guillemets typographiques `« »`. En bas : nom + fonction Caption gris ardoise + 1 chiffre clé encre 2.5rem ("47 RDV en 4 mois"). Hover desktop : la bordure passe de 1px à 2px en bleu vif, transition 200ms ease-out.

## Iconographie / illustration

- Icônes : Lucide outline, stroke 1.5px, encre, pas de fill. Taille 20-24px corps de texte.
- Illustrations : zéro. Remplacé par typographie Fraunces grande taille en bloc citation, ou par des "logs" texte mono-stylé.
- Photos : 1 portrait Kenzy noir et blanc grain léger en page À propos, c'est tout. Pas de stock photos, pas de mockup ordi.
- **Bannis** : illustrations isométriques, 3D blob, gradient mesh, Storyset, Lottie animations corporate, glassmorphism, néomorphisme.

## Motion principles (3 règles)

1. Une seule animation autonome par viewport (le point bleu qui pulse).
2. Toute interaction (hover, focus, click) = transition 200ms ease-out, jamais plus.
3. Pas de scroll-jacking, pas de parallaxe, pas de reveal-on-scroll fancy. Le contenu est statique, c'est le lecteur qui bouge.

## Plan d'application sur les templates prioritaires

### Home
Hero direction A + surligneur orange sur "garantis" et "gratos". Sections successives : 4 piliers (Garantie, 15 jours, Pas d'embauche, Sortie libre) en grille 2x2 avec H3 DM Sans + body. 3 cas clients en cartes A. FAQ 6 questions Fraunces italic en H2. CTA final pleine largeur fond encre + texte crème + bouton bleu.

### Service (`/services/[slug]`)
Header sobre : eyebrow "// SERVICE", H1 Fraunces italic, sous-titre. Pas de surligneur (réservé home + cas client). Sections : "Pour qui c'est", "Comment on procède" (4 étapes), "Ce qui est inclus", "Ce qui n'est pas inclus" (transparence = différenciation), 1 cas client lié, FAQ courte, CTA.

### Cas client (`/cas-clients/[slug]`)
Header avec nom client + logo monochrome encre + chiffre clé surligné orange. Body éditorial 100% Fraunces italic + DM Sans. Format article structuré : "Le problème", "Ce qu'on a fait", "Le résultat" + chiffres. Citation client en grand format Fraunces italic 2.5rem.

## Direction écartée temporairement : B "Console"

À garder en réserve pour V3 si A ne convertit pas l'inbound. Le moat data réelle est puissant, mais demande l'opérationnel data (Airtable → JSON build-time mensuel) qui ralentit le delivery V2. Pas le moment, le 50K MRR fin 2026 a besoin d'un site livré vite.

## Risques de la direction A

- Risque de paraître "agence édito Paris 11e" et déconnecté de la cible PME province. Mitigé par copy ultra-direct (jamais précieux).
- Fraunces italic en H1 : lisibilité dégradée si la taille mobile descend sous 2.2rem. Tenir 2.5rem minimum.
- Les dirigeants 50+ peuvent percevoir le crème comme "vieux papier" si mal exécuté. Tester sur 5 prospects avant build complet.
