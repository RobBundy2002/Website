import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import * as THREE from 'three';
import {
  ArrowRight,
  BadgeCheck,
  Brain,
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  Gamepad2,
  Globe2,
  GraduationCap,
  Layers3,
  MonitorPlay,
  Sparkles,
  Trophy
} from 'lucide-react';
import './StyleSheets/SharedStyles.css';
import { activity, portfolioProjects, projectFilters, skillGroups, timeline } from './data/portfolioData';

const statCards = [
  { label: 'Featured builds', value: portfolioProjects.length, icon: Layers3 },
  { label: 'Tech touched', value: new Set(portfolioProjects.flatMap((project) => project.technologies)).size, icon: Code2 },
  { label: 'Playable demos', value: portfolioProjects.filter((project) => project.videoUrl).length, icon: MonitorPlay },
  { label: 'Project lanes', value: projectFilters.length - 1, icon: Trophy }
];

const categoryIcons = {
  All: Sparkles,
  Games: Gamepad2,
  AI: Brain,
  Web: Code2,
  School: GraduationCap,
  'Hosted Sites': Globe2
};

const Scene = () => {
  const mountRef = useRef(null);
  const [webglAvailable, setWebglAvailable] = useState(true);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    // WebGL can be unavailable in privacy sandboxes, remote browsers, or on
    // devices where hardware acceleration is disabled. The 3D decoration
    // should never prevent the rest of the home page from rendering.
    const testCanvas = document.createElement('canvas');
    const webglContext = testCanvas.getContext('webgl2') || testCanvas.getContext('webgl');
    if (!webglContext) {
      setWebglAvailable(false);
      return undefined;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 6;

    let renderer;
    try {
      // Reuse the probe canvas/context so initialization does not request a
      // second context on devices with a strict WebGL context limit.
      renderer = new THREE.WebGLRenderer({
        canvas: testCanvas,
        context: webglContext,
        antialias: true,
        alpha: true
      });
    } catch (error) {
      setWebglAvailable(false);
      return undefined;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1.55, 2);
    const material = new THREE.MeshStandardMaterial({
      color: 0x6ee7b7,
      roughness: 0.28,
      metalness: 0.35,
      wireframe: true
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.82, 1),
      new THREE.MeshStandardMaterial({ color: 0xf6d365, roughness: 0.45, metalness: 0.08 })
    );
    scene.add(core);

    const light = new THREE.PointLight(0xffffff, 3.2, 15);
    light.position.set(3, 4, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x93c5fd, 1.2));

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    let frameId;
    const animate = () => {
      mesh.rotation.x += 0.003;
      mesh.rotation.y += 0.006;
      core.rotation.x -= 0.004;
      core.rotation.y += 0.004;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frameId);
      geometry.dispose();
      material.dispose();
      core.geometry.dispose();
      core.material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className={`home-3d-scene${webglAvailable ? '' : ' home-3d-scene-fallback'}`} ref={mountRef} aria-hidden="true">
      {!webglAvailable && <div className="home-3d-fallback" />}
    </div>
  );
};

const ProjectMedia = ({ project, className = '' }) => {
  const [playing, setPlaying] = useState(false);
  const usePlaceholder = project.id === 'beneath-world-tree' && !playing;

  return (
    <div
      className={`redesign-media ${className}`}
      onMouseEnter={() => setPlaying(true)}
      onMouseLeave={() => setPlaying(false)}
    >
      {project.videoUrl && playing ? (
        <video muted autoPlay loop playsInline poster={project.imageUrl}>
          <source src={project.videoUrl} type="video/mp4" />
        </video>
      ) : usePlaceholder ? (
        <div className="media-placeholder">
          <span>Unity exploration prototype</span>
          <strong>Beneath the World Tree</strong>
        </div>
      ) : (
        <img src={project.imageUrl} alt={project.title} />
      )}
      {project.videoUrl && (
        <span className="media-hint">
          <MonitorPlay size={14} />
          Hover preview
        </span>
      )}
    </div>
  );
};

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return portfolioProjects;
    return portfolioProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const featuredProjects = useMemo(
    () => portfolioProjects.filter((project) => project.spotlight).slice(0, 6),
    []
  );

  const gameProjects = portfolioProjects.filter((project) => project.category === 'Games');
  const hostedProjects = portfolioProjects.filter((project) => project.category === 'Hosted Sites');
  const currentFeature = featuredProjects[featuredIndex] || featuredProjects[0];

  const changeFeature = (direction) => {
    setFeaturedIndex((current) => (current + direction + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <div className="redesign-home">
      <Helmet>
        <title>Rob Bundy | Software Engineer, AI Builder, Game Developer</title>
        <meta
          name="description"
          content="Rob Bundy's redesigned portfolio dashboard showcasing AI, web, game, hosted site, and coursework projects."
        />
      </Helmet>

      <section className="redesign-hero">
        <div className="hero-backdrop">
          <img src="Images/Grad.jpg" alt="Rob Bundy" />
        </div>
        <div className="hero-copy">
          <span className="eyebrow">
            <Sparkles size={16} />
            Software engineering portfolio
          </span>
          <h1>Rob Bundy</h1>
          <p>
            I build React products, AI-assisted tools, hosted web experiences, and game prototypes with a focus on
            usable systems and polished demos.
          </p>
          <div className="hero-command-row">
            <a href="#project-dashboard" className="primary-action">
              Explore work
              <ArrowRight size={18} />
            </a>
            <Link to="/Website/videogames" className="secondary-action">
              <Gamepad2 size={18} />
              Game projects
            </Link>
          </div>
        </div>
        <Scene />
      </section>

      <section className="portfolio-strip" aria-label="Portfolio stats">
        {statCards.map(({ label, value, icon: Icon }) => (
          <div className="strip-item" key={label}>
            <Icon size={20} />
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="dashboard-section" id="project-dashboard">
        <div className="section-heading">
          <span className="eyebrow">Interactive dashboard</span>
          <h2>Project command center</h2>
        </div>

        <div className="filter-tabs" role="tablist" aria-label="Project filters">
          {projectFilters.map((filter) => {
            const Icon = categoryIcons[filter];
            return (
              <button
                key={filter}
                className={activeFilter === filter ? 'active' : ''}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                <Icon size={16} />
                {filter}
              </button>
            );
          })}
        </div>

        <motion.div key={activeFilter} layout className="command-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                className="command-card"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 18 }}
                transition={{ duration: 0.22 }}
              >
                <ProjectMedia project={project} />
                <div className="command-card-body">
                  <div className="card-meta">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags compact">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span className="tech-tag" key={tech}>{tech}</span>
                    ))}
                  </div>
                  <Link className="card-link" to={project.link || '/Website/projects'}>
                    Open case
                    <ExternalLink size={15} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="feature-carousel-section">
        <div className="section-heading">
          <span className="eyebrow">Featured carousel</span>
          <h2>Big demos first</h2>
        </div>
        <div className="feature-carousel">
          <button className="icon-button carousel-control" onClick={() => changeFeature(-1)} aria-label="Previous project">
            <ChevronLeft size={22} />
          </button>
          <div className="feature-stage">
            <ProjectMedia project={currentFeature} className="feature-media" />
            <div className="feature-copy">
              <span>{currentFeature.type}</span>
              <h3>{currentFeature.title}</h3>
              <p>{currentFeature.description}</p>
              <div className="feature-points">
                {currentFeature.features.map((feature) => (
                  <span key={feature}>
                    <BadgeCheck size={15} />
                    {feature}
                  </span>
                ))}
              </div>
              <Link to={currentFeature.link} className="primary-action">
                View project
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <button className="icon-button carousel-control" onClick={() => changeFeature(1)} aria-label="Next project">
            <ChevronRight size={22} />
          </button>
        </div>
      </section>

      <section className="split-section">
        <div className="timeline-panel">
          <div className="section-heading">
            <span className="eyebrow">Timeline</span>
            <h2>Education and build path</h2>
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
            <span className="eyebrow">Skills matrix</span>
            <h2>Tools by lane</h2>
          </div>
          <div className="matrix-grid">
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
        </div>
      </section>

      <section className="activity-section">
        <div className="section-heading">
          <span className="eyebrow">Activity strip</span>
          <h2>Where the work clusters</h2>
        </div>
        <div className="activity-grid">
          {activity.map((item) => (
            <div className="activity-cell" key={item.label} title={item.label}>
              <span style={{ height: `${Math.max(24, item.value * 5)}%` }} />
              <small>{item.label}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="showcase-section">
        <div className="showcase-column trailer-first">
          <div className="section-heading">
            <span className="eyebrow">Game showcase</span>
            <h2>Trailer-first builds</h2>
          </div>
          {gameProjects.slice(0, 3).map((project) => (
            <Link to={project.link} className="showcase-row" key={project.id}>
              <ProjectMedia project={project} />
              <div>
                <span>{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.impact}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="showcase-column hosted-gallery">
          <div className="section-heading">
            <span className="eyebrow">Hosted websites</span>
            <h2>Live-site gallery</h2>
          </div>
          {hostedProjects.map((project) => (
            <Link to={project.link} className="hosted-tile" key={project.id}>
              <img src={project.imageUrl} alt={project.title} />
              <span>{project.title}</span>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
