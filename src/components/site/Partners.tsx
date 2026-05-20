import { Reveal } from "./Reveal";

const partners = [
  "Maersk",
  "MSC",
  "CMA CGM",
  "Hapag-Lloyd",
  "PIL",
  "Emirates SkyCargo",
  "Ethiopian Cargo",
  "Turkish Cargo",
  "DHL",
  "Bolloré",
  "GPHA",
  "Meridian Port",
];

export function Partners() {
  return (
    <section id="partners" className="border-y border-border bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-primary">
                Carriers & partners
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-balance text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Backed by the lines that{" "}
                <em className="not-italic text-primary">actually move world trade.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-6">
            <p className="text-pretty text-muted-foreground">
              Direct booking relationships with global ocean carriers, IATA airlines, and Ghana
              port operators — so your container gets a slot when others get waitlisted.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <ul className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((p) => (
              <li
                key={p}
                className="flex items-center justify-center bg-card px-4 py-8 transition-colors hover:bg-accent"
              >
                <span className="font-display text-xl text-muted-foreground transition-colors hover:text-foreground">
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-6 text-center text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Carrier names indicate working relationships and routings, not endorsements.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
