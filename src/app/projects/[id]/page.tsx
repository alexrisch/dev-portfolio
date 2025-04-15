import { projectIds, projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import { ProjectHero } from '@/components/ProjectHero';
import { ProjectLinks } from '@/components/ProjectLinks';
import { ProjectDescription } from '@/components/ProjectDescription';
import { ProjectGallery } from '@/components/ProjectGallery';
import { ProjectFooter } from '@/components/ProjectFooter';

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
        <ProjectHero project={project} />
        <ProjectLinks project={project} />
        <ProjectDescription project={project} />
        <ProjectGallery project={project} />
        <ProjectFooter project={project} />
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return projectIds.map((id) => ({
    id,
  }));
}
