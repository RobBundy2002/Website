import { ArchitectureDiagram } from '../../components/project/ArchitectureDiagram';
import { ProjectCTA } from '../../components/project/ProjectCTA';
import { ProjectScreenshot } from '../../components/project/ProjectScreenshot';
import { ProjectSection } from '../../components/project/ProjectSection';
import { Seo } from '../../components/ui/Seo';
import { getProject } from '../../data/projects';
import { ProjectLayout } from '../../layouts/ProjectLayout';

const project = getProject('northstar')!;

export default function NorthstarPage() {
  return (
    <>
      <Seo
        title="Northstar | Rob Bundy"
        description="Northstar is a Kubernetes operations platform for cluster debugging, observability, RBAC-aware operations, Prometheus metrics, Docker, and Helm workflows."
        path="/projects/northstar"
        image={project.image}
      />
      <ProjectLayout project={project}>
        <ProjectSection title="Summary">
          <p>
            Northstar is a browser-based Kubernetes operations cockpit built around recurring friction in
            day-to-day cluster debugging. It brings contexts, namespaces, pods, workloads, nodes, events,
            logs, metrics, and guarded actions into one operational surface.
          </p>
        </ProjectSection>

        <ProjectSection title="Problem / Motivation">
          <p>
            Kubernetes troubleshooting often means moving between kubectl, k9s, logs, workload descriptions,
            metrics, RBAC checks, cluster contexts, and deployment tooling. Northstar explores how those
            workflows can be consolidated without hiding the operational boundaries that make Kubernetes safe.
          </p>
        </ProjectSection>

        <ProjectSection title="What I Built">
          <ul className="detail-list">
            <li>Multi-context Kubernetes dashboard with simulated and real-cluster modes.</li>
            <li>Pod, workload, node, event, alert, YAML, describe, and log inspection views.</li>
            <li>Metrics Server and Prometheus integration for cluster and workload visibility.</li>
            <li>Guarded operational actions including rollout restart, scale, resources, delete, exec, and port-forward.</li>
            <li>Read-only mode, RBAC checks, production confirmations, and audit logging for action attempts.</li>
          </ul>
        </ProjectSection>

        <ProjectSection title="Engineering / Architecture">
          <ArchitectureDiagram
            title="Northstar Runtime Architecture"
            nodes={[
              'Browser UI',
              'Node HTTP API',
              'kubectl / kubeconfig',
              'Kubernetes clusters',
              'Prometheus',
              'Dashboard + audit JSON volume'
            ]}
          />
          <p>
            The repository uses a thin browser UI backed by a Node HTTP API in `server.js`. The server owns
            kubeconfig access, kubectl calls, validation, read-only enforcement, log streaming, port-forward
            lifecycle, audit writes, and Prometheus queries. Simulated mode follows the same API contract so
            the GitHub Pages demo can run without a cluster.
          </p>
        </ProjectSection>

        <ProjectSection title="Key Technical Decisions">
          <ul className="detail-list">
            <li>Keep cluster credentials and kubectl access server-side instead of exposing them to the browser.</li>
            <li>Use RBAC-aware checks through `kubectl auth can-i` before enabling privileged operations.</li>
            <li>Enforce read-only mode and production confirmations at the API layer, not only in the UI.</li>
            <li>Support Docker Compose for local handoff and Helm for in-cluster deployment with ServiceAccount RBAC.</li>
          </ul>
        </ProjectSection>

        <ProjectSection title="Screenshots / Visuals">
          <div className="screenshot-grid">
            <ProjectScreenshot
              src="/Website/assets/projects/northstar/overview.png"
              alt="Northstar overview dashboard"
              caption="Cluster overview and operational dashboard."
            />
            <ProjectScreenshot
              src="/Website/assets/projects/northstar/pod-log-viewer.png"
              alt="Northstar pod and log viewer"
              caption="Pod inspection and log viewer workflow."
            />
          </div>
        </ProjectSection>

        <ProjectSection title="Testing / CI/CD / Deployment">
          <p>
            The repository includes Node syntax checks, Node test runner suites, GitHub Actions CI, container
            build validation, Trivy scanning, Docker Compose demos, Kubernetes manifests, and a Helm chart.
          </p>
        </ProjectSection>

        <ProjectSection title="Challenges / Tradeoffs">
          <p>
            The central tradeoff is offering a useful operational cockpit while keeping cluster-changing
            behavior explicit and guarded. Northstar avoids claiming production deployment scale; the emphasis
            is on workflow design, safety boundaries, and handoff-friendly deployment options.
          </p>
        </ProjectSection>

        <ProjectSection title="Current Status / Outcome">
          <p>
            Northstar has an interactive GitHub Pages demo, a Docker-backed local demo, real-cluster handoff
            instructions, RBAC profiles, and Helm deployment support.
          </p>
          <ProjectCTA project={project} />
        </ProjectSection>
      </ProjectLayout>
    </>
  );
}
