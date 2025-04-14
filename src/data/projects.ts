import { Project } from '@/types/project';

export const projects: Record<string, Project> = {
  "bright-side-app": {
    id: "bright-side-app",
    title: "Bright Side App",
    description: "App for creating and sharing uplifting messages around the world.",
    techStack: ["React Native", "Expo", "Tamagui", "GraphQL", "AWS", "Node.js", "Python"],
    headerMedia: "/images/project1-header.jpg",
    media: ["/images/project1-1.jpg", "/images/project1-2.jpg"],
    footer: "Project 1 footer information",
  },
  "dev-portfolio": {
    id: "dev-portfolio",
    title: "Dev Portfolio Website",
    description: "A portfolio website built with Next.js, TypeScript, and Tailwind CSS.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    headerMedia: "/images/project1-header.jpg",
    media: ["/images/project1-1.jpg", "/images/project1-2.jpg"],
    footer: "Project 1 footer information",
    repoLink: "https://github.com/alexrisch/dev-portfolio",
    link: "https://alexrisch.github.io/dev-portfolio/"
  },
  "ugc-website": {
    id: "ugc-website",
    title: "UGC Website",
    description: "Website for hosting and branding user-generated content.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    headerMedia: "/ugc-site/web.png",
    headerMediaMobile: "/ugc-site/mobile.png",
    media: ["/ugc-site/mobile.png", "/ugc-site/tablet.png",  "/ugc-site/web.png"],
    footer: "Project 1 footer information",
    link: "https://media.alexandmin.com/example"
  },
  "ai-agent-web-kit": {
    id: "ai-agent-web-kit",
    title: "AI Agent Web Kit",
    description: "Small web kit setup for integrating AI agents into a Next.js application.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Langchain", "OpenAI"],
    headerMedia: "/images/project1-header.jpg",
    media: ["/images/project1-1.jpg", "/images/project1-2.jpg"],
    repoLink: "https://github.com/alexrisch/agent-web-kit",
    link: "https://agent-web-kit-production.up.railway.app/"
  },
  "ai-agent-react-native-kit": {
    id: "ai-agent-react-native-kit",
    title: "AI Agent React Native Starter Kit",
    description: "Small webkit setup for integrating AI agents into a React Native application.",
    techStack: ["React Native", "Typescript", "Expo", "Langchain", "OpenAI"],
    headerMedia: "/images/project1-header.jpg",
    media: ["/images/project1-1.jpg", "/images/project1-2.jpg"],
    repoLink: "https://github.com/alexrisch/agent-react-native-kit",
    link: "https://alexrisch.github.io/dev-portfolio/"
  },
  "ai-agent-lynx-kit": {
    id: "ai-agent-lynx-kit",
    title: "Lynx.js Agent Starter Kit",
    description: "Small webkit setup for integrating AI agents into a Lynx.js application.",
    techStack: ["Lynx.js", "Typescript", "Langchain", "OpenAI"],
    headerMedia: "/images/project1-header.jpg",
    media: ["/images/project1-1.jpg", "/images/project1-2.jpg"],
    repoLink: "https://github.com/alexrisch/agent-lynx-kit",
  }
};

export const projectIds = Object.keys(projects);

