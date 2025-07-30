import React from 'react';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
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
        </div>
    );
};

export default HomePage;