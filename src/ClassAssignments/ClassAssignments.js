import React from 'react';
import { Link } from 'react-router-dom';
import '../StyleSheets/Projects.css';

const ClassAssignments = () => {

    const projects = [
        {
            id: 1,
            title: "Skyward Bound",
            description: "Doodle Jump Style game built in Unity as part of an end of semester final project. Combines C# Scripts with various other sets of asset packages. Built at the University of Virginia for CS4730 alongside Kathleen Mead and Hayden Johnson",
            imageUrl: "Images/Skyward Bound.jpg",
            link: "/Website/skywardbound"
        },
        {
            id: 2,
            title: "Course Review App",
            description: "CRUD App built with JavaFx and Sqlite which serves as an interface to add, delete, and edit CR's, and add users and classes to the database. Built at the University of Virginia for CS3140 alongside Matt Crowe and Patrick Williamson",
            imageUrl: "Images/Course Review App.png",
            link: "/Website/coursereviewapp"
        },
        {
            id: 3,
            title: "Vampire Frost Bite",
            description: "Pico-8 game coded with Lua, that also includes various designed sprites and sounds to enhance the player experience whilst also fitting the game jam theme assigned of single room. Built at the University of Virginia for CS4730",
            imageUrl: "Images/VampireFrostBite.png",
            link: "/Website/vampirefrostbite"
        },
        {
            id: 4,
            title: "Dracula Reborn",
            description: "Pico-8 game coded with Lua. Individual contributions include most core game logic, and garlic thrower mechanics. Built at the University of Virginia for SLAV2500 alongside Alexandra McDonald, Christian Giannos, and Ankit Poudyal",
            imageUrl: "Images/DraculaReborn.png",
            link: "/Website/draculareborn"
        }
    ];

    return (
        <div className="App">
            <h2>Class Projects</h2>
            <div className="project-container">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                        />
                        {project.title === "Vampire Frost Bite" || project.title === "Course Review App" || project.title === "Skyward Bound" || project.title === "Dracula Reborn" ? (
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

            <Link to="/Website" className="back-to-home">
                Back to Home
            </Link>
        </div>
    );
};

export default ClassAssignments;
