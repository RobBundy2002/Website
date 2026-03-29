import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import AssortedProjects from "./AssortedProjects/AssortedProjects";
import HostedWebsites from './HostedWebsites/HostedWebsites';
import ClassAssignments from './ClassAssignments/ClassAssignments';
import Footer from './components/FooterNew';
import Layout from './components/Layout';
import AboutMePage from './AboutMe';
import Education from './Education';
import ProverbialPlates from './AssortedProjects/ProverbialPlates';
import Wordle from './AssortedProjects/Wordle';
import ResumeGPT from './AssortedProjects/ResumeGPT';
import AIVestor from './AssortedProjects/AIVestor';
import MatrixMadness from './HostedWebsites/MatrixMadness';
import ScrollToTop from "./Miscellaneous/ScrollToTop";
import UJLP from "./HostedWebsites/UJLP";
import CelestialArcade from "./HostedWebsites/CelestialArcade";
import CourseReviewApplication from "./ClassAssignments/CourseReviewApplication";
import CreditApprovalProject from "./ClassAssignments/CreditApprovalProject";
import SearchResults from './SearchResults';
import VideoGames from './VideoGames/VideoGames';
import SkywardBound from './VideoGames/SkywardBound';
import DraculaReborn from './VideoGames/DraculaReborn';
import VampireFrostbite from './VideoGames/VampireFrostbite';
import BeneathTheWorldTree from './VideoGames/BeneathTheWorldTree';

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
              <Routes>
                <Route path="/Website" element={<Home />} />
                <Route path="/Website/projects" element={<Projects />} />
                <Route path="/Website/assortedprojects" element={<AssortedProjects />} />
                <Route path="/Website/hostedwebsites" element={<HostedWebsites />} />
                <Route path="/Website/classassignments" element={<ClassAssignments />} />
                <Route path="/Website/videogames" element={<VideoGames />} />
                <Route path="/Website/aboutme" element={<AboutMePage />} />
                <Route path="/Website/education" element={<Education />} />
                <Route path="/Website/search" element={<SearchResults />} />
                <Route path="/Website/aivestor" element={<AIVestor />} />
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
                <Route path="/Website/videogames/beneaththeworldtree" element={<BeneathTheWorldTree />} />
              </Routes>
            </Layout>
        </Router>
    );
};

export default App;
