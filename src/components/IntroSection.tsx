import React, { useState, useEffect } from 'react';
import TypingText from './TypingText';
import { useTranslation } from 'react-i18next';

import '../styles/IntroSection.css';
import profilePic from '../assets/profilePic.png';

const IntroSection: React.FC = () => {
    const { t, i18n } = useTranslation();

    const [showGreeting, setShowGreeting] = useState(true);
    const [showName, setShowName] = useState(false);
    const [typedParagraphs, setTypedParagraphs] = useState<string[]>([]);

    useEffect(() => {
        setTypedParagraphs([]);
        const introParagraphs: string[] = t('intro.paragraphs', { returnObjects: true }) as string[];

        const charTypingDelay = 100;
        const greetingDuration = t('intro.greeting').length * charTypingDelay;
        const nameDuration = t('intro.name').length * charTypingDelay;

        const timer1 = setTimeout(() => setShowName(true), greetingDuration + 50);

        let cumulativeDelay = greetingDuration + nameDuration + 150;
        const timers = introParagraphs.map((para, index) => {
            const paraDuration = para.length * charTypingDelay;
            const timer = setTimeout(() => {
                setTypedParagraphs((prev) => [...prev, para]);
            }, cumulativeDelay);
            cumulativeDelay += paraDuration + 250;
            return timer;
        });

        return () => {
            clearTimeout(timer1);
            timers.forEach((timer) => clearTimeout(timer));
        };
    }, [t, i18n.language]);

    return (
        <div className="intro-wrapper">
            <div className="container intro-section px-4 px-md-5">
                <div className="row align-items-center">
                    <section id="intro" className="col-lg-6 text-section mb-4 mb-lg-0">
                        <TypingText
                            text={t('intro.greeting')}
                            start={showGreeting}
                            className="greeting-text"
                            typingSpeed={100}
                        />
                        <br />
                        <TypingText
                            text={t('intro.name')}
                            start={showName}
                            className="name-text"
                            typingSpeed={100}
                        />
                        {typedParagraphs.map((para, i) => (
                            <div key={i} className="paragraph-container">
                                <TypingText text={para} start={true} className="paragraph-text" typingSpeed={100} />
                            </div>
                        ))}
                    </section>
                    <div className="col-lg-6 text-center image-section">
                        <img src={profilePic} alt={t('intro.name')} className="profile-image img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroSection;