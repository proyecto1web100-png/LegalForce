"use client";

import { useEffect, useState } from "react";
import { X, Shield, Clock, Scale } from "lucide-react";

const WHATSAPP_NUMBER = "50498206681";
const STORAGE_KEY = "lf_visited";

export function FirstVisitOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setVisible(true), 1800);
        return () => clearTimeout(t);
      }
    } catch {
      // localStorage blocked (private mode etc.)
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    try { localStorage.setItem(STORAGE_KEY, "1"); } catch { /* */ }
  };

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && dismiss();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[90] flex items-center justify-center p-4"
      style={{ animation: "overlay-bg-in 0.3s ease both", background: "rgba(5,5,5,0.82)" }}
      onClick={(e) => e.target === e.currentTarget && dismiss()}
    >
      <div
        className="relative w-full max-w-md border border-[#C9A44C]/20 bg-[#0d0d0d] p-8"
        style={{ animation: "overlay-card-in 0.4s cubic-bezier(0.22,1,0.36,1) 0.05s both" }}
      >
        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-[#F5F0E8]/25 hover:text-[#F5F0E8]/60 transition-colors duration-200 cursor-pointer"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-[#C9A44C] flex items-center justify-center shrink-0">
            <Scale className="w-4 h-4 text-[#050505]" strokeWidth={2} />
          </div>
          <div>
            <span
              className="block text-[#F5F0E8] font-medium leading-none"
              style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem" }}
            >
              Bienvenido a{" "}
              <span className="text-[#C9A44C] italic">Legal Force HN</span>
            </span>
            <span
              className="text-[#F5F0E8]/35 text-[10px] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Bufete Jurídico · Honduras
            </span>
          </div>
        </div>

        {/* Gold rule */}
        <div className="h-px w-12 bg-[#C9A44C] mb-6" />

        {/* 3 value props */}
        <div className="flex flex-col gap-4 mb-8">
          {[
            {
              icon: Shield,
              title: "Confidencialidad absoluta",
              desc: "Todo lo que nos cuentes queda estrictamente entre tú y tu abogado.",
            },
            {
              icon: Clock,
              title: "Respuesta en menos de 24h",
              desc: "Te contactamos el mismo día o al día siguiente para evaluar tu caso.",
            },
            {
              icon: Scale,
              title: "8 áreas de práctica",
              desc: "Penal, Laboral, Civil, Migratorio, Tributario, Notarial y más.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-3 items-start">
              <div className="w-7 h-7 bg-[#C9A44C]/10 flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="w-3.5 h-3.5 text-[#C9A44C]" strokeWidth={1.5} />
              </div>
              <div>
                <span
                  className="block text-[#F5F0E8]/80 text-xs font-semibold mb-0.5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {title}
                </span>
                <span
                  className="text-[#F5F0E8]/35 text-xs leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, acabo de conocer Legal Force HN y me gustaría recibir más información.")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#C9A44C] hover:bg-[#D4B76A] text-[#050505] font-semibold px-5 py-3 text-xs tracking-wide transition-colors duration-200 cursor-pointer"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Consultar ahora
          </a>
          <button
            onClick={dismiss}
            className="flex-1 inline-flex items-center justify-center border border-white/[0.08] hover:border-[#C9A44C]/30 text-[#F5F0E8]/45 hover:text-[#F5F0E8]/70 text-xs px-5 py-3 transition-all duration-200 cursor-pointer"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Explorar el sitio
          </button>
        </div>
      </div>
    </div>
  );
}
