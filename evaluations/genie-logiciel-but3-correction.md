# Correction — Principes de génie logiciel (BUT 3)

### Barème général

- Questions à 1 point : **2, 6, 8, 10, 13, 14, 18 et 19** = **8 points**.
- Les 24 autres questions valent **0,5 point chacune** = **12 points**.
- Une seule réponse exacte par question; pas de point partiel.
- Total : **20 points**.

### Réponses aux QCM

1. **B** — Git est le système de gestion de versions; GitHub est une plateforme qui s’appuie sur Git et ajoute notamment des outils de collaboration.
2. **B** — `git add` prépare les changements dans l’index, `git commit` les enregistre dans l’historique local et `git push` transmet les commits au dépôt distant.
3. **C** — `.gitignore` écarte du suivi des fichiers générés ou locaux; le versionner permet de partager les règles d’exclusion.
4. **A** — Un commit atomique porte un changement cohérent.
5. **B** — Une branche permet d’isoler une ligne de développement jusqu’à sa validation/fusion.
6. **B** — Les branches de fonctionnalité sont intégrées à `develop`; `develop` est ensuite fusionnée vers `main` pour une livraison.
7. **B** — Une pull request propose les changements à la revue et à la discussion avant fusion.
8. **B** — La CI automatise les contrôles de formatage, lint et tests unitaires; les règles de protection de branche peuvent rendre ces contrôles obligatoires.
9. **A** — Un test unitaire vérifie une petite unité isolée.
10. **B** — La stratégie privilégie de nombreux tests unitaires, moins d’intégration et peu d’end-to-end, afin d’équilibrer confiance, rapidité et coût de maintenance.
11. **B** — Le tag marque un point/version; la branche porte une ligne de développement évolutive.
12. **C** — `commitlint` valide les messages de commit selon des règles de convention.
13. **B** — Le rebase réapplique les commits de la branche de travail sur la base de `develop`, ce qui permet notamment de la mettre à jour et de conserver un historique linéaire.
14. **C** — Un conflit doit être résolu avant la fusion; les changements et contrôles doivent ensuite être vérifiés.
15. **B** — Arrange prépare le contexte, Act exécute l’action, Assert vérifie le résultat.
16. **C** — Un mock remplace une dépendance réelle par une version contrôlée pour isoler le code testé.
17. **A** — Un test pertinent valide le comportement observable sans dépendre inutilement des détails d’implémentation.
18. **D** — Les E2E ont un coût d’exécution et de maintenance plus élevé; on les réserve surtout aux parcours critiques.
19. **B** — PATCH pour une correction compatible (`1.4.3`), MINOR pour une fonctionnalité compatible (`1.5.0`), MAJOR pour un changement incompatible (`2.0.0`).
20. **C** — `rc` signifie « release candidate », une version candidate à la publication finale.
21. **A** — `git status` affiche l’état du dépôt, dont les modifications et les fichiers non suivis.
22. **B** — `git pull` récupère les modifications distantes puis les intègre à la branche locale.
23. **C** — `node_modules/` contient des dépendances réinstallables à partir des fichiers de configuration; il n’est généralement pas versionné.
24. **B** — Une branche `feature` fusionnée peut être supprimée pour nettoyer les branches devenues inutiles.
25. **A** — Un message descriptif facilite la compréhension de l’historique.
26. **B** — La protection de branche peut empêcher la fusion tant que les contrôles CI requis ne passent pas.
27. **C** — Un test d’intégration vérifie les interactions entre composants.
28. **C** — Les tests doivent être déterministes et indépendants de l’état global ou de l’ordre d’exécution.
29. **B** — La couverture mesure le code exécuté, pas la pertinence des vérifications; les scénarios doivent rester significatifs.
30. **B** — L’approche agile privilégie les itérations courtes, la collaboration et l’adaptation aux retours.
31. **A** — Une version beta est une version de test avant la publication finale.
32. **B** — `1.0.0` est la première version stable dans le parcours présenté.
