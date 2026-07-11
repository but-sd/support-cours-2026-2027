---
theme: seriph
title: Back-end - TMDB Discovery App
duration: 2h
routerMode: hash
---

# TMDB Discovery App - 0.3.0

---

# Objectifs
    
## Application

- amélioration du end point REST pour récupérer les films populaires via l'**API TMDB**

## Ingénierie logicielle

- notion de branche Git

---

# Films populaires (/api/movies/popular) (suite) - TODO à partir d'ici
 
Ajout d'un type pour la réponse de l'API TMDB afin d'améliorer la sécurité et la lisibilité du code. 

Nous allons créer un fichier `MoviesTypes.ts` dans le dossier `src/back-end/schemas` pour définir les types utilisés pour consommer les films depuis l'API TMDB.

Nous allons modifier la réponse de l'API TMDB afin de supprimer les champs inutiles et ne garder que les informations pertinentes pour notre application. Cela permettra de réduire la quantité de données transférées et d'améliorer les performances de l'application.

----

```typescript
// TypeScript type for the raw response from the TMDB API for popular movies.
export type TmdbMoviesRawResponse = {
  page: number;
  results: Array<TmdbMovie & { video?: boolean }>;
  total_pages: number;
  total_results: number;
};

// TypeScript type for the raw response from the TMDB API for popular movies.
export type TmdbMovie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number
};
```

----

```typescript
// TypeScript type for the API response when fetching movies, containing an array of supported Movie objects.
export type MoviesApiResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};


// TypeScript type for the supported movie format used in our application, omitting 'adult' and 'video' properties from the TmdbMovie type.
export type Movie = Omit<TmdbMovie, 'adult' | 'video'>;


// TypeScript type for the API response when fetching popular movies, containing an array of supported Movie objects.
export type ApiErrorResponse = {
  error: string;
};

````

----

# Films populaires (/api/movies/popular) (suite)

Ajout d'une fonction utilitaire pour transformer les films bruts de l'API TMDB en films supportés par notre application. Cette fonction prend un film brut de l'API TMDB et retourne un objet Movie avec uniquement les propriétés pertinentes.

```typescript
const toSupportedMovie = (movie: TmdbMoviesRawResponse['results'][number]): Movie => {
  return {
    backdrop_path: movie.backdrop_path,
    genre_ids: movie.genre_ids,
    id: movie.id,
    original_language: movie.original_language,
    original_title: movie.original_title,
    overview: movie.overview,
    popularity: movie.popularity,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
    title: movie.title,
    vote_average: movie.vote_average,
    vote_count: movie.vote_count
  };
};
```

----

# Films populaires (/api/movies/popular) (suite)

Nous allons maintenant modifier notre endpoint `/api/movies/popular` pour utiliser la fonction `toSupportedMovie` afin de transformer les films bruts de l'API TMDB en films supportés par notre application avant de les renvoyer au client.

```typescript
      ...

      // Parse the raw response from the TMDB API
      const rawData = (await response.json()) as TmdbMoviesRawResponse;

      // Transform the raw data into the supported format for our application
      const data: MoviesApiResponse = {
        page: rawData.page,
        results: rawData.results.map(toSupportedMovie),
        total_pages: rawData.total_pages,
        total_results: rawData.total_results
      };

      // Send the transformed data as a JSON response
      res.json(data);

      ...

```

----

# Films populaires (/api/movies/popular) (suite)

Après avoir validé que le serveur fonctionne correctement et que l'endpoint `/api/movies/popular` renvoie les films populaires depuis l'API TMDB en ayant transformé les données brutes en films supportés par notre application, nous pouvons maintenant commiter ces modifications et les pousser vers le dépôt distant sur GitHub pour sauvegarder notre travail.


