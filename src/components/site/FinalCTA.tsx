import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { MessageCircle, Mail, ArrowRight, Phone, Loader2, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import poster from "@/assets/hero-poster.jpg";

const quoteSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(6, "Enter a valid phone").max(30),
  origin: z.string().trim().min(2, "Where is it shipping from?").max(100),
  mode: z.enum(["sea", "air", "either"]),
  details: z.string().trim().min(5, "Add a few details").max(1000),
});

export function FinalCTA() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      origin: String(fd.get("origin") ?? ""),
      mode: String(fd.get("mode") ?? "either") as "sea" | "air" | "either",
      details: String(fd.get("details") ?? ""),
    };
    const parsed = quoteSchema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    try {
      const d = parsed.data;
      const msg = `New quote request%0A%0AName: ${d.name}%0AEmail: ${d.email}%0APhone: ${d.phone}%0AOrigin: ${d.origin}%0AMode: ${d.mode}%0A%0ADetails:%0A${encodeURIComponent(d.details)}`;
      window.open(`https://wa.me/233278145334?text=${msg}`, "_blank", "noopener");
      setSent(true);
      toast.success("Opening WhatsApp with your quote request");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="quote" className="relative isolate overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 -z-10">
        <img src={poster} alt="" loading="lazy" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">
                One message. One number. Your cargo moving.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-balance text-5xl leading-[1.02] sm:text-6xl">
                Send your invoice.{" "}
                <em className="not-italic text-primary">
                  Get an exact landed cost in 1 hour.
                </em>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl text-pretty text-lg text-muted-foreground">
                No call-back chasing. No vague "around $X". Just the real number you'll pay at the
                port - verified against the GRA tariff before your goods move.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/233278145334"
                  target="_blank"
                  rel="noopener"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.02]"
                  style={{ boxShadow: "0 10px 40px -10px var(--cargo)" }}
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp +233 27 814 5334
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="mailto:jonasghana@globalstewardsghana.com?subject=Freight%20quote%20request"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3.5 text-sm text-foreground backdrop-blur transition-colors hover:bg-card"
                >
                  <Mail className="h-5 w-5" />
                  Email invoice
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 text-jade" /> +233 27 814 5334
                </span>
                <span className="inline-flex items-center gap-2">
                  Black Star Line Building, Tema · Harbour Area
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} y={32}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-border bg-card/90 p-7 shadow-xl backdrop-blur sm:p-9"
            >
              <h3 className="font-display text-2xl text-foreground">Request a quote</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Reply within 1 hour, Mon–Sat.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Ama Mensah" required />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
                <Field label="Phone / WhatsApp" name="phone" placeholder="+233 ..." required />
                <Field label="Shipping from" name="origin" placeholder="Belgium, China …" required />
              </div>

              <div className="mt-4">
                <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Mode
                </label>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {(["sea", "air", "either"] as const).map((m, i) => (
                    <label
                      key={m}
                      className="cursor-pointer rounded-full border border-border bg-background/60 px-3 py-2 text-center text-sm capitalize text-foreground transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-primary-foreground"
                    >
                      <input type="radio" name="mode" value={m} defaultChecked={i === 0} className="sr-only" />
                      {m}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="details" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Cargo details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  required
                  maxLength={1000}
                  placeholder="What you're shipping, CBM / weight, ready date…"
                  className="mt-2 w-full rounded-xl border border-input bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>

              <button
                type="submit"
                disabled={submitting || sent}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.01] disabled:opacity-70"
              >
                {sent ? (
                  <><CheckCircle2 className="h-4 w-4" /> Sent - check WhatsApp</>
                ) : submitting ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                ) : (
                  <>Send quote request <ArrowRight className="h-4 w-4" /></>
                )}
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Free estimate · No obligation · We never spam.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={255}
        className="mt-2 w-full rounded-xl border border-input bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
