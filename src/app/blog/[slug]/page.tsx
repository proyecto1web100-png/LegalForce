import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/data/blog";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Legal Force HN`,
    description: post.excerpt,
  };
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
          className="text-[#F5F0E8] font-medium mt-12 mb-5 leading-tight"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={key++}
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
          className="text-[#C9A44C] italic font-medium mt-8 mb-3 leading-snug"
        >
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("#### ")) {
      elements.push(
        <h4
          key={key++}
          style={{ fontFamily: "var(--font-body)" }}
          className="text-[#F5F0E8]/80 font-semibold text-sm uppercase tracking-widest mt-6 mb-2"
        >
          {line.slice(5)}
        </h4>
      );
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      i--;
      elements.push(
        <ul key={key++} className="flex flex-col gap-2 my-4 pl-4">
          {items.map((item, idx) => (
            <li
              key={idx}
              style={{ fontFamily: "var(--font-body)" }}
              className="text-[#F5F0E8]/60 text-sm leading-relaxed flex gap-2"
            >
              <span className="text-[#C9A44C] shrink-0 mt-0.5">·</span>
              <span dangerouslySetInnerHTML={{ __html: parseBold(item) }} />
            </li>
          ))}
        </ul>
      );
    } else if (/^\d+\./.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\./.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s*/, ""));
        i++;
      }
      i--;
      elements.push(
        <ol key={key++} className="flex flex-col gap-2 my-4 pl-4">
          {items.map((item, idx) => (
            <li
              key={idx}
              style={{ fontFamily: "var(--font-body)" }}
              className="text-[#F5F0E8]/60 text-sm leading-relaxed flex gap-3"
            >
              <span className="text-[#C9A44C] font-semibold shrink-0 w-4">{idx + 1}.</span>
              <span dangerouslySetInnerHTML={{ __html: parseBold(item) }} />
            </li>
          ))}
        </ol>
      );
    } else if (line.startsWith("---")) {
      elements.push(
        <div key={key++} className="my-10 h-px bg-gradient-to-r from-transparent via-[#C9A44C]/25 to-transparent" />
      );
    } else if (line.trim() === "") {
      // skip blank lines between block elements
    } else {
      elements.push(
        <p
          key={key++}
          style={{ fontFamily: "var(--font-body)" }}
          className="text-[#F5F0E8]/60 text-sm leading-relaxed my-3"
          dangerouslySetInnerHTML={{ __html: parseBold(line) }}
        />
      );
    }
  }

  return elements;
}

function parseBold(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#F5F0E8]/85 font-semibold">$1</strong>');
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A44C]/20 to-transparent" />

      <div className="max-w-3xl mx-auto px-6 pt-24 pb-24">
        {/* Back link */}
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-[#F5F0E8]/35 hover:text-[#C9A44C] text-xs uppercase tracking-widest transition-colors duration-200 mb-12"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Volver al Blog
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${post.tagColor}`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            {post.tag}
          </span>
          <span
            className="text-[#F5F0E8]/30 text-xs"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {post.date} · {post.readTime} de lectura
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-[#F5F0E8] font-medium leading-tight mb-6"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
          }}
        >
          {post.title}
        </h1>

        {/* Excerpt */}
        <p
          className="text-[#F5F0E8]/45 leading-relaxed mb-10 border-l-2 border-[#C9A44C]/40 pl-5"
          style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem" }}
        >
          {post.excerpt}
        </p>

        {/* Gold rule */}
        <div className="h-px w-20 bg-gradient-to-r from-[#C9A44C] to-[#D4B76A] mb-10" />

        {/* Content */}
        <div>{renderContent(post.content)}</div>

        {/* CTA */}
        <div className="mt-14 border border-[#C9A44C]/20 bg-[#C9A44C]/[0.04] p-8 text-center">
          <p
            className="text-[#F5F0E8]/55 text-sm mb-5 leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            ¿Necesitas asesoría en {post.tag}? Nuestros especialistas están disponibles para atenderte.
          </p>
          <a
            href={`https://wa.me/50498206681?text=${encodeURIComponent(
              `Hola, leí el artículo "${post.title}" y quisiera recibir asesoría en ${post.tag}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#C9A44C] hover:bg-[#D4B76A] text-[#050505] font-semibold px-7 py-3.5 text-sm tracking-wide transition-colors duration-200 cursor-pointer"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.855L0 24l6.336-1.51A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.809 9.809 0 01-5.012-1.378l-.36-.214-3.76.897.942-3.663-.235-.375A9.784 9.784 0 012.182 12C2.182 6.568 6.568 2.182 12 2.182S21.818 6.568 21.818 12 17.432 21.818 12 21.818z" />
            </svg>
            Consultar con un Especialista
          </a>
        </div>
      </div>
    </div>
  );
}
