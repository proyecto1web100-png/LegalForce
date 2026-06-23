"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const stats = [
  { value: 500, suffix: "+", label: "Casos Resueltos", description: "con éxito en Honduras" },
  { value: 98, suffix: "%", label: "Satisfacción", description: "de nuestros clientes" },
  { value: 24, suffix: "/7", label: "Disponibilidad", description: "atención de emergencias" },
  { value: 8, suffix: "", label: "Áreas Legales", description: "de especialización" },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[#090909]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-16 text-center">
          <span className="section-label block mb-4">Resultados</span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Números que{" "}
            <span className="text-[#C9A44C]">Demuestran</span>
          </h2>
          <span className="gold-rule-lg mt-6 mx-auto block" />
        </AnimatedSection>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-sm overflow-hidden">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1}>
              <div className="bg-[#090909] p-8 lg:p-10 text-center flex flex-col items-center gap-2">
                <div
                  className="text-5xl lg:text-6xl font-extrabold text-[#C9A44C] tabular-nums leading-none"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <CountUp target={s.value} suffix={s.suffix} active={isInView} />
                </div>
                <div
                  className="text-white font-semibold text-base mt-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {s.label}
                </div>
                <div
                  className="text-white/35 text-xs"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {s.description}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
