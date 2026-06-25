"use client";

import { Star, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Testimonials() {
  return (
    <section className="py-16 bg-[#0f0f0f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: heading */}
          <div>
            <span className="section-label block mb-3">Testimonios</span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Lo Que Dicen{" "}
              <span className="text-[#C9A44C]">Nuestros Clientes</span>
            </h2>
            <span className="gold-rule-lg block mb-6" />
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#C9A44C] fill-[#C9A44C]" />
              ))}
              <span
                className="text-white/50 text-sm ml-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                4.9 / 5.0
              </span>
            </div>
          </div>

          {/* Right: single testimonial card */}
          <div className="card-glass rounded-sm p-7 flex flex-col gap-5 hover:border-[#C9A44C]/20 transition-colors duration-300">
            <Quote className="w-8 h-8 text-[#C9A44C]/30" />
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-[#C9A44C] fill-[#C9A44C]" />
              ))}
            </div>
            <p
              className="text-[#F5F0E8]/60 leading-relaxed italic"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.1rem, 2vw, 1.3rem)" }}
            >
              &ldquo;Legal Force &amp; Asociados me representó en un caso penal muy complejo. Su equipo fue
              profesional, estratégico y siempre estuvo disponible. El resultado fue mejor del
              que esperaba. Los recomiendo sin dudarlo.&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <div className="w-10 h-10 rounded-full bg-[#C9A44C]/20 flex items-center justify-center">
                <span
                  className="text-[#C9A44C] text-sm font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  RM
                </span>
              </div>
              <div>
                <div
                  className="text-white font-semibold text-sm"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Roberto M.
                </div>
                <div
                  className="text-white/35 text-xs"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Empresario, Tegucigalpa
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
