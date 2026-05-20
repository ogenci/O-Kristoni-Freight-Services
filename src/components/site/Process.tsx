import { Reveal } from "./Reveal";
import { FileText, Calculator, Ship, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Send your invoice",
    body: "WhatsApp or email the supplier invoice and packing list. We verify HS codes against the GRA tariff.",
  },
  {
    icon: Calculator,
    title: "Get exact landed cost",
    body: "Within 1 hour you receive a line-item quote: freight, duty, levies, port fees, delivery. No surprises.",
  },
  {
    icon: Ship,
    title: "We move the cargo",
    body: "Booking, origin pickup, sea or air, B/L, and real-time milestones - all coordinated by one team.",
  },
  {
    icon: PackageCheck,
    title: "Cleared & delivered",
    body: "We clear at Tema, Accra, Takoradi, Aflao or Elubo and deliver to your door. You get the paperwork.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">
                How it works
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-balance text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Four steps from{" "}
                <em className="not-italic text-primary">supplier to your door.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-pretty text-muted-foreground">
                One team, one WhatsApp thread. From the moment you send an invoice to the day
                the truck reaches you, you talk to the same people.
              </p>
            </Reveal>
          </div>

          <ol className="relative lg:col-span-8">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border sm:left-7" />
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={0.1 * i} className="relative flex gap-5 pb-10 last:pb-0 sm:gap-7">
                <div className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-card text-primary sm:h-14 sm:w-14">
                  <s.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="flex-1 pt-1 sm:pt-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-xl text-muted-foreground">0{i + 1}</span>
                    <h3 className="text-2xl text-foreground">{s.title}</h3>
                  </div>
                  <p className="mt-2 max-w-lg text-pretty text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
