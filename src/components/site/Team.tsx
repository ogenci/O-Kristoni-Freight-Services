import { Reveal } from "./Reveal";
import { Quote, Globe, Mail, Anchor, FileCheck, PlaneTakeoff, HeadphonesIcon } from "lucide-react";
import ceo from "@/assets/ceo-portrait.jpg";
import team from "@/assets/team-photo.jpg";

const teamMembers = [
  {
    name: "Operations Lead",
    role: "Tema Harbour",
    icon: Anchor,
    description: "Coordinates all port-side activity and vessel liaison.",
  },
  {
    name: "Customs Specialist",
    role: "GRA Liaison",
    icon: FileCheck,
    description: "Guarantees precise HS coding and duty classification.",
  },
  {
    name: "Freight Coordinator",
    role: "Sea & Air",
    icon: PlaneTakeoff,
    description: "Manages multi-modal bookings across every origin.",
  },
  {
    name: "Client Success",
    role: "WhatsApp Desk",
    icon: HeadphonesIcon,
    description: "Your single point of contact from quote to delivery.",
  },
];

export function Team() {
  return (
    <section id="team" className="relative py-24 sm:py-36 overflow-hidden">
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_80%_50%_at_20%_40%,color-mix(in_oklab,var(--cargo)_6%,transparent),transparent)]" />
        <div className="absolute right-0 bottom-0 h-2/3 w-2/3 bg-[radial-gradient(ellipse_60%_60%_at_80%_80%,color-mix(in_oklab,var(--cargo)_4%,transparent),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        {/* Section label */}
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary/40" />
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">
              The People Behind Every Shipment
            </p>
          </div>
        </Reveal>

        {/* ── CEO BLOCK ── */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-stretch">
          {/* CEO Photo */}
          <Reveal y={40} className="lg:col-span-5">
            <div className="group relative h-full min-h-[520px] overflow-hidden rounded-3xl">
              {/* Image */}
              <img
                src={ceo}
                alt="Jonas, CEO of O Kristoni Freight Services"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              {/* Hover tint */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay" />

              {/* Bottom badge */}
              <div className="absolute inset-x-0 bottom-0 p-7 z-10">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-1.5">
                      Founder & CEO
                    </div>
                    <div className="font-display text-4xl text-on-media leading-none">Jonas</div>
                  </div>
                  {/* Decorative monogram pill */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/30 text-primary-foreground font-display text-2xl">
                    J
                  </div>
                </div>
              </div>

              {/* Border ring */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>
          </Reveal>

          {/* CEO Text */}
          <Reveal y={32} delay={0.1} className="lg:col-span-7 flex flex-col justify-center lg:py-6">
            <h2 className="max-w-xl text-balance text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08]">
              We answer the phone.{" "}
              <em className="not-italic text-primary">Every time.</em>
            </h2>

            {/* Pull-quote */}
            <div className="mt-10 relative">
              <div className="absolute -left-2 -top-3 text-primary/15 font-display text-[96px] leading-none select-none pointer-events-none">
                "
              </div>
              <p className="relative pl-6 text-pretty text-xl leading-relaxed text-foreground/80 font-medium border-l-2 border-primary/30">
                I started Kristoni because I watched importers get burned by
                hidden duties and forwarders who vanished after the deposit
                cleared. We do this differently - one quote, one team, one phone
                number, and your goods home safe.
              </p>
              <div className="mt-5 pl-6 flex items-center gap-3">
                <div className="h-1 w-6 rounded-full bg-primary" />
                <p className="text-sm font-bold tracking-widest text-primary uppercase">
                  Jonas, Founder
                </p>
              </div>
            </div>

            {/* Contact pills */}
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:jonasghana@globalstewardsghana.com"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/5"
              >
                <Mail className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                <span className="truncate max-w-[200px]">jonasghana@globalstewardsghana.com</span>
              </a>
              <a
                href="https://globalstewardsghana.net"
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/5"
              >
                <Globe className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                globalstewardsghana.net
              </a>
            </div>
          </Reveal>
        </div>

        {/* ── TEAM BLOCK ── */}
        <div className="mt-24 grid gap-8 lg:grid-cols-12 lg:gap-12 items-stretch">
          {/* Team text & cards */}
          <Reveal y={32} className="lg:col-span-5 order-1 flex flex-col justify-center">
            <h3 className="text-balance text-3xl sm:text-4xl font-semibold tracking-tight">
              A small team that{" "}
              <em className="not-italic text-primary">knows the port</em>.
            </h3>
            <p className="mt-5 text-pretty text-lg text-muted-foreground leading-relaxed">
              Customs officers know us by name. Shipping lines know our
              paperwork. That's how your container moves through Tema in days,
              not weeks.
            </p>

            {/* Team member cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {teamMembers.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.name}
                    className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-0.5"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    {/* Subtle corner glow on hover */}
                    <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-primary/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="flex items-start gap-3.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{m.name}</div>
                        <div className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary/70">
                          {m.role}
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{m.description}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Team photo */}
          <Reveal y={40} delay={0.1} className="lg:col-span-7 order-2">
            <div className="group relative aspect-[16/11] overflow-hidden rounded-3xl">
              <img
                src={team}
                alt="The O Kristoni Freight Services operations team in their Tema office"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tl from-ink/60 via-transparent to-transparent" />
              {/* Hover tint */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay" />

              {/* Stats badge pinned to bottom-right */}
              <div className="absolute bottom-6 right-6 z-10 rounded-2xl border border-white/10 bg-ink/70 px-5 py-4 backdrop-blur-md">
                <div className="flex items-center gap-5">
                  <div className="text-center">
                    <div className="font-display text-2xl text-on-media">5+</div>
                    <div className="text-[10px] uppercase tracking-widest text-on-media/50 mt-0.5">Years</div>
                  </div>
                  <div className="w-px h-8 bg-on-media/15" />
                  <div className="text-center">
                    <div className="font-display text-2xl text-on-media">800+</div>
                    <div className="text-[10px] uppercase tracking-widest text-on-media/50 mt-0.5">Shipments</div>
                  </div>
                  <div className="w-px h-8 bg-on-media/15" />
                  <div className="text-center">
                    <div className="font-display text-2xl text-on-media">0</div>
                    <div className="text-[10px] uppercase tracking-widest text-on-media/50 mt-0.5">Surprises</div>
                  </div>
                </div>
              </div>

              {/* Border ring */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
