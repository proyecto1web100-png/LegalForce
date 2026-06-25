"use client";

import { Trophy, UserCheck, Target, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const pillars = [
  {
    icon: Trophy,
    number: "01",
    title: "Experiencia Comprobada",
    description:
      "Más de una década defendiendo con éxito a personas y empresas en Honduras. Nuestro historial habla por nosotros.",
  },
  {
    icon: UserCheck,
    number: "02",
    title: "Atención Personalizada",
    description:
      "Cada caso es único. Nos dedicamos a entender tu situación en profundidad para ofrecerte la estrategia más adecuada.",
  },
  {
    icon: Target,
    number: "03",
    title: "Defensa Estratégica",
    description:
      "No solo reaccionamos — anticipamos. Diseñamos estrategias legales con objetivos claros y resultados medibles.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Confianza y Ética",
    description:
      "Operamos con absoluta transparencia. Sabrás el estado de tu caso en todo momento, sin letra pequeña.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="nosotros"
      className="py-12 bg-[#0f0f0f] border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-8 max-w-2xl">
          <span className="section-label block mb-4">¿Por qué elegirnos?</span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Cuatro Razones para{" "}
            <span className="text-[#C9A44C]">Confiar en Nosotros</span>
          </h2>
          <span className="gold-rule-lg mt-6 block" />
        </AnimatedSection>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <AnimatedSection key={p.number} delay={i * 0.1}>
                <div className="flex gap-6 group">
                  {/* Number + line */}
                  <div className="flex flex-col items-center gap-2">
                    <span
                      className="text-[#C9A44C]/30 text-xs font-bold tabular-nums"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {p.number}
                    </span>
                    <div className="w-px flex-1 bg-[#C9A44C]/15 min-h-[80px]" />
                  </div>

                  {/* Content */}
                  <div className="pb-2">
                    <div className="w-10 h-10 rounded-sm bg-[#C9A44C]/10 flex items-center justify-center mb-4 group-hover:bg-[#C9A44C]/20 transition-colors duration-300">
                      <Icon
                        className="w-5 h-5 text-[#C9A44C]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3
                      className="text-white font-semibold text-lg mb-3"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-white/50 text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {p.description}
                    </p>
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
