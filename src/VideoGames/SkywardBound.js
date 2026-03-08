import React from 'react';
import CaseStudy from '../components/CaseStudy';
import { Link } from 'react-router-dom';

const SkywardBound = () => {
  const sections = [
    { heading: 'About', content: 'Skyward Bound is a vertical platformer built in Unity featuring dynamic difficulty, power-ups, and precision-based scoring.' },
    { heading: 'Role', content: 'Implemented core C# gameplay systems and level design mechanics.' },
    { heading: 'Team', content: 'Developed alongside Kathleen (Katie) Mead and Hayden Johnson at the University of Virginia.' }
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <CaseStudy
          title="Skyward Bound"
          subtitle="Unity vertical platformer"
          video="Videos/SkywardBound.mp4"
          date="2024"
          role="Gameplay Programmer"
          tech={["Unity", "C#"]}
          links={[]}
          sections={sections}
        />

        <div style={{ marginTop: 'var(--spacing-2xl)' }}>
          <Link to="/Website/videogames" className="back-button">← Back to Video Games</Link>
        </div>
      </div>
    </div>
  );
};

export default SkywardBound; 