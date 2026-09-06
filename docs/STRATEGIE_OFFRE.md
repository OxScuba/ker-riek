# Kêr Riek — stratégie d’offre et cadre de lancement

Dernière mise à jour : 6 septembre 2026.

Ce document est un dossier de travail. Il ne remplace pas une consultation juridique, fiscale, comptable ou assurantielle.

## 1. Positionnement recommandé

**Promesse :** rendre un usage concret de Bitcoin compréhensible, opérationnel et récupérable, sans jamais prendre le contrôle des fonds du client.

**Territoire :** Saint-Brieuc et Bretagne pour les interventions sur place ; France entière à distance.

**Différenciation :**

- Bitcoin uniquement, sans trading ni catalogue de jetons ;
- pédagogie et accompagnement pratique, pas simple installation d’une application ;
- autonomie vérifiée par une transaction et, lorsque c’est pertinent, un exercice de récupération ;
- confidentialité stricte : aucune seed, passphrase, clé privée ou code PIN communiqué ;
- architecture proportionnée : ne pas vendre du multisig à quelqu’un qui sera plus exposé à la perte par la complexité ;
- documentation remise au client pour éviter de créer une dépendance au consultant.

La formulation publique doit préférer **accompagnement Bitcoin**, **formation**, **assistance technique**, **intégration de paiement** et **sécurité opérationnelle** à « conseil en investissement » ou « conseiller en crypto-actifs ».

## 2. Point juridique critique : MiCA

Depuis le 1er juillet 2026, le régime transitoire français est terminé. L’AMF indique que la fourniture du service de conseil sur crypto-actifs est soumise à une autorisation obligatoire en qualité de PSCA. Ce conseil couvre le fait d’offrir, de donner ou d’accepter de donner une recommandation personnalisée portant sur une ou plusieurs transactions relatives à des crypto-actifs ou sur l’utilisation d’un service sur crypto-actifs.

Sources principales :

- [AMF — Conseil sur crypto-actifs : mise à jour de la doctrine](https://www.amf-france.org/fr/actualites-publications/actualites/conseil-sur-crypto-actifs-lamf-met-jour-sa-doctrine-concernant-les-cif)
- [AMF — Dossier MiCA](https://www.amf-france.org/fr/actualites-publications/dossiers-thematiques/mica)
- [ACPR — Je propose des services sur crypto-actifs](https://acpr.banque-france.fr/fr/professionnels/lacpr-vous-accompagne/parcours-fintech/contenus-pedagogiques/de-quel-statut-releve-mon-activite/je-propose-des-services-sur-crypto-actifs)
- [Règlement (UE) 2023/1114, MiCA](https://eur-lex.europa.eu/eli/reg/2023/1114/oj)

### Zone verte à structurer

- formation générale au fonctionnement et aux risques de Bitcoin ;
- apprentissage des transactions, frais, adresses, Lightning et bonnes pratiques ;
- assistance technique à l’installation et à la configuration d’un wallet choisi par le client ;
- formation à l’autogarde, aux sauvegardes et à la récupération ;
- intégration technique d’une solution de paiement chez un commerçant ;
- conception organisationnelle d’un circuit de validation et documentation interne ;
- présentation factuelle et non personnalisée de plusieurs solutions, de leurs fonctions et de leurs risques ;
- accompagnement d’un client qui exécute lui-même toutes les opérations et conserve seul ses accès.

### Zone orange à faire valider avant commercialisation

- dire à une personne ou une entreprise d’acheter du bitcoin ;
- recommander un montant, un rythme d’achat ou un pourcentage de trésorerie ;
- recommander personnellement une transaction ou une plateforme précise en fonction de la situation du client ;
- aider à arbitrer achat, conservation ou vente sur la base de sa situation financière ;
- facturer un « audit d’allocation de trésorerie Bitcoin » ;
- être rémunéré par affiliation lorsque l’accompagnement personnalisé conduit au choix du service affilié.

### Zone rouge à exclure

- recevoir ou transmettre un ordre pour le compte du client ;
- cliquer, acheter, vendre ou transférer à sa place ;
- prendre possession de ses bitcoins, clés, mots de récupération, passphrases ou identifiants ;
- conserver une copie, même « de secours », d’un secret client ;
- promettre un rendement, minimiser la volatilité ou présenter une décision comme adaptée à son patrimoine ;
- exercer un service réglementé sans l’autorisation requise.

Un avertissement sur le site ne neutralise pas une prestation qui serait, dans les faits, réglementée. Le contrat, les scripts de rendez-vous, les livrables, la facturation et la pratique réelle doivent tous respecter le même périmètre. Avant la première vente, faire relire l’offre et les CGV par un avocat connaissant MiCA/PSCA.

## 3. Catalogue de prestations MVP

### A. Commerce prêt à encaisser

**Public :** boulangerie, fleuriste, café, restaurant, artisan, profession indépendante.

**Livrables :**

1. entretien sur le volume, l’équipe, le matériel, la conservation ou conversion souhaitée et les besoins comptables ;
2. configuration d’un compte commerçant et d’un point de vente ;
3. wallet de réception ou destination bancaire selon la solution choisie ;
4. deux paiements tests : Lightning et, si utile, on-chain ;
5. procédure d’encaissement, de contrôle et de remboursement ;
6. export ou journal de transactions à transmettre à l’expert-comptable ;
7. mini-formation de l’équipe ;
8. fiche incident : téléphone perdu, application indisponible, facture expirée, paiement non reconnu ;
9. référencement sur BTC Map si le commerçant le souhaite ;
10. autocollant ou chevalet « Bitcoin accepté ici ».

**Solutions :**

- [Swiss Bitcoin Pay](https://swiss-bitcoin-pay.ch/) pour démarrer vite, sans matériel dédié, avec paiements on-chain et Lightning ; vérifier ses frais, conditions, conversion et exigences de vérification au jour de l’installation ;
- [BTCPay Server](https://btcpayserver.org/) pour une installation plus souveraine, personnalisable, multi-utilisateurs ou intégrée au commerce en ligne ; demande hébergement, maintenance, sauvegardes et gestion Lightning ;
- wallet Lightning direct pour un usage très simple et ponctuel, en acceptant des fonctions de reporting et de gestion d’équipe plus limitées.

La documentation officielle de BTCPay Server confirme les intégrations e-commerce et point de vente, le support des hardware wallets via BTCPay Vault et, depuis la version 2.1, un flux multisig coordonné :

- [BTCPay Server — Guide](https://docs.btcpayserver.org/Guide/)
- [BTCPay Server — Hardware Wallet Integration](https://docs.btcpayserver.org/HardwareWalletIntegration/)
- [BTCPay Server — Multisig](https://docs.btcpayserver.org/Multisig/)

### B. Autonomie Bitcoin — particulier

**Livrables :** wallet adapté à l’usage, réception/envoi, compréhension des frais, hardware wallet si pertinent, sauvegarde physique, passphrase seulement si elle apporte un bénéfice net, test de récupération, fiche personnelle sans secret.

**Règle de fin de mission :** le client doit savoir vérifier une adresse sur son appareil, recevoir, préparer un envoi, distinguer wallet et sauvegarde, reconnaître les principales escroqueries et expliquer son propre plan de récupération.

### C. Sécurité et continuité — entreprise ou patrimoine significatif

**Livrables :** cartographie des risques, rôles, seuil de signature, choix de matériels, distribution géographique, sauvegarde du descripteur/politique de wallet, procédure PSBT, limites de montant, départ ou indisponibilité d’un signataire, test de récupération et calendrier de contrôle.

Une configuration 2-sur-3 est un point de départ fréquent, pas une réponse automatique. Le dispositif doit résister à la perte d’un élément sans rendre la récupération incompréhensible. Chaque seed et éventuelle passphrase doit être sauvegardée séparément ; les chemins de dérivation, empreintes et informations publiques nécessaires à la reconstruction du wallet doivent être préservés. La documentation officielle COLDCARD rappelle notamment qu’une passphrase perdue ou mal saisie est irrécupérable et qu’un multisig exige aussi la sauvegarde complète de sa politique :

- [COLDCARD — BIP39 passphrase](https://coldcard.com/docs/passphrase/)
- [COLDCARD — Multisig](https://coldcard.com/docs/multisig/)

**Veille obligatoire :** vérifier les avis de sécurité et firmwares juste avant chaque intervention. En 2026, Bull Bitcoin a par exemple publié un avertissement critique concernant plusieurs modèles COLDCARD ; aucun matériel ne doit être recommandé sur réputation historique seulement.

### D. Formation sur mesure

Modules possibles : comprendre Bitcoin, utiliser un wallet, Lightning, frais et mempool, UTXO, confidentialité, autogarde, sauvegardes, hardware wallets, multisig, paiement commerçant, politique interne.

### E. Prise en main d’une plateforme choisie par le client

Le client crée son compte, fournit lui-même les pièces, saisit ses identifiants, initie les virements et confirme les retraits. Le consultant explique l’interface et vérifie avec lui l’adresse sur son propre appareil, sans agir en son nom.

Bull Bitcoin se présente comme une plateforme Bitcoin non-custodiale disponible pour particuliers et entreprises, avec retrait vers le wallet du client et Lightning. La société annonce détenir depuis le 1er juillet 2026 une licence MiCA française utilisable dans l’EEE. Toujours vérifier la liste blanche AMF au moment de la prestation :

- [Bull Bitcoin — site et fonctionnalités](https://www.bullbitcoin.com/)
- [AMF — listes blanches](https://www.amf-france.org/fr/espace-epargnants/proteger-son-epargne/listes-blanches)

Tout lien affilié doit être identifié comme tel avant le clic. L’affiliation ne doit pas déformer la comparaison ni laisser croire que la plateforme est la seule option.

### F. Trésorerie : périmètre initial prudent

Commercialiser d’abord un **atelier de compréhension et de cadrage opérationnel**, pas un conseil d’allocation. Il peut couvrir : volatilité, liquidité, conservation, gouvernance, comptabilité, continuité, fournisseurs autorisés et scénarios techniques. Le montant, le calendrier et la décision d’achat doivent rester hors prestation, ou être traités par un PSCA autorisé et les professionnels juridiques/comptables de l’entreprise.

## 4. Comptabilité et fiscalité du commerçant

Le paiement en bitcoin ne fait pas disparaître les obligations habituelles liées à la vente. Le commerce doit conserver un enregistrement fiable de la date, du montant facturé en euros, du montant reçu en bitcoin, du taux utilisé, des frais, de l’identifiant de paiement/transaction et du traitement ultérieur.

Le règlement ANC n° 2026-01 du 9 janvier 2026, homologué par arrêté du 12 août 2026 publié le 3 septembre 2026, refond les règles françaises de comptabilisation des crypto-actifs. Il s’applique obligatoirement aux exercices ouverts à compter du 1er janvier 2027, avec application anticipée possible selon le texte. Il faut donc intégrer l’expert-comptable dès la conception du flux, et non après les premières ventes.

Sources :

- [ANC — règlements 2026-01 et 2026-02](https://www.anc.gouv.fr/reglements-anc-ndeg2026-01-et-anc-ndeg2026-02-du-9-janvier-2026)
- [Légifrance — arrêté d’homologation du 12 août 2026](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054791025)
- [BOFiP — base d’imposition et contre-valeur reçue](https://bofip.impots.gouv.fr/bofip/11971-PGP.html/identifiant%3DBOI-RES-TVA-000054-20210309)

Ne pas vendre de tenue comptable ou d’établissement de déclarations : l’Ordre des experts-comptables rappelle que la tenue, la révision et la surveillance de comptabilités pour des tiers relèvent de la prérogative de l’expert-comptable.

## 5. Protocole de sécurité des interventions

1. Le client achète lui-même le matériel auprès du fabricant ou d’un revendeur identifié.
2. Vérification de l’intégrité apparente, de la source du logiciel et du firmware disponible.
3. Aucun secret n’est généré devant une caméra ou un outil de partage d’écran.
4. Le client saisit seul PIN, seed et passphrase, hors champ du consultant.
5. Aucun secret n’est photographié, imprimé, envoyé, copié dans le presse-papiers ou stocké dans le cloud.
6. Les adresses de réception sont vérifiées sur l’écran de l’appareil de signature.
7. Premier dépôt de montant faible.
8. Réception et envoi test.
9. Récupération test à partir des sauvegardes avant dépôt significatif.
10. Document final ne contenant que les éléments publics et procédures non secrètes.
11. Le consultant efface les données temporaires non nécessaires et ne conserve aucun xpub sans nécessité contractuelle explicite ; un xpub révèle l’historique et les soldes du wallet.
12. Toute intervention à distance s’arrête si la confidentialité des secrets ne peut pas être garantie.

## 6. Parcours commercial conseillé

### Acquisition locale

- cibler 30 commerces de Saint-Brieuc où le décideur est accessible ;
- proposer une démonstration de trois minutes avec un vrai paiement Lightning de faible montant ;
- laisser une fiche une page : fonctionnement, coûts à vérifier, traitement comptable, contact ;
- offrir un diagnostic court, mais facturer l’installation et la formation ;
- demander l’autorisation de publier une étude de cas factuelle après quatre semaines d’usage ;
- référencer le commerce sur BTC Map et organiser ponctuellement un « spend sats » local ;
- créer des partenariats avec un expert-comptable ouvert au sujet et un avocat MiCA/fintech.

### Autorité et contenu

Le statut de référence viendra davantage de preuves répétées que du mot « expert » :

- une courte vidéo hebdomadaire montrant une manipulation précise ;
- un article mensuel durable : sauvegarde, multisig, encaissement, erreurs courantes ;
- une checklist publique « Accepter Bitcoin dans son commerce » ;
- des ateliers locaux pour commerçants et particuliers ;
- des études de cas avec chiffres honnêtes : nombre de paiements, temps de formation, incidents, correction ;
- une page publique « méthode et limites » mise à jour avec la veille sécurité/réglementaire.

## 7. Produits à lancer dans l’ordre

1. **Diagnostic découverte** — qualification du besoin, sans recommandation d’investissement.
2. **Commerce prêt à encaisser** — offre la plus démontrable et la plus facile à prospecter localement.
3. **Autonomie Bitcoin** — particuliers, wallet et récupération.
4. **Sécurité avancée** — après formalisation d’un protocole, d’une RC Pro adaptée et de cas pratiques documentés.
5. **Multisig d’organisation** — uniquement avec contrat, livrables et procédure de contrôle rigoureux.
6. **Trésorerie** — après avis juridique ; idéalement en partenariat avec un PSCA autorisé et un expert-comptable.

## 8. Éléments indispensables avant publication commerciale

- nom commercial définitif ;
- identité de l’éditeur, adresse professionnelle, SIREN/SIRET et hébergeur dans les mentions légales ;
- adresse de contact dédiée ;
- lien Cal.com ou Google Agenda ;
- statut d’activité et facturation ;
- CGV B2C/B2B et information sur le droit de rétractation lorsque applicable ;
- politique de confidentialité minimale pour les données de réservation ;
- assurance RC Pro couvrant conseil informatique, formation et risque cyber selon le périmètre réel ;
- validation juridique écrite de la frontière MiCA/PSCA ;
- déclaration visible de toute affiliation Bull Bitcoin ;
- grille tarifaire et politique de déplacement ;
- procédure d’incident et de confidentialité signée.

## 9. Choix du calendrier

**Cal.com** est le meilleur premier choix pour ce site : lien de réservation simple, intégration possible, synchronisation avec un agenda existant, questions de qualification et image plus indépendante. Créer un type de rendez-vous « Premier échange Bitcoin — 30 min » avec : particulier/commerce/entreprise, besoin principal, sur place/à distance et niveau actuel. Ne demander aucune information sur les montants détenus, seeds, adresses ou identifiants.

Le site est déjà prêt à recevoir le lien dans `src/site.config.ts`.
