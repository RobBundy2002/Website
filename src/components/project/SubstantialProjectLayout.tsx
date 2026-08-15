import { ProjectCTA } from './ProjectCTA';
import { ProjectScreenshot } from './ProjectScreenshot';
import { TechnologyList } from './TechnologyList';
import type { Project } from '../../data/projects';
import type { ProjectContent } from '../../content/projectContent';

interface SubstantialProjectLayoutProps {
  project: Project;
  content: ProjectContent;
}

export function SubstantialProjectLayout({ project, content }: SubstantialProjectLayoutProps) {
  return (
    <article className="tier-project-page substantial-project-page">
      <header className="tier-project-hero">
        <div>
          <span className="eyebrow">{project.category}</span>
          <h1>{project.title}</h1>
          {project.subtitle ? <p className="project-subtitle">{project.subtitle}</p> : null}
          {project.dates ? <p className="project-meta-line">{project.dates}</p> : null}
          <div className="tier-intro">
            {content.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ProjectCTA project={project} />
        </div>
        {project.image ? (
          <ProjectScreenshot
            src={project.image}
            alt={project.imageAlt ?? `${project.title} visual`}
            caption={`${project.title} visual from the portfolio assets.`}
          />
        ) : null}
      </header>

      {content.metrics?.length ? (
        <section className="project-metrics" aria-label={`${project.title} metrics`}>
          {content.metrics.map((metric) => (
            <article key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              {metric.note ? <p>{metric.note}</p> : null}
            </article>
          ))}
        </section>
      ) : null}

      <section className="tier-content-grid">
        {content.role ? (
          <div className="tier-section">
            <h2>My Contribution</h2>
            <p>{content.role}</p>
          </div>
        ) : null}
        {content.sections.map((section) => (
          <div className="tier-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets?.length ? (
              <ul className="detail-list">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </section>

      <section className="tier-section technology-section">
        <h2>Technology</h2>
        <TechnologyList technologies={project.technologies} />
      </section>
    </article>
  );
}
