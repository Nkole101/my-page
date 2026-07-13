import { useEffect, useRef } from "react";

const CODE_LINES: { width: string; color?: string }[] = [
  { width: "38%", color: "#818cf8" },
  { width: "68%" },
  { width: "52%", color: "#22d3ee" },
  { width: "78%" },
  { width: "34%", color: "#fbbf24" },
  { width: "58%" },
  { width: "44%", color: "#818cf8" },
];

/**
 * A hinged CSS-3D laptop: the screen and keyboard are plain stacked block
 * elements sharing one edge, so rotating the screen around its bottom edge
 * and the keyboard around its top edge pivots both around the same hinge
 * line. `.laptop-rig` gets the live mouse-driven tilt; the static parent
 * tilt gives the resting three-quarter product-shot angle.
 */
export function HeroLaptop() {
  const rigRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    function handleMove(e: MouseEvent) {
      target.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    }
    function handleLeave() {
      target.current = { x: 0, y: 0 };
    }

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseout", handleLeave, { passive: true });

    let raf = 0;
    function tick() {
      current.current.x += (target.current.x - current.current.x) * 0.07;
      current.current.y += (target.current.y - current.current.y) * 0.07;
      const rig = rigRef.current;
      if (rig) {
        const rotY = current.current.x * 16;
        const rotX = current.current.y * -9;
        rig.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      }
      raf = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
    };
  }, []);

  return (
    <div className="laptop-scene" aria-hidden="true">
      <div className="laptop-float">
        <div className="laptop-viewport">
          <div ref={rigRef} className="laptop-rig">
            <div className="laptop-screen">
              <div className="laptop-screen-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="laptop-screen-lines">
                {CODE_LINES.map((line, i) => (
                  <span
                    key={i}
                    style={{ width: line.width, background: line.color ?? "rgba(255,255,255,0.16)" }}
                  />
                ))}
              </div>
            </div>
            <div className="laptop-keyboard">
              <div className="laptop-trackpad" />
            </div>
          </div>
        </div>
        <div className="laptop-shadow" />
      </div>
    </div>
  );
}
