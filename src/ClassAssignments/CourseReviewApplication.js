import React from 'react';
import CaseStudy from '../components/CaseStudy';
import { Link } from 'react-router-dom';

const CourseReviewApplication = () => {
  const sections = [
    { heading: 'About', content: 'Desktop application for managing and reviewing course feedback, built with Java and JavaFX. Includes CRUD operations and SQLite storage.' },
    { heading: 'Role', content: 'Designed UI and database interactions; implemented course search and review flows.' },
    { heading: 'Team', content: 'Developed alongside Matthew Crowe and Patrick Williamson.' }

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
