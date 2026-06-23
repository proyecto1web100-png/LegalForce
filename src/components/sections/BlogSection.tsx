"use client";

import { ArrowRight, Clock, Tag } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const posts = [
  {
    tag: "Derecho Penal",
    tagColor: "text-red-400 bg-red-400/10",
    date: "15 Junio 2025",
    readTime: "5 min",
    title: "¿Qué hacer si eres detenido por la policía en Honduras?",
    excerpt:
      "Conoce tus derechos fundamentales al momento de una detención. Aprende qué puedes y no puedes decir, y cuándo exigir la presencia de un abogado.",
    slug: "detenido-policia-honduras",
  },
  {
    tag: "Derecho Laboral",
    tagColor: "text-blue-400 bg-blue-400/10",
    date: "8 Junio 2025",
    readTime: "7 min",
    title: "Guía práctica para reclamar tus derechos laborales en Honduras",
    excerpt:
      "Todo lo que necesitas saber sobre prestaciones laborales, plazos para reclamar y cómo presentar una demanda ante los Juzgados de Trabajo.",
    slug: "derechos-laborales-honduras",
  },
  {
    tag: "Derecho Migratorio",
    tagColor: "text-emerald-400 bg-emerald-400/10",
    date: "1 Junio 2025",
    readTime: "6 min",
    title: "Cómo regularizar tu situación migratoria en Honduras en 2025",
    excerpt:
      "Requisitos, pasos y tiempos para obtener residencia temporal o permanente en Honduras. Guía actualizada con los últimos cambios legislativos.",
    slug: "regularizar-migracion-honduras-2025",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-[#090909]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <span className="section-label block mb-4">Blog Jurídico</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-4xl sm:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Conocimiento Legal{" "}
              <span className="text-[#C9A44C]">para Ti</span>
            </h2>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#C9A44C] text-sm font-medium hover:gap-3 transition-all duration-200 cursor-pointer"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Ver todos los artículos
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <span className="gold-rule-lg mt-6 block" />
        </AnimatedSection>

        {/* Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.1}>
              <article className="group card-glass rounded-sm overflow-hidden hover:border-[#C9A44C]/25 transition-all duration-300 cursor-pointer h-full flex flex-col">
                {/* Placeholder image */}
                <div className="w-full h-44 bg-gradient-to-br from-[#161616] to-[#0f0f0f] flex items-center justify-center border-b border-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "linear-gradient(#C9A44C 1px, transparent 1px), linear-gradient(90deg, #C9A44C 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <span
                    className="text-[#C9A44C]/20 text-5xl font-black select-none"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    LF
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1 gap-4">
                  {/* Meta */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${post.tagColor}`}
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {post.tag}
                    </span>
                    <div className="flex items-center gap-3 text-white/30 text-xs" style={{ fontFamily: "var(--font-body)" }}>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-white font-semibold text-base leading-snug group-hover:text-[#C9A44C] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    className="text-white/40 text-sm leading-relaxed flex-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Read more */}
                  <div className="flex items-center gap-1.5 text-[#C9A44C] text-xs font-medium mt-auto pt-4 border-t border-white/5">
                    <span style={{ fontFamily: "var(--font-body)" }}>Leer artículo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
