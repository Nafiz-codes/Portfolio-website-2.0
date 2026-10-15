/**
 * Every piece of copy on the site lives in this file.
 *
 * Any string that starts with "[TODO" is a placeholder: it renders as a
 * dashed "to do" marker on the site (never as a link), and link fields holding
 * a TODO are hidden on project cards. Search this file for "[TODO" to find them all.
 */

export type Todo = `[TODO: ${string}]`;

export const isTodo = (value: string | undefined): boolean =>
  !value || value.startsWith("[TODO");

export type ProjectStatus = "built" | "finalist" | "in-progress" | "concept";

export const statusLabel: Record<ProjectStatus, string> = {
  built: "Built",
  finalist: "Hackathon finalist",
  "in-progress": "In progress",
  concept: "Concept",
};

export type ProjectVisual =
  | "telemetry"
  | "outpost"
  | "ledger"
  | "split"
  | "timeline"
  | "pipeline"
  | "xray";

export type Project = {
  slug: string;
  title: string;
  /** One line, shown on cards and as the page description. */
  summary: string;
  status: ProjectStatus;
  /** Short result shown on the card, e.g. "2nd place". */
  highlight?: string;
  featured: boolean;
  visual: ProjectVisual;
  /** Optional real screenshot. Replaces the vector illustration when set. */
  image?: { src: string; alt: string; width: number; height: number };
  meta: {
    role: string;
    team: string;
    timeline: string;
    stack: string[];
  };
  overview: string[];
  problem: string[];
  contribution: string[];
  decisions: string[];
  result: string[];
  limitations?: string[];
  roadmap?: string[];
  links: {
    demo: string;
    code: string;
    codeLabel?: string;
  };
};

export type ProofItem = {
  value: string;
  label: string;
  context: string;
  href?: string;
};

export type Credential = {
  name: string;
  issuer?: string;
  year?: string;
  note?: string;
};

const list = <T,>(items: T[]): T[] => items;

export const site = {
  /** Used for canonical URLs, the sitemap and Open Graph tags. */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),

  person: {
    name: "Nafiz Shahriar Sami",
    shortName: "Nafiz",
    descriptor: "Computer Science & Engineering · BRAC University, Dhaka",
    headline:
      "Computer Science student and builder exploring AI, data science, and software engineering through practical projects.",
    intro:
      "From interactive analytics to trustworthy digital evidence and collaborative fintech tools.",
  },

  social: {
    email: "shahriarsami123@gmail.com",
    github: "https://github.com/Nafiz-codes",
    githubHandle: "Nafiz-codes",
    linkedin: "https://www.linkedin.com/in/nafizshahriarsami",
    linkedinHandle: "nafizshahriarsami",
    codeforces: "[TODO: add Codeforces profile URL]",
  },

  /** Put a photo in /public (about 800×1000 px, JPG or WebP) and set src to e.g. "/portrait.jpg". Empty shows a placeholder frame. */
  portrait: {
    src: "/portrait.jpg",
    alt: "Portrait of Nafiz Shahriar Sami",
  },

  /** Put the PDF in /public and set this to e.g. "/nafiz-shahriar-sami-resume.pdf". Leave empty to hide the buttons. */
  resumePdf: "",

  seo: {
    homeTitle: "Nafiz Shahriar Sami: Computer Science student and builder",
    homeDescription:
      "Portfolio of Nafiz Shahriar Sami, a CSE undergraduate at BRAC University building projects across AI/ML, data science, and software engineering.",
  },

  proof: list<ProofItem>([
    {
      value: "2nd place",
      label: "Fair Split",
      context: "Stripe × Cursor × IBM event, Dhaka",
      href: "/projects/fair-split",
    },
    {
      value: "6th of 184",
      label: "Echoes of July",
      context: "One of 8 finalists · team of 2",
      href: "/projects/echoes-of-july",
    },
    {
      value: "Finalist",
      label: "Catenyx",
      context: "BCOLBD 2026",
      href: "/projects/catenyx",
    },
    {
      value: "895",
      label: "Codeforces",
      context: "Max rating",
    },
  ]),

  about: {
    paragraphs: [
      "I’m a Computer Science and Engineering undergraduate at BRAC University in Bangladesh, building toward a career at the intersection of AI/ML, data science, software engineering, and data-driven products.",
      "I enjoy turning ideas into working software, learning by building, competing in hackathons, and documenting technical work. I also design for the aerodynamics department of Ossharohi, the official BRAC University F1 team, and compete on Codeforces.",
      "The common thread in my work: using software and data to make complex systems easier to understand and act on.",
    ],
    facts: [
      { label: "Studying", value: "CSE at BRAC University" },
      { label: "Graduating", value: "September 2027 (expected)" },
      { label: "F1 team", value: "Ossharohi · Aerodynamics department" },
      {
        label: "Now",
        value:
          "RaceCraft, the NASA Space Apps mission trainer, and AWS Certified AI Practitioner prep",
      },
    ],
  },

  education: {
    school: "BRAC University, Bangladesh",
    field: "Computer Science and Engineering (CSE)",
    expected: "Expected graduation: September 2027",
    coursework: [
      "Machine Learning",
      "Data Science",
      "Computer Architecture",
      "MAT110",
      "MAT120",
      "MAT215",
      "MAT216",
    ],
  },

  experience: [
    {
      name: "Ossharohi, Official BRAC University F1 Team",
      role: "Aerodynamics department",
      detail: "[TODO: describe what you design for the aerodynamics department]",
    },
  ],

  recognition: [
    {
      title: "2nd place: Stripe × Cursor × IBM event, Dhaka",
      detail: "Built Fair Split; received $100 in Cursor credits.",
      href: "/projects/fair-split",
    },
    {
      title: "6th place: Echoes of July",
      detail: "Selected among 8 finalists out of 184 teams, as a team of 2.",
      href: "/projects/echoes-of-july",
    },
    {
      title: "Finalist: BCOLBD 2026",
      detail:
        "Catenyx. Delivered a technical presentation and interview, and iterated on tests and architecture.",
      href: "/projects/catenyx",
    },
    {
      title: "Won with UXRay; built with Codex",
      detail: "Codex Build Cave Hackathon. [TODO: add exact award wording and date for UXRay]",
      href: "/projects/uxray",
    },
    {
      title: "Codeforces: max rating 895",
      detail: "Competitive programming.",
    },
    {
      title: "OpenAI Astra 6",
      detail: "Attended and demoed ModelPath for an OpenAI-related submission.",
      href: "/projects/modelpath",
    },
  ],

  skills: [
    {
      group: "Languages",
      items: ["Python", "TypeScript", "JavaScript", "SQL", "Solidity"],
      usedIn: "Solidity in Catenyx",
    },
    {
      group: "AI, ML & data",
      items: [
        "Machine-learning fundamentals",
        "pandas",
        "Telemetry and data analysis",
        "Data visualization",
        "Prompt engineering",
      ],
      usedIn: "pandas and telemetry in RaceCraft; ML pipeline design in ModelPath",
    },
    {
      group: "Web & apps",
      items: ["React", "Next.js", "Vite", "Tailwind CSS", "SQLite", "Express"],
      usedIn: "Fair Split, RaceCraft, Catenyx",
    },
    {
      group: "Payments, blockchain & testing",
      items: ["Stripe Connect", "Hardhat", "Smart-contract workflows", "Test-driven iteration"],
      usedIn: "Stripe Connect in Fair Split; Hardhat and tests in Catenyx",
    },
    {
      group: "Tools",
      items: ["Git & GitHub", "Cursor", "Codex"],
    },
  ],

  credentials: {
    certifications: list<Credential>([
      { name: "Oracle Cloud Infrastructure Foundations Associate", issuer: "Oracle", year: "2025" },
      { name: "Oracle Cloud Infrastructure Generative AI Professional", issuer: "Oracle", year: "2025" },
    ]),
    courses: list<Credential>([
      { name: "Getting Started with Deep Learning", issuer: "NVIDIA Deep Learning Institute" },
      { name: "AI+ Prompt Engineer Level 1" },
      { name: "Learn AI Beyond Basics", issuer: "Banglalink / Ryze" },
      { name: "Introduction to Git", issuer: "DataCamp" },
      { name: "Intermediate Git", issuer: "DataCamp" },
      { name: "Artificial Intelligence Fundamentals", issuer: "IBM" },
      { name: "SEO Crash Course with Brian Dean", issuer: "Semrush Academy" },
    ]),
    badges: list<Credential>([
      { name: "Microsoft 365 Copilot Masterclass", issuer: "Microsoft" },
      { name: "Discussion Debut, Hello World!, Photo Finisher", issuer: "AWS Skill Builder" },
    ]),
    inProgress: list<Credential>([
      {
        name: "AWS Certified AI Practitioner (AIF-C01)",
        issuer: "AWS",
        note: "Preparing. Not yet earned.",
      },
    ]),
  },

  exploring: [
    {
      title: "FileForge",
      summary:
        "An open-source, privacy-focused file resizer designed to run locally, with offline-first processing where practical.",
      status: "Idea stage",
    },
  ],

  projects: list<Project>([
    {
      slug: "racecraft",
      title: "RaceCraft",
      summary:
        "A Formula 1 analytics platform that turns race telemetry into interactive, data-driven insights.",
      status: "in-progress",
      featured: true,
      visual: "telemetry",
      meta: {
        role: "Solo developer",
        team: "Solo",
        timeline: "In development",
        stack: ["FastF1", "pandas", "React 19", "Vite", "Tailwind CSS v4", "shadcn/ui"],
      },
      overview: [
        "RaceCraft is a Formula 1 telemetry analytics experience for exploring race pace, lap-level telemetry, driver comparisons, circuit context, weather, and performance differences. It connects to my goal of applying data science to motorsport.",
      ],
      problem: [
        "Race telemetry is dense: per-driver, per-lap data, weather, and track information spread across many sources. RaceCraft aims to turn that data into something you can explore and compare interactively.",
      ],
      contribution: [
        "RaceCraft is a Formula One telemetry analysis platform designed to help explore lap performance through the lens of a race engineer.",
        "Instead of presenting telemetry as a collection of disconnected charts, RaceCraft brings drivers, circuits, lap telemetry, sectors, corners, comparisons, and engineering reports into one focused workspace.",
      ],
      decisions: [
        "Built the data layer on FastF1 and pandas DataFrames for per-driver, per-lap telemetry, weather, race-winner, and track data.",
        "Front end in React 19, Vite, Tailwind CSS v4, and shadcn/Base UI, with a dark theme.",
        "Design mock-ups use sample numbers only. Anything shown as real race data has to come from real session data.",
        "[TODO: add the trade-offs behind these choices]",
      ],
      result: ["In active development, with a live build online."],
      roadmap: [
        "Tyre degradation analysis",
        "Pit strategy exploration",
        "Lap-time prediction",
        "Driver similarity",
      ],
      links: {
        demo: "https://race-craft-ebon.vercel.app/",
        code: "https://github.com/Nafiz-codes/RaceCraft",
      },
    },
    {
      slug: "nasa-space-apps-mission-trainer",
      title: "Junior Astronaut Mission Trainer",
      summary:
        "A space-mission strategy game about balancing outpost resources and survival constraints, designed around NASA and partner open data.",
      status: "in-progress",
      highlight: "NASA Space Apps",
      featured: true,
      visual: "outpost",
      meta: {
        role: "Project lead, designer",
        team: "Team Triarchy · four members, separate workstreams",
        timeline: "About one month · Sept–Oct 2026",
        stack: ["Godot 4.7.2"],
      },
      overview: [
        "Peaks of Eternal Light is a lunar outpost survival and mission-planning game, built with team Triarchy for NASA Space Apps.",
      ],
      problem: [
        "Running an outpost means constant trade-offs. Players balance life support, radiation shielding, power, and food across a compact 7–10 sol mission, using NASA or partner open data.",
      ],
      contribution: ["In progress."],
      decisions: [
        "A compact 7–10 sol mission, so a full run fits in one sitting.",
        "No AI or API question-answering feature. The game stands on its own rules and data.",
        "Each of the four members owns a distinct workstream instead of splitting one task four ways.",
        "Built in roughly one month.",
      ],
      result: [
        "In progress for NASA Space Apps. No result yet.",
        "Built for the NASA Space Apps challenge. Not affiliated with or endorsed by NASA.",
      ],
      links: {
        demo: "",
        code: "",
      },
    },
    {
      slug: "uxray",
      title: "UXRay",
      summary:
        "An AI-powered UI/UX repair agent: paste HTML, describe the improvement, and compare the original and repaired interface side by side.",
      status: "built",
      highlight: "Won · built with Codex",
      featured: true,
      visual: "xray",
      meta: {
        role: "Solo developer",
        team: "Solo",
        timeline: "Codex Build Cave Hackathon",
        stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "OpenAI API"],
      },
      overview: [
        "UXRay combines UX with X-ray. Just as an X-ray reveals hidden problems inside the body, UXRay analyzes web interfaces, detects usability and accessibility issues, and repairs them using AI. It was built for the Codex Build Cave Hackathon.",
      ],
      problem: [
        "Many developers can build functional applications but struggle to create polished, accessible interfaces. UXRay aims to bridge that gap between development and design with instant UI/UX improvements.",
      ],
      contribution: ["UXRay combines UX (User Experience) with X-Ray. It is a simple tool that allows you to paste HTML, describe the improvement you want, and get an improved version back."],
      decisions: [
        "A simple loop: paste HTML, describe the improvement you want, click Scan & Repair, and get an improved version back.",
        "The OpenAI API analyzes the submitted HTML, identifies UI/UX issues, and generates improved HTML.",
        "A live before/after preview, so the original and repaired UI can be compared side by side.",
        "Custom repair instructions, such as “Fix accessibility issues” or “Improve mobile responsiveness”.",
        "Plain HTML, CSS, and JavaScript on the front end, with a Node.js and Express back end that keeps the API key in a server-side .env file.",
        "[TODO: add the trade-offs behind these choices]",
      ],
      result: ["Won with UXRay; built with Codex. Received $100 in Codex credits."],
      roadmap: [
        "Automatic issue detection panel",
        "Accessibility scoring",
        "Before/after slider comparison",
        "Batch component analysis",
        "React component support",
        "Design system recommendations",
        "Export repaired projects",
      ],
      links: {
        demo: "",
        code: "https://github.com/Nafiz-codes/UXRay",
      },
    },
    {
      slug: "fair-split",
      title: "Fair Split",
      summary:
        "A group expense-splitting app that makes shared trip expenses simpler and more transparent.",
      status: "built",
      highlight: "2nd place",
      featured: true,
      visual: "split",
      meta: {
        role: "[TODO: your role]",
        team: "[TODO: team size]",
        timeline: "Stripe × Cursor × IBM event, Dhaka · [TODO: date]",
        stack: [
          "Next.js 14 (App Router)",
          "TypeScript",
          "Tailwind CSS",
          "SQLite (better-sqlite3)",
          "Stripe Connect",
        ],
      },
      overview: [
        "Fair Split is a collaborative fintech prototype for managing shared trip expenses, built at the Stripe × Cursor × IBM event in Dhaka.",
      ],
      problem: [
        "Splitting costs on a group trip gets messy fast. Fair Split is designed to make shared expenses simpler to track and more transparent for everyone in the group.",
      ],
      contribution: ["[TODO: list what you personally built in Fair Split]"],
      decisions: [
        "Next.js 14 App Router with TypeScript and Tailwind CSS.",
        "SQLite through better-sqlite3 for storage.",
        "Stripe Connect for payments.",
        "Demoed with a Dhaka trip shared by Alice, Bob, Sara, and Charlie.",
        "[TODO: add the trade-offs behind these choices]",
      ],
      result: ["Won 2nd place at the Stripe × Cursor × IBM event in Dhaka, and $100 in Cursor credits."],
      links: {
        demo: "https://fair-split-coral-nine.vercel.app",
        code: "https://github.com/Nafiz-codes/Fair-Split",
      },
    },
    {
      slug: "echoes-of-july",
      title: "Echoes of July",
      summary:
        "An interactive visual novel and timeline about Bangladesh’s July 2024 revolution.",
      status: "finalist",
      highlight: "6th of 184 teams",
      featured: true,
      visual: "timeline",
      meta: {
        role: "[TODO: your role]",
        team: "Team of 2",
        timeline: "[TODO: hackathon name and date]",
        stack: ["TypeScript", "[TODO: add rest of stack]"],
      },
      overview: [
        "An interactive storytelling and archival experience that combines a visual-novel format with a timeline of a consequential moment in Bangladesh’s recent history.",
      ],
      problem: [
        "Big historical moments are easy to flatten into headlines. Echoes of July uses a visual-novel format and a timeline to let people move through the events of July 2024.",
      ],
      contribution: ["[TODO: list what you personally built in Echoes of July]"],
      decisions: [
        "A visual-novel format paired with a timeline, rather than a plain article.",
        "[TODO: add key decisions and trade-offs]",
      ],
      result: ["Selected among 8 finalists out of 184 teams, and placed 6th."],
      limitations: ["It is not an official archive and does not claim historical completeness."],
      links: {
        demo: "https://echoes-of-july.vercel.app",
        code: "https://github.com/Mazharull-Islam/echoes-of-july",
        codeLabel: "Code (team repo)",
      },
    },
    {
      slug: "modelpath",
      title: "ModelPath",
      summary:
        "A guided wizard that helps beginners build, understand, and experiment with their first machine-learning pipeline.",
      status: "concept",
      highlight: "Demoed at OpenAI Astra 6",
      featured: false,
      visual: "pipeline",
      meta: {
        role: "[TODO: your role]",
        team: "[TODO: solo or team?]",
        timeline: "[TODO: timeline]",
        stack: ["[TODO: add stack]"],
      },
      overview: [
        "ModelPath explores how guided workflows can make machine-learning pipelines more approachable, explainable, and easier to experiment with.",
      ],
      problem: [
        "Beginners can generate ML code without understanding it. ModelPath’s goal is not just to generate code, but to help learners understand each stage and validate the pipeline they end up with.",
      ],
      contribution: ["[TODO: list what you personally built in ModelPath]"],
      decisions: [
        "A step-by-step wizard that explains each stage of the pipeline.",
        "Validate the generated pipeline instead of handing over code blindly.",
        "Avoid making the product depend on paid AI services.",
      ],
      result: [
        "Demoed at OpenAI Astra 6 for an OpenAI-related submission. A concept and prototype direction, not a shipped product.",
      ],
      links: {
        demo: "[TODO: add demo URL]",
        code: "[TODO: add repository URL]",
      },
    },
    {
      slug: "catenyx",
      title: "Catenyx",
      summary:
        "A blockchain-forensics prototype for tamper-evident evidence integrity, role-based workflows, and accountable custody records.",
      status: "finalist",
      highlight: "BCOLBD 2026 finalist",
      featured: false,
      visual: "ledger",
      meta: {
        role: "[TODO: your role]",
        team: "[TODO: team size]",
        timeline: "BCOLBD 2026",
        stack: ["TypeScript", "Solidity", "Hardhat", "Express"],
      },
      overview: [
        "Catenyx is a blockchain-backed evidence-custody prototype. It records evidence integrity and case-related metadata to support traceability across investigator, lab, analyst, and auditor roles.",
      ],
      problem: [
        "Evidence passes through many hands, and every hand-off is a chance for its integrity to be questioned. Catenyx explores how a shared, tamper-evident record can make each step traceable.",
      ],
      contribution: ["[TODO: list what you personally built in Catenyx]"],
      decisions: [
        "SHA-256 hashes and case fields are recorded on-chain. The evidence files themselves stay in a separate store.",
        "Four roles with their own workflows: Investigator, Lab, Analyst, and Auditor.",
        "Server-side sessions with an Express demo signer, rather than private keys held in the browser.",
        "Runs on a local Hardhat chain (chain ID 31337), with CORS restricted to localhost.",
        "Deliberately not a token or NFT project.",
      ],
      result: [
        "Finalist at BCOLBD 2026. Presented in a technical presentation and interview.",
        "58 passing tests at the latest reported stage.",
      ],
      limitations: [
        "In the demo, evidence files are stored in plaintext.",
        "It is a prototype: not audited, not deployed, and not a production-secure chain of custody. It makes no claim of legal admissibility.",
      ],
      links: {
        demo: "[TODO: add demo URL, if there is one]",
        code: "https://github.com/Nafiz-codes/Catenyx",
      },
    },
  ]),
};

export type Site = typeof site;

export const featuredProjects = site.projects.filter((p) => p.featured);

export const getProject = (slug: string): Project | undefined =>
  site.projects.find((p) => p.slug === slug);

export const projectIndex = (slug: string): string =>
  String(site.projects.findIndex((p) => p.slug === slug) + 1).padStart(2, "0");
