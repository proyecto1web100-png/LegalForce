"use client";

const WHATSAPP_NUMBER = "50498206681";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola, me gustaría obtener más información sobre los servicios de Legal Force HN."
);

const WA_SVG = (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.855L0 24l6.336-1.51A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.809 9.809 0 01-5.012-1.378l-.36-.214-3.76.897.942-3.663-.235-.375A9.784 9.784 0 012.182 12C2.182 6.568 6.568 2.182 12 2.182S21.818 6.568 21.818 12 17.432 21.818 12 21.818z" />
  </svg>
);

export function FloatingWhatsApp() {
  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      style={{ animation: "wa-enter 0.4s cubic-bezier(0.34,1.56,0.64,1) 1.5s both" }}
    >
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full bg-[#25D366]/35 pointer-events-none"
        style={{ animation: "wa-pulse 2.4s ease-out 2s infinite" }}
      />
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5e] flex items-center justify-center shadow-lg shadow-[#25D366]/25 cursor-pointer transition-transform duration-150 hover:scale-105 active:scale-95"
      >
        {WA_SVG}
      </a>
    </div>
  );
}
