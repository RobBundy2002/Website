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
            description: "An intelligent investment analysis platform that leverages artificial intelligence to provide comprehensive market insights and portfolio optimization. Combines advanced machine learning algorithms with real-time market data.",
            imageUrl: "Images/AIVestor.png",
            link: "/Website/aivestor",
            technologies: ["Python", "Machine Learning", "TensorFlow", "React", "JavaScript"],
            features: ["AI-Powered Analysis", "Market Predictions", "Portfolio Optimization"],
            icon: <FaBrain size={24} />,
            color: "var(--accent-primary)"
        },
        {
            id: 2,
            title: "ResumeGPT",
            description: "An AI-powered resume builder and analyzer built with React and OpenAI's GPT API. The application helps users create professional resumes by providing intelligent suggestions, formatting assistance, and content optimization based on industry best practices.",
            imageUrl: "Images/ResumeGPT.png",
            link: "/Website/resumegpt",
            technologies: ["React", "OpenAI API", "JavaScript", "HTML", "CSS"],
            features: ["AI-Powered Suggestions", "Resume Analysis", "Professional Templates"],
            icon: <FaReact size={24} />,
            color: "var(--accent-secondary)"
        },
        {
            id: 3,
            title: "Proverbial Plates",
            description: "Mobile app built with React Native and Expo that serves as a fridge, spice rack, and pantry item organizer, whilst also providing a plethora of recipes ranked by on the ingredients you already have available",
            imageUrl: "Images/Proverbial Plates.PNG",
            link: "/Website/proverbialplates",
            technologies: ["React Native", "Expo", "JavaScript", "CSS"],
            features: ["Recipe Recommendations", "Ingredient Tracking", "Mobile App"],
            icon: <FaMobile size={24} />,
            color: "var(--accent-tertiary)"
        },
        {
            id: 4,
            title: "Wordle App",
            description: "A Wordle clone implemented with JavaFx, that like the popular New York Times Game, has the user attempt to guess mystery five-letter words in six attempts. Built as a self-taught implementation of JavaFx",
            imageUrl: "Images/Wordle Recreation.jpg",
            link: "/Website/wordle",
            technologies: ["Java", "JavaFX", "FXML"],
            features: ["Word Guessing Game", "Desktop Application", "JavaFX UI"],
            icon: <FaJava size={24} />,
            color: "var(--accent-primary)"
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
                {/* Hero Section */}
                <motion.section 
                    className="hero-section"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="page-title">Assorted Projects</h1>
                    <p className="hero-subtitle">Diverse software development projects and applications</p>
                    
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">{projects.length}</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">12</span>
                            <span className="stat-label">Technologies</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">2025</span>
                            <span className="stat-label">Latest</span>
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
