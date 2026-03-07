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
                <meta name="keywords" content="software engineer, web development, game development, React, Unity, portfolio" />
            </Helmet>

            <div className="content-container">
                <div className="page-intro fancy-intro">
                    {/* intro intentionally left minimal */}
                </div>

                {/* Featured Projects */}
                <motion.section 
                    className="featured-section"
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
                        Featured Projects
                    </motion.h2>

                    <div className="featured-grid">
                        <motion.div className="featured-card" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                            <img src="Images/ResumeGPT.png" alt="ResumeGPT" className="featured-image" />
                            <div className="featured-body">
                                <h3>Resume GPT</h3>
                                <p className="muted">Full-stack AI web app integrating OpenAI for streaming responses. Securely deployed to GitHub.</p>
                                <div className="featured-actions">
                                    <Link to="/Website/resumegpt" className="back-button primary">View</Link>
                                    <a className="live-link" href="https://github.com/RobBundy2002" target="_blank" rel="noreferrer">Repo</a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="featured-card" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                            <img src="Images/UJLP.png" alt="UJLP" className="featured-image" />
                            <div className="featured-body">
                                <h3>UJLP CIO Website</h3>
                                <p className="muted">End-to-end site for an academic journal, with a custom article CMS and responsive design.</p>
                                <div className="featured-actions">
                                    <Link to="/Website/ujlp" className="back-button primary">View</Link>
                                    <a className="live-link" href="https://ujlawandpolitics.org/" target="_blank" rel="noreferrer">Live</a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="featured-card" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                            <img src="Images/Hoop Grids.png" alt="Matrix Madness" className="featured-image" />
                            <div className="featured-body">
                                <h3>Matrix Madness</h3>
                                <p className="muted">College hoops analytics grid game — modular React app with responsive design.</p>
                                <div className="featured-actions">
                                    <Link to="/Website/matrixmadness" className="back-button primary">View</Link>
                                    <a className="live-link" href="https://matrix-madness-frontend.onrender.com/" target="_blank" rel="noreferrer">Live</a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>


            </div>
        </div>
    );
};

export default Home;
