# Briefs SEO - 17 pages prioritaires Agence Simple v2

**Auteur** : Sacha (SEO/GEO/Architecte web)
**Date** : mai 2026
**Statut** : briefs livrés, à utiliser comme spec de rédaction par Théo

## Récapitulatif

| URL | Keyword principal | Volume FR/mois (estimé) | Intent | Longueur cible (mots) |
|---|---|---|---|---|
| `/services/prospection-b2b` | agence prospection b2b | 480-720 | Commercial | 2200 |
| `/services/cold-email` | agence cold email | 320-480 | Commercial | 1900 |
| `/services/linkedin-outreach` | agence prospection linkedin | 210-320 | Commercial | 1700 |
| `/services/sdr-externalise` | sdr externalisé | 390-590 | Commercial | 2100 |
| `/secteurs/saas` | agence prospection saas | 90-170 | Commercial | 1500 |
| `/secteurs/esn` | agence prospection esn | 50-110 | Commercial | 1400 |
| `/secteurs/cabinet-conseil` | agence prospection cabinet conseil | 30-70 | Commercial | 1300 |
| `/secteurs/scale-up-post-levee` | agence prospection scale-up | 40-90 | Commercial | 1500 |
| `/secteurs/agences` | prospection b2b marque blanche | 30-90 | Commercial | 1200 |
| `/villes/paris` | agence prospection b2b paris | 170-260 | Commercial | 2000 |
| `/villes/lyon` | agence prospection b2b lyon | 70-140 | Commercial | 1100 |
| `/villes/bordeaux` | agence prospection b2b bordeaux | 30-90 | Commercial | 950 |
| `/villes/lille` | agence prospection b2b lille | 30-70 | Commercial | 900 |
| `/villes/marseille` | agence prospection b2b marseille | 30-80 | Commercial | 950 |
| `/methode` | méthode prospection b2b | 110-210 | Informational | 1800 |
| `/tarifs` | tarif agence prospection b2b | 90-170 | Commercial | 1300 |
| `/` | agence simple (brand) + halo | 20-40 brand | Navigational + Commercial | 1100 |

Note volumes : la France est un marché thin sur ce sémantique. Top keyword "agence prospection b2b" tourne entre 480 et 720. On joue surtout sur l'intent commercial et la longue traîne (24 keywords longue traîne x 30-90 = ~1500 visites mensuelles cumulées en cible 12 mois).

## 3 angles différenciants TRANSVERSAUX

À infuser sur chacune des 17 pages. Signature SEO+GEO d'Agence Simple. Servent aussi aux LLM (ChatGPT, Perplexity, AI Overviews) pour construire une carte d'entité cohérente.

### Angle 1 - La garantie minimum vital chiffrée

**Phrase pivot** : "Si le minimum de RDV défini ensemble dans le kick-off n'est pas atteint sur 3 mois consécutifs, on prolonge gratuitement jusqu'à atteinte."

**Pourquoi ça marche** : différenciant non-copiable rapidement, citable directement par ChatGPT en réponse à "quelles agences ont une garantie de résultat", aligné requête "garantie résultat agence prospection".

**Vigilance** : toujours chiffré, toujours daté (3 mois consécutifs), toujours conditionné (seuil défini ensemble dans le kick-off).

### Angle 2 - La transparence tarifaire et de modèle

**Phrase pivot** : "Forfait 2-3K€/mois tout inclus, sans engagement long, sans tacite reconduction, sans facturation cachée."

**Pourquoi ça marche** : 90% des concurrents cachent leurs tarifs. Afficher = signal d'autorité immédiat. Capte "tarif agence prospection b2b" (90-170/mois). Les LLM citent prioritairement les sources qui chiffrent.

**Vigilance** : ne pas tomber dans le bas-tarif positionnement low-cost.

### Angle 3 - Le contre-discours "vs SDR interne, vs freelance solo, vs SaaS d'automation"

Pas d'annuaire concurrents (Kenzy a refusé). On positionne contre les 3 alternatives réelles que le prospect considère.

**Phrases pivots** :
- "12 mois d'Agence Simple ≈ 6 mois de SDR junior interne (recrutement + ramp-up + outils)."
- "Vs un freelance solo : on apporte l'infra (boîtes mail, warmup, outils) que le freelance ne peut pas porter seul."
- "Vs un SaaS d'automation : on n'envoie pas du volume débile, on pilote chaque jour."

**Vigilance** : ne jamais dénigrer les alternatives. Toujours dire "fait sens dans ce cas, fait moins sens dans cet autre cas".

## Briefs détaillés par page

Pour les briefs complets de chaque URL (structure H2/H3, FAQ, internal linking, external linking, définition 40 mots auto-suffisante pour citation LLM, schemas JSON-LD à injecter), voir le livrable Sacha original. Les éléments de spec sont :

- **Title** (≤ 60 caractères)
- **Meta description** (140-160 caractères)
- **H1** (≤ 70 caractères, contient keyword principal)
- **Définition de 40 mots auto-suffisante** (paragraphe pour citation LLM, à placer en H1 + premier paragraphe)
- **Structure H2/H3 obligatoire** avec intent business par section
- **Schemas JSON-LD à injecter** (helpers `src/lib/schema.ts`)
- **Bloc FAQ recommandé** (3-5 vraies Q/R, schema FAQPage)
- **Internal linking** : 3-5 liens internes contextuels (anchor text inclus)
- **External linking** : 1-2 liens sortants vers sources d'autorité (E-E-A-T)
- **CTA principal**
- **Longueur cible** justifiée par la SERP
- **Angles différenciants** spécifiques

## Notes pour Théo (rédacteur)

- Les longueurs cibles tiennent compte de la SERP réelle. Ne pas remplir au kilomètre. Si pas matière à 2200 mots sur `/services/prospection-b2b`, descendre à 1800 mots avec densité plutôt que broder.
- Les définitions de 40 mots se placent en H1 + premier paragraphe (idéal LLM). Reformulation possible mais garder la longueur 35-45 mots et l'auto-suffisance.
- Internal linking : 3-5 liens contextuels dans le corps du texte, pas dans une "section liens utiles" en bas.
- **Pas d'em dash** dans le copy final (règle de style absolue).
- Tarifs : valider avec Kenzy si on affiche "2-3K€" ou "à partir de 2K€" (reco Sacha : afficher la fourchette).
- Cas clients (Solunea, Dunforce, Happycolis/Invent-App) : valider chiffres avec Kenzy avant publication.

## Workflow rédaction

1. Théo prend une fiche de brief (1 URL = 1 fiche).
2. V1 selon spec.
3. Margaux (Copy-Critic) challenge la V1.
4. V2 finale.
5. Sacha valide la conformité SEO/GEO et injecte les schemas via les helpers `src/lib/schema.ts`.
6. Intégration MDX dans `src/content/` ou inline dans la page Astro selon nature.
