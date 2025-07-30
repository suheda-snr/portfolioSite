import React from 'react';
import '../styles/AboutSection.css';

const AboutSection: React.FC = () => {
    return (
        <div className="about-wrapper">
            <div className="container about-section py-5 px-4 px-md-5">
                <div className="row align-items-center">
                    This is the About Section.
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
