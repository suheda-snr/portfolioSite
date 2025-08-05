import React, { useState, useEffect } from 'react';
import '../styles/SectionSidebar.css';
import { useTranslation } from 'react-i18next';

const SectionSidebar: React.FC = () => {
    const [activeSection, setActiveSection] = useState('intro');
    const { t } = useTranslation();
    const sections = ['intro', 'about', 'projects'];

    useEffect(() => {
        const scrollContainer = document.querySelector('.homepage');
        if (!scrollContainer) {
            console.error('Scroll container (.homepage) not found');
            return;
        }

        const handleScroll = () => {
            console.log('Scroll event triggered');
            let currentSection = 'intro'; // Default to intro

            // Get scroll position
            const scrollTop = scrollContainer.scrollTop;
            const viewportHeight = window.innerHeight;

            console.log(`Scroll position: ${scrollTop}, Viewport height: ${viewportHeight}`);

            // Check each section to find which one is most visible
            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                const element = document.getElementById(section);

                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top;
                    const elementBottom = rect.bottom;

                    console.log(`Section: ${section}, Top: ${elementTop}, Bottom: ${elementBottom}`);

                    // Check if section is in viewport (more lenient threshold)
                    // A section is considered active if it's within the upper 60% of the viewport
                    if (elementTop <= viewportHeight * 0.6 && elementBottom > 0) {
                        currentSection = section;
                        console.log(`Setting active section to: ${section}`);
                    }

                    // Special handling for the last section (projects)
                    // If we're near the bottom of the page, make sure projects is active
                    if (section === 'projects' && elementTop <= viewportHeight * 0.8) {
                        currentSection = 'projects';
                        console.log(`Setting active section to projects (bottom threshold)`);
                    }
                } else {
                    console.log(`Section not found: ${section}`);
                }
            }

            // Additional check: if scroll is at very bottom, ensure last section is active
            const isAtBottom = scrollTop + viewportHeight >= scrollContainer.scrollHeight - 50;
            if (isAtBottom) {
                currentSection = sections[sections.length - 1];
                console.log('At bottom, setting to last section');
            }

            setActiveSection(currentSection);
            console.log(`Final active section: ${currentSection}`);
        };

        // Debounce scroll events for better performance
        let timeoutId: NodeJS.Timeout;
        const debouncedHandleScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(handleScroll, 10);
        };

        scrollContainer.addEventListener('scroll', debouncedHandleScroll);
        console.log('Scroll listener added to .homepage');

        // Call on mount to set initial active section
        handleScroll();

        return () => {
            clearTimeout(timeoutId);
            console.log('Scroll listener removed from .homepage');
            scrollContainer.removeEventListener('scroll', debouncedHandleScroll);
        };
    }, [sections]);

    const handleSectionClick = (section: string) => {
        setActiveSection(section);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

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
                                e.preventDefault();
                                handleSectionClick(section);
                            }}
                        >
                            {t(`sidebar.${section}`)}
                        </a>
                    </li>
                ))}
            </ul>
            <div
                className="sidebar-line"
                style={{
                    top: `calc(${sections.indexOf(activeSection)} * (1.25rem + 1.25rem) + 0.6rem)`,
                }}
            />
        </div>
    );
};

export default SectionSidebar;