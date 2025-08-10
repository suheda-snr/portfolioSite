import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard, { ProjectData } from '../ProjectCard';
import '../../styles/home/ProjectsSection.css';

const ProjectsSection: React.FC = () => {
    const { t } = useTranslation();

    // Get projects from translation files
    const projects: ProjectData[] = t('projects.projectList', { returnObjects: true }) as ProjectData[];

    return (
        <div className="projects-wrapper">
            <div className="container projects-section px-md-5">
                <h2 className="section-title">{t('projects.sectionTitle')}</h2>
                <div className="projects-grid">
                    {projects.slice(0, 3).map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
                <button className="see-all-btn">{t('projects.seeAll')}</button>
            </div>
        </div>
    );
};

export default ProjectsSection;