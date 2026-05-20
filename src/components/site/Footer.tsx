export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-on-media">
      <div className="bg-grain absolute inset-0 opacity-30" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg">
              O
            </span>
            <div className="leading-none">
              <div className="font-display text-lg">O'Kristoni</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-on-media/60">
                Freight Services
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm text-on-media/70">
            International freight forwarders, logistics & shipping agents. Bringing goods into
            Ghana with transparent pricing since day one.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-on-media/50">Hubs</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Accra</li><li>Tema</li><li>Takoradi</li><li>Aflao</li><li>Elubo</li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-on-media/50">Contact</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="https://wa.me/233278145334" className="hover:text-primary transition-colors">
                +233 27 814 5334
              </a>
            </li>
            <li>
              <a href="mailto:jonasghana@globalstewardsghana.com" className="hover:text-primary transition-colors break-all">
                jonasghana@globalstewardsghana.com
              </a>
            </li>
            <li>
              <a href="https://globalstewardsghana.net" target="_blank" rel="noopener" className="hover:text-primary transition-colors">
                globalstewardsghana.net
              </a>
            </li>
            <li className="text-on-media/60 text-xs pt-2">
              Ground floor, Black Star Line Building, Tema
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-8 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-3 border-t border-on-media/15 pt-6 text-xs text-on-media/60 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} O'Kristoni Freight Services. All rights reserved.</span>
          <span>Always open · Ghana-based · Globally connected</span>
        </div>
      </div>
    </footer>
  );
}
