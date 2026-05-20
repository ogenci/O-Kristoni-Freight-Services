import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";

const links = [
  { href: "#top", label: "Home" },
  { href: "#team", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Projects" },
  { href: "#faq", label: "Resources" },
  { href: "#quote", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("has-mobile-menu-open");
    } else {
      document.body.classList.remove("has-mobile-menu-open");
    }
  }, [mobileMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:px-6 lg:px-10">
      <div
        className={`w-full lg:w-[85%] max-w-7xl rounded-2xl sm:rounded-full border transition-all duration-500 overflow-hidden ${
          mobileMenuOpen ? "h-[calc(100vh-2rem)] flex flex-col" : "h-auto"
        } ${
          scrolled || mobileMenuOpen
            ? "border-border bg-background/95 text-foreground shadow-lg shadow-ink/5 backdrop-blur-xl"
            : "border-on-media/15 bg-on-media/10 text-on-media backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-7 shrink-0">
          <a href="#top" className="flex items-center gap-2.5" onClick={() => setMobileMenuOpen(false)}>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg leading-none">
              O
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg uppercase flex justify-between w-full">
                {"O'KRISTONI".split("").map((char, i) => (
                  <span key={i}>{char}</span>
                ))}
              </span>
              <span
                className={`text-[10px] uppercase tracking-[0.22em] ${
                  scrolled || mobileMenuOpen ? "text-muted-foreground" : "text-on-media/70"
                }`}
              >
                Freight Services
              </span>
            </span>
          </a>

          <nav
            className={`hidden lg:flex items-center gap-2 text-sm ${
              scrolled ? "text-muted-foreground" : "text-on-media/85"
            }`}
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative px-3 py-3 rounded-md uppercase tracking-widest text-xs font-semibold transition-all duration-300 hover:bg-primary/10 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/233278145334"
              target="_blank"
              rel="noopener"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Quote</span>
            </a>

            <button
              className="lg:hidden p-2 -mr-2 rounded-md transition-colors hover:bg-foreground/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border/20 px-4 py-4 sm:px-7 flex-1 overflow-y-auto flex flex-col">
            <nav className="flex flex-col space-y-1 flex-1">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3.5 rounded-xl text-sm font-semibold tracking-wider uppercase transition-colors hover:bg-primary/10 hover:text-primary ${
                    scrolled || mobileMenuOpen ? "text-foreground" : "text-on-media"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-auto pt-8 pb-4">
                <a
                  href="https://wa.me/233278145334"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-4 text-base font-medium text-primary-foreground transition-all active:scale-[0.98] sm:hidden"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Get a WhatsApp Quote</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
