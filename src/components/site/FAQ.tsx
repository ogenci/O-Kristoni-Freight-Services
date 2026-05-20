import { Reveal } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do you avoid surprise duties at Tema?",
    a: "We verify your HS code and product description against the GRA tariff book before your goods leave the origin port. The number we quote is the number you pay - no last-minute reclassification at clearance.",
  },
  {
    q: "What's the typical transit time?",
    a: "Sea freight runs 25–45 days depending on the origin (Dubai is fastest, South America the longest). Air freight is 3–7 days into Kotoka. We share the vessel ETA the day your container loads.",
  },
  {
    q: "What happens if my goods are damaged or missing?",
    a: "Every shipment moves through bonded warehousing and is sealed at origin. We carry standard freight insurance and can arrange all-risk cover on request - claims handled directly by our team.",
  },
  {
    q: "Is there a minimum shipment size?",
    a: "No. We consolidate shared containers (LCL) from every origin we serve, so you can ship anything from 0.5 CBM upward. Full containers (FCL) get preferential lane pricing.",
  },
  {
    q: "How do payments and clearance work?",
    a: "50% on booking, balance before release. We invoice in GHS or USD. Duties and levies are paid on your behalf at the port and itemised on the final invoice - no markup.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">Before you book</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-2xl text-balance text-4xl sm:text-5xl">
            The questions every importer asks{" "}
            <em className="not-italic text-primary">us first.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="py-6 text-left text-lg text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-pretty text-base text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
