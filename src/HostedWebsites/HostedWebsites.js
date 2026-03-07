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
            description: "Collection of lightweight browser games and demos.",
            imageUrl: "Images/Celestial Arcade.png",
            videoUrl: "Videos/RecordingCA.mp4",
            link: "/Website/celestialarcade",
            status: "Live",
            technologies: ["React", "JavaScript", "CSS"],
            features: ["Multiplayer Games", "Real-time Updates", "Responsive Design"]
        },
        {
            id: 2,
            title: "Matrix Madness",
            description: "College basketball grid game with interactive scoring.",
            imageUrl: "Images/Hoop Grids.png",
            videoUrl: "Videos/Recording.mp4",
            link: "/Website/matrixmadness",
            status: "Live",
            technologies: ["React", "Node.js", "MongoDB"],
            features: ["Interactive Grid", "Score Tracking", "Social Features"]
        },

        {
            id: 3,
            title: "CS1112 Website",
            description: "Course site built with a docs-focused static site theme.",
            imageUrl: "Images/CS1112 Website.png",
            status: "Live",
            technologies: ["Jekyll", "Markdown", "HTML/CSS"],
            features: ["Course Materials", "Documentation", "Student Resources"]
        },
        {
            id: 4,
            title: "UJLP @ UVA",
            description: "Academic journal site with editorial CMS and accessible reading.",
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
                <div className="page-intro fancy-intro">
                    <div className="intro-left">
                        <h1 className="page-title">Hosted Websites</h1>
                        <p className="hero-subtitle">Live web applications and deployed projects</p>
                    </div>
                    <div className="intro-right intro-stats">
                        <div className="stat-badge">
                            <div className="stat-number">{projects.length}</div>
                            <div className="stat-label">Projects</div>
                        </div>
                        <div className="stat-badge">
                            <div className="stat-number">{new Set(projects.flatMap(p => p.technologies)).size}</div>
                            <div className="stat-label">Technologies</div>
                        </div>
                        <div className="stat-badge">
                            <div className="stat-number">2026</div>
                            <div className="stat-label">Latest</div>
                        </div>
                    </div>
                </div>

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
                                    {project.videoUrl ? (
                                        <video className="project-video" muted autoPlay loop playsInline>
                                            <source src={project.videoUrl} type="video/mp4" />
                                        </video>
                                    ) : (
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="project-image"
                                        />
                                    )}
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