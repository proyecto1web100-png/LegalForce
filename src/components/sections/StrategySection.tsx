"use client";

import { Trophy, UserCheck, Target, ShieldCheck, MessageSquare, Search, Lightbulb, Scale } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const pillars = [
  { icon: Trophy, title: "Experiencia Comprobada", description: "Más de una década defendiendo a personas y empresas en Honduras con resultados comprobados." },
  { icon: UserCheck, title: "Atención Personalizada", description: "Cada caso es único. Nos dedicamos a entender tu situación para ofrecerte la estrategia más adecuada." },
  { icon: Target, title: "Defensa Estratégica", description: "Anticipamos problemas y diseñamos estrategias con objetivos claros y resultados medibles." },
  { icon: ShieldCheck, title: "Confianza y Ética", description: "Transparencia total. Sabrás el estado de tu caso en todo momento, sin sorpresas." },
];

const steps = [
  { icon: MessageSquare, step: "01", title: "Consulta Inicial", description: "Escuchamos los detalles de tu caso en total confidencialidad." },
  { icon: Search, step: "02", title: "Análisis del Caso", description: "Estudiamos la situación, reunimos evidencias y evaluamos opciones." },
  { icon: Lightbulb, step: "03", title: "Estrategia Legal", description: "Diseñamos un plan de acción con objetivos definidos y plazos realistas." },
  { icon: Scale, step: "04", title: "Representación", description: "Te representamos con firmeza hasta lograr el mejor resultado posible." },
];

export function StrategySection() {
  return (
    <section id="proceso" className="py-16 bg-[#0f0f0f] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Why choose us */}
          <div>
            <AnimatedSection>
              <span className="section-label block mb-3">¿Por qué elegirnos?</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Cuatro Razones para <span className="text-[#C9A44C]">Confiar en Nosotros</span>
              </h2>
              <span className="gold-rule-lg mt-4 block mb-8" />
            </AnimatedSection>

            <div className="flex flex-col gap-6">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <AnimatedSection key={p.title} delay={i * 0.08}>
                    <div className="flex gap-4 group">
                      <div className="w-9 h-9 rounded-sm bg-[#C9A44C]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C9A44C]/20 transition-colors duration-300 mt-0.5">
                        <Icon className="w-4 h-4 text-[#C9A44C]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-heading)" }}>{p.title}</h3>
                        <p className="text-white/45 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{p.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>

          {/* Right: Process — horizontal scroll snap */}
          <div>
            <AnimatedSection direction="left">
              <span className="section-label block mb-3">Nuestro Proceso</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                De la Consulta a la <span className="text-[#C9A44C]">Victoria</span>
              </h2>
              <span className="gold-rule-lg mt-4 block mb-6" />
            </AnimatedSection>

            {/* Scroll hint on mobile */}
            <p
              className="text-[#F5F0E8]/20 text-[10px] uppercase tracking-widest mb-4 lg:hidden"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Desliza para ver los pasos →
            </p>

            {/* Horizontal scroll container */}
            <div className="process-scroll -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-2 lg:gap-4">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.step}
                    className="process-step-card w-[78vw] sm:w-[60vw] lg:w-auto mr-3 lg:mr-0 border border-white/[0.06] bg-white/[0.02] p-5 hover:border-[#C9A44C]/25 hover:bg-[#C9A44C]/[0.03] transition-all duration-300"
                    style={{ animation: `hero-up 0.5s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.09}s both` }}
                  >
                    {/* Step number + icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded-full bg-[#161616] border border-[#C9A44C]/20 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#C9A44C]" strokeWidth={1.5} />
                      </div>
                      <span
                        className="text-[#C9A44C]/25 font-bold"
                        style={{ fontFamily: "var(--font-heading)", fontSize: "2rem" }}
                      >
                        {s.step}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: "1rem" }}>{s.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{s.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
