import { ExternalLink, FileText } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ProjectScreenshot } from '../../components/project/ProjectScreenshot';
import { TechnologyList } from '../../components/project/TechnologyList';
import { Seo } from '../../components/ui/Seo';
import { featuredProjects, getProject } from '../../data/projects';

const featuredSlugs = new Set(featuredProjects.map((project) => project.slug));

export function SecondaryProjectPage() {
  const { slug = '' } = useParams();
  const project = getProject(slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  if (featuredSlugs.has(project.slug)) {
    return <Navigate to={project.route ?? '/projects'} replace />;
  }

  return (
    <>
      <Seo
        title={`${project.title} | Robert Bundy`}
        description={`${project.title}: ${project.summary}`}
        path={`/projects/${project.slug}`}
        image={project.image}
      />
      <article className="secondary-project-page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/projects">Projects</Link>
          <span aria-hidden="true">/</span>
          <span>{project.title}</span>
        </nav>

        <header className="page-hero compact">
          <span className="eyebrow">{project.category}</span>
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
          <p>{project.summary}</p>
          <TechnologyList technologies={project.technologies} />
          <div className="project-cta-row">
            {project.assetUrl ? (
              <a href={project.assetUrl} className="button primary">
                <FileText size={17} aria-hidden="true" />
                {project.assetLabel ?? 'View Asset'}
              </a>
            ) : null}
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button primary">
                <ExternalLink size={17} aria-hidden="true" />
                Live Site
              </a>
            ) : null}
            {project.githubUrl ? (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="button secondary">
                GitHub
              </a>
            ) : null}
          </div>
        </header>

        <section className="page-section">
          <ProjectScreenshot
            src={project.image}
            alt={project.imageAlt ?? `${project.title} screenshot`}
            caption={`${project.title} project visual.`}
          />
        </section>

        <section className="page-section compact-copy">
          <h2>Project Notes</h2>
          <p>
            This project is retained from the previous portfolio as supporting work. It is intentionally shown
            with less weight than the four primary case studies, but the screenshot, project description, and
            supporting links remain available for review.
          </p>
          {project.slug === 'attempt11' ? (
            <p>
              This restores the previous Attempt 11 treatment: a class-project PDF writeup with the final report
              linked directly.
            </p>
          ) : null}
        </section>
      </article>
    </>
  );
}
