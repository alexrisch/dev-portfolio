'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types/project';
import Link from 'next/link';
import { EyeIcon } from 'lucide-react';

interface ProjectLinksProps {
  project: Project;
}

export function ProjectLinks({ project }: ProjectLinksProps) {
  return (
    <div className="flex flex-row gap-4 justify-center">
      {project.link && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#3d98f4] px-6 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#2a7bc8] focus:outline-none focus:ring-2 focus:ring-[#3d98f4] focus:ring-offset-2 focus:ring-offset-[#101a23]"
          >
            <EyeIcon className="h-5 w-5" />
            View Project
          </Link>
        </motion.div>
      )}

      {project.repoLink && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-12 text-center"
        >
          <Link
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#3d98f4] px-6 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#2a7bc8] focus:outline-none focus:ring-2 focus:ring-[#3d98f4] focus:ring-offset-2 focus:ring-offset-[#101a23]"
          >
            View Repository
          </Link>
        </motion.div>
      )}
    </div>
  );
} 