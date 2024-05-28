import React, { useState } from "react";
import "./sidebar.css";

function Sidebar({ changeLanguage }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState('pt');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        changeLanguage(lang);
    };

    const ptFlag = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
            <circle cx="256" cy="256" r="256" fill="#6da544" />
            <polygon points="256,78.1 431.1,256 256,433.9 80.9,256" fill="#ffda44" />
            <circle cx="256" cy="256" r="89.5" fill="#f0f0f0" />
            <path d="M370.5 301.1c-14.6-14.1-37.8-26.1-71.3-31.4-14.7-2.4-41.4-7.2-75.1-3.5-27.5 2.9-57.1 12.5-86.8 28.8 14.6 14.1 37.8 26.1 71.3 31.4 14.7 2.4 41.4 7.2 75.1 3.5 27.6-2.9 57.1-12.5 86.8-28.8z" fill="#0052b4" />
            <path d="M207.6 229.1c-5.8 6.5-10.6 13.7-14.2 21.5 8.1-4.1 17.1-7.7 26.9-10.6-1.4-4.3-2.4-8.7-3.2-13.2h-9.5z" fill="#ff9811" />
            <path d="M210.2 210.4c2.1 8.1 5.3 16.7 9.6 25.6 5.4-1 11-1.8 16.8-2.1-5.7-11.5-12.7-22.1-20.8-31.5-1.9 2.8-3.7 5.7-5.6 8.6z" fill="#ff9811" />
        </svg>
    );

    const enFlag = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20">
            <rect width="512" height="512" fill="#f0f0f0" />
            <g fill="#d80027">
                <rect y="38.4" width="512" height="38.4" />
                <rect y="115.2" width="512" height="38.4" />
                <rect y="192" width="512" height="38.4" />
                <rect y="268.8" width="512" height="38.4" />
                <rect y="345.6" width="512" height="38.4" />
                <rect y="422.4" width="512" height="38.4" />
            </g>
            <rect width="232.8" height="269.3" fill="#0052b4" />
            <g fill="#f0f0f0">
                <polygon points="34.6 44.8 44.8 44.8 44.8 34.6 55 34.6 55 44.8 65.2 44.8 65.2 55 55 55 55 65.2 44.8 65.2 44.8 55 34.6 55" />
                <polygon points="89.6 44.8 99.8 44.8 99.8 34.6 110 34.6 110 44.8 120.2 44.8 120.2 55 110 55 110 65.2 99.8 65.2 99.8 55 89.6 55" />
                {/* Add more stars as needed */}
            </g>
        </svg>
    );

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
                <div className="languages">
                    <ul>
                        <li className="nav__item language">
                            <input type="checkbox" id="check" class="switch-button" onClick={() => handleLanguageChange(language === 'en' ? 'pt' : 'en')} data-translate={language === 'en' ? 'portuguese' : 'english'} />
                            <label for="check"></label>
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
    );
}

export default Sidebar;
