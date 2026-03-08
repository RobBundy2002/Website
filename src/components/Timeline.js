import React from 'react';

// Vertical resume-style timeline (detailed, no arrows)
const timelineData = [
  {
    year: 'Jun 2025 - Present',
    title: 'Software Engineer I — GA-Intelligence',
    details: [
      'Led migration of data converters into a centralized repository, adding strict validation and unit tests to improve data flow reliability.',
      'Own release processes and manage MR queue for critical repositories, coordinating deployments end-to-end.',
      'Served as secondary technical lead for data schema and conversion repos: guided schema decisions, code reviews, and coordinated releases.',
      'Mentor other junior developers; lead sprint ceremonies and technical training sessions.',
      'Delivered critical converters under tight deadlines; recognized with a Spotlight Award.'
    ]
  },
  {
    year: 'Jun 2024 - Aug 2024',
    title: 'Backend Software Engineering Intern — GA-Intelligence (formerly GA-CCRI)',
    details: [
      'Integrated a new data source in Java and rebranded adjacent testing modules.',
      'Prototyped and deployed Bash automation tools for funding allocation; design adopted company-wide.',
      'Expanded & redesigned CI/CD Docker architecture for improved maintainability.',
      'Collaborated on XML + XSLT display utilities and static test configurations.'
    ]
  },
  {
    year: 'Aug 2023 - May 2025',
    title: 'Undergraduate Teaching Assistant — University of Virginia',
    details: [
      'TA for Intro to Programming, Data Structures & Algorithms I, HCI, Intro to Cybersecurity.',
      'Promoted to Head TA for CS1112: managed Piazza, course admin, and contributed to course website development.',
      'Provided grading, office hours, and mentorship; delivered timely feedback on programming assignments.'
    ]
  },
  {
    year: 'Oct 2023 - Present',
    title: 'Projects & Portfolio (Oct 2023 - Present)',
    details: [
      'AI Vestor — Intelligent investment analysis platform using ML & real-time data',
      'Celestial Arcade — Web games hub hosting multiple lightweight browser games',
      'Course Review App — JavaFX + SQLite CRUD application (CS3140)',
      'Credit Approval ML — Machine learning pipeline for predicting credit approval (UCI dataset)',
      'Dracula Reborn — PICO-8 action demo with pixel art and arcade controls',
      'Matrix Madness — College hoops grid game with interactive scoring and reusable React components',
      'Proverbial Plates — Mobile pantry & recipe app built with React Native and Expo',
      'Resume GPT — AI-powered resume builder with streaming OpenAI integration (Apr 2025 - Jun 2025)',
      'Skyward Bound — Unity vertical platformer (prototype)',
      'Vampire Frost Bite — PICO-8 single-room title with custom sprites and sound',
      'Wordle Recreation — JavaFX desktop Wordle-style game',
      'UJLP CIO Website — End-to-end React website with custom article management (Oct 2024 - Present)',
      'Portfolio Website — React-based personal portfolio (Dec 2024 - Present)'
    ]
  },
  {
    year: '2021 - 2022',
    title: 'Early Education & First Programming Experiences',
    details: [
      'May 2021 — Graduated from Lebanon High School as Salutatorian.',
      'August 2021 — Started attendance at the University of Virginia.',
      'January 2022 — First programming experience: took CS1112 (Intro to Programming).'
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
