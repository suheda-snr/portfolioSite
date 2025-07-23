import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Layout.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <header className="layoutHeader">
                <div className="logoContainer">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>
                </div>
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <a href="#projects">Projects</a>
                    <a href="#blogs">Skills</a>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
};

export default Layout;
