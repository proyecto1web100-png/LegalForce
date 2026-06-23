"use client";

import { Star, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    name: "Roberto M.",
    role: "Empresario, Tegucigalpa",
    initials: "RM",
    stars: 5,
    text: "Legal Force HN me representó en un caso penal muy complejo. Su equipo fue profesional, estratégico y siempre estuvo disponible. El resultado fue mejor del que esperaba. Los recomiendo sin dudarlo.",
  },
  {
    name: "Sandra L.",
    role: "Empleada, San Pedro Sula",
    initials: "SL",
    stars: 5,
    text: "Fui despedida injustificadamente y no sabía qué hacer. El bufete tomó mi caso con seriedad, me explicaron todo el proceso y lograron que recibiera todas mis prestaciones. Gracias totales.",
  },
  {
    name: "Carlos F.",
    role: "Empresario extranjero, Roatán",
    initials: "CF",
    stars: 5,
    text: "Necesitaba regularizar mi situación migratoria para invertir en Honduras. Legal Force HN gestionó todo de forma rápida y transparente. Un equipo de alto nivel con atención personalizada.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[#0f0f0f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <span className="section-label block mb-4">Testimonios</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-4xl sm:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Lo Que Dicen{" "}
              <span className="text-[#C9A44C]">Nuestros Clientes</span>
            </h2>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-[#C9A44C] fill-[#C9A44C]"
                />
              ))}
              <span
                className="text-white/50 text-sm ml-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                4.9 / 5.0
              </span>
            </div>
          </div>
          <span className="gold-rule-lg mt-6 block" />
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.12}>
              <div className="card-glass rounded-sm p-7 h-full flex flex-col gap-5 hover:border-[#C9A44C]/20 transition-colors duration-300">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-[#C9A44C]/30" />

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-3.5 h-3.5 text-[#C9A44C] fill-[#C9A44C]"
                    />
                  ))}
                </div>

                {/* Text */}
                <p
                  className="text-white/65 text-sm leading-relaxed flex-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-9 h-9 rounded-full bg-[#C9A44C]/20 flex items-center justify-center">
                    <span
                      className="text-[#C9A44C] text-xs font-bold"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <div
                      className="text-white font-semibold text-sm"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {t.name}
                    </div>
                    <div
                      className="text-white/35 text-xs"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
