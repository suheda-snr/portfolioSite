import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/home/SkillsSection.css';

const SkillsSection: React.FC = () => {
    const { t } = useTranslation();

    const mainSkills: { name: string; level: number }[] = t('skills.mainSkills', { returnObjects: true });
    const otherSkills: string[] = t('skills.otherSkills', { returnObjects: true });

    return (
        <div className="skills-wrapper" id="skills">
            <div className="container skills-section px-4 px-md-5">
                <h2 className="section-title">{t('sidebar.skills')}</h2>

                {/* Main skills with progress bars */}
                <div className="main-skills fade-in">
                    {mainSkills.map((skill, index) => (
                        <div key={index} className="skill-bar">
                            <span className="skill-name">{skill.name}</span>
                            <div className="progress">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Other skills as a styled list like About section */}
                <div className="other-skills fade-in">
                    <h3>Other Skills:</h3>
                    <ul className="tech-list">
                        {otherSkills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
