import React from 'react';
import { Link } from 'react-router-dom';
import '../StyleSheets/SharedStyles.css';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaDatabase, FaBrain, FaGraduationCap } from 'react-icons/fa';

const ClassAssignments = () => {
    const projects = [
        {
            id: 1,
            title: "Course Review App",
            description: "CRUD App built with JavaFx and Sqlite which serves as an interface to add, delete, and edit CR's, and add users and classes to the database. Built at the University of Virginia for CS3140 alongside Matt Crowe and Patrick Williamson",
            imageUrl: "Images/Course Review App.png",
            link: "/Website/coursereviewapp",
            technologies: ["JavaFX", "SQLite", "Java"],
            features: ["CRUD Operations", "Database Management", "User Interface"],
            icon: <FaDatabase size={24} />,
            color: "var(--accent-primary)",
            course: "CS3140"
        },
        {
            id: 2,
            title: "Credit Approval Machine Learning",
            description: "Machine learning final project completed to determine the likelihood of credit card approval status based on past categorical date. Built at the University of Virginia under the Guidance of Professor Basit",
            imageUrl: "Images/ml.jpg",
            link: "/Website/mlproject",
            technologies: ["Python", "Machine Learning", "Data Analysis"],
            features: ["ML Models", "Credit Analysis", "Data Processing"],
            icon: <FaBrain size={24} />,
            color: "var(--accent-secondary)",
            course: "CS Machine Learning"
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
                <motion.section 
                    className="hero-section"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="page-title">Class Projects</h1>
                    <p className="hero-subtitle">Academic projects and coursework implementations</p>
                    
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">{projects.length}</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">2</span>
                            <span className="stat-label">Courses</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">UVA</span>
                            <span className="stat-label">University</span>
                        </div>
                    </div>
                </motion.section>

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
                                                    <FaGraduationCap size={12} />
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

export default ClassAssignments;
