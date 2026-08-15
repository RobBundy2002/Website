import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProjectRoutePage } from './pages/projects/ProjectRoutePage';

const NorthstarPage = lazy(() => import('./pages/projects/NorthstarPage'));
const CareerBoardPage = lazy(() => import('./pages/projects/CareerBoardPage'));
const UJLPPage = lazy(() => import('./pages/projects/UJLPPage'));
const ResumeGPTPage = lazy(() => import('./pages/projects/ResumeGPTPage'));

export default function App() {
  return (
    <Suspense fallback={<div className="route-loading">Loading project...</div>}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/northstar" element={<NorthstarPage />} />
          <Route path="projects/careerboard" element={<CareerBoardPage />} />
          <Route path="projects/ujlp" element={<UJLPPage />} />
          <Route path="projects/resumegpt" element={<ResumeGPTPage />} />
          <Route path="projects/:slug" element={<ProjectRoutePage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="404" element={<NotFoundPage />} />
          <Route path="Website" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
