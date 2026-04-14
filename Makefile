.PHONY: dev build up down logs restart clean help
help: ## Comandos disponíveis
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'
dev: ## Servidor de desenvolvimento
	npm run dev
build: ## Build Docker
	docker build --network=host -t gruvbox-app -f Dockerfile .
up: ## Deploy completo
	chmod +x deploy.sh && ./deploy.sh
down: ## Para containers
	docker compose down --remove-orphans
logs: ## Logs em tempo real
	docker compose logs -f
restart: ## Reinicia serviços
	docker compose restart
status: ## Status
	docker compose ps
clean: ## Remove tudo
	docker compose down --rmi local --volumes --remove-orphans && docker system prune -f
