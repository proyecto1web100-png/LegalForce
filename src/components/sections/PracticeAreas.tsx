"use client";

import {
  Gavel,
  Briefcase,
  FileText,
  Building2,
  Globe,
  Calculator,
  Receipt,
  PenLine,
  ArrowRight,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const areas = [
  {
    icon: Gavel,
    title: "Derecho Penal",
    description:
      "Defensa en procesos penales, delitos económicos y contra la persona. Protegemos tu libertad con estrategia sólida.",
  },
  {
    icon: Briefcase,
    title: "Derecho Laboral",
    description:
      "Representación en conflictos laborales, despidos injustificados, negociación colectiva y reclamaciones de prestaciones.",
  },
  {
    icon: FileText,
    title: "Derecho Civil",
    description:
      "Contratos, responsabilidad civil, sucesiones, propiedad y todo tipo de litigios entre particulares.",
  },
  {
    icon: Building2,
    title: "Derecho Administrativo",
    description:
      "Recursos ante entidades públicas, contrataciones estatales, impugnaciones y defensa frente al Estado.",
  },
  {
    icon: Globe,
    title: "Derecho Migratorio",
    description:
      "Regularización migratoria, visas de residencia, ciudadanía y asesoría para extranjeros en Honduras.",
  },
  {
    icon: Calculator,
    title: "Derecho Tributario",
    description:
      "Planificación fiscal, recursos de apelación ante el SAR y defensa en auditorías y procedimientos tributarios.",
  },
  {
    icon: Receipt,
    title: "Derecho Fiscal",
    description:
      "Asesoría integral en obligaciones fiscales, cumplimiento normativo y optimización de cargas impositivas.",
  },
  {
    icon: PenLine,
    title: "Derecho Notarial",
    description:
      "Escrituras públicas, autenticaciones, poderes notariales, contratos y toda clase de instrumentos legales.",
  },
];

export function PracticeAreas() {
  return (
    <section id="servicios" className="py-16 bg-[#090909]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-10">
          <span className="section-label block mb-4">Áreas de Práctica</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-4xl sm:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Soluciones Legales{" "}
              <span className="text-[#C9A44C]">Especializadas</span>
            </h2>
            <p
              className="text-white/50 text-base max-w-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Cubrimos todas las ramas del derecho que tu caso puede requerir,
              con equipos especializados en cada área.
            </p>
          </div>
          <span className="gold-rule-lg mt-6 block" />
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {areas.map((area, i) => {
            const Icon = area.icon;
            return (
              <AnimatedSection key={area.title} delay={i * 0.07}>
                <div className="group card-glass rounded-sm p-6 hover:border-[#C9A44C]/30 transition-all duration-300 cursor-pointer h-full flex flex-col">
                  <div className="w-10 h-10 rounded-sm bg-[#C9A44C]/10 flex items-center justify-center mb-5 group-hover:bg-[#C9A44C]/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#C9A44C]" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-white font-semibold text-base mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {area.title}
                  </h3>
                  <p
                    className="text-white/45 text-sm leading-relaxed flex-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {area.description}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-[#C9A44C] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span style={{ fontFamily: "var(--font-body)" }}>Más información</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
