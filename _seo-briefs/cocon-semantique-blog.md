# Cocon sémantique blog — plan (3 cocons, 8 articles)

Décidé par le lead SEO. La **home** (`/`) est la page cible finale de tout le site (requête « agence prospection b2b »). Chaque cocon thématique regroupe des articles informationnels qui poussent le jus vers leur money page dédiée, puis vers la home.

Rappel architecture mono-offre (voir `DECISION-2026-07-03-mono-offre.md`) : pas de page `/services/prospection-b2b`. Le hub du maillage interne est la home.

## Les 3 cocons et leurs money pages

### Cocon A — Cold email → money page `/services/cold-email`
1. `comment-ecrire-cold-email-b2b` — « Comment écrire un cold email B2B qui obtient des réponses » (kw : comment écrire un cold email) — schema **HowTo** — *Phase 4*
2. `delivrabilite-email-spf-dkim-dmarc` — « Délivrabilité email : SPF, DKIM, DMARC expliqués simplement » (kw : délivrabilité cold email) — schema **Article** — *Phase 4*
3. `taux-reponse-cold-email-benchmarks` — « Taux de réponse en cold email : benchmarks et leviers » (kw : taux de réponse cold email) — schema **Article** — *Phase 4*

### Cocon B — Prospection externalisée → money pages `/` et `/services/sdr-externalise`
4. `externaliser-prospection-b2b-guide` — « Externaliser sa prospection B2B : le guide complet » (kw : externaliser sa prospection commerciale) — schema **Article** — *Phase 4*
5. `cout-sdr-interne-vs-agence` — « Combien coûte un SDR interne ? Le vrai calcul » (kw : coût SDR interne) — schema **Article** — *Phase 5*
6. `definir-client-ideal-ciblage-b2b` — « Comment définir son client idéal : méthode de ciblage B2B » (kw : définir son client idéal) — schema **HowTo** — *Phase 5*

### Cocon C — LinkedIn outreach → money page `/services/linkedin-outreach`
7. `prospection-linkedin-methode` — « Prospection LinkedIn : la méthode complète » (kw : prospection linkedin) — schema **HowTo** — *Phase 5*
8. `sales-navigator-guide-ciblage` — « Sales Navigator : le guide du ciblage efficace » (kw : sales navigator ciblage) — schema **Article** — *Phase 5*

## Règle de maillage

Chaque article respecte exactement ce schéma de liens sortants dans son body :

- **1 lien vers sa money page**, avec un anchor riche en keyword (pas « cliquez ici »). Cocon A → `/services/cold-email`. Cocon B → `/` et/ou `/services/sdr-externalise`. Cocon C → `/services/linkedin-outreach`.
- **2 liens vers des articles frères** du même cocon (renforce la cohérence thématique du cluster).
- **1 lien vers la home** au maximum (souvent confondu avec le lien money page du cocon B).

Les **money pages ne renvoient pas encore de liens retour** vers les articles : ces back-links (money page → article de cluster) sont posés en **Phase 5**, une fois les 8 articles publiés, pour éviter de créer des liens morts.

### Détail des liens sortants par article (Phase 4)

| Article | Money page | Frères | Home |
|---------|-----------|--------|------|
| `comment-ecrire-cold-email-b2b` | `/services/cold-email` | `delivrabilite-email-spf-dkim-dmarc`, `taux-reponse-cold-email-benchmarks` | `/` |
| `delivrabilite-email-spf-dkim-dmarc` | `/services/cold-email` | `comment-ecrire-cold-email-b2b`, `taux-reponse-cold-email-benchmarks` | `/` |
| `taux-reponse-cold-email-benchmarks` | `/services/cold-email` | `comment-ecrire-cold-email-b2b`, `delivrabilite-email-spf-dkim-dmarc` | `/` |
| `externaliser-prospection-b2b-guide` | `/` + `/services/sdr-externalise` | `cout-sdr-interne-vs-agence`, `definir-client-ideal-ciblage-b2b` (publiés en Phase 5) | `/` (= lien money page) |

Note : les deux frères du cocon B (`cout-sdr-interne-vs-agence`, `definir-client-ideal-ciblage-b2b`) sont écrits en Phase 5. Les liens sont posés dès maintenant dans l'article 4 pour figer le maillage du cluster ; ils résolvent dès la publication Phase 5.

## Règles éditoriales (Kenzy)

- Français natif, zéro calque anglais visible, zéro em dash, vouvoiement, voix équipe.
- Aucun prix en euros pour l'offre Agence Simple. Prix autorisés uniquement pour des données de marché sourcées et utiles (salaire SDR, licence Sales Navigator).
- Jamais de promesse invérifiable, jamais de bourrage de keyword.
- Chiffres clients autorisés : Happycolis 41 RDV/5 semaines, Invent-App 151 RDV/7 %, Dunforce 14 % de réponse. Benchmark marché : 3-5 % de réponse.
