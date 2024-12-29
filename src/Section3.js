import React from 'react';
import { Link } from 'react-router-dom';
import './Section3.css';

const Section3 = () => {
    // Static project data
    const projects = [
        {
            id: 1,
            title: "CS1112: Data Structures and Performance",
            description: "A project focused on data structures and performance optimization techniques in Java.",
            imageUrl: "https://via.placeholder.com/150" // Replace with an actual image URL if available
        },
        {
            id: 2,
            title: "Grading Commitment Manager",
            description: "A web-based tool to track grading assignments and deadlines.",
            imageUrl: "https://via.placeholder.com/150" // Replace with an actual image URL if available
        }
    ];

    return (
        <div className="App">
            <h2>Section 3</h2>
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

            <Link to="/Website" className="back-to-home">
                Back to Home
            </Link>
        </div>
    );
};

export default Section3;
