"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { WA_LINK, WA_DISPLAY, EMAIL } from "@/lib/constants";

const LINKS = [
  { title: "Navegação", items: [{ l: "Serviços", h: "#servicos" }, { l: "Processo", h: "#processo" }, { l: "Tecnologias", h: "#tecnologias" }, { l: "Contato", h: "#contato" }] },
  { title: "Serviços", items: [{ l: "Sites & Sistemas", h: "#servicos" }, { l: "Automações", h: "#servicos" }, { l: "Apps Mobile", h: "#servicos" }, { l: "Consultoria", h: "#servicos" }] },
  { title: "Fale Conosco", items: [{ l: EMAIL, h: `mailto:${EMAIL}` }, { l: WA_DISPLAY, h: WA_LINK }, { l: "Orçamento Grátis", h: "#contato" }] },
] as const;

export function Footer() {
  return (
    <footer className="section-padding pb-10" style={{ background: "var(--bg-deep)", borderTop: "1px solid var(--card-border)" }}>
      <div className="section-inner">
        <div className="mx-auto grid max-w-5xl gap-14 text-center md:grid-cols-4 md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="mb-5 flex items-center gap-2.5 font-display text-lg font-extrabold" style={{ color: "var(--fg)", textDecoration: "none" }}>
              <Image src="/assets/gruvboxhouse_logo.png" alt="Logo" width={32} height={32} className="rounded-lg" />
              Gruvbox<span style={{ color: "var(--accent)" }}> House</span>
            </a>
            <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>Software sob medida. Rápido, acessível e sem complicação.</p>
          </div>
          {LINKS.map(g => (
            <div key={g.title}>
              <h4 className="mb-5 font-display text-xs font-extrabold uppercase tracking-[0.2em]" style={{ color: "var(--fg)" }}>{g.title}</h4>
              <ul className="flex flex-col gap-3">
                {g.items.map(i => (
                  <li key={i.l}>
                    <a href={i.h} target={i.h.startsWith("http") ? "_blank" : undefined} rel={i.h.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm transition-colors duration-200" style={{ color: "var(--fg-muted)", textDecoration: "none" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}>{i.l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-14 flex max-w-5xl flex-col items-center justify-between gap-4 border-t pt-10 sm:flex-row" style={{ borderColor: "var(--card-border)" }}>
          <p className="text-xs" style={{ color: "var(--fg-muted)" }}>&copy; {new Date().getFullYear()} Gruvbox House. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1 text-xs" style={{ color: "var(--fg-muted)" }}>
            Feito com <Heart size={12} style={{ color: "var(--red)" }} /> e muito café
          </p>
        </div>
      </div>
    </footer>
  );
}