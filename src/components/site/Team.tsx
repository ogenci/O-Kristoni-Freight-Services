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
    <section id="team" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal y={32} className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
              <img
                src={ceo}
                alt="Jonas, CEO of O Kristoni Freight Services"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-6">
                <div className="text-xs uppercase tracking-[0.22em] text-primary">Founder & CEO</div>
                <div className="mt-1 font-display text-3xl text-foreground">Jonas</div>
              </div>
            </div>
          </Reveal>

          <Reveal y={32} delay={0.1} className="lg:col-span-7 lg:pl-6">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
              The people behind every shipment
            </p>
            <h2 className="max-w-xl text-balance text-4xl sm:text-5xl">
              We answer the phone. <em className="not-italic text-primary">Every time.</em>
            </h2>
            <div className="mt-8 max-w-xl">
              <Quote className="h-7 w-7 text-primary" />
              <p className="mt-4 text-pretty text-xl leading-relaxed text-foreground">
                "I started Kristoni because I watched importers get burned by hidden duties and
                forwarders who vanished after the deposit cleared. We do this differently — one
                quote, one team, one phone number, and your goods home safe."
              </p>
              <p className="mt-5 text-sm text-muted-foreground">— Jonas, Founder</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="mailto:jonasghana@globalstewardsghana.com"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/50"
                >
                  <Mail className="h-4 w-4" />
                  jonasghana@globalstewardsghana.com
                </a>
                <a
                  href="https://globalstewardsghana.net"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/50"
                >
                  <Globe className="h-4 w-4" />
                  globalstewardsghana.net
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal y={32} className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border">
              <img
                src={team}
                alt="The O Kristoni Freight Services operations team in their Tema office"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </Reveal>
          <Reveal y={32} delay={0.1} className="lg:col-span-5">
            <h3 className="text-balance text-3xl sm:text-4xl">
              A small team that <em className="not-italic text-primary">knows the port</em>.
            </h3>
            <p className="mt-5 max-w-md text-pretty text-muted-foreground">
              Customs officers know us by name. Shipping lines know our paperwork. That's how your
              container moves through Tema in days, not weeks.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
              {teamMembers.map((m) => (
                <li key={m.name} className="bg-card p-4">
                  <div className="text-sm text-foreground">{m.name}</div>
                  <div className="text-xs text-muted-foreground">{m.role}</div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
