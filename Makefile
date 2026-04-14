.PHONY: dev build up down logs restart clean help

# ── Default ──
help: ## Mostra comandos disponíveis
	@echo ""
	@echo "  Gruvbox House — Comandos"
	@echo "  ────────────────────────"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'
	@echo ""

# ── Development ──
dev: ## Inicia servidor de desenvolvimento local
	npm run dev

# ── Docker Production ──
build: ## Builda os containers
	docker build --network=host -t gruvbox-app -f Dockerfile .

up: ## Sobe todos os serviços (build + start)
	chmod +x deploy.sh && ./deploy.sh

down: ## Para todos os containers
	docker compose down --remove-orphans

logs: ## Mostra logs em tempo real
	docker compose logs -f

restart: ## Reinicia todos os serviços
	docker compose restart

status: ## Status dos containers
	docker compose ps

# ── Maintenance ──
clean: ## Remove containers, imagens e volumes órfãos
	docker compose down --rmi local --volumes --remove-orphans
	docker system prune -f

shell-app: ## Abre shell no container da aplicação
	docker exec -it gruvbox-app sh

shell-nginx: ## Abre shell no container do nginx
	docker exec -it gruvbox-nginx sh

nginx-reload: ## Recarrega config do nginx sem downtime
	docker exec gruvbox-nginx nginx -s reload

nginx-test: ## Testa configuração do nginx
	docker exec gruvbox-nginx nginx -t
