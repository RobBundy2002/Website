import React from 'react';
import { ArrowRight, Brain, CalendarClock, GraduationCap, MapPin, School, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import './StyleSheets/SharedStyles.css';

const csCourses = [
  { code: 'CS 1112', name: 'Introduction to Programming Foundation', desc: 'First course in programming and computational thinking for students with no prior programming experience.', skills: ['Programming Fundamentals'] },
  { code: 'CS 2100', name: 'Data Structures and Algorithms I', desc: 'Object-oriented programming, Java, and foundational data structures including lists, stacks, trees, and hash tables.', skills: ['Java', 'Data Structures', 'Algorithms'] },
  { code: 'CS 2120', name: 'Discrete Math & Theory I', desc: 'Proof techniques, first order logic, sets, relations, and combinatorics.', skills: ['Proofs', 'Logic', 'Combinatorics'] },
  { code: 'CS 3120', name: 'Discrete Math & Theory II', desc: 'Computation theory covering grammars, automata, and limits of computation.', skills: ['Theory', 'Automata', 'Turing Machines'] },
  { code: 'CS 3130', name: 'Computer Systems & Organization II', desc: 'Advanced systems topics including virtual memory, concurrency, networks, and cryptography primitives.', skills: ['Systems', 'Virtual Memory', 'Networking'] },
  { code: 'CS 3140', name: 'Software Development Essentials', desc: 'Software engineering fundamentals including testing, design principles, and system construction.', skills: ['Testing', 'Design', 'CI/CD'] },
  { code: 'CS 3710', name: 'Introduction to Cybersecurity', desc: 'Practical cybersecurity topics including exploitation, encryption, forensics, and networking.', skills: ['Security', 'Encryption', 'Forensics'] },
  { code: 'CS 4730', name: 'Computer Game Design', desc: 'Tools and concepts for modern interactive game development including graphics, AI, and networking.', skills: ['Game Design', 'Graphics', 'AI'] },
  { code: 'CS 4710', name: 'Machine Learning Independent Study', desc: 'Independent study focused on machine learning techniques and applications.', skills: ['Machine Learning', 'Python'] }
];

const gtCourses = [
  { code: 'CS 6457', name: 'Video Game Design', desc: 'Game engine concepts, structural elements, and game design process for 3D real-time games and game feel.', skills: ['Game Engines', '3D Design', 'Game Feel'] },
  { code: 'COGSCI', name: 'Intro to Cognitive Science', desc: 'Interdisciplinary study of mind and intelligence across AI, psychology, neurobiology, linguistics, and philosophy.', skills: ['Cognitive Models', 'Human-Centered Design'] }
];

const schools = [
  {
    name: 'Georgia Institute of Technology',
    credential: 'M.S. Computer Science, Online',
    meta: 'Expected December 2028 · GPA 4.0',
    image: 'Images/gt.jpg',
    icon: Sparkles,
    points: ['Graduate CS specialization path', 'Game design and cognitive science coursework', 'Built around active industry work']
  },
  {
    name: 'University of Virginia',
    credential: 'B.A. Computer Science',
    meta: 'Graduated May 2025 · Charlottesville, VA',
    image: 'Images/tundy.jpeg',
    icon: GraduationCap,
    points: ['Computer Science and Religious Studies', 'Systems, software engineering, ML, security, and games', 'Project-heavy undergraduate foundation']
  }
];

const CourseGrid = ({ title, eyebrow, courses }) => (
  <section className="subpage-section">
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
    <div className="education-course-grid">
      {courses.map((course) => (
        <article className="education-course-card" key={course.code}>
          <div className="course-code-pill">{course.code}</div>
          <h3>{course.name}</h3>
          <p>{course.desc}</p>
          <div>
            {course.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);

const Education = () => {
  return (
    <div className="redesign-subpage education-redesign">
      <section className="education-hero-redesign">
        <div className="education-hero-copy">
          <span className="eyebrow">Education</span>
          <h1>CS foundation. Still building.</h1>
          <p>
            UVA gave me the broad technical base. Georgia Tech is where I am pushing deeper into graduate CS,
            game design, and human-centered computing while working as a software engineer.
          </p>
          <div className="hero-command-row">
            <Link to="/Website/classassignments" className="primary-action">
              View class work
              <ArrowRight size={18} />
            </Link>
            <Link to="/Website/aboutme" className="secondary-action">
              About me
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="education-console" aria-label="Education summary">
          <div className="console-topline">
            <span>Academic Stack</span>
            <strong>{csCourses.length + gtCourses.length} courses</strong>
          </div>
          <div className="console-path">
            <div>
              <strong>UVA</strong>
              <span>B.A. Computer Science</span>
            </div>
            <div className="path-connector" />
            <div>
              <strong>GT</strong>
              <span>M.S. Computer Science</span>
            </div>
          </div>
          <div className="console-focus-grid">
            <div>
              <School size={20} />
              <span>Systems</span>
            </div>
            <div>
              <Brain size={20} />
              <span>ML / AI</span>
            </div>
            <div>
              <GraduationCap size={20} />
              <span>Game Design</span>
            </div>
          </div>
          <div className="console-orbit">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section className="school-showcase">
        {schools.map(({ name, credential, meta, image, icon: Icon, points }) => (
          <article key={name} className="school-card-redesign">
            <img src={image} alt={name} />
            <div>
              <Icon size={24} />
              <h2>{name}</h2>
              <p className="school-credential">{credential}</p>
              <p className="school-meta">
                <CalendarClock size={15} />
                {meta}
              </p>
              <p className="school-meta">
                <MapPin size={15} />
                {name.includes('Georgia') ? 'Atlanta, GA / Online' : 'Charlottesville, VA'}
              </p>
              <ul>
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="education-focus-band">
        <div>
          <School size={22} />
          <strong>Systems</strong>
          <span>Data structures, software construction, memory, networking, and security.</span>
        </div>
        <div>
          <Brain size={22} />
          <strong>Intelligence</strong>
          <span>Machine learning, cognitive science, model evaluation, and AI-assisted products.</span>
        </div>
        <div>
          <GraduationCap size={22} />
          <strong>Interactive Media</strong>
          <span>Game design, graphics, game feel, and playable prototype development.</span>
        </div>
      </section>

      <CourseGrid eyebrow="Georgia Tech" title="Graduate coursework" courses={gtCourses} />
      <CourseGrid eyebrow="University of Virginia" title="Undergraduate CS coursework" courses={csCourses} />
    </div>
  );
};

export default Education;
