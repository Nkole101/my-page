import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Main navigation"
        className="pointer-events-auto glass-strong border-b border-border-subtle"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 lg:px-8">
          <a
            href="#hero"
            className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-text"
            aria-label="Martin Nkole Mwanza — home"
          >
            MN
          </a>

          <div className="hidden items-center gap-5 md:flex">
            {LINKS.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] uppercase tracking-[0.16em] transition-colors ${
                    isActive ? "text-accent" : "text-text-secondary hover:text-text"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent hover:text-accent-light"
            >
              Hire me
            </a>
          </div>

          <button
            type="button"
            className="p-1 text-text-secondary transition-colors hover:text-text md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto glass-strong border-b border-border-subtle md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-4">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-[11px] uppercase tracking-[0.16em] text-text-secondary hover:text-text"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
