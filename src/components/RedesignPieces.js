import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, MonitorPlay } from 'lucide-react';

export const RedesignPageHero = ({ eyebrow, title, description, image, visual, stats = [], actions = [] }) => (
  <section className="subpage-hero">
    <div className="subpage-hero-copy">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
      {actions.length > 0 && (
        <div className="hero-command-row">
          {actions.map((action, index) => (
            action.to ? (
              <Link key={action.label} to={action.to} className={index === 0 ? 'primary-action' : 'secondary-action'}>
                {action.label}
                <ArrowRight size={18} />
              </Link>
            ) : (
              <a key={action.label} href={action.href} className={index === 0 ? 'primary-action' : 'secondary-action'}>
                {action.label}
                <ArrowRight size={18} />
              </a>
            )
          ))}
        </div>
      )}
    </div>
    <div className="subpage-hero-media">
      {visual || <img src={image} alt="" />}
      <div className="subpage-stat-stack">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const RedesignProjectCard = ({ project, accent }) => {
  const [playing, setPlaying] = useState(false);
  const link = project.link || '/Website/projects';

  return (
    <article className="subpage-project-card" style={{ '--card-accent': accent || 'var(--redesign-green)' }}>
      <div
        className="subpage-project-media"
        onMouseEnter={() => setPlaying(true)}
        onMouseLeave={() => setPlaying(false)}
      >
        {project.videoUrl && playing ? (
          <video muted autoPlay loop playsInline poster={project.imageUrl}>
            <source src={project.videoUrl} type="video/mp4" />
          </video>
        ) : (
          <img src={project.imageUrl} alt={project.title} />
        )}
        <span>{project.category || project.type || project.course}</span>
        {project.videoUrl && (
          <small>
            <MonitorPlay size={13} />
            Preview
          </small>
        )}
      </div>
      <div className="subpage-project-body">
        <div>
          <p className="subpage-project-kicker">{project.type || project.course || project.year}</p>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="tech-tags compact">
          {(project.technologies || []).slice(0, 5).map((tech) => (
            <span className="tech-tag" key={tech}>{tech}</span>
          ))}
        </div>
        <Link to={link} className="card-link">
          Open project
          <ExternalLink size={15} />
        </Link>
      </div>
    </article>
  );
};
