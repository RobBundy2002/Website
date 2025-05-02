import React from 'react';
import '../StyleSheets/Projects.css';
import {Link} from "react-router-dom";

const DraculaReborn = () => {
    return (
        <div className="App">
            <div className="content">
                <h2 className="title">Dracula Reborn</h2>
                <div className="video-container">
                    <video className="video-mm" controls>
                        <source src="Videos/Dracula Reborn.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <p className="description">
                    Dracula Reborn is an action game where players control a bat on a quest to regain his true form;
                    Dracula. Set within a cursed terrain, the game challenges players to collect blood and bloodstones
                    scattered throughout the world. As they navigate the  environment, players must also evade deadly
                    threats like sunlight beams and dodge relentless vampire hunters and garlic throwers.

                    To survive, the bat can also toss nets to trap enemies and hurl cups to catch falling
                    holy water before it hits the bat. Built with the PICO-8 engine, Dracula Reborn
                    features pixel art,  arcade controls, and a haunting soundtrack that immerses players in a fight
                    for survival. Dracula Reborn delivers a uniquely intense and rewarding gameplay experience. Built for
                    SLAV2500 at the University of Virginia alongside Alexandra McDonald, Christian Giannos, and Ankit Poudyal.

                </p>
                <Link to="/Website/classassignments" className="back-button">
                    Back to Assignments
                </Link>
                <Link to="/Website/" className="back-to-home">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default DraculaReborn;
