import React from 'react';
import '../StyleSheets/SharedStyles.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CelestialArcade = () => {
    return (
        <div className="page-container">
            <div className="content-container">
                <motion.h1 
                    className="page-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Celestial Arcade
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
                            <source src="Videos/RecordingCA.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <a className="project-description">
                        Website that serves as a host for a variety of interactive games such as Rock-Paper-Scissors, Connect4, and TicTacToe. Implemented with TailWindCSS and React.
                        Website can be located at the following url ->&nbsp;
                        <a href="https://robbundy2002.github.io/Gaming-Website-Project/" target="_blank" rel="noopener noreferrer" className="styled-link">Celestial Arcade</a>
                    </a>
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

export default CelestialArcade; 