import React from 'react';
import CaseStudy from '../components/CaseStudy';
import { Link } from 'react-router-dom';

const MatrixMadness = () => {
  const sections = [
    { heading: 'About', content: 'Matrix Madness is a college basketball variant of the popular grid guessing game. Built with React and Node, it offers interactive scoring and social features.' },
    { heading: 'Role', content: 'Front-end architecture and interactive grid implementation.' }
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <CaseStudy
          title="Matrix Madness"
          subtitle="College Hoops Grid Game"
          image="Images/Hoop Grids.png"
          date="Oct 2023 - Jan 2024"
          role="Front-end Developer"
          tech={["React", "Node.js", "MongoDB"]}
          links={[{ href: 'https://matrix-madness-frontend.onrender.com/', label: 'Live' }]}
          sections={sections}
        />

        <div style={{ marginTop: 'var(--spacing-2xl)' }}>
          <Link to="/Website/hostedwebsites" className="back-button">← Back to Hosted Websites</Link>
        </div>
      </div>
    </div>
  );
};

export default MatrixMadness;
