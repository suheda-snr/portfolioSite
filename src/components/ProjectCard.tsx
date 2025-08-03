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
                {/*<span className="featured-label">{t('projects.featured.label')}</span>*/}
                <h3 className="project-title">{t('projects.featured.title')}</h3>
                <div className="project-details">
                    <p className="project-description">{t('projects.featured.description')}</p>
                </div>
                <div className="tech-stack">
                    <span className="tech-item">VS Code</span>
                    <span className="tech-item">Sublime Text</span>
                    <span className="tech-item">Atom</span>
                </div>
                <div className="project-links">
                    <a href="#" className="link-item">Visual Studio Marketplace</a>
                    <a href="#" className="link-item">Package Control</a>
                    <a href="#" className="link-item">npm</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;