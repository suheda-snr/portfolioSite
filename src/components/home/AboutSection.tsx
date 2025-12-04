import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/home/AboutSection.css';

const AboutSection: React.FC = () => {
    const { t } = useTranslation();
    const techList = t('about.techList', { returnObjects: true }) as string[];

    return (
        <div className="about-wrapper">
            <div className="container about-section px-md-5">
                <div className="row">
                    <div className="col">
                        <h2 className="mb-4">{t('about.title')}</h2>
                        <div className="about-content">
                            <div className="content-wrapper">
                                <p>{t('about.description')}</p>
                                <p>{t('about.story')}</p>
                                <p>{t('about.experience')}</p>
                                <p><strong>{t('about.techIntro')}</strong></p>
                                <ul className="tech-list">
                                    {techList.map((tech, index) => (
                                        <li key={index}>{tech}</li>
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

export default AboutSection;