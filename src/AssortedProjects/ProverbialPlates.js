import CaseStudy from '../components/CaseStudy';
import { Link } from 'react-router-dom';

const ProverbialPlates = () => {
  const sections = [
    { heading: 'About', content: "Mobile app built with React Native and Expo that helps organize pantry items and suggests recipes based on available ingredients." },
    { heading: 'Role', content: "Full-stack mobile developer: designed app flow, implemented storage and recipe ranking." }
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <CaseStudy
          title="Proverbial Plates"
          subtitle="Pantry & Recipe Mobile App"
          video="Videos/ScreenRecording_01-03-2025 00-43-06_1.mp4"
          date="Oct 2023 - Jan 2024"
          role="Mobile Developer"
          tech={["React Native", "Expo", "JavaScript"]}
          links={[{ href: '#', label: 'Repo' }]}
          sections={sections}
        />

        <div style={{ marginTop: 'var(--spacing-2xl)' }}>
          <Link to="/Website/projects" className="back-button">← Back to Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default ProverbialPlates;
