import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/pages/ProjectDetailsPage.css";
import { ProjectData } from "../types/projects";

const ProjectDetailsPage: React.FC = () => {
    const { id } = useParams();
    const { t } = useTranslation();

    // Fetch project list from translations
    const projects: ProjectData[] = t("projects.projectList", { returnObjects: true }) as ProjectData[];
    const project = projects.find((p) => p.id === id);

    if (!project) return <p className="not-found">Project not found.</p>;

    // Fetch section titles from translations
    const titles = t("projects.projectDetailsTitles", { returnObjects: true }) as {
        overview: string;
        features: string;
        techStack: string;
        challenges: string;
        role: string;
        links: string;
    };

    const assetsContext = (require as any).context('../assets', false, /\.(png|svg)$/);

    const getHeroImage = (project: ProjectData) => {
        const tryResolve = (name?: string) => {
            if (!name) return null;
            const png = `./${name}.png`;
            const svg = `./${name}.svg`;
            try {
                return assetsContext(png);
            } catch {
                try {
                    return assetsContext(svg);
                } catch {
                    return null;
                }
            }
        };

        if (project.image2) {
            const i2 = tryResolve(project.image2);
            if (i2) return i2;
        }
        return tryResolve(project.image);
    };

    const heroImageSrc = getHeroImage(project);

    return (
        <div className="project-details-wrapper">
            <div className="container px-md-5">
                {/* Hero Banner */}
                <div className="hero-banner">
                    <div className="hero-overlay">
                        <h1 className="hero-title">{project.title}</h1>
                        <span className="hero-label">{project.label}</span>
                    </div>
                    {heroImageSrc && <img src={heroImageSrc} alt={project.title} className="hero-img" />}
                </div>

                {/* Overview */}
                <section className="project-section">
                    <h2>{titles.overview}</h2>
                    <p>{project.details.overview}</p>
                </section>

                {/* Features */}
                <section className="project-section">
                    <h2>{titles.features}</h2>
                    <ul className="features-list">
                        {project.details.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                </section>

                {/* Tech Stack */}
                <section className="project-section">
                    <h2>{titles.techStack}</h2>
                    <div className="tech-badges">
                        {project.details.techStack.map((tech, i) => (
                            <span key={i} className="badge">
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Challenges */}
                <section className="project-section">
                    <h2>{titles.challenges}</h2>
                    <ul className="challenges-list">
                        {project.details.challenges.map((ch, i) => (
                            <li key={i}>{ch}</li>
                        ))}
                    </ul>
                </section>

                {/* My Role */}
                <section className="project-section">
                    <h2>{titles.role}</h2>
                    <ul className="role-list">
                        {project.details.role.map((r, i) => (
                            <li key={i}>{r}</li>
                        ))}
                    </ul>
                </section>

                {/* Links */}
                <section className="project-section project-links-section">
                    <h2>{titles.links}</h2>
                    <div className="project-links">
                        {project.links.map((link, i) => {
                            let svgIcon;
                            let label;

                            switch (link.type) {
                                case "github":
                                    label = "GitHub";
                                    svgIcon = (
                                        <svg width="28" height="28" fill="#000" viewBox="0 0 24 24">
                                            <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.5-4-1.5-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1 .1 1.6 1 1.6 1 .9 1.6 2.3 1.2 2.9.9.1-.7.4-1.2.8-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.4 0 0 1-.3 3.3 1.2a11.6 11.6 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.8.2 3.1.1 3.4.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.6.8.5A12 12 0 0012 .5z" />
                                        </svg>
                                    );
                                    break;
                                case "live":
                                    label = "Live Site";
                                    svgIcon = (
                                        <svg width="28" height="28" fill="#000" viewBox="0 0 24 24">
                                            <path d="M14 3v2h3.59L7 15.59 8.41 17 19 6.41V10h2V3h-7zM5 5v14h14v-7h-2v5H7V7h5V5H5z" />
                                        </svg>
                                    );
                                    break;
                                case "demo":
                                    label = "Project Demo";
                                    svgIcon = (
                                        <svg width="28" height="28" fill="#000" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    );
                                    break;
                                default:
                                    label = "External Link";
                                    svgIcon = (
                                        <svg width="28" height="28" fill="#000" viewBox="0 0 24 24">
                                            <path d="M14 3v2h3.59L7 15.59 8.41 17 19 6.41V10h2V3h-7zM5 5v14h14v-7h-2v5H7V7h5V5H5z" />
                                        </svg>
                                    );
                            }

                            return (
                                <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-btn"
                                    aria-label={label}
                                >
                                    <span style={{ marginRight: "8px" }}>{svgIcon}</span>
                                    {label}
                                </a>
                            );
                        })}
                    </div>
                </section>


            </div>
        </div>
    );
};

export default ProjectDetailsPage;