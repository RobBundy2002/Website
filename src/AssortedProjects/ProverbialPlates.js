import React from 'react';
import CaseStudy from '../components/CaseStudy';

const ProverbialPlates = () => {
  const sections = [
    { heading: 'About', content: "Mobile app built with React Native and Expo that helps organize pantry items and suggests recipes based on available ingredients." },
    { heading: 'Role', content: "Full-stack mobile developer: designed app flow, implemented storage and recipe ranking." },
    { heading: 'Outcome', content: "Delivered a user-friendly app demonstrating inventory-first recipe recommendations." }
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <CaseStudy
          title="Proverbial Plates"
          subtitle="Pantry & Recipe Mobile App"
          image="Images/Proverbial Plates.PNG"
          date="Oct 2023 - Jan 2024"
          role="Mobile Developer"
          tech={["React Native", "Expo", "JavaScript"]}
          links={[{ href: '#', label: 'Repo' }]}
          sections={sections}
        />

        <div style={{ marginTop: 'var(--spacing-2xl)' }}>
          <a href="/Website/assortedprojects" className="back-button">← Back to Projects</a>
        </div>
      </div>
    </div>
  );
};

export default ProverbialPlates;
