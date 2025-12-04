import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/home/ExperienceSection.css';

const ExperienceSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="experience-wrapper">
            <div className="container experience-section px-md-5">
                <h2 className="section-title">{t('experience.title')}</h2>
                <div className="experience-content">
                    <div className="experience-item">
                        <div className="experience-header">
                            <div>
                                <h3 className="experience-role">{t('experience.role')}</h3>
                                <h4 className="experience-company">{t('experience.company')}</h4>
                            </div>
                            <span className="experience-period">{t('experience.period')}</span>
                        </div>
                        <p className="experience-description">{t('experience.description')}</p>
                        <div className="experience-about">
                            <h5 className="experience-about-title">{t('experience.aboutCompany')}</h5>
                            <p className="experience-about-text">{t('experience.companyDescription')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;
