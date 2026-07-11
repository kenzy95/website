# Audit stratégique SEO/GEO : agencesimple.fr v2 (2026-07-04)

Audit Sacha, branche `feature/lamp-aceternity`, 52 URLs buildées, site non encore en production.
Méthode : lecture intégrale des briefs + code + build `dist/`, comptage de mots sur HTML rendu, vérification SERP live (recherches "agence prospection b2b" et "sdr externalisé" du 04/07/2026), 5 lentilles adversariales sur la stratégie globale.

---

## 1. Verdict global (5 lignes)

L'architecture est saine (mono-offre cohérente, anti-cannibalisation services bien pensée, maillage contextuel secteurs/villes/comparatifs réellement exécuté, schemas propres, redirections Framer faites). Mais le site tel quel n'est **pas lançable** : 4 pages du parcours de conversion sont des placeholders indexables ("en cours de rédaction" sur /tarifs, /methode, /a-propos, et un module RDV absent sur /contact), la home affiche du texte "Placeholder à remplir" en production, son title cannibalise /villes/paris, et son H1 ne contient aucun mot du keyword visé. Côté GEO, les 8 articles ne citent **zéro source externe** et l'entité Agence Simple n'existe nulle part hors site. Enfin, tout le contenu est daté du même jour : footprint de génération massive qui, combiné à 0 backlink propre, condamne les 3 premiers mois si rien n'est échelonné. Rien de structurel à refaire : c'est 2 semaines de corrections, pas 2 mois.

---

## 2. Erreurs bloquantes (à corriger avant bascule DNS)

### B1. Quatre pages de conversion sont des placeholders indexables

Constat (mots visibles sur le HTML buildé) : `/tarifs` 154 mots, `/methode` 153, `/a-propos` 152, toutes avec le texte visible "en cours de rédaction", meta `index, follow`, présentes dans le sitemap et linkées depuis le footer de 52 pages. `/contact` affiche "Module de prise de RDV en cours d'intégration" alors que **tous les CTA du site pointent dessus**.

Pourquoi c'est bloquant : Google évalue la qualité du site entier au lancement d'un domaine sans historique. 4 pages thin sur les 8 les plus linkées du site = signal qualité désastreux dès le premier crawl. Et `/a-propos` vide tue le levier E-E-A-T/GEO n°5 : c'est la page qui documente l'entité que les LLM cherchent. Le commentaire dans `src/pages/a-propos.astro` prétend "Schema Person + Organization déjà actifs" : c'est faux, `organizationSchema()` n'est injecté que sur la home (`BaseLayout.astro`, condition `isHome`).

Correction :
- Option A (préférée) : rédiger `/a-propos` et `/tarifs` avant bascule (contenu déjà spécifié dans les TODO des fichiers), intégrer Cal.com sur `/contact`. `/methode` peut suivre.
- Option B (si bascule urgente) : passer `noindex={true}` sur `/tarifs` et `/methode` dans les fichiers `src/pages/tarifs.astro` et `src/pages/methode.astro`, et les exclure du filtre sitemap dans `astro.config.mjs`. Ne JAMAIS lancer avec `/a-propos` vide ni `/contact` sans module de booking : ces deux-là sont non négociables.

### B2. La home affiche du contenu placeholder en production

Constat : `dist/index.html` contient les textes visibles "Histoire — 01", "Histoire — 02", "Histoire — 03" et "Placeholder — à remplir avec ton contenu (chiffres clés, anecdote client, manifeste illustré...)" (sections StoryScroll, `src/pages/index.astro` lignes 148-182). Bonus : ces chaînes contiennent des em dashes, interdits par charte.

Correction : remplir ou supprimer les StorySection avant tout lancement. Un prospect qui scrolle la home d'une agence qui vend de la rigueur et tombe sur "Placeholder" ne prend pas RDV.

### B3. Le title de la home cannibalise /villes/paris

Constat : home title = `'Agence prospection B2B Paris - rendez-vous garantis'` (`src/pages/index.astro` ligne 38). Or `/villes/paris` cible exactement `agence prospection b2b paris` (title "Agence de prospection B2B à Paris"). La décision mono-offre du 03/07 dit : home = "agence prospection b2b" tout court. Deux pages du site se battent sur la requête Paris, et la home abandonne la requête nationale.

Correction exacte, fichier `src/pages/index.astro` :
- Ancien : `const title = 'Agence prospection B2B Paris - rendez-vous garantis';`
- Nouveau : `const title = 'Agence de prospection B2B : rendez-vous qualifiés garantis';`
(SeoHead ajoutera "| Agence Simple". 48 caractères avant suffixe, le brand pourra être tronqué sur mobile, acceptable.)

### B4. Le H1 de la home ne contient aucun mot du keyword cible

Constat : H1 = "Payez seulement quand vous avez un RDV qualifié." Excellent hook commercial, zéro pertinence sémantique pour "agence prospection b2b". La seule occurrence est dans un paragraphe. Pour une page money visant la requête la plus concurrentielle du site, c'est se battre avec une main attachée : tous les concurrents en page 1 (ReCom, Captain Prospect, Lalaleads) ont le keyword en H1.

Correction (préserve le hook, à arbitrer avec Iris) :
- Ancien H1 : `Payez seulement quand vous avez un RDV qualifié.`
- Nouveau H1 : `L'agence de prospection B2B qui ne facture que les RDV qualifiés.`
- Alternative si Iris refuse de toucher au H1 : ajouter au-dessus un eyebrow `<p>` "Agence de prospection B2B" ET réécrire le paragraphe hero pour ouvrir sur une définition réponse-prête de 40 mots (levier GEO n°1) : "Agence Simple est une agence de prospection B2B qui livre des rendez-vous qualifiés par cold email et LinkedIn, avec un engagement contractuel chiffré sur le nombre de RDV." L'alternative est moins forte : le H1 reste le signal n°1.

### B5. Zéro source externe citée dans les 8 articles

Constat : `grep 'https://' src/content/blog/*.mdx` = 0 sur les 8 fichiers. Un article cite "Glassdoor et Welcome to the Jungle" en texte, sans lien. C'est le levier GEO n°2 (citations et sources) à zéro : ChatGPT et Perplexity scorent la fiabilité d'une page à ses sources sortantes, et un blog qui ne cite jamais rien ressemble exactement à ce qu'il est, du contenu généré.

Correction : 2 à 4 liens sortants sourcés par article (études, benchmarks Lemlist/Instantly/Gartner, documentation Google sur SPF/DKIM, grilles salaires WTTJ). Une passe de 2h sur les 8 articles.

### B6. Les 8 articles sont datés du même jour, et le sitemap ment sur lastmod

Constat : les 8 `publishedAt: "2026-07-04"`. Et dans `astro.config.mjs`, le sitemap pose `lastmod: new Date()` : toutes les pages annoncent une modification à chaque build, ce qui revient à un lastmod arbitraire (violation directe de la règle crawl budget).

Correction :
1. Échelonner la publication réelle (plan section 8) et ajuster `publishedAt` aux vraies dates de mise en ligne.
2. Retirer `lastmod: new Date()` de la config sitemap (pas de lastmod vaut mieux qu'un lastmod faux) ou utiliser l'option `serialize` pour un lastmod par page basé sur `updatedAt`/git.

---

## 3. Erreurs importantes

### I1. Cannibalisation "coût SDR" sur 3 pages : tranché

Les trois pages ne visent pas la même intention, mais leurs signaux se chevauchent. Décision :

| Page | Requête attribuée | Rôle |
|---|---|---|
| `/blog/cout-sdr-interne-vs-agence` | "combien coûte un sdr" / "coût sdr interne" (informational) | Pédagogie chiffrée, top funnel |
| `/comparatifs/sdr-interne-vs-agence-externalisee` | "sdr interne ou externalisé" / "internaliser ou externaliser sa prospection" (commercial, décision) | Aide à la décision, mid funnel |
| `/outils/calculateur-cout-sdr-interne-vs-agence` | AUCUNE requête en propre. Asset de conversion et linkable asset | Outil |

Corrections :
1. Le calculateur fait 167 mots visibles (île JS non crawlable). Ne pas le laisser concourir : ajouter 300-400 mots de méthodologie sous l'outil (hypothèses du calcul : charges patronales 40-45 %, coût outils, rampe 3-4 mois, sources liées). Ça le rend citable par les LLM (les calculateurs avec méthodologie transparente sont très repris) sans lui faire viser la requête de l'article.
2. Meta du comparatif, fichier `src/lib/content-data.ts` : la description ouvre sur "Comparatif coût, vitesse..." ce qui le colle à l'article. Réordonner :
   - Ancien : `"SDR interne ou agence externalisée ? Comparatif coût, vitesse de mise en route, scalabilité, maitrise du process, risque, ROI."`
   - Nouveau : `"SDR interne ou agence externalisée ? Comparatif pour décider : vitesse de mise en route, scalabilité, maîtrise du process, risque, coût complet."`
3. Maillage triangulaire à compléter : le comparatif linke déjà l'article (2 fois) mais PAS le calculateur ; l'article linke sa money page mais pas le calculateur. Ajouter : article → calculateur ("faites le calcul pour votre cas"), comparatif → calculateur, calculateur → comparatif + `/services/sdr-externalise` (déjà partiellement fait via CtaBlock, à rendre contextuel).

### I2. Collision "marque blanche" entre /services/sdr-externalise et /secteurs/agences

Constat : le title ET le H1 de `/services/sdr-externalise` disent "SDR externalisé en marque blanche", alors que `/secteurs/agences` cible "prospection b2b marque blanche". Deux pages optimisées sur "marque blanche". En plus c'est sémantiquement faux : un client final n'achète pas de la marque blanche, il achète de l'externalisation ; la marque blanche c'est pour les agences qui revendent.

Correction, fichier `src/pages/services/sdr-externalise.astro` :
- Ancien metaTitle : `'SDR externalisé en marque blanche | Agence Simple'`
- Nouveau : `'SDR externalisé : équipe de prospection complète | Agence Simple'`
- H1 ancien : `SDR externalisé en marque blanche : une équipe complète, sans recruter`
- H1 nouveau : `SDR externalisé : une équipe de prospection complète, sans recruter`
Répercuter dans `content-data.ts` (title, metaDescription "SDR externalisé en marque blanche..." → "SDR externalisé : équipe complète sans recrutement..."). Le mot "marque blanche" reste l'exclusivité de `/secteurs/agences`, avec un lien contextuel depuis la page SDR vers elle ("si vous êtes une agence et cherchez de la marque blanche").

### I3. La home est déclarée "hub du maillage" mais ne linke quasiment rien

Constat : hors header/footer, le body de la home contient 1 lien `/contact` et 1 lien `/methode` (FinalCta). Les composants ServiceTakeover, WhatWeDo, GuaranteeCards, ClientInterviews, ProcessSteps : zéro lien. Un hub qui reçoit tout le jus (23 liens footer sitewide + liens contextuels de toutes les pages) et ne redistribue rien vers les pages money, c'est un cul-de-sac de PageRank.

Correction : ajouter des liens contextuels dans le body home : ServiceTakeover ou WhatWeDo → les 3 pages `/services/*` (anchors : "notre agence cold email", "prospection LinkedIn", "SDR externalisé"), ClientInterviews → `/cas-clients`, ProcessSteps → `/methode`. 6 à 8 liens sortants contextuels, pas plus.

### I4. Footer : pas 43 liens mais 23, à restreindre quand même

Constat mesuré : 24 liens (23 internes + LinkedIn) dans `Footer.astro`, sur toutes les pages. Le vrai problème n'est pas le volume, c'est que les 5 pages villes (les plus faibles du site, voir I5) reçoivent un lien sitewide au même niveau que les pages services.

Correction : retirer le groupe "Villes" du footer (5 liens), le remplacer par une seule entrée "Zones d'intervention" → `/villes`. Résultat : 19 liens, et le jus sitewide se concentre sur services/comparatifs/cas-clients. Les villes restent accessibles à 2 clics via le hub.

### I5. Pages villes : position tranchée

Verdict : **garder les 5 publiées, zéro investissement supplémentaire pendant 6 mois, sauf Paris.**
- Elles ne sont PAS des doorway pages : 1 086 à 1 116 mots réellement différenciés par ville (vérifié), angle "zone d'intervention" honnête, schema areaServed City sans fausse adresse. Aucun risque de pénalité, coût marginal nul puisqu'elles existent.
- Mais sans adresse locale ni GBP, elles ne rankeront pas sur "agence prospection b2b lyon/lille/marseille" face à des acteurs locaux, et ces requêtes pèsent probablement moins de 30 recherches/mois chacune. Toute heure investie dessus est perdue.
- Paris est l'exception : adresse réelle 229 rue Saint-Honoré → **créer la fiche Google Business Profile Paris** (catégorie "Service de marketing", site vers `/villes/paris`), c'est le seul levier local activable et il sert aussi le pack local sur la requête money.
- Ne PAS en créer d'autres (Toulouse, Nantes...) tant qu'une des 5 ne génère pas au moins 50 impressions/mois en GSC.

### I6. Schema : trois incohérences

1. **HowTo déclaré, jamais rendu** : 3 articles ont `schema: "HowTo"` en frontmatter, mais `src/pages/blog/[slug].astro` n'injecte que `articleSchema`. Le champ est mort. Soit brancher `howToSchema()` (existe déjà dans `schema.ts`) quand `article.data.schema === 'HowTo'`, soit retirer le champ du frontmatter et du plan cocon. Reco : brancher, ça coûte 10 lignes et ça sert le GEO même si Google n'affiche plus les rich results HowTo.
2. **headline des cas clients pollué par le brand** : `caseStudySchema` reçoit `headline: metaTitle` qui contient "| Agence Simple" (ex. `src/pages/cas-clients/dunforce.astro` ligne 33). Le headline schema doit être le titre éditorial nu. Corriger sur les 3 pages cas clients.
3. **ProfessionalService et Organization non reliés** : la home porte les deux, mais `localBusinessSchema()` n'a ni `sameAs` ni lien vers `ORG_ID`. Ajouter dans `schema.ts` : `parentOrganization: { '@id': ORG_ID }` dans `localBusinessSchema`, pour que les LLM fusionnent les deux entités.

### I7. E-E-A-T / GEO : l'auteur unique n'a pas de page entité (question 6, tranché)

"Kenzy Gasmi" partout en author avec un lien LinkedIn, c'est insuffisant mais **pas besoin d'une page auteur séparée** pour un auteur unique : ce serait une page thin de plus. Décision :
1. `/a-propos` devient LA page entité : narratif fondateur + parcours + photo + schema `Person` complet (`@id` = `FOUNDER_ID` déjà défini dans `schema.ts`, `sameAs` LinkedIn, `knowsAbout`: prospection B2B, cold email, délivrabilité) + `AboutPage`.
2. Dans `articleSchema`, remplacer `url: SITE.founder.linkedin` par `url: ${SITE.url}/a-propos` et garder LinkedIn en `sameAs` du Person. L'entité auteur devient interne au site et documentée, les LLM la résolvent.
3. Sur chaque article, ajouter une bio auteur de 2 lignes en fin d'article avec lien vers `/a-propos` (levier E-E-A-T visible, pas seulement schema).

### I8. llms.txt contredit la FAQ home sur l'engagement

Constat : llms.txt dit "si l'engagement de RDV n'est pas tenu **sur 3 mois**, prolongation gratuite". La FAQ home (source contractuelle) dit : minimum vital chiffré, "on continue gratuitement jusqu'à l'atteindre", préavis 30 jours, aucune durée. Le "3 mois" est exactement l'incohérence que la décision du 03/07 a purgée de la FAQ. Un LLM qui lit les deux citera l'un ou l'autre au hasard.

Correction exacte, fichier `public/llms.txt` ligne 3 :
- Ancien : `Forfait mensuel sans engagement avec garantie minimum vital : si l'engagement de RDV n'est pas tenu sur 3 mois, prolongation gratuite jusqu'à le tenir.`
- Nouveau : `Forfait mensuel sans engagement (préavis 30 jours) avec garantie minimum vital : un nombre de RDV qualifiés est fixé contractuellement, et si ce seuil n'est pas atteint, le travail continue gratuitement jusqu'à l'atteindre.`

### I9. Perf home : île React de 184 Ko pour un effet de lampe

Constat : `dist/_astro/client.BT9I1SJu.js` = 184 Ko (runtime React) + Lamp 32 Ko, chargés `client:load` sur le hero. Sur mobile 4G c'est le LCP et l'INP du hero qui encaissent. Le H1 est bien dans le HTML initial (vérifié), donc pas de risque de contenu invisible, mais le budget perf est menacé sur la page la plus importante.

Correction : passer `LampContainer` en `client:visible` ne suffit pas (il est above the fold). Deux options : réimplémenter l'effet lamp en CSS pur (gradients + animation, faisable sans React), ou accepter et MESURER : Lighthouse mobile 4G obligatoire avant bascule, seuils LCP < 2,5 s / INP < 200 ms non négociables. Si ça passe en vert sur un Moto G4 simulé, on garde ; sinon CSS.

---

## 4. Erreurs mineures

1. **Anchor "En savoir plus →"** sur `/services/index.astro` : viole la checklist interne (anchors keyword-rich). Remplacer par le nom du service ("Découvrir notre agence cold email", etc.).
2. **robots.txt `Disallow: /legal/`** : bloquer le crawl empêche Google de voir un éventuel noindex ; les URLs peuvent s'indexer "URL only". Mieux : retirer le Disallow et mettre `noindex` sur les 2 pages legal (elles sont déjà hors sitemap).
3. **Fichier swap committé** : `src/pages/.index.astro.swp` traîne dans le repo. À supprimer + ajouter `*.swp` au .gitignore.
4. **Em dashes** dans les titles des pages methode-* de preview ("Preview Methode D1 — ...") : noindexées donc sans impact SEO, mais charte violée ; à purger en même temps que B2.
5. **9 pages de preview design** (methode-1 à 4, a, b, b-v2, c) : correctement noindexées et hors sitemap (vérifié), mais à supprimer du repo avant mise en prod pour ne pas gaspiller de crawl budget en 200 crawlables.
6. **`description` min 120 caractères** dans le schema Zod : bonne discipline, RAS.
7. **Cas clients : ajouter les 3 au llms.txt avec les métriques déjà présentes**, c'est fait, RAS. Par contre `/cas-clients` charge un `videoObjectSchema` : vérifier que les vidéos ont bien une `uploadDate` réelle et une URL d'embed valide avant lancement.

---

## 5. Tableau keyword par page money : verdicts

Volumes = estimations d'expérience marché FR (fourchettes), à recaler après 60 jours de GSC + un passage Keyword Planner. Difficulté jugée pour un domaine neuf à ~7 backlinks spam, désavoué ou pas.

| Page | Keyword actuel | Vol. est./mois | SERP constatée | Verdict | Action |
|---|---|---|---|---|---|
| `/` | agence prospection b2b | 300-600 | Listicles "Top 7/10" + agences établies (vérifié live 04/07) | **GARDER, corriger** | Title sans "Paris" (B3), H1 avec keyword (B4). Position réaliste J+90 : page 2. Le listicle assumé (section 6, article n°1) est le vrai cheval de Troie sur cette SERP |
| `/services/cold-email` | agence cold email | 100-250 | Moins saturée, mix agences/outils | GARDER | RAS, meilleure page du site (2 548 mots, angle technique) |
| `/services/linkedin-outreach` | agence prospection linkedin | 50-150 | Peu d'acteurs dédiés | GARDER | RAS |
| `/services/sdr-externalise` | agence sdr externalisé | 150-350 (tête : "sdr externalisé") | Pages services LeadActiv, Rerow, Lalaleads, ReCom (vérifié live) | **GARDER, recibler** | Viser "sdr externalisé" nu ; retirer "marque blanche" du title/H1 (I2) |
| `/secteurs/saas` | agence prospection saas | 30-80 | Faible concurrence dédiée | GARDER | Meilleur ratio du lot secteurs |
| `/secteurs/esn` | agence prospection esn | 10-30 | Quasi vide | GARDER (rôle double) | Volume marginal, mais page = landing de destination pour les campagnes outbound ESN. Rentabilité hors SEO |
| `/secteurs/cabinet-conseil` | agence prospection cabinet conseil | 10-30 | Quasi vide | GARDER (rôle double) | Idem ESN |
| `/secteurs/scale-up-post-levee` | agence prospection scale-up | ~0 (requête non tapée) | Inexistante | **CHANGER** | Nouveau kw : "prospection startup" (100-200/mois). Title : `Prospection B2B pour startups et scale-up post-levée`. H1 idem. La page devient aussi la landing outbound post-levée (campagne 81db50d0) |
| `/secteurs/agences` | prospection b2b marque blanche | 30-70 | Faible | GARDER | Exclusivité "marque blanche" à protéger (I2) |
| `/villes/paris` | agence prospection b2b paris | 100-250 | Listicles + local pack | GARDER + GBP | Seule ville avec levier réel (adresse). Créer GBP (I5) |
| `/villes/lyon` | agence prospection b2b lyon | 20-50 | Acteurs locaux | GARDER, geler | Zéro effort 6 mois |
| `/villes/bordeaux` | agence prospection b2b bordeaux | 10-30 | Quasi vide | GARDER, geler | Idem |
| `/villes/lille` | agence prospection b2b lille | 10-30 | Quasi vide | GARDER, geler | Idem |
| `/villes/marseille` | agence prospection b2b marseille | 10-30 | Quasi vide | GARDER, geler | Idem |
| `/comparatifs/sdr-interne-vs-agence-externalisee` | sdr interne ou externalisé / internaliser vs externaliser | 50-150 cumulés | Blogs d'agences | GARDER | Meta à réordonner (I1) |
| `/comparatifs/cold-email-vs-linkedin-outreach` | cold email ou linkedin prospection | 30-80 | Blogs outils (Lemlist, LGM) | GARDER | Format tableau = très cité par les LLM, à soigner |
| `/comparatifs/agence-prospection-vs-freelance` | agence ou freelance prospection | 20-60 | Quasi vide | GARDER | RAS |

Aucun keyword n'est à jeter : le ciblage est globalement bon. Les deux vraies erreurs sont le "Paris" dans le title home et le keyword fantôme "agence prospection scale-up".

---

## 6. Roadmap contenus : les 7 prochains articles par ROI décroissant

Trous béants confirmés : rien sur le prix du marché, rien sur "meilleure agence", zéro template/exemple. Ce sont pourtant les 3 formats que la SERP et les LLM récompensent le plus sur ce marché.

| # | Requête cible | Angle | Cocon | Pourquoi ce rang |
|---|---|---|---|---|
| 1 | meilleure agence de prospection b2b / top agences prospection | Listicle assumé "X agences de prospection B2B comparées (critères vérifiables)", Agence Simple inclus SANS se mettre n°1 partout, critères transparents | B | La SERP de la requête money est dominée par des listicles (constaté live). Sans le nôtre, on laisse Scalability, Oltega et PulpMeUp cadrer le marché. C'est aussi le format n°1 cité par ChatGPT/Perplexity sur "meilleure agence" |
| 2 | prix agence de prospection / combien coûte la prospection externalisée | Fourchettes de marché sourcées (les concurrents affichent 1 500 à 8 000 €/mois, 150 à 600 € le RDV), facteurs de variation, pièges des modèles au RDV. Aucun prix Agence Simple, conforme charte | B | Intent commercial maximal, et la page `/tarifs` sans montant a besoin de ce support éditorial. Linke `/tarifs` + comparatifs |
| 3 | exemple cold email b2b / template cold email | 8-10 exemples commentés (anonymisés des vraies campagnes), pourquoi ça marche, variantes par persona | A | Gros volume (500+/mois cumulé), et les exemples concrets sont l'anti-footprint IA par excellence : personne ne peut copier vos vrais emails |
| 4 | combien de rdv qualifiés par mois prospection | Benchmarks par taille de cible et panier moyen, méthode du minimum vital expliquée | B | Requête de cadrage que tout prospect se pose, alimente le simulateur `/outils/simulateur-rdv-mensuels` (qui est aujourd'hui orphelin de contenu) |
| 5 | relance cold email / combien de relances séquence | Structure de séquence, délais, exemples de relances | A | Complète le cocon A, volume correct, facile à écrire depuis l'expertise réelle |
| 6 | sales navigator prix / sales navigator vaut-il le coup | Grille tarifaire sourcée LinkedIn + pour qui c'est rentable | C | Le cocon C n'a que 2 articles, volume réel (300+/mois sur "sales navigator prix"), top funnel qui nourrit le guide ciblage existant |
| 7 | comment choisir son agence de prospection / agence prospection avis | Checklist de 12 questions à poser avant de signer (dont les pièges : engagement 12 mois, mark-up outils, RDV non qualifiés comptés) | B | Verrouille le mid-funnel entre le listicle (#1) et la home. Positionne la garantie minimum vital comme critère de marché |

Règle transverse : chaque nouvel article respecte le schéma de maillage du cocon (1 money page, 2 frères, home max 1) ET cite 2-4 sources externes dès la rédaction (correction B5 appliquée par défaut).

---

## 7. Plan autorité / netlinking 90 jours (agence solo, budget temps ~4h/semaine)

Les 3 facteurs qui empêcheront ce site de ranker, classés :

**Risque n°1 : zéro autorité (7 backlinks spam).** Sans domaines référents, même le meilleur contenu plafonne en page 3 sur toute requête commerciale. C'est le facteur limitant absolu.
**Risque n°2 : entité inconnue (Google ET LLM).** Aucune mention hors site : pas de fiche annuaire, pas de GBP, pas de citation presse/communauté. Google ne peut pas relier agencesimple.fr à une entreprise réelle ; ChatGPT/Perplexity n'ont rien à citer.
**Risque n°3 : footprint de contenu simultané.** 20+ pages de contenu et 8 articles datés du même jour sur un domaine mort depuis des mois = pattern "site généré" typique post-Helpful Content. Se corrige gratuitement en échelonnant (section 8).

Plan d'action :

### Jours 0-15 : fondations entité (coût : 0 €, ~6h)
- Google Business Profile Paris (229 rue Saint-Honoré) + cohérence NAP stricte partout.
- Fiches annuaires B2B FR : Sortlist, Trustfolio, Codeur.com, Clutch.co, Crunchbase, Welcome to the Jungle (page entreprise), societe.com (vérifier les infos), page LinkedIn entreprise à jour avec lien site.
- Profil Malt de Kenzy mis à jour avec lien agencesimple.fr (backlink profil + signal entité fondateur).
- Cible : 10-12 domaines référents "fondation". Ce sont des liens faibles mais ils créent la carte d'entité que les LLM consomment (levier GEO n°5).

### Jours 15-45 : liens éditoriaux (le vrai levier, ~3h/semaine)
- **2 guest posts** : Salesdorado accepte les contributions expertes (viser un angle data : "ce que 300 000 cold emails nous apprennent sur les taux de réponse 2026", avec les stats réelles d'Instantly anonymisées). Deuxième cible : blog La Growth Machine, Lemlist FR ou Waalaxy, qui publient des points de vue d'agences.
- **Partenariats croisés existants** : Wilco (déjà partenaire, section PartnerWilco sur la home : demander le lien retour depuis leur annuaire de partenaires, c'est un DR élevé gratuit) et 1144 (le deal de partenariat inclut naturellement une page partenaire croisée).
- **3 clients en backlink** : Happycolis, Invent-App, Dunforce ont un cas client à leur nom sur le site ; demander en échange une mention "Ils parlent de nous" ou un lien depuis leur page partenaires/blog. Taux d'acceptation élevé quand le cas client les valorise.
- Cible : 5-8 liens éditoriaux DR 30+.

### Jours 45-90 : assets citables + présence communautaire (~2h/semaine)
- Pousser les calculateurs (une fois enrichis de leur méthodologie, I1) sur LinkedIn via des posts Kenzy chiffrés : les outils gratuits avec méthodologie transparente sont le linkable asset n°1 du secteur, et Perplexity les cite.
- Présence Reddit/communautés FR (r/entrepreneur_fr, forums Growth FR, communautés Slack sales FR) : répondre aux questions "agence de prospection avis" sans spammer, en citant les données publiées sur le blog. Perplexity puise massivement dans Reddit (levier GEO n°6).
- 1 pitch podcast sales FR (Les Héros de la Vente ou équivalent) : un épisode = un backlink + une entité renforcée + du contenu réutilisable.
- Test mensuel GEO : poser "meilleure agence de prospection B2B" et "combien coûte une agence de prospection" sur ChatGPT, Perplexity et Google AI Overviews, noter qui est cité. Journal dans `memory/seo-patterns.md`.

KPI 90 jours : 20-25 domaines référents dont 6+ éditoriaux, GBP actif avec 3+ avis clients, 1 citation LLM observée sur au moins une requête du panier.

---

## 8. Plan de publication échelonnée (recommandé : OUI)

Le site peut basculer avec ses pages structurelles (home, services, secteurs, villes, comparatifs, cas clients) le jour J : c'est un site qui se lance, Google comprend. Le footprint toxique, c'est le blog complet daté du même jour + les futures publications en rafale.

| Semaine | Mise en ligne | Notes |
|---|---|---|
| J0 (bascule DNS) | Pages structurelles + `/a-propos` et `/tarifs` rédigées + corrections B1-B6 | Soumettre sitemap GSC, demander indexation des 8 pages prioritaires manuellement |
| J0 + les 2 meilleurs articles | `externaliser-prospection-b2b-guide` + `comment-ecrire-cold-email-b2b` | `publishedAt` = date réelle du jour |
| S+1 | `cout-sdr-interne-vs-agence` + `delivrabilite-email-spf-dkim-dmarc` | |
| S+2 | `taux-reponse-cold-email-benchmarks` + `definir-client-ideal-ciblage-b2b` | |
| S+3 | `prospection-linkedin-methode` + `sales-navigator-guide-ciblage` | Cocon C complet, poser les back-links money page → articles (Phase 5 du plan cocon) |
| S+4 à S+10 | 1 article/semaine de la roadmap section 6, dans l'ordre | Rythme régulier > rafale. Chaque article annoncé par un post LinkedIn Kenzy |

Mécanique Astro : garder les `.mdx` en `draft: true` et flipper le flag à chaque publication (le filtre `!data.draft` existe déjà dans `blog/[slug].astro`), avec `publishedAt` mis à jour au jour du flip.

Monitoring post-bascule (rappel framework migration) : GSC quotidien 30 jours (couverture, 404, redirections `_redirects` testées sur échantillon : les règles /fr/*, /articles/* et pages template), alerte si une top URL Framer perd ses 301.

---

## Annexe : les 5 lentilles sur la stratégie globale

| Lentille | Verdict | Justification courte |
|---|---|---|
| Googlebot 2026 | **C → B après corrections** | Placeholders indexables (B1), lastmod menteur (B6), cannibalisation Paris (B3). L'architecture et les schemas sont bons, le launch state ne l'est pas |
| GPTBot / PerplexityBot | **C** | 0 source externe, entité vide hors site, à-propos placeholder, llms.txt incohérent. Le llms.txt et les FAQ propres sauvent du D |
| Dev front | **A-** | Code propre, sources de vérité uniques, template unique par famille. Points : champ schema mort, fichier .swp committé, 9 pages preview à purger |
| Prospect mobile 4G | **C** | Le CTA universel mène vers un module de RDV inexistant. 184 Ko de React sur le hero. "Placeholder" visible au scroll. Tout est corrigeable en jours |
| Concurrent qui copie | **B** | Garantie minimum vital contractuelle + 3 cas chiffrés vidéo + calculateurs = coûteux à copier. Les articles de 1 300 mots, eux, se copient en une après-midi : la défense viendra des exemples réels (article #3) et des données propriétaires |

---

## Résumé : 5 actions prioritaires

1. **Ne pas basculer le DNS en l'état.** Rédiger `/a-propos` (page entité E-E-A-T avec schema Person) et `/tarifs`, intégrer Cal.com sur `/contact`, purger les "Placeholder" et "Histoire 01/02/03" de la home. C'est le blocage n°1, tout le reste peut suivre la bascule.
2. **Corriger le couple title/H1 de la home** : retirer "Paris" du title (rendu à `/villes/paris`) et mettre "agence de prospection B2B" dans le H1 en gardant le hook ("L'agence de prospection B2B qui ne facture que les RDV qualifiés").
3. **Passe GEO sur les 8 articles** : 2-4 sources externes liées par article, bio auteur pointant vers `/a-propos`, brancher le schema HowTo déclaré, corriger le llms.txt (le "3 mois" contredit la FAQ).
4. **Échelonner la publication** : 2 articles à J0 puis 2/semaine, `publishedAt` réels, retirer le `lastmod: new Date()` du sitemap, puis 1 nouvel article/semaine en commençant par le listicle "meilleures agences de prospection B2B" et l'article prix du marché, les 2 plus gros trous du cocon.
5. **Lancer la machine à autorité dès J0** : GBP Paris, 10 fiches annuaires B2B, liens retour Wilco + 1144 + les 3 clients des cas clients, 2 guest posts (Salesdorado en tête). Sans 20 domaines référents à J+90, aucune page money ne sortira de la page 3, quel que soit le contenu.
