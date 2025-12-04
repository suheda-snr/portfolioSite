import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/SectionSidebar.css';
import { useTranslation } from 'react-i18next';

const SectionSidebar: React.FC = () => {
    const [activeSection, setActiveSection] = useState('intro');
    const { t } = useTranslation();
    const sections = ['intro', 'about', 'experience', 'projects', 'skills'];

    const location = useLocation(); // get current route

    // Only show sidebar on homepage
    const isHomepage = location.pathname === '/';

    useEffect(() => {
        if (!isHomepage) return; // don't attach scroll listeners on other pages

        const scrollContainer = document.querySelector('.homepage');
        if (!scrollContainer) return;

        const handleScroll = () => {
            let currentSection = 'intro';
            const scrollTop = scrollContainer.scrollTop;
            const viewportHeight = window.innerHeight;

            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                const element = document.getElementById(section);

                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top;
                    const elementBottom = rect.bottom;

                    if (elementTop <= viewportHeight * 0.6 && elementBottom > 0) {
                        currentSection = section;
                    }

                    if (section === 'projects' && elementTop <= viewportHeight * 0.8) {
                        currentSection = 'projects';
                    }
                }
            }

            const isAtBottom = scrollTop + viewportHeight >= scrollContainer.scrollHeight - 50;
            if (isAtBottom) currentSection = sections[sections.length - 1];

            setActiveSection(currentSection);
        };

        let timeoutId: NodeJS.Timeout;
        const debouncedHandleScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(handleScroll, 10);
        };

        scrollContainer.addEventListener('scroll', debouncedHandleScroll);
        handleScroll(); // initial check

        return () => {
            clearTimeout(timeoutId);
            scrollContainer.removeEventListener('scroll', debouncedHandleScroll);
        };
    }, [sections, isHomepage]);

    if (!isHomepage) return null; // hide sidebar if not on homepage

    const handleSectionClick = (section: string) => {
        setActiveSection(section);
        const element = document.getElementById(section);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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