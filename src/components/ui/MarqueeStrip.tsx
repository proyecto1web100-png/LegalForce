const items = [
  "Derecho Penal",
  "Derecho Laboral",
  "Derecho Civil",
  "Derecho Administrativo",
  "Derecho Migratorio",
  "Derecho Tributario",
  "Derecho Fiscal",
  "Derecho Notarial",
];

const SEP = (
  <span className="text-[#C9A44C]/35 mx-7 text-xs select-none" aria-hidden>
    ◆
  </span>
);

export function MarqueeStrip() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/[0.06] py-3.5 bg-[#0a0a0a]">
      <div className="marquee-track" aria-hidden>
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className="text-[#F5F0E8]/25 text-[10px] uppercase tracking-[0.25em] whitespace-nowrap"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {item}
            </span>
            {SEP}
          </span>
        ))}
      </div>
    </div>
  );
}
