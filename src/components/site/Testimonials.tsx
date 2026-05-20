import { Reveal } from "./Reveal";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Kristoni quoted my landed cost to the cedi. No surprise duties at Tema, no demurrage. I've moved three containers with them since.",
    name: "Akosua D.",
    role: "Importer · Building materials, Accra",
  },
  {
    quote:
      "I ship machinery parts from Belgium every month. Jonas and his team clear it in days, not weeks. Real prices, real updates.",
    name: "Samuel O.",
    role: "Workshop owner, Tema",
  },
  {
    quote:
      "We tried two other forwarders before Kristoni. The difference is they actually answer when you call — even on weekends.",
    name: "Linda K.",
    role: "Founder · Online retail, Kumasi",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">
              What importers say
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-balance text-4xl leading-tight sm:text-5xl lg:text-6xl">
              The number you're quoted is the{" "}
              <em className="not-italic text-primary">number you pay.</em>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.1 * i} className="h-full">
              <figure className="hover-lift flex h-full flex-col gap-6 rounded-2xl border border-border bg-card p-8">
                <Quote className="h-6 w-6 text-primary" />
                <blockquote className="flex-1 text-pretty text-lg leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <figcaption className="border-t border-border pt-5">
                  <div className="font-medium text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
