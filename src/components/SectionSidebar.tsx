import React, { useState, useEffect } from 'react';
import Scrollspy from 'react-scrollspy';
import '../styles/SectionSidebar.css';

const SectionSidebar: React.FC = () => {
    const [activeSection, setActiveSection] = useState('intro');
    // Only include sections that exist in your DOM for now
    const sections = ['intro', 'about']; // Add 'skills', 'projects', 'experience' when implemented

    // Debug Scrollspy updates
    const handleUpdate = (item: HTMLElement | null) => {
        const sectionId = item?.id || 'intro';
        console.log('Scrollspy updated to:', sectionId); // Debugging
        setActiveSection(sectionId);
    };

    return (
        <div className="section-sidebar">
            <Scrollspy
                items={sections}
                currentClassName="active"
                offset={-120} // Adjusted for potential top navbar height
                componentTag="ul"
                aria-label="Homepage section navigation"
                onUpdate={handleUpdate}
            >
                {sections.map((section) => (
                    <li key={section}>
                        <a href={`#${section}`} aria-label={`Go to ${section} section`}>
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    </li>
                ))}
            </Scrollspy>
            <div
                className="sidebar-line"
                style={{
                    top: `calc(2.5rem * ${sections.indexOf(activeSection)})`,
                }}
            />
        </div>
    );
};

export default SectionSidebar;