import React from 'react';
import { Link } from 'react-router-dom';
import './Section1.css';

const Section1 = () => {
    // Example data structure for projects
    const projects = [
        {
            id: 1,
            title: "Checkers",
            description: "A simple checkers game where two players can compete against each other.",
            imageUrl: "https://via.placeholder.com/150" // Replace with your image URL
        },
        {
            id: 2,
            title: "Tic Tac Toe",
            description: "A classic tic-tac-toe game with both player vs player and player vs AI modes.",
            imageUrl: "https://via.placeholder.com/150" // Replace with your image URL
        },
        {
            id: 3,
            title: "Wordle App",
            description: "A Wordle clone that lets you guess five-letter words in six attempts.",
            imageUrl: "Images/Wordle Recreation.jpg" // Replace with your image URL
        }
    ];

    return (
        <div className="App">
            <h2>Assorted Projects</h2>
            <div className="project-container">
                {projects.map((project) => (
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

export default Section1;
