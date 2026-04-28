import React from 'react';
import CaseStudy from '../components/CaseStudy';
import { Link } from 'react-router-dom';

const UJLP = () => {
  const sections = [
    {
      heading: 'Project Summary',
      content: 'UJLP (Undergraduate Journal for Law & Politics) is a content-first academic website built to publish articles, host editorial content, and manage submissions. The site emphasizes accessibility, clear reading experience, and a lightweight CMS for contributors.'
    },
    {
      heading: 'My Role',
      content: 'Led full-stack implementation: component-driven React frontend, CMS integration, responsive UI, and deployment pipeline. Focused on accessibility and editorial UX.'
    },
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <CaseStudy
          title="UJLP — CIO Website"
          subtitle="Academic journal platform"
          video="Videos/UJLPRecording.mp4"
          date="Oct 2024 - Present"
          role="Lead Developer"
          tech={["React", "Node.js", "Tailwind CSS"]}
          links={[{ href: 'https://ujlawandpolitics.org/', label: 'Live Site' }]}
          sections={sections}
        />

        <div style={{ marginTop: 'var(--spacing-2xl)' }}>
          <Link to="/Website/projects" className="back-button">← Back to Assorted Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default UJLP;
