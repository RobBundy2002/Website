import React from 'react';

// Vertical resume-style timeline (detailed, no arrows)
const timelineData = [
  {
    year: 'May 2025',
    title: 'B.A., Computer Science — University of Virginia',
    details: [
      'Graduated May 2025 with B.A. in Computer Science',
      'Minor in Religious Studies'
    ]
  },
  {
    year: 'Jun 2024 - Aug 2024',
    title: 'Backend Software Engineering Intern — GA-Intelligence',
    details: [
      'Integrated new data sources in Java and expanded CI/CD Docker architecture',
      'Built Bash automation tools and contributed XML/XSLT display utilities'
    ]
  },
  {
    year: 'Jun 2025 - Present',
    title: 'Software Engineer II — GA-Intelligence',
    details: [
      'Led migration of data converters into a centralized repository with validation and unit tests',
      'Owned release processes, mentored junior devs, led sprint ceremonies, recognized with a Spotlight Award'
    ]
  },
  {
    year: 'Dec 2028 (expected)',
    title: 'M.S., Computer Science (Online) — Georgia Institute of Technology',
    details: [
      'Online M.S. in Computer Science with a concentration in Human-Computer Interaction (expected Dec 2028)'
    ]
  }
];

const Timeline = () => {
  return (
    <section aria-labelledby="timeline-heading" className="timeline-vertical">
      <h2 id="timeline-heading" className="section-title">Timeline</h2>
      <ol className="timeline-vertical-list">
        {timelineData.map((item, idx) => (
          <li key={idx} className="timeline-vertical-item">
            <div className="timeline-marker" aria-hidden></div>
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <strong className="timeline-title">{item.title}</strong>
              <ul className="timeline-details">
                {item.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Timeline;
