import React from 'react';
import '../styles/SocialSidebar.css';

const SocialSidebar: React.FC = () => {
    return (
        <div className="social-sidebar">
            <a href="mailto:sener.suheda@hotmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24">
                    <path d="M12 13.5L2 6.75V18h20V6.75L12 13.5zM12 11.25L22 4.5H2l10 6.75z" />
                </svg>
            </a>

            <a href="https://github.com/suheda-snr" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24">
                    <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.5-4-1.5-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1 .1 1.6 1 1.6 1 .9 1.6 2.3 1.2 2.9.9.1-.7.4-1.2.8-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.4 0 0 1-.3 3.3 1.2a11.6 11.6 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.8.2 3.1.1 3.4.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.6.8.5A12 12 0 0012 .5z" />
                </svg>
            </a>

            <a href="https://linkedin.com/in/suheda-sener" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24">
                    <path d="M20.5 3h-17A1.5 1.5 0 002 4.5v15A1.5 1.5 0 003.5 21h17a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0020.5 3zM8.3 18H5.7V9.5h2.6V18zm-1.3-9.6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM18.3 18h-2.6v-4.1c0-1-.4-1.6-1.2-1.6-.6 0-1.1.4-1.3.9-.1.2-.1.5-.1.8V18h-2.6V9.5h2.6v1.2a2.4 2.4 0 012.2-1.2c1.6 0 2.8 1 2.8 3.3V18z" />
                </svg>
            </a>

            <div className="sidebar-line" />
        </div>
    );
};

export default SocialSidebar;
