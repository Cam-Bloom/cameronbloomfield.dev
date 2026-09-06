/**
 * Single source of truth for the CV content.
 * Dates are ISO-ish strings: "YYYY" or "YYYY-MM". `end: null` means present.
 */

export interface Profile {
  name: string;
  headline: string;
  location: string;
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
  title: string;
  rows: { label: string; items: string[] }[];
}

export interface Cv {
  profile: Profile;
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
    email: "cam.w.bloomfield@gmail.com",
    links: {
      linkedin: { handle: "/cam-bloom", url: "https://www.linkedin.com/in/cam-bloom" },
      github: { handle: "/Cam-Bloom", url: "https://github.com/Cam-Bloom" },
    },
  },

  summary:
    "Front-end-focused developer with 3+ years building production React and TypeScript applications and the systems around them: shared component libraries, monorepo build tooling, and CI/CD pipelines. Co-founded an events startup and, as sole engineer, designed its e-commerce platform in Figma and built it end to end on Next.js, Node.js, Stripe, and PostgreSQL; the venture took £100k+ in sales. Chemical engineer by training (First Class Honours), currently leading team adoption of agentic AI development (Claude Code).",

  experience: [
    {
      org: "Isherwoods",
      title: "Software Developer",
      start: "2024-11",
      end: null,
      context:
        "Marine engineering company supplying maintenance-management and Integrated Logistic Support (ILS) software to commercial shipping, industrial, and naval customers including the Royal Navy; work centres on the next-generation product, now approaching commercial launch.",
      note: "Progressed from the junior role below; now also reviewing other developers' pull requests. Part-time Jan-Apr 2026 while running Nueral; full-time otherwise.",
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
        "Extracted a tightly coupled React component library into a standalone monorepo package, managing the internal dependency graph and writing custom ESLint rules to block cross-feature imports; owned the TypeScript and Rollup build tooling, later migrating to the esbuild engine for ~10x faster builds",
        "Migrated source control and CI from on-prem Azure DevOps to GitHub: scrubbed secrets from repository history and rebuilt the pipeline on GitHub Actions optimised for compute minutes; a full CI run went from ~14 to ~6 minutes on included minutes alone",
        "Designed a Docker Compose environment simulating 4 replication sites and evolved it into a full-stack development platform: per-site backends and MongoDB for identity isolation, a single multi-site dev server per frontend routing to the correct site backend, and watcher services that rebuild backends and the shared component library on change, so the whole replication setup can be tested and developed on one machine",
        "Redesigned the entire frontend around the Fluent 2 design system, replacing a utilitarian, logic-first interface with a production-ready one",
        "Led team adoption of agentic AI development (Claude Code): authored skills, root and per-package CLAUDE.md context files, and workflow guides; trained developers to work in parallel with git worktrees",
        "Built worktree-isolation tooling so multiple agent sessions run in parallel: per-worktree port offsets for frontend and backend servers, per-worktree MongoDB copies with routing, automatic cleanup on worktree deletion, and a database-management CLI",
        "Used AI agents to analyse every process in the application and write a complete synthetic database seed. The team had no non-customer-data dataset before; this one covers every workflow",
        "Optimised frontend test-suite performance (~50% faster locally, ~40% on CI) and enabled Nx caching and 'nx affected' runs on the CI pipeline",
        "Building the CD pipeline: CI publishes Docker images to GHCR, a self-hosted runner on local infrastructure pulls them, and Docker Swarm deploys them for zero-downtime rollouts",
        "Built a Word-style rich-text editor for technical documents using Lexical, with custom nodes for figures, captioned tables, and admonitions",
        "Created a schema-editor React app for the JSON schemas that drive auto-generated product screens, using the File System Access API for direct filesystem read/write and Immer with nested React contexts to edit arbitrarily deep JSON structures",
        "Upgraded the main application and shared component library to React 19 across the monorepo, working through breaking API and TypeScript type changes and third-party library compatibility",
        "Migrated a replication frontend from AngularJS to a greenfield React app built on the shared component library",
      ],
    },
    {
      org: "Isherwoods",
      title: "Junior Front-End Developer",
      start: "2023-04",
      end: "2024-11",
      tags: ["React", "TypeScript", "Fluent UI", "AG-Grid", "Visx", "Vitest"],
      bullets: [
        "Migrated 29 screens from AngularJS to React and resolved 18 critical bugs",
        "Built a command palette with a virtualised list and full keyboard support; screen navigation got up to 60% faster",
        "Developed a drag-and-drop dashboard builder using Gridstack and Visx for KPI data visualisation",
        "Created a toolbar configurator with a kanban-style board and hierarchical lists",
        "Designed a JSON-driven auto-form system powering context-specific search drawers",
        "Introduced automated testing with Jest, later moving to Vitest, and reached 75%+ coverage on screens tested",
      ],
    },
    {
      org: "Nueral",
      title: "Co-Founder & Technical Lead",
      start: "2025-01",
      end: "2026-04",
      context:
        "Concurrent with Isherwoods, above. Events company delivering two 10-day, ~50-person car rallies from northern England to Marrakech (Apr 2025 and Apr 2026), promoted by an influencer partner with a 600K+ Instagram following; £100k+ in total sales.",
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
        "Sole engineer: designed the full ticketing and bookings platform in Figma and built it with Next.js, MedusaJS, Node.js, PostgreSQL, and Redis, deployed on Vercel and Render",
        "Live for the second rally, handling customer documentation collection and leaving-party ticket sales, with rally bookings taken through Stripe payment links",
        "Created the product-configurator page, cart, and conversion-optimised checkout informed by Baymard Institute research",
        "Implemented Stripe payment plans via a custom MedusaJS payment module, alongside a ticketing module, automated email notifications, and post-purchase add-ons",
        "Developed a customer portal collecting travel documentation, including passport data encrypted and handled in compliance with data-protection law",
        "Built a launch-ready skill-based competitions product, a location-guessing game with a Leaflet map interface and ticket purchasing",
        "Built a multi-product catalogue on a Turborepo monorepo: rally configurators, separate leaving-party products, and merch-ready standard product pages for planned expansion",
        "Co-owned product decisions, managed delivery in Linear integrated with agentic coding tools, led payment-provider negotiations, and co-ran both live international events",
      ],
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
      title: "Trainee Software Developer",
      start: "2022-11",
      end: "2023-03",
      tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "SQL"],
    },
    {
      org: "Newcastle University",
      title: "Chemical Engineering",
      detail: "1st Class Honours",
      start: "2018-09",
      end: "2021-06",
    },
    {
      org: "Duchess Community High School",
      title: "Sixth Form",
      detail: "A,A,A",
      start: "2013-09",
      end: "2018-06",
    },
  ],

  skills: [
    {
      title: "Languages",
      rows: [{ label: "Languages", items: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL"] }],
    },
    {
      title: "Libraries & Tools",
      rows: [
        {
          label: "Frontend",
          items: [
            "React",
            "Next.js",
            "Fluent UI",
            "React Router",
            "AG-Grid",
            "Visx",
            "Lexical",
            "Leaflet",
          ],
        },
        {
          label: "Backend",
          items: ["Node.js", "REST APIs", "MedusaJS", "PostgreSQL", "Redis", "MongoDB", "Stripe"],
        },
        {
          label: "Tooling",
          items: [
            "Nx",
            "Turborepo",
            "esbuild",
            "Vite",
            "Vitest",
            "MSW",
            "ESLint",
            "Docker",
            "Docker Swarm",
            "GitHub Actions",
            "Git",
            "CI/CD",
            "Vercel",
          ],
        },
        {
          label: "Design",
          items: [
            "Figma",
            "Design systems (Fluent 2)",
            "Linear",
            "Claude Code",
            "Agentic AI workflows",
          ],
        },
      ],
    },
  ],
};
