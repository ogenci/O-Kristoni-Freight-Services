import { MapPin, Mail, Phone, ExternalLink, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-on-media/80 pt-32 pb-12 border-t border-on-media/10">
      {/* Premium ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10">
        
        {/* Pre-footer CTA */}
        <div className="mb-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-on-media/10 pb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-on-media mb-4">
              Ready to move your cargo?
            </h2>
            <p className="text-lg text-on-media/60 max-w-md">
              Get an itemized, exact-cost quote today. No hidden fees, no surprises.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/233278145334"
              target="_blank"
              rel="noopener"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:scale-[1.02] shadow-lg shadow-primary/20"
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
              WhatsApp Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground font-display text-2xl shadow-[0_0_30px_rgba(var(--primary),0.4)] border border-on-media/10">
                O
              </span>
              <div className="leading-tight">
                <div className="font-display text-2xl text-on-media tracking-wide">O'Kristoni</div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary mt-1">
                  Freight Services
                </div>
              </div>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-on-media/60">
              Premium international freight forwarders, logistics & shipping agents. Bringing goods into
              Ghana with transparent pricing, accountability, and speed since day one.
            </p>
          </div>

          {/* Hubs Column */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-on-media">
              Our Hubs
            </h3>
            <ul className="space-y-4 text-base">
              {["Accra", "Tema", "Takoradi", "Aflao", "Elubo"].map((hub) => (
                <li key={hub} className="flex items-center gap-3 group">
                  <div className="h-1.5 w-1.5 rounded-full bg-on-media/20 transition-colors group-hover:bg-primary" />
                  <span className="text-on-media/60 transition-colors group-hover:text-on-media cursor-default">
                    {hub}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 lg:col-start-9">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-on-media">
              Contact Us
            </h3>
            <ul className="space-y-5 text-base">
              <li>
                <a href="https://wa.me/233278145334" className="group flex items-center gap-4 transition-colors hover:text-on-media text-on-media/60">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-on-media/5 border border-on-media/10 transition-colors group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:text-primary">
                    <Phone className="h-4 w-4" />
                  </span>
                  +233 27 814 5334
                </a>
              </li>
              <li>
                <a href="mailto:jonasghana@globalstewardsghana.com" className="group flex items-center gap-4 transition-colors hover:text-on-media text-on-media/60">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-on-media/5 border border-on-media/10 transition-colors group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:text-primary">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="truncate">jonasghana@globalstewardsghana.com</span>
                </a>
              </li>
              <li className="flex items-start gap-4 text-on-media/60">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-on-media/5 border border-on-media/10 mt-1">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="leading-relaxed">
                  Ground floor, Black Star Line Building,<br/>Tema, Ghana
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-on-media/10 pt-8 text-sm text-on-media/40 sm:flex-row">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} O'Kristoni Freight Services.</span>
            <span className="hidden sm:inline-block">All rights reserved.</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-medium">
            <span className="text-on-media/60">Always open</span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
            <span className="text-on-media/60">Ghana-based</span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
            <span className="text-on-media/60">Globally connected</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
