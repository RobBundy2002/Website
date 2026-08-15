import { ArchitectureDiagram } from '../../components/project/ArchitectureDiagram';
import { ProjectCTA } from '../../components/project/ProjectCTA';
import { ProjectScreenshot } from '../../components/project/ProjectScreenshot';
import { ProjectSection } from '../../components/project/ProjectSection';
import { Seo } from '../../components/ui/Seo';
import { getProject } from '../../data/projects';
import { ProjectLayout } from '../../layouts/ProjectLayout';

const project = getProject('ujlp')!;

export default function UJLPPage() {
  return (
    <>
      <Seo
        title="UJLP | Robert Bundy"
        description="UJLP is the production React and GitHub Pages publication platform for UVA's Undergraduate Journal of Law & Politics."
        path="/projects/ujlp"
        image={project.image}
      />
      <ProjectLayout project={project}>
        <ProjectSection title="Summary">
          <p>
            UJLP is the production website for UVA's Undergraduate Journal of Law & Politics. It supports the
            journal homepage, article pages, author profiles, research areas, archives, announcements, team
            information, and contact surfaces.
          </p>
        </ProjectSection>

        <ProjectSection title="Problem / Motivation">
          <p>
            The organization needed a maintainable modern digital platform for publishing undergraduate legal
            and political scholarship. Unlike a personal demo, the site supports a real student publication and
            needs a clear publishing workflow.
          </p>
        </ProjectSection>

        <ProjectSection title="What I Built">
          <ul className="detail-list">
            <li>React publication site structured around journal issues, articles, authors, and research areas.</li>
            <li>Article reader pages backed by static PDF assets and structured metadata.</li>
            <li>Search, archives, issue filtering, author profiles, and public organizational pages.</li>
            <li>Automated validation for metadata, routes, research-area references, author routes, and PDF references.</li>
            <li>GitHub Actions deployment to GitHub Pages with a custom domain.</li>
          </ul>
        </ProjectSection>

        <ProjectSection title="Engineering / Architecture">
          <ArchitectureDiagram
            title="UJLP Publishing Pipeline"
            nodes={['Structured journalData.js', 'React routes + article pages', 'Validation script', 'Production build', 'GitHub Pages + custom domain']}
          />
          <p>
            UJLP uses structured JavaScript metadata in `src/Data/journalData.js` as the source for issues,
            articles, authors, and research areas. A validation script checks that article routes, author
            routes, research slugs, issue references, and PDF files are consistent before production deploys.
          </p>
        </ProjectSection>

        <ProjectSection title="Key Technical Decisions">
          <ul className="detail-list">
            <li>Use structured static content instead of adding CMS infrastructure for the publication scope.</li>
            <li>Guard publishing with validation checks so missing routes or PDFs fail before deployment.</li>
            <li>Deploy through official GitHub Pages Actions rather than manual branch publishing.</li>
            <li>Keep the site static and maintainable for long-term organizational ownership.</li>
          </ul>
        </ProjectSection>

        <ProjectSection title="Screenshots / Visuals">
          <div className="screenshot-grid">
            <ProjectScreenshot
              src="/Website/assets/projects/ujlp/home-desktop.png"
              alt="UJLP homepage"
              caption="Production journal homepage."
            />
            <ProjectScreenshot
              src="/Website/assets/projects/ujlp/article-desktop.png"
              alt="UJLP article reader"
              caption="Article reader and publication layout."
            />
          </div>
        </ProjectSection>

        <ProjectSection title="Testing / CI/CD / Deployment">
          <p>
            Production pushes run dependency installation, journal content validation, tests, build, Pages
            artifact upload, and deployment. The repository uses `public/CNAME` for the custom domain
            `ujlawandpolitics.org`.
          </p>
        </ProjectSection>

        <ProjectSection title="Challenges / Tradeoffs">
          <p>
            UJLP favors a static publishing workflow over a backend CMS. That keeps hosting simple and cheap,
            but it means content updates happen through repository changes and validation instead of an admin UI.
          </p>
        </ProjectSection>

        <ProjectSection title="Current Status / Outcome">
          <p>
            UJLP is presented as a real production publication platform with ongoing organizational use,
            maintenance responsibilities, and automated deployment.
          </p>
          <ProjectCTA project={project} />
        </ProjectSection>
      </ProjectLayout>
    </>
  );
}
