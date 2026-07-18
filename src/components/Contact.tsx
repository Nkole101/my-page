import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Send } from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/motion";
import { AnimatedButton } from "./ui/AnimatedButton";

export function Contact() {
  return (
    <div className="relative mx-auto flex min-h-[70dvh] w-full max-w-3xl flex-col justify-center text-center" aria-labelledby="contact-heading">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.p variants={fadeUp} className="mb-3 text-[11px] uppercase tracking-[0.2em] text-accent">
          Contact
        </motion.p>

        <motion.h2
          id="contact-heading"
          variants={fadeUp}
          className="font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-tight tracking-tight text-text"
        >
          Let's build something{" "}
          <span className="text-gradient-accent">exceptional</span>
        </motion.h2>

        <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-text-secondary">
          Open to freelance projects, collaborations, and engineering roles.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <AnimatedButton href="mailto:Martinmwanza24@gmail.com" icon={<Send size={14} />}>
            Send email
          </AnimatedButton>
          <AnimatedButton
            href={`${import.meta.env.BASE_URL}cv/Nkole_Mwanza_CV.pdf`}
            download
            variant="secondary"
            icon={<Download size={14} />}
          >
            Download CV
          </AnimatedButton>
        </motion.div>

        <motion.a
          variants={fadeUp}
          href="mailto:Martinmwanza24@gmail.com"
          className="mt-6 inline-block text-sm text-text-secondary transition-colors hover:text-accent"
        >
          Martinmwanza24@gmail.com
        </motion.a>

        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-5">
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
              className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-text-secondary transition-colors hover:text-accent"
            >
              <Icon size={14} />
              {label}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
