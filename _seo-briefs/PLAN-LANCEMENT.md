# Plan de lancement agencesimple.fr v2 (préparé le 2026-07-04)

Tout est prêt sauf les éléments marqués KENZY (actions personnelles ou arbitrages).

## 1. Checklist pré-bascule DNS

- [ ] KENZY : remplir ou retirer les sections StoryScroll de la home (textes "Placeholder" et "Histoire 01/02/03" visibles)
- [ ] KENZY : arbitrage H1 home (proposition Sacha : "L'agence de prospection B2B qui ne facture que les RDV qualifiés")
- [ ] Basculer le blog en mode lancement (voir section 2, une commande)
- [ ] Lighthouse mobile sur la home buildée : LCP < 2,5 s, INP < 200 ms (l'île React de la lamp fait 184 Ko ; si rouge, refaire l'effet en CSS pur)
- [ ] Vérifier `public/_redirects` actif après le premier déploiement Cloudflare Pages (tester /articles/happycolis, /fr/, /L'agence)
- [ ] Créer la propriété Google Search Console + soumettre `sitemap-index.xml` + demander l'indexation manuelle de : home, 3 services, cas-clients, les 2 articles J0
- [ ] Brancher un analytics respectueux (Plausible ou GA4) si souhaité

## 2. Publication échelonnée du blog (mécanique prête)

Etat au lancement (décision Kenzy 2026-07-04) : **6 articles publiés à J0**, les 3 restants en `draft: true` (flag supporté par le template, les drafts ne sont ni buildés ni dans le sitemap).

Au jour J, lancer :

```bash
cd ~/Desktop/agencesimple-site
# passe en draft les 3 articles gardés pour les semaines suivantes
for f in src/content/blog/prospection-linkedin-methode.mdx \
         src/content/blog/sales-navigator-guide-ciblage.mdx \
         src/content/blog/meilleures-agences-prospection-b2b.mdx; do
  grep -q '^draft:' "$f" || sed -i '' 's/^author:/draft: true\nauthor:/' "$f"
done
# et mettre le publishedAt des 6 articles publiés à la date réelle du jour J
```

Puis chaque semaine, pour publier un article : retirer sa ligne `draft: true` ET mettre `publishedAt` à la date réelle du jour, commit, push (le déploiement Cloudflare rebuild).

| Semaine | Articles publiés |
|---|---|
| J0 | externaliser-prospection-b2b-guide, comment-ecrire-cold-email-b2b, cout-sdr-interne-vs-agence, delivrabilite-email-spf-dkim-dmarc, taux-reponse-cold-email-benchmarks, definir-client-ideal-ciblage-b2b |
| S+1 | prospection-linkedin-methode |
| S+2 | sales-navigator-guide-ciblage (cocon LinkedIn complet, poser les liens retour) |
| S+3 | meilleures-agences-prospection-b2b (le listicle, annoncé par un post LinkedIn) |
| S+4 et suite | 1 article/semaine de la roadmap audit (n°2 : prix du marché de la prospection) |

Chaque publication est annoncée par un post LinkedIn de Kenzy (reprendre l'angle chiffré de l'article).

## 3. Netlinking J0-15 : fondations entité (~6h, coût 0 €)

- [ ] KENZY : **Google Business Profile** : créer la fiche "Agence Simple" au 229 rue Saint-Honoré, 75001 Paris, catégorie "Service de marketing", site = https://agencesimple.fr, tel +33 6 24 40 46 24. Demander ensuite un avis Google aux 3 clients des cas clients.
- [ ] Annuaires B2B (créer les fiches avec le MEME NAP partout : Agence Simple / 229 rue Saint-Honoré 75001 Paris / +33 6 24 40 46 24) :
  - Sortlist, Trustfolio, Codeur.com, Clutch.co, Crunchbase
  - Welcome to the Jungle (page entreprise), societe.com (vérifier les infos existantes)
  - Page LinkedIn entreprise : vérifier que le lien site pointe bien vers agencesimple.fr
  - KENZY : profil Malt personnel, ajouter le lien agencesimple.fr

### Messages prêts à envoyer (liens retour partenaires et clients)

**Wilco** (déjà partenaire, bannière sur la home) :
> Bonjour [prénom], on refond notre site et Wilco y figure en partenaire dès la home. Est-ce que vous pouvez ajouter Agence Simple dans votre annuaire de partenaires avec un lien vers agencesimple.fr ? Je vous envoie logo + description en 2 lignes si besoin.

**1144** (deal partenariat en cours) :
> [Prénom], dans le cadre du partenariat, je propose qu'on se référence mutuellement : une page ou mention partenaire avec lien croisé entre 1144.fr et agencesimple.fr. C'est 10 minutes de chaque côté et bon pour le référencement des deux.

**Happycolis / Invent-App / Dunforce** (cas clients publiés) :
> Bonjour [prénom], on vient de publier votre étude de cas sur notre nouveau site : [lien cas client]. Elle met en avant vos résultats, n'hésitez pas à la partager. Si vous avez une page partenaires ou presse sur votre site, une mention avec lien vers l'étude nous aiderait beaucoup. Et si vous avez 2 minutes, un avis Google sur notre fiche ferait la différence.

## 4. Netlinking J15-45 : liens éditoriaux (~3h/semaine)

- [ ] Guest post Salesdorado : pitcher un angle data ("ce que nos campagnes 2026 nous apprennent sur les taux de réponse en cold email", stats Instantly agrégées et anonymisées)
- [ ] 2e guest : blog La Growth Machine, Lemlist FR ou Waalaxy
- [ ] KENZY : 1 pitch podcast sales FR (Les Héros de la Vente ou équivalent)

## 5. J45-90 : assets citables

- [ ] Enrichir les 3 calculateurs `/outils/*` d'une méthodologie visible (300-400 mots : hypothèses, charges patronales, sources) puis les pousser via posts LinkedIn
- [ ] Présence communautés FR (Reddit r/entrepreneur_fr, Slack sales) : répondre en citant les données du blog, sans spam
- [ ] Test GEO mensuel : demander à ChatGPT/Perplexity "meilleure agence de prospection B2B" et "combien coûte une agence de prospection", noter qui est cité (journal : memory/seo-patterns.md)

## KPI J+90

20-25 domaines référents (dont 6+ éditoriaux), GBP actif avec 3+ avis, 1 citation LLM observée. En dessous : réallouer le temps contenu vers le netlinking.
