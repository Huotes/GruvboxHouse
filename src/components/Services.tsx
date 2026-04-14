"use client";

import { motion } from "motion/react";
import { Globe, Bot, Smartphone, BarChart3, ShieldCheck, Zap } from "lucide-react";
import { useInView } from "@/lib/useInView";

const SVC = [
  { icon: Globe, title: "Sites & Sistemas Web", desc: "Lojas virtuais, painéis e plataformas acessíveis de qualquer dispositivo, 24 horas.", color: "var(--aqua)" },
  { icon: Bot, title: "Automações", desc: "Robôs que trabalham por você: relatórios, alertas e controle de estoque no automático.", color: "var(--green)" },
  { icon: Smartphone, title: "Apps para Celular", desc: "Aplicativos bonitos, intuitivos e rápidos que seus clientes vão adorar.", color: "var(--blue)" },
  { icon: BarChart3, title: "Painéis & Relatórios", desc: "Seus dados apresentados de forma visual e clara para tomar decisões com confiança.", color: "var(--yellow)" },
  { icon: ShieldCheck, title: "Integração de Sistemas", desc: "Conectamos planilhas, ERPs, pagamentos e APIs. Tudo conversando entre si.", color: "var(--purple)" },
  { icon: Zap, title: "Consultoria Técnica", desc: "Não sabe por onde começar? A gente planeja o caminho ideal para seu projeto.", color: "var(--orange)" },
] as const;

export function Services() {
  const { ref, isInView } = useInView();
  return (
    <section id="servicos" className="starfield section-padding" style={{ background: "var(--bg)" }}>
      <div className="mx-auto max-w-5xl text-center" ref={ref}>
        <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          className="font-mono text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--accent)" }}>
          // Serviços
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
          className="mt-3 font-display text-3xl font-black sm:text-4xl md:text-5xl" style={{ color: "var(--fg)" }}>
          Soluções que <span className="text-gradient">fazem acontecer</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
          className="mx-auto mt-4 max-w-lg text-lg" style={{ color: "var(--fg-muted)" }}>
          Tecnologia pensada para quem quer resultado — não complicação.
        </motion.p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SVC.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article key={s.title}
                initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
                className="glass-card group text-center"
              >
                <motion.div
                  className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ background: `color-mix(in srgb, ${s.color} 12%, transparent)`, color: s.color }}
                  whileHover={{ scale: 1.15, rotate: -8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon size={26} strokeWidth={2} />
                </motion.div>
                <h3 className="font-display text-lg font-extrabold" style={{ color: "var(--fg)" }}>{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed" style={{ color: "var(--fg-muted)" }}>{s.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
