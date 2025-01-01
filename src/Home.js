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
                    <div className="max-w-md p-8 bg-orange rounded-lg">
                        <div className="mb-4">
                            <img
                                src={ProfilePhoto}
                                alt="Profile"
                                className="w-20 h-20 rounded-full object-cover"
                            />
                        </div>
                        <a href="/Website/#/Website/assortedprojects" className="button-container">
                            <span style={{fontWeight: 'bold', fontSize: '40px'}}>Assorted Projects</span>
                            <div className="backdrop"></div>
                        </a>
                        <a href="/Website/#/Website/hostedwebsites" className="button-container2">
                            <span style={{fontWeight: 'bold', fontSize: '40px'}}>Hosted Websites </span>
                            <div className="backdrop2"></div>
                        </a>
                        <a href="/Website/#/Website/classassignments" className="button-container3">
                            <span style={{fontWeight: 'bold', fontSize: '40px'}}>Class Assignments</span>
                            <div className="backdrop3"></div>
                        </a>
                        <a href="/Website/#/Website/skills" className="button-container4">
                            <span style={{fontWeight: 'bold', fontSize: '40px'}}>Skills and Technologies</span>
                            <div className="backdrop4"></div>
                        </a>
                        <a href="/Website/#/Website/contactme" className="button-container5">
                            <span style={{fontWeight: 'bold', fontSize: '40px'}}>Contact Info</span>
                            <div className="backdrop5"></div>
                        </a>
                        <a href="/Website/#/Website/aboutme" className="button-container5">
                            <span style={{fontWeight: 'bold', fontSize: '40px'}}>About Me</span>
                            <div className="backdrop5"></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;

