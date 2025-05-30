import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AssortedProjects from "./AssortedProjects/AssortedProjects";
import HostedWebsites from './HostedWebsites/HostedWebsites';
import ClassAssignments from './ClassAssignments/ClassAssignments';
import SkillsPage from './SkillsPage';
import Footer from './Miscellaneous/Footer';
import ContactMePage from './ContactMe';
import AboutMePage from './AboutMe';
import ProverbialPlates from './AssortedProjects/ProverbialPlates';
import Wordle from './AssortedProjects/Wordle';
import MatrixMadness from './HostedWebsites/MatrixMadness';
import ScrollToTop from "./Miscellaneous/ScrollToTop";
import UJLP from "./HostedWebsites/UJLP";
import CelestialArcade from "./HostedWebsites/Celestial Arcade";
import SkywardBound from "./ClassAssignments/Skyward Bound";
import CourseReviewApplication from "./ClassAssignments/CourseReviewApplication";
import VampireFrostBite from "./ClassAssignments/VampireFrostbite";
import DraculaReborn from "./ClassAssignments/DraculaReborn";
import CreditApprovalProject from "./ClassAssignments/CreditApprovalProject";

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/Website" element={<Home />} />
                <Route path="/Website/assortedprojects" element={<AssortedProjects />} />
                <Route path="/Website/hostedwebsites" element={<HostedWebsites />} />
                <Route path="/Website/classassignments" element={<ClassAssignments />} />
                <Route path="/Website/skills" element={<SkillsPage />} />
                <Route path="/Website/contactme" element={<ContactMePage />} />
                <Route path="/Website/aboutme" element={<AboutMePage />} />
                <Route path="/Website/proverbialplates" element={<ProverbialPlates />} />
                <Route path="/Website/wordle" element={<Wordle />} />
                <Route path="/Website/matrixmadness" element={<MatrixMadness />} />
                <Route path="/Website/ujlp" element={<UJLP />} />
                <Route path="/Website/celestialarcade" element={<CelestialArcade />} />
                <Route path="/Website/skywardbound" element={<SkywardBound />} />
                <Route path="/Website/coursereviewapp" element={<CourseReviewApplication />} />
                <Route path="/Website/vampirefrostbite" element={<VampireFrostBite />} />
                <Route path="/Website/draculareborn" element={<DraculaReborn />} />
                <Route path="/Website/mlproject" element={<CreditApprovalProject />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
