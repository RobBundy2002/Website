import React from 'react';
import CaseStudy from '../components/CaseStudy';
import { Link } from 'react-router-dom';

const CelestialArcade = () => {
  const sections = [
    { heading: 'About', content: 'Celestial Arcade is a collection of lightweight browser games built with React and Tailwind CSS.' },
    { heading: 'Role', content: 'Implemented UI, game wrappers, and deployment pipeline.' }
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <CaseStudy
          title="Celestial Arcade"
          subtitle="Web games hub"
          video="Videos/RecordingCA.mp4"
          date="2023 - 2024"
          role="Full-stack"
          tech={["React", "Tailwind CSS"]}
          links={[{ href: 'https://robbundy2002.github.io/Gaming-Website-Project/', label: 'Live' }]}
          sections={sections}
        />

        <div style={{ marginTop: 'var(--spacing-2xl)' }}>
          <Link to="/Website/projects" className="back-button">← Back to Assorted Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default CelestialArcade; 