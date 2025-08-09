import React from 'react';
import '../StyleSheets/SharedStyles.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SkywardBound = () => {
    return (
        <div className="page-container">
            <div className="content-container">
                <motion.h1 
                    className="page-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Skyward Bound
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
                            <source src="Videos/SkywardBound.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <p className="project-description">
                        A vertical platformer game developed in Unity where players navigate through 
                        challenging levels by jumping between platforms and avoiding obstacles. The game 
                        features dynamic difficulty scaling, power-ups, and a unique scoring system that 
                        rewards both speed and precision.
                    </p>
                </motion.div>

                <div className="navigation-buttons">
                    <Link to="/Website/videogames" className="back-button">
                        Back to Video Games
                    </Link>
                    <Link to="/Website" className="back-button">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SkywardBound; 