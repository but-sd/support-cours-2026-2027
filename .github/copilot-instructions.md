# Copilot instructions for this repository

## Project scope and working directory

- The actual app lives in `slides/` (root `README.md` explicitly points there).
- Run Node commands from `slides/`, not from repository root.

## Build, run, export, and verification commands

From `slides/`:

- Install dependencies: `npm install` (CI uses `npm ci`)
- Run landing deck (`slides.md`): `npm run dev`
- Run a specific deck: `npm run dev:deck -- decks/<deck>.md`
- Build landing deck: `npm run build`
- Build a specific deck: `npm run build:deck -- decks/<deck>.md`
- Export landing deck (PDF/PNG/PPTX via Slidev): `npm run export`
- Export a specific deck: `npm run export:deck -- decks/<deck>.md`

Testing/linting:

- No dedicated test or lint scripts are currently defined in `slides/package.json`.

## High-level architecture

- This is a **Slidev multi-deck** repository:
  - `slides/slides.md` is the landing entry deck.
  - Course decks are markdown files in `slides/decks/`.
- Deck content and deck-specific assets are colocated under `slides/decks/` (images/logos are referenced with relative paths like `./fond-amif.jpg`, `./logos/...`).
- `slides/components/` holds Vue components available to slides (e.g. `Counter.vue`).
- `slides/snippets/` holds reusable TypeScript snippet sources (e.g. `external.ts`) for embedding in slides.
- `slides/pages/` contains imported-slide examples/documentation used by Slidev (`imported-slides.md`).

Deployment architecture (`.github/workflows/deploy-slides-pages.yml`):

- GitHub Pages build runs on Node 20 and `npm ci` in `slides/`.
- It builds:
  1. landing deck into `slides/dist` with `--base "/<repo-name>/"`.
  2. introduction deck separately via `npm run build:deck -- decks/introduction.md --base "/<repo-name>/introduction/"`, then copies `decks/dist/*` into `dist/introduction/`.
- Pages artifact is uploaded from `slides/dist`.

## Repository-specific conventions

- Keep deck frontmatter in place (`theme`, `title`, `duration`, optional `class`/`background`), as decks rely on Slidev metadata conventions.
- When adding a new deck, follow the existing pattern: create `slides/decks/<name>.md` and run it with `npm run dev:deck -- decks/<name>.md`.
- For GitHub Pages compatibility, preserve `--base` handling in CI when changing build/deploy logic.
- Do not commit build outputs or dependencies (`slides/.gitignore` ignores `dist`, `node_modules`, etc.).
- Keep `.npmrc` `allowBuilds.playwright-chromium` because Slidev export depends on browser download during dependency lifecycle.
