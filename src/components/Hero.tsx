'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <motion.section 
      className="max-w-4xl mx-auto mb-16"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-4xl font-bold mb-4">Alex Risch</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300">
        A passionate developer focused on creating beautiful and functional web applications.
        Specializing in modern web technologies and best practices.
      </p>
    </motion.section>
  );
} 