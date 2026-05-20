import { Reveal } from "./Reveal";

const lanes = [
  { from: "Belgium",     sea: "$140/CBM", air: "$8.55/KG" },
  { from: "Argentina",   sea: "$330/CBM", air: "$14/KG"   },
  { from: "Kenya",       sea: "$140/CBM", air: "$6/KG"    },
  { from: "Bangladesh",  sea: "$200/CBM", air: "$12/KG"   },
  { from: "Australia",   sea: "$400/CBM", air: "$28/KG"   },
  { from: "Vietnam",     sea: "$350/CBM", air: "$20/KG"   },
  { from: "South Korea", sea: "$280/CBM", air: "$17/KG"   },
  { from: "Dubai",       sea: "$360/CBM", air: "$22/KG"   },
  { from: "Turkey",      sea: "—",        air: "Inquire"  },
];

export function Lanes() {
  const row = [...lanes, ...lanes];
  return (
    <section id="lanes" className="border-y border-border bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl text-4xl text-balance sm:text-5xl">
              Nine shipping lanes into Ghana —{" "}
              <em className="not-italic text-primary">priced upfront.</em>
            </h2>
            <p className="max-w-sm text-muted-foreground">
              Indicative rates per route. Ask on WhatsApp for an exact landed cost against your invoice.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee flex w-max gap-4 px-6">
          {row.map((l, i) => (
            <div
              key={i}
              className="hover-lift flex w-72 shrink-0 flex-col gap-3 rounded-xl border border-border bg-background/80 p-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Lane {String((i % lanes.length) + 1).padStart(2, "0")}
                </span>
                <span className="text-xs text-jade">→ Ghana</span>
              </div>
              <div className="font-display text-2xl">{l.from}</div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Sea</div>
                  <div className="text-foreground">{l.sea}</div>
                </div>
                <div className="h-8 w-px bg-border" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Air</div>
                  <div className="text-foreground">{l.air}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
