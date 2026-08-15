import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectCard } from '../components/project/ProjectCard';
import { Seo } from '../components/ui/Seo';
import { SectionHeading } from '../components/ui/SectionHeading';
import { education, experience } from '../data/experience';
import { focusAreas } from '../data/skills';
import { featuredProjects } from '../data/projects';
import { profile } from '../data/profile';

export function HomePage() {
  const currentRole = experience[0];
  const georgiaTech = education[0];

  return (
    <>
      <Seo
        title="Robert Bundy | Software Engineer"
        description="Robert Bundy's engineering portfolio covering backend engineering, platform engineering, developer tooling, infrastructure, CI/CD, and full-stack development."
      />
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Software Engineer</span>
          <h1>Robert Bundy</h1>
          <p>
            I build backend systems, developer tooling, platform infrastructure, and full-stack products
            around practical workflow problems.
          </p>
          <div className="button-row">
            <Link to="/projects" className="button primary">
              View Projects <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="button secondary">
              <Github size={17} aria-hidden="true" />
              GitHub
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="button secondary">
              <Linkedin size={17} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Professional snapshot">
          <div>
            <span>Current</span>
            <strong>Software Engineer II</strong>
            <p>GA-Intelligence / General Atomics</p>
          </div>
          <div>
            <span>Education</span>
            <strong>Georgia Tech OMSCS</strong>
            <p>Human-Computer Interaction specialization</p>
          </div>
          <div>
            <span>Location</span>
            <strong>Charlottesville, Virginia</strong>
          </div>
        </aside>
      </section>

      <section className="page-section">
        <SectionHeading
          eyebrow="Selected Work"
          title="Four projects with the clearest engineering story"
          description="The homepage stays brief. Each case study explains motivation, architecture, tradeoffs, and implementation details."
        />
        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="page-section two-column-section">
        <div>
          <SectionHeading eyebrow="Experience Snapshot" title="Professional and graduate work" />
          <div className="snapshot-list">
            <article>
              <span>{currentRole.dates}</span>
              <h3>{currentRole.role}</h3>
              <p>{currentRole.organization}</p>
            </article>
            <article>
              <span>{georgiaTech.dates}</span>
              <h3>{georgiaTech.credential}</h3>
              <p>{georgiaTech.school}</p>
            </article>
          </div>
          <Link to="/experience" className="inline-link">
            View Experience <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div>
          <SectionHeading eyebrow="Technical Focus" title="Where the work clusters" />
          <div className="focus-grid">
            {focusAreas.map((area) => (
              <article key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-band">
        <div>
          <span className="eyebrow">Contact</span>
          <h2>Interested in backend, platform, or product engineering work?</h2>
          <p>Reach out by email or connect through GitHub and LinkedIn.</p>
        </div>
        <a href={`mailto:${profile.email}`} className="button primary">
          <Mail size={17} aria-hidden="true" />
          Email Robert
        </a>
      </section>
    </>
  );
}
