"use client";

import { Scale, Phone, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "50498206681";

const services = [
  "Derecho Penal",
  "Derecho Laboral",
  "Derecho Civil",
  "Derecho Administrativo",
  "Derecho Migratorio",
  "Derecho Tributario",
  "Derecho Fiscal",
  "Derecho Notarial",
];

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#090909] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-sm bg-[#C9A44C] flex items-center justify-center">
                <Scale className="w-4.5 h-4.5 text-[#090909]" strokeWidth={2} />
              </div>
              <span
                className="font-heading font-700 text-lg tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <span className="text-white">Legal</span>
                <span className="text-[#C9A44C]">Force</span>
                <span className="text-white/40 text-sm ml-1">&amp; Asociados</span>
              </span>
            </div>
            <p
              className="text-white/40 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Bufete jurídico especializado en Honduras. Defendemos tu futuro
              con estrategia y precisión.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                {
                  label: "Facebook",
                  href: "https://facebook.com/bufetelegalforce",
                  svg: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: "https://instagram.com/bufetejuridicolegalforce",
                  svg: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "#",
                  svg: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
              ].map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-sm bg-white/5 hover:bg-[#C9A44C]/20 border border-white/[0.08] hover:border-[#C9A44C]/30 flex items-center justify-center text-white/50 hover:text-[#C9A44C] transition-all duration-200 cursor-pointer"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white font-semibold text-sm mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Áreas de Práctica
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNav("#servicios")}
                    className="text-white/40 hover:text-[#C9A44C] text-sm transition-colors duration-200 cursor-pointer text-left"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-white font-semibold text-sm mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Navegación
            </h4>
            <ul className="flex flex-col gap-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className="text-white/40 hover:text-[#C9A44C] text-sm transition-colors duration-200 cursor-pointer"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-semibold text-sm mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contacto
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                { icon: MapPin, text: "Plaza Galería 504, San Pedro Sula" },
                { icon: Phone, text: "+504 9820-6681" },
                { icon: Phone, text: "+504 9542-5353" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-[#C9A44C] mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span
                    className="text-white/40 text-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 hover:border-[#25D366]/40 text-[#25D366] text-xs font-medium px-4 py-2.5 rounded-sm transition-all duration-200 cursor-pointer"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.855L0 24l6.336-1.51A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.809 9.809 0 01-5.012-1.378l-.36-.214-3.76.897.942-3.663-.235-.375A9.784 9.784 0 012.182 12C2.182 6.568 6.568 2.182 12 2.182S21.818 6.568 21.818 12 17.432 21.818 12 21.818z" />
              </svg>
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        {/* Gold divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A44C]/25 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/25 text-xs" style={{ fontFamily: "var(--font-body)" }}>
          <span>© {new Date().getFullYear()} Legal Force &amp; Asociados. Todos los derechos reservados.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#C9A44C] transition-colors duration-200 cursor-pointer">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-[#C9A44C] transition-colors duration-200 cursor-pointer">
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
