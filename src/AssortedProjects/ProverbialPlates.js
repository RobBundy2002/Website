import React from 'react';
import '../StyleSheets/SharedStyles.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProverbialPlates = () => {
    return (
        <div className="page-container">
            <div className="content-container">
                <motion.h1 
                    className="page-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Proverbial Plates
                </motion.h1>

                <motion.div
                    className="project-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ maxWidth: '800px', margin: '0 auto' }}
                >
                    <div className="video-container">
                        <video className="video-pp" controls>
                            <source src="Videos/ScreenRecording_01-03-2025 00-43-06_1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <p className="description">
                        Mobile app built with React Native and Expo. Here in this short demo video I demonstrate navigating the sign up screen, checking your fridge quantity, adding and removing from your fridge, and finally navigating a recipe.
                    </p>
                </motion.div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Link to="/Website/assortedprojects" className="back-button" style={{ marginRight: '1rem' }}>
                        Back to Projects
                    </Link>
                    <Link to="/Website" className="back-button">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProverbialPlates;
