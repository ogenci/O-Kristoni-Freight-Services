import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import { useRef } from "react";
import heroPoster from "@/assets/hero-poster.jpg";

const HERO_VIDEO =
  "https://videos.pexels.com/video-files/4488696/4488696-uhd_2560_1440_24fps.mp4";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative isolate min-h-[100svh] overflow-hidden bg-ink">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
          className="h-full w-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grain opacity-30" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-16 pt-40 text-on-media lg:px-10 lg:pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-on-media/20 bg-on-media/5 px-3.5 py-1.5 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-jade" />
          <span className="text-xs uppercase tracking-[0.2em] text-on-media/75">
            International Freight Forwarders · Ghana
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl text-balance text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-[5.5rem]"
        >
          Your cargo lands in Ghana -{" "}
          <em className="not-italic text-primary">cleared, costed,</em> and on time.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-6 max-w-2xl text-pretty text-lg text-on-media/80 sm:text-xl"
        >
          Surprise duties, port delays, lost containers - gone. We handle sea & air freight from
          9+ origin countries into Tema, Accra, Takoradi, Aflao and Elubo with transparent pricing
          and expert customs clearing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="https://wa.me/233278145334"
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground transition-all hover:scale-[1.02]"
            style={{ boxShadow: "0 10px 40px -10px var(--cargo)" }}
          >
            <MessageCircle className="h-5 w-5" />
            Get My Free Duty Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-on-media/25 bg-on-media/5 px-6 py-4 text-base text-on-media backdrop-blur transition-colors hover:bg-on-media/15"
          >
            See how we ship
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="mt-5 text-sm text-on-media/70"
        >
          Free estimate · HS-code verified · Reply within 1 hour
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-on-media/15 pt-6"
        >
          <div className="flex items-center gap-1.5 text-sm">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
            ))}
            <span className="ml-2 text-on-media/70">
              Trusted by Ghanaian importers since day one
            </span>
          </div>
          <div className="hidden h-6 w-px bg-on-media/20 md:block" />
          <div className="text-sm text-on-media/70">
            <span className="text-on-media">9+</span> origin countries ·{" "}
            <span className="text-on-media">5</span> Ghana hubs
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
