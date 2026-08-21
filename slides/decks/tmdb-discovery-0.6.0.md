---
theme: seriph
title: Back-end - TMDB Discovery App
duration: 2h
routerMode: hash
layout: tmdb-hero
---

# TMDB Discovery App - 0.6.0

<p class="hero-kicker">test unitaire - continuous integration - router</p>

---

# Objectifs

## Application

- refactoring du back-end pour améliorer la maintenabilité et la lisibilité du code
- ajout du end-point détail d'un film pour le back-end
- possibilité d'afficher les détails d'un film dans le front-end

## Ingénierie logicielle

- test unitaire pour le back-end
- ci pour automatiser les contrôles qualité du code (formatage, lint, tests unitaires)
- protection de branches pour éviter de merger du code non validé sur la branche `develop`

<!--

- **détail d'un film** pour le back-end et le front-end
- **refactoring du back-end** pour améliorer la maintenabilité et la lisibilité du code, nous allons avoir de plus en plus de end-points dans le back-end et il est important de structurer le code pour faciliter la maintenance et l'évolution du projet.
- **tests unitaires** pour le back-end, nous allons mettre en place des tests unitaires pour vérifier le bon fonctionnement du code du back-end et détecter rapidement les régressions lors d'une modification du code.
- **ci** pour automatiser les contrôles qualité du code (formatage, lint, tests unitaires) avant de merger du code sur la branche `develop`, nous allons mettre en place une action GitHub pour vérifier que le formatage, le lint et les tests unitaires passent avant de merger du code sur la branche `develop`.
- **protection de branches** pour éviter de merger du code non validé sur la branche `develop`, nous allons configurer les règles de protection de la branche `develop` pour exiger que les tests unitaires passent avant de pouvoir merger du code sur cette branche.

-->
---

# refactoring du back-end

- **Objectif :** rendre le code des routes plus lisible et plus facile à maintenir.
- **Définition :** déplacer chaque route dans un fichier dédié, puis l'enregistrer depuis `index.ts`.
- **Pourquoi c'est utile :** le back-end peut évoluer sans concentrer toute la logique dans un seul fichier.
- **Sécurisation :** la mise en place de tests unitaires permet de vérifier que le code fonctionne toujours correctement après le refactoring.

<!--

Même si le refactoring ne va pas être très long, il est important de le faire maintenant pour améliorer la maintenabilité et la lisibilité du code du back-end. Nous allons donc refactorer le code du back-end pour déplacer les routes dans des fichiers séparés et les enregistrer dans le fichier `index.ts`. Nous allons aussi ajouter des tests unitaires pour vérifier que le code fonctionne toujours correctement après le refactoring.

-->

---

# refactoring du back-end (suite)

- **Objectif :** démarrer la feature `feature/refactoring-backend` depuis `develop`.
- **Commande :**

```bash
git switch develop
git switch -c feature/refactoring-backend
```

- **Vérification :** la branche `feature/refactoring-backend` est créée et active.

---

# back-end - tests unitaires

- **Objectif :** vérifier le comportement d'une partie du code de manière isolée.
- **Définition :** un test unitaire exécute une fonction, une méthode ou un module de manière isolée.
- **Pourquoi c'est utile :** il détecte rapidement les régressions lors d'une modification du code.

<!--

Les tests unitaires sont des tests automatisés qui permettent de vérifier le bon fonctionnement d'une unité de code (une fonction, une méthode, un module, etc.) de manière isolée. Ils sont essentiels pour garantir la qualité du code et faciliter la maintenance et l'évolution du projet.

Ils simulent le comportement de l'application en testant des fonctions ou des méthodes spécifiques avec des entrées prédéfinies et en vérifiant que les sorties correspondent aux résultats attendus.

Ils sont généralement écrits par les développeurs eux-mêmes et exécutés fréquemment pour détecter rapidement les régressions ou les erreurs introduites lors de modifications du code. Ils doivent être rapides à exécuter et faciles à maintenir, et sont souvent intégrés dans des pipelines d'intégration continue pour automatiser leur exécution.

-->

---

# back-end - tests unitaires (suite)

- **Objectif :** vérifier que le serveur démarre et que les routes sont accessibles.
- **Étape 1 :** créer un premier test automatisé du back-end.
- **Étape 2 :** démarrer le serveur dans le contexte du test.
- **Étape 3 :** vérifier la présence des routes `/`, `/api/movies/popular` et `/api/health`.
- **Résultat attendu :** les routes répondent correctement avant d'ajouter des tests plus précis.

---

# back-end - tests unitaires - configuration

- **Objectif:** configurer le back-end pour exécuter les tests unitaires.
- **Étape 1:** installer les dépendances de test.

```bash
npm install --save-dev vitest 
```

- **Étape 2:** ajouter le script de test dans `package.json`.

```json
{
  "scripts": {
    ...
    "test": "vitest run",
    ...
  }
}
```

---

# tests unitaires - back-end - configuration

- **Objectif :** exécuter uniquement les tests unitaires du back-end.
- **Étape 1 :** modifier `vite.config.ts` pour ajouter la configuration de test.
- **Étape 2 :** cibler les fichiers `src/back-end/**/*.test.ts`.

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  test: {
    include: ["src/back-end/**/*.test.ts"],
  },
});
```

- **Résultat attendu :** Vitest exécute les fichiers `.test.ts` du back-end, sans inclure le front-end.

---

# tests unitaires - back-end - présences des routes

- **Objectif :** vérifier le démarrage du serveur et la disponibilité des endpoints.
- **Étape 1 :** copier <a href="./assets/code-sample/back-end/index.test-basic.ts" target="_blank" rel="noopener noreferrer">index.test-basic.ts</a> vers `src/back-end/index.test.ts`.
- **Étape 2 :** lancer avec la commande `npm test`.
- **Résultat attendu :** les tests passent.

```bash
✓ src/back-end/index.test.ts (4 tests) 4ms
   ✓ back-end server routes (4)
     ✓ server setup (1)
       ✓ server listening (1)
         ✓ starts the server on port 3000 2ms
     ✓ route registration (3)
       ✓ registers the / route 0ms
       ✓ registers the /api/movies/popular route 0ms
       ✓ registers the /api/health route 0ms

 Test Files  1 passed (1)
      Tests  4 passed (4)
```

<!--

**mock** : simuler le comportement d'une partie du code pour tester une autre partie du code afin d'isoler le test et éviter les dépendances externes. Par exemple, on peut simuler la réponse d'une API pour tester une fonction qui utilise cette API sans réellement appeler l'API.

Ici on mock le serveur pour tester les routes sans avoir besoin de démarrer le serveur réel. Cela permet de tester les routes de manière isolée et rapide.

**describe, it** : structure les tests en groupes et sous-groupes pour une meilleure lisibilité. `describe` permet de regrouper des tests liés à une fonctionnalité ou un module, tandis que `it` décrit un test spécifique. it permet de lire comme une phrase, par exemple "it should return 200 OK when the server is running".

**expect** : assertion pour vérifier que le résultat d'une opération correspond à ce qui est attendu. Par exemple, `expect(response.status).toBe(200)` vérifie que le code de statut de la réponse est bien 200.

-->
---

# tests unitaires - back-end - couverture de code

- **Objectif :** mesurer les parties du back-end couvertes par les tests.
- **Définition :** la couverture indique quelles lignes, branches et fonctions sont exécutées par les tests.
- **Pourquoi c'est utile :** elle révèle les zones non testées qui peuvent introduire des régressions.

<!--
La couverture de code permet de savoir quelles parties du code sont testées et quelles parties ne le sont pas. Nous allons donc configurer Vitest pour générer un rapport de couverture de code et voir quelles parties du back-end sont couvertes par les tests unitaires.

Il est aussi possible d'exécuter les tests unitaires directement depuis l'IDE Visual Studio Code avec possibilité de voir la couverture de code directement dans l'éditeur.

-->
---

# tests unitaires - back-end - couverture de code (suite)

- **Étape 1 :** ajouter `--coverage` au script `test` dans `package.json`.

```json
    ...
    "test": "vitest run --coverage",
    ...
```

- **Étape 2 :** installer `@vitest/coverage-v8`.

```bash
npm install --save-dev @vitest/coverage-v8
```

- **Étape 3 :** générer le rapport avec `npm test`, puis ignorer `coverage` dans Git.

```bash
npm test
echo "coverage" >> .gitignore
```

- **Résultat attendu :** Vitest génère un rapport sans ajouter les fichiers de couverture au dépôt.

---

# tests unitaires - back-end - couverture de code (suite)

```bash
 ✓ src/back-end/index.test.ts (4 tests) 6ms
   ✓ back-end server routes (4)
     ✓ server setup (1)
       ✓ server listening (1)
         ✓ starts the server on port 3000 3ms
     ✓ route registration (3)
       ✓ registers the / route 0ms
       ✓ registers the /api/movies/popular route 0ms
       ✓ registers the /api/health route 0ms

 Test Files  1 passed (1)
      Tests  4 passed (4)
   Start at  13:15:09
   Duration  287ms (transform 47ms, setup 0ms, import 80ms, tests 6ms, environment 0ms)

 % Coverage report from v8
--------------|---------|----------|---------|---------|-------------------
File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------|---------|----------|---------|---------|-------------------
All files     |   34.48 |        0 |       0 |   34.48 |                   
 constants.ts |     100 |      100 |     100 |     100 |                   
 index.ts     |      25 |        0 |       0 |      25 | 14,20-56,62-63,68 
 utils.ts     |      50 |      100 |       0 |      50 | 9                 
--------------|---------|----------|---------|---------|-------------------

```

---

# tests unitaires - back-end - couverture de code

- **Objectif :** afficher la couverture des tests directement dans Visual Studio Code.
- **Étape 1 :** ajouter l'extension Vitest dans `.devcontainer/devcontainer.json`.

````json
{
  "name": "themoviedb-discovery-app-demo-2026-2027",
  "customizations": {
    "vscode": {
      "extensions": ["mhutchie.git-graph", "vitest.vitest"]
    }
  }
}
````

- **Étape 2 :** reconstruire le container pour installer l'extension.
- **Résultat attendu :** Visual Studio Code affiche les résultats et la couverture Vitest dans l'éditeur.

<!--

Faire une démonstration de la couverture de code dans l'éditeur Visual Studio Code avec l'extension Vitest.

Parler du fait de l'objectif à terme que le test associé à un fichier couvre 100% du code de ce fichier et potentiellment d'autres fichiers qui sont utilisés par ce fichier. 

Nous avons une couverture de code minimale pour le back-end, mais nous allons maintenant pouvoir refactorer le code pour déplacer les routes dans un fichier séparé, les tests unitaires existant nous permettant de vérifier que le code fonctionne toujours correctement après le refactoring. 

-->
---

# refactoring du back-end - suppression de la route `/`

- **Étape 1 :** supprimer la route `/` qui n'appartient pas à l'API métier.
- **Étape 2 :** constater que le test associé à `/` échoue.
- **Étape 3 :** retirer ce test et conserver ceux de `/api/movies/popular` et `/api/health`.
- **Résultat attendu :** les tests reflètent les routes réellement exposées par le back-end.

---

# refactoring du back-end - health-api

- **Étape 1 :** créer `src/back-end/health-api.ts` pour isoler la route `/api/health`.

```ts
import type { Express } from 'express'
import express from 'express'

export function registerHealthApi(app: Express): void {

    // Define a route handler for health check endpoint
    app.get("/api/health", (_req: express.Request, res: express.Response) => {
        const response: { status: string } = { status: "ok" };
        res.json(response);
    });

}
```

- **Étape 2 :** importer `registerHealthApi` dans `src/back-end/index.ts`.

---


- **Étape 3 :** appeler `registerHealthApi(app)` pour enregistrer la route.

```ts
...
// Define the port number for the server to listen on
const port: number = 3000;

// Register API routes from dedicated modules
registerHealthApi(app);

...
```

- **Résultat attendu :** les tests existants passent après le déplacement de la route.

<!--

Les tests unitaires existants doivent toujours passer après cette modification, ce qui est normal. Nous avons donc refactoré le code du back-end pour améliorer la maintenabilité et la lisibilité du code, tout en conservant les tests unitaires existants pour vérifier que le code fonctionne toujours correctement.

-->

---

# refactoring du back-end - movies-api

- **Étape 1 :** créer `src/back-end/movies-api.ts` pour isoler la route `/api/movies/popular`.
- **Étape 2 :** importer et enregistrer la route depuis `src/back-end/index.ts`.
- **Étape 3 :** exécuter les tests unitaires après le déplacement.
- **Résultat attendu :** la route `/api/movies/popular` reste disponible après le refactoring.

---

# refactoring du back-end

- **Étape 1 :** pousser `feature/refactoring-backend` sur le dépôt distant.
- **Étape 2 :** créer une pull request vers `develop`.
- **Étape 3 :** utiliser les tests existants pour vérifier les endpoints après le refactoring.
- **Résultat attendu :** le back-end est plus maintenable sans régression sur les routes testées.
- **Suite :** automatiser les contrôles dans un pipeline d'intégration continue.

---

# vérification de la pull request

- **Objectif :** empêcher la fusion de code non testé dans `develop`.
- **Définition :** l'intégration continue exécute automatiquement des contrôles après un `push` ou une pull request.
- **Pourquoi c'est utile :** les tests unitaires sont vérifiés avant la fusion, sans contrôle manuel répétitif.
- **Exemple rapide :** exécuter les tests sur une pull request vers `develop` et bloquer la fusion en cas d'échec.

---

# vérification de la pull request - intégration continue

- **Objectif :** automatiser les contrôles avant la fusion dans `develop`.
- **Définition :** la CI exécute des actions après des événements Git comme un `push` ou une pull request.
- **Pourquoi c'est utile :** le formatage, le lint et les tests unitaires sont vérifiés sans intervention manuelle.

<!--
Cette phase d'automatisation qui réagit à des événements git (push, pull request, etc.) est appelée intégration continue (CI). Elle permet de mettre en place des actions automatisées pour vérifier que le code répond à certains critères de qualité avant d'être intégré dans la branche cible ( lint, tests unitaires, tests d'intégration, etc.). Nous allons donc mettre en place une action GitHub pour vérifier que le formatage, le lint et les tests unitaires passent avant de merger du code sur la branche `develop`.

Dans github, l'intégration continue est traitée par les actions GitHub (GitHub Actions) qui permettent d'automatiser des tâches en réponse à des événements git (push, pull request, etc.). Nous allons donc créer un fichier de configuration pour l'action GitHub qui va vérifier que le formatage, le lint et les tests unitaires passent avant de merger du code sur la branche `develop`.

-->

---

# vérification de la pull request - intégration continue

- **Étape 1 :** copier <a href="./assets/code-sample/back-end/ci.yml" target="_blank" rel="noopener noreferrer">ci.yml</a> vers `.github/workflows/ci.yml`.
- **Résultat attendu :** GitHub Actions exécute les contrôles sur un runner isolé avant la fusion.
- **Référence :** https://docs.github.com/en/actions/get-started/quickstart 

<!--
Un workflow possède un nom, un déclencheur (trigger) et une ou plusieurs jobs. Un job est un ensemble d'étapes (steps) qui s'exécutent sur un runner. Un step est une action ou une commande qui s'exécute dans le contexte du job. Un workflow peut contenir plusieurs jobs qui s'exécutent en parallèle ou en séquence.

Un workflow est défini dans un fichier YAML qui se trouve dans le répertoire `.github/workflows` du dépôt. Le nom du fichier n'a pas d'importance, mais il doit avoir l'extension `.yml` ou `.yaml`. Le nom du workflow est défini par la clé `name` et le déclencheur par la clé `on`. Les jobs sont définis par la clé `jobs` et chaque job possède un nom, un runner et une liste d'étapes.

Un job s'exécute sur un runner qui est une machine virtuelle ou un conteneur qui exécute les étapes du job. Il faut considérer que chaque job s'exécute dans un environnement isolé et qu'il n'y a pas de partage d'état entre les jobs. Il est donc important de configurer correctement le runner pour qu'il dispose de toutes les dépendances nécessaires à l'exécution des étapes du job. Il faut aussi considérer que le runner ne contient pas d'outils, les action setup-* permettent d'installer les outils nécessaires à l'exécution des étapes du job. 

-->
---

# protection de la branche `develop`

- **Étape 1 :** créer un ruleset nommé `develop` dans les paramètres GitHub du dépôt.
- **Étape 2 :** exiger une pull request avant toute fusion.
- **Étape 3 :** exiger la réussite des status checks, dont les tests unitaires.
- **Règle 1 :** bloquer les suppressions de branche.
- **Règle 2 :** bloquer les force pushes.
- **Résultat attendu :** aucun code non validé ne peut être fusionné dans `develop`.
  
Valider la PR de `feature/refactoring-backend` vers `develop` pour vérifier que la protection de la branche `develop` fonctionne correctement.

<!--
Une fois poussée la branche `feature/refactoring-backend` sur le dépôt distant, une action GitHub va se déclencher automatiquement pour vérifier que le formatage, le lint et les tests unitaires passent.

Nous allons maintenant de protéger la branche `develop` pour éviter de merger du code non testé sur cette branche. Nous allons donc configurer les règles de protection de la branche `develop` pour exiger que les tests unitaires passent avant de pouvoir merger du code sur cette branche.

Une fois la branche `develop` protégée, il ne sera plus possible de merger du code sur cette branche sans que les tests unitaires passent. Nous allons donc créer une pull request de la branche `feature/refactoring-backend` vers la branche `develop` et vérifier que la protection de la branche `develop` fonctionne correctement.
-->

---

# end-point détail d'un film - back-end

- **Étape 1 :** créer `feature/movie-detail-endpoint-backend` depuis `develop`.
- **Étape 2 :** mettre à jour `MoviesTypes.ts` avec <a href="./assets/code-sample/back-end/MoviesTypes.ts" target="_blank" rel="noopener noreferrer">MoviesTypes.ts</a>.
- **Étape 3 :** implémenter `/api/movies/:id` dans `src/back-end/movies-api.ts`.
- **Étape 4 :** retourner les détails du film.
- **Étape 4 :** valider le fonctionnement du end-point, par exemple `http://127.0.0.1:5173/api/movies/1273221`
- **Étape 5 :** ajouter un test unitaire dans `src/back-end/index.test.ts`.
- **Résultat attendu :** le back-end expose les détails d'un film via son identifiant.
- **Référence :** <a href="https://developer.themoviedb.org/reference/movie-details" target="_blank" rel="noopener noreferrer">TMDB API - Get Movie Details</a>. 

Pousser la branche `feature/movie-detail-endpoint-backend` sur le dépôt distant et créer une pull request vers `develop`. Ne pas valider la pull request pour l'instant.

---

# page détail d'un film - front-end

- **Étape 1 :** créer `feature/movie-detail-page-frontend` depuis `develop`.
- **Étape 2 :** mettre en place le routage pour gérer plusieurs pages.
- **Étape 3 :** créer des pages temporaires pour la liste, le détail et une URL inconnue.
- **Résultat attendu :** la navigation entre les trois routes fonctionne avant de réintégrer les écrans complets.

<!--

Problème notre application front-end contient pour l'instant uniquement une page d'accueil qui affiche la liste des films populaires. Nous allons donc ajouter une page détail d'un film pour le front-end. La page détail d'un film doit être accessible à l'url `/movies/:id` où `:id` est l'identifiant du film. La page détail d'un film doit afficher les détails du film correspondant à l'identifiant passé en paramètre. La page détail d'un film doit afficher un message d'erreur si le film n'existe pas.

Afin de pouvoir mettre en place plusieurs pages dans notre application front-end, nous allons mettre en place un système de routage pour notre application front-end. 

-->

---

# routage - front-end

- **Étape 1 :** installer `react-router`.

```bash
npm install react-router 
```

- **Étape 2 :** encapsuler l'application avec `BrowserRouter` dans `main.tsx`.

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import "./global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
```

---

# routage - front-end

- **Étape 3 :** créer `MoviesListPage.tsx`, `MovieDetailPage.tsx` et `NotFoundPage.tsx` dans `src/front-end/pages`.


```tsx

export default function MoviesListPage() {
  return <main className="app-shell">Main content of the MoviesListPage component</main>;
}
```

```tsx
export default function MovieDetailPage() {
  return <main className="app-shell">Main content of the MovieDetailPage component</main>;
} 
```

```tsx
export default function NotFoundPage() {
  return <main className="app-shell">Main content of the NotFoundPage component</main>;
} 

```

- **Résultat attendu :** les trois pages temporaires peuvent être associées aux routes du front-end.
- **Ressource :** <a href="https://reactrouter.com/home" target="_blank" rel="noopener noreferrer">React Router</a>.

---

# routage - front-end

- **Étape 1 :** importer `Routes`, `Route` et les composants de pages dans `App.tsx`.
- **Étape 2 :** associer la liste des films à la route `/`.
- **Étape 3 :** associer le détail à `/movie/:id` et les URLs inconnues à `NotFoundPage`.
- **Résultat attendu :** React Router affiche la page correspondant à l'URL.


```tsx
import { Route, Routes } from "react-router";
import "./app.css";
import MovieDetailPage from "./pages/MovieDetailPage";
import MoviesListPage from "./pages/MoviesListPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MoviesListPage />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
```

<!--

Naviguer entre les trois routes pour vérifier que le routage fonctionne correctement. La page d'accueil affiche la liste des films populaires, la page détail d'un film affiche les détails du film correspondant à l'identifiant passé en paramètre et la page NotFoundPage affiche un message d'erreur pour les URLs inconnues.

-->

---

# routage - front-end

- **Étape 1 :** utiliser `Navigate` pour rediriger `/` vers `/movies`.
- **Étape 2 :** associer la liste des films à `/movies`.
- **Étape 3 :** conserver la route détail `/movie/:id` et la page inconnue.
- **Résultat attendu :** la page d'accueil redirige vers la liste des films populaires.

```typescript
import { Navigate, Route, Routes } from "react-router";
import "./app.css";
import MovieDetailPage from "./pages/MovieDetailPage";
import MoviesListPage from "./pages/MoviesListPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/movies" replace />} />
      <Route path="/movies" element={<MoviesListPage />} />
      <Route path="/movie/:id" element={<MovieDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
```

---

# routage - front-end

- **Étape 1 :** reprendre le code de la liste des films populaires depuis `develop`.
- **Étape 2 :** l'intégrer dans `MoviesListPage`.
- **Étape 3 :** vérifier l'affichage de la liste sur la route `/movies`.
- **Résultat attendu :** la page de liste affiche à nouveau les films populaires.

---

# routage - front-end

- **Objectif :** ouvrir la page détail du film sélectionné.
- **Étape 1 :** importer `Link` depuis `react-router`.
- **Étape 2 :** entourer la carte `MovieItem` avec un lien vers `/movie/:id`.
- **Étape 3 :** utiliser l'identifiant du film dans la propriété `to`.
- **Résultat attendu :** un clic sur une carte ouvre le détail du film correspondant.

---

```tsx
import type { Movie } from "../../back-end/schemas/MoviesTypes";
import { Link } from "react-router";

type MovieItemProps = {
  movie: Movie;
};

export default function MovieItem({ movie }: MovieItemProps) {
  const releaseYear = movie.release_date.slice(0, 4);
  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w185${movie.poster_path}` : null;
  const rating = movie.vote_average.toFixed(1);

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card-link">
      <div className="movie-card">
        {posterUrl ? <img className="movie-poster" src={posterUrl} alt={`Affiche de ${movie.title}`} /> : <div />}
        <div className="movie-card__content">
          <h2>{movie.title}</h2>
          <p>
            {releaseYear} · Note {rating}
          </p>
        </div>
      </div>
    </Link>
  );
}
```

---

# routage - front-end

- **Objectif :** récupérer l'identifiant du film dans l'URL.
- **Étape 1 :** importer `useParams` depuis `react-router`.
- **Étape 2 :** lire le paramètre `id` de la route `/movie/:id`.
- **Étape 3 :** afficher cet identifiant dans `MovieDetailPage`.
- **Résultat attendu :** la page détail reçoit l'identifiant du film sélectionné.

```tsx
import { useParams } from "react-router";

export default function MovieDetailPage() {
  const { id } = useParams<{ id: string }>();

  return <main className="app-shell">Movie id: {id}</main>;
}
```

---

# mise à jour de la branche front-end

- **Objectif :** récupérer l'endpoint détail après sa fusion dans `develop`.
- **Étape 1 :** attendre la fusion de `feature/movie-detail-endpoint-backend` dans `develop` et mettre à jour la branche `develop` localement.

```bash
git switch develop
git pull origin develop
```

- **Étape 2 :** se placer sur `feature/movie-detail-page-frontend`.

```bash
git switch feature/movie-detail-page-frontend
```

- **Étape 3 :** mettre la branche à jour grâce à un rebase sur `develop`.

```bash
git rebase develop
```

- **Résultat attendu :** la branche front-end peut appeler l'endpoint détail du back-end (par exemple `http://127.0.0.1:5173/api/movies/1273221`)

<!--

**rebase** : opération Git qui permet de réappliquer les commits d'une branche sur une autre base, en créant un historique linéaire. Cela permet de mettre à jour une branche avec les derniers changements d'une autre branche (par exemple `develop`) sans créer de merge commit.

Montrer le graphe d'historique avant et après dans vs-code et sur github pour illustrer le concept de rebase. 
-->

---
# front-end - détail d'un film

Nous pouvons maintenant implémenter la page détail d'un film en appelant l'endpoint `/api/movies/:id` du back-end pour récupérer les détails du film sélectionné.

TODO: Créer un composant `MovieDetailCard` pour afficher les détails du film et l'utiliser dans `MovieDetailPage`.


---

---

# Récapitulatif de la version 0.6.0

## Nouvelles fonctionnalités

- refactoring du back-end pour améliorer la maintenabilité et la lisibilité du code
- ajout du end-point détail d'un film pour le back-end
- possibilité d'afficher les détails d'un film dans le front-end

## Ingénierie logicielle

- test unitaire pour le back-end
- ci pour automatiser les contrôles qualité du code (formatage, lint, tests unitaires)
- protection de branches pour éviter de merger du code non validé sur la branche `develop

