---
theme: seriph
title: Catalogue des supports 2026-2027
info: |
  ## Supports de cours

  Point d'entree du projet Slidev pour les presentations.
class: text-center
duration: 5min
---

# Supports de Cours 2026-2027

Ce projet contient plusieurs presentations Slidev, une par fichier Markdown.

## Decks disponibles

- Introduction a l'algorithmique: `decks/algo-introduction.md`
- Initiation HTML/CSS: `decks/web-html-css.md`

## Commandes utiles

- Lancer ce deck d'accueil: `npm run dev`
- Lancer un deck specifique: `npm run dev:deck -- decks/mon-cours.md`
- Export PDF d'un deck: `npm run export:deck -- decks/mon-cours.md`

---

# Structure recommandee

Conservez un fichier par support de cours dans le dossier `decks/`.

Exemple:

```txt
decks/
  algo-introduction.md
  web-html-css.md
  reseaux-bases.md
```
