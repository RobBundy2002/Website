import React from 'react';
import '../StyleSheets/Projects.css';
import {Link} from "react-router-dom";

const SkywardBound = () => {
    return (
        <div className="App">
            <div className="content">
                <h2 className="title">Skyward Bound</h2>
                <div className="video-container">
                    <video className="video-mm" controls>
                        <source src="Videos/SkywardBound.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <p className="description">
                    Skyward Bound is an exciting, fast-paced game that takes inspiration from the classic Doodle Jump but with a thrilling outer space twist. Players control a llama as they navigate through an ever-changing, obstacle-filled environment while trying to jump from platform to platform in order to reach greater heights. The goal is to soar higher and higher through space, avoiding shooting stars and collecting diamonds and boosts to maximize the score.

                    Skyward Bound is built within the Unity Game Engine, combining free online asset packs with C# logic scripting.
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

export default SkywardBound;
