"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useInView } from "@/lib/useInView";

const TECHS = [
  { name: "Python", icon: "/icons/black-python.svg", tagline: "Automação & IA", desc: "Automações, análise de dados e inteligência artificial. Seu negócio no piloto automático.", color: "var(--blue)" },
  { name: "Go", icon: "/icons/black-go.svg", tagline: "Velocidade & Escala", desc: "Sistemas ultrarrápidos que aguentam milhares de acessos sem travar.", color: "var(--aqua)" },
  { name: "TypeScript", icon: "/icons/black-typescript.svg", tagline: "Interfaces & Apps", desc: "Sites, apps e painéis modernos que funcionam em qualquer tela.", color: "var(--green)" },
] as const;

export function Technologies() {
  const { ref, isInView } = useInView();
  return (
    <section id="tecnologias" className="starfield section-padding" style={{ background: "var(--bg)" }}>
      <div className="mx-auto max-w-5xl text-center" ref={ref}>
        <motion.span initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          className="font-mono text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--accent)" }}>
          // Tecnologias
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
          className="mt-3 font-display text-3xl font-black sm:text-4xl md:text-5xl" style={{ color: "var(--fg)" }}>
          Ferramentas de <span className="text-gradient">outro mundo</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
          className="mx-auto mt-4 max-w-lg text-lg" style={{ color: "var(--fg-muted)" }}>
          Você não precisa entender de tecnologia — a gente domina por você.
        </motion.p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TECHS.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="glass-card relative overflow-hidden text-center"
            >
              <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${t.color}, transparent)` }} />
              <motion.div
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{ background: `color-mix(in srgb, ${t.color} 10%, transparent)`, border: `1px solid color-mix(in srgb, ${t.color} 20%, transparent)` }}
                whileHover={{ scale: 1.15, rotate: -10, boxShadow: `0 0 24px color-mix(in srgb, ${t.color} 30%, transparent)` }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Image src={t.icon} alt={t.name} width={32} height={32} className="icon-hover" style={{ filter: "var(--icon-filter, none)" }} />
              </motion.div>
              <h3 className="font-display text-2xl font-black" style={{ color: "var(--fg)" }}>{t.name}</h3>
              <span className="mt-1 inline-block font-mono text-[0.65rem] font-extrabold uppercase tracking-[0.2em]" style={{ color: t.color }}>{t.tagline}</span>
              <p className="mt-3 text-[0.95rem] leading-relaxed" style={{ color: "var(--fg-muted)" }}>{t.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}
          className="mt-10 text-sm" style={{ color: "var(--fg-muted)" }}>
          Também usamos React, Next.js, Docker, PostgreSQL, Redis e mais — sempre a melhor ferramenta para cada projeto.
        </motion.p>
      </div>
    </section>
  );
}
