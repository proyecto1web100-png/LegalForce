"use client";

import { useState } from "react";
import { Phone, X, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "50498206681";
const PHONE_NUMBER = "+50498206681";

export function EmergencyButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">
      {/* Expanded panel */}
      {open && (
        <div
          className="mb-2 w-72 border border-red-500/20 bg-[#0d0d0d] p-5"
          style={{ animation: "emergency-in 0.22s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <span
                className="block text-[#F5F0E8]/90 font-semibold text-sm mb-0.5"
                style={{ fontFamily: "var(--font-body)" }}
              >
                ¿Emergencia legal?
              </span>
              <span
                className="text-[#F5F0E8]/35 text-[11px] leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                ¿Fuiste detenido? ¿Necesitas un abogado ahora mismo? Te atendemos 24/7.
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-[#F5F0E8]/20 hover:text-[#F5F0E8]/50 transition-colors duration-200 cursor-pointer ml-3 shrink-0"
              aria-label="Cerrar"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="h-px bg-white/[0.06] mb-4" />

          <div className="flex flex-col gap-2">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-2.5 bg-red-500/90 hover:bg-red-500 text-white font-semibold px-4 py-2.5 text-xs tracking-wide transition-colors duration-200 cursor-pointer"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Phone className="w-3.5 h-3.5" />
              Llamar ahora · +504 9820-6681
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("EMERGENCIA: Necesito un abogado de inmediato. ¿Pueden atenderme ahora?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/25 text-[#25D366] font-semibold px-4 py-2.5 text-xs tracking-wide transition-all duration-200 cursor-pointer"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp urgente
            </a>
          </div>
        </div>
      )}

      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer border ${
          open
            ? "bg-red-500/15 border-red-500/40 text-red-400"
            : "bg-[#0d0d0d] border-red-500/20 text-red-400/70 hover:border-red-500/40 hover:text-red-400"
        }`}
        style={{ fontFamily: "var(--font-body)" }}
        aria-expanded={open}
        aria-label="Emergencia legal"
      >
        {/* Pulse dot */}
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" style={{ animation: "wa-pulse 2s ease-out infinite" }} />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
        </span>
        Emergencia 24/7
      </button>
    </div>
  );
}
