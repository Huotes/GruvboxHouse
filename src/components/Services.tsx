"use client";

import { Globe, Bot, Smartphone, BarChart3, ShieldCheck, Zap } from "lucide-react";
import { useInView } from "@/lib/useInView";

const SERVICES = [
  { icon: Globe, title: "Sites & Sistemas Web", desc: "Lojas virtuais, painéis e plataformas que funcionam em qualquer dispositivo. Seu negócio acessível 24 horas.", color: "var(--aqua)" },
  { icon: Bot, title: "Automações", desc: "Robôs que trabalham por você: relatórios, notificações, controle de estoque — tudo no piloto automático.", color: "var(--green)" },
  { icon: Smartphone, title: "Apps para Celular", desc: "Aplicativos que seus clientes vão adorar. Bonitos, intuitivos e rápidos.", color: "var(--blue)" },
  { icon: BarChart3, title: "Painéis & Relatórios", desc: "Seus dados apresentados de forma visual e clara. Tome decisões com confiança.", color: "var(--yellow)" },
  { icon: ShieldCheck, title: "Integração de Sistemas", desc: "Conectamos suas ferramentas: planilhas, ERPs, pagamentos e APIs conversando entre si.", color: "var(--purple)" },
  { icon: Zap, title: "Consultoria Técnica", desc: "Não sabe qual caminho seguir? Ajudamos a definir o que precisa ser feito, sem enrolação.", color: "var(--orange)" },
] as const;

export function Services() {
  const { ref, isInView } = useInView();

  return (
    <section id="servicos" className="stars-bg section-padding" style={{ background: "var(--bg-soft)" }}>
      <div className="mx-auto max-w-5xl text-center" ref={ref}>
        <span className="font-mono text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
          Nossos Serviços
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl" style={{ color: "var(--fg)" }}>
          Soluções que <span className="text-gradient">fazem acontecer</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg" style={{ color: "var(--fg-muted)" }}>
          Tecnologia pensada para quem quer resultado — não complicação.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <article key={s.title} className="glass-card group text-center"
                style={{ opacity: isInView ? 1 : 0, transform: isInView ? "none" : "translateY(24px)", transition: `all 0.5s ease ${i * 0.08}s` }}>
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `color-mix(in srgb, ${s.color} 15%, transparent)`, color: s.color }}>
                  <Icon size={26} />
                </div>
                <h3 className="font-display text-lg font-bold" style={{ color: "var(--fg)" }}>{s.title}</h3>
                <p className="mt-2 text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>{s.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
