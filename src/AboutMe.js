import React from 'react';
import './StyleSheets/SharedStyles.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaHeart } from 'react-icons/fa';
import Timeline from './components/Timeline';
import SkillsGrid from './components/SkillsGrid';

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
                                    <span>Software Engineer at General Atomics Intelligence</span>
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
                            </div>
                        </div>
                    </div>
                </motion.section>

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
                                    Hey, I'm a software engineer and lifelong builder, if it can be coded, designed,
                                    or thrown across a disc golf course, I'm probably obsessed with it.
                                </p>
                                <p>
                                    I grew up in Lebanon, a small town tucked in Southwest Virginia, and made my way to
                                    Charlottesville to study Computer Science and Religious Studies at UVA. I graduated in May 2025 and hit the ground running: I'm now a Software
                                    Engineer at General Atomics Intelligence and pursuing my Online Master's in
                                    Computer Science at Georgia Tech.
                                </p>
                                <p>
                                    When I'm not working or in class, you'll find me on the disc golf course, shooting hoops at the gym, or deep in a music rabbit hole. My real passion is
                                    building: game development, innovative apps, and web projects that push what's actually
                                    possible. I care about craft, and I care about making things that feel alive.
                                </p>
                                <p>
                                    I'm always looking for the next interesting problem to solve. If that sounds like your
                                    kind of person, let's connect.
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

                {/* Timeline inserted here */}
                <Timeline />

                <SkillsGrid />

                {/* Navigation */}
                <motion.div 
                    className="navigation-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <Link to="/Website" className="back-button primary">
                        <span className="button-icon"></span>
                        <span>Back to Home</span>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutMePage;
