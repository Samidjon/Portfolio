import type { LucideIcon } from "lucide-react";
import { Gamepad2, Code2, PanelsTopLeft, Trophy, ShieldCheck, ScanSearch } from "lucide-react";

export const site = {
  name: "Samid",
  role: "Software Engineer & Creative Developer",
  email: "samidnormuradov06@gmail.com",
  github: "https://github.com/Samidjon",
  // Add your actual LinkedIn profile URL here when you are ready.
  linkedin: "",
  location: "Kuala Lumpur, Malaysia",
  intro:
    "I build playful web experiences, useful tools and little ideas that grow into real products. Currently studying Software Engineering at APU and always learning something new.",
};

export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  href?: string;
  hrefLabel?: string;
  icon: LucideIcon;
  palette: string;
  visual: string;
  note?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Math Quest",
    category: "Learning game",
    description: "A multiplication adventure with worlds, XP, rewards and progress tracking that makes practice feel like play.",
    tags: ["React", "TypeScript", "Game UI"],
    href: "https://mathquest-chi.vercel.app/",
    hrefLabel: "Play the demo",
    icon: Gamepad2,
    palette: "peach",
    visual: "math",
  },
  {
    number: "02",
    title: "Hacker Life",
    category: "Interactive web game",
    description: "A playful hacker-life simulation about levelling up, earning money and building skills through mini-games.",
    tags: ["React", "Vite", "Game systems"],
    href: "https://hacker-life.vercel.app/",
    hrefLabel: "Play the demo",
    icon: Code2,
    palette: "lavender",
    visual: "hacker",
  },
  {
    number: "03",
    title: "Senitukang",
    category: "Business website",
    description: "A polished, responsive website concept with clear sections, project storytelling and a modern visual identity.",
    tags: ["Next.js", "Tailwind", "Motion"],
    href: "https://senitukang-et6e.vercel.app/",
    hrefLabel: "Visit website",
    icon: PanelsTopLeft,
    palette: "mint",
    visual: "studio",
  },
  {
    number: "04",
    title: "Football Session",
    category: "Sports platform",
    description: "A platform concept for football sessions, team registration, roster management and deposit-based booking.",
    tags: ["Next.js", "Supabase", "Stripe"],
    href: "https://football-session.vercel.app/",
    hrefLabel: "Visit website",
    icon: Trophy,
    palette: "blue",
    visual: "football",
  },
  {
    number: "05",
    title: "Sirius Class",
    category: "Company website",
    description: "A business website for a printing company, designed to present services and make the brand feel clear and credible.",
    tags: ["Web design", "JavaScript", "CSS"],
    href: "https://sirius-class.vercel.app/",
    hrefLabel: "Visit website",
    icon: PanelsTopLeft,
    palette: "yellow",
    visual: "sirius",
  },
  {
    number: "06",
    title: "Python Security Tools",
    category: "Cybersecurity",
    description: "A set of hands-on security tools, including a port scanner, built while learning networking and defensive security.",
    tags: ["Python", "Networking", "Security"],
    href: "https://github.com/Samidjon/Port-Scanner",
    hrefLabel: "View on GitHub",
    icon: ScanSearch,
    palette: "dark",
    visual: "security",
  },
  {
    number: "07",
    title: "My Antivirus",
    category: "Desktop security tool",
    description: "A Python antivirus prototype exploring file scanning, heuristic signals, risk scoring and quarantine workflows.",
    tags: ["Python", "PE files", "Heuristics"],
    icon: ShieldCheck,
    palette: "coral",
    visual: "antivirus",
    note: "Personal prototype",
  },
];

export const skills = [
  { name: "React", group: "Frontend", color: "skill-blue" },
  { name: "Next.js", group: "Frontend", color: "skill-ink" },
  { name: "TypeScript", group: "Frontend", color: "skill-blue" },
  { name: "JavaScript", group: "Frontend", color: "skill-yellow" },
  { name: "Tailwind CSS", group: "UI", color: "skill-cyan" },
  { name: "Motion", group: "UI", color: "skill-purple" },
  { name: "Node.js", group: "Backend", color: "skill-green" },
  { name: "Python", group: "Backend", color: "skill-yellow" },
  { name: "SQL / MySQL", group: "Data", color: "skill-blue" },
  { name: "Supabase", group: "Backend", color: "skill-green" },
  { name: "Git & GitHub", group: "Tools", color: "skill-coral" },
  { name: "Cybersecurity", group: "Security", color: "skill-ink" },
];
