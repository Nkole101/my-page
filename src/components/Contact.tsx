import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy px-6 py-24 md:py-36">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-6 font-mono text-[11px] tracking-[0.4em] text-cyan-300 uppercase">06 — Contact</p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8 font-display font-black leading-[0.95] text-white"
        >
          <span className="block text-[clamp(2rem,7vw,4.5rem)]">Let's build</span>
          <span className="text-gradient block text-[clamp(2rem,7vw,4.5rem)]">something great.</span>
        </motion.h2>

        <p className="mx-auto mb-10 max-w-sm text-base leading-relaxed text-slate-300">
          Open to internships, freelance work, and full-time software engineering roles.
        </p>

        <a
          href="mailto:Martinmwanza24@gmail.com"
          className="mb-12 inline-block border-b-2 border-cyan-400/40 pb-1 font-display text-xl font-bold text-cyan-300 transition-colors hover:border-cyan-300 md:text-2xl"
        >
          Martinmwanza24@gmail.com
        </a>

        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="https://github.com/Nkole101"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-slate-300 transition-colors hover:text-cyan-300"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/nkole-mwanza"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-slate-300 transition-colors hover:text-cyan-300"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="mailto:Martinmwanza24@gmail.com"
            className="flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-slate-300 transition-colors hover:text-cyan-300"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href="/cv/Nkole_Mwanza_CV.pdf"
            download
            className="flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-slate-300 transition-colors hover:text-cyan-300"
          >
            <Download size={16} /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
