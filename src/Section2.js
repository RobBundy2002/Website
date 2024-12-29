import React from 'react';
import { Link } from 'react-router-dom';
import './Section2.css';

const Section2 = () => {
    // Static project data
    const projects = [
        {
            id: 1,
            title: "Celestial Arcade",
            description: "A website designed to allow users to browse and play various games online.",
            imageUrl: "Images/Celestial Arcade.jpg" // Replace with an actual image URL if available
        },
        {
            id: 2,
            title: "College Hoops Matrix Madness",
            description: "Web App Game that is a college basketball version of the popular immaculate grid game. ",
            imageUrl: "Images/Hoop Grids.jpg" // Replace with an actual image URL if available
        }
    ];

    return (
        <div className="App">
            <h2>Websites</h2>
            <div className="project-container">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                        />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>

            <Link to="/Website/" className="back-to-home">
                Back to Home
            </Link>
        </div>
    );
};

export default Section2;
