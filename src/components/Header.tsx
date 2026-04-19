"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import { WA_LINK } from "@/lib/constants";

const NAV = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#contato", label: "Contato" },
] as const;

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className="fixed top-0 inset-x-0 transition-all duration-500"
      style={{
        zIndex: 100,
        background: scrolled ? "var(--glass)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid var(--card-border)" : "none",
      }}
    >
      <nav className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-6 py-4">
        <motion.a
          href="#" className="flex items-center gap-2.5"
          style={{ textDecoration: "none" }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <Image src="/assets/gruvboxhouse_logo.png" alt="GruvboxHouse" width={36} height={36} className="rounded-lg" priority />
          <span className="font-display text-lg font-extrabold tracking-tight" style={{ color: "var(--fg)" }}>
            GruvboxHouse
          </span>
        </motion.a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV.map((l) => (
            <motion.a
              key={l.href} href={l.href}
              className="font-display text-sm font-bold uppercase tracking-wider"
              style={{ color: "var(--fg-muted)", textDecoration: "none" }}
              whileHover={{ color: "var(--accent)", y: -1 }}
              transition={{ duration: 0.2 }}
            >{l.label}</motion.a>
          ))}
          <motion.button
            onClick={toggleTheme} aria-label="Alternar tema"
            className="flex h-9 w-9 items-center justify-center rounded-full"
            style={{ background: "var(--bg1)", color: "var(--fg-muted)", border: "1px solid var(--card-border)" }}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>
          <motion.a
            href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-primary" style={{ padding: "0.55rem 1.4rem", fontSize: "0.8rem" }}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          >Fale Conosco</motion.a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button onClick={toggleTheme} aria-label="Tema"
            className="flex h-9 w-9 items-center justify-center rounded-full"
            style={{ background: "var(--bg1)", color: "var(--fg-muted)", border: "1px solid var(--card-border)" }}
          >{theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}</button>
          <button onClick={() => setOpen(!open)} style={{ color: "var(--fg)" }} aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-7"
            style={{ background: "var(--bg)" }}
          >
            <button onClick={() => setOpen(false)} className="absolute right-5 top-5" style={{ color: "var(--fg)" }}><X size={28} /></button>
            <Image src="/assets/gruvboxhouse_logo.png" alt="Logo" width={56} height={56} className="mb-2 rounded-xl" />
            {NAV.map((l, i) => (
              <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                className="font-display text-2xl font-bold uppercase tracking-wider" style={{ color: "var(--fg)", textDecoration: "none" }}
              >{l.label}</motion.a>
            ))}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn-whatsapp mt-4">WhatsApp</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
