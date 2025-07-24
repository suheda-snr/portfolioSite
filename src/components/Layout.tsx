import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';
import logo from '../assets/logo.png';
import '../styles/Layout.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'fi' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <>
            <header className="layoutHeader">
                <div className="logoContainer">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>
                </div>
                <nav className="navbar">
                    <Link to="/">{t('nav.home')}</Link>
                    <a href="#projects">{t('nav.projects')}</a>
                    <a href="#blogs">{t('nav.skills')}</a>
                    <button onClick={toggleLanguage} className="language-toggle-button">
                        <ReactCountryFlag
                            countryCode={i18n.language === 'en' ? 'GB' : 'FI'}
                            svg
                            style={{ width: '1.5em', height: '1.5em', marginRight: '0.5em' }}
                        />
                    </button>
                </nav>
            </header>
            <main>{children}</main>
        </>
    );
};

export default Layout;