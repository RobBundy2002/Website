import React from 'react';
import './StyleSheets/SharedStyles.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaHeart } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const AboutMePage = () => {
    const skills = [
        { name: "React", category: "frontend" },
        { name: "JavaScript", category: "language" },
        { name: "Python", category: "language" },
        { name: "Java", category: "language" },
        { name: "C++", category: "language" },
        { name: "Web Dev", category: "domain" },
        { name: "Game Dev", category: "domain" },
        { name: "UI/UX Design", category: "design" },
        { name: "CSS", category: "frontend" },
        { name: "HTML", category: "frontend" },
        { name: "Node.js", category: "backend" },
        { name: "C", category: "language" },
        { name: "C#", category: "language" },
        { name: "XML", category: "markup" },
        { name: "XSLT", category: "markup" },
        { name: "SQLite", category: "database" },
        { name: "GitLab", category: "tools" },
        { name: "Bash", category: "tools" },
        { name: "Docker", category: "devops" },
        { name: "Kubernetes", category: "devops" },
        { name: "Kafka", category: "backend" },
        { name: "Helm", category: "devops" },
        { name: "Unity", category: "game" }
    ];

    const skillCategories = {
        language: { color: "var(--accent-primary)", icon: "💻" },
        frontend: { color: "var(--accent-secondary)", icon: "🎨" },
        backend: { color: "var(--accent-tertiary)", icon: "⚙️" },
        database: { color: "var(--accent-primary)", icon: "🗄️" },
        devops: { color: "var(--accent-secondary)", icon: "🚀" },
        tools: { color: "var(--accent-tertiary)", icon: "🔧" },
        game: { color: "var(--accent-primary)", icon: "🎮" },
        design: { color: "var(--accent-secondary)", icon: "🎯" },
        domain: { color: "var(--accent-tertiary)", icon: "🌟" },
        markup: { color: "var(--accent-primary)", icon: "📝" }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="page-container">
            <div className="content-container">
                {/* Hero Section */}
                <motion.section 
                    className="about-hero"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="profile-header">
                        <motion.div 
                            className="profile-image-container"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <img
                                src="Images/Grad.jpg"
                                alt="Rob Bundy"
                                className="profile-image"
                            />
                            <div className="profile-image-overlay"></div>
                        </motion.div>
                        
                        <div className="profile-info">
                            <h1 className="page-title">Rob Bundy</h1>
                            <p className="hero-subtitle">Software Developer · Masters Student · Game Developer</p>
                            
                            <div className="profile-details">
                                <div className="detail-item">
                                    <FaMapMarkerAlt className="detail-icon" />
                                    <span>Charlottesville, VA</span>
                                </div>
                                <div className="detail-item">
                                    <FaGraduationCap className="detail-icon" />
                                    <span>UVA Computer Science Graduate</span>
                                </div>
                                <div className="detail-item">
                                    <FaBriefcase className="detail-icon" />
                                    <span>Software Developer at General Atomics Integrated Intelligence</span>
                                </div>
                            </div>

                            <div className="social-links">
                                <motion.a 
                                    href="https://github.com/RobBundy2002" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-link"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaGithub />
                                </motion.a>
                                <motion.a 
                                    href="https://www.linkedin.com/in/rob-bundy-192035223/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-link"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaLinkedin />
                                </motion.a>
                                <motion.a 
                                    href="mailto:robbielbundy@gmail.com" 
                                    className="social-link"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaEnvelope />
                                </motion.a>
                                <motion.a 
                                    href="https://leetcode.com/yourusername" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-link"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <SiLeetcode />
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* About Section */}
                <motion.section 
                    className="about-section"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="about-card">
                        <h2 className="section-title">About Me</h2>
                        <div className="about-content">
                            <div className="about-text">
                                <p>
                                    Originally from the charming small town of Lebanon in Southwest Virginia, I now call Charlottesville my home. 
                                    I graduated from the University of Virginia with a Bachelor's of Arts in Computer Science and a minor in Religious Studies in May 2025.
                                </p>
                                <p>
                                    My next chapter begins in Summer 2025 as a Software Developer at General Atomics Integrated Intelligence, 
                                    followed by pursuing an Online Masters in Computer Science at Georgia Tech in Fall 2025.
                                </p>
                                <p>
                                    When I'm not coding, you'll find me throwing discs at the local disc golf course, 
                                    immersed in music, or shooting hoops at the UVA gym. I'm deeply passionate about game development, 
                                    building innovative apps, and keeping my web projects on the cutting edge of technology.
                                </p>
                            </div>
                            
                            <div className="interests-section">
                                <h3>Interests & Hobbies</h3>
                                <div className="interests-grid">
                                    <div className="interest-item">
                                        <FaHeart className="interest-icon" />
                                        <span>Disc Golf</span>
                                    </div>
                                    <div className="interest-item">
                                        <FaHeart className="interest-icon" />
                                        <span>Music</span>
                                    </div>
                                    <div className="interest-item">
                                        <FaHeart className="interest-icon" />
                                        <span>Basketball</span>
                                    </div>
                                    <div className="interest-item">
                                        <FaHeart className="interest-icon" />
                                        <span>Game Development</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* Skills Section */}
                <motion.section 
                    className="skills-section"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="skills-card">
                        <h2 className="section-title">Skills & Technologies</h2>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className="skill-badge"
                                    style={{ 
                                        background: skillCategories[skill.category]?.color || "var(--accent-primary)"
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <span className="skill-icon">{skillCategories[skill.category]?.icon || "💻"}</span>
                                    <span className="skill-name">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.section>

                {/* Navigation */}
                <motion.div 
                    className="navigation-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <Link to="/Website" className="back-button primary">
                        <span className="button-icon">🏠</span>
                        <span>Back to Home</span>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutMePage;
