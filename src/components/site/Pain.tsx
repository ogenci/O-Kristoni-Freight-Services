import { Reveal } from "./Reveal";

const pains = [
  {
    title: "Surprise duties",
    body: "GRA hits you with duty rates you were never quoted — and the bill doubles overnight.",
  },
  {
    title: "Demurrage drain",
    body: "Your container sits at Tema while demurrage and rent stack up by the day.",
  },
  {
    title: "Silent forwarders",
    body: "Your agent disappears the moment your goods leave port. No updates. No answers.",
  },
  {
    title: "Hidden middlemen",
    body: "Three sub-agents take a cut before your cargo even clears — and you pay for all of them.",
  },
];

export function Pain() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">
            The real cost of shipping into Ghana
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-balance text-4xl leading-tight sm:text-6xl">
            Importing into Ghana shouldn't{" "}
            <em className="not-italic text-primary">cost you twice.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground">
            If you've imported before, you know the playbook. The invoice price is one thing.
            The number you actually pay is something else entirely.
          </p>
        </Reveal>
        <ul className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((p, i) => (
            <Reveal as="li" key={p.title} delay={0.08 * i}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 text-left transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl sm:p-10">
                <div className="font-display text-5xl leading-none text-primary sm:text-6xl">0{i + 1}</div>
                <h3 className="mt-6 text-xl sm:text-2xl">{p.title}</h3>
                <p className="mt-3 text-pretty text-muted-foreground">{p.body}</p>
                <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={0.3}>
          <p className="mx-auto mt-12 max-w-2xl text-pretty text-lg text-foreground">
            We built O Kristoni so none of that happens to you.{" "}
            <span className="text-muted-foreground">
              Exact landed cost upfront. Bonded warehousing. Cleared by people who answer their phone.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
