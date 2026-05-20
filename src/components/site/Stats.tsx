import { Reveal } from "./Reveal";

const stats = [
  { value: "9+",   label: "Origin countries"          },
  { value: "5",    label: "Ghana delivery hubs"       },
  { value: "$140", label: "Sea freight per CBM"       },
  { value: "1 hr", label: "WhatsApp quote turnaround" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-card/40 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden border-x border-border bg-border md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="bg-background p-8 sm:p-10">
            <div className="font-display text-5xl text-primary tabular-nums sm:text-6xl">
              {s.value}
            </div>
            <div className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
