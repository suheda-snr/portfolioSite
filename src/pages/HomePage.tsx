import React from 'react';
import IntroSection from '../components/home/IntroSection';
import AboutSection from '../components/home/AboutSection';
import ExperienceSection from '../components/home/ExperienceSection';
import ProjectsSection from '../components/home/ProjectsSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/pages/HomePage.css';
import SkillsSection from '../components/home/SkillsSection';

const HomePage: React.FC = () => {
    return (
        <div className="homepage">
            <div id="intro" className="section">
                <IntroSection />
            </div>
            <div id="about" className="section">
                <AboutSection />
            </div>
            <div id="experience" className="section">
                <ExperienceSection />
            </div>
            <div id="projects" className="section">
                <ProjectsSection />
            </div>
            <div id="skills" className="section">
                <SkillsSection />
            </div>
        </div>
    );
};

export default HomePage;