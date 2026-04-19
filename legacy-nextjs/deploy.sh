#!/usr/bin/env bash
set -euo pipefail
G='\033[0;32m'; C='\033[0;36m'; R='\033[0;31m'; N='\033[0m'
info() { echo -e "${C}[INFO]${N} $*"; }
ok()   { echo -e "${G}[OK]${N}   $*"; }
err()  { echo -e "${R}[ERRO]${N} $*"; }

command -v docker &>/dev/null || { err "Docker não encontrado."; exit 1; }
COMPOSE=""; docker compose version &>/dev/null 2>&1 && COMPOSE="docker compose" || { command -v docker-compose &>/dev/null && COMPOSE="docker-compose"; } || { err "Compose não encontrado."; exit 1; }
[ ! -f "package-lock.json" ] && command -v npm &>/dev/null && { info "Gerando lockfile..."; npm install --package-lock-only --no-audit --no-fund; }
info "Parando containers..."; $COMPOSE down --remove-orphans 2>/dev/null || true
info "Build..."
if docker build --network=host -t gruvbox-app -f Dockerfile . 2>&1; then ok "Build OK"
elif docker build -t gruvbox-app -f Dockerfile . 2>&1; then ok "Build OK (fallback)"
else err "Build falhou."; exit 1; fi
info "Subindo..."; $COMPOSE up -d
R=0; while [ $R -lt 30 ]; do curl -sf http://localhost:80/healthz &>/dev/null 2>&1 && break; R=$((R+1)); sleep 2; done
echo ""; [ $R -lt 30 ] && ok "Gruvbox House em http://localhost:80" || echo "Verifique: $COMPOSE logs -f"
