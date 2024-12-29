import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/Website" element={<Home />} />
                <Route path="/Website/projects" element={<Projects />} />
                <Route path="/Website/section1" element={<Section1 />} />
                <Route path="/Website/section2" element={<Section2 />} />
                <Route path="/Website/section3" element={<Section3 />} />
            </Routes>
        </Router>
    );
};

export default App;