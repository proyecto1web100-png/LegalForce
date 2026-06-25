"use client";

import { Shield, Clock, Star } from "lucide-react";
import { asset } from "@/lib/asset";

const WHATSAPP_NUMBER = "50498206681";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola, me gustaría obtener información sobre los servicios de Legal Force & Asociados."
);

const WA_ICON = (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.855L0 24l6.336-1.51A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.809 9.809 0 01-5.012-1.378l-.36-.214-3.76.897.942-3.663-.235-.375A9.784 9.784 0 012.182 12C2.182 6.568 6.568 2.182 12 2.182S21.818 6.568 21.818 12 17.432 21.818 12 21.818z" />
  </svg>
);

const lines = [
  { words: ["Legal", "Force"], color: "text-[#F5F0E8]", italic: false, size: "clamp(5.5rem, 14vw, 12rem)", spacing: "0.06em" },
  { words: ["Donde", "el", "derecho"], color: "text-[#C9A44C]", italic: false, size: "clamp(2rem, 5vw, 4rem)", spacing: "0" },
  { words: ["encuentra", "Justicia"], color: "text-[#C9A44C]", italic: true, size: "clamp(2rem, 5vw, 4rem)", spacing: "0" },
];

export function HeroSection() {
  const badges = [
    { icon: Shield, text: "Confidencialidad garantizada" },
    { icon: Clock, text: "Respuesta en 24 horas" },
    { icon: Star, text: "98% de satisfacción" },
  ];

  let wordIndex = 0;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Background image — right side, editorial fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] pointer-events-none"
        style={{
          backgroundImage: `url('${asset("/images/ingvar-portrait-v2.jpg")}')`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          opacity: 0.40,
        }}
      />
      {/* Gradient mask — soft left fade for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(5,5,5,0.75) 0%, rgba(5,5,5,0.55) 40%, rgba(5,5,5,0.2) 70%, rgba(5,5,5,0.05) 100%)",
        }}
      />
      {/* Soft left+right edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(5,5,5,0.35) 0%, transparent 12%, transparent 88%, rgba(5,5,5,0.35) 100%)",
        }}
      />
      {/* Gold ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 600px 500px at -8% 55%, rgba(201,164,76,0.045) 0%, transparent 62%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A44C]/20 to-transparent" />
      {/* Bottom fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-72 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #050505 80%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Label */}
        <div
          className="flex items-center gap-4 mb-10"
          style={{ animation: "hero-up 0.6s cubic-bezier(0.22,1,0.36,1) 0.05s both" }}
        >
          <span className="h-px w-10 bg-[#C9A44C]" />
          <span
            className="text-[#C9A44C] text-[10px] uppercase tracking-[0.3em] font-semibold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Bufete Jurídico · Honduras
          </span>
        </div>

        {/* Headline — word-by-word reveal */}
        <h1 className="leading-[0.92] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
          {lines.map((line) => (
            <span
              key={line.words.join("")}
              className="block"
              style={{ fontSize: line.size, letterSpacing: line.spacing }}
            >
              {line.words.map((word) => {
                const delay = 0.1 + wordIndex++ * 0.11;
                return (
                  <span
                    key={word}
                    className={`inline-block font-medium mr-[0.2em] ${line.color}${line.italic ? " italic" : ""}`}
                    style={{ animation: `hero-word 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s both` }}
                  >
                    {word}
                  </span>
                );
              })}
            </span>
          ))}
        </h1>

        {/* Subheading */}
        <p
          className="text-[#F5F0E8]/45 max-w-lg leading-relaxed mb-12"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.82rem, 1.4vw, 0.95rem)",
            animation: "hero-up 0.65s cubic-bezier(0.22,1,0.36,1) 0.55s both",
          }}
        >
          Defensa jurídica estratégica. Soluciones legales con ética,
          experiencia y compromiso. Firma hondureña especializada en litigación
          estratégica y asesoría corporativa.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 mb-16"
          style={{ animation: "hero-up 0.65s cubic-bezier(0.22,1,0.36,1) 0.66s both" }}
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#C9A44C] hover:bg-[#D4B76A] text-[#050505] font-semibold px-8 py-4 text-sm tracking-wide transition-colors duration-200 cursor-pointer"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {WA_ICON}
            Escríbenos por WhatsApp
          </a>
          <button
            onClick={() =>
              document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center gap-2 border border-[#F5F0E8]/12 hover:border-[#C9A44C]/50 text-[#F5F0E8]/60 hover:text-[#C9A44C] font-medium px-8 py-4 text-sm tracking-wide transition-all duration-200 cursor-pointer"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Ver Áreas de Práctica
          </button>
        </div>

        {/* Trust badges */}
        <div
          className="flex flex-wrap items-center gap-3"
          style={{ animation: "hero-in 0.6s ease 0.82s both" }}
        >
          {badges.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2.5 border border-white/[0.10] bg-white/[0.04] px-4 py-2.5 rounded-full text-[#F5F0E8]/60 text-xs tracking-wide"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Icon className="w-4 h-4 text-[#C9A44C]/80 shrink-0" strokeWidth={1.5} />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A44C]/12 to-transparent" />
    </section>
  );
}
