import { projectIds, projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import { ProjectHero } from '@/components/ProjectHero';
import { ProjectLinks } from '@/components/ProjectLinks';
import { ProjectDescription } from '@/components/ProjectDescription';

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const pageParams = await params;
  const projectIndex = pageParams.id;
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  return (
    <main className="flex-1 px-4 py-8 sm:px-8 md:px-16 lg:px-24 xl:px-40">
      <div className="mx-auto max-w-4xl">
        <ProjectHero project={project} />
        <ProjectDescription project={project} />
        <ProjectLinks project={project} />
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return projectIds.map((id) => ({
    id,
  }));
}
