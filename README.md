# support-cours-2026-2027

Depot de supports de cours.

Le projet Slidev est dans `slides/`.

## Lancer le projet

```bash
cd slides
npm install
npm run dev
```

## Ajouter un nouveau support

1. Creer un fichier `slides/decks/mon-cours.md`.
2. Lancer `npm run dev:deck -- decks/mon-cours.md`.


# TODO

Contenu des supports de cours à compléter.

- 0.4.0: A finir
- 0.5.0: 
    - ajouter des paramètres lors de l'appel de l'API TMDB pour récupérer les films populaires (langue, page, ...)
    - pouvoir passer les paramètres de l'API TMDB via l'URL (query params)
    - lint 

- 1.0.0
    - première version fonctionnelle de l'application
    - Parle du semver, de la gestion de versions et du versionning (voir prez marvel-app-0.1.0)
