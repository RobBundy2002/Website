import React from 'react';
import './Home.css';
import ProfilePhoto from './Profile Photo.jpg';

const Home = () => {
    return (
        <div className="App">
            <div className="bg-navy text-white h-screen flex flex-col items-center justify-center relative">
                <div className="absolute top-10 right-10 text-right">
                    <h1 className="text-4xl font-bold mb-2 text-orange">Rob Bundy</h1>
                    <p className="text-lg text-orange">Computer Science Student & Teaching Assistant at The University of Virginia</p>
                </div>
                <div className="max-w-md p-8 bg-orange rounded-lg">
                    <div className="mb-4">
                        <img
                            src={ProfilePhoto}
                            alt="Profile"
                            className="w-20 h-20 rounded-full object-cover"
                        />
                    </div>
                    <a href="/section1" className="button-container">
                        <span style={{ fontWeight: 'bold', fontSize: '40px' }}>Odds and Ends</span>
                        <div className="backdrop"></div>
                    </a>

                    <a href="/section2" className="button-container2">
                        <span style={{ fontWeight: 'bold', fontSize: '40px' }}> Web Applications Built With React</span>
                        <div className="backdrop2"></div>

                    </a>
                    <a href="/section3" className="button-container3">
                        <span style={{ fontWeight: 'bold', fontSize: '40px' }}>Projects Built For TA'd Courses</span>
                        <div className="backdrop3"></div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
