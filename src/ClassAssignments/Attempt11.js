import CaseStudy from '../components/CaseStudy';
import { Link } from 'react-router-dom';

const Attempt11 = () => {
  const sections = [
    {
      heading: 'About',
      content: `This is a PDF write-up (Attempt 11) documenting the project. It follows the same structure and style as the Credit Approval ML case study.`
    },
    {
      heading: 'Role',
      content: `Author and implementer: prepared data, experiments, and final write-up. The PDF contains methodology, results, and reflections.`
    }
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <CaseStudy
          title="Attempt 11 — Course Project Writeup"
          subtitle="Class Project PDF"
          image="Images/ml.jpg"
          date="2025"
          role="Author"
          tech={["Report", "Data Analysis"]}
          links={[{ href: `/ProjectWriteupGT.pdf`, label: 'View Final Report' }]}
          sections={sections}
        />

        <div style={{ marginTop: 'var(--spacing-2xl)' }}>
          <Link to="/Website/classassignments" className="back-button">← Back to Assignments</Link>
        </div>
      </div>
    </div>
  );
};

export default Attempt11;
