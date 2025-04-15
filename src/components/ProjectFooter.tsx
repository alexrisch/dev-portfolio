'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types/project';

interface ProjectFooterProps {
  project: Project;
}

export function ProjectFooter({ project }: ProjectFooterProps) {
  if (!project.footer) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="mb-8"
    >
      <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
      <p className="text-gray-600 dark:text-gray-300">{project.footer}</p>
    </motion.div>
  );
} 