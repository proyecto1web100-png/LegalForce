"use client";

import {
  AlertTriangle,
  UserX,
  Globe,
  DollarSign,
  FileWarning,
  Building,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const cases = [
  {
    icon: AlertTriangle,
    tag: "Penal",
    title: "Defensa en Juicio Oral",
    description:
      "Representación integral en juicios orales y públicos por delitos graves, garantizando el debido proceso.",
  },
  {
    icon: UserX,
    tag: "Laboral",
    title: "Despido Injustificado",
    description:
      "Reclamación de prestaciones laborales, indemnizaciones y derechos adquiridos ante tribunales de trabajo.",
  },
  {
    icon: Globe,
    tag: "Migratorio",
    title: "Residencia Permanente",
    description:
      "Gestión de residencia permanente para extranjeros, reunificación familiar y trámites consulares.",
  },
  {
    icon: DollarSign,
    tag: "Tributario",
    title: "Recurso ante el SAR",
    description:
      "Impugnación de resoluciones del SAR, recursos de apelación y defensa en procesos de fiscalización.",
  },
  {
    icon: FileWarning,
    tag: "Civil",
    title: "Incumplimiento de Contrato",
    description:
      "Demandas por incumplimiento contractual, daños y perjuicios, rescisión y resolución de contratos.",
  },
  {
    icon: Building,
    tag: "Administrativo",
    title: "Impugnación de Actos",
    description:
      "Recursos de amparo, apelaciones administrativas y demandas contencioso-administrativas contra el Estado.",
  },
];

const tagColors: Record<string, string> = {
  Penal: "text-red-400 bg-red-400/10",
  Laboral: "text-blue-400 bg-blue-400/10",
  Migratorio: "text-emerald-400 bg-emerald-400/10",
  Tributario: "text-amber-400 bg-amber-400/10",
  Civil: "text-purple-400 bg-purple-400/10",
  Administrativo: "text-cyan-400 bg-cyan-400/10",
};

export function FrequentCases() {
  return (
    <section className="py-12 bg-[#0f0f0f] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-8">
          <span className="section-label block mb-4">Casos Frecuentes</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-4xl sm:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ¿Tu situación se{" "}
              <span className="text-[#C9A44C]">parece a esta?</span>
            </h2>
            <p
              className="text-white/50 text-sm max-w-xs"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Hemos resuelto cientos de casos similares. Tu consulta no te
              compromete a nada.
            </p>
          </div>
          <span className="gold-rule-lg mt-6 block" />
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <AnimatedSection key={c.title} delay={i * 0.08}>
                <div className="group card-glass rounded-sm p-6 hover:border-[#C9A44C]/25 transition-all duration-300 h-full flex flex-col cursor-pointer">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-10 h-10 rounded-sm bg-[#C9A44C]/10 flex items-center justify-center group-hover:bg-[#C9A44C]/20 transition-colors duration-300">
                      <Icon
                        className="w-5 h-5 text-[#C9A44C]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span
                      className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${tagColors[c.tag]}`}
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {c.tag}
                    </span>
                  </div>
                  <h3
                    className="text-white font-semibold text-base mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {c.title}
                  </h3>
                  <p
                    className="text-white/45 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {c.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
