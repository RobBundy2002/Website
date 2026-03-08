

const CaseStudy = ({ title, subtitle, image, video, date, role, tech, links = [], sections = [] }) => {
  return (
    <article className="case-study">
      <div className="case-banner">
        {video ? (
          <div className="case-banner-video-wrap">
            <video className="case-banner-video" controls playsInline>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          image && (
            <div className="case-anim-image" style={{ backgroundImage: `url(${image})` }} aria-hidden></div>
          )
        )}
      </div>
      <div className="case-body">
        <div className="case-header">
          <h1 className="case-title gradient-accent">{title}</h1>
          {subtitle && <p className="case-subtitle">{subtitle}</p>}
          <div className="case-meta">
            {role && <span className="meta-item">{role}</span>}
            {date && <span className="meta-item">{date}</span>}
            {tech && <span className="meta-item tech">{tech.join(' • ')}</span>}
          </div>
          <div className="case-links">
            {links.map((l, i) => (
              <a key={i} href={l.href} className="live-link" target="_blank" rel="noreferrer">{l.label}</a>
            ))}
          </div>
        </div>

        <div className="case-sections">
          {sections.map((s, idx) => (
            <section key={idx} className="case-section">
              <h3>{s.heading}</h3>
              <div>{typeof s.content === 'string' ? <p>{s.content}</p> : s.content}</div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
};

export default CaseStudy;
