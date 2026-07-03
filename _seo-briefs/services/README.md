# SEO Briefs – Pages services

Recap Sacha du batch de briefs SEO pour les 4 pages services (Phase 1). Livrable pour Théo qui va rédiger.

Livrés le 03 juillet 2026 par Sacha (SEO/GEO/Architecte web).

---

## Fichiers du batch

| Slug | Fichier | Keyword primaire | Longueur cible |
|---|---|---|---|
| /services/prospection-b2b | `prospection-b2b.md` | agence prospection b2b | 2200-2600 mots |
| /services/cold-email | `cold-email.md` | agence cold email | 2400-2800 mots |
| /services/linkedin-outreach | `linkedin-outreach.md` | agence prospection linkedin | 2000-2400 mots |
| /services/sdr-externalise | `sdr-externalise.md` | agence sdr externalisé | 2200-2600 mots |

---

## Ordre de rédaction recommandé pour Théo

Priorité fixée sur le ratio impact business (proximité de la requête à un deal signé) x difficulté d'exécution.

### 1. `/services/prospection-b2b` (à faire en PREMIER)
- **Pourquoi** : c'est le hub commercial du site, la page qui capte la requête la plus proche du deal signé. Sans elle, aucune des autres pages ne convertit vraiment (elles renvoient toutes vers ce hub). Volume de recherche le plus élevé du batch.
- **Difficulté** : haute (SERP concurrentielle avec Seventic, Monsieur Lead, Lalaleads).
- **Ce que Théo doit préparer avant d'écrire** : les 3 cas clients détaillés (Invent-App 151 RDV, Happycolis 41 en 5 semaines, Dunforce 14%). Sans chiffres tangibles, le brief tombe à plat.
- **Estimation temps** : 4 à 5 heures de rédaction humaine (Kenzy, ou Aude sur un draft Théo).

### 2. `/services/sdr-externalise` (à faire en DEUXIÈME)
- **Pourquoi** : requête mûre (dirigeant qui hésite recrutement vs externalisation), la plus forte conversion en RDV par visite. Volume moindre que prospection-b2b mais ROI par visiteur plus élevé.
- **Difficulté** : moyenne (SERP moins saturée, Suxeed et Acceor à contourner par le comparatif honnête).
- **Ce que Théo doit préparer avant d'écrire** : le tableau comparatif interne vs externalisé avec chiffres validés (à croiser avec Kenzy sur le prix d'entrée à 2K€).
- **Estimation temps** : 4 heures.

### 3. `/services/cold-email` (TROISIÈME)
- **Pourquoi** : keyword à volume moyen-élevé, angle « autorité technique » distinctif, mais plus loin du deal signé (le prospect qui tape « cold email » est encore en apprentissage).
- **Difficulté** : moyenne-haute (exige de la profondeur technique sur SPF/DKIM/DMARC).
- **Ce que Théo doit préparer avant d'écrire** : valider avec Kenzy les tools utilisés en 2026 (Instantly, Icypeas, UseBouncer, Zapmail) pour ne pas dater le contenu. Ajouter 1 à 2 sources externes chiffrées (correctif adversarial de la page 1).
- **Estimation temps** : 5 heures (le plus long à cause du volet technique).

### 4. `/services/linkedin-outreach` (QUATRIÈME)
- **Pourquoi** : requête à volume plus faible, canal secondaire, angle différenciant clair (rythme humain assumé) mais impact commercial moindre par visite.
- **Difficulté** : moyenne (SERP moins concurrentielle, angle unique à défendre).
- **Ce que Théo doit préparer avant d'écrire** : validation avec Kenzy sur Aimfox comme choix par défaut. Éventuel ajustement si Kenzy est passé à un autre outil.
- **Estimation temps** : 3 à 4 heures.

**Estimation totale du batch** : 16 à 18 heures de rédaction humaine, réparties sur 2 semaines à raison de 8-9 heures/semaine.

---

## Risques de cannibalisation entre pages services

Réel. Trois pages sur quatre (prospection-b2b, cold-email, sdr-externalise) partagent des zones sémantiques proches : « génération de RDV B2B », « garantie minimum vital », « forfait mensuel », « équipe externalisée ». Sans discipline stricte, Google va cannibaliser et faire ranker aléatoirement une page pour une requête destinée à une autre.

### Règles anti-cannibalisation à imposer à Théo

1. **Une seule page cible chaque keyword primaire.**
   - `agence prospection b2b` → SEULEMENT sur `/services/prospection-b2b`.
   - `agence cold email` → SEULEMENT sur `/services/cold-email`.
   - `agence prospection linkedin` → SEULEMENT sur `/services/linkedin-outreach`.
   - `agence sdr externalisé` → SEULEMENT sur `/services/sdr-externalise`.
   - Interdit d'utiliser ces phrases exactes dans le H1 / H2 / meta title des autres pages.

2. **Différenciation d'angle explicite dans le H1.**
   - `prospection-b2b` = HUB (« RDV qualifiés + garantie »).
   - `cold-email` = CANAL TECHNIQUE (« délivrabilité + copy »).
   - `linkedin-outreach` = CANAL RELATIONNEL (« Sales Navigator + rythme humain »).
   - `sdr-externalise` = FORMAT-SOLUTION (« équipe complète sans recruter »).

3. **Le H1 de chaque page doit répondre à une question différente.**
   - prospection-b2b répond à « qui peut me livrer des RDV qualifiés B2B ? »
   - cold-email répond à « comment on fait du cold email sans se cramer ? »
   - linkedin-outreach répond à « comment on fait du LinkedIn sans devenir spam ? »
   - sdr-externalise répond à « externaliser ou embaucher ? »

4. **Maillage interne hiérarchique.**
   - Les 3 pages canal/format renvoient vers prospection-b2b comme hub principal (anchor : « notre offre complète de prospection B2B »).
   - prospection-b2b renvoie vers les 3 autres comme approfondissements (anchor spécifique à chaque canal).
   - Pas de renvoi croisé complet entre cold-email et linkedin-outreach : ils renvoient tous les 2 vers prospection-b2b + comparatif dédié `/comparatifs/cold-email-vs-linkedin-outreach`.

5. **Pas de FAQ dupliquée entre pages.**
   - La question sur le prix est traitée UNE SEULE FOIS avec profondeur (sur prospection-b2b et sur `/tarifs`). Sur les autres pages, réponse courte + lien vers `/tarifs`.
   - La question sur la garantie minimum vital est traitée UNE SEULE FOIS avec profondeur (sur prospection-b2b). Sur les autres pages, mention 1 phrase + lien.
   - Chaque page a 6-8 questions spécifiques à son angle, pas d'overlap avec les 3 autres.

6. **Meta description unique par page** (déjà fait dans `content-data.ts`, à ne pas modifier sans double-check anti-duplication).

---

## Sections obligatoires respectées sur les 4 pages

Rappel de la règle Sacha : chaque page service doit contenir a minima les blocs suivants. Vérification :

| Section | prospection-b2b | cold-email | linkedin-outreach | sdr-externalise |
|---|---|---|---|---|
| Pour qui (ICP) | H2.2 | H2.2 | H2.2 | H2.2 |
| Comment on procède | H2.3 | H2.3 | H2.3 | H2.6 |
| Ce qui est inclus | H2.4 | H2.7 | H2.7 | H2.7 |
| Ce qui n'est PAS inclus | H2.5 | H2.8 | H2.8 | H2.8 |
| Cas client lié | H2.7 | H2.9 | H2.9 | H2.9 |
| FAQ (5-8 Q/R) | H2.9 | H2.11 | H2.11 | H2.11 |
| CTA final | H2.10 | H2.12 | H2.12 | H2.12 |

Les 4 pages ont la structure complète. OK.

---

## Post-rédaction : checklist Sacha avant publication

À faire par Kenzy ou par Sacha en session courte, dès qu'une page est rédigée par Théo :

- [ ] Passer le contenu au Schema Markup Validator (schema.org/validator) : Service + FAQPage + BreadcrumbList doivent tous valider.
- [ ] Vérifier que le title final est bien < 60 chars sur mobile Google.
- [ ] Passer la page en Lighthouse mobile : LCP < 2.5s, INP < 200ms, CLS < 0.1. Toutes les images en WebP.
- [ ] Vérifier que l'anchor text des liens internes est bien keyword-rich (pas « ici », pas « en savoir plus »).
- [ ] Confirmer qu'aucune phrase de la page ne contient un em dash (le caractère U+2014, interdit par charte).
- [ ] Faire un test manuel ChatGPT et Perplexity après indexation : poser la requête « meilleure agence prospection B2B Paris » et vérifier si le site est cité. Suivi hebdo pendant 4 semaines.
- [ ] Ajouter la page au sitemap.xml et resoumettre à Google Search Console.
- [ ] Vérifier la connexion GSC + suivi indexation + suivi clics/impressions pendant 30 jours.

---

## Points ouverts à confirmer avec Kenzy avant publication

1. **Prix d'entrée** : le brief mentionne 2 000 € HT/mois en entrée de gamme. Confirmer avant publication (peut être 2 500 € ou 3 000 € selon décision).
2. **Cas clients affichés** : Happycolis, Invent-App, Dunforce. Confirmer que les chiffres sont bien validés côté client pour pouvoir les afficher publiquement (attention RGPD et clauses de confidentialité éventuelles).
3. **Bureau physique** : mention 229 rue Saint-Honoré comme adresse siège (déjà dans llms.txt et site.ts). Le bureau est-il utilisé pour RDV client ou juste siège administratif ? À reformuler différemment selon la réponse.
4. **Stack outils** : valider Instantly, Aimfox, Icypeas, UseBouncer, Sales Navigator comme stack de référence 2026. Si Kenzy est passé à d'autres outils depuis, à mettre à jour dans cold-email.md H2.5 et linkedin-outreach.md H2.6.
5. **Kenzy pilote en direct** : le brief marque ce point fort partout. Vrai à ce stade (juillet 2026). Si Agence Simple prend un account manager d'ici publication, à ajuster.

---

## Nom des fichiers et arborescence finale

```
_seo-briefs/
└── services/
    ├── README.md                      (ce fichier)
    ├── prospection-b2b.md
    ├── cold-email.md
    ├── linkedin-outreach.md
    └── sdr-externalise.md
```

Prochaine phase Sacha (Phase 2) : briefs des 5 pages secteurs (SaaS, ESN, cabinet-conseil, scale-up-post-levée, agences) et 5 pages villes (Paris, Lyon, Bordeaux, Lille, Marseille). À déclencher après validation de ce batch et rédaction de prospection-b2b.
