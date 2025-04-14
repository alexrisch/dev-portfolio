export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  headerMedia: string;
  headerMediaMobile?: string;
  media: string[];
  footer?: string;
  repoLink?: string;
  link?: string;
} 