import { useEffect, useState } from "react";

const SECTION_IDS = ["hero", "about", "projects", "stack", "experience", "skills", "education", "contact"];

export function useActiveSection(rootId = "scroll-root") {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const root = document.getElementById(rootId);
    if (!root) return;

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { root, threshold: [0.35, 0.5, 0.65] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [rootId]);

  return active;
}

export { SECTION_IDS };
