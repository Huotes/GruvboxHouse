"use client";

import {
  Globe,
  Bot,
  Smartphone,
  BarChart3,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useInView } from "@/lib/useInView";

const SERVICES = [
  {
    icon: Globe,
    title: "Sites & Sistemas Web",
    description:
      "Lojas virtuais, painéis administrativos, plataformas completas. Tudo acessível de qualquer lugar, no computador ou celular.",
    color: "var(--blue)",
  },
  {
    icon: Bot,
    title: "Automações Inteligentes",
    description:
      "Robôs que fazem o trabalho repetitivo por você. Relatórios, envio de mensagens, controle de estoque — tudo no automático.",
    color: "var(--green)",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description:
      "Apps para celular que seus clientes vão adorar usar. Intuitivos, bonitos e funcionais.",
    color: "var(--purple)",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Relatórios",
    description:
      "Visualize seus dados de um jeito claro. Painéis que mostram exatamente o que importa para tomar decisões.",
    color: "var(--yellow)",
  },
  {
    icon: ShieldCheck,
    title: "Integração de Sistemas",
    description:
      "Conectamos suas ferramentas: planilhas, ERPs, meios de pagamento e APIs. Tudo conversando entre si.",
    color: "var(--aqua)",
  },
  {
    icon: Zap,
    title: "Consultoria Técnica",
    description:
      "Não sabe qual caminho seguir? A gente ajuda a definir o que precisa ser feito, sem enrolação.",
    color: "var(--orange)",
  },
] as const;

export function Services() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="servicos"
      className="section-padding"
      style={{ background: "var(--bg-soft)" }}
    >
      <div className="mx-auto max-w-7xl" ref={ref}>
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span
            className="font-mono text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            Nossos Serviços
          </span>
          <h2
            className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            style={{ color: "var(--fg)" }}
          >
            O que a gente faz{" "}
            <span style={{ color: "var(--accent)" }}>de melhor</span>
          </h2>
          <p
            className="mt-4 text-lg"
            style={{ color: "var(--fg-muted)" }}
          >
            Soluções digitais pensadas para quem quer resultado, não
            complicação.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="glass-card group"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.5s ease ${i * 0.1}s`,
                }}
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `color-mix(in srgb, ${service.color} 15%, transparent)`,
                    color: service.color,
                  }}
                >
                  <Icon size={24} />
                </div>
                <h3
                  className="font-display text-lg font-bold"
                  style={{ color: "var(--fg)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="mt-2 text-base leading-relaxed"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
