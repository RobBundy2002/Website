import React from 'react';
import { motion } from 'framer-motion';
import './StyleSheets/SharedStyles.css';
import { portfolioProjects } from './data/portfolioData';
import { RedesignPageHero, RedesignProjectCard } from './components/RedesignPieces';

export const PROJECT_LIST = portfolioProjects.filter((project) => ['AI', 'Web', 'Hosted Sites'].includes(project.category));

const ProjectSystemsDiagram = () => (
  <div className="project-systems-diagram" aria-hidden="true">
    <svg viewBox="0 0 640 560" role="presentation">
      <defs>
        <linearGradient id="project-flow" x1="0" x2="1">
          <stop offset="0" stopColor="#6ee7b7" />
          <stop offset="1" stopColor="#f6d365" />
        </linearGradient>
        <filter id="project-glow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <path className="diagram-grid" d="M40 90H600M40 180H600M40 270H600M40 360H600M40 450H600M120 30V520M240 30V520M360 30V520M480 30V520" />
      <g className="diagram-links" fill="none" stroke="url(#project-flow)">
        <path d="M170 150L290 265M470 150L350 265M170 410L290 295M470 410L350 295" />
      </g>
      <g filter="url(#project-glow)">
        <circle className="diagram-core-ring" cx="320" cy="280" r="76" />
        <circle className="diagram-core" cx="320" cy="280" r="48" />
      </g>
      <g className="diagram-node" transform="translate(112 112)"><rect width="116" height="76" rx="12" /><text x="58" y="34">AI / ML</text><text className="diagram-subtext" x="58" y="55">models</text></g>
      <g className="diagram-node" transform="translate(412 112)"><rect width="116" height="76" rx="12" /><text x="58" y="34">WEB</text><text className="diagram-subtext" x="58" y="55">interfaces</text></g>
      <g className="diagram-node" transform="translate(112 372)"><rect width="116" height="76" rx="12" /><text x="58" y="34">DATA</text><text className="diagram-subtext" x="58" y="55">pipelines</text></g>
      <g className="diagram-node" transform="translate(412 372)"><rect width="116" height="76" rx="12" /><text x="58" y="34">PLAY</text><text className="diagram-subtext" x="58" y="55">experiences</text></g>
      <text className="diagram-center-label" x="320" y="276">BUILD</text>
      <text className="diagram-center-subtext" x="320" y="298">ideas → systems</text>
    </svg>
  </div>
);

const Projects = () => {
  const uniqueTechs = new Set(PROJECT_LIST.flatMap((project) => project.technologies || [])).size;
  const hostedCount = PROJECT_LIST.filter((project) => project.category === 'Hosted Sites').length;

  return (
    <div className="redesign-subpage">
      <RedesignPageHero
        eyebrow="Assorted work"
        title="Projects that feel shipped, not shelved."
        description="A curated wall of AI tools, mobile products, browser experiences, and hosted sites. Each card keeps the media, stack, and project path close so the work is easy to scan."
        visual={<ProjectSystemsDiagram />}
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
