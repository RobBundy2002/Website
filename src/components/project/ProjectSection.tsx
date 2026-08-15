import type { ReactNode } from 'react';

interface ProjectSectionProps {
  title: string;
  children: ReactNode;
}

export function ProjectSection({ title, children }: ProjectSectionProps) {
  return (
    <section className="project-section">
      <h2>{title}</h2>
      <div className="project-section-content">{children}</div>
    </section>
  );
}
