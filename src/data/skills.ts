export interface SkillGroup {
  category: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React 19", "Vite", "React Router", "Recharts", "Framer Motion", "Lucide React", "Responsive CSS", "PWA / Service Workers"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "REST API design", "JWT", "bcrypt", "HttpOnly cookies"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite", "Redis", "SQLAlchemy", "Query optimisation", "Data migration"],
  },
  {
    category: "ERP & Business Systems",
    items: ["ERPNext", "Frappe", "Custom DocTypes", "Workflow Automation", "Server Scripts", "Client Scripts", "Requirements Analysis"],
  },
  {
    category: "DevOps & Version Control",
    items: ["Git", "GitHub", "GitHub Pages", "GitHub Actions (CI/CD)", "Nginx", "Branch-based deployment"],
  },
  {
    category: "Languages",
    items: ["Python", "JavaScript", "Java", "SQL", "Kotlin", "HTML5", "CSS3", "Bash"],
  },
];
