import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import { AnimatedButton } from "./ui/AnimatedButton";

const STATS = [
  { val: "800+", label: "End users supported" },
  { val: "6", label: "ERP modules customised" },
  { val: "30+", label: "Custom DocTypes built" },
];

const SOCIAL = [
  { href: "https://github.com/Nkole101", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/nkole-mwanza", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:Martinmwanza24@gmail.com", icon: Mail, label: "Email" },
];

export function About() {
  return (
    <div className="mx-auto w-full max-w-6xl" aria-labelledby="about-heading">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <motion.p variants={fadeUp} className="mb-4 text-[11px] uppercase tracking-[0.2em] text-accent">
          About
        </motion.p>

        <motion.h2
          id="about-heading"
          variants={fadeUp}
          className="max-w-3xl font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-text"
        >
          Over years of building — now shipping production systems for real organisations
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="mt-12 grid gap-10 border-t border-border-subtle pt-10 md:grid-cols-3"
        >
          {STATS.map(({ val, label }) => (
            <div key={label}>
              <p className="font-display text-4xl font-semibold text-accent md:text-5xl">{val}</p>
              <p className="mt-2 text-sm text-text-secondary">{label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-text-secondary md:text-base">
            <p>
              Final-year Computer Science and Software Engineering student at the University of Zambia,
              with production internship experience across ERP development, full-stack engineering, and
              enterprise administration.
            </p>
            <p>
              I ship ERP customisations by day and build{" "}
              <strong className="font-medium text-text">CCIS</strong> — a full-stack parish records system
              — as my capstone project.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {SOCIAL.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={label}
                className="text-text-secondary transition-colors hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
            <AnimatedButton href="#projects">View work</AnimatedButton>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
