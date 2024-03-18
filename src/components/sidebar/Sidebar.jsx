import React from "react";
import "./sidebar.css";

const Sidebar = () => {
    return (
        <aside className="aside">
            <a href="#home" className="nav__logo">
                <img src="{Logo}" alt="" />
            </a>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link"></a>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link"></a>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link"></a>
                        </li>
                        <li className="nav__item">
                            <a href="" className="nav__link"></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar