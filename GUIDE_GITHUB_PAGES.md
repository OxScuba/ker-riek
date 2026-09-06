# Mise en ligne avec GitHub Pages

Ces instructions partent du principe que le dossier décompressé est déjà ouvert
dans Visual Studio Code.

## 1. Vérifier le site localement

Ouvrir **Terminal > Nouveau terminal**, puis exécuter chaque commande séparément :

```bash
npm install
```

```bash
npm run dev
```

Le terminal affiche une adresse locale, généralement `http://localhost:5173/`.
L’ouvrir dans le navigateur. Pour arrêter le serveur : `Ctrl+C`.

Vérifier ensuite la version de production :

```bash
npm run build
```

## 2. Créer le premier commit local

```bash
git init -b main
```

```bash
git add -A
```

```bash
git status
```

Vérifier que `node_modules` et `dist` ne figurent pas parmi les fichiers ajoutés,
puis créer le commit :

```bash
git commit -m "Initial commit: create Kêr Riek website"
```

## 3. Créer le dépôt GitHub

La connexion GitHub de Visual Studio Code ne signifie pas nécessairement que la
commande `gh` est installée et connectée. Deux méthodes sont possibles.

### Méthode A — depuis Visual Studio Code

1. Ouvrir l’onglet **Contrôle de code source**.
2. Cliquer sur **Publier la branche** ou **Publish to GitHub**.
3. Choisir le nom du dépôt `ker-riek`.
4. Choisir **Public** si le site GitHub Pages doit être accessible à tous.

Visual Studio Code crée le dépôt, ajoute `origin` et envoie la branche `main`.

### Méthode B — entièrement dans le terminal avec GitHub CLI

Vérifier que GitHub CLI est disponible et connecté :

```bash
gh --version
```

```bash
gh auth status
```

Puis créer le dépôt public et pousser le premier commit :

```bash
gh repo create ker-riek --public --source=. --remote=origin --push
```

Si le dépôt doit d’abord rester privé, remplacer `--public` par `--private`.
La disponibilité de GitHub Pages pour un dépôt privé dépend du forfait GitHub.

### Méthode C — dépôt créé sur github.com

Créer sur GitHub un dépôt **vide**, sans README, sans licence et sans `.gitignore`,
puis exécuter :

```bash
git remote add origin https://github.com/OxScuba/ker-riek.git
```

```bash
git push -u origin main
```

Adapter `ker-riek` uniquement si un autre nom de dépôt a été choisi.

## 4. Activer GitHub Pages

Le workflow de déploiement se trouve déjà dans `.github/workflows/deploy.yml`.

1. Ouvrir le dépôt sur GitHub.
2. Aller dans **Settings > Pages**.
3. Dans **Build and deployment**, choisir **GitHub Actions** comme source.
4. Ouvrir l’onglet **Actions** et attendre la réussite du workflow
   `Deploy GitHub Pages`.

L’adresse finale aura normalement cette forme :

```text
https://oxscuba.github.io/ker-riek/
```

GitHub affiche l’adresse exacte dans **Settings > Pages**.

## 5. Envoyer les changements suivants

Après chaque modification :

```bash
npm run build
```

```bash
git add -A
```

```bash
git commit -m "Describe the change"
```

```bash
git push
```

Chaque `git push` sur `main` relance automatiquement la publication.

## 6. Connecter la réservation

Dans `src/site.config.ts`, remplacer :

```ts
bookingUrl: "",
```

par le lien public Cal.com ou Google Agenda, par exemple :

```ts
bookingUrl: "https://cal.com/votre-identifiant/premier-echange",
```

Ne pas utiliser cette adresse d’exemple telle quelle.
