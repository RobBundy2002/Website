import React from 'react';
import { Link } from 'react-router-dom';
import '../StyleSheets/SharedStyles.css';
import { motion } from 'framer-motion';

const ClassAssignments = () => {
    const projects = [
        {
            id: 1,
            title: "Course Review App",
            description: "CRUD App built with JavaFx and Sqlite which serves as an interface to add, delete, and edit CR's, and add users and classes to the database. Built at the University of Virginia for CS3140 alongside Matt Crowe and Patrick Williamson",
            imageUrl: "Images/Course Review App.png",
            link: "/Website/coursereviewapp"
        },
        {
            id: 2,
            title: "Credit Approval Machine Learning",
            description: "Machine learning final project completed to determine the likelihood of credit card approval status based on past categorical date. Built at the University of Virginia under the Guidance of Professor Basit",
            imageUrl: "Images/ml.jpg",
            link: "/Website/mlproject"
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
                    Class Projects
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

export default ClassAssignments;
