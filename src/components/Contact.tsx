"use client";

import { useState, type FormEvent } from "react";
import { Send, Mail, MessageCircle, Clock, Phone } from "lucide-react";
import { useInView } from "@/lib/useInView";
import { WHATSAPP_LINK, WHATSAPP_DISPLAY, EMAIL } from "@/lib/constants";

interface FormState { name: string; email: string; message: string; }

export function Contact() {
  const { ref, isInView } = useInView();
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`[Gruvbox House] Contato de ${form.name}`);
    const body = encodeURIComponent(`Nome: ${form.name}\nE-mail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "0.875rem 1rem", background: "var(--bg1)", color: "var(--fg)",
    border: "1px solid var(--card-border)", borderRadius: "12px",
    fontFamily: "var(--font-body)", fontSize: "1rem", outline: "none", transition: "border-color 0.2s",
  };

  return (
    <section id="contato" className="stars-bg section-padding" style={{ background: "var(--bg-soft)" }}>
      <div className="mx-auto max-w-5xl" ref={ref}>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>Contato</span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl" style={{ color: "var(--fg)" }}>
            Vamos <span className="text-gradient">conversar?</span>
          </h2>
          <p className="mt-4 text-lg" style={{ color: "var(--fg-muted)" }}>
            Conte sua ideia. Sem compromisso, sem pegadinha.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-5">
          {/* Info */}
          <div className="flex flex-col gap-5 lg:col-span-2"
            style={{ opacity: isInView ? 1 : 0, transform: isInView ? "none" : "translateX(-24px)", transition: "all 0.6s ease" }}>

            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="glass-card flex items-start gap-4 group" style={{ textDecoration: "none" }}>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: "rgba(37,211,102,0.15)", color: "#25D366" }}>
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold" style={{ color: "var(--fg)" }}>WhatsApp</h3>
                <p className="mt-0.5 text-base font-medium" style={{ color: "#25D366" }}>{WHATSAPP_DISPLAY}</p>
                <p className="mt-1 text-xs" style={{ color: "var(--fg-muted)" }}>Resposta mais rápida por aqui</p>
              </div>
            </a>

            <a href={`mailto:${EMAIL}`} className="glass-card flex items-start gap-4" style={{ textDecoration: "none" }}>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                style={{ background: "color-mix(in srgb, var(--blue) 15%, transparent)", color: "var(--blue)" }}>
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold" style={{ color: "var(--fg)" }}>E-mail</h3>
                <p className="mt-0.5 text-base break-all" style={{ color: "var(--accent)" }}>{EMAIL}</p>
              </div>
            </a>

            <div className="glass-card flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                style={{ background: "color-mix(in srgb, var(--yellow) 15%, transparent)", color: "var(--yellow)" }}>
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold" style={{ color: "var(--fg)" }}>Resposta em até 48h</h3>
                <p className="mt-1 text-sm" style={{ color: "var(--fg-muted)" }}>Sem robô. Atendimento humano de verdade.</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3"
            style={{ opacity: isInView ? 1 : 0, transform: isInView ? "none" : "translateX(24px)", transition: "all 0.6s ease 0.1s" }}>
            {sent ? (
              <div className="glass-card flex flex-col items-center py-16 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ background: "color-mix(in srgb, var(--aqua) 15%, transparent)", color: "var(--aqua)" }}>
                  <Send size={28} />
                </div>
                <h3 className="font-display text-2xl font-bold" style={{ color: "var(--fg)" }}>Mensagem pronta!</h3>
                <p className="mt-2 max-w-sm text-base" style={{ color: "var(--fg-muted)" }}>
                  Seu app de e-mail abriu com a mensagem. É só enviar!
                </p>
                <button onClick={() => setSent(false)} className="btn-secondary mt-6" style={{ padding: "0.6rem 1.5rem", fontSize: "0.875rem" }}>
                  Enviar outra
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="mb-2 block font-display text-sm font-semibold" style={{ color: "var(--fg)" }}>Seu nome</label>
                  <input id="name" type="text" required placeholder="Como podemos te chamar?" value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--card-border)")} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block font-display text-sm font-semibold" style={{ color: "var(--fg)" }}>Seu e-mail</label>
                  <input id="email" type="email" required placeholder="seuemail@exemplo.com" value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--card-border)")} />
                </div>
                <div>
                  <label htmlFor="msg" className="mb-2 block font-display text-sm font-semibold" style={{ color: "var(--fg)" }}>Sua ideia</label>
                  <textarea id="msg" required rows={5} placeholder="Descreva seu projeto ou o que você precisa..." value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))} style={{ ...inputStyle, resize: "vertical" as const }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--card-border)")} />
                </div>
                <button type="submit" className="btn-primary self-start"><Send size={16} /> Enviar mensagem</button>
                <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
                  Ao enviar, seu app de e-mail abrirá com a mensagem para <strong style={{ color: "var(--fg-soft)" }}>{EMAIL}</strong>.
                  Prefere WhatsApp? <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", textDecoration: "underline" }}>Clique aqui</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
