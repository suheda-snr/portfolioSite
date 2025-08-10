import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard, { ProjectData } from '../components/ProjectCard';
import '../styles/pages/ProjectsPage.css';

const ProjectsPage: React.FC = () => {
    const { t } = useTranslation();

    // Load full project list from translations
    const projects: ProjectData[] = t('projects.projectList', { returnObjects: true }) as ProjectData[];

    return (
        <div className="projects-page-wrapper home-background">
            <div className="container projects-page-section px-md-5">
                <h1 className="projects-page-title">{t('projects.sectionTitle')}</h1>
                <div className="projects-page-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
