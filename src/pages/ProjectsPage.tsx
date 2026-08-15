import { ProjectCard } from '../components/project/ProjectCard';
import { Seo } from '../components/ui/Seo';
import { SectionHeading } from '../components/ui/SectionHeading';
import { archiveProjects, featuredProjects, substantialProjects } from '../data/projects';

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
          eyebrow="Research & Substantial Projects"
          title="Full-stack builds and research work"
          description="Medium-depth pages for projects with enough implementation or research substance to warrant more than an archive entry."
        />
        <div className="substantial-grid">
          {substantialProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="substantial" />
          ))}
        </div>
      </section>

      <section className="page-section">
        <SectionHeading
          eyebrow="Project Archive"
          title="Earlier games, coursework, and smaller builds"
          description="Concise pages for older work, class projects, and game prototypes. These entries keep the artifacts available without treating each one like a full case study."
        />
        <div className="archive-grid">
          {archiveProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="archive" />
          ))}
        </div>
      </section>
    </>
  );
}
