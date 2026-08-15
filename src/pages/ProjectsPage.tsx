import { ProjectCard } from '../components/project/ProjectCard';
import { Seo } from '../components/ui/Seo';
import { SectionHeading } from '../components/ui/SectionHeading';
import { featuredProjects, otherProjects } from '../data/projects';

export function ProjectsPage() {
  return (
    <>
      <Seo
        title="Projects | Robert Bundy"
        description="Selected and secondary project work by Robert Bundy, including Kubernetes tooling, full-stack products, production web platforms, privacy-first frontend architecture, games, and research."
        path="/projects"
      />
      <section className="page-hero compact">
        <span className="eyebrow">Work</span>
        <h1>Project portfolio</h1>
        <p>
          Selected work leads with the strongest backend, platform, product, and production ownership stories.
          Earlier projects remain available as secondary work for breadth.
        </p>
      </section>

      <section className="page-section">
        <SectionHeading eyebrow="Selected Work" title="Featured case studies" />
        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="page-section">
        <SectionHeading
          eyebrow="Other Work"
          title="Earlier projects, games, coursework, and experiments"
          description="These projects are preserved from the previous portfolio, but intentionally presented with smaller visual weight than the main case studies."
        />
        <div className="other-grid">
          {otherProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="compact" />
          ))}
        </div>
      </section>
    </>
  );
}
