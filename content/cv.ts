/**
 * Single source of truth for the CV content.
 * Dates are ISO-ish strings: "YYYY" or "YYYY-MM". `end: null` means present.
 */

export interface Profile {
  name: string;
  headline: string;
  location: string;
  availability: string;
  email: string;
  links: {
    linkedin: { handle: string; url: string };
    github: { handle: string; url: string };
  };
}

export interface Role {
  org: string;
  title: string;
  start: string;
  end: string | null;
  /** What the company does, shown in muted text under the title. */
  context?: string;
  /** Extra framing, e.g. progression or part-time notes. */
  note?: string;
  tags?: string[];
  bullets: string[];
  /** Additional web-only detail, disclosed after the CV highlights. */
  details?: {
    label: string;
    bullets: string[];
  };
}

export interface School {
  org: string;
  title: string;
  /** Parenthesised detail, e.g. a grade. */
  detail?: string;
  start: string;
  end: string | null;
  tags?: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Cv {
  profile: Profile;
  /** Short description for search and social previews. */
  description: string;
  summary: string;
  experience: Role[];
  volunteering: Role[];
  education: School[];
  skills: SkillGroup[];
}

export const cv: Cv = {
  profile: {
    name: "Cameron Bloomfield",
    headline: "Front-End Focused Full-Stack Developer",
    location: "Newcastle, UK",
    availability: "Open to remote",
    email: "cam.w.bloomfield@gmail.com",
    links: {
      linkedin: { handle: "/cam-bloom", url: "https://www.linkedin.com/in/cam-bloom" },
      github: { handle: "/Cam-Bloom", url: "https://github.com/Cam-Bloom" },
    },
  },

  description:
    "Front-end-focused developer in Newcastle, UK, building React and TypeScript applications, shared component libraries, and full-stack products.",

  summary:
    "Front-end-focused developer with 3+ years' professional experience building React and TypeScript applications, shared component libraries, and development tooling. Co-founded an events business generating £100k+ in total sales and, as sole engineer, designed and built its customer portal and e-commerce platform. Currently leading team adoption of agentic AI development (Claude Code).",

  experience: [
    {
      org: "Isherwoods",
      title: "Software Developer",
      start: "2024-11",
      end: null,
      context:
        "Marine engineering company supplying maintenance-management and Integrated Logistic Support (ILS) software to shipping and naval customers including the Royal Navy; work centres on the next-generation product ahead of commercial launch.",
      note: "Promoted from Junior Front-End Developer; now also reviewing colleagues' pull requests. Part-time Jan-Apr 2026 while running Nueral; full-time otherwise.",
      tags: [
        "React",
        "TypeScript",
        "Node.js",
        "Nx",
        "esbuild",
        "Docker",
        "GitHub Actions",
        "Lexical",
        "Vitest",
        "Claude Code",
      ],
      bullets: [
        "Extracted a tightly coupled React component library into a standalone monorepo package, enforced module boundaries with custom ESLint rules, and accelerated builds approximately 10x with esbuild",
        "Redesigned the frontend around Fluent 2 by reworking the shared React component library, propagating consistent design patterns across nearly every screen",
        "Built a Word-style rich-text editor for technical documents using Lexical, with custom nodes for figures, captioned tables, and admonitions",
        "Built a React editor for the JSON schemas driving auto-generated product screens, supporting deeply nested structures and direct local file editing",
        "Reduced frontend test runtime by ~50% locally and ~40% on CI. Migrated CI from Azure DevOps to GitHub Actions, cutting full pipeline runtime from ~14 to ~6 minutes at no additional compute cost",
        "Built a Docker Compose development environment simulating four replication sites, with isolated backends and databases, enabling the full multi-site system to be developed and tested locally",
        "Led team adoption of Claude Code through repository guidance and developer training; built isolated worktree environments with dedicated ports and MongoDB copies to support parallel agent sessions",
        "Created the team's first synthetic development dataset using AI-assisted workflow analysis, covering the application's main processes without relying on customer data",
      ],
      details: {
        label: "More technical detail",
        bullets: [
          "Managed the shared component library's internal dependency graph and TypeScript build tooling, including its original Rollup build; custom ESLint rules prevent cross-feature imports",
          "Implemented direct local file read/write in the schema editor with the File System Access API, using Immer and nested React contexts to edit deeply nested JSON structures",
          "Migrated source control from on-prem Azure DevOps to GitHub, removed secrets from repository history, and enabled Nx caching and 'nx affected' runs in CI",
          "Configured per-site backends and MongoDB instances for identity isolation, frontend routing to each site's backend, and watcher services that rebuild backends and the shared library on change",
          "Authored root and per-package CLAUDE.md context files, reusable skills, and workflow guides; worktree tooling also includes database routing, automatic cleanup on deletion, and a database-management CLI",
          "Upgraded the main application and shared component library to React 19 across the monorepo, resolving breaking API and TypeScript type changes and third-party library compatibility",
          "Migrated a replication frontend from AngularJS to a new React application built on the shared component library",
          "Built the CD pipeline using GitHub Container Registry, a self-hosted runner, and Docker Swarm to publish, pull, and deploy application images; rollout to the team is in progress",
        ],
      },
    },
    {
      org: "Isherwoods",
      title: "Junior Front-End Developer",
      start: "2023-04",
      end: "2024-11",
      tags: ["React", "TypeScript", "Fluent UI", "AG-Grid", "Visx", "Vitest"],
      bullets: [
        "Migrated 29 screens from AngularJS to React and resolved 18 critical bugs",
        "Built a command palette with a virtualised list and full keyboard navigation for jumping between screens",
        "Developed a drag-and-drop dashboard builder using Gridstack and Visx for KPI data visualisation",
        "Introduced automated testing with Jest, later moving to Vitest, across the migrated screens",
      ],
      details: {
        label: "More technical detail",
        bullets: [
          "Created a toolbar configurator with a kanban-style board and hierarchical lists",
          "Designed a JSON-driven auto-form system powering context-specific search drawers",
        ],
      },
    },
    {
      org: "Nueral",
      title: "Co-Founder & Technical Lead",
      start: "2025-01",
      end: "2026-04",
      context:
        "Concurrent with Isherwoods. Events company delivering two 10-day, ~50-person car rallies from northern England to Marrakech (Apr 2025 and Apr 2026); £100k+ in total sales.",
      tags: [
        "Next.js",
        "MedusaJS",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "Stripe",
        "Turborepo",
        "Figma",
      ],
      bullets: [
        "Sole engineer: designed the customer portal and e-commerce platform in Figma and built it with Next.js, MedusaJS, and PostgreSQL. Used for the second rally's documentation collection and leaving-party ticket sales; rally bookings used Stripe payment links",
        "Designed the product-configurator page, cart, and checkout using Baymard Institute usability research",
        "Implemented Stripe payment plans via a custom MedusaJS payment module, alongside a ticketing module, automated email notifications, and post-purchase add-ons",
        "Developed a customer portal collecting travel documentation, with passport data encrypted at rest and restricted to admin-level access",
        "Built a launch-ready location-guessing competition with a Leaflet map and integrated ticket purchasing",
        "Co-owned product decisions, led payment-provider negotiations, and co-ran both international events",
      ],
      details: {
        label: "More technical detail",
        bullets: [
          "Deployed the platform on Vercel and Render, with a Next.js frontend and MedusaJS/Node.js backend using PostgreSQL and Redis",
          "Built a multi-product catalogue in a Turborepo monorepo, with rally configurators, separate leaving-party products, and standard merchandise product pages for planned expansion",
          "Managed product delivery in Linear integrated with agentic coding tools, alongside sole-engineer responsibility for design and implementation",
        ],
      },
    },
    {
      org: "MOOV Global",
      title: "Co-Founder · Logistics",
      start: "2021-09",
      end: "2022-10",
      bullets: ["Secured and maintained contracts with clients including Yodel"],
    },
    {
      org: "Vintworx",
      title: "Co-Founder · Vintage clothing e-commerce",
      start: "2019-09",
      end: "2021-06",
      bullets: [
        "Achieved £35,000 turnover in under 2 years as a verified Depop top seller with a 4.9+ star rating across 350+ reviews",
      ],
    },
  ],

  volunteering: [
    {
      org: "Driving Ukraine (charity)",
      title: "Volunteer Web Developer",
      start: "2024",
      end: null,
      bullets: ["Built the charity's website in WordPress; currently rebuilding it in React"],
    },
  ],

  education: [
    {
      org: "Northcoders Bootcamp",
      title: "Trainee Full-Stack Developer",
      start: "2022-11",
      end: "2023-03",
    },
    {
      org: "Newcastle University",
      title: "BEng Chemical Engineering",
      detail: "First Class Honours",
      start: "2018-09",
      end: "2021-06",
    },
  ],

  skills: [
    {
      label: "Languages",
      items: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL"],
    },
    {
      label: "Frontend",
      items: [
        "React",
        "Next.js",
        "Fluent UI",
        "Lexical",
        "AG-Grid",
        "Visx",
        "React Router",
        "Leaflet",
      ],
    },
    {
      label: "Backend & Data",
      items: [
        "Node.js",
        "Express",
        "REST APIs",
        "PostgreSQL",
        "MongoDB",
        "Stripe",
        "MedusaJS",
        "Redis",
      ],
    },
    {
      label: "Tooling",
      items: [
        "Nx",
        "esbuild",
        "Vite",
        "Vitest",
        "React Testing Library",
        "ESLint",
        "Docker",
        "GitHub Actions",
        "Git",
        "Turborepo",
        "MSW",
        "Docker Swarm",
        "Vercel",
        "Render",
      ],
    },
    {
      label: "Design & AI",
      items: ["Figma", "Design systems (Fluent 2)", "Claude Code"],
    },
  ],
};
