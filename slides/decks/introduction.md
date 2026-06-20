---
theme: seriph
title: Introduction
class: intro-slide text-left
duration: 2h
background: ./fond-amif.jpg
---

# Alexandre GIRARD

## Conseiller en Nouvelles Technologies

### alexandre.girard@maif.fr

<style>
.intro-slide {
  position: relative;
}

/* Assombrit legerement le fond via un voile noir (25%) */
.intro-slide::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  pointer-events: none;
}

.intro-slide > * {
  position: relative;
  z-index: 1;
}

/* Slide 2: diagramme centre et agrandi sans deformation */
.forge-slide {
  display: flex;
  flex-direction: column;
}

.forge-mermaid {
  flex: 1 1 auto;
  min-height: 0;
  display: grid;
  place-items: center;
}

.forge-mermaid pre {
  width: 100%;
  height: 100%;
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  background: transparent !important;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.forge-mermaid .mermaid {
  width: min(100%, 1400px);
  margin: 0 auto;
}

.forge-mermaid .mermaid svg {
  display: block;
  margin: 0 auto;
  width: 100% !important;
  height: auto !important;
  max-height: 100%;
}
</style>

---
class: forge-slide
---

# Gestion de la forge logicielle

Ensemble des outils pour le développement logiciel mis à la disposition des équipes de développement 

* __GitHub__ : gestion des dépôts de code source (versionning, pull request, issues)
* __Jenkins__ : intégration continue (exécution des tests, compilation, déploiement)
* __SonarQube__ : qualité du code (analyse statique, couverture de tests, détection de vulnérabilités)
* __Nexus__ : gestion des artefacts (dépendances, librairies, packages) 

<div class="forge-mermaid">

```mermaid
%%{init: {"flowchart": {"useMaxWidth": true}}}%%
flowchart LR
    GH@{ img: "./logos/github.svg", label: "GitHub", pos: "t", h: 48, constraint: "on" }
    JENKINS@{ img: "./logos/jenkins.svg", label: "Jenkins", pos: "t", h: 48, constraint: "on" }
    SONAR@{ img: "./logos/sonarqube.svg", label: "SonarQube", pos: "t", h: 48, constraint: "on" }
    NEXUS@{ img: "./logos/nexus.svg", label: "Nexus", pos: "t", h: 48, constraint: "on" }

    GH -->|Push / Pull Request| JENKINS
    JENKINS -->|Analyse qualite| SONAR
    SONAR -->|Quality Gate| JENKINS
    JENKINS -->|Publie artefacts| NEXUS
    NEXUS -->|Dependances / artefacts| JENKINS
```

</div>

---

# Organisation du cours (Regroupement de 2 modules)

## __Développement logiciel__
Présenter les approches et les outils qui permettent de mener à bien un projet informatique

## __Développement web__
Programmation web pour la visualisation de données

# 24 séances de 2H
Mélangeant de la théorie et surtout beaucoup de pratique pour mettre en application les concepts abordés

---

# Objectifs

## **Mettre en place une application web en suivant les bonnes pratiques de développement**

Les technologies utilisées sont celles actuellement utilisées dans le monde professionnel.

 L'objectif est de vous:
 * __préparer__ au mieux pour votre future insertion professionnelle.
 * __donner__ les bases pour que vous puissiez continuer à apprendre par vous-même par la suite. Les technologies évoluent très vite, il est important de __savoir s'adapter__.
 * __vous faire découvrir__ les outils et les pratiques qui sont utilisés dans le monde professionnel.
 * __s'ensibiliser__ sur l'usage de l'Intelligence Artificielle dans le développement logiciel, ce quelle apporte comme opportunités et les risques associés.

---

# Application développée

Exploration de l'API de The Movie Database (TMDB) pour découvrir les films et séries populaires, les détails des films, les acteurs et les réalisateurs.

<div class="grid grid-cols-2 gap-4 mt-4">
  <img src="./tmdb-discovery-1.png" alt="Capture statistiques des films" class="w-full rounded-lg border border-slate-200" />
  <img src="./tmdb-discovery-2.png" alt="Capture films populaires" class="w-full rounded-lg border border-slate-200" />
</div>

---

# Concepts manipulés

* __agilité__ : méthode de développement
* __développement web__ : html, css, javascript, react
* __aide au développement__: github copilot, eslint, prettier
* __travail collaboratif__: git, github
* __tests unitaires, tests d'intégration__: jest, playwright
* __intégration continue__: github actions
* __déploiement continu__: github actions
* __documentation__: markdown, mkdocs
* __qualimétrie__: sonarqube
