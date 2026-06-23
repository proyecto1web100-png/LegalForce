import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { Statistics } from "@/components/sections/Statistics";
import { ReadingProgressBar } from "@/components/ui/ReadingProgressBar";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";

const PracticeAreas = dynamic(() =>
  import("@/components/sections/PracticeAreas").then((m) => ({ default: m.PracticeAreas }))
);
const CaseEvaluator = dynamic(() =>
  import("@/components/sections/CaseEvaluator").then((m) => ({ default: m.CaseEvaluator }))
);
const StrategySection = dynamic(() =>
  import("@/components/sections/StrategySection").then((m) => ({ default: m.StrategySection }))
);
const Testimonials = dynamic(() =>
  import("@/components/sections/Testimonials").then((m) => ({ default: m.Testimonials }))
);
const BlogSection = dynamic(() =>
  import("@/components/sections/BlogSection").then((m) => ({ default: m.BlogSection }))
);
const ContactSection = dynamic(() =>
  import("@/components/sections/ContactSection").then((m) => ({ default: m.ContactSection }))
);
const Footer = dynamic(() =>
  import("@/components/layout/Footer").then((m) => ({ default: m.Footer }))
);
const FloatingWhatsApp = dynamic(() =>
  import("@/components/FloatingWhatsApp").then((m) => ({ default: m.FloatingWhatsApp }))
);

export default function Home() {
  return (
    <>
      <ReadingProgressBar />
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <Statistics />
        <PracticeAreas />
        <CaseEvaluator />
        <StrategySection />
        <Testimonials />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
