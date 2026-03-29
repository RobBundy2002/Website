import React from 'react';
import './StyleSheets/SharedStyles.css';

const csCourses = [
  { code: 'CS 1112', name: 'Introduction to Programming Foundation', desc: 'First course in programming and computational thinking. For students with no prior programming experience.', skills: ['Programming Fundamentals'] },
  { code: 'CS 2100', name: 'Data Structures and Algorithms I', desc: 'Intro to object-oriented programming, Java, and foundational data structures (lists, stacks, trees, hash tables).', skills: ['Java', 'Data Structures', 'Algorithms'] },
  { code: 'CS 2120', name: 'Discrete Math & Theory I', desc: '(3 credits) Proof techniques, first order logic, sets, relations, and combinatorics.', skills: ['Proofs', 'Logic', 'Combinatorics'] },
  { code: 'CS 3120', name: 'Discrete Math & Theory II', desc: '(3 credits) Computation theory: grammars, automata, and limits of computation.', skills: ['Theory', 'Automata', 'Turing Machines'] },
  { code: 'CS 3130', name: 'Computer Systems & Organization II', desc: '(4 credits) More advanced systems topics: virtual memory, concurrency, networks, and cryptography primitives.', skills: ['Systems', 'Virtual Memory', 'Networking'] },
  { code: 'CS 3140', name: 'Software Development Essentials', desc: '(3 credits) Software engineering fundamentals: testing, design principles, and system construction.', skills: ['Testing', 'Design', 'CI/CD'] },
  { code: 'CS 3710', name: 'Introduction to Cybersecurity', desc: '(3 credits) Practical exposure to cybersecurity topics: exploitation, encryption, forensics, and networking.', skills: ['Security', 'Encryption', 'Forensics'] },
  { code: 'CS 4730', name: 'Computer Game Design', desc: '(3 credits) Tools and concepts for modern 2D/3D interactive game development: graphics, AI, and networking.', skills: ['Game Design', 'Graphics', 'AI'] },
  { code: 'CS 4710', name: 'Machine Learning (Independent Study)', desc: 'Independent study focused on ML techniques and applications.', skills: ['Machine Learning', 'Python'] }
];

const gtCourses = [
  { code: 'CS6457', name: 'Video Game Design', desc: 'Covers game engine concepts, structural elements, and the game design process. Project-based course focusing on 3D real-time games and game feel.', skills: ['Game Engines', '3D Design', 'Game Feel'] },
  { code: 'COGSCI', name: 'Intro to Cognitive Science', desc: 'An interdisciplinary introduction to the study of mind and intelligence across AI, psychology, neurobiology, linguistics, and philosophy; covers models, methods, and paradigms.', skills: ['Cognitive Models', 'Human-Centered Design'] }
];

const Education = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <section className="education-hero">
          <h1 className="page-title">Education</h1>

          {/* Georgia Tech section first */}
          <div className="education-grid">
            <div className="edu-card">
              <img src={process.env.PUBLIC_URL + '/Images/gt.jpg'} alt="Georgia Tech" style={{height:240, objectFit:'cover', marginBottom:12, width: '100%'}} />
              <h3>Georgia Institute of Technology</h3>
              <p className="edu-sub">M.S. Computer Science (Online)</p>
              <p className="edu-meta">Expected December 2028 • Online • GPA: 4.2</p>
              <p className="edu-meta">College of Computing</p>
            </div>

            <div className="edu-card">
              <img src={process.env.PUBLIC_URL + '/Images/tundy.jpeg'} alt="UVA" style={{height:240, objectFit:'cover', marginBottom:12, width: '100%'}} />
              <h3>University of Virginia</h3>
              <p className="edu-sub">Bachelor of Arts in Computer Science</p>
              <p className="edu-meta">May 2025 • Charlottesville, VA • GPA: 3.2</p>
              <p className="edu-meta">College of Arts &amp; Sciences</p>
            </div>
          </div>


        </section>

        {/* Coursework grouped by major */}
        <section className="course-section">
          <h2 className="section-title">Georgia Tech Coursework</h2>
          <div className="course-grid">
            {gtCourses.map(c => (
              <div key={c.code} className="course-card">
                <h3 className="course-name">{c.name}</h3>
                <p className="course-desc">{c.desc}</p>
                <div className="course-skills">{c.skills.map(s => <span key={s} className="skill-pill">{s}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="course-section">
          <h2 className="section-title">University of Virginia Coursework</h2>
          <div className="course-grid">
            {csCourses.map(c => (
              <div key={c.code} className="course-card">
                <h3 className="course-name">{c.code}: {c.name}</h3>
                <p className="course-desc">{c.desc}</p>
                <div className="course-skills">{c.skills.map(s => <span key={s} className="skill-pill">{s}</span>)}</div>
              </div>
            ))}
          </div>
        </section>



      </div>
    </div>
  );
};

export default Education;
