import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <Hero />
      <Projects />
    </main>
  );
}
