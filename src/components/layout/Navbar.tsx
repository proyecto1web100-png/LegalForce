"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#090909]/95 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-5"
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("#inicio")}
            className="flex items-center gap-2.5 cursor-pointer"
            aria-label="Legal Force HN inicio"
          >
            <div className="w-8 h-8 rounded-sm bg-[#C9A44C] flex items-center justify-center">
              <Scale className="w-4.5 h-4.5 text-[#090909]" strokeWidth={2} />
            </div>
            <span
              className="font-heading font-700 text-lg tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="text-white">Legal</span>
              <span className="text-[#C9A44C]">Force</span>
              <span className="text-white/50 text-sm ml-1">HN</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav("#contacto")}
              className="hidden sm:inline-flex items-center gap-2 bg-[#C9A44C] hover:bg-[#D4B76A] text-[#090909] text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors duration-200 cursor-pointer"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Agendar Consulta
            </button>
            <button
              className="lg:hidden p-2 text-white/70 hover:text-white cursor-pointer"
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menú"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#090909]/98 backdrop-blur-lg flex flex-col pt-24 px-6 pb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-xl font-medium text-white/70 hover:text-white py-3 border-b border-white/5 cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <div className="mt-8">
              <button
                onClick={() => handleNav("#contacto")}
                className="w-full bg-[#C9A44C] hover:bg-[#D4B76A] text-[#090909] font-semibold py-4 rounded-sm transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Agendar Consulta
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
