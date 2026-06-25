"use client";

import { useState, useEffect } from "react";
import { Menu, X, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Equipo", href: "#equipo" },
  { label: "Servicios", href: "#servicios" },
  { label: "Herramientas", href: "#herramientas" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

function useAvailability() {
  const [online, setOnline] = useState(false);

  useEffect(() => {
    const check = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const hn = new Date(utc + -6 * 60 * 60000);
      const day = hn.getDay();
      const hour = hn.getHours();
      setOnline(day >= 1 && day <= 5 && hour >= 8 && hour < 18);
    };
    check();
    const id = setInterval(check, 60000);
    return () => clearInterval(id);
  }, []);

  return online;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const online = useAvailability();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#090909]/96 border-b border-white/[0.06] py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("#inicio")}
            className="flex items-center gap-2.5 cursor-pointer"
            aria-label="Legal Force & Asociados inicio"
          >
            <div className="w-8 h-8 bg-[#C9A44C] flex items-center justify-center">
              <Scale className="w-4 h-4 text-[#050505]" strokeWidth={2} />
            </div>
            <span
              className="text-lg tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="text-[#F5F0E8] font-bold">Legal</span>
              <span className="text-[#C9A44C] font-bold">Force</span>
              <span className="text-[#F5F0E8]/40 text-sm font-normal ml-1">&amp; Asociados</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm text-[#F5F0E8]/50 hover:text-[#F5F0E8] transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Availability + CTA */}
          <div className="flex items-center gap-4">
            {/* Availability indicator — desktop only */}
            <div className="hidden sm:flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: online ? "#4ade80" : "#F59E0B",
                  animation: online ? "dot-pulse 2s ease-in-out infinite" : "none",
                }}
              />
              <span
                className="text-[10px] tracking-wide"
                style={{
                  fontFamily: "var(--font-body)",
                  color: online ? "rgba(74,222,128,0.7)" : "rgba(245,158,11,0.7)",
                }}
              >
                {online ? "Disponibles ahora" : "Respuesta en &lt;2h"}
              </span>
            </div>

            <button
              onClick={() => handleNav("#contacto")}
              className="hidden sm:inline-flex items-center gap-2 bg-[#C9A44C] hover:bg-[#D4B76A] text-[#050505] text-xs font-semibold px-5 py-2.5 tracking-wide transition-colors duration-200 cursor-pointer"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Contáctanos
            </button>

            <button
              className="lg:hidden p-2 text-[#F5F0E8]/60 hover:text-[#F5F0E8] cursor-pointer"
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menú"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-[#050505]/98 flex flex-col pt-24 px-6 pb-8"
          style={{ animation: "menu-in 0.22s ease both" }}
        >
          {/* Mobile availability */}
          <div className="flex items-center gap-2 mb-6">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: online ? "#4ade80" : "#F59E0B" }}
            />
            <span
              className="text-[10px] tracking-wide"
              style={{
                fontFamily: "var(--font-body)",
                color: online ? "rgba(74,222,128,0.6)" : "rgba(245,158,11,0.6)",
              }}
            >
              {online ? "Disponibles ahora" : "Respuesta en menos de 2h"}
            </span>
          </div>

          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left text-2xl font-medium text-[#F5F0E8]/65 hover:text-[#F5F0E8] py-3 border-b border-white/[0.05] cursor-pointer transition-colors duration-150"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="mt-8">
            <button
              onClick={() => handleNav("#contacto")}
              className="w-full bg-[#C9A44C] hover:bg-[#D4B76A] text-[#050505] font-semibold py-4 text-sm tracking-wide transition-colors duration-200 cursor-pointer"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Contáctanos
            </button>
          </div>
        </div>
      )}
    </>
  );
}
