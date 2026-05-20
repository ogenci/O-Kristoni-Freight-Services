import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

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
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div
        className={`w-[85%] max-w-7xl rounded-full border transition-all duration-500 ${
          scrolled
            ? "border-border bg-background/70 text-foreground shadow-lg shadow-ink/5 backdrop-blur-xl"
            : "border-on-media/15 bg-on-media/10 text-on-media backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3 sm:px-7">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg leading-none">
              O
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-lg uppercase flex justify-between w-full">
                {"O'KRISTONI".split("").map((char, i) => (
                  <span key={i}>{char}</span>
                ))}
              </span>
              <span
                className={`text-[10px] uppercase tracking-[0.22em] ${
                  scrolled ? "text-muted-foreground" : "text-on-media/70"
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

          <a
            href="https://wa.me/233278145334"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp Quote</span>
            <span className="sm:hidden">Quote</span>
          </a>
        </div>
      </div>
    </header>
  );
}
