# Gruvbox House

**Software sob medida para o seu negócio.**

Site institucional da Gruvbox House — software house focada em automações e desenvolvimento sob encomenda.

## Stack atual (produção)

Site estático renderizado via **React 18 + Babel standalone** por CDN em `index.html`. Sem build step, sem framework. A Vercel serve os arquivos direto como static site.

| Arquivo / pasta   | Papel                                                 |
|-------------------|-------------------------------------------------------|
| `index.html`      | Página única (HTML + CSS + JSX in-browser via Babel)  |
| `uploads/`        | Imagens referenciadas pelo HTML                       |
| `vercel.json`     | Headers de cache e segurança                          |
| `legacy-nextjs/`  | Projeto Next.js anterior, arquivado (não é publicado) |

## Desenvolvimento local

Qualquer servidor estático serve. Ex.:

```bash
# Python
python -m http.server 3000

# Node (npx serve)
npx serve -p 3000
```

Acesse [http://localhost:3000](http://localhost:3000).

## Deploy

Basta conectar o repositório à Vercel. Sem build command, sem output directory — a Vercel detecta `index.html` na raiz e publica estático. O `vercel.json` aplica:

- Cache longo (1 ano, immutable) em `/uploads/*`
- `must-revalidate` em `/` e `/index.html`
- Headers de segurança (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`)

## Projeto Next.js arquivado

A versão anterior em Next.js 16 / React 19 / Tailwind v4 está preservada em `legacy-nextjs/`. Para rodá-la:

```bash
cd legacy-nextjs
npm install
npm run dev
```

## Contato

gruvboxhouse@gmail.com
