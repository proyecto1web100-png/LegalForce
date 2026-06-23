import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";

// Lazy-load all below-fold sections to speed up initial render
const Statistics = dynamic(() =>
  import("@/components/sections/Statistics").then((m) => ({ default: m.Statistics }))
);
const PracticeAreas = dynamic(() =>
  import("@/components/sections/PracticeAreas").then((m) => ({ default: m.PracticeAreas }))
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
      <Navbar />
      <main>
        <HeroSection />
        <Statistics />
        <PracticeAreas />
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
