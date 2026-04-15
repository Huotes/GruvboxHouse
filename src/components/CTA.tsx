"use client";

import { motion } from "motion/react";
import { Quote, MessageCircle } from "lucide-react";
import { useInView } from "@/lib/useInView";
import { WA_LINK } from "@/lib/constants";

const STATS = [
  { v: "50+", l: "Projetos entregues" },
  { v: "100%", l: "Orçamentos grátis" },
  { v: "48h", l: "Tempo de resposta" },
  { v: "4.9★", l: "Nota dos clientes" },
] as const;

const DEPS = [
  {
    n: "Mariana S.",
    r: "Clínica Estética",
    t: "Não entendia nada de tecnologia e me explicaram tudo com paciência. Hoje tenho um agendamento que roda sozinho!",
  },
  {
    n: "Carlos R.",
    r: "Distribuidora",
    t: "Pedi uma automação pro estoque e entregaram em duas semanas. Economizo horas todo dia.",
  },
  {
    n: "Juliana M.",
    r: "Empreendedora Digital",
    t: "Queria tirar meu app do papel e não sabia por onde começar. Fizeram tudo: do design ao lançamento.",
  },
] as const;

export function CTA() {
  const { ref: r1, isInView: v1 } = useInView();
  const { ref: r2, isInView: v2 } = useInView();

  return (
    <section
      className="section-padding"
      style={{ background: "var(--bg-deep)" }}
    >
      <div className="section-inner">
        {/* Stats */}
        <div
          ref={r1}
          className="mx-auto mb-24 grid max-w-4xl grid-cols-2 gap-6 rounded-2xl p-10 md:grid-cols-4"
          style={{
            background: "var(--bg1)",
            border: "1px solid var(--card-border)",
          }}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={v1 ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, type: "spring" }}
              className="text-center"
            >
              <div
                className="font-display text-3xl font-black sm:text-4xl md:text-5xl text-glow"
                style={{ color: "var(--accent)" }}
              >
                {s.v}
              </div>
              <div
                className="mt-2 text-sm font-medium"
                style={{ color: "var(--fg-muted)" }}
              >
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Depoimentos */}
        <div ref={r2}>
          <span
            className="font-mono text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: "var(--accent)" }}
          >
            // Depoimentos
          </span>
          <h2
            className="mt-4 font-display text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ color: "var(--fg)" }}
          >
            Quem já <span className="text-gradient">confiou</span> na gente
          </h2>

          <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-3">
            {DEPS.map((d, i) => (
              <motion.article
                key={d.n}
                initial={{ opacity: 0, y: 24 }}
                animate={v2 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="glass-card !items-start !text-left"
              >
                <Quote
                  size={24}
                  className="mb-4 opacity-20"
                  style={{ color: "var(--accent)" }}
                />
                <p
                  className="text-base leading-relaxed italic"
                  style={{ color: "var(--fg-soft)" }}
                >
                  &ldquo;{d.t}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-full font-display text-sm font-black"
                    style={{ background: "var(--accent)", color: "var(--bg)" }}
                  >
                    {d.n[0]}
                  </div>
                  <div className="text-left">
                    <div
                      className="font-display text-sm font-bold"
                      style={{ color: "var(--fg)" }}
                    >
                      {d.n}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {d.r}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="animate-pulse-neon mx-auto mt-24 max-w-4xl overflow-hidden rounded-3xl p-12 text-center sm:p-20"
          style={{
            background:
              "linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--neon) 70%, var(--accent)))",
          }}
        >
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-20"
            style={{ background: "var(--bg)" }}
          />
          <h2
            className="relative font-display text-3xl font-black uppercase tracking-wide sm:text-4xl md:text-5xl"
            style={{ color: "var(--bg)" }}
          >
            Pronto para decolar?
          </h2>
          <p
            className="relative mx-auto mt-5 max-w-lg text-lg"
            style={{ color: "color-mix(in srgb, var(--bg) 80%, transparent)" }}
          >
            O orçamento é por nossa conta. Você só investe quando decidir
            começar.
          </p>
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-10 inline-flex items-center gap-2 rounded-xl px-8 py-4 font-display text-sm font-black uppercase tracking-wider"
            style={{
              background: "var(--bg)",
              color: "var(--accent)",
              textDecoration: "none",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={18} /> Chamar no WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
