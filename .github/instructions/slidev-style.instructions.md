---
applyTo: "slides/decks/*.md"
---

# Copilot Instructions - Style de rédaction des slides (Slidev)

## Objectif
Rédiger des slides pédagogiques clairs, courts et progressifs, dans le même style que le deck `tmdb-discovery-0.1.0` et les slides récemment harmonisées de `tmdb-discovery-0.2.0`.

## Structure attendue par slide
- Utiliser une structure en points clés, facile à lire à l'oral.
- Favoriser les formats suivants selon le contexte :
  - `Objectif / Solution`
  - `Étape 1 / Étape 2 / Étape 3`
  - `Règles / Exemples`
  - `Résultat attendu`
- Garder une progression logique entre slides : contexte -> action -> vérification.

## Règles de lisibilité
- Privilégier des phrases courtes.
- Éviter les longs paragraphes explicatifs.
- Transformer les explications en listes à puces quand possible.
- Limiter chaque puce à une idée.
- Réduire les répétitions.
- Mettre en avant les mots-clés importants en gras avec parcimonie.

## Commandes et blocs de code
- Conserver les commandes shell/TypeScript existantes quand elles sont correctes.
- Encadrer les commandes avec des blocs fenced code (```bash, ```shell, ```typescript).
- Ajouter une courte phrase d'intention avant un bloc de commande si nécessaire.
- Ne pas modifier une commande juste pour reformuler le texte autour.

## Style éditorial
- Ton pédagogique, concret, orienté pratique.
- Expliquer le "pourquoi" en une ligne, pas en paragraphe long.
- Préférer des formulations d'action : "Créer", "Configurer", "Vérifier", "Valider".
- Utiliser un vocabulaire cohérent d'un slide à l'autre.

## Cohérence Slidev
- Conserver les séparateurs `---` entre slides.
- Ne pas casser la structure Markdown (titres, blocs de code, listes).
- Vérifier qu'aucun séparateur de slide n'est supprimé lors d'une réécriture.

## Exemples de patterns à reproduire
- "- Étape 1 : ..."
- "- Étape 2 : ..."
- "- Résultat attendu : ..."
- "- Outil : ..."
- "- Objectif : ..."

## À éviter
- Paragraphes trop longs.
- Puces qui mélangent plusieurs idées.
- Texte redondant entre deux slides consécutifs.
- Modifications inutiles des snippets techniques.

## Mode strict (obligatoire pour les nouveaux slides)
- Chaque slide doit utiliser un seul gabarit principal.
- Maximum 6 puces par slide (hors sous-puces de code/exemple).
- Maximum 2 niveaux de listes.
- Une seule idée pédagogique par puce.
- Si une commande est présente, ajouter le résultat attendu en une ligne.

## Gabarits obligatoires par type de slide

### 1) Slide concept
Utiliser ce format :
- Objectif : ...
- Définition : ...
- Pourquoi c'est utile : ...
- Exemple rapide : ...

### 2) Slide procédure
Utiliser ce format :
- Étape 1 : ...
- Étape 2 : ...
- Étape 3 : ...
- Résultat attendu : ...

### 3) Slide commande unique
Utiliser ce format :
- Objectif : ...
- Commande :
  - bloc de code
- Vérification : ...

### 4) Slide bonnes pratiques
Utiliser ce format :
- Règle 1 : ...
- Règle 2 : ...
- Règle 3 : ...
- Anti-pattern à éviter : ...

### 5) Slide validation/contrôle
Utiliser ce format :
- Test à exécuter : ...
- Commande : ...
- Résultat attendu : ...
- En cas d'échec : ...

## Checklist de fin de rédaction
- Le slide est lisible en moins de 20 secondes.
- Les puces commencent par un verbe d'action ou un nom explicite.
- Le bloc de code (si présent) est immédiatement compréhensible.
- Le séparateur `---` est présent et correctement placé.
- Aucune répétition inutile avec le slide précédent.
