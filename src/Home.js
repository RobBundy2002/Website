import React from 'react';
import { motion } from 'framer-motion';
import './StyleSheets/Home.css';
import ProfilePhoto from './SRC-Images/Profile Photo.jpg';
import { Helmet } from 'react-helmet';

const buttonData = [
    { href: "/Website/#/Website/assortedprojects", label: "Assorted Projects", className: "button-container" },
    { href: "/Website/#/Website/hostedwebsites", label: "Hosted Websites", className: "button-container2" },
    { href: "/Website/#/Website/classassignments", label: "Class Projects", className: "button-container3" },
    { href: "/Website/#/Website/skills", label: "Skills + Tech", className: "button-container4" },
    { href: "/Website/#/Website/contactme", label: "Contact Info", className: "button-container5" },
    { href: "/Website/#/Website/aboutme", label: "About Me", className: "button-container6" },
];

const Home = () => {
    return (
        <div className="App-container bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 min-h-screen text-white">
            <Helmet>
                <title>Rob Bundy | Portfolio</title>
                <meta name="description" content="Rob Bundy's professional portfolio and project showcase." />
            </Helmet>

            <div className="App flex flex-col items-center justify-center py-16 px-4">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <h1 className="text-5xl font-extrabold text-orange-400 mb-2">Rob Bundy</h1>
                    <p className="text-xl text-orange-200 mb-8">
                        Software Developer and Computer Science Graduate of The University of Virginia
                    </p>
                    <motion.img
                        src={ProfilePhoto}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-orange-300"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        loading="lazy"
                    />
                </motion.div>

                <div className="max-w-md p-8 bg-orange rounded-lg">
                    {buttonData.map((btn, index) => (
                        <motion.a
                            key={index}
                            href={btn.href}
                            className={btn.className}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 + index * 0.3, duration: 0.6 }}
                        >
                            <span style={{ fontWeight: 'bold', fontSize: '40px' }}>{btn.label}</span>
                            <div className={`backdrop${index === 0 ? '' : index + 1}`}></div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
