"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#contato", label: "Contato" },
] as const;

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? "var(--glass)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--card-border)" : "none",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight"
          style={{ color: "var(--fg)", textDecoration: "none" }}
        >
          <Image
            src="/assets/gruvboxhouse_logo.png"
            alt="Gruvbox House Logo"
            width={36}
            height={36}
            className="rounded-lg"
            priority
          />
          <span>
            Gruvbox<span style={{ color: "var(--accent)" }}> House</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--fg-muted)", textDecoration: "none" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--fg-muted)")
              }
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"
            }
            className="flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200"
            style={{
              background: "var(--bg1)",
              color: "var(--fg-muted)",
              border: "1px solid var(--card-border)",
            }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href="#contato"
            className="btn-primary"
            style={{ padding: "0.6rem 1.5rem", fontSize: "0.875rem" }}
          >
            Orçamento Grátis
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"
            }
            className="flex h-9 w-9 items-center justify-center rounded-full"
            style={{
              background: "var(--bg1)",
              color: "var(--fg-muted)",
              border: "1px solid var(--card-border)",
            }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="flex h-9 w-9 items-center justify-center"
            style={{ color: "var(--fg)" }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ background: "var(--bg)" }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute right-5 top-5"
            style={{ color: "var(--fg)" }}
            aria-label="Fechar menu"
          >
            <X size={28} />
          </button>

          <Image
            src="/assets/gruvboxhouse_logo.png"
            alt="Gruvbox House Logo"
            width={64}
            height={64}
            className="mb-4 rounded-xl"
          />

          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-2xl font-semibold transition-colors"
              style={{ color: "var(--fg)", textDecoration: "none" }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-4"
          >
            Orçamento Grátis
          </a>
        </div>
      )}
    </header>
  );
}
