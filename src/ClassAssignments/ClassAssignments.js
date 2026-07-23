import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Binary, Brain, Database, FileCode2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../StyleSheets/SharedStyles.css';
import { portfolioProjects } from '../data/portfolioData';
import { RedesignProjectCard } from '../components/RedesignPieces';

const ClassAssignments = () => {
  const classProjects = portfolioProjects.filter((project) => project.category === 'School');
  const techCount = new Set(classProjects.flatMap((project) => project.technologies)).size;

  return (
    <div className="redesign-subpage classwork-redesign">
      <section className="classwork-hero-redesign">
        <div className="classwork-hero-copy">
          <span className="eyebrow">Academic builds</span>
          <h1>Class work, upgraded.</h1>
          <p>
            Selected coursework presented as polished project work: machine learning, data persistence,
            CRUD flows, and documentation-heavy web systems.
          </p>
          <div className="hero-command-row">
            <Link to="/Website/education" className="primary-action">
              View education
              <ArrowRight size={18} />
            </Link>
            <Link to="/Website/projects" className="secondary-action">
              All projects
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="classwork-diagram" aria-label="Class project pipeline diagram">
          <div className="classwork-metric-row">
            <div>
              <strong>{classProjects.length}</strong>
              <span>Projects</span>
            </div>
            <div>
              <strong>{techCount}</strong>
              <span>Tools</span>
            </div>
            <div>
              <strong>ML + CRUD</strong>
              <span>Focus</span>
            </div>
          </div>
          <div className="pipeline-card">
            <div>
              <FileCode2 size={22} />
              <strong>Spec</strong>
              <span>Requirements</span>
            </div>
            <span className="pipeline-arrow" />
            <div>
              <Database size={22} />
              <strong>Data</strong>
              <span>Persistence</span>
            </div>
            <span className="pipeline-arrow" />
            <div>
              <Brain size={22} />
              <strong>Model</strong>
              <span>Analysis</span>
            </div>
          </div>
          <div className="diagram-code-window">
            <div>
              <span />
              <span />
              <span />
            </div>
            <p><Binary size={16} /> project.status = "presentable"</p>
            <p>pipeline.steps = ["build", "test", "explain"]</p>
            <p>result = usable_coursework</p>
          </div>
        </div>
      </section>

      <section className="subpage-section">
        <div className="section-heading">
          <span className="eyebrow">Course project index</span>
          <h2>Academic work, cleaned up</h2>
        </div>
        <motion.div className="subpage-project-grid" initial="hidden" animate="visible">
          {classProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <RedesignProjectCard project={project} accent="var(--redesign-yellow)" />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default ClassAssignments;
