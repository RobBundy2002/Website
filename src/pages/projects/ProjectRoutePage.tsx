import { Link, Navigate, useParams } from 'react-router-dom';
import { ArchiveProjectLayout } from '../../components/project/ArchiveProjectLayout';
import { SubstantialProjectLayout } from '../../components/project/SubstantialProjectLayout';
import { Seo } from '../../components/ui/Seo';
import { projectContent } from '../../content/projectContent';
import { getProject } from '../../data/projects';

export function ProjectRoutePage() {
  const { slug = '' } = useParams();
  const project = getProject(slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  if (project.tier === 'featured') {
    return <Navigate to={project.route ?? '/projects'} replace />;
  }

  const content = projectContent[project.slug];

  if (!content) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Seo
        title={`${project.title} | Rob Bundy`}
        description={`${project.title}: ${project.summary}`}
        path={`/projects/${project.slug}`}
        image={project.image}
      />
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/projects">Projects</Link>
        <span aria-hidden="true">/</span>
        <span>{project.title}</span>
      </nav>
      {project.tier === 'substantial' ? (
        <SubstantialProjectLayout project={project} content={content} />
      ) : (
        <ArchiveProjectLayout project={project} content={content} />
      )}
    </>
  );
}
