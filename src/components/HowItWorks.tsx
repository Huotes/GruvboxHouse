"use client";

import { MessageCircle, Lightbulb, Code2, Rocket } from "lucide-react";
import { useInView } from "@/lib/useInView";

const STEPS = [
  { icon: MessageCircle, n: "01", title: "Você conta a ideia", desc: "Pode ser por WhatsApp, e-mail ou uma call rápida. Sem jargão, sem formulário chato.", color: "var(--aqua)" },
  { icon: Lightbulb, n: "02", title: "A gente planeja tudo", desc: "Transformamos sua ideia num plano claro: escopo, prazo e valor. Tudo transparente.", color: "var(--green)" },
  { icon: Code2, n: "03", title: "Desenvolvimento ágil", desc: "Construímos seu software com as melhores tecnologias. Você acompanha cada etapa.", color: "var(--yellow)" },
  { icon: Rocket, n: "04", title: "Lançamento!", desc: "Entregamos tudo funcionando e ficamos do seu lado para evoluir o projeto.", color: "var(--blue)" },
] as const;

export function HowItWorks() {
  const { ref, isInView } = useInView();

  return (
    <section id="processo" className="section-padding" style={{ background: "var(--bg)" }}>
      <div className="mx-auto max-w-4xl text-center" ref={ref}>
        <span className="font-mono text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>Processo</span>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl" style={{ color: "var(--fg)" }}>
          Do zero ao lançamento em <span className="text-gradient">4 passos</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg" style={{ color: "var(--fg-muted)" }}>
          Sem burocracia. Sem surpresas. Sem enrolação.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="glass-card text-center"
                style={{ opacity: isInView ? 1 : 0, transform: isInView ? "none" : "translateY(20px)", transition: `all 0.5s ease ${i * 0.12}s` }}>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ background: `color-mix(in srgb, ${s.color} 12%, transparent)`, border: `1px solid color-mix(in srgb, ${s.color} 25%, transparent)` }}>
                  <Icon size={24} style={{ color: s.color }} />
                </div>
                <span className="font-mono text-xs font-bold" style={{ color: s.color }}>PASSO {s.n}</span>
                <h3 className="mt-1 font-display text-xl font-bold" style={{ color: "var(--fg)" }}>{s.title}</h3>
                <p className="mt-2 text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
