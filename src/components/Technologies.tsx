"use client";

import { useInView } from "@/lib/useInView";

const TECHS = [
  { name: "Python", tagline: "Automação & Inteligência", desc: "Ideal para automações, análise de dados e IA. Faz seu negócio funcionar no piloto automático.", color: "var(--blue)", icon: "🐍" },
  { name: "Go", tagline: "Velocidade & Escala", desc: "Sistemas ultrarrápidos que aguentam milhares de acessos sem travar.", color: "var(--aqua)", icon: "⚡" },
  { name: "TypeScript", tagline: "Interfaces & Aplicações", desc: "A base dos seus sites, apps e painéis. Interfaces modernas que funcionam em qualquer tela.", color: "var(--green)", icon: "✨" },
] as const;

export function Technologies() {
  const { ref, isInView } = useInView();

  return (
    <section id="tecnologias" className="stars-bg section-padding" style={{ background: "var(--bg-soft)" }}>
      <div className="mx-auto max-w-5xl text-center" ref={ref}>
        <span className="font-mono text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>Tecnologias</span>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl" style={{ color: "var(--fg)" }}>
          Ferramentas de <span className="text-gradient">outro mundo</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg" style={{ color: "var(--fg-muted)" }}>
          Você não precisa entender de tecnologia — a gente domina por você.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {TECHS.map((t, i) => (
            <div key={t.name} className="glass-card relative overflow-hidden text-center"
              style={{ opacity: isInView ? 1 : 0, transform: isInView ? "none" : "translateY(24px)", transition: `all 0.5s ease ${i * 0.12}s` }}>
              <div className="absolute inset-x-0 top-0 h-1" style={{ background: t.color }} />
              <div className="mb-3 text-4xl">{t.icon}</div>
              <h3 className="font-display text-2xl font-bold" style={{ color: "var(--fg)" }}>{t.name}</h3>
              <span className="mt-1 inline-block font-mono text-xs font-semibold uppercase tracking-wider" style={{ color: t.color }}>{t.tagline}</span>
              <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>{t.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm" style={{ color: "var(--fg-muted)" }}>
          Também usamos React, Next.js, Docker, PostgreSQL, Redis e mais — sempre a melhor ferramenta para cada projeto.
        </p>
      </div>
    </section>
  );
}
