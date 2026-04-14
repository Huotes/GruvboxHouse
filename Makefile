.PHONY: dev build up down logs restart status clean help
help: ## Comandos
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'
dev: ## Dev local
	npm run dev
build: ## Build Docker
	docker build --network=host -t gruvbox-app .
up: ## Deploy completo
	chmod +x deploy.sh && ./deploy.sh
down: ## Para tudo
	docker compose down --remove-orphans
logs: ## Logs
	docker compose logs -f
restart: ## Reinicia
	docker compose restart
status: ## Status
	docker compose ps
clean: ## Limpa tudo
	docker compose down --rmi local --volumes --remove-orphans && docker system prune -f
