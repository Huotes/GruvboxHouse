"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 text-center"
      style={{ background: "var(--bg)" }}
    >
      {/* Background decorative elements */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {/* Gradient orbs */}
        <div
          className="absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--orange)" }}
        />
        <div
          className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full opacity-15 blur-3xl"
          style={{ background: "var(--aqua)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--yellow)" }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--fg) 1px, transparent 1px),
              linear-gradient(90deg, var(--fg) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Badge */}
        <div
          className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 font-display text-sm font-medium"
          style={{
            background: "var(--bg1)",
            color: "var(--accent)",
            border: "1px solid var(--card-border)",
            animationDelay: "0.1s",
          }}
        >
          <Sparkles size={14} />
          Orçamento 100% gratuito
        </div>

        {/* Main headline */}
        <h1
          className="animate-fade-up font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ color: "var(--fg)", animationDelay: "0.25s" }}
        >
          Sua ideia merece
          <br />
          <span className="text-gradient">sair do papel.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="animate-fade-up mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed sm:text-xl md:mt-8 md:text-xl"
          style={{ color: "var(--fg-muted)", animationDelay: "0.4s" }}
        >
          Tem uma ideia de negócio que precisa do digital mas não sabe por onde começar?
          Na <strong style={{ color: "var(--accent)" }}>Gruvbox House</strong> a gente
          transforma seu projeto em software real — rápido, acessível e do seu jeito.
        </p>

        {/* CTA buttons */}
        <div
          className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:mt-12"
          style={{ animationDelay: "0.55s" }}
        >
          <a href="#contato" className="btn-primary text-base">
            Quero meu orçamento grátis
            <ArrowRight size={18} />
          </a>
          <a href="#como-funciona" className="btn-secondary text-base">
            Como funciona?
          </a>
        </div>

        {/* Trust indicators */}
        <div
          className="animate-fade-up mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-display text-sm"
          style={{ color: "var(--fg-muted)", animationDelay: "0.7s" }}
        >
          <span className="flex items-center gap-2">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: "var(--green)" }}
            />
            Entrega rápida
          </span>
          <span className="flex items-center gap-2">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: "var(--aqua)" }}
            />
            Preço justo
          </span>
          <span className="flex items-center gap-2">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: "var(--yellow)" }}
            />
            Suporte dedicado
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-fade-up absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animationDelay: "1s" }}
      >
        <div
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 p-1.5"
          style={{ borderColor: "var(--bg3)" }}
        >
          <div
            className="h-2 w-1.5 rounded-full animate-float"
            style={{ background: "var(--accent)" }}
          />
        </div>
      </div>
    </section>
  );
}
