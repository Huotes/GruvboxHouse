import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gruvbox House — Software sob medida para o seu negócio",
  description: "Automações, aplicativos e sistemas web sob encomenda. Orçamento grátis, soluções rápidas que cabem no seu bolso.",
  keywords: ["software sob encomenda", "automação", "desenvolvimento web", "orçamento grátis"],
  icons: { icon: "/favicon.ico" },
  openGraph: { title: "Gruvbox House — Software sob medida", description: "Automações e sistemas web sob encomenda.", type: "website", locale: "pt_BR" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;800&family=Outfit:wght@400;500;600;700;800;900&family=Source+Sans+3:wght@400;500;600&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('gruvbox-theme');if(!t)t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t)}catch(e){}})();` }} />
      </head>
      <body className="scan-overlay">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
