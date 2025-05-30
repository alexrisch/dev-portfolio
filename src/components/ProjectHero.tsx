'use client';

import Link from 'next/link';
import { ResponsiveHeroImage } from './ResponsiveHeroImage';
import { motion } from 'framer-motion';
import { Project } from '@/types/project';
import { useCallback, useState } from 'react';

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const onIncrementImage = useCallback(() => {
    setCurrentImageIndex(prev => prev < project.media.length - 1 ? prev + 1 : 0);
  }, [project.media.length]);

  const onDecrementImage = useCallback(() => {
    setCurrentImageIndex(prev => prev > 0 ? prev - 1 : project.media.length - 1);
  }, [project.media.length]);

  const currentImage = project.media[currentImageIndex];

  return (
    <>
      <Link
        href="/"
        className="inline-block mt-8 mb-8 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
      >
        ← Back to Projects
      </Link>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl mb-8 text-center">
          {project.title}
          {project.workInProgress && (
            <span className="text-gray-500 text-sm ml-2">Work in Progress</span>
          )}
        </h1>
        <div className="mb-8 rounded-xl shadow-2xl bg-[#b3ccc5] ">
          <ResponsiveHeroImage
            desktopImage={currentImage}
            mobileImage={currentImage}
            alt={project.title}
            className="rounded-lg object-contain"
            onIncrementImage={onIncrementImage}
            onDecrementImage={onDecrementImage}
          />
        </div>
      </motion.div>

    </>
  );
} 