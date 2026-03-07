import React from 'react';
import CaseStudy from '../components/CaseStudy';
import { Link } from 'react-router-dom';

const DraculaReborn = () => {
  const sections = [
    { heading: 'About', content: 'Dracula Reborn is a PICO-8 action game with pixel art, arcade controls, and a haunting soundtrack. Players collect items and evade threats in single-room challenges.' },
    { heading: 'Role', content: 'Implemented core gameplay mechanics, enemy behaviors, and player controls.' }
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <CaseStudy
          title="Dracula Reborn"
          subtitle="Pico-8 action demo"
          video="Videos/Dracula Reborn.mp4"
          date="2024"
          role="Gameplay Programmer"
          tech={["PICO-8", "Lua"]}
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

export default DraculaReborn; 