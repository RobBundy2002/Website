import { ArchitectureDiagram } from '../../components/project/ArchitectureDiagram';
import { ProjectCTA } from '../../components/project/ProjectCTA';
import { ProjectScreenshot } from '../../components/project/ProjectScreenshot';
import { ProjectSection } from '../../components/project/ProjectSection';
import { Seo } from '../../components/ui/Seo';
import { getProject } from '../../data/projects';
import { ProjectLayout } from '../../layouts/ProjectLayout';

const project = getProject('resumegpt')!;

export default function ResumeGPTPage() {
  return (
    <>
      <Seo
        title="ResumeGPT | Rob Bundy"
        description="ResumeGPT is a privacy-first React, TypeScript, and Vite resume analyzer that parses resumes locally, normalizes skills, performs deterministic matching, and generates an AI-ready prompt."
        path="/projects/resumegpt"
        image={project.image}
      />
      <ProjectLayout project={project}>
        <ProjectSection title="Summary">
          <p>
            ResumeGPT is a privacy-first resume and job-description analyzer. Its current architecture is a
            static React, TypeScript, and Vite application where the core resume analysis runs locally in the
            browser.
          </p>
        </ProjectSection>

        <ProjectSection title="Problem / Motivation">
          <p>
            Many resume-analysis tools ask users to upload sensitive resume data and return opaque scores.
            ResumeGPT uses a more explainable approach: parse the resume locally, normalize skills, match
            deterministically, show evidence, and let the user decide whether to copy an AI-ready prompt into
            an external AI service.
          </p>
        </ProjectSection>

        <ProjectSection title="What I Built">
          <ul className="detail-list">
            <li>Client-side PDF and TXT resume parsing using browser APIs and `pdfjs-dist`.</li>
            <li>Skill normalization with aliases such as Kubernetes/k8s and Node.js/Node/NodeJS.</li>
            <li>Deterministic matcher that avoids false positives such as matching Java inside JavaScript.</li>
            <li>Explainable scoring with required, preferred, and other detected job skills weighted separately.</li>
            <li>Optional AI-ready prompt generation without a ResumeGPT backend or application-owned AI credential.</li>
          </ul>
        </ProjectSection>

        <ProjectSection title="Engineering / Architecture">
          <ArchitectureDiagram
            title="ResumeGPT Local Analysis Flow"
            nodes={[
              'Resume PDF / TXT',
              'Browser parser',
              'Skill normalization',
              'Deterministic matcher',
              'Explainable score + evidence',
              'Optional AI-ready prompt'
            ]}
          />
          <p>
            The app does not operate an Express backend, does not store API keys, and does not upload resumes
            to a ResumeGPT server. `parseResumeFile` extracts local text from PDF or TXT files, `extractSkills`
            normalizes and classifies skills, `analyzeMatch` builds matched and missing-skill evidence, and
            `scoreMatches` produces deterministic coverage and category scores.
          </p>
        </ProjectSection>

        <ProjectSection title="Privacy">
          <p>
            Core processing happens in browser memory. ResumeGPT does not require its own backend, does not
            require a database, does not put resume content in URLs, and does not directly call OpenAI or
            another AI provider. The AI workflow is a generated prompt that the user may copy elsewhere.
          </p>
        </ProjectSection>

        <ProjectSection title="Screenshots / Visuals">
          <ProjectScreenshot
            src="/Website/assets/projects/resumegpt/screenshot.png"
            alt="ResumeGPT application interface"
            caption="Resume upload, job-description input, analysis output, and privacy controls."
          />
        </ProjectSection>

        <ProjectSection title="Testing / CI/CD / Deployment">
          <p>
            ResumeGPT includes Vitest service tests for matching, parsing, and prompt generation, React Testing
            Library coverage, Playwright local-flow tests, GitHub Actions CI, and GitHub Pages deployment from
            Vite `dist/`.
          </p>
        </ProjectSection>

        <ProjectSection title="Challenges / Tradeoffs">
          <p>
            Deterministic matching is less flexible than a hosted AI system, but it is explainable, repeatable,
            and better aligned with local resume privacy. The optional prompt path keeps AI support available
            without adding credentials or server infrastructure.
          </p>
        </ProjectSection>

        <ProjectSection title="Current Status / Outcome">
          <p>
            ResumeGPT is a static privacy-first browser application hosted on GitHub Pages and intentionally
            avoids backend, database, authentication, and cloud-storage dependencies.
          </p>
          <ProjectCTA project={project} />
        </ProjectSection>
      </ProjectLayout>
    </>
  );
}
