# Décision SEO : architecture mono-offre (2026-07-03)

## Décision (validée par Kenzy)

**La home vise la requête principale "agence prospection b2b". La page `/services/prospection-b2b` est supprimée.**

## Pourquoi

Agence Simple est mono-offre : la prospection B2B n'est pas un service parmi d'autres, c'est toute la boîte. La home dit déjà tout (garantie, méthode, RDV qualifiés, FAQ). Une page "hub service" qui reprend le même contenu crée une cannibalisation : deux pages du même site en concurrence sur la même requête, Google ne sait plus laquelle ranker. Le schéma "home + 1 page par service" ne vaut que pour les boîtes multi-services.

## Ce qui reste et pourquoi ça ne cannibalise pas

| Page | Requête visée | Pourquoi c'est distinct |
|------|--------------|------------------------|
| `/` (home) | agence prospection b2b | l'offre coeur |
| `/services/cold-email` | agence cold email | canal spécifique |
| `/services/linkedin-outreach` | agence prospection linkedin | canal spécifique |
| `/services/sdr-externalise` | agence sdr externalisé | format d'externalisation |
| `/secteurs/*` | prospection b2b saas, esn... | verticale métier |
| `/villes/*` | agence prospection b2b lyon... | requête locale |

## Redistribution du contenu de la page supprimée

Le copy Théo (~2 400 mots validés) n'est pas jeté :

- **FAQ 8 Q/R** → home via `HOME_FAQ` (content-data.ts), rendue par FaqSection + schema FAQPage synchronisé. FAIT 2026-07-03. Au passage, l'ancienne FAQ home violait 3 règles : prix affichés (~785 €, ticket > 2 000 €), voix "Moi, Kenzy", et un "3 mois minimum d'engagement" qui contredisait la card "Aucun engagement".
- **Méthode 4 étapes détaillée + bloc "ce qui n'est PAS inclus"** → page `/methode` (à intégrer quand Kenzy aura choisi sa direction visuelle ; contenu dispo dans `services/copy-prospection-b2b.md` sections "Comment on procède" et "Ce qui n'est PAS inclus").
- **Stat cards résultats (41 RDV / 151 RDV / 14 %) + 3 vidéos** → pages `/cas-clients` et/ou section interviews home. Le design des stat cards existe dans l'historique git (commit `df95065`, fichier supprimé ensuite).
- **Tableau comparatif SDR interne vs agence** → `/comparatifs/sdr-interne-vs-agence-externalisee`.

## Conséquences pour les briefs à venir

- Le brief `services/prospection-b2b.md` sert désormais de **brief SEO de la home** (keywords, concurrents, FAQ, maillage).
- Les 3 briefs services restants : remplacer tout lien interne vers `/services/prospection-b2b` par `/` avec anchor "agence de prospection B2B" ou "notre offre de prospection clé en main".
- Le "hub" du maillage interne = la home. Chaque page canal/secteur/ville linke vers `/`.
- Pas de redirection 301 nécessaire : la page n'a jamais été en production.

## Rappels règles éditoriales (arbitrages Kenzy 2026-07-03)

- Aucun prix en euros nulle part sur le site (y compris llms.txt, meta descriptions, FAQ).
- Voix "équipe", Kenzy apparaît uniquement comme fondateur.
- Cohérence engagement : forfait mensuel, préavis 30 jours, PAS de durée minimum (card "Aucun engagement" fait foi).
- Schema FAQPage = toujours le reflet exact de la FAQ visible.
