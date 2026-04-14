"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { WHATSAPP_LINK, WHATSAPP_DISPLAY, EMAIL } from "@/lib/constants";

const LINKS = [
  { title: "Navegação", items: [
    { label: "Serviços", href: "#servicos" },
    { label: "Processo", href: "#processo" },
    { label: "Tecnologias", href: "#tecnologias" },
    { label: "Contato", href: "#contato" },
  ]},
  { title: "Serviços", items: [
    { label: "Sites & Sistemas", href: "#servicos" },
    { label: "Automações", href: "#servicos" },
    { label: "Apps Mobile", href: "#servicos" },
    { label: "Consultoria", href: "#servicos" },
  ]},
  { title: "Fale Conosco", items: [
    { label: EMAIL, href: `mailto:${EMAIL}` },
    { label: WHATSAPP_DISPLAY, href: WHATSAPP_LINK },
    { label: "Orçamento Grátis", href: "#contato" },
  ]},
] as const;

export function Footer() {
  return (
    <footer className="section-padding pb-8" style={{ background: "var(--bg-soft)", borderTop: "1px solid var(--card-border)" }}>
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <a href="#" className="mb-4 flex items-center gap-2.5 font-display text-lg font-bold" style={{ color: "var(--fg)", textDecoration: "none" }}>
              <Image src="/assets/gruvboxhouse_logo.png" alt="Logo" width={32} height={32} className="rounded-lg" />
              Gruvbox<span style={{ color: "var(--accent)" }}> House</span>
            </a>
            <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              Software sob medida. Rápido, acessível e sem complicação.
            </p>
          </div>
          {LINKS.map((g) => (
            <div key={g.title}>
              <h4 className="mb-4 font-display text-sm font-bold" style={{ color: "var(--fg)" }}>{g.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {g.items.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "var(--fg-muted)", textDecoration: "none" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-muted)")}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row" style={{ borderColor: "var(--card-border)" }}>
          <p className="text-xs" style={{ color: "var(--fg-muted)" }}>&copy; {new Date().getFullYear()} Gruvbox House. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1 text-xs" style={{ color: "var(--fg-muted)" }}>
            Feito com <Heart size={12} style={{ color: "var(--red)" }} /> e muito café
          </p>
        </div>
      </div>
    </footer>
  );
}
