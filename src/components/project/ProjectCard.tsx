import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../../data/projects';
import { TechnologyList } from './TechnologyList';

interface ProjectCardProps {
  project: Project;
  variant?: 'featured' | 'substantial' | 'archive';
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
        <TechnologyList technologies={project.technologies.slice(0, variant === 'archive' ? 3 : 5)} compact />
        {project.route ? (
          <span className="card-cta">
            {project.tier === 'featured' ? 'View Case Study' : 'View Details'} <ArrowRight size={16} aria-hidden="true" />
          </span>
        ) : null}
      </div>
    </>
  );

  if (project.route) {
    return (
      <Link className={`project-card ${variant}`} to={project.route} aria-label={`View ${project.title} details`}>
        {content}
      </Link>
    );
  }

  return <article className={`project-card ${variant}`}>{content}</article>;
}
