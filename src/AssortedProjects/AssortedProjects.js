import React from 'react';
import { Link } from 'react-router-dom';
import '../StyleSheets/SharedStyles.css';
import { motion } from 'framer-motion';

const AssortedProjects = () => {
    const projects = [
        {
            id: 1,
            title: "ResumeGPT",
            description: "An AI-powered resume builder and analyzer built with React and OpenAI's GPT API. The application helps users create professional resumes by providing intelligent suggestions, formatting assistance, and content optimization based on industry best practices.",
            imageUrl: "Images/ResumeGPT.png",
            link: "/Website/resumegpt"
        },
        {
            id: 2,
            title: "Proverbial Plates",
            description: "Mobile app built with React Native and Expo that serves as a fridge, spice rack, and pantry item organizer, whilst also providing a plethora of recipes ranked by on the ingredients you already have available",
            imageUrl: "Images/Proverbial Plates.PNG",
            link: "/Website/proverbialplates"
        },
        {
            id: 3,
            title: "Wordle App",
            description: "A Wordle clone implemented with JavaFx, that like the popular New York Times Game, has the user attempt to guess mystery five-letter words in six attempts. Built as a self-taught implementation of JavaFx",
            imageUrl: "Images/Wordle Recreation.jpg",
            link: "/Website/wordle"
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
                    Assorted Projects
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

export default AssortedProjects;
