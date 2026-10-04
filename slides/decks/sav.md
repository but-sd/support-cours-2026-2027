---

# front-end - e2e - configuration

Installer Playwright pour les tests E2E :

```bash
npm install @playwright/test -D
```

resource : <a href="https://playwright.dev/docs/intro" target="_blank" rel="noopener noreferrer">Playwright documentation</a>

Ajouter le fichier config `playwright.config.ts` à la racine du projet TODO : ajouter le contenu du fichier config

Ajouter les scripts de test E2E dans le fichier `package.json` :

```json
{
  "scripts": {
    ...
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:e2e:codegen": "playwright codegen localhost:5173",
    ...
  }
}
```

<!--

**playwright*** est un framework de test E2E moderne pour les applications web. Il permet d’automatiser les interactions avec le navigateur et de vérifier le comportement de l’application comme un utilisateur réel.

Il permet de créer des tests qui seront exécutés dans différents navigateurs (Chromium, Firefox, WebKit) et offre des fonctionnalités avancées telles que la capture d’écran, l’enregistrement vidéo et le débogage interactif.

-->

---

# front-end - e2e - about page

- Objectif : vérifier que la page À propos est accessible et contient le contenu attendu.

`e2e/about.spec.ts`

```typescript
import { expect, test } from "@playwright/test";
import packageJson from "../package.json" with { type: "json" };

test("affiche la page about", async ({ page }) => {
  await page.goto("/about");

  await expect(page).toHaveTitle("themoviedb-discovery-app");
  await expect(page.getByRole("heading", { name: "À propos" })).toBeVisible();
  await expect(page.getByRole("link", { name: "À propos" })).toBeVisible();
  await expect(page.getByRole("contentinfo")).toContainText(
    new RegExp(`TMDB Discovery\\s*Version ${packageJson.version}`),
  );
});
```

---

`.gitignore`

```
node_modules/
.env
coverage

# Playwright
/test-results/
/playwright-report/
/blob-report/
/playwright/.cache/
/playwright/.auth/
```

npm run test:e2e

<!--

Le test E2E ci-dessus utilise Playwright pour vérifier que la page À propos de l'application est correctement affichée. Il navigue vers l'URL `/about`, vérifie le titre de la page, la présence du titre principal et du lien "À propos", ainsi que le contenu du pied de page qui doit inclure la version de l'application.

-->

---

# front-end - e2e - films page - détail

utiliser `test:e2e:codegen` et l'exemple de test généré pour créer un test E2E qui vérifie que la navigation vers la page de détail d'un film fonctionne correctement. Le test doit inclure les étapes suivantes :
1. Accéder à la page liste des films.
2. Cliquer sur un film spécifique pour accéder à sa page de détail.
3. Vérifier que la page de détail s'affiche correctement
4. Retourner à la page liste des films et vérifier que la navigation fonctionne correctement.

---

# front-end - e2e - films page - détail

Problème rencontré le contenu de la liste des films est lié à l'API TMDB des films populaires. Hors les films populaires changent régulièrement, ce qui rend le test E2E instable. Pour résoudre ce problème, il est recommandé de mocker la réponse de l'API pour les films populaires afin d'avoir un contenu stable et prévisible pour le test.

Playwright permet de mocker les réponses HTTP en interceptant les requêtes et en fournissant des réponses personnalisées. 

<!--

Faire une démo du mock.

-->
---