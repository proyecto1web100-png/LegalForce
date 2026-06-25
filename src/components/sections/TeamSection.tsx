"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Award, BookOpen, Scale, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "50498206681";

const credentials = [
  { icon: Scale, text: "Abogado y Notario Público" },
  { icon: BookOpen, text: "Licenciado en Periodismo" },
  { icon: Award, text: "Maestría en Criminología y Criminalística" },
  { icon: Award, text: "Especialista en Derecho Penal, Constitucional y Litigación Estratégica" },
];

export function TeamSection() {
  return (
    <section id="equipo" className="py-10 bg-[#090909] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6">

        <AnimatedSection className="mb-8">
          <span className="section-label block mb-5">Nuestro Equipo</span>
          <h2
            className="text-[#F5F0E8] font-medium leading-tight"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}
          >
            Los Profesionales{" "}
            <span className="text-[#C9A44C] italic">Detrás del Despacho</span>
          </h2>
          <span className="gold-rule-lg mt-6 block" />
        </AnimatedSection>

        {/* Director profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

          {/* Photo */}
          <AnimatedSection className="relative">
            <div className="relative overflow-hidden bg-[#0d0d0d] border border-white/[0.06] aspect-[3/4] max-w-sm mx-auto lg:mx-0">
              {/* Fallback — behind, only visible if image fails */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#0d0d0d]">
                <div className="w-20 h-20 rounded-full bg-[#C9A44C]/10 border border-[#C9A44C]/20 flex items-center justify-center">
                  <span className="text-[#C9A44C] font-bold" style={{ fontFamily: "var(--font-heading)", fontSize: "2rem" }}>IL</span>
                </div>
                <span className="text-[#F5F0E8]/20 text-xs" style={{ fontFamily: "var(--font-body)" }}>Fotografía profesional</span>
              </div>
              {/* Image — on top, covers fallback when loaded */}
              <img
                src="/images/ingvar-personal.jpg"
                alt="Abog. Ingvar Onassis López Hernández frente al Poder Judicial"
                className="absolute inset-0 w-full h-full object-cover object-top"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Gold corner accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A44C] to-[#D4B76A]" />
            </div>
          </AnimatedSection>

          {/* Bio */}
          <AnimatedSection direction="left" className="flex flex-col justify-center gap-6">
            <div>
              <span className="block text-[#C9A44C] text-[10px] uppercase tracking-widest mb-2" style={{ fontFamily: "var(--font-body)" }}>
                Director General · Legal Force &amp; Asociados
              </span>
              <h3
                className="text-[#F5F0E8] font-medium leading-tight mb-1"
                style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
              >
                Ingvar Onassis
              </h3>
              <h3
                className="text-[#C9A44C] italic font-medium leading-tight"
                style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
              >
                López Hernández
              </h3>
            </div>

            <div className="h-px w-12 bg-[#C9A44C]/50" />

            <div className="flex flex-col gap-3">
              {credentials.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-[#C9A44C]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-[#C9A44C]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[#F5F0E8]/60 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[#F5F0E8]/40 text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              Con más de 15 años de trayectoria en litigación estratégica, el Abog. López Hernández
              ha liderado casos de alta complejidad en materia penal y constitucional, representando
              tanto a personas individuales como a empresas nacionales e internacionales.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quisiera agendar una consulta directamente con el Abog. Ingvar López.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C9A44C] hover:bg-[#D4B76A] text-[#050505] font-semibold px-6 py-3 text-xs tracking-wide transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Agendar consulta
              </a>
              <a
                href="tel:+50498206681"
                className="inline-flex items-center gap-2 border border-white/[0.08] hover:border-[#C9A44C]/30 text-[#F5F0E8]/50 hover:text-[#C9A44C] px-6 py-3 text-xs tracking-wide transition-all duration-200 cursor-pointer"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <Phone className="w-3.5 h-3.5" />
                +504 9820-6681
              </a>
            </div>
          </AnimatedSection>

        </div>

      </div>
    </section>
  );
}
