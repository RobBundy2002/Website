import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../../data/projects';

export function ProjectCTA({ project }: { project: Project }) {
  return (
    <div className="project-cta-row">
      {project.githubUrl ? (
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="button secondary">
          <Github size={17} aria-hidden="true" />
          GitHub
        </a>
      ) : null}
      {project.liveUrl ? (
        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button primary">
          <ExternalLink size={17} aria-hidden="true" />
          Live Site
        </a>
      ) : null}
    </div>
  );
}
