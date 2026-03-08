import React from 'react';
import CaseStudy from '../components/CaseStudy';
import { Link } from 'react-router-dom';

const CourseReviewApplication = () => {
  const sections = [
    { heading: 'About', content: 'Desktop application for managing and reviewing course feedback, built with Java and JavaFX. Includes CRUD operations and SQLite storage.' },
    { heading: 'Role', content: 'Designed UI and database interactions; implemented course search and review flows.' },
    { heading: 'Team', content: (
        <span>
          Developed at the University of Virginia as part of CS3140 alongside 
          <button className="discreet-link" onClick={() => window.open('https://www.linkedin.com/in/mjcrowe516/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people_connections%3Bl0tN%2FVo8TgaJpKgE3oEHkw%3D%3D','_blank','noopener,noreferrer')}>Matthew Crowe</button>
          {' '}and{' '}
          <button className="discreet-link" onClick={() => window.open('https://www.linkedin.com/in/patrick-williamson-linkedin-placeholder','_blank','noopener,noreferrer')}>Patrick Williamson</button>
        </span>
      ) }

  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <CaseStudy
          title="Course Review Application"
          subtitle="JavaFX desktop application"
          video="Videos/CRUD.mp4"
          date="2023"
          role="Developer"
          tech={["Java", "JavaFX", "SQLite"]}
          links={[]}
          sections={sections}
        />

        <div style={{ marginTop: 'var(--spacing-2xl)' }}>
          <Link to="/Website/classassignments" className="back-button">← Back to Assignments</Link>
        </div>


      </div>
    </div>
  );
};

export default CourseReviewApplication;
