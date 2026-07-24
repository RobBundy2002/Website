import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Disc3,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Music,
  Trophy
} from 'lucide-react';
import './StyleSheets/SharedStyles.css';
import { skillGroups, timeline } from './data/portfolioData';

const profileStats = [
  { value: 'GAI', label: 'Software engineer' },
  { value: 'GT', label: 'MS CS candidate' },
  { value: 'UVA', label: 'CS graduate' }
];

const interests = [
  { label: 'Disc golf', icon: Disc3 },
  { label: 'Music', icon: Music },
  { label: 'Basketball', icon: Trophy },
  { label: 'Game development', icon: Code2 }
];

const AboutMePage = () => {
  return (
    <div className="redesign-subpage about-redesign">
      <section className="about-spotlight">
        <motion.div
          className="about-portrait"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="Images/Grad.jpg" alt="Rob Bundy" />
          <div className="portrait-caption">
            <strong>Rob Bundy</strong>
            <span>Software engineer · AI builder · game dev</span>
          </div>
        </motion.div>

        <motion.div
          className="about-story"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span className="eyebrow">About</span>
          <h1>Turning ideas into useful systems.</h1>
          <p>
            I am a software engineer and lifelong builder from Lebanon, Virginia. I studied Computer Science and
            Religious Studies at UVA, graduated in May 2025, and now work as a Software Engineer at General Atomics
            Intelligence while pursuing Georgia Tech's online M.S. in Computer Science.
          </p>
          <p>
            The common thread in my work is making technical ideas feel tangible: AI resume tooling, ML-backed finance
            analysis, hosted web products, game prototypes, and course projects that are built to be used.
          </p>
          <div className="about-actions">
            <a href="mailto:robbielbundy@gmail.com" className="primary-action">
              Contact me
              <Mail size={18} />
            </a>
            <Link to="/Website/projects" className="secondary-action">
              See projects
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="about-info-band">
        <div>
          <MapPin size={18} />
          <span>Charlottesville, VA</span>
        </div>
        <div>
          <GraduationCap size={18} />
          <span>UVA Computer Science graduate</span>
        </div>
        <div>
          <BriefcaseBusiness size={18} />
          <span>Software Engineer at General Atomics Intelligence</span>
        </div>
      </section>

      <section className="portfolio-strip about-stat-strip">
        {profileStats.map((stat) => (
          <div className="strip-item" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="split-section about-split">
        <div className="timeline-panel">
          <div className="section-heading">
            <span className="eyebrow">Path</span>
            <h2>How the work has evolved</h2>
          </div>
          <div className="redesign-timeline">
            {timeline.map((item) => (
              <article key={`${item.date}-${item.title}`}>
                <time>{item.date}</time>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="skills-panel">
          <div className="section-heading">
            <span className="eyebrow">Signals</span>
            <h2>What I keep returning to</h2>
          </div>
          <div className="interest-grid-redesign">
            {interests.map(({ label, icon: Icon }) => (
              <div key={label}>
                <Icon size={22} />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="social-row-redesign">
            <a href="https://github.com/RobBundy2002" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/rob-bundy-192035223/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:robbielbundy@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>

      <section className="subpage-section">
        <div className="section-heading">
          <span className="eyebrow">Skills matrix</span>
          <h2>Same stack, sharper presentation</h2>
        </div>
        <div className="matrix-grid wide">
          {skillGroups.map((group) => (
            <article key={group.label}>
              <h3>{group.label}</h3>
              <div>
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMePage;
