"use client";
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
type Theme = "light" | "dark";
interface ThemeCtx { theme: Theme; toggleTheme: () => void; }
const Ctx = createContext<ThemeCtx>({ theme: "dark", toggleTheme: () => {} });
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [ok, setOk] = useState(false);
  useEffect(() => { const s = localStorage.getItem("gruvbox-theme") as Theme | null; const p = window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light"; setTheme(s ?? p); setOk(true); }, []);
  useEffect(() => { if (!ok) return; document.documentElement.setAttribute("data-theme", theme); localStorage.setItem("gruvbox-theme", theme); }, [theme, ok]);
  const toggleTheme = useCallback(() => setTheme(p => p === "dark" ? "light" : "dark"), []);
  return <Ctx.Provider value={{ theme, toggleTheme }}><div style={{ visibility: ok ? "visible" : "hidden" }}>{children}</div></Ctx.Provider>;
}
export function useTheme() { return useContext(Ctx); }
