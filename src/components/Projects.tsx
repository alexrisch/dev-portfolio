'use client';

import { projects } from '@/data/projects';
import Link from 'next/link';
import { ResponsiveHeaderImage } from '@/components/ResponsiveHeaderImage';
import { motion } from 'framer-motion';

export function Projects() {
  const IMAGE_BACKGROUND_COLORS = ["#f6e4d8", "#b3ccc5", "#bfc7b8"];

  return (
    <motion.section
      className="max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(projects).map(([id, project], index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2 + index * 0.1,
              ease: "easeOut"
            }}
          >
            <Link
              href={`/projects/${id}`}
              className="group flex flex-col rounded-xl bg-[#182634] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div 
                className={`bg-[${IMAGE_BACKGROUND_COLORS[index % IMAGE_BACKGROUND_COLORS.length]}]`}
              >
                <ResponsiveHeaderImage
                  desktopImage={project.headerMedia}
                  mobileImage={project.headerMediaMobile}
                  alt={project.title}
                  index={index}
                  className={`object-contain`}
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-grow">
                <h3
                  className="text-white text-xl font-bold leading-tight group-hover:text-[#3d98f4] transition-colors duration-300"
                >
                  {project.title}
                </h3>
                <p
                  className="text-[#90adcb] text-sm font-normal leading-normal flex-grow"
                >
                  {project.description}
                </p>
                <div className="mt-auto pt-2">
                  <span
                    className="inline-flex items-center text-sm font-medium text-[#3d98f4]"
                  >
                    View Project
                    <svg
                      className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 