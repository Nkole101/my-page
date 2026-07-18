import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Main navigation"
        className={`transition-all duration-300 ${
          scrolled ? "glass-strong border-b border-border-subtle shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#hero"
            className="group flex items-center gap-2 font-display text-sm font-semibold tracking-tight text-text"
            aria-label="Martin Nkole Mwanza — home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent/10 text-xs font-bold text-accent ring-1 ring-accent/20 transition-all group-hover:bg-accent/15 group-hover:ring-accent/40">
              MN
            </span>
            <span className="hidden sm:inline">Martin Nkole</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3.5 py-2 text-sm text-text-secondary transition-colors hover:bg-white/[0.04] hover:text-text"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 rounded-none bg-accent px-4 py-2 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
            >
              Hire me
            </a>
          </div>

          <button
            type="button"
            className="rounded-xl p-2 text-text-secondary transition-colors hover:bg-white/[0.06] hover:text-text md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
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
            className="glass-strong border-b border-border-subtle md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-white/[0.04] hover:text-text"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-none bg-accent px-4 py-3 text-center text-sm font-semibold text-bg"
              >
                Hire me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
