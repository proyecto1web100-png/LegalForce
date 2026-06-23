"use client";

import { useEffect, useRef } from "react";

export function ConfidentialitySection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>(".blur-reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = (entry.target as HTMLElement).dataset.delay ?? "0";
            setTimeout(() => entry.target.classList.add("visible"), Number(delay));
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 700px 400px at 50% 50%, rgba(201,164,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Label */}
        <span
          className="blur-reveal section-label block mb-8"
          data-delay="0"
        >
          Confidencialidad
        </span>

        {/* Main phrase */}
        <p
          className="blur-reveal text-[#F5F0E8] font-medium leading-[1.1] mb-6"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.2rem, 5.5vw, 4.2rem)",
          }}
          data-delay="120"
        >
          Lo que nos dices,{" "}
          <span className="text-[#C9A44C] italic">se queda</span>
          <br />
          entre nosotros.
        </p>

        {/* Divider */}
        <div
          className="blur-reveal h-px w-16 bg-gradient-to-r from-[#C9A44C] to-[#D4B76A] mx-auto mb-6"
          data-delay="220"
        />

        {/* Subtext */}
        <p
          className="blur-reveal text-[#F5F0E8]/40 text-sm max-w-md mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
          data-delay="320"
        >
          El secreto profesional es un principio irrenunciable en Legal Force HN.
          Toda comunicación con nuestros abogados está protegida por ley y
          por nuestra ética profesional.
        </p>
      </div>
    </section>
  );
}
