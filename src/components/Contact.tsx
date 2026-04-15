"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Send, Mail, Clock } from "lucide-react";
import { useInView } from "@/lib/useInView";
import { WA_LINK, WA_DISPLAY, EMAIL } from "@/lib/constants";

interface F {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const { ref, isInView } = useInView();
  const [f, setF] = useState<F>({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    const s = encodeURIComponent(`[Gruvbox House] Contato de ${f.name}`);
    const b = encodeURIComponent(
      `Nome: ${f.name}\nE-mail: ${f.email}\n\n${f.message}`,
    );
    window.open(`mailto:${EMAIL}?subject=${s}&body=${b}`, "_blank");
    setSent(true);
  }

  const inp: React.CSSProperties = {
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
  const focus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.currentTarget.style.borderColor = "var(--accent)";
    e.currentTarget.style.boxShadow = "0 0 16px var(--accent-glow)";
  };
  const blur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.currentTarget.style.borderColor = "var(--card-border)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <section
      id="contato"
      className="starfield section-padding"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-inner" ref={ref}>
        <div className="mx-auto mb-16 max-w-2xl">
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

        <div className="mx-auto grid max-w-5xl items-start gap-12 lg:grid-cols-5">
          {/* Info */}
          <motion.div
            className="flex flex-col gap-6 lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card !flex-row !items-center !text-left gap-5"
              style={{ textDecoration: "none" }}
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
                style={{ background: "rgba(37,211,102,0.12)" }}
              >
                <Image
                  src="/icons/black-whatsapp.svg"
                  alt="WhatsApp"
                  width={26}
                  height={26}
                />
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
              className="glass-card !flex-row !items-center !text-left gap-5"
              style={{ textDecoration: "none" }}
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

            <div className="glass-card !flex-row !items-center !text-left gap-5">
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
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {sent ? (
              <div className="glass-card flex flex-col items-center py-20">
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
                className="glass-card !items-stretch !text-left"
                style={{ gap: "1.5rem" }}
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
                    value={f.name}
                    onChange={(e) =>
                      setF((p) => ({ ...p, name: e.target.value }))
                    }
                    style={inp}
                    onFocus={focus}
                    onBlur={blur}
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
                    value={f.email}
                    onChange={(e) =>
                      setF((p) => ({ ...p, email: e.target.value }))
                    }
                    style={inp}
                    onFocus={focus}
                    onBlur={blur}
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
                    value={f.message}
                    onChange={(e) =>
                      setF((p) => ({ ...p, message: e.target.value }))
                    }
                    style={{ ...inp, resize: "vertical" as const }}
                    onFocus={focus}
                    onBlur={blur}
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
      </div>
    </section>
  );
}
