import { ArchitectureDiagram } from '../../components/project/ArchitectureDiagram';
import { ProjectCTA } from '../../components/project/ProjectCTA';
import { ProjectScreenshot } from '../../components/project/ProjectScreenshot';
import { ProjectSection } from '../../components/project/ProjectSection';
import { Seo } from '../../components/ui/Seo';
import { getProject } from '../../data/projects';
import { ProjectLayout } from '../../layouts/ProjectLayout';

const project = getProject('ujlp')!;
const wikiUrl = 'https://github.com/RobBundy2002/UJLP/wiki';

export default function UJLPPage() {
  return (
    <>
      <Seo
        title="UJLP | Rob Bundy"
        description="A production React 19 publication and member platform with Supabase authentication, database permissions, admin uploads, and automated testing and deployment."
        path="/projects/ujlp"
        image={project.image}
      />
      <ProjectLayout project={project}>
        <ProjectSection title="Summary">
          <p>
            UJLP is the production website for UVA&apos;s Undergraduate Journal of Law &amp; Politics. It combines
            journal publishing and online article readers with a member directory, announcements, meeting
            materials, and an authenticated community network.
          </p>
        </ProjectSection>

        <ProjectSection title="My Role">
          <p>
            As Director of Technology, I build and maintain the publication interface, member workflows,
            Supabase integrations, deployment pipeline, and contributor documentation. The work includes
            ongoing content updates, responsive layouts, authorization checks, and production maintenance.
          </p>
        </ProjectSection>

        <ProjectSection title="Problem / Motivation">
          <p>
            The journal needs to publish scholarship reliably while giving its members a place to maintain
            profiles and share organizational materials. Editors also need to upload meeting files themselves,
            without making a code change for every recap. The platform has to support those workflows and
            remain understandable to the next team maintaining it.
          </p>
        </ProjectSection>

        <ProjectSection title="What I Built">
          <ul className="detail-list">
            <li>Journal issue pages with original PDF downloads, online reading, footnotes, search, and research-area navigation.</li>
            <li>A Supabase-backed member directory with authentication, profile visibility, education, and employment details.</li>
            <li>Community feed interactions, announcements, tasks, and calendar integration.</li>
            <li>Admin-managed meeting recaps inside Announcements, with drafts, file uploads, and public publishing.</li>
            <li>Private attachment storage with short-lived download links for files attached to published recaps.</li>
            <li>Affiliation requests and administrator reviews, separate from self-reported profile fields.</li>
            <li>Reusable staff profiles, role grouping, shared headshot framing, and a generic missing-photo design.</li>
            <li>Automated content, database, browser, accessibility, security, and deployed-site checks.</li>
          </ul>
        </ProjectSection>

        <ProjectSection title="Engineering / Architecture">
          <ArchitectureDiagram
            title="Static publication delivery"
            nodes={['Journal metadata + PDFs', 'React 19 + Vite', 'Validation + tests', 'GitHub Actions', 'GitHub Pages + custom domain']}
          />
          <ArchitectureDiagram
            title="Member and admin data flows"
            nodes={['React profile / recap tools', 'Service modules using fetch', 'Supabase Auth + REST API', 'Postgres RLS + checked functions', 'Private Storage + signed downloads']}
          />
          <p>
            Journal metadata, article text, staff records, and PDFs live in the repository. Member profiles,
            community content, affiliation reviews, and meeting files use Supabase. The browser calls managed
            services directly; GitHub Pages serves the static application rather than running a custom API server.
          </p>
          <p>
            Database Row Level Security and checked functions enforce permissions independently of frontend
            controls. Verification requests target the signed-in member, and administrator approval is checked
            on the server. Uploading a file and attaching it to a recap are separate operations; an unattached
            upload stays private.
          </p>
          <p>
            The <a href={`${wikiUrl}/Architecture`} target="_blank" rel="noreferrer">architecture Wiki</a> includes
            16 diagrams covering system boundaries, database relationships, authentication, upload flows,
            and deployment, with implementation references and current limitations.
          </p>
        </ProjectSection>

        <ProjectSection title="Key Technical Decisions">
          <ul className="detail-list">
            <li>Keep editorial content versioned in Git while allowing routine community updates through admin tools.</li>
            <li>Use Supabase policies for authorization rather than treating hidden buttons or an email allowlist as security.</li>
            <li>Require a saved draft before uploading, then publish only explicitly attached, approved materials.</li>
            <li>Keep reviewed affiliations separate from editable school, company, and organizational-role fields.</li>
            <li>Replace deprecated React Scripts with Vite and Vitest, then upgrade React and React DOM together to React 19.</li>
            <li>Preserve custom-domain hosting, deep-link recovery, existing portrait crops, and the original PDF reading option.</li>
          </ul>
        </ProjectSection>

        <ProjectSection title="Screenshots / Visuals">
          <p>Local desktop snapshots; community requests use empty fixtures rather than private member data.</p>
          <div className="screenshot-grid">
            <ProjectScreenshot
              src="/Website/assets/projects/ujlp/home-desktop.png"
              alt="UJLP homepage with journal publishing and organizational navigation"
              caption="Journal homepage and publication identity."
            />
            <ProjectScreenshot
              src="/Website/assets/projects/ujlp/article-desktop.png"
              alt="UJLP online article reader"
              caption="Article reader, section navigation, and source references."
            />
            <ProjectScreenshot
              src="/Website/assets/projects/ujlp/issue-desktop.png"
              alt="UJLP issue landing page with PDF and online reading options"
              caption="Issue landing page with the original PDF and online reading options."
            />
            <ProjectScreenshot
              src="/Website/assets/projects/ujlp/announcements-desktop.png"
              alt="UJLP announcements page and public meeting recap archive"
              caption="Announcements and meeting materials; the archive is shown with an empty fixture."
            />
          </div>
        </ProjectSection>

        <ProjectSection title="Testing / CI/CD / Deployment">
          <p>
            The repository runs Vitest unit tests, journal metadata validation, and isolated database permission
            tests. Playwright checks article reading, footnotes, mobile layouts, profile editing, recap publishing,
            and file downloads. Synthetic member and admin fixtures exercise those flows without writing to
            production, and Axe scans check accessibility.
          </p>
          <p>
            Pull requests produce before-and-after desktop and mobile screenshots. The deployment workflow
            checks content, unit tests, and database policies before building and publishing to GitHub Pages.
            Separate health checks verify the deployed routes and issue PDF. Weekly maintenance reports cover
            dependencies, broken links, documentation drift, and workflow failures; other jobs scan for secrets,
            archive screenshots, and prepare release notes.
          </p>
          <p>
            Dependency cleanup removed the legacy build-tool chain. The migration lockfile reported zero npm
            vulnerabilities when checked, while build, browser, accessibility, and visual regression checks passed.
            Ongoing scans track new findings rather than assuming that result is permanent.
          </p>
        </ProjectSection>

        <ProjectSection title="Challenges / Tradeoffs">
          <p>
            Static hosting keeps publication delivery simple, but journal and staff changes still require a
            deployment. Supabase gives admins direct editing for community content while adding schema,
            access-policy, and file-lifecycle responsibilities. Removing an attachment does not delete its stored
            bytes, and an already issued download link can remain valid for up to five minutes after unpublishing.
          </p>
          <p>
            Database changes are reviewed and applied separately from frontend deployment. Local permission
            tests model the required schema; they do not replace checking the existing production policies.
            The documentation records these boundaries so future maintainers know what a passing build proves.
          </p>
        </ProjectSection>

        <ProjectSection title="Current Status / Outcome">
          <p>
            The publication is live at ujlawandpolitics.org, with member and admin tools backed by Supabase.
            The repository includes a maintenance handbook, a GitHub Wiki, architecture diagrams, and dated
            visual history to support continued organizational ownership.
          </p>
          <p>
            <a href={wikiUrl} target="_blank" rel="noreferrer">Read the project handbook</a>
          </p>
          <ProjectCTA project={project} />
        </ProjectSection>
      </ProjectLayout>
    </>
  );
}
