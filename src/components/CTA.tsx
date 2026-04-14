"use client";

import { ArrowRight, Quote, MessageCircle } from "lucide-react";
import { useInView } from "@/lib/useInView";
import { WHATSAPP_LINK } from "@/lib/constants";

const STATS = [
  { value: "50+", label: "Projetos entregues" },
  { value: "100%", label: "Orçamentos grátis" },
  { value: "48h", label: "Tempo de resposta" },
  { value: "4.9★", label: "Nota dos clientes" },
] as const;

const DEPOIMENTOS = [
  {
    name: "Mariana S.",
    role: "Clínica Estética",
    text: "Não entendia nada de tecnologia e me explicaram tudo com paciência. Hoje tenho um agendamento que roda sozinho!",
  },
  {
    name: "Carlos R.",
    role: "Distribuidora",
    text: "Pedi uma automação pro estoque e entregaram em duas semanas. Economizo horas todo dia.",
  },
  {
    name: "Juliana M.",
    role: "Empreendedora Digital",
    text: "Queria tirar meu app do papel e não sabia por onde começar. Fizeram tudo: do design ao lançamento.",
  },
] as const;

export function CTA() {
  const { ref: refStats, isInView: statsVisible } = useInView();
  const { ref: refDep, isInView: depVisible } = useInView();

  return (
    <section className="section-padding" style={{ background: "var(--bg)" }}>
      <div className="mx-auto max-w-5xl">
        {/* Stats */}
        <div
          ref={refStats}
          className="mb-20 grid grid-cols-2 gap-6 rounded-2xl p-8 text-center md:grid-cols-4"
          style={{
            background: "var(--bg1)",
            border: "1px solid var(--card-border)",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                opacity: statsVisible ? 1 : 0,
                transform: statsVisible ? "none" : "translateY(12px)",
                transition: `all 0.4s ease ${i * 0.1}s`,
              }}
            >
              <div
                className="font-display text-3xl font-extrabold sm:text-4xl"
                style={{ color: "var(--accent)" }}
              >
                {s.value}
              </div>
              <div
                className="mt-1 text-sm font-medium"
                style={{ color: "var(--fg-muted)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Depoimentos */}
        <div ref={refDep} className="text-center">
          <span
            className="font-mono text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            Depoimentos
          </span>
          <h2
            className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl"
            style={{ color: "var(--fg)" }}
          >
            Quem já <span className="text-gradient">confiou</span> na gente
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {DEPOIMENTOS.map((d, i) => (
              <article
                key={d.name}
                className="glass-card text-left"
                style={{
                  opacity: depVisible ? 1 : 0,
                  transform: depVisible ? "none" : "translateY(20px)",
                  transition: `all 0.5s ease ${i * 0.1}s`,
                }}
              >
                <Quote
                  size={24}
                  className="mb-3 opacity-20"
                  style={{ color: "var(--accent)" }}
                />
                <p
                  className="text-base leading-relaxed italic"
                  style={{ color: "var(--fg-soft)" }}
                >
                  &ldquo;{d.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold"
                    style={{ background: "var(--accent)", color: "var(--bg)" }}
                  >
                    {d.name[0]}
                  </div>
                  <div>
                    <div
                      className="font-display text-sm font-semibold"
                      style={{ color: "var(--fg)" }}
                    >
                      {d.name}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {d.role}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Banner CTA */}
        <div
          className="relative mt-20 overflow-hidden rounded-3xl p-10 text-center sm:p-16"
          style={{
            background:
              "linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 60%, var(--green)))",
          }}
        >
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-20"
            style={{ background: "var(--bg)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full opacity-10"
            style={{ background: "var(--bg)" }}
          />

          <h2
            className="relative font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl"
            style={{ color: "var(--bg)" }}
          >
            Pronto para decolar?
          </h2>
          <p
            className="relative mx-auto mt-4 max-w-xl text-lg"
            style={{ color: "color-mix(in srgb, var(--bg) 85%, transparent)" }}
          >
            O orçamento é por nossa conta. Você só investe quando decidir
            começar.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-8 inline-flex items-center gap-2 rounded-xl px-8 py-4 font-display text-base font-bold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "var(--bg)",
              color: "var(--accent)",
              textDecoration: "none",
            }}
          >
            <MessageCircle size={18} />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
