import React from 'react';
import CaseStudy from '../components/CaseStudy';

const ResumeGPT = () => {
  const sections = [
    { heading: 'About', content: "An AI-powered resume builder and analyzer built with React and the OpenAI API. It provides intelligent suggestions, formatting, and content optimization." },
    { heading: 'Role', content: "Full-stack developer: integrated streaming API responses, designed secure key handling, and built the frontend UX." },
    { heading: 'Result', content: "Deployed app on GitHub Pages with streaming experience and secure API patterns." }
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <CaseStudy
          title="Resume GPT"
          subtitle="AI-powered resume builder & analyzer"
          image="Images/ResumeGPT.png"
          date="Apr 2025 - Jun 2025"
          role="Full-stack Developer"
          tech={["React", "OpenAI API", "Node"]}
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

export default ResumeGPT;