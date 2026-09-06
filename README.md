<div align="center">

<img src="public/assets/images/logo-horizontal.webp" width="460" alt="Kêr Riek" />

### Accepter, utiliser et sécuriser Bitcoin

**Un accompagnement pratique et indépendant pour les commerçants, les entreprises et les particuliers.**

![Bitcoin uniquement](https://img.shields.io/badge/Bitcoin-uniquement-F7931A?style=flat-square&logo=bitcoin&logoColor=white)
![React](https://img.shields.io/badge/React-TypeScript-3178C6?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-site_statique-646CFF?style=flat-square&logo=vite&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-prêt-171515?style=flat-square&logo=github)

[Ouvrir le site](https://oxscuba.github.io/ker-riek/)
·
[Réserver un premier échange](https://cal.com/scuba-wizard/ker-reik-premier-echange)
·
[Découvrir les accompagnements](#-les-accompagnements)
·
[Lancer le projet](#-développement-local)

</div>

---

> Vos clés restent entre vos mains. Chaque geste est compris, effectué et testé avec vous.

## 🧭 Le projet

**Kêr Riek** est le site vitrine d’une activité d’accompagnement consacrée aux
usages concrets de Bitcoin.

Le projet s’adresse aux personnes et aux organisations qui souhaitent accepter
un paiement, effectuer leurs premières transactions, prendre en main un wallet
ou construire une méthode de conservation adaptée à leur situation.

Le nom breton **Kêr Riek** peut évoquer un « lieu souverain » ou un « domaine
souverain » : `kêr` désigne un lieu habité, une cité ou un domaine, tandis que
`riek` signifie « souverain ». La marque est implantée à Saint-Brieuc et propose
des accompagnements en Bretagne ainsi qu’à distance partout en France.

## 🧰 Les accompagnements

Le site présente six parcours principaux :

- **paiement commerçant** : mise en place et test d’un encaissement Bitcoin,
  notamment avec Lightning ou une solution comme Swiss Bitcoin Pay ;
- **autogarde** : création et prise en main d’un wallet, sauvegardes et exercice
  de récupération ;
- **sécurité avancée** : hardware wallet, passphrase ou multisig lorsque la
  complexité supplémentaire est réellement justifiée ;
- **formation Bitcoin** : adresses, transactions, frais, Lightning, UTXO et
  bonnes pratiques de confidentialité ;
- **prise en main d’une plateforme** : compréhension de l’interface et retrait
  vers le wallet du client, sans agir à sa place ;
- **cadrage d’entreprise** : compréhension des risques, des rôles et des besoins
  techniques, sans recommandation personnalisée d’allocation.

## 🔐 Principes de sécurité

L’accompagnement repose sur des limites simples et vérifiables :

- les fonds du client ne transitent jamais par l’accompagnateur ;
- aucune seed, passphrase, clé privée ou code PIN n’est demandé ou conservé ;
- le client réalise lui-même toutes les manipulations sensibles ;
- une configuration est testée avec de petits montants avant tout usage
  significatif ;
- la complexité reste proportionnée au risque et à la capacité de récupération ;
- la documentation finale ne contient aucun secret.

## ✨ Fonctionnement du site

- présentation responsive adaptée aux ordinateurs, tablettes et mobiles ;
- identité visuelle complète avec logo, emblème, illustrations et image de partage ;
- navigation sur une seule page ;
- catalogue synthétique des accompagnements ;
- parcours spécial pour les commerçants ;
- méthode d’intervention et engagements de sécurité ;
- FAQ et cadre d’intervention ;
- bouton de réservation configurable ;
- déploiement automatisé sur GitHub Pages.

Tant qu’aucune adresse de réservation n’est renseignée, le bouton de contact
redirige vers le compte X public configuré dans le projet.

## 🚀 Développement local

### Prérequis

- Node.js 22 ou plus récent ;
- npm.

### Installer et lancer

```bash
npm install
npm run dev
```

Vite affiche l’adresse locale à ouvrir dans le navigateur.

### Vérifier la version de production

```bash
npm run build
npm run preview
```

Le site compilé est créé dans `dist/`.

## ⚙️ Configuration

Les informations destinées à être modifiées sont regroupées dans
[`src/site.config.ts`](src/site.config.ts) :

```ts
export const siteConfig = {
  brand: "Kêr Riek",
  bookingUrl: "https://cal.com/scuba-wizard/ker-reik-premier-echange",
  xUrl: "https://x.com/Scuba_Wizard",
  area: "Saint-Brieuc, Bretagne · accompagnement à distance partout en France",
};
```

Le lien public de réservation Cal.com est renseigné dans `bookingUrl`. Il peut
être remplacé par une autre adresse publique sans modifier le reste du site.
Ne jamais placer de clé d’API, de jeton ou d’identifiant privé dans ce fichier.

## 🌐 Déploiement GitHub Pages

Le workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
construit et publie automatiquement le site après chaque `push` sur la branche
`main`.

Dans les paramètres du dépôt GitHub :

1. ouvrir **Settings** puis **Pages** ;
2. sélectionner **GitHub Actions** dans **Build and deployment** ;
3. pousser un commit sur `main` ;
4. attendre la réussite du workflow **Deploy GitHub Pages**.

Le guide [`GUIDE_GITHUB_PAGES.md`](GUIDE_GITHUB_PAGES.md) détaille la création du
dépôt, le premier commit et les différentes méthodes de publication.

## 🗂️ Architecture

```text
.
├── .github/workflows/      déploiement GitHub Pages
├── public/                 identité visuelle, favicons et fichiers statiques
├── src/
│   ├── App.tsx             contenu et structure de la page
│   ├── main.tsx            point d’entrée React
│   ├── site.config.ts      marque, contact et réservation
│   └── styles.css          identité graphique et responsive
├── docs/                   documentation de cadrage
├── GUIDE_GITHUB_PAGES.md   création et publication du dépôt
├── IDENTITE_DE_MARQUE.md   principes de l’identité Kêr Riek
├── index.html              métadonnées et racine HTML
├── package.json
└── vite.config.ts
```

## 🛡️ Hygiène du dépôt public

Ce dépôt doit rester limité aux ressources publiables nécessaires au site et à
sa documentation :

- aucun mot de récupération, clé privée, passphrase ou descripteur de wallet ;
- aucun mot de passe, jeton d’accès, fichier `.env` ou accès d’administration ;
- aucune donnée personnelle de client, adresse Bitcoin ou historique de
  transaction ;
- aucune copie de document d’identité, facture ou dossier de rendez-vous ;
- aucun lien affilié sans indication explicite de sa nature.

Les dossiers `node_modules/`, `dist/` et les fichiers `.env` sont exclus par
`.gitignore`.

## ⚖️ Cadre et avertissement

Kêr Riek présente des prestations de formation, d’assistance technique et
d’intégration. Le site ne constitue ni un service de conservation de fonds, ni
un service d’exécution d’ordres, ni une recommandation personnalisée d’achat,
de vente ou d’allocation de crypto-actifs.

Les sujets juridiques, fiscaux, comptables et d’investissement doivent être
validés auprès de professionnels habilités. Les outils et services externes
mentionnés restent soumis à leurs propres conditions, frais et évolutions.

## ©️ Droits

La publication de ce dépôt rend son contenu consultable, mais n’accorde pas
automatiquement de droit de réutilisation. Sauf licence ajoutée ultérieurement,
les textes, l’identité de marque, les éléments graphiques et le code restent
protégés par les droits de leur auteur.

---

<div align="center">

**Comprendre. Faire. Savoir refaire.**

</div>
