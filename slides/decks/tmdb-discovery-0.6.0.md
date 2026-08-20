---
theme: seriph
title: Back-end - TMDB Discovery App
duration: 2h
routerMode: hash
layout: tmdb-hero
---

# TMDB Discovery App - 0.6.0

<p class="hero-kicker"></p>

---

# Objectifs

## Application

## Ingénierie logicielle

- test unitaire pour la partie back-end
- refactoring du back-end pour améliorer la maintenabilité et la lisibilité du code
- ci pour le back-end pour automatiser les tests unitaires
- protection de branches pour le back-end pour éviter de merger du code non testé
- ajout du end-point détail d'un film pour le back-end
- ajout du end-point détail d'un film pour le front-end

---

TODO parler de l'objectif de refactorer le back-end pour améliorer la maintenabilité et la lisibilité du code, et de l'objectif d'ajouter le end-point détail d'un film pour le back-end et le front-end.

---

# tests unitaires - back-end

- **Objectif :** démarrer la feature `feature/refactoring-backend` depuis `develop`.
- **Commande :**

```bash
git switch develop
git switch -c feature/refactoring-backend
```

- **Vérification :** la branche `feature/refactoring-backend` est créée et active.

---

# tests unitaires

- **Objectif :** vérifier le comportement d'une unité de code du back-end.
- **Définition :** un test unitaire exécute une fonction, une méthode ou un module de manière isolée.
- **Pourquoi c'est utile :** il détecte rapidement les régressions lors d'une modification du code.

<!--

Les tests unitaires sont des tests automatisés qui permettent de vérifier le bon fonctionnement d'une unité de code (une fonction, une méthode, un module, etc.) de manière isolée. Ils sont essentiels pour garantir la qualité du code et faciliter la maintenance et l'évolution du projet.

Ils simulent le comportement de l'application en testant des fonctions ou des méthodes spécifiques avec des entrées prédéfinies et en vérifiant que les sorties correspondent aux résultats attendus.

Ils sont généralement écrits par les développeurs eux-mêmes et exécutés fréquemment pour détecter rapidement les régressions ou les erreurs introduites lors de modifications du code. Ils doivent être rapides à exécuter et faciles à maintenir, et sont souvent intégrés dans des pipelines d'intégration continue pour automatiser leur exécution.

-->

---

# tests unitaires - back-end

- **Objectif :** vérifier que le serveur démarre et que les routes sont accessibles.
- **Étape 1 :** créer un premier test automatisé du back-end.
- **Étape 2 :** démarrer le serveur dans le contexte du test.
- **Étape 3 :** appeler les endpoints déjà définis.
- **Résultat attendu :** les routes répondent correctement avant d'ajouter des tests plus précis.

---

# tests unitaires - back-end - configuration

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

# tests unitaires - back-end - premier test

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

TODO expliquer le contenu du fichier `index.test.ts` et comment il teste le démarrage du serveur et la disponibilité des routes.
-->
---

# tests unitaires - back-end - couverture de code

La couverture de code permet de savoir quelles parties du code sont testées et quelles parties ne le sont pas. Nous allons donc configurer Vitest pour générer un rapport de couverture de code et voir quelles parties du back-end sont couvertes par les tests unitaires.

Il est aussi possible d'exécuter les tests unitaires directement depuis l'IDE Visual Studio Code avec possibilité de voir la couverture de code directement dans l'éditeur.
---

# tests unitaires - back-end - couverture de code - configuration

Modifier le script de test dans `package.json` pour générer un rapport de couverture de code.

```json
    ...
    "test": "vitest run --coverage",
    ...
```

Ajouter la dépendance `@vitest/coverage-v8` pour générer le rapport de couverture de code.

```bash
npm install --save-dev @vitest/coverage-v8
```

Exécuter la commande `npm test` pour générer le rapport de couverture de code.

```bash
npm test
```

Ignorer le répertoire `coverage` dans le contrôle de version en ajoutant la ligne suivante dans `.gitignore`.

```bash
echo "coverage" >> .gitignore
```

---

# tests unitaires - back-end - couverture de code

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
All files     |   39.39 |       10 |       0 |   39.39 |                   
 config.ts    |      75 |       50 |     100 |      75 | 10                
 constants.ts |     100 |      100 |     100 |     100 |                   
 index.ts     |      25 |        0 |       0 |      25 | 14,20-56,62-63,68 
 utils.ts     |      50 |      100 |       0 |      50 | 9                 
--------------|---------|----------|---------|---------|-------------------

```

---

# tests unitaires - back-end - couverture de code

Nous avons une couverture de code minimale pour le back-end, mais nous allons maintenant pouvoir refactorer le code pour déplacer les routes dans un fichier séparé, les tests unitaires existant nous permettant de vérifier que le code fonctionne toujours correctement après le refactoring. 

---

# refactoring du back-end - suppression de la route `/`

Dans un premier temps nous pouvoons supprimer la route `/` qui ne sert à rien. Le test unitaire existant ne doit plus passer après cette modification, ce qui est normal. Nous allons donc modifier le test unitaire pour qu'il ne teste plus la route `/` et qu'il teste uniquement les routes `/api/movies/popular` et `/api/health`.

---

# refactoring du back-end - health-api

Créer un fichier `src/back-end/health-api.ts` pour y déplacer la route `/api/health`.

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

Modifier le fichier `src/back-end/index.ts` pour y importer la fonction `registerHealthApi` et l'appeler pour enregistrer la route `/api/health`.

```ts
...
// Define the port number for the server to listen on
const port: number = 3000;

// Register API routes from dedicated modules
registerHealthApi(app);

...
```

Les tests unitaires existants doivent toujours passer après cette modification, ce qui est normal. Nous avons donc refactoré le code du back-end pour améliorer la maintenabilité et la lisibilité du code, tout en conservant les tests unitaires existants pour vérifier que le code fonctionne toujours correctement.

---

# refactoring du back-end - movies-api

Appliquer le même principe pour la route `/api/movies/popular` en créant un fichier `src/back-end/movies-api.ts` pour y déplacer la route.

Vérifier que les tests unitaires passent toujours après cette modification.

---

# refactoring du back-end

Pousser la branche `feature/refactoring-backend` sur le dépôt distant et créer une pull request vers `develop`.

Nous avons refactoré le code du back-end pour améliorer la maintenabilité et la lisibilité du code et nous avons ajouté des tests unitaires permettant de vérifier que nous n'avons pas de régression lors de la modification du code, pour l'instant uniquement sur la disponibilité des endpoints, mais nous irons plus loin dans les tests unitaires pour tester le contenu des réponses des endpoints plus tard.

Il serait intéressant que la phase de tests unitaires soit automatisée dans le pipeline d'intégration continue pour éviter de merger du code non testé sur la branche `develop`. Nous verrons comment faire.

---

# ci - back-end - tests unitaires

TODO expliquer comment configurer le pipeline d'intégration continue pour exécuter les tests unitaires du back-end à chaque push sur la branche `develop` et à chaque pull request vers `develop`, et comment protéger la branche `develop` pour éviter de merger du code non testé.