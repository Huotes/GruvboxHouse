"use client";

import { ArrowRight, Quote } from "lucide-react";
import { useInView } from "@/lib/useInView";

const TESTIMONIALS = [
  {
    name: "Mariana S.",
    role: "Dona de Clínica Estética",
    text: "Eu não entendia nada de tecnologia e eles me explicaram tudo com calma. Hoje tenho um sistema de agendamento que funciona sozinho!",
  },
  {
    name: "Carlos R.",
    role: "Dono de Distribuidora",
    text: "Pedi uma automação pra controlar meu estoque e entregaram em duas semanas. Economizo horas todo dia agora.",
  },
  {
    name: "Juliana M.",
    role: "Empreendedora Digital",
    text: "Queria tirar minha ideia de app do papel e não sabia por onde começar. A Gruvbox House fez tudo: do design ao lançamento.",
  },
] as const;

const STATS = [
  { value: "50+", label: "Projetos entregues" },
  { value: "100%", label: "Orçamentos grátis" },
  { value: "48h", label: "Tempo de resposta" },
  { value: "4.9★", label: "Avaliação dos clientes" },
] as const;

export function CTA() {
  const { ref, isInView } = useInView();
  const { ref: ref2, isInView: isInView2 } = useInView();

  return (
    <section className="section-padding" style={{ background: "var(--bg)" }}>
      <div className="mx-auto max-w-7xl">
        {/* Stats bar */}
        <div
          ref={ref2}
          className="mb-20 grid grid-cols-2 gap-6 rounded-2xl p-8 md:grid-cols-4"
          style={{
            background: "var(--bg1)",
            border: "1px solid var(--card-border)",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center"
              style={{
                opacity: isInView2 ? 1 : 0,
                transform: isInView2 ? "translateY(0)" : "translateY(16px)",
                transition: `all 0.4s ease ${i * 0.1}s`,
              }}
            >
              <div
                className="font-display text-3xl font-extrabold sm:text-4xl"
                style={{ color: "var(--accent)" }}
              >
                {stat.value}
              </div>
              <div
                className="mt-1 text-sm font-medium"
                style={{ color: "var(--fg-muted)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div ref={ref}>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span
              className="font-mono text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              Depoimentos
            </span>
            <h2
              className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
              style={{ color: "var(--fg)" }}
            >
              Quem já <span style={{ color: "var(--accent)" }}>confiou</span> na
              gente
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <article
                key={t.name}
                className="glass-card relative"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(24px)",
                  transition: `all 0.5s ease ${i * 0.12}s`,
                }}
              >
                <Quote
                  size={28}
                  className="mb-4 opacity-20"
                  style={{ color: "var(--accent)" }}
                />
                <p
                  className="text-base leading-relaxed italic"
                  style={{ color: "var(--fg-soft)" }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold"
                    style={{
                      background: "var(--accent)",
                      color: "var(--bg)",
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div
                      className="font-display text-sm font-semibold"
                      style={{ color: "var(--fg)" }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Big CTA banner */}
        <div
          className="relative mt-20 overflow-hidden rounded-3xl p-10 text-center sm:p-16"
          style={{
            background:
              "linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 70%, var(--yellow)))",
          }}
        >
          {/* Decorative circles */}
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-20"
            style={{ background: "var(--bg)" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full opacity-10"
            style={{ background: "var(--bg)" }}
            aria-hidden="true"
          />

          <h2
            className="relative font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl"
            style={{ color: "var(--bg)" }}
          >
            Bora tirar sua ideia do papel?
          </h2>
          <p
            className="relative mx-auto mt-4 max-w-xl text-lg"
            style={{ color: "color-mix(in srgb, var(--bg) 85%, transparent)" }}
          >
            Fale com a gente agora mesmo. O orçamento é por nossa conta — você
            só paga quando decidir começar.
          </p>
          <a
            href="#contato"
            className="relative mt-8 inline-flex items-center gap-2 rounded-xl px-8 py-4 font-display text-base font-bold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "var(--bg)",
              color: "var(--accent)",
              textDecoration: "none",
            }}
          >
            Falar com a equipe
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
