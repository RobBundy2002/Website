import React from 'react';
import '../StyleSheets/SharedStyles.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaPlay, FaGlobe } from 'react-icons/fa';

const UJLP = () => {
    const features = [
        {
            icon: "🎨",
            title: "Modern Design",
            description: "Clean, professional interface with contemporary aesthetics"
        },
        {
            icon: "📱",
            title: "Mobile Responsive",
            description: "Optimized for all devices and screen sizes"
        },
        {
            icon: "⚡",
            title: "Fast Performance",
            description: "Optimized loading speeds and smooth interactions"
        },
        {
            icon: "🛠️",
            title: "Active Maintenance",
            description: "Regular updates and ongoing support"
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
                    <h1 className="page-title">UJLP at UVA</h1>
                    <p className="hero-subtitle">University Judiciary Law and Politics - Official Website</p>
                    
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">Live</span>
                            <span className="stat-label">Status</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">React</span>
                            <span className="stat-label">Framework</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">2024</span>
                            <span className="stat-label">Launched</span>
                        </div>
                    </div>
                </motion.section>

                <motion.section 
                    className="project-detail-section"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="enhanced-card">
                        <div className="video-section">
                            <h3 className="section-title">Project Demo</h3>
                            <div className="video-container enhanced-video">
                                <video className="video-w" controls preload="metadata">
                                    <source src="Videos/UJLPRecording.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="video-overlay">
                                    <FaPlay className="play-icon" />
                                </div>
                            </div>
                        </div>

                        <div className="project-details">
                            <div className="detail-section">
                                <h3 className="section-title">About the Project</h3>
                                <p className="enhanced-description">
                                    A custom-built website for the newly formed UJLP CIO on Grounds at UVA. 
                                    This project features modern web technologies and responsive design, 
                                    actively maintained and serving the UVA community.
                                </p>
                            </div>

                            <div className="detail-section">
                                <h3 className="section-title">Live Website</h3>
                                <div className="link-container">
                                    <a 
                                        href="https://ujlawandpolitics.org/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="live-link"
                                    >
                                        <FaGlobe className="link-icon" />
                                        <span className="link-text">Visit UJLP@UVA</span>
                                        <FaExternalLinkAlt className="link-arrow" />
                                    </a>
                                </div>
                            </div>

                            <div className="features-grid">
                                {features.map((feature, index) => (
                                    <motion.div 
                                        key={feature.title}
                                        className="feature-item"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="feature-icon">{feature.icon}</div>
                                        <h4>{feature.title}</h4>
                                        <p>{feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.section>

                <motion.div 
                    className="enhanced-nav"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <Link to="/Website/hostedwebsites" className="back-button">
                        <span className="button-icon">←</span>
                        <span>Back to Projects</span>
                    </Link>
                    <Link to="/Website" className="back-button primary">
                        <span className="button-icon"></span>
                        <span>Back to Home</span>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default UJLP;
