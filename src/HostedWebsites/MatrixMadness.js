import React from 'react';
import '../StyleSheets/SharedStyles.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MatrixMadness = () => {
    return (
        <div className="page-container">
            <div className="content-container">
                <motion.h1 
                    className="page-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Matrix Madness
                </motion.h1>

                <motion.div
                    className="project-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ maxWidth: '800px', margin: '0 auto' }}
                >
                    <div className="video-container">
                        <video className="video-mm" controls>
                            <source src="Videos/Recording.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <p className="project-description">
                        A web app that offers a college basketball twist on the popular Immaculate Grid game. Built with a sleek React front-end and powered by a robust MongoDB backend, this game delivers seamless grid functionality and real-time data interaction, providing an engaging and dynamic user experience. Located at the following ->
                        <a href="https://matrix-madness-frontend.onrender.com/" target="_blank" rel="noopener noreferrer" className="styled-link">College Hoops Matrix Madness</a>
                        &nbsp;(Note: Grid may take up to a minute to load in.)
                    </p>
                </motion.div>

                <div className="navigation-buttons">
                    <Link to="/Website/hostedwebsites" className="back-button">
                        Back to Hosted Websites
                    </Link>
                    <Link to="/Website" className="back-button">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MatrixMadness;
