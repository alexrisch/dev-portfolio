'use client';

import Link from 'next/link';
import { ResponsiveHeroImage } from './ResponsiveHeroImage';
import { motion } from 'framer-motion';
import { Project } from '@/types/project';

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Link
        href="/"
        className="inline-block mb-8 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
      >
        ← Back to Projects
      </Link>

      <article>
        <h1 className="text-4xl font-bold mb-4">
          {project.title}
          {project.workInProgress && (
            <span className="text-gray-500 text-sm ml-2">Work in Progress</span>
          )}
        </h1>
        <div className="mb-8">
          <ResponsiveHeroImage
            desktopImage={project.headerMedia}
            mobileImage={project.headerMediaMobile}
            alt={project.title}
            className="rounded-lg object-container"
          />
        </div>
      </article>
    </motion.div>
  );
} 