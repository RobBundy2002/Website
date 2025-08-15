import React from 'react';
import '../StyleSheets/SharedStyles.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaPlay, FaBrain, FaChartLine, FaRobot } from 'react-icons/fa';

const AIVestor = () => {
    const features = [
        {
            icon: "🤖",
            title: "AI-Powered Analysis",
            description: "Advanced machine learning algorithms for investment insights"
        },
        {
            icon: "📈",
            title: "Market Predictions",
            description: "Real-time market analysis and trend prediction"
        },
        {
            icon: "💰",
            title: "Portfolio Optimization",
            description: "Intelligent portfolio management and optimization"
        },
        {
            icon: "📊",
            title: "Data Visualization",
            description: "Interactive charts and comprehensive analytics"
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
                    <h1 className="page-title">AI Vestor</h1>
                    <p className="hero-subtitle">Intelligent Investment Analysis Platform</p>
                    
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">AI</span>
                            <span className="stat-label">Powered</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">Real-time</span>
                            <span className="stat-label">Analysis</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">2025</span>
                            <span className="stat-label">Latest</span>
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
                        <div className="video-container">
                            <video className="video-mm" controls>
                                <source src="Videos/AIVestor.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        {/* Project Details */}
                        <div className="project-details">
                            <div className="detail-section">
                                <h3 className="section-title">About the Project</h3>
                                <p className="enhanced-description">
                                    AI Vestor is an intelligent investment analysis platform that leverages artificial intelligence 
                                    to provide comprehensive market insights and portfolio optimization. The application combines 
                                    advanced machine learning algorithms with real-time market data to deliver actionable 
                                    investment recommendations and risk analysis.
                                </p>
                            </div>

                            <div className="detail-section">
                                <h3 className="section-title">Key Technologies</h3>
                                <div className="tech-tags">
                                    <span className="tech-tag">Python</span>
                                    <span className="tech-tag">Machine Learning</span>
                                    <span className="tech-tag">TensorFlow</span>
                                    <span className="tech-tag">React</span>
                                    <span className="tech-tag">JavaScript</span>
                                    <span className="tech-tag">Data Analysis</span>
                                    <span className="tech-tag">API Integration</span>
                                </div>
                            </div>

                            {/* Features Grid */}
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

                {/* Navigation */}
                <motion.div 
                    className="enhanced-nav"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <Link to="/Website/assortedprojects" className="back-button">
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

export default AIVestor;