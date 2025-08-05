import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/ProjectCard.css';
import tastopia from '../assets/tastopia.png';

const ProjectCard: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="project-card">
            <div className="image-wrapper">
                <div className="project-image">
                    <img src={tastopia} alt="Project Thumbnail" className="project-img" />
                </div>
            </div>
            <div className="project-content">
                {<span className="featured-label">{t('projects.featured.label')}</span>}
                <h3 className="project-title">{t('projects.featured.title')}</h3>
                <div className="project-details">
                    <p className="project-description">{t('projects.featured.description')}</p>
                </div>
                <div className="project-footer">
                    <div className="tech-stack ">
                        <span className="tech-item ">node.js</span>
                        <span className="tech-item">HTML 5</span>
                        <span className="tech-item ">CSS</span>
                        <span className="tech-item">figma</span>
                    </div>
                    <div className="project-links">
                        <a href="https://github.com/suheda-snr/tastopia" className="link-item me-2">
                            <svg width="18" height="18" fill="#fff" viewBox="0 0 24 24">
                                <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.5-4-1.5-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1 .1 1.6 1 1.6 1 .9 1.6 2.3 1.2 2.9.9.1-.7.4-1.2.8-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.4 0 0 1-.3 3.3 1.2a11.6 11.6 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.8.2 3.1.1 3.4.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.6.8.5A12 12 0 0012 .5z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;