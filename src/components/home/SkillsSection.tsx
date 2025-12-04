import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/home/SkillsSection.css';

const SkillsSection: React.FC = () => {
    const { t } = useTranslation();
    const languagesFrameworks: { name: string; level: string }[] = t('skills.languagesFrameworks', { returnObjects: true });
    const toolsPlatforms: string[] = t('skills.toolsPlatforms', { returnObjects: true });
    const practices: string[] = t('skills.practices', { returnObjects: true });

    const [animatedWidths, setAnimatedWidths] = React.useState<number[]>(languagesFrameworks.map(() => 0));

    React.useEffect(() => {
        const numericLevels = languagesFrameworks.map(skill => parseInt(skill.level.replace('%', ''), 10));
        const timer = setTimeout(() => {
            setAnimatedWidths(numericLevels);
        }, 100);

        return () => clearTimeout(timer);
    }, [languagesFrameworks]);

    return (
        <div className="skills-wrapper" id="skills">
            <div className="container skills-section px-md-5">
                <div className="row">
                    <div className="col">
                        <h2 className="section-title">{t('sidebar.skills')}</h2>

                        <div className="skills-content">
                            <div className="skills-category fade-in">
                                <h3 className="category-title">{t('skills.languagesFrameworksTitle')}</h3>
                                <div className="main-skills-grid">
                                    {languagesFrameworks.map((skill, index) => (
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
                            </div>

                            <div className="skills-category fade-in">
                                <h3 className="category-title">{t('skills.toolsPlatformsTitle')}</h3>
                                <ul className="tech-list">
                                    {toolsPlatforms.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="skills-category fade-in">
                                <h3 className="category-title">{t('skills.practicesTitle')}</h3>
                                <ul className="tech-list">
                                    {practices.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
