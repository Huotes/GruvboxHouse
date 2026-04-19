"use client";

import { motion } from "motion/react";
import {
  Globe,
  Bot,
  Smartphone,
  BarChart3,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useInView } from "@/lib/useInView";
import { Planet, Spaceship } from "./SpaceDecorations";

const SVC = [
  {
    icon: Globe,
    title: "Sites & Sistemas Web",
    desc: "Desenvolvemos lojas virtuais, painéis administrativos e plataformas completas acessíveis 24h de qualquer dispositivo. Cada projeto é pensado sob medida para o seu negócio.",
    color: "var(--aqua)",
  },
  {
    icon: Bot,
    title: "Automações",
    desc: "Criamos robôs inteligentes que trabalham por você: relatórios automáticos, alertas em tempo real e controle de estoque sem intervenção manual. Menos trabalho repetitivo, mais resultado.",
    color: "var(--green)",
  },
  {
    icon: Smartphone,
    title: "Apps para Celular",
    desc: "Projetamos aplicativos nativos e híbridos com interfaces intuitivas e performance impecável. Do conceito ao lançamento nas lojas, cuidamos de cada detalhe.",
    color: "var(--blue)",
  },
  {
    icon: BarChart3,
    title: "Painéis & Relatórios",
    desc: "Transformamos dados brutos em dashboards visuais e relatórios claros. Tome decisões estratégicas com confiança, baseadas em informações reais do seu negócio.",
    color: "var(--yellow)",
  },
  {
    icon: ShieldCheck,
    title: "Integração de Sistemas",
    desc: "Conectamos planilhas, ERPs, gateways de pagamento e APIs externas. Seus sistemas conversando entre si sem retrabalho, numa arquitetura robusta e escalável.",
    color: "var(--purple)",
  },
  {
    icon: Zap,
    title: "Consultoria Técnica",
    desc: "Não sabe por onde começar? Fazemos o diagnóstico do seu negócio e planejamos o caminho ideal: tecnologia certa, prazo realista e orçamento justo.",
    color: "var(--orange)",
  },
] as const;

export function Services() {
  const { ref, isInView } = useInView();
  return (
    <section
      id="servicos"
      className="starfield section-padding relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <Planet size={100} x="92%" y="5%" color="var(--neon)" className="opacity-50" />
      <Spaceship x="3%" y="80%" size={70} flip className="opacity-40" />

      <div className="section-inner" ref={ref}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="font-mono text-xs font-bold uppercase tracking-[0.2em]"
          style={{ color: "var(--accent)" }}
        >
          // Serviços
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mt-4 font-display text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ color: "var(--fg)" }}
        >
          Soluções que <span className="text-gradient">fazem acontecer</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-lg md:text-xl"
          style={{ color: "var(--fg-muted)" }}
        >
          Tecnologia pensada para quem quer resultado — não complicação. Cada projeto nasce de uma conversa sobre a sua ideia e se transforma em software sob medida, com as ferramentas certas para cada desafio.
        </motion.p>

        <div
          className="mx-auto mt-16 grid w-full max-w-[1000px]"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {SVC.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                className="glass-card glass-card--centered glass-card-equal"
              >
                <motion.div
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
                  style={{
                    background: `color-mix(in srgb, ${s.color} 12%, transparent)`,
                    color: s.color,
                  }}
                  whileHover={{ scale: 1.15, rotate: -8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon size={28} strokeWidth={1.8} />
                </motion.div>
                <h3
                  className="font-display text-xl font-extrabold"
                  style={{ color: "var(--fg)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-3 flex-1 text-base leading-relaxed"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {s.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
