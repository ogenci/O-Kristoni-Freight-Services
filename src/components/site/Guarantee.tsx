import { Reveal } from "./Reveal";
import { ShieldCheck, Clock, Wallet, ArrowRight } from "lucide-react";

const promises = [
  {
    icon: Clock,
    title: "Quote in 1 hour",
    body: "Send your invoice. We respond with a verified landed cost the same business hour — or your next shipment's clearing fee is on us.",
  },
  {
    icon: Wallet,
    title: "Price-lock guarantee",
    body: "The duty and freight we quote is the duty and freight you pay. Any GRA or carrier variance under 2% is absorbed by us.",
  },
  {
    icon: ShieldCheck,
    title: "Cargo-care promise",
    body: "Fully insured movement, bonded warehousing, and real-time updates. If we miss a milestone, you hear it from us first — not the port.",
  },
];

export function Guarantee() {
  return (
    <section id="guarantee" className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-ink" />
      <div className="absolute inset-0 -z-10 bg-grain opacity-30" />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--cargo), transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-6 text-on-media lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">
              Our promise
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-balance text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Three guarantees we put{" "}
              <em className="not-italic text-primary">in writing.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-pretty text-on-media/70">
              No fine print. No "depending on the season." This is what every Kristoni
              shipment includes — by default.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-6 lg:grid-cols-3">
          {promises.map((p, i) => (
            <Reveal as="li" key={p.title} delay={0.1 * i}>
              <div className="hover-lift h-full rounded-2xl border border-on-media/15 bg-on-media/[0.03] p-7 backdrop-blur">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-2xl">{p.title}</h3>
                <p className="mt-3 text-pretty text-on-media/70">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/233278145334"
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground transition-all hover:scale-[1.02]"
              style={{ boxShadow: "0 10px 40px -10px var(--cargo)" }}
            >
              Put us to the test
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="text-sm text-on-media/60">No deposit · No obligation</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
