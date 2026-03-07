import React from 'react';
import CaseStudy from '../components/CaseStudy';

const Wordle = () => {
  const sections = [
    { heading: 'About', content: 'Wordle App Recreation implemented with Java and JavaFX. Includes a dictionary and classic Wordle gameplay mechanics.' },
    { heading: 'Role', content: 'Built the JavaFX UI and underlying game logic.' },
    { heading: 'Outcome', content: 'Functional desktop recreation suitable for demonstrations and teaching.' }
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <CaseStudy
          title="Wordle Recreation"
          subtitle="JavaFX desktop recreation"
          image="Images/Wordle Recreation.jpg"
          date="2023"
          role="Developer"
          tech={["Java", "JavaFX"]}
          links={[]}
          sections={sections}
        />

        <div style={{ marginTop: 'var(--spacing-2xl)' }}>
          <a href="/Website/assortedprojects" className="back-button">← Back to Projects</a>
        </div>
      </div>
    </div>
  );
};

export default Wordle;
