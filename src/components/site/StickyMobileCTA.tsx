import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function StickyMobileCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky-mobile-cta fixed inset-x-3 bottom-3 z-50 md:hidden transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="https://wa.me/233278145334"
        target="_blank"
        rel="noopener"
        className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-medium text-primary-foreground"
        style={{ boxShadow: "0 20px 50px -10px var(--cargo)" }}
      >
        <MessageCircle className="h-5 w-5" />
        Get my free duty quote
      </a>
    </div>
  );
}
