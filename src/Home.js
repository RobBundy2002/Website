import React from 'react';
import './Home.css';
import ProfilePhoto from './Profile Photo.jpg';

const Home = () => {
    return (
        <div className="App-container">
            <div className="App">
                <div className="bg-navy text-white min-h-screen flex flex-col items-center justify-center relative">
                    <h1 className="text-4xl font-bold mb-2 text-orange">Rob Bundy</h1>
                    <p className="text-lg text-orange">
                        Computer Science Student & Teaching Assistant at The University of Virginia
                    </p>
                    <div className="fix">
                        <a href="https://www.linkedin.com/in/rob-bundy-192035223/" className="btn-linkedin mt-4">LinkedIn</a>
                    </div>
                    <div className="max-w-md p-8 bg-orange rounded-lg">
                        <div className="mb-4">
                            <img
                                src={ProfilePhoto}
                                alt="Profile"
                                className="w-20 h-20 rounded-full object-cover"
                            />
                        </div>
                        <a href="/Website/#/Website/section1" className="button-container">
                            <span style={{ fontWeight: 'bold', fontSize: '40px' }}>Assorted Projects</span>
                            <div className="backdrop"></div>
                        </a>

                        <a href="/Website/#/Website/section2" className="button-container2">
                            <span style={{ fontWeight: 'bold', fontSize: '40px' }}>Hosted Websites </span>
                            <div className="backdrop2"></div>
                        </a>
                        <a href="/Website/#/Website/section3" className="button-container3">
                            <span style={{ fontWeight: 'bold', fontSize: '40px' }}>Class Assignments</span>
                            <div className="backdrop3"></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

