import React from 'react';
import '../StyleSheets/SharedStyles.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const UJLP = () => {
    return (
        <div className="page-container">
            <div className="content-container">
                {/* Hero Section */}
                <motion.div
                    className="hero-section"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="page-title">
                        UJLP at UVA
                    </h1>
                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        University Judiciary Law and Politics - Official Website
                    </motion.p>
                </motion.div>

                {/* Main Content Card */}
                <motion.div
                    className="project-card enhanced-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    {/* Video Section */}
                    <div className="video-section">
                        <h3 className="section-title">Project Demo</h3>
                        <div className="video-container enhanced-video">
                            <video className="video-w" controls preload="metadata">
                                <source src="Videos/UJLPRecording.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="project-details">
                        <div className="detail-section">
                            <h3 className="section-title">About the Project</h3>
                            <p className="project-description enhanced-description">
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
                                    <span className="link-icon">🌐</span>
                                    <span className="link-text">Visit UJLP@UVA</span>
                                    <span className="link-arrow">→</span>
                                </a>
                            </div>
                        </div>

                        {/* Features Grid */}
                        <div className="features-grid">
                            <div className="feature-item">
                                <div className="feature-icon">🎨</div>
                                <h4>Modern Design</h4>
                                <p>Clean, professional interface</p>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">📱</div>
                                <h4>Mobile Responsive</h4>
                                <p>Optimized for all devices</p>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">⚡</div>
                                <h4>Fast Performance</h4>
                                <p>Optimized loading speeds</p>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">🛠️</div>
                                <h4>Active Maintenance</h4>
                                <p>Regular updates and support</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Navigation */}
                <motion.div 
                    className="navigation-buttons enhanced-nav"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <Link to="/Website/hostedwebsites" className="back-button enhanced-button">
                        <span className="button-icon">←</span>
                        <span>Back to Projects</span>
                    </Link>
                    <Link to="/Website" className="back-button enhanced-button primary">
                        <span className="button-icon">🏠</span>
                        <span>Back to Home</span>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default UJLP;
