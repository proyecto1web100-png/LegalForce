"use client";

import { Phone, Shield, Clock, Star, ChevronDown } from "lucide-react";

const WHATSAPP_NUMBER = "50400000000";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola, me gustaría obtener información sobre los servicios de Legal Force HN."
);

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#090909]"
    >
      {/* Background ambient — radial gradients, no expensive CSS filter */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 700px 600px at -5% -10%, rgba(201,164,76,0.06) 0%, transparent 65%), radial-gradient(ellipse 500px 400px at 105% 110%, rgba(201,164,76,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Label */}
          <div
            className="flex items-center gap-3 mb-8"
            style={{ animation: "hero-up 0.6s cubic-bezier(0.22,1,0.36,1) 0.05s both" }}
          >
            <span className="gold-rule" />
            <span className="section-label">Bufete Jurídico en Honduras</span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              animation: "hero-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s both",
            }}
          >
            <span className="text-white">Defendemos </span>
            <br />
            <span className="text-white">Tu Futuro </span>
            <span className="text-[#C9A44C]">Con Estrategia</span>
            <br />
            <span className="text-white">y Precisión</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-white/55 max-w-2xl leading-relaxed mb-10"
            style={{
              fontFamily: "var(--font-body)",
              animation: "hero-up 0.6s cubic-bezier(0.22,1,0.36,1) 0.3s both",
            }}
          >
            Más de una década protegiendo los derechos de nuestros clientes en
            Honduras. Expertos en Derecho Penal, Laboral, Civil, Administrativo,
            Migratorio, Tributario, Fiscal y Notarial.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4"
            style={{ animation: "hero-up 0.6s cubic-bezier(0.22,1,0.36,1) 0.42s both" }}
          >
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A44C] hover:bg-[#D4B76A] text-[#090909] font-semibold px-8 py-4 rounded-sm text-base transition-colors duration-200 cursor-pointer"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Phone className="w-4 h-4" />
              Escríbenos por WhatsApp
            </a>
            <button
              onClick={() => document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-[#C9A44C]/50 text-white hover:text-[#C9A44C] font-semibold px-8 py-4 rounded-sm text-base transition-all duration-200 cursor-pointer"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ver Nuestros Servicios
            </button>
          </div>

          {/* Trust badges */}
          <div
            className="flex flex-wrap items-center gap-6 mt-14"
            style={{ animation: "hero-in 0.6s ease 0.7s both" }}
          >
            {[
              { icon: Shield, text: "Confidencialidad garantizada" },
              { icon: Clock, text: "Respuesta en 24 horas" },
              { icon: Star, text: "98% de satisfacción" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 text-white/40 text-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <Icon className="w-4 h-4 text-[#C9A44C]" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll arrow */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animation: "hero-in 0.5s ease 1.1s both" }}
      >
        <ChevronDown
          className="w-5 h-5 text-[#C9A44C]/40"
          style={{ animation: "chevron-bounce 1.6s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}
