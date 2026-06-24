#!/usr/bin/env bash
set -euo pipefail

bash scripts/build-all.sh

echo "Starting local portal server on http://localhost:3030"
cd dist
python3 -m http.server 3030
