---
theme: seriph
title: Back-end - TMDB Discovery App
duration: 2h
routerMode: hash
---

# TMDB Discovery App

## Back-end

---

<style>
.backend-showcase {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
}

.backend-media {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.backend-media img {
  display: block;
  width: auto;
  max-width: 100%;
  max-height: 50vh;
  object-fit: contain;
  border-radius: 1rem;
}

.backend-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  font-size: 1.05rem;
  line-height: 1.7;
}

.backend-copy h2 {
  margin: 0;
  font-size: 2rem;
}

.backend-copy p {
  margin: 0;
}

@media (max-width: 900px) {
  .backend-showcase {
    grid-template-columns: 1fr;
    min-height: auto;
  }
}
</style>

# Création du projet back-end

<div class="backend-showcase">
  <div class="backend-media">
    <img src="./assets/github-com-creation-projet.png" alt="Création du projet" />
  </div>

  <div class="backend-copy">
    <h2>Options de création du projet</h2>
    <p>Le projet back-end est créé avec les options suivantes :</p>
    <ul>
      <li>Nom du repository : themoviedb-discovery-app</li>
      <li>Visibility : Public</li>
      <li>Add a README file</li>
    </ul>
  </div>
</div>

---

# Installation du projet

TODO expliquer l'utilisation de CodeSpaces permettant de travailler dans un environnement de développement pré-configuré.

```shell

# Initialisation du projet Node.js avec les options par défaut
npm init -y

# Positionnement du projet en mode module pour utiliser les imports ES6
npm pkg set type=module
```

---

# Express.js

**Express.js** est un framework web pour Node.js qui facilite la création d'applications web et d'API. Il fournit des fonctionnalités robustes pour gérer les requêtes HTTP, les routes, les middlewares et bien plus encore. Nous allons l'utiliser pour exposer notre back-end sous forme d'API REST.

Pour plus d'informations sur Express.js, vous pouvez consulter la documentation officielle : [https://expressjs.com/fr/](https://expressjs.com/fr/)

```shell
# Installation d'express pour créer le serveur web
npm install express
```

Nous allons mettre en place un serveur web simple qui écoute sur le port 3000 et répond à une requête GET sur la route racine `/` avec un message "Hello World!".

---

# Express.js (suite)

Création du fichier `index.js` qui sera le point d'entrée de notre application back-end.

```javascript
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

Pour valider que le serveur fonctionne correctement lancer le serveur avec la commande suivante :

```shell
node index.js
```

Vous pouvez accéder à l'adresse [http://localhost:3000](http://localhost:3000). Vous devriez voir le message "Hello World!" s'afficher.

---

# Sauvegarde du projet sur GitHub

Nous avons une première version du projet back-end fonctionnelle. Il est temps de sauvegarder notre travail dans le dépôt GitHub.

---

# GIT - status

La commande `git status` permet de vérifier l'état du projet et de voir quels fichiers ont été modifiés, ajoutés ou supprimés depuis la dernière validation (commit).

Elle nous indique également si nous avons des fichiers non suivis par Git, c'est-à-dire des fichiers qui ne sont pas encore inclus dans le suivi de version.

```shell
# Vérification de l'état du projet
git status

```

Résultat attendu :

```shell
@alexandre-girard-maif ➜ /workspaces/themoviedb-discovery-app-demo (main) $ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        index.js
        node_modules/
        package-lock.json
        package.json
```

---

La commande `git status` nous indique que nous avons des fichiers non suivis par Git (index.js, node_modules/, package-lock.json, package.json). Nous allons les ajouter à l'index Git pour les inclure dans le prochain commit. Cependant, nous ne voulons pas inclure le dossier `node_modules/` dans notre dépôt Git, car il contient les dépendances installées et peut être recréé à partir du fichier `package.json`. Nous allons donc créer un fichier `.gitignore` pour exclure ce dossier.

```shell
# Création du fichier .gitignore pour exclure le dossier node_modules/
echo "node_modules/" > .gitignore
```

Résultat attendu :

```shell
@alexandre-girard-maif ➜ /workspaces/themoviedb-discovery-app-demo (main) $ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        index.js
        package-lock.json
        package.json

```

---

# GIT - add

La commande `git add` permet d'ajouter des fichiers à l'index Git, c'est-à-dire de les préparer pour le prochain commit. Nous allons ajouter tous les fichiers non suivis par Git, sauf le dossier `node_modules/` qui est exclu par le fichier `.gitignore`.

```shell
# Ajout de tous les fichiers non suivis par Git, sauf le dossier node_modules/
git add .

# Vérification de l'état du projet après l'ajout des fichiers à l'index Git
git status
```

Résultat attendu :

```shell
@alexandre-girard-maif ➜ /workspaces/themoviedb-discovery-app-demo (main) $ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   .gitignore
        new file:   index.js
        new file:   package-lock.json
        new file:   package.json
```

---

# GIT - commit

La commande `git commit` permet de valider les modifications ajoutées à l'index Git et de créer un nouveau commit dans l'historique du projet. Nous allons créer un commit avec un message décrivant les modifications apportées.

```shell
# Création d'un commit avec un message décrivant les modifications apportées
git commit -m "Initial commit - Création du projet avec Express.js et configuration de base"
```

Résultat attendu :

```shell
[main eba7d53] Initial commit - Création du projet avec Express.js et configuration de base
 4 files changed, 895 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 index.js
 create mode 100644 package-lock.json
 create mode 100644 package.json

```

---

# GIT - commit (suite)

Une vérification de l'état du projet avec la commande `git status` nous indique que nous n'avons plus de modifications en attente et que notre branche locale est à jour avec la branche distante `origin/main`.

```shell
# Vérification de l'état du projet après le commit
git status
```

Résultat attendu :

```shell
@alexandre-girard-maif ➜ /workspaces/themoviedb-discovery-app-demo (main) $ git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```

---

# GIT - push

La commande `git push` permet d'envoyer les commits locaux vers le dépôt distant sur GitHub. Nous allons pousser notre commit initial vers la branche principale `main` du dépôt distant.

```shell
# Envoi des commits locaux vers le dépôt distant sur GitHub
git push origin main
```

Résultat attendu :

```shell
@alexandre-girard-maif ➜ /workspaces/themoviedb-discovery-app-demo (main) $ git push origin main
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 2 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (6/6), 8.15 KiB | 8.15 MiB/s, done.
Total 6 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/but-sd/themoviedb-discovery-app-demo
   ea1932b..eba7d53  main -> main
```

---

# GIT - push (suite)

Une vérification de l'état du projet avec la commande `git status` nous indique que notre branche locale est maintenant à jour avec la branche distante `origin/main`.

```shell
# Vérification de l'état du projet après le push
git status
```

Résultat attendu :

```shell
@alexandre-girard-maif ➜ /workspaces/themoviedb-discovery-app-demo (main) $ git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

---

# GIT - push (suite)

Le commit initial a été poussé avec succès vers le dépôt distant sur GitHub. Vous pouvez vérifier que les fichiers ont été correctement ajoutés et que le commit est présent dans l'historique du dépôt en visitant la page du dépôt sur GitHub.

![GitHub - Initial Commit](./assets/github-com-initial-commit.png)

---

# TypeScript

Le javascript était à l'origine le langage de programmation utilisé pour le développement web côté client. Cependant, il est devenu de plus en plus populaire pour le développement côté serveur grâce à Node.js. Le javascript est un langage interprété, ce qui signifie qu'il n'est pas compilé avant d'être exécuté. Cela peut entraîner des erreurs à l'exécution si le code n'est pas correctement écrit ou si les types de données ne sont pas correctement gérés.

Afin de résoudre ces problèmes, TypeScript a été créé. TypeScript est un sur-ensemble de JavaScript qui ajoute des fonctionnalités de typage statique et de vérification de type à la compilation. Cela permet aux développeurs de détecter les erreurs avant l'exécution et d'écrire du code plus sûr et plus maintenable.

---

<style>
.ts-showcase {
  margin-top: 0.8rem;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 1rem;
  align-items: stretch;
}

.ts-card {
  border: 1px solid #d7dee6;
  border-radius: 0.9rem;
  padding: 0.9rem 1rem;
  background: #f8fbff;
}

.ts-card-title {
  margin: 0 0 0.45rem 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f172a;
}

.ts-lead {
  margin: 0;
  line-height: 1.5;
}

.ts-points {
  margin: 0.4rem 0 0 1rem;
  line-height: 1.5;
}

.ts-steps {
  margin: 0.35rem 0 0 1.1rem;
  line-height: 1.55;
}

.ts-code :deep(pre) {
  margin: 0;
  font-size: 0.78rem;
}

.ts-hint {
  margin-top: 0.8rem;
  font-size: 0.98rem;
  font-weight: 600;
  color: #0b4f8a;
}

@media (max-width: 900px) {
  .ts-showcase {
    grid-template-columns: 1fr;
  }
}
</style>

# TypeScript - Pourquoi ?

<div class="ts-showcase">
  <div class="ts-card">
    <p class="ts-card-title">Le problème avec JavaScript dynamique</p>
    <p class="ts-lead">Le typage dynamique de JavaScript est pratique, mais il peut laisser passer des erreurs jusqu'à ce que le code soit exécuté, ce qui peut entraîner des comportements inattendus.</p>

```javascript {all|5}
function addTax(price) {
  return price + 2;
}

addTax("10"); // "102" (concaténation), pas 12
```

  </div>

  <div class="ts-card">
    <p class="ts-card-title">Ce que TypeScript change</p>
    <ul class="ts-points">
      <li>Types explicites des paramètres et retours</li>
      <li>Erreurs détectées avant exécution</li>
      <li>Moins de bugs "surprises" en démo</li>
    </ul>
  </div>
</div>

---

# TypeScript - Ce que l'on gagne

<div class="ts-showcase">
  <div class="ts-card">
    <p class="ts-card-title">Bénéfices immédiats pour l'équipe</p>
    <ul class="ts-points">
      <li>Vérification statique des types à la compilation</li>
      <li>Auto-complétion plus fiable dans l'éditeur</li>
      <li>Refactoring plus sûr sur les fonctions et objets</li>
      <li>Code plus lisible et plus maintenable en équipe</li>
    </ul>
  </div>

  <div class="ts-card ts-code">
    <p class="ts-card-title">Exemple TypeScript</p>

```typescript
function addTax(price: number): number {
  return price + 2;
}

addTax("10"); // Erreur TypeScript
```

  </div>
</div>

---

# TypeScript - Installation

Nous allons donc convertir notre projet back-end en TypeScript pour bénéficier de ces avantages. Cela implique d'installer TypeScript, de configurer le projet pour utiliser TypeScript et de renommer nos fichiers JavaScript en fichiers TypeScript.

```shell
# Installation de TypeScript et des types pour Node.js et Express
npm install typescript @types/node @types/express --save-dev

```

Les types sont des définitions qui permettent à TypeScript de comprendre les types de données utilisés par Node.js et Express, ce qui améliore la vérification des types et l'auto-complétion dans l'éditeur.

---

# TypeScript - Configuration

La configuration de TypeScript se fait via un fichier `tsconfig.json` à la racine du projet. Ce fichier contient les options de compilation et les paramètres pour le projet TypeScript.

Pour créer ce fichier, nous pourrions utiliser la commande `tsc --init`, qui génère un fichier de configuration par défaut que nous pourrons ensuite modifier selon nos besoins.

Mais pour simplifier et préparer le projet pour une architecture multi-projets (back-end et front-end), nous allons créer directement un fichier `tsconfig.json` avec les options suivantes :

```json
{
  "files": [],
  "references": [{ "path": "./tsconfig.backend.json" }]
}
```

Nous aurons ainsi un fichier de configuration principal qui référence un fichier de configuration spécifique pour le back-end (`tsconfig.backend.json`). Cela nous permettra de gérer plus facilement les configurations pour différents projets dans le même dépôt.

---

# TypeScript - Configuration (suite)

Sur le slide suivant, nous allons créer le fichier `tsconfig.backend.json` qui contiendra les options de compilation spécifiques pour le projet back-end.

---

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.backend.tsbuildinfo",
    "target": "ES2023",
    "lib": ["ES2023"],
    "module": "ESNext",
    "outDir": "./dist/back-end",
    "rootDir": "./src/back-end",
    "types": ["node"],
    "skipLibCheck": true,

    /* Node ESM mode */
    "moduleResolution": "bundler",
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": false,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src/back-end/**/*.ts"]
}
```

---

# TypeScript - Configuration (suite)

Nous allons maintenant ajouter un script dans le fichier `package.json` pour lancer le projet back-end en mode développement avec TypeScript. Nous allons utiliser `tsx`, un outil qui permet d'exécuter des fichiers TypeScript directement sans avoir besoin de les compiler au préalable.

```json
{
  ...
  "scripts": {
    "dev:server": "tsx watch src/back-end/index.ts"
  },
  ...
}
```

---

# TypeScript - Transformation du projet

Nous allons maintenant transformer notre projet back-end pour utiliser TypeScript. Cela implique de renommer le fichier `index.js` en `index.ts` et de modifier le code pour utiliser les types TypeScript.

```javascript
import express from 'express';

// Create a new express application instance
const app = express();

// Define the port number for the server to listen on
const port: number = 3000;

// Define a route handler for the root URL ('/')
app.get('/', (_req: express.Request, res: express.Response) => {
  res.send('Hello World from TypeScript!');
});

// Start the server and listen on the specified port
app.listen(port , () => {
  console.log(`Example app in TypeScript listening on port ${port}`);
});
```

---

# TypeScript - Lancement du projet

Pour lancer le projet back-end en mode développement avec TypeScript, nous allons utiliser le script que nous avons ajouté dans le fichier `package.json`. Cela permettra de démarrer le serveur et de surveiller les modifications apportées aux fichiers TypeScript.

```shell
# Lancement du projet back-end en mode développement avec TypeScript
npm run dev:server
```

Une fois le serveur démarré, vous pouvez accéder à l'adresse [http://localhost:3000](http://localhost:3000) dans votre navigateur. Vous devriez voir le message "Hello World from TypeScript!" s'afficher.

Si vous apportez des modifications au fichier `index.ts`, le serveur se rechargera automatiquement pour refléter les changements.

Nous pouvons maintenant commiter ces modifications et les pousser vers le dépôt distant sur GitHub pour sauvegarder notre travail.

---

# **T**he **M**ovie **D**ata**B**ase (TMDB) - Découverte de l'API

[TMDB](https://www.themoviedb.org/?language=fr) est une base de données en ligne qui fournit des informations sur les films, les séries télévisées et les acteurs. Elle propose également une **API** (**A**pplication **P**rogramming **I**nterface) qui permet aux développeurs d'accéder à ces données et de les intégrer dans leurs applications.

<div style="display:flex;justify-content:center;align-items:center;max-height:52vh;overflow:hidden;">
  <img src="./assets/TMDB-web-site.png" alt="Aperçu du site TMDB" style="display:block;max-height:52vh;max-width:100%;width:auto;height:auto;object-fit:contain;border-radius:0.8rem;" />
</div>

---

# Exploitation de l'API TMDB (suite)

Pour plus d'informations sur l'API TMDB et comment l'utiliser, vous pouvez consulter la documentation officielle à l'adresse suivante :

https://developer.themoviedb.org/docs/getting-started

Les endpoints de l'API TMDB sont organisés en différentes catégories, telles que les films, les séries télévisées, les acteurs, etc. Chaque endpoint fournit des informations spécifiques et peut être utilisé pour effectuer des recherches, récupérer des détails sur un film ou une série, obtenir des recommandations, etc.

https://developer.themoviedb.org/reference/getting-started

## Wrappers pour l'API TMDB

Un wrapper est une bibliothèque qui simplifie l'utilisation d'une API en fournissant des fonctions et des méthodes prêtes à l'emploi pour effectuer des requêtes et traiter les réponses.

Il existe des Wrappers pour l'API TMDB, mais nous allons utiliser directement l'API REST pour mieux comprendre son fonctionnement et apprendre à interagir avec elle.

---

# Authentification avec l'API TMDB

Créer un compte sur le site [TMDB](https://www.themoviedb.org/?language=fr) pour obtenir une clé d'API et un token d'accès

Vous pouvez gérer vos clés d'API à l'adresse suivante : [https://www.themoviedb.org/settings/api?language=fr](https://www.themoviedb.org/settings/api?language=fr)

Une fois que vous avez créé un compte et obtenu une clé d'API et un token d'accès, vous pouvez les utiliser pour authentifier vos requêtes à l'API TMDB. L'authentification est nécessaire pour accéder aux données et effectuer des actions telles que la recherche de films, la récupération de détails sur un film ou une série, etc.

Il est préférable d'utiliser un token d'accès pour l'authentification, car il offre un niveau de sécurité plus élevé que la clé d'API. Le token d'accès est généralement utilisé dans l'en-tête de la requête HTTP pour authentifier l'utilisateur et autoriser l'accès aux ressources de l'API.

---

# Authentification avec l'API TMDB (suite)

Nous allons utiliser le token d'accès pour authentifier nos requêtes à l'API TMDB. Pour ce faire, nous allons créer un fichier `.env` à la racine du projet back-end pour stocker notre token d'accès en toute sécurité.

```shell
# Création du fichier .env pour stocker le token d'accès à l'API TMDB
echo "TMDB_ACCESS_TOKEN=your_access_token_here" > .env
```

Remplacez `your_access_token_here` par votre token d'accès réel obtenu depuis votre compte TMDB.

Attention : Ne partagez jamais votre token d'accès ou votre clé d'API publiquement, car cela pourrait compromettre la sécurité de votre compte et de vos données. Il ne faut donc jamais inclure le fichier `.env` dans votre dépôt GitHub. Pour éviter cela, nous allons ajouter le fichier `.env` à notre fichier `.gitignore`.

```shell
# Ajout du fichier .env au fichier .gitignore pour éviter de le partager publiquement
echo ".env" >> .gitignore
```

---

# Authentification avec l'API TMDB (suite)

Nous allons maintenant installer la bibliothèque `dotenv` pour charger les variables d'environnement depuis le fichier `.env`. Cela nous permettra d'accéder à notre token d'accès dans notre code sans l'exposer directement.

```shell
# Installation de la bibliothèque dotenv pour charger les variables d'environnement depuis le fichier .env
npm install dotenv
```

Et créer un fichier `config.ts` dans le dossier `src/back-end` pour gérer la configuration de notre application, y compris le token d'accès à l'API TMDB.

```typescript
import dotenv from "dotenv";

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

// Récupérer le token d'accès à l'API TMDB depuis les variables d'environnement
const tmdbAccessToken: string | undefined = process.env.TMDB_ACCESS_TOKEN;

if (!tmdbAccessToken) {
  throw new Error(
    "TMDB_ACCESS_TOKEN is not defined in the environment variables.",
  );
}

export { tmdbAccessToken };
```

---

# Films populaires (/api/movies/popular)

Nous allons maintenant créer un endpoint pour récupérer les films populaires depuis l'API TMDB. Nous allons définir une route `/api/movies/popular` qui fera une requête à l'API TMDB et renverra les résultats au client en ajoutant le code suivant dans le fichier `index.ts` :

```typescript
app.get('/api/movies/popular', async (_req: express.Request, res: express.Response) => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular', {
      headers: {
        'Authorization': `Bearer ${tmdbAccessToken}`,
        'Content-Type': 'application/json;charset=utf-8'
      }
    });

    if (!response.ok) {
      throw new Error(`TMDB API request failed with status ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch popular movies' });
  }
});

```

---

# Films populaires (/api/movies/popular) (suite)

Ajout d'un type pour la réponse de l'API TMDB afin d'améliorer la sécurité et la lisibilité du code. 

Nous allons créer un fichier `MoviesTypes.ts` dans le dossier `src/back-end/schemas` pour définir les types utilisés pour consommer les films depuis l'API TMDB.

Nous allons modifier la réponse de l'API TMDB afin de supprimer les champs inutiles et ne garder que les informations pertinentes pour notre application. Cela permettra de réduire la quantité de données transférées et d'améliorer les performances de l'application.

----

```typescript
// TypeScript type for the raw response from the TMDB API for popular movies.
export type TmdbMoviesRawResponse = {
  page: number;
  results: Array<TmdbMovie & { video?: boolean }>;
  total_pages: number;
  total_results: number;
};

// TypeScript type for the raw response from the TMDB API for popular movies.
export type TmdbMovie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number
};
```

----

```typescript
// TypeScript type for the API response when fetching movies, containing an array of supported Movie objects.
export type MoviesApiResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};


// TypeScript type for the supported movie format used in our application, omitting 'adult' and 'video' properties from the TmdbMovie type.
export type Movie = Omit<TmdbMovie, 'adult' | 'video'>;


// TypeScript type for the API response when fetching popular movies, containing an array of supported Movie objects.
export type ApiErrorResponse = {
  error: string;
};

````

----

# Films populaires (/api/movies/popular) (suite)

Ajout d'une fonction utilitaire pour transformer les films bruts de l'API TMDB en films supportés par notre application. Cette fonction prend un film brut de l'API TMDB et retourne un objet Movie avec uniquement les propriétés pertinentes.

```typescript
const toSupportedMovie = (movie: TmdbMoviesRawResponse['results'][number]): Movie => {
  return {
    backdrop_path: movie.backdrop_path,
    genre_ids: movie.genre_ids,
    id: movie.id,
    original_language: movie.original_language,
    original_title: movie.original_title,
    overview: movie.overview,
    popularity: movie.popularity,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
    title: movie.title,
    vote_average: movie.vote_average,
    vote_count: movie.vote_count
  };
};
```

----

# Films populaires (/api/movies/popular) (suite)

Nous allons maintenant modifier notre endpoint `/api/movies/popular` pour utiliser la fonction `toSupportedMovie` afin de transformer les films bruts de l'API TMDB en films supportés par notre application avant de les renvoyer au client.

```typescript
      ...

      // Parse the raw response from the TMDB API
      const rawData = (await response.json()) as TmdbMoviesRawResponse;

      // Transform the raw data into the supported format for our application
      const data: MoviesApiResponse = {
        page: rawData.page,
        results: rawData.results.map(toSupportedMovie),
        total_pages: rawData.total_pages,
        total_results: rawData.total_results
      };

      // Send the transformed data as a JSON response
      res.json(data);

      ...

```

----

# Films populaires (/api/movies/popular) (suite)

Après avoir validé que le serveur fonctionne correctement et que l'endpoint `/api/movies/popular` renvoie les films populaires depuis l'API TMDB en ayant transformé les données brutes en films supportés par notre application, nous pouvons maintenant commiter ces modifications et les pousser vers le dépôt distant sur GitHub pour sauvegarder notre travail.

----

# GIT - Bonnes pratiques pour le commit et le push

- Faire des commits réguliers et atomiques
    - Un commit par fonctionnalité
    - Eviter les commits trop gros (trop de fichiers modifiés, trop de lignes modifiées)

Si vous commitez trop de fichiers en même temps, il est difficile de savoir ce qui a été modifié et pourquoi. Il est préférable de faire plusieurs commits pour des modifications différentes.

- Les messages de commit doivent être courts et descriptifs
- Ils doivent expliquer les modifications apportées par le commit
    - Quoi : modifications apportées
    - Pourquoi : pourquoi ces modifications ont été apportées

Si vous avez des difficultés à écrire un message de commit, c'est peut-être que vous devriez faire plusieurs commits pour des modifications différentes.

Un bon message de commit doit permettre de comprendre les modifications apportées sans avoir à lire le code.

Les messages de commit permettent de comprendre l'historique du projet et de savoir qui a fait quoi et pourquoi.
On doit pouvoir comprendre l'historique du projet sans avoir à lire le code.

Des messages de commit clairs et concis permettent de faciliter la collaboration entre les membres d'une équipe et de faciliter la maintenance du code.

Des messages trop génériques ou trop vagues rendent l'historique du projet difficile à comprendre et n'apportent pas d'informations utiles.

- Commencer le message de commit par un verbe à l'impératif avec une majuscule
    - "Ajoute la fonctionnalité xxx"
    - "Modifie le style de la page d'accueil"
    - "Supprime le fichier xxx devenu inutile"
- Limiter la longueur du titre à environ 70 caractères
- Ajouter une ligne vide entre le titre et le corps du message si le corps est nécessaire
- Utiliser le corps du message pour expliquer les modifications plus en détail si nécessaire
    - Expliquer le pourquoi des modifications
    - Expliquer les conséquences des modifications

----

# GIT - Conventionnal Commits

Les **Conventional Commits** sont une convention de nommage pour les messages de commit qui permet de rendre l'historique des modifications plus lisible et structuré. Voici les types de commits les plus courants :

- **feat** : Une nouvelle fonctionnalité
- **fix** : Correction d'un bug
- **docs** : Modifications de la documentation
- **style** : Changements de style (formatage, espaces, etc.)
- **refactor** : Refactorisation du code (sans ajout de fonctionnalité ni correction de bug)
- **test** : Ajout ou modification de tests
- **chore** : Tâches diverses (mise à jour des dépendances, scripts, etc.)

En respectant cette convention, chaque membre de l'équipe peut rapidement identifier le type de changement apporté par un commit donné.


----

# GIT - Conventionnal Commits - commitlint

Il est aussi possible d'automatiser le contrôle des messages de commit pour s'assurer qu'ils respectent bien la convention. 

**commitlint** est un outil qui permet d'effectuer ce contrôle pour des projets **nodejs**

Installation

```bash
npm install -D @commitlint/cli @commitlint/config-conventional
```

Configuration

```bash
echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
```

---

# Conventional Commits - commitlint

Il est ensuite possible par exemple de vérifier le dernier message de commit

```bash
npx commitlint --from HEAD~1 --to HEAD --verbose
```

La commande permet de voir si le commit est valide et si ce n'est pas le cas, d'avoir des indications sur les erreurs.

Ce contrôle devrait être effectué avant chaque commit pour s'assurer que le message de commit est valide.

Afin d'automatiser ce contrôle, il est possible d'utiliser des **git hooks**.

---

# GIT - hooks

**git** met à disposition des hooks, qui sont des scripts exécutés à des moments clés du cycle de vie de **git**. 

Par exemple, on peut utiliser un hook `commit-msg` pour vérifier le message d'un commit avant qu'il ne soit enregistré.

Ou encore un hook `pre-commit` pour exécuter des tests ou des vérifications de code avant qu'un commit ne soit effectué.

Pour plus d'informations sur les hooks **git**, vous pouvez consulter la documentation officielle : https://git-scm.com/book/en/Customizing-Git-Git-Hooks

----

---

# husky

**husky** est un outil **Node.js** qui permet de gérer les hooks **git** de manière simple et efficace. Il s'intègre facilement dans les projets **JavaScript** et **TypeScript**. 

Pour installer **husky**, vous pouvez utiliser la commande suivante :

```bash
npm install --save-dev husky
```

Pour configurer **husky**, vous pouvez utiliser la commande suivante :

```bash
npx husky init
```

---

# husky (suite)

Par défaut cela va ajouter un hook `pre-commit` qui va exécuter les tests avant chaque commit. Nous n'avons pas encore vu la configuration des tests, nous verrons cela plus tard. Il est donc nécessaire de supprimer ce hook pour l'instant.

```bash
rm .husky/pre-commit
```

Pour ajouter un hook `commit-msg` qui va vérifier le message de commit avec **commitlint**, vous pouvez utiliser la commande suivante :

```bash
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
```

---

# husky (suite)

Vérifions que le hook fonctionne correctement en essayant de faire un commit avec un message invalide.

```bash
git add .
git commit -m "foo: this will fail"
```

Le commit doit échouer avec un message d'erreur indiquant que le message de commit ne respecte pas la convention.

Commiter de nouveau avec un message valide.

```bash
git commit -m "chore: add husky for commit message linting and prepare script"
```

---

# Conventional Commits - Devmoji

Nous avons maintenant un contrôle automatique des messages de commit pour s'assurer qu'ils respectent bien la convention.

Nous allons améliorer l'expérience de l'utilisateur en utilisant des emojis pour représenter les types de commits. Cela permet de rendre les messages de commit plus visuels et plus faciles à comprendre.

Pour cela, nous allons utiliser **Devmoji**. **Devmoji** est une liste d'emojis spécialement conçue pour les développeurs. Chaque emoji représente un type de commit spécifique. Pour plus d'informations, vous pouvez consulter le site officiel : https://github.com/folke/devmoji

---

# Conventional Commits - Devmoji (suite)
<!-- _footer: "" -->

Installation

```bash
npm install --dev devmoji
```

Configuration

```bash
echo "npx devmoji -e --lint" > .husky/prepare-commit-msg
```

Utilisation

```
git add .
git commit -m "feat: add devmoji dependency and configure commit message linting"
```

<!-- <img src="img/devmoji-terminal.png" alt="devmoji" style="width: 100%"> -->

---

# Conventionnal Commits

Nous aurons à présent des messages de commit plus visuels et plus faciles à comprendre.

<!-- <img src="img/devmoji-github.png" alt="devmoji" style="width: 80%"> -->

