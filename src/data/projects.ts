import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: "1",
    title: "Sample Project 1",
    description: "A brief description of the first project",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    headerMedia: "/images/project1-header.jpg",
    media: ["/images/project1-1.jpg", "/images/project1-2.jpg"],
    footer: "Project 1 footer information",
    repoLink: "https://github.com/yourusername/project1"
  },
  // Add more projects as needed
]; 