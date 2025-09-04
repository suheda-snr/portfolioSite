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
            <header className="layoutHeader navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>
                    <button
                        className="navbar-toggler custom-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center gap-3">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">{t('nav.home')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects">{t('nav.projects')}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs">{t('nav.blogs')}</Link>
                            </li>
                            <li className="nav-item">
                                <button onClick={toggleLanguage} className="language-toggle-button nav-link">
                                    <ReactCountryFlag
                                        countryCode={i18n.language === 'en' ? 'GB' : 'FI'}
                                        svg
                                        style={{ width: '1.5em', height: '1.5em', marginRight: '0.5em' }}
                                    />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header >
            <main>{children}</main>
        </>
    );
};

export default Layout;