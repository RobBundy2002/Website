import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AssortedProjects from "./AssortedProjects/AssortedProjects";
import HostedWebsites from './HostedWebsites/HostedWebsites';
import ClassAssignments from './ClassAssignments/ClassAssignments';
import Footer from './Miscellaneous/Footer';
import AboutMePage from './AboutMe';
import ProverbialPlates from './AssortedProjects/ProverbialPlates';
import Wordle from './AssortedProjects/Wordle';
import ResumeGPT from './AssortedProjects/ResumeGPT';
import MatrixMadness from './HostedWebsites/MatrixMadness';
import ScrollToTop from "./Miscellaneous/ScrollToTop";
import UJLP from "./HostedWebsites/UJLP";
import CelestialArcade from "./HostedWebsites/CelestialArcade";
import CourseReviewApplication from "./ClassAssignments/CourseReviewApplication";
import CreditApprovalProject from "./ClassAssignments/CreditApprovalProject";
import VideoGames from './VideoGames/VideoGames';
import SkywardBound from './VideoGames/SkywardBound';
import DraculaReborn from './VideoGames/DraculaReborn';
import VampireFrostbite from './VideoGames/VampireFrostbite';

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/Website" element={<Home />} />
                <Route path="/Website/assortedprojects" element={<AssortedProjects />} />
                <Route path="/Website/hostedwebsites" element={<HostedWebsites />} />
                <Route path="/Website/classassignments" element={<ClassAssignments />} />
                <Route path="/Website/videogames" element={<VideoGames />} />
                <Route path="/Website/aboutme" element={<AboutMePage />} />
                <Route path="/Website/proverbialplates" element={<ProverbialPlates />} />
                <Route path="/Website/wordle" element={<Wordle />} />
                <Route path="/Website/resumegpt" element={<ResumeGPT />} />
                <Route path="/Website/matrixmadness" element={<MatrixMadness />} />
                <Route path="/Website/ujlp" element={<UJLP />} />
                <Route path="/Website/celestialarcade" element={<CelestialArcade />} />
                <Route path="/Website/coursereviewapp" element={<CourseReviewApplication />} />
                <Route path="/Website/mlproject" element={<CreditApprovalProject />} />
                <Route path="/Website/videogames/skywardbound" element={<SkywardBound />} />
                <Route path="/Website/videogames/draculareborn" element={<DraculaReborn />} />
                <Route path="/Website/videogames/vampirefrostbite" element={<VampireFrostbite />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
