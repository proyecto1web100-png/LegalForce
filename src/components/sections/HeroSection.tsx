"use client";

import { motion } from "framer-motion";
import { Phone, ChevronDown, Shield, Clock, Star } from "lucide-react";

const WHATSAPP_NUMBER = "50400000000";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola, me gustaría agendar una consulta legal con Legal Force HN."
);

export function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#090909]"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#C9A44C 1px, transparent 1px), linear-gradient(90deg, #C9A44C 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial glow top-left */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#C9A44C]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Radial glow bottom-right */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C9A44C]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="gold-rule" />
            <span className="section-label">Bufete Jurídico en Honduras</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-white">Defendemos </span>
            <br />
            <span className="text-white">Tu Futuro </span>
            <span className="text-[#C9A44C]">Con Estrategia</span>
            <br />
            <span className="text-white">y Precisión</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg sm:text-xl text-white/55 max-w-2xl leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Más de una década protegiendo los derechos de nuestros clientes en
            Honduras. Expertos en Derecho Penal, Laboral, Civil, Administrativo,
            Migratorio, Tributario, Fiscal y Notarial.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 bg-[#C9A44C] hover:bg-[#D4B76A] text-[#090909] font-semibold px-8 py-4 rounded-sm text-base transition-colors duration-200 cursor-pointer"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Agendar Consulta
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-[#C9A44C]/50 text-white hover:text-[#C9A44C] font-semibold px-8 py-4 rounded-sm text-base transition-all duration-200 cursor-pointer"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Phone className="w-4 h-4" />
              Contactar por WhatsApp
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap items-center gap-6 mt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
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
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-white/25 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-[#C9A44C]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
