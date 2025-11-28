import React from 'react';
import '../styles/ProjectCard.css';
import { Link } from 'react-router-dom';
import { ProjectCardProps } from '../types/projects';


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

    const imagesContext = (require as any).context('../assets', false, /\.(png|svg)$/);

    const getImageSrc = (imageName: string) => {
        if (!imageName) return null;
        const pngPath = `./${imageName}.png`;
        const svgPath = `./${imageName}.svg`;
        try {
            return imagesContext(pngPath);
        } catch (e1) {
            try {
                return imagesContext(svgPath);
            } catch (e2) {
                console.warn(`Image not found in assets: ${imageName}`);
                return null;
            }
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