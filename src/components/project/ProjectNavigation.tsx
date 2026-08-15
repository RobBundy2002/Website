import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProjectNeighbors } from '../../data/projects';

export function ProjectNavigation({ slug }: { slug: string }) {
  const { previous, next } = getProjectNeighbors(slug);

  return (
    <nav className="project-navigation" aria-label="Project navigation">
      <Link to={previous.route ?? '/projects'}>
        <ArrowLeft size={16} aria-hidden="true" />
        <span>{previous.title}</span>
      </Link>
      <Link to="/projects">All Projects</Link>
      <Link to={next.route ?? '/projects'}>
        <span>{next.title}</span>
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </nav>
  );
}
