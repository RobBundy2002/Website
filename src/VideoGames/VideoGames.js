import React from 'react';
import { Link } from 'react-router-dom';
import '../StyleSheets/SharedStyles.css';
import { motion } from 'framer-motion';

const VideoGames = () => {
    const projects = [
        {
            id: 1,
            title: "Skyward Bound",
            description: "Doodle Jump Style game built in Unity as part of an end of semester final project. Combines C# Scripts with various other sets of asset packages. Built at the University of Virginia for CS4730 alongside Kathleen Mead and Hayden Johnson",
            imageUrl: "Images/Skyward Bound.jpg",
            link: "/Website/videogames/skywardbound"
        },
        {
            id: 2,
            title: "Dracula Reborn",
            description: "Pico-8 game coded with Lua. Individual contributions include most core game logic, and garlic thrower mechanics. Built at the University of Virginia for SLAV2500 alongside Alexandra McDonald, Christian Giannos, and Ankit Poudyal",
            imageUrl: "Images/DraculaReborn.png",
            link: "/Website/videogames/draculareborn"
        },
        {
            id: 3,
            title: "Vampire Frost Bite",
            description: "Pico-8 game coded with Lua, that also includes various designed sprites and sounds to enhance the player experience whilst also fitting the game jam theme assigned of single room. Built at the University of Virginia for CS4730",
            imageUrl: "Images/VampireFrostBite.png",
            link: "/Website/videogames/vampirefrostbite"
        }
    ];

    return (
        <div className="page-container">
            <div className="content-container">
                <motion.h1 
                    className="page-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Video Games
                </motion.h1>
                
                <motion.div 
                    className="projects-grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                        >
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="project-image"
                            />
                            <Link to={project.link} style={{ textDecoration: 'none' }}>
                                <h3 className="project-title">{project.title}</h3>
                            </Link>
                            <p className="project-description">{project.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <div style={{ textAlign: 'center' }}>
                    <Link to="/Website" className="back-button">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VideoGames; 