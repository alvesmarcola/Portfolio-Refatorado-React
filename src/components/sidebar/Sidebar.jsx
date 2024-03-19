import React, { useState } from "react";
import "./sidebar.css";

function Sidebar({ changeLanguage }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleLanguageChange = (lang) => {
        changeLanguage(lang);
        closeMenu();
    };

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link" data-translate="home"><i className="uil uil-airplay nav__icon"></i>Ínicio</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link" data-translate="about"><i className="uil-user nav__icon"></i>Sobre mim</a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link" data-translate="services"><i className="uil uil-briefcase-alt nav__icon"></i>Serviços</a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link" data-translate="skills"><i className="uil uil-file-alt nav__icon"></i>Habilidades</a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link"><i className="uil uil-scenery nav__icon"></i>Portfolio</a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" id="nav-close" onClick={closeMenu}></i>
                </div>
                <div className="langueges">
                    <ul>
                        <li className="nav__item language">
                            <a href="#" onClick={() => handleLanguageChange('en')} data-translate="english">EN</a>
                        </li>
                        <li className="nav__item language">
                            <a href="#" onClick={() => handleLanguageChange('pt')} data-translate="portuguese">PT</a>
                        </li>
                    </ul>
                </div>

                <div className="nav__btns">
                    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Sidebar;
