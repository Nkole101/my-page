import { useEffect, useRef } from "react";

type Vec3 = [number, number, number];

const rotX = (v: Vec3, a: number): Vec3 => {
  const [x, y, z] = v;
  return [x, y * Math.cos(a) - z * Math.sin(a), y * Math.sin(a) + z * Math.cos(a)];
};

const rotY = (v: Vec3, a: number): Vec3 => {
  const [x, y, z] = v;
  return [x * Math.cos(a) + z * Math.sin(a), y, -x * Math.sin(a) + z * Math.cos(a)];
};

const proj3 = (v: Vec3, cx: number, cy: number, sc: number): [number, number, number] => {
  const [x, y, z] = v;
  const p = 3 / (3 + z);
  return [cx + x * p * sc, cy + y * p * sc, z];
};

const PHI = (1 + Math.sqrt(5)) / 2;
const ILEN = Math.sqrt(1 + PHI * PHI);

const IVERTS: Vec3[] = (
  [
    [0, 1, PHI], [0, -1, PHI], [0, 1, -PHI], [0, -1, -PHI],
    [1, PHI, 0], [-1, PHI, 0], [1, -PHI, 0], [-1, -PHI, 0],
    [PHI, 0, 1], [-PHI, 0, 1], [PHI, 0, -1], [-PHI, 0, -1],
  ] as Vec3[]
).map(([x, y, z]) => [x / ILEN, y / ILEN, z / ILEN] as Vec3);

const IEDGES: [number, number][] = [
  [0, 1], [0, 4], [0, 5], [0, 8], [0, 9],
  [1, 6], [1, 7], [1, 8], [1, 9],
  [2, 3], [2, 4], [2, 5], [2, 10], [2, 11],
  [3, 6], [3, 7], [3, 10], [3, 11],
  [4, 5], [4, 8], [4, 10],
  [5, 9], [5, 11],
  [6, 7], [6, 8], [6, 10],
  [7, 9], [7, 11],
  [8, 10], [9, 11],
];

/**
 * Contained to the hero band only — a softer, indigo/cyan palette on a navy
 * (not near-black) ground so the "3D orb" energy doesn't tip the whole site dark.
 */
export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;
    let t = 0;
    let w = 0;
    let h = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function updateSize() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      if (w === 0 || h === 0) return;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const ro = new ResizeObserver(updateSize);
    ro.observe(canvas);
    updateSize();

    const NP = 60;
    const particles = Array.from({ length: NP }, () => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.55 + Math.random() * 0.9;
      return {
        pos: [r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi)] as Vec3,
        sz: Math.random() * 1.5 + 0.4,
      };
    });

    const RN = 84;
    function makeRing(tilt: number, radius: number): Vec3[] {
      return Array.from({ length: RN + 1 }, (_, i) => {
        const a = (i / RN) * Math.PI * 2;
        return rotX([Math.cos(a) * radius, 0, Math.sin(a) * radius] as Vec3, tilt);
      });
    }

    const rings = [
      { pts: makeRing(0.42, 1.38), color: "#818cf8", speed: 0.42 },
      { pts: makeRing(1.12, 1.54), color: "#22d3ee", speed: -0.28 },
      { pts: makeRing(0.78, 1.7), color: "#fbbf24", speed: 0.17 },
    ];

    function draw() {
      if (!ctx) return;
      if (w === 0 || h === 0) {
        animId = requestAnimationFrame(draw);
        return;
      }

      const cx = w / 2;
      const cy = h / 2;
      const sc = Math.min(w, h) * 0.3;

      ctx.clearRect(0, 0, w, h);

      const nebula = ctx.createRadialGradient(cx, cy, sc * 0.2, cx, cy, sc * 2.0);
      nebula.addColorStop(0, "rgba(99,102,241,0.1)");
      nebula.addColorStop(0.45, "rgba(34,211,238,0.05)");
      nebula.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = nebula;
      ctx.fillRect(0, 0, w, h);

      const coreR = sc * 0.1;
      const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR);
      core.addColorStop(0, "rgba(255,255,255,0.95)");
      core.addColorStop(0.3, "rgba(34,211,238,0.85)");
      core.addColorStop(0.7, "rgba(34,211,238,0.25)");
      core.addColorStop(1, "rgba(34,211,238,0)");
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(cx, cy, coreR, 0, Math.PI * 2);
      ctx.fill();

      const rv = IVERTS.map((v) => rotX(rotY(v, t * 0.3), t * 0.12));
      const pv = rv.map((v) => proj3(v, cx, cy, sc));

      ctx.lineWidth = 0.9;
      ctx.shadowColor = "#22d3ee";
      for (const [a, b] of IEDGES) {
        const [x1, y1, z1] = pv[a];
        const [x2, y2, z2] = pv[b];
        const avgZ = (z1 + z2) / 2;
        const alpha = Math.max(0.05, Math.min(0.75, 0.14 + 0.55 * ((avgZ + 1) / 2)));
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = "#22d3ee";
        ctx.shadowBlur = 7;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      ctx.shadowBlur = 14;
      for (const [x, y, z] of pv) {
        const alpha = Math.max(0.1, Math.min(0.9, 0.3 + 0.55 * ((z + 1) / 2)));
        ctx.globalAlpha = alpha;
        ctx.fillStyle = "#a5f3fc";
        ctx.beginPath();
        ctx.arc(x, y, 2.6, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      ctx.lineWidth = 1;
      for (const ring of rings) {
        const spin = t * ring.speed;
        ctx.strokeStyle = ring.color;
        ctx.shadowColor = ring.color;
        ctx.shadowBlur = 5;
        for (let i = 0; i < RN; i++) {
          const p1 = rotY(ring.pts[i], spin);
          const p2 = rotY(ring.pts[i + 1], spin);
          const [x1, y1, z1] = proj3(p1, cx, cy, sc);
          const [x2, y2] = proj3(p2, cx, cy, sc);
          const alpha = Math.max(0, Math.min(0.7, 0.06 + 0.55 * ((z1 + 1.7) / 3.4)));
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;

      ctx.shadowBlur = 5;
      ctx.shadowColor = "#a5f3fc";
      ctx.fillStyle = "#a5f3fc";
      for (const { pos, sz } of particles) {
        const rp = rotX(rotY(pos, t * 0.08), t * 0.05);
        const [px, py, pz] = proj3(rp, cx, cy, sc);
        const alpha = Math.max(0, Math.min(0.55, 0.08 + 0.35 * ((pz + 2.45) / 4.9)));
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(px, py, sz * 0.7, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      if (!reducedMotion) t += 0.007;
      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />;
}
