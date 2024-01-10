import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
                <Route path="/projects/*" element={<Projects />} />
                <Route path="/section1/*" element={<Section1 />} />
                <Route path="/section2/*" element={<Section2 />} />
                <Route path="/section3/*" element={<Section3 />} />
            </Routes>
        </Router>
    );
};

export default App;