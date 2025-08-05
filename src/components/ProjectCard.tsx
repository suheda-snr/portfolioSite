import React from 'react';
import '../styles/ProjectCard.css';

export interface ProjectLink {
    type: 'github' | 'live' | 'demo';
    url: string;
}

export interface ProjectData {
    id: string;
    label: string;
    title: string;
    description: string;
    techStack: string[];
    links: ProjectLink[];
    image: string;
}

interface ProjectCardProps {
    project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const renderLinkIcon = (type: string) => {
        switch (type) {
            case 'github':
                return (
                    <svg width="18" height="18" fill="#fff" viewBox="0 0 24 24">
                        <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.5-4-1.5-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1 .1 1.6 1 1.6 1 .9 1.6 2.3 1.2 2.9.9.1-.7.4-1.2.8-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.4 0 0 1-.3 3.3 1.2a11.6 11.6 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.8.2 3.1.1 3.4.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.6.8.5A12 12 0 0012 .5z" />
                    </svg>
                );
            case 'live':
                return (
                    <svg width="18" height="18" fill="#fff" viewBox="0 0 24 24">
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                    </svg>
                );
            case 'demo':
                return (
                    <svg width="18" height="18" fill="#fff" viewBox="0 0 24 24">
                        <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    const getImageSrc = (imageName: string) => {
        try {
            return require(`../assets/${imageName}.png`);
        } catch (error) {
            console.warn(`Image not found: ${imageName}.png`);
            return null;
        }
    };

    const imageSrc = getImageSrc(project.image);

    return (
        <div className="project-card">
            <div className="image-wrapper">
                <div className="project-image">
                    {imageSrc ? (
                        <img
                            src={imageSrc}
                            alt={`${project.title} Thumbnail`}
                            className="project-img"
                        />
                    ) : (
                        <div className="project-img-placeholder">
                            <span>No Image</span>
                        </div>
                    )}
                </div>
            </div>
            <div className="project-content">
                <span className="project-label">{project.label}</span>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-details">
                    <p className="project-description">{project.description}</p>
                    <div className="project-footer">
                        <div className="tech-stack">
                            {project.techStack.map((tech, index) => (
                                <span key={index} className="tech-item">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="project-links">
                            {project.links.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    className="link-item"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${project.title} ${link.type} link`}
                                >
                                    {renderLinkIcon(link.type)}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;