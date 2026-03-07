import React from 'react';
import { Link } from 'react-router-dom';
import '../StyleSheets/SharedStyles.css';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGamepad, FaUnity, FaCode } from 'react-icons/fa';

const VideoGames = () => {
    const projects = [
        {
            id: 1,
            title: "Skyward Bound",
            description: "Vertical platformer prototype built in Unity with precision-based scoring.",            imageUrl: "Images/Skyward Bound.jpg",
            videoUrl: "Videos/SkywardBound.mp4",
            link: "/Website/videogames/skywardbound",
            technologies: ["Unity", "C#", "Game Development"],
            features: ["Doodle Jump Style", "Unity Engine", "C# Scripts"],
            icon: <FaUnity size={24} />,
            color: "var(--accent-primary)",
            platform: "Unity"
        },

        {
            id: 2,
            title: "Dracula Reborn",
            description: "PICO-8 action demo with pixel art and arcade controls.",            imageUrl: "Images/DraculaReborn.png",
            videoUrl: "Videos/Dracula Reborn.mp4",
            link: "/Website/videogames/draculareborn",
            technologies: ["Pico-8", "Lua", "Game Logic"],
            features: ["Core Game Logic", "Garlic Thrower", "Pico-8 Engine"],
            icon: <FaGamepad size={24} />,
            color: "var(--accent-secondary)",
            platform: "Pico-8"
        },

        {
            id: 3,
            title: "Vampire Frost Bite",
            description: "Single-room PICO-8 title featuring custom sprites and sound.",            imageUrl: "Images/VampireFrostBite.png",
            videoUrl: "Videos/VampireFrostbite.mp4",
            link: "/Website/videogames/vampirefrostbite",
            technologies: ["Pico-8", "Lua", "Sprite Design"],
            features: ["Custom Sprites", "Sound Design", "Single Room Theme"],
            icon: <FaCode size={24} />,
            color: "var(--accent-tertiary)",
            platform: "Pico-8"
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
                        <h1 className="page-title">Video Games</h1>
                        <p className="hero-subtitle">Unity and Pico-8 game development projects</p>
                    </div>
                    <div className="intro-right intro-stats">
                        <div className="stat-badge">
                            <div className="stat-number">{projects.length}</div>
                            <div className="stat-label">Games</div>
                        </div>
                        <div className="stat-badge">
                            <div className="stat-number">{new Set(projects.map(p => p.platform)).size}</div>
                            <div className="stat-label">Platforms</div>
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
                                            className="project-icon"
                                            style={{ background: project.color }}
                                        >
                                            {project.icon}
                                        </div>
                                        <div className="platform-badge">
                                            {project.platform}
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
                                                    <FaGamepad size={12} />
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

export default VideoGames; 