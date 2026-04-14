"use client";

import { useInView } from "@/lib/useInView";

const TECHS = [
  {
    name: "Python",
    tagline: "Automação & Inteligência",
    description:
      "Ideal para automações, análise de dados e inteligência artificial. É a linguagem que faz seu negócio funcionar no piloto automático.",
    color: "var(--blue)",
    icon: "🐍",
  },
  {
    name: "Go",
    tagline: "Velocidade & Escala",
    description:
      "Quando performance é prioridade. Sistemas rápidos que aguentam milhares de acessos simultâneos sem travar.",
    color: "var(--aqua)",
    icon: "⚡",
  },
  {
    name: "TypeScript",
    tagline: "Interfaces & Aplicações",
    description:
      "A base dos seus sites, apps e painéis interativos. Interfaces modernas, bonitas e que funcionam em qualquer dispositivo.",
    color: "var(--yellow)",
    icon: "✨",
  },
] as const;

export function Technologies() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="tecnologias"
      className="section-padding"
      style={{ background: "var(--bg-soft)" }}
    >
      <div className="mx-auto max-w-7xl" ref={ref}>
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span
            className="font-mono text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            Tecnologias
          </span>
          <h2
            className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            style={{ color: "var(--fg)" }}
          >
            Ferramentas de{" "}
            <span style={{ color: "var(--accent)" }}>ponta</span>
          </h2>
          <p className="mt-4 text-lg" style={{ color: "var(--fg-muted)" }}>
            Você não precisa entender de tecnologia — a gente entende por você.
            Usamos as melhores ferramentas para cada tipo de projeto.
          </p>
        </div>

        {/* Tech cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {TECHS.map((tech, i) => (
            <div
              key={tech.name}
              className="glass-card relative overflow-hidden"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(24px)",
                transition: `all 0.5s ease ${i * 0.15}s`,
              }}
            >
              {/* Accent top bar */}
              <div
                className="absolute left-0 right-0 top-0 h-1"
                style={{ background: tech.color }}
                aria-hidden="true"
              />

              <div className="text-4xl mb-4">{tech.icon}</div>

              <h3
                className="font-display text-2xl font-bold"
                style={{ color: "var(--fg)" }}
              >
                {tech.name}
              </h3>
              <span
                className="mt-1 inline-block font-mono text-xs font-semibold uppercase tracking-wider"
                style={{ color: tech.color }}
              >
                {tech.tagline}
              </span>
              <p
                className="mt-3 text-base leading-relaxed"
                style={{ color: "var(--fg-muted)" }}
              >
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          className="mt-10 text-center text-sm"
          style={{ color: "var(--fg-muted)" }}
        >
          Também trabalhamos com React, Next.js, Docker, PostgreSQL, Redis e mais.
          <br className="hidden sm:block" />
          A escolha da ferramenta depende do seu projeto — e a gente sempre escolhe a melhor.
        </p>
      </div>
    </section>
  );
}
