---
theme: seriph
title: Architecture logicielle - TMDB Discovery App
duration: 2h
routerMode: hash
---

# Architecture logicielle

## TMDB Discovery App

---

# Objectifs

- Construire une application web de découverte TMDB : films, séries, acteurs, réalisateurs et statistiques.
- Livrer rapidement une première version fonctionnelle.
- Mettre en place une architecture évolutive pour accueillir les fonctionnalités à venir.
- Avancer en mode **agile** : itérations courtes, valeur livrée en continu, adaptation au changement.

---

# Architecture logicielle

## Architecture logicielle d'une application web

- Une application web s'organise généralement en 3 couches : **front-end**, **back-end**, **données**.
    - Le **front-end** est l'interface utilisateur, ce que l'utilisateur voit et avec quoi il interagit.
    - Le **back-end** est le moteur de l'application, il traite les données et fournit les informations au front-end.
    - La couche **données** est le stockage des informations, souvent une base de données.



## Architecture logicielle de TMDB Discovery App

- Pour TMDB Discovery, nous retenons un duo **front-end + back-end**.
- Le **back-end** interroge l'API TMDB et expose les données utiles au **front-end**.
- Pas de base locale dans cette version : l'API TMDB fait office de source de données.

---

# Architecture logicielle - front-end

Afin de ne pas réinventer la roue, nous utilisons des librairies et frameworks spécialisés pour le développement web. En effet, le développement web est un domaine très vaste et complexe, et il est difficile de tout maîtriser. Les librairies et frameworks permettent de se concentrer sur la logique métier de l'application plutôt que sur les détails techniques du développement web.

Les contraintes du développement web sont nombreuses : compatibilité avec les différents navigateurs, performance, accessibilité, sécurité, etc. Les librairies et frameworks permettent de gérer ces contraintes de manière efficace et de se concentrer sur la valeur ajoutée de l'application.

---

# Architecture logicielle - front-end (suite)

Actuellement, les librairies et frameworks les plus populaires pour le développement web sont:
* __React__ : une librairie JavaScript développée par Facebook pour construire des interfaces utilisateurs
* __Angular__ : un framework JavaScript développé par Google pour construire des applications web
* __Vue.js__ : un framework JavaScript progressif pour construire des interfaces utilisateurs

---

# Architecture logicielle - front-end (suite)

## Google Trends (5 ans)

![Google Trends React Vite TypeScript sur 5 ans](./assets/google-trends-react-vite-typescript-5y.png)

---

# Architecture logicielle - front-end (suite)

## Différences entre librairie et framework

- Une **librairie** est un ensemble de fonctions et d'outils que l'on peut utiliser dans son code pour accomplir certaines tâches. On l'appelle quand on en a besoin.

- Un **framework** est un ensemble de règles et de structures que l'on doit suivre pour construire une application. Il impose une certaine architecture et un certain flux de travail.

---

# Architecture logicielle - front-end (suite)

## Pourquoi React ?

Sur le bassin Niortais, de nombreuses entreprises utilisent **React** pour leurs applications web. 

* **librairie** javascript développée par Facebook
* permet de construire des interfaces utilisateurs de manière déclarative et modulaire
* très populaire, utilisée par de nombreux sites web (Facebook, Instagram, Netflix, Airbnb...)
    * maintenue par une large communauté
    * nombreux tutoriels, exemples, articles
    * nombreux outils et librairies tierces

---

# Pourquoi Vite + TypeScript ?

- **On démarre plus vite** : Vite lance le projet instantanément et accélère les itérations en TP (HMR très réactif).
- **On fait moins d'erreurs** : TypeScript détecte tôt les incohérences avant l'exécution dans le navigateur.
- **On maintient mieux le projet** : code plus clair en équipe, refactorings plus sûrs, application plus robuste dans le temps.

---

# 

- **React** reste très recherché, avec une base d’adoption large.
- **TypeScript** maintient une dynamique solide et régulière.
- **Vite** progresse nettement sur la période, signe d'une adoption croissante des outils front-end modernes.
