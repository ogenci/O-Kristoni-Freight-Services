import { Reveal } from "./Reveal";
import { Check, X } from "lucide-react";

const rows = [
  { label: "Quote turnaround", us: "Within 1 hour, itemized", them: "2–5 days, vague estimate" },
  { label: "Duty calculation", us: "Verified against the live GRA tariff", them: '"Around" the actual rate' },
  { label: "Hidden fees at port", us: "None — every line shown upfront", them: "Surprise demurrage & handling" },
  { label: "Communication", us: "One WhatsApp thread, one team", them: "Email tag with 3 different agents" },
  { label: "Customs clearing", us: "In-house licensed agents", them: "Outsourced, no accountability" },
  { label: "Coverage", us: "Tema, Accra, Takoradi, Aflao, Elubo", them: "One port, take it or leave it" },
];

export function Compare() {
  return (
    <section id="compare" className="border-y border-border bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">
              The Kristoni difference
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-balance text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Why importers leave their old forwarder{" "}
              <em className="not-italic text-primary">and don't go back.</em>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-border bg-card">
            <div className="grid grid-cols-3 border-b border-border bg-background/60 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <div className="px-5 py-4 sm:px-8">What matters</div>
              <div className="px-5 py-4 text-foreground sm:px-8">O Kristoni</div>
              <div className="px-5 py-4 sm:px-8">Typical forwarder</div>
            </div>
            {rows.map((r, i) => (
              <div
                key={r.label}
                className={`grid grid-cols-3 items-start gap-2 px-0 text-sm sm:text-base ${
                  i !== rows.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="px-5 py-5 text-muted-foreground sm:px-8">{r.label}</div>
                <div className="flex items-start gap-2 px-5 py-5 text-foreground sm:px-8">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-jade" />
                  <span className="text-pretty">{r.us}</span>
                </div>
                <div className="flex items-start gap-2 px-5 py-5 text-muted-foreground sm:px-8">
                  <X className="mt-1 h-4 w-4 shrink-0 text-destructive" />
                  <span className="text-pretty">{r.them}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 text-center">
            <a
              href="https://wa.me/233278145334"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground transition-all hover:scale-[1.02]"
              style={{ boxShadow: "0 10px 40px -10px var(--cargo)" }}
            >
              See it for yourself — get a quote
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
