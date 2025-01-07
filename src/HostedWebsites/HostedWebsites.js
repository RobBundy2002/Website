import React from 'react';
import { Link } from 'react-router-dom';


const HostedWebsites = () => {

    const projects = [
        {
            id: 1,
            title: "Celestial Arcade",
            description: "An active website designed to allow users to browse and play various games online such as Checkers, Connect4, and Whack-A-Mole.",
            imageUrl: "Images/Celestial Arcade.png"
        },
        {
            id: 2,
            title: "Matrix Madness",
            description: "Web App Game that serves as a college basketball version of the popular immaculate grid game. Built alongside Grant Costello.",
            imageUrl: "Images/Hoop Grids.png",
            link: "/Website/matrixmadness"
        },
        {
            id: 3,
            title: "CS1112 Website ",
            description: "Course Website implemented with the just-the-docs jekyll theme. Built at the University of Virginia for CS1112 alongside Jackson Le.",
            imageUrl: "Images/CS1112 Website.png"
        },
        {
            id: 3,
            title: "UJLP @ UVA",
            description: "CIO Website for the University Journal for Law and Politics at the University of Virginia. Design Choices made by Shelby Eliasek.",
            imageUrl: "Images/UJLP.png",
            link: "/Website/ujlp"
        }
    ];
    return (
        <div className="App">
            <h2>Hosted Websites</h2>
            <div className="project-container">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                        />
                        {project.title === "College Hoops Matrix Madness" || project.title === "UJLP @ UVA" ? (
                            <Link to={project.link}>
                                <h3>{project.title}</h3>
                            </Link>
                        ) : (
                            <h3>{project.title}</h3>
                        )}
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

export default HostedWebsites;