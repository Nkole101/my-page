import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = ["About", "Experience", "Skills", "Projects", "Education", "Contact"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/85 backdrop-blur-lg shadow-[0_1px_0_rgba(255,255,255,0.08)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-display text-lg font-bold tracking-tight text-white">
          NM<span className="text-cyan-400">.</span>
        </a>

        <div className="hidden gap-8 md:flex">
          {LINKS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-xs uppercase tracking-[0.2em] text-slate-300 transition-colors hover:text-cyan-300"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className="text-slate-200 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-4 px-6 py-5">
            {LINKS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="font-mono text-sm uppercase tracking-[0.2em] text-slate-200 hover:text-cyan-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
