"use client";

import { useState } from "react";
import {
  Gavel,
  Briefcase,
  FileText,
  Building2,
  Globe,
  Calculator,
  Receipt,
  PenLine,
  ChevronDown,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const WHATSAPP_NUMBER = "50498206681";

const WA_ICON = (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.855L0 24l6.336-1.51A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.809 9.809 0 01-5.012-1.378l-.36-.214-3.76.897.942-3.663-.235-.375A9.784 9.784 0 012.182 12C2.182 6.568 6.568 2.182 12 2.182S21.818 6.568 21.818 12 17.432 21.818 12 21.818z" />
  </svg>
);

const areas = [
  {
    icon: Gavel,
    title: "Derecho Penal",
    description:
      "Defensa en procesos penales, delitos económicos y contra la persona. Protegemos tu libertad con estrategia sólida y preparación exhaustiva.",
    waMsg: "Hola, necesito asesoría en Derecho Penal. ¿Pueden ayudarme?",
  },
  {
    icon: Briefcase,
    title: "Derecho Laboral",
    description:
      "Representación en conflictos laborales, despidos injustificados, negociación colectiva y reclamaciones de prestaciones ante los Juzgados de Trabajo.",
    waMsg: "Hola, tengo un caso de Derecho Laboral y necesito asesoría.",
  },
  {
    icon: FileText,
    title: "Derecho Civil",
    description:
      "Contratos, responsabilidad civil, sucesiones, propiedad y todo tipo de litigios entre particulares con resolución eficiente y efectiva.",
    waMsg: "Hola, necesito asesoría en Derecho Civil. ¿Pueden orientarme?",
  },
  {
    icon: Building2,
    title: "Derecho Administrativo",
    description:
      "Recursos ante entidades públicas, contrataciones estatales, impugnaciones y defensa frente al Estado en todos sus niveles.",
    waMsg: "Hola, necesito asesoría en Derecho Administrativo.",
  },
  {
    icon: Globe,
    title: "Derecho Migratorio",
    description:
      "Regularización migratoria, visas de residencia, ciudadanía y asesoría integral para extranjeros en Honduras con los últimos cambios normativos.",
    waMsg: "Hola, necesito asesoría sobre trámites migratorios en Honduras.",
  },
  {
    icon: Calculator,
    title: "Derecho Tributario",
    description:
      "Planificación fiscal, recursos ante el SAR y defensa en auditorías, procedimientos tributarios y controversias con la administración.",
    waMsg: "Hola, necesito asesoría en Derecho Tributario o asuntos con el SAR.",
  },
  {
    icon: Receipt,
    title: "Derecho Fiscal",
    description:
      "Asesoría integral en obligaciones fiscales, cumplimiento normativo y optimización de cargas impositivas para personas y empresas.",
    waMsg: "Hola, necesito asesoría fiscal para mi empresa o situación personal.",
  },
  {
    icon: PenLine,
    title: "Derecho Notarial",
    description:
      "Escrituras públicas, autenticaciones, poderes notariales, contratos y toda clase de instrumentos legales con validez jurídica plena.",
    waMsg: "Hola, necesito servicios notariales (escritura, poder u otro instrumento).",
  },
];

export function PracticeAreas() {
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  return (
    <section id="servicios" className="py-20 bg-[#090909]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-12">
          <span className="section-label block mb-5">Áreas de Práctica</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-[#F5F0E8] font-medium leading-tight"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              }}
            >
              Soluciones Legales{" "}
              <span className="text-[#C9A44C] italic">Especializadas</span>
            </h2>
            <p
              className="text-[#F5F0E8]/40 text-sm max-w-xs leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Cubrimos todas las ramas del derecho con equipos expertos.
              Haz click en cada área para explorar.
            </p>
          </div>
          <span className="gold-rule-lg mt-6 block" />
        </AnimatedSection>

        <div className="flex flex-col divide-y divide-white/[0.06]">
          {areas.map((area, i) => {
            const Icon = area.icon;
            const isOpen = openTitle === area.title;

            return (
              <AnimatedSection key={area.title} delay={i * 0.04}>
                <div>
                  <button
                    onClick={() => setOpenTitle(isOpen ? null : area.title)}
                    className="w-full flex items-center justify-between py-5 px-1 group cursor-pointer text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-9 h-9 flex items-center justify-center transition-colors duration-300 ${
                          isOpen
                            ? "bg-[#C9A44C]/15"
                            : "bg-white/[0.04] group-hover:bg-[#C9A44C]/10"
                        }`}
                      >
                        <Icon
                          className={`w-4 h-4 transition-colors duration-300 ${
                            isOpen
                              ? "text-[#C9A44C]"
                              : "text-[#F5F0E8]/30 group-hover:text-[#C9A44C]"
                          }`}
                          strokeWidth={1.5}
                        />
                      </div>
                      <span
                        className={`font-medium transition-colors duration-200 ${
                          isOpen
                            ? "text-[#C9A44C]"
                            : "text-[#F5F0E8]/75 group-hover:text-[#F5F0E8]"
                        }`}
                        style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem" }}
                      >
                        {area.title}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 text-[#C9A44C]"
                          : "text-[#F5F0E8]/20 group-hover:text-[#F5F0E8]/40"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      className="pb-7 px-1 pl-[52px]"
                      style={{ animation: "accordion-open 0.22s ease both" }}
                    >
                      <p
                        className="text-[#F5F0E8]/45 text-sm leading-relaxed mb-5"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {area.description}
                      </p>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                          area.waMsg
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366]/[0.08] hover:bg-[#25D366]/15 border border-[#25D366]/20 hover:border-[#25D366]/40 text-[#25D366] text-xs font-semibold px-5 py-2.5 transition-all duration-200 cursor-pointer"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {WA_ICON}
                        Consultar sobre {area.title}
                      </a>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
