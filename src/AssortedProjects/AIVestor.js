import React from 'react';
import CaseStudy from '../components/CaseStudy';

const AIVestor = () => {
  const sections = [
    { heading: 'About', content: 'AI Vestor is an intelligent investment analysis platform that leverages AI to provide market insights and portfolio optimization. It combines machine learning algorithms with real-time data to deliver actionable recommendations.' },
    { heading: 'Role', content: 'Designed core ML pipeline, integrated new data sources, and implemented visualization components.' },
    { heading: 'Impact', content: 'Improved prediction accuracy and generated production-ready insights for portfolio decisions.' }
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <CaseStudy
          title="AI Vestor"
          subtitle="Intelligent Investment Analysis Platform"
          image="Images/AIVestor.png"
          date="2024 - 2025"
          role="Lead Developer"
          tech={["Python", "TensorFlow", "React", "API"]}
          links={[{ href: 'https://github.com/RobBundy2002', label: 'Repo' }]}
          sections={sections}
        />

        <div style={{ marginTop: 'var(--spacing-2xl)' }}>
          <a href="/Website/assortedprojects" className="back-button">← Back to Projects</a>
        </div>
      </div>
    </div>
  );
};

export default AIVestor;