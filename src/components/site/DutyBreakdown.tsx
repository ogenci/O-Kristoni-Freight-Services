import { Reveal } from "./Reveal";

const steps = [
  { label: "CIF Value",      sub: "Cost + Insurance + Freight",        amount: "GHS 10,000" },
  { label: "+ Import Duty",  sub: "HS-code based · 0–20%",             amount: "GHS 2,000"  },
  { label: "+ Other Levies", sub: "VAT 12.5 · NHIL · GETFund · COVID", amount: "GHS 2,280"  },
  { label: "+ Fixed Fees",   sub: "Inspection · ECOWAS · Network",     amount: "GHS 250"    },
];

export function DutyBreakdown() {
  return (
    <section className="border-y border-border bg-card/40 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">The duty math</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-md text-balance text-4xl sm:text-5xl">
              GRA compounds every fee on the one before it.{" "}
              <em className="not-italic text-primary">We do the math.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md text-pretty text-muted-foreground">
              Here's a real Ghana import on a CIF value of GHS 10,000 - say, a shipment of pasta.
              The wrong word on your invoice can swing duty from 5% to 20%. We check it before
              your goods leave port.
            </p>
          </Reveal>
        </div>

        <Reveal y={32} delay={0.1}>
          <div className="rounded-2xl border border-border bg-background p-2">
            <ul className="divide-y divide-border">
              {steps.map((s) => (
                <li key={s.label} className="flex items-baseline justify-between gap-6 p-5">
                  <div>
                    <div className="text-foreground">{s.label}</div>
                    <div className="text-xs text-muted-foreground">{s.sub}</div>
                  </div>
                  <div className="font-display text-2xl text-foreground tabular-nums">{s.amount}</div>
                </li>
              ))}
              <li className="flex items-baseline justify-between gap-6 bg-primary/10 p-5">
                <div>
                  <div className="text-primary uppercase tracking-widest text-xs">Total landed cost</div>
                  <div className="text-sm text-muted-foreground">44.3% on top of product cost</div>
                </div>
                <div className="font-display text-3xl text-primary tabular-nums">GHS 14,530</div>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
