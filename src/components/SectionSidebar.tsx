import React, { useState, useEffect } from 'react';
import '../styles/SectionSidebar.css';

const SectionSidebar: React.FC = () => {
    const [activeSection, setActiveSection] = useState('intro');
    const sections = ['intro', 'about'];

    useEffect(() => {
        const scrollContainer = document.querySelector('.homepage');
        if (!scrollContainer) {
            console.error('Scroll container (.homepage) not found');
            return;
        }

        const handleScroll = () => {
            console.log('Scroll event triggered');
            let currentSection = 'intro';
            let minDistance = Infinity;

            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const distance = Math.abs(rect.top);
                    console.log(`Section: ${section}, Top: ${rect.top}, Distance: ${distance}`);
                    // Adjust threshold for scroll snapping
                    if (rect.top >= -50 && rect.top <= window.innerHeight * 0.2 && distance < minDistance) {
                        currentSection = section;
                        minDistance = distance;
                    }
                } else {
                    console.log(`Section not found: ${section}`);
                }
            }
            setActiveSection(currentSection);
            console.log(`Active section: ${currentSection}`);
        };

        scrollContainer.addEventListener('scroll', handleScroll);
        console.log('Scroll listener added to .homepage');
        handleScroll(); // Call on mount to set initial active section
        return () => {
            console.log('Scroll listener removed from .homepage');
            scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, [sections]);

    return (
        <div className="section-sidebar">
            <ul>
                {sections.map((section) => (
                    <li key={section}>
                        <a
                            href={`#${section}`}
                            aria-label={`Go to ${section} section`}
                            className={activeSection === section ? 'active' : ''}
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default anchor behavior
                                setActiveSection(section);
                                const element = document.getElementById(section);
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
            <div
                className="sidebar-line"
                style={{
                    top: `calc(1.25rem * ${sections.indexOf(activeSection)} + 0.5rem)`,
                }}
            />
        </div>
    );
};

export default SectionSidebar;