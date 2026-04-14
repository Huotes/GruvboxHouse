"use client";

import { Terminal, Heart } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Navegação",
    links: [
      { label: "Serviços", href: "#servicos" },
      { label: "Como Funciona", href: "#como-funciona" },
      { label: "Tecnologias", href: "#tecnologias" },
      { label: "Contato", href: "#contato" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { label: "Sites & Sistemas", href: "#servicos" },
      { label: "Automações", href: "#servicos" },
      { label: "Apps Mobile", href: "#servicos" },
      { label: "Consultoria", href: "#servicos" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "gruvboxhouse@gmail.com", href: "mailto:gruvboxhouse@gmail.com" },
      { label: "Orçamento Grátis", href: "#contato" },
    ],
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="section-padding pb-8"
      style={{
        background: "var(--bg-soft)",
        borderTop: "1px solid var(--card-border)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <a
              href="#"
              className="mb-4 flex items-center gap-2.5 font-display text-lg font-bold"
              style={{ color: "var(--fg)", textDecoration: "none" }}
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{ background: "var(--accent)", color: "var(--bg)" }}
              >
                <Terminal size={16} strokeWidth={2.5} />
              </span>
              Gruvbox<span style={{ color: "var(--accent)" }}> House</span>
            </a>
            <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              Software sob medida para o seu negócio.
              Rápido, acessível e sem complicação.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4
                className="mb-4 font-display text-sm font-bold"
                style={{ color: "var(--fg)" }}
              >
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{
                        color: "var(--fg-muted)",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--fg-muted)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row"
          style={{ borderColor: "var(--card-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
            &copy; {year} Gruvbox House. Todos os direitos reservados.
          </p>
          <p
            className="flex items-center gap-1 text-xs"
            style={{ color: "var(--fg-muted)" }}
          >
            Feito com <Heart size={12} style={{ color: "var(--red)" }} /> e
            muito café
          </p>
        </div>
      </div>
    </footer>
  );
}
