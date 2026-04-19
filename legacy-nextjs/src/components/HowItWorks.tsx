"use client";

import { motion } from "motion/react";
import { MessageCircle, Lightbulb, Code2, Rocket } from "lucide-react";
import { useInView } from "@/lib/useInView";
import { FloatingAlien, Planet } from "./SpaceDecorations";

const STEPS = [
  {
    icon: MessageCircle,
    n: "01",
    title: "Você conta a ideia",
    desc: "WhatsApp, e-mail ou call. Sem jargão, sem formulário.",
    color: "var(--aqua)",
  },
  {
    icon: Lightbulb,
    n: "02",
    title: "A gente planeja",
    desc: "Escopo, prazo e valor. Tudo claro e transparente.",
    color: "var(--green)",
  },
  {
    icon: Code2,
    n: "03",
    title: "Desenvolvimento ágil",
    desc: "Construímos com as melhores tecnologias. Você acompanha.",
    color: "var(--yellow)",
  },
  {
    icon: Rocket,
    n: "04",
    title: "Lançamento!",
    desc: "Entregamos funcionando e ficamos do seu lado pra evoluir.",
    color: "var(--neon)",
  },
] as const;

export function HowItWorks() {
  const { ref, isInView } = useInView();
  return (
    <section
      id="processo"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--bg-deep)" }}
    >
      <FloatingAlien x="5%" y="10%" size={55} className="opacity-30" />
      <Planet size={60} x="90%" y="70%" color="var(--accent)" className="opacity-40" />

      <div className="section-inner" ref={ref}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="font-mono text-xs font-bold uppercase tracking-[0.2em]"
          style={{ color: "var(--accent)" }}
        >
          // Processo
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mt-4 font-display text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ color: "var(--fg)" }}
        >
          Do zero ao lançamento em{" "}
          <span className="text-gradient">4 passos</span>
        </motion.h2>

        <div
          className="mx-auto mt-16 grid w-full max-w-[1000px]"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="glass-card glass-card--centered glass-card-equal"
              >
                <motion.div
                  className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl"
                  style={{
                    background: `color-mix(in srgb, ${s.color} 12%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${s.color} 20%, transparent)`,
                  }}
                  whileHover={{ scale: 1.12, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon size={26} style={{ color: s.color }} />
                </motion.div>
                <span
                  className="font-mono text-[0.65rem] font-extrabold uppercase tracking-[0.3em]"
                  style={{ color: s.color }}
                >
                  Passo {s.n}
                </span>
                <h3
                  className="mt-2 font-display text-xl font-extrabold"
                  style={{ color: "var(--fg)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-3 text-base leading-relaxed"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
