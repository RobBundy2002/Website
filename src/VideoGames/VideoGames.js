import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Gamepad2, MonitorPlay, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../StyleSheets/SharedStyles.css';
import { portfolioProjects } from '../data/portfolioData';
import { RedesignProjectCard } from '../components/RedesignPieces';

const VideoGames = () => {
  const games = portfolioProjects.filter((project) => project.category === 'Games');
  const unityCount = games.filter((project) => project.technologies.includes('Unity')).length;
  const picoCount = games.filter((project) => project.technologies.includes('Pico-8')).length;

  return (
    <div className="redesign-subpage games-redesign">
      <section className="games-hero-redesign">
        <div className="games-hero-copy">
          <span className="eyebrow">Game lab</span>
          <h1>Game lab.</h1>
          <p>
            Unity and PICO-8 builds with fast previews, engine tags, and direct paths into each playable project.
          </p>
          <div className="hero-command-row">
            <Link to={games[0]?.link || '/Website/videogames'} className="primary-action">
              Open first game
              <ArrowRight size={18} />
            </Link>
            <Link to="/Website/projects" className="secondary-action">
              All projects
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="game-diagram" aria-label="Game development systems diagram">
          <div className="diagram-core">
            <Gamepad2 size={34} />
            <strong>Prototype Loop</strong>
            <span>Design, tune, test, polish</span>
          </div>
          <div className="diagram-track">
            <div>
              <Code2 size={22} />
              <strong>Rules</strong>
              <span>State, physics, scoring</span>
            </div>
            <div>
              <Sparkles size={22} />
              <strong>Feel</strong>
              <span>Motion, feedback, timing</span>
            </div>
            <div>
              <MonitorPlay size={22} />
              <strong>Demo</strong>
              <span>Video, route, project page</span>
            </div>
          </div>
          <div className="diagram-stats">
            <div>
              <strong>{games.length}</strong>
              <span>Games</span>
            </div>
            <div>
              <strong>{unityCount}</strong>
              <span>Unity</span>
            </div>
            <div>
              <strong>{picoCount}</strong>
              <span>PICO-8</span>
            </div>
          </div>
        </div>
      </section>

      <section className="subpage-section">
        <div className="section-heading">
          <span className="eyebrow">Playable gallery</span>
          <h2>Games and prototypes</h2>
        </div>
        <motion.div className="subpage-project-grid game-grid" initial="hidden" animate="visible">
          {games.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <RedesignProjectCard
                project={project}
                accent={project.technologies.includes('Unity') ? 'var(--redesign-green)' : 'var(--redesign-coral)'}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default VideoGames;
