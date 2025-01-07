import React from 'react';
import './Projects.css';
import {Link} from "react-router-dom";

const Wordle = () => {
    return (
        <div className="App">
            <div className="content">
                <h1 className="title">Wordle</h1>
                <div className="video-container">
                    <video className="video-w" controls>
                        <source src="Videos/Wordle.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <p className="description">
                   Wordle App Recreation. Built and implemented with JavaFX, and utilizes a dictionary containing over 2500 of the most popular 5-letter words.
                </p>
                <Link to="/Website/assortedprojects" className="back-button">
                    Back to Projects
                </Link>
                <Link to="/Website/" className="back-to-home">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default Wordle;
