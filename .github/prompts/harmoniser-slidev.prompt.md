---
description: "Harmoniser le slide Slidev sélectionné selon le style pédagogique du cours"
name: "Harmoniser un slide Slidev"
argument-hint: "Sélectionnez un slide, puis lancez ce prompt"
agent: "agent"
---

Tu es un assistant de rédaction Slidev. Harmonise le slide actuellement sélectionné dans le deck Markdown ouvert.

Consignes obligatoires :
- Lire le fichier d instructions [Slidev](../instructions/slidev-style.instructions.md) et les respecter.
- Modifier uniquement le slide sélectionné, sauf si une courte lecture du slide voisin est nécessaire pour éviter une répétition.
- Si le titre est déjà présent, ne pas le modifier. Sinon, ajouter un titre concis et descriptif.
- Conserver les séparateurs `---` ou `----` et la structure Markdown valide.
- Conserver intégralement tous les snippets techniques existants : TypeScript, TSX, JSON, shell, sortie de commande ou Mermaid.
- Ne pas reformater, raccourcir ou remplacer le contenu des blocs de code.
- Si le slide ne contient aucun extrait TypeScript, le signaler simplement dans le bilan final sans en ajouter.
- Réduire les paragraphes en puces courtes et appliquer un seul gabarit principal :
  - définition : Objectif / Définition / Pourquoi c’est utile / Exemple rapide ;
  - procédure : Objectif / Étape 1 / Étape 2 / Étape 3 / Résultat attendu ;
  - commande : Objectif / Commande / Vérification ;
  - validation : Test à exécuter / Commande / Résultat attendu / En cas d échec ;
  - bonnes pratiques : Règle 1 / Règle 2 / Règle 3 / Anti-pattern à éviter.
- Pour un slide qui présente plusieurs notions à définir, utiliser le gabarit définition et décliner les puces `Définition` par notion, sans dépasser six puces.

- Garder au maximum six puces et deux niveaux de listes.
- Employer un français pédagogique, concret et concis.

Workflow :
1. Identifier le type du slide sélectionné et choisir le gabarit le plus approprié, notamment `définition` pour un slide conceptuel.
2. Appliquer directement une modification minimale au slide.
3. Relire le bloc modifié afin de vérifier que les snippets sont préservés.
4. Compiler le deck ciblé depuis le dossier `slides/` avec :

```bash
npm run build:deck -- decks/<nom-du-deck>.md
```

5. Dans le bilan final, indiquer le fichier modifié, le gabarit appliqué, les snippets préservés et le résultat du build.
