export interface CaseStudyDiagramNode {
  label: string;
  detail: string;
}

export interface PwaPlatformGuide {
  platform: string;
  steps: string[];
}

export interface Project {
  slug: string;
  title: string;
  period: string;
  tagline: string;
  description: string;
  tech: string[];
  accent: string;
  previewGradient: string;
  previewLabel: string;
  repoUrl?: string;
  liveUrl?: string;
  private?: boolean;
  caseStudy?: {
    problem: string;
    role: string;
    decisions: string[];
    diagram: CaseStudyDiagramNode[];
  };
  pwaGuide?: PwaPlatformGuide[];
}

export const PROJECTS: Project[] = [
  {
    slug: "ccis",
    title: "CCIS — Catholic Community Information System",
    period: "Jan 2026 — Present",
    tagline: "Final-year capstone · Parish records management system",
    description:
      "A production-grade records system for St Gabriel Parish covering families, Small Christian Communities (SCCs), member profiles, and the full parish register — baptism, confirmation, marriage, communion, and death.",
    tech: ["React 19", "Vite", "Express", "PostgreSQL", "JWT", "bcrypt", "Framer Motion", "Recharts"],
    accent: "#5a8f6b",
    previewGradient: "linear-gradient(135deg, #0f1a14 0%, #050805 50%, #111612 100%)",
    previewLabel: "CCIS Dashboard",
    private: true,
    caseStudy: {
      problem:
        "St Gabriel Parish tracked families, SCC membership, and sacramental records (baptism, confirmation, marriage, death) on paper, making reporting, cross-referencing, and access control slow and error-prone.",
      role:
        "Sole designer and developer — schema, API, frontend, auth, and deployment, as the capstone project for my B.Sc. at the University of Zambia.",
      decisions: [
        "Data-driven RBAC: roles and permissions live as rows in the database (roles / role_permissions), not a hardcoded allowlist — granting a role a new capability is a data change, not a code deploy. scc_leader accounts are scoped to exactly one SCC via user_scopes.",
        "Auth via JWT in an HttpOnly cookie rather than localStorage, with short-lived hashed tokens for email verification and password reset, and a console-link fallback so the flow is testable without a configured email provider.",
        "Relational schema across 6 core tables (SCCs, families, members, users, auth tokens, parish register entries) with a marriage stored as one shared record linked to both spouses, not a duplicated row per person.",
        "Every schema change goes through versioned migration files, with backend tests covering the RBAC and register logic.",
        "Export system: a column-picker panel drives PDF exports (admin/scc_leader/superadmin) and CSV exports (superadmin only), plus a Reports page for parish-wide aggregates (sacrament summary, demographics).",
      ],
      diagram: [
        { label: "React 19 + Vite client", detail: "React Router · Recharts dashboards · Framer Motion · light/dark theme" },
        { label: "Express REST API", detail: "Route-level RBAC middleware on every mutation and sensitive read" },
        { label: "PostgreSQL", detail: "Versioned migrations · roles/role_permissions grant matrix · user_scopes" },
      ],
    },
  },
  {
    slug: "currency-converter",
    title: "Currency Converter",
    period: "2025",
    tagline: "Python CLI, FastAPI service, and installable PWA",
    description:
      "Real-time conversion across 150+ currencies with zero configuration. A shared OOP core (converter.py / api.py / utils.py / logger.py) powers both an argparse CLI and a thin FastAPI backend, with a React + Vite PWA frontend installable on iOS, Windows, and desktop browsers.",
    tech: ["Python", "FastAPI", "React", "Vite", "vite-plugin-pwa", "Workbox", "REST API"],
    accent: "#4a7c59",
    previewGradient: "linear-gradient(135deg, #0a1210 0%, #050805 45%, #0e1210 100%)",
    previewLabel: "Currency PWA",
    repoUrl: "https://github.com/Nkole101/currency-converter-cli",
    liveUrl: "https://currency-converter-cli.vercel.app",
    pwaGuide: [
      {
        platform: "iOS (iPhone / iPad)",
        steps: [
          "Open the link in Safari — iOS only allows installing PWAs from Safari, not Chrome.",
          "Tap the Share icon in the toolbar.",
          'Scroll down and tap "Add to Home Screen".',
          'Tap "Add" — the app now launches full-screen from your Home Screen, no browser bar.',
        ],
      },
      {
        platform: "Android",
        steps: [
          "Open the link in Chrome.",
          "Tap the three-dot menu in the top right.",
          'Tap "Install app" (or "Add to Home screen").',
          "Confirm the prompt — it installs with its own icon and launches like a native app.",
        ],
      },
      {
        platform: "Windows / macOS",
        steps: [
          "Open the link in Chrome or Edge.",
          "Click the install icon in the address bar (a monitor with a down arrow, or a plus icon).",
          'Click "Install" in the prompt that appears.',
          "It opens in its own app window and gets added to your Start Menu / Applications folder.",
        ],
      },
    ],
  },
];
