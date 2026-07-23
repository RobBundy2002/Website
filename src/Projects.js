import React from 'react';
import { motion } from 'framer-motion';
import './StyleSheets/SharedStyles.css';
import { portfolioProjects } from './data/portfolioData';
import { RedesignPageHero, RedesignProjectCard } from './components/RedesignPieces';

export const PROJECT_LIST = portfolioProjects.filter((project) => ['AI', 'Web', 'Hosted Sites'].includes(project.category));

const Projects = () => {
  const uniqueTechs = new Set(PROJECT_LIST.flatMap((project) => project.technologies || [])).size;
  const hostedCount = PROJECT_LIST.filter((project) => project.category === 'Hosted Sites').length;

  return (
    <div className="redesign-subpage">
      <RedesignPageHero
        eyebrow="Assorted work"
        title="Projects that feel shipped, not shelved."
        description="A curated wall of AI tools, mobile products, browser experiences, and hosted sites. Each card keeps the media, stack, and project path close so the work is easy to scan."
        image="Images/AIVestor.png"
        stats={[
          { value: PROJECT_LIST.length, label: 'Projects' },
          { value: uniqueTechs, label: 'Technologies' },
          { value: hostedCount, label: 'Hosted builds' }
        ]}
        actions={[
          { label: 'View games', to: '/Website/videogames' },
          { label: 'Class work', to: '/Website/classassignments' }
        ]}
      />

      <section className="subpage-section">
        <div className="section-heading">
          <span className="eyebrow">Project index</span>
          <h2>AI, web, mobile, and hosted builds</h2>
        </div>
        <motion.div className="subpage-project-grid" initial="hidden" animate="visible">
          {PROJECT_LIST.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
            >
              <RedesignProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
