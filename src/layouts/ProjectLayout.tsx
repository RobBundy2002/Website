import type { ReactNode } from 'react';
import { ProjectCTA } from '../components/project/ProjectCTA';
import { ProjectNavigation } from '../components/project/ProjectNavigation';
import { TechnologyList } from '../components/project/TechnologyList';
import type { Project } from '../data/projects';

interface ProjectLayoutProps {
  project: Project;
  children: ReactNode;
}

export function ProjectLayout({ project, children }: ProjectLayoutProps) {
  return (
    <article className="project-detail-page">
      <header className="project-hero">
        <div className="project-hero-copy">
          <span className="eyebrow">{project.category}</span>
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
          <p>{project.summary}</p>
          <TechnologyList technologies={project.technologies} />
          <ProjectCTA project={project} />
        </div>
        <div className="project-hero-media">
          {project.image ? <img src={project.image} alt={project.imageAlt ?? `${project.title} screenshot`} /> : null}
        </div>
      </header>
      <div className="project-detail-content">{children}</div>
      <ProjectNavigation slug={project.slug} />
    </article>
  );
}
