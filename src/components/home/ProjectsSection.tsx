import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../ProjectCard';
import '../../styles/home/ProjectsSection.css';

const ProjectsSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="projects-wrapper">
            <div className="container projects-section px-md-5">
                <h2 className="section-title">{t('projects.featuredSection')}</h2>
                <div className="projects-grid">
                    <ProjectCard />
                </div>
                <button className="see-all-btn">{t('projects.seeAll')}</button>
            </div>
        </div>
    );
};

export default ProjectsSection;