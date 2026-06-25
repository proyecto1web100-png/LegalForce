"use client";

import { ArrowRight, Clock } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const posts = [
  {
    tag: "Derecho Penal",
    tagColor: "text-red-400 bg-red-400/10",
    date: "15 Jun 2025",
    readTime: "5 min",
    title: "¿Qué hacer si eres detenido por la policía en Honduras?",
    excerpt: "Conoce tus derechos fundamentales al momento de una detención y cuándo exigir la presencia de un abogado.",
    slug: "detenido-policia-honduras",
  },
  {
    tag: "Derecho Laboral",
    tagColor: "text-blue-400 bg-blue-400/10",
    date: "8 Jun 2025",
    readTime: "7 min",
    title: "Guía práctica para reclamar tus derechos laborales en Honduras",
    excerpt: "Prestaciones laborales, plazos para reclamar y cómo presentar una demanda ante los Juzgados de Trabajo.",
    slug: "derechos-laborales-honduras",
  },
  {
    tag: "Derecho Migratorio",
    tagColor: "text-emerald-400 bg-emerald-400/10",
    date: "1 Jun 2025",
    readTime: "6 min",
    title: "Cómo regularizar tu situación migratoria en Honduras en 2025",
    excerpt: "Requisitos y pasos para obtener residencia temporal o permanente. Guía actualizada con los últimos cambios.",
    slug: "regularizar-migracion-honduras-2025",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-8 bg-[#090909]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="section-label block mb-3">Blog Jurídico</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                Conocimiento Legal <span className="text-[#C9A44C]">para Ti</span>
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-[#C9A44C] text-sm font-medium hover:gap-2.5 transition-all duration-200 cursor-pointer shrink-0"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Ver todos
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <span className="gold-rule-lg mt-5 block" />
        </AnimatedSection>

        {/* Posts — horizontal compact list */}
        <div className="flex flex-col gap-3">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.08}>
              <a href={`/blog/${post.slug}`} className="block">
              <article className="group card-glass rounded-sm px-6 py-5 hover:border-[#C9A44C]/25 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Tag + date */}
                <div className="flex items-center gap-3 sm:w-56 shrink-0">
                  <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${post.tagColor}`} style={{ fontFamily: "var(--font-body)" }}>
                    {post.tag}
                  </span>
                  <span className="text-white/30 text-xs hidden sm:block" style={{ fontFamily: "var(--font-body)" }}>{post.date}</span>
                </div>

                {/* Title + excerpt */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-[#C9A44C] transition-colors duration-200 mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                    {post.title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed line-clamp-1" style={{ fontFamily: "var(--font-body)" }}>
                    {post.excerpt}
                  </p>
                </div>

                {/* Read time + arrow */}
                <div className="flex items-center gap-3 shrink-0">
                  <span className="flex items-center gap-1 text-white/25 text-xs" style={{ fontFamily: "var(--font-body)" }}>
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#C9A44C]/50 group-hover:text-[#C9A44C] group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </article>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
