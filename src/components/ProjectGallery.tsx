'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/types/project';

interface ProjectGalleryProps {
  project: Project;
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="mb-8"
    >
      <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {project.media.map((mediaUrl, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              delay: 0.8 + index * 0.1,
              ease: "easeOut"
            }}
            className="relative"
          >
            <a href={mediaUrl} rel="noopener noreferrer">
              <Image
                src={mediaUrl}
                alt={`${project.title} image ${index + 1}`}
                className="object-contain rounded-lg"
                width={200}
                height={200}
              />
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 