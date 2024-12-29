import React from 'react';
import { Link } from 'react-router-dom';
import './Section1.css';

const Section1 = () => {

    const projects = [
        {
            id: 1,
            title: "Proverbial Plates",
            description: "Mobile app built with React Native and Expo that serves as a fridge, spice rack, and pantry item organizer, whilst also providing a plethora of recipes ranked by on the ingredients you already have available",
            imageUrl: "Images/Proverbial Plates.PNG"
        },
        {
            id: 2,
            title: "Wordle App",
            description: "A Wordle clone implemented with JavaFx, that like the popular New York Times Game, has the user attempt to guess mystery five-letter words in six attempts. Built as a self-taught implementation of JavaFx",
            imageUrl: "Images/Wordle Recreation.jpg"
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
