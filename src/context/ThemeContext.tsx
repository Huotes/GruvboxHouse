"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeCtx {
  theme: Theme;
  toggleTheme: () => void;
}

const Ctx = createContext<ThemeCtx>({
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("gruvbox-theme") as Theme | null;
    const preferred: Theme = window.matchMedia("(prefers-color-scheme:dark)")
      .matches
      ? "dark"
      : "light";
    setTheme(stored ?? preferred);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("gruvbox-theme", theme);
  }, [theme, hydrated]);

  const toggleTheme = useCallback(
    () => setTheme((p) => (p === "dark" ? "light" : "dark")),
    [],
  );

  return (
    <Ctx.Provider value={{ theme, toggleTheme }}>{children}</Ctx.Provider>
  );
}

export function useTheme(): ThemeCtx {
  return useContext(Ctx);
}
