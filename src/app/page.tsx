import { projects } from '@/data/projects';
import Link from 'next/link';
import { ResponsiveHeaderImage } from '@/components/ResponsiveHeaderImage';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Alex Risch</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          A passionate developer focused on creating beautiful and functional web applications.
          Specializing in modern web technologies and best practices.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(projects).map(([id, project]) => (
            <Link 
              href={`/projects/${id}`} 
              key={id}
              className="group block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <ResponsiveHeaderImage
                desktopImage={project.headerMedia}
                mobileImage={project.headerMediaMobile}
                alt={project.title}
                className="object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
