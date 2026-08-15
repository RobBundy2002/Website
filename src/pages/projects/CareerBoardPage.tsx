import { ArchitectureDiagram } from '../../components/project/ArchitectureDiagram';
import { ProjectCTA } from '../../components/project/ProjectCTA';
import { ProjectScreenshot } from '../../components/project/ProjectScreenshot';
import { ProjectSection } from '../../components/project/ProjectSection';
import { Seo } from '../../components/ui/Seo';
import { getProject } from '../../data/projects';
import { ProjectLayout } from '../../layouts/ProjectLayout';

const project = getProject('careerboard')!;

export default function CareerBoardPage() {
  return (
    <>
      <Seo
        title="CareerBoard | Rob Bundy"
        description="CareerBoard is a full-stack collaborative job search platform built with Node.js, Express, SQLite, Docker, authorization, analytics, and CI/CD."
        path="/projects/careerboard"
        image={project.image}
      />
      <ProjectLayout project={project}>
        <ProjectSection title="Summary">
          <p>
            CareerBoard models a job search as a collaborative product workflow rather than a scattered set of
            spreadsheets, notes, calendars, bookmarks, and memory. The full app supports teams, applications,
            interviews, comments, activity history, notifications, and analytics.
          </p>
        </ProjectSection>

        <ProjectSection title="Problem / Motivation">
          <p>
            Job searches tend to fragment across tools. CareerBoard explores how a team or career group can
            coordinate applications, referrals, interview prep, and follow-up in one workspace while preserving
            ownership and permissions.
          </p>
        </ProjectSection>

        <ProjectSection title="What I Built">
          <ul className="detail-list">
            <li>Password authentication with expiring signed tokens and revocation support.</li>
            <li>Owner, admin, and member authorization checked against team membership on protected routes.</li>
            <li>Application board, companies, jobs, comments, interviews, activity, notifications, and analytics.</li>
            <li>Durable SQLite-backed notification job queue with an in-process worker.</li>
            <li>Static GitHub Pages demo with realistic fake data plus a local read-write Docker app.</li>
          </ul>
        </ProjectSection>

        <ProjectSection title="Engineering / Architecture">
          <ArchitectureDiagram
            title="CareerBoard Application Architecture"
            nodes={['Product UI', 'Express JSON API', 'Authorization middleware', 'SQLite WAL database', 'Job queue + notifications']}
          />
          <p>
            The implementation centers on a Node/Express server and a relational SQLite model with users,
            teams, memberships, invitations, companies, jobs, applications, comments, interviews, activity,
            analytics events, revoked tokens, jobs queue, and notifications. The API exposes health,
            readiness, auth, collaboration, application, interview, notification, and analytics routes.
          </p>
        </ProjectSection>

        <ProjectSection title="Key Technical Decisions">
          <ul className="detail-list">
            <li>Use a relational model because applications, jobs, companies, teams, comments, and interviews have clear relationships.</li>
            <li>Use team membership as the authorization boundary on every collaborative route.</li>
            <li>Keep analytics as a simple events table so the UI contract can later move to a dedicated analytics provider.</li>
            <li>Include health and readiness probes plus Docker build validation for deployment readiness.</li>
          </ul>
        </ProjectSection>

        <ProjectSection title="Screenshots / Visuals">
          <div className="screenshot-grid">
            <ProjectScreenshot
              src="/Website/assets/projects/careerboard/dashboard.png"
              alt="CareerBoard dashboard"
              caption="Dashboard with pipeline, interviews, analytics, and activity."
            />
            <ProjectScreenshot
              src="/Website/assets/projects/careerboard/welcome.png"
              alt="CareerBoard welcome screen"
              caption="Onboarding and workspace entry point."
            />
          </div>
        </ProjectSection>

        <ProjectSection title="Testing / CI/CD / Deployment">
          <p>
            CareerBoard uses Node syntax checks, Node test runner suites for authorization and health routes,
            npm audit, GitHub Actions CI, and Docker build validation. The demo is published separately as a
            static GitHub Pages presentation surface that does not depend on the database.
          </p>
        </ProjectSection>

        <ProjectSection title="Challenges / Tradeoffs">
          <p>
            CareerBoard balances a real read-write product model with a safe public demo. The public demo is
            intentionally static and does not claim production adoption or business metrics.
          </p>
        </ProjectSection>

        <ProjectSection title="Current Status / Outcome">
          <p>
            The project demonstrates product workflow modeling, relational persistence, route-level
            authorization, operational probes, Docker packaging, and a presentation-friendly static demo.
          </p>
          <ProjectCTA project={project} />
        </ProjectSection>
      </ProjectLayout>
    </>
  );
}
