"use client";

import { useState } from "react";
import { Calculator, Clock, FileText, BarChart2, Check } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const WHATSAPP_NUMBER = "50498206681";

// ─── Tool 1: Labor Calculator ────────────────────────────────────────────────

type TermType = "sin_justa_causa" | "renuncia" | "mutuo_acuerdo";

interface LaborResult {
  cesantia: number;
  preaviso: number;
  vacaciones: number;
  decimotercero: number;
  decimocuarto: number;
  total: number;
  years: number;
}

function calcularPrestaciones(salary: number, startDate: string, endDate: string, term: TermType): LaborResult | null {
  if (!salary || !startDate || !endDate) return null;
  const start = new Date(startDate);
  const end = new Date(endDate);
  if (end <= start) return null;

  const diffMs = end.getTime() - start.getTime();
  const years = diffMs / (1000 * 60 * 60 * 24 * 365.25);
  const months = diffMs / (1000 * 60 * 60 * 24 * 30.44);

  const cesantia = term === "sin_justa_causa" ? Math.min(Math.floor(years), 12) * salary : 0;

  let preavisoMonths = 0;
  if (term === "sin_justa_causa") {
    if (years < 1) preavisoMonths = 0;
    else if (years < 2) preavisoMonths = 1;
    else if (years < 5) preavisoMonths = 2;
    else preavisoMonths = 3;
  }
  const preaviso = preavisoMonths * salary;

  const vacacionesDays = years >= 10 ? 15 : years >= 5 ? 12 : 10;
  const vacaciones = (months % 12 / 12) * vacacionesDays * (salary / 30);

  const endMonth = end.getMonth();
  const monthsIntoYear = ((end.getFullYear() - start.getFullYear()) * 12 + endMonth) % 12 + 1;
  const decimotercero = (Math.min(monthsIntoYear, 12) / 12) * salary;

  const juneDate = new Date(end.getFullYear(), 5, 30);
  const monthsSinceJune = endMonth >= 6 ? endMonth - 5 : 12 - (5 - endMonth);
  const decimocuarto = (Math.min(monthsSinceJune, 12) / 12) * salary;

  const total = cesantia + preaviso + vacaciones + decimotercero + decimocuarto;

  return { cesantia, preaviso, vacaciones, decimotercero, decimocuarto, total, years };
}

function LaborCalculator() {
  const [salary, setSalary] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [term, setTerm] = useState<TermType>("sin_justa_causa");
  const [result, setResult] = useState<LaborResult | null>(null);

  const calc = () => {
    const r = calcularPrestaciones(parseFloat(salary), startDate, endDate, term);
    setResult(r);
  };

  const fmt = (n: number) =>
    `L. ${n.toLocaleString("es-HN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const waMsg = result
    ? `Hola, calculé mis prestaciones laborales: ${result.years.toFixed(1)} años de servicio, salario L. ${salary}. Total estimado: ${fmt(result.total)}. ¿Pueden ayudarme?`
    : "Hola, necesito calcular mis prestaciones laborales. ¿Pueden ayudarme?";

  return (
    <div style={{ animation: "tab-in 0.25s ease both" }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <label className="flex flex-col gap-1.5">
          <span className="text-[#F5F0E8]/35 text-[10px] uppercase tracking-widest" style={{ fontFamily: "var(--font-body)" }}>
            Salario mensual (Lempiras)
          </span>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="ej. 15000"
            className="bg-white/[0.04] border border-white/[0.08] focus:border-[#C9A44C]/50 text-[#F5F0E8] placeholder-[#F5F0E8]/20 px-4 py-3 text-sm outline-none transition-colors duration-200"
            style={{ fontFamily: "var(--font-body)" }}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[#F5F0E8]/35 text-[10px] uppercase tracking-widest" style={{ fontFamily: "var(--font-body)" }}>
            Tipo de terminación
          </span>
          <select
            value={term}
            onChange={(e) => setTerm(e.target.value as TermType)}
            className="bg-[#141414] border border-white/[0.08] focus:border-[#C9A44C]/50 text-[#F5F0E8] px-4 py-3 text-sm outline-none transition-colors duration-200 cursor-pointer"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <option value="sin_justa_causa">Despido sin justa causa</option>
            <option value="renuncia">Renuncia voluntaria</option>
            <option value="mutuo_acuerdo">Mutuo acuerdo</option>
          </select>
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[#F5F0E8]/35 text-[10px] uppercase tracking-widest" style={{ fontFamily: "var(--font-body)" }}>
            Fecha de ingreso
          </span>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="bg-white/[0.04] border border-white/[0.08] focus:border-[#C9A44C]/50 text-[#F5F0E8] px-4 py-3 text-sm outline-none transition-colors duration-200"
            style={{ fontFamily: "var(--font-body)", colorScheme: "dark" }}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[#F5F0E8]/35 text-[10px] uppercase tracking-widest" style={{ fontFamily: "var(--font-body)" }}>
            Fecha de salida
          </span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="bg-white/[0.04] border border-white/[0.08] focus:border-[#C9A44C]/50 text-[#F5F0E8] px-4 py-3 text-sm outline-none transition-colors duration-200"
            style={{ fontFamily: "var(--font-body)", colorScheme: "dark" }}
          />
        </label>
      </div>

      <button
        onClick={calc}
        className="inline-flex items-center gap-2 bg-[#C9A44C] hover:bg-[#D4B76A] text-[#050505] font-semibold px-6 py-3 text-sm tracking-wide transition-colors duration-200 cursor-pointer mb-6"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <Calculator className="w-4 h-4" />
        Calcular prestaciones
      </button>

      {result && (
        <div className="border border-[#C9A44C]/15 bg-[#C9A44C]/[0.03] p-5" style={{ animation: "tab-in 0.2s ease both" }}>
          <p className="text-[#F5F0E8]/35 text-[10px] uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-body)" }}>
            Resultado estimado · {result.years.toFixed(1)} años de servicio
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
            {[
              { label: "Cesantía", value: result.cesantia, show: term === "sin_justa_causa" },
              { label: "Preaviso", value: result.preaviso, show: term === "sin_justa_causa" },
              { label: "Vacaciones", value: result.vacaciones, show: true },
              { label: "13° mes", value: result.decimotercero, show: true },
              { label: "14° mes", value: result.decimocuarto, show: true },
            ]
              .filter((r) => r.show)
              .map(({ label, value }) => (
                <div key={label} className="bg-white/[0.03] border border-white/[0.06] p-3">
                  <span className="block text-[#F5F0E8]/35 text-[9px] uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-body)" }}>{label}</span>
                  <span className="text-[#F5F0E8]/80 text-sm font-semibold" style={{ fontFamily: "var(--font-body)" }}>{fmt(value)}</span>
                </div>
              ))}
          </div>
          <div className="flex items-center justify-between border-t border-[#C9A44C]/15 pt-4">
            <div>
              <span className="block text-[#F5F0E8]/35 text-[10px] uppercase tracking-widest mb-0.5" style={{ fontFamily: "var(--font-body)" }}>Total estimado</span>
              <span className="text-[#C9A44C] font-bold" style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem" }}>{fmt(result.total)}</span>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`}
              target="_blank" rel="noopener noreferrer"
              className="text-xs text-[#25D366] border border-[#25D366]/20 hover:border-[#25D366]/50 px-4 py-2 transition-colors duration-200 cursor-pointer"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Consultar resultado →
            </a>
          </div>
          <p className="text-[#F5F0E8]/20 text-[10px] mt-3" style={{ fontFamily: "var(--font-body)" }}>
            * Estimación orientativa. Los montos reales pueden variar según su caso específico.
          </p>
        </div>
      )}
    </div>
  );
}

// ─── Tool 2: Prescription Calculator ─────────────────────────────────────────

const prescriptionRules: Record<string, { label: string; years: number; note: string }> = {
  laboral: { label: "Derecho Laboral", years: 2, note: "Art. 419 Código de Trabajo" },
  civil_contractual: { label: "Civil (contractual)", years: 10, note: "Art. 2268 Código Civil" },
  civil_extracontractual: { label: "Civil (extracontractual)", years: 4, note: "Art. 2290 Código Civil" },
  administrativo: { label: "Administrativo", years: 3, note: "Ley de Procedimiento Admin." },
  tributario: { label: "Tributario / SAR", years: 5, note: "Código Tributario Art. 175" },
};

function PrescriptionCalc() {
  const [area, setArea] = useState("laboral");
  const [eventDate, setEventDate] = useState("");

  const rule = prescriptionRules[area];
  const deadline = eventDate ? new Date(new Date(eventDate).getTime() + rule.years * 365.25 * 24 * 3600 * 1000) : null;
  const daysLeft = deadline ? Math.floor((deadline.getTime() - Date.now()) / (24 * 3600 * 1000)) : null;

  const urgencyColor =
    daysLeft === null ? "" :
    daysLeft < 0 ? "text-red-400" :
    daysLeft < 90 ? "text-amber-400" : "text-emerald-400";

  const urgencyLabel =
    daysLeft === null ? "" :
    daysLeft < 0 ? "Plazo vencido" :
    daysLeft < 90 ? "Urgente — menos de 90 días" : "Dentro del plazo";

  const waMsg = deadline
    ? `Hola, calulé mi plazo de prescripción: ${rule.label}, evento el ${eventDate}, vence el ${deadline.toLocaleDateString("es-HN")}. ${daysLeft! < 90 ? "Es URGENTE. " : ""}¿Pueden ayudarme?`
    : `Hola, necesito consultar sobre prescripción en ${rule.label}.`;

  return (
    <div style={{ animation: "tab-in 0.25s ease both" }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <label className="flex flex-col gap-1.5">
          <span className="text-[#F5F0E8]/35 text-[10px] uppercase tracking-widest" style={{ fontFamily: "var(--font-body)" }}>Área legal</span>
          <select
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="bg-[#141414] border border-white/[0.08] focus:border-[#C9A44C]/50 text-[#F5F0E8] px-4 py-3 text-sm outline-none transition-colors duration-200 cursor-pointer"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {Object.entries(prescriptionRules).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[#F5F0E8]/35 text-[10px] uppercase tracking-widest" style={{ fontFamily: "var(--font-body)" }}>Fecha del evento</span>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="bg-white/[0.04] border border-white/[0.08] focus:border-[#C9A44C]/50 text-[#F5F0E8] px-4 py-3 text-sm outline-none transition-colors duration-200"
            style={{ fontFamily: "var(--font-body)", colorScheme: "dark" }}
          />
        </label>
      </div>

      <div className="border border-white/[0.06] bg-white/[0.02] p-5 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#C9A44C] text-[10px] uppercase tracking-widest" style={{ fontFamily: "var(--font-body)" }}>Plazo aplicable</span>
          <span className="text-[#F5F0E8]/25 text-[10px]" style={{ fontFamily: "var(--font-body)" }}>· {rule.note}</span>
        </div>
        <p className="text-[#F5F0E8]/70 text-sm" style={{ fontFamily: "var(--font-body)" }}>
          <strong className="text-[#F5F0E8]">{rule.years} {rule.years === 1 ? "año" : "años"}</strong> desde la fecha del evento
        </p>

        {deadline && (
          <div className="mt-4 pt-4 border-t border-white/[0.06]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <span className="block text-[#F5F0E8]/35 text-[10px] uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-body)" }}>Fecha límite</span>
                <span className="text-[#F5F0E8] font-semibold text-base" style={{ fontFamily: "var(--font-body)" }}>
                  {deadline.toLocaleDateString("es-HN", { year: "numeric", month: "long", day: "numeric" })}
                </span>
              </div>
              <div className="text-right">
                <span className={`block font-bold text-lg ${urgencyColor}`} style={{ fontFamily: "var(--font-heading)" }}>
                  {daysLeft! < 0 ? "Vencido" : `${daysLeft} días`}
                </span>
                <span className={`text-[11px] ${urgencyColor}`} style={{ fontFamily: "var(--font-body)" }}>{urgencyLabel}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {deadline && daysLeft !== null && daysLeft < 180 && (
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`}
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-semibold px-5 py-2.5 transition-all duration-200 cursor-pointer"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Tu plazo es próximo — Consultar ahora →
        </a>
      )}
    </div>
  );
}

// ─── Tool 3: Document Checklist ───────────────────────────────────────────────

const checklists: Record<string, { items: string[] }> = {
  penal: {
    items: [
      "Cédula de identidad o pasaporte",
      "Copia de la acusación o auto de formal acusación",
      "Constancia de detención o documento policial",
      "Historial de antecedentes penales (si aplica)",
      "Testigos potenciales y datos de contacto",
      "Documentos probatorios del caso (recibos, contratos, fotos)",
    ],
  },
  laboral: {
    items: [
      "Contrato de trabajo original",
      "Últimos 6 recibos de pago o comprobantes de salario",
      "Carta de despido o notificación de terminación",
      "Constancias de cotización al IHSS",
      "Correos o mensajes relevantes del empleador",
      "Testigos del ambiente laboral (datos de contacto)",
      "Comprobantes de liquidación recibida (si aplica)",
    ],
  },
  civil: {
    items: [
      "Contratos o acuerdos relevantes firmados",
      "Escrituras de propiedad o documentos de título",
      "Partidas de nacimiento o matrimonio (para herencias)",
      "Testamento o declaratoria de herederos (si existe)",
      "Comprobantes de pago o deudas",
      "Documentación de daños (fotos, facturas, peritajes)",
    ],
  },
  migratorio: {
    items: [
      "Pasaporte vigente (mínimo 6 meses de validez)",
      "Certificado de antecedentes penales apostillado",
      "Certificado médico emitido en Honduras",
      "4 fotografías recientes tamaño pasaporte",
      "Comprobantes de ingresos o empleo",
      "Partida de nacimiento apostillada (si aplica)",
      "Acta de matrimonio apostillada (para familiar de ciudadano)",
    ],
  },
  tributario: {
    items: [
      "RTN (Registro Tributario Nacional)",
      "Declaraciones de renta de los últimos 3 años",
      "Estados financieros auditados",
      "Libros contables digitales o físicos",
      "Notificaciones del SAR o resoluciones previas",
      "Comprobantes de pagos realizados al fisco",
    ],
  },
  notarial: {
    items: [
      "Cédula de identidad de todas las partes",
      "Documentos del bien o transacción (escrituras, facturas)",
      "Poder especial previo (si es para representar a otro)",
      "RTN de personas jurídicas involucradas",
      "Escritura anterior (para modificaciones o cancelaciones)",
    ],
  },
};

function DocumentChecklist() {
  const [area, setArea] = useState("laboral");
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const list = checklists[area].items;
  const toggle = (i: number) => setChecked((prev) => {
    const next = new Set(prev);
    next.has(i) ? next.delete(i) : next.add(i);
    return next;
  });

  const waMsg = `Hola, necesito asesoría en ${area === "penal" ? "Derecho Penal" : area === "laboral" ? "Derecho Laboral" : area === "civil" ? "Derecho Civil" : area === "migratorio" ? "Derecho Migratorio" : area === "tributario" ? "Derecho Tributario" : "Derecho Notarial"}. Ya tengo algunos documentos listos.`;

  return (
    <div style={{ animation: "tab-in 0.25s ease both" }}>
      <label className="flex flex-col gap-1.5 mb-6">
        <span className="text-[#F5F0E8]/35 text-[10px] uppercase tracking-widest" style={{ fontFamily: "var(--font-body)" }}>Tipo de caso</span>
        <select
          value={area}
          onChange={(e) => { setArea(e.target.value); setChecked(new Set()); }}
          className="bg-[#141414] border border-white/[0.08] focus:border-[#C9A44C]/50 text-[#F5F0E8] px-4 py-3 text-sm outline-none transition-colors duration-200 cursor-pointer max-w-xs"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <option value="penal">Derecho Penal</option>
          <option value="laboral">Derecho Laboral</option>
          <option value="civil">Derecho Civil</option>
          <option value="migratorio">Derecho Migratorio</option>
          <option value="tributario">Derecho Tributario / SAR</option>
          <option value="notarial">Derecho Notarial</option>
        </select>
      </label>

      <div className="flex flex-col gap-2 mb-6">
        {list.map((item, i) => (
          <button
            key={i}
            onClick={() => toggle(i)}
            className={`flex items-start gap-3 text-left p-3 border transition-all duration-200 cursor-pointer ${
              checked.has(i)
                ? "border-[#C9A44C]/30 bg-[#C9A44C]/[0.05]"
                : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12]"
            }`}
          >
            <div className={`w-4 h-4 shrink-0 mt-0.5 flex items-center justify-center border transition-colors duration-200 ${
              checked.has(i) ? "border-[#C9A44C] bg-[#C9A44C]" : "border-white/20"
            }`}>
              {checked.has(i) && <Check className="w-2.5 h-2.5 text-[#050505]" strokeWidth={3} />}
            </div>
            <span
              className={`text-xs leading-relaxed transition-colors duration-200 ${
                checked.has(i) ? "text-[#F5F0E8]/50 line-through" : "text-[#F5F0E8]/65"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {item}
            </span>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-[#F5F0E8]/35 text-xs" style={{ fontFamily: "var(--font-body)" }}>
          {checked.size} / {list.length} documentos listos
        </span>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`}
          target="_blank" rel="noopener noreferrer"
          className="text-xs text-[#C9A44C] border border-[#C9A44C]/25 hover:border-[#C9A44C]/60 px-4 py-2 transition-colors duration-200 cursor-pointer"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Agendar consulta →
        </a>
      </div>
    </div>
  );
}

// ─── Tool 4: Case Complexity ──────────────────────────────────────────────────

const questions = [
  "¿Hay más de una parte involucrada en el conflicto?",
  "¿El caso involucra montos superiores a L. 100,000?",
  "¿Han pasado más de 6 meses desde que ocurrió el hecho?",
  "¿Existen documentos o contratos en disputa?",
  "¿El caso tiene implicaciones penales o administrativas?",
];

function ComplexityEstimator() {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [shown, setShown] = useState(false);

  const score = Object.values(answers).filter(Boolean).length;
  const allAnswered = Object.keys(answers).length === questions.length;

  const complexity =
    score <= 1 ? { label: "Baja", color: "text-emerald-400", months: "1-2 meses", fill: "20%" } :
    score <= 2 ? { label: "Moderada", color: "text-yellow-400", months: "2-4 meses", fill: "40%" } :
    score <= 3 ? { label: "Media-alta", color: "text-amber-400", months: "4-8 meses", fill: "65%" } :
    score <= 4 ? { label: "Alta", color: "text-orange-400", months: "8-18 meses", fill: "82%" } :
    { label: "Muy alta", color: "text-red-400", months: "+18 meses", fill: "100%" };

  const waMsg = shown
    ? `Hola, completé el evaluador de complejidad: ${score}/5 respuestas afirmativas. Complejidad ${complexity.label}, estimado ${complexity.months}. ¿Pueden analizar mi caso?`
    : "Hola, necesito evaluar la complejidad de mi caso legal.";

  return (
    <div style={{ animation: "tab-in 0.25s ease both" }}>
      <div className="flex flex-col gap-3 mb-6">
        {questions.map((q, i) => (
          <div key={i} className="border border-white/[0.06] bg-white/[0.02] p-4">
            <p className="text-[#F5F0E8]/70 text-xs leading-relaxed mb-3" style={{ fontFamily: "var(--font-body)" }}>
              {i + 1}. {q}
            </p>
            <div className="flex gap-2">
              {[true, false].map((val) => (
                <button
                  key={String(val)}
                  onClick={() => setAnswers((prev) => ({ ...prev, [i]: val }))}
                  className={`px-4 py-1.5 text-[11px] font-semibold border transition-all duration-200 cursor-pointer ${
                    answers[i] === val
                      ? val
                        ? "border-[#C9A44C]/50 bg-[#C9A44C]/10 text-[#C9A44C]"
                        : "border-white/20 bg-white/[0.06] text-[#F5F0E8]/70"
                      : "border-white/[0.08] text-[#F5F0E8]/30 hover:border-white/20"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {val ? "Sí" : "No"}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {allAnswered && (
        <button
          onClick={() => setShown(true)}
          className="inline-flex items-center gap-2 bg-[#C9A44C] hover:bg-[#D4B76A] text-[#050505] font-semibold px-6 py-3 text-sm tracking-wide transition-colors duration-200 cursor-pointer mb-6"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <BarChart2 className="w-4 h-4" />
          Ver resultado
        </button>
      )}

      {shown && allAnswered && (
        <div className="border border-white/[0.06] bg-white/[0.02] p-5" style={{ animation: "tab-in 0.2s ease both" }}>
          <p className="text-[#F5F0E8]/35 text-[10px] uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-body)" }}>Resultado</p>
          <div className="flex items-end justify-between mb-3">
            <span className={`font-bold ${complexity.color}`} style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem" }}>
              {complexity.label}
            </span>
            <span className="text-[#F5F0E8]/40 text-xs" style={{ fontFamily: "var(--font-body)" }}>
              Estimado: {complexity.months}
            </span>
          </div>
          {/* Progress bar */}
          <div className="h-1.5 bg-white/[0.06] rounded-full mb-5">
            <div
              className={`h-full rounded-full transition-all duration-700 ${
                score <= 1 ? "bg-emerald-400" : score <= 2 ? "bg-yellow-400" : score <= 3 ? "bg-amber-400" : score <= 4 ? "bg-orange-400" : "bg-red-400"
              }`}
              style={{ width: complexity.fill }}
            />
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C9A44C]/10 hover:bg-[#C9A44C]/20 border border-[#C9A44C]/25 text-[#C9A44C] text-xs font-semibold px-5 py-2.5 transition-all duration-200 cursor-pointer"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Consultar con un especialista →
          </a>
        </div>
      )}
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

const tabs = [
  { id: "labor", label: "Prestaciones", icon: Calculator, component: LaborCalculator },
  { id: "prescription", label: "Prescripción", icon: Clock, component: PrescriptionCalc },
  { id: "docs", label: "Documentos", icon: FileText, component: DocumentChecklist },
  { id: "complexity", label: "Complejidad", icon: BarChart2, component: ComplexityEstimator },
];

export function LegalToolsSection() {
  const [activeTab, setActiveTab] = useState("labor");
  const ActiveComponent = tabs.find((t) => t.id === activeTab)!.component;

  return (
    <section id="herramientas" className="py-20 bg-[#0a0a0a] border-y border-white/[0.05]">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="mb-10">
          <span className="section-label block mb-5">Centro de Recursos</span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-[#F5F0E8] font-medium leading-tight"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Herramientas{" "}
              <span className="text-[#C9A44C] italic">para tu Caso</span>
            </h2>
            <p className="text-[#F5F0E8]/35 text-xs max-w-xs leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              Calcula, evalúa y prepara tu caso antes de la consulta.
            </p>
          </div>
          <span className="gold-rule-lg mt-5 block" />
        </AnimatedSection>

        {/* Tabs */}
        <div className="flex gap-0 border-b border-white/[0.06] mb-8 overflow-x-auto">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-4 py-3 text-xs font-semibold whitespace-nowrap border-b-2 transition-all duration-200 cursor-pointer -mb-px ${
                activeTab === id
                  ? "border-[#C9A44C] text-[#C9A44C]"
                  : "border-transparent text-[#F5F0E8]/35 hover:text-[#F5F0E8]/60"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              {label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div key={activeTab}>
          <ActiveComponent />
        </div>
      </div>
    </section>
  );
}
