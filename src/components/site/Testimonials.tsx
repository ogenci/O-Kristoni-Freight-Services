import { Reveal } from "./Reveal";
import { Quote, Star } from "lucide-react";
import avatarAkosua from "@/assets/avatar-akosua.png";
import avatarSamuel from "@/assets/avatar-samuel.png";
import avatarLinda from "@/assets/avatar-linda.png";

const testimonials = [
  {
    quote:
      "Kristoni quoted my landed cost to the cedi. No surprise duties at Tema, no demurrage. I've moved three containers with them since.",
    name: "Akosua D.",
    role: "Importer · Building materials, Accra",
    image: avatarAkosua,
  },
  {
    quote:
      "I ship machinery parts from Belgium every month. Jonas and his team clear it in days, not weeks. Real prices, real updates.",
    name: "Samuel O.",
    role: "Workshop owner, Tema",
    image: avatarSamuel,
  },
  {
    quote:
      "We tried two other forwarders before Kristoni. The difference is they actually answer when you call - even on weekends.",
    name: "Linda K.",
    role: "Founder · Online retail, Kumasi",
    image: avatarLinda,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">
              What importers say
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-balance text-4xl leading-tight sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              The number you're quoted is the{" "}
              <em className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent not-italic pr-2">number you pay.</em>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.1 * i} className="h-full">
              <figure className="group flex h-full flex-col gap-6 rounded-3xl border border-border/50 bg-background/40 p-8 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20">
                <Quote className="h-8 w-8 text-primary/40 transition-colors duration-500 group-hover:text-primary" />
                <blockquote className="flex-1 text-pretty text-lg leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <figcaption className="mt-4 flex items-center gap-4 border-t border-border/50 pt-6">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-primary/20">
                    <img 
                      src={t.image} 
                      alt={`Portrait of ${t.name}`} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm font-medium text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
