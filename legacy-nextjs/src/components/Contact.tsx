"use client";

import { useState, type FormEvent, type CSSProperties } from "react";
import { motion } from "motion/react";
import { Send, Mail, Clock, MessageCircle } from "lucide-react";
import { useInView } from "@/lib/useInView";
import { WA_LINK, WA_DISPLAY, EMAIL } from "@/lib/constants";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "1rem 1.2rem",
  background: "var(--bg1)",
  color: "var(--fg)",
  border: "1px solid var(--card-border)",
  borderRadius: "14px",
  fontFamily: "var(--font-body)",
  fontSize: "1rem",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

function handleFocus(
  e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
): void {
  e.currentTarget.style.borderColor = "var(--accent)";
  e.currentTarget.style.boxShadow = "0 0 16px var(--accent-glow)";
}

function handleBlur(
  e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
): void {
  e.currentTarget.style.borderColor = "var(--card-border)";
  e.currentTarget.style.boxShadow = "none";
}

export function Contact() {
  const { ref, isInView } = useInView();
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent): void {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[GruvboxHouse] Contato de ${form.name}`,
    );
    const body = encodeURIComponent(
      `Nome: ${form.name}\nE-mail: ${form.email}\n\n${form.message}`,
    );
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
  }

  return (
    <section
      id="contato"
      className="starfield section-padding"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-inner" ref={ref}>
        <div className="mx-auto mb-16 max-w-[640px]">
          <span
            className="font-mono text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: "var(--accent)" }}
          >
            // Contato
          </span>
          <h2
            className="mt-4 font-display text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ color: "var(--fg)" }}
          >
            Vamos <span className="text-gradient">conversar?</span>
          </h2>
          <p
            className="mt-5 text-lg md:text-xl"
            style={{ color: "var(--fg-muted)" }}
          >
            Conte sua ideia. Sem compromisso.
          </p>
        </div>

        <motion.div
          className="mx-auto flex w-full max-w-[900px] flex-col gap-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div
            className="grid w-full"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.25rem",
            }}
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{ flexDirection: "row", alignItems: "center", gap: "1rem", textAlign: "left" }}
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
                style={{
                  background: "rgba(37,211,102,0.12)",
                  color: "#25D366",
                }}
              >
                <MessageCircle size={26} />
              </div>
              <div>
                <h3
                  className="font-display text-sm font-bold"
                  style={{ color: "var(--fg)" }}
                >
                  WhatsApp
                </h3>
                <p
                  className="text-base font-semibold"
                  style={{ color: "#25D366" }}
                >
                  {WA_DISPLAY}
                </p>
                <p
                  className="mt-0.5 text-xs"
                  style={{ color: "var(--fg-muted)" }}
                >
                  Resposta mais rápida
                </p>
              </div>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="glass-card"
              style={{ flexDirection: "row", alignItems: "center", gap: "1rem", textAlign: "left" }}
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
                style={{
                  background:
                    "color-mix(in srgb, var(--blue) 12%, transparent)",
                  color: "var(--blue)",
                }}
              >
                <Mail size={24} />
              </div>
              <div>
                <h3
                  className="font-display text-sm font-bold"
                  style={{ color: "var(--fg)" }}
                >
                  E-mail
                </h3>
                <p
                  className="text-sm break-all"
                  style={{ color: "var(--accent)" }}
                >
                  {EMAIL}
                </p>
              </div>
            </a>

            <div
              className="glass-card"
              style={{ flexDirection: "row", alignItems: "center", gap: "1rem", textAlign: "left" }}
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
                style={{
                  background:
                    "color-mix(in srgb, var(--yellow) 12%, transparent)",
                  color: "var(--yellow)",
                }}
              >
                <Clock size={24} />
              </div>
              <div>
                <h3
                  className="font-display text-sm font-bold"
                  style={{ color: "var(--fg)" }}
                >
                  Resposta em até 48h
                </h3>
                <p
                  className="mt-0.5 text-xs"
                  style={{ color: "var(--fg-muted)" }}
                >
                  Atendimento humano de verdade.
                </p>
              </div>
            </div>
          </div>

          {sent ? (
            <div className="glass-card glass-card--centered py-20">
              <div
                className="mb-5 flex h-16 w-16 items-center justify-center rounded-full"
                style={{
                  background:
                    "color-mix(in srgb, var(--aqua) 12%, transparent)",
                  color: "var(--aqua)",
                }}
              >
                <Send size={28} />
              </div>
              <h3
                className="font-display text-2xl font-black"
                style={{ color: "var(--fg)" }}
              >
                Mensagem pronta!
              </h3>
              <p
                className="mt-3 max-w-sm text-base"
                style={{ color: "var(--fg-muted)" }}
              >
                Seu app de e-mail abriu com a mensagem.
              </p>
              <button
                onClick={() => setSent(false)}
                className="btn-secondary mt-8"
                style={{ padding: "0.7rem 1.8rem", fontSize: "0.85rem" }}
              >
                Enviar outra
              </button>
            </div>
          ) : (
            <form
              onSubmit={submit}
              className="glass-card"
              style={{ gap: "1.5rem", textAlign: "left" }}
            >
              <div>
                <label
                  htmlFor="cn"
                  className="mb-2 block font-display text-sm font-bold"
                  style={{ color: "var(--fg)" }}
                >
                  Seu nome
                </label>
                <input
                  id="cn"
                  type="text"
                  required
                  placeholder="Como podemos te chamar?"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <label
                  htmlFor="ce"
                  className="mb-2 block font-display text-sm font-bold"
                  style={{ color: "var(--fg)" }}
                >
                  Seu e-mail
                </label>
                <input
                  id="ce"
                  type="email"
                  required
                  placeholder="seuemail@exemplo.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <label
                  htmlFor="cm"
                  className="mb-2 block font-display text-sm font-bold"
                  style={{ color: "var(--fg)" }}
                >
                  Sua ideia
                </label>
                <textarea
                  id="cm"
                  required
                  rows={5}
                  placeholder="Descreva seu projeto..."
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <motion.button
                type="submit"
                className="btn-primary self-center sm:self-start"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Send size={16} /> Enviar mensagem
              </motion.button>
              <p
                className="text-center text-xs sm:text-left"
                style={{ color: "var(--fg-muted)" }}
              >
                Prefere WhatsApp?{" "}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#25D366", textDecoration: "underline" }}
                >
                  Clique aqui
                </a>
                .
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
