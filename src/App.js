import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import AssortedProjects from './AssortedProjects';
import HostedWebsites from './HostedWebsites';
import ClassAssignments from './ClassAssignments';
import SkillsPage from "./SkillsPage";
import Footer from './Footer';
import ContactMePage from "./ContactMe";
import AboutMePage from "./AboutMe";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/Website" element={<Home />} />
                <Route path="/Website/assortedprojects" element={<AssortedProjects />} />
                <Route path="/Website/hostedwebsites" element={<HostedWebsites />} />
                <Route path="/Website/classassignments" element={<ClassAssignments />} />
                <Route path="/Website/skills" element={<SkillsPage />} />
                <Route path="/Website/contactme" element={<ContactMePage />} />
                <Route path="/Website/aboutme" element={<AboutMePage />} />
            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;