export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
  tech: string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Software Engineer Intern — ERP Developer",
    org: "Innovative Dynamics Ltd · Automate E ERP Platform",
    period: "Nov 2025 — Present",
    location: "Lusaka, Zambia (On-site)",
    bullets: [
      "Contributed to ERP deployments across 2 client organisations, supporting implementations that onboarded and trained over 400 employees.",
      "Customised 6 core modules — Procurement, HR, Finance & Accounting, Maintenance, Billing, Payroll — building client-specific workflows, validation logic, and UI beyond standard platform capabilities.",
      "Created and configured 30+ custom DocTypes to model new business data structures, and extended many existing DocTypes to meet client requirements.",
      "Configured end-to-end workflow automation and multi-level approval chains, cutting procurement cycle times by an estimated 40–70% and HR administrative effort by 50–80%.",
      "Performed REST API integrations, database configuration, data migration, and query optimisation on MySQL-backed production systems.",
      "Administered user accounts, role-based access controls, and permission structures aligned to organisational hierarchies.",
    ],
    tech: ["ERPNext", "Frappe", "Python", "JavaScript", "MySQL", "REST APIs", "RBAC", "Custom DocTypes"],
  },
];
