#!/usr/bin/env bash
set -euo pipefail

npm run build

shopt -s nullglob
decks=(decks/*.md)

if [ ${#decks[@]} -eq 0 ]; then
  echo "No deck files found in decks/."
  exit 0
fi

for deck in "${decks[@]}"; do
  slug="${deck##*/}"
  slug="${slug%.md}"

  npm run build:deck -- --base "./" "$deck"

  mkdir -p "dist/${slug}"
  rm -rf "dist/${slug}"/*
  cp -R decks/dist/. "dist/${slug}/"

  # Copy deck-local static assets (images, logos, etc.) referenced with relative paths.
  for item in decks/*; do
    name="${item##*/}"
    case "$name" in
      *.md|dist)
        continue
        ;;
    esac

    cp -R "$item" "dist/${slug}/"
  done

done

echo "Build complete: dist + dist/<deck>/"
