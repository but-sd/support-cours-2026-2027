---
theme: seriph
title: Supports de cours 2026-2027
info: |
  ## Supports de cours

  Point d'entrée du projet Slidev pour les présentations.
class: text-center
duration: 5min
---

# Supports de Cours 2026-2027

<p class="intro">Choisissez un support et ouvrez la présentation.</p>

<div class="deck-grid">
  <a class="deck-card" href="./introduction/">
    <span class="deck-tag">Deck</span>
    <strong>Introduction</strong>
    <small>Présentation générale du module</small>
  </a>

  <a class="deck-card" href="./algo-introduction/">
    <span class="deck-tag">Deck</span>
    <strong>Introduction à l'algorithmique</strong>
    <small>Bases, pseudo-code, conditions et boucles</small>
  </a>
</div>

<p class="hint">Liens relatifs compatibles GitHub Pages et exécution locale.</p>

<style>
.intro {
  margin: 0.25rem auto 1.5rem;
  opacity: 0.85;
  max-width: 42rem;
}

.deck-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  max-width: 860px;
  margin: 0 auto;
}

.deck-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.45rem;
  text-align: left;
  width: 100%;
  padding: 1rem 1.1rem;
  border-radius: 14px;
  border: 1px solid rgba(15, 23, 42, 0.15);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(241, 245, 249, 0.95));
  color: inherit;
  text-decoration: none;
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.08);
  transition: transform 120ms ease, box-shadow 120ms ease, border-color 120ms ease;
  cursor: pointer;
}

.deck-card:hover {
  transform: translateY(-2px);
  border-color: rgba(14, 116, 144, 0.42);
  box-shadow: 0 14px 24px rgba(15, 23, 42, 0.12);
}

.deck-card:focus-visible {
  outline: 3px solid rgba(14, 116, 144, 0.35);
  outline-offset: 2px;
}

.deck-tag {
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0.16rem 0.44rem;
  border-radius: 999px;
  background: rgba(14, 116, 144, 0.12);
  color: rgb(14, 116, 144);
}

.deck-card strong {
  font-size: 1.05rem;
}

.deck-card small {
  opacity: 0.78;
  line-height: 1.3;
}

.hint {
  margin-top: 1.2rem;
  font-size: 0.86rem;
  opacity: 0.76;
}

@media (max-width: 640px) {
  .deck-grid {
    gap: 0.75rem;
  }

  .deck-card {
    padding: 0.9rem 0.95rem;
  }
}
</style>
