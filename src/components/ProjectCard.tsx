import React from 'react';
import '../styles/ProjectCard.css';
import { Link } from 'react-router-dom';

export interface ProjectLink {
    label: string;
    type: 'github' | 'live' | 'demo';
    url: string;
}

export interface ProjectDetails {
    overview: string;
    features: string[];
    techStack: string[];
    challenges: string[];
    role: string[];
}

export interface ProjectData {
    id: string;
    label: string;
    title: string;
    description: string;
    details: ProjectDetails;
    links: ProjectLink[];
    image: string;
    image2?: string;
}

interface ProjectCardProps {
    project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

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
        <Link to={`/projects/${project.id}`} className="project-card-link">
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
                                {project.details.techStack.slice(0, 8).map((tech, index) => (
                                    <span key={index} className="tech-item">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;