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
                            <video className="featured-image" muted autoPlay loop playsInline>
                              <source src="Videos/AIVestor.mp4" type="video/mp4" />
                            </video>
                            <div className="featured-body">
                                <h3>AI Vestor</h3>
                                <p className="muted">Intelligent investment analysis platform with ML models and visualizations.</p>
                                <div className="featured-actions">
                                    <Link to="/Website/aivestor" className="back-button primary">View</Link>
                                    <a className="live-link" href="https://github.com/RobBundy2002" target="_blank" rel="noreferrer">Repo</a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="featured-card" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                            <video className="featured-image" muted autoPlay loop playsInline>
                              <source src="Videos/UJLPRecording.mp4" type="video/mp4" />
                            </video>
                            <div className="featured-body">
                                <h3>UJLP CIO Website</h3>
                                <p className="muted">End-to-end site for an academic journal, with a custom article CMS.</p>
                                <div className="featured-actions">
                                    <Link to="/Website/ujlp" className="back-button primary">View</Link>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="featured-card" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                            <video className="featured-image" muted autoPlay loop playsInline>
                              <source src="Videos/Shroom_beneath_world_tree_Trailer.mp4" type="video/mp4" />
                            </video>
                            <div className="featured-body">
                                <h3>Beneath the World Tree</h3>
                                <p className="muted">Unity exploration prototype — built with a team at Georgia Tech.</p>
                                <div className="featured-actions">
                                    <Link to="/Website/videogames/beneaththeworldtree" className="back-button primary">View</Link>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="featured-card" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                            <video className="featured-image" muted autoPlay loop playsInline>
                              <source src="Videos/Recording.mp4" type="video/mp4" />
                            </video>
                            <div className="featured-body">
                                <h3>Matrix Madness</h3>
                                <p className="muted">College hoops analytics grid game — modular React app with responsive design.</p>
                                <div className="featured-actions">
                                    <Link to="/Website/matrixmadness" className="back-button primary">View</Link>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="featured-card" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                            <video className="featured-image" muted autoPlay loop playsInline>
                              <source src="Videos/ScreenRecording_01-03-2025 00-43-06_1.mp4" type="video/mp4" />
                            </video>
                            <div className="featured-body">
                                <h3>Proverbial Plates</h3>
                                <p className="muted">Mobile pantry app that suggests recipes.</p>
                                <div className="featured-actions">
                                    <Link to="/Website/proverbialplates" className="back-button primary">View</Link>
                                    <a className="live-link" href="#" target="_blank" rel="noreferrer">Repo</a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="featured-card" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                            <img src="Images/ml.jpg" alt="Credit Approval" className="featured-image" />
                            <div className="featured-body">
                                <h3>Credit Approval ML</h3>
                                <p className="muted">Machine learning pipeline for credit approval prediction.</p>
                                <div className="featured-actions">
                                    <Link to="/Website/mlproject" className="back-button primary">View</Link>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="featured-card" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                            <video className="featured-image" muted autoPlay loop playsInline>
                              <source src="Videos/ResumeGPT.mp4" type="video/mp4" />
                            </video>
                            <div className="featured-body">
                                <h3>Resume GPT</h3>
                                <p className="muted">AI resume builder with streaming OpenAI integration.</p>
                                <div className="featured-actions">
                                    <Link to="/Website/resumegpt" className="back-button primary">View</Link>
                                    <a className="live-link" href="https://github.com/RobBundy2002" target="_blank" rel="noreferrer">Repo</a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="featured-card" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                            <video className="featured-image" muted autoPlay loop playsInline>
                              <source src="Videos/SkywardBound.mp4" type="video/mp4" />
                            </video>
                            <div className="featured-body">
                                <h3>Skyward Bound</h3>
                                <p className="muted">Vertical platformer prototype built in Unity.</p>
                                <div className="featured-actions">
                                    <Link to="/Website/videogames/skywardbound" className="back-button primary">View</Link>
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
