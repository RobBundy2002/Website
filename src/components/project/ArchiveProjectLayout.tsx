import { ProjectCTA } from './ProjectCTA';
import { ProjectScreenshot } from './ProjectScreenshot';
import { TechnologyList } from './TechnologyList';
import type { Project } from '../../data/projects';
import type { ProjectContent } from '../../content/projectContent';

interface ArchiveProjectLayoutProps {
  project: Project;
  content: ProjectContent;
}

export function ArchiveProjectLayout({ project, content }: ArchiveProjectLayoutProps) {
  return (
    <article className="tier-project-page archive-project-page">
      <header className="archive-header">
        <span className="eyebrow">{project.category}</span>
        <h1>{project.title}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
        {project.dates ? <p className="project-meta-line">{project.dates}</p> : null}
      </header>

      <section className="archive-layout">
        <div>
          {project.image ? (
            <ProjectScreenshot
              src={project.image}
              alt={project.imageAlt ?? `${project.title} visual`}
              caption={`${project.title} visual from the original portfolio assets.`}
            />
          ) : null}
        </div>
        <div className="archive-copy">
          {content.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {content.features?.length ? (
            <section>
              <h2>Key Features / Mechanics</h2>
              <ul className="detail-list">
                {content.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <section>
            <h2>Technology</h2>
            <TechnologyList technologies={project.technologies} />
          </section>

          {content.learned?.length ? (
            <section>
              <h2>What I Learned</h2>
              {content.learned.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </section>
          ) : null}

          <ProjectCTA project={project} />
        </div>
      </section>
    </article>
  );
}
