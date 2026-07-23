<template>
  <div class="slidev-layout cover tmdb-hero-layout">
    <div class="tmdb-hero-grid"></div>
    <div class="tmdb-hero-glow tmdb-hero-glow-a"></div>
    <div class="tmdb-hero-glow tmdb-hero-glow-b"></div>

    <section class="tmdb-hero-card">
      <div class="tmdb-hero-stripe"></div>
      <div class="tmdb-hero-content">
        <slot />
      </div>
    </section>
  </div>
</template>

<style>

/* Fond commun du deck quand le template tmdb-hero est utilisé */
.slidev-layout {
  background: linear-gradient(140deg, #f7fbff 0%, #eef6ff 48%, #e8f7f5 100%);
}

html.dark .slidev-layout,
body.dark .slidev-layout,
.dark .slidev-layout,
[data-theme='dark'] .slidev-layout {
  background: linear-gradient(135deg, #0b1220 0%, #13233b 55%, #0f4c5c 100%);
}

.tmdb-hero-layout {
  --hero-text: #0f172a;
  --hero-kicker: #33516b;
  --hero-title-shadow: rgba(148, 163, 184, 0.3);
  --hero-bg: linear-gradient(140deg, #f7fbff 0%, #eef6ff 48%, #e8f7f5 100%);
  --hero-card-bg: rgba(255, 255, 255, 0.72);
  --hero-card-border: rgba(148, 163, 184, 0.38);
  --hero-stripe: linear-gradient(90deg, #0ea5e9, #14b8a6, #22c55e);
  --hero-grid-line: rgba(51, 65, 85, 0.08);

  position: relative;
  overflow: hidden;
  color: var(--hero-text);
  background: var(--hero-bg);
  display: grid;
  place-items: center;
  padding: 2.2rem;
}

html.dark .tmdb-hero-layout,
body.dark .tmdb-hero-layout,
.dark .tmdb-hero-layout,
[data-theme='dark'] .tmdb-hero-layout {
  --hero-text: #f8fafc;
  --hero-kicker: rgba(226, 232, 240, 0.9);
  --hero-title-shadow: rgba(2, 6, 23, 0.42);
  --hero-bg: linear-gradient(135deg, #0b1220 0%, #13233b 55%, #0f4c5c 100%);
  --hero-card-bg: rgba(15, 23, 42, 0.4);
  --hero-card-border: rgba(100, 116, 139, 0.55);
  --hero-stripe: linear-gradient(90deg, #38bdf8, #2dd4bf, #4ade80);
  --hero-grid-line: rgba(148, 163, 184, 0.11);
}

.tmdb-hero-grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(to right, var(--hero-grid-line) 1px, transparent 1px),
    linear-gradient(to bottom, var(--hero-grid-line) 1px, transparent 1px);
  background-size: 36px 36px;
  mask-image: radial-gradient(circle at center, black 32%, transparent 95%);
}

.tmdb-hero-glow {
  position: absolute;
  border-radius: 999px;
  filter: blur(40px);
  pointer-events: none;
}

.tmdb-hero-glow-a {
  width: 28rem;
  height: 28rem;
  top: -9rem;
  left: -7rem;
  background: rgba(14, 165, 233, 0.22);
}

.tmdb-hero-glow-b {
  width: 24rem;
  height: 24rem;
  right: -6rem;
  bottom: -7rem;
  background: rgba(20, 184, 166, 0.18);
}

.tmdb-hero-card {
  position: relative;
  z-index: 1;
  width: min(92ch, calc(100vw - 3.2rem));
  border: 1px solid var(--hero-card-border);
  border-radius: 1.1rem;
  background: var(--hero-card-bg);
  backdrop-filter: blur(8px);
  box-shadow:
    0 20px 40px rgba(15, 23, 42, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.34);
  overflow: hidden;
}

.tmdb-hero-stripe {
  height: 5px;
  background: var(--hero-stripe);
}

.tmdb-hero-content {
  padding: 1.45rem 1.6rem 1.35rem;
}

.tmdb-hero-content h1 {
  margin: 0;
  font-size: clamp(1.18rem, 1.55vw, 1.55rem);
  letter-spacing: 0.005em;
  line-height: 1.1;
  white-space: nowrap;
  text-wrap: nowrap;
  text-shadow: 0 8px 24px var(--hero-title-shadow);
}

.tmdb-hero-content .hero-kicker {
  margin: 0.75rem 0 0;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--hero-kicker);
}

@media (max-width: 900px) {
  .tmdb-hero-layout {
    padding: 1.2rem;
  }

  .tmdb-hero-content {
    padding: 1.2rem 1.1rem 1.05rem;
  }

  .tmdb-hero-content h1 {
    white-space: normal;
    text-wrap: balance;
  }

  .tmdb-hero-content .hero-kicker {
    letter-spacing: 0.08em;
  }
}
</style>
