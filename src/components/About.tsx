import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const STATS = [
  { val: "800+", label: "End users supported" },
  { val: "6", label: "ERP modules customised" },
  { val: "30+", label: "Custom DocTypes built" },
  { val: "3", label: "Client organisations" },
];

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 font-mono text-[11px] tracking-[0.4em] text-indigo-500 uppercase">01 — About</p>
          <h2 className="mb-8 font-display text-4xl font-black leading-[0.95] text-slate-900 md:text-5xl">
            Building the <span className="text-gradient">systems behind it.</span>
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-slate-600">
            <p>
              Final-year Computer Science and Software Engineering student at the University of Zambia,
              with active production internship experience across ERP development, full-stack engineering,
              and enterprise system administration.
            </p>
            <p>
              I'm currently building <strong className="text-slate-900">CCIS</strong>, a full-stack parish
              records management system, as my final-year capstone project — and shipping ERP
              customisations for real client organisations by day.
            </p>
          </div>
          <div className="mt-8 flex gap-6">
            <a href="https://github.com/Nkole101" target="_blank" rel="noreferrer" className="text-slate-400 transition-colors hover:text-indigo-500">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/nkole-mwanza" target="_blank" rel="noreferrer" className="text-slate-400 transition-colors hover:text-indigo-500">
              <Linkedin size={20} />
            </a>
            <a href="mailto:Martinmwanza24@gmail.com" className="text-slate-400 transition-colors hover:text-indigo-500">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 gap-3"
        >
          {STATS.map(({ val, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-indigo-300"
            >
              <div className="font-display text-4xl leading-none font-black text-indigo-500">{val}</div>
              <div className="mt-2 font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
