import React from 'react';
import '../StyleSheets/Projects.css';
import {Link} from "react-router-dom";

const CelestialArcade = () => {
    return (
        <div className="App">
            <div className="content">
                <h2 className="title">Celestial Arcade</h2>
                <div className="video-container">
                    <video className="video-mm" controls>
                        <source src="Videos/RecordingCA.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <p className="description">
                    Website that serves as a host for a variety of interactive games such as Rock-Paper-Scissors, Connect4, and TicTacToe. Implemented with TailWindCSS and React.
                </p>
                <Link to="/Website/hostedwebsites" className="back-button">
                    Back to Websites
                </Link>
                <Link to="/Website/" className="back-to-home">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default CelestialArcade;
