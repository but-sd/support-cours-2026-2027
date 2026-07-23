<template>
  <div class="slidev-layout cover tmdb-hero-layout">
    <div class="tmdb-hero-overlay"></div>
    <div class="tmdb-hero-content">
      <slot />
    </div>
  </div>
</template>

<style>
.tmdb-hero-layout {
  --hero-text: #0f172a;
  --hero-kicker: #1e3a56;
  --hero-title-shadow: rgba(148, 163, 184, 0.35);
  --hero-bg:
    linear-gradient(135deg, #f8fbff 0%, #eef6ff 52%, #e8f7f5 100%);
  --hero-overlay:
    radial-gradient(circle at 18% 22%, rgba(14, 116, 144, 0.18), transparent 38%),
    radial-gradient(circle at 82% 12%, rgba(13, 148, 136, 0.15), transparent 34%),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.16), rgba(226, 232, 240, 0.34));

  position: relative;
  overflow: hidden;
  color: var(--hero-text);
  background: var(--hero-bg);
}

html.dark .tmdb-hero-layout,
body.dark .tmdb-hero-layout,
.dark .tmdb-hero-layout,
[data-theme='dark'] .tmdb-hero-layout {
  --hero-text: #f8fafc;
  --hero-kicker: rgba(226, 232, 240, 0.92);
  --hero-title-shadow: rgba(2, 6, 23, 0.45);
  --hero-bg:
    linear-gradient(135deg, #0b1220 0%, #13233b 55%, #0f4c5c 100%);
  --hero-overlay:
    radial-gradient(circle at 18% 22%, rgba(56, 189, 248, 0.24), transparent 35%),
    radial-gradient(circle at 82% 12%, rgba(20, 184, 166, 0.20), transparent 32%),
    linear-gradient(to bottom, rgba(15, 23, 42, 0.08), rgba(15, 23, 42, 0.38));
}

.tmdb-hero-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: var(--hero-overlay);
}

.tmdb-hero-content {
  position: relative;
  z-index: 1;
}

.tmdb-hero-content h1 {
  margin-bottom: 0.45rem;
  font-size: 2.35rem;
  letter-spacing: 0.01em;
  text-shadow: 0 8px 24px var(--hero-title-shadow);
}

.tmdb-hero-content .hero-kicker {
  margin: 0;
  font-size: 0.96rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--hero-kicker);
}
</style>
