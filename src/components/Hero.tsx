'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <motion.section 
      className="flex flex-col items-center gap-4 px-4 pb-8 pt-6 text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-white text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">Alex Risch - Dev Portfolio</h1>
      <p className="text-gray-300 text-lg font-normal leading-relaxed sm:text-xl max-w-2xl">
        A passionate developer focused on creating beautiful and functional web applications.
        Specializing in modern web technologies and best practices.
      </p>
    </motion.section>
  );
} 