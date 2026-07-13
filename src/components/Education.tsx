import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck } from "lucide-react";

const CERTIFICATIONS = [
  "CCNA – Introduction to Networks",
  "IT Essentials – PC Hardware and Software",
  "NDG Linux Essentials",
  "NDG Linux Unhatched",
];

export function Education() {
  return (
    <section id="education" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 font-mono text-[11px] tracking-[0.4em] text-indigo-500 uppercase">05 — Education</p>
          <h2 className="mb-14 font-display text-4xl font-black leading-[0.95] text-slate-900 md:text-5xl">
            Foundations.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex gap-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <GraduationCap className="mt-1 shrink-0 text-indigo-500" size={28} />
          <div>
            <h3 className="font-display text-xl font-bold text-slate-900">
              B.Sc. Computer Science &amp; Software Engineering
            </h3>
            <p className="mb-3 text-sm text-slate-500">University of Zambia (UNZA) · Expected Nov 2026</p>
            <p className="text-[14px] leading-relaxed text-slate-600">
              Concentrations in AI &amp; Modelling, Database Management Systems, and Software Development.
              Final-year capstone: <strong className="text-slate-900">CCIS — Catholic Community Information
              System</strong> (see Projects).
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <div className="mb-4 flex items-center gap-3">
            <ShieldCheck className="text-indigo-500" size={22} />
            <h3 className="font-display text-lg font-bold text-slate-900">Certifications</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {CERTIFICATIONS.map((cert) => (
              <span
                key={cert}
                className="rounded-full border border-slate-200 px-3.5 py-1.5 text-[13px] text-slate-600"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
