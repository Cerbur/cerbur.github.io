export interface Experience {
  company: string;
  title: string;
  dateRange: string;
  bullets: string[];
}

export interface Project {
  name: string;
  description: string;
  /** Repository slug. Its landing page lives in a separate repository. */
  repo: string;
  skills: string[];
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  language: string;
  accentColor: string;
  avatar: { src: string; alt: string; width: number; height: number };
  favicon: { src: string; type: string; size: string };
  social: { github: string; email: string | null; linkedin: string | null };
  resume: { url: string | null; label: string; placeholder: string };
  navigation: { label: string; href: string }[];
  hero: {
    eyebrow: string;
    introduction: string;
    summary: string;
    projectsLabel: string;
    githubLabel: string;
    note: string;
  };
  about: { title: string; paragraphs: string[] };
  experience: Experience[];
  projects: Project[];
  sections: {
    experience: { title: string; emptyTitle: string; emptyDescription: string };
    projects: {
      title: string;
      emptyTitle: string;
      emptyDescription: string;
      browseLabel: string;
      landingLabel: string;
      sourceLabel: string;
    };
    stack: {
      title: string;
      description: string;
      items: string[];
      placeholder: string;
    };
  };
  writing: {
    title: string;
    heading: string;
    description: string;
    label: string;
    path: string;
    status: string;
  };
  contact: {
    title: string;
    heading: string;
    description: string;
    githubLabel: string;
    emailLabel: string;
    linkedinLabel: string;
    emailPlaceholder: string;
  };
  footer: { note: string; sourceLabel: string };
}

export const siteConfig: SiteConfig = {
  name: "cerbur",
  title: "Developer homepage",
  description:
    "cerbur’s personal home on the web. A growing collection of projects, writing, and developer notes.",
  url: "https://cerbur.github.io/",
  language: "en",
  accentColor: "#185c44",
  avatar: {
    src: "/images/github-avatar.png",
    alt: "cerbur’s GitHub avatar",
    width: 460,
    height: 460,
  },
  favicon: { src: "/favicon-avatar.svg", type: "image/svg+xml", size: "any" },
  social: {
    github: "https://github.com/cerbur",
    email: null,
    linkedin: null,
  },
  resume: { url: null, label: "Resume", placeholder: "Resume · coming soon" },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Stack", href: "#stack" },
    { label: "Writing", href: "#writing" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "A PERSONAL SPACE ON THE WEB",
    introduction: "Hello, I’m",
    summary:
      "A home for the things I build, the notes I write, and what comes next.",
    projectsLabel: "Explore projects",
    githubLabel: "Find me on GitHub",
    note: "Projects & notes · a growing collection",
  },
  about: {
    title: "About",
    paragraphs: [
      "Welcome to my corner of the internet. This is the starting point for my projects, writing, and developer journey.",
      "A more detailed introduction will live here soon. For now, take a look around or find me on GitHub.",
    ],
  },
  // Add only verified personal information. Empty lists intentionally show honest placeholders.
  experience: [],
  projects: [],
  sections: {
    experience: {
      title: "Experience",
      emptyTitle: "The story is still taking shape.",
      emptyDescription:
        "Work history and highlights will be added here when they’re ready to share.",
    },
    projects: {
      title: "Selected projects",
      emptyTitle: "Room for what comes next.",
      emptyDescription:
        "Selected work will appear here, with each project opening its own home on the web.",
      browseLabel: "Browse GitHub repositories",
      landingLabel: "Visit project",
      sourceLabel: "Source code",
    },
    stack: {
      title: "Tech stack",
      description: "The tools behind this website.",
      items: ["Astro", "TypeScript", "Tailwind CSS", "GitHub Pages"],
      placeholder: "A personal skills overview will be added here later.",
    },
  },
  writing: {
    title: "Writing",
    heading: "Notes, ideas, and things learned.",
    description: "A dedicated space for longer thoughts is coming soon.",
    label: "Visit the blog",
    path: "/blog/",
    status: "Coming soon",
  },
  contact: {
    title: "Contact",
    heading: "Let’s keep in touch.",
    description: "Find my public work and profile on GitHub.",
    githubLabel: "GitHub profile",
    emailLabel: "Email me",
    linkedinLabel: "LinkedIn",
    emailPlaceholder: "More contact details · coming soon",
  },
  footer: {
    note: "Built with care. Always evolving.",
    sourceLabel: "Site source",
  },
};

export const blogUrl = new URL(siteConfig.writing.path, siteConfig.url).href;
export const repositoryUrl = `${siteConfig.social.github}/cerbur.github.io`;
export function projectUrl(repo: string): string {
  if (
    !/^[a-zA-Z0-9][a-zA-Z0-9._-]*$/.test(repo) ||
    ["blog", "cerbur.github.io"].includes(repo.toLowerCase())
  ) {
    throw new Error(`Invalid or reserved project repository slug: ${repo}`);
  }
  return new URL(`/${repo}/`, siteConfig.url).href;
}
