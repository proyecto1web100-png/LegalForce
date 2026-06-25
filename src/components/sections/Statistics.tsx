"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Casos Resueltos", description: "con éxito en Honduras" },
  { value: 98,  suffix: "%", label: "Satisfacción",    description: "de nuestros clientes" },
  { value: 24,  suffix: "/7", label: "Disponibilidad", description: "atención de emergencias" },
  { value: 13,  suffix: "",   label: "Áreas Legales",  description: "de especialización" },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const steps = 50;
    const inc = target / steps;
    let cur = 0;
    const timer = setInterval(() => {
      cur += inc;
      if (cur >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(cur));
    }, 1600 / steps);
    return () => clearInterval(timer);
  }, [active, target]);
  return <>{count}{suffix}</>;
}

export function Statistics() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.unobserve(el); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#C9A44C]/[0.06] border-y border-[#C9A44C]/15">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#C9A44C]/10">
          {stats.map((s) => (
            <div key={s.label} className="py-8 px-6 text-center flex flex-col items-center gap-1">
              <div
                className="text-3xl lg:text-4xl font-extrabold text-[#C9A44C] tabular-nums leading-none"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <CountUp target={s.value} suffix={s.suffix} active={active} />
              </div>
              <div className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                {s.label}
              </div>
              <div className="text-white/35 text-xs" style={{ fontFamily: "var(--font-body)" }}>
                {s.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
