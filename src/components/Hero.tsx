"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export function Hero() {
  return (
    <section className="stars-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 text-center" style={{ background: "var(--bg)" }}>
      {/* Nebula orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-15 blur-[100px]" style={{ background: "var(--aqua)" }} />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full opacity-10 blur-[80px]" style={{ background: "var(--green)" }} />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full opacity-10 blur-[80px]" style={{ background: "var(--blue)" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Badge */}
        <div className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2 font-mono text-xs font-semibold uppercase tracking-widest"
          style={{ background: "var(--glow)", color: "var(--accent)", border: "1px solid var(--accent)", animationDelay: "0.1s" }}>
          <span className="inline-block h-2 w-2 rounded-full animate-pulse-glow" style={{ background: "var(--accent)" }} />
          Orçamento 100% gratuito
        </div>

        <h1 className="animate-fade-up font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl" style={{ color: "var(--fg)", animationDelay: "0.25s" }}>
          Sua ideia merece<br /><span className="text-gradient">decolar.</span>
        </h1>

        <p className="animate-fade-up mx-auto mt-6 max-w-xl text-lg leading-relaxed sm:text-xl" style={{ color: "var(--fg-muted)", animationDelay: "0.4s" }}>
          Tem um projeto que precisa do digital mas não sabe por onde começar?
          A <strong style={{ color: "var(--accent)" }}>Gruvbox House</strong> transforma
          sua ideia em software real — rápido, acessível e do seu jeito.
        </p>

        <div className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center" style={{ animationDelay: "0.55s" }}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base">
            <MessageCircle size={18} />
            Chamar no WhatsApp
          </a>
          <a href="#servicos" className="btn-secondary text-base">
            Conhecer serviços
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="animate-fade-up mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-display text-sm" style={{ color: "var(--fg-muted)", animationDelay: "0.7s" }}>
          {[
            { color: "var(--aqua)", text: "Entrega veloz" },
            { color: "var(--green)", text: "Cabe no bolso" },
            { color: "var(--yellow)", text: "Suporte humano" },
          ].map((i) => (
            <span key={i.text} className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: i.color }} />
              {i.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
