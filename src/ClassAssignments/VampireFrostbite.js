import React from 'react';
import '../StyleSheets/Projects.css';
import {Link} from "react-router-dom";

const VampireFrostBite = () => {
    return (
        <div className="App">
            <div className="content">
                <h2 className="title">Vampire Frost Bite</h2>
                <div className="video-container">
                    <video className="video-mm" controls>
                        <source src="Videos/VampireFrostbite.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <p className="description">
                    Vampire Frostbite is a thrilling, fast-paced game where players control a vampire trapped in a perilous ice rink. In this unique game, the player’s main objective is to survive the dangers of the sun’s rays by throwing sheets to cover the sunlight while also gathering as much blood as possible to sustain their vampire character.

                    Set in a haunted ice rink, Vampire Frostbite combines classic arcade mechanics with strategic resource management. Players must time their actions carefully, as the sun's rays are constantly shifting and spawning, and the threat of exposure increases with each passing moment.

                    The game is built using the PICO-8 engine, which allows for a unique pixelated art style and retro-inspired sound design. Its intuitive controls and engaging gameplay mechanics keep players on their toes as they aim for higher scores while they fight to survive.

                    Overall, Vampire Frostbite offers a thrilling mix of action, strategy, and quick reflexes, all set within a charming yet challenging retro game environment.
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

export default VampireFrostBite;
