import { SECTION_IDS, useActiveSection } from "../hooks/useActiveSection";

const LABELS: Record<string, string> = {
  hero: "Home",
  about: "About",
  projects: "Projects",
  stack: "Stack",
  experience: "Experience",
  skills: "Skills",
  education: "Education",
  contact: "Contact",
};

export function PageIndicator() {
  const active = useActiveSection();

  return (
    <nav
      aria-label="Page sections"
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 lg:flex"
    >
      {SECTION_IDS.map((id) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-label={LABELS[id]}
            aria-current={isActive ? "true" : undefined}
            className="group flex items-center justify-end gap-2"
          >
            <span
              className={`max-w-0 overflow-hidden text-[10px] uppercase tracking-widest opacity-0 transition-all group-hover:max-w-[5rem] group-hover:opacity-100 ${
                isActive ? "text-accent" : "text-text-secondary"
              }`}
            >
              {LABELS[id]}
            </span>
            <span
              className={`block h-1.5 rounded-full transition-all ${
                isActive ? "w-6 bg-accent" : "w-1.5 bg-text-muted group-hover:bg-text-secondary"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
