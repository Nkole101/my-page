import { motion } from "framer-motion";
import {
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers,
  Server,
  Shield,
} from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";

const STACK = [
  { name: "React 19", icon: Layers, category: "Frontend" },
  { name: "TypeScript", icon: Code2, category: "Language" },
  { name: "Node.js", icon: Server, category: "Backend" },
  { name: "PostgreSQL", icon: Database, category: "Database" },
  { name: "FastAPI", icon: Braces, category: "Backend" },
  { name: "ERPNext", icon: Cloud, category: "ERP" },
  { name: "Git & CI/CD", icon: GitBranch, category: "DevOps" },
  { name: "RBAC & Auth", icon: Shield, category: "Security" },
];

export function TechStack() {
  return (
    <div className="mx-auto w-full max-w-6xl" aria-labelledby="stack-heading">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-accent">Tech stack</p>
        <h2
          id="stack-heading"
          className="font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight tracking-tight text-text"
        >
          Tools I build with
        </h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid grid-cols-2 gap-3 sm:grid-cols-4"
      >
        {STACK.map(({ name, icon: Icon, category }, i) => (
          <motion.div
            key={name}
            variants={fadeUp}
            transition={{ delay: i * 0.04 }}
            className="glass rounded-2xl p-4 text-center transition-transform hover:-translate-y-1"
          >
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center text-accent">
              <Icon size={20} strokeWidth={1.5} />
            </div>
            <p className="text-xs font-semibold text-text">{name}</p>
            <p className="mt-0.5 text-[10px] text-text-muted">{category}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
