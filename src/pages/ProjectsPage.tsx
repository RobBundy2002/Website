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
          description="Larger builds and research projects with implementation details, methodology, results, and supporting artifacts."
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
          description="Earlier games, class projects, and smaller builds that show the path from coursework to larger product and platform work."
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
