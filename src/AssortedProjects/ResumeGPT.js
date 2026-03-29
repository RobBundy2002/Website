import CaseStudy from '../components/CaseStudy';
import { Link } from 'react-router-dom';

const ResumeGPT = () => {
  const sections = [
    { heading: 'About', content: "An AI-powered resume builder and analyzer built with React and the OpenAI API. It provides intelligent suggestions, formatting, and content optimization." },
    { heading: 'Role', content: "Full-stack developer: integrated streaming API responses, designed secure key handling, and built the frontend UX." }
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <CaseStudy
          title="Resume GPT"
          subtitle="AI-powered resume builder & analyzer"
          video="Videos/ResumeGPT.mp4"
          date="Apr 2025 - Jun 2025"
          role="Full-stack Developer"
          tech={["React", "OpenAI API", "Node"]}
          links={[{ href: 'https://github.com/RobBundy2002', label: 'Repo' }]}
          sections={sections}
        />

        <div style={{ marginTop: 'var(--spacing-2xl)' }}>
          <Link to="/Website/projects" className="back-button">← Back to Assorted Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default ResumeGPT;