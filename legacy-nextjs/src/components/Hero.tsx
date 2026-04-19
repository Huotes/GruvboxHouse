"use client";

import { motion } from "motion/react";
import { MessageCircle, ArrowDown } from "lucide-react";
import { WA_LINK } from "@/lib/constants";
import { useTheme } from "@/context/ThemeContext";
import { Nebula, OrbitDot, Planet, Spaceship, FloatingAlien } from "./SpaceDecorations";

export function Hero() {
  const { theme } = useTheme();
  return (
    <section
      className="starfield relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
      style={{ background: "var(--bg-deep)" }}
    >
      <Nebula />
      <OrbitDot radius={160} duration={25} size={3} />
      <OrbitDot radius={240} duration={40} size={2} delay={5} />
      <Planet size={180} x="-5%" y="15%" color="var(--accent)" rings />
      <Planet size={80} x="85%" y="60%" color="var(--neon)" />
      <Spaceship x="70%" y="12%" size={80} />
      <FloatingAlien x="88%" y="35%" size={40} />

      <div className="relative z-10 mx-auto w-full max-w-[900px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="animate-pulse-neon mb-10 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest"
          style={{
            background: "var(--accent-glow)",
            color: "var(--accent)",
            border: "1px solid var(--accent)",
          }}
        >
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{
              background: "var(--accent)",
              boxShadow: "0 0 8px var(--accent)",
            }}
          />
          {theme === "dark" ? "// Transmissão interestelar" : "// Sinal captado de Marte"}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mx-auto max-w-[800px] font-display font-black leading-[1.05] tracking-tight"
          style={{ color: "var(--fg)", fontSize: "clamp(42px, 8vw, 88px)" }}
        >
          Sua ideia{" "}
          <span className="text-gradient text-glow">merece decolar.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mx-auto mt-8 max-w-[640px] text-lg leading-relaxed sm:text-xl md:text-2xl"
          style={{ color: "var(--fg-muted)" }}
        >
          Tem um projeto que precisa do digital mas não sabe por onde começar? A{" "}
          <strong style={{ color: "var(--accent)" }}>GruvboxHouse</strong>{" "}
          transforma sua ideia em software — rápido, acessível e sob medida.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-center"
        >
          <motion.a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={18} /> Chamar no WhatsApp
          </motion.a>
          <motion.a
            href="#servicos"
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explorar serviços
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-mono text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--fg-muted)" }}
        >
          {["Entrega veloz", "Cabe no bolso", "Suporte humano"].map((t) => (
            <span key={t} className="flex items-center gap-2.5">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{
                  background: "var(--accent)",
                  boxShadow: "0 0 6px var(--accent)",
                }}
              />
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 animate-float"
      >
        <ArrowDown size={20} style={{ color: "var(--fg-muted)" }} />
      </motion.div>
    </section>
  );
}
