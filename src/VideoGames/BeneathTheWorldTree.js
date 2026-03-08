import CaseStudy from '../components/CaseStudy';
import { Link } from 'react-router-dom';

const BeneathTheWorldTree = () => {
  const sections = [
    { heading: 'About', content: `The Player is thrown into a colosseum and is forced to battle their way to freedom. In the midst of the scuffle, the player has lost their sword rendering them unable to attack. All that remains with the player is their shield, which has magical properties. To survive, the player relies on the power of their shield and their wits to overcome their enemies and escape the colosseum.` },
    { heading: 'Role', content: 'Lead Unity developer: implemented core gameplay loop in C#, level design, and integrated sound and UI systems.' },
    { heading: 'Team', content: 'Built alongside Michelle Jones, Sameen Shaik, Hao Sun, and Omer Mirza.' },
    { heading: 'Credits', content: 'Music by Michelle Jones (licensed).'},
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <CaseStudy
          title="Beneath the World Tree"
          subtitle="Unity exploration prototype — Georgia Tech"
          video="Videos/Shroom_beneath_world_tree_Trailer.mp4"
          date="2026"
          role="Lead Developer"
          tech={["Unity", "C#", "Game Design"]}
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

export default BeneathTheWorldTree;
