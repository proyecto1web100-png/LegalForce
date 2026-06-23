"use client";

import { MessageSquare, Search, Lightbulb, Scale } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consulta Inicial",
    description:
      "Nos reunimos contigo para escuchar los detalles de tu caso en total confidencialidad. Sin compromisos iniciales.",
  },
  {
    icon: Search,
    step: "02",
    title: "Análisis del Caso",
    description:
      "Estudiamos a fondo la situación legal, reunimos evidencias y evaluamos todas las opciones disponibles.",
  },
  {
    icon: Lightbulb,
    step: "03",
    title: "Estrategia Legal",
    description:
      "Diseñamos un plan de acción claro con objetivos definidos, plazos realistas y alternativas de contingencia.",
  },
  {
    icon: Scale,
    step: "04",
    title: "Representación",
    description:
      "Te representamos con firmeza ante juzgados, entidades y autoridades hasta lograr el mejor resultado posible.",
  },
];

export function WorkProcess() {
  return (
    <section id="proceso" className="py-24 bg-[#090909]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-16 text-center">
          <span className="section-label block mb-4">Nuestro Proceso</span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            De la Consulta a la{" "}
            <span className="text-[#C9A44C]">Victoria</span>
          </h2>
          <span className="gold-rule-lg mt-6 mx-auto block" />
        </AnimatedSection>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#C9A44C]/20 to-transparent pointer-events-none" />

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimatedSection key={s.step} delay={i * 0.12}>
                <div className="relative flex flex-col items-center text-center px-4 group">
                  {/* Step icon */}
                  <div className="relative mb-6">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#161616] border border-[#C9A44C]/25 flex items-center justify-center group-hover:border-[#C9A44C]/60 transition-colors duration-300">
                      <Icon
                        className="w-6 h-6 text-[#C9A44C]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span
                      className="absolute -top-1 -right-1 text-[10px] font-bold text-[#090909] bg-[#C9A44C] w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  <h3
                    className="text-white font-semibold text-base mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-white/45 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {s.description}
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
