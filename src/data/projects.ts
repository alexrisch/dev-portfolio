import { Project } from '@/types/project';

const basePath = process.env.NODE_ENV === 'production' ? '/alex-portfolio-web' : '';

export const projects: Record<string, Project> = {
  "bright-side-app": {
    id: "bright-side-app",
    title: "Bright Side App",
    description: "App for creating and sharing uplifting messages around the world.",
    techStack: ["React Native", "Expo", "Tamagui", "GraphQL", "AWS", "Node.js", "Python"],
    headerMedia: `${basePath}/bright-side-app/app-feed-light.png`,
    media: [
      // Light Theme - App Flow
      `${basePath}/bright-side-app/app-welcome-light.png`,
      `${basePath}/bright-side-app/app-auth-light.png`,
      `${basePath}/bright-side-app/app-feed-light.png`,
      `${basePath}/bright-side-app/app-thread-light.png`,
      `${basePath}/bright-side-app/app-threadmenu-light.png`,
      `${basePath}/bright-side-app/app-threadtoast-light.png`,
      `${basePath}/bright-side-app/app-message-compose-light.png`,
      `${basePath}/bright-side-app/app-newtyping-light.png`,
      `${basePath}/bright-side-app/app-replies-light.png`,
      `${basePath}/bright-side-app/app-profile-light.png`,
      `${basePath}/bright-side-app/app-notification-light.png`,
      `${basePath}/bright-side-app/app-express-light.png`,
      `${basePath}/bright-side-app/app-over-light.png`,

      // Dark Theme - App Flow
      `${basePath}/bright-side-app/app-welcome-dark.png`,
      `${basePath}/bright-side-app/app-auth-dark.png`,
      `${basePath}/bright-side-app/app-feed-dark.png`,
      `${basePath}/bright-side-app/app-thread-dark.png`,
      `${basePath}/bright-side-app/app-threadmenu-dark.png`,
      `${basePath}/bright-side-app/app-threadtoast-dark.png`,
      `${basePath}/bright-side-app/app-newtyping-dark.png`,
      `${basePath}/bright-side-app/app-profile-dark.png`,
      `${basePath}/bright-side-app/app-notificiation-dark.png`,
      `${basePath}/bright-side-app/app-connected-dark.png`,
      `${basePath}/bright-side-app/app-safe-dark.png`,
      `${basePath}/bright-side-app/app-express-dark.png`,
      `${basePath}/bright-side-app/app-over-dark.png`
    ],
    link: "https://testflight.apple.com/join/NuMgKg7Q",
    workInProgress: true
  },
  "dev-portfolio": {
    id: "dev-portfolio",
    title: "Dev Portfolio Website",
    description: "A portfolio website built with Next.js, TypeScript, and Tailwind CSS.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    headerMedia: "/images/project1-header.jpg",
    media: ["/images/project1-1.jpg", "/images/project1-2.jpg"],
    repoLink: "https://github.com/alexrisch/dev-portfolio",
    link: "https://alexrisch.github.io/dev-portfolio/"
  },
  "ugc-website": {
    id: "ugc-website",
    title: "UGC Website",
    description: "Website for hosting and branding user-generated content.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    headerMedia: `${basePath}/ugc-site/web.png`,
    headerMediaMobile: `${basePath}/ugc-site/mobile.png`,
    media: [
      `${basePath}/ugc-site/mobile.png`,
      `${basePath}/ugc-site/tablet.png`,
      `${basePath}/ugc-site/web.png`
    ],
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
    media: [],
    repoLink: "https://github.com/alexrisch/agent-react-native-kit",
  },
  "ai-agent-lynx-kit": {
    id: "ai-agent-lynx-kit",
    title: "Lynx.js Agent Starter Kit",
    description: "Small webkit setup for integrating AI agents into a Lynx.js application.",
    techStack: ["Lynx.js", "Typescript", "Langchain", "OpenAI"],
    headerMedia: "/images/project1-header.jpg",
    media: [],
  },
  "bright-side-website": {
    id: "bright-side-website",
    title: "Bright Side Website",
    description: "Website for the Bright Side project.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    headerMedia: "/bright-side-web/bright-side-light.png",
    media: ["/bright-side-web/bright-side-dark.png", "/bright-side-web/bright-side-light.png"],
    link: "https://brightside-website-production.up.railway.app",
  workInProgress: true
  },
  "thailand-nomad-agent": {
    id: "thailand-nomad-agent",
    title: "Thailand Nomad Agent",
    description: "Agent for the Thailand Nomad project.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "Langchain", "OpenAI", "Stripe"],
    headerMedia: "/images/project1-header.jpg",
    media: ["/images/project1-1.jpg", "/images/project1-2.jpg"],
    workInProgress: true
  }
};

export const projectIds = Object.keys(projects);

