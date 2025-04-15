import { projectIds, projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ResponsiveHeaderImage } from '@/components/ResponsiveHeaderImage';

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const pageParams = await params;
  const projectIndex = pageParams.id;
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-8 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
        >
          ← Back to Projects
        </Link>

        <article>
          <h1 className="text-4xl font-bold mb-4">{project.title}
            {project.workInProgress && (
              <span className="text-gray-500 text-sm ml-2">Work in Progress</span>
            )}
          </h1>
          <div className="mb-8">
            <ResponsiveHeaderImage
              desktopImage={project.headerMedia}
              mobileImage={project.headerMediaMobile}
              alt={project.title}
              className="rounded-lg"
            />
          </div>
          {project.link && (
            <div className="mb-8">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                View Project
              </a>
            </div>
          )}


          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.media.map((mediaUrl, index) => (
                <div key={index} className="relative">
                  <Image
                    src={mediaUrl}
                    alt={`${project.title} image ${index + 1}`}
                    className="object-contain rounded-lg"
                    width={200}
                    height={200}
                  />
                </div>
              ))}
            </div>
          </div>
          {project.repoLink && (
            <div className="mb-8">
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                View Repository
              </a>
            </div>
          )}
          {project.footer && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
              <p className="text-gray-600 dark:text-gray-300">{project.footer}</p>
            </div>
          )}
        </article>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return projectIds.map((id) => ({
    id,
  }));
}
