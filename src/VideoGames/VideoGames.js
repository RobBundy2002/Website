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
            description: "Doodle Jump Style game built in Unity as part of an end of semester final project. Combines C# Scripts with various other sets of asset packages. Built at the University of Virginia for CS4730 alongside Kathleen Mead and Hayden Johnson",
            imageUrl: "Images/Skyward Bound.jpg",
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
            description: "Pico-8 game coded with Lua. Individual contributions include most core game logic, and garlic thrower mechanics. Built at the University of Virginia for SLAV2500 alongside Alexandra McDonald, Christian Giannos, and Ankit Poudyal",
            imageUrl: "Images/DraculaReborn.png",
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
            description: "Pico-8 game coded with Lua, that also includes various designed sprites and sounds to enhance the player experience whilst also fitting the game jam theme assigned of single room. Built at the University of Virginia for CS4730",
            imageUrl: "Images/VampireFrostBite.png",
            link: "/Website/videogames/vampirefrostbite",
            technologies: ["Pico-8", "Lua", "Sprite Design"],
            features: ["Custom Sprites", "Sound Design", "Single Room Theme"],
            icon: <FaCode size={24} />,
            color: "var(--accent-tertiary)",
            platform: "Pico-8"
        },
        {
            id: 4,
            title: "Beneath the World Tree",
            description: "An immersive 3D video game built in unity as part of a semester long final project. This game combines 3d rigidbody physics, an original scored audio, and active narration that teaches you how to play the game. Built at Georgia Institute of Technology for CS6457 alongside Michelle Jones, Hao Sun, Omer Mirza, and Sameen Shaik.",
            imageUrl: "Images/BeneathTree.png",
            link: "/Website/videogames/beneaththeworldtree",
            technologies: ["Unity", "C#", "Game Development"],
            features: ["3D Manic Shooter", "Unity Engine", "C# Scripts"],
            icon: <FaUnity size={24} />,
            color: "var(--accent-primary)",
            platform: "Unity"
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
                    <h1 className="page-title">Video Games</h1>
                    <p className="hero-subtitle">Unity and Pico-8 game development projects</p>
                    
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">{projects.length}</span>
                            <span className="stat-label">Games</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">2</span>
                            <span className="stat-label">Platforms</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">2024</span>
                            <span className="stat-label">Latest</span>
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