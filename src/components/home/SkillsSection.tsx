import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/home/SkillsSection.css';

const SkillsSection: React.FC = () => {
    const { t } = useTranslation();
    const mainSkills: { name: string; level: string }[] = t('skills.mainSkills', { returnObjects: true });
    const otherSkills: string[] = t('skills.otherSkills', { returnObjects: true });

    const [animatedWidths, setAnimatedWidths] = React.useState<number[]>(mainSkills.map(() => 0));

    React.useEffect(() => {
        // Parse numbers from strings like "90%" -> 90
        const numericLevels = mainSkills.map(skill => parseInt(skill.level.replace('%', ''), 10));
        const timer = setTimeout(() => {
            setAnimatedWidths(numericLevels);
        }, 100); // small delay to trigger CSS transition

        return () => clearTimeout(timer);
    }, [mainSkills]);

    return (
        <div className="skills-wrapper" id="skills">
            <div className="container skills-section px-4 px-md-5">
                <h2 className="section-title">{t('sidebar.skills')}</h2>

                <div className="main-skills fade-in">
                    {mainSkills.map((skill, index) => (
                        <div key={index} className="skill-bar">
                            <span className="skill-name">{skill.name}</span>
                            <div className="progress">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${animatedWidths[index]}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="other-skills fade-in">
                    <h3>{t('skills.otherSkillsTitle')}</h3>
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
