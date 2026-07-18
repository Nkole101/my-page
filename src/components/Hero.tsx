import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/motion";
import { AnimatedButton } from "./ui/AnimatedButton";
import { HoverName } from "./ui/HoverName";
import { ImageBackground } from "./ImageBackground";

const HERO_BG = `${import.meta.env.BASE_URL}hero-bg.png`;

export function Hero() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      aria-labelledby="hero-heading"
    >
      <ImageBackground src={HERO_BG} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-3xl px-6 text-center"
      >
        <motion.div variants={fadeUp}>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-bg/30 px-8 py-10 backdrop-blur-md md:px-12 md:py-12"
          >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-text-secondary"
          >
            Software Engineer · Lusaka, Zambia
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.08] tracking-tight"
          >
            <HoverName
              id="hero-heading"
              lines={["Martin Nkole", "Mwanza"]}
              className="inline-block"
            />
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg"
          >
            Full-stack engineer building ERP customisations, production web apps, and CCIS parish
            records from Zambia.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-6"
          >
            <AnimatedButton href="#projects">View projects</AnimatedButton>
            <AnimatedButton href="#contact" variant="secondary">
              Get in touch
            </AnimatedButton>
          </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-muted transition-colors hover:text-text md:flex"
        aria-label="Go to about section"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Next</span>
        <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </div>
  );
}
