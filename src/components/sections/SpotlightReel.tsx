"use client";

import { useRef, useState, useEffect } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const WHATSAPP_NUMBER = "50498206681";

const cards = [
  {
    img: "/images/hero-painting.jpg",
    category: "Identidad",
    title: "Más de 15 Años\nde Litigación",
    tagline: "Resultados que hablan por sí solos.",
    gradient: "from-[#050505]/90 via-[#1a0e00]/60 to-transparent",
    waMsg: "Hola, quisiera conocer más sobre Legal Force & Asociados.",
  },
  {
    img: "/images/ingvar-portrait.jpg",
    category: "Dirección",
    title: "Ingvar Onassis\nLópez Hernández",
    tagline: "Director General · Abog. y Notario Público.",
    gradient: "from-[#050505]/90 via-[#050505]/50 to-transparent",
    waMsg: "Hola, quisiera agendar una consulta con el Abog. Ingvar López.",
  },
  {
    img: "/images/service-laboral.jpg",
    category: "Derecho Laboral",
    title: "Defensa de\nTus Derechos",
    tagline: "Despidos, prestaciones y negociación colectiva.",
    gradient: "from-[#050505]/90 via-[#0d1a0d]/50 to-transparent",
    waMsg: "Hola, necesito asesoría en Derecho Laboral.",
  },
  {
    img: "/images/service-tributario.jpg",
    category: "Derecho Tributario",
    title: "Estrategia\nFiscal Sólida",
    tagline: "Optimización y defensa ante el SAR.",
    gradient: "from-[#050505]/90 via-[#1a1000]/50 to-transparent",
    waMsg: "Hola, necesito asesoría tributaria o fiscal.",
  },
  {
    img: "/images/service-notarial.jpg",
    category: "Derecho Notarial",
    title: "Instrumentos\ncon Validez Plena",
    tagline: "Escrituras, poderes y contratos.",
    gradient: "from-[#050505]/90 via-[#0a0a1a]/50 to-transparent",
    waMsg: "Hola, necesito servicios notariales.",
  },
];

const FALLBACK_GRADIENTS = [
  "linear-gradient(135deg, #1a0e00 0%, #0d0700 100%)",
  "linear-gradient(135deg, #0a0a0a 0%, #1a1200 100%)",
  "linear-gradient(135deg, #001a08 0%, #000d04 100%)",
  "linear-gradient(135deg, #1a1000 0%, #0d0800 100%)",
  "linear-gradient(135deg, #0a0a1a 0%, #05050d 100%)",
];

function SpotlightCard({
  card,
  index,
  active,
  onActivate,
}: {
  card: (typeof cards)[number];
  index: number;
  active: boolean;
  onActivate: () => void;
}) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden cursor-pointer group flex-shrink-0 transition-all duration-500
        w-[75vw] sm:w-[55vw] lg:w-auto
        ${active ? "lg:col-span-2" : "lg:col-span-1"}
      `}
      style={{ aspectRatio: "3/4" }}
      onClick={onActivate}
      onMouseEnter={onActivate}
    >
      {/* Background */}
      {!imgError && (
        <img
          src={card.img}
          alt={card.title.replace("\n", " ")}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
        />
      )}
      {/* Fallback gradient background */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background: FALLBACK_GRADIENTS[index],
          opacity: imgError || !imgLoaded ? 1 : 0,
        }}
      />

      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${card.gradient}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-70" />

      {/* Gold edge accent */}
      <div
        className={`absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[#C9A44C]/60 via-[#C9A44C]/20 to-transparent transition-opacity duration-300 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
        {/* Top: Category */}
        <div className="flex items-center justify-between">
          <span
            className="text-[#C9A44C] text-[9px] uppercase tracking-[0.18em] bg-[#050505]/60 px-2.5 py-1 border border-[#C9A44C]/25"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {card.category}
          </span>
          <div
            className={`w-7 h-7 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${
              active ? "bg-[#C9A44C]/20 border-[#C9A44C]/50" : "bg-transparent"
            }`}
          >
            <svg
              className={`w-3 h-3 transition-colors duration-300 ${active ? "text-[#C9A44C]" : "text-white/30"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </div>
        </div>

        {/* Bottom: Text + CTA */}
        <div>
          <h3
            className="text-[#F5F0E8] font-medium leading-tight mb-2 whitespace-pre-line"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
              textShadow: "0 2px 12px rgba(0,0,0,0.8)",
            }}
          >
            {card.title}
          </h3>
          <p
            className={`text-[#F5F0E8]/50 text-xs leading-relaxed mb-4 transition-all duration-300 ${
              active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 lg:opacity-100 lg:translate-y-0"
            }`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            {card.tagline}
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(card.waMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`inline-flex items-center gap-1.5 text-[#C9A44C] text-[10px] uppercase tracking-widest border-b border-[#C9A44C]/30 hover:border-[#C9A44C] pb-0.5 transition-all duration-200 cursor-pointer ${
              active ? "opacity-100" : "opacity-0 lg:opacity-60 lg:group-hover:opacity-100"
            }`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            Consultar
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export function SpotlightReel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.scrollWidth / cards.length;
      const idx = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(idx, cards.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="py-20 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <AnimatedSection>
          <span className="section-label block mb-5">Nuestra Firma</span>
          <h2
            className="text-[#F5F0E8] font-medium leading-tight"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}
          >
            Talento,{" "}
            <span className="text-[#C9A44C] italic">Experiencia</span>
            {" "}y Presencia
          </h2>
          <span className="gold-rule-lg mt-6 block" />
        </AnimatedSection>
      </div>

      {/* Mobile: horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto px-6 pb-4 lg:hidden scrollbar-hide"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
      >
        {cards.map((card, i) => (
          <div key={i} style={{ scrollSnapAlign: "start" }}>
            <SpotlightCard
              card={card}
              index={i}
              active={activeIndex === i}
              onActivate={() => setActiveIndex(i)}
            />
          </div>
        ))}
      </div>

      {/* Desktop: CSS grid with active card expanding */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-3 px-6 max-w-7xl mx-auto" style={{ gridAutoRows: "480px" }}>
        {cards.map((card, i) => (
          <SpotlightCard
            key={i}
            card={card}
            index={i}
            active={activeIndex === i}
            onActivate={() => setActiveIndex(i)}
          />
        ))}
      </div>

      {/* Dots indicator (mobile) */}
      <div className="flex justify-center gap-2 mt-6 lg:hidden">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveIndex(i);
              const el = scrollRef.current;
              if (el) {
                const cardWidth = el.scrollWidth / cards.length;
                el.scrollTo({ left: i * cardWidth, behavior: "smooth" });
              }
            }}
            className={`transition-all duration-300 cursor-pointer ${
              i === activeIndex
                ? "w-6 h-1.5 bg-[#C9A44C]"
                : "w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Ver imagen ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
