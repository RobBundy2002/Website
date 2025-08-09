import React from 'react';
import { Link } from 'react-router-dom';
import '../StyleSheets/SharedStyles.css';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaGlobe, FaCode } from 'react-icons/fa';

const HostedWebsites = () => {
    const projects = [
        {
            id: 1,
            title: "Celestial Arcade",
            description: "An active website designed to allow users to browse and play various games online such as Checkers, Connect4, and Whack-A-Mole.",
            imageUrl: "Images/Celestial Arcade.png",
            link: "/Website/celestialarcade",
            status: "Live",
            technologies: ["React", "JavaScript", "CSS"],
            features: ["Multiplayer Games", "Real-time Updates", "Responsive Design"]
        },
        {
            id: 2,
            title: "Matrix Madness",
            description: "Web App Game that serves as a college basketball version of the popular immaculate grid game. Built alongside Grant Costello.",
            imageUrl: "Images/Hoop Grids.png",
            link: "/Website/matrixmadness",
            status: "Live",
            technologies: ["React", "Node.js", "MongoDB"],
            features: ["Interactive Grid", "Score Tracking", "Social Features"]
        },
        {
            id: 3,
            title: "CS1112 Website",
            description: "Course Website implemented with the just-the-docs jekyll theme. Built at the University of Virginia for CS1112 alongside Jackson Le.",
            imageUrl: "Images/CS1112 Website.png",
            status: "Live",
            technologies: ["Jekyll", "Markdown", "HTML/CSS"],
            features: ["Course Materials", "Documentation", "Student Resources"]
        },
        {
            id: 4,
            title: "UJLP @ UVA",
            description: "CIO Website for the Undergraduate Journal for Law and Politics at the University of Virginia.",
            imageUrl: "Images/UJLP.png",
            link: "/Website/ujlp",
            status: "Live",
            technologies: ["React", "JavaScript", "CSS"],
            features: ["Modern Design", "Mobile Responsive", "Active Maintenance"]
        }
    ];

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

    const getStatusColor = (status) => {
        switch (status) {
            case "Live":
                return "var(--accent-tertiary)";
            case "Archived":
                return "var(--accent-secondary)";
            default:
                return "var(--accent-primary)";
        }
    };

    return (
        <div className="page-container">
            <div className="content-container">
                {/* Hero Section */}
                <motion.section 
                    className="hero-section"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="page-title">Hosted Websites</h1>
                    <p className="hero-subtitle">Live web applications and deployed projects</p>
                    
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">{projects.length}</span>
                            <span className="stat-label">Total Projects</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">{projects.filter(p => p.status === "Live").length}</span>
                            <span className="stat-label">Live Sites</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">4+</span>
                            <span className="stat-label">Technologies</span>
                        </div>
                    </div>
                </motion.section>

                {/* Projects Grid */}
                <motion.section 
                    className="projects-section"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="project-card enhanced-card"
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <div className="project-image-container">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="project-image"
                                    />
                                    <div className="project-overlay">
                                        <div 
                                            className="status-badge"
                                            style={{ background: getStatusColor(project.status) }}
                                        >
                                            {project.status}
                                        </div>
                                    </div>
                                </div>

                                <div className="project-content">
                                    <div className="project-header">
                                        <h3 className="project-title">{project.title}</h3>
                                        {project.link && (
                                            <Link to={project.link} className="project-link">
                                                <FaExternalLinkAlt size={16} />
                                            </Link>
                                        )}
                                    </div>
                                    
                                    <p className="project-description">{project.description}</p>
                                    
                                    <div className="project-technologies">
                                        <h4>Technologies</h4>
                                        <div className="tech-tags">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span key={techIndex} className="tech-tag">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="project-features">
                                        <h4>Key Features</h4>
                                        <ul className="features-list">
                                            {project.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="feature-item-list">
                                                    <FaCode size={12} />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

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

export default HostedWebsites;