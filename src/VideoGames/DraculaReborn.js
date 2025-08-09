import React from 'react';
import '../StyleSheets/SharedStyles.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const DraculaReborn = () => {
    return (
        <div className="page-container">
            <div className="content-container">
                <motion.h1 
                    className="page-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Dracula Reborn
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
                            <source src="Videos/Dracula Reborn.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <p className="description">
                        Dracula Reborn is an action game where players control a bat on a quest to regain his true form;
                        Dracula. Set within a cursed terrain, the game challenges players to collect blood and bloodstones
                        scattered throughout the world. As they navigate the  environment, players must also evade deadly
                        threats like sunlight beams and dodge relentless vampire hunters and garlic throwers.

                        To survive, the bat can also toss nets to trap enemies and hurl cups to catch falling
                        holy water before it hits the bat. Built with the PICO-8 engine, Dracula Reborn
                        features pixel art,  arcade controls, and a haunting soundtrack that immerses players in a fight
                        for survival. Dracula Reborn delivers a uniquely intense and rewarding gameplay experience.

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

export default DraculaReborn; 