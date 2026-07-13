import { ChevronDown } from "lucide-react";
import { HeroLaptop } from "./HeroLaptop";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_35%,rgba(99,102,241,0.16),transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-paper to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-8 font-mono text-xs tracking-[0.4em] text-cyan-300/90">
          SOFTWARE ENGINEER — SOLUTIONS EXPERT
        </p>

        <div className="mb-8">
          <HeroLaptop />
        </div>

        <h1 className="mb-8 font-display font-black leading-[0.95] tracking-tight">
          <span className="block text-[clamp(2.4rem,8vw,5.5rem)] text-white">Martin Nkole</span>
          <span className="text-gradient block text-[clamp(2.4rem,8vw,5.5rem)]">Mwanza</span>
        </h1>

        <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed font-light text-slate-300 md:text-lg">
          Full-stack engineer building ERP customisations, production web apps, and{" "}
          <span className="text-cyan-300">CCIS</span> — a parish records system — from Lusaka, Zambia.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-white px-8 py-3.5 font-mono text-xs font-bold tracking-[0.25em] text-navy uppercase transition-transform hover:scale-105"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/25 px-8 py-3.5 font-mono text-xs tracking-[0.25em] text-white uppercase transition-colors hover:border-cyan-300/60 hover:bg-white/5"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-60">
        <span className="font-mono text-[10px] tracking-[0.35em] text-slate-300">SCROLL</span>
        <ChevronDown size={16} className="animate-bounce text-cyan-300" />
      </div>
    </section>
  );
}
