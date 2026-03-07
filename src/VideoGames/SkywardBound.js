import React from 'react';
import CaseStudy from '../components/CaseStudy';

const SkywardBound = () => {
  const sections = [
    { heading: 'About', content: 'Skyward Bound is a vertical platformer built in Unity featuring dynamic difficulty, power-ups, and precision-based scoring.' },
    { heading: 'Role', content: 'Implemented core C# gameplay systems and level design mechanics.' },
    { heading: 'Result', content: 'A polished gameplay prototype suitable for showcases.' }
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <CaseStudy
          title="Skyward Bound"
          subtitle="Unity vertical platformer"
          image="Images/Skyward Bound.jpg"
          date="2024"
          role="Gameplay Programmer"
          tech={["Unity", "C#"]}
          links={[]}
          sections={sections}
        />

        <div style={{ marginTop: 'var(--spacing-2xl)' }}>
          <a href="/Website/videogames" className="back-button">← Back to Video Games</a>
        </div>
      </div>
    </div>
  );
};

export default SkywardBound; 