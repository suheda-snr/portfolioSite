import { useState, useEffect } from 'react';

function useTypingAnimation(
    text: string,
    typingSpeed: number = 100,
    start: boolean
): { displayedText: string; isTyping: boolean } {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (!start) {
            setDisplayedText('');
            setIsTyping(false);
            return;
        }

        setDisplayedText('');
        setIsTyping(true);
        let index = 0;

        const intervalId = setInterval(() => {
            setDisplayedText(text.slice(0, index + 1));
            index++;

            if (index >= text.length) {
                setIsTyping(false); // Stop cursor when typing is complete
                clearInterval(intervalId);
            }
        }, typingSpeed);

        return () => {
            clearInterval(intervalId);
            setIsTyping(false);
        };
    }, [text, typingSpeed, start]);

    return { displayedText, isTyping };
}

export default useTypingAnimation;