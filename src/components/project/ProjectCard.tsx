import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../../data/projects';
import { TechnologyList } from './TechnologyList';

interface ProjectCardProps {
  project: Project;
  variant?: 'featured' | 'compact';
}

export function ProjectCard({ project, variant = 'featured' }: ProjectCardProps) {
  const content = (
    <>
      {project.image ? (
        <img src={project.image} alt={project.imageAlt ?? `${project.title} screenshot`} loading="lazy" />
      ) : (
        <div className="media-placeholder">Screenshot pending</div>
      )}
      <div className="project-card-body">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <TechnologyList technologies={project.technologies.slice(0, variant === 'compact' ? 3 : 5)} compact />
        {project.route ? (
          <span className="card-cta">
            {project.featured ? 'View Case Study' : 'View Project'} <ArrowRight size={16} aria-hidden="true" />
          </span>
        ) : null}
      </div>
    </>
  );

  if (project.route) {
    return (
      <Link className={`project-card ${variant}`} to={project.route} aria-label={`View ${project.title} case study`}>
        {content}
      </Link>
    );
  }

  return <article className={`project-card ${variant}`}>{content}</article>;
}
