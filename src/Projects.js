import React from 'react';
import { Link } from 'react-router-dom';
import './StyleSheets/SharedStyles.css';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

export const PROJECT_LIST = [
  // AssortedProjects
  {
    id: 'aivestor',
    title: 'AI Vestor',
    description: 'AI investment analysis platform with market insights and portfolio optimization.',
    imageUrl: 'Images/AIVestor.png',
    link: '/Website/aivestor',
    technologies: ['Python', 'Machine Learning', 'TensorFlow', 'React', 'JavaScript'],
    features: ['AI-Powered Analysis', 'Market Predictions', 'Portfolio Optimization']
  },
  {
    id: 'resumegpt',
    title: 'ResumeGPT',
    description: 'AI resume builder that provides intelligent suggestions and formatting.',
    imageUrl: 'Images/ResumeGPT.png',
    link: '/Website/resumegpt',
    technologies: ['React', 'OpenAI API', 'JavaScript'],
    features: ['AI-Powered Suggestions', 'Resume Analysis', 'Professional Templates']
  },
  {
    id: 'proverbialplates',
    title: 'Proverbial Plates',
    description: 'Mobile pantry app that suggests recipes from available ingredients.',
    imageUrl: 'Images/Proverbial Plates.PNG',
    link: '/Website/proverbialplates',
    technologies: ['React Native', 'Expo', 'JavaScript'],
    features: ['Recipe Recommendations', 'Ingredient Tracking', 'Mobile App']
  },
  {
    id: 'wordle',
    title: 'Wordle App',
    description: 'Wordle-style desktop game built with JavaFX.',
    imageUrl: 'Images/Wordle Recreation.jpg',
    link: '/Website/wordle',
    technologies: ['Java', 'JavaFX'],
    features: ['Word Guessing Game', 'Desktop Application']
  },
  // HostedWebsites
  {
    id: 'celestialarcade',
    title: 'Celestial Arcade',
    description: 'Collection of lightweight browser games and demos.',
    imageUrl: 'Images/Celestial Arcade.png',
    link: '/Website/celestialarcade',
    technologies: ['React', 'JavaScript', 'CSS'],
    features: ['Multiplayer Games', 'Real-time Updates', 'Responsive Design']
  },
  {
    id: 'matrixmadness',
    title: 'Matrix Madness',
    description: 'College basketball grid game with interactive scoring.',
    imageUrl: 'Images/Hoop Grids.png',
    link: '/Website/matrixmadness',
    technologies: ['React', 'Node.js', 'MongoDB'],
    features: ['Interactive Grid', 'Score Tracking', 'Social Features']
  },
  {
    id: 'cs1112site',
    title: 'CS1112 Website',
    description: 'Course site built with a docs-focused static site theme.',
    imageUrl: 'Images/CS1112 Website.png',
    link: '/Website/cs1112',
    technologies: ['Jekyll', 'Markdown', 'HTML/CSS'],
    features: ['Course Materials', 'Documentation', 'Student Resources']
  },
  {
    id: 'ujlp',
    title: 'UJLP @ UVA',
    description: 'Academic journal site with editorial CMS and accessible reading.',
    imageUrl: 'Images/UJLP.png',
    link: '/Website/ujlp',
    technologies: ['React', 'JavaScript', 'CSS'],
    features: ['Modern Design', 'Mobile Responsive', 'Active Maintenance']
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  // compute quick stats
  const uniqueTechs = Array.from(new Set(PROJECT_LIST.flatMap(p => p.technologies || [])));
  const latestYear = '2026';

  return (
    <div className="page-container">
      <div className="content-container">
        <div className="page-intro fancy-intro">
          <div className="intro-left">
            <h1 className="page-title gradient-accent">Projects</h1>
            <p className="hero-subtitle">All projects and hosted websites in one place</p>
          </div>
          <div className="intro-right intro-stats">
            <div className="stat-badge">
              <div className="stat-number gradient-accent">{PROJECT_LIST.length}</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-badge">
              <div className="stat-number gradient-accent">{uniqueTechs.length}</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-badge">
              <div className="stat-number gradient-accent">{latestYear}</div>
              <div className="stat-label">Latest</div>
            </div>
          </div>
        </div>

        <motion.section className="projects-section" variants={containerVariants} initial="hidden" animate="visible">
          <div className="projects-grid">
            {PROJECT_LIST.map(p => (
              <motion.div key={p.id} className="project-card enhanced-card" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                <div className="project-image-container">
                  <img src={p.imageUrl} alt={p.title} className="project-image" />
                  <div className="project-overlay" />
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{p.title}</h3>
                    <Link to={p.link} className="project-link"><FaExternalLinkAlt size={16} /></Link>
                  </div>
                  <div className="project-technologies">
                    <h4>Technologies</h4>
                    <div className="tech-tags">{p.technologies.map(t => <span key={t} className="tech-tag">{t}</span>)}</div>
                  </div>
                  <div className="project-features">
                    <h4>Key Features</h4>
                    <ul className="features-list">{p.features.map(f => <li key={f} className="feature-item-list"><FaCode size={12} /><span>{f}</span></li>)}</ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default Projects;
