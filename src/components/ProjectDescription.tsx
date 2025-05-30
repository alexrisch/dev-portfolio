'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types/project';

interface ProjectDescriptionProps {
  project: Project;
}

export function ProjectDescription({ project }: ProjectDescriptionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="md:col-span-2"
      >
        <h2
          className="mb-4 text-2xl font-semibold leading-tight text-white"
        >
          Project Overview
        </h2>
        <p
          className="text-base font-normal leading-relaxed text-slate-300"
        >
          {project.description}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-8"
      >
        <h2
          className="mb-4 text-2xl font-semibold leading-tight text-white"
        >
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="rounded-full bg-[#223649] px-4 py-2 text-sm font-medium text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 