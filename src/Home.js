import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './StyleSheets/SharedStyles.css';
import { Helmet } from 'react-helmet';
import { FaUser, FaGlobe, FaCode, FaGraduationCap, FaGamepad, FaArrowRight } from 'react-icons/fa';

const Home = () => {
    const categories = [
        {
            title: "About Me",
            description: "Learn more about my background, skills, and journey in software development.",
            link: "/Website/aboutme",
            icon: <FaUser size={24} />
        },
        {
            title: "Hosted Websites",
            description: "Explore my collection of live, deployed web applications and projects.",
            link: "/Website/hostedwebsites",
            icon: <FaGlobe size={24} />
        },
        {
            title: "Video Games",
            description: "Check out my collection of Unity and other game development projects.",
            link: "/Website/videogames",
            icon: <FaGamepad size={24} />
        },
        {
            title: "Assorted Projects",
            description: "Browse through my diverse portfolio of software development projects.",
            link: "/Website/assortedprojects",
            icon: <FaCode size={24} />
        },
        {
            title: "Class Assignments",
            description: "View notable academic projects and coursework implementations.",
            link: "/Website/classassignments",
            icon: <FaGraduationCap size={24} />
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
            <Helmet>
                <title>Rob Bundy | Software Engineer & Masters Student</title>
                <meta name="description" content="Rob Bundy's professional portfolio showcasing web development, game development, and software engineering projects." />
                <meta name="keywords" content="software developer, web development, game development, React, Unity, portfolio" />
            </Helmet>

            <div className="content-container">
                <motion.section 
                    className="hero-section"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hero-avatar"
                    >
                        <div className="profile-image-container">
                            <img
                                src="Images/Grad.jpg"
                                alt="Rob Bundy"
                                className="profile-image"
                            />
                            <div className="profile-image-overlay"></div>
                        </div>
                    </motion.div>
                    
                    <h1 className="hero-title">Rob Bundy</h1>
                    <p className="hero-subtitle">Software Engineer · Masters Student · Game Developer</p>
                    
                    <motion.div 
                        className="hero-stats"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="stat-item">
                            <span className="stat-number">3+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">20+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">15+</span>
                            <span className="stat-label">Technologies</span>
                        </div>
                    </motion.div>
                </motion.section>

                <motion.section 
                    className="categories-section"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h2 
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Explore My Work
                    </motion.h2>
                    
                    <div className="project-categories">
                        {categories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link to={category.link} className="category-card">
                                    <div className="category-icon">
                                        {category.icon}
                                    </div>
                                    <h3 className="category-title">{category.title}</h3>
                                    <p className="category-description">{category.description}</p>
                                    <div className="category-arrow">
                                        <FaArrowRight size={16} />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section 
                    className="quick-stats-section"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon">🚀</div>
                            <h4>Fast & Responsive</h4>
                            <p>Modern web applications built with cutting-edge technologies</p>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">🎮</div>
                            <h4>Game Development</h4>
                            <p>Unity games and interactive experiences</p>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">💡</div>
                            <h4>Innovative Solutions</h4>
                            <p>Creative problem-solving through code</p>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default Home;
