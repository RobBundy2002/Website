import React from 'react';
import CaseStudy from '../components/CaseStudy';

const VampireFrostbite = () => {
  const sections = [
    { heading: 'About', content: 'Vampire Frostbite is a PICO-8 retro action game mixing arcade and strategy elements, with a focus on exposure avoidance and resource management.' },
    { heading: 'Role', content: 'Implemented game mechanics, item interactions, and UI in Lua.' }
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <CaseStudy
          title="Vampire Frostbite"
          subtitle="Pico-8 action"
          video="Videos/VampireFrostbite.mp4"
          date="2024"
          role="Developer"
          tech={["PICO-8", "Lua"]}
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

export default VampireFrostbite; 