import React from 'react';
import '../StyleSheets/SharedStyles.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const VampireFrostbite = () => {
    return (
        <div className="page-container">
            <div className="content-container">
                <motion.h1 
                    className="page-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Vampire Frostbite
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
                            <source src="Videos/VampfireFrostbite.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <p className="description">
                        Vampire Frostbite is a thrilling, fast-paced game where players control a vampire trapped in a perilous ice rink. In this unique game, the player’s main objective is to survive the dangers of the sun’s rays by throwing sheets to cover the sunlight while also gathering as much blood as possible to sustain their vampire character.

                        Set in a haunted ice rink, Vampire Frostbite combines classic arcade mechanics with strategic resource management. Players must time their actions carefully, as the sun's rays are constantly shifting and spawning, and the threat of exposure increases with each passing moment.

                        The game is built using the PICO-8 engine, which allows for a unique pixelated art style and retro-inspired sound design. Its intuitive controls and engaging gameplay mechanics keep players on their toes as they aim for higher scores while they fight to survive.

                        Overall, Vampire Frostbite offers a thrilling mix of action, strategy, and quick reflexes, all set within a charming yet challenging retro game environment.
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

export default VampireFrostbite; 