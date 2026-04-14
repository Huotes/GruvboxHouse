# 🏠 Gruvbox House

**Software sob medida para o seu negócio.**

Site institucional da Gruvbox House — software house focada em automações e desenvolvimento sob encomenda.

## Stack

| Tecnologia     | Versão   |
|----------------|----------|
| Next.js        | 16.2.x   |
| TypeScript     | 6.0.x    |
| React          | 19.x     |
| Tailwind CSS   | 4.x      |
| Lucide React   | 0.475.x  |
| Motion         | 12.x     |
| Docker         | Multi-stage |

## Começando

### Desenvolvimento local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento (Turbopack)
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Docker (produção)

```bash
# Build e start
docker compose up --build -d

# Ou manualmente
docker build -t gruvbox-house .
docker run -p 3000:3000 gruvbox-house
```

## Estrutura do projeto

```
src/
├── app/
│   ├── globals.css      # Tokens Gruvbox + Tailwind v4 + animações
│   ├── layout.tsx        # Root layout com fonts e ThemeProvider
│   └── page.tsx          # Página principal
├── components/
│   ├── Header.tsx        # Navbar glassmorphism + menu mobile
│   ├── Hero.tsx          # Hero com gradientes e CTAs
│   ├── Services.tsx      # Grid de serviços
│   ├── HowItWorks.tsx    # Processo em 4 passos
│   ├── Technologies.tsx  # Python, Go, TypeScript
│   ├── CTA.tsx           # Stats, depoimentos e banner CTA
│   ├── Contact.tsx       # Formulário de contato (mailto)
│   ├── Footer.tsx        # Footer com links e créditos
│   └── index.ts          # Barrel export
├── context/
│   └── ThemeContext.tsx   # Dark/light theme com localStorage
└── lib/
    └── useInView.ts      # Hook de IntersectionObserver
```

## Temas

O site suporta tema **claro** e **escuro**, ambos baseados na paleta [Gruvbox](https://github.com/morhetz/gruvbox). O toggle está no header e respeita a preferência do sistema operacional no primeiro acesso.

## Contato

📧 gruvboxhouse@gmail.com

---

Feito com ❤️ e muito café.
