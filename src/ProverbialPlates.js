import React from 'react';
import './Projects.css';
import {Link} from "react-router-dom";

const ProverbialPlates = () => {
    return (
        <div className="App">
            <div className="content">
                <h1 className="title">Proverbial Plates</h1>
                <div className="video-container">
                    <video className="video-pp" controls>
                        <source src="Videos/ScreenRecording_01-03-2025 00-43-06_1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <p className="description">
                    Mobile app built with React Native and Expo. Here in this short demo video I demonstrate navigating the sign up screen, checking your fridge quantity, adding and removing from your fridge, and finally navigating a recipe.
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

export default ProverbialPlates;
