"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

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
      className="fixed top-0 inset-x-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? "var(--glass)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--card-border)" : "none",
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-2.5" style={{ textDecoration: "none" }}>
          <Image src="/assets/gruvboxhouse_logo.png" alt="Gruvbox House" width={36} height={36} className="rounded-lg" priority />
          <span className="font-display text-lg font-bold" style={{ color: "var(--fg)" }}>
            Gruvbox<span style={{ color: "var(--accent)" }}> House</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV.map((l) => (
            <a
              key={l.href} href={l.href}
              className="font-display text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--fg-muted)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-muted)")}
            >{l.label}</a>
          ))}
          <button onClick={toggleTheme} aria-label="Alternar tema"
            className="flex h-9 w-9 items-center justify-center rounded-full transition-all"
            style={{ background: "var(--bg1)", color: "var(--fg-muted)", border: "1px solid var(--card-border)" }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.55rem 1.4rem", fontSize: "0.85rem" }}>
            Fale Conosco
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button onClick={toggleTheme} aria-label="Alternar tema"
            className="flex h-9 w-9 items-center justify-center rounded-full"
            style={{ background: "var(--bg1)", color: "var(--fg-muted)", border: "1px solid var(--card-border)" }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Menu" style={{ color: "var(--fg)" }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-7" style={{ background: "var(--bg)" }}>
          <button onClick={() => setOpen(false)} className="absolute right-5 top-5" style={{ color: "var(--fg)" }} aria-label="Fechar"><X size={28} /></button>
          <Image src="/assets/gruvboxhouse_logo.png" alt="Logo" width={56} height={56} className="mb-2 rounded-xl" />
          {NAV.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="font-display text-2xl font-semibold" style={{ color: "var(--fg)", textDecoration: "none" }}
            >{l.label}</a>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn-whatsapp mt-4">
            Chamar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
