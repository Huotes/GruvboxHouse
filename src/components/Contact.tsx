"use client";

import { useState, type FormEvent } from "react";
import { Send, Mail, MessageCircle, Clock } from "lucide-react";
import { useInView } from "@/lib/useInView";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const { ref, isInView } = useInView();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Build mailto link as a simple no-backend solution
    const subject = encodeURIComponent(
      `[Gruvbox House] Contato de ${form.name}`
    );
    const body = encodeURIComponent(
      `Nome: ${form.name}\nE-mail: ${form.email}\n\nMensagem:\n${form.message}`
    );
    window.open(
      `mailto:gruvboxhouse@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.875rem 1rem",
    background: "var(--bg1)",
    color: "var(--fg)",
    border: "1px solid var(--card-border)",
    borderRadius: "12px",
    fontFamily: "var(--font-body)",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <section
      id="contato"
      className="section-padding"
      style={{ background: "var(--bg-soft)" }}
    >
      <div className="mx-auto max-w-7xl" ref={ref}>
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span
            className="font-mono text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            Contato
          </span>
          <h2
            className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            style={{ color: "var(--fg)" }}
          >
            Vamos <span style={{ color: "var(--accent)" }}>conversar?</span>
          </h2>
          <p className="mt-4 text-lg" style={{ color: "var(--fg-muted)" }}>
            Conta pra gente o que você precisa. Sem compromisso, sem pegadinha.
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-5">
          {/* Contact info cards */}
          <div
            className="flex flex-col gap-6 lg:col-span-2"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.6s ease",
            }}
          >
            <div className="glass-card flex items-start gap-4">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                style={{
                  background: "color-mix(in srgb, var(--blue) 15%, transparent)",
                  color: "var(--blue)",
                }}
              >
                <Mail size={20} />
              </div>
              <div>
                <h3
                  className="font-display text-sm font-bold"
                  style={{ color: "var(--fg)" }}
                >
                  E-mail
                </h3>
                <a
                  href="mailto:gruvboxhouse@gmail.com"
                  className="mt-1 block text-base break-all"
                  style={{ color: "var(--accent)", textDecoration: "none" }}
                >
                  gruvboxhouse@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card flex items-start gap-4">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                style={{
                  background:
                    "color-mix(in srgb, var(--green) 15%, transparent)",
                  color: "var(--green)",
                }}
              >
                <MessageCircle size={20} />
              </div>
              <div>
                <h3
                  className="font-display text-sm font-bold"
                  style={{ color: "var(--fg)" }}
                >
                  WhatsApp
                </h3>
                <p className="mt-1 text-base" style={{ color: "var(--fg-muted)" }}>
                  Fale conosco pelo WhatsApp para
                  uma resposta mais rápida.
                </p>
              </div>
            </div>

            <div className="glass-card flex items-start gap-4">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                style={{
                  background:
                    "color-mix(in srgb, var(--yellow) 15%, transparent)",
                  color: "var(--yellow)",
                }}
              >
                <Clock size={20} />
              </div>
              <div>
                <h3
                  className="font-display text-sm font-bold"
                  style={{ color: "var(--fg)" }}
                >
                  Resposta rápida
                </h3>
                <p className="mt-1 text-base" style={{ color: "var(--fg-muted)" }}>
                  Respondemos em até 48 horas.
                  Sem enrolação, sem robô.
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div
            className="lg:col-span-3"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.6s ease 0.15s",
            }}
          >
            {submitted ? (
              <div
                className="glass-card flex flex-col items-center justify-center py-16 text-center"
              >
                <div
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{
                    background:
                      "color-mix(in srgb, var(--green) 15%, transparent)",
                    color: "var(--green)",
                  }}
                >
                  <Send size={28} />
                </div>
                <h3
                  className="font-display text-2xl font-bold"
                  style={{ color: "var(--fg)" }}
                >
                  Mensagem pronta!
                </h3>
                <p
                  className="mt-2 max-w-sm text-base"
                  style={{ color: "var(--fg-muted)" }}
                >
                  Seu app de e-mail foi aberto com a mensagem pré-preenchida.
                  É só enviar! Respondemos em até 48h.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary mt-6"
                  style={{ padding: "0.6rem 1.5rem", fontSize: "0.875rem" }}
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card flex flex-col gap-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-display text-sm font-semibold"
                    style={{ color: "var(--fg)" }}
                  >
                    Seu nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Como podemos te chamar?"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "var(--accent)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "var(--card-border)")
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-display text-sm font-semibold"
                    style={{ color: "var(--fg)" }}
                  >
                    Seu e-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="seuemail@exemplo.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "var(--accent)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "var(--card-border)")
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-display text-sm font-semibold"
                    style={{ color: "var(--fg)" }}
                  >
                    Sua mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Descreva sua ideia ou o que você precisa..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    style={{ ...inputStyle, resize: "vertical" as const }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "var(--accent)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "var(--card-border)")
                    }
                  />
                </div>

                <button type="submit" className="btn-primary self-start">
                  <Send size={16} />
                  Enviar mensagem
                </button>

                <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
                  Ao enviar, seu app de e-mail será aberto com a mensagem
                  pré-preenchida para{" "}
                  <strong style={{ color: "var(--fg-soft)" }}>
                    gruvboxhouse@gmail.com
                  </strong>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
