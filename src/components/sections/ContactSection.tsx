"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, Send, CheckCircle, Copy, Check } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const WHATSAPP_NUMBER = "50498206681";

const subjects = [
  "Derecho Penal",
  "Derecho Laboral",
  "Derecho Civil",
  "Derecho Administrativo",
  "Derecho Migratorio",
  "Derecho Tributario / Fiscal",
  "Derecho Notarial",
  "Consulta General",
];

const WA_ICON = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#25D366">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.855L0 24l6.336-1.51A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.809 9.809 0 01-5.012-1.378l-.36-.214-3.76.897.942-3.663-.235-.375A9.784 9.784 0 012.182 12C2.182 6.568 6.568 2.182 12 2.182S21.818 6.568 21.818 12 17.432 21.818 12 21.818z" />
  </svg>
);

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable in non-secure context
    }
  };

  return (
    <button
      onClick={copy}
      className="ml-2 shrink-0 p-1 text-[#F5F0E8]/20 hover:text-[#C9A44C] transition-colors duration-200 cursor-pointer"
      aria-label={`Copiar ${value}`}
      title={copied ? "¡Copiado!" : "Copiar"}
    >
      {copied ? (
        <Check className="w-3.5 h-3.5 text-[#C9A44C]" />
      ) : (
        <Copy className="w-3.5 h-3.5" />
      )}
    </button>
  );
}

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      "*Nueva consulta desde el sitio web*",
      "",
      `*Nombre:* ${form.name}`,
      `*Correo:* ${form.email}`,
      form.phone ? `*Teléfono:* ${form.phone}` : null,
      form.subject ? `*Área legal:* ${form.subject}` : null,
      "",
      "*Descripción del caso:*",
      form.message,
    ].filter(Boolean) as string[];

    const msg = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank", "noopener,noreferrer");

    setSent(true);
  };

  const contactItems = [
    { icon: MapPin, label: "Dirección", value: "Plaza Galería 504, San Pedro Sula, Honduras", copyable: false },
    { icon: Phone, label: "Teléfono principal", value: "+504 9820-6681", copyable: true },
    { icon: Phone, label: "Teléfono secundario", value: "+504 9542-5353", copyable: true },
    { icon: Clock, label: "Horario", value: "Lun – Vie: 8:00am – 6:00pm | Emergencias: 24/7", copyable: false },
  ];

  return (
    <section id="contacto" className="py-12 bg-[#0d0d0d] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-8 text-center">
          <span className="section-label block mb-5">Contacto</span>
          <h2
            className="text-[#F5F0E8] font-medium"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
            }}
          >
            <span className="text-[#C9A44C] italic">Contáctanos</span>
          </h2>
          <p
            className="text-[#F5F0E8]/40 text-sm mt-4 max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Escríbenos y te responderemos en menos de 24 horas.
            Toda comunicación es estrictamente confidencial.
          </p>
          <span className="gold-rule-lg mt-6 mx-auto block" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <AnimatedSection direction="right">
            {sent ? (
              <div className="card-glass p-10 flex flex-col items-center justify-center text-center gap-5 min-h-[400px]">
                <CheckCircle className="w-12 h-12 text-[#C9A44C]" />
                <h3
                  className="text-[#F5F0E8] font-medium"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem" }}
                >
                  ¡Mensaje enviado!
                </h3>
                <p
                  className="text-[#F5F0E8]/45 text-sm max-w-xs leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Nos pondremos en contacto contigo en las próximas 24 horas.
                  También puedes escribirnos directamente por WhatsApp.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 bg-[#C9A44C] hover:bg-[#D4B76A] text-[#050505] font-semibold px-6 py-3 text-sm tracking-wide transition-colors duration-200 cursor-pointer"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Ir a WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-glass p-8 flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-[#F5F0E8]/45 text-[10px] uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Nombre completo *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Juan Pérez"
                      className="bg-white/[0.04] border border-white/[0.08] focus:border-[#C9A44C]/50 text-[#F5F0E8] placeholder-[#F5F0E8]/20 px-4 py-3 text-sm outline-none transition-colors duration-200"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-[#F5F0E8]/45 text-[10px] uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Correo electrónico *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="juan@correo.com"
                      className="bg-white/[0.04] border border-white/[0.08] focus:border-[#C9A44C]/50 text-[#F5F0E8] placeholder-[#F5F0E8]/20 px-4 py-3 text-sm outline-none transition-colors duration-200"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="phone"
                      className="text-[#F5F0E8]/45 text-[10px] uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Teléfono / WhatsApp
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+504 9820-6681"
                      className="bg-white/[0.04] border border-white/[0.08] focus:border-[#C9A44C]/50 text-[#F5F0E8] placeholder-[#F5F0E8]/20 px-4 py-3 text-sm outline-none transition-colors duration-200"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="subject"
                      className="text-[#F5F0E8]/45 text-[10px] uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Área legal *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="bg-[#141414] border border-white/[0.08] focus:border-[#C9A44C]/50 text-[#F5F0E8] px-4 py-3 text-sm outline-none transition-colors duration-200 cursor-pointer"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <option value="" disabled>
                        Seleccionar área...
                      </option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-[#F5F0E8]/45 text-[10px] uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Cuéntanos tu caso *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe brevemente tu situación legal..."
                    className="bg-white/[0.04] border border-white/[0.08] focus:border-[#C9A44C]/50 text-[#F5F0E8] placeholder-[#F5F0E8]/20 px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#C9A44C] hover:bg-[#D4B76A] text-[#050505] font-semibold px-6 py-4 text-sm tracking-wide transition-colors duration-200 cursor-pointer mt-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensaje
                </button>
              </form>
            )}
          </AnimatedSection>

          {/* Info */}
          <AnimatedSection direction="left" className="flex flex-col gap-8">
            <div>
              <h3
                className="text-[#F5F0E8] font-medium mb-7"
                style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem" }}
              >
                Información de Contacto
              </h3>
              <div className="flex flex-col gap-5">
                {contactItems.map(({ icon: Icon, label, value, copyable }) => (
                  <div key={label} className="flex gap-4 items-start">
                    <div className="w-9 h-9 bg-[#C9A44C]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#C9A44C]" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-[#F5F0E8]/35 text-[10px] uppercase tracking-widest mb-1"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {label}
                      </div>
                      <div className="flex items-center">
                        <span
                          className="text-[#F5F0E8]/70 text-sm leading-relaxed"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {value}
                        </span>
                        {copyable && <CopyButton value={value} />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hola, me gustaría obtener información sobre los servicios de Legal Force HN."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 card-glass p-5 hover:border-[#25D366]/30 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-colors duration-200">
                {WA_ICON}
              </div>
              <div>
                <div
                  className="text-[#F5F0E8] font-semibold text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Escríbenos por WhatsApp
                </div>
                <div
                  className="text-[#F5F0E8]/35 text-xs mt-0.5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Respuesta inmediata · Chat confidencial
                </div>
              </div>
            </a>

            <div className="overflow-hidden border border-white/[0.06] h-48 bg-[#141414] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-7 h-7 text-[#C9A44C]/35 mx-auto mb-2" />
                <span
                  className="text-[#F5F0E8]/25 text-xs"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Plaza Galería 504, San Pedro Sula
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
