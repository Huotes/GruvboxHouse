#!/usr/bin/env bash
set -euo pipefail

# ── Colors ──
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

info()  { echo -e "${CYAN}[INFO]${NC}  $*"; }
ok()    { echo -e "${GREEN}[OK]${NC}    $*"; }
warn()  { echo -e "${YELLOW}[WARN]${NC}  $*"; }
err()   { echo -e "${RED}[ERROR]${NC} $*"; }

# ── Pre-flight checks ──
info "Verificando pré-requisitos..."

if ! command -v docker &>/dev/null; then
    err "Docker não encontrado. Instale: https://docs.docker.com/get-docker/"
    exit 1
fi
ok "Docker encontrado: $(docker --version | head -1)"

# Check compose (v2 plugin or standalone)
COMPOSE_CMD=""
if docker compose version &>/dev/null 2>&1; then
    COMPOSE_CMD="docker compose"
    ok "Docker Compose (plugin) encontrado"
elif command -v docker-compose &>/dev/null; then
    COMPOSE_CMD="docker-compose"
    ok "Docker Compose (standalone) encontrado"
else
    err "Docker Compose não encontrado."
    echo "  Instale com: sudo apt install docker-compose-plugin"
    exit 1
fi

# ── Ensure package-lock.json exists ──
if [ ! -f "package-lock.json" ]; then
    warn "package-lock.json não encontrado. Gerando..."
    if command -v npm &>/dev/null; then
        npm install --package-lock-only --no-audit --no-fund
        ok "package-lock.json gerado"
    else
        warn "npm não disponível localmente. O Docker vai usar 'npm install' (mais lento)."
    fi
fi

# ── Stop existing containers ──
info "Parando containers existentes..."
$COMPOSE_CMD down --remove-orphans 2>/dev/null || true
ok "Containers parados"

# ── Build ──
info "Iniciando build..."
echo ""

# Try build with network=host first (solves most DNS/proxy issues)
# Falls back to default network if host mode fails
BUILD_SUCCESS=false

info "Tentando build com --network=host..."
if docker build --network=host -t gruvbox-app -f Dockerfile . 2>&1; then
    BUILD_SUCCESS=true
    ok "Build da aplicação concluído (network=host)"
else
    warn "Build com network=host falhou. Tentando modo padrão..."
    if docker build -t gruvbox-app -f Dockerfile . 2>&1; then
        BUILD_SUCCESS=true
        ok "Build da aplicação concluído (network=default)"
    fi
fi

if [ "$BUILD_SUCCESS" = false ]; then
    err "Build falhou. Possíveis causas:"
    echo "  1. Sem conexão com a internet"
    echo "  2. DNS do Docker mal configurado"
    echo "     → Adicione em /etc/docker/daemon.json:"
    echo '       { "dns": ["8.8.8.8", "8.8.4.4"] }'
    echo "     → Reinicie: sudo systemctl restart docker"
    echo "  3. Proxy corporativo bloqueando npm"
    exit 1
fi

# ── Start services ──
echo ""
info "Subindo serviços..."
$COMPOSE_CMD up -d

# ── Wait for health ──
info "Aguardando serviços ficarem saudáveis..."
RETRIES=0
MAX_RETRIES=30

while [ $RETRIES -lt $MAX_RETRIES ]; do
    if curl -sf http://localhost:80/healthz &>/dev/null 2>&1 || \
       wget -qO- http://localhost:80/healthz &>/dev/null 2>&1; then
        break
    fi
    RETRIES=$((RETRIES + 1))
    sleep 2
done

echo ""
if [ $RETRIES -lt $MAX_RETRIES ]; then
    ok "════════════════════════════════════════════════"
    ok "  Gruvbox House rodando em http://localhost:80"
    ok "════════════════════════════════════════════════"
else
    warn "Serviços demorando pra responder. Verifique os logs:"
    echo "  $COMPOSE_CMD logs -f"
fi

echo ""
info "Comandos úteis:"
echo "  $COMPOSE_CMD logs -f          # Ver logs em tempo real"
echo "  $COMPOSE_CMD ps               # Status dos containers"
echo "  $COMPOSE_CMD down             # Parar tudo"
echo "  $COMPOSE_CMD restart          # Reiniciar"
echo ""
