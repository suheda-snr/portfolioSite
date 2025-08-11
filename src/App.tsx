import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import FloatingContactBar from './components/FloatingContactBar';
import SectionSidebar from './components/SectionSidebar';

import './i18n/i18n';

function App() {
  return (
    <div className="App">
      <Router>
        {window.location.pathname === '/' && <SectionSidebar />}
        <FloatingContactBar />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailsPage />} />
          </Routes>
        </Layout>
      </Router>
    </div >
  );
}

export default App;
