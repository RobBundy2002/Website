import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaGamepad } from 'react-icons/fa';

const Hero = ({ title = 'Rob Bundy', subtitle = "Software Engineer · MS Candidate · Game Dev" }) => {
  const badgeVariants = {
    hidden: { opacity: 0, y: 12 },
    show: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, type: 'spring', stiffness: 120, damping: 14 } })
  };

  return (
    <section className="hero-section hero-midnight">
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title hero-title-large">{title}</h1>

          <div className="hero-meta">
            <div className="hero-roles">
              <motion.div className="role-badge" initial="hidden" animate="show" custom={0} variants={badgeVariants} whileHover={{ y: -6, scale: 1.02 }}>
                <div className="role-icon"><FaBriefcase /></div>
                <div className="role-title">Software Engineer</div>
                <div className="role-sub">General Atomics Intelligence</div>
              </motion.div>

              <motion.div className="role-badge" initial="hidden" animate="show" custom={1} variants={badgeVariants} whileHover={{ y: -6, scale: 1.02 }}>
                <div className="role-icon"><FaGraduationCap /></div>
                <div className="role-title">MS Candidate</div>
                <div className="role-sub">Georgia Tech (Online)</div>
              </motion.div>

              <motion.div className="role-badge" initial="hidden" animate="show" custom={2} variants={badgeVariants} whileHover={{ y: -6, scale: 1.02 }}>
                <div className="role-icon"><FaGamepad /></div>
                <div className="role-title">Game Dev</div>
                <div className="role-sub">Unity + Pico8</div>
              </motion.div>
            </div>

            
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
