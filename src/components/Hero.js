import React from 'react';

const Hero = ({ title = 'Rob Bundy', subtitle = "Software Engineer · MS Candidate · Game Dev" }) => {
  return (
    <section className="hero-section hero-midnight">
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title hero-title-large">{title}</h1>
          <p className="hero-subtitle hero-subtitle-large">{subtitle}</p>

          <div className="hero-actions">
            <a className="hero-cta" href="#/Website/aboutme">About Me</a>
            <a className="hero-cta ghost" href="#/Website/projects">See Assorted Projects</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-outer">
            <img src="Images/Grad.jpg" alt="Rob Bundy" className="hero-avatar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
