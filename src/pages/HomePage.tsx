import React from 'react';
import IntroSection from '../components/home/IntroSection';
import AboutSection from '../components/home/AboutSection';
import ProjectsSection from '../components/home/ProjectsSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/pages/HomePage.css';

const HomePage: React.FC = () => {
    return (
        <div className="homepage">
            <div id="intro" className="section">
                <IntroSection />
            </div>
            <div id="about" className="section">
                <AboutSection />
            </div>
            <div id="projects" className="section">
                <ProjectsSection />
            </div>
        </div>
    );
};

export default HomePage;