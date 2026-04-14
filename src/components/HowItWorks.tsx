"use client";

import { MessageCircle, Lightbulb, Code2, Rocket } from "lucide-react";
import { useInView } from "@/lib/useInView";

const STEPS = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Conta pra gente",
    description:
      "Você explica sua ideia — pode ser por WhatsApp, e-mail ou uma call rápida. Sem jargão técnico, sem formulário chato.",
    color: "var(--blue)",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "A gente planeja",
    description:
      "Transformamos sua ideia em um plano claro: o que será feito, quanto tempo leva e quanto vai custar. Tudo transparente.",
    color: "var(--yellow)",
  },
  {
    icon: Code2,
    number: "03",
    title: "Mãos à obra",
    description:
      "Desenvolvemos seu software com as melhores tecnologias do mercado. Você acompanha cada etapa, sem surpresas.",
    color: "var(--green)",
  },
  {
    icon: Rocket,
    number: "04",
    title: "No ar!",
    description:
      "Entregamos tudo pronto e funcionando. E continuamos do seu lado para ajustes e melhorias.",
    color: "var(--orange)",
  },
] as const;

export function HowItWorks() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="como-funciona"
      className="section-padding"
      style={{ background: "var(--bg)" }}
    >
      <div className="mx-auto max-w-7xl" ref={ref}>
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span
            className="font-mono text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            Processo
          </span>
          <h2
            className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            style={{ color: "var(--fg)" }}
          >
            Simples assim.{" "}
            <span style={{ color: "var(--accent)" }}>4 passos.</span>
          </h2>
          <p
            className="mt-4 text-lg"
            style={{ color: "var(--fg-muted)" }}
          >
            Do primeiro contato ao software rodando. Sem burocracia, sem
            enrolação.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative text-center md:text-left"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(24px)",
                  transition: `all 0.5s ease ${i * 0.15}s`,
                }}
              >
                {/* Connector line (desktop) */}
                {i < STEPS.length - 1 && (
                  <div
                    className="absolute right-0 top-8 hidden h-px w-8 lg:block"
                    style={{
                      background: "var(--bg3)",
                      right: "-1rem",
                    }}
                    aria-hidden="true"
                  />
                )}

                {/* Step number */}
                <div
                  className="mb-4 inline-flex items-center gap-3"
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      background: `color-mix(in srgb, ${step.color} 12%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${step.color} 25%, transparent)`,
                    }}
                  >
                    <Icon size={24} style={{ color: step.color }} />
                  </div>
                </div>

                <span
                  className="font-mono text-xs font-bold"
                  style={{ color: step.color }}
                >
                  PASSO {step.number}
                </span>
                <h3
                  className="mt-1 font-display text-xl font-bold"
                  style={{ color: "var(--fg)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-2 text-base leading-relaxed"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
