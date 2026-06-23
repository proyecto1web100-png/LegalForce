"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const WHATSAPP_NUMBER = "50498206681";

const WA_ICON = (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.855L0 24l6.336-1.51A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.809 9.809 0 01-5.012-1.378l-.36-.214-3.76.897.942-3.663-.235-.375A9.784 9.784 0 012.182 12C2.182 6.568 6.568 2.182 12 2.182S21.818 6.568 21.818 12 17.432 21.818 12 21.818z" />
  </svg>
);

const options = [
  {
    label: "Acusación o proceso penal",
    detail: "Detenciones, imputaciones, juicios penales, delitos económicos o contra la persona.",
    area: "Derecho Penal",
    waMsg: "Hola, necesito asesoría urgente en materia penal. ¿Pueden ayudarme?",
  },
  {
    label: "Problema laboral o despido",
    detail: "Despido injustificado, prestaciones no pagadas, acoso laboral o negociación colectiva.",
    area: "Derecho Laboral",
    waMsg: "Hola, tengo un problema laboral y necesito asesoría legal.",
  },
  {
    label: "Contrato, propiedad o herencia",
    detail: "Contratos civiles, compraventa, sucesiones, responsabilidad civil entre particulares.",
    area: "Derecho Civil",
    waMsg: "Hola, necesito asesoría en materia civil (contrato, propiedad o herencia).",
  },
  {
    label: "Trámite migratorio o visa",
    detail: "Residencia temporal o permanente, ciudadanía, regularización migratoria en Honduras.",
    area: "Derecho Migratorio",
    waMsg: "Hola, necesito asesoría sobre trámites migratorios o de residencia.",
  },
  {
    label: "Impuestos, SAR o empresa",
    detail: "Auditorías fiscales, recursos ante el SAR, cumplimiento tributario para personas y empresas.",
    area: "Derecho Tributario",
    waMsg: "Hola, necesito asesoría en materia tributaria o fiscal.",
  },
  {
    label: "Escritura, poder o autenticación",
    detail: "Escrituras públicas, poderes notariales, autenticaciones y contratos con validez legal plena.",
    area: "Derecho Notarial",
    waMsg: "Hola, necesito servicios notariales (escritura, poder u otro instrumento legal).",
  },
];

type Option = (typeof options)[number];

export function CaseEvaluator() {
  const [selected, setSelected] = useState<Option | null>(null);

  return (
    <section className="py-20 border-y border-white/[0.06]" style={{ background: "#060606" }}>
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <span className="section-label block mb-5">Evaluador de Caso</span>
          <h2
            className="text-[#F5F0E8] font-medium leading-tight mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            }}
          >
            ¿Qué tipo de ayuda{" "}
            <span className="text-[#C9A44C] italic">necesitas?</span>
          </h2>
          <p
            className="text-[#F5F0E8]/40 text-sm max-w-md mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Selecciona tu situación y te conectamos de inmediato con el
            especialista correcto.
          </p>
          <span className="gold-rule-lg mt-6 mx-auto block" />
        </AnimatedSection>

        {!selected ? (
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => setSelected(opt)}
                  className="group text-left p-6 border border-white/[0.08] hover:border-[#C9A44C]/40 bg-white/[0.015] hover:bg-[#C9A44C]/[0.05] transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[140px]"
                >
                  <div>
                    <span
                      className="block text-[#F5F0E8]/80 group-hover:text-[#F5F0E8] text-sm font-semibold leading-snug mb-3 transition-colors duration-200"
                      style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem" }}
                    >
                      {opt.label}
                    </span>
                    <span
                      className="block text-[#F5F0E8]/38 group-hover:text-[#F5F0E8]/55 text-xs leading-relaxed transition-colors duration-200"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {opt.detail}
                    </span>
                  </div>
                  <span
                    className="mt-4 text-[#C9A44C]/50 group-hover:text-[#C9A44C] text-[10px] uppercase tracking-widest transition-colors duration-200"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    → {opt.area}
                  </span>
                </button>
              ))}
            </div>
          </AnimatedSection>
        ) : (
          <AnimatedSection>
            <div className="flex flex-col items-center gap-7 text-center border border-[#C9A44C]/20 bg-[#C9A44C]/[0.04] p-12">
              <div>
                <p
                  className="text-[#F5F0E8]/40 text-[10px] uppercase tracking-[0.25em] mb-3"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Área recomendada
                </p>
                <h3
                  className="text-[#C9A44C] italic font-medium"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  {selected.area}
                </h3>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(selected.waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#C9A44C] hover:bg-[#D4B76A] text-[#050505] font-semibold px-8 py-4 text-sm tracking-wide transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {WA_ICON}
                Hablar con un especialista ahora
              </a>

              <button
                onClick={() => setSelected(null)}
                className="text-[#F5F0E8]/30 hover:text-[#F5F0E8]/60 text-xs transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "var(--font-body)" }}
              >
                ← Evaluar otro caso
              </button>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
