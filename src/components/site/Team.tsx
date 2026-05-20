import { Reveal } from "./Reveal";
import { Quote, Globe, Mail } from "lucide-react";
import ceo from "@/assets/ceo-portrait.jpg";
import team from "@/assets/team-photo.jpg";

const teamMembers = [
  { name: "Operations Lead",    role: "Tema Harbour"  },
  { name: "Customs Specialist", role: "GRA Liaison"   },
  { name: "Freight Coordinator",role: "Sea & Air"     },
  { name: "Client Success",     role: "WhatsApp Desk" },
];

export function Team() {
  return (
    <section id="team" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Decorative background blur */}
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 -translate-y-1/2 translate-x-1/3 transform-gpu blur-3xl opacity-30">
        <div className="aspect-[1000/1000] w-[60rem] rounded-full bg-gradient-to-tr from-accent/50 to-primary/30 mix-blend-multiply"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <Reveal y={32} className="lg:col-span-5">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-primary/10 border border-border/50">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <img
                src={ceo}
                alt="Jonas, CEO of O Kristoni Freight Services"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-4 bottom-4 z-20 overflow-hidden rounded-2xl border border-white/10 bg-background/60 p-5 backdrop-blur-md transition-all duration-500 group-hover:bg-background/80">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Founder & CEO</div>
                <div className="mt-1 font-display text-3xl text-foreground">Jonas</div>
              </div>
            </div>
          </Reveal>

          <Reveal y={32} delay={0.1} className="lg:col-span-7 lg:pl-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium tracking-wide text-primary ring-1 ring-inset ring-primary/20 mb-4">
              THE PEOPLE BEHIND EVERY SHIPMENT
            </div>
            <h2 className="max-w-xl text-balance text-4xl sm:text-5xl font-semibold tracking-tight">
              We answer the phone.{" "}
              <em className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent not-italic">Every time.</em>
            </h2>
            <div className="mt-10 max-w-xl relative">
              <Quote className="absolute -left-6 -top-4 h-12 w-12 text-primary/10 rotate-180" />
              <p className="relative z-10 text-pretty text-xl leading-relaxed text-foreground/90 font-medium">
                "I started Kristoni because I watched importers get burned by hidden duties and
                forwarders who vanished after the deposit cleared. We do this differently - one
                quote, one team, one phone number, and your goods home safe."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-px w-8 bg-primary/30" />
                <p className="text-sm font-semibold tracking-wide text-primary uppercase">Jonas, Founder</p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:jonasghana@globalstewardsghana.com"
                  className="group inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/5"
                >
                  <Mail className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  jonasghana@globalstewardsghana.com
                </a>
                <a
                  href="https://globalstewardsghana.net"
                  target="_blank"
                  rel="noopener"
                  className="group inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/5"
                >
                  <Globe className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  globalstewardsghana.net
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-32 grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <Reveal y={32} className="lg:col-span-7 order-2 lg:order-1">
            <div className="group relative aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl shadow-primary/5 border border-border/50">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <img
                src={team}
                alt="The O Kristoni Freight Services operations team in their Tema office"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent pointer-events-none" />
            </div>
          </Reveal>
          
          <Reveal y={32} delay={0.1} className="lg:col-span-5 order-1 lg:order-2">
            <h3 className="text-balance text-3xl sm:text-4xl font-semibold tracking-tight">
              A small team that <em className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent not-italic">knows the port</em>.
            </h3>
            <p className="mt-5 max-w-md text-pretty text-lg text-muted-foreground">
              Customs officers know us by name. Shipping lines know our paperwork. That's how your
              container moves through Tema in days, not weeks.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {teamMembers.map((m, i) => (
                <div 
                  key={m.name} 
                  className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background/40 backdrop-blur-sm p-5 transition-all hover:border-primary/30 hover:bg-primary/5 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="text-sm font-semibold text-foreground">{m.name}</div>
                  <div className="mt-1 text-xs font-medium tracking-wide text-primary uppercase">{m.role}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
