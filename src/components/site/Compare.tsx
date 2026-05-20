import { Reveal } from "./Reveal";
import { Check, X } from "lucide-react";

const rows = [
  { label: "Quote turnaround", us: "Within 1 hour, itemized", them: "2–5 days, vague estimate" },
  { label: "Duty calculation", us: "Verified against the live GRA tariff", them: '"Around" the actual rate' },
  { label: "Hidden fees at port", us: "None - every line shown upfront", them: "Surprise demurrage & handling" },
  { label: "Communication", us: "One WhatsApp thread, one team", them: "Email tag with 3 different agents" },
  { label: "Customs clearing", us: "In-house licensed agents", them: "Outsourced, no accountability" },
  { label: "Coverage", us: "Tema, Accra, Takoradi, Aflao, Elubo", them: "One port, take it or leave it" },
];

export function Compare() {
  return (
    <section id="compare" className="relative overflow-hidden bg-secondary/30 py-24 sm:py-32">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-20rem]">
        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary to-accent opacity-20" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium tracking-wide text-primary ring-1 ring-inset ring-primary/20 mb-6">
              THE KRISTONI DIFFERENCE
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-balance text-4xl leading-tight sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Why importers leave their old forwarder{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic pr-2">and don't go back.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl border border-border/50 bg-background/50 backdrop-blur-xl shadow-2xl shadow-primary/5">
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-border/50 text-xs uppercase tracking-[0.18em] text-muted-foreground relative">
              <div className="hidden md:block px-5 py-6 sm:px-8 font-medium">What matters</div>
              <div className="px-5 py-6 font-semibold text-primary sm:px-8 bg-primary/[0.03] border-x border-primary/10 flex items-center justify-center md:justify-start">O Kristoni</div>
              <div className="hidden md:flex px-5 py-6 sm:px-8 items-center justify-start">Typical forwarder</div>
            </div>
            
            <div className="divide-y divide-border/50">
              {rows.map((r, i) => (
                <div
                  key={r.label}
                  className="grid grid-cols-1 md:grid-cols-3 items-center group transition-colors hover:bg-muted/30"
                >
                  <div className="px-5 py-4 text-sm font-medium text-foreground/80 sm:px-8 border-b md:border-b-0 border-border/30 bg-muted/10 md:bg-transparent">
                    {r.label}
                  </div>
                  
                  <div className="flex items-start gap-3 px-5 py-5 sm:px-8 bg-primary/[0.03] md:border-x border-primary/10 relative transition-colors group-hover:bg-primary/[0.05]">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-jade/20 ring-1 ring-jade/30">
                      <Check className="h-3.5 w-3.5 text-jade" strokeWidth={3} />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-foreground text-pretty">{r.us}</span>
                  </div>
                  
                  <div className="flex items-start gap-3 px-5 py-5 sm:px-8 opacity-80 transition-opacity group-hover:opacity-100 border-b md:border-b-0 border-border/30">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 ring-1 ring-destructive/20">
                      <X className="h-3.5 w-3.5 text-destructive" strokeWidth={3} />
                    </div>
                    <span className="text-sm sm:text-base text-muted-foreground text-pretty">{r.them}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-16 text-center">
            <a
              href="https://wa.me/233278145334"
              target="_blank"
              rel="noopener"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-primary/20"
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
              See it for yourself - get a quote
              <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
