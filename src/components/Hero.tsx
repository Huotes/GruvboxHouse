"use client";

import { motion } from "motion/react";
import { MessageCircle, ArrowDown } from "lucide-react";
import { WA_LINK } from "@/lib/constants";

export function Hero() {
  return (
    <section className="starfield relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 text-center" style={{ background: "var(--bg-deep)" }}>
      {/* Nebula blurs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/4 rounded-full opacity-20 blur-[120px]" style={{ background: "var(--accent)" }} />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full opacity-10 blur-[100px]" style={{ background: "var(--neon)" }} />
        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full opacity-10 blur-[80px]" style={{ background: "var(--blue)" }} />
        {/* Orbiting dot */}
        <div className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full" style={{ background: "var(--accent)", animation: "spin-slow 20s linear infinite", transformOrigin: "-120px 0" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="animate-pulse-neon mb-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest"
          style={{ background: "var(--accent-glow)", color: "var(--accent)", border: "1px solid var(--accent)" }}
        >
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }} />
          Orçamento gratuito
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }}
          className="font-display text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ color: "var(--fg)" }}
        >
          Sua ideia{" "}
          <span className="text-gradient text-glow">merece decolar.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed sm:text-xl"
          style={{ color: "var(--fg-muted)" }}
        >
          Tem um projeto que precisa do digital mas não sabe por onde começar?
          A <strong style={{ color: "var(--accent)" }}>Gruvbox House</strong> transforma
          sua ideia em software — rápido, acessível e sob medida.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <motion.a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <MessageCircle size={18} /> Chamar no WhatsApp
          </motion.a>
          <motion.a href="#servicos" className="btn-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Explorar serviços
          </motion.a>
        </motion.div>

        {/* Trust */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--fg-muted)" }}
        >
          {["Entrega veloz", "Cabe no bolso", "Suporte humano"].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)", boxShadow: "0 0 6px var(--accent)" }} />
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 animate-float"
      >
        <ArrowDown size={20} style={{ color: "var(--fg-muted)" }} />
      </motion.div>
    </section>
  );
}
