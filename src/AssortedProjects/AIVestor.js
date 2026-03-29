import CaseStudy from '../components/CaseStudy';
import { Link } from 'react-router-dom';

const AIVestor = () => {
  const sections = [
    { heading: 'About', content: 'AI Vestor is an intelligent investment analysis platform that leverages AI to provide market insights and portfolio optimization. It combines machine learning algorithms with real-time data to deliver actionable recommendations.' },
    { heading: 'Role', content: 'Designed core ML pipeline, integrated new data sources, and implemented visualization components.' },
    { heading: 'Team', content: (
      <span>
        Developed alongside 
        <button className="discreet-link" onClick={() => window.open('https://gcostello.com/','_blank','noopener,noreferrer')}>Grant Costello</button>
      </span>
    ) }
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <CaseStudy
          title="AI Vestor"
          subtitle="Intelligent Investment Analysis Platform"
          video="Videos/AIVestor.mp4"
          date="2024 - 2025"
          role="Lead Developer"
          tech={["Python", "TensorFlow", "React", "API"]}
          links={[{ href: 'https://github.com/RobBundy2002', label: 'Repo' }]}
          sections={sections}
        />

        <div style={{ marginTop: 'var(--spacing-2xl)' }}>
          <Link to="/Website/projects" className="back-button">← Back to Projects</Link>
        </div>


      </div>
    </div>
  );
};

export default AIVestor;