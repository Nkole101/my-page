import { motion } from "framer-motion";
import {
  ArrowDown,
  Code2,
  Database,
  Layers,
  Server,
  Sparkles,
} from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/motion";
import { AnimatedButton } from "./ui/AnimatedButton";

const FLOATING_ICONS = [
  { Icon: Code2, x: "8%", y: "22%", delay: 0 },
  { Icon: Server, x: "88%", y: "18%", delay: 0.4 },
  { Icon: Database, x: "92%", y: "62%", delay: 0.8 },
  { Icon: Layers, x: "6%", y: "68%", delay: 1.2 },
  { Icon: Sparkles, x: "78%", y: "78%", delay: 0.6 },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden mesh-bg"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-60" />

      {FLOATING_ICONS.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute hidden lg:flex"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 0.35,
            scale: 1,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { delay, duration: 0.8 },
            scale: { delay, duration: 0.8 },
            y: { delay: delay + 1, duration: 5 + i, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="glass flex h-12 w-12 items-center justify-center rounded-2xl text-accent">
            <Icon size={20} strokeWidth={1.5} />
          </div>
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 lg:px-8 lg:py-40">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface/50 px-4 py-1.5 text-xs font-medium text-text-secondary backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Software Engineer · Lusaka, Zambia
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="font-display text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[1.05] tracking-tight text-text"
          >
            Martin Nkole{" "}
            <span className="text-gradient-accent">Mwanza</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl"
          >
            Full-stack engineer crafting ERP customisations, production web applications, and{" "}
            <span className="font-medium text-text">CCIS</span> — a parish records platform built
            for real-world scale.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-12 flex flex-col gap-4 sm:flex-row">
            <AnimatedButton href="#projects">View projects</AnimatedButton>
            <AnimatedButton href="#contact" variant="secondary">
              Get in touch
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-muted transition-colors hover:text-accent md:flex"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
}
