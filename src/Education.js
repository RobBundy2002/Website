import React from 'react';
import './StyleSheets/SharedStyles.css';

const csCourses = [
  { code: 'CS 1112', name: 'Introduction to Programming Foundation', desc: 'A first course in programming, software development, and computer science. Introduces computing fundamentals and an appreciation for computational thinking. Students must have no previous programming experience.', skills: ['Programming Fundamentals'] },
  { code: 'CS 2100', name: 'Data Structures and Algorithms I', desc: 'A second course in computing with emphasis on foundational data structures and program analysis. Introduces object-oriented programming in Java, concurrency, and foundational data structures such as lists, stacks, queues, trees, hash tables, and priority queues.', skills: ['Java', 'Data Structures', 'Algorithms'] },
  { code: 'CS 2120', name: 'Discrete Mathematics and Theory I', desc: 'Introduces discrete mathematics and proof techniques involving first order predicate logic and induction. Application areas include sets, tuples, functions, relations, and combinatorial problems.', skills: ['Proofs', 'Logic', 'Combinatorics'] },
  { code: 'CS 2130', name: 'Computer Systems and Organization I', desc: 'Covers the computer architecture abstraction hierarchy from a step above silicon to a step below programming languages. Students learn low-level C and Assembly, data representation in memory, basic hardware design (gates, registers, components), and legal/ethical/security issues related to systems.', skills: ['C', 'Assembly', 'Computer Architecture'] },
  { code: 'CS 3100', name: 'Data Structures and Algorithms II', desc: 'Builds upon previous analysis of algorithms and the effects of data structures on them. Algorithms include searching, shortest paths, greedy algorithms, backtracking, divide-and-conquer, dynamic programming, and machine learning. Analysis techniques include asymptotic worst case, expected time, amortized analysis, and reductions.', skills: ['Algorithms', 'Asymptotic Analysis', 'Dynamic Programming'] },
  { code: 'CS 3120', name: 'Discrete Mathematics and Theory II', desc: 'The goal of this course is to understand the fundamental limits on what can be efficiently computed. Introduces computation theory including grammars, automata, and Turing machines.', skills: ['Theory', 'Automata', 'Turing Machines'] },
  { code: 'CS 3130', name: 'Computer Systems and Organization II', desc: 'A second course in computer systems exploring processor/OS interaction. Topics include permission models, system architecture, concurrency, virtual memory, cryptographic primitives, and TCP/IP networking.', skills: ['Systems', 'Virtual Memory', 'Networking'] },
  { code: 'CS 3140', name: 'Software Development Essentials', desc: 'An introductory software engineering course covering testing, software design principles, design patterns, functional programming, and data storage and manipulation.', skills: ['Testing', 'Design', 'CI/CD'] },
  { code: 'CS 3710', name: 'Introduction to Cybersecurity', desc: 'Introduces cybersecurity including ethics/policy and technical topics such as binary exploitation, encryption, digital forensics, networks, and modern threats.', skills: ['Security', 'Encryption', 'Forensics'] },
  { code: 'CS 4501', name: 'Machine Learning (Independent Study)', desc: (<span>Independent study focused on ML techniques and applications. Final report: <a href={process.env.PUBLIC_URL + '/Machine_Learning_Final_Writeup.pdf'} target="_blank" rel="noopener noreferrer">Machine Learning Final Report (PDF)</a>.</span>), skills: ['Machine Learning', 'Python'] },
  { code: 'CS 4730', name: 'Computer Game Design', desc: 'This course will introduce students to the concepts and tools used in the development of modern 2-D and 3-D real-time interactive computer video games. Topics include graphics, parallel processing, human-computer interaction, networking, artificial intelligence, and software engineering.', skills: ['Game Design', 'Graphics', 'AI'] }
];

const gtCourses = [
  { code: 'CS6457', name: 'Video Game Design', desc: 'Covers game engine concepts, structural elements, and the game design process. Project-based course focusing on 3D real-time games and game feel.', skills: ['Game Engines', '3D Design', 'Game Feel'] },
  { code: 'COGSCI', name: 'Intro to Cognitive Science', desc: 'An interdisciplinary introduction to the study of mind and intelligence across AI, psychology, neurobiology, linguistics, and philosophy; covers models, methods, and paradigms.', skills: ['Cognitive Models', 'Human-Centered Design'] },
  { code: 'CS 8803 O17', name: 'Global Entrepreneurship', desc: 'Graduate topics in global entrepreneurship: business models, market validation, and fundraising. Project-based with a team venture pitch.', skills: ['Entrepreneurship', 'Business Models', 'Market Validation'] }
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
              <p className="edu-meta">Expected December 2028 • Online • GPA: 4.0</p>
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
