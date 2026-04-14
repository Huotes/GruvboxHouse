#!/usr/bin/env bash
set -euo pipefail
GREEN='\033[0;32m'; CYAN='\033[0;36m'; YELLOW='\033[1;33m'; RED='\033[0;31m'; NC='\033[0m'
info()  { echo -e "${CYAN}[INFO]${NC}  $*"; }
ok()    { echo -e "${GREEN}[OK]${NC}    $*"; }
err()   { echo -e "${RED}[ERRO]${NC} $*"; }

command -v docker &>/dev/null || { err "Docker não encontrado."; exit 1; }

COMPOSE_CMD=""
docker compose version &>/dev/null 2>&1 && COMPOSE_CMD="docker compose" || \
  { command -v docker-compose &>/dev/null && COMPOSE_CMD="docker-compose"; } || \
  { err "Docker Compose não encontrado."; exit 1; }

[ ! -f "package-lock.json" ] && command -v npm &>/dev/null && { info "Gerando package-lock.json..."; npm install --package-lock-only --no-audit --no-fund; }

info "Parando containers..."
$COMPOSE_CMD down --remove-orphans 2>/dev/null || true

info "Build..."
if docker build --network=host -t gruvbox-app -f Dockerfile . 2>&1; then
    ok "Build concluído"
elif docker build -t gruvbox-app -f Dockerfile . 2>&1; then
    ok "Build concluído (fallback)"
else
    err "Build falhou. Verifique DNS do Docker: /etc/docker/daemon.json → {\"dns\":[\"8.8.8.8\"]}"
    exit 1
fi

info "Subindo serviços..."
$COMPOSE_CMD up -d

RETRIES=0
while [ $RETRIES -lt 30 ]; do
    curl -sf http://localhost:80/healthz &>/dev/null 2>&1 && break
    RETRIES=$((RETRIES + 1)); sleep 2
done

echo ""
[ $RETRIES -lt 30 ] && ok "Gruvbox House rodando em http://localhost:80" || \
  { echo "Verifique: $COMPOSE_CMD logs -f"; }
