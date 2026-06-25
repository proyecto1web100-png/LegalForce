"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { asset } from "@/lib/asset";

const WHATSAPP_NUMBER = "50498206681";

const cards = [
  {
    img: "/images/hero-painting-v2.jpg",
    category: "Identidad",
    title: "La Justicia\nes Nuestro Oficio",
    tagline: "Más de 15 años de litigación estratégica en Honduras.",
    waMsg: "Hola, quisiera conocer más sobre Legal Force & Asociados.",
  },
  {
    img: "/images/ingvar-formal.jpg",
    category: "Director General",
    title: "Ingvar Onassis\nLópez Hernández",
    tagline: "Abogado Penalista · Notario Público · Maestría en Criminología.",
    waMsg: "Hola, quisiera agendar una consulta con el Abog. Ingvar López.",
  },
  {
    img: "/images/ingvar-consulting-v2.jpg",
    category: "Asesoría Legal",
    title: "Tu Caso,\nNuestra Misión",
    tagline: "Atención personalizada desde la primera consulta.",
    waMsg: "Hola, necesito asesoría legal. ¿Pueden ayudarme?",
  },
  {
    img: "/images/service-tributario-v2.jpg",
    category: "Fiscal · Tributario",
    title: "Estrategia\nFiscal Sólida",
    tagline: "Planificación, defensa ante el SAR y asesoría de empresas.",
    waMsg: "Hola, necesito asesoría en asuntos fiscales o tributarios.",
  },
];

const CARD_W = 400;

export function SpotlightReel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  /* ── Mobile scroll sync ── */
  const scrollTo = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setActiveIndex(Math.min(idx, cards.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Desktop navigation ── */
  const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const next = () => setActiveIndex((i) => Math.min(cards.length - 1, i + 1));

  return (
    <section className="py-10 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6">
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

      {/* ══════════════ MOBILE: horizontal scroll carousel ══════════════ */}
      <div className="relative lg:hidden">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-full"
              style={{ scrollSnapAlign: "start", height: "72vh", minHeight: "420px" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('${asset(card.img)}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 max-w-3xl">
                <div>
                  <span
                    className="text-[#C9A44C] text-[9px] uppercase tracking-[0.2em] bg-[#050505]/60 px-3 py-1.5 border border-[#C9A44C]/25"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {card.category}
                  </span>
                </div>
                <div>
                  <div className="w-8 h-px bg-[#C9A44C]/60 mb-4" />
                  <h3
                    className="text-[#F5F0E8] font-medium leading-tight mb-3 whitespace-pre-line"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                      textShadow: "0 2px 16px rgba(0,0,0,0.9)",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-[#F5F0E8]/55 text-sm leading-relaxed mb-6 max-w-sm" style={{ fontFamily: "var(--font-body)" }}>
                    {card.tagline}
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(card.waMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#C9A44C] text-[10px] uppercase tracking-widest border-b border-[#C9A44C]/40 hover:border-[#C9A44C] pb-0.5 transition-all duration-200 cursor-pointer"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Consultar
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              <div
                className="absolute top-6 right-6 sm:top-10 sm:right-10 text-[#F5F0E8]/30 text-xs tabular-nums"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {String(i + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#050505]/70 border border-white/10 hover:border-[#C9A44C]/40 flex items-center justify-center text-white/50 hover:text-[#C9A44C] disabled:opacity-20 disabled:pointer-events-none transition-all duration-200 cursor-pointer"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scrollTo(Math.min(cards.length - 1, activeIndex + 1))}
          disabled={activeIndex === cards.length - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#050505]/70 border border-white/10 hover:border-[#C9A44C]/40 flex items-center justify-center text-white/50 hover:text-[#C9A44C] disabled:opacity-20 disabled:pointer-events-none transition-all duration-200 cursor-pointer"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile dots */}
      <div className="lg:hidden flex justify-center gap-2.5 mt-6">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`transition-all duration-300 cursor-pointer ${
              i === activeIndex
                ? "w-7 h-1.5 bg-[#C9A44C]"
                : "w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Ir a imagen ${i + 1}`}
          />
        ))}
      </div>

      {/* ══════════════ DESKTOP: Instagram-style post slider ══════════════ */}
      <div className="hidden lg:flex flex-col items-center gap-6 py-4">

        {/* Slider row: arrow · card · arrow */}
        <div className="flex items-center gap-8">

          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            className="w-12 h-12 rounded-full bg-[#0d0d0d] border border-white/10 hover:border-[#C9A44C]/40 flex items-center justify-center text-white/40 hover:text-[#C9A44C] disabled:opacity-20 disabled:pointer-events-none transition-all duration-200 cursor-pointer flex-shrink-0"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Card viewport — clips overflow so only one card shows */}
          <div className="overflow-hidden rounded-none" style={{ width: `${CARD_W}px` }}>
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * CARD_W}px)` }}
            >
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 bg-[#0d0d0d] border border-white/[0.08]"
                  style={{ width: `${CARD_W}px` }}
                >
                  {/* Image — 4:5 portrait ratio */}
                  <div
                    style={{
                      width: `${CARD_W}px`,
                      aspectRatio: "4/5",
                      backgroundImage: `url('${asset(card.img)}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center top",
                    }}
                  />

                  {/* Caption */}
                  <div className="p-5 border-t border-white/[0.06]">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-[#C9A44C] text-[9px] uppercase tracking-[0.2em] border border-[#C9A44C]/25 px-2.5 py-1"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {card.category}
                      </span>
                      <span
                        className="text-[#F5F0E8]/25 text-xs tabular-nums"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {String(i + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="w-6 h-px bg-[#C9A44C]/50 mb-3" />

                    <h3
                      className="text-[#F5F0E8] font-medium leading-tight mb-2 whitespace-pre-line"
                      style={{ fontFamily: "var(--font-heading)", fontSize: "1.45rem" }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-[#F5F0E8]/45 text-xs leading-relaxed mb-4"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {card.tagline}
                    </p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(card.waMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#C9A44C] text-[10px] uppercase tracking-widest border-b border-[#C9A44C]/40 hover:border-[#C9A44C] pb-0.5 transition-all duration-200 cursor-pointer"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Consultar
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            disabled={activeIndex === cards.length - 1}
            className="w-12 h-12 rounded-full bg-[#0d0d0d] border border-white/10 hover:border-[#C9A44C]/40 flex items-center justify-center text-white/40 hover:text-[#C9A44C] disabled:opacity-20 disabled:pointer-events-none transition-all duration-200 cursor-pointer flex-shrink-0"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Desktop dots */}
        <div className="flex items-center gap-2.5">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`transition-all duration-300 cursor-pointer ${
                i === activeIndex
                  ? "w-7 h-1.5 bg-[#C9A44C]"
                  : "w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Ir a imagen ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
