export interface Project {
  name: string;
  tagline: string;
  description: string;
  url?: string;
  repo: string;
  image?: string;
  imageAlt?: string;
}

export const projects: Project[] = [
  {
    name: "Flip-a-GIF",
    tagline: "GIF to Flipbook",
    description:
      "Transform animated GIFs into printable flipbooks. Drag, drop, print, cut, staple, flip. Because the internet needed that.",
    url: "https://flipagif.com",
    repo: "https://github.com/ryanbonial/flip-a-gif",
  },
  {
    name: "Ralph",
    tagline: "AI Agent Orchestrator",
    description:
      'A system for getting AI coding agents to actually ship production-ready code. Named after Ralph Wiggum, because simplicity beats cleverness.',
    repo: "https://github.com/ryanbonial/ralph",
    image: "/images/ralph.png",
    imageAlt: "A cartoon character pointing upward, inspired by Ralph Wiggum",
  },
];
