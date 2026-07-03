# Vidéos témoignages clients (récupérées du site Framer, 2026-07-03)

Source : embeds YouTube sur la home agencesimple.fr (section interviews clients).
Chaîne : Kenzy GASMI.

| Client | Video ID | URL embed | Titre YouTube |
|--------|----------|-----------|---------------|
| Komon | `-GaYHXJR-Hc` | https://www.youtube.com/embed/-GaYHXJR-Hc | Komon x Agence Simple |
| Daisy app | `fepN_sOkUAo` | https://www.youtube.com/embed/fepN_sOkUAo | Daisy app |
| Alison (boîte à confirmer avec Kenzy) | `h7vkCT5aDhY` | https://www.youtube.com/embed/h7vkCT5aDhY | riverside alison & kenzy magic episode feb 25, 2026 |

## Usage prévu

- Composant `ClientInterviews.astro` (home) : remplacer les placeholders par ces 3 embeds.
- Pages cas-clients : lier la vidéo correspondante si le client a aussi un cas écrit.
- SEO : utiliser `youtube-nocookie.com` + facade (lite-youtube ou thumbnail cliquable) pour ne pas plomber le LCP.
- Schema `VideoObject` à ajouter sur les pages qui embarquent une vidéo.

## Cas clients écrits (site Framer actuel, à porter)

- Happycolis : 41 RDV en 5 semaines (`/articles/happycolis`)
- Invent-App : 151 RDV générés (`/articles/invent-app`)
- Dunforce : 14% de taux de réponse (`/articles/dunforce`)

## À confirmer avec Kenzy

- Nom de la boîte d'Alison (titre vidéo pas explicite).
- Autorisation d'utiliser les 3 vidéos sur le nouveau site : OK donné le 2026-07-03.
