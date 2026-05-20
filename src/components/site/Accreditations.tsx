import { Reveal } from "./Reveal";
import { ShieldCheck, BadgeCheck, FileCheck2, Landmark } from "lucide-react";

const items = [
  {
    icon: Landmark,
    title: "GRA-licensed customs house agent",
    body: "Authorized to clear under the Ghana Revenue Authority customs framework — your declarations are filed correctly the first time.",
  },
  {
    icon: ShieldCheck,
    title: "GIFF member",
    body: "Operating under the Ghana Institute of Freight Forwarders code of conduct — accountability, ethics, and professional standards.",
  },
  {
    icon: FileCheck2,
    title: "GSA & Ports Authority cleared",
    body: "Registered with the Ghana Shippers' Authority and approved to operate inside Tema and Takoradi port zones.",
  },
  {
    icon: BadgeCheck,
    title: "IATA & FIATA aligned",
    body: "Air freight handled to IATA standards. Sea documentation issued to FIATA international forwarding norms.",
  },
];

export function Accreditations() {
  return (
    <section id="accreditations" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">
                Licensed & accredited
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-balance text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Cleared by people the{" "}
                <em className="not-italic text-primary">port already knows.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-pretty text-muted-foreground">
                Customs clearing isn't a side service we outsource. It's done in-house by
                licensed agents who walk the Tema floor every day.
              </p>
            </Reveal>
          </div>

          <ul className="grid gap-4 lg:col-span-7 sm:grid-cols-2">
            {items.map((it, i) => (
              <Reveal as="li" key={it.title} delay={0.08 * i}>
                <div className="hover-lift h-full rounded-2xl border border-border bg-card p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl text-foreground">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">{it.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
