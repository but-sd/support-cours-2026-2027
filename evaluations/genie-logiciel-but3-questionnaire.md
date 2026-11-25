# Évaluation — Principes de génie logiciel (BUT 3)

**Durée :** 1 h · **Note :** /20\
**Nom :** ______________________________\

## Sujet étudiant

### Consignes

- Répondez à toutes les questions.
- Pour chaque QCM, cochez une seule réponse. Une réponse exacte vaut le nombre de points indiqué pour la question; une réponse erronée ou absente vaut 0 point.
- Aucune justification n’est demandée.
- Gestion du temps suggérée : 40 min pour répondre et 20 min pour relire.

### QCM — 32 questions (20 points)

**1. Quelle affirmation distingue correctement Git de GitHub ? (0,5 pt)**

A. Git est un service d’hébergement; GitHub est le système de gestion de versions distribué.\
B. Git est un système de gestion de versions; GitHub est un service en ligne qui l’utilise et ajoute des fonctions de collaboration.\
C. Git et GitHub désignent le même outil.\
D. Git ne fonctionne qu’avec GitHub.

**2. Quelle description du cycle local puis distant est correcte ? (1 pt)**

A. `git commit` prépare les fichiers, `git add` les envoie sur GitHub et `git push` crée une branche.\
B. `git add` prépare les changements, `git commit` les enregistre dans l’historique local et `git push` envoie les commits vers le dépôt distant.\
C. `git push` enregistre uniquement les fichiers dans l’historique local.\
D. `git status` enregistre automatiquement les fichiers modifiés.

**3. À quoi sert principalement un fichier `.gitignore` ? (0,5 pt)**

A. À supprimer les fichiers ignorés sur tous les postes.\
B. À remplacer les commits des fichiers générés.\
C. À indiquer à Git quels fichiers ne pas suivre; le fichier `.gitignore` peut lui-même être versionné pour partager ces règles.\
D. À empêcher tous les collaborateurs de créer des branches.

**4. Qu’est-ce qu’un commit atomique ? (0,5 pt)**

A. Un commit qui regroupe un changement cohérent, facile à comprendre et à relire.\
B. Un commit qui contient obligatoirement tous les fichiers du projet.\
C. Un commit qui publie automatiquement une version sur GitHub.\
D. Un commit qu’il est impossible d’annuler.

**5. Pourquoi développer une fonctionnalité sur une branche dédiée ? (0,5 pt)**

A. Pour éviter d’avoir besoin de commits.\
B. Pour travailler indépendamment sans modifier immédiatement la branche principale.\
C. Pour que les changements soient automatiquement validés par les tests.\
D. Pour remplacer le dépôt distant.

**6. Dans le workflow présenté, quel chemin correspond à l’intégration d’une fonctionnalité puis à une livraison ? (1 pt)**

A. `main` → branche `feature` → supprimer `develop`, sans fusion.\
B. Branche `feature` → `develop`, puis `develop` → `main` lors de la livraison.\
C. Branche `feature` → `main`, puis `main` → `develop` pour valider la livraison.\
D. Toutes les branches doivent être fusionnées directement entre elles.

**7. Quel est le rôle principal d’une pull request ? (0,5 pt)**

A. Remplacer les tests unitaires.\
B. Proposer des changements pour les faire relire et discuter avant leur fusion.\
C. Créer automatiquement une nouvelle branche `main`.\
D. Supprimer l’historique des commits de la branche source.

**8. Dans le cours, que vérifie la CI avant d’autoriser l’intégration dans `develop` ? (1 pt)**

A. Uniquement le nom du dépôt.\
B. Le formatage, le lint et les tests unitaires; la protection de branche peut exiger que ces contrôles passent.\
C. Que chaque commit ait été écrit par une seule personne.\
D. Que toutes les fonctionnalités soient déjà intégrées dans `main`.

**9. Vous testez isolément une fonction qui transforme la réponse de l’API en liste de films. Quel niveau de test est le plus adapté ? (0,5 pt)**

A. Test unitaire.\
B. Test end-to-end.\
C. Test de charge.\
D. Test de déploiement.

**10. Quelle organisation correspond à la pyramide des tests présentée ? (1 pt)**

A. Beaucoup de tests end-to-end, aucun test unitaire.\
B. Beaucoup de tests unitaires, moins de tests d’intégration et peu de tests end-to-end.\
C. Le même nombre de tests pour chaque niveau, sans tenir compte de leur coût.\
D. Uniquement des tests manuels.

**11. Quelle affirmation distingue un tag Git d’une branche ? (0,5 pt)**

A. Un tag est une branche de travail qui avance à chaque commit; une branche est une version figée.\
B. Un tag marque un point/version de l’historique; une branche sert de ligne de développement qui évolue.\
C. Un tag remplace le dépôt distant; une branche remplace les commits.\
D. Il n’existe aucune différence entre les deux.

**12. Quel est le rôle de `commitlint` dans le support ? (0,5 pt)**

A. Exécuter les tests end-to-end dans le navigateur.\
B. Empêcher la création de commits.\
C. Vérifier que les messages de commit respectent les conventions définies.\
D. Remplacer Git par GitHub.

**13. Une branche `feature/...` a été créée depuis `develop`, qui a depuis reçu de nouveaux commits. Quel est l’objectif de `git rebase develop` exécuté sur la branche `feature` ? (1 pt)**

A. Fusionner automatiquement la branche `feature` dans `main`.\
B. Réappliquer les commits de `feature` sur la version actuelle de `develop`, afin de mettre à jour la base de travail et conserver un historique linéaire.\
C. Supprimer tous les commits de `develop`.\
D. Envoyer les fichiers non commités directement sur GitHub.

**14. Une pull request signale un conflit parce que deux branches ont modifié les mêmes lignes. Que faut-il faire avant de terminer la fusion ? (1 pt)**

A. Ignorer le conflit et fusionner quand même; la CI le corrigera automatiquement.\
B. Supprimer la branche `develop` puis recommencer sur `main`.\
C. Résoudre les modifications conflictuelles, puis vérifier les changements et les contrôles avant de fusionner.\
D. Remplacer la pull request par un tag de version.

**15. Quelle suite décrit correctement l’organisation Arrange-Act-Assert d’un test ? (0,5 pt)**

A. Vérifier le résultat, préparer les données, exécuter le code.\
B. Préparer les données et le contexte, exécuter l’action testée, vérifier le résultat.\
C. Exécuter le code, vérifier le résultat, préparer les données.\
D. Préparer les données, vérifier le résultat, puis décider si le code doit être exécuté.

**16. Dans un test, qu’est-ce qu’un mock ? (0,5 pt)**

A. Une copie complète de l’application déployée en production.\
B. Un outil qui mesure automatiquement la vitesse du réseau.\
C. Un remplacement contrôlé d’une dépendance réelle, utile pour isoler le composant testé.\
D. Un commit spécial qui annule le résultat d’un test.

**17. Que signifie « tester le comportement plutôt que l’implémentation interne » ? (0,5 pt)**

A. Vérifier le résultat observable attendu sans lier inutilement le test à l’organisation interne du code.\
B. Tester uniquement le nombre de lignes de chaque fonction.\
C. Vérifier que les noms des variables internes ne changent jamais.\
D. Éviter de tester les cas limites pour que les tests restent stables.

**18. Pourquoi réserver les tests end-to-end aux parcours importants ? (1 pt)**

A. Ils remplacent tous les tests unitaires et d’intégration.\
B. Ils sont toujours plus rapides et plus faciles à maintenir que les tests unitaires.\
C. Ils ne testent que des fonctions isolées.\
D. Ils coûtent davantage en exécution et en maintenance; ils sont donc particulièrement utiles pour vérifier les parcours utilisateur critiques.

**19. Le projet est en version `1.4.2`. Quelle série de versions respecte SemVer ? (1 pt)**

A. Correction compatible : `1.5.0`; fonctionnalité compatible : `2.0.0`; changement incompatible : `1.4.3`.\
B. Correction compatible : `1.4.3`; fonctionnalité compatible : `1.5.0`; changement incompatible : `2.0.0`.\
C. Correction compatible : `2.0.0`; fonctionnalité compatible : `1.4.3`; changement incompatible : `1.5.0`.\
D. Chaque type de changement doit uniquement modifier le numéro PATCH.

**20. Dans une version telle que `1.0.0-rc`, que signifie le suffixe `rc` ? (0,5 pt)**

A. Une version alpha instable au tout début du développement.\
B. Le tag de distribution `latest`.\
C. Une release candidate, candidate à la version finale.\
D. Une correction de bogue compatible.

**21. À quoi sert la commande `git status` ? (0,5 pt)**

A. À afficher l’état des fichiers du dépôt, notamment les modifications et fichiers non suivis.\
B. À envoyer les commits vers le dépôt distant.\
C. À créer un tag de version.\
D. À fusionner automatiquement toutes les branches.

**22. Que fait principalement `git pull` ? (0,5 pt)**

A. Envoie les commits locaux vers le dépôt distant.\
B. Récupère les changements du dépôt distant et les intègre à la branche locale.\
C. Supprime les changements locaux non commités.\
D. Crée une pull request sur GitHub.

**23. Pourquoi le dossier `node_modules/` est-il généralement exclu du dépôt avec `.gitignore` ? (0,5 pt)**

A. Git ne sait pas versionner les dossiers.\
B. Il contient les sources originales du projet.\
C. Les dépendances peuvent être réinstallées à partir des fichiers de configuration; il n’est généralement pas utile de versionner ce dossier généré.\
D. GitHub interdit de stocker des fichiers JavaScript.

**24. Après la fusion d’une branche `feature` dans `develop`, quelle action de nettoyage est montrée dans le support ? (0,5 pt)**

A. Supprimer la branche `main`.\
B. Supprimer la branche `feature` devenue inutile.\
C. Supprimer tous les tags du dépôt.\
D. Réinitialiser l’historique de `develop`.

**25. Pourquoi rédiger un message de commit clair et descriptif ? (0,5 pt)**

A. Pour permettre de comprendre plus facilement les changements dans l’historique du projet.\
B. Pour éviter d’avoir à écrire des tests.\
C. Pour rendre le commit visible uniquement sur GitHub.\
D. Pour garantir qu’aucun conflit ne pourra survenir.

**26. Quel est l’objectif d’une règle de protection sur `develop` exigeant que les contrôles CI réussissent ? (0,5 pt)**

A. Autoriser les fusions même si les tests échouent.\
B. Éviter qu’un changement soit fusionné avant que les contrôles requis soient validés.\
C. Empêcher les développeurs de créer des branches `feature`.\
D. Remplacer les pull requests par des commits directs.

**27. Quel est l’objectif principal d’un test d’intégration ? (0,5 pt)**

A. Vérifier une fonction isolée sans ses dépendances.\
B. Vérifier qu’un parcours utilisateur complet fonctionne dans le navigateur.\
C. Vérifier les interactions entre plusieurs composants ou services.\
D. Mesurer uniquement le nombre de lignes exécutées.

**28. Quelle caractéristique rend une suite de tests plus fiable ? (0,5 pt)**

A. Chaque test dépend de l’ordre d’exécution des autres tests.\
B. Les tests modifient un état global partagé sans le réinitialiser.\
C. Un même scénario produit des résultats prévisibles dans les mêmes conditions, et les tests sont indépendants.\
D. Les tests passent uniquement lorsqu’ils sont exécutés sur le poste de leur auteur.

**29. Que garantit à lui seul un taux de couverture de code de 100 % ? (0,5 pt)**

A. Que tous les comportements sont correctement testés et qu’aucun bug n’existe.\
B. Rien à lui seul : il faut aussi vérifier la pertinence des scénarios et des assertions, notamment sur les cas critiques.\
C. Que l’application est sécurisée en production.\
D. Que tous les tests end-to-end sont inutiles.

**30. Quelle pratique correspond à l’approche agile présentée ? (0,5 pt)**

A. Définir toutes les fonctionnalités une fois pour toutes et ne jamais tenir compte des retours.\
B. Livrer par itérations courtes et adapter le produit selon les retours.\
C. Reporter tous les tests à la fin du projet.\
D. Éviter toute collaboration entre les membres de l’équipe.

**31. Que désigne une version préliminaire `beta` ? (0,5 pt)**

A. Une version de test avant la publication finale.\
B. Une correction compatible après la publication stable.\
C. Une version candidate immédiatement stable et définitive.\
D. Le nom d’une branche réservée aux tests unitaires.

**32. Dans le parcours de versions présenté, que représente `1.0.0` ? (0,5 pt)**

A. La première version alpha, réservée au développement initial.\
B. La première version stable du projet.\
C. Une version comportant obligatoirement une rupture d’API.\
D. Un tag qui ne peut pas pointer vers un commit.
