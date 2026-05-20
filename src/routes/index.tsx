import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Pain } from "@/components/site/Pain";
import { Lanes } from "@/components/site/Lanes";
import { Industries } from "@/components/site/Industries";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { DutyBreakdown } from "@/components/site/DutyBreakdown";
import { Compare } from "@/components/site/Compare";
import { Team } from "@/components/site/Team";
import { Testimonials } from "@/components/site/Testimonials";
import { Stats } from "@/components/site/Stats";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Accreditations } from "@/components/site/Accreditations";
import { Partners } from "@/components/site/Partners";
import { Guarantee } from "@/components/site/Guarantee";
import { Footer } from "@/components/site/Footer";
import { StickyMobileCTA } from "@/components/site/StickyMobileCTA";

const TITLE = "O Kristoni Freight Services - Shipping & Customs Clearing into Ghana";
const DESCRIPTION =
  "International freight forwarders into Ghana. Sea & air from 9+ origin countries, expert customs clearing, bonded warehousing, and transparent landed-cost pricing. WhatsApp +233 27 814 5334.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Pain />
        <Lanes />
        <Services />
        <Accreditations />
        <Industries />
        <Process />
        <DutyBreakdown />
        <Compare />
        <Guarantee />
        <Team />
        <Testimonials />
        <Stats />
        <Partners />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
