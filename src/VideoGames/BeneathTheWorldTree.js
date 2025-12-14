import React from 'react';
import '../StyleSheets/SharedStyles.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BeneathTheWorldTree = () => {
    return (
        <div className="page-container">
            <div className="content-container">
                <motion.h1
                    className="page-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Beneath The World Tree
                </motion.h1>

                <motion.div
                    className="project-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{ maxWidth: '800px', margin: '0 auto' }}
                >
                    <div className="video-container">
                        <video className="video-w" controls>
                            <source src="Videos/Shroom.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <p className="description">
                        This video game, originally as a course project as a part of the OMSCS program at Georgia Tech, combines 3D rigidbody physics and an original score to create an immersive full length video game.
                        Built at GT alongside Michelle Jones, Hao Sun, Omer Mirza, and Sameeen Shaik.
                    </p>
                </motion.div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Link to="/Website/videogames" className="back-button" style={{ marginRight: '1rem' }}>
                        Back to Assignments
                    </Link>
                    <Link to="/Website" className="back-button">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BeneathTheWorldTree;
