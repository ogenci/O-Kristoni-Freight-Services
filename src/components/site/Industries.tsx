import { Reveal } from "./Reveal";
import { Building2, ShoppingBag, Wrench, Stethoscope, Wheat, Cpu, Car, Sofa } from "lucide-react";
import construction from "@/assets/ind-construction.jpg";
import retail from "@/assets/ind-retail.jpg";
import machinery from "@/assets/ind-machinery.jpg";
import medical from "@/assets/ind-medical.jpg";
import agro from "@/assets/ind-agro.jpg";
import electronics from "@/assets/ind-electronics.jpg";
import auto from "@/assets/ind-auto.jpg";
import furniture from "@/assets/ind-furniture.jpg";

const industries = [
  { icon: Building2, label: "Construction", sub: "Building materials", image: construction },
  { icon: ShoppingBag, label: "Retail & E-commerce", sub: "Inventory & SKUs", image: retail },
  { icon: Wrench, label: "Machinery", sub: "Tools & spare parts", image: machinery },
  { icon: Stethoscope, label: "Medical", sub: "Lab equipment", image: medical },
  { icon: Wheat, label: "Agro-inputs", sub: "Food ingredients", image: agro },
  { icon: Cpu, label: "Electronics", sub: "IT hardware", image: electronics },
  { icon: Car, label: "Auto", sub: "Parts & vehicles", image: auto },
  { icon: Sofa, label: "Furniture", sub: "Home goods", image: furniture },
];

export function Industries() {
  return (
    <section id="industries" className="border-y border-border bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">
              Who we ship for
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-balance text-4xl leading-tight sm:text-5xl lg:text-6xl">
              From a single carton to a{" "}
              <em className="not-italic text-primary">40-foot container.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-pretty text-muted-foreground">
              We move freight for importers, traders, contractors and growing brands across every
              major sector in Ghana.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {industries.map((it, i) => (
            <Reveal key={it.label} delay={(i % 4) * 0.05} y={24}>
              <article className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <img
                  src={it.image}
                  alt={it.label}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent transition-opacity duration-500 group-hover:from-ink group-hover:via-ink/75" />

                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-on-media/30 bg-on-media/10 text-on-media backdrop-blur-md transition-colors duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <it.icon className="h-4 w-4" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg text-on-media sm:text-xl">{it.label}</h3>
                  <p className="mt-1 text-sm text-on-media/70">{it.sub}</p>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
