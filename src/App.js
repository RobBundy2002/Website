import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import SkillsPage from "./SkillsPage";
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/Website" element={<Home />} />
                <Route path="/Website/section1" element={<Section1 />} />
                <Route path="/Website/section2" element={<Section2 />} />
                <Route path="/Website/section3" element={<Section3 />} />
                <Route path="/Website/skills" element={<SkillsPage />} />
            </Routes>
        </Router>
    );
};

export default App;