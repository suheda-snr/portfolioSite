import React from 'react';
import useTypingAnimation from '../hooks/useTypingAnimation';

interface TypingTextProps {
    text: string;
    start: boolean;
    className?: string;
    typingSpeed?: number;
}

const TypingText: React.FC<TypingTextProps> = ({ text, start, className, typingSpeed = 100 }) => {
    const { displayedText, isTyping } = useTypingAnimation(text, typingSpeed, start);

    return (
        <span className={className}>
            {displayedText}
            {isTyping && <span className="typing-cursor">|</span>}
        </span>
    );
};

export default TypingText;