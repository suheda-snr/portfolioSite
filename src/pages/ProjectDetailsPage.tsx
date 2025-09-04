import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ProjectData } from "../components/ProjectCard";
import "../styles/pages/ProjectDetailsPage.css";

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

    // Use image2 if exists, else fallback to image
    const getHeroImage = (project: ProjectData) => {
        if (project.image2) {
            try {
                return require(`../assets/tastopia2.png`);
            } catch {
                return null;
            }
        }
        try {
            return require(`../assets/${project.image}.png`);
        } catch {
            return null;
        }
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
                        {project.links.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-btn"
                                aria-label={
                                    link.type === "github"
                                        ? "Visit project GitHub repository"
                                        : link.type === "live"
                                            ? "Visit project live site"
                                            : "View project demo"
                                }
                            >
                                {link.type === "github" && "GitHub"}
                                {link.type === "live" && "Live Site"}
                                {link.type === "demo" && "Demo"}
                            </a>
                        ))}
                    </div>
                </section>

                {/* Back Navigation */}
                <div className="back-to-projects">
                    <Link to="/projects" className="back-btn">
                        ← Back to Projects
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsPage;