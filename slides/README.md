# Slidev - Supports de cours

Ce dossier contient le projet Slidev pour gerer plusieurs presentations de cours.

## Demarrage

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3030.

## Utilisation multi-supports

- Un deck = un fichier Markdown dans `decks/`
- Lancer un deck existant:

```bash
npm run dev:deck -- decks/algo-introduction.md
```

## Scripts utiles

- `npm run dev` : deck d'accueil (`slides.md`)
- `npm run dev:algo` : support algorithmique
- `npm run dev:web` : support HTML/CSS
- `npm run dev:deck -- decks/mon-cours.md` : deck au choix
- `npm run export:deck -- decks/mon-cours.md` : export PDF

## Structure

```txt
slides/
  decks/
  slides.md
  package.json
```
