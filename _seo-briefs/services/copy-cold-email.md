---
meta_title: "Agence cold email B2B avec vraie délivrabilité | Agence Simple"
meta_description: "Agence cold email B2B : délivrabilité, copy, séquences. Configuration SPF/DKIM/DMARC, warm-up, A/B test. Forfait mensuel sans engagement."
primary_keyword: "agence cold email"
slug: "/services/cold-email"
---

# Agence cold email B2B : délivrabilité, copy, séquences. On explique ce qu'on fait, ligne par ligne.

La plupart des agences de cold email vendent une boîte noire. Vous payez, des emails partent, un reporting arrive, et vous ne savez ni comment l'infrastructure est montée, ni pourquoi vos taux d'ouverture s'effondrent au bout de trois semaines. Cette page fait l'inverse : elle explique en détail ce que nous faisons, de la configuration technique au copywriting, pour que vous puissiez juger avant de signer.

Le cold email fonctionne encore très bien en B2B, à une condition : que la délivrabilité soit traitée comme un métier à part entière, pas comme une case à cocher. C'est là que se joue la différence entre une campagne qui remplit un agenda et une campagne qui finit en spam.

## Ce qu'on entend par cold email (et ce que ce n'est pas)

Le cold email, c'est un email non sollicité envoyé à un décideur B2B identifié, en rapport direct avec sa fonction, dans le respect du RGPD au titre de l'intérêt légitime professionnel. Chaque message porte un lien de désinscription et s'inscrit dans un registre des traitements. Ce n'est pas du flou juridique : le cadre existe et nous l'appliquons.

Ce n'est pas du spam grand public, ni du cold email B2C. Ce n'est pas non plus de l'emailing marketing au sens Mailchimp : pas d'envoi de masse à une base opt-in existante, pas de newsletter, pas de nurturing. Un cold email part d'une boîte qui ressemble à une boîte humaine, vers une personne précise, avec un motif précis. La confusion entre les deux est la première cause de domaines cramés.

## Pour qui c'est fait

Le cold email a du sens pour les éditeurs SaaS, les ESN, les scale-up et les cabinets de conseil dont le panier moyen annuel se compte en plusieurs milliers d'euros par client et dont la cible est identifiable par email via LinkedIn et l'enrichissement de données. C'est particulièrement adapté au [cold email pour éditeurs SaaS](/secteurs/saas) qui cherchent un canal sortant scalable en complément de l'inbound.

Ce n'est pas fait pour le B2C, pour les secteurs sans email professionnel exploitable, ni pour les offres à très petit ticket où le coût d'acquisition par email dépasse la marge. Si votre cible ne se trouve pas dans une base enrichissable, ou si votre panier moyen est trop faible, nous vous le dirons au premier appel plutôt que de vous vendre une campagne qui ne sera jamais rentable.

## Notre approche du copy cold email

Les templates gratuits qui circulaient il y a trois ans ne marchent plus. Ils sont saturés dans toutes les boîtes, repérés par les filtres anti-spam, et désormais reproduits à l'identique par les modèles de langage. Un « J'espère que vous allez bien » suivi d'un pitch générique se supprime en une seconde.

Nos séquences reposent sur trois ingrédients. Un opener spécifique, ancré dans une observation réelle sur le prospect ou son entreprise, pas une formule d'introduction. Une offre lisible, qui dit ce que vous faites et pour qui, sans superlatifs. Et un appel à l'action à faible friction, qui propose un créneau ou une question fermée plutôt qu'un engagement lourd.

La personnalisation se fait à l'échelle via des variables enrichies et une couche d'intelligence artificielle qui lit la page d'accueil du prospect pour en extraire un angle. Concrètement, on remplace « J'espère que vous allez bien » par une phrase du type « En regardant votre page produit, j'ai vu que vous veniez de lancer telle fonctionnalité ». La différence de taux de réponse entre les deux ouvertures n'est pas marginale, elle est structurelle.

## La délivrabilité : la vraie bataille

Le copy ne sert à rien si l'email n'arrive pas. La délivrabilité est la partie la moins visible et la plus déterminante du métier. Voici les quatre piliers que nous montons pour chaque client, dans l'ordre.

<!-- STEPS
1. Authentification SPF, DKIM, DMARC — Fondation — Trois enregistrements DNS qui prouvent aux serveurs Gmail, Outlook et Yahoo que vos emails sont légitimes. SPF autorise vos serveurs d'envoi, DKIM signe cryptographiquement chaque message, DMARC dicte quoi faire en cas d'échec. Non négociable : sans ces trois enregistrements, un email part directement en spam.
2. Domaines secondaires dédiés — Isolation — On ne prospecte jamais depuis votre domaine principal. On monte des domaines secondaires proches (par exemple hello-votremarque.com) réservés à la prospection. Si l'un se dégrade, on le remplace sans jamais toucher à la réputation de votre domaine business.
3. Warm-up de 4 à 6 semaines — Montée en réputation — Chaque nouvelle boîte envoie d'abord un tout petit volume, qui augmente progressivement sur plusieurs semaines, pour construire une réputation d'expéditeur avant le moindre envoi commercial. Une boîte neuve qui envoie une campagne dès le premier jour est classée spam immédiatement.
4. Monitoring quotidien — Surveillance — On suit la réputation via Google Postmaster, MXToolbox et les taux d'ouverture réels. À la moindre dégradation, on isole la boîte ou le domaine concerné, on baisse le volume et on relance un warm-up. Aucun envoi n'est fait sur un domaine à réputation dégradée.
-->

Une règle en découle, que certaines agences refusent d'admettre : le volume par boîte est plafonné. On envoie entre 30 et 50 emails par jour et par boîte, jamais les 500 promis par certains outils. Pour atteindre 300 à 400 envois par jour sur un client, on ouvre dix à quinze boîtes réparties sur plusieurs domaines. C'est plus lent à monter, et c'est la seule façon de tenir dans la durée.

## La stack outils qu'on utilise, et pourquoi

Nous envoyons par défaut avec Instantly, qui offre le meilleur compromis entre délivrabilité, gestion multi-boîtes et pilotage. L'infrastructure de boîtes repose sur Google Workspace et Zapmail. L'enrichissement des adresses passe par Icypeas et Dropcontact, les enrichissements sur mesure par Clay, et la vérification finale par UseBouncer avant tout envoi.

Nous avons évalué les alternatives. Lemlist est solide sur le multicanal et le nurturing, mais surcoûte pour du cold pur. Woodpecker reste correct mais a pris du retard côté délivrabilité. Dans tous les cas, un principe ne bouge pas : les outils sont refacturés au coût réel, sans marge cachée. Vous payez Instantly, Icypeas et les autres à leur prix, nous facturons notre travail.

## Structure d'une séquence qui convertit

Une séquence type compte quatre touches réparties sur une douzaine de jours : un email initial, deux relances qui apportent chacune un angle nouveau, et un dernier message de clôture qui laisse la porte ouverte. L'objet est court et va droit au sujet, sans fausse familiarité du type « Hello ». Le premier email ne porte pas de pixel de tracking, dont la présence dégrade la délivrabilité. Et chaque variante tourne en plusieurs versions pour préserver l'unicité des messages aux yeux des filtres.

Cette mécanique est adaptée à chaque cible. Elle se pilote selon [la méthode Agence Simple](/methode), la même trame de cadrage, de test et d'itération que sur les autres canaux.

## Ce qui est inclus dans le forfait cold email

<!-- PANEL INCLUS
- La configuration complète de l'infrastructure : domaines secondaires, enregistrements DNS, boîtes mail, warm-up. Vous ne touchez à rien de technique.
- L'écriture des séquences, en deux à trois variantes A/B, relues et validées par vos soins avant tout envoi.
- Le sourcing de la base cible, via nos spécialistes de list-building et Sales Navigator, avec vérification des adresses.
- L'envoi et le pilotage quotidien : rotation des boîtes, suivi de la délivrabilité, arbitrages sur les angles.
- La qualification des réponses par un humain, qui transforme chaque réponse positive en rendez-vous posé dans votre agenda.
- Le reporting mensuel avec les vrais chiffres et l'accès direct au fondateur, Kenzy, sur Slack ou WhatsApp.
-->

## Ce qui n'est PAS inclus

<!-- PANEL EXCLUS
- Pas de vente derrière le rendez-vous. On ouvre la conversation, vous menez le closing. Si vous voulez qu'une équipe prenne aussi en charge la relation, regardez le SDR externalisé en marque blanche.
- Pas d'email marketing : ni newsletter, ni séquence de nurturing inbound, ni relance sur base opt-in existante.
- Pas de gestion de votre boîte email principale ni de vos campagnes internes.
- Pas de récupération d'un domaine déjà cramé. On repart systématiquement sur des domaines secondaires vierges, c'est plus sûr et plus rapide.
-->

Sur la vente proprement dite, notre parti pris est assumé : personne ne connaît votre produit mieux que vous. Si vous cherchez un cran de plus sur la dimension équipe, il est décrit dans notre offre de [SDR externalisé en marque blanche](/services/sdr-externalise).

## Ce que ça donne : nos résultats en cold email

Les chiffres ci-dessous sont validés par les clients concernés avant publication. Ce sont des campagnes réelles, datées, pas des moyennes de plaquette.

<!-- STATS
- 41 | RDV qualifiés en 5 semaines | Happycolis. Une cible e-commerce et logistique, autour de 7 % de taux de réponse, un angle unique testé puis décliné semaine après semaine.
- 151 | RDV qualifiés générés | Invent-App. Plus de 90 % de rendez-vous jugés qualifiés par le client. Le déroulé est dans le cas client [151 RDV qualifiés via cold email pour Invent-App](/cas-clients/invent-app).
- 14 % | de taux de réponse | Dunforce, sur une cible réputée difficile, les bailleurs sociaux. Le détail est dans le cas client [14 % de taux de réponse pour Dunforce](/cas-clients/dunforce).
-->

Pour situer ces chiffres : sur une cible B2B bien configurée, on vise un taux d'ouverture entre 40 et 60 %, un taux de réponse entre 3 et 10 %, et un taux de rendez-vous entre 2 et 6 %. En dessous, il y a un problème de délivrabilité, de copy ou de ciblage. Nettement au dessus, il y a souvent un doute sur la méthode de mesure. Nous préférons annoncer des fourchettes que nous tenons.

## Combien ça coûte

Le cold email chez Agence Simple est un forfait mensuel, sans engagement de durée et sans marge sur les outils. Le montant dépend du volume visé et de la complexité de la cible : le détail de la structure est sur la page [nos tarifs cold email](/tarifs).

Rapporté à un SDR interne, salaire chargé plus outils plus management plus les mois de montée en régime, un forfait démarre plus vite et se résilie en un mois si le compte n'y est pas. Les deux modèles se défendent selon votre stade, et nous avons posé les critères dans notre comparatif [SDR interne vs agence externalisée](/comparatifs/sdr-interne-vs-agence-externalisee).

Si vous hésitez entre les canaux, le [comparatif cold email vs LinkedIn outreach](/comparatifs/cold-email-vs-linkedin-outreach) explique lequel privilégier selon votre cible, et la [prospection LinkedIn en complément](/services/linkedin-outreach) se combine souvent avec le cold email dans une même campagne. Le format complet, avec les deux canaux orchestrés, est décrit dans [notre offre de prospection B2B clé en main](/).

Enfin, comme sur toutes nos missions, la garantie minimum vital s'applique : un nombre de rendez-vous engagé par mois, et une prolongation gratuite si l'objectif n'est pas tenu sur trois mois.

## Questions fréquentes

<!-- FAQ (8 Q/R, texte identique visible + schema) -->

## Prendre rendez-vous

Le premier rendez-vous est un diagnostic gratuit de 30 minutes avec Kenzy. On regarde votre cible, votre panier moyen et votre stade, et on vous dit franchement si le cold email est le bon canal pour vous. Si la réponse est non, vous repartez avec les raisons. Si c'est oui, vous recevez une proposition avec un engagement chiffré de rendez-vous.

<!-- NOTES INTEGRATION

## FAQ (8 Q/R, texte identique visible DOM + schema FAQPage)
Q1. Est-ce que le cold email B2B est légal en France et en Europe ?
R. Oui, sous conditions strictes. Le RGPD autorise l'envoi de cold emails à des professionnels sur la base de l'intérêt légitime (article 6.1.f), à condition que le message soit en rapport direct avec la fonction de la personne contactée, qu'un lien de désinscription soit présent, et qu'un registre des traitements soit tenu. On applique ces règles sur chaque campagne.

Q2. Pourquoi utiliser un domaine secondaire au lieu de mon domaine principal ?
R. Le cold email détériore mécaniquement la réputation du domaine expéditeur (signalements spam, bounces, désinscriptions). Utiliser un domaine secondaire dédié, par exemple hello-agencesimple.com, isole votre domaine principal de tout risque. Si le domaine secondaire se dégrade, on en rachète un nouveau sans impact sur vos emails business.

Q3. Quels sont les taux d'ouverture et de réponse à attendre ?
R. Sur du B2B ciblé et bien configuré : taux d'ouverture entre 40 et 60 %, taux de réponse entre 3 et 10 %, taux de rendez-vous entre 2 et 6 %. En dessous, il y a un problème de délivrabilité, de copy ou de ciblage. Nettement au dessus, souvent un doute sur la méthode de mesure.

Q4. C'est quoi le warm-up et pourquoi c'est nécessaire ?
R. Le warm-up consiste à envoyer progressivement des emails depuis une nouvelle boîte, un petit volume au départ qui augmente sur 4 à 6 semaines, pour construire une réputation d'expéditeur légitime auprès de Gmail, Outlook et Yahoo. Sans warm-up, une nouvelle boîte est classée en spam dès la première campagne.

Q5. Combien d'emails par jour par boîte ?
R. Maximum 30 à 50 par jour et par boîte, pour rester dans les seuils de délivrabilité de Google et Microsoft. Certaines agences promettent 500 par boîte : c'est faux, elles brûlent leurs domaines en deux semaines. Sur un client, on ouvre 10 à 15 boîtes pour atteindre 300 à 400 envois par jour.

Q6. Utilisez-vous Lemlist, Instantly, Woodpecker ?
R. On utilise Instantly par défaut, pour son meilleur ratio délivrabilité, gestion multi-boîtes et prix. Lemlist est bon sur le nurturing multicanal mais surcoûte pour du cold pur. Woodpecker reste solide mais a pris du retard côté délivrabilité. On refacture l'outil au coût réel, sans marge.

Q7. Combien de temps entre le brief et les premiers emails envoyés ?
R. Entre deux et quatre semaines. Semaine 1 : cadrage et sourcing de la base. Semaine 2 : configuration des domaines, boîtes et copy. Semaines 3 à 6 : warm-up en parallèle du cadrage final. Les envois commerciaux démarrent dès que le warm-up est prêt.

Q8. Que se passe-t-il si mes emails finissent en spam ?
R. On surveille la délivrabilité chaque jour via Google Postmaster, MXToolbox et les taux d'ouverture. En cas de dégradation, on isole le domaine ou la boîte concernée, on réduit le volume et on relance un warm-up. Aucun envoi n'est fait sur un domaine à réputation dégradée. Une détérioration passagère fait partie du métier, la casse permanente non.

## Anchor TOC (8)
Définition #definition · Pour qui #pour-qui · Le copy #copy · Délivrabilité #delivrabilite · La stack #stack · Ce qui est inclus #inclus · Résultats #resultats · Combien ça coûte #cout

## Maillage interne posé (prospection-b2b → /)
- / : « notre offre de prospection B2B clé en main » (section Coût)
- /services/linkedin-outreach : « prospection LinkedIn en complément » (section Coût) — service lié, 1x
- /services/sdr-externalise : « SDR externalisé en marque blanche » (section Exclus) — service lié, 1x
- /secteurs/saas : « cold email pour éditeurs SaaS » (section Pour qui)
- /comparatifs/cold-email-vs-linkedin-outreach : « comparatif cold email vs LinkedIn outreach » (section Coût)
- /comparatifs/sdr-interne-vs-agence-externalisee : « SDR interne vs agence externalisée » (section Coût)
- /cas-clients/invent-app : « 151 RDV qualifiés via cold email pour Invent-App » (section Résultats)
- /cas-clients/dunforce : « 14 % de taux de réponse pour Dunforce » (section Résultats)
- /methode : « la méthode Agence Simple » (section Séquence)
- /tarifs : « nos tarifs cold email » (section Coût)

## Schemas JSON-LD
1. Service : serviceType « Cold Email Outreach », provider Organization.
2. FAQPage : 8 Q/R ci-dessus, texte identique au DOM.
3. BreadcrumbList : Accueil > Services > Cold email (via Breadcrumb).
PAS de VideoObject, PAS de HowTo (risque de sanction Google 2024).

## Déviations vs brief
- Tous les montants en euros retirés (ACV, forfait 2K-5K, section coût) conformément à l'arbitrage Kenzy 2026-07-03 : prix renvoyé vers /tarifs, seuils rendus qualitatifs.
- Longueur visée ~2200 mots (le brief proposait 2400-2800) pour rester dense sans meubler, cohérent avec la consigne phase 3.
- Délivrabilité présentée en 4 cards STEPS plutôt qu'en HowTo schema (évite la sanction HowTo).
-->
