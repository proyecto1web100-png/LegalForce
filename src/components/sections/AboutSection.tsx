"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const values = [
  { label: "Confidencialidad", desc: "Absoluta reserva de toda información que nos confíes." },
  { label: "Ética", desc: "Ejercicio profesional guiado por principios irrenunciables." },
  { label: "Compromiso", desc: "Involucramiento total con el resultado de cada caso." },
  { label: "Excelencia", desc: "Estándares de calidad jurídica superiores en cada actuación." },
  { label: "Integridad", desc: "Coherencia entre lo que decimos y lo que hacemos." },
  { label: "Estrategia", desc: "Defensa anticipada, planificada y orientada a resultados." },
];

export function AboutSection() {
  return (
    <section id="nosotros" className="relative py-20 bg-[#060606] overflow-hidden">
      {/* Background image — translucent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/about-bg.jpg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          opacity: 0.07,
        }}
      />
      {/* Subtle dark vignette on edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 80% at 70% 50%, transparent 40%, #060606 100%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <AnimatedSection className="mb-14">
          <span className="section-label block mb-5">El Despacho</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-[#F5F0E8] font-medium leading-tight"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}
            >
              ¿Quiénes{" "}
              <span className="text-[#C9A44C] italic">Somos?</span>
            </h2>
            <p className="text-[#F5F0E8]/40 text-sm max-w-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              Más de una década de litigación estratégica en Honduras.
            </p>
          </div>
          <span className="gold-rule-lg mt-6 block" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-16">

          {/* Left: description + mission + vision */}
          <div className="flex flex-col gap-8">
            <AnimatedSection>
              <p className="text-[#F5F0E8]/60 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Somos una firma legal hondureña especializada en brindar soluciones integrales
                en materia penal, civil, mercantil, laboral, administrativa, constitucional y
                notarial, comprometidos con la defensa de los derechos e intereses de nuestros
                clientes con la más alta ética profesional.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="border-l-2 border-[#C9A44C]/40 pl-5">
                <span className="block text-[#C9A44C] text-[10px] uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-body)" }}>Misión</span>
                <p className="text-[#F5F0E8]/65 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  Brindar soluciones legales integrales con ética, estrategia y compromiso,
                  protegiendo los derechos e intereses de nuestros clientes con excelencia jurídica
                  y resultados concretos.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <div className="border-l-2 border-[#C9A44C]/20 pl-5">
                <span className="block text-[#C9A44C] text-[10px] uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-body)" }}>Visión</span>
                <p className="text-[#F5F0E8]/65 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  Ser el despacho jurídico de referencia en Honduras, reconocido por su litigación
                  estratégica, integridad profesional y capacidad de representar tanto a personas
                  naturales como a las empresas más exigentes.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.16}>
              <div className="border-l-2 border-[#C9A44C]/10 pl-5">
                <span className="block text-[#C9A44C] text-[10px] uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-body)" }}>Filosofía</span>
                <p className="text-[#F5F0E8]/55 text-sm leading-relaxed italic" style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem" }}>
                  &ldquo;Compromiso, experiencia y resultados al servicio de la justicia.&rdquo;
                </p>
                <p className="text-[#F5F0E8]/35 text-xs mt-2" style={{ fontFamily: "var(--font-body)" }}>
                  — Abog. Ingvar O. López, Director General
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: values grid */}
          <div>
            <AnimatedSection direction="left" className="mb-5">
              <span className="block text-[#F5F0E8]/30 text-[10px] uppercase tracking-widest" style={{ fontFamily: "var(--font-body)" }}>
                Nuestros Valores
              </span>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((v, i) => (
                <AnimatedSection key={v.label} direction="left" delay={i * 0.06}>
                  <div className="border border-white/[0.06] bg-white/[0.015] p-4 hover:border-[#C9A44C]/25 hover:bg-[#C9A44C]/[0.03] transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A44C]/70 shrink-0" />
                      <span className="text-[#F5F0E8]/80 text-xs font-semibold" style={{ fontFamily: "var(--font-body)" }}>
                        {v.label}
                      </span>
                    </div>
                    <p className="text-[#F5F0E8]/35 text-xs leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                      {v.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>

  );
}
