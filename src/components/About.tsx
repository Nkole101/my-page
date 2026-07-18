import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import { SectionHeader } from "./ui/SectionHeader";
import { StatCard } from "./ui/StatCard";

const STATS = [
  { val: "800+", label: "End users supported across deployments" },
  { val: "6", label: "ERP modules customised in production" },
  { val: "30+", label: "Custom DocTypes built and configured" },
  { val: "3", label: "Client organisations served" },
];

const SOCIAL = [
  { href: "https://github.com/Nkole101", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/nkole-mwanza", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:Martinmwanza24@gmail.com", icon: Mail, label: "Email" },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-28 lg:px-8 lg:py-36" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="About"
          title="Engineering systems that scale"
          description="Final-year Computer Science student with hands-on production experience across ERP development, full-stack engineering, and enterprise administration."
        />

        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeUp} className="glass rounded-3xl p-8 md:p-10">
              <h3 id="about-heading" className="sr-only">
                About Martin Nkole Mwanza
              </h3>
              <div className="space-y-5 text-base leading-relaxed text-text-secondary">
                <p>
                  I'm a final-year Computer Science and Software Engineering student at the University
                  of Zambia, with active production internship experience across ERP development,
                  full-stack engineering, and enterprise system administration.
                </p>
                <p>
                  By day I ship ERP customisations for client organisations. By night I'm building{" "}
                  <strong className="font-medium text-text">CCIS</strong> — a full-stack parish records
                  management system — as my capstone project.
                </p>
              </div>

              <div className="mt-8 flex gap-3">
                {SOCIAL.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={label}
                    className="glass flex h-11 w-11 items-center justify-center rounded-2xl text-text-secondary transition-colors hover:border-accent/30 hover:text-accent"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map(({ val, label }, i) => (
              <StatCard key={label} value={val} label={label} delay={i * 0.08} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
