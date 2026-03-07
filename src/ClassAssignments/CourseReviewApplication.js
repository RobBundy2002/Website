import React from 'react';
import CaseStudy from '../components/CaseStudy';

const CourseReviewApplication = () => {
  const sections = [
    { heading: 'About', content: 'Desktop application for managing and reviewing course feedback, built with Java and JavaFX. Includes CRUD operations and SQLite storage.' },
    { heading: 'Role', content: 'Designed UI and database interactions; implemented course search and review flows.' },

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
          <a href="/Website/classassignments" className="back-button">← Back to Assignments</a>
        </div>
      </div>
    </div>
  );
};

export default CourseReviewApplication;
