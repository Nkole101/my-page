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
import { SectionHeader } from "./ui/SectionHeader";

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
    <section id="stack" className="relative bg-surface/30 px-6 py-28 lg:px-8 lg:py-36" aria-labelledby="stack-heading">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Tech stack"
          title="Tools I build with"
          description="A modern, battle-tested stack for full-stack products, enterprise integrations, and scalable backend systems."
        />
        <h2 id="stack-heading" className="sr-only">
          Technology stack
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {STACK.map(({ name, icon: Icon, category }, i) => (
            <motion.div
              key={name}
              variants={fadeUp}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass group flex flex-col items-center rounded-3xl p-6 text-center transition-colors hover:border-accent/20"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent ring-1 ring-accent/20 transition-all group-hover:bg-accent/15 group-hover:ring-accent/40">
                <Icon size={24} strokeWidth={1.5} />
              </div>
              <p className="font-display text-sm font-semibold text-text">{name}</p>
              <p className="mt-1 text-xs text-text-muted">{category}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
