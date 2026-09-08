---
theme: seriph
title: Supports de cours 2026-2027
info: |
  ## Supports de cours

  Point d'entrée du projet Slidev pour les présentations.
duration: 5min
---

<div class="landing-list">

# Supports de cours 2026-2027

<p class="landing-kicker">TMDB Discovery App · Développement logiciel et web</p>

<nav class="landing-nav" aria-label="Navigation des supports">
  <a class="landing-link" href="./presentation/">
    <span class="landing-link-title">Présentation</span>
    <span class="landing-link-meta">Objectifs, organisation et outils du cours</span>
  </a>
  <a class="landing-link" href="./architecture-logicielle/">
    <span class="landing-link-title">Architecture logicielle</span>
    <span class="landing-link-meta">Structure et organisation de l'application</span>
  </a>
</nav>

<section class="versions-section">
  <h2>Versions</h2>
  <ul class="versions-list">
    <li><a href="./tmdb-discovery-0.1.0/">0.1.0</a></li>
    <li><a href="./tmdb-discovery-0.2.0/">0.2.0</a></li>
    <!--
    <li><a href="./tmdb-discovery-0.4.0/">Version 0.4.0</a></li>
    <li><a href="./tmdb-discovery-0.5.0/">Version 0.5.0 <span class="version-note">Dernière passe sur le titre</span></a></li>
    <li><a href="./tmdb-discovery-0.6.0/">Version 0.6.0 <span class="version-note">En cours de réalisation</span></a></li> -->
  </ul>
</section>

</div>

<footer class="slide-footer">alexandre.girard@maif.fr</footer>

<style>
.slidev-layout {
  background: linear-gradient(140deg, #f7fbff 0%, #eef6ff 48%, #e8f7f5 100%);
}

.landing-list {
  width: min(92ch, calc(100vw - 3.2rem));
  margin: 0 auto;
  padding: 1.45rem 1.6rem 1.35rem;
  border-top: 5px solid;
  border-image: linear-gradient(90deg, #0ea5e9, #14b8a6, #22c55e) 1;
  border-radius: 1.1rem;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.16);
  color: #0f172a;
}

.landing-list h1 {
  margin: 0;
  font-size: clamp(1.45rem, 2.8vw, 2.2rem);
}

.landing-kicker {
  margin: 0.7rem 0 1.35rem;
  color: #33516b;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}

.landing-nav {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.8rem;
  margin-bottom: 1.25rem;
}

.landing-link {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.8rem 0.95rem;
  border: 1px solid rgba(148, 163, 184, 0.42);
  border-left: 4px solid #14b8a6;
  border-radius: 0.65rem;
  background: rgba(255, 255, 255, 0.58);
  color: #0f172a;
  text-decoration: none;
  transition: transform 160ms ease, background 160ms ease, box-shadow 160ms ease;
}

.landing-link:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.1);
}

.landing-link-title {
  font-size: 1.05rem;
  font-weight: 700;
}

.landing-link-meta {
  color: #475569;
  font-size: 0.78rem;
}

.versions-section {
  border-top: 1px solid rgba(148, 163, 184, 0.42);
  padding-top: 0.85rem;
}

.versions-section h2 {
  margin: 0 0 0.5rem;
  color: #0f172a;
  font-size: 1rem;
}

.versions-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.35rem 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.versions-list a {
  color: #0f766e;
  font-size: 0.86rem;
  text-decoration: none;
}

.versions-list a:hover {
  text-decoration: underline;
}

.version-note {
  color: #64748b;
  font-size: 0.72rem;
}

.slide-footer {
  position: absolute;
  right: 1.2rem;
  bottom: 0.8rem;
  font-size: 0.78rem;
  color: #475569;
}

@media (max-width: 900px) {
  .landing-nav,
  .versions-list {
    grid-template-columns: 1fr;
  }
}
</style>
