import { Reveal } from "./Reveal";
import { Ship, Plane, Warehouse, FileCheck2, Truck, Container, ArrowUpRight } from "lucide-react";
import containers from "@/assets/containers-aerial.jpg";
import airCargo from "@/assets/air-cargo.jpg";
import warehouse from "@/assets/warehouse.jpg";
import customs from "@/assets/customs.jpg";
import trucking from "@/assets/trucking.jpg";
import projectCargo from "@/assets/project-cargo.jpg";

const services = [
  {
    icon: Ship,
    title: "Sea Freight",
    tag: "FCL · LCL",
    body: "Full-container and consolidated cargo from $140/CBM. We handle the bill of lading, the line, and the wait.",
    image: containers,
    alt: "Aerial view of colorful shipping containers stacked at a port terminal",
  },
  {
    icon: Plane,
    title: "Air Freight",
    tag: "From $6/KG",
    body: "Cleared, scanned, and on a truck within hours of landing at Kotoka International.",
    image: airCargo,
    alt: "Cargo plane being loaded with palletised freight on a floodlit tarmac at night",
  },
  {
    icon: FileCheck2,
    title: "Customs Clearance",
    tag: "GRA licensed",
    body: "HS classification, CIF, duty, VAT, NHIL, GETFund, COVID Levy - we do the math and pay the right number.",
    image: customs,
    alt: "Customs clearance documents stamped on a dark desk with a calculator",
  },
  {
    icon: Warehouse,
    title: "Bonded Warehousing",
    tag: "Tema Harbour",
    body: "Secure, GRA-bonded storage. Your goods stay safe and duty-deferred until you're ready to release.",
    image: warehouse,
    alt: "Premium bonded warehouse interior with palletised cargo under warm lighting",
  },
  {
    icon: Truck,
    title: "Door-to-Door Delivery",
    tag: "Nationwide",
    body: "From the port to your warehouse, shop or site - Accra, Tema, Kumasi, Takoradi, Aflao, Elubo.",
    image: trucking,
    alt: "Heavy duty container truck driving on a Ghana highway at golden hour",
  },
  {
    icon: Container,
    title: "Project & Heavy Cargo",
    tag: "Out-of-gauge",
    body: "Oversized, breakbulk and project cargo. Flatbeds, low-loaders, and crane coordination - handled.",
    image: projectCargo,
    alt: "Oversized industrial machinery being loaded onto a flatbed at a port at dusk",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">What we do</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-4xl text-balance text-4xl sm:text-5xl lg:text-6xl">
            One forwarder. <em className="not-italic text-primary">Every mode.</em> Every Ghana hub.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Six end-to-end services under one roof - so your cargo never gets handed off, dropped, or lost in translation.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={0.05 * i} y={28}>
              <article className="group relative h-[28rem] overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    width={1280}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10 transition-opacity duration-500 group-hover:from-ink group-hover:via-ink/80" />
                </div>

                {/* Top tag */}
                <div className="absolute left-5 top-5 flex items-center gap-2">
                  <span className="rounded-full border border-on-media/30 bg-on-media/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-on-media backdrop-blur-md">
                    {s.tag}
                  </span>
                </div>

                {/* Hover arrow */}
                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-on-media/30 bg-on-media/10 text-on-media backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:bg-primary group-hover:border-primary">
                  <ArrowUpRight className="h-4 w-4" />
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/90 text-primary-foreground">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-2xl text-on-media">{s.title}</h3>
                  </div>
                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                    <p className="overflow-hidden text-pretty text-on-media/80 opacity-0 transition-opacity duration-500 group-hover:pt-4 group-hover:opacity-100">
                      {s.body}
                    </p>
                  </div>
                </div>

                {/* Accent line */}
                <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
