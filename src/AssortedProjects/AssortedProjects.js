import React from 'react';
import { Link } from 'react-router-dom';
import '../StyleSheets/SharedStyles.css';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaReact, FaMobile, FaJava, FaBrain } from 'react-icons/fa';

const AssortedProjects = () => {
    const projects = [
        {
            id: 1,
            title: "AI Vestor",
            description: "AI investment analysis platform with market insights and portfolio optimization.",
            imageUrl: "Images/AIVestor.png",
            link: "/Website/aivestor",
            technologies: ["Python", "Machine Learning", "TensorFlow", "React", "JavaScript"],
            features: ["AI-Powered Analysis", "Market Predictions", "Portfolio Optimization"],
            icon: <FaBrain size={24} />,
            color: "var(--accent-primary)",
            videoUrl: "Videos/AIVestor.mp4"
        },
        {
            id: 2,
            title: "ResumeGPT",
            description: "AI resume builder that provides intelligent suggestions and formatting.",
            imageUrl: "Images/ResumeGPT.png",
            link: "/Website/resumegpt",
            technologies: ["React", "OpenAI API", "JavaScript", "HTML", "CSS"],
            features: ["AI-Powered Suggestions", "Resume Analysis", "Professional Templates"],
            icon: <FaReact size={24} />,
            color: "var(--accent-secondary)",
            videoUrl: "Videos/ResumeGPT.mp4"
        },
        {
            id: 3,
            title: "Proverbial Plates",
            description: "Mobile pantry app that suggests recipes from available ingredients.",            imageUrl: "Images/Proverbial Plates.PNG",
            link: "/Website/proverbialplates",
            technologies: ["React Native", "Expo", "JavaScript", "CSS"],
            features: ["Recipe Recommendations", "Ingredient Tracking", "Mobile App"],
            icon: <FaMobile size={24} />,
            color: "var(--accent-tertiary)",
            videoUrl: "Videos/ScreenRecording_01-03-2025 00-43-06_1.mp4"
        },
        {
            id: 4,
            title: "Wordle App",
            description: "Wordle-style desktop game built with JavaFX.",            imageUrl: "Images/Wordle Recreation.jpg",
            link: "/Website/wordle",
            technologies: ["Java", "JavaFX", "FXML"],
            features: ["Word Guessing Game", "Desktop Application", "JavaFX UI"],
            icon: <FaJava size={24} />,
            color: "var(--accent-primary)",
            videoUrl: "Videos/Wordle.mp4"
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

    return (
        <div className="page-container">
            <div className="content-container">
                <div className="page-intro fancy-intro">
                    <div className="intro-left">
                        <h1 className="page-title">Assorted Projects</h1>
                        <p className="hero-subtitle">Diverse software development projects and applications</p>
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
                            <div className="stat-number">{Math.max(...projects.map(p => (p.date ? parseInt((p.date||'').match(/\d{4}/)?.[0] || 0) : 0), 2020))}</div>
                            <div className="stat-label">Latest</div>
                        </div>
                    </div>
                </div>

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
                                            className="project-icon"
                                            style={{ background: project.color }}
                                        >
                                            {project.icon}
                                        </div>
                                    </div>
                                </div>

                                <div className="project-content">
                                    <div className="project-header">
                                        <h3 className="project-title">{project.title}</h3>
                                        <Link to={project.link} className="project-link">
                                            <FaExternalLinkAlt size={16} />
                                        </Link>
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
                                                    <FaExternalLinkAlt size={12} />
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

export default AssortedProjects;
