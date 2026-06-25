"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const WHATSAPP_NUMBER = "50498206681";

const faqs = [
  {
    q: "¿Cómo puedo contratar los servicios de Legal Force & Asociados?",
    a: "Puedes contactarnos directamente por WhatsApp, llamada telefónica o a través del formulario de contacto en este sitio. Agendamos una consulta inicial donde evaluamos tu caso y te presentamos opciones claras de representación. No hay compromiso hasta que ambas partes estén de acuerdo.",
  },
  {
    q: "¿Cuánto cuesta la consulta inicial?",
    a: "Cada caso es diferente, por lo que los honorarios se definen tras evaluar la complejidad y el alcance de la situación. Contáctanos para discutir tu caso y te brindaremos información transparente sobre costos antes de cualquier compromiso.",
  },
  {
    q: "¿Atienden tanto a personas individuales como a empresas?",
    a: "Sí. Representamos a personas naturales, empresas nacionales, corporaciones y organismos internacionales. Contamos con experiencia en litigación tanto para casos individuales como en defensa corporativa, auditoría legal y asesoría empresarial continua.",
  },
  {
    q: "¿Pueden asistir a ciudadanos extranjeros con trámites en Honduras?",
    a: "Absolutamente. Tenemos amplia experiencia en Derecho Migratorio y asesoramos a extranjeros en regularización de estatus, visas de residencia, ciudadanía y todos los trámites ante el Instituto Nacional de Migración (INM) y otras entidades. Ofrecemos atención en español e inglés.",
  },
  {
    q: "¿Ofrecen consultas virtuales o a distancia?",
    a: "Sí, ofrecemos consultas por videollamada y asistencia remota para clientes que se encuentran fuera de San Pedro Sula o en el extranjero. La confidencialidad se mantiene en todos los canales de comunicación.",
  },
  {
    q: "¿Tienen cobertura en todo el territorio nacional?",
    a: "Nuestra oficina principal está en Plaza Galería 504, San Pedro Sula, pero gestionamos casos en todos los departamentos de Honduras, incluyendo Tegucigalpa, La Ceiba, Roatán y el resto del país, con aliados estratégicos en cada región.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-[#0a0a0a] border-t border-white/[0.04]">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="mb-14 text-center">
          <span className="section-label block mb-5">Preguntas Frecuentes</span>
          <h2
            className="text-[#F5F0E8] font-medium leading-tight"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}
          >
            Resolvemos{" "}
            <span className="text-[#C9A44C] italic">tus Dudas</span>
          </h2>
          <span className="gold-rule-lg mt-6 mx-auto block" />
        </AnimatedSection>

        <div className="flex flex-col divide-y divide-white/[0.06]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-4 py-6 text-left group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-sm leading-relaxed transition-colors duration-200 ${
                        isOpen ? "text-[#F5F0E8]" : "text-[#F5F0E8]/60 group-hover:text-[#F5F0E8]/85"
                      }`}
                      style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      {faq.q}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#C9A44C]/15 border-[#C9A44C]/40"
                          : "bg-transparent border-white/[0.12] group-hover:border-[#C9A44C]/25"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-3 h-3 text-[#C9A44C]" />
                      ) : (
                        <Plus className="w-3 h-3 text-[#F5F0E8]/30 group-hover:text-[#C9A44C]/60" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      className="pb-6"
                      style={{ animation: "accordion-open 0.22s ease both" }}
                    >
                      <p
                        className="text-[#F5F0E8]/45 text-sm leading-relaxed border-l-2 border-[#C9A44C]/25 pl-4"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="mt-12 text-center">
          <p className="text-[#F5F0E8]/35 text-sm mb-5" style={{ fontFamily: "var(--font-body)" }}>
            ¿Tienes alguna otra pregunta?
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, tengo una pregunta sobre los servicios de Legal Force & Asociados.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C9A44C] hover:bg-[#D4B76A] text-[#050505] font-semibold px-7 py-3 text-xs tracking-wide transition-colors duration-200 cursor-pointer"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Pregúntanos por WhatsApp
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
