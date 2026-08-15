import { ProjectCard } from '../components/project/ProjectCard';
import { Seo } from '../components/ui/Seo';
import { SectionHeading } from '../components/ui/SectionHeading';
import { featuredProjects, otherProjects } from '../data/projects';

export function ProjectsPage() {
  return (
    <>
      <Seo
        title="Projects | Rob Bundy"
        description="Project work by Rob Bundy, including Kubernetes tooling, full-stack products, production web platforms, privacy-first frontend architecture, games, data analysis, and research."
        path="/projects"
      />
      <section className="page-hero compact">
        <span className="eyebrow">Work</span>
        <h1>Project portfolio</h1>
        <p>
          A collection of platform tools, full-stack applications, production websites, data projects, games,
          and HCI-oriented work.
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
          eyebrow="Project Index"
          title="Applications, games, research, and data projects"
          description="Each project has its own page with context, implementation notes, technologies, and available screenshots or reports."
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
