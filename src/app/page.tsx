import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { Statistics } from "@/components/sections/Statistics";
import { ReadingProgressBar } from "@/components/ui/ReadingProgressBar";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";

const AboutSection = dynamic(() =>
  import("@/components/sections/AboutSection").then((m) => ({ default: m.AboutSection }))
);
const TeamSection = dynamic(() =>
  import("@/components/sections/TeamSection").then((m) => ({ default: m.TeamSection }))
);
const SpotlightReel = dynamic(() =>
  import("@/components/sections/SpotlightReel").then((m) => ({ default: m.SpotlightReel }))
);
const PracticeAreas = dynamic(() =>
  import("@/components/sections/PracticeAreas").then((m) => ({ default: m.PracticeAreas }))
);
const CaseEvaluator = dynamic(() =>
  import("@/components/sections/CaseEvaluator").then((m) => ({ default: m.CaseEvaluator }))
);
const LegalToolsSection = dynamic(() =>
  import("@/components/sections/LegalToolsSection").then((m) => ({ default: m.LegalToolsSection }))
);
const StrategySection = dynamic(() =>
  import("@/components/sections/StrategySection").then((m) => ({ default: m.StrategySection }))
);
const FAQSection = dynamic(() =>
  import("@/components/sections/FAQSection").then((m) => ({ default: m.FAQSection }))
);
const ConfidentialitySection = dynamic(() =>
  import("@/components/sections/ConfidentialitySection").then((m) => ({ default: m.ConfidentialitySection }))
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
const EmergencyButton = dynamic(() =>
  import("@/components/ui/EmergencyButton").then((m) => ({ default: m.EmergencyButton }))
);
const FirstVisitOverlay = dynamic(() =>
  import("@/components/ui/FirstVisitOverlay").then((m) => ({ default: m.FirstVisitOverlay }))
);

export default function Home() {
  return (
    <>
      <ReadingProgressBar />
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        <MarqueeStrip />
        <Statistics />
        <AboutSection />
        <TeamSection />
        <SpotlightReel />
        <PracticeAreas />
        <CaseEvaluator />
        <LegalToolsSection />
        <StrategySection />
        <FAQSection />
        <ConfidentialitySection />
        <Testimonials />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <EmergencyButton />
      <FirstVisitOverlay />
    </>
  );
}
