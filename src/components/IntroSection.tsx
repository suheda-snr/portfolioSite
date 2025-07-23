import React, { useState, useEffect } from 'react';
import TypingText from './TypingText';
import '../styles/IntroSection.css';
import profilePic from '../assets/profilePic.png';

const introParagraphs = [
    'I build things for the web.',
    'I’m an IT student passionate about developing practical and meaningful digital experiences — from automating tasks to building dynamic web applications.',
    'Currently, I’m exploring full-stack development, automation, and cloud platforms to create accessible, user-centered projects.',
];

const IntroSection: React.FC = () => {
    const [showGreeting, setShowGreeting] = useState(true);
    const [showName, setShowName] = useState(false);
    const [typedParagraphs, setTypedParagraphs] = useState<string[]>([]);

    useEffect(() => {
        const charTypingDelay = 100;
        const greetingDuration = 'Hi, my name is'.length * charTypingDelay;
        const nameDuration = 'Suheda Sener'.length * charTypingDelay;

        // Show name after greeting is done
        const timer1 = setTimeout(() => setShowName(true), greetingDuration + 50);

        // Calculate cumulative duration for paragraphs
        let cumulativeDelay = greetingDuration + nameDuration + 150;

        const timers = introParagraphs.map((para, index) => {
            const paraDuration = para.length * charTypingDelay;
            const timer = setTimeout(() => {
                setTypedParagraphs(prev => [...prev, para]);
            }, cumulativeDelay);
            cumulativeDelay += paraDuration + 250;
            return timer;
        });

        return () => {
            clearTimeout(timer1);
            timers.forEach(timer => clearTimeout(timer));
        };
    }, []);

    return (
        <div className="intro-container">
            <section id="intro" className="text-section">
                <TypingText
                    text="Hi, my name is"
                    start={showGreeting}
                    className="greeting-text"
                    typingSpeed={100}
                />
                <br />
                <TypingText
                    text="Suheda Sener"
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
            <div className="image-section">
                <img src={profilePic} alt="Suheda Sener" className="profile-image" />
            </div>
        </div>
    );
};

export default IntroSection;