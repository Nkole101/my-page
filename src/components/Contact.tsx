import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Send } from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/motion";
import { AnimatedButton } from "./ui/AnimatedButton";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28 lg:px-8 lg:py-40" aria-labelledby="contact-heading">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-80" />
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </motion.p>

          <motion.h2
            id="contact-heading"
            variants={fadeUp}
            className="font-display text-[clamp(2rem,6vw,3.5rem)] font-semibold leading-tight tracking-tight text-text"
          >
            Let's build something{" "}
            <span className="text-gradient-accent">exceptional</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-text-secondary">
            Open to freelance projects, collaborations, and engineering roles. Reach out — I typically respond
            within 24 hours.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <AnimatedButton href="mailto:Martinmwanza24@gmail.com" icon={<Send size={16} />}>
              Send an email
            </AnimatedButton>
            <AnimatedButton
              href={`${import.meta.env.BASE_URL}cv/Nkole_Mwanza_CV.pdf`}
              download
              variant="secondary"
              icon={<Download size={16} />}
            >
              Download CV
            </AnimatedButton>
          </motion.div>

          <motion.a
            variants={fadeUp}
            href="mailto:Martinmwanza24@gmail.com"
            className="mt-8 inline-block text-lg font-medium text-text-secondary transition-colors hover:text-accent"
          >
            Martinmwanza24@gmail.com
          </motion.a>

          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { href: "https://github.com/Nkole101", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/nkole-mwanza", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:Martinmwanza24@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
