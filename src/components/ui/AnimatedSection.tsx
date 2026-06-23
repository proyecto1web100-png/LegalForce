"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const cls =
      direction === "left" ? "reveal-left"
      : direction === "right" ? "reveal-right"
      : direction === "none" ? ""
      : "reveal";

    if (cls) el.classList.add(cls);
    if (delay) el.style.transitionDelay = `${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "-48px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
